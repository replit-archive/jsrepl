"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 128;
  var $1___SIZE = 16;
  var $2___SIZE = 80;
  var $3___SIZE = 20;
  var $4___SIZE = 20;
  var $5___SIZE = 40;
  var $6___SIZE = 20;
  var $7___SIZE = 196;
  var $8___SIZE = 48;
  var $9___SIZE = 40;
  var $10___SIZE = 80;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_LogReaderObject___SIZE = 24;
  var $struct_ProfilerObject___SIZE = 10292;
  var $struct_ProfilerObject___FLATTENER = [ 0, 4, 8, 12, 16, 20, 10260, 10264, 10268, 10272, 10276, 10280, 10284 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyCodeObject___SIZE = 72;
  var $struct_PyFrameObject___SIZE = 316;
  var $struct_PyFrameObject___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 312 ];
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyInterpreterState___SIZE = 40;
  var $struct_PyListObject___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyThreadState___SIZE = 84;
  var $struct_PyTryBlock___SIZE = 12;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_hs_time___SIZE = 8;
  var $struct_rusage___SIZE = 72;
  var $struct_rusage___FLATTENER = [ 0, 8, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68 ];
  var _ProfilerError;
  var _logreader_close__doc__;
  var _logreader_fileno__doc__;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var ___PRETTY_FUNCTION___8917;
  var __str7;
  var _maxvalues_8890;
  var _timeofday_diff;
  var _rusage_diff;
  var __str8;
  var __str9;
  var _addinfo__doc__;
  var __str10;
  var _close__doc__;
  var __str11;
  var _runcall__doc__;
  var __str12;
  var _runcode__doc__;
  var __str13;
  var __str14;
  var _start__doc__;
  var _stop__doc__;
  var __str15;
  var __str16;
  var __str17;
  var __str18;
  var __str19;
  var __str20;
  var __str21;
  var _profiler_methods;
  var __str22;
  var __str23;
  var __str24;
  var _profiler_members;
  var __str25;
  var __str26;
  var _profiler_getsets;
  var _profiler_object__doc__;
  var __str27;
  var _ProfilerType;
  var _logreader_methods;
  var __str28;
  var __str29;
  var _logreader_members;
  var _logreader__doc__;
  var _logreader_as_sequence;
  var __str30;
  var _logreader_getsets;
  var __str31;
  var _LogReaderType;
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
  var _profiler__doc__;
  var __str53;
  var __str54;
  var _coverage__doc__;
  var __str55;
  var _resolution__doc__;
  var __str56;
  var __str57;
  var __str58;
  var __str59;
  var __str60;
  var _functions;
  var __str61;
  var __str62;
  var __str63;
  var __str64;
  var __str65;
  var __str66;
  var __str67;
  var __str68;
  var __str69;
  var __str70;
  var __str71;
  var __str72;
  var __str73;
  var __str74;
  function _logreader_close($self, $args) {
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
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$self_addr + 12];
      var $8 = _fclose($7);
      
      
      HEAP[$self_addr + 12] = 0;
      __label__ = 2;
      break;
     case 2:
      
      var $12 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $12;
      $0 = __Py_NoneStruct;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _logreader_fileno($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 12] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str);
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      var $8 = HEAP[$self_addr + 12];
      var $9 = _fileno($8);
      var $10 = _PyInt_FromLong($9);
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
  function _unpack_packed_int($self, $pvalue, $discard) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $pvalue_addr;
      var $discard_addr;
      var $retval;
      var $0;
      var $c;
      var $accum;
      var $bits;
      var $cont;
      $self_addr = $self;
      $pvalue_addr = $pvalue;
      $discard_addr = $discard;
      $accum = 0;
      $bits = 0;
      __label__ = 1;
      break;
     case 1:
      
      
      var $3 = HEAP[$self_addr + 12];
      var $4 = _fgetc($3);
      $c = $4;
      var $5 = $4 == -1;
      if ($5) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 5;
      break;
     case 3:
      
      
      
      
      
      
      
      var $13 = ($c & 127) >> $discard_addr << $bits | $accum;
      $accum = $13;
      
      
      
      
      var $17 = 0 - $discard_addr + 7 + $bits;
      $bits = $17;
      
      
      $cont = $c & 128;
      $discard_addr = 0;
      
      
      if ($cont != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      HEAP[$pvalue_addr] = $accum;
      $0 = 0;
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
  function _unpack_string($self, $pvalue) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $pvalue_addr;
      var $retval;
      var $0;
      var $i;
      var $len = __stackBase__;
      var $err;
      var $ch;
      var $buf;
      $self_addr = $self;
      $pvalue_addr = $pvalue;
      
      var $2 = _unpack_packed_int($self_addr, $len, 0);
      $err = $2;
      
      
      if ($err != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $0 = $err;
      __label__ = 12;
      break;
     case 2:
      var $6 = HEAP[$len];
      var $7 = _malloc($6);
      $buf = $7;
      
      
      if ($buf == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _PyErr_NoMemory();
      $0 = -2;
      __label__ = 12;
      break;
     case 4:
      $i = 0;
      __label__ = 8;
      break;
     case 5:
      
      
      var $13 = HEAP[$self_addr + 12];
      var $14 = _fgetc($13);
      $ch = $14;
      
      
      
      
      
      HEAP[$buf + $i] = $ch & 255;
      
      var $21 = $ch == -1;
      if ($21) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      _free($buf);
      $0 = -1;
      __label__ = 12;
      break;
     case 7:
      
      var $24 = $i + 1;
      $i = $24;
      __label__ = 8;
      break;
     case 8:
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $28 = HEAP[$len];
      
      var $30 = _PyString_FromStringAndSize($buf, $28);
      
      HEAP[$pvalue_addr] = $30;
      
      _free($buf);
      
      
      
      if (HEAP[$pvalue_addr] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = -2;
      __label__ = 12;
      break;
     case 11:
      $0 = 0;
      __label__ = 12;
      break;
     case 12:
      
      $retval = $0;
      var $retval12 = $retval;
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _unpack_add_info($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $key = __stackBase__;
      var $value = __stackBase__ + 4;
      var $err;
      var $list;
      $self_addr = $self;
      HEAP[$value] = 0;
      
      var $2 = _unpack_string($self_addr, $key);
      $err = $2;
      
      
      if ($err == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 1:
      
      var $6 = _unpack_string($self_addr, $value);
      $err = $6;
      
      
      var $9 = HEAP[$key];
      if ($err != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      var $12 = HEAP[$9] - 1;
      var $13 = $9;
      HEAP[$13] = $12;
      
      
      
      if (HEAP[$9] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 3:
      
      
      
      
      var $21 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $22 = HEAP[$key];
      FUNCTION_TABLE[$21]($22);
      __label__ = 15;
      break;
     case 4:
      
      
      var $25 = HEAP[$self_addr + 8];
      var $26 = _PyDict_GetItem($25, $9);
      $list = $26;
      
      
      if ($list == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 5:
      var $29 = _PyList_New(0);
      $list = $29;
      
      
      if ($list == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $err = -2;
      __label__ = 15;
      break;
     case 7:
      var $32 = HEAP[$key];
      
      
      var $35 = HEAP[$self_addr + 8];
      
      var $37 = _PyDict_SetItem($35, $32, $list);
      var $38 = $37 != 0;
      
      
      
      var $42 = HEAP[$list] - 1;
      
      
      HEAP[$list] = $42;
      
      
      
      var $48 = HEAP[$list] == 0;
      if ($38) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      if ($48) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $53 = HEAP[HEAP[$list + 4] + 24];
      
      FUNCTION_TABLE[$53]($list);
      __label__ = 10;
      break;
     case 10:
      $err = -2;
      __label__ = 15;
      break;
     case 11:
      if ($48) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $59 = HEAP[HEAP[$list + 4] + 24];
      
      FUNCTION_TABLE[$59]($list);
      __label__ = 13;
      break;
     case 13:
      var $61 = HEAP[$value];
      
      var $63 = _PyList_Append($list, $61);
      
      if ($63 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $err = -2;
      __label__ = 15;
      break;
     case 15:
      
      
      if (HEAP[$key] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      var $67 = HEAP[$key];
      
      
      var $70 = HEAP[$67] - 1;
      var $71 = $67;
      HEAP[$71] = $70;
      
      
      
      if (HEAP[$67] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $79 = HEAP[HEAP[HEAP[$key] + 4] + 24];
      var $80 = HEAP[$key];
      FUNCTION_TABLE[$79]($80);
      __label__ = 18;
      break;
     case 18:
      
      
      if (HEAP[$value] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      var $83 = HEAP[$value];
      
      
      var $86 = HEAP[$83] - 1;
      var $87 = $83;
      HEAP[$87] = $86;
      
      
      
      if (HEAP[$83] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $95 = HEAP[HEAP[HEAP[$value] + 4] + 24];
      var $96 = HEAP[$value];
      FUNCTION_TABLE[$95]($96);
      __label__ = 21;
      break;
     case 21:
      
      $0 = $err;
      
      $retval = $0;
      var $retval21 = $retval;
      STACKTOP = __stackBase__;
      return $retval21;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _eof_error($self) {
    
    var $self_addr;
    $self_addr = $self;
    
    
    var $2 = HEAP[$self_addr + 12];
    var $3 = _fclose($2);
    
    
    HEAP[$self_addr + 12] = 0;
    var $6 = HEAP[_PyExc_EOFError];
    _PyErr_SetString($6, __str1);
    return;
  }
  function _logreader_tp_iternext($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $c;
      var $what;
      var $err;
      var $lineno = __stackBase__;
      var $fileno = __stackBase__ + 4;
      var $tdelta = __stackBase__ + 8;
      var $s1 = __stackBase__ + 12;
      var $s2;
      var $result;
      $self_addr = $self;
      $err = 0;
      HEAP[$lineno] = -1;
      HEAP[$fileno] = -1;
      HEAP[$tdelta] = -1;
      HEAP[$s1] = 0;
      $s2 = 0;
      $result = 0;
      
      
      
      
      if (HEAP[$self_addr + 12] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_ProfilerError];
      _PyErr_SetString($5, __str2);
      $0 = 0;
      __label__ = 44;
      break;
     case 2:
      
      
      var $8 = HEAP[$self_addr + 12];
      var $9 = _fgetc($8);
      $c = $9;
      var $10 = $9 == -1;
      if ($10) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $13 = HEAP[$self_addr + 12];
      var $14 = _fclose($13);
      
      
      HEAP[$self_addr + 12] = 0;
      $0 = 0;
      __label__ = 44;
      break;
     case 4:
      
      
      $what = $c & 3;
      
      
      if ($what == 3) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $21 = $c;
      $what = $21;
      __lastLabel__ = 5;
      __label__ = 7;
      break;
     case 6:
      
      
      var $24 = HEAP[$self_addr + 12];
      
      var $26 = _ungetc($c, $24);
      var $_pr = $what;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $27 = __lastLabel__ == 6 ? $_pr : $21;
      if ($27 == 0) {
        __label__ = 8;
        break;
      } else if ($27 == 1) {
        __label__ = 12;
        break;
      } else if ($27 == 2) {
        __label__ = 13;
        break;
      } else if ($27 == 19) {
        __label__ = 16;
        break;
      } else if ($27 == 35) {
        __label__ = 17;
        break;
      } else if ($27 == 51) {
        __label__ = 23;
        break;
      } else if ($27 == 67) {
        __label__ = 20;
        break;
      } else if ($27 == 83) {
        __label__ = 26;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 8:
      
      var $29 = _unpack_packed_int($self_addr, $fileno, 2);
      $err = $29;
      var $30 = $err;
      
      if ($30 == 0) {
        __lastLabel__ = 8;
        __label__ = 9;
        break;
      } else {
        __lastLabel__ = 8;
        __label__ = 30;
        break;
      }
     case 9:
      
      var $33 = _unpack_packed_int($self_addr, $lineno, 0);
      $err = $33;
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __lastLabel__ = 9;
        __label__ = 10;
        break;
      } else {
        __lastLabel__ = 9;
        __label__ = 30;
        break;
      }
     case 10:
      var $38 = $err;
      
      if ($38 == 0) {
        __lastLabel__ = 10;
        __label__ = 11;
        break;
      } else {
        __lastLabel__ = 10;
        __label__ = 30;
        break;
      }
     case 11:
      
      var $41 = _unpack_packed_int($self_addr, $tdelta, 0);
      $err = $41;
      __lastLabel__ = 11;
      __label__ = 30;
      break;
     case 12:
      
      var $43 = _unpack_packed_int($self_addr, $tdelta, 2);
      $err = $43;
      __lastLabel__ = 12;
      __label__ = 30;
      break;
     case 13:
      
      var $45 = _unpack_packed_int($self_addr, $lineno, 2);
      $err = $45;
      
      
      
      
      if (HEAP[$self_addr + 16] != 0) {
        __lastLabel__ = 13;
        __label__ = 14;
        break;
      } else {
        __lastLabel__ = 13;
        __label__ = 30;
        break;
      }
     case 14:
      var $50 = $err;
      
      if ($50 == 0) {
        __lastLabel__ = 14;
        __label__ = 15;
        break;
      } else {
        __lastLabel__ = 14;
        __label__ = 30;
        break;
      }
     case 15:
      
      var $53 = _unpack_packed_int($self_addr, $tdelta, 0);
      $err = $53;
      __lastLabel__ = 15;
      __label__ = 30;
      break;
     case 16:
      
      var $55 = _unpack_add_info($self_addr);
      $err = $55;
      __lastLabel__ = 16;
      __label__ = 30;
      break;
     case 17:
      
      var $57 = _unpack_packed_int($self_addr, $fileno, 0);
      $err = $57;
      var $58 = $err;
      
      if ($58 == 0) {
        __lastLabel__ = 17;
        __label__ = 18;
        break;
      } else {
        __lastLabel__ = 17;
        __label__ = 30;
        break;
      }
     case 18:
      
      var $61 = _unpack_string($self_addr, $s1);
      $err = $61;
      var $62 = $err;
      
      if ($62 == 0) {
        __lastLabel__ = 18;
        __label__ = 19;
        break;
      } else {
        __lastLabel__ = 18;
        __label__ = 30;
        break;
      }
     case 19:
      
      var $65 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $65;
      $s2 = __Py_NoneStruct;
      var $_pr1 = $err;
      __lastLabel__ = 19;
      __label__ = 30;
      break;
     case 20:
      
      var $67 = _unpack_packed_int($self_addr, $fileno, 0);
      $err = $67;
      var $68 = $err;
      
      if ($68 == 0) {
        __lastLabel__ = 20;
        __label__ = 21;
        break;
      } else {
        __lastLabel__ = 20;
        __label__ = 30;
        break;
      }
     case 21:
      
      var $71 = _unpack_packed_int($self_addr, $lineno, 0);
      $err = $71;
      var $72 = $err;
      
      if ($72 == 0) {
        __lastLabel__ = 21;
        __label__ = 22;
        break;
      } else {
        __lastLabel__ = 21;
        __label__ = 30;
        break;
      }
     case 22:
      
      var $75 = _unpack_string($self_addr, $s1);
      $err = $75;
      __lastLabel__ = 22;
      __label__ = 30;
      break;
     case 23:
      
      
      var $78 = HEAP[$self_addr + 12];
      var $79 = _fgetc($78);
      $c = $79;
      
      var $81 = $c == -1;
      if ($81) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      $err = -1;
      __label__ = 33;
      break;
     case 25:
      
      
      
      
      
      HEAP[$self_addr + 16] = $c != 0;
      __label__ = 2;
      break;
     case 26:
      
      
      var $89 = HEAP[$self_addr + 12];
      var $90 = _fgetc($89);
      $c = $90;
      
      var $92 = $c == -1;
      if ($92) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      $err = -1;
      __label__ = 33;
      break;
     case 28:
      
      
      
      
      
      HEAP[$self_addr + 20] = $c != 0;
      __label__ = 2;
      break;
     case 29:
      $err = -3;
      __label__ = 31;
      break;
     case 30:
      var $98 = __lastLabel__ == 20 ? $68 : __lastLabel__ == 21 ? $72 : __lastLabel__ == 22 ? $75 : __lastLabel__ == 17 ? $58 : __lastLabel__ == 18 ? $62 : __lastLabel__ == 19 ? $_pr1 : __lastLabel__ == 13 ? $45 : __lastLabel__ == 14 ? $50 : __lastLabel__ == 15 ? $53 : __lastLabel__ == 8 ? $30 : __lastLabel__ == 9 ? $33 : __lastLabel__ == 10 ? $38 : __lastLabel__ == 11 ? $41 : __lastLabel__ == 16 ? $55 : $43;
      var $99 = $98 == -3;
      if ($99) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      var $100 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($100, __str3);
      __label__ = 43;
      break;
     case 32:
      
      var $101 = $err == -1;
      if ($101) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      _eof_error($self_addr);
      __label__ = 43;
      break;
     case 34:
      
      
      if ($err == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 35:
      var $105 = _PyTuple_New(4);
      $result = $105;
      
      
      if ($result == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      $0 = 0;
      __label__ = 44;
      break;
     case 37:
      
      var $109 = $result;
      
      var $111 = _PyInt_FromLong($what);
      
      
      HEAP[$109 + 12] = $111;
      
      var $115 = $result;
      var $116 = HEAP[$fileno];
      var $117 = _PyInt_FromLong($116);
      
      
      HEAP[$115 + 12 + 8] = $117;
      
      
      
      var $123 = $result;
      if (HEAP[$s1] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      var $124 = HEAP[$tdelta];
      var $125 = _PyInt_FromLong($124);
      
      
      HEAP[$123 + 12 + 4] = $125;
      __label__ = 40;
      break;
     case 39:
      var $128 = HEAP[$s1];
      
      
      HEAP[$123 + 12 + 4] = $128;
      __label__ = 40;
      break;
     case 40:
      
      
      
      var $134 = $result;
      if ($s2 == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      var $135 = HEAP[$lineno];
      var $136 = _PyInt_FromLong($135);
      
      
      HEAP[$134 + 12 + 12] = $136;
      __label__ = 43;
      break;
     case 42:
      
      
      
      HEAP[$134 + 12 + 12] = $s2;
      __label__ = 43;
      break;
     case 43:
      
      $0 = $result;
      __label__ = 44;
      break;
     case 44:
      
      $retval = $0;
      var $retval47 = $retval;
      STACKTOP = __stackBase__;
      return $retval47;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _logreader_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[$self_addr + 12];
      var $7 = _fclose($6);
      
      
      HEAP[$self_addr + 12] = 0;
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[$self_addr + 8];
      
      
      var $19 = HEAP[$16] - 1;
      var $20 = $16;
      HEAP[$20] = $19;
      
      
      
      if (HEAP[$16] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[$self_addr + 8] + 4] + 24];
      
      
      var $33 = HEAP[$self_addr + 8];
      FUNCTION_TABLE[$30]($33);
      __label__ = 5;
      break;
     case 5:
      
      
      _PyObject_Free($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _logreader_sq_item($self, $index) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $index_addr;
      var $retval;
      var $0;
      var $result;
      $self_addr = $self;
      $index_addr = $index;
      
      var $2 = _logreader_tp_iternext($self_addr);
      $result = $2;
      
      
      if ($result == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $7 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($7, __str4);
      $0 = 0;
      __label__ = 4;
      break;
     case 3:
      
      $0 = $result;
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
  function _flush_data($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $written;
      var $s;
      var $s6;
      $self_addr = $self;
      
      
      var $3 = HEAP[$self_addr + 10260];
      
      
      var $6 = HEAP[$self_addr + 16];
      
      
      
      var $10 = _fwrite($self_addr + 20, 1, $6, $3);
      $written = $10;
      
      
      
      
      
      
      var $17 = $self_addr + 16;
      if (HEAP[$self_addr + 16] == $written) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $20 = HEAP[$17] - $written;
      
      
      
      
      
      
      
      _llvm_memmove_p0i8_p0i8_i32($self_addr + 20, $self_addr + 20 + $written, $20, 1, 0);
      
      
      
      
      var $32 = HEAP[$self_addr + 16] - $written;
      
      
      HEAP[$self_addr + 16] = $32;
      
      
      if ($written == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      var $39 = HEAP[$self_addr + 12];
      var $40 = _PyString_AsString($39);
      $s = $40;
      var $41 = HEAP[_PyExc_IOError];
      
      var $43 = _PyErr_SetFromErrnoWithFilename($41, $s);
      
      _do_stop($self_addr);
      $0 = -1;
      __label__ = 7;
      break;
     case 3:
      HEAP[$17] = 0;
      
      
      if ($written != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $48 = HEAP[$self_addr + 10260];
      var $49 = _fflush($48);
      
      if ($49 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $53 = HEAP[$self_addr + 12];
      var $54 = _PyString_AsString($53);
      $s6 = $54;
      var $55 = HEAP[_PyExc_IOError];
      
      var $57 = _PyErr_SetFromErrnoWithFilename($55, $s6);
      
      _do_stop($self_addr);
      $0 = -1;
      __label__ = 7;
      break;
     case 6:
      $0 = 0;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _pack_string($self, $s, $len) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $s_addr;
      var $len_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $s_addr = $s;
      $len_addr = $len;
      
      
      
      var $4 = $len_addr;
      
      
      
      if (HEAP[$self_addr + 16] + 5 + $4 > 10239) {
        __lastLabel__ = -1;
        __label__ = 1;
        break;
      } else {
        __lastLabel__ = -1;
        __label__ = 4;
        break;
      }
     case 1:
      
      var $9 = _flush_data($self_addr);
      
      if ($9 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 9;
      break;
     case 3:
      var $_pr = $len_addr;
      __lastLabel__ = 3;
      __label__ = 4;
      break;
     case 4:
      var $11 = __lastLabel__ == 3 ? $_pr : $4;
      
      if ($11 == 2147483647) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str5, __str6, 630, ___PRETTY_FUNCTION___8917);
      throw "Reached an unreachable!";
     case 6:
      
      
      var $15 = _pack_packed_int($self_addr, $len_addr);
      
      if ($15 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = -1;
      __label__ = 9;
      break;
     case 8:
      
      
      
      
      
      
      
      var $24 = $self_addr + 20 + HEAP[$self_addr + 16];
      
      _llvm_memcpy_p0i8_p0i8_i32($24, $s_addr, $len_addr, 1, 0);
      
      
      
      
      var $30 = $len_addr + HEAP[$self_addr + 16];
      
      
      HEAP[$self_addr + 16] = $30;
      $0 = 0;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _pack_packed_int($self, $value) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $value_addr;
      var $retval;
      var $0;
      var $partial;
      $self_addr = $self;
      $value_addr = $value;
      __label__ = 1;
      break;
     case 1:
      
      
      
      $partial = $value_addr & 255 & 127;
      
      var $5 = $value_addr >> 7;
      $value_addr = $5;
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $8 = $partial | -128;
      $partial = $8;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      var $14 = $self_addr + 20 + HEAP[$self_addr + 16];
      
      HEAP[$14] = $partial;
      
      
      
      var $19 = HEAP[$self_addr + 16] + 1;
      
      
      HEAP[$self_addr + 16] = $19;
      
      
      if ($value_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      $0 = 0;
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _pack_add_info($self, $s1, $s2) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $s1_addr;
      var $s2_addr;
      var $retval;
      var $0;
      var $len1;
      var $len2;
      $self_addr = $self;
      $s1_addr = $s1;
      $s2_addr = $s2;
      
      var $2 = _strlen($s1_addr);
      $len1 = $2;
      
      var $4 = _strlen($s2_addr);
      $len2 = $4;
      
      
      
      
      
      
      
      
      
      if ($len1 + 11 + $len2 + HEAP[$self_addr + 16] > 10239) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $15 = _flush_data($self_addr);
      
      if ($15 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 6;
      break;
     case 3:
      
      
      
      
      
      var $22 = $self_addr + 20 + HEAP[$self_addr + 16];
      HEAP[$22] = 19;
      
      
      
      var $26 = HEAP[$self_addr + 16] + 1;
      
      
      HEAP[$self_addr + 16] = $26;
      
      
      
      var $32 = _pack_string($self_addr, $s1_addr, $len1);
      
      if ($32 < 0) {
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
      
      
      
      var $37 = _pack_string($self_addr, $s2_addr, $len2);
      $0 = $37;
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
  function _pack_define_file($self, $fileno, $filename) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $fileno_addr;
      var $filename_addr;
      var $retval;
      var $0;
      var $len;
      $self_addr = $self;
      $fileno_addr = $fileno;
      $filename_addr = $filename;
      
      var $2 = _strlen($filename_addr);
      $len = $2;
      
      
      
      
      
      
      
      if (HEAP[$self_addr + 16] + 11 + $len > 10239) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $11 = _flush_data($self_addr);
      
      if ($11 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 6;
      break;
     case 3:
      
      
      
      
      
      var $18 = $self_addr + 20 + HEAP[$self_addr + 16];
      HEAP[$18] = 35;
      
      
      
      var $22 = HEAP[$self_addr + 16] + 1;
      
      
      HEAP[$self_addr + 16] = $22;
      
      
      var $27 = _pack_packed_int($self_addr, $fileno_addr);
      
      if ($27 < 0) {
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
      
      
      
      var $32 = _pack_string($self_addr, $filename_addr, $len);
      $0 = $32;
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
  function _pack_define_func($self, $fileno, $lineno, $funcname) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $fileno_addr;
      var $lineno_addr;
      var $funcname_addr;
      var $retval;
      var $0;
      var $len;
      $self_addr = $self;
      $fileno_addr = $fileno;
      $lineno_addr = $lineno;
      $funcname_addr = $funcname;
      
      var $2 = _strlen($funcname_addr);
      $len = $2;
      
      
      
      
      
      
      
      if (HEAP[$self_addr + 16] + 16 + $len > 10239) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $11 = _flush_data($self_addr);
      
      if ($11 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 8;
      break;
     case 3:
      
      
      
      
      
      var $18 = $self_addr + 20 + HEAP[$self_addr + 16];
      HEAP[$18] = 67;
      
      
      
      var $22 = HEAP[$self_addr + 16] + 1;
      
      
      HEAP[$self_addr + 16] = $22;
      
      
      var $27 = _pack_packed_int($self_addr, $fileno_addr);
      
      if ($27 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 8;
      break;
     case 5:
      
      
      var $31 = _pack_packed_int($self_addr, $lineno_addr);
      
      if ($31 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -1;
      __label__ = 8;
      break;
     case 7:
      
      
      
      var $36 = _pack_string($self_addr, $funcname_addr, $len);
      $0 = $36;
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
  function _pack_line_times($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $0;
      $self_addr = $self;
      
      
      
      
      
      if (HEAP[$self_addr + 16] + 2 > 10239) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $7 = _flush_data($self_addr);
      
      if ($7 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 4;
      break;
     case 3:
      
      
      
      
      
      var $14 = $self_addr + 20 + HEAP[$self_addr + 16];
      HEAP[$14] = 51;
      
      
      
      
      
      
      
      
      var $23 = HEAP[$self_addr + 10268] != 0;
      
      
      var $26 = $self_addr + 20 + (HEAP[$self_addr + 16] + 1);
      HEAP[$26] = $23;
      
      
      
      var $30 = HEAP[$self_addr + 16] + 2;
      
      
      HEAP[$self_addr + 16] = $30;
      $0 = 0;
      __label__ = 4;
      break;
     case 4:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _pack_frame_times($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $0;
      $self_addr = $self;
      
      
      
      
      
      if (HEAP[$self_addr + 16] + 2 > 10239) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $7 = _flush_data($self_addr);
      
      if ($7 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 4;
      break;
     case 3:
      
      
      
      
      
      var $14 = $self_addr + 20 + HEAP[$self_addr + 16];
      HEAP[$14] = 83;
      
      
      
      
      
      
      
      
      var $23 = HEAP[$self_addr + 10272] != 0;
      
      
      var $26 = $self_addr + 20 + (HEAP[$self_addr + 16] + 1);
      HEAP[$26] = $23;
      
      
      
      var $30 = HEAP[$self_addr + 16] + 2;
      
      
      HEAP[$self_addr + 16] = $30;
      $0 = 0;
      __label__ = 4;
      break;
     case 4:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _tracer_callback($self, $frame, $what, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $frame_addr;
      var $what_addr;
      var $arg_addr;
      var $retval;
      var $iftmp_44;
      var $0;
      var $fileno;
      $self_addr = $self;
      $frame_addr = $frame;
      $what_addr = $what;
      $arg_addr = $arg;
      var $1 = $what_addr;
      if ($1 == 0) {
        __label__ = 1;
        break;
      } else if ($1 == 2) {
        __label__ = 8;
        break;
      } else if ($1 == 3) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 1:
      
      
      var $4 = HEAP[$frame_addr + 16];
      
      var $6 = _get_fileno($self_addr, $4);
      $fileno = $6;
      
      
      if ($fileno < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 12;
      break;
     case 3:
      
      
      
      
      var $13 = HEAP[HEAP[$frame_addr + 16] + 56];
      
      
      
      
      if (HEAP[$self_addr + 10272] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $19 = _get_tdelta($self_addr);
      $iftmp_44 = $19;
      __label__ = 6;
      break;
     case 5:
      $iftmp_44 = -1;
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $23 = _pack_enter($self_addr, $fileno, $iftmp_44, $13);
      $0 = $23;
      __label__ = 12;
      break;
     case 7:
      
      var $25 = _get_tdelta($self_addr);
      
      var $27 = _pack_exit($self_addr, $25);
      $0 = $27;
      __label__ = 12;
      break;
     case 8:
      
      
      
      
      if (HEAP[$self_addr + 10268] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      var $33 = _get_tdelta($self_addr);
      
      
      var $36 = HEAP[$frame_addr + 64];
      
      var $38 = _pack_lineno_tdelta($self_addr, $36, $33);
      $0 = $38;
      __label__ = 12;
      break;
     case 10:
      
      
      var $41 = HEAP[$frame_addr + 64];
      
      var $43 = _pack_lineno($self_addr, $41);
      $0 = $43;
      __label__ = 12;
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
  function _get_fileno($self, $fcode) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $fcode_addr;
      var $retval;
      var $0;
      var $obj;
      var $dict;
      var $fileno;
      var $name;
      $self_addr = $self;
      $fcode_addr = $fcode;
      
      
      var $3 = HEAP[$fcode_addr + 48];
      
      
      var $6 = HEAP[$self_addr + 8];
      var $7 = _PyDict_GetItem($6, $3);
      $obj = $7;
      
      
      if ($obj == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 1:
      var $10 = _PyDict_New();
      $dict = $10;
      
      
      if ($dict == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 28;
      break;
     case 3:
      
      
      
      $fileno = HEAP[$self_addr + 10280];
      
      
      var $18 = _Py_BuildValue(__str7, allocate([ $fileno, 0, 0, 0, $dict, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $obj = $18;
      
      
      if ($obj == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 28;
      break;
     case 5:
      
      
      var $23 = HEAP[$fcode_addr + 48];
      
      
      var $26 = HEAP[$self_addr + 8];
      
      var $28 = _PyDict_SetItem($26, $23, $obj);
      
      if ($28 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $33 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $33;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $44 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$44]($obj);
      __label__ = 8;
      break;
     case 8:
      $0 = -1;
      __label__ = 28;
      break;
     case 9:
      
      
      
      var $49 = HEAP[$self_addr + 10280] + 1;
      
      
      HEAP[$self_addr + 10280] = $49;
      
      
      
      var $55 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $55;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $66 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$66]($obj);
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      
      var $73 = HEAP[$fcode_addr + 48] + 20;
      
      
      var $76 = _pack_define_file($self_addr, $fileno, $73);
      
      if ($76 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      $0 = -1;
      __label__ = 28;
      break;
     case 13:
      
      
      
      
      
      
      
      
      $fileno = HEAP[HEAP[$obj + 12] + 8];
      
      
      
      
      
      $dict = HEAP[$obj + 12 + 4];
      __label__ = 14;
      break;
     case 14:
      
      
      var $93 = HEAP[$fcode_addr + 56];
      var $94 = _PyInt_FromLong($93);
      $obj = $94;
      
      if ($94 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      _PyErr_Clear();
      __label__ = 27;
      break;
     case 16:
      
      
      var $98 = _PyDict_GetItem($dict, $obj);
      $name = $98;
      
      
      if ($name == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 17:
      
      
      
      
      
      var $106 = HEAP[$fcode_addr + 52] + 20;
      
      
      var $109 = HEAP[$fcode_addr + 56];
      
      
      var $112 = _pack_define_func($self_addr, $fileno, $109, $106);
      
      if ($112 < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      
      
      
      var $117 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $117;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $128 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$128]($obj);
      __label__ = 20;
      break;
     case 20:
      $0 = -1;
      __label__ = 28;
      break;
     case 21:
      
      
      var $132 = HEAP[$fcode_addr + 52];
      
      
      var $135 = _PyDict_SetItem($dict, $obj, $132);
      
      if ($135 != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 22:
      
      
      
      var $140 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $140;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $151 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$151]($obj);
      __label__ = 24;
      break;
     case 24:
      $0 = -1;
      __label__ = 28;
      break;
     case 25:
      
      
      
      var $156 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $156;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $167 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$167]($obj);
      __label__ = 27;
      break;
     case 27:
      
      $0 = $fileno;
      __label__ = 28;
      break;
     case 28:
      
      $retval = $0;
      var $retval29 = $retval;
      return $retval29;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _get_tdelta($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $tdelta;
      var $tv = __stackBase__;
      $self_addr = $self;
      var $1 = _gettimeofday($tv, 0);
      
      
      
      
      
      
      
      $tdelta = HEAP[$tv + 4] - HEAP[$self_addr + 10284 + 4];
      
      
      
      
      
      
      
      if (HEAP[$tv] != HEAP[$self_addr + 10284]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      var $25 = (HEAP[$tv] - HEAP[$self_addr + 10284]) * 1e6 + $tdelta;
      $tdelta = $25;
      __lastLabel__ = 1;
      __label__ = 3;
      break;
     case 2:
      var $_pr = $tdelta;
      __lastLabel__ = 2;
      __label__ = 3;
      break;
     case 3:
      var $26 = __lastLabel__ == 2 ? $_pr : $25;
      
      if ($26 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 6;
      break;
     case 5:
      
      
      
      
      var $32 = HEAP[$tv];
      HEAP[$self_addr + 10284] = $32;
      
      
      var $35 = HEAP[$tv + 4];
      HEAP[$self_addr + 10284 + 4] = $35;
      
      $0 = $tdelta;
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _pack_enter($self, $fileno, $tdelta, $lineno) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $fileno_addr;
      var $tdelta_addr;
      var $lineno_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $fileno_addr = $fileno;
      $tdelta_addr = $tdelta;
      $lineno_addr = $lineno;
      
      
      
      
      
      if (HEAP[$self_addr + 16] + 16 > 10239) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $7 = _flush_data($self_addr);
      
      if ($7 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 6;
      break;
     case 3:
      
      
      var $11 = _pack_modified_packed_int($self_addr, $fileno_addr, 0);
      
      
      var $14 = _pack_packed_int($self_addr, $lineno_addr);
      
      
      
      
      if (HEAP[$self_addr + 10272] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $21 = _pack_packed_int($self_addr, $tdelta_addr);
      $0 = $21;
      __label__ = 6;
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
  function _pack_exit($self, $tdelta) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $tdelta_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $tdelta_addr = $tdelta;
      
      
      
      
      
      if (HEAP[$self_addr + 16] + 6 > 10239) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $7 = _flush_data($self_addr);
      
      if ($7 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 6;
      break;
     case 3:
      
      
      
      
      var $13 = $self_addr;
      if (HEAP[$self_addr + 10272] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $15 = _pack_modified_packed_int($13, $tdelta_addr, 1);
      $0 = $15;
      __label__ = 6;
      break;
     case 5:
      
      
      
      
      var $20 = $self_addr + 20 + HEAP[$13 + 16];
      HEAP[$20] = 1;
      
      
      
      var $24 = HEAP[$self_addr + 16] + 1;
      
      
      HEAP[$self_addr + 16] = $24;
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
  function _pack_lineno_tdelta($self, $lineno, $tdelta) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $lineno_addr;
      var $tdelta_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $lineno_addr = $lineno;
      $tdelta_addr = $tdelta;
      
      
      
      
      
      if (HEAP[$self_addr + 16] + 11 > 10239) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $7 = _flush_data($self_addr);
      
      if ($7 < 0) {
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
      
      
      var $11 = _pack_modified_packed_int($self_addr, $lineno_addr, 2);
      
      if ($11 < 0) {
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
      
      
      var $15 = _pack_packed_int($self_addr, $tdelta_addr);
      $0 = $15;
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
  function _pack_lineno($self, $lineno) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $lineno_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $lineno_addr = $lineno;
      
      
      
      
      
      if (HEAP[$self_addr + 16] + 6 > 10239) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $7 = _flush_data($self_addr);
      
      if ($7 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 4;
      break;
     case 3:
      
      
      var $11 = _pack_modified_packed_int($self_addr, $lineno_addr, 2);
      $0 = $11;
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
  function _pack_modified_packed_int($self, $value, $subfield) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $value_addr;
      var $modsize_addr;
      var $subfield_addr;
      var $retval;
      var $0;
      var $bits;
      var $partial;
      var $b;
      $self_addr = $self;
      $value_addr = $value;
      $modsize_addr = 2;
      $subfield_addr = $subfield;
      
      
      $bits = 7 - $modsize_addr;
      
      
      
      
      
      $partial = $value_addr & HEAP[_maxvalues_8890 + $bits * 4];
      
      
      
      
      
      
      
      $b = $partial << $modsize_addr & 255 | $subfield_addr & 255;
      
      
      
      if ($partial != $value_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $19 = $b | -128;
      $b = $19;
      
      
      
      
      
      var $25 = $self_addr + 20 + HEAP[$self_addr + 16];
      
      HEAP[$25] = $b;
      
      
      
      var $30 = HEAP[$self_addr + 16] + 1;
      
      
      HEAP[$self_addr + 16] = $30;
      
      
      
      
      var $37 = _pack_packed_int($self_addr, $value_addr >> $bits);
      $0 = $37;
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      
      var $43 = $self_addr + 20 + HEAP[$self_addr + 16];
      
      HEAP[$43] = $b;
      
      
      
      var $48 = HEAP[$self_addr + 16] + 1;
      
      
      HEAP[$self_addr + 16] = $48;
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
  function _calibrate() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 160;
    _memset(__stackBase__, 0, 160);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tv1 = __stackBase__;
      var $tv2 = __stackBase__ + 8;
      var $ru1 = __stackBase__ + 16;
      var $ru2 = __stackBase__ + 88;
      var $0 = _gettimeofday($tv1, 0);
      var $1 = $tv1 + 4;
      var $2 = $tv1;
      var $3 = $tv2;
      var $4 = $tv2 + 4;
      __label__ = 1;
      break;
     case 1:
      var $5 = _gettimeofday($tv2, 0);
      
      
      
      if (HEAP[$2] != HEAP[$3]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      if (HEAP[$1] != HEAP[$4]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 3:
      
      
      
      
      
      if (HEAP[$tv1] == HEAP[$tv2]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $21 = HEAP[$tv2 + 4] - HEAP[$tv1 + 4];
      HEAP[_timeofday_diff] = $21;
      __label__ = 6;
      break;
     case 5:
      
      
      
      
      
      
      var $27 = 0 - HEAP[$tv1 + 4] + 1e6 + HEAP[$tv2 + 4];
      HEAP[_timeofday_diff] = $27;
      __label__ = 6;
      break;
     case 6:
      var $28 = _getrusage(0, $ru1);
      
      var $30 = $ru1;
      
      var $32 = $ru2;
      
      var $34 = $ru1 + 4;
      
      var $36 = $ru2 + 4;
      
      var $38 = $ru1 + 8;
      
      var $40 = $ru2 + 8;
      
      var $42 = $ru1 + 8 + 4;
      
      var $44 = $ru2 + 8 + 4;
      __label__ = 7;
      break;
     case 7:
      var $45 = _getrusage(0, $ru2);
      
      
      
      var $49 = HEAP[$34];
      if (HEAP[$30] != HEAP[$32]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $54 = 0 - $49 + 1e6 + HEAP[$ru2 + 4];
      HEAP[_rusage_diff] = $54;
      __label__ = 15;
      break;
     case 9:
      
      
      if ($49 != HEAP[$36]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      var $63 = HEAP[$ru2 + 4] - HEAP[$ru1 + 4];
      HEAP[_rusage_diff] = $63;
      __label__ = 15;
      break;
     case 11:
      
      
      
      var $67 = HEAP[$42];
      if (HEAP[$38] != HEAP[$40]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      var $72 = 0 - $67 + 1e6 + HEAP[$ru2 + 8 + 4];
      HEAP[_rusage_diff] = $72;
      __label__ = 15;
      break;
     case 13:
      
      
      if ($67 != HEAP[$44]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 14:
      
      
      
      
      
      
      var $81 = HEAP[$ru2 + 8 + 4] - HEAP[$ru1 + 8 + 4];
      HEAP[_rusage_diff] = $81;
      __label__ = 15;
      break;
     case 15:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _do_start($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      HEAP[$self_addr + 10276] = 1;
      
      
      var $4 = _gettimeofday($self_addr + 10284, 0);
      
      
      
      
      
      var $10 = $self_addr;
      if (HEAP[$self_addr + 10264] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      _PyEval_SetTrace(FUNCTION_TABLE_OFFSET + 2, $10);
      __label__ = 3;
      break;
     case 2:
      _PyEval_SetProfile(FUNCTION_TABLE_OFFSET + 2, $10);
      __label__ = 3;
      break;
     case 3:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _do_stop($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 10276] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      HEAP[$self_addr + 10276] = 0;
      
      
      
      
      if (HEAP[$self_addr + 10264] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      _PyEval_SetTrace(0, 0);
      __label__ = 4;
      break;
     case 3:
      _PyEval_SetProfile(0, 0);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      if (HEAP[$self_addr + 16] > 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $15 = _flush_data($self_addr);
      __label__ = 6;
      break;
     case 6:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _is_available($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 10276] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_ProfilerError];
      _PyErr_SetString($5, __str8);
      $0 = 0;
      __label__ = 5;
      break;
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 10260] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = HEAP[_ProfilerError];
      _PyErr_SetString($10, __str9);
      $0 = 0;
      __label__ = 5;
      break;
     case 4:
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
  function _profiler_addinfo($self, $args) {
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
      var $result;
      var $key = __stackBase__;
      var $value = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      $result = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str10, allocate([ $key, 0, 0, 0, $value, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$self_addr + 10260] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $8 = HEAP[_ProfilerError];
      _PyErr_SetString($8, __str9);
      __label__ = 5;
      break;
     case 3:
      var $9 = HEAP[$value];
      var $10 = HEAP[$key];
      
      var $12 = _pack_add_info($self_addr, $10, $9);
      
      if ($12 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $result = __Py_NoneStruct;
      
      
      
      var $17 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $17;
      __label__ = 5;
      break;
     case 5:
      
      $0 = $result;
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _profiler_close($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      
      _do_stop($self_addr);
      
      
      
      
      if (HEAP[$self_addr + 10260] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$self_addr + 10260];
      var $9 = _fclose($8);
      
      
      HEAP[$self_addr + 10260] = 0;
      __label__ = 2;
      break;
     case 2:
      
      var $13 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $13;
      $0 = __Py_NoneStruct;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _profiler_fileno($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 10260] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str11);
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      var $8 = HEAP[$self_addr + 10260];
      var $9 = _fileno($8);
      var $10 = _PyInt_FromLong($9);
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
  function _profiler_runcall($self, $args) {
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
      var $result;
      var $callargs = __stackBase__;
      var $callkw = __stackBase__ + 4;
      var $callable = __stackBase__ + 8;
      $self_addr = $self;
      $args_addr = $args;
      $result = 0;
      HEAP[$callargs] = 0;
      HEAP[$callkw] = 0;
      
      var $2 = _PyArg_UnpackTuple($args_addr, __str12, 1, 3, allocate([ $callable, 0, 0, 0, $callargs, 0, 0, 0, $callkw, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $5 = _is_available($self_addr);
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      _do_start($self_addr);
      var $8 = HEAP[$callkw];
      var $9 = HEAP[$callargs];
      var $10 = HEAP[$callable];
      var $11 = _PyEval_CallObjectWithKeywords($10, $9, $8);
      $result = $11;
      
      _do_stop($self_addr);
      __label__ = 3;
      break;
     case 3:
      
      $0 = $result;
      
      $retval = $0;
      var $retval3 = $retval;
      STACKTOP = __stackBase__;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _profiler_runcode($self, $args) {
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
      var $result;
      var $code = __stackBase__;
      var $globals = __stackBase__ + 4;
      var $locals = __stackBase__ + 8;
      $self_addr = $self;
      $args_addr = $args;
      $result = 0;
      HEAP[$locals] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str13, allocate([ _PyCode_Type, 0, 0, 0, $code, 0, 0, 0, _PyDict_Type, 0, 0, 0, $globals, 0, 0, 0, $locals, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyCodeObject**", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      var $5 = _is_available($self_addr);
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 2:
      
      
      
      
      
      if (HEAP[$locals] == 0 | HEAP[$locals] == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = HEAP[$globals];
      HEAP[$locals] = $11;
      __label__ = 6;
      break;
     case 4:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$locals] + 4] + 84] & 536870912) == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $19 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($19, __str14);
      $0 = 0;
      __label__ = 8;
      break;
     case 6:
      
      _do_start($self_addr);
      var $21 = HEAP[$locals];
      var $22 = HEAP[$globals];
      var $23 = HEAP[$code];
      var $24 = _PyEval_EvalCode($23, $22, $21);
      $result = $24;
      
      _do_stop($self_addr);
      __label__ = 7;
      break;
     case 7:
      
      $0 = $result;
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
  function _profiler_start($self, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $result;
      $self_addr = $self;
      $args_addr = $args;
      $result = 0;
      
      var $2 = _is_available($self_addr);
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      _do_start($self_addr);
      $result = __Py_NoneStruct;
      
      
      
      var $8 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $8;
      __label__ = 2;
      break;
     case 2:
      
      $0 = $result;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _profiler_stop($self, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $result;
      $self_addr = $self;
      $args_addr = $args;
      $result = 0;
      
      
      
      
      if (HEAP[$self_addr + 10276] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_ProfilerError];
      _PyErr_SetString($5, __str15);
      __label__ = 3;
      break;
     case 2:
      
      _do_stop($self_addr);
      $result = __Py_NoneStruct;
      
      
      
      var $10 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $10;
      __label__ = 3;
      break;
     case 3:
      
      $0 = $result;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _profiler_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      _do_stop($self_addr);
      
      
      
      
      if (HEAP[$self_addr + 10260] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$self_addr + 10260];
      var $8 = _fclose($7);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $15 = HEAP[$self_addr + 8];
      
      
      var $18 = HEAP[$15] - 1;
      var $19 = $15;
      HEAP[$19] = $18;
      
      
      
      if (HEAP[$15] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $29 = HEAP[HEAP[HEAP[$self_addr + 8] + 4] + 24];
      
      
      var $32 = HEAP[$self_addr + 8];
      FUNCTION_TABLE[$29]($32);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $39 = HEAP[$self_addr + 12];
      
      
      var $42 = HEAP[$39] - 1;
      var $43 = $39;
      HEAP[$43] = $42;
      
      
      
      if (HEAP[$39] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $53 = HEAP[HEAP[HEAP[$self_addr + 12] + 4] + 24];
      
      
      var $56 = HEAP[$self_addr + 12];
      FUNCTION_TABLE[$53]($56);
      __label__ = 8;
      break;
     case 8:
      
      
      _PyObject_Free($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _profiler_get_closed($self, $closure) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $closure_addr;
      var $retval;
      var $0;
      var $iftmp_67;
      var $result;
      $self_addr = $self;
      $closure_addr = $closure;
      
      
      
      
      if (HEAP[$self_addr + 10260] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $iftmp_67 = __Py_TrueStruct;
      __label__ = 3;
      break;
     case 2:
      $iftmp_67 = __Py_ZeroStruct;
      __label__ = 3;
      break;
     case 3:
      
      $result = $iftmp_67;
      
      
      
      var $9 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $9;
      
      $0 = $result;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _logreader_get_closed($self, $closure) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $closure_addr;
      var $retval;
      var $0;
      var $iftmp_68;
      var $result;
      $self_addr = $self;
      $closure_addr = $closure;
      
      
      
      
      if (HEAP[$self_addr + 12] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $iftmp_68 = __Py_TrueStruct;
      __label__ = 3;
      break;
     case 2:
      $iftmp_68 = __Py_ZeroStruct;
      __label__ = 3;
      break;
     case 3:
      
      $result = $iftmp_68;
      
      
      
      var $9 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $9;
      
      $0 = $result;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _hotshot_logreader($unused, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $unused_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $self;
      var $filename = __stackBase__;
      var $c;
      var $err;
      $unused_addr = $unused;
      $args_addr = $args;
      $self = 0;
      $err = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str32, allocate([ $filename, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 1:
      var $4 = __PyObject_New(_LogReaderType);
      
      $self = $4;
      
      
      if ($self != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 2:
      
      
      HEAP[$self + 20] = 1;
      
      
      HEAP[$self + 16] = 0;
      
      
      HEAP[$self + 8] = 0;
      var $14 = HEAP[$filename];
      var $15 = ___01fopen64_($14, __str33);
      
      
      HEAP[$self + 12] = $15;
      
      
      
      
      if (HEAP[$self + 12] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $22 = HEAP[$filename];
      var $23 = HEAP[_PyExc_IOError];
      var $24 = _PyErr_SetFromErrnoWithFilename($23, $22);
      __label__ = 14;
      break;
     case 4:
      var $25 = _PyDict_New();
      
      
      HEAP[$self + 8] = $25;
      
      
      
      
      if (HEAP[$self + 8] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      var $34 = HEAP[$self + 12];
      var $35 = _fgetc($34);
      $c = $35;
      var $36 = $35 == -1;
      if ($36) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      _eof_error($self);
      __label__ = 14;
      break;
     case 7:
      
      
      var $40 = $self;
      if ($c != 19) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $42 = HEAP[$40 + 12];
      
      var $44 = _ungetc($c, $42);
      __label__ = 13;
      break;
     case 9:
      var $45 = _unpack_add_info($40);
      $err = $45;
      
      
      if ($err != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 10:
      
      var $49 = $err == -1;
      if ($49) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      _eof_error($self);
      __label__ = 14;
      break;
     case 12:
      var $51 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($51, __str34);
      __label__ = 14;
      break;
     case 13:
      
      
      $0 = $self;
      __label__ = 17;
      break;
     case 14:
      
      
      
      
      var $58 = HEAP[$self] - 1;
      
      HEAP[$self] = $58;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      var $68 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$68]($self);
      __label__ = 16;
      break;
     case 16:
      $0 = 0;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval18 = $retval;
      STACKTOP = __stackBase__;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _get_version_string() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval;
      var $0;
      var $rev;
      var $buffer;
      var $i;
      $rev = __str35;
      $i = 0;
      __label__ = 2;
      break;
     case 1:
      
      var $2 = $rev + 1;
      $rev = $2;
      __label__ = 2;
      break;
     case 2:
      
      
      
      if (HEAP[$rev] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $6 = ___ctype_b_loc();
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$6] + 2 * HEAP[$rev]] & 2048) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $17 = $i + 1;
      $i = $17;
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      
      if (HEAP[$rev + $i] == 32) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      if (HEAP[$rev + $i] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      var $30 = _malloc($i + 1);
      $buffer = $30;
      
      if ($30 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      _llvm_memmove_p0i8_p0i8_i32($buffer, $rev, $i, 1, 0);
      
      
      
      HEAP[$buffer + $i] = 0;
      __label__ = 9;
      break;
     case 9:
      
      $0 = $buffer;
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _write_header($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4096;
    _memset(__stackBase__, 0, 4096);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $iftmp_79;
      var $iftmp_78;
      var $iftmp_77;
      var $0;
      var $buffer;
      var $cwdbuffer = __stackBase__;
      var $temp;
      var $i;
      var $len;
      var $item;
      $self_addr = $self;
      var $1 = _get_version_string();
      $buffer = $1;
      
      
      if ($buffer == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = _PyErr_NoMemory();
      $0 = -1;
      __label__ = 23;
      break;
     case 2:
      
      
      var $7 = _pack_add_info($self_addr, __str36, $buffer);
      
      
      
      
      if (HEAP[$self_addr + 10272] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_77 = __str37;
      __label__ = 5;
      break;
     case 4:
      $iftmp_77 = __str38;
      __label__ = 5;
      break;
     case 5:
      
      
      var $14 = _pack_add_info($self_addr, __str39, $iftmp_77);
      
      
      
      
      if (HEAP[$self_addr + 10264] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $iftmp_78 = __str37;
      __label__ = 8;
      break;
     case 7:
      $iftmp_78 = __str38;
      __label__ = 8;
      break;
     case 8:
      
      
      var $21 = _pack_add_info($self_addr, __str40, $iftmp_78);
      
      
      
      
      if (HEAP[$self_addr + 10268] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $iftmp_79 = __str37;
      __label__ = 11;
      break;
     case 10:
      $iftmp_79 = __str38;
      __label__ = 11;
      break;
     case 11:
      
      
      var $28 = _pack_add_info($self_addr, __str41, $iftmp_79);
      var $29 = _Py_GetPlatform();
      
      var $31 = _pack_add_info($self_addr, __str42, $29);
      var $32 = _Py_GetProgramFullPath();
      
      var $34 = _pack_add_info($self_addr, __str43, $32);
      
      _free($buffer);
      var $36 = _Py_GetVersion();
      $buffer = $36;
      
      if ($36 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      _PyErr_Clear();
      __label__ = 14;
      break;
     case 13:
      
      
      var $40 = _pack_add_info($self_addr, __str44, $buffer);
      __label__ = 14;
      break;
     case 14:
      var $41 = HEAP[_rusage_diff];
      var $cwdbuffer14 = $cwdbuffer;
      var $42 = _PyOS_snprintf($cwdbuffer14, 4096, __str45, allocate([ $41, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      
      var $cwdbuffer15 = $cwdbuffer;
      var $44 = _pack_add_info($self_addr, __str46, $cwdbuffer15);
      var $45 = HEAP[_timeofday_diff];
      var $cwdbuffer16 = $cwdbuffer;
      var $46 = _PyOS_snprintf($cwdbuffer16, 4096, __str45, allocate([ $45, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      
      var $cwdbuffer17 = $cwdbuffer;
      var $48 = _pack_add_info($self_addr, __str47, $cwdbuffer17);
      var $cwdbuffer18 = $cwdbuffer;
      var $49 = _getcwd($cwdbuffer18, 4096);
      
      var $51 = _pack_add_info($self_addr, __str48, $49);
      var $52 = _PySys_GetObject(__str49);
      $temp = $52;
      
      if ($52 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$temp + 4] + 84] & 33554432) == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $61 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($61, __str50);
      $0 = -1;
      __label__ = 23;
      break;
     case 17:
      
      
      
      
      $len = HEAP[$temp + 8];
      $i = 0;
      
      
      
      if ($i < $len) {
        __label__ = 18;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      $item = HEAP[HEAP[$temp + 12] + 4 * $i];
      
      var $77 = _PyString_AsString($item);
      $buffer = $77;
      
      var $79 = $self_addr;
      if ($77 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $80 = _pack_add_info($79, __str51, __str52);
      _PyErr_Clear();
      __label__ = 21;
      break;
     case 20:
      
      var $82 = _pack_add_info($79, __str51, $buffer);
      __label__ = 21;
      break;
     case 21:
      
      var $84 = $i + 1;
      $i = $84;
      
      
      
      if ($i < $len) {
        __label__ = 18;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      _pack_frame_times($self_addr);
      
      _pack_line_times($self_addr);
      $0 = 0;
      __label__ = 23;
      break;
     case 23:
      
      $retval = $0;
      var $retval29 = $retval;
      STACKTOP = __stackBase__;
      return $retval29;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _hotshot_profiler($unused, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $unused_addr;
      var $args_addr;
      var $retval;
      var $iftmp_86;
      var $0;
      var $logfilename = __stackBase__;
      var $self;
      var $lineevents = __stackBase__ + 4;
      var $linetimings = __stackBase__ + 8;
      $unused_addr = $unused;
      $args_addr = $args;
      $self = 0;
      HEAP[$lineevents] = 0;
      HEAP[$linetimings] = 1;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str53, allocate([ $logfilename, 0, 0, 0, $lineevents, 0, 0, 0, $linetimings, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 1:
      var $4 = __PyObject_New(_ProfilerType);
      
      $self = $4;
      
      
      if ($self == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 22;
      break;
     case 3:
      
      
      HEAP[$self + 10272] = 1;
      
      
      var $12 = HEAP[$lineevents] != 0;
      
      
      HEAP[$self + 10264] = $12;
      
      
      if (HEAP[$lineevents] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if (HEAP[$linetimings] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      $iftmp_86 = 1;
      __label__ = 7;
      break;
     case 6:
      $iftmp_86 = 0;
      __label__ = 7;
      break;
     case 7:
      
      
      
      HEAP[$self + 10268] = $iftmp_86;
      
      
      HEAP[$self + 16] = 0;
      
      
      HEAP[$self + 10276] = 0;
      
      
      HEAP[$self + 10280] = 0;
      
      
      HEAP[$self + 10260] = 0;
      
      
      
      
      var $34 = HEAP[$args_addr + 12];
      
      
      HEAP[$self + 12] = $34;
      
      
      
      
      
      var $42 = HEAP[HEAP[$self + 12]] + 1;
      var $43 = HEAP[$self + 12];
      HEAP[$43] = $42;
      var $44 = _PyDict_New();
      
      
      HEAP[$self + 8] = $44;
      
      
      
      
      if (HEAP[$self + 8] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      
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
      __label__ = 22;
      break;
     case 11:
      var $68 = HEAP[$logfilename];
      var $69 = ___01fopen64_($68, __str54);
      
      
      HEAP[$self + 10260] = $69;
      
      
      
      
      if (HEAP[$self + 10260] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      
      
      
      var $80 = HEAP[$self] - 1;
      
      HEAP[$self] = $80;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      var $90 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$90]($self);
      __label__ = 14;
      break;
     case 14:
      var $93 = HEAP[$logfilename];
      var $94 = HEAP[_PyExc_IOError];
      var $95 = _PyErr_SetFromErrnoWithFilename($94, $93);
      $0 = 0;
      __label__ = 22;
      break;
     case 15:
      
      
      if (HEAP[_timeofday_diff] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      _calibrate();
      _calibrate();
      _calibrate();
      __label__ = 17;
      break;
     case 17:
      
      var $99 = _write_header($self);
      
      if ($99 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      
      
      
      
      var $105 = HEAP[$self] - 1;
      
      HEAP[$self] = $105;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      var $115 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$115]($self);
      __label__ = 20;
      break;
     case 20:
      $self = 0;
      __label__ = 21;
      break;
     case 21:
      
      
      $0 = $self;
      __label__ = 22;
      break;
     case 22:
      
      $retval = $0;
      var $retval22 = $retval;
      STACKTOP = __stackBase__;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _hotshot_coverage($unused, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $unused_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $logfilename = __stackBase__;
      var $result;
      var $self;
      $unused_addr = $unused;
      $args_addr = $args;
      $result = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str55, allocate([ $logfilename, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $6 = _hotshot_profiler($unused_addr, $args_addr);
      $result = $6;
      
      
      if ($result != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      $self = $result;
      
      
      HEAP[$self + 10272] = 0;
      
      
      HEAP[$self + 10268] = 0;
      
      
      HEAP[$self + 10264] = 1;
      __label__ = 3;
      break;
     case 3:
      
      $0 = $result;
      
      $retval = $0;
      var $retval3 = $retval;
      STACKTOP = __stackBase__;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _hotshot_resolution($self, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $unused_addr = $unused;
      
      
      if (HEAP[_timeofday_diff] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      _calibrate();
      _calibrate();
      _calibrate();
      __label__ = 2;
      break;
     case 2:
      var $3 = HEAP[_rusage_diff];
      var $4 = HEAP[_timeofday_diff];
      var $5 = _Py_BuildValue(__str56, allocate([ $4, 0, 0, 0, $3, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = $5;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _init_hotshot() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $module;
      var $s;
      HEAP[_LogReaderType + 4] = _PyType_Type;
      HEAP[_ProfilerType + 4] = _PyType_Type;
      var $0 = _Py_InitModule4(__str61, _functions, 0, 0, 1013);
      $module = $0;
      
      
      if ($module != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      var $3 = _get_version_string();
      $s = $3;
      
      
      var $6 = _PyModule_AddStringConstant($module, __str62, $s);
      
      _free($s);
      
      var $9 = HEAP[_LogReaderType] + 1;
      HEAP[_LogReaderType] = $9;
      
      var $11 = _PyModule_AddObject($module, __str63, _LogReaderType);
      
      var $13 = HEAP[_ProfilerType] + 1;
      HEAP[_ProfilerType] = $13;
      
      var $15 = _PyModule_AddObject($module, __str64, _ProfilerType);
      
      
      if (HEAP[_ProfilerError] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $18 = _PyErr_NewException(__str65, 0, 0);
      HEAP[_ProfilerError] = $18;
      
      if ($18 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $23 = HEAP[HEAP[_ProfilerError]] + 1;
      var $24 = HEAP[_ProfilerError];
      HEAP[$24] = $23;
      var $25 = HEAP[_ProfilerError];
      
      var $27 = _PyModule_AddObject($module, __str66, $25);
      __label__ = 4;
      break;
     case 4:
      
      var $29 = _PyModule_AddIntConstant($module, __str67, 0);
      
      var $31 = _PyModule_AddIntConstant($module, __str68, 1);
      
      var $33 = _PyModule_AddIntConstant($module, __str69, 2);
      
      var $35 = _PyModule_AddIntConstant($module, __str70, 3);
      
      var $37 = _PyModule_AddIntConstant($module, __str71, 19);
      
      var $39 = _PyModule_AddIntConstant($module, __str72, 35);
      
      var $41 = _PyModule_AddIntConstant($module, __str73, 67);
      
      var $43 = _PyModule_AddIntConstant($module, __str74, 51);
      __label__ = 5;
      break;
     case 5:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_hotshot"] = _init_hotshot;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _tracer_callback, 0, _profiler_addinfo, 0, _profiler_close, 0, _profiler_fileno, 0, _profiler_runcall, 0, _profiler_runcode, 0, _profiler_start, 0, _profiler_stop, 0, _profiler_get_closed, 0, _profiler_dealloc, 0, _PyObject_GenericGetAttr, 0, _logreader_close, 0, _logreader_fileno, 0, _logreader_sq_item, 0, _logreader_get_closed, 0, _logreader_dealloc, 0, _PyObject_SelfIter, 0, _logreader_tp_iternext, 0, _hotshot_coverage, 0, _hotshot_profiler, 0, _hotshot_logreader, 0, _hotshot_resolution, 0 ]);
  function run(args) {
    _ProfilerError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _logreader_close__doc__ = allocate([ 99, 108, 111, 115, 101, 40, 41, 10, 67, 108, 111, 115, 101, 32, 116, 104, 101, 32, 108, 111, 103, 32, 102, 105, 108, 101, 44, 32, 112, 114, 101, 118, 101, 110, 116, 105, 110, 103, 32, 97, 100, 100, 105, 116, 105, 111, 110, 97, 108, 32, 114, 101, 99, 111, 114, 100, 115, 32, 102, 114, 111, 109, 32, 98, 101, 105, 110, 103, 32, 114, 101, 97, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _logreader_fileno__doc__ = allocate([ 102, 105, 108, 101, 110, 111, 40, 41, 32, 45, 62, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 10, 82, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 32, 102, 111, 114, 32, 116, 104, 101, 32, 108, 111, 103, 32, 102, 105, 108, 101, 44, 32, 105, 102, 32, 111, 112, 101, 110, 46, 10, 82, 97, 105, 115, 101, 115, 32, 86, 97, 108, 117, 101, 69, 114, 114, 111, 114, 32, 105, 102, 32, 116, 104, 101, 32, 108, 111, 103, 32, 102, 105, 108, 101, 32, 105, 115, 32, 99, 108, 111, 115, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 108, 111, 103, 114, 101, 97, 100, 101, 114, 39, 115, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 32, 97, 108, 114, 101, 97, 100, 121, 32, 99, 108, 111, 115, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 101, 110, 100, 32, 111, 102, 32, 102, 105, 108, 101, 32, 119, 105, 116, 104, 32, 105, 110, 99, 111, 109, 112, 108, 101, 116, 101, 32, 112, 114, 111, 102, 105, 108, 101, 32, 114, 101, 99, 111, 114, 100, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 99, 97, 110, 110, 111, 116, 32, 105, 116, 101, 114, 97, 116, 101, 32, 111, 118, 101, 114, 32, 99, 108, 111, 115, 101, 100, 32, 76, 111, 103, 82, 101, 97, 100, 101, 114, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 117, 110, 107, 110, 111, 119, 110, 32, 114, 101, 99, 111, 114, 100, 32, 116, 121, 112, 101, 32, 105, 110, 32, 108, 111, 103, 32, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 110, 111, 32, 109, 111, 114, 101, 32, 101, 118, 101, 110, 116, 115, 32, 105, 110, 32, 108, 111, 103, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 108, 101, 110, 32, 60, 32, 50, 49, 52, 55, 52, 56, 51, 54, 52, 55, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 95, 104, 111, 116, 115, 104, 111, 116, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8917 = allocate([ 112, 97, 99, 107, 95, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 105, 78, 0 ], "i8", ALLOC_NORMAL);
    _maxvalues_8890 = allocate([ -1, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 7, 0, 0, 0, 15, 0, 0, 0, 31, 0, 0, 0, 63, 0, 0, 0, 127, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    _timeofday_diff = allocate(1, "i32", ALLOC_NORMAL);
    _rusage_diff = allocate(1, "i32", ALLOC_NORMAL);
    __str8 = allocate([ 112, 114, 111, 102, 105, 108, 101, 114, 32, 97, 108, 114, 101, 97, 100, 121, 32, 97, 99, 116, 105, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 112, 114, 111, 102, 105, 108, 101, 114, 32, 97, 108, 114, 101, 97, 100, 121, 32, 99, 108, 111, 115, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    _addinfo__doc__ = allocate([ 97, 100, 100, 105, 110, 102, 111, 40, 107, 101, 121, 44, 32, 118, 97, 108, 117, 101, 41, 10, 73, 110, 115, 101, 114, 116, 32, 97, 110, 32, 65, 68, 68, 95, 73, 78, 70, 79, 32, 114, 101, 99, 111, 114, 100, 32, 105, 110, 116, 111, 32, 116, 104, 101, 32, 108, 111, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 115, 115, 58, 97, 100, 100, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    _close__doc__ = allocate([ 99, 108, 111, 115, 101, 40, 41, 10, 83, 104, 117, 116, 32, 100, 111, 119, 110, 32, 116, 104, 105, 115, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 97, 110, 100, 32, 99, 108, 111, 115, 101, 32, 116, 104, 101, 32, 108, 111, 103, 32, 102, 105, 108, 101, 115, 44, 32, 101, 118, 101, 110, 32, 105, 102, 32, 105, 116, 115, 32, 97, 99, 116, 105, 118, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 112, 114, 111, 102, 105, 108, 101, 114, 39, 115, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 32, 97, 108, 114, 101, 97, 100, 121, 32, 99, 108, 111, 115, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    _runcall__doc__ = allocate([ 114, 117, 110, 99, 97, 108, 108, 40, 99, 97, 108, 108, 97, 98, 108, 101, 91, 44, 32, 97, 114, 103, 115, 91, 44, 32, 107, 119, 93, 93, 41, 32, 45, 62, 32, 99, 97, 108, 108, 97, 98, 108, 101, 40, 41, 10, 80, 114, 111, 102, 105, 108, 101, 32, 97, 32, 115, 112, 101, 99, 105, 102, 105, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 99, 97, 108, 108, 44, 32, 114, 101, 116, 117, 114, 110, 105, 110, 103, 32, 116, 104, 101, 32, 114, 101, 115, 117, 108, 116, 32, 111, 102, 32, 116, 104, 97, 116, 32, 99, 97, 108, 108, 46, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 114, 117, 110, 99, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    _runcode__doc__ = allocate([ 114, 117, 110, 99, 111, 100, 101, 40, 99, 111, 100, 101, 44, 32, 103, 108, 111, 98, 97, 108, 115, 91, 44, 32, 108, 111, 99, 97, 108, 115, 93, 41, 10, 69, 120, 101, 99, 117, 116, 101, 32, 97, 32, 99, 111, 100, 101, 32, 111, 98, 106, 101, 99, 116, 32, 119, 104, 105, 108, 101, 32, 99, 111, 108, 108, 101, 99, 116, 105, 110, 103, 32, 112, 114, 111, 102, 105, 108, 101, 32, 100, 97, 116, 97, 46, 32, 32, 73, 102, 32, 108, 111, 99, 97, 108, 115, 32, 105, 115, 10, 111, 109, 105, 116, 116, 101, 100, 44, 32, 103, 108, 111, 98, 97, 108, 115, 32, 105, 115, 32, 117, 115, 101, 100, 32, 102, 111, 114, 32, 116, 104, 101, 32, 108, 111, 99, 97, 108, 115, 32, 97, 115, 32, 119, 101, 108, 108, 46, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 79, 33, 79, 33, 124, 79, 58, 114, 117, 110, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 108, 111, 99, 97, 108, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 32, 111, 114, 32, 78, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    _start__doc__ = allocate([ 115, 116, 97, 114, 116, 40, 41, 10, 73, 110, 115, 116, 97, 108, 108, 32, 116, 104, 105, 115, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 102, 111, 114, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 104, 114, 101, 97, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _stop__doc__ = allocate([ 115, 116, 111, 112, 40, 41, 10, 82, 101, 109, 111, 118, 101, 32, 116, 104, 105, 115, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 104, 114, 101, 97, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 112, 114, 111, 102, 105, 108, 101, 114, 32, 110, 111, 116, 32, 97, 99, 116, 105, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 97, 100, 100, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 99, 108, 111, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 102, 105, 108, 101, 110, 111, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 114, 117, 110, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 115, 116, 97, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 115, 116, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    _profiler_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str22 = allocate([ 102, 114, 97, 109, 101, 116, 105, 109, 105, 110, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 108, 105, 110, 101, 101, 118, 101, 110, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 108, 105, 110, 101, 116, 105, 109, 105, 110, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    _profiler_members = allocate([ 0, 0, 0, 0, 2, 0, 0, 0, 10268, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 10264, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 10268, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str25 = allocate([ 99, 108, 111, 115, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 84, 114, 117, 101, 32, 105, 102, 32, 116, 104, 101, 32, 112, 114, 111, 102, 105, 108, 101, 114, 39, 115, 32, 111, 117, 116, 112, 117, 116, 32, 102, 105, 108, 101, 32, 104, 97, 115, 32, 97, 108, 114, 101, 97, 100, 121, 32, 98, 101, 101, 110, 32, 99, 108, 111, 115, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _profiler_getsets = allocate(40, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _profiler_object__doc__ = allocate([ 72, 105, 103, 104, 45, 112, 101, 114, 102, 111, 114, 109, 97, 110, 99, 101, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 111, 98, 106, 101, 99, 116, 46, 10, 10, 77, 101, 116, 104, 111, 100, 115, 58, 10, 10, 99, 108, 111, 115, 101, 40, 41, 58, 32, 32, 32, 32, 32, 32, 83, 116, 111, 112, 32, 116, 104, 101, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 97, 110, 100, 32, 99, 108, 111, 115, 101, 32, 116, 104, 101, 32, 108, 111, 103, 32, 102, 105, 108, 101, 115, 46, 10, 102, 105, 108, 101, 110, 111, 40, 41, 58, 32, 32, 32, 32, 32, 82, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 32, 111, 102, 32, 116, 104, 101, 32, 108, 111, 103, 32, 102, 105, 108, 101, 46, 10, 114, 117, 110, 99, 97, 108, 108, 40, 41, 58, 32, 32, 32, 32, 82, 117, 110, 32, 97, 32, 115, 105, 110, 103, 108, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 99, 97, 108, 108, 32, 119, 105, 116, 104, 32, 112, 114, 111, 102, 105, 108, 105, 110, 103, 32, 101, 110, 97, 98, 108, 101, 100, 46, 10, 114, 117, 110, 99, 111, 100, 101, 40, 41, 58, 32, 32, 32, 32, 69, 120, 101, 99, 117, 116, 101, 32, 97, 32, 99, 111, 100, 101, 32, 111, 98, 106, 101, 99, 116, 32, 119, 105, 116, 104, 32, 112, 114, 111, 102, 105, 108, 105, 110, 103, 32, 101, 110, 97, 98, 108, 101, 100, 46, 10, 115, 116, 97, 114, 116, 40, 41, 58, 32, 32, 32, 32, 32, 32, 73, 110, 115, 116, 97, 108, 108, 32, 116, 104, 101, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 46, 10, 115, 116, 111, 112, 40, 41, 58, 32, 32, 32, 32, 32, 32, 32, 82, 101, 109, 111, 118, 101, 32, 116, 104, 101, 32, 112, 114, 111, 102, 105, 108, 101, 114, 46, 10, 10, 65, 116, 116, 114, 105, 98, 117, 116, 101, 115, 32, 40, 114, 101, 97, 100, 45, 111, 110, 108, 121, 41, 58, 10, 10, 99, 108, 111, 115, 101, 100, 58, 32, 32, 32, 32, 32, 32, 32, 84, 114, 117, 101, 32, 105, 102, 32, 116, 104, 101, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 104, 97, 115, 32, 97, 108, 114, 101, 97, 100, 121, 32, 98, 101, 101, 110, 32, 99, 108, 111, 115, 101, 100, 46, 10, 102, 114, 97, 109, 101, 116, 105, 109, 105, 110, 103, 115, 58, 32, 84, 114, 117, 101, 32, 105, 102, 32, 69, 78, 84, 69, 82, 47, 69, 88, 73, 84, 32, 101, 118, 101, 110, 116, 115, 32, 99, 111, 108, 108, 101, 99, 116, 32, 116, 105, 109, 105, 110, 103, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 46, 10, 108, 105, 110, 101, 101, 118, 101, 110, 116, 115, 58, 32, 32, 32, 84, 114, 117, 101, 32, 105, 102, 32, 108, 105, 110, 101, 32, 101, 118, 101, 110, 116, 115, 32, 97, 114, 101, 32, 114, 101, 112, 111, 114, 116, 101, 100, 32, 116, 111, 32, 116, 104, 101, 32, 112, 114, 111, 102, 105, 108, 101, 114, 46, 10, 108, 105, 110, 101, 116, 105, 109, 105, 110, 103, 115, 58, 32, 32, 84, 114, 117, 101, 32, 105, 102, 32, 108, 105, 110, 101, 32, 101, 118, 101, 110, 116, 115, 32, 99, 111, 108, 108, 101, 99, 116, 32, 116, 105, 109, 105, 110, 103, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 95, 104, 111, 116, 115, 104, 111, 116, 46, 80, 114, 111, 102, 105, 108, 101, 114, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    _ProfilerType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _logreader_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str28 = allocate([ 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 68, 105, 99, 116, 105, 111, 110, 97, 114, 121, 32, 109, 97, 112, 112, 105, 110, 103, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 97, 108, 32, 107, 101, 121, 115, 32, 116, 111, 32, 108, 105, 115, 116, 115, 32, 111, 102, 32, 118, 97, 108, 117, 101, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _logreader_members = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _logreader__doc__ = allocate([ 108, 111, 103, 114, 101, 97, 100, 101, 114, 40, 102, 105, 108, 101, 110, 97, 109, 101, 41, 32, 45, 45, 62, 32, 108, 111, 103, 45, 105, 116, 101, 114, 97, 116, 111, 114, 10, 67, 114, 101, 97, 116, 101, 32, 97, 32, 108, 111, 103, 45, 114, 101, 97, 100, 101, 114, 32, 102, 111, 114, 32, 116, 104, 101, 32, 116, 105, 109, 105, 110, 103, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 32, 102, 105, 108, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _logreader_as_sequence = allocate(40, [ "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32, i32)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, i32, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0 ], ALLOC_NORMAL);
    __str30 = allocate([ 84, 114, 117, 101, 32, 105, 102, 32, 116, 104, 101, 32, 108, 111, 103, 114, 101, 97, 100, 101, 114, 39, 115, 32, 105, 110, 112, 117, 116, 32, 102, 105, 108, 101, 32, 104, 97, 115, 32, 97, 108, 114, 101, 97, 100, 121, 32, 98, 101, 101, 110, 32, 99, 108, 111, 115, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _logreader_getsets = allocate(40, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str31 = allocate([ 95, 104, 111, 116, 115, 104, 111, 116, 46, 76, 111, 103, 82, 101, 97, 100, 101, 114, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    _LogReaderType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str32 = allocate([ 115, 58, 108, 111, 103, 114, 101, 97, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 114, 98, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 36, 82, 101, 118, 105, 115, 105, 111, 110, 36, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 104, 111, 116, 115, 104, 111, 116, 45, 118, 101, 114, 115, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 121, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 110, 111, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 114, 101, 113, 117, 101, 115, 116, 101, 100, 45, 102, 114, 97, 109, 101, 45, 116, 105, 109, 105, 110, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 114, 101, 113, 117, 101, 115, 116, 101, 100, 45, 108, 105, 110, 101, 45, 101, 118, 101, 110, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 114, 101, 113, 117, 101, 115, 116, 101, 100, 45, 108, 105, 110, 101, 45, 116, 105, 109, 105, 110, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 112, 108, 97, 116, 102, 111, 114, 109, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 101, 120, 101, 99, 117, 116, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 101, 120, 101, 99, 117, 116, 97, 98, 108, 101, 45, 118, 101, 114, 115, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 37, 108, 117, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 111, 98, 115, 101, 114, 118, 101, 100, 45, 105, 110, 116, 101, 114, 118, 97, 108, 45, 103, 101, 116, 114, 117, 115, 97, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 111, 98, 115, 101, 114, 118, 101, 100, 45, 105, 110, 116, 101, 114, 118, 97, 108, 45, 103, 101, 116, 116, 105, 109, 101, 111, 102, 100, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 99, 117, 114, 114, 101, 110, 116, 45, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 112, 97, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 115, 121, 115, 46, 112, 97, 116, 104, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 115, 121, 115, 45, 112, 97, 116, 104, 45, 101, 110, 116, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 60, 110, 111, 110, 45, 115, 116, 114, 105, 110, 103, 45, 112, 97, 116, 104, 45, 101, 110, 116, 114, 121, 62, 0 ], "i8", ALLOC_NORMAL);
    _profiler__doc__ = allocate([ 112, 114, 111, 102, 105, 108, 101, 114, 40, 108, 111, 103, 102, 105, 108, 101, 110, 97, 109, 101, 91, 44, 32, 108, 105, 110, 101, 101, 118, 101, 110, 116, 115, 91, 44, 32, 108, 105, 110, 101, 116, 105, 109, 101, 115, 93, 93, 41, 32, 45, 62, 32, 112, 114, 111, 102, 105, 108, 101, 114, 10, 67, 114, 101, 97, 116, 101, 32, 97, 32, 110, 101, 119, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 111, 98, 106, 101, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 115, 124, 105, 105, 58, 112, 114, 111, 102, 105, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 119, 98, 0 ], "i8", ALLOC_NORMAL);
    _coverage__doc__ = allocate([ 99, 111, 118, 101, 114, 97, 103, 101, 40, 108, 111, 103, 102, 105, 108, 101, 110, 97, 109, 101, 41, 32, 45, 62, 32, 112, 114, 111, 102, 105, 108, 101, 114, 10, 82, 101, 116, 117, 114, 110, 115, 32, 97, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 116, 104, 97, 116, 32, 100, 111, 101, 115, 110, 39, 116, 32, 99, 111, 108, 108, 101, 99, 116, 32, 97, 110, 121, 32, 116, 105, 109, 105, 110, 103, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 44, 32, 119, 104, 105, 99, 104, 32, 105, 115, 10, 117, 115, 101, 102, 117, 108, 32, 105, 110, 32, 98, 117, 105, 108, 100, 105, 110, 103, 32, 97, 32, 99, 111, 118, 101, 114, 97, 103, 101, 32, 97, 110, 97, 108, 121, 115, 105, 115, 32, 116, 111, 111, 108, 46, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 115, 58, 99, 111, 118, 101, 114, 97, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    _resolution__doc__ = allocate([ 114, 101, 115, 111, 108, 117, 116, 105, 111, 110, 40, 41, 32, 45, 62, 32, 40, 103, 101, 116, 116, 105, 109, 101, 111, 102, 100, 97, 121, 45, 117, 115, 101, 99, 115, 44, 32, 103, 101, 116, 114, 117, 115, 97, 103, 101, 45, 117, 115, 101, 99, 115, 41, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 114, 101, 115, 111, 108, 117, 116, 105, 111, 110, 32, 111, 102, 32, 116, 104, 101, 32, 116, 105, 109, 101, 114, 115, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 103, 101, 116, 116, 105, 109, 101, 111, 102, 100, 97, 121, 40, 41, 32, 97, 110, 100, 10, 103, 101, 116, 114, 117, 115, 97, 103, 101, 40, 41, 32, 115, 121, 115, 116, 101, 109, 32, 99, 97, 108, 108, 115, 44, 32, 111, 114, 32, 45, 49, 32, 105, 102, 32, 116, 104, 101, 32, 99, 97, 108, 108, 32, 105, 115, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 99, 111, 118, 101, 114, 97, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 112, 114, 111, 102, 105, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 108, 111, 103, 114, 101, 97, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 114, 101, 115, 111, 108, 117, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    _functions = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str61 = allocate([ 95, 104, 111, 116, 115, 104, 111, 116, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 95, 95, 118, 101, 114, 115, 105, 111, 110, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 76, 111, 103, 82, 101, 97, 100, 101, 114, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 80, 114, 111, 102, 105, 108, 101, 114, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 104, 111, 116, 115, 104, 111, 116, 46, 80, 114, 111, 102, 105, 108, 101, 114, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 80, 114, 111, 102, 105, 108, 101, 114, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 87, 72, 65, 84, 95, 69, 78, 84, 69, 82, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 87, 72, 65, 84, 95, 69, 88, 73, 84, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 87, 72, 65, 84, 95, 76, 73, 78, 69, 78, 79, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 87, 72, 65, 84, 95, 79, 84, 72, 69, 82, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 87, 72, 65, 84, 95, 65, 68, 68, 95, 73, 78, 70, 79, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 87, 72, 65, 84, 95, 68, 69, 70, 73, 78, 69, 95, 70, 73, 76, 69, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 87, 72, 65, 84, 95, 68, 69, 70, 73, 78, 69, 95, 70, 85, 78, 67, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 87, 72, 65, 84, 95, 76, 73, 78, 69, 95, 84, 73, 77, 69, 83, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_profiler_methods] = __str16;
    HEAP[_profiler_methods + 4] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_profiler_methods + 12] = _addinfo__doc__;
    HEAP[_profiler_methods + 16] = __str17;
    HEAP[_profiler_methods + 20] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_profiler_methods + 28] = _close__doc__;
    HEAP[_profiler_methods + 32] = __str18;
    HEAP[_profiler_methods + 36] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_profiler_methods + 44] = _logreader_fileno__doc__;
    HEAP[_profiler_methods + 48] = __str12;
    HEAP[_profiler_methods + 52] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_profiler_methods + 60] = _runcall__doc__;
    HEAP[_profiler_methods + 64] = __str19;
    HEAP[_profiler_methods + 68] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_profiler_methods + 76] = _runcode__doc__;
    HEAP[_profiler_methods + 80] = __str20;
    HEAP[_profiler_methods + 84] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_profiler_methods + 92] = _start__doc__;
    HEAP[_profiler_methods + 96] = __str21;
    HEAP[_profiler_methods + 100] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_profiler_methods + 108] = _stop__doc__;
    HEAP[_profiler_members] = __str22;
    HEAP[_profiler_members + 20] = __str23;
    HEAP[_profiler_members + 40] = __str24;
    HEAP[_profiler_getsets] = __str25;
    HEAP[_profiler_getsets + 4] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_profiler_getsets + 12] = __str26;
    HEAP[_ProfilerType + 12] = __str27;
    HEAP[_ProfilerType + 24] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_ProfilerType + 72] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_ProfilerType + 88] = _profiler_object__doc__;
    HEAP[_ProfilerType + 116] = _profiler_methods;
    HEAP[_ProfilerType + 120] = _profiler_members;
    HEAP[_ProfilerType + 124] = _profiler_getsets;
    HEAP[_logreader_methods] = __str17;
    HEAP[_logreader_methods + 4] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_logreader_methods + 12] = _logreader_close__doc__;
    HEAP[_logreader_methods + 16] = __str18;
    HEAP[_logreader_methods + 20] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_logreader_methods + 28] = _logreader_fileno__doc__;
    HEAP[_logreader_members] = __str28;
    HEAP[_logreader_members + 16] = __str29;
    HEAP[_logreader_as_sequence + 12] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_logreader_getsets] = __str25;
    HEAP[_logreader_getsets + 4] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_logreader_getsets + 12] = __str30;
    HEAP[_LogReaderType + 12] = __str31;
    HEAP[_LogReaderType + 24] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_LogReaderType + 52] = _logreader_as_sequence;
    HEAP[_LogReaderType + 72] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_LogReaderType + 88] = _logreader__doc__;
    HEAP[_LogReaderType + 108] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_LogReaderType + 112] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_LogReaderType + 116] = _logreader_methods;
    HEAP[_LogReaderType + 120] = _logreader_members;
    HEAP[_LogReaderType + 124] = _logreader_getsets;
    HEAP[_functions] = __str57;
    HEAP[_functions + 4] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_functions + 12] = _coverage__doc__;
    HEAP[_functions + 16] = __str58;
    HEAP[_functions + 20] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_functions + 28] = _profiler__doc__;
    HEAP[_functions + 32] = __str59;
    HEAP[_functions + 36] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_functions + 44] = _logreader__doc__;
    HEAP[_functions + 48] = __str60;
    HEAP[_functions + 52] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_functions + 60] = _resolution__doc__;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
