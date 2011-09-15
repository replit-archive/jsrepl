"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 32;
  var $1___SIZE = 16;
  var $2___SIZE = 32;
  var $3___SIZE = 16;
  var $4___SIZE = 64;
  var $5___SIZE = 80;
  var $6___SIZE = 144;
  var $7___SIZE = 96;
  var $8___SIZE = 288;
  var $9___SIZE = 36;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_MultibyteCodec___SIZE = 36;
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
  var $struct_dbcs_index___SIZE = 8;
  var $struct_dbcs_index___FLATTENER = [ 0, 4, 5 ];
  var $struct_dbcs_map___SIZE = 12;
  var $struct_iso2022_config___SIZE = 8;
  var $struct_iso2022_designation___SIZE = 16;
  var $struct_iso2022_designation___FLATTENER = [ 0, 1, 2, 4, 8, 12 ];
  var $struct_pair_encodemap___SIZE = 8;
  var $struct_widedbcs_index___SIZE = 8;
  var $struct_widedbcs_index___FLATTENER = [ 0, 4, 5 ];
  var $union_MultibyteCodec_State___SIZE = 8;
  var _cofunc_8453;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var ___methods;
  var __str7;
  var __str8;
  var __str9;
  var __str10;
  var ___PRETTY_FUNCTION___8716;
  var __str11;
  var ___PRETTY_FUNCTION___9242;
  var _cp949_encmap;
  var _ksx1001_decmap;
  var _jisxcommon_encmap;
  var _jisx0208_decmap;
  var _jisx0212_decmap;
  var _jisx0213_bmp_encmap;
  var _jisx0213_1_bmp_decmap;
  var _jisx0213_2_bmp_decmap;
  var _jisx0213_emp_encmap;
  var _jisx0213_1_emp_decmap;
  var _jisx0213_2_emp_decmap;
  var _gbcommon_encmap;
  var _gb2312_decmap;
  var _initialized_9477_b;
  var __str12;
  var __str13;
  var __str14;
  var __str15;
  var ___PRETTY_FUNCTION___9539;
  var _initialized_9598_b;
  var __str16;
  var __str17;
  var __str18;
  var ___PRETTY_FUNCTION___9665;
  var _initialized_9727_b;
  var __str19;
  var ___PRETTY_FUNCTION___9789;
  var _initialized_9849_b;
  var __str20;
  var __str21;
  var __str22;
  var __str23;
  var __str24;
  var __str25;
  var _jisx0213_pair_decmap;
  var _jisx0213_pair_encmap;
  var __str26;
  var _initialized_10822_b;
  var __str27;
  var __str28;
  var __str29;
  var ___PRETTY_FUNCTION___10884;
  var _iso2022_kr_designations;
  var _iso2022_kr_config;
  var _iso2022_jp_designations;
  var _iso2022_jp_config;
  var _iso2022_jp_1_designations;
  var _iso2022_jp_1_config;
  var _iso2022_jp_2_designations;
  var _iso2022_jp_2_config;
  var _iso2022_jp_2004_designations;
  var _iso2022_jp_2004_config;
  var _iso2022_jp_3_designations;
  var _iso2022_jp_3_config;
  var _iso2022_jp_ext_designations;
  var _iso2022_jp_ext_config;
  var __mapping_list;
  var __str30;
  var __str31;
  var __str32;
  var __str33;
  var __str34;
  var __str35;
  var __str36;
  var __codec_list;
  var __str37;
  function _getmultibytecodec() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval;
      var $0;
      var $mod;
      
      
      if (HEAP[_cofunc_8453] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      var $3 = _PyImport_ImportModuleNoBlock(__str);
      $mod = $3;
      
      
      if ($mod == 0) {
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
      
      var $7 = _PyObject_GetAttrString($mod, __str1);
      HEAP[_cofunc_8453] = $7;
      
      
      
      var $11 = HEAP[$mod] - 1;
      
      
      HEAP[$mod] = $11;
      
      
      
      
      if (HEAP[$mod] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $22 = HEAP[HEAP[$mod + 4] + 24];
      
      FUNCTION_TABLE[$22]($mod);
      __label__ = 5;
      break;
     case 5:
      
      $0 = HEAP[_cofunc_8453];
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
  function _getcodec($self, $encoding) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $encoding_addr;
      var $retval;
      var $0;
      var $codecobj;
      var $r;
      var $cofunc;
      var $codec;
      var $enc;
      $self_addr = $self;
      $encoding_addr = $encoding;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$encoding_addr + 4] + 84] & 134217728) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $8 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($8, __str2);
      $0 = 0;
      __label__ = 15;
      break;
     case 2:
      var $9 = _getmultibytecodec();
      $cofunc = $9;
      
      
      if ($cofunc == 0) {
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
      
      
      
      
      $enc = $encoding_addr + 20;
      $codec = __codec_list;
      __label__ = 7;
      break;
     case 5:
      
      
      var $18 = HEAP[$codec];
      
      var $20 = _strcmp($18, $enc);
      
      if ($20 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      var $23 = $codec + 36;
      $codec = $23;
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      
      
      if (HEAP[HEAP[$codec]] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      if (HEAP[HEAP[$codec]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $36 = HEAP[_PyExc_LookupError];
      _PyErr_SetString($36, __str3);
      $0 = 0;
      __label__ = 15;
      break;
     case 10:
      
      
      var $39 = _PyCapsule_New($codec, __str4, 0);
      $codecobj = $39;
      
      
      if ($codecobj == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = 0;
      __label__ = 15;
      break;
     case 12:
      
      
      var $44 = _PyObject_CallFunctionObjArgs($cofunc, allocate([ $codecobj, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $r = $44;
      
      
      
      var $48 = HEAP[$codecobj] - 1;
      
      
      HEAP[$codecobj] = $48;
      
      
      
      
      if (HEAP[$codecobj] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $59 = HEAP[HEAP[$codecobj + 4] + 24];
      
      FUNCTION_TABLE[$59]($codecobj);
      __label__ = 14;
      break;
     case 14:
      
      $0 = $r;
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
  function _register_maps($module) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 256;
    _memset(__stackBase__, 0, 256);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $module_addr;
      var $0;
      var $h;
      var $mhname = __stackBase__;
      var $r;
      $module_addr = $module;
      $h = __mapping_list;
      var $mhname1 = $mhname;
      
      
      var $2 = $mhname + 7 + -1;
      var $mhname3 = $mhname;
      __label__ = 4;
      break;
     case 1:
      _llvm_memcpy_p0i8_p0i8_i32($mhname1, __str7, 256, 1, 0);
      
      
      var $5 = HEAP[$h];
      var $6 = _strcpy($2, $5);
      
      
      var $9 = _PyCapsule_New($h, __str4, 0);
      
      var $11 = _PyModule_AddObject($module_addr, $mhname3, $9);
      $r = $11;
      
      var $13 = $r == -1;
      if ($13) {
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
      
      var $15 = $h + 12;
      $h = $15;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      
      if (HEAP[HEAP[$h]] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 6;
      break;
     case 6:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _find_pairencmap($body, $modifier, $haystack) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $body_addr;
      var $modifier_addr;
      var $haystack_addr;
      var $haystacksize_addr;
      var $retval;
      var $0;
      var $pos;
      var $min;
      var $max;
      var $value;
      $body_addr = $body;
      $modifier_addr = $modifier;
      $haystack_addr = $haystack;
      $haystacksize_addr = 46;
      
      
      
      
      
      
      $value = $body_addr << 16 | $modifier_addr;
      $min = 0;
      
      $max = $haystacksize_addr;
      
      
      $pos = $haystacksize_addr >> 1;
      __label__ = 8;
      break;
     case 1:
      
      
      
      
      
      
      
      if (HEAP[$haystack_addr + 8 * $pos] > $value) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      if ($max == $pos) {
        __label__ = 9;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      $max = $pos;
      __label__ = 7;
      break;
     case 4:
      
      
      
      
      
      
      
      if (HEAP[$haystack_addr + 8 * $pos] < $value) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      
      
      if ($min == $pos) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      $min = $pos;
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      $pos = $max + $min >> 1;
      __label__ = 8;
      break;
     case 8:
      
      
      
      if ($min != $max) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      if (HEAP[$haystack_addr + 8 * $pos] == $value) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      $0 = HEAP[$haystack_addr + 8 * $pos + 4];
      __label__ = 12;
      break;
     case 11:
      $0 = 65533;
      __label__ = 12;
      break;
     case 12:
      
      $retval = $0;
      
      var $retval1213 = $retval & 65535;
      return $retval1213;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _importmap($modname, $symbol, $encmap, $decmap) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $modname_addr;
      var $symbol_addr;
      var $encmap_addr;
      var $decmap_addr;
      var $retval;
      var $0;
      var $o;
      var $mod;
      var $map;
      $modname_addr = $modname;
      $symbol_addr = $symbol;
      $encmap_addr = $encmap;
      $decmap_addr = $decmap;
      
      var $2 = _PyImport_ImportModule($modname_addr);
      $mod = $2;
      
      
      if ($mod == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 17;
      break;
     case 2:
      
      
      var $7 = _PyObject_GetAttrString($mod, $symbol_addr);
      $o = $7;
      
      
      if ($o == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $11 = _PyCapsule_IsValid($o, __str4);
      
      if ($11 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $13 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($13, __str8);
      __label__ = 14;
      break;
     case 5:
      
      var $15 = _PyCapsule_GetPointer($o, __str4);
      
      $map = $15;
      
      
      if ($encmap_addr != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $23 = HEAP[$map + 4];
      HEAP[$encmap_addr] = $23;
      __label__ = 7;
      break;
     case 7:
      
      
      if ($decmap_addr != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $30 = HEAP[$map + 8];
      HEAP[$decmap_addr] = $30;
      __label__ = 9;
      break;
     case 9:
      
      
      
      var $34 = HEAP[$o] - 1;
      
      
      HEAP[$o] = $34;
      
      
      
      
      if (HEAP[$o] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $45 = HEAP[HEAP[$o + 4] + 24];
      
      FUNCTION_TABLE[$45]($o);
      __label__ = 11;
      break;
     case 11:
      
      
      
      var $50 = HEAP[$mod] - 1;
      
      
      HEAP[$mod] = $50;
      
      
      
      
      if (HEAP[$mod] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $61 = HEAP[HEAP[$mod + 4] + 24];
      
      FUNCTION_TABLE[$61]($mod);
      __label__ = 13;
      break;
     case 13:
      $0 = 0;
      __label__ = 17;
      break;
     case 14:
      
      
      
      var $66 = HEAP[$mod] - 1;
      
      
      HEAP[$mod] = $66;
      
      
      
      
      if (HEAP[$mod] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $77 = HEAP[HEAP[$mod + 4] + 24];
      
      FUNCTION_TABLE[$77]($mod);
      __label__ = 16;
      break;
     case 16:
      $0 = -1;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval16 = $retval;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _iso2022_codec_init($config) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $config_addr;
      var $retval;
      var $0;
      var $desig;
      $config_addr = $config;
      
      
      
      
      $desig = HEAP[$config_addr + 4];
      
      
      
      
      $desig = HEAP[$config_addr + 4];
      __label__ = 5;
      break;
     case 1:
      
      
      
      
      if (HEAP[$desig + 4] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      var $15 = HEAP[$desig + 4];
      var $16 = FUNCTION_TABLE[$15]();
      
      if ($16 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 7;
      break;
     case 4:
      
      var $19 = $desig + 16;
      $desig = $19;
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[$desig] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      $0 = 0;
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
  function _iso2022_encode_init($state, $config) {
    
    var $state_addr;
    var $retval;
    var $0;
    $state_addr = $state;
    
    
    
    
    HEAP[$state_addr + 4] = 0;
    
    
    
    
    HEAP[$state_addr] = 66;
    
    
    
    
    HEAP[$state_addr + 1] = 66;
    $0 = 0;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _iso2022_encode_reset($state, $config, $outbuf, $outleft) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $config_addr;
      var $outbuf_addr;
      var $outleft_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $config_addr = $config;
      $outbuf_addr = $outbuf;
      $outleft_addr = $outleft;
      
      
      
      
      
      
      
      
      
      if ((HEAP[$state_addr + 4] & 1 & 255) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      if ($outleft_addr <= 0) {
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
      
      
      var $13 = HEAP[$outbuf_addr];
      HEAP[$13] = 15;
      
      
      var $16 = HEAP[$outbuf_addr] + 1;
      
      HEAP[$outbuf_addr] = $16;
      
      var $19 = $outleft_addr - 1;
      $outleft_addr = $19;
      
      
      
      
      
      var $25 = HEAP[$state_addr + 4] & -2;
      
      
      
      
      HEAP[$state_addr + 4] = $25;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      
      if (HEAP[$state_addr] != 66) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      if ($outleft_addr <= 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -1;
      __label__ = 9;
      break;
     case 7:
      
      
      var $40 = HEAP[$outbuf_addr];
      HEAP[$40] = 27;
      
      
      var $43 = HEAP[$outbuf_addr] + 1;
      HEAP[$43] = 40;
      
      
      var $46 = HEAP[$outbuf_addr] + 2;
      HEAP[$46] = 66;
      
      
      var $49 = HEAP[$outbuf_addr] + 3;
      
      HEAP[$outbuf_addr] = $49;
      
      var $52 = $outleft_addr - 3;
      $outleft_addr = $52;
      
      
      
      
      HEAP[$state_addr] = 66;
      __label__ = 8;
      break;
     case 8:
      $0 = 0;
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
  function _iso2022_encode($state, $config, $inbuf, $inleft, $outbuf, $outleft, $flags) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $config_addr;
      var $inbuf_addr;
      var $inleft_addr;
      var $outbuf_addr;
      var $outleft_addr;
      var $flags_addr;
      var $retval;
      var $iftmp_13;
      var $0;
      var $dsg;
      var $encoded;
      var $c = __stackBase__;
      var $insize;
      var $length = __stackBase__ + 4;
      var $u4in = __stackBase__ + 8;
      $state_addr = $state;
      $config_addr = $config;
      $inbuf_addr = $inbuf;
      $inleft_addr = $inleft;
      $outbuf_addr = $outbuf;
      $outleft_addr = $outleft;
      $flags_addr = $flags;
      var $1 = $u4in;
      var $2 = $u4in + 4;
      var $u4in29 = $u4in;
      __lastLabel__ = -1;
      __label__ = 77;
      break;
     case 1:
      
      
      
      var $6 = HEAP[HEAP[$inbuf_addr]];
      HEAP[$c] = $6;
      
      
      if (HEAP[$c] <= 127) {
        __label__ = 2;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 2:
      
      
      
      
      
      
      if (HEAP[$state_addr] != 66) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      if ($outleft_addr <= 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 79;
      break;
     case 5:
      
      
      var $19 = HEAP[$outbuf_addr];
      HEAP[$19] = 27;
      
      
      var $22 = HEAP[$outbuf_addr] + 1;
      HEAP[$22] = 40;
      
      
      var $25 = HEAP[$outbuf_addr] + 2;
      HEAP[$25] = 66;
      
      
      
      
      HEAP[$state_addr] = 66;
      
      
      var $32 = HEAP[$outbuf_addr] + 3;
      
      HEAP[$outbuf_addr] = $32;
      
      var $35 = $outleft_addr - 3;
      $outleft_addr = $35;
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      
      
      
      
      var $44 = $outleft_addr;
      if ((HEAP[$state_addr + 4] & 1 & 255) != 0) {
        __lastLabel__ = 6;
        __label__ = 7;
        break;
      } else {
        __lastLabel__ = 6;
        __label__ = 10;
        break;
      }
     case 7:
      
      if ($44 <= 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = -1;
      __label__ = 79;
      break;
     case 9:
      
      
      var $48 = HEAP[$outbuf_addr];
      HEAP[$48] = 15;
      
      
      
      
      
      var $54 = HEAP[$state_addr + 4] & -2;
      
      
      
      
      HEAP[$state_addr + 4] = $54;
      
      
      var $61 = HEAP[$outbuf_addr] + 1;
      
      HEAP[$outbuf_addr] = $61;
      
      var $64 = $outleft_addr - 1;
      $outleft_addr = $64;
      __lastLabel__ = 9;
      __label__ = 10;
      break;
     case 10:
      var $65 = __lastLabel__ == 9 ? $64 : $44;
      
      if ($65 <= 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = -1;
      __label__ = 79;
      break;
     case 12:
      
      
      
      var $70 = HEAP[$c] & 255;
      var $71 = HEAP[$outbuf_addr];
      HEAP[$71] = $70;
      
      
      var $74 = HEAP[$inbuf_addr] + 2;
      
      HEAP[$inbuf_addr] = $74;
      
      var $77 = $inleft_addr - 1;
      $inleft_addr = $77;
      
      
      var $80 = HEAP[$outbuf_addr] + 1;
      
      HEAP[$outbuf_addr] = $80;
      
      var $83 = $outleft_addr - 1;
      $outleft_addr = $83;
      var $_pr3 = $inleft_addr;
      __lastLabel__ = 12;
      __label__ = 77;
      break;
     case 13:
      var $84 = HEAP[$c];
      
      
      if ($84 >>> 10 == 54) {
        __lastLabel__ = 13;
        __label__ = 14;
        break;
      } else {
        __lastLabel__ = 13;
        __label__ = 18;
        break;
      }
     case 14:
      
      
      if ($inleft_addr <= 1) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $0 = -2;
      __label__ = 79;
      break;
     case 16:
      
      
      
      
      
      
      var $95 = HEAP[$c];
      if (HEAP[HEAP[$inbuf_addr] + 2] >>> 10 == 55) {
        __lastLabel__ = 16;
        __label__ = 17;
        break;
      } else {
        __lastLabel__ = 16;
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      
      var $104 = ($95 - 55296) * 1024 + 9216 + HEAP[HEAP[$inbuf_addr] + 2];
      HEAP[$c] = $104;
      __lastLabel__ = 17;
      __label__ = 18;
      break;
     case 18:
      var $105 = __lastLabel__ == 17 ? $104 : __lastLabel__ == 13 ? $84 : $95;
      
      if ($105 > 65535) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      $iftmp_13 = 2;
      __label__ = 21;
      break;
     case 20:
      $iftmp_13 = 1;
      __label__ = 21;
      break;
     case 21:
      
      $insize = $iftmp_13;
      $encoded = -1;
      
      
      
      
      $dsg = HEAP[$config_addr + 4];
      __label__ = 32;
      break;
     case 22:
      HEAP[$length] = 1;
      
      
      var $114 = HEAP[$dsg + 12];
      var $115 = FUNCTION_TABLE[$114]($c, $length);
      $encoded = $115;
      
      var $117 = $encoded == -2;
      if ($117) {
        __label__ = 23;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 23:
      
      
      if ($inleft_addr <= 1) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 24:
      
      
      
      if (($flags_addr & 1) == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      $0 = -2;
      __label__ = 79;
      break;
     case 26:
      HEAP[$length] = 2;
      
      
      
      
      var $127 = HEAP[HEAP[$inbuf_addr]];
      HEAP[$1] = $127;
      
      
      
      
      var $132 = HEAP[HEAP[$inbuf_addr] + 2];
      HEAP[$2] = $132;
      
      
      var $135 = HEAP[$dsg + 12];
      var $136 = FUNCTION_TABLE[$135]($u4in29, $length);
      $encoded = $136;
      __lastLabel__ = 26;
      __label__ = 28;
      break;
     case 27:
      HEAP[$length] = -1;
      
      
      var $139 = HEAP[$dsg + 12];
      var $140 = FUNCTION_TABLE[$139]($c, $length);
      $encoded = $140;
      __lastLabel__ = 27;
      __label__ = 28;
      break;
     case 28:
      var $141 = __lastLabel__ == 27 ? $140 : $136;
      var $142 = $141 != -1;
      if ($142) {
        __label__ = 29;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 29:
      
      $insize = HEAP[$length];
      __label__ = 33;
      break;
     case 30:
      
      var $145 = $encoded != -1;
      if ($145) {
        __label__ = 33;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      var $147 = $dsg + 16;
      $dsg = $147;
      __label__ = 32;
      break;
     case 32:
      
      
      
      
      if (HEAP[$dsg] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      
      if (HEAP[$dsg] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      $0 = 1;
      __label__ = 79;
      break;
     case 35:
      
      
      
      
      if (HEAP[$dsg + 2] != 1) {
        __label__ = 36;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 36:
      
      
      
      
      if (HEAP[$dsg + 2] != 2) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      ___assert_fail(__str9, __str10, 219, ___PRETTY_FUNCTION___8716);
      throw "Reached an unreachable!";
     case 38:
      
      
      
      var $167 = HEAP[$dsg + 1];
      if ($167 == 0) {
        __label__ = 39;
        break;
      } else if ($167 == 1) {
        __label__ = 55;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 39:
      
      
      
      
      
      
      
      
      
      if ((HEAP[$state_addr + 4] & 1 & 255) != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 40:
      
      
      if ($outleft_addr <= 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      $0 = -1;
      __label__ = 79;
      break;
     case 42:
      
      
      var $180 = HEAP[$outbuf_addr];
      HEAP[$180] = 15;
      
      
      
      
      
      var $186 = HEAP[$state_addr + 4] & -2;
      
      
      
      
      HEAP[$state_addr + 4] = $186;
      
      
      var $193 = HEAP[$outbuf_addr] + 1;
      
      HEAP[$outbuf_addr] = $193;
      
      var $196 = $outleft_addr - 1;
      $outleft_addr = $196;
      __label__ = 43;
      break;
     case 43:
      
      
      
      
      
      
      
      
      
      if (HEAP[$state_addr] != HEAP[$dsg]) {
        __label__ = 44;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 44:
      
      
      
      
      if (HEAP[$dsg + 2] == 1) {
        __label__ = 45;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 45:
      
      
      if ($outleft_addr <= 2) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      $0 = -1;
      __label__ = 79;
      break;
     case 47:
      
      
      var $214 = HEAP[$outbuf_addr];
      HEAP[$214] = 27;
      
      
      var $217 = HEAP[$outbuf_addr] + 1;
      HEAP[$217] = 40;
      
      
      
      
      
      var $223 = HEAP[$dsg] & 127;
      var $224 = HEAP[$outbuf_addr] + 2;
      HEAP[$224] = $223;
      
      
      var $227 = HEAP[$dsg];
      
      
      
      
      HEAP[$state_addr] = $227;
      
      
      var $234 = HEAP[$outbuf_addr] + 3;
      
      HEAP[$outbuf_addr] = $234;
      
      var $237 = $outleft_addr - 3;
      $outleft_addr = $237;
      __lastLabel__ = 47;
      __label__ = 69;
      break;
     case 48:
      
      
      
      var $241 = HEAP[$dsg] == -62;
      var $242 = $outleft_addr;
      if ($241) {
        __label__ = 49;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 49:
      
      if ($242 <= 2) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      $0 = -1;
      __label__ = 79;
      break;
     case 51:
      
      
      var $246 = HEAP[$outbuf_addr];
      HEAP[$246] = 27;
      
      
      var $249 = HEAP[$outbuf_addr] + 1;
      HEAP[$249] = 36;
      
      
      
      
      
      var $255 = HEAP[$dsg] & 127;
      var $256 = HEAP[$outbuf_addr] + 2;
      HEAP[$256] = $255;
      
      
      var $259 = HEAP[$dsg];
      
      
      
      
      HEAP[$state_addr] = $259;
      
      
      var $266 = HEAP[$outbuf_addr] + 3;
      
      HEAP[$outbuf_addr] = $266;
      
      var $269 = $outleft_addr - 3;
      $outleft_addr = $269;
      __lastLabel__ = 51;
      __label__ = 69;
      break;
     case 52:
      
      if ($242 <= 3) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      $0 = -1;
      __label__ = 79;
      break;
     case 54:
      
      
      var $273 = HEAP[$outbuf_addr];
      HEAP[$273] = 27;
      
      
      var $276 = HEAP[$outbuf_addr] + 1;
      HEAP[$276] = 36;
      
      
      var $279 = HEAP[$outbuf_addr] + 2;
      HEAP[$279] = 40;
      
      
      
      
      
      var $285 = HEAP[$dsg] & 127;
      var $286 = HEAP[$outbuf_addr] + 3;
      HEAP[$286] = $285;
      
      
      var $289 = HEAP[$dsg];
      
      
      
      
      HEAP[$state_addr] = $289;
      
      
      var $296 = HEAP[$outbuf_addr] + 4;
      
      HEAP[$outbuf_addr] = $296;
      
      var $299 = $outleft_addr - 4;
      $outleft_addr = $299;
      __lastLabel__ = 54;
      __label__ = 69;
      break;
     case 55:
      
      
      
      
      
      
      
      
      
      if (HEAP[$state_addr + 1] != HEAP[$dsg]) {
        __label__ = 56;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 56:
      
      
      
      
      var $313 = $outleft_addr;
      if (HEAP[$dsg + 2] == 1) {
        __label__ = 57;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 57:
      
      if ($313 <= 2) {
        __label__ = 58;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 58:
      $0 = -1;
      __label__ = 79;
      break;
     case 59:
      
      
      var $317 = HEAP[$outbuf_addr];
      HEAP[$317] = 27;
      
      
      var $320 = HEAP[$outbuf_addr] + 1;
      HEAP[$320] = 41;
      
      
      
      
      
      var $326 = HEAP[$dsg] & 127;
      var $327 = HEAP[$outbuf_addr] + 2;
      HEAP[$327] = $326;
      
      
      var $330 = HEAP[$dsg];
      
      
      
      
      HEAP[$state_addr + 1] = $330;
      
      
      var $337 = HEAP[$outbuf_addr] + 3;
      
      HEAP[$outbuf_addr] = $337;
      
      var $340 = $outleft_addr - 3;
      $outleft_addr = $340;
      __label__ = 63;
      break;
     case 60:
      
      if ($313 <= 3) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      $0 = -1;
      __label__ = 79;
      break;
     case 62:
      
      
      var $344 = HEAP[$outbuf_addr];
      HEAP[$344] = 27;
      
      
      var $347 = HEAP[$outbuf_addr] + 1;
      HEAP[$347] = 36;
      
      
      var $350 = HEAP[$outbuf_addr] + 2;
      HEAP[$350] = 41;
      
      
      
      
      
      var $356 = HEAP[$dsg] & 127;
      var $357 = HEAP[$outbuf_addr] + 3;
      HEAP[$357] = $356;
      
      
      var $360 = HEAP[$dsg];
      
      
      
      
      HEAP[$state_addr + 1] = $360;
      
      
      var $367 = HEAP[$outbuf_addr] + 4;
      
      HEAP[$outbuf_addr] = $367;
      
      var $370 = $outleft_addr - 4;
      $outleft_addr = $370;
      __label__ = 63;
      break;
     case 63:
      
      
      
      
      
      
      
      
      if ((HEAP[$state_addr + 4] & 1) == 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 64:
      
      
      if ($outleft_addr <= 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      $0 = -1;
      __label__ = 79;
      break;
     case 66:
      
      
      var $383 = HEAP[$outbuf_addr];
      HEAP[$383] = 14;
      
      
      
      
      
      var $389 = HEAP[$state_addr + 4] | 1;
      
      
      
      
      HEAP[$state_addr + 4] = $389;
      
      
      var $396 = HEAP[$outbuf_addr] + 1;
      
      HEAP[$outbuf_addr] = $396;
      
      var $399 = $outleft_addr - 1;
      $outleft_addr = $399;
      __lastLabel__ = 66;
      __label__ = 69;
      break;
     case 67:
      $0 = -3;
      __label__ = 79;
      break;
     case 68:
      var $_pr2 = $outleft_addr;
      __lastLabel__ = 68;
      __label__ = 69;
      break;
     case 69:
      var $400 = __lastLabel__ == 68 ? $_pr2 : __lastLabel__ == 66 ? $399 : __lastLabel__ == 47 ? $237 : __lastLabel__ == 51 ? $269 : $299;
      
      
      
      
      if (HEAP[$dsg + 2] == 1) {
        __label__ = 70;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 70:
      
      if ($400 <= 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 71:
      $0 = -1;
      __label__ = 79;
      break;
     case 72:
      
      
      
      
      var $410 = HEAP[$outbuf_addr];
      HEAP[$410] = $encoded & 255;
      
      
      var $413 = HEAP[$outbuf_addr] + 1;
      
      HEAP[$outbuf_addr] = $413;
      
      var $416 = $outleft_addr - 1;
      $outleft_addr = $416;
      __label__ = 76;
      break;
     case 73:
      
      if ($400 <= 1) {
        __label__ = 74;
        break;
      } else {
        __label__ = 75;
        break;
      }
     case 74:
      $0 = -1;
      __label__ = 79;
      break;
     case 75:
      
      
      
      
      
      var $423 = HEAP[$outbuf_addr];
      HEAP[$423] = $encoded >>> 8 & 255;
      
      
      
      
      var $428 = HEAP[$outbuf_addr] + 1;
      HEAP[$428] = $encoded & 255;
      
      
      var $431 = HEAP[$outbuf_addr] + 2;
      
      HEAP[$outbuf_addr] = $431;
      
      var $434 = $outleft_addr - 2;
      $outleft_addr = $434;
      __label__ = 76;
      break;
     case 76:
      
      
      
      var $438 = HEAP[$inbuf_addr] + 2 * $insize;
      
      HEAP[$inbuf_addr] = $438;
      
      
      var $442 = $inleft_addr - $insize;
      $inleft_addr = $442;
      __lastLabel__ = 76;
      __label__ = 77;
      break;
     case 77:
      var $443 = __lastLabel__ == -1 ? $inleft : __lastLabel__ == 76 ? $442 : $_pr3;
      
      if ($443 > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 78:
      $0 = 0;
      __label__ = 79;
      break;
     case 79:
      
      $retval = $0;
      var $retval86 = $retval;
      STACKTOP = __stackBase__;
      return $retval86;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _iso2022_decode_init($state, $config) {
    
    var $state_addr;
    var $retval;
    var $0;
    $state_addr = $state;
    
    
    
    
    HEAP[$state_addr + 4] = 0;
    
    
    
    
    HEAP[$state_addr] = 66;
    
    
    
    
    HEAP[$state_addr + 1] = 66;
    
    
    
    
    HEAP[$state_addr + 2] = 66;
    $0 = 0;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _iso2022_decode_reset($state, $config) {
    
    var $state_addr;
    var $config_addr;
    var $retval;
    var $0;
    $state_addr = $state;
    $config_addr = $config;
    
    
    
    
    HEAP[$state_addr] = 66;
    
    
    
    
    
    var $10 = HEAP[$state_addr + 4] & -2;
    
    
    
    
    HEAP[$state_addr + 4] = $10;
    $0 = 0;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _iso2022processesc($config, $state, $inbuf, $inleft) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $config_addr;
      var $state_addr;
      var $inbuf_addr;
      var $inleft_addr;
      var $retval;
      var $0;
      var $charset;
      var $designation;
      var $i;
      var $esclen;
      var $dsg;
      $config_addr = $config;
      $state_addr = $state;
      $inbuf_addr = $inbuf;
      $inleft_addr = $inleft;
      $i = 1;
      __lastLabel__ = -1;
      __label__ = 13;
      break;
     case 1:
      
      
      
      
      if (HEAP[$inleft_addr] <= $i) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -2;
      __label__ = 50;
      break;
     case 3:
      
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + $i] <= 64) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + $i] <= 90) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + $i] == 64) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $23 = $i;
      
      $esclen = $23 + 1;
      __lastLabel__ = 6;
      __label__ = 15;
      break;
     case 7:
      
      
      
      
      
      
      if ((HEAP[$config_addr] & 4) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      
      
      
      if ($i + 1 < HEAP[$inleft_addr]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + $i] == 38) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + ($i + 1)] == 64) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      var $50 = $i + 2;
      $i = $50;
      __label__ = 12;
      break;
     case 12:
      
      var $52 = $i + 1;
      $i = $52;
      __lastLabel__ = 12;
      __label__ = 13;
      break;
     case 13:
      var $53 = __lastLabel__ == 12 ? $52 : 1;
      
      if ($53 <= 15) {
        __label__ = 1;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      var $_pr = $i;
      __lastLabel__ = 14;
      __label__ = 15;
      break;
     case 15:
      var $55 = __lastLabel__ == 14 ? $_pr : $23;
      
      if ($55 > 15) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $0 = 1;
      __label__ = 50;
      break;
     case 17:
      var $57 = $esclen;
      if ($57 == 3) {
        __label__ = 18;
        break;
      } else if ($57 == 4) {
        __label__ = 28;
        break;
      } else if ($57 == 6) {
        __label__ = 35;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      
      var $66 = HEAP[HEAP[$inbuf_addr] + 2];
      if (HEAP[HEAP[$inbuf_addr] + 1] == 36) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $67 = $66 | -128;
      $charset = $67;
      $designation = 0;
      __label__ = 43;
      break;
     case 20:
      $charset = $66;
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 1] == 40) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      $designation = 0;
      __label__ = 42;
      break;
     case 22:
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 1] == 41) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      $designation = 1;
      __label__ = 42;
      break;
     case 24:
      
      
      
      
      
      
      if ((HEAP[$config_addr] & 2) == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 1] != 46) {
        __label__ = 27;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      $designation = 2;
      __label__ = 42;
      break;
     case 27:
      $0 = 3;
      __label__ = 50;
      break;
     case 28:
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 1] != 36) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      $0 = 4;
      __label__ = 50;
      break;
     case 30:
      
      
      
      
      var $98 = HEAP[HEAP[$inbuf_addr] + 3] | -128;
      $charset = $98;
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 2] == 40) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      $designation = 0;
      __label__ = 42;
      break;
     case 32:
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 2] == 41) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      $designation = 1;
      __label__ = 42;
      break;
     case 34:
      $0 = 4;
      __label__ = 50;
      break;
     case 35:
      
      
      
      
      
      
      if ((HEAP[$config_addr] & 4) == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 3] != 27) {
        __label__ = 40;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 4] != 36) {
        __label__ = 40;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 5] != 66) {
        __label__ = 40;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      $charset = -62;
      $designation = 0;
      __label__ = 43;
      break;
     case 40:
      $0 = 6;
      __label__ = 50;
      break;
     case 41:
      
      $0 = $esclen;
      __label__ = 50;
      break;
     case 42:
      
      
      if ($charset != 66) {
        __label__ = 43;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 43:
      
      
      
      
      $dsg = HEAP[$config_addr + 4];
      __label__ = 46;
      break;
     case 44:
      
      
      
      
      
      if (HEAP[$dsg] == $charset) {
        __label__ = 47;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 45:
      
      var $142 = $dsg + 16;
      $dsg = $142;
      __label__ = 46;
      break;
     case 46:
      
      
      
      
      if (HEAP[$dsg] != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 47:
      
      
      
      
      if (HEAP[$dsg] == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      $0 = $esclen;
      __label__ = 50;
      break;
     case 49:
      
      
      
      
      
      
      
      HEAP[$state_addr + $designation] = $charset;
      
      
      
      var $162 = HEAP[$inleft_addr] - $esclen;
      
      HEAP[$inleft_addr] = $162;
      
      
      
      var $167 = HEAP[$inbuf_addr] + $esclen;
      
      HEAP[$inbuf_addr] = $167;
      $0 = 0;
      __label__ = 50;
      break;
     case 50:
      
      $retval = $0;
      var $retval51 = $retval;
      return $retval51;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _iso2022processg2($config, $state, $inbuf, $inleft, $outbuf, $outleft) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $config_addr;
      var $state_addr;
      var $inbuf_addr;
      var $inleft_addr;
      var $outbuf_addr;
      var $outleft_addr;
      var $retval;
      var $0;
      $config_addr = $config;
      $state_addr = $state;
      $inbuf_addr = $inbuf;
      $inleft_addr = $inleft;
      $outbuf_addr = $outbuf;
      $outleft_addr = $outleft;
      
      
      
      
      
      
      if (HEAP[$state_addr + 2] == 65) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 2] >= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      var $19 = HEAP[HEAP[$inbuf_addr] + 2] + 128;
      var $20 = HEAP[$outbuf_addr];
      HEAP[$20] = $19;
      __label__ = 27;
      break;
     case 3:
      $0 = 3;
      __label__ = 28;
      break;
     case 4:
      
      
      
      
      
      
      if (HEAP[$state_addr + 2] == 70) {
        __label__ = 5;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 5:
      
      
      
      
      var $31 = HEAP[HEAP[$inbuf_addr] + 2] ^ -128;
      
      if ($31 <= 159) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $34 = HEAP[$outbuf_addr];
      
      
      
      
      var $39 = HEAP[HEAP[$inbuf_addr] + 2] ^ -128;
      var $40 = $39;
      HEAP[$34] = $40;
      __label__ = 27;
      break;
     case 7:
      
      
      
      
      var $45 = HEAP[HEAP[$inbuf_addr] + 2] ^ -128;
      
      if ($45 > 191) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      var $51 = HEAP[HEAP[$inbuf_addr] + 2] ^ -128;
      
      
      
      
      
      
      
      
      
      if (((680475593 >> $51 - 160 & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      var $58 = HEAP[$outbuf_addr];
      
      
      
      
      var $63 = HEAP[HEAP[$inbuf_addr] + 2] ^ -128;
      var $64 = $63;
      HEAP[$58] = $64;
      __label__ = 27;
      break;
     case 10:
      
      
      
      
      var $69 = HEAP[HEAP[$inbuf_addr] + 2] ^ -128;
      
      if ($69 <= 179) {
        __label__ = 15;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 2] == 127) {
        __label__ = 15;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      var $80 = HEAP[HEAP[$inbuf_addr] + 2] ^ -128;
      
      if ($80 > 211) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      var $86 = HEAP[HEAP[$inbuf_addr] + 2] ^ -128;
      
      
      
      var $90 = 1 << $86 - 180 & -1073742473;
      
      if ($90 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      var $93 = HEAP[$outbuf_addr];
      
      
      
      
      var $98 = HEAP[HEAP[$inbuf_addr] + 2] ^ -128;
      
      var $100 = $98 + 720;
      HEAP[$93] = $100;
      __label__ = 27;
      break;
     case 15:
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 2] == 33) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      var $107 = HEAP[$outbuf_addr];
      HEAP[$107] = 8216;
      __label__ = 27;
      break;
     case 17:
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 2] == 34) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      var $114 = HEAP[$outbuf_addr];
      HEAP[$114] = 8217;
      __label__ = 27;
      break;
     case 19:
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 2] == 47) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      var $121 = HEAP[$outbuf_addr];
      HEAP[$121] = 8213;
      __label__ = 27;
      break;
     case 21:
      $0 = 3;
      __label__ = 28;
      break;
     case 22:
      
      
      
      
      
      
      if (HEAP[$state_addr + 2] == 66) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 23:
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 2] < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      $0 = 3;
      __label__ = 28;
      break;
     case 25:
      
      var $134 = HEAP[$outbuf_addr];
      
      
      
      
      var $139 = HEAP[HEAP[$inbuf_addr] + 2];
      HEAP[$134] = $139;
      __label__ = 27;
      break;
     case 26:
      $0 = -3;
      __label__ = 28;
      break;
     case 27:
      
      
      var $142 = HEAP[$inbuf_addr] + 3;
      
      HEAP[$inbuf_addr] = $142;
      
      
      var $146 = HEAP[$inleft_addr] - 3;
      
      HEAP[$inleft_addr] = $146;
      
      
      var $150 = HEAP[$outbuf_addr] + 2;
      
      HEAP[$outbuf_addr] = $150;
      
      
      var $154 = HEAP[$outleft_addr] - 1;
      
      HEAP[$outleft_addr] = $154;
      $0 = 0;
      __label__ = 28;
      break;
     case 28:
      
      $retval = $0;
      var $retval32 = $retval;
      return $retval32;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _iso2022_decode($state, $config, $inbuf, $inleft, $outbuf, $outleft) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $config_addr;
      var $inbuf_addr;
      var $inleft_addr = __stackBase__;
      var $outbuf_addr;
      var $outleft_addr = __stackBase__ + 4;
      var $retval;
      var $0;
      var $dsgcache;
      var $c;
      var $err;
      var $dsg;
      var $charset;
      var $decoded;
      $state_addr = $state;
      $config_addr = $config;
      $inbuf_addr = $inbuf;
      HEAP[$inleft_addr] = $inleft;
      $outbuf_addr = $outbuf;
      HEAP[$outleft_addr] = $outleft;
      $dsgcache = 0;
      __lastLabel__ = -1;
      __label__ = 67;
      break;
     case 1:
      
      
      
      
      $c = HEAP[HEAP[$inbuf_addr]];
      
      
      
      
      
      
      
      
      if ((HEAP[$state_addr + 4] & 2) != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      
      
      if (HEAP[$outleft_addr] <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 69;
      break;
     case 4:
      
      
      
      
      var $19 = HEAP[$outbuf_addr];
      HEAP[$19] = $c;
      
      
      var $22 = HEAP[$inbuf_addr] + 1;
      
      HEAP[$inbuf_addr] = $22;
      
      var $25 = HEAP[$inleft_addr] - 1;
      HEAP[$inleft_addr] = $25;
      
      
      var $28 = HEAP[$outbuf_addr] + 2;
      
      HEAP[$outbuf_addr] = $28;
      
      var $31 = HEAP[$outleft_addr] - 1;
      HEAP[$outleft_addr] = $31;
      
      
      
      
      
      
      
      
      if ($c > 64 & $c <= 90 | $c == 64) {
        __label__ = 5;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 5:
      
      
      
      
      
      var $43 = HEAP[$state_addr + 4] & -3;
      
      
      
      
      HEAP[$state_addr + 4] = $43;
      __label__ = 66;
      break;
     case 6:
      
      var $49 = $c;
      if ($49 == 10) {
        __label__ = 29;
        break;
      } else if ($49 == 14) {
        __label__ = 27;
        break;
      } else if ($49 == 15) {
        __label__ = 25;
        break;
      } else if ($49 == 27) {
        __label__ = 7;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 7:
      
      
      if (HEAP[$inleft_addr] <= 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = -2;
      __label__ = 69;
      break;
     case 9:
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 1] == 40) {
        __label__ = 14;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 1] == 41) {
        __label__ = 14;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 1] == 36) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 1] == 46) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 1] == 38) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      var $80 = _iso2022processesc($config_addr, $state_addr, $inbuf_addr, $inleft_addr);
      $err = $80;
      
      if ($80 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 15:
      
      $0 = $err;
      __label__ = 69;
      break;
     case 16:
      
      
      
      
      
      
      if ((HEAP[$config_addr] & 2) == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 1] != 78) {
        __label__ = 22;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      if (HEAP[$inleft_addr] <= 2) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      $0 = -2;
      __label__ = 69;
      break;
     case 20:
      
      
      
      
      var $100 = _iso2022processg2($config_addr, $state_addr, $inbuf_addr, $inleft_addr, $outbuf_addr, $outleft_addr);
      $err = $100;
      
      
      if ($err != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 21:
      
      $0 = $err;
      __label__ = 69;
      break;
     case 22:
      
      
      if (HEAP[$outleft_addr] <= 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      $0 = -1;
      __label__ = 69;
      break;
     case 24:
      
      
      var $108 = HEAP[$outbuf_addr];
      HEAP[$108] = 27;
      
      
      
      
      
      var $114 = HEAP[$state_addr + 4] | 2;
      
      
      
      
      HEAP[$state_addr + 4] = $114;
      
      
      var $121 = HEAP[$inbuf_addr] + 1;
      
      HEAP[$inbuf_addr] = $121;
      
      var $124 = HEAP[$inleft_addr] - 1;
      HEAP[$inleft_addr] = $124;
      
      
      var $127 = HEAP[$outbuf_addr] + 2;
      
      HEAP[$outbuf_addr] = $127;
      
      var $130 = HEAP[$outleft_addr] - 1;
      HEAP[$outleft_addr] = $130;
      __label__ = 66;
      break;
     case 25:
      
      
      
      
      
      
      
      if ((HEAP[$config_addr] & 1 & 255) != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      
      var $142 = HEAP[$state_addr + 4] & -2;
      
      
      
      
      HEAP[$state_addr + 4] = $142;
      
      
      var $149 = HEAP[$inbuf_addr] + 1;
      
      HEAP[$inbuf_addr] = $149;
      
      var $152 = HEAP[$inleft_addr] - 1;
      HEAP[$inleft_addr] = $152;
      __lastLabel__ = 26;
      __label__ = 67;
      break;
     case 27:
      
      
      
      
      
      
      
      if ((HEAP[$config_addr] & 1 & 255) != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      
      
      var $164 = HEAP[$state_addr + 4] | 1;
      
      
      
      
      HEAP[$state_addr + 4] = $164;
      
      
      var $171 = HEAP[$inbuf_addr] + 1;
      
      HEAP[$inbuf_addr] = $171;
      
      var $174 = HEAP[$inleft_addr] - 1;
      HEAP[$inleft_addr] = $174;
      __lastLabel__ = 28;
      __label__ = 67;
      break;
     case 29:
      
      
      
      
      
      var $180 = HEAP[$state_addr + 4] & -2;
      
      
      
      
      HEAP[$state_addr + 4] = $180;
      
      
      if (HEAP[$outleft_addr] <= 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      $0 = -1;
      __label__ = 69;
      break;
     case 31:
      
      
      var $189 = HEAP[$outbuf_addr];
      HEAP[$189] = 10;
      
      
      var $192 = HEAP[$inbuf_addr] + 1;
      
      HEAP[$inbuf_addr] = $192;
      
      var $195 = HEAP[$inleft_addr] - 1;
      HEAP[$inleft_addr] = $195;
      
      
      var $198 = HEAP[$outbuf_addr] + 2;
      
      HEAP[$outbuf_addr] = $198;
      
      var $201 = HEAP[$outleft_addr] - 1;
      HEAP[$outleft_addr] = $201;
      __label__ = 66;
      break;
     case 32:
      
      
      if ($c <= 31) {
        __label__ = 39;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      if ($c < 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      $0 = 1;
      __label__ = 69;
      break;
     case 35:
      
      
      
      
      
      
      
      
      
      
      
      var $216 = $state_addr;
      if ((HEAP[$state_addr + 4] & 1 & 255) != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      var $218 = HEAP[$216 + 1];
      $charset = $218;
      __lastLabel__ = 36;
      __label__ = 38;
      break;
     case 37:
      
      var $220 = HEAP[$216];
      $charset = $220;
      __lastLabel__ = 37;
      __label__ = 38;
      break;
     case 38:
      var $221 = __lastLabel__ == 37 ? $220 : $218;
      
      if ($221 == 66) {
        __label__ = 39;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 39:
      
      
      if (HEAP[$outleft_addr] <= 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      $0 = -1;
      __label__ = 69;
      break;
     case 41:
      
      
      
      
      var $229 = HEAP[$outbuf_addr];
      HEAP[$229] = $c;
      
      
      var $232 = HEAP[$inbuf_addr] + 1;
      
      HEAP[$inbuf_addr] = $232;
      
      var $235 = HEAP[$inleft_addr] - 1;
      HEAP[$inleft_addr] = $235;
      
      
      var $238 = HEAP[$outbuf_addr] + 2;
      
      HEAP[$outbuf_addr] = $238;
      
      var $241 = HEAP[$outleft_addr] - 1;
      HEAP[$outleft_addr] = $241;
      __label__ = 66;
      break;
     case 42:
      
      
      
      if ($dsgcache == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      
      
      
      
      
      if (HEAP[$dsgcache] != $charset) {
        __label__ = 45;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      
      $dsg = $dsgcache;
      __label__ = 50;
      break;
     case 45:
      
      
      
      
      $dsg = HEAP[$config_addr + 4];
      
      
      
      
      
      var $260 = $dsg;
      if (HEAP[$dsg] != $charset) {
        __lastLabel__ = 45;
        __label__ = 46;
        break;
      } else {
        __lastLabel__ = 45;
        __label__ = 47;
        break;
      }
     case 46:
      var $261 = __lastLabel__ == 46 ? $268 : $260;
      var $262 = $261 + 16;
      $dsg = $262;
      
      
      
      
      
      var $268 = $dsg;
      if (HEAP[$dsg] != $charset) {
        __lastLabel__ = 46;
        __label__ = 46;
        break;
      } else {
        __lastLabel__ = 46;
        __label__ = 47;
        break;
      }
     case 47:
      var $_lcssa = __lastLabel__ == 45 ? $260 : $268;
      
      
      
      if (HEAP[$_lcssa] == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      ___assert_fail(__str11, __str10, 511, ___PRETTY_FUNCTION___9242);
      throw "Reached an unreachable!";
     case 49:
      
      $dsgcache = $dsg;
      __label__ = 50;
      break;
     case 50:
      
      
      
      
      
      
      if (HEAP[$dsg + 2] > HEAP[$inleft_addr]) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      $0 = -2;
      __label__ = 69;
      break;
     case 52:
      
      
      var $281 = HEAP[$dsg + 8];
      
      var $283 = HEAP[$inbuf_addr];
      var $284 = FUNCTION_TABLE[$281]($283);
      $decoded = $284;
      
      
      if ($decoded == 65535) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      
      
      
      
      $0 = HEAP[$dsg + 2];
      __label__ = 69;
      break;
     case 54:
      
      
      if ($decoded <= 65535) {
        __label__ = 55;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 55:
      
      
      if (HEAP[$outleft_addr] <= 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      $0 = -1;
      __label__ = 69;
      break;
     case 57:
      
      
      
      
      var $299 = HEAP[$outbuf_addr];
      HEAP[$299] = $decoded & 65535;
      
      
      var $302 = HEAP[$outbuf_addr] + 2;
      
      HEAP[$outbuf_addr] = $302;
      
      var $305 = HEAP[$outleft_addr] - 1;
      HEAP[$outleft_addr] = $305;
      __label__ = 65;
      break;
     case 58:
      
      
      
      var $309 = HEAP[$outleft_addr] <= 1;
      if ($decoded <= 196607) {
        __label__ = 59;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 59:
      if ($309) {
        __label__ = 60;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 60:
      $0 = -1;
      __label__ = 69;
      break;
     case 61:
      
      
      
      
      
      
      var $316 = ($decoded - 65536 >>> 10 & 65535) + -10240;
      var $317 = HEAP[$outbuf_addr];
      HEAP[$317] = $316;
      
      
      
      
      
      var $323 = ($decoded & 65535 & 1023) + -9216;
      var $324 = HEAP[$outbuf_addr] + 2;
      HEAP[$324] = $323;
      
      
      var $327 = HEAP[$outbuf_addr] + 4;
      
      HEAP[$outbuf_addr] = $327;
      
      var $330 = HEAP[$outleft_addr] - 2;
      HEAP[$outleft_addr] = $330;
      __label__ = 65;
      break;
     case 62:
      if ($309) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      $0 = -1;
      __label__ = 69;
      break;
     case 64:
      
      
      
      
      
      var $336 = HEAP[$outbuf_addr];
      HEAP[$336] = $decoded >>> 16 & 65535;
      
      
      
      
      var $341 = HEAP[$outbuf_addr] + 2;
      HEAP[$341] = $decoded & 65535;
      
      
      var $344 = HEAP[$outbuf_addr] + 4;
      
      HEAP[$outbuf_addr] = $344;
      
      var $347 = HEAP[$outleft_addr] - 2;
      HEAP[$outleft_addr] = $347;
      __label__ = 65;
      break;
     case 65:
      
      
      
      
      
      
      var $354 = HEAP[$inbuf_addr] + HEAP[$dsg + 2];
      
      HEAP[$inbuf_addr] = $354;
      
      
      
      
      
      var $361 = HEAP[$inleft_addr] - HEAP[$dsg + 2];
      HEAP[$inleft_addr] = $361;
      __lastLabel__ = 65;
      __label__ = 67;
      break;
     case 66:
      var $_pr = HEAP[$inleft_addr];
      __lastLabel__ = 66;
      __label__ = 67;
      break;
     case 67:
      var $362 = __lastLabel__ == -1 ? $inleft : __lastLabel__ == 66 ? $_pr : __lastLabel__ == 65 ? $361 : __lastLabel__ == 28 ? $174 : $152;
      
      if ($362 > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 68:
      $0 = 0;
      __label__ = 69;
      break;
     case 69:
      
      $retval = $0;
      var $retval76 = $retval;
      STACKTOP = __stackBase__;
      return $retval76;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ksx1001_init() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval;
      var $0;
      
      
      
      if (HEAP[_initialized_9477_b] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $3 = _importmap(__str12, __str13, _cp949_encmap, 0);
      
      if ($3 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $5 = _importmap(__str12, __str14, 0, _ksx1001_decmap);
      
      if ($5 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 5;
      break;
     case 4:
      HEAP[_initialized_9477_b] = 1;
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
  function _ksx1001_decoder($data) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $retval;
      var $0;
      var $u;
      $data_addr = $data;
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_ksx1001_decmap] + 8 * HEAP[$data_addr]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] < HEAP[HEAP[_ksx1001_decmap] + 8 * HEAP[$data_addr] + 4]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] > HEAP[HEAP[_ksx1001_decmap] + 8 * HEAP[$data_addr] + 5]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $u = HEAP[HEAP[HEAP[_ksx1001_decmap] + 8 * HEAP[$data_addr]] + 2 * (HEAP[$data_addr + 1] - HEAP[HEAP[_ksx1001_decmap] + 8 * HEAP[$data_addr] + 4])];
      
      
      if ($u == 65534) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      $0 = $u;
      __label__ = 6;
      break;
     case 5:
      $0 = 65535;
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
  function _ksx1001_encoder($data, $length) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $length_addr;
      var $retval;
      var $0;
      var $coded;
      $data_addr = $data;
      $length_addr = $length;
      
      
      
      if (HEAP[$length_addr] != 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str15, __str10, 594, ___PRETTY_FUNCTION___9539);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      if (HEAP[$data_addr] <= 65535) {
        __label__ = 3;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_cp949_encmap] + 8 * (HEAP[$data_addr] >>> 8)] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[$data_addr] & 255) >= HEAP[HEAP[_cp949_encmap] + 8 * (HEAP[$data_addr] >>> 8) + 4]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[$data_addr] & 255) <= HEAP[HEAP[_cp949_encmap] + 8 * (HEAP[$data_addr] >>> 8) + 5]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $coded = HEAP[HEAP[HEAP[_cp949_encmap] + 8 * (HEAP[$data_addr] >>> 8)] + 2 * ((HEAP[$data_addr] & 255) - HEAP[HEAP[_cp949_encmap] + 8 * (HEAP[$data_addr] >>> 8) + 4])];
      
      var $62 = $coded != -1;
      
      
      
      if ($62 & $coded >= 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      $0 = $coded;
      __label__ = 9;
      break;
     case 8:
      $0 = 65535;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      
      var $retval1011 = $retval & 65535;
      return $retval1011;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0208_init() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval;
      var $0;
      
      
      
      if (HEAP[_initialized_9598_b] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $3 = _importmap(__str16, __str17, _jisxcommon_encmap, 0);
      
      if ($3 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $5 = _importmap(__str16, __str18, 0, _jisx0208_decmap);
      
      if ($5 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 5;
      break;
     case 4:
      HEAP[_initialized_9598_b] = 1;
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
  function _jisx0208_decoder($data) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $retval;
      var $0;
      var $u;
      $data_addr = $data;
      
      
      
      
      if (HEAP[$data_addr] != 33) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$data_addr + 1] != 64) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      $0 = 65340;
      __label__ = 9;
      break;
     case 3:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[$data_addr]] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] < HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[$data_addr] + 4]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] > HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[$data_addr] + 5]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $u = HEAP[HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[$data_addr]] + 2 * (HEAP[$data_addr + 1] - HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[$data_addr] + 4])];
      
      
      if ($u == 65534) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      $0 = $u;
      __label__ = 9;
      break;
     case 8:
      $0 = 65535;
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
  function _jisx0208_encoder($data, $length) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $length_addr;
      var $retval;
      var $0;
      var $coded;
      $data_addr = $data;
      $length_addr = $length;
      
      
      
      if (HEAP[$length_addr] != 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str15, __str10, 632, ___PRETTY_FUNCTION___9665);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      if (HEAP[$data_addr] <= 65535) {
        __label__ = 3;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 3:
      
      
      
      if (HEAP[$data_addr] == 65340) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 8512;
      __label__ = 11;
      break;
     case 5:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8)] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[$data_addr] & 255) >= HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8) + 4]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[$data_addr] & 255) <= HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8) + 5]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $coded = HEAP[HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8)] + 2 * ((HEAP[$data_addr] & 255) - HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8) + 4])];
      
      var $65 = $coded != -1;
      
      
      
      if ($65 & $coded >= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      $0 = $coded;
      __label__ = 11;
      break;
     case 10:
      $0 = 65535;
      __label__ = 11;
      break;
     case 11:
      
      $retval = $0;
      
      var $retval1213 = $retval & 65535;
      return $retval1213;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0212_init() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval;
      var $0;
      
      
      
      if (HEAP[_initialized_9727_b] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $3 = _importmap(__str16, __str17, _jisxcommon_encmap, 0);
      
      if ($3 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $5 = _importmap(__str16, __str19, 0, _jisx0212_decmap);
      
      if ($5 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 5;
      break;
     case 4:
      HEAP[_initialized_9727_b] = 1;
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
  function _jisx0212_decoder($data) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $retval;
      var $0;
      var $u;
      $data_addr = $data;
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0212_decmap] + 8 * HEAP[$data_addr]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] < HEAP[HEAP[_jisx0212_decmap] + 8 * HEAP[$data_addr] + 4]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] > HEAP[HEAP[_jisx0212_decmap] + 8 * HEAP[$data_addr] + 5]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $u = HEAP[HEAP[HEAP[_jisx0212_decmap] + 8 * HEAP[$data_addr]] + 2 * (HEAP[$data_addr + 1] - HEAP[HEAP[_jisx0212_decmap] + 8 * HEAP[$data_addr] + 4])];
      
      
      if ($u == 65534) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      $0 = $u;
      __label__ = 6;
      break;
     case 5:
      $0 = 65535;
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
  function _jisx0212_encoder($data, $length) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $length_addr;
      var $retval;
      var $0;
      var $coded;
      $data_addr = $data;
      $length_addr = $length;
      
      
      
      if (HEAP[$length_addr] != 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str15, __str10, 671, ___PRETTY_FUNCTION___9789);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      if (HEAP[$data_addr] <= 65535) {
        __label__ = 3;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8)] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[$data_addr] & 255) >= HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8) + 4]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[$data_addr] & 255) <= HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8) + 5]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $coded = HEAP[HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8)] + 2 * ((HEAP[$data_addr] & 255) - HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8) + 4])];
      
      var $62 = $coded != -1;
      
      
      
      if ($62 & $coded < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      $0 = $coded & 32767;
      __label__ = 9;
      break;
     case 8:
      $0 = 65535;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      
      var $retval1011 = $retval & 65535;
      return $retval1011;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0213_init() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval;
      var $0;
      
      
      
      if (HEAP[_initialized_9849_b] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      var $3 = _jisx0208_init();
      
      if ($3 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $5 = _importmap(__str16, __str20, _jisx0213_bmp_encmap, 0);
      
      if ($5 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $7 = _importmap(__str16, __str21, 0, _jisx0213_1_bmp_decmap);
      
      if ($7 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $9 = _importmap(__str16, __str22, 0, _jisx0213_2_bmp_decmap);
      
      if ($9 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $11 = _importmap(__str16, __str23, _jisx0213_emp_encmap, 0);
      
      if ($11 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $13 = _importmap(__str16, __str24, 0, _jisx0213_1_emp_decmap);
      
      if ($13 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $15 = _importmap(__str16, __str25, 0, _jisx0213_2_emp_decmap);
      
      if ($15 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $17 = _importmap(__str16, __str26, _jisx0213_pair_encmap, _jisx0213_pair_decmap);
      
      if ($17 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = -1;
      __label__ = 11;
      break;
     case 10:
      HEAP[_initialized_9849_b] = 1;
      $0 = 0;
      __label__ = 11;
      break;
     case 11:
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0213_2000_1_decoder($data) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $retval;
      var $0;
      var $u;
      $data_addr = $data;
      
      
      
      
      if (HEAP[$data_addr] != 46) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$data_addr + 1] == 33) {
        __label__ = 20;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$data_addr] != 47) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      if (HEAP[$data_addr + 1] == 126) {
        __label__ = 20;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[$data_addr] != 79) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[$data_addr + 1] == 84) {
        __label__ = 20;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      if (HEAP[$data_addr] != 79) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[$data_addr + 1] == 126) {
        __label__ = 20;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[$data_addr] != 116) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[$data_addr + 1] == 39) {
        __label__ = 20;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      if (HEAP[$data_addr] != 126) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      if (HEAP[$data_addr + 1] == 122) {
        __label__ = 20;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      if (HEAP[$data_addr] != 126) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      if (HEAP[$data_addr + 1] == 123) {
        __label__ = 20;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      if (HEAP[$data_addr] != 126) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      if (HEAP[$data_addr + 1] == 124) {
        __label__ = 20;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      if (HEAP[$data_addr] != 126) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      if (HEAP[$data_addr + 1] == 125) {
        __label__ = 20;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      if (HEAP[$data_addr] != 126) {
        __label__ = 21;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      if (HEAP[$data_addr + 1] == 126) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      $0 = 65535;
      __label__ = 43;
      break;
     case 21:
      
      
      
      
      if (HEAP[$data_addr] != 33) {
        __label__ = 24;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      if (HEAP[$data_addr + 1] != 64) {
        __label__ = 24;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      $0 = 65340;
      __label__ = 43;
      break;
     case 24:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[$data_addr]] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] < HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[$data_addr] + 4]) {
        __label__ = 28;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] > HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[$data_addr] + 5]) {
        __label__ = 28;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $u = HEAP[HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[$data_addr]] + 2 * (HEAP[$data_addr + 1] - HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[$data_addr] + 4])];
      
      
      if ($u == 65534) {
        __label__ = 28;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 28:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[$data_addr]] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] < HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[$data_addr] + 4]) {
        __label__ = 32;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] > HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[$data_addr] + 5]) {
        __label__ = 32;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $u = HEAP[HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[$data_addr]] + 2 * (HEAP[$data_addr + 1] - HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[$data_addr] + 4])];
      
      
      if ($u == 65534) {
        __label__ = 32;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 32:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[$data_addr]] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] < HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[$data_addr] + 4]) {
        __label__ = 37;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] > HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[$data_addr] + 5]) {
        __label__ = 37;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $u = HEAP[HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[$data_addr]] + 2 * (HEAP[$data_addr + 1] - HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[$data_addr] + 4])];
      
      
      if ($u == 65534) {
        __label__ = 37;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      var $273 = $u | 131072;
      $u = $273;
      __label__ = 42;
      break;
     case 37:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[$data_addr]] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] < HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[$data_addr] + 4]) {
        __label__ = 41;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] > HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[$data_addr] + 5]) {
        __label__ = 41;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $u = HEAP[HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[$data_addr]] + 4 * (HEAP[$data_addr + 1] - HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[$data_addr] + 4])];
      
      
      if ($u == 65534) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      $0 = 65535;
      __label__ = 43;
      break;
     case 42:
      
      $0 = $u;
      __label__ = 43;
      break;
     case 43:
      
      $retval = $0;
      var $retval46 = $retval;
      return $retval46;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0213_2000_2_decoder($data) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $retval;
      var $0;
      var $u;
      $data_addr = $data;
      
      
      
      
      if (HEAP[$data_addr] == 125) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$data_addr + 1] == 59) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $u = 39709;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[$data_addr]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] < HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[$data_addr] + 4]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] > HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[$data_addr] + 5]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $u = HEAP[HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[$data_addr]] + 2 * (HEAP[$data_addr + 1] - HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[$data_addr] + 4])];
      
      
      if ($u == 65534) {
        __label__ = 7;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[$data_addr]] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] < HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[$data_addr] + 4]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] > HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[$data_addr] + 5]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $u = HEAP[HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[$data_addr]] + 2 * (HEAP[$data_addr + 1] - HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[$data_addr] + 4])];
      
      
      if ($u == 65534) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $132 = $u | 131072;
      $u = $132;
      __label__ = 13;
      break;
     case 12:
      $0 = 65535;
      __label__ = 14;
      break;
     case 13:
      
      $0 = $u;
      __label__ = 14;
      break;
     case 14:
      
      $retval = $0;
      var $retval15 = $retval;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0213_2004_1_decoder($data) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $retval;
      var $0;
      var $u;
      $data_addr = $data;
      
      
      
      
      if (HEAP[$data_addr] != 33) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$data_addr + 1] != 64) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      $0 = 65340;
      __label__ = 22;
      break;
     case 3:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[$data_addr]] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] < HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[$data_addr] + 4]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] > HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[$data_addr] + 5]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $u = HEAP[HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[$data_addr]] + 2 * (HEAP[$data_addr + 1] - HEAP[HEAP[_jisx0208_decmap] + 8 * HEAP[$data_addr] + 4])];
      
      
      if ($u == 65534) {
        __label__ = 7;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[$data_addr]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] < HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[$data_addr] + 4]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] > HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[$data_addr] + 5]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $u = HEAP[HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[$data_addr]] + 2 * (HEAP[$data_addr + 1] - HEAP[HEAP[_jisx0213_1_bmp_decmap] + 8 * HEAP[$data_addr] + 4])];
      
      
      if ($u == 65534) {
        __label__ = 11;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 11:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[$data_addr]] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] < HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[$data_addr] + 4]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] > HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[$data_addr] + 5]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $u = HEAP[HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[$data_addr]] + 2 * (HEAP[$data_addr + 1] - HEAP[HEAP[_jisx0213_1_emp_decmap] + 8 * HEAP[$data_addr] + 4])];
      
      
      if ($u == 65534) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      var $193 = $u | 131072;
      $u = $193;
      __label__ = 21;
      break;
     case 16:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[$data_addr]] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] < HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[$data_addr] + 4]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] > HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[$data_addr] + 5]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $u = HEAP[HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[$data_addr]] + 4 * (HEAP[$data_addr + 1] - HEAP[HEAP[_jisx0213_pair_decmap] + 8 * HEAP[$data_addr] + 4])];
      
      
      if ($u == 65534) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      $0 = 65535;
      __label__ = 22;
      break;
     case 21:
      
      $0 = $u;
      __label__ = 22;
      break;
     case 22:
      
      $retval = $0;
      var $retval25 = $retval;
      return $retval25;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0213_2004_2_decoder($data) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $retval;
      var $0;
      var $u;
      $data_addr = $data;
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[$data_addr]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] < HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[$data_addr] + 4]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] > HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[$data_addr] + 5]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $u = HEAP[HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[$data_addr]] + 2 * (HEAP[$data_addr + 1] - HEAP[HEAP[_jisx0213_2_bmp_decmap] + 8 * HEAP[$data_addr] + 4])];
      
      
      if ($u == 65534) {
        __label__ = 4;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[$data_addr]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] < HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[$data_addr] + 4]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] > HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[$data_addr] + 5]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $u = HEAP[HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[$data_addr]] + 2 * (HEAP[$data_addr + 1] - HEAP[HEAP[_jisx0213_2_emp_decmap] + 8 * HEAP[$data_addr] + 4])];
      
      
      if ($u == 65534) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      var $124 = $u | 131072;
      $u = $124;
      __label__ = 10;
      break;
     case 9:
      $0 = 65535;
      __label__ = 11;
      break;
     case 10:
      
      $0 = $u;
      __label__ = 11;
      break;
     case 11:
      
      $retval = $0;
      var $retval12 = $retval;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0213_encoder($data, $length, $config) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $length_addr;
      var $config_addr;
      var $retval;
      var $0;
      var $coded;
      $data_addr = $data;
      $length_addr = $length;
      $config_addr = $config;
      
      var $2 = HEAP[$length_addr];
      if ($2 == -1) {
        __label__ = 45;
        break;
      } else if ($2 == 1) {
        __label__ = 1;
        break;
      } else if ($2 == 2) {
        __label__ = 41;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 1:
      
      
      
      if (HEAP[$data_addr] > 65535) {
        __label__ = 2;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$data_addr] >>> 16 == 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 3:
      
      
      if ($config_addr != 2e3) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      if (HEAP[$data_addr] != 134047) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      $0 = 65535;
      __label__ = 49;
      break;
     case 6:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_emp_encmap] + 8 * ((HEAP[$data_addr] & 65535) >>> 8)] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[$data_addr] & 255) >= HEAP[HEAP[_jisx0213_emp_encmap] + 8 * ((HEAP[$data_addr] & 65535) >>> 8) + 4]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[$data_addr] & 255) <= HEAP[HEAP[_jisx0213_emp_encmap] + 8 * ((HEAP[$data_addr] & 65535) >>> 8) + 5]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $coded = HEAP[HEAP[HEAP[_jisx0213_emp_encmap] + 8 * ((HEAP[$data_addr] & 65535) >>> 8)] + 2 * ((HEAP[$data_addr] & 255) - HEAP[HEAP[_jisx0213_emp_encmap] + 8 * ((HEAP[$data_addr] & 65535) >>> 8) + 4])];
      
      var $75 = $coded != -1;
      if ($75) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      $0 = $coded;
      __label__ = 49;
      break;
     case 11:
      $0 = 65535;
      __label__ = 49;
      break;
     case 12:
      
      
      if ($config_addr != 2e3) {
        __label__ = 27;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      if (HEAP[$data_addr] == 39708) {
        __label__ = 23;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      if (HEAP[$data_addr] == 20465) {
        __label__ = 23;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      if (HEAP[$data_addr] == 21085) {
        __label__ = 23;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      if (HEAP[$data_addr] == 21534) {
        __label__ = 23;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      if (HEAP[$data_addr] == 22099) {
        __label__ = 23;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      if (HEAP[$data_addr] == 23032) {
        __label__ = 23;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      if (HEAP[$data_addr] == 23643) {
        __label__ = 23;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      if (HEAP[$data_addr] == 24183) {
        __label__ = 23;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      if (HEAP[$data_addr] == 30246) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      if (HEAP[$data_addr] == 32363) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      $0 = 65535;
      __label__ = 49;
      break;
     case 24:
      
      
      if ($config_addr != 2e3) {
        __label__ = 27;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      if (HEAP[$data_addr] != 39709) {
        __label__ = 27;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      $coded = -709;
      __label__ = 40;
      break;
     case 27:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisx0213_bmp_encmap] + 8 * (HEAP[$data_addr] >>> 8)] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[$data_addr] & 255) < HEAP[HEAP[_jisx0213_bmp_encmap] + 8 * (HEAP[$data_addr] >>> 8) + 4]) {
        __label__ = 33;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[$data_addr] & 255) > HEAP[HEAP[_jisx0213_bmp_encmap] + 8 * (HEAP[$data_addr] >>> 8) + 5]) {
        __label__ = 33;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $coded = HEAP[HEAP[HEAP[_jisx0213_bmp_encmap] + 8 * (HEAP[$data_addr] >>> 8)] + 2 * ((HEAP[$data_addr] & 255) - HEAP[HEAP[_jisx0213_bmp_encmap] + 8 * (HEAP[$data_addr] >>> 8) + 4])];
      
      var $169 = $coded == -1;
      if ($169) {
        __label__ = 33;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      var $171 = $coded == -2;
      if ($171) {
        __label__ = 32;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 32:
      $0 = 65534;
      __label__ = 49;
      break;
     case 33:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8)] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[$data_addr] & 255) < HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8) + 4]) {
        __label__ = 39;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[$data_addr] & 255) > HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8) + 5]) {
        __label__ = 39;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $coded = HEAP[HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8)] + 2 * ((HEAP[$data_addr] & 255) - HEAP[HEAP[_jisxcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8) + 4])];
      
      var $227 = $coded == -1;
      if ($227) {
        __label__ = 39;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      if ($coded < 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 38:
      $0 = 65535;
      __label__ = 49;
      break;
     case 39:
      $0 = 65535;
      __label__ = 49;
      break;
     case 40:
      
      
      $0 = $coded;
      __label__ = 49;
      break;
     case 41:
      var $232 = HEAP[_jisx0213_pair_encmap];
      
      
      
      
      
      
      
      
      
      
      var $243 = HEAP[$data_addr] & 65535 & 65535;
      var $244 = HEAP[$data_addr + 4] & 65535 & 65535;
      var $245 = _find_pairencmap($243, $244, $232);
      $coded = $245;
      
      var $247 = $coded == -3;
      if ($247) {
        __label__ = 42;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 42:
      
      HEAP[$length_addr] = 1;
      var $249 = HEAP[_jisx0213_pair_encmap];
      
      
      
      
      
      var $255 = HEAP[$data_addr] & 65535 & 65535;
      var $256 = _find_pairencmap($255, 0, $249);
      $coded = $256;
      
      var $258 = $coded == -3;
      if ($258) {
        __label__ = 43;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 43:
      $0 = 65535;
      __label__ = 49;
      break;
     case 44:
      
      
      $0 = $coded;
      __label__ = 49;
      break;
     case 45:
      
      HEAP[$length_addr] = 1;
      var $262 = HEAP[_jisx0213_pair_encmap];
      
      
      
      
      
      var $268 = HEAP[$data_addr] & 65535 & 65535;
      var $269 = _find_pairencmap($268, 0, $262);
      $coded = $269;
      var $270 = $269 == -3;
      if ($270) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      $0 = 65535;
      __label__ = 49;
      break;
     case 47:
      
      
      $0 = $coded;
      __label__ = 49;
      break;
     case 48:
      $0 = 65535;
      __label__ = 49;
      break;
     case 49:
      
      $retval = $0;
      
      var $retval5253 = $retval & 65535;
      return $retval5253;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0213_2000_1_encoder($data, $length) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $length_addr;
      var $retval;
      var $0;
      var $coded;
      $data_addr = $data;
      $length_addr = $length;
      
      
      var $3 = _jisx0213_encoder($data_addr, $length_addr, 2e3);
      $coded = $3;
      
      var $5 = $coded == -1;
      
      var $7 = $coded == -2;
      
      var $8 = $coded;
      if ($5 | $7) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $0 = $8;
      __label__ = 5;
      break;
     case 2:
      
      if ($8 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 65535;
      __label__ = 5;
      break;
     case 4:
      
      
      $0 = $coded;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      
      var $retval67 = $retval & 65535;
      return $retval67;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0213_2000_1_encoder_paironly($data, $length) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $length_addr;
      var $retval;
      var $0;
      var $coded;
      var $ilength;
      $data_addr = $data;
      $length_addr = $length;
      
      
      $ilength = HEAP[$length_addr];
      
      
      var $5 = _jisx0213_encoder($data_addr, $length_addr, 2e3);
      $coded = $5;
      var $6 = $ilength;
      if ($6 == 1) {
        __label__ = 1;
        break;
      } else if ($6 == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      var $8 = $coded == -2;
      if ($8) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 65534;
      __label__ = 8;
      break;
     case 3:
      $0 = 65535;
      __label__ = 8;
      break;
     case 4:
      
      
      
      if (HEAP[$length_addr] != 2) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 65535;
      __label__ = 8;
      break;
     case 6:
      
      
      $0 = $coded;
      __label__ = 8;
      break;
     case 7:
      $0 = 65535;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      
      var $retval89 = $retval & 65535;
      return $retval89;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0213_2000_2_encoder($data, $length) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $length_addr;
      var $retval;
      var $0;
      var $coded;
      $data_addr = $data;
      $length_addr = $length;
      
      
      var $3 = _jisx0213_encoder($data_addr, $length_addr, 2e3);
      $coded = $3;
      
      var $5 = $coded == -1;
      
      var $7 = $coded == -2;
      
      var $8 = $coded;
      if ($5 | $7) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $0 = $8;
      __label__ = 5;
      break;
     case 2:
      
      if ($8 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      $0 = $coded & 32767;
      __label__ = 5;
      break;
     case 4:
      $0 = 65535;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      
      var $retval67 = $retval & 65535;
      return $retval67;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0213_2004_1_encoder($data, $length) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $length_addr;
      var $retval;
      var $0;
      var $coded;
      $data_addr = $data;
      $length_addr = $length;
      
      
      var $3 = _jisx0213_encoder($data_addr, $length_addr, 0);
      $coded = $3;
      
      var $5 = $coded == -1;
      
      var $7 = $coded == -2;
      
      var $8 = $coded;
      if ($5 | $7) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $0 = $8;
      __label__ = 5;
      break;
     case 2:
      
      if ($8 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 65535;
      __label__ = 5;
      break;
     case 4:
      
      
      $0 = $coded;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      
      var $retval67 = $retval & 65535;
      return $retval67;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0213_2004_1_encoder_paironly($data, $length) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $length_addr;
      var $retval;
      var $0;
      var $coded;
      var $ilength;
      $data_addr = $data;
      $length_addr = $length;
      
      
      $ilength = HEAP[$length_addr];
      
      
      var $5 = _jisx0213_encoder($data_addr, $length_addr, 0);
      $coded = $5;
      var $6 = $ilength;
      if ($6 == 1) {
        __label__ = 1;
        break;
      } else if ($6 == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      var $8 = $coded == -2;
      if ($8) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 65534;
      __label__ = 8;
      break;
     case 3:
      $0 = 65535;
      __label__ = 8;
      break;
     case 4:
      
      
      
      if (HEAP[$length_addr] != 2) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 65535;
      __label__ = 8;
      break;
     case 6:
      
      
      $0 = $coded;
      __label__ = 8;
      break;
     case 7:
      $0 = 65535;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      
      var $retval89 = $retval & 65535;
      return $retval89;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0213_2004_2_encoder($data, $length) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $length_addr;
      var $retval;
      var $0;
      var $coded;
      $data_addr = $data;
      $length_addr = $length;
      
      
      var $3 = _jisx0213_encoder($data_addr, $length_addr, 0);
      $coded = $3;
      
      var $5 = $coded == -1;
      
      var $7 = $coded == -2;
      
      var $8 = $coded;
      if ($5 | $7) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $0 = $8;
      __label__ = 5;
      break;
     case 2:
      
      if ($8 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      $0 = $coded & 32767;
      __label__ = 5;
      break;
     case 4:
      $0 = 65535;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      
      var $retval67 = $retval & 65535;
      return $retval67;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0201_r_decoder($data) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $retval;
      var $0;
      var $u;
      $data_addr = $data;
      
      
      
      
      var $5 = HEAP[$data_addr];
      if (HEAP[$data_addr] <= 91) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $u = $5;
      __label__ = 11;
      break;
     case 2:
      
      if ($5 == 92) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $u = 165;
      __label__ = 11;
      break;
     case 4:
      
      
      
      
      var $12 = HEAP[$data_addr];
      if (HEAP[$data_addr] <= 125) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      $u = $12;
      __label__ = 11;
      break;
     case 6:
      
      if ($12 == 126) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $u = 8254;
      __label__ = 11;
      break;
     case 8:
      
      
      
      if (HEAP[$data_addr] == 127) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $u = 127;
      __label__ = 11;
      break;
     case 10:
      $0 = 65535;
      __label__ = 12;
      break;
     case 11:
      
      $0 = $u;
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
  function _jisx0201_r_encoder($data, $length) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $length_addr;
      var $retval;
      var $0;
      var $coded;
      $data_addr = $data;
      $length_addr = $length;
      
      
      
      if (HEAP[$data_addr] > 127) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      if (HEAP[$data_addr] == 92) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      if (HEAP[$data_addr] == 126) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      $coded = HEAP[$data_addr] & 65535;
      __label__ = 9;
      break;
     case 4:
      
      
      
      if (HEAP[$data_addr] == 165) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $coded = 92;
      __label__ = 9;
      break;
     case 6:
      
      
      
      if (HEAP[$data_addr] == 8254) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $coded = 126;
      __label__ = 9;
      break;
     case 8:
      $0 = 65535;
      __label__ = 10;
      break;
     case 9:
      
      
      $0 = $coded;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      
      var $retval1011 = $retval & 65535;
      return $retval1011;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _jisx0201_k_decoder($data) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $retval;
      var $0;
      var $u;
      $data_addr = $data;
      
      
      var $3 = HEAP[$data_addr] ^ -128;
      
      if ($3 <= 160) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$data_addr] ^ -128;
      
      if ($7 > 223) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $11 = HEAP[$data_addr] ^ -128;
      
      
      $u = $11 + 65216;
      
      $0 = $u;
      __label__ = 4;
      break;
     case 3:
      $0 = 65535;
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
  function _jisx0201_k_encoder($data, $length) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $length_addr;
      var $retval;
      var $0;
      var $coded;
      $data_addr = $data;
      $length_addr = $length;
      
      
      
      if (HEAP[$data_addr] <= 65376) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      if (HEAP[$data_addr] > 65439) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $10 = (HEAP[$data_addr] & 65535) - -320;
      $coded = $10;
      
      
      
      $0 = $coded - 128;
      __label__ = 4;
      break;
     case 3:
      $0 = 65535;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      
      var $retval45 = $retval & 65535;
      return $retval45;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _gb2312_init() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval;
      var $0;
      
      
      
      if (HEAP[_initialized_10822_b] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $3 = _importmap(__str27, __str28, _gbcommon_encmap, 0);
      
      if ($3 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $5 = _importmap(__str27, __str29, 0, _gb2312_decmap);
      
      if ($5 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 5;
      break;
     case 4:
      HEAP[_initialized_10822_b] = 1;
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
  function _gb2312_decoder($data) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $retval;
      var $0;
      var $u;
      $data_addr = $data;
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_gb2312_decmap] + 8 * HEAP[$data_addr]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] < HEAP[HEAP[_gb2312_decmap] + 8 * HEAP[$data_addr] + 4]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$data_addr + 1] > HEAP[HEAP[_gb2312_decmap] + 8 * HEAP[$data_addr] + 5]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $u = HEAP[HEAP[HEAP[_gb2312_decmap] + 8 * HEAP[$data_addr]] + 2 * (HEAP[$data_addr + 1] - HEAP[HEAP[_gb2312_decmap] + 8 * HEAP[$data_addr] + 4])];
      
      
      if ($u == 65534) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      $0 = $u;
      __label__ = 6;
      break;
     case 5:
      $0 = 65535;
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
  function _gb2312_encoder($data, $length) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $data_addr;
      var $length_addr;
      var $retval;
      var $0;
      var $coded;
      $data_addr = $data;
      $length_addr = $length;
      
      
      
      if (HEAP[$length_addr] != 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str15, __str10, 978, ___PRETTY_FUNCTION___10884);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      if (HEAP[$data_addr] <= 65535) {
        __label__ = 3;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[_gbcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8)] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[$data_addr] & 255) >= HEAP[HEAP[_gbcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8) + 4]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[$data_addr] & 255) <= HEAP[HEAP[_gbcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8) + 5]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $coded = HEAP[HEAP[HEAP[_gbcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8)] + 2 * ((HEAP[$data_addr] & 255) - HEAP[HEAP[_gbcommon_encmap] + 8 * (HEAP[$data_addr] >>> 8) + 4])];
      
      var $62 = $coded != -1;
      
      
      
      if ($62 & $coded >= 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      $0 = $coded;
      __label__ = 9;
      break;
     case 8:
      $0 = 65535;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      
      var $retval1011 = $retval & 65535;
      return $retval1011;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dummy_decoder($data) {
    
    var $retval;
    var $0;
    $0 = 65535;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _dummy_encoder($data, $length) {
    
    var $data_addr;
    var $retval;
    var $0;
    $data_addr = $data;
    $0 = 65535;
    
    $retval = $0;
    
    var $retval12 = $retval & 65535;
    return $retval12;
  }
  function _init_codecs_iso2022() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $0 = _Py_InitModule4(__str37, ___methods, 0, 0, 1013);
      $m = $0;
      
      
      if ($m != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      _register_maps($m);
      __label__ = 2;
      break;
     case 2:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_codecs_iso2022"] = _init_codecs_iso2022;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _getcodec, 0, _ksx1001_init, 0, _ksx1001_decoder, 0, _ksx1001_encoder, 0, _jisx0208_init, 0, _jisx0208_decoder, 0, _jisx0208_encoder, 0, _jisx0201_r_decoder, 0, _jisx0201_r_encoder, 0, _jisx0212_init, 0, _jisx0212_decoder, 0, _jisx0212_encoder, 0, _gb2312_init, 0, _gb2312_decoder, 0, _gb2312_encoder, 0, _dummy_decoder, 0, _dummy_encoder, 0, _jisx0213_init, 0, _jisx0213_2004_1_decoder, 0, _jisx0213_2004_1_encoder_paironly, 0, _jisx0213_2004_1_encoder, 0, _jisx0213_2004_2_decoder, 0, _jisx0213_2004_2_encoder, 0, _jisx0213_2000_1_decoder, 0, _jisx0213_2000_1_encoder_paironly, 0, _jisx0213_2000_1_encoder, 0, _jisx0213_2000_2_decoder, 0, _jisx0213_2000_2_encoder, 0, _jisx0201_k_decoder, 0, _jisx0201_k_encoder, 0, _iso2022_codec_init, 0, _iso2022_encode, 0, _iso2022_encode_init, 0, _iso2022_encode_reset, 0, _iso2022_decode, 0, _iso2022_decode_init, 0, _iso2022_decode_reset, 0 ]);
  function run(args) {
    _cofunc_8453 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str = allocate([ 95, 109, 117, 108, 116, 105, 98, 121, 116, 101, 99, 111, 100, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 95, 95, 99, 114, 101, 97, 116, 101, 95, 99, 111, 100, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 101, 110, 99, 111, 100, 105, 110, 103, 32, 110, 97, 109, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 110, 111, 32, 115, 117, 99, 104, 32, 99, 111, 100, 101, 99, 32, 105, 115, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 109, 117, 108, 116, 105, 98, 121, 116, 101, 99, 111, 100, 101, 99, 46, 95, 95, 109, 97, 112, 95, 42, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 103, 101, 116, 99, 111, 100, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate(1, "i8", ALLOC_NORMAL);
    ___methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str7 = allocate([ 95, 95, 109, 97, 112, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 109, 97, 112, 32, 100, 97, 116, 97, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 67, 97, 112, 115, 117, 108, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 100, 115, 103, 45, 62, 119, 105, 100, 116, 104, 32, 61, 61, 32, 49, 32, 124, 124, 32, 100, 115, 103, 45, 62, 119, 105, 100, 116, 104, 32, 61, 61, 32, 50, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 99, 106, 107, 99, 111, 100, 101, 99, 115, 47, 95, 99, 111, 100, 101, 99, 115, 95, 105, 115, 111, 50, 48, 50, 50, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8716 = allocate([ 105, 115, 111, 50, 48, 50, 50, 95, 101, 110, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 100, 115, 103, 45, 62, 109, 97, 114, 107, 32, 33, 61, 32, 39, 92, 48, 39, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9242 = allocate([ 105, 115, 111, 50, 48, 50, 50, 95, 100, 101, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    _cp949_encmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _ksx1001_decmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _jisxcommon_encmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _jisx0208_decmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _jisx0212_decmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _jisx0213_bmp_encmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _jisx0213_1_bmp_decmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _jisx0213_2_bmp_decmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _jisx0213_emp_encmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _jisx0213_1_emp_decmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _jisx0213_2_emp_decmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _gbcommon_encmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _gb2312_decmap = allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
    _initialized_9477_b = allocate(1, "i1", ALLOC_NORMAL);
    __str12 = allocate([ 95, 99, 111, 100, 101, 99, 115, 95, 107, 114, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 95, 95, 109, 97, 112, 95, 99, 112, 57, 52, 57, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 95, 95, 109, 97, 112, 95, 107, 115, 120, 49, 48, 48, 49, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 42, 108, 101, 110, 103, 116, 104, 32, 61, 61, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9539 = allocate([ 107, 115, 120, 49, 48, 48, 49, 95, 101, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _initialized_9598_b = allocate(1, "i1", ALLOC_NORMAL);
    __str16 = allocate([ 95, 99, 111, 100, 101, 99, 115, 95, 106, 112, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 99, 111, 109, 109, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 48, 50, 48, 56, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9665 = allocate([ 106, 105, 115, 120, 48, 50, 48, 56, 95, 101, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _initialized_9727_b = allocate(1, "i1", ALLOC_NORMAL);
    __str19 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 48, 50, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9789 = allocate([ 106, 105, 115, 120, 48, 50, 49, 50, 95, 101, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _initialized_9849_b = allocate(1, "i1", ALLOC_NORMAL);
    __str20 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 48, 50, 49, 51, 95, 98, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 48, 50, 49, 51, 95, 49, 95, 98, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 48, 50, 49, 51, 95, 50, 95, 98, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 48, 50, 49, 51, 95, 101, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 48, 50, 49, 51, 95, 49, 95, 101, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 48, 50, 49, 51, 95, 50, 95, 101, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    _jisx0213_pair_decmap = allocate(1, "%struct.widedbcs_index*", ALLOC_NORMAL);
    _jisx0213_pair_encmap = allocate(1, "%struct.pair_encodemap*", ALLOC_NORMAL);
    __str26 = allocate([ 95, 95, 109, 97, 112, 95, 106, 105, 115, 120, 48, 50, 49, 51, 95, 112, 97, 105, 114, 0 ], "i8", ALLOC_NORMAL);
    _initialized_10822_b = allocate(1, "i1", ALLOC_NORMAL);
    __str27 = allocate([ 95, 99, 111, 100, 101, 99, 115, 95, 99, 110, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 95, 95, 109, 97, 112, 95, 103, 98, 99, 111, 109, 109, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 95, 95, 109, 97, 112, 95, 103, 98, 50, 51, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10884 = allocate([ 103, 98, 50, 51, 49, 50, 95, 101, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _iso2022_kr_designations = allocate([ -61, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _iso2022_kr_config = allocate(8, [ "i32", 0, 0, 0, "%struct.iso2022_designation*", 0, 0, 0 ], ALLOC_NORMAL);
    _iso2022_jp_designations = allocate([ -62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -64, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _iso2022_jp_config = allocate([ 5, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct.iso2022_designation*", 0, 0, 0 ], ALLOC_NORMAL);
    _iso2022_jp_1_designations = allocate([ -62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -60, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -64, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _iso2022_jp_1_config = allocate([ 5, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct.iso2022_designation*", 0, 0, 0 ], ALLOC_NORMAL);
    _iso2022_jp_2_designations = allocate([ -62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -60, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -61, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -63, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -64, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _iso2022_jp_2_config = allocate([ 7, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct.iso2022_designation*", 0, 0, 0 ], ALLOC_NORMAL);
    _iso2022_jp_2004_designations = allocate([ -47, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -47, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -48, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _iso2022_jp_2004_config = allocate([ 5, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct.iso2022_designation*", 0, 0, 0 ], ALLOC_NORMAL);
    _iso2022_jp_3_designations = allocate([ -49, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -49, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -48, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _iso2022_jp_3_config = allocate([ 5, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct.iso2022_designation*", 0, 0, 0 ], ALLOC_NORMAL);
    _iso2022_jp_ext_designations = allocate([ -62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -60, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -64, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", 0, "i32 ()*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i16 (i32*, i32*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _iso2022_jp_ext_config = allocate([ 5, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct.iso2022_designation*", 0, 0, 0 ], ALLOC_NORMAL);
    __mapping_list = allocate(12, [ "i8*", 0, 0, 0, "%struct.dbcs_index*", 0, 0, 0, "%struct.dbcs_index*", 0, 0, 0 ], ALLOC_NORMAL);
    __str30 = allocate([ 105, 115, 111, 50, 48, 50, 50, 95, 107, 114, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 105, 115, 111, 50, 48, 50, 50, 95, 106, 112, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 105, 115, 111, 50, 48, 50, 50, 95, 106, 112, 95, 49, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 105, 115, 111, 50, 48, 50, 50, 95, 106, 112, 95, 50, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 105, 115, 111, 50, 48, 50, 50, 95, 106, 112, 95, 50, 48, 48, 52, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 105, 115, 111, 50, 48, 50, 50, 95, 106, 112, 95, 51, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 105, 115, 111, 50, 48, 50, 50, 95, 106, 112, 95, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __codec_list = allocate(288, [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str37 = allocate([ 95, 99, 111, 100, 101, 99, 115, 95, 105, 115, 111, 50, 48, 50, 50, 0 ], "i8", ALLOC_NORMAL);
    HEAP[___methods] = __str5;
    HEAP[___methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[___methods + 12] = __str6;
    HEAP[_iso2022_kr_designations + 4] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_iso2022_kr_designations + 8] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_iso2022_kr_designations + 12] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_iso2022_kr_config + 4] = _iso2022_kr_designations;
    HEAP[_iso2022_jp_designations + 4] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_designations + 8] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_designations + 12] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_designations + 24] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_iso2022_jp_designations + 28] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_iso2022_jp_designations + 36] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_designations + 40] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_designations + 44] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_config + 4] = _iso2022_jp_designations;
    HEAP[_iso2022_jp_1_designations + 4] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_1_designations + 8] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_1_designations + 12] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_1_designations + 20] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_iso2022_jp_1_designations + 24] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_iso2022_jp_1_designations + 28] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_iso2022_jp_1_designations + 40] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_iso2022_jp_1_designations + 44] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_iso2022_jp_1_designations + 52] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_1_designations + 56] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_1_designations + 60] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_1_config + 4] = _iso2022_jp_1_designations;
    HEAP[_iso2022_jp_2_designations + 4] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_2_designations + 8] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_2_designations + 12] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_2_designations + 20] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_iso2022_jp_2_designations + 24] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_iso2022_jp_2_designations + 28] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_iso2022_jp_2_designations + 36] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_iso2022_jp_2_designations + 40] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_iso2022_jp_2_designations + 44] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_iso2022_jp_2_designations + 52] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_iso2022_jp_2_designations + 56] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_iso2022_jp_2_designations + 60] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_iso2022_jp_2_designations + 72] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_iso2022_jp_2_designations + 76] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_iso2022_jp_2_designations + 84] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_2_designations + 88] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_2_designations + 92] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_2_designations + 104] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_iso2022_jp_2_designations + 108] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_iso2022_jp_2_designations + 120] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_iso2022_jp_2_designations + 124] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_iso2022_jp_2_config + 4] = _iso2022_jp_2_designations;
    HEAP[_iso2022_jp_2004_designations + 4] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_iso2022_jp_2004_designations + 8] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_iso2022_jp_2004_designations + 12] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_iso2022_jp_2004_designations + 20] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_2004_designations + 24] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_2004_designations + 28] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_2004_designations + 36] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_iso2022_jp_2004_designations + 40] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_iso2022_jp_2004_designations + 44] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_iso2022_jp_2004_designations + 52] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_iso2022_jp_2004_designations + 56] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_iso2022_jp_2004_designations + 60] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_iso2022_jp_2004_config + 4] = _iso2022_jp_2004_designations;
    HEAP[_iso2022_jp_3_designations + 4] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_iso2022_jp_3_designations + 8] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_iso2022_jp_3_designations + 12] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_iso2022_jp_3_designations + 20] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_3_designations + 24] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_3_designations + 28] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_3_designations + 36] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_iso2022_jp_3_designations + 40] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_iso2022_jp_3_designations + 44] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_iso2022_jp_3_designations + 52] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_iso2022_jp_3_designations + 56] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_iso2022_jp_3_designations + 60] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_iso2022_jp_3_config + 4] = _iso2022_jp_3_designations;
    HEAP[_iso2022_jp_ext_designations + 4] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_ext_designations + 8] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_ext_designations + 12] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_ext_designations + 20] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_iso2022_jp_ext_designations + 24] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_iso2022_jp_ext_designations + 28] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_iso2022_jp_ext_designations + 40] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_iso2022_jp_ext_designations + 44] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_iso2022_jp_ext_designations + 56] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_iso2022_jp_ext_designations + 60] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_iso2022_jp_ext_designations + 68] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_iso2022_jp_ext_designations + 72] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_iso2022_jp_ext_designations + 76] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iso2022_jp_ext_config + 4] = _iso2022_jp_ext_designations;
    HEAP[__mapping_list] = __str6;
    HEAP[__codec_list] = __str30;
    HEAP[__codec_list + 4] = _iso2022_kr_config;
    HEAP[__codec_list + 8] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[__codec_list + 12] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[__codec_list + 16] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[__codec_list + 20] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[__codec_list + 24] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[__codec_list + 28] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[__codec_list + 32] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[__codec_list + 36] = __str31;
    HEAP[__codec_list + 40] = _iso2022_jp_config;
    HEAP[__codec_list + 44] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[__codec_list + 48] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[__codec_list + 52] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[__codec_list + 56] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[__codec_list + 60] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[__codec_list + 64] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[__codec_list + 68] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[__codec_list + 72] = __str32;
    HEAP[__codec_list + 76] = _iso2022_jp_1_config;
    HEAP[__codec_list + 80] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[__codec_list + 84] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[__codec_list + 88] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[__codec_list + 92] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[__codec_list + 96] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[__codec_list + 100] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[__codec_list + 104] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[__codec_list + 108] = __str33;
    HEAP[__codec_list + 112] = _iso2022_jp_2_config;
    HEAP[__codec_list + 116] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[__codec_list + 120] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[__codec_list + 124] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[__codec_list + 128] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[__codec_list + 132] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[__codec_list + 136] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[__codec_list + 140] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[__codec_list + 144] = __str34;
    HEAP[__codec_list + 148] = _iso2022_jp_2004_config;
    HEAP[__codec_list + 152] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[__codec_list + 156] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[__codec_list + 160] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[__codec_list + 164] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[__codec_list + 168] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[__codec_list + 172] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[__codec_list + 176] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[__codec_list + 180] = __str35;
    HEAP[__codec_list + 184] = _iso2022_jp_3_config;
    HEAP[__codec_list + 188] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[__codec_list + 192] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[__codec_list + 196] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[__codec_list + 200] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[__codec_list + 204] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[__codec_list + 208] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[__codec_list + 212] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[__codec_list + 216] = __str36;
    HEAP[__codec_list + 220] = _iso2022_jp_ext_config;
    HEAP[__codec_list + 224] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[__codec_list + 228] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[__codec_list + 232] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[__codec_list + 236] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[__codec_list + 240] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[__codec_list + 244] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[__codec_list + 248] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[__codec_list + 252] = __str6;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
