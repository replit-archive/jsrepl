"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 16;
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
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _S_ident_o;
  var _S_log_open_b;
  var __str;
  var __str1;
  var _keywords_8364;
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
  var _syslog_methods;
  var __str17;
  var __str18;
  var __str19;
  var __str20;
  var __str21;
  var __str22;
  var __str23;
  var __str24;
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
  function _syslog_get_argv() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval;
      var $0;
      var $argv_len;
      var $scriptobj;
      var $atslash;
      var $argv;
      var $1 = _PySys_GetObject(__str);
      $argv = $1;
      
      
      if ($argv == 0) {
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
      
      var $5 = _PyList_Size($argv);
      $argv_len = $5;
      
      var $7 = $argv_len == -1;
      if ($7) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyErr_Clear();
      $0 = 0;
      __label__ = 13;
      break;
     case 4:
      
      
      if ($argv_len == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 13;
      break;
     case 6:
      
      var $11 = _PyList_GetItem($argv, 0);
      $scriptobj = $11;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$scriptobj + 4] + 84] & 134217728) == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 13;
      break;
     case 8:
      
      
      
      
      
      if (HEAP[$scriptobj + 8] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = 0;
      __label__ = 13;
      break;
     case 10:
      
      var $25 = _PyString_AsString($scriptobj);
      var $26 = _strrchr($25, 47);
      $atslash = $26;
      
      
      if ($atslash != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      var $31 = _PyString_FromString($atslash + 1);
      $0 = $31;
      __label__ = 13;
      break;
     case 12:
      
      
      
      var $35 = HEAP[$scriptobj] + 1;
      
      
      HEAP[$scriptobj] = $35;
      
      $0 = $scriptobj;
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
  function _syslog_openlog($self, $args, $kwds) {
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
      var $iftmp_11;
      var $0;
      var $logopt = __stackBase__;
      var $facility = __stackBase__ + 4;
      var $new_S_ident_o = __stackBase__ + 8;
      $self_addr = $self;
      $args_addr = $args;
      $kwds_addr = $kwds;
      HEAP[$logopt] = 0;
      HEAP[$facility] = 8;
      HEAP[$new_S_ident_o] = 0;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwds_addr, __str1, _keywords_8364, allocate([ $new_S_ident_o, 0, 0, 0, $logopt, 0, 0, 0, $facility, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 12;
      break;
     case 2:
      
      
      if (HEAP[$new_S_ident_o] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $10 = HEAP[HEAP[$new_S_ident_o]] + 1;
      var $11 = HEAP[$new_S_ident_o];
      HEAP[$11] = $10;
      
      
      if (HEAP[$new_S_ident_o] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $13 = _syslog_get_argv();
      HEAP[$new_S_ident_o] = $13;
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[_S_ident_o] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      var $16 = HEAP[_S_ident_o];
      
      
      var $19 = HEAP[$16] - 1;
      var $20 = $16;
      HEAP[$20] = $19;
      
      
      
      if (HEAP[$16] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $28 = HEAP[HEAP[HEAP[_S_ident_o] + 4] + 24];
      var $29 = HEAP[_S_ident_o];
      FUNCTION_TABLE[$28]($29);
      __label__ = 8;
      break;
     case 8:
      var $30 = HEAP[$new_S_ident_o];
      HEAP[_S_ident_o] = $30;
      var $31 = HEAP[$facility];
      var $32 = HEAP[$logopt];
      
      if ($30 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $34 = HEAP[_S_ident_o];
      var $35 = _PyString_AsString($34);
      $iftmp_11 = $35;
      __label__ = 11;
      break;
     case 10:
      $iftmp_11 = 0;
      __label__ = 11;
      break;
     case 11:
      
      _openlog($iftmp_11, $32, $31);
      HEAP[_S_log_open_b] = 1;
      
      var $38 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $38;
      $0 = __Py_NoneStruct;
      __label__ = 12;
      break;
     case 12:
      
      $retval = $0;
      var $retval13 = $retval;
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _syslog_syslog($self, $args) {
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
      var $message = __stackBase__;
      var $priority = __stackBase__ + 4;
      var $openargs;
      var $openlog_ret;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$priority] = 6;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str5, allocate([ $priority, 0, 0, 0, $message, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      _PyErr_Clear();
      
      var $5 = _PyArg_ParseTuple($args_addr, __str6, allocate([ $message, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
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
      
      
      
      if (HEAP[_S_log_open_b] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 4:
      var $9 = _PyTuple_New(0);
      $openargs = $9;
      
      
      if ($openargs != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 5:
      
      
      var $14 = _syslog_openlog($self_addr, $openargs, 0);
      $openlog_ret = $14;
      
      
      if ($openlog_ret != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      var $20 = HEAP[$openlog_ret] - 1;
      
      
      HEAP[$openlog_ret] = $20;
      
      
      
      
      if (HEAP[$openlog_ret] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $31 = HEAP[HEAP[$openlog_ret + 4] + 24];
      
      FUNCTION_TABLE[$31]($openlog_ret);
      __label__ = 8;
      break;
     case 8:
      
      
      
      var $36 = HEAP[$openargs] - 1;
      
      
      HEAP[$openargs] = $36;
      
      
      
      
      if (HEAP[$openargs] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $47 = HEAP[HEAP[$openargs + 4] + 24];
      
      FUNCTION_TABLE[$47]($openargs);
      __label__ = 10;
      break;
     case 10:
      var $49 = HEAP[$message];
      var $50 = HEAP[$priority];
      _syslog($50, __str7, allocate([ $49, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      var $52 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $52;
      $0 = __Py_NoneStruct;
      __label__ = 11;
      break;
     case 11:
      
      $retval = $0;
      var $retval11 = $retval;
      STACKTOP = __stackBase__;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _syslog_closelog($self, $unused) {
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
      
      
      
      if (HEAP[_S_log_open_b] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      _closelog();
      
      
      if (HEAP[_S_ident_o] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      var $5 = HEAP[_S_ident_o];
      
      
      var $8 = HEAP[$5] - 1;
      var $9 = $5;
      HEAP[$9] = $8;
      
      
      
      if (HEAP[$5] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $17 = HEAP[HEAP[HEAP[_S_ident_o] + 4] + 24];
      var $18 = HEAP[_S_ident_o];
      FUNCTION_TABLE[$17]($18);
      __label__ = 4;
      break;
     case 4:
      HEAP[_S_ident_o] = 0;
      HEAP[_S_log_open_b] = 0;
      __label__ = 5;
      break;
     case 5:
      
      var $20 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $20;
      $0 = __Py_NoneStruct;
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _syslog_setlogmask($self, $args) {
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
      var $maskpri = __stackBase__;
      var $omaskpri;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str8, allocate([ $maskpri, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$maskpri];
      var $5 = _setlogmask($4);
      $omaskpri = $5;
      
      var $7 = _PyInt_FromLong($omaskpri);
      $0 = $7;
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
  function _syslog_log_mask($self, $args) {
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
      var $mask;
      var $pri = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str9, allocate([ $pri, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      $mask = 1 << HEAP[$pri];
      
      var $7 = _PyInt_FromLong($mask);
      $0 = $7;
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
  function _syslog_log_upto($self, $args) {
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
      var $mask;
      var $pri = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str10, allocate([ $pri, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      $mask = (1 << HEAP[$pri] + 1) - 1;
      
      var $9 = _PyInt_FromLong($mask);
      $0 = $9;
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
  function _initsyslog() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $0 = _Py_InitModule4(__str13, _syslog_methods, 0, 0, 1013);
      $m = $0;
      
      
      if ($m == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $4 = _PyModule_AddIntConstant($m, __str17, 0);
      
      var $6 = _PyModule_AddIntConstant($m, __str18, 1);
      
      var $8 = _PyModule_AddIntConstant($m, __str19, 2);
      
      var $10 = _PyModule_AddIntConstant($m, __str20, 3);
      
      var $12 = _PyModule_AddIntConstant($m, __str21, 4);
      
      var $14 = _PyModule_AddIntConstant($m, __str22, 5);
      
      var $16 = _PyModule_AddIntConstant($m, __str23, 6);
      
      var $18 = _PyModule_AddIntConstant($m, __str24, 7);
      
      var $20 = _PyModule_AddIntConstant($m, __str25, 1);
      
      var $22 = _PyModule_AddIntConstant($m, __str26, 2);
      
      var $24 = _PyModule_AddIntConstant($m, __str27, 8);
      
      var $26 = _PyModule_AddIntConstant($m, __str28, 16);
      
      var $28 = _PyModule_AddIntConstant($m, __str29, 32);
      
      var $30 = _PyModule_AddIntConstant($m, __str30, 0);
      
      var $32 = _PyModule_AddIntConstant($m, __str31, 8);
      
      var $34 = _PyModule_AddIntConstant($m, __str32, 16);
      
      var $36 = _PyModule_AddIntConstant($m, __str33, 24);
      
      var $38 = _PyModule_AddIntConstant($m, __str34, 32);
      
      var $40 = _PyModule_AddIntConstant($m, __str35, 48);
      
      var $42 = _PyModule_AddIntConstant($m, __str36, 128);
      
      var $44 = _PyModule_AddIntConstant($m, __str37, 136);
      
      var $46 = _PyModule_AddIntConstant($m, __str38, 144);
      
      var $48 = _PyModule_AddIntConstant($m, __str39, 152);
      
      var $50 = _PyModule_AddIntConstant($m, __str40, 160);
      
      var $52 = _PyModule_AddIntConstant($m, __str41, 168);
      
      var $54 = _PyModule_AddIntConstant($m, __str42, 176);
      
      var $56 = _PyModule_AddIntConstant($m, __str43, 184);
      
      var $58 = _PyModule_AddIntConstant($m, __str44, 40);
      
      var $60 = _PyModule_AddIntConstant($m, __str45, 72);
      
      var $62 = _PyModule_AddIntConstant($m, __str46, 64);
      
      var $64 = _PyModule_AddIntConstant($m, __str47, 56);
      __label__ = 2;
      break;
     case 2:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initsyslog"] = _initsyslog;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _syslog_openlog, 0, _syslog_closelog, 0, _syslog_syslog, 0, _syslog_setlogmask, 0, _syslog_log_mask, 0, _syslog_log_upto, 0 ]);
  function run(args) {
    _S_ident_o = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _S_log_open_b = allocate(1, "i1", ALLOC_NORMAL);
    __str = allocate([ 97, 114, 103, 118, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 124, 83, 108, 108, 58, 111, 112, 101, 110, 108, 111, 103, 0 ], "i8", ALLOC_NORMAL);
    _keywords_8364 = allocate(16, "i8*", ALLOC_NORMAL);
    __str2 = allocate([ 105, 100, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 108, 111, 103, 111, 112, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 102, 97, 99, 105, 108, 105, 116, 121, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 105, 115, 59, 91, 112, 114, 105, 111, 114, 105, 116, 121, 44, 93, 32, 109, 101, 115, 115, 97, 103, 101, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 115, 59, 91, 112, 114, 105, 111, 114, 105, 116, 121, 44, 93, 32, 109, 101, 115, 115, 97, 103, 101, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 37, 115, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 108, 59, 109, 97, 115, 107, 32, 102, 111, 114, 32, 112, 114, 105, 111, 114, 105, 116, 121, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 108, 58, 76, 79, 71, 95, 77, 65, 83, 75, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 108, 58, 76, 79, 71, 95, 85, 80, 84, 79, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 111, 112, 101, 110, 108, 111, 103, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 99, 108, 111, 115, 101, 108, 111, 103, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 115, 121, 115, 108, 111, 103, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 115, 101, 116, 108, 111, 103, 109, 97, 115, 107, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 76, 79, 71, 95, 77, 65, 83, 75, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 76, 79, 71, 95, 85, 80, 84, 79, 0 ], "i8", ALLOC_NORMAL);
    _syslog_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str17 = allocate([ 76, 79, 71, 95, 69, 77, 69, 82, 71, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 76, 79, 71, 95, 65, 76, 69, 82, 84, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 76, 79, 71, 95, 67, 82, 73, 84, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 76, 79, 71, 95, 69, 82, 82, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 76, 79, 71, 95, 87, 65, 82, 78, 73, 78, 71, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 76, 79, 71, 95, 78, 79, 84, 73, 67, 69, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 76, 79, 71, 95, 73, 78, 70, 79, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 76, 79, 71, 95, 68, 69, 66, 85, 71, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 76, 79, 71, 95, 80, 73, 68, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 76, 79, 71, 95, 67, 79, 78, 83, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 76, 79, 71, 95, 78, 68, 69, 76, 65, 89, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 76, 79, 71, 95, 78, 79, 87, 65, 73, 84, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 76, 79, 71, 95, 80, 69, 82, 82, 79, 82, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 76, 79, 71, 95, 75, 69, 82, 78, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 76, 79, 71, 95, 85, 83, 69, 82, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 76, 79, 71, 95, 77, 65, 73, 76, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 76, 79, 71, 95, 68, 65, 69, 77, 79, 78, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 76, 79, 71, 95, 65, 85, 84, 72, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 76, 79, 71, 95, 76, 80, 82, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 76, 79, 71, 95, 76, 79, 67, 65, 76, 48, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 76, 79, 71, 95, 76, 79, 67, 65, 76, 49, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 76, 79, 71, 95, 76, 79, 67, 65, 76, 50, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 76, 79, 71, 95, 76, 79, 67, 65, 76, 51, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 76, 79, 71, 95, 76, 79, 67, 65, 76, 52, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 76, 79, 71, 95, 76, 79, 67, 65, 76, 53, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 76, 79, 71, 95, 76, 79, 67, 65, 76, 54, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 76, 79, 71, 95, 76, 79, 67, 65, 76, 55, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 76, 79, 71, 95, 83, 89, 83, 76, 79, 71, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 76, 79, 71, 95, 67, 82, 79, 78, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 76, 79, 71, 95, 85, 85, 67, 80, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 76, 79, 71, 95, 78, 69, 87, 83, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_keywords_8364] = __str2;
    HEAP[_keywords_8364 + 4] = __str3;
    HEAP[_keywords_8364 + 8] = __str4;
    HEAP[_syslog_methods] = __str11;
    HEAP[_syslog_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_syslog_methods + 16] = __str12;
    HEAP[_syslog_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_syslog_methods + 32] = __str13;
    HEAP[_syslog_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_syslog_methods + 48] = __str14;
    HEAP[_syslog_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_syslog_methods + 64] = __str15;
    HEAP[_syslog_methods + 68] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_syslog_methods + 80] = __str16;
    HEAP[_syslog_methods + 84] = FUNCTION_TABLE_OFFSET + 12;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
