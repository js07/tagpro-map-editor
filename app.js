var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');
var exec = require("child_process").exec;
var db = require('./server/Database')();

var escapeQuote = function(string) {
    var newStr = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "\"") {
            newStr += "\\\"";
        }
        else if (string[i] === "\\") {
            newStr += "\\\\";
        }
        else {
            newStr += string[i];
        }
    }
    return newStr;
};


var rooms = {};

var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


/////////////////////////////// Routes ///////////////////////////////////////

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/public/create.html'));
});

app.post('/test.php', function(req, res) {
    req.body.logic = req.body.logic || "";
    req.body.layout = req.body.layout || "";
    req.body.server = req.body.server || "";
    req.body.url = req.body.url || "";
    req.body.cloud = req.body.cloud || "";
    var command = "php public/test.php" + " \"" + escapeQuote(req.body.logic) + "\" \"" + escapeQuote(req.body.layout) + "\" \"" + escapeQuote(req.body.server) + "\" \"" + escapeQuote(req.body.url) + "\" \"" + escapeQuote(req.body.cloud) + "\"" ;
    exec(command, function (error, stdout, stderr) {
        res.send(stdout);
    });
});

app.use(express.static(__dirname + '/public'));

app.get('/:room', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});


app.get('*', function(req, res) {
  res.redirect('/');
});

////////////////////////////// Start listening ///////////////////////////////////////////

server.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});

//////////////////////////////// Functions ////////////////////////////////////////

var sendDetails = function(room) {
  var users = rooms[room].sockets.filter(function(obj) {
    return obj.username !== 'hidden';
  });
  users = users.map(function(obj) {
    return { username: obj.username, color: obj.color, idNum: obj.idNum };
  });
  io.to(room).emit('details', { users: users});
};


////////////////////////////// Socket Handlers /////////////////////////////////////////////////

// Don't connect user to room until they are ready
// When they connect to page, send them the map
// When they are ready, send the actions they are missing and join/connect to room with socket

io.on('connection', function (socket) {

  socket.on('roomConnect', function(data) {

    socket.room = data.room;

    if (!rooms[data.room]) { // new room
        rooms[data.room] = {sockets: [], conCount: 1, actions: [], previousActions: [], fileCount: 0, lastSaved: { png: "", json: ""}, tick: true };
        rooms[data.room].leader = socket.id;
        db.latestMap(data.room, function(result) { // latest saved map
          if (result.length > 0) {
            rooms[data.room].fileCount = result[0].id;
            rooms[data.room].files = result[0].files;
            rooms[data.room].lastSaved.png = result[0].files.png;
            rooms[data.room].lastSaved.json = result[0].files.json;
          }
          db.getMap( data.room, 0, function(result) {  // most recent map... (id: 0)
              if (result) {
                  rooms[data.room].files = result.files;
                  if (result.mapInfo) rooms[data.room].mapInfo = result.mapInfo;
              }
              if (rooms[data.room].files) {
                  io.to(socket.id).emit('pullFromServer', {isJoin: true, files:rooms[socket.room].files, /*actions: rooms[socket.room].actions,*/ mapInfo: rooms[socket.room].mapInfo });
              }
          });
        });
    }
    else { // room exists
      if (rooms[data.room].files) {
        io.to(socket.id).emit('pullFromServer', {isJoin: true, files:rooms[socket.room].files, /*actions: rooms[socket.room].actions,*/ mapInfo: rooms[socket.room].mapInfo });
      }
    }

    socket.username = ((data.username === '' || data.username.indexOf('Some Ball') >= 0) ? ('Some Ball ' + rooms[data.room].conCount) : data.username);
    socket.idNum = rooms[data.room].conCount;
    socket.color = data.color;

    rooms[data.room].sockets.push(socket);
    rooms[data.room].conCount++;
    // socket.join(data.room); // don't join until ready

    io.to(socket.id).emit('roomConnect', { username: socket.username, idNum: socket.idNum });
    sendDetails(socket.room);
    db.mapsInfo({room:socket.room}, function(results) {
      if (results) io.to(socket.id).emit('history', { maps: results });
    });
  });

  socket.on('readyForActions', function(data) { // READY FOR ACTION!
    socket.join(socket.room);
    var room = rooms[socket.room];
    var actions = (data.tick === room.tick) ? room.actions : room.previousActions.concat(room.actions);
    io.to(socket.id).emit('actions', { actions: actions });
    sendDetails(socket.room);
  });

  socket.on('disconnect', function(data) {
    if (!socket.room) return;
    rooms[socket.room].sockets = rooms[socket.room].sockets.filter(function(s) {
      return s.id !== socket.id;
    });
    if (rooms[socket.room].sockets.length === 0) {
        delete rooms[socket.room];
    }
    else {
        rooms[socket.room].leader = rooms[socket.room].sockets[0].id;
        sendDetails(socket.room);
    }
  });

  socket.on('action', function(data) {
    if (!socket.room) return;
    data.idNum = socket.idNum;
    data.color = socket.color;
    socket.broadcast.to(socket.room).emit('action', data);
    rooms[socket.room].actions.push(data);
  });

  socket.on('syncToServer', function(data) {
    if (!socket.room) return;
    var room = rooms[socket.room];
    if (socket.id === room.leader || data.isImport) {
        room.files = data.files;
        room.mapInfo = data.mapInfo;
        room.previousActions = room.actions;
        room.actions = [];
        room.tick = !room.tick;
        db.updateMap({ room: socket.room, id: 0}, { id: 0, manual: false, room: socket.room, files: room.files, name: data.mapInfo.name, creationDate: new Date(), mapInfo: data.mapInfo }, function() {
        });
    }
    if (data.force || (data.save && (socket.id === room.leader) && (room.files.png !== room.lastSaved.png || room.files.json !== room.lastSaved.json) )) {
      room.fileCount++;
        db.insertMap({ id: room.fileCount, manual: data.force, room: socket.room, files: room.files, name: data.mapInfo.name, save: data.save || false, mapInfo: data.mapInfo }, function() {
          room.lastSaved.png = room.files.png;
          room.lastSaved.json = room.files.json;
          db.mapsInfo({room:socket.room}, function(results) {
            io.to(socket.room).emit('history', { maps: results });
          });
        });
    }
    if (data.pull && room.files) {
        socket.broadcast.to(socket.room).emit('pullFromServer', {files: room.files, mapInfo: room.mapInfo });
    }
  });
  socket.on('pullFromServer', function(data) {
    if (!socket.room) return;
    if (rooms[socket.room].files) {
      io.to(socket.id).emit('pullFromServer', {files: rooms[socket.room].files, mapInfo: room[socket.room].mapInfo, isJoin: data.isJoin || false });
    }
  });
  socket.on('orderPull', function(data) {
    if (!socket.room) return;
    if (rooms[socket.room].files) {
      socket.broadcast.to(socket.room).emit('pullFromServer', {files: rooms[socket.room].files, mapInfo: room[socket.room].mapInfo });
    }
  });

  socket.on('chat', function(data) {
    data.username = socket.username;
    data.color = socket.color;
    io.to(socket.room).emit('chat', data);
  });

  socket.on('details', function(data) {
    socket.username = (data.username.length > 0 && data.username.length < 512) ? data.username : ('Some Ball ' + rooms[socket.room].conCount);
    socket.color = data.color;
    sendDetails(socket.room);
  });

  socket.on('getMap', function(data) {
    db.getMap(socket.room, data.id, function(result) {
      if (result) io.to(socket.room).emit('pullFromServer', {files: result.files, mapInfo: result.mapInfo });
    });
  });

});