/**
    Copyright 2010 Steve Hanov

    This file is part of qb.js

    qb.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    qb.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with qb.js.  If not, see <http://www.gnu.org/licenses/>.
*/    
//#include <debug.js>
/** @constructor */
function ImageManipulator( imageData )
{
    this.image = imageData;
}

ImageManipulator.prototype =
{
    get: function(x,y)
    {
        return this.image.data[this.image.width * y + x];
    },

    put: function(x,y,clr)
    {
        this.image.data[this.image.width*y+x] = clr;
    }
};

var globalConsole;
/** @constructor */
function Console( )
{
    var canvas = document.createElement("canvas");
    this.canvas = canvas;
    this.canvas.width = 640;
    this.canvas.height = 400;
    this.canvas.tabIndex = 0;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.setTransform( 1, 0, 0, 1, 0, 0 );
    this.charImg = document.createElement("img");
    this.charImg.setAttribute("src", ScriptSrc + "charmap.png");

    this.interval = 0;
    this.cursorEnabled = false;
    this.cursorShown = false;
    this.cursorBackground = null;
    globalConsole = this;

    this.keyBuffer = [];
    this.reset(false);

    this.hasFocus = false;

    var self = this;

    $(window).keydown( function( event ) {
        if ( self.hasFocus ) {    
            self.onKeyDown( event );
            event.preventDefault();
            return false;
        }
    });

    $(canvas).click( function( event ) {
        canvas.style.borderColor = "#008800";
        $(canvas).focus();
        self.hasFocus = true;
        event.stopPropagation();
    });

    $(window).click( function( event ) {
        self.hasFocus = false;
        canvas.style.borderColor = "#888888";
    });

    $(canvas).css("border-width", "5px");
    $(canvas).css("border-color", "#888888");
    $(canvas).css("border-style", "solid");

    this.cls();
}

