"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 40;
  var $1___SIZE = 20;
  var $2___SIZE = 20;
  var $3___SIZE = 48;
  var $4___SIZE = 16;
  var $5___SIZE = 196;
  var $6___SIZE = 196;
  var $7___SIZE = 80;
  var $8___SIZE = 40;
  var $9___SIZE = 64;
  var $10___SIZE = 32;
  var $11___SIZE = 16;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_MultibyteCodec___SIZE = 36;
  var $struct_MultibyteCodecObject___SIZE = 12;
  var $struct_MultibyteDecodeBuffer___SIZE = 28;
  var $struct_MultibyteEncodeBuffer___SIZE = 28;
  var $struct_MultibyteIncrementalDecoderObject___SIZE = 36;
  var $struct_MultibyteIncrementalDecoderObject___FLATTENER = [ 0, 4, 8, 12, 20, 24, 32 ];
  var $struct_MultibyteIncrementalEncoderObject___SIZE = 32;
  var $struct_MultibyteIncrementalEncoderObject___FLATTENER = [ 0, 4, 8, 12, 20, 24, 28 ];
  var $struct_MultibyteStatefulCodecContext___SIZE = 24;
  var $struct_MultibyteStatefulCodecContext___FLATTENER = [ 0, 4, 8, 12, 20 ];
  var $struct_MultibyteStreamReaderObject___SIZE = 40;
  var $struct_MultibyteStreamReaderObject___FLATTENER = [ 0, 4, 8, 12, 20, 24, 32, 36 ];
  var $struct_MultibyteStreamWriterObject___SIZE = 36;
  var $struct_MultibyteStreamWriterObject___FLATTENER = [ 0, 4, 8, 12, 20, 24, 28, 32 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_PyUnicodeObject___SIZE = 24;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $union_MultibyteCodec_State___SIZE = 8;
  var _MultibyteCodec_Encode__doc__;
  var _MultibyteCodec_Decode__doc__;
  var _codeckwarglist;
  var __str;
  var __str1;
  var _incnewkwarglist;
  var _incrementalkwarglist;
  var __str2;
  var _streamkwarglist;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var __str7;
  var __str8;
  var ___PRETTY_FUNCTION___8537;
  var __str9;
  var __str10;
  var _codecctx_getsets;
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
  var _multibytecodec_methods;
  var __str24;
  var _MultibyteCodec_Type;
  var __str25;
  var __str26;
  var __str27;
  var _mbiencoder_methods;
  var __str28;
  var __str29;
  var __str30;
  var __str31;
  var _MultibyteIncrementalEncoder_Type;
  var __str32;
  var _mbidecoder_methods;
  var __str33;
  var __str34;
  var _MultibyteIncrementalDecoder_Type;
  var __str35;
  var __str36;
  var __str37;
  var __str38;
  var __str39;
  var __str40;
  var _mbstreamreader_methods;
  var _mbstreamreader_members;
  var __str41;
  var __str42;
  var _MultibyteStreamReader_Type;
  var __str43;
  var __str44;
  var __str45;
  var __str46;
  var __str47;
  var _mbstreamwriter_methods;
  var _mbstreamwriter_members;
  var __str48;
  var _MultibyteStreamWriter_Type;
  var __str49;
  var __str50;
  var __str51;
  var ___methods;
  var __str52;
  var __str53;
  function _make_tuple($object, $len) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $object_addr;
      var $len_addr;
      var $retval;
      var $0;
      var $v;
      var $w;
      $object_addr = $object;
      $len_addr = $len;
      
      
      if ($object_addr == 0) {
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
      var $3 = _PyTuple_New(2);
      $v = $3;
      
      
      if ($v == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      var $9 = HEAP[$object_addr] - 1;
      
      
      HEAP[$object_addr] = $9;
      
      
      
      
      if (HEAP[$object_addr] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $20 = HEAP[HEAP[$object_addr + 4] + 24];
      
      FUNCTION_TABLE[$20]($object_addr);
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      
      HEAP[$v + 12] = $object_addr;
      
      var $28 = _PyInt_FromSsize_t($len_addr);
      $w = $28;
      
      
      var $31 = $v;
      if ($w == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      var $34 = HEAP[$31] - 1;
      
      
      HEAP[$v] = $34;
      
      
      
      
      if (HEAP[$v] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $45 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$45]($v);
      __label__ = 9;
      break;
     case 9:
      $0 = 0;
      __label__ = 11;
      break;
     case 10:
      
      
      
      
      HEAP[$31 + 12 + 4] = $w;
      
      $0 = $v;
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
  function _internal_error_callback($errors) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $errors_addr;
      var $retval;
      var $0;
      $errors_addr = $errors;
      
      
      if ($errors_addr == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $4 = _strcmp($errors_addr, __str4);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 1;
      __label__ = 8;
      break;
     case 3:
      
      var $7 = _strcmp($errors_addr, __str5);
      
      if ($7 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 2;
      __label__ = 8;
      break;
     case 5:
      
      var $10 = _strcmp($errors_addr, __str6);
      
      if ($10 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 3;
      __label__ = 8;
      break;
     case 7:
      
      var $13 = _PyString_FromString($errors_addr);
      $0 = $13;
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
  function _call_error_callback($errors, $exc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $errors_addr;
      var $exc_addr;
      var $retval;
      var $0;
      var $args;
      var $cb;
      var $r;
      $errors_addr = $errors;
      $exc_addr = $exc;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$errors_addr + 4] + 84] & 134217728) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str7, __str8, 96, ___PRETTY_FUNCTION___8537);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      var $12 = _PyCodec_LookupError($errors_addr + 20);
      $cb = $12;
      
      
      if ($cb == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 13;
      break;
     case 4:
      var $15 = _PyTuple_New(1);
      $args = $15;
      
      
      if ($args == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $21 = HEAP[$cb] - 1;
      
      
      HEAP[$cb] = $21;
      
      
      
      
      if (HEAP[$cb] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $32 = HEAP[HEAP[$cb + 4] + 24];
      
      FUNCTION_TABLE[$32]($cb);
      __label__ = 7;
      break;
     case 7:
      $0 = 0;
      __label__ = 13;
      break;
     case 8:
      
      
      
      
      
      HEAP[$args + 12] = $exc_addr;
      
      
      
      var $42 = HEAP[$exc_addr] + 1;
      
      
      HEAP[$exc_addr] = $42;
      
      
      var $47 = _PyObject_CallObject($cb, $args);
      $r = $47;
      
      
      
      var $51 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $51;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $62 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$62]($args);
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $67 = HEAP[$cb] - 1;
      
      
      HEAP[$cb] = $67;
      
      
      
      
      if (HEAP[$cb] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $78 = HEAP[HEAP[$cb + 4] + 24];
      
      FUNCTION_TABLE[$78]($cb);
      __label__ = 12;
      break;
     case 12:
      
      $0 = $r;
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
  function _codecctx_errors_get($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $errors;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 20] == 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $errors = __str4;
      __label__ = 7;
      break;
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 20] == 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $errors = __str5;
      __label__ = 7;
      break;
     case 4:
      
      
      
      
      if (HEAP[$self_addr + 20] == 3) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $errors = __str6;
      __label__ = 7;
      break;
     case 6:
      
      
      
      
      
      var $18 = HEAP[HEAP[$self_addr + 20]] + 1;
      var $19 = HEAP[$self_addr + 20];
      HEAP[$19] = $18;
      
      
      
      $0 = HEAP[$self_addr + 20];
      __label__ = 8;
      break;
     case 7:
      
      var $24 = _PyString_FromString($errors);
      $0 = $24;
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
  function _codecctx_errors_set($self, $value, $closure) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $value_addr;
      var $closure_addr;
      var $retval;
      var $0;
      var $cb;
      $self_addr = $self;
      $value_addr = $value;
      $closure_addr = $closure;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$value_addr + 4] + 84] & 134217728) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $8 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($8, __str9);
      $0 = -1;
      __label__ = 10;
      break;
     case 2:
      
      
      
      
      var $13 = _internal_error_callback($value_addr + 20);
      $cb = $13;
      
      
      if ($cb == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 10;
      break;
     case 4:
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      if (HEAP[$self_addr + 20] > 3) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $30 = HEAP[$self_addr + 20];
      
      
      var $33 = HEAP[$30] - 1;
      var $34 = $30;
      HEAP[$34] = $33;
      
      
      
      if (HEAP[$30] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$self_addr + 20] + 4] + 24];
      
      
      var $47 = HEAP[$self_addr + 20];
      FUNCTION_TABLE[$44]($47);
      __label__ = 9;
      break;
     case 9:
      
      
      
      HEAP[$self_addr + 20] = $cb;
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
  function _expand_encodebuffer($buf, $esize) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $buf_addr;
      var $esize_addr;
      var $retval;
      var $0;
      var $iftmp_7;
      var $orgpos;
      var $orgsize;
      var $incsize;
      $buf_addr = $buf;
      $esize_addr = $esize;
      
      
      
      
      
      
      
      
      
      
      
      $orgpos = HEAP[$buf_addr + 12] - (HEAP[$buf_addr + 24] + 20);
      
      
      
      
      
      
      $orgsize = HEAP[HEAP[$buf_addr + 24] + 8];
      
      
      
      
      if ($orgsize >> 1 > $esize_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $iftmp_7 = $orgsize >> 1 | 1;
      __label__ = 3;
      break;
     case 2:
      
      $iftmp_7 = $esize_addr;
      __label__ = 3;
      break;
     case 3:
      
      $incsize = $iftmp_7;
      
      
      
      
      if (2147483647 - $incsize < $orgsize) {
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
      
      
      
      
      
      var $36 = __PyString_Resize($buf_addr + 24, $incsize + $orgsize);
      var $37 = $36 == -1;
      if ($37) {
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
      
      
      
      
      
      
      
      var $45 = HEAP[$buf_addr + 24] + 20 + $orgpos;
      
      
      HEAP[$buf_addr + 12] = $45;
      
      
      
      
      
      
      
      
      
      
      
      
      var $60 = HEAP[$buf_addr + 24] + 20 + HEAP[HEAP[$buf_addr + 24] + 8];
      
      
      HEAP[$buf_addr + 16] = $60;
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
  function _expand_decodebuffer($buf, $esize) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $buf_addr;
      var $esize_addr;
      var $retval;
      var $0;
      var $iftmp_8;
      var $orgpos;
      var $orgsize;
      $buf_addr = $buf;
      $esize_addr = $esize;
      
      
      
      
      
      
      
      
      
      
      
      
      
      $orgpos = (HEAP[$buf_addr + 12] - HEAP[HEAP[$buf_addr + 24] + 12]) / 2 | 0;
      
      
      
      
      
      
      $orgsize = HEAP[HEAP[$buf_addr + 24] + 8];
      
      
      
      
      if ($orgsize >> 1 > $esize_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $iftmp_8 = $orgsize >> 1 | 1;
      __label__ = 3;
      break;
     case 2:
      
      $iftmp_8 = $esize_addr;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      var $33 = _PyUnicodeUCS2_Resize($buf_addr + 24, $orgsize + $iftmp_8);
      var $34 = $33 == -1;
      if ($34) {
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
      
      
      
      
      
      
      
      var $42 = HEAP[HEAP[$buf_addr + 24] + 12] + 2 * $orgpos;
      
      
      HEAP[$buf_addr + 12] = $42;
      
      
      
      
      
      
      
      
      
      
      
      
      var $57 = HEAP[HEAP[$buf_addr + 24] + 12] + 2 * HEAP[HEAP[$buf_addr + 24] + 8];
      
      
      HEAP[$buf_addr + 16] = $57;
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
  function _multibytecodec_encerror($codec, $state, $buf, $errors, $e) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 10;
    _memset(__stackBase__, 0, 10);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $codec_addr;
      var $state_addr;
      var $buf_addr;
      var $errors_addr;
      var $e_addr;
      var $retval;
      var $0;
      var $retobj;
      var $retstr;
      var $tobj;
      var $retstrsize;
      var $newpos;
      var $esize;
      var $start;
      var $end;
      var $reason;
      var $replchar = __stackBase__;
      var $inbuf = __stackBase__ + 2;
      var $r;
      var $outleft;
      var $uraw = __stackBase__ + 6;
      $codec_addr = $codec;
      $state_addr = $state;
      $buf_addr = $buf;
      $errors_addr = $errors;
      $e_addr = $e;
      $retobj = 0;
      $retstr = 0;
      
      
      if ($e_addr > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $reason = __str11;
      
      $esize = $e_addr;
      __label__ = 8;
      break;
     case 2:
      var $4 = $e_addr;
      if ($4 == -3) {
        __label__ = 6;
        break;
      } else if ($4 == -2) {
        __label__ = 5;
        break;
      } else if ($4 == -1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      var $6 = _expand_encodebuffer($buf_addr, -1);
      var $7 = $6 == -1;
      if ($7) {
        __label__ = 48;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 55;
      break;
     case 5:
      $reason = __str12;
      
      
      
      
      
      
      
      
      
      
      $esize = (HEAP[$buf_addr + 8] - HEAP[$buf_addr]) / 2 | 0;
      __label__ = 8;
      break;
     case 6:
      var $18 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($18, __str13);
      $0 = -1;
      __label__ = 55;
      break;
     case 7:
      var $19 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($19, __str14);
      $0 = -1;
      __label__ = 55;
      break;
     case 8:
      
      
      if ($errors_addr == 3) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 9:
      HEAP[$replchar] = 63;
      HEAP[$inbuf] = $replchar;
      __label__ = 10;
      break;
     case 10:
      
      
      
      
      
      
      
      
      
      $outleft = HEAP[$buf_addr + 16] - HEAP[$buf_addr + 12];
      
      
      var $33 = HEAP[$codec_addr + 12];
      
      
      
      
      var $38 = HEAP[$codec_addr + 4];
      
      
      var $41 = FUNCTION_TABLE[$33]($state_addr, $38, $inbuf, 1, $buf_addr + 12, $outleft, 0);
      $r = $41;
      var $42 = $41 == -1;
      if ($42) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      var $44 = _expand_encodebuffer($buf_addr, -1);
      var $45 = $44 == -1;
      if ($45) {
        __label__ = 48;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 12:
      
      
      if ($r != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      
      
      
      
      
      
      
      
      if (HEAP[$buf_addr + 12] + 1 > HEAP[$buf_addr + 16]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      var $57 = _expand_encodebuffer($buf_addr, 1);
      var $58 = $57 == -1;
      if ($58) {
        __label__ = 48;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      var $61 = HEAP[$buf_addr + 12];
      HEAP[$61] = 63;
      var $62 = $61 + 1;
      
      
      HEAP[$buf_addr + 12] = $62;
      __label__ = 16;
      break;
     case 16:
      
      
      
      
      
      
      
      var $71 = HEAP[$buf_addr];
      if ($errors_addr == 2 | $errors_addr == 3) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      var $73 = $71 + 2 * $esize;
      
      
      HEAP[$buf_addr] = $73;
      $0 = 0;
      __label__ = 55;
      break;
     case 18:
      
      
      
      
      
      
      
      $start = ($71 - HEAP[$buf_addr + 4]) / 2 | 0;
      
      
      
      $end = $esize + $start;
      
      
      
      
      var $90 = $buf_addr;
      if (HEAP[$buf_addr + 20] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      
      
      
      var $99 = (HEAP[$90 + 8] - HEAP[$buf_addr + 4]) / 2 | 0;
      
      
      var $102 = HEAP[$buf_addr + 4];
      
      
      var $105 = HEAP[$codec_addr];
      
      
      
      var $109 = _PyUnicodeEncodeError_Create($105, $102, $99, $start, $end, $reason);
      
      
      HEAP[$buf_addr + 20] = $109;
      
      
      
      
      if (HEAP[$buf_addr + 20] == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      
      var $117 = HEAP[$90 + 20];
      
      var $119 = _PyUnicodeEncodeError_SetStart($117, $start);
      
      if ($119 != 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      var $123 = HEAP[$buf_addr + 20];
      
      var $125 = _PyUnicodeEncodeError_SetEnd($123, $end);
      
      if ($125 != 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      var $129 = HEAP[$buf_addr + 20];
      
      var $131 = _PyUnicodeEncodeError_SetReason($129, $reason);
      
      if ($131 != 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      var $137 = HEAP[$buf_addr + 20];
      if ($errors_addr == 1) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      var $138 = _PyCodec_StrictErrors($137);
      __label__ = 48;
      break;
     case 25:
      
      var $140 = _call_error_callback($errors_addr, $137);
      $retobj = $140;
      
      
      if ($retobj == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$retobj + 4] + 84] & 67108864) == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      
      if (HEAP[$retobj + 8] != 2) {
        __label__ = 31;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      
      
      $tobj = HEAP[$retobj + 12];
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$tobj + 4] + 84] & 268435456) == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$retobj + 12 + 4] + 4] + 84] & 8388608) != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$retobj + 12 + 4] + 4] + 84] & 16777216) == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      var $189 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($189, __str15);
      __label__ = 48;
      break;
     case 32:
      
      
      
      var $193 = HEAP[$tobj + 12];
      HEAP[$uraw] = $193;
      
      
      
      var $197 = HEAP[$tobj + 8];
      
      
      var $200 = _multibytecodec_encode($codec_addr, $state_addr, $uraw, $197, 1, 1);
      $retstr = $200;
      
      if ($200 == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      
      $retstrsize = HEAP[$retstr + 8];
      
      
      if ($retstrsize <= 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      
      
      
      
      
      
      if (HEAP[$buf_addr + 12] + $retstrsize > HEAP[$buf_addr + 16]) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      var $219 = _expand_encodebuffer($buf_addr, $retstrsize);
      var $220 = $219 == -1;
      if ($220) {
        __label__ = 48;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      
      
      
      
      
      var $228 = HEAP[$buf_addr + 12];
      _llvm_memcpy_p0i8_p0i8_i32($228, $retstr + 20, $retstrsize, 1, 0);
      
      
      
      
      var $233 = HEAP[$buf_addr + 12] + $retstrsize;
      
      
      HEAP[$buf_addr + 12] = $233;
      
      
      
      
      var $240 = HEAP[$retobj + 12 + 4];
      var $241 = _PyInt_AsSsize_t($240);
      $newpos = $241;
      
      if ($241 < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 37:
      var $243 = _PyErr_Occurred();
      
      if ($243 == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      
      
      
      
      
      
      
      var $256 = $newpos + ((HEAP[$buf_addr + 8] - HEAP[$buf_addr + 4]) / 2 | 0);
      $newpos = $256;
      __lastLabel__ = 38;
      __label__ = 40;
      break;
     case 39:
      var $_pr = $newpos;
      __lastLabel__ = 39;
      __label__ = 40;
      break;
     case 40:
      var $257 = __lastLabel__ == 39 ? $_pr : $256;
      
      if ($257 < 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 41:
      
      
      
      
      
      
      
      
      
      if (HEAP[$buf_addr + 4] + 2 * $newpos > HEAP[$buf_addr + 8]) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      _PyErr_Clear();
      var $268 = HEAP[_PyExc_IndexError];
      
      var $270 = _PyErr_Format($268, __str16, allocate([ $newpos, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 48;
      break;
     case 43:
      
      
      
      
      var $275 = HEAP[$buf_addr + 4] + 2 * $newpos;
      
      
      HEAP[$buf_addr] = $275;
      
      
      
      var $281 = HEAP[$retobj] - 1;
      
      
      HEAP[$retobj] = $281;
      
      
      
      
      if (HEAP[$retobj] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      var $292 = HEAP[HEAP[$retobj + 4] + 24];
      
      FUNCTION_TABLE[$292]($retobj);
      __label__ = 45;
      break;
     case 45:
      
      
      
      var $297 = HEAP[$retstr] - 1;
      
      
      HEAP[$retstr] = $297;
      
      
      
      
      if (HEAP[$retstr] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      
      
      var $308 = HEAP[HEAP[$retstr + 4] + 24];
      
      FUNCTION_TABLE[$308]($retstr);
      __label__ = 47;
      break;
     case 47:
      $0 = 0;
      __label__ = 55;
      break;
     case 48:
      
      
      if ($retobj != 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 49:
      
      
      
      var $314 = HEAP[$retobj] - 1;
      
      
      HEAP[$retobj] = $314;
      
      
      
      
      if (HEAP[$retobj] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      
      
      
      var $325 = HEAP[HEAP[$retobj + 4] + 24];
      
      FUNCTION_TABLE[$325]($retobj);
      __label__ = 51;
      break;
     case 51:
      
      
      if ($retstr != 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 52:
      
      
      
      var $332 = HEAP[$retstr] - 1;
      
      
      HEAP[$retstr] = $332;
      
      
      
      
      if (HEAP[$retstr] == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      
      
      
      
      var $343 = HEAP[HEAP[$retstr + 4] + 24];
      
      FUNCTION_TABLE[$343]($retstr);
      __label__ = 54;
      break;
     case 54:
      $0 = -1;
      __label__ = 55;
      break;
     case 55:
      
      $retval = $0;
      var $retval56 = $retval;
      STACKTOP = __stackBase__;
      return $retval56;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _multibytecodec_decerror($codec, $state, $buf, $errors, $e) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $codec_addr;
      var $state_addr;
      var $buf_addr;
      var $errors_addr;
      var $e_addr;
      var $retval;
      var $0;
      var $retobj;
      var $retuni;
      var $retunisize;
      var $newpos;
      var $reason;
      var $esize;
      var $start;
      var $end;
      $codec_addr = $codec;
      $state_addr = $state;
      $buf_addr = $buf;
      $errors_addr = $errors;
      $e_addr = $e;
      $retobj = 0;
      $retuni = 0;
      
      
      if ($e_addr > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $reason = __str11;
      
      $esize = $e_addr;
      __label__ = 8;
      break;
     case 2:
      var $4 = $e_addr;
      if ($4 == -3) {
        __label__ = 6;
        break;
      } else if ($4 == -2) {
        __label__ = 5;
        break;
      } else if ($4 == -1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      var $6 = _expand_decodebuffer($buf_addr, -1);
      var $7 = $6 == -1;
      if ($7) {
        __label__ = 43;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 47;
      break;
     case 5:
      $reason = __str12;
      
      
      
      
      
      
      
      
      
      $esize = HEAP[$buf_addr + 8] - HEAP[$buf_addr];
      __label__ = 8;
      break;
     case 6:
      var $17 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($17, __str13);
      $0 = -1;
      __label__ = 47;
      break;
     case 7:
      var $18 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($18, __str14);
      $0 = -1;
      __label__ = 47;
      break;
     case 8:
      
      
      if ($errors_addr == 3) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      if (HEAP[$buf_addr + 12] + 2 > HEAP[$buf_addr + 16]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $30 = _expand_decodebuffer($buf_addr, 1);
      var $31 = $30 == -1;
      if ($31) {
        __label__ = 43;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $34 = HEAP[$buf_addr + 12];
      HEAP[$34] = -3;
      var $35 = $34 + 2;
      
      
      HEAP[$buf_addr + 12] = $35;
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      
      
      
      var $44 = HEAP[$buf_addr];
      if ($errors_addr == 2 | $errors_addr == 3) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      var $46 = $44 + $esize;
      
      
      HEAP[$buf_addr] = $46;
      $0 = 0;
      __label__ = 47;
      break;
     case 14:
      
      
      
      
      
      
      $start = $44 - HEAP[$buf_addr + 4];
      
      
      
      $end = $esize + $start;
      
      
      
      
      var $62 = $buf_addr;
      if (HEAP[$buf_addr + 20] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      var $70 = HEAP[$62 + 8] - HEAP[$buf_addr + 4];
      
      
      var $73 = HEAP[$buf_addr + 4];
      
      
      var $76 = HEAP[$codec_addr];
      
      
      
      var $80 = _PyUnicodeDecodeError_Create($76, $73, $70, $start, $end, $reason);
      
      
      HEAP[$buf_addr + 20] = $80;
      
      
      
      
      if (HEAP[$buf_addr + 20] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      
      var $88 = HEAP[$62 + 20];
      
      var $90 = _PyUnicodeDecodeError_SetStart($88, $start);
      
      if ($90 != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      var $94 = HEAP[$buf_addr + 20];
      
      var $96 = _PyUnicodeDecodeError_SetEnd($94, $end);
      
      if ($96 != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      var $100 = HEAP[$buf_addr + 20];
      
      var $102 = _PyUnicodeDecodeError_SetReason($100, $reason);
      
      if ($102 != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      var $108 = HEAP[$buf_addr + 20];
      if ($errors_addr == 1) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $109 = _PyCodec_StrictErrors($108);
      __label__ = 43;
      break;
     case 21:
      
      var $111 = _call_error_callback($errors_addr, $108);
      $retobj = $111;
      
      
      if ($retobj == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$retobj + 4] + 84] & 67108864) == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      if (HEAP[$retobj + 8] != 2) {
        __label__ = 27;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      
      $retuni = HEAP[$retobj + 12];
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$retuni + 4] + 84] & 268435456) == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$retobj + 12 + 4] + 4] + 84] & 8388608) != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$retobj + 12 + 4] + 4] + 84] & 16777216) == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $160 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($160, __str17);
      __label__ = 43;
      break;
     case 28:
      
      
      
      
      $retunisize = HEAP[$retuni + 8];
      
      if (HEAP[$retuni + 8] > 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 29:
      
      
      if ($retunisize <= 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      
      
      
      
      
      
      if (HEAP[$buf_addr + 12] + 2 * $retunisize > HEAP[$buf_addr + 16]) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      var $179 = _expand_decodebuffer($buf_addr, $retunisize);
      var $180 = $179 == -1;
      if ($180) {
        __label__ = 43;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      
      
      
      
      
      
      
      var $190 = HEAP[$buf_addr + 12];
      var $191 = HEAP[$retuni + 12];
      _llvm_memcpy_p0i8_p0i8_i32($190, $191, $retunisize * 2, 1, 0);
      
      
      
      
      var $196 = HEAP[$buf_addr + 12] + 2 * $retunisize;
      
      
      HEAP[$buf_addr + 12] = $196;
      __label__ = 33;
      break;
     case 33:
      
      
      
      
      var $203 = HEAP[$retobj + 12 + 4];
      var $204 = _PyInt_AsSsize_t($203);
      $newpos = $204;
      
      if ($204 < 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 34:
      var $206 = _PyErr_Occurred();
      
      if ($206 == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      
      
      
      
      
      
      var $218 = HEAP[$buf_addr + 8] - HEAP[$buf_addr + 4] + $newpos;
      $newpos = $218;
      __lastLabel__ = 35;
      __label__ = 37;
      break;
     case 36:
      var $_pr = $newpos;
      __lastLabel__ = 36;
      __label__ = 37;
      break;
     case 37:
      var $219 = __lastLabel__ == 36 ? $_pr : $218;
      
      if ($219 < 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      
      
      
      
      
      
      
      
      
      if (HEAP[$buf_addr + 4] + $newpos > HEAP[$buf_addr + 8]) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      _PyErr_Clear();
      var $230 = HEAP[_PyExc_IndexError];
      
      var $232 = _PyErr_Format($230, __str16, allocate([ $newpos, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 43;
      break;
     case 40:
      
      
      
      
      var $237 = HEAP[$buf_addr + 4] + $newpos;
      
      
      HEAP[$buf_addr] = $237;
      
      
      
      var $243 = HEAP[$retobj] - 1;
      
      
      HEAP[$retobj] = $243;
      
      
      
      
      if (HEAP[$retobj] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $254 = HEAP[HEAP[$retobj + 4] + 24];
      
      FUNCTION_TABLE[$254]($retobj);
      __label__ = 42;
      break;
     case 42:
      $0 = 0;
      __label__ = 47;
      break;
     case 43:
      
      
      if ($retobj != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 44:
      
      
      
      var $260 = HEAP[$retobj] - 1;
      
      
      HEAP[$retobj] = $260;
      
      
      
      
      if (HEAP[$retobj] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      var $271 = HEAP[HEAP[$retobj + 4] + 24];
      
      FUNCTION_TABLE[$271]($retobj);
      __label__ = 46;
      break;
     case 46:
      $0 = -1;
      __label__ = 47;
      break;
     case 47:
      
      $retval = $0;
      var $retval47 = $retval;
      return $retval47;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _multibytecodec_encode($codec, $state, $data, $datalen, $errors, $flags) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $codec_addr;
      var $state_addr;
      var $data_addr;
      var $datalen_addr;
      var $errors_addr;
      var $flags_addr;
      var $retval;
      var $0;
      var $buf = __stackBase__;
      var $finalsize;
      var $r;
      var $inleft;
      var $outleft;
      var $outleft15;
      $codec_addr = $codec;
      $state_addr = $state;
      $data_addr = $data;
      $datalen_addr = $datalen;
      $errors_addr = $errors;
      $flags_addr = $flags;
      $r = 0;
      
      
      if ($datalen_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      if (($flags_addr & 2) == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $6 = _PyString_FromString(__str18);
      $0 = $6;
      __label__ = 31;
      break;
     case 3:
      
      HEAP[$buf + 20] = 0;
      
      var $9 = HEAP[$data_addr];
      
      HEAP[$buf + 4] = $9;
      
      var $12 = HEAP[$buf + 4];
      
      HEAP[$buf] = $12;
      
      
      
      var $17 = HEAP[$buf + 4] + 2 * $datalen_addr;
      
      HEAP[$buf + 8] = $17;
      
      
      if ($datalen_addr > 1073741815) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $21 = _PyErr_NoMemory();
      __label__ = 24;
      break;
     case 5:
      
      
      
      var $25 = _PyString_FromStringAndSize(0, $datalen_addr * 2 + 16);
      
      HEAP[$buf + 24] = $25;
      
      
      
      if (HEAP[$buf + 24] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      var $34 = HEAP[$buf + 24] + 20;
      
      HEAP[$buf + 12] = $34;
      
      
      
      
      
      
      
      var $43 = HEAP[$buf + 12] + HEAP[HEAP[$buf + 24] + 8];
      
      HEAP[$buf + 16] = $43;
      var $45 = $buf;
      var $46 = $buf + 8;
      var $47 = $buf + 8;
      var $48 = $buf;
      var $49 = $buf + 16;
      var $50 = $buf + 12;
      var $51 = $buf;
      var $52 = $buf + 12;
      __label__ = 12;
      break;
     case 7:
      
      
      
      
      
      
      $inleft = (HEAP[$47] - HEAP[$48]) / 2 | 0;
      
      
      
      
      
      $outleft = HEAP[$49] - HEAP[$50];
      
      
      var $66 = HEAP[$codec_addr + 12];
      
      
      var $69 = HEAP[$codec_addr + 4];
      
      
      
      
      var $74 = FUNCTION_TABLE[$66]($state_addr, $69, $51, $inleft, $52, $outleft, $flags_addr);
      $r = $74;
      
      
      if ($r == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      var $78 = $r != -2;
      if ($78) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      if (($flags_addr & 1) == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      var $86 = _multibytecodec_encerror($codec_addr, $state_addr, $buf, $errors_addr, $r);
      
      if ($86 != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $89 = $r == -2;
      if ($89) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      if (HEAP[$45] < HEAP[$46]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      if (HEAP[$codec_addr + 20] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      
      
      
      if (($flags_addr & 2) != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      var $100 = $buf + 16;
      var $101 = $buf + 12;
      var $102 = $buf + 12;
      __label__ = 16;
      break;
     case 16:
      
      
      
      
      
      $outleft15 = HEAP[$100] - HEAP[$101];
      
      
      var $110 = HEAP[$codec_addr + 20];
      
      
      var $113 = HEAP[$codec_addr + 4];
      
      
      var $116 = FUNCTION_TABLE[$110]($state_addr, $113, $102, $outleft15);
      $r = $116;
      
      if ($116 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      var $122 = _multibytecodec_encerror($codec_addr, $state_addr, $buf, $errors_addr, $r);
      
      if ($122 != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      
      
      $finalsize = HEAP[$buf + 12] - (HEAP[$buf + 24] + 20);
      
      
      
      
      
      
      
      if (HEAP[HEAP[$buf + 24] + 8] != $finalsize) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $140 = $buf + 24;
      
      var $142 = __PyString_Resize($140, $finalsize);
      var $143 = $142 == -1;
      if ($143) {
        __label__ = 24;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      var $145 = HEAP[$buf];
      
      HEAP[$data_addr] = $145;
      
      
      
      if (HEAP[$buf + 20] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      
      var $151 = HEAP[$buf + 20];
      
      
      var $154 = HEAP[$151] - 1;
      var $155 = $151;
      HEAP[$155] = $154;
      
      
      
      if (HEAP[$151] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      
      var $164 = HEAP[HEAP[HEAP[$buf + 20] + 4] + 24];
      
      var $166 = HEAP[$buf + 20];
      FUNCTION_TABLE[$164]($166);
      __label__ = 23;
      break;
     case 23:
      
      
      $0 = HEAP[$buf + 24];
      __label__ = 31;
      break;
     case 24:
      
      
      
      if (HEAP[$buf + 20] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      var $173 = HEAP[$buf + 20];
      
      
      var $176 = HEAP[$173] - 1;
      var $177 = $173;
      HEAP[$177] = $176;
      
      
      
      if (HEAP[$173] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      
      var $186 = HEAP[HEAP[HEAP[$buf + 20] + 4] + 24];
      
      var $188 = HEAP[$buf + 20];
      FUNCTION_TABLE[$186]($188);
      __label__ = 27;
      break;
     case 27:
      
      
      
      if (HEAP[$buf + 24] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      
      var $193 = HEAP[$buf + 24];
      
      
      var $196 = HEAP[$193] - 1;
      var $197 = $193;
      HEAP[$197] = $196;
      
      
      
      if (HEAP[$193] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      
      var $206 = HEAP[HEAP[HEAP[$buf + 24] + 4] + 24];
      
      var $208 = HEAP[$buf + 24];
      FUNCTION_TABLE[$206]($208);
      __label__ = 30;
      break;
     case 30:
      $0 = 0;
      __label__ = 31;
      break;
     case 31:
      
      $retval = $0;
      var $retval31 = $retval;
      STACKTOP = __stackBase__;
      return $retval31;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _MultibyteCodec_Encode($self, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwargs_addr;
      var $retval;
      var $0;
      var $state = __stackBase__;
      var $data = __stackBase__ + 8;
      var $errorcb;
      var $r;
      var $arg = __stackBase__ + 12;
      var $ucvt;
      var $errors = __stackBase__ + 16;
      var $datalen;
      $self_addr = $self;
      $args_addr = $args;
      $kwargs_addr = $kwargs;
      HEAP[$errors] = 0;
      
      
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kwargs_addr, __str19, _codeckwarglist, allocate([ $arg, 0, 0, 0, $errors, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 34;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$arg] + 4] + 84] & 268435456) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $ucvt = 0;
      __label__ = 10;
      break;
     case 4:
      var $12 = HEAP[$arg];
      var $13 = _PyObject_Unicode($12);
      $ucvt = $13;
      
      HEAP[$arg] = $ucvt;
      
      
      if (HEAP[$arg] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 34;
      break;
     case 6:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$arg] + 4] + 84] & 268435456) == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      var $24 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($24, __str20);
      
      
      
      var $28 = HEAP[$ucvt] - 1;
      
      
      HEAP[$ucvt] = $28;
      
      
      
      
      if (HEAP[$ucvt] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $39 = HEAP[HEAP[$ucvt + 4] + 24];
      
      FUNCTION_TABLE[$39]($ucvt);
      __label__ = 9;
      break;
     case 9:
      $0 = 0;
      __label__ = 34;
      break;
     case 10:
      
      
      
      var $44 = HEAP[HEAP[$arg] + 12];
      HEAP[$data] = $44;
      
      
      
      
      $datalen = HEAP[HEAP[$arg] + 8];
      var $49 = HEAP[$errors];
      var $50 = _internal_error_callback($49);
      $errorcb = $50;
      
      if ($50 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      
      if ($ucvt != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      
      var $57 = HEAP[$ucvt] - 1;
      
      
      HEAP[$ucvt] = $57;
      
      
      
      
      if (HEAP[$ucvt] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $68 = HEAP[HEAP[$ucvt + 4] + 24];
      
      FUNCTION_TABLE[$68]($ucvt);
      __label__ = 14;
      break;
     case 14:
      $0 = 0;
      __label__ = 34;
      break;
     case 15:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 8] + 16] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $80 = HEAP[HEAP[$self_addr + 8] + 16];
      
      
      
      
      var $85 = HEAP[HEAP[$self_addr + 8] + 4];
      var $86 = FUNCTION_TABLE[$80]($state, $85);
      
      if ($86 != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      var $90 = HEAP[$self_addr + 8];
      
      
      var $93 = _multibytecodec_encode($90, $state, $data, $datalen, $errorcb, 3);
      $r = $93;
      
      if ($93 == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      if ($errorcb != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 19:
      
      
      
      
      
      if ($errorcb == 0 | $errorcb > 3) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      
      
      
      var $104 = HEAP[$errorcb] - 1;
      
      
      HEAP[$errorcb] = $104;
      
      
      
      
      if (HEAP[$errorcb] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $115 = HEAP[HEAP[$errorcb + 4] + 24];
      
      FUNCTION_TABLE[$115]($errorcb);
      __label__ = 22;
      break;
     case 22:
      
      
      if ($ucvt != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 23:
      
      
      
      var $122 = HEAP[$ucvt] - 1;
      
      
      HEAP[$ucvt] = $122;
      
      
      
      
      if (HEAP[$ucvt] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $133 = HEAP[HEAP[$ucvt + 4] + 24];
      
      FUNCTION_TABLE[$133]($ucvt);
      __label__ = 25;
      break;
     case 25:
      
      
      var $137 = _make_tuple($r, $datalen);
      $0 = $137;
      __label__ = 34;
      break;
     case 26:
      
      
      if ($errorcb != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      
      
      
      
      
      if ($errorcb == 0 | $errorcb > 3) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      
      
      
      var $147 = HEAP[$errorcb] - 1;
      
      
      HEAP[$errorcb] = $147;
      
      
      
      
      if (HEAP[$errorcb] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $158 = HEAP[HEAP[$errorcb + 4] + 24];
      
      FUNCTION_TABLE[$158]($errorcb);
      __label__ = 30;
      break;
     case 30:
      
      
      if ($ucvt != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 31:
      
      
      
      var $165 = HEAP[$ucvt] - 1;
      
      
      HEAP[$ucvt] = $165;
      
      
      
      
      if (HEAP[$ucvt] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      var $176 = HEAP[HEAP[$ucvt + 4] + 24];
      
      FUNCTION_TABLE[$176]($ucvt);
      __label__ = 33;
      break;
     case 33:
      $0 = 0;
      __label__ = 34;
      break;
     case 34:
      
      $retval = $0;
      var $retval36 = $retval;
      STACKTOP = __stackBase__;
      return $retval36;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _MultibyteCodec_Decode($self, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 92;
    _memset(__stackBase__, 0, 92);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwargs_addr;
      var $retval;
      var $0;
      var $state = __stackBase__;
      var $buf = __stackBase__ + 8;
      var $errorcb;
      var $pdata = __stackBase__ + 36;
      var $data;
      var $errors = __stackBase__ + 88;
      var $datalen;
      var $finalsize;
      var $inleft;
      var $outleft;
      var $r;
      $self_addr = $self;
      $args_addr = $args;
      $kwargs_addr = $kwargs;
      HEAP[$errors] = 0;
      
      
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kwargs_addr, __str21, _codeckwarglist, allocate([ $pdata, 0, 0, 0, $errors, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      
      $data = HEAP[$pdata];
      
      
      $datalen = HEAP[$pdata + 8];
      var $9 = HEAP[$errors];
      var $10 = _internal_error_callback($9);
      $errorcb = $10;
      
      
      if ($errorcb == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyBuffer_Release($pdata);
      $0 = 0;
      __label__ = 38;
      break;
     case 4:
      
      
      if ($datalen == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 5:
      _PyBuffer_Release($pdata);
      
      
      if ($errorcb != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      
      
      if ($errorcb == 0 | $errorcb > 3) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      var $24 = HEAP[$errorcb] - 1;
      
      
      HEAP[$errorcb] = $24;
      
      
      
      
      if (HEAP[$errorcb] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $35 = HEAP[HEAP[$errorcb + 4] + 24];
      
      FUNCTION_TABLE[$35]($errorcb);
      __label__ = 9;
      break;
     case 9:
      var $37 = _PyUnicodeUCS2_FromUnicode(0, 0);
      var $38 = _make_tuple($37, 0);
      $0 = $38;
      __label__ = 38;
      break;
     case 10:
      
      HEAP[$buf + 20] = 0;
      
      
      HEAP[$buf + 4] = $data;
      
      var $43 = HEAP[$buf + 4];
      
      HEAP[$buf] = $43;
      
      
      
      var $48 = HEAP[$buf + 4] + $datalen;
      
      HEAP[$buf + 8] = $48;
      
      var $51 = _PyUnicodeUCS2_FromUnicode(0, $datalen);
      
      HEAP[$buf + 24] = $51;
      
      
      
      if (HEAP[$buf + 24] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      var $60 = HEAP[HEAP[$buf + 24] + 12];
      
      HEAP[$buf + 12] = $60;
      
      
      
      
      
      
      
      var $69 = HEAP[$buf + 12] + 2 * HEAP[HEAP[$buf + 24] + 8];
      
      HEAP[$buf + 16] = $69;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 8] + 28] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $81 = HEAP[HEAP[$self_addr + 8] + 28];
      
      
      
      
      var $86 = HEAP[HEAP[$self_addr + 8] + 4];
      var $87 = FUNCTION_TABLE[$81]($state, $86);
      
      if ($87 != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $89 = $buf;
      var $90 = $buf + 8;
      var $91 = $buf + 8;
      var $92 = $buf;
      var $93 = $buf + 16;
      var $94 = $buf + 12;
      var $95 = $buf;
      var $96 = $buf + 12;
      __label__ = 16;
      break;
     case 14:
      
      
      
      
      
      $inleft = HEAP[$91] - HEAP[$92];
      
      
      
      
      
      
      $outleft = (HEAP[$93] - HEAP[$94]) / 2 | 0;
      
      
      
      
      var $112 = HEAP[HEAP[$self_addr + 8] + 24];
      
      
      
      
      var $117 = HEAP[HEAP[$self_addr + 8] + 4];
      
      
      var $120 = FUNCTION_TABLE[$112]($state, $117, $95, $inleft, $96, $outleft);
      $r = $120;
      
      
      if ($r == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      var $125 = HEAP[$self_addr + 8];
      
      
      var $128 = _multibytecodec_decerror($125, $state, $buf, $errorcb, $r);
      
      if ($128 != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      if (HEAP[$89] < HEAP[$90]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      
      
      
      
      $finalsize = (HEAP[$buf + 12] - HEAP[HEAP[$buf + 24] + 12]) / 2 | 0;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$buf + 24] + 8] != $finalsize) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $151 = $buf + 24;
      
      var $153 = _PyUnicodeUCS2_Resize($151, $finalsize);
      var $154 = $153 == -1;
      if ($154) {
        __label__ = 27;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      _PyBuffer_Release($pdata);
      
      
      
      if (HEAP[$buf + 20] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      
      var $159 = HEAP[$buf + 20];
      
      
      var $162 = HEAP[$159] - 1;
      var $163 = $159;
      HEAP[$163] = $162;
      
      
      
      if (HEAP[$159] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      
      var $172 = HEAP[HEAP[HEAP[$buf + 20] + 4] + 24];
      
      var $174 = HEAP[$buf + 20];
      FUNCTION_TABLE[$172]($174);
      __label__ = 22;
      break;
     case 22:
      
      
      if ($errorcb != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 23:
      
      
      
      
      
      if ($errorcb == 0 | $errorcb > 3) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 24:
      
      
      
      var $184 = HEAP[$errorcb] - 1;
      
      
      HEAP[$errorcb] = $184;
      
      
      
      
      if (HEAP[$errorcb] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $195 = HEAP[HEAP[$errorcb + 4] + 24];
      
      FUNCTION_TABLE[$195]($errorcb);
      __label__ = 26;
      break;
     case 26:
      
      var $198 = HEAP[$buf + 24];
      
      var $200 = _make_tuple($198, $datalen);
      $0 = $200;
      __label__ = 38;
      break;
     case 27:
      _PyBuffer_Release($pdata);
      
      
      if ($errorcb != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 28:
      
      
      
      
      
      if ($errorcb == 0 | $errorcb > 3) {
        __label__ = 29;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 29:
      
      
      
      var $210 = HEAP[$errorcb] - 1;
      
      
      HEAP[$errorcb] = $210;
      
      
      
      
      if (HEAP[$errorcb] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $221 = HEAP[HEAP[$errorcb + 4] + 24];
      
      FUNCTION_TABLE[$221]($errorcb);
      __label__ = 31;
      break;
     case 31:
      
      
      
      if (HEAP[$buf + 20] != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 32:
      
      var $227 = HEAP[$buf + 20];
      
      
      var $230 = HEAP[$227] - 1;
      var $231 = $227;
      HEAP[$231] = $230;
      
      
      
      if (HEAP[$227] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      
      var $240 = HEAP[HEAP[HEAP[$buf + 20] + 4] + 24];
      
      var $242 = HEAP[$buf + 20];
      FUNCTION_TABLE[$240]($242);
      __label__ = 34;
      break;
     case 34:
      
      
      
      if (HEAP[$buf + 24] != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 35:
      
      var $247 = HEAP[$buf + 24];
      
      
      var $250 = HEAP[$247] - 1;
      var $251 = $247;
      HEAP[$251] = $250;
      
      
      
      if (HEAP[$247] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      
      var $260 = HEAP[HEAP[HEAP[$buf + 24] + 4] + 24];
      
      var $262 = HEAP[$buf + 24];
      FUNCTION_TABLE[$260]($262);
      __label__ = 37;
      break;
     case 37:
      $0 = 0;
      __label__ = 38;
      break;
     case 38:
      
      $retval = $0;
      var $retval40 = $retval;
      STACKTOP = __stackBase__;
      return $retval40;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _multibytecodec_dealloc($self) {
    
    var $self_addr;
    $self_addr = $self;
    
    
    _PyObject_Free($self_addr);
    return;
  }
  function _encoder_encode_stateful($ctx, $unistr, $final) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ctx_addr;
      var $unistr_addr;
      var $final_addr;
      var $retval;
      var $iftmp_53;
      var $iftmp_49;
      var $0;
      var $ucvt;
      var $r;
      var $inbuf = __stackBase__;
      var $inbuf_end;
      var $inbuf_tmp;
      var $datalen;
      var $origpending;
      $ctx_addr = $ctx;
      $unistr_addr = $unistr;
      $final_addr = $final;
      $r = 0;
      $inbuf_tmp = 0;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$unistr_addr + 4] + 84] & 268435456) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $ucvt = 0;
      __label__ = 8;
      break;
     case 2:
      
      var $9 = _PyObject_Unicode($unistr_addr);
      $ucvt = $9;
      
      $unistr_addr = $ucvt;
      
      
      if ($unistr_addr == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 42;
      break;
     case 4:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$unistr_addr + 4] + 84] & 268435456) == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $20 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($20, __str20);
      
      
      
      var $24 = HEAP[$ucvt] - 1;
      
      
      HEAP[$ucvt] = $24;
      
      
      
      
      if (HEAP[$ucvt] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $35 = HEAP[HEAP[$ucvt + 4] + 24];
      
      FUNCTION_TABLE[$35]($ucvt);
      __label__ = 7;
      break;
     case 7:
      $0 = 0;
      __label__ = 42;
      break;
     case 8:
      
      
      
      
      $datalen = HEAP[$unistr_addr + 8];
      
      
      
      $origpending = HEAP[$ctx_addr + 28];
      
      if (HEAP[$ctx_addr + 28] > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 9:
      
      
      
      
      
      
      if (2147483647 - HEAP[$ctx_addr + 28] < $datalen) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $51 = _PyErr_NoMemory();
      __label__ = 33;
      break;
     case 11:
      
      
      
      
      
      
      if ($datalen + HEAP[$ctx_addr + 28] <= 1073741823) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      $iftmp_49 = 0;
      $inbuf_tmp = 0;
      __label__ = 35;
      break;
     case 13:
      
      
      
      
      
      var $63 = ($datalen + HEAP[$ctx_addr + 28]) * 2;
      var $64 = _PyMem_Malloc($63);
      
      $iftmp_49 = $64;
      $inbuf_tmp = $64;
      
      if ($64 == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      var $70 = HEAP[$ctx_addr + 28] * 2;
      
      
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($inbuf_tmp, $ctx_addr + 24, $70, 1, 0);
      
      
      
      
      
      
      
      
      
      
      
      var $88 = $inbuf_tmp + 2 * HEAP[$ctx_addr + 28];
      var $89 = HEAP[$unistr_addr + 12];
      _llvm_memcpy_p0i8_p0i8_i32($88, $89, $datalen * 2, 1, 0);
      
      
      
      
      var $94 = $datalen + HEAP[$ctx_addr + 28];
      $datalen = $94;
      
      
      HEAP[$ctx_addr + 28] = 0;
      
      HEAP[$inbuf] = $inbuf_tmp;
      __label__ = 16;
      break;
     case 15:
      
      
      
      var $101 = HEAP[$unistr_addr + 12];
      HEAP[$inbuf] = $101;
      __label__ = 16;
      break;
     case 16:
      
      
      
      $inbuf_end = HEAP[$inbuf] + 2 * $datalen;
      
      
      if ($final_addr != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      $iftmp_53 = 3;
      __label__ = 19;
      break;
     case 18:
      $iftmp_53 = 0;
      __label__ = 19;
      break;
     case 19:
      
      
      var $109 = HEAP[$ctx_addr + 20];
      
      
      
      
      var $114 = HEAP[$ctx_addr + 8];
      
      
      var $117 = _multibytecodec_encode($114, $ctx_addr + 12, $inbuf, $datalen, $109, $iftmp_53);
      $r = $117;
      
      if ($117 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      
      
      if ($origpending > 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($ctx_addr + 24, $inbuf_tmp, $origpending * 2, 1, 0);
      __label__ = 22;
      break;
     case 22:
      
      
      
      HEAP[$ctx_addr + 28] = $origpending;
      __label__ = 33;
      break;
     case 23:
      
      
      
      if (HEAP[$inbuf] < $inbuf_end) {
        __label__ = 24;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 24:
      
      
      
      
      
      var $140 = ($inbuf_end - HEAP[$inbuf]) / 2 | 0;
      
      
      HEAP[$ctx_addr + 28] = $140;
      
      
      
      
      
      var $148 = $ctx_addr + 28;
      if (HEAP[$ctx_addr + 28] > 2) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      HEAP[$148] = 0;
      var $149 = HEAP[_PyExc_UnicodeError];
      _PyErr_SetString($149, __str25);
      __label__ = 33;
      break;
     case 26:
      
      var $151 = HEAP[$148] * 2;
      
      
      
      
      
      var $157 = HEAP[$inbuf];
      _llvm_memcpy_p0i8_p0i8_i32($ctx_addr + 24, $157, $151, 1, 0);
      __label__ = 27;
      break;
     case 27:
      
      
      if ($inbuf_tmp != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      _PyMem_Free($inbuf_tmp);
      __label__ = 29;
      break;
     case 29:
      
      
      if ($ucvt != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      
      
      
      var $167 = HEAP[$ucvt] - 1;
      
      
      HEAP[$ucvt] = $167;
      
      
      
      
      if (HEAP[$ucvt] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $178 = HEAP[HEAP[$ucvt + 4] + 24];
      
      FUNCTION_TABLE[$178]($ucvt);
      __label__ = 32;
      break;
     case 32:
      
      $0 = $r;
      __label__ = 42;
      break;
     case 33:
      
      
      if ($inbuf_tmp != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      _PyMem_Free($inbuf_tmp);
      __label__ = 35;
      break;
     case 35:
      
      
      if ($r != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 36:
      
      
      
      var $189 = HEAP[$r] - 1;
      
      
      HEAP[$r] = $189;
      
      
      
      
      if (HEAP[$r] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $200 = HEAP[HEAP[$r + 4] + 24];
      
      FUNCTION_TABLE[$200]($r);
      __label__ = 38;
      break;
     case 38:
      
      
      if ($ucvt != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 39:
      
      
      
      var $207 = HEAP[$ucvt] - 1;
      
      
      HEAP[$ucvt] = $207;
      
      
      
      
      if (HEAP[$ucvt] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      
      
      var $218 = HEAP[HEAP[$ucvt + 4] + 24];
      
      FUNCTION_TABLE[$218]($ucvt);
      __label__ = 41;
      break;
     case 41:
      $0 = 0;
      __label__ = 42;
      break;
     case 42:
      
      $retval = $0;
      var $retval43 = $retval;
      STACKTOP = __stackBase__;
      return $retval43;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _decoder_append_pending($ctx, $buf) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ctx_addr;
      var $buf_addr;
      var $retval;
      var $0;
      var $npendings;
      $ctx_addr = $ctx;
      $buf_addr = $buf;
      
      
      
      
      
      
      
      
      
      $npendings = HEAP[$buf_addr + 8] - HEAP[$buf_addr];
      
      
      
      
      
      
      if ($npendings + HEAP[$ctx_addr + 32] > 8) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      if (2147483647 - HEAP[$ctx_addr + 32] < $npendings) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $22 = HEAP[_PyExc_UnicodeError];
      _PyErr_SetString($22, __str25);
      $0 = -1;
      __label__ = 4;
      break;
     case 3:
      
      
      
      var $26 = HEAP[$buf_addr];
      
      
      
      
      
      
      var $33 = $ctx_addr + 24 + HEAP[$ctx_addr + 32];
      _llvm_memcpy_p0i8_p0i8_i32($33, $26, $npendings, 1, 0);
      
      
      
      
      var $38 = $npendings + HEAP[$ctx_addr + 32];
      
      
      HEAP[$ctx_addr + 32] = $38;
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
  function _decoder_prepare_buffer($buf, $data, $size) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $buf_addr;
      var $data_addr;
      var $size_addr;
      var $retval;
      var $0;
      $buf_addr = $buf;
      $data_addr = $data;
      $size_addr = $size;
      
      
      
      HEAP[$buf_addr + 4] = $data_addr;
      
      
      var $6 = HEAP[$buf_addr + 4];
      
      
      HEAP[$buf_addr] = $6;
      
      
      
      
      var $13 = HEAP[$buf_addr + 4] + $size_addr;
      
      
      HEAP[$buf_addr + 8] = $13;
      
      
      
      
      if (HEAP[$buf_addr + 24] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      var $21 = _PyUnicodeUCS2_FromUnicode(0, $size_addr);
      
      
      HEAP[$buf_addr + 24] = $21;
      
      
      
      
      if (HEAP[$buf_addr + 24] == 0) {
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
      
      
      
      
      
      var $33 = HEAP[HEAP[$buf_addr + 24] + 12];
      
      
      HEAP[$buf_addr + 12] = $33;
      
      
      
      
      
      
      
      
      
      var $45 = HEAP[$buf_addr + 12] + 2 * HEAP[HEAP[$buf_addr + 24] + 8];
      
      
      HEAP[$buf_addr + 16] = $45;
      __label__ = 4;
      break;
     case 4:
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
  function _decoder_feed_buffer($ctx, $buf) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ctx_addr;
      var $buf_addr;
      var $retval;
      var $0;
      var $inleft;
      var $outleft;
      var $r;
      $ctx_addr = $ctx;
      $buf_addr = $buf;
      __label__ = 4;
      break;
     case 1:
      
      
      
      
      
      
      
      
      
      $inleft = HEAP[$buf_addr + 8] - HEAP[$buf_addr];
      
      
      
      
      
      
      
      
      
      
      $outleft = (HEAP[$buf_addr + 16] - HEAP[$buf_addr + 12]) / 2 | 0;
      
      
      
      
      var $24 = HEAP[HEAP[$ctx_addr + 8] + 24];
      
      
      
      
      
      
      
      
      var $33 = HEAP[HEAP[$ctx_addr + 8] + 4];
      
      
      
      
      var $38 = FUNCTION_TABLE[$24]($ctx_addr + 12, $33, $buf_addr, $inleft, $buf_addr + 12, $outleft);
      $r = $38;
      
      
      
      var $42 = $r == -2;
      
      if ($r == 0 | $42) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $45 = HEAP[$ctx_addr + 20];
      
      
      
      
      var $50 = HEAP[$ctx_addr + 8];
      
      
      var $53 = _multibytecodec_decerror($50, $ctx_addr + 12, $buf_addr, $45, $r);
      
      if ($53 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 6;
      break;
     case 4:
      
      
      
      
      
      
      
      if (HEAP[$buf_addr] < HEAP[$buf_addr + 8]) {
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
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbiencoder_encode($self, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwargs_addr;
      var $retval;
      var $0;
      var $data = __stackBase__;
      var $final = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      $kwargs_addr = $kwargs;
      HEAP[$final] = 0;
      
      
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kwargs_addr, __str26, _incrementalkwarglist, allocate([ $data, 0, 0, 0, $final, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$final];
      var $6 = HEAP[$data];
      
      var $8 = _encoder_encode_stateful($self_addr, $6, $5);
      $0 = $8;
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
  function _mbiencoder_reset($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 8] + 32] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      
      var $11 = HEAP[HEAP[$self_addr + 8] + 32];
      
      
      
      
      var $16 = HEAP[HEAP[$self_addr + 8] + 4];
      
      
      var $19 = FUNCTION_TABLE[$11]($self_addr + 12, $16);
      
      if ($19 != 0) {
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
      
      
      HEAP[$self_addr + 28] = 0;
      
      var $24 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $24;
      $0 = __Py_NoneStruct;
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
  function _mbiencoder_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $self;
      var $codec;
      var $errors = __stackBase__;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      $codec = 0;
      HEAP[$errors] = 0;
      
      
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kwds_addr, __str28, _incnewkwarglist, allocate([ $errors, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 21;
      break;
     case 2:
      
      
      var $7 = HEAP[$type_addr + 152];
      
      var $9 = FUNCTION_TABLE[$7]($type_addr, 0);
      
      $self = $9;
      
      
      if ($self == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 21;
      break;
     case 4:
      
      
      var $15 = _PyObject_GetAttrString($type_addr, __str29);
      $codec = $15;
      
      
      if ($codec == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[$codec + 4] != _MultibyteCodec_Type) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $22 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($22, __str30);
      __label__ = 13;
      break;
     case 7:
      
      
      
      var $26 = HEAP[$codec + 8];
      
      
      HEAP[$self + 8] = $26;
      
      
      HEAP[$self + 28] = 0;
      var $31 = HEAP[$errors];
      var $32 = _internal_error_callback($31);
      
      
      HEAP[$self + 20] = $32;
      var $35 = $self;
      
      
      
      if (HEAP[$35 + 20] == 0) {
        __lastLabel__ = 7;
        __label__ = 14;
        break;
      } else {
        __lastLabel__ = 7;
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      if (HEAP[HEAP[$self + 8] + 16] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $49 = HEAP[HEAP[$self + 8] + 16];
      
      
      
      
      var $54 = HEAP[HEAP[$self + 8] + 4];
      
      
      var $57 = FUNCTION_TABLE[$49]($self + 12, $54);
      
      if ($57 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $62 = HEAP[$codec] - 1;
      
      
      HEAP[$codec] = $62;
      
      
      
      
      if (HEAP[$codec] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $73 = HEAP[HEAP[$codec + 4] + 24];
      
      FUNCTION_TABLE[$73]($codec);
      __label__ = 12;
      break;
     case 12:
      
      
      $0 = $self;
      __label__ = 21;
      break;
     case 13:
      var $_pr = $self;
      __lastLabel__ = 13;
      __label__ = 14;
      break;
     case 14:
      var $77 = __lastLabel__ == 13 ? $_pr : $35;
      
      if ($77 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      
      var $83 = HEAP[$self] - 1;
      
      HEAP[$self] = $83;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      var $93 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$93]($self);
      __label__ = 17;
      break;
     case 17:
      
      
      if ($codec != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      
      
      
      var $101 = HEAP[$codec] - 1;
      
      
      HEAP[$codec] = $101;
      
      
      
      
      if (HEAP[$codec] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $112 = HEAP[HEAP[$codec + 4] + 24];
      
      FUNCTION_TABLE[$112]($codec);
      __label__ = 20;
      break;
     case 20:
      $0 = 0;
      __label__ = 21;
      break;
     case 21:
      
      $retval = $0;
      var $retval19 = $retval;
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbiencoder_init($self, $args, $kwds) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    $0 = 0;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _mbiencoder_traverse($self, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      $self_addr = $self;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$self_addr + 20] > 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $15 = HEAP[$self_addr + 20];
      var $16 = $visit_addr;
      
      var $18 = FUNCTION_TABLE[$16]($15, $arg_addr);
      $vret = $18;
      
      
      if ($vret != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      $0 = $vret;
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
  function _mbiencoder_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      _PyObject_GC_UnTrack($self_addr);
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 20] > 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[$self_addr + 20];
      
      
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
      
      
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[$self_addr + 20] + 4] + 24];
      
      
      var $33 = HEAP[$self_addr + 20];
      FUNCTION_TABLE[$30]($33);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      
      var $39 = HEAP[HEAP[$self_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$39]($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbidecoder_decode($self, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 84;
    _memset(__stackBase__, 0, 84);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwargs_addr;
      var $retval;
      var $0;
      var $buf = __stackBase__;
      var $data;
      var $wdata;
      var $pdata = __stackBase__ + 28;
      var $wsize;
      var $finalsize;
      var $size;
      var $origpending;
      var $final = __stackBase__ + 80;
      $self_addr = $self;
      $args_addr = $args;
      $kwargs_addr = $kwargs;
      $wdata = 0;
      $finalsize = 0;
      HEAP[$final] = 0;
      
      
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kwargs_addr, __str32, _incrementalkwarglist, allocate([ $pdata, 0, 0, 0, $final, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 34;
      break;
     case 2:
      
      
      $data = HEAP[$pdata];
      
      
      $size = HEAP[$pdata + 8];
      
      HEAP[$buf + 20] = 0;
      
      var $11 = HEAP[$buf + 20];
      
      HEAP[$buf + 24] = $11;
      
      
      
      $origpending = HEAP[$self_addr + 32];
      
      
      
      
      if (HEAP[$self_addr + 32] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      $wsize = $size;
      
      $wdata = $data;
      __label__ = 8;
      break;
     case 4:
      
      
      
      
      
      
      if (2147483647 - HEAP[$self_addr + 32] < $size) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $28 = _PyErr_NoMemory();
      __label__ = 24;
      break;
     case 6:
      
      
      
      
      
      $wsize = $size + HEAP[$self_addr + 32];
      
      var $35 = _PyMem_Malloc($wsize);
      $wdata = $35;
      
      
      if ($wdata == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      var $40 = HEAP[$self_addr + 32];
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($wdata, $self_addr + 24, $40, 1, 0);
      
      
      
      
      
      var $50 = $wdata + HEAP[$self_addr + 32];
      
      _llvm_memcpy_p0i8_p0i8_i32($50, $data, $size, 1, 0);
      
      
      HEAP[$self_addr + 32] = 0;
      __label__ = 8;
      break;
     case 8:
      
      
      var $56 = _decoder_prepare_buffer($buf, $wdata, $wsize);
      
      if ($56 != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      var $59 = _decoder_feed_buffer($self_addr, $buf);
      
      if ($59 != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if (HEAP[$final] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      
      
      if (HEAP[$buf] < HEAP[$buf + 8]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      var $70 = HEAP[$self_addr + 20];
      
      
      
      
      var $75 = HEAP[$self_addr + 8];
      var $76 = _multibytecodec_decerror($75, $self_addr + 12, $buf, $70, -2);
      
      if ($76 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($self_addr + 24, $wdata, $origpending, 1, 0);
      
      
      
      HEAP[$self_addr + 32] = $origpending;
      __label__ = 24;
      break;
     case 14:
      
      
      
      
      
      if (HEAP[$buf] < HEAP[$buf + 8]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      var $92 = _decoder_append_pending($self_addr, $buf);
      
      if ($92 != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      
      
      
      
      
      
      $finalsize = (HEAP[$buf + 12] - HEAP[HEAP[$buf + 24] + 12]) / 2 | 0;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$buf + 24] + 8] != $finalsize) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $112 = $buf + 24;
      
      var $114 = _PyUnicodeUCS2_Resize($112, $finalsize);
      var $115 = $114 == -1;
      if ($115) {
        __label__ = 24;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      _PyBuffer_Release($pdata);
      
      
      
      if ($wdata != $data) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      _PyMem_Free($wdata);
      __label__ = 20;
      break;
     case 20:
      
      
      
      if (HEAP[$buf + 20] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      
      var $124 = HEAP[$buf + 20];
      
      
      var $127 = HEAP[$124] - 1;
      var $128 = $124;
      HEAP[$128] = $127;
      
      
      
      if (HEAP[$124] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      
      var $137 = HEAP[HEAP[HEAP[$buf + 20] + 4] + 24];
      
      var $139 = HEAP[$buf + 20];
      FUNCTION_TABLE[$137]($139);
      __label__ = 23;
      break;
     case 23:
      
      
      $0 = HEAP[$buf + 24];
      __label__ = 34;
      break;
     case 24:
      _PyBuffer_Release($pdata);
      
      
      if ($wdata != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      
      if ($wdata != $data) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      _PyMem_Free($wdata);
      __label__ = 27;
      break;
     case 27:
      
      
      
      if (HEAP[$buf + 20] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      
      var $152 = HEAP[$buf + 20];
      
      
      var $155 = HEAP[$152] - 1;
      var $156 = $152;
      HEAP[$156] = $155;
      
      
      
      if (HEAP[$152] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      
      var $165 = HEAP[HEAP[HEAP[$buf + 20] + 4] + 24];
      
      var $167 = HEAP[$buf + 20];
      FUNCTION_TABLE[$165]($167);
      __label__ = 30;
      break;
     case 30:
      
      
      
      if (HEAP[$buf + 24] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 31:
      
      var $172 = HEAP[$buf + 24];
      
      
      var $175 = HEAP[$172] - 1;
      var $176 = $172;
      HEAP[$176] = $175;
      
      
      
      if (HEAP[$172] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      
      var $185 = HEAP[HEAP[HEAP[$buf + 24] + 4] + 24];
      
      var $187 = HEAP[$buf + 24];
      FUNCTION_TABLE[$185]($187);
      __label__ = 33;
      break;
     case 33:
      $0 = 0;
      __label__ = 34;
      break;
     case 34:
      
      $retval = $0;
      var $retval33 = $retval;
      STACKTOP = __stackBase__;
      return $retval33;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbidecoder_reset($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 8] + 32] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      
      var $11 = HEAP[HEAP[$self_addr + 8] + 32];
      
      
      
      
      var $16 = HEAP[HEAP[$self_addr + 8] + 4];
      
      
      var $19 = FUNCTION_TABLE[$11]($self_addr + 12, $16);
      
      if ($19 != 0) {
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
      
      
      HEAP[$self_addr + 32] = 0;
      
      var $24 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $24;
      $0 = __Py_NoneStruct;
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
  function _mbidecoder_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $self;
      var $codec;
      var $errors = __stackBase__;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      $codec = 0;
      HEAP[$errors] = 0;
      
      
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kwds_addr, __str33, _incnewkwarglist, allocate([ $errors, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 21;
      break;
     case 2:
      
      
      var $7 = HEAP[$type_addr + 152];
      
      var $9 = FUNCTION_TABLE[$7]($type_addr, 0);
      
      $self = $9;
      
      
      if ($self == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 21;
      break;
     case 4:
      
      
      var $15 = _PyObject_GetAttrString($type_addr, __str29);
      $codec = $15;
      
      
      if ($codec == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[$codec + 4] != _MultibyteCodec_Type) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $22 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($22, __str30);
      __label__ = 13;
      break;
     case 7:
      
      
      
      var $26 = HEAP[$codec + 8];
      
      
      HEAP[$self + 8] = $26;
      
      
      HEAP[$self + 32] = 0;
      var $31 = HEAP[$errors];
      var $32 = _internal_error_callback($31);
      
      
      HEAP[$self + 20] = $32;
      var $35 = $self;
      
      
      
      if (HEAP[$35 + 20] == 0) {
        __lastLabel__ = 7;
        __label__ = 14;
        break;
      } else {
        __lastLabel__ = 7;
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      if (HEAP[HEAP[$self + 8] + 28] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $49 = HEAP[HEAP[$self + 8] + 28];
      
      
      
      
      var $54 = HEAP[HEAP[$self + 8] + 4];
      
      
      var $57 = FUNCTION_TABLE[$49]($self + 12, $54);
      
      if ($57 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $62 = HEAP[$codec] - 1;
      
      
      HEAP[$codec] = $62;
      
      
      
      
      if (HEAP[$codec] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $73 = HEAP[HEAP[$codec + 4] + 24];
      
      FUNCTION_TABLE[$73]($codec);
      __label__ = 12;
      break;
     case 12:
      
      
      $0 = $self;
      __label__ = 21;
      break;
     case 13:
      var $_pr = $self;
      __lastLabel__ = 13;
      __label__ = 14;
      break;
     case 14:
      var $77 = __lastLabel__ == 13 ? $_pr : $35;
      
      if ($77 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      
      var $83 = HEAP[$self] - 1;
      
      HEAP[$self] = $83;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      var $93 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$93]($self);
      __label__ = 17;
      break;
     case 17:
      
      
      if ($codec != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      
      
      
      var $101 = HEAP[$codec] - 1;
      
      
      HEAP[$codec] = $101;
      
      
      
      
      if (HEAP[$codec] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $112 = HEAP[HEAP[$codec + 4] + 24];
      
      FUNCTION_TABLE[$112]($codec);
      __label__ = 20;
      break;
     case 20:
      $0 = 0;
      __label__ = 21;
      break;
     case 21:
      
      $retval = $0;
      var $retval19 = $retval;
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbidecoder_init($self, $args, $kwds) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    $0 = 0;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _mbidecoder_traverse($self, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      $self_addr = $self;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$self_addr + 20] > 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $15 = HEAP[$self_addr + 20];
      var $16 = $visit_addr;
      
      var $18 = FUNCTION_TABLE[$16]($15, $arg_addr);
      $vret = $18;
      
      
      if ($vret != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      $0 = $vret;
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
  function _mbidecoder_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      _PyObject_GC_UnTrack($self_addr);
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 20] > 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[$self_addr + 20];
      
      
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
      
      
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[$self_addr + 20] + 4] + 24];
      
      
      var $33 = HEAP[$self_addr + 20];
      FUNCTION_TABLE[$30]($33);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      
      var $39 = HEAP[HEAP[$self_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$39]($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbstreamreader_iread($self, $method, $sizehint) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    _memset(__stackBase__, 0, 28);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $method_addr;
      var $sizehint_addr;
      var $retval;
      var $0;
      var $buf = __stackBase__;
      var $cres;
      var $rsize;
      var $finalsize;
      var $endoffile;
      var $ctr;
      var $ctrdata;
      $self_addr = $self;
      $method_addr = $method;
      $sizehint_addr = $sizehint;
      $finalsize = 0;
      
      
      if ($sizehint_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = _PyUnicodeUCS2_FromUnicode(0, 0);
      $0 = $3;
      __label__ = 50;
      break;
     case 2:
      
      HEAP[$buf + 20] = 0;
      
      var $6 = HEAP[$buf + 20];
      
      HEAP[$buf + 24] = $6;
      $cres = 0;
      var $_pr = $sizehint_addr;
      var $8 = $buf;
      var $9 = $buf + 8;
      var $10 = $buf;
      var $11 = $buf + 8;
      var $12 = $buf + 12;
      var $13 = $buf + 24;
      __lastLabel__ = 2;
      __label__ = 3;
      break;
     case 3:
      var $14 = __lastLabel__ == 30 ? 1 : $_pr;
      
      var $16 = $method_addr;
      
      
      var $19 = HEAP[$self_addr + 36];
      if ($14 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $20 = __PyObject_CallMethod_SizeT($19, $16, 0, allocate(1, "i32", ALLOC_STACK));
      $cres = $20;
      __lastLabel__ = 4;
      __label__ = 6;
      break;
     case 5:
      
      var $22 = __PyObject_CallMethod_SizeT($19, $16, __str35, allocate([ $sizehint_addr, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $cres = $22;
      __lastLabel__ = 5;
      __label__ = 6;
      break;
     case 6:
      var $23 = __lastLabel__ == 5 ? $22 : $20;
      
      if ($23 == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$cres + 4] + 84] & 134217728) == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $32 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($32, __str36);
      __label__ = 40;
      break;
     case 9:
      
      
      
      
      
      
      $endoffile = HEAP[$cres + 8] == 0;
      
      
      
      
      if (HEAP[$self_addr + 32] > 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      
      if (HEAP[$cres + 8] > 2147483647 - HEAP[$self_addr + 32]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $52 = _PyErr_NoMemory();
      __label__ = 40;
      break;
     case 12:
      
      
      
      
      
      
      
      
      $rsize = HEAP[$self_addr + 32] + HEAP[$cres + 8];
      
      var $62 = _PyString_FromStringAndSize(0, $rsize);
      $ctr = $62;
      
      
      if ($ctr == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      $ctrdata = $ctr + 20;
      
      
      var $71 = HEAP[$self_addr + 32];
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($ctrdata, $self_addr + 24, $71, 1, 0);
      
      
      
      var $79 = HEAP[$cres + 8];
      
      
      
      
      
      
      
      
      var $88 = $ctrdata + HEAP[$self_addr + 32];
      _llvm_memcpy_p0i8_p0i8_i32($88, $cres + 20, $79, 1, 0);
      
      
      
      var $92 = HEAP[$cres] - 1;
      
      
      HEAP[$cres] = $92;
      
      
      
      
      if (HEAP[$cres] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $103 = HEAP[HEAP[$cres + 4] + 24];
      
      FUNCTION_TABLE[$103]($cres);
      __label__ = 15;
      break;
     case 15:
      
      $cres = $ctr;
      
      
      HEAP[$self_addr + 32] = 0;
      __label__ = 16;
      break;
     case 16:
      
      
      
      
      $rsize = HEAP[$cres + 8];
      
      
      
      
      
      var $117 = _decoder_prepare_buffer($buf, $cres + 20, $rsize);
      
      if ($117 != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      if ($rsize > 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      var $123 = _decoder_feed_buffer($self_addr, $buf);
      
      if ($123 != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      if ($endoffile != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      if ($sizehint_addr < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      
      
      
      if (HEAP[$8] < HEAP[$9]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      var $134 = HEAP[$self_addr + 20];
      
      
      
      
      var $139 = HEAP[$self_addr + 8];
      var $140 = _multibytecodec_decerror($139, $self_addr + 12, $buf, $134, -2);
      
      if ($140 != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      if (HEAP[$10] < HEAP[$11]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      var $147 = _decoder_append_pending($self_addr, $buf);
      
      if ($147 != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      
      
      
      
      $finalsize = (HEAP[$12] - HEAP[HEAP[$13] + 12]) / 2 | 0;
      
      
      
      var $161 = HEAP[$cres] - 1;
      
      
      HEAP[$cres] = $161;
      
      
      
      
      if (HEAP[$cres] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $172 = HEAP[HEAP[$cres + 4] + 24];
      
      FUNCTION_TABLE[$172]($cres);
      __label__ = 27;
      break;
     case 27:
      $cres = 0;
      
      
      if ($sizehint_addr < 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      if ($finalsize != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      if ($rsize == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      $sizehint_addr = 1;
      __lastLabel__ = 30;
      __label__ = 3;
      break;
     case 31:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$buf + 24] + 8] != $finalsize) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      var $187 = $buf + 24;
      
      var $189 = _PyUnicodeUCS2_Resize($187, $finalsize);
      var $190 = $189 == -1;
      if ($190) {
        __label__ = 40;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      if ($cres != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 34:
      
      
      
      var $196 = HEAP[$cres] - 1;
      
      
      HEAP[$cres] = $196;
      
      
      
      
      if (HEAP[$cres] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $207 = HEAP[HEAP[$cres + 4] + 24];
      
      FUNCTION_TABLE[$207]($cres);
      __label__ = 36;
      break;
     case 36:
      
      
      
      if (HEAP[$buf + 20] != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 37:
      
      var $213 = HEAP[$buf + 20];
      
      
      var $216 = HEAP[$213] - 1;
      var $217 = $213;
      HEAP[$217] = $216;
      
      
      
      if (HEAP[$213] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      
      var $226 = HEAP[HEAP[HEAP[$buf + 20] + 4] + 24];
      
      var $228 = HEAP[$buf + 20];
      FUNCTION_TABLE[$226]($228);
      __label__ = 39;
      break;
     case 39:
      
      
      $0 = HEAP[$buf + 24];
      __label__ = 50;
      break;
     case 40:
      
      
      if ($cres != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 41:
      
      
      
      var $236 = HEAP[$cres] - 1;
      
      
      HEAP[$cres] = $236;
      
      
      
      
      if (HEAP[$cres] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $247 = HEAP[HEAP[$cres + 4] + 24];
      
      FUNCTION_TABLE[$247]($cres);
      __label__ = 43;
      break;
     case 43:
      
      
      
      if (HEAP[$buf + 20] != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 44:
      
      var $253 = HEAP[$buf + 20];
      
      
      var $256 = HEAP[$253] - 1;
      var $257 = $253;
      HEAP[$257] = $256;
      
      
      
      if (HEAP[$253] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      
      var $266 = HEAP[HEAP[HEAP[$buf + 20] + 4] + 24];
      
      var $268 = HEAP[$buf + 20];
      FUNCTION_TABLE[$266]($268);
      __label__ = 46;
      break;
     case 46:
      
      
      
      if (HEAP[$buf + 24] != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 47:
      
      var $273 = HEAP[$buf + 24];
      
      
      var $276 = HEAP[$273] - 1;
      var $277 = $273;
      HEAP[$277] = $276;
      
      
      
      if (HEAP[$273] == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      
      
      
      
      var $286 = HEAP[HEAP[HEAP[$buf + 24] + 4] + 24];
      
      var $288 = HEAP[$buf + 24];
      FUNCTION_TABLE[$286]($288);
      __label__ = 49;
      break;
     case 49:
      $0 = 0;
      __label__ = 50;
      break;
     case 50:
      
      $retval = $0;
      var $retval49 = $retval;
      STACKTOP = __stackBase__;
      return $retval49;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbstreamreader_read($self, $args) {
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
      var $sizeobj = __stackBase__;
      var $size;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$sizeobj] = 0;
      
      var $2 = _PyArg_UnpackTuple($args_addr, __str37, 0, 1, allocate([ $sizeobj, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      
      if (HEAP[$sizeobj] == __Py_NoneStruct | HEAP[$sizeobj] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $size = -1;
      __label__ = 7;
      break;
     case 4:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$sizeobj] + 4] + 84] & 8388608) != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $15 = HEAP[$sizeobj];
      var $16 = _PyInt_AsSsize_t($15);
      $size = $16;
      __label__ = 7;
      break;
     case 6:
      var $17 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($17, __str38);
      $0 = 0;
      __label__ = 8;
      break;
     case 7:
      
      
      var $20 = _mbstreamreader_iread($self_addr, __str37, $size);
      $0 = $20;
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
  function _mbstreamreader_readline($self, $args) {
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
      var $sizeobj = __stackBase__;
      var $size;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$sizeobj] = 0;
      
      var $2 = _PyArg_UnpackTuple($args_addr, __str39, 0, 1, allocate([ $sizeobj, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      
      if (HEAP[$sizeobj] == __Py_NoneStruct | HEAP[$sizeobj] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $size = -1;
      __label__ = 7;
      break;
     case 4:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$sizeobj] + 4] + 84] & 8388608) != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $15 = HEAP[$sizeobj];
      var $16 = _PyInt_AsSsize_t($15);
      $size = $16;
      __label__ = 7;
      break;
     case 6:
      var $17 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($17, __str38);
      $0 = 0;
      __label__ = 8;
      break;
     case 7:
      
      
      var $20 = _mbstreamreader_iread($self_addr, __str39, $size);
      $0 = $20;
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
  function _mbstreamreader_readlines($self, $args) {
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
      var $sizehintobj = __stackBase__;
      var $r;
      var $sr;
      var $sizehint;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$sizehintobj] = 0;
      
      var $2 = _PyArg_UnpackTuple($args_addr, __str40, 0, 1, allocate([ $sizehintobj, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      
      if (HEAP[$sizehintobj] == __Py_NoneStruct | HEAP[$sizehintobj] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $sizehint = -1;
      __label__ = 7;
      break;
     case 4:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$sizehintobj] + 4] + 84] & 8388608) != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $15 = HEAP[$sizehintobj];
      var $16 = _PyInt_AsSsize_t($15);
      $sizehint = $16;
      __label__ = 7;
      break;
     case 6:
      var $17 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($17, __str38);
      $0 = 0;
      __label__ = 12;
      break;
     case 7:
      
      
      var $20 = _mbstreamreader_iread($self_addr, __str37, $sizehint);
      $r = $20;
      
      if ($20 == 0) {
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
      
      var $23 = _PyUnicodeUCS2_Splitlines($r, 1);
      $sr = $23;
      
      
      
      var $27 = HEAP[$r] - 1;
      
      
      HEAP[$r] = $27;
      
      
      
      
      if (HEAP[$r] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $38 = HEAP[HEAP[$r + 4] + 24];
      
      FUNCTION_TABLE[$38]($r);
      __label__ = 11;
      break;
     case 11:
      
      $0 = $sr;
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
  function _mbstreamreader_reset($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 8] + 32] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      
      var $11 = HEAP[HEAP[$self_addr + 8] + 32];
      
      
      
      
      var $16 = HEAP[HEAP[$self_addr + 8] + 4];
      
      
      var $19 = FUNCTION_TABLE[$11]($self_addr + 12, $16);
      
      if ($19 != 0) {
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
      
      
      HEAP[$self_addr + 32] = 0;
      
      var $24 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $24;
      $0 = __Py_NoneStruct;
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
  function _mbstreamreader_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $self;
      var $stream = __stackBase__;
      var $codec;
      var $errors = __stackBase__ + 4;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      $codec = 0;
      HEAP[$errors] = 0;
      
      
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kwds_addr, __str41, _streamkwarglist, allocate([ $stream, 0, 0, 0, $errors, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 21;
      break;
     case 2:
      
      
      var $7 = HEAP[$type_addr + 152];
      
      var $9 = FUNCTION_TABLE[$7]($type_addr, 0);
      
      $self = $9;
      
      
      if ($self == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 21;
      break;
     case 4:
      
      
      var $15 = _PyObject_GetAttrString($type_addr, __str29);
      $codec = $15;
      
      
      if ($codec == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[$codec + 4] != _MultibyteCodec_Type) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $22 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($22, __str30);
      __label__ = 13;
      break;
     case 7:
      
      
      
      var $26 = HEAP[$codec + 8];
      
      
      HEAP[$self + 8] = $26;
      var $29 = HEAP[$stream];
      
      
      HEAP[$self + 36] = $29;
      
      
      
      var $35 = HEAP[HEAP[$stream]] + 1;
      var $36 = HEAP[$stream];
      HEAP[$36] = $35;
      
      
      HEAP[$self + 32] = 0;
      var $39 = HEAP[$errors];
      var $40 = _internal_error_callback($39);
      
      
      HEAP[$self + 20] = $40;
      var $43 = $self;
      
      
      
      if (HEAP[$43 + 20] == 0) {
        __lastLabel__ = 7;
        __label__ = 14;
        break;
      } else {
        __lastLabel__ = 7;
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      if (HEAP[HEAP[$self + 8] + 28] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $57 = HEAP[HEAP[$self + 8] + 28];
      
      
      
      
      var $62 = HEAP[HEAP[$self + 8] + 4];
      
      
      var $65 = FUNCTION_TABLE[$57]($self + 12, $62);
      
      if ($65 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $70 = HEAP[$codec] - 1;
      
      
      HEAP[$codec] = $70;
      
      
      
      
      if (HEAP[$codec] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $81 = HEAP[HEAP[$codec + 4] + 24];
      
      FUNCTION_TABLE[$81]($codec);
      __label__ = 12;
      break;
     case 12:
      
      
      $0 = $self;
      __label__ = 21;
      break;
     case 13:
      var $_pr = $self;
      __lastLabel__ = 13;
      __label__ = 14;
      break;
     case 14:
      var $85 = __lastLabel__ == 13 ? $_pr : $43;
      
      if ($85 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      
      var $91 = HEAP[$self] - 1;
      
      HEAP[$self] = $91;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      var $101 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$101]($self);
      __label__ = 17;
      break;
     case 17:
      
      
      if ($codec != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      
      
      
      var $109 = HEAP[$codec] - 1;
      
      
      HEAP[$codec] = $109;
      
      
      
      
      if (HEAP[$codec] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $120 = HEAP[HEAP[$codec + 4] + 24];
      
      FUNCTION_TABLE[$120]($codec);
      __label__ = 20;
      break;
     case 20:
      $0 = 0;
      __label__ = 21;
      break;
     case 21:
      
      $retval = $0;
      var $retval19 = $retval;
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbstreamreader_init($self, $args, $kwds) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    $0 = 0;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _mbstreamreader_traverse($self, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret6;
      $self_addr = $self;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$self_addr + 20] > 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $15 = HEAP[$self_addr + 20];
      var $16 = $visit_addr;
      
      var $18 = FUNCTION_TABLE[$16]($15, $arg_addr);
      $vret = $18;
      
      
      if ($vret != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      $0 = $vret;
      __label__ = 9;
      break;
     case 5:
      
      
      
      
      if (HEAP[$self_addr + 36] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $28 = HEAP[$self_addr + 36];
      var $29 = $visit_addr;
      
      var $31 = FUNCTION_TABLE[$29]($28, $arg_addr);
      $vret6 = $31;
      
      
      if ($vret6 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      $0 = $vret6;
      __label__ = 9;
      break;
     case 8:
      $0 = 0;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbstreamreader_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      _PyObject_GC_UnTrack($self_addr);
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 20] > 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[$self_addr + 20];
      
      
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
      
      
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[$self_addr + 20] + 4] + 24];
      
      
      var $33 = HEAP[$self_addr + 20];
      FUNCTION_TABLE[$30]($33);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[$self_addr + 36] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $40 = HEAP[$self_addr + 36];
      
      
      var $43 = HEAP[$40] - 1;
      var $44 = $40;
      HEAP[$44] = $43;
      
      
      
      if (HEAP[$40] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$self_addr + 36] + 4] + 24];
      
      
      var $57 = HEAP[$self_addr + 36];
      FUNCTION_TABLE[$54]($57);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      var $63 = HEAP[HEAP[$self_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$63]($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbstreamwriter_iwrite($self, $unistr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unistr_addr;
      var $retval;
      var $0;
      var $str;
      var $wr;
      $self_addr = $self;
      $unistr_addr = $unistr;
      
      
      
      var $4 = _encoder_encode_stateful($self_addr, $unistr_addr, 0);
      $str = $4;
      
      
      if ($str == 0) {
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
      
      
      var $9 = HEAP[$self_addr + 32];
      
      var $11 = __PyObject_CallMethod_SizeT($9, __str43, __str44, allocate([ $str, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $wr = $11;
      
      
      
      var $15 = HEAP[$str] - 1;
      
      
      HEAP[$str] = $15;
      
      
      
      
      if (HEAP[$str] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $26 = HEAP[HEAP[$str + 4] + 24];
      
      FUNCTION_TABLE[$26]($str);
      __label__ = 4;
      break;
     case 4:
      
      
      if ($wr == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 9;
      break;
     case 6:
      
      
      
      var $33 = HEAP[$wr] - 1;
      
      
      HEAP[$wr] = $33;
      
      
      
      
      if (HEAP[$wr] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $44 = HEAP[HEAP[$wr + 4] + 24];
      
      FUNCTION_TABLE[$44]($wr);
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
  function _mbstreamwriter_write($self, $strobj) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $strobj_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $strobj_addr = $strobj;
      
      
      var $3 = _mbstreamwriter_iwrite($self_addr, $strobj_addr);
      
      if ($3 != 0) {
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
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbstreamwriter_writelines($self, $lines) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $lines_addr;
      var $retval;
      var $0;
      var $strobj;
      var $i;
      var $r;
      $self_addr = $self;
      $lines_addr = $lines;
      
      var $2 = _PySequence_Check($lines_addr);
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($4, __str45);
      $0 = 0;
      __label__ = 12;
      break;
     case 2:
      $i = 0;
      __label__ = 10;
      break;
     case 3:
      
      
      var $7 = _PySequence_GetItem($lines_addr, $i);
      $strobj = $7;
      
      
      if ($strobj == 0) {
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
      
      
      var $12 = _mbstreamwriter_iwrite($self_addr, $strobj);
      $r = $12;
      
      
      
      var $16 = HEAP[$strobj] - 1;
      
      
      HEAP[$strobj] = $16;
      
      
      
      
      if (HEAP[$strobj] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $27 = HEAP[HEAP[$strobj + 4] + 24];
      
      FUNCTION_TABLE[$27]($strobj);
      __label__ = 7;
      break;
     case 7:
      
      var $30 = $r == -1;
      if ($30) {
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
      
      var $32 = $i + 1;
      $i = $32;
      __label__ = 10;
      break;
     case 10:
      
      var $34 = _PySequence_Size($lines_addr);
      
      
      if ($34 > $i) {
        __label__ = 3;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $38 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $38;
      $0 = __Py_NoneStruct;
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
  function _mbstreamwriter_reset($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $pending = __stackBase__;
      var $pwrt;
      var $wr;
      $self_addr = $self;
      
      
      
      HEAP[$pending] = $self_addr + 24;
      
      
      var $6 = HEAP[$self_addr + 20];
      
      
      var $9 = HEAP[$self_addr + 28];
      
      
      
      
      var $14 = HEAP[$self_addr + 8];
      var $15 = _multibytecodec_encode($14, $self_addr + 12, $pending, $9, $6, 3);
      $pwrt = $15;
      
      
      HEAP[$self_addr + 28] = 0;
      
      
      if ($pwrt == 0) {
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
      
      var $21 = _PyString_Size($pwrt);
      
      if ($21 > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      var $25 = HEAP[$self_addr + 32];
      
      var $27 = __PyObject_CallMethod_SizeT($25, __str43, __str44, allocate([ $pwrt, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $wr = $27;
      
      
      if ($wr == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $33 = HEAP[$pwrt] - 1;
      
      
      HEAP[$pwrt] = $33;
      
      
      
      
      if (HEAP[$pwrt] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $44 = HEAP[HEAP[$pwrt + 4] + 24];
      
      FUNCTION_TABLE[$44]($pwrt);
      __label__ = 6;
      break;
     case 6:
      $0 = 0;
      __label__ = 10;
      break;
     case 7:
      
      
      
      var $49 = HEAP[$pwrt] - 1;
      
      
      HEAP[$pwrt] = $49;
      
      
      
      
      if (HEAP[$pwrt] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $60 = HEAP[HEAP[$pwrt + 4] + 24];
      
      FUNCTION_TABLE[$60]($pwrt);
      __label__ = 9;
      break;
     case 9:
      
      var $63 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $63;
      $0 = __Py_NoneStruct;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval10 = $retval;
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbstreamwriter_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $self;
      var $stream = __stackBase__;
      var $codec;
      var $errors = __stackBase__ + 4;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      $codec = 0;
      HEAP[$errors] = 0;
      
      
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kwds_addr, __str46, _streamkwarglist, allocate([ $stream, 0, 0, 0, $errors, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 21;
      break;
     case 2:
      
      
      var $7 = HEAP[$type_addr + 152];
      
      var $9 = FUNCTION_TABLE[$7]($type_addr, 0);
      
      $self = $9;
      
      
      if ($self == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 21;
      break;
     case 4:
      
      
      var $15 = _PyObject_GetAttrString($type_addr, __str29);
      $codec = $15;
      
      
      if ($codec == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[$codec + 4] != _MultibyteCodec_Type) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $22 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($22, __str30);
      __label__ = 13;
      break;
     case 7:
      
      
      
      var $26 = HEAP[$codec + 8];
      
      
      HEAP[$self + 8] = $26;
      var $29 = HEAP[$stream];
      
      
      HEAP[$self + 32] = $29;
      
      
      
      var $35 = HEAP[HEAP[$stream]] + 1;
      var $36 = HEAP[$stream];
      HEAP[$36] = $35;
      
      
      HEAP[$self + 28] = 0;
      var $39 = HEAP[$errors];
      var $40 = _internal_error_callback($39);
      
      
      HEAP[$self + 20] = $40;
      var $43 = $self;
      
      
      
      if (HEAP[$43 + 20] == 0) {
        __lastLabel__ = 7;
        __label__ = 14;
        break;
      } else {
        __lastLabel__ = 7;
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      if (HEAP[HEAP[$self + 8] + 16] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $57 = HEAP[HEAP[$self + 8] + 16];
      
      
      
      
      var $62 = HEAP[HEAP[$self + 8] + 4];
      
      
      var $65 = FUNCTION_TABLE[$57]($self + 12, $62);
      
      if ($65 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $70 = HEAP[$codec] - 1;
      
      
      HEAP[$codec] = $70;
      
      
      
      
      if (HEAP[$codec] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $81 = HEAP[HEAP[$codec + 4] + 24];
      
      FUNCTION_TABLE[$81]($codec);
      __label__ = 12;
      break;
     case 12:
      
      
      $0 = $self;
      __label__ = 21;
      break;
     case 13:
      var $_pr = $self;
      __lastLabel__ = 13;
      __label__ = 14;
      break;
     case 14:
      var $85 = __lastLabel__ == 13 ? $_pr : $43;
      
      if ($85 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      
      var $91 = HEAP[$self] - 1;
      
      HEAP[$self] = $91;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      var $101 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$101]($self);
      __label__ = 17;
      break;
     case 17:
      
      
      if ($codec != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      
      
      
      var $109 = HEAP[$codec] - 1;
      
      
      HEAP[$codec] = $109;
      
      
      
      
      if (HEAP[$codec] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $120 = HEAP[HEAP[$codec + 4] + 24];
      
      FUNCTION_TABLE[$120]($codec);
      __label__ = 20;
      break;
     case 20:
      $0 = 0;
      __label__ = 21;
      break;
     case 21:
      
      $retval = $0;
      var $retval19 = $retval;
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbstreamwriter_init($self, $args, $kwds) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    $0 = 0;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _mbstreamwriter_traverse($self, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret6;
      $self_addr = $self;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$self_addr + 20] > 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $15 = HEAP[$self_addr + 20];
      var $16 = $visit_addr;
      
      var $18 = FUNCTION_TABLE[$16]($15, $arg_addr);
      $vret = $18;
      
      
      if ($vret != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      $0 = $vret;
      __label__ = 9;
      break;
     case 5:
      
      
      
      
      if (HEAP[$self_addr + 32] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $28 = HEAP[$self_addr + 32];
      var $29 = $visit_addr;
      
      var $31 = FUNCTION_TABLE[$29]($28, $arg_addr);
      $vret6 = $31;
      
      
      if ($vret6 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      $0 = $vret6;
      __label__ = 9;
      break;
     case 8:
      $0 = 0;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _mbstreamwriter_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      _PyObject_GC_UnTrack($self_addr);
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 20] > 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[$self_addr + 20];
      
      
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
      
      
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[$self_addr + 20] + 4] + 24];
      
      
      var $33 = HEAP[$self_addr + 20];
      FUNCTION_TABLE[$30]($33);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[$self_addr + 32] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $40 = HEAP[$self_addr + 32];
      
      
      var $43 = HEAP[$40] - 1;
      var $44 = $40;
      HEAP[$44] = $43;
      
      
      
      if (HEAP[$40] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$self_addr + 32] + 4] + 24];
      
      
      var $57 = HEAP[$self_addr + 32];
      FUNCTION_TABLE[$54]($57);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      var $63 = HEAP[HEAP[$self_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$63]($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function ___create_codec($ignore, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ignore_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $self;
      var $codec;
      $ignore_addr = $ignore;
      $arg_addr = $arg;
      
      var $2 = _PyCapsule_IsValid($arg_addr, __str49);
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($4, __str50);
      $0 = 0;
      __label__ = 8;
      break;
     case 2:
      
      var $6 = _PyCapsule_GetPointer($arg_addr, __str49);
      
      $codec = $6;
      
      
      
      
      if (HEAP[$codec + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $14 = HEAP[$codec + 8];
      
      
      var $17 = HEAP[$codec + 4];
      var $18 = FUNCTION_TABLE[$14]($17);
      
      if ($18 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 8;
      break;
     case 5:
      var $20 = __PyObject_New(_MultibyteCodec_Type);
      
      $self = $20;
      
      if ($20 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 8;
      break;
     case 7:
      
      
      
      HEAP[$self + 8] = $codec;
      
      
      $0 = $self;
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
  function _init_multibytecodec() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $i;
      var $m;
      var $typelist = __stackBase__;
      
      HEAP[$typelist] = _MultibyteIncrementalEncoder_Type;
      
      HEAP[$typelist + 4] = _MultibyteIncrementalDecoder_Type;
      
      HEAP[$typelist + 8] = _MultibyteStreamReader_Type;
      
      HEAP[$typelist + 12] = _MultibyteStreamWriter_Type;
      
      HEAP[$typelist + 16] = 0;
      var $5 = _PyType_Ready(_MultibyteCodec_Type);
      
      if ($5 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $7 = _Py_InitModule4(__str52, ___methods, 0, 0, 1013);
      $m = $7;
      
      
      if ($m == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      $i = 0;
      __label__ = 5;
      break;
     case 3:
      
      
      var $12 = HEAP[$typelist + $i * 4];
      var $13 = _PyType_Ready($12);
      
      if ($13 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $21 = HEAP[HEAP[$typelist + $i * 4]] + 1;
      var $22 = HEAP[$typelist + $i * 4];
      HEAP[$22] = $21;
      
      
      
      var $26 = HEAP[$typelist + $i * 4];
      
      
      
      
      var $31 = HEAP[HEAP[$typelist + $i * 4] + 12];
      
      var $33 = _PyModule_AddObject($m, $31, $26);
      
      var $35 = $i + 1;
      $i = $35;
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[$typelist + $i * 4] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $40 = _PyErr_Occurred();
      
      if ($40 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _Py_FatalError(__str53);
      __label__ = 8;
      break;
     case 8:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_multibytecodec"] = _init_multibytecodec;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _codecctx_errors_get, 0, _codecctx_errors_set, 0, _MultibyteCodec_Encode, 0, _MultibyteCodec_Decode, 0, _multibytecodec_dealloc, 0, _PyObject_GenericGetAttr, 0, _mbiencoder_encode, 0, _mbiencoder_reset, 0, _mbiencoder_dealloc, 0, _mbiencoder_traverse, 0, _mbiencoder_init, 0, _mbiencoder_new, 0, _mbidecoder_decode, 0, _mbidecoder_reset, 0, _mbidecoder_dealloc, 0, _mbidecoder_traverse, 0, _mbidecoder_init, 0, _mbidecoder_new, 0, _mbstreamreader_read, 0, _mbstreamreader_readline, 0, _mbstreamreader_readlines, 0, _mbstreamreader_reset, 0, _mbstreamreader_dealloc, 0, _mbstreamreader_traverse, 0, _mbstreamreader_init, 0, _mbstreamreader_new, 0, _mbstreamwriter_write, 0, _mbstreamwriter_writelines, 0, _mbstreamwriter_reset, 0, _mbstreamwriter_dealloc, 0, _mbstreamwriter_traverse, 0, _mbstreamwriter_init, 0, _mbstreamwriter_new, 0, ___create_codec, 0 ]);
  function run(args) {
    _MultibyteCodec_Encode__doc__ = allocate([ 73, 46, 101, 110, 99, 111, 100, 101, 40, 117, 110, 105, 99, 111, 100, 101, 91, 44, 32, 101, 114, 114, 111, 114, 115, 93, 41, 32, 45, 62, 32, 40, 115, 116, 114, 105, 110, 103, 44, 32, 108, 101, 110, 103, 116, 104, 32, 99, 111, 110, 115, 117, 109, 101, 100, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 110, 32, 101, 110, 99, 111, 100, 101, 100, 32, 115, 116, 114, 105, 110, 103, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32, 96, 117, 110, 105, 99, 111, 100, 101, 39, 46, 32, 101, 114, 114, 111, 114, 115, 32, 109, 97, 121, 32, 98, 101, 32, 103, 105, 118, 101, 110, 32, 116, 111, 10, 115, 101, 116, 32, 97, 32, 100, 105, 102, 102, 101, 114, 101, 110, 116, 32, 101, 114, 114, 111, 114, 32, 104, 97, 110, 100, 108, 105, 110, 103, 32, 115, 99, 104, 101, 109, 101, 46, 32, 68, 101, 102, 97, 117, 108, 116, 32, 105, 115, 32, 39, 115, 116, 114, 105, 99, 116, 39, 32, 109, 101, 97, 110, 105, 110, 103, 32, 116, 104, 97, 116, 10, 101, 110, 99, 111, 100, 105, 110, 103, 32, 101, 114, 114, 111, 114, 115, 32, 114, 97, 105, 115, 101, 32, 97, 32, 85, 110, 105, 99, 111, 100, 101, 69, 110, 99, 111, 100, 101, 69, 114, 114, 111, 114, 46, 32, 79, 116, 104, 101, 114, 32, 112, 111, 115, 115, 105, 98, 108, 101, 32, 118, 97, 108, 117, 101, 115, 32, 97, 114, 101, 10, 39, 105, 103, 110, 111, 114, 101, 39, 44, 32, 39, 114, 101, 112, 108, 97, 99, 101, 39, 32, 97, 110, 100, 32, 39, 120, 109, 108, 99, 104, 97, 114, 114, 101, 102, 114, 101, 112, 108, 97, 99, 101, 39, 32, 97, 115, 32, 119, 101, 108, 108, 32, 97, 115, 32, 97, 110, 121, 32, 111, 116, 104, 101, 114, 32, 110, 97, 109, 101, 10, 114, 101, 103, 105, 115, 116, 101, 114, 101, 100, 32, 119, 105, 116, 104, 32, 99, 111, 100, 101, 99, 115, 46, 114, 101, 103, 105, 115, 116, 101, 114, 95, 101, 114, 114, 111, 114, 32, 116, 104, 97, 116, 32, 99, 97, 110, 32, 104, 97, 110, 100, 108, 101, 32, 85, 110, 105, 99, 111, 100, 101, 69, 110, 99, 111, 100, 101, 69, 114, 114, 111, 114, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _MultibyteCodec_Decode__doc__ = allocate([ 73, 46, 100, 101, 99, 111, 100, 101, 40, 115, 116, 114, 105, 110, 103, 91, 44, 32, 101, 114, 114, 111, 114, 115, 93, 41, 32, 45, 62, 32, 40, 117, 110, 105, 99, 111, 100, 101, 111, 98, 106, 101, 99, 116, 44, 32, 108, 101, 110, 103, 116, 104, 32, 99, 111, 110, 115, 117, 109, 101, 100, 41, 10, 10, 68, 101, 99, 111, 100, 101, 115, 32, 96, 115, 116, 114, 105, 110, 103, 39, 32, 117, 115, 105, 110, 103, 32, 73, 44, 32, 97, 110, 32, 77, 117, 108, 116, 105, 98, 121, 116, 101, 67, 111, 100, 101, 99, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 32, 101, 114, 114, 111, 114, 115, 32, 109, 97, 121, 32, 98, 101, 32, 103, 105, 118, 101, 110, 10, 116, 111, 32, 115, 101, 116, 32, 97, 32, 100, 105, 102, 102, 101, 114, 101, 110, 116, 32, 101, 114, 114, 111, 114, 32, 104, 97, 110, 100, 108, 105, 110, 103, 32, 115, 99, 104, 101, 109, 101, 46, 32, 68, 101, 102, 97, 117, 108, 116, 32, 105, 115, 32, 39, 115, 116, 114, 105, 99, 116, 39, 32, 109, 101, 97, 110, 105, 110, 103, 10, 116, 104, 97, 116, 32, 101, 110, 99, 111, 100, 105, 110, 103, 32, 101, 114, 114, 111, 114, 115, 32, 114, 97, 105, 115, 101, 32, 97, 32, 85, 110, 105, 99, 111, 100, 101, 68, 101, 99, 111, 100, 101, 69, 114, 114, 111, 114, 46, 32, 79, 116, 104, 101, 114, 32, 112, 111, 115, 115, 105, 98, 108, 101, 32, 118, 97, 108, 117, 101, 115, 10, 97, 114, 101, 32, 39, 105, 103, 110, 111, 114, 101, 39, 32, 97, 110, 100, 32, 39, 114, 101, 112, 108, 97, 99, 101, 39, 32, 97, 115, 32, 119, 101, 108, 108, 32, 97, 115, 32, 97, 110, 121, 32, 111, 116, 104, 101, 114, 32, 110, 97, 109, 101, 32, 114, 101, 103, 105, 115, 116, 101, 114, 101, 100, 32, 119, 105, 116, 104, 10, 99, 111, 100, 101, 99, 115, 46, 114, 101, 103, 105, 115, 116, 101, 114, 95, 101, 114, 114, 111, 114, 32, 116, 104, 97, 116, 32, 105, 115, 32, 97, 98, 108, 101, 32, 116, 111, 32, 104, 97, 110, 100, 108, 101, 32, 85, 110, 105, 99, 111, 100, 101, 68, 101, 99, 111, 100, 101, 69, 114, 114, 111, 114, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _codeckwarglist = allocate(12, "i8*", ALLOC_NORMAL);
    __str = allocate([ 105, 110, 112, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 101, 114, 114, 111, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    _incnewkwarglist = allocate(8, "i8*", ALLOC_NORMAL);
    _incrementalkwarglist = allocate(12, "i8*", ALLOC_NORMAL);
    __str2 = allocate([ 102, 105, 110, 97, 108, 0 ], "i8", ALLOC_NORMAL);
    _streamkwarglist = allocate(12, "i8*", ALLOC_NORMAL);
    __str3 = allocate([ 115, 116, 114, 101, 97, 109, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 115, 116, 114, 105, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 105, 103, 110, 111, 114, 101, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 114, 101, 112, 108, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 101, 114, 114, 111, 114, 115, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 55, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 99, 106, 107, 99, 111, 100, 101, 99, 115, 47, 109, 117, 108, 116, 105, 98, 121, 116, 101, 99, 111, 100, 101, 99, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8537 = allocate([ 99, 97, 108, 108, 95, 101, 114, 114, 111, 114, 95, 99, 97, 108, 108, 98, 97, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 101, 114, 114, 111, 114, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 104, 111, 119, 32, 116, 111, 32, 116, 114, 101, 97, 116, 32, 101, 114, 114, 111, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    _codecctx_getsets = allocate(40, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str11 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 109, 117, 108, 116, 105, 98, 121, 116, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 105, 110, 99, 111, 109, 112, 108, 101, 116, 101, 32, 109, 117, 108, 116, 105, 98, 121, 116, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 105, 110, 116, 101, 114, 110, 97, 108, 32, 99, 111, 100, 101, 99, 32, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 117, 110, 107, 110, 111, 119, 110, 32, 114, 117, 110, 116, 105, 109, 101, 32, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 101, 110, 99, 111, 100, 105, 110, 103, 32, 101, 114, 114, 111, 114, 32, 104, 97, 110, 100, 108, 101, 114, 32, 109, 117, 115, 116, 32, 114, 101, 116, 117, 114, 110, 32, 40, 117, 110, 105, 99, 111, 100, 101, 44, 32, 105, 110, 116, 41, 32, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 112, 111, 115, 105, 116, 105, 111, 110, 32, 37, 122, 100, 32, 102, 114, 111, 109, 32, 101, 114, 114, 111, 114, 32, 104, 97, 110, 100, 108, 101, 114, 32, 111, 117, 116, 32, 111, 102, 32, 98, 111, 117, 110, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 100, 101, 99, 111, 100, 105, 110, 103, 32, 101, 114, 114, 111, 114, 32, 104, 97, 110, 100, 108, 101, 114, 32, 109, 117, 115, 116, 32, 114, 101, 116, 117, 114, 110, 32, 40, 117, 110, 105, 99, 111, 100, 101, 44, 32, 105, 110, 116, 41, 32, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate(1, "i8", ALLOC_NORMAL);
    __str19 = allocate([ 79, 124, 122, 58, 101, 110, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 99, 111, 117, 108, 100, 110, 39, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 116, 104, 101, 32, 111, 98, 106, 101, 99, 116, 32, 116, 111, 32, 117, 110, 105, 99, 111, 100, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 115, 42, 124, 122, 58, 100, 101, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 101, 110, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 100, 101, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    _multibytecodec_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str24 = allocate([ 77, 117, 108, 116, 105, 98, 121, 116, 101, 67, 111, 100, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    _MultibyteCodec_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str25 = allocate([ 112, 101, 110, 100, 105, 110, 103, 32, 98, 117, 102, 102, 101, 114, 32, 111, 118, 101, 114, 102, 108, 111, 119, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 79, 124, 105, 58, 101, 110, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 114, 101, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    _mbiencoder_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str28 = allocate([ 124, 115, 58, 73, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 69, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 99, 111, 100, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 99, 111, 100, 101, 99, 32, 105, 115, 32, 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 77, 117, 108, 116, 105, 98, 121, 116, 101, 73, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 69, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _MultibyteIncrementalEncoder_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str32 = allocate([ 115, 42, 124, 105, 58, 100, 101, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    _mbidecoder_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str33 = allocate([ 124, 115, 58, 73, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 68, 101, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 77, 117, 108, 116, 105, 98, 121, 116, 101, 73, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 68, 101, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _MultibyteIncrementalDecoder_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str35 = allocate([ 105, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 115, 116, 114, 101, 97, 109, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 97, 32, 110, 111, 110, 45, 115, 116, 114, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 114, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 97, 114, 103, 32, 49, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 114, 101, 97, 100, 108, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 114, 101, 97, 100, 108, 105, 110, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _mbstreamreader_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _mbstreamreader_members = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 36, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str41 = allocate([ 79, 124, 115, 58, 83, 116, 114, 101, 97, 109, 82, 101, 97, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 77, 117, 108, 116, 105, 98, 121, 116, 101, 83, 116, 114, 101, 97, 109, 82, 101, 97, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _MultibyteStreamReader_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str43 = allocate([ 119, 114, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 79, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 97, 114, 103, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 79, 124, 115, 58, 83, 116, 114, 101, 97, 109, 87, 114, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 119, 114, 105, 116, 101, 108, 105, 110, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _mbstreamwriter_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _mbstreamwriter_members = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 32, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str48 = allocate([ 77, 117, 108, 116, 105, 98, 121, 116, 101, 83, 116, 114, 101, 97, 109, 87, 114, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _MultibyteStreamWriter_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str49 = allocate([ 109, 117, 108, 116, 105, 98, 121, 116, 101, 99, 111, 100, 101, 99, 46, 95, 95, 109, 97, 112, 95, 42, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 97, 114, 103, 117, 109, 101, 110, 116, 32, 116, 121, 112, 101, 32, 105, 110, 118, 97, 108, 105, 100, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 95, 95, 99, 114, 101, 97, 116, 101, 95, 99, 111, 100, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    ___methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str52 = allocate([ 95, 109, 117, 108, 116, 105, 98, 121, 116, 101, 99, 111, 100, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 99, 97, 110, 39, 116, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 32, 116, 104, 101, 32, 95, 109, 117, 108, 116, 105, 98, 121, 116, 101, 99, 111, 100, 101, 99, 32, 109, 111, 100, 117, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_codeckwarglist] = __str;
    HEAP[_codeckwarglist + 4] = __str1;
    HEAP[_incnewkwarglist] = __str1;
    HEAP[_incrementalkwarglist] = __str;
    HEAP[_incrementalkwarglist + 4] = __str2;
    HEAP[_streamkwarglist] = __str3;
    HEAP[_streamkwarglist + 4] = __str1;
    HEAP[_codecctx_getsets] = __str1;
    HEAP[_codecctx_getsets + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_codecctx_getsets + 8] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_codecctx_getsets + 12] = __str10;
    HEAP[_multibytecodec_methods] = __str22;
    HEAP[_multibytecodec_methods + 4] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_multibytecodec_methods + 12] = _MultibyteCodec_Encode__doc__;
    HEAP[_multibytecodec_methods + 16] = __str23;
    HEAP[_multibytecodec_methods + 20] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_multibytecodec_methods + 28] = _MultibyteCodec_Decode__doc__;
    HEAP[_MultibyteCodec_Type + 12] = __str24;
    HEAP[_MultibyteCodec_Type + 24] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_MultibyteCodec_Type + 72] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_MultibyteCodec_Type + 116] = _multibytecodec_methods;
    HEAP[_mbiencoder_methods] = __str22;
    HEAP[_mbiencoder_methods + 4] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_mbiencoder_methods + 16] = __str27;
    HEAP[_mbiencoder_methods + 20] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_MultibyteIncrementalEncoder_Type + 12] = __str31;
    HEAP[_MultibyteIncrementalEncoder_Type + 24] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_MultibyteIncrementalEncoder_Type + 72] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_MultibyteIncrementalEncoder_Type + 92] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_MultibyteIncrementalEncoder_Type + 116] = _mbiencoder_methods;
    HEAP[_MultibyteIncrementalEncoder_Type + 124] = _codecctx_getsets;
    HEAP[_MultibyteIncrementalEncoder_Type + 148] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_MultibyteIncrementalEncoder_Type + 156] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_mbidecoder_methods] = __str23;
    HEAP[_mbidecoder_methods + 4] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_mbidecoder_methods + 16] = __str27;
    HEAP[_mbidecoder_methods + 20] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_MultibyteIncrementalDecoder_Type + 12] = __str34;
    HEAP[_MultibyteIncrementalDecoder_Type + 24] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_MultibyteIncrementalDecoder_Type + 72] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_MultibyteIncrementalDecoder_Type + 92] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_MultibyteIncrementalDecoder_Type + 116] = _mbidecoder_methods;
    HEAP[_MultibyteIncrementalDecoder_Type + 124] = _codecctx_getsets;
    HEAP[_MultibyteIncrementalDecoder_Type + 148] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_MultibyteIncrementalDecoder_Type + 156] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_mbstreamreader_methods] = __str37;
    HEAP[_mbstreamreader_methods + 4] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_mbstreamreader_methods + 16] = __str39;
    HEAP[_mbstreamreader_methods + 20] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_mbstreamreader_methods + 32] = __str40;
    HEAP[_mbstreamreader_methods + 36] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_mbstreamreader_methods + 48] = __str27;
    HEAP[_mbstreamreader_methods + 52] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_mbstreamreader_members] = __str3;
    HEAP[_MultibyteStreamReader_Type + 12] = __str42;
    HEAP[_MultibyteStreamReader_Type + 24] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_MultibyteStreamReader_Type + 72] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_MultibyteStreamReader_Type + 92] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_MultibyteStreamReader_Type + 116] = _mbstreamreader_methods;
    HEAP[_MultibyteStreamReader_Type + 120] = _mbstreamreader_members;
    HEAP[_MultibyteStreamReader_Type + 124] = _codecctx_getsets;
    HEAP[_MultibyteStreamReader_Type + 148] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_MultibyteStreamReader_Type + 156] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_mbstreamwriter_methods] = __str43;
    HEAP[_mbstreamwriter_methods + 4] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_mbstreamwriter_methods + 16] = __str47;
    HEAP[_mbstreamwriter_methods + 20] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_mbstreamwriter_methods + 32] = __str27;
    HEAP[_mbstreamwriter_methods + 36] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_mbstreamwriter_members] = __str3;
    HEAP[_MultibyteStreamWriter_Type + 12] = __str48;
    HEAP[_MultibyteStreamWriter_Type + 24] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_MultibyteStreamWriter_Type + 72] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_MultibyteStreamWriter_Type + 92] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_MultibyteStreamWriter_Type + 116] = _mbstreamwriter_methods;
    HEAP[_MultibyteStreamWriter_Type + 120] = _mbstreamwriter_members;
    HEAP[_MultibyteStreamWriter_Type + 124] = _codecctx_getsets;
    HEAP[_MultibyteStreamWriter_Type + 148] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_MultibyteStreamWriter_Type + 156] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[___methods] = __str51;
    HEAP[___methods + 4] = FUNCTION_TABLE_OFFSET + 68;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
