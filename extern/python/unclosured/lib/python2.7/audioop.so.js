"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 416;
  var $1___SIZE = 16;
  var $2___SIZE = 16;
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
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _seg_aend;
  var _seg_uend;
  var __st_ulaw2linear16;
  var __st_alaw2linear16;
  var _indexTable;
  var _stepsizeTable;
  var _AudioopError;
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
  var __str59;
  var __str60;
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
  var _audioop_methods;
  var __str72;
  var __str73;
  var __str74;
  function _search($val, $table) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $val_addr;
      var $table_addr;
      var $size_addr;
      var $retval;
      var $0;
      var $i;
      $val_addr = $val;
      $table_addr = $table;
      $size_addr = 8;
      $i = 0;
      __label__ = 4;
      break;
     case 1:
      
      
      
      
      var $5 = HEAP[$table_addr] >= $val_addr;
      
      var $7 = $table_addr + 2;
      $table_addr = $7;
      
      var $8 = $i;
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      $0 = $8 & 65535;
      __label__ = 6;
      break;
     case 3:
      var $11 = $8 + 1;
      $i = $11;
      __label__ = 4;
      break;
     case 4:
      
      
      
      if ($i < $size_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      $0 = $size_addr & 65535;
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      
      var $retval67 = $retval & 65535;
      return $retval67;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _st_14linear2ulaw($pcm_val) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pcm_val_addr;
      var $retval;
      var $0;
      var $mask;
      var $seg;
      var $uval;
      $pcm_val_addr = $pcm_val;
      
      var $2 = $pcm_val_addr >> 2;
      $pcm_val_addr = $2;
      
      
      if ($pcm_val_addr < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $6 = 0 - $pcm_val_addr;
      $pcm_val_addr = $6;
      $mask = 127;
      __lastLabel__ = 1;
      __label__ = 3;
      break;
     case 2:
      $mask = 255;
      var $_pr = $pcm_val_addr;
      __lastLabel__ = 2;
      __label__ = 3;
      break;
     case 3:
      var $7 = __lastLabel__ == 2 ? $_pr : $6;
      
      if ($7 > 32635) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $pcm_val_addr = 32635;
      __label__ = 5;
      break;
     case 5:
      
      var $10 = $pcm_val_addr + 33;
      $pcm_val_addr = $10;
      
      
      
      var $14 = _search($pcm_val_addr & 65535, _seg_uend);
      $seg = $14;
      
      if ($14 > 7) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      $0 = $mask & 255 ^ 127;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      
      
      
      
      
      
      
      
      $uval = $pcm_val_addr >> $seg + 1 & 255 & 15 | ($seg & 255) << 4;
      
      
      
      
      
      $0 = $mask & 255 ^ $uval;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      
      var $retval89 = $retval & 255;
      return $retval89;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _st_linear2alaw($pcm_val) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pcm_val_addr;
      var $retval;
      var $0;
      var $mask;
      var $seg;
      var $aval;
      $pcm_val_addr = $pcm_val;
      
      var $2 = $pcm_val_addr >> 3;
      $pcm_val_addr = $2;
      
      
      if ($pcm_val_addr >= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $mask = 213;
      __label__ = 3;
      break;
     case 2:
      $mask = 85;
      
      var $not = $pcm_val_addr ^ -1;
      $pcm_val_addr = $not;
      __label__ = 3;
      break;
     case 3:
      
      
      
      var $9 = _search($pcm_val_addr & 65535, _seg_aend);
      $seg = $9;
      
      if ($9 > 7) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      $0 = $mask & 255 ^ 127;
      __label__ = 9;
      break;
     case 5:
      
      
      
      $aval = ($seg & 255) << 4;
      
      
      var $20 = $pcm_val_addr;
      if ($seg <= 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $25 = $aval | $20 >> 1 & 255 & 15;
      $aval = $25;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      
      
      
      var $33 = $20 >> $seg & 255 & 15 | $aval;
      $aval = $33;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      $0 = $mask & 255 ^ $aval;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      
      var $retval910 = $retval & 255;
      return $retval910;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_check_size($size) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $size_addr;
      var $retval;
      var $0;
      $size_addr = $size;
      
      
      
      
      
      
      
      
      if ($size_addr == 1 | $size_addr == 2 | $size_addr == 4) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $7 = HEAP[_AudioopError];
      _PyErr_SetString($7, __str);
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      $0 = 1;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_check_parameters($len, $size) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $len_addr;
      var $size_addr;
      var $retval;
      var $0;
      $len_addr = $len;
      $size_addr = $size;
      
      var $2 = _audioop_check_size($size_addr);
      
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
      
      
      
      
      if ($len_addr % $size_addr != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_AudioopError];
      _PyErr_SetString($8, __str1);
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
  function _audioop_getsample($self, $args) {
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
      var $cp = __stackBase__;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $val;
      var $i = __stackBase__ + 12;
      $self_addr = $self;
      $args_addr = $args;
      $val = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str2, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $i, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 14;
      break;
     case 4:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      if ((HEAP[$len] / HEAP[$size] | 0) <= HEAP[$i]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $15 = HEAP[_AudioopError];
      _PyErr_SetString($15, __str3);
      $0 = 0;
      __label__ = 14;
      break;
     case 7:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + HEAP[$i]];
      __label__ = 13;
      break;
     case 9:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + HEAP[$i] * 2];
      __label__ = 13;
      break;
     case 11:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + HEAP[$i] * 4];
      __label__ = 13;
      break;
     case 13:
      
      var $41 = _PyInt_FromLong($val);
      $0 = $41;
      __label__ = 14;
      break;
     case 14:
      
      $retval = $0;
      var $retval14 = $retval;
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_max($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $cp = __stackBase__;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $val;
      var $i;
      var $max;
      $self_addr = $self;
      $args_addr = $args;
      $val = 0;
      $max = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str4, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 18;
      break;
     case 4:
      $i = 0;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 5:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $17 = HEAP[HEAP[$cp] + $i];
      $val = $17;
      __lastLabel__ = 6;
      __label__ = 12;
      break;
     case 7:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $25 = HEAP[HEAP[$cp] + $i];
      $val = $25;
      __lastLabel__ = 8;
      __label__ = 12;
      break;
     case 9:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $32 = HEAP[HEAP[$cp] + $i];
      $val = $32;
      __lastLabel__ = 10;
      __label__ = 12;
      break;
     case 11:
      var $_pr = $val;
      __lastLabel__ = 11;
      __label__ = 12;
      break;
     case 12:
      var $33 = __lastLabel__ == 11 ? $_pr : __lastLabel__ == 10 ? $32 : __lastLabel__ == 8 ? $25 : $17;
      
      if ($33 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      var $36 = 0 - $val;
      $val = $36;
      __label__ = 14;
      break;
     case 14:
      
      
      
      if ($val > $max) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      $max = $val;
      __label__ = 16;
      break;
     case 16:
      
      
      var $43 = $i + HEAP[$size];
      $i = $43;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      var $48 = _PyInt_FromLong($max);
      $0 = $48;
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
  function _audioop_minmax($self, $args) {
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
      var $cp = __stackBase__;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $val;
      var $i;
      var $min;
      var $max;
      $self_addr = $self;
      $args_addr = $args;
      $val = 0;
      $min = 2147483647;
      $max = -2147483647;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str5, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
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
      $i = 0;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 5:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 11;
      break;
     case 7:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 11;
      break;
     case 9:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 11;
      break;
     case 11:
      
      
      
      if ($val > $max) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      $max = $val;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if ($val < $min) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      $min = $val;
      __label__ = 15;
      break;
     case 15:
      
      
      var $43 = $i + HEAP[$size];
      $i = $43;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      var $49 = _Py_BuildValue(__str6, allocate([ $min, 0, 0, 0, $max, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = $49;
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
  function _audioop_avg($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $cp = __stackBase__;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $val;
      var $i;
      var $avg;
      $self_addr = $self;
      $args_addr = $args;
      $val = 0;
      $avg = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str7, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 16;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 16;
      break;
     case 4:
      $i = 0;
      var $8 = HEAP[$len];
      
      
      if ($i < $8) {
        __lastLabel__ = 4;
        __label__ = 5;
        break;
      } else {
        __lastLabel__ = 4;
        __label__ = 12;
        break;
      }
     case 5:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 11;
      break;
     case 7:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 11;
      break;
     case 9:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 11;
      break;
     case 11:
      
      
      
      var $36 = $val + $avg;
      $avg = $36;
      
      
      var $39 = $i + HEAP[$size];
      $i = $39;
      var $40 = HEAP[$len];
      
      
      if ($i < $40) {
        __lastLabel__ = 11;
        __label__ = 5;
        break;
      } else {
        __lastLabel__ = 11;
        __label__ = 12;
        break;
      }
     case 12:
      var $43 = __lastLabel__ == 11 ? $40 : $8;
      
      if ($43 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $val = 0;
      __label__ = 15;
      break;
     case 14:
      
      
      
      
      
      
      
      $val = $avg / (HEAP[$len] / HEAP[$size] | 0) | 0;
      __label__ = 15;
      break;
     case 15:
      
      var $53 = _PyInt_FromLong($val);
      $0 = $53;
      __label__ = 16;
      break;
     case 16:
      
      $retval = $0;
      var $retval17 = $retval;
      STACKTOP = __stackBase__;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_rms($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $cp = __stackBase__;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $val;
      var $i;
      var $sum_squares;
      $self_addr = $self;
      $args_addr = $args;
      $val = 0;
      $sum_squares = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str8, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 16;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 16;
      break;
     case 4:
      $i = 0;
      var $8 = HEAP[$len];
      
      
      if ($i < $8) {
        __lastLabel__ = 4;
        __label__ = 5;
        break;
      } else {
        __lastLabel__ = 4;
        __label__ = 12;
        break;
      }
     case 5:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 11;
      break;
     case 7:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 11;
      break;
     case 9:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      
      
      var $39 = $val * $val + $sum_squares;
      $sum_squares = $39;
      
      
      var $42 = $i + HEAP[$size];
      $i = $42;
      var $43 = HEAP[$len];
      
      
      if ($i < $43) {
        __lastLabel__ = 11;
        __label__ = 5;
        break;
      } else {
        __lastLabel__ = 11;
        __label__ = 12;
        break;
      }
     case 12:
      var $46 = __lastLabel__ == 11 ? $43 : $8;
      
      if ($46 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $val = 0;
      __label__ = 15;
      break;
     case 14:
      
      
      
      
      
      var $53 = $sum_squares / (HEAP[$len] / HEAP[$size] | 0);
      var $54 = _sqrt($53);
      
      $val = $54 | 0;
      __label__ = 15;
      break;
     case 15:
      
      var $57 = _PyInt_FromLong($val);
      $0 = $57;
      __label__ = 16;
      break;
     case 16:
      
      $retval = $0;
      var $retval17 = $retval;
      STACKTOP = __stackBase__;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __sum2($a, $b, $len) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr;
      var $b_addr;
      var $len_addr;
      var $retval;
      var $0;
      var $i;
      var $sum;
      $a_addr = $a;
      $b_addr = $b;
      $len_addr = $len;
      $sum = 0;
      $i = 0;
      
      
      
      if ($i < $len_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      var $16 = HEAP[$a_addr + 2 * $i] * HEAP[$b_addr + 2 * $i] + $sum;
      $sum = $16;
      
      var $18 = $i + 1;
      $i = $18;
      
      
      
      if ($i < $len_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      $0 = $sum;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_findfit($self, $args) {
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
      var $cp1 = __stackBase__;
      var $cp2 = __stackBase__ + 4;
      var $len1 = __stackBase__ + 8;
      var $len2 = __stackBase__ + 12;
      var $j;
      var $best_j;
      var $aj_m1;
      var $aj_lm1;
      var $sum_ri_2;
      var $sum_aij_2;
      var $sum_aij_ri;
      var $result;
      var $best_result;
      var $factor;
      $self_addr = $self;
      $args_addr = $args;
      var $cp21 = $cp2;
      var $cp13 = $cp1;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str9, allocate([ $cp13, 0, 0, 0, $len1, 0, 0, 0, $cp21, 0, 0, 0, $len2, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      
      
      if ((HEAP[$len1] & 1 & 255) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      if ((HEAP[$len2] & 1 & 255) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $10 = HEAP[_AudioopError];
      _PyErr_SetString($10, __str10);
      $0 = 0;
      __label__ = 12;
      break;
     case 5:
      
      var $12 = HEAP[$len1] >> 1;
      HEAP[$len1] = $12;
      
      var $14 = HEAP[$len2] >> 1;
      HEAP[$len2] = $14;
      
      
      
      if (HEAP[$len1] < HEAP[$len2]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $18 = HEAP[_AudioopError];
      _PyErr_SetString($18, __str11);
      $0 = 0;
      __label__ = 12;
      break;
     case 7:
      var $19 = HEAP[$len2];
      var $20 = HEAP[$cp2];
      var $21 = HEAP[$cp2];
      var $22 = __sum2($21, $20, $19);
      $sum_ri_2 = $22;
      var $23 = HEAP[$len2];
      var $24 = HEAP[$cp1];
      var $25 = HEAP[$cp1];
      var $26 = __sum2($25, $24, $23);
      $sum_aij_2 = $26;
      var $27 = HEAP[$len2];
      var $28 = HEAP[$cp2];
      var $29 = HEAP[$cp1];
      var $30 = __sum2($29, $28, $27);
      $sum_aij_ri = $30;
      
      
      
      
      
      
      
      
      
      $result = ($sum_ri_2 * $sum_aij_2 - $sum_aij_ri * $sum_aij_ri) / $sum_aij_2;
      
      $best_result = $result;
      $best_j = 0;
      $j = 1;
      
      
      
      
      
      if (HEAP[$len1] - HEAP[$len2] >= $j) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      
      
      
      $aj_m1 = HEAP[HEAP[$cp1] + 2 * ($j - 1)];
      
      
      
      var $55 = HEAP[$len2] + -1;
      
      
      
      
      $aj_lm1 = HEAP[HEAP[$cp1] + 2 * ($55 + $j)];
      
      
      
      
      
      
      
      
      var $68 = $aj_lm1 * $aj_lm1 + $sum_aij_2 - $aj_m1 * $aj_m1;
      $sum_aij_2 = $68;
      var $69 = HEAP[$len2];
      var $70 = HEAP[$cp2];
      
      
      var $73 = HEAP[$cp1] + 2 * $j;
      var $74 = __sum2($73, $70, $69);
      $sum_aij_ri = $74;
      
      
      
      
      
      
      
      
      
      $result = ($sum_ri_2 * $sum_aij_2 - $sum_aij_ri * $sum_aij_ri) / $sum_aij_2;
      
      
      
      if ($result < $best_result) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      $best_result = $result;
      
      $best_j = $j;
      __label__ = 10;
      break;
     case 10:
      
      var $90 = $j + 1;
      $j = $90;
      
      
      
      
      
      if (HEAP[$len1] - HEAP[$len2] >= $j) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $96 = HEAP[$len2];
      var $97 = HEAP[$cp2];
      
      
      var $100 = HEAP[$cp1] + 2 * $best_j;
      var $101 = __sum2($100, $97, $96);
      
      
      $factor = $101 / $sum_ri_2;
      
      
      var $106 = _Py_BuildValue(__str12, allocate([ $best_j, 0, 0, 0, $factor, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_STACK));
      $0 = $106;
      __label__ = 12;
      break;
     case 12:
      
      $retval = $0;
      var $retval18 = $retval;
      STACKTOP = __stackBase__;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_findfactor($self, $args) {
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
      var $cp1 = __stackBase__;
      var $cp2 = __stackBase__ + 4;
      var $len1 = __stackBase__ + 8;
      var $len2 = __stackBase__ + 12;
      var $sum_ri_2;
      var $sum_aij_ri;
      var $result;
      $self_addr = $self;
      $args_addr = $args;
      var $cp21 = $cp2;
      var $cp13 = $cp1;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str13, allocate([ $cp13, 0, 0, 0, $len1, 0, 0, 0, $cp21, 0, 0, 0, $len2, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      
      
      if ((HEAP[$len1] & 1 & 255) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      if ((HEAP[$len2] & 1 & 255) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $10 = HEAP[_AudioopError];
      _PyErr_SetString($10, __str10);
      $0 = 0;
      __label__ = 8;
      break;
     case 5:
      
      
      
      if (HEAP[$len1] != HEAP[$len2]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $14 = HEAP[_AudioopError];
      _PyErr_SetString($14, __str14);
      $0 = 0;
      __label__ = 8;
      break;
     case 7:
      
      var $16 = HEAP[$len2] >> 1;
      HEAP[$len2] = $16;
      var $17 = HEAP[$len2];
      var $18 = HEAP[$cp2];
      var $19 = HEAP[$cp2];
      var $20 = __sum2($19, $18, $17);
      $sum_ri_2 = $20;
      var $21 = HEAP[$len2];
      var $22 = HEAP[$cp2];
      var $23 = HEAP[$cp1];
      var $24 = __sum2($23, $22, $21);
      $sum_aij_ri = $24;
      
      
      
      $result = $sum_aij_ri / $sum_ri_2;
      
      var $29 = _PyFloat_FromDouble($result);
      $0 = $29;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval13 = $retval;
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_findmax($self, $args) {
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
      var $cp1 = __stackBase__;
      var $len1 = __stackBase__ + 4;
      var $len2 = __stackBase__ + 8;
      var $j;
      var $best_j;
      var $aj_m1;
      var $aj_lm1;
      var $result;
      var $best_result;
      $self_addr = $self;
      $args_addr = $args;
      var $cp11 = $cp1;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str15, allocate([ $cp11, 0, 0, 0, $len1, 0, 0, 0, $len2, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      
      
      if ((HEAP[$len1] & 1 & 255) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $7 = HEAP[_AudioopError];
      _PyErr_SetString($7, __str10);
      $0 = 0;
      __label__ = 12;
      break;
     case 4:
      
      var $9 = HEAP[$len1] >> 1;
      HEAP[$len1] = $9;
      
      
      if (HEAP[$len2] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      if (HEAP[$len1] < HEAP[$len2]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $15 = HEAP[_AudioopError];
      _PyErr_SetString($15, __str16);
      $0 = 0;
      __label__ = 12;
      break;
     case 7:
      var $16 = HEAP[$len2];
      var $17 = HEAP[$cp1];
      var $18 = HEAP[$cp1];
      var $19 = __sum2($18, $17, $16);
      $result = $19;
      
      $best_result = $result;
      $best_j = 0;
      $j = 1;
      
      
      
      
      
      if (HEAP[$len1] - HEAP[$len2] >= $j) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      
      
      
      $aj_m1 = HEAP[HEAP[$cp1] + 2 * ($j - 1)];
      
      
      
      var $35 = HEAP[$len2] + -1;
      
      
      
      
      $aj_lm1 = HEAP[HEAP[$cp1] + 2 * ($35 + $j)];
      
      
      
      
      
      
      
      
      var $48 = $aj_lm1 * $aj_lm1 + $result - $aj_m1 * $aj_m1;
      $result = $48;
      
      
      
      if ($result > $best_result) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      $best_result = $result;
      
      $best_j = $j;
      __label__ = 10;
      break;
     case 10:
      
      var $55 = $j + 1;
      $j = $55;
      
      
      
      
      
      if (HEAP[$len1] - HEAP[$len2] >= $j) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $62 = _PyInt_FromLong($best_j);
      $0 = $62;
      __label__ = 12;
      break;
     case 12:
      
      $retval = $0;
      var $retval15 = $retval;
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_avgpp($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $cp = __stackBase__;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $val;
      var $prevval;
      var $prevextremevalid;
      var $prevextreme;
      var $i;
      var $avg;
      var $diff;
      var $prevdiff;
      var $extremediff;
      var $nextreme;
      $self_addr = $self;
      $args_addr = $args;
      $val = 0;
      $prevval = 0;
      $prevextremevalid = 0;
      $prevextreme = 0;
      $avg = 0;
      $nextreme = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str17, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 38;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 38;
      break;
     case 4:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      $prevval = HEAP[HEAP[$cp]];
      __label__ = 10;
      break;
     case 6:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      $prevval = HEAP[HEAP[$cp]];
      __label__ = 10;
      break;
     case 8:
      var $21 = HEAP[$size];
      
      if ($21 == 4) {
        __lastLabel__ = 8;
        __label__ = 9;
        break;
      } else {
        __lastLabel__ = 8;
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      
      $prevval = HEAP[HEAP[$cp]];
      __label__ = 10;
      break;
     case 10:
      var $_pr = HEAP[$size];
      __lastLabel__ = 10;
      __label__ = 11;
      break;
     case 11:
      var $27 = __lastLabel__ == 10 ? $_pr : $21;
      
      if ($27 == 1) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + HEAP[$size]];
      __label__ = 17;
      break;
     case 13:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + HEAP[$size]];
      __label__ = 17;
      break;
     case 15:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + HEAP[$size]];
      __label__ = 17;
      break;
     case 17:
      
      
      
      $prevdiff = $val - $prevval;
      var $52 = HEAP[$size];
      $i = $52;
      
      
      
      if ($i < HEAP[$len]) {
        __lastLabel__ = 17;
        __label__ = 19;
        break;
      } else {
        __lastLabel__ = 17;
        __label__ = 34;
        break;
      }
     case 18:
      var $_pr2 = HEAP[$size];
      __lastLabel__ = 18;
      __label__ = 19;
      break;
     case 19:
      var $56 = __lastLabel__ == 18 ? $_pr2 : $52;
      
      if ($56 == 1) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 25;
      break;
     case 21:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 25;
      break;
     case 23:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 25;
      break;
     case 25:
      
      
      
      $diff = $val - $prevval;
      var $81 = $diff;
      
      
      
      if ($prevdiff * $81 < 0) {
        __lastLabel__ = 25;
        __label__ = 26;
        break;
      } else {
        __lastLabel__ = 25;
        __label__ = 31;
        break;
      }
     case 26:
      
      
      if ($prevextremevalid != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      
      
      
      $extremediff = $prevval - $prevextreme;
      
      
      if ($extremediff < 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      var $93 = 0 - $extremediff;
      $extremediff = $93;
      __label__ = 29;
      break;
     case 29:
      
      
      
      var $97 = $extremediff + $avg;
      $avg = $97;
      
      var $99 = $nextreme + 1;
      $nextreme = $99;
      __label__ = 30;
      break;
     case 30:
      $prevextremevalid = 1;
      
      $prevextreme = $prevval;
      var $_pr1 = $diff;
      __lastLabel__ = 30;
      __label__ = 31;
      break;
     case 31:
      var $101 = __lastLabel__ == 30 ? $_pr1 : $81;
      
      $prevval = $val;
      
      if ($101 != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      $prevdiff = $diff;
      __label__ = 33;
      break;
     case 33:
      
      
      var $107 = $i + HEAP[$size];
      $i = $107;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      if ($nextreme == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      $val = 0;
      __label__ = 37;
      break;
     case 36:
      
      
      
      
      
      $val = $avg / $nextreme | 0;
      __label__ = 37;
      break;
     case 37:
      
      var $119 = _PyInt_FromLong($val);
      $0 = $119;
      __label__ = 38;
      break;
     case 38:
      
      $retval = $0;
      var $retval37 = $retval;
      STACKTOP = __stackBase__;
      return $retval37;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_maxpp($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $cp = __stackBase__;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $val;
      var $prevval;
      var $prevextremevalid;
      var $prevextreme;
      var $i;
      var $max;
      var $diff;
      var $prevdiff;
      var $extremediff;
      $self_addr = $self;
      $args_addr = $args;
      $val = 0;
      $prevval = 0;
      $prevextremevalid = 0;
      $prevextreme = 0;
      $max = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str18, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 36;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 36;
      break;
     case 4:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      $prevval = HEAP[HEAP[$cp]];
      __label__ = 10;
      break;
     case 6:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      $prevval = HEAP[HEAP[$cp]];
      __label__ = 10;
      break;
     case 8:
      var $21 = HEAP[$size];
      
      if ($21 == 4) {
        __lastLabel__ = 8;
        __label__ = 9;
        break;
      } else {
        __lastLabel__ = 8;
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      
      $prevval = HEAP[HEAP[$cp]];
      __label__ = 10;
      break;
     case 10:
      var $_pr = HEAP[$size];
      __lastLabel__ = 10;
      __label__ = 11;
      break;
     case 11:
      var $27 = __lastLabel__ == 10 ? $_pr : $21;
      
      if ($27 == 1) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + HEAP[$size]];
      __label__ = 17;
      break;
     case 13:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + HEAP[$size]];
      __label__ = 17;
      break;
     case 15:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + HEAP[$size]];
      __label__ = 17;
      break;
     case 17:
      
      
      
      $prevdiff = $val - $prevval;
      var $52 = HEAP[$size];
      $i = $52;
      
      
      
      if ($i < HEAP[$len]) {
        __lastLabel__ = 17;
        __label__ = 19;
        break;
      } else {
        __lastLabel__ = 17;
        __label__ = 35;
        break;
      }
     case 18:
      var $_pr2 = HEAP[$size];
      __lastLabel__ = 18;
      __label__ = 19;
      break;
     case 19:
      var $56 = __lastLabel__ == 18 ? $_pr2 : $52;
      
      if ($56 == 1) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 25;
      break;
     case 21:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 25;
      break;
     case 23:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 25;
      break;
     case 25:
      
      
      
      $diff = $val - $prevval;
      var $81 = $diff;
      
      
      
      if ($prevdiff * $81 < 0) {
        __lastLabel__ = 25;
        __label__ = 26;
        break;
      } else {
        __lastLabel__ = 25;
        __label__ = 32;
        break;
      }
     case 26:
      
      
      if ($prevextremevalid != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 27:
      
      
      
      $extremediff = $prevval - $prevextreme;
      
      
      if ($extremediff < 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      var $93 = 0 - $extremediff;
      $extremediff = $93;
      __label__ = 29;
      break;
     case 29:
      
      
      
      if ($extremediff > $max) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      $max = $extremediff;
      __label__ = 31;
      break;
     case 31:
      $prevextremevalid = 1;
      
      $prevextreme = $prevval;
      var $_pr1 = $diff;
      __lastLabel__ = 31;
      __label__ = 32;
      break;
     case 32:
      var $99 = __lastLabel__ == 31 ? $_pr1 : $81;
      
      $prevval = $val;
      
      if ($99 != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      $prevdiff = $diff;
      __label__ = 34;
      break;
     case 34:
      
      
      var $105 = $i + HEAP[$size];
      $i = $105;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      var $110 = _PyInt_FromLong($max);
      $0 = $110;
      __label__ = 36;
      break;
     case 36:
      
      $retval = $0;
      var $retval35 = $retval;
      STACKTOP = __stackBase__;
      return $retval35;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_cross($self, $args) {
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
      var $cp = __stackBase__;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $val;
      var $i;
      var $prevval;
      var $ncross;
      $self_addr = $self;
      $args_addr = $args;
      $val = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str19, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
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
      $ncross = -1;
      $prevval = 17;
      $i = 0;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 5:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i] >> 7;
      __label__ = 11;
      break;
     case 7:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i] >> 15;
      __label__ = 11;
      break;
     case 9:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i] >> 31;
      __label__ = 11;
      break;
     case 11:
      
      var $37 = $val & 1;
      $val = $37;
      
      
      
      if ($val != $prevval) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      var $42 = $ncross + 1;
      $ncross = $42;
      __label__ = 13;
      break;
     case 13:
      
      $prevval = $val;
      
      
      var $46 = $i + HEAP[$size];
      $i = $46;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      var $51 = _PyInt_FromLong($ncross);
      $0 = $51;
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
  function _audioop_mul($self, $args) {
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
      var $cp = __stackBase__;
      var $ncp;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $val;
      var $factor = __stackBase__ + 12;
      var $fval;
      var $maxval;
      var $rv;
      var $i;
      $self_addr = $self;
      $args_addr = $args;
      $val = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str20, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $factor, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "double*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 32;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 32;
      break;
     case 4:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $maxval = 127;
      __label__ = 11;
      break;
     case 6:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $maxval = 32767;
      __label__ = 11;
      break;
     case 8:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $maxval = 2147483647;
      __label__ = 11;
      break;
     case 10:
      var $14 = HEAP[_AudioopError];
      _PyErr_SetString($14, __str);
      $0 = 0;
      __label__ = 32;
      break;
     case 11:
      var $15 = HEAP[$len];
      var $16 = _PyString_FromStringAndSize(0, $15);
      $rv = $16;
      
      if ($16 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = 0;
      __label__ = 32;
      break;
     case 13:
      
      var $19 = _PyString_AsString($rv);
      $ncp = $19;
      $i = 0;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 14:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 20;
      break;
     case 16:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 20;
      break;
     case 18:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 20;
      break;
     case 20:
      
      
      
      
      $fval = $val * HEAP[$factor];
      
      
      
      var $52 = $maxval;
      if ($fval > $maxval) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      $fval = $52;
      __label__ = 24;
      break;
     case 22:
      
      
      
      if (0 - $52 > $fval) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      $fval = 0 - $maxval;
      __label__ = 24;
      break;
     case 24:
      
      
      $val = $fval | 0;
      
      
      if (HEAP[$size] == 1) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      
      HEAP[$ncp + $i] = $val & 255;
      __label__ = 30;
      break;
     case 26:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      
      
      HEAP[$ncp + $i] = $val & 65535;
      __label__ = 30;
      break;
     case 28:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      
      HEAP[$ncp + $i] = $val;
      __label__ = 30;
      break;
     case 30:
      
      
      var $84 = $i + HEAP[$size];
      $i = $84;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      $0 = $rv;
      __label__ = 32;
      break;
     case 32:
      
      $retval = $0;
      var $retval33 = $retval;
      STACKTOP = __stackBase__;
      return $retval33;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_tomono($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    _memset(__stackBase__, 0, 28);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $cp = __stackBase__;
      var $ncp;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $val1;
      var $val2;
      var $fac1 = __stackBase__ + 12;
      var $fac2 = __stackBase__ + 20;
      var $fval;
      var $maxval;
      var $rv;
      var $i;
      $self_addr = $self;
      $args_addr = $args;
      $val1 = 0;
      $val2 = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str21, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $fac1, 0, 0, 0, $fac2, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "double*", 0, 0, 0, "double*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 41;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 41;
      break;
     case 4:
      
      
      
      
      
      
      if (((HEAP[$len] / HEAP[$size] | 0) & 1 & 255) != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $13 = HEAP[_AudioopError];
      _PyErr_SetString($13, __str1);
      $0 = 0;
      __label__ = 41;
      break;
     case 6:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $maxval = 127;
      __label__ = 13;
      break;
     case 8:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $maxval = 32767;
      __label__ = 13;
      break;
     case 10:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $maxval = 2147483647;
      __label__ = 13;
      break;
     case 12:
      var $20 = HEAP[_AudioopError];
      _PyErr_SetString($20, __str);
      $0 = 0;
      __label__ = 41;
      break;
     case 13:
      
      var $22 = HEAP[$len] / 2 | 0;
      var $23 = _PyString_FromStringAndSize(0, $22);
      $rv = $23;
      
      if ($23 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = 0;
      __label__ = 41;
      break;
     case 15:
      
      var $26 = _PyString_AsString($rv);
      $ncp = $26;
      $i = 0;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 16:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      $val1 = HEAP[HEAP[$cp] + $i];
      __label__ = 22;
      break;
     case 18:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      
      $val1 = HEAP[HEAP[$cp] + $i];
      __label__ = 22;
      break;
     case 20:
      var $45 = HEAP[$size];
      
      if ($45 == 4) {
        __lastLabel__ = 20;
        __label__ = 21;
        break;
      } else {
        __lastLabel__ = 20;
        __label__ = 23;
        break;
      }
     case 21:
      
      
      
      
      
      $val1 = HEAP[HEAP[$cp] + $i];
      __label__ = 22;
      break;
     case 22:
      var $_pr = HEAP[$size];
      __lastLabel__ = 22;
      __label__ = 23;
      break;
     case 23:
      var $52 = __lastLabel__ == 22 ? $_pr : $45;
      
      if ($52 == 1) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      
      
      $val2 = HEAP[HEAP[$cp] + $i + 1];
      __label__ = 29;
      break;
     case 25:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      
      
      
      $val2 = HEAP[HEAP[$cp] + $i + 2];
      __label__ = 29;
      break;
     case 27:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      
      
      $val2 = HEAP[HEAP[$cp] + $i + 4];
      __label__ = 29;
      break;
     case 29:
      
      
      
      
      
      
      
      
      
      $fval = $val1 * HEAP[$fac1] + $val2 * HEAP[$fac2];
      
      
      
      var $89 = $maxval;
      if ($fval > $maxval) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      $fval = $89;
      __label__ = 33;
      break;
     case 31:
      
      
      
      if (0 - $89 > $fval) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      $fval = 0 - $maxval;
      __label__ = 33;
      break;
     case 33:
      
      
      $val1 = $fval | 0;
      
      
      if (HEAP[$size] == 1) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      
      
      HEAP[$ncp + ($i / 2 | 0)] = $val1 & 255;
      __label__ = 39;
      break;
     case 35:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      
      
      
      HEAP[$ncp + ($i / 2 | 0)] = $val1 & 65535;
      __label__ = 39;
      break;
     case 37:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      
      
      HEAP[$ncp + ($i / 2 | 0)] = $val1;
      __label__ = 39;
      break;
     case 39:
      
      
      
      var $125 = HEAP[$size] * 2 + $i;
      $i = $125;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      
      $0 = $rv;
      __label__ = 41;
      break;
     case 41:
      
      $retval = $0;
      var $retval41 = $retval;
      STACKTOP = __stackBase__;
      return $retval41;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_tostereo($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    _memset(__stackBase__, 0, 28);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $cp = __stackBase__;
      var $ncp;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $val1;
      var $val2;
      var $val;
      var $fac1 = __stackBase__ + 12;
      var $fac2 = __stackBase__ + 20;
      var $fval;
      var $maxval;
      var $rv;
      var $i;
      $self_addr = $self;
      $args_addr = $args;
      $val = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str22, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $fac1, 0, 0, 0, $fac2, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "double*", 0, 0, 0, "double*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 45;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 45;
      break;
     case 4:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $maxval = 127;
      __label__ = 11;
      break;
     case 6:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $maxval = 32767;
      __label__ = 11;
      break;
     case 8:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $maxval = 2147483647;
      __label__ = 11;
      break;
     case 10:
      var $14 = HEAP[_AudioopError];
      _PyErr_SetString($14, __str);
      $0 = 0;
      __label__ = 45;
      break;
     case 11:
      
      
      if (HEAP[$len] > 1073741823) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $17 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($17, __str23);
      $0 = 0;
      __label__ = 45;
      break;
     case 13:
      
      var $19 = HEAP[$len] * 2;
      var $20 = _PyString_FromStringAndSize(0, $19);
      $rv = $20;
      
      
      if ($rv == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = 0;
      __label__ = 45;
      break;
     case 15:
      
      var $24 = _PyString_AsString($rv);
      $ncp = $24;
      $i = 0;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 16:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 22;
      break;
     case 18:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 22;
      break;
     case 20:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 22;
      break;
     case 22:
      
      
      
      
      $fval = $val * HEAP[$fac1];
      
      
      
      var $57 = $maxval;
      if ($fval > $maxval) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      $fval = $57;
      __label__ = 26;
      break;
     case 24:
      
      
      
      if (0 - $57 > $fval) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      $fval = 0 - $maxval;
      __label__ = 26;
      break;
     case 26:
      
      
      $val1 = $fval | 0;
      
      
      
      
      $fval = $val * HEAP[$fac2];
      
      
      
      var $72 = $maxval;
      if ($fval > $maxval) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      $fval = $72;
      __label__ = 30;
      break;
     case 28:
      
      
      
      if (0 - $72 > $fval) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      $fval = 0 - $maxval;
      __label__ = 30;
      break;
     case 30:
      
      
      $val2 = $fval | 0;
      
      
      if (HEAP[$size] == 1) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      
      
      HEAP[$ncp + $i * 2] = $val1 & 255;
      __label__ = 36;
      break;
     case 32:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      
      
      
      HEAP[$ncp + $i * 2] = $val1 & 65535;
      __label__ = 36;
      break;
     case 34:
      var $97 = HEAP[$size];
      
      if ($97 == 4) {
        __lastLabel__ = 34;
        __label__ = 35;
        break;
      } else {
        __lastLabel__ = 34;
        __label__ = 37;
        break;
      }
     case 35:
      
      
      
      
      
      
      HEAP[$ncp + $i * 2] = $val1;
      __label__ = 36;
      break;
     case 36:
      var $_pr = HEAP[$size];
      __lastLabel__ = 36;
      __label__ = 37;
      break;
     case 37:
      var $105 = __lastLabel__ == 36 ? $_pr : $97;
      
      if ($105 == 1) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      
      
      
      HEAP[$ncp + $i * 2 + 1] = $val2 & 255;
      __label__ = 43;
      break;
     case 39:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      
      
      
      
      
      
      HEAP[$ncp + $i * 2 + 2] = $val2 & 65535;
      __label__ = 43;
      break;
     case 41:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      
      
      
      HEAP[$ncp + $i * 2 + 4] = $val2;
      __label__ = 43;
      break;
     case 43:
      
      
      var $135 = $i + HEAP[$size];
      $i = $135;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      
      $0 = $rv;
      __label__ = 45;
      break;
     case 45:
      
      $retval = $0;
      var $retval45 = $retval;
      STACKTOP = __stackBase__;
      return $retval45;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_add($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    _memset(__stackBase__, 0, 20);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $iftmp_286;
      var $0;
      var $cp1 = __stackBase__;
      var $cp2 = __stackBase__ + 4;
      var $ncp;
      var $len1 = __stackBase__ + 8;
      var $len2 = __stackBase__ + 12;
      var $size = __stackBase__ + 16;
      var $val1;
      var $val2;
      var $maxval;
      var $newval;
      var $rv;
      var $i;
      $self_addr = $self;
      $args_addr = $args;
      $val1 = 0;
      $val2 = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str24, allocate([ $cp1, 0, 0, 0, $len1, 0, 0, 0, $cp2, 0, 0, 0, $len2, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 49;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len1];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 49;
      break;
     case 4:
      
      
      
      if (HEAP[$len1] != HEAP[$len2]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $11 = HEAP[_AudioopError];
      _PyErr_SetString($11, __str25);
      $0 = 0;
      __label__ = 49;
      break;
     case 6:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $maxval = 127;
      __label__ = 13;
      break;
     case 8:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $maxval = 32767;
      __label__ = 13;
      break;
     case 10:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $maxval = 2147483647;
      __label__ = 13;
      break;
     case 12:
      var $18 = HEAP[_AudioopError];
      _PyErr_SetString($18, __str);
      $0 = 0;
      __label__ = 49;
      break;
     case 13:
      var $19 = HEAP[$len1];
      var $20 = _PyString_FromStringAndSize(0, $19);
      $rv = $20;
      
      if ($20 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = 0;
      __label__ = 49;
      break;
     case 15:
      
      var $23 = _PyString_AsString($rv);
      $ncp = $23;
      $i = 0;
      
      
      
      if ($i < HEAP[$len1]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 16:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      $val1 = HEAP[HEAP[$cp1] + $i];
      __label__ = 22;
      break;
     case 18:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      
      $val1 = HEAP[HEAP[$cp1] + $i];
      __label__ = 22;
      break;
     case 20:
      var $42 = HEAP[$size];
      
      if ($42 == 4) {
        __lastLabel__ = 20;
        __label__ = 21;
        break;
      } else {
        __lastLabel__ = 20;
        __label__ = 23;
        break;
      }
     case 21:
      
      
      
      
      
      $val1 = HEAP[HEAP[$cp1] + $i];
      __label__ = 22;
      break;
     case 22:
      var $_pr = HEAP[$size];
      __lastLabel__ = 22;
      __label__ = 23;
      break;
     case 23:
      var $49 = __lastLabel__ == 22 ? $_pr : $42;
      
      if ($49 == 1) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      
      $val2 = HEAP[HEAP[$cp2] + $i];
      __label__ = 29;
      break;
     case 25:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      
      
      $val2 = HEAP[HEAP[$cp2] + $i];
      __label__ = 29;
      break;
     case 27:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      
      $val2 = HEAP[HEAP[$cp2] + $i];
      __label__ = 29;
      break;
     case 29:
      
      
      
      $newval = $val2 + $val1;
      
      
      
      var $77 = $maxval;
      if ($newval > $maxval) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      $newval = $77;
      __label__ = 40;
      break;
     case 31:
      
      
      
      if (0 - $77 > $newval) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      $newval = 0 - $maxval;
      __label__ = 40;
      break;
     case 33:
      var $83 = HEAP[$size];
      
      if ($83 == 4) {
        __lastLabel__ = 33;
        __label__ = 34;
        break;
      } else {
        __lastLabel__ = 33;
        __label__ = 41;
        break;
      }
     case 34:
      
      
      
      
      if (($val1 ^ $newval) < 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 35:
      
      
      
      
      if (($val2 ^ $newval) < 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 36:
      
      
      var $95 = $maxval;
      if ($val1 <= 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      $iftmp_286 = 0 - $95;
      __label__ = 39;
      break;
     case 38:
      $iftmp_286 = $95;
      __label__ = 39;
      break;
     case 39:
      
      $newval = $iftmp_286;
      __label__ = 40;
      break;
     case 40:
      var $_pr1 = HEAP[$size];
      __lastLabel__ = 40;
      __label__ = 41;
      break;
     case 41:
      var $98 = __lastLabel__ == 40 ? $_pr1 : $83;
      
      if ($98 == 1) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      
      HEAP[$ncp + $i] = $newval & 255;
      __label__ = 47;
      break;
     case 43:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      
      
      HEAP[$ncp + $i] = $newval & 65535;
      __label__ = 47;
      break;
     case 45:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      
      
      
      HEAP[$ncp + $i] = $newval;
      __label__ = 47;
      break;
     case 47:
      
      
      var $122 = $i + HEAP[$size];
      $i = $122;
      
      
      
      if ($i < HEAP[$len1]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      
      $0 = $rv;
      __label__ = 49;
      break;
     case 49:
      
      $retval = $0;
      var $retval48 = $retval;
      STACKTOP = __stackBase__;
      return $retval48;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_bias($self, $args) {
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
      var $cp = __stackBase__;
      var $ncp;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $val;
      var $rv;
      var $i;
      var $bias = __stackBase__ + 12;
      $self_addr = $self;
      $args_addr = $args;
      $val = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str26, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $bias, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 22;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 22;
      break;
     case 4:
      var $8 = HEAP[$len];
      var $9 = _PyString_FromStringAndSize(0, $8);
      $rv = $9;
      
      
      if ($rv == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 22;
      break;
     case 6:
      
      var $13 = _PyString_AsString($rv);
      $ncp = $13;
      $i = 0;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 7:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 13;
      break;
     case 9:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 13;
      break;
     case 11:
      var $32 = HEAP[$size];
      
      if ($32 == 4) {
        __lastLabel__ = 11;
        __label__ = 12;
        break;
      } else {
        __lastLabel__ = 11;
        __label__ = 14;
        break;
      }
     case 12:
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 13;
      break;
     case 13:
      var $_pr = HEAP[$size];
      __lastLabel__ = 13;
      __label__ = 14;
      break;
     case 14:
      var $39 = __lastLabel__ == 13 ? $_pr : $32;
      
      if ($39 == 1) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $45 = (HEAP[$bias] & 255) + ($val & 255);
      
      
      
      HEAP[$ncp + $i] = $45;
      __label__ = 20;
      break;
     case 16:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      
      var $59 = (HEAP[$bias] & 65535) + ($val & 65535);
      HEAP[$ncp + $i] = $59;
      __label__ = 20;
      break;
     case 18:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      
      var $68 = $val + HEAP[$bias];
      HEAP[$ncp + $i] = $68;
      __label__ = 20;
      break;
     case 20:
      
      
      var $71 = $i + HEAP[$size];
      $i = $71;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      $0 = $rv;
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
  function _audioop_reverse($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $cp = __stackBase__;
      var $ncp;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $val;
      var $rv;
      var $i;
      var $j;
      $self_addr = $self;
      $args_addr = $args;
      $val = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str27, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 22;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 22;
      break;
     case 4:
      var $8 = HEAP[$len];
      var $9 = _PyString_FromStringAndSize(0, $8);
      $rv = $9;
      
      
      if ($rv == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 22;
      break;
     case 6:
      
      var $13 = _PyString_AsString($rv);
      $ncp = $13;
      $i = 0;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 7:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i] << 8;
      __label__ = 13;
      break;
     case 9:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 13;
      break;
     case 11:
      var $33 = HEAP[$size];
      
      if ($33 == 4) {
        __lastLabel__ = 11;
        __label__ = 12;
        break;
      } else {
        __lastLabel__ = 11;
        __label__ = 14;
        break;
      }
     case 12:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i] >> 16;
      __label__ = 13;
      break;
     case 13:
      var $_pr = HEAP[$size];
      __lastLabel__ = 13;
      __label__ = 14;
      break;
     case 14:
      var $41 = __lastLabel__ == 13 ? $_pr : $33;
      
      
      
      
      
      
      $j = HEAP[$len] + (0 - $41) + (0 - $i);
      
      if ($41 == 1) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      
      HEAP[$ncp + $j] = $val >> 8 & 255;
      __label__ = 20;
      break;
     case 16:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      
      HEAP[$ncp + $j] = $val & 65535;
      __label__ = 20;
      break;
     case 18:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      
      HEAP[$ncp + $j] = $val << 16;
      __label__ = 20;
      break;
     case 20:
      
      
      var $71 = $i + HEAP[$size];
      $i = $71;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      $0 = $rv;
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
  function _audioop_lin2lin($self, $args) {
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
      var $cp = __stackBase__;
      var $ncp;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $size2 = __stackBase__ + 12;
      var $val;
      var $rv;
      var $i;
      var $j;
      $self_addr = $self;
      $args_addr = $args;
      $val = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str28, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $size2, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
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
      var $8 = HEAP[$size2];
      var $9 = _audioop_check_size($8);
      
      if ($9 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 25;
      break;
     case 6:
      
      
      
      
      
      
      if ((HEAP[$len] / HEAP[$size] | 0) > (2147483647 / HEAP[$size2] | 0)) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $17 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($17, __str23);
      $0 = 0;
      __label__ = 25;
      break;
     case 8:
      
      
      
      
      var $22 = HEAP[$size2] * (HEAP[$len] / HEAP[$size] | 0);
      var $23 = _PyString_FromStringAndSize(0, $22);
      $rv = $23;
      
      
      if ($rv == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = 0;
      __label__ = 25;
      break;
     case 10:
      
      var $27 = _PyString_AsString($rv);
      $ncp = $27;
      $i = 0;
      $j = 0;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 11:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i] << 8;
      __label__ = 17;
      break;
     case 13:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 17;
      break;
     case 15:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i] >> 16;
      __label__ = 17;
      break;
     case 17:
      
      
      if (HEAP[$size2] == 1) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      
      
      HEAP[$ncp + $j] = $val >> 8 & 255;
      __label__ = 23;
      break;
     case 19:
      
      
      if (HEAP[$size2] == 2) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      
      
      HEAP[$ncp + $j] = $val & 65535;
      __label__ = 23;
      break;
     case 21:
      
      
      if (HEAP[$size2] == 4) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      
      
      HEAP[$ncp + $j] = $val << 16;
      __label__ = 23;
      break;
     case 23:
      
      
      var $81 = $i + HEAP[$size];
      $i = $81;
      
      
      var $84 = $j + HEAP[$size2];
      $j = $84;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      $0 = $rv;
      __label__ = 25;
      break;
     case 25:
      
      $retval = $0;
      var $retval26 = $retval;
      STACKTOP = __stackBase__;
      return $retval26;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _gcd($a, $b) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr;
      var $b_addr;
      var $retval;
      var $0;
      var $tmp;
      $a_addr = $a;
      $b_addr = $b;
      
      var $2 = $a_addr;
      if ($b > 0) {
        __lastLabel__ = -1;
        __label__ = 1;
        break;
      } else {
        __lastLabel__ = -1;
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = __lastLabel__ == 1 ? $8 : $2;
      
      var $5 = $3 % $b_addr;
      $tmp = $5;
      
      $a_addr = $b_addr;
      $b_addr = $5;
      
      var $8 = $a_addr;
      if ($5 > 0) {
        __lastLabel__ = 1;
        __label__ = 1;
        break;
      } else {
        __lastLabel__ = 1;
        __label__ = 2;
        break;
      }
     case 2:
      var $_lcssa = __lastLabel__ == -1 ? $2 : $8;
      $0 = $_lcssa;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_ratecv($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    _memset(__stackBase__, 0, 48);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $iftmp_386;
      var $0;
      var $cp = __stackBase__;
      var $ncp;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $nchannels = __stackBase__ + 12;
      var $inrate = __stackBase__ + 16;
      var $outrate = __stackBase__ + 20;
      var $weightA = __stackBase__ + 24;
      var $weightB = __stackBase__ + 28;
      var $chan;
      var $d = __stackBase__ + 32;
      var $prev_i;
      var $cur_i;
      var $cur_o;
      var $state = __stackBase__ + 36;
      var $samps = __stackBase__ + 40;
      var $str = __stackBase__ + 44;
      var $rv;
      var $bytes_per_frame;
      var $q;
      $self_addr = $self;
      $args_addr = $args;
      $rv = 0;
      HEAP[$weightA] = 1;
      HEAP[$weightB] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str29, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $nchannels, 0, 0, 0, $inrate, 0, 0, 0, $outrate, 0, 0, 0, $state, 0, 0, 0, $weightA, 0, 0, 0, $weightB, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 78;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = _audioop_check_size($4);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 78;
      break;
     case 4:
      
      
      if (HEAP[$nchannels] <= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $9 = HEAP[_AudioopError];
      _PyErr_SetString($9, __str30);
      $0 = 0;
      __label__ = 78;
      break;
     case 6:
      
      
      
      $bytes_per_frame = HEAP[$nchannels] * HEAP[$size];
      
      
      
      
      
      if (($bytes_per_frame / HEAP[$nchannels] | 0) != HEAP[$size]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $18 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($18, __str31);
      $0 = 0;
      __label__ = 78;
      break;
     case 8:
      
      
      if (HEAP[$weightA] <= 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$weightB] < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $23 = HEAP[_AudioopError];
      _PyErr_SetString($23, __str32);
      $0 = 0;
      __label__ = 78;
      break;
     case 11:
      
      
      
      
      if (HEAP[$len] % $bytes_per_frame != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $28 = HEAP[_AudioopError];
      _PyErr_SetString($28, __str1);
      $0 = 0;
      __label__ = 78;
      break;
     case 13:
      
      
      if (HEAP[$inrate] <= 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if (HEAP[$outrate] <= 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $33 = HEAP[_AudioopError];
      _PyErr_SetString($33, __str33);
      $0 = 0;
      __label__ = 78;
      break;
     case 16:
      var $34 = HEAP[$outrate];
      var $35 = HEAP[$inrate];
      var $36 = _gcd($35, $34);
      HEAP[$d] = $36;
      
      
      var $39 = HEAP[$inrate] / HEAP[$d] | 0;
      HEAP[$inrate] = $39;
      
      
      var $42 = HEAP[$outrate] / HEAP[$d] | 0;
      HEAP[$outrate] = $42;
      
      
      if (HEAP[$nchannels] > 1073741823) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $45 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($45, __str23);
      $0 = 0;
      __label__ = 78;
      break;
     case 18:
      
      var $47 = HEAP[$nchannels] * 4;
      var $48 = _malloc($47);
      
      $prev_i = $48;
      
      var $51 = HEAP[$nchannels] * 4;
      var $52 = _malloc($51);
      
      $cur_i = $52;
      
      
      if ($prev_i == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      if ($cur_i == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $58 = _PyErr_NoMemory();
      __label__ = 73;
      break;
     case 21:
      
      
      var $61 = HEAP[$len] / $bytes_per_frame | 0;
      HEAP[$len] = $61;
      
      
      if (HEAP[$state] == __Py_NoneStruct) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      var $65 = 0 - HEAP[$outrate];
      HEAP[$d] = $65;
      $chan = 0;
      
      
      
      if ($chan < HEAP[$nchannels]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 23:
      
      
      
      HEAP[$cur_i + 4 * $chan] = 0;
      
      
      
      var $75 = HEAP[$cur_i + 4 * $chan];
      
      
      
      HEAP[$prev_i + 4 * $chan] = $75;
      
      var $80 = $chan + 1;
      $chan = $80;
      
      
      
      if ($chan < HEAP[$nchannels]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 24:
      var $84 = HEAP[$state];
      var $85 = _PyArg_ParseTuple($84, __str34, allocate([ $d, 0, 0, 0, _PyTuple_Type, 0, 0, 0, $samps, 0, 0, 0 ], [ "i32*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($85 == 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      var $87 = HEAP[$samps];
      var $88 = _PyTuple_Size($87);
      
      
      if ($88 != HEAP[$nchannels]) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      var $91 = HEAP[_AudioopError];
      _PyErr_SetString($91, __str35);
      __label__ = 73;
      break;
     case 27:
      $chan = 0;
      __label__ = 30;
      break;
     case 28:
      
      
      var $94 = $cur_i + 4 * $chan;
      
      
      var $97 = $prev_i + 4 * $chan;
      var $98 = HEAP[$samps];
      
      var $100 = _PyTuple_GetItem($98, $chan);
      var $101 = _PyArg_ParseTuple($100, __str36, allocate([ $97, 0, 0, 0, $94, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($101 == 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      var $104 = $chan + 1;
      $chan = $104;
      __label__ = 30;
      break;
     case 30:
      
      
      
      if ($chan < HEAP[$nchannels]) {
        __label__ = 28;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      if (HEAP[$len] > 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      
      $iftmp_386 = ((HEAP[$len] - 1) / HEAP[$inrate] | 0) + 1;
      __label__ = 34;
      break;
     case 33:
      $iftmp_386 = 0;
      __label__ = 34;
      break;
     case 34:
      
      $q = $iftmp_386;
      
      
      
      
      
      
      if (((2147483647 / $q | 0) / $bytes_per_frame | 0) < HEAP[$outrate]) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      HEAP[$str] = 0;
      __label__ = 37;
      break;
     case 36:
      
      
      
      
      var $126 = $q * HEAP[$outrate] * $bytes_per_frame;
      var $127 = _PyString_FromStringAndSize(0, $126);
      HEAP[$str] = $127;
      
      if ($127 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      var $129 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($129, __str23);
      __label__ = 73;
      break;
     case 38:
      var $130 = HEAP[$str];
      var $131 = _PyString_AsString($130);
      $ncp = $131;
      var $_pr = HEAP[$d];
      __lastLabel__ = 38;
      __label__ = 62;
      break;
     case 39:
      
      
      if (HEAP[$len] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 40:
      var $134 = HEAP[$nchannels];
      var $135 = _PyTuple_New($134);
      HEAP[$samps] = $135;
      
      
      if (HEAP[$samps] == 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 41:
      $chan = 0;
      
      
      
      if ($chan < HEAP[$nchannels]) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      var $144 = HEAP[$cur_i + 4 * $chan];
      
      
      
      var $148 = HEAP[$prev_i + 4 * $chan];
      var $149 = _Py_BuildValue(__str6, allocate([ $148, 0, 0, 0, $144, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      var $150 = HEAP[$samps];
      
      var $152 = _PyTuple_SetItem($150, $chan, $149);
      
      var $154 = $chan + 1;
      $chan = $154;
      
      
      
      if ($chan < HEAP[$nchannels]) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      var $158 = _PyErr_Occurred();
      
      if ($158 != 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      
      var $161 = $ncp;
      var $162 = HEAP[$str];
      var $163 = _PyString_AsString($162);
      
      var $165 = $161 - $163;
      HEAP[$len] = $165;
      
      
      if (HEAP[$len] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 45:
      var $168 = _PyString_FromStringAndSize(__str37, 0);
      $rv = $168;
      var $169 = HEAP[$str];
      
      
      var $172 = HEAP[$169] - 1;
      var $173 = $169;
      HEAP[$173] = $172;
      
      
      
      if (HEAP[$169] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      
      
      var $181 = HEAP[HEAP[HEAP[$str] + 4] + 24];
      var $182 = HEAP[$str];
      FUNCTION_TABLE[$181]($182);
      __label__ = 47;
      break;
     case 47:
      
      HEAP[$str] = $rv;
      __label__ = 49;
      break;
     case 48:
      var $184 = HEAP[$len];
      var $185 = __PyString_Resize($str, $184);
      
      if ($185 < 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 49:
      var $187 = HEAP[$samps];
      var $188 = HEAP[$d];
      var $189 = HEAP[$str];
      var $190 = _Py_BuildValue(__str38, allocate([ $189, 0, 0, 0, $188, 0, 0, 0, $187, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $rv = $190;
      var $191 = HEAP[$samps];
      
      
      var $194 = HEAP[$191] - 1;
      var $195 = $191;
      HEAP[$195] = $194;
      
      
      
      if (HEAP[$191] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      
      
      
      var $203 = HEAP[HEAP[HEAP[$samps] + 4] + 24];
      var $204 = HEAP[$samps];
      FUNCTION_TABLE[$203]($204);
      __label__ = 51;
      break;
     case 51:
      var $205 = HEAP[$str];
      
      
      var $208 = HEAP[$205] - 1;
      var $209 = $205;
      HEAP[$209] = $208;
      
      
      
      if (HEAP[$205] == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 52:
      
      
      
      
      var $217 = HEAP[HEAP[HEAP[$str] + 4] + 24];
      var $218 = HEAP[$str];
      FUNCTION_TABLE[$217]($218);
      __label__ = 73;
      break;
     case 53:
      $chan = 0;
      
      
      
      if ($chan < HEAP[$nchannels]) {
        __label__ = 54;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 54:
      
      
      
      var $225 = HEAP[$cur_i + 4 * $chan];
      
      
      
      HEAP[$prev_i + 4 * $chan] = $225;
      
      
      if (HEAP[$size] == 1) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      
      
      
      
      var $235 = HEAP[HEAP[$cp]] << 8;
      
      
      
      HEAP[$cur_i + 4 * $chan] = $235;
      __label__ = 60;
      break;
     case 56:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      
      
      
      
      var $245 = HEAP[HEAP[$cp]];
      
      
      
      HEAP[$cur_i + 4 * $chan] = $245;
      __label__ = 60;
      break;
     case 58:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      
      
      
      
      var $255 = HEAP[HEAP[$cp]] >> 16;
      
      
      
      HEAP[$cur_i + 4 * $chan] = $255;
      __label__ = 60;
      break;
     case 60:
      
      
      var $261 = HEAP[$cp] + HEAP[$size];
      HEAP[$cp] = $261;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $278 = (HEAP[$weightB] * HEAP[$prev_i + 4 * $chan] + HEAP[$weightA] * HEAP[$cur_i + 4 * $chan]) / (HEAP[$weightB] + HEAP[$weightA]) | 0;
      
      
      
      HEAP[$cur_i + 4 * $chan] = $278;
      
      var $283 = $chan + 1;
      $chan = $283;
      
      
      
      if ($chan < HEAP[$nchannels]) {
        __label__ = 54;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 61:
      
      var $288 = HEAP[$len] - 1;
      HEAP[$len] = $288;
      
      
      var $291 = HEAP[$outrate] + HEAP[$d];
      HEAP[$d] = $291;
      __lastLabel__ = 61;
      __label__ = 62;
      break;
     case 62:
      var $292 = __lastLabel__ == 38 ? $_pr : __lastLabel__ == 61 ? $291 : __lastLabel__ == 72 ? $_pr1 : $345;
      
      if ($292 < 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 63:
      $chan = 0;
      
      
      
      if ($chan < HEAP[$nchannels]) {
        __label__ = 64;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 64:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $cur_o = ((HEAP[$outrate] - HEAP[$d]) * HEAP[$cur_i + 4 * $chan] + HEAP[$d] * HEAP[$prev_i + 4 * $chan]) / HEAP[$outrate] | 0;
      
      
      if (HEAP[$size] == 1) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      
      
      
      
      
      HEAP[$ncp] = $cur_o >> 8 & 255;
      __label__ = 70;
      break;
     case 66:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 67;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 67:
      
      
      
      
      
      HEAP[$ncp] = $cur_o & 65535;
      __label__ = 70;
      break;
     case 68:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      
      
      
      
      
      HEAP[$ncp] = $cur_o << 16;
      __label__ = 70;
      break;
     case 70:
      
      
      var $337 = $ncp + HEAP[$size];
      $ncp = $337;
      
      var $339 = $chan + 1;
      $chan = $339;
      
      
      
      if ($chan < HEAP[$nchannels]) {
        __label__ = 64;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 71:
      
      
      var $345 = HEAP[$d] - HEAP[$inrate];
      HEAP[$d] = $345;
      
      if ($345 >= 0) {
        __lastLabel__ = 71;
        __label__ = 63;
        break;
      } else {
        __lastLabel__ = 71;
        __label__ = 62;
        break;
      }
     case 72:
      var $_pr1 = HEAP[$d];
      
      if ($_pr1 >= 0) {
        __lastLabel__ = 72;
        __label__ = 63;
        break;
      } else {
        __lastLabel__ = 72;
        __label__ = 62;
        break;
      }
     case 73:
      
      
      if ($prev_i != 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 75;
        break;
      }
     case 74:
      
      
      _free($prev_i);
      __label__ = 75;
      break;
     case 75:
      
      
      if ($cur_i != 0) {
        __label__ = 76;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 76:
      
      
      _free($cur_i);
      __label__ = 77;
      break;
     case 77:
      
      $0 = $rv;
      __label__ = 78;
      break;
     case 78:
      
      $retval = $0;
      var $retval87 = $retval;
      STACKTOP = __stackBase__;
      return $retval87;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _audioop_lin2ulaw($self, $args) {
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
      var $cp = __stackBase__;
      var $ncp;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $val;
      var $rv;
      var $i;
      $self_addr = $self;
      $args_addr = $args;
      $val = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str39, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
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
      
      
      var $10 = HEAP[$len] / HEAP[$size] | 0;
      var $11 = _PyString_FromStringAndSize(0, $10);
      $rv = $11;
      
      
      if ($rv == 0) {
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
      
      var $15 = _PyString_AsString($rv);
      $ncp = $15;
      $i = 0;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 7:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i] << 8;
      __label__ = 13;
      break;
     case 9:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 13;
      break;
     case 11:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i] >> 16;
      __label__ = 13;
      break;
     case 13:
      
      
      
      
      var $47 = _st_14linear2ulaw($val & 65535 & 65535);
      
      HEAP[$ncp] = $47;
      
      var $50 = $ncp + 1;
      $ncp = $50;
      
      
      var $53 = $i + HEAP[$size];
      $i = $53;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      $0 = $rv;
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
  function _audioop_ulaw2lin($self, $args) {
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
      var $cp = __stackBase__;
      var $cval;
      var $ncp;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $val;
      var $rv;
      var $i;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str40, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
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
      
      
      
      
      if ((2147483647 / HEAP[$size] | 0) < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $12 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($12, __str23);
      $0 = 0;
      __label__ = 17;
      break;
     case 6:
      
      
      var $15 = HEAP[$size] * HEAP[$len];
      var $16 = _PyString_FromStringAndSize(0, $15);
      $rv = $16;
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 17;
      break;
     case 8:
      
      var $20 = _PyString_AsString($rv);
      $ncp = $20;
      $i = 0;
      
      
      
      
      
      if (HEAP[$size] * HEAP[$len] > $i) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 9:
      var $26 = HEAP[$cp];
      
      $cval = HEAP[$26];
      var $28 = $26 + 1;
      HEAP[$cp] = $28;
      
      
      
      
      
      $val = HEAP[__st_ulaw2linear16 + $cval * 2];
      
      
      if (HEAP[$size] == 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      HEAP[$ncp + $i] = $val >> 8 & 255;
      __label__ = 15;
      break;
     case 11:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      HEAP[$ncp + $i] = $val & 65535;
      __label__ = 15;
      break;
     case 13:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      
      HEAP[$ncp + $i] = $val << 16;
      __label__ = 15;
      break;
     case 15:
      
      
      var $60 = $i + HEAP[$size];
      $i = $60;
      
      
      
      
      
      if (HEAP[$size] * HEAP[$len] > $i) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      $0 = $rv;
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
  function _audioop_lin2alaw($self, $args) {
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
      var $cp = __stackBase__;
      var $ncp;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $val;
      var $rv;
      var $i;
      $self_addr = $self;
      $args_addr = $args;
      $val = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str41, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
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
      
      
      var $10 = HEAP[$len] / HEAP[$size] | 0;
      var $11 = _PyString_FromStringAndSize(0, $10);
      $rv = $11;
      
      
      if ($rv == 0) {
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
      
      var $15 = _PyString_AsString($rv);
      $ncp = $15;
      $i = 0;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 7:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i] << 8;
      __label__ = 13;
      break;
     case 9:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 13;
      break;
     case 11:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i] >> 16;
      __label__ = 13;
      break;
     case 13:
      
      
      
      
      var $47 = _st_linear2alaw($val & 65535 & 65535);
      
      HEAP[$ncp] = $47;
      
      var $50 = $ncp + 1;
      $ncp = $50;
      
      
      var $53 = $i + HEAP[$size];
      $i = $53;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      $0 = $rv;
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
  function _audioop_alaw2lin($self, $args) {
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
      var $cp = __stackBase__;
      var $cval;
      var $ncp;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $val;
      var $rv;
      var $i;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str42, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
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
      
      
      
      
      if ((2147483647 / HEAP[$size] | 0) < HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $12 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($12, __str23);
      $0 = 0;
      __label__ = 17;
      break;
     case 6:
      
      
      var $15 = HEAP[$size] * HEAP[$len];
      var $16 = _PyString_FromStringAndSize(0, $15);
      $rv = $16;
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 17;
      break;
     case 8:
      
      var $20 = _PyString_AsString($rv);
      $ncp = $20;
      $i = 0;
      
      
      
      
      
      if (HEAP[$size] * HEAP[$len] > $i) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 9:
      var $26 = HEAP[$cp];
      
      $cval = HEAP[$26];
      var $28 = $26 + 1;
      HEAP[$cp] = $28;
      
      
      
      
      
      $val = HEAP[__st_alaw2linear16 + $cval * 2];
      
      
      if (HEAP[$size] == 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      HEAP[$ncp + $i] = $val >> 8 & 255;
      __label__ = 15;
      break;
     case 11:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      HEAP[$ncp + $i] = $val & 65535;
      __label__ = 15;
      break;
     case 13:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      
      HEAP[$ncp + $i] = $val << 16;
      __label__ = 15;
      break;
     case 15:
      
      
      var $60 = $i + HEAP[$size];
      $i = $60;
      
      
      
      
      
      if (HEAP[$size] * HEAP[$len] > $i) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      $0 = $rv;
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
  function _audioop_lin2adpcm($self, $args) {
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
      var $iftmp_511;
      var $0;
      var $cp = __stackBase__;
      var $ncp;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $val;
      var $step;
      var $valpred = __stackBase__ + 12;
      var $delta;
      var $index = __stackBase__ + 16;
      var $sign;
      var $vpdiff;
      var $diff;
      var $rv;
      var $state = __stackBase__ + 20;
      var $str;
      var $i;
      var $outputbuffer;
      var $bufferstep;
      $self_addr = $self;
      $args_addr = $args;
      $val = 0;
      $outputbuffer = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str43, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $state, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 44;
      break;
     case 2:
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 44;
      break;
     case 4:
      
      
      
      var $11 = HEAP[$len] / (HEAP[$size] * 2) | 0;
      var $12 = _PyString_FromStringAndSize(0, $11);
      $str = $12;
      
      
      if ($str == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 44;
      break;
     case 6:
      
      var $16 = _PyString_AsString($str);
      $ncp = $16;
      
      
      if (HEAP[$state] == __Py_NoneStruct) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$valpred] = 0;
      HEAP[$index] = 0;
      __label__ = 10;
      break;
     case 8:
      var $19 = HEAP[$state];
      var $20 = _PyArg_ParseTuple($19, __str44, allocate([ $valpred, 0, 0, 0, $index, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($20 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = 0;
      __label__ = 44;
      break;
     case 10:
      
      
      
      $step = HEAP[_stepsizeTable + HEAP[$index] * 4];
      $bufferstep = 1;
      $i = 0;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 11:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i] << 8;
      __label__ = 17;
      break;
     case 13:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i];
      __label__ = 17;
      break;
     case 15:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      
      $val = HEAP[HEAP[$cp] + $i] >> 16;
      __label__ = 17;
      break;
     case 17:
      
      
      
      $diff = $val - HEAP[$valpred];
      
      if ($val - HEAP[$valpred] < 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      $iftmp_511 = 0;
      $sign = 0;
      __label__ = 20;
      break;
     case 19:
      $iftmp_511 = 8;
      $sign = 8;
      
      var $57 = 0 - $diff;
      $diff = $57;
      __label__ = 20;
      break;
     case 20:
      $delta = 0;
      
      
      $vpdiff = $step >> 3;
      
      
      
      if ($diff >= $step) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      $delta = 4;
      
      
      var $65 = $diff - $step;
      $diff = $65;
      
      
      var $68 = $step + $vpdiff;
      $vpdiff = $68;
      __label__ = 22;
      break;
     case 22:
      
      var $70 = $step >> 1;
      $step = $70;
      
      
      
      if ($diff >= $step) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      var $75 = $delta | 2;
      $delta = $75;
      
      
      var $78 = $diff - $step;
      $diff = $78;
      
      
      var $81 = $step + $vpdiff;
      $vpdiff = $81;
      __label__ = 24;
      break;
     case 24:
      
      var $83 = $step >> 1;
      $step = $83;
      
      
      
      if ($diff >= $step) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      var $88 = $delta | 1;
      $delta = $88;
      
      
      var $91 = $step + $vpdiff;
      $vpdiff = $91;
      __label__ = 26;
      break;
     case 26:
      
      
      var $94 = HEAP[$valpred];
      var $95 = $vpdiff;
      if ($sign != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $96 = $94 - $95;
      HEAP[$valpred] = $96;
      __lastLabel__ = 27;
      __label__ = 29;
      break;
     case 28:
      var $97 = $95 + $94;
      HEAP[$valpred] = $97;
      __lastLabel__ = 28;
      __label__ = 29;
      break;
     case 29:
      var $98 = __lastLabel__ == 28 ? $97 : $96;
      
      if ($98 > 32767) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      HEAP[$valpred] = 32767;
      __label__ = 33;
      break;
     case 31:
      
      var $101 = HEAP[$valpred] < -32768;
      if ($101) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      HEAP[$valpred] = -32768;
      __label__ = 33;
      break;
     case 33:
      
      
      var $104 = $sign | $delta;
      $delta = $104;
      
      
      
      
      var $109 = HEAP[$index] + HEAP[_indexTable + $delta * 4];
      HEAP[$index] = $109;
      
      if ($109 < 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      HEAP[$index] = 0;
      __label__ = 37;
      break;
     case 35:
      
      if ($109 > 88) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      HEAP[$index] = 88;
      __label__ = 37;
      break;
     case 37:
      
      
      
      $step = HEAP[_stepsizeTable + HEAP[$index] * 4];
      
      
      var $117 = $delta;
      if ($bufferstep != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      $outputbuffer = $117 << 4 & 240;
      __label__ = 40;
      break;
     case 39:
      
      
      
      
      
      
      HEAP[$ncp] = $outputbuffer & 255 | $117 & 255 & 15;
      
      var $127 = $ncp + 1;
      $ncp = $127;
      __label__ = 40;
      break;
     case 40:
      
      
      var $130 = $bufferstep == 0;
      $bufferstep = $130;
      
      
      var $133 = $i + HEAP[$size];
      $i = $133;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 41:
      var $137 = HEAP[$index];
      var $138 = HEAP[$valpred];
      
      var $140 = _Py_BuildValue(__str45, allocate([ $str, 0, 0, 0, $138, 0, 0, 0, $137, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $rv = $140;
      
      
      
      var $144 = HEAP[$str] - 1;
      
      
      HEAP[$str] = $144;
      
      
      
      
      if (HEAP[$str] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $155 = HEAP[HEAP[$str + 4] + 24];
      
      FUNCTION_TABLE[$155]($str);
      __label__ = 43;
      break;
     case 43:
      
      $0 = $rv;
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
  function _audioop_adpcm2lin($self, $args) {
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
      var $cp = __stackBase__;
      var $ncp;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $valpred = __stackBase__ + 12;
      var $step;
      var $delta;
      var $index = __stackBase__ + 16;
      var $sign;
      var $vpdiff;
      var $rv;
      var $str;
      var $state = __stackBase__ + 20;
      var $i;
      var $inputbuffer;
      var $bufferstep;
      $self_addr = $self;
      $args_addr = $args;
      $inputbuffer = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str46, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $state, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$size];
      var $5 = HEAP[$len];
      var $6 = _audioop_check_parameters($5, $4);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 43;
      break;
     case 4:
      
      
      if (HEAP[$state] == __Py_NoneStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$valpred] = 0;
      HEAP[$index] = 0;
      __label__ = 8;
      break;
     case 6:
      var $10 = HEAP[$state];
      var $11 = _PyArg_ParseTuple($10, __str44, allocate([ $valpred, 0, 0, 0, $index, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($11 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 43;
      break;
     case 8:
      
      
      
      
      if ((1073741823 / HEAP[$size] | 0) < HEAP[$len]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $17 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($17, __str23);
      $0 = 0;
      __label__ = 43;
      break;
     case 10:
      
      
      
      var $21 = HEAP[$len] * 2 * HEAP[$size];
      var $22 = _PyString_FromStringAndSize(0, $21);
      $str = $22;
      
      
      if ($str == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = 0;
      __label__ = 43;
      break;
     case 12:
      
      var $26 = _PyString_AsString($str);
      $ncp = $26;
      
      
      
      $step = HEAP[_stepsizeTable + HEAP[$index] * 4];
      $bufferstep = 0;
      $i = 0;
      
      
      
      
      
      
      if (HEAP[$len] * 2 * HEAP[$size] > $i) {
        __label__ = 13;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 13:
      
      
      if ($bufferstep != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      $delta = $inputbuffer & 15;
      __label__ = 16;
      break;
     case 15:
      var $40 = HEAP[$cp];
      
      
      $inputbuffer = HEAP[$40];
      var $43 = $40 + 1;
      HEAP[$cp] = $43;
      
      
      
      $delta = $inputbuffer >> 4 & 15;
      __label__ = 16;
      break;
     case 16:
      
      
      var $49 = $bufferstep == 0;
      $bufferstep = $49;
      
      
      
      
      var $54 = HEAP[$index] + HEAP[_indexTable + $delta * 4];
      HEAP[$index] = $54;
      
      if ($54 < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      HEAP[$index] = 0;
      __label__ = 20;
      break;
     case 18:
      
      if ($54 > 88) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      HEAP[$index] = 88;
      __label__ = 20;
      break;
     case 20:
      
      
      $sign = $delta & 8;
      
      var $60 = $delta & 7;
      $delta = $60;
      
      
      $vpdiff = $step >> 3;
      
      
      
      if (($delta & 4) != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      var $68 = $step + $vpdiff;
      $vpdiff = $68;
      __label__ = 22;
      break;
     case 22:
      
      
      
      if (($delta & 2) != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      var $75 = ($step >> 1) + $vpdiff;
      $vpdiff = $75;
      __label__ = 24;
      break;
     case 24:
      
      
      
      
      if (($delta & 1 & 255) != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      var $82 = ($step >> 2) + $vpdiff;
      $vpdiff = $82;
      __label__ = 26;
      break;
     case 26:
      
      
      var $85 = HEAP[$valpred];
      var $86 = $vpdiff;
      if ($sign != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $87 = $85 - $86;
      HEAP[$valpred] = $87;
      __lastLabel__ = 27;
      __label__ = 29;
      break;
     case 28:
      var $88 = $86 + $85;
      HEAP[$valpred] = $88;
      __lastLabel__ = 28;
      __label__ = 29;
      break;
     case 29:
      var $89 = __lastLabel__ == 28 ? $88 : $87;
      
      if ($89 > 32767) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      HEAP[$valpred] = 32767;
      __label__ = 33;
      break;
     case 31:
      
      var $92 = HEAP[$valpred] < -32768;
      if ($92) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      HEAP[$valpred] = -32768;
      __label__ = 33;
      break;
     case 33:
      
      
      
      $step = HEAP[_stepsizeTable + HEAP[$index] * 4];
      
      
      if (HEAP[$size] == 1) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      var $100 = HEAP[$valpred] >> 8 & 255;
      
      
      
      HEAP[$ncp + $i] = $100;
      __label__ = 39;
      break;
     case 35:
      
      
      if (HEAP[$size] == 2) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      
      var $111 = HEAP[$valpred] & 65535;
      HEAP[$ncp + $i] = $111;
      __label__ = 39;
      break;
     case 37:
      
      
      if (HEAP[$size] == 4) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      
      var $119 = HEAP[$valpred] << 16;
      HEAP[$ncp + $i] = $119;
      __label__ = 39;
      break;
     case 39:
      
      
      var $122 = $i + HEAP[$size];
      $i = $122;
      
      
      
      
      
      
      if (HEAP[$len] * 2 * HEAP[$size] > $i) {
        __label__ = 13;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      var $129 = HEAP[$index];
      var $130 = HEAP[$valpred];
      
      var $132 = _Py_BuildValue(__str45, allocate([ $str, 0, 0, 0, $130, 0, 0, 0, $129, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $rv = $132;
      
      
      
      var $136 = HEAP[$str] - 1;
      
      
      HEAP[$str] = $136;
      
      
      
      
      if (HEAP[$str] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $147 = HEAP[HEAP[$str + 4] + 24];
      
      FUNCTION_TABLE[$147]($str);
      __label__ = 42;
      break;
     case 42:
      
      $0 = $rv;
      __label__ = 43;
      break;
     case 43:
      
      $retval = $0;
      var $retval44 = $retval;
      STACKTOP = __stackBase__;
      return $retval44;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initaudioop() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $d;
      var $0 = _Py_InitModule4(__str72, _audioop_methods, 0, 0, 1013);
      $m = $0;
      
      
      if ($m == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $4 = _PyModule_GetDict($m);
      $d = $4;
      
      
      if ($d == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $7 = _PyErr_NewException(__str73, 0, 0);
      HEAP[_AudioopError] = $7;
      
      
      if (HEAP[_AudioopError] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = HEAP[_AudioopError];
      
      var $12 = _PyDict_SetItemString($d, __str74, $10);
      __label__ = 4;
      break;
     case 4:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initaudioop"] = _initaudioop;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _audioop_max, 0, _audioop_minmax, 0, _audioop_avg, 0, _audioop_maxpp, 0, _audioop_avgpp, 0, _audioop_rms, 0, _audioop_findfit, 0, _audioop_findmax, 0, _audioop_findfactor, 0, _audioop_cross, 0, _audioop_mul, 0, _audioop_add, 0, _audioop_bias, 0, _audioop_ulaw2lin, 0, _audioop_lin2ulaw, 0, _audioop_alaw2lin, 0, _audioop_lin2alaw, 0, _audioop_lin2lin, 0, _audioop_adpcm2lin, 0, _audioop_lin2adpcm, 0, _audioop_tomono, 0, _audioop_tostereo, 0, _audioop_getsample, 0, _audioop_reverse, 0, _audioop_ratecv, 0 ]);
  function run(args) {
    _seg_aend = allocate([ 31, 0, 63, 0, 127, 0, 255, 0, 511, 0, 1023, 0, 2047, 0, 4095, 0 ], [ "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0 ], ALLOC_NORMAL);
    _seg_uend = allocate([ 63, 0, 127, 0, 255, 0, 511, 0, 1023, 0, 2047, 0, 4095, 0, 8191, 0 ], [ "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0 ], ALLOC_NORMAL);
    __st_ulaw2linear16 = allocate([ -32124, 0, -31100, 0, -30076, 0, -29052, 0, -28028, 0, -27004, 0, -25980, 0, -24956, 0, -23932, 0, -22908, 0, -21884, 0, -20860, 0, -19836, 0, -18812, 0, -17788, 0, -16764, 0, -15996, 0, -15484, 0, -14972, 0, -14460, 0, -13948, 0, -13436, 0, -12924, 0, -12412, 0, -11900, 0, -11388, 0, -10876, 0, -10364, 0, -9852, 0, -9340, 0, -8828, 0, -8316, 0, -7932, 0, -7676, 0, -7420, 0, -7164, 0, -6908, 0, -6652, 0, -6396, 0, -6140, 0, -5884, 0, -5628, 0, -5372, 0, -5116, 0, -4860, 0, -4604, 0, -4348, 0, -4092, 0, -3900, 0, -3772, 0, -3644, 0, -3516, 0, -3388, 0, -3260, 0, -3132, 0, -3004, 0, -2876, 0, -2748, 0, -2620, 0, -2492, 0, -2364, 0, -2236, 0, -2108, 0, -1980, 0, -1884, 0, -1820, 0, -1756, 0, -1692, 0, -1628, 0, -1564, 0, -1500, 0, -1436, 0, -1372, 0, -1308, 0, -1244, 0, -1180, 0, -1116, 0, -1052, 0, -988, 0, -924, 0, -876, 0, -844, 0, -812, 0, -780, 0, -748, 0, -716, 0, -684, 0, -652, 0, -620, 0, -588, 0, -556, 0, -524, 0, -492, 0, -460, 0, -428, 0, -396, 0, -372, 0, -356, 0, -340, 0, -324, 0, -308, 0, -292, 0, -276, 0, -260, 0, -244, 0, -228, 0, -212, 0, -196, 0, -180, 0, -164, 0, -148, 0, -132, 0, -120, 0, -112, 0, -104, 0, -96, 0, -88, 0, -80, 0, -72, 0, -64, 0, -56, 0, -48, 0, -40, 0, -32, 0, -24, 0, -16, 0, -8, 0, 0, 0, 32124, 0, 31100, 0, 30076, 0, 29052, 0, 28028, 0, 27004, 0, 25980, 0, 24956, 0, 23932, 0, 22908, 0, 21884, 0, 20860, 0, 19836, 0, 18812, 0, 17788, 0, 16764, 0, 15996, 0, 15484, 0, 14972, 0, 14460, 0, 13948, 0, 13436, 0, 12924, 0, 12412, 0, 11900, 0, 11388, 0, 10876, 0, 10364, 0, 9852, 0, 9340, 0, 8828, 0, 8316, 0, 7932, 0, 7676, 0, 7420, 0, 7164, 0, 6908, 0, 6652, 0, 6396, 0, 6140, 0, 5884, 0, 5628, 0, 5372, 0, 5116, 0, 4860, 0, 4604, 0, 4348, 0, 4092, 0, 3900, 0, 3772, 0, 3644, 0, 3516, 0, 3388, 0, 3260, 0, 3132, 0, 3004, 0, 2876, 0, 2748, 0, 2620, 0, 2492, 0, 2364, 0, 2236, 0, 2108, 0, 1980, 0, 1884, 0, 1820, 0, 1756, 0, 1692, 0, 1628, 0, 1564, 0, 1500, 0, 1436, 0, 1372, 0, 1308, 0, 1244, 0, 1180, 0, 1116, 0, 1052, 0, 988, 0, 924, 0, 876, 0, 844, 0, 812, 0, 780, 0, 748, 0, 716, 0, 684, 0, 652, 0, 620, 0, 588, 0, 556, 0, 524, 0, 492, 0, 460, 0, 428, 0, 396, 0, 372, 0, 356, 0, 340, 0, 324, 0, 308, 0, 292, 0, 276, 0, 260, 0, 244, 0, 228, 0, 212, 0, 196, 0, 180, 0, 164, 0, 148, 0, 132, 0, 120, 0, 112, 0, 104, 0, 96, 0, 88, 0, 80, 0, 72, 0, 64, 0, 56, 0, 48, 0, 40, 0, 32, 0, 24, 0, 16, 0, 8, 0, 0, 0 ], [ "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0 ], ALLOC_NORMAL);
    __st_alaw2linear16 = allocate([ -5504, 0, -5248, 0, -6016, 0, -5760, 0, -4480, 0, -4224, 0, -4992, 0, -4736, 0, -7552, 0, -7296, 0, -8064, 0, -7808, 0, -6528, 0, -6272, 0, -7040, 0, -6784, 0, -2752, 0, -2624, 0, -3008, 0, -2880, 0, -2240, 0, -2112, 0, -2496, 0, -2368, 0, -3776, 0, -3648, 0, -4032, 0, -3904, 0, -3264, 0, -3136, 0, -3520, 0, -3392, 0, -22016, 0, -20992, 0, -24064, 0, -23040, 0, -17920, 0, -16896, 0, -19968, 0, -18944, 0, -30208, 0, -29184, 0, -32256, 0, -31232, 0, -26112, 0, -25088, 0, -28160, 0, -27136, 0, -11008, 0, -10496, 0, -12032, 0, -11520, 0, -8960, 0, -8448, 0, -9984, 0, -9472, 0, -15104, 0, -14592, 0, -16128, 0, -15616, 0, -13056, 0, -12544, 0, -14080, 0, -13568, 0, -344, 0, -328, 0, -376, 0, -360, 0, -280, 0, -264, 0, -312, 0, -296, 0, -472, 0, -456, 0, -504, 0, -488, 0, -408, 0, -392, 0, -440, 0, -424, 0, -88, 0, -72, 0, -120, 0, -104, 0, -24, 0, -8, 0, -56, 0, -40, 0, -216, 0, -200, 0, -248, 0, -232, 0, -152, 0, -136, 0, -184, 0, -168, 0, -1376, 0, -1312, 0, -1504, 0, -1440, 0, -1120, 0, -1056, 0, -1248, 0, -1184, 0, -1888, 0, -1824, 0, -2016, 0, -1952, 0, -1632, 0, -1568, 0, -1760, 0, -1696, 0, -688, 0, -656, 0, -752, 0, -720, 0, -560, 0, -528, 0, -624, 0, -592, 0, -944, 0, -912, 0, -1008, 0, -976, 0, -816, 0, -784, 0, -880, 0, -848, 0, 5504, 0, 5248, 0, 6016, 0, 5760, 0, 4480, 0, 4224, 0, 4992, 0, 4736, 0, 7552, 0, 7296, 0, 8064, 0, 7808, 0, 6528, 0, 6272, 0, 7040, 0, 6784, 0, 2752, 0, 2624, 0, 3008, 0, 2880, 0, 2240, 0, 2112, 0, 2496, 0, 2368, 0, 3776, 0, 3648, 0, 4032, 0, 3904, 0, 3264, 0, 3136, 0, 3520, 0, 3392, 0, 22016, 0, 20992, 0, 24064, 0, 23040, 0, 17920, 0, 16896, 0, 19968, 0, 18944, 0, 30208, 0, 29184, 0, 32256, 0, 31232, 0, 26112, 0, 25088, 0, 28160, 0, 27136, 0, 11008, 0, 10496, 0, 12032, 0, 11520, 0, 8960, 0, 8448, 0, 9984, 0, 9472, 0, 15104, 0, 14592, 0, 16128, 0, 15616, 0, 13056, 0, 12544, 0, 14080, 0, 13568, 0, 344, 0, 328, 0, 376, 0, 360, 0, 280, 0, 264, 0, 312, 0, 296, 0, 472, 0, 456, 0, 504, 0, 488, 0, 408, 0, 392, 0, 440, 0, 424, 0, 88, 0, 72, 0, 120, 0, 104, 0, 24, 0, 8, 0, 56, 0, 40, 0, 216, 0, 200, 0, 248, 0, 232, 0, 152, 0, 136, 0, 184, 0, 168, 0, 1376, 0, 1312, 0, 1504, 0, 1440, 0, 1120, 0, 1056, 0, 1248, 0, 1184, 0, 1888, 0, 1824, 0, 2016, 0, 1952, 0, 1632, 0, 1568, 0, 1760, 0, 1696, 0, 688, 0, 656, 0, 752, 0, 720, 0, 560, 0, 528, 0, 624, 0, 592, 0, 944, 0, 912, 0, 1008, 0, 976, 0, 816, 0, 784, 0, 880, 0, 848, 0 ], [ "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0 ], ALLOC_NORMAL);
    _indexTable = allocate([ -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    _stepsizeTable = allocate([ 7, 0, 0, 0, 8, 0, 0, 0, 9, 0, 0, 0, 10, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 14, 0, 0, 0, 16, 0, 0, 0, 17, 0, 0, 0, 19, 0, 0, 0, 21, 0, 0, 0, 23, 0, 0, 0, 25, 0, 0, 0, 28, 0, 0, 0, 31, 0, 0, 0, 34, 0, 0, 0, 37, 0, 0, 0, 41, 0, 0, 0, 45, 0, 0, 0, 50, 0, 0, 0, 55, 0, 0, 0, 60, 0, 0, 0, 66, 0, 0, 0, 73, 0, 0, 0, 80, 0, 0, 0, 88, 0, 0, 0, 97, 0, 0, 0, 107, 0, 0, 0, 118, 0, 0, 0, 130, 0, 0, 0, 143, 0, 0, 0, 157, 0, 0, 0, 173, 0, 0, 0, 190, 0, 0, 0, 209, 0, 0, 0, 230, 0, 0, 0, 253, 0, 0, 0, 279, 0, 0, 0, 307, 0, 0, 0, 337, 0, 0, 0, 371, 0, 0, 0, 408, 0, 0, 0, 449, 0, 0, 0, 494, 0, 0, 0, 544, 0, 0, 0, 598, 0, 0, 0, 658, 0, 0, 0, 724, 0, 0, 0, 796, 0, 0, 0, 876, 0, 0, 0, 963, 0, 0, 0, 1060, 0, 0, 0, 1166, 0, 0, 0, 1282, 0, 0, 0, 1411, 0, 0, 0, 1552, 0, 0, 0, 1707, 0, 0, 0, 1878, 0, 0, 0, 2066, 0, 0, 0, 2272, 0, 0, 0, 2499, 0, 0, 0, 2749, 0, 0, 0, 3024, 0, 0, 0, 3327, 0, 0, 0, 3660, 0, 0, 0, 4026, 0, 0, 0, 4428, 0, 0, 0, 4871, 0, 0, 0, 5358, 0, 0, 0, 5894, 0, 0, 0, 6484, 0, 0, 0, 7132, 0, 0, 0, 7845, 0, 0, 0, 8630, 0, 0, 0, 9493, 0, 0, 0, 10442, 0, 0, 0, 11487, 0, 0, 0, 12635, 0, 0, 0, 13899, 0, 0, 0, 15289, 0, 0, 0, 16818, 0, 0, 0, 18500, 0, 0, 0, 20350, 0, 0, 0, 22385, 0, 0, 0, 24623, 0, 0, 0, 27086, 0, 0, 0, 29794, 0, 0, 0, 32767, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    _AudioopError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str = allocate([ 83, 105, 122, 101, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 49, 44, 32, 50, 32, 111, 114, 32, 52, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 110, 111, 116, 32, 97, 32, 119, 104, 111, 108, 101, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 102, 114, 97, 109, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 115, 35, 105, 105, 58, 103, 101, 116, 115, 97, 109, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 73, 110, 100, 101, 120, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 115, 35, 105, 58, 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 115, 35, 105, 58, 109, 105, 110, 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 40, 105, 105, 41, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 115, 35, 105, 58, 97, 118, 103, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 115, 35, 105, 58, 114, 109, 115, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 115, 35, 115, 35, 58, 102, 105, 110, 100, 102, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 83, 116, 114, 105, 110, 103, 115, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 101, 118, 101, 110, 45, 115, 105, 122, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 70, 105, 114, 115, 116, 32, 115, 97, 109, 112, 108, 101, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 108, 111, 110, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 40, 105, 102, 41, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 115, 35, 115, 35, 58, 102, 105, 110, 100, 102, 97, 99, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 83, 97, 109, 112, 108, 101, 115, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 115, 97, 109, 101, 32, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 115, 35, 105, 58, 102, 105, 110, 100, 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 73, 110, 112, 117, 116, 32, 115, 97, 109, 112, 108, 101, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 108, 111, 110, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 115, 35, 105, 58, 97, 118, 103, 112, 112, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 115, 35, 105, 58, 109, 97, 120, 112, 112, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 115, 35, 105, 58, 99, 114, 111, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 115, 35, 105, 100, 58, 109, 117, 108, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 115, 35, 105, 100, 100, 58, 116, 111, 109, 111, 110, 111, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 115, 35, 105, 100, 100, 58, 116, 111, 115, 116, 101, 114, 101, 111, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 110, 111, 116, 32, 101, 110, 111, 117, 103, 104, 32, 109, 101, 109, 111, 114, 121, 32, 102, 111, 114, 32, 111, 117, 116, 112, 117, 116, 32, 98, 117, 102, 102, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 115, 35, 115, 35, 105, 58, 97, 100, 100, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 76, 101, 110, 103, 116, 104, 115, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 116, 104, 101, 32, 115, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 115, 35, 105, 105, 58, 98, 105, 97, 115, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 115, 35, 105, 58, 114, 101, 118, 101, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 115, 35, 105, 105, 58, 108, 105, 110, 50, 108, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 115, 35, 105, 105, 105, 105, 79, 124, 105, 105, 58, 114, 97, 116, 101, 99, 118, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 35, 32, 111, 102, 32, 99, 104, 97, 110, 110, 101, 108, 115, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 62, 61, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 119, 105, 100, 116, 104, 32, 42, 32, 110, 99, 104, 97, 110, 110, 101, 108, 115, 32, 116, 111, 111, 32, 98, 105, 103, 32, 102, 111, 114, 32, 97, 32, 67, 32, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 119, 101, 105, 103, 104, 116, 65, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 62, 61, 32, 49, 44, 32, 119, 101, 105, 103, 104, 116, 66, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 115, 97, 109, 112, 108, 105, 110, 103, 32, 114, 97, 116, 101, 32, 110, 111, 116, 32, 62, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 105, 79, 33, 59, 97, 117, 100, 105, 111, 111, 112, 46, 114, 97, 116, 101, 99, 118, 58, 32, 105, 108, 108, 101, 103, 97, 108, 32, 115, 116, 97, 116, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 115, 116, 97, 116, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 105, 105, 58, 114, 97, 116, 101, 99, 118, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate(1, "i8", ALLOC_NORMAL);
    __str38 = allocate([ 40, 79, 40, 105, 79, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 115, 35, 105, 58, 108, 105, 110, 50, 117, 108, 97, 119, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 115, 35, 105, 58, 117, 108, 97, 119, 50, 108, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 115, 35, 105, 58, 108, 105, 110, 50, 97, 108, 97, 119, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 115, 35, 105, 58, 97, 108, 97, 119, 50, 108, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 115, 35, 105, 79, 58, 108, 105, 110, 50, 97, 100, 112, 99, 109, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 40, 79, 40, 105, 105, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 115, 35, 105, 79, 58, 97, 100, 112, 99, 109, 50, 108, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 109, 105, 110, 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 97, 118, 103, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 109, 97, 120, 112, 112, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 97, 118, 103, 112, 112, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 114, 109, 115, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 102, 105, 110, 100, 102, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 102, 105, 110, 100, 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 102, 105, 110, 100, 102, 97, 99, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 99, 114, 111, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 109, 117, 108, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 97, 100, 100, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 98, 105, 97, 115, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 117, 108, 97, 119, 50, 108, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 108, 105, 110, 50, 117, 108, 97, 119, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 97, 108, 97, 119, 50, 108, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 108, 105, 110, 50, 97, 108, 97, 119, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 108, 105, 110, 50, 108, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 97, 100, 112, 99, 109, 50, 108, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 108, 105, 110, 50, 97, 100, 112, 99, 109, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 116, 111, 109, 111, 110, 111, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 116, 111, 115, 116, 101, 114, 101, 111, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 103, 101, 116, 115, 97, 109, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 114, 101, 118, 101, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 114, 97, 116, 101, 99, 118, 0 ], "i8", ALLOC_NORMAL);
    _audioop_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str72 = allocate([ 97, 117, 100, 105, 111, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 97, 117, 100, 105, 111, 111, 112, 46, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_audioop_methods] = __str47;
    HEAP[_audioop_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_audioop_methods + 16] = __str48;
    HEAP[_audioop_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_audioop_methods + 32] = __str49;
    HEAP[_audioop_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_audioop_methods + 48] = __str50;
    HEAP[_audioop_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_audioop_methods + 64] = __str51;
    HEAP[_audioop_methods + 68] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_audioop_methods + 80] = __str52;
    HEAP[_audioop_methods + 84] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_audioop_methods + 96] = __str53;
    HEAP[_audioop_methods + 100] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_audioop_methods + 112] = __str54;
    HEAP[_audioop_methods + 116] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_audioop_methods + 128] = __str55;
    HEAP[_audioop_methods + 132] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_audioop_methods + 144] = __str56;
    HEAP[_audioop_methods + 148] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_audioop_methods + 160] = __str57;
    HEAP[_audioop_methods + 164] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_audioop_methods + 176] = __str58;
    HEAP[_audioop_methods + 180] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_audioop_methods + 192] = __str59;
    HEAP[_audioop_methods + 196] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_audioop_methods + 208] = __str60;
    HEAP[_audioop_methods + 212] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_audioop_methods + 224] = __str61;
    HEAP[_audioop_methods + 228] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_audioop_methods + 240] = __str62;
    HEAP[_audioop_methods + 244] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_audioop_methods + 256] = __str63;
    HEAP[_audioop_methods + 260] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_audioop_methods + 272] = __str64;
    HEAP[_audioop_methods + 276] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_audioop_methods + 288] = __str65;
    HEAP[_audioop_methods + 292] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_audioop_methods + 304] = __str66;
    HEAP[_audioop_methods + 308] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_audioop_methods + 320] = __str67;
    HEAP[_audioop_methods + 324] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_audioop_methods + 336] = __str68;
    HEAP[_audioop_methods + 340] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_audioop_methods + 352] = __str69;
    HEAP[_audioop_methods + 356] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_audioop_methods + 368] = __str70;
    HEAP[_audioop_methods + 372] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_audioop_methods + 384] = __str71;
    HEAP[_audioop_methods + 388] = FUNCTION_TABLE_OFFSET + 50;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
