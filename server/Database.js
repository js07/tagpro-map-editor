var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

function Database() {
    var url = 'mongodb://localhost:27017/tagpro-map-editor';
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      console.log("Connected correctly to server");

      this.db = db;
    });
}

Database.prototype.insertMap = function(data, callback) {
    var collection = db.collection('maps');
    data.creationDate = new Date();
    collection.insertOne(data, function(err, result) {
        assert.equal(err, null);
        callback(result);
    });
};

Database.prototype.findMaps = function(data, callback) {
    var collection = db.collection('maps');
    collection.find(data).addQueryModifier('$orderby', {id:-1}).toArray(function(err, results) {
        assert.equal(err, null);
        callback(results);
    });
};

Database.prototype.updateMap = function(search, data, callback) {
    var collection = db.collection('maps');
    collection.updateOne(search, {$set: data}, {upsert: true}, function(err, result) {
        assert.equal(err, null);
        callback(result);
    });
};

Database.prototype.latestMap = function(room, callback) {
    var collection = db.collection('maps');
    collection.find({ room: room }).addQueryModifier('$orderby', {id:-1}).limit(1).toArray(function(err, results) {
        assert.equal(err, null);
        callback(results);
    });
};

Database.prototype.mapsInfo = function(data, callback) {
    this.findMaps(data, function(results) {
        results = results.map(function(obj) {
            return { id: obj.id, name: obj.name, creationDate: obj.creationDate, manual: obj.manual };
        });
        callback(results);
    });
};

Database.prototype.getMap = function(room, id, callback) {
    this.findMaps({ room: room, id: parseInt(id, 10) }, function(results) {
        callback(results[0] || null);
    });
};

function newDatabase() {
    return new Database();
}

module.exports = newDatabase;