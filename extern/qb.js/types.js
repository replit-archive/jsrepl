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
function NullType()
{
    // used to denote the absense of a parameter in system calls.
    this.name = ":NULL";
}

NullType.prototype =
{
    createInstance: function()
    {
        return null;
    },

    copy: function( value )
    {
        return value;
    }
};

function DeriveTypeNameFromVariable( name )
{
    switch( name[name.length-1] ) {
        case '$': return "STRING";          
        case '%': return "INTEGER";
        case '&': return "LONG";
        case '#': return "DOUBLE";          
        case '!': return "SINGLE";          
    }
    return null; // Must use default type from DEFINT or single.
}


/** @constructor */
function IntegerType()
{
    this.name = "INTEGER";
}

IntegerType.prototype =
{
    createInstance: function()
    {
        return 0;
    },

    copy: function( value )
    {
        return (Math.round( value + 32768 ) & 65535) - 32768;
    }
};

/** @constructor */
function SingleType()
{
    this.name = "SINGLE";
}

SingleType.prototype =
{
    createInstance: function()
    {
        return 0.0;
    },

    copy: function( value )
    {
        return value;
    }
};

/** @constructor */
function DoubleType()
{
    this.name = "DOUBLE";
}

DoubleType.prototype =
{
    createInstance: function()
    {
        return 0.0;
    },

    copy: function( value )
    {
        return value;
    }
};

/** @constructor */
function StringType()
{
    this.name = "STRING";
}

StringType.prototype =
{
    createInstance: function()
    {
        return "";
    },

    copy: function( value )
    {
        return value;
    }
};

/** @constructor */
function AnyType()
{
    this.name = "ANY";
}

/** @constructor */
function ScalarVariable( type, value )
{
    this.type = type;
    this.value = value;
}

ScalarVariable.prototype.copy = function()
{
    return new ScalarVariable( this.type, 
        this.type.copy( this.value ) );
};

/** @constructor */
function ArrayType(elementType)
{
    this.elementType = elementType;
    this.name = "ARRAY OF " + elementType.name;
}

ArrayType.prototype = 
{

};


/** @constructor */
function UserType( name, members )
{
    this.name = name;

    // Members: A mapping of names to types.
    this.members = members;
}

UserType.prototype =
{
    createInstance: function()
    {
        var user = {};

        for ( var name in this.members ) {
            user[name] = new ScalarVariable( 
                this.members[name],
                this.members[name].createInstance() );
        }

        return user;
    },

    copy: function( value )
    {
        var newValue = {};
        for ( var key in value ) {
            newValue[key] = value[key].copy();
        }

        return newValue;
    }
};

/** @constructor */
function Dimension( lower, upper )
{
    this.lower = lower;
    this.upper = upper;
}

/** @constructor */
function ArrayVariable( type, dimensions )
{
    this.type = type;
    this.dimensions = dimensions;
    this.values = [];
    var totalSize = 1;
    var i;

    for ( i = 0; i < this.dimensions.length; i++ )
    {
        totalSize *= this.dimensions[i].upper - this.dimensions[i].lower + 1;
    }

    for ( i = 0; i < totalSize; i++ ) {
        this.values.push( 
            new ScalarVariable( this.type, this.type.createInstance() ) );
    }
}

ArrayVariable.prototype.copy = function() 
{
    return this;
};

ArrayVariable.prototype.getIndex = function( indexes )
{
    var mult = 1;
    var index = 0;

    //dbg.printf("Access array indexes: %s\n", indexes);
    for( var i = this.dimensions.length-1; i >= 0; i-- ) {
        index += (indexes[i] - this.dimensions[i].lower) * mult;
        mult *= this.dimensions[i].upper - this.dimensions[i].lower + 1;
    }
    return index;
};

ArrayVariable.prototype.assign = function( indexes, value )
{
    var index = this.getIndex( indexes );
    //dbg.printf("Assign %s to array index %d\n", value, index);
    this.values[index] = value;
};

ArrayVariable.prototype.access = function( indexes, value )
{
    var index = this.getIndex( indexes );
    //dbg.printf("access array index %d\n", index);
    return this.values[index];
};

function IsNumericType( type )
{
    return type.name == "INTEGER" ||
        type.name == "SINGLE" ||
        type.name == "DOUBLE";
}

function IsStringType( type )
{
    return type.name == "STRING";
}

function IsArrayType( type )
{
    return type instanceof ArrayType;
}

function IsUserType( type )
{
    return type instanceof UserType;
}

function IsNullType( type )
{
    return type instanceof NullType;
}

function AreTypesCompatible( type1, type2 )
{
    return type1.name == type2.name ||
        IsNumericType(type1) && IsNumericType(type2) ||
        IsArrayType( type1 ) && IsArrayType(type2) && 
            (type1.elementType.name == "ANY" ||
             type2.elementType.name == "ANY" ) ||

        !IsArrayType(type1) && !IsArrayType(type2) && (
            type1.name == "ANY" || type2.name == "ANY" )
        ;
}

