"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 40;
  var $1___SIZE = 20;
  var $2___SIZE = 20;
  var $3___SIZE = 240;
  var $4___SIZE = 16;
  var $5___SIZE = 196;
  var $6___SIZE = 32;
  var $7___SIZE = 196;
  var $8___SIZE = 80;
  var $9___SIZE = 16;
  var $10___SIZE = 40;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyDictEntry___SIZE = 12;
  var $struct_PyDictObject___SIZE = 124;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_block___SIZE = 256;
  var $struct_defdictobject___SIZE = 128;
  var $struct_dequeiterobject___SIZE = 28;
  var $struct_dequeobject___SIZE = 40;
  var _numfreeblocks;
  var __str;
  var _freeblocks;
  var __str1;
  var __str2;
  var __str3;
  var ___PRETTY_FUNCTION___8417;
  var __str4;
  var __str5;
  var _pop_doc;
  var __str6;
  var ___PRETTY_FUNCTION___8461;
  var __str7;
  var _popleft_doc;
  var __str8;
  var ___PRETTY_FUNCTION___8509;
  var __str9;
  var _append_doc;
  var __str10;
  var ___PRETTY_FUNCTION___8564;
  var _appendleft_doc;
  var ___PRETTY_FUNCTION___8652;
  var _extend_doc;
  var ___PRETTY_FUNCTION___8758;
  var _extendleft_doc;
  var __str11;
  var ___PRETTY_FUNCTION___8884;
  var __str12;
  var _rotate_doc;
  var __str13;
  var ___PRETTY_FUNCTION___8974;
  var _reverse_doc;
  var __str14;
  var _count_doc;
  var __str15;
  var __str16;
  var ___PRETTY_FUNCTION___9049;
  var __str17;
  var _remove_doc;
  var ___PRETTY_FUNCTION___9087;
  var __str18;
  var __str19;
  var __str20;
  var ___PRETTY_FUNCTION___9162;
  var __str21;
  var ___PRETTY_FUNCTION___9234;
  var _clear_doc;
  var ___PRETTY_FUNCTION___9246;
  var __str22;
  var __str23;
  var _copy_doc;
  var __str24;
  var __str25;
  var __str26;
  var __str27;
  var __str28;
  var _reduce_doc;
  var __str29;
  var __str30;
  var __str31;
  var __str32;
  var __str33;
  var __str34;
  var __str35;
  var __str36;
  var __str37;
  var __str38;
  var __str39;
  var __str40;
  var __str41;
  var _deque_getset;
  var _deque_as_sequence;
  var _reversed_doc;
  var __str42;
  var __str43;
  var __str44;
  var __str45;
  var __str46;
  var __str47;
  var __str48;
  var __str49;
  var __str50;
  var __str51;
  var __str52;
  var __str53;
  var __str54;
  var __str55;
  var _deque_methods;
  var _deque_doc;
  var __str56;
  var _deque_type;
  var __str57;
  var ___PRETTY_FUNCTION___9783;
  var __str58;
  var _length_hint_doc;
  var __str59;
  var _dequeiter_methods;
  var __str60;
  var _dequeiter_type;
  var __str61;
  var ___PRETTY_FUNCTION___9856;
  var __str62;
  var __str63;
  var _dequereviter_type;
  var _defdict_missing_doc;
  var _defdict_copy_doc;
  var __str64;
  var __str65;
  var __str66;
  var __str67;
  var _defdict_methods;
  var __str68;
  var __str69;
  var _defdict_members;
  var __str70;
  var __str71;
  var __str72;
  var __str73;
  var __str74;
  var _defdict_doc;
  var __str75;
  var _defdict_type;
  var _module_doc;
  var __str76;
  var __str77;
  var __str78;
  function _newblock($leftlink, $rightlink, $len) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $leftlink_addr;
      var $rightlink_addr;
      var $len_addr;
      var $retval;
      var $0;
      var $b;
      $leftlink_addr = $leftlink;
      $rightlink_addr = $rightlink;
      $len_addr = $len;
      
      
      if ($len_addr > 2147483522) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($3, __str);
      $0 = 0;
      __label__ = 7;
      break;
     case 2:
      
      
      if (HEAP[_numfreeblocks] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $7 = HEAP[_numfreeblocks] - 1;
      HEAP[_numfreeblocks] = $7;
      
      
      
      $b = HEAP[_freeblocks + HEAP[_numfreeblocks] * 4];
      __label__ = 6;
      break;
     case 4:
      var $11 = _PyMem_Malloc(256);
      
      $b = $11;
      
      
      if ($b == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $15 = _PyErr_NoMemory();
      $0 = 0;
      __label__ = 7;
      break;
     case 6:
      
      
      
      HEAP[$b] = $leftlink_addr;
      
      
      
      HEAP[$b + 4] = $rightlink_addr;
      
      $0 = $b;
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
  function _freeblock($b) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $b_addr;
      $b_addr = $b;
      
      
      if (HEAP[_numfreeblocks] <= 9) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $3 = _freeblocks + HEAP[_numfreeblocks] * 4;
      
      HEAP[$3] = $b_addr;
      
      var $6 = HEAP[_numfreeblocks] + 1;
      HEAP[_numfreeblocks] = $6;
      __label__ = 3;
      break;
     case 2:
      
      
      _PyMem_Free($b_addr);
      __label__ = 3;
      break;
     case 3:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _deque_new($type, $args, $kwds) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $deque;
      var $b;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      var $3 = HEAP[$type_addr + 152];
      
      var $5 = FUNCTION_TABLE[$3]($type_addr, 0);
      
      $deque = $5;
      
      
      if ($deque == 0) {
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
      var $9 = _newblock(0, 0, 0);
      $b = $9;
      
      
      var $12 = $deque;
      if ($b == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      var $16 = HEAP[$12] - 1;
      
      HEAP[$12] = $16;
      
      
      
      if (HEAP[$12] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      var $26 = HEAP[HEAP[$deque + 4] + 24];
      
      
      FUNCTION_TABLE[$26]($deque);
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      __label__ = 7;
      break;
     case 6:
      
      
      HEAP[$12 + 8] = $b;
      
      
      
      HEAP[$deque + 12] = $b;
      
      
      HEAP[$deque + 16] = 31;
      
      
      HEAP[$deque + 20] = 30;
      
      
      HEAP[$deque + 24] = 0;
      
      
      HEAP[$deque + 32] = 0;
      
      
      HEAP[$deque + 36] = 0;
      
      
      HEAP[$deque + 28] = -1;
      
      
      $0 = $deque;
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
  function _deque_pop($deque, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $unused_addr;
      var $retval;
      var $0;
      var $item;
      var $prevblock;
      $deque_addr = $deque;
      $unused_addr = $unused;
      
      
      
      
      if (HEAP[$deque_addr + 24] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($5, __str1);
      $0 = 0;
      __label__ = 13;
      break;
     case 2:
      
      
      
      
      
      
      
      
      
      $item = HEAP[HEAP[$deque_addr + 12] + 8 + HEAP[$deque_addr + 20] * 4];
      
      
      
      var $18 = HEAP[$deque_addr + 20] - 1;
      
      
      HEAP[$deque_addr + 20] = $18;
      
      
      
      var $24 = HEAP[$deque_addr + 24] - 1;
      
      
      HEAP[$deque_addr + 24] = $24;
      
      
      
      var $30 = HEAP[$deque_addr + 32] + 1;
      
      
      HEAP[$deque_addr + 32] = $30;
      
      
      
      var $36 = HEAP[$deque_addr + 20] == -1;
      if ($36) {
        __label__ = 3;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 3:
      
      
      
      
      var $41 = $deque_addr;
      if (HEAP[$deque_addr + 24] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      
      
      
      
      
      
      if (HEAP[$41 + 8] != HEAP[$deque_addr + 12]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str2, __str3, 176, ___PRETTY_FUNCTION___8417);
      throw "Reached an unreachable!";
     case 6:
      
      
      
      
      
      
      
      
      if (HEAP[$deque_addr + 16] != HEAP[$deque_addr + 20] + 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      ___assert_fail(__str4, __str3, 177, ___PRETTY_FUNCTION___8417);
      throw "Reached an unreachable!";
     case 8:
      
      
      HEAP[$deque_addr + 16] = 31;
      
      
      HEAP[$deque_addr + 20] = 30;
      __label__ = 12;
      break;
     case 9:
      
      
      
      
      $prevblock = HEAP[HEAP[$41 + 12]];
      
      
      
      
      
      
      
      if (HEAP[$deque_addr + 8] == HEAP[$deque_addr + 12]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str5, __str3, 183, ___PRETTY_FUNCTION___8417);
      throw "Reached an unreachable!";
     case 11:
      
      
      var $73 = HEAP[$deque_addr + 12];
      _freeblock($73);
      
      
      HEAP[$prevblock + 4] = 0;
      
      
      
      HEAP[$deque_addr + 12] = $prevblock;
      
      
      HEAP[$deque_addr + 20] = 61;
      __label__ = 12;
      break;
     case 12:
      
      $0 = $item;
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
  function _deque_popleft($deque, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $unused_addr;
      var $retval;
      var $0;
      var $item;
      var $prevblock;
      $deque_addr = $deque;
      $unused_addr = $unused;
      
      
      
      
      if (HEAP[$deque_addr + 24] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($5, __str1);
      $0 = 0;
      __label__ = 17;
      break;
     case 2:
      
      
      
      
      if (HEAP[$deque_addr + 8] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str6, __str3, 205, ___PRETTY_FUNCTION___8461);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      
      
      
      
      
      
      $item = HEAP[HEAP[$deque_addr + 8] + 8 + HEAP[$deque_addr + 16] * 4];
      
      
      
      var $22 = HEAP[$deque_addr + 16] + 1;
      
      
      HEAP[$deque_addr + 16] = $22;
      
      
      
      var $28 = HEAP[$deque_addr + 24] - 1;
      
      
      HEAP[$deque_addr + 24] = $28;
      
      
      
      var $34 = HEAP[$deque_addr + 32] + 1;
      
      
      HEAP[$deque_addr + 32] = $34;
      
      
      
      
      if (HEAP[$deque_addr + 16] == 62) {
        __label__ = 5;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $47 = HEAP[$deque_addr + 8];
      
      
      var $50 = HEAP[$deque_addr + 12];
      if (HEAP[$deque_addr + 24] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 6:
      
      if ($47 != $50) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      ___assert_fail(__str2, __str3, 213, ___PRETTY_FUNCTION___8461);
      throw "Reached an unreachable!";
     case 8:
      
      
      
      
      
      
      
      
      if (HEAP[$deque_addr + 16] != HEAP[$deque_addr + 20] + 1) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      ___assert_fail(__str4, __str3, 214, ___PRETTY_FUNCTION___8461);
      throw "Reached an unreachable!";
     case 10:
      
      
      HEAP[$deque_addr + 16] = 31;
      
      
      HEAP[$deque_addr + 20] = 30;
      __label__ = 16;
      break;
     case 11:
      
      if ($47 == $50) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      ___assert_fail(__str5, __str3, 219, ___PRETTY_FUNCTION___8461);
      throw "Reached an unreachable!";
     case 13:
      
      
      
      
      
      $prevblock = HEAP[HEAP[$deque_addr + 8] + 4];
      
      
      var $72 = HEAP[$deque_addr + 8];
      _freeblock($72);
      
      
      if ($prevblock == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      ___assert_fail(__str7, __str3, 222, ___PRETTY_FUNCTION___8461);
      throw "Reached an unreachable!";
     case 15:
      
      
      HEAP[$prevblock] = 0;
      
      
      
      HEAP[$deque_addr + 8] = $prevblock;
      
      
      HEAP[$deque_addr + 16] = 0;
      __label__ = 16;
      break;
     case 16:
      
      $0 = $item;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval17 = $retval;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _deque_append($deque, $item) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $item_addr;
      var $retval;
      var $0;
      var $b;
      var $rv;
      $deque_addr = $deque;
      $item_addr = $item;
      
      
      
      var $4 = HEAP[$deque_addr + 32] + 1;
      
      
      HEAP[$deque_addr + 32] = $4;
      
      
      
      
      if (HEAP[$deque_addr + 20] == 61) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      var $13 = HEAP[$deque_addr + 24];
      
      
      var $16 = HEAP[$deque_addr + 12];
      var $17 = _newblock($16, 0, $13);
      $b = $17;
      
      
      if ($b == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 14;
      break;
     case 3:
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr + 12] + 4] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str8, __str3, 241, ___PRETTY_FUNCTION___8509);
      throw "Reached an unreachable!";
     case 5:
      
      
      
      var $29 = HEAP[$deque_addr + 12] + 4;
      
      HEAP[$29] = $b;
      
      
      
      HEAP[$deque_addr + 12] = $b;
      
      
      HEAP[$deque_addr + 20] = -1;
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $39 = HEAP[$item_addr] + 1;
      
      
      HEAP[$item_addr] = $39;
      
      
      
      var $45 = HEAP[$deque_addr + 24] + 1;
      
      
      HEAP[$deque_addr + 24] = $45;
      
      
      
      var $51 = HEAP[$deque_addr + 20] + 1;
      
      
      HEAP[$deque_addr + 20] = $51;
      
      
      
      
      
      
      
      var $61 = HEAP[$deque_addr + 12] + 8 + HEAP[$deque_addr + 20] * 4;
      
      HEAP[$61] = $item_addr;
      
      
      
      var $66 = HEAP[$deque_addr + 28] != -1;
      if ($66) {
        __label__ = 7;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      if (HEAP[$deque_addr + 24] > HEAP[$deque_addr + 28]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 8:
      
      var $75 = _deque_popleft($deque_addr, 0);
      $rv = $75;
      
      
      if ($rv == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      if (HEAP[$deque_addr + 24] > HEAP[$deque_addr + 28]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str9, __str3, 250, ___PRETTY_FUNCTION___8509);
      throw "Reached an unreachable!";
     case 11:
      
      
      
      var $88 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $88;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $99 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$99]($rv);
      __label__ = 13;
      break;
     case 13:
      
      var $102 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $102;
      $0 = __Py_NoneStruct;
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
  function _deque_appendleft($deque, $item) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $item_addr;
      var $retval;
      var $0;
      var $b;
      var $rv;
      $deque_addr = $deque;
      $item_addr = $item;
      
      
      
      var $4 = HEAP[$deque_addr + 32] + 1;
      
      
      HEAP[$deque_addr + 32] = $4;
      
      
      
      
      if (HEAP[$deque_addr + 16] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      var $13 = HEAP[$deque_addr + 24];
      
      
      var $16 = HEAP[$deque_addr + 8];
      var $17 = _newblock(0, $16, $13);
      $b = $17;
      
      
      if ($b == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 14;
      break;
     case 3:
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr + 8]] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str10, __str3, 264, ___PRETTY_FUNCTION___8564);
      throw "Reached an unreachable!";
     case 5:
      
      
      
      var $29 = HEAP[$deque_addr + 8];
      
      HEAP[$29] = $b;
      
      
      
      HEAP[$deque_addr + 8] = $b;
      
      
      HEAP[$deque_addr + 16] = 62;
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $39 = HEAP[$item_addr] + 1;
      
      
      HEAP[$item_addr] = $39;
      
      
      
      var $45 = HEAP[$deque_addr + 24] + 1;
      
      
      HEAP[$deque_addr + 24] = $45;
      
      
      
      var $51 = HEAP[$deque_addr + 16] - 1;
      
      
      HEAP[$deque_addr + 16] = $51;
      
      
      
      
      
      
      
      var $61 = HEAP[$deque_addr + 8] + 8 + HEAP[$deque_addr + 16] * 4;
      
      HEAP[$61] = $item_addr;
      
      
      
      var $66 = HEAP[$deque_addr + 28] != -1;
      if ($66) {
        __label__ = 7;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      if (HEAP[$deque_addr + 24] > HEAP[$deque_addr + 28]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 8:
      
      var $75 = _deque_pop($deque_addr, 0);
      $rv = $75;
      
      
      if ($rv == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      if (HEAP[$deque_addr + 24] > HEAP[$deque_addr + 28]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str9, __str3, 273, ___PRETTY_FUNCTION___8564);
      throw "Reached an unreachable!";
     case 11:
      
      
      
      var $88 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $88;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $99 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$99]($rv);
      __label__ = 13;
      break;
     case 13:
      
      var $102 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $102;
      $0 = __Py_NoneStruct;
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
  function _consume_iterator($it) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $it_addr;
      var $retval;
      var $0;
      var $item;
      $it_addr = $it;
      
      var $2 = _PyIter_Next($it_addr);
      $item = $2;
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      var $7 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $7;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      var $15 = _PyIter_Next($it_addr);
      $item = $15;
      
      if ($15 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $21 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$21]($item);
      __label__ = 2;
      break;
     case 4:
      
      
      
      var $26 = HEAP[$it_addr] - 1;
      
      
      HEAP[$it_addr] = $26;
      
      
      
      
      if (HEAP[$it_addr] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $37 = HEAP[HEAP[$it_addr + 4] + 24];
      
      FUNCTION_TABLE[$37]($it_addr);
      __label__ = 6;
      break;
     case 6:
      var $39 = _PyErr_Occurred();
      
      if ($39 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 9;
      break;
     case 8:
      
      var $42 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $42;
      $0 = __Py_NoneStruct;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _deque_extend($deque, $iterable) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $iterable_addr;
      var $retval;
      var $0;
      var $it;
      var $item;
      var $result;
      var $s;
      var $b;
      var $rv;
      $deque_addr = $deque;
      $iterable_addr = $iterable;
      
      
      
      
      var $5 = $iterable_addr;
      if ($deque_addr == $iterable_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      var $6 = _PySequence_List($5);
      $s = $6;
      
      
      if ($s == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 33;
      break;
     case 3:
      
      
      var $11 = _deque_extend($deque_addr, $s);
      $result = $11;
      
      
      
      var $15 = HEAP[$s] - 1;
      
      
      HEAP[$s] = $15;
      
      
      
      
      if (HEAP[$s] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $26 = HEAP[HEAP[$s + 4] + 24];
      
      FUNCTION_TABLE[$26]($s);
      __label__ = 5;
      break;
     case 5:
      
      $0 = $result;
      __label__ = 33;
      break;
     case 6:
      var $29 = _PyObject_GetIter($5);
      $it = $29;
      
      
      if ($it == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 33;
      break;
     case 8:
      
      
      
      
      if (HEAP[$deque_addr + 28] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 9:
      
      var $37 = _consume_iterator($it);
      $0 = $37;
      __label__ = 33;
      break;
     case 10:
      
      
      
      var $41 = HEAP[$deque_addr + 32] + 1;
      
      
      HEAP[$deque_addr + 32] = $41;
      
      
      
      
      if (HEAP[$deque_addr + 20] == 61) {
        __label__ = 11;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 11:
      
      
      var $50 = HEAP[$deque_addr + 24];
      
      
      var $53 = HEAP[$deque_addr + 12];
      var $54 = _newblock($53, 0, $50);
      $b = $54;
      
      
      if ($b == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 12:
      
      
      
      var $60 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $60;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $71 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$71]($item);
      __label__ = 14;
      break;
     case 14:
      
      
      
      var $76 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $76;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $87 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$87]($it);
      __label__ = 16;
      break;
     case 16:
      $0 = 0;
      __label__ = 33;
      break;
     case 17:
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr + 12] + 4] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      ___assert_fail(__str8, __str3, 329, ___PRETTY_FUNCTION___8652);
      throw "Reached an unreachable!";
     case 19:
      
      
      
      var $98 = HEAP[$deque_addr + 12] + 4;
      
      HEAP[$98] = $b;
      
      
      
      HEAP[$deque_addr + 12] = $b;
      
      
      HEAP[$deque_addr + 20] = -1;
      __label__ = 20;
      break;
     case 20:
      
      
      
      var $108 = HEAP[$deque_addr + 24] + 1;
      
      
      HEAP[$deque_addr + 24] = $108;
      
      
      
      var $114 = HEAP[$deque_addr + 20] + 1;
      
      
      HEAP[$deque_addr + 20] = $114;
      
      
      
      
      
      
      
      var $124 = HEAP[$deque_addr + 12] + 8 + HEAP[$deque_addr + 20] * 4;
      
      HEAP[$124] = $item;
      
      
      
      var $129 = HEAP[$deque_addr + 28] != -1;
      if ($129) {
        __label__ = 21;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 21:
      
      
      
      
      
      
      
      if (HEAP[$deque_addr + 24] > HEAP[$deque_addr + 28]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 22:
      
      var $138 = _deque_popleft($deque_addr, 0);
      $rv = $138;
      
      
      if ($rv == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      
      
      if (HEAP[$deque_addr + 24] > HEAP[$deque_addr + 28]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      ___assert_fail(__str9, __str3, 337, ___PRETTY_FUNCTION___8652);
      throw "Reached an unreachable!";
     case 25:
      
      
      
      var $151 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $151;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $162 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$162]($rv);
      __label__ = 27;
      break;
     case 27:
      
      var $165 = _PyIter_Next($it);
      $item = $165;
      
      if ($165 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      var $170 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $170;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $181 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$181]($it);
      __label__ = 30;
      break;
     case 30:
      var $183 = _PyErr_Occurred();
      
      if ($183 != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      $0 = 0;
      __label__ = 33;
      break;
     case 32:
      
      var $186 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $186;
      $0 = __Py_NoneStruct;
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
  function _deque_extendleft($deque, $iterable) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $iterable_addr;
      var $retval;
      var $0;
      var $it;
      var $item;
      var $result;
      var $s;
      var $b;
      var $rv;
      $deque_addr = $deque;
      $iterable_addr = $iterable;
      
      
      
      
      var $5 = $iterable_addr;
      if ($deque_addr == $iterable_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      var $6 = _PySequence_List($5);
      $s = $6;
      
      
      if ($s == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 33;
      break;
     case 3:
      
      
      var $11 = _deque_extendleft($deque_addr, $s);
      $result = $11;
      
      
      
      var $15 = HEAP[$s] - 1;
      
      
      HEAP[$s] = $15;
      
      
      
      
      if (HEAP[$s] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $26 = HEAP[HEAP[$s + 4] + 24];
      
      FUNCTION_TABLE[$26]($s);
      __label__ = 5;
      break;
     case 5:
      
      $0 = $result;
      __label__ = 33;
      break;
     case 6:
      var $29 = _PyObject_GetIter($5);
      $it = $29;
      
      
      if ($it == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 33;
      break;
     case 8:
      
      
      
      
      if (HEAP[$deque_addr + 28] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 9:
      
      var $37 = _consume_iterator($it);
      $0 = $37;
      __label__ = 33;
      break;
     case 10:
      
      
      
      var $41 = HEAP[$deque_addr + 32] + 1;
      
      
      HEAP[$deque_addr + 32] = $41;
      
      
      
      
      if (HEAP[$deque_addr + 16] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 11:
      
      
      var $50 = HEAP[$deque_addr + 24];
      
      
      var $53 = HEAP[$deque_addr + 8];
      var $54 = _newblock(0, $53, $50);
      $b = $54;
      
      
      if ($b == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 12:
      
      
      
      var $60 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $60;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $71 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$71]($item);
      __label__ = 14;
      break;
     case 14:
      
      
      
      var $76 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $76;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $87 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$87]($it);
      __label__ = 16;
      break;
     case 16:
      $0 = 0;
      __label__ = 33;
      break;
     case 17:
      
      
      
      
      
      
      if (HEAP[HEAP[$deque_addr + 8]] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      ___assert_fail(__str10, __str3, 381, ___PRETTY_FUNCTION___8758);
      throw "Reached an unreachable!";
     case 19:
      
      
      
      var $98 = HEAP[$deque_addr + 8];
      
      HEAP[$98] = $b;
      
      
      
      HEAP[$deque_addr + 8] = $b;
      
      
      HEAP[$deque_addr + 16] = 62;
      __label__ = 20;
      break;
     case 20:
      
      
      
      var $108 = HEAP[$deque_addr + 24] + 1;
      
      
      HEAP[$deque_addr + 24] = $108;
      
      
      
      var $114 = HEAP[$deque_addr + 16] - 1;
      
      
      HEAP[$deque_addr + 16] = $114;
      
      
      
      
      
      
      
      var $124 = HEAP[$deque_addr + 8] + 8 + HEAP[$deque_addr + 16] * 4;
      
      HEAP[$124] = $item;
      
      
      
      var $129 = HEAP[$deque_addr + 28] != -1;
      if ($129) {
        __label__ = 21;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 21:
      
      
      
      
      
      
      
      if (HEAP[$deque_addr + 24] > HEAP[$deque_addr + 28]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 22:
      
      var $138 = _deque_pop($deque_addr, 0);
      $rv = $138;
      
      
      if ($rv == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      
      
      if (HEAP[$deque_addr + 24] > HEAP[$deque_addr + 28]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      ___assert_fail(__str9, __str3, 389, ___PRETTY_FUNCTION___8758);
      throw "Reached an unreachable!";
     case 25:
      
      
      
      var $151 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $151;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $162 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$162]($rv);
      __label__ = 27;
      break;
     case 27:
      
      var $165 = _PyIter_Next($it);
      $item = $165;
      
      if ($165 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      var $170 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $170;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $181 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$181]($it);
      __label__ = 30;
      break;
     case 30:
      var $183 = _PyErr_Occurred();
      
      if ($183 != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      $0 = 0;
      __label__ = 33;
      break;
     case 32:
      
      var $186 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $186;
      $0 = __Py_NoneStruct;
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
  function _deque_inplace_concat($deque, $other) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $other_addr;
      var $retval;
      var $0;
      var $result;
      $deque_addr = $deque;
      $other_addr = $other;
      
      
      var $3 = _deque_extend($deque_addr, $other_addr);
      $result = $3;
      
      
      var $6 = $result;
      if ($result == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = $6;
      __label__ = 5;
      break;
     case 2:
      
      
      var $9 = HEAP[$6] - 1;
      
      
      HEAP[$result] = $9;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $20 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$20]($result);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      var $26 = HEAP[$deque_addr] + 1;
      
      HEAP[$deque_addr] = $26;
      
      
      $0 = $deque_addr;
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
  function __deque_rotate($deque, $n) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $n_addr;
      var $retval;
      var $0;
      var $i;
      var $len;
      var $halflen;
      var $item;
      var $rv;
      $deque_addr = $deque;
      $n_addr = $n;
      
      
      
      $len = HEAP[$deque_addr + 24];
      
      
      
      $halflen = $len + 1 >> 1;
      
      
      if ($len == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 31;
      break;
     case 2:
      
      
      
      if ($n_addr > $halflen) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      if (0 - $halflen > $n_addr) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      var $18 = $n_addr % $len;
      $n_addr = $18;
      
      
      
      if ($n_addr > $halflen) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $24 = $n_addr - $len;
      $n_addr = $24;
      __label__ = 8;
      break;
     case 6:
      
      
      
      
      if (0 - $halflen > $n_addr) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $31 = $len + $n_addr;
      $n_addr = $31;
      __label__ = 8;
      break;
     case 8:
      $i = 0;
      __label__ = 18;
      break;
     case 9:
      
      var $33 = _deque_pop($deque_addr, 0);
      $item = $33;
      
      
      if ($item == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str11, __str3, 431, ___PRETTY_FUNCTION___8884);
      throw "Reached an unreachable!";
     case 11:
      
      
      var $38 = _deque_appendleft($deque_addr, $item);
      $rv = $38;
      
      
      
      var $42 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $42;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $53 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$53]($item);
      __label__ = 13;
      break;
     case 13:
      
      
      if ($rv == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = -1;
      __label__ = 31;
      break;
     case 15:
      
      
      
      var $60 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $60;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $71 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$71]($rv);
      __label__ = 17;
      break;
     case 17:
      
      var $74 = $i + 1;
      $i = $74;
      __label__ = 18;
      break;
     case 18:
      
      
      
      if ($i < $n_addr) {
        __label__ = 9;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      $i = 0;
      __label__ = 29;
      break;
     case 20:
      
      var $79 = _deque_popleft($deque_addr, 0);
      $item = $79;
      
      
      if ($item == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      ___assert_fail(__str11, __str3, 440, ___PRETTY_FUNCTION___8884);
      throw "Reached an unreachable!";
     case 22:
      
      
      var $84 = _deque_append($deque_addr, $item);
      $rv = $84;
      
      
      
      var $88 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $88;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $99 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$99]($item);
      __label__ = 24;
      break;
     case 24:
      
      
      if ($rv == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      $0 = -1;
      __label__ = 31;
      break;
     case 26:
      
      
      
      var $106 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $106;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $117 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$117]($rv);
      __label__ = 28;
      break;
     case 28:
      
      var $120 = $i - 1;
      $i = $120;
      __label__ = 29;
      break;
     case 29:
      
      
      
      if ($i > $n_addr) {
        __label__ = 20;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      $0 = 0;
      __label__ = 31;
      break;
     case 31:
      
      $retval = $0;
      var $retval31 = $retval;
      return $retval31;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _deque_rotate($deque, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $n = __stackBase__;
      $deque_addr = $deque;
      $args_addr = $args;
      HEAP[$n] = 1;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str12, allocate([ $n, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$n];
      
      var $6 = __deque_rotate($deque_addr, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $9 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $9;
      $0 = __Py_NoneStruct;
      __label__ = 5;
      break;
     case 4:
      $0 = 0;
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
  function _deque_reverse($deque, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $unused_addr;
      var $retval;
      var $0;
      var $leftblock;
      var $rightblock;
      var $leftindex;
      var $rightindex;
      var $n;
      var $i;
      var $tmp;
      $deque_addr = $deque;
      $unused_addr = $unused;
      
      
      
      $leftblock = HEAP[$deque_addr + 8];
      
      
      
      $rightblock = HEAP[$deque_addr + 12];
      
      
      
      $leftindex = HEAP[$deque_addr + 16];
      
      
      
      $rightindex = HEAP[$deque_addr + 20];
      
      
      
      
      $n = HEAP[$deque_addr + 24] / 2 | 0;
      $i = 0;
      __label__ = 11;
      break;
     case 1:
      
      
      
      if ($leftblock == $rightblock) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      if ($leftindex >= $rightindex) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str13, __str3, 478, ___PRETTY_FUNCTION___8974);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      
      
      $tmp = HEAP[$leftblock + 8 + $leftindex * 4];
      
      
      
      
      
      var $33 = HEAP[$rightblock + 8 + $rightindex * 4];
      
      
      
      HEAP[$leftblock + 8 + $leftindex * 4] = $33;
      
      
      
      
      
      HEAP[$rightblock + 8 + $rightindex * 4] = $tmp;
      
      var $43 = $leftindex + 1;
      $leftindex = $43;
      
      if ($43 == 62) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[$leftblock + 4] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $51 = HEAP[$leftblock + 4];
      $leftblock = $51;
      $leftindex = 0;
      __label__ = 7;
      break;
     case 7:
      
      var $53 = $rightindex - 1;
      $rightindex = $53;
      var $54 = $53 == -1;
      if ($54) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[$rightblock] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      var $61 = HEAP[$rightblock];
      $rightblock = $61;
      $rightindex = 61;
      __label__ = 10;
      break;
     case 10:
      
      var $63 = $i + 1;
      $i = $63;
      __label__ = 11;
      break;
     case 11:
      
      
      
      if ($i < $n) {
        __label__ = 1;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      var $68 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $68;
      $0 = __Py_NoneStruct;
      
      $retval = $0;
      var $retval12 = $retval;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _deque_count($deque, $v) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $leftblock;
      var $leftindex;
      var $n;
      var $i;
      var $count;
      var $item;
      var $start_state;
      var $cmp;
      $deque_addr = $deque;
      $v_addr = $v;
      
      
      
      $leftblock = HEAP[$deque_addr + 8];
      
      
      
      $leftindex = HEAP[$deque_addr + 16];
      
      
      
      $n = HEAP[$deque_addr + 24];
      $count = 0;
      
      
      
      $start_state = HEAP[$deque_addr + 32];
      $i = 0;
      __label__ = 11;
      break;
     case 1:
      
      
      
      
      
      $item = HEAP[$leftblock + 8 + $leftindex * 4];
      
      
      var $20 = _PyObject_RichCompareBool($item, $v_addr, 2);
      $cmp = $20;
      
      
      if ($cmp > 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $24 = $count + 1;
      $count = $24;
      __label__ = 5;
      break;
     case 3:
      
      
      if ($cmp < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 13;
      break;
     case 5:
      
      
      
      
      
      if (HEAP[$deque_addr + 32] != $start_state) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $32 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($32, __str14);
      $0 = 0;
      __label__ = 13;
      break;
     case 7:
      
      var $34 = $leftindex + 1;
      $leftindex = $34;
      
      
      if ($leftindex == 62) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[$leftblock + 4] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      var $43 = HEAP[$leftblock + 4];
      $leftblock = $43;
      $leftindex = 0;
      __label__ = 10;
      break;
     case 10:
      
      var $45 = $i + 1;
      $i = $45;
      __label__ = 11;
      break;
     case 11:
      
      
      
      if ($i < $n) {
        __label__ = 1;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      var $50 = _PyInt_FromSsize_t($count);
      $0 = $50;
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
  function _deque_len($deque) {
    
    var $deque_addr;
    var $retval;
    var $0;
    $deque_addr = $deque;
    
    
    
    $0 = HEAP[$deque_addr + 24];
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _deque_remove($deque, $value) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $value_addr;
      var $retval;
      var $0;
      var $i;
      var $n;
      var $item;
      var $cmp;
      var $tgt;
      $deque_addr = $deque;
      $value_addr = $value;
      
      
      
      $n = HEAP[$deque_addr + 24];
      $i = 0;
      __label__ = 14;
      break;
     case 1:
      
      
      
      
      
      
      
      
      
      $item = HEAP[HEAP[$deque_addr + 8] + 8 + HEAP[$deque_addr + 16] * 4];
      
      
      var $15 = _PyObject_RichCompareBool($item, $value_addr, 2);
      $cmp = $15;
      
      
      
      
      
      if (HEAP[$deque_addr + 24] != $n) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $21 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($21, __str15);
      $0 = 0;
      __label__ = 16;
      break;
     case 3:
      
      
      if ($cmp > 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 4:
      
      var $25 = _deque_popleft($deque_addr, 0);
      $tgt = $25;
      
      
      if ($tgt == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str16, __str3, 572, ___PRETTY_FUNCTION___9049);
      throw "Reached an unreachable!";
     case 6:
      
      
      
      var $31 = HEAP[$tgt] - 1;
      
      
      HEAP[$tgt] = $31;
      
      
      
      
      if (HEAP[$tgt] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $42 = HEAP[HEAP[$tgt + 4] + 24];
      
      FUNCTION_TABLE[$42]($tgt);
      __label__ = 8;
      break;
     case 8:
      
      
      var $46 = __deque_rotate($deque_addr, $i);
      var $47 = $46 == -1;
      if ($47) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = 0;
      __label__ = 16;
      break;
     case 10:
      
      var $49 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $49;
      $0 = __Py_NoneStruct;
      __label__ = 16;
      break;
     case 11:
      
      
      var $52 = $deque_addr;
      if ($cmp < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      var $54 = __deque_rotate($52, $i);
      $0 = 0;
      __label__ = 16;
      break;
     case 13:
      var $55 = __deque_rotate($52, -1);
      
      var $57 = $i + 1;
      $i = $57;
      __label__ = 14;
      break;
     case 14:
      
      
      
      if ($i < $n) {
        __label__ = 1;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $61 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($61, __str17);
      $0 = 0;
      __label__ = 16;
      break;
     case 16:
      
      $retval = $0;
      var $retval16 = $retval;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _deque_clear($deque) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $retval;
      var $0;
      var $item;
      $deque_addr = $deque;
      __label__ = 5;
      break;
     case 1:
      var $1 = _deque_pop($24, 0);
      $item = $1;
      
      
      if ($item == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str11, __str3, 598, ___PRETTY_FUNCTION___9087);
      throw "Reached an unreachable!";
     case 3:
      
      
      
      var $7 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $7;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $18 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$18]($item);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      var $24 = $deque_addr;
      if (HEAP[$deque_addr + 24] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      if (HEAP[$24 + 8] != HEAP[$deque_addr + 12]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      if (HEAP[$deque_addr + 16] - 1 != HEAP[$deque_addr + 20]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[$deque_addr + 24] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      ___assert_fail(__str18, __str3, 603, ___PRETTY_FUNCTION___9087);
      throw "Reached an unreachable!";
     case 10:
      $0 = 0;
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _deque_item($deque, $i) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $i_addr;
      var $retval;
      var $0;
      var $b;
      var $item;
      var $n;
      var $index;
      $deque_addr = $deque;
      $i_addr = $i;
      
      $index = $i_addr;
      
      
      if ($i_addr < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[$deque_addr + 24] <= $i_addr) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $9 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($9, __str19);
      $0 = 0;
      __label__ = 13;
      break;
     case 3:
      
      
      var $12 = $deque_addr;
      if ($i_addr == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      $i_addr = HEAP[$12 + 16];
      
      
      
      $b = HEAP[$deque_addr + 8];
      __label__ = 12;
      break;
     case 5:
      
      
      
      
      
      var $23 = $deque_addr;
      if (HEAP[$12 + 24] - 1 == $i_addr) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      $i_addr = HEAP[$23 + 20];
      
      
      
      $b = HEAP[$deque_addr + 12];
      __label__ = 12;
      break;
     case 7:
      
      
      
      var $32 = $i_addr + HEAP[$23 + 16];
      $i_addr = $32;
      
      
      $n = $i_addr / 62 | 0;
      
      var $36 = $i_addr % 62;
      $i_addr = $36;
      
      
      
      
      
      
      var $43 = $deque_addr;
      if (HEAP[$deque_addr + 24] >> 1 > $index) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      $b = HEAP[$43 + 8];
      
      var $47 = $n - 1;
      $n = $47;
      var $48 = $47 != -1;
      if ($48) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      var $51 = HEAP[$b + 4];
      $b = $51;
      
      var $53 = $n - 1;
      $n = $53;
      var $54 = $53 != -1;
      if ($54) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      
      
      var $60 = HEAP[$43 + 16] + -1;
      
      
      
      var $64 = (($60 + HEAP[$deque_addr + 24]) / 62 | 0) - $n;
      $n = $64;
      
      
      
      $b = HEAP[$deque_addr + 12];
      
      var $69 = $n - 1;
      $n = $69;
      var $70 = $69 != -1;
      if ($70) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      var $73 = HEAP[$b];
      $b = $73;
      
      var $75 = $n - 1;
      $n = $75;
      var $76 = $75 != -1;
      if ($76) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      $item = HEAP[$b + 8 + $i_addr * 4];
      
      
      
      var $85 = HEAP[$item] + 1;
      
      
      HEAP[$item] = $85;
      
      $0 = $item;
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
  function _deque_del_item($deque, $i) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $i_addr;
      var $retval;
      var $0;
      var $item;
      $deque_addr = $deque;
      $i_addr = $i;
      
      
      if ($i_addr < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[$deque_addr + 24] <= $i_addr) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str20, __str3, 658, ___PRETTY_FUNCTION___9162);
      throw "Reached an unreachable!";
     case 3:
      
      
      
      var $11 = __deque_rotate($deque_addr, 0 - $i_addr);
      var $12 = $11 == -1;
      if ($12) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 10;
      break;
     case 5:
      
      var $14 = _deque_popleft($deque_addr, 0);
      $item = $14;
      
      
      if ($item == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      ___assert_fail(__str11, __str3, 663, ___PRETTY_FUNCTION___9162);
      throw "Reached an unreachable!";
     case 7:
      
      
      
      var $20 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $20;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $31 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$31]($item);
      __label__ = 9;
      break;
     case 9:
      
      
      var $35 = __deque_rotate($deque_addr, $i_addr);
      $0 = $35;
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
  function _deque_ass_item($deque, $i, $v) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $i_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $old_value;
      var $b;
      var $n;
      var $len;
      var $halflen;
      var $index;
      $deque_addr = $deque;
      $i_addr = $i;
      $v_addr = $v;
      
      
      
      $len = HEAP[$deque_addr + 24];
      
      
      
      $halflen = $len + 1 >> 1;
      
      $index = $i_addr;
      
      
      if ($i_addr < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      if ($i_addr >= $len) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $13 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($13, __str19);
      $0 = -1;
      __label__ = 13;
      break;
     case 3:
      
      
      var $16 = $deque_addr;
      if ($v_addr == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $18 = _deque_del_item($16, $i_addr);
      $0 = $18;
      __label__ = 13;
      break;
     case 5:
      
      
      
      var $22 = $i_addr + HEAP[$16 + 16];
      $i_addr = $22;
      
      
      $n = $i_addr / 62 | 0;
      
      var $26 = $i_addr % 62;
      $i_addr = $26;
      
      
      
      var $30 = $deque_addr;
      if ($index <= $halflen) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      $b = HEAP[$30 + 8];
      
      var $34 = $n - 1;
      $n = $34;
      var $35 = $34 != -1;
      if ($35) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      var $38 = HEAP[$b + 4];
      $b = $38;
      
      var $40 = $n - 1;
      $n = $40;
      var $41 = $40 != -1;
      if ($41) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      var $45 = HEAP[$30 + 16] + -1;
      
      
      
      var $49 = (($45 + $len) / 62 | 0) - $n;
      $n = $49;
      
      
      
      $b = HEAP[$deque_addr + 12];
      
      var $54 = $n - 1;
      $n = $54;
      var $55 = $54 != -1;
      if ($55) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      var $58 = HEAP[$b];
      $b = $58;
      
      var $60 = $n - 1;
      $n = $60;
      var $61 = $60 != -1;
      if ($61) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $65 = HEAP[$v_addr] + 1;
      
      
      HEAP[$v_addr] = $65;
      
      
      
      
      
      $old_value = HEAP[$b + 8 + $i_addr * 4];
      
      
      
      
      
      HEAP[$b + 8 + $i_addr * 4] = $v_addr;
      
      
      
      var $81 = HEAP[$old_value] - 1;
      
      
      HEAP[$old_value] = $81;
      
      
      
      
      if (HEAP[$old_value] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $92 = HEAP[HEAP[$old_value + 4] + 24];
      
      FUNCTION_TABLE[$92]($old_value);
      __label__ = 12;
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
  function _deque_clearmethod($deque) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $retval;
      var $0;
      var $rv;
      $deque_addr = $deque;
      
      var $2 = _deque_clear($deque_addr);
      $rv = $2;
      
      var $4 = $rv == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str21, __str3, 710, ___PRETTY_FUNCTION___9234);
      throw "Reached an unreachable!";
     case 2:
      
      var $6 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $6;
      $0 = __Py_NoneStruct;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _deque_dealloc($deque) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      $deque_addr = $deque;
      
      
      _PyObject_GC_UnTrack($deque_addr);
      
      
      
      
      if (HEAP[$deque_addr + 36] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      _PyObject_ClearWeakRefs($deque_addr);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[$deque_addr + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      var $13 = _deque_clear($deque_addr);
      
      
      
      
      if (HEAP[$deque_addr + 8] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str6, __str3, 724, ___PRETTY_FUNCTION___9246);
      throw "Reached an unreachable!";
     case 5:
      
      
      var $20 = HEAP[$deque_addr + 8];
      _freeblock($20);
      __label__ = 6;
      break;
     case 6:
      
      
      HEAP[$deque_addr + 8] = 0;
      
      
      HEAP[$deque_addr + 12] = 0;
      
      
      
      
      
      var $30 = HEAP[HEAP[$deque_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$30]($deque_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _deque_traverse($deque, $visit, $arg) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $iftmp_31;
      var $b;
      var $item;
      var $index;
      var $indexlo;
      var $indexhi;
      var $vret;
      $deque_addr = $deque;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      $indexlo = HEAP[$deque_addr + 16];
      
      
      var $6 = HEAP[$deque_addr + 8];
      $b = $6;
      __lastLabel__ = -1;
      __label__ = 11;
      break;
     case 1:
      
      
      
      
      
      if (HEAP[$deque_addr + 12] == $b) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      $iftmp_31 = HEAP[$deque_addr + 20];
      __label__ = 4;
      break;
     case 3:
      $iftmp_31 = 61;
      __label__ = 4;
      break;
     case 4:
      
      $indexhi = $iftmp_31;
      
      $index = $indexlo;
      __label__ = 9;
      break;
     case 5:
      
      
      
      
      
      $item = HEAP[$b + 8 + $index * 4];
      
      
      if ($item != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      var $24 = $visit_addr;
      
      
      var $27 = FUNCTION_TABLE[$24]($item, $arg_addr);
      $vret = $27;
      
      
      if ($vret != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      $0 = $vret;
      __label__ = 13;
      break;
     case 8:
      
      var $32 = $index + 1;
      $index = $32;
      __label__ = 9;
      break;
     case 9:
      
      
      
      if ($index <= $indexhi) {
        __label__ = 5;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      $indexlo = 0;
      
      
      var $38 = HEAP[$b + 4];
      $b = $38;
      __lastLabel__ = 10;
      __label__ = 11;
      break;
     case 11:
      var $39 = __lastLabel__ == 10 ? $38 : $6;
      
      if ($39 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 12;
        break;
      }
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
  function _deque_copy($deque) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $retval;
      var $0;
      $deque_addr = $deque;
      
      
      
      
      var $5 = HEAP[$deque_addr + 28] == -1;
      var $6 = $deque_addr;
      if ($5) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $9 = HEAP[$6 + 4];
      
      var $11 = _PyObject_CallFunction($9, __str22, allocate([ $deque_addr, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $11;
      __label__ = 3;
      break;
     case 2:
      
      
      var $14 = HEAP[$6 + 28];
      
      
      
      var $18 = HEAP[$deque_addr + 4];
      
      var $20 = _PyObject_CallFunction($18, __str23, allocate([ $deque_addr, 0, 0, 0, $14, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $20;
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
  function _deque_reduce($deque) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $retval;
      var $0;
      var $dict;
      var $result;
      var $aslist;
      $deque_addr = $deque;
      
      
      var $3 = _PyObject_GetAttrString($deque_addr, __str24);
      $dict = $3;
      
      
      if ($dict == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      _PyErr_Clear();
      __label__ = 2;
      break;
     case 2:
      
      
      var $8 = _PySequence_List($deque_addr);
      $aslist = $8;
      
      var $10 = $dict;
      if ($8 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      if ($10 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      var $15 = HEAP[$dict] - 1;
      
      
      HEAP[$dict] = $15;
      
      
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $26 = HEAP[HEAP[$dict + 4] + 24];
      
      FUNCTION_TABLE[$26]($dict);
      __label__ = 6;
      break;
     case 6:
      $0 = 0;
      __label__ = 20;
      break;
     case 7:
      
      
      
      
      var $32 = HEAP[$deque_addr + 28] == -1;
      var $33 = $deque_addr;
      if ($10 == 0) {
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
      
      
      var $36 = HEAP[$33 + 4];
      
      var $38 = _Py_BuildValue(__str25, allocate([ $36, 0, 0, 0, $aslist, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $result = $38;
      __label__ = 14;
      break;
     case 10:
      
      var $40 = HEAP[$33 + 28];
      
      
      
      var $44 = HEAP[$deque_addr + 4];
      
      var $46 = _Py_BuildValue(__str26, allocate([ $44, 0, 0, 0, $aslist, 0, 0, 0, $40, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $result = $46;
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
      
      
      var $49 = HEAP[$33 + 4];
      
      
      var $52 = _Py_BuildValue(__str27, allocate([ $49, 0, 0, 0, $aslist, 0, 0, 0, __Py_NoneStruct, 0, 0, 0, $dict, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $result = $52;
      __label__ = 14;
      break;
     case 13:
      
      var $54 = HEAP[$33 + 28];
      
      
      
      var $58 = HEAP[$deque_addr + 4];
      
      
      var $61 = _Py_BuildValue(__str28, allocate([ $58, 0, 0, 0, $aslist, 0, 0, 0, $54, 0, 0, 0, $dict, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $result = $61;
      __label__ = 14;
      break;
     case 14:
      
      
      if ($dict != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      var $67 = HEAP[$dict] - 1;
      
      
      HEAP[$dict] = $67;
      
      
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $78 = HEAP[HEAP[$dict + 4] + 24];
      
      FUNCTION_TABLE[$78]($dict);
      __label__ = 17;
      break;
     case 17:
      
      
      
      var $83 = HEAP[$aslist] - 1;
      
      
      HEAP[$aslist] = $83;
      
      
      
      
      if (HEAP[$aslist] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $94 = HEAP[HEAP[$aslist + 4] + 24];
      
      FUNCTION_TABLE[$94]($aslist);
      __label__ = 19;
      break;
     case 19:
      
      $0 = $result;
      __label__ = 20;
      break;
     case 20:
      
      $retval = $0;
      var $retval21 = $retval;
      return $retval21;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _deque_repr($deque) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $retval;
      var $0;
      var $aslist;
      var $result;
      var $fmt;
      var $i;
      $deque_addr = $deque;
      
      var $2 = _Py_ReprEnter($deque_addr);
      $i = $2;
      
      
      if ($i != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      if ($i < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 18;
      break;
     case 3:
      var $7 = _PyString_FromString(__str29);
      $0 = $7;
      __label__ = 18;
      break;
     case 4:
      
      var $9 = _PySequence_List($deque_addr);
      $aslist = $9;
      
      
      var $12 = $deque_addr;
      if ($aslist == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _Py_ReprLeave($12);
      $0 = 0;
      __label__ = 18;
      break;
     case 6:
      
      
      
      var $16 = HEAP[$12 + 28] != -1;
      if ($16) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      var $20 = HEAP[$deque_addr + 28];
      var $21 = _PyString_FromFormat(__str30, allocate([ $20, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $fmt = $21;
      __lastLabel__ = 7;
      __label__ = 9;
      break;
     case 8:
      var $22 = _PyString_FromString(__str31);
      $fmt = $22;
      __lastLabel__ = 8;
      __label__ = 9;
      break;
     case 9:
      var $23 = __lastLabel__ == 8 ? $22 : $21;
      
      if ($23 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      var $28 = HEAP[$aslist] - 1;
      
      
      HEAP[$aslist] = $28;
      
      
      
      
      if (HEAP[$aslist] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $39 = HEAP[HEAP[$aslist + 4] + 24];
      
      FUNCTION_TABLE[$39]($aslist);
      __label__ = 12;
      break;
     case 12:
      
      _Py_ReprLeave($deque_addr);
      $0 = 0;
      __label__ = 18;
      break;
     case 13:
      
      
      var $44 = _PyString_Format($fmt, $aslist);
      $result = $44;
      
      
      
      var $48 = HEAP[$fmt] - 1;
      
      
      HEAP[$fmt] = $48;
      
      
      
      
      if (HEAP[$fmt] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $59 = HEAP[HEAP[$fmt + 4] + 24];
      
      FUNCTION_TABLE[$59]($fmt);
      __label__ = 15;
      break;
     case 15:
      
      
      
      var $64 = HEAP[$aslist] - 1;
      
      
      HEAP[$aslist] = $64;
      
      
      
      
      if (HEAP[$aslist] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $75 = HEAP[HEAP[$aslist + 4] + 24];
      
      FUNCTION_TABLE[$75]($aslist);
      __label__ = 17;
      break;
     case 17:
      
      _Py_ReprLeave($deque_addr);
      
      $0 = $result;
      __label__ = 18;
      break;
     case 18:
      
      $retval = $0;
      var $retval18 = $retval;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _deque_tp_print($deque, $fp, $flags) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $fp_addr;
      var $flags_addr;
      var $retval;
      var $0;
      var $it;
      var $item;
      var $emit;
      var $separator;
      var $i;
      $deque_addr = $deque;
      $fp_addr = $fp;
      $flags_addr = $flags;
      $emit = __str32;
      $separator = __str33;
      
      var $2 = _Py_ReprEnter($deque_addr);
      $i = $2;
      
      
      if ($i != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      if ($i < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      $0 = $i;
      __label__ = 24;
      break;
     case 3:
      
      
      var $10 = _fwrite(__str29, 1, 5, $fp_addr);
      $0 = 0;
      __label__ = 24;
      break;
     case 4:
      
      var $12 = _PyObject_GetIter($deque_addr);
      $it = $12;
      
      
      if ($it == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 24;
      break;
     case 6:
      
      
      var $17 = _fwrite(__str34, 1, 7, $fp_addr);
      __label__ = 15;
      break;
     case 7:
      
      
      var $20 = _fputs($emit, $fp_addr);
      
      $emit = $separator;
      
      
      var $24 = _PyObject_Print($item, $fp_addr, 0);
      var $25 = $24 != 0;
      
      
      
      var $29 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $29;
      
      
      
      var $35 = HEAP[$item] == 0;
      if ($25) {
        __label__ = 8;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 8:
      if ($35) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $40 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$40]($item);
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $45 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $45;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $56 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$56]($it);
      __label__ = 12;
      break;
     case 12:
      
      _Py_ReprLeave($deque_addr);
      $0 = -1;
      __label__ = 24;
      break;
     case 13:
      if ($35) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $63 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$63]($item);
      __label__ = 15;
      break;
     case 15:
      
      var $66 = _PyIter_Next($it);
      $item = $66;
      
      if ($66 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      _Py_ReprLeave($deque_addr);
      
      
      
      var $72 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $72;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $83 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$83]($it);
      __label__ = 18;
      break;
     case 18:
      var $85 = _PyErr_Occurred();
      
      if ($85 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      $0 = -1;
      __label__ = 24;
      break;
     case 20:
      
      
      
      
      var $91 = HEAP[$deque_addr + 28] == -1;
      if ($91) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      var $94 = _fwrite(__str35, 1, 2, $fp_addr);
      __label__ = 23;
      break;
     case 22:
      
      
      
      var $98 = HEAP[$deque_addr + 28];
      
      var $100 = _fprintf($fp_addr, __str36, allocate([ $98, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 23;
      break;
     case 23:
      $0 = 0;
      __label__ = 24;
      break;
     case 24:
      
      $retval = $0;
      var $retval24 = $retval;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _deque_richcompare($v, $w, $op) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $v_addr;
      var $w_addr;
      var $op_addr;
      var $retval;
      var $0;
      var $it1;
      var $it2;
      var $x;
      var $y;
      var $vs;
      var $ws;
      var $b;
      var $cmp;
      $v_addr = $v;
      $w_addr = $w;
      $op_addr = $op;
      $it1 = 0;
      $it2 = 0;
      $cmp = -1;
      
      
      
      
      if (HEAP[$v_addr + 4] == _deque_type) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$v_addr + 4];
      var $8 = _PyType_IsSubtype($7, _deque_type);
      
      if ($8 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$w_addr + 4] == _deque_type) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[$w_addr + 4];
      var $17 = _PyType_IsSubtype($16, _deque_type);
      
      if ($17 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $20 = HEAP[__Py_NotImplementedStruct] + 1;
      HEAP[__Py_NotImplementedStruct] = $20;
      $0 = __Py_NotImplementedStruct;
      __label__ = 58;
      break;
     case 5:
      
      
      
      
      $vs = HEAP[$v_addr + 24];
      
      
      
      
      $ws = HEAP[$w_addr + 24];
      var $29 = $op_addr;
      
      if ($29 == 2) {
        __lastLabel__ = 5;
        __label__ = 6;
        break;
      } else {
        __lastLabel__ = 5;
        __label__ = 11;
        break;
      }
     case 6:
      
      
      
      if ($v_addr == $w_addr) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      var $35 = HEAP[__Py_TrueStruct] + 1;
      HEAP[__Py_TrueStruct] = $35;
      $0 = __Py_TrueStruct;
      __label__ = 58;
      break;
     case 8:
      
      
      
      if ($vs != $ws) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      var $40 = HEAP[__Py_ZeroStruct] + 1;
      HEAP[__Py_ZeroStruct] = $40;
      $0 = __Py_ZeroStruct;
      __label__ = 58;
      break;
     case 10:
      var $_pr = $op_addr;
      __lastLabel__ = 10;
      __label__ = 11;
      break;
     case 11:
      var $41 = __lastLabel__ == 10 ? $_pr : $29;
      
      if ($41 == 3) {
        __label__ = 12;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 12:
      
      
      
      if ($v_addr == $w_addr) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      var $47 = HEAP[__Py_ZeroStruct] + 1;
      HEAP[__Py_ZeroStruct] = $47;
      $0 = __Py_ZeroStruct;
      __label__ = 58;
      break;
     case 14:
      
      
      
      if ($vs != $ws) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      var $52 = HEAP[__Py_TrueStruct] + 1;
      HEAP[__Py_TrueStruct] = $52;
      $0 = __Py_TrueStruct;
      __label__ = 58;
      break;
     case 16:
      
      var $54 = _PyObject_GetIter($v_addr);
      $it1 = $54;
      
      if ($54 == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      var $57 = _PyObject_GetIter($w_addr);
      $it2 = $57;
      
      
      if ($it2 == 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      var $61 = _PyIter_Next($it1);
      $x = $61;
      
      if ($61 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $63 = _PyErr_Occurred();
      
      if ($63 != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      var $66 = _PyIter_Next($it2);
      $y = $66;
      
      
      if ($x == 0) {
        __lastLabel__ = 20;
        __label__ = 36;
        break;
      } else {
        __lastLabel__ = 20;
        __label__ = 21;
        break;
      }
     case 21:
      
      
      var $_pr1 = $x;
      if ($y == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      var $72 = _PyObject_RichCompareBool($_pr1, $y, 2);
      $b = $72;
      
      
      var $75 = $x;
      if ($b == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 23:
      
      
      var $78 = _PyObject_RichCompareBool($75, $y, $op_addr);
      $cmp = $78;
      
      
      
      var $82 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $82;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $93 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$93]($x);
      __label__ = 25;
      break;
     case 25:
      
      
      
      var $98 = HEAP[$y] - 1;
      
      
      HEAP[$y] = $98;
      
      
      
      
      if (HEAP[$y] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 26:
      
      
      
      
      var $109 = HEAP[HEAP[$y + 4] + 24];
      
      FUNCTION_TABLE[$109]($y);
      __label__ = 47;
      break;
     case 27:
      
      
      var $113 = HEAP[$75] - 1;
      
      
      HEAP[$x] = $113;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $124 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$124]($x);
      __label__ = 29;
      break;
     case 29:
      
      
      
      var $129 = HEAP[$y] - 1;
      
      
      HEAP[$y] = $129;
      
      
      
      
      if (HEAP[$y] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $140 = HEAP[HEAP[$y + 4] + 24];
      
      FUNCTION_TABLE[$140]($y);
      __label__ = 31;
      break;
     case 31:
      
      var $143 = $b == -1;
      if ($143) {
        __label__ = 47;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 32:
      
      if ($_pr1 != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 33:
      
      
      
      var $148 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $148;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $159 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$159]($x);
      __label__ = 35;
      break;
     case 35:
      var $_pr3 = $y;
      __lastLabel__ = 35;
      __label__ = 36;
      break;
     case 36:
      var $161 = __lastLabel__ == 35 ? $_pr3 : $66;
      
      if ($161 != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 37:
      
      
      
      var $166 = HEAP[$y] - 1;
      
      
      HEAP[$y] = $166;
      
      
      
      
      if (HEAP[$y] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      var $177 = HEAP[HEAP[$y + 4] + 24];
      
      FUNCTION_TABLE[$177]($y);
      __label__ = 39;
      break;
     case 39:
      var $179 = _PyErr_Occurred();
      
      if ($179 != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      var $181 = $op_addr;
      if ($181 == 0) {
        __label__ = 41;
        break;
      } else if ($181 == 1) {
        __label__ = 42;
        break;
      } else if ($181 == 2) {
        __label__ = 43;
        break;
      } else if ($181 == 3) {
        __label__ = 44;
        break;
      } else if ($181 == 4) {
        __label__ = 45;
        break;
      } else if ($181 == 5) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 41:
      
      
      
      $cmp = $y != 0;
      __label__ = 47;
      break;
     case 42:
      
      
      
      $cmp = $x == 0;
      __label__ = 47;
      break;
     case 43:
      
      
      
      
      $cmp = $x == $y;
      __label__ = 47;
      break;
     case 44:
      
      
      
      
      $cmp = $x != $y;
      __label__ = 47;
      break;
     case 45:
      
      
      
      $cmp = $x != 0;
      __label__ = 47;
      break;
     case 46:
      
      
      
      $cmp = $y == 0;
      __label__ = 47;
      break;
     case 47:
      
      
      if ($it1 != 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 48:
      
      
      
      var $206 = HEAP[$it1] - 1;
      
      
      HEAP[$it1] = $206;
      
      
      
      
      if (HEAP[$it1] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      
      
      var $217 = HEAP[HEAP[$it1 + 4] + 24];
      
      FUNCTION_TABLE[$217]($it1);
      __label__ = 50;
      break;
     case 50:
      
      
      if ($it2 != 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 51:
      
      
      
      var $224 = HEAP[$it2] - 1;
      
      
      HEAP[$it2] = $224;
      
      
      
      
      if (HEAP[$it2] == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      
      
      
      
      var $235 = HEAP[HEAP[$it2 + 4] + 24];
      
      FUNCTION_TABLE[$235]($it2);
      __label__ = 53;
      break;
     case 53:
      
      
      if ($cmp == 1) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      
      var $240 = HEAP[__Py_TrueStruct] + 1;
      HEAP[__Py_TrueStruct] = $240;
      $0 = __Py_TrueStruct;
      __label__ = 58;
      break;
     case 55:
      
      
      if ($cmp == 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      
      var $244 = HEAP[__Py_ZeroStruct] + 1;
      HEAP[__Py_ZeroStruct] = $244;
      $0 = __Py_ZeroStruct;
      __label__ = 58;
      break;
     case 57:
      $0 = 0;
      __label__ = 58;
      break;
     case 58:
      
      $retval = $0;
      var $retval57 = $retval;
      return $retval57;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _deque_init($deque, $args, $kwdargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    _memset(__stackBase__, 0, 20);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $args_addr;
      var $kwdargs_addr;
      var $retval;
      var $0;
      var $iterable = __stackBase__;
      var $maxlenobj = __stackBase__ + 4;
      var $maxlen;
      var $kwlist = __stackBase__ + 8;
      var $rv;
      $deque_addr = $deque;
      $args_addr = $args;
      $kwdargs_addr = $kwdargs;
      HEAP[$iterable] = 0;
      HEAP[$maxlenobj] = 0;
      $maxlen = -1;
      
      HEAP[$kwlist] = __str37;
      
      HEAP[$kwlist + 4] = __str38;
      
      HEAP[$kwlist + 8] = 0;
      
      
      var $kwlist1 = $kwlist;
      var $6 = _PyArg_ParseTupleAndKeywords($args_addr, $kwdargs_addr, __str39, $kwlist1, allocate([ $iterable, 0, 0, 0, $maxlenobj, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($6 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 15;
      break;
     case 2:
      
      
      
      
      
      if (HEAP[$maxlenobj] != 0 & HEAP[$maxlenobj] != __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 3:
      var $12 = HEAP[$maxlenobj];
      var $13 = _PyInt_AsSsize_t($12);
      $maxlen = $13;
      var $14 = $maxlen;
      var $15 = $14 == -1;
      if ($15) {
        __lastLabel__ = 3;
        __label__ = 4;
        break;
      } else {
        __lastLabel__ = 3;
        __label__ = 7;
        break;
      }
     case 4:
      var $16 = _PyErr_Occurred();
      
      if ($16 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 15;
      break;
     case 6:
      var $_pr = $maxlen;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $18 = __lastLabel__ == 6 ? $_pr : $14;
      
      if ($18 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $20 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($20, __str40);
      $0 = -1;
      __label__ = 15;
      break;
     case 9:
      
      
      
      HEAP[$deque_addr + 28] = $maxlen;
      
      var $25 = _deque_clear($deque_addr);
      
      
      if (HEAP[$iterable] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      var $28 = HEAP[$iterable];
      
      var $30 = _deque_extend($deque_addr, $28);
      $rv = $30;
      
      
      if ($rv == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = -1;
      __label__ = 15;
      break;
     case 12:
      
      
      
      var $36 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $36;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $47 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$47]($rv);
      __label__ = 14;
      break;
     case 14:
      $0 = 0;
      __label__ = 15;
      break;
     case 15:
      
      $retval = $0;
      var $retval16 = $retval;
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _deque_get_maxlen($deque) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $retval;
      var $0;
      $deque_addr = $deque;
      
      
      
      var $4 = HEAP[$deque_addr + 28] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $6 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $6;
      $0 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 2:
      
      
      var $9 = HEAP[$deque_addr + 28];
      var $10 = _PyInt_FromSsize_t($9);
      $0 = $10;
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
  function _deque_iter($deque) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $retval;
      var $0;
      var $it;
      $deque_addr = $deque;
      var $1 = __PyObject_GC_New(_dequeiter_type);
      
      $it = $1;
      
      
      if ($it == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      var $7 = HEAP[$deque_addr + 8];
      
      
      HEAP[$it + 12] = $7;
      
      
      var $12 = HEAP[$deque_addr + 16];
      
      
      HEAP[$it + 8] = $12;
      
      
      
      
      var $19 = HEAP[$deque_addr] + 1;
      
      HEAP[$deque_addr] = $19;
      
      
      
      HEAP[$it + 16] = $deque_addr;
      
      
      var $26 = HEAP[$deque_addr + 32];
      
      
      HEAP[$it + 20] = $26;
      
      
      var $31 = HEAP[$deque_addr + 24];
      
      
      HEAP[$it + 24] = $31;
      
      
      _PyObject_GC_Track($it);
      
      
      $0 = $it;
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
  function _dequeiter_traverse($dio, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dio_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      $dio_addr = $dio;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$dio_addr + 16] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[$dio_addr + 16];
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
      __label__ = 4;
      break;
     case 3:
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
  function _dequeiter_dealloc($dio) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dio_addr;
      $dio_addr = $dio;
      
      
      
      
      if (HEAP[$dio_addr + 16] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $7 = HEAP[$dio_addr + 16];
      
      
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
      
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$dio_addr + 16] + 4] + 24];
      
      
      
      var $26 = HEAP[$dio_addr + 16];
      FUNCTION_TABLE[$22]($26);
      __label__ = 3;
      break;
     case 3:
      
      
      _PyObject_GC_Del($dio_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dequeiter_next($it) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $it_addr;
      var $retval;
      var $0;
      var $item;
      $it_addr = $it;
      
      
      
      
      
      
      
      
      
      
      var $11 = $it_addr + 24;
      if (HEAP[HEAP[$it_addr + 16] + 32] != HEAP[$it_addr + 20]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$11] = 0;
      var $12 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($12, __str14);
      $0 = 0;
      __label__ = 13;
      break;
     case 2:
      
      
      if (HEAP[$11] == 0) {
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
      
      
      
      
      
      
      
      
      
      if (HEAP[$it_addr + 12] == HEAP[HEAP[$it_addr + 16] + 12]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      if (HEAP[$it_addr + 8] > HEAP[HEAP[$it_addr + 16] + 20]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      ___assert_fail(__str57, __str3, 1168, ___PRETTY_FUNCTION___9783);
      throw "Reached an unreachable!";
     case 7:
      
      
      
      
      
      
      
      
      
      $item = HEAP[HEAP[$it_addr + 12] + 8 + HEAP[$it_addr + 8] * 4];
      
      
      
      var $45 = HEAP[$it_addr + 8] + 1;
      
      
      HEAP[$it_addr + 8] = $45;
      
      
      
      var $51 = HEAP[$it_addr + 24] - 1;
      
      
      HEAP[$it_addr + 24] = $51;
      
      
      
      
      if (HEAP[$it_addr + 8] == 62) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[$it_addr + 24] > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      
      
      
      if (HEAP[HEAP[$it_addr + 12] + 4] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str58, __str3, 1174, ___PRETTY_FUNCTION___9783);
      throw "Reached an unreachable!";
     case 11:
      
      
      
      
      var $72 = HEAP[HEAP[$it_addr + 12] + 4];
      
      
      HEAP[$it_addr + 12] = $72;
      
      
      HEAP[$it_addr + 8] = 0;
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $80 = HEAP[$item] + 1;
      
      
      HEAP[$item] = $80;
      
      $0 = $item;
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
  function _dequeiter_len($it) {
    
    var $it_addr;
    var $retval;
    var $0;
    $it_addr = $it;
    
    
    var $3 = HEAP[$it_addr + 24];
    var $4 = _PyInt_FromLong($3);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _deque_reviter($deque) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $deque_addr;
      var $retval;
      var $0;
      var $it;
      $deque_addr = $deque;
      var $1 = __PyObject_GC_New(_dequereviter_type);
      
      $it = $1;
      
      
      if ($it == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      var $7 = HEAP[$deque_addr + 12];
      
      
      HEAP[$it + 12] = $7;
      
      
      var $12 = HEAP[$deque_addr + 20];
      
      
      HEAP[$it + 8] = $12;
      
      
      
      
      var $19 = HEAP[$deque_addr] + 1;
      
      HEAP[$deque_addr] = $19;
      
      
      
      HEAP[$it + 16] = $deque_addr;
      
      
      var $26 = HEAP[$deque_addr + 32];
      
      
      HEAP[$it + 20] = $26;
      
      
      var $31 = HEAP[$deque_addr + 24];
      
      
      HEAP[$it + 24] = $31;
      
      
      _PyObject_GC_Track($it);
      
      
      $0 = $it;
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
  function _dequereviter_next($it) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $it_addr;
      var $retval;
      var $0;
      var $item;
      $it_addr = $it;
      
      
      
      
      if (HEAP[$it_addr + 24] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 13;
      break;
     case 2:
      
      
      
      
      
      
      
      
      
      var $14 = $it_addr;
      if (HEAP[HEAP[$it_addr + 16] + 32] != HEAP[$it_addr + 20]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      HEAP[$14 + 24] = 0;
      var $16 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($16, __str14);
      $0 = 0;
      __label__ = 13;
      break;
     case 4:
      
      
      
      
      
      
      
      
      if (HEAP[$14 + 12] == HEAP[HEAP[$it_addr + 16] + 8]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      if (HEAP[$it_addr + 8] < HEAP[HEAP[$it_addr + 16] + 16]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      ___assert_fail(__str61, __str3, 1264, ___PRETTY_FUNCTION___9856);
      throw "Reached an unreachable!";
     case 7:
      
      
      
      
      
      
      
      
      
      $item = HEAP[HEAP[$it_addr + 12] + 8 + HEAP[$it_addr + 8] * 4];
      
      
      
      var $46 = HEAP[$it_addr + 8] - 1;
      
      
      HEAP[$it_addr + 8] = $46;
      
      
      
      var $52 = HEAP[$it_addr + 24] - 1;
      
      
      HEAP[$it_addr + 24] = $52;
      
      
      
      var $58 = HEAP[$it_addr + 8] == -1;
      if ($58) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[$it_addr + 24] > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      
      
      
      if (HEAP[HEAP[$it_addr + 12]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str62, __str3, 1270, ___PRETTY_FUNCTION___9856);
      throw "Reached an unreachable!";
     case 11:
      
      
      
      
      var $73 = HEAP[HEAP[$it_addr + 12]];
      
      
      HEAP[$it_addr + 12] = $73;
      
      
      HEAP[$it_addr + 8] = 61;
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $81 = HEAP[$item] + 1;
      
      
      HEAP[$item] = $81;
      
      $0 = $item;
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
  function _defdict_missing($dd, $key) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dd_addr;
      var $key_addr;
      var $retval;
      var $0;
      var $factory;
      var $value;
      var $tup;
      $dd_addr = $dd;
      $key_addr = $key;
      
      
      
      $factory = HEAP[$dd_addr + 124];
      
      
      
      
      
      if ($factory == 0 | $factory == __Py_NoneStruct) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      var $9 = _PyTuple_Pack(1, allocate([ $key_addr, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $tup = $9;
      
      
      if ($tup == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 13;
      break;
     case 3:
      var $12 = HEAP[_PyExc_KeyError];
      
      _PyErr_SetObject($12, $tup);
      
      
      
      var $17 = HEAP[$tup] - 1;
      
      
      HEAP[$tup] = $17;
      
      
      
      
      if (HEAP[$tup] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $28 = HEAP[HEAP[$tup + 4] + 24];
      
      FUNCTION_TABLE[$28]($tup);
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      __label__ = 13;
      break;
     case 6:
      
      var $31 = _PyEval_CallObjectWithKeywords($factory, 0, 0);
      $value = $31;
      
      
      if ($value == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      $0 = $value;
      __label__ = 13;
      break;
     case 8:
      
      
      
      
      var $39 = _PyObject_SetItem($dd_addr, $key_addr, $value);
      
      var $41 = $value;
      if ($39 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      var $44 = HEAP[$41] - 1;
      
      
      HEAP[$value] = $44;
      
      
      
      
      if (HEAP[$value] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $55 = HEAP[HEAP[$value + 4] + 24];
      
      FUNCTION_TABLE[$55]($value);
      __label__ = 11;
      break;
     case 11:
      $0 = 0;
      __label__ = 13;
      break;
     case 12:
      $0 = $41;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval14 = $retval;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _defdict_copy($dd) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dd_addr;
      var $retval;
      var $0;
      $dd_addr = $dd;
      
      
      
      
      var $5 = $dd_addr;
      if (HEAP[$dd_addr + 124] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[$5 + 4];
      
      var $11 = _PyObject_CallFunctionObjArgs($9, allocate([ __Py_NoneStruct, 0, 0, 0, $dd_addr, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.defdictobject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $11;
      __label__ = 3;
      break;
     case 2:
      
      var $13 = HEAP[$5 + 124];
      
      
      
      
      var $18 = HEAP[$dd_addr + 4];
      
      var $20 = _PyObject_CallFunctionObjArgs($18, allocate([ $13, 0, 0, 0, $dd_addr, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.defdictobject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $20;
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
  function _defdict_reduce($dd) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dd_addr;
      var $retval;
      var $0;
      var $args;
      var $items;
      var $result;
      $dd_addr = $dd;
      
      
      
      
      if (HEAP[$dd_addr + 124] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$dd_addr + 124] == __Py_NoneStruct) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $9 = _PyTuple_New(0);
      $args = $9;
      __lastLabel__ = 2;
      __label__ = 4;
      break;
     case 3:
      
      
      var $12 = HEAP[$dd_addr + 124];
      var $13 = _PyTuple_Pack(1, allocate([ $12, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $args = $13;
      __lastLabel__ = 3;
      __label__ = 4;
      break;
     case 4:
      var $14 = __lastLabel__ == 3 ? $13 : $9;
      
      if ($14 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 15;
      break;
     case 6:
      
      
      var $18 = _PyObject_CallMethod($dd_addr, __str64, __str65, allocate(1, "i32", ALLOC_STACK));
      $items = $18;
      
      
      if ($items == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      var $24 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $24;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $35 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$35]($args);
      __label__ = 9;
      break;
     case 9:
      $0 = 0;
      __label__ = 15;
      break;
     case 10:
      
      
      
      var $40 = HEAP[$dd_addr + 4];
      
      
      var $43 = _PyTuple_Pack(5, allocate([ $40, 0, 0, 0, $args, 0, 0, 0, __Py_NoneStruct, 0, 0, 0, __Py_NoneStruct, 0, 0, 0, $items, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $result = $43;
      
      
      
      var $47 = HEAP[$items] - 1;
      
      
      HEAP[$items] = $47;
      
      
      
      
      if (HEAP[$items] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $58 = HEAP[HEAP[$items + 4] + 24];
      
      FUNCTION_TABLE[$58]($items);
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $63 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $63;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $74 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$74]($args);
      __label__ = 14;
      break;
     case 14:
      
      $0 = $result;
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
  function _defdict_dealloc($dd) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dd_addr;
      var $_py_tmp;
      $dd_addr = $dd;
      
      
      
      
      if (HEAP[$dd_addr + 124] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      $_py_tmp = HEAP[$dd_addr + 124];
      
      
      HEAP[$dd_addr + 124] = 0;
      
      
      
      var $12 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $12;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $23 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$23]($_py_tmp);
      __label__ = 3;
      break;
     case 3:
      var $25 = HEAP[_PyDict_Type + 24];
      
      
      FUNCTION_TABLE[$25]($dd_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _defdict_print($dd, $fp, $flags) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dd_addr;
      var $fp_addr;
      var $flags_addr;
      var $retval;
      var $0;
      var $sts;
      $dd_addr = $dd;
      $fp_addr = $fp;
      $flags_addr = $flags;
      
      
      var $3 = _fwrite(__str70, 1, 12, $fp_addr);
      
      
      
      
      if (HEAP[$dd_addr + 124] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $10 = _fwrite(__str71, 1, 4, $fp_addr);
      __label__ = 3;
      break;
     case 2:
      
      
      var $13 = HEAP[$dd_addr + 124];
      
      var $15 = _PyObject_Print($13, $fp_addr, 0);
      __label__ = 3;
      break;
     case 3:
      
      
      var $18 = _fwrite(__str33, 1, 2, $fp_addr);
      var $19 = HEAP[_PyDict_Type + 28];
      
      
      
      var $23 = FUNCTION_TABLE[$19]($dd_addr, $fp_addr, 0);
      $sts = $23;
      
      
      var $26 = _fputc(41, $fp_addr);
      
      $0 = $sts;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _defdict_repr($dd) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dd_addr;
      var $retval;
      var $0;
      var $defrepr;
      var $baserepr;
      var $result;
      var $status;
      $dd_addr = $dd;
      var $1 = HEAP[_PyDict_Type + 44];
      
      
      var $4 = FUNCTION_TABLE[$1]($dd_addr);
      $baserepr = $4;
      
      
      if ($baserepr == 0) {
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
      
      
      
      
      if (HEAP[$dd_addr + 124] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = _PyString_FromString(__str71);
      $defrepr = $11;
      __lastLabel__ = 3;
      __label__ = 10;
      break;
     case 4:
      
      
      var $14 = HEAP[$dd_addr + 124];
      var $15 = _Py_ReprEnter($14);
      $status = $15;
      
      
      if ($status != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      if ($status < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 19;
      break;
     case 7:
      var $20 = _PyString_FromString(__str72);
      $defrepr = $20;
      __label__ = 9;
      break;
     case 8:
      
      
      var $23 = HEAP[$dd_addr + 124];
      var $24 = _PyObject_Repr($23);
      $defrepr = $24;
      __label__ = 9;
      break;
     case 9:
      
      
      var $27 = HEAP[$dd_addr + 124];
      _Py_ReprLeave($27);
      var $_pr = $defrepr;
      __lastLabel__ = 9;
      __label__ = 10;
      break;
     case 10:
      var $28 = __lastLabel__ == 9 ? $_pr : $11;
      
      var $30 = $baserepr;
      if ($28 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      var $33 = HEAP[$30] - 1;
      
      
      HEAP[$baserepr] = $33;
      
      
      
      
      if (HEAP[$baserepr] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $44 = HEAP[HEAP[$baserepr + 4] + 24];
      
      FUNCTION_TABLE[$44]($baserepr);
      __label__ = 13;
      break;
     case 13:
      $0 = 0;
      __label__ = 19;
      break;
     case 14:
      
      
      
      
      
      
      
      var $53 = _PyString_FromFormat(__str73, allocate([ $defrepr + 20, 0, 0, 0, $30 + 20, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $result = $53;
      
      
      
      var $57 = HEAP[$defrepr] - 1;
      
      
      HEAP[$defrepr] = $57;
      
      
      
      
      if (HEAP[$defrepr] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $68 = HEAP[HEAP[$defrepr + 4] + 24];
      
      FUNCTION_TABLE[$68]($defrepr);
      __label__ = 16;
      break;
     case 16:
      
      
      
      var $73 = HEAP[$baserepr] - 1;
      
      
      HEAP[$baserepr] = $73;
      
      
      
      
      if (HEAP[$baserepr] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $84 = HEAP[HEAP[$baserepr + 4] + 24];
      
      FUNCTION_TABLE[$84]($baserepr);
      __label__ = 18;
      break;
     case 18:
      
      $0 = $result;
      __label__ = 19;
      break;
     case 19:
      
      $retval = $0;
      var $retval19 = $retval;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _defdict_traverse($self, $visit, $arg) {
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
      $self_addr = $self;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      
      if (HEAP[$self_addr + 124] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[$self_addr + 124];
      var $10 = $visit_addr;
      
      var $12 = FUNCTION_TABLE[$10]($9, $arg_addr);
      $vret = $12;
      
      
      if ($vret != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      $0 = $vret;
      __label__ = 4;
      break;
     case 3:
      var $16 = HEAP[_PyDict_Type + 92];
      
      
      
      var $20 = FUNCTION_TABLE[$16]($self_addr, $visit_addr, $arg_addr);
      $0 = $20;
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
  function _defdict_tp_clear($dd) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dd_addr;
      var $retval;
      var $0;
      var $_py_tmp;
      $dd_addr = $dd;
      
      
      
      
      if (HEAP[$dd_addr + 124] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      $_py_tmp = HEAP[$dd_addr + 124];
      
      
      HEAP[$dd_addr + 124] = 0;
      
      
      
      var $13 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $13;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $24 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$24]($_py_tmp);
      __label__ = 3;
      break;
     case 3:
      var $26 = HEAP[_PyDict_Type + 96];
      
      
      var $29 = FUNCTION_TABLE[$26]($dd_addr);
      $0 = $29;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _defdict_init($self, $args, $kwds) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $dd;
      var $olddefault;
      var $newdefault;
      var $newargs;
      var $result;
      var $n;
      $self_addr = $self;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      $dd = $self_addr;
      
      
      
      $olddefault = HEAP[$dd + 124];
      $newdefault = 0;
      
      
      if ($args_addr == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$args_addr + 4] + 84] & 67108864) == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $15 = _PyTuple_New(0);
      $newargs = $15;
      __lastLabel__ = 2;
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      $n = HEAP[$args_addr + 8];
      
      
      if ($n > 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      
      
      $newdefault = HEAP[$args_addr + 12];
      
      var $28 = _PyCallable_Check($newdefault);
      
      
      
      
      if ($28 == 0 & $newdefault != __Py_NoneStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $32 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($32, __str74);
      $0 = -1;
      __label__ = 17;
      break;
     case 6:
      
      
      var $35 = _PySequence_GetSlice($args_addr, 1, $n);
      $newargs = $35;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $36 = __lastLabel__ == 6 ? $35 : $15;
      
      if ($36 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = -1;
      __label__ = 17;
      break;
     case 9:
      
      
      if ($newdefault != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      var $43 = HEAP[$newdefault] + 1;
      
      
      HEAP[$newdefault] = $43;
      __label__ = 11;
      break;
     case 11:
      
      
      
      HEAP[$dd + 124] = $newdefault;
      var $49 = HEAP[_PyDict_Type + 148];
      
      
      
      var $53 = FUNCTION_TABLE[$49]($self_addr, $newargs, $kwds_addr);
      $result = $53;
      
      
      
      var $57 = HEAP[$newargs] - 1;
      
      
      HEAP[$newargs] = $57;
      
      
      
      
      if (HEAP[$newargs] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $68 = HEAP[HEAP[$newargs + 4] + 24];
      
      FUNCTION_TABLE[$68]($newargs);
      __label__ = 13;
      break;
     case 13:
      
      
      if ($olddefault != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      var $75 = HEAP[$olddefault] - 1;
      
      
      HEAP[$olddefault] = $75;
      
      
      
      
      if (HEAP[$olddefault] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $86 = HEAP[HEAP[$olddefault + 4] + 24];
      
      FUNCTION_TABLE[$86]($olddefault);
      __label__ = 16;
      break;
     case 16:
      
      $0 = $result;
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
  function _init_collections() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $0 = _Py_InitModule4(__str76, 0, _module_doc, 0, 1013);
      $m = $0;
      
      
      if ($m == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = _PyType_Ready(_deque_type);
      
      if ($3 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      var $6 = HEAP[_deque_type] + 1;
      HEAP[_deque_type] = $6;
      
      var $8 = _PyModule_AddObject($m, __str77, _deque_type);
      HEAP[_defdict_type + 128] = _PyDict_Type;
      var $9 = _PyType_Ready(_defdict_type);
      
      if ($9 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $12 = HEAP[_defdict_type] + 1;
      HEAP[_defdict_type] = $12;
      
      var $14 = _PyModule_AddObject($m, __str78, _defdict_type);
      var $15 = _PyType_Ready(_dequeiter_type);
      
      if ($15 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $17 = _PyType_Ready(_dequereviter_type);
      return;
     case 5:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_collections"] = _init_collections;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _deque_get_maxlen, 0, _deque_len, 0, _deque_item, 0, _deque_ass_item, 0, _deque_inplace_concat, 0, _deque_append, 0, _deque_appendleft, 0, _deque_clearmethod, 0, _deque_copy, 0, _deque_count, 0, _deque_extend, 0, _deque_extendleft, 0, _deque_pop, 0, _deque_popleft, 0, _deque_reduce, 0, _deque_remove, 0, _deque_reviter, 0, _deque_reverse, 0, _deque_rotate, 0, _deque_dealloc, 0, _deque_tp_print, 0, _deque_repr, 0, _PyObject_HashNotImplemented, 0, _PyObject_GenericGetAttr, 0, _deque_traverse, 0, _deque_clear, 0, _deque_richcompare, 0, _deque_iter, 0, _deque_init, 0, _PyType_GenericAlloc, 0, _deque_new, 0, _PyObject_GC_Del, 0, _dequeiter_len, 0, _dequeiter_dealloc, 0, _dequeiter_traverse, 0, _PyObject_SelfIter, 0, _dequeiter_next, 0, _dequereviter_next, 0, _defdict_missing, 0, _defdict_copy, 0, _defdict_reduce, 0, _defdict_dealloc, 0, _defdict_print, 0, _defdict_repr, 0, _defdict_traverse, 0, _defdict_tp_clear, 0, _defdict_init, 0 ]);
  function run(args) {
    _numfreeblocks = allocate(1, "i32", ALLOC_NORMAL);
    __str = allocate([ 99, 97, 110, 110, 111, 116, 32, 97, 100, 100, 32, 109, 111, 114, 101, 32, 98, 108, 111, 99, 107, 115, 32, 116, 111, 32, 116, 104, 101, 32, 100, 101, 113, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    _freeblocks = allocate(40, "%struct.block*", ALLOC_NORMAL);
    __str1 = allocate([ 112, 111, 112, 32, 102, 114, 111, 109, 32, 97, 110, 32, 101, 109, 112, 116, 121, 32, 100, 101, 113, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 100, 101, 113, 117, 101, 45, 62, 108, 101, 102, 116, 98, 108, 111, 99, 107, 32, 61, 61, 32, 100, 101, 113, 117, 101, 45, 62, 114, 105, 103, 104, 116, 98, 108, 111, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 95, 99, 111, 108, 108, 101, 99, 116, 105, 111, 110, 115, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8417 = allocate([ 100, 101, 113, 117, 101, 95, 112, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 100, 101, 113, 117, 101, 45, 62, 108, 101, 102, 116, 105, 110, 100, 101, 120, 32, 61, 61, 32, 100, 101, 113, 117, 101, 45, 62, 114, 105, 103, 104, 116, 105, 110, 100, 101, 120, 43, 49, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 100, 101, 113, 117, 101, 45, 62, 108, 101, 102, 116, 98, 108, 111, 99, 107, 32, 33, 61, 32, 100, 101, 113, 117, 101, 45, 62, 114, 105, 103, 104, 116, 98, 108, 111, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    _pop_doc = allocate([ 82, 101, 109, 111, 118, 101, 32, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 114, 105, 103, 104, 116, 109, 111, 115, 116, 32, 101, 108, 101, 109, 101, 110, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 100, 101, 113, 117, 101, 45, 62, 108, 101, 102, 116, 98, 108, 111, 99, 107, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8461 = allocate([ 100, 101, 113, 117, 101, 95, 112, 111, 112, 108, 101, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 112, 114, 101, 118, 98, 108, 111, 99, 107, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    _popleft_doc = allocate([ 82, 101, 109, 111, 118, 101, 32, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 108, 101, 102, 116, 109, 111, 115, 116, 32, 101, 108, 101, 109, 101, 110, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 100, 101, 113, 117, 101, 45, 62, 114, 105, 103, 104, 116, 98, 108, 111, 99, 107, 45, 62, 114, 105, 103, 104, 116, 108, 105, 110, 107, 32, 61, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8509 = allocate([ 100, 101, 113, 117, 101, 95, 97, 112, 112, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 114, 118, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 32, 38, 38, 32, 100, 101, 113, 117, 101, 45, 62, 108, 101, 110, 32, 60, 61, 32, 100, 101, 113, 117, 101, 45, 62, 109, 97, 120, 108, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    _append_doc = allocate([ 65, 100, 100, 32, 97, 110, 32, 101, 108, 101, 109, 101, 110, 116, 32, 116, 111, 32, 116, 104, 101, 32, 114, 105, 103, 104, 116, 32, 115, 105, 100, 101, 32, 111, 102, 32, 116, 104, 101, 32, 100, 101, 113, 117, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 100, 101, 113, 117, 101, 45, 62, 108, 101, 102, 116, 98, 108, 111, 99, 107, 45, 62, 108, 101, 102, 116, 108, 105, 110, 107, 32, 61, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8564 = allocate([ 100, 101, 113, 117, 101, 95, 97, 112, 112, 101, 110, 100, 108, 101, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    _appendleft_doc = allocate([ 65, 100, 100, 32, 97, 110, 32, 101, 108, 101, 109, 101, 110, 116, 32, 116, 111, 32, 116, 104, 101, 32, 108, 101, 102, 116, 32, 115, 105, 100, 101, 32, 111, 102, 32, 116, 104, 101, 32, 100, 101, 113, 117, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8652 = allocate([ 100, 101, 113, 117, 101, 95, 101, 120, 116, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _extend_doc = allocate([ 69, 120, 116, 101, 110, 100, 32, 116, 104, 101, 32, 114, 105, 103, 104, 116, 32, 115, 105, 100, 101, 32, 111, 102, 32, 116, 104, 101, 32, 100, 101, 113, 117, 101, 32, 119, 105, 116, 104, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8758 = allocate([ 100, 101, 113, 117, 101, 95, 101, 120, 116, 101, 110, 100, 108, 101, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    _extendleft_doc = allocate([ 69, 120, 116, 101, 110, 100, 32, 116, 104, 101, 32, 108, 101, 102, 116, 32, 115, 105, 100, 101, 32, 111, 102, 32, 116, 104, 101, 32, 100, 101, 113, 117, 101, 32, 119, 105, 116, 104, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 105, 116, 101, 109, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8884 = allocate([ 95, 100, 101, 113, 117, 101, 95, 114, 111, 116, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 124, 110, 58, 114, 111, 116, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _rotate_doc = allocate([ 82, 111, 116, 97, 116, 101, 32, 116, 104, 101, 32, 100, 101, 113, 117, 101, 32, 110, 32, 115, 116, 101, 112, 115, 32, 116, 111, 32, 116, 104, 101, 32, 114, 105, 103, 104, 116, 32, 40, 100, 101, 102, 97, 117, 108, 116, 32, 110, 61, 49, 41, 46, 32, 32, 73, 102, 32, 110, 32, 105, 115, 32, 110, 101, 103, 97, 116, 105, 118, 101, 44, 32, 114, 111, 116, 97, 116, 101, 115, 32, 108, 101, 102, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 108, 101, 102, 116, 98, 108, 111, 99, 107, 32, 33, 61, 32, 114, 105, 103, 104, 116, 98, 108, 111, 99, 107, 32, 124, 124, 32, 108, 101, 102, 116, 105, 110, 100, 101, 120, 32, 60, 32, 114, 105, 103, 104, 116, 105, 110, 100, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8974 = allocate([ 100, 101, 113, 117, 101, 95, 114, 101, 118, 101, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    _reverse_doc = allocate([ 68, 46, 114, 101, 118, 101, 114, 115, 101, 40, 41, 32, 45, 45, 32, 114, 101, 118, 101, 114, 115, 101, 32, 42, 73, 78, 32, 80, 76, 65, 67, 69, 42, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 100, 101, 113, 117, 101, 32, 109, 117, 116, 97, 116, 101, 100, 32, 100, 117, 114, 105, 110, 103, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    _count_doc = allocate([ 68, 46, 99, 111, 117, 110, 116, 40, 118, 97, 108, 117, 101, 41, 32, 45, 62, 32, 105, 110, 116, 101, 103, 101, 114, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 115, 32, 111, 102, 32, 118, 97, 108, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 100, 101, 113, 117, 101, 32, 109, 117, 116, 97, 116, 101, 100, 32, 100, 117, 114, 105, 110, 103, 32, 114, 101, 109, 111, 118, 101, 40, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 116, 103, 116, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9049 = allocate([ 100, 101, 113, 117, 101, 95, 114, 101, 109, 111, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 100, 101, 113, 117, 101, 46, 114, 101, 109, 111, 118, 101, 40, 120, 41, 58, 32, 120, 32, 110, 111, 116, 32, 105, 110, 32, 100, 101, 113, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    _remove_doc = allocate([ 68, 46, 114, 101, 109, 111, 118, 101, 40, 118, 97, 108, 117, 101, 41, 32, 45, 45, 32, 114, 101, 109, 111, 118, 101, 32, 102, 105, 114, 115, 116, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 32, 111, 102, 32, 118, 97, 108, 117, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9087 = allocate([ 100, 101, 113, 117, 101, 95, 99, 108, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 100, 101, 113, 117, 101, 45, 62, 108, 101, 102, 116, 98, 108, 111, 99, 107, 32, 61, 61, 32, 100, 101, 113, 117, 101, 45, 62, 114, 105, 103, 104, 116, 98, 108, 111, 99, 107, 32, 38, 38, 32, 100, 101, 113, 117, 101, 45, 62, 108, 101, 102, 116, 105, 110, 100, 101, 120, 32, 45, 32, 49, 32, 61, 61, 32, 100, 101, 113, 117, 101, 45, 62, 114, 105, 103, 104, 116, 105, 110, 100, 101, 120, 32, 38, 38, 32, 100, 101, 113, 117, 101, 45, 62, 108, 101, 110, 32, 61, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 100, 101, 113, 117, 101, 32, 105, 110, 100, 101, 120, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 105, 32, 62, 61, 32, 48, 32, 38, 38, 32, 105, 32, 60, 32, 100, 101, 113, 117, 101, 45, 62, 108, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9162 = allocate([ 100, 101, 113, 117, 101, 95, 100, 101, 108, 95, 105, 116, 101, 109, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 114, 118, 32, 33, 61, 32, 45, 49, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9234 = allocate([ 100, 101, 113, 117, 101, 95, 99, 108, 101, 97, 114, 109, 101, 116, 104, 111, 100, 0 ], "i8", ALLOC_NORMAL);
    _clear_doc = allocate([ 82, 101, 109, 111, 118, 101, 32, 97, 108, 108, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 100, 101, 113, 117, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9246 = allocate([ 100, 101, 113, 117, 101, 95, 100, 101, 97, 108, 108, 111, 99, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 79, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 79, 105, 0 ], "i8", ALLOC_NORMAL);
    _copy_doc = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 115, 104, 97, 108, 108, 111, 119, 32, 99, 111, 112, 121, 32, 111, 102, 32, 97, 32, 100, 101, 113, 117, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 95, 95, 100, 105, 99, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 79, 40, 79, 41, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 79, 40, 79, 110, 41, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 79, 40, 79, 79, 41, 79, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 79, 40, 79, 110, 41, 79, 0 ], "i8", ALLOC_NORMAL);
    _reduce_doc = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 116, 97, 116, 101, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 32, 102, 111, 114, 32, 112, 105, 99, 107, 108, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 91, 46, 46, 46, 93, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 100, 101, 113, 117, 101, 40, 37, 37, 114, 44, 32, 109, 97, 120, 108, 101, 110, 61, 37, 122, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 100, 101, 113, 117, 101, 40, 37, 114, 41, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate(1, "i8", ALLOC_NORMAL);
    __str33 = allocate([ 44, 32, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 100, 101, 113, 117, 101, 40, 91, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 93, 41, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 93, 44, 32, 109, 97, 120, 108, 101, 110, 61, 37, 122, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 105, 116, 101, 114, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 109, 97, 120, 108, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 124, 79, 79, 58, 100, 101, 113, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 109, 97, 120, 108, 101, 110, 32, 109, 117, 115, 116, 32, 98, 101, 32, 110, 111, 110, 45, 110, 101, 103, 97, 116, 105, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 109, 97, 120, 105, 109, 117, 109, 32, 115, 105, 122, 101, 32, 111, 102, 32, 97, 32, 100, 101, 113, 117, 101, 32, 111, 114, 32, 78, 111, 110, 101, 32, 105, 102, 32, 117, 110, 98, 111, 117, 110, 100, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    _deque_getset = allocate(40, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _deque_as_sequence = allocate(40, [ "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32, i32)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, i32, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0 ], ALLOC_NORMAL);
    _reversed_doc = allocate([ 68, 46, 95, 95, 114, 101, 118, 101, 114, 115, 101, 100, 95, 95, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 97, 32, 114, 101, 118, 101, 114, 115, 101, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 111, 118, 101, 114, 32, 116, 104, 101, 32, 100, 101, 113, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 97, 112, 112, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 97, 112, 112, 101, 110, 100, 108, 101, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 99, 108, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 95, 95, 99, 111, 112, 121, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 101, 120, 116, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 101, 120, 116, 101, 110, 100, 108, 101, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 112, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 112, 111, 112, 108, 101, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 114, 101, 109, 111, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 95, 95, 114, 101, 118, 101, 114, 115, 101, 100, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 114, 101, 118, 101, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 114, 111, 116, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _deque_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _deque_doc = allocate([ 100, 101, 113, 117, 101, 40, 105, 116, 101, 114, 97, 98, 108, 101, 91, 44, 32, 109, 97, 120, 108, 101, 110, 93, 41, 32, 45, 45, 62, 32, 100, 101, 113, 117, 101, 32, 111, 98, 106, 101, 99, 116, 10, 10, 66, 117, 105, 108, 100, 32, 97, 110, 32, 111, 114, 100, 101, 114, 101, 100, 32, 99, 111, 108, 108, 101, 99, 116, 105, 111, 110, 32, 119, 105, 116, 104, 32, 111, 112, 116, 105, 109, 105, 122, 101, 100, 32, 97, 99, 99, 101, 115, 115, 32, 102, 114, 111, 109, 32, 105, 116, 115, 32, 101, 110, 100, 112, 111, 105, 110, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 99, 111, 108, 108, 101, 99, 116, 105, 111, 110, 115, 46, 100, 101, 113, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    _deque_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str57 = allocate([ 33, 40, 105, 116, 45, 62, 98, 32, 61, 61, 32, 105, 116, 45, 62, 100, 101, 113, 117, 101, 45, 62, 114, 105, 103, 104, 116, 98, 108, 111, 99, 107, 32, 38, 38, 32, 105, 116, 45, 62, 105, 110, 100, 101, 120, 32, 62, 32, 105, 116, 45, 62, 100, 101, 113, 117, 101, 45, 62, 114, 105, 103, 104, 116, 105, 110, 100, 101, 120, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9783 = allocate([ 100, 101, 113, 117, 101, 105, 116, 101, 114, 95, 110, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 105, 116, 45, 62, 98, 45, 62, 114, 105, 103, 104, 116, 108, 105, 110, 107, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    _length_hint_doc = allocate([ 80, 114, 105, 118, 97, 116, 101, 32, 109, 101, 116, 104, 111, 100, 32, 114, 101, 116, 117, 114, 110, 105, 110, 103, 32, 97, 110, 32, 101, 115, 116, 105, 109, 97, 116, 101, 32, 111, 102, 32, 108, 101, 110, 40, 108, 105, 115, 116, 40, 105, 116, 41, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 95, 95, 108, 101, 110, 103, 116, 104, 95, 104, 105, 110, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _dequeiter_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str60 = allocate([ 100, 101, 113, 117, 101, 95, 105, 116, 101, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _dequeiter_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str61 = allocate([ 33, 40, 105, 116, 45, 62, 98, 32, 61, 61, 32, 105, 116, 45, 62, 100, 101, 113, 117, 101, 45, 62, 108, 101, 102, 116, 98, 108, 111, 99, 107, 32, 38, 38, 32, 105, 116, 45, 62, 105, 110, 100, 101, 120, 32, 60, 32, 105, 116, 45, 62, 100, 101, 113, 117, 101, 45, 62, 108, 101, 102, 116, 105, 110, 100, 101, 120, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9856 = allocate([ 100, 101, 113, 117, 101, 114, 101, 118, 105, 116, 101, 114, 95, 110, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 105, 116, 45, 62, 98, 45, 62, 108, 101, 102, 116, 108, 105, 110, 107, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 100, 101, 113, 117, 101, 95, 114, 101, 118, 101, 114, 115, 101, 95, 105, 116, 101, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _dequereviter_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _defdict_missing_doc = allocate([ 95, 95, 109, 105, 115, 115, 105, 110, 103, 95, 95, 40, 107, 101, 121, 41, 32, 35, 32, 67, 97, 108, 108, 101, 100, 32, 98, 121, 32, 95, 95, 103, 101, 116, 105, 116, 101, 109, 95, 95, 32, 102, 111, 114, 32, 109, 105, 115, 115, 105, 110, 103, 32, 107, 101, 121, 59, 32, 112, 115, 101, 117, 100, 111, 45, 99, 111, 100, 101, 58, 10, 32, 32, 105, 102, 32, 115, 101, 108, 102, 46, 100, 101, 102, 97, 117, 108, 116, 95, 102, 97, 99, 116, 111, 114, 121, 32, 105, 115, 32, 78, 111, 110, 101, 58, 32, 114, 97, 105, 115, 101, 32, 75, 101, 121, 69, 114, 114, 111, 114, 40, 40, 107, 101, 121, 44, 41, 41, 10, 32, 32, 115, 101, 108, 102, 91, 107, 101, 121, 93, 32, 61, 32, 118, 97, 108, 117, 101, 32, 61, 32, 115, 101, 108, 102, 46, 100, 101, 102, 97, 117, 108, 116, 95, 102, 97, 99, 116, 111, 114, 121, 40, 41, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 10, 0 ], "i8", ALLOC_NORMAL);
    _defdict_copy_doc = allocate([ 68, 46, 99, 111, 112, 121, 40, 41, 32, 45, 62, 32, 97, 32, 115, 104, 97, 108, 108, 111, 119, 32, 99, 111, 112, 121, 32, 111, 102, 32, 68, 46, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 105, 116, 101, 114, 105, 116, 101, 109, 115, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 95, 95, 109, 105, 115, 115, 105, 110, 103, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 99, 111, 112, 121, 0 ], "i8", ALLOC_NORMAL);
    _defdict_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str68 = allocate([ 100, 101, 102, 97, 117, 108, 116, 95, 102, 97, 99, 116, 111, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 70, 97, 99, 116, 111, 114, 121, 32, 102, 111, 114, 32, 100, 101, 102, 97, 117, 108, 116, 32, 118, 97, 108, 117, 101, 32, 99, 97, 108, 108, 101, 100, 32, 98, 121, 32, 95, 95, 109, 105, 115, 115, 105, 110, 103, 95, 95, 40, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _defdict_members = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str70 = allocate([ 100, 101, 102, 97, 117, 108, 116, 100, 105, 99, 116, 40, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 78, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 46, 46, 46, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 100, 101, 102, 97, 117, 108, 116, 100, 105, 99, 116, 40, 37, 115, 44, 32, 37, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 102, 105, 114, 115, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 99, 97, 108, 108, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _defdict_doc = allocate([ 100, 101, 102, 97, 117, 108, 116, 100, 105, 99, 116, 40, 100, 101, 102, 97, 117, 108, 116, 95, 102, 97, 99, 116, 111, 114, 121, 41, 32, 45, 45, 62, 32, 100, 105, 99, 116, 32, 119, 105, 116, 104, 32, 100, 101, 102, 97, 117, 108, 116, 32, 102, 97, 99, 116, 111, 114, 121, 10, 10, 84, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 102, 97, 99, 116, 111, 114, 121, 32, 105, 115, 32, 99, 97, 108, 108, 101, 100, 32, 119, 105, 116, 104, 111, 117, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 116, 111, 32, 112, 114, 111, 100, 117, 99, 101, 10, 97, 32, 110, 101, 119, 32, 118, 97, 108, 117, 101, 32, 119, 104, 101, 110, 32, 97, 32, 107, 101, 121, 32, 105, 115, 32, 110, 111, 116, 32, 112, 114, 101, 115, 101, 110, 116, 44, 32, 105, 110, 32, 95, 95, 103, 101, 116, 105, 116, 101, 109, 95, 95, 32, 111, 110, 108, 121, 46, 10, 65, 32, 100, 101, 102, 97, 117, 108, 116, 100, 105, 99, 116, 32, 99, 111, 109, 112, 97, 114, 101, 115, 32, 101, 113, 117, 97, 108, 32, 116, 111, 32, 97, 32, 100, 105, 99, 116, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 105, 116, 101, 109, 115, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 99, 111, 108, 108, 101, 99, 116, 105, 111, 110, 115, 46, 100, 101, 102, 97, 117, 108, 116, 100, 105, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _defdict_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_doc = allocate([ 72, 105, 103, 104, 32, 112, 101, 114, 102, 111, 114, 109, 97, 110, 99, 101, 32, 100, 97, 116, 97, 32, 115, 116, 114, 117, 99, 116, 117, 114, 101, 115, 46, 10, 45, 32, 100, 101, 113, 117, 101, 58, 32, 32, 32, 32, 32, 32, 32, 32, 111, 114, 100, 101, 114, 101, 100, 32, 99, 111, 108, 108, 101, 99, 116, 105, 111, 110, 32, 97, 99, 99, 101, 115, 115, 105, 98, 108, 101, 32, 102, 114, 111, 109, 32, 101, 110, 100, 112, 111, 105, 110, 116, 115, 32, 111, 110, 108, 121, 10, 45, 32, 100, 101, 102, 97, 117, 108, 116, 100, 105, 99, 116, 58, 32, 32, 100, 105, 99, 116, 32, 115, 117, 98, 99, 108, 97, 115, 115, 32, 119, 105, 116, 104, 32, 97, 32, 100, 101, 102, 97, 117, 108, 116, 32, 118, 97, 108, 117, 101, 32, 102, 97, 99, 116, 111, 114, 121, 10, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 95, 99, 111, 108, 108, 101, 99, 116, 105, 111, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 100, 101, 113, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 100, 101, 102, 97, 117, 108, 116, 100, 105, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_deque_getset] = __str38;
    HEAP[_deque_getset + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_deque_getset + 12] = __str41;
    HEAP[_deque_as_sequence] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_deque_as_sequence + 12] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_deque_as_sequence + 20] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_deque_as_sequence + 32] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_deque_methods] = __str42;
    HEAP[_deque_methods + 4] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_deque_methods + 12] = _append_doc;
    HEAP[_deque_methods + 16] = __str43;
    HEAP[_deque_methods + 20] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_deque_methods + 28] = _appendleft_doc;
    HEAP[_deque_methods + 32] = __str44;
    HEAP[_deque_methods + 36] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_deque_methods + 44] = _clear_doc;
    HEAP[_deque_methods + 48] = __str45;
    HEAP[_deque_methods + 52] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_deque_methods + 60] = _copy_doc;
    HEAP[_deque_methods + 64] = __str46;
    HEAP[_deque_methods + 68] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_deque_methods + 76] = _count_doc;
    HEAP[_deque_methods + 80] = __str47;
    HEAP[_deque_methods + 84] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_deque_methods + 92] = _extend_doc;
    HEAP[_deque_methods + 96] = __str48;
    HEAP[_deque_methods + 100] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_deque_methods + 108] = _extendleft_doc;
    HEAP[_deque_methods + 112] = __str49;
    HEAP[_deque_methods + 116] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_deque_methods + 124] = _pop_doc;
    HEAP[_deque_methods + 128] = __str50;
    HEAP[_deque_methods + 132] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_deque_methods + 140] = _popleft_doc;
    HEAP[_deque_methods + 144] = __str51;
    HEAP[_deque_methods + 148] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_deque_methods + 156] = _reduce_doc;
    HEAP[_deque_methods + 160] = __str52;
    HEAP[_deque_methods + 164] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_deque_methods + 172] = _remove_doc;
    HEAP[_deque_methods + 176] = __str53;
    HEAP[_deque_methods + 180] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_deque_methods + 188] = _reversed_doc;
    HEAP[_deque_methods + 192] = __str54;
    HEAP[_deque_methods + 196] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_deque_methods + 204] = _reverse_doc;
    HEAP[_deque_methods + 208] = __str55;
    HEAP[_deque_methods + 212] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_deque_methods + 220] = _rotate_doc;
    HEAP[_deque_type + 12] = __str56;
    HEAP[_deque_type + 24] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_deque_type + 28] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_deque_type + 44] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_deque_type + 52] = _deque_as_sequence;
    HEAP[_deque_type + 60] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_deque_type + 72] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_deque_type + 88] = _deque_doc;
    HEAP[_deque_type + 92] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_deque_type + 96] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_deque_type + 100] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_deque_type + 108] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_deque_type + 116] = _deque_methods;
    HEAP[_deque_type + 124] = _deque_getset;
    HEAP[_deque_type + 148] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_deque_type + 152] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_deque_type + 156] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_deque_type + 160] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_dequeiter_methods] = __str59;
    HEAP[_dequeiter_methods + 4] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_dequeiter_methods + 12] = _length_hint_doc;
    HEAP[_dequeiter_type + 12] = __str60;
    HEAP[_dequeiter_type + 24] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_dequeiter_type + 72] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_dequeiter_type + 92] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_dequeiter_type + 108] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_dequeiter_type + 112] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_dequeiter_type + 116] = _dequeiter_methods;
    HEAP[_dequereviter_type + 12] = __str63;
    HEAP[_dequereviter_type + 24] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_dequereviter_type + 72] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_dequereviter_type + 92] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_dequereviter_type + 108] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_dequereviter_type + 112] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_dequereviter_type + 116] = _dequeiter_methods;
    HEAP[_defdict_methods] = __str66;
    HEAP[_defdict_methods + 4] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_defdict_methods + 12] = _defdict_missing_doc;
    HEAP[_defdict_methods + 16] = __str67;
    HEAP[_defdict_methods + 20] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_defdict_methods + 28] = _defdict_copy_doc;
    HEAP[_defdict_methods + 32] = __str45;
    HEAP[_defdict_methods + 36] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_defdict_methods + 44] = _defdict_copy_doc;
    HEAP[_defdict_methods + 48] = __str51;
    HEAP[_defdict_methods + 52] = FUNCTION_TABLE_OFFSET + 82;
    HEAP[_defdict_methods + 60] = _reduce_doc;
    HEAP[_defdict_members] = __str68;
    HEAP[_defdict_members + 16] = __str69;
    HEAP[_defdict_type + 12] = __str75;
    HEAP[_defdict_type + 24] = FUNCTION_TABLE_OFFSET + 84;
    HEAP[_defdict_type + 28] = FUNCTION_TABLE_OFFSET + 86;
    HEAP[_defdict_type + 44] = FUNCTION_TABLE_OFFSET + 88;
    HEAP[_defdict_type + 72] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_defdict_type + 88] = _defdict_doc;
    HEAP[_defdict_type + 92] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_defdict_type + 96] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_defdict_type + 116] = _defdict_methods;
    HEAP[_defdict_type + 120] = _defdict_members;
    HEAP[_defdict_type + 148] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_defdict_type + 152] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_defdict_type + 160] = FUNCTION_TABLE_OFFSET + 64;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
