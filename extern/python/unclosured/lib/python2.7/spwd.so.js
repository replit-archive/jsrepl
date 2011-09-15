"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 80;
  var $1___SIZE = 8;
  var $2___SIZE = 48;
  var $3___SIZE = 16;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStructSequence___SIZE = 16;
  var $struct_PyStructSequence_Desc___SIZE = 16;
  var $struct_PyStructSequence_Field___SIZE = 8;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_spwd___SIZE = 36;
  var _spwd__doc__;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var __str7;
  var __str8;
  var __str9;
  var __str10;
  var __str11;
  var __str12;
  var __str13;
  var __str14;
  var __str15;
  var __str16;
  var __str17;
  var _struct_spwd_type_fields;
  var _struct_spwd__doc__;
  var _struct_spwd_type_desc;
  var __str18;
  var _StructSpwdType;
  var _spwd_getspnam__doc__;
  var __str19;
  var __str20;
  var _spwd_getspall__doc__;
  var __str21;
  var __str22;
  var _spwd_methods;
  var __str23;
  var _initialized_b;
  var __str24;
  function _sets($v, $i, $val) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $v_addr;
      var $i_addr;
      var $val_addr;
      $v_addr = $v;
      $i_addr = $i;
      $val_addr = $val;
      
      
      
      var $3 = $v_addr;
      var $4 = $i_addr;
      if ($val_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $6 = _PyString_FromString($val_addr);
      
      
      HEAP[$3 + 12 + $4 * 4] = $6;
      __label__ = 3;
      break;
     case 2:
      
      
      HEAP[$3 + 12 + $4 * 4] = __Py_NoneStruct;
      
      var $12 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $12;
      __label__ = 3;
      break;
     case 3:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mkspent($p) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $retval;
      var $0;
      var $setIndex;
      var $v;
      $p_addr = $p;
      $setIndex = 0;
      var $1 = _PyStructSequence_New(_StructSpwdType);
      $v = $1;
      
      
      if ($v == 0) {
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
      
      
      var $6 = HEAP[$p_addr];
      var $7 = $setIndex;
      
      var $9 = $setIndex + 1;
      $setIndex = $9;
      
      _sets($v, $7, $6);
      
      
      var $13 = HEAP[$p_addr + 4];
      var $14 = $setIndex;
      
      var $16 = $setIndex + 1;
      $setIndex = $16;
      
      _sets($v, $14, $13);
      
      var $19 = $v;
      var $20 = $setIndex;
      
      
      var $23 = HEAP[$p_addr + 8];
      var $24 = _PyInt_FromLong($23);
      
      
      HEAP[$19 + 12 + $20 * 4] = $24;
      
      var $28 = $setIndex + 1;
      $setIndex = $28;
      
      var $30 = $v;
      var $31 = $setIndex;
      
      
      var $34 = HEAP[$p_addr + 12];
      var $35 = _PyInt_FromLong($34);
      
      
      HEAP[$30 + 12 + $31 * 4] = $35;
      
      var $39 = $setIndex + 1;
      $setIndex = $39;
      
      var $41 = $v;
      var $42 = $setIndex;
      
      
      var $45 = HEAP[$p_addr + 16];
      var $46 = _PyInt_FromLong($45);
      
      
      HEAP[$41 + 12 + $42 * 4] = $46;
      
      var $50 = $setIndex + 1;
      $setIndex = $50;
      
      var $52 = $v;
      var $53 = $setIndex;
      
      
      var $56 = HEAP[$p_addr + 20];
      var $57 = _PyInt_FromLong($56);
      
      
      HEAP[$52 + 12 + $53 * 4] = $57;
      
      var $61 = $setIndex + 1;
      $setIndex = $61;
      
      var $63 = $v;
      var $64 = $setIndex;
      
      
      var $67 = HEAP[$p_addr + 24];
      var $68 = _PyInt_FromLong($67);
      
      
      HEAP[$63 + 12 + $64 * 4] = $68;
      
      var $72 = $setIndex + 1;
      $setIndex = $72;
      
      var $74 = $v;
      var $75 = $setIndex;
      
      
      var $78 = HEAP[$p_addr + 28];
      var $79 = _PyInt_FromLong($78);
      
      
      HEAP[$74 + 12 + $75 * 4] = $79;
      
      var $83 = $setIndex + 1;
      $setIndex = $83;
      
      var $85 = $v;
      var $86 = $setIndex;
      
      
      var $89 = HEAP[$p_addr + 32];
      var $90 = _PyInt_FromLong($89);
      
      
      HEAP[$85 + 12 + $86 * 4] = $90;
      
      var $94 = $setIndex + 1;
      $setIndex = $94;
      var $95 = _PyErr_Occurred();
      
      var $97 = $v;
      if ($95 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      var $100 = HEAP[$97] - 1;
      
      
      HEAP[$v] = $100;
      
      
      
      
      if (HEAP[$v] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $111 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$111]($v);
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      __label__ = 7;
      break;
     case 6:
      $0 = $97;
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
  function _spwd_getspnam($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $name = __stackBase__;
      var $p;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str19, allocate([ $name, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$name];
      var $5 = _getspnam($4);
      $p = $5;
      
      
      if ($p == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_PyExc_KeyError];
      _PyErr_SetString($8, __str20);
      $0 = 0;
      __label__ = 5;
      break;
     case 4:
      
      var $10 = _mkspent($p);
      $0 = $10;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _spwd_getspall($self, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $d;
      var $p;
      var $v;
      $self_addr = $self;
      $args_addr = $args;
      var $1 = _PyList_New(0);
      $d = $1;
      
      
      if ($d == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 15;
      break;
     case 2:
      _setspent();
      __label__ = 13;
      break;
     case 3:
      
      var $5 = _mkspent($p);
      $v = $5;
      
      
      if ($v == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      var $10 = _PyList_Append($d, $v);
      
      var $_pr = $v;
      if ($10 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 5:
      
      if ($_pr != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      var $16 = HEAP[$v] - 1;
      
      
      HEAP[$v] = $16;
      
      
      
      
      if (HEAP[$v] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $27 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$27]($v);
      __label__ = 8;
      break;
     case 8:
      
      
      
      var $32 = HEAP[$d] - 1;
      
      
      HEAP[$d] = $32;
      
      
      
      
      if (HEAP[$d] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $43 = HEAP[HEAP[$d + 4] + 24];
      
      FUNCTION_TABLE[$43]($d);
      __label__ = 10;
      break;
     case 10:
      _endspent();
      $0 = 0;
      __label__ = 15;
      break;
     case 11:
      
      
      var $47 = HEAP[$_pr] - 1;
      
      
      HEAP[$v] = $47;
      
      
      
      
      if (HEAP[$v] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $58 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$58]($v);
      __label__ = 13;
      break;
     case 13:
      var $60 = _getspent();
      $p = $60;
      
      if ($60 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      _endspent();
      
      $0 = $d;
      __label__ = 15;
      break;
     case 15:
      
      $retval = $0;
      var $retval15 = $retval;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initspwd() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $0 = _Py_InitModule4(__str23, _spwd_methods, _spwd__doc__, 0, 1013);
      $m = $0;
      
      
      if ($m == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      if (HEAP[_initialized_b] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      _PyStructSequence_InitType(_StructSpwdType, _struct_spwd_type_desc);
      __label__ = 3;
      break;
     case 3:
      
      var $6 = HEAP[_StructSpwdType] + 1;
      HEAP[_StructSpwdType] = $6;
      
      var $8 = _PyModule_AddObject($m, __str24, _StructSpwdType);
      HEAP[_initialized_b] = 1;
      __label__ = 4;
      break;
     case 4:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initspwd"] = _initspwd;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _spwd_getspnam, 0, _spwd_getspall, 0 ]);
  function run(args) {
    _spwd__doc__ = allocate([ 84, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 112, 114, 111, 118, 105, 100, 101, 115, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 32, 85, 110, 105, 120, 32, 115, 104, 97, 100, 111, 119, 32, 112, 97, 115, 115, 119, 111, 114, 100, 32, 100, 97, 116, 97, 98, 97, 115, 101, 46, 10, 73, 116, 32, 105, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 111, 110, 32, 118, 97, 114, 105, 111, 117, 115, 32, 85, 110, 105, 120, 32, 118, 101, 114, 115, 105, 111, 110, 115, 46, 10, 10, 83, 104, 97, 100, 111, 119, 32, 112, 97, 115, 115, 119, 111, 114, 100, 32, 100, 97, 116, 97, 98, 97, 115, 101, 32, 101, 110, 116, 114, 105, 101, 115, 32, 97, 114, 101, 32, 114, 101, 112, 111, 114, 116, 101, 100, 32, 97, 115, 32, 57, 45, 116, 117, 112, 108, 101, 115, 32, 111, 102, 32, 116, 121, 112, 101, 32, 115, 116, 114, 117, 99, 116, 95, 115, 112, 119, 100, 44, 10, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 116, 104, 101, 32, 102, 111, 108, 108, 111, 119, 105, 110, 103, 32, 105, 116, 101, 109, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 112, 97, 115, 115, 119, 111, 114, 100, 32, 100, 97, 116, 97, 98, 97, 115, 101, 32, 40, 115, 101, 101, 32, 96, 60, 115, 104, 97, 100, 111, 119, 46, 104, 62, 39, 41, 58, 10, 115, 112, 95, 110, 97, 109, 112, 44, 32, 115, 112, 95, 112, 119, 100, 112, 44, 32, 115, 112, 95, 108, 115, 116, 99, 104, 103, 44, 32, 115, 112, 95, 109, 105, 110, 44, 32, 115, 112, 95, 109, 97, 120, 44, 32, 115, 112, 95, 119, 97, 114, 110, 44, 32, 115, 112, 95, 105, 110, 97, 99, 116, 44, 32, 115, 112, 95, 101, 120, 112, 105, 114, 101, 44, 32, 115, 112, 95, 102, 108, 97, 103, 46, 10, 84, 104, 101, 32, 115, 112, 95, 110, 97, 109, 112, 32, 97, 110, 100, 32, 115, 112, 95, 112, 119, 100, 112, 32, 97, 114, 101, 32, 115, 116, 114, 105, 110, 103, 115, 44, 32, 116, 104, 101, 32, 114, 101, 115, 116, 32, 97, 114, 101, 32, 105, 110, 116, 101, 103, 101, 114, 115, 46, 10, 65, 110, 32, 101, 120, 99, 101, 112, 116, 105, 111, 110, 32, 105, 115, 32, 114, 97, 105, 115, 101, 100, 32, 105, 102, 32, 116, 104, 101, 32, 101, 110, 116, 114, 121, 32, 97, 115, 107, 101, 100, 32, 102, 111, 114, 32, 99, 97, 110, 110, 111, 116, 32, 98, 101, 32, 102, 111, 117, 110, 100, 46, 10, 89, 111, 117, 32, 104, 97, 118, 101, 32, 116, 111, 32, 98, 101, 32, 114, 111, 111, 116, 32, 116, 111, 32, 98, 101, 32, 97, 98, 108, 101, 32, 116, 111, 32, 117, 115, 101, 32, 116, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 115, 112, 95, 110, 97, 109, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 108, 111, 103, 105, 110, 32, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 115, 112, 95, 112, 119, 100, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 101, 110, 99, 114, 121, 112, 116, 101, 100, 32, 112, 97, 115, 115, 119, 111, 114, 100, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 115, 112, 95, 108, 115, 116, 99, 104, 103, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 100, 97, 116, 101, 32, 111, 102, 32, 108, 97, 115, 116, 32, 99, 104, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 115, 112, 95, 109, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 109, 105, 110, 32, 35, 100, 97, 121, 115, 32, 98, 101, 116, 119, 101, 101, 110, 32, 99, 104, 97, 110, 103, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 115, 112, 95, 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 109, 97, 120, 32, 35, 100, 97, 121, 115, 32, 98, 101, 116, 119, 101, 101, 110, 32, 99, 104, 97, 110, 103, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 115, 112, 95, 119, 97, 114, 110, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 35, 100, 97, 121, 115, 32, 98, 101, 102, 111, 114, 101, 32, 112, 119, 32, 101, 120, 112, 105, 114, 101, 115, 32, 116, 111, 32, 119, 97, 114, 110, 32, 117, 115, 101, 114, 32, 97, 98, 111, 117, 116, 32, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 115, 112, 95, 105, 110, 97, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 35, 100, 97, 121, 115, 32, 97, 102, 116, 101, 114, 32, 112, 119, 32, 101, 120, 112, 105, 114, 101, 115, 32, 117, 110, 116, 105, 108, 32, 97, 99, 99, 111, 117, 110, 116, 32, 105, 115, 32, 98, 108, 111, 99, 107, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 115, 112, 95, 101, 120, 112, 105, 114, 101, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 35, 100, 97, 121, 115, 32, 115, 105, 110, 99, 101, 32, 49, 57, 55, 48, 45, 48, 49, 45, 48, 49, 32, 117, 110, 116, 105, 108, 32, 97, 99, 99, 111, 117, 110, 116, 32, 105, 115, 32, 100, 105, 115, 97, 98, 108, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 115, 112, 95, 102, 108, 97, 103, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 114, 101, 115, 101, 114, 118, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    _struct_spwd_type_fields = allocate(80, [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _struct_spwd__doc__ = allocate([ 115, 112, 119, 100, 46, 115, 116, 114, 117, 99, 116, 95, 115, 112, 119, 100, 58, 32, 82, 101, 115, 117, 108, 116, 115, 32, 102, 114, 111, 109, 32, 103, 101, 116, 115, 112, 42, 40, 41, 32, 114, 111, 117, 116, 105, 110, 101, 115, 46, 10, 10, 84, 104, 105, 115, 32, 111, 98, 106, 101, 99, 116, 32, 109, 97, 121, 32, 98, 101, 32, 97, 99, 99, 101, 115, 115, 101, 100, 32, 101, 105, 116, 104, 101, 114, 32, 97, 115, 32, 97, 32, 57, 45, 116, 117, 112, 108, 101, 32, 111, 102, 10, 32, 32, 40, 115, 112, 95, 110, 97, 109, 44, 115, 112, 95, 112, 119, 100, 44, 115, 112, 95, 108, 115, 116, 99, 104, 103, 44, 115, 112, 95, 109, 105, 110, 44, 115, 112, 95, 109, 97, 120, 44, 115, 112, 95, 119, 97, 114, 110, 44, 115, 112, 95, 105, 110, 97, 99, 116, 44, 115, 112, 95, 101, 120, 112, 105, 114, 101, 44, 115, 112, 95, 102, 108, 97, 103, 41, 10, 111, 114, 32, 118, 105, 97, 32, 116, 104, 101, 32, 111, 98, 106, 101, 99, 116, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 115, 32, 97, 115, 32, 110, 97, 109, 101, 100, 32, 105, 110, 32, 116, 104, 101, 32, 97, 98, 111, 118, 101, 32, 116, 117, 112, 108, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _struct_spwd_type_desc = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyStructSequence_Field*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str18 = allocate([ 115, 112, 119, 100, 46, 115, 116, 114, 117, 99, 116, 95, 115, 112, 119, 100, 0 ], "i8", ALLOC_NORMAL);
    _StructSpwdType = allocate(196, [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    _spwd_getspnam__doc__ = allocate([ 103, 101, 116, 115, 112, 110, 97, 109, 40, 110, 97, 109, 101, 41, 32, 45, 62, 32, 40, 115, 112, 95, 110, 97, 109, 112, 44, 32, 115, 112, 95, 112, 119, 100, 112, 44, 32, 115, 112, 95, 108, 115, 116, 99, 104, 103, 44, 32, 115, 112, 95, 109, 105, 110, 44, 32, 115, 112, 95, 109, 97, 120, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 112, 95, 119, 97, 114, 110, 44, 32, 115, 112, 95, 105, 110, 97, 99, 116, 44, 32, 115, 112, 95, 101, 120, 112, 105, 114, 101, 44, 32, 115, 112, 95, 102, 108, 97, 103, 41, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 115, 104, 97, 100, 111, 119, 32, 112, 97, 115, 115, 119, 111, 114, 100, 32, 100, 97, 116, 97, 98, 97, 115, 101, 32, 101, 110, 116, 114, 121, 32, 102, 111, 114, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 117, 115, 101, 114, 32, 110, 97, 109, 101, 46, 10, 83, 101, 101, 32, 115, 112, 119, 100, 46, 95, 95, 100, 111, 99, 95, 95, 32, 102, 111, 114, 32, 109, 111, 114, 101, 32, 111, 110, 32, 115, 104, 97, 100, 111, 119, 32, 112, 97, 115, 115, 119, 111, 114, 100, 32, 100, 97, 116, 97, 98, 97, 115, 101, 32, 101, 110, 116, 114, 105, 101, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 115, 58, 103, 101, 116, 115, 112, 110, 97, 109, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 103, 101, 116, 115, 112, 110, 97, 109, 40, 41, 58, 32, 110, 97, 109, 101, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _spwd_getspall__doc__ = allocate([ 103, 101, 116, 115, 112, 97, 108, 108, 40, 41, 32, 45, 62, 32, 108, 105, 115, 116, 95, 111, 102, 95, 101, 110, 116, 114, 105, 101, 115, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 108, 105, 115, 116, 32, 111, 102, 32, 97, 108, 108, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 115, 104, 97, 100, 111, 119, 32, 112, 97, 115, 115, 119, 111, 114, 100, 32, 100, 97, 116, 97, 98, 97, 115, 101, 32, 101, 110, 116, 114, 105, 101, 115, 44, 32, 105, 110, 32, 97, 114, 98, 105, 116, 114, 97, 114, 121, 32, 111, 114, 100, 101, 114, 46, 10, 83, 101, 101, 32, 115, 112, 119, 100, 46, 95, 95, 100, 111, 99, 95, 95, 32, 102, 111, 114, 32, 109, 111, 114, 101, 32, 111, 110, 32, 115, 104, 97, 100, 111, 119, 32, 112, 97, 115, 115, 119, 111, 114, 100, 32, 100, 97, 116, 97, 98, 97, 115, 101, 32, 101, 110, 116, 114, 105, 101, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 103, 101, 116, 115, 112, 110, 97, 109, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 103, 101, 116, 115, 112, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    _spwd_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str23 = allocate([ 115, 112, 119, 100, 0 ], "i8", ALLOC_NORMAL);
    _initialized_b = allocate(1, "i1", ALLOC_NORMAL);
    __str24 = allocate([ 115, 116, 114, 117, 99, 116, 95, 115, 112, 119, 100, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_struct_spwd_type_fields] = __str;
    HEAP[_struct_spwd_type_fields + 4] = __str1;
    HEAP[_struct_spwd_type_fields + 8] = __str2;
    HEAP[_struct_spwd_type_fields + 12] = __str3;
    HEAP[_struct_spwd_type_fields + 16] = __str4;
    HEAP[_struct_spwd_type_fields + 20] = __str5;
    HEAP[_struct_spwd_type_fields + 24] = __str6;
    HEAP[_struct_spwd_type_fields + 28] = __str7;
    HEAP[_struct_spwd_type_fields + 32] = __str8;
    HEAP[_struct_spwd_type_fields + 36] = __str9;
    HEAP[_struct_spwd_type_fields + 40] = __str10;
    HEAP[_struct_spwd_type_fields + 44] = __str11;
    HEAP[_struct_spwd_type_fields + 48] = __str12;
    HEAP[_struct_spwd_type_fields + 52] = __str13;
    HEAP[_struct_spwd_type_fields + 56] = __str14;
    HEAP[_struct_spwd_type_fields + 60] = __str15;
    HEAP[_struct_spwd_type_fields + 64] = __str16;
    HEAP[_struct_spwd_type_fields + 68] = __str17;
    HEAP[_struct_spwd_type_desc] = __str18;
    HEAP[_struct_spwd_type_desc + 4] = _struct_spwd__doc__;
    HEAP[_struct_spwd_type_desc + 8] = _struct_spwd_type_fields;
    HEAP[_spwd_methods] = __str21;
    HEAP[_spwd_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_spwd_methods + 12] = _spwd_getspnam__doc__;
    HEAP[_spwd_methods + 16] = __str22;
    HEAP[_spwd_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_spwd_methods + 28] = _spwd_getspall__doc__;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