Console.prototype = {

    Colours: [
        "#000000", 
        "#000088",
        "#008800",
        "#008888",
        "#880000",
        "#880088",
        "#884400",
        "#888888",
        "#444444",
        "#0000ff",
        "#00ff00",
        "#00ffff",
        "#ff0000",
        "#ff00ff",
        "#ffff00",
        "#ffffff"
    ],

    ScreenDimensions: {
        1: { width: 320, height: 200 },
        2: { width: 640, height: 200 },
        3: { width: 720, height: 348 },
        4: { width: 640, height: 400 },
        7: { width: 320, height: 200 },
        8: { width: 640, height: 200 },
        9: { width: 640, height: 350 },
        10: { width: 640, height: 350 },
        11: { width: 640, height: 480 },
        12: { width: 640, height: 480 },
        13: { width: 320, height: 200 }
    },

    reset: function(testMode) 
    {
        this.fgcolourNum = 7;
        this.bgcolourNum = 0;
        this.bgcolour = this.Colours[this.bgcolourNum];
        this.fgcolour = this.Colours[this.fgcolourNum];
        this.curX = 0;
        this.curY = 0;
        this.x = 0;
        this.y = 0;

        this.rows = 25;
        this.cols = 80;
        this.charWidth = 8;
        this.charHeight = 16;

        this.inputMode = false;
        this.onInputDone = null;
        this.inputStr = 0;
        this.inputPos = 0;
        this.width = this.cols * this.charWidth;
        this.height = this.rows * this.charHeight;

        this.cls();
        this.recording = testMode;
        this.recorded = "";
    },

    record: function(str)
    {
        if ( this.recording ) {
            this.recorded += str;
        }
    },

    printError: function(str)
    {
        if ( this.recording ) {
            return;
        }
        this.print( str );
    },

    setKeyBuffer: function( str )
    {
        this.keyBuffer.length = 0;
        for( var i = 0; i < str.length; i++ ) {
            this.keyBuffer.push( str.charCodeAt( i ) );
        }
    },

    screen: function( num )
    {
        var dimensions = this.ScreenDimensions[num];
        if ( dimensions === undefined ) {
            return false;
        }

        this.cursor( false );

        $(this.canvas).width( dimensions.width );
        $(this.canvas).height( dimensions.height );

        this.ctx.scale( this.width / dimensions.width,
            this.height / dimensions.height );
    
        this.width = dimensions.width;
        this.height = dimensions.height;
    },

    line: function( x1, y1, x2, y2 )
    {
        this.ctx.strokeStyle = this.fgcolour;
        this.ctx.moveTo( x1, y1 );
        this.ctx.lineTo( x2, y2 );
        this.ctx.stroke();

        this.curX = x2;
        this.curY = y2;
    },

    lineTo: function( x, y )
    {
        this.line( this.curX, this.curY, x, y );
    },

    circle: function( x, y, radius, colour, start, end, aspect, step )
    {
        // all parameters are optional except for x, y, radius, and step.
        if ( step ) {
            x = this.curX + x;
            y = this.curY + y;
        }

        if ( aspect === undefined ) {
            aspect = 4 * (this.height / this.width) / 3;
        }

        this.ctx.save();
        this.ctx.translate( x, y );
        if ( aspect > 0 ) {
            this.ctx.scale( 1.0, aspect );  
        } else {
            this.ctx.scale( aspect, 1.0 );  
        }

        if ( colour ) {
            this.ctx.strokeStyle = this.Colours[colour];
        }

        if ( start === undefined ) {
            start = 0.0;
        }

        if ( end === undefined ) {
            end = 2 * Math.PI;
        }

        start = 2 * Math.PI - start;
        end = 2 * Math.PI - end;

        this.ctx.beginPath();
        this.ctx.arc( 0, 0, radius, start, end, true );
        this.ctx.stroke();

        this.ctx.restore();
    },

    get: function( x1, y1, x2, y2, step1, step2 )
    {
        var temp;

        if ( step1 ) {
            x1 = this.curX + x1;
            y1 = this.curY + y1;
        }

        if ( step2 ) {
            x1 = this.curX + x2;
            y2 = this.curY + y2;
        }

        if ( x1 > x2 ) {
            temp = x1;
            x1 = x2;
            x2 = temp;
        }

        if ( y1 > y2 ) {
            temp = y1;
            y1 = y2;
            y2 = temp;
        }

        return this.ctx.getImageData( x1, y1, x2-x1, y2-y1 );
    },

    put: function( data, x, y ) 
    {
        this.ctx.putImageData( data, x, y ); 
    },

    paint: function( x, y, colour, borderColour, step )
    {
        var image = new ImageManipulator( 
            this.ctx.getImageData(0,0,this.width,this.height) );
    
        dbg.printf("%s\n", image.get(10, 10));
    },

    cls: function()
    {
        this.record("[CLS]");
        this.cursor( false );
        this.x = 0;
        this.y = 0;
        this.ctx.fillStyle = this.bgcolour;
        this.ctx.fillRect( 0, 0, this.width, this.height );
    },

    locate: function( row, col )
    {
        this.record("[L" + row + "," + col + "]");
        this.cursor( false );
        this.x = Math.floor(col)-1;
        this.y = Math.floor(row)-1;
    },

    color: function( fg, bg )
    {
        if ( fg === null ) {
            fg = this.fgcolourNum;
        }
        if ( bg === null ) {
            bg = this.bgcolourNum;
        }
        this.record("[C" + fg);
        this.record("," + bg);
        this.record("]\n");

        this.fgcolourNum = fg;
        this.fgcolour = this.Colours[fg];
        this.bgcolourNum = bg;
        this.bgcolour = this.Colours[bg];
    },

    scroll: function()
    {
        this.cursor( false );
        this.ctx.drawImage( this.canvas,
            0, this.charHeight, 
            this.width, this.height-this.charHeight, 
            0, 0, 
            this.width, this.height-this.charHeight );
        this.ctx.fillStyle = this.bgcolour;
        this.ctx.fillRect( 0, this.height-this.charHeight, 
            this.width, this.charHeight );
        this.y -= 1;
    },

    input: function( onInputDone )
    {
        if ( this.recording ) {
            var str = "";
            while( this.keyBuffer.length > 0 ) {
                str += String.fromCharCode( this.keyBuffer.shift() );
            }

            onInputDone( str );

        } else {
            this.enableCursor( true );
            this.onInputDone = onInputDone;
            this.inputMode = true;
            this.inputStr = "";
            this.inputPos = 0;
        }
    },

    backup: function( num )
    {
        this.cursor( false );

        this.x -= num;
        while( this.x < 0 ) {
            this.y -= 1;
            this.x += this.cols;
        }

        if ( this.y < 0 ) {
            this.y = 0;
        }
    },

    onKeyDown: function( event )
    {
        if ( this.inputMode ) {

            // if input position is at least 1,
            if ( this.inputStr.length > 0 ) {
                // if it's backspace,
                if ( event.keyCode == 8 ) {
                    this.inputStr = this.inputStr.substr( 0, this.inputStr.length -
                            1 );
                    this.backup( 1 );
                    this.print( " " );
                    this.backup( 1 );
                }
            }

            if ( event.keyCode === 13 ) {
                // done
                this.inputMode = false;
                this.print("\n");
                this.enableCursor( false );
                this.onInputDone( this.inputStr );
            }

            if ( event.keyCode >= 32 && event.keyCode <= 126 ) {
                // insert the character at the string position, and increment input
                // position.
                var ch = String.fromCharCode( event.keyCode );
                this.inputStr += ch;
                this.inputPos += 1;
                this.print( ch );
            }

        } else {
            var SpecialChars = {
                37: 75, // left
                38: 72, // up
                39: 77, // right
                40: 80 // down
            };

            if ( event.keyCode in SpecialChars ) {
                this.keyBuffer.push( 0 );
                this.keyBuffer.push( SpecialChars[event.keyCode] );
            } else {
                this.keyBuffer.push( event.keyCode );
            }
        }
    },

    getKeyFromBuffer: function()
    {
        if ( this.keyBuffer.length > 0 ) {
            return this.keyBuffer.shift();
        } else {
            return -1;
        }
    },

    enableCursor: function( enabled ) 
    {
        if ( enabled && !this.cursorEnabled ) {
            this.interval = window.setInterval( "globalConsole.toggleCursor()", 500
            );
            this.cursor( true );
        } else {
            window.clearInterval( this.interval );
            this.cursor( false );
        }

        this.cursorEnabled = enabled;
    },

    toggleCursor: function()
    {
        this.cursor( !this.cursorShown );
    },

    cursor: function( show )
    {
        if ( show == this.cursorShown ) {
            return;
        }

        if ( show ) {
            this.ctx.fillStyle = this.fgcolour;
            this.ctx.fillRect( this.x * this.charWidth, 
                this.y * this.charHeight + this.charHeight - 2, this.charWidth, 2 );
        } else {
            this.ctx.fillStyle = this.bgcolour;
            this.ctx.fillRect( this.x * this.charWidth, 
                this.y * this.charHeight + this.charHeight - 2, 
                    this.charWidth, 2 );
        }

        this.cursorShown = show;
    },

    newline: function() 
    {
        this.x = 0;
        this.y += 1;
    },

    print: function(str) 
    {
        if ( this.recording ) {
            this.recorded += str;
        }

        this.cursor( false );
        this.ctx.fillStyle = this.bgcolour;

        for( var i = 0; i < str.length; i++ ) {
            if ( this.y == this.rows ) { 
                this.scroll();
            }

            if ( str[i] == '\n' ) {
                this.newline();
            } else {
                var ch = str.charCodeAt(i);
                this.ctx.fillRect( this.x * this.charWidth, 
                    this.y * this.charHeight, this.charWidth, this.charHeight );
                this.ctx.drawImage( this.charImg,
                     this.charWidth * (ch % 16),
                     this.fgcolourNum * this.charHeight * 16 +
                     this.charHeight * Math.floor( ch / 16 ),
                     this.charWidth,
                     this.charHeight,
                     this.x * this.charWidth, 
                     this.y * this.charHeight, 
                     this.charWidth, 
                     this.charHeight );
                this.x += 1;
                if ( this.x == this.cols ) {
                    this.newline();
                }
            }
        }
    }
};
