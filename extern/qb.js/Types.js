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

/**
  Defines:
    QBasic.NullType
    QBasic.IntegerType
    QBasic.SingleType
    QBasic.DoubleType
    QBasic.StringType
    QBasic.AnyType
    QBasic.DeriveTypeNameFromVariable
    QBasic.ArrayType
    QBasic.UserType
    QBasic.Dimension
    QBasic.ScalarVariable
    QBasic.ArrayVariable
    QBasic.IsNumericType
    QBasic.IsStringType
    QBasic.IsArrayType
    QBasic.IsUserType
    QBasic.IsNullType
    QBasic.AreTypesCompatible
  Uses:
    -
*/

(function() {
  /** @constructor */
  QBasic.NullType = function() {
    // used to denote the absense of a parameter in system calls.
    this.name = ":NULL";
  };

  QBasic.NullType.prototype = {
    createInstance: function() {
      return null;
    },

    copy: function (value) {
      return value;
    }
  };

  /** @constructor */
  QBasic.IntegerType = function() {
    this.name = "INTEGER";
  };

  QBasic.IntegerType.prototype = {
    createInstance: function() {
      return 0;
    },

    copy: function (value) {
      return (Math.round(value + 32768) & 65535) - 32768;
    }
  };

  /** @constructor */
  QBasic.SingleType = function() {
    this.name = "SINGLE";
  };

  QBasic.SingleType.prototype = {
    createInstance: function() {
      return 0.0;
    },

    copy: function (value) {
      return value;
    }
  };

  /** @constructor */
  QBasic.DoubleType = function() {
    this.name = "DOUBLE";
  };

  QBasic.DoubleType.prototype = {
    createInstance: function() {
      return 0.0;
    },

    copy: function (value) {
      return value;
    }
  };

  /** @constructor */
  QBasic.StringType = function() {
    this.name = "STRING";
  };

  QBasic.StringType.prototype = {
    createInstance: function() {
      return "";
    },

    copy: function (value) {
      return value;
    }
  };

  /** @constructor */
  QBasic.AnyType = function() {
    this.name = "ANY";
  };

  QBasic.DeriveTypeNameFromVariable = function(name) {
    switch (name[name.length - 1]) {
    case '$':
      return "STRING";
    case '%':
      return "INTEGER";
    case '&':
      return "LONG";
    case '#':
      return "DOUBLE";
    case '!':
      return "SINGLE";
    }
    return null; // Must use default type from DEFINT or single.
  };

  /** @constructor */
  QBasic.ArrayType = function(elementType) {
    this.elementType = elementType;
    this.name = "ARRAY OF " + elementType.name;
  };

  /** @constructor */
  QBasic.UserType = function(name, members) {
    this.name = name;

    // Members: A mapping of names to types.
    this.members = members;
  };

  QBasic.UserType.prototype = {
    createInstance: function() {
      var user = {};

      for (var name in this.members) {
        user[name] = new QBasic.ScalarVariable(
            this.members[name], this.members[name].createInstance());
      }

      return user;
    },

    copy: function (value) {
      var newValue = {};
      for (var key in value) {
        newValue[key] = value[key].copy();
      }
      return newValue;
    }
  };

  /** @constructor */
  QBasic.Dimension = function(lower, upper) {
    this.lower = lower;
    this.upper = upper;
  };

  /** @constructor */
  QBasic.ScalarVariable = function(type, value) {
    this.type = type;
    this.value = value;
  };

  QBasic.ScalarVariable.prototype = {
    copy: function() {
      return new QBasic.ScalarVariable(this.type, this.type.copy(this.value));
    }
  };

  /** @constructor */
  QBasic.ArrayVariable = function(type, dimensions) {
    this.type = type;
    this.dimensions = dimensions;
    this.values = [];
    var totalSize = 1;
    var i;

    for (i = 0; i < this.dimensions.length; i++) {
      totalSize *= this.dimensions[i].upper - this.dimensions[i].lower + 1;
    }

    for (i = 0; i < totalSize; i++) {
      this.values.push(
      new QBasic.ScalarVariable(this.type, this.type.createInstance()));
    }
  };

  QBasic.ArrayVariable.prototype = {
    copy: function() {
      return this;
    },
    getIndex: function(indexes) {
      var mult = 1;
      var index = 0;

      //console.log("Access array indexes: " + indexes);
      for (var i = this.dimensions.length - 1; i >= 0; i--) {
        index += (indexes[i] - this.dimensions[i].lower) * mult;
        mult *= this.dimensions[i].upper - this.dimensions[i].lower + 1;
      }
      return index;
    },
    assign: function(indexes, value) {
      var index = this.getIndex(indexes);
      //console.log("Assign " + value + " to array index " + index);
      this.values[index] = value;
    },
    access: function(indexes, value) {
      var index = this.getIndex(indexes);
      //console.log("access array index " + index);
      return this.values[index];
    }
  };

  QBasic.IsNumericType = function(type) {
    return (type.name == "INTEGER" ||
            type.name == "SINGLE" ||
            type.name == "DOUBLE");
  };

  QBasic.IsStringType = function(type) {
    return type.name == "STRING";
  };

  QBasic.IsArrayType = function(type) {
    return type instanceof QBasic.ArrayType;
  };

  QBasic.IsUserType = function(type) {
    return type instanceof QBasic.UserType;
  };

  QBasic.IsNullType = function(type) {
    return type instanceof QBasic.NullType;
  };

  QBasic.AreTypesCompatible = function(type1, type2) {
    if (type1.name == type2.name) return true;
    if (QBasic.IsNumericType(type1) && QBasic.IsNumericType(type2)) return true;
    if (QBasic.IsArrayType(type1) && QBasic.IsArrayType(type2) &&
        (type1.elementType.name == "ANY" || type2.elementType.name == "ANY")) {
      return true;
    }
    if (!QBasic.IsArrayType(type1) && !QBasic.IsArrayType(type2) && 
        (type1.name == "ANY" || type2.name == "ANY")) {
      return true;
    }
    return false;
  };
})();
