"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 64;
  var $1___SIZE = 16;
  var $2___SIZE = 16;
  var $3___SIZE = 196;
  var $4___SIZE = 32;
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
  var $struct_PyStringObject___SIZE = 24;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_dlobject___SIZE = 12;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var __str7;
  var _dlobject_methods;
  var __str8;
  var _Dltype;
  var __str9;
  var __str10;
  var __str11;
  var _Dlerror;
  var __str12;
  var _dl_methods;
  var __str13;
  var __str14;
  var __str15;
  var __str16;
  var __str17;
  var __str18;
  var __str19;
  var __str20;
  var __str21;
  var __str22;
  function _newdlobject($handle) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $handle_addr;
      var $retval;
      var $0;
      var $xp;
      $handle_addr = $handle;
      var $1 = __PyObject_New(_Dltype);
      
      $xp = $1;
      
      
      if ($xp == 0) {
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
      
      
      
      HEAP[$xp + 8] = $handle_addr;
      
      
      $0 = $xp;
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
  function _dl_dealloc($xp) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $xp_addr;
      $xp_addr = $xp;
      
      
      
      
      if (HEAP[$xp_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $7 = HEAP[$xp_addr + 8];
      var $8 = _dlclose($7);
      __label__ = 2;
      break;
     case 2:
      
      
      _PyObject_Free($xp_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dl_close($xp) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $xp_addr;
      var $retval;
      var $0;
      $xp_addr = $xp;
      
      
      
      
      if (HEAP[$xp_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[$xp_addr + 8];
      var $9 = _dlclose($8);
      
      
      HEAP[$xp_addr + 8] = 0;
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
  function _dl_sym($xp, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $xp_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $name;
      var $func;
      $xp_addr = $xp;
      $args_addr = $args;
      
      
      
      
      
      
      
      var $8 = $args_addr;
      if ((HEAP[HEAP[$args_addr + 4] + 84] & 134217728) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $name = $8 + 20;
      
      
      
      var $15 = HEAP[$xp_addr + 8];
      
      var $17 = _dlsym($15, $name);
      
      $func = $17;
      
      
      if ($func == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      var $24 = HEAP[HEAP[$8 + 4] + 12];
      var $25 = HEAP[_PyExc_TypeError];
      var $26 = _PyErr_Format($25, __str, allocate([ $24, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 5;
      break;
     case 3:
      
      var $28 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $28;
      $0 = __Py_NoneStruct;
      __label__ = 5;
      break;
     case 4:
      
      
      var $31 = _PyInt_FromLong($func);
      $0 = $31;
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
  function _dl_call($xp, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $xp_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $name;
      var $func;
      var $alist = __stackBase__;
      var $res;
      var $i;
      var $n;
      var $v;
      $xp_addr = $xp;
      $args_addr = $args;
      
      var $2 = _PyTuple_Size($args_addr);
      $n = $2;
      
      
      if ($n <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($5, __str1);
      $0 = 0;
      __label__ = 21;
      break;
     case 2:
      
      var $7 = _PyTuple_GetItem($args_addr, 0);
      $name = $7;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$name + 4] + 84] & 134217728) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $15 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($15, __str2);
      $0 = 0;
      __label__ = 21;
      break;
     case 4:
      
      var $17 = _PyString_AsString($name);
      
      
      
      var $21 = HEAP[$xp_addr + 8];
      var $22 = _dlsym($21, $17);
      
      $func = $22;
      
      
      if ($func == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $26 = _dlerror();
      var $27 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($27, $26);
      $0 = 0;
      __label__ = 21;
      break;
     case 6:
      
      
      
      if ($n - 1 > 10) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $31 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($31, __str3);
      $0 = 0;
      __label__ = 21;
      break;
     case 8:
      $i = 1;
      __label__ = 17;
      break;
     case 9:
      
      
      var $34 = _PyTuple_GetItem($args_addr, $i);
      $v = $34;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v + 4] + 84] & 8388608) != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $43 = $i - 1;
      
      var $45 = _PyInt_AsLong($v);
      
      HEAP[$alist + $43 * 4] = $45;
      __label__ = 16;
      break;
     case 11:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v + 4] + 84] & 134217728) != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      var $55 = $i - 1;
      
      var $57 = _PyString_AsString($v);
      
      
      HEAP[$alist + $55 * 4] = $57;
      __label__ = 16;
      break;
     case 13:
      
      
      if ($v == __Py_NoneStruct) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      HEAP[$alist + ($i - 1) * 4] = 0;
      __label__ = 16;
      break;
     case 15:
      var $65 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($65, __str4);
      $0 = 0;
      __label__ = 21;
      break;
     case 16:
      
      var $67 = $i + 1;
      $i = $67;
      __label__ = 17;
      break;
     case 17:
      var $68 = $i;
      
      
      if ($68 < $n) {
        __label__ = 9;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      if ($68 <= 10) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      HEAP[$alist + ($i - 1) * 4] = 0;
      
      var $76 = $i + 1;
      $i = $76;
      
      if ($76 <= 10) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      var $79 = HEAP[$alist + 36];
      
      var $81 = HEAP[$alist + 32];
      
      var $83 = HEAP[$alist + 28];
      
      var $85 = HEAP[$alist + 24];
      
      var $87 = HEAP[$alist + 20];
      
      var $89 = HEAP[$alist + 16];
      
      var $91 = HEAP[$alist + 12];
      
      var $93 = HEAP[$alist + 8];
      
      var $95 = HEAP[$alist + 4];
      
      var $97 = HEAP[$alist];
      var $98 = $func;
      var $99 = FUNCTION_TABLE[$98]($97, $95, $93, $91, $89, $87, $85, $83, $81, $79);
      $res = $99;
      
      var $101 = _PyInt_FromLong($res);
      $0 = $101;
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
  function _dl_getattr($xp, $name) {
    
    var $xp_addr;
    var $name_addr;
    var $retval;
    var $0;
    $xp_addr = $xp;
    $name_addr = $name;
    
    
    
    var $4 = _Py_FindMethod(_dlobject_methods, $xp_addr, $name_addr);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _dl_open($self, $args) {
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
      var $name = __stackBase__;
      var $mode = __stackBase__ + 4;
      var $handle;
      var $errmsg;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str9, allocate([ $name, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$mode] = 1;
      __label__ = 4;
      break;
     case 2:
      _PyErr_Clear();
      
      var $5 = _PyArg_ParseTuple($args_addr, __str10, allocate([ $name, 0, 0, 0, $mode, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 9;
      break;
     case 4:
      var $7 = HEAP[$mode];
      var $8 = HEAP[$name];
      var $9 = _dlopen($8, $7);
      
      $handle = $9;
      
      if ($9 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $12 = _dlerror();
      $errmsg = $12;
      
      
      if ($errmsg == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $errmsg = __str11;
      __label__ = 7;
      break;
     case 7:
      var $15 = HEAP[_Dlerror];
      
      _PyErr_SetString($15, $errmsg);
      $0 = 0;
      __label__ = 9;
      break;
     case 8:
      
      var $18 = _newdlobject($handle);
      $0 = $18;
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
  function _insint($d, $name, $value) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $d_addr;
      var $name_addr;
      var $value_addr;
      var $v;
      $d_addr = $d;
      $name_addr = $name;
      $value_addr = $value;
      
      var $1 = _PyInt_FromLong($value_addr);
      $v = $1;
      
      
      if ($v == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      var $7 = _PyDict_SetItemString($d_addr, $name_addr, $v);
      
      if ($7 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      _PyErr_Clear();
      __label__ = 3;
      break;
     case 3:
      
      
      if ($v != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      var $14 = HEAP[$v] - 1;
      
      
      HEAP[$v] = $14;
      
      
      
      
      if (HEAP[$v] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $25 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$25]($v);
      __label__ = 6;
      break;
     case 6:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initdl() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $d;
      var $x;
      
      
      if (HEAP[_Py_Py3kWarningFlag] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $2 = HEAP[_PyExc_DeprecationWarning];
      var $3 = _PyErr_WarnEx($2, __str13, 2);
      
      if ($3 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[_Dltype + 4] = _PyType_Type;
      var $5 = _Py_InitModule4(__str14, _dl_methods, 0, 0, 1013);
      $m = $5;
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $8 = _PyModule_GetDict($m);
      $d = $8;
      var $9 = _PyErr_NewException(__str15, 0, 0);
      $x = $9;
      
      HEAP[_Dlerror] = $x;
      
      
      var $13 = _PyDict_SetItemString($d, __str16, $x);
      var $14 = _PyInt_FromLong(1);
      $x = $14;
      
      
      var $17 = _PyDict_SetItemString($d, __str17, $x);
      
      _insint($d, __str18, 2);
      
      _insint($d, __str19, 4);
      
      _insint($d, __str20, 256);
      
      _insint($d, __str21, 0);
      
      _insint($d, __str22, 4096);
      __label__ = 4;
      break;
     case 4:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initdl"] = _initdl;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _dl_call, 0, _dl_sym, 0, _dl_close, 0, _dl_dealloc, 0, _dl_getattr, 0, _dl_open, 0 ]);
  function run(args) {
    __str = allocate([ 101, 120, 112, 101, 99, 116, 101, 100, 32, 115, 116, 114, 105, 110, 103, 44, 32, 102, 111, 117, 110, 100, 32, 37, 46, 50, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 97, 116, 32, 108, 101, 97, 115, 116, 32, 97, 32, 110, 97, 109, 101, 32, 105, 115, 32, 110, 101, 101, 100, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 102, 117, 110, 99, 116, 105, 111, 110, 32, 110, 97, 109, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 116, 111, 111, 32, 109, 97, 110, 121, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 40, 109, 97, 120, 32, 49, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 116, 44, 32, 115, 116, 114, 105, 110, 103, 32, 111, 114, 32, 78, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 99, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 115, 121, 109, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 99, 108, 111, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    _dlobject_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str8 = allocate([ 100, 108, 46, 100, 108, 0 ], "i8", ALLOC_NORMAL);
    _Dltype = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str9 = allocate([ 122, 58, 111, 112, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 122, 105, 58, 111, 112, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 100, 108, 111, 112, 101, 110, 40, 41, 32, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _Dlerror = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str12 = allocate([ 111, 112, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    _dl_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str13 = allocate([ 116, 104, 101, 32, 100, 108, 32, 109, 111, 100, 117, 108, 101, 32, 104, 97, 115, 32, 98, 101, 101, 110, 32, 114, 101, 109, 111, 118, 101, 100, 32, 105, 110, 32, 80, 121, 116, 104, 111, 110, 32, 51, 46, 48, 59, 32, 117, 115, 101, 32, 116, 104, 101, 32, 99, 116, 121, 112, 101, 115, 32, 109, 111, 100, 117, 108, 101, 32, 105, 110, 115, 116, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 100, 108, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 100, 108, 46, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 82, 84, 76, 68, 95, 76, 65, 90, 89, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 82, 84, 76, 68, 95, 78, 79, 87, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 82, 84, 76, 68, 95, 78, 79, 76, 79, 65, 68, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 82, 84, 76, 68, 95, 71, 76, 79, 66, 65, 76, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 82, 84, 76, 68, 95, 76, 79, 67, 65, 76, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 82, 84, 76, 68, 95, 78, 79, 68, 69, 76, 69, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_dlobject_methods] = __str5;
    HEAP[_dlobject_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_dlobject_methods + 16] = __str6;
    HEAP[_dlobject_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_dlobject_methods + 32] = __str7;
    HEAP[_dlobject_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_Dltype + 12] = __str8;
    HEAP[_Dltype + 24] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_Dltype + 32] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_dl_methods] = __str12;
    HEAP[_dl_methods + 4] = FUNCTION_TABLE_OFFSET + 12;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
