"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 56;
  var $1___SIZE = 8;
  var $2___SIZE = 48;
  var $3___SIZE = 80;
  var $4___SIZE = 16;
  var $5___SIZE = 196;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_ProfilerContext___SIZE = 24;
  var $struct_ProfilerContext___FLATTENER = [ 0, 8, 16, 20 ];
  var $struct_ProfilerEntry___SIZE = 48;
  var $struct_ProfilerEntry___FLATTENER = [ 0, 12, 16, 24, 32, 36, 40, 44 ];
  var $struct_ProfilerObject___SIZE = 36;
  var $struct_ProfilerSubEntry___SIZE = 40;
  var $struct_ProfilerSubEntry___FLATTENER = [ 0, 12, 20, 28, 32, 36 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyCFunctionObject___SIZE = 20;
  var $struct_PyCodeObject___SIZE = 72;
  var $struct_PyFrameObject___SIZE = 316;
  var $struct_PyFrameObject___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 312 ];
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyInterpreterState___SIZE = 40;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyStructSequence_Desc___SIZE = 16;
  var $struct_PyStructSequence_Field___SIZE = 8;
  var $struct_PyThreadState___SIZE = 84;
  var $struct_PyTryBlock___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_rotating_node_t___SIZE = 12;
  var $struct_statscollector_t___SIZE = 16;
  var $struct_timeval___SIZE = 8;
  var _empty_tuple;
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
  var _profiler_entry_fields;
  var __str17;
  var __str18;
  var __str19;
  var __str20;
  var __str21;
  var _profiler_subentry_fields;
  var _profiler_entry_desc;
  var __str22;
  var _profiler_subentry_desc;
  var __str23;
  var _StatsSubEntryType;
  var __str24;
  var _StatsEntryType;
  var __str25;
  var _getstats_doc;
  var _enable_doc;
  var __str26;
  var _kwlist_9138;
  var __str27;
  var __str28;
  var _disable_doc;
  var _clear_doc;
  var __str29;
  var _kwlist_9228;
  var __str30;
  var __str31;
  var __str32;
  var __str33;
  var __str34;
  var __str35;
  var _profiler_methods;
  var _profiler_doc;
  var __str36;
  var _PyProfiler_Type;
  var _moduleMethods;
  var __str37;
  var __str38;
  var __str39;
  var _initialized_b;
  var __str40;
  var __str41;
  var _random_value;
  var _random_stream;
  function _hpTimer() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    
    var $retval;
    var $0;
    var $tv = __stackBase__;
    var $ret;
    var $1 = _gettimeofday($tv, 0);
    
    
    
    $ret = HEAP[$tv];
    
    
    
    
    
    var $10 = HEAP[$tv + 4] + $ret * 1e6;
    $ret = $10;
    
    $0 = $ret;
    
    $retval = $0;
    var $retval1 = $retval;
    STACKTOP = __stackBase__;
    return $retval1;
  }
  function _hpTimerUnit() {
    
    var $retval;
    var $0;
    $0 = 1e-6;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _CallExternalTimer($pObj) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr;
      var $retval;
      var $0;
      var $result;
      var $o;
      var $val;
      $pObj_addr = $pObj;
      var $1 = HEAP[_empty_tuple];
      
      
      var $4 = HEAP[$pObj_addr + 24];
      var $5 = _PyObject_Call($4, $1, 0);
      $o = $5;
      
      
      var $8 = $pObj_addr;
      if ($o == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $10 = HEAP[$8 + 24];
      _PyErr_WriteUnraisable($10);
      $0 = 0;
      __label__ = 10;
      break;
     case 2:
      
      
      
      var $14 = $o;
      if (HEAP[$8 + 28] > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $15 = _PyLong_AsLongLong($14);
      $result = $15;
      __label__ = 5;
      break;
     case 4:
      var $16 = _PyFloat_AsDouble($14);
      $val = $16;
      
      
      var $19 = cRound($val * 4294967296);
      $result = $19;
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $23 = HEAP[$o] - 1;
      
      
      HEAP[$o] = $23;
      
      
      
      
      if (HEAP[$o] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $34 = HEAP[HEAP[$o + 4] + 24];
      
      FUNCTION_TABLE[$34]($o);
      __label__ = 7;
      break;
     case 7:
      var $36 = _PyErr_Occurred();
      
      if ($36 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      var $40 = HEAP[$pObj_addr + 24];
      _PyErr_WriteUnraisable($40);
      $0 = 0;
      __label__ = 10;
      break;
     case 9:
      
      $0 = $result;
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
  function _normalizeUserObj($obj) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $obj_addr;
      var $retval;
      var $0;
      var $fn;
      var $mod;
      var $modname;
      var $self;
      var $name;
      var $mo;
      var $res;
      $obj_addr = $obj;
      
      
      
      
      var $5 = $obj_addr;
      if (HEAP[$obj_addr + 4] != _PyCFunction_Type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$5] + 1;
      
      
      HEAP[$obj_addr] = $8;
      
      $0 = $obj_addr;
      __label__ = 26;
      break;
     case 2:
      
      $fn = $5;
      
      
      
      
      var $17 = $fn;
      if (HEAP[$fn + 12] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 3:
      
      
      $mod = HEAP[$17 + 16];
      
      
      if ($mod == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      var $_pr = $mod;
      if ((HEAP[HEAP[$mod + 4] + 84] & 134217728) == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      $modname = $_pr + 20;
      __label__ = 12;
      break;
     case 6:
      
      if ($_pr == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[$mod + 4] == _PyModule_Type) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      var $39 = HEAP[$mod + 4];
      var $40 = _PyType_IsSubtype($39, _PyModule_Type);
      
      if ($40 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      var $43 = _PyModule_GetName($mod);
      $modname = $43;
      
      if ($43 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      _PyErr_Clear();
      $modname = __str;
      __label__ = 12;
      break;
     case 11:
      $modname = __str;
      __label__ = 12;
      break;
     case 12:
      
      var $46 = _strcmp($modname, __str);
      
      
      
      
      
      var $52 = HEAP[HEAP[$fn + 8]];
      if ($46 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      var $54 = _PyString_FromFormat(__str1, allocate([ $modname, 0, 0, 0, $52, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $54;
      __label__ = 26;
      break;
     case 14:
      var $55 = _PyString_FromFormat(__str2, allocate([ $52, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $55;
      __label__ = 26;
      break;
     case 15:
      
      
      $self = HEAP[$17 + 12];
      
      
      
      
      var $62 = HEAP[HEAP[$fn + 8]];
      var $63 = _PyString_FromString($62);
      $name = $63;
      
      
      if ($name != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 16:
      
      
      var $68 = HEAP[$self + 4];
      
      var $70 = __PyType_Lookup($68, $name);
      $mo = $70;
      
      
      if ($mo != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      var $76 = HEAP[$mo] + 1;
      
      
      HEAP[$mo] = $76;
      __label__ = 18;
      break;
     case 18:
      
      
      
      var $82 = HEAP[$name] - 1;
      
      
      HEAP[$name] = $82;
      
      
      
      
      if (HEAP[$name] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $93 = HEAP[HEAP[$name + 4] + 24];
      
      FUNCTION_TABLE[$93]($name);
      __label__ = 20;
      break;
     case 20:
      
      
      if ($mo != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 21:
      
      var $98 = _PyObject_Repr($mo);
      $res = $98;
      
      
      
      var $102 = HEAP[$mo] - 1;
      
      
      HEAP[$mo] = $102;
      
      
      
      
      if (HEAP[$mo] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $113 = HEAP[HEAP[$mo + 4] + 24];
      
      FUNCTION_TABLE[$113]($mo);
      __label__ = 23;
      break;
     case 23:
      
      
      if ($res != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      $0 = $res;
      __label__ = 26;
      break;
     case 25:
      _PyErr_Clear();
      
      
      
      
      var $122 = HEAP[HEAP[$fn + 8]];
      var $123 = _PyString_FromFormat(__str3, allocate([ $122, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $123;
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
  function _newProfilerEntry($pObj, $key, $userObj) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr;
      var $key_addr;
      var $userObj_addr;
      var $retval;
      var $0;
      var $self;
      $pObj_addr = $pObj;
      $key_addr = $key;
      $userObj_addr = $userObj;
      var $1 = _malloc(48);
      
      $self = $1;
      
      
      if ($self == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[$pObj_addr + 20] | 256;
      
      
      HEAP[$pObj_addr + 20] = $8;
      $0 = 0;
      __label__ = 5;
      break;
     case 2:
      
      var $12 = _normalizeUserObj($userObj_addr);
      $userObj_addr = $12;
      
      
      if ($userObj_addr == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyErr_Clear();
      
      
      _free($self);
      
      
      
      var $20 = HEAP[$pObj_addr + 20] | 256;
      
      
      HEAP[$pObj_addr + 20] = $20;
      $0 = 0;
      __label__ = 5;
      break;
     case 4:
      
      
      
      
      HEAP[$self] = $key_addr;
      
      
      
      HEAP[$self + 12] = $userObj_addr;
      
      
      HEAP[$self + 16] = 0;
      
      
      HEAP[$self + 24] = 0;
      
      
      HEAP[$self + 32] = 0;
      
      
      HEAP[$self + 36] = 0;
      
      
      HEAP[$self + 40] = 0;
      
      
      HEAP[$self + 44] = 0;
      
      
      
      
      _RotatingTree_Add($pObj_addr + 8, $self);
      
      $0 = $self;
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
  function _getEntry($pObj, $key) {
    
    var $pObj_addr;
    var $key_addr;
    var $retval;
    var $0;
    $pObj_addr = $pObj;
    $key_addr = $key;
    
    
    
    var $4 = _RotatingTree_Get($pObj_addr + 8, $key_addr);
    
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _getSubEntry($pObj, $caller, $entry1) {
    
    var $pObj_addr;
    var $caller_addr;
    var $entry_addr;
    var $retval;
    var $0;
    $pObj_addr = $pObj;
    $caller_addr = $caller;
    $entry_addr = $entry1;
    
    
    
    
    var $5 = _RotatingTree_Get($caller_addr + 44, $entry_addr);
    
    $0 = $5;
    
    $retval = $0;
    var $retval2 = $retval;
    return $retval2;
  }
  function _newSubEntry($pObj, $caller, $entry1) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr;
      var $caller_addr;
      var $entry_addr;
      var $retval;
      var $0;
      var $self;
      $pObj_addr = $pObj;
      $caller_addr = $caller;
      $entry_addr = $entry1;
      var $1 = _malloc(40);
      
      $self = $1;
      
      
      if ($self == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[$pObj_addr + 20] | 256;
      
      
      HEAP[$pObj_addr + 20] = $8;
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      
      HEAP[$self] = $entry_addr;
      
      
      HEAP[$self + 12] = 0;
      
      
      HEAP[$self + 20] = 0;
      
      
      HEAP[$self + 28] = 0;
      
      
      HEAP[$self + 32] = 0;
      
      
      HEAP[$self + 36] = 0;
      
      
      
      
      _RotatingTree_Add($caller_addr + 44, $self);
      
      $0 = $self;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _freeSubEntry($header, $arg) {
    
    var $header_addr;
    var $arg_addr;
    var $retval;
    var $0;
    var $subentry;
    $header_addr = $header;
    $arg_addr = $arg;
    
    
    $subentry = $header_addr;
    
    
    _free($subentry);
    $0 = 0;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _freeEntry($header, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $header_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $entry1;
      $header_addr = $header;
      $arg_addr = $arg;
      
      
      $entry1 = $header_addr;
      
      
      var $5 = HEAP[$entry1 + 44];
      var $6 = _RotatingTree_Enum($5, FUNCTION_TABLE_OFFSET + 2, 0);
      
      
      var $9 = HEAP[$entry1 + 12];
      
      
      var $12 = HEAP[$9] - 1;
      var $13 = $9;
      HEAP[$13] = $12;
      
      
      
      if (HEAP[$9] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$entry1 + 12] + 4] + 24];
      
      
      var $26 = HEAP[$entry1 + 12];
      FUNCTION_TABLE[$23]($26);
      __label__ = 2;
      break;
     case 2:
      
      
      _free($entry1);
      $0 = 0;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _clearEntries($pObj) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr;
      var $c;
      $pObj_addr = $pObj;
      
      
      var $2 = HEAP[$pObj_addr + 8];
      var $3 = _RotatingTree_Enum($2, FUNCTION_TABLE_OFFSET + 4, 0);
      
      
      HEAP[$pObj_addr + 8] = 0;
      
      
      
      
      if (HEAP[$pObj_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $13 = HEAP[$pObj_addr + 12];
      _free($13);
      
      
      HEAP[$pObj_addr + 12] = 0;
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      
      var $21 = $pObj_addr + 16;
      if (HEAP[$pObj_addr + 16] != 0) {
        __lastLabel__ = 2;
        __label__ = 3;
        break;
      } else {
        __lastLabel__ = 2;
        __label__ = 4;
        break;
      }
     case 3:
      var $22 = __lastLabel__ == 3 ? $36 : $21;
      
      $c = HEAP[$22];
      
      
      var $26 = HEAP[$c + 16];
      
      
      HEAP[$pObj_addr + 16] = $26;
      
      
      _free($c);
      
      
      
      
      
      var $36 = $pObj_addr + 16;
      if (HEAP[$pObj_addr + 16] != 0) {
        __lastLabel__ = 3;
        __label__ = 3;
        break;
      } else {
        __lastLabel__ = 3;
        __label__ = 4;
        break;
      }
     case 4:
      var $_lcssa = __lastLabel__ == 2 ? $21 : $36;
      HEAP[$_lcssa] = 0;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initContext($pObj, $self, $entry1) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr;
      var $self_addr;
      var $entry_addr;
      var $iftmp_2;
      var $caller;
      var $subentry;
      $pObj_addr = $pObj;
      $self_addr = $self;
      $entry_addr = $entry1;
      
      
      
      HEAP[$self_addr + 20] = $entry_addr;
      
      
      HEAP[$self_addr + 8] = 0;
      
      
      var $7 = HEAP[$pObj_addr + 12];
      
      
      HEAP[$self_addr + 16] = $7;
      
      
      
      HEAP[$pObj_addr + 12] = $self_addr;
      
      
      
      var $16 = HEAP[$entry_addr + 40] + 1;
      
      
      HEAP[$entry_addr + 40] = $16;
      
      
      
      
      
      if ((HEAP[$pObj_addr + 20] & 2) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$self_addr + 16] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      
      $caller = HEAP[HEAP[$self_addr + 16] + 20];
      
      
      
      var $36 = _getSubEntry($pObj_addr, $caller, $entry_addr);
      $subentry = $36;
      
      
      if ($subentry == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $42 = _newSubEntry($pObj_addr, $caller, $entry_addr);
      $subentry = $42;
      
      if ($42 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      var $47 = HEAP[$subentry + 36] + 1;
      
      
      HEAP[$subentry + 36] = $47;
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[$pObj_addr + 24] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $55 = _CallExternalTimer($pObj_addr);
      $iftmp_2 = $55;
      __label__ = 8;
      break;
     case 7:
      var $56 = _hpTimer();
      $iftmp_2 = $56;
      __label__ = 8;
      break;
     case 8:
      
      
      
      HEAP[$self_addr] = $iftmp_2;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Stop($pObj, $self, $entry1) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr;
      var $self_addr;
      var $entry_addr;
      var $iftmp_3;
      var $tt;
      var $it;
      var $caller;
      var $subentry;
      $pObj_addr = $pObj;
      $self_addr = $self;
      $entry_addr = $entry1;
      
      
      
      
      if (HEAP[$pObj_addr + 24] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $5 = _CallExternalTimer($pObj_addr);
      $iftmp_3 = $5;
      __label__ = 3;
      break;
     case 2:
      var $6 = _hpTimer();
      $iftmp_3 = $6;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      $tt = $iftmp_3 - HEAP[$self_addr];
      
      
      
      
      
      $it = $tt - HEAP[$self_addr + 8];
      
      
      
      
      if (HEAP[$self_addr + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      var $30 = $tt + HEAP[HEAP[$self_addr + 16] + 8];
      var $31 = HEAP[$self_addr + 16] + 8;
      HEAP[$31] = $30;
      __label__ = 5;
      break;
     case 5:
      
      
      var $34 = HEAP[$self_addr + 16];
      
      
      HEAP[$pObj_addr + 12] = $34;
      
      
      
      var $40 = HEAP[$entry_addr + 40] - 1;
      
      
      HEAP[$entry_addr + 40] = $40;
      
      
      
      
      var $47 = $entry_addr;
      if (HEAP[$entry_addr + 40] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $51 = $tt + HEAP[$47 + 16];
      
      
      HEAP[$entry_addr + 16] = $51;
      __label__ = 8;
      break;
     case 7:
      
      
      var $56 = HEAP[$47 + 36] + 1;
      
      
      HEAP[$entry_addr + 36] = $56;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      var $63 = $it + HEAP[$entry_addr + 24];
      
      
      HEAP[$entry_addr + 24] = $63;
      
      
      
      var $69 = HEAP[$entry_addr + 32] + 1;
      
      
      HEAP[$entry_addr + 32] = $69;
      
      
      
      
      
      if ((HEAP[$pObj_addr + 20] & 2) != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[$self_addr + 16] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 10:
      
      
      
      
      
      $caller = HEAP[HEAP[$self_addr + 16] + 20];
      
      
      
      var $89 = _getSubEntry($pObj_addr, $caller, $entry_addr);
      $subentry = $89;
      
      
      if ($subentry != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      
      
      var $95 = HEAP[$subentry + 36] - 1;
      
      
      HEAP[$subentry + 36] = $95;
      
      
      
      
      var $102 = $subentry;
      if (HEAP[$subentry + 36] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      var $106 = $tt + HEAP[$102 + 12];
      
      
      HEAP[$subentry + 12] = $106;
      __label__ = 14;
      break;
     case 13:
      
      
      var $111 = HEAP[$102 + 32] + 1;
      
      
      HEAP[$subentry + 32] = $111;
      __label__ = 14;
      break;
     case 14:
      
      
      
      
      var $118 = $it + HEAP[$subentry + 20];
      
      
      HEAP[$subentry + 20] = $118;
      
      
      
      var $124 = HEAP[$subentry + 28] + 1;
      
      
      HEAP[$subentry + 28] = $124;
      __label__ = 15;
      break;
     case 15:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ptrace_enter_call($self, $key, $userObj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $key_addr;
      var $userObj_addr;
      var $pObj;
      var $profEntry;
      var $pContext;
      var $last_type = __stackBase__;
      var $last_value = __stackBase__ + 4;
      var $last_tb = __stackBase__ + 8;
      $self_addr = $self;
      $key_addr = $key;
      $userObj_addr = $userObj;
      
      
      $pObj = $self_addr;
      _PyErr_Fetch($last_type, $last_value, $last_tb);
      
      
      var $4 = _getEntry($pObj, $key_addr);
      $profEntry = $4;
      
      
      if ($profEntry == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $10 = _newProfilerEntry($pObj, $key_addr, $userObj_addr);
      $profEntry = $10;
      
      
      if ($profEntry == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      $pContext = HEAP[$pObj + 16];
      
      if (HEAP[$pObj + 16] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $19 = HEAP[$pContext + 16];
      
      
      HEAP[$pObj + 16] = $19;
      __label__ = 6;
      break;
     case 4:
      var $22 = _malloc(24);
      
      $pContext = $22;
      
      
      if ($pContext == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      var $29 = HEAP[$pObj + 20] | 256;
      
      
      HEAP[$pObj + 20] = $29;
      __label__ = 7;
      break;
     case 6:
      
      
      
      _initContext($pObj, $pContext, $profEntry);
      __label__ = 7;
      break;
     case 7:
      var $35 = HEAP[$last_tb];
      var $36 = HEAP[$last_value];
      var $37 = HEAP[$last_type];
      _PyErr_Restore($37, $36, $35);
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ptrace_leave_call($self, $key) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $key_addr;
      var $pObj;
      var $profEntry;
      var $pContext;
      $self_addr = $self;
      $key_addr = $key;
      
      
      $pObj = $self_addr;
      
      
      
      $pContext = HEAP[$pObj + 12];
      
      
      if ($pContext == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $9 = _getEntry($pObj, $key_addr);
      $profEntry = $9;
      
      
      if ($profEntry != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      _Stop($pObj, $pContext, $profEntry);
      __label__ = 4;
      break;
     case 3:
      
      
      var $17 = HEAP[$pContext + 16];
      
      
      HEAP[$pObj + 12] = $17;
      __label__ = 4;
      break;
     case 4:
      
      
      var $22 = HEAP[$pObj + 16];
      
      
      HEAP[$pContext + 16] = $22;
      
      
      
      HEAP[$pObj + 16] = $pContext;
      __label__ = 5;
      break;
     case 5:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _profiler_callback($self, $frame, $what, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $frame_addr;
      var $what_addr;
      var $arg_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $frame_addr = $frame;
      $what_addr = $what;
      $arg_addr = $arg;
      var $1 = $what_addr;
      if ($1 == 0) {
        __label__ = 1;
        break;
      } else if ($1 == 3) {
        __label__ = 2;
        break;
      } else if ($1 == 4) {
        __label__ = 3;
        break;
      } else if ($1 == 5) {
        __label__ = 6;
        break;
      } else if ($1 == 6) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      
      
      
      var $5 = HEAP[$frame_addr + 16];
      
      
      
      
      var $10 = HEAP[$frame_addr + 16];
      _ptrace_enter_call($self_addr, $10, $5);
      __label__ = 9;
      break;
     case 2:
      
      
      
      
      var $15 = HEAP[$frame_addr + 16];
      _ptrace_leave_call($self_addr, $15);
      __label__ = 9;
      break;
     case 3:
      
      
      
      
      
      
      if ((HEAP[$self_addr + 20] & 4) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[$arg_addr + 4] == _PyCFunction_Type) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      
      
      
      
      var $31 = HEAP[$arg_addr + 8];
      
      _ptrace_enter_call($self_addr, $31, $arg_addr);
      __label__ = 9;
      break;
     case 6:
      
      
      
      
      
      
      if ((HEAP[$self_addr + 20] & 4) != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[$arg_addr + 4] == _PyCFunction_Type) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $48 = HEAP[$arg_addr + 8];
      _ptrace_leave_call($self_addr, $48);
      __label__ = 9;
      break;
     case 9:
      $0 = 0;
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _pending_exception($pObj) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr;
      var $retval;
      var $0;
      $pObj_addr = $pObj;
      
      
      
      
      
      if ((HEAP[$pObj_addr + 20] & 256) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[$pObj_addr + 20] - 256;
      
      
      HEAP[$pObj_addr + 20] = $9;
      var $12 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($12, __str4);
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
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
  function _statsForSubEntry($node, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $node_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $sentry;
      var $collect;
      var $entry1;
      var $err;
      var $sinfo;
      $node_addr = $node;
      $arg_addr = $arg;
      
      
      $sentry = $node_addr;
      
      
      $collect = $arg_addr;
      
      
      
      
      
      $entry1 = HEAP[$sentry];
      
      
      
      
      
      
      
      var $17 = HEAP[$collect + 8] * HEAP[$sentry + 20];
      
      
      
      
      
      
      
      var $25 = HEAP[$collect + 8] * HEAP[$sentry + 12];
      
      
      var $28 = HEAP[$sentry + 32];
      
      
      var $31 = HEAP[$sentry + 28];
      
      
      var $34 = HEAP[$entry1 + 12];
      var $35 = _PyObject_CallFunction(_StatsSubEntryType, __str24, allocate([ $34, 0, 0, 0, $31, 0, 0, 0, $28, 0, 0, 0, $25, 0, 0, 0, 0, 0, 0, 0, $17, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_STACK));
      $sinfo = $35;
      
      
      if ($sinfo == 0) {
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
      
      
      var $40 = HEAP[$collect + 4];
      
      var $42 = _PyList_Append($40, $sinfo);
      $err = $42;
      
      
      
      var $46 = HEAP[$sinfo] - 1;
      
      
      HEAP[$sinfo] = $46;
      
      
      
      
      if (HEAP[$sinfo] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $57 = HEAP[HEAP[$sinfo + 4] + 24];
      
      FUNCTION_TABLE[$57]($sinfo);
      __label__ = 4;
      break;
     case 4:
      
      $0 = $err;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _statsForEntry($node, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $node_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $entry1;
      var $collect;
      var $info;
      var $err;
      $node_addr = $node;
      $arg_addr = $arg;
      
      
      $entry1 = $node_addr;
      
      
      $collect = $arg_addr;
      
      
      
      
      if (HEAP[$entry1 + 32] == 0) {
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
      
      
      
      
      if (HEAP[$entry1 + 44] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 3:
      var $13 = _PyList_New(0);
      
      
      HEAP[$collect + 4] = $13;
      
      
      
      
      if (HEAP[$collect + 4] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 17;
      break;
     case 5:
      
      
      var $22 = HEAP[$entry1 + 44];
      
      
      var $25 = _RotatingTree_Enum($22, FUNCTION_TABLE_OFFSET + 6, $collect);
      
      if ($25 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      
      
      var $29 = HEAP[$collect + 4];
      
      
      var $32 = HEAP[$29] - 1;
      var $33 = $29;
      HEAP[$33] = $32;
      
      
      
      if (HEAP[$29] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $43 = HEAP[HEAP[HEAP[$collect + 4] + 4] + 24];
      
      
      var $46 = HEAP[$collect + 4];
      FUNCTION_TABLE[$43]($46);
      __label__ = 8;
      break;
     case 8:
      $0 = -1;
      __label__ = 17;
      break;
     case 9:
      
      var $48 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $48;
      
      
      HEAP[$collect + 4] = __Py_NoneStruct;
      __label__ = 10;
      break;
     case 10:
      
      
      var $53 = HEAP[$collect + 4];
      
      
      
      
      
      
      
      var $61 = HEAP[$collect + 8] * HEAP[$entry1 + 24];
      
      
      
      
      
      
      
      var $69 = HEAP[$collect + 8] * HEAP[$entry1 + 16];
      
      
      var $72 = HEAP[$entry1 + 36];
      
      
      var $75 = HEAP[$entry1 + 32];
      
      
      var $78 = HEAP[$entry1 + 12];
      var $79 = _PyObject_CallFunction(_StatsEntryType, __str25, allocate([ $78, 0, 0, 0, $75, 0, 0, 0, $72, 0, 0, 0, $69, 0, 0, 0, 0, 0, 0, 0, $61, 0, 0, 0, 0, 0, 0, 0, $53, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $info = $79;
      
      
      var $82 = HEAP[$collect + 4];
      
      
      var $85 = HEAP[$82] - 1;
      var $86 = $82;
      HEAP[$86] = $85;
      
      
      
      if (HEAP[$82] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      var $96 = HEAP[HEAP[HEAP[$collect + 4] + 4] + 24];
      
      
      var $99 = HEAP[$collect + 4];
      FUNCTION_TABLE[$96]($99);
      __label__ = 12;
      break;
     case 12:
      
      
      if ($info == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = -1;
      __label__ = 17;
      break;
     case 14:
      
      
      var $104 = HEAP[$collect];
      
      var $106 = _PyList_Append($104, $info);
      $err = $106;
      
      
      
      var $110 = HEAP[$info] - 1;
      
      
      HEAP[$info] = $110;
      
      
      
      
      if (HEAP[$info] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $121 = HEAP[HEAP[$info + 4] + 24];
      
      FUNCTION_TABLE[$121]($info);
      __label__ = 16;
      break;
     case 16:
      
      $0 = $err;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval19 = $retval;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _profiler_getstats($pObj, $noarg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr;
      var $noarg_addr;
      var $retval;
      var $0;
      var $collect = __stackBase__;
      $pObj_addr = $pObj;
      $noarg_addr = $noarg;
      
      var $2 = _pending_exception($pObj_addr);
      
      if ($2 != 0) {
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
      
      
      
      
      if (HEAP[$pObj_addr + 24] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = _hpTimerUnit();
      
      HEAP[$collect + 8] = $8;
      __label__ = 7;
      break;
     case 4:
      
      
      
      
      if (HEAP[$pObj_addr + 28] > 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $16 = HEAP[$pObj_addr + 28];
      
      HEAP[$collect + 8] = $16;
      __label__ = 7;
      break;
     case 6:
      
      HEAP[$collect + 8] = 2.3283064365386963e-10;
      __label__ = 7;
      break;
     case 7:
      var $19 = _PyList_New(0);
      
      HEAP[$collect] = $19;
      
      
      
      if (HEAP[$collect] == 0) {
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
      
      
      var $26 = HEAP[$pObj_addr + 8];
      var $collect9 = $collect;
      var $27 = _RotatingTree_Enum($26, FUNCTION_TABLE_OFFSET + 8, $collect9);
      
      
      var $30 = HEAP[$collect];
      if ($27 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      var $33 = HEAP[$30] - 1;
      var $34 = $30;
      HEAP[$34] = $33;
      
      
      
      if (HEAP[$30] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      var $43 = HEAP[HEAP[HEAP[$collect] + 4] + 24];
      
      var $45 = HEAP[$collect];
      FUNCTION_TABLE[$43]($45);
      __label__ = 12;
      break;
     case 12:
      $0 = 0;
      __label__ = 14;
      break;
     case 13:
      $0 = $30;
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
  function _setSubcalls($pObj, $nvalue) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr;
      var $nvalue_addr;
      var $retval;
      var $0;
      $pObj_addr = $pObj;
      $nvalue_addr = $nvalue;
      
      
      if ($nvalue_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $6 = HEAP[$pObj_addr + 20] & -3;
      
      
      HEAP[$pObj_addr + 20] = $6;
      __label__ = 4;
      break;
     case 2:
      
      
      if ($nvalue_addr > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $14 = HEAP[$pObj_addr + 20] | 2;
      
      
      HEAP[$pObj_addr + 20] = $14;
      __label__ = 4;
      break;
     case 4:
      $0 = 0;
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _setBuiltins($pObj, $nvalue) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr;
      var $nvalue_addr;
      var $retval;
      var $0;
      $pObj_addr = $pObj;
      $nvalue_addr = $nvalue;
      
      
      if ($nvalue_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $6 = HEAP[$pObj_addr + 20] & -5;
      
      
      HEAP[$pObj_addr + 20] = $6;
      __label__ = 4;
      break;
     case 2:
      
      
      if ($nvalue_addr > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $14 = HEAP[$pObj_addr + 20] | 4;
      
      
      HEAP[$pObj_addr + 20] = $14;
      __label__ = 4;
      break;
     case 4:
      $0 = 0;
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _profiler_enable($self, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $subcalls = __stackBase__;
      var $builtins = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      $kwds_addr = $kwds;
      HEAP[$subcalls] = -1;
      HEAP[$builtins] = -1;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwds_addr, __str26, _kwlist_9138, allocate([ $subcalls, 0, 0, 0, $builtins, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$subcalls];
      
      var $7 = _setSubcalls($self_addr, $5);
      
      if ($7 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $9 = HEAP[$builtins];
      
      var $11 = _setBuiltins($self_addr, $9);
      
      if ($11 < 0) {
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
      
      
      _PyEval_SetProfile(FUNCTION_TABLE_OFFSET + 10, $self_addr);
      
      
      
      var $18 = HEAP[$self_addr + 20] | 1;
      
      
      HEAP[$self_addr + 20] = $18;
      
      var $22 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $22;
      $0 = __Py_NoneStruct;
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
  function _flush_unmatched($pObj) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr;
      var $pContext;
      var $profEntry;
      $pObj_addr = $pObj;
      
      
      
      
      if (HEAP[$pObj_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      
      $pContext = HEAP[$pObj_addr + 12];
      
      
      
      $profEntry = HEAP[$pContext + 20];
      
      if (HEAP[$pContext + 20] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      _Stop($pObj_addr, $pContext, $profEntry);
      __label__ = 4;
      break;
     case 3:
      
      
      var $16 = HEAP[$pContext + 16];
      
      
      HEAP[$pObj_addr + 12] = $16;
      __label__ = 4;
      break;
     case 4:
      
      
      if ($pContext != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[$pObj_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      _free($pContext);
      __label__ = 5;
      break;
     case 7:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _profiler_disable($self, $noarg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $noarg_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $noarg_addr = $noarg;
      
      
      
      var $4 = HEAP[$self_addr + 20] & -2;
      
      
      HEAP[$self_addr + 20] = $4;
      _PyEval_SetProfile(0, 0);
      
      _flush_unmatched($self_addr);
      
      var $9 = _pending_exception($self_addr);
      
      if ($9 != 0) {
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
      
      var $12 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $12;
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
  function _profiler_clear($pObj, $noarg) {
    
    var $pObj_addr;
    var $noarg_addr;
    var $retval;
    var $0;
    $pObj_addr = $pObj;
    $noarg_addr = $noarg;
    
    _clearEntries($pObj_addr);
    
    var $3 = HEAP[__Py_NoneStruct] + 1;
    HEAP[__Py_NoneStruct] = $3;
    $0 = __Py_NoneStruct;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _profiler_dealloc($op) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $op_addr;
      $op_addr = $op;
      
      
      
      
      
      
      if ((HEAP[$op_addr + 20] & 1 & 255) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      _PyEval_SetProfile(0, 0);
      __label__ = 2;
      break;
     case 2:
      
      _flush_unmatched($op_addr);
      
      _clearEntries($op_addr);
      
      
      
      
      if (HEAP[$op_addr + 24] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $13 = HEAP[$op_addr + 24];
      
      
      var $16 = HEAP[$13] - 1;
      var $17 = $13;
      HEAP[$17] = $16;
      
      
      
      if (HEAP[$13] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[$op_addr + 24] + 4] + 24];
      
      
      var $30 = HEAP[$op_addr + 24];
      FUNCTION_TABLE[$27]($30);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      
      var $36 = HEAP[HEAP[$op_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$36]($op_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _profiler_init($pObj, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pObj_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $o;
      var $timer = __stackBase__;
      var $timeunit = __stackBase__ + 4;
      var $subcalls = __stackBase__ + 12;
      var $builtins = __stackBase__ + 16;
      $pObj_addr = $pObj;
      $args_addr = $args;
      $kw_addr = $kw;
      HEAP[$timer] = 0;
      HEAP[$timeunit] = 0;
      HEAP[$subcalls] = 1;
      HEAP[$builtins] = 1;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kw_addr, __str29, _kwlist_9228, allocate([ $timer, 0, 0, 0, $timeunit, 0, 0, 0, $subcalls, 0, 0, 0, $builtins, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "double*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 11;
      break;
     case 2:
      var $5 = HEAP[$subcalls];
      
      var $7 = _setSubcalls($pObj_addr, $5);
      
      if ($7 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $9 = HEAP[$builtins];
      
      var $11 = _setBuiltins($pObj_addr, $9);
      
      if ($11 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 11;
      break;
     case 5:
      
      
      
      $o = HEAP[$pObj_addr + 24];
      var $16 = HEAP[$timer];
      
      
      HEAP[$pObj_addr + 24] = $16;
      
      
      if (HEAP[$timer] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $24 = HEAP[HEAP[$timer]] + 1;
      var $25 = HEAP[$timer];
      HEAP[$25] = $24;
      __label__ = 7;
      break;
     case 7:
      
      
      if ($o != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      var $31 = HEAP[$o] - 1;
      
      
      HEAP[$o] = $31;
      
      
      
      
      if (HEAP[$o] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $42 = HEAP[HEAP[$o + 4] + 24];
      
      FUNCTION_TABLE[$42]($o);
      __label__ = 10;
      break;
     case 10:
      var $44 = HEAP[$timeunit];
      
      
      HEAP[$pObj_addr + 28] = $44;
      $0 = 0;
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
  function _init_lsprof() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $module;
      var $d;
      var $0 = _Py_InitModule4(__str37, _moduleMethods, __str38, 0, 1013);
      $module = $0;
      
      
      if ($module == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $4 = _PyModule_GetDict($module);
      $d = $4;
      var $5 = _PyType_Ready(_PyProfiler_Type);
      
      if ($5 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      var $8 = _PyDict_SetItemString($d, __str39, _PyProfiler_Type);
      
      
      
      if (HEAP[_initialized_b] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyStructSequence_InitType(_StatsEntryType, _profiler_entry_desc);
      _PyStructSequence_InitType(_StatsSubEntryType, _profiler_subentry_desc);
      __label__ = 4;
      break;
     case 4:
      
      var $12 = HEAP[_StatsEntryType] + 1;
      HEAP[_StatsEntryType] = $12;
      
      var $14 = HEAP[_StatsSubEntryType] + 1;
      HEAP[_StatsSubEntryType] = $14;
      
      var $16 = _PyModule_AddObject($module, __str40, _StatsEntryType);
      
      var $18 = _PyModule_AddObject($module, __str41, _StatsSubEntryType);
      var $19 = _PyTuple_New(0);
      HEAP[_empty_tuple] = $19;
      HEAP[_initialized_b] = 1;
      __label__ = 5;
      break;
     case 5:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_lsprof"] = _init_lsprof;
  function _randombits($bits) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $bits_addr;
      var $retval;
      var $0;
      var $result;
      $bits_addr = $bits;
      
      
      
      
      if (1 << $bits_addr > HEAP[_random_stream]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $6 = HEAP[_random_value] * 1082527;
      HEAP[_random_value] = $6;
      var $7 = HEAP[_random_value];
      HEAP[_random_stream] = $7;
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      
      $result = (1 << $bits_addr) - 1 & HEAP[_random_stream];
      
      
      var $15 = HEAP[_random_stream] >>> $bits_addr;
      HEAP[_random_stream] = $15;
      
      $0 = $result;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _RotatingTree_Add($root, $node) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $root_addr;
      var $node_addr;
      $root_addr = $root;
      $node_addr = $node;
      
      
      
      var $3 = $node_addr;
      if (HEAP[$root_addr] != 0) {
        __lastLabel__ = -1;
        __label__ = 1;
        break;
      } else {
        __lastLabel__ = -1;
        __label__ = 5;
        break;
      }
     case 1:
      var $4 = __lastLabel__ == 3 ? $18 : $3;
      
      
      
      
      
      
      
      
      var $13 = HEAP[$root_addr];
      if (HEAP[$4] < HEAP[HEAP[$root_addr]]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      var $14 = $13 + 4;
      $root_addr = $14;
      __label__ = 3;
      break;
     case 3:
      
      
      
      var $18 = $node_addr;
      if (HEAP[$root_addr] != 0) {
        __lastLabel__ = 3;
        __label__ = 1;
        break;
      } else {
        __lastLabel__ = 3;
        __label__ = 5;
        break;
      }
     case 4:
      var $19 = $13 + 8;
      $root_addr = $19;
      __label__ = 3;
      break;
     case 5:
      var $_lcssa = __lastLabel__ == -1 ? $3 : $18;
      
      HEAP[$_lcssa + 4] = 0;
      
      
      HEAP[$node_addr + 8] = 0;
      
      
      HEAP[$root_addr] = $node_addr;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _RotatingTree_Get($root, $key) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $root_addr;
      var $key_addr;
      var $retval;
      var $0;
      var $node;
      var $pnode;
      var $node9;
      var $next;
      var $rotate;
      $root_addr = $root;
      $key_addr = $key;
      var $1 = _randombits(3);
      
      var $3 = $root_addr;
      if ($1 != 4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      var $4 = HEAP[$3];
      $node = $4;
      __lastLabel__ = 1;
      __label__ = 7;
      break;
     case 2:
      
      
      
      
      
      var $10 = $node;
      if (HEAP[$node] == $key_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = $10;
      __label__ = 25;
      break;
     case 4:
      
      
      
      
      var $15 = $node;
      if (HEAP[$10] > $key_addr) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $17 = HEAP[$15 + 4];
      $node = $17;
      __lastLabel__ = 5;
      __label__ = 7;
      break;
     case 6:
      
      var $19 = HEAP[$15 + 8];
      $node = $19;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $20 = __lastLabel__ == 1 ? $4 : __lastLabel__ == 6 ? $19 : $17;
      
      if ($20 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 25;
      break;
     case 9:
      $pnode = $3;
      
      
      $node9 = HEAP[$pnode];
      
      
      if ($node9 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = 0;
      __label__ = 25;
      break;
     case 11:
      
      
      
      
      
      if (HEAP[$node9] == $key_addr) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      $0 = $node9;
      __label__ = 25;
      break;
     case 13:
      var $32 = _randombits(1);
      
      
      $rotate = $32 == 0;
      
      
      
      
      
      var $40 = $node9;
      if (HEAP[$node9] > $key_addr) {
        __label__ = 14;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 14:
      
      
      $next = HEAP[$40 + 4];
      
      
      if ($next == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $0 = 0;
      __label__ = 25;
      break;
     case 16:
      
      
      if ($rotate != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      var $49 = HEAP[$next + 8];
      
      
      HEAP[$node9 + 4] = $49;
      
      
      
      HEAP[$next + 8] = $node9;
      
      
      HEAP[$pnode] = $next;
      __label__ = 24;
      break;
     case 18:
      
      
      $pnode = $node9 + 4;
      __label__ = 24;
      break;
     case 19:
      
      
      $next = HEAP[$40 + 8];
      
      
      if ($next == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      $0 = 0;
      __label__ = 25;
      break;
     case 21:
      
      
      if ($rotate != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      var $67 = HEAP[$next + 4];
      
      
      HEAP[$node9 + 8] = $67;
      
      
      
      HEAP[$next + 4] = $node9;
      
      
      HEAP[$pnode] = $next;
      __label__ = 24;
      break;
     case 23:
      
      
      $pnode = $node9 + 8;
      __label__ = 24;
      break;
     case 24:
      
      $node9 = $next;
      __label__ = 11;
      break;
     case 25:
      
      $retval = $0;
      var $retval27 = $retval;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _RotatingTree_Enum($root, $enumfn, $arg) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $root_addr;
      var $enumfn_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $result;
      var $node;
      $root_addr = $root;
      $enumfn_addr = $enumfn;
      $arg_addr = $arg;
      __lastLabel__ = -1;
      __label__ = 6;
      break;
     case 1:
      
      
      var $3 = HEAP[$root_addr + 4];
      
      
      var $6 = _RotatingTree_Enum($3, $enumfn_addr, $arg_addr);
      $result = $6;
      
      
      if ($result != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      $0 = $result;
      __label__ = 8;
      break;
     case 3:
      
      
      
      $node = HEAP[$root_addr + 8];
      var $13 = $enumfn_addr;
      
      
      var $16 = FUNCTION_TABLE[$13]($root_addr, $arg_addr);
      $result = $16;
      
      
      if ($result != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      $0 = $result;
      __label__ = 8;
      break;
     case 5:
      var $20 = $node;
      $root_addr = $20;
      __lastLabel__ = 5;
      __label__ = 6;
      break;
     case 6:
      var $21 = __lastLabel__ == 5 ? $20 : $root;
      
      if ($21 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
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
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _freeSubEntry, 0, _freeEntry, 0, _statsForSubEntry, 0, _statsForEntry, 0, _profiler_callback, 0, _profiler_getstats, 0, _profiler_enable, 0, _profiler_disable, 0, _profiler_clear, 0, _profiler_dealloc, 0, _profiler_init, 0, _PyType_GenericAlloc, 0, _PyType_GenericNew, 0, _PyObject_Free, 0 ]);
  function run(args) {
    _empty_tuple = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str = allocate([ 95, 95, 98, 117, 105, 108, 116, 105, 110, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 60, 37, 115, 46, 37, 115, 62, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 60, 37, 115, 62, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 60, 98, 117, 105, 108, 116, 45, 105, 110, 32, 109, 101, 116, 104, 111, 100, 32, 37, 115, 62, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 109, 101, 109, 111, 114, 121, 32, 119, 97, 115, 32, 101, 120, 104, 97, 117, 115, 116, 101, 100, 32, 119, 104, 105, 108, 101, 32, 112, 114, 111, 102, 105, 108, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 99, 111, 100, 101, 32, 111, 98, 106, 101, 99, 116, 32, 111, 114, 32, 98, 117, 105, 108, 116, 45, 105, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 99, 97, 108, 108, 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 104, 111, 119, 32, 109, 97, 110, 121, 32, 116, 105, 109, 101, 115, 32, 116, 104, 105, 115, 32, 119, 97, 115, 32, 99, 97, 108, 108, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 114, 101, 99, 99, 97, 108, 108, 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 104, 111, 119, 32, 109, 97, 110, 121, 32, 116, 105, 109, 101, 115, 32, 99, 97, 108, 108, 101, 100, 32, 114, 101, 99, 117, 114, 115, 105, 118, 101, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 116, 111, 116, 97, 108, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 116, 111, 116, 97, 108, 32, 116, 105, 109, 101, 32, 105, 110, 32, 116, 104, 105, 115, 32, 101, 110, 116, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 105, 110, 108, 105, 110, 101, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 105, 110, 108, 105, 110, 101, 32, 116, 105, 109, 101, 32, 105, 110, 32, 116, 104, 105, 115, 32, 101, 110, 116, 114, 121, 32, 40, 110, 111, 116, 32, 105, 110, 32, 115, 117, 98, 99, 97, 108, 108, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 99, 97, 108, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 100, 101, 116, 97, 105, 108, 115, 32, 111, 102, 32, 116, 104, 101, 32, 99, 97, 108, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    _profiler_entry_fields = allocate(56, [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str17 = allocate([ 99, 97, 108, 108, 101, 100, 32, 99, 111, 100, 101, 32, 111, 98, 106, 101, 99, 116, 32, 111, 114, 32, 98, 117, 105, 108, 116, 45, 105, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 104, 111, 119, 32, 109, 97, 110, 121, 32, 116, 105, 109, 101, 115, 32, 116, 104, 105, 115, 32, 105, 115, 32, 99, 97, 108, 108, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 104, 111, 119, 32, 109, 97, 110, 121, 32, 116, 105, 109, 101, 115, 32, 116, 104, 105, 115, 32, 105, 115, 32, 99, 97, 108, 108, 101, 100, 32, 114, 101, 99, 117, 114, 115, 105, 118, 101, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 116, 111, 116, 97, 108, 32, 116, 105, 109, 101, 32, 115, 112, 101, 110, 116, 32, 105, 110, 32, 116, 104, 105, 115, 32, 99, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 105, 110, 108, 105, 110, 101, 32, 116, 105, 109, 101, 32, 40, 110, 111, 116, 32, 105, 110, 32, 102, 117, 114, 116, 104, 101, 114, 32, 115, 117, 98, 99, 97, 108, 108, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    _profiler_subentry_fields = allocate(48, [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _profiler_entry_desc = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyStructSequence_Field*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str22 = allocate([ 95, 108, 115, 112, 114, 111, 102, 46, 112, 114, 111, 102, 105, 108, 101, 114, 95, 101, 110, 116, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    _profiler_subentry_desc = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyStructSequence_Field*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str23 = allocate([ 95, 108, 115, 112, 114, 111, 102, 46, 112, 114, 111, 102, 105, 108, 101, 114, 95, 115, 117, 98, 101, 110, 116, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    _StatsSubEntryType = allocate(196, [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str24 = allocate([ 40, 40, 79, 108, 108, 100, 100, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    _StatsEntryType = allocate(196, [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str25 = allocate([ 40, 40, 79, 108, 108, 100, 100, 79, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    _getstats_doc = allocate([ 103, 101, 116, 115, 116, 97, 116, 115, 40, 41, 32, 45, 62, 32, 108, 105, 115, 116, 32, 111, 102, 32, 112, 114, 111, 102, 105, 108, 101, 114, 95, 101, 110, 116, 114, 121, 32, 111, 98, 106, 101, 99, 116, 115, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 108, 108, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 32, 99, 111, 108, 108, 101, 99, 116, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 112, 114, 111, 102, 105, 108, 101, 114, 46, 10, 69, 97, 99, 104, 32, 112, 114, 111, 102, 105, 108, 101, 114, 95, 101, 110, 116, 114, 121, 32, 105, 115, 32, 97, 32, 116, 117, 112, 108, 101, 45, 108, 105, 107, 101, 32, 111, 98, 106, 101, 99, 116, 32, 119, 105, 116, 104, 32, 116, 104, 101, 10, 102, 111, 108, 108, 111, 119, 105, 110, 103, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 115, 58, 10, 10, 32, 32, 32, 32, 99, 111, 100, 101, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 100, 101, 32, 111, 98, 106, 101, 99, 116, 10, 32, 32, 32, 32, 99, 97, 108, 108, 99, 111, 117, 110, 116, 32, 32, 32, 32, 32, 104, 111, 119, 32, 109, 97, 110, 121, 32, 116, 105, 109, 101, 115, 32, 116, 104, 105, 115, 32, 119, 97, 115, 32, 99, 97, 108, 108, 101, 100, 10, 32, 32, 32, 32, 114, 101, 99, 99, 97, 108, 108, 99, 111, 117, 110, 116, 32, 32, 104, 111, 119, 32, 109, 97, 110, 121, 32, 116, 105, 109, 101, 115, 32, 99, 97, 108, 108, 101, 100, 32, 114, 101, 99, 117, 114, 115, 105, 118, 101, 108, 121, 10, 32, 32, 32, 32, 116, 111, 116, 97, 108, 116, 105, 109, 101, 32, 32, 32, 32, 32, 116, 111, 116, 97, 108, 32, 116, 105, 109, 101, 32, 105, 110, 32, 116, 104, 105, 115, 32, 101, 110, 116, 114, 121, 10, 32, 32, 32, 32, 105, 110, 108, 105, 110, 101, 116, 105, 109, 101, 32, 32, 32, 32, 105, 110, 108, 105, 110, 101, 32, 116, 105, 109, 101, 32, 105, 110, 32, 116, 104, 105, 115, 32, 101, 110, 116, 114, 121, 32, 40, 110, 111, 116, 32, 105, 110, 32, 115, 117, 98, 99, 97, 108, 108, 115, 41, 10, 32, 32, 32, 32, 99, 97, 108, 108, 115, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 116, 97, 105, 108, 115, 32, 111, 102, 32, 116, 104, 101, 32, 99, 97, 108, 108, 115, 10, 10, 84, 104, 101, 32, 99, 97, 108, 108, 115, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 32, 105, 115, 32, 101, 105, 116, 104, 101, 114, 32, 78, 111, 110, 101, 32, 111, 114, 32, 97, 32, 108, 105, 115, 116, 32, 111, 102, 10, 112, 114, 111, 102, 105, 108, 101, 114, 95, 115, 117, 98, 101, 110, 116, 114, 121, 32, 111, 98, 106, 101, 99, 116, 115, 58, 10, 10, 32, 32, 32, 32, 99, 111, 100, 101, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 101, 100, 32, 99, 111, 100, 101, 32, 111, 98, 106, 101, 99, 116, 10, 32, 32, 32, 32, 99, 97, 108, 108, 99, 111, 117, 110, 116, 32, 32, 32, 32, 32, 104, 111, 119, 32, 109, 97, 110, 121, 32, 116, 105, 109, 101, 115, 32, 116, 104, 105, 115, 32, 105, 115, 32, 99, 97, 108, 108, 101, 100, 10, 32, 32, 32, 32, 114, 101, 99, 99, 97, 108, 108, 99, 111, 117, 110, 116, 32, 32, 104, 111, 119, 32, 109, 97, 110, 121, 32, 116, 105, 109, 101, 115, 32, 116, 104, 105, 115, 32, 105, 115, 32, 99, 97, 108, 108, 101, 100, 32, 114, 101, 99, 117, 114, 115, 105, 118, 101, 108, 121, 10, 32, 32, 32, 32, 116, 111, 116, 97, 108, 116, 105, 109, 101, 32, 32, 32, 32, 32, 116, 111, 116, 97, 108, 32, 116, 105, 109, 101, 32, 115, 112, 101, 110, 116, 32, 105, 110, 32, 116, 104, 105, 115, 32, 99, 97, 108, 108, 10, 32, 32, 32, 32, 105, 110, 108, 105, 110, 101, 116, 105, 109, 101, 32, 32, 32, 32, 105, 110, 108, 105, 110, 101, 32, 116, 105, 109, 101, 32, 40, 110, 111, 116, 32, 105, 110, 32, 102, 117, 114, 116, 104, 101, 114, 32, 115, 117, 98, 99, 97, 108, 108, 115, 41, 10, 0 ], "i8", ALLOC_NORMAL);
    _enable_doc = allocate([ 101, 110, 97, 98, 108, 101, 40, 115, 117, 98, 99, 97, 108, 108, 115, 61, 84, 114, 117, 101, 44, 32, 98, 117, 105, 108, 116, 105, 110, 115, 61, 84, 114, 117, 101, 41, 10, 10, 83, 116, 97, 114, 116, 32, 99, 111, 108, 108, 101, 99, 116, 105, 110, 103, 32, 112, 114, 111, 102, 105, 108, 105, 110, 103, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 46, 10, 73, 102, 32, 39, 115, 117, 98, 99, 97, 108, 108, 115, 39, 32, 105, 115, 32, 84, 114, 117, 101, 44, 32, 97, 108, 115, 111, 32, 114, 101, 99, 111, 114, 100, 115, 32, 102, 111, 114, 32, 101, 97, 99, 104, 32, 102, 117, 110, 99, 116, 105, 111, 110, 10, 115, 116, 97, 116, 105, 115, 116, 105, 99, 115, 32, 115, 101, 112, 97, 114, 97, 116, 101, 100, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 105, 116, 115, 32, 99, 117, 114, 114, 101, 110, 116, 32, 99, 97, 108, 108, 101, 114, 46, 10, 73, 102, 32, 39, 98, 117, 105, 108, 116, 105, 110, 115, 39, 32, 105, 115, 32, 84, 114, 117, 101, 44, 32, 114, 101, 99, 111, 114, 100, 115, 32, 116, 104, 101, 32, 116, 105, 109, 101, 32, 115, 112, 101, 110, 116, 32, 105, 110, 10, 98, 117, 105, 108, 116, 45, 105, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 115, 101, 112, 97, 114, 97, 116, 101, 108, 121, 32, 102, 114, 111, 109, 32, 116, 104, 101, 105, 114, 32, 99, 97, 108, 108, 101, 114, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 124, 105, 105, 58, 101, 110, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9138 = allocate(12, "i8*", ALLOC_NORMAL);
    __str27 = allocate([ 115, 117, 98, 99, 97, 108, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 98, 117, 105, 108, 116, 105, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    _disable_doc = allocate([ 100, 105, 115, 97, 98, 108, 101, 40, 41, 10, 10, 83, 116, 111, 112, 32, 99, 111, 108, 108, 101, 99, 116, 105, 110, 103, 32, 112, 114, 111, 102, 105, 108, 105, 110, 103, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _clear_doc = allocate([ 99, 108, 101, 97, 114, 40, 41, 10, 10, 67, 108, 101, 97, 114, 32, 97, 108, 108, 32, 112, 114, 111, 102, 105, 108, 105, 110, 103, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 32, 99, 111, 108, 108, 101, 99, 116, 101, 100, 32, 115, 111, 32, 102, 97, 114, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 124, 79, 100, 105, 105, 58, 80, 114, 111, 102, 105, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9228 = allocate(20, "i8*", ALLOC_NORMAL);
    __str30 = allocate([ 116, 105, 109, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 116, 105, 109, 101, 117, 110, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 103, 101, 116, 115, 116, 97, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 101, 110, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 100, 105, 115, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 99, 108, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    _profiler_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _profiler_doc = allocate([ 80, 114, 111, 102, 105, 108, 101, 114, 40, 99, 117, 115, 116, 111, 109, 95, 116, 105, 109, 101, 114, 61, 78, 111, 110, 101, 44, 32, 116, 105, 109, 101, 95, 117, 110, 105, 116, 61, 78, 111, 110, 101, 44, 32, 115, 117, 98, 99, 97, 108, 108, 115, 61, 84, 114, 117, 101, 44, 32, 98, 117, 105, 108, 116, 105, 110, 115, 61, 84, 114, 117, 101, 41, 10, 10, 32, 32, 32, 32, 66, 117, 105, 108, 100, 115, 32, 97, 32, 112, 114, 111, 102, 105, 108, 101, 114, 32, 111, 98, 106, 101, 99, 116, 32, 117, 115, 105, 110, 103, 32, 116, 104, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 116, 105, 109, 101, 114, 32, 102, 117, 110, 99, 116, 105, 111, 110, 46, 10, 32, 32, 32, 32, 84, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 116, 105, 109, 101, 114, 32, 105, 115, 32, 97, 32, 102, 97, 115, 116, 32, 98, 117, 105, 108, 116, 45, 105, 110, 32, 111, 110, 101, 32, 98, 97, 115, 101, 100, 32, 111, 110, 32, 114, 101, 97, 108, 32, 116, 105, 109, 101, 46, 10, 32, 32, 32, 32, 70, 111, 114, 32, 99, 117, 115, 116, 111, 109, 32, 116, 105, 109, 101, 114, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 114, 101, 116, 117, 114, 110, 105, 110, 103, 32, 105, 110, 116, 101, 103, 101, 114, 115, 44, 32, 116, 105, 109, 101, 95, 117, 110, 105, 116, 32, 99, 97, 110, 10, 32, 32, 32, 32, 98, 101, 32, 97, 32, 102, 108, 111, 97, 116, 32, 115, 112, 101, 99, 105, 102, 121, 105, 110, 103, 32, 97, 32, 115, 99, 97, 108, 101, 32, 40, 105, 46, 101, 46, 32, 104, 111, 119, 32, 108, 111, 110, 103, 32, 101, 97, 99, 104, 32, 105, 110, 116, 101, 103, 101, 114, 32, 117, 110, 105, 116, 10, 32, 32, 32, 32, 105, 115, 44, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 41, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 95, 108, 115, 112, 114, 111, 102, 46, 80, 114, 111, 102, 105, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _PyProfiler_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _moduleMethods = allocate(16, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str37 = allocate([ 95, 108, 115, 112, 114, 111, 102, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 70, 97, 115, 116, 32, 112, 114, 111, 102, 105, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 80, 114, 111, 102, 105, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _initialized_b = allocate(1, "i1", ALLOC_NORMAL);
    __str40 = allocate([ 112, 114, 111, 102, 105, 108, 101, 114, 95, 101, 110, 116, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 112, 114, 111, 102, 105, 108, 101, 114, 95, 115, 117, 98, 101, 110, 116, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    _random_value = allocate([ 1 ], [ "i32", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _random_stream = allocate(1, "i32", ALLOC_NORMAL);
    HEAP[_profiler_entry_fields] = __str5;
    HEAP[_profiler_entry_fields + 4] = __str6;
    HEAP[_profiler_entry_fields + 8] = __str7;
    HEAP[_profiler_entry_fields + 12] = __str8;
    HEAP[_profiler_entry_fields + 16] = __str9;
    HEAP[_profiler_entry_fields + 20] = __str10;
    HEAP[_profiler_entry_fields + 24] = __str11;
    HEAP[_profiler_entry_fields + 28] = __str12;
    HEAP[_profiler_entry_fields + 32] = __str13;
    HEAP[_profiler_entry_fields + 36] = __str14;
    HEAP[_profiler_entry_fields + 40] = __str15;
    HEAP[_profiler_entry_fields + 44] = __str16;
    HEAP[_profiler_subentry_fields] = __str5;
    HEAP[_profiler_subentry_fields + 4] = __str17;
    HEAP[_profiler_subentry_fields + 8] = __str7;
    HEAP[_profiler_subentry_fields + 12] = __str18;
    HEAP[_profiler_subentry_fields + 16] = __str9;
    HEAP[_profiler_subentry_fields + 20] = __str19;
    HEAP[_profiler_subentry_fields + 24] = __str11;
    HEAP[_profiler_subentry_fields + 28] = __str20;
    HEAP[_profiler_subentry_fields + 32] = __str13;
    HEAP[_profiler_subentry_fields + 36] = __str21;
    HEAP[_profiler_entry_desc] = __str22;
    HEAP[_profiler_entry_desc + 8] = _profiler_entry_fields;
    HEAP[_profiler_subentry_desc] = __str23;
    HEAP[_profiler_subentry_desc + 8] = _profiler_subentry_fields;
    HEAP[_kwlist_9138] = __str27;
    HEAP[_kwlist_9138 + 4] = __str28;
    HEAP[_kwlist_9228] = __str30;
    HEAP[_kwlist_9228 + 4] = __str31;
    HEAP[_kwlist_9228 + 8] = __str27;
    HEAP[_kwlist_9228 + 12] = __str28;
    HEAP[_profiler_methods] = __str32;
    HEAP[_profiler_methods + 4] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_profiler_methods + 12] = _getstats_doc;
    HEAP[_profiler_methods + 16] = __str33;
    HEAP[_profiler_methods + 20] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_profiler_methods + 28] = _enable_doc;
    HEAP[_profiler_methods + 32] = __str34;
    HEAP[_profiler_methods + 36] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_profiler_methods + 44] = _disable_doc;
    HEAP[_profiler_methods + 48] = __str35;
    HEAP[_profiler_methods + 52] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_profiler_methods + 60] = _clear_doc;
    HEAP[_PyProfiler_Type + 12] = __str36;
    HEAP[_PyProfiler_Type + 24] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_PyProfiler_Type + 88] = _profiler_doc;
    HEAP[_PyProfiler_Type + 116] = _profiler_methods;
    HEAP[_PyProfiler_Type + 148] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_PyProfiler_Type + 152] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_PyProfiler_Type + 156] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_PyProfiler_Type + 160] = FUNCTION_TABLE_OFFSET + 28;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
