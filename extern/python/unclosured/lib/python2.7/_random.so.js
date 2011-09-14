"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 112;
  var $1___SIZE = 16;
  var $2___SIZE = 196;
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
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct_RandomObject___SIZE = 2508;
  var $struct_RandomObject___FLATTENER = [ 0, 4, 8, 2504 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _mag01_8316;
  var __str;
  var __str1;
  var __str2;
  var ___PRETTY_FUNCTION___8478;
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
  var _random_methods;
  var _random_doc;
  var __str20;
  var _Random_Type;
  var _module_doc;
  var __str21;
  var __str22;
  function _genrand_int32($self) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $y;
      var $mt;
      var $kk;
      $self_addr = $self;
      
      
      
      $mt = $self_addr + 8;
      
      
      
      
      if (HEAP[$self_addr + 2504] > 623) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      $kk = 0;
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      var $12 = HEAP[$mt + 4 * $kk] & -2147483648;
      
      
      
      
      
      
      
      $y = HEAP[$mt + 4 * ($kk + 1)] & 2147483647 | $12;
      
      
      
      
      
      
      
      
      
      
      
      
      var $32 = $y >>> 0 >>> 1 ^ HEAP[$mt + 4 * ($kk + 397)] ^ HEAP[_mag01_8316 + ($y & 1) * 4];
      
      
      
      HEAP[$mt + 4 * $kk] = $32;
      
      var $37 = $kk + 1;
      $kk = $37;
      
      if ($37 <= 226) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $39 = __lastLabel__ == 3 ? $70 : $72;
      
      
      
      var $43 = HEAP[$39 + 4 * $kk] & -2147483648;
      
      
      
      
      
      
      
      $y = HEAP[$mt + 4 * ($kk + 1)] & 2147483647 | $43;
      
      var $52 = $kk + -227;
      
      
      
      
      
      
      
      
      
      
      var $63 = $y >>> 0 >>> 1 ^ HEAP[$mt + 4 * $52] ^ HEAP[_mag01_8316 + ($y & 1) * 4];
      
      
      
      HEAP[$mt + 4 * $kk] = $63;
      
      var $68 = $kk + 1;
      $kk = $68;
      
      var $70 = $mt;
      if ($68 <= 622) {
        __lastLabel__ = 3;
        __label__ = 3;
        break;
      } else {
        __lastLabel__ = 3;
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $72 = $mt;
      if ($kk <= 622) {
        __lastLabel__ = 4;
        __label__ = 3;
        break;
      } else {
        __lastLabel__ = 4;
        __label__ = 5;
        break;
      }
     case 5:
      var $_lcssa = __lastLabel__ == 4 ? $72 : $70;
      
      
      var $75 = HEAP[$_lcssa + 2492] & -2147483648;
      
      
      
      
      
      $y = HEAP[$mt] & 2147483647 | $75;
      
      
      
      
      
      
      
      
      
      
      var $91 = $y >>> 0 >>> 1 ^ HEAP[$mt + 1584] ^ HEAP[_mag01_8316 + ($y & 1) * 4];
      
      
      HEAP[$mt + 2492] = $91;
      
      
      HEAP[$self_addr + 2504] = 0;
      __label__ = 6;
      break;
     case 6:
      
      
      var $98 = HEAP[$self_addr + 2504];
      
      
      
      $y = HEAP[$mt + 4 * $98];
      var $102 = $98 + 1;
      
      
      HEAP[$self_addr + 2504] = $102;
      
      
      
      var $108 = $y >>> 0 >>> 11 ^ $y;
      $y = $108;
      
      
      var $111 = $y << 7 & -1658038656;
      
      var $113 = $111 ^ $y;
      $y = $113;
      
      
      var $116 = $y << 15 & -272236544;
      
      var $118 = $116 ^ $y;
      $y = $118;
      
      
      
      var $122 = $y >>> 0 >>> 18 ^ $y;
      $y = $122;
      
      $0 = $y;
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _random_random($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    var $a;
    var $b;
    $self_addr = $self;
    
    var $2 = _genrand_int32($self_addr);
    
    $a = $2 >>> 0 >>> 5;
    
    var $5 = _genrand_int32($self_addr);
    
    $b = $5 >>> 0 >>> 6;
    
    
    
    
    
    
    
    var $14 = _PyFloat_FromDouble(($a * 67108864 + $b) * 1.1102230246251565e-16);
    $0 = $14;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _init_genrand($self, $s) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $s_addr;
      var $mti;
      var $mt;
      $self_addr = $self;
      $s_addr = $s;
      
      
      
      $mt = $self_addr + 8;
      
      
      
      HEAP[$mt] = $s_addr;
      $mti = 1;
      __label__ = 1;
      break;
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $20 = ((HEAP[$mt + 4 * ($mti - 1 & 4294967295) & 4294967295] >>> 0 >>> 30 ^ HEAP[$mt + 4 * ($mti - 1 & 4294967295) & 4294967295]) * 1812433253 & 4294967295) + $mti & 4294967295;
      
      
      
      HEAP[$mt + 4 * $mti & 4294967295] = $20;
      
      
      
      var $27 = HEAP[$mt + 4 * $mti];
      
      
      
      HEAP[$mt + 4 * $mti] = $27;
      
      var $32 = $mti + 1;
      $mti = $32;
      
      if ($32 <= 623) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      HEAP[$self_addr + 2504] = $mti;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _init_by_array($self, $init_key, $key_length) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $init_key_addr;
      var $key_length_addr;
      var $retval;
      var $0;
      var $i;
      var $j;
      var $k;
      var $mt;
      $self_addr = $self;
      $init_key_addr = $init_key;
      $key_length_addr = $key_length;
      
      
      
      $mt = $self_addr + 8;
      
      _init_genrand($self_addr, 19650218);
      $i = 1;
      $j = 0;
      
      
      var $max = $key_length_addr >= 624 ? $key_length_addr : 624;
      $k = $max;
      
      if ($max != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $32 = ($j + HEAP[$init_key_addr + 4 * $j & 4294967295] & 4294967295) + ((HEAP[$mt + 4 * ($i - 1 & 4294967295) & 4294967295] >>> 0 >>> 30 ^ HEAP[$mt + 4 * ($i - 1 & 4294967295) & 4294967295]) * 1664525 & 4294967295 ^ HEAP[$mt + 4 * $i & 4294967295]) & 4294967295;
      
      
      
      HEAP[$mt + 4 * $i & 4294967295] = $32;
      
      
      
      var $39 = HEAP[$mt + 4 * $i];
      
      
      
      HEAP[$mt + 4 * $i] = $39;
      
      var $44 = $i + 1;
      $i = $44;
      
      var $46 = $j + 1;
      $j = $46;
      
      if ($44 > 623) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      var $50 = HEAP[$mt + 2492];
      
      
      HEAP[$mt] = $50;
      $i = 1;
      __label__ = 3;
      break;
     case 3:
      
      
      
      if ($j >= $key_length_addr) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $j = 0;
      __label__ = 5;
      break;
     case 5:
      
      var $57 = $k - 1;
      $k = $57;
      
      if ($57 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      $k = 623;
      var $59 = $mt;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $60 = __lastLabel__ == 6 ? $59 : $101;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $79 = ((HEAP[$mt + 4 * ($i - 1 & 4294967295) & 4294967295] >>> 0 >>> 30 ^ HEAP[$mt + 4 * ($i - 1 & 4294967295) & 4294967295]) * 1566083941 & 4294967295 ^ HEAP[$60 + 4 * $i & 4294967295]) - $i & 4294967295;
      
      
      
      HEAP[$mt + 4 * $i & 4294967295] = $79;
      
      
      
      var $86 = HEAP[$mt + 4 * $i];
      
      
      
      HEAP[$mt + 4 * $i] = $86;
      
      var $91 = $i + 1;
      $i = $91;
      
      if ($91 > 623) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      var $95 = HEAP[$mt + 2492];
      
      
      HEAP[$mt] = $95;
      $i = 1;
      __label__ = 9;
      break;
     case 9:
      
      var $99 = $k - 1;
      $k = $99;
      
      var $101 = $mt;
      if ($99 != 0) {
        __lastLabel__ = 9;
        __label__ = 7;
        break;
      } else {
        __lastLabel__ = 9;
        __label__ = 10;
        break;
      }
     case 10:
      
      HEAP[$101] = -2147483648;
      
      var $104 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $104;
      $0 = __Py_NoneStruct;
      
      $retval = $0;
      var $retval12 = $retval;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _random_seed($self, $args) {
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
      var $result;
      var $masklower;
      var $thirtytwo;
      var $n;
      var $key;
      var $keymax;
      var $keyused;
      var $err;
      var $arg = __stackBase__;
      var $now = __stackBase__ + 4;
      var $hash;
      var $newn;
      var $pychunk;
      var $chunk;
      var $bigger;
      $self_addr = $self;
      $args_addr = $args;
      $result = 0;
      $masklower = 0;
      $thirtytwo = 0;
      $n = 0;
      $key = 0;
      HEAP[$arg] = 0;
      
      var $2 = _PyArg_UnpackTuple($args_addr, __str, 0, 1, allocate([ $arg, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      
      if (HEAP[$arg] == 0 | HEAP[$arg] == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = _time($now);
      var $9 = HEAP[$now];
      
      _init_genrand($self_addr, $9);
      
      var $12 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $12;
      $0 = __Py_NoneStruct;
      __label__ = 44;
      break;
     case 4:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$arg] + 4] + 84] & 8388608) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$arg] + 4] + 84] & 16777216) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $27 = HEAP[$arg];
      var $28 = _PyNumber_Absolute($27);
      $n = $28;
      __lastLabel__ = 6;
      __label__ = 9;
      break;
     case 7:
      var $29 = HEAP[$arg];
      var $30 = _PyObject_Hash($29);
      $hash = $30;
      
      var $32 = $hash == -1;
      if ($32) {
        __label__ = 34;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      var $34 = _PyLong_FromUnsignedLong($hash);
      $n = $34;
      __lastLabel__ = 8;
      __label__ = 9;
      break;
     case 9:
      var $35 = __lastLabel__ == 8 ? $34 : $28;
      
      if ($35 == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      $keymax = 8;
      $keyused = 0;
      
      
      var $39 = _PyMem_Malloc($keymax * 4);
      
      $key = $39;
      
      
      if ($key == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $43 = _PyLong_FromUnsignedLong(-1);
      $masklower = $43;
      
      
      if ($masklower == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $46 = _PyInt_FromLong(32);
      $thirtytwo = $46;
      
      
      if ($thirtytwo == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 13:
      
      var $50 = $err == -1;
      if ($50) {
        __label__ = 34;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      var $53 = _PyNumber_And($n, $masklower);
      $pychunk = $53;
      
      
      if ($pychunk == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      var $57 = _PyLong_AsUnsignedLong($pychunk);
      $chunk = $57;
      
      
      
      var $61 = HEAP[$pychunk] - 1;
      
      
      HEAP[$pychunk] = $61;
      
      
      
      
      if (HEAP[$pychunk] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $72 = HEAP[HEAP[$pychunk + 4] + 24];
      
      FUNCTION_TABLE[$72]($pychunk);
      __label__ = 17;
      break;
     case 17:
      
      var $75 = $chunk == -1;
      if ($75) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $76 = _PyErr_Occurred();
      
      if ($76 != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      var $80 = _PyNumber_Rshift($n, $thirtytwo);
      $newn = $80;
      
      if ($80 == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      var $85 = HEAP[$n] - 1;
      
      
      HEAP[$n] = $85;
      
      
      
      
      if (HEAP[$n] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $96 = HEAP[HEAP[$n + 4] + 24];
      
      FUNCTION_TABLE[$96]($n);
      __label__ = 22;
      break;
     case 22:
      
      $n = $newn;
      
      
      
      if ($keyused >= $keymax) {
        __label__ = 23;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 23:
      
      
      $bigger = $keymax << 1;
      
      
      
      
      if ($bigger >>> 1 != $keymax) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      var $108 = _PyErr_NoMemory();
      __label__ = 34;
      break;
     case 25:
      
      
      
      
      var $113 = _PyMem_Realloc($key, $bigger * 4);
      var $114 = $113;
      $key = $114;
      
      
      if ($key == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      $keymax = $bigger;
      __label__ = 27;
      break;
     case 27:
      
      
      
      if ($keyused >= $keymax) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      ___assert_fail(__str1, __str2, 296, ___PRETTY_FUNCTION___8478);
      throw "Reached an unreachable!";
     case 29:
      
      
      
      
      HEAP[$key + 4 * $keyused] = $chunk;
      
      var $126 = $keyused + 1;
      $keyused = $126;
      __label__ = 30;
      break;
     case 30:
      
      var $128 = _PyObject_IsTrue($n);
      $err = $128;
      
      if ($128 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      if ($keyused == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      HEAP[$key + 4 * $keyused] = 0;
      
      var $136 = $keyused + 1;
      $keyused = $136;
      __label__ = 33;
      break;
     case 33:
      
      
      
      var $140 = _init_by_array($self_addr, $key, $keyused);
      $result = $140;
      __label__ = 34;
      break;
     case 34:
      
      
      if ($masklower != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 35:
      
      
      
      var $145 = HEAP[$masklower] - 1;
      
      
      HEAP[$masklower] = $145;
      
      
      
      
      if (HEAP[$masklower] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      var $156 = HEAP[HEAP[$masklower + 4] + 24];
      
      FUNCTION_TABLE[$156]($masklower);
      __label__ = 37;
      break;
     case 37:
      
      
      if ($thirtytwo != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 38:
      
      
      
      var $163 = HEAP[$thirtytwo] - 1;
      
      
      HEAP[$thirtytwo] = $163;
      
      
      
      
      if (HEAP[$thirtytwo] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      var $174 = HEAP[HEAP[$thirtytwo + 4] + 24];
      
      FUNCTION_TABLE[$174]($thirtytwo);
      __label__ = 40;
      break;
     case 40:
      
      
      if ($n != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 41:
      
      
      
      var $181 = HEAP[$n] - 1;
      
      
      HEAP[$n] = $181;
      
      
      
      
      if (HEAP[$n] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $192 = HEAP[HEAP[$n + 4] + 24];
      
      FUNCTION_TABLE[$192]($n);
      __label__ = 43;
      break;
     case 43:
      
      
      _PyMem_Free($key);
      
      $0 = $result;
      __label__ = 44;
      break;
     case 44:
      
      $retval = $0;
      var $retval45 = $retval;
      STACKTOP = __stackBase__;
      return $retval45;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _random_getstate($self) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $state;
      var $element;
      var $i;
      $self_addr = $self;
      var $1 = _PyTuple_New(625);
      $state = $1;
      
      
      if ($state == 0) {
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
      $i = 0;
      __lastLabel__ = 2;
      __label__ = 5;
      break;
     case 3:
      
      
      
      
      var $8 = HEAP[$self_addr + 8 + $i * 4];
      var $9 = _PyLong_FromUnsignedLong($8);
      $element = $9;
      
      
      if ($element == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      HEAP[$state + 12 + $i * 4] = $element;
      
      var $19 = $i + 1;
      $i = $19;
      __lastLabel__ = 4;
      __label__ = 5;
      break;
     case 5:
      var $20 = __lastLabel__ == 4 ? $19 : 0;
      
      if ($20 <= 623) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $24 = HEAP[$self_addr + 2504];
      var $25 = _PyLong_FromLong($24);
      $element = $25;
      
      
      if ($element == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      HEAP[$state + 12 + $i * 4] = $element;
      
      $0 = $state;
      __label__ = 11;
      break;
     case 8:
      
      
      
      var $38 = HEAP[$state] - 1;
      
      
      HEAP[$state] = $38;
      
      
      
      
      if (HEAP[$state] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $49 = HEAP[HEAP[$state + 4] + 24];
      
      FUNCTION_TABLE[$49]($state);
      __label__ = 10;
      break;
     case 10:
      $0 = 0;
      __label__ = 11;
      break;
     case 11:
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _random_setstate($self, $state) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $state_addr;
      var $retval;
      var $0;
      var $i;
      var $element;
      var $index;
      $self_addr = $self;
      $state_addr = $state;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$state_addr + 4] + 84] & 67108864) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $8 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($8, __str3);
      $0 = 0;
      __label__ = 14;
      break;
     case 2:
      
      var $10 = _PyTuple_Size($state_addr);
      
      if ($10 != 625) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $12 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($12, __str4);
      $0 = 0;
      __label__ = 14;
      break;
     case 4:
      $i = 0;
      __lastLabel__ = 4;
      __label__ = 9;
      break;
     case 5:
      var $13 = _PyLong_AsUnsignedLong($32);
      $element = $13;
      
      var $15 = $element == -1;
      if ($15) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      var $16 = _PyErr_Occurred();
      
      if ($16 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 14;
      break;
     case 8:
      
      
      
      
      
      HEAP[$self_addr + 8 + $i * 4] = $element;
      
      var $24 = $i + 1;
      $i = $24;
      __lastLabel__ = 8;
      __label__ = 9;
      break;
     case 9:
      var $25 = __lastLabel__ == 8 ? $24 : 0;
      
      
      
      
      
      
      var $32 = HEAP[$state_addr + 12 + $i * 4];
      if ($25 <= 623) {
        __label__ = 5;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      var $33 = _PyLong_AsLong($32);
      $index = $33;
      
      var $35 = $index == -1;
      if ($35) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      var $36 = _PyErr_Occurred();
      
      if ($36 != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = 0;
      __label__ = 14;
      break;
     case 13:
      
      
      
      HEAP[$self_addr + 2504] = $index;
      
      var $42 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $42;
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
  function _random_jumpahead($self, $n) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $n_addr;
      var $retval;
      var $0;
      var $i;
      var $j;
      var $iobj;
      var $remobj;
      var $mt;
      var $tmp;
      $self_addr = $self;
      $n_addr = $n;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$n_addr + 4] + 84] & 8388608) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$n_addr + 4] + 84] & 16777216) == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $19 = HEAP[HEAP[$n_addr + 4] + 12];
      var $20 = HEAP[_PyExc_TypeError];
      var $21 = _PyErr_Format($20, __str5, allocate([ $19, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 20;
      break;
     case 3:
      
      
      
      $mt = $self_addr + 8;
      $i = 623;
      __lastLabel__ = 3;
      __label__ = 16;
      break;
     case 4:
      
      var $26 = _PyInt_FromLong($i);
      $iobj = $26;
      
      
      if ($iobj == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 20;
      break;
     case 6:
      
      
      var $31 = _PyNumber_Remainder($n_addr, $iobj);
      $remobj = $31;
      
      
      
      var $35 = HEAP[$iobj] - 1;
      
      
      HEAP[$iobj] = $35;
      
      
      
      
      if (HEAP[$iobj] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $46 = HEAP[HEAP[$iobj + 4] + 24];
      
      FUNCTION_TABLE[$46]($iobj);
      __label__ = 8;
      break;
     case 8:
      
      
      if ($remobj == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = 0;
      __label__ = 20;
      break;
     case 10:
      
      var $51 = _PyInt_AsLong($remobj);
      $j = $51;
      
      
      
      var $55 = HEAP[$remobj] - 1;
      
      
      HEAP[$remobj] = $55;
      
      
      
      
      if (HEAP[$remobj] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $66 = HEAP[HEAP[$remobj + 4] + 24];
      
      FUNCTION_TABLE[$66]($remobj);
      __label__ = 12;
      break;
     case 12:
      
      var $69 = $j == -1;
      if ($69) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      var $70 = _PyErr_Occurred();
      
      if ($70 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = 0;
      __label__ = 20;
      break;
     case 15:
      
      
      
      
      $tmp = HEAP[$mt + 4 * $i];
      
      
      
      var $79 = HEAP[$mt + 4 * $j];
      
      
      
      HEAP[$mt + 4 * $i] = $79;
      
      
      
      
      HEAP[$mt + 4 * $j] = $tmp;
      
      var $88 = $i - 1;
      $i = $88;
      __lastLabel__ = 15;
      __label__ = 16;
      break;
     case 16:
      var $89 = __lastLabel__ == 15 ? $88 : 623;
      
      if ($89 > 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      $i = 0;
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      
      
      var $97 = HEAP[$mt + 4 * $i] + 1 + $i;
      
      
      
      HEAP[$mt + 4 * $i] = $97;
      
      var $102 = $i + 1;
      $i = $102;
      
      if ($102 <= 623) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      HEAP[$self_addr + 2504] = 624;
      
      var $107 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $107;
      $0 = __Py_NoneStruct;
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
  function _random_getrandbits($self, $args) {
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
      var $k = __stackBase__;
      var $i;
      var $bytes;
      var $r;
      var $bytearray;
      var $result;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str6, allocate([ $k, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$k] <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($6, __str7);
      $0 = 0;
      __label__ = 11;
      break;
     case 4:
      
      
      
      
      
      $bytes = (((HEAP[$k] - 1) / 32 | 0) + 1) * 4;
      
      var $13 = _PyMem_Malloc($bytes);
      $bytearray = $13;
      
      
      if ($bytearray == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $16 = _PyErr_NoMemory();
      $0 = 0;
      __label__ = 11;
      break;
     case 6:
      $i = 0;
      
      
      
      if ($i < $bytes) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      var $21 = _genrand_int32($self_addr);
      $r = $21;
      
      
      if (HEAP[$k] <= 31) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      var $27 = $r >>> 32 - HEAP[$k];
      $r = $27;
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      
      HEAP[$bytearray + $i] = $r & 255;
      
      
      
      
      
      
      
      HEAP[$bytearray + ($i + 1)] = $r >>> 8 & 255;
      
      
      
      
      
      
      
      HEAP[$bytearray + ($i + 2)] = $r >>> 16 & 255;
      
      
      
      
      
      
      
      HEAP[$bytearray + ($i + 3)] = $r >>> 24 & 255;
      
      var $55 = $i + 4;
      $i = $55;
      
      var $57 = HEAP[$k] - 32;
      HEAP[$k] = $57;
      
      
      
      if ($i < $bytes) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      var $63 = __PyLong_FromByteArray($bytearray, $bytes, 1, 0);
      $result = $63;
      
      _PyMem_Free($bytearray);
      
      $0 = $result;
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
  function _random_new($type, $args, $kwds) {
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
      var $tmp;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      if ($type_addr == _Random_Type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $4 = __PyArg_NoKeywords(__str8, $kwds_addr);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 12;
      break;
     case 3:
      
      
      var $8 = HEAP[$type_addr + 152];
      
      var $10 = FUNCTION_TABLE[$8]($type_addr, 0);
      
      $self = $10;
      
      if ($10 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 12;
      break;
     case 5:
      
      
      var $15 = _random_seed($self, $args_addr);
      $tmp = $15;
      
      
      if ($tmp == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      
      var $22 = HEAP[$self] - 1;
      
      HEAP[$self] = $22;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      var $32 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$32]($self);
      __label__ = 8;
      break;
     case 8:
      $0 = 0;
      __label__ = 12;
      break;
     case 9:
      
      
      
      var $38 = HEAP[$tmp] - 1;
      
      
      HEAP[$tmp] = $38;
      
      
      
      
      if (HEAP[$tmp] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $49 = HEAP[HEAP[$tmp + 4] + 24];
      
      FUNCTION_TABLE[$49]($tmp);
      __label__ = 11;
      break;
     case 11:
      
      
      $0 = $self;
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
  function _init_random() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $0 = _PyType_Ready(_Random_Type);
      
      if ($0 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $2 = _Py_InitModule4(__str21, 0, _module_doc, 0, 1013);
      $m = $2;
      
      
      if ($m == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      var $6 = HEAP[_Random_Type] + 1;
      HEAP[_Random_Type] = $6;
      
      var $8 = _PyModule_AddObject($m, __str22, _Random_Type);
      __label__ = 3;
      break;
     case 3:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_random"] = _init_random;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _random_random, 0, _random_seed, 0, _random_getstate, 0, _random_setstate, 0, _random_jumpahead, 0, _random_getrandbits, 0, _PyObject_GenericGetAttr, 0, _random_new, 0, _PyObject_Free, 0 ]);
  function run(args) {
    _mag01_8316 = allocate([ 0, 0, 0, 0, -1727483681, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str = allocate([ 115, 101, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 107, 101, 121, 117, 115, 101, 100, 32, 60, 32, 107, 101, 121, 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 95, 114, 97, 110, 100, 111, 109, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8478 = allocate([ 114, 97, 110, 100, 111, 109, 95, 115, 101, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 115, 116, 97, 116, 101, 32, 118, 101, 99, 116, 111, 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 115, 116, 97, 116, 101, 32, 118, 101, 99, 116, 111, 114, 32, 105, 115, 32, 116, 104, 101, 32, 119, 114, 111, 110, 103, 32, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 106, 117, 109, 112, 97, 104, 101, 97, 100, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 44, 32, 110, 111, 116, 32, 39, 37, 115, 39, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 105, 58, 103, 101, 116, 114, 97, 110, 100, 98, 105, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 98, 105, 116, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 103, 114, 101, 97, 116, 101, 114, 32, 116, 104, 97, 110, 32, 122, 101, 114, 111, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 82, 97, 110, 100, 111, 109, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 114, 97, 110, 100, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 114, 97, 110, 100, 111, 109, 40, 41, 32, 45, 62, 32, 120, 32, 105, 110, 32, 116, 104, 101, 32, 105, 110, 116, 101, 114, 118, 97, 108, 32, 91, 48, 44, 32, 49, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 115, 101, 101, 100, 40, 91, 110, 93, 41, 32, 45, 62, 32, 78, 111, 110, 101, 46, 32, 32, 68, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 103, 101, 116, 115, 116, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 103, 101, 116, 115, 116, 97, 116, 101, 40, 41, 32, 45, 62, 32, 116, 117, 112, 108, 101, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 115, 116, 97, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 115, 101, 116, 115, 116, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 115, 101, 116, 115, 116, 97, 116, 101, 40, 115, 116, 97, 116, 101, 41, 32, 45, 62, 32, 78, 111, 110, 101, 46, 32, 32, 82, 101, 115, 116, 111, 114, 101, 115, 32, 103, 101, 110, 101, 114, 97, 116, 111, 114, 32, 115, 116, 97, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 106, 117, 109, 112, 97, 104, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 106, 117, 109, 112, 97, 104, 101, 97, 100, 40, 105, 110, 116, 41, 32, 45, 62, 32, 78, 111, 110, 101, 46, 32, 32, 67, 114, 101, 97, 116, 101, 32, 110, 101, 119, 32, 115, 116, 97, 116, 101, 32, 102, 114, 111, 109, 32, 101, 120, 105, 115, 116, 105, 110, 103, 32, 115, 116, 97, 116, 101, 32, 97, 110, 100, 32, 105, 110, 116, 101, 103, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 103, 101, 116, 114, 97, 110, 100, 98, 105, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 103, 101, 116, 114, 97, 110, 100, 98, 105, 116, 115, 40, 107, 41, 32, 45, 62, 32, 120, 46, 32, 32, 71, 101, 110, 101, 114, 97, 116, 101, 115, 32, 97, 32, 108, 111, 110, 103, 32, 105, 110, 116, 32, 119, 105, 116, 104, 32, 107, 32, 114, 97, 110, 100, 111, 109, 32, 98, 105, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _random_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _random_doc = allocate([ 82, 97, 110, 100, 111, 109, 40, 41, 32, 45, 62, 32, 99, 114, 101, 97, 116, 101, 32, 97, 32, 114, 97, 110, 100, 111, 109, 32, 110, 117, 109, 98, 101, 114, 32, 103, 101, 110, 101, 114, 97, 116, 111, 114, 32, 119, 105, 116, 104, 32, 105, 116, 115, 32, 111, 119, 110, 32, 105, 110, 116, 101, 114, 110, 97, 108, 32, 115, 116, 97, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 95, 114, 97, 110, 100, 111, 109, 46, 82, 97, 110, 100, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    _Random_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2508, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_doc = allocate([ 77, 111, 100, 117, 108, 101, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 115, 32, 116, 104, 101, 32, 77, 101, 114, 115, 101, 110, 110, 101, 32, 84, 119, 105, 115, 116, 101, 114, 32, 114, 97, 110, 100, 111, 109, 32, 110, 117, 109, 98, 101, 114, 32, 103, 101, 110, 101, 114, 97, 116, 111, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 95, 114, 97, 110, 100, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 82, 97, 110, 100, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_random_methods] = __str9;
    HEAP[_random_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_random_methods + 12] = __str10;
    HEAP[_random_methods + 16] = __str;
    HEAP[_random_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_random_methods + 28] = __str11;
    HEAP[_random_methods + 32] = __str12;
    HEAP[_random_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_random_methods + 44] = __str13;
    HEAP[_random_methods + 48] = __str14;
    HEAP[_random_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_random_methods + 60] = __str15;
    HEAP[_random_methods + 64] = __str16;
    HEAP[_random_methods + 68] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_random_methods + 76] = __str17;
    HEAP[_random_methods + 80] = __str18;
    HEAP[_random_methods + 84] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_random_methods + 92] = __str19;
    HEAP[_Random_Type + 12] = __str20;
    HEAP[_Random_Type + 72] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_Random_Type + 88] = _random_doc;
    HEAP[_Random_Type + 116] = _random_methods;
    HEAP[_Random_Type + 156] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_Random_Type + 160] = FUNCTION_TABLE_OFFSET + 18;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
