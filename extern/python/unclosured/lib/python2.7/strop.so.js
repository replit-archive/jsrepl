"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 352;
  var $1___SIZE = 16;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyListObject___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _strop_module__doc__;
  var _splitfields__doc__;
  var __str;
  var __str1;
  var __str2;
  var _joinfields__doc__;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var __str7;
  var _find__doc__;
  var __str8;
  var _rfind__doc__;
  var __str9;
  var _strip__doc__;
  var _lstrip__doc__;
  var _rstrip__doc__;
  var _lower__doc__;
  var _upper__doc__;
  var _capitalize__doc__;
  var _expandtabs__doc__;
  var __str10;
  var __str11;
  var __str12;
  var _count__doc__;
  var __str13;
  var _swapcase__doc__;
  var _atoi__doc__;
  var __str14;
  var __str15;
  var __str16;
  var __str17;
  var _atol__doc__;
  var __str18;
  var __str19;
  var __str20;
  var __str21;
  var _atof__doc__;
  var __str22;
  var __str23;
  var __str24;
  var _maketrans__doc__;
  var __str25;
  var __str26;
  var _translate__doc__;
  var __str27;
  var __str28;
  var __str29;
  var __str30;
  var ___PRETTY_FUNCTION___9892;
  var _replace__doc__;
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
  var _strop_methods;
  var __str54;
  var __str55;
  var __str56;
  var __str57;
  function _split_whitespace($s, $len, $maxsplit) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $len_addr;
      var $maxsplit_addr;
      var $retval;
      var $0;
      var $i;
      var $j;
      var $err;
      var $countsplit;
      var $item;
      var $list;
      $s_addr = $s;
      $len_addr = $len;
      $maxsplit_addr = $maxsplit;
      $i = 0;
      $countsplit = 0;
      var $1 = _PyList_New(0);
      $list = $1;
      
      
      if ($list == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 31;
      break;
     case 2:
      
      var $5 = $i + 1;
      $i = $5;
      __label__ = 3;
      break;
     case 3:
      
      
      
      if ($i >= $len_addr) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $9 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$9] + 2 * HEAP[$s_addr + $i]] & 8192) != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      $j = $i;
      __label__ = 7;
      break;
     case 6:
      
      var $23 = $i + 1;
      $i = $23;
      __label__ = 7;
      break;
     case 7:
      
      
      
      if ($i >= $len_addr) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $27 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$27] + 2 * HEAP[$s_addr + $i]] & 8192) == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      if ($j < $i) {
        __label__ = 10;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 10:
      
      
      
      
      
      
      var $48 = _PyString_FromStringAndSize($s_addr + $j, $i - $j);
      $item = $48;
      
      
      if ($item == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $53 = _PyList_Append($list, $item);
      $err = $53;
      
      
      
      var $57 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $57;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $68 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$68]($item);
      __label__ = 13;
      break;
     case 13:
      
      
      if ($err < 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      var $73 = $countsplit + 1;
      $countsplit = $73;
      __label__ = 16;
      break;
     case 15:
      
      var $75 = $i + 1;
      $i = $75;
      __label__ = 16;
      break;
     case 16:
      
      
      
      if ($i >= $len_addr) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      var $79 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$79] + 2 * HEAP[$s_addr + $i]] & 8192) != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      if ($maxsplit_addr != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 19:
      
      
      
      if ($countsplit >= $maxsplit_addr) {
        __label__ = 20;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 20:
      
      
      
      if ($i < $len_addr) {
        __label__ = 21;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 21:
      
      
      
      
      
      
      var $105 = _PyString_FromStringAndSize($s_addr + $i, $len_addr - $i);
      $item = $105;
      
      
      if ($item == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      var $110 = _PyList_Append($list, $item);
      $err = $110;
      
      
      
      var $114 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $114;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $125 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$125]($item);
      __label__ = 24;
      break;
     case 24:
      
      
      if ($err < 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      $i = $len_addr;
      __label__ = 26;
      break;
     case 26:
      
      
      
      if ($i < $len_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      $0 = $list;
      __label__ = 31;
      break;
     case 28:
      
      
      
      var $137 = HEAP[$list] - 1;
      
      
      HEAP[$list] = $137;
      
      
      
      
      if (HEAP[$list] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $148 = HEAP[HEAP[$list + 4] + 24];
      
      FUNCTION_TABLE[$148]($list);
      __label__ = 30;
      break;
     case 30:
      $0 = 0;
      __label__ = 31;
      break;
     case 31:
      
      $retval = $0;
      var $retval32 = $retval;
      return $retval32;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_splitfields($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $len = __stackBase__;
      var $n = __stackBase__ + 4;
      var $i;
      var $j;
      var $err;
      var $splitcount;
      var $maxsplit = __stackBase__ + 8;
      var $s = __stackBase__ + 12;
      var $sub = __stackBase__ + 16;
      var $list;
      var $item;
      $self_addr = $self;
      $args_addr = $args;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 30;
      break;
     case 2:
      HEAP[$sub] = 0;
      HEAP[$n] = 0;
      $splitcount = 0;
      HEAP[$maxsplit] = 0;
      
      var $5 = __PyArg_ParseTuple_SizeT($args_addr, __str1, allocate([ $s, 0, 0, 0, $len, 0, 0, 0, $sub, 0, 0, 0, $n, 0, 0, 0, $maxsplit, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
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
      
      
      if (HEAP[$sub] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $9 = HEAP[$maxsplit];
      var $10 = HEAP[$len];
      var $11 = HEAP[$s];
      var $12 = _split_whitespace($11, $10, $9);
      $0 = $12;
      __label__ = 30;
      break;
     case 6:
      
      
      if (HEAP[$n] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $15 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($15, __str2);
      $0 = 0;
      __label__ = 30;
      break;
     case 8:
      var $16 = _PyList_New(0);
      $list = $16;
      
      
      if ($list == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = 0;
      __label__ = 30;
      break;
     case 10:
      $j = 0;
      
      $i = $j;
      __label__ = 21;
      break;
     case 11:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$s] + $i] != HEAP[HEAP[$sub]]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if (HEAP[$n] == 1) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $30 = HEAP[$n];
      var $31 = HEAP[$sub];
      
      
      var $34 = HEAP[$s] + $i;
      var $35 = _memcmp($34, $31, $30);
      
      if ($35 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 14:
      
      
      
      
      
      var $42 = HEAP[$s] + $j;
      var $43 = _PyString_FromStringAndSize($42, $i - $j);
      $item = $43;
      
      if ($43 == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      var $47 = _PyList_Append($list, $item);
      $err = $47;
      
      
      
      var $51 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $51;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $62 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$62]($item);
      __label__ = 17;
      break;
     case 17:
      
      
      if ($err < 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      $j = $i + HEAP[$n];
      
      $i = $j;
      
      var $71 = $splitcount + 1;
      $splitcount = $71;
      
      
      if (HEAP[$maxsplit] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      
      if ($splitcount >= HEAP[$maxsplit]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      var $78 = $i + 1;
      $i = $78;
      __label__ = 21;
      break;
     case 21:
      
      
      
      
      
      if ($i + HEAP[$n] <= HEAP[$len]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      var $86 = HEAP[$len] - $j;
      
      
      var $89 = HEAP[$s] + $j;
      var $90 = _PyString_FromStringAndSize($89, $86);
      $item = $90;
      
      if ($90 == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      var $94 = _PyList_Append($list, $item);
      $err = $94;
      
      
      
      var $98 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $98;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $109 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$109]($item);
      __label__ = 25;
      break;
     case 25:
      
      
      if ($err < 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      $0 = $list;
      __label__ = 30;
      break;
     case 27:
      
      
      
      var $117 = HEAP[$list] - 1;
      
      
      HEAP[$list] = $117;
      
      
      
      
      if (HEAP[$list] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $128 = HEAP[HEAP[$list + 4] + 24];
      
      FUNCTION_TABLE[$128]($list);
      __label__ = 29;
      break;
     case 29:
      $0 = 0;
      __label__ = 30;
      break;
     case 30:
      
      $retval = $0;
      var $retval30 = $retval;
      STACKTOP = __stackBase__;
      return $retval30;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_joinfields($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $seq = __stackBase__;
      var $sep = __stackBase__ + 4;
      var $seqlen;
      var $seplen = __stackBase__ + 8;
      var $i;
      var $reslen;
      var $slen;
      var $sz;
      var $res = __stackBase__ + 12;
      var $p;
      var $getitemfunc;
      var $item;
      var $item20;
      var $item44;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$sep] = 0;
      HEAP[$seplen] = 0;
      $reslen = 0;
      $slen = 0;
      $sz = 100;
      HEAP[$res] = 0;
      $p = 0;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 72;
      break;
     case 2:
      
      var $5 = __PyArg_ParseTuple_SizeT($args_addr, __str3, allocate([ $seq, 0, 0, 0, $sep, 0, 0, 0, $seplen, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 72;
      break;
     case 4:
      
      
      if (HEAP[$sep] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$sep] = __str4;
      HEAP[$seplen] = 1;
      __label__ = 6;
      break;
     case 6:
      var $9 = HEAP[$seq];
      var $10 = _PySequence_Size($9);
      $seqlen = $10;
      
      if ($10 < 0) {
        __lastLabel__ = 6;
        __label__ = 7;
        break;
      } else {
        __lastLabel__ = 6;
        __label__ = 10;
        break;
      }
     case 7:
      var $12 = _PyErr_Occurred();
      
      if ($12 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 72;
      break;
     case 9:
      var $_pr = $seqlen;
      __lastLabel__ = 9;
      __label__ = 10;
      break;
     case 10:
      var $14 = __lastLabel__ == 9 ? $_pr : $10;
      
      if ($14 == 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 11:
      var $16 = HEAP[$seq];
      var $17 = _PySequence_GetItem($16, 0);
      $item = $17;
      
      
      if ($item != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$item + 4] + 84] & 134217728) == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      var $27 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($27, __str5);
      
      
      
      var $31 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $31;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $42 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$42]($item);
      __label__ = 15;
      break;
     case 15:
      $0 = 0;
      __label__ = 72;
      break;
     case 16:
      
      $0 = $item;
      __label__ = 72;
      break;
     case 17:
      
      var $46 = _PyString_FromStringAndSize(0, $sz);
      HEAP[$res] = $46;
      
      
      if (HEAP[$res] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      $0 = 0;
      __label__ = 72;
      break;
     case 19:
      var $49 = HEAP[$res];
      var $50 = _PyString_AsString($49);
      $p = $50;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$seq] + 4] + 84] & 33554432) != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 20:
      $i = 0;
      __label__ = 37;
      break;
     case 21:
      
      
      
      
      
      
      
      $item20 = HEAP[HEAP[HEAP[$seq] + 12] + 4 * $i];
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$item20 + 4] + 84] & 134217728) == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 22:
      var $72 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($72, __str5);
      var $73 = HEAP[$res];
      
      
      var $76 = HEAP[$73] - 1;
      var $77 = $73;
      HEAP[$77] = $76;
      
      
      
      if (HEAP[$73] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $85 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $86 = HEAP[$res];
      FUNCTION_TABLE[$85]($86);
      __label__ = 24;
      break;
     case 24:
      $0 = 0;
      __label__ = 72;
      break;
     case 25:
      
      
      
      
      $slen = HEAP[$item20 + 8];
      
      
      
      
      if (2147483647 - $reslen < $slen) {
        __label__ = 27;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      
      
      
      
      if (0 - $reslen + 2147483647 + (0 - HEAP[$seplen]) < HEAP[$seplen]) {
        __label__ = 27;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 27:
      var $101 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($101, __str6);
      var $102 = HEAP[$res];
      
      
      var $105 = HEAP[$102] - 1;
      var $106 = $102;
      HEAP[$106] = $105;
      
      
      
      if (HEAP[$102] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $114 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $115 = HEAP[$res];
      FUNCTION_TABLE[$114]($115);
      __label__ = 29;
      break;
     case 29:
      $0 = 0;
      __label__ = 72;
      break;
     case 30:
      
      
      var $118 = __PyString_Resize($res, $sz * 2);
      
      if ($118 < 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      $0 = 0;
      __label__ = 72;
      break;
     case 32:
      
      var $121 = $sz * 2;
      $sz = $121;
      var $122 = HEAP[$res];
      var $123 = _PyString_AsString($122);
      
      
      $p = $123 + $reslen;
      __label__ = 33;
      break;
     case 33:
      
      
      
      
      
      
      
      if ($slen + $reslen + HEAP[$seplen] >= $sz) {
        __label__ = 30;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      if ($i > 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      var $135 = HEAP[$seplen];
      var $136 = HEAP[$sep];
      
      _llvm_memcpy_p0i8_p0i8_i32($p, $136, $135, 1, 0);
      
      
      var $140 = $p + HEAP[$seplen];
      $p = $140;
      
      
      var $143 = $reslen + HEAP[$seplen];
      $reslen = $143;
      __label__ = 36;
      break;
     case 36:
      
      
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($p, $item20 + 20, $slen, 1, 0);
      
      
      var $152 = $p + $slen;
      $p = $152;
      
      
      var $155 = $slen + $reslen;
      $reslen = $155;
      
      var $157 = $i + 1;
      $i = $157;
      __label__ = 37;
      break;
     case 37:
      
      
      
      if ($i < $seqlen) {
        __label__ = 21;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      
      var $162 = __PyString_Resize($res, $reslen);
      
      $0 = HEAP[$res];
      __label__ = 72;
      break;
     case 39:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$seq] + 4] + 52] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      
      
      
      
      
      
      
      $getitemfunc = HEAP[HEAP[HEAP[HEAP[$seq] + 4] + 52] + 12];
      
      
      if ($getitemfunc == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      var $179 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($179, __str7);
      $0 = 0;
      __label__ = 72;
      break;
     case 42:
      $i = 0;
      __label__ = 70;
      break;
     case 43:
      var $180 = HEAP[$seq];
      var $181 = $getitemfunc;
      
      var $183 = FUNCTION_TABLE[$181]($180, $i);
      $item44 = $183;
      
      
      if ($item44 == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$item44 + 4] + 84] & 134217728) == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 45:
      var $193 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($193, __str5);
      var $194 = HEAP[$res];
      
      
      var $197 = HEAP[$194] - 1;
      var $198 = $194;
      HEAP[$198] = $197;
      
      
      
      if (HEAP[$194] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      
      
      var $206 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $207 = HEAP[$res];
      FUNCTION_TABLE[$206]($207);
      __label__ = 47;
      break;
     case 47:
      
      
      if ($item44 != 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 48:
      
      
      
      var $213 = HEAP[$item44] - 1;
      
      
      HEAP[$item44] = $213;
      
      
      
      
      if (HEAP[$item44] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      
      
      var $224 = HEAP[HEAP[$item44 + 4] + 24];
      
      FUNCTION_TABLE[$224]($item44);
      __label__ = 50;
      break;
     case 50:
      $0 = 0;
      __label__ = 72;
      break;
     case 51:
      
      
      
      
      $slen = HEAP[$item44 + 8];
      
      
      
      
      if (2147483647 - $reslen < $slen) {
        __label__ = 53;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 52:
      
      
      
      
      
      
      
      
      if (0 - $reslen + 2147483647 + (0 - HEAP[$seplen]) < HEAP[$seplen]) {
        __label__ = 53;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 53:
      var $240 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($240, __str6);
      var $241 = HEAP[$res];
      
      
      var $244 = HEAP[$241] - 1;
      var $245 = $241;
      HEAP[$245] = $244;
      
      
      
      if (HEAP[$241] == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      
      
      
      
      var $253 = HEAP[HEAP[HEAP[$res] + 4] + 24];
      var $254 = HEAP[$res];
      FUNCTION_TABLE[$253]($254);
      __label__ = 55;
      break;
     case 55:
      
      
      if ($item44 != 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 56:
      
      
      
      var $260 = HEAP[$item44] - 1;
      
      
      HEAP[$item44] = $260;
      
      
      
      
      if (HEAP[$item44] == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      
      
      
      
      var $271 = HEAP[HEAP[$item44 + 4] + 24];
      
      FUNCTION_TABLE[$271]($item44);
      __label__ = 58;
      break;
     case 58:
      $0 = 0;
      __label__ = 72;
      break;
     case 59:
      
      
      var $275 = __PyString_Resize($res, $sz * 2);
      
      if ($275 < 0) {
        __label__ = 60;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 60:
      
      
      
      var $280 = HEAP[$item44] - 1;
      
      
      HEAP[$item44] = $280;
      
      
      
      
      if (HEAP[$item44] == 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      
      
      
      
      var $291 = HEAP[HEAP[$item44 + 4] + 24];
      
      FUNCTION_TABLE[$291]($item44);
      __label__ = 62;
      break;
     case 62:
      $0 = 0;
      __label__ = 72;
      break;
     case 63:
      
      var $294 = $sz * 2;
      $sz = $294;
      var $295 = HEAP[$res];
      var $296 = _PyString_AsString($295);
      
      
      $p = $296 + $reslen;
      __label__ = 64;
      break;
     case 64:
      
      
      
      
      
      
      
      if ($slen + $reslen + HEAP[$seplen] >= $sz) {
        __label__ = 59;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 65:
      
      
      if ($i > 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 66:
      var $308 = HEAP[$seplen];
      var $309 = HEAP[$sep];
      
      _llvm_memcpy_p0i8_p0i8_i32($p, $309, $308, 1, 0);
      
      
      var $313 = $p + HEAP[$seplen];
      $p = $313;
      
      
      var $316 = $reslen + HEAP[$seplen];
      $reslen = $316;
      __label__ = 67;
      break;
     case 67:
      
      
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($p, $item44 + 20, $slen, 1, 0);
      
      
      var $325 = $p + $slen;
      $p = $325;
      
      
      var $328 = $slen + $reslen;
      $reslen = $328;
      
      
      
      var $332 = HEAP[$item44] - 1;
      
      
      HEAP[$item44] = $332;
      
      
      
      
      if (HEAP[$item44] == 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 68:
      
      
      
      
      var $343 = HEAP[HEAP[$item44 + 4] + 24];
      
      FUNCTION_TABLE[$343]($item44);
      __label__ = 69;
      break;
     case 69:
      
      var $346 = $i + 1;
      $i = $346;
      __label__ = 70;
      break;
     case 70:
      
      
      
      if ($i < $seqlen) {
        __label__ = 43;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 71:
      
      var $351 = __PyString_Resize($res, $reslen);
      
      $0 = HEAP[$res];
      __label__ = 72;
      break;
     case 72:
      
      $retval = $0;
      var $retval75 = $retval;
      STACKTOP = __stackBase__;
      return $retval75;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_find($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    _memset(__stackBase__, 0, 24);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $s = __stackBase__;
      var $sub = __stackBase__ + 4;
      var $len = __stackBase__ + 8;
      var $n = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $last = __stackBase__ + 20;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$i] = 0;
      HEAP[$last] = 2147483647;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 24;
      break;
     case 2:
      
      var $5 = __PyArg_ParseTuple_SizeT($args_addr, __str8, allocate([ $s, 0, 0, 0, $len, 0, 0, 0, $sub, 0, 0, 0, $n, 0, 0, 0, $i, 0, 0, 0, $last, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 24;
      break;
     case 4:
      var $7 = HEAP[$last];
      
      
      if ($7 > HEAP[$len]) {
        __lastLabel__ = 4;
        __label__ = 5;
        break;
      } else {
        __lastLabel__ = 4;
        __label__ = 6;
        break;
      }
     case 5:
      var $10 = HEAP[$len];
      HEAP[$last] = $10;
      __lastLabel__ = 5;
      __label__ = 6;
      break;
     case 6:
      var $11 = __lastLabel__ == 5 ? $10 : $7;
      
      var $13 = HEAP[$last];
      if ($11 < 0) {
        __lastLabel__ = 6;
        __label__ = 7;
        break;
      } else {
        __lastLabel__ = 6;
        __label__ = 8;
        break;
      }
     case 7:
      
      var $15 = HEAP[$len] + $13;
      HEAP[$last] = $15;
      __lastLabel__ = 7;
      __label__ = 8;
      break;
     case 8:
      var $16 = __lastLabel__ == 7 ? $15 : $13;
      
      if ($16 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$last] = 0;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      var $22 = HEAP[$len] + HEAP[$i];
      HEAP[$i] = $22;
      
      if ($22 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$i] = 0;
      __label__ = 13;
      break;
     case 13:
      
      
      if (HEAP[$n] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      if (HEAP[$i] <= HEAP[$last]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $29 = HEAP[$i];
      var $30 = _PyInt_FromLong($29);
      $0 = $30;
      __label__ = 24;
      break;
     case 16:
      
      
      var $33 = HEAP[$last] - HEAP[$n];
      HEAP[$last] = $33;
      __label__ = 22;
      break;
     case 17:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$s] + HEAP[$i]] == HEAP[HEAP[$sub]]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      
      
      if (HEAP[$n] == 1) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      var $45 = HEAP[$n] - 1;
      
      var $47 = HEAP[$sub] + 1;
      
      
      
      var $51 = HEAP[$s] + (HEAP[$i] + 1);
      var $52 = _memcmp($51, $47, $45);
      
      if ($52 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $54 = HEAP[$i];
      var $55 = _PyInt_FromLong($54);
      $0 = $55;
      __label__ = 24;
      break;
     case 21:
      
      var $57 = HEAP[$i] + 1;
      HEAP[$i] = $57;
      __label__ = 22;
      break;
     case 22:
      
      
      
      if (HEAP[$i] <= HEAP[$last]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      var $61 = _PyInt_FromLong(-1);
      $0 = $61;
      __label__ = 24;
      break;
     case 24:
      
      $retval = $0;
      var $retval25 = $retval;
      STACKTOP = __stackBase__;
      return $retval25;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_rfind($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    _memset(__stackBase__, 0, 24);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $s = __stackBase__;
      var $sub = __stackBase__ + 4;
      var $len = __stackBase__ + 8;
      var $n = __stackBase__ + 12;
      var $j;
      var $i = __stackBase__ + 16;
      var $last = __stackBase__ + 20;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$i] = 0;
      HEAP[$last] = 2147483647;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 24;
      break;
     case 2:
      
      var $5 = __PyArg_ParseTuple_SizeT($args_addr, __str9, allocate([ $s, 0, 0, 0, $len, 0, 0, 0, $sub, 0, 0, 0, $n, 0, 0, 0, $i, 0, 0, 0, $last, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 24;
      break;
     case 4:
      var $7 = HEAP[$last];
      
      
      if ($7 > HEAP[$len]) {
        __lastLabel__ = 4;
        __label__ = 5;
        break;
      } else {
        __lastLabel__ = 4;
        __label__ = 6;
        break;
      }
     case 5:
      var $10 = HEAP[$len];
      HEAP[$last] = $10;
      __lastLabel__ = 5;
      __label__ = 6;
      break;
     case 6:
      var $11 = __lastLabel__ == 5 ? $10 : $7;
      
      var $13 = HEAP[$last];
      if ($11 < 0) {
        __lastLabel__ = 6;
        __label__ = 7;
        break;
      } else {
        __lastLabel__ = 6;
        __label__ = 8;
        break;
      }
     case 7:
      
      var $15 = HEAP[$len] + $13;
      HEAP[$last] = $15;
      __lastLabel__ = 7;
      __label__ = 8;
      break;
     case 8:
      var $16 = __lastLabel__ == 7 ? $15 : $13;
      
      if ($16 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$last] = 0;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      var $22 = HEAP[$len] + HEAP[$i];
      HEAP[$i] = $22;
      
      if ($22 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$i] = 0;
      __label__ = 13;
      break;
     case 13:
      
      
      if (HEAP[$n] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      if (HEAP[$i] <= HEAP[$last]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $29 = HEAP[$last];
      var $30 = _PyInt_FromLong($29);
      $0 = $30;
      __label__ = 24;
      break;
     case 16:
      
      
      
      $j = HEAP[$last] - HEAP[$n];
      __label__ = 22;
      break;
     case 17:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$s] + $j] == HEAP[HEAP[$sub]]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      
      
      if (HEAP[$n] == 1) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      var $45 = HEAP[$n] - 1;
      
      var $47 = HEAP[$sub] + 1;
      
      
      
      var $51 = HEAP[$s] + ($j + 1);
      var $52 = _memcmp($51, $47, $45);
      
      if ($52 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      var $55 = _PyInt_FromLong($j);
      $0 = $55;
      __label__ = 24;
      break;
     case 21:
      
      var $57 = $j - 1;
      $j = $57;
      __label__ = 22;
      break;
     case 22:
      
      
      
      if ($j >= HEAP[$i]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      var $61 = _PyInt_FromLong(-1);
      $0 = $61;
      __label__ = 24;
      break;
     case 24:
      
      $retval = $0;
      var $retval25 = $retval;
      STACKTOP = __stackBase__;
      return $retval25;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _do_strip($args, $striptype) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $args_addr;
      var $striptype_addr;
      var $retval;
      var $0;
      var $s = __stackBase__;
      var $len = __stackBase__ + 4;
      var $i;
      var $j;
      $args_addr = $args;
      $striptype_addr = $striptype;
      
      var $2 = _PyString_AsStringAndSize($args_addr, $s, $len);
      
      if ($2 != 0) {
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
      $i = 0;
      
      
      if ($striptype_addr != 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      $j = HEAP[$len];
      __label__ = 8;
      break;
     case 4:
      
      var $8 = $i + 1;
      $i = $8;
      __label__ = 5;
      break;
     case 5:
      
      
      
      if ($i >= HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $12 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$12] + 2 * HEAP[HEAP[$s] + $i]] & 8192) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      $j = HEAP[$len];
      
      if ($striptype_addr != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      var $27 = $j - 1;
      $j = $27;
      
      
      
      if ($j < $i) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $31 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$31] + 2 * HEAP[HEAP[$s] + $j]] & 8192) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      var $44 = $j + 1;
      $j = $44;
      __label__ = 11;
      break;
     case 11:
      
      
      if ($i != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      if ($j != HEAP[$len]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $53 = HEAP[$args_addr] + 1;
      
      
      HEAP[$args_addr] = $53;
      
      $0 = $args_addr;
      __label__ = 15;
      break;
     case 14:
      
      
      
      
      
      var $62 = HEAP[$s] + $i;
      var $63 = _PyString_FromStringAndSize($62, $j - $i);
      $0 = $63;
      __label__ = 15;
      break;
     case 15:
      
      $retval = $0;
      var $retval15 = $retval;
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_strip($self, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $args_addr = $args;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      
      var $5 = _do_strip($args_addr, 2);
      $0 = $5;
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
  function _strop_lstrip($self, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $args_addr = $args;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      
      var $5 = _do_strip($args_addr, 0);
      $0 = $5;
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
  function _strop_rstrip($self, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $args_addr = $args;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      
      var $5 = _do_strip($args_addr, 1);
      $0 = $5;
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
  function _strop_lower($self, $args) {
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
      var $s = __stackBase__;
      var $s_new;
      var $i;
      var $n = __stackBase__ + 4;
      var $newstr;
      var $changed;
      var $c;
      $self_addr = $self;
      $args_addr = $args;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      
      var $5 = _PyString_AsStringAndSize($args_addr, $s, $n);
      
      if ($5 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 17;
      break;
     case 4:
      var $7 = HEAP[$n];
      var $8 = _PyString_FromStringAndSize(0, $7);
      $newstr = $8;
      
      
      if ($newstr == 0) {
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
      
      var $12 = _PyString_AsString($newstr);
      $s_new = $12;
      $changed = 0;
      $i = 0;
      
      
      
      if ($i < HEAP[$n]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $16 = $newstr;
      __lastLabel__ = 7;
      __label__ = 13;
      break;
     case 8:
      var $17 = HEAP[$s];
      
      
      $c = HEAP[$17];
      var $20 = $17 + 1;
      HEAP[$s] = $20;
      var $21 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$21] + 2 * $c] & 256) != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $changed = 1;
      
      var $30 = _tolower($c);
      
      
      HEAP[$s_new] = $30 & 255;
      __label__ = 11;
      break;
     case 10:
      
      
      
      HEAP[$s_new] = $c & 255;
      __label__ = 11;
      break;
     case 11:
      
      var $37 = $s_new + 1;
      $s_new = $37;
      
      var $39 = $i + 1;
      $i = $39;
      
      
      
      if ($i < HEAP[$n]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      var $44 = $newstr;
      if ($changed == 0) {
        __lastLabel__ = 12;
        __label__ = 13;
        break;
      } else {
        __lastLabel__ = 12;
        __label__ = 16;
        break;
      }
     case 13:
      var $45 = __lastLabel__ == 7 ? $16 : $44;
      
      
      var $48 = HEAP[$45] - 1;
      
      
      HEAP[$newstr] = $48;
      
      
      
      
      if (HEAP[$newstr] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $59 = HEAP[HEAP[$newstr + 4] + 24];
      
      FUNCTION_TABLE[$59]($newstr);
      __label__ = 15;
      break;
     case 15:
      
      
      
      var $64 = HEAP[$args_addr] + 1;
      
      
      HEAP[$args_addr] = $64;
      
      $0 = $args_addr;
      __label__ = 17;
      break;
     case 16:
      $0 = $44;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval17 = $retval;
      STACKTOP = __stackBase__;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_upper($self, $args) {
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
      var $s = __stackBase__;
      var $s_new;
      var $i;
      var $n = __stackBase__ + 4;
      var $newstr;
      var $changed;
      var $c;
      $self_addr = $self;
      $args_addr = $args;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      
      var $5 = _PyString_AsStringAndSize($args_addr, $s, $n);
      
      if ($5 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 17;
      break;
     case 4:
      var $7 = HEAP[$n];
      var $8 = _PyString_FromStringAndSize(0, $7);
      $newstr = $8;
      
      
      if ($newstr == 0) {
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
      
      var $12 = _PyString_AsString($newstr);
      $s_new = $12;
      $changed = 0;
      $i = 0;
      
      
      
      if ($i < HEAP[$n]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $16 = $newstr;
      __lastLabel__ = 7;
      __label__ = 13;
      break;
     case 8:
      var $17 = HEAP[$s];
      
      
      $c = HEAP[$17];
      var $20 = $17 + 1;
      HEAP[$s] = $20;
      var $21 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$21] + 2 * $c] & 512) != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $changed = 1;
      
      var $30 = _toupper($c);
      
      
      HEAP[$s_new] = $30 & 255;
      __label__ = 11;
      break;
     case 10:
      
      
      
      HEAP[$s_new] = $c & 255;
      __label__ = 11;
      break;
     case 11:
      
      var $37 = $s_new + 1;
      $s_new = $37;
      
      var $39 = $i + 1;
      $i = $39;
      
      
      
      if ($i < HEAP[$n]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      var $44 = $newstr;
      if ($changed == 0) {
        __lastLabel__ = 12;
        __label__ = 13;
        break;
      } else {
        __lastLabel__ = 12;
        __label__ = 16;
        break;
      }
     case 13:
      var $45 = __lastLabel__ == 7 ? $16 : $44;
      
      
      var $48 = HEAP[$45] - 1;
      
      
      HEAP[$newstr] = $48;
      
      
      
      
      if (HEAP[$newstr] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $59 = HEAP[HEAP[$newstr + 4] + 24];
      
      FUNCTION_TABLE[$59]($newstr);
      __label__ = 15;
      break;
     case 15:
      
      
      
      var $64 = HEAP[$args_addr] + 1;
      
      
      HEAP[$args_addr] = $64;
      
      $0 = $args_addr;
      __label__ = 17;
      break;
     case 16:
      $0 = $44;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval17 = $retval;
      STACKTOP = __stackBase__;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_capitalize($self, $args) {
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
      var $s = __stackBase__;
      var $s_new;
      var $i;
      var $n = __stackBase__ + 4;
      var $newstr;
      var $changed;
      var $c;
      var $c12;
      $self_addr = $self;
      $args_addr = $args;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 21;
      break;
     case 2:
      
      var $5 = _PyString_AsStringAndSize($args_addr, $s, $n);
      
      if ($5 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 21;
      break;
     case 4:
      var $7 = HEAP[$n];
      var $8 = _PyString_FromStringAndSize(0, $7);
      $newstr = $8;
      
      
      if ($newstr == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 21;
      break;
     case 6:
      
      var $12 = _PyString_AsString($newstr);
      $s_new = $12;
      $changed = 0;
      
      
      if (HEAP[$n] > 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 7:
      var $15 = HEAP[$s];
      
      
      $c = HEAP[$15];
      var $18 = $15 + 1;
      HEAP[$s] = $18;
      var $19 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$19] + 2 * $c] & 512) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $changed = 1;
      
      var $28 = _toupper($c);
      
      
      HEAP[$s_new] = $28 & 255;
      __label__ = 10;
      break;
     case 9:
      
      
      
      HEAP[$s_new] = $c & 255;
      __label__ = 10;
      break;
     case 10:
      
      var $35 = $s_new + 1;
      $s_new = $35;
      __label__ = 11;
      break;
     case 11:
      $i = 1;
      
      
      
      if ($i < HEAP[$n]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 12:
      var $39 = HEAP[$s];
      
      
      $c12 = HEAP[$39];
      var $42 = $39 + 1;
      HEAP[$s] = $42;
      var $43 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$43] + 2 * $c12] & 256) != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $changed = 1;
      
      var $52 = _tolower($c12);
      
      
      HEAP[$s_new] = $52 & 255;
      __label__ = 15;
      break;
     case 14:
      
      
      
      HEAP[$s_new] = $c12 & 255;
      __label__ = 15;
      break;
     case 15:
      
      var $59 = $s_new + 1;
      $s_new = $59;
      
      var $61 = $i + 1;
      $i = $61;
      
      
      
      if ($i < HEAP[$n]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      var $67 = $newstr;
      if ($changed == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      
      
      var $70 = HEAP[$67] - 1;
      
      
      HEAP[$newstr] = $70;
      
      
      
      
      if (HEAP[$newstr] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $81 = HEAP[HEAP[$newstr + 4] + 24];
      
      FUNCTION_TABLE[$81]($newstr);
      __label__ = 19;
      break;
     case 19:
      
      
      
      var $86 = HEAP[$args_addr] + 1;
      
      
      HEAP[$args_addr] = $86;
      
      $0 = $args_addr;
      __label__ = 21;
      break;
     case 20:
      $0 = $67;
      __label__ = 21;
      break;
     case 21:
      
      $retval = $0;
      var $retval23 = $retval;
      STACKTOP = __stackBase__;
      return $retval23;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_expandtabs($self, $args) {
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
      var $e;
      var $p;
      var $q;
      var $i;
      var $j;
      var $old_j;
      var $out;
      var $string = __stackBase__;
      var $stringlen = __stackBase__ + 4;
      var $tabsize = __stackBase__ + 8;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$tabsize] = 8;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 27;
      break;
     case 2:
      
      var $5 = __PyArg_ParseTuple_SizeT($args_addr, __str10, allocate([ $string, 0, 0, 0, $stringlen, 0, 0, 0, $tabsize, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 27;
      break;
     case 4:
      
      
      if (HEAP[$tabsize] <= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $9 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($9, __str11);
      $0 = 0;
      __label__ = 27;
      break;
     case 6:
      $old_j = 0;
      
      $j = $old_j;
      
      $i = $j;
      
      
      
      $e = HEAP[$string] + HEAP[$stringlen];
      
      $p = HEAP[$string];
      __label__ = 14;
      break;
     case 7:
      
      
      
      if (HEAP[$p] == 9) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      var $25 = 0 - $j % HEAP[$tabsize] + HEAP[$tabsize] + $j;
      $j = $25;
      
      
      
      if ($old_j > $j) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $29 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($29, __str12);
      $0 = 0;
      __label__ = 27;
      break;
     case 10:
      
      $old_j = $j;
      __label__ = 13;
      break;
     case 11:
      
      var $32 = $j + 1;
      $j = $32;
      
      
      
      if (HEAP[$p] == 10) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      var $38 = $j + $i;
      $i = $38;
      $j = 0;
      __label__ = 13;
      break;
     case 13:
      
      var $40 = $p + 1;
      $p = $40;
      __label__ = 14;
      break;
     case 14:
      
      
      
      if ($p < $e) {
        __label__ = 7;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      if ($j + $i < 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $48 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($48, __str12);
      $0 = 0;
      __label__ = 27;
      break;
     case 17:
      
      
      
      var $52 = _PyString_FromStringAndSize(0, $j + $i);
      $out = $52;
      
      
      if ($out == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      $0 = 0;
      __label__ = 27;
      break;
     case 19:
      $i = 0;
      
      
      
      
      $q = $out + 20;
      
      $p = HEAP[$string];
      
      
      
      if ($p < $e) {
        __label__ = 20;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 20:
      
      
      
      if (HEAP[$p] == 9) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      
      
      
      
      
      $j = HEAP[$tabsize] - $i % HEAP[$tabsize];
      
      
      var $73 = $j + $i;
      $i = $73;
      
      
      var $76 = $j > 0;
      
      var $78 = $j - 1;
      $j = $78;
      
      if ($76 != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 22:
      
      HEAP[$q] = 32;
      
      var $81 = $q + 1;
      $q = $81;
      
      
      var $84 = $j > 0;
      
      var $86 = $j - 1;
      $j = $86;
      
      if ($84 != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 23:
      
      var $88 = HEAP[$p];
      
      HEAP[$q] = $88;
      
      var $91 = $q + 1;
      $q = $91;
      
      var $93 = $i + 1;
      $i = $93;
      
      
      
      if (HEAP[$p] == 10) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      $i = 0;
      __label__ = 25;
      break;
     case 25:
      
      var $98 = $p + 1;
      $p = $98;
      
      
      
      if ($p < $e) {
        __label__ = 20;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      $0 = $out;
      __label__ = 27;
      break;
     case 27:
      
      $retval = $0;
      var $retval30 = $retval;
      STACKTOP = __stackBase__;
      return $retval30;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_count($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    _memset(__stackBase__, 0, 24);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $s = __stackBase__;
      var $sub = __stackBase__ + 4;
      var $len = __stackBase__ + 8;
      var $n = __stackBase__ + 12;
      var $i = __stackBase__ + 16;
      var $last = __stackBase__ + 20;
      var $m;
      var $r;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$i] = 0;
      HEAP[$last] = 2147483647;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 21;
      break;
     case 2:
      
      var $5 = __PyArg_ParseTuple_SizeT($args_addr, __str13, allocate([ $s, 0, 0, 0, $len, 0, 0, 0, $sub, 0, 0, 0, $n, 0, 0, 0, $i, 0, 0, 0, $last, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 21;
      break;
     case 4:
      var $7 = HEAP[$last];
      
      
      if ($7 > HEAP[$len]) {
        __lastLabel__ = 4;
        __label__ = 5;
        break;
      } else {
        __lastLabel__ = 4;
        __label__ = 6;
        break;
      }
     case 5:
      var $10 = HEAP[$len];
      HEAP[$last] = $10;
      __lastLabel__ = 5;
      __label__ = 6;
      break;
     case 6:
      var $11 = __lastLabel__ == 5 ? $10 : $7;
      
      var $13 = HEAP[$last];
      if ($11 < 0) {
        __lastLabel__ = 6;
        __label__ = 7;
        break;
      } else {
        __lastLabel__ = 6;
        __label__ = 8;
        break;
      }
     case 7:
      
      var $15 = HEAP[$len] + $13;
      HEAP[$last] = $15;
      __lastLabel__ = 7;
      __label__ = 8;
      break;
     case 8:
      var $16 = __lastLabel__ == 7 ? $15 : $13;
      
      if ($16 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$last] = 0;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      var $22 = HEAP[$len] + HEAP[$i];
      HEAP[$i] = $22;
      
      if ($22 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$i] = 0;
      __label__ = 13;
      break;
     case 13:
      
      var $25 = HEAP[$n];
      
      
      
      $m = HEAP[$last] + 1 + (0 - $25);
      
      if ($25 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      var $31 = $m - HEAP[$i];
      var $32 = _PyInt_FromLong($31);
      $0 = $32;
      __label__ = 21;
      break;
     case 15:
      $r = 0;
      
      
      
      if (HEAP[$i] < $m) {
        __label__ = 16;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 16:
      var $36 = HEAP[$n];
      var $37 = HEAP[$sub];
      
      
      var $40 = HEAP[$s] + HEAP[$i];
      var $41 = _memcmp($40, $37, $36);
      
      if ($41 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      var $44 = $r + 1;
      $r = $44;
      
      
      var $47 = HEAP[$n] + HEAP[$i];
      HEAP[$i] = $47;
      __label__ = 18;
      break;
     case 18:
      
      
      
      if (HEAP[$i] < $m) {
        __label__ = 16;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      var $52 = HEAP[$i] + 1;
      HEAP[$i] = $52;
      __label__ = 18;
      break;
     case 20:
      
      var $54 = _PyInt_FromLong($r);
      $0 = $54;
      __label__ = 21;
      break;
     case 21:
      
      $retval = $0;
      var $retval22 = $retval;
      STACKTOP = __stackBase__;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_swapcase($self, $args) {
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
      var $s = __stackBase__;
      var $s_new;
      var $i;
      var $n = __stackBase__ + 4;
      var $newstr;
      var $changed;
      var $c;
      $self_addr = $self;
      $args_addr = $args;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      
      var $5 = _PyString_AsStringAndSize($args_addr, $s, $n);
      
      if ($5 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 19;
      break;
     case 4:
      var $7 = HEAP[$n];
      var $8 = _PyString_FromStringAndSize(0, $7);
      $newstr = $8;
      
      
      if ($newstr == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 19;
      break;
     case 6:
      
      var $12 = _PyString_AsString($newstr);
      $s_new = $12;
      $changed = 0;
      $i = 0;
      
      
      
      if ($i < HEAP[$n]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $16 = $newstr;
      __lastLabel__ = 7;
      __label__ = 15;
      break;
     case 8:
      var $17 = HEAP[$s];
      
      
      $c = HEAP[$17];
      var $20 = $17 + 1;
      HEAP[$s] = $20;
      var $21 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$21] + 2 * $c] & 512) != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $changed = 1;
      
      var $30 = _toupper($c);
      
      
      HEAP[$s_new] = $30 & 255;
      __label__ = 13;
      break;
     case 10:
      var $33 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$33] + 2 * $c] & 256) != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $changed = 1;
      
      var $42 = _tolower($c);
      
      
      HEAP[$s_new] = $42 & 255;
      __label__ = 13;
      break;
     case 12:
      
      
      
      HEAP[$s_new] = $c & 255;
      __label__ = 13;
      break;
     case 13:
      
      var $49 = $s_new + 1;
      $s_new = $49;
      
      var $51 = $i + 1;
      $i = $51;
      
      
      
      if ($i < HEAP[$n]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      var $56 = $newstr;
      if ($changed == 0) {
        __lastLabel__ = 14;
        __label__ = 15;
        break;
      } else {
        __lastLabel__ = 14;
        __label__ = 18;
        break;
      }
     case 15:
      var $57 = __lastLabel__ == 7 ? $16 : $56;
      
      
      var $60 = HEAP[$57] - 1;
      
      
      HEAP[$newstr] = $60;
      
      
      
      
      if (HEAP[$newstr] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $71 = HEAP[HEAP[$newstr + 4] + 24];
      
      FUNCTION_TABLE[$71]($newstr);
      __label__ = 17;
      break;
     case 17:
      
      
      
      var $76 = HEAP[$args_addr] + 1;
      
      
      HEAP[$args_addr] = $76;
      
      $0 = $args_addr;
      __label__ = 19;
      break;
     case 18:
      $0 = $56;
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
  function _strop_atoi($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 268;
    _memset(__stackBase__, 0, 268);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $s = __stackBase__;
      var $end = __stackBase__ + 4;
      var $base = __stackBase__ + 8;
      var $x;
      var $buffer = __stackBase__ + 12;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$base] = 10;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 23;
      break;
     case 2:
      
      var $5 = __PyArg_ParseTuple_SizeT($args_addr, __str14, allocate([ $s, 0, 0, 0, $base, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 23;
      break;
     case 4:
      
      
      
      
      
      
      
      
      if (HEAP[$base] != 0 & HEAP[$base] <= 1 | HEAP[$base] > 36) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      var $13 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($13, __str15);
      $0 = 0;
      __label__ = 23;
      break;
     case 6:
      
      var $15 = HEAP[$s] + 1;
      HEAP[$s] = $15;
      __label__ = 7;
      break;
     case 7:
      
      
      
      if (HEAP[HEAP[$s]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $19 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$19] + 2 * HEAP[HEAP[$s]]] & 8192) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $29 = ___errno_location();
      HEAP[$29] = 0;
      
      
      if (HEAP[$base] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      if (HEAP[HEAP[$s]] != 48) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $36 = HEAP[$base];
      var $37 = HEAP[$s];
      var $38 = _PyOS_strtoul($37, $end, $36);
      $x = $38;
      __label__ = 13;
      break;
     case 12:
      var $39 = HEAP[$base];
      var $40 = HEAP[$s];
      var $41 = _PyOS_strtol($40, $end, $39);
      $x = $41;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (HEAP[$end] == HEAP[$s]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      var $45 = ___ctype_b_loc();
      
      
      var $48 = HEAP[$end] + -1;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$45] + 2 * HEAP[$48]] & 8) == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      var $57 = HEAP[$end] + 1;
      HEAP[$end] = $57;
      __label__ = 16;
      break;
     case 16:
      
      
      
      if (HEAP[HEAP[$end]] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      var $61 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$61] + 2 * HEAP[HEAP[$end]]] & 8192) != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      if (HEAP[HEAP[$end]] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $74 = HEAP[$s];
      var $buffer22 = $buffer;
      var $75 = _PyOS_snprintf($buffer22, 256, __str16, allocate([ $74, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      var $76 = HEAP[_PyExc_ValueError];
      var $buffer23 = $buffer;
      _PyErr_SetString($76, $buffer23);
      $0 = 0;
      __label__ = 23;
      break;
     case 20:
      var $77 = ___errno_location();
      
      
      if (HEAP[$77] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      var $80 = HEAP[$s];
      var $buffer26 = $buffer;
      var $81 = _PyOS_snprintf($buffer26, 256, __str17, allocate([ $80, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      var $82 = HEAP[_PyExc_ValueError];
      var $buffer27 = $buffer;
      _PyErr_SetString($82, $buffer27);
      $0 = 0;
      __label__ = 23;
      break;
     case 22:
      
      var $84 = _PyInt_FromLong($x);
      $0 = $84;
      __label__ = 23;
      break;
     case 23:
      
      $retval = $0;
      var $retval30 = $retval;
      STACKTOP = __stackBase__;
      return $retval30;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_atol($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 268;
    _memset(__stackBase__, 0, 268);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $s = __stackBase__;
      var $end = __stackBase__ + 4;
      var $base = __stackBase__ + 8;
      var $x;
      var $buffer = __stackBase__ + 12;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$base] = 10;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 25;
      break;
     case 2:
      
      var $5 = __PyArg_ParseTuple_SizeT($args_addr, __str18, allocate([ $s, 0, 0, 0, $base, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 25;
      break;
     case 4:
      
      
      
      
      
      
      
      
      if (HEAP[$base] != 0 & HEAP[$base] <= 1 | HEAP[$base] > 36) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      var $13 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($13, __str19);
      $0 = 0;
      __label__ = 25;
      break;
     case 6:
      
      var $15 = HEAP[$s] + 1;
      HEAP[$s] = $15;
      __label__ = 7;
      break;
     case 7:
      
      
      
      if (HEAP[HEAP[$s]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $19 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$19] + 2 * HEAP[HEAP[$s]]] & 8192) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[HEAP[$s]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $33 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($33, __str20);
      $0 = 0;
      __label__ = 25;
      break;
     case 11:
      var $34 = HEAP[$base];
      var $35 = HEAP[$s];
      var $36 = _PyLong_FromString($35, $end, $34);
      $x = $36;
      
      
      if ($x == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = 0;
      __label__ = 25;
      break;
     case 13:
      
      
      if (HEAP[$base] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      
      
      
      if (HEAP[HEAP[$end]] == 108) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      if (HEAP[HEAP[$end]] == 76) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      var $48 = HEAP[$end] + 1;
      HEAP[$end] = $48;
      __label__ = 18;
      break;
     case 17:
      
      var $50 = HEAP[$end] + 1;
      HEAP[$end] = $50;
      __label__ = 18;
      break;
     case 18:
      
      
      
      if (HEAP[HEAP[$end]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      var $54 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$54] + 2 * HEAP[HEAP[$end]]] & 8192) != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      if (HEAP[HEAP[$end]] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 21:
      var $67 = HEAP[$s];
      var $buffer25 = $buffer;
      var $68 = _PyOS_snprintf($buffer25, 256, __str21, allocate([ $67, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      var $69 = HEAP[_PyExc_ValueError];
      var $buffer26 = $buffer;
      _PyErr_SetString($69, $buffer26);
      
      
      
      var $73 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $73;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $84 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$84]($x);
      __label__ = 23;
      break;
     case 23:
      $0 = 0;
      __label__ = 25;
      break;
     case 24:
      
      $0 = $x;
      __label__ = 25;
      break;
     case 25:
      
      $retval = $0;
      var $retval31 = $retval;
      STACKTOP = __stackBase__;
      return $retval31;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_atof($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 264;
    _memset(__stackBase__, 0, 264);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $s = __stackBase__;
      var $end = __stackBase__ + 4;
      var $x;
      var $buffer = __stackBase__ + 8;
      $self_addr = $self;
      $args_addr = $args;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      
      var $5 = __PyArg_ParseTuple_SizeT($args_addr, __str22, allocate([ $s, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 18;
      break;
     case 4:
      
      var $8 = HEAP[$s] + 1;
      HEAP[$s] = $8;
      __label__ = 5;
      break;
     case 5:
      
      
      
      if (HEAP[HEAP[$s]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $12 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$12] + 2 * HEAP[HEAP[$s]]] & 8192) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[HEAP[$s]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $26 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($26, __str23);
      $0 = 0;
      __label__ = 18;
      break;
     case 9:
      var $27 = HEAP[_PyExc_OverflowError];
      var $28 = HEAP[$s];
      var $29 = _PyOS_string_to_double($28, $end, $27);
      $x = $29;
      
      var $31 = $x == -1;
      if ($31) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      var $32 = _PyErr_Occurred();
      
      if ($32 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      $0 = 0;
      __label__ = 18;
      break;
     case 12:
      
      var $35 = HEAP[$end] + 1;
      HEAP[$end] = $35;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (HEAP[HEAP[$end]] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      var $39 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$39] + 2 * HEAP[HEAP[$end]]] & 8192) != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      if (HEAP[HEAP[$end]] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $52 = HEAP[$s];
      var $buffer18 = $buffer;
      var $53 = _PyOS_snprintf($buffer18, 256, __str24, allocate([ $52, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      var $54 = HEAP[_PyExc_ValueError];
      var $buffer19 = $buffer;
      _PyErr_SetString($54, $buffer19);
      $0 = 0;
      __label__ = 18;
      break;
     case 17:
      
      var $56 = _PyFloat_FromDouble($x);
      $0 = $56;
      __label__ = 18;
      break;
     case 18:
      
      $retval = $0;
      var $retval22 = $retval;
      STACKTOP = __stackBase__;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_maketrans($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $c;
      var $from = __stackBase__;
      var $to = __stackBase__ + 4;
      var $i;
      var $fromlen = __stackBase__ + 8;
      var $tolen = __stackBase__ + 12;
      var $result;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$from] = 0;
      HEAP[$to] = 0;
      HEAP[$fromlen] = 0;
      HEAP[$tolen] = 0;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str25, allocate([ $from, 0, 0, 0, $fromlen, 0, 0, 0, $to, 0, 0, 0, $tolen, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 11;
      break;
     case 2:
      
      
      
      if (HEAP[$fromlen] != HEAP[$tolen]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $7 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($7, __str26);
      $0 = 0;
      __label__ = 11;
      break;
     case 4:
      var $8 = _PyString_FromStringAndSize(0, 256);
      $result = $8;
      
      
      if ($result == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      $c = $result + 20;
      $i = 0;
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      
      HEAP[$c + $i] = $i & 255;
      
      var $21 = $i + 1;
      $i = $21;
      
      if ($21 <= 255) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      $i = 0;
      
      
      
      if ($i < HEAP[$fromlen]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      var $34 = HEAP[HEAP[$to] + $i];
      
      var $36 = $c + HEAP[HEAP[$from] + $i];
      HEAP[$36] = $34;
      
      var $38 = $i + 1;
      $i = $38;
      
      
      
      if ($i < HEAP[$fromlen]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      $0 = $result;
      __label__ = 11;
      break;
     case 11:
      
      $retval = $0;
      var $retval13 = $retval;
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_translate($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1048;
    _memset(__stackBase__, 0, 1048);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $input;
      var $table;
      var $output;
      var $i;
      var $c;
      var $changed;
      var $input_obj = __stackBase__;
      var $table1 = __stackBase__ + 4;
      var $output_start;
      var $del_table = __stackBase__ + 8;
      var $inlen;
      var $tablen = __stackBase__ + 12;
      var $dellen = __stackBase__ + 16;
      var $result = __stackBase__ + 20;
      var $trans_table = __stackBase__ + 24;
      $self_addr = $self;
      $args_addr = $args;
      $changed = 0;
      HEAP[$del_table] = 0;
      HEAP[$dellen] = 0;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 34;
      break;
     case 2:
      
      var $5 = __PyArg_ParseTuple_SizeT($args_addr, __str27, allocate([ $input_obj, 0, 0, 0, $table1, 0, 0, 0, $tablen, 0, 0, 0, $del_table, 0, 0, 0, $dellen, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 34;
      break;
     case 4:
      
      
      if (HEAP[$tablen] != 256) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $9 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($9, __str28);
      $0 = 0;
      __label__ = 34;
      break;
     case 6:
      
      $table = HEAP[$table1];
      
      
      
      
      $inlen = HEAP[HEAP[$input_obj] + 8];
      
      var $16 = _PyString_FromStringAndSize(0, $inlen);
      HEAP[$result] = $16;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 34;
      break;
     case 8:
      var $19 = HEAP[$result];
      var $20 = _PyString_AsString($19);
      $output = $20;
      
      $output_start = $output;
      var $22 = HEAP[$input_obj];
      var $23 = _PyString_AsString($22);
      $input = $23;
      
      
      if (HEAP[$dellen] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 9:
      
      $i = $inlen;
      
      var $28 = $i - 1;
      $i = $28;
      
      if ($28 >= 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      $c = HEAP[$input];
      
      var $34 = $input + 1;
      $input = $34;
      
      
      
      var $38 = HEAP[$table + $c];
      
      HEAP[$output] = $38;
      
      
      
      
      
      var $45 = HEAP[$output] != $c;
      
      var $47 = $output + 1;
      $output = $47;
      
      if ($45 != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $49 = $i - 1;
      $i = $49;
      
      if ($49 >= 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $changed = 1;
      __label__ = 11;
      break;
     case 13:
      
      
      var $53 = HEAP[$result];
      if ($changed != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = $53;
      __label__ = 34;
      break;
     case 15:
      
      
      var $56 = HEAP[$53] - 1;
      var $57 = $53;
      HEAP[$57] = $56;
      
      
      
      if (HEAP[$53] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $65 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $66 = HEAP[$result];
      FUNCTION_TABLE[$65]($66);
      __label__ = 17;
      break;
     case 17:
      
      
      
      var $70 = HEAP[HEAP[$input_obj]] + 1;
      var $71 = HEAP[$input_obj];
      HEAP[$71] = $70;
      
      $0 = HEAP[$input_obj];
      __label__ = 34;
      break;
     case 18:
      $i = 0;
      __label__ = 19;
      break;
     case 19:
      
      
      
      
      
      var $78 = HEAP[$table + $i];
      
      HEAP[$trans_table + $i * 4] = $78;
      
      var $81 = $i + 1;
      $i = $81;
      
      if ($81 <= 255) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      $i = 0;
      
      
      
      if ($i < HEAP[$dellen]) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      
      var $91 = $trans_table + HEAP[HEAP[$del_table] + $i] * 4;
      HEAP[$91] = -1;
      
      var $93 = $i + 1;
      $i = $93;
      
      
      
      if ($i < HEAP[$dellen]) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      $i = $inlen;
      
      var $99 = $i - 1;
      $i = $99;
      
      if ($99 >= 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 23:
      
      
      
      $c = HEAP[$input];
      
      var $105 = $input + 1;
      $input = $105;
      
      
      
      var $109 = HEAP[$trans_table + $c * 4] != -1;
      if ($109) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 24:
      
      
      
      var $113 = HEAP[$trans_table + $c * 4] & 255;
      
      HEAP[$output] = $113;
      
      
      
      
      
      var $120 = HEAP[$output] == $c;
      
      var $122 = $output + 1;
      $output = $122;
      
      if ($120 != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      var $124 = $i - 1;
      $i = $124;
      
      if ($124 >= 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      $changed = 1;
      __label__ = 25;
      break;
     case 27:
      
      
      if ($changed == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 28:
      var $128 = HEAP[$result];
      
      
      var $131 = HEAP[$128] - 1;
      var $132 = $128;
      HEAP[$132] = $131;
      
      
      
      if (HEAP[$128] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $140 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $141 = HEAP[$result];
      FUNCTION_TABLE[$140]($141);
      __label__ = 30;
      break;
     case 30:
      
      
      
      var $145 = HEAP[HEAP[$input_obj]] + 1;
      var $146 = HEAP[$input_obj];
      HEAP[$146] = $145;
      
      $0 = HEAP[$input_obj];
      __label__ = 34;
      break;
     case 31:
      
      
      if ($inlen > 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      
      var $155 = __PyString_Resize($result, $output - $output_start);
      __label__ = 33;
      break;
     case 33:
      
      $0 = HEAP[$result];
      __label__ = 34;
      break;
     case 34:
      
      $retval = $0;
      var $retval37 = $retval;
      STACKTOP = __stackBase__;
      return $retval37;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mymemfind($mem, $len, $pat, $pat_len) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $mem_addr;
      var $len_addr;
      var $pat_addr;
      var $pat_len_addr;
      var $retval;
      var $0;
      var $ii;
      $mem_addr = $mem;
      $len_addr = $len;
      $pat_addr = $pat;
      $pat_len_addr = $pat_len;
      
      
      var $3 = $len_addr - $pat_len_addr;
      $len_addr = $3;
      $ii = 0;
      __label__ = 6;
      break;
     case 1:
      
      
      
      
      
      
      
      
      if (HEAP[$mem_addr + $ii] == HEAP[$pat_addr]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      if ($pat_len_addr == 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      var $22 = _memcmp($mem_addr + ($ii + 1), $pat_addr + 1, $pat_len_addr - 1);
      
      if ($22 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      $0 = $ii;
      __label__ = 8;
      break;
     case 5:
      
      var $26 = $ii + 1;
      $ii = $26;
      __label__ = 6;
      break;
     case 6:
      
      
      
      if ($ii <= $len_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      $0 = -1;
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
  function _mymemcnt($mem, $len, $pat, $pat_len) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $mem_addr;
      var $len_addr;
      var $pat_addr;
      var $pat_len_addr;
      var $retval;
      var $0;
      var $offset;
      var $nfound;
      $mem_addr = $mem;
      $len_addr = $len;
      $pat_addr = $pat;
      $pat_len_addr = $pat_len;
      $offset = 0;
      $nfound = 0;
      __lastLabel__ = -1;
      __label__ = 3;
      break;
     case 1:
      
      
      
      
      var $5 = _mymemfind($mem_addr, $len_addr, $pat_addr, $pat_len_addr);
      $offset = $5;
      
      var $7 = $offset == -1;
      if ($7) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      var $12 = $mem_addr + ($pat_len_addr + $offset);
      $mem_addr = $12;
      
      
      
      
      
      
      var $16 = 0 - $pat_len_addr + (0 - $offset) + $len_addr;
      $len_addr = $16;
      
      var $18 = $nfound + 1;
      $nfound = $18;
      __lastLabel__ = 2;
      __label__ = 3;
      break;
     case 3:
      var $19 = __lastLabel__ == 2 ? $16 : $len;
      
      if ($19 >= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      $0 = $nfound;
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mymemreplace($str, $len, $pat, $pat_len, $sub, $sub_len, $count, $out_len) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $str_addr;
      var $len_addr;
      var $pat_addr;
      var $pat_len_addr;
      var $sub_addr;
      var $sub_len_addr;
      var $count_addr;
      var $out_len_addr;
      var $retval;
      var $iftmp_287;
      var $iftmp_286;
      var $0;
      var $out_s;
      var $new_s;
      var $nfound;
      var $offset;
      var $new_len;
      $str_addr = $str;
      $len_addr = $len;
      $pat_addr = $pat;
      $pat_len_addr = $pat_len;
      $sub_addr = $sub;
      $sub_len_addr = $sub_len;
      $count_addr = $count;
      $out_len_addr = $out_len;
      
      
      if ($len_addr == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      if ($pat_len_addr > $len_addr) {
        __label__ = 28;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      var $10 = _mymemcnt($str_addr, $len_addr, $pat_addr, $pat_len_addr);
      $nfound = $10;
      
      
      if ($count_addr < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $count_addr = 2147483647;
      var $_pr = $nfound;
      __lastLabel__ = 3;
      __label__ = 6;
      break;
     case 4:
      var $13 = $nfound;
      
      
      if ($13 > $count_addr) {
        __lastLabel__ = 4;
        __label__ = 5;
        break;
      } else {
        __lastLabel__ = 4;
        __label__ = 6;
        break;
      }
     case 5:
      var $16 = $count_addr;
      $nfound = $16;
      __lastLabel__ = 5;
      __label__ = 6;
      break;
     case 6:
      var $17 = __lastLabel__ == 5 ? $16 : __lastLabel__ == 4 ? $13 : $_pr;
      
      if ($17 == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      $new_len = ($sub_len_addr - $pat_len_addr) * $nfound + $len_addr;
      
      
      if ($new_len == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      var $28 = _malloc(1);
      $out_s = $28;
      
      
      if ($out_s == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = 0;
      __label__ = 29;
      break;
     case 10:
      
      
      HEAP[$out_s] = 0;
      __label__ = 27;
      break;
     case 11:
      
      
      if ($new_len <= 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      ___assert_fail(__str29, __str30, 1118, ___PRETTY_FUNCTION___9892);
      throw "Reached an unreachable!";
     case 13:
      
      
      if ($new_len >= 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      
      if ($new_len != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      $iftmp_287 = $new_len;
      __label__ = 18;
      break;
     case 16:
      $iftmp_287 = 1;
      __label__ = 18;
      break;
     case 17:
      $iftmp_286 = 0;
      $new_s = 0;
      __label__ = 19;
      break;
     case 18:
      
      var $41 = _malloc($iftmp_287);
      $iftmp_286 = $41;
      $new_s = $41;
      
      if ($41 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      $0 = 0;
      __label__ = 29;
      break;
     case 20:
      
      $out_s = $new_s;
      var $_pr1 = $count_addr;
      __lastLabel__ = 20;
      __label__ = 23;
      break;
     case 21:
      
      
      
      
      var $48 = _mymemfind($str_addr, $len_addr, $pat_addr, $pat_len_addr);
      $offset = $48;
      
      var $50 = $offset == -1;
      if ($50) {
        __label__ = 25;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($new_s, $str_addr, $offset, 1, 0);
      
      
      
      
      var $58 = $str_addr + ($pat_len_addr + $offset);
      $str_addr = $58;
      
      
      
      
      
      
      var $62 = 0 - $pat_len_addr + (0 - $offset) + $len_addr;
      $len_addr = $62;
      
      
      var $65 = $new_s + $offset;
      $new_s = $65;
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($new_s, $sub_addr, $sub_len_addr, 1, 0);
      
      
      var $71 = $new_s + $sub_len_addr;
      $new_s = $71;
      
      var $73 = $count_addr - 1;
      $count_addr = $73;
      __lastLabel__ = 22;
      __label__ = 23;
      break;
     case 23:
      var $74 = __lastLabel__ == 22 ? $73 : $_pr1;
      
      if ($74 <= 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      if ($len_addr > 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      if ($len_addr > 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($new_s, $str_addr, $len_addr, 1, 0);
      __label__ = 27;
      break;
     case 27:
      
      
      HEAP[$out_len_addr] = $new_len;
      
      $0 = $out_s;
      __label__ = 29;
      break;
     case 28:
      
      HEAP[$out_len_addr] = -1;
      
      $0 = $str_addr;
      __label__ = 29;
      break;
     case 29:
      
      $retval = $0;
      var $retval29 = $retval;
      return $retval29;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _strop_replace($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $str = __stackBase__;
      var $pat = __stackBase__ + 4;
      var $sub = __stackBase__ + 8;
      var $new_s;
      var $len = __stackBase__ + 12;
      var $pat_len = __stackBase__ + 16;
      var $sub_len = __stackBase__ + 20;
      var $out_len = __stackBase__ + 24;
      var $count = __stackBase__ + 28;
      var $newstr;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$count] = -1;
      var $1 = HEAP[_PyExc_DeprecationWarning];
      var $2 = _PyErr_WarnEx($1, __str, 1);
      
      if ($2 != 0) {
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
      
      var $5 = __PyArg_ParseTuple_SizeT($args_addr, __str31, allocate([ $str, 0, 0, 0, $len, 0, 0, 0, $pat, 0, 0, 0, $pat_len, 0, 0, 0, $sub, 0, 0, 0, $sub_len, 0, 0, 0, $count, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 15;
      break;
     case 4:
      
      
      if (HEAP[$pat_len] <= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $9 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($9, __str32);
      $0 = 0;
      __label__ = 15;
      break;
     case 6:
      
      
      if (HEAP[$count] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$count] = -1;
      __label__ = 8;
      break;
     case 8:
      var $12 = HEAP[$count];
      var $13 = HEAP[$sub_len];
      var $14 = HEAP[$sub];
      var $15 = HEAP[$pat_len];
      var $16 = HEAP[$pat];
      var $17 = HEAP[$len];
      var $18 = HEAP[$str];
      var $19 = _mymemreplace($18, $17, $16, $15, $14, $13, $12, $out_len);
      $new_s = $19;
      
      if ($19 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $21 = _PyErr_NoMemory();
      $0 = 0;
      __label__ = 15;
      break;
     case 10:
      
      var $23 = HEAP[$out_len] == -1;
      if ($23) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      var $25 = _PyTuple_GetItem($args_addr, 0);
      $newstr = $25;
      
      
      if ($newstr != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      
      var $31 = HEAP[$newstr] + 1;
      
      
      HEAP[$newstr] = $31;
      __label__ = 14;
      break;
     case 13:
      var $34 = HEAP[$out_len];
      
      var $36 = _PyString_FromStringAndSize($new_s, $34);
      $newstr = $36;
      
      _free($new_s);
      __label__ = 14;
      break;
     case 14:
      
      $0 = $newstr;
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
  function _initstrop() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 256;
    _memset(__stackBase__, 0, 256);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $s;
      var $buf = __stackBase__;
      var $c;
      var $n;
      var $0 = _Py_InitModule4(__str54, _strop_methods, _strop_module__doc__, 0, 1013);
      $m = $0;
      
      
      if ($m == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      $n = 0;
      $c = 0;
      __label__ = 2;
      break;
     case 2:
      var $3 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$3] + 2 * $c] & 8192) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      HEAP[$buf + $n] = $c & 255;
      
      var $16 = $n + 1;
      $n = $16;
      __label__ = 4;
      break;
     case 4:
      
      var $18 = $c + 1;
      $c = $18;
      
      if ($18 <= 255) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $buf6 = $buf;
      
      var $21 = _PyString_FromStringAndSize($buf6, $n);
      $s = $21;
      
      
      if ($s != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      var $26 = _PyModule_AddObject($m, __str55, $s);
      __label__ = 7;
      break;
     case 7:
      $n = 0;
      $c = 0;
      __label__ = 8;
      break;
     case 8:
      var $27 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$27] + 2 * $c] & 512) != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      HEAP[$buf + $n] = $c & 255;
      
      var $40 = $n + 1;
      $n = $40;
      __label__ = 10;
      break;
     case 10:
      
      var $42 = $c + 1;
      $c = $42;
      
      if ($42 <= 255) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $buf14 = $buf;
      
      var $45 = _PyString_FromStringAndSize($buf14, $n);
      $s = $45;
      
      
      if ($s != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      var $50 = _PyModule_AddObject($m, __str56, $s);
      __label__ = 13;
      break;
     case 13:
      $n = 0;
      $c = 0;
      __label__ = 14;
      break;
     case 14:
      var $51 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$51] + 2 * $c] & 256) != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      HEAP[$buf + $n] = $c & 255;
      
      var $64 = $n + 1;
      $n = $64;
      __label__ = 16;
      break;
     case 16:
      
      var $66 = $c + 1;
      $c = $66;
      
      if ($66 <= 255) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      var $buf22 = $buf;
      
      var $69 = _PyString_FromStringAndSize($buf22, $n);
      $s = $69;
      
      
      if ($s != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      var $74 = _PyModule_AddObject($m, __str57, $s);
      __label__ = 19;
      break;
     case 19:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initstrop"] = _initstrop;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _strop_atof, 0, _strop_atoi, 0, _strop_atol, 0, _strop_capitalize, 0, _strop_count, 0, _strop_expandtabs, 0, _strop_find, 0, _strop_joinfields, 0, _strop_lstrip, 0, _strop_lower, 0, _strop_maketrans, 0, _strop_replace, 0, _strop_rfind, 0, _strop_rstrip, 0, _strop_splitfields, 0, _strop_strip, 0, _strop_swapcase, 0, _strop_translate, 0, _strop_upper, 0 ]);
  function run(args) {
    _strop_module__doc__ = allocate([ 67, 111, 109, 109, 111, 110, 32, 115, 116, 114, 105, 110, 103, 32, 109, 97, 110, 105, 112, 117, 108, 97, 116, 105, 111, 110, 115, 44, 32, 111, 112, 116, 105, 109, 105, 122, 101, 100, 32, 102, 111, 114, 32, 115, 112, 101, 101, 100, 46, 10, 10, 65, 108, 119, 97, 121, 115, 32, 117, 115, 101, 32, 34, 105, 109, 112, 111, 114, 116, 32, 115, 116, 114, 105, 110, 103, 34, 32, 114, 97, 116, 104, 101, 114, 32, 116, 104, 97, 110, 32, 114, 101, 102, 101, 114, 101, 110, 99, 105, 110, 103, 10, 116, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 100, 105, 114, 101, 99, 116, 108, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    _splitfields__doc__ = allocate([ 115, 112, 108, 105, 116, 40, 115, 32, 91, 44, 115, 101, 112, 32, 91, 44, 109, 97, 120, 115, 112, 108, 105, 116, 93, 93, 41, 32, 45, 62, 32, 108, 105, 115, 116, 32, 111, 102, 32, 115, 116, 114, 105, 110, 103, 115, 10, 115, 112, 108, 105, 116, 102, 105, 101, 108, 100, 115, 40, 115, 32, 91, 44, 115, 101, 112, 32, 91, 44, 109, 97, 120, 115, 112, 108, 105, 116, 93, 93, 41, 32, 45, 62, 32, 108, 105, 115, 116, 32, 111, 102, 32, 115, 116, 114, 105, 110, 103, 115, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 108, 105, 115, 116, 32, 111, 102, 32, 116, 104, 101, 32, 119, 111, 114, 100, 115, 32, 105, 110, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 44, 32, 117, 115, 105, 110, 103, 32, 115, 101, 112, 32, 97, 115, 32, 116, 104, 101, 10, 100, 101, 108, 105, 109, 105, 116, 101, 114, 32, 115, 116, 114, 105, 110, 103, 46, 32, 32, 73, 102, 32, 109, 97, 120, 115, 112, 108, 105, 116, 32, 105, 115, 32, 110, 111, 110, 122, 101, 114, 111, 44, 32, 115, 112, 108, 105, 116, 115, 32, 105, 110, 116, 111, 32, 97, 116, 32, 109, 111, 115, 116, 10, 109, 97, 120, 115, 112, 108, 105, 116, 32, 119, 111, 114, 100, 115, 46, 32, 32, 73, 102, 32, 115, 101, 112, 32, 105, 115, 32, 110, 111, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 44, 32, 97, 110, 121, 32, 119, 104, 105, 116, 101, 115, 112, 97, 99, 101, 32, 115, 116, 114, 105, 110, 103, 10, 105, 115, 32, 97, 32, 115, 101, 112, 97, 114, 97, 116, 111, 114, 46, 32, 32, 77, 97, 120, 115, 112, 108, 105, 116, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 48, 46, 10, 10, 40, 115, 112, 108, 105, 116, 32, 97, 110, 100, 32, 115, 112, 108, 105, 116, 102, 105, 101, 108, 100, 115, 32, 97, 114, 101, 32, 115, 121, 110, 111, 110, 121, 109, 111, 117, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 115, 116, 114, 111, 112, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 97, 114, 101, 32, 111, 98, 115, 111, 108, 101, 116, 101, 59, 32, 117, 115, 101, 32, 115, 116, 114, 105, 110, 103, 32, 109, 101, 116, 104, 111, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 116, 35, 124, 122, 35, 110, 58, 115, 112, 108, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 101, 109, 112, 116, 121, 32, 115, 101, 112, 97, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _joinfields__doc__ = allocate([ 106, 111, 105, 110, 40, 108, 105, 115, 116, 32, 91, 44, 115, 101, 112, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 106, 111, 105, 110, 102, 105, 101, 108, 100, 115, 40, 108, 105, 115, 116, 32, 91, 44, 115, 101, 112, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 99, 111, 109, 112, 111, 115, 101, 100, 32, 111, 102, 32, 116, 104, 101, 32, 119, 111, 114, 100, 115, 32, 105, 110, 32, 108, 105, 115, 116, 44, 32, 119, 105, 116, 104, 10, 105, 110, 116, 101, 114, 118, 101, 110, 105, 110, 103, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 115, 32, 111, 102, 32, 115, 101, 112, 46, 32, 32, 83, 101, 112, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 97, 32, 115, 105, 110, 103, 108, 101, 10, 115, 112, 97, 99, 101, 46, 10, 10, 40, 106, 111, 105, 110, 32, 97, 110, 100, 32, 106, 111, 105, 110, 102, 105, 101, 108, 100, 115, 32, 97, 114, 101, 32, 115, 121, 110, 111, 110, 121, 109, 111, 117, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 79, 124, 116, 35, 58, 106, 111, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 32, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 102, 105, 114, 115, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 102, 32, 115, 116, 114, 105, 110, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 105, 110, 112, 117, 116, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 102, 105, 114, 115, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 101, 113, 117, 101, 110, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    _find__doc__ = allocate([ 102, 105, 110, 100, 40, 115, 44, 32, 115, 117, 98, 32, 91, 44, 115, 116, 97, 114, 116, 32, 91, 44, 101, 110, 100, 93, 93, 41, 32, 45, 62, 32, 105, 110, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 108, 111, 119, 101, 115, 116, 32, 105, 110, 100, 101, 120, 32, 105, 110, 32, 115, 32, 119, 104, 101, 114, 101, 32, 115, 117, 98, 115, 116, 114, 105, 110, 103, 32, 115, 117, 98, 32, 105, 115, 32, 102, 111, 117, 110, 100, 44, 10, 115, 117, 99, 104, 32, 116, 104, 97, 116, 32, 115, 117, 98, 32, 105, 115, 32, 99, 111, 110, 116, 97, 105, 110, 101, 100, 32, 119, 105, 116, 104, 105, 110, 32, 115, 91, 115, 116, 97, 114, 116, 44, 101, 110, 100, 93, 46, 32, 32, 79, 112, 116, 105, 111, 110, 97, 108, 10, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 115, 116, 97, 114, 116, 32, 97, 110, 100, 32, 101, 110, 100, 32, 97, 114, 101, 32, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 32, 97, 115, 32, 105, 110, 32, 115, 108, 105, 99, 101, 32, 110, 111, 116, 97, 116, 105, 111, 110, 46, 10, 10, 82, 101, 116, 117, 114, 110, 32, 45, 49, 32, 111, 110, 32, 102, 97, 105, 108, 117, 114, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 116, 35, 116, 35, 124, 110, 110, 58, 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _rfind__doc__ = allocate([ 114, 102, 105, 110, 100, 40, 115, 44, 32, 115, 117, 98, 32, 91, 44, 115, 116, 97, 114, 116, 32, 91, 44, 101, 110, 100, 93, 93, 41, 32, 45, 62, 32, 105, 110, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 105, 103, 104, 101, 115, 116, 32, 105, 110, 100, 101, 120, 32, 105, 110, 32, 115, 32, 119, 104, 101, 114, 101, 32, 115, 117, 98, 115, 116, 114, 105, 110, 103, 32, 115, 117, 98, 32, 105, 115, 32, 102, 111, 117, 110, 100, 44, 10, 115, 117, 99, 104, 32, 116, 104, 97, 116, 32, 115, 117, 98, 32, 105, 115, 32, 99, 111, 110, 116, 97, 105, 110, 101, 100, 32, 119, 105, 116, 104, 105, 110, 32, 115, 91, 115, 116, 97, 114, 116, 44, 101, 110, 100, 93, 46, 32, 32, 79, 112, 116, 105, 111, 110, 97, 108, 10, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 115, 116, 97, 114, 116, 32, 97, 110, 100, 32, 101, 110, 100, 32, 97, 114, 101, 32, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 32, 97, 115, 32, 105, 110, 32, 115, 108, 105, 99, 101, 32, 110, 111, 116, 97, 116, 105, 111, 110, 46, 10, 10, 82, 101, 116, 117, 114, 110, 32, 45, 49, 32, 111, 110, 32, 102, 97, 105, 108, 117, 114, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 116, 35, 116, 35, 124, 110, 110, 58, 114, 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _strip__doc__ = allocate([ 115, 116, 114, 105, 112, 40, 115, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 119, 105, 116, 104, 32, 108, 101, 97, 100, 105, 110, 103, 32, 97, 110, 100, 32, 116, 114, 97, 105, 108, 105, 110, 103, 10, 119, 104, 105, 116, 101, 115, 112, 97, 99, 101, 32, 114, 101, 109, 111, 118, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _lstrip__doc__ = allocate([ 108, 115, 116, 114, 105, 112, 40, 115, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 119, 105, 116, 104, 32, 108, 101, 97, 100, 105, 110, 103, 32, 119, 104, 105, 116, 101, 115, 112, 97, 99, 101, 32, 114, 101, 109, 111, 118, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _rstrip__doc__ = allocate([ 114, 115, 116, 114, 105, 112, 40, 115, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 119, 105, 116, 104, 32, 116, 114, 97, 105, 108, 105, 110, 103, 32, 119, 104, 105, 116, 101, 115, 112, 97, 99, 101, 32, 114, 101, 109, 111, 118, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _lower__doc__ = allocate([ 108, 111, 119, 101, 114, 40, 115, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 99, 111, 110, 118, 101, 114, 116, 101, 100, 32, 116, 111, 32, 108, 111, 119, 101, 114, 99, 97, 115, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _upper__doc__ = allocate([ 117, 112, 112, 101, 114, 40, 115, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 99, 111, 110, 118, 101, 114, 116, 101, 100, 32, 116, 111, 32, 117, 112, 112, 101, 114, 99, 97, 115, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _capitalize__doc__ = allocate([ 99, 97, 112, 105, 116, 97, 108, 105, 122, 101, 40, 115, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 119, 105, 116, 104, 32, 111, 110, 108, 121, 32, 105, 116, 115, 32, 102, 105, 114, 115, 116, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 10, 99, 97, 112, 105, 116, 97, 108, 105, 122, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _expandtabs__doc__ = allocate([ 101, 120, 112, 97, 110, 100, 116, 97, 98, 115, 40, 115, 116, 114, 105, 110, 103, 44, 32, 91, 116, 97, 98, 115, 105, 122, 101, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 69, 120, 112, 97, 110, 100, 32, 116, 97, 98, 115, 32, 105, 110, 32, 97, 32, 115, 116, 114, 105, 110, 103, 44, 32, 105, 46, 101, 46, 32, 114, 101, 112, 108, 97, 99, 101, 32, 116, 104, 101, 109, 32, 98, 121, 32, 111, 110, 101, 32, 111, 114, 32, 109, 111, 114, 101, 32, 115, 112, 97, 99, 101, 115, 44, 10, 100, 101, 112, 101, 110, 100, 105, 110, 103, 32, 111, 110, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 99, 111, 108, 117, 109, 110, 32, 97, 110, 100, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 116, 97, 98, 32, 115, 105, 122, 101, 32, 40, 100, 101, 102, 97, 117, 108, 116, 32, 56, 41, 46, 10, 84, 104, 101, 32, 99, 111, 108, 117, 109, 110, 32, 110, 117, 109, 98, 101, 114, 32, 105, 115, 32, 114, 101, 115, 101, 116, 32, 116, 111, 32, 122, 101, 114, 111, 32, 97, 102, 116, 101, 114, 32, 101, 97, 99, 104, 32, 110, 101, 119, 108, 105, 110, 101, 32, 111, 99, 99, 117, 114, 114, 105, 110, 103, 32, 105, 110, 32, 116, 104, 101, 10, 115, 116, 114, 105, 110, 103, 46, 32, 32, 84, 104, 105, 115, 32, 100, 111, 101, 115, 110, 39, 116, 32, 117, 110, 100, 101, 114, 115, 116, 97, 110, 100, 32, 111, 116, 104, 101, 114, 32, 110, 111, 110, 45, 112, 114, 105, 110, 116, 105, 110, 103, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 115, 35, 124, 105, 58, 101, 120, 112, 97, 110, 100, 116, 97, 98, 115, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 116, 97, 98, 115, 105, 122, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 116, 32, 108, 101, 97, 115, 116, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 110, 101, 119, 32, 115, 116, 114, 105, 110, 103, 32, 105, 115, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _count__doc__ = allocate([ 99, 111, 117, 110, 116, 40, 115, 44, 32, 115, 117, 98, 91, 44, 32, 115, 116, 97, 114, 116, 91, 44, 32, 101, 110, 100, 93, 93, 41, 32, 45, 62, 32, 105, 110, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 115, 32, 111, 102, 32, 115, 117, 98, 115, 116, 114, 105, 110, 103, 32, 115, 117, 98, 32, 105, 110, 32, 115, 116, 114, 105, 110, 103, 10, 115, 91, 115, 116, 97, 114, 116, 58, 101, 110, 100, 93, 46, 32, 32, 79, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 115, 116, 97, 114, 116, 32, 97, 110, 100, 32, 101, 110, 100, 32, 97, 114, 101, 10, 105, 110, 116, 101, 114, 112, 114, 101, 116, 101, 100, 32, 97, 115, 32, 105, 110, 32, 115, 108, 105, 99, 101, 32, 110, 111, 116, 97, 116, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 116, 35, 116, 35, 124, 110, 110, 58, 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _swapcase__doc__ = allocate([ 115, 119, 97, 112, 99, 97, 115, 101, 40, 115, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 119, 105, 116, 104, 32, 117, 112, 112, 101, 114, 32, 99, 97, 115, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 10, 99, 111, 110, 118, 101, 114, 116, 101, 100, 32, 116, 111, 32, 108, 111, 119, 101, 114, 99, 97, 115, 101, 32, 97, 110, 100, 32, 118, 105, 99, 101, 32, 118, 101, 114, 115, 97, 46, 0 ], "i8", ALLOC_NORMAL);
    _atoi__doc__ = allocate([ 97, 116, 111, 105, 40, 115, 32, 91, 44, 98, 97, 115, 101, 93, 41, 32, 45, 62, 32, 105, 110, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 105, 110, 116, 101, 103, 101, 114, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 105, 110, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 10, 98, 97, 115, 101, 44, 32, 119, 104, 105, 99, 104, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 49, 48, 46, 32, 32, 84, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 109, 117, 115, 116, 32, 99, 111, 110, 115, 105, 115, 116, 32, 111, 102, 32, 111, 110, 101, 10, 111, 114, 32, 109, 111, 114, 101, 32, 100, 105, 103, 105, 116, 115, 44, 32, 112, 111, 115, 115, 105, 98, 108, 121, 32, 112, 114, 101, 99, 101, 100, 101, 100, 32, 98, 121, 32, 97, 32, 115, 105, 103, 110, 46, 32, 32, 73, 102, 32, 98, 97, 115, 101, 32, 105, 115, 32, 48, 44, 32, 105, 116, 10, 105, 115, 32, 99, 104, 111, 115, 101, 110, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 108, 101, 97, 100, 105, 110, 103, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 32, 111, 102, 32, 115, 44, 32, 48, 32, 102, 111, 114, 32, 111, 99, 116, 97, 108, 44, 32, 48, 120, 32, 111, 114, 10, 48, 88, 32, 102, 111, 114, 32, 104, 101, 120, 97, 100, 101, 99, 105, 109, 97, 108, 46, 32, 32, 73, 102, 32, 98, 97, 115, 101, 32, 105, 115, 32, 49, 54, 44, 32, 97, 32, 112, 114, 101, 99, 101, 100, 105, 110, 103, 32, 48, 120, 32, 111, 114, 32, 48, 88, 32, 105, 115, 10, 97, 99, 99, 101, 112, 116, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 115, 124, 105, 58, 97, 116, 111, 105, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 98, 97, 115, 101, 32, 102, 111, 114, 32, 97, 116, 111, 105, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 108, 105, 116, 101, 114, 97, 108, 32, 102, 111, 114, 32, 97, 116, 111, 105, 40, 41, 58, 32, 37, 46, 50, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 97, 116, 111, 105, 40, 41, 32, 108, 105, 116, 101, 114, 97, 108, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 58, 32, 37, 46, 50, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    _atol__doc__ = allocate([ 97, 116, 111, 108, 40, 115, 32, 91, 44, 98, 97, 115, 101, 93, 41, 32, 45, 62, 32, 108, 111, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 108, 111, 110, 103, 32, 105, 110, 116, 101, 103, 101, 114, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 105, 110, 32, 116, 104, 101, 10, 103, 105, 118, 101, 110, 32, 98, 97, 115, 101, 44, 32, 119, 104, 105, 99, 104, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 49, 48, 46, 32, 32, 84, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 109, 117, 115, 116, 32, 99, 111, 110, 115, 105, 115, 116, 10, 111, 102, 32, 111, 110, 101, 32, 111, 114, 32, 109, 111, 114, 101, 32, 100, 105, 103, 105, 116, 115, 44, 32, 112, 111, 115, 115, 105, 98, 108, 121, 32, 112, 114, 101, 99, 101, 100, 101, 100, 32, 98, 121, 32, 97, 32, 115, 105, 103, 110, 46, 32, 32, 73, 102, 32, 98, 97, 115, 101, 10, 105, 115, 32, 48, 44, 32, 105, 116, 32, 105, 115, 32, 99, 104, 111, 115, 101, 110, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 108, 101, 97, 100, 105, 110, 103, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 32, 111, 102, 32, 115, 44, 32, 48, 32, 102, 111, 114, 10, 111, 99, 116, 97, 108, 44, 32, 48, 120, 32, 111, 114, 32, 48, 88, 32, 102, 111, 114, 32, 104, 101, 120, 97, 100, 101, 99, 105, 109, 97, 108, 46, 32, 32, 73, 102, 32, 98, 97, 115, 101, 32, 105, 115, 32, 49, 54, 44, 32, 97, 32, 112, 114, 101, 99, 101, 100, 105, 110, 103, 10, 48, 120, 32, 111, 114, 32, 48, 88, 32, 105, 115, 32, 97, 99, 99, 101, 112, 116, 101, 100, 46, 32, 32, 65, 32, 116, 114, 97, 105, 108, 105, 110, 103, 32, 76, 32, 111, 114, 32, 108, 32, 105, 115, 32, 110, 111, 116, 32, 97, 99, 99, 101, 112, 116, 101, 100, 44, 10, 117, 110, 108, 101, 115, 115, 32, 98, 97, 115, 101, 32, 105, 115, 32, 48, 46, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 115, 124, 105, 58, 97, 116, 111, 108, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 98, 97, 115, 101, 32, 102, 111, 114, 32, 97, 116, 111, 108, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 101, 109, 112, 116, 121, 32, 115, 116, 114, 105, 110, 103, 32, 102, 111, 114, 32, 97, 116, 111, 108, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 108, 105, 116, 101, 114, 97, 108, 32, 102, 111, 114, 32, 97, 116, 111, 108, 40, 41, 58, 32, 37, 46, 50, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    _atof__doc__ = allocate([ 97, 116, 111, 102, 40, 115, 41, 32, 45, 62, 32, 102, 108, 111, 97, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 110, 117, 109, 98, 101, 114, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 115, 58, 97, 116, 111, 102, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 101, 109, 112, 116, 121, 32, 115, 116, 114, 105, 110, 103, 32, 102, 111, 114, 32, 97, 116, 111, 102, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 108, 105, 116, 101, 114, 97, 108, 32, 102, 111, 114, 32, 97, 116, 111, 102, 40, 41, 58, 32, 37, 46, 50, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    _maketrans__doc__ = allocate([ 109, 97, 107, 101, 116, 114, 97, 110, 115, 40, 102, 114, 109, 44, 32, 116, 111, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 116, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 116, 97, 98, 108, 101, 32, 40, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 50, 53, 54, 32, 98, 121, 116, 101, 115, 32, 108, 111, 110, 103, 41, 10, 115, 117, 105, 116, 97, 98, 108, 101, 32, 102, 111, 114, 32, 117, 115, 101, 32, 105, 110, 32, 115, 116, 114, 105, 110, 103, 46, 116, 114, 97, 110, 115, 108, 97, 116, 101, 46, 32, 32, 84, 104, 101, 32, 115, 116, 114, 105, 110, 103, 115, 32, 102, 114, 109, 32, 97, 110, 100, 32, 116, 111, 10, 109, 117, 115, 116, 32, 98, 101, 32, 111, 102, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 108, 101, 110, 103, 116, 104, 46, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 116, 35, 116, 35, 58, 109, 97, 107, 101, 116, 114, 97, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 109, 97, 107, 101, 116, 114, 97, 110, 115, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 115, 97, 109, 101, 32, 108, 101, 110, 103, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    _translate__doc__ = allocate([ 116, 114, 97, 110, 115, 108, 97, 116, 101, 40, 115, 44, 116, 97, 98, 108, 101, 32, 91, 44, 100, 101, 108, 101, 116, 101, 99, 104, 97, 114, 115, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 44, 32, 119, 104, 101, 114, 101, 32, 97, 108, 108, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 32, 111, 99, 99, 117, 114, 114, 105, 110, 103, 10, 105, 110, 32, 116, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 100, 101, 108, 101, 116, 101, 99, 104, 97, 114, 115, 32, 97, 114, 101, 32, 114, 101, 109, 111, 118, 101, 100, 44, 32, 97, 110, 100, 32, 116, 104, 101, 10, 114, 101, 109, 97, 105, 110, 105, 110, 103, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 32, 104, 97, 118, 101, 32, 98, 101, 101, 110, 32, 109, 97, 112, 112, 101, 100, 32, 116, 104, 114, 111, 117, 103, 104, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 10, 116, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 116, 97, 98, 108, 101, 44, 32, 119, 104, 105, 99, 104, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 108, 101, 110, 103, 116, 104, 32, 50, 53, 54, 46, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 83, 116, 35, 124, 116, 35, 58, 116, 114, 97, 110, 115, 108, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 116, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 116, 97, 98, 108, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 50, 53, 54, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 32, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 110, 101, 119, 95, 108, 101, 110, 32, 62, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 115, 116, 114, 111, 112, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9892 = allocate([ 109, 121, 109, 101, 109, 114, 101, 112, 108, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    _replace__doc__ = allocate([ 114, 101, 112, 108, 97, 99, 101, 32, 40, 115, 116, 114, 44, 32, 111, 108, 100, 44, 32, 110, 101, 119, 91, 44, 32, 109, 97, 120, 115, 112, 108, 105, 116, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 115, 116, 114, 105, 110, 103, 32, 115, 116, 114, 32, 119, 105, 116, 104, 32, 97, 108, 108, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 115, 32, 111, 102, 32, 115, 117, 98, 115, 116, 114, 105, 110, 103, 10, 111, 108, 100, 32, 114, 101, 112, 108, 97, 99, 101, 100, 32, 98, 121, 32, 110, 101, 119, 46, 32, 73, 102, 32, 116, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 97, 120, 115, 112, 108, 105, 116, 32, 105, 115, 10, 103, 105, 118, 101, 110, 44, 32, 111, 110, 108, 121, 32, 116, 104, 101, 32, 102, 105, 114, 115, 116, 32, 109, 97, 120, 115, 112, 108, 105, 116, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 115, 32, 97, 114, 101, 32, 114, 101, 112, 108, 97, 99, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 116, 35, 116, 35, 116, 35, 124, 110, 58, 114, 101, 112, 108, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 101, 109, 112, 116, 121, 32, 112, 97, 116, 116, 101, 114, 110, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 97, 116, 111, 102, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 97, 116, 111, 105, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 97, 116, 111, 108, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 99, 97, 112, 105, 116, 97, 108, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 101, 120, 112, 97, 110, 100, 116, 97, 98, 115, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 106, 111, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 106, 111, 105, 110, 102, 105, 101, 108, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 108, 115, 116, 114, 105, 112, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 108, 111, 119, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 109, 97, 107, 101, 116, 114, 97, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 114, 101, 112, 108, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 114, 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 114, 115, 116, 114, 105, 112, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 115, 112, 108, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 115, 112, 108, 105, 116, 102, 105, 101, 108, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 115, 116, 114, 105, 112, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 115, 119, 97, 112, 99, 97, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 116, 114, 97, 110, 115, 108, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 117, 112, 112, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _strop_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str54 = allocate([ 115, 116, 114, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 119, 104, 105, 116, 101, 115, 112, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 108, 111, 119, 101, 114, 99, 97, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 117, 112, 112, 101, 114, 99, 97, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_strop_methods] = __str33;
    HEAP[_strop_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_strop_methods + 12] = _atof__doc__;
    HEAP[_strop_methods + 16] = __str34;
    HEAP[_strop_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_strop_methods + 28] = _atoi__doc__;
    HEAP[_strop_methods + 32] = __str35;
    HEAP[_strop_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_strop_methods + 44] = _atol__doc__;
    HEAP[_strop_methods + 48] = __str36;
    HEAP[_strop_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_strop_methods + 60] = _capitalize__doc__;
    HEAP[_strop_methods + 64] = __str37;
    HEAP[_strop_methods + 68] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_strop_methods + 76] = _count__doc__;
    HEAP[_strop_methods + 80] = __str38;
    HEAP[_strop_methods + 84] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_strop_methods + 92] = _expandtabs__doc__;
    HEAP[_strop_methods + 96] = __str39;
    HEAP[_strop_methods + 100] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_strop_methods + 108] = _find__doc__;
    HEAP[_strop_methods + 112] = __str40;
    HEAP[_strop_methods + 116] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_strop_methods + 124] = _joinfields__doc__;
    HEAP[_strop_methods + 128] = __str41;
    HEAP[_strop_methods + 132] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_strop_methods + 140] = _joinfields__doc__;
    HEAP[_strop_methods + 144] = __str42;
    HEAP[_strop_methods + 148] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_strop_methods + 156] = _lstrip__doc__;
    HEAP[_strop_methods + 160] = __str43;
    HEAP[_strop_methods + 164] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_strop_methods + 172] = _lower__doc__;
    HEAP[_strop_methods + 176] = __str44;
    HEAP[_strop_methods + 180] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_strop_methods + 188] = _maketrans__doc__;
    HEAP[_strop_methods + 192] = __str45;
    HEAP[_strop_methods + 196] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_strop_methods + 204] = _replace__doc__;
    HEAP[_strop_methods + 208] = __str46;
    HEAP[_strop_methods + 212] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_strop_methods + 220] = _rfind__doc__;
    HEAP[_strop_methods + 224] = __str47;
    HEAP[_strop_methods + 228] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_strop_methods + 236] = _rstrip__doc__;
    HEAP[_strop_methods + 240] = __str48;
    HEAP[_strop_methods + 244] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_strop_methods + 252] = _splitfields__doc__;
    HEAP[_strop_methods + 256] = __str49;
    HEAP[_strop_methods + 260] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_strop_methods + 268] = _splitfields__doc__;
    HEAP[_strop_methods + 272] = __str50;
    HEAP[_strop_methods + 276] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_strop_methods + 284] = _strip__doc__;
    HEAP[_strop_methods + 288] = __str51;
    HEAP[_strop_methods + 292] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_strop_methods + 300] = _swapcase__doc__;
    HEAP[_strop_methods + 304] = __str52;
    HEAP[_strop_methods + 308] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_strop_methods + 316] = _translate__doc__;
    HEAP[_strop_methods + 320] = __str53;
    HEAP[_strop_methods + 324] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_strop_methods + 332] = _upper__doc__;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
