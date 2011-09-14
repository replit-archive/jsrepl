"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 192;
  var $1___SIZE = 16;
  var $2___SIZE = 100;
  var $3___SIZE = 20;
  var $4___SIZE = 20;
  var $5___SIZE = 40;
  var $6___SIZE = 196;
  var $7___SIZE = 48;
  var $8___SIZE = 40;
  var $9___SIZE = 20;
  var $10___SIZE = 32;
  var $struct_BZ2CompObject___SIZE = 60;
  var $struct_BZ2CompObject___FLATTENER = [ 0, 4, 8, 56 ];
  var $struct_BZ2DecompObject___SIZE = 64;
  var $struct_BZ2DecompObject___FLATTENER = [ 0, 4, 8, 56, 60 ];
  var $struct_BZ2FileObject___SIZE = 64;
  var $struct_BZ2FileObject___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56 ];
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyFileObject___SIZE = 84;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyListObject___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
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
  var $struct_bz_stream___SIZE = 48;
  var ___author__;
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
  var ___PRETTY_FUNCTION___8675;
  var __str10;
  var __str11;
  var _BZ2File_read__doc__;
  var __str12;
  var __str13;
  var __str14;
  var __str15;
  var __str16;
  var _BZ2File_readline__doc__;
  var __str17;
  var _BZ2File_readlines__doc__;
  var __str18;
  var _BZ2File_xreadlines__doc__;
  var _BZ2File_write__doc__;
  var __str19;
  var __str20;
  var _BZ2File_writelines__doc__;
  var __str21;
  var __str22;
  var _BZ2File_seek__doc__;
  var __str23;
  var __str24;
  var __str25;
  var ___PRETTY_FUNCTION___9317;
  var __str26;
  var __str27;
  var _BZ2File_tell__doc__;
  var _BZ2File_close__doc__;
  var __str28;
  var _BZ2File_enter_doc;
  var _BZ2File_exit_doc;
  var __str29;
  var __str30;
  var __str31;
  var __str32;
  var __str33;
  var __str34;
  var __str35;
  var __str36;
  var __str37;
  var _BZ2File_methods;
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
  var _BZ2File_getset;
  var __str52;
  var __str53;
  var _BZ2File_members;
  var __str54;
  var __str55;
  var _kwlist_9585;
  var __str56;
  var __str57;
  var __str58;
  var __str59;
  var __str60;
  var __str61;
  var __str62;
  var __str63;
  var _BZ2File__doc__;
  var __str64;
  var _BZ2File_Type;
  var _BZ2Comp_compress__doc__;
  var __str65;
  var __str66;
  var _BZ2Comp_flush__doc__;
  var __str67;
  var __str68;
  var __str69;
  var _BZ2Comp_methods;
  var __str70;
  var _kwlist_9935;
  var _BZ2Comp__doc__;
  var __str71;
  var _BZ2Comp_Type;
  var __str72;
  var _BZ2Decomp_members;
  var _BZ2Decomp_decompress__doc__;
  var __str73;
  var __str74;
  var __str75;
  var _BZ2Decomp_methods;
  var __str76;
  var _BZ2Decomp__doc__;
  var __str77;
  var _BZ2Decomp_Type;
  var _bz2_compress__doc__;
  var __str78;
  var _kwlist_10147;
  var __str79;
  var _bz2_decompress__doc__;
  var __str80;
  var _bz2_methods;
  var _bz2__doc__;
  var __str81;
  var __str82;
  var __str83;
  var __str84;
  var __str85;
  function _check_iterbuffered($f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $f_addr;
      var $retval;
      var $0;
      $f_addr = $f;
      
      
      
      
      if (HEAP[$f_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$f_addr + 16] - HEAP[$f_addr + 20] > 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      
      
      
      if (HEAP[HEAP[$f_addr + 12]] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $21 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($21, __str);
      $0 = -1;
      __label__ = 5;
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
  function _Util_CatchBZ2Error($bzerror) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $bzerror_addr;
      var $ret;
      $bzerror_addr = $bzerror;
      $ret = 0;
      var $0 = $bzerror_addr;
      if ($0 == -9) {
        __label__ = 1;
        break;
      } else if ($0 == -7) {
        __label__ = 6;
        break;
      } else if ($0 == -6) {
        __label__ = 5;
        break;
      } else if ($0 == -5) {
        __label__ = 4;
        break;
      } else if ($0 == -4) {
        __label__ = 4;
        break;
      } else if ($0 == -3) {
        __label__ = 3;
        break;
      } else if ($0 == -2) {
        __label__ = 2;
        break;
      } else if ($0 == -1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 1:
      var $1 = HEAP[_PyExc_SystemError];
      _PyErr_SetString($1, __str1);
      $ret = 1;
      __label__ = 8;
      break;
     case 2:
      var $2 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($2, __str2);
      $ret = 1;
      __label__ = 8;
      break;
     case 3:
      var $3 = _PyErr_NoMemory();
      $ret = 1;
      __label__ = 8;
      break;
     case 4:
      var $4 = HEAP[_PyExc_IOError];
      _PyErr_SetString($4, __str3);
      $ret = 1;
      __label__ = 8;
      break;
     case 5:
      var $5 = HEAP[_PyExc_IOError];
      _PyErr_SetString($5, __str4);
      $ret = 1;
      __label__ = 8;
      break;
     case 6:
      var $6 = HEAP[_PyExc_EOFError];
      _PyErr_SetString($6, __str5);
      $ret = 1;
      __label__ = 8;
      break;
     case 7:
      var $7 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($7, __str6);
      $ret = 1;
      __label__ = 8;
      break;
     case 8:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Util_NewBufferSize($currentsize) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $currentsize_addr;
      var $retval;
      var $0;
      $currentsize_addr = $currentsize;
      
      
      var $3 = $currentsize_addr;
      if ($currentsize_addr > 8192) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      var $5 = $currentsize_addr;
      if ($3 <= 524288) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      $0 = $currentsize_addr + $5;
      __label__ = 5;
      break;
     case 3:
      
      $0 = $5 + 524288;
      __label__ = 5;
      break;
     case 4:
      
      $0 = $3 + 8192;
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
  function _Util_GetLine($f, $n) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 9;
    _memset(__stackBase__, 0, 9);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $f_addr;
      var $n_addr;
      var $retval;
      var $0;
      var $iftmp_7;
      var $c = __stackBase__;
      var $buf;
      var $end;
      var $total_v_size;
      var $used_v_size;
      var $increment;
      var $v = __stackBase__ + 1;
      var $bzerror = __stackBase__ + 5;
      var $bytes_read;
      var $newlinetypes;
      var $skipnextlf;
      var $univ_newline;
      $f_addr = $f;
      $n_addr = $n;
      
      
      
      $newlinetypes = HEAP[$f_addr + 32];
      
      
      
      $skipnextlf = HEAP[$f_addr + 36];
      
      
      
      $univ_newline = HEAP[$f_addr + 28];
      
      
      if ($n_addr > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $iftmp_7 = $n_addr;
      __label__ = 3;
      break;
     case 2:
      $iftmp_7 = 100;
      __label__ = 3;
      break;
     case 3:
      
      $total_v_size = $iftmp_7;
      
      var $15 = _PyString_FromStringAndSize(0, $total_v_size);
      HEAP[$v] = $15;
      
      if ($15 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 42;
      break;
     case 5:
      
      
      
      
      $buf = HEAP[$v] + 20;
      
      
      
      $end = $buf + $total_v_size;
      __label__ = 19;
      break;
     case 6:
      
      
      var $26 = HEAP[$f_addr + 40];
      var $27 = _BZ2_bzRead($bzerror, $26, $c, 1);
      $bytes_read = $27;
      
      
      
      var $31 = HEAP[$f_addr + 48] + 1;
      
      
      HEAP[$f_addr + 48] = $31;
      
      
      if ($bytes_read == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if ($univ_newline != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 8:
      
      
      if ($skipnextlf != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      $skipnextlf = 0;
      
      
      var $42 = $newlinetypes;
      if (HEAP[$c] == 10) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      var $43 = $42 | 4;
      $newlinetypes = $43;
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $48 = HEAP[$f_addr + 40];
      var $49 = _BZ2_bzRead($bzerror, $48, $c, 1);
      $bytes_read = $49;
      
      
      
      var $53 = HEAP[$f_addr + 48] + 1;
      
      
      HEAP[$f_addr + 48] = $53;
      
      
      if ($bytes_read == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $58 = $42 | 1;
      $newlinetypes = $58;
      __label__ = 13;
      break;
     case 13:
      
      
      if (HEAP[$c] == 13) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $skipnextlf = 1;
      HEAP[$c] = 10;
      __label__ = 17;
      break;
     case 15:
      
      
      if (HEAP[$c] == 10) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      var $64 = $newlinetypes | 2;
      $newlinetypes = $64;
      __label__ = 17;
      break;
     case 17:
      var $65 = HEAP[$c];
      
      HEAP[$buf] = $65;
      
      var $68 = $buf + 1;
      $buf = $68;
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      if (HEAP[$c] == 10) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      if ($buf != $end) {
        __label__ = 6;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      if ($univ_newline != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 21:
      
      
      if (HEAP[$bzerror] == 4) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      if ($skipnextlf != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      var $83 = $newlinetypes | 1;
      $newlinetypes = $83;
      __label__ = 24;
      break;
     case 24:
      
      
      
      HEAP[$f_addr + 32] = $newlinetypes;
      
      
      
      HEAP[$f_addr + 36] = $skipnextlf;
      
      
      if (HEAP[$bzerror] == 4) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      var $94 = HEAP[$f_addr + 48];
      
      
      HEAP[$f_addr + 56] = $94;
      
      
      HEAP[$f_addr + 44] = 2;
      __label__ = 39;
      break;
     case 26:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      var $101 = HEAP[$bzerror];
      _Util_CatchBZ2Error($101);
      var $102 = HEAP[$v];
      
      
      var $105 = HEAP[$102] - 1;
      var $106 = $102;
      HEAP[$106] = $105;
      
      
      
      if (HEAP[$102] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $114 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $115 = HEAP[$v];
      FUNCTION_TABLE[$114]($115);
      __label__ = 29;
      break;
     case 29:
      $0 = 0;
      __label__ = 42;
      break;
     case 30:
      
      
      if (HEAP[$c] == 10) {
        __label__ = 39;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      if ($n_addr > 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      $used_v_size = $total_v_size;
      
      
      $increment = $total_v_size >>> 2;
      
      
      var $125 = $increment + $total_v_size;
      $total_v_size = $125;
      
      
      if ($total_v_size < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 33:
      var $128 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($128, __str7);
      var $129 = HEAP[$v];
      
      
      var $132 = HEAP[$129] - 1;
      var $133 = $129;
      HEAP[$133] = $132;
      
      
      
      if (HEAP[$129] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $141 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $142 = HEAP[$v];
      FUNCTION_TABLE[$141]($142);
      __label__ = 35;
      break;
     case 35:
      $0 = 0;
      __label__ = 42;
      break;
     case 36:
      
      var $144 = __PyString_Resize($v, $total_v_size);
      
      if ($144 < 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      $0 = 0;
      __label__ = 42;
      break;
     case 38:
      
      
      
      
      
      
      $buf = HEAP[$v] + 20 + $used_v_size;
      
      
      
      
      
      
      $end = HEAP[$v] + 20 + $total_v_size;
      __label__ = 19;
      break;
     case 39:
      
      
      
      
      
      
      
      $used_v_size = $buf - (HEAP[$v] + 20);
      
      
      
      if ($used_v_size != $total_v_size) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      var $169 = __PyString_Resize($v, $used_v_size);
      __label__ = 41;
      break;
     case 41:
      
      $0 = HEAP[$v];
      __label__ = 42;
      break;
     case 42:
      
      $retval = $0;
      var $retval44 = $retval;
      STACKTOP = __stackBase__;
      return $retval44;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Util_UnivNewlineRead($bzerror, $stream, $buf, $n, $f) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $bzerror_addr;
      var $stream_addr;
      var $buf_addr;
      var $n_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $dst;
      var $newlinetypes;
      var $skipnextlf;
      var $nread;
      var $shortread;
      var $src;
      var $c;
      $bzerror_addr = $bzerror;
      $stream_addr = $stream;
      $buf_addr = $buf;
      $n_addr = $n;
      $f_addr = $f;
      
      $dst = $buf_addr;
      
      
      if ($buf_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str8, __str9, 352, ___PRETTY_FUNCTION___8675);
      throw "Reached an unreachable!";
     case 2:
      
      
      if ($stream_addr == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str10, __str9, 353, ___PRETTY_FUNCTION___8675);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      
      if (HEAP[$f_addr + 28] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $14 = _BZ2_bzRead($bzerror_addr, $stream_addr, $buf_addr, $n_addr);
      $0 = $14;
      __label__ = 28;
      break;
     case 6:
      
      
      
      $newlinetypes = HEAP[$f_addr + 32];
      
      
      
      $skipnextlf = HEAP[$f_addr + 36];
      __label__ = 26;
      break;
     case 7:
      
      $src = $dst;
      
      
      
      
      var $26 = _BZ2_bzRead($bzerror_addr, $stream_addr, $dst, $n_addr);
      $nread = $26;
      
      
      
      if ($nread > $n_addr) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      ___assert_fail(__str11, __str9, 370, ___PRETTY_FUNCTION___8675);
      throw "Reached an unreachable!";
     case 9:
      
      
      var $32 = $n_addr - $nread;
      $n_addr = $32;
      
      
      var $35 = $n_addr != 0;
      $shortread = $35;
      
      var $37 = $nread - 1;
      $nread = $37;
      var $38 = $37 != -1;
      if ($38) {
        __lastLabel__ = 9;
        __label__ = 10;
        break;
      } else {
        __lastLabel__ = 9;
        __label__ = 22;
        break;
      }
     case 10:
      
      var $40 = HEAP[$src];
      $c = $40;
      
      var $42 = $src + 1;
      $src = $42;
      
      if ($40 == 13) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      HEAP[$dst] = 10;
      
      var $46 = $dst + 1;
      $dst = $46;
      $skipnextlf = 1;
      __label__ = 12;
      break;
     case 12:
      
      var $48 = $nread - 1;
      $nread = $48;
      var $49 = $48 != -1;
      if ($49) {
        __label__ = 10;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 13:
      
      
      var $_pr = $c;
      if ($skipnextlf == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      if ($_pr != 10) {
        __label__ = 18;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      $skipnextlf = 0;
      
      var $54 = $newlinetypes | 4;
      $newlinetypes = $54;
      
      var $56 = $n_addr + 1;
      $n_addr = $56;
      __label__ = 12;
      break;
     case 16:
      
      if ($_pr == 10) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      var $59 = $newlinetypes | 2;
      $newlinetypes = $59;
      __label__ = 20;
      break;
     case 18:
      
      
      if ($skipnextlf != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      var $63 = $newlinetypes | 1;
      $newlinetypes = $63;
      __label__ = 20;
      break;
     case 20:
      
      
      HEAP[$dst] = $c;
      
      var $67 = $dst + 1;
      $dst = $67;
      $skipnextlf = 0;
      __label__ = 12;
      break;
     case 21:
      var $_pr1 = $shortread;
      __lastLabel__ = 21;
      __label__ = 22;
      break;
     case 22:
      var $68 = __lastLabel__ == 21 ? $_pr1 : $35;
      
      if ($68 != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 23:
      
      
      if ($skipnextlf != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 24:
      
      
      
      if (HEAP[$bzerror_addr] == 4) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      var $76 = $newlinetypes | 1;
      $newlinetypes = $76;
      __label__ = 27;
      break;
     case 26:
      
      
      if ($n_addr != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      HEAP[$f_addr + 32] = $newlinetypes;
      
      
      
      HEAP[$f_addr + 36] = $skipnextlf;
      
      
      
      
      
      $0 = $dst - $buf_addr;
      __label__ = 28;
      break;
     case 28:
      
      $retval = $0;
      var $retval28 = $retval;
      return $retval28;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Util_DropReadAhead($f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $f_addr;
      $f_addr = $f;
      
      
      
      
      if (HEAP[$f_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[$f_addr + 12];
      _PyMem_Free($6);
      
      
      HEAP[$f_addr + 12] = 0;
      __label__ = 2;
      break;
     case 2:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Util_ReadAhead($f, $bufsize) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $f_addr;
      var $bufsize_addr;
      var $retval;
      var $0;
      var $chunksize;
      var $bzerror = __stackBase__;
      $f_addr = $f;
      $bufsize_addr = $bufsize;
      
      
      
      
      if (HEAP[$f_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$f_addr + 16] - HEAP[$f_addr + 20] > 0) {
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
      
      _Util_DropReadAhead($f_addr);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      if (HEAP[$f_addr + 44] == 2) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $22 = HEAP[$f_addr + 12];
      
      
      HEAP[$f_addr + 20] = $22;
      
      
      var $27 = HEAP[$f_addr + 12];
      
      
      HEAP[$f_addr + 16] = $27;
      $0 = 0;
      __label__ = 13;
      break;
     case 6:
      
      var $31 = _PyMem_Malloc($bufsize_addr);
      
      
      HEAP[$f_addr + 12] = $31;
      
      
      
      
      if (HEAP[$f_addr + 12] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $38 = _PyErr_NoMemory();
      $0 = -1;
      __label__ = 13;
      break;
     case 8:
      
      
      
      var $42 = HEAP[$f_addr + 12];
      
      
      var $45 = HEAP[$f_addr + 40];
      
      var $47 = _Util_UnivNewlineRead($bzerror, $45, $42, $bufsize_addr, $f_addr);
      $chunksize = $47;
      
      
      
      
      
      var $53 = $chunksize + HEAP[$f_addr + 48];
      
      
      HEAP[$f_addr + 48] = $53;
      
      
      if (HEAP[$bzerror] == 4) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      var $60 = HEAP[$f_addr + 48];
      
      
      HEAP[$f_addr + 56] = $60;
      
      
      HEAP[$f_addr + 44] = 2;
      __label__ = 12;
      break;
     case 10:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $67 = HEAP[$bzerror];
      _Util_CatchBZ2Error($67);
      
      _Util_DropReadAhead($f_addr);
      $0 = -1;
      __label__ = 13;
      break;
     case 12:
      
      
      var $71 = HEAP[$f_addr + 12];
      
      
      HEAP[$f_addr + 20] = $71;
      
      
      
      
      var $78 = HEAP[$f_addr + 12] + $chunksize;
      
      
      HEAP[$f_addr + 16] = $78;
      $0 = 0;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval13 = $retval;
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Util_ReadAheadGetLineSkip($f, $skip, $bufsize) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $f_addr;
      var $skip_addr;
      var $bufsize_addr;
      var $retval;
      var $0;
      var $s;
      var $bufptr;
      var $buf;
      var $len;
      $f_addr = $f;
      $skip_addr = $skip;
      $bufsize_addr = $bufsize;
      
      
      
      
      if (HEAP[$f_addr + 12] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = _Util_ReadAhead($f_addr, $bufsize_addr);
      
      if ($7 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 14;
      break;
     case 3:
      
      
      
      
      
      
      
      
      
      $len = HEAP[$f_addr + 16] - HEAP[$f_addr + 20];
      
      if (HEAP[$f_addr + 16] - HEAP[$f_addr + 20] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $20 = _PyString_FromStringAndSize(0, $skip_addr);
      
      $0 = $20;
      __label__ = 14;
      break;
     case 5:
      
      
      
      var $25 = HEAP[$f_addr + 20];
      var $26 = _memchr($25, 10, $len);
      $bufptr = $26;
      
      
      if ($bufptr != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      
      var $30 = $bufptr + 1;
      $bufptr = $30;
      
      
      
      
      
      
      
      $len = $bufptr - HEAP[$f_addr + 20];
      
      
      
      var $41 = _PyString_FromStringAndSize(0, $len + $skip_addr);
      
      $s = $41;
      
      
      if ($s == 0) {
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
      
      
      
      var $48 = HEAP[$f_addr + 20];
      
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($s + 20 + $skip_addr, $48, $len, 1, 0);
      
      
      
      HEAP[$f_addr + 20] = $bufptr;
      
      
      
      
      
      if (HEAP[$f_addr + 16] == $bufptr) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      _Util_DropReadAhead($f_addr);
      __label__ = 13;
      break;
     case 10:
      
      
      
      $bufptr = HEAP[$f_addr + 20];
      
      
      
      $buf = HEAP[$f_addr + 12];
      
      
      HEAP[$f_addr + 12] = 0;
      
      
      
      
      
      
      
      
      var $79 = _Util_ReadAheadGetLineSkip($f_addr, $len + $skip_addr, ($bufsize_addr >> 2) + $bufsize_addr);
      $s = $79;
      
      
      if ($s == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      _PyMem_Free($buf);
      $0 = 0;
      __label__ = 14;
      break;
     case 12:
      
      
      
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($s + 20 + $skip_addr, $bufptr, $len, 1, 0);
      
      _PyMem_Free($buf);
      __label__ = 13;
      break;
     case 13:
      
      $0 = $s;
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
  function _BZ2File_read($self, $args) {
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
      var $bytesrequested = __stackBase__;
      var $bytesread;
      var $buffersize;
      var $chunksize;
      var $bzerror = __stackBase__ + 4;
      var $ret = __stackBase__ + 8;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$bytesrequested] = -1;
      HEAP[$ret] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str12, allocate([ $bytesrequested, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      var $6 = HEAP[$self_addr + 44];
      if ($6 == 0) {
        __label__ = 5;
        break;
      } else if ($6 == 1) {
        __label__ = 3;
        break;
      } else if ($6 == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      var $8 = _check_iterbuffered($self_addr);
      
      if ($8 != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      var $10 = _PyString_FromString(__str13);
      HEAP[$ret] = $10;
      __label__ = 24;
      break;
     case 5:
      var $11 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($11, __str14);
      __label__ = 24;
      break;
     case 6:
      var $12 = HEAP[_PyExc_IOError];
      _PyErr_SetString($12, __str15);
      __label__ = 24;
      break;
     case 7:
      
      
      if (HEAP[$bytesrequested] < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $15 = _Util_NewBufferSize(0);
      $buffersize = $15;
      __lastLabel__ = 8;
      __label__ = 10;
      break;
     case 9:
      var $16 = HEAP[$bytesrequested];
      $buffersize = $16;
      __lastLabel__ = 9;
      __label__ = 10;
      break;
     case 10:
      var $17 = __lastLabel__ == 9 ? $16 : $15;
      
      if ($17 < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $19 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($19, __str16);
      __label__ = 24;
      break;
     case 12:
      
      var $21 = _PyString_FromStringAndSize(0, $buffersize);
      HEAP[$ret] = $21;
      
      
      if (HEAP[$ret] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      $bytesread = 0;
      __label__ = 14;
      break;
     case 14:
      
      
      
      
      
      
      
      
      var $32 = HEAP[$ret] + 20 + $bytesread;
      
      
      var $35 = HEAP[$self_addr + 40];
      
      var $37 = _Util_UnivNewlineRead($bzerror, $35, $32, $buffersize - $bytesread, $self_addr);
      $chunksize = $37;
      
      
      
      
      
      var $43 = $chunksize + HEAP[$self_addr + 48];
      
      
      HEAP[$self_addr + 48] = $43;
      
      
      var $48 = $chunksize + $bytesread;
      $bytesread = $48;
      
      
      if (HEAP[$bzerror] == 4) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      var $53 = HEAP[$self_addr + 48];
      
      
      HEAP[$self_addr + 56] = $53;
      
      
      HEAP[$self_addr + 44] = 2;
      __label__ = 22;
      break;
     case 16:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      var $60 = HEAP[$bzerror];
      _Util_CatchBZ2Error($60);
      var $61 = HEAP[$ret];
      
      
      var $64 = HEAP[$61] - 1;
      var $65 = $61;
      HEAP[$65] = $64;
      
      
      
      if (HEAP[$61] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $74 = HEAP[$ret];
      FUNCTION_TABLE[$73]($74);
      __label__ = 19;
      break;
     case 19:
      HEAP[$ret] = 0;
      __label__ = 24;
      break;
     case 20:
      
      
      if (HEAP[$bytesrequested] < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      var $78 = _Util_NewBufferSize($buffersize);
      $buffersize = $78;
      
      var $80 = __PyString_Resize($ret, $buffersize);
      
      if ($80 < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 22:
      
      
      
      if ($bytesread != $buffersize) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      var $86 = __PyString_Resize($ret, $bytesread);
      __label__ = 24;
      break;
     case 24:
      
      $0 = HEAP[$ret];
      __label__ = 25;
      break;
     case 25:
      
      $retval = $0;
      var $retval25 = $retval;
      STACKTOP = __stackBase__;
      return $retval25;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2File_readline($self, $args) {
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
      var $ret;
      var $sizehint = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      $ret = 0;
      HEAP[$sizehint] = -1;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str17, allocate([ $sizehint, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      var $6 = HEAP[$self_addr + 44];
      if ($6 == 0) {
        __label__ = 5;
        break;
      } else if ($6 == 1) {
        __label__ = 3;
        break;
      } else if ($6 == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      var $8 = _check_iterbuffered($self_addr);
      
      if ($8 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      var $10 = _PyString_FromString(__str13);
      $ret = $10;
      __label__ = 10;
      break;
     case 5:
      var $11 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($11, __str14);
      __label__ = 10;
      break;
     case 6:
      var $12 = HEAP[_PyExc_IOError];
      _PyErr_SetString($12, __str15);
      __label__ = 10;
      break;
     case 7:
      
      
      if (HEAP[$sizehint] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $15 = _PyString_FromString(__str13);
      $ret = $15;
      __label__ = 10;
      break;
     case 9:
      
      
      var $max = HEAP[$sizehint] >= 0 ? HEAP[$sizehint] : 0;
      
      var $19 = _Util_GetLine($self_addr, $max);
      $ret = $19;
      __label__ = 10;
      break;
     case 10:
      
      $0 = $ret;
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
  function _BZ2File_readlines($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8208;
    _memset(__stackBase__, 0, 8208);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $sizehint = __stackBase__;
      var $list;
      var $line = __stackBase__ + 4;
      var $small_buffer = __stackBase__ + 8;
      var $buffer;
      var $buffersize;
      var $big_buffer = __stackBase__ + 8200;
      var $nfilled;
      var $nread;
      var $totalread;
      var $p;
      var $q;
      var $end;
      var $err;
      var $shortread;
      var $bzerror = __stackBase__ + 8204;
      var $rest;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$sizehint] = 0;
      $list = 0;
      
      $buffer = $small_buffer;
      $buffersize = 8192;
      HEAP[$big_buffer] = 0;
      $nfilled = 0;
      $totalread = 0;
      $shortread = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str18, allocate([ $sizehint, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 53;
      break;
     case 2:
      
      
      var $6 = HEAP[$self_addr + 44];
      if ($6 == 0) {
        __label__ = 5;
        break;
      } else if ($6 == 1) {
        __label__ = 3;
        break;
      } else if ($6 == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      var $8 = _check_iterbuffered($self_addr);
      
      if ($8 != 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      var $10 = _PyList_New(0);
      $list = $10;
      __label__ = 49;
      break;
     case 5:
      var $11 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($11, __str14);
      __label__ = 49;
      break;
     case 6:
      var $12 = HEAP[_PyExc_IOError];
      _PyErr_SetString($12, __str15);
      __label__ = 49;
      break;
     case 7:
      var $13 = _PyList_New(0);
      $list = $13;
      
      
      if ($list == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $small_buffer23 = $small_buffer;
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      
      
      
      
      var $24 = HEAP[$self_addr + 40];
      
      var $26 = _Util_UnivNewlineRead($bzerror, $24, $buffer + $nfilled, $buffersize - $nfilled, $self_addr);
      $nread = $26;
      
      
      
      
      
      var $32 = $nread + HEAP[$self_addr + 48];
      
      
      HEAP[$self_addr + 48] = $32;
      
      
      if (HEAP[$bzerror] == 4) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      var $39 = HEAP[$self_addr + 48];
      
      
      HEAP[$self_addr + 56] = $39;
      
      
      HEAP[$self_addr + 44] = 2;
      
      
      if ($nread == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$sizehint] = 0;
      __label__ = 37;
      break;
     case 12:
      $shortread = 1;
      __label__ = 18;
      break;
     case 13:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      var $48 = HEAP[$bzerror];
      _Util_CatchBZ2Error($48);
      __label__ = 15;
      break;
     case 15:
      
      
      
      var $52 = HEAP[$list] - 1;
      
      
      HEAP[$list] = $52;
      
      
      
      
      if (HEAP[$list] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $63 = HEAP[HEAP[$list + 4] + 24];
      
      FUNCTION_TABLE[$63]($list);
      __label__ = 17;
      break;
     case 17:
      $list = 0;
      __label__ = 49;
      break;
     case 18:
      
      
      var $67 = $nread + $totalread;
      $totalread = $67;
      
      
      
      
      var $72 = _memchr($buffer + $nfilled, 10, $nread);
      $p = $72;
      
      
      if ($shortread == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 19:
      
      
      if ($p == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 20:
      
      
      var $79 = $nread + $nfilled;
      $nfilled = $79;
      
      var $81 = $buffersize * 2;
      $buffersize = $81;
      
      
      if ($buffersize < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      var $84 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($84, __str7);
      __label__ = 15;
      break;
     case 22:
      
      
      var $87 = $buffersize;
      if (HEAP[$big_buffer] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 23:
      var $88 = _PyString_FromStringAndSize(0, $87);
      HEAP[$big_buffer] = $88;
      
      
      if (HEAP[$big_buffer] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      $buffer = HEAP[$big_buffer] + 20;
      
      
      _llvm_memcpy_p0i8_p0i8_i32($buffer, $small_buffer23, $nfilled, 1, 0);
      __label__ = 9;
      break;
     case 25:
      var $97 = __PyString_Resize($big_buffer, $87);
      
      
      
      
      $buffer = HEAP[$big_buffer] + 20;
      __label__ = 9;
      break;
     case 26:
      
      
      
      
      
      $end = $buffer + $nfilled + $nread;
      
      $q = $buffer;
      var $_pr = $p;
      __lastLabel__ = 26;
      __label__ = 32;
      break;
     case 27:
      
      var $109 = $p + 1;
      $p = $109;
      
      
      
      
      
      
      var $116 = _PyString_FromStringAndSize($q, $p - $q);
      HEAP[$line] = $116;
      
      
      if (HEAP[$line] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      var $119 = HEAP[$line];
      
      var $121 = _PyList_Append($list, $119);
      $err = $121;
      var $122 = HEAP[$line];
      
      
      var $125 = HEAP[$122] - 1;
      var $126 = $122;
      HEAP[$126] = $125;
      
      
      
      if (HEAP[$122] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $134 = HEAP[HEAP[HEAP[$line] + 4] + 24];
      var $135 = HEAP[$line];
      FUNCTION_TABLE[$134]($135);
      __label__ = 30;
      break;
     case 30:
      
      
      if ($err != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      $q = $p;
      
      
      
      
      
      
      var $145 = _memchr($q, 10, $end - $q);
      $p = $145;
      __lastLabel__ = 31;
      __label__ = 32;
      break;
     case 32:
      var $146 = __lastLabel__ == 31 ? $145 : $_pr;
      
      if ($146 != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      
      
      $nfilled = $end - $q;
      
      
      
      _llvm_memmove_p0i8_p0i8_i32($buffer, $q, $nfilled, 1, 0);
      
      
      if (HEAP[$sizehint] > 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      if (HEAP[$sizehint] <= $totalread) {
        __label__ = 37;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      if ($shortread != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 36:
      HEAP[$sizehint] = 0;
      __label__ = 37;
      break;
     case 37:
      
      
      if ($nfilled != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 38:
      
      
      var $167 = _PyString_FromStringAndSize($buffer, $nfilled);
      HEAP[$line] = $167;
      
      
      if (HEAP[$line] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      
      if (HEAP[$sizehint] > 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 40:
      
      var $173 = _Util_GetLine($self_addr, 0);
      $rest = $173;
      
      
      if ($rest == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 41:
      var $176 = HEAP[$line];
      
      
      var $179 = HEAP[$176] - 1;
      var $180 = $176;
      HEAP[$180] = $179;
      
      
      
      if (HEAP[$176] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 42:
      
      
      
      
      var $188 = HEAP[HEAP[HEAP[$line] + 4] + 24];
      var $189 = HEAP[$line];
      FUNCTION_TABLE[$188]($189);
      __label__ = 15;
      break;
     case 43:
      
      _PyString_Concat($line, $rest);
      
      
      
      var $194 = HEAP[$rest] - 1;
      
      
      HEAP[$rest] = $194;
      
      
      
      
      if (HEAP[$rest] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      var $205 = HEAP[HEAP[$rest + 4] + 24];
      
      FUNCTION_TABLE[$205]($rest);
      __label__ = 45;
      break;
     case 45:
      
      
      if (HEAP[$line] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 46:
      var $209 = HEAP[$line];
      
      var $211 = _PyList_Append($list, $209);
      $err = $211;
      var $212 = HEAP[$line];
      
      
      var $215 = HEAP[$212] - 1;
      var $216 = $212;
      HEAP[$216] = $215;
      
      
      
      if (HEAP[$212] == 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      
      
      
      
      var $224 = HEAP[HEAP[HEAP[$line] + 4] + 24];
      var $225 = HEAP[$line];
      FUNCTION_TABLE[$224]($225);
      __label__ = 48;
      break;
     case 48:
      
      
      if ($err != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 49:
      
      
      if (HEAP[$big_buffer] != 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 50:
      var $230 = HEAP[$big_buffer];
      
      
      var $233 = HEAP[$230] - 1;
      var $234 = $230;
      HEAP[$234] = $233;
      
      
      
      if (HEAP[$230] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      
      
      
      
      var $242 = HEAP[HEAP[HEAP[$big_buffer] + 4] + 24];
      var $243 = HEAP[$big_buffer];
      FUNCTION_TABLE[$242]($243);
      __label__ = 52;
      break;
     case 52:
      
      $0 = $list;
      __label__ = 53;
      break;
     case 53:
      
      $retval = $0;
      var $retval55 = $retval;
      STACKTOP = __stackBase__;
      return $retval55;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2File_write($self, $args) {
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
      var $ret;
      var $pbuf = __stackBase__;
      var $buf;
      var $len;
      var $bzerror = __stackBase__ + 52;
      $self_addr = $self;
      $args_addr = $args;
      $ret = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str19, allocate([ $pbuf, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 9;
      break;
     case 2:
      
      
      $buf = HEAP[$pbuf];
      
      
      $len = HEAP[$pbuf + 8];
      
      
      var $10 = HEAP[$self_addr + 44];
      if ($10 == 0) {
        __label__ = 4;
        break;
      } else if ($10 == 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      HEAP[$self_addr + 24] = 0;
      
      
      var $15 = HEAP[$self_addr + 40];
      
      
      _BZ2_bzWrite($bzerror, $15, $buf, $len);
      
      
      
      
      
      var $23 = $len + HEAP[$self_addr + 48];
      
      
      HEAP[$self_addr + 48] = $23;
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      var $28 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($28, __str14);
      __label__ = 8;
      break;
     case 5:
      var $29 = HEAP[_PyExc_IOError];
      _PyErr_SetString($29, __str20);
      __label__ = 8;
      break;
     case 6:
      var $30 = HEAP[$bzerror];
      _Util_CatchBZ2Error($30);
      __label__ = 8;
      break;
     case 7:
      
      var $32 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $32;
      $ret = __Py_NoneStruct;
      __label__ = 8;
      break;
     case 8:
      _PyBuffer_Release($pbuf);
      
      $0 = $ret;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval8 = $retval;
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2File_writelines($self, $seq) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $seq_addr;
      var $retval;
      var $0;
      var $list;
      var $iter;
      var $ret;
      var $line;
      var $i;
      var $j;
      var $index;
      var $len;
      var $islist;
      var $bzerror = __stackBase__;
      var $v;
      var $buffer = __stackBase__ + 4;
      var $len23 = __stackBase__ + 8;
      $self_addr = $self;
      $seq_addr = $seq;
      $list = 0;
      $iter = 0;
      $ret = 0;
      
      
      var $3 = HEAP[$self_addr + 44];
      if ($3 == 0) {
        __label__ = 2;
        break;
      } else if ($3 == 3) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      $islist = (HEAP[HEAP[$seq_addr + 4] + 84] & 33554432) != 0;
      
      
      if ($islist == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 2:
      var $14 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($14, __str14);
      __label__ = 39;
      break;
     case 3:
      var $15 = HEAP[_PyExc_IOError];
      _PyErr_SetString($15, __str20);
      __label__ = 39;
      break;
     case 4:
      
      var $17 = _PyObject_GetIter($seq_addr);
      $iter = $17;
      
      
      if ($iter == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $20 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($20, __str21);
      __label__ = 39;
      break;
     case 6:
      var $21 = _PyList_New(1e3);
      $list = $21;
      
      
      if ($list == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      $index = 0;
      __label__ = 8;
      break;
     case 8:
      
      
      if ($islist != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 9:
      
      
      if ($list != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      var $31 = HEAP[$list] - 1;
      
      
      HEAP[$list] = $31;
      
      
      
      
      if (HEAP[$list] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $42 = HEAP[HEAP[$list + 4] + 24];
      
      FUNCTION_TABLE[$42]($list);
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      var $48 = _PyList_GetSlice($seq_addr, $index, $index + 1e3);
      $list = $48;
      
      if ($48 == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $53 = HEAP[$list + 8];
      $j = $53;
      __lastLabel__ = 13;
      __label__ = 20;
      break;
     case 14:
      $j = 0;
      __lastLabel__ = 14;
      __label__ = 18;
      break;
     case 15:
      
      var $55 = _PyIter_Next($iter);
      $line = $55;
      
      
      if ($line == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $58 = _PyErr_Occurred();
      
      if ($58 != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      var $63 = _PyList_SetItem($list, $j, $line);
      
      var $65 = $j + 1;
      $j = $65;
      __lastLabel__ = 17;
      __label__ = 18;
      break;
     case 18:
      var $66 = __lastLabel__ == 17 ? $65 : 0;
      
      if ($66 <= 999) {
        __label__ = 15;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      var $_pr = $j;
      __lastLabel__ = 19;
      __label__ = 20;
      break;
     case 20:
      var $68 = __lastLabel__ == 19 ? $_pr : $53;
      
      if ($68 == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      $i = 0;
      __label__ = 30;
      break;
     case 22:
      
      
      
      
      
      
      
      $v = HEAP[HEAP[$list + 12] + 4 * $i];
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v + 4] + 84] & 134217728) == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 23:
      
      var $85 = _PyObject_AsCharBuffer($v, $buffer, $len23);
      
      if ($85 != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      var $87 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($87, __str22);
      __label__ = 39;
      break;
     case 25:
      var $88 = HEAP[$len23];
      var $89 = HEAP[$buffer];
      var $90 = _PyString_FromStringAndSize($89, $88);
      $line = $90;
      
      
      if ($line == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      var $96 = HEAP[$v] - 1;
      
      
      HEAP[$v] = $96;
      
      
      
      
      if (HEAP[$v] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $107 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$107]($v);
      __label__ = 28;
      break;
     case 28:
      
      
      
      
      
      var $114 = HEAP[$list + 12] + 4 * $i;
      
      HEAP[$114] = $line;
      __label__ = 29;
      break;
     case 29:
      
      var $117 = $i + 1;
      $i = $117;
      __label__ = 30;
      break;
     case 30:
      
      
      
      if ($i < $j) {
        __label__ = 22;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      HEAP[$self_addr + 24] = 0;
      $i = 0;
      __label__ = 35;
      break;
     case 32:
      
      
      
      
      
      
      
      $line = HEAP[HEAP[$list + 12] + 4 * $i];
      
      
      
      
      $len = HEAP[$line + 8];
      
      
      
      
      
      
      var $140 = HEAP[$self_addr + 40];
      
      _BZ2_bzWrite($bzerror, $140, $line + 20, $len);
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      var $144 = HEAP[$bzerror];
      _Util_CatchBZ2Error($144);
      __label__ = 39;
      break;
     case 34:
      
      var $146 = $i + 1;
      $i = $146;
      __label__ = 35;
      break;
     case 35:
      
      
      
      if ($i < $j) {
        __label__ = 32;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      if ($j <= 999) {
        __label__ = 38;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      var $153 = $index + 1e3;
      $index = $153;
      __label__ = 8;
      break;
     case 38:
      
      var $155 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $155;
      $ret = __Py_NoneStruct;
      __label__ = 39;
      break;
     case 39:
      
      
      if ($list != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 40:
      
      
      
      var $160 = HEAP[$list] - 1;
      
      
      HEAP[$list] = $160;
      
      
      
      
      if (HEAP[$list] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $171 = HEAP[HEAP[$list + 4] + 24];
      
      FUNCTION_TABLE[$171]($list);
      __label__ = 42;
      break;
     case 42:
      
      
      if ($iter != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 43:
      
      
      
      var $178 = HEAP[$iter] - 1;
      
      
      HEAP[$iter] = $178;
      
      
      
      
      if (HEAP[$iter] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      var $189 = HEAP[HEAP[$iter + 4] + 24];
      
      FUNCTION_TABLE[$189]($iter);
      __label__ = 45;
      break;
     case 45:
      
      $0 = $ret;
      
      $retval = $0;
      var $retval45 = $retval;
      STACKTOP = __stackBase__;
      return $retval45;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2File_seek($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8204;
    _memset(__stackBase__, 0, 8204);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $iftmp_139;
      var $0;
      var $where = __stackBase__;
      var $offobj = __stackBase__ + 4;
      var $offset;
      var $small_buffer = __stackBase__ + 8;
      var $buffer;
      var $buffersize;
      var $bytesread;
      var $readsize;
      var $chunksize;
      var $bzerror = __stackBase__ + 8200;
      var $ret;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$where] = 0;
      
      $buffer = $small_buffer;
      $buffersize = 8192;
      $bytesread = 0;
      $ret = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str23, allocate([ $offobj, 0, 0, 0, $where, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 47;
      break;
     case 2:
      
      
      
      
      
      
      
      var $11 = HEAP[$offobj];
      if ((HEAP[HEAP[HEAP[$offobj] + 4] + 84] & 16777216) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $12 = _PyLong_AsLongLong($11);
      $iftmp_139 = $12;
      __label__ = 5;
      break;
     case 4:
      var $13 = _PyInt_AsLong($11);
      
      $iftmp_139 = $13;
      __label__ = 5;
      break;
     case 5:
      
      $offset = $iftmp_139;
      var $16 = _PyErr_Occurred();
      
      if ($16 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 47;
      break;
     case 7:
      
      _Util_DropReadAhead($self_addr);
      
      
      var $21 = HEAP[$self_addr + 44];
      if ($21 == 0) {
        __label__ = 9;
        break;
      } else if ($21 == 1) {
        __label__ = 8;
        break;
      } else if ($21 == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      if (HEAP[$where] == 2) {
        __label__ = 11;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 9:
      var $24 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($24, __str14);
      __label__ = 46;
      break;
     case 10:
      var $25 = HEAP[_PyExc_IOError];
      _PyErr_SetString($25, __str24);
      __label__ = 46;
      break;
     case 11:
      
      
      
      var $29 = HEAP[$self_addr + 56] == -1;
      if ($29) {
        __label__ = 12;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 12:
      
      
      
      
      if (HEAP[$self_addr + 44] == 2) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      ___assert_fail(__str25, __str9, 1068, ___PRETTY_FUNCTION___9317);
      throw "Reached an unreachable!";
     case 14:
      
      
      var $36 = HEAP[$self_addr + 40];
      
      
      
      var $40 = _Util_UnivNewlineRead($bzerror, $36, $buffer, $buffersize, $self_addr);
      $chunksize = $40;
      
      
      
      
      
      var $46 = $chunksize + HEAP[$self_addr + 48];
      
      
      HEAP[$self_addr + 48] = $46;
      
      
      
      var $52 = $chunksize + $bytesread;
      $bytesread = $52;
      
      
      if (HEAP[$bzerror] == 4) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 16:
      var $57 = HEAP[$bzerror];
      _Util_CatchBZ2Error($57);
      __label__ = 46;
      break;
     case 17:
      
      
      HEAP[$self_addr + 44] = 2;
      
      
      var $62 = HEAP[$self_addr + 48];
      
      
      HEAP[$self_addr + 56] = $62;
      $bytesread = 0;
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      var $69 = $offset + HEAP[$self_addr + 56];
      $offset = $69;
      __label__ = 21;
      break;
     case 19:
      
      
      if (HEAP[$where] == 1) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $76 = $offset + HEAP[$self_addr + 48];
      $offset = $76;
      __label__ = 21;
      break;
     case 21:
      
      
      
      
      
      var $82 = $self_addr;
      if (HEAP[$self_addr + 48] <= $offset) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      var $86 = $offset - HEAP[$82 + 48];
      $offset = $86;
      __lastLabel__ = 22;
      __label__ = 35;
      break;
     case 23:
      
      var $88 = HEAP[$82 + 40];
      _BZ2_bzReadClose($bzerror, $88);
      
      
      
      
      if (HEAP[$self_addr + 40] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      var $96 = HEAP[$self_addr + 8];
      _PyFile_DecUseCount($96);
      
      
      HEAP[$self_addr + 40] = 0;
      __label__ = 25;
      break;
     case 25:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      var $101 = HEAP[$bzerror];
      _Util_CatchBZ2Error($101);
      __label__ = 46;
      break;
     case 27:
      
      
      var $104 = HEAP[$self_addr + 8];
      var $105 = _PyObject_CallMethod($104, __str26, __str27, allocate(4, "i32", ALLOC_STACK));
      $ret = $105;
      
      
      if ($ret == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      var $111 = HEAP[$ret] - 1;
      
      
      HEAP[$ret] = $111;
      
      
      
      
      if (HEAP[$ret] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $122 = HEAP[HEAP[$ret + 4] + 24];
      
      FUNCTION_TABLE[$122]($ret);
      __label__ = 30;
      break;
     case 30:
      $ret = 0;
      
      
      HEAP[$self_addr + 48] = 0;
      
      
      var $128 = HEAP[$self_addr + 8];
      var $129 = _PyFile_AsFile($128);
      var $130 = _BZ2_bzReadOpen($bzerror, $129, 0, 0, 0, 0);
      
      
      HEAP[$self_addr + 40] = $130;
      
      
      
      
      if (HEAP[$self_addr + 40] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      var $140 = HEAP[$self_addr + 8];
      _PyFile_IncUseCount($140);
      __label__ = 32;
      break;
     case 32:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      var $143 = HEAP[$bzerror];
      _Util_CatchBZ2Error($143);
      __label__ = 46;
      break;
     case 34:
      
      
      HEAP[$self_addr + 44] = 1;
      var $_pr = $offset;
      __lastLabel__ = 34;
      __label__ = 35;
      break;
     case 35:
      var $146 = __lastLabel__ == 34 ? $_pr : $86;
      
      if ($146 <= 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      
      
      if (HEAP[$self_addr + 44] == 2) {
        __label__ = 45;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      
      
      
      
      if ($offset - $bytesread > $buffersize) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      $readsize = $buffersize;
      __label__ = 40;
      break;
     case 39:
      
      
      
      
      
      $readsize = ($offset & 4294967295) - ($bytesread & 4294967295);
      __label__ = 40;
      break;
     case 40:
      
      
      var $166 = HEAP[$self_addr + 40];
      
      
      
      var $170 = _Util_UnivNewlineRead($bzerror, $166, $buffer, $readsize, $self_addr);
      $chunksize = $170;
      
      
      
      
      
      var $176 = $chunksize + HEAP[$self_addr + 48];
      
      
      HEAP[$self_addr + 48] = $176;
      
      
      
      var $182 = $chunksize + $bytesread;
      $bytesread = $182;
      
      
      if (HEAP[$bzerror] == 4) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      var $187 = HEAP[$self_addr + 48];
      
      
      HEAP[$self_addr + 56] = $187;
      
      
      HEAP[$self_addr + 44] = 2;
      __label__ = 45;
      break;
     case 42:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      var $194 = HEAP[$bzerror];
      _Util_CatchBZ2Error($194);
      __label__ = 46;
      break;
     case 44:
      
      
      
      if ($bytesread == $offset) {
        __label__ = 45;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 45:
      
      var $199 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $199;
      $ret = __Py_NoneStruct;
      __label__ = 46;
      break;
     case 46:
      
      $0 = $ret;
      __label__ = 47;
      break;
     case 47:
      
      $retval = $0;
      var $retval48 = $retval;
      STACKTOP = __stackBase__;
      return $retval48;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2File_tell($self, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $ret;
      $self_addr = $self;
      $args_addr = $args;
      $ret = 0;
      
      
      
      
      if (HEAP[$self_addr + 44] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str14);
      __label__ = 3;
      break;
     case 2:
      
      
      var $8 = HEAP[$self_addr + 48];
      var $9 = _PyLong_FromLongLong($8);
      $ret = $9;
      __label__ = 3;
      break;
     case 3:
      
      $0 = $ret;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2File_close($self) {
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
      var $ret;
      var $bzerror = __stackBase__;
      $self_addr = $self;
      $ret = 0;
      HEAP[$bzerror] = 0;
      
      
      var $3 = HEAP[$self_addr + 44];
      if ($3 == 1) {
        __label__ = 1;
        break;
      } else if ($3 == 2) {
        __label__ = 1;
        break;
      } else if ($3 == 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[$self_addr + 40];
      _BZ2_bzReadClose($bzerror, $6);
      __label__ = 3;
      break;
     case 2:
      
      
      var $9 = HEAP[$self_addr + 40];
      _BZ2_bzWriteClose($bzerror, $9, 0, 0, 0);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$self_addr + 40] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      var $17 = HEAP[$self_addr + 8];
      _PyFile_DecUseCount($17);
      
      
      HEAP[$self_addr + 40] = 0;
      __label__ = 5;
      break;
     case 5:
      
      
      HEAP[$self_addr + 44] = 0;
      
      
      var $24 = HEAP[$self_addr + 8];
      var $25 = _PyObject_CallMethod($24, __str28, 0, allocate(1, "i32", ALLOC_STACK));
      $ret = $25;
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      var $28 = HEAP[$bzerror];
      _Util_CatchBZ2Error($28);
      
      
      if ($ret != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      var $34 = HEAP[$ret] - 1;
      
      
      HEAP[$ret] = $34;
      
      
      
      
      if (HEAP[$ret] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $45 = HEAP[HEAP[$ret + 4] + 24];
      
      FUNCTION_TABLE[$45]($ret);
      __label__ = 9;
      break;
     case 9:
      $ret = 0;
      __label__ = 10;
      break;
     case 10:
      
      $0 = $ret;
      
      $retval = $0;
      var $retval10 = $retval;
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2File_enter($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 44] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str14);
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      var $10 = HEAP[$self_addr] + 1;
      
      HEAP[$self_addr] = $10;
      
      
      $0 = $self_addr;
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
  function _BZ2File_exit($self, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $ret;
      $self_addr = $self;
      $args_addr = $args;
      
      
      var $3 = _PyObject_CallMethod($self_addr, __str28, 0, allocate(1, "i32", ALLOC_STACK));
      $ret = $3;
      
      
      if ($ret == 0) {
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
      
      
      
      var $9 = HEAP[$ret] - 1;
      
      
      HEAP[$ret] = $9;
      
      
      
      
      if (HEAP[$ret] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $20 = HEAP[HEAP[$ret + 4] + 24];
      
      FUNCTION_TABLE[$20]($ret);
      __label__ = 4;
      break;
     case 4:
      
      var $23 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $23;
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
  function _BZ2File_get_newlines($self, $closure) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $closure_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $closure_addr = $closure;
      
      
      var $3 = HEAP[$self_addr + 32];
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else if ($3 == 1) {
        __label__ = 2;
        break;
      } else if ($3 == 2) {
        __label__ = 3;
        break;
      } else if ($3 == 3) {
        __label__ = 4;
        break;
      } else if ($3 == 4) {
        __label__ = 5;
        break;
      } else if ($3 == 5) {
        __label__ = 6;
        break;
      } else if ($3 == 6) {
        __label__ = 7;
        break;
      } else if ($3 == 7) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      
      var $5 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $5;
      $0 = __Py_NoneStruct;
      __label__ = 10;
      break;
     case 2:
      var $6 = _PyString_FromString(__str38);
      $0 = $6;
      __label__ = 10;
      break;
     case 3:
      var $7 = _PyString_FromString(__str39);
      $0 = $7;
      __label__ = 10;
      break;
     case 4:
      var $8 = _Py_BuildValue(__str40, allocate([ __str38, 0, 0, 0, __str39, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $8;
      __label__ = 10;
      break;
     case 5:
      var $9 = _PyString_FromString(__str41);
      $0 = $9;
      __label__ = 10;
      break;
     case 6:
      var $10 = _Py_BuildValue(__str40, allocate([ __str38, 0, 0, 0, __str41, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $10;
      __label__ = 10;
      break;
     case 7:
      var $11 = _Py_BuildValue(__str40, allocate([ __str39, 0, 0, 0, __str41, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $11;
      __label__ = 10;
      break;
     case 8:
      var $12 = _Py_BuildValue(__str42, allocate([ __str38, 0, 0, 0, __str39, 0, 0, 0, __str41, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $12;
      __label__ = 10;
      break;
     case 9:
      
      
      var $15 = HEAP[$self_addr + 32];
      var $16 = HEAP[_PyExc_SystemError];
      var $17 = _PyErr_Format($16, __str43, allocate([ $15, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
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
  function _BZ2File_get_closed($self, $closure) {
    
    var $self_addr;
    var $closure_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $closure_addr = $closure;
    
    
    
    
    var $5 = HEAP[$self_addr + 44] == 0;
    var $6 = _PyInt_FromLong($5);
    $0 = $6;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _BZ2File_get_mode($self, $closure) {
    
    var $self_addr;
    var $closure_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $closure_addr = $closure;
    
    
    var $3 = HEAP[$self_addr + 8];
    var $4 = _PyObject_GetAttrString($3, __str44);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _BZ2File_get_name($self, $closure) {
    
    var $self_addr;
    var $closure_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $closure_addr = $closure;
    
    
    var $3 = HEAP[$self_addr + 8];
    var $4 = _PyObject_GetAttrString($3, __str45);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _BZ2File_init($self, $args, $kwargs) {
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
      var $kwargs_addr;
      var $retval;
      var $iftmp_181;
      var $iftmp_173;
      var $0;
      var $name = __stackBase__;
      var $mode = __stackBase__ + 4;
      var $buffering = __stackBase__ + 8;
      var $compresslevel = __stackBase__ + 12;
      var $bzerror = __stackBase__ + 16;
      var $mode_char;
      var $error;
      var $_py_tmp;
      $self_addr = $self;
      $args_addr = $args;
      $kwargs_addr = $kwargs;
      HEAP[$mode] = __str54;
      HEAP[$buffering] = -1;
      HEAP[$compresslevel] = 9;
      $mode_char = 0;
      
      
      HEAP[$self_addr + 56] = -1;
      
      
      var $5 = _PyArg_ParseTupleAndKeywords($args_addr, $kwargs_addr, __str55, _kwlist_9585, allocate([ $name, 0, 0, 0, $mode, 0, 0, 0, $buffering, 0, 0, 0, $compresslevel, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 32;
      break;
     case 2:
      
      
      
      
      
      if (HEAP[$compresslevel] <= 0 | HEAP[$compresslevel] > 9) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($11, __str59);
      $0 = -1;
      __label__ = 32;
      break;
     case 4:
      $error = 0;
      
      
      var $14 = HEAP[HEAP[$mode]];
      if ($14 == 85) {
        __label__ = 9;
        break;
      } else if ($14 == 98) {
        __label__ = 5;
        break;
      } else if ($14 == 114) {
        __label__ = 6;
        break;
      } else if ($14 == 119) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 5:
      var $15 = HEAP[$mode];
      __lastLabel__ = 5;
      __label__ = 13;
      break;
     case 6:
      
      
      if ($mode_char != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $error = 1;
      __label__ = 8;
      break;
     case 8:
      
      
      
      $mode_char = HEAP[HEAP[$mode]];
      __label__ = 11;
      break;
     case 9:
      
      
      HEAP[$self_addr + 28] = 1;
      __label__ = 11;
      break;
     case 10:
      $error = 1;
      var $23 = HEAP[$mode];
      __lastLabel__ = 10;
      __label__ = 12;
      break;
     case 11:
      
      
      var $25 = HEAP[$mode];
      if ($error != 0) {
        __lastLabel__ = 11;
        __label__ = 12;
        break;
      } else {
        __lastLabel__ = 11;
        __label__ = 13;
        break;
      }
     case 12:
      var $26 = __lastLabel__ == 10 ? $23 : $25;
      
      var $28 = HEAP[$26];
      var $29 = HEAP[_PyExc_ValueError];
      var $30 = _PyErr_Format($29, __str60, allocate([ $28, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
      __label__ = 32;
      break;
     case 13:
      var $31 = __lastLabel__ == 5 ? $15 : $25;
      var $32 = $31 + 1;
      HEAP[$mode] = $32;
      
      
      
      if (HEAP[HEAP[$mode]] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 14:
      var $36 = $mode_char;
      if ($36 == 0) {
        __label__ = 15;
        break;
      } else if ($36 == 114) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      $mode_char = 114;
      __label__ = 16;
      break;
     case 16:
      $iftmp_173 = __str61;
      __label__ = 18;
      break;
     case 17:
      $iftmp_173 = __str62;
      __label__ = 18;
      break;
     case 18:
      
      HEAP[$mode] = $iftmp_173;
      var $38 = HEAP[$buffering];
      var $39 = HEAP[$mode];
      var $40 = HEAP[$name];
      var $41 = _PyObject_CallFunction(_PyFile_Type, __str63, allocate([ $40, 0, 0, 0, $39, 0, 0, 0, $38, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      
      
      HEAP[$self_addr + 8] = $41;
      
      
      
      
      if (HEAP[$self_addr + 8] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      $0 = -1;
      __label__ = 32;
      break;
     case 20:
      
      
      if ($mode_char == 114) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      var $52 = HEAP[$self_addr + 8];
      var $53 = _PyFile_AsFile($52);
      var $54 = _BZ2_bzReadOpen($bzerror, $53, 0, 0, 0, 0);
      
      
      HEAP[$self_addr + 40] = $54;
      __label__ = 23;
      break;
     case 22:
      var $57 = HEAP[$compresslevel];
      
      
      var $60 = HEAP[$self_addr + 8];
      var $61 = _PyFile_AsFile($60);
      var $62 = _BZ2_bzWriteOpen($bzerror, $61, $57, 0, 0);
      
      
      HEAP[$self_addr + 40] = $62;
      __label__ = 23;
      break;
     case 23:
      
      
      if (HEAP[$bzerror] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      var $67 = HEAP[$bzerror];
      _Util_CatchBZ2Error($67);
      
      
      
      
      if (HEAP[$self_addr + 8] != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 25:
      
      
      
      var $75 = HEAP[$self_addr + 8];
      _PyFile_IncUseCount($75);
      
      
      if ($mode_char == 114) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      $iftmp_181 = 1;
      __label__ = 28;
      break;
     case 27:
      $iftmp_181 = 3;
      __label__ = 28;
      break;
     case 28:
      
      
      
      HEAP[$self_addr + 44] = $iftmp_181;
      $0 = 0;
      __label__ = 32;
      break;
     case 29:
      
      
      
      $_py_tmp = HEAP[$self_addr + 8];
      
      
      HEAP[$self_addr + 8] = 0;
      
      
      
      var $89 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $89;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $100 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$100]($_py_tmp);
      __label__ = 31;
      break;
     case 31:
      $0 = -1;
      __label__ = 32;
      break;
     case 32:
      
      $retval = $0;
      var $retval36 = $retval;
      STACKTOP = __stackBase__;
      return $retval36;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2File_dealloc($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $bzerror = __stackBase__;
      $self_addr = $self;
      
      
      var $2 = HEAP[$self_addr + 44];
      if ($2 == 1) {
        __label__ = 1;
        break;
      } else if ($2 == 2) {
        __label__ = 1;
        break;
      } else if ($2 == 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $5 = HEAP[$self_addr + 40];
      _BZ2_bzReadClose($bzerror, $5);
      __label__ = 3;
      break;
     case 2:
      
      
      var $8 = HEAP[$self_addr + 40];
      _BZ2_bzWriteClose($bzerror, $8, 0, 0, 0);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$self_addr + 40] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      var $16 = HEAP[$self_addr + 8];
      _PyFile_DecUseCount($16);
      
      
      HEAP[$self_addr + 40] = 0;
      __label__ = 5;
      break;
     case 5:
      
      _Util_DropReadAhead($self_addr);
      
      
      
      
      if (HEAP[$self_addr + 8] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $26 = HEAP[$self_addr + 8];
      
      
      var $29 = HEAP[$26] - 1;
      var $30 = $26;
      HEAP[$30] = $29;
      
      
      
      if (HEAP[$26] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $40 = HEAP[HEAP[HEAP[$self_addr + 8] + 4] + 24];
      
      
      var $43 = HEAP[$self_addr + 8];
      FUNCTION_TABLE[$40]($43);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      var $49 = HEAP[HEAP[$self_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$49]($self_addr);
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2File_getiter($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 44] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str14);
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      var $10 = HEAP[$self_addr] + 1;
      
      HEAP[$self_addr] = $10;
      
      
      $0 = $self_addr;
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
  function _BZ2File_iternext($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $ret;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 44] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str14);
      $0 = 0;
      __label__ = 9;
      break;
     case 2:
      
      var $7 = _Util_ReadAheadGetLineSkip($self_addr, 0, 8192);
      $ret = $7;
      
      
      if ($ret == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $10 = $ret;
      
      
      
      
      if (HEAP[$10 + 8] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      if ($10 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      
      var $20 = HEAP[$ret] - 1;
      
      HEAP[$ret] = $20;
      
      
      
      if (HEAP[$ret] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      var $30 = HEAP[HEAP[$ret + 4] + 24];
      
      
      FUNCTION_TABLE[$30]($ret);
      __label__ = 7;
      break;
     case 7:
      $0 = 0;
      __label__ = 9;
      break;
     case 8:
      
      
      $0 = $ret;
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
  function _BZ2Comp_compress($self, $args) {
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
      var $pdata = __stackBase__;
      var $data;
      var $datasize;
      var $bufsize;
      var $totalout;
      var $ret = __stackBase__ + 52;
      var $bzs;
      var $bzerror;
      $self_addr = $self;
      $args_addr = $args;
      $bufsize = 8192;
      HEAP[$ret] = 0;
      
      
      $bzs = $self_addr + 8;
      
      var $4 = _PyArg_ParseTuple($args_addr, __str65, allocate([ $pdata, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($4 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 20;
      break;
     case 2:
      
      
      $data = HEAP[$pdata];
      
      
      $datasize = HEAP[$pdata + 8];
      
      
      if ($datasize == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyBuffer_Release($pdata);
      var $12 = _PyString_FromString(__str13);
      $0 = $12;
      __label__ = 20;
      break;
     case 4:
      
      
      
      
      if (HEAP[$self_addr + 56] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $17 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($17, __str66);
      __label__ = 16;
      break;
     case 6:
      
      var $19 = _PyString_FromStringAndSize(0, $bufsize);
      HEAP[$ret] = $19;
      
      
      if (HEAP[$ret] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      HEAP[$bzs] = $data;
      
      
      
      HEAP[$bzs + 4] = $datasize;
      
      
      
      var $31 = HEAP[$ret] + 20;
      
      
      HEAP[$bzs + 16] = $31;
      
      
      
      HEAP[$bzs + 20] = $bufsize;
      
      
      
      
      
      
      
      
      
      
      $totalout = HEAP[$bzs + 24] + HEAP[$bzs + 28] * 4294967296;
      __label__ = 8;
      break;
     case 8:
      
      var $48 = _BZ2_bzCompress($bzs, 0);
      $bzerror = $48;
      
      if ($48 != 1) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      _Util_CatchBZ2Error($bzerror);
      __label__ = 16;
      break;
     case 10:
      
      
      
      
      var $55 = $bzs;
      if (HEAP[$bzs + 4] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      if (HEAP[$55 + 20] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 12:
      
      var $60 = _Util_NewBufferSize($bufsize);
      $bufsize = $60;
      
      var $62 = __PyString_Resize($ret, $bufsize);
      
      if ($62 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      var $65 = _BZ2_bzCompressEnd($bzs);
      __label__ = 16;
      break;
     case 14:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $83 = HEAP[$ret] + 20 + (0 - $totalout + HEAP[$bzs + 28] * 4294967296 + HEAP[$bzs + 24] & 4294967295);
      
      
      HEAP[$bzs + 16] = $83;
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $95 = $bufsize + (0 - HEAP[$bzs + 16]) + (0 - (0 - (HEAP[$ret] + 20)));
      
      
      HEAP[$bzs + 20] = $95;
      __label__ = 8;
      break;
     case 15:
      
      
      
      
      var $102 = HEAP[$55 + 24] - ($totalout & 4294967295);
      var $103 = __PyString_Resize($ret, $102);
      _PyBuffer_Release($pdata);
      
      $0 = HEAP[$ret];
      __label__ = 20;
      break;
     case 16:
      _PyBuffer_Release($pdata);
      
      
      if (HEAP[$ret] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      var $107 = HEAP[$ret];
      
      
      var $110 = HEAP[$107] - 1;
      var $111 = $107;
      HEAP[$111] = $110;
      
      
      
      if (HEAP[$107] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $119 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $120 = HEAP[$ret];
      FUNCTION_TABLE[$119]($120);
      __label__ = 19;
      break;
     case 19:
      $0 = 0;
      __label__ = 20;
      break;
     case 20:
      
      $retval = $0;
      var $retval20 = $retval;
      STACKTOP = __stackBase__;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2Comp_flush($self) {
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
      var $bufsize;
      var $ret = __stackBase__;
      var $bzs;
      var $totalout;
      var $bzerror;
      $self_addr = $self;
      $bufsize = 8192;
      HEAP[$ret] = 0;
      
      
      $bzs = $self_addr + 8;
      
      
      
      
      if (HEAP[$self_addr + 56] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($7, __str67);
      __label__ = 13;
      break;
     case 2:
      
      
      HEAP[$self_addr + 56] = 0;
      
      var $11 = _PyString_FromStringAndSize(0, $bufsize);
      HEAP[$ret] = $11;
      
      
      if (HEAP[$ret] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $17 = HEAP[$ret] + 20;
      
      
      HEAP[$bzs + 16] = $17;
      
      
      
      HEAP[$bzs + 20] = $bufsize;
      
      
      
      
      
      
      
      
      
      
      $totalout = HEAP[$bzs + 24] + HEAP[$bzs + 28] * 4294967296;
      __label__ = 4;
      break;
     case 4:
      
      var $34 = _BZ2_bzCompress($bzs, 2);
      $bzerror = $34;
      
      if ($34 == 4) {
        __label__ = 10;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      if ($bzerror != 3) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      _Util_CatchBZ2Error($bzerror);
      __label__ = 13;
      break;
     case 7:
      
      
      
      
      if (HEAP[$bzs + 20] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 8:
      
      var $44 = _Util_NewBufferSize($bufsize);
      $bufsize = $44;
      
      var $46 = __PyString_Resize($ret, $bufsize);
      
      if ($46 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      var $51 = HEAP[$ret] + 20;
      
      
      HEAP[$bzs + 16] = $51;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $71 = HEAP[$ret] + 20 + (0 - $totalout + HEAP[$bzs + 28] * 4294967296 + HEAP[$bzs + 24] & 4294967295);
      
      
      HEAP[$bzs + 16] = $71;
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $83 = $bufsize + (0 - HEAP[$bzs + 16]) + (0 - (0 - (HEAP[$ret] + 20)));
      
      
      HEAP[$bzs + 20] = $83;
      __label__ = 4;
      break;
     case 10:
      
      
      
      
      if (HEAP[$bzs + 20] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      var $95 = HEAP[$bzs + 24] - ($totalout & 4294967295);
      var $96 = __PyString_Resize($ret, $95);
      __label__ = 12;
      break;
     case 12:
      
      $0 = HEAP[$ret];
      __label__ = 17;
      break;
     case 13:
      
      
      if (HEAP[$ret] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      var $99 = HEAP[$ret];
      
      
      var $102 = HEAP[$99] - 1;
      var $103 = $99;
      HEAP[$103] = $102;
      
      
      
      if (HEAP[$99] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $111 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $112 = HEAP[$ret];
      FUNCTION_TABLE[$111]($112);
      __label__ = 16;
      break;
     case 16:
      $0 = 0;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval17 = $retval;
      STACKTOP = __stackBase__;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2Comp_init($self, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwargs_addr;
      var $retval;
      var $0;
      var $compresslevel = __stackBase__;
      var $bzerror;
      $self_addr = $self;
      $args_addr = $args;
      $kwargs_addr = $kwargs;
      HEAP[$compresslevel] = 9;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwargs_addr, __str70, _kwlist_9935, allocate([ $compresslevel, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 8;
      break;
     case 2:
      
      
      
      
      
      if (HEAP[$compresslevel] <= 0 | HEAP[$compresslevel] > 9) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($9, __str59);
      __label__ = 7;
      break;
     case 4:
      
      
      
      _llvm_memset_p0i8_i32($self_addr + 8, 0, 48, 1, 0);
      var $13 = HEAP[$compresslevel];
      
      
      var $16 = _BZ2_bzCompressInit($self_addr + 8, $13, 0, 0);
      $bzerror = $16;
      
      
      if ($bzerror != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      _Util_CatchBZ2Error($bzerror);
      __label__ = 7;
      break;
     case 6:
      
      
      HEAP[$self_addr + 56] = 1;
      $0 = 0;
      __label__ = 8;
      break;
     case 7:
      $0 = -1;
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
  function _BZ2Comp_dealloc($self) {
    
    var $self_addr;
    $self_addr = $self;
    
    
    var $2 = _BZ2_bzCompressEnd($self_addr + 8);
    
    
    
    
    
    var $8 = HEAP[HEAP[$self_addr + 4] + 160];
    
    
    FUNCTION_TABLE[$8]($self_addr);
    return;
  }
  function _BZ2Decomp_decompress($self, $args) {
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
      var $pdata = __stackBase__;
      var $data;
      var $datasize;
      var $bufsize;
      var $totalout;
      var $ret = __stackBase__ + 52;
      var $bzs;
      var $bzerror;
      $self_addr = $self;
      $args_addr = $args;
      $bufsize = 8192;
      HEAP[$ret] = 0;
      
      
      $bzs = $self_addr + 8;
      
      var $4 = _PyArg_ParseTuple($args_addr, __str73, allocate([ $pdata, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($4 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 26;
      break;
     case 2:
      
      
      $data = HEAP[$pdata];
      
      
      $datasize = HEAP[$pdata + 8];
      
      
      
      
      if (HEAP[$self_addr + 56] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $14 = HEAP[_PyExc_EOFError];
      _PyErr_SetString($14, __str74);
      __label__ = 22;
      break;
     case 4:
      
      var $16 = _PyString_FromStringAndSize(0, $bufsize);
      HEAP[$ret] = $16;
      
      
      if (HEAP[$ret] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      HEAP[$bzs] = $data;
      
      
      
      HEAP[$bzs + 4] = $datasize;
      
      
      
      var $28 = HEAP[$ret] + 20;
      
      
      HEAP[$bzs + 16] = $28;
      
      
      
      HEAP[$bzs + 20] = $bufsize;
      
      
      
      
      
      
      
      
      
      
      $totalout = HEAP[$bzs + 24] + HEAP[$bzs + 28] * 4294967296;
      __label__ = 6;
      break;
     case 6:
      
      var $45 = _BZ2_bzDecompress($bzs);
      $bzerror = $45;
      
      if ($45 == 4) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[$bzs + 4] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      var $53 = HEAP[$self_addr + 60];
      
      
      var $56 = HEAP[$53] - 1;
      var $57 = $53;
      HEAP[$57] = $56;
      
      
      
      if (HEAP[$53] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[$self_addr + 60] + 4] + 24];
      
      
      var $70 = HEAP[$self_addr + 60];
      FUNCTION_TABLE[$67]($70);
      __label__ = 10;
      break;
     case 10:
      
      
      var $73 = HEAP[$bzs + 4];
      
      
      var $76 = HEAP[$bzs];
      var $77 = _PyString_FromStringAndSize($76, $73);
      
      
      HEAP[$self_addr + 60] = $77;
      __label__ = 11;
      break;
     case 11:
      
      
      HEAP[$self_addr + 56] = 0;
      __label__ = 19;
      break;
     case 12:
      
      
      if ($bzerror != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      _Util_CatchBZ2Error($bzerror);
      __label__ = 22;
      break;
     case 14:
      
      
      
      
      if (HEAP[$bzs + 4] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      if (HEAP[$bzs + 20] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 16:
      
      var $94 = _Util_NewBufferSize($bufsize);
      $bufsize = $94;
      
      var $96 = __PyString_Resize($ret, $bufsize);
      
      if ($96 < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      var $99 = _BZ2_bzDecompressEnd($bzs);
      __label__ = 22;
      break;
     case 18:
      
      
      
      var $103 = HEAP[$ret] + 20;
      
      
      HEAP[$bzs + 16] = $103;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $123 = HEAP[$ret] + 20 + (0 - $totalout + HEAP[$bzs + 28] * 4294967296 + HEAP[$bzs + 24] & 4294967295);
      
      
      HEAP[$bzs + 16] = $123;
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $135 = $bufsize + (0 - HEAP[$bzs + 16]) + (0 - (0 - (HEAP[$ret] + 20)));
      
      
      HEAP[$bzs + 20] = $135;
      __label__ = 6;
      break;
     case 19:
      
      
      
      
      if (HEAP[$bzs + 20] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      
      var $147 = HEAP[$bzs + 24] - ($totalout & 4294967295);
      var $148 = __PyString_Resize($ret, $147);
      __label__ = 21;
      break;
     case 21:
      _PyBuffer_Release($pdata);
      
      $0 = HEAP[$ret];
      __label__ = 26;
      break;
     case 22:
      _PyBuffer_Release($pdata);
      
      
      if (HEAP[$ret] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 23:
      var $152 = HEAP[$ret];
      
      
      var $155 = HEAP[$152] - 1;
      var $156 = $152;
      HEAP[$156] = $155;
      
      
      
      if (HEAP[$152] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $164 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $165 = HEAP[$ret];
      FUNCTION_TABLE[$164]($165);
      __label__ = 25;
      break;
     case 25:
      $0 = 0;
      __label__ = 26;
      break;
     case 26:
      
      $retval = $0;
      var $retval26 = $retval;
      STACKTOP = __stackBase__;
      return $retval26;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2Decomp_init($self, $args, $kwargs) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwargs_addr;
      var $retval;
      var $0;
      var $bzerror;
      var $_py_tmp;
      $self_addr = $self;
      $args_addr = $args;
      $kwargs_addr = $kwargs;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str76, allocate(1, "i32", ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 10;
      break;
     case 2:
      var $4 = _PyString_FromString(__str13);
      
      
      HEAP[$self_addr + 60] = $4;
      
      
      
      
      if (HEAP[$self_addr + 60] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      _llvm_memset_p0i8_i32($self_addr + 8, 0, 48, 1, 0);
      
      
      var $16 = _BZ2_bzDecompressInit($self_addr + 8, 0, 0);
      $bzerror = $16;
      
      
      if ($bzerror != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      _Util_CatchBZ2Error($bzerror);
      __label__ = 6;
      break;
     case 5:
      
      
      HEAP[$self_addr + 56] = 1;
      $0 = 0;
      __label__ = 10;
      break;
     case 6:
      
      
      
      
      if (HEAP[$self_addr + 60] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      $_py_tmp = HEAP[$self_addr + 60];
      
      
      HEAP[$self_addr + 60] = 0;
      
      
      
      var $34 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $34;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $45 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$45]($_py_tmp);
      __label__ = 9;
      break;
     case 9:
      $0 = -1;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _BZ2Decomp_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 60] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[$self_addr + 60];
      
      
      var $9 = HEAP[$6] - 1;
      var $10 = $6;
      HEAP[$10] = $9;
      
      
      
      if (HEAP[$6] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[$self_addr + 60] + 4] + 24];
      
      
      var $23 = HEAP[$self_addr + 60];
      FUNCTION_TABLE[$20]($23);
      __label__ = 3;
      break;
     case 3:
      
      
      var $26 = _BZ2_bzDecompressEnd($self_addr + 8);
      
      
      
      
      
      var $32 = HEAP[HEAP[$self_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$32]($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _bz2_compress($self, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 108;
    _memset(__stackBase__, 0, 108);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwargs_addr;
      var $retval;
      var $0;
      var $compresslevel = __stackBase__;
      var $pdata = __stackBase__ + 4;
      var $data;
      var $datasize;
      var $bufsize;
      var $ret = __stackBase__ + 56;
      var $_bzs = __stackBase__ + 60;
      var $bzs;
      var $bzerror;
      $self_addr = $self;
      $args_addr = $args;
      $kwargs_addr = $kwargs;
      HEAP[$compresslevel] = 9;
      HEAP[$ret] = 0;
      $bzs = $_bzs;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwargs_addr, __str78, _kwlist_10147, allocate([ $pdata, 0, 0, 0, $compresslevel, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      
      $data = HEAP[$pdata];
      
      
      $datasize = HEAP[$pdata + 8];
      
      
      
      
      
      if (HEAP[$compresslevel] <= 0 | HEAP[$compresslevel] > 9) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $13 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($13, __str59);
      _PyBuffer_Release($pdata);
      $0 = 0;
      __label__ = 24;
      break;
     case 4:
      
      
      
      
      
      $bufsize = ($datasize / 100 | 0) + 601 + $datasize;
      
      var $20 = _PyString_FromStringAndSize(0, $bufsize);
      HEAP[$ret] = $20;
      
      
      if (HEAP[$ret] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($pdata);
      $0 = 0;
      __label__ = 24;
      break;
     case 6:
      
      
      _llvm_memset_p0i8_i32($bzs, 0, 48, 1, 0);
      
      
      
      HEAP[$bzs] = $data;
      
      
      
      HEAP[$bzs + 4] = $datasize;
      
      
      
      var $34 = HEAP[$ret] + 20;
      
      
      HEAP[$bzs + 16] = $34;
      
      
      
      HEAP[$bzs + 20] = $bufsize;
      var $40 = HEAP[$compresslevel];
      
      var $42 = _BZ2_bzCompressInit($bzs, $40, 0, 0);
      $bzerror = $42;
      
      
      if ($bzerror != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      _Util_CatchBZ2Error($bzerror);
      _PyBuffer_Release($pdata);
      var $46 = HEAP[$ret];
      
      
      var $49 = HEAP[$46] - 1;
      var $50 = $46;
      HEAP[$50] = $49;
      
      
      
      if (HEAP[$46] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $58 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $59 = HEAP[$ret];
      FUNCTION_TABLE[$58]($59);
      __label__ = 9;
      break;
     case 9:
      $0 = 0;
      __label__ = 24;
      break;
     case 10:
      
      var $61 = _BZ2_bzCompress($bzs, 2);
      $bzerror = $61;
      
      if ($61 == 4) {
        __label__ = 21;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $65 = $bzs;
      if ($bzerror != 3) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      var $66 = _BZ2_bzCompressEnd($65);
      
      _Util_CatchBZ2Error($bzerror);
      _PyBuffer_Release($pdata);
      var $68 = HEAP[$ret];
      
      
      var $71 = HEAP[$68] - 1;
      var $72 = $68;
      HEAP[$72] = $71;
      
      
      
      if (HEAP[$68] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $80 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $81 = HEAP[$ret];
      FUNCTION_TABLE[$80]($81);
      __label__ = 14;
      break;
     case 14:
      $0 = 0;
      __label__ = 24;
      break;
     case 15:
      
      
      
      if (HEAP[$65 + 20] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 16:
      
      var $86 = _Util_NewBufferSize($bufsize);
      $bufsize = $86;
      
      var $88 = __PyString_Resize($ret, $bufsize);
      
      if ($88 < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      
      var $91 = _BZ2_bzCompressEnd($bzs);
      _PyBuffer_Release($pdata);
      var $92 = HEAP[$ret];
      
      
      var $95 = HEAP[$92] - 1;
      var $96 = $92;
      HEAP[$96] = $95;
      
      
      
      if (HEAP[$92] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $104 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $105 = HEAP[$ret];
      FUNCTION_TABLE[$104]($105);
      __label__ = 19;
      break;
     case 19:
      $0 = 0;
      __label__ = 24;
      break;
     case 20:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $121 = HEAP[$ret] + 20 + (HEAP[$bzs + 24] + HEAP[$bzs + 28] * 4294967296 & 4294967295);
      
      
      HEAP[$bzs + 16] = $121;
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $133 = $bufsize + (0 - HEAP[$bzs + 16]) + (0 - (0 - (HEAP[$ret] + 20)));
      
      
      HEAP[$bzs + 20] = $133;
      __label__ = 10;
      break;
     case 21:
      
      
      
      
      if (HEAP[$bzs + 20] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      var $142 = HEAP[$bzs + 24];
      var $143 = __PyString_Resize($ret, $142);
      __label__ = 23;
      break;
     case 23:
      
      var $145 = _BZ2_bzCompressEnd($bzs);
      _PyBuffer_Release($pdata);
      
      $0 = HEAP[$ret];
      __label__ = 24;
      break;
     case 24:
      
      $retval = $0;
      var $retval26 = $retval;
      STACKTOP = __stackBase__;
      return $retval26;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _bz2_decompress($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 104;
    _memset(__stackBase__, 0, 104);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $pdata = __stackBase__;
      var $data;
      var $datasize;
      var $bufsize;
      var $ret = __stackBase__ + 52;
      var $_bzs = __stackBase__ + 56;
      var $bzs;
      var $bzerror;
      $self_addr = $self;
      $args_addr = $args;
      $bufsize = 8192;
      $bzs = $_bzs;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str73, allocate([ $pdata, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 28;
      break;
     case 2:
      
      
      $data = HEAP[$pdata];
      
      
      $datasize = HEAP[$pdata + 8];
      
      
      if ($datasize == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyBuffer_Release($pdata);
      var $10 = _PyString_FromString(__str13);
      $0 = $10;
      __label__ = 28;
      break;
     case 4:
      
      var $12 = _PyString_FromStringAndSize(0, $bufsize);
      HEAP[$ret] = $12;
      
      
      if (HEAP[$ret] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($pdata);
      $0 = 0;
      __label__ = 28;
      break;
     case 6:
      
      
      _llvm_memset_p0i8_i32($bzs, 0, 48, 1, 0);
      
      
      
      HEAP[$bzs] = $data;
      
      
      
      HEAP[$bzs + 4] = $datasize;
      
      
      
      var $26 = HEAP[$ret] + 20;
      
      
      HEAP[$bzs + 16] = $26;
      
      
      
      HEAP[$bzs + 20] = $bufsize;
      
      var $33 = _BZ2_bzDecompressInit($bzs, 0, 0);
      $bzerror = $33;
      
      
      if ($bzerror != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      _Util_CatchBZ2Error($bzerror);
      var $37 = HEAP[$ret];
      
      
      var $40 = HEAP[$37] - 1;
      var $41 = $37;
      HEAP[$41] = $40;
      
      
      
      if (HEAP[$37] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $49 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $50 = HEAP[$ret];
      FUNCTION_TABLE[$49]($50);
      __label__ = 9;
      break;
     case 9:
      _PyBuffer_Release($pdata);
      $0 = 0;
      __label__ = 28;
      break;
     case 10:
      
      var $52 = _BZ2_bzDecompress($bzs);
      $bzerror = $52;
      
      if ($52 == 4) {
        __label__ = 25;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $56 = $bzs;
      if ($bzerror != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      var $57 = _BZ2_bzDecompressEnd($56);
      
      _Util_CatchBZ2Error($bzerror);
      _PyBuffer_Release($pdata);
      var $59 = HEAP[$ret];
      
      
      var $62 = HEAP[$59] - 1;
      var $63 = $59;
      HEAP[$63] = $62;
      
      
      
      if (HEAP[$59] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $71 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $72 = HEAP[$ret];
      FUNCTION_TABLE[$71]($72);
      __label__ = 14;
      break;
     case 14:
      $0 = 0;
      __label__ = 28;
      break;
     case 15:
      
      
      
      var $76 = $bzs;
      if (HEAP[$56 + 4] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      var $77 = _BZ2_bzDecompressEnd($76);
      var $78 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($78, __str80);
      _PyBuffer_Release($pdata);
      var $79 = HEAP[$ret];
      
      
      var $82 = HEAP[$79] - 1;
      var $83 = $79;
      HEAP[$83] = $82;
      
      
      
      if (HEAP[$79] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $91 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $92 = HEAP[$ret];
      FUNCTION_TABLE[$91]($92);
      __label__ = 18;
      break;
     case 18:
      $0 = 0;
      __label__ = 28;
      break;
     case 19:
      
      
      
      if (HEAP[$76 + 20] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 20:
      
      var $97 = _Util_NewBufferSize($bufsize);
      $bufsize = $97;
      
      var $99 = __PyString_Resize($ret, $bufsize);
      
      if ($99 < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 21:
      
      var $102 = _BZ2_bzDecompressEnd($bzs);
      _PyBuffer_Release($pdata);
      var $103 = HEAP[$ret];
      
      
      var $106 = HEAP[$103] - 1;
      var $107 = $103;
      HEAP[$107] = $106;
      
      
      
      if (HEAP[$103] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $115 = HEAP[HEAP[HEAP[$ret] + 4] + 24];
      var $116 = HEAP[$ret];
      FUNCTION_TABLE[$115]($116);
      __label__ = 23;
      break;
     case 23:
      $0 = 0;
      __label__ = 28;
      break;
     case 24:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $132 = HEAP[$ret] + 20 + (HEAP[$bzs + 24] + HEAP[$bzs + 28] * 4294967296 & 4294967295);
      
      
      HEAP[$bzs + 16] = $132;
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $144 = $bufsize + (0 - HEAP[$bzs + 16]) + (0 - (0 - (HEAP[$ret] + 20)));
      
      
      HEAP[$bzs + 20] = $144;
      __label__ = 10;
      break;
     case 25:
      
      
      
      
      if (HEAP[$bzs + 20] != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      var $153 = HEAP[$bzs + 24];
      var $154 = __PyString_Resize($ret, $153);
      __label__ = 27;
      break;
     case 27:
      
      var $156 = _BZ2_bzDecompressEnd($bzs);
      _PyBuffer_Release($pdata);
      
      $0 = HEAP[$ret];
      __label__ = 28;
      break;
     case 28:
      
      $retval = $0;
      var $retval29 = $retval;
      STACKTOP = __stackBase__;
      return $retval29;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initbz2() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $0 = _PyType_Ready(_BZ2File_Type);
      
      if ($0 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $2 = _PyType_Ready(_BZ2Comp_Type);
      
      if ($2 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $4 = _PyType_Ready(_BZ2Decomp_Type);
      
      if ($4 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $6 = _Py_InitModule4(__str81, _bz2_methods, _bz2__doc__, 0, 1013);
      $m = $6;
      
      
      if ($m == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $9 = _PyString_FromString(___author__);
      
      var $11 = _PyModule_AddObject($m, __str82, $9);
      
      var $13 = HEAP[_BZ2File_Type] + 1;
      HEAP[_BZ2File_Type] = $13;
      
      var $15 = _PyModule_AddObject($m, __str83, _BZ2File_Type);
      
      var $17 = HEAP[_BZ2Comp_Type] + 1;
      HEAP[_BZ2Comp_Type] = $17;
      
      var $19 = _PyModule_AddObject($m, __str84, _BZ2Comp_Type);
      
      var $21 = HEAP[_BZ2Decomp_Type] + 1;
      HEAP[_BZ2Decomp_Type] = $21;
      
      var $23 = _PyModule_AddObject($m, __str85, _BZ2Decomp_Type);
      __label__ = 5;
      break;
     case 5:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initbz2"] = _initbz2;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _BZ2File_read, 0, _BZ2File_readline, 0, _BZ2File_readlines, 0, _BZ2File_getiter, 0, _BZ2File_write, 0, _BZ2File_writelines, 0, _BZ2File_seek, 0, _BZ2File_tell, 0, _BZ2File_close, 0, _BZ2File_enter, 0, _BZ2File_exit, 0, _BZ2File_get_closed, 0, _BZ2File_get_newlines, 0, _BZ2File_get_mode, 0, _BZ2File_get_name, 0, _BZ2File_dealloc, 0, _PyObject_GenericGetAttr, 0, _PyObject_GenericSetAttr, 0, _BZ2File_iternext, 0, _BZ2File_init, 0, _PyType_GenericAlloc, 0, _PyType_GenericNew, 0, _PyObject_Free, 0, _BZ2Comp_compress, 0, _BZ2Comp_flush, 0, _BZ2Comp_dealloc, 0, _BZ2Comp_init, 0, _BZ2Decomp_decompress, 0, _BZ2Decomp_dealloc, 0, _BZ2Decomp_init, 0, _bz2_compress, 0, _bz2_decompress, 0 ]);
  function run(args) {
    ___author__ = allocate([ 84, 104, 101, 32, 98, 122, 50, 32, 112, 121, 116, 104, 111, 110, 32, 109, 111, 100, 117, 108, 101, 32, 119, 97, 115, 32, 119, 114, 105, 116, 116, 101, 110, 32, 98, 121, 58, 10, 10, 32, 32, 32, 32, 71, 117, 115, 116, 97, 118, 111, 32, 78, 105, 101, 109, 101, 121, 101, 114, 32, 60, 110, 105, 101, 109, 101, 121, 101, 114, 64, 99, 111, 110, 101, 99, 116, 105, 118, 97, 46, 99, 111, 109, 62, 10, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 77, 105, 120, 105, 110, 103, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 32, 97, 110, 100, 32, 114, 101, 97, 100, 32, 109, 101, 116, 104, 111, 100, 115, 32, 119, 111, 117, 108, 100, 32, 108, 111, 115, 101, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 116, 104, 101, 32, 98, 122, 50, 32, 108, 105, 98, 114, 97, 114, 121, 32, 119, 97, 115, 32, 110, 111, 116, 32, 99, 111, 109, 112, 105, 108, 101, 100, 32, 99, 111, 114, 114, 101, 99, 116, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 116, 104, 101, 32, 98, 122, 50, 32, 108, 105, 98, 114, 97, 114, 121, 32, 104, 97, 115, 32, 114, 101, 99, 101, 105, 118, 101, 100, 32, 119, 114, 111, 110, 103, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 100, 97, 116, 97, 32, 115, 116, 114, 101, 97, 109, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 117, 110, 107, 110, 111, 119, 110, 32, 73, 79, 32, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 102, 105, 108, 101, 32, 101, 110, 100, 101, 100, 32, 98, 101, 102, 111, 114, 101, 32, 116, 104, 101, 32, 108, 111, 103, 105, 99, 97, 108, 32, 101, 110, 100, 45, 111, 102, 45, 115, 116, 114, 101, 97, 109, 32, 119, 97, 115, 32, 100, 101, 116, 101, 99, 116, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 119, 114, 111, 110, 103, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 102, 32, 98, 122, 50, 32, 108, 105, 98, 114, 97, 114, 121, 32, 99, 111, 109, 109, 97, 110, 100, 115, 32, 117, 115, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 108, 105, 110, 101, 32, 105, 115, 32, 108, 111, 110, 103, 101, 114, 32, 116, 104, 97, 110, 32, 97, 32, 80, 121, 116, 104, 111, 110, 32, 115, 116, 114, 105, 110, 103, 32, 99, 97, 110, 32, 104, 111, 108, 100, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 98, 117, 102, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 98, 122, 50, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8675 = allocate([ 85, 116, 105, 108, 95, 85, 110, 105, 118, 78, 101, 119, 108, 105, 110, 101, 82, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 115, 116, 114, 101, 97, 109, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 110, 114, 101, 97, 100, 32, 60, 61, 32, 110, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_read__doc__ = allocate([ 114, 101, 97, 100, 40, 91, 115, 105, 122, 101, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 97, 100, 32, 97, 116, 32, 109, 111, 115, 116, 32, 115, 105, 122, 101, 32, 117, 110, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 98, 121, 116, 101, 115, 44, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 46, 32, 73, 102, 32, 116, 104, 101, 32, 115, 105, 122, 101, 10, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 32, 110, 101, 103, 97, 116, 105, 118, 101, 32, 111, 114, 32, 111, 109, 105, 116, 116, 101, 100, 44, 32, 114, 101, 97, 100, 32, 117, 110, 116, 105, 108, 32, 69, 79, 70, 32, 105, 115, 32, 114, 101, 97, 99, 104, 101, 100, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 124, 108, 58, 114, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate(1, "i8", ALLOC_NORMAL);
    __str14 = allocate([ 73, 47, 79, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 32, 111, 110, 32, 99, 108, 111, 115, 101, 100, 32, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 102, 105, 108, 101, 32, 105, 115, 32, 110, 111, 116, 32, 114, 101, 97, 100, 121, 32, 102, 111, 114, 32, 114, 101, 97, 100, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 114, 101, 113, 117, 101, 115, 116, 101, 100, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 98, 121, 116, 101, 115, 32, 105, 115, 32, 109, 111, 114, 101, 32, 116, 104, 97, 110, 32, 97, 32, 80, 121, 116, 104, 111, 110, 32, 115, 116, 114, 105, 110, 103, 32, 99, 97, 110, 32, 104, 111, 108, 100, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_readline__doc__ = allocate([ 114, 101, 97, 100, 108, 105, 110, 101, 40, 91, 115, 105, 122, 101, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 110, 101, 120, 116, 32, 108, 105, 110, 101, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 102, 105, 108, 101, 44, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 44, 32, 114, 101, 116, 97, 105, 110, 105, 110, 103, 32, 110, 101, 119, 108, 105, 110, 101, 46, 10, 65, 32, 110, 111, 110, 45, 110, 101, 103, 97, 116, 105, 118, 101, 32, 115, 105, 122, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 119, 105, 108, 108, 32, 108, 105, 109, 105, 116, 32, 116, 104, 101, 32, 109, 97, 120, 105, 109, 117, 109, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 98, 121, 116, 101, 115, 32, 116, 111, 10, 114, 101, 116, 117, 114, 110, 32, 40, 97, 110, 32, 105, 110, 99, 111, 109, 112, 108, 101, 116, 101, 32, 108, 105, 110, 101, 32, 109, 97, 121, 32, 98, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 116, 104, 101, 110, 41, 46, 32, 82, 101, 116, 117, 114, 110, 32, 97, 110, 32, 101, 109, 112, 116, 121, 10, 115, 116, 114, 105, 110, 103, 32, 97, 116, 32, 69, 79, 70, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 124, 105, 58, 114, 101, 97, 100, 108, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_readlines__doc__ = allocate([ 114, 101, 97, 100, 108, 105, 110, 101, 115, 40, 91, 115, 105, 122, 101, 93, 41, 32, 45, 62, 32, 108, 105, 115, 116, 10, 10, 67, 97, 108, 108, 32, 114, 101, 97, 100, 108, 105, 110, 101, 40, 41, 32, 114, 101, 112, 101, 97, 116, 101, 100, 108, 121, 32, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 32, 97, 32, 108, 105, 115, 116, 32, 111, 102, 32, 108, 105, 110, 101, 115, 32, 114, 101, 97, 100, 46, 10, 84, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 115, 105, 122, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 44, 32, 105, 102, 32, 103, 105, 118, 101, 110, 44, 32, 105, 115, 32, 97, 110, 32, 97, 112, 112, 114, 111, 120, 105, 109, 97, 116, 101, 32, 98, 111, 117, 110, 100, 32, 111, 110, 32, 116, 104, 101, 10, 116, 111, 116, 97, 108, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 98, 121, 116, 101, 115, 32, 105, 110, 32, 116, 104, 101, 32, 108, 105, 110, 101, 115, 32, 114, 101, 116, 117, 114, 110, 101, 100, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 124, 108, 58, 114, 101, 97, 100, 108, 105, 110, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_xreadlines__doc__ = allocate([ 120, 114, 101, 97, 100, 108, 105, 110, 101, 115, 40, 41, 32, 45, 62, 32, 115, 101, 108, 102, 10, 10, 70, 111, 114, 32, 98, 97, 99, 107, 119, 97, 114, 100, 32, 99, 111, 109, 112, 97, 116, 105, 98, 105, 108, 105, 116, 121, 46, 32, 66, 90, 50, 70, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 115, 32, 110, 111, 119, 32, 105, 110, 99, 108, 117, 100, 101, 32, 116, 104, 101, 32, 112, 101, 114, 102, 111, 114, 109, 97, 110, 99, 101, 10, 111, 112, 116, 105, 109, 105, 122, 97, 116, 105, 111, 110, 115, 32, 112, 114, 101, 118, 105, 111, 117, 115, 108, 121, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 101, 100, 32, 105, 110, 32, 116, 104, 101, 32, 120, 114, 101, 97, 100, 108, 105, 110, 101, 115, 32, 109, 111, 100, 117, 108, 101, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_write__doc__ = allocate([ 119, 114, 105, 116, 101, 40, 100, 97, 116, 97, 41, 32, 45, 62, 32, 78, 111, 110, 101, 10, 10, 87, 114, 105, 116, 101, 32, 116, 104, 101, 32, 39, 100, 97, 116, 97, 39, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 102, 105, 108, 101, 46, 32, 78, 111, 116, 101, 32, 116, 104, 97, 116, 32, 100, 117, 101, 32, 116, 111, 32, 98, 117, 102, 102, 101, 114, 105, 110, 103, 44, 32, 99, 108, 111, 115, 101, 40, 41, 32, 109, 97, 121, 10, 98, 101, 32, 110, 101, 101, 100, 101, 100, 32, 98, 101, 102, 111, 114, 101, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 111, 110, 32, 100, 105, 115, 107, 32, 114, 101, 102, 108, 101, 99, 116, 115, 32, 116, 104, 101, 32, 100, 97, 116, 97, 32, 119, 114, 105, 116, 116, 101, 110, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 115, 42, 58, 119, 114, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 102, 105, 108, 101, 32, 105, 115, 32, 110, 111, 116, 32, 114, 101, 97, 100, 121, 32, 102, 111, 114, 32, 119, 114, 105, 116, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_writelines__doc__ = allocate([ 119, 114, 105, 116, 101, 108, 105, 110, 101, 115, 40, 115, 101, 113, 117, 101, 110, 99, 101, 95, 111, 102, 95, 115, 116, 114, 105, 110, 103, 115, 41, 32, 45, 62, 32, 78, 111, 110, 101, 10, 10, 87, 114, 105, 116, 101, 32, 116, 104, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 102, 32, 115, 116, 114, 105, 110, 103, 115, 32, 116, 111, 32, 116, 104, 101, 32, 102, 105, 108, 101, 46, 32, 78, 111, 116, 101, 32, 116, 104, 97, 116, 32, 110, 101, 119, 108, 105, 110, 101, 115, 32, 97, 114, 101, 32, 110, 111, 116, 10, 97, 100, 100, 101, 100, 46, 32, 84, 104, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 99, 97, 110, 32, 98, 101, 32, 97, 110, 121, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 111, 98, 106, 101, 99, 116, 32, 112, 114, 111, 100, 117, 99, 105, 110, 103, 32, 115, 116, 114, 105, 110, 103, 115, 46, 32, 84, 104, 105, 115, 32, 105, 115, 10, 101, 113, 117, 105, 118, 97, 108, 101, 110, 116, 32, 116, 111, 32, 99, 97, 108, 108, 105, 110, 103, 32, 119, 114, 105, 116, 101, 40, 41, 32, 102, 111, 114, 32, 101, 97, 99, 104, 32, 115, 116, 114, 105, 110, 103, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 119, 114, 105, 116, 101, 108, 105, 110, 101, 115, 40, 41, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 110, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 119, 114, 105, 116, 101, 108, 105, 110, 101, 115, 40, 41, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 102, 32, 115, 116, 114, 105, 110, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_seek__doc__ = allocate([ 115, 101, 101, 107, 40, 111, 102, 102, 115, 101, 116, 32, 91, 44, 32, 119, 104, 101, 110, 99, 101, 93, 41, 32, 45, 62, 32, 78, 111, 110, 101, 10, 10, 77, 111, 118, 101, 32, 116, 111, 32, 110, 101, 119, 32, 102, 105, 108, 101, 32, 112, 111, 115, 105, 116, 105, 111, 110, 46, 32, 65, 114, 103, 117, 109, 101, 110, 116, 32, 111, 102, 102, 115, 101, 116, 32, 105, 115, 32, 97, 32, 98, 121, 116, 101, 32, 99, 111, 117, 110, 116, 46, 32, 79, 112, 116, 105, 111, 110, 97, 108, 10, 97, 114, 103, 117, 109, 101, 110, 116, 32, 119, 104, 101, 110, 99, 101, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 48, 32, 40, 111, 102, 102, 115, 101, 116, 32, 102, 114, 111, 109, 32, 115, 116, 97, 114, 116, 32, 111, 102, 32, 102, 105, 108, 101, 44, 32, 111, 102, 102, 115, 101, 116, 10, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 62, 61, 32, 48, 41, 59, 32, 111, 116, 104, 101, 114, 32, 118, 97, 108, 117, 101, 115, 32, 97, 114, 101, 32, 49, 32, 40, 109, 111, 118, 101, 32, 114, 101, 108, 97, 116, 105, 118, 101, 32, 116, 111, 32, 99, 117, 114, 114, 101, 110, 116, 32, 112, 111, 115, 105, 116, 105, 111, 110, 44, 10, 112, 111, 115, 105, 116, 105, 118, 101, 32, 111, 114, 32, 110, 101, 103, 97, 116, 105, 118, 101, 41, 44, 32, 97, 110, 100, 32, 50, 32, 40, 109, 111, 118, 101, 32, 114, 101, 108, 97, 116, 105, 118, 101, 32, 116, 111, 32, 101, 110, 100, 32, 111, 102, 32, 102, 105, 108, 101, 44, 32, 117, 115, 117, 97, 108, 108, 121, 10, 110, 101, 103, 97, 116, 105, 118, 101, 44, 32, 97, 108, 116, 104, 111, 117, 103, 104, 32, 109, 97, 110, 121, 32, 112, 108, 97, 116, 102, 111, 114, 109, 115, 32, 97, 108, 108, 111, 119, 32, 115, 101, 101, 107, 105, 110, 103, 32, 98, 101, 121, 111, 110, 100, 32, 116, 104, 101, 32, 101, 110, 100, 32, 111, 102, 32, 97, 32, 102, 105, 108, 101, 41, 46, 10, 10, 78, 111, 116, 101, 32, 116, 104, 97, 116, 32, 115, 101, 101, 107, 105, 110, 103, 32, 111, 102, 32, 98, 122, 50, 32, 102, 105, 108, 101, 115, 32, 105, 115, 32, 101, 109, 117, 108, 97, 116, 101, 100, 44, 32, 97, 110, 100, 32, 100, 101, 112, 101, 110, 100, 105, 110, 103, 32, 111, 110, 32, 116, 104, 101, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 10, 116, 104, 101, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 32, 109, 97, 121, 32, 98, 101, 32, 101, 120, 116, 114, 101, 109, 101, 108, 121, 32, 115, 108, 111, 119, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 79, 124, 105, 58, 115, 101, 101, 107, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 115, 101, 101, 107, 32, 119, 111, 114, 107, 115, 32, 111, 110, 108, 121, 32, 119, 104, 105, 108, 101, 32, 114, 101, 97, 100, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 115, 101, 108, 102, 45, 62, 109, 111, 100, 101, 32, 33, 61, 32, 50, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9317 = allocate([ 66, 90, 50, 70, 105, 108, 101, 95, 115, 101, 101, 107, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 115, 101, 101, 107, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 40, 105, 41, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_tell__doc__ = allocate([ 116, 101, 108, 108, 40, 41, 32, 45, 62, 32, 105, 110, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 102, 105, 108, 101, 32, 112, 111, 115, 105, 116, 105, 111, 110, 44, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 32, 40, 109, 97, 121, 32, 98, 101, 32, 97, 32, 108, 111, 110, 103, 32, 105, 110, 116, 101, 103, 101, 114, 41, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_close__doc__ = allocate([ 99, 108, 111, 115, 101, 40, 41, 32, 45, 62, 32, 78, 111, 110, 101, 32, 111, 114, 32, 40, 112, 101, 114, 104, 97, 112, 115, 41, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 10, 10, 67, 108, 111, 115, 101, 32, 116, 104, 101, 32, 102, 105, 108, 101, 46, 32, 83, 101, 116, 115, 32, 100, 97, 116, 97, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 32, 46, 99, 108, 111, 115, 101, 100, 32, 116, 111, 32, 116, 114, 117, 101, 46, 32, 65, 32, 99, 108, 111, 115, 101, 100, 32, 102, 105, 108, 101, 10, 99, 97, 110, 110, 111, 116, 32, 98, 101, 32, 117, 115, 101, 100, 32, 102, 111, 114, 32, 102, 117, 114, 116, 104, 101, 114, 32, 73, 47, 79, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 115, 46, 32, 99, 108, 111, 115, 101, 40, 41, 32, 109, 97, 121, 32, 98, 101, 32, 99, 97, 108, 108, 101, 100, 32, 109, 111, 114, 101, 10, 116, 104, 97, 110, 32, 111, 110, 99, 101, 32, 119, 105, 116, 104, 111, 117, 116, 32, 101, 114, 114, 111, 114, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 99, 108, 111, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_enter_doc = allocate([ 95, 95, 101, 110, 116, 101, 114, 95, 95, 40, 41, 32, 45, 62, 32, 115, 101, 108, 102, 46, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_exit_doc = allocate([ 95, 95, 101, 120, 105, 116, 95, 95, 40, 42, 101, 120, 99, 105, 110, 102, 111, 41, 32, 45, 62, 32, 78, 111, 110, 101, 46, 32, 32, 67, 108, 111, 115, 101, 115, 32, 116, 104, 101, 32, 102, 105, 108, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 114, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 114, 101, 97, 100, 108, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 114, 101, 97, 100, 108, 105, 110, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 120, 114, 101, 97, 100, 108, 105, 110, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 119, 114, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 119, 114, 105, 116, 101, 108, 105, 110, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 116, 101, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 95, 95, 101, 110, 116, 101, 114, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 95, 95, 101, 120, 105, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str38 = allocate([ 13, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 10, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 40, 115, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 13, 10, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 40, 115, 115, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 85, 110, 107, 110, 111, 119, 110, 32, 110, 101, 119, 108, 105, 110, 101, 115, 32, 118, 97, 108, 117, 101, 32, 48, 120, 37, 120, 10, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 109, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 99, 108, 111, 115, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 84, 114, 117, 101, 32, 105, 102, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 105, 115, 32, 99, 108, 111, 115, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 110, 101, 119, 108, 105, 110, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 101, 110, 100, 45, 111, 102, 45, 108, 105, 110, 101, 32, 99, 111, 110, 118, 101, 110, 116, 105, 111, 110, 32, 117, 115, 101, 100, 32, 105, 110, 32, 116, 104, 105, 115, 32, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 102, 105, 108, 101, 32, 109, 111, 100, 101, 32, 40, 39, 114, 39, 44, 32, 39, 119, 39, 44, 32, 111, 114, 32, 39, 85, 39, 41, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 102, 105, 108, 101, 32, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_getset = allocate(100, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str52 = allocate([ 115, 111, 102, 116, 115, 112, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 102, 108, 97, 103, 32, 105, 110, 100, 105, 99, 97, 116, 105, 110, 103, 32, 116, 104, 97, 116, 32, 97, 32, 115, 112, 97, 99, 101, 32, 110, 101, 101, 100, 115, 32, 116, 111, 32, 98, 101, 32, 112, 114, 105, 110, 116, 101, 100, 59, 32, 117, 115, 101, 100, 32, 98, 121, 32, 112, 114, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_members = allocate([ 0, 0, 0, 0, 1, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str54 = allocate([ 114, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 79, 124, 115, 105, 105, 58, 66, 90, 50, 70, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9585 = allocate(20, "i8*", ALLOC_NORMAL);
    __str56 = allocate([ 102, 105, 108, 101, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 98, 117, 102, 102, 101, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 108, 101, 118, 101, 108, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 108, 101, 118, 101, 108, 32, 109, 117, 115, 116, 32, 98, 101, 32, 98, 101, 116, 119, 101, 101, 110, 32, 49, 32, 97, 110, 100, 32, 57, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 109, 111, 100, 101, 32, 99, 104, 97, 114, 32, 37, 99, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 114, 98, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 119, 98, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 40, 79, 115, 105, 41, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File__doc__ = allocate([ 66, 90, 50, 70, 105, 108, 101, 40, 110, 97, 109, 101, 32, 91, 44, 32, 109, 111, 100, 101, 61, 39, 114, 39, 44, 32, 98, 117, 102, 102, 101, 114, 105, 110, 103, 61, 48, 44, 32, 99, 111, 109, 112, 114, 101, 115, 115, 108, 101, 118, 101, 108, 61, 57, 93, 41, 32, 45, 62, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 10, 10, 79, 112, 101, 110, 32, 97, 32, 98, 122, 50, 32, 102, 105, 108, 101, 46, 32, 84, 104, 101, 32, 109, 111, 100, 101, 32, 99, 97, 110, 32, 98, 101, 32, 39, 114, 39, 32, 111, 114, 32, 39, 119, 39, 44, 32, 102, 111, 114, 32, 114, 101, 97, 100, 105, 110, 103, 32, 40, 100, 101, 102, 97, 117, 108, 116, 41, 32, 111, 114, 10, 119, 114, 105, 116, 105, 110, 103, 46, 32, 87, 104, 101, 110, 32, 111, 112, 101, 110, 101, 100, 32, 102, 111, 114, 32, 119, 114, 105, 116, 105, 110, 103, 44, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 119, 105, 108, 108, 32, 98, 101, 32, 99, 114, 101, 97, 116, 101, 100, 32, 105, 102, 32, 105, 116, 32, 100, 111, 101, 115, 110, 39, 116, 10, 101, 120, 105, 115, 116, 44, 32, 97, 110, 100, 32, 116, 114, 117, 110, 99, 97, 116, 101, 100, 32, 111, 116, 104, 101, 114, 119, 105, 115, 101, 46, 32, 73, 102, 32, 116, 104, 101, 32, 98, 117, 102, 102, 101, 114, 105, 110, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 32, 103, 105, 118, 101, 110, 44, 32, 48, 32, 109, 101, 97, 110, 115, 10, 117, 110, 98, 117, 102, 102, 101, 114, 101, 100, 44, 32, 97, 110, 100, 32, 108, 97, 114, 103, 101, 114, 32, 110, 117, 109, 98, 101, 114, 115, 32, 115, 112, 101, 99, 105, 102, 121, 32, 116, 104, 101, 32, 98, 117, 102, 102, 101, 114, 32, 115, 105, 122, 101, 46, 32, 73, 102, 32, 99, 111, 109, 112, 114, 101, 115, 115, 108, 101, 118, 101, 108, 10, 105, 115, 32, 103, 105, 118, 101, 110, 44, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 110, 117, 109, 98, 101, 114, 32, 98, 101, 116, 119, 101, 101, 110, 32, 49, 32, 97, 110, 100, 32, 57, 46, 10, 10, 65, 100, 100, 32, 97, 32, 39, 85, 39, 32, 116, 111, 32, 109, 111, 100, 101, 32, 116, 111, 32, 111, 112, 101, 110, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 102, 111, 114, 32, 105, 110, 112, 117, 116, 32, 119, 105, 116, 104, 32, 117, 110, 105, 118, 101, 114, 115, 97, 108, 32, 110, 101, 119, 108, 105, 110, 101, 10, 115, 117, 112, 112, 111, 114, 116, 46, 32, 65, 110, 121, 32, 108, 105, 110, 101, 32, 101, 110, 100, 105, 110, 103, 32, 105, 110, 32, 116, 104, 101, 32, 105, 110, 112, 117, 116, 32, 102, 105, 108, 101, 32, 119, 105, 108, 108, 32, 98, 101, 32, 115, 101, 101, 110, 32, 97, 115, 32, 97, 32, 39, 92, 110, 39, 32, 105, 110, 10, 80, 121, 116, 104, 111, 110, 46, 32, 65, 108, 115, 111, 44, 32, 97, 32, 102, 105, 108, 101, 32, 115, 111, 32, 111, 112, 101, 110, 101, 100, 32, 103, 97, 105, 110, 115, 32, 116, 104, 101, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 32, 39, 110, 101, 119, 108, 105, 110, 101, 115, 39, 59, 32, 116, 104, 101, 32, 118, 97, 108, 117, 101, 10, 102, 111, 114, 32, 116, 104, 105, 115, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 32, 105, 115, 32, 111, 110, 101, 32, 111, 102, 32, 78, 111, 110, 101, 32, 40, 110, 111, 32, 110, 101, 119, 108, 105, 110, 101, 32, 114, 101, 97, 100, 32, 121, 101, 116, 41, 44, 32, 39, 92, 114, 39, 44, 32, 39, 92, 110, 39, 44, 10, 39, 92, 114, 92, 110, 39, 32, 111, 114, 32, 97, 32, 116, 117, 112, 108, 101, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 97, 108, 108, 32, 116, 104, 101, 32, 110, 101, 119, 108, 105, 110, 101, 32, 116, 121, 112, 101, 115, 32, 115, 101, 101, 110, 46, 32, 85, 110, 105, 118, 101, 114, 115, 97, 108, 10, 110, 101, 119, 108, 105, 110, 101, 115, 32, 97, 114, 101, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 111, 110, 108, 121, 32, 119, 104, 101, 110, 32, 114, 101, 97, 100, 105, 110, 103, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 98, 122, 50, 46, 66, 90, 50, 70, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _BZ2File_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _BZ2Comp_compress__doc__ = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 40, 100, 97, 116, 97, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 80, 114, 111, 118, 105, 100, 101, 32, 109, 111, 114, 101, 32, 100, 97, 116, 97, 32, 116, 111, 32, 116, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 46, 32, 73, 116, 32, 119, 105, 108, 108, 32, 114, 101, 116, 117, 114, 110, 32, 99, 104, 117, 110, 107, 115, 32, 111, 102, 10, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 100, 97, 116, 97, 32, 119, 104, 101, 110, 101, 118, 101, 114, 32, 112, 111, 115, 115, 105, 98, 108, 101, 46, 32, 87, 104, 101, 110, 32, 121, 111, 117, 39, 118, 101, 32, 102, 105, 110, 105, 115, 104, 101, 100, 32, 112, 114, 111, 118, 105, 100, 105, 110, 103, 32, 100, 97, 116, 97, 10, 116, 111, 32, 99, 111, 109, 112, 114, 101, 115, 115, 44, 32, 99, 97, 108, 108, 32, 116, 104, 101, 32, 102, 108, 117, 115, 104, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 116, 111, 32, 102, 105, 110, 105, 115, 104, 32, 116, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 112, 114, 111, 99, 101, 115, 115, 44, 10, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 32, 119, 104, 97, 116, 32, 105, 115, 32, 108, 101, 102, 116, 32, 105, 110, 32, 116, 104, 101, 32, 105, 110, 116, 101, 114, 110, 97, 108, 32, 98, 117, 102, 102, 101, 114, 115, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 115, 42, 58, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 116, 104, 105, 115, 32, 111, 98, 106, 101, 99, 116, 32, 119, 97, 115, 32, 97, 108, 114, 101, 97, 100, 121, 32, 102, 108, 117, 115, 104, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    _BZ2Comp_flush__doc__ = allocate([ 102, 108, 117, 115, 104, 40, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 70, 105, 110, 105, 115, 104, 32, 116, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 112, 114, 111, 99, 101, 115, 115, 32, 97, 110, 100, 32, 114, 101, 116, 117, 114, 110, 32, 119, 104, 97, 116, 32, 105, 115, 32, 108, 101, 102, 116, 32, 105, 110, 32, 105, 110, 116, 101, 114, 110, 97, 108, 32, 98, 117, 102, 102, 101, 114, 115, 46, 10, 89, 111, 117, 32, 109, 117, 115, 116, 32, 110, 111, 116, 32, 117, 115, 101, 32, 116, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 32, 97, 102, 116, 101, 114, 32, 99, 97, 108, 108, 105, 110, 103, 32, 116, 104, 105, 115, 32, 109, 101, 116, 104, 111, 100, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 111, 98, 106, 101, 99, 116, 32, 119, 97, 115, 32, 97, 108, 114, 101, 97, 100, 121, 32, 102, 108, 117, 115, 104, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 102, 108, 117, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    _BZ2Comp_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str70 = allocate([ 124, 105, 58, 66, 90, 50, 67, 111, 109, 112, 114, 101, 115, 115, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9935 = allocate(8, "i8*", ALLOC_NORMAL);
    _BZ2Comp__doc__ = allocate([ 66, 90, 50, 67, 111, 109, 112, 114, 101, 115, 115, 111, 114, 40, 91, 99, 111, 109, 112, 114, 101, 115, 115, 108, 101, 118, 101, 108, 61, 57, 93, 41, 32, 45, 62, 32, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 10, 10, 67, 114, 101, 97, 116, 101, 32, 97, 32, 110, 101, 119, 32, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 46, 32, 84, 104, 105, 115, 32, 111, 98, 106, 101, 99, 116, 32, 109, 97, 121, 32, 98, 101, 32, 117, 115, 101, 100, 32, 116, 111, 32, 99, 111, 109, 112, 114, 101, 115, 115, 10, 100, 97, 116, 97, 32, 115, 101, 113, 117, 101, 110, 116, 105, 97, 108, 108, 121, 46, 32, 73, 102, 32, 121, 111, 117, 32, 119, 97, 110, 116, 32, 116, 111, 32, 99, 111, 109, 112, 114, 101, 115, 115, 32, 100, 97, 116, 97, 32, 105, 110, 32, 111, 110, 101, 32, 115, 104, 111, 116, 44, 32, 117, 115, 101, 32, 116, 104, 101, 10, 99, 111, 109, 112, 114, 101, 115, 115, 40, 41, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 110, 115, 116, 101, 97, 100, 46, 32, 84, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 108, 101, 118, 101, 108, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 44, 32, 105, 102, 32, 103, 105, 118, 101, 110, 44, 10, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 110, 117, 109, 98, 101, 114, 32, 98, 101, 116, 119, 101, 101, 110, 32, 49, 32, 97, 110, 100, 32, 57, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 98, 122, 50, 46, 66, 90, 50, 67, 111, 109, 112, 114, 101, 115, 115, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _BZ2Comp_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str72 = allocate([ 117, 110, 117, 115, 101, 100, 95, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    _BZ2Decomp_members = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 60, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _BZ2Decomp_decompress__doc__ = allocate([ 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 40, 100, 97, 116, 97, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 80, 114, 111, 118, 105, 100, 101, 32, 109, 111, 114, 101, 32, 100, 97, 116, 97, 32, 116, 111, 32, 116, 104, 101, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 46, 32, 73, 116, 32, 119, 105, 108, 108, 32, 114, 101, 116, 117, 114, 110, 32, 99, 104, 117, 110, 107, 115, 10, 111, 102, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 100, 97, 116, 97, 32, 119, 104, 101, 110, 101, 118, 101, 114, 32, 112, 111, 115, 115, 105, 98, 108, 101, 46, 32, 73, 102, 32, 121, 111, 117, 32, 116, 114, 121, 32, 116, 111, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 32, 100, 97, 116, 97, 10, 97, 102, 116, 101, 114, 32, 116, 104, 101, 32, 101, 110, 100, 32, 111, 102, 32, 115, 116, 114, 101, 97, 109, 32, 105, 115, 32, 102, 111, 117, 110, 100, 44, 32, 69, 79, 70, 69, 114, 114, 111, 114, 32, 119, 105, 108, 108, 32, 98, 101, 32, 114, 97, 105, 115, 101, 100, 46, 32, 73, 102, 32, 97, 110, 121, 32, 100, 97, 116, 97, 10, 119, 97, 115, 32, 102, 111, 117, 110, 100, 32, 97, 102, 116, 101, 114, 32, 116, 104, 101, 32, 101, 110, 100, 32, 111, 102, 32, 115, 116, 114, 101, 97, 109, 44, 32, 105, 116, 39, 108, 108, 32, 98, 101, 32, 105, 103, 110, 111, 114, 101, 100, 32, 97, 110, 100, 32, 115, 97, 118, 101, 100, 32, 105, 110, 10, 117, 110, 117, 115, 101, 100, 95, 100, 97, 116, 97, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 115, 42, 58, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 101, 110, 100, 32, 111, 102, 32, 115, 116, 114, 101, 97, 109, 32, 119, 97, 115, 32, 97, 108, 114, 101, 97, 100, 121, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    _BZ2Decomp_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str76 = allocate([ 58, 66, 90, 50, 68, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _BZ2Decomp__doc__ = allocate([ 66, 90, 50, 68, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 40, 41, 32, 45, 62, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 10, 10, 67, 114, 101, 97, 116, 101, 32, 97, 32, 110, 101, 119, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 111, 98, 106, 101, 99, 116, 46, 32, 84, 104, 105, 115, 32, 111, 98, 106, 101, 99, 116, 32, 109, 97, 121, 32, 98, 101, 32, 117, 115, 101, 100, 32, 116, 111, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 10, 100, 97, 116, 97, 32, 115, 101, 113, 117, 101, 110, 116, 105, 97, 108, 108, 121, 46, 32, 73, 102, 32, 121, 111, 117, 32, 119, 97, 110, 116, 32, 116, 111, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 32, 100, 97, 116, 97, 32, 105, 110, 32, 111, 110, 101, 32, 115, 104, 111, 116, 44, 32, 117, 115, 101, 32, 116, 104, 101, 10, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 40, 41, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 110, 115, 116, 101, 97, 100, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 98, 122, 50, 46, 66, 90, 50, 68, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _BZ2Decomp_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _bz2_compress__doc__ = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 40, 100, 97, 116, 97, 32, 91, 44, 32, 99, 111, 109, 112, 114, 101, 115, 115, 108, 101, 118, 101, 108, 61, 57, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 67, 111, 109, 112, 114, 101, 115, 115, 32, 100, 97, 116, 97, 32, 105, 110, 32, 111, 110, 101, 32, 115, 104, 111, 116, 46, 32, 73, 102, 32, 121, 111, 117, 32, 119, 97, 110, 116, 32, 116, 111, 32, 99, 111, 109, 112, 114, 101, 115, 115, 32, 100, 97, 116, 97, 32, 115, 101, 113, 117, 101, 110, 116, 105, 97, 108, 108, 121, 44, 10, 117, 115, 101, 32, 97, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 111, 102, 32, 66, 90, 50, 67, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 105, 110, 115, 116, 101, 97, 100, 46, 32, 84, 104, 101, 32, 99, 111, 109, 112, 114, 101, 115, 115, 108, 101, 118, 101, 108, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 44, 32, 105, 102, 10, 103, 105, 118, 101, 110, 44, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 110, 117, 109, 98, 101, 114, 32, 98, 101, 116, 119, 101, 101, 110, 32, 49, 32, 97, 110, 100, 32, 57, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 115, 42, 124, 105, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_10147 = allocate(12, "i8*", ALLOC_NORMAL);
    __str79 = allocate([ 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    _bz2_decompress__doc__ = allocate([ 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 40, 100, 97, 116, 97, 41, 32, 45, 62, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 32, 100, 97, 116, 97, 10, 10, 68, 101, 99, 111, 109, 112, 114, 101, 115, 115, 32, 100, 97, 116, 97, 32, 105, 110, 32, 111, 110, 101, 32, 115, 104, 111, 116, 46, 32, 73, 102, 32, 121, 111, 117, 32, 119, 97, 110, 116, 32, 116, 111, 32, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 32, 100, 97, 116, 97, 32, 115, 101, 113, 117, 101, 110, 116, 105, 97, 108, 108, 121, 44, 10, 117, 115, 101, 32, 97, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 111, 102, 32, 66, 90, 50, 68, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 32, 105, 110, 115, 116, 101, 97, 100, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str80 = allocate([ 99, 111, 117, 108, 100, 110, 39, 116, 32, 102, 105, 110, 100, 32, 101, 110, 100, 32, 111, 102, 32, 115, 116, 114, 101, 97, 109, 0 ], "i8", ALLOC_NORMAL);
    _bz2_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _bz2__doc__ = allocate([ 84, 104, 101, 32, 112, 121, 116, 104, 111, 110, 32, 98, 122, 50, 32, 109, 111, 100, 117, 108, 101, 32, 112, 114, 111, 118, 105, 100, 101, 115, 32, 97, 32, 99, 111, 109, 112, 114, 101, 104, 101, 110, 115, 105, 118, 101, 32, 105, 110, 116, 101, 114, 102, 97, 99, 101, 32, 102, 111, 114, 10, 116, 104, 101, 32, 98, 122, 50, 32, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 108, 105, 98, 114, 97, 114, 121, 46, 32, 73, 116, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 115, 32, 97, 32, 99, 111, 109, 112, 108, 101, 116, 101, 32, 102, 105, 108, 101, 10, 105, 110, 116, 101, 114, 102, 97, 99, 101, 44, 32, 111, 110, 101, 32, 115, 104, 111, 116, 32, 40, 100, 101, 41, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 44, 32, 97, 110, 100, 32, 116, 121, 112, 101, 115, 32, 102, 111, 114, 10, 115, 101, 113, 117, 101, 110, 116, 105, 97, 108, 32, 40, 100, 101, 41, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 98, 122, 50, 0 ], "i8", ALLOC_NORMAL);
    __str82 = allocate([ 95, 95, 97, 117, 116, 104, 111, 114, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str83 = allocate([ 66, 90, 50, 70, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str84 = allocate([ 66, 90, 50, 67, 111, 109, 112, 114, 101, 115, 115, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 66, 90, 50, 68, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_BZ2File_methods] = __str29;
    HEAP[_BZ2File_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_BZ2File_methods + 12] = _BZ2File_read__doc__;
    HEAP[_BZ2File_methods + 16] = __str30;
    HEAP[_BZ2File_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_BZ2File_methods + 28] = _BZ2File_readline__doc__;
    HEAP[_BZ2File_methods + 32] = __str31;
    HEAP[_BZ2File_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_BZ2File_methods + 44] = _BZ2File_readlines__doc__;
    HEAP[_BZ2File_methods + 48] = __str32;
    HEAP[_BZ2File_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_BZ2File_methods + 60] = _BZ2File_xreadlines__doc__;
    HEAP[_BZ2File_methods + 64] = __str33;
    HEAP[_BZ2File_methods + 68] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_BZ2File_methods + 76] = _BZ2File_write__doc__;
    HEAP[_BZ2File_methods + 80] = __str34;
    HEAP[_BZ2File_methods + 84] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_BZ2File_methods + 92] = _BZ2File_writelines__doc__;
    HEAP[_BZ2File_methods + 96] = __str26;
    HEAP[_BZ2File_methods + 100] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_BZ2File_methods + 108] = _BZ2File_seek__doc__;
    HEAP[_BZ2File_methods + 112] = __str35;
    HEAP[_BZ2File_methods + 116] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_BZ2File_methods + 124] = _BZ2File_tell__doc__;
    HEAP[_BZ2File_methods + 128] = __str28;
    HEAP[_BZ2File_methods + 132] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_BZ2File_methods + 140] = _BZ2File_close__doc__;
    HEAP[_BZ2File_methods + 144] = __str36;
    HEAP[_BZ2File_methods + 148] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_BZ2File_methods + 156] = _BZ2File_enter_doc;
    HEAP[_BZ2File_methods + 160] = __str37;
    HEAP[_BZ2File_methods + 164] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_BZ2File_methods + 172] = _BZ2File_exit_doc;
    HEAP[_BZ2File_getset] = __str46;
    HEAP[_BZ2File_getset + 4] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_BZ2File_getset + 12] = __str47;
    HEAP[_BZ2File_getset + 20] = __str48;
    HEAP[_BZ2File_getset + 24] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_BZ2File_getset + 32] = __str49;
    HEAP[_BZ2File_getset + 40] = __str44;
    HEAP[_BZ2File_getset + 44] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_BZ2File_getset + 52] = __str50;
    HEAP[_BZ2File_getset + 60] = __str45;
    HEAP[_BZ2File_getset + 64] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_BZ2File_getset + 72] = __str51;
    HEAP[_BZ2File_members] = __str52;
    HEAP[_BZ2File_members + 16] = __str53;
    HEAP[_kwlist_9585] = __str56;
    HEAP[_kwlist_9585 + 4] = __str44;
    HEAP[_kwlist_9585 + 8] = __str57;
    HEAP[_kwlist_9585 + 12] = __str58;
    HEAP[_BZ2File_Type + 12] = __str64;
    HEAP[_BZ2File_Type + 24] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_BZ2File_Type + 72] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_BZ2File_Type + 76] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_BZ2File_Type + 88] = _BZ2File__doc__;
    HEAP[_BZ2File_Type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_BZ2File_Type + 112] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_BZ2File_Type + 116] = _BZ2File_methods;
    HEAP[_BZ2File_Type + 120] = _BZ2File_members;
    HEAP[_BZ2File_Type + 124] = _BZ2File_getset;
    HEAP[_BZ2File_Type + 148] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_BZ2File_Type + 152] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_BZ2File_Type + 156] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_BZ2File_Type + 160] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_BZ2Comp_methods] = __str68;
    HEAP[_BZ2Comp_methods + 4] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_BZ2Comp_methods + 12] = _BZ2Comp_compress__doc__;
    HEAP[_BZ2Comp_methods + 16] = __str69;
    HEAP[_BZ2Comp_methods + 20] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_BZ2Comp_methods + 28] = _BZ2Comp_flush__doc__;
    HEAP[_kwlist_9935] = __str58;
    HEAP[_BZ2Comp_Type + 12] = __str71;
    HEAP[_BZ2Comp_Type + 24] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_BZ2Comp_Type + 72] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_BZ2Comp_Type + 76] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_BZ2Comp_Type + 88] = _BZ2Comp__doc__;
    HEAP[_BZ2Comp_Type + 116] = _BZ2Comp_methods;
    HEAP[_BZ2Comp_Type + 148] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_BZ2Comp_Type + 152] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_BZ2Comp_Type + 156] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_BZ2Comp_Type + 160] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_BZ2Decomp_members] = __str72;
    HEAP[_BZ2Decomp_methods] = __str75;
    HEAP[_BZ2Decomp_methods + 4] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_BZ2Decomp_methods + 12] = _BZ2Decomp_decompress__doc__;
    HEAP[_BZ2Decomp_Type + 12] = __str77;
    HEAP[_BZ2Decomp_Type + 24] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_BZ2Decomp_Type + 72] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_BZ2Decomp_Type + 76] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_BZ2Decomp_Type + 88] = _BZ2Decomp__doc__;
    HEAP[_BZ2Decomp_Type + 116] = _BZ2Decomp_methods;
    HEAP[_BZ2Decomp_Type + 120] = _BZ2Decomp_members;
    HEAP[_BZ2Decomp_Type + 148] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_BZ2Decomp_Type + 152] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_BZ2Decomp_Type + 156] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_BZ2Decomp_Type + 160] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_kwlist_10147] = __str79;
    HEAP[_kwlist_10147 + 4] = __str58;
    HEAP[_bz2_methods] = __str68;
    HEAP[_bz2_methods + 4] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_bz2_methods + 12] = _bz2_compress__doc__;
    HEAP[_bz2_methods + 16] = __str75;
    HEAP[_bz2_methods + 20] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_bz2_methods + 28] = _bz2_decompress__doc__;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
