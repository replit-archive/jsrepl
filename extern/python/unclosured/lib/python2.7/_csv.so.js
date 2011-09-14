"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 40;
  var $1___SIZE = 8;
  var $2___SIZE = 100;
  var $3___SIZE = 20;
  var $4___SIZE = 20;
  var $5___SIZE = 100;
  var $6___SIZE = 20;
  var $7___SIZE = 196;
  var $8___SIZE = 16;
  var $9___SIZE = 60;
  var $10___SIZE = 196;
  var $11___SIZE = 48;
  var $12___SIZE = 40;
  var $13___SIZE = 128;
  var $struct_DialectObj___SIZE = 32;
  var $struct_DialectObj___FLATTENER = [ 0, 4, 8, 12, 13, 14, 16, 20, 24, 28 ];
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct_ReaderObj___SIZE = 44;
  var $struct_StyleDesc___SIZE = 8;
  var $struct_WriterObj___SIZE = 32;
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _field_limit;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var _quote_styles;
  var _dialects;
  var _error_obj;
  var __str4;
  var __str5;
  var __str6;
  var __str7;
  var __str8;
  var __str9;
  var __str10;
  var __str11;
  var __str12;
  var _Dialect_memberlist;
  var __str13;
  var __str14;
  var __str15;
  var __str16;
  var _Dialect_getsetlist;
  var _dialect_kws;
  var __str17;
  var __str18;
  var __str19;
  var __str20;
  var __str21;
  var __str22;
  var _Dialect_Type_doc;
  var __str23;
  var _Dialect_Type;
  var __str24;
  var __str25;
  var __str26;
  var __str27;
  var __str28;
  var __str29;
  var __str30;
  var _Reader_Type_doc;
  var _Reader_methods;
  var __str31;
  var _Reader_memberlist;
  var __str32;
  var _Reader_Type;
  var __str33;
  var __str34;
  var __str35;
  var __str36;
  var _csv_writerow_doc;
  var __str37;
  var __str38;
  var _csv_writerows_doc;
  var __str39;
  var __str40;
  var __str41;
  var _Writer_methods;
  var _Writer_memberlist;
  var _Writer_Type_doc;
  var __str42;
  var _Writer_Type;
  var __str43;
  var __str44;
  var __str45;
  var __str46;
  var __str47;
  var _csv_module_doc;
  var _csv_reader_doc;
  var _csv_writer_doc;
  var _csv_list_dialects_doc;
  var _csv_get_dialect_doc;
  var _csv_register_dialect_doc;
  var _csv_unregister_dialect_doc;
  var _csv_field_size_limit_doc;
  var __str48;
  var __str49;
  var __str50;
  var __str51;
  var __str52;
  var __str53;
  var _csv_methods;
  var __str54;
  var __str55;
  var __str56;
  var __str57;
  var __str58;
  var __str59;
  var __str60;
  function _get_dialect_from_registry($name_obj) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $name_obj_addr;
      var $retval;
      var $0;
      var $dialect_obj;
      $name_obj_addr = $name_obj;
      var $1 = HEAP[_dialects];
      
      var $3 = _PyDict_GetItem($1, $name_obj_addr);
      $dialect_obj = $3;
      
      
      if ($dialect_obj == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $6 = _PyErr_Occurred();
      
      if ($6 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      var $8 = HEAP[_error_obj];
      var $9 = _PyErr_Format($8, __str4, allocate(1, "i32", ALLOC_STACK));
      __label__ = 4;
      break;
     case 3:
      
      
      
      var $13 = HEAP[$dialect_obj] + 1;
      
      
      HEAP[$dialect_obj] = $13;
      __label__ = 4;
      break;
     case 4:
      
      $0 = $dialect_obj;
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _get_string($str) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $str_addr;
      var $retval;
      var $0;
      $str_addr = $str;
      
      
      if ($str_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $6 = HEAP[$str_addr] + 1;
      
      
      HEAP[$str_addr] = $6;
      __label__ = 2;
      break;
     case 2:
      
      $0 = $str_addr;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _get_nullchar_as_None($c) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1;
    _memset(__stackBase__, 0, 1);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $c_addr = __stackBase__;
      var $retval;
      var $0;
      HEAP[$c_addr] = $c;
      
      
      if (HEAP[$c_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $4 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $4;
      $0 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 2:
      var $5 = _PyString_FromStringAndSize($c_addr, 1);
      $0 = $5;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval3 = $retval;
      STACKTOP = __stackBase__;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Dialect_get_lineterminator($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    var $3 = HEAP[$self_addr + 20];
    var $4 = _get_string($3);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _Dialect_get_escapechar($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    
    
    var $5 = HEAP[$self_addr + 14] & 255;
    var $6 = _get_nullchar_as_None($5);
    $0 = $6;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _Dialect_get_quotechar($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    
    
    var $5 = HEAP[$self_addr + 13] & 255;
    var $6 = _get_nullchar_as_None($5);
    $0 = $6;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _Dialect_get_quoting($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    var $3 = HEAP[$self_addr + 24];
    var $4 = _PyInt_FromLong($3);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function __set_bool($name, $target, $src, $dflt) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $name_addr;
      var $target_addr;
      var $src_addr;
      var $dflt_addr;
      var $retval;
      var $0;
      $name_addr = $name;
      $target_addr = $target;
      $src_addr = $src;
      $dflt_addr = $dflt;
      
      
      if ($src_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      HEAP[$target_addr] = $dflt_addr;
      __label__ = 3;
      break;
     case 2:
      
      var $6 = _PyObject_IsTrue($src_addr);
      
      HEAP[$target_addr] = $6;
      __label__ = 3;
      break;
     case 3:
      $0 = 0;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __set_int($target, $src) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $name_addr;
      var $target_addr;
      var $src_addr;
      var $dflt_addr;
      var $retval;
      var $0;
      $name_addr = __str16;
      $target_addr = $target;
      $src_addr = $src;
      $dflt_addr = 0;
      
      
      if ($src_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      HEAP[$target_addr] = $dflt_addr;
      __label__ = 5;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$src_addr + 4] + 84] & 8388608) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $12 = HEAP[_PyExc_TypeError];
      
      var $14 = _PyErr_Format($12, __str5, allocate([ $name_addr, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
      __label__ = 6;
      break;
     case 4:
      
      var $16 = _PyInt_AsLong($src_addr);
      
      HEAP[$target_addr] = $16;
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __set_char($name, $target, $src, $dflt) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $name_addr;
      var $target_addr;
      var $src_addr;
      var $dflt_addr;
      var $retval;
      var $0;
      var $s;
      $name_addr = $name;
      $target_addr = $target;
      $src_addr = $src;
      $dflt_addr = $dflt;
      
      
      if ($src_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      HEAP[$target_addr] = $dflt_addr;
      __label__ = 11;
      break;
     case 2:
      
      
      if ($src_addr == __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $8 = _PyString_Size($src_addr);
      
      if ($8 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      HEAP[$target_addr] = 0;
      __label__ = 11;
      break;
     case 5:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$src_addr + 4] + 84] & 134217728) == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      var $19 = _PyString_Size($src_addr);
      
      if ($19 != 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $21 = HEAP[_PyExc_TypeError];
      
      var $23 = _PyErr_Format($21, __str6, allocate([ $name_addr, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
      __label__ = 12;
      break;
     case 8:
      
      var $25 = _PyString_AsString($src_addr);
      $s = $25;
      
      
      if ($s == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = -1;
      __label__ = 12;
      break;
     case 10:
      
      
      var $30 = HEAP[$s];
      
      HEAP[$target_addr] = $30;
      __label__ = 11;
      break;
     case 11:
      $0 = 0;
      __label__ = 12;
      break;
     case 12:
      
      $retval = $0;
      var $retval12 = $retval;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __set_str($target, $src) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $name_addr;
      var $target_addr;
      var $src_addr;
      var $dflt_addr;
      var $retval;
      var $0;
      $name_addr = __str14;
      $target_addr = $target;
      $src_addr = $src;
      $dflt_addr = __str19;
      
      
      if ($src_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $4 = _PyString_FromString($dflt_addr);
      
      HEAP[$target_addr] = $4;
      __label__ = 11;
      break;
     case 2:
      
      
      if ($src_addr == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      HEAP[$target_addr] = 0;
      __label__ = 11;
      break;
     case 4:
      
      
      
      
      if (HEAP[$src_addr + 4] == _PyBaseString_Type) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      var $15 = HEAP[$src_addr + 4];
      var $16 = _PyType_IsSubtype($15, _PyBaseString_Type);
      
      if ($16 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $18 = HEAP[_PyExc_TypeError];
      
      var $20 = _PyErr_Format($18, __str7, allocate([ $name_addr, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
      __label__ = 12;
      break;
     case 7:
      
      
      
      if (HEAP[$target_addr] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      var $25 = HEAP[$target_addr];
      
      
      var $28 = HEAP[$25] - 1;
      var $29 = $25;
      HEAP[$29] = $28;
      
      
      
      if (HEAP[$25] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[$target_addr] + 4] + 24];
      
      var $40 = HEAP[$target_addr];
      FUNCTION_TABLE[$38]($40);
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $44 = HEAP[$src_addr] + 1;
      
      
      HEAP[$src_addr] = $44;
      
      
      HEAP[$target_addr] = $src_addr;
      __label__ = 11;
      break;
     case 11:
      $0 = 0;
      __label__ = 12;
      break;
     case 12:
      
      $retval = $0;
      var $retval12 = $retval;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dialect_check_quoting($quoting) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $quoting_addr;
      var $retval;
      var $0;
      var $qs;
      $quoting_addr = $quoting;
      $qs = _quote_styles;
      __label__ = 4;
      break;
     case 1:
      
      
      
      
      
      if (HEAP[$qs] == $quoting_addr) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 6;
      break;
     case 3:
      
      var $7 = $qs + 8;
      $qs = $7;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      if (HEAP[$qs + 4] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $12 = HEAP[_PyExc_TypeError];
      var $13 = _PyErr_Format($12, __str8, allocate(1, "i32", ALLOC_STACK));
      $0 = -1;
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Dialect_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[$self_addr + 20];
      
      
      var $9 = HEAP[$6] - 1;
      var $10 = $6;
      HEAP[$10] = $9;
      
      
      
      if (HEAP[$6] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[$self_addr + 20] + 4] + 24];
      
      
      var $23 = HEAP[$self_addr + 20];
      FUNCTION_TABLE[$20]($23);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      var $29 = HEAP[HEAP[$self_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$29]($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dialect_new($type, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwargs_addr;
      var $retval;
      var $0;
      var $self;
      var $ret;
      var $dialect = __stackBase__;
      var $delimiter = __stackBase__ + 4;
      var $doublequote = __stackBase__ + 8;
      var $escapechar = __stackBase__ + 12;
      var $lineterminator = __stackBase__ + 16;
      var $quotechar = __stackBase__ + 20;
      var $quoting = __stackBase__ + 24;
      var $skipinitialspace = __stackBase__ + 28;
      var $strict = __stackBase__ + 32;
      $type_addr = $type;
      $args_addr = $args;
      $kwargs_addr = $kwargs;
      $ret = 0;
      HEAP[$dialect] = 0;
      HEAP[$delimiter] = 0;
      HEAP[$doublequote] = 0;
      HEAP[$escapechar] = 0;
      HEAP[$lineterminator] = 0;
      HEAP[$quotechar] = 0;
      HEAP[$quoting] = 0;
      HEAP[$skipinitialspace] = 0;
      HEAP[$strict] = 0;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwargs_addr, __str18, _dialect_kws, allocate([ $dialect, 0, 0, 0, $delimiter, 0, 0, 0, $doublequote, 0, 0, 0, $escapechar, 0, 0, 0, $lineterminator, 0, 0, 0, $quotechar, 0, 0, 0, $quoting, 0, 0, 0, $skipinitialspace, 0, 0, 0, $strict, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 109;
      break;
     case 2:
      
      
      if (HEAP[$dialect] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 3:
      
      
      
      
      if (HEAP[HEAP[$dialect] + 4] == _PyBaseString_Type) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      var $13 = HEAP[HEAP[$dialect] + 4];
      var $14 = _PyType_IsSubtype($13, _PyBaseString_Type);
      
      if ($14 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      var $16 = HEAP[$dialect];
      var $17 = _get_dialect_from_registry($16);
      HEAP[$dialect] = $17;
      
      if ($17 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 109;
      break;
     case 7:
      
      
      
      var $22 = HEAP[HEAP[$dialect]] + 1;
      var $23 = HEAP[$dialect];
      HEAP[$23] = $22;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      if (HEAP[HEAP[$dialect] + 4] == _Dialect_Type) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      var $30 = HEAP[HEAP[$dialect] + 4];
      var $31 = _PyType_IsSubtype($30, _Dialect_Type);
      
      if ($31 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 10:
      
      
      if (HEAP[$delimiter] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 11:
      
      
      if (HEAP[$doublequote] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 12:
      
      
      if (HEAP[$escapechar] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 13:
      
      
      if (HEAP[$lineterminator] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 14:
      
      
      if (HEAP[$quotechar] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 15:
      
      
      if (HEAP[$quoting] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      
      
      if (HEAP[$skipinitialspace] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      if (HEAP[$strict] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      $0 = HEAP[$dialect];
      __label__ = 109;
      break;
     case 19:
      
      
      var $52 = HEAP[$type_addr + 152];
      
      var $54 = FUNCTION_TABLE[$52]($type_addr, 0);
      
      $self = $54;
      
      if ($54 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 20:
      
      
      if (HEAP[$dialect] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      var $59 = HEAP[$dialect];
      
      
      var $62 = HEAP[$59] - 1;
      var $63 = $59;
      HEAP[$63] = $62;
      
      
      
      if (HEAP[$59] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $71 = HEAP[HEAP[HEAP[$dialect] + 4] + 24];
      var $72 = HEAP[$dialect];
      FUNCTION_TABLE[$71]($72);
      __label__ = 23;
      break;
     case 23:
      $0 = 0;
      __label__ = 109;
      break;
     case 24:
      
      
      HEAP[$self + 20] = 0;
      
      
      if (HEAP[$delimiter] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      var $80 = HEAP[HEAP[$delimiter]] + 1;
      var $81 = HEAP[$delimiter];
      HEAP[$81] = $80;
      __label__ = 26;
      break;
     case 26:
      
      
      if (HEAP[$doublequote] != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      var $87 = HEAP[HEAP[$doublequote]] + 1;
      var $88 = HEAP[$doublequote];
      HEAP[$88] = $87;
      __label__ = 28;
      break;
     case 28:
      
      
      if (HEAP[$escapechar] != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      var $94 = HEAP[HEAP[$escapechar]] + 1;
      var $95 = HEAP[$escapechar];
      HEAP[$95] = $94;
      __label__ = 30;
      break;
     case 30:
      
      
      if (HEAP[$lineterminator] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      var $101 = HEAP[HEAP[$lineterminator]] + 1;
      var $102 = HEAP[$lineterminator];
      HEAP[$102] = $101;
      __label__ = 32;
      break;
     case 32:
      
      
      if (HEAP[$quotechar] != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      var $108 = HEAP[HEAP[$quotechar]] + 1;
      var $109 = HEAP[$quotechar];
      HEAP[$109] = $108;
      __label__ = 34;
      break;
     case 34:
      
      
      if (HEAP[$quoting] != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      var $115 = HEAP[HEAP[$quoting]] + 1;
      var $116 = HEAP[$quoting];
      HEAP[$116] = $115;
      __label__ = 36;
      break;
     case 36:
      
      
      if (HEAP[$skipinitialspace] != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      var $122 = HEAP[HEAP[$skipinitialspace]] + 1;
      var $123 = HEAP[$skipinitialspace];
      HEAP[$123] = $122;
      __label__ = 38;
      break;
     case 38:
      
      
      if (HEAP[$strict] != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      var $129 = HEAP[HEAP[$strict]] + 1;
      var $130 = HEAP[$strict];
      HEAP[$130] = $129;
      __label__ = 40;
      break;
     case 40:
      
      
      if (HEAP[$dialect] != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 41:
      
      
      if (HEAP[$delimiter] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      var $135 = HEAP[$dialect];
      var $136 = _PyObject_GetAttrString($135, __str9);
      HEAP[$delimiter] = $136;
      __label__ = 43;
      break;
     case 43:
      
      
      if (HEAP[$doublequote] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      var $139 = HEAP[$dialect];
      var $140 = _PyObject_GetAttrString($139, __str11);
      HEAP[$doublequote] = $140;
      __label__ = 45;
      break;
     case 45:
      
      
      if (HEAP[$escapechar] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      var $143 = HEAP[$dialect];
      var $144 = _PyObject_GetAttrString($143, __str13);
      HEAP[$escapechar] = $144;
      __label__ = 47;
      break;
     case 47:
      
      
      if (HEAP[$lineterminator] == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      var $147 = HEAP[$dialect];
      var $148 = _PyObject_GetAttrString($147, __str14);
      HEAP[$lineterminator] = $148;
      __label__ = 49;
      break;
     case 49:
      
      
      if (HEAP[$quotechar] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      var $151 = HEAP[$dialect];
      var $152 = _PyObject_GetAttrString($151, __str15);
      HEAP[$quotechar] = $152;
      __label__ = 51;
      break;
     case 51:
      
      
      if (HEAP[$quoting] == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      var $155 = HEAP[$dialect];
      var $156 = _PyObject_GetAttrString($155, __str16);
      HEAP[$quoting] = $156;
      __label__ = 53;
      break;
     case 53:
      
      
      if (HEAP[$skipinitialspace] == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      var $159 = HEAP[$dialect];
      var $160 = _PyObject_GetAttrString($159, __str10);
      HEAP[$skipinitialspace] = $160;
      __label__ = 55;
      break;
     case 55:
      
      
      if (HEAP[$strict] == 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      var $163 = HEAP[$dialect];
      var $164 = _PyObject_GetAttrString($163, __str12);
      HEAP[$strict] = $164;
      __label__ = 57;
      break;
     case 57:
      _PyErr_Clear();
      __label__ = 58;
      break;
     case 58:
      var $165 = HEAP[$delimiter];
      
      
      var $168 = __set_char(__str9, $self + 12, $165, 44);
      
      if ($168 != 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 59:
      var $170 = HEAP[$doublequote];
      
      
      var $173 = __set_bool(__str11, $self + 8, $170, 1);
      
      if ($173 != 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 60:
      var $175 = HEAP[$escapechar];
      
      
      var $178 = __set_char(__str13, $self + 14, $175, 0);
      
      if ($178 != 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 61:
      var $180 = HEAP[$lineterminator];
      
      
      var $183 = __set_str($self + 20, $180);
      
      if ($183 != 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 62:
      var $185 = HEAP[$quotechar];
      
      
      var $188 = __set_char(__str15, $self + 13, $185, 34);
      
      if ($188 != 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 63:
      var $190 = HEAP[$quoting];
      
      
      var $193 = __set_int($self + 24, $190);
      
      if ($193 != 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 64:
      var $195 = HEAP[$skipinitialspace];
      
      
      var $198 = __set_bool(__str10, $self + 16, $195, 0);
      
      if ($198 != 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 65:
      var $200 = HEAP[$strict];
      
      
      var $203 = __set_bool(__str12, $self + 28, $200, 0);
      
      if ($203 != 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 66:
      
      
      var $207 = HEAP[$self + 24];
      var $208 = _dialect_check_quoting($207);
      
      if ($208 != 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 67:
      
      
      
      
      if (HEAP[$self + 12] == 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 68:
      var $214 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($214, __str20);
      __label__ = 78;
      break;
     case 69:
      
      
      if (HEAP[$quotechar] == __Py_NoneStruct) {
        __label__ = 70;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 70:
      
      
      if (HEAP[$quoting] == 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 71:
      
      
      HEAP[$self + 24] = 3;
      __label__ = 72;
      break;
     case 72:
      
      
      
      
      if (HEAP[$self + 24] != 3) {
        __label__ = 73;
        break;
      } else {
        __label__ = 75;
        break;
      }
     case 73:
      
      
      
      
      if (HEAP[$self + 13] == 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 75;
        break;
      }
     case 74:
      var $229 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($229, __str21);
      __label__ = 78;
      break;
     case 75:
      
      
      
      
      if (HEAP[$self + 20] == 0) {
        __label__ = 76;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 76:
      var $234 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($234, __str22);
      __label__ = 78;
      break;
     case 77:
      
      
      $ret = $self;
      
      
      
      
      var $241 = HEAP[$self] + 1;
      
      HEAP[$self] = $241;
      __label__ = 78;
      break;
     case 78:
      
      
      if ($self != 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 79:
      
      
      
      
      var $249 = HEAP[$self] - 1;
      
      HEAP[$self] = $249;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 80:
      
      
      
      
      
      var $259 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$259]($self);
      __label__ = 81;
      break;
     case 81:
      
      
      if (HEAP[$dialect] != 0) {
        __label__ = 82;
        break;
      } else {
        __label__ = 84;
        break;
      }
     case 82:
      var $264 = HEAP[$dialect];
      
      
      var $267 = HEAP[$264] - 1;
      var $268 = $264;
      HEAP[$268] = $267;
      
      
      
      if (HEAP[$264] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 84;
        break;
      }
     case 83:
      
      
      
      
      var $276 = HEAP[HEAP[HEAP[$dialect] + 4] + 24];
      var $277 = HEAP[$dialect];
      FUNCTION_TABLE[$276]($277);
      __label__ = 84;
      break;
     case 84:
      
      
      if (HEAP[$delimiter] != 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 85:
      var $280 = HEAP[$delimiter];
      
      
      var $283 = HEAP[$280] - 1;
      var $284 = $280;
      HEAP[$284] = $283;
      
      
      
      if (HEAP[$280] == 0) {
        __label__ = 86;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 86:
      
      
      
      
      var $292 = HEAP[HEAP[HEAP[$delimiter] + 4] + 24];
      var $293 = HEAP[$delimiter];
      FUNCTION_TABLE[$292]($293);
      __label__ = 87;
      break;
     case 87:
      
      
      if (HEAP[$doublequote] != 0) {
        __label__ = 88;
        break;
      } else {
        __label__ = 90;
        break;
      }
     case 88:
      var $296 = HEAP[$doublequote];
      
      
      var $299 = HEAP[$296] - 1;
      var $300 = $296;
      HEAP[$300] = $299;
      
      
      
      if (HEAP[$296] == 0) {
        __label__ = 89;
        break;
      } else {
        __label__ = 90;
        break;
      }
     case 89:
      
      
      
      
      var $308 = HEAP[HEAP[HEAP[$doublequote] + 4] + 24];
      var $309 = HEAP[$doublequote];
      FUNCTION_TABLE[$308]($309);
      __label__ = 90;
      break;
     case 90:
      
      
      if (HEAP[$escapechar] != 0) {
        __label__ = 91;
        break;
      } else {
        __label__ = 93;
        break;
      }
     case 91:
      var $312 = HEAP[$escapechar];
      
      
      var $315 = HEAP[$312] - 1;
      var $316 = $312;
      HEAP[$316] = $315;
      
      
      
      if (HEAP[$312] == 0) {
        __label__ = 92;
        break;
      } else {
        __label__ = 93;
        break;
      }
     case 92:
      
      
      
      
      var $324 = HEAP[HEAP[HEAP[$escapechar] + 4] + 24];
      var $325 = HEAP[$escapechar];
      FUNCTION_TABLE[$324]($325);
      __label__ = 93;
      break;
     case 93:
      
      
      if (HEAP[$lineterminator] != 0) {
        __label__ = 94;
        break;
      } else {
        __label__ = 96;
        break;
      }
     case 94:
      var $328 = HEAP[$lineterminator];
      
      
      var $331 = HEAP[$328] - 1;
      var $332 = $328;
      HEAP[$332] = $331;
      
      
      
      if (HEAP[$328] == 0) {
        __label__ = 95;
        break;
      } else {
        __label__ = 96;
        break;
      }
     case 95:
      
      
      
      
      var $340 = HEAP[HEAP[HEAP[$lineterminator] + 4] + 24];
      var $341 = HEAP[$lineterminator];
      FUNCTION_TABLE[$340]($341);
      __label__ = 96;
      break;
     case 96:
      
      
      if (HEAP[$quotechar] != 0) {
        __label__ = 97;
        break;
      } else {
        __label__ = 99;
        break;
      }
     case 97:
      var $344 = HEAP[$quotechar];
      
      
      var $347 = HEAP[$344] - 1;
      var $348 = $344;
      HEAP[$348] = $347;
      
      
      
      if (HEAP[$344] == 0) {
        __label__ = 98;
        break;
      } else {
        __label__ = 99;
        break;
      }
     case 98:
      
      
      
      
      var $356 = HEAP[HEAP[HEAP[$quotechar] + 4] + 24];
      var $357 = HEAP[$quotechar];
      FUNCTION_TABLE[$356]($357);
      __label__ = 99;
      break;
     case 99:
      
      
      if (HEAP[$quoting] != 0) {
        __label__ = 100;
        break;
      } else {
        __label__ = 102;
        break;
      }
     case 100:
      var $360 = HEAP[$quoting];
      
      
      var $363 = HEAP[$360] - 1;
      var $364 = $360;
      HEAP[$364] = $363;
      
      
      
      if (HEAP[$360] == 0) {
        __label__ = 101;
        break;
      } else {
        __label__ = 102;
        break;
      }
     case 101:
      
      
      
      
      var $372 = HEAP[HEAP[HEAP[$quoting] + 4] + 24];
      var $373 = HEAP[$quoting];
      FUNCTION_TABLE[$372]($373);
      __label__ = 102;
      break;
     case 102:
      
      
      if (HEAP[$skipinitialspace] != 0) {
        __label__ = 103;
        break;
      } else {
        __label__ = 105;
        break;
      }
     case 103:
      var $376 = HEAP[$skipinitialspace];
      
      
      var $379 = HEAP[$376] - 1;
      var $380 = $376;
      HEAP[$380] = $379;
      
      
      
      if (HEAP[$376] == 0) {
        __label__ = 104;
        break;
      } else {
        __label__ = 105;
        break;
      }
     case 104:
      
      
      
      
      var $388 = HEAP[HEAP[HEAP[$skipinitialspace] + 4] + 24];
      var $389 = HEAP[$skipinitialspace];
      FUNCTION_TABLE[$388]($389);
      __label__ = 105;
      break;
     case 105:
      
      
      if (HEAP[$strict] != 0) {
        __label__ = 106;
        break;
      } else {
        __label__ = 108;
        break;
      }
     case 106:
      var $392 = HEAP[$strict];
      
      
      var $395 = HEAP[$392] - 1;
      var $396 = $392;
      HEAP[$396] = $395;
      
      
      
      if (HEAP[$392] == 0) {
        __label__ = 107;
        break;
      } else {
        __label__ = 108;
        break;
      }
     case 107:
      
      
      
      
      var $404 = HEAP[HEAP[HEAP[$strict] + 4] + 24];
      var $405 = HEAP[$strict];
      FUNCTION_TABLE[$404]($405);
      __label__ = 108;
      break;
     case 108:
      
      $0 = $ret;
      __label__ = 109;
      break;
     case 109:
      
      $retval = $0;
      var $retval109 = $retval;
      STACKTOP = __stackBase__;
      return $retval109;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __call_dialect($dialect_inst, $kwargs) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dialect_inst_addr;
      var $kwargs_addr;
      var $retval;
      var $0;
      var $iftmp_115;
      var $ctor_args;
      var $dialect;
      $dialect_inst_addr = $dialect_inst;
      $kwargs_addr = $kwargs;
      
      
      if ($dialect_inst_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $iftmp_115 = __str24;
      __label__ = 3;
      break;
     case 2:
      $iftmp_115 = __str25;
      __label__ = 3;
      break;
     case 3:
      
      
      var $5 = _Py_BuildValue($iftmp_115, allocate([ $dialect_inst_addr, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $ctor_args = $5;
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 8;
      break;
     case 5:
      
      
      var $9 = _PyObject_Call(_Dialect_Type, $ctor_args, $kwargs_addr);
      $dialect = $9;
      
      
      
      var $13 = HEAP[$ctor_args] - 1;
      
      
      HEAP[$ctor_args] = $13;
      
      
      
      
      if (HEAP[$ctor_args] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $24 = HEAP[HEAP[$ctor_args + 4] + 24];
      
      FUNCTION_TABLE[$24]($ctor_args);
      __label__ = 7;
      break;
     case 7:
      
      $0 = $dialect;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parse_save_field($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $field;
      var $tmp;
      $self_addr = $self;
      
      
      var $3 = HEAP[$self_addr + 32];
      
      
      var $6 = HEAP[$self_addr + 24];
      var $7 = _PyString_FromStringAndSize($6, $3);
      $field = $7;
      
      
      if ($field == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 13;
      break;
     case 2:
      
      
      HEAP[$self_addr + 32] = 0;
      
      
      
      
      if (HEAP[$self_addr + 36] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 3:
      
      
      HEAP[$self_addr + 36] = 0;
      
      var $19 = _PyNumber_Float($field);
      $tmp = $19;
      
      
      
      
      
      var $25 = HEAP[$field] - 1;
      
      
      HEAP[$field] = $25;
      
      
      
      var $31 = HEAP[$field] == 0;
      if ($tmp == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      if ($31) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $36 = HEAP[HEAP[$field + 4] + 24];
      
      FUNCTION_TABLE[$36]($field);
      __label__ = 6;
      break;
     case 6:
      $0 = -1;
      __label__ = 13;
      break;
     case 7:
      if ($31) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $42 = HEAP[HEAP[$field + 4] + 24];
      
      FUNCTION_TABLE[$42]($field);
      __label__ = 9;
      break;
     case 9:
      
      $field = $tmp;
      __label__ = 10;
      break;
     case 10:
      
      
      var $47 = HEAP[$self_addr + 16];
      
      var $49 = _PyList_Append($47, $field);
      
      
      
      var $53 = HEAP[$field] - 1;
      
      
      HEAP[$field] = $53;
      
      
      
      
      if (HEAP[$field] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $64 = HEAP[HEAP[$field + 4] + 24];
      
      FUNCTION_TABLE[$64]($field);
      __label__ = 12;
      break;
     case 12:
      $0 = 0;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval13 = $retval;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parse_grow_buff($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      
      
      
      
      
      var $6 = $self_addr + 28;
      if (HEAP[$self_addr + 28] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      HEAP[$6] = 4096;
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      var $13 = HEAP[$self_addr + 24];
      _PyMem_Free($13);
      __label__ = 3;
      break;
     case 3:
      
      
      var $16 = HEAP[$self_addr + 28];
      var $17 = _PyMem_Malloc($16);
      
      
      HEAP[$self_addr + 24] = $17;
      __label__ = 7;
      break;
     case 4:
      
      
      if (HEAP[$6] > 1073741823) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $22 = _PyErr_NoMemory();
      $0 = 0;
      __label__ = 10;
      break;
     case 6:
      
      
      
      var $26 = HEAP[$self_addr + 28] * 2;
      
      
      HEAP[$self_addr + 28] = $26;
      
      
      var $31 = HEAP[$self_addr + 28];
      
      
      var $34 = HEAP[$self_addr + 24];
      var $35 = _PyMem_Realloc($34, $31);
      
      
      HEAP[$self_addr + 24] = $35;
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      if (HEAP[$self_addr + 24] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $42 = _PyErr_NoMemory();
      $0 = 0;
      __label__ = 10;
      break;
     case 9:
      $0 = 1;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parse_add_char($self, $c) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $c_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $c_addr = $c;
      
      
      
      
      
      if (HEAP[$self_addr + 32] >= HEAP[_field_limit]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $6 = HEAP[_field_limit];
      var $7 = HEAP[_error_obj];
      var $8 = _PyErr_Format($7, __str26, allocate([ $6, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
      __label__ = 6;
      break;
     case 2:
      
      
      
      
      
      
      
      if (HEAP[$self_addr + 32] == HEAP[$self_addr + 28]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      var $17 = _parse_grow_buff($self_addr);
      
      if ($17 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 6;
      break;
     case 5:
      
      
      
      
      
      var $24 = HEAP[$self_addr + 32];
      var $25 = HEAP[$self_addr + 24] + $24;
      
      HEAP[$25] = $c_addr;
      var $27 = $24 + 1;
      
      
      HEAP[$self_addr + 32] = $27;
      $0 = 0;
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parse_process_char($self, $c) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $c_addr;
      var $retval;
      var $iftmp_122;
      var $iftmp_121;
      var $iftmp_120;
      var $0;
      var $dialect;
      $self_addr = $self;
      $c_addr = $c;
      
      
      
      $dialect = HEAP[$self_addr + 12];
      
      
      var $6 = HEAP[$self_addr + 20];
      if ($6 == 0) {
        __label__ = 1;
        break;
      } else if ($6 == 1) {
        __label__ = 5;
        break;
      } else if ($6 == 2) {
        __label__ = 27;
        break;
      } else if ($6 == 3) {
        __label__ = 32;
        break;
      } else if ($6 == 4) {
        __label__ = 47;
        break;
      } else if ($6 == 5) {
        __label__ = 57;
        break;
      } else if ($6 == 6) {
        __label__ = 62;
        break;
      } else if ($6 == 7) {
        __label__ = 83;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 1:
      
      
      if ($c_addr == 0) {
        __label__ = 87;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $14 = $self_addr + 20;
      if ($c_addr == 10 | $c_addr == 13) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$14] = 7;
      __label__ = 87;
      break;
     case 4:
      HEAP[$14] = 1;
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      
      
      
      
      if ($c_addr == 10 | $c_addr == 13 | $c_addr == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 6:
      
      var $22 = _parse_save_field($self_addr);
      
      if ($22 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = -1;
      __label__ = 88;
      break;
     case 8:
      
      
      if ($c_addr == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $iftmp_120 = 0;
      __label__ = 11;
      break;
     case 10:
      $iftmp_120 = 7;
      __label__ = 11;
      break;
     case 11:
      
      
      
      HEAP[$self_addr + 20] = $iftmp_120;
      __label__ = 87;
      break;
     case 12:
      
      
      
      
      
      if (HEAP[$dialect + 13] != $c_addr) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      if (HEAP[$dialect + 24] == 3) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      HEAP[$self_addr + 20] = 4;
      __label__ = 87;
      break;
     case 15:
      
      
      
      
      
      if (HEAP[$dialect + 14] == $c_addr) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      HEAP[$self_addr + 20] = 2;
      __label__ = 87;
      break;
     case 17:
      
      
      if ($c_addr != 32) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      if (HEAP[$dialect + 16] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 19:
      
      
      
      
      
      if (HEAP[$dialect + 12] == $c_addr) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      
      var $59 = _parse_save_field($self_addr);
      
      if ($59 < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 21:
      $0 = -1;
      __label__ = 88;
      break;
     case 22:
      
      
      
      
      if (HEAP[$dialect + 24] == 2) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      HEAP[$self_addr + 36] = 1;
      __label__ = 24;
      break;
     case 24:
      
      
      
      
      var $71 = _parse_add_char($self_addr, $c_addr & 255);
      
      if ($71 < 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      $0 = -1;
      __label__ = 88;
      break;
     case 26:
      
      
      HEAP[$self_addr + 20] = 3;
      __label__ = 87;
      break;
     case 27:
      
      
      if ($c_addr == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      $c_addr = 10;
      __label__ = 29;
      break;
     case 29:
      
      
      
      
      var $81 = _parse_add_char($self_addr, $c_addr & 255);
      
      if ($81 < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      $0 = -1;
      __label__ = 88;
      break;
     case 31:
      
      
      HEAP[$self_addr + 20] = 3;
      __label__ = 87;
      break;
     case 32:
      
      
      
      
      
      
      
      
      if ($c_addr == 10 | $c_addr == 13 | $c_addr == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 33:
      
      var $92 = _parse_save_field($self_addr);
      
      if ($92 < 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      $0 = -1;
      __label__ = 88;
      break;
     case 35:
      
      
      if ($c_addr == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      $iftmp_121 = 0;
      __label__ = 38;
      break;
     case 37:
      $iftmp_121 = 7;
      __label__ = 38;
      break;
     case 38:
      
      
      
      HEAP[$self_addr + 20] = $iftmp_121;
      __label__ = 87;
      break;
     case 39:
      
      
      
      
      
      if (HEAP[$dialect + 14] == $c_addr) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      HEAP[$self_addr + 20] = 2;
      __label__ = 87;
      break;
     case 41:
      
      
      
      
      
      if (HEAP[$dialect + 12] == $c_addr) {
        __label__ = 42;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 42:
      
      var $112 = _parse_save_field($self_addr);
      
      if ($112 < 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      $0 = -1;
      __label__ = 88;
      break;
     case 44:
      
      
      HEAP[$self_addr + 20] = 1;
      __label__ = 87;
      break;
     case 45:
      
      
      
      
      var $120 = _parse_add_char($self_addr, $c_addr & 255);
      
      if ($120 < 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 46:
      $0 = -1;
      __label__ = 88;
      break;
     case 47:
      
      
      if ($c_addr != 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 48:
      
      
      
      
      
      if (HEAP[$dialect + 14] == $c_addr) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      HEAP[$self_addr + 20] = 5;
      __label__ = 87;
      break;
     case 50:
      
      
      
      
      
      if (HEAP[$dialect + 13] != $c_addr) {
        __label__ = 55;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 51:
      
      
      
      
      if (HEAP[$dialect + 24] == 3) {
        __label__ = 55;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 52:
      
      
      
      
      
      var $145 = $self_addr + 20;
      if (HEAP[$dialect + 8] != 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      HEAP[$145] = 6;
      __label__ = 87;
      break;
     case 54:
      HEAP[$145] = 3;
      __label__ = 87;
      break;
     case 55:
      
      
      
      
      var $150 = _parse_add_char($self_addr, $c_addr & 255);
      
      if ($150 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 56:
      $0 = -1;
      __label__ = 88;
      break;
     case 57:
      
      
      if ($c_addr == 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 58:
      $c_addr = 10;
      __label__ = 59;
      break;
     case 59:
      
      
      
      
      var $158 = _parse_add_char($self_addr, $c_addr & 255);
      
      if ($158 < 0) {
        __label__ = 60;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 60:
      $0 = -1;
      __label__ = 88;
      break;
     case 61:
      
      
      HEAP[$self_addr + 20] = 4;
      __label__ = 87;
      break;
     case 62:
      
      
      
      
      if (HEAP[$dialect + 24] == 3) {
        __label__ = 67;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 63:
      
      
      
      
      
      if (HEAP[$dialect + 13] != $c_addr) {
        __label__ = 67;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 64:
      
      
      
      
      var $175 = _parse_add_char($self_addr, $c_addr & 255);
      
      if ($175 < 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      $0 = -1;
      __label__ = 88;
      break;
     case 66:
      
      
      HEAP[$self_addr + 20] = 4;
      __label__ = 87;
      break;
     case 67:
      
      
      
      
      
      if (HEAP[$dialect + 12] == $c_addr) {
        __label__ = 68;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 68:
      
      var $185 = _parse_save_field($self_addr);
      
      if ($185 < 0) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      $0 = -1;
      __label__ = 88;
      break;
     case 70:
      
      
      HEAP[$self_addr + 20] = 1;
      __label__ = 87;
      break;
     case 71:
      
      
      
      
      
      
      
      
      if ($c_addr == 10 | $c_addr == 13 | $c_addr == 0) {
        __label__ = 72;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 72:
      
      var $196 = _parse_save_field($self_addr);
      
      if ($196 < 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 73:
      $0 = -1;
      __label__ = 88;
      break;
     case 74:
      
      
      if ($c_addr == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      $iftmp_122 = 0;
      __label__ = 77;
      break;
     case 76:
      $iftmp_122 = 7;
      __label__ = 77;
      break;
     case 77:
      
      
      
      HEAP[$self_addr + 20] = $iftmp_122;
      __label__ = 87;
      break;
     case 78:
      
      
      
      
      if (HEAP[$dialect + 28] == 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 79:
      
      
      
      
      var $211 = _parse_add_char($self_addr, $c_addr & 255);
      
      if ($211 < 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 80:
      $0 = -1;
      __label__ = 88;
      break;
     case 81:
      
      
      HEAP[$self_addr + 20] = 3;
      __label__ = 87;
      break;
     case 82:
      
      
      
      var $218 = HEAP[$dialect + 13];
      
      
      
      var $222 = HEAP[$dialect + 12];
      var $223 = HEAP[_error_obj];
      var $224 = _PyErr_Format($223, __str27, allocate([ $222, 0, 0, 0, $218, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
      __label__ = 88;
      break;
     case 83:
      
      
      
      
      
      if ($c_addr != 10 & $c_addr != 13) {
        __label__ = 84;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 84:
      
      
      if ($c_addr == 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      
      
      HEAP[$self_addr + 20] = 0;
      __label__ = 87;
      break;
     case 86:
      var $233 = HEAP[_error_obj];
      var $234 = _PyErr_Format($233, __str28, allocate(1, "i32", ALLOC_STACK));
      $0 = -1;
      __label__ = 88;
      break;
     case 87:
      $0 = 0;
      __label__ = 88;
      break;
     case 88:
      
      $retval = $0;
      var $retval103 = $retval;
      return $retval103;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parse_reset($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 16] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$self_addr + 16];
      
      
      var $10 = HEAP[$7] - 1;
      var $11 = $7;
      HEAP[$11] = $10;
      
      
      
      if (HEAP[$7] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $21 = HEAP[HEAP[HEAP[$self_addr + 16] + 4] + 24];
      
      
      var $24 = HEAP[$self_addr + 16];
      FUNCTION_TABLE[$21]($24);
      __label__ = 3;
      break;
     case 3:
      var $25 = _PyList_New(0);
      
      
      HEAP[$self_addr + 16] = $25;
      
      
      
      
      if (HEAP[$self_addr + 16] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 6;
      break;
     case 5:
      
      
      HEAP[$self_addr + 32] = 0;
      
      
      HEAP[$self_addr + 20] = 0;
      
      
      HEAP[$self_addr + 36] = 0;
      $0 = 0;
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Reader_iternext($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $lineobj;
      var $fields;
      var $line;
      var $c;
      var $linelen;
      $self_addr = $self;
      $fields = 0;
      
      var $2 = _parse_reset($self_addr);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 26;
      break;
     case 2:
      
      
      var $6 = HEAP[$self_addr + 8];
      var $7 = _PyIter_Next($6);
      $lineobj = $7;
      
      if ($7 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      var $9 = _PyErr_Occurred();
      
      if ($9 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[$self_addr + 32] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $15 = HEAP[_error_obj];
      var $16 = _PyErr_Format($15, __str29, allocate(1, "i32", ALLOC_STACK));
      __label__ = 6;
      break;
     case 6:
      $0 = 0;
      __label__ = 26;
      break;
     case 7:
      
      
      
      var $20 = HEAP[$self_addr + 40] + 1;
      
      
      HEAP[$self_addr + 40] = $20;
      
      var $24 = _PyString_AsString($lineobj);
      $line = $24;
      
      var $26 = _PyString_Size($lineobj);
      $linelen = $26;
      
      
      if ($line == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      if ($linelen < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 9:
      
      
      
      var $34 = HEAP[$lineobj] - 1;
      
      
      HEAP[$lineobj] = $34;
      
      
      
      
      if (HEAP[$lineobj] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $45 = HEAP[HEAP[$lineobj + 4] + 24];
      
      FUNCTION_TABLE[$45]($lineobj);
      __label__ = 11;
      break;
     case 11:
      $0 = 0;
      __label__ = 26;
      break;
     case 12:
      
      
      $c = HEAP[$line];
      
      var $50 = $line + 1;
      $line = $50;
      
      
      if ($c == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      
      
      
      var $56 = HEAP[$lineobj] - 1;
      
      
      HEAP[$lineobj] = $56;
      
      
      
      
      if (HEAP[$lineobj] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $67 = HEAP[HEAP[$lineobj + 4] + 24];
      
      FUNCTION_TABLE[$67]($lineobj);
      __label__ = 15;
      break;
     case 15:
      var $69 = HEAP[_error_obj];
      var $70 = _PyErr_Format($69, __str30, allocate(1, "i32", ALLOC_STACK));
      __label__ = 25;
      break;
     case 16:
      
      
      
      
      var $75 = _parse_process_char($self_addr, $c & 255);
      
      if ($75 < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      var $80 = HEAP[$lineobj] - 1;
      
      
      HEAP[$lineobj] = $80;
      
      
      
      
      if (HEAP[$lineobj] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 18:
      
      
      
      
      var $91 = HEAP[HEAP[$lineobj + 4] + 24];
      
      FUNCTION_TABLE[$91]($lineobj);
      __label__ = 25;
      break;
     case 19:
      
      var $94 = $linelen - 1;
      $linelen = $94;
      var $95 = $94 != -1;
      if ($95) {
        __label__ = 12;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      var $99 = HEAP[$lineobj] - 1;
      
      
      HEAP[$lineobj] = $99;
      
      
      
      
      if (HEAP[$lineobj] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $110 = HEAP[HEAP[$lineobj + 4] + 24];
      
      FUNCTION_TABLE[$110]($lineobj);
      __label__ = 22;
      break;
     case 22:
      
      var $113 = _parse_process_char($self_addr, 0);
      
      if ($113 < 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      $fields = HEAP[$self_addr + 16];
      
      
      HEAP[$self_addr + 16] = 0;
      __label__ = 25;
      break;
     case 25:
      
      $0 = $fields;
      __label__ = 26;
      break;
     case 26:
      
      $retval = $0;
      var $retval27 = $retval;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Reader_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      _PyObject_GC_UnTrack($self_addr);
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[$self_addr + 12];
      
      
      var $12 = HEAP[$9] - 1;
      var $13 = $9;
      HEAP[$13] = $12;
      
      
      
      if (HEAP[$9] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[$self_addr + 12] + 4] + 24];
      
      
      
      var $28 = HEAP[$self_addr + 12];
      FUNCTION_TABLE[$24]($28);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$self_addr + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $35 = HEAP[$self_addr + 8];
      
      
      var $38 = HEAP[$35] - 1;
      var $39 = $35;
      HEAP[$39] = $38;
      
      
      
      if (HEAP[$35] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[$self_addr + 8] + 4] + 24];
      
      
      var $52 = HEAP[$self_addr + 8];
      FUNCTION_TABLE[$49]($52);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$self_addr + 16] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $59 = HEAP[$self_addr + 16];
      
      
      var $62 = HEAP[$59] - 1;
      var $63 = $59;
      HEAP[$63] = $62;
      
      
      
      if (HEAP[$59] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[$self_addr + 16] + 4] + 24];
      
      
      var $76 = HEAP[$self_addr + 16];
      FUNCTION_TABLE[$73]($76);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      var $83 = HEAP[$self_addr + 24];
      _PyMem_Free($83);
      __label__ = 11;
      break;
     case 11:
      
      
      _PyObject_GC_Del($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Reader_traverse($self, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      var $vret8;
      $self_addr = $self;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[$self_addr + 12];
      var $9 = $visit_addr;
      
      var $11 = FUNCTION_TABLE[$9]($8, $arg_addr);
      $vret = $11;
      
      
      if ($vret != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      $0 = $vret;
      __label__ = 10;
      break;
     case 3:
      
      
      
      
      if (HEAP[$self_addr + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $21 = HEAP[$self_addr + 8];
      var $22 = $visit_addr;
      
      var $24 = FUNCTION_TABLE[$22]($21, $arg_addr);
      $vret4 = $24;
      
      
      if ($vret4 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      $0 = $vret4;
      __label__ = 10;
      break;
     case 6:
      
      
      
      
      if (HEAP[$self_addr + 16] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $34 = HEAP[$self_addr + 16];
      var $35 = $visit_addr;
      
      var $37 = FUNCTION_TABLE[$35]($34, $arg_addr);
      $vret8 = $37;
      
      
      if ($vret8 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      $0 = $vret8;
      __label__ = 10;
      break;
     case 9:
      $0 = 0;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval12 = $retval;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Reader_clear($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $_py_tmp;
      var $_py_tmp4;
      var $_py_tmp8;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      
      $_py_tmp = HEAP[$self_addr + 12];
      
      
      HEAP[$self_addr + 12] = 0;
      
      
      
      var $14 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $14;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $25 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$25]($_py_tmp);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$self_addr + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      $_py_tmp4 = HEAP[$self_addr + 8];
      
      
      HEAP[$self_addr + 8] = 0;
      
      
      
      var $39 = HEAP[$_py_tmp4] - 1;
      
      
      HEAP[$_py_tmp4] = $39;
      
      
      
      
      if (HEAP[$_py_tmp4] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $50 = HEAP[HEAP[$_py_tmp4 + 4] + 24];
      
      FUNCTION_TABLE[$50]($_py_tmp4);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$self_addr + 16] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      $_py_tmp8 = HEAP[$self_addr + 16];
      
      
      HEAP[$self_addr + 16] = 0;
      
      
      
      var $64 = HEAP[$_py_tmp8] - 1;
      
      
      HEAP[$_py_tmp8] = $64;
      
      
      
      
      if (HEAP[$_py_tmp8] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $75 = HEAP[HEAP[$_py_tmp8 + 4] + 24];
      
      FUNCTION_TABLE[$75]($_py_tmp8);
      __label__ = 9;
      break;
     case 9:
      $0 = 0;
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _csv_reader($module, $args, $keyword_args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $module_addr;
      var $args_addr;
      var $keyword_args_addr;
      var $retval;
      var $0;
      var $iterator = __stackBase__;
      var $dialect = __stackBase__ + 4;
      var $self;
      $module_addr = $module;
      $args_addr = $args;
      $keyword_args_addr = $keyword_args;
      HEAP[$dialect] = 0;
      var $1 = __PyObject_GC_New(_Reader_Type);
      
      $self = $1;
      
      
      if ($self == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 19;
      break;
     case 2:
      
      
      HEAP[$self + 12] = 0;
      
      
      HEAP[$self + 16] = 0;
      
      
      HEAP[$self + 8] = 0;
      
      
      HEAP[$self + 24] = 0;
      
      
      HEAP[$self + 28] = 0;
      
      
      HEAP[$self + 40] = 0;
      
      var $18 = _parse_reset($self);
      
      if ($18 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      var $24 = HEAP[$self] - 1;
      
      HEAP[$self] = $24;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      var $34 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$34]($self);
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      __label__ = 19;
      break;
     case 6:
      
      var $38 = _PyArg_UnpackTuple($args_addr, __str33, 1, 2, allocate([ $iterator, 0, 0, 0, $dialect, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($38 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      
      var $44 = HEAP[$self] - 1;
      
      HEAP[$self] = $44;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $54 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$54]($self);
      __label__ = 9;
      break;
     case 9:
      $0 = 0;
      __label__ = 19;
      break;
     case 10:
      var $57 = HEAP[$iterator];
      var $58 = _PyObject_GetIter($57);
      
      
      HEAP[$self + 8] = $58;
      
      
      
      
      if (HEAP[$self + 8] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      var $65 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($65, __str34);
      
      
      
      
      var $70 = HEAP[$self] - 1;
      
      HEAP[$self] = $70;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      var $80 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$80]($self);
      __label__ = 13;
      break;
     case 13:
      $0 = 0;
      __label__ = 19;
      break;
     case 14:
      var $83 = HEAP[$dialect];
      
      var $85 = __call_dialect($83, $keyword_args_addr);
      var $86 = $85;
      
      
      HEAP[$self + 12] = $86;
      
      
      
      
      var $93 = $self;
      if (HEAP[$self + 12] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      
      
      
      var $97 = HEAP[$93] - 1;
      
      HEAP[$93] = $97;
      
      
      
      if (HEAP[$93] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      var $107 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$107]($self);
      __label__ = 17;
      break;
     case 17:
      $0 = 0;
      __label__ = 19;
      break;
     case 18:
      
      _PyObject_GC_Track($93);
      
      
      $0 = $self;
      __label__ = 19;
      break;
     case 19:
      
      $retval = $0;
      var $retval19 = $retval;
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _join_reset($self) {
    
    var $self_addr;
    $self_addr = $self;
    
    
    HEAP[$self_addr + 24] = 0;
    
    
    HEAP[$self_addr + 28] = 0;
    return;
  }
  function _join_append_data($self, $field, $quote_empty, $quoted, $copy_phase) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $field_addr;
      var $quote_empty_addr;
      var $quoted_addr;
      var $copy_phase_addr;
      var $retval;
      var $0;
      var $dialect;
      var $i;
      var $rec_len;
      var $lineterm;
      var $c;
      var $want_escape;
      $self_addr = $self;
      $field_addr = $field;
      $quote_empty_addr = $quote_empty;
      $quoted_addr = $quoted;
      $copy_phase_addr = $copy_phase;
      
      
      
      $dialect = HEAP[$self_addr + 12];
      
      
      var $6 = HEAP[$dialect + 20];
      var $7 = _PyString_AsString($6);
      $lineterm = $7;
      
      
      if ($lineterm == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 47;
      break;
     case 2:
      
      
      
      $rec_len = HEAP[$self_addr + 24];
      
      
      
      
      if (HEAP[$self_addr + 28] > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      if ($copy_phase_addr != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      var $24 = HEAP[$dialect + 12];
      
      var $26 = HEAP[$self_addr + 16] + $rec_len;
      HEAP[$26] = $24;
      __label__ = 5;
      break;
     case 5:
      
      var $28 = $rec_len + 1;
      $rec_len = $28;
      __label__ = 6;
      break;
     case 6:
      
      
      if ($copy_phase_addr != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 7:
      
      
      
      if (HEAP[$quoted_addr] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      if ($copy_phase_addr != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      var $41 = HEAP[$dialect + 13];
      
      var $43 = HEAP[$self_addr + 16] + $rec_len;
      HEAP[$43] = $41;
      __label__ = 10;
      break;
     case 10:
      
      var $45 = $rec_len + 1;
      $rec_len = $45;
      __label__ = 11;
      break;
     case 11:
      $i = 0;
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $49 = HEAP[$field_addr + $i];
      $c = $49;
      $want_escape = 0;
      
      if ($49 == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      if (HEAP[$dialect + 12] == $c) {
        __label__ = 17;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      
      if (HEAP[$dialect + 14] == $c) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      
      if (HEAP[$dialect + 13] == $c) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      var $69 = _strchr($lineterm, $c);
      
      if ($69 != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 17:
      
      
      
      
      if (HEAP[$dialect + 24] == 3) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      $want_escape = 1;
      __label__ = 27;
      break;
     case 19:
      
      
      
      
      
      if (HEAP[$dialect + 13] == $c) {
        __label__ = 20;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 20:
      
      
      
      
      if (HEAP[$dialect + 8] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 21:
      
      
      if ($copy_phase_addr != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      
      var $91 = HEAP[$dialect + 13];
      
      var $93 = HEAP[$self_addr + 16] + $rec_len;
      HEAP[$93] = $91;
      __label__ = 23;
      break;
     case 23:
      
      var $95 = $rec_len + 1;
      $rec_len = $95;
      __label__ = 25;
      break;
     case 24:
      $want_escape = 1;
      __label__ = 27;
      break;
     case 25:
      
      
      if ($want_escape == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      HEAP[$quoted_addr] = 1;
      
      
      if ($want_escape != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 27:
      
      
      
      
      if (HEAP[$dialect + 14] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      var $103 = HEAP[_error_obj];
      var $104 = _PyErr_Format($103, __str35, allocate(1, "i32", ALLOC_STACK));
      $0 = -1;
      __label__ = 47;
      break;
     case 29:
      
      
      if ($copy_phase_addr != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      
      var $112 = HEAP[$dialect + 14];
      
      var $114 = HEAP[$self_addr + 16] + $rec_len;
      HEAP[$114] = $112;
      __label__ = 31;
      break;
     case 31:
      
      var $116 = $rec_len + 1;
      $rec_len = $116;
      __label__ = 32;
      break;
     case 32:
      
      
      if ($copy_phase_addr != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $123 = HEAP[$self_addr + 16] + $rec_len;
      
      HEAP[$123] = $c;
      __label__ = 34;
      break;
     case 34:
      
      var $126 = $rec_len + 1;
      $rec_len = $126;
      
      var $128 = $i + 1;
      $i = $128;
      __label__ = 12;
      break;
     case 35:
      
      
      if ($i == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 36:
      
      
      if ($quote_empty_addr != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 37:
      
      
      
      
      if (HEAP[$dialect + 24] == 3) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      var $137 = HEAP[_error_obj];
      var $138 = _PyErr_Format($137, __str36, allocate(1, "i32", ALLOC_STACK));
      $0 = -1;
      __label__ = 47;
      break;
     case 39:
      
      HEAP[$quoted_addr] = 1;
      __label__ = 40;
      break;
     case 40:
      
      
      
      if (HEAP[$quoted_addr] != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 41:
      
      
      if ($copy_phase_addr != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 42:
      
      
      if ($copy_phase_addr != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      
      
      
      var $152 = HEAP[$dialect + 13];
      
      var $154 = HEAP[$self_addr + 16] + $rec_len;
      HEAP[$154] = $152;
      __label__ = 44;
      break;
     case 44:
      
      var $156 = $rec_len + 1;
      $rec_len = $156;
      __label__ = 46;
      break;
     case 45:
      
      var $158 = $rec_len + 2;
      $rec_len = $158;
      __label__ = 46;
      break;
     case 46:
      
      $0 = $rec_len;
      __label__ = 47;
      break;
     case 47:
      
      $retval = $0;
      var $retval48 = $retval;
      return $retval48;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _join_check_rec_size($self, $rec_len) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $rec_len_addr;
      var $retval;
      var $0;
      var $old_rec;
      $self_addr = $self;
      $rec_len_addr = $rec_len;
      
      
      
      
      
      if ($rec_len_addr < 0 | $rec_len_addr > 2147450879) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = _PyErr_NoMemory();
      $0 = 0;
      __label__ = 12;
      break;
     case 2:
      
      
      
      
      
      if (HEAP[$self_addr + 20] < $rec_len_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 3:
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      
      
      
      HEAP[$self_addr + 20] = (($rec_len_addr / 32768 | 0) + 1) * 32768;
      
      
      
      
      if (HEAP[$self_addr + 16] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $27 = HEAP[$self_addr + 16];
      _PyMem_Free($27);
      __label__ = 6;
      break;
     case 6:
      
      
      var $30 = HEAP[$self_addr + 20];
      var $31 = _PyMem_Malloc($30);
      
      
      HEAP[$self_addr + 16] = $31;
      __label__ = 9;
      break;
     case 7:
      
      
      
      $old_rec = HEAP[$self_addr + 16];
      
      
      
      
      
      
      HEAP[$self_addr + 20] = (($rec_len_addr / 32768 | 0) + 1) * 32768;
      
      
      var $45 = HEAP[$self_addr + 20];
      
      
      var $48 = HEAP[$self_addr + 16];
      var $49 = _PyMem_Realloc($48, $45);
      
      
      HEAP[$self_addr + 16] = $49;
      
      
      
      
      if (HEAP[$self_addr + 16] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      _PyMem_Free($old_rec);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[$self_addr + 16] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $61 = _PyErr_NoMemory();
      $0 = 0;
      __label__ = 12;
      break;
     case 11:
      $0 = 1;
      __label__ = 12;
      break;
     case 12:
      
      $retval = $0;
      var $retval13 = $retval;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _join_append($self, $field, $quoted, $quote_empty) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $field_addr;
      var $quoted_addr;
      var $quote_empty_addr;
      var $retval;
      var $0;
      var $rec_len;
      $self_addr = $self;
      $field_addr = $field;
      $quoted_addr = $quoted;
      $quote_empty_addr = $quote_empty;
      
      
      
      
      var $5 = _join_append_data($self_addr, $field_addr, $quote_empty_addr, $quoted_addr, 0);
      $rec_len = $5;
      
      
      if ($rec_len < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 5;
      break;
     case 2:
      
      
      var $10 = _join_check_rec_size($self_addr, $rec_len);
      
      if ($10 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 5;
      break;
     case 4:
      
      
      
      
      var $16 = _join_append_data($self_addr, $field_addr, $quote_empty_addr, $quoted_addr, 1);
      
      
      HEAP[$self_addr + 24] = $16;
      
      
      
      var $22 = HEAP[$self_addr + 28] + 1;
      
      
      HEAP[$self_addr + 28] = $22;
      $0 = 1;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _join_append_lineterminator($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $terminator_len;
      var $terminator;
      $self_addr = $self;
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr + 12] + 20];
      var $6 = _PyString_Size($5);
      $terminator_len = $6;
      
      var $8 = $terminator_len == -1;
      if ($8) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 7;
      break;
     case 2:
      
      
      
      
      var $13 = $terminator_len + HEAP[$self_addr + 24];
      
      var $15 = _join_check_rec_size($self_addr, $13);
      
      if ($15 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 7;
      break;
     case 4:
      
      
      
      
      var $21 = HEAP[HEAP[$self_addr + 12] + 20];
      var $22 = _PyString_AsString($21);
      $terminator = $22;
      
      
      if ($terminator == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 7;
      break;
     case 6:
      
      
      
      
      
      
      
      var $32 = HEAP[$self_addr + 16] + HEAP[$self_addr + 24];
      
      _llvm_memmove_p0i8_p0i8_i32($32, $terminator, $terminator_len, 1, 0);
      
      
      
      
      var $38 = $terminator_len + HEAP[$self_addr + 24];
      
      
      HEAP[$self_addr + 24] = $38;
      $0 = 1;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _csv_writerow($self, $seq) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $seq_addr;
      var $retval;
      var $0;
      var $dialect;
      var $len;
      var $i;
      var $field;
      var $append_ok;
      var $quoted = __stackBase__;
      var $str;
      $self_addr = $self;
      $seq_addr = $seq;
      
      
      
      $dialect = HEAP[$self_addr + 12];
      
      var $5 = _PySequence_Check($seq_addr);
      
      if ($5 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = HEAP[_error_obj];
      var $8 = _PyErr_Format($7, __str37, allocate(1, "i32", ALLOC_STACK));
      $0 = $8;
      __label__ = 30;
      break;
     case 2:
      
      var $10 = _PySequence_Size($seq_addr);
      $len = $10;
      
      
      if ($len < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 30;
      break;
     case 4:
      
      _join_reset($self_addr);
      $i = 0;
      __label__ = 26;
      break;
     case 5:
      
      
      var $16 = _PySequence_GetItem($seq_addr, $i);
      $field = $16;
      
      
      if ($field == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 30;
      break;
     case 7:
      
      
      var $21 = HEAP[$dialect + 24];
      if ($21 == 1) {
        __label__ = 9;
        break;
      } else if ($21 == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      var $23 = _PyNumber_Check($field);
      
      
      HEAP[$quoted] = $23 == 0;
      __label__ = 11;
      break;
     case 9:
      HEAP[$quoted] = 1;
      __label__ = 11;
      break;
     case 10:
      HEAP[$quoted] = 0;
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$field + 4] + 84] & 134217728) != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      
      var $41 = _join_append($self_addr, $field + 20, $quoted, $len == 1);
      $append_ok = $41;
      
      
      
      var $45 = HEAP[$field] - 1;
      
      
      HEAP[$field] = $45;
      
      
      
      
      if (HEAP[$field] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 13:
      
      
      
      
      var $56 = HEAP[HEAP[$field + 4] + 24];
      
      FUNCTION_TABLE[$56]($field);
      __label__ = 23;
      break;
     case 14:
      
      
      if ($field == __Py_NoneStruct) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      
      var $64 = _join_append($self_addr, __str33, $quoted, $len == 1);
      $append_ok = $64;
      
      
      
      var $68 = HEAP[$field] - 1;
      
      
      HEAP[$field] = $68;
      
      
      
      
      if (HEAP[$field] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 16:
      
      
      
      
      var $79 = HEAP[HEAP[$field + 4] + 24];
      
      FUNCTION_TABLE[$79]($field);
      __label__ = 23;
      break;
     case 17:
      
      var $82 = _PyObject_Str($field);
      $str = $82;
      
      
      
      var $86 = HEAP[$field] - 1;
      
      
      HEAP[$field] = $86;
      
      
      
      
      if (HEAP[$field] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $97 = HEAP[HEAP[$field + 4] + 24];
      
      FUNCTION_TABLE[$97]($field);
      __label__ = 19;
      break;
     case 19:
      
      
      if ($str == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      $0 = 0;
      __label__ = 30;
      break;
     case 21:
      
      
      
      
      
      
      
      
      var $109 = _join_append($self_addr, $str + 20, $quoted, $len == 1);
      $append_ok = $109;
      
      
      
      var $113 = HEAP[$str] - 1;
      
      
      HEAP[$str] = $113;
      
      
      
      
      if (HEAP[$str] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $124 = HEAP[HEAP[$str + 4] + 24];
      
      FUNCTION_TABLE[$124]($str);
      __label__ = 23;
      break;
     case 23:
      
      
      if ($append_ok == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      $0 = 0;
      __label__ = 30;
      break;
     case 25:
      
      var $129 = $i + 1;
      $i = $129;
      __label__ = 26;
      break;
     case 26:
      
      
      
      if ($i < $len) {
        __label__ = 5;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      var $134 = _join_append_lineterminator($self_addr);
      
      if ($134 == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      $0 = 0;
      __label__ = 30;
      break;
     case 29:
      
      
      var $138 = HEAP[$self_addr + 24];
      
      
      var $141 = HEAP[$self_addr + 16];
      
      
      var $144 = HEAP[$self_addr + 8];
      var $145 = _PyObject_CallFunction($144, __str38, allocate([ $141, 0, 0, 0, $138, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = $145;
      __label__ = 30;
      break;
     case 30:
      
      $retval = $0;
      var $retval32 = $retval;
      STACKTOP = __stackBase__;
      return $retval32;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _csv_writerows($self, $seqseq) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $seqseq_addr;
      var $retval;
      var $0;
      var $row_iter;
      var $row_obj;
      var $result;
      $self_addr = $self;
      $seqseq_addr = $seqseq;
      
      var $2 = _PyObject_GetIter($seqseq_addr);
      $row_iter = $2;
      
      
      if ($row_iter == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($5, __str39);
      $0 = 0;
      __label__ = 16;
      break;
     case 2:
      
      
      var $8 = _csv_writerow($self_addr, $row_obj);
      $result = $8;
      
      
      
      var $12 = HEAP[$row_obj] - 1;
      
      
      HEAP[$row_obj] = $12;
      
      
      
      
      if (HEAP[$row_obj] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $23 = HEAP[HEAP[$row_obj + 4] + 24];
      
      FUNCTION_TABLE[$23]($row_obj);
      __label__ = 4;
      break;
     case 4:
      
      
      if ($result == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $30 = HEAP[$row_iter] - 1;
      
      
      HEAP[$row_iter] = $30;
      
      
      
      
      if (HEAP[$row_iter] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $41 = HEAP[HEAP[$row_iter + 4] + 24];
      
      FUNCTION_TABLE[$41]($row_iter);
      __label__ = 7;
      break;
     case 7:
      $0 = 0;
      __label__ = 16;
      break;
     case 8:
      
      
      
      var $46 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $46;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $57 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$57]($result);
      __label__ = 10;
      break;
     case 10:
      
      var $60 = _PyIter_Next($row_iter);
      $row_obj = $60;
      
      if ($60 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      var $65 = HEAP[$row_iter] - 1;
      
      
      HEAP[$row_iter] = $65;
      
      
      
      
      if (HEAP[$row_iter] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $76 = HEAP[HEAP[$row_iter + 4] + 24];
      
      FUNCTION_TABLE[$76]($row_iter);
      __label__ = 13;
      break;
     case 13:
      var $78 = _PyErr_Occurred();
      
      if ($78 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = 0;
      __label__ = 16;
      break;
     case 15:
      
      var $81 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $81;
      $0 = __Py_NoneStruct;
      __label__ = 16;
      break;
     case 16:
      
      $retval = $0;
      var $retval17 = $retval;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Writer_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      _PyObject_GC_UnTrack($self_addr);
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[$self_addr + 12];
      
      
      var $12 = HEAP[$9] - 1;
      var $13 = $9;
      HEAP[$13] = $12;
      
      
      
      if (HEAP[$9] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[$self_addr + 12] + 4] + 24];
      
      
      
      var $28 = HEAP[$self_addr + 12];
      FUNCTION_TABLE[$24]($28);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$self_addr + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $35 = HEAP[$self_addr + 8];
      
      
      var $38 = HEAP[$35] - 1;
      var $39 = $35;
      HEAP[$39] = $38;
      
      
      
      if (HEAP[$35] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[$self_addr + 8] + 4] + 24];
      
      
      var $52 = HEAP[$self_addr + 8];
      FUNCTION_TABLE[$49]($52);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$self_addr + 16] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $59 = HEAP[$self_addr + 16];
      _PyMem_Free($59);
      __label__ = 8;
      break;
     case 8:
      
      
      _PyObject_GC_Del($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Writer_traverse($self, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      $self_addr = $self;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[$self_addr + 12];
      var $9 = $visit_addr;
      
      var $11 = FUNCTION_TABLE[$9]($8, $arg_addr);
      $vret = $11;
      
      
      if ($vret != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      $0 = $vret;
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[$self_addr + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $21 = HEAP[$self_addr + 8];
      var $22 = $visit_addr;
      
      var $24 = FUNCTION_TABLE[$22]($21, $arg_addr);
      $vret4 = $24;
      
      
      if ($vret4 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      $0 = $vret4;
      __label__ = 7;
      break;
     case 6:
      $0 = 0;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Writer_clear($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $_py_tmp;
      var $_py_tmp4;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      
      $_py_tmp = HEAP[$self_addr + 12];
      
      
      HEAP[$self_addr + 12] = 0;
      
      
      
      var $14 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $14;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $25 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$25]($_py_tmp);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$self_addr + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      $_py_tmp4 = HEAP[$self_addr + 8];
      
      
      HEAP[$self_addr + 8] = 0;
      
      
      
      var $39 = HEAP[$_py_tmp4] - 1;
      
      
      HEAP[$_py_tmp4] = $39;
      
      
      
      
      if (HEAP[$_py_tmp4] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $50 = HEAP[HEAP[$_py_tmp4 + 4] + 24];
      
      FUNCTION_TABLE[$50]($_py_tmp4);
      __label__ = 6;
      break;
     case 6:
      $0 = 0;
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _csv_writer($module, $args, $keyword_args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $module_addr;
      var $args_addr;
      var $keyword_args_addr;
      var $retval;
      var $0;
      var $output_file = __stackBase__;
      var $dialect = __stackBase__ + 4;
      var $self;
      $module_addr = $module;
      $args_addr = $args;
      $keyword_args_addr = $keyword_args;
      HEAP[$dialect] = 0;
      var $1 = __PyObject_GC_New(_Writer_Type);
      
      $self = $1;
      
      
      if ($self == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 16;
      break;
     case 2:
      
      
      HEAP[$self + 12] = 0;
      
      
      HEAP[$self + 8] = 0;
      
      
      HEAP[$self + 16] = 0;
      
      
      HEAP[$self + 20] = 0;
      
      
      HEAP[$self + 24] = 0;
      
      
      HEAP[$self + 28] = 0;
      
      var $18 = _PyArg_UnpackTuple($args_addr, __str33, 1, 2, allocate([ $output_file, 0, 0, 0, $dialect, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($18 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      var $24 = HEAP[$self] - 1;
      
      HEAP[$self] = $24;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      var $34 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$34]($self);
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      __label__ = 16;
      break;
     case 6:
      var $37 = HEAP[$output_file];
      var $38 = _PyObject_GetAttrString($37, __str43);
      
      
      HEAP[$self + 8] = $38;
      
      
      
      
      if (HEAP[$self + 8] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      var $47 = HEAP[$self + 8];
      var $48 = _PyCallable_Check($47);
      
      if ($48 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      var $50 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($50, __str44);
      
      
      
      
      var $55 = HEAP[$self] - 1;
      
      HEAP[$self] = $55;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      var $65 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$65]($self);
      __label__ = 10;
      break;
     case 10:
      $0 = 0;
      __label__ = 16;
      break;
     case 11:
      var $68 = HEAP[$dialect];
      
      var $70 = __call_dialect($68, $keyword_args_addr);
      var $71 = $70;
      
      
      HEAP[$self + 12] = $71;
      
      
      
      
      var $78 = $self;
      if (HEAP[$self + 12] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      
      
      var $82 = HEAP[$78] - 1;
      
      HEAP[$78] = $82;
      
      
      
      if (HEAP[$78] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      var $92 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$92]($self);
      __label__ = 14;
      break;
     case 14:
      $0 = 0;
      __label__ = 16;
      break;
     case 15:
      
      _PyObject_GC_Track($78);
      
      
      $0 = $self;
      __label__ = 16;
      break;
     case 16:
      
      $retval = $0;
      var $retval16 = $retval;
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _csv_list_dialects($module, $args) {
    
    var $module_addr;
    var $args_addr;
    var $retval;
    var $0;
    $module_addr = $module;
    $args_addr = $args;
    var $1 = HEAP[_dialects];
    var $2 = _PyDict_Keys($1);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _csv_register_dialect($module, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $module_addr;
      var $args_addr;
      var $kwargs_addr;
      var $retval;
      var $0;
      var $name_obj = __stackBase__;
      var $dialect_obj = __stackBase__ + 4;
      var $dialect;
      $module_addr = $module;
      $args_addr = $args;
      $kwargs_addr = $kwargs;
      HEAP[$dialect_obj] = 0;
      
      var $2 = _PyArg_UnpackTuple($args_addr, __str33, 1, 2, allocate([ $name_obj, 0, 0, 0, $dialect_obj, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 14;
      break;
     case 2:
      
      
      
      
      if (HEAP[HEAP[$name_obj] + 4] != _PyBaseString_Type) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $10 = HEAP[HEAP[$name_obj] + 4];
      var $11 = _PyType_IsSubtype($10, _PyBaseString_Type);
      
      if ($11 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $13 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($13, __str45);
      $0 = 0;
      __label__ = 14;
      break;
     case 5:
      var $14 = HEAP[$dialect_obj];
      
      var $16 = __call_dialect($14, $kwargs_addr);
      $dialect = $16;
      
      if ($16 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 14;
      break;
     case 7:
      var $18 = HEAP[$name_obj];
      var $19 = HEAP[_dialects];
      
      var $21 = _PyDict_SetItem($19, $18, $dialect);
      var $22 = $21 < 0;
      
      
      
      var $26 = HEAP[$dialect] - 1;
      
      
      HEAP[$dialect] = $26;
      
      
      
      var $32 = HEAP[$dialect] == 0;
      if ($22) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      if ($32) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $37 = HEAP[HEAP[$dialect + 4] + 24];
      
      FUNCTION_TABLE[$37]($dialect);
      __label__ = 10;
      break;
     case 10:
      $0 = 0;
      __label__ = 14;
      break;
     case 11:
      if ($32) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $43 = HEAP[HEAP[$dialect + 4] + 24];
      
      FUNCTION_TABLE[$43]($dialect);
      __label__ = 13;
      break;
     case 13:
      
      var $46 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $46;
      $0 = __Py_NoneStruct;
      __label__ = 14;
      break;
     case 14:
      
      $retval = $0;
      var $retval14 = $retval;
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _csv_unregister_dialect($module, $name_obj) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $module_addr;
      var $name_obj_addr;
      var $retval;
      var $0;
      $module_addr = $module;
      $name_obj_addr = $name_obj;
      var $1 = HEAP[_dialects];
      
      var $3 = _PyDict_DelItem($1, $name_obj_addr);
      
      if ($3 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_error_obj];
      var $6 = _PyErr_Format($5, __str4, allocate(1, "i32", ALLOC_STACK));
      $0 = $6;
      __label__ = 3;
      break;
     case 2:
      
      var $8 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $8;
      $0 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _csv_get_dialect($module, $name_obj) {
    
    var $module_addr;
    var $name_obj_addr;
    var $retval;
    var $0;
    $module_addr = $module;
    $name_obj_addr = $name_obj;
    
    var $2 = _get_dialect_from_registry($name_obj_addr);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _csv_field_size_limit($module, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $module_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $new_limit = __stackBase__;
      var $old_limit;
      $module_addr = $module;
      $args_addr = $args;
      HEAP[$new_limit] = 0;
      
      $old_limit = HEAP[_field_limit];
      
      var $3 = _PyArg_UnpackTuple($args_addr, __str46, 0, 1, allocate([ $new_limit, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 7;
      break;
     case 2:
      
      
      if (HEAP[$new_limit] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$new_limit] + 4] + 84] & 8388608) == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $14 = HEAP[_PyExc_TypeError];
      var $15 = _PyErr_Format($14, __str47, allocate(1, "i32", ALLOC_STACK));
      $0 = 0;
      __label__ = 7;
      break;
     case 5:
      var $16 = HEAP[$new_limit];
      var $17 = _PyInt_AsLong($16);
      HEAP[_field_limit] = $17;
      __label__ = 6;
      break;
     case 6:
      
      var $19 = _PyInt_FromLong($old_limit);
      $0 = $19;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval7 = $retval;
      STACKTOP = __stackBase__;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _init_csv() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $module;
      var $style;
      var $0 = _PyType_Ready(_Dialect_Type);
      
      if ($0 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $2 = _PyType_Ready(_Reader_Type);
      
      if ($2 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $4 = _PyType_Ready(_Writer_Type);
      
      if ($4 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $6 = _Py_InitModule4(__str54, _csv_methods, _csv_module_doc, 0, 1013);
      $module = $6;
      
      
      if ($module == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $10 = _PyModule_AddStringConstant($module, __str55, __str56);
      var $11 = $10 == -1;
      if ($11) {
        __label__ = 14;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $12 = _PyDict_New();
      HEAP[_dialects] = $12;
      
      
      if (HEAP[_dialects] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $15 = HEAP[_dialects];
      
      var $17 = _PyModule_AddObject($module, __str57, $15);
      
      if ($17 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      $style = _quote_styles;
      __label__ = 10;
      break;
     case 8:
      
      
      var $21 = HEAP[$style];
      
      
      var $24 = HEAP[$style + 4];
      
      var $26 = _PyModule_AddIntConstant($module, $24, $21);
      var $27 = $26 == -1;
      if ($27) {
        __label__ = 14;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      var $29 = $style + 8;
      $style = $29;
      __label__ = 10;
      break;
     case 10:
      
      
      
      
      if (HEAP[$style + 4] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $35 = HEAP[_Dialect_Type] + 1;
      HEAP[_Dialect_Type] = $35;
      
      var $37 = _PyModule_AddObject($module, __str58, _Dialect_Type);
      
      if ($37 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $39 = _PyErr_NewException(__str59, 0, 0);
      HEAP[_error_obj] = $39;
      
      
      if (HEAP[_error_obj] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $42 = HEAP[_error_obj];
      
      var $44 = _PyModule_AddObject($module, __str60, $42);
      __label__ = 14;
      break;
     case 14:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_csv"] = _init_csv;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _Dialect_get_escapechar, 0, _Dialect_get_lineterminator, 0, _Dialect_get_quotechar, 0, _Dialect_get_quoting, 0, _Dialect_dealloc, 0, _dialect_new, 0, _Reader_dealloc, 0, _Reader_traverse, 0, _Reader_clear, 0, _PyObject_SelfIter, 0, _Reader_iternext, 0, _csv_writerow, 0, _csv_writerows, 0, _Writer_dealloc, 0, _Writer_traverse, 0, _Writer_clear, 0, _csv_reader, 0, _csv_writer, 0, _csv_list_dialects, 0, _csv_register_dialect, 0, _csv_unregister_dialect, 0, _csv_get_dialect, 0, _csv_field_size_limit, 0 ]);
  function run(args) {
    _field_limit = allocate([ 131072 ], [ "i32", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str = allocate([ 81, 85, 79, 84, 69, 95, 77, 73, 78, 73, 77, 65, 76, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 81, 85, 79, 84, 69, 95, 65, 76, 76, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 81, 85, 79, 84, 69, 95, 78, 79, 78, 78, 85, 77, 69, 82, 73, 67, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 81, 85, 79, 84, 69, 95, 78, 79, 78, 69, 0 ], "i8", ALLOC_NORMAL);
    _quote_styles = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _dialects = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _error_obj = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str4 = allocate([ 117, 110, 107, 110, 111, 119, 110, 32, 100, 105, 97, 108, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 34, 37, 115, 34, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 34, 37, 115, 34, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 110, 32, 49, 45, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 34, 37, 115, 34, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 110, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 98, 97, 100, 32, 34, 113, 117, 111, 116, 105, 110, 103, 34, 32, 118, 97, 108, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 100, 101, 108, 105, 109, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 115, 107, 105, 112, 105, 110, 105, 116, 105, 97, 108, 115, 112, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 100, 111, 117, 98, 108, 101, 113, 117, 111, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 115, 116, 114, 105, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _Dialect_memberlist = allocate([ 0, 0, 0, 0, 7, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str13 = allocate([ 101, 115, 99, 97, 112, 101, 99, 104, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 108, 105, 110, 101, 116, 101, 114, 109, 105, 110, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 113, 117, 111, 116, 101, 99, 104, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 113, 117, 111, 116, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _Dialect_getsetlist = allocate(100, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _dialect_kws = allocate(40, "i8*", ALLOC_NORMAL);
    __str17 = allocate([ 100, 105, 97, 108, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 124, 79, 79, 79, 79, 79, 79, 79, 79, 79, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 13, 10, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 100, 101, 108, 105, 109, 105, 116, 101, 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 113, 117, 111, 116, 101, 99, 104, 97, 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 101, 116, 32, 105, 102, 32, 113, 117, 111, 116, 105, 110, 103, 32, 101, 110, 97, 98, 108, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 108, 105, 110, 101, 116, 101, 114, 109, 105, 110, 97, 116, 111, 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    _Dialect_Type_doc = allocate([ 67, 83, 86, 32, 100, 105, 97, 108, 101, 99, 116, 10, 10, 84, 104, 101, 32, 68, 105, 97, 108, 101, 99, 116, 32, 116, 121, 112, 101, 32, 114, 101, 99, 111, 114, 100, 115, 32, 67, 83, 86, 32, 112, 97, 114, 115, 105, 110, 103, 32, 97, 110, 100, 32, 103, 101, 110, 101, 114, 97, 116, 105, 111, 110, 32, 111, 112, 116, 105, 111, 110, 115, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 95, 99, 115, 118, 46, 68, 105, 97, 108, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _Dialect_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str24 = allocate([ 40, 79, 41, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 102, 105, 101, 108, 100, 32, 108, 97, 114, 103, 101, 114, 32, 116, 104, 97, 110, 32, 102, 105, 101, 108, 100, 32, 108, 105, 109, 105, 116, 32, 40, 37, 108, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 39, 37, 99, 39, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 97, 102, 116, 101, 114, 32, 39, 37, 99, 39, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 110, 101, 119, 45, 108, 105, 110, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 115, 101, 101, 110, 32, 105, 110, 32, 117, 110, 113, 117, 111, 116, 101, 100, 32, 102, 105, 101, 108, 100, 32, 45, 32, 100, 111, 32, 121, 111, 117, 32, 110, 101, 101, 100, 32, 116, 111, 32, 111, 112, 101, 110, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 105, 110, 32, 117, 110, 105, 118, 101, 114, 115, 97, 108, 45, 110, 101, 119, 108, 105, 110, 101, 32, 109, 111, 100, 101, 63, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 110, 101, 119, 108, 105, 110, 101, 32, 105, 110, 115, 105, 100, 101, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 108, 105, 110, 101, 32, 99, 111, 110, 116, 97, 105, 110, 115, 32, 78, 85, 76, 76, 32, 98, 121, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _Reader_Type_doc = allocate([ 67, 83, 86, 32, 114, 101, 97, 100, 101, 114, 10, 10, 82, 101, 97, 100, 101, 114, 32, 111, 98, 106, 101, 99, 116, 115, 32, 97, 114, 101, 32, 114, 101, 115, 112, 111, 110, 115, 105, 98, 108, 101, 32, 102, 111, 114, 32, 114, 101, 97, 100, 105, 110, 103, 32, 97, 110, 100, 32, 112, 97, 114, 115, 105, 110, 103, 32, 116, 97, 98, 117, 108, 97, 114, 32, 100, 97, 116, 97, 10, 105, 110, 32, 67, 83, 86, 32, 102, 111, 114, 109, 97, 116, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _Reader_methods = allocate(16, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str31 = allocate([ 108, 105, 110, 101, 95, 110, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    _Reader_memberlist = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 40, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str32 = allocate([ 95, 99, 115, 118, 46, 114, 101, 97, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _Reader_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str33 = allocate(1, "i8", ALLOC_NORMAL);
    __str34 = allocate([ 97, 114, 103, 117, 109, 101, 110, 116, 32, 49, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 110, 101, 101, 100, 32, 116, 111, 32, 101, 115, 99, 97, 112, 101, 44, 32, 98, 117, 116, 32, 110, 111, 32, 101, 115, 99, 97, 112, 101, 99, 104, 97, 114, 32, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 115, 105, 110, 103, 108, 101, 32, 101, 109, 112, 116, 121, 32, 102, 105, 101, 108, 100, 32, 114, 101, 99, 111, 114, 100, 32, 109, 117, 115, 116, 32, 98, 101, 32, 113, 117, 111, 116, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    _csv_writerow_doc = allocate([ 119, 114, 105, 116, 101, 114, 111, 119, 40, 115, 101, 113, 117, 101, 110, 99, 101, 41, 10, 10, 67, 111, 110, 115, 116, 114, 117, 99, 116, 32, 97, 110, 100, 32, 119, 114, 105, 116, 101, 32, 97, 32, 67, 83, 86, 32, 114, 101, 99, 111, 114, 100, 32, 102, 114, 111, 109, 32, 97, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 102, 32, 102, 105, 101, 108, 100, 115, 46, 32, 32, 78, 111, 110, 45, 115, 116, 114, 105, 110, 103, 10, 101, 108, 101, 109, 101, 110, 116, 115, 32, 119, 105, 108, 108, 32, 98, 101, 32, 99, 111, 110, 118, 101, 114, 116, 101, 100, 32, 116, 111, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 115, 101, 113, 117, 101, 110, 99, 101, 32, 101, 120, 112, 101, 99, 116, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 40, 115, 35, 41, 0 ], "i8", ALLOC_NORMAL);
    _csv_writerows_doc = allocate([ 119, 114, 105, 116, 101, 114, 111, 119, 115, 40, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 102, 32, 115, 101, 113, 117, 101, 110, 99, 101, 115, 41, 10, 10, 67, 111, 110, 115, 116, 114, 117, 99, 116, 32, 97, 110, 100, 32, 119, 114, 105, 116, 101, 32, 97, 32, 115, 101, 114, 105, 101, 115, 32, 111, 102, 32, 115, 101, 113, 117, 101, 110, 99, 101, 115, 32, 116, 111, 32, 97, 32, 99, 115, 118, 32, 102, 105, 108, 101, 46, 32, 32, 78, 111, 110, 45, 115, 116, 114, 105, 110, 103, 10, 101, 108, 101, 109, 101, 110, 116, 115, 32, 119, 105, 108, 108, 32, 98, 101, 32, 99, 111, 110, 118, 101, 114, 116, 101, 100, 32, 116, 111, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 119, 114, 105, 116, 101, 114, 111, 119, 115, 40, 41, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 119, 114, 105, 116, 101, 114, 111, 119, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 119, 114, 105, 116, 101, 114, 111, 119, 115, 0 ], "i8", ALLOC_NORMAL);
    _Writer_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _Writer_memberlist = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _Writer_Type_doc = allocate([ 67, 83, 86, 32, 119, 114, 105, 116, 101, 114, 10, 10, 87, 114, 105, 116, 101, 114, 32, 111, 98, 106, 101, 99, 116, 115, 32, 97, 114, 101, 32, 114, 101, 115, 112, 111, 110, 115, 105, 98, 108, 101, 32, 102, 111, 114, 32, 103, 101, 110, 101, 114, 97, 116, 105, 110, 103, 32, 116, 97, 98, 117, 108, 97, 114, 32, 100, 97, 116, 97, 10, 105, 110, 32, 67, 83, 86, 32, 102, 111, 114, 109, 97, 116, 32, 102, 114, 111, 109, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 105, 110, 112, 117, 116, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 95, 99, 115, 118, 46, 119, 114, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _Writer_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str43 = allocate([ 119, 114, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 97, 114, 103, 117, 109, 101, 110, 116, 32, 49, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 97, 32, 34, 119, 114, 105, 116, 101, 34, 32, 109, 101, 116, 104, 111, 100, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 100, 105, 97, 108, 101, 99, 116, 32, 110, 97, 109, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 114, 32, 117, 110, 105, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 102, 105, 101, 108, 100, 95, 115, 105, 122, 101, 95, 108, 105, 109, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 108, 105, 109, 105, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _csv_module_doc = allocate([ 67, 83, 86, 32, 112, 97, 114, 115, 105, 110, 103, 32, 97, 110, 100, 32, 119, 114, 105, 116, 105, 110, 103, 46, 10, 10, 84, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 112, 114, 111, 118, 105, 100, 101, 115, 32, 99, 108, 97, 115, 115, 101, 115, 32, 116, 104, 97, 116, 32, 97, 115, 115, 105, 115, 116, 32, 105, 110, 32, 116, 104, 101, 32, 114, 101, 97, 100, 105, 110, 103, 32, 97, 110, 100, 32, 119, 114, 105, 116, 105, 110, 103, 10, 111, 102, 32, 67, 111, 109, 109, 97, 32, 83, 101, 112, 97, 114, 97, 116, 101, 100, 32, 86, 97, 108, 117, 101, 32, 40, 67, 83, 86, 41, 32, 102, 105, 108, 101, 115, 44, 32, 97, 110, 100, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 115, 32, 116, 104, 101, 32, 105, 110, 116, 101, 114, 102, 97, 99, 101, 10, 100, 101, 115, 99, 114, 105, 98, 101, 100, 32, 98, 121, 32, 80, 69, 80, 32, 51, 48, 53, 46, 32, 32, 65, 108, 116, 104, 111, 117, 103, 104, 32, 109, 97, 110, 121, 32, 67, 83, 86, 32, 102, 105, 108, 101, 115, 32, 97, 114, 101, 32, 115, 105, 109, 112, 108, 101, 32, 116, 111, 32, 112, 97, 114, 115, 101, 44, 10, 116, 104, 101, 32, 102, 111, 114, 109, 97, 116, 32, 105, 115, 32, 110, 111, 116, 32, 102, 111, 114, 109, 97, 108, 108, 121, 32, 100, 101, 102, 105, 110, 101, 100, 32, 98, 121, 32, 97, 32, 115, 116, 97, 98, 108, 101, 32, 115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 32, 97, 110, 100, 10, 105, 115, 32, 115, 117, 98, 116, 108, 101, 32, 101, 110, 111, 117, 103, 104, 32, 116, 104, 97, 116, 32, 112, 97, 114, 115, 105, 110, 103, 32, 108, 105, 110, 101, 115, 32, 111, 102, 32, 97, 32, 67, 83, 86, 32, 102, 105, 108, 101, 32, 119, 105, 116, 104, 32, 115, 111, 109, 101, 116, 104, 105, 110, 103, 10, 108, 105, 107, 101, 32, 108, 105, 110, 101, 46, 115, 112, 108, 105, 116, 40, 34, 44, 34, 41, 32, 105, 115, 32, 98, 111, 117, 110, 100, 32, 116, 111, 32, 102, 97, 105, 108, 46, 32, 32, 84, 104, 101, 32, 109, 111, 100, 117, 108, 101, 32, 115, 117, 112, 112, 111, 114, 116, 115, 32, 116, 104, 114, 101, 101, 10, 98, 97, 115, 105, 99, 32, 65, 80, 73, 115, 58, 32, 114, 101, 97, 100, 105, 110, 103, 44, 32, 119, 114, 105, 116, 105, 110, 103, 44, 32, 97, 110, 100, 32, 114, 101, 103, 105, 115, 116, 114, 97, 116, 105, 111, 110, 32, 111, 102, 32, 100, 105, 97, 108, 101, 99, 116, 115, 46, 10, 10, 10, 68, 73, 65, 76, 69, 67, 84, 32, 82, 69, 71, 73, 83, 84, 82, 65, 84, 73, 79, 78, 58, 10, 10, 82, 101, 97, 100, 101, 114, 115, 32, 97, 110, 100, 32, 119, 114, 105, 116, 101, 114, 115, 32, 115, 117, 112, 112, 111, 114, 116, 32, 97, 32, 100, 105, 97, 108, 101, 99, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 44, 32, 119, 104, 105, 99, 104, 32, 105, 115, 32, 97, 32, 99, 111, 110, 118, 101, 110, 105, 101, 110, 116, 10, 104, 97, 110, 100, 108, 101, 32, 111, 110, 32, 97, 32, 103, 114, 111, 117, 112, 32, 111, 102, 32, 115, 101, 116, 116, 105, 110, 103, 115, 46, 32, 32, 87, 104, 101, 110, 32, 116, 104, 101, 32, 100, 105, 97, 108, 101, 99, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 44, 10, 105, 116, 32, 105, 100, 101, 110, 116, 105, 102, 105, 101, 115, 32, 111, 110, 101, 32, 111, 102, 32, 116, 104, 101, 32, 100, 105, 97, 108, 101, 99, 116, 115, 32, 112, 114, 101, 118, 105, 111, 117, 115, 108, 121, 32, 114, 101, 103, 105, 115, 116, 101, 114, 101, 100, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 109, 111, 100, 117, 108, 101, 46, 10, 73, 102, 32, 105, 116, 32, 105, 115, 32, 97, 32, 99, 108, 97, 115, 115, 32, 111, 114, 32, 105, 110, 115, 116, 97, 110, 99, 101, 44, 32, 116, 104, 101, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 115, 32, 111, 102, 32, 116, 104, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 97, 114, 101, 32, 117, 115, 101, 100, 32, 97, 115, 10, 116, 104, 101, 32, 115, 101, 116, 116, 105, 110, 103, 115, 32, 102, 111, 114, 32, 116, 104, 101, 32, 114, 101, 97, 100, 101, 114, 32, 111, 114, 32, 119, 114, 105, 116, 101, 114, 58, 10, 10, 32, 32, 32, 32, 99, 108, 97, 115, 115, 32, 101, 120, 99, 101, 108, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 108, 105, 109, 105, 116, 101, 114, 32, 61, 32, 39, 44, 39, 10, 32, 32, 32, 32, 32, 32, 32, 32, 113, 117, 111, 116, 101, 99, 104, 97, 114, 32, 61, 32, 39, 34, 39, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 115, 99, 97, 112, 101, 99, 104, 97, 114, 32, 61, 32, 78, 111, 110, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 111, 117, 98, 108, 101, 113, 117, 111, 116, 101, 32, 61, 32, 84, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 107, 105, 112, 105, 110, 105, 116, 105, 97, 108, 115, 112, 97, 99, 101, 32, 61, 32, 70, 97, 108, 115, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 105, 110, 101, 116, 101, 114, 109, 105, 110, 97, 116, 111, 114, 32, 61, 32, 39, 92, 114, 92, 110, 39, 10, 32, 32, 32, 32, 32, 32, 32, 32, 113, 117, 111, 116, 105, 110, 103, 32, 61, 32, 81, 85, 79, 84, 69, 95, 77, 73, 78, 73, 77, 65, 76, 10, 10, 83, 69, 84, 84, 73, 78, 71, 83, 58, 10, 10, 32, 32, 32, 32, 42, 32, 113, 117, 111, 116, 101, 99, 104, 97, 114, 32, 45, 32, 115, 112, 101, 99, 105, 102, 105, 101, 115, 32, 97, 32, 111, 110, 101, 45, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 117, 115, 101, 32, 97, 115, 32, 116, 104, 101, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 113, 117, 111, 116, 105, 110, 103, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 46, 32, 32, 73, 116, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 39, 34, 39, 46, 10, 32, 32, 32, 32, 42, 32, 100, 101, 108, 105, 109, 105, 116, 101, 114, 32, 45, 32, 115, 112, 101, 99, 105, 102, 105, 101, 115, 32, 97, 32, 111, 110, 101, 45, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 117, 115, 101, 32, 97, 115, 32, 116, 104, 101, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 105, 101, 108, 100, 32, 115, 101, 112, 97, 114, 97, 116, 111, 114, 46, 32, 32, 73, 116, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 39, 44, 39, 46, 10, 32, 32, 32, 32, 42, 32, 115, 107, 105, 112, 105, 110, 105, 116, 105, 97, 108, 115, 112, 97, 99, 101, 32, 45, 32, 115, 112, 101, 99, 105, 102, 105, 101, 115, 32, 104, 111, 119, 32, 116, 111, 32, 105, 110, 116, 101, 114, 112, 114, 101, 116, 32, 119, 104, 105, 116, 101, 115, 112, 97, 99, 101, 32, 119, 104, 105, 99, 104, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 109, 109, 101, 100, 105, 97, 116, 101, 108, 121, 32, 102, 111, 108, 108, 111, 119, 115, 32, 97, 32, 100, 101, 108, 105, 109, 105, 116, 101, 114, 46, 32, 32, 73, 116, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 70, 97, 108, 115, 101, 44, 32, 119, 104, 105, 99, 104, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 97, 110, 115, 32, 116, 104, 97, 116, 32, 119, 104, 105, 116, 101, 115, 112, 97, 99, 101, 32, 105, 109, 109, 101, 100, 105, 97, 116, 101, 108, 121, 32, 102, 111, 108, 108, 111, 119, 105, 110, 103, 32, 97, 32, 100, 101, 108, 105, 109, 105, 116, 101, 114, 32, 105, 115, 32, 112, 97, 114, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 111, 102, 32, 116, 104, 101, 32, 102, 111, 108, 108, 111, 119, 105, 110, 103, 32, 102, 105, 101, 108, 100, 46, 10, 32, 32, 32, 32, 42, 32, 108, 105, 110, 101, 116, 101, 114, 109, 105, 110, 97, 116, 111, 114, 32, 45, 32, 32, 115, 112, 101, 99, 105, 102, 105, 101, 115, 32, 116, 104, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 119, 104, 105, 99, 104, 32, 115, 104, 111, 117, 108, 100, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 101, 114, 109, 105, 110, 97, 116, 101, 32, 114, 111, 119, 115, 46, 10, 32, 32, 32, 32, 42, 32, 113, 117, 111, 116, 105, 110, 103, 32, 45, 32, 99, 111, 110, 116, 114, 111, 108, 115, 32, 119, 104, 101, 110, 32, 113, 117, 111, 116, 101, 115, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 103, 101, 110, 101, 114, 97, 116, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 119, 114, 105, 116, 101, 114, 46, 10, 32, 32, 32, 32, 32, 32, 32, 32, 73, 116, 32, 99, 97, 110, 32, 116, 97, 107, 101, 32, 111, 110, 32, 97, 110, 121, 32, 111, 102, 32, 116, 104, 101, 32, 102, 111, 108, 108, 111, 119, 105, 110, 103, 32, 109, 111, 100, 117, 108, 101, 32, 99, 111, 110, 115, 116, 97, 110, 116, 115, 58, 10, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 115, 118, 46, 81, 85, 79, 84, 69, 95, 77, 73, 78, 73, 77, 65, 76, 32, 109, 101, 97, 110, 115, 32, 111, 110, 108, 121, 32, 119, 104, 101, 110, 32, 114, 101, 113, 117, 105, 114, 101, 100, 44, 32, 102, 111, 114, 32, 101, 120, 97, 109, 112, 108, 101, 44, 32, 119, 104, 101, 110, 32, 97, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 105, 101, 108, 100, 32, 99, 111, 110, 116, 97, 105, 110, 115, 32, 101, 105, 116, 104, 101, 114, 32, 116, 104, 101, 32, 113, 117, 111, 116, 101, 99, 104, 97, 114, 32, 111, 114, 32, 116, 104, 101, 32, 100, 101, 108, 105, 109, 105, 116, 101, 114, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 115, 118, 46, 81, 85, 79, 84, 69, 95, 65, 76, 76, 32, 109, 101, 97, 110, 115, 32, 116, 104, 97, 116, 32, 113, 117, 111, 116, 101, 115, 32, 97, 114, 101, 32, 97, 108, 119, 97, 121, 115, 32, 112, 108, 97, 99, 101, 100, 32, 97, 114, 111, 117, 110, 100, 32, 102, 105, 101, 108, 100, 115, 46, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 115, 118, 46, 81, 85, 79, 84, 69, 95, 78, 79, 78, 78, 85, 77, 69, 82, 73, 67, 32, 109, 101, 97, 110, 115, 32, 116, 104, 97, 116, 32, 113, 117, 111, 116, 101, 115, 32, 97, 114, 101, 32, 97, 108, 119, 97, 121, 115, 32, 112, 108, 97, 99, 101, 100, 32, 97, 114, 111, 117, 110, 100, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 105, 101, 108, 100, 115, 32, 119, 104, 105, 99, 104, 32, 100, 111, 32, 110, 111, 116, 32, 112, 97, 114, 115, 101, 32, 97, 115, 32, 105, 110, 116, 101, 103, 101, 114, 115, 32, 111, 114, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 109, 98, 101, 114, 115, 46, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 115, 118, 46, 81, 85, 79, 84, 69, 95, 78, 79, 78, 69, 32, 109, 101, 97, 110, 115, 32, 116, 104, 97, 116, 32, 113, 117, 111, 116, 101, 115, 32, 97, 114, 101, 32, 110, 101, 118, 101, 114, 32, 112, 108, 97, 99, 101, 100, 32, 97, 114, 111, 117, 110, 100, 32, 102, 105, 101, 108, 100, 115, 46, 10, 32, 32, 32, 32, 42, 32, 101, 115, 99, 97, 112, 101, 99, 104, 97, 114, 32, 45, 32, 115, 112, 101, 99, 105, 102, 105, 101, 115, 32, 97, 32, 111, 110, 101, 45, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 115, 116, 114, 105, 110, 103, 32, 117, 115, 101, 100, 32, 116, 111, 32, 101, 115, 99, 97, 112, 101, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 101, 32, 100, 101, 108, 105, 109, 105, 116, 101, 114, 32, 119, 104, 101, 110, 32, 113, 117, 111, 116, 105, 110, 103, 32, 105, 115, 32, 115, 101, 116, 32, 116, 111, 32, 81, 85, 79, 84, 69, 95, 78, 79, 78, 69, 46, 10, 32, 32, 32, 32, 42, 32, 100, 111, 117, 98, 108, 101, 113, 117, 111, 116, 101, 32, 45, 32, 99, 111, 110, 116, 114, 111, 108, 115, 32, 116, 104, 101, 32, 104, 97, 110, 100, 108, 105, 110, 103, 32, 111, 102, 32, 113, 117, 111, 116, 101, 115, 32, 105, 110, 115, 105, 100, 101, 32, 102, 105, 101, 108, 100, 115, 46, 32, 32, 87, 104, 101, 110, 10, 32, 32, 32, 32, 32, 32, 32, 32, 84, 114, 117, 101, 44, 32, 116, 119, 111, 32, 99, 111, 110, 115, 101, 99, 117, 116, 105, 118, 101, 32, 113, 117, 111, 116, 101, 115, 32, 97, 114, 101, 32, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 32, 97, 115, 32, 111, 110, 101, 32, 100, 117, 114, 105, 110, 103, 32, 114, 101, 97, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 110, 100, 32, 119, 104, 101, 110, 32, 119, 114, 105, 116, 105, 110, 103, 44, 32, 101, 97, 99, 104, 32, 113, 117, 111, 116, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 101, 109, 98, 101, 100, 100, 101, 100, 32, 105, 110, 32, 116, 104, 101, 32, 100, 97, 116, 97, 32, 105, 115, 10, 32, 32, 32, 32, 32, 32, 32, 32, 119, 114, 105, 116, 116, 101, 110, 32, 97, 115, 32, 116, 119, 111, 32, 113, 117, 111, 116, 101, 115, 10, 0 ], "i8", ALLOC_NORMAL);
    _csv_reader_doc = allocate([ 32, 32, 32, 32, 99, 115, 118, 95, 114, 101, 97, 100, 101, 114, 32, 61, 32, 114, 101, 97, 100, 101, 114, 40, 105, 116, 101, 114, 97, 98, 108, 101, 32, 91, 44, 32, 100, 105, 97, 108, 101, 99, 116, 61, 39, 101, 120, 99, 101, 108, 39, 93, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 91, 111, 112, 116, 105, 111, 110, 97, 108, 32, 107, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 115, 93, 41, 10, 32, 32, 32, 32, 102, 111, 114, 32, 114, 111, 119, 32, 105, 110, 32, 99, 115, 118, 95, 114, 101, 97, 100, 101, 114, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 112, 114, 111, 99, 101, 115, 115, 40, 114, 111, 119, 41, 10, 10, 84, 104, 101, 32, 34, 105, 116, 101, 114, 97, 98, 108, 101, 34, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 99, 97, 110, 32, 98, 101, 32, 97, 110, 121, 32, 111, 98, 106, 101, 99, 116, 32, 116, 104, 97, 116, 32, 114, 101, 116, 117, 114, 110, 115, 32, 97, 32, 108, 105, 110, 101, 10, 111, 102, 32, 105, 110, 112, 117, 116, 32, 102, 111, 114, 32, 101, 97, 99, 104, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 44, 32, 115, 117, 99, 104, 32, 97, 115, 32, 97, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 32, 111, 114, 32, 97, 32, 108, 105, 115, 116, 46, 32, 32, 84, 104, 101, 10, 111, 112, 116, 105, 111, 110, 97, 108, 32, 34, 100, 105, 97, 108, 101, 99, 116, 34, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 105, 115, 32, 100, 105, 115, 99, 117, 115, 115, 101, 100, 32, 98, 101, 108, 111, 119, 46, 32, 32, 84, 104, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 10, 97, 108, 115, 111, 32, 97, 99, 99, 101, 112, 116, 115, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 107, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 119, 104, 105, 99, 104, 32, 111, 118, 101, 114, 114, 105, 100, 101, 32, 115, 101, 116, 116, 105, 110, 103, 115, 10, 112, 114, 111, 118, 105, 100, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 100, 105, 97, 108, 101, 99, 116, 46, 10, 10, 84, 104, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 105, 115, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 46, 32, 32, 69, 97, 99, 104, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 32, 114, 101, 116, 117, 114, 110, 115, 32, 97, 32, 114, 111, 119, 10, 111, 102, 32, 116, 104, 101, 32, 67, 83, 86, 32, 102, 105, 108, 101, 32, 40, 119, 104, 105, 99, 104, 32, 99, 97, 110, 32, 115, 112, 97, 110, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 105, 110, 112, 117, 116, 32, 108, 105, 110, 101, 115, 41, 58, 10, 0 ], "i8", ALLOC_NORMAL);
    _csv_writer_doc = allocate([ 32, 32, 32, 32, 99, 115, 118, 95, 119, 114, 105, 116, 101, 114, 32, 61, 32, 99, 115, 118, 46, 119, 114, 105, 116, 101, 114, 40, 102, 105, 108, 101, 111, 98, 106, 32, 91, 44, 32, 100, 105, 97, 108, 101, 99, 116, 61, 39, 101, 120, 99, 101, 108, 39, 93, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 91, 111, 112, 116, 105, 111, 110, 97, 108, 32, 107, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 115, 93, 41, 10, 32, 32, 32, 32, 102, 111, 114, 32, 114, 111, 119, 32, 105, 110, 32, 115, 101, 113, 117, 101, 110, 99, 101, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 115, 118, 95, 119, 114, 105, 116, 101, 114, 46, 119, 114, 105, 116, 101, 114, 111, 119, 40, 114, 111, 119, 41, 10, 10, 32, 32, 32, 32, 91, 111, 114, 93, 10, 10, 32, 32, 32, 32, 99, 115, 118, 95, 119, 114, 105, 116, 101, 114, 32, 61, 32, 99, 115, 118, 46, 119, 114, 105, 116, 101, 114, 40, 102, 105, 108, 101, 111, 98, 106, 32, 91, 44, 32, 100, 105, 97, 108, 101, 99, 116, 61, 39, 101, 120, 99, 101, 108, 39, 93, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 91, 111, 112, 116, 105, 111, 110, 97, 108, 32, 107, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 115, 93, 41, 10, 32, 32, 32, 32, 99, 115, 118, 95, 119, 114, 105, 116, 101, 114, 46, 119, 114, 105, 116, 101, 114, 111, 119, 115, 40, 114, 111, 119, 115, 41, 10, 10, 84, 104, 101, 32, 34, 102, 105, 108, 101, 111, 98, 106, 34, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 99, 97, 110, 32, 98, 101, 32, 97, 110, 121, 32, 111, 98, 106, 101, 99, 116, 32, 116, 104, 97, 116, 32, 115, 117, 112, 112, 111, 114, 116, 115, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 65, 80, 73, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _csv_list_dialects_doc = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 108, 105, 115, 116, 32, 111, 102, 32, 97, 108, 108, 32, 107, 110, 111, 119, 32, 100, 105, 97, 108, 101, 99, 116, 32, 110, 97, 109, 101, 115, 46, 10, 32, 32, 32, 32, 110, 97, 109, 101, 115, 32, 61, 32, 99, 115, 118, 46, 108, 105, 115, 116, 95, 100, 105, 97, 108, 101, 99, 116, 115, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    _csv_get_dialect_doc = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 100, 105, 97, 108, 101, 99, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 97, 115, 115, 111, 99, 105, 97, 116, 101, 100, 32, 119, 105, 116, 104, 32, 110, 97, 109, 101, 46, 10, 32, 32, 32, 32, 100, 105, 97, 108, 101, 99, 116, 32, 61, 32, 99, 115, 118, 46, 103, 101, 116, 95, 100, 105, 97, 108, 101, 99, 116, 40, 110, 97, 109, 101, 41, 0 ], "i8", ALLOC_NORMAL);
    _csv_register_dialect_doc = allocate([ 67, 114, 101, 97, 116, 101, 32, 97, 32, 109, 97, 112, 112, 105, 110, 103, 32, 102, 114, 111, 109, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 110, 97, 109, 101, 32, 116, 111, 32, 97, 32, 100, 105, 97, 108, 101, 99, 116, 32, 99, 108, 97, 115, 115, 46, 10, 32, 32, 32, 32, 100, 105, 97, 108, 101, 99, 116, 32, 61, 32, 99, 115, 118, 46, 114, 101, 103, 105, 115, 116, 101, 114, 95, 100, 105, 97, 108, 101, 99, 116, 40, 110, 97, 109, 101, 44, 32, 100, 105, 97, 108, 101, 99, 116, 41, 0 ], "i8", ALLOC_NORMAL);
    _csv_unregister_dialect_doc = allocate([ 68, 101, 108, 101, 116, 101, 32, 116, 104, 101, 32, 110, 97, 109, 101, 47, 100, 105, 97, 108, 101, 99, 116, 32, 109, 97, 112, 112, 105, 110, 103, 32, 97, 115, 115, 111, 99, 105, 97, 116, 101, 100, 32, 119, 105, 116, 104, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 110, 97, 109, 101, 46, 10, 32, 32, 32, 32, 99, 115, 118, 46, 117, 110, 114, 101, 103, 105, 115, 116, 101, 114, 95, 100, 105, 97, 108, 101, 99, 116, 40, 110, 97, 109, 101, 41, 0 ], "i8", ALLOC_NORMAL);
    _csv_field_size_limit_doc = allocate([ 83, 101, 116, 115, 32, 97, 110, 32, 117, 112, 112, 101, 114, 32, 108, 105, 109, 105, 116, 32, 111, 110, 32, 112, 97, 114, 115, 101, 100, 32, 102, 105, 101, 108, 100, 115, 46, 10, 32, 32, 32, 32, 99, 115, 118, 46, 102, 105, 101, 108, 100, 95, 115, 105, 122, 101, 95, 108, 105, 109, 105, 116, 40, 91, 108, 105, 109, 105, 116, 93, 41, 10, 10, 82, 101, 116, 117, 114, 110, 115, 32, 111, 108, 100, 32, 108, 105, 109, 105, 116, 46, 32, 73, 102, 32, 108, 105, 109, 105, 116, 32, 105, 115, 32, 110, 111, 116, 32, 103, 105, 118, 101, 110, 44, 32, 110, 111, 32, 110, 101, 119, 32, 108, 105, 109, 105, 116, 32, 105, 115, 32, 115, 101, 116, 32, 97, 110, 100, 10, 116, 104, 101, 32, 111, 108, 100, 32, 108, 105, 109, 105, 116, 32, 105, 115, 32, 114, 101, 116, 117, 114, 110, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 114, 101, 97, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 119, 114, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 108, 105, 115, 116, 95, 100, 105, 97, 108, 101, 99, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 114, 101, 103, 105, 115, 116, 101, 114, 95, 100, 105, 97, 108, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 117, 110, 114, 101, 103, 105, 115, 116, 101, 114, 95, 100, 105, 97, 108, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 103, 101, 116, 95, 100, 105, 97, 108, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _csv_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str54 = allocate([ 95, 99, 115, 118, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 95, 95, 118, 101, 114, 115, 105, 111, 110, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 49, 46, 48, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 95, 100, 105, 97, 108, 101, 99, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 68, 105, 97, 108, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 95, 99, 115, 118, 46, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_quote_styles + 4] = __str;
    HEAP[_quote_styles + 12] = __str1;
    HEAP[_quote_styles + 20] = __str2;
    HEAP[_quote_styles + 28] = __str3;
    HEAP[_Dialect_memberlist] = __str9;
    HEAP[_Dialect_memberlist + 20] = __str10;
    HEAP[_Dialect_memberlist + 40] = __str11;
    HEAP[_Dialect_memberlist + 60] = __str12;
    HEAP[_Dialect_getsetlist] = __str13;
    HEAP[_Dialect_getsetlist + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_Dialect_getsetlist + 20] = __str14;
    HEAP[_Dialect_getsetlist + 24] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_Dialect_getsetlist + 40] = __str15;
    HEAP[_Dialect_getsetlist + 44] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_Dialect_getsetlist + 60] = __str16;
    HEAP[_Dialect_getsetlist + 64] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_dialect_kws] = __str17;
    HEAP[_dialect_kws + 4] = __str9;
    HEAP[_dialect_kws + 8] = __str11;
    HEAP[_dialect_kws + 12] = __str13;
    HEAP[_dialect_kws + 16] = __str14;
    HEAP[_dialect_kws + 20] = __str15;
    HEAP[_dialect_kws + 24] = __str16;
    HEAP[_dialect_kws + 28] = __str10;
    HEAP[_dialect_kws + 32] = __str12;
    HEAP[_Dialect_Type + 12] = __str23;
    HEAP[_Dialect_Type + 24] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_Dialect_Type + 88] = _Dialect_Type_doc;
    HEAP[_Dialect_Type + 120] = _Dialect_memberlist;
    HEAP[_Dialect_Type + 124] = _Dialect_getsetlist;
    HEAP[_Dialect_Type + 156] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_Reader_memberlist] = __str17;
    HEAP[_Reader_memberlist + 20] = __str31;
    HEAP[_Reader_Type + 12] = __str32;
    HEAP[_Reader_Type + 24] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_Reader_Type + 88] = _Reader_Type_doc;
    HEAP[_Reader_Type + 92] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_Reader_Type + 96] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_Reader_Type + 108] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_Reader_Type + 112] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_Reader_Type + 116] = _Reader_methods;
    HEAP[_Reader_Type + 120] = _Reader_memberlist;
    HEAP[_Writer_methods] = __str40;
    HEAP[_Writer_methods + 4] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_Writer_methods + 12] = _csv_writerow_doc;
    HEAP[_Writer_methods + 16] = __str41;
    HEAP[_Writer_methods + 20] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_Writer_methods + 28] = _csv_writerows_doc;
    HEAP[_Writer_memberlist] = __str17;
    HEAP[_Writer_Type + 12] = __str42;
    HEAP[_Writer_Type + 24] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_Writer_Type + 88] = _Writer_Type_doc;
    HEAP[_Writer_Type + 92] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_Writer_Type + 96] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_Writer_Type + 116] = _Writer_methods;
    HEAP[_Writer_Type + 120] = _Writer_memberlist;
    HEAP[_csv_methods] = __str48;
    HEAP[_csv_methods + 4] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_csv_methods + 12] = _csv_reader_doc;
    HEAP[_csv_methods + 16] = __str49;
    HEAP[_csv_methods + 20] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_csv_methods + 28] = _csv_writer_doc;
    HEAP[_csv_methods + 32] = __str50;
    HEAP[_csv_methods + 36] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_csv_methods + 44] = _csv_list_dialects_doc;
    HEAP[_csv_methods + 48] = __str51;
    HEAP[_csv_methods + 52] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_csv_methods + 60] = _csv_register_dialect_doc;
    HEAP[_csv_methods + 64] = __str52;
    HEAP[_csv_methods + 68] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_csv_methods + 76] = _csv_unregister_dialect_doc;
    HEAP[_csv_methods + 80] = __str53;
    HEAP[_csv_methods + 84] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_csv_methods + 92] = _csv_get_dialect_doc;
    HEAP[_csv_methods + 96] = __str46;
    HEAP[_csv_methods + 100] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_csv_methods + 108] = _csv_field_size_limit_doc;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
