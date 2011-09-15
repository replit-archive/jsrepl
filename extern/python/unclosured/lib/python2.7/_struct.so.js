"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 380;
  var $1___SIZE = 20;
  var $2___SIZE = 20;
  var $3___SIZE = 360;
  var $4___SIZE = 80;
  var $5___SIZE = 16;
  var $6___SIZE = 60;
  var $7___SIZE = 20;
  var $8___SIZE = 196;
  var $9___SIZE = 112;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyLongObject___SIZE = 0;
  var $struct_PyLongObject___FLATTENER = [];
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyStructObject___SIZE = 28;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_formatcode___SIZE = 12;
  var $struct_formatdef___SIZE = 20;
  var __str;
  var __str1;
  var __str2;
  var ___PRETTY_FUNCTION___8419;
  var __str3;
  var __str4;
  var __str5;
  var _StructError;
  var __str6;
  var __str7;
  var __str8;
  var __str9;
  var ___PRETTY_FUNCTION___8543;
  var ___PRETTY_FUNCTION___8572;
  var ___PRETTY_FUNCTION___8601;
  var ___PRETTY_FUNCTION___8630;
  var __str10;
  var ___PRETTY_FUNCTION___8689;
  var __str11;
  var __str12;
  var __str13;
  var __str14;
  var __str15;
  var __str16;
  var __str17;
  var __str18;
  var ___PRETTY_FUNCTION___9097;
  var _native_table;
  var _bigendian_table;
  var _lilendian_table;
  var __str19;
  var __str20;
  var __str21;
  var ___PRETTY_FUNCTION___9830;
  var __str22;
  var ___PRETTY_FUNCTION___9853;
  var __str23;
  var _kwlist_9852;
  var __str24;
  var _s_unpack__doc__;
  var ___PRETTY_FUNCTION___9973;
  var __str25;
  var __str26;
  var __str27;
  var _s_unpack_from__doc__;
  var ___PRETTY_FUNCTION___10041;
  var __str28;
  var _kwlist_10035;
  var __str29;
  var __str30;
  var __str31;
  var __str32;
  var __str33;
  var __str34;
  var __str35;
  var _s_pack__doc__;
  var ___PRETTY_FUNCTION___10174;
  var __str36;
  var _s_pack_into__doc__;
  var ___PRETTY_FUNCTION___10219;
  var __str37;
  var __str38;
  var __str39;
  var __str40;
  var __str41;
  var __str42;
  var __str43;
  var _s_methods;
  var _s__doc__;
  var __str44;
  var __str45;
  var __str46;
  var _s_getsetlist;
  var __str47;
  var _PyStructType;
  var _cache;
  var _clearcache_doc;
  var _calcsize_doc;
  var _pack_doc;
  var __str48;
  var _pack_into_doc;
  var _unpack_doc;
  var _unpack_from_doc;
  var __str49;
  var __str50;
  var _module_functions;
  var _module_doc;
  var __str51;
  var __str52;
  var __str53;
  var __str54;
  var __str55;
  var __str56;
  var __str57;
  function _get_pylong($v) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $v_addr;
      var $retval;
      var $0;
      var $r;
      var $w;
      var $converted;
      var $m;
      $v_addr = $v;
      $converted = 0;
      
      
      if ($v_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str1, __str2, 112, ___PRETTY_FUNCTION___8419);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v_addr + 4] + 84] & 8388608) != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v_addr + 4] + 84] & 16777216) != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      $m = HEAP[HEAP[$v_addr + 4] + 48];
      
      
      
      
      
      
      if (HEAP[HEAP[$v_addr + 4] + 48] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v_addr + 4] + 84] & 131072) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$v_addr + 4] + 48] + 152] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      
      var $44 = _PyNumber_Index($v_addr);
      $w = $44;
      
      
      if ($w != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      $v_addr = $w;
      $converted = 1;
      __label__ = 30;
      break;
     case 9:
      var $48 = HEAP[_PyExc_TypeError];
      var $49 = _PyErr_ExceptionMatches($48);
      
      if ($49 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      _PyErr_Clear();
      __label__ = 12;
      break;
     case 11:
      $0 = 0;
      __label__ = 42;
      break;
     case 12:
      
      
      if ($converted == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 13:
      
      
      if ($m != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 14:
      
      
      
      
      if (HEAP[$m + 72] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 15:
      
      
      
      
      if (HEAP[$v_addr + 4] == _PyFloat_Type) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      var $64 = HEAP[$v_addr + 4];
      var $65 = _PyType_IsSubtype($64, _PyFloat_Type);
      
      if ($65 != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      var $67 = HEAP[_PyExc_DeprecationWarning];
      var $68 = _PyErr_WarnEx($67, __str3, 1);
      
      if ($68 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      $0 = 0;
      __label__ = 42;
      break;
     case 19:
      var $70 = HEAP[_PyExc_DeprecationWarning];
      var $71 = _PyErr_WarnEx($70, __str4, 1);
      
      if ($71 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      $0 = 0;
      __label__ = 42;
      break;
     case 21:
      
      
      var $75 = HEAP[$m + 72];
      
      var $77 = FUNCTION_TABLE[$75]($v_addr);
      $v_addr = $77;
      
      if ($77 == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      $0 = 0;
      __label__ = 42;
      break;
     case 23:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v_addr + 4] + 84] & 8388608) == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 24:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v_addr + 4] + 84] & 16777216) == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $93 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($93, __str5);
      $0 = 0;
      __label__ = 42;
      break;
     case 26:
      $converted = 1;
      __label__ = 30;
      break;
     case 27:
      
      
      if ($converted == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      var $95 = HEAP[_StructError];
      _PyErr_SetString($95, __str6);
      $0 = 0;
      __label__ = 42;
      break;
     case 29:
      
      
      
      var $99 = HEAP[$v_addr] + 1;
      
      
      HEAP[$v_addr] = $99;
      __label__ = 30;
      break;
     case 30:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v_addr + 4] + 84] & 8388608) == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 31:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v_addr + 4] + 84] & 16777216) == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      ___assert_fail(__str7, __str2, 172, ___PRETTY_FUNCTION___8419);
      throw "Reached an unreachable!";
     case 33:
      
      
      
      
      
      
      
      var $123 = $v_addr;
      if ((HEAP[HEAP[$v_addr + 4] + 84] & 8388608) != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 34:
      
      
      var $126 = HEAP[$123 + 8];
      var $127 = _PyLong_FromLong($126);
      $r = $127;
      
      
      
      var $131 = HEAP[$v_addr] - 1;
      
      
      HEAP[$v_addr] = $131;
      
      
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 35:
      
      
      
      
      var $142 = HEAP[HEAP[$v_addr + 4] + 24];
      
      FUNCTION_TABLE[$142]($v_addr);
      __label__ = 41;
      break;
     case 36:
      
      
      
      
      
      
      if ((HEAP[HEAP[$123 + 4] + 84] & 16777216) != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 37:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v_addr + 4] + 84] & 16777216) == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      ___assert_fail(__str8, __str2, 178, ___PRETTY_FUNCTION___8419);
      throw "Reached an unreachable!";
     case 39:
      
      $r = $v_addr;
      __label__ = 41;
      break;
     case 40:
      $r = 0;
      ___assert_fail(__str9, __str2, 184, ___PRETTY_FUNCTION___8419);
      throw "Reached an unreachable!";
     case 41:
      
      $0 = $r;
      __label__ = 42;
      break;
     case 42:
      
      $retval = $0;
      var $retval45 = $retval;
      return $retval45;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _get_long($v, $p) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $v_addr;
      var $p_addr;
      var $retval;
      var $0;
      var $x;
      $v_addr = $v;
      $p_addr = $p;
      
      var $2 = _get_pylong($v_addr);
      $v_addr = $2;
      
      
      if ($v_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 10;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v_addr + 4] + 84] & 16777216) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str8, __str2, 202, ___PRETTY_FUNCTION___8543);
      throw "Reached an unreachable!";
     case 4:
      
      var $13 = _PyLong_AsLong($v_addr);
      $x = $13;
      
      
      
      var $17 = HEAP[$v_addr] - 1;
      
      
      HEAP[$v_addr] = $17;
      
      
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $28 = HEAP[HEAP[$v_addr + 4] + 24];
      
      FUNCTION_TABLE[$28]($v_addr);
      __label__ = 6;
      break;
     case 6:
      
      var $31 = $x == -1;
      if ($31) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $32 = _PyErr_Occurred();
      
      if ($32 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = -1;
      __label__ = 10;
      break;
     case 9:
      
      
      HEAP[$p_addr] = $x;
      $0 = 0;
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
  function _get_ulong($v, $p) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $v_addr;
      var $p_addr;
      var $retval;
      var $0;
      var $x;
      $v_addr = $v;
      $p_addr = $p;
      
      var $2 = _get_pylong($v_addr);
      $v_addr = $2;
      
      
      if ($v_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 10;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v_addr + 4] + 84] & 16777216) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str8, __str2, 221, ___PRETTY_FUNCTION___8572);
      throw "Reached an unreachable!";
     case 4:
      
      var $13 = _PyLong_AsUnsignedLong($v_addr);
      $x = $13;
      
      
      
      var $17 = HEAP[$v_addr] - 1;
      
      
      HEAP[$v_addr] = $17;
      
      
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $28 = HEAP[HEAP[$v_addr + 4] + 24];
      
      FUNCTION_TABLE[$28]($v_addr);
      __label__ = 6;
      break;
     case 6:
      
      var $31 = $x == -1;
      if ($31) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $32 = _PyErr_Occurred();
      
      if ($32 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = -1;
      __label__ = 10;
      break;
     case 9:
      
      
      HEAP[$p_addr] = $x;
      $0 = 0;
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
  function _get_longlong($v, $p) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $v_addr;
      var $p_addr;
      var $retval;
      var $0;
      var $x;
      $v_addr = $v;
      $p_addr = $p;
      
      var $2 = _get_pylong($v_addr);
      $v_addr = $2;
      
      
      if ($v_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 10;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v_addr + 4] + 84] & 16777216) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str8, __str2, 242, ___PRETTY_FUNCTION___8601);
      throw "Reached an unreachable!";
     case 4:
      
      var $13 = _PyLong_AsLongLong($v_addr);
      $x = $13;
      
      
      
      var $17 = HEAP[$v_addr] - 1;
      
      
      HEAP[$v_addr] = $17;
      
      
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $28 = HEAP[HEAP[$v_addr + 4] + 24];
      
      FUNCTION_TABLE[$28]($v_addr);
      __label__ = 6;
      break;
     case 6:
      
      var $31 = $x == -1;
      if ($31) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $32 = _PyErr_Occurred();
      
      if ($32 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = -1;
      __label__ = 10;
      break;
     case 9:
      
      
      HEAP[$p_addr] = $x;
      $0 = 0;
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
  function _get_ulonglong($v, $p) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $v_addr;
      var $p_addr;
      var $retval;
      var $0;
      var $x;
      $v_addr = $v;
      $p_addr = $p;
      
      var $2 = _get_pylong($v_addr);
      $v_addr = $2;
      
      
      if ($v_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 10;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v_addr + 4] + 84] & 16777216) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str8, __str2, 261, ___PRETTY_FUNCTION___8630);
      throw "Reached an unreachable!";
     case 4:
      
      var $13 = _PyLong_AsUnsignedLongLong($v_addr);
      $x = $13;
      
      
      
      var $17 = HEAP[$v_addr] - 1;
      
      
      HEAP[$v_addr] = $17;
      
      
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $28 = HEAP[HEAP[$v_addr + 4] + 24];
      
      FUNCTION_TABLE[$28]($v_addr);
      __label__ = 6;
      break;
     case 6:
      
      var $31 = $x == -1;
      if ($31) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $32 = _PyErr_Occurred();
      
      if ($32 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = -1;
      __label__ = 10;
      break;
     case 9:
      
      
      HEAP[$p_addr] = $x;
      $0 = 0;
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
  function _unpack_float($p, $le) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $le_addr;
      var $retval;
      var $0;
      var $x;
      $p_addr = $p;
      $le_addr = $le;
      
      
      var $3 = __PyFloat_Unpack4($p_addr, $le_addr);
      $x = $3;
      
      var $5 = $x == -1;
      if ($5) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $6 = _PyErr_Occurred();
      
      if ($6 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 4;
      break;
     case 3:
      
      var $9 = _PyFloat_FromDouble($x);
      $0 = $9;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _unpack_double($p, $le) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $le_addr;
      var $retval;
      var $0;
      var $x;
      $p_addr = $p;
      $le_addr = $le;
      
      
      var $3 = __PyFloat_Unpack8($p_addr, $le_addr);
      $x = $3;
      
      var $5 = $x == -1;
      if ($5) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $6 = _PyErr_Occurred();
      
      if ($6 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 4;
      break;
     case 3:
      
      var $9 = _PyFloat_FromDouble($x);
      $0 = $9;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __range_error($f, $is_unsigned) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $f_addr;
      var $is_unsigned_addr;
      var $retval;
      var $0;
      var $ulargest;
      var $largest;
      $f_addr = $f;
      $is_unsigned_addr = $is_unsigned;
      
      
      
      
      
      
      $ulargest = 4294967295 >>> (4 - HEAP[$f_addr + 4]) * 8;
      
      
      
      
      if (HEAP[$f_addr + 4] <= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$f_addr + 4] > 4) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str10, __str2, 311, ___PRETTY_FUNCTION___8689);
      throw "Reached an unreachable!";
     case 3:
      
      
      if ($is_unsigned_addr != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      var $20 = HEAP[$f_addr];
      var $21 = HEAP[_StructError];
      
      var $23 = _PyErr_Format($21, __str11, allocate([ $20, 0, 0, 0, $ulargest, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 6;
      break;
     case 5:
      
      
      $largest = $ulargest >>> 1;
      
      var $not = $largest ^ -1;
      
      
      
      var $30 = HEAP[$f_addr];
      var $31 = HEAP[_StructError];
      
      var $33 = _PyErr_Format($31, __str12, allocate([ $30, 0, 0, 0, $not, 0, 0, 0, $largest, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 6;
      break;
     case 6:
      $0 = -1;
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nu_char($p, $f) {
    
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    $p_addr = $p;
    $f_addr = $f;
    
    var $2 = _PyString_FromStringAndSize($p_addr, 1);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _nu_byte($p, $f) {
    
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    $p_addr = $p;
    $f_addr = $f;
    
    
    var $3 = HEAP[$p_addr];
    var $4 = _PyInt_FromLong($3);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _nu_ubyte($p, $f) {
    
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    $p_addr = $p;
    $f_addr = $f;
    
    
    var $3 = HEAP[$p_addr];
    var $4 = _PyInt_FromLong($3);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _nu_short($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 2;
    _memset(__stackBase__, 0, 2);
    
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    var $x = __stackBase__;
    $p_addr = $p;
    $f_addr = $f;
    
    var $x1 = $x;
    _llvm_memcpy_p0i8_p0i8_i32($x1, $p_addr, 2, 1, 0);
    
    var $3 = HEAP[$x];
    var $4 = _PyInt_FromLong($3);
    $0 = $4;
    
    $retval = $0;
    var $retval2 = $retval;
    STACKTOP = __stackBase__;
    return $retval2;
  }
  function _nu_ushort($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 2;
    _memset(__stackBase__, 0, 2);
    
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    var $x = __stackBase__;
    $p_addr = $p;
    $f_addr = $f;
    
    var $x1 = $x;
    _llvm_memcpy_p0i8_p0i8_i32($x1, $p_addr, 2, 1, 0);
    
    var $3 = HEAP[$x];
    var $4 = _PyInt_FromLong($3);
    $0 = $4;
    
    $retval = $0;
    var $retval2 = $retval;
    STACKTOP = __stackBase__;
    return $retval2;
  }
  function _nu_int($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    var $x = __stackBase__;
    $p_addr = $p;
    $f_addr = $f;
    
    var $x1 = $x;
    _llvm_memcpy_p0i8_p0i8_i32($x1, $p_addr, 4, 1, 0);
    var $2 = HEAP[$x];
    var $3 = _PyInt_FromLong($2);
    $0 = $3;
    
    $retval = $0;
    var $retval2 = $retval;
    STACKTOP = __stackBase__;
    return $retval2;
  }
  function _nu_uint($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $p_addr = $p;
      $f_addr = $f;
      
      var $x1 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($x1, $p_addr, 4, 1, 0);
      
      
      var $4 = HEAP[$x];
      if (HEAP[$x] >= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = _PyInt_FromLong($4);
      $0 = $5;
      __label__ = 3;
      break;
     case 2:
      var $6 = _PyLong_FromUnsignedLong($4);
      $0 = $6;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval4 = $retval;
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nu_long($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    var $x = __stackBase__;
    $p_addr = $p;
    $f_addr = $f;
    
    var $x1 = $x;
    _llvm_memcpy_p0i8_p0i8_i32($x1, $p_addr, 4, 1, 0);
    var $2 = HEAP[$x];
    var $3 = _PyInt_FromLong($2);
    $0 = $3;
    
    $retval = $0;
    var $retval2 = $retval;
    STACKTOP = __stackBase__;
    return $retval2;
  }
  function _nu_ulong($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $p_addr = $p;
      $f_addr = $f;
      
      var $x1 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($x1, $p_addr, 4, 1, 0);
      
      
      var $4 = HEAP[$x];
      if (HEAP[$x] >= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = _PyInt_FromLong($4);
      $0 = $5;
      __label__ = 3;
      break;
     case 2:
      var $6 = _PyLong_FromUnsignedLong($4);
      $0 = $6;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval4 = $retval;
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nu_longlong($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $p_addr = $p;
      $f_addr = $f;
      
      var $x1 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($x1, $p_addr, 8, 1, 0);
      
      var $3 = HEAP[$x] >= -2147483648;
      
      
      
      var $6 = HEAP[$x];
      if ($3 & HEAP[$x] <= 2147483647) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = $6 & 4294967295;
      var $8 = _PyInt_FromLong($7);
      $0 = $8;
      __label__ = 3;
      break;
     case 2:
      var $9 = _PyLong_FromLongLong($6);
      $0 = $9;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nu_ulonglong($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $p_addr = $p;
      $f_addr = $f;
      
      var $x1 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($x1, $p_addr, 8, 1, 0);
      
      
      var $4 = HEAP[$x];
      if (HEAP[$x] <= 2147483647) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = $4 & 4294967295;
      var $6 = _PyInt_FromLong($5);
      $0 = $6;
      __label__ = 3;
      break;
     case 2:
      var $7 = _PyLong_FromUnsignedLongLong($4);
      $0 = $7;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval4 = $retval;
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nu_bool($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1;
    _memset(__stackBase__, 0, 1);
    
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    var $x = __stackBase__;
    $p_addr = $p;
    $f_addr = $f;
    
    _llvm_memcpy_p0i8_p0i8_i32($x, $p_addr, 1, 1, 0);
    
    var $3 = HEAP[$x];
    var $4 = _PyBool_FromLong($3);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    STACKTOP = __stackBase__;
    return $retval1;
  }
  function _nu_float($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    var $x = __stackBase__;
    $p_addr = $p;
    $f_addr = $f;
    
    var $x1 = $x;
    _llvm_memcpy_p0i8_p0i8_i32($x1, $p_addr, 4, 1, 0);
    
    var $3 = HEAP[$x];
    var $4 = _PyFloat_FromDouble($3);
    $0 = $4;
    
    $retval = $0;
    var $retval2 = $retval;
    STACKTOP = __stackBase__;
    return $retval2;
  }
  function _nu_double($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    var $x = __stackBase__;
    $p_addr = $p;
    $f_addr = $f;
    
    var $x1 = $x;
    _llvm_memcpy_p0i8_p0i8_i32($x1, $p_addr, 8, 1, 0);
    var $2 = HEAP[$x];
    var $3 = _PyFloat_FromDouble($2);
    $0 = $3;
    
    $retval = $0;
    var $retval2 = $retval;
    STACKTOP = __stackBase__;
    return $retval2;
  }
  function _nu_void_p($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    var $x = __stackBase__;
    $p_addr = $p;
    $f_addr = $f;
    
    var $x1 = $x;
    _llvm_memcpy_p0i8_p0i8_i32($x1, $p_addr, 4, 1, 0);
    var $2 = HEAP[$x];
    var $3 = _PyLong_FromVoidPtr($2);
    $0 = $3;
    
    $retval = $0;
    var $retval2 = $retval;
    STACKTOP = __stackBase__;
    return $retval2;
  }
  function _np_byte($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _get_long($v_addr, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 5;
      break;
     case 2:
      
      var $5 = HEAP[$x] < -128;
      
      
      
      if ($5 | HEAP[$x] > 127) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_StructError];
      _PyErr_SetString($8, __str13);
      $0 = -1;
      __label__ = 5;
      break;
     case 4:
      
      var $10 = HEAP[$x] & 255;
      
      HEAP[$p_addr] = $10;
      $0 = 0;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval6 = $retval;
      STACKTOP = __stackBase__;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_ubyte($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _get_long($v_addr, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 5;
      break;
     case 2:
      
      
      
      
      
      if (HEAP[$x] < 0 | HEAP[$x] > 255) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_StructError];
      _PyErr_SetString($8, __str14);
      $0 = -1;
      __label__ = 5;
      break;
     case 4:
      
      var $10 = HEAP[$x] & 255;
      
      HEAP[$p_addr] = $10;
      $0 = 0;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval6 = $retval;
      STACKTOP = __stackBase__;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_char($p, $v, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v_addr + 4] + 84] & 134217728) == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $9 = _PyString_Size($v_addr);
      
      if ($9 != 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $11 = HEAP[_StructError];
      _PyErr_SetString($11, __str15);
      $0 = -1;
      __label__ = 4;
      break;
     case 3:
      
      var $13 = _PyString_AsString($v_addr);
      var $14 = HEAP[$13];
      
      HEAP[$p_addr] = $14;
      $0 = 0;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_short($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 6;
    _memset(__stackBase__, 0, 6);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      var $y = __stackBase__ + 4;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _get_long($v_addr, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 5;
      break;
     case 2:
      
      var $5 = HEAP[$x] < -32768;
      
      
      
      if ($5 | HEAP[$x] > 32767) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_StructError];
      _PyErr_SetString($8, __str16);
      $0 = -1;
      __label__ = 5;
      break;
     case 4:
      
      var $10 = HEAP[$x] & 65535;
      HEAP[$y] = $10;
      
      var $y5 = $y;
      _llvm_memcpy_p0i8_p0i8_i32($p_addr, $y5, 2, 1, 0);
      $0 = 0;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval7 = $retval;
      STACKTOP = __stackBase__;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_ushort($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 6;
    _memset(__stackBase__, 0, 6);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      var $y = __stackBase__ + 4;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _get_long($v_addr, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 5;
      break;
     case 2:
      
      
      
      
      
      if (HEAP[$x] < 0 | HEAP[$x] > 65535) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_StructError];
      _PyErr_SetString($8, __str17);
      $0 = -1;
      __label__ = 5;
      break;
     case 4:
      
      var $10 = HEAP[$x] & 65535;
      HEAP[$y] = $10;
      
      var $y5 = $y;
      _llvm_memcpy_p0i8_p0i8_i32($p_addr, $y5, 2, 1, 0);
      $0 = 0;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval7 = $retval;
      STACKTOP = __stackBase__;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_int($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      var $y = __stackBase__ + 4;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _get_long($v_addr, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
      var $4 = HEAP[$x];
      HEAP[$y] = $4;
      
      var $y2 = $y;
      _llvm_memcpy_p0i8_p0i8_i32($p_addr, $y2, 4, 1, 0);
      $0 = 0;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval4 = $retval;
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_uint($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      var $y = __stackBase__ + 4;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _get_ulong($v_addr, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
      var $4 = HEAP[$x];
      HEAP[$y] = $4;
      
      var $y2 = $y;
      _llvm_memcpy_p0i8_p0i8_i32($p_addr, $y2, 4, 1, 0);
      $0 = 0;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval4 = $retval;
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_long($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _get_long($v_addr, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
      
      var $x2 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($p_addr, $x2, 4, 1, 0);
      $0 = 0;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval4 = $retval;
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_ulong($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _get_ulong($v_addr, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
      
      var $x2 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($p_addr, $x2, 4, 1, 0);
      $0 = 0;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval4 = $retval;
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_longlong($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _get_longlong($v_addr, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
      
      var $x2 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($p_addr, $x2, 8, 1, 0);
      $0 = 0;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval4 = $retval;
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_ulonglong($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _get_ulonglong($v_addr, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
      
      var $x2 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($p_addr, $x2, 8, 1, 0);
      $0 = 0;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval4 = $retval;
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_bool($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1;
    _memset(__stackBase__, 0, 1);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $y;
      var $x = __stackBase__;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _PyObject_IsTrue($v_addr);
      $y = $2;
      
      
      if ($y < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
      
      
      
      HEAP[$x] = $y != 0;
      
      _llvm_memcpy_p0i8_p0i8_i32($p_addr, $x, 1, 1, 0);
      $0 = 0;
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
  function _np_float($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _PyFloat_AsDouble($v_addr);
      
      HEAP[$x] = $2;
      
      var $5 = HEAP[$x] == -1;
      if ($5) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $6 = _PyErr_Occurred();
      
      if ($6 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $8 = HEAP[_StructError];
      _PyErr_SetString($8, __str18);
      $0 = -1;
      __label__ = 4;
      break;
     case 3:
      
      var $x3 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($p_addr, $x3, 4, 1, 0);
      $0 = 0;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_double($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _PyFloat_AsDouble($v_addr);
      HEAP[$x] = $2;
      
      var $4 = HEAP[$x] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $7 = HEAP[_StructError];
      _PyErr_SetString($7, __str18);
      $0 = -1;
      __label__ = 4;
      break;
     case 3:
      
      var $x3 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($p_addr, $x3, 8, 1, 0);
      $0 = 0;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _np_void_p($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _get_pylong($v_addr);
      $v_addr = $2;
      
      
      if ($v_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 10;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v_addr + 4] + 84] & 16777216) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str8, __str2, 683, ___PRETTY_FUNCTION___9097);
      throw "Reached an unreachable!";
     case 4:
      
      var $13 = _PyLong_AsVoidPtr($v_addr);
      HEAP[$x] = $13;
      
      
      
      var $17 = HEAP[$v_addr] - 1;
      
      
      HEAP[$v_addr] = $17;
      
      
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $28 = HEAP[HEAP[$v_addr + 4] + 24];
      
      FUNCTION_TABLE[$28]($v_addr);
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$x] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $32 = _PyErr_Occurred();
      
      if ($32 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = -1;
      __label__ = 10;
      break;
     case 9:
      
      var $x9 = $x;
      _llvm_memcpy_p0i8_p0i8_i32($p_addr, $x9, 4, 1, 0);
      $0 = 0;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval11 = $retval;
      STACKTOP = __stackBase__;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _bu_int($p, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x;
      var $i;
      var $bytes;
      $p_addr = $p;
      $f_addr = $f;
      $x = 0;
      
      
      
      $i = HEAP[$f_addr + 4];
      
      $bytes = $p_addr;
      __label__ = 1;
      break;
     case 1:
      
      
      
      
      
      var $10 = HEAP[$bytes] | $x << 8;
      $x = $10;
      
      var $12 = $bytes + 1;
      $bytes = $12;
      
      var $14 = $i - 1;
      $i = $14;
      
      if ($14 > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$f_addr + 4] <= 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      
      var $30 = 0 - (1 << HEAP[$f_addr + 4] * 8 - 1 & $x) | $x;
      $x = $30;
      __label__ = 4;
      break;
     case 4:
      
      var $32 = _PyInt_FromLong($x);
      $0 = $32;
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _bu_uint($p, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x;
      var $i;
      var $bytes;
      $p_addr = $p;
      $f_addr = $f;
      $x = 0;
      
      
      
      $i = HEAP[$f_addr + 4];
      
      $bytes = $p_addr;
      __label__ = 1;
      break;
     case 1:
      
      
      
      
      
      var $10 = HEAP[$bytes] | $x << 8;
      $x = $10;
      
      var $12 = $bytes + 1;
      $bytes = $12;
      
      var $14 = $i - 1;
      $i = $14;
      
      if ($14 > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $18 = $x;
      if ($x >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $19 = _PyInt_FromLong($18);
      $0 = $19;
      __label__ = 5;
      break;
     case 4:
      var $20 = _PyLong_FromUnsignedLong($18);
      $0 = $20;
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
  function _bu_longlong($p, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x;
      var $i;
      var $bytes;
      $p_addr = $p;
      $f_addr = $f;
      $x = 0;
      
      
      
      $i = HEAP[$f_addr + 4];
      
      $bytes = $p_addr;
      __label__ = 1;
      break;
     case 1:
      
      var $6 = $x * Math.pow(2, 8);
      
      
      var $9 = HEAP[$bytes];
      var $10 = Runtime.or64($9, $6);
      $x = $10;
      
      var $12 = $bytes + 1;
      $bytes = $12;
      
      var $14 = $i - 1;
      $i = $14;
      
      if ($14 > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$f_addr + 4] <= 7) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      var $_cast = HEAP[$f_addr + 4] * 8 - 1;
      var $25 = 1 * Math.pow(2, $_cast);
      
      var $27 = Runtime.and64($25, $x);
      var $28 = 0 - $27;
      
      var $30 = Runtime.or64($28, $x);
      $x = $30;
      __label__ = 4;
      break;
     case 4:
      
      var $32 = $x >= -2147483648;
      
      
      
      var $35 = $x;
      if ($32 & $x <= 2147483647) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $37 = _PyInt_FromLong($35 & 4294967295);
      $0 = $37;
      __label__ = 7;
      break;
     case 6:
      var $38 = _PyLong_FromLongLong($35);
      $0 = $38;
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
  function _bu_ulonglong($p, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x;
      var $i;
      var $bytes;
      $p_addr = $p;
      $f_addr = $f;
      $x = 0;
      
      
      
      $i = HEAP[$f_addr + 4];
      
      $bytes = $p_addr;
      __label__ = 1;
      break;
     case 1:
      
      var $6 = $x * Math.pow(2, 8);
      
      
      var $9 = HEAP[$bytes];
      var $10 = Runtime.or64($9, $6);
      $x = $10;
      
      var $12 = $bytes + 1;
      $bytes = $12;
      
      var $14 = $i - 1;
      $i = $14;
      
      if ($14 > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $18 = $x;
      if ($x <= 2147483647) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $20 = _PyInt_FromLong($18 & 4294967295);
      $0 = $20;
      __label__ = 5;
      break;
     case 4:
      var $21 = _PyLong_FromUnsignedLongLong($18);
      $0 = $21;
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
  function _bu_float($p, $f) {
    
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    $p_addr = $p;
    $f_addr = $f;
    
    var $2 = _unpack_float($p_addr, 0);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _bu_double($p, $f) {
    
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    $p_addr = $p;
    $f_addr = $f;
    
    var $2 = _unpack_double($p_addr, 0);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _bu_bool($p, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1;
    _memset(__stackBase__, 0, 1);
    
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    var $x = __stackBase__;
    $p_addr = $p;
    $f_addr = $f;
    
    _llvm_memcpy_p0i8_p0i8_i32($x, $p_addr, 1, 1, 0);
    
    
    var $4 = HEAP[$x] != 0;
    var $5 = _PyBool_FromLong($4);
    $0 = $5;
    
    $retval = $0;
    var $retval1 = $retval;
    STACKTOP = __stackBase__;
    return $retval1;
  }
  function _bp_int($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      var $i;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _get_long($v_addr, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 7;
      break;
     case 2:
      
      
      
      $i = HEAP[$f_addr + 4];
      
      
      
      
      
      if ($i != 4 & $i == 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      var $12 = HEAP[$x] < -32768;
      
      
      
      if ($12 | HEAP[$x] > 32767) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $16 = __range_error($f_addr, 0);
      $0 = $16;
      __label__ = 7;
      break;
     case 5:
      
      var $18 = $i - 1;
      $i = $18;
      
      var $20 = HEAP[$x] & 255;
      
      
      
      HEAP[$p_addr + $i] = $20;
      
      var $25 = HEAP[$x] >> 8;
      HEAP[$x] = $25;
      
      
      if ($i > 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval9 = $retval;
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _bp_uint($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      var $i;
      var $maxint;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _get_ulong($v_addr, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 7;
      break;
     case 2:
      
      
      
      $i = HEAP[$f_addr + 4];
      
      
      if ($i != 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      $maxint = 1;
      
      
      
      var $12 = $maxint << $i * 8;
      $maxint = $12;
      
      
      
      if (HEAP[$x] >= $maxint) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $17 = __range_error($f_addr, 1);
      $0 = $17;
      __label__ = 7;
      break;
     case 5:
      
      var $19 = $i - 1;
      $i = $19;
      
      var $21 = HEAP[$x] & 255;
      
      
      
      HEAP[$p_addr + $i] = $21;
      
      var $26 = HEAP[$x] >>> 8;
      HEAP[$x] = $26;
      
      
      if ($i > 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      $0 = 0;
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
  function _bp_longlong($p, $v, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $res;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _get_pylong($v_addr);
      $v_addr = $2;
      
      
      if ($v_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 5;
      break;
     case 2:
      
      
      
      var $8 = __PyLong_AsByteArray($v_addr, $p_addr, 8, 0, 1);
      $res = $8;
      
      
      
      var $12 = HEAP[$v_addr] - 1;
      
      
      HEAP[$v_addr] = $12;
      
      
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $23 = HEAP[HEAP[$v_addr + 4] + 24];
      
      FUNCTION_TABLE[$23]($v_addr);
      __label__ = 4;
      break;
     case 4:
      
      $0 = $res;
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
  function _bp_ulonglong($p, $v, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $res;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _get_pylong($v_addr);
      $v_addr = $2;
      
      
      if ($v_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 5;
      break;
     case 2:
      
      
      
      var $8 = __PyLong_AsByteArray($v_addr, $p_addr, 8, 0, 0);
      $res = $8;
      
      
      
      var $12 = HEAP[$v_addr] - 1;
      
      
      HEAP[$v_addr] = $12;
      
      
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $23 = HEAP[HEAP[$v_addr + 4] + 24];
      
      FUNCTION_TABLE[$23]($v_addr);
      __label__ = 4;
      break;
     case 4:
      
      $0 = $res;
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
  function _bp_float($p, $v, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _PyFloat_AsDouble($v_addr);
      $x = $2;
      
      var $4 = $x == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $7 = HEAP[_StructError];
      _PyErr_SetString($7, __str18);
      $0 = -1;
      __label__ = 4;
      break;
     case 3:
      
      
      var $10 = __PyFloat_Pack4($x, $p_addr, 0);
      $0 = $10;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _bp_double($p, $v, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _PyFloat_AsDouble($v_addr);
      $x = $2;
      
      var $4 = $x == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $7 = HEAP[_StructError];
      _PyErr_SetString($7, __str18);
      $0 = -1;
      __label__ = 4;
      break;
     case 3:
      
      
      var $10 = __PyFloat_Pack8($x, $p_addr, 0);
      $0 = $10;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _bp_bool($p, $v, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $y;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _PyObject_IsTrue($v_addr);
      $y = $2;
      
      
      if ($y < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
      
      
      
      HEAP[$p_addr] = $y & 255;
      $0 = 0;
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
  function _lu_int($p, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x;
      var $i;
      var $bytes;
      $p_addr = $p;
      $f_addr = $f;
      $x = 0;
      
      
      
      $i = HEAP[$f_addr + 4];
      
      $bytes = $p_addr;
      __label__ = 1;
      break;
     case 1:
      
      
      
      var $8 = $i - 1;
      $i = $8;
      
      
      
      
      var $13 = HEAP[$bytes + $8] | $x << 8;
      $x = $13;
      
      if ($8 > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$f_addr + 4] <= 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      
      var $29 = 0 - (1 << HEAP[$f_addr + 4] * 8 - 1 & $x) | $x;
      $x = $29;
      __label__ = 4;
      break;
     case 4:
      
      var $31 = _PyInt_FromLong($x);
      $0 = $31;
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _lu_uint($p, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x;
      var $i;
      var $bytes;
      $p_addr = $p;
      $f_addr = $f;
      $x = 0;
      
      
      
      $i = HEAP[$f_addr + 4];
      
      $bytes = $p_addr;
      __label__ = 1;
      break;
     case 1:
      
      
      
      var $8 = $i - 1;
      $i = $8;
      
      
      
      
      var $13 = HEAP[$bytes + $8] | $x << 8;
      $x = $13;
      
      if ($8 > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $17 = $x;
      if ($x >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $18 = _PyInt_FromLong($17);
      $0 = $18;
      __label__ = 5;
      break;
     case 4:
      var $19 = _PyLong_FromUnsignedLong($17);
      $0 = $19;
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
  function _lu_longlong($p, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x;
      var $i;
      var $bytes;
      $p_addr = $p;
      $f_addr = $f;
      $x = 0;
      
      
      
      $i = HEAP[$f_addr + 4];
      
      $bytes = $p_addr;
      __label__ = 1;
      break;
     case 1:
      
      var $6 = $x * Math.pow(2, 8);
      
      var $8 = $i - 1;
      $i = $8;
      
      
      
      var $12 = HEAP[$bytes + $8];
      var $13 = Runtime.or64($12, $6);
      $x = $13;
      
      if ($8 > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$f_addr + 4] <= 7) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      var $_cast = HEAP[$f_addr + 4] * 8 - 1;
      var $24 = 1 * Math.pow(2, $_cast);
      
      var $26 = Runtime.and64($24, $x);
      var $27 = 0 - $26;
      
      var $29 = Runtime.or64($27, $x);
      $x = $29;
      __label__ = 4;
      break;
     case 4:
      
      var $31 = $x >= -2147483648;
      
      
      
      var $34 = $x;
      if ($31 & $x <= 2147483647) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $36 = _PyInt_FromLong($34 & 4294967295);
      $0 = $36;
      __label__ = 7;
      break;
     case 6:
      var $37 = _PyLong_FromLongLong($34);
      $0 = $37;
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
  function _lu_ulonglong($p, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x;
      var $i;
      var $bytes;
      $p_addr = $p;
      $f_addr = $f;
      $x = 0;
      
      
      
      $i = HEAP[$f_addr + 4];
      
      $bytes = $p_addr;
      __label__ = 1;
      break;
     case 1:
      
      var $6 = $x * Math.pow(2, 8);
      
      var $8 = $i - 1;
      $i = $8;
      
      
      
      var $12 = HEAP[$bytes + $8];
      var $13 = Runtime.or64($12, $6);
      $x = $13;
      
      if ($8 > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $17 = $x;
      if ($x <= 2147483647) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $19 = _PyInt_FromLong($17 & 4294967295);
      $0 = $19;
      __label__ = 5;
      break;
     case 4:
      var $20 = _PyLong_FromUnsignedLongLong($17);
      $0 = $20;
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
  function _lu_float($p, $f) {
    
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    $p_addr = $p;
    $f_addr = $f;
    
    var $2 = _unpack_float($p_addr, 1);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _lu_double($p, $f) {
    
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    $p_addr = $p;
    $f_addr = $f;
    
    var $2 = _unpack_double($p_addr, 1);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _lp_int($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      var $i;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _get_long($v_addr, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 7;
      break;
     case 2:
      
      
      
      $i = HEAP[$f_addr + 4];
      
      
      
      
      
      if ($i != 4 & $i == 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      var $12 = HEAP[$x] < -32768;
      
      
      
      if ($12 | HEAP[$x] > 32767) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $16 = __range_error($f_addr, 0);
      $0 = $16;
      __label__ = 7;
      break;
     case 5:
      
      var $18 = HEAP[$x] & 255;
      
      HEAP[$p_addr] = $18;
      
      var $21 = $p_addr + 1;
      $p_addr = $21;
      
      var $23 = HEAP[$x] >> 8;
      HEAP[$x] = $23;
      
      var $25 = $i - 1;
      $i = $25;
      
      if ($25 > 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval9 = $retval;
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _lp_uint($p, $v, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      var $i;
      var $maxint;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _get_ulong($v_addr, $x);
      
      if ($2 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 7;
      break;
     case 2:
      
      
      
      $i = HEAP[$f_addr + 4];
      
      
      if ($i != 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      $maxint = 1;
      
      
      
      var $12 = $maxint << $i * 8;
      $maxint = $12;
      
      
      
      if (HEAP[$x] >= $maxint) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $17 = __range_error($f_addr, 1);
      $0 = $17;
      __label__ = 7;
      break;
     case 5:
      
      var $19 = HEAP[$x] & 255;
      
      HEAP[$p_addr] = $19;
      
      var $22 = $p_addr + 1;
      $p_addr = $22;
      
      var $24 = HEAP[$x] >>> 8;
      HEAP[$x] = $24;
      
      var $26 = $i - 1;
      $i = $26;
      
      if ($26 > 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      $0 = 0;
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
  function _lp_longlong($p, $v, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $res;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _get_pylong($v_addr);
      $v_addr = $2;
      
      
      if ($v_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 5;
      break;
     case 2:
      
      
      
      var $8 = __PyLong_AsByteArray($v_addr, $p_addr, 8, 1, 1);
      $res = $8;
      
      
      
      var $12 = HEAP[$v_addr] - 1;
      
      
      HEAP[$v_addr] = $12;
      
      
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $23 = HEAP[HEAP[$v_addr + 4] + 24];
      
      FUNCTION_TABLE[$23]($v_addr);
      __label__ = 4;
      break;
     case 4:
      
      $0 = $res;
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
  function _lp_ulonglong($p, $v, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $res;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _get_pylong($v_addr);
      $v_addr = $2;
      
      
      if ($v_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 5;
      break;
     case 2:
      
      
      
      var $8 = __PyLong_AsByteArray($v_addr, $p_addr, 8, 1, 0);
      $res = $8;
      
      
      
      var $12 = HEAP[$v_addr] - 1;
      
      
      HEAP[$v_addr] = $12;
      
      
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $23 = HEAP[HEAP[$v_addr + 4] + 24];
      
      FUNCTION_TABLE[$23]($v_addr);
      __label__ = 4;
      break;
     case 4:
      
      $0 = $res;
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
  function _lp_float($p, $v, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _PyFloat_AsDouble($v_addr);
      $x = $2;
      
      var $4 = $x == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $7 = HEAP[_StructError];
      _PyErr_SetString($7, __str18);
      $0 = -1;
      __label__ = 4;
      break;
     case 3:
      
      
      var $10 = __PyFloat_Pack4($x, $p_addr, 1);
      $0 = $10;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _lp_double($p, $v, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $x;
      $p_addr = $p;
      $v_addr = $v;
      $f_addr = $f;
      
      var $2 = _PyFloat_AsDouble($v_addr);
      $x = $2;
      
      var $4 = $x == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $7 = HEAP[_StructError];
      _PyErr_SetString($7, __str18);
      $0 = -1;
      __label__ = 4;
      break;
     case 3:
      
      
      var $10 = __PyFloat_Pack8($x, $p_addr, 1);
      $0 = $10;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _whichtable($pfmt) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pfmt_addr;
      var $retval;
      var $0;
      var $fmt;
      var $n = __stackBase__;
      var $p;
      $pfmt_addr = $pfmt;
      
      
      $fmt = HEAP[$pfmt_addr];
      var $3 = HEAP[$pfmt_addr] + 1;
      
      HEAP[$pfmt_addr] = $3;
      
      
      var $7 = HEAP[$fmt];
      if ($7 == 33) {
        __label__ = 2;
        break;
      } else if ($7 == 60) {
        __label__ = 1;
        break;
      } else if ($7 == 61) {
        __label__ = 3;
        break;
      } else if ($7 == 62) {
        __label__ = 2;
        break;
      } else if ($7 == 64) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      $0 = _lilendian_table;
      __label__ = 8;
      break;
     case 2:
      $0 = _bigendian_table;
      __label__ = 8;
      break;
     case 3:
      HEAP[$n] = 1;
      
      $p = $n;
      
      
      
      if (HEAP[$p] == 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = _lilendian_table;
      __label__ = 8;
      break;
     case 5:
      $0 = _bigendian_table;
      __label__ = 8;
      break;
     case 6:
      
      
      var $13 = HEAP[$pfmt_addr] + -1;
      
      HEAP[$pfmt_addr] = $13;
      __label__ = 7;
      break;
     case 7:
      $0 = _native_table;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval9 = $retval;
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _getentry($c, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $c_addr;
      var $f_addr;
      var $retval;
      var $0;
      $c_addr = $c;
      $f_addr = $f;
      __label__ = 4;
      break;
     case 1:
      
      
      
      
      
      
      var $7 = $f_addr;
      if (HEAP[$f_addr] == $c_addr) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = $7;
      __label__ = 6;
      break;
     case 3:
      var $8 = $7 + 20;
      $f_addr = $8;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      if (HEAP[$f_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $13 = HEAP[_StructError];
      _PyErr_SetString($13, __str19);
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
  function _align($size, $c, $e) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $size_addr;
      var $c_addr;
      var $e_addr;
      var $retval;
      var $0;
      var $extra;
      $size_addr = $size;
      $c_addr = $c;
      $e_addr = $e;
      
      
      
      
      
      if (HEAP[$e_addr] == $c_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$e_addr + 8] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      
      
      if ($size_addr > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      
      var $21 = HEAP[$e_addr + 8] + -1;
      
      $extra = $21 + (0 - ($size_addr - 1) % HEAP[$e_addr + 8]);
      
      
      
      
      if (2147483647 - $size_addr < $extra) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 7;
      break;
     case 5:
      
      
      var $29 = $extra + $size_addr;
      $size_addr = $29;
      __label__ = 6;
      break;
     case 6:
      
      $0 = $size_addr;
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
  function _prepare_s($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $iftmp_101;
      var $iftmp_100;
      var $0;
      var $f;
      var $e;
      var $codes;
      var $s;
      var $fmt = __stackBase__;
      var $c;
      var $size;
      var $len;
      var $num;
      var $itemsize;
      $self_addr = $self;
      
      
      
      
      
      var $6 = HEAP[$self_addr + 20] + 20;
      HEAP[$fmt] = $6;
      var $7 = _whichtable($fmt);
      $f = $7;
      
      $s = HEAP[$fmt];
      $size = 0;
      $len = 0;
      __label__ = 20;
      break;
     case 1:
      var $9 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$9] + 2 * $c] & 8192) != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      if ($c <= 47 | $c > 57) {
        __label__ = 11;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      $num = $c - 48;
      __label__ = 8;
      break;
     case 4:
      
      
      if ($num > 214748363) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      if ($num > 214748364) {
        __label__ = 49;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      if ($c - 48 > 7) {
        __label__ = 49;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      var $37 = $num * 10 + -48;
      var $38 = $37 + $c;
      $num = $38;
      __label__ = 8;
      break;
     case 8:
      
      
      $c = HEAP[$s];
      
      
      
      
      var $45 = $s + 1;
      $s = $45;
      
      
      
      
      var $_pr = $c;
      if (($c > 47 != 0 ^ 1) != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      if ($_pr <= 57) {
        __label__ = 4;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      if ($_pr == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $num = 1;
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $51 = _getentry($c, $f);
      $e = $51;
      
      
      
      if ($e == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = -1;
      __label__ = 50;
      break;
     case 14:
      
      var $56 = $c;
      if ($56 == 112) {
        __label__ = 15;
        break;
      } else if ($56 == 115) {
        __label__ = 15;
        break;
      } else if ($56 == 120) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      var $58 = $len + 1;
      $len = $58;
      __label__ = 17;
      break;
     case 16:
      
      
      var $61 = $num + $len;
      $len = $61;
      __label__ = 17;
      break;
     case 17:
      
      
      
      $itemsize = HEAP[$e + 4];
      
      
      
      
      
      var $70 = _align($size, $c & 255, $e);
      $size = $70;
      var $71 = $70 == -1;
      if ($71) {
        __label__ = 49;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      
      if (((2147483647 - $size) / $itemsize | 0) < $num) {
        __label__ = 49;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      var $82 = $itemsize * $num + $size;
      $size = $82;
      __label__ = 20;
      break;
     case 20:
      
      
      $c = HEAP[$s];
      
      
      
      
      var $89 = $s + 1;
      $s = $89;
      
      if ($c != 0 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      if ($len + 1 > 178956970) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      var $93 = _PyErr_NoMemory();
      $0 = -1;
      __label__ = 50;
      break;
     case 23:
      
      
      
      HEAP[$self_addr + 8] = $size;
      
      
      
      HEAP[$self_addr + 12] = $len;
      
      
      
      
      if (($len + 1) * 12 >= 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 24:
      
      
      
      
      if (($len + 1) * 12 != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      $iftmp_101 = ($len + 1) * 12;
      __label__ = 28;
      break;
     case 26:
      $iftmp_101 = 1;
      __label__ = 28;
      break;
     case 27:
      $iftmp_100 = 0;
      $codes = 0;
      __label__ = 29;
      break;
     case 28:
      
      var $112 = _malloc($iftmp_101);
      
      $iftmp_100 = $112;
      $codes = $112;
      
      if ($112 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $115 = _PyErr_NoMemory();
      $0 = -1;
      __label__ = 50;
      break;
     case 30:
      
      
      
      
      if (HEAP[$self_addr + 16] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      var $123 = HEAP[$self_addr + 16];
      _free($123);
      __label__ = 32;
      break;
     case 32:
      
      
      
      HEAP[$self_addr + 16] = $codes;
      
      $s = HEAP[$fmt];
      $size = 0;
      __label__ = 47;
      break;
     case 33:
      var $128 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$128] + 2 * $c] & 8192) != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      
      
      if ($c <= 47 | $c > 57) {
        __label__ = 40;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      $num = $c - 48;
      __label__ = 37;
      break;
     case 36:
      
      
      
      
      var $148 = $num * 10 + -48;
      var $149 = $148 + $c;
      $num = $149;
      __label__ = 37;
      break;
     case 37:
      
      
      $c = HEAP[$s];
      
      
      
      
      var $156 = $s + 1;
      $s = $156;
      
      
      
      
      var $_pr6 = $c;
      if (($c > 47 != 0 ^ 1) != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      
      if ($_pr6 <= 57) {
        __label__ = 36;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 39:
      
      if ($_pr6 == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      $num = 1;
      __label__ = 41;
      break;
     case 41:
      
      
      
      var $162 = _getentry($c, $f);
      $e = $162;
      
      
      
      
      
      var $168 = _align($size, $c & 255, $e);
      $size = $168;
      
      
      
      
      
      if ($c == 115 | $c == 112) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      HEAP[$codes + 4] = $size;
      
      
      
      HEAP[$codes + 8] = $num;
      
      
      
      HEAP[$codes] = $e;
      
      var $183 = $codes + 12;
      $codes = $183;
      
      
      var $186 = $num + $size;
      $size = $186;
      __label__ = 47;
      break;
     case 43:
      
      
      if ($c == 120) {
        __label__ = 45;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      
      var $190 = $num - 1;
      $num = $190;
      
      if ($190 >= 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 45:
      
      
      var $194 = $num + $size;
      $size = $194;
      __label__ = 47;
      break;
     case 46:
      
      
      
      HEAP[$codes + 4] = $size;
      
      
      var $200 = HEAP[$e + 4];
      
      
      HEAP[$codes + 8] = $200;
      
      
      
      HEAP[$codes] = $e;
      
      var $207 = $codes + 12;
      $codes = $207;
      
      
      
      
      var $212 = $size + HEAP[$e + 4];
      $size = $212;
      
      var $214 = $num - 1;
      $num = $214;
      
      if ($214 >= 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 47:
      
      
      $c = HEAP[$s];
      
      
      
      
      var $222 = $s + 1;
      $s = $222;
      
      if ($c != 0 != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      
      
      HEAP[$codes] = 0;
      
      
      
      HEAP[$codes + 4] = $size;
      
      
      HEAP[$codes + 8] = 0;
      $0 = 0;
      __label__ = 50;
      break;
     case 49:
      var $230 = HEAP[_StructError];
      _PyErr_SetString($230, __str20);
      $0 = -1;
      __label__ = 50;
      break;
     case 50:
      
      $retval = $0;
      var $retval67 = $retval;
      STACKTOP = __stackBase__;
      return $retval67;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _s_new($type, $args, $kwds) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $self;
      var $s;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      if ($type_addr == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$type_addr + 152] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str21, __str2, 1350, ___PRETTY_FUNCTION___9830);
      throw "Reached an unreachable!";
     case 3:
      
      
      var $9 = HEAP[$type_addr + 152];
      
      var $11 = FUNCTION_TABLE[$9]($type_addr, 0);
      $self = $11;
      
      
      if ($self != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      $s = $self;
      
      var $17 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $17;
      
      
      HEAP[$s + 20] = __Py_NoneStruct;
      
      
      HEAP[$s + 16] = 0;
      
      
      HEAP[$s + 8] = -1;
      
      
      HEAP[$s + 12] = -1;
      __label__ = 5;
      break;
     case 5:
      
      $0 = $self;
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _s_init($self, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $soself;
      var $o_format = __stackBase__;
      var $ret;
      var $_py_tmp;
      $self_addr = $self;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      $soself = $self_addr;
      HEAP[$o_format] = 0;
      $ret = 0;
      
      
      
      
      if (HEAP[$self_addr + 4] != _PyStructType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $9 = HEAP[$self_addr + 4];
      var $10 = _PyType_IsSubtype($9, _PyStructType);
      
      if ($10 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str22, __str2, 1372, ___PRETTY_FUNCTION___9853);
      throw "Reached an unreachable!";
     case 3:
      
      
      var $14 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kwds_addr, __str23, _kwlist_9852, allocate([ $o_format, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 9;
      break;
     case 5:
      
      
      
      var $19 = HEAP[HEAP[$o_format]] + 1;
      var $20 = HEAP[$o_format];
      HEAP[$20] = $19;
      
      
      
      
      if (HEAP[$soself + 20] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      $_py_tmp = HEAP[$soself + 20];
      
      
      HEAP[$soself + 20] = 0;
      
      
      
      var $33 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $33;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $44 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$44]($_py_tmp);
      __label__ = 8;
      break;
     case 8:
      var $46 = HEAP[$o_format];
      
      
      HEAP[$soself + 20] = $46;
      
      var $50 = _prepare_s($soself);
      $ret = $50;
      
      $0 = $ret;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval9 = $retval;
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _s_dealloc($s) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      $s_addr = $s;
      
      
      
      
      if (HEAP[$s_addr + 24] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      _PyObject_ClearWeakRefs($s_addr);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[$s_addr + 16] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $13 = HEAP[$s_addr + 16];
      _free($13);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      if (HEAP[$s_addr + 20] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      var $20 = HEAP[$s_addr + 20];
      
      
      var $23 = HEAP[$20] - 1;
      var $24 = $20;
      HEAP[$24] = $23;
      
      
      
      if (HEAP[$20] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      
      var $34 = HEAP[HEAP[HEAP[$s_addr + 20] + 4] + 24];
      
      
      var $37 = HEAP[$s_addr + 20];
      FUNCTION_TABLE[$34]($37);
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      
      var $43 = HEAP[HEAP[$s_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$43]($s_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _s_unpack_internal($soself, $startfrom) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $soself_addr;
      var $startfrom_addr;
      var $retval;
      var $0;
      var $code;
      var $i;
      var $result;
      var $v;
      var $e;
      var $res;
      var $n;
      $soself_addr = $soself;
      $startfrom_addr = $startfrom;
      $i = 0;
      
      
      var $3 = HEAP[$soself_addr + 12];
      var $4 = _PyTuple_New($3);
      $result = $4;
      
      
      if ($result == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 17;
      break;
     case 2:
      
      
      
      $code = HEAP[$soself_addr + 16];
      __label__ = 12;
      break;
     case 3:
      
      
      
      $e = HEAP[$code];
      
      
      
      
      
      $res = $startfrom_addr + HEAP[$code + 4];
      
      
      
      
      if (HEAP[$e] == 115) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $24 = HEAP[$code + 8];
      
      var $26 = _PyString_FromStringAndSize($res, $24);
      $v = $26;
      __lastLabel__ = 4;
      __label__ = 10;
      break;
     case 5:
      
      
      
      
      if (HEAP[$e] == 112) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      $n = HEAP[$res];
      
      
      
      
      
      if (HEAP[$code + 8] <= $n) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      $n = HEAP[$code + 8] - 1;
      __label__ = 8;
      break;
     case 8:
      
      
      
      var $46 = _PyString_FromStringAndSize($res + 1, $n);
      $v = $46;
      __lastLabel__ = 8;
      __label__ = 10;
      break;
     case 9:
      
      
      var $49 = HEAP[$e + 12];
      
      
      var $52 = FUNCTION_TABLE[$49]($res, $e);
      $v = $52;
      __lastLabel__ = 9;
      __label__ = 10;
      break;
     case 10:
      var $53 = __lastLabel__ == 9 ? $52 : __lastLabel__ == 8 ? $46 : $26;
      
      var $55 = $result;
      if ($53 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      HEAP[$55 + 12 + $i * 4] = $v;
      
      var $62 = $i + 1;
      $i = $62;
      
      var $64 = $code + 12;
      $code = $64;
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      
      if (HEAP[$code] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      $0 = $result;
      __label__ = 17;
      break;
     case 14:
      
      
      var $73 = HEAP[$55] - 1;
      
      
      HEAP[$result] = $73;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $84 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$84]($result);
      __label__ = 16;
      break;
     case 16:
      $0 = 0;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval16 = $retval;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _s_unpack($self, $inputstr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $inputstr_addr;
      var $retval;
      var $0;
      var $start = __stackBase__;
      var $len = __stackBase__ + 4;
      var $args;
      var $result;
      var $soself;
      $self_addr = $self;
      $inputstr_addr = $inputstr;
      $args = 0;
      
      
      $soself = $self_addr;
      
      
      
      
      if (HEAP[$self_addr + 4] != _PyStructType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $9 = HEAP[$self_addr + 4];
      var $10 = _PyType_IsSubtype($9, _PyStructType);
      
      if ($10 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str22, __str2, 1446, ___PRETTY_FUNCTION___9973);
      throw "Reached an unreachable!";
     case 3:
      
      
      
      
      if (HEAP[$soself + 16] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str25, __str2, 1447, ___PRETTY_FUNCTION___9973);
      throw "Reached an unreachable!";
     case 5:
      
      
      if ($inputstr_addr == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$inputstr_addr + 4] + 84] & 134217728) != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      if (HEAP[$inputstr_addr + 8] == HEAP[$soself + 8]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $38 = _s_unpack_internal($soself, $inputstr_addr + 20);
      $0 = $38;
      __label__ = 20;
      break;
     case 9:
      
      var $40 = _PyTuple_Pack(1, allocate([ $inputstr_addr, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $args = $40;
      
      if ($40 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = 0;
      __label__ = 20;
      break;
     case 11:
      
      var $43 = __PyArg_ParseTuple_SizeT($args, __str26, allocate([ $start, 0, 0, 0, $len, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($43 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      if (HEAP[$soself + 8] != HEAP[$len]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $50 = HEAP[$start];
      
      var $52 = _s_unpack_internal($soself, $50);
      $result = $52;
      
      
      
      var $56 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $56;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $67 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$67]($args);
      __label__ = 15;
      break;
     case 15:
      
      $0 = $result;
      __label__ = 20;
      break;
     case 16:
      
      
      if ($args != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      var $75 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $75;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $86 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$86]($args);
      __label__ = 19;
      break;
     case 19:
      
      
      var $90 = HEAP[$soself + 8];
      var $91 = HEAP[_StructError];
      var $92 = _PyErr_Format($91, __str27, allocate([ $90, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 20;
      break;
     case 20:
      
      $retval = $0;
      var $retval19 = $retval;
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _s_unpack_from($self, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $buffer_len = __stackBase__;
      var $offset = __stackBase__ + 4;
      var $buffer = __stackBase__ + 8;
      var $soself;
      $self_addr = $self;
      $args_addr = $args;
      $kwds_addr = $kwds;
      HEAP[$buffer_len] = 0;
      HEAP[$offset] = 0;
      HEAP[$buffer] = 0;
      
      
      $soself = $self_addr;
      
      
      
      
      if (HEAP[$self_addr + 4] != _PyStructType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $9 = HEAP[$self_addr + 4];
      var $10 = _PyType_IsSubtype($9, _PyStructType);
      
      if ($10 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str22, __str2, 1493, ___PRETTY_FUNCTION___10041);
      throw "Reached an unreachable!";
     case 3:
      
      
      
      
      if (HEAP[$soself + 16] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str25, __str2, 1494, ___PRETTY_FUNCTION___10041);
      throw "Reached an unreachable!";
     case 5:
      
      
      var $18 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kwds_addr, __str28, _kwlist_10035, allocate([ $buffer, 0, 0, 0, $buffer_len, 0, 0, 0, $offset, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($18 == 0) {
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
      
      
      if (HEAP[$buffer] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $22 = HEAP[_StructError];
      var $23 = _PyErr_Format($22, __str31, allocate(1, "i32", ALLOC_STACK));
      $0 = 0;
      __label__ = 14;
      break;
     case 9:
      
      
      if (HEAP[$offset] < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      var $28 = HEAP[$buffer_len] + HEAP[$offset];
      HEAP[$offset] = $28;
      
      if ($28 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      
      
      if (HEAP[$buffer_len] - HEAP[$offset] < HEAP[$soself + 8]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      var $39 = HEAP[$soself + 8];
      var $40 = HEAP[_StructError];
      var $41 = _PyErr_Format($40, __str32, allocate([ $39, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 14;
      break;
     case 13:
      
      
      var $44 = HEAP[$buffer] + HEAP[$offset];
      
      var $46 = _s_unpack_internal($soself, $44);
      $0 = $46;
      __label__ = 14;
      break;
     case 14:
      
      $retval = $0;
      var $retval15 = $retval;
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _s_pack_internal($soself, $args, $offset, $buf) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $soself_addr;
      var $args_addr;
      var $offset_addr;
      var $buf_addr;
      var $retval;
      var $0;
      var $code;
      var $i;
      var $n;
      var $v;
      var $e;
      var $res;
      $soself_addr = $soself;
      $args_addr = $args;
      $offset_addr = $offset;
      $buf_addr = $buf;
      
      
      var $3 = HEAP[$soself_addr + 8];
      
      _llvm_memset_p0i8_i32($buf_addr, 0, $3, 1, 0);
      
      $i = $offset_addr;
      
      
      
      $code = HEAP[$soself_addr + 16];
      __label__ = 24;
      break;
     case 1:
      
      
      
      
      
      
      $v = HEAP[$args_addr + 12 + $i * 4];
      
      var $16 = $i + 1;
      $i = $16;
      
      
      
      $e = HEAP[$code];
      
      
      
      
      
      $res = $buf_addr + HEAP[$code + 4];
      
      
      
      
      if (HEAP[$e] == 115) {
        __label__ = 2;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v + 4] + 84] & 134217728) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $36 = HEAP[_StructError];
      _PyErr_SetString($36, __str33);
      $0 = -1;
      __label__ = 26;
      break;
     case 4:
      
      
      
      
      $n = HEAP[$v + 8];
      
      
      
      var $44 = $n;
      
      if (HEAP[$code + 8] < $44) {
        __lastLabel__ = 4;
        __label__ = 5;
        break;
      } else {
        __lastLabel__ = 4;
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $48 = HEAP[$code + 8];
      $n = $48;
      __lastLabel__ = 5;
      __label__ = 6;
      break;
     case 6:
      var $49 = __lastLabel__ == 5 ? $48 : $44;
      
      if ($49 > 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 7:
      
      
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($res, $v + 20, $n, 1, 0);
      __label__ = 23;
      break;
     case 8:
      
      
      
      
      if (HEAP[$e] == 112) {
        __label__ = 9;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v + 4] + 84] & 134217728) == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $68 = HEAP[_StructError];
      _PyErr_SetString($68, __str34);
      $0 = -1;
      __label__ = 26;
      break;
     case 11:
      
      
      
      
      $n = HEAP[$v + 8];
      
      
      
      
      var $77 = $n;
      
      if (HEAP[$code + 8] - 1 < $77) {
        __lastLabel__ = 11;
        __label__ = 12;
        break;
      } else {
        __lastLabel__ = 11;
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      var $82 = HEAP[$code + 8] - 1;
      $n = $82;
      __lastLabel__ = 12;
      __label__ = 13;
      break;
     case 13:
      var $83 = __lastLabel__ == 12 ? $82 : $77;
      
      if ($83 > 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($res + 1, $v + 20, $n, 1, 0);
      __label__ = 15;
      break;
     case 15:
      
      
      if ($n > 255) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $n = 255;
      __label__ = 17;
      break;
     case 17:
      
      
      
      HEAP[$res] = $n & 255;
      __label__ = 23;
      break;
     case 18:
      
      
      var $99 = HEAP[$e + 16];
      
      
      
      var $103 = FUNCTION_TABLE[$99]($res, $v, $e);
      
      if ($103 < 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 19:
      
      
      
      var $108 = HEAP[$e];
      var $memchr = _memchr(__str, $108, 11);
      
      if ($memchr != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      var $110 = HEAP[_PyExc_OverflowError];
      var $111 = _PyErr_ExceptionMatches($110);
      
      if ($111 != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      var $116 = HEAP[$e];
      var $117 = HEAP[_StructError];
      var $118 = _PyErr_Format($117, __str35, allocate([ $116, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 22;
      break;
     case 22:
      $0 = -1;
      __label__ = 26;
      break;
     case 23:
      
      var $120 = $code + 12;
      $code = $120;
      __label__ = 24;
      break;
     case 24:
      
      
      
      
      
      if (HEAP[$code] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      $0 = 0;
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
  function _s_pack($self, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $soself;
      var $result;
      $self_addr = $self;
      $args_addr = $args;
      
      
      $soself = $self_addr;
      
      
      
      
      if (HEAP[$self_addr + 4] != _PyStructType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $9 = HEAP[$self_addr + 4];
      var $10 = _PyType_IsSubtype($9, _PyStructType);
      
      if ($10 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str22, __str2, 1601, ___PRETTY_FUNCTION___10174);
      throw "Reached an unreachable!";
     case 3:
      
      
      
      
      if (HEAP[$soself + 16] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str25, __str2, 1602, ___PRETTY_FUNCTION___10174);
      throw "Reached an unreachable!";
     case 5:
      
      
      
      
      
      
      
      
      var $24 = $soself;
      if (HEAP[$args_addr + 8] != HEAP[$soself + 12]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $26 = HEAP[$24 + 12];
      var $27 = HEAP[_StructError];
      var $28 = _PyErr_Format($27, __str36, allocate([ $26, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 14;
      break;
     case 7:
      
      var $30 = HEAP[$24 + 8];
      var $31 = _PyString_FromStringAndSize(0, $30);
      $result = $31;
      
      
      if ($result == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 14;
      break;
     case 9:
      
      
      
      
      
      
      var $40 = _s_pack_internal($soself, $args_addr, 0, $result + 20);
      
      var $42 = $result;
      if ($40 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      var $45 = HEAP[$42] - 1;
      
      
      HEAP[$result] = $45;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $56 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$56]($result);
      __label__ = 12;
      break;
     case 12:
      $0 = 0;
      __label__ = 14;
      break;
     case 13:
      $0 = $42;
      __label__ = 14;
      break;
     case 14:
      
      $retval = $0;
      var $retval14 = $retval;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _s_pack_into($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $soself;
      var $buffer = __stackBase__;
      var $buffer_len = __stackBase__ + 4;
      var $offset;
      $self_addr = $self;
      $args_addr = $args;
      
      
      $soself = $self_addr;
      
      
      
      
      if (HEAP[$self_addr + 4] != _PyStructType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $9 = HEAP[$self_addr + 4];
      var $10 = _PyType_IsSubtype($9, _PyStructType);
      
      if ($10 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str22, __str2, 1641, ___PRETTY_FUNCTION___10219);
      throw "Reached an unreachable!";
     case 3:
      
      
      
      
      if (HEAP[$soself + 16] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str25, __str2, 1642, ___PRETTY_FUNCTION___10219);
      throw "Reached an unreachable!";
     case 5:
      
      
      
      
      
      
      
      
      
      if (HEAP[$args_addr + 8] != HEAP[$soself + 12] + 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $28 = HEAP[$soself + 12] + 2;
      var $29 = HEAP[_StructError];
      var $30 = _PyErr_Format($29, __str37, allocate([ $28, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 24;
      break;
     case 7:
      
      
      
      
      var $35 = HEAP[$args_addr + 12];
      var $36 = _PyObject_AsWriteBuffer($35, $buffer, $buffer_len);
      var $37 = $36 == -1;
      if ($37) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 24;
      break;
     case 9:
      
      
      if (HEAP[$buffer_len] < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str38, __str2, 1656, ___PRETTY_FUNCTION___10219);
      throw "Reached an unreachable!";
     case 11:
      
      
      
      
      var $44 = HEAP[$args_addr + 12 + 4];
      var $45 = _PyInt_AsSsize_t($44);
      $offset = $45;
      var $46 = $offset;
      var $47 = $46 == -1;
      if ($47) {
        __lastLabel__ = 11;
        __label__ = 12;
        break;
      } else {
        __lastLabel__ = 11;
        __label__ = 15;
        break;
      }
     case 12:
      var $48 = _PyErr_Occurred();
      
      if ($48 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = 0;
      __label__ = 24;
      break;
     case 14:
      var $_pr = $offset;
      __lastLabel__ = 14;
      __label__ = 15;
      break;
     case 15:
      var $50 = __lastLabel__ == 14 ? $_pr : $46;
      
      if ($50 < 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      var $54 = $offset + HEAP[$buffer_len];
      $offset = $54;
      __lastLabel__ = 16;
      __label__ = 18;
      break;
     case 17:
      var $_pr1 = $offset;
      __lastLabel__ = 17;
      __label__ = 18;
      break;
     case 18:
      var $55 = __lastLabel__ == 17 ? $_pr1 : $54;
      
      if ($55 < 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      
      
      
      if (HEAP[$buffer_len] - $offset < HEAP[$soself + 8]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      var $66 = HEAP[$soself + 8];
      var $67 = HEAP[_StructError];
      var $68 = _PyErr_Format($67, __str39, allocate([ $66, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 24;
      break;
     case 21:
      
      
      var $71 = HEAP[$buffer] + $offset;
      
      
      var $74 = _s_pack_internal($soself, $args_addr, 2, $71);
      
      if ($74 != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      $0 = 0;
      __label__ = 24;
      break;
     case 23:
      
      var $77 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $77;
      $0 = __Py_NoneStruct;
      __label__ = 24;
      break;
     case 24:
      
      $retval = $0;
      var $retval23 = $retval;
      STACKTOP = __stackBase__;
      return $retval23;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _s_get_format($self, $unused) {
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $unused_addr = $unused;
    
    
    
    
    
    var $6 = HEAP[HEAP[$self_addr + 20]] + 1;
    var $7 = HEAP[$self_addr + 20];
    HEAP[$7] = $6;
    
    
    
    $0 = HEAP[$self_addr + 20];
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _s_get_size($self, $unused) {
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $unused_addr = $unused;
    
    
    var $3 = HEAP[$self_addr + 8];
    var $4 = _PyInt_FromSsize_t($3);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _cache_struct($fmt) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $fmt_addr;
      var $retval;
      var $0;
      var $s_object;
      $fmt_addr = $fmt;
      
      
      if (HEAP[_cache] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = _PyDict_New();
      HEAP[_cache] = $3;
      
      
      if (HEAP[_cache] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 11;
      break;
     case 3:
      var $6 = HEAP[_cache];
      
      var $8 = _PyDict_GetItem($6, $fmt_addr);
      $s_object = $8;
      
      if ($8 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      var $13 = HEAP[$s_object] + 1;
      
      
      HEAP[$s_object] = $13;
      
      $0 = $s_object;
      __label__ = 11;
      break;
     case 5:
      
      var $18 = _PyObject_CallFunctionObjArgs(_PyStructType, allocate([ $fmt_addr, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $s_object = $18;
      
      
      if ($s_object != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      var $21 = HEAP[_cache];
      var $22 = _PyDict_Size($21);
      
      if ($22 > 99) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $24 = HEAP[_cache];
      _PyDict_Clear($24);
      __label__ = 8;
      break;
     case 8:
      var $25 = HEAP[_cache];
      
      
      var $28 = _PyDict_SetItem($25, $fmt_addr, $s_object);
      var $29 = $28 == -1;
      if ($29) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      _PyErr_Clear();
      __label__ = 10;
      break;
     case 10:
      
      $0 = $s_object;
      __label__ = 11;
      break;
     case 11:
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _clearcache($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $_py_tmp;
      $self_addr = $self;
      
      
      if (HEAP[_cache] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      $_py_tmp = HEAP[_cache];
      HEAP[_cache] = 0;
      
      
      
      var $7 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $7;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $18 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$18]($_py_tmp);
      __label__ = 3;
      break;
     case 3:
      
      var $21 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $21;
      $0 = __Py_NoneStruct;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _calcsize($self, $fmt) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $fmt_addr;
      var $retval;
      var $0;
      var $n;
      var $s_object;
      $self_addr = $self;
      $fmt_addr = $fmt;
      
      var $2 = _cache_struct($fmt_addr);
      $s_object = $2;
      
      
      if ($s_object == 0) {
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
      
      
      
      
      $n = HEAP[$s_object + 8];
      
      
      
      var $12 = HEAP[$s_object] - 1;
      
      
      HEAP[$s_object] = $12;
      
      
      
      
      if (HEAP[$s_object] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $23 = HEAP[HEAP[$s_object + 4] + 24];
      
      FUNCTION_TABLE[$23]($s_object);
      __label__ = 4;
      break;
     case 4:
      
      var $26 = _PyInt_FromSsize_t($n);
      $0 = $26;
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
  function _pack($self, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $s_object;
      var $fmt;
      var $newargs;
      var $result;
      var $n;
      $self_addr = $self;
      $args_addr = $args;
      
      
      
      
      $n = HEAP[$args_addr + 8];
      
      
      if ($n == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($7, __str48);
      $0 = 0;
      __label__ = 13;
      break;
     case 2:
      
      
      
      
      
      $fmt = HEAP[$args_addr + 12];
      
      
      var $15 = _PyTuple_GetSlice($args_addr, 1, $n);
      $newargs = $15;
      
      
      if ($newargs == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 13;
      break;
     case 4:
      
      var $19 = _cache_struct($fmt);
      $s_object = $19;
      
      
      if ($s_object == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $25 = HEAP[$newargs] - 1;
      
      
      HEAP[$newargs] = $25;
      
      
      
      
      if (HEAP[$newargs] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $36 = HEAP[HEAP[$newargs + 4] + 24];
      
      FUNCTION_TABLE[$36]($newargs);
      __label__ = 7;
      break;
     case 7:
      $0 = 0;
      __label__ = 13;
      break;
     case 8:
      
      
      var $40 = _s_pack($s_object, $newargs);
      $result = $40;
      
      
      
      var $44 = HEAP[$newargs] - 1;
      
      
      HEAP[$newargs] = $44;
      
      
      
      
      if (HEAP[$newargs] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $55 = HEAP[HEAP[$newargs + 4] + 24];
      
      FUNCTION_TABLE[$55]($newargs);
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $60 = HEAP[$s_object] - 1;
      
      
      HEAP[$s_object] = $60;
      
      
      
      
      if (HEAP[$s_object] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $71 = HEAP[HEAP[$s_object + 4] + 24];
      
      FUNCTION_TABLE[$71]($s_object);
      __label__ = 12;
      break;
     case 12:
      
      $0 = $result;
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
  function _pack_into($self, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $s_object;
      var $fmt;
      var $newargs;
      var $result;
      var $n;
      $self_addr = $self;
      $args_addr = $args;
      
      
      
      
      $n = HEAP[$args_addr + 8];
      
      
      if ($n == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($7, __str48);
      $0 = 0;
      __label__ = 13;
      break;
     case 2:
      
      
      
      
      
      $fmt = HEAP[$args_addr + 12];
      
      
      var $15 = _PyTuple_GetSlice($args_addr, 1, $n);
      $newargs = $15;
      
      
      if ($newargs == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 13;
      break;
     case 4:
      
      var $19 = _cache_struct($fmt);
      $s_object = $19;
      
      
      if ($s_object == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $25 = HEAP[$newargs] - 1;
      
      
      HEAP[$newargs] = $25;
      
      
      
      
      if (HEAP[$newargs] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $36 = HEAP[HEAP[$newargs + 4] + 24];
      
      FUNCTION_TABLE[$36]($newargs);
      __label__ = 7;
      break;
     case 7:
      $0 = 0;
      __label__ = 13;
      break;
     case 8:
      
      
      var $40 = _s_pack_into($s_object, $newargs);
      $result = $40;
      
      
      
      var $44 = HEAP[$newargs] - 1;
      
      
      HEAP[$newargs] = $44;
      
      
      
      
      if (HEAP[$newargs] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $55 = HEAP[HEAP[$newargs + 4] + 24];
      
      FUNCTION_TABLE[$55]($newargs);
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $60 = HEAP[$s_object] - 1;
      
      
      HEAP[$s_object] = $60;
      
      
      
      
      if (HEAP[$s_object] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $71 = HEAP[HEAP[$s_object + 4] + 24];
      
      FUNCTION_TABLE[$71]($s_object);
      __label__ = 12;
      break;
     case 12:
      
      $0 = $result;
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
  function _unpack($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $s_object;
      var $fmt = __stackBase__;
      var $inputstr = __stackBase__ + 4;
      var $result;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_UnpackTuple($args_addr, __str42, 2, 2, allocate([ $fmt, 0, 0, 0, $inputstr, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$fmt];
      var $5 = _cache_struct($4);
      $s_object = $5;
      
      
      if ($s_object == 0) {
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
      var $8 = HEAP[$inputstr];
      
      var $10 = _s_unpack($s_object, $8);
      $result = $10;
      
      
      
      var $14 = HEAP[$s_object] - 1;
      
      
      HEAP[$s_object] = $14;
      
      
      
      
      if (HEAP[$s_object] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $25 = HEAP[HEAP[$s_object + 4] + 24];
      
      FUNCTION_TABLE[$25]($s_object);
      __label__ = 6;
      break;
     case 6:
      
      $0 = $result;
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
  function _unpack_from($self, $args, $kwds) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $s_object;
      var $fmt;
      var $newargs;
      var $result;
      var $n;
      $self_addr = $self;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      
      
      $n = HEAP[$args_addr + 8];
      
      
      if ($n == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($7, __str48);
      $0 = 0;
      __label__ = 13;
      break;
     case 2:
      
      
      
      
      
      $fmt = HEAP[$args_addr + 12];
      
      
      var $15 = _PyTuple_GetSlice($args_addr, 1, $n);
      $newargs = $15;
      
      
      if ($newargs == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 13;
      break;
     case 4:
      
      var $19 = _cache_struct($fmt);
      $s_object = $19;
      
      
      if ($s_object == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $25 = HEAP[$newargs] - 1;
      
      
      HEAP[$newargs] = $25;
      
      
      
      
      if (HEAP[$newargs] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $36 = HEAP[HEAP[$newargs + 4] + 24];
      
      FUNCTION_TABLE[$36]($newargs);
      __label__ = 7;
      break;
     case 7:
      $0 = 0;
      __label__ = 13;
      break;
     case 8:
      
      
      
      var $41 = _s_unpack_from($s_object, $newargs, $kwds_addr);
      $result = $41;
      
      
      
      var $45 = HEAP[$newargs] - 1;
      
      
      HEAP[$newargs] = $45;
      
      
      
      
      if (HEAP[$newargs] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $56 = HEAP[HEAP[$newargs + 4] + 24];
      
      FUNCTION_TABLE[$56]($newargs);
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $61 = HEAP[$s_object] - 1;
      
      
      HEAP[$s_object] = $61;
      
      
      
      
      if (HEAP[$s_object] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $72 = HEAP[HEAP[$s_object + 4] + 24];
      
      FUNCTION_TABLE[$72]($s_object);
      __label__ = 12;
      break;
     case 12:
      
      $0 = $result;
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
  function _init_struct() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ver;
      var $m;
      var $one = __stackBase__;
      var $native;
      var $other;
      var $ptr;
      var $0 = _PyString_FromString(__str51);
      $ver = $0;
      
      
      if ($ver == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = _Py_InitModule4(__str52, _module_functions, _module_doc, 0, 1013);
      $m = $3;
      
      
      if ($m == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[_PyStructType + 4] = _PyType_Type;
      var $6 = _PyType_Ready(_PyStructType);
      
      if ($6 < 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      HEAP[$one] = 1;
      $native = _native_table;
      
      
      
      if (HEAP[$one] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $other = _lilendian_table;
      __label__ = 17;
      break;
     case 5:
      $other = _bigendian_table;
      __label__ = 17;
      break;
     case 6:
      
      $ptr = $other;
      __label__ = 15;
      break;
     case 7:
      
      
      
      
      
      
      
      var $18 = $ptr;
      if (HEAP[$ptr] == HEAP[$native]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 8:
      
      
      if ($18 == $other) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      var $22 = $other + 20;
      $other = $22;
      __label__ = 10;
      break;
     case 10:
      
      
      
      
      
      
      
      if (HEAP[$ptr + 4] != HEAP[$native + 4]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      if (HEAP[$ptr] == 100) {
        __label__ = 16;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      if (HEAP[$ptr] == 102) {
        __label__ = 16;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      var $40 = HEAP[$native + 16];
      
      
      HEAP[$ptr + 16] = $40;
      
      
      var $45 = HEAP[$native + 12];
      
      
      HEAP[$ptr + 12] = $45;
      __label__ = 16;
      break;
     case 14:
      var $48 = $18 + 20;
      $ptr = $48;
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      if (HEAP[$ptr] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      var $54 = $native + 20;
      $native = $54;
      __label__ = 17;
      break;
     case 17:
      
      
      
      
      if (HEAP[$native] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      if (HEAP[$other] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      if (HEAP[_StructError] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $65 = _PyErr_NewException(__str53, 0, 0);
      HEAP[_StructError] = $65;
      
      
      if (HEAP[_StructError] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      var $71 = HEAP[HEAP[_StructError]] + 1;
      var $72 = HEAP[_StructError];
      HEAP[$72] = $71;
      var $73 = HEAP[_StructError];
      
      var $75 = _PyModule_AddObject($m, __str54, $73);
      
      var $77 = HEAP[_PyStructType] + 1;
      HEAP[_PyStructType] = $77;
      
      var $79 = _PyModule_AddObject($m, __str47, _PyStructType);
      
      
      var $82 = _PyModule_AddObject($m, __str55, $ver);
      
      var $84 = _PyModule_AddIntConstant($m, __str56, 1);
      
      var $86 = _PyModule_AddIntConstant($m, __str57, 1);
      __label__ = 22;
      break;
     case 22:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_struct"] = _init_struct;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _nu_byte, 0, _np_byte, 0, _nu_ubyte, 0, _np_ubyte, 0, _nu_char, 0, _np_char, 0, _nu_short, 0, _np_short, 0, _nu_ushort, 0, _np_ushort, 0, _nu_int, 0, _np_int, 0, _nu_uint, 0, _np_uint, 0, _nu_long, 0, _np_long, 0, _nu_ulong, 0, _np_ulong, 0, _nu_longlong, 0, _np_longlong, 0, _nu_ulonglong, 0, _np_ulonglong, 0, _nu_bool, 0, _np_bool, 0, _nu_float, 0, _np_float, 0, _nu_double, 0, _np_double, 0, _nu_void_p, 0, _np_void_p, 0, _bu_int, 0, _bp_int, 0, _bu_uint, 0, _bp_uint, 0, _bu_longlong, 0, _bp_longlong, 0, _bu_ulonglong, 0, _bp_ulonglong, 0, _bu_bool, 0, _bp_bool, 0, _bu_float, 0, _bp_float, 0, _bu_double, 0, _bp_double, 0, _lu_int, 0, _lp_int, 0, _lu_uint, 0, _lp_uint, 0, _lu_longlong, 0, _lp_longlong, 0, _lu_ulonglong, 0, _lp_ulonglong, 0, _lu_float, 0, _lp_float, 0, _lu_double, 0, _lp_double, 0, _s_pack, 0, _s_pack_into, 0, _s_unpack, 0, _s_unpack_from, 0, _s_get_format, 0, _s_get_size, 0, _s_dealloc, 0, _PyObject_GenericGetAttr, 0, _PyObject_GenericSetAttr, 0, _s_init, 0, _PyType_GenericAlloc, 0, _s_new, 0, _PyObject_Free, 0, _clearcache, 0, _calcsize, 0, _pack, 0, _pack_into, 0, _unpack, 0, _unpack_from, 0 ]);
  function run(args) {
    __str = allocate([ 98, 66, 104, 72, 105, 73, 108, 76, 113, 81, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 118, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 95, 115, 116, 114, 117, 99, 116, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8419 = allocate([ 103, 101, 116, 95, 112, 121, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 105, 110, 116, 101, 103, 101, 114, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 101, 120, 112, 101, 99, 116, 101, 100, 44, 32, 103, 111, 116, 32, 102, 108, 111, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 105, 110, 116, 101, 103, 101, 114, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 101, 120, 112, 101, 99, 116, 101, 100, 44, 32, 103, 111, 116, 32, 110, 111, 110, 45, 105, 110, 116, 101, 103, 101, 114, 32, 40, 105, 109, 112, 108, 105, 99, 105, 116, 32, 99, 111, 110, 118, 101, 114, 115, 105, 111, 110, 32, 117, 115, 105, 110, 103, 32, 95, 95, 105, 110, 116, 95, 95, 32, 105, 115, 32, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 95, 95, 105, 110, 116, 95, 95, 32, 109, 101, 116, 104, 111, 100, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 110, 111, 110, 45, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _StructError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str6 = allocate([ 99, 97, 110, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 116, 111, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 40, 40, 40, 40, 118, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 51, 41, 41, 41, 32, 33, 61, 32, 48, 41, 32, 124, 124, 32, 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 118, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 52, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 118, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 52, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8543 = allocate([ 103, 101, 116, 95, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8572 = allocate([ 103, 101, 116, 95, 117, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8601 = allocate([ 103, 101, 116, 95, 108, 111, 110, 103, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8630 = allocate([ 103, 101, 116, 95, 117, 108, 111, 110, 103, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 102, 45, 62, 115, 105, 122, 101, 32, 62, 61, 32, 49, 32, 38, 38, 32, 102, 45, 62, 115, 105, 122, 101, 32, 60, 61, 32, 52, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8689 = allocate([ 95, 114, 97, 110, 103, 101, 95, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 39, 37, 99, 39, 32, 102, 111, 114, 109, 97, 116, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 48, 32, 60, 61, 32, 110, 117, 109, 98, 101, 114, 32, 60, 61, 32, 37, 122, 117, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 39, 37, 99, 39, 32, 102, 111, 114, 109, 97, 116, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 37, 122, 100, 32, 60, 61, 32, 110, 117, 109, 98, 101, 114, 32, 60, 61, 32, 37, 122, 100, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 98, 121, 116, 101, 32, 102, 111, 114, 109, 97, 116, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 45, 49, 50, 56, 32, 60, 61, 32, 110, 117, 109, 98, 101, 114, 32, 60, 61, 32, 49, 50, 55, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 117, 98, 121, 116, 101, 32, 102, 111, 114, 109, 97, 116, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 48, 32, 60, 61, 32, 110, 117, 109, 98, 101, 114, 32, 60, 61, 32, 50, 53, 53, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 99, 104, 97, 114, 32, 102, 111, 114, 109, 97, 116, 32, 114, 101, 113, 117, 105, 114, 101, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 108, 101, 110, 103, 116, 104, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 115, 104, 111, 114, 116, 32, 102, 111, 114, 109, 97, 116, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 83, 72, 82, 84, 95, 77, 73, 78, 32, 60, 61, 32, 110, 117, 109, 98, 101, 114, 32, 60, 61, 32, 83, 72, 82, 84, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 117, 115, 104, 111, 114, 116, 32, 102, 111, 114, 109, 97, 116, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 48, 32, 60, 61, 32, 110, 117, 109, 98, 101, 114, 32, 60, 61, 32, 85, 83, 72, 82, 84, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 114, 101, 113, 117, 105, 114, 101, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 102, 108, 111, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9097 = allocate([ 110, 112, 95, 118, 111, 105, 100, 95, 112, 0 ], "i8", ALLOC_NORMAL);
    _native_table = allocate([ 120, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _bigendian_table = allocate([ 120, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _lilendian_table = allocate([ 120, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*, %struct.formatdef*)*", 0, 0, 0, "i32 (i8*, %struct.PyObject*, %struct.formatdef*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str19 = allocate([ 98, 97, 100, 32, 99, 104, 97, 114, 32, 105, 110, 32, 115, 116, 114, 117, 99, 116, 32, 102, 111, 114, 109, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 116, 111, 116, 97, 108, 32, 115, 116, 114, 117, 99, 116, 32, 115, 105, 122, 101, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 116, 121, 112, 101, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 32, 38, 38, 32, 116, 121, 112, 101, 45, 62, 116, 112, 95, 97, 108, 108, 111, 99, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9830 = allocate([ 115, 95, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 32, 61, 61, 32, 40, 38, 80, 121, 83, 116, 114, 117, 99, 116, 84, 121, 112, 101, 41, 32, 124, 124, 32, 80, 121, 84, 121, 112, 101, 95, 73, 115, 83, 117, 98, 116, 121, 112, 101, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 44, 32, 40, 38, 80, 121, 83, 116, 114, 117, 99, 116, 84, 121, 112, 101, 41, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9853 = allocate([ 115, 95, 105, 110, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 83, 58, 83, 116, 114, 117, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9852 = allocate(8, "i8*", ALLOC_NORMAL);
    __str24 = allocate([ 102, 111, 114, 109, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    _s_unpack__doc__ = allocate([ 83, 46, 117, 110, 112, 97, 99, 107, 40, 115, 116, 114, 41, 32, 45, 62, 32, 40, 118, 49, 44, 32, 118, 50, 44, 32, 46, 46, 46, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 117, 112, 108, 101, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 118, 97, 108, 117, 101, 115, 32, 117, 110, 112, 97, 99, 107, 101, 100, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 116, 104, 105, 115, 32, 83, 116, 114, 117, 99, 116, 39, 115, 32, 102, 111, 114, 109, 97, 116, 46, 10, 82, 101, 113, 117, 105, 114, 101, 115, 32, 108, 101, 110, 40, 115, 116, 114, 41, 32, 61, 61, 32, 115, 101, 108, 102, 46, 115, 105, 122, 101, 46, 32, 83, 101, 101, 32, 115, 116, 114, 117, 99, 116, 46, 95, 95, 100, 111, 99, 95, 95, 32, 102, 111, 114, 32, 109, 111, 114, 101, 32, 111, 110, 32, 102, 111, 114, 109, 97, 116, 10, 115, 116, 114, 105, 110, 103, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9973 = allocate([ 115, 95, 117, 110, 112, 97, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 115, 111, 115, 101, 108, 102, 45, 62, 115, 95, 99, 111, 100, 101, 115, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 115, 35, 58, 117, 110, 112, 97, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 117, 110, 112, 97, 99, 107, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 111, 102, 32, 108, 101, 110, 103, 116, 104, 32, 37, 122, 100, 0 ], "i8", ALLOC_NORMAL);
    _s_unpack_from__doc__ = allocate([ 83, 46, 117, 110, 112, 97, 99, 107, 95, 102, 114, 111, 109, 40, 98, 117, 102, 102, 101, 114, 91, 44, 32, 111, 102, 102, 115, 101, 116, 93, 41, 32, 45, 62, 32, 40, 118, 49, 44, 32, 118, 50, 44, 32, 46, 46, 46, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 117, 112, 108, 101, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 118, 97, 108, 117, 101, 115, 32, 117, 110, 112, 97, 99, 107, 101, 100, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 116, 104, 105, 115, 32, 83, 116, 114, 117, 99, 116, 39, 115, 32, 102, 111, 114, 109, 97, 116, 46, 10, 85, 110, 108, 105, 107, 101, 32, 117, 110, 112, 97, 99, 107, 44, 32, 117, 110, 112, 97, 99, 107, 95, 102, 114, 111, 109, 32, 99, 97, 110, 32, 117, 110, 112, 97, 99, 107, 32, 118, 97, 108, 117, 101, 115, 32, 102, 114, 111, 109, 32, 97, 110, 121, 32, 111, 98, 106, 101, 99, 116, 32, 115, 117, 112, 112, 111, 114, 116, 105, 110, 103, 10, 116, 104, 101, 32, 98, 117, 102, 102, 101, 114, 32, 65, 80, 73, 44, 32, 110, 111, 116, 32, 106, 117, 115, 116, 32, 115, 116, 114, 46, 32, 82, 101, 113, 117, 105, 114, 101, 115, 32, 108, 101, 110, 40, 98, 117, 102, 102, 101, 114, 91, 111, 102, 102, 115, 101, 116, 58, 93, 41, 32, 62, 61, 32, 115, 101, 108, 102, 46, 115, 105, 122, 101, 46, 10, 83, 101, 101, 32, 115, 116, 114, 117, 99, 116, 46, 95, 95, 100, 111, 99, 95, 95, 32, 102, 111, 114, 32, 109, 111, 114, 101, 32, 111, 110, 32, 102, 111, 114, 109, 97, 116, 32, 115, 116, 114, 105, 110, 103, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10041 = allocate([ 115, 95, 117, 110, 112, 97, 99, 107, 95, 102, 114, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 122, 35, 124, 110, 58, 117, 110, 112, 97, 99, 107, 95, 102, 114, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_10035 = allocate(12, "i8*", ALLOC_NORMAL);
    __str29 = allocate([ 98, 117, 102, 102, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 111, 102, 102, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 117, 110, 112, 97, 99, 107, 95, 102, 114, 111, 109, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 32, 98, 117, 102, 102, 101, 114, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 117, 110, 112, 97, 99, 107, 95, 102, 114, 111, 109, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 32, 98, 117, 102, 102, 101, 114, 32, 111, 102, 32, 97, 116, 32, 108, 101, 97, 115, 116, 32, 37, 122, 100, 32, 98, 121, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 97, 114, 103, 117, 109, 101, 110, 116, 32, 102, 111, 114, 32, 39, 115, 39, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 97, 114, 103, 117, 109, 101, 110, 116, 32, 102, 111, 114, 32, 39, 112, 39, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 105, 110, 116, 101, 103, 101, 114, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 32, 102, 111, 114, 32, 39, 37, 99, 39, 32, 102, 111, 114, 109, 97, 116, 32, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    _s_pack__doc__ = allocate([ 83, 46, 112, 97, 99, 107, 40, 118, 49, 44, 32, 118, 50, 44, 32, 46, 46, 46, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 118, 97, 108, 117, 101, 115, 32, 118, 49, 44, 32, 118, 50, 44, 32, 46, 46, 46, 32, 112, 97, 99, 107, 101, 100, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 116, 104, 105, 115, 10, 83, 116, 114, 117, 99, 116, 39, 115, 32, 102, 111, 114, 109, 97, 116, 46, 32, 83, 101, 101, 32, 115, 116, 114, 117, 99, 116, 46, 95, 95, 100, 111, 99, 95, 95, 32, 102, 111, 114, 32, 109, 111, 114, 101, 32, 111, 110, 32, 102, 111, 114, 109, 97, 116, 32, 115, 116, 114, 105, 110, 103, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10174 = allocate([ 115, 95, 112, 97, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 112, 97, 99, 107, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 101, 120, 97, 99, 116, 108, 121, 32, 37, 122, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    _s_pack_into__doc__ = allocate([ 83, 46, 112, 97, 99, 107, 95, 105, 110, 116, 111, 40, 98, 117, 102, 102, 101, 114, 44, 32, 111, 102, 102, 115, 101, 116, 44, 32, 118, 49, 44, 32, 118, 50, 44, 32, 46, 46, 46, 41, 10, 10, 80, 97, 99, 107, 32, 116, 104, 101, 32, 118, 97, 108, 117, 101, 115, 32, 118, 49, 44, 32, 118, 50, 44, 32, 46, 46, 46, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 116, 104, 105, 115, 32, 83, 116, 114, 117, 99, 116, 39, 115, 32, 102, 111, 114, 109, 97, 116, 44, 32, 119, 114, 105, 116, 101, 32, 10, 116, 104, 101, 32, 112, 97, 99, 107, 101, 100, 32, 98, 121, 116, 101, 115, 32, 105, 110, 116, 111, 32, 116, 104, 101, 32, 119, 114, 105, 116, 97, 98, 108, 101, 32, 98, 117, 102, 102, 101, 114, 32, 98, 117, 102, 32, 115, 116, 97, 114, 116, 105, 110, 103, 32, 97, 116, 32, 111, 102, 102, 115, 101, 116, 46, 32, 32, 78, 111, 116, 101, 10, 116, 104, 97, 116, 32, 116, 104, 101, 32, 111, 102, 102, 115, 101, 116, 32, 105, 115, 32, 110, 111, 116, 32, 97, 110, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 117, 109, 101, 110, 116, 46, 32, 32, 83, 101, 101, 32, 115, 116, 114, 117, 99, 116, 46, 95, 95, 100, 111, 99, 95, 95, 32, 102, 111, 114, 32, 10, 109, 111, 114, 101, 32, 111, 110, 32, 102, 111, 114, 109, 97, 116, 32, 115, 116, 114, 105, 110, 103, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10219 = allocate([ 115, 95, 112, 97, 99, 107, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 112, 97, 99, 107, 95, 105, 110, 116, 111, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 101, 120, 97, 99, 116, 108, 121, 32, 37, 122, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 98, 117, 102, 102, 101, 114, 95, 108, 101, 110, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 112, 97, 99, 107, 95, 105, 110, 116, 111, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 32, 98, 117, 102, 102, 101, 114, 32, 111, 102, 32, 97, 116, 32, 108, 101, 97, 115, 116, 32, 37, 122, 100, 32, 98, 121, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 112, 97, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 112, 97, 99, 107, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 117, 110, 112, 97, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 117, 110, 112, 97, 99, 107, 95, 102, 114, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    _s_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _s__doc__ = allocate([ 67, 111, 109, 112, 105, 108, 101, 100, 32, 115, 116, 114, 117, 99, 116, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 115, 116, 114, 117, 99, 116, 32, 102, 111, 114, 109, 97, 116, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 115, 116, 114, 117, 99, 116, 32, 115, 105, 122, 101, 32, 105, 110, 32, 98, 121, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _s_getsetlist = allocate(60, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str47 = allocate([ 83, 116, 114, 117, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _PyStructType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _cache = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _clearcache_doc = allocate([ 67, 108, 101, 97, 114, 32, 116, 104, 101, 32, 105, 110, 116, 101, 114, 110, 97, 108, 32, 99, 97, 99, 104, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _calcsize_doc = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 105, 122, 101, 32, 111, 102, 32, 67, 32, 115, 116, 114, 117, 99, 116, 32, 100, 101, 115, 99, 114, 105, 98, 101, 100, 32, 98, 121, 32, 102, 111, 114, 109, 97, 116, 32, 115, 116, 114, 105, 110, 103, 32, 102, 109, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    _pack_doc = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 116, 114, 105, 110, 103, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 118, 97, 108, 117, 101, 115, 32, 118, 49, 44, 32, 118, 50, 44, 32, 46, 46, 46, 32, 112, 97, 99, 107, 101, 100, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 102, 109, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 109, 105, 115, 115, 105, 110, 103, 32, 102, 111, 114, 109, 97, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _pack_into_doc = allocate([ 80, 97, 99, 107, 32, 116, 104, 101, 32, 118, 97, 108, 117, 101, 115, 32, 118, 49, 44, 32, 118, 50, 44, 32, 46, 46, 46, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 102, 109, 116, 46, 10, 87, 114, 105, 116, 101, 32, 116, 104, 101, 32, 112, 97, 99, 107, 101, 100, 32, 98, 121, 116, 101, 115, 32, 105, 110, 116, 111, 32, 116, 104, 101, 32, 119, 114, 105, 116, 97, 98, 108, 101, 32, 98, 117, 102, 102, 101, 114, 32, 98, 117, 102, 32, 115, 116, 97, 114, 116, 105, 110, 103, 32, 97, 116, 32, 111, 102, 102, 115, 101, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    _unpack_doc = allocate([ 85, 110, 112, 97, 99, 107, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 112, 97, 99, 107, 101, 100, 32, 67, 32, 115, 116, 114, 117, 99, 116, 117, 114, 101, 32, 100, 97, 116, 97, 44, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 102, 109, 116, 46, 10, 82, 101, 113, 117, 105, 114, 101, 115, 32, 108, 101, 110, 40, 115, 116, 114, 105, 110, 103, 41, 32, 61, 61, 32, 99, 97, 108, 99, 115, 105, 122, 101, 40, 102, 109, 116, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _unpack_from_doc = allocate([ 85, 110, 112, 97, 99, 107, 32, 116, 104, 101, 32, 98, 117, 102, 102, 101, 114, 44, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 112, 97, 99, 107, 101, 100, 32, 67, 32, 115, 116, 114, 117, 99, 116, 117, 114, 101, 32, 100, 97, 116, 97, 44, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 10, 102, 109, 116, 44, 32, 115, 116, 97, 114, 116, 105, 110, 103, 32, 97, 116, 32, 111, 102, 102, 115, 101, 116, 46, 32, 82, 101, 113, 117, 105, 114, 101, 115, 32, 108, 101, 110, 40, 98, 117, 102, 102, 101, 114, 91, 111, 102, 102, 115, 101, 116, 58, 93, 41, 32, 62, 61, 32, 99, 97, 108, 99, 115, 105, 122, 101, 40, 102, 109, 116, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 95, 99, 108, 101, 97, 114, 99, 97, 99, 104, 101, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 99, 97, 108, 99, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    _module_functions = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_doc = allocate([ 70, 117, 110, 99, 116, 105, 111, 110, 115, 32, 116, 111, 32, 99, 111, 110, 118, 101, 114, 116, 32, 98, 101, 116, 119, 101, 101, 110, 32, 80, 121, 116, 104, 111, 110, 32, 118, 97, 108, 117, 101, 115, 32, 97, 110, 100, 32, 67, 32, 115, 116, 114, 117, 99, 116, 115, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 101, 100, 10, 97, 115, 32, 80, 121, 116, 104, 111, 110, 32, 115, 116, 114, 105, 110, 103, 115, 46, 32, 73, 116, 32, 117, 115, 101, 115, 32, 102, 111, 114, 109, 97, 116, 32, 115, 116, 114, 105, 110, 103, 115, 32, 40, 101, 120, 112, 108, 97, 105, 110, 101, 100, 32, 98, 101, 108, 111, 119, 41, 32, 97, 115, 32, 99, 111, 109, 112, 97, 99, 116, 10, 100, 101, 115, 99, 114, 105, 112, 116, 105, 111, 110, 115, 32, 111, 102, 32, 116, 104, 101, 32, 108, 97, 121, 45, 111, 117, 116, 32, 111, 102, 32, 116, 104, 101, 32, 67, 32, 115, 116, 114, 117, 99, 116, 115, 32, 97, 110, 100, 32, 116, 104, 101, 32, 105, 110, 116, 101, 110, 100, 101, 100, 32, 99, 111, 110, 118, 101, 114, 115, 105, 111, 110, 10, 116, 111, 47, 102, 114, 111, 109, 32, 80, 121, 116, 104, 111, 110, 32, 118, 97, 108, 117, 101, 115, 46, 10, 10, 84, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 102, 105, 114, 115, 116, 32, 102, 111, 114, 109, 97, 116, 32, 99, 104, 97, 114, 32, 105, 110, 100, 105, 99, 97, 116, 101, 115, 32, 98, 121, 116, 101, 32, 111, 114, 100, 101, 114, 44, 32, 115, 105, 122, 101, 32, 97, 110, 100, 32, 97, 108, 105, 103, 110, 109, 101, 110, 116, 58, 10, 32, 32, 64, 58, 32, 110, 97, 116, 105, 118, 101, 32, 111, 114, 100, 101, 114, 44, 32, 115, 105, 122, 101, 32, 38, 32, 97, 108, 105, 103, 110, 109, 101, 110, 116, 32, 40, 100, 101, 102, 97, 117, 108, 116, 41, 10, 32, 32, 61, 58, 32, 110, 97, 116, 105, 118, 101, 32, 111, 114, 100, 101, 114, 44, 32, 115, 116, 100, 46, 32, 115, 105, 122, 101, 32, 38, 32, 97, 108, 105, 103, 110, 109, 101, 110, 116, 10, 32, 32, 60, 58, 32, 108, 105, 116, 116, 108, 101, 45, 101, 110, 100, 105, 97, 110, 44, 32, 115, 116, 100, 46, 32, 115, 105, 122, 101, 32, 38, 32, 97, 108, 105, 103, 110, 109, 101, 110, 116, 10, 32, 32, 62, 58, 32, 98, 105, 103, 45, 101, 110, 100, 105, 97, 110, 44, 32, 115, 116, 100, 46, 32, 115, 105, 122, 101, 32, 38, 32, 97, 108, 105, 103, 110, 109, 101, 110, 116, 10, 32, 32, 33, 58, 32, 115, 97, 109, 101, 32, 97, 115, 32, 62, 10, 10, 84, 104, 101, 32, 114, 101, 109, 97, 105, 110, 105, 110, 103, 32, 99, 104, 97, 114, 115, 32, 105, 110, 100, 105, 99, 97, 116, 101, 32, 116, 121, 112, 101, 115, 32, 111, 102, 32, 97, 114, 103, 115, 32, 97, 110, 100, 32, 109, 117, 115, 116, 32, 109, 97, 116, 99, 104, 32, 101, 120, 97, 99, 116, 108, 121, 59, 10, 116, 104, 101, 115, 101, 32, 99, 97, 110, 32, 98, 101, 32, 112, 114, 101, 99, 101, 100, 101, 100, 32, 98, 121, 32, 97, 32, 100, 101, 99, 105, 109, 97, 108, 32, 114, 101, 112, 101, 97, 116, 32, 99, 111, 117, 110, 116, 58, 10, 32, 32, 120, 58, 32, 112, 97, 100, 32, 98, 121, 116, 101, 32, 40, 110, 111, 32, 100, 97, 116, 97, 41, 59, 32, 99, 58, 99, 104, 97, 114, 59, 32, 98, 58, 115, 105, 103, 110, 101, 100, 32, 98, 121, 116, 101, 59, 32, 66, 58, 117, 110, 115, 105, 103, 110, 101, 100, 32, 98, 121, 116, 101, 59, 10, 32, 32, 63, 58, 32, 95, 66, 111, 111, 108, 32, 40, 114, 101, 113, 117, 105, 114, 101, 115, 32, 67, 57, 57, 59, 32, 105, 102, 32, 110, 111, 116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 44, 32, 99, 104, 97, 114, 32, 105, 115, 32, 117, 115, 101, 100, 32, 105, 110, 115, 116, 101, 97, 100, 41, 10, 32, 32, 104, 58, 115, 104, 111, 114, 116, 59, 32, 72, 58, 117, 110, 115, 105, 103, 110, 101, 100, 32, 115, 104, 111, 114, 116, 59, 32, 105, 58, 105, 110, 116, 59, 32, 73, 58, 117, 110, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 59, 10, 32, 32, 108, 58, 108, 111, 110, 103, 59, 32, 76, 58, 117, 110, 115, 105, 103, 110, 101, 100, 32, 108, 111, 110, 103, 59, 32, 102, 58, 102, 108, 111, 97, 116, 59, 32, 100, 58, 100, 111, 117, 98, 108, 101, 46, 10, 83, 112, 101, 99, 105, 97, 108, 32, 99, 97, 115, 101, 115, 32, 40, 112, 114, 101, 99, 101, 100, 105, 110, 103, 32, 100, 101, 99, 105, 109, 97, 108, 32, 99, 111, 117, 110, 116, 32, 105, 110, 100, 105, 99, 97, 116, 101, 115, 32, 108, 101, 110, 103, 116, 104, 41, 58, 10, 32, 32, 115, 58, 115, 116, 114, 105, 110, 103, 32, 40, 97, 114, 114, 97, 121, 32, 111, 102, 32, 99, 104, 97, 114, 41, 59, 32, 112, 58, 32, 112, 97, 115, 99, 97, 108, 32, 115, 116, 114, 105, 110, 103, 32, 40, 119, 105, 116, 104, 32, 99, 111, 117, 110, 116, 32, 98, 121, 116, 101, 41, 46, 10, 83, 112, 101, 99, 105, 97, 108, 32, 99, 97, 115, 101, 32, 40, 111, 110, 108, 121, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 105, 110, 32, 110, 97, 116, 105, 118, 101, 32, 102, 111, 114, 109, 97, 116, 41, 58, 10, 32, 32, 80, 58, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 32, 116, 121, 112, 101, 32, 116, 104, 97, 116, 32, 105, 115, 32, 119, 105, 100, 101, 32, 101, 110, 111, 117, 103, 104, 32, 116, 111, 32, 104, 111, 108, 100, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 46, 10, 83, 112, 101, 99, 105, 97, 108, 32, 99, 97, 115, 101, 32, 40, 110, 111, 116, 32, 105, 110, 32, 110, 97, 116, 105, 118, 101, 32, 109, 111, 100, 101, 32, 117, 110, 108, 101, 115, 115, 32, 39, 108, 111, 110, 103, 32, 108, 111, 110, 103, 39, 32, 105, 110, 32, 112, 108, 97, 116, 102, 111, 114, 109, 32, 67, 41, 58, 10, 32, 32, 113, 58, 108, 111, 110, 103, 32, 108, 111, 110, 103, 59, 32, 81, 58, 117, 110, 115, 105, 103, 110, 101, 100, 32, 108, 111, 110, 103, 32, 108, 111, 110, 103, 10, 87, 104, 105, 116, 101, 115, 112, 97, 99, 101, 32, 98, 101, 116, 119, 101, 101, 110, 32, 102, 111, 114, 109, 97, 116, 115, 32, 105, 115, 32, 105, 103, 110, 111, 114, 101, 100, 46, 10, 10, 84, 104, 101, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 115, 116, 114, 117, 99, 116, 46, 101, 114, 114, 111, 114, 32, 105, 115, 32, 97, 110, 32, 101, 120, 99, 101, 112, 116, 105, 111, 110, 32, 114, 97, 105, 115, 101, 100, 32, 111, 110, 32, 101, 114, 114, 111, 114, 115, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 48, 46, 50, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 95, 115, 116, 114, 117, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 115, 116, 114, 117, 99, 116, 46, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 95, 95, 118, 101, 114, 115, 105, 111, 110, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 95, 80, 89, 95, 83, 84, 82, 85, 67, 84, 95, 82, 65, 78, 71, 69, 95, 67, 72, 69, 67, 75, 73, 78, 71, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 95, 80, 89, 95, 83, 84, 82, 85, 67, 84, 95, 70, 76, 79, 65, 84, 95, 67, 79, 69, 82, 67, 69, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_native_table + 32] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_native_table + 36] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_native_table + 52] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_native_table + 56] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_native_table + 72] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_native_table + 76] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_native_table + 132] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_native_table + 136] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_native_table + 152] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_native_table + 156] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_native_table + 172] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_native_table + 176] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_native_table + 192] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_native_table + 196] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_native_table + 212] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_native_table + 216] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_native_table + 232] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_native_table + 236] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_native_table + 252] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_native_table + 256] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_native_table + 272] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_native_table + 276] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_native_table + 292] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_native_table + 296] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_native_table + 312] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_native_table + 316] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_native_table + 332] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_native_table + 336] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_native_table + 352] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_native_table + 356] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_bigendian_table + 32] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_bigendian_table + 36] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_bigendian_table + 52] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_bigendian_table + 56] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_bigendian_table + 72] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_bigendian_table + 76] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_bigendian_table + 132] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_bigendian_table + 136] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_bigendian_table + 152] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_bigendian_table + 156] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_bigendian_table + 172] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_bigendian_table + 176] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_bigendian_table + 192] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_bigendian_table + 196] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_bigendian_table + 212] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_bigendian_table + 216] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_bigendian_table + 232] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_bigendian_table + 236] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_bigendian_table + 252] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_bigendian_table + 256] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_bigendian_table + 272] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_bigendian_table + 276] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_bigendian_table + 292] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_bigendian_table + 296] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_bigendian_table + 312] = FUNCTION_TABLE_OFFSET + 82;
    HEAP[_bigendian_table + 316] = FUNCTION_TABLE_OFFSET + 84;
    HEAP[_bigendian_table + 332] = FUNCTION_TABLE_OFFSET + 86;
    HEAP[_bigendian_table + 336] = FUNCTION_TABLE_OFFSET + 88;
    HEAP[_lilendian_table + 32] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_lilendian_table + 36] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_lilendian_table + 52] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_lilendian_table + 56] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_lilendian_table + 72] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_lilendian_table + 76] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_lilendian_table + 132] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_lilendian_table + 136] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_lilendian_table + 152] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_lilendian_table + 156] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_lilendian_table + 172] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_lilendian_table + 176] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_lilendian_table + 192] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_lilendian_table + 196] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_lilendian_table + 212] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_lilendian_table + 216] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_lilendian_table + 232] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_lilendian_table + 236] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_lilendian_table + 252] = FUNCTION_TABLE_OFFSET + 98;
    HEAP[_lilendian_table + 256] = FUNCTION_TABLE_OFFSET + 100;
    HEAP[_lilendian_table + 272] = FUNCTION_TABLE_OFFSET + 102;
    HEAP[_lilendian_table + 276] = FUNCTION_TABLE_OFFSET + 104;
    HEAP[_lilendian_table + 292] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_lilendian_table + 296] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_lilendian_table + 312] = FUNCTION_TABLE_OFFSET + 106;
    HEAP[_lilendian_table + 316] = FUNCTION_TABLE_OFFSET + 108;
    HEAP[_lilendian_table + 332] = FUNCTION_TABLE_OFFSET + 110;
    HEAP[_lilendian_table + 336] = FUNCTION_TABLE_OFFSET + 112;
    HEAP[_kwlist_9852] = __str24;
    HEAP[_kwlist_10035] = __str29;
    HEAP[_kwlist_10035 + 4] = __str30;
    HEAP[_s_methods] = __str40;
    HEAP[_s_methods + 4] = FUNCTION_TABLE_OFFSET + 114;
    HEAP[_s_methods + 12] = _s_pack__doc__;
    HEAP[_s_methods + 16] = __str41;
    HEAP[_s_methods + 20] = FUNCTION_TABLE_OFFSET + 116;
    HEAP[_s_methods + 28] = _s_pack_into__doc__;
    HEAP[_s_methods + 32] = __str42;
    HEAP[_s_methods + 36] = FUNCTION_TABLE_OFFSET + 118;
    HEAP[_s_methods + 44] = _s_unpack__doc__;
    HEAP[_s_methods + 48] = __str43;
    HEAP[_s_methods + 52] = FUNCTION_TABLE_OFFSET + 120;
    HEAP[_s_methods + 60] = _s_unpack_from__doc__;
    HEAP[_s_getsetlist] = __str24;
    HEAP[_s_getsetlist + 4] = FUNCTION_TABLE_OFFSET + 122;
    HEAP[_s_getsetlist + 12] = __str44;
    HEAP[_s_getsetlist + 20] = __str45;
    HEAP[_s_getsetlist + 24] = FUNCTION_TABLE_OFFSET + 124;
    HEAP[_s_getsetlist + 32] = __str46;
    HEAP[_PyStructType + 12] = __str47;
    HEAP[_PyStructType + 24] = FUNCTION_TABLE_OFFSET + 126;
    HEAP[_PyStructType + 72] = FUNCTION_TABLE_OFFSET + 128;
    HEAP[_PyStructType + 76] = FUNCTION_TABLE_OFFSET + 130;
    HEAP[_PyStructType + 88] = _s__doc__;
    HEAP[_PyStructType + 116] = _s_methods;
    HEAP[_PyStructType + 124] = _s_getsetlist;
    HEAP[_PyStructType + 148] = FUNCTION_TABLE_OFFSET + 132;
    HEAP[_PyStructType + 152] = FUNCTION_TABLE_OFFSET + 134;
    HEAP[_PyStructType + 156] = FUNCTION_TABLE_OFFSET + 136;
    HEAP[_PyStructType + 160] = FUNCTION_TABLE_OFFSET + 138;
    HEAP[_module_functions] = __str49;
    HEAP[_module_functions + 4] = FUNCTION_TABLE_OFFSET + 140;
    HEAP[_module_functions + 12] = _clearcache_doc;
    HEAP[_module_functions + 16] = __str50;
    HEAP[_module_functions + 20] = FUNCTION_TABLE_OFFSET + 142;
    HEAP[_module_functions + 28] = _calcsize_doc;
    HEAP[_module_functions + 32] = __str40;
    HEAP[_module_functions + 36] = FUNCTION_TABLE_OFFSET + 144;
    HEAP[_module_functions + 44] = _pack_doc;
    HEAP[_module_functions + 48] = __str41;
    HEAP[_module_functions + 52] = FUNCTION_TABLE_OFFSET + 146;
    HEAP[_module_functions + 60] = _pack_into_doc;
    HEAP[_module_functions + 64] = __str42;
    HEAP[_module_functions + 68] = FUNCTION_TABLE_OFFSET + 148;
    HEAP[_module_functions + 76] = _unpack_doc;
    HEAP[_module_functions + 80] = __str43;
    HEAP[_module_functions + 84] = FUNCTION_TABLE_OFFSET + 150;
    HEAP[_module_functions + 92] = _unpack_from_doc;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
