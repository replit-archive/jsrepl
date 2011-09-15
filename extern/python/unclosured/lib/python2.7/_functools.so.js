"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 80;
  var $1___SIZE = 20;
  var $2___SIZE = 40;
  var $3___SIZE = 20;
  var $4___SIZE = 48;
  var $5___SIZE = 16;
  var $6___SIZE = 16;
  var $7___SIZE = 196;
  var $8___SIZE = 32;
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
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_partialobject___SIZE = 28;
  var __str;
  var __str1;
  var __str2;
  var _reduce_doc;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var ___PRETTY_FUNCTION___8588;
  var __str7;
  var __str8;
  var _partial_doc;
  var __str9;
  var __str10;
  var __str11;
  var __str12;
  var __str13;
  var __str14;
  var _partial_memberlist;
  var __str15;
  var __str16;
  var __str17;
  var _partial_getsetlist;
  var __str18;
  var __str19;
  var __str20;
  var __str21;
  var _partial_methods;
  var __str22;
  var _partial_type;
  var _module_doc;
  var _module_methods;
  var __str23;
  var __str24;
  var ___PRETTY_FUNCTION___8886;
  function _functools_reduce($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $seq = __stackBase__;
      var $func = __stackBase__ + 4;
      var $result = __stackBase__ + 8;
      var $it;
      var $op2;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$result] = 0;
      
      var $2 = _PyArg_UnpackTuple($args_addr, __str, 2, 3, allocate([ $func, 0, 0, 0, $seq, 0, 0, 0, $result, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 35;
      break;
     case 2:
      
      
      if (HEAP[$result] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $9 = HEAP[HEAP[$result]] + 1;
      var $10 = HEAP[$result];
      HEAP[$10] = $9;
      __label__ = 4;
      break;
     case 4:
      var $11 = HEAP[$seq];
      var $12 = _PyObject_GetIter($11);
      $it = $12;
      
      if ($12 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      var $14 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($14, __str1);
      
      
      if (HEAP[$result] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      var $17 = HEAP[$result];
      
      
      var $20 = HEAP[$17] - 1;
      var $21 = $17;
      HEAP[$21] = $20;
      
      
      
      if (HEAP[$17] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $29 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $30 = HEAP[$result];
      FUNCTION_TABLE[$29]($30);
      __label__ = 8;
      break;
     case 8:
      $0 = 0;
      __label__ = 35;
      break;
     case 9:
      var $31 = _PyTuple_New(2);
      $args_addr = $31;
      
      
      if ($args_addr == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      if (HEAP[$args_addr] > 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      var $41 = HEAP[$args_addr] - 1;
      
      
      HEAP[$args_addr] = $41;
      
      
      
      
      if (HEAP[$args_addr] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $52 = HEAP[HEAP[$args_addr + 4] + 24];
      
      FUNCTION_TABLE[$52]($args_addr);
      __label__ = 13;
      break;
     case 13:
      var $54 = _PyTuple_New(2);
      $args_addr = $54;
      
      if ($54 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      var $57 = _PyIter_Next($it);
      $op2 = $57;
      
      if ($57 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      var $59 = _PyErr_Occurred();
      
      if ($59 != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      var $64 = HEAP[$args_addr] - 1;
      
      
      HEAP[$args_addr] = $64;
      
      
      
      
      if (HEAP[$args_addr] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 17:
      
      
      if (HEAP[$result] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      HEAP[$result] = $op2;
      __label__ = 10;
      break;
     case 19:
      var $74 = HEAP[$result];
      
      var $76 = _PyTuple_SetItem($args_addr, 0, $74);
      
      
      var $79 = _PyTuple_SetItem($args_addr, 1, $op2);
      var $80 = HEAP[$func];
      
      var $82 = _PyEval_CallObjectWithKeywords($80, $args_addr, 0);
      HEAP[$result] = $82;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 20:
      
      
      
      
      var $89 = HEAP[HEAP[$args_addr + 4] + 24];
      
      FUNCTION_TABLE[$89]($args_addr);
      __label__ = 21;
      break;
     case 21:
      
      
      if (HEAP[$result] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      var $93 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($93, __str2);
      __label__ = 23;
      break;
     case 23:
      
      
      
      var $97 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $97;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $108 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$108]($it);
      __label__ = 25;
      break;
     case 25:
      
      $0 = HEAP[$result];
      __label__ = 35;
      break;
     case 26:
      
      
      if ($args_addr != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 27:
      
      
      
      var $115 = HEAP[$args_addr] - 1;
      
      
      HEAP[$args_addr] = $115;
      
      
      
      
      if (HEAP[$args_addr] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $126 = HEAP[HEAP[$args_addr + 4] + 24];
      
      FUNCTION_TABLE[$126]($args_addr);
      __label__ = 29;
      break;
     case 29:
      
      
      if (HEAP[$result] != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      var $130 = HEAP[$result];
      
      
      var $133 = HEAP[$130] - 1;
      var $134 = $130;
      HEAP[$134] = $133;
      
      
      
      if (HEAP[$130] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $142 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $143 = HEAP[$result];
      FUNCTION_TABLE[$142]($143);
      __label__ = 32;
      break;
     case 32:
      
      
      
      var $147 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $147;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $158 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$158]($it);
      __label__ = 34;
      break;
     case 34:
      $0 = 0;
      __label__ = 35;
      break;
     case 35:
      
      $retval = $0;
      var $retval35 = $retval;
      STACKTOP = __stackBase__;
      return $retval35;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _partial_new($type, $args, $kw) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $func;
      var $pto;
      $type_addr = $type;
      $args_addr = $args;
      $kw_addr = $kw;
      
      
      
      
      
      if (HEAP[$args_addr + 8] <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $6 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($6, __str3);
      $0 = 0;
      __label__ = 17;
      break;
     case 2:
      
      
      
      
      
      $func = HEAP[$args_addr + 12];
      
      var $13 = _PyCallable_Check($func);
      
      if ($13 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $15 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($15, __str4);
      $0 = 0;
      __label__ = 17;
      break;
     case 4:
      
      
      var $18 = HEAP[$type_addr + 152];
      
      var $20 = FUNCTION_TABLE[$18]($type_addr, 0);
      
      $pto = $20;
      
      
      if ($pto == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 17;
      break;
     case 6:
      
      
      
      HEAP[$pto + 8] = $func;
      
      
      
      var $30 = HEAP[$func] + 1;
      
      
      HEAP[$func] = $30;
      
      var $34 = _PyTuple_GetSlice($args_addr, 1, 2147483647);
      
      
      HEAP[$pto + 12] = $34;
      
      
      
      
      if (HEAP[$pto + 12] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      HEAP[$pto + 16] = 0;
      
      
      
      
      var $47 = HEAP[$pto] - 1;
      
      HEAP[$pto] = $47;
      
      
      
      if (HEAP[$pto] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $57 = HEAP[HEAP[$pto + 4] + 24];
      
      
      FUNCTION_TABLE[$57]($pto);
      __label__ = 9;
      break;
     case 9:
      $0 = 0;
      __label__ = 17;
      break;
     case 10:
      
      
      if ($kw_addr != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      var $63 = _PyDict_Copy($kw_addr);
      
      
      HEAP[$pto + 16] = $63;
      
      
      
      
      if (HEAP[$pto + 16] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 12:
      
      
      
      
      var $74 = HEAP[$pto] - 1;
      
      HEAP[$pto] = $74;
      
      
      
      if (HEAP[$pto] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      var $84 = HEAP[HEAP[$pto + 4] + 24];
      
      
      FUNCTION_TABLE[$84]($pto);
      __label__ = 14;
      break;
     case 14:
      $0 = 0;
      __label__ = 17;
      break;
     case 15:
      
      
      HEAP[$pto + 16] = __Py_NoneStruct;
      
      var $90 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $90;
      __label__ = 16;
      break;
     case 16:
      
      
      HEAP[$pto + 24] = 0;
      
      
      HEAP[$pto + 20] = 0;
      
      
      $0 = $pto;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval18 = $retval;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _partial_dealloc($pto) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pto_addr;
      $pto_addr = $pto;
      
      
      _PyObject_GC_UnTrack($pto_addr);
      
      
      
      
      if (HEAP[$pto_addr + 24] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      _PyObject_ClearWeakRefs($pto_addr);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[$pto_addr + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $14 = HEAP[$pto_addr + 8];
      
      
      var $17 = HEAP[$14] - 1;
      var $18 = $14;
      HEAP[$18] = $17;
      
      
      
      if (HEAP[$14] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $28 = HEAP[HEAP[HEAP[$pto_addr + 8] + 4] + 24];
      
      
      var $31 = HEAP[$pto_addr + 8];
      FUNCTION_TABLE[$28]($31);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[$pto_addr + 12] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $38 = HEAP[$pto_addr + 12];
      
      
      var $41 = HEAP[$38] - 1;
      var $42 = $38;
      HEAP[$42] = $41;
      
      
      
      if (HEAP[$38] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $52 = HEAP[HEAP[HEAP[$pto_addr + 12] + 4] + 24];
      
      
      var $55 = HEAP[$pto_addr + 12];
      FUNCTION_TABLE[$52]($55);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      if (HEAP[$pto_addr + 16] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      var $62 = HEAP[$pto_addr + 16];
      
      
      var $65 = HEAP[$62] - 1;
      var $66 = $62;
      HEAP[$66] = $65;
      
      
      
      if (HEAP[$62] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      var $76 = HEAP[HEAP[HEAP[$pto_addr + 16] + 4] + 24];
      
      
      var $79 = HEAP[$pto_addr + 16];
      FUNCTION_TABLE[$76]($79);
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      if (HEAP[$pto_addr + 20] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      var $86 = HEAP[$pto_addr + 20];
      
      
      var $89 = HEAP[$86] - 1;
      var $90 = $86;
      HEAP[$90] = $89;
      
      
      
      if (HEAP[$86] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      
      var $100 = HEAP[HEAP[HEAP[$pto_addr + 20] + 4] + 24];
      
      
      var $103 = HEAP[$pto_addr + 20];
      FUNCTION_TABLE[$100]($103);
      __label__ = 14;
      break;
     case 14:
      
      
      
      
      
      var $109 = HEAP[HEAP[$pto_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$109]($pto_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _partial_call($pto, $args, $kw) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pto_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $ret;
      var $argappl;
      var $kwappl;
      $pto_addr = $pto;
      $args_addr = $args;
      $kw_addr = $kw;
      $argappl = 0;
      $kwappl = 0;
      
      
      var $3 = HEAP[$pto_addr + 8];
      var $4 = _PyCallable_Check($3);
      
      if ($4 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str5, __str6, 171, ___PRETTY_FUNCTION___8588);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$pto_addr + 12] + 4] + 84] & 67108864) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str7, __str6, 172, ___PRETTY_FUNCTION___8588);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      
      if (HEAP[$pto_addr + 16] != __Py_NoneStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$pto_addr + 16] + 4] + 84] & 536870912) == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      ___assert_fail(__str8, __str6, 173, ___PRETTY_FUNCTION___8588);
      throw "Reached an unreachable!";
     case 7:
      
      
      
      
      
      
      
      var $35 = $args_addr;
      if (HEAP[HEAP[$pto_addr + 12] + 8] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $argappl = $35;
      
      
      
      var $39 = HEAP[$args_addr] + 1;
      
      
      HEAP[$args_addr] = $39;
      __label__ = 13;
      break;
     case 9:
      
      
      
      
      
      
      var $48 = HEAP[$pto_addr + 12];
      if (HEAP[$35 + 8] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $argappl = $48;
      
      
      
      
      
      var $54 = HEAP[HEAP[$pto_addr + 12]] + 1;
      var $55 = HEAP[$pto_addr + 12];
      HEAP[$55] = $54;
      __label__ = 13;
      break;
     case 11:
      
      var $57 = _PySequence_Concat($48, $args_addr);
      $argappl = $57;
      
      
      if ($argappl == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = 0;
      __label__ = 33;
      break;
     case 13:
      
      
      
      
      if (HEAP[$pto_addr + 16] == __Py_NoneStruct) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      $kwappl = $kw_addr;
      
      
      if ($kw_addr != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 15:
      
      
      
      var $70 = HEAP[$kw_addr] + 1;
      
      
      HEAP[$kw_addr] = $70;
      __label__ = 27;
      break;
     case 16:
      
      
      var $75 = HEAP[$pto_addr + 16];
      var $76 = _PyDict_Copy($75);
      $kwappl = $76;
      
      
      if ($kwappl == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      
      
      
      var $82 = HEAP[$argappl] - 1;
      
      
      HEAP[$argappl] = $82;
      
      
      
      
      if (HEAP[$argappl] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $93 = HEAP[HEAP[$argappl + 4] + 24];
      
      FUNCTION_TABLE[$93]($argappl);
      __label__ = 19;
      break;
     case 19:
      $0 = 0;
      __label__ = 33;
      break;
     case 20:
      
      
      if ($kw_addr != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 21:
      
      
      var $99 = _PyDict_Merge($kwappl, $kw_addr, 1);
      
      if ($99 != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 22:
      
      
      
      var $104 = HEAP[$argappl] - 1;
      
      
      HEAP[$argappl] = $104;
      
      
      
      
      if (HEAP[$argappl] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $115 = HEAP[HEAP[$argappl + 4] + 24];
      
      FUNCTION_TABLE[$115]($argappl);
      __label__ = 24;
      break;
     case 24:
      
      
      
      var $120 = HEAP[$kwappl] - 1;
      
      
      HEAP[$kwappl] = $120;
      
      
      
      
      if (HEAP[$kwappl] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $131 = HEAP[HEAP[$kwappl + 4] + 24];
      
      FUNCTION_TABLE[$131]($kwappl);
      __label__ = 26;
      break;
     case 26:
      $0 = 0;
      __label__ = 33;
      break;
     case 27:
      
      
      var $135 = HEAP[$pto_addr + 8];
      
      
      var $138 = _PyObject_Call($135, $argappl, $kwappl);
      $ret = $138;
      
      
      
      var $142 = HEAP[$argappl] - 1;
      
      
      HEAP[$argappl] = $142;
      
      
      
      
      if (HEAP[$argappl] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $153 = HEAP[HEAP[$argappl + 4] + 24];
      
      FUNCTION_TABLE[$153]($argappl);
      __label__ = 29;
      break;
     case 29:
      
      
      if ($kwappl != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      
      
      
      var $160 = HEAP[$kwappl] - 1;
      
      
      HEAP[$kwappl] = $160;
      
      
      
      
      if (HEAP[$kwappl] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $171 = HEAP[HEAP[$kwappl + 4] + 24];
      
      FUNCTION_TABLE[$171]($kwappl);
      __label__ = 32;
      break;
     case 32:
      
      $0 = $ret;
      __label__ = 33;
      break;
     case 33:
      
      $retval = $0;
      var $retval34 = $retval;
      return $retval34;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _partial_traverse($pto, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pto_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      var $vret8;
      var $vret12;
      $pto_addr = $pto;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$pto_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$pto_addr + 8];
      var $8 = $visit_addr;
      
      var $10 = FUNCTION_TABLE[$8]($7, $arg_addr);
      $vret = $10;
      
      
      if ($vret != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      $0 = $vret;
      __label__ = 13;
      break;
     case 3:
      
      
      
      
      if (HEAP[$pto_addr + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$pto_addr + 12];
      var $21 = $visit_addr;
      
      var $23 = FUNCTION_TABLE[$21]($20, $arg_addr);
      $vret4 = $23;
      
      
      if ($vret4 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      $0 = $vret4;
      __label__ = 13;
      break;
     case 6:
      
      
      
      
      if (HEAP[$pto_addr + 16] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $33 = HEAP[$pto_addr + 16];
      var $34 = $visit_addr;
      
      var $36 = FUNCTION_TABLE[$34]($33, $arg_addr);
      $vret8 = $36;
      
      
      if ($vret8 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      $0 = $vret8;
      __label__ = 13;
      break;
     case 9:
      
      
      
      
      if (HEAP[$pto_addr + 20] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $46 = HEAP[$pto_addr + 20];
      var $47 = $visit_addr;
      
      var $49 = FUNCTION_TABLE[$47]($46, $arg_addr);
      $vret12 = $49;
      
      
      if ($vret12 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      $0 = $vret12;
      __label__ = 13;
      break;
     case 12:
      $0 = 0;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval16 = $retval;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _partial_get_dict($pto) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pto_addr;
      var $retval;
      var $0;
      $pto_addr = $pto;
      
      
      
      
      if (HEAP[$pto_addr + 20] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyDict_New();
      
      
      HEAP[$pto_addr + 20] = $5;
      
      
      
      
      if (HEAP[$pto_addr + 20] == 0) {
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
      
      
      
      
      
      var $17 = HEAP[HEAP[$pto_addr + 20]] + 1;
      var $18 = HEAP[$pto_addr + 20];
      HEAP[$18] = $17;
      
      
      
      $0 = HEAP[$pto_addr + 20];
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
  function _partial_set_dict($pto, $value) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pto_addr;
      var $value_addr;
      var $retval;
      var $0;
      var $tmp;
      $pto_addr = $pto;
      $value_addr = $value;
      
      
      if ($value_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($3, __str15);
      $0 = -1;
      __label__ = 8;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$value_addr + 4] + 84] & 536870912) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($11, __str16);
      $0 = -1;
      __label__ = 8;
      break;
     case 4:
      
      
      
      $tmp = HEAP[$pto_addr + 20];
      
      
      
      var $18 = HEAP[$value_addr] + 1;
      
      
      HEAP[$value_addr] = $18;
      
      
      
      HEAP[$pto_addr + 20] = $value_addr;
      
      
      if ($tmp != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      var $29 = HEAP[$tmp] - 1;
      
      
      HEAP[$tmp] = $29;
      
      
      
      
      if (HEAP[$tmp] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $40 = HEAP[HEAP[$tmp + 4] + 24];
      
      FUNCTION_TABLE[$40]($tmp);
      __label__ = 7;
      break;
     case 7:
      $0 = 0;
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
  function _partial_reduce($pto, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pto_addr;
      var $unused_addr;
      var $retval;
      var $iftmp_33;
      var $0;
      $pto_addr = $pto;
      $unused_addr = $unused;
      
      
      
      
      if (HEAP[$pto_addr + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $iftmp_33 = HEAP[$pto_addr + 20];
      __label__ = 3;
      break;
     case 2:
      $iftmp_33 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      
      
      var $10 = HEAP[$pto_addr + 16];
      
      
      var $13 = HEAP[$pto_addr + 12];
      
      
      var $16 = HEAP[$pto_addr + 8];
      
      
      var $19 = HEAP[$pto_addr + 8];
      
      
      
      var $23 = HEAP[$pto_addr + 4];
      
      var $25 = _Py_BuildValue(__str18, allocate([ $23, 0, 0, 0, $19, 0, 0, 0, $16, 0, 0, 0, $13, 0, 0, 0, $10, 0, 0, 0, $iftmp_33, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $25;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _partial_setstate($pto, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pto_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $fn = __stackBase__;
      var $fnargs = __stackBase__ + 4;
      var $kw = __stackBase__ + 8;
      var $dict = __stackBase__ + 12;
      $pto_addr = $pto;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str19, allocate([ $fn, 0, 0, 0, $fnargs, 0, 0, 0, $kw, 0, 0, 0, $dict, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 18;
      break;
     case 2:
      
      
      
      
      if (HEAP[$pto_addr + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $10 = HEAP[$pto_addr + 8];
      
      
      var $13 = HEAP[$10] - 1;
      var $14 = $10;
      HEAP[$14] = $13;
      
      
      
      if (HEAP[$10] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[$pto_addr + 8] + 4] + 24];
      
      
      var $27 = HEAP[$pto_addr + 8];
      FUNCTION_TABLE[$24]($27);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[$pto_addr + 12] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $34 = HEAP[$pto_addr + 12];
      
      
      var $37 = HEAP[$34] - 1;
      var $38 = $34;
      HEAP[$38] = $37;
      
      
      
      if (HEAP[$34] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $48 = HEAP[HEAP[HEAP[$pto_addr + 12] + 4] + 24];
      
      
      var $51 = HEAP[$pto_addr + 12];
      FUNCTION_TABLE[$48]($51);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      if (HEAP[$pto_addr + 16] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      var $58 = HEAP[$pto_addr + 16];
      
      
      var $61 = HEAP[$58] - 1;
      var $62 = $58;
      HEAP[$62] = $61;
      
      
      
      if (HEAP[$58] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      var $72 = HEAP[HEAP[HEAP[$pto_addr + 16] + 4] + 24];
      
      
      var $75 = HEAP[$pto_addr + 16];
      FUNCTION_TABLE[$72]($75);
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      if (HEAP[$pto_addr + 20] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      var $82 = HEAP[$pto_addr + 20];
      
      
      var $85 = HEAP[$82] - 1;
      var $86 = $82;
      HEAP[$86] = $85;
      
      
      
      if (HEAP[$82] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      
      var $96 = HEAP[HEAP[HEAP[$pto_addr + 20] + 4] + 24];
      
      
      var $99 = HEAP[$pto_addr + 20];
      FUNCTION_TABLE[$96]($99);
      __label__ = 14;
      break;
     case 14:
      var $100 = HEAP[$fn];
      
      
      HEAP[$pto_addr + 8] = $100;
      var $103 = HEAP[$fnargs];
      
      
      HEAP[$pto_addr + 12] = $103;
      var $106 = HEAP[$kw];
      
      
      HEAP[$pto_addr + 16] = $106;
      
      
      if (HEAP[$dict] != __Py_NoneStruct) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $111 = HEAP[$dict];
      
      
      HEAP[$pto_addr + 20] = $111;
      
      
      
      var $117 = HEAP[HEAP[$dict]] + 1;
      var $118 = HEAP[$dict];
      HEAP[$118] = $117;
      __label__ = 17;
      break;
     case 16:
      
      
      HEAP[$pto_addr + 20] = 0;
      __label__ = 17;
      break;
     case 17:
      
      
      
      var $124 = HEAP[HEAP[$fn]] + 1;
      var $125 = HEAP[$fn];
      HEAP[$125] = $124;
      
      
      
      var $129 = HEAP[HEAP[$fnargs]] + 1;
      var $130 = HEAP[$fnargs];
      HEAP[$130] = $129;
      
      
      
      var $134 = HEAP[HEAP[$kw]] + 1;
      var $135 = HEAP[$kw];
      HEAP[$135] = $134;
      
      var $137 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $137;
      $0 = __Py_NoneStruct;
      __label__ = 18;
      break;
     case 18:
      
      $retval = $0;
      var $retval18 = $retval;
      STACKTOP = __stackBase__;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _init_functools() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $i;
      var $m;
      var $name;
      var $typelist = __stackBase__;
      
      HEAP[$typelist] = _partial_type;
      
      HEAP[$typelist + 4] = 0;
      var $2 = _Py_InitModule4(__str23, _module_methods, _module_doc, 0, 1013);
      $m = $2;
      
      
      if ($m == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      $i = 0;
      __label__ = 6;
      break;
     case 2:
      
      
      var $7 = HEAP[$typelist + $i * 4];
      var $8 = _PyType_Ready($7);
      
      if ($8 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      var $14 = HEAP[HEAP[$typelist + $i * 4] + 12];
      var $15 = _strchr($14, 46);
      $name = $15;
      
      
      if ($name == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str24, __str6, 398, ___PRETTY_FUNCTION___8886);
      throw "Reached an unreachable!";
     case 5:
      
      
      
      
      
      
      var $24 = HEAP[HEAP[$typelist + $i * 4]] + 1;
      var $25 = HEAP[$typelist + $i * 4];
      HEAP[$25] = $24;
      
      
      
      var $29 = HEAP[$typelist + $i * 4];
      
      
      
      var $33 = _PyModule_AddObject($m, $name + 1, $29);
      
      var $35 = $i + 1;
      $i = $35;
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$typelist + $i * 4] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_functools"] = _init_functools;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _partial_get_dict, 0, _partial_set_dict, 0, _partial_reduce, 0, _partial_setstate, 0, _partial_dealloc, 0, _partial_call, 0, _PyObject_GenericGetAttr, 0, _PyObject_GenericSetAttr, 0, _partial_traverse, 0, _partial_new, 0, _PyObject_GC_Del, 0, _functools_reduce, 0 ]);
  function run(args) {
    __str = allocate([ 114, 101, 100, 117, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 114, 101, 100, 117, 99, 101, 40, 41, 32, 97, 114, 103, 32, 50, 32, 109, 117, 115, 116, 32, 115, 117, 112, 112, 111, 114, 116, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 114, 101, 100, 117, 99, 101, 40, 41, 32, 111, 102, 32, 101, 109, 112, 116, 121, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 119, 105, 116, 104, 32, 110, 111, 32, 105, 110, 105, 116, 105, 97, 108, 32, 118, 97, 108, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    _reduce_doc = allocate([ 114, 101, 100, 117, 99, 101, 40, 102, 117, 110, 99, 116, 105, 111, 110, 44, 32, 115, 101, 113, 117, 101, 110, 99, 101, 91, 44, 32, 105, 110, 105, 116, 105, 97, 108, 93, 41, 32, 45, 62, 32, 118, 97, 108, 117, 101, 10, 10, 65, 112, 112, 108, 121, 32, 97, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 111, 102, 32, 116, 119, 111, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 99, 117, 109, 117, 108, 97, 116, 105, 118, 101, 108, 121, 32, 116, 111, 32, 116, 104, 101, 32, 105, 116, 101, 109, 115, 32, 111, 102, 32, 97, 32, 115, 101, 113, 117, 101, 110, 99, 101, 44, 10, 102, 114, 111, 109, 32, 108, 101, 102, 116, 32, 116, 111, 32, 114, 105, 103, 104, 116, 44, 32, 115, 111, 32, 97, 115, 32, 116, 111, 32, 114, 101, 100, 117, 99, 101, 32, 116, 104, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 116, 111, 32, 97, 32, 115, 105, 110, 103, 108, 101, 32, 118, 97, 108, 117, 101, 46, 10, 70, 111, 114, 32, 101, 120, 97, 109, 112, 108, 101, 44, 32, 114, 101, 100, 117, 99, 101, 40, 108, 97, 109, 98, 100, 97, 32, 120, 44, 32, 121, 58, 32, 120, 43, 121, 44, 32, 91, 49, 44, 32, 50, 44, 32, 51, 44, 32, 52, 44, 32, 53, 93, 41, 32, 99, 97, 108, 99, 117, 108, 97, 116, 101, 115, 10, 40, 40, 40, 40, 49, 43, 50, 41, 43, 51, 41, 43, 52, 41, 43, 53, 41, 46, 32, 32, 73, 102, 32, 105, 110, 105, 116, 105, 97, 108, 32, 105, 115, 32, 112, 114, 101, 115, 101, 110, 116, 44, 32, 105, 116, 32, 105, 115, 32, 112, 108, 97, 99, 101, 100, 32, 98, 101, 102, 111, 114, 101, 32, 116, 104, 101, 32, 105, 116, 101, 109, 115, 10, 111, 102, 32, 116, 104, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 105, 110, 32, 116, 104, 101, 32, 99, 97, 108, 99, 117, 108, 97, 116, 105, 111, 110, 44, 32, 97, 110, 100, 32, 115, 101, 114, 118, 101, 115, 32, 97, 115, 32, 97, 32, 100, 101, 102, 97, 117, 108, 116, 32, 119, 104, 101, 110, 32, 116, 104, 101, 10, 115, 101, 113, 117, 101, 110, 99, 101, 32, 105, 115, 32, 101, 109, 112, 116, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 116, 121, 112, 101, 32, 39, 112, 97, 114, 116, 105, 97, 108, 39, 32, 116, 97, 107, 101, 115, 32, 97, 116, 32, 108, 101, 97, 115, 116, 32, 111, 110, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 116, 104, 101, 32, 102, 105, 114, 115, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 99, 97, 108, 108, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 80, 121, 67, 97, 108, 108, 97, 98, 108, 101, 95, 67, 104, 101, 99, 107, 40, 112, 116, 111, 45, 62, 102, 110, 41, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 95, 102, 117, 110, 99, 116, 111, 111, 108, 115, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8588 = allocate([ 112, 97, 114, 116, 105, 97, 108, 95, 99, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 112, 116, 111, 45, 62, 97, 114, 103, 115, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 54, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 112, 116, 111, 45, 62, 107, 119, 32, 61, 61, 32, 40, 38, 95, 80, 121, 95, 78, 111, 110, 101, 83, 116, 114, 117, 99, 116, 41, 32, 124, 124, 32, 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 112, 116, 111, 45, 62, 107, 119, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 57, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    _partial_doc = allocate([ 112, 97, 114, 116, 105, 97, 108, 40, 102, 117, 110, 99, 44, 32, 42, 97, 114, 103, 115, 44, 32, 42, 42, 107, 101, 121, 119, 111, 114, 100, 115, 41, 32, 45, 32, 110, 101, 119, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 119, 105, 116, 104, 32, 112, 97, 114, 116, 105, 97, 108, 32, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 10, 32, 32, 32, 32, 111, 102, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 97, 110, 100, 32, 107, 101, 121, 119, 111, 114, 100, 115, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 102, 117, 110, 99, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 102, 117, 110, 99, 116, 105, 111, 110, 32, 111, 98, 106, 101, 99, 116, 32, 116, 111, 32, 117, 115, 101, 32, 105, 110, 32, 102, 117, 116, 117, 114, 101, 32, 112, 97, 114, 116, 105, 97, 108, 32, 99, 97, 108, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 97, 114, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 116, 117, 112, 108, 101, 32, 111, 102, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 116, 111, 32, 102, 117, 116, 117, 114, 101, 32, 112, 97, 114, 116, 105, 97, 108, 32, 99, 97, 108, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 107, 101, 121, 119, 111, 114, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 32, 111, 102, 32, 107, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 116, 111, 32, 102, 117, 116, 117, 114, 101, 32, 112, 97, 114, 116, 105, 97, 108, 32, 99, 97, 108, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    _partial_memberlist = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str15 = allocate([ 97, 32, 112, 97, 114, 116, 105, 97, 108, 32, 111, 98, 106, 101, 99, 116, 39, 115, 32, 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 32, 109, 97, 121, 32, 110, 111, 116, 32, 98, 101, 32, 100, 101, 108, 101, 116, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 115, 101, 116, 116, 105, 110, 103, 32, 112, 97, 114, 116, 105, 97, 108, 32, 111, 98, 106, 101, 99, 116, 39, 115, 32, 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 32, 116, 111, 32, 97, 32, 110, 111, 110, 45, 100, 105, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 95, 95, 100, 105, 99, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _partial_getsetlist = allocate(40, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str18 = allocate([ 79, 40, 79, 41, 40, 79, 79, 79, 79, 41, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 40, 79, 79, 79, 79, 41, 58, 95, 95, 115, 101, 116, 115, 116, 97, 116, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 95, 95, 115, 101, 116, 115, 116, 97, 116, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _partial_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str22 = allocate([ 102, 117, 110, 99, 116, 111, 111, 108, 115, 46, 112, 97, 114, 116, 105, 97, 108, 0 ], "i8", ALLOC_NORMAL);
    _partial_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_doc = allocate([ 84, 111, 111, 108, 115, 32, 116, 104, 97, 116, 32, 111, 112, 101, 114, 97, 116, 101, 32, 111, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _module_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str23 = allocate([ 95, 102, 117, 110, 99, 116, 111, 111, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 110, 97, 109, 101, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8886 = allocate([ 105, 110, 105, 116, 95, 102, 117, 110, 99, 116, 111, 111, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_partial_memberlist] = __str9;
    HEAP[_partial_memberlist + 16] = __str10;
    HEAP[_partial_memberlist + 20] = __str11;
    HEAP[_partial_memberlist + 36] = __str12;
    HEAP[_partial_memberlist + 40] = __str13;
    HEAP[_partial_memberlist + 56] = __str14;
    HEAP[_partial_getsetlist] = __str17;
    HEAP[_partial_getsetlist + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_partial_getsetlist + 8] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_partial_methods] = __str20;
    HEAP[_partial_methods + 4] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_partial_methods + 16] = __str21;
    HEAP[_partial_methods + 20] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_partial_type + 12] = __str22;
    HEAP[_partial_type + 24] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_partial_type + 64] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_partial_type + 72] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_partial_type + 76] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_partial_type + 88] = _partial_doc;
    HEAP[_partial_type + 92] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_partial_type + 116] = _partial_methods;
    HEAP[_partial_type + 120] = _partial_memberlist;
    HEAP[_partial_type + 124] = _partial_getsetlist;
    HEAP[_partial_type + 156] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_partial_type + 160] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_module_methods] = __str;
    HEAP[_module_methods + 4] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_module_methods + 12] = _reduce_doc;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
