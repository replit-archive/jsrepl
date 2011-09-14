"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 64;
  var $1___SIZE = 16;
  var $2___SIZE = 112;
  var $3___SIZE = 196;
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
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_compobject___SIZE = 76;
  var $struct_compobject___FLATTENER = [ 0, 4, 8, 64, 68, 72 ];
  var $struct_internal_state___SIZE = 4;
  var $struct_z_stream___SIZE = 56;
  var __str;
  var __str1;
  var __str2;
  var _ZlibError;
  var __str3;
  var __str4;
  var _compressobj__doc__;
  var _decompressobj__doc__;
  var __str5;
  var _compress__doc__;
  var __str6;
  var __str7;
  var __str8;
  var __str9;
  var __str10;
  var __str11;
  var __str12;
  var _decompress__doc__;
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
  var _comp_compress__doc__;
  var __str25;
  var __str26;
  var _decomp_decompress__doc__;
  var __str27;
  var __str28;
  var __str29;
  var _comp_flush__doc__;
  var __str30;
  var __str31;
  var __str32;
  var _comp_copy__doc__;
  var __str33;
  var __str34;
  var _decomp_copy__doc__;
  var __str35;
  var _decomp_flush__doc__;
  var __str36;
  var __str37;
  var __str38;
  var __str39;
  var __str40;
  var _comp_methods;
  var __str41;
  var _Decomp_methods;
  var __str42;
  var __str43;
  var _adler32__doc__;
  var __str44;
  var _crc32__doc__;
  var __str45;
  var __str46;
  var __str47;
  var __str48;
  var __str49;
  var _zlib_methods;
  var __str50;
  var _Comptype;
  var __str51;
  var _Decomptype;
  var _zlib_module_documentation;
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
  function _zlib_error($zst, $err, $msg) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $err_addr;
      var $msg_addr;
      var $zmsg;
      $err_addr = $err;
      $msg_addr = $msg;
      
      
      $zmsg = HEAP[$zst + 24];
      
      
      if ($zmsg == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      var $4 = $err_addr;
      if ($4 == -5) {
        __label__ = 2;
        break;
      } else if ($4 == -3) {
        __label__ = 4;
        break;
      } else if ($4 == -2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      $zmsg = __str;
      __label__ = 5;
      break;
     case 3:
      $zmsg = __str1;
      __label__ = 5;
      break;
     case 4:
      $zmsg = __str2;
      __label__ = 5;
      break;
     case 5:
      var $5 = HEAP[_ZlibError];
      var $6 = $err_addr;
      var $7 = $msg_addr;
      __lastLabel__ = 5;
      __label__ = 8;
      break;
     case 6:
      
      
      var $9 = HEAP[_ZlibError];
      var $10 = $err_addr;
      var $11 = $msg_addr;
      if ($zmsg == 0) {
        __lastLabel__ = 6;
        __label__ = 7;
        break;
      } else {
        __lastLabel__ = 6;
        __label__ = 8;
        break;
      }
     case 7:
      var $12 = _PyErr_Format($9, __str3, allocate([ $10, 0, 0, 0, $11, 0, 0, 0 ], [ "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 9;
      break;
     case 8:
      var $13 = __lastLabel__ == 5 ? $7 : $11;
      var $14 = __lastLabel__ == 5 ? $6 : $10;
      var $15 = __lastLabel__ == 5 ? $5 : $9;
      
      var $17 = _PyErr_Format($15, __str4, allocate([ $14, 0, 0, 0, $13, 0, 0, 0, $zmsg, 0, 0, 0 ], [ "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 9;
      break;
     case 9:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _newcompobject($type) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $retval;
      var $0;
      var $self;
      $type_addr = $type;
      
      var $2 = __PyObject_New($type_addr);
      
      $self = $2;
      
      
      if ($self == 0) {
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
      
      
      HEAP[$self + 72] = 0;
      var $8 = _PyString_FromString(__str5);
      
      
      HEAP[$self + 64] = $8;
      
      
      
      
      if (HEAP[$self + 64] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      var $19 = HEAP[$self] - 1;
      
      HEAP[$self] = $19;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      var $29 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$29]($self);
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      __label__ = 11;
      break;
     case 6:
      var $32 = _PyString_FromString(__str5);
      
      
      HEAP[$self + 68] = $32;
      
      
      
      
      var $39 = $self;
      if (HEAP[$self + 68] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      var $43 = HEAP[$39] - 1;
      
      HEAP[$39] = $43;
      
      
      
      if (HEAP[$39] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $53 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$53]($self);
      __label__ = 9;
      break;
     case 9:
      $0 = 0;
      __label__ = 11;
      break;
     case 10:
      $0 = $39;
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
  function _PyZlib_compress($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 68;
    _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $ReturnVal;
      var $input = __stackBase__;
      var $output;
      var $length = __stackBase__ + 4;
      var $level = __stackBase__ + 8;
      var $err;
      var $zst = __stackBase__ + 12;
      $self_addr = $self;
      $args_addr = $args;
      $ReturnVal = 0;
      HEAP[$level] = -1;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str6, allocate([ $input, 0, 0, 0, $length, 0, 0, 0, $level, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      var $8 = (HEAP[$length] / 1e3 | 0) + 13 + HEAP[$length];
      
      HEAP[$zst + 16] = $8;
      
      var $11 = HEAP[$zst + 16];
      var $12 = _malloc($11);
      $output = $12;
      
      
      if ($output == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $15 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($15, __str7);
      $0 = 0;
      __label__ = 14;
      break;
     case 4:
      
      HEAP[$zst + 32] = 0;
      
      HEAP[$zst + 36] = 0;
      
      
      HEAP[$zst + 12] = $output;
      var $20 = HEAP[$input];
      
      HEAP[$zst] = $20;
      var $22 = HEAP[$length];
      
      HEAP[$zst + 4] = $22;
      var $24 = HEAP[$level];
      var $25 = _deflateInit_($zst, $24, __str8, 56);
      $err = $25;
      var $26 = $err;
      if ($26 == -4) {
        __label__ = 6;
        break;
      } else if ($26 == -2) {
        __label__ = 7;
        break;
      } else if ($26 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $27 = _deflate($zst, 4);
      $err = $27;
      
      
      if ($err != 1) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      var $30 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($30, __str9);
      __label__ = 13;
      break;
     case 7:
      var $31 = HEAP[_ZlibError];
      _PyErr_SetString($31, __str10);
      __label__ = 13;
      break;
     case 8:
      var $32 = _deflateEnd($zst);
      
      _zlib_error($zst, $err, __str11);
      __label__ = 13;
      break;
     case 9:
      
      _zlib_error($zst, $err, __str11);
      var $35 = _deflateEnd($zst);
      __label__ = 13;
      break;
     case 10:
      var $36 = _deflateEnd($zst);
      $err = $36;
      
      
      if ($err == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      var $40 = HEAP[$zst + 20];
      
      var $42 = _PyString_FromStringAndSize($output, $40);
      $ReturnVal = $42;
      __label__ = 13;
      break;
     case 12:
      
      _zlib_error($zst, $err, __str12);
      __label__ = 13;
      break;
     case 13:
      
      _free($output);
      
      $0 = $ReturnVal;
      __label__ = 14;
      break;
     case 14:
      
      $retval = $0;
      var $retval13 = $retval;
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyZlib_decompress($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 76;
    _memset(__stackBase__, 0, 76);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $result_str = __stackBase__;
      var $input = __stackBase__ + 4;
      var $length = __stackBase__ + 8;
      var $err;
      var $wsize = __stackBase__ + 12;
      var $r_strlen = __stackBase__ + 16;
      var $zst = __stackBase__ + 20;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$wsize] = 15;
      HEAP[$r_strlen] = 16384;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str13, allocate([ $input, 0, 0, 0, $length, 0, 0, 0, $wsize, 0, 0, 0, $r_strlen, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if (HEAP[$r_strlen] <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$r_strlen] = 1;
      __label__ = 4;
      break;
     case 4:
      var $6 = HEAP[$length];
      
      HEAP[$zst + 4] = $6;
      var $8 = HEAP[$r_strlen];
      
      HEAP[$zst + 16] = $8;
      var $10 = HEAP[$r_strlen];
      var $11 = _PyString_FromStringAndSize(0, $10);
      HEAP[$result_str] = $11;
      
      if ($11 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 24;
      break;
     case 6:
      
      HEAP[$zst + 32] = 0;
      
      HEAP[$zst + 36] = 0;
      
      
      
      var $18 = HEAP[$result_str] + 20;
      
      HEAP[$zst + 12] = $18;
      var $20 = HEAP[$input];
      
      HEAP[$zst] = $20;
      var $22 = HEAP[$wsize];
      var $23 = _inflateInit2_($zst, $22, __str8, 56);
      $err = $23;
      var $24 = $err;
      if ($24 == -4) {
        __label__ = 8;
        break;
      } else if ($24 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $25 = $zst + 16;
      var $26 = $zst + 12;
      var $27 = $zst + 16;
      __label__ = 10;
      break;
     case 8:
      var $28 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($28, __str14);
      __label__ = 20;
      break;
     case 9:
      var $29 = _inflateEnd($zst);
      
      _zlib_error($zst, $err, __str15);
      __label__ = 20;
      break;
     case 10:
      var $31 = _inflate($zst, 4);
      $err = $31;
      if ($31 == -5) {
        __label__ = 11;
        break;
      } else if ($31 == 0) {
        __label__ = 13;
        break;
      } else if ($31 == 1) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      
      if (HEAP[$25] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      _zlib_error($zst, $err, __str16);
      var $35 = _inflateEnd($zst);
      __label__ = 20;
      break;
     case 13:
      
      var $37 = HEAP[$r_strlen] << 1;
      var $38 = __PyString_Resize($result_str, $37);
      
      if ($38 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      var $40 = _inflateEnd($zst);
      __label__ = 20;
      break;
     case 15:
      var $41 = _inflateEnd($zst);
      
      _zlib_error($zst, $err, __str16);
      __label__ = 20;
      break;
     case 16:
      
      
      
      
      
      var $48 = HEAP[$result_str] + 20 + HEAP[$r_strlen];
      HEAP[$26] = $48;
      var $49 = HEAP[$r_strlen];
      HEAP[$27] = $49;
      
      var $51 = HEAP[$r_strlen] << 1;
      HEAP[$r_strlen] = $51;
      
      
      if ($err != 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      var $53 = _inflateEnd($zst);
      $err = $53;
      
      if ($53 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      _zlib_error($zst, $err, __str17);
      __label__ = 20;
      break;
     case 19:
      
      var $57 = HEAP[$zst + 20];
      var $58 = __PyString_Resize($result_str, $57);
      
      $0 = HEAP[$result_str];
      __label__ = 24;
      break;
     case 20:
      
      
      if (HEAP[$result_str] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      var $62 = HEAP[$result_str];
      
      
      var $65 = HEAP[$62] - 1;
      var $66 = $62;
      HEAP[$66] = $65;
      
      
      
      if (HEAP[$62] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $74 = HEAP[HEAP[HEAP[$result_str] + 4] + 24];
      var $75 = HEAP[$result_str];
      FUNCTION_TABLE[$74]($75);
      __label__ = 23;
      break;
     case 23:
      $0 = 0;
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
  function _PyZlib_compressobj($selfptr, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $selfptr_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $self;
      var $level = __stackBase__;
      var $method = __stackBase__ + 4;
      var $wbits = __stackBase__ + 8;
      var $memLevel = __stackBase__ + 12;
      var $strategy = __stackBase__ + 16;
      var $err;
      $selfptr_addr = $selfptr;
      $args_addr = $args;
      HEAP[$level] = -1;
      HEAP[$method] = 8;
      HEAP[$wbits] = 15;
      HEAP[$memLevel] = 8;
      HEAP[$strategy] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str18, allocate([ $level, 0, 0, 0, $method, 0, 0, 0, $wbits, 0, 0, 0, $memLevel, 0, 0, 0, $strategy, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = _newcompobject(_Comptype);
      $self = $4;
      
      
      if ($self == 0) {
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
      
      
      
      HEAP[$self + 8 + 32] = 0;
      
      
      
      HEAP[$self + 8 + 36] = 0;
      
      
      
      HEAP[$self + 8] = 0;
      
      
      
      HEAP[$self + 8 + 4] = 0;
      var $19 = HEAP[$strategy];
      var $20 = HEAP[$memLevel];
      var $21 = HEAP[$wbits];
      var $22 = HEAP[$method];
      var $23 = HEAP[$level];
      
      
      var $26 = _deflateInit2_($self + 8, $23, $22, $21, $20, $19, __str8, 56);
      $err = $26;
      var $27 = $err;
      if ($27 == -4) {
        __label__ = 6;
        break;
      } else if ($27 == -2) {
        __label__ = 9;
        break;
      } else if ($27 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 5:
      
      
      HEAP[$self + 72] = 1;
      
      
      $0 = $self;
      __label__ = 15;
      break;
     case 6:
      
      
      
      
      var $36 = HEAP[$self] - 1;
      
      HEAP[$self] = $36;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      var $46 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$46]($self);
      __label__ = 8;
      break;
     case 8:
      var $49 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($49, __str19);
      $0 = 0;
      __label__ = 15;
      break;
     case 9:
      
      
      
      
      var $54 = HEAP[$self] - 1;
      
      HEAP[$self] = $54;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      var $64 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$64]($self);
      __label__ = 11;
      break;
     case 11:
      var $67 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($67, __str20);
      $0 = 0;
      __label__ = 15;
      break;
     case 12:
      
      
      
      _zlib_error($self + 8, $err, __str21);
      
      
      
      
      var $75 = HEAP[$self] - 1;
      
      HEAP[$self] = $75;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      var $85 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$85]($self);
      __label__ = 14;
      break;
     case 14:
      $0 = 0;
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
  function _PyZlib_decompressobj($selfptr, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $selfptr_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $wbits = __stackBase__;
      var $err;
      var $self;
      $selfptr_addr = $selfptr;
      $args_addr = $args;
      HEAP[$wbits] = 15;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str22, allocate([ $wbits, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = _newcompobject(_Decomptype);
      $self = $4;
      
      
      if ($self == 0) {
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
      
      
      
      HEAP[$self + 8 + 32] = 0;
      
      
      
      HEAP[$self + 8 + 36] = 0;
      
      
      
      HEAP[$self + 8] = 0;
      
      
      
      HEAP[$self + 8 + 4] = 0;
      var $19 = HEAP[$wbits];
      
      
      var $22 = _inflateInit2_($self + 8, $19, __str8, 56);
      $err = $22;
      var $23 = $err;
      if ($23 == -4) {
        __label__ = 9;
        break;
      } else if ($23 == -2) {
        __label__ = 6;
        break;
      } else if ($23 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 5:
      
      
      HEAP[$self + 72] = 1;
      
      
      $0 = $self;
      __label__ = 15;
      break;
     case 6:
      
      
      
      
      var $32 = HEAP[$self] - 1;
      
      HEAP[$self] = $32;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      var $42 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$42]($self);
      __label__ = 8;
      break;
     case 8:
      var $45 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($45, __str20);
      $0 = 0;
      __label__ = 15;
      break;
     case 9:
      
      
      
      
      var $50 = HEAP[$self] - 1;
      
      HEAP[$self] = $50;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      var $60 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$60]($self);
      __label__ = 11;
      break;
     case 11:
      var $63 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($63, __str23);
      $0 = 0;
      __label__ = 15;
      break;
     case 12:
      
      
      
      _zlib_error($self + 8, $err, __str24);
      
      
      
      
      var $71 = HEAP[$self] - 1;
      
      HEAP[$self] = $71;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      var $81 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$81]($self);
      __label__ = 14;
      break;
     case 14:
      $0 = 0;
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
  function _Comp_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 72] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $6 = _deflateEnd($self_addr + 8);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 64] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $13 = HEAP[$self_addr + 64];
      
      
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
      
      
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[$self_addr + 64] + 4] + 24];
      
      
      var $30 = HEAP[$self_addr + 64];
      FUNCTION_TABLE[$27]($30);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[$self_addr + 68] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $37 = HEAP[$self_addr + 68];
      
      
      var $40 = HEAP[$37] - 1;
      var $41 = $37;
      HEAP[$41] = $40;
      
      
      
      if (HEAP[$37] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $51 = HEAP[HEAP[HEAP[$self_addr + 68] + 4] + 24];
      
      
      var $54 = HEAP[$self_addr + 68];
      FUNCTION_TABLE[$51]($54);
      __label__ = 8;
      break;
     case 8:
      
      
      _PyObject_Free($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Decomp_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 72] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $6 = _inflateEnd($self_addr + 8);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 64] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $13 = HEAP[$self_addr + 64];
      
      
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
      
      
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[$self_addr + 64] + 4] + 24];
      
      
      var $30 = HEAP[$self_addr + 64];
      FUNCTION_TABLE[$27]($30);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[$self_addr + 68] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $37 = HEAP[$self_addr + 68];
      
      
      var $40 = HEAP[$37] - 1;
      var $41 = $37;
      HEAP[$41] = $40;
      
      
      
      if (HEAP[$37] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $51 = HEAP[HEAP[HEAP[$self_addr + 68] + 4] + 24];
      
      
      var $54 = HEAP[$self_addr + 68];
      FUNCTION_TABLE[$51]($54);
      __label__ = 8;
      break;
     case 8:
      
      
      _PyObject_Free($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyZlib_objcompress($self, $args) {
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
      var $err;
      var $inplen = __stackBase__;
      var $length;
      var $RetVal = __stackBase__ + 4;
      var $input = __stackBase__ + 8;
      var $start_total_out;
      $self_addr = $self;
      $args_addr = $args;
      $length = 16384;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str25, allocate([ $input, 0, 0, 0, $inplen, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = _PyString_FromStringAndSize(0, $length);
      HEAP[$RetVal] = $5;
      
      
      if (HEAP[$RetVal] == 0) {
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
      
      
      
      
      $start_total_out = HEAP[$self_addr + 8 + 20];
      var $12 = HEAP[$inplen];
      
      
      
      HEAP[$self_addr + 8 + 4] = $12;
      var $16 = HEAP[$input];
      
      
      
      HEAP[$self_addr + 8] = $16;
      
      
      
      
      HEAP[$self_addr + 8 + 16] = $length;
      
      
      
      var $27 = HEAP[$RetVal] + 20;
      
      
      
      HEAP[$self_addr + 8 + 12] = $27;
      
      
      var $33 = _deflate($self_addr + 8, 0);
      $err = $33;
      __lastLabel__ = 4;
      __label__ = 7;
      break;
     case 5:
      
      
      var $36 = __PyString_Resize($RetVal, $length << 1);
      
      if ($36 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      var $43 = HEAP[$RetVal] + 20 + $length;
      
      
      
      HEAP[$self_addr + 8 + 12] = $43;
      
      
      
      
      HEAP[$self_addr + 8 + 16] = $length;
      
      var $52 = $length << 1;
      $length = $52;
      
      
      var $55 = _deflate($self_addr + 8, 0);
      $err = $55;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $56 = __lastLabel__ == 6 ? $55 : $33;
      
      if ($56 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[$self_addr + 8 + 16] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      var $66 = $err != -5;
      
      
      var $68 = $self_addr + 8;
      if ($err != 0 & $66) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      _zlib_error($68, $err, __str26);
      var $70 = HEAP[$RetVal];
      
      
      var $73 = HEAP[$70] - 1;
      var $74 = $70;
      HEAP[$74] = $73;
      
      
      
      if (HEAP[$70] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $82 = HEAP[HEAP[HEAP[$RetVal] + 4] + 24];
      var $83 = HEAP[$RetVal];
      FUNCTION_TABLE[$82]($83);
      __label__ = 12;
      break;
     case 12:
      HEAP[$RetVal] = 0;
      __label__ = 14;
      break;
     case 13:
      
      
      
      var $87 = HEAP[$68 + 20] - $start_total_out;
      var $88 = __PyString_Resize($RetVal, $87);
      __label__ = 14;
      break;
     case 14:
      
      $0 = HEAP[$RetVal];
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
  function _PyZlib_objdecompress($self, $args) {
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
      var $err;
      var $inplen = __stackBase__;
      var $max_length = __stackBase__ + 4;
      var $old_length;
      var $length;
      var $RetVal = __stackBase__ + 8;
      var $input = __stackBase__ + 12;
      var $start_total_out;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$max_length] = 0;
      $length = 16384;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str27, allocate([ $input, 0, 0, 0, $inplen, 0, 0, 0, $max_length, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 46;
      break;
     case 2:
      
      
      if (HEAP[$max_length] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($6, __str28);
      $0 = 0;
      __label__ = 46;
      break;
     case 4:
      
      
      if (HEAP[$max_length] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      if ($length > HEAP[$max_length]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      $length = HEAP[$max_length];
      __label__ = 7;
      break;
     case 7:
      
      var $14 = _PyString_FromStringAndSize(0, $length);
      HEAP[$RetVal] = $14;
      
      if ($14 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 46;
      break;
     case 9:
      
      
      
      
      $start_total_out = HEAP[$self_addr + 8 + 20];
      var $20 = HEAP[$inplen];
      
      
      
      HEAP[$self_addr + 8 + 4] = $20;
      var $24 = HEAP[$input];
      
      
      
      HEAP[$self_addr + 8] = $24;
      
      
      
      
      HEAP[$self_addr + 8 + 16] = $length;
      
      
      
      var $35 = HEAP[$RetVal] + 20;
      
      
      
      HEAP[$self_addr + 8 + 12] = $35;
      
      
      var $41 = _inflate($self_addr + 8, 2);
      $err = $41;
      __lastLabel__ = 9;
      __label__ = 18;
      break;
     case 10:
      
      
      if (HEAP[$max_length] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      $old_length = $length;
      
      var $46 = $length << 1;
      $length = $46;
      __label__ = 16;
      break;
     case 12:
      var $47 = HEAP[$max_length];
      
      
      if ($length >= $47) {
        __lastLabel__ = 12;
        __label__ = 21;
        break;
      } else {
        __lastLabel__ = 12;
        __label__ = 13;
        break;
      }
     case 13:
      
      $old_length = $length;
      
      var $52 = $length << 1;
      $length = $52;
      
      if ($47 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      if ($length > HEAP[$max_length]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      $length = HEAP[$max_length];
      __label__ = 16;
      break;
     case 16:
      
      var $59 = __PyString_Resize($RetVal, $length);
      
      if ($59 < 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      
      var $66 = HEAP[$RetVal] + 20 + $old_length;
      
      
      
      HEAP[$self_addr + 8 + 12] = $66;
      
      
      
      
      
      
      HEAP[$self_addr + 8 + 16] = $length - $old_length;
      
      
      var $78 = _inflate($self_addr + 8, 2);
      $err = $78;
      __lastLabel__ = 17;
      __label__ = 18;
      break;
     case 18:
      var $79 = __lastLabel__ == 17 ? $78 : $41;
      
      if ($79 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      
      if (HEAP[$self_addr + 8 + 16] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      var $_pr = HEAP[$max_length];
      __lastLabel__ = 20;
      __label__ = 21;
      break;
     case 21:
      var $86 = __lastLabel__ == 20 ? $_pr : $47;
      
      
      
      var $90 = HEAP[$self_addr + 68];
      if ($86 != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 22:
      
      
      var $93 = HEAP[$90] - 1;
      var $94 = $90;
      HEAP[$94] = $93;
      
      
      
      if (HEAP[$90] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      
      
      var $104 = HEAP[HEAP[HEAP[$self_addr + 68] + 4] + 24];
      
      
      var $107 = HEAP[$self_addr + 68];
      FUNCTION_TABLE[$104]($107);
      __label__ = 24;
      break;
     case 24:
      
      
      
      var $111 = HEAP[$self_addr + 8 + 4];
      
      
      
      var $115 = HEAP[$self_addr + 8];
      var $116 = _PyString_FromStringAndSize($115, $111);
      
      
      HEAP[$self_addr + 68] = $116;
      __label__ = 29;
      break;
     case 25:
      
      
      
      
      if (HEAP[$90 + 8] > 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 26:
      
      
      var $125 = HEAP[$self_addr + 68];
      
      
      var $128 = HEAP[$125] - 1;
      var $129 = $125;
      HEAP[$129] = $128;
      
      
      
      if (HEAP[$125] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      
      
      var $139 = HEAP[HEAP[HEAP[$self_addr + 68] + 4] + 24];
      
      
      var $142 = HEAP[$self_addr + 68];
      FUNCTION_TABLE[$139]($142);
      __label__ = 28;
      break;
     case 28:
      var $143 = _PyString_FromStringAndSize(__str5, 0);
      
      
      HEAP[$self_addr + 68] = $143;
      __label__ = 29;
      break;
     case 29:
      
      
      
      
      if (HEAP[$self_addr + 68] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 30:
      var $150 = HEAP[$RetVal];
      
      
      var $153 = HEAP[$150] - 1;
      var $154 = $150;
      HEAP[$154] = $153;
      
      
      
      if (HEAP[$150] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $162 = HEAP[HEAP[HEAP[$RetVal] + 4] + 24];
      var $163 = HEAP[$RetVal];
      FUNCTION_TABLE[$162]($163);
      __label__ = 32;
      break;
     case 32:
      HEAP[$RetVal] = 0;
      __label__ = 45;
      break;
     case 33:
      
      
      if ($err == 1) {
        __label__ = 34;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 34:
      
      
      
      
      if (HEAP[$self_addr + 64] != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 35:
      
      
      var $172 = HEAP[$self_addr + 64];
      
      
      var $175 = HEAP[$172] - 1;
      var $176 = $172;
      HEAP[$176] = $175;
      
      
      
      if (HEAP[$172] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      
      
      var $186 = HEAP[HEAP[HEAP[$self_addr + 64] + 4] + 24];
      
      
      var $189 = HEAP[$self_addr + 64];
      FUNCTION_TABLE[$186]($189);
      __label__ = 37;
      break;
     case 37:
      
      
      
      var $193 = HEAP[$self_addr + 8 + 4];
      
      
      
      var $197 = HEAP[$self_addr + 8];
      var $198 = _PyString_FromStringAndSize($197, $193);
      
      
      HEAP[$self_addr + 64] = $198;
      
      
      
      
      if (HEAP[$self_addr + 64] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 38:
      var $205 = HEAP[$RetVal];
      
      
      var $208 = HEAP[$205] - 1;
      var $209 = $205;
      HEAP[$209] = $208;
      
      
      
      if (HEAP[$205] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 39:
      
      
      
      
      var $217 = HEAP[HEAP[HEAP[$RetVal] + 4] + 24];
      var $218 = HEAP[$RetVal];
      FUNCTION_TABLE[$217]($218);
      __label__ = 45;
      break;
     case 40:
      
      
      
      var $222 = $err != -5;
      
      if ($err != 0 & $222) {
        __label__ = 41;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 41:
      
      
      
      _zlib_error($self_addr + 8, $err, __str29);
      var $226 = HEAP[$RetVal];
      
      
      var $229 = HEAP[$226] - 1;
      var $230 = $226;
      HEAP[$230] = $229;
      
      
      
      if (HEAP[$226] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $238 = HEAP[HEAP[HEAP[$RetVal] + 4] + 24];
      var $239 = HEAP[$RetVal];
      FUNCTION_TABLE[$238]($239);
      __label__ = 43;
      break;
     case 43:
      HEAP[$RetVal] = 0;
      __label__ = 45;
      break;
     case 44:
      
      
      
      
      
      var $245 = HEAP[$self_addr + 8 + 20] - $start_total_out;
      var $246 = __PyString_Resize($RetVal, $245);
      __label__ = 45;
      break;
     case 45:
      
      $0 = HEAP[$RetVal];
      __label__ = 46;
      break;
     case 46:
      
      $retval = $0;
      var $retval46 = $retval;
      STACKTOP = __stackBase__;
      return $retval46;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyZlib_flush($self, $args) {
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
      var $err;
      var $length;
      var $RetVal = __stackBase__;
      var $flushmode = __stackBase__ + 4;
      var $start_total_out;
      $self_addr = $self;
      $args_addr = $args;
      $length = 16384;
      HEAP[$flushmode] = 4;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str30, allocate([ $flushmode, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if (HEAP[$flushmode] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = _PyString_FromStringAndSize(0, 0);
      $0 = $6;
      __label__ = 24;
      break;
     case 4:
      
      var $8 = _PyString_FromStringAndSize(0, $length);
      HEAP[$RetVal] = $8;
      
      
      if (HEAP[$RetVal] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 24;
      break;
     case 6:
      
      
      
      
      $start_total_out = HEAP[$self_addr + 8 + 20];
      
      
      
      HEAP[$self_addr + 8 + 4] = 0;
      
      
      
      
      HEAP[$self_addr + 8 + 16] = $length;
      
      
      
      var $25 = HEAP[$RetVal] + 20;
      
      
      
      HEAP[$self_addr + 8 + 12] = $25;
      var $29 = HEAP[$flushmode];
      
      
      var $32 = _deflate($self_addr + 8, $29);
      $err = $32;
      __lastLabel__ = 6;
      __label__ = 9;
      break;
     case 7:
      
      
      var $35 = __PyString_Resize($RetVal, $length << 1);
      
      if ($35 < 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      var $42 = HEAP[$RetVal] + 20 + $length;
      
      
      
      HEAP[$self_addr + 8 + 12] = $42;
      
      
      
      
      HEAP[$self_addr + 8 + 16] = $length;
      
      var $51 = $length << 1;
      $length = $51;
      var $52 = HEAP[$flushmode];
      
      
      var $55 = _deflate($self_addr + 8, $52);
      $err = $55;
      __lastLabel__ = 8;
      __label__ = 9;
      break;
     case 9:
      var $56 = __lastLabel__ == 8 ? $55 : $32;
      
      if ($56 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      if (HEAP[$self_addr + 8 + 16] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      if ($err != 1) {
        __label__ = 18;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if (HEAP[$flushmode] != 4) {
        __label__ = 18;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      var $69 = _deflateEnd($self_addr + 8);
      $err = $69;
      
      
      var $72 = $self_addr;
      if ($err != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      
      _zlib_error($72 + 8, $err, __str31);
      var $75 = HEAP[$RetVal];
      
      
      var $78 = HEAP[$75] - 1;
      var $79 = $75;
      HEAP[$79] = $78;
      
      
      
      if (HEAP[$75] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $87 = HEAP[HEAP[HEAP[$RetVal] + 4] + 24];
      var $88 = HEAP[$RetVal];
      FUNCTION_TABLE[$87]($88);
      __label__ = 16;
      break;
     case 16:
      HEAP[$RetVal] = 0;
      __label__ = 23;
      break;
     case 17:
      
      HEAP[$72 + 72] = 0;
      __label__ = 22;
      break;
     case 18:
      
      
      
      var $93 = $err != -5;
      
      if ($err != 0 & $93) {
        __label__ = 19;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 19:
      
      
      
      _zlib_error($self_addr + 8, $err, __str32);
      var $97 = HEAP[$RetVal];
      
      
      var $100 = HEAP[$97] - 1;
      var $101 = $97;
      HEAP[$101] = $100;
      
      
      
      if (HEAP[$97] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $109 = HEAP[HEAP[HEAP[$RetVal] + 4] + 24];
      var $110 = HEAP[$RetVal];
      FUNCTION_TABLE[$109]($110);
      __label__ = 21;
      break;
     case 21:
      HEAP[$RetVal] = 0;
      __label__ = 23;
      break;
     case 22:
      
      
      
      
      
      var $116 = HEAP[$self_addr + 8 + 20] - $start_total_out;
      var $117 = __PyString_Resize($RetVal, $116);
      __label__ = 23;
      break;
     case 23:
      
      $0 = HEAP[$RetVal];
      __label__ = 24;
      break;
     case 24:
      
      $retval = $0;
      var $retval24 = $retval;
      STACKTOP = __stackBase__;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyZlib_copy($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $retval1;
      var $err;
      $self_addr = $self;
      $retval1 = 0;
      var $1 = _newcompobject(_Comptype);
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
      __label__ = 17;
      break;
     case 2:
      
      
      
      
      var $8 = _deflateCopy($retval1 + 8, $self_addr + 8);
      $err = $8;
      var $9 = $err;
      if ($9 == -4) {
        __label__ = 5;
        break;
      } else if ($9 == -2) {
        __label__ = 4;
        break;
      } else if ($9 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      
      var $15 = HEAP[HEAP[$self_addr + 64]] + 1;
      var $16 = HEAP[$self_addr + 64];
      HEAP[$16] = $15;
      
      
      
      
      
      var $22 = HEAP[HEAP[$self_addr + 68]] + 1;
      var $23 = HEAP[$self_addr + 68];
      HEAP[$23] = $22;
      
      
      
      
      if (HEAP[$retval1 + 64] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      var $28 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($28, __str33);
      __label__ = 13;
      break;
     case 5:
      var $29 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($29, __str19);
      __label__ = 13;
      break;
     case 6:
      
      
      
      _zlib_error($self_addr + 8, $err, __str34);
      __label__ = 13;
      break;
     case 7:
      
      
      var $35 = HEAP[$retval1 + 64];
      
      
      var $38 = HEAP[$35] - 1;
      var $39 = $35;
      HEAP[$39] = $38;
      
      
      
      if (HEAP[$35] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[$retval1 + 64] + 4] + 24];
      
      
      var $52 = HEAP[$retval1 + 64];
      FUNCTION_TABLE[$49]($52);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[$retval1 + 68] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $59 = HEAP[$retval1 + 68];
      
      
      var $62 = HEAP[$59] - 1;
      var $63 = $59;
      HEAP[$63] = $62;
      
      
      
      if (HEAP[$59] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[$retval1 + 68] + 4] + 24];
      
      
      var $76 = HEAP[$retval1 + 68];
      FUNCTION_TABLE[$73]($76);
      __label__ = 12;
      break;
     case 12:
      
      
      var $79 = HEAP[$self_addr + 64];
      
      
      HEAP[$retval1 + 64] = $79;
      
      
      var $84 = HEAP[$self_addr + 68];
      
      
      HEAP[$retval1 + 68] = $84;
      
      
      HEAP[$retval1 + 72] = 1;
      
      
      $0 = $retval1;
      __label__ = 17;
      break;
     case 13:
      
      
      if ($retval1 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      
      var $97 = HEAP[$retval1] - 1;
      
      HEAP[$retval1] = $97;
      
      
      
      if (HEAP[$retval1] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      var $107 = HEAP[HEAP[$retval1 + 4] + 24];
      
      
      FUNCTION_TABLE[$107]($retval1);
      __label__ = 16;
      break;
     case 16:
      $0 = 0;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval17 = $retval;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyZlib_uncopy($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $retval1;
      var $err;
      $self_addr = $self;
      $retval1 = 0;
      var $1 = _newcompobject(_Decomptype);
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
      __label__ = 17;
      break;
     case 2:
      
      
      
      
      var $8 = _inflateCopy($retval1 + 8, $self_addr + 8);
      $err = $8;
      var $9 = $err;
      if ($9 == -4) {
        __label__ = 5;
        break;
      } else if ($9 == -2) {
        __label__ = 4;
        break;
      } else if ($9 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      
      var $15 = HEAP[HEAP[$self_addr + 64]] + 1;
      var $16 = HEAP[$self_addr + 64];
      HEAP[$16] = $15;
      
      
      
      
      
      var $22 = HEAP[HEAP[$self_addr + 68]] + 1;
      var $23 = HEAP[$self_addr + 68];
      HEAP[$23] = $22;
      
      
      
      
      if (HEAP[$retval1 + 64] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      var $28 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($28, __str33);
      __label__ = 13;
      break;
     case 5:
      var $29 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($29, __str23);
      __label__ = 13;
      break;
     case 6:
      
      
      
      _zlib_error($self_addr + 8, $err, __str35);
      __label__ = 13;
      break;
     case 7:
      
      
      var $35 = HEAP[$retval1 + 64];
      
      
      var $38 = HEAP[$35] - 1;
      var $39 = $35;
      HEAP[$39] = $38;
      
      
      
      if (HEAP[$35] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[$retval1 + 64] + 4] + 24];
      
      
      var $52 = HEAP[$retval1 + 64];
      FUNCTION_TABLE[$49]($52);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[$retval1 + 68] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $59 = HEAP[$retval1 + 68];
      
      
      var $62 = HEAP[$59] - 1;
      var $63 = $59;
      HEAP[$63] = $62;
      
      
      
      if (HEAP[$59] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[$retval1 + 68] + 4] + 24];
      
      
      var $76 = HEAP[$retval1 + 68];
      FUNCTION_TABLE[$73]($76);
      __label__ = 12;
      break;
     case 12:
      
      
      var $79 = HEAP[$self_addr + 64];
      
      
      HEAP[$retval1 + 64] = $79;
      
      
      var $84 = HEAP[$self_addr + 68];
      
      
      HEAP[$retval1 + 68] = $84;
      
      
      HEAP[$retval1 + 72] = 1;
      
      
      $0 = $retval1;
      __label__ = 17;
      break;
     case 13:
      
      
      if ($retval1 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      
      var $97 = HEAP[$retval1] - 1;
      
      HEAP[$retval1] = $97;
      
      
      
      if (HEAP[$retval1] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      var $107 = HEAP[HEAP[$retval1 + 4] + 24];
      
      
      FUNCTION_TABLE[$107]($retval1);
      __label__ = 16;
      break;
     case 16:
      $0 = 0;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval17 = $retval;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyZlib_unflush($self, $args) {
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
      var $err;
      var $length = __stackBase__;
      var $retval1 = __stackBase__ + 4;
      var $start_total_out;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$length] = 16384;
      HEAP[$retval1] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str30, allocate([ $length, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if (HEAP[$length] <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($6, __str36);
      $0 = 0;
      __label__ = 19;
      break;
     case 4:
      var $7 = HEAP[$length];
      var $8 = _PyString_FromStringAndSize(0, $7);
      HEAP[$retval1] = $8;
      
      
      if (HEAP[$retval1] == 0) {
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
      
      
      
      
      $start_total_out = HEAP[$self_addr + 8 + 20];
      var $15 = HEAP[$length];
      
      
      
      HEAP[$self_addr + 8 + 16] = $15;
      
      
      
      var $22 = HEAP[$retval1] + 20;
      
      
      
      HEAP[$self_addr + 8 + 12] = $22;
      
      
      var $28 = _inflate($self_addr + 8, 4);
      $err = $28;
      __label__ = 9;
      break;
     case 7:
      
      var $30 = HEAP[$length] << 1;
      var $31 = __PyString_Resize($retval1, $30);
      
      if ($31 < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      var $38 = HEAP[$retval1] + 20 + HEAP[$length];
      
      
      
      HEAP[$self_addr + 8 + 12] = $38;
      var $42 = HEAP[$length];
      
      
      
      HEAP[$self_addr + 8 + 16] = $42;
      
      var $47 = HEAP[$length] << 1;
      HEAP[$length] = $47;
      
      
      var $50 = _inflate($self_addr + 8, 4);
      $err = $50;
      __label__ = 9;
      break;
     case 9:
      
      
      var $53 = $err;
      var $54 = $53 == -5;
      
      if ($err == 0 | $54) {
        __lastLabel__ = 9;
        __label__ = 10;
        break;
      } else {
        __lastLabel__ = 9;
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      
      
      if (HEAP[$self_addr + 8 + 16] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $_pr = $err;
      __lastLabel__ = 11;
      __label__ = 12;
      break;
     case 12:
      var $60 = __lastLabel__ == 11 ? $_pr : $53;
      
      if ($60 == 1) {
        __label__ = 13;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 13:
      
      
      var $64 = _inflateEnd($self_addr + 8);
      $err = $64;
      
      
      HEAP[$self_addr + 72] = 0;
      
      
      if ($err != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      
      
      _zlib_error($self_addr + 8, $err, __str37);
      var $72 = HEAP[$retval1];
      
      
      var $75 = HEAP[$72] - 1;
      var $76 = $72;
      HEAP[$76] = $75;
      
      
      
      if (HEAP[$72] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $84 = HEAP[HEAP[HEAP[$retval1] + 4] + 24];
      var $85 = HEAP[$retval1];
      FUNCTION_TABLE[$84]($85);
      __label__ = 16;
      break;
     case 16:
      HEAP[$retval1] = 0;
      __label__ = 18;
      break;
     case 17:
      
      
      
      
      
      var $91 = HEAP[$self_addr + 8 + 20] - $start_total_out;
      var $92 = __PyString_Resize($retval1, $91);
      __label__ = 18;
      break;
     case 18:
      
      $0 = HEAP[$retval1];
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
  function _Comp_getattr($self, $name) {
    
    var $self_addr;
    var $name_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $name_addr = $name;
    
    
    
    var $4 = _Py_FindMethod(_comp_methods, $self_addr, $name_addr);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _Decomp_getattr($self, $name) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $name_addr;
      var $retval;
      var $0;
      var $retval1;
      $self_addr = $self;
      $name_addr = $name;
      
      var $2 = _strcmp($name_addr, __str42);
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      var $9 = HEAP[HEAP[$self_addr + 64]] + 1;
      var $10 = HEAP[$self_addr + 64];
      HEAP[$10] = $9;
      
      
      
      $retval1 = HEAP[$self_addr + 64];
      __label__ = 5;
      break;
     case 2:
      
      var $15 = _strcmp($name_addr, __str43);
      
      var $17 = $self_addr;
      if ($15 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $22 = HEAP[HEAP[$17 + 68]] + 1;
      var $23 = HEAP[$17 + 68];
      HEAP[$23] = $22;
      
      
      
      $retval1 = HEAP[$self_addr + 68];
      __label__ = 5;
      break;
     case 4:
      
      
      var $29 = _Py_FindMethod(_Decomp_methods, $17, $name_addr);
      $retval1 = $29;
      __label__ = 5;
      break;
     case 5:
      
      $0 = $retval1;
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyZlib_adler32($self, $args) {
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
      var $adler32val = __stackBase__;
      var $buf = __stackBase__ + 4;
      var $len = __stackBase__ + 8;
      var $signed_val;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$adler32val] = 1;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str44, allocate([ $buf, 0, 0, 0, $len, 0, 0, 0, $adler32val, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$len];
      var $5 = HEAP[$buf];
      var $6 = HEAP[$adler32val];
      var $7 = _adler32($6, $5, $4);
      $signed_val = $7;
      
      var $9 = _PyInt_FromLong($signed_val);
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
  function _PyZlib_crc32($self, $args) {
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
      var $crc32val = __stackBase__;
      var $buf = __stackBase__ + 4;
      var $len = __stackBase__ + 8;
      var $signed_val;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$crc32val] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str45, allocate([ $buf, 0, 0, 0, $len, 0, 0, 0, $crc32val, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$len];
      var $5 = HEAP[$buf];
      var $6 = HEAP[$crc32val];
      var $7 = _crc32($6, $5, $4);
      $signed_val = $7;
      
      var $9 = _PyInt_FromLong($signed_val);
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
  function _initzlib() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $ver;
      HEAP[_Comptype + 4] = _PyType_Type;
      HEAP[_Decomptype + 4] = _PyType_Type;
      var $0 = _Py_InitModule4(__str52, _zlib_methods, _zlib_module_documentation, 0, 1013);
      $m = $0;
      
      
      if ($m == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = _PyErr_NewException(__str53, 0, 0);
      HEAP[_ZlibError] = $3;
      
      
      if (HEAP[_ZlibError] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $9 = HEAP[HEAP[_ZlibError]] + 1;
      var $10 = HEAP[_ZlibError];
      HEAP[$10] = $9;
      var $11 = HEAP[_ZlibError];
      
      var $13 = _PyModule_AddObject($m, __str54, $11);
      __label__ = 3;
      break;
     case 3:
      
      var $15 = _PyModule_AddIntConstant($m, __str55, 15);
      
      var $17 = _PyModule_AddIntConstant($m, __str56, 8);
      
      var $19 = _PyModule_AddIntConstant($m, __str57, 8);
      
      var $21 = _PyModule_AddIntConstant($m, __str58, 1);
      
      var $23 = _PyModule_AddIntConstant($m, __str59, 9);
      
      var $25 = _PyModule_AddIntConstant($m, __str60, -1);
      
      var $27 = _PyModule_AddIntConstant($m, __str61, 1);
      
      var $29 = _PyModule_AddIntConstant($m, __str62, 2);
      
      var $31 = _PyModule_AddIntConstant($m, __str63, 0);
      
      var $33 = _PyModule_AddIntConstant($m, __str64, 4);
      
      var $35 = _PyModule_AddIntConstant($m, __str65, 0);
      
      var $37 = _PyModule_AddIntConstant($m, __str66, 2);
      
      var $39 = _PyModule_AddIntConstant($m, __str67, 3);
      var $40 = _PyString_FromString(__str8);
      $ver = $40;
      
      if ($40 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $44 = _PyModule_AddObject($m, __str68, $ver);
      __label__ = 5;
      break;
     case 5:
      
      var $46 = _PyModule_AddStringConstant($m, __str69, __str70);
      __label__ = 6;
      break;
     case 6:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initzlib"] = _initzlib;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _PyZlib_objcompress, 0, _PyZlib_flush, 0, _PyZlib_copy, 0, _PyZlib_objdecompress, 0, _PyZlib_unflush, 0, _PyZlib_uncopy, 0, _PyZlib_adler32, 0, _PyZlib_compress, 0, _PyZlib_compressobj, 0, _PyZlib_crc32, 0, _PyZlib_decompress, 0, _PyZlib_decompressobj, 0, _Comp_dealloc, 0, _Comp_getattr, 0, _Decomp_dealloc, 0, _Decomp_getattr, 0 ]);
  function run(args) {
    __str = allocate([ 105, 110, 99, 111, 109, 112, 108, 101, 116, 101, 32, 111, 114, 32, 116, 114, 117, 110, 99, 97, 116, 101, 100, 32, 115, 116, 114, 101, 97, 109, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 105, 110, 99, 111, 110, 115, 105, 115, 116, 101, 110, 116, 32, 115, 116, 114, 101, 97, 109, 32, 115, 116, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 105, 110, 112, 117, 116, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    _ZlibError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str3 = allocate([ 69, 114, 114, 111, 114, 32, 37, 100, 32, 37, 115, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 69, 114, 114, 111, 114, 32, 37, 100, 32, 37, 115, 58, 32, 37, 46, 50, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    _compressobj__doc__ = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 111, 98, 106, 40, 91, 108, 101, 118, 101, 108, 93, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 46, 10, 10, 79, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 32, 108, 101, 118, 101, 108, 32, 105, 115, 32, 116, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 108, 101, 118, 101, 108, 44, 32, 105, 110, 32, 49, 45, 57, 46, 0 ], "i8", ALLOC_NORMAL);
    _decompressobj__doc__ = allocate([ 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 98, 106, 40, 91, 119, 98, 105, 116, 115, 93, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 46, 10, 10, 79, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 32, 119, 98, 105, 116, 115, 32, 105, 115, 32, 116, 104, 101, 32, 119, 105, 110, 100, 111, 119, 32, 98, 117, 102, 102, 101, 114, 32, 115, 105, 122, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate(1, "i8", ALLOC_NORMAL);
    _compress__doc__ = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 40, 115, 116, 114, 105, 110, 103, 91, 44, 32, 108, 101, 118, 101, 108, 93, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 101, 100, 32, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 115, 116, 114, 105, 110, 103, 46, 10, 10, 79, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 32, 108, 101, 118, 101, 108, 32, 105, 115, 32, 116, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 108, 101, 118, 101, 108, 44, 32, 105, 110, 32, 49, 45, 57, 46, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 115, 35, 124, 105, 58, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 67, 97, 110, 39, 116, 32, 97, 108, 108, 111, 99, 97, 116, 101, 32, 109, 101, 109, 111, 114, 121, 32, 116, 111, 32, 99, 111, 109, 112, 114, 101, 115, 115, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 49, 46, 50, 46, 53, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 79, 117, 116, 32, 111, 102, 32, 109, 101, 109, 111, 114, 121, 32, 119, 104, 105, 108, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 66, 97, 100, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 108, 101, 118, 101, 108, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 119, 104, 105, 108, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 119, 104, 105, 108, 101, 32, 102, 105, 110, 105, 115, 104, 105, 110, 103, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    _decompress__doc__ = allocate([ 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 40, 115, 116, 114, 105, 110, 103, 91, 44, 32, 119, 98, 105, 116, 115, 91, 44, 32, 98, 117, 102, 115, 105, 122, 101, 93, 93, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 115, 116, 114, 105, 110, 103, 46, 10, 10, 79, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 32, 119, 98, 105, 116, 115, 32, 105, 115, 32, 116, 104, 101, 32, 119, 105, 110, 100, 111, 119, 32, 98, 117, 102, 102, 101, 114, 32, 115, 105, 122, 101, 46, 32, 32, 79, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 32, 98, 117, 102, 115, 105, 122, 101, 32, 105, 115, 10, 116, 104, 101, 32, 105, 110, 105, 116, 105, 97, 108, 32, 111, 117, 116, 112, 117, 116, 32, 98, 117, 102, 102, 101, 114, 32, 115, 105, 122, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 115, 35, 124, 105, 110, 58, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 79, 117, 116, 32, 111, 102, 32, 109, 101, 109, 111, 114, 121, 32, 119, 104, 105, 108, 101, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 119, 104, 105, 108, 101, 32, 112, 114, 101, 112, 97, 114, 105, 110, 103, 32, 116, 111, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 119, 104, 105, 108, 101, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 119, 104, 105, 108, 101, 32, 102, 105, 110, 105, 115, 104, 105, 110, 103, 32, 100, 97, 116, 97, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 124, 105, 105, 105, 105, 105, 58, 99, 111, 109, 112, 114, 101, 115, 115, 111, 98, 106, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 67, 97, 110, 39, 116, 32, 97, 108, 108, 111, 99, 97, 116, 101, 32, 109, 101, 109, 111, 114, 121, 32, 102, 111, 114, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 73, 110, 118, 97, 108, 105, 100, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 97, 116, 105, 111, 110, 32, 111, 112, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 119, 104, 105, 108, 101, 32, 99, 114, 101, 97, 116, 105, 110, 103, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 124, 105, 58, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 98, 106, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 67, 97, 110, 39, 116, 32, 97, 108, 108, 111, 99, 97, 116, 101, 32, 109, 101, 109, 111, 114, 121, 32, 102, 111, 114, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 119, 104, 105, 108, 101, 32, 99, 114, 101, 97, 116, 105, 110, 103, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _comp_compress__doc__ = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 40, 100, 97, 116, 97, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 100, 97, 116, 97, 32, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 46, 10, 10, 65, 102, 116, 101, 114, 32, 99, 97, 108, 108, 105, 110, 103, 32, 116, 104, 105, 115, 32, 102, 117, 110, 99, 116, 105, 111, 110, 44, 32, 115, 111, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 105, 110, 112, 117, 116, 32, 100, 97, 116, 97, 32, 109, 97, 121, 32, 115, 116, 105, 108, 108, 10, 98, 101, 32, 115, 116, 111, 114, 101, 100, 32, 105, 110, 32, 105, 110, 116, 101, 114, 110, 97, 108, 32, 98, 117, 102, 102, 101, 114, 115, 32, 102, 111, 114, 32, 108, 97, 116, 101, 114, 32, 112, 114, 111, 99, 101, 115, 115, 105, 110, 103, 46, 10, 67, 97, 108, 108, 32, 116, 104, 101, 32, 102, 108, 117, 115, 104, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 116, 111, 32, 99, 108, 101, 97, 114, 32, 116, 104, 101, 115, 101, 32, 98, 117, 102, 102, 101, 114, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 115, 35, 58, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 119, 104, 105, 108, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _decomp_decompress__doc__ = allocate([ 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 40, 100, 97, 116, 97, 44, 32, 109, 97, 120, 95, 108, 101, 110, 103, 116, 104, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 116, 104, 101, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 10, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32, 116, 104, 101, 32, 100, 97, 116, 97, 46, 10, 10, 65, 102, 116, 101, 114, 32, 99, 97, 108, 108, 105, 110, 103, 32, 116, 104, 105, 115, 32, 102, 117, 110, 99, 116, 105, 111, 110, 44, 32, 115, 111, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 105, 110, 112, 117, 116, 32, 100, 97, 116, 97, 32, 109, 97, 121, 32, 115, 116, 105, 108, 108, 32, 98, 101, 32, 115, 116, 111, 114, 101, 100, 32, 105, 110, 10, 105, 110, 116, 101, 114, 110, 97, 108, 32, 98, 117, 102, 102, 101, 114, 115, 32, 102, 111, 114, 32, 108, 97, 116, 101, 114, 32, 112, 114, 111, 99, 101, 115, 115, 105, 110, 103, 46, 10, 67, 97, 108, 108, 32, 116, 104, 101, 32, 102, 108, 117, 115, 104, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 116, 111, 32, 99, 108, 101, 97, 114, 32, 116, 104, 101, 115, 101, 32, 98, 117, 102, 102, 101, 114, 115, 46, 10, 73, 102, 32, 116, 104, 101, 32, 109, 97, 120, 95, 108, 101, 110, 103, 116, 104, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 105, 115, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 116, 104, 101, 110, 32, 116, 104, 101, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 119, 105, 108, 108, 32, 98, 101, 10, 110, 111, 32, 108, 111, 110, 103, 101, 114, 32, 116, 104, 97, 110, 32, 109, 97, 120, 95, 108, 101, 110, 103, 116, 104, 46, 32, 32, 85, 110, 99, 111, 110, 115, 117, 109, 101, 100, 32, 105, 110, 112, 117, 116, 32, 100, 97, 116, 97, 32, 119, 105, 108, 108, 32, 98, 101, 32, 115, 116, 111, 114, 101, 100, 32, 105, 110, 10, 116, 104, 101, 32, 117, 110, 99, 111, 110, 115, 117, 109, 101, 100, 95, 116, 97, 105, 108, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 115, 35, 124, 105, 58, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 109, 97, 120, 95, 108, 101, 110, 103, 116, 104, 32, 109, 117, 115, 116, 32, 98, 101, 32, 103, 114, 101, 97, 116, 101, 114, 32, 116, 104, 97, 110, 32, 122, 101, 114, 111, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 119, 104, 105, 108, 101, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _comp_flush__doc__ = allocate([ 102, 108, 117, 115, 104, 40, 32, 91, 109, 111, 100, 101, 93, 32, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 97, 110, 121, 32, 114, 101, 109, 97, 105, 110, 105, 110, 103, 32, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 100, 97, 116, 97, 46, 10, 10, 109, 111, 100, 101, 32, 99, 97, 110, 32, 98, 101, 32, 111, 110, 101, 32, 111, 102, 32, 116, 104, 101, 32, 99, 111, 110, 115, 116, 97, 110, 116, 115, 32, 90, 95, 83, 89, 78, 67, 95, 70, 76, 85, 83, 72, 44, 32, 90, 95, 70, 85, 76, 76, 95, 70, 76, 85, 83, 72, 44, 32, 90, 95, 70, 73, 78, 73, 83, 72, 59, 32, 116, 104, 101, 10, 100, 101, 102, 97, 117, 108, 116, 32, 118, 97, 108, 117, 101, 32, 117, 115, 101, 100, 32, 119, 104, 101, 110, 32, 109, 111, 100, 101, 32, 105, 115, 32, 110, 111, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 105, 115, 32, 90, 95, 70, 73, 78, 73, 83, 72, 46, 10, 73, 102, 32, 109, 111, 100, 101, 32, 61, 61, 32, 90, 95, 70, 73, 78, 73, 83, 72, 44, 32, 116, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 32, 99, 97, 110, 32, 110, 111, 32, 108, 111, 110, 103, 101, 114, 32, 98, 101, 32, 117, 115, 101, 100, 32, 97, 102, 116, 101, 114, 10, 99, 97, 108, 108, 105, 110, 103, 32, 116, 104, 101, 32, 102, 108, 117, 115, 104, 40, 41, 32, 109, 101, 116, 104, 111, 100, 46, 32, 32, 79, 116, 104, 101, 114, 119, 105, 115, 101, 44, 32, 109, 111, 114, 101, 32, 100, 97, 116, 97, 32, 99, 97, 110, 32, 115, 116, 105, 108, 108, 32, 98, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 124, 105, 58, 102, 108, 117, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 102, 114, 111, 109, 32, 100, 101, 102, 108, 97, 116, 101, 69, 110, 100, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 119, 104, 105, 108, 101, 32, 102, 108, 117, 115, 104, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _comp_copy__doc__ = allocate([ 99, 111, 112, 121, 40, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 111, 98, 106, 101, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 73, 110, 99, 111, 110, 115, 105, 115, 116, 101, 110, 116, 32, 115, 116, 114, 101, 97, 109, 32, 115, 116, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 119, 104, 105, 108, 101, 32, 99, 111, 112, 121, 105, 110, 103, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _decomp_copy__doc__ = allocate([ 99, 111, 112, 121, 40, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 111, 98, 106, 101, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 119, 104, 105, 108, 101, 32, 99, 111, 112, 121, 105, 110, 103, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _decomp_flush__doc__ = allocate([ 102, 108, 117, 115, 104, 40, 32, 91, 108, 101, 110, 103, 116, 104, 93, 32, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 97, 110, 121, 32, 114, 101, 109, 97, 105, 110, 105, 110, 103, 10, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 100, 97, 116, 97, 46, 32, 108, 101, 110, 103, 116, 104, 44, 32, 105, 102, 32, 103, 105, 118, 101, 110, 44, 32, 105, 115, 32, 116, 104, 101, 32, 105, 110, 105, 116, 105, 97, 108, 32, 115, 105, 122, 101, 32, 111, 102, 32, 116, 104, 101, 10, 111, 117, 116, 112, 117, 116, 32, 98, 117, 102, 102, 101, 114, 46, 10, 10, 84, 104, 101, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 32, 99, 97, 110, 32, 110, 111, 32, 108, 111, 110, 103, 101, 114, 32, 98, 101, 32, 117, 115, 101, 100, 32, 97, 102, 116, 101, 114, 32, 116, 104, 105, 115, 32, 99, 97, 108, 108, 46, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 108, 101, 110, 103, 116, 104, 32, 109, 117, 115, 116, 32, 98, 101, 32, 103, 114, 101, 97, 116, 101, 114, 32, 116, 104, 97, 110, 32, 122, 101, 114, 111, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 102, 114, 111, 109, 32, 105, 110, 102, 108, 97, 116, 101, 69, 110, 100, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 102, 108, 117, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 99, 111, 112, 121, 0 ], "i8", ALLOC_NORMAL);
    _comp_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str41 = allocate([ 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    _Decomp_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str42 = allocate([ 117, 110, 117, 115, 101, 100, 95, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 117, 110, 99, 111, 110, 115, 117, 109, 101, 100, 95, 116, 97, 105, 108, 0 ], "i8", ALLOC_NORMAL);
    _adler32__doc__ = allocate([ 97, 100, 108, 101, 114, 51, 50, 40, 115, 116, 114, 105, 110, 103, 91, 44, 32, 115, 116, 97, 114, 116, 93, 41, 32, 45, 45, 32, 67, 111, 109, 112, 117, 116, 101, 32, 97, 110, 32, 65, 100, 108, 101, 114, 45, 51, 50, 32, 99, 104, 101, 99, 107, 115, 117, 109, 32, 111, 102, 32, 115, 116, 114, 105, 110, 103, 46, 10, 10, 65, 110, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 115, 116, 97, 114, 116, 105, 110, 103, 32, 118, 97, 108, 117, 101, 32, 99, 97, 110, 32, 98, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 46, 32, 32, 84, 104, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 99, 104, 101, 99, 107, 115, 117, 109, 32, 105, 115, 10, 97, 32, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 115, 35, 124, 73, 58, 97, 100, 108, 101, 114, 51, 50, 0 ], "i8", ALLOC_NORMAL);
    _crc32__doc__ = allocate([ 99, 114, 99, 51, 50, 40, 115, 116, 114, 105, 110, 103, 91, 44, 32, 115, 116, 97, 114, 116, 93, 41, 32, 45, 45, 32, 67, 111, 109, 112, 117, 116, 101, 32, 97, 32, 67, 82, 67, 45, 51, 50, 32, 99, 104, 101, 99, 107, 115, 117, 109, 32, 111, 102, 32, 115, 116, 114, 105, 110, 103, 46, 10, 10, 65, 110, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 115, 116, 97, 114, 116, 105, 110, 103, 32, 118, 97, 108, 117, 101, 32, 99, 97, 110, 32, 98, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 46, 32, 32, 84, 104, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 99, 104, 101, 99, 107, 115, 117, 109, 32, 105, 115, 10, 97, 32, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 101, 103, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 115, 35, 124, 73, 58, 99, 114, 99, 51, 50, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 97, 100, 108, 101, 114, 51, 50, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 111, 98, 106, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 99, 114, 99, 51, 50, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 98, 106, 0 ], "i8", ALLOC_NORMAL);
    _zlib_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str50 = allocate([ 122, 108, 105, 98, 46, 67, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    _Comptype = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str51 = allocate([ 122, 108, 105, 98, 46, 68, 101, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    _Decomptype = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _zlib_module_documentation = allocate([ 84, 104, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 105, 110, 32, 116, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 97, 108, 108, 111, 119, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 97, 110, 100, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 117, 115, 105, 110, 103, 32, 116, 104, 101, 10, 122, 108, 105, 98, 32, 108, 105, 98, 114, 97, 114, 121, 44, 32, 119, 104, 105, 99, 104, 32, 105, 115, 32, 98, 97, 115, 101, 100, 32, 111, 110, 32, 71, 78, 85, 32, 122, 105, 112, 46, 10, 10, 97, 100, 108, 101, 114, 51, 50, 40, 115, 116, 114, 105, 110, 103, 91, 44, 32, 115, 116, 97, 114, 116, 93, 41, 32, 45, 45, 32, 67, 111, 109, 112, 117, 116, 101, 32, 97, 110, 32, 65, 100, 108, 101, 114, 45, 51, 50, 32, 99, 104, 101, 99, 107, 115, 117, 109, 46, 10, 99, 111, 109, 112, 114, 101, 115, 115, 40, 115, 116, 114, 105, 110, 103, 91, 44, 32, 108, 101, 118, 101, 108, 93, 41, 32, 45, 45, 32, 67, 111, 109, 112, 114, 101, 115, 115, 32, 115, 116, 114, 105, 110, 103, 44, 32, 119, 105, 116, 104, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 108, 101, 118, 101, 108, 32, 105, 110, 32, 49, 45, 57, 46, 10, 99, 111, 109, 112, 114, 101, 115, 115, 111, 98, 106, 40, 91, 108, 101, 118, 101, 108, 93, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 46, 10, 99, 114, 99, 51, 50, 40, 115, 116, 114, 105, 110, 103, 91, 44, 32, 115, 116, 97, 114, 116, 93, 41, 32, 45, 45, 32, 67, 111, 109, 112, 117, 116, 101, 32, 97, 32, 67, 82, 67, 45, 51, 50, 32, 99, 104, 101, 99, 107, 115, 117, 109, 46, 10, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 40, 115, 116, 114, 105, 110, 103, 44, 91, 119, 98, 105, 116, 115, 93, 44, 91, 98, 117, 102, 115, 105, 122, 101, 93, 41, 32, 45, 45, 32, 68, 101, 99, 111, 109, 112, 114, 101, 115, 115, 101, 115, 32, 97, 32, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 115, 116, 114, 105, 110, 103, 46, 10, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 98, 106, 40, 91, 119, 98, 105, 116, 115, 93, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 46, 10, 10, 39, 119, 98, 105, 116, 115, 39, 32, 105, 115, 32, 119, 105, 110, 100, 111, 119, 32, 98, 117, 102, 102, 101, 114, 32, 115, 105, 122, 101, 46, 10, 67, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 115, 32, 115, 117, 112, 112, 111, 114, 116, 32, 99, 111, 109, 112, 114, 101, 115, 115, 40, 41, 32, 97, 110, 100, 32, 102, 108, 117, 115, 104, 40, 41, 32, 109, 101, 116, 104, 111, 100, 115, 59, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 10, 111, 98, 106, 101, 99, 116, 115, 32, 115, 117, 112, 112, 111, 114, 116, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 40, 41, 32, 97, 110, 100, 32, 102, 108, 117, 115, 104, 40, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 122, 108, 105, 98, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 122, 108, 105, 98, 46, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 77, 65, 88, 95, 87, 66, 73, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 68, 69, 70, 76, 65, 84, 69, 68, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 68, 69, 70, 95, 77, 69, 77, 95, 76, 69, 86, 69, 76, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 90, 95, 66, 69, 83, 84, 95, 83, 80, 69, 69, 68, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 90, 95, 66, 69, 83, 84, 95, 67, 79, 77, 80, 82, 69, 83, 83, 73, 79, 78, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 90, 95, 68, 69, 70, 65, 85, 76, 84, 95, 67, 79, 77, 80, 82, 69, 83, 83, 73, 79, 78, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 90, 95, 70, 73, 76, 84, 69, 82, 69, 68, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 90, 95, 72, 85, 70, 70, 77, 65, 78, 95, 79, 78, 76, 89, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 90, 95, 68, 69, 70, 65, 85, 76, 84, 95, 83, 84, 82, 65, 84, 69, 71, 89, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 90, 95, 70, 73, 78, 73, 83, 72, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 90, 95, 78, 79, 95, 70, 76, 85, 83, 72, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 90, 95, 83, 89, 78, 67, 95, 70, 76, 85, 83, 72, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 90, 95, 70, 85, 76, 76, 95, 70, 76, 85, 83, 72, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 90, 76, 73, 66, 95, 86, 69, 82, 83, 73, 79, 78, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 95, 95, 118, 101, 114, 115, 105, 111, 110, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 49, 46, 48, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_comp_methods] = __str38;
    HEAP[_comp_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_comp_methods + 12] = _comp_compress__doc__;
    HEAP[_comp_methods + 16] = __str39;
    HEAP[_comp_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_comp_methods + 28] = _comp_flush__doc__;
    HEAP[_comp_methods + 32] = __str40;
    HEAP[_comp_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_comp_methods + 44] = _comp_copy__doc__;
    HEAP[_Decomp_methods] = __str41;
    HEAP[_Decomp_methods + 4] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_Decomp_methods + 12] = _decomp_decompress__doc__;
    HEAP[_Decomp_methods + 16] = __str39;
    HEAP[_Decomp_methods + 20] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_Decomp_methods + 28] = _decomp_flush__doc__;
    HEAP[_Decomp_methods + 32] = __str40;
    HEAP[_Decomp_methods + 36] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_Decomp_methods + 44] = _decomp_copy__doc__;
    HEAP[_zlib_methods] = __str46;
    HEAP[_zlib_methods + 4] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_zlib_methods + 12] = _adler32__doc__;
    HEAP[_zlib_methods + 16] = __str38;
    HEAP[_zlib_methods + 20] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_zlib_methods + 28] = _compress__doc__;
    HEAP[_zlib_methods + 32] = __str47;
    HEAP[_zlib_methods + 36] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_zlib_methods + 44] = _compressobj__doc__;
    HEAP[_zlib_methods + 48] = __str48;
    HEAP[_zlib_methods + 52] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_zlib_methods + 60] = _crc32__doc__;
    HEAP[_zlib_methods + 64] = __str41;
    HEAP[_zlib_methods + 68] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_zlib_methods + 76] = _decompress__doc__;
    HEAP[_zlib_methods + 80] = __str49;
    HEAP[_zlib_methods + 84] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_zlib_methods + 92] = _decompressobj__doc__;
    HEAP[_Comptype + 12] = __str50;
    HEAP[_Comptype + 24] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_Comptype + 32] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_Decomptype + 12] = __str51;
    HEAP[_Decomptype + 24] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_Decomptype + 32] = FUNCTION_TABLE_OFFSET + 32;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
