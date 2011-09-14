"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 60;
  var $1___SIZE = 20;
  var $2___SIZE = 20;
  var $3___SIZE = 384;
  var $4___SIZE = 16;
  var $5___SIZE = 24;
  var $6___SIZE = 196;
  var $7___SIZE = 196;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PySliceObject___SIZE = 20;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_PyUnicodeObject___SIZE = 24;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_arraydescr___SIZE = 16;
  var $struct_arrayiterobject___SIZE = 20;
  var $struct_arrayobject___SIZE = 28;
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
  var _descriptors;
  var __str15;
  var __str16;
  var ___PRETTY_FUNCTION___8858;
  var __str17;
  var __str18;
  var _copy_doc;
  var __str19;
  var __str20;
  var __str21;
  var __str22;
  var ___PRETTY_FUNCTION___9470;
  var __str23;
  var __str24;
  var _count_doc;
  var __str25;
  var _index_doc;
  var __str26;
  var _remove_doc;
  var __str27;
  var __str28;
  var __str29;
  var _pop_doc;
  var _extend_doc;
  var __str30;
  var _insert_doc;
  var _buffer_info_doc;
  var _append_doc;
  var __str31;
  var _byteswap_doc;
  var __str32;
  var ___PRETTY_FUNCTION___10009;
  var _reverse_doc;
  var __str33;
  var __str34;
  var __str35;
  var _fromfile_doc;
  var __str36;
  var __str37;
  var _tofile_doc;
  var __str38;
  var __str39;
  var _fromlist_doc;
  var _tolist_doc;
  var __str40;
  var __str41;
  var _fromstring_doc;
  var _tostring_doc;
  var __str42;
  var __str43;
  var _fromunicode_doc;
  var __str44;
  var _tounicode_doc;
  var __str45;
  var __str46;
  var _reduce_doc;
  var __str47;
  var __str48;
  var __str49;
  var __str50;
  var _array_getsets;
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
  var __str72;
  var __str73;
  var _array_methods;
  var __str74;
  var __str75;
  var __str76;
  var __str77;
  var __str78;
  var __str79;
  var _array_as_mapping;
  var __str80;
  var __str81;
  var _array_as_sequence;
  var _array_as_buffer;
  var __str82;
  var __str83;
  var __str84;
  var _module_doc;
  var _arraytype_doc;
  var __str85;
  var _Arraytype;
  var __str86;
  var ___PRETTY_FUNCTION___11388;
  var __str87;
  var _PyArrayIter_Type;
  var _a_methods;
  var __str88;
  var __str89;
  function _array_resize($self, $newsize) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $newsize_addr;
      var $retval;
      var $iftmp_6;
      var $iftmp_5;
      var $iftmp_4;
      var $iftmp_2;
      var $0;
      var $items;
      var $_new_size;
      $self_addr = $self;
      $newsize_addr = $newsize;
      
      
      
      
      
      if (HEAP[$self_addr + 16] >= $newsize_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if (HEAP[$self_addr + 8] < $newsize_addr + 16) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      HEAP[$self_addr + 8] = $newsize_addr;
      $0 = 0;
      __label__ = 19;
      break;
     case 4:
      
      var $22 = $newsize_addr >> 4;
      
      
      
      
      
      if (HEAP[$self_addr + 8] <= 7) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $iftmp_2 = 3;
      __label__ = 7;
      break;
     case 6:
      $iftmp_2 = 7;
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      $_new_size = $iftmp_2 + $22 + $newsize_addr;
      
      
      
      $items = HEAP[$self_addr + 12];
      
      
      
      
      var $39 = HEAP[HEAP[$self_addr + 20] + 4];
      var $40 = Math.floor(4294967295 / $39);
      
      
      if ($40 >= $_new_size) {
        __label__ = 8;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      
      if ($_new_size * HEAP[HEAP[$self_addr + 20] + 4] >= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      if ($_new_size * HEAP[HEAP[$self_addr + 20] + 4] >= 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      if ($_new_size * HEAP[HEAP[$self_addr + 20] + 4] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      
      $iftmp_6 = $_new_size * HEAP[HEAP[$self_addr + 20] + 4];
      __label__ = 16;
      break;
     case 12:
      $iftmp_6 = 1;
      __label__ = 16;
      break;
     case 13:
      $iftmp_5 = 0;
      $iftmp_4 = 0;
      $items = 0;
      __label__ = 17;
      break;
     case 14:
      $iftmp_4 = 0;
      $items = 0;
      __label__ = 17;
      break;
     case 15:
      $items = 0;
      __label__ = 17;
      break;
     case 16:
      
      
      var $76 = _realloc($items, $iftmp_6);
      $iftmp_5 = $76;
      $iftmp_4 = $76;
      $items = $76;
      
      if ($76 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $78 = _PyErr_NoMemory();
      $0 = -1;
      __label__ = 19;
      break;
     case 18:
      
      
      
      HEAP[$self_addr + 12] = $items;
      
      
      
      
      HEAP[$self_addr + 8] = $newsize_addr;
      
      
      
      HEAP[$self_addr + 16] = $_new_size;
      $0 = 0;
      __label__ = 19;
      break;
     case 19:
      
      $retval = $0;
      var $retval22 = $retval;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_getitem($ap, $i) {
    
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr = $ap;
    $i_addr = $i;
    
    
    
    
    var $5 = HEAP[$ap_addr + 12] + $i_addr;
    var $6 = _PyString_FromStringAndSize($5, 1);
    $0 = $6;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _c_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1;
    _memset(__stackBase__, 0, 1);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr;
      var $i_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $ap_addr = $ap;
      $i_addr = $i;
      $v_addr = $v;
      
      var $2 = __PyArg_Parse_SizeT($v_addr, __str, allocate([ $x, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if ($i_addr >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $9 = HEAP[$x];
      
      var $11 = HEAP[$ap_addr + 12] + $i_addr;
      HEAP[$11] = $9;
      __label__ = 4;
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
  function _b_getitem($ap, $i) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr;
      var $i_addr;
      var $retval;
      var $0;
      var $x;
      $ap_addr = $ap;
      $i_addr = $i;
      
      
      
      
      
      
      
      $x = HEAP[HEAP[$ap_addr + 12] + $i_addr];
      
      
      if ($x > 127) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $11 = $x - 256;
      $x = $11;
      __label__ = 2;
      break;
     case 2:
      
      var $13 = _PyInt_FromLong($x);
      $0 = $13;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _b_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 2;
    _memset(__stackBase__, 0, 2);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr;
      var $i_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $ap_addr = $ap;
      $i_addr = $i;
      $v_addr = $v;
      
      var $2 = __PyArg_Parse_SizeT($v_addr, __str1, allocate([ $x, 0, 0, 0 ], [ "i16*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 9;
      break;
     case 2:
      
      var $5 = HEAP[$x] < -128;
      if ($5) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($6, __str2);
      $0 = -1;
      __label__ = 9;
      break;
     case 4:
      
      
      if (HEAP[$x] > 127) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $9 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($9, __str3);
      $0 = -1;
      __label__ = 9;
      break;
     case 6:
      
      
      if ($i_addr >= 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $16 = HEAP[$x] & 255;
      
      var $18 = HEAP[$ap_addr + 12] + $i_addr;
      HEAP[$18] = $16;
      __label__ = 8;
      break;
     case 8:
      $0 = 0;
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
  function _BB_getitem($ap, $i) {
    
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    var $x;
    $ap_addr = $ap;
    $i_addr = $i;
    
    
    
    
    
    
    
    $x = HEAP[HEAP[$ap_addr + 12] + $i_addr];
    
    var $9 = _PyInt_FromLong($x);
    $0 = $9;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _BB_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1;
    _memset(__stackBase__, 0, 1);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr;
      var $i_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $ap_addr = $ap;
      $i_addr = $i;
      $v_addr = $v;
      
      var $2 = __PyArg_Parse_SizeT($v_addr, __str4, allocate([ $x, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if ($i_addr >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $9 = HEAP[$x];
      
      var $11 = HEAP[$ap_addr + 12] + $i_addr;
      HEAP[$11] = $9;
      __label__ = 4;
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
  function _u_getitem($ap, $i) {
    
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr = $ap;
    $i_addr = $i;
    
    
    
    
    
    var $6 = HEAP[$ap_addr + 12] + 2 * $i_addr;
    var $7 = _PyUnicodeUCS2_FromUnicode($6, 1);
    $0 = $7;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _u_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr;
      var $i_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $p = __stackBase__;
      var $len = __stackBase__ + 4;
      $ap_addr = $ap;
      $i_addr = $i;
      $v_addr = $v;
      
      var $2 = __PyArg_Parse_SizeT($v_addr, __str5, allocate([ $p, 0, 0, 0, $len, 0, 0, 0 ], [ "i16**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 7;
      break;
     case 2:
      
      
      if (HEAP[$len] != 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($6, __str6);
      $0 = -1;
      __label__ = 7;
      break;
     case 4:
      
      
      if ($i_addr >= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $15 = HEAP[HEAP[$p]];
      
      var $17 = HEAP[$ap_addr + 12] + 2 * $i_addr;
      HEAP[$17] = $15;
      __label__ = 6;
      break;
     case 6:
      $0 = 0;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval7 = $retval;
      STACKTOP = __stackBase__;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _h_getitem($ap, $i) {
    
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr = $ap;
    $i_addr = $i;
    
    
    
    
    
    
    
    var $8 = HEAP[HEAP[$ap_addr + 12] + 2 * $i_addr];
    var $9 = _PyInt_FromLong($8);
    $0 = $9;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _h_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 2;
    _memset(__stackBase__, 0, 2);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr;
      var $i_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $ap_addr = $ap;
      $i_addr = $i;
      $v_addr = $v;
      
      var $2 = __PyArg_Parse_SizeT($v_addr, __str1, allocate([ $x, 0, 0, 0 ], [ "i16*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if ($i_addr >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $10 = HEAP[$x];
      
      var $12 = HEAP[$ap_addr + 12] + 2 * $i_addr;
      HEAP[$12] = $10;
      __label__ = 4;
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
  function _HH_getitem($ap, $i) {
    
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr = $ap;
    $i_addr = $i;
    
    
    
    
    
    
    
    var $8 = HEAP[HEAP[$ap_addr + 12] + 2 * $i_addr];
    var $9 = _PyInt_FromLong($8);
    $0 = $9;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _HH_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr;
      var $i_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $ap_addr = $ap;
      $i_addr = $i;
      $v_addr = $v;
      
      var $2 = __PyArg_Parse_SizeT($v_addr, __str7, allocate([ $x, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 9;
      break;
     case 2:
      
      
      if (HEAP[$x] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($6, __str8);
      $0 = -1;
      __label__ = 9;
      break;
     case 4:
      
      
      if (HEAP[$x] > 65535) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $9 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($9, __str9);
      $0 = -1;
      __label__ = 9;
      break;
     case 6:
      
      
      if ($i_addr >= 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      var $17 = HEAP[$x] & 65535;
      
      var $19 = HEAP[$ap_addr + 12] + 2 * $i_addr;
      HEAP[$19] = $17;
      __label__ = 8;
      break;
     case 8:
      $0 = 0;
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
  function _i_getitem($ap, $i) {
    
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr = $ap;
    $i_addr = $i;
    
    
    
    
    
    
    var $7 = HEAP[HEAP[$ap_addr + 12] + 4 * $i_addr];
    var $8 = _PyInt_FromLong($7);
    $0 = $8;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _i_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr;
      var $i_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $ap_addr = $ap;
      $i_addr = $i;
      $v_addr = $v;
      
      var $2 = __PyArg_Parse_SizeT($v_addr, __str7, allocate([ $x, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if ($i_addr >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $10 = HEAP[$x];
      
      var $12 = HEAP[$ap_addr + 12] + 4 * $i_addr;
      HEAP[$12] = $10;
      __label__ = 4;
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
  function _II_getitem($ap, $i) {
    
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr = $ap;
    $i_addr = $i;
    
    
    
    
    
    
    var $7 = HEAP[HEAP[$ap_addr + 12] + 4 * $i_addr];
    var $8 = _PyLong_FromUnsignedLong($7);
    $0 = $8;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _II_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr;
      var $i_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $x;
      var $y = __stackBase__;
      $ap_addr = $ap;
      $i_addr = $i;
      $v_addr = $v;
      
      
      
      
      
      
      
      var $8 = $v_addr;
      if ((HEAP[HEAP[$v_addr + 4] + 84] & 16777216) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $9 = _PyLong_AsUnsignedLong($8);
      $x = $9;
      
      var $11 = $x == -1;
      if ($11) {
        __label__ = 2;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 2:
      var $12 = _PyErr_Occurred();
      
      if ($12 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 12;
      break;
     case 4:
      var $14 = __PyArg_Parse_SizeT($8, __str10, allocate([ $y, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($14 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 12;
      break;
     case 6:
      
      
      if (HEAP[$y] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $18 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($18, __str11);
      $0 = -1;
      __label__ = 12;
      break;
     case 8:
      
      $x = HEAP[$y];
      __label__ = 9;
      break;
     case 9:
      
      
      if ($i_addr >= 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      var $27 = HEAP[$ap_addr + 12] + 4 * $i_addr;
      
      HEAP[$27] = $x;
      __label__ = 11;
      break;
     case 11:
      $0 = 0;
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
  function _l_getitem($ap, $i) {
    
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr = $ap;
    $i_addr = $i;
    
    
    
    
    
    
    var $7 = HEAP[HEAP[$ap_addr + 12] + 4 * $i_addr];
    var $8 = _PyInt_FromLong($7);
    $0 = $8;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _l_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr;
      var $i_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $ap_addr = $ap;
      $i_addr = $i;
      $v_addr = $v;
      
      var $2 = __PyArg_Parse_SizeT($v_addr, __str10, allocate([ $x, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if ($i_addr >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $10 = HEAP[$x];
      
      var $12 = HEAP[$ap_addr + 12] + 4 * $i_addr;
      HEAP[$12] = $10;
      __label__ = 4;
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
  function _LL_getitem($ap, $i) {
    
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr = $ap;
    $i_addr = $i;
    
    
    
    
    
    
    var $7 = HEAP[HEAP[$ap_addr + 12] + 4 * $i_addr];
    var $8 = _PyLong_FromUnsignedLong($7);
    $0 = $8;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _LL_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr;
      var $i_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $x;
      var $y = __stackBase__;
      $ap_addr = $ap;
      $i_addr = $i;
      $v_addr = $v;
      
      
      
      
      
      
      
      var $8 = $v_addr;
      if ((HEAP[HEAP[$v_addr + 4] + 84] & 16777216) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $9 = _PyLong_AsUnsignedLong($8);
      $x = $9;
      
      var $11 = $x == -1;
      if ($11) {
        __label__ = 2;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 2:
      var $12 = _PyErr_Occurred();
      
      if ($12 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 12;
      break;
     case 4:
      var $14 = __PyArg_Parse_SizeT($8, __str10, allocate([ $y, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($14 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 12;
      break;
     case 6:
      
      
      if (HEAP[$y] < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $18 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($18, __str12);
      $0 = -1;
      __label__ = 12;
      break;
     case 8:
      
      $x = HEAP[$y];
      __label__ = 9;
      break;
     case 9:
      
      
      if ($i_addr >= 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      var $27 = HEAP[$ap_addr + 12] + 4 * $i_addr;
      
      HEAP[$27] = $x;
      __label__ = 11;
      break;
     case 11:
      $0 = 0;
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
  function _f_getitem($ap, $i) {
    
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr = $ap;
    $i_addr = $i;
    
    
    
    
    
    
    
    var $8 = HEAP[HEAP[$ap_addr + 12] + 4 * $i_addr];
    var $9 = _PyFloat_FromDouble($8);
    $0 = $9;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _f_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr;
      var $i_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $ap_addr = $ap;
      $i_addr = $i;
      $v_addr = $v;
      
      var $2 = __PyArg_Parse_SizeT($v_addr, __str13, allocate([ $x, 0, 0, 0 ], [ "float*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if ($i_addr >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $10 = HEAP[$x];
      
      var $12 = HEAP[$ap_addr + 12] + 4 * $i_addr;
      HEAP[$12] = $10;
      __label__ = 4;
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
  function _d_getitem($ap, $i) {
    
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr = $ap;
    $i_addr = $i;
    
    
    
    
    
    
    var $7 = HEAP[HEAP[$ap_addr + 12] + 8 * $i_addr];
    var $8 = _PyFloat_FromDouble($7);
    $0 = $8;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _d_setitem($ap, $i, $v) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ap_addr;
      var $i_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      $ap_addr = $ap;
      $i_addr = $i;
      $v_addr = $v;
      
      var $2 = __PyArg_Parse_SizeT($v_addr, __str14, allocate([ $x, 0, 0, 0 ], [ "double*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if ($i_addr >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $10 = HEAP[$x];
      
      var $12 = HEAP[$ap_addr + 12] + 8 * $i_addr;
      HEAP[$12] = $10;
      __label__ = 4;
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
  function _newarrayobject($type, $size, $descr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $size_addr;
      var $descr_addr;
      var $retval;
      var $iftmp_44;
      var $iftmp_42;
      var $iftmp_40;
      var $0;
      var $op;
      var $nbytes;
      $type_addr = $type;
      $size_addr = $size;
      $descr_addr = $descr;
      
      
      if ($size_addr < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      __PyErr_BadInternalCall(__str15, 422);
      $0 = 0;
      __label__ = 22;
      break;
     case 2:
      
      
      
      
      
      $nbytes = $size_addr * HEAP[$descr_addr + 4];
      
      
      var $10 = HEAP[$descr_addr + 4];
      
      var $12 = Math.floor($nbytes / $10);
      
      
      if ($12 != $size_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $15 = _PyErr_NoMemory();
      $0 = $15;
      __label__ = 22;
      break;
     case 4:
      
      
      var $18 = HEAP[$type_addr + 152];
      
      var $20 = FUNCTION_TABLE[$18]($type_addr, 0);
      
      $op = $20;
      
      
      if ($op == 0) {
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
      
      
      
      HEAP[$op + 20] = $descr_addr;
      
      
      
      HEAP[$op + 16] = $size_addr;
      
      
      HEAP[$op + 24] = 0;
      
      
      
      
      HEAP[$op + 8] = $size_addr;
      
      
      if ($size_addr <= 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      HEAP[$op + 12] = 0;
      __label__ = 21;
      break;
     case 8:
      
      
      if ($nbytes >= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 9:
      
      
      if ($nbytes >= 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      
      
      if ($nbytes != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      $iftmp_44 = $nbytes;
      __label__ = 13;
      break;
     case 12:
      $iftmp_44 = 1;
      __label__ = 13;
      break;
     case 13:
      
      var $48 = _malloc($iftmp_44);
      $iftmp_42 = $48;
      __label__ = 15;
      break;
     case 14:
      $iftmp_42 = 0;
      __label__ = 15;
      break;
     case 15:
      
      $iftmp_40 = $iftmp_42;
      __label__ = 17;
      break;
     case 16:
      $iftmp_40 = 0;
      __label__ = 17;
      break;
     case 17:
      
      
      
      HEAP[$op + 12] = $iftmp_40;
      
      
      
      
      if (HEAP[$op + 12] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      
      
      
      
      var $61 = HEAP[$op] - 1;
      
      HEAP[$op] = $61;
      
      
      
      if (HEAP[$op] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      var $71 = HEAP[HEAP[$op + 4] + 24];
      
      
      FUNCTION_TABLE[$71]($op);
      __label__ = 20;
      break;
     case 20:
      var $74 = _PyErr_NoMemory();
      $0 = $74;
      __label__ = 22;
      break;
     case 21:
      
      
      $0 = $op;
      __label__ = 22;
      break;
     case 22:
      
      $retval = $0;
      var $retval22 = $retval;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _getarrayitem($op, $i) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $op_addr;
      var $i_addr;
      var $retval;
      var $0;
      var $ap;
      $op_addr = $op;
      $i_addr = $i;
      
      
      
      
      if (HEAP[$op_addr + 4] != _Arraytype) {
        __lastLabel__ = -1;
        __label__ = 1;
        break;
      } else {
        __lastLabel__ = -1;
        __label__ = 4;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$op_addr + 4];
      var $8 = _PyType_IsSubtype($7, _Arraytype);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str16, __str15, 456, ___PRETTY_FUNCTION___8858);
      throw "Reached an unreachable!";
     case 3:
      var $_pr = $i_addr;
      __lastLabel__ = 3;
      __label__ = 4;
      break;
     case 4:
      var $10 = __lastLabel__ == 3 ? $_pr : $i;
      
      
      $ap = $op_addr;
      
      if ($10 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      if (HEAP[$ap + 8] <= $i_addr) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      ___assert_fail(__str17, __str15, 458, ___PRETTY_FUNCTION___8858);
      throw "Reached an unreachable!";
     case 7:
      
      
      
      
      var $24 = HEAP[HEAP[$ap + 20] + 8];
      
      
      var $27 = FUNCTION_TABLE[$24]($ap, $i_addr);
      $0 = $27;
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ins1($self, $where, $v) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $where_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $items;
      var $n;
      $self_addr = $self;
      $where_addr = $where;
      $v_addr = $v;
      
      
      
      
      $n = HEAP[$self_addr + 8];
      
      
      if ($v_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      __PyErr_BadInternalCall(__str15, 468);
      $0 = -1;
      __label__ = 14;
      break;
     case 2:
      
      
      
      
      var $11 = HEAP[HEAP[$self_addr + 20] + 12];
      
      
      var $14 = FUNCTION_TABLE[$11]($self_addr, -1, $v_addr);
      
      if ($14 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 14;
      break;
     case 4:
      
      
      
      var $19 = _array_resize($self_addr, $n + 1);
      var $20 = $19 == -1;
      if ($20) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 14;
      break;
     case 6:
      
      
      
      $items = HEAP[$self_addr + 12];
      
      
      if ($where_addr < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $28 = $n + $where_addr;
      $where_addr = $28;
      
      
      if ($where_addr < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $where_addr = 0;
      __label__ = 9;
      break;
     case 9:
      
      
      
      if ($where_addr > $n) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      $where_addr = $n;
      __label__ = 11;
      break;
     case 11:
      
      
      
      if ($where_addr != $n) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      
      var $46 = HEAP[HEAP[$self_addr + 20] + 4] * ($n - $where_addr);
      
      
      
      
      
      
      
      
      var $55 = $items + $where_addr * HEAP[HEAP[$self_addr + 20] + 4];
      
      
      
      
      
      
      
      
      
      var $65 = $items + HEAP[HEAP[$self_addr + 20] + 4] * ($where_addr + 1);
      _llvm_memmove_p0i8_p0i8_i32($65, $55, $46, 1, 0);
      __label__ = 13;
      break;
     case 13:
      
      
      
      
      var $70 = HEAP[HEAP[$self_addr + 20] + 12];
      
      
      
      var $74 = FUNCTION_TABLE[$70]($self_addr, $where_addr, $v_addr);
      $0 = $74;
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
  function _array_dealloc($op) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $op_addr;
      $op_addr = $op;
      
      
      
      
      if (HEAP[$op_addr + 24] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      _PyObject_ClearWeakRefs($op_addr);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[$op_addr + 12] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $12 = HEAP[$op_addr + 12];
      _free($12);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      var $18 = HEAP[HEAP[$op_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$18]($op_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_richcompare($v, $w, $op) {
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
      var $va;
      var $wa;
      var $vi;
      var $wi;
      var $i;
      var $k;
      var $res;
      var $vs;
      var $ws;
      var $cmp;
      $v_addr = $v;
      $w_addr = $w;
      $op_addr = $op;
      $vi = 0;
      $wi = 0;
      
      
      
      
      if (HEAP[$v_addr + 4] == _Arraytype) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$v_addr + 4];
      var $8 = _PyType_IsSubtype($7, _Arraytype);
      
      if ($8 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$w_addr + 4] == _Arraytype) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[$w_addr + 4];
      var $17 = _PyType_IsSubtype($16, _Arraytype);
      
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
      __label__ = 55;
      break;
     case 5:
      
      
      $va = $v_addr;
      
      
      $wa = $w_addr;
      
      
      
      
      
      
      
      
      
      if (HEAP[$va + 8] != HEAP[$wa + 8]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 6:
      
      
      
      
      
      if ($op_addr == 2 | $op_addr == 3) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 7:
      
      
      if ($op_addr == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $res = __Py_ZeroStruct;
      __label__ = 10;
      break;
     case 9:
      $res = __Py_TrueStruct;
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $43 = HEAP[$res] + 1;
      
      
      HEAP[$res] = $43;
      
      $0 = $res;
      __label__ = 55;
      break;
     case 11:
      $k = 1;
      $i = 0;
      __label__ = 30;
      break;
     case 12:
      
      
      var $49 = _getarrayitem($v_addr, $i);
      $vi = $49;
      
      
      var $52 = _getarrayitem($w_addr, $i);
      $wi = $52;
      
      
      if ($vi == 0) {
        __lastLabel__ = 12;
        __label__ = 18;
        break;
      } else {
        __lastLabel__ = 12;
        __label__ = 13;
        break;
      }
     case 13:
      
      
      var $_pr = $vi;
      if ($wi == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 14:
      
      if ($_pr != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      var $61 = HEAP[$vi] - 1;
      
      
      HEAP[$vi] = $61;
      
      
      
      
      if (HEAP[$vi] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $72 = HEAP[HEAP[$vi + 4] + 24];
      
      FUNCTION_TABLE[$72]($vi);
      __label__ = 17;
      break;
     case 17:
      var $_pr3 = $wi;
      __lastLabel__ = 17;
      __label__ = 18;
      break;
     case 18:
      var $74 = __lastLabel__ == 17 ? $_pr3 : $52;
      
      if ($74 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      
      var $79 = HEAP[$wi] - 1;
      
      
      HEAP[$wi] = $79;
      
      
      
      
      if (HEAP[$wi] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $90 = HEAP[HEAP[$wi + 4] + 24];
      
      FUNCTION_TABLE[$90]($wi);
      __label__ = 21;
      break;
     case 21:
      $0 = 0;
      __label__ = 55;
      break;
     case 22:
      
      var $93 = _PyObject_RichCompareBool($_pr, $wi, 2);
      $k = $93;
      
      
      if ($k == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      var $99 = HEAP[$vi] - 1;
      
      
      HEAP[$vi] = $99;
      
      
      
      
      if (HEAP[$vi] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $110 = HEAP[HEAP[$vi + 4] + 24];
      
      FUNCTION_TABLE[$110]($vi);
      __label__ = 25;
      break;
     case 25:
      
      
      
      var $115 = HEAP[$wi] - 1;
      
      
      HEAP[$wi] = $115;
      
      
      
      
      if (HEAP[$wi] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $126 = HEAP[HEAP[$wi + 4] + 24];
      
      FUNCTION_TABLE[$126]($wi);
      __label__ = 27;
      break;
     case 27:
      
      
      if ($k < 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      $0 = 0;
      __label__ = 55;
      break;
     case 29:
      
      var $131 = $i + 1;
      $i = $131;
      __label__ = 30;
      break;
     case 30:
      
      
      
      
      
      
      if (HEAP[$va + 8] <= $i) {
        __label__ = 32;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      
      
      
      
      if (HEAP[$wa + 8] > $i) {
        __label__ = 12;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      if ($k != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 33:
      
      
      
      
      $vs = HEAP[$va + 8];
      
      
      
      
      $ws = HEAP[$wa + 8];
      var $153 = $op_addr;
      if ($153 == 0) {
        __label__ = 34;
        break;
      } else if ($153 == 1) {
        __label__ = 35;
        break;
      } else if ($153 == 2) {
        __label__ = 36;
        break;
      } else if ($153 == 3) {
        __label__ = 37;
        break;
      } else if ($153 == 4) {
        __label__ = 38;
        break;
      } else if ($153 == 5) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 34:
      
      
      
      var $157 = $vs < $ws;
      $cmp = $157;
      __lastLabel__ = 34;
      __label__ = 41;
      break;
     case 35:
      
      
      
      var $161 = $vs <= $ws;
      $cmp = $161;
      __lastLabel__ = 35;
      __label__ = 41;
      break;
     case 36:
      
      
      
      var $165 = $vs == $ws;
      $cmp = $165;
      __lastLabel__ = 36;
      __label__ = 41;
      break;
     case 37:
      
      
      
      var $169 = $vs != $ws;
      $cmp = $169;
      __lastLabel__ = 37;
      __label__ = 41;
      break;
     case 38:
      
      
      
      var $173 = $vs > $ws;
      $cmp = $173;
      __lastLabel__ = 38;
      __label__ = 41;
      break;
     case 39:
      
      
      
      var $177 = $vs >= $ws;
      $cmp = $177;
      __lastLabel__ = 39;
      __label__ = 41;
      break;
     case 40:
      $0 = 0;
      __label__ = 55;
      break;
     case 41:
      var $178 = __lastLabel__ == 39 ? $177 : __lastLabel__ == 38 ? $173 : __lastLabel__ == 37 ? $169 : __lastLabel__ == 36 ? $165 : __lastLabel__ == 35 ? $161 : $157;
      
      if ($178 != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      $res = __Py_TrueStruct;
      __label__ = 44;
      break;
     case 43:
      $res = __Py_ZeroStruct;
      __label__ = 44;
      break;
     case 44:
      
      
      
      var $183 = HEAP[$res] + 1;
      
      
      HEAP[$res] = $183;
      
      $0 = $res;
      __label__ = 55;
      break;
     case 45:
      
      
      if ($op_addr == 2) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      var $190 = HEAP[__Py_ZeroStruct] + 1;
      HEAP[__Py_ZeroStruct] = $190;
      $res = __Py_ZeroStruct;
      __label__ = 50;
      break;
     case 47:
      
      
      if ($op_addr == 3) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      var $194 = HEAP[__Py_TrueStruct] + 1;
      HEAP[__Py_TrueStruct] = $194;
      $res = __Py_TrueStruct;
      __label__ = 50;
      break;
     case 49:
      
      
      
      var $198 = _PyObject_RichCompare($vi, $wi, $op_addr);
      $res = $198;
      __label__ = 50;
      break;
     case 50:
      
      
      
      var $202 = HEAP[$vi] - 1;
      
      
      HEAP[$vi] = $202;
      
      
      
      
      if (HEAP[$vi] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      
      
      
      
      var $213 = HEAP[HEAP[$vi + 4] + 24];
      
      FUNCTION_TABLE[$213]($vi);
      __label__ = 52;
      break;
     case 52:
      
      
      
      var $218 = HEAP[$wi] - 1;
      
      
      HEAP[$wi] = $218;
      
      
      
      
      if (HEAP[$wi] == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      
      
      
      
      var $229 = HEAP[HEAP[$wi + 4] + 24];
      
      FUNCTION_TABLE[$229]($wi);
      __label__ = 54;
      break;
     case 54:
      
      $0 = $res;
      __label__ = 55;
      break;
     case 55:
      
      $retval = $0;
      var $retval55 = $retval;
      return $retval55;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_length($a) {
    
    var $a_addr;
    var $retval;
    var $0;
    $a_addr = $a;
    
    
    
    
    $0 = HEAP[$a_addr + 8];
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _array_item($a, $i) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr;
      var $i_addr;
      var $retval;
      var $0;
      $a_addr = $a;
      $i_addr = $i;
      
      
      if ($i_addr < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      if (HEAP[$a_addr + 8] <= $i_addr) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $9 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($9, __str18);
      $0 = 0;
      __label__ = 4;
      break;
     case 3:
      
      
      
      var $13 = _getarrayitem($a_addr, $i_addr);
      $0 = $13;
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
  function _array_slice($a, $ilow, $ihigh) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr;
      var $ilow_addr;
      var $ihigh_addr;
      var $retval;
      var $0;
      var $np;
      $a_addr = $a;
      $ilow_addr = $ilow;
      $ihigh_addr = $ihigh;
      
      
      if ($ilow_addr < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $ilow_addr = 0;
      __label__ = 4;
      break;
     case 2:
      
      
      
      
      
      
      if (HEAP[$a_addr + 8] < $ilow_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      $ilow_addr = HEAP[$a_addr + 8];
      __label__ = 4;
      break;
     case 4:
      
      
      if ($ihigh_addr < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $ihigh_addr = 0;
      __label__ = 6;
      break;
     case 6:
      
      
      
      if ($ihigh_addr < $ilow_addr) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      $ihigh_addr = $ilow_addr;
      __label__ = 10;
      break;
     case 8:
      
      
      
      
      
      
      if (HEAP[$a_addr + 8] < $ihigh_addr) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      $ihigh_addr = HEAP[$a_addr + 8];
      __label__ = 10;
      break;
     case 10:
      
      
      var $31 = HEAP[$a_addr + 20];
      
      
      
      var $35 = _newarrayobject(_Arraytype, $ihigh_addr - $ilow_addr, $31);
      
      $np = $35;
      
      if ($35 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = 0;
      __label__ = 13;
      break;
     case 12:
      
      
      
      
      
      
      
      
      var $46 = HEAP[HEAP[$a_addr + 20] + 4] * ($ihigh_addr - $ilow_addr);
      
      
      
      
      
      
      
      
      
      
      var $57 = HEAP[$a_addr + 12] + $ilow_addr * HEAP[HEAP[$a_addr + 20] + 4];
      
      
      var $60 = HEAP[$np + 12];
      _llvm_memcpy_p0i8_p0i8_i32($60, $57, $46, 1, 0);
      
      
      $0 = $np;
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
  function _array_copy($a, $unused) {
    
    var $a_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $a_addr = $a;
    $unused_addr = $unused;
    
    
    
    var $4 = HEAP[$a_addr + 8];
    
    var $6 = _array_slice($a_addr, 0, $4);
    $0 = $6;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _array_concat($a, $bb) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr;
      var $bb_addr;
      var $retval;
      var $0;
      var $size;
      var $np;
      $a_addr = $a;
      $bb_addr = $bb;
      
      
      
      
      if (HEAP[$bb_addr + 4] != _Arraytype) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$bb_addr + 4];
      var $8 = _PyType_IsSubtype($7, _Arraytype);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $14 = HEAP[HEAP[$bb_addr + 4] + 12];
      var $15 = HEAP[_PyExc_TypeError];
      var $16 = _PyErr_Format($15, __str19, allocate([ $14, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 10;
      break;
     case 3:
      
      
      
      
      
      
      
      
      if (HEAP[$a_addr + 20] != HEAP[$bb_addr + 20]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $25 = _PyErr_BadArgument();
      $0 = 0;
      __label__ = 10;
      break;
     case 5:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$a_addr + 8] > 2147483647 - HEAP[$bb_addr + 8]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $36 = _PyErr_NoMemory();
      $0 = $36;
      __label__ = 10;
      break;
     case 7:
      
      
      
      
      
      
      
      
      
      $size = HEAP[$bb_addr + 8] + HEAP[$a_addr + 8];
      
      
      var $48 = HEAP[$a_addr + 20];
      
      var $50 = _newarrayobject(_Arraytype, $size, $48);
      
      $np = $50;
      
      
      if ($np == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 10;
      break;
     case 9:
      
      
      
      
      
      
      
      
      
      var $63 = HEAP[HEAP[$a_addr + 20] + 4] * HEAP[$a_addr + 8];
      
      
      var $66 = HEAP[$a_addr + 12];
      
      
      var $69 = HEAP[$np + 12];
      _llvm_memcpy_p0i8_p0i8_i32($69, $66, $63, 1, 0);
      
      
      
      
      
      
      
      
      
      
      var $80 = HEAP[HEAP[$bb_addr + 20] + 4] * HEAP[$bb_addr + 8];
      
      
      
      var $84 = HEAP[$bb_addr + 12];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $98 = HEAP[$np + 12] + HEAP[HEAP[$a_addr + 20] + 4] * HEAP[$a_addr + 8];
      _llvm_memcpy_p0i8_p0i8_i32($98, $84, $80, 1, 0);
      
      
      $0 = $np;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_repeat($a, $n) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr;
      var $n_addr;
      var $retval;
      var $0;
      var $i;
      var $size;
      var $np;
      var $p;
      var $nbytes;
      $a_addr = $a;
      $n_addr = $n;
      
      
      if ($n_addr < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $n_addr = 0;
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      
      if (HEAP[$a_addr + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((2147483647 / HEAP[$a_addr + 8] | 0) < $n_addr) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $15 = _PyErr_NoMemory();
      $0 = $15;
      __label__ = 10;
      break;
     case 5:
      
      
      
      
      
      
      $size = $n_addr * HEAP[$a_addr + 8];
      
      
      var $24 = HEAP[$a_addr + 20];
      
      var $26 = _newarrayobject(_Arraytype, $size, $24);
      
      $np = $26;
      
      if ($26 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 10;
      break;
     case 7:
      
      
      
      $p = HEAP[$np + 12];
      
      
      
      
      
      
      
      
      
      
      $nbytes = HEAP[HEAP[$a_addr + 20] + 4] * HEAP[$a_addr + 8];
      $i = 0;
      
      
      
      if ($i < $n_addr) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      var $48 = HEAP[$a_addr + 12];
      
      _llvm_memcpy_p0i8_p0i8_i32($p, $48, $nbytes, 1, 0);
      
      
      var $52 = $p + $nbytes;
      $p = $52;
      
      var $54 = $i + 1;
      $i = $54;
      
      
      
      if ($i < $n_addr) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      $0 = $np;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_ass_slice($a, $ilow, $ihigh, $v) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr;
      var $ilow_addr;
      var $ihigh_addr;
      var $v_addr;
      var $retval;
      var $iftmp_109;
      var $iftmp_107;
      var $iftmp_105;
      var $iftmp_101;
      var $iftmp_99;
      var $iftmp_97;
      var $0;
      var $item;
      var $n;
      var $d;
      var $ret;
      $a_addr = $a;
      $ilow_addr = $ilow;
      $ihigh_addr = $ihigh;
      $v_addr = $v;
      
      
      if ($v_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $n = 0;
      __label__ = 13;
      break;
     case 2:
      
      
      
      
      if (HEAP[$v_addr + 4] == _Arraytype) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $9 = HEAP[$v_addr + 4];
      var $10 = _PyType_IsSubtype($9, _Arraytype);
      
      if ($10 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 4:
      
      
      
      
      $n = HEAP[$v_addr + 8];
      
      
      
      
      
      var $21 = $v_addr;
      if ($a_addr == $v_addr) {
        __label__ = 5;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 5:
      
      var $23 = _array_slice($21, 0, $n);
      $v_addr = $23;
      
      
      if ($v_addr == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -1;
      __label__ = 48;
      break;
     case 7:
      
      
      
      
      var $30 = _array_ass_slice($a_addr, $ilow_addr, $ihigh_addr, $v_addr);
      $ret = $30;
      
      
      
      var $34 = HEAP[$v_addr] - 1;
      
      
      HEAP[$v_addr] = $34;
      
      
      
      
      if (HEAP[$v_addr] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $45 = HEAP[HEAP[$v_addr + 4] + 24];
      
      FUNCTION_TABLE[$45]($v_addr);
      __label__ = 9;
      break;
     case 9:
      
      $0 = $ret;
      __label__ = 48;
      break;
     case 10:
      
      
      
      
      
      
      if (HEAP[$21 + 20] != HEAP[$a_addr + 20]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      var $54 = _PyErr_BadArgument();
      $0 = -1;
      __label__ = 48;
      break;
     case 12:
      
      
      
      
      var $59 = HEAP[HEAP[$v_addr + 4] + 12];
      var $60 = HEAP[_PyExc_TypeError];
      var $61 = _PyErr_Format($60, __str20, allocate([ $59, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
      __label__ = 48;
      break;
     case 13:
      
      
      if ($ilow_addr < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $ilow_addr = 0;
      __label__ = 17;
      break;
     case 15:
      
      
      
      
      
      
      if (HEAP[$a_addr + 8] < $ilow_addr) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      $ilow_addr = HEAP[$a_addr + 8];
      __label__ = 17;
      break;
     case 17:
      
      
      if ($ihigh_addr < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      $ihigh_addr = 0;
      __label__ = 19;
      break;
     case 19:
      
      
      
      if ($ihigh_addr < $ilow_addr) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      $ihigh_addr = $ilow_addr;
      __label__ = 23;
      break;
     case 21:
      
      
      
      
      
      
      if (HEAP[$a_addr + 8] < $ihigh_addr) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      $ihigh_addr = HEAP[$a_addr + 8];
      __label__ = 23;
      break;
     case 23:
      
      
      
      $item = HEAP[$a_addr + 12];
      
      
      
      
      
      
      $d = $n + (0 - ($ihigh_addr - $ilow_addr));
      
      if ($n + (0 - ($ihigh_addr - $ilow_addr)) < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 24:
      
      
      
      
      
      
      
      
      
      
      
      var $110 = HEAP[HEAP[$a_addr + 20] + 4] * (HEAP[$a_addr + 8] - $ihigh_addr);
      
      
      
      
      
      
      
      
      var $119 = $item + $ihigh_addr * HEAP[HEAP[$a_addr + 20] + 4];
      
      
      
      
      
      
      
      
      
      
      var $130 = $item + HEAP[HEAP[$a_addr + 20] + 4] * ($d + $ihigh_addr);
      _llvm_memmove_p0i8_p0i8_i32($130, $119, $110, 1, 0);
      
      
      
      
      
      
      
      var $138 = $d + HEAP[$a_addr + 8];
      
      HEAP[$a_addr + 8] = $138;
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$a_addr + 20] + 4] * HEAP[$a_addr + 8] >= 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 25:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$a_addr + 20] + 4] * HEAP[$a_addr + 8] >= 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 26:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$a_addr + 20] + 4] * HEAP[$a_addr + 8] != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      
      
      
      
      
      
      $iftmp_101 = HEAP[HEAP[$a_addr + 20] + 4] * HEAP[$a_addr + 8];
      __label__ = 29;
      break;
     case 28:
      $iftmp_101 = 1;
      __label__ = 29;
      break;
     case 29:
      
      
      var $185 = _realloc($item, $iftmp_101);
      $iftmp_99 = $185;
      __label__ = 31;
      break;
     case 30:
      $iftmp_99 = 0;
      __label__ = 31;
      break;
     case 31:
      
      $iftmp_97 = $iftmp_99;
      __label__ = 33;
      break;
     case 32:
      $iftmp_97 = 0;
      __label__ = 33;
      break;
     case 33:
      
      $item = $iftmp_97;
      
      
      
      HEAP[$a_addr + 12] = $item;
      
      
      
      var $194 = HEAP[$a_addr + 8];
      
      
      HEAP[$a_addr + 16] = $194;
      __label__ = 45;
      break;
     case 34:
      
      
      if ($d > 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 35:
      
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$a_addr + 20] + 4] * ($d + HEAP[$a_addr + 8]) >= 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 36:
      
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$a_addr + 20] + 4] * ($d + HEAP[$a_addr + 8]) >= 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 37:
      
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$a_addr + 20] + 4] * ($d + HEAP[$a_addr + 8]) != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      
      
      
      
      
      
      
      
      $iftmp_109 = HEAP[HEAP[$a_addr + 20] + 4] * ($d + HEAP[$a_addr + 8]);
      __label__ = 42;
      break;
     case 39:
      $iftmp_109 = 1;
      __label__ = 42;
      break;
     case 40:
      $iftmp_107 = 0;
      $iftmp_105 = 0;
      $item = 0;
      __label__ = 43;
      break;
     case 41:
      $iftmp_105 = 0;
      $item = 0;
      __label__ = 43;
      break;
     case 42:
      
      
      var $252 = _realloc($item, $iftmp_109);
      $iftmp_107 = $252;
      $iftmp_105 = $252;
      $item = $252;
      
      if ($252 == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      var $254 = _PyErr_NoMemory();
      $0 = -1;
      __label__ = 48;
      break;
     case 44:
      
      
      
      
      
      
      
      
      
      
      
      var $266 = HEAP[HEAP[$a_addr + 20] + 4] * (HEAP[$a_addr + 8] - $ihigh_addr);
      
      
      
      
      
      
      
      
      var $275 = $item + $ihigh_addr * HEAP[HEAP[$a_addr + 20] + 4];
      
      
      
      
      
      
      
      
      
      
      var $286 = $item + HEAP[HEAP[$a_addr + 20] + 4] * ($d + $ihigh_addr);
      _llvm_memmove_p0i8_p0i8_i32($286, $275, $266, 1, 0);
      
      
      
      HEAP[$a_addr + 12] = $item;
      
      
      
      
      
      
      
      var $297 = $d + HEAP[$a_addr + 8];
      
      HEAP[$a_addr + 8] = $297;
      
      
      
      var $302 = HEAP[$a_addr + 8];
      
      
      HEAP[$a_addr + 16] = $302;
      __label__ = 45;
      break;
     case 45:
      
      
      if ($n > 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      
      
      
      
      
      var $314 = $n * HEAP[HEAP[$v_addr + 20] + 4];
      
      
      
      var $318 = HEAP[$v_addr + 12];
      
      
      
      
      
      
      
      
      var $327 = $item + $ilow_addr * HEAP[HEAP[$a_addr + 20] + 4];
      _llvm_memcpy_p0i8_p0i8_i32($327, $318, $314, 1, 0);
      __label__ = 47;
      break;
     case 47:
      $0 = 0;
      __label__ = 48;
      break;
     case 48:
      
      $retval = $0;
      var $retval51 = $retval;
      return $retval51;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_ass_item($a, $i, $v) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr;
      var $i_addr;
      var $v_addr;
      var $retval;
      var $0;
      $a_addr = $a;
      $i_addr = $i;
      $v_addr = $v;
      
      
      if ($i_addr < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      if (HEAP[$a_addr + 8] <= $i_addr) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $9 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($9, __str21);
      $0 = -1;
      __label__ = 6;
      break;
     case 3:
      
      
      if ($v_addr == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      var $17 = _array_ass_slice($a_addr, $i_addr, $i_addr + 1, $v_addr);
      $0 = $17;
      __label__ = 6;
      break;
     case 5:
      
      
      
      
      var $22 = HEAP[HEAP[$a_addr + 20] + 12];
      
      
      
      var $26 = FUNCTION_TABLE[$22]($a_addr, $i_addr, $v_addr);
      $0 = $26;
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
  function _setarrayitem($a, $i, $v) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr;
      var $i_addr;
      var $v_addr;
      var $retval;
      var $0;
      $a_addr = $a;
      $i_addr = $i;
      $v_addr = $v;
      
      
      
      
      if (HEAP[$a_addr + 4] != _Arraytype) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$a_addr + 4];
      var $8 = _PyType_IsSubtype($7, _Arraytype);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str22, __str15, 787, ___PRETTY_FUNCTION___9470);
      throw "Reached an unreachable!";
     case 3:
      
      
      
      
      var $14 = _array_ass_item($a_addr, $i_addr, $v_addr);
      $0 = $14;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_iter_extend($self, $bb) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $bb_addr;
      var $retval;
      var $0;
      var $it;
      var $v;
      $self_addr = $self;
      $bb_addr = $bb;
      
      var $2 = _PyObject_GetIter($bb_addr);
      $it = $2;
      
      
      if ($it == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 16;
      break;
     case 2:
      
      
      
      var $8 = HEAP[$self_addr + 8];
      
      
      var $11 = _ins1($self_addr, $8, $v);
      var $12 = $11 != 0;
      
      
      
      var $16 = HEAP[$v] - 1;
      
      
      HEAP[$v] = $16;
      
      
      
      var $22 = HEAP[$v] == 0;
      if ($12) {
        __label__ = 3;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 3:
      if ($22) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $27 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$27]($v);
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $32 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $32;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $43 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$43]($it);
      __label__ = 7;
      break;
     case 7:
      $0 = -1;
      __label__ = 16;
      break;
     case 8:
      if ($22) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $49 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$49]($v);
      __label__ = 10;
      break;
     case 10:
      
      var $52 = _PyIter_Next($it);
      $v = $52;
      
      if ($52 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      var $57 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $57;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $68 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$68]($it);
      __label__ = 13;
      break;
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
      $0 = -1;
      __label__ = 16;
      break;
     case 15:
      $0 = 0;
      __label__ = 16;
      break;
     case 16:
      
      $retval = $0;
      var $retval18 = $retval;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_do_extend($self, $bb) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $bb_addr;
      var $retval;
      var $iftmp_132;
      var $iftmp_131;
      var $iftmp_130;
      var $0;
      var $size;
      var $old_item;
      $self_addr = $self;
      $bb_addr = $bb;
      
      
      
      
      if (HEAP[$bb_addr + 4] != _Arraytype) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$bb_addr + 4];
      var $8 = _PyType_IsSubtype($7, _Arraytype);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      var $12 = _array_iter_extend($self_addr, $bb_addr);
      $0 = $12;
      __label__ = 20;
      break;
     case 3:
      
      
      
      
      
      
      
      
      if (HEAP[$self_addr + 20] != HEAP[$bb_addr + 20]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $21 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($21, __str23);
      $0 = -1;
      __label__ = 20;
      break;
     case 5:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$self_addr + 8] > 2147483647 - HEAP[$bb_addr + 8]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$bb_addr + 8] + HEAP[$self_addr + 8] > (2147483647 / HEAP[HEAP[$self_addr + 20] + 4] | 0)) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $48 = _PyErr_NoMemory();
      $0 = -1;
      __label__ = 20;
      break;
     case 8:
      
      
      
      
      
      
      
      
      
      $size = HEAP[$bb_addr + 8] + HEAP[$self_addr + 8];
      
      
      
      $old_item = HEAP[$self_addr + 12];
      
      
      
      
      
      
      
      
      if ($size * HEAP[HEAP[$self_addr + 20] + 4] >= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      if ($size * HEAP[HEAP[$self_addr + 20] + 4] >= 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      if ($size * HEAP[HEAP[$self_addr + 20] + 4] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      
      $iftmp_132 = $size * HEAP[HEAP[$self_addr + 20] + 4];
      __label__ = 13;
      break;
     case 12:
      $iftmp_132 = 1;
      __label__ = 13;
      break;
     case 13:
      
      
      var $94 = HEAP[$self_addr + 12];
      
      var $96 = _realloc($94, $iftmp_132);
      $iftmp_131 = $96;
      __label__ = 15;
      break;
     case 14:
      $iftmp_131 = 0;
      __label__ = 15;
      break;
     case 15:
      
      $iftmp_130 = $iftmp_131;
      __label__ = 17;
      break;
     case 16:
      $iftmp_130 = 0;
      __label__ = 17;
      break;
     case 17:
      
      
      
      HEAP[$self_addr + 12] = $iftmp_130;
      
      
      
      
      if (HEAP[$self_addr + 12] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      HEAP[$self_addr + 12] = $old_item;
      var $108 = _PyErr_NoMemory();
      $0 = -1;
      __label__ = 20;
      break;
     case 19:
      
      
      
      
      
      
      
      
      
      
      var $119 = HEAP[HEAP[$bb_addr + 20] + 4] * HEAP[$bb_addr + 8];
      
      
      
      var $123 = HEAP[$bb_addr + 12];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $137 = HEAP[$self_addr + 12] + HEAP[HEAP[$self_addr + 20] + 4] * HEAP[$self_addr + 8];
      _llvm_memcpy_p0i8_p0i8_i32($137, $123, $119, 1, 0);
      
      
      
      
      HEAP[$self_addr + 8] = $size;
      
      
      
      HEAP[$self_addr + 16] = $size;
      $0 = 0;
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
  function _array_inplace_concat($self, $bb) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $bb_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $bb_addr = $bb;
      
      
      
      
      if (HEAP[$bb_addr + 4] != _Arraytype) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$bb_addr + 4];
      var $8 = _PyType_IsSubtype($7, _Arraytype);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $14 = HEAP[HEAP[$bb_addr + 4] + 12];
      var $15 = HEAP[_PyExc_TypeError];
      var $16 = _PyErr_Format($15, __str24, allocate([ $14, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 6;
      break;
     case 3:
      
      
      var $19 = _array_do_extend($self_addr, $bb_addr);
      var $20 = $19 == -1;
      if ($20) {
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
      
      
      
      
      var $25 = HEAP[$self_addr] + 1;
      
      HEAP[$self_addr] = $25;
      
      
      $0 = $self_addr;
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_inplace_repeat($self, $n) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $n_addr;
      var $retval;
      var $iftmp_146;
      var $iftmp_145;
      var $iftmp_144;
      var $0;
      var $items;
      var $p;
      var $size;
      var $i;
      $self_addr = $self;
      $n_addr = $n;
      
      
      
      
      
      if (HEAP[$self_addr + 8] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 1:
      
      
      if ($n_addr < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $n_addr = 0;
      __label__ = 3;
      break;
     case 3:
      
      
      
      $items = HEAP[$self_addr + 12];
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20] + 4] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$self_addr + 8] > (2147483647 / HEAP[HEAP[$self_addr + 20] + 4] | 0)) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $28 = _PyErr_NoMemory();
      $0 = $28;
      __label__ = 23;
      break;
     case 6:
      
      
      
      
      
      
      
      
      
      
      $size = HEAP[HEAP[$self_addr + 20] + 4] * HEAP[$self_addr + 8];
      
      
      if ($n_addr == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      _free($items);
      
      
      HEAP[$self_addr + 12] = 0;
      
      
      
      HEAP[$self_addr + 8] = 0;
      
      
      HEAP[$self_addr + 16] = 0;
      __label__ = 22;
      break;
     case 8:
      
      
      
      
      if ((2147483647 / $n_addr | 0) < $size) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $53 = _PyErr_NoMemory();
      $0 = $53;
      __label__ = 23;
      break;
     case 10:
      
      
      
      
      if ($size * $n_addr >= 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 11:
      
      
      
      
      if ($size * $n_addr >= 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      
      
      
      if ($size * $n_addr != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      $iftmp_146 = $size * $n_addr;
      __label__ = 17;
      break;
     case 14:
      $iftmp_146 = 1;
      __label__ = 17;
      break;
     case 15:
      $iftmp_145 = 0;
      $iftmp_144 = 0;
      $items = 0;
      __label__ = 18;
      break;
     case 16:
      $iftmp_144 = 0;
      $items = 0;
      __label__ = 18;
      break;
     case 17:
      
      
      var $71 = _realloc($items, $iftmp_146);
      $iftmp_145 = $71;
      $iftmp_144 = $71;
      $items = $71;
      
      if ($71 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $73 = _PyErr_NoMemory();
      $0 = $73;
      __label__ = 23;
      break;
     case 19:
      
      $p = $items;
      $i = 1;
      
      
      
      if ($i < $n_addr) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      var $80 = $p + $size;
      $p = $80;
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($p, $items, $size, 1, 0);
      
      var $85 = $i + 1;
      $i = $85;
      
      
      
      if ($i < $n_addr) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      HEAP[$self_addr + 12] = $items;
      
      
      
      
      
      
      
      var $99 = $n_addr * HEAP[$self_addr + 8];
      
      HEAP[$self_addr + 8] = $99;
      
      
      
      var $104 = HEAP[$self_addr + 8];
      
      
      HEAP[$self_addr + 16] = $104;
      __label__ = 22;
      break;
     case 22:
      
      
      
      
      var $111 = HEAP[$self_addr] + 1;
      
      HEAP[$self_addr] = $111;
      
      
      $0 = $self_addr;
      __label__ = 23;
      break;
     case 23:
      
      $retval = $0;
      var $retval26 = $retval;
      return $retval26;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ins($self, $where, $v) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $where_addr;
      var $v_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $where_addr = $where;
      $v_addr = $v;
      
      
      
      var $4 = _ins1($self_addr, $where_addr, $v_addr);
      
      if ($4 != 0) {
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
      
      var $7 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $7;
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
  function _array_count($self, $v) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $count;
      var $i;
      var $selfi;
      var $cmp;
      $self_addr = $self;
      $v_addr = $v;
      $count = 0;
      $i = 0;
      __label__ = 8;
      break;
     case 1:
      
      
      
      var $4 = _getarrayitem($self_addr, $i);
      $selfi = $4;
      
      
      var $7 = _PyObject_RichCompareBool($selfi, $v_addr, 2);
      $cmp = $7;
      
      
      
      var $11 = HEAP[$selfi] - 1;
      
      
      HEAP[$selfi] = $11;
      
      
      
      
      if (HEAP[$selfi] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $22 = HEAP[HEAP[$selfi + 4] + 24];
      
      FUNCTION_TABLE[$22]($selfi);
      __label__ = 3;
      break;
     case 3:
      
      
      if ($cmp > 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $27 = $count + 1;
      $count = $27;
      __label__ = 7;
      break;
     case 5:
      
      
      if ($cmp < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 10;
      break;
     case 7:
      
      var $31 = $i + 1;
      $i = $31;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      
      if (HEAP[$self_addr + 8] > $i) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      var $39 = _PyInt_FromSsize_t($count);
      $0 = $39;
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
  function _array_index($self, $v) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $i;
      var $selfi;
      var $cmp;
      $self_addr = $self;
      $v_addr = $v;
      $i = 0;
      __label__ = 8;
      break;
     case 1:
      
      
      
      var $4 = _getarrayitem($self_addr, $i);
      $selfi = $4;
      
      
      var $7 = _PyObject_RichCompareBool($selfi, $v_addr, 2);
      $cmp = $7;
      
      
      
      var $11 = HEAP[$selfi] - 1;
      
      
      HEAP[$selfi] = $11;
      
      
      
      
      if (HEAP[$selfi] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $22 = HEAP[HEAP[$selfi + 4] + 24];
      
      FUNCTION_TABLE[$22]($selfi);
      __label__ = 3;
      break;
     case 3:
      
      
      if ($cmp > 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $27 = _PyInt_FromLong($i);
      $0 = $27;
      __label__ = 10;
      break;
     case 5:
      
      
      if ($cmp < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 10;
      break;
     case 7:
      
      var $31 = $i + 1;
      $i = $31;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      
      if (HEAP[$self_addr + 8] > $i) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $38 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($38, __str25);
      $0 = 0;
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
  function _array_contains($self, $v) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $i;
      var $cmp;
      var $selfi;
      $self_addr = $self;
      $v_addr = $v;
      $i = 0;
      $cmp = 0;
      __lastLabel__ = -1;
      __label__ = 4;
      break;
     case 1:
      
      
      
      var $4 = _getarrayitem($self_addr, $i);
      $selfi = $4;
      
      
      var $7 = _PyObject_RichCompareBool($selfi, $v_addr, 2);
      $cmp = $7;
      
      
      
      var $11 = HEAP[$selfi] - 1;
      
      
      HEAP[$selfi] = $11;
      
      
      
      
      if (HEAP[$selfi] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $22 = HEAP[HEAP[$selfi + 4] + 24];
      
      FUNCTION_TABLE[$22]($selfi);
      __label__ = 3;
      break;
     case 3:
      
      var $25 = $i + 1;
      $i = $25;
      var $_pr = $cmp;
      __lastLabel__ = 3;
      __label__ = 4;
      break;
     case 4:
      var $26 = __lastLabel__ == 3 ? $_pr : 0;
      
      if ($26 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      if (HEAP[$self_addr + 8] > $i) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      $0 = $cmp;
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_remove($self, $v) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $i;
      var $selfi;
      var $cmp;
      $self_addr = $self;
      $v_addr = $v;
      $i = 0;
      __label__ = 10;
      break;
     case 1:
      
      
      
      var $4 = _getarrayitem($self_addr, $i);
      $selfi = $4;
      
      
      var $7 = _PyObject_RichCompareBool($selfi, $v_addr, 2);
      $cmp = $7;
      
      
      
      var $11 = HEAP[$selfi] - 1;
      
      
      HEAP[$selfi] = $11;
      
      
      
      
      if (HEAP[$selfi] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $22 = HEAP[HEAP[$selfi + 4] + 24];
      
      FUNCTION_TABLE[$22]($selfi);
      __label__ = 3;
      break;
     case 3:
      
      
      if ($cmp > 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      
      var $30 = _array_ass_slice($self_addr, $i, $i + 1, 0);
      
      if ($30 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 12;
      break;
     case 6:
      
      var $33 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $33;
      $0 = __Py_NoneStruct;
      __label__ = 12;
      break;
     case 7:
      
      
      if ($cmp < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 12;
      break;
     case 9:
      
      var $37 = $i + 1;
      $i = $37;
      __label__ = 10;
      break;
     case 10:
      
      
      
      
      
      
      if (HEAP[$self_addr + 8] > $i) {
        __label__ = 1;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $44 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($44, __str26);
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
  function _array_pop($self, $args) {
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
      var $i = __stackBase__;
      var $v;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$i] = -1;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str27, allocate([ $i, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      
      
      
      if (HEAP[$self_addr + 8] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($9, __str28);
      $0 = 0;
      __label__ = 13;
      break;
     case 4:
      
      
      if (HEAP[$i] < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      var $17 = HEAP[$i] + HEAP[$self_addr + 8];
      HEAP[$i] = $17;
      
      if ($17 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      if (HEAP[$self_addr + 8] <= HEAP[$i]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $25 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($25, __str29);
      $0 = 0;
      __label__ = 13;
      break;
     case 8:
      var $26 = HEAP[$i];
      
      
      var $29 = _getarrayitem($self_addr, $26);
      $v = $29;
      
      var $31 = HEAP[$i] + 1;
      var $32 = HEAP[$i];
      
      var $34 = _array_ass_slice($self_addr, $32, $31, 0);
      
      var $36 = $v;
      if ($34 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      var $39 = HEAP[$36] - 1;
      
      
      HEAP[$v] = $39;
      
      
      
      
      if (HEAP[$v] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $50 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$50]($v);
      __label__ = 11;
      break;
     case 11:
      $0 = 0;
      __label__ = 13;
      break;
     case 12:
      $0 = $36;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval14 = $retval;
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_extend($self, $bb) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $bb_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $bb_addr = $bb;
      
      
      var $3 = _array_do_extend($self_addr, $bb_addr);
      var $4 = $3 == -1;
      if ($4) {
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
      
      var $6 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $6;
      $0 = __Py_NoneStruct;
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
  function _array_insert($self, $args) {
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
      var $i = __stackBase__;
      var $v = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str30, allocate([ $i, 0, 0, 0, $v, 0, 0, 0 ], [ "i32*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$v];
      var $5 = HEAP[$i];
      
      var $7 = _ins($self_addr, $5, $4);
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
  function _array_buffer_info($self, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $0;
      var $retval1;
      $self_addr = $self;
      $unused_addr = $unused;
      $retval1 = 0;
      var $1 = _PyTuple_New(2);
      $retval1 = $1;
      
      
      if ($retval1 == 0) {
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
      
      var $5 = $retval1;
      
      
      var $8 = HEAP[$self_addr + 12];
      var $9 = _PyLong_FromVoidPtr($8);
      
      
      HEAP[$5 + 12] = $9;
      
      var $13 = $retval1;
      
      
      
      var $17 = HEAP[$self_addr + 8];
      var $18 = _PyInt_FromLong($17);
      
      
      HEAP[$13 + 12 + 4] = $18;
      
      $0 = $retval1;
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
  function _array_append($self, $v) {
    
    var $self_addr;
    var $v_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $v_addr = $v;
    
    
    
    var $4 = HEAP[$self_addr + 8];
    
    
    var $7 = _ins($self_addr, $4, $v_addr);
    $0 = $7;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _array_byteswap($self, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $0;
      var $p;
      var $i;
      var $p0;
      var $p07;
      var $p1;
      var $p012;
      var $p113;
      var $p2;
      var $p3;
      $self_addr = $self;
      $unused_addr = $unused;
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr + 20] + 4];
      if ($5 == 1) {
        __label__ = 8;
        break;
      } else if ($5 == 2) {
        __label__ = 1;
        break;
      } else if ($5 == 4) {
        __label__ = 3;
        break;
      } else if ($5 == 8) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      
      $p = HEAP[$self_addr + 12];
      
      
      
      
      $i = HEAP[$self_addr + 8];
      
      var $14 = $i - 1;
      $i = $14;
      
      if ($14 >= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 2:
      
      
      
      $p0 = HEAP[$p];
      
      
      var $21 = HEAP[$p + 1];
      
      
      HEAP[$p] = $21;
      
      
      
      HEAP[$p + 1] = $p0;
      
      var $28 = $p + 2;
      $p = $28;
      
      var $30 = $i - 1;
      $i = $30;
      
      if ($30 >= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 3:
      
      
      
      $p = HEAP[$self_addr + 12];
      
      
      
      
      $i = HEAP[$self_addr + 8];
      
      var $40 = $i - 1;
      $i = $40;
      
      if ($40 >= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      
      $p07 = HEAP[$p];
      
      
      
      $p1 = HEAP[$p + 1];
      
      
      var $50 = HEAP[$p + 3];
      
      
      HEAP[$p] = $50;
      
      
      var $55 = HEAP[$p + 2];
      
      
      HEAP[$p + 1] = $55;
      
      
      
      HEAP[$p + 2] = $p1;
      
      
      
      HEAP[$p + 3] = $p07;
      
      var $65 = $p + 4;
      $p = $65;
      
      var $67 = $i - 1;
      $i = $67;
      
      if ($67 >= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      $p = HEAP[$self_addr + 12];
      
      
      
      
      $i = HEAP[$self_addr + 8];
      
      var $77 = $i - 1;
      $i = $77;
      
      if ($77 >= 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      $p012 = HEAP[$p];
      
      
      
      $p113 = HEAP[$p + 1];
      
      
      
      $p2 = HEAP[$p + 2];
      
      
      
      $p3 = HEAP[$p + 3];
      
      
      var $93 = HEAP[$p + 7];
      
      
      HEAP[$p] = $93;
      
      
      var $98 = HEAP[$p + 6];
      
      
      HEAP[$p + 1] = $98;
      
      
      var $103 = HEAP[$p + 5];
      
      
      HEAP[$p + 2] = $103;
      
      
      var $108 = HEAP[$p + 4];
      
      
      HEAP[$p + 3] = $108;
      
      
      
      HEAP[$p + 4] = $p3;
      
      
      
      HEAP[$p + 5] = $p2;
      
      
      
      HEAP[$p + 6] = $p113;
      
      
      
      HEAP[$p + 7] = $p012;
      
      var $124 = $p + 8;
      $p = $124;
      
      var $126 = $i - 1;
      $i = $126;
      
      if ($126 >= 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $128 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($128, __str31);
      $0 = 0;
      __label__ = 9;
      break;
     case 8:
      
      var $130 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $130;
      $0 = __Py_NoneStruct;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval19 = $retval;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_reverse($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 256;
    _memset(__stackBase__, 0, 256);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $0;
      var $itemsize;
      var $p;
      var $q;
      var $tmp = __stackBase__;
      $self_addr = $self;
      $unused_addr = $unused;
      
      
      
      
      
      $itemsize = HEAP[HEAP[$self_addr + 20] + 4];
      
      
      if ($itemsize > 256) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str32, __str15, 1166, ___PRETTY_FUNCTION___10009);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      
      if (HEAP[$self_addr + 8] > 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      $p = HEAP[$self_addr + 12];
      
      
      
      
      
      
      
      
      
      
      
      $q = HEAP[$self_addr + 12] + (HEAP[$self_addr + 8] - 1) * $itemsize;
      
      
      
      if ($p < $q) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $tmp4 = $tmp;
      var $tmp5 = $tmp;
      __label__ = 5;
      break;
     case 5:
      
      
      _llvm_memcpy_p0i8_p0i8_i32($tmp4, $p, $itemsize, 1, 0);
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($p, $q, $itemsize, 1, 0);
      
      
      _llvm_memcpy_p0i8_p0i8_i32($q, $tmp5, $itemsize, 1, 0);
      
      
      var $39 = $p + $itemsize;
      $p = $39;
      
      
      
      var $43 = $q + (0 - $itemsize);
      $q = $43;
      
      
      
      if ($p < $q) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      var $48 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $48;
      $0 = __Py_NoneStruct;
      
      $retval = $0;
      var $retval8 = $retval;
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_fromfile($self, $args) {
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
      var $iftmp_222;
      var $iftmp_220;
      var $iftmp_218;
      var $iftmp_202;
      var $iftmp_200;
      var $iftmp_198;
      var $0;
      var $f = __stackBase__;
      var $n = __stackBase__ + 4;
      var $fp;
      var $item;
      var $itemsize;
      var $nread;
      var $newlength;
      var $newbytes;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str33, allocate([ $f, 0, 0, 0, $n, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$f];
      var $5 = _PyFile_AsFile($4);
      $fp = $5;
      
      
      if ($fp == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($8, __str34);
      $0 = 0;
      __label__ = 31;
      break;
     case 4:
      
      
      if (HEAP[$n] > 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 5:
      
      
      
      $item = HEAP[$self_addr + 12];
      
      
      
      
      
      $itemsize = HEAP[HEAP[$self_addr + 20] + 4];
      
      
      
      
      
      
      $newlength = HEAP[$n] + HEAP[$self_addr + 8];
      
      
      if ($newlength <= 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      $newbytes = $itemsize * $newlength;
      
      
      var $32 = Math.floor($newbytes / $itemsize);
      
      
      if ($32 != $newlength) {
        __label__ = 15;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if ($newbytes >= 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 8:
      
      
      if ($newbytes >= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      if ($newbytes != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      $iftmp_202 = $newbytes;
      __label__ = 14;
      break;
     case 11:
      $iftmp_202 = 1;
      __label__ = 14;
      break;
     case 12:
      $iftmp_200 = 0;
      $iftmp_198 = 0;
      $item = 0;
      __label__ = 15;
      break;
     case 13:
      $iftmp_198 = 0;
      $item = 0;
      __label__ = 15;
      break;
     case 14:
      
      
      var $44 = _realloc($item, $iftmp_202);
      $iftmp_200 = $44;
      $iftmp_198 = $44;
      $item = $44;
      
      if ($44 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $46 = _PyErr_NoMemory();
      $0 = 0;
      __label__ = 31;
      break;
     case 16:
      
      
      
      HEAP[$self_addr + 12] = $item;
      
      
      
      
      
      
      
      var $57 = HEAP[$n] + HEAP[$self_addr + 8];
      
      HEAP[$self_addr + 8] = $57;
      
      
      
      var $62 = HEAP[$self_addr + 8];
      
      
      HEAP[$self_addr + 16] = $62;
      var $65 = HEAP[$n];
      
      
      
      
      
      
      
      
      
      
      var $76 = $item + (HEAP[$self_addr + 8] - HEAP[$n]) * $itemsize;
      
      var $78 = _fread($76, $itemsize, $65, $fp);
      $nread = $78;
      
      
      
      if (HEAP[$n] > $nread) {
        __label__ = 17;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      
      
      
      
      
      var $90 = 0 - HEAP[$n] + HEAP[$self_addr + 8] + (0 - (0 - $nread));
      
      HEAP[$self_addr + 8] = $90;
      
      
      
      
      
      
      
      if ($itemsize * HEAP[$self_addr + 8] >= 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      if ($itemsize * HEAP[$self_addr + 8] >= 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 19:
      
      
      
      
      
      
      
      if ($itemsize * HEAP[$self_addr + 8] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      
      
      $iftmp_222 = $itemsize * HEAP[$self_addr + 8];
      __label__ = 22;
      break;
     case 21:
      $iftmp_222 = 1;
      __label__ = 22;
      break;
     case 22:
      
      
      var $121 = _realloc($item, $iftmp_222);
      $iftmp_220 = $121;
      __label__ = 24;
      break;
     case 23:
      $iftmp_220 = 0;
      __label__ = 24;
      break;
     case 24:
      
      $iftmp_218 = $iftmp_220;
      __label__ = 26;
      break;
     case 25:
      $iftmp_218 = 0;
      __label__ = 26;
      break;
     case 26:
      
      $item = $iftmp_218;
      
      
      
      HEAP[$self_addr + 12] = $item;
      
      
      
      var $130 = HEAP[$self_addr + 8];
      
      
      HEAP[$self_addr + 16] = $130;
      
      var $134 = _ferror($fp);
      
      if ($134 != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $136 = HEAP[_PyExc_IOError];
      var $137 = _PyErr_SetFromErrno($136);
      
      _clearerr($fp);
      __label__ = 29;
      break;
     case 28:
      var $139 = HEAP[_PyExc_EOFError];
      _PyErr_SetString($139, __str35);
      __label__ = 29;
      break;
     case 29:
      $0 = 0;
      __label__ = 31;
      break;
     case 30:
      
      var $141 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $141;
      $0 = __Py_NoneStruct;
      __label__ = 31;
      break;
     case 31:
      
      $retval = $0;
      var $retval32 = $retval;
      STACKTOP = __stackBase__;
      return $retval32;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_fromfile_as_read($self, $args) {
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
      
      
      if (HEAP[_Py_Py3kWarningFlag] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_DeprecationWarning];
      var $4 = _PyErr_WarnEx($3, __str36, 1);
      
      if ($4 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 4;
      break;
     case 3:
      
      
      var $8 = _array_fromfile($self_addr, $args_addr);
      $0 = $8;
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
  function _array_tofile($self, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $fp;
      $self_addr = $self;
      $f_addr = $f;
      
      var $2 = _PyFile_AsFile($f_addr);
      $fp = $2;
      
      
      if ($fp == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($5, __str37);
      $0 = 0;
      __label__ = 6;
      break;
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 8] > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $12 = HEAP[$self_addr + 8];
      
      
      
      
      var $17 = HEAP[HEAP[$self_addr + 20] + 4];
      
      
      var $20 = HEAP[$self_addr + 12];
      
      var $22 = _fwrite($20, $17, $12, $fp);
      
      
      
      
      if ($22 != HEAP[$self_addr + 8]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $27 = HEAP[_PyExc_IOError];
      var $28 = _PyErr_SetFromErrno($27);
      
      _clearerr($fp);
      $0 = 0;
      __label__ = 6;
      break;
     case 5:
      
      var $31 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $31;
      $0 = __Py_NoneStruct;
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
  function _array_tofile_as_write($self, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $f_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $f_addr = $f;
      
      
      if (HEAP[_Py_Py3kWarningFlag] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_DeprecationWarning];
      var $4 = _PyErr_WarnEx($3, __str38, 1);
      
      if ($4 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 4;
      break;
     case 3:
      
      
      var $8 = _array_tofile($self_addr, $f_addr);
      $0 = $8;
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
  function _array_fromlist($self, $list) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $list_addr;
      var $retval;
      var $iftmp_252;
      var $iftmp_250;
      var $iftmp_248;
      var $iftmp_239;
      var $iftmp_237;
      var $iftmp_235;
      var $0;
      var $n;
      var $itemsize;
      var $item;
      var $i;
      var $v;
      $self_addr = $self;
      $list_addr = $list;
      
      
      
      
      
      $itemsize = HEAP[HEAP[$self_addr + 20] + 4];
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$list_addr + 4] + 84] & 33554432) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $13 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($13, __str39);
      $0 = 0;
      __label__ = 30;
      break;
     case 2:
      
      var $15 = _PyList_Size($list_addr);
      $n = $15;
      
      
      if ($n > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 3:
      
      
      
      $item = HEAP[$self_addr + 12];
      
      
      
      
      
      
      
      
      
      if (($n + HEAP[$self_addr + 8]) * $itemsize >= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      if (($n + HEAP[$self_addr + 8]) * $itemsize >= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      if (($n + HEAP[$self_addr + 8]) * $itemsize != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      $iftmp_239 = ($n + HEAP[$self_addr + 8]) * $itemsize;
      __label__ = 10;
      break;
     case 7:
      $iftmp_239 = 1;
      __label__ = 10;
      break;
     case 8:
      $iftmp_237 = 0;
      $iftmp_235 = 0;
      $item = 0;
      __label__ = 11;
      break;
     case 9:
      $iftmp_235 = 0;
      $item = 0;
      __label__ = 11;
      break;
     case 10:
      
      
      var $58 = _realloc($item, $iftmp_239);
      $iftmp_237 = $58;
      $iftmp_235 = $58;
      $item = $58;
      
      if ($58 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $60 = _PyErr_NoMemory();
      $0 = 0;
      __label__ = 30;
      break;
     case 12:
      
      
      
      HEAP[$self_addr + 12] = $item;
      
      
      
      
      
      
      
      var $71 = $n + HEAP[$self_addr + 8];
      
      HEAP[$self_addr + 8] = $71;
      
      
      
      var $76 = HEAP[$self_addr + 8];
      
      
      HEAP[$self_addr + 16] = $76;
      $i = 0;
      __label__ = 28;
      break;
     case 13:
      
      
      var $81 = _PyList_GetItem($list_addr, $i);
      $v = $81;
      
      
      
      
      var $86 = HEAP[HEAP[$self_addr + 20] + 12];
      
      
      
      
      
      
      
      
      var $94 = 0 - $n + HEAP[$self_addr + 8] + $i;
      
      
      var $97 = FUNCTION_TABLE[$86]($self_addr, $94, $v);
      
      if ($97 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 14:
      
      
      
      
      
      
      
      var $106 = HEAP[$self_addr + 8] - $n;
      
      HEAP[$self_addr + 8] = $106;
      
      
      if ($itemsize != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      
      
      
      if (HEAP[$self_addr + 8] > (2147483647 / $itemsize | 0)) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $116 = _PyErr_NoMemory();
      $0 = $116;
      __label__ = 30;
      break;
     case 17:
      
      
      
      
      
      
      
      if ($itemsize * HEAP[$self_addr + 8] >= 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      if ($itemsize * HEAP[$self_addr + 8] >= 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 19:
      
      
      
      
      
      
      
      if ($itemsize * HEAP[$self_addr + 8] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      
      
      $iftmp_252 = $itemsize * HEAP[$self_addr + 8];
      __label__ = 22;
      break;
     case 21:
      $iftmp_252 = 1;
      __label__ = 22;
      break;
     case 22:
      
      
      var $146 = _realloc($item, $iftmp_252);
      $iftmp_250 = $146;
      __label__ = 24;
      break;
     case 23:
      $iftmp_250 = 0;
      __label__ = 24;
      break;
     case 24:
      
      $iftmp_248 = $iftmp_250;
      __label__ = 26;
      break;
     case 25:
      $iftmp_248 = 0;
      __label__ = 26;
      break;
     case 26:
      
      $item = $iftmp_248;
      
      
      
      HEAP[$self_addr + 12] = $item;
      
      
      
      var $155 = HEAP[$self_addr + 8];
      
      
      HEAP[$self_addr + 16] = $155;
      $0 = 0;
      __label__ = 30;
      break;
     case 27:
      
      var $159 = $i + 1;
      $i = $159;
      __label__ = 28;
      break;
     case 28:
      
      
      
      if ($i < $n) {
        __label__ = 13;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      var $164 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $164;
      $0 = __Py_NoneStruct;
      __label__ = 30;
      break;
     case 30:
      
      $retval = $0;
      var $retval32 = $retval;
      return $retval32;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_tolist($self, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $0;
      var $list;
      var $i;
      var $v;
      $self_addr = $self;
      $unused_addr = $unused;
      
      
      
      var $4 = HEAP[$self_addr + 8];
      var $5 = _PyList_New($4);
      $list = $5;
      
      
      if ($list == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 10;
      break;
     case 2:
      $i = 0;
      __label__ = 8;
      break;
     case 3:
      
      
      
      var $11 = _getarrayitem($self_addr, $i);
      $v = $11;
      
      
      var $14 = $list;
      if ($v == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      var $17 = HEAP[$14] - 1;
      
      
      HEAP[$list] = $17;
      
      
      
      
      if (HEAP[$list] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $28 = HEAP[HEAP[$list + 4] + 24];
      
      FUNCTION_TABLE[$28]($list);
      __label__ = 6;
      break;
     case 6:
      $0 = 0;
      __label__ = 10;
      break;
     case 7:
      
      
      var $32 = _PyList_SetItem($14, $i, $v);
      
      var $34 = $i + 1;
      $i = $34;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      
      if (HEAP[$self_addr + 8] > $i) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      $0 = $list;
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
  function _array_fromstring($self, $args) {
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
      var $iftmp_273;
      var $iftmp_270;
      var $iftmp_267;
      var $0;
      var $str = __stackBase__;
      var $n = __stackBase__ + 4;
      var $itemsize;
      var $item;
      $self_addr = $self;
      $args_addr = $args;
      
      
      
      
      
      $itemsize = HEAP[HEAP[$self_addr + 20] + 4];
      
      var $7 = __PyArg_ParseTuple_SizeT($args_addr, __str40, allocate([ $str, 0, 0, 0, $n, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
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
      
      
      
      
      if (HEAP[$n] % $itemsize != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $13 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($13, __str41);
      $0 = 0;
      __label__ = 19;
      break;
     case 4:
      
      
      var $16 = HEAP[$n] / $itemsize | 0;
      HEAP[$n] = $16;
      
      
      if (HEAP[$n] > 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 5:
      
      
      
      $item = HEAP[$self_addr + 12];
      
      
      
      
      
      
      
      if (2147483647 - HEAP[$self_addr + 8] < HEAP[$n]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      if (HEAP[$n] + HEAP[$self_addr + 8] > (2147483647 / $itemsize | 0)) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $38 = _PyErr_NoMemory();
      $0 = $38;
      __label__ = 19;
      break;
     case 8:
      
      
      
      
      
      
      
      
      
      if ((HEAP[$n] + HEAP[$self_addr + 8]) * $itemsize >= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      
      if ((HEAP[$n] + HEAP[$self_addr + 8]) * $itemsize >= 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      
      if ((HEAP[$n] + HEAP[$self_addr + 8]) * $itemsize != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      
      
      $iftmp_273 = (HEAP[$n] + HEAP[$self_addr + 8]) * $itemsize;
      __label__ = 15;
      break;
     case 12:
      $iftmp_273 = 1;
      __label__ = 15;
      break;
     case 13:
      $iftmp_270 = 0;
      $iftmp_267 = 0;
      $item = 0;
      __label__ = 16;
      break;
     case 14:
      $iftmp_267 = 0;
      $item = 0;
      __label__ = 16;
      break;
     case 15:
      
      
      var $76 = _realloc($item, $iftmp_273);
      $iftmp_270 = $76;
      $iftmp_267 = $76;
      $item = $76;
      
      if ($76 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $78 = _PyErr_NoMemory();
      $0 = 0;
      __label__ = 19;
      break;
     case 17:
      
      
      
      HEAP[$self_addr + 12] = $item;
      
      
      
      
      
      
      
      var $89 = HEAP[$n] + HEAP[$self_addr + 8];
      
      HEAP[$self_addr + 8] = $89;
      
      
      
      var $94 = HEAP[$self_addr + 8];
      
      
      HEAP[$self_addr + 16] = $94;
      
      
      var $99 = $itemsize * HEAP[$n];
      var $100 = HEAP[$str];
      
      
      
      
      
      
      
      
      
      var $110 = $item + (HEAP[$self_addr + 8] - HEAP[$n]) * $itemsize;
      _llvm_memcpy_p0i8_p0i8_i32($110, $100, $99, 1, 0);
      __label__ = 18;
      break;
     case 18:
      
      var $112 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $112;
      $0 = __Py_NoneStruct;
      __label__ = 19;
      break;
     case 19:
      
      $retval = $0;
      var $retval21 = $retval;
      STACKTOP = __stackBase__;
      return $retval21;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_tostring($self, $unused) {
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
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$self_addr + 8] <= (2147483647 / HEAP[HEAP[$self_addr + 20] + 4] | 0)) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      var $20 = HEAP[HEAP[$self_addr + 20] + 4] * HEAP[$self_addr + 8];
      
      
      var $23 = HEAP[$self_addr + 12];
      var $24 = _PyString_FromStringAndSize($23, $20);
      $0 = $24;
      __label__ = 3;
      break;
     case 2:
      var $25 = _PyErr_NoMemory();
      $0 = $25;
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
  function _array_fromunicode($self, $args) {
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
      var $iftmp_297;
      var $iftmp_294;
      var $iftmp_291;
      var $0;
      var $ustr = __stackBase__;
      var $n = __stackBase__ + 4;
      var $item;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str42, allocate([ $ustr, 0, 0, 0, $n, 0, 0, 0 ], [ "i16**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20]] != 117) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($10, __str43);
      $0 = 0;
      __label__ = 18;
      break;
     case 4:
      
      
      if (HEAP[$n] > 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 5:
      
      
      
      
      $item = HEAP[$self_addr + 12];
      
      
      
      
      
      
      
      if (HEAP[$self_addr + 8] > 2147483647 - HEAP[$n]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $24 = _PyErr_NoMemory();
      $0 = $24;
      __label__ = 18;
      break;
     case 7:
      
      
      
      
      
      
      
      if (HEAP[$n] + HEAP[$self_addr + 8] <= 1073741823) {
        __label__ = 8;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      
      if ((HEAP[$n] + HEAP[$self_addr + 8]) * 2 >= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      if ((HEAP[$n] + HEAP[$self_addr + 8]) * 2 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      $iftmp_297 = (HEAP[$n] + HEAP[$self_addr + 8]) * 2;
      __label__ = 14;
      break;
     case 11:
      $iftmp_297 = 1;
      __label__ = 14;
      break;
     case 12:
      $iftmp_294 = 0;
      $iftmp_291 = 0;
      $item = 0;
      __label__ = 15;
      break;
     case 13:
      $iftmp_291 = 0;
      $item = 0;
      __label__ = 15;
      break;
     case 14:
      
      
      
      var $58 = _realloc($item, $iftmp_297);
      var $59 = $58;
      $iftmp_294 = $59;
      $iftmp_291 = $59;
      $item = $59;
      
      if ($59 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $61 = _PyErr_NoMemory();
      $0 = 0;
      __label__ = 18;
      break;
     case 16:
      
      
      
      
      HEAP[$self_addr + 12] = $item;
      
      
      
      
      
      
      
      var $73 = HEAP[$n] + HEAP[$self_addr + 8];
      
      HEAP[$self_addr + 8] = $73;
      
      
      
      var $78 = HEAP[$self_addr + 8];
      
      
      HEAP[$self_addr + 16] = $78;
      
      var $82 = HEAP[$n] * 2;
      
      
      
      
      
      
      
      
      
      
      var $93 = $item + 2 * HEAP[$self_addr + 8] + 2 * (0 - HEAP[$n]);
      var $94 = HEAP[$ustr];
      _llvm_memcpy_p0i8_p0i8_i32($93, $94, $82, 1, 0);
      __label__ = 17;
      break;
     case 17:
      
      var $96 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $96;
      $0 = __Py_NoneStruct;
      __label__ = 18;
      break;
     case 18:
      
      $retval = $0;
      var $retval20 = $retval;
      STACKTOP = __stackBase__;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_tounicode($self, $unused) {
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
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20]] != 117) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($7, __str44);
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      
      var $11 = HEAP[$self_addr + 8];
      
      
      
      var $15 = HEAP[$self_addr + 12];
      var $16 = _PyUnicodeUCS2_FromUnicode($15, $11);
      $0 = $16;
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
  function _array_reduce($array) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $array_addr;
      var $retval;
      var $0;
      var $dict;
      var $result;
      var $list;
      $array_addr = $array;
      
      
      var $3 = _PyObject_GetAttrString($array_addr, __str45);
      $dict = $3;
      
      
      if ($dict == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $6 = HEAP[_PyExc_AttributeError];
      var $7 = _PyErr_ExceptionMatches($6);
      
      if ($7 == 0) {
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
      _PyErr_Clear();
      $dict = __Py_NoneStruct;
      
      
      
      var $12 = HEAP[$dict] + 1;
      
      
      HEAP[$dict] = $12;
      __label__ = 4;
      break;
     case 4:
      
      var $16 = _array_tolist($array_addr, 0);
      $list = $16;
      
      if ($16 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $21 = HEAP[$dict] - 1;
      
      
      HEAP[$dict] = $21;
      
      
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $32 = HEAP[HEAP[$dict + 4] + 24];
      
      FUNCTION_TABLE[$32]($dict);
      __label__ = 7;
      break;
     case 7:
      $0 = 0;
      __label__ = 13;
      break;
     case 8:
      
      
      
      
      var $38 = HEAP[HEAP[$array_addr + 20]];
      
      
      
      var $42 = HEAP[$array_addr + 4];
      
      
      var $45 = __Py_BuildValue_SizeT(__str46, allocate([ $42, 0, 0, 0, $38, 0, 0, 0, $list, 0, 0, 0, $dict, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $result = $45;
      
      
      
      var $49 = HEAP[$list] - 1;
      
      
      HEAP[$list] = $49;
      
      
      
      
      if (HEAP[$list] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $60 = HEAP[HEAP[$list + 4] + 24];
      
      FUNCTION_TABLE[$60]($list);
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $65 = HEAP[$dict] - 1;
      
      
      HEAP[$dict] = $65;
      
      
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $76 = HEAP[HEAP[$dict + 4] + 24];
      
      FUNCTION_TABLE[$76]($dict);
      __label__ = 12;
      break;
     case 12:
      
      $0 = $result;
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
  function _array_get_typecode($a, $closure) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1;
    _memset(__stackBase__, 0, 1);
    
    var $a_addr;
    var $closure_addr;
    var $retval;
    var $0;
    var $tc = __stackBase__;
    $a_addr = $a;
    $closure_addr = $closure;
    
    
    
    
    
    var $6 = HEAP[HEAP[$a_addr + 20]] & 255;
    HEAP[$tc] = $6;
    var $7 = _PyString_FromStringAndSize($tc, 1);
    $0 = $7;
    
    $retval = $0;
    var $retval1 = $retval;
    STACKTOP = __stackBase__;
    return $retval1;
  }
  function _array_get_itemsize($a, $closure) {
    
    var $a_addr;
    var $closure_addr;
    var $retval;
    var $0;
    $a_addr = $a;
    $closure_addr = $closure;
    
    
    
    
    var $5 = HEAP[HEAP[$a_addr + 20] + 4];
    var $6 = _PyInt_FromLong($5);
    $0 = $6;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _array_repr($a) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 260;
    _memset(__stackBase__, 0, 260);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $a_addr;
      var $retval;
      var $0;
      var $buf = __stackBase__;
      var $typecode;
      var $s = __stackBase__ + 256;
      var $t;
      var $v;
      var $len;
      $a_addr = $a;
      $v = 0;
      
      
      
      
      $len = HEAP[$a_addr + 8];
      
      
      
      
      
      
      $typecode = HEAP[HEAP[$a_addr + 20]] & 255;
      
      
      var $13 = $typecode;
      if ($len == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $buf1 = $buf;
      var $15 = _PyOS_snprintf($buf1, 256, __str74, allocate([ $13, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      var $buf2 = $buf;
      var $16 = _PyString_FromString($buf2);
      $0 = $16;
      __label__ = 11;
      break;
     case 2:
      
      if ($13 == 99) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $19 = _array_tostring($a_addr, 0);
      $v = $19;
      __label__ = 7;
      break;
     case 4:
      
      
      var $22 = $a_addr;
      if ($typecode == 117) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $23 = _array_tounicode($22, 0);
      $v = $23;
      __label__ = 7;
      break;
     case 6:
      var $24 = _array_tolist($22, 0);
      $v = $24;
      __label__ = 7;
      break;
     case 7:
      
      var $26 = _PyObject_Repr($v);
      $t = $26;
      
      
      if ($v != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      var $32 = HEAP[$v] - 1;
      
      
      HEAP[$v] = $32;
      
      
      
      
      if (HEAP[$v] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $43 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$43]($v);
      __label__ = 10;
      break;
     case 10:
      
      
      var $buf12 = $buf;
      var $47 = _PyOS_snprintf($buf12, 256, __str75, allocate([ $typecode, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      var $buf13 = $buf;
      var $48 = _PyString_FromString($buf13);
      HEAP[$s] = $48;
      
      _PyString_ConcatAndDel($s, $t);
      var $50 = _PyString_FromString(__str76);
      _PyString_ConcatAndDel($s, $50);
      
      $0 = HEAP[$s];
      __label__ = 11;
      break;
     case 11:
      
      $retval = $0;
      var $retval15 = $retval;
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_subscr($self, $item) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $item_addr;
      var $retval;
      var $0;
      var $i;
      var $start = __stackBase__;
      var $stop = __stackBase__ + 4;
      var $step = __stackBase__ + 8;
      var $slicelength = __stackBase__ + 12;
      var $cur;
      var $i10;
      var $result;
      var $ar;
      var $itemsize;
      var $result16;
      $self_addr = $self;
      $item_addr = $item;
      
      
      
      
      
      
      if (HEAP[HEAP[$item_addr + 4] + 48] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$item_addr + 4] + 84] & 131072) == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$item_addr + 4] + 48] + 152] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $22 = HEAP[_PyExc_IndexError];
      
      var $24 = _PyNumber_AsSsize_t($item_addr, $22);
      $i = $24;
      var $25 = $i;
      var $26 = $25 == -1;
      if ($26) {
        __lastLabel__ = 3;
        __label__ = 4;
        break;
      } else {
        __lastLabel__ = 3;
        __label__ = 7;
        break;
      }
     case 4:
      var $27 = _PyErr_Occurred();
      
      if ($27 != 0) {
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
      var $_pr = $i;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $29 = __lastLabel__ == 6 ? $_pr : $25;
      
      if ($29 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $36 = $i + HEAP[$self_addr + 8];
      $i = $36;
      __label__ = 9;
      break;
     case 9:
      
      
      var $39 = _array_item($self_addr, $i);
      $0 = $39;
      __label__ = 25;
      break;
     case 10:
      
      
      
      
      if (HEAP[$item_addr + 4] == _PySlice_Type) {
        __label__ = 11;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 11:
      
      
      
      
      
      $itemsize = HEAP[HEAP[$self_addr + 20] + 4];
      
      
      
      var $52 = HEAP[$self_addr + 8];
      
      
      var $55 = _PySlice_GetIndicesEx($item_addr, $52, $start, $stop, $step, $slicelength);
      
      if ($55 < 0) {
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
      
      
      if (HEAP[$slicelength] <= 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      var $61 = HEAP[$self_addr + 20];
      var $62 = _newarrayobject(_Arraytype, 0, $61);
      $0 = $62;
      __label__ = 25;
      break;
     case 15:
      
      var $64 = HEAP[$step] == 1;
      
      
      var $67 = HEAP[$self_addr + 20];
      var $68 = HEAP[$slicelength];
      var $69 = _newarrayobject(_Arraytype, $68, $67);
      if ($64) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      $result16 = $69;
      
      
      if ($result16 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      $0 = 0;
      __label__ = 25;
      break;
     case 18:
      
      
      var $74 = $itemsize * HEAP[$slicelength];
      
      
      
      
      
      
      var $81 = HEAP[$self_addr + 12] + $itemsize * HEAP[$start];
      
      
      
      var $85 = HEAP[$result16 + 12];
      _llvm_memcpy_p0i8_p0i8_i32($85, $81, $74, 1, 0);
      
      $0 = $result16;
      __label__ = 25;
      break;
     case 19:
      $result = $69;
      
      
      if ($result == 0) {
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
      
      
      $ar = $result;
      
      $cur = HEAP[$start];
      $i10 = 0;
      
      
      
      if ($i10 < HEAP[$slicelength]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      
      
      
      var $102 = HEAP[$self_addr + 12] + $itemsize * $cur;
      
      
      
      
      
      
      var $109 = HEAP[$ar + 12] + $itemsize * $i10;
      _llvm_memcpy_p0i8_p0i8_i32($109, $102, $itemsize, 1, 0);
      
      
      var $112 = $cur + HEAP[$step];
      $cur = $112;
      
      var $114 = $i10 + 1;
      $i10 = $114;
      
      
      
      if ($i10 < HEAP[$slicelength]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      $0 = $result;
      __label__ = 25;
      break;
     case 24:
      var $119 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($119, __str77);
      $0 = 0;
      __label__ = 25;
      break;
     case 25:
      
      $retval = $0;
      var $retval27 = $retval;
      STACKTOP = __stackBase__;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_ass_subscr($self, $item, $value) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $item_addr;
      var $value_addr;
      var $retval;
      var $0;
      var $start = __stackBase__;
      var $stop = __stackBase__ + 4;
      var $step = __stackBase__ + 8;
      var $slicelength = __stackBase__ + 12;
      var $needed;
      var $other;
      var $itemsize;
      var $i;
      var $ret;
      var $cur;
      var $i51;
      var $lim;
      var $cur64;
      var $i65;
      $self_addr = $self;
      $item_addr = $item;
      $value_addr = $value;
      
      
      
      
      
      
      if (HEAP[HEAP[$item_addr + 4] + 48] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$item_addr + 4] + 84] & 131072) == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$item_addr + 4] + 48] + 152] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $22 = HEAP[_PyExc_IndexError];
      
      var $24 = _PyNumber_AsSsize_t($item_addr, $22);
      $i = $24;
      var $25 = $i;
      var $26 = $25 == -1;
      if ($26) {
        __lastLabel__ = 3;
        __label__ = 4;
        break;
      } else {
        __lastLabel__ = 3;
        __label__ = 7;
        break;
      }
     case 4:
      var $27 = _PyErr_Occurred();
      
      if ($27 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 68;
      break;
     case 6:
      var $_pr = $i;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $29 = __lastLabel__ == 6 ? $_pr : $25;
      
      if ($29 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $36 = $i + HEAP[$self_addr + 8];
      $i = $36;
      __lastLabel__ = 8;
      __label__ = 10;
      break;
     case 9:
      var $_pr1 = $i;
      __lastLabel__ = 9;
      __label__ = 10;
      break;
     case 10:
      var $37 = __lastLabel__ == 9 ? $_pr1 : $36;
      
      if ($37 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      
      if (HEAP[$self_addr + 8] <= $i) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $45 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($45, __str21);
      $0 = -1;
      __label__ = 68;
      break;
     case 13:
      
      
      if ($value_addr == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      HEAP[$start] = $i;
      
      
      HEAP[$stop] = $i + 1;
      HEAP[$step] = 1;
      HEAP[$slicelength] = 1;
      __label__ = 20;
      break;
     case 15:
      
      
      
      
      var $55 = HEAP[HEAP[$self_addr + 20] + 12];
      
      
      
      var $59 = FUNCTION_TABLE[$55]($self_addr, $i, $value_addr);
      $0 = $59;
      __label__ = 68;
      break;
     case 16:
      
      
      
      
      if (HEAP[$item_addr + 4] == _PySlice_Type) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      var $67 = HEAP[$self_addr + 8];
      
      
      var $70 = _PySlice_GetIndicesEx($item_addr, $67, $start, $stop, $step, $slicelength);
      
      if ($70 < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      $0 = -1;
      __label__ = 68;
      break;
     case 19:
      var $72 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($72, __str78);
      $0 = -1;
      __label__ = 68;
      break;
     case 20:
      
      
      if ($value_addr == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      $other = 0;
      $needed = 0;
      __label__ = 33;
      break;
     case 22:
      
      
      
      
      if (HEAP[$value_addr + 4] == _Arraytype) {
        __label__ = 24;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      var $81 = HEAP[$value_addr + 4];
      var $82 = _PyType_IsSubtype($81, _Arraytype);
      
      if ($82 != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 24:
      
      
      $other = $value_addr;
      
      
      
      
      $needed = HEAP[$other + 8];
      
      
      
      var $93 = $other;
      if ($self_addr == $other) {
        __label__ = 25;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 25:
      
      var $95 = _array_slice($93, 0, $needed);
      $value_addr = $95;
      
      
      if ($value_addr == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      $0 = -1;
      __label__ = 68;
      break;
     case 27:
      
      
      
      var $101 = _array_ass_subscr($self_addr, $item_addr, $value_addr);
      $ret = $101;
      
      
      
      var $105 = HEAP[$value_addr] - 1;
      
      
      HEAP[$value_addr] = $105;
      
      
      
      
      if (HEAP[$value_addr] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $116 = HEAP[HEAP[$value_addr + 4] + 24];
      
      FUNCTION_TABLE[$116]($value_addr);
      __label__ = 29;
      break;
     case 29:
      
      $0 = $ret;
      __label__ = 68;
      break;
     case 30:
      
      
      
      
      
      
      if (HEAP[$93 + 20] != HEAP[$self_addr + 20]) {
        __label__ = 31;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 31:
      var $125 = _PyErr_BadArgument();
      $0 = -1;
      __label__ = 68;
      break;
     case 32:
      
      
      
      
      var $130 = HEAP[HEAP[$value_addr + 4] + 12];
      var $131 = HEAP[_PyExc_TypeError];
      var $132 = _PyErr_Format($131, __str20, allocate([ $130, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
      __label__ = 68;
      break;
     case 33:
      
      
      
      
      
      $itemsize = HEAP[HEAP[$self_addr + 20] + 4];
      var $138 = HEAP[$step];
      
      if ($138 <= 0) {
        __lastLabel__ = 33;
        __label__ = 36;
        break;
      } else {
        __lastLabel__ = 33;
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      if (HEAP[$stop] < HEAP[$start]) {
        __label__ = 38;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      var $_pr2 = HEAP[$step];
      __lastLabel__ = 35;
      __label__ = 36;
      break;
     case 36:
      var $143 = __lastLabel__ == 35 ? $_pr2 : $138;
      
      if ($143 >= 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      
      if (HEAP[$stop] > HEAP[$start]) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      var $148 = HEAP[$start];
      HEAP[$stop] = $148;
      __label__ = 39;
      break;
     case 39:
      
      
      if (HEAP[$step] == 1) {
        __label__ = 40;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 40:
      
      
      
      if (HEAP[$slicelength] > $needed) {
        __label__ = 41;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 41:
      
      
      
      
      
      
      
      var $161 = (HEAP[$self_addr + 8] - HEAP[$stop]) * $itemsize;
      
      
      
      
      
      
      var $168 = HEAP[$self_addr + 12] + $itemsize * HEAP[$stop];
      
      
      
      
      
      
      
      
      var $177 = HEAP[$self_addr + 12] + ($needed + HEAP[$start]) * $itemsize;
      _llvm_memmove_p0i8_p0i8_i32($177, $168, $161, 1, 0);
      
      
      
      
      
      
      
      
      var $185 = $needed + HEAP[$self_addr + 8] + (0 - HEAP[$slicelength]);
      
      var $187 = _array_resize($self_addr, $185);
      
      if ($187 < 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 42:
      $0 = -1;
      __label__ = 68;
      break;
     case 43:
      
      var $190 = $needed;
      
      if (HEAP[$slicelength] < $190) {
        __lastLabel__ = 43;
        __label__ = 44;
        break;
      } else {
        __lastLabel__ = 43;
        __label__ = 48;
        break;
      }
     case 44:
      
      
      
      
      
      
      
      
      var $199 = $needed + HEAP[$self_addr + 8] + (0 - HEAP[$slicelength]);
      
      var $201 = _array_resize($self_addr, $199);
      
      if ($201 < 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      $0 = -1;
      __label__ = 68;
      break;
     case 46:
      
      
      
      
      
      
      
      
      
      
      
      var $212 = (0 - HEAP[$start] + HEAP[$self_addr + 8] + (0 - $needed)) * $itemsize;
      
      
      
      
      
      
      var $219 = HEAP[$self_addr + 12] + $itemsize * HEAP[$stop];
      
      
      
      
      
      
      
      
      var $228 = HEAP[$self_addr + 12] + ($needed + HEAP[$start]) * $itemsize;
      _llvm_memmove_p0i8_p0i8_i32($228, $219, $212, 1, 0);
      __label__ = 47;
      break;
     case 47:
      var $_pr3 = $needed;
      __lastLabel__ = 47;
      __label__ = 48;
      break;
     case 48:
      var $229 = __lastLabel__ == 47 ? $_pr3 : $190;
      
      if ($229 > 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      
      
      
      var $236 = HEAP[$other + 12];
      
      
      
      
      
      
      var $243 = HEAP[$self_addr + 12] + $itemsize * HEAP[$start];
      _llvm_memcpy_p0i8_p0i8_i32($243, $236, $itemsize * $needed, 1, 0);
      __label__ = 50;
      break;
     case 50:
      $0 = 0;
      __label__ = 68;
      break;
     case 51:
      
      
      if ($needed == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 52:
      
      
      if (HEAP[$step] < 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      
      var $249 = HEAP[$start] + 1;
      HEAP[$stop] = $249;
      
      
      
      
      
      var $255 = HEAP[$stop] + -1;
      var $256 = $255 + (HEAP[$slicelength] - 1) * HEAP[$step];
      HEAP[$start] = $256;
      
      var $258 = 0 - HEAP[$step];
      HEAP[$step] = $258;
      __label__ = 54;
      break;
     case 54:
      
      $cur = HEAP[$start];
      $i51 = 0;
      
      
      
      if ($i51 < HEAP[$slicelength]) {
        __label__ = 55;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 55:
      
      
      $lim = HEAP[$step] - 1;
      
      
      
      
      
      
      
      
      if ($cur + HEAP[$step] >= HEAP[$self_addr + 8]) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      
      
      
      
      
      
      var $278 = HEAP[$self_addr + 8] + -1;
      
      $lim = $278 + (0 - $cur);
      __label__ = 57;
      break;
     case 57:
      
      
      
      
      
      
      
      
      
      
      var $290 = HEAP[$self_addr + 12] + ($cur + 1) * $itemsize;
      
      
      
      
      
      
      
      
      var $299 = HEAP[$self_addr + 12] + ($cur - $i51) * $itemsize;
      _llvm_memmove_p0i8_p0i8_i32($299, $290, $itemsize * $lim, 1, 0);
      
      
      var $302 = $cur + HEAP[$step];
      $cur = $302;
      
      var $304 = $i51 + 1;
      $i51 = $304;
      
      
      
      if ($i51 < HEAP[$slicelength]) {
        __label__ = 55;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 58:
      
      
      
      
      
      $cur = HEAP[$step] * HEAP[$slicelength] + HEAP[$start];
      
      
      
      
      
      
      if (HEAP[$self_addr + 8] > $cur) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      
      
      
      
      
      
      
      var $326 = (HEAP[$self_addr + 8] - $cur) * $itemsize;
      
      
      
      
      
      
      var $333 = HEAP[$self_addr + 12] + $cur * $itemsize;
      
      
      
      
      
      
      
      
      var $342 = HEAP[$self_addr + 12] + ($cur - HEAP[$slicelength]) * $itemsize;
      _llvm_memmove_p0i8_p0i8_i32($342, $333, $326, 1, 0);
      __label__ = 60;
      break;
     case 60:
      
      
      
      
      
      var $348 = HEAP[$self_addr + 8] - HEAP[$slicelength];
      
      var $350 = _array_resize($self_addr, $348);
      
      if ($350 < 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      $0 = -1;
      __label__ = 68;
      break;
     case 62:
      $0 = 0;
      __label__ = 68;
      break;
     case 63:
      
      
      
      if ($needed != HEAP[$slicelength]) {
        __label__ = 64;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 64:
      var $355 = HEAP[$slicelength];
      var $356 = HEAP[_PyExc_ValueError];
      
      var $358 = _PyErr_Format($356, __str79, allocate([ $needed, 0, 0, 0, $355, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
      __label__ = 68;
      break;
     case 65:
      
      $cur64 = HEAP[$start];
      $i65 = 0;
      
      
      
      if ($i65 < HEAP[$slicelength]) {
        __label__ = 66;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 66:
      
      
      
      
      
      
      
      var $370 = HEAP[$other + 12] + $itemsize * $i65;
      
      
      
      
      
      
      var $377 = HEAP[$self_addr + 12] + $itemsize * $cur64;
      _llvm_memcpy_p0i8_p0i8_i32($377, $370, $itemsize, 1, 0);
      
      
      var $380 = $cur64 + HEAP[$step];
      $cur64 = $380;
      
      var $382 = $i65 + 1;
      $i65 = $382;
      
      
      
      if ($i65 < HEAP[$slicelength]) {
        __label__ = 66;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 67:
      $0 = 0;
      __label__ = 68;
      break;
     case 68:
      
      $retval = $0;
      var $retval72 = $retval;
      STACKTOP = __stackBase__;
      return $retval72;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_buffer_getreadbuf($self, $index, $ptr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $index_addr;
      var $ptr_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $index_addr = $index;
      $ptr_addr = $ptr;
      
      
      if ($index_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_SystemError];
      _PyErr_SetString($3, __str81);
      $0 = -1;
      __label__ = 5;
      break;
     case 2:
      
      
      var $6 = HEAP[$self_addr + 12];
      
      HEAP[$ptr_addr] = $6;
      
      
      
      if (HEAP[$ptr_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      HEAP[$ptr_addr] = __str80;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      
      
      
      
      
      $0 = HEAP[HEAP[$self_addr + 20] + 4] * HEAP[$self_addr + 8];
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
  function _array_buffer_getwritebuf($self, $index, $ptr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $index_addr;
      var $ptr_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $index_addr = $index;
      $ptr_addr = $ptr;
      
      
      if ($index_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_SystemError];
      _PyErr_SetString($3, __str81);
      $0 = -1;
      __label__ = 5;
      break;
     case 2:
      
      
      var $6 = HEAP[$self_addr + 12];
      
      HEAP[$ptr_addr] = $6;
      
      
      
      if (HEAP[$ptr_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      HEAP[$ptr_addr] = __str80;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      
      
      
      
      
      $0 = HEAP[HEAP[$self_addr + 20] + 4] * HEAP[$self_addr + 8];
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
  function _array_buffer_getsegcount($self, $lenp) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $lenp_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $lenp_addr = $lenp;
      
      
      if ($lenp_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      var $12 = HEAP[HEAP[$self_addr + 20] + 4] * HEAP[$self_addr + 8];
      
      HEAP[$lenp_addr] = $12;
      __label__ = 2;
      break;
     case 2:
      $0 = 1;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 5;
    _memset(__stackBase__, 0, 5);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $c = __stackBase__;
      var $initial = __stackBase__ + 1;
      var $it;
      var $descr;
      var $a;
      var $len;
      var $i;
      var $v;
      var $t_initial;
      var $v42;
      var $n;
      var $self;
      var $item;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      HEAP[$initial] = 0;
      $it = 0;
      
      
      if ($type_addr == _Arraytype) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $4 = __PyArg_NoKeywords(__str82, $kwds_addr);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 74;
      break;
     case 3:
      
      var $7 = __PyArg_ParseTuple_SizeT($args_addr, __str83, allocate([ $c, 0, 0, 0, $initial, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 74;
      break;
     case 5:
      
      
      if (HEAP[$initial] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$initial] + 4] + 84] & 33554432) == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$initial] + 4] + 84] & 134217728) == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$initial] + 4] + 84] & 67108864) == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 9:
      
      
      if (HEAP[$c] != 117) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$initial] + 4] + 84] & 268435456) == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      var $41 = HEAP[$initial];
      var $42 = _PyObject_GetIter($41);
      $it = $42;
      
      if ($42 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = 0;
      __label__ = 74;
      break;
     case 13:
      HEAP[$initial] = 0;
      __label__ = 14;
      break;
     case 14:
      $descr = _descriptors;
      __label__ = 72;
      break;
     case 15:
      
      
      
      
      
      
      if (HEAP[$descr] == HEAP[$c]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 16:
      
      
      if (HEAP[$initial] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$initial] + 4] + 84] & 33554432) != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$initial] + 4] + 84] & 67108864) == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      $len = 0;
      __label__ = 21;
      break;
     case 20:
      var $66 = HEAP[$initial];
      var $67 = _PySequence_Size($66);
      $len = $67;
      __label__ = 21;
      break;
     case 21:
      
      
      
      var $71 = _newarrayobject($type_addr, $len, $descr);
      $a = $71;
      
      if ($71 == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      $0 = 0;
      __label__ = 74;
      break;
     case 23:
      
      
      if ($len > 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 24:
      $i = 0;
      __label__ = 38;
      break;
     case 25:
      var $75 = HEAP[$initial];
      
      var $77 = _PySequence_GetItem($75, $i);
      $v = $77;
      
      
      var $80 = $a;
      if ($v == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 26:
      
      
      var $83 = HEAP[$80] - 1;
      
      
      HEAP[$a] = $83;
      
      
      
      
      if (HEAP[$a] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $94 = HEAP[HEAP[$a + 4] + 24];
      
      FUNCTION_TABLE[$94]($a);
      __label__ = 28;
      break;
     case 28:
      $0 = 0;
      __label__ = 74;
      break;
     case 29:
      
      
      var $98 = _setarrayitem($80, $i, $v);
      var $99 = $98 != 0;
      
      
      
      var $103 = HEAP[$v] - 1;
      
      
      HEAP[$v] = $103;
      
      
      
      var $109 = HEAP[$v] == 0;
      if ($99) {
        __label__ = 30;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 30:
      if ($109) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $114 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$114]($v);
      __label__ = 32;
      break;
     case 32:
      
      
      
      var $119 = HEAP[$a] - 1;
      
      
      HEAP[$a] = $119;
      
      
      
      
      if (HEAP[$a] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $130 = HEAP[HEAP[$a + 4] + 24];
      
      FUNCTION_TABLE[$130]($a);
      __label__ = 34;
      break;
     case 34:
      $0 = 0;
      __label__ = 74;
      break;
     case 35:
      if ($109) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      var $136 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$136]($v);
      __label__ = 37;
      break;
     case 37:
      
      var $139 = $i + 1;
      $i = $139;
      __label__ = 38;
      break;
     case 38:
      
      
      
      if ($i < $len) {
        __label__ = 25;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 39:
      
      
      if (HEAP[$initial] == 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      
      
      
      
      
      
      
      var $_pr = HEAP[$initial];
      if ((HEAP[HEAP[HEAP[$initial] + 4] + 84] & 134217728) == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 41:
      var $152 = _PyTuple_Pack(1, allocate([ $_pr, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $t_initial = $152;
      
      
      var $155 = $a;
      if ($t_initial == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 42:
      
      
      var $158 = HEAP[$155] - 1;
      
      
      HEAP[$a] = $158;
      
      
      
      
      if (HEAP[$a] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      
      
      var $169 = HEAP[HEAP[$a + 4] + 24];
      
      FUNCTION_TABLE[$169]($a);
      __label__ = 44;
      break;
     case 44:
      $0 = 0;
      __label__ = 74;
      break;
     case 45:
      
      
      var $173 = _array_fromstring($155, $t_initial);
      $v42 = $173;
      
      
      
      var $177 = HEAP[$t_initial] - 1;
      
      
      HEAP[$t_initial] = $177;
      
      
      
      
      if (HEAP[$t_initial] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      
      
      var $188 = HEAP[HEAP[$t_initial + 4] + 24];
      
      FUNCTION_TABLE[$188]($t_initial);
      __label__ = 47;
      break;
     case 47:
      
      
      if ($v42 == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 48:
      
      
      
      var $195 = HEAP[$a] - 1;
      
      
      HEAP[$a] = $195;
      
      
      
      
      if (HEAP[$a] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      
      
      var $206 = HEAP[HEAP[$a + 4] + 24];
      
      FUNCTION_TABLE[$206]($a);
      __label__ = 50;
      break;
     case 50:
      $0 = 0;
      __label__ = 74;
      break;
     case 51:
      
      
      
      var $211 = HEAP[$v42] - 1;
      
      
      HEAP[$v42] = $211;
      
      
      
      
      if (HEAP[$v42] == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 52:
      
      
      
      
      var $222 = HEAP[HEAP[$v42 + 4] + 24];
      
      FUNCTION_TABLE[$222]($v42);
      __label__ = 61;
      break;
     case 53:
      
      if ($_pr != 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 54:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$initial] + 4] + 84] & 268435456) != 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 55:
      
      
      
      
      
      $n = HEAP[HEAP[$initial] + 8] * 2;
      
      
      if ($n > 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 56:
      
      
      $self = $a;
      
      
      
      $item = HEAP[$self + 12];
      
      
      var $246 = _PyMem_Realloc($item, $n);
      $item = $246;
      
      
      if ($item == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 57:
      var $249 = _PyErr_NoMemory();
      
      
      
      var $253 = HEAP[$a] - 1;
      
      
      HEAP[$a] = $253;
      
      
      
      
      if (HEAP[$a] == 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 58:
      
      
      
      
      var $264 = HEAP[HEAP[$a + 4] + 24];
      
      FUNCTION_TABLE[$264]($a);
      __label__ = 59;
      break;
     case 59:
      $0 = 0;
      __label__ = 74;
      break;
     case 60:
      
      
      
      HEAP[$self + 12] = $item;
      
      var $270 = $self;
      
      var $272 = Math.floor($n / 2);
      
      HEAP[$270 + 8] = $272;
      
      
      
      
      
      
      var $280 = HEAP[HEAP[$initial] + 12];
      _llvm_memcpy_p0i8_p0i8_i32($item, $280, $n, 1, 0);
      
      
      
      var $284 = HEAP[$self + 8];
      
      
      HEAP[$self + 16] = $284;
      __label__ = 61;
      break;
     case 61:
      
      
      if ($it != 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 62:
      
      
      
      var $292 = _array_iter_extend($a, $it);
      var $293 = $292 == -1;
      
      
      
      var $297 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $297;
      
      
      
      var $303 = HEAP[$it] == 0;
      if ($293) {
        __label__ = 63;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 63:
      if ($303) {
        __label__ = 64;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 64:
      
      
      
      
      var $308 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$308]($it);
      __label__ = 65;
      break;
     case 65:
      
      
      
      var $313 = HEAP[$a] - 1;
      
      
      HEAP[$a] = $313;
      
      
      
      
      if (HEAP[$a] == 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 66:
      
      
      
      
      var $324 = HEAP[HEAP[$a + 4] + 24];
      
      FUNCTION_TABLE[$324]($a);
      __label__ = 67;
      break;
     case 67:
      $0 = 0;
      __label__ = 74;
      break;
     case 68:
      if ($303) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      
      
      
      
      var $330 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$330]($it);
      __label__ = 70;
      break;
     case 70:
      
      $0 = $a;
      __label__ = 74;
      break;
     case 71:
      
      var $334 = $descr + 16;
      $descr = $334;
      __label__ = 72;
      break;
     case 72:
      
      
      
      
      if (HEAP[$descr] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 73:
      var $339 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($339, __str84);
      $0 = 0;
      __label__ = 74;
      break;
     case 74:
      
      $retval = $0;
      var $retval77 = $retval;
      STACKTOP = __stackBase__;
      return $retval77;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _array_iter($ao) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ao_addr;
      var $retval;
      var $0;
      var $it;
      $ao_addr = $ao;
      
      
      
      
      
      if (HEAP[$ao_addr + 4] != _Arraytype) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[$ao_addr + 4];
      var $10 = _PyType_IsSubtype($9, _Arraytype);
      
      if ($10 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      __PyErr_BadInternalCall(__str15, 2149);
      $0 = 0;
      __label__ = 6;
      break;
     case 3:
      var $12 = __PyObject_GC_New(_PyArrayIter_Type);
      
      $it = $12;
      
      if ($12 == 0) {
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
      
      
      
      
      var $19 = HEAP[$ao_addr] + 1;
      
      HEAP[$ao_addr] = $19;
      
      
      
      HEAP[$it + 12] = $ao_addr;
      
      
      HEAP[$it + 8] = 0;
      
      
      
      
      var $30 = HEAP[HEAP[$ao_addr + 20] + 8];
      
      
      HEAP[$it + 16] = $30;
      
      
      _PyObject_GC_Track($it);
      
      
      $0 = $it;
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
  function _arrayiter_next($it) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $it_addr;
      var $retval;
      var $0;
      $it_addr = $it;
      
      
      
      
      
      if (HEAP[$it_addr + 4] != _PyArrayIter_Type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[$it_addr + 4];
      var $10 = _PyType_IsSubtype($9, _PyArrayIter_Type);
      
      if ($10 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str86, __str15, 2168, ___PRETTY_FUNCTION___11388);
      throw "Reached an unreachable!";
     case 3:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$it_addr + 8] < HEAP[HEAP[$it_addr + 12] + 8]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $24 = HEAP[$it_addr + 16];
      
      
      var $27 = HEAP[$it_addr + 8];
      var $28 = $27 + 1;
      
      
      HEAP[$it_addr + 8] = $28;
      
      
      var $33 = HEAP[$it_addr + 12];
      var $34 = FUNCTION_TABLE[$24]($33, $27);
      $0 = $34;
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
  function _arrayiter_dealloc($it) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $it_addr;
      $it_addr = $it;
      
      
      _PyObject_GC_UnTrack($it_addr);
      
      
      
      
      if (HEAP[$it_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[$it_addr + 12];
      
      
      var $12 = HEAP[$9] - 1;
      var $13 = $9;
      HEAP[$13] = $12;
      
      
      
      if (HEAP[$9] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[$it_addr + 12] + 4] + 24];
      
      
      
      var $28 = HEAP[$it_addr + 12];
      FUNCTION_TABLE[$24]($28);
      __label__ = 3;
      break;
     case 3:
      
      
      _PyObject_GC_Del($it_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _arrayiter_traverse($it, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $it_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      $it_addr = $it;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$it_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[$it_addr + 12];
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
  function _initarray() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      HEAP[_Arraytype + 4] = _PyType_Type;
      HEAP[_PyArrayIter_Type + 4] = _PyType_Type;
      var $0 = _Py_InitModule4(__str88, _a_methods, _module_doc, 0, 1013);
      $m = $0;
      
      
      if ($m == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $4 = HEAP[_Arraytype] + 1;
      HEAP[_Arraytype] = $4;
      
      var $6 = _PyModule_AddObject($m, __str89, _Arraytype);
      
      var $8 = HEAP[_Arraytype] + 1;
      HEAP[_Arraytype] = $8;
      
      var $10 = _PyModule_AddObject($m, __str88, _Arraytype);
      __label__ = 2;
      break;
     case 2:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initarray"] = _initarray;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _c_getitem, 0, _c_setitem, 0, _b_getitem, 0, _b_setitem, 0, _BB_getitem, 0, _BB_setitem, 0, _u_getitem, 0, _u_setitem, 0, _h_getitem, 0, _h_setitem, 0, _HH_getitem, 0, _HH_setitem, 0, _i_getitem, 0, _i_setitem, 0, _II_getitem, 0, _II_setitem, 0, _l_getitem, 0, _l_setitem, 0, _LL_getitem, 0, _LL_setitem, 0, _f_getitem, 0, _f_setitem, 0, _d_getitem, 0, _d_setitem, 0, _array_get_typecode, 0, _array_get_itemsize, 0, _array_append, 0, _array_buffer_info, 0, _array_byteswap, 0, _array_copy, 0, _array_count, 0, _array_extend, 0, _array_fromfile, 0, _array_fromlist, 0, _array_fromstring, 0, _array_fromunicode, 0, _array_index, 0, _array_insert, 0, _array_pop, 0, _array_fromfile_as_read, 0, _array_reduce, 0, _array_remove, 0, _array_reverse, 0, _array_tofile, 0, _array_tolist, 0, _array_tostring, 0, _array_tounicode, 0, _array_tofile_as_write, 0, _array_length, 0, _array_subscr, 0, _array_ass_subscr, 0, _array_concat, 0, _array_repeat, 0, _array_item, 0, _array_slice, 0, _array_ass_item, 0, _array_ass_slice, 0, _array_contains, 0, _array_inplace_concat, 0, _array_inplace_repeat, 0, _array_buffer_getreadbuf, 0, _array_buffer_getwritebuf, 0, _array_buffer_getsegcount, 0, _array_dealloc, 0, _array_repr, 0, _PyObject_GenericGetAttr, 0, _array_richcompare, 0, _array_iter, 0, _PyType_GenericAlloc, 0, _array_new, 0, _PyObject_Free, 0, _arrayiter_dealloc, 0, _arrayiter_traverse, 0, _PyObject_SelfIter, 0, _arrayiter_next, 0 ]);
  function run(args) {
    __str = allocate([ 99, 59, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 32, 109, 117, 115, 116, 32, 98, 101, 32, 99, 104, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 104, 59, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 115, 105, 103, 110, 101, 100, 32, 99, 104, 97, 114, 32, 105, 115, 32, 108, 101, 115, 115, 32, 116, 104, 97, 110, 32, 109, 105, 110, 105, 109, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 115, 105, 103, 110, 101, 100, 32, 99, 104, 97, 114, 32, 105, 115, 32, 103, 114, 101, 97, 116, 101, 114, 32, 116, 104, 97, 110, 32, 109, 97, 120, 105, 109, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 98, 59, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 117, 35, 59, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 32, 109, 117, 115, 116, 32, 98, 101, 32, 117, 110, 105, 99, 111, 100, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 32, 109, 117, 115, 116, 32, 98, 101, 32, 117, 110, 105, 99, 111, 100, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 105, 59, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 115, 104, 111, 114, 116, 32, 105, 115, 32, 108, 101, 115, 115, 32, 116, 104, 97, 110, 32, 109, 105, 110, 105, 109, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 115, 104, 111, 114, 116, 32, 105, 115, 32, 103, 114, 101, 97, 116, 101, 114, 32, 116, 104, 97, 110, 32, 109, 97, 120, 105, 109, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 108, 59, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 32, 105, 115, 32, 108, 101, 115, 115, 32, 116, 104, 97, 110, 32, 109, 105, 110, 105, 109, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 108, 111, 110, 103, 32, 105, 115, 32, 108, 101, 115, 115, 32, 116, 104, 97, 110, 32, 109, 105, 110, 105, 109, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 102, 59, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 32, 109, 117, 115, 116, 32, 98, 101, 32, 102, 108, 111, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 100, 59, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 32, 109, 117, 115, 116, 32, 98, 101, 32, 102, 108, 111, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    _descriptors = allocate([ 99, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.arrayobject*, i32)*", 0, 0, 0, "i32 (%struct.arrayobject*, i32, %struct.PyObject*)*", 0, 0, 0 ], ALLOC_NORMAL);
    __str15 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 97, 114, 114, 97, 121, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 111, 112, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 32, 61, 61, 32, 40, 38, 65, 114, 114, 97, 121, 116, 121, 112, 101, 41, 32, 124, 124, 32, 80, 121, 84, 121, 112, 101, 95, 73, 115, 83, 117, 98, 116, 121, 112, 101, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 111, 112, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 44, 32, 40, 38, 65, 114, 114, 97, 121, 116, 121, 112, 101, 41, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8858 = allocate([ 103, 101, 116, 97, 114, 114, 97, 121, 105, 116, 101, 109, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 105, 62, 61, 48, 32, 38, 38, 32, 105, 60, 40, 40, 40, 80, 121, 86, 97, 114, 79, 98, 106, 101, 99, 116, 42, 41, 40, 97, 112, 41, 41, 45, 62, 111, 98, 95, 115, 105, 122, 101, 41, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 97, 114, 114, 97, 121, 32, 105, 110, 100, 101, 120, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    _copy_doc = allocate([ 99, 111, 112, 121, 40, 97, 114, 114, 97, 121, 41, 10, 10, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 99, 97, 110, 32, 111, 110, 108, 121, 32, 97, 112, 112, 101, 110, 100, 32, 97, 114, 114, 97, 121, 32, 40, 110, 111, 116, 32, 34, 37, 46, 50, 48, 48, 115, 34, 41, 32, 116, 111, 32, 97, 114, 114, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 99, 97, 110, 32, 111, 110, 108, 121, 32, 97, 115, 115, 105, 103, 110, 32, 97, 114, 114, 97, 121, 32, 40, 110, 111, 116, 32, 34, 37, 46, 50, 48, 48, 115, 34, 41, 32, 116, 111, 32, 97, 114, 114, 97, 121, 32, 115, 108, 105, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 97, 114, 114, 97, 121, 32, 97, 115, 115, 105, 103, 110, 109, 101, 110, 116, 32, 105, 110, 100, 101, 120, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 97, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 32, 61, 61, 32, 40, 38, 65, 114, 114, 97, 121, 116, 121, 112, 101, 41, 32, 124, 124, 32, 80, 121, 84, 121, 112, 101, 95, 73, 115, 83, 117, 98, 116, 121, 112, 101, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 97, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 44, 32, 40, 38, 65, 114, 114, 97, 121, 116, 121, 112, 101, 41, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9470 = allocate([ 115, 101, 116, 97, 114, 114, 97, 121, 105, 116, 101, 109, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 99, 97, 110, 32, 111, 110, 108, 121, 32, 101, 120, 116, 101, 110, 100, 32, 119, 105, 116, 104, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 115, 97, 109, 101, 32, 107, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 99, 97, 110, 32, 111, 110, 108, 121, 32, 101, 120, 116, 101, 110, 100, 32, 97, 114, 114, 97, 121, 32, 119, 105, 116, 104, 32, 97, 114, 114, 97, 121, 32, 40, 110, 111, 116, 32, 34, 37, 46, 50, 48, 48, 115, 34, 41, 0 ], "i8", ALLOC_NORMAL);
    _count_doc = allocate([ 99, 111, 117, 110, 116, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 115, 32, 111, 102, 32, 120, 32, 105, 110, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 97, 114, 114, 97, 121, 46, 105, 110, 100, 101, 120, 40, 120, 41, 58, 32, 120, 32, 110, 111, 116, 32, 105, 110, 32, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _index_doc = allocate([ 105, 110, 100, 101, 120, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 105, 110, 100, 101, 120, 32, 111, 102, 32, 102, 105, 114, 115, 116, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 32, 111, 102, 32, 120, 32, 105, 110, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 97, 114, 114, 97, 121, 46, 114, 101, 109, 111, 118, 101, 40, 120, 41, 58, 32, 120, 32, 110, 111, 116, 32, 105, 110, 32, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _remove_doc = allocate([ 114, 101, 109, 111, 118, 101, 40, 120, 41, 10, 10, 82, 101, 109, 111, 118, 101, 32, 116, 104, 101, 32, 102, 105, 114, 115, 116, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 32, 111, 102, 32, 120, 32, 105, 110, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 124, 110, 58, 112, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 112, 111, 112, 32, 102, 114, 111, 109, 32, 101, 109, 112, 116, 121, 32, 97, 114, 114, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 112, 111, 112, 32, 105, 110, 100, 101, 120, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    _pop_doc = allocate([ 112, 111, 112, 40, 91, 105, 93, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 105, 45, 116, 104, 32, 101, 108, 101, 109, 101, 110, 116, 32, 97, 110, 100, 32, 100, 101, 108, 101, 116, 101, 32, 105, 116, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 46, 32, 105, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 45, 49, 46, 0 ], "i8", ALLOC_NORMAL);
    _extend_doc = allocate([ 101, 120, 116, 101, 110, 100, 40, 97, 114, 114, 97, 121, 32, 111, 114, 32, 105, 116, 101, 114, 97, 98, 108, 101, 41, 10, 10, 32, 65, 112, 112, 101, 110, 100, 32, 105, 116, 101, 109, 115, 32, 116, 111, 32, 116, 104, 101, 32, 101, 110, 100, 32, 111, 102, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 110, 79, 58, 105, 110, 115, 101, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    _insert_doc = allocate([ 105, 110, 115, 101, 114, 116, 40, 105, 44, 120, 41, 10, 10, 73, 110, 115, 101, 114, 116, 32, 97, 32, 110, 101, 119, 32, 105, 116, 101, 109, 32, 120, 32, 105, 110, 116, 111, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 32, 98, 101, 102, 111, 114, 101, 32, 112, 111, 115, 105, 116, 105, 111, 110, 32, 105, 46, 0 ], "i8", ALLOC_NORMAL);
    _buffer_info_doc = allocate([ 98, 117, 102, 102, 101, 114, 95, 105, 110, 102, 111, 40, 41, 32, 45, 62, 32, 40, 97, 100, 100, 114, 101, 115, 115, 44, 32, 108, 101, 110, 103, 116, 104, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 116, 117, 112, 108, 101, 32, 40, 97, 100, 100, 114, 101, 115, 115, 44, 32, 108, 101, 110, 103, 116, 104, 41, 32, 103, 105, 118, 105, 110, 103, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 109, 101, 109, 111, 114, 121, 32, 97, 100, 100, 114, 101, 115, 115, 32, 97, 110, 100, 10, 116, 104, 101, 32, 108, 101, 110, 103, 116, 104, 32, 105, 110, 32, 105, 116, 101, 109, 115, 32, 111, 102, 32, 116, 104, 101, 32, 98, 117, 102, 102, 101, 114, 32, 117, 115, 101, 100, 32, 116, 111, 32, 104, 111, 108, 100, 32, 97, 114, 114, 97, 121, 39, 115, 32, 99, 111, 110, 116, 101, 110, 116, 115, 10, 84, 104, 101, 32, 108, 101, 110, 103, 116, 104, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 109, 117, 108, 116, 105, 112, 108, 105, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 105, 116, 101, 109, 115, 105, 122, 101, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 32, 116, 111, 32, 99, 97, 108, 99, 117, 108, 97, 116, 101, 10, 116, 104, 101, 32, 98, 117, 102, 102, 101, 114, 32, 108, 101, 110, 103, 116, 104, 32, 105, 110, 32, 98, 121, 116, 101, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _append_doc = allocate([ 97, 112, 112, 101, 110, 100, 40, 120, 41, 10, 10, 65, 112, 112, 101, 110, 100, 32, 110, 101, 119, 32, 118, 97, 108, 117, 101, 32, 120, 32, 116, 111, 32, 116, 104, 101, 32, 101, 110, 100, 32, 111, 102, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 100, 111, 110, 39, 116, 32, 107, 110, 111, 119, 32, 104, 111, 119, 32, 116, 111, 32, 98, 121, 116, 101, 115, 119, 97, 112, 32, 116, 104, 105, 115, 32, 97, 114, 114, 97, 121, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    _byteswap_doc = allocate([ 98, 121, 116, 101, 115, 119, 97, 112, 40, 41, 10, 10, 66, 121, 116, 101, 115, 119, 97, 112, 32, 97, 108, 108, 32, 105, 116, 101, 109, 115, 32, 111, 102, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 46, 32, 32, 73, 102, 32, 116, 104, 101, 32, 105, 116, 101, 109, 115, 32, 105, 110, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 32, 97, 114, 101, 32, 110, 111, 116, 32, 49, 44, 32, 50, 44, 10, 52, 44, 32, 111, 114, 32, 56, 32, 98, 121, 116, 101, 115, 32, 105, 110, 32, 115, 105, 122, 101, 44, 32, 82, 117, 110, 116, 105, 109, 101, 69, 114, 114, 111, 114, 32, 105, 115, 32, 114, 97, 105, 115, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 40, 115, 105, 122, 101, 95, 116, 41, 105, 116, 101, 109, 115, 105, 122, 101, 32, 60, 61, 32, 115, 105, 122, 101, 111, 102, 40, 116, 109, 112, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10009 = allocate([ 97, 114, 114, 97, 121, 95, 114, 101, 118, 101, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    _reverse_doc = allocate([ 114, 101, 118, 101, 114, 115, 101, 40, 41, 10, 10, 82, 101, 118, 101, 114, 115, 101, 32, 116, 104, 101, 32, 111, 114, 100, 101, 114, 32, 111, 102, 32, 116, 104, 101, 32, 105, 116, 101, 109, 115, 32, 105, 110, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 79, 110, 58, 102, 114, 111, 109, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 97, 114, 103, 49, 32, 109, 117, 115, 116, 32, 98, 101, 32, 111, 112, 101, 110, 32, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 110, 111, 116, 32, 101, 110, 111, 117, 103, 104, 32, 105, 116, 101, 109, 115, 32, 105, 110, 32, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _fromfile_doc = allocate([ 102, 114, 111, 109, 102, 105, 108, 101, 40, 102, 44, 32, 110, 41, 10, 10, 82, 101, 97, 100, 32, 110, 32, 111, 98, 106, 101, 99, 116, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 32, 102, 32, 97, 110, 100, 32, 97, 112, 112, 101, 110, 100, 32, 116, 104, 101, 109, 32, 116, 111, 32, 116, 104, 101, 32, 101, 110, 100, 32, 111, 102, 32, 116, 104, 101, 10, 97, 114, 114, 97, 121, 46, 32, 32, 65, 108, 115, 111, 32, 99, 97, 108, 108, 101, 100, 32, 97, 115, 32, 114, 101, 97, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 97, 114, 114, 97, 121, 46, 114, 101, 97, 100, 40, 41, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 105, 110, 32, 51, 46, 120, 59, 32, 117, 115, 101, 32, 97, 114, 114, 97, 121, 46, 102, 114, 111, 109, 102, 105, 108, 101, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 97, 114, 103, 32, 109, 117, 115, 116, 32, 98, 101, 32, 111, 112, 101, 110, 32, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _tofile_doc = allocate([ 116, 111, 102, 105, 108, 101, 40, 102, 41, 10, 10, 87, 114, 105, 116, 101, 32, 97, 108, 108, 32, 105, 116, 101, 109, 115, 32, 40, 97, 115, 32, 109, 97, 99, 104, 105, 110, 101, 32, 118, 97, 108, 117, 101, 115, 41, 32, 116, 111, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 32, 102, 46, 32, 32, 65, 108, 115, 111, 32, 99, 97, 108, 108, 101, 100, 32, 97, 115, 10, 119, 114, 105, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 97, 114, 114, 97, 121, 46, 119, 114, 105, 116, 101, 40, 41, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 105, 110, 32, 51, 46, 120, 59, 32, 117, 115, 101, 32, 97, 114, 114, 97, 121, 46, 116, 111, 102, 105, 108, 101, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 97, 114, 103, 32, 109, 117, 115, 116, 32, 98, 101, 32, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _fromlist_doc = allocate([ 102, 114, 111, 109, 108, 105, 115, 116, 40, 108, 105, 115, 116, 41, 10, 10, 65, 112, 112, 101, 110, 100, 32, 105, 116, 101, 109, 115, 32, 116, 111, 32, 97, 114, 114, 97, 121, 32, 102, 114, 111, 109, 32, 108, 105, 115, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    _tolist_doc = allocate([ 116, 111, 108, 105, 115, 116, 40, 41, 32, 45, 62, 32, 108, 105, 115, 116, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 114, 114, 97, 121, 32, 116, 111, 32, 97, 110, 32, 111, 114, 100, 105, 110, 97, 114, 121, 32, 108, 105, 115, 116, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 105, 116, 101, 109, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 115, 35, 58, 102, 114, 111, 109, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 115, 116, 114, 105, 110, 103, 32, 108, 101, 110, 103, 116, 104, 32, 110, 111, 116, 32, 97, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 111, 102, 32, 105, 116, 101, 109, 32, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    _fromstring_doc = allocate([ 102, 114, 111, 109, 115, 116, 114, 105, 110, 103, 40, 115, 116, 114, 105, 110, 103, 41, 10, 10, 65, 112, 112, 101, 110, 100, 115, 32, 105, 116, 101, 109, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 44, 32, 105, 110, 116, 101, 114, 112, 114, 101, 116, 105, 110, 103, 32, 105, 116, 32, 97, 115, 32, 97, 110, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 109, 97, 99, 104, 105, 110, 101, 10, 118, 97, 108, 117, 101, 115, 44, 97, 115, 32, 105, 102, 32, 105, 116, 32, 104, 97, 100, 32, 98, 101, 101, 110, 32, 114, 101, 97, 100, 32, 102, 114, 111, 109, 32, 97, 32, 102, 105, 108, 101, 32, 117, 115, 105, 110, 103, 32, 116, 104, 101, 32, 102, 114, 111, 109, 102, 105, 108, 101, 40, 41, 32, 109, 101, 116, 104, 111, 100, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _tostring_doc = allocate([ 116, 111, 115, 116, 114, 105, 110, 103, 40, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 32, 116, 111, 32, 97, 110, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 109, 97, 99, 104, 105, 110, 101, 32, 118, 97, 108, 117, 101, 115, 32, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 10, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 117, 35, 58, 102, 114, 111, 109, 117, 110, 105, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 102, 114, 111, 109, 117, 110, 105, 99, 111, 100, 101, 40, 41, 32, 109, 97, 121, 32, 111, 110, 108, 121, 32, 98, 101, 32, 99, 97, 108, 108, 101, 100, 32, 111, 110, 32, 116, 121, 112, 101, 32, 39, 117, 39, 32, 97, 114, 114, 97, 121, 115, 0 ], "i8", ALLOC_NORMAL);
    _fromunicode_doc = allocate([ 102, 114, 111, 109, 117, 110, 105, 99, 111, 100, 101, 40, 117, 115, 116, 114, 41, 10, 10, 69, 120, 116, 101, 110, 100, 115, 32, 116, 104, 105, 115, 32, 97, 114, 114, 97, 121, 32, 119, 105, 116, 104, 32, 100, 97, 116, 97, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 117, 110, 105, 99, 111, 100, 101, 32, 115, 116, 114, 105, 110, 103, 32, 117, 115, 116, 114, 46, 10, 84, 104, 101, 32, 97, 114, 114, 97, 121, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 116, 121, 112, 101, 32, 39, 117, 39, 32, 97, 114, 114, 97, 121, 59, 32, 111, 116, 104, 101, 114, 119, 105, 115, 101, 32, 97, 32, 86, 97, 108, 117, 101, 69, 114, 114, 111, 114, 10, 105, 115, 32, 114, 97, 105, 115, 101, 100, 46, 32, 32, 85, 115, 101, 32, 97, 114, 114, 97, 121, 46, 102, 114, 111, 109, 115, 116, 114, 105, 110, 103, 40, 117, 115, 116, 114, 46, 100, 101, 99, 111, 100, 101, 40, 46, 46, 46, 41, 41, 32, 116, 111, 10, 97, 112, 112, 101, 110, 100, 32, 85, 110, 105, 99, 111, 100, 101, 32, 100, 97, 116, 97, 32, 116, 111, 32, 97, 110, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 115, 111, 109, 101, 32, 111, 116, 104, 101, 114, 32, 116, 121, 112, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 116, 111, 117, 110, 105, 99, 111, 100, 101, 40, 41, 32, 109, 97, 121, 32, 111, 110, 108, 121, 32, 98, 101, 32, 99, 97, 108, 108, 101, 100, 32, 111, 110, 32, 116, 121, 112, 101, 32, 39, 117, 39, 32, 97, 114, 114, 97, 121, 115, 0 ], "i8", ALLOC_NORMAL);
    _tounicode_doc = allocate([ 116, 111, 117, 110, 105, 99, 111, 100, 101, 40, 41, 32, 45, 62, 32, 117, 110, 105, 99, 111, 100, 101, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 32, 116, 111, 32, 97, 32, 117, 110, 105, 99, 111, 100, 101, 32, 115, 116, 114, 105, 110, 103, 46, 32, 32, 84, 104, 101, 32, 97, 114, 114, 97, 121, 32, 109, 117, 115, 116, 32, 98, 101, 10, 97, 32, 116, 121, 112, 101, 32, 39, 117, 39, 32, 97, 114, 114, 97, 121, 59, 32, 111, 116, 104, 101, 114, 119, 105, 115, 101, 32, 97, 32, 86, 97, 108, 117, 101, 69, 114, 114, 111, 114, 32, 105, 115, 32, 114, 97, 105, 115, 101, 100, 46, 32, 32, 85, 115, 101, 10, 97, 114, 114, 97, 121, 46, 116, 111, 115, 116, 114, 105, 110, 103, 40, 41, 46, 100, 101, 99, 111, 100, 101, 40, 41, 32, 116, 111, 32, 111, 98, 116, 97, 105, 110, 32, 97, 32, 117, 110, 105, 99, 111, 100, 101, 32, 115, 116, 114, 105, 110, 103, 32, 102, 114, 111, 109, 10, 97, 110, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 115, 111, 109, 101, 32, 111, 116, 104, 101, 114, 32, 116, 121, 112, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 95, 95, 100, 105, 99, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 79, 40, 99, 79, 41, 79, 0 ], "i8", ALLOC_NORMAL);
    _reduce_doc = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 116, 97, 116, 101, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 32, 102, 111, 114, 32, 112, 105, 99, 107, 108, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 116, 121, 112, 101, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 116, 104, 101, 32, 116, 121, 112, 101, 99, 111, 100, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 117, 115, 101, 100, 32, 116, 111, 32, 99, 114, 101, 97, 116, 101, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 105, 116, 101, 109, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 116, 104, 101, 32, 115, 105, 122, 101, 44, 32, 105, 110, 32, 98, 121, 116, 101, 115, 44, 32, 111, 102, 32, 111, 110, 101, 32, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 0 ], "i8", ALLOC_NORMAL);
    _array_getsets = allocate(60, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str51 = allocate([ 97, 112, 112, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 98, 117, 102, 102, 101, 114, 95, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 98, 121, 116, 101, 115, 119, 97, 112, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 95, 95, 99, 111, 112, 121, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 95, 95, 100, 101, 101, 112, 99, 111, 112, 121, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 101, 120, 116, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 102, 114, 111, 109, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 102, 114, 111, 109, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 102, 114, 111, 109, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 102, 114, 111, 109, 117, 110, 105, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 105, 110, 100, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 105, 110, 115, 101, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 112, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 114, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 114, 101, 109, 111, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 114, 101, 118, 101, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 116, 111, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 116, 111, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 116, 111, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 116, 111, 117, 110, 105, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 119, 114, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _array_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str74 = allocate([ 97, 114, 114, 97, 121, 40, 39, 37, 99, 39, 41, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 97, 114, 114, 97, 121, 40, 39, 37, 99, 39, 44, 32, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 41, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 97, 114, 114, 97, 121, 32, 105, 110, 100, 105, 99, 101, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 116, 101, 103, 101, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 97, 114, 114, 97, 121, 32, 105, 110, 100, 105, 99, 101, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str79 = allocate([ 97, 116, 116, 101, 109, 112, 116, 32, 116, 111, 32, 97, 115, 115, 105, 103, 110, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 115, 105, 122, 101, 32, 37, 122, 100, 32, 116, 111, 32, 101, 120, 116, 101, 110, 100, 101, 100, 32, 115, 108, 105, 99, 101, 32, 111, 102, 32, 115, 105, 122, 101, 32, 37, 122, 100, 0 ], "i8", ALLOC_NORMAL);
    _array_as_mapping = allocate(12, [ "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0 ], ALLOC_NORMAL);
    __str80 = allocate(1, "i8", ALLOC_NORMAL);
    __str81 = allocate([ 65, 99, 99, 101, 115, 115, 105, 110, 103, 32, 110, 111, 110, 45, 101, 120, 105, 115, 116, 101, 110, 116, 32, 97, 114, 114, 97, 121, 32, 115, 101, 103, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _array_as_sequence = allocate(40, [ "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32, i32)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, i32, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0 ], ALLOC_NORMAL);
    _array_as_buffer = allocate(24, [ "i32 (%struct.PyObject*, i32, i8**)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, i8**)*", 0, 0, 0, "i32 (%struct.PyObject*, i32*)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, i8**)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str82 = allocate([ 97, 114, 114, 97, 121, 46, 97, 114, 114, 97, 121, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str83 = allocate([ 99, 124, 79, 58, 97, 114, 114, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str84 = allocate([ 98, 97, 100, 32, 116, 121, 112, 101, 99, 111, 100, 101, 32, 40, 109, 117, 115, 116, 32, 98, 101, 32, 99, 44, 32, 98, 44, 32, 66, 44, 32, 117, 44, 32, 104, 44, 32, 72, 44, 32, 105, 44, 32, 73, 44, 32, 108, 44, 32, 76, 44, 32, 102, 32, 111, 114, 32, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    _module_doc = allocate([ 84, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 100, 101, 102, 105, 110, 101, 115, 32, 97, 110, 32, 111, 98, 106, 101, 99, 116, 32, 116, 121, 112, 101, 32, 119, 104, 105, 99, 104, 32, 99, 97, 110, 32, 101, 102, 102, 105, 99, 105, 101, 110, 116, 108, 121, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 10, 97, 110, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 98, 97, 115, 105, 99, 32, 118, 97, 108, 117, 101, 115, 58, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 44, 32, 105, 110, 116, 101, 103, 101, 114, 115, 44, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 10, 110, 117, 109, 98, 101, 114, 115, 46, 32, 32, 65, 114, 114, 97, 121, 115, 32, 97, 114, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 116, 121, 112, 101, 115, 32, 97, 110, 100, 32, 98, 101, 104, 97, 118, 101, 32, 118, 101, 114, 121, 32, 109, 117, 99, 104, 32, 108, 105, 107, 101, 32, 108, 105, 115, 116, 115, 44, 10, 101, 120, 99, 101, 112, 116, 32, 116, 104, 97, 116, 32, 116, 104, 101, 32, 116, 121, 112, 101, 32, 111, 102, 32, 111, 98, 106, 101, 99, 116, 115, 32, 115, 116, 111, 114, 101, 100, 32, 105, 110, 32, 116, 104, 101, 109, 32, 105, 115, 32, 99, 111, 110, 115, 116, 114, 97, 105, 110, 101, 100, 46, 32, 32, 84, 104, 101, 10, 116, 121, 112, 101, 32, 105, 115, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 97, 116, 32, 111, 98, 106, 101, 99, 116, 32, 99, 114, 101, 97, 116, 105, 111, 110, 32, 116, 105, 109, 101, 32, 98, 121, 32, 117, 115, 105, 110, 103, 32, 97, 32, 116, 121, 112, 101, 32, 99, 111, 100, 101, 44, 32, 119, 104, 105, 99, 104, 10, 105, 115, 32, 97, 32, 115, 105, 110, 103, 108, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 46, 32, 32, 84, 104, 101, 32, 102, 111, 108, 108, 111, 119, 105, 110, 103, 32, 116, 121, 112, 101, 32, 99, 111, 100, 101, 115, 32, 97, 114, 101, 32, 100, 101, 102, 105, 110, 101, 100, 58, 10, 10, 32, 32, 32, 32, 84, 121, 112, 101, 32, 99, 111, 100, 101, 32, 32, 32, 67, 32, 84, 121, 112, 101, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 105, 110, 105, 109, 117, 109, 32, 115, 105, 122, 101, 32, 105, 110, 32, 98, 121, 116, 101, 115, 32, 10, 32, 32, 32, 32, 39, 99, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 32, 10, 32, 32, 32, 32, 39, 98, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 32, 32, 32, 32, 49, 32, 10, 32, 32, 32, 32, 39, 66, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 110, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 32, 32, 49, 32, 10, 32, 32, 32, 32, 39, 117, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 110, 105, 99, 111, 100, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 32, 50, 32, 10, 32, 32, 32, 32, 39, 104, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 32, 32, 32, 32, 50, 32, 10, 32, 32, 32, 32, 39, 72, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 110, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 32, 32, 50, 32, 10, 32, 32, 32, 32, 39, 105, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 32, 32, 32, 32, 50, 32, 10, 32, 32, 32, 32, 39, 73, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 110, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 32, 32, 50, 32, 10, 32, 32, 32, 32, 39, 108, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 32, 32, 32, 32, 52, 32, 10, 32, 32, 32, 32, 39, 76, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 110, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 32, 32, 52, 32, 10, 32, 32, 32, 32, 39, 102, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 32, 32, 32, 32, 52, 32, 10, 32, 32, 32, 32, 39, 100, 39, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 32, 32, 32, 32, 56, 32, 10, 10, 84, 104, 101, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 105, 115, 58, 10, 10, 97, 114, 114, 97, 121, 40, 116, 121, 112, 101, 99, 111, 100, 101, 32, 91, 44, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 114, 93, 41, 32, 45, 45, 32, 99, 114, 101, 97, 116, 101, 32, 97, 32, 110, 101, 119, 32, 97, 114, 114, 97, 121, 10, 0 ], "i8", ALLOC_NORMAL);
    _arraytype_doc = allocate([ 97, 114, 114, 97, 121, 40, 116, 121, 112, 101, 99, 111, 100, 101, 32, 91, 44, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 114, 93, 41, 32, 45, 62, 32, 97, 114, 114, 97, 121, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 97, 114, 114, 97, 121, 32, 119, 104, 111, 115, 101, 32, 105, 116, 101, 109, 115, 32, 97, 114, 101, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 98, 121, 32, 116, 121, 112, 101, 99, 111, 100, 101, 44, 32, 97, 110, 100, 10, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 114, 32, 118, 97, 108, 117, 101, 44, 32, 119, 104, 105, 99, 104, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 108, 105, 115, 116, 44, 10, 115, 116, 114, 105, 110, 103, 46, 32, 111, 114, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 111, 118, 101, 114, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 111, 102, 32, 116, 104, 101, 32, 97, 112, 112, 114, 111, 112, 114, 105, 97, 116, 101, 32, 116, 121, 112, 101, 46, 10, 10, 65, 114, 114, 97, 121, 115, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 32, 98, 97, 115, 105, 99, 32, 118, 97, 108, 117, 101, 115, 32, 97, 110, 100, 32, 98, 101, 104, 97, 118, 101, 32, 118, 101, 114, 121, 32, 109, 117, 99, 104, 32, 108, 105, 107, 101, 32, 108, 105, 115, 116, 115, 44, 32, 101, 120, 99, 101, 112, 116, 10, 116, 104, 101, 32, 116, 121, 112, 101, 32, 111, 102, 32, 111, 98, 106, 101, 99, 116, 115, 32, 115, 116, 111, 114, 101, 100, 32, 105, 110, 32, 116, 104, 101, 109, 32, 105, 115, 32, 99, 111, 110, 115, 116, 114, 97, 105, 110, 101, 100, 46, 10, 10, 77, 101, 116, 104, 111, 100, 115, 58, 10, 10, 97, 112, 112, 101, 110, 100, 40, 41, 32, 45, 45, 32, 97, 112, 112, 101, 110, 100, 32, 97, 32, 110, 101, 119, 32, 105, 116, 101, 109, 32, 116, 111, 32, 116, 104, 101, 32, 101, 110, 100, 32, 111, 102, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 10, 98, 117, 102, 102, 101, 114, 95, 105, 110, 102, 111, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 32, 103, 105, 118, 105, 110, 103, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 109, 101, 109, 111, 114, 121, 32, 105, 110, 102, 111, 10, 98, 121, 116, 101, 115, 119, 97, 112, 40, 41, 32, 45, 45, 32, 98, 121, 116, 101, 115, 119, 97, 112, 32, 97, 108, 108, 32, 116, 104, 101, 32, 105, 116, 101, 109, 115, 32, 111, 102, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 10, 99, 111, 117, 110, 116, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 115, 32, 111, 102, 32, 97, 110, 32, 111, 98, 106, 101, 99, 116, 10, 101, 120, 116, 101, 110, 100, 40, 41, 32, 45, 45, 32, 101, 120, 116, 101, 110, 100, 32, 97, 114, 114, 97, 121, 32, 98, 121, 32, 97, 112, 112, 101, 110, 100, 105, 110, 103, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 32, 97, 110, 32, 105, 116, 101, 114, 97, 98, 108, 101, 10, 102, 114, 111, 109, 102, 105, 108, 101, 40, 41, 32, 45, 45, 32, 114, 101, 97, 100, 32, 105, 116, 101, 109, 115, 32, 102, 114, 111, 109, 32, 97, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 10, 102, 114, 111, 109, 108, 105, 115, 116, 40, 41, 32, 45, 45, 32, 97, 112, 112, 101, 110, 100, 32, 105, 116, 101, 109, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 108, 105, 115, 116, 10, 102, 114, 111, 109, 115, 116, 114, 105, 110, 103, 40, 41, 32, 45, 45, 32, 97, 112, 112, 101, 110, 100, 32, 105, 116, 101, 109, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 10, 105, 110, 100, 101, 120, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 100, 101, 120, 32, 111, 102, 32, 102, 105, 114, 115, 116, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 32, 111, 102, 32, 97, 110, 32, 111, 98, 106, 101, 99, 116, 10, 105, 110, 115, 101, 114, 116, 40, 41, 32, 45, 45, 32, 105, 110, 115, 101, 114, 116, 32, 97, 32, 110, 101, 119, 32, 105, 116, 101, 109, 32, 105, 110, 116, 111, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 32, 97, 116, 32, 97, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 112, 111, 115, 105, 116, 105, 111, 110, 10, 112, 111, 112, 40, 41, 32, 45, 45, 32, 114, 101, 109, 111, 118, 101, 32, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 32, 105, 116, 101, 109, 32, 40, 100, 101, 102, 97, 117, 108, 116, 32, 108, 97, 115, 116, 41, 10, 114, 101, 97, 100, 40, 41, 32, 45, 45, 32, 68, 69, 80, 82, 69, 67, 65, 84, 69, 68, 44, 32, 117, 115, 101, 32, 102, 114, 111, 109, 102, 105, 108, 101, 40, 41, 10, 114, 101, 109, 111, 118, 101, 40, 41, 32, 45, 45, 32, 114, 101, 109, 111, 118, 101, 32, 102, 105, 114, 115, 116, 32, 111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 32, 111, 102, 32, 97, 110, 32, 111, 98, 106, 101, 99, 116, 10, 114, 101, 118, 101, 114, 115, 101, 40, 41, 32, 45, 45, 32, 114, 101, 118, 101, 114, 115, 101, 32, 116, 104, 101, 32, 111, 114, 100, 101, 114, 32, 111, 102, 32, 116, 104, 101, 32, 105, 116, 101, 109, 115, 32, 105, 110, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 10, 116, 111, 102, 105, 108, 101, 40, 41, 32, 45, 45, 32, 119, 114, 105, 116, 101, 32, 97, 108, 108, 32, 105, 116, 101, 109, 115, 32, 116, 111, 32, 97, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 10, 116, 111, 108, 105, 115, 116, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 32, 99, 111, 110, 118, 101, 114, 116, 101, 100, 32, 116, 111, 32, 97, 110, 32, 111, 114, 100, 105, 110, 97, 114, 121, 32, 108, 105, 115, 116, 10, 116, 111, 115, 116, 114, 105, 110, 103, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 32, 99, 111, 110, 118, 101, 114, 116, 101, 100, 32, 116, 111, 32, 97, 32, 115, 116, 114, 105, 110, 103, 10, 119, 114, 105, 116, 101, 40, 41, 32, 45, 45, 32, 68, 69, 80, 82, 69, 67, 65, 84, 69, 68, 44, 32, 117, 115, 101, 32, 116, 111, 102, 105, 108, 101, 40, 41, 10, 10, 65, 116, 116, 114, 105, 98, 117, 116, 101, 115, 58, 10, 10, 116, 121, 112, 101, 99, 111, 100, 101, 32, 45, 45, 32, 116, 104, 101, 32, 116, 121, 112, 101, 99, 111, 100, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 117, 115, 101, 100, 32, 116, 111, 32, 99, 114, 101, 97, 116, 101, 32, 116, 104, 101, 32, 97, 114, 114, 97, 121, 10, 105, 116, 101, 109, 115, 105, 122, 101, 32, 45, 45, 32, 116, 104, 101, 32, 108, 101, 110, 103, 116, 104, 32, 105, 110, 32, 98, 121, 116, 101, 115, 32, 111, 102, 32, 111, 110, 101, 32, 97, 114, 114, 97, 121, 32, 105, 116, 101, 109, 10, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 97, 114, 114, 97, 121, 46, 97, 114, 114, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    _Arraytype = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str86 = allocate([ 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 105, 116, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 32, 61, 61, 32, 40, 38, 80, 121, 65, 114, 114, 97, 121, 73, 116, 101, 114, 95, 84, 121, 112, 101, 41, 32, 124, 124, 32, 80, 121, 84, 121, 112, 101, 95, 73, 115, 83, 117, 98, 116, 121, 112, 101, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 105, 116, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 44, 32, 40, 38, 80, 121, 65, 114, 114, 97, 121, 73, 116, 101, 114, 95, 84, 121, 112, 101, 41, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___11388 = allocate([ 97, 114, 114, 97, 121, 105, 116, 101, 114, 95, 110, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str87 = allocate([ 97, 114, 114, 97, 121, 105, 116, 101, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _PyArrayIter_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _a_methods = allocate(16, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_NORMAL);
    __str88 = allocate([ 97, 114, 114, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str89 = allocate([ 65, 114, 114, 97, 121, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_descriptors + 8] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_descriptors + 12] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_descriptors + 24] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_descriptors + 28] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_descriptors + 40] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_descriptors + 44] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_descriptors + 56] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_descriptors + 60] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_descriptors + 72] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_descriptors + 76] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_descriptors + 88] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_descriptors + 92] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_descriptors + 104] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_descriptors + 108] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_descriptors + 120] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_descriptors + 124] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_descriptors + 136] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_descriptors + 140] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_descriptors + 152] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_descriptors + 156] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_descriptors + 168] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_descriptors + 172] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_descriptors + 184] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_descriptors + 188] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_array_getsets] = __str47;
    HEAP[_array_getsets + 4] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_array_getsets + 12] = __str48;
    HEAP[_array_getsets + 20] = __str49;
    HEAP[_array_getsets + 24] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_array_getsets + 32] = __str50;
    HEAP[_array_methods] = __str51;
    HEAP[_array_methods + 4] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_array_methods + 12] = _append_doc;
    HEAP[_array_methods + 16] = __str52;
    HEAP[_array_methods + 20] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_array_methods + 28] = _buffer_info_doc;
    HEAP[_array_methods + 32] = __str53;
    HEAP[_array_methods + 36] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_array_methods + 44] = _byteswap_doc;
    HEAP[_array_methods + 48] = __str54;
    HEAP[_array_methods + 52] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_array_methods + 60] = _copy_doc;
    HEAP[_array_methods + 64] = __str55;
    HEAP[_array_methods + 68] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_array_methods + 76] = _count_doc;
    HEAP[_array_methods + 80] = __str56;
    HEAP[_array_methods + 84] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_array_methods + 92] = _copy_doc;
    HEAP[_array_methods + 96] = __str57;
    HEAP[_array_methods + 100] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_array_methods + 108] = _extend_doc;
    HEAP[_array_methods + 112] = __str58;
    HEAP[_array_methods + 116] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_array_methods + 124] = _fromfile_doc;
    HEAP[_array_methods + 128] = __str59;
    HEAP[_array_methods + 132] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_array_methods + 140] = _fromlist_doc;
    HEAP[_array_methods + 144] = __str60;
    HEAP[_array_methods + 148] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_array_methods + 156] = _fromstring_doc;
    HEAP[_array_methods + 160] = __str61;
    HEAP[_array_methods + 164] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_array_methods + 172] = _fromunicode_doc;
    HEAP[_array_methods + 176] = __str62;
    HEAP[_array_methods + 180] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_array_methods + 188] = _index_doc;
    HEAP[_array_methods + 192] = __str63;
    HEAP[_array_methods + 196] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_array_methods + 204] = _insert_doc;
    HEAP[_array_methods + 208] = __str64;
    HEAP[_array_methods + 212] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_array_methods + 220] = _pop_doc;
    HEAP[_array_methods + 224] = __str65;
    HEAP[_array_methods + 228] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_array_methods + 236] = _fromfile_doc;
    HEAP[_array_methods + 240] = __str66;
    HEAP[_array_methods + 244] = FUNCTION_TABLE_OFFSET + 82;
    HEAP[_array_methods + 252] = _reduce_doc;
    HEAP[_array_methods + 256] = __str67;
    HEAP[_array_methods + 260] = FUNCTION_TABLE_OFFSET + 84;
    HEAP[_array_methods + 268] = _remove_doc;
    HEAP[_array_methods + 272] = __str68;
    HEAP[_array_methods + 276] = FUNCTION_TABLE_OFFSET + 86;
    HEAP[_array_methods + 284] = _reverse_doc;
    HEAP[_array_methods + 288] = __str69;
    HEAP[_array_methods + 292] = FUNCTION_TABLE_OFFSET + 88;
    HEAP[_array_methods + 300] = _tofile_doc;
    HEAP[_array_methods + 304] = __str70;
    HEAP[_array_methods + 308] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_array_methods + 316] = _tolist_doc;
    HEAP[_array_methods + 320] = __str71;
    HEAP[_array_methods + 324] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_array_methods + 332] = _tostring_doc;
    HEAP[_array_methods + 336] = __str72;
    HEAP[_array_methods + 340] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_array_methods + 348] = _tounicode_doc;
    HEAP[_array_methods + 352] = __str73;
    HEAP[_array_methods + 356] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_array_methods + 364] = _tofile_doc;
    HEAP[_array_as_mapping] = FUNCTION_TABLE_OFFSET + 98;
    HEAP[_array_as_mapping + 4] = FUNCTION_TABLE_OFFSET + 100;
    HEAP[_array_as_mapping + 8] = FUNCTION_TABLE_OFFSET + 102;
    HEAP[_array_as_sequence] = FUNCTION_TABLE_OFFSET + 98;
    HEAP[_array_as_sequence + 4] = FUNCTION_TABLE_OFFSET + 104;
    HEAP[_array_as_sequence + 8] = FUNCTION_TABLE_OFFSET + 106;
    HEAP[_array_as_sequence + 12] = FUNCTION_TABLE_OFFSET + 108;
    HEAP[_array_as_sequence + 16] = FUNCTION_TABLE_OFFSET + 110;
    HEAP[_array_as_sequence + 20] = FUNCTION_TABLE_OFFSET + 112;
    HEAP[_array_as_sequence + 24] = FUNCTION_TABLE_OFFSET + 114;
    HEAP[_array_as_sequence + 28] = FUNCTION_TABLE_OFFSET + 116;
    HEAP[_array_as_sequence + 32] = FUNCTION_TABLE_OFFSET + 118;
    HEAP[_array_as_sequence + 36] = FUNCTION_TABLE_OFFSET + 120;
    HEAP[_array_as_buffer] = FUNCTION_TABLE_OFFSET + 122;
    HEAP[_array_as_buffer + 4] = FUNCTION_TABLE_OFFSET + 124;
    HEAP[_array_as_buffer + 8] = FUNCTION_TABLE_OFFSET + 126;
    HEAP[_Arraytype + 12] = __str85;
    HEAP[_Arraytype + 24] = FUNCTION_TABLE_OFFSET + 128;
    HEAP[_Arraytype + 44] = FUNCTION_TABLE_OFFSET + 130;
    HEAP[_Arraytype + 52] = _array_as_sequence;
    HEAP[_Arraytype + 56] = _array_as_mapping;
    HEAP[_Arraytype + 72] = FUNCTION_TABLE_OFFSET + 132;
    HEAP[_Arraytype + 80] = _array_as_buffer;
    HEAP[_Arraytype + 88] = _arraytype_doc;
    HEAP[_Arraytype + 100] = FUNCTION_TABLE_OFFSET + 134;
    HEAP[_Arraytype + 108] = FUNCTION_TABLE_OFFSET + 136;
    HEAP[_Arraytype + 116] = _array_methods;
    HEAP[_Arraytype + 124] = _array_getsets;
    HEAP[_Arraytype + 152] = FUNCTION_TABLE_OFFSET + 138;
    HEAP[_Arraytype + 156] = FUNCTION_TABLE_OFFSET + 140;
    HEAP[_Arraytype + 160] = FUNCTION_TABLE_OFFSET + 142;
    HEAP[_PyArrayIter_Type + 12] = __str87;
    HEAP[_PyArrayIter_Type + 24] = FUNCTION_TABLE_OFFSET + 144;
    HEAP[_PyArrayIter_Type + 72] = FUNCTION_TABLE_OFFSET + 132;
    HEAP[_PyArrayIter_Type + 92] = FUNCTION_TABLE_OFFSET + 146;
    HEAP[_PyArrayIter_Type + 108] = FUNCTION_TABLE_OFFSET + 148;
    HEAP[_PyArrayIter_Type + 112] = FUNCTION_TABLE_OFFSET + 150;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
