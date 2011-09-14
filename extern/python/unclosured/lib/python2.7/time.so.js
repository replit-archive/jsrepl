"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 80;
  var $1___SIZE = 8;
  var $2___SIZE = 192;
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
  var $struct_fd_set___SIZE = 128;
  var $struct_timeb___SIZE = 12;
  var $struct_timeb___FLATTENER = [ 0, 4, 6, 8 ];
  var $struct_timeval___SIZE = 8;
  var $struct_tm___SIZE = 44;
  var __str;
  var _time_doc;
  var _clock_doc;
  var __str1;
  var _sleep_doc;
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
  var __str18;
  var __str19;
  var _struct_time_type_fields;
  var _struct_time_type_desc;
  var __str20;
  var __str21;
  var _StructTimeType;
  var __str22;
  var _gmtime_doc;
  var __str23;
  var _localtime_doc;
  var __str24;
  var _moddict;
  var __str25;
  var __str26;
  var __str27;
  var __str28;
  var __str29;
  var __str30;
  var __str31;
  var __str32;
  var __str33;
  var __str34;
  var __str35;
  var _strftime_doc;
  var __str36;
  var __str37;
  var __str38;
  var _strptime_doc;
  var __str39;
  var __str40;
  var _asctime_doc;
  var __str41;
  var __str42;
  var _ctime_doc;
  var __str43;
  var _mktime_doc;
  var __str44;
  var _tzset_doc;
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
  var __str56;
  var __str57;
  var __str58;
  var _time_methods;
  var _module_doc;
  var __str59;
  var _initialized_b;
  var __str60;
  function __PyTime_DoubleToTimet($x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr;
      var $retval;
      var $0;
      var $result;
      var $diff;
      $x_addr = $x;
      
      
      $result = $x_addr | 0;
      
      
      
      
      $diff = $x_addr - $result;
      
      var $8 = $diff <= -1;
      
      
      
      if ($8 | $diff >= 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $11 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($11, __str);
      $result = -1;
      __label__ = 2;
      break;
     case 2:
      
      $0 = $result;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_time($self, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $0;
      var $secs;
      $self_addr = $self;
      $unused_addr = $unused;
      var $1 = _floattime();
      $secs = $1;
      
      
      if ($secs == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[_PyExc_IOError];
      var $5 = _PyErr_SetFromErrno($4);
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      
      var $7 = _PyFloat_FromDouble($secs);
      $0 = $7;
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
  function _time_clock($self, $unused) {
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $unused_addr = $unused;
    var $1 = _clock();
    
    var $3 = $1 / 1e6;
    var $4 = _PyFloat_FromDouble($3);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _time_sleep($self, $args) {
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
      var $secs = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str1, allocate([ $secs, 0, 0, 0 ], [ "double*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$secs];
      var $5 = _floatsleep($4);
      
      if ($5 != 0) {
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
      
      var $8 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $8;
      $0 = __Py_NoneStruct;
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
  function _tmtotuple($p) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $retval;
      var $0;
      var $v;
      $p_addr = $p;
      var $1 = _PyStructSequence_New(_StructTimeType);
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
      __label__ = 8;
      break;
     case 2:
      
      var $5 = $v;
      
      
      
      var $9 = HEAP[$p_addr + 20] + 1900;
      var $10 = _PyInt_FromLong($9);
      
      
      HEAP[$5 + 12] = $10;
      
      var $14 = $v;
      
      
      
      var $18 = HEAP[$p_addr + 16] + 1;
      var $19 = _PyInt_FromLong($18);
      
      
      HEAP[$14 + 12 + 4] = $19;
      
      var $23 = $v;
      
      
      var $26 = HEAP[$p_addr + 12];
      var $27 = _PyInt_FromLong($26);
      
      
      HEAP[$23 + 12 + 8] = $27;
      
      var $31 = $v;
      
      
      var $34 = HEAP[$p_addr + 8];
      var $35 = _PyInt_FromLong($34);
      
      
      HEAP[$31 + 12 + 12] = $35;
      
      var $39 = $v;
      
      
      var $42 = HEAP[$p_addr + 4];
      var $43 = _PyInt_FromLong($42);
      
      
      HEAP[$39 + 12 + 16] = $43;
      
      var $47 = $v;
      
      
      var $50 = HEAP[$p_addr];
      var $51 = _PyInt_FromLong($50);
      
      
      HEAP[$47 + 12 + 20] = $51;
      
      var $55 = $v;
      
      
      
      
      var $60 = (HEAP[$p_addr + 24] + 6) % 7;
      var $61 = _PyInt_FromLong($60);
      
      
      HEAP[$55 + 12 + 24] = $61;
      
      var $65 = $v;
      
      
      
      var $69 = HEAP[$p_addr + 28] + 1;
      var $70 = _PyInt_FromLong($69);
      
      
      HEAP[$65 + 12 + 28] = $70;
      
      var $74 = $v;
      
      
      var $77 = HEAP[$p_addr + 32];
      var $78 = _PyInt_FromLong($77);
      
      
      HEAP[$74 + 12 + 32] = $78;
      var $81 = _PyErr_Occurred();
      
      var $83 = $v;
      if ($81 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      if ($83 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      var $88 = HEAP[$v] - 1;
      
      
      HEAP[$v] = $88;
      
      
      
      
      if (HEAP[$v] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $99 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$99]($v);
      __label__ = 6;
      break;
     case 6:
      $0 = 0;
      __label__ = 8;
      break;
     case 7:
      $0 = $83;
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
  function _time_convert($when, $function) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $when_addr;
      var $function_addr;
      var $retval;
      var $0;
      var $p;
      var $whent = __stackBase__;
      $when_addr = $when;
      $function_addr = $function;
      
      var $2 = __PyTime_DoubleToTimet($when_addr);
      HEAP[$whent] = $2;
      
      var $4 = HEAP[$whent] == -1;
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
      $0 = 0;
      __label__ = 8;
      break;
     case 3:
      var $7 = ___errno_location();
      HEAP[$7] = 0;
      var $8 = $function_addr;
      var $9 = FUNCTION_TABLE[$8]($whent);
      $p = $9;
      
      if ($9 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      var $11 = ___errno_location();
      
      
      if (HEAP[$11] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $14 = ___errno_location();
      HEAP[$14] = 22;
      __label__ = 6;
      break;
     case 6:
      var $15 = HEAP[_PyExc_ValueError];
      var $16 = _PyErr_SetFromErrno($15);
      $0 = $16;
      __label__ = 8;
      break;
     case 7:
      
      var $18 = _tmtotuple($p);
      $0 = $18;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval8 = $retval;
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parse_time_double_args($args, $format, $pwhen) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $args_addr;
      var $format_addr;
      var $pwhen_addr;
      var $retval;
      var $0;
      var $ot = __stackBase__;
      var $when;
      $args_addr = $args;
      $format_addr = $format;
      $pwhen_addr = $pwhen;
      HEAP[$ot] = 0;
      
      
      var $3 = _PyArg_ParseTuple($args_addr, $format_addr, allocate([ $ot, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 8;
      break;
     case 2:
      
      
      
      
      
      if (HEAP[$ot] == 0 | HEAP[$ot] == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = _floattime();
      
      HEAP[$pwhen_addr] = $9;
      __label__ = 7;
      break;
     case 4:
      var $11 = HEAP[$ot];
      var $12 = _PyFloat_AsDouble($11);
      $when = $12;
      var $13 = _PyErr_Occurred();
      
      if ($13 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 8;
      break;
     case 6:
      
      
      HEAP[$pwhen_addr] = $when;
      __label__ = 7;
      break;
     case 7:
      $0 = 1;
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
  function _time_gmtime($self, $args) {
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
      var $when = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _parse_time_double_args($args_addr, __str22, $when);
      
      if ($2 == 0) {
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
      var $4 = HEAP[$when];
      var $5 = _time_convert($4, FUNCTION_TABLE_OFFSET + 2);
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
  function _time_localtime($self, $args) {
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
      var $when = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _parse_time_double_args($args_addr, __str23, $when);
      
      if ($2 == 0) {
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
      var $4 = HEAP[$when];
      var $5 = _time_convert($4, FUNCTION_TABLE_OFFSET + 4);
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
  function _gettmarg($args, $p) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $args_addr;
      var $p_addr;
      var $retval;
      var $0;
      var $y = __stackBase__;
      var $accept;
      $args_addr = $args;
      $p_addr = $p;
      
      
      _llvm_memset_p0i8_i32($p_addr, 0, 44, 1, 0);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $20 = _PyArg_Parse($args_addr, __str24, allocate([ $y, 0, 0, 0, $p_addr + 16, 0, 0, 0, $p_addr + 12, 0, 0, 0, $p_addr + 8, 0, 0, 0, $p_addr + 4, 0, 0, 0, $p_addr, 0, 0, 0, $p_addr + 24, 0, 0, 0, $p_addr + 28, 0, 0, 0, $p_addr + 32, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($20 == 0) {
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
      
      
      if (HEAP[$y] <= 1899) {
        __label__ = 3;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 3:
      var $24 = HEAP[_moddict];
      var $25 = _PyDict_GetItemString($24, __str25);
      $accept = $25;
      
      
      if ($accept == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$accept + 4] + 84] & 8388608) == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $36 = _PyInt_AsLong($accept);
      
      if ($36 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $38 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($38, __str26);
      $0 = 0;
      __label__ = 13;
      break;
     case 7:
      
      
      
      
      
      var $43 = HEAP[$y];
      if (HEAP[$y] <= 68 | HEAP[$y] > 99) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $44 = $43 + 1900;
      HEAP[$y] = $44;
      __label__ = 12;
      break;
     case 9:
      
      
      
      
      if ($43 < 0 | HEAP[$y] > 68) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      var $49 = HEAP[$y] + 2e3;
      HEAP[$y] = $49;
      __label__ = 12;
      break;
     case 11:
      var $50 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($50, __str27);
      $0 = 0;
      __label__ = 13;
      break;
     case 12:
      
      var $52 = HEAP[$y] - 1900;
      
      
      HEAP[$p_addr + 20] = $52;
      
      
      
      var $58 = HEAP[$p_addr + 16] - 1;
      
      
      HEAP[$p_addr + 16] = $58;
      
      
      
      
      var $65 = (HEAP[$p_addr + 24] + 1) % 7;
      
      
      HEAP[$p_addr + 24] = $65;
      
      
      
      var $71 = HEAP[$p_addr + 28] - 1;
      
      
      HEAP[$p_addr + 28] = $71;
      $0 = 1;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval15 = $retval;
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_strftime($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $tup = __stackBase__;
      var $buf = __stackBase__ + 4;
      var $fmt = __stackBase__ + 48;
      var $fmtlen;
      var $buflen;
      var $outbuf;
      var $i;
      var $tt = __stackBase__ + 52;
      var $ret;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$tup] = 0;
      $outbuf = 0;
      var $buf1 = $buf;
      _llvm_memset_p0i8_i32($buf1, 0, 44, 1, 0);
      
      var $2 = _PyArg_ParseTuple($args_addr, __str28, allocate([ $fmt, 0, 0, 0, $tup, 0, 0, 0 ], [ "i8**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 43;
      break;
     case 2:
      
      
      if (HEAP[$tup] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = _time(0);
      HEAP[$tt] = $6;
      var $7 = _localtime($tt);
      var $buf4 = $buf;
      var $8 = $7;
      _llvm_memcpy_p0i8_p0i8_i32($buf4, $8, 44, 4, 0);
      __label__ = 6;
      break;
     case 4:
      var $9 = HEAP[$tup];
      var $10 = _gettmarg($9, $buf);
      
      if ($10 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 43;
      break;
     case 6:
      
      
      var $14 = HEAP[$buf + 16] == -1;
      var $15 = $buf + 16;
      if ($14) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$15] = 0;
      __label__ = 11;
      break;
     case 8:
      
      
      if (HEAP[$15] < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      if (HEAP[$buf + 16] > 11) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $21 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($21, __str29);
      $0 = 0;
      __label__ = 43;
      break;
     case 11:
      
      
      
      var $25 = $buf + 12;
      if (HEAP[$buf + 12] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$25] = 1;
      __label__ = 16;
      break;
     case 13:
      
      
      if (HEAP[$25] < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      if (HEAP[$buf + 12] > 31) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $31 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($31, __str30);
      $0 = 0;
      __label__ = 43;
      break;
     case 16:
      
      
      
      if (HEAP[$buf + 8] < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      if (HEAP[$buf + 8] > 23) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $38 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($38, __str31);
      $0 = 0;
      __label__ = 43;
      break;
     case 19:
      
      
      
      if (HEAP[$buf + 4] < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      if (HEAP[$buf + 4] > 59) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      var $45 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($45, __str32);
      $0 = 0;
      __label__ = 43;
      break;
     case 22:
      
      
      
      if (HEAP[$buf] < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      if (HEAP[$buf] > 61) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      var $52 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($52, __str33);
      $0 = 0;
      __label__ = 43;
      break;
     case 25:
      
      
      
      if (HEAP[$buf + 24] < 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      var $56 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($56, __str34);
      $0 = 0;
      __label__ = 43;
      break;
     case 27:
      
      
      var $59 = HEAP[$buf + 28] == -1;
      var $60 = $buf + 28;
      if ($59) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      HEAP[$60] = 0;
      __label__ = 32;
      break;
     case 29:
      
      
      if (HEAP[$60] < 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      if (HEAP[$buf + 28] > 365) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      var $66 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($66, __str35);
      $0 = 0;
      __label__ = 43;
      break;
     case 32:
      
      
      var $69 = HEAP[$buf + 32] < -1;
      var $70 = $buf + 32;
      if ($69) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      HEAP[$70] = -1;
      __label__ = 36;
      break;
     case 34:
      
      
      if (HEAP[$70] > 1) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      HEAP[$buf + 32] = 1;
      __label__ = 36;
      break;
     case 36:
      var $74 = HEAP[$fmt];
      var $75 = _strlen($74);
      $fmtlen = $75;
      $i = 1024;
      __label__ = 37;
      break;
     case 37:
      
      var $77 = _malloc($i);
      $outbuf = $77;
      
      if ($77 == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      var $79 = _PyErr_NoMemory();
      $0 = $79;
      __label__ = 43;
      break;
     case 39:
      var $80 = HEAP[$fmt];
      
      
      var $83 = _strftime($outbuf, $i, $80, $buf);
      $buflen = $83;
      
      
      if ($buflen != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      
      
      
      
      if ($fmtlen * 256 <= $i) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      var $92 = _PyString_FromStringAndSize($outbuf, $buflen);
      $ret = $92;
      
      _free($outbuf);
      
      $0 = $ret;
      __label__ = 43;
      break;
     case 42:
      
      _free($outbuf);
      
      
      var $98 = $i + $i;
      $i = $98;
      __label__ = 37;
      break;
     case 43:
      
      $retval = $0;
      var $retval45 = $retval;
      STACKTOP = __stackBase__;
      return $retval45;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_strptime($self, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $strptime_module;
      var $strptime_result;
      $self_addr = $self;
      $args_addr = $args;
      var $1 = _PyImport_ImportModuleNoBlock(__str36);
      $strptime_module = $1;
      
      
      if ($strptime_module == 0) {
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
      
      
      var $6 = _PyObject_CallMethod($strptime_module, __str37, __str38, allocate([ $args_addr, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $strptime_result = $6;
      
      
      
      var $10 = HEAP[$strptime_module] - 1;
      
      
      HEAP[$strptime_module] = $10;
      
      
      
      
      if (HEAP[$strptime_module] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $21 = HEAP[HEAP[$strptime_module + 4] + 24];
      
      FUNCTION_TABLE[$21]($strptime_module);
      __label__ = 4;
      break;
     case 4:
      
      $0 = $strptime_result;
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
  function _time_asctime($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $tup = __stackBase__;
      var $buf = __stackBase__ + 4;
      var $p;
      var $tt = __stackBase__ + 48;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$tup] = 0;
      
      var $2 = _PyArg_UnpackTuple($args_addr, __str39, 0, 1, allocate([ $tup, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$tup] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = _time(0);
      HEAP[$tt] = $6;
      var $7 = _localtime($tt);
      var $buf3 = $buf;
      var $8 = $7;
      _llvm_memcpy_p0i8_p0i8_i32($buf3, $8, 44, 4, 0);
      __label__ = 6;
      break;
     case 4:
      var $9 = HEAP[$tup];
      var $10 = _gettmarg($9, $buf);
      
      if ($10 == 0) {
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
      var $12 = _asctime($buf);
      $p = $12;
      
      if ($12 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $14 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($14, __str40);
      $0 = 0;
      __label__ = 11;
      break;
     case 8:
      
      
      
      
      if (HEAP[$p + 24] == 10) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      HEAP[$p + 24] = 0;
      __label__ = 10;
      break;
     case 10:
      
      var $22 = _PyString_FromString($p);
      $0 = $22;
      __label__ = 11;
      break;
     case 11:
      
      $retval = $0;
      var $retval12 = $retval;
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_ctime($self, $args) {
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
      var $ot = __stackBase__;
      var $tt = __stackBase__ + 4;
      var $p;
      var $dt;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$ot] = 0;
      
      var $2 = _PyArg_UnpackTuple($args_addr, __str41, 0, 1, allocate([ $ot, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      
      if (HEAP[$ot] == 0 | HEAP[$ot] == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = _time(0);
      HEAP[$tt] = $8;
      __label__ = 9;
      break;
     case 4:
      var $9 = HEAP[$ot];
      var $10 = _PyFloat_AsDouble($9);
      $dt = $10;
      var $11 = _PyErr_Occurred();
      
      if ($11 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 14;
      break;
     case 6:
      
      var $14 = __PyTime_DoubleToTimet($dt);
      HEAP[$tt] = $14;
      
      var $16 = HEAP[$tt] == -1;
      if ($16) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $17 = _PyErr_Occurred();
      
      if ($17 != 0) {
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
      var $19 = _ctime($tt);
      $p = $19;
      
      if ($19 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $21 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($21, __str42);
      $0 = 0;
      __label__ = 14;
      break;
     case 11:
      
      
      
      
      if (HEAP[$p + 24] == 10) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      HEAP[$p + 24] = 0;
      __label__ = 13;
      break;
     case 13:
      
      var $29 = _PyString_FromString($p);
      $0 = $29;
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
  function _time_mktime($self, $tup) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $tup_addr;
      var $retval;
      var $0;
      var $buf = __stackBase__;
      var $tt;
      $self_addr = $self;
      $tup_addr = $tup;
      
      var $2 = _gettmarg($tup_addr, $buf);
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 6;
      break;
     case 2:
      
      HEAP[$buf + 24] = -1;
      var $5 = _mktime($buf);
      $tt = $5;
      
      var $7 = $tt == -1;
      if ($7) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $10 = HEAP[$buf + 24] == -1;
      if ($10) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $11 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($11, __str43);
      $0 = 0;
      __label__ = 6;
      break;
     case 5:
      
      
      var $14 = _PyFloat_FromDouble($tt);
      $0 = $14;
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      var $retval6 = $retval;
      STACKTOP = __stackBase__;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_tzset($self, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $0;
      var $m;
      $self_addr = $self;
      $unused_addr = $unused;
      var $1 = _PyImport_ImportModuleNoBlock(__str44);
      $m = $1;
      
      
      if ($m == 0) {
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
      _tzset();
      
      _inittimezone($m);
      
      
      
      var $8 = HEAP[$m] - 1;
      
      
      HEAP[$m] = $8;
      
      
      
      
      if (HEAP[$m] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $19 = HEAP[HEAP[$m + 4] + 24];
      
      FUNCTION_TABLE[$19]($m);
      __label__ = 4;
      break;
     case 4:
      
      var $22 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $22;
      $0 = __Py_NoneStruct;
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
  function _inittimezone($m) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m_addr;
      var $iftmp_53;
      var $iftmp_51;
      var $t = __stackBase__;
      var $p;
      var $janzone;
      var $julyzone;
      var $janname = __stackBase__ + 4;
      var $julyname = __stackBase__ + 14;
      $m_addr = $m;
      var $0 = _time(0);
      
      
      HEAP[$t] = ($0 / 31557600 | 0) * 31557600;
      var $3 = _localtime($t);
      $p = $3;
      
      
      
      
      $janzone = 0 - HEAP[$p + 36];
      
      
      
      
      if (HEAP[$p + 40] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $iftmp_51 = HEAP[$p + 40];
      __label__ = 3;
      break;
     case 2:
      $iftmp_51 = __str45;
      __label__ = 3;
      break;
     case 3:
      var $janname3 = $janname;
      
      var $16 = _strncpy($janname3, $iftmp_51, 9);
      
      HEAP[$janname + 9] = 0;
      
      var $19 = HEAP[$t] + 15778800;
      HEAP[$t] = $19;
      var $20 = _localtime($t);
      $p = $20;
      
      
      
      
      $julyzone = 0 - HEAP[$p + 36];
      
      
      
      
      if (HEAP[$p + 40] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      $iftmp_53 = HEAP[$p + 40];
      __label__ = 6;
      break;
     case 5:
      $iftmp_53 = __str45;
      __label__ = 6;
      break;
     case 6:
      var $julyname7 = $julyname;
      
      var $33 = _strncpy($julyname7, $iftmp_53, 9);
      
      HEAP[$julyname + 9] = 0;
      
      
      
      var $38 = $m_addr;
      if ($janzone < $julyzone) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      var $40 = _PyModule_AddIntConstant($38, __str46, $julyzone);
      
      
      var $43 = _PyModule_AddIntConstant($m_addr, __str47, $janzone);
      
      
      
      
      
      var $49 = _PyModule_AddIntConstant($m_addr, __str48, $janzone != $julyzone);
      var $julyname9 = $julyname;
      var $janname10 = $janname;
      var $50 = _Py_BuildValue(__str49, allocate([ $julyname9, 0, 0, 0, $janname10, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      var $52 = _PyModule_AddObject($m_addr, __str50, $50);
      __label__ = 9;
      break;
     case 8:
      
      var $54 = _PyModule_AddIntConstant($38, __str46, $janzone);
      
      
      var $57 = _PyModule_AddIntConstant($m_addr, __str47, $julyzone);
      
      
      
      
      
      var $63 = _PyModule_AddIntConstant($m_addr, __str48, $janzone != $julyzone);
      var $janname12 = $janname;
      var $julyname13 = $julyname;
      var $64 = _Py_BuildValue(__str49, allocate([ $janname12, 0, 0, 0, $julyname13, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      var $66 = _PyModule_AddObject($m_addr, __str50, $64);
      __label__ = 9;
      break;
     case 9:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _inittime() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $iftmp_56;
      var $iftmp_54;
      var $m;
      var $p;
      var $0 = _Py_InitModule4(__str44, _time_methods, _module_doc, 0, 1013);
      $m = $0;
      
      
      if ($m == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[_Py_IgnoreEnvironmentFlag] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      $iftmp_54 = 0;
      $p = 0;
      __label__ = 5;
      break;
     case 3:
      var $5 = _getenv(__str59);
      $iftmp_54 = $5;
      $p = $5;
      
      if ($5 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      if (HEAP[$p] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $iftmp_56 = 1;
      __label__ = 7;
      break;
     case 6:
      $iftmp_56 = 0;
      __label__ = 7;
      break;
     case 7:
      
      
      var $12 = _PyModule_AddIntConstant($m, __str25, $iftmp_56);
      
      var $14 = _PyModule_GetDict($m);
      HEAP[_moddict] = $14;
      
      
      
      var $18 = HEAP[HEAP[_moddict]] + 1;
      var $19 = HEAP[_moddict];
      HEAP[$19] = $18;
      
      _inittimezone($m);
      
      
      
      if (HEAP[_initialized_b] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      _PyStructSequence_InitType(_StructTimeType, _struct_time_type_desc);
      __label__ = 9;
      break;
     case 9:
      
      var $24 = HEAP[_StructTimeType] + 1;
      HEAP[_StructTimeType] = $24;
      
      var $26 = _PyModule_AddObject($m, __str60, _StructTimeType);
      HEAP[_initialized_b] = 1;
      __label__ = 10;
      break;
     case 10:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_inittime"] = _inittime;
  function _floattime() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval;
      var $0;
      var $t = __stackBase__;
      var $t2 = __stackBase__ + 8;
      var $1 = _gettimeofday($t, 0);
      
      if ($1 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      $0 = HEAP[$t] + HEAP[$t + 4] * 1e-6;
      __label__ = 3;
      break;
     case 2:
      var $11 = _ftime($t2);
      
      
      
      
      
      
      
      
      $0 = HEAP[$t2] + HEAP[$t2 + 4] * .001;
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
  function _floatsleep($secs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $secs_addr;
      var $retval;
      var $0;
      var $t = __stackBase__;
      var $frac;
      $secs_addr = $secs;
      
      var $2 = _fmod($secs_addr, 1);
      $frac = $2;
      
      var $4 = _floor($secs_addr);
      $secs_addr = $4;
      
      
      
      HEAP[$t] = $secs_addr | 0;
      
      
      
      
      HEAP[$t + 4] = $frac * 1e6 | 0;
      var $12 = _select(0, 0, 0, 0, $t);
      
      if ($12 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $14 = ___errno_location();
      
      
      if (HEAP[$14] != 4) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $17 = HEAP[_PyExc_IOError];
      var $18 = _PyErr_SetFromErrno($17);
      $0 = -1;
      __label__ = 4;
      break;
     case 3:
      $0 = 0;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _gmtime, 0, _localtime, 0, _time_time, 0, _time_clock, 0, _time_sleep, 0, _time_gmtime, 0, _time_localtime, 0, _time_asctime, 0, _time_ctime, 0, _time_mktime, 0, _time_strftime, 0, _time_strptime, 0, _time_tzset, 0 ]);
  function run(args) {
    __str = allocate([ 116, 105, 109, 101, 115, 116, 97, 109, 112, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 32, 102, 111, 114, 32, 112, 108, 97, 116, 102, 111, 114, 109, 32, 116, 105, 109, 101, 95, 116, 0 ], "i8", ALLOC_NORMAL);
    _time_doc = allocate([ 116, 105, 109, 101, 40, 41, 32, 45, 62, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 110, 117, 109, 98, 101, 114, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 46, 10, 70, 114, 97, 99, 116, 105, 111, 110, 115, 32, 111, 102, 32, 97, 32, 115, 101, 99, 111, 110, 100, 32, 109, 97, 121, 32, 98, 101, 32, 112, 114, 101, 115, 101, 110, 116, 32, 105, 102, 32, 116, 104, 101, 32, 115, 121, 115, 116, 101, 109, 32, 99, 108, 111, 99, 107, 32, 112, 114, 111, 118, 105, 100, 101, 115, 32, 116, 104, 101, 109, 46, 0 ], "i8", ALLOC_NORMAL);
    _clock_doc = allocate([ 99, 108, 111, 99, 107, 40, 41, 32, 45, 62, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 110, 117, 109, 98, 101, 114, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 67, 80, 85, 32, 116, 105, 109, 101, 32, 111, 114, 32, 114, 101, 97, 108, 32, 116, 105, 109, 101, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 115, 116, 97, 114, 116, 32, 111, 102, 32, 116, 104, 101, 32, 112, 114, 111, 99, 101, 115, 115, 32, 111, 114, 32, 115, 105, 110, 99, 101, 10, 116, 104, 101, 32, 102, 105, 114, 115, 116, 32, 99, 97, 108, 108, 32, 116, 111, 32, 99, 108, 111, 99, 107, 40, 41, 46, 32, 32, 84, 104, 105, 115, 32, 104, 97, 115, 32, 97, 115, 32, 109, 117, 99, 104, 32, 112, 114, 101, 99, 105, 115, 105, 111, 110, 32, 97, 115, 32, 116, 104, 101, 32, 115, 121, 115, 116, 101, 109, 10, 114, 101, 99, 111, 114, 100, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 100, 58, 115, 108, 101, 101, 112, 0 ], "i8", ALLOC_NORMAL);
    _sleep_doc = allocate([ 115, 108, 101, 101, 112, 40, 115, 101, 99, 111, 110, 100, 115, 41, 10, 10, 68, 101, 108, 97, 121, 32, 101, 120, 101, 99, 117, 116, 105, 111, 110, 32, 102, 111, 114, 32, 97, 32, 103, 105, 118, 101, 110, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 115, 101, 99, 111, 110, 100, 115, 46, 32, 32, 84, 104, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 97, 121, 32, 98, 101, 10, 97, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 110, 117, 109, 98, 101, 114, 32, 102, 111, 114, 32, 115, 117, 98, 115, 101, 99, 111, 110, 100, 32, 112, 114, 101, 99, 105, 115, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 116, 109, 95, 121, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 121, 101, 97, 114, 44, 32, 102, 111, 114, 32, 101, 120, 97, 109, 112, 108, 101, 44, 32, 49, 57, 57, 51, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 116, 109, 95, 109, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 109, 111, 110, 116, 104, 32, 111, 102, 32, 121, 101, 97, 114, 44, 32, 114, 97, 110, 103, 101, 32, 91, 49, 44, 32, 49, 50, 93, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 116, 109, 95, 109, 100, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 100, 97, 121, 32, 111, 102, 32, 109, 111, 110, 116, 104, 44, 32, 114, 97, 110, 103, 101, 32, 91, 49, 44, 32, 51, 49, 93, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 116, 109, 95, 104, 111, 117, 114, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 104, 111, 117, 114, 115, 44, 32, 114, 97, 110, 103, 101, 32, 91, 48, 44, 32, 50, 51, 93, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 116, 109, 95, 109, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 109, 105, 110, 117, 116, 101, 115, 44, 32, 114, 97, 110, 103, 101, 32, 91, 48, 44, 32, 53, 57, 93, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 116, 109, 95, 115, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 115, 101, 99, 111, 110, 100, 115, 44, 32, 114, 97, 110, 103, 101, 32, 91, 48, 44, 32, 54, 49, 93, 41, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 116, 109, 95, 119, 100, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 100, 97, 121, 32, 111, 102, 32, 119, 101, 101, 107, 44, 32, 114, 97, 110, 103, 101, 32, 91, 48, 44, 32, 54, 93, 44, 32, 77, 111, 110, 100, 97, 121, 32, 105, 115, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 116, 109, 95, 121, 100, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 100, 97, 121, 32, 111, 102, 32, 121, 101, 97, 114, 44, 32, 114, 97, 110, 103, 101, 32, 91, 49, 44, 32, 51, 54, 54, 93, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 116, 109, 95, 105, 115, 100, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 49, 32, 105, 102, 32, 115, 117, 109, 109, 101, 114, 32, 116, 105, 109, 101, 32, 105, 115, 32, 105, 110, 32, 101, 102, 102, 101, 99, 116, 44, 32, 48, 32, 105, 102, 32, 110, 111, 116, 44, 32, 97, 110, 100, 32, 45, 49, 32, 105, 102, 32, 117, 110, 107, 110, 111, 119, 110, 0 ], "i8", ALLOC_NORMAL);
    _struct_time_type_fields = allocate(80, [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _struct_time_type_desc = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyStructSequence_Field*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str20 = allocate([ 116, 105, 109, 101, 46, 115, 116, 114, 117, 99, 116, 95, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 84, 104, 101, 32, 116, 105, 109, 101, 32, 118, 97, 108, 117, 101, 32, 97, 115, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 103, 109, 116, 105, 109, 101, 40, 41, 44, 32, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 44, 32, 97, 110, 100, 32, 115, 116, 114, 112, 116, 105, 109, 101, 40, 41, 44, 32, 97, 110, 100, 10, 32, 97, 99, 99, 101, 112, 116, 101, 100, 32, 98, 121, 32, 97, 115, 99, 116, 105, 109, 101, 40, 41, 44, 32, 109, 107, 116, 105, 109, 101, 40, 41, 32, 97, 110, 100, 32, 115, 116, 114, 102, 116, 105, 109, 101, 40, 41, 46, 32, 32, 77, 97, 121, 32, 98, 101, 32, 99, 111, 110, 115, 105, 100, 101, 114, 101, 100, 32, 97, 115, 32, 97, 10, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 102, 32, 57, 32, 105, 110, 116, 101, 103, 101, 114, 115, 46, 10, 10, 32, 78, 111, 116, 101, 32, 116, 104, 97, 116, 32, 115, 101, 118, 101, 114, 97, 108, 32, 102, 105, 101, 108, 100, 115, 39, 32, 118, 97, 108, 117, 101, 115, 32, 97, 114, 101, 32, 110, 111, 116, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 97, 115, 32, 116, 104, 111, 115, 101, 32, 100, 101, 102, 105, 110, 101, 100, 32, 98, 121, 10, 32, 116, 104, 101, 32, 67, 32, 108, 97, 110, 103, 117, 97, 103, 101, 32, 115, 116, 97, 110, 100, 97, 114, 100, 32, 102, 111, 114, 32, 115, 116, 114, 117, 99, 116, 32, 116, 109, 46, 32, 32, 70, 111, 114, 32, 101, 120, 97, 109, 112, 108, 101, 44, 32, 116, 104, 101, 32, 118, 97, 108, 117, 101, 32, 111, 102, 32, 116, 104, 101, 10, 32, 102, 105, 101, 108, 100, 32, 116, 109, 95, 121, 101, 97, 114, 32, 105, 115, 32, 116, 104, 101, 32, 97, 99, 116, 117, 97, 108, 32, 121, 101, 97, 114, 44, 32, 110, 111, 116, 32, 121, 101, 97, 114, 32, 45, 32, 49, 57, 48, 48, 46, 32, 32, 83, 101, 101, 32, 105, 110, 100, 105, 118, 105, 100, 117, 97, 108, 10, 32, 102, 105, 101, 108, 100, 115, 39, 32, 100, 101, 115, 99, 114, 105, 112, 116, 105, 111, 110, 115, 32, 102, 111, 114, 32, 100, 101, 116, 97, 105, 108, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _StructTimeType = allocate(196, [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str22 = allocate([ 124, 79, 58, 103, 109, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _gmtime_doc = allocate([ 103, 109, 116, 105, 109, 101, 40, 91, 115, 101, 99, 111, 110, 100, 115, 93, 41, 32, 45, 62, 32, 40, 116, 109, 95, 121, 101, 97, 114, 44, 32, 116, 109, 95, 109, 111, 110, 44, 32, 116, 109, 95, 109, 100, 97, 121, 44, 32, 116, 109, 95, 104, 111, 117, 114, 44, 32, 116, 109, 95, 109, 105, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 109, 95, 115, 101, 99, 44, 32, 116, 109, 95, 119, 100, 97, 121, 44, 32, 116, 109, 95, 121, 100, 97, 121, 44, 32, 116, 109, 95, 105, 115, 100, 115, 116, 41, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 32, 116, 111, 32, 97, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 101, 120, 112, 114, 101, 115, 115, 105, 110, 103, 32, 85, 84, 67, 32, 40, 97, 46, 107, 46, 97, 46, 10, 71, 77, 84, 41, 46, 32, 32, 87, 104, 101, 110, 32, 39, 115, 101, 99, 111, 110, 100, 115, 39, 32, 105, 115, 32, 110, 111, 116, 32, 112, 97, 115, 115, 101, 100, 32, 105, 110, 44, 32, 99, 111, 110, 118, 101, 114, 116, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 105, 110, 115, 116, 101, 97, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 124, 79, 58, 108, 111, 99, 97, 108, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _localtime_doc = allocate([ 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 91, 115, 101, 99, 111, 110, 100, 115, 93, 41, 32, 45, 62, 32, 40, 116, 109, 95, 121, 101, 97, 114, 44, 116, 109, 95, 109, 111, 110, 44, 116, 109, 95, 109, 100, 97, 121, 44, 116, 109, 95, 104, 111, 117, 114, 44, 116, 109, 95, 109, 105, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 109, 95, 115, 101, 99, 44, 116, 109, 95, 119, 100, 97, 121, 44, 116, 109, 95, 121, 100, 97, 121, 44, 116, 109, 95, 105, 115, 100, 115, 116, 41, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 32, 116, 111, 32, 97, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 101, 120, 112, 114, 101, 115, 115, 105, 110, 103, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 46, 10, 87, 104, 101, 110, 32, 39, 115, 101, 99, 111, 110, 100, 115, 39, 32, 105, 115, 32, 110, 111, 116, 32, 112, 97, 115, 115, 101, 100, 32, 105, 110, 44, 32, 99, 111, 110, 118, 101, 114, 116, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 105, 110, 115, 116, 101, 97, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 40, 105, 105, 105, 105, 105, 105, 105, 105, 105, 41, 0 ], "i8", ALLOC_NORMAL);
    _moddict = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str25 = allocate([ 97, 99, 99, 101, 112, 116, 50, 100, 121, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 121, 101, 97, 114, 32, 62, 61, 32, 49, 57, 48, 48, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 121, 101, 97, 114, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 115, 124, 79, 58, 115, 116, 114, 102, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 109, 111, 110, 116, 104, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 100, 97, 121, 32, 111, 102, 32, 109, 111, 110, 116, 104, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 104, 111, 117, 114, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 109, 105, 110, 117, 116, 101, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 115, 101, 99, 111, 110, 100, 115, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 100, 97, 121, 32, 111, 102, 32, 119, 101, 101, 107, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 100, 97, 121, 32, 111, 102, 32, 121, 101, 97, 114, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    _strftime_doc = allocate([ 115, 116, 114, 102, 116, 105, 109, 101, 40, 102, 111, 114, 109, 97, 116, 91, 44, 32, 116, 117, 112, 108, 101, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 116, 111, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 97, 32, 102, 111, 114, 109, 97, 116, 32, 115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 46, 10, 83, 101, 101, 32, 116, 104, 101, 32, 108, 105, 98, 114, 97, 114, 121, 32, 114, 101, 102, 101, 114, 101, 110, 99, 101, 32, 109, 97, 110, 117, 97, 108, 32, 102, 111, 114, 32, 102, 111, 114, 109, 97, 116, 116, 105, 110, 103, 32, 99, 111, 100, 101, 115, 46, 32, 87, 104, 101, 110, 32, 116, 104, 101, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 10, 105, 115, 32, 110, 111, 116, 32, 112, 114, 101, 115, 101, 110, 116, 44, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 97, 115, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 32, 105, 115, 32, 117, 115, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 95, 115, 116, 114, 112, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 95, 115, 116, 114, 112, 116, 105, 109, 101, 95, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 79, 0 ], "i8", ALLOC_NORMAL);
    _strptime_doc = allocate([ 115, 116, 114, 112, 116, 105, 109, 101, 40, 115, 116, 114, 105, 110, 103, 44, 32, 102, 111, 114, 109, 97, 116, 41, 32, 45, 62, 32, 115, 116, 114, 117, 99, 116, 95, 116, 105, 109, 101, 10, 10, 80, 97, 114, 115, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 97, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 97, 32, 102, 111, 114, 109, 97, 116, 32, 115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 46, 10, 83, 101, 101, 32, 116, 104, 101, 32, 108, 105, 98, 114, 97, 114, 121, 32, 114, 101, 102, 101, 114, 101, 110, 99, 101, 32, 109, 97, 110, 117, 97, 108, 32, 102, 111, 114, 32, 102, 111, 114, 109, 97, 116, 116, 105, 110, 103, 32, 99, 111, 100, 101, 115, 32, 40, 115, 97, 109, 101, 32, 97, 115, 32, 115, 116, 114, 102, 116, 105, 109, 101, 40, 41, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 97, 115, 99, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _asctime_doc = allocate([ 97, 115, 99, 116, 105, 109, 101, 40, 91, 116, 117, 112, 108, 101, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 116, 111, 32, 97, 32, 115, 116, 114, 105, 110, 103, 44, 32, 101, 46, 103, 46, 32, 39, 83, 97, 116, 32, 74, 117, 110, 32, 48, 54, 32, 49, 54, 58, 50, 54, 58, 49, 49, 32, 49, 57, 57, 56, 39, 46, 10, 87, 104, 101, 110, 32, 116, 104, 101, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 105, 115, 32, 110, 111, 116, 32, 112, 114, 101, 115, 101, 110, 116, 44, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 97, 115, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 10, 105, 115, 32, 117, 115, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 99, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 117, 110, 99, 111, 110, 118, 101, 114, 116, 105, 98, 108, 101, 32, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _ctime_doc = allocate([ 99, 116, 105, 109, 101, 40, 115, 101, 99, 111, 110, 100, 115, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 116, 105, 109, 101, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 32, 116, 111, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 105, 110, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 46, 10, 84, 104, 105, 115, 32, 105, 115, 32, 101, 113, 117, 105, 118, 97, 108, 101, 110, 116, 32, 116, 111, 32, 97, 115, 99, 116, 105, 109, 101, 40, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 115, 101, 99, 111, 110, 100, 115, 41, 41, 46, 32, 87, 104, 101, 110, 32, 116, 104, 101, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 105, 115, 10, 110, 111, 116, 32, 112, 114, 101, 115, 101, 110, 116, 44, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 97, 115, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 32, 105, 115, 32, 117, 115, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 109, 107, 116, 105, 109, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    _mktime_doc = allocate([ 109, 107, 116, 105, 109, 101, 40, 116, 117, 112, 108, 101, 41, 32, 45, 62, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 110, 117, 109, 98, 101, 114, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 105, 110, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 32, 116, 111, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 46, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _tzset_doc = allocate([ 116, 122, 115, 101, 116, 40, 41, 10, 10, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 44, 32, 111, 114, 32, 114, 101, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 44, 32, 116, 104, 101, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 122, 111, 110, 101, 32, 116, 111, 32, 116, 104, 101, 32, 118, 97, 108, 117, 101, 32, 115, 116, 111, 114, 101, 100, 32, 105, 110, 10, 111, 115, 46, 101, 110, 118, 105, 114, 111, 110, 91, 39, 84, 90, 39, 93, 46, 32, 84, 104, 101, 32, 84, 90, 32, 101, 110, 118, 105, 114, 111, 110, 109, 101, 110, 116, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 105, 110, 10, 115, 116, 97, 110, 100, 97, 114, 100, 32, 85, 110, 105, 120, 32, 116, 105, 109, 101, 122, 111, 110, 101, 32, 102, 111, 114, 109, 97, 116, 32, 97, 115, 32, 100, 111, 99, 117, 109, 101, 110, 116, 101, 100, 32, 105, 110, 32, 116, 104, 101, 32, 116, 122, 115, 101, 116, 32, 109, 97, 110, 32, 112, 97, 103, 101, 10, 40, 101, 103, 46, 32, 39, 85, 83, 47, 69, 97, 115, 116, 101, 114, 110, 39, 44, 32, 39, 69, 117, 114, 111, 112, 101, 47, 65, 109, 115, 116, 101, 114, 100, 97, 109, 39, 41, 46, 32, 85, 110, 107, 110, 111, 119, 110, 32, 116, 105, 109, 101, 122, 111, 110, 101, 115, 32, 119, 105, 108, 108, 32, 115, 105, 108, 101, 110, 116, 108, 121, 10, 102, 97, 108, 108, 32, 98, 97, 99, 107, 32, 116, 111, 32, 85, 84, 67, 46, 32, 73, 102, 32, 116, 104, 101, 32, 84, 90, 32, 101, 110, 118, 105, 114, 111, 110, 109, 101, 110, 116, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 105, 115, 32, 110, 111, 116, 32, 115, 101, 116, 44, 32, 116, 104, 101, 32, 108, 111, 99, 97, 108, 10, 116, 105, 109, 101, 122, 111, 110, 101, 32, 105, 115, 32, 115, 101, 116, 32, 116, 111, 32, 116, 104, 101, 32, 115, 121, 115, 116, 101, 109, 115, 32, 98, 101, 115, 116, 32, 103, 117, 101, 115, 115, 32, 111, 102, 32, 119, 97, 108, 108, 99, 108, 111, 99, 107, 32, 116, 105, 109, 101, 46, 10, 67, 104, 97, 110, 103, 105, 110, 103, 32, 116, 104, 101, 32, 84, 90, 32, 101, 110, 118, 105, 114, 111, 110, 109, 101, 110, 116, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 119, 105, 116, 104, 111, 117, 116, 32, 99, 97, 108, 108, 105, 110, 103, 32, 116, 122, 115, 101, 116, 32, 42, 109, 97, 121, 42, 32, 99, 104, 97, 110, 103, 101, 10, 116, 104, 101, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 122, 111, 110, 101, 32, 117, 115, 101, 100, 32, 98, 121, 32, 109, 101, 116, 104, 111, 100, 115, 32, 115, 117, 99, 104, 32, 97, 115, 32, 108, 111, 99, 97, 108, 116, 105, 109, 101, 44, 32, 98, 117, 116, 32, 116, 104, 105, 115, 32, 98, 101, 104, 97, 118, 105, 111, 117, 114, 10, 115, 104, 111, 117, 108, 100, 32, 110, 111, 116, 32, 98, 101, 32, 114, 101, 108, 105, 101, 100, 32, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 32, 32, 32, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 116, 105, 109, 101, 122, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 97, 108, 116, 122, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 100, 97, 121, 108, 105, 103, 104, 116, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 40, 122, 122, 41, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 116, 122, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 99, 108, 111, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 115, 108, 101, 101, 112, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 103, 109, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 108, 111, 99, 97, 108, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 109, 107, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 115, 116, 114, 102, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 115, 116, 114, 112, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 116, 122, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    _time_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_doc = allocate([ 84, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 112, 114, 111, 118, 105, 100, 101, 115, 32, 118, 97, 114, 105, 111, 117, 115, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 116, 111, 32, 109, 97, 110, 105, 112, 117, 108, 97, 116, 101, 32, 116, 105, 109, 101, 32, 118, 97, 108, 117, 101, 115, 46, 10, 10, 84, 104, 101, 114, 101, 32, 97, 114, 101, 32, 116, 119, 111, 32, 115, 116, 97, 110, 100, 97, 114, 100, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 115, 32, 111, 102, 32, 116, 105, 109, 101, 46, 32, 32, 79, 110, 101, 32, 105, 115, 32, 116, 104, 101, 32, 110, 117, 109, 98, 101, 114, 10, 111, 102, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 44, 32, 105, 110, 32, 85, 84, 67, 32, 40, 97, 46, 107, 46, 97, 46, 32, 71, 77, 84, 41, 46, 32, 32, 73, 116, 32, 109, 97, 121, 32, 98, 101, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 10, 111, 114, 32, 97, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 110, 117, 109, 98, 101, 114, 32, 40, 116, 111, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 32, 102, 114, 97, 99, 116, 105, 111, 110, 115, 32, 111, 102, 32, 115, 101, 99, 111, 110, 100, 115, 41, 46, 10, 84, 104, 101, 32, 69, 112, 111, 99, 104, 32, 105, 115, 32, 115, 121, 115, 116, 101, 109, 45, 100, 101, 102, 105, 110, 101, 100, 59, 32, 111, 110, 32, 85, 110, 105, 120, 44, 32, 105, 116, 32, 105, 115, 32, 103, 101, 110, 101, 114, 97, 108, 108, 121, 32, 74, 97, 110, 117, 97, 114, 121, 32, 49, 115, 116, 44, 32, 49, 57, 55, 48, 46, 10, 84, 104, 101, 32, 97, 99, 116, 117, 97, 108, 32, 118, 97, 108, 117, 101, 32, 99, 97, 110, 32, 98, 101, 32, 114, 101, 116, 114, 105, 101, 118, 101, 100, 32, 98, 121, 32, 99, 97, 108, 108, 105, 110, 103, 32, 103, 109, 116, 105, 109, 101, 40, 48, 41, 46, 10, 10, 84, 104, 101, 32, 111, 116, 104, 101, 114, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 105, 115, 32, 97, 32, 116, 117, 112, 108, 101, 32, 111, 102, 32, 57, 32, 105, 110, 116, 101, 103, 101, 114, 115, 32, 103, 105, 118, 105, 110, 103, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 46, 10, 84, 104, 101, 32, 116, 117, 112, 108, 101, 32, 105, 116, 101, 109, 115, 32, 97, 114, 101, 58, 10, 32, 32, 121, 101, 97, 114, 32, 40, 102, 111, 117, 114, 32, 100, 105, 103, 105, 116, 115, 44, 32, 101, 46, 103, 46, 32, 49, 57, 57, 56, 41, 10, 32, 32, 109, 111, 110, 116, 104, 32, 40, 49, 45, 49, 50, 41, 10, 32, 32, 100, 97, 121, 32, 40, 49, 45, 51, 49, 41, 10, 32, 32, 104, 111, 117, 114, 115, 32, 40, 48, 45, 50, 51, 41, 10, 32, 32, 109, 105, 110, 117, 116, 101, 115, 32, 40, 48, 45, 53, 57, 41, 10, 32, 32, 115, 101, 99, 111, 110, 100, 115, 32, 40, 48, 45, 53, 57, 41, 10, 32, 32, 119, 101, 101, 107, 100, 97, 121, 32, 40, 48, 45, 54, 44, 32, 77, 111, 110, 100, 97, 121, 32, 105, 115, 32, 48, 41, 10, 32, 32, 74, 117, 108, 105, 97, 110, 32, 100, 97, 121, 32, 40, 100, 97, 121, 32, 105, 110, 32, 116, 104, 101, 32, 121, 101, 97, 114, 44, 32, 49, 45, 51, 54, 54, 41, 10, 32, 32, 68, 83, 84, 32, 40, 68, 97, 121, 108, 105, 103, 104, 116, 32, 83, 97, 118, 105, 110, 103, 115, 32, 84, 105, 109, 101, 41, 32, 102, 108, 97, 103, 32, 40, 45, 49, 44, 32, 48, 32, 111, 114, 32, 49, 41, 10, 73, 102, 32, 116, 104, 101, 32, 68, 83, 84, 32, 102, 108, 97, 103, 32, 105, 115, 32, 48, 44, 32, 116, 104, 101, 32, 116, 105, 109, 101, 32, 105, 115, 32, 103, 105, 118, 101, 110, 32, 105, 110, 32, 116, 104, 101, 32, 114, 101, 103, 117, 108, 97, 114, 32, 116, 105, 109, 101, 32, 122, 111, 110, 101, 59, 10, 105, 102, 32, 105, 116, 32, 105, 115, 32, 49, 44, 32, 116, 104, 101, 32, 116, 105, 109, 101, 32, 105, 115, 32, 103, 105, 118, 101, 110, 32, 105, 110, 32, 116, 104, 101, 32, 68, 83, 84, 32, 116, 105, 109, 101, 32, 122, 111, 110, 101, 59, 10, 105, 102, 32, 105, 116, 32, 105, 115, 32, 45, 49, 44, 32, 109, 107, 116, 105, 109, 101, 40, 41, 32, 115, 104, 111, 117, 108, 100, 32, 103, 117, 101, 115, 115, 32, 98, 97, 115, 101, 100, 32, 111, 110, 32, 116, 104, 101, 32, 100, 97, 116, 101, 32, 97, 110, 100, 32, 116, 105, 109, 101, 46, 10, 10, 86, 97, 114, 105, 97, 98, 108, 101, 115, 58, 10, 10, 116, 105, 109, 101, 122, 111, 110, 101, 32, 45, 45, 32, 100, 105, 102, 102, 101, 114, 101, 110, 99, 101, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 32, 98, 101, 116, 119, 101, 101, 110, 32, 85, 84, 67, 32, 97, 110, 100, 32, 108, 111, 99, 97, 108, 32, 115, 116, 97, 110, 100, 97, 114, 100, 32, 116, 105, 109, 101, 10, 97, 108, 116, 122, 111, 110, 101, 32, 45, 45, 32, 100, 105, 102, 102, 101, 114, 101, 110, 99, 101, 32, 105, 110, 32, 32, 115, 101, 99, 111, 110, 100, 115, 32, 98, 101, 116, 119, 101, 101, 110, 32, 85, 84, 67, 32, 97, 110, 100, 32, 108, 111, 99, 97, 108, 32, 68, 83, 84, 32, 116, 105, 109, 101, 10, 100, 97, 121, 108, 105, 103, 104, 116, 32, 45, 45, 32, 119, 104, 101, 116, 104, 101, 114, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 32, 115, 104, 111, 117, 108, 100, 32, 114, 101, 102, 108, 101, 99, 116, 32, 68, 83, 84, 10, 116, 122, 110, 97, 109, 101, 32, 45, 45, 32, 116, 117, 112, 108, 101, 32, 111, 102, 32, 40, 115, 116, 97, 110, 100, 97, 114, 100, 32, 116, 105, 109, 101, 32, 122, 111, 110, 101, 32, 110, 97, 109, 101, 44, 32, 68, 83, 84, 32, 116, 105, 109, 101, 32, 122, 111, 110, 101, 32, 110, 97, 109, 101, 41, 10, 10, 70, 117, 110, 99, 116, 105, 111, 110, 115, 58, 10, 10, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 32, 97, 115, 32, 97, 32, 102, 108, 111, 97, 116, 10, 99, 108, 111, 99, 107, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 67, 80, 85, 32, 116, 105, 109, 101, 32, 115, 105, 110, 99, 101, 32, 112, 114, 111, 99, 101, 115, 115, 32, 115, 116, 97, 114, 116, 32, 97, 115, 32, 97, 32, 102, 108, 111, 97, 116, 10, 115, 108, 101, 101, 112, 40, 41, 32, 45, 45, 32, 100, 101, 108, 97, 121, 32, 102, 111, 114, 32, 97, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 115, 101, 99, 111, 110, 100, 115, 32, 103, 105, 118, 101, 110, 32, 97, 115, 32, 97, 32, 102, 108, 111, 97, 116, 10, 103, 109, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 99, 111, 110, 118, 101, 114, 116, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 69, 112, 111, 99, 104, 32, 116, 111, 32, 85, 84, 67, 32, 116, 117, 112, 108, 101, 10, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 99, 111, 110, 118, 101, 114, 116, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 69, 112, 111, 99, 104, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 10, 97, 115, 99, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 99, 111, 110, 118, 101, 114, 116, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 116, 111, 32, 115, 116, 114, 105, 110, 103, 10, 99, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 99, 111, 110, 118, 101, 114, 116, 32, 116, 105, 109, 101, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 32, 116, 111, 32, 115, 116, 114, 105, 110, 103, 10, 109, 107, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 99, 111, 110, 118, 101, 114, 116, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 116, 111, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 69, 112, 111, 99, 104, 10, 115, 116, 114, 102, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 99, 111, 110, 118, 101, 114, 116, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 116, 111, 32, 115, 116, 114, 105, 110, 103, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 102, 111, 114, 109, 97, 116, 32, 115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 10, 115, 116, 114, 112, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 112, 97, 114, 115, 101, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 102, 111, 114, 109, 97, 116, 32, 115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 10, 116, 122, 115, 101, 116, 40, 41, 32, 45, 45, 32, 99, 104, 97, 110, 103, 101, 32, 116, 104, 101, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 122, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 80, 89, 84, 72, 79, 78, 89, 50, 75, 0 ], "i8", ALLOC_NORMAL);
    _initialized_b = allocate(1, "i1", ALLOC_NORMAL);
    __str60 = allocate([ 115, 116, 114, 117, 99, 116, 95, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_struct_time_type_fields] = __str2;
    HEAP[_struct_time_type_fields + 4] = __str3;
    HEAP[_struct_time_type_fields + 8] = __str4;
    HEAP[_struct_time_type_fields + 12] = __str5;
    HEAP[_struct_time_type_fields + 16] = __str6;
    HEAP[_struct_time_type_fields + 20] = __str7;
    HEAP[_struct_time_type_fields + 24] = __str8;
    HEAP[_struct_time_type_fields + 28] = __str9;
    HEAP[_struct_time_type_fields + 32] = __str10;
    HEAP[_struct_time_type_fields + 36] = __str11;
    HEAP[_struct_time_type_fields + 40] = __str12;
    HEAP[_struct_time_type_fields + 44] = __str13;
    HEAP[_struct_time_type_fields + 48] = __str14;
    HEAP[_struct_time_type_fields + 52] = __str15;
    HEAP[_struct_time_type_fields + 56] = __str16;
    HEAP[_struct_time_type_fields + 60] = __str17;
    HEAP[_struct_time_type_fields + 64] = __str18;
    HEAP[_struct_time_type_fields + 68] = __str19;
    HEAP[_struct_time_type_desc] = __str20;
    HEAP[_struct_time_type_desc + 4] = __str21;
    HEAP[_struct_time_type_desc + 8] = _struct_time_type_fields;
    HEAP[_time_methods] = __str44;
    HEAP[_time_methods + 4] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_time_methods + 12] = _time_doc;
    HEAP[_time_methods + 16] = __str51;
    HEAP[_time_methods + 20] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_time_methods + 28] = _clock_doc;
    HEAP[_time_methods + 32] = __str52;
    HEAP[_time_methods + 36] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_time_methods + 44] = _sleep_doc;
    HEAP[_time_methods + 48] = __str53;
    HEAP[_time_methods + 52] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_time_methods + 60] = _gmtime_doc;
    HEAP[_time_methods + 64] = __str54;
    HEAP[_time_methods + 68] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_time_methods + 76] = _localtime_doc;
    HEAP[_time_methods + 80] = __str39;
    HEAP[_time_methods + 84] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_time_methods + 92] = _asctime_doc;
    HEAP[_time_methods + 96] = __str41;
    HEAP[_time_methods + 100] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_time_methods + 108] = _ctime_doc;
    HEAP[_time_methods + 112] = __str55;
    HEAP[_time_methods + 116] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_time_methods + 124] = _mktime_doc;
    HEAP[_time_methods + 128] = __str56;
    HEAP[_time_methods + 132] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_time_methods + 140] = _strftime_doc;
    HEAP[_time_methods + 144] = __str57;
    HEAP[_time_methods + 148] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_time_methods + 156] = _strptime_doc;
    HEAP[_time_methods + 160] = __str58;
    HEAP[_time_methods + 164] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_time_methods + 172] = _tzset_doc;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
