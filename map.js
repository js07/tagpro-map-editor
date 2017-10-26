$(function() {
  $('[data-toggle="popover"]').popover();
  var quadrantCoords = {
    "132": [10.5, 7.5],
    "232": [11, 7.5],
    "332": [11, 8],
    "032": [10.5, 8],
    "132d": [0.5, 3.5],
    "232d": [1, 3.5],
    "032d": [0.5, 4],
    "143": [4.5, 9.5],
    "243": [5, 9.5],
    "343": [5, 10],
    "043": [4.5, 10],
    "143d": [1.5, 2.5],
    "243d": [2, 2.5],
    "043d": [1.5, 3],
    "154": [6.5, 9.5],
    "254": [7, 9.5],
    "354": [7, 10],
    "054": [6.5, 10],
    "154d": [9.5, 2.5],
    "254d": [10, 2.5],
    "354d": [10, 3],
    "165": [0.5, 7.5],
    "265": [1, 7.5],
    "365": [1, 8],
    "065": [0.5, 8],
    "165d": [10.5, 3.5],
    "265d": [11, 3.5],
    "365d": [11, 4],
    "176": [1.5, 6.5],
    "276": [2, 6.5],
    "376": [2, 7],
    "076": [1.5, 7],
    "276d": [9, 1.5],
    "376d": [9, 2],
    "076d": [8.5, 2],
    "107": [6.5, 8.5],
    "207": [7, 8.5],
    "307": [7, 9],
    "007": [6.5, 9],
    "207d": [11, 1.5],
    "307d": [11, 2],
    "007d": [10.5, 2],
    "110": [4.5, 8.5],
    "210": [5, 8.5],
    "310": [5, 9],
    "010": [4.5, 9],
    "110d": [0.5, 1.5],
    "310d": [1, 2],
    "010d": [0.5, 2],
    "121": [9.5, 6.5],
    "221": [10, 6.5],
    "321": [10, 7],
    "021": [9.5, 7],
    "121d": [2.5, 1.5],
    "321d": [3, 2],
    "021d": [2.5, 2],
    "142": [1.5, 7.5],
    "242": [2, 7.5],
    "042": [1.5, 8],
    "142d": [10.5, 0.5],
    "242d": [11, 0.5],
    "042d": [10.5, 1],
    "153": [5.5, 6.5],
    "253": [6, 6.5],
    "353": [6, 7],
    "053": [5.5, 7],
    "153d": [5.5, 0.5],
    "253d": [6, 0.5],
    "164": [9.5, 7.5],
    "264": [10, 7.5],
    "364": [10, 8],
    "164d": [0.5, 0.5],
    "264d": [1, 0.5],
    "364d": [1, 1],
    "175": [4.5, 5.5],
    "275": [5, 5.5],
    "375": [5, 6],
    "075": [4.5, 6],
    "275d": [7, 1.5],
    "375d": [7, 2],
    "206": [4, 9.5],
    "306": [4, 10],
    "006": [3.5, 10],
    "206d": [2, 3.5],
    "306d": [2, 4],
    "006d": [1.5, 4],
    "117": [5.5, 2.5],
    "217": [6, 2.5],
    "317": [6, 4],
    "017": [5.5, 4],
    "317d": [6, 3],
    "017d": [5.5, 3],
    "120": [7.5, 9.5],
    "320": [8, 10],
    "020": [7.5, 10],
    "120d": [9.5, 3.5],
    "320d": [10, 4],
    "020d": [9.5, 4],
    "131": [6.5, 5.5],
    "231": [7, 5.5],
    "331": [7, 6],
    "031": [6.5, 6],
    "131d": [4.5, 1.5],
    "031d": [4.5, 2],
    "141": [7.5, 8.5],
    "241": [8, 8.5],
    "323": [4, 5],
    "041": [7.5, 9],
    "141d": [8.5, 3.5],
    "041d": [8.5, 4],
    "152": [8.5, 7.5],
    "252": [9, 7.5],
    "334": [2, 0],
    "052": [8.5, 8],
    "152d": [3.5, 0.5],
    "252d": [4, 0.5],
    "163": [2.5, 7.5],
    "263": [3, 7.5],
    "363": [3, 8],
    "045": [9.5, 0],
    "163d": [7.5, 0.5],
    "263d": [8, 0.5],
    "174": [3.5, 8.5],
    "274": [4, 8.5],
    "374": [4, 9],
    "056": [7.5, 5],
    "274d": [3, 3.5],
    "374d": [3, 4],
    "167": [7.5, 6.5],
    "205": [10, 8.5],
    "305": [10, 9],
    "005": [9.5, 9],
    "205d": [2, 0.5],
    "305d": [2, 1],
    "170": [6.5, 7.5],
    "216": [9, 9.5],
    "316": [9, 10],
    "016": [8.5, 10],
    "316d": [10, 5],
    "016d": [9.5, 5],
    "127": [2.5, 9.5],
    "201": [5, 7.5],
    "327": [3, 10],
    "027": [2.5, 10],
    "327d": [2, 5],
    "027d": [1.5, 5],
    "130": [1.5, 8.5],
    "212": [4, 6.5],
    "330": [2, 9],
    "030": [1.5, 9],
    "130d": [9.5, 0.5],
    "030d": [9.5, 1],
    "151": [10.5, 9.5],
    "251": [11, 9.5],
    "324": [0, 7],
    "051": [10.5, 10],
    "151d": [10.5, 4.5],
    "324d": [0, 0],
    "162": [8.5, 10.5],
    "262": [9, 10.5],
    "335": [6, 8],
    "035": [5.5, 8],
    "162d": [3.5, 2.5],
    "262d": [8, 2.5],
    "173": [0.5, 9.5],
    "273": [1, 9.5],
    "373": [1, 10],
    "046": [11.5, 7],
    "046d": [11.5, 0],
    "273d": [1, 4.5],
    "157": [11.5, 8.5],
    "204": [0, 5.5],
    "304": [0, 5],
    "057": [11.5, 9],
    "204d": [0, 4.5],
    "304d": [0, 6],
    "160": [11.5, 7.5],
    "215": [8, 6.5],
    "315": [8, 7],
    "015": [7.5, 7],
    "160d": [2.5, 4.5],
    "315d": [9, 3],
    "171": [5.5, 10.5],
    "271": [6, 10.5],
    "326": [6, 5],
    "026": [5.5, 5],
    "326d": [7, 5],
    "026d": [4.5, 5],
    "137": [3.5, 6.5],
    "202": [0, 7.5],
    "337": [4, 7],
    "037": [3.5, 7],
    "202d": [9, 4.5],
    "037d": [2.5, 3],
    "140": [11.5, 5.5],
    "213": [0, 8.5],
    "313": [0, 9],
    "040": [11.5, 5],
    "140d": [11.5, 4.5],
    "040d": [11.5, 6],
    "161": [9.5, 10.5],
    "261": [10, 10.5],
    "325": [9, 6],
    "025": [8.5, 6],
    "161d": [3.5, 1.5],
    "325d": [4, 1],
    "172": [1.5, 10.5],
    "272": [2, 10.5],
    "336": [3, 6],
    "036": [2.5, 6],
    "036d": [7.5, 1],
    "272d": [8, 1.5],
    "147": [4.5, 7.5],
    "203": [4, 3.5],
    "303": [4, 4],
    "047": [4.5, 8],
    "047d": [8.5, 5],
    "203d": [8, 4.5],
    "150": [7.5, 3.5],
    "214": [7, 7.5],
    "314": [7, 8],
    "050": [7.5, 4],
    "150d": [3.5, 4.5],
    "314d": [3, 5],
    "100": [5.5, 5.5],
    "200": [6, 5.5],
    "300": [6, 6],
    "000": [5.5, 6],
    "100d": [5.5, 8.5],
    "200d": [6, 8.5],
    "300d": [6, 10],
    "000d": [5.5, 10]
  };
  $("#jjlogo").hide();
  if($("#remix").length > 0) {
    $('#loading').modal();
    $.get('/remix', {'mapid':$("#remix").attr("mapid")}, 
    function(data) {
      pngdata = data.pngdata;
      jsondata = data.jsondata;
      $("#mapName").val(jsondata.name);
      restoreFromPngAndJson(pngdata, jsondata, undefined, true);
      $("#remix").remove();
      $("#loading").modal("hide");
      $("#loading").hide();
    });
  }
  else {
    var savedPng = localStorage.getItem('png')
    var savedJson = localStorage.getItem('json')
    restoreFromPngAndJson(savedPng, savedJson, undefined, true);
  }

  $(".editmap").click( function() {
    $("#importExport").modal("hide");
    $("#loading").show()
    $("#loading").modal();
    $.get('/remix', {'mapid':$(this).attr("mapid")}, 
    function(data) {
      pngdata = data.pngdata;
      jsondata = data.jsondata;
      $("#mapName").val(jsondata.name);        
      restoreFromPngAndJson(pngdata, jsondata, undefined, true);
      $("#loading").modal("hide");
      $("#loading").hide()
    })
  });
  
  var importJson;
  var importPng;

  var maxZoom = 3;
  var zoom = maxZoom;
  var tileSize = 40;
  var tileSheetWidth = 16;
  var tileSheetHeight = 11;
  
  function positionCss(x, y, mult) {
    return (mult ? -x*tileSize*mult : -x*tileSize) + 'px ' + (mult ? -y*tileSize*mult : -y*tileSize) + 'px';
  }
  function TileType(name, sheetX, sheetY, r,g,b, toolTipText, extra) {
    this.name = name;
    this.sheetX = sheetX;
    this.sheetY = sheetY;
    this.color = String.fromCharCode(r)+String.fromCharCode(g)+String.fromCharCode(b)+String.fromCharCode(255);
    this.postPlaceFn = extra&&extra.postPlaceFn;
    this.logicFn = extra&&extra.logicFn;
    this.image = extra&&extra.image;
    this.imageTileWidth = extra&&extra.imageTileWidth||5;
    this.imageTileHeight = extra&&extra.imageTileHeight||1;
    this.multiplier = extra&&extra.multiplier||1;
    this.wallSolids = (extra&&extra.wallSolids)|0;
    this.rgb = r | (g<<8) | (b<<16);
    this.opposite = this; // What it switches to when mirrored
    this.verticalMirror = this;
    this.horizontalMirror = this;
    this.plusNinetyRotator = this;
    this.minusNinetyRotator = this;
    this.toolTipText = toolTipText;
  }
  TileType.prototype.isWall = function() {
    return !!this.wallSolids;
  }
  TileType.prototype.positionCss = function() {
    return positionCss(this.sheetX, this.sheetY, this.multiplier);
  }
  TileType.prototype.drawOn = function($elem, tile, onTop) {
    var styleBgColor = '';
    var styleUrl = this.image || $("#tiles").attr("url");
    var styleBackgroundSize = this.image ? (this.imageTileWidth*tileSize+'px ' + this.imageTileHeight*tileSize + 'px') : (tileSheetWidth*tileSize*this.multiplier + 'px ' + tileSheetHeight*tileSize*this.multiplier + 'px');
    if (this.name == 'empty') {
      styleBgColor = 'black';
      styleUrl = '';
    }
    if (styleBgColor != $elem.styleBgColor) {
      if(onTop)
        $(tile.topSquare).css('background-color', styleBgColor);
      else
        $elem.css('background-color', styleBgColor);
      $elem.styleBgColor = styleBgColor;
    }
    if (onTop || styleBackgroundSize != $elem.styleBackgroundSize) {
      if(onTop)
        $(tile.topSquare).css('background-size', styleBackgroundSize);
      else
        $elem.css('background-size', styleBackgroundSize);
      $elem.styleBackgroundSize = styleBackgroundSize;
    }
    if (!onTop && styleUrl != $elem.styleUrl) {
      $elem.css('background-image', styleUrl);
      $elem.styleUrl = styleUrl;
    }
    if (onTop && styleUrl != $elem.topStyleUrl) {
      $(tile.topSquare).css('background-image', styleUrl);
      $elem.topStyleUrl = styleUrl;
    }
    if (tile && tile.quadrantElems) {
      if (this.isWall()) {
        var x = tile.x, y = tile.y;
        // Beware: dragons
        for (var q=0; q<4; q++) { // loop through this tile's four quadrants like a clock: TR, BR, BL, TL
          var mask = (this.wallSolids >> (q<<1)) & 3; // See what is filled in in this quadrant
          
          if (mask==0) {
            tile.quadrantElems[q].style.display='none';
          } else {
            // This quadrant is next to some grid corner. We use some bit patterns to tell which.
            var cornerX = x + ((q&2)==0 ? 1 : 0); 
            var cornerY = y + ((((q+1)&2)==0) ? 0 : 1);
            
            // Figure out the filled/unfilledness of the 8 spots around this corner
            var aroundCorner = 
            (wallSolidsAt(cornerX,cornerY,x==-1 && y==-1,x,y,this)&0xc0)|
            (wallSolidsAt(cornerX-1, cornerY,x==-1 && y==-1,x,y,this)&0x03)| 
            (wallSolidsAt(cornerX-1, cornerY-1,x==-1 && y==-1,x,y,this)&0x0c)| 
            (wallSolidsAt(cornerX, cornerY-1,x==-1 && y==-1,x,y,this)&0x30);
            aroundCorner = aroundCorner|(aroundCorner<<8);
            var startDirection = q*2 + 1; // start pointing through the middle of our own quadrant
            // See how far we can rotate clockwise without falling off the wall
            var cwSteps = 0; 
            while (cwSteps<8 && (aroundCorner & (1<<(startDirection+cwSteps)))) {
              cwSteps++;
            }
            // See how far we can rotate counterclockwise without falling off the wall
            var ccwSteps = 0;
            while (ccwSteps<8 && (aroundCorner & (1<<(startDirection+7-ccwSteps)))) {
              ccwSteps++;
            }
            
            // There is a chip out of this quadrant's corner if it is solid and across from us, on the
            // same tile, is empty. (This is the corner by the center of the tile.)
            var hasChip = mask==3 && (((this.wallSolids|(this.wallSolids<<8)) >> ((q+2)<<1))&3)==0;
            
            var solidStart,solidEnd;
            if (cwSteps==8) {
              // We're surrounded!
              solidStart=solidEnd=0;
            } else {
              // The +4 is because of the mirroredness of looking in the corner instead of around this tile's center
              solidEnd = (startDirection + cwSteps + 4) % 8;
              solidStart = (startDirection - ccwSteps + 12) % 8;
            }
            
            var coords = quadrantCoords[q+''+solidStart+''+solidEnd + (hasChip?'d':'')];
            if (!coords) {
              coords = [5.5,5.5];
            }
            tile.quadrantElems[q].style.display='inline-block';
            tile.quadrantElems[q].style.backgroundPosition = positionCss(coords[0], coords[1]);
          }
        }
        var idx = (isWall(x-1,y)?1:0) | (isWall(x+1,y)?2:0) | (isWall(x,y-1)?4:0) | (isWall(x,y+1)?8:0);
        var coords = [5.5,5.5]/*[
          [0,0], //
          [9,6], // L
          [8,6], // R
          [2,4], // LR
          [0,6], // U
          [6,8], // LU
          [2,8], // RU
          [4,8], // LRU
          [0,2],  // D
          [6,0], // LD
          [2,0], // RD
          [4,0], // LRD
          [4,1], // UD
          [7,4], // LUD
          [0,4], // RUD
          [4,4]  // LRUD
          ][idx];*/        
        $elem.css('background-position', floorType.positionCss())
      } else {
        if (tile && tile.quadrantElems) {
          for (var q=0; q<4; q++) {
            tile.quadrantElems[q].style.display='none';
          }
        }
        if(onTop)
          $(tile.topSquare).css('background-position', this.positionCss());
        else
          $elem.css('background-position', this.positionCss());
      }
    } else {
      if(onTop)
        $(tile.topSquare).css('background-position', this.positionCss());
      else
        $elem.css('background-position', this.positionCss());
    }

    if(onTop)
      $(tile.topSquare).css({'position': 'absolute', 'display': 'inline-block'});
    
  }
    

  function Tool(fns) {
    this.type = fns.type || '';
    this.down = fns.down || function() {};
    this.speculateDrag = fns.speculateDrag || function() {};
    this.speculateUp = fns.speculateUp || function() {};
    this.drag = fns.drag || function() {};
    this.up = fns.up || function() {};
    this.select = fns.select || function() {};
    this.unselect = fns.unselect || function() {};
    this.stateChange = fns.stateChange || function() {}; // arbitrary state change happened -- redraw tool state if necessary
    this.getState = fns.getState || function() {};
    this.setState = fns.setState || function() {};
    this.override = fns.override; //needs to change when shift or ctrl key pressed
  }
  var pencil = new Tool({
    speculateDrag: function(x,y) {
      return new UndoStep([
        new TileState(tiles[x][y], {type:brushTileType})
      ]);
    },
  });
  var brush = new Tool({
    speculateDrag: function(x,y) {
      var changes = [];
      for (var ix=x-1; ix<=x+1; ix++) {
        for (var iy=y-1; iy<=y+1; iy++) {
          if (ix>=0 && iy>=0 && ix<width && iy<height) {
            changes.push(new TileState(tiles[ix][iy], {type:brushTileType}));
          }
        }
      }
      return new UndoStep(changes);
    }
  });

  function lineFn (x0, y0, x1, y1) {
    var deltaX = x1 - x0;
    var deltaY = y1 - y0;
    var y = 0;

    var lineTiles = [];

    if (deltaX == 0) {
      var low = Math.min(y0, y1);
      var high = Math.max(y0, y1);
      for (var yi = low; yi <= high; yi++) {
        lineTiles.push({x: x0, y: yi});
      }

    } else if (deltaY == 0) {
      var left = Math.min(x0, x1);
      var right = Math.max(x0, x1);
      for (var xi = left; xi <= right; xi++) {
        lineTiles.push({x: xi, y: y0});
      }

    } else {
      var slope = deltaY / deltaX;
      var intercept;
      var intercept = y0 - slope * x0;

      if (Math.abs(slope) <= 1) {
        var left = Math.min(x0, x1);
        var right = Math.max(x0, x1);
        for (var xi = left; xi <= right; xi++) {
          var y = slope * xi + intercept;
          lineTiles.push({x: xi, y: Math.round(y)});
        }
      } else {
        var low = Math.min(y0, y1);
        var high = Math.max(y0, y1);
        for (var yi = low; yi <= high; yi++) {
          var x = (yi-intercept) / slope;
          lineTiles.push({x: Math.round(x), y: yi});
        }
      }
    }

    return lineTiles;
  }

  function constrainToSquare(x0, y0, x1, y1) {

    var xPrime, yPrime;
    var xOffset = Math.abs(x1-x0), yOffset = Math.abs(y1-y0);
    var offsetMin = Math.min(xOffset, yOffset);
    if (x1 >= x0 && y1 >= y0) {         // Quadrant I
      xPrime = x0 + offsetMin;
      yPrime = y0 + offsetMin;
    } else if (x1 <= x0 && y1 >= y0) {  // Quadrant II
      xPrime = x0 - offsetMin;
      yPrime = y0 + offsetMin;
    } else if (x1 <= x0 && y1 <= y0) {  // Quadrant III
      xPrime = x0 - offsetMin;
      yPrime = y0 - offsetMin;
    } else  {                           // Quadrant IV
      xPrime = x0 + offsetMin;
      yPrime = y0 - offsetMin;
    }
    return {x: xPrime, y: yPrime};
  }

  var line = new Tool({
    down: function(x,y) {
      this.downX = x;
      this.downY = y;
      console.log('down at ', x,y);
    },
    speculateUp: function(x,y) {
      var coordinates = lineFn(this.downX===undefined?x:this.downX, this.downY===undefined?y:this.downY, x, y);
      var calculatedTiles = [];
      for (var i = 0; i < coordinates.length; i++) {
        calculatedTiles.push(new TileState(tiles[coordinates[i].x][coordinates[i].y], {type: brushTileType}));
      }
      return new UndoStep(calculatedTiles);
    },
    up: function(x,y) {
      this.downX = undefined;
      this.downY = undefined;
    }
  })


  function rectFn (x0, y0, x1, y1, fill) {
    if (shiftDown) { // constrain to diagonal
      var adjustedPoint1 = constrainToSquare(x0,y0,x1,y1);
      x1 = adjustedPoint1.x;
      y1 = adjustedPoint1.y
    }
    var rectTiles = [];
    var left = Math.min(x0, x1);
    var right = Math.max(x0, x1);
    var low = Math.min(y0, y1);
    var high = Math.max(y0, y1);
    for (var xi = left; xi <= right; xi++) {
      for (var yi = low; yi <= high; yi++) {
        var addTile = fill || xi == left || xi == right || yi == low || yi == high;
        if (addTile) {
          rectTiles.push({x: xi, y: yi});
        }
      }
    }
    return rectTiles;
  }

  var rectFill = new Tool({
    override: true,
    down: function(x,y) {
      this.downX = x;
      this.downY = y;
      console.log('down at ', x,y);
    },
    speculateUp: function(x,y) {
      var coordinates = rectFn(this.downX===undefined?x:this.downX, this.downY===undefined?y:this.downY, x, y, true);
      var calculatedTiles = [];
      for (var i = 0; i < coordinates.length; i++) {
        calculatedTiles.push(new TileState(tiles[coordinates[i].x][coordinates[i].y], {type: brushTileType}));
      }
      return new UndoStep(calculatedTiles);
    },
    up: function(x,y) {
      this.downX = undefined;
      this.downY = undefined;
    }
  })

  var rectOutline = new Tool({
    override: true,
    down: function(x,y) {
      this.downX = x;
      this.downY = y;
      console.log('down at ', x,y);
    },
    speculateUp: function(x,y) {
      var coordinates = rectFn(this.downX===undefined?x:this.downX, this.downY===undefined?y:this.downY, x, y, false);
      var calculatedTiles = [];
      for (var i = 0; i < coordinates.length; i++) {
        calculatedTiles.push(new TileState(tiles[coordinates[i].x][coordinates[i].y], {type: brushTileType}));
      }
      return new UndoStep(calculatedTiles);
    },
    up: function(x,y) {
      this.downX = undefined;
      this.downY = undefined;
    }
  })

  // taken from http://members.chello.at/~easyfilter/bresenham.html
  function circleFn (x0, y0, x1, y1, fill) {
    if (shiftDown) { // constrain to diagonal
      var adjustedPoint1 = constrainToSquare(x0,y0,x1,y1);
      x1 = adjustedPoint1.x;
      y1 = adjustedPoint1.y
    }

    var circleTiles = [];
    var a = Math.abs(x1-x0), b = Math.abs(y1-y0), b1 = b&1; /* values of diameter */
    var dx = 4*(1-a)*b*b, dy = 4*(b1+1)*a*a; /* error increment */
    var err = dx+dy+b1*a*a, e2; /* error of 1.step */

    if (x0 > x1) { x0 = x1; x1 += a; } /* if called with swapped points */
    if (y0 > y1) y0 = y1; /* .. exchange them */
    y0 += (b+1)/2; y1 = y0-b1;   /* starting pixel */
    a *= 8*a; b1 = 8*b*b;

    function addToCircleTiles(x, y) {
      var flooredY = Math.floor(y);
      circleTiles.push({x: x, y: flooredY});
      if (fill) {
        for (var yi = Math.floor(y1); yi < flooredY; yi++) {
          circleTiles.push({x: x, y: yi});
        }
      }
    }
    do {
      addToCircleTiles(x1, y0); /*   I. Quadrant */
      addToCircleTiles(x0, y0); /*  II. Quadrant */
      addToCircleTiles(x0, y1); /* III. Quadrant */
      addToCircleTiles(x1, y1); /*  IV. Quadrant */
      e2 = 2*err;
      if (e2 <= dy) { y0++; y1--; err += dy += a; }  /* y step */
      if (e2 >= dx || 2*err > dy) { x0++; x1--; err += dx += b1; } /* x step */
    } while (x0 <= x1);

    while (y0-y1 < b) {  /* too early stop of flat ellipses a=1 */
      addToCircleTiles(x0-1, y0); /* -> finish tip of ellipse */
      addToCircleTiles(x1+1, y0++);
      addToCircleTiles(x0-1, y1);
      addToCircleTiles(x1+1, y1--);
    }
    return circleTiles;
  }

  var circleFill = new Tool({
    override: true,
    down: function(x,y) {
      this.downX = x;
      this.downY = y;
      console.log('down at ', x,y);
    },
    speculateUp: function(x,y) {
      var coordinates = circleFn(this.downX===undefined?x:this.downX, this.downY===undefined?y:this.downY, x, y, true);
      var calculatedTiles = [];
      for (var i = 0; i < coordinates.length; i++) {
        calculatedTiles.push(new TileState(tiles[coordinates[i].x][coordinates[i].y], {type: brushTileType}));
      }
      return new UndoStep(calculatedTiles);
    },
    up: function(x,y) {
      this.downX = undefined;
      this.downY = undefined;
    }
  })

  var circleOutline = new Tool({
    override: true,
    down: function(x,y) {
      this.downX = x;
      this.downY = y;
      console.log('down at ', x,y);
    },
    speculateUp: function(x,y) {
      var coordinates = circleFn(this.downX===undefined?x:this.downX, this.downY===undefined?y:this.downY, x, y, false);
      var calculatedTiles = [];
      for (var i = 0; i < coordinates.length; i++) {
        calculatedTiles.push(new TileState(tiles[coordinates[i].x][coordinates[i].y], {type: brushTileType}));
      }
      return new UndoStep(calculatedTiles);
    },
    up: function(x,y) {
      this.downX = undefined;
      this.downY = undefined;
    }
  })

  var fill = new Tool({
    override: true,
    speculateUp: function(x,y) {
      var targetType = tiles[x][y].type;

      var toChange = [ tiles[x][y] ];

      var changed = [ new TileState(tiles[x][y], {type:brushTileType}) ];
      var inChanged = {};
      while (toChange.length > 0) {

        var tempToChange = [];

        toChange.forEach(function(tile) {
          for (var ix=tile.x-1; ix<=tile.x+1; ix++) {
            for (var iy=tile.y-1; iy<=tile.y+1; iy++) {
              if((shiftDown && (tile.x!=ix || tile.y!=iy)) || Math.abs(tile.x-ix) + Math.abs(tile.y-iy) == 1) {
                if (ix>=0 && iy>=0 && ix<width && iy<height) {
                  var test = tiles[ix][iy];
                  if (test.type == targetType && !inChanged[xy(test)]) {
                    tempToChange.push(test);
                    changed.push(new TileState(test, {type: brushTileType}));
                    inChanged[xy(test)] = true;
                  }
                }
              }
            }
          }
        });
        toChange = tempToChange;
      }
      return new UndoStep(changed);
    }
  })

  var wireCalculatedAffected = {};
  var wire = new Tool({
    type: 'special',
    unselect: function() {
      clearHighlights();
      this.selectedSwitch = null;
    },
    down: function(x,y) {
      this.downX = x;
      this.downY = y;
      wireCalculatedAffected = {};
    },
    up: function(x,y) {
      this.downX = undefined;
      this.downY = undefined;
    },
    stateChange: function() {
      this.refreshHighlights();
    },
    getState: function() {
      //console.log('storing state', this.selectedSwitch && xy(this.selectedSwitch))
      return {selectedSwitch: this.selectedSwitch}
    },
    setState: function(state) {
      this.selectedSwitch = state.selectedSwitch;
      //console.log('restored state', this.selectedSwitch && xy(this.selectedSwitch))
    },
    speculateDrag: function(x,y) {
      if(this.selectedSwitch && this.selectedSwitch.type == switchType) {
        var coordinates = rectFn(this.downX===undefined?x:this.downX, this.downY===undefined?y:this.downY, x, y, true);
        var calculatedTiles = [];
        
        if(!this.selectedSwitch.affected) {
          this.selectedSwitch.affected = {};
        }
        var affected = {};
        for(var key in (this.selectedSwitch.affected||{})) {
          affected[key] = this.selectedSwitch.affected[key];
        }
        
        for (var i = 0; i < coordinates.length; i++) {
          var x = coordinates[i].x;
          var y = coordinates[i].y;
          var tile = tiles[x][y];
          if(tile.type == bombType || tile.type == onFieldType || tile.type == offFieldType || tile.type == redFieldType || tile.type == blueFieldType) {
            var hitKey = xy(tile);          
            if(affected[hitKey]) delete affected[hitKey];
            else affected[hitKey] = tile;
          }
          calculatedTiles.push(new TileState(tile));
        }
        wireCalculatedAffected = affected;
        return new UndoStep(calculatedTiles);
      }
    },
    speculateUp: function(x,y) {
      var tile = tiles[x][y];
      var change = null;
      if (tile.type == portalType) {
        if (this.selectedSwitch && this.selectedSwitch.type == portalType) {
          change = new TileState(this.selectedSwitch, {destination: tile})
          console.log('making destination action to', xy(tile));
          this.selectedSwitch = null;
        } else {
          this.selectedSwitch = tile;
          console.log('selected ', xy(this.selectedSwitch));
        }
      } else if (tile.type == switchType) {
        this.selectedSwitch = tile;
      } else if (this.selectedSwitch && this.selectedSwitch.type == switchType) {
        /*var affected = this.selectedSwitch.affected || ( this.selectedSwitch.affected={});
        var affected = {};
        for (var key in (this.selectedSwitch.affected||{})) {
          affected[key] = this.selectedSwitch.affected[key];
        }
        var hitKey = xy(tile);
        if (affected[hitKey]) delete affected[hitKey];
        else affected[hitKey] = tile;
        */
        change = new TileState(this.selectedSwitch, {affected: wireCalculatedAffected});
      }
      return new UndoStep(change ? [change] : []);
    }
  });
  wire.refreshHighlights = function() {
    clearHighlights();
    if (this.selectedSwitch) {
      this.selectedSwitch.highlight(true);
      if (this.selectedSwitch.type == portalType) {
        if (this.selectedSwitch.destination) {
          this.selectedSwitch.destination.highlight(true);
        }
      } else if (this.selectedSwitch.type == switchType) {
        var sel = this.selectedSwitch.affected || ( this.selectedSwitch.affected={});
        for (var key in sel) {
          sel[key].highlight(true);
        }
      }
    }
  }

  var clipboardReady = false;
  var clipboardTiles = [];
  var clipboardSource = [[]];
  var clipboard = new Tool({
    override: true,
    unselect: function() {
      clipboardReady = false;
      clipboardTiles = [];
      clipboardSource = [[]];
      clearHighlights();
      clearPotentialHighlights();
    },
    down: function(x,y) {
      this.downX = x;
      this.downY = y;
    },
    speculateDrag: function(x,y) {
      if(!clipboardReady) return false;
      
      var size = clipboardTiles.length;
      var changes = [];
      var count = 0;
      if(shiftDown) {
        var clipWidth = clipboardTiles[size-1].x-clipboardTiles[0].x+1;
        var clipHeight = clipboardTiles[size-1].y-clipboardTiles[0].y+1;
        var offset = x-(clipboardTiles[0].x%clipWidth);
        if(offset<0) offset = clipWidth-Math.abs(offset%clipWidth);
        else offset %= clipWidth;
        if(offset>=clipWidth) offset = 0;
        var left = x-offset;
        offset = y-(clipboardTiles[0].y%clipHeight);
        if(offset<0) offset = clipHeight-Math.abs(offset%clipHeight);
        else offset %= clipHeight;
        if(offset>=clipHeight) offset = 0;
        var top = y-offset;
        
        for(var ix = left;ix < left+clipWidth;ix++) {
          for(var iy = top;iy < top+clipHeight;iy++) {
            if (ix>=0 && iy>=0 && ix<width && iy<height) {
              if(!clipboardSource[ix] || !clipboardSource[ix][iy]) {
                var change = $.extend(true, {}, tiles[clipboardTiles[count].x][clipboardTiles[count].y]);
                delete change.x;
                delete change.y;
                changes.push(new TileState(tiles[ix][iy], change));
              }
            }
            count++;
          }
        }
        return new UndoStep(changes);
          
      } else {
        if(controlDown) {
          var center = {x: Math.floor((clipboardTiles[size-1].x+clipboardTiles[0].x)/2), y: Math.floor((clipboardTiles[size-1].y+clipboardTiles[0].y)/2)};
          for(var i = clipboardTiles[0].x;i <= clipboardTiles[size-1].x;i++) {
            for(var j = clipboardTiles[0].y;j <= clipboardTiles[size-1].y;j++) {
              changes.push(new TileState(tiles[i][j], {type: emptyType, redHighlight: true}));
            }
          }
        }
        var center = {x: Math.floor((clipboardTiles[size-1].x+clipboardTiles[0].x)/2), y: Math.floor((clipboardTiles[size-1].y+clipboardTiles[0].y)/2)};
        for(var ix = x-(center.x-clipboardTiles[0].x);ix <= x+(clipboardTiles[size-1].x-center.x);ix++) {
          for(var iy = y-(center.y-clipboardTiles[0].y);iy <= y+(clipboardTiles[size-1].y-center.y);iy++) {
            if (ix>=0 && iy>=0 && ix<width && iy<height) {
              if(controlDown || !clipboardSource[ix] || !clipboardSource[ix][iy]) {
                var change = $.extend(true, {}, tiles[clipboardTiles[count].x][clipboardTiles[count].y]);
                delete change.x;
                delete change.y;
                changes.push(new TileState(tiles[ix][iy], change));
              }
            }
            count++;
          }
        }
        return new UndoStep(changes);
      }
    },
    speculateUp: function(x,y) {
      if(clipboardReady) return false;
      
      var coordinates = rectFn(this.downX===undefined?x:this.downX, this.downY===undefined?y:this.downY, x, y, true);
      var calculatedTiles = [];
      
      clipboardTiles = [];
      clipboardSource = [[]];
      for (var i = 0; i < coordinates.length; i++) {
        var ix = coordinates[i].x;
        var iy = coordinates[i].y;
        calculatedTiles.push(new TileState(tiles[ix][iy]));
        clipboardTiles.push({x: ix, y: iy});
        if(!clipboardSource[ix]) clipboardSource[ix] = [];
        clipboardSource[ix][iy] = true;
      }
      return new UndoStep(calculatedTiles);
    },
    up: function(x,y) {
      this.downX = undefined;
      this.downY = undefined;
      
      if(clipboardReady && controlDown && !shiftDown) selectedTool.unselect.call(selectedTool);
      else if(clipboardTiles.length>1)
      {
        for(var i = 0;i < clipboardTiles.length;i++)
        {
          tiles[clipboardTiles[i].x][clipboardTiles[i].y].highlight(true);
        }
        clipboardReady = true;
      }
    }
  });
  
  var addWidth = new Tool({
    override: true,
    down: function(x,y) {
      this.downX = x;
      this.downY = y;
    },
    speculateDrag: function(x,y) {
      var coordinates = [];
      if(!this.downX) coordinates.push(x);
      else {
        for(var i = 0;i <= Math.abs(x-this.downX);i++) {
          coordinates.push((x>this.downX) ? this.downX+i : x+i);
        }
      }
      var calculatedTiles = [];
      for (var i = 0; i < coordinates.length; i++) {
        for(var j = 0; j < height; j++) {
          calculatedTiles.push(new TileState(tiles[coordinates[i]][j], {mirror: true, redHighlight: controlDown?true:false}));
        }
      }
      return new UndoStep(calculatedTiles);
    },
    up: function(x,y) {
      var extra = Math.abs(x-this.downX)+1;
      var start = Math.min(x,this.downX);
      this.downX = undefined;
      this.downY = undefined;
      
      var canvas = document.createElement('canvas');
      canvas.height = tiles[0].length;
      canvas.width = tiles.length+(controlDown?-extra:extra);
      var ctx = canvas.getContext('2d');
      
      if(!controlDown && canvas.width*canvas.height > 3600)
        addAlert('warning','Warning: Maps larger than 3600 tiles may cause lag and may not be allowed to be tested by normal means',2000);
    
      var tilemap = [[]];
      for(var x = 0;x < width;x++) {
        for(var y = 0;y < height;y++) {
          if(x<start) {
            if(!tilemap[x]) tilemap[x] = [];
            tilemap[x][y] = {x: x, y: y};
          }
          else {
            if(!tilemap[x]) tilemap[x] = [];
            tilemap[x][y] = {x: x+(controlDown?-extra:extra), y: y};
          }
        }
      }
      
      var json = transformLogic(makeLogic(),tilemap);
      var png = getPngBase64Url();
      var image = new Image();
      image.src = png;
      image.onload = function() {
        $('body').css('cursor','wait');
        ctx.webkitImageSmoothingEnabled = ctx.imageSmoothingEnabled = ctx.mozImageSmoothingEnabled = ctx.oImageSmoothingEnabled = ctx.msImageSmoothinEnabled = false;
        ctx.drawImage(image,0,0,start,image.height,0,0,start,image.height);
        ctx.drawImage(image,start+(controlDown?extra:0),0,image.width-start,image.height,start+(controlDown?0:extra),0,image.width-start,image.height);
        png = canvas.toDataURL();
        restoreFromPngAndJson(png, makeLogicString(json), false, false);
      };
      
      $('#addWidth').removeClass('active').blur();
      selectedTool = oldTool;
    }
  });
  
  var addHeight = new Tool({
    override: true,
    down: function(x,y) {
      this.downX = x;
      this.downY = y;
    },
    speculateDrag: function(x,y) {
      var coordinates = [];
      if(!this.downY) coordinates.push(y);
      else {
        for(var i = 0;i <= Math.abs(y-this.downY);i++) {
          coordinates.push((y>this.downY) ? this.downY+i : y+i);
        }
      }
      var calculatedTiles = [];
      for (var i = 0; i < coordinates.length; i++) {
        for(var j = 0; j < width; j++) {
          calculatedTiles.push(new TileState(tiles[j][coordinates[i]], {mirror: true, redHighlight: controlDown?true:undefined}));
        }
      }
      return new UndoStep(calculatedTiles);
    },
    up: function(x,y) {
      var extra = Math.abs(y-this.downY)+1;
      var start = Math.min(y,this.downY);
      this.downX = undefined;
      this.downY = undefined;
      
      var canvas = document.createElement('canvas');
      canvas.height = tiles[0].length+(controlDown?-extra:extra);
      canvas.width = tiles.length;
      var ctx = canvas.getContext('2d');
      
      if(!controlDown && canvas.width*canvas.height > 3600)
        addAlert('warning','Warning: Maps larger than 3600 tiles may cause lag and may not be allowed to be tested by normal means',2000);
      
      var tilemap = [[]];
      for(var x = 0;x < width;x++) {
        for(var y = 0;y < height;y++) {
          if(y<start) {
            if(!tilemap[x]) tilemap[x] = [];
            tilemap[x][y] = {x: x, y: y};
          }
          else {
            if(!tilemap[x]) tilemap[x] = [];
            tilemap[x][y] = {x: x, y: y+(controlDown?-extra:extra)};
          }
        }
      }
      
      var json = transformLogic(makeLogic(),tilemap);
      var png = getPngBase64Url();
      var image = new Image();
      image.src = png;
      image.onload = function() {
        $('body').css('cursor','wait');
        ctx.webkitImageSmoothingEnabled = ctx.imageSmoothingEnabled = ctx.mozImageSmoothingEnabled = ctx.oImageSmoothingEnabled = ctx.msImageSmoothinEnabled = false;
        ctx.drawImage(image,0,0,image.width,start,0,0,image.width,start);
        ctx.drawImage(image,0,start+(controlDown?extra:0),image.width,image.height-start,0,start+(controlDown?0:extra),image.width,image.height-start);
        png = canvas.toDataURL();
        restoreFromPngAndJson(png, makeLogicString(json), false, false);
      };
      
      $('#addHeight').removeClass('active').blur();
      selectedTool = oldTool;
    }
  });

  function clearHighlights() {
    $map.find('.selectionIndicator').css('display', 'none');
  }

  function ensureUnique(placedX, placedY) {
    for (var x=0; x<width; x++) {
      for (var y=0; y<height; y++) {
        if (x==placedX && y==placedY) continue;
        if (tiles[x][y].type == this) {
          tiles[x][y].setType(floorType);
        }
      }
    }
  }

  function Point(sourceOrX, maybeY) {
    if (maybeY) {
      this.x = sourceOrX;
      this.y = maybeY;
    } else {
      this.x = sourceOrX.x;
      this.y = sourceOrX.y;
    }
  }
  Point.cmp = function(a, b) {
    if (!a && !b) return 0;
    if (!a) return 1;
    if (!b) return -1;
    if (a.x != b.x) return a.x - b.x;
    return a.y - b.y;
  }
  var marsBallCount = 0;
  function TileState(source, changes) {
    changes = changes || {};
    this.x = changes.x || source.x; 
    this.y = changes.y || source.y;
    var onTop = (changes.type == marsBallType || changes.type == redSpawnType || changes.type == blueSpawnType)
      || ($.isEmptyObject(changes) && (source.topType == marsBallType || source.topType == redSpawnType || source.topType == blueSpawnType));
    if(onTop)
    {
      this.topType = changes.type || source.topType;
      if(changes.type && this.topType != changes.type)
        this.type = changes.type;
      else if(this.topType != source.type)
        this.type = source.type;
    }
    else
    {
      this.type = changes.type || source.type;
      if(changes.topType)
        this.topType = changes.topType;
      else if(source.topType && (changes.mirror || 'radius' in changes || 'weight' in changes))
        this.topType = source.topType;
    }
    this.affected = [];
    var affectedMap = changes.affected || source.affected || {};
    for (var key in affectedMap) {
      this.affected.push(new Point(affectedMap[key]));
    }
    this.affected.sort(Point.cmp);
    var destTile = changes.destination || source.destination;
    this.destination = destTile && new Point(destTile);
    this.cooldown = 'cooldown' in changes ? changes.cooldown : source.cooldown;
    this.timer = 'timer' in changes ? changes.timer : source.timer;
    this.radius = 'radius' in changes ? changes.radius : source.radius;
    this.weight = 'weight' in changes ? changes.weight : source.weight;
    this.noHighlight = changes.noHighlight;
    this.redHighlight = changes.redHighlight;
  }
  TileState.prototype.equals = function(other) {
    if (this.x!=other.x
      || this.y!=other.y
      || this.type!=other.type
      || this.topType!=other.topType
      || Point.cmp(this.destination, other.destination)
      || this.affected.length != other.affected.length
      || (''+this.cooldown) != (''+other.cooldown)
      || (''+this.timer) != (''+other.timer)
      || (''+this.radius) != (''+other.radius)
      || (''+this.weight) != (''+other.weight)) return false;
    for (var i=0; i<this.affected.length; i++) {
      if (Point.cmp(this.affected[i], other.affected[i])) return false;
    }
    return true;
  }
  TileState.prototype.restoreInto = function(tile) {
    if(this.topType && this.topType != marsBallType)
    {
      if(this.type==tile.type && tile.type != floorType && tile.type != redFloorType && tile.type != blueFloorType) {
        addAlert('danger','Error: You cannot place a spawn tile on top of this type of tile',1500);
        if(tile.topType) this.topType = tile.topType;
        else delete this.topType;
      }
      if(tile.topType == marsBallType) {
        marsBallCount--;
      }
    }
    else if(this.topType)
    {
      if(tile.topType != marsBallType) {
        marsBallCount++;
        if(marsBallCount>2)
        {
          marsBallCount--;
          addAlert('danger','Error: Only 2 mars balls are allowed per map',1500);
        if(tile.topType) this.topType = tile.topType;
        else delete this.topType;
        }
      }
    }
    else
    {
      if(tile.topType == marsBallType) {
        marsBallCount--;
      }
    }
    tile.setType(this.type || tile.type, false);
    tile.setTopType(this.topType);
    tile.affected = {};
    for (var i=0; i<this.affected.length; i++) {
      var a = this.affected[i];
      tile.affected[xy(a)] = tiles[a.x][a.y];
    }
    tile.destination = this.destination && tiles[this.destination.x][this.destination.y];
    tile.cooldown = this.cooldown;
    tile.timer = this.timer;
    tile.radius = this.radius;
    tile.weight = this.weight;
    mayHaveChanged(tile);
  }

  function recordStep() {
    var changes = [];

    if (!backingStates || backingStates.length != tiles.length || backingStates[0].length != tiles[0].length) {
      var size;
      if (backingStates) {
        for (var x=0; x<backingStates.length; x++) {
          for (var y=0; y<backingStates[0].length; y++) {
            if (x>= tiles.length || y>=tiles[0].length || !backingStates[x][y].equals(new TileState(tiles[x][y]))) {
              changes.push(backingStates[x][y]);
            }
          }
        }
        size = new Point({x:backingStates.length, y:backingStates[0].length});
      }
      backingStates = [];
      for (var x=0; x<tiles.length; x++) {
        backingStates[x] = [];
        for (var y=0; y<tiles[x].length; y++) {
          backingStates[x][y] = new TileState(tiles[x][y]);
        }
      }

      dirtyStates = {};
      return new UndoStep(changes, size);
    }
    for (var key in dirtyStates) {
      var newState = new TileState(dirtyStates[key]);
      if (!newState.equals(backingStates[newState.x][newState.y])) {
        changes.push(backingStates[newState.x][newState.y]);
        backingStates[newState.x][newState.y] = newState;
      }
    }
    dirtyStates = {};
    if (!changes.length) return null;
    return new UndoStep(changes, null);
  }

  function savePoint() {
    var step = recordStep();
    if (step) {
      console.log('recording step', step);
      undoSteps.push(step);
      redoSteps = [];
      enableUndoRedoButtons();
    }
  }
  
  function applyStep(step) {
    var tileChanges = step.states;
    if (step.size) {
      var types = [];
      for (var x=0; x<step.size.x; x++) {
        types[x] = [];
        for (var y=0; y<step.size.y; y++) {
          types[x][y] = x<tiles.length && y<tiles[0].length ? tiles[x][y].type : emptyType;
        }
      }
      buildTilesWith(types);
      for (var x=0; x<backingStates.length && x<tiles.length; x++) {
        for (var y=0; y<backingStates[x].length && y<tiles[0].length; y++) {
          backingStates[x][y].restoreInto(tiles[x][y]);
        }
      }
    }

    for (var i=0; i<tileChanges.length; i++) {
      var change = tileChanges[i];
      change.restoreInto(tiles[change.x][change.y]);
    }
    cleanDirtyWalls();
    if (selectedTool) selectedTool.stateChange();
  }
  
  function applyLargeStep(type, changes) {
    var states = [];
    for(var x = 0;x < tiles.length;x++)
    {
      for(var y = 0;y < tiles[x].length;y++)
      {
        if(tiles[x][y].type == type || tiles[x][y].topType == type)
          states.push(new TileState(tiles[x][y], changes));
      }
    }
    if(states.length)
    {
      var change = new UndoStep(states);
      //applySymmetry(change);
      applyStep(change);
    }
  }

  function moveChange(fromSteps, toSteps) {
    if (!fromSteps.length) return;
    
    var step = fromSteps.splice(fromSteps.length-1, 1)[0];
    applyStep(step);
    
    var step = recordStep();
    if (step) {
      toSteps.push(step);
    }
  }

  function enable($elem, enabled) {
    if (enabled) $elem.removeAttr('disabled');
    else $elem.attr('disabled', 'disabled')
  }
  function enableUndoRedoButtons() {
    enable($('#undo'), undoSteps.length);
    enable($('#redo'), redoSteps.length);
  }
  function undo() {
    moveChange(undoSteps, redoSteps);
    enableUndoRedoButtons();
  }
  function redo() {
    moveChange(redoSteps, undoSteps);
    enableUndoRedoButtons();
  }

  function xy(pt) {
    return pt.x + ',' + pt.y;
  }

  var backingStates = null;
  var dirtyStates = {};
  function mayHaveChanged(tile) {
    dirtyStates[xy(tile)] = tile;
  }

  function UndoStep(states, size) {
    this.states = states;
    this.size = size;
  }
  var undoSteps = [];
  var redoSteps = [];

  function setFieldFn(defaultState) {
    return function(logic, tile) {
      logic.fields[tile.x + ',' + tile.y] = {defaultState: defaultState};
    }
  }
  
  var defaultPortalCooldown = 0;
  var defaultButtonTimer = 0;
  var defaultSpawnRadius = 5;
  var defaultSpawnWeight = 1;

  function exportSwitch(logic, tile) {
    var toggles = [];
    for (var key in tile.affected) {
      var affectedTile = tile.affected[key];
      var t = affectedTile.type;
      if (t==bombType || t==onFieldType || t==offFieldType || t==redFieldType || t==blueFieldType) {
        toggles.push({pos: {x: affectedTile.x, y: affectedTile.y}});
      }
    }
    logic.switches[tile.x + ',' + tile.y] = {
      toggle: toggles,
      timer: (tile.timer!=undefined) ? tile.timer : defaultButtonTimer
    };
  }
  function exportPortal(logic, tile) {
    var dest = tile.destination || tile;
    if(tile.x===dest.x && tile.y===dest.y) {
      logic.portals[tile.x + ',' + tile.y] = {};
      if(tile.cooldown!=undefined)
        logic.portals[tile.x + ',' + tile.y] = {cooldown: tile.cooldown};
    } else
      logic.portals[tile.x + ',' + tile.y] = {
        destination: {x: dest.x, y: dest.y},
        cooldown: (tile.cooldown!=undefined) ? tile.cooldown : defaultPortalCooldown
      };
  }
  function exportMarsBall(logic, tile) {
    logic.marsballs.push({y: tile.y,x: tile.x});
  }
  function exportSpawn(logic, tile) {
    var color = (tile.topType == redSpawnType) ? 'red' : 'blue';
    logic.spawnPoints[color].push({x: tile.x, y: tile.y,
      radius: tile.radius || defaultSpawnRadius,
      weight: tile.weight || defaultSpawnWeight
    });
  }

  var floorType, emptyType, 
    wallType, wallTopLeftType, wallTopRightType, wallBottomLeftType, wallBottomRightType,
    blueFlagType, redFlagType, switchType, bombType, onFieldType, offFieldType,
    redFieldType, blueFieldType, portalType, redSpawnType, blueSpawnType, redSpeedpadType, blueSpeedpadType, redFloorType, blueFloorType,
    spikeType, powerupType, speedpadType,
    yellowFlagType, redEndzoneType, blueEndzoneType;
  
  var tileTypes = [
    emptyType = new TileType('empty', 13,5, 0,0,0, "Background"),
    floorType = new TileType('floor',13,4, 212,212,212, "Tile"),
    wallType = new TileType('wall', 15,6, 120,120,120, "Wall", {wallSolids: 0xff}), // encoding: bit 0 is noon, goes clockwise
    wallBottomLeftType = new TileType('wallBottomLeft', 15,7, 128,112,64, "Wall BL", {wallSolids: 0xb4}),
    wallTopLeftType = new TileType('wallTopLeft', 15,9, 64,128,80, "Wall TL", {wallSolids: 0xd2}),
    wallTopRightType = new TileType('wallTopRight', 15,10, 64,80,128, "Wall TR", {wallSolids: 0x4b}),
    wallBottomRightType = new TileType('wallBottomRight', 15,8, 128,64,112, "Wall BR", {wallSolids: 0x2d}),
    switchType = new TileType('switch', 13,6, 185,122,87, "Button - Emits signals to gates and bombs.", {logicFn: exportSwitch}),
    spikeType = new TileType('spike', 12,0, 55,55,55, "Spike"),
    bombType = new TileType('bomb', 12,1, 255,128,0, "Bomb - Receives signals from switches."),
    powerupType = new TileType('powerup', 12,7, 0,255,0, "Powerup"),
    speedpadType = new TileType('speedpad', 0,0, 255,255,0, "Boost", {image: $("#speedpad").attr("url")}),
    blueSpeedpadType = new TileType('blueSpeedpad', 0,0, 115,115,255, "Blue Team Boost", {image: $("#speedpadblue").attr("url")}),
    redSpeedpadType = new TileType('redSpeedpad', 0,0, 255,115,115, "Red Team Boost", {image: $("#speedpadred").attr("url")}),
    redFloorType = new TileType('redFloor', 14,4, 220,186,186, "Red Speed Tile - Increases speed for non-flag-carriers."),
    blueFloorType = new TileType('blueFloor', 15,4, 187,184,221, "Blue Speed Tile - Increases speed for non-flag-carriers."),
    offFieldType = new TileType('offField', 12,3, 0,117,0, "Gate - Default Off", {logicFn: setFieldFn('off')}),
    onFieldType = new TileType('onField', 13,3, 0,117,0, "Gate - Default On", {logicFn: setFieldFn('on')}),
    redFieldType = new TileType('redField', 14,3, 0,117,0, "Gate - Default Red", {logicFn: setFieldFn('red')}),
    blueFieldType = new TileType('blueField', 15,3, 0,117,0, "Gate - Default Blue", {logicFn: setFieldFn('blue')}),
    portalType = new TileType('portal', 0,0, 202, 192,0, "Portal - Link two portals using the wire tool.", {image: $("#portal").attr("url"), logicFn: exportPortal}),
    redFlagType = new TileType('redFlag', 14,1, 255,0,0, "Red Flag"),
    blueFlagType = new TileType('blueFlag', 15,1, 0,0,255, "Blue Flag"),
    redSpawnType = new TileType('redSpawn', 14,0, 155,0,0, "Red Spawn Tile - Red balls will spawn within a certain radius of this tile.", {logicFn: exportSpawn}),
    blueSpawnType = new TileType('blueSpawn', 15,0, 0,0,155, "Blue Spawn Tile - Blue balls will spawn within a certain radius of this tile.", {logicFn: exportSpawn}),
    yellowFlagType = new TileType('yellowFlag', 13,1, 128,128,0, "Yellow Flag - Bring this neutral flag to your zone to score."),
    redEndzoneType = new TileType('redEndzone', 14,5, 185,0,0, "Red Endzone - Bring a neutral (yellow) flag to this zone to score."),
    blueEndzoneType = new TileType('blueEndzone', 15,5, 25,0,148, "Blue Endzone - Bring a neutral (yellow) flag to this zone to score."),
    gravityWellType = new TileType('gravityWell', 0, 0, 32,32,32, "Gravity Well - Pulls nearby balls to their splat.", {image: $("#gravitywell").attr("url"), imageTileWidth: 1, imageTileHeight: 1}),
    marsBallType = new TileType('marsBall', 12,9, 256,256,256, "Mars Ball - Push it onto the opponent's flag to win.", {logicFn: exportMarsBall, multiplier: 0.5}),
  ];

  function areOpposites(t1, t2) {
    t1.opposite = t2;
    t2.opposite = t1; 
  }
  function areVerticalMirrors(t1, t2) {
    t1.verticalMirror = t2;
    t2.verticalMirror = t1;
  }
  function areHorizontalMirrors(t1, t2) {
    t1.horizontalMirror = t2;
    t2.horizontalMirror = t1;
  }
  function isPlusNinetyRotator(t1, t2) {
    t1.plusNinetyRotator = t2;
  }
  function isMinusNinetyRotator(t1, t2) {
    t1.minusNinetyRotator = t2;
  }
  areOpposites(redSpeedpadType, blueSpeedpadType);
  areOpposites(redFloorType, blueFloorType);
  areOpposites(redFieldType, blueFieldType);
  areOpposites(redFlagType, blueFlagType);
  areOpposites(redSpawnType, blueSpawnType);
  areOpposites(redEndzoneType, blueEndzoneType);
  areHorizontalMirrors(wallBottomLeftType, wallBottomRightType);
  areHorizontalMirrors(wallTopLeftType, wallTopRightType);
  areVerticalMirrors(wallBottomLeftType, wallTopLeftType);
  areVerticalMirrors(wallBottomRightType, wallTopRightType);
  isPlusNinetyRotator(wallBottomLeftType, wallTopLeftType);
  isPlusNinetyRotator(wallTopLeftType, wallTopRightType);
  isPlusNinetyRotator(wallTopRightType, wallBottomRightType);
  isPlusNinetyRotator(wallBottomRightType, wallBottomLeftType);
  isMinusNinetyRotator(wallTopLeftType, wallBottomLeftType);
  isMinusNinetyRotator(wallTopRightType, wallTopLeftType);
  isMinusNinetyRotator(wallBottomRightType, wallTopRightType);
  isMinusNinetyRotator(wallBottomLeftType, wallBottomRightType);

  function Tile(options, elem) {
    this.set(options);
    if (elem) {
      this.elem = elem;
      
      var domElem = elem[0];
      // clockwise from noon: TR, BR, BL, TL
      this.quadrantElems = [domElem.children[0], domElem.children[1], domElem.children[2],domElem.children[3]];
      
      if(this.x>=0 && this.y>=0) {
        this.topSquare = domElem.children[4];
        this.selectionIndicator = domElem.children[5];
        this.affectedIndicator = domElem.children[6];
      
        this.setType(options.type, true, false, true);
        this.background = elem.parent();
      }
    }
  }
  Tile.prototype.set = function(options) {
    this.x = options.x;
    this.y = options.y;
    this.type = options.type;
    this.affected = {};
    for (var key in options.affected || {}) {
      this.affected[key] = options.affected[key]
    }
    this.destination = options.destination;
  }
  Tile.prototype.setType = function(type, force) {
    if  (!type || (this.type==type && !force)) return;
    
    this.type = type;
    type.drawOn(this.elem, this);
    if (type.postPlaceFn) {
      type.postPlaceFn.call(type, this.x, this.y);
    }

    for (var dx=-1; dx<=1; dx++) {
      for (var dy=-1; dy<=1; dy++) {
        maybeIsDirtyWall(this.x+dx, this.y+dy);
      }
    }
    mayHaveChanged(this);
  }
  Tile.prototype.setTopType = function(topType) {
    if(!topType) {
      delete this.topType;
      $(this.topSquare).css('display','none');
      return;
    }
    
    this.topType = topType;
    topType.drawOn(this.elem, this, true);
    
    if (topType.postPlaceFn) {
      topType.postPlaceFn.call(topType, this.x, this.y);
    }

    for (var dx=-1; dx<=1; dx++) {
      for (var dy=-1; dy<=1; dy++) {
        maybeIsDirtyWall(this.x+dx, this.y+dy);
      }
    }
    mayHaveChanged(this);
  }
  Tile.prototype.highlight = function(highlighted) {
    this.elem.find('.selectionIndicator').css('display', highlighted ? 'inline-block' : 'none');
  }
  Tile.prototype.highlightWithPotential = function(highlighted) {
    this.elem.find('.potentialHighlight').css('display', highlighted ? 'inline-block' : 'none');
  }
  function clearPotentialHighlights() {
    $map.find('.potentialHighlight').css('display', 'none');
  }


  var dirtyWalls = {};
  function isWall(x, y) {
    return tiles[x] && tiles[x][y] && tiles[x][y].type.isWall();
  }
  function wallSolidsAt(x,y,palette,initx,inity,type) {
    var t = 0;
    if(palette) {
      if(x==initx && y==inity) {
        t = type.wallSolids|0;
      }
    } else {
      t = (tiles[x] && tiles[x][y] && tiles[x][y].type.wallSolids|0);
    }
    return t|(t<<8);
  }
  function maybeIsDirtyWall(x, y) {
    if (isWall(x,y)) {
      dirtyWalls[x + ',' + y] = tiles[x][y];
    }
  }
  function cleanDirtyWalls() {
    for (var key in dirtyWalls) {
      var wall = dirtyWalls[key];
      if (!wall.type.isWall()) continue;

      wall.type.drawOn(wall.elem, wall);
    }
    dirtyWalls = {};
  }

  var $map = $('#map').attr('oncontextmenu','return false;');
  var $palette = $('#palette');

  var height;
  var width;
  var $tiles;
  var tiles;
  var currPos = {};

  function buildTilesWith(types) {
    width = types.length;
    height = types[0].length;

    var html = '';
    var row = "<div class='tileRow'>";


    for (var x=0; x<width; x++) {
      row += "<div class='tileBackground'><div class='tile nestedSquare'>" +
        "<div class='tileQuadrant nestedSquareTR'></div>" +
        "<div class='tileQuadrant nestedSquareBR'></div>" +
        "<div class='tileQuadrant nestedSquareBL'></div>" +
        "<div class='tileQuadrant nestedSquareTL'></div>" +
        "<div class='topSquare'></div>" +
        "<div class='selectionIndicator nestedSquare'></div>" +
        "<div class='potentialHighlight nestedSquare'></div></div></div>";
    }
    row += "</div>"
    for (var y=0; y<height; y++) {
      html += row;
    }
    $map.html( html );

    $tiles = $map.find('.tile');
    tiles = [];
    for (var x=0; x<width; x++) {
      tiles[x] = [];
      for (var y=0; y<height; y++) {
        var $tile = $($tiles[y*width + x]).data('x', x).data('y', y);
        var tile = tiles[x][y] = new Tile({x: x, y: y, type: types[x][y]}, $tile);
      }
    }

    cleanDirtyWalls();

    $('#resizeWidth').text(width);
    $('#resizeHeight').text(height);
		
    $("div.tileBackground").css('background-image', $("#tiles").attr('url'));
    $("div.tileBackground").css("background-position", "-520px -160px");
    $("div.tileQuadrant").css('background-image', $("#tiles").attr('url'));
    showZoom();
  }

  function clearMap() {
    var emptyTypes = [];
    var clearX = tiles ? width : 20;
    var clearY = tiles ? height : 20;
    for (var x=0;x<clearX;x++) {
      var col = emptyTypes[x] = [];
      for (var y=0; y<clearY; y++) {
        col.push(floorType);
      }
    }
    buildTilesWith(emptyTypes);
    savePoint();
    clearHistory();
    $('#mapName').val('Untitled');
    $('#author').val('Anonymous');
    $(jsonDropArea).attr('download',$('#mapName').val()+'.json');
    $(pngDropArea).attr('download',$('#mapName').val()+'.png');

    $("div.tileBackground").css('background-image', $("#tiles").attr('url'));
    $("div.tileBackground").css("background-position", "-520px -160px");
    $("div.tileQuadrant").css('background-image', $("#tiles").attr('url'));
  };
  clearMap();

  var symmetry = 'None';

  $('#symmetry').change(function() {
    console.log('Symmetry was ', symmetry);
    symmetry = $(this).val();
    console.log('Symmetry is ', symmetry);
  });

  function transformPoint(pt, how) {
    pt.x = pt.x*how[0] + (tiles.length-1)*how[1];
    pt.y = pt.y*how[2] + (tiles[0].length-1)*how[3];
    if (pt.type && how[4]) pt.type = pt.type.opposite;
    if (pt.topType && how[4]) pt.topType = pt.topType.opposite;
    if (pt.type && how[0]==-1) pt.type = pt.type.horizontalMirror;
    if (pt.topType && how[0]==-1) pt.topType = pt.topType.horizontalMirror;
    if (pt.type && how[2]==-1) pt.type = pt.type.verticalMirror;
    if (pt.topType && how[2]==-1) pt.topType = pt.topType.verticalMirror;
  }
  
  var symmetryFns = {
    'Horizontal': [
      [1,0,  1,0],
      [-1,1, 1,0, true]
    ],
    'Vertical': [
      [1,0, 1,0],
      [1,0, -1,1, true]
    ],
    '4-Way': [
      [1,0, 1,0],
      [-1,1, 1,0, true],
      [1,0, -1,1, true],
      [-1,1, -1,1]
    ],
    'Rotational': [
      [1,0, 1,0],
      [-1,1, -1,1, true]
    ]
  }
  
  function applySymmetry(step) {
    var transforms = symmetryFns[symmetry];
    var tileChangeMap = {};
    if (transforms) {
      step.states.forEach(function(state) {
        transforms.forEach(function(transform) {
          var transformedState = new TileState(state);
          transformPoint(transformedState, transform);
          if (transformedState.affected) {
            transformedState.affected.forEach(function(pt) {
              transformPoint(pt, transform);
            });
          }
          if (transformedState.destination) {
            transformPoint(transformedState.destination, transform);
          }
          tileChangeMap[xy(transformedState)] = transformedState;
        });
        
      });
    }
    
    step.states.forEach(function(state) {
      tileChangeMap[xy(state)] = state;
    });
    
    step.states = [];
    for (var key in tileChangeMap) {
      step.states.push(tileChangeMap[key]);
    }
  }
  
  function setSpeculativeStep(step) {
    applySymmetry(step);
    $.each(step.states, function(idx, state) {
      if(!state.noHighlight) {
        var color = state.redHighlight ? '#F44A4A' : '#99FF99';
        tiles[state.x][state.y].elem.find('.potentialHighlight').css('backgroundColor',color);
        tiles[state.x][state.y].highlightWithPotential(true);
      }
    });
  }
  
  $map.mouseleave(function(e) {
    //console.log('map left');
  });
  
  var clearables = [];
  function addAlert(type,message,delay) {
    if(clearables.length>=2) { //max out at 2 alerts on the screen at once
      $('#alerts :first').remove();
      clearTimeout(clearables[0]);
      clearables = clearables.slice(1);
    }
    var alert = '<div id="'+(new Date()).getTime()+'"class="alert alert-'+type+'" role="alert" style="margin: auto;">'+message+
    '<button type="button" class="close" data-dismiss="alert">'+
    '&times;</button></div>';
    $('#alerts').append(alert);
    clearables.push(setTimeout(function() {
      $('#alerts > :not(.removing):first').addClass('removing').fadeOut('fast',function(){$(this).remove();});
      clearables = clearables.slice(1);
    }, delay));
  }

  var controlDown = false;
  var shiftDown = false;
  var oldTitles = {};
  var toolTips = {toolPencil: '1', toolBrush: '2', toolLine: '3', toolRectFill: '4', toolRectOutline: '5', toolCircleFill: '6', toolCircleOutline: '7', toolFill: '8', toolWire: '9', toolClipboard: '0',
  0: 'q', 1: 'w', 2: 'e', 3: 'r', 4: 't', 5: 'f', 7: 's', 8: 'p', 12: 'n', 13: 'v', 14: 'b', 15: 'j', 16: 'k', 17: 'n', 18: 'm', 19: 'a', 20: 'u', 21: 'i', 22: 'g', 23: 'h', 24: 'l', 25: 'x', 26: 'c', 29: 'd'};
  var tipsTools = {};
  var keys = {48: '0', 49: '1', 50: '2', 51: '3', 52: '4', 53: '5', 54: '6', 55: '7', 56: '8', 57: '9', 65: 'a', 66: 'b', 67: 'c', 68: 'd', 69: 'e', 70: 'f', 71: 'g', 72: 'h', 73: 'i', 74: 'j', 75: 'k', 76: 'l', 77: 'm', 78: 'n', 79: 'o', 80: 'p', 81: 'q', 82: 'r', 83: 's', 84: 't', 85: 'u', 86: 'v', 87: 'w', 88: 'x', 89: 'y', 90: 'z'};
  for(var id in toolTips) {
    tipsTools[toolTips[id]] = id;
  }
  var permPress = false;
  var lastKeyPress = 0;
  var clearable;
  
  function override() {
    if(selectedTool.override && (selectedTool.speculateDrag || selectedTool.speculateUp)) {
      clearPotentialHighlights();
      //var st = selectedTool.getState();
      var st = selectedTool.getState();
      var change = selectedTool.speculateDrag && selectedTool.speculateDrag(currPos.x,currPos.y);
      if (!change) {
        change = selectedTool.speculateUp && selectedTool.speculateUp(currPos.x,currPos.y)
      }
      selectedTool.setState(st);
      if(change) setSpeculativeStep(change);
    }
  }
  
  $(document).keydown(function(e) {
    if(e.which==17) { // control
      controlDown = true;
      override();
    } else if (e.which==16) {
      shiftDown = true;
      override();
    } else if (e.which==18) { //alt key
      if(permPress) {
        $('[data-toggle="tooltip"]').tooltip('destroy');
        permPress = false;
        return;
      }
      var now = new Date();
      permPress = false;
      if(now - lastKeyPress <= 300) {
        clearTimeout(clearable);
        permPress = true;
      }
      lastKeyPress = now;
      if(!permPress) {
        $('#tools .btn').each(function(i,tool) {
          var name = tool.id;
          if(!oldTitles[name]) oldTitles[name] = $(tool).attr('title');
          $(tool).attr({'data-toggle': 'tooltip', 'data-trigger': 'manual', 'data-container': 'body', 'title': toolTips[name]});
        });
        $('.tilePaletteOption').each(function(i,tile) {
          if(!toolTips[i]) return;
          if(!oldTitles[i]) oldTitles[i] = $(tile).attr('title');
          $(tile).attr({'data-toggle': 'tooltip', 'data-trigger': 'manual', 'data-container': 'body', 'title': toolTips[i]});
        });
        $('[data-toggle="tooltip"]').tooltip('show');
      }
    } else if (e.which==90) { //z
      undo();
    } else if (e.which==89) { //y
      redo();
    } else if (keys[e.which]) {
      var tool = tipsTools[keys[e.which]];
      if($.isNumeric(tool)) {
        $('.tilePaletteOption').eq(tool).click();
      } else {
        $('#'+tool).click();
      }
    }
  }).keyup(function(e) {
    if (e.which==17) { // control
      controlDown = false;
      override();
    } else if (e.which==16) {
      shiftDown = false;
      override();
    } else if (e.which==18 && !permPress) {
      clearable = setTimeout(function() {
        $('#tools .btn').each(function(i,tool) {
          $(tool).tooltip('destroy').attr('title', oldTitles[tool.id]);
        });
        $('.tilePaletteOption').each(function(i,tile) {
          if(!oldTitles[i]) return;
          $(tile).tooltip('destroy').attr('title', oldTitles[i]);
        });
      }, 301);
    }
  });
  
  $(window).blur (function() { // If the user ctrl-tabs away, it won't the keyup won't register
    controlDown = false;
  })

  var lineAnchor = null;

  var count = 0;
  var mouseDown = false;
  $map.on('mouseenter', '.tile', function(e) {

    var x = currPos.x = $(this).data('x');
    var y = currPos.y = $(this).data('y');

    if (!selectedTool) return;

    if (selectedTool.speculateDrag || selectedTool.speculateUp) { // should really test for speculatedDown || speculateDrag, maybe
      var st = selectedTool.getState();
      var change = selectedTool.speculateDrag && selectedTool.speculateDrag(x,y);
      if (!change) {
        change = selectedTool.speculateUp && selectedTool.speculateUp(x,y)
      }
      selectedTool.setState(st);
      if(change) setSpeculativeStep(change);
      return;
    }
    })
    .on('mouseleave', '.tile', function(e) {
      clearPotentialHighlights();
//      console.log('mouse left ', $(this).data('x'), $(this).data('y'));
    })
    .on('mousedown', '.tile', function(e) {
      e.preventDefault();
      if (e.which==1) {
        if(!e.shiftKey || selectedTool == clipboard) {
          var x = $(this).data('x');
          var y = $(this).data('y');
          if (!controlDown || selectedTool == clipboard || selectedTool == addWidth || selectedTool == addHeight) {
            mouseDown = true;
          
            selectedTool.down(x,y);
            var change = selectedTool.speculateDrag(x,y);
            if (change) {
              applySymmetry(change);
              applyStep(change);
              selectedTool.stateChange();
            }
          
            e.preventDefault();
          }
        } else {
          e.preventDefault();
          var x = $(this).data('x');
          var y = $(this).data('y');
        
          if (tiles[x][y].type == portalType) {
            var cooldown = (tiles[x][y].cooldown!=undefined) ? tiles[x][y].cooldown : defaultPortalCooldown;
            $('#portalCooldown').val('').attr('placeholder',cooldown);
            $('#portalAll').hide();
            $('#portalOptions .modal-header').css('background-color','#5bc0de');
            $('#portalOptions').modal('show');
            setTimeout(function() {$('#portalCooldown').focus();}, 100);
            $( "#portalSubmit" ).off('click').click(function() {
              cooldown = parseFloat($('#portalCooldown').val());
              if(!(cooldown>=0)) return;
                
              var change = new UndoStep([
                new TileState(tiles[x][y], {cooldown:cooldown})
              ]);
              applySymmetry(change);
              applyStep(change);
            });
          } else if (tiles[x][y].type == switchType) {
            var timer = (tiles[x][y].timer!=undefined) ? tiles[x][y].timer : defaultButtonTimer;
            $('#switchTimer').val('').attr('placeholder',timer);
            $('#switchAll').hide();
            $('#switchOptions .modal-header').css('background-color','#5bc0de');
            $('#switchOptions').modal('show');
            setTimeout(function() {$('#switchTimer').focus();}, 100);
            $( "#switchSubmit" ).off('click').click(function() {
              timer = parseFloat($('#switchTimer').val());
              if(!timer) return;

              var change = new UndoStep([
                new TileState(tiles[x][y], {timer:timer})
              ]);
              applySymmetry(change);
              applyStep(change);
            });
          } else if (tiles[x][y].topType == redSpawnType || tiles[x][y].topType == blueSpawnType) {
            var radius = (tiles[x][y].radius!=undefined) ? tiles[x][y].radius : defaultSpawnRadius;
            var weight = (tiles[x][y].weight!=undefined) ? tiles[x][y].weight : defaultSpawnWeight;
            $('#spawnRadius').val('').attr('placeholder',radius);
            $('#spawnWeight').val('').attr('placeholder',weight);
            $('#spawnAll').hide();
            $('#spawnOptions .modal-header').css('background-color','#5bc0de');
            $('#spawnOptions').modal('show');
            setTimeout(function() {$('#spawnRadius').focus();}, 100);
            $( "#spawnSubmit" ).off('click').click(function() {
              radius = parseFloat($('#spawnRadius').val());
              weight = parseFloat($('#spawnWeight').val());
              if(!(radius>=0) && !(weight>=1)) return;
                  
              var changes = {};
              if(radius>=0) changes.radius = radius;
              if(weight>=1) changes.weight = weight;
                
              var change = new UndoStep([
                new TileState(tiles[x][y], changes)
              ]);
              applySymmetry(change);
              applyStep(change);
            });
          }
        }
      }
    })
    .on('mousemove', '.tile', function(e) {
      if(e.buttons!=1) mouseDown = false; //can drag outside $map and back in, but mouseDown is not stuck if mouseup occurs outside $map
      var x = currPos.x = $(this).data('x');
      var y = currPos.y = $(this).data('y');
      if (selectedTool && mouseDown) {
        var change = selectedTool.speculateDrag && selectedTool.speculateDrag(x,y);
        if (change) {
          applySymmetry(change);
          applyStep(change);
        } else if (selectedTool.speculateUp) {
          var st = selectedTool.getState();
          change = selectedTool.speculateUp(x,y);
          selectedTool.setState(st);
          if (change) setSpeculativeStep(change);
        }
      }
    })
    .on('mouseup', '.tile', function(e) {
      if (e.which==1) {
        var x = currPos.x = $(this).data('x');
        var y = currPos.y = $(this).data('y');
        if (controlDown && selectedTool != clipboard && selectedTool != addWidth && selectedTool != addHeight) {
          var eyeDropBrushType = tiles[x][y].type;
          setBrushTileType(eyeDropBrushType);
        } else {
          var change = selectedTool.speculateUp(x,y);
          if (change) {
            applySymmetry(change);
            applyStep(change);
            selectedTool.stateChange();
          }
          selectedTool.up(x,y);
        
          savePoint();
        }
        mouseDown = false;
        cleanDirtyWalls();

        if(++count>=20) {
          count = 0;
          localStorage.setItem('png', getPngBase64Url());
          localStorage.setItem('json', makeLogicString(null,true));
          addAlert('success','Map auto-saved!',1000);
        }
      }
    });


  var wall = String.fromCharCode(120)+String.fromCharCode(120)+String.fromCharCode(120)+String.fromCharCode(255);
  var open = String.fromCharCode(212)+String.fromCharCode(212)+String.fromCharCode(212)+String.fromCharCode(255);
  function createPng() {
    var text = '';
    for (var y=0; y<height; y++) {
      for (var x=0; x<width; x++) {
        text += tiles[x][y].type.color;
      }
    }
    return text;
  }

  function makeLogic() {
    var logic = {
      info: {
        name: $('#mapName').val() || $("#author").attr("placeholder"),
        author: $('#author').val(),
        gameMode: $('input[name="gameMode"]:checked').val()
      },
      switches: {},
      fields: {},
      portals: {},
      marsballs: [],
      spawnPoints: {red: [], blue: []}
    };

    for (var x=0; x<width; x++) {
      for (var y=0; y<height; y++) {
        var fn = tiles[x][y].type.logicFn;
        if (fn) fn(logic, tiles[x][y]);
        if(tiles[x][y].topType) {
          fn = tiles[x][y].topType.logicFn;
          if (fn) fn(logic, tiles[x][y]);
        }
      }
    }
    return logic;
  }

  function extractMap() {
    var map = {};
    map.tiles = [];
    for (var y=0; y<height; y++) {
      var row = map.tiles[y] = [];
      for (var x=0; x<width; x++) {
        var tile = tiles[x][y];
        var cell;
        if (tile.type == portalType) {
          cell = {
            type: tile.type.name,
            destination: tile.destination ? [tile.destination.x, tile.destination.y] : [x,y]
          }
        } else if (tile.type == switchType) {
          var targets = [];
          for (var key in tile.affected||[]) {
            var affected = tile.affected[key];
            targets.push([affected.x, affected.y])
          }
          cell = {
            type: tile.type.name,
            targets: targets
          }
        } else {
          cell = tile.type.name;
        }
        row[x] = cell;
      }
    }
    return map;
  }

  function getPngBase64() {
    return Base64.encode(generatePng(width, height, createPng()));
  }
  
  function getPngBase64Url() {
    return 'data:image/png;base64,' + getPngBase64();
  }

  $('#export').click(function() {
    $('.dropArea').removeClass('hasImportable');
    $('.dropArea').addClass('hasExportable');
    $(jsonDropArea).attr('download',$('#mapName').val()+'.json').attr('href', 'data:application/json;base64,' + Base64.encode(makeLogicString()));
    $(pngDropArea).attr('download',$('#mapName').val()+'.png').attr('href', getPngBase64Url());
  });
  
  $("#saveToJJ").click( function() {
    $(this).text("Saving...");
    $.post('/editorsave',{layout: getPngBase64(),logic: makeLogicString()}).done(function (data) {
      if(data.message == true) {
        $("#saveToJJ").text("Saved");
        $("#closeModal").click();
        window.location = data.location;
      }
      else {
        addAlert('danger',"Error saving to Juke Juice",2000);
      }
      $("#saveToJJ").text("Save to JJ");
    })
  });

  $('#save').click(function() {
    localStorage.setItem('png', getPngBase64Url());
    localStorage.setItem('json', makeLogicString());
  });

  function isValidMapStr() {
    var hasRedFlag = false;
    var hasBlueFlag = false;
    var hasRedSpawn = false;
    var hasBlueSpawn = false;
    $.each(tiles, function(rowIdx, row) {
      $.each(row, function(tileIdx, tile) {
        if (tile.type.name == "redFlag") hasRedFlag = true;
        if (tile.type.name == "blueFlag") hasBlueFlag = true;
        if (tile.type.name == "redSpawn" || (tile.topType && tile.topType.name == "redSpawn")) hasRedSpawn = true;
        if (tile.type.name == "blueSpawn" || (tile.topType && tile.topType.name == "blueSpawn")) hasBlueSpawn = true;
      });
    });
    if (!(hasRedSpawn || hasRedFlag))
      return "A map requires a red flag or a red spawn tile to test.";
    if (!(hasBlueSpawn || hasBlueFlag))
      return "A map requires a blue flag or a blue spawn tile to test.";
    return "Valid";
  }

  $('#test, #testeu').click(function(e) {
    var validStr = isValidMapStr();
    if (validStr != "Valid") {
      addAlert('danger','Error: '+validStr,2000);
      return false;
    }
    var eu = e.target.id == 'testeu' ? true : false;
    $.post('/editortest', {logic: JSON.stringify(makeLogic()), layout: getPngBase64(), eu: eu}, function(data) {
      console.log(data);
      if (data && data.location) {
        window.open(data.location);
      } else {
        addAlert('danger','Error: Test couldn\'t get started',2000);
      }
      //console.log('back from test', data)
    });
    return false;
  });
  
  function setBrushTileType(type) {
    $('.tileTypeSelectionIndicator').css('display', 'none');
    $('.tilePaletteOption').each(function(idx, el) {
      if ($(el).data('tileType') == type) {
        brushTileType = type;
        $(el).find('.tileTypeSelectionIndicator').css('display', 'inline-block');
      }
    })
  }

  var paletteRows = [
    [wallType, wallTopLeftType, wallTopRightType, wallBottomLeftType, wallBottomRightType, floorType, emptyType], 
    [spikeType, powerupType, portalType, gravityWellType, marsBallType],
    [yellowFlagType, redFlagType, blueFlagType, redSpawnType, blueSpawnType, redEndzoneType, blueEndzoneType],
    [speedpadType, redSpeedpadType, blueSpeedpadType, '', '', redFloorType, blueFloorType],
    [switchType, offFieldType, onFieldType, redFieldType, blueFieldType, '', bombType]
  ];

  var brushTileType = paletteRows[0][0];

  $.each(paletteRows, function(rowIdx, row) {
    var $rowDiv = $("<div></div>");
    $.each(row, function(cellIdx, type) {
      if (!type) {
        $rowDiv.append($("<div style='width:40px;display:inline-block;'></div>"));
        return;
      }
      var isWall = false;
      var toAdd = "<div class='tile'><div class='tileTypeSelectionIndicator'></div></div>";
      if(type==wallType || type==wallTopLeftType || type==wallTopRightType || type==wallBottomLeftType || type==wallBottomRightType) {
        isWall = true;
        toAdd = "<div class='tileQuadrant nestedSquareTR'></div>" +
        "<div class='tileQuadrant nestedSquareBR'></div>" +
        "<div class='tileQuadrant nestedSquareBL'></div>" +
        "<div class='tileQuadrant nestedSquareTL'></div>" +
        "<div class='tileTypeSelectionIndicator' style='position: absolute;'></div>";
      }
      var $button = $("<div class='tileBackground tilePaletteOption "+type.toolTipText.split(" ").join("_")+"' title = '" + type.toolTipText + "'>"+toAdd+"</div>");
      $button.data('tileType', type);
      var tile;
      if(isWall)
        tile = new Tile({x: -1, y: -1, type: type}, $button);
      type.drawOn($button.find('.tile'), tile);
      $button.click('click', function(e) {
        if (selectedTool == wire || selectedTool == clipboard) {
          $('#toolPencil').trigger('click');
        }
        setBrushTileType(type);
        if(e.shiftKey)
        {
          if (type == portalType) {
            var cooldown = defaultPortalCooldown;
            $('#portalCooldown').val('').attr('placeholder',cooldown);
            $('#portalAll').show();
            $('#portalOptions .modal-header').css('background-color','#428bca');
            $('#portalOptions').modal('show');
            setTimeout(function() {$('#portalCooldown').focus();}, 100);
            $( "#portalSubmit" ).off('click').click(function() {
              cooldown = parseFloat($('#portalCooldown').val());
              if(!(cooldown>=0)) return;
            
              defaultPortalCooldown = cooldown;
              if($('#portalOptions').find('input:checked').val()=='all')
                applyLargeStep(type, {cooldown: undefined});
            });
          } else if (type == switchType) {
            var timer = defaultButtonTimer;
            $('#switchTimer').val('').attr('placeholder',timer);
            $('#switchAll').show();
            $('#switchOptions .modal-header').css('background-color','#428bca');
            $('#switchOptions').modal('show');
            setTimeout(function() {$('#switchTimer').focus();}, 100);
            $( "#switchSubmit" ).off('click').click(function() {
              timer = parseFloat($('#switchTimer').val());
              if(!timer) return;
                  
              defaultButtonTimer = timer;
              if($('#switchOptions').find('input:checked').val()=='all')
                applyLargeStep(type, {timer: undefined});
            });
          } else if (type == redSpawnType || type == blueSpawnType) {
            var radius = defaultSpawnRadius;
            var weight = defaultSpawnWeight;
            $('#spawnRadius').val('').attr('placeholder',radius);
            $('#spawnWeight').val('').attr('placeholder',weight);
            $('#spawnAll').show();
            $('#spawnOptions .modal-header').css('background-color','#428bca');
            $('#spawnOptions').modal('show');
            setTimeout(function() {$('#spawnRadius').focus();}, 100);
            $( "#spawnSubmit" ).off('click').click(function() {
              radius = parseFloat($('#spawnRadius').val());
              weight = parseFloat($('#spawnWeight').val());
              if(!(radius>=0) && !(weight>=1)) return;
              
              var changes = {};
              if(radius>=0) {
                defaultSpawnRadius = radius;
                changes.radius = undefined;
              }
              if(weight>=1) {
                defaultSpawnWeight = weight;
                changes.weight = undefined;
              }
                  
              if($('#spawnOptions').find('input:checked').val()=='all') {
                applyLargeStep(redSpawnType, changes);
                applyLargeStep(blueSpawnType, changes);
              }
            });
          }
        }
      });
      $rowDiv.append($button);
    });
    $palette.append($rowDiv);
  })

  $('.tileTypeSelectionIndicator:first').css('display', 'inline-block');

  $('#toolPencil').data('tool', pencil);
  $('#toolBrush').data('tool', brush);
  $('#toolLine').data('tool', line);
  $('#toolRectFill').data('tool', rectFill);
  $('#toolRectOutline').data('tool', rectOutline);
  $('#toolCircleFill').data('tool', circleFill);
  $('#toolCircleOutline').data('tool', circleOutline);
  $('#toolFill').data('tool', fill);
  $('#toolWire').data('tool', wire);
  $('#toolClipboard').data('tool', clipboard);
  $('#tools .btn').click(function() {
    selectedTool.unselect.call(selectedTool);
    $('#addWidth,#addHeight').removeClass('active').blur();
    $('#tools .btn').removeClass('active');
    $(this).toggleClass('active');
    selectedTool = $(this).data('tool');
    selectedTool.select.call(selectedTool);
  });

  var selectedTool = pencil;
  var oldTool = pencil;
  $('#toolPencil').toggleClass("active");
//  $('#toolPencil').trigger('click');

  $('#undo').click(undo);
  $('#redo').click(redo);

  var importJson;
  var importPng;
  //$jsonDrop.ondragover = function () { this.className = 'hover'; return false; };
  //$jsonDrop.ondragend = function () { this.className = ''; return false; };
  var jsonDropArea = document.getElementById('jsonDrop')
  jsonDropArea.ondragover = function () { return false; };
  jsonDropArea.ondragend = function () { return false; };

  jsonDropArea.addEventListener("dragstart",function(evt){
    evt.dataTransfer.setData("DownloadURL",
      'data:application/json;base64,' + Base64.encode(makeLogicString()));
    return false;
  },false);

  var pngDropArea = document.getElementById('pngDrop');
  pngDropArea.ondragover = function () { return false; };
  pngDropArea.ondragend = function () { return false; };

  jsonDropArea.ondrop = pngDropArea.ondrop = function (e) {
    e.preventDefault();
    $('.dropArea').removeClass('hasExportable');
    for (var i=0; i<e.dataTransfer.files.length; i++) {
      var file = e.dataTransfer.files[i],
        reader = new FileReader();

      if (file.name.match(/json$/i)) {
        reader.onload = function (event) {
          importJson = event.target.result;
          $(jsonDropArea).addClass('hasImportable');
        };
        reader.readAsText(file);
      } else if (file.name.match(/png$/i)) {
        reader.onload = function (event) {
          importPng = event.target.result;
          $(pngDropArea).addClass('hasImportable');
        }
        reader.readAsDataURL(file);
      } else {
        alert('Expected a PNG or a JSON, but got ' + file.name);
      }
    }

    return false;
  };
  function restoreFromPngAndJson(pngBase64, jsonString, optResizeParams, doHistoryClear, method) {
    $('body').css('cursor','wait');
    var optWidth = optResizeParams && optResizeParams.width;
    var optHeight = optResizeParams && optResizeParams.height;
    var deltaX = (optResizeParams && optResizeParams.deltaX) || 0;
    var deltaY = (optResizeParams && optResizeParams.deltaY) || 0;
    var canvas = document.getElementById('importCanvas');
    var ctx = canvas.getContext('2d');
    var json = JSON.parse(jsonString);
    var img = new Image();
    img.onload = function() {
      var w = img.width;
      var h = img.height;
      optWidth = optWidth || w;
      optHeight = optHeight || h;
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(img,0,0);
      var imgd = ctx.getImageData(0, 0, w, h).data;
      var typeByColor = {};
      tileTypes.forEach(function(type) {
        typeByColor[type.rgb] = type;
      })

      var fields = json.fields || {};
      var cols = [];
      for (var destX=0; destX<optWidth; destX++) {
        var sourceX = destX - deltaX;
        var col = [];
        for (var destY=0; destY<optHeight; destY++) {
          var sourceY = destY - deltaY;
          var type;
          //console.log('sourceX=', sourceX,'sourceY=', sourceY)
          if (sourceX<w && sourceY<h && sourceX>=0 && sourceY>=0) {
            var i = (sourceY*w + sourceX)*4;
            var pixel = imgd[i] | (imgd[i+1]<<8) | (imgd[i+2]<<16);
            type = typeByColor[pixel] || emptyType;
            if(type == redSpawnType) {
              type = floorType;
              if(!json.spawnPoints) json.spawnPoints = {red: [], blue: []};
              if(!json.spawnPoints.red) json.spawnPoints.red = [];
              if(!json.spawnPoints.red.push({x: destX, y: destY}));
            } else if(type == blueSpawnType) {
              type = floorType;
              if(!json.spawnPoints) json.spawnPoints = {red: [], blue: []};
              if(!json.spawnPoints.blue) json.spawnPoints.blue = [];
              if(!json.spawnPoints.blue.push({x: destX, y: destY}));
            } else if (type == onFieldType || type==offFieldType || type==redFieldType || type==blueFieldType) {
              type = {on: onFieldType, off: offFieldType, red: redFieldType, blue: blueFieldType
              }[(fields[sourceX+','+sourceY]||{}).defaultState] || offFieldType;
            }
          } else {
            type = emptyType;
          }
          col.push(type);
        }
        cols.push(col);
      }
      buildTilesWith(cols);

      var info = json.info || {};
      $('#mapName').val(info.name || 'Untitled');
      $('#author').val(info.author || 'Anonymous');
      $(jsonDropArea).attr('download',$('#mapName').val()+'.json');
      $(pngDropArea).attr('download',$('#mapName').val()+'.png');
      if(info.gameMode == 'gravity')
        $('input[name="gameMode"]').eq(1).prop('checked',true);
      else if(info.gameMode == 'gravityCTF')
        $('input[name="gameMode"]').eq(2).prop('checked',true);

      var portals = json.portals || {};
      for (var key in portals) {
        var xy = key.split(',');
        xy[0] = parseInt(xy[0])+deltaX;
        xy[1] = parseInt(xy[1])+deltaY;
        var tile = (tiles[xy[0]]||[])[xy[1]];
        if (tile && tile.type==portalType) {
          var dest = portals[key].destination||{};
          tile.destination = (tiles[dest.x]||[])[dest.y];
          tile.cooldown = (portals[key].cooldown!=undefined) ? portals[key].cooldown : undefined;
        }
      }

      var switches = json.switches || {};
      for (var key in switches) {
        var xy = key.split(',');
        xy[0] = parseInt(xy[0])+deltaX;
        xy[1] = parseInt(xy[1])+deltaY;
        var tile = (tiles[xy[0]]||[])[xy[1]];
        if (tile && tile.type == switchType) {
          tile.affected = []
          var toggles = (switches[key].toggle||[]);
          toggles.forEach(function(affected) {
            var pos = affected.pos || {};
            var affectedTile = (tiles[pos.x]||[])[pos.y];
            if (affectedTile) tile.affected[pos.x + ',' + pos.y] = (affectedTile);
          });
          tile.timer = (switches[key].timer!=undefined) ? switches[key].timer : undefined;
        }
      }
      
      var spawnpoints = json.spawnPoints || {};
      function addSpawnPoints(color)
      {
        var spawn = spawnpoints[color] || [];
        for(var i = 0;i < spawn.length;i++) {
          var tile = tiles[parseInt(spawn[i].x)+deltaX][parseInt(spawn[i].y)+deltaY];
          if(tile && !tile.radius && !tile.weight && (tile.type == floorType || tile.type == redFloorType || tile.type == blueFloorType)) {
            var changes = {
              type: (color=='red') ? redSpawnType : blueSpawnType,
              radius: (spawn[i].radius!=undefined) ? spawn[i].radius : undefined,
              weight: (spawn[i].weight!=undefined) ? spawn[i].weight : undefined,
            };
            var state = new TileState(tile, changes);
            state.restoreInto(tile);
          }
        }
      }
      if(!$.isEmptyObject(spawnpoints))
      {
        addSpawnPoints('red');
        addSpawnPoints('blue');
      }
      
      marsBallCount = 0;
      var marsballs = json.marsballs || [];
      for(var i = 0;i < marsballs.length;i++) {
        var tile = tiles[parseInt(marsballs[i].x)+deltaX][parseInt(marsballs[i].y)+deltaY];
        if(tile) {
          var state = new TileState(tile, {type: marsBallType});
          state.restoreInto(tile);
        }
      }

      if(method) {
        if(method instanceof Array) {
          for(var x = (method[1] || 0);x < (method[2] || tiles.length);x++) {
            for(var y = (method[3] || 0);y < (method[4] || tiles[x].length);y++) {
              var tile = tiles[x][y];
              if(tile) {
                var state = null;
                if(tile.type != tile.type.horizontalMirror) {
                  state = new TileState(tile, {type: (method[0]==1) ? tile.type.horizontalMirror : tile.type.verticalMirror, mirror: true});
                } else if(method.length>1) {
                  state = new TileState(tile, {type: tile.type.opposite, mirror: true});
                }
                if(state) {
                  state.restoreInto(tile);
                }
              }
            }
          }
        } else {
          for(var x = 0;x < tiles.length;x++) {
            for(var y = 0;y < tiles[x].length;y++) {
              var tile = tiles[x][y];
              if(tile) {
                var state = new TileState(tile, {type: (method==90) ? tile.type.plusNinetyRotator : tile.type.minusNinetyRotator, mirror: true});
                state.restoreInto(tile);
              }
            }
          }
        }
      }
      cleanDirtyWalls();
      
      savePoint();
      if (doHistoryClear) clearHistory();
      
      $('body').css('cursor','auto');
    }
    if(pngBase64)
      img.src = pngBase64;//'https://mdn.mozillademos.org/files/5397/rhino.jpg';
    else
      $('body').css('cursor','auto');
  }
  
  function clearHistory() {
    undoSteps = redoSteps = []
    enableUndoRedoButtons();
  }

  $('#import').click(function() {
    if (importPng && importJson) {
      restoreFromPngAndJson(
        importPng,
        importJson, undefined, true);
    } else {
      alert('Please drag and drop a PNG and a JSON to import onto their receptacles.')
    }
  });

  function makeLogicString(json,notpretty) {
    if(notpretty)
      return JSON.stringify(json || makeLogic());
    else
      return JSON.stringify(json || makeLogic(), null, 2);
  }
  
  function transformLogic(json,tilemap,tilemap2) {
    var fields = json.fields || {};
    var newfields = {};
    for (var key in fields) {
      var xy = key.split(',');
      var newloc = tilemap[xy[0]][xy[1]];
      newfields[newloc.x+','+newloc.y] = fields[key];
      if(tilemap2) {
        newloc = tilemap2[xy[0]][xy[1]];
        newfields[newloc.x+','+newloc.y] = fields[key];
      }
    }
    json.fields = newfields;
    
    var portals = json.portals || {};
    var newportals = {};
    for (var key in portals) {
      var xy = key.split(',');
      var newloc = tilemap[xy[0]][xy[1]];
      var tile = (tiles[xy[0]]||[])[xy[1]];
      if(tile && tile.cooldown==undefined) {
        delete portals[key].cooldown;
      }
      var newloc2;
      newportals[newloc.x+','+newloc.y] = $.extend(true, {}, portals[key]);
      if(tilemap2) {
        newloc2 = tilemap2[xy[0]][xy[1]];
        newportals[newloc2.x+','+newloc2.y] = $.extend(true, {}, portals[key]);
      }
      var dest = portals[key].destination || {};
      if(!$.isEmptyObject(dest)) {
        var newdest = tilemap[dest.x][dest.y];
        newportals[newloc.x+','+newloc.y].destination = newdest;
        if(newloc2) {
          newportals[newloc2.x+','+newloc2.y].destination = tilemap2[dest.x][dest.y];
        }
      }
    }
    json.portals = newportals;
    
    var switches = json.switches || {};
    var newswitches = {};
    for (var key in switches) {
      var xy = key.split(',');
      var tile = (tiles[xy[0]]||[])[xy[1]];
      if(tile && tile.timer==undefined) {
        delete switches[key].timer;
      }
      var newloc = tilemap[xy[0]][xy[1]];
      var newloc2;
      newswitches[newloc.x+','+newloc.y] = $.extend(true, {}, switches[key]);
      newswitches[newloc.x+','+newloc.y].toggle = [];
      if(tilemap2) {
        newloc2 = tilemap2[xy[0]][xy[1]];
        newswitches[newloc2.x+','+newloc2.y] = $.extend(true, {}, switches[key]);
        newswitches[newloc2.x+','+newloc2.y].toggle = [];
      }
      for(var i = 0;i < switches[key].toggle.length;i++) {
        var dest = switches[key].toggle[i].pos;
        var newdest = tilemap[dest.x][dest.y];
        newswitches[newloc.x+','+newloc.y].toggle.push({pos: newdest});
        if(newloc2) {
          newswitches[newloc2.x+','+newloc2.y].toggle.push({pos: tilemap2[dest.x][dest.y]});
        }
      }
    }
    json.switches = newswitches;
    
    var spawnpoints = json.spawnPoints || {};
    var newspawnpoints = {};
    function addSpawnPoints(color,other)
    {
      var spawn = spawnpoints[color] || [];
      var newspawn = [];
      var otherspawn = [];
      for(var i = 0;i < spawn.length;i++) {
        var tile = tiles[spawn[i].x][spawn[i].y];
        if(tile) {
          if(tile.radius==undefined) delete spawn[i].radius;
          if(tile.weight==undefined) delete spawn[i].weight;
        }
        var newloc = tilemap[spawn[i].x][spawn[i].y];
        var toreplace = $.extend(true, {}, spawn[i]);
        toreplace.x = newloc.x;
        toreplace.y = newloc.y;
        newspawn.push(toreplace);
        if(tilemap2) {
          newloc = tilemap2[spawn[i].x][spawn[i].y];
          var toreplace = $.extend(true, {}, spawn[i]);
          toreplace.x = newloc.x;
          toreplace.y = newloc.y;
          otherspawn.push(toreplace);
        }
      }
      newspawnpoints[color] = newspawnpoints[color].concat(newspawn);
      newspawnpoints[other] = newspawnpoints[other].concat(otherspawn);
    }
    if(!$.isEmptyObject(spawnpoints))
    {
      newspawnpoints['red'] = newspawnpoints['blue'] = [];
      addSpawnPoints('red','blue');
      addSpawnPoints('blue','red');
    }
    json.spawnPoints = newspawnpoints;


    var countMarsBalls = 0;
    var marsballs = json.marsballs || [];
    var newmarsballs = [];
    for (var i = 0;i < marsballs.length;i++) {
      var newloc = tilemap[marsballs[i].x][marsballs[i].y];
      newmarsballs.push(newloc);
      countMarsBalls++;
      if(countMarsBalls<2 && tilemap2) {
        newloc = tilemap2[marsballs[i].x][marsballs[i].y];
        newmarsballs.push(newloc);
        countMarsBalls++;
      }
      if(countMarsBalls>=2) break;
    }
    json.marsballs = newmarsballs;
    
    return json;
  }
  
  function resizeTo(width, height, deltaX, deltaY) {
    var png = getPngBase64Url();
    var json = makeLogicString();

    restoreFromPngAndJson(png, json, {width: width, height: height, deltaX: deltaX, deltaY: deltaY});
  }

  var $resizeWidthTo = $('#resizeWidthTo');
  var $resizeHeightTo = $('#resizeHeightTo');
  var $resizeAnchorLeft = $('#resizeAnchorLeft');
  var $resizeAnchorRight = $('#resizeAnchorRight');
  var $resizeAnchorTop = $('#resizeAnchorTop');
  var $resizeAnchorBottom = $('#resizeAnchorBottom');
  
  $('#resizeDialog a').click(function() {
    $(this).toggleClass('active');
  });
  $('#resize').click(function(e) {
    $resizeWidthTo.val('').attr('placeholder',tiles.length);
    $resizeHeightTo.val('').attr('placeholder',tiles[0].length);
    setTimeout(function(){$resizeWidthTo.focus();},100);
    e.preventDefault();
  });
    
  $('#resizeSubmit').click(function(e) {
    var oldWidth = tiles.length;
    var oldHeight = tiles[0].length;
          
    var width = parseInt($resizeWidthTo.val(),10);
    var height = parseInt($resizeHeightTo.val(),10);
    if(width==undefined) width = oldWidth;
    if(height==undefined) height = oldHeight;
          
    function getDelta(oldSize, newSize, anchorMin, anchorMax) {
      if (anchorMin < anchorMax) {
        return 0;
      } else if (anchorMin > anchorMax) {
        return newSize-oldSize;
      } else {
        return Math.round((newSize-oldSize)/2);
      }
    }
    var deltaX = getDelta(oldWidth, width, $resizeAnchorLeft.hasClass('active'), $resizeAnchorRight.hasClass('active'));
    var deltaY = getDelta(oldHeight, height, $resizeAnchorTop.hasClass('active'), $resizeAnchorBottom.hasClass('active'));
          
    $('body').css('cursor','wait');
    var delay = 0;
    if (width * height > 3600) {
      delay = 2000;
      addAlert('warning','Warning: Maps larger than 3600 tiles may cause lag and may not be allowed to be tested by normal means',delay);
      /*if (!confirm('It\'s currently not possible to test maps larger than 3600 tiles.\nVery large maps can (will) lag your browser as well.\nAre you sure you want to resize?')) {
        $('#resizeWidth').text(tiles.length);
        $('#resizeHeight').text(tiles[0].length);
        e.preventDefault();
        return;
      }*/
    } else if ( width < 1 || height < 1) {
      delay = 2000;
      addAlert('warning','Warning: The minimum width and height are 1, any smaller values have been changed to 1',delay);
      width = Math.max(1, width);
      height = Math.max(1, height);
    }
    setTimeout(function() {
      resizeTo(width, height, deltaX, deltaY);
      console.log('resizing to',width,height);
    }, delay);
    e.preventDefault();
  });
  
  $('#addWidth').click(function() {
    $(this).toggleClass('active');
    if($(this).hasClass('active')) {
      if(selectedTool != addHeight)
        oldTool = selectedTool;
      $('#addHeight').removeClass('active');
      selectedTool.unselect.call(selectedTool);
      selectedTool = addWidth;
    } else {
      $(this).blur();
      selectedTool = oldTool;
    }
  });
  $('#addHeight').click(function() {
    $(this).toggleClass('active');
    if($(this).hasClass('active')) {
      if(selectedTool != addWidth)
        oldTool = selectedTool;
      $('#addWidth').removeClass('active');
      selectedTool.unselect.call(selectedTool);
      selectedTool = addHeight;
    } else {
      $(this).blur();
      selectedTool = oldTool;
    }
  });
  
  var enterKey = 13;
  $('#importExport').on('keydown',function(e){
    e.stopPropagation();
  });
  $('#resizeDialog').on('keydown',function(e){
    e.stopPropagation();
    if(e.keyCode == enterKey){
      e.preventDefault();
      $(this).find('button:last').click();
    }
  });
  $('#portalOptions').on('keydown',function(e){
    e.stopPropagation();
    if(e.keyCode == enterKey){
      e.preventDefault();
      $(this).find('button:last').click();
    }
  });
  $('#switchOptions').on('keydown',function(e){
    e.stopPropagation();
    if(e.keyCode == enterKey){
      e.preventDefault();
      $(this).find('button:last').click();
    }
  });
  $('#spawnOptions').on('keydown',function(e){
    e.stopPropagation();
    if(e.keyCode == enterKey){
      e.preventDefault();
      $(this).find('button:last').click();
    }
  });
  
  function showZoom() {
    tileSize = [10,20,30,40][zoom];
    var sizeCss = tileSize + 'px';
    var quadrantSizeCss = tileSize/2 + 'px';
    var singleTileBackgroundSize = sizeCss + ' ' + sizeCss;
    var tileSheetBackgroundSize = (tileSize*tileSheetWidth) + 'px ' + (tileSize*tileSheetHeight) + 'px';
    
    function applySize(e) {
      e.style.width = e.style.height = sizeCss;
    }
    function applyQuadrantSize(e, isLeft, isBottom) {
      e.style.width = e.style.height = quadrantSizeCss;
      e.style.left = isLeft ? '0' : quadrantSizeCss;
      e.style.top = isBottom ? quadrantSizeCss : '0';
      e.style.backgroundSize = tileSheetBackgroundSize;
    }
    
    for (var x=0; x<tiles.length; x++) {
      for (var y=0; y<tiles[0].length; y++) {
        var tile = tiles[x][y];
        var typeIndicator = tile.elem[0];
        var bg = typeIndicator.parentNode;
        if (x==0) {
          var row = bg.parentNode;
          row.style.height = sizeCss;
        }
        applySize(tile.topSquare);
        applySize(tile.affectedIndicator);
        applySize(tile.selectionIndicator);
        tile.selectionIndicator.style.backgroundSize = singleTileBackgroundSize;
        applySize(tile.elem[0]);
        applySize(tile.background[0]);
        for (var q=0;q<4; q++) {
          applyQuadrantSize(tile.quadrantElems[q], q&2, (q+1)&2);
        }
        
        tile.type.drawOn(tile.elem, tile);
        if(tile.topType)
          tile.topType.drawOn(tile.elem, tile, true);
        floorType.drawOn(tile.background, null);
      }
    }
  }
  
  $('#clear').click(function() {
    if (confirm('Are you sure you want to clear the map?')) {
      clearMap();
    }
    $(this).blur();
  });
  
  $("div.tileBackground").css('background-image', $("#tiles").attr('url'));
  $("div.tileBackground").css("background-position", "-520px -160px");
  
  $("div.tileQuadrant").css('background-image', $("#tiles").attr('url'));

  $(".Wall_BL").children().css({"background-size":""});
  //$(".Wall_BL").css({"background-image":""});
  $(".Wall_BR").children().css({"background-size":""});
  //$(".Wall_BR").css({"background-image":""});
  $(".Wall_TL").children().css({"background-size":""});
  //$(".Wall_TL").css({"background-image":""});
  $(".Wall_TR").children().css({"background-size":""});
  //$(".Wall_TR").css({"background-image":""});
  $(".Wall").children().css({"background-size":""});
  //$(".Wall").css({"background-image":""});
  /*$(".nestedSquare").css({"background-image":""});
  $(".topSquare").css({"background-image":""});*/
  
  function enableZoomButtons() {
    enable($('#zoomIn'), zoom<maxZoom);
    enable($('#zoomOut'), zoom>0);
  }
  $('#zoomIn').click(function() {
    zoom = Math.min(maxZoom, zoom+1);
    showZoom();
    enableZoomButtons();
  });
  $('#zoomOut').click(function() {
    zoom = Math.max(0, zoom-1);
    showZoom();
    enableZoomButtons();
  });
  enableZoomButtons();
  
  function rotateMap(degrees) {
    var canvas = document.createElement('canvas');
    canvas.height = tiles.length;
    canvas.width = tiles[0].length;
    var ctx = canvas.getContext('2d');
    
    var rowlength = tiles.length;
    var tilemap = [[]];
    for(var x = 0;x < rowlength;x++) {
      var collength = tiles[x].length;
      for(var y = 0;y < collength;y++) {
        var i, j;
        if(degrees==90) {
          i = collength-y-1;
          j = x;
        } else if(degrees==-90) {
          i = y;
          j = rowlength-x-1;
        }
        if(!tilemap[x]) tilemap[x] = [];
        tilemap[x][y] = {x: i, y: j};
      }
    }
    
    var json = transformLogic(makeLogic(),tilemap);

    var png = getPngBase64Url();
    var image = new Image();
    image.src = png;
    image.onload = function() {
      $('body').css('cursor','wait');
      ctx.translate(canvas.width/2,canvas.height/2);
      ctx.rotate(degrees * Math.PI / 180);
      ctx.drawImage(image,-canvas.height/2,-canvas.width/2)
      png = canvas.toDataURL();
      restoreFromPngAndJson(png, makeLogicString(json), false, false, degrees);
    };
  }
  $('#rotateLeft').click(function() {
    rotateMap(-90);
  });
  $('#rotateRight').click(function() {
    rotateMap(90);
  });
  
  function flipMap(type) {
    var canvas = document.createElement('canvas');
    canvas.height = tiles[0].length;
    canvas.width = tiles.length;
    var ctx = canvas.getContext('2d');
    
    var rowlength = tiles.length;
    var tilemap = [[]];
    for(var x = 0;x < rowlength;x++) {
      var collength = tiles[x].length;
      for(var y = 0;y < collength;y++) {
        var i, j;
        if(type[0]==-1) {
          i = rowlength-x-1;
        }
        if(type[1]==-1) {
          j = collength-y-1;
        }
        if(!tilemap[x]) tilemap[x] = [];
        tilemap[x][y] = {x: (i!=undefined)?i:x, y: (j!=undefined)?j:y};
      }
    }
    
    var json = transformLogic(makeLogic(),tilemap);

    var png = getPngBase64Url();
    var image = new Image();
    image.src = png;
    image.onload = function() {
      $('body').css('cursor','wait');
      ctx.scale(type[0],type[1]);
      ctx.drawImage(image,0,0,canvas.width*type[0],canvas.height*type[1]);
      png = canvas.toDataURL();
      restoreFromPngAndJson(png, makeLogicString(json), false, false, [type[0]==-1 ? 1 : 2]);
    };
  }
  $('#flipVertical').click(function() {
    flipMap([1,-1]);
  });
  $('#flipHorizontal').click(function() {
    flipMap([-1,1]);
  })
  
  function mirrorMap(type) {
    var canvas = document.createElement('canvas');
    canvas.height = tiles[0].length*(!!type[1]+1);
    canvas.width = tiles.length*(!!type[0]+1);
    var ctx = canvas.getContext('2d');
    
    var rowlength = tiles.length;
    var tilemap = [[]];
    var tilemap2 = [[]];
    for(var x = 0;x < rowlength;x++) {
      var collength = tiles[x].length;
      for(var y = 0;y < collength;y++) {
        var i, j, i2, j2;
        if(type[0]) {
          if(type[0]==-1) {
            i = rowlength+x;
          }
          i2 = -(type[0]*rowlength+x+1);
        }
        if(type[1]) {
          if(type[1]==-1) {
            j = collength+y;
          }
          j2 = -(type[1]*collength+y+1);
        }
        if(!tilemap[x]) tilemap[x] = [];
        tilemap[x][y] = {x: (i!=undefined)?i:x, y: (j!=undefined)?j:y};
        if(!tilemap2[x]) tilemap2[x] = [];
        tilemap2[x][y] = {x: (i2!=undefined)?i2:x, y: (j2!=undefined)?j2:y};
      }
    }
    
    var json = transformLogic(makeLogic(),tilemap,tilemap2);

    var png = getPngBase64Url();
    var image = new Image();
    image.src = png;
    image.onload = function() {
      $('body').css('cursor','wait');
      ctx.save();
      ctx.scale(type[0] ? -1 : 1,type[1] ? -1 : 1);
      ctx.drawImage(image,image.width*type[0],image.height*type[1],image.width,image.height);
      ctx.restore();
      ctx.drawImage(image,type[0] ? canvas.width/2*(type[0]+2) : 0,type[1] ? canvas.height/2*(type[1]+2) : 0,image.width,image.height);
      png = canvas.toDataURL();
      restoreFromPngAndJson(png, makeLogicString(json), false, false, [type[0] ? 1 : 2,
        type[0] ? -(type[0]+1)*tiles.length : 0,
        type[0] ? -(type[0]+1)*tiles.length+tiles.length : tiles.length,
        type[1] ? -(type[1]+1)*tiles[0].length : 0,
        type[1] ? -(type[1]+1)*tiles[0].length+tiles[0].length : tiles[0].length
      ]);
    };
  }
  $('#mirrorOptions a').click(function() {
      $('#mirrorOptions a').removeClass('active');
      $(this).toggleClass('active');
    });
  $('#mirror').click(function(e) {
    $('#mirrorOptions a').removeClass('active');
    e.preventDefault();
  });
  $( "#mirrorSubmit" ).click(function(e) {
    if(!$('a.mirror-dir.active').length) return;
    var type = JSON.parse($('a.mirror-dir.active').attr('value')); //[-2,0] = mirror on right, [-1,0] = left, [0,-1] = up, [0,-2] = down
    var width = tiles.length * (type[0] ? 2 : 1);
    var height = tiles[0].length * (type[1] ? 2 : 1);
    if (width * height > 3600) {
      addAlert('warning','Warning: Maps larger than 3600 tiles may cause lag and may not be allowed to be tested by normal means',2000);
      /*if (!confirm('It\'s currently not possible to test maps larger than 3600 tiles.\nVery large maps can (will) lag your browser as well.\nAre you sure you want to resize?')) {
        e.preventDefault();
        return;
      }*/
    }
    mirrorMap(type);
    e.preventDefault();
  });
  $('#mirrorOptions').on('keydown',function(e){
    if(e.keyCode == 13){
      e.preventDefault();
      $(this).find('button:last').click();
    }
  });
  
  $('#dropHelp').click(function() {
    alert("Importing Map:\n" +
      "Drag a .png file and a .json file from your file manager onto their respective squares. When both are added, hit Import to apply them to the current map.\n\n" +
      "Exporting Map:\n" +
      "Hit Export. The .png and .json files can then be dragged or clicked from their respective squares.")
  });
  
  window.addEventListener("beforeunload", function (e) {
    localStorage.setItem('png', getPngBase64Url());
    localStorage.setItem('json', makeLogicString(null,true));
    addAlert('success','Map auto-saved!',1000);
  });
  
  function formatDate(date) {
    var myDate = new Date();
    var month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ampm;
    //"13 Jan 2012 11:00am";
    return date.getDate()+" "+month[date.getMonth()]+" "+date.getFullYear()+" "+strTime;
  }
  
  $('.slot').click(function() {
    var old = $(this).hasClass('active');
    $('.slot').removeClass('active');
    if(!old) {
      $(this).addClass('active');
      if($(this).hasClass('empty')) {
        $('.slot-buttons').children().addClass('disabled');
        $('#saveToSlot').removeClass('disabled');
      } else {
        $('.slot-buttons').children().removeClass('disabled');
      }
    } else {
      $('.slot-buttons').children().addClass('disabled');
    }
  });
  $('.slot button').click(function(e) {
    e.stopPropagation();
    var slot = $(this).closest('.slot');
    var a = document.createElement('a');
    var type = $(this).is(':first-child') ? 'png' : 'json';
    var json = makeLogic();
    a.href = slot.data(type);
    if(type==='json')
      a.href = 'data:application/json;base64,' + Base64.encode(makeLogicString(JSON.parse(slot.data(type))));
    a.download = json.info.name+'.'+type;
    a.click();
    $(this).blur();
  });
  
  $('#editSlot').click(function() {
    var slot = $('.slot.active');
    restoreFromPngAndJson(slot.data('png'), slot.data('json'));
    $(this).blur();
    $('#saveDialog').modal('hide');
  });
  $('#saveToSlot').click(function() {
    var which = $('.slot.active').attr('id').slice(-1);
    var confirmed = true;
    if(!$('.slot.active').hasClass('empty')) {
      confirmed = confirm('Are you sure you want to overwrite the map already saved in this slot? This cannot be undone!');
    }
    if(confirmed) {
      var png = getPngBase64Url();
      var json = makeLogic();
      var title = json.info.name;
      var now = formatDate(new Date());
      var slot = $('#slot'+which).removeClass('empty').data('png',png).data('json',makeLogicString(json,true));
      slot.find('p:first').css('color','#333').text(json.info.name || 'Unititled');
      slot.find('p:last').text(now || 'Unknown');
      slot.find('button').removeClass('disabled');
      localStorage.setItem('png'+which, png);
      localStorage.setItem('json'+which, makeLogicString(json,true));
      localStorage.setItem('title'+which, title);
      localStorage.setItem('date'+which, now);
      addAlert('success','Map successfully saved to slot '+which+'!',1000);
      $('.slot-buttons').children().removeClass('disabled');
    }
    $(this).blur();
  });
  $('#clearSlot').click(function() {
    if(confirm('Are you sure you want to clear this slot? This cannot be undone!')) {
      var which = $('.slot.active').attr('id').slice(-1);
      var slot = $('.slot.active').addClass('empty').removeClass('active').removeData('png').removeData('json');
      slot.find('p:first').css('color','#888').text('Empty');
      slot.find('p:last').text('');
      slot.find('button').addClass('disabled');
      $('.slot-buttons').children().addClass('disabled');
      localStorage.removeItem('png'+which);
      localStorage.removeItem('json'+which);
      localStorage.removeItem('title'+which);
      localStorage.removeItem('date'+which);
    }
    $(this).blur();
  });
  
  var slotCount = 3;
  for(var i = 1;i <= slotCount;i++) {
    var savedPng = localStorage.getItem('png'+i);
    var savedJson = localStorage.getItem('json'+i);
    var savedTitle = localStorage.getItem('title'+i);
    var savedDate = localStorage.getItem('date'+i);
    if(savedPng && savedJson) {
      var slot = $('#slot'+i).removeClass('empty').data('png',savedPng).data('json',savedJson);
      slot.find('p:first').css('color','#333').text(savedTitle || 'Unititled');
      slot.find('p:last').text(savedDate || 'Unknown');
      slot.find('button').removeClass('disabled');
    }
  }
});