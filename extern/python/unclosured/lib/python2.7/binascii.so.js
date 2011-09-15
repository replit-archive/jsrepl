"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 272;
  var $1___SIZE = 16;
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
  var _table_a2b_hqx;
  var _table_b2a_hqx;
  var _table_a2b_base64;
  var _table_b2a_base64;
  var _crctab_hqx;
  var _doc_a2b_uu;
  var __str;
  var __str1;
  var __str2;
  var ___PRETTY_FUNCTION___8323;
  var _Error;
  var __str3;
  var __str4;
  var _doc_b2a_uu;
  var __str5;
  var __str6;
  var _doc_a2b_base64;
  var __str7;
  var ___PRETTY_FUNCTION___8505;
  var __str8;
  var __str9;
  var _doc_b2a_base64;
  var __str10;
  var __str11;
  var ___PRETTY_FUNCTION___8609;
  var __str12;
  var _doc_a2b_hqx;
  var __str13;
  var __str14;
  var ___PRETTY_FUNCTION___8689;
  var _Incomplete;
  var __str15;
  var __str16;
  var _doc_rlecode_hqx;
  var __str17;
  var ___PRETTY_FUNCTION___8803;
  var _doc_b2a_hqx;
  var __str18;
  var ___PRETTY_FUNCTION___8876;
  var _doc_rledecode_hqx;
  var __str19;
  var __str20;
  var ___PRETTY_FUNCTION___8949;
  var __str21;
  var _doc_crc_hqx;
  var __str22;
  var __str23;
  var _doc_crc32;
  var _crc_32_tab;
  var __str24;
  var __str25;
  var __str26;
  var ___PRETTY_FUNCTION___9264;
  var _doc_hexlify;
  var __str27;
  var ___PRETTY_FUNCTION___9339;
  var __str28;
  var __str29;
  var _doc_unhexlify;
  var _table_hex;
  var _doc_a2b_qp;
  var __str30;
  var _kwlist_9405;
  var __str31;
  var __str32;
  var __str33;
  var _doc_b2a_qp;
  var __str34;
  var _kwlist_9526;
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
  var _binascii_module_methods;
  var _doc_binascii;
  var __str53;
  var __str54;
  var __str55;
  var __str56;
  var __str57;
  var __str58;
  function _binascii_a2b_uu($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $iftmp_1;
      var $0;
      var $pascii = __stackBase__;
      var $ascii_data;
      var $bin_data;
      var $leftbits;
      var $this_ch;
      var $leftchar;
      var $rv;
      var $ascii_len;
      var $bin_len;
      $self_addr = $self;
      $args_addr = $args;
      $leftbits = 0;
      $leftchar = 0;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str, allocate([ $pascii, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      $ascii_data = HEAP[$pascii];
      
      
      $ascii_len = HEAP[$pascii + 8];
      
      
      if ($ascii_len < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str1, __str2, 204, ___PRETTY_FUNCTION___8323);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      
      
      $bin_len = HEAP[$ascii_data] - 32 & 63;
      
      var $16 = $ascii_data + 1;
      $ascii_data = $16;
      
      var $18 = $ascii_len - 1;
      $ascii_len = $18;
      
      var $20 = _PyString_FromStringAndSize(0, $bin_len);
      $rv = $20;
      
      
      if ($rv == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($pascii);
      $0 = 0;
      __label__ = 28;
      break;
     case 6:
      
      
      
      
      $bin_data = $rv + 20;
      __label__ = 21;
      break;
     case 7:
      
      
      if ($ascii_len > 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      $iftmp_1 = HEAP[$ascii_data];
      __label__ = 10;
      break;
     case 9:
      $iftmp_1 = 0;
      __label__ = 10;
      break;
     case 10:
      
      $this_ch = $iftmp_1;
      
      
      
      
      
      if ($this_ch == 10 | $this_ch == 13) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      if ($ascii_len <= 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $this_ch = 0;
      __label__ = 18;
      break;
     case 13:
      
      
      
      
      
      if ($this_ch <= 31 | $this_ch > 96) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      var $42 = HEAP[_Error];
      _PyErr_SetString($42, __str3);
      _PyBuffer_Release($pascii);
      
      
      
      var $46 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $46;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $57 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$57]($rv);
      __label__ = 16;
      break;
     case 16:
      $0 = 0;
      __label__ = 28;
      break;
     case 17:
      
      
      var $61 = $this_ch - 32 & 63;
      $this_ch = $61;
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      var $66 = $this_ch | $leftchar << 6;
      $leftchar = $66;
      
      var $68 = $leftbits + 6;
      $leftbits = $68;
      
      if ($68 > 7) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      var $71 = $leftbits - 8;
      $leftbits = $71;
      
      
      
      
      
      HEAP[$bin_data] = $leftchar >>> $leftbits & 255;
      
      var $78 = $bin_data + 1;
      $bin_data = $78;
      
      
      
      
      var $83 = (1 << $leftbits) - 1 & $leftchar;
      $leftchar = $83;
      
      var $85 = $bin_len - 1;
      $bin_len = $85;
      __label__ = 20;
      break;
     case 20:
      
      var $87 = $ascii_len - 1;
      $ascii_len = $87;
      
      var $89 = $ascii_data + 1;
      $ascii_data = $89;
      __label__ = 21;
      break;
     case 21:
      
      
      if ($bin_len > 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 22:
      
      
      $this_ch = HEAP[$ascii_data];
      
      var $95 = $ascii_data + 1;
      $ascii_data = $95;
      
      
      
      
      
      
      
      
      
      
      
      if ($this_ch != 32 & $this_ch != 96 & $this_ch != 10 & $this_ch != 13) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 23:
      var $104 = HEAP[_Error];
      _PyErr_SetString($104, __str4);
      _PyBuffer_Release($pascii);
      
      
      
      var $108 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $108;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $119 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$119]($rv);
      __label__ = 25;
      break;
     case 25:
      $0 = 0;
      __label__ = 28;
      break;
     case 26:
      
      
      var $123 = $ascii_len > 0;
      
      var $125 = $ascii_len - 1;
      $ascii_len = $125;
      
      if ($123 != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      _PyBuffer_Release($pascii);
      
      $0 = $rv;
      __label__ = 28;
      break;
     case 28:
      
      $retval = $0;
      var $retval34 = $retval;
      STACKTOP = __stackBase__;
      return $retval34;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _binascii_b2a_uu($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    _memset(__stackBase__, 0, 56);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $pbin = __stackBase__;
      var $ascii_data;
      var $bin_data;
      var $leftbits;
      var $this_ch;
      var $leftchar;
      var $rv = __stackBase__ + 52;
      var $bin_len;
      $self_addr = $self;
      $args_addr = $args;
      $leftbits = 0;
      $leftchar = 0;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str5, allocate([ $pbin, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      $bin_data = HEAP[$pbin];
      
      
      $bin_len = HEAP[$pbin + 8];
      
      
      if ($bin_len > 45) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = HEAP[_Error];
      _PyErr_SetString($10, __str6);
      _PyBuffer_Release($pbin);
      $0 = 0;
      __label__ = 21;
      break;
     case 4:
      
      
      
      
      
      var $16 = _PyString_FromStringAndSize(0, (($bin_len + 2) / 3 | 0) * 4 + 2);
      HEAP[$rv] = $16;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($pbin);
      $0 = 0;
      __label__ = 21;
      break;
     case 6:
      
      
      
      
      $ascii_data = HEAP[$rv] + 20;
      
      
      
      
      
      HEAP[$ascii_data] = ($bin_len & 255 & 63) + 32;
      
      var $29 = $ascii_data + 1;
      $ascii_data = $29;
      var $_pr2 = $bin_len;
      __lastLabel__ = 6;
      __label__ = 13;
      break;
     case 7:
      
      
      
      var $32 = $leftchar << 8;
      if ($bin_len > 0) {
        __lastLabel__ = 7;
        __label__ = 8;
        break;
      } else {
        __lastLabel__ = 7;
        __label__ = 9;
        break;
      }
     case 8:
      var $33 = __lastLabel__ == 14 ? $62 : $32;
      
      
      
      var $37 = HEAP[$bin_data] | $33;
      $leftchar = $37;
      __label__ = 10;
      break;
     case 9:
      $leftchar = $32;
      __label__ = 10;
      break;
     case 10:
      
      var $39 = $leftbits + 8;
      $leftbits = $39;
      
      if ($39 > 5) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      $this_ch = $leftchar >>> 0 >>> ($leftbits - 6 >>> 0) & 255 & 63;
      
      var $48 = $leftbits - 6;
      $leftbits = $48;
      
      
      
      HEAP[$ascii_data] = $this_ch + 32;
      
      var $53 = $ascii_data + 1;
      $ascii_data = $53;
      
      
      if ($leftbits > 5) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      var $56 = $bin_len - 1;
      $bin_len = $56;
      
      var $58 = $bin_data + 1;
      $bin_data = $58;
      __lastLabel__ = 12;
      __label__ = 13;
      break;
     case 13:
      var $59 = __lastLabel__ == 12 ? $56 : $_pr2;
      
      if ($59 > 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      var $62 = $leftchar << 8;
      __lastLabel__ = 14;
      __label__ = 8;
      break;
     case 15:
      
      
      if ($leftbits != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      HEAP[$ascii_data] = 10;
      
      var $67 = $ascii_data + 1;
      $ascii_data = $67;
      
      
      
      
      
      
      var $74 = $ascii_data - (HEAP[$rv] + 20);
      var $75 = __PyString_Resize($rv, $74);
      
      if ($75 < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      var $77 = HEAP[$rv];
      
      
      var $80 = HEAP[$77] - 1;
      var $81 = $77;
      HEAP[$81] = $80;
      
      
      
      if (HEAP[$77] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $89 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $90 = HEAP[$rv];
      FUNCTION_TABLE[$89]($90);
      __label__ = 19;
      break;
     case 19:
      HEAP[$rv] = 0;
      __label__ = 20;
      break;
     case 20:
      _PyBuffer_Release($pbin);
      
      $0 = HEAP[$rv];
      __label__ = 21;
      break;
     case 21:
      
      $retval = $0;
      var $retval21 = $retval;
      STACKTOP = __stackBase__;
      return $retval21;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _binascii_find_valid($s, $slen) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $slen_addr;
      var $num_addr;
      var $retval;
      var $0;
      var $ret;
      var $c;
      var $b64val;
      $s_addr = $s;
      $slen_addr = $slen;
      $num_addr = 1;
      $ret = -1;
      __lastLabel__ = -1;
      __label__ = 7;
      break;
     case 1:
      
      
      $c = HEAP[$s_addr];
      
      
      
      
      
      $b64val = HEAP[_table_a2b_base64 + ($c & 127)];
      
      
      if ($c >= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      
      var $11 = $b64val != -1;
      if ($11) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      if ($num_addr == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      $ret = HEAP[$s_addr];
      __label__ = 5;
      break;
     case 5:
      
      var $18 = $num_addr - 1;
      $num_addr = $18;
      __label__ = 6;
      break;
     case 6:
      
      var $20 = $s_addr + 1;
      $s_addr = $20;
      
      var $22 = $slen_addr - 1;
      $slen_addr = $22;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $23 = __lastLabel__ == 6 ? $22 : $slen;
      
      if ($23 <= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      var $26 = $ret == -1;
      if ($26) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      $0 = $ret;
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _binascii_a2b_base64($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    _memset(__stackBase__, 0, 56);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $pascii = __stackBase__;
      var $ascii_data;
      var $bin_data;
      var $leftbits;
      var $this_ch;
      var $leftchar;
      var $rv = __stackBase__ + 52;
      var $ascii_len;
      var $bin_len;
      var $quad_pos;
      $self_addr = $self;
      $args_addr = $args;
      $leftbits = 0;
      $leftchar = 0;
      $quad_pos = 0;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str7, allocate([ $pascii, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 33;
      break;
     case 2:
      
      
      $ascii_data = HEAP[$pascii];
      
      
      $ascii_len = HEAP[$pascii + 8];
      
      
      if ($ascii_len < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str1, __str2, 378, ___PRETTY_FUNCTION___8505);
      throw "Reached an unreachable!";
     case 4:
      
      
      if ($ascii_len > 2147483644) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($pascii);
      var $12 = _PyErr_NoMemory();
      $0 = $12;
      __label__ = 33;
      break;
     case 6:
      
      
      
      
      $bin_len = (($ascii_len + 3) / 4 | 0) * 3;
      
      var $18 = _PyString_FromStringAndSize(0, $bin_len);
      HEAP[$rv] = $18;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _PyBuffer_Release($pascii);
      $0 = 0;
      __label__ = 33;
      break;
     case 8:
      
      
      
      
      $bin_data = HEAP[$rv] + 20;
      $bin_len = 0;
      var $_pr = $ascii_len;
      __lastLabel__ = 8;
      __label__ = 19;
      break;
     case 9:
      
      
      $this_ch = HEAP[$ascii_data];
      
      var $28 = reSign($this_ch, 8, 1) < 0;
      
      var $30 = reSign($this_ch, 8, 1) == 13;
      var $or_cond = $28 | $30;
      
      var $32 = reSign($this_ch, 8, 1) == 10;
      var $or_cond3 = $or_cond | $32;
      
      var $34 = reSign($this_ch, 8, 1) == 32;
      
      if ($or_cond3 | $34) {
        __label__ = 18;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if ($this_ch == 61) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      
      if ($quad_pos <= 1) {
        __label__ = 18;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if ($quad_pos != 2) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      var $43 = _binascii_find_valid($ascii_data, $ascii_len);
      
      if ($43 != 61) {
        __label__ = 18;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      $leftbits = 0;
      __label__ = 24;
      break;
     case 15:
      
      
      
      
      
      $this_ch = HEAP[_table_a2b_base64 + HEAP[$ascii_data]];
      
      var $51 = reSign($this_ch, 8, 1) == -1;
      if ($51) {
        __label__ = 18;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      var $54 = $quad_pos + 1 & 3;
      $quad_pos = $54;
      
      
      
      
      var $59 = $this_ch | $leftchar << 6;
      $leftchar = $59;
      
      var $61 = $leftbits + 6;
      $leftbits = $61;
      
      
      if ($leftbits > 7) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      var $65 = $leftbits - 8;
      $leftbits = $65;
      
      
      
      
      
      HEAP[$bin_data] = $leftchar >>> $leftbits & 255;
      
      var $72 = $bin_data + 1;
      $bin_data = $72;
      
      var $74 = $bin_len + 1;
      $bin_len = $74;
      
      
      
      
      var $79 = (1 << $leftbits) - 1 & $leftchar;
      $leftchar = $79;
      __label__ = 18;
      break;
     case 18:
      
      var $81 = $ascii_len - 1;
      $ascii_len = $81;
      
      var $83 = $ascii_data + 1;
      $ascii_data = $83;
      __lastLabel__ = 18;
      __label__ = 19;
      break;
     case 19:
      var $84 = __lastLabel__ == 18 ? $81 : $_pr;
      
      if ($84 > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      if ($leftbits != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 21:
      _PyBuffer_Release($pascii);
      var $87 = HEAP[_Error];
      _PyErr_SetString($87, __str8);
      var $88 = HEAP[$rv];
      
      
      var $91 = HEAP[$88] - 1;
      var $92 = $88;
      HEAP[$92] = $91;
      
      
      
      if (HEAP[$88] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $100 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $101 = HEAP[$rv];
      FUNCTION_TABLE[$100]($101);
      __label__ = 23;
      break;
     case 23:
      $0 = 0;
      __label__ = 33;
      break;
     case 24:
      
      
      if ($bin_len > 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 25:
      
      var $105 = __PyString_Resize($rv, $bin_len);
      
      if ($105 < 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 26:
      var $107 = HEAP[$rv];
      
      
      var $110 = HEAP[$107] - 1;
      var $111 = $107;
      HEAP[$111] = $110;
      
      
      
      if (HEAP[$107] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $119 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $120 = HEAP[$rv];
      FUNCTION_TABLE[$119]($120);
      __label__ = 28;
      break;
     case 28:
      HEAP[$rv] = 0;
      __label__ = 32;
      break;
     case 29:
      var $121 = HEAP[$rv];
      
      
      var $124 = HEAP[$121] - 1;
      var $125 = $121;
      HEAP[$125] = $124;
      
      
      
      if (HEAP[$121] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $133 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $134 = HEAP[$rv];
      FUNCTION_TABLE[$133]($134);
      __label__ = 31;
      break;
     case 31:
      var $135 = _PyString_FromStringAndSize(__str9, 0);
      HEAP[$rv] = $135;
      __label__ = 32;
      break;
     case 32:
      _PyBuffer_Release($pascii);
      
      $0 = HEAP[$rv];
      __label__ = 33;
      break;
     case 33:
      
      $retval = $0;
      var $retval37 = $retval;
      STACKTOP = __stackBase__;
      return $retval37;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _binascii_b2a_base64($self, $args) {
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
      var $pbuf = __stackBase__;
      var $ascii_data;
      var $bin_data;
      var $leftbits;
      var $this_ch;
      var $leftchar;
      var $rv = __stackBase__ + 52;
      var $bin_len;
      $self_addr = $self;
      $args_addr = $args;
      $leftbits = 0;
      $leftchar = 0;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str10, allocate([ $pbuf, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      $bin_data = HEAP[$pbuf];
      
      
      $bin_len = HEAP[$pbuf + 8];
      
      
      if ($bin_len < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str11, __str2, 486, ___PRETTY_FUNCTION___8609);
      throw "Reached an unreachable!";
     case 4:
      
      
      if ($bin_len > 1073741796) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $12 = HEAP[_Error];
      _PyErr_SetString($12, __str12);
      _PyBuffer_Release($pbuf);
      $0 = 0;
      __label__ = 21;
      break;
     case 6:
      
      
      
      var $16 = _PyString_FromStringAndSize(0, $bin_len * 2 + 3);
      HEAP[$rv] = $16;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _PyBuffer_Release($pbuf);
      $0 = 0;
      __label__ = 21;
      break;
     case 8:
      
      
      
      
      $ascii_data = HEAP[$rv] + 20;
      
      
      if ($bin_len > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      
      
      var $29 = HEAP[$bin_data] | $leftchar << 8;
      $leftchar = $29;
      
      var $31 = $leftbits + 8;
      $leftbits = $31;
      
      if ($31 > 5) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      $this_ch = $leftchar >>> 0 >>> ($leftbits - 6 >>> 0) & 255 & 63;
      
      var $40 = $leftbits - 6;
      $leftbits = $40;
      
      
      
      var $44 = HEAP[_table_b2a_base64 + $this_ch];
      
      HEAP[$ascii_data] = $44;
      
      var $47 = $ascii_data + 1;
      $ascii_data = $47;
      
      
      if ($leftbits > 5) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $50 = $bin_len - 1;
      $bin_len = $50;
      
      var $52 = $bin_data + 1;
      $bin_data = $52;
      
      if ($50 > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if ($leftbits == 2) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $60 = HEAP[_table_b2a_base64 + (($leftchar & 3) << 4)];
      
      HEAP[$ascii_data] = $60;
      
      var $63 = $ascii_data + 1;
      $ascii_data = $63;
      
      HEAP[$ascii_data] = 61;
      
      var $66 = $ascii_data + 1;
      $ascii_data = $66;
      
      HEAP[$ascii_data] = 61;
      
      var $69 = $ascii_data + 1;
      $ascii_data = $69;
      __label__ = 16;
      break;
     case 14:
      
      
      if ($leftbits == 4) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $76 = HEAP[_table_b2a_base64 + (($leftchar & 15) << 2)];
      
      HEAP[$ascii_data] = $76;
      
      var $79 = $ascii_data + 1;
      $ascii_data = $79;
      
      HEAP[$ascii_data] = 61;
      
      var $82 = $ascii_data + 1;
      $ascii_data = $82;
      __label__ = 16;
      break;
     case 16:
      
      HEAP[$ascii_data] = 10;
      
      var $85 = $ascii_data + 1;
      $ascii_data = $85;
      
      
      
      
      
      
      var $92 = $ascii_data - (HEAP[$rv] + 20);
      var $93 = __PyString_Resize($rv, $92);
      
      if ($93 < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      var $95 = HEAP[$rv];
      
      
      var $98 = HEAP[$95] - 1;
      var $99 = $95;
      HEAP[$99] = $98;
      
      
      
      if (HEAP[$95] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $107 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $108 = HEAP[$rv];
      FUNCTION_TABLE[$107]($108);
      __label__ = 19;
      break;
     case 19:
      HEAP[$rv] = 0;
      __label__ = 20;
      break;
     case 20:
      _PyBuffer_Release($pbuf);
      
      $0 = HEAP[$rv];
      __label__ = 21;
      break;
     case 21:
      
      $retval = $0;
      var $retval23 = $retval;
      STACKTOP = __stackBase__;
      return $retval23;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _binascii_a2b_hqx($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    _memset(__stackBase__, 0, 56);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $pascii = __stackBase__;
      var $ascii_data;
      var $bin_data;
      var $leftbits;
      var $this_ch;
      var $leftchar;
      var $rv = __stackBase__ + 52;
      var $len;
      var $done;
      var $rrv;
      $self_addr = $self;
      $args_addr = $args;
      $leftbits = 0;
      $leftchar = 0;
      $done = 0;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str13, allocate([ $pascii, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      $ascii_data = HEAP[$pascii];
      
      
      $len = HEAP[$pascii + 8];
      
      
      if ($len < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str14, __str2, 554, ___PRETTY_FUNCTION___8689);
      throw "Reached an unreachable!";
     case 4:
      
      
      if ($len > 2147483645) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($pascii);
      var $12 = _PyErr_NoMemory();
      $0 = $12;
      __label__ = 34;
      break;
     case 6:
      
      
      var $15 = _PyString_FromStringAndSize(0, $len + 2);
      HEAP[$rv] = $15;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _PyBuffer_Release($pascii);
      $0 = 0;
      __label__ = 34;
      break;
     case 8:
      
      
      
      
      $bin_data = HEAP[$rv] + 20;
      var $_pr = $len;
      __lastLabel__ = 8;
      __label__ = 19;
      break;
     case 9:
      
      
      
      
      
      $this_ch = HEAP[_table_a2b_hqx + HEAP[$ascii_data]];
      
      
      if ($this_ch == 126) {
        __label__ = 18;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if ($this_ch == 125) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      var $31 = HEAP[_Error];
      _PyErr_SetString($31, __str3);
      _PyBuffer_Release($pascii);
      var $32 = HEAP[$rv];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $45 = HEAP[$rv];
      FUNCTION_TABLE[$44]($45);
      __label__ = 13;
      break;
     case 13:
      $0 = 0;
      __label__ = 34;
      break;
     case 14:
      
      
      if ($this_ch == 127) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $done = 1;
      __label__ = 20;
      break;
     case 16:
      
      
      
      
      var $52 = $this_ch | $leftchar << 6;
      $leftchar = $52;
      
      var $54 = $leftbits + 6;
      $leftbits = $54;
      
      
      if ($leftbits > 7) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      var $58 = $leftbits - 8;
      $leftbits = $58;
      
      
      
      
      
      HEAP[$bin_data] = $leftchar >>> $leftbits & 255;
      
      var $65 = $bin_data + 1;
      $bin_data = $65;
      
      
      
      
      var $70 = (1 << $leftbits) - 1 & $leftchar;
      $leftchar = $70;
      __label__ = 18;
      break;
     case 18:
      
      var $72 = $len - 1;
      $len = $72;
      
      var $74 = $ascii_data + 1;
      $ascii_data = $74;
      __lastLabel__ = 18;
      __label__ = 19;
      break;
     case 19:
      var $75 = __lastLabel__ == 18 ? $72 : $_pr;
      
      if ($75 > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      if ($leftbits != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 21:
      
      
      if ($done == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 22:
      var $81 = HEAP[_Incomplete];
      _PyErr_SetString($81, __str15);
      _PyBuffer_Release($pascii);
      var $82 = HEAP[$rv];
      
      
      var $85 = HEAP[$82] - 1;
      var $86 = $82;
      HEAP[$86] = $85;
      
      
      
      if (HEAP[$82] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $94 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $95 = HEAP[$rv];
      FUNCTION_TABLE[$94]($95);
      __label__ = 24;
      break;
     case 24:
      $0 = 0;
      __label__ = 34;
      break;
     case 25:
      
      
      
      
      
      
      var $102 = $bin_data - (HEAP[$rv] + 20);
      var $103 = __PyString_Resize($rv, $102);
      
      var $105 = HEAP[$rv];
      if ($103 < 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 26:
      
      
      var $108 = HEAP[$105] - 1;
      var $109 = $105;
      HEAP[$109] = $108;
      
      
      
      if (HEAP[$105] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $117 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $118 = HEAP[$rv];
      FUNCTION_TABLE[$117]($118);
      __label__ = 28;
      break;
     case 28:
      HEAP[$rv] = 0;
      __label__ = 33;
      break;
     case 29:
      
      if ($105 != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 30:
      var $120 = HEAP[$rv];
      
      var $122 = __Py_BuildValue_SizeT(__str16, allocate([ $120, 0, 0, 0, $done, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $rrv = $122;
      _PyBuffer_Release($pascii);
      var $123 = HEAP[$rv];
      
      
      var $126 = HEAP[$123] - 1;
      var $127 = $123;
      HEAP[$127] = $126;
      
      
      
      if (HEAP[$123] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $135 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $136 = HEAP[$rv];
      FUNCTION_TABLE[$135]($136);
      __label__ = 32;
      break;
     case 32:
      
      $0 = $rrv;
      __label__ = 34;
      break;
     case 33:
      _PyBuffer_Release($pascii);
      $0 = 0;
      __label__ = 34;
      break;
     case 34:
      
      $retval = $0;
      var $retval34 = $retval;
      STACKTOP = __stackBase__;
      return $retval34;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _binascii_rlecode_hqx($self, $args) {
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
      var $pbuf = __stackBase__;
      var $in_data;
      var $out_data;
      var $rv = __stackBase__ + 52;
      var $ch;
      var $in;
      var $inend;
      var $len;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str17, allocate([ $pbuf, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      $in_data = HEAP[$pbuf];
      
      
      $len = HEAP[$pbuf + 8];
      
      
      if ($len < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str14, __str2, 637, ___PRETTY_FUNCTION___8803);
      throw "Reached an unreachable!";
     case 4:
      
      
      if ($len > 1073741821) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($pbuf);
      var $12 = _PyErr_NoMemory();
      $0 = $12;
      __label__ = 24;
      break;
     case 6:
      
      
      
      var $16 = _PyString_FromStringAndSize(0, ($len + 1) * 2);
      HEAP[$rv] = $16;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _PyBuffer_Release($pbuf);
      $0 = 0;
      __label__ = 24;
      break;
     case 8:
      
      
      
      
      $out_data = HEAP[$rv] + 20;
      $in = 0;
      
      
      
      if ($in < $len) {
        __label__ = 9;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 9:
      
      
      
      var $29 = HEAP[$in_data + $in];
      $ch = $29;
      var $30 = reSign($29, 8, 1) == -112;
      if ($30) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      HEAP[$out_data] = -112;
      
      var $33 = $out_data + 1;
      $out_data = $33;
      
      HEAP[$out_data] = 0;
      
      var $36 = $out_data + 1;
      $out_data = $36;
      __label__ = 18;
      break;
     case 11:
      
      
      $inend = $in + 1;
      __label__ = 13;
      break;
     case 12:
      
      var $40 = $inend + 1;
      $inend = $40;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if (($inend | 0) >= ($len | 0)) {
        __label__ = 16;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      var $47 = HEAP[$in_data + $inend];
      var $48 = $ch;
      var $49 = reSign($47, 8, 1) != reSign($48, 8, 1);
      if ($49) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      if (($in + 255 | 0) > ($inend | 0)) {
        __label__ = 12;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      
      HEAP[$out_data] = $ch;
      
      var $61 = $out_data + 1;
      $out_data = $61;
      if ($inend - $in > 3) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      HEAP[$out_data] = -112;
      
      var $64 = $out_data + 1;
      $out_data = $64;
      
      
      
      
      
      
      HEAP[$out_data] = ($inend & 255) - ($in & 255);
      
      var $72 = $out_data + 1;
      $out_data = $72;
      
      
      $in = $inend - 1;
      __label__ = 18;
      break;
     case 18:
      
      var $76 = $in + 1;
      $in = $76;
      
      
      
      if ($in < $len) {
        __label__ = 9;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      
      
      var $86 = $out_data - (HEAP[$rv] + 20);
      var $87 = __PyString_Resize($rv, $86);
      
      if ($87 < 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      var $89 = HEAP[$rv];
      
      
      var $92 = HEAP[$89] - 1;
      var $93 = $89;
      HEAP[$93] = $92;
      
      
      
      if (HEAP[$89] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $101 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $102 = HEAP[$rv];
      FUNCTION_TABLE[$101]($102);
      __label__ = 22;
      break;
     case 22:
      HEAP[$rv] = 0;
      __label__ = 23;
      break;
     case 23:
      _PyBuffer_Release($pbuf);
      
      $0 = HEAP[$rv];
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
  function _binascii_b2a_hqx($self, $args) {
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
      var $pbin = __stackBase__;
      var $ascii_data;
      var $bin_data;
      var $leftbits;
      var $this_ch;
      var $leftchar;
      var $rv = __stackBase__ + 52;
      var $len;
      $self_addr = $self;
      $args_addr = $args;
      $leftbits = 0;
      $leftchar = 0;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str18, allocate([ $pbin, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      $bin_data = HEAP[$pbin];
      
      
      $len = HEAP[$pbin + 8];
      
      
      if ($len < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str14, __str2, 703, ___PRETTY_FUNCTION___8876);
      throw "Reached an unreachable!";
     case 4:
      
      
      if ($len > 1073741821) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($pbin);
      var $12 = _PyErr_NoMemory();
      $0 = $12;
      __label__ = 19;
      break;
     case 6:
      
      
      
      var $16 = _PyString_FromStringAndSize(0, ($len + 1) * 2);
      HEAP[$rv] = $16;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _PyBuffer_Release($pbin);
      $0 = 0;
      __label__ = 19;
      break;
     case 8:
      
      
      
      
      $ascii_data = HEAP[$rv] + 20;
      
      
      if ($len > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      
      
      var $29 = HEAP[$bin_data] | $leftchar << 8;
      $leftchar = $29;
      
      var $31 = $leftbits + 8;
      $leftbits = $31;
      
      if ($31 > 5) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      $this_ch = $leftchar >>> 0 >>> ($leftbits - 6 >>> 0) & 255 & 63;
      
      var $40 = $leftbits - 6;
      $leftbits = $40;
      
      
      
      var $44 = HEAP[_table_b2a_hqx + $this_ch];
      
      HEAP[$ascii_data] = $44;
      
      var $47 = $ascii_data + 1;
      $ascii_data = $47;
      
      
      if ($leftbits > 5) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $50 = $len - 1;
      $len = $50;
      
      var $52 = $bin_data + 1;
      $bin_data = $52;
      
      if ($50 > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if ($leftbits != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      var $59 = $leftchar << 6 - $leftbits;
      $leftchar = $59;
      
      
      
      var $63 = HEAP[_table_b2a_hqx + ($leftchar & 63)];
      
      HEAP[$ascii_data] = $63;
      
      var $66 = $ascii_data + 1;
      $ascii_data = $66;
      __label__ = 14;
      break;
     case 14:
      
      
      
      
      
      
      var $73 = $ascii_data - (HEAP[$rv] + 20);
      var $74 = __PyString_Resize($rv, $73);
      
      if ($74 < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      var $76 = HEAP[$rv];
      
      
      var $79 = HEAP[$76] - 1;
      var $80 = $76;
      HEAP[$80] = $79;
      
      
      
      if (HEAP[$76] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $88 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $89 = HEAP[$rv];
      FUNCTION_TABLE[$88]($89);
      __label__ = 17;
      break;
     case 17:
      HEAP[$rv] = 0;
      __label__ = 18;
      break;
     case 18:
      _PyBuffer_Release($pbin);
      
      $0 = HEAP[$rv];
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
  function _binascii_rledecode_hqx($self, $args) {
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
      var $pin = __stackBase__;
      var $in_data;
      var $out_data;
      var $in_byte;
      var $in_repeat;
      var $rv = __stackBase__ + 52;
      var $in_len;
      var $out_len;
      var $out_len_left;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str19, allocate([ $pin, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 86;
      break;
     case 2:
      
      
      $in_data = HEAP[$pin];
      
      
      $in_len = HEAP[$pin + 8];
      
      
      if ($in_len < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str20, __str2, 758, ___PRETTY_FUNCTION___8949);
      throw "Reached an unreachable!";
     case 4:
      
      
      if ($in_len == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($pin);
      var $12 = _PyString_FromStringAndSize(__str9, 0);
      $0 = $12;
      __label__ = 86;
      break;
     case 6:
      
      
      if ($in_len > 1073741823) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _PyBuffer_Release($pin);
      var $15 = _PyErr_NoMemory();
      $0 = $15;
      __label__ = 86;
      break;
     case 8:
      
      
      $out_len = $in_len * 2;
      
      var $19 = _PyString_FromStringAndSize(0, $out_len);
      HEAP[$rv] = $19;
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      _PyBuffer_Release($pin);
      $0 = 0;
      __label__ = 86;
      break;
     case 10:
      
      $out_len_left = $out_len;
      
      
      
      
      $out_data = HEAP[$rv] + 20;
      
      var $28 = $in_len - 1;
      $in_len = $28;
      
      
      if ($in_len < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      var $31 = HEAP[_Incomplete];
      _PyErr_SetString($31, __str9);
      var $32 = HEAP[$rv];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $45 = HEAP[$rv];
      FUNCTION_TABLE[$44]($45);
      __label__ = 13;
      break;
     case 13:
      _PyBuffer_Release($pin);
      $0 = 0;
      __label__ = 86;
      break;
     case 14:
      
      
      $in_byte = HEAP[$in_data];
      
      var $49 = $in_data + 1;
      $in_data = $49;
      
      var $51 = $in_byte == -112;
      if ($51) {
        __label__ = 15;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 15:
      
      var $53 = $in_len - 1;
      $in_len = $53;
      
      
      if ($in_len < 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      var $56 = HEAP[_Incomplete];
      _PyErr_SetString($56, __str9);
      var $57 = HEAP[$rv];
      
      
      var $60 = HEAP[$57] - 1;
      var $61 = $57;
      HEAP[$61] = $60;
      
      
      
      if (HEAP[$57] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $69 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $70 = HEAP[$rv];
      FUNCTION_TABLE[$69]($70);
      __label__ = 18;
      break;
     case 18:
      _PyBuffer_Release($pin);
      $0 = 0;
      __label__ = 86;
      break;
     case 19:
      
      
      $in_repeat = HEAP[$in_data];
      
      var $74 = $in_data + 1;
      $in_data = $74;
      
      
      if ($in_repeat != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      var $77 = HEAP[_Error];
      _PyErr_SetString($77, __str21);
      _PyBuffer_Release($pin);
      var $78 = HEAP[$rv];
      
      
      var $81 = HEAP[$78] - 1;
      var $82 = $78;
      HEAP[$82] = $81;
      
      
      
      if (HEAP[$78] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $90 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $91 = HEAP[$rv];
      FUNCTION_TABLE[$90]($91);
      __label__ = 22;
      break;
     case 22:
      $0 = 0;
      __label__ = 86;
      break;
     case 23:
      
      var $93 = $out_len_left - 1;
      $out_len_left = $93;
      
      
      if ($out_len_left < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 24:
      
      
      if ($out_len > 1073741823) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $98 = _PyErr_NoMemory();
      $0 = $98;
      __label__ = 86;
      break;
     case 26:
      
      
      var $101 = __PyString_Resize($rv, $out_len * 2);
      
      var $103 = HEAP[$rv];
      if ($101 < 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      
      
      var $106 = HEAP[$103] - 1;
      var $107 = $103;
      HEAP[$107] = $106;
      
      
      
      if (HEAP[$103] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $115 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $116 = HEAP[$rv];
      FUNCTION_TABLE[$115]($116);
      __label__ = 29;
      break;
     case 29:
      _PyBuffer_Release($pin);
      $0 = 0;
      __label__ = 86;
      break;
     case 30:
      
      
      
      
      
      $out_data = $103 + 20 + $out_len;
      
      
      $out_len_left = $out_len - 1;
      
      var $125 = $out_len * 2;
      $out_len = $125;
      __label__ = 31;
      break;
     case 31:
      
      HEAP[$out_data] = -112;
      
      var $128 = $out_data + 1;
      $out_data = $128;
      __label__ = 80;
      break;
     case 32:
      
      var $130 = $out_len_left - 1;
      $out_len_left = $130;
      
      
      if ($out_len_left < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 33:
      
      
      if ($out_len > 1073741823) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      var $135 = _PyErr_NoMemory();
      $0 = $135;
      __label__ = 86;
      break;
     case 35:
      
      
      var $138 = __PyString_Resize($rv, $out_len * 2);
      
      var $140 = HEAP[$rv];
      if ($138 < 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 36:
      
      
      var $143 = HEAP[$140] - 1;
      var $144 = $140;
      HEAP[$144] = $143;
      
      
      
      if (HEAP[$140] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $152 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $153 = HEAP[$rv];
      FUNCTION_TABLE[$152]($153);
      __label__ = 38;
      break;
     case 38:
      _PyBuffer_Release($pin);
      $0 = 0;
      __label__ = 86;
      break;
     case 39:
      
      
      
      
      
      $out_data = $140 + 20 + $out_len;
      
      
      $out_len_left = $out_len - 1;
      
      var $162 = $out_len * 2;
      $out_len = $162;
      __label__ = 40;
      break;
     case 40:
      
      
      HEAP[$out_data] = $in_byte;
      
      var $166 = $out_data + 1;
      $out_data = $166;
      __label__ = 80;
      break;
     case 41:
      
      var $168 = $in_len - 1;
      $in_len = $168;
      
      
      if ($in_len < 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 42:
      var $171 = HEAP[_Incomplete];
      _PyErr_SetString($171, __str9);
      var $172 = HEAP[$rv];
      
      
      var $175 = HEAP[$172] - 1;
      var $176 = $172;
      HEAP[$176] = $175;
      
      
      
      if (HEAP[$172] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      
      
      var $184 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $185 = HEAP[$rv];
      FUNCTION_TABLE[$184]($185);
      __label__ = 44;
      break;
     case 44:
      _PyBuffer_Release($pin);
      $0 = 0;
      __label__ = 86;
      break;
     case 45:
      
      
      $in_byte = HEAP[$in_data];
      
      var $189 = $in_data + 1;
      $in_data = $189;
      
      var $191 = reSign($in_byte, 8, 1) == -112;
      if ($191) {
        __label__ = 46;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 46:
      
      var $193 = $in_len - 1;
      $in_len = $193;
      
      
      if ($in_len < 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 47:
      var $196 = HEAP[_Incomplete];
      _PyErr_SetString($196, __str9);
      var $197 = HEAP[$rv];
      
      
      var $200 = HEAP[$197] - 1;
      var $201 = $197;
      HEAP[$201] = $200;
      
      
      
      if (HEAP[$197] == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      
      
      
      var $209 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $210 = HEAP[$rv];
      FUNCTION_TABLE[$209]($210);
      __label__ = 49;
      break;
     case 49:
      _PyBuffer_Release($pin);
      $0 = 0;
      __label__ = 86;
      break;
     case 50:
      
      
      $in_repeat = HEAP[$in_data];
      
      var $214 = $in_data + 1;
      $in_data = $214;
      
      
      if ($in_repeat == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 51:
      
      var $218 = $out_len_left - 1;
      $out_len_left = $218;
      
      
      if ($out_len_left < 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 52:
      
      
      if ($out_len > 1073741823) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      var $223 = _PyErr_NoMemory();
      $0 = $223;
      __label__ = 86;
      break;
     case 54:
      
      
      var $226 = __PyString_Resize($rv, $out_len * 2);
      
      var $228 = HEAP[$rv];
      if ($226 < 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 55:
      
      
      var $231 = HEAP[$228] - 1;
      var $232 = $228;
      HEAP[$232] = $231;
      
      
      
      if (HEAP[$228] == 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      
      
      
      
      var $240 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $241 = HEAP[$rv];
      FUNCTION_TABLE[$240]($241);
      __label__ = 57;
      break;
     case 57:
      _PyBuffer_Release($pin);
      $0 = 0;
      __label__ = 86;
      break;
     case 58:
      
      
      
      
      
      $out_data = $228 + 20 + $out_len;
      
      
      $out_len_left = $out_len - 1;
      
      var $250 = $out_len * 2;
      $out_len = $250;
      __label__ = 59;
      break;
     case 59:
      
      HEAP[$out_data] = -112;
      
      var $253 = $out_data + 1;
      $out_data = $253;
      __label__ = 80;
      break;
     case 60:
      
      var $255 = $out_data + -1;
      
      $in_byte = HEAP[$255];
      __label__ = 70;
      break;
     case 61:
      
      var $258 = $out_len_left - 1;
      $out_len_left = $258;
      
      
      if ($out_len_left < 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 62:
      
      
      if ($out_len > 1073741823) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      var $263 = _PyErr_NoMemory();
      $0 = $263;
      __label__ = 86;
      break;
     case 64:
      
      
      var $266 = __PyString_Resize($rv, $out_len * 2);
      
      var $268 = HEAP[$rv];
      if ($266 < 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 65:
      
      
      var $271 = HEAP[$268] - 1;
      var $272 = $268;
      HEAP[$272] = $271;
      
      
      
      if (HEAP[$268] == 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 66:
      
      
      
      
      var $280 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $281 = HEAP[$rv];
      FUNCTION_TABLE[$280]($281);
      __label__ = 67;
      break;
     case 67:
      _PyBuffer_Release($pin);
      $0 = 0;
      __label__ = 86;
      break;
     case 68:
      
      
      
      
      
      $out_data = $268 + 20 + $out_len;
      
      
      $out_len_left = $out_len - 1;
      
      var $290 = $out_len * 2;
      $out_len = $290;
      __label__ = 69;
      break;
     case 69:
      
      
      HEAP[$out_data] = $in_byte;
      
      var $294 = $out_data + 1;
      $out_data = $294;
      __label__ = 70;
      break;
     case 70:
      
      var $296 = $in_repeat - 1;
      $in_repeat = $296;
      
      if ($296 != 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 71:
      
      var $299 = $out_len_left - 1;
      $out_len_left = $299;
      
      
      if ($out_len_left < 0) {
        __label__ = 72;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 72:
      
      
      if ($out_len > 1073741823) {
        __label__ = 73;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 73:
      var $304 = _PyErr_NoMemory();
      $0 = $304;
      __label__ = 86;
      break;
     case 74:
      
      
      var $307 = __PyString_Resize($rv, $out_len * 2);
      
      var $309 = HEAP[$rv];
      if ($307 < 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 75:
      
      
      var $312 = HEAP[$309] - 1;
      var $313 = $309;
      HEAP[$313] = $312;
      
      
      
      if (HEAP[$309] == 0) {
        __label__ = 76;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 76:
      
      
      
      
      var $321 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $322 = HEAP[$rv];
      FUNCTION_TABLE[$321]($322);
      __label__ = 77;
      break;
     case 77:
      _PyBuffer_Release($pin);
      $0 = 0;
      __label__ = 86;
      break;
     case 78:
      
      
      
      
      
      $out_data = $309 + 20 + $out_len;
      
      
      $out_len_left = $out_len - 1;
      
      var $331 = $out_len * 2;
      $out_len = $331;
      __label__ = 79;
      break;
     case 79:
      
      
      HEAP[$out_data] = $in_byte;
      
      var $335 = $out_data + 1;
      $out_data = $335;
      __label__ = 80;
      break;
     case 80:
      
      
      if ($in_len > 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 81:
      
      
      
      
      
      
      var $344 = $out_data - (HEAP[$rv] + 20);
      var $345 = __PyString_Resize($rv, $344);
      
      if ($345 < 0) {
        __label__ = 82;
        break;
      } else {
        __label__ = 85;
        break;
      }
     case 82:
      var $347 = HEAP[$rv];
      
      
      var $350 = HEAP[$347] - 1;
      var $351 = $347;
      HEAP[$351] = $350;
      
      
      
      if (HEAP[$347] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 84;
        break;
      }
     case 83:
      
      
      
      
      var $359 = HEAP[HEAP[HEAP[$rv] + 4] + 24];
      var $360 = HEAP[$rv];
      FUNCTION_TABLE[$359]($360);
      __label__ = 84;
      break;
     case 84:
      HEAP[$rv] = 0;
      __label__ = 85;
      break;
     case 85:
      _PyBuffer_Release($pin);
      
      $0 = HEAP[$rv];
      __label__ = 86;
      break;
     case 86:
      
      $retval = $0;
      var $retval88 = $retval;
      STACKTOP = __stackBase__;
      return $retval88;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _binascii_crc_hqx($self, $args) {
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
      var $pin = __stackBase__;
      var $bin_data;
      var $crc = __stackBase__ + 52;
      var $len;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str22, allocate([ $pin, 0, 0, 0, $crc, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      $bin_data = HEAP[$pin];
      
      
      $len = HEAP[$pin + 8];
      
      var $9 = $len > 0;
      
      var $11 = $len - 1;
      $len = $11;
      if ($9) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $14 = HEAP[$crc] << 8 & 65280;
      
      
      var $17 = HEAP[$crc] >>> 0 >>> 8 & 255;
      
      var $19 = HEAP[$bin_data];
      var $20 = unSign($19, 8, 1);
      
      
      var $23 = HEAP[_crctab_hqx + ($20 ^ $17) * 2];
      var $24 = unSign($23, 16, 1);
      var $25 = $24 ^ $14;
      HEAP[$crc] = $25;
      
      var $27 = $bin_data + 1;
      $bin_data = $27;
      
      
      var $30 = $len > 0;
      
      var $32 = $len - 1;
      $len = $32;
      
      if ($30 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      _PyBuffer_Release($pin);
      var $33 = HEAP[$crc];
      var $34 = __Py_BuildValue_SizeT(__str23, allocate([ $33, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = $34;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval6 = $retval;
      STACKTOP = __stackBase__;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _binascii_crc32($self, $args) {
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
      var $pbin = __stackBase__;
      var $bin_data;
      var $crc = __stackBase__ + 52;
      var $len;
      var $result;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$crc] = 0;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str24, allocate([ $pbin, 0, 0, 0, $crc, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      $bin_data = HEAP[$pbin];
      
      
      $len = HEAP[$pbin + 8];
      
      var $not = HEAP[$crc] ^ -1;
      HEAP[$crc] = $not;
      
      var $10 = $len > 0;
      
      var $12 = $len - 1;
      $len = $12;
      if ($10) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $14 = HEAP[$bin_data];
      var $15 = unSign($14, 8, 1);
      
      
      
      
      
      
      
      var $23 = HEAP[$crc] >>> 0 >>> 8 ^ HEAP[_crc_32_tab + (($15 ^ HEAP[$crc]) & 255) * 4];
      HEAP[$crc] = $23;
      
      var $25 = $bin_data + 1;
      $bin_data = $25;
      
      
      var $28 = $len > 0;
      
      var $30 = $len - 1;
      $len = $30;
      
      if ($28 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $not6 = HEAP[$crc] ^ -1;
      $result = $not6;
      _PyBuffer_Release($pbin);
      
      var $33 = _PyInt_FromLong($result);
      $0 = $33;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval9 = $retval;
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _binascii_hexlify($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $iftmp_145;
      var $iftmp_142;
      var $0;
      var $parg = __stackBase__;
      var $argbuf;
      var $arglen;
      var $retval1;
      var $retbuf;
      var $i;
      var $j;
      var $c;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str25, allocate([ $parg, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      $argbuf = HEAP[$parg];
      
      
      $arglen = HEAP[$parg + 8];
      
      
      if ($arglen < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str26, __str2, 1069, ___PRETTY_FUNCTION___9264);
      throw "Reached an unreachable!";
     case 4:
      
      
      if ($arglen > 1073741823) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($parg);
      var $12 = _PyErr_NoMemory();
      $0 = $12;
      __label__ = 17;
      break;
     case 6:
      
      
      var $15 = _PyString_FromStringAndSize(0, $arglen * 2);
      $retval1 = $15;
      
      
      if ($retval1 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _PyBuffer_Release($parg);
      $0 = 0;
      __label__ = 17;
      break;
     case 8:
      
      
      
      
      $retbuf = $retval1 + 20;
      $j = 0;
      
      $i = $j;
      
      
      
      if ($i < $arglen) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 9:
      
      
      
      
      
      
      $c = HEAP[$argbuf + $i] >> 4 & 15;
      
      var $33 = $c;
      if ((HEAP[$argbuf + $i] >> 4 & 15) > 9) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      $iftmp_142 = $33 + 87;
      __label__ = 12;
      break;
     case 11:
      
      $iftmp_142 = $33 + 48;
      __label__ = 12;
      break;
     case 12:
      
      $c = $iftmp_142;
      
      
      
      
      HEAP[$retbuf + $j] = $c;
      
      var $42 = $j + 1;
      $j = $42;
      
      
      
      
      
      $c = HEAP[$argbuf + $i] & 15;
      
      var $49 = $c;
      if ((HEAP[$argbuf + $i] & 15) > 9) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      $iftmp_145 = $49 + 87;
      __label__ = 15;
      break;
     case 14:
      
      $iftmp_145 = $49 + 48;
      __label__ = 15;
      break;
     case 15:
      
      $c = $iftmp_145;
      
      
      
      
      HEAP[$retbuf + $j] = $c;
      
      var $58 = $j + 1;
      $j = $58;
      
      var $60 = $i + 1;
      $i = $60;
      
      
      
      if ($i < $arglen) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      _PyBuffer_Release($parg);
      
      $0 = $retval1;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval19 = $retval;
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _to_int($c) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $c_addr;
      var $retval;
      var $0;
      $c_addr = $c;
      var $1 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$1] + 2 * $c_addr] & 2048) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      $0 = $c_addr - 48;
      __label__ = 7;
      break;
     case 2:
      var $11 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$11] + 2 * $c_addr] & 256) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $20 = _tolower($c_addr);
      $c_addr = $20;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      if ($c_addr > 96 & $c_addr <= 102) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      $0 = $c_addr - 87;
      __label__ = 7;
      break;
     case 6:
      $0 = -1;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _binascii_unhexlify($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $parg = __stackBase__;
      var $argbuf;
      var $arglen;
      var $retval1;
      var $retbuf;
      var $i;
      var $j;
      var $top;
      var $bot;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str27, allocate([ $parg, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      $argbuf = HEAP[$parg];
      
      
      $arglen = HEAP[$parg + 8];
      
      
      if ($arglen < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str26, __str2, 1132, ___PRETTY_FUNCTION___9339);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      
      if (($arglen & 1 & 255) != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      _PyBuffer_Release($parg);
      var $13 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($13, __str28);
      $0 = 0;
      __label__ = 17;
      break;
     case 6:
      
      
      var $16 = _PyString_FromStringAndSize(0, $arglen / 2 | 0);
      $retval1 = $16;
      
      
      if ($retval1 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _PyBuffer_Release($parg);
      $0 = 0;
      __label__ = 17;
      break;
     case 8:
      
      
      
      
      $retbuf = $retval1 + 20;
      $j = 0;
      
      $i = $j;
      __label__ = 13;
      break;
     case 9:
      
      
      
      
      var $28 = HEAP[$argbuf + $i];
      var $29 = _to_int($28);
      $top = $29;
      
      
      
      
      
      var $35 = HEAP[$argbuf + ($i + 1)];
      var $36 = _to_int($35);
      $bot = $36;
      
      var $38 = $top == -1;
      if ($38) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      var $40 = $bot == -1;
      if ($40) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $41 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($41, __str29);
      _PyBuffer_Release($parg);
      
      
      
      var $45 = HEAP[$retval1] - 1;
      
      
      HEAP[$retval1] = $45;
      
      
      
      
      if (HEAP[$retval1] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      
      
      HEAP[$retbuf + $j & 4294967295] = ($top & 255) * 16 + ($bot & 255) & 255;
      
      var $62 = $j + 1 & 4294967295;
      $j = $62;
      
      var $64 = $i + 2;
      $i = $64;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if ($i < $arglen) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      _PyBuffer_Release($parg);
      
      $0 = $retval1;
      __label__ = 17;
      break;
     case 15:
      
      
      
      
      var $73 = HEAP[HEAP[$retval1 + 4] + 24];
      
      FUNCTION_TABLE[$73]($retval1);
      __label__ = 16;
      break;
     case 16:
      $0 = 0;
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
  function _binascii_a2b_qp($self, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwargs_addr;
      var $retval;
      var $0;
      var $in;
      var $out;
      var $ch;
      var $pdata = __stackBase__;
      var $data;
      var $odata;
      var $datalen;
      var $rv;
      var $header = __stackBase__ + 52;
      $self_addr = $self;
      $args_addr = $args;
      $kwargs_addr = $kwargs;
      $datalen = 0;
      HEAP[$header] = 0;
      
      
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kwargs_addr, __str30, _kwlist_9405, allocate([ $pdata, 0, 0, 0, $header, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 39;
      break;
     case 2:
      
      
      $data = HEAP[$pdata];
      
      
      $datalen = HEAP[$pdata + 8];
      
      var $10 = _PyMem_Malloc($datalen);
      $odata = $10;
      
      
      if ($odata == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyBuffer_Release($pdata);
      var $13 = _PyErr_NoMemory();
      $0 = 0;
      __label__ = 39;
      break;
     case 4:
      
      
      _llvm_memset_p0i8_i32($odata, 0, $datalen, 1, 0);
      $out = 0;
      
      $in = $out;
      __label__ = 35;
      break;
     case 5:
      
      
      
      
      
      if (HEAP[$data + $in] == 61) {
        __label__ = 6;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 6:
      
      var $23 = $in + 1;
      $in = $23;
      
      
      
      if ($in >= $datalen) {
        __label__ = 36;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      if (HEAP[$data + $in] == 10) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[$data + $in] == 13) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 9:
      
      
      
      
      
      if (HEAP[$data + $in] != 10) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      var $43 = $in + 1;
      $in = $43;
      __label__ = 11;
      break;
     case 11:
      
      
      
      if ($in >= $datalen) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      if (HEAP[$data + $in] != 10) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      if ($in < $datalen) {
        __label__ = 14;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 14:
      
      var $56 = $in + 1;
      $in = $56;
      __label__ = 35;
      break;
     case 15:
      
      
      
      
      
      if (HEAP[$data + $in] == 61) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      HEAP[$odata + $out] = 61;
      
      var $66 = $out + 1;
      $out = $66;
      
      var $68 = $in + 1;
      $in = $68;
      __label__ = 35;
      break;
     case 17:
      
      
      
      
      
      if (HEAP[$data + $in] <= 64) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      if (HEAP[$data + $in] <= 70) {
        __label__ = 23;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      
      if (HEAP[$data + $in] <= 96) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      
      if (HEAP[$data + $in] <= 102) {
        __label__ = 23;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      if (HEAP[$data + $in] <= 47) {
        __label__ = 30;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      
      if (HEAP[$data + $in] <= 57) {
        __label__ = 23;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 23:
      
      
      
      
      
      
      if (HEAP[$data + ($in + 1)] <= 64) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      
      
      if (HEAP[$data + ($in + 1)] <= 70) {
        __label__ = 29;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      
      if (HEAP[$data + ($in + 1)] <= 96) {
        __label__ = 27;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      
      
      if (HEAP[$data + ($in + 1)] <= 102) {
        __label__ = 29;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      
      
      if (HEAP[$data + ($in + 1)] <= 47) {
        __label__ = 30;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      
      
      
      if (HEAP[$data + ($in + 1)] <= 57) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      
      
      
      
      
      $ch = HEAP[_table_hex + HEAP[$data + $in] * 4] << 4 & 255;
      
      var $145 = $in + 1;
      $in = $145;
      
      
      
      
      
      
      
      
      
      var $155 = HEAP[_table_hex + HEAP[$data + $in] * 4] & 255 | $ch;
      $ch = $155;
      
      var $157 = $in + 1;
      $in = $157;
      
      
      
      
      HEAP[$odata + $out] = $ch;
      
      var $163 = $out + 1;
      $out = $163;
      __label__ = 35;
      break;
     case 30:
      
      
      
      HEAP[$odata + $out] = 61;
      
      var $168 = $out + 1;
      $out = $168;
      __label__ = 35;
      break;
     case 31:
      
      
      if (HEAP[$header] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      
      
      
      if (HEAP[$data + $in] != 95) {
        __label__ = 34;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      HEAP[$odata + $out] = 32;
      
      var $180 = $out + 1;
      $out = $180;
      
      var $182 = $in + 1;
      $in = $182;
      __label__ = 35;
      break;
     case 34:
      
      
      
      var $186 = HEAP[$data + $in];
      
      
      
      HEAP[$odata + $out] = $186;
      
      var $191 = $in + 1;
      $in = $191;
      
      var $193 = $out + 1;
      $out = $193;
      __label__ = 35;
      break;
     case 35:
      
      
      
      if ($in < $datalen) {
        __label__ = 5;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      var $199 = _PyString_FromStringAndSize($odata, $out);
      $rv = $199;
      var $200 = $199 == 0;
      _PyBuffer_Release($pdata);
      
      _PyMem_Free($odata);
      if ($200) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      $0 = 0;
      __label__ = 39;
      break;
     case 38:
      
      $0 = $rv;
      __label__ = 39;
      break;
     case 39:
      
      $retval = $0;
      var $retval42 = $retval;
      STACKTOP = __stackBase__;
      return $retval42;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _to_hex($ch, $s) {
    
    var $ch_addr;
    var $s_addr;
    var $uvalue;
    $ch_addr = $ch;
    $s_addr = $s;
    
    
    $uvalue = $ch_addr;
    
    
    
    var $5 = HEAP[__str33 + ($uvalue & 15)];
    
    
    HEAP[$s_addr + 1] = $5;
    
    var $9 = Math.floor($uvalue / 16);
    $uvalue = $9;
    
    
    
    var $13 = HEAP[__str33 + ($uvalue & 15)];
    
    
    HEAP[$s_addr] = $13;
    return;
  }
  function _binascii_b2a_qp($self, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 64;
    _memset(__stackBase__, 0, 64);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwargs_addr;
      var $retval;
      var $0;
      var $in;
      var $out;
      var $pdata = __stackBase__;
      var $data;
      var $odata;
      var $datalen;
      var $odatalen;
      var $rv;
      var $linelen;
      var $istext = __stackBase__ + 52;
      var $quotetabs = __stackBase__ + 56;
      var $header = __stackBase__ + 60;
      var $ch;
      var $crlf;
      var $p;
      $self_addr = $self;
      $args_addr = $args;
      $kwargs_addr = $kwargs;
      $datalen = 0;
      $odatalen = 0;
      $linelen = 0;
      HEAP[$istext] = 1;
      HEAP[$quotetabs] = 0;
      HEAP[$header] = 0;
      $crlf = 0;
      
      
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kwargs_addr, __str34, _kwlist_9526, allocate([ $pdata, 0, 0, 0, $quotetabs, 0, 0, 0, $istext, 0, 0, 0, $header, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 116;
      break;
     case 2:
      
      
      $data = HEAP[$pdata];
      
      
      $datalen = HEAP[$pdata + 8];
      
      
      var $11 = _memchr($data, 10, $datalen);
      $p = $11;
      
      
      if ($p != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      if ($p > $data) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      var $18 = $p + -1;
      
      
      if (HEAP[$18] == 13) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $crlf = 1;
      __label__ = 6;
      break;
     case 6:
      $in = 0;
      
      
      
      if ($in < $datalen) {
        __label__ = 7;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 7:
      
      
      
      
      
      if (HEAP[$data + $in] > 126) {
        __label__ = 29;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[$data + $in] == 61) {
        __label__ = 29;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if (HEAP[$header] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      if (HEAP[$data + $in] == 95) {
        __label__ = 29;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      if (HEAP[$data + $in] != 46) {
        __label__ = 16;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if ($linelen != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      
      if (HEAP[$data + ($in + 1)] == 10) {
        __label__ = 29;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      
      
      if (HEAP[$data + ($in + 1)] == 13) {
        __label__ = 29;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      
      
      if (HEAP[$data + ($in + 1)] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      if (HEAP[$istext] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      
      if (HEAP[$data + $in] == 13) {
        __label__ = 29;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      if (HEAP[$data + $in] == 10) {
        __label__ = 29;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      
      if (HEAP[$data + $in] == 9) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      
      if (HEAP[$data + $in] == 32) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      if ($in + 1 == $datalen) {
        __label__ = 29;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      
      if (HEAP[$data + $in] > 32) {
        __label__ = 35;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      if (HEAP[$data + $in] == 13) {
        __label__ = 35;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      
      if (HEAP[$data + $in] == 10) {
        __label__ = 35;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      if (HEAP[$quotetabs] != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      if (HEAP[$quotetabs] != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      
      if (HEAP[$data + $in] == 9) {
        __label__ = 35;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      
      
      if (HEAP[$data + $in] != 32) {
        __label__ = 29;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 29:
      
      
      
      if ($linelen + 3 > 75) {
        __label__ = 30;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 30:
      $linelen = 0;
      
      
      var $126 = $odatalen;
      if ($crlf != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      var $127 = $126 + 3;
      $odatalen = $127;
      __label__ = 33;
      break;
     case 32:
      var $128 = $126 + 2;
      $odatalen = $128;
      __label__ = 33;
      break;
     case 33:
      
      var $130 = $linelen + 3;
      $linelen = $130;
      
      var $132 = $odatalen + 3;
      $odatalen = $132;
      
      var $134 = $in + 1;
      $in = $134;
      __label__ = 34;
      break;
     case 34:
      
      
      
      if ($in < $datalen) {
        __label__ = 7;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 35:
      
      
      if (HEAP[$istext] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      var $141 = $in;
      
      
      
      if (HEAP[$data + $141] == 10) {
        __lastLabel__ = 36;
        __label__ = 41;
        break;
      } else {
        __lastLabel__ = 36;
        __label__ = 37;
        break;
      }
     case 37:
      
      
      
      
      if ($in + 1 >= $datalen) {
        __label__ = 51;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      
      
      
      
      
      if (HEAP[$data + $in] != 13) {
        __label__ = 51;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      
      
      
      
      
      if (HEAP[$data + ($in + 1)] == 10) {
        __label__ = 40;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 40:
      var $_pr = $in;
      __lastLabel__ = 40;
      __label__ = 41;
      break;
     case 41:
      var $160 = __lastLabel__ == 40 ? $_pr : $141;
      $linelen = 0;
      
      if (($160 | 0) != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 42:
      
      
      
      
      var $166 = HEAP[$data + ($in - 1)];
      var $167 = reSign($166, 8, 1) == 32;
      if ($167) {
        __label__ = 44;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      
      
      
      
      var $172 = HEAP[$data + ($in - 1)];
      var $173 = reSign($172, 8, 1) == 9;
      if ($173) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      var $175 = $odatalen + 2;
      $odatalen = $175;
      __label__ = 45;
      break;
     case 45:
      
      
      var $178 = $odatalen;
      if ($crlf != 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      var $179 = $178 + 2;
      $odatalen = $179;
      __label__ = 48;
      break;
     case 47:
      var $180 = $178 + 1;
      $odatalen = $180;
      __label__ = 48;
      break;
     case 48:
      
      
      
      
      
      var $186 = $in;
      if (HEAP[$data + $in] == 13) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      var $187 = $186 + 2;
      $in = $187;
      __label__ = 34;
      break;
     case 50:
      var $188 = $186 + 1;
      $in = $188;
      __label__ = 34;
      break;
     case 51:
      
      
      
      
      if ($in + 1 != $datalen) {
        __label__ = 52;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 52:
      
      
      
      
      
      
      if (HEAP[$data + ($in + 1)] != 10) {
        __label__ = 53;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 53:
      
      
      
      if ($linelen + 1 > 75) {
        __label__ = 54;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 54:
      $linelen = 0;
      
      
      var $204 = $odatalen;
      if ($crlf != 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      var $205 = $204 + 3;
      $odatalen = $205;
      __label__ = 57;
      break;
     case 56:
      var $206 = $204 + 2;
      $odatalen = $206;
      __label__ = 57;
      break;
     case 57:
      
      var $208 = $linelen + 1;
      $linelen = $208;
      
      var $210 = $odatalen + 1;
      $odatalen = $210;
      
      var $212 = $in + 1;
      $in = $212;
      __label__ = 34;
      break;
     case 58:
      
      var $214 = _PyMem_Malloc($odatalen);
      $odata = $214;
      
      if ($214 == 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      _PyBuffer_Release($pdata);
      var $216 = _PyErr_NoMemory();
      $0 = 0;
      __label__ = 116;
      break;
     case 60:
      
      
      _llvm_memset_p0i8_i32($odata, 0, $odatalen, 1, 0);
      $linelen = 0;
      $out = 0;
      
      $in = $out;
      
      
      
      if ($in < $datalen) {
        __label__ = 61;
        break;
      } else {
        __label__ = 113;
        break;
      }
     case 61:
      
      
      
      
      
      if (HEAP[$data + $in] > 126) {
        __label__ = 83;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 62:
      
      
      
      
      
      if (HEAP[$data + $in] == 61) {
        __label__ = 83;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 63:
      
      
      if (HEAP[$header] == 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 64:
      
      
      
      
      
      if (HEAP[$data + $in] == 95) {
        __label__ = 83;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 65:
      
      
      
      
      
      if (HEAP[$data + $in] != 46) {
        __label__ = 70;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 66:
      
      
      if ($linelen != 0) {
        __label__ = 70;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 67:
      
      
      
      
      
      
      if (HEAP[$data + ($in + 1)] == 10) {
        __label__ = 83;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 68:
      
      
      
      
      
      
      if (HEAP[$data + ($in + 1)] == 13) {
        __label__ = 83;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 69:
      
      
      
      
      
      
      if (HEAP[$data + ($in + 1)] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 70:
      
      
      if (HEAP[$istext] != 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 71:
      
      
      
      
      
      if (HEAP[$data + $in] == 13) {
        __label__ = 83;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 72:
      
      
      
      
      
      if (HEAP[$data + $in] == 10) {
        __label__ = 83;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 73:
      
      
      
      
      
      if (HEAP[$data + $in] == 9) {
        __label__ = 75;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 74:
      
      
      
      
      
      if (HEAP[$data + $in] == 32) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      
      
      
      
      if ($in + 1 == $datalen) {
        __label__ = 83;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 76:
      
      
      
      
      
      if (HEAP[$data + $in] > 32) {
        __label__ = 89;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 77:
      
      
      
      
      
      if (HEAP[$data + $in] == 13) {
        __label__ = 89;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 78:
      
      
      
      
      
      if (HEAP[$data + $in] == 10) {
        __label__ = 89;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 79:
      
      
      if (HEAP[$quotetabs] != 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 80:
      
      
      if (HEAP[$quotetabs] != 0) {
        __label__ = 89;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 81:
      
      
      
      
      
      if (HEAP[$data + $in] == 9) {
        __label__ = 89;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 82:
      
      
      
      
      
      if (HEAP[$data + $in] != 32) {
        __label__ = 83;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 83:
      
      
      
      if ($linelen + 3 > 75) {
        __label__ = 84;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 84:
      
      
      
      HEAP[$odata + $out] = 61;
      
      var $327 = $out + 1;
      $out = $327;
      
      
      if ($crlf != 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      
      
      
      HEAP[$odata + $out] = 13;
      
      var $334 = $out + 1;
      $out = $334;
      __label__ = 86;
      break;
     case 86:
      
      
      
      HEAP[$odata + $out] = 10;
      
      var $339 = $out + 1;
      $out = $339;
      $linelen = 0;
      __label__ = 87;
      break;
     case 87:
      
      
      
      HEAP[$odata + $out] = 61;
      
      var $344 = $out + 1;
      $out = $344;
      
      
      
      
      
      
      
      
      var $353 = HEAP[$data + $in] & 255;
      _to_hex($353, $odata + $out);
      
      var $355 = $out + 2;
      $out = $355;
      
      var $357 = $in + 1;
      $in = $357;
      
      var $359 = $linelen + 3;
      $linelen = $359;
      __label__ = 88;
      break;
     case 88:
      
      
      
      if ($in < $datalen) {
        __label__ = 61;
        break;
      } else {
        __label__ = 113;
        break;
      }
     case 89:
      
      
      if (HEAP[$istext] == 0) {
        __label__ = 103;
        break;
      } else {
        __label__ = 90;
        break;
      }
     case 90:
      
      
      
      
      
      if (HEAP[$data + $in] == 10) {
        __label__ = 94;
        break;
      } else {
        __label__ = 91;
        break;
      }
     case 91:
      
      
      
      
      if ($in + 1 >= $datalen) {
        __label__ = 103;
        break;
      } else {
        __label__ = 92;
        break;
      }
     case 92:
      
      
      
      
      
      if (HEAP[$data + $in] != 13) {
        __label__ = 103;
        break;
      } else {
        __label__ = 93;
        break;
      }
     case 93:
      
      
      
      
      
      
      if (HEAP[$data + ($in + 1)] == 10) {
        __label__ = 94;
        break;
      } else {
        __label__ = 103;
        break;
      }
     case 94:
      $linelen = 0;
      
      
      if ($out != 0) {
        __label__ = 95;
        break;
      } else {
        __label__ = 98;
        break;
      }
     case 95:
      
      
      
      
      
      
      if (HEAP[$odata + ($out - 1)] == 32) {
        __label__ = 97;
        break;
      } else {
        __label__ = 96;
        break;
      }
     case 96:
      
      
      
      
      
      
      if (HEAP[$odata + ($out - 1)] == 9) {
        __label__ = 97;
        break;
      } else {
        __label__ = 98;
        break;
      }
     case 97:
      
      
      
      
      
      $ch = HEAP[$odata + ($out - 1)];
      
      
      
      
      HEAP[$odata + ($out - 1)] = 61;
      
      
      
      
      
      
      _to_hex($ch & 255, $odata + $out);
      
      var $415 = $out + 2;
      $out = $415;
      __label__ = 98;
      break;
     case 98:
      
      
      if ($crlf != 0) {
        __label__ = 99;
        break;
      } else {
        __label__ = 100;
        break;
      }
     case 99:
      
      
      
      HEAP[$odata + $out] = 13;
      
      var $422 = $out + 1;
      $out = $422;
      __label__ = 100;
      break;
     case 100:
      
      
      
      HEAP[$odata + $out] = 10;
      
      var $427 = $out + 1;
      $out = $427;
      
      
      
      
      
      var $433 = $in;
      if (HEAP[$data + $in] == 13) {
        __label__ = 101;
        break;
      } else {
        __label__ = 102;
        break;
      }
     case 101:
      var $434 = $433 + 2;
      $in = $434;
      __label__ = 88;
      break;
     case 102:
      var $435 = $433 + 1;
      $in = $435;
      __label__ = 88;
      break;
     case 103:
      
      
      
      
      if ($in + 1 != $datalen) {
        __label__ = 104;
        break;
      } else {
        __label__ = 109;
        break;
      }
     case 104:
      
      
      
      
      
      
      if (HEAP[$data + ($in + 1)] != 10) {
        __label__ = 105;
        break;
      } else {
        __label__ = 109;
        break;
      }
     case 105:
      
      
      
      if ($linelen + 1 > 75) {
        __label__ = 106;
        break;
      } else {
        __label__ = 109;
        break;
      }
     case 106:
      
      
      
      HEAP[$odata + $out] = 61;
      
      var $453 = $out + 1;
      $out = $453;
      
      
      if ($crlf != 0) {
        __label__ = 107;
        break;
      } else {
        __label__ = 108;
        break;
      }
     case 107:
      
      
      
      HEAP[$odata + $out] = 13;
      
      var $460 = $out + 1;
      $out = $460;
      __label__ = 108;
      break;
     case 108:
      
      
      
      HEAP[$odata + $out] = 10;
      
      var $465 = $out + 1;
      $out = $465;
      $linelen = 0;
      __label__ = 109;
      break;
     case 109:
      
      var $467 = $linelen + 1;
      $linelen = $467;
      
      
      if (HEAP[$header] == 0) {
        __label__ = 112;
        break;
      } else {
        __label__ = 110;
        break;
      }
     case 110:
      
      
      
      
      
      if (HEAP[$data + $in] != 32) {
        __label__ = 112;
        break;
      } else {
        __label__ = 111;
        break;
      }
     case 111:
      
      
      
      HEAP[$odata + $out] = 95;
      
      var $479 = $out + 1;
      $out = $479;
      
      var $481 = $in + 1;
      $in = $481;
      __label__ = 88;
      break;
     case 112:
      
      
      
      var $485 = HEAP[$data + $in];
      
      
      
      HEAP[$odata + $out] = $485;
      
      var $490 = $out + 1;
      $out = $490;
      
      var $492 = $in + 1;
      $in = $492;
      __label__ = 88;
      break;
     case 113:
      
      
      var $495 = _PyString_FromStringAndSize($odata, $out);
      $rv = $495;
      var $496 = $495 == 0;
      _PyBuffer_Release($pdata);
      
      _PyMem_Free($odata);
      if ($496) {
        __label__ = 114;
        break;
      } else {
        __label__ = 115;
        break;
      }
     case 114:
      $0 = 0;
      __label__ = 116;
      break;
     case 115:
      
      $0 = $rv;
      __label__ = 116;
      break;
     case 116:
      
      $retval = $0;
      var $retval117 = $retval;
      STACKTOP = __stackBase__;
      return $retval117;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initbinascii() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $d;
      var $x;
      var $0 = _Py_InitModule4(__str53, _binascii_module_methods, 0, 0, 1013);
      $m = $0;
      
      
      if ($m == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $4 = _PyModule_GetDict($m);
      $d = $4;
      var $5 = _PyString_FromString(_doc_binascii);
      $x = $5;
      
      
      var $8 = _PyDict_SetItemString($d, __str54, $x);
      
      
      if ($x != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      var $14 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $14;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $25 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$25]($x);
      __label__ = 4;
      break;
     case 4:
      var $27 = _PyErr_NewException(__str55, 0, 0);
      HEAP[_Error] = $27;
      var $28 = HEAP[_Error];
      
      var $30 = _PyDict_SetItemString($d, __str56, $28);
      var $31 = _PyErr_NewException(__str57, 0, 0);
      HEAP[_Incomplete] = $31;
      var $32 = HEAP[_Incomplete];
      
      var $34 = _PyDict_SetItemString($d, __str58, $32);
      __label__ = 5;
      break;
     case 5:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initbinascii"] = _initbinascii;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _binascii_a2b_uu, 0, _binascii_b2a_uu, 0, _binascii_a2b_base64, 0, _binascii_b2a_base64, 0, _binascii_a2b_hqx, 0, _binascii_b2a_hqx, 0, _binascii_hexlify, 0, _binascii_unhexlify, 0, _binascii_rlecode_hqx, 0, _binascii_rledecode_hqx, 0, _binascii_crc_hqx, 0, _binascii_crc32, 0, _binascii_a2b_qp, 0, _binascii_b2a_qp, 0 ]);
  function run(args) {
    _table_a2b_hqx = allocate([ 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 126, 125, 125, 126, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 125, 125, 13, 14, 15, 16, 17, 18, 19, 125, 20, 21, 127, 125, 125, 125, 125, 125, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 125, 37, 38, 39, 40, 41, 42, 43, 125, 44, 45, 46, 47, 125, 125, 125, 125, 48, 49, 50, 51, 52, 53, 54, 125, 55, 56, 57, 58, 59, 60, 125, 125, 61, 62, 63, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125 ], "i8", ALLOC_NORMAL);
    _table_b2a_hqx = allocate([ 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 48, 49, 50, 51, 52, 53, 54, 56, 57, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 88, 89, 90, 91, 96, 97, 98, 99, 100, 101, 102, 104, 105, 106, 107, 108, 109, 112, 113, 114, 0 ], "i8", ALLOC_NORMAL);
    _table_a2b_base64 = allocate([ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 62, 255, 255, 255, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 255, 255, 255, 0, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 255, 255, 255, 255, 255 ], "i8", ALLOC_NORMAL);
    _table_b2a_base64 = allocate([ 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47, 0 ], "i8", ALLOC_NORMAL);
    _crctab_hqx = allocate([ 0, 0, 4129, 0, 8258, 0, 12387, 0, 16516, 0, 20645, 0, 24774, 0, 28903, 0, -32504, 0, -28375, 0, -24246, 0, -20117, 0, -15988, 0, -11859, 0, -7730, 0, -3601, 0, 4657, 0, 528, 0, 12915, 0, 8786, 0, 21173, 0, 17044, 0, 29431, 0, 25302, 0, -27847, 0, -31976, 0, -19589, 0, -23718, 0, -11331, 0, -15460, 0, -3073, 0, -7202, 0, 9314, 0, 13379, 0, 1056, 0, 5121, 0, 25830, 0, 29895, 0, 17572, 0, 21637, 0, -23190, 0, -19125, 0, -31448, 0, -27383, 0, -6674, 0, -2609, 0, -14932, 0, -10867, 0, 13907, 0, 9842, 0, 5649, 0, 1584, 0, 30423, 0, 26358, 0, 22165, 0, 18100, 0, -18597, 0, -22662, 0, -26855, 0, -30920, 0, -2081, 0, -6146, 0, -10339, 0, -14404, 0, 18628, 0, 22757, 0, 26758, 0, 30887, 0, 2112, 0, 6241, 0, 10242, 0, 14371, 0, -13876, 0, -9747, 0, -5746, 0, -1617, 0, -30392, 0, -26263, 0, -22262, 0, -18133, 0, 23285, 0, 19156, 0, 31415, 0, 27286, 0, 6769, 0, 2640, 0, 14899, 0, 10770, 0, -9219, 0, -13348, 0, -1089, 0, -5218, 0, -25735, 0, -29864, 0, -17605, 0, -21734, 0, 27814, 0, 31879, 0, 19684, 0, 23749, 0, 11298, 0, 15363, 0, 3168, 0, 7233, 0, -4690, 0, -625, 0, -12820, 0, -8755, 0, -21206, 0, -17141, 0, -29336, 0, -25271, 0, 32407, 0, 28342, 0, 24277, 0, 20212, 0, 15891, 0, 11826, 0, 7761, 0, 3696, 0, -97, 0, -4162, 0, -8227, 0, -12292, 0, -16613, 0, -20678, 0, -24743, 0, -28808, 0, -28280, 0, -32343, 0, -20022, 0, -24085, 0, -12020, 0, -16083, 0, -3762, 0, -7825, 0, 4224, 0, 161, 0, 12482, 0, 8419, 0, 20484, 0, 16421, 0, 28742, 0, 24679, 0, -31815, 0, -27752, 0, -23557, 0, -19494, 0, -15555, 0, -11492, 0, -7297, 0, -3234, 0, 689, 0, 4752, 0, 8947, 0, 13010, 0, 16949, 0, 21012, 0, 25207, 0, 29270, 0, -18966, 0, -23093, 0, -27224, 0, -31351, 0, -2706, 0, -6833, 0, -10964, 0, -15091, 0, 13538, 0, 9411, 0, 5280, 0, 1153, 0, 29798, 0, 25671, 0, 21540, 0, 17413, 0, -22565, 0, -18438, 0, -30823, 0, -26696, 0, -6305, 0, -2178, 0, -14563, 0, -10436, 0, 9939, 0, 14066, 0, 1681, 0, 5808, 0, 26199, 0, 30326, 0, 17941, 0, 22068, 0, -9908, 0, -13971, 0, -1778, 0, -5841, 0, -26168, 0, -30231, 0, -18038, 0, -22101, 0, 22596, 0, 18533, 0, 30726, 0, 26663, 0, 6336, 0, 2273, 0, 14466, 0, 10403, 0, -13443, 0, -9380, 0, -5313, 0, -1250, 0, -29703, 0, -25640, 0, -21573, 0, -17510, 0, 19061, 0, 23124, 0, 27191, 0, 31254, 0, 2801, 0, 6864, 0, 10931, 0, 14994, 0, -722, 0, -4849, 0, -8852, 0, -12979, 0, -16982, 0, -21109, 0, -25112, 0, -29239, 0, 31782, 0, 27655, 0, 23652, 0, 19525, 0, 15522, 0, 11395, 0, 7392, 0, 3265, 0, -4321, 0, -194, 0, -12451, 0, -8324, 0, -20581, 0, -16454, 0, -28711, 0, -24584, 0, 28183, 0, 32310, 0, 20053, 0, 24180, 0, 11923, 0, 16050, 0, 3793, 0, 7920, 0 ], [ "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0 ], ALLOC_NORMAL);
    _doc_a2b_uu = allocate([ 40, 97, 115, 99, 105, 105, 41, 32, 45, 62, 32, 98, 105, 110, 46, 32, 68, 101, 99, 111, 100, 101, 32, 97, 32, 108, 105, 110, 101, 32, 111, 102, 32, 117, 117, 101, 110, 99, 111, 100, 101, 100, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 115, 42, 58, 97, 50, 98, 95, 117, 117, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 97, 115, 99, 105, 105, 95, 108, 101, 110, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 98, 105, 110, 97, 115, 99, 105, 105, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8323 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 95, 97, 50, 98, 95, 117, 117, 0 ], "i8", ALLOC_NORMAL);
    _Error = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str3 = allocate([ 73, 108, 108, 101, 103, 97, 108, 32, 99, 104, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 84, 114, 97, 105, 108, 105, 110, 103, 32, 103, 97, 114, 98, 97, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    _doc_b2a_uu = allocate([ 40, 98, 105, 110, 41, 32, 45, 62, 32, 97, 115, 99, 105, 105, 46, 32, 85, 117, 101, 110, 99, 111, 100, 101, 32, 108, 105, 110, 101, 32, 111, 102, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 115, 42, 58, 98, 50, 97, 95, 117, 117, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 65, 116, 32, 109, 111, 115, 116, 32, 52, 53, 32, 98, 121, 116, 101, 115, 32, 97, 116, 32, 111, 110, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    _doc_a2b_base64 = allocate([ 40, 97, 115, 99, 105, 105, 41, 32, 45, 62, 32, 98, 105, 110, 46, 32, 68, 101, 99, 111, 100, 101, 32, 97, 32, 108, 105, 110, 101, 32, 111, 102, 32, 98, 97, 115, 101, 54, 52, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 115, 42, 58, 97, 50, 98, 95, 98, 97, 115, 101, 54, 52, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8505 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 95, 97, 50, 98, 95, 98, 97, 115, 101, 54, 52, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 73, 110, 99, 111, 114, 114, 101, 99, 116, 32, 112, 97, 100, 100, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate(1, "i8", ALLOC_NORMAL);
    _doc_b2a_base64 = allocate([ 40, 98, 105, 110, 41, 32, 45, 62, 32, 97, 115, 99, 105, 105, 46, 32, 66, 97, 115, 101, 54, 52, 45, 99, 111, 100, 101, 32, 108, 105, 110, 101, 32, 111, 102, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 115, 42, 58, 98, 50, 97, 95, 98, 97, 115, 101, 54, 52, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 98, 105, 110, 95, 108, 101, 110, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8609 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 95, 98, 50, 97, 95, 98, 97, 115, 101, 54, 52, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 84, 111, 111, 32, 109, 117, 99, 104, 32, 100, 97, 116, 97, 32, 102, 111, 114, 32, 98, 97, 115, 101, 54, 52, 32, 108, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    _doc_a2b_hqx = allocate([ 97, 115, 99, 105, 105, 32, 45, 62, 32, 98, 105, 110, 44, 32, 100, 111, 110, 101, 46, 32, 68, 101, 99, 111, 100, 101, 32, 46, 104, 113, 120, 32, 99, 111, 100, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 115, 42, 58, 97, 50, 98, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 108, 101, 110, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8689 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 95, 97, 50, 98, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    _Incomplete = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str15 = allocate([ 83, 116, 114, 105, 110, 103, 32, 104, 97, 115, 32, 105, 110, 99, 111, 109, 112, 108, 101, 116, 101, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 98, 121, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 79, 105, 0 ], "i8", ALLOC_NORMAL);
    _doc_rlecode_hqx = allocate([ 66, 105, 110, 104, 101, 120, 32, 82, 76, 69, 45, 99, 111, 100, 101, 32, 98, 105, 110, 97, 114, 121, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 115, 42, 58, 114, 108, 101, 99, 111, 100, 101, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8803 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 95, 114, 108, 101, 99, 111, 100, 101, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    _doc_b2a_hqx = allocate([ 69, 110, 99, 111, 100, 101, 32, 46, 104, 113, 120, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 115, 42, 58, 98, 50, 97, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8876 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 95, 98, 50, 97, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    _doc_rledecode_hqx = allocate([ 68, 101, 99, 111, 100, 101, 32, 104, 101, 120, 98, 105, 110, 32, 82, 76, 69, 45, 99, 111, 100, 101, 100, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 115, 42, 58, 114, 108, 101, 100, 101, 99, 111, 100, 101, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 105, 110, 95, 108, 101, 110, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8949 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 95, 114, 108, 101, 100, 101, 99, 111, 100, 101, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 79, 114, 112, 104, 97, 110, 101, 100, 32, 82, 76, 69, 32, 99, 111, 100, 101, 32, 97, 116, 32, 115, 116, 97, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    _doc_crc_hqx = allocate([ 40, 100, 97, 116, 97, 44, 32, 111, 108, 100, 99, 114, 99, 41, 32, 45, 62, 32, 110, 101, 119, 99, 114, 99, 46, 32, 67, 111, 109, 112, 117, 116, 101, 32, 104, 113, 120, 32, 67, 82, 67, 32, 105, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 115, 42, 105, 58, 99, 114, 99, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 105, 0 ], "i8", ALLOC_NORMAL);
    _doc_crc32 = allocate([ 40, 100, 97, 116, 97, 44, 32, 111, 108, 100, 99, 114, 99, 32, 61, 32, 48, 41, 32, 45, 62, 32, 110, 101, 119, 99, 114, 99, 46, 32, 67, 111, 109, 112, 117, 116, 101, 32, 67, 82, 67, 45, 51, 50, 32, 105, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    _crc_32_tab = allocate([ 0, 0, 0, 0, 1996959894, 0, 0, 0, -301047508, 0, 0, 0, -1727442502, 0, 0, 0, 124634137, 0, 0, 0, 1886057615, 0, 0, 0, -379345611, 0, 0, 0, -1637575261, 0, 0, 0, 249268274, 0, 0, 0, 2044508324, 0, 0, 0, -522852066, 0, 0, 0, -1747789432, 0, 0, 0, 162941995, 0, 0, 0, 2125561021, 0, 0, 0, -407360249, 0, 0, 0, -1866523247, 0, 0, 0, 498536548, 0, 0, 0, 1789927666, 0, 0, 0, -205950648, 0, 0, 0, -2067906082, 0, 0, 0, 450548861, 0, 0, 0, 1843258603, 0, 0, 0, -187386543, 0, 0, 0, -2083289657, 0, 0, 0, 325883990, 0, 0, 0, 1684777152, 0, 0, 0, -43845254, 0, 0, 0, -1973040660, 0, 0, 0, 335633487, 0, 0, 0, 1661365465, 0, 0, 0, -99664541, 0, 0, 0, -1928851979, 0, 0, 0, 997073096, 0, 0, 0, 1281953886, 0, 0, 0, -715111964, 0, 0, 0, -1570279054, 0, 0, 0, 1006888145, 0, 0, 0, 1258607687, 0, 0, 0, -770865667, 0, 0, 0, -1526024853, 0, 0, 0, 901097722, 0, 0, 0, 1119000684, 0, 0, 0, -608450090, 0, 0, 0, -1396901568, 0, 0, 0, 853044451, 0, 0, 0, 1172266101, 0, 0, 0, -589951537, 0, 0, 0, -1412350631, 0, 0, 0, 651767980, 0, 0, 0, 1373503546, 0, 0, 0, -925412992, 0, 0, 0, -1076862698, 0, 0, 0, 565507253, 0, 0, 0, 1454621731, 0, 0, 0, -809855591, 0, 0, 0, -1195530993, 0, 0, 0, 671266974, 0, 0, 0, 1594198024, 0, 0, 0, -972236366, 0, 0, 0, -1324619484, 0, 0, 0, 795835527, 0, 0, 0, 1483230225, 0, 0, 0, -1050600021, 0, 0, 0, -1234817731, 0, 0, 0, 1994146192, 0, 0, 0, 31158534, 0, 0, 0, -1731059524, 0, 0, 0, -271249366, 0, 0, 0, 1907459465, 0, 0, 0, 112637215, 0, 0, 0, -1614814043, 0, 0, 0, -390540237, 0, 0, 0, 2013776290, 0, 0, 0, 251722036, 0, 0, 0, -1777751922, 0, 0, 0, -519137256, 0, 0, 0, 2137656763, 0, 0, 0, 141376813, 0, 0, 0, -1855689577, 0, 0, 0, -429695999, 0, 0, 0, 1802195444, 0, 0, 0, 476864866, 0, 0, 0, -2056965928, 0, 0, 0, -228458418, 0, 0, 0, 1812370925, 0, 0, 0, 453092731, 0, 0, 0, -2113342271, 0, 0, 0, -183516073, 0, 0, 0, 1706088902, 0, 0, 0, 314042704, 0, 0, 0, -1950435094, 0, 0, 0, -54949764, 0, 0, 0, 1658658271, 0, 0, 0, 366619977, 0, 0, 0, -1932296973, 0, 0, 0, -69972891, 0, 0, 0, 1303535960, 0, 0, 0, 984961486, 0, 0, 0, -1547960204, 0, 0, 0, -725929758, 0, 0, 0, 1256170817, 0, 0, 0, 1037604311, 0, 0, 0, -1529756563, 0, 0, 0, -740887301, 0, 0, 0, 1131014506, 0, 0, 0, 879679996, 0, 0, 0, -1385723834, 0, 0, 0, -631195440, 0, 0, 0, 1141124467, 0, 0, 0, 855842277, 0, 0, 0, -1442165665, 0, 0, 0, -586318647, 0, 0, 0, 1342533948, 0, 0, 0, 654459306, 0, 0, 0, -1106571248, 0, 0, 0, -921952122, 0, 0, 0, 1466479909, 0, 0, 0, 544179635, 0, 0, 0, -1184443383, 0, 0, 0, -832445281, 0, 0, 0, 1591671054, 0, 0, 0, 702138776, 0, 0, 0, -1328506846, 0, 0, 0, -942167884, 0, 0, 0, 1504918807, 0, 0, 0, 783551873, 0, 0, 0, -1212326853, 0, 0, 0, -1061524307, 0, 0, 0, -306674912, 0, 0, 0, -1698712650, 0, 0, 0, 62317068, 0, 0, 0, 1957810842, 0, 0, 0, -355121351, 0, 0, 0, -1647151185, 0, 0, 0, 81470997, 0, 0, 0, 1943803523, 0, 0, 0, -480048366, 0, 0, 0, -1805370492, 0, 0, 0, 225274430, 0, 0, 0, 2053790376, 0, 0, 0, -468791541, 0, 0, 0, -1828061283, 0, 0, 0, 167816743, 0, 0, 0, 2097651377, 0, 0, 0, -267414716, 0, 0, 0, -2029476910, 0, 0, 0, 503444072, 0, 0, 0, 1762050814, 0, 0, 0, -144550051, 0, 0, 0, -2140837941, 0, 0, 0, 426522225, 0, 0, 0, 1852507879, 0, 0, 0, -19653770, 0, 0, 0, -1982649376, 0, 0, 0, 282753626, 0, 0, 0, 1742555852, 0, 0, 0, -105259153, 0, 0, 0, -1900089351, 0, 0, 0, 397917763, 0, 0, 0, 1622183637, 0, 0, 0, -690576408, 0, 0, 0, -1580100738, 0, 0, 0, 953729732, 0, 0, 0, 1340076626, 0, 0, 0, -776247311, 0, 0, 0, -1497606297, 0, 0, 0, 1068828381, 0, 0, 0, 1219638859, 0, 0, 0, -670225446, 0, 0, 0, -1358292148, 0, 0, 0, 906185462, 0, 0, 0, 1090812512, 0, 0, 0, -547295293, 0, 0, 0, -1469587627, 0, 0, 0, 829329135, 0, 0, 0, 1181335161, 0, 0, 0, -882789492, 0, 0, 0, -1134132454, 0, 0, 0, 628085408, 0, 0, 0, 1382605366, 0, 0, 0, -871598187, 0, 0, 0, -1156888829, 0, 0, 0, 570562233, 0, 0, 0, 1426400815, 0, 0, 0, -977650754, 0, 0, 0, -1296233688, 0, 0, 0, 733239954, 0, 0, 0, 1555261956, 0, 0, 0, -1026031705, 0, 0, 0, -1244606671, 0, 0, 0, 752459403, 0, 0, 0, 1541320221, 0, 0, 0, -1687895376, 0, 0, 0, -328994266, 0, 0, 0, 1969922972, 0, 0, 0, 40735498, 0, 0, 0, -1677130071, 0, 0, 0, -351390145, 0, 0, 0, 1913087877, 0, 0, 0, 83908371, 0, 0, 0, -1782625662, 0, 0, 0, -491226604, 0, 0, 0, 2075208622, 0, 0, 0, 213261112, 0, 0, 0, -1831694693, 0, 0, 0, -438977011, 0, 0, 0, 2094854071, 0, 0, 0, 198958881, 0, 0, 0, -2032938284, 0, 0, 0, -237706686, 0, 0, 0, 1759359992, 0, 0, 0, 534414190, 0, 0, 0, -2118248755, 0, 0, 0, -155638181, 0, 0, 0, 1873836001, 0, 0, 0, 414664567, 0, 0, 0, -2012718362, 0, 0, 0, -15766928, 0, 0, 0, 1711684554, 0, 0, 0, 285281116, 0, 0, 0, -1889165569, 0, 0, 0, -127750551, 0, 0, 0, 1634467795, 0, 0, 0, 376229701, 0, 0, 0, -1609899400, 0, 0, 0, -686959890, 0, 0, 0, 1308918612, 0, 0, 0, 956543938, 0, 0, 0, -1486412191, 0, 0, 0, -799009033, 0, 0, 0, 1231636301, 0, 0, 0, 1047427035, 0, 0, 0, -1362007478, 0, 0, 0, -640263460, 0, 0, 0, 1088359270, 0, 0, 0, 936918e3, 0, 0, 0, -1447252397, 0, 0, 0, -558129467, 0, 0, 0, 1202900863, 0, 0, 0, 817233897, 0, 0, 0, -1111625188, 0, 0, 0, -893730166, 0, 0, 0, 1404277552, 0, 0, 0, 615818150, 0, 0, 0, -1160759803, 0, 0, 0, -841546093, 0, 0, 0, 1423857449, 0, 0, 0, 601450431, 0, 0, 0, -1285129682, 0, 0, 0, -1000256840, 0, 0, 0, 1567103746, 0, 0, 0, 711928724, 0, 0, 0, -1274298825, 0, 0, 0, -1022587231, 0, 0, 0, 1510334235, 0, 0, 0, 755167117, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str24 = allocate([ 115, 42, 124, 73, 58, 99, 114, 99, 51, 50, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 115, 42, 58, 98, 50, 97, 95, 104, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 97, 114, 103, 108, 101, 110, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9264 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 95, 104, 101, 120, 108, 105, 102, 121, 0 ], "i8", ALLOC_NORMAL);
    _doc_hexlify = allocate([ 98, 50, 97, 95, 104, 101, 120, 40, 100, 97, 116, 97, 41, 32, 45, 62, 32, 115, 59, 32, 72, 101, 120, 97, 100, 101, 99, 105, 109, 97, 108, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 98, 105, 110, 97, 114, 121, 32, 100, 97, 116, 97, 46, 10, 10, 84, 104, 105, 115, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 32, 97, 108, 115, 111, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 97, 115, 32, 34, 104, 101, 120, 108, 105, 102, 121, 40, 41, 34, 46, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 115, 42, 58, 97, 50, 98, 95, 104, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9339 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 95, 117, 110, 104, 101, 120, 108, 105, 102, 121, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 79, 100, 100, 45, 108, 101, 110, 103, 116, 104, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 78, 111, 110, 45, 104, 101, 120, 97, 100, 101, 99, 105, 109, 97, 108, 32, 100, 105, 103, 105, 116, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _doc_unhexlify = allocate([ 97, 50, 98, 95, 104, 101, 120, 40, 104, 101, 120, 115, 116, 114, 41, 32, 45, 62, 32, 115, 59, 32, 66, 105, 110, 97, 114, 121, 32, 100, 97, 116, 97, 32, 111, 102, 32, 104, 101, 120, 97, 100, 101, 99, 105, 109, 97, 108, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 46, 10, 10, 104, 101, 120, 115, 116, 114, 32, 109, 117, 115, 116, 32, 99, 111, 110, 116, 97, 105, 110, 32, 97, 110, 32, 101, 118, 101, 110, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 104, 101, 120, 32, 100, 105, 103, 105, 116, 115, 32, 40, 117, 112, 112, 101, 114, 32, 111, 114, 32, 108, 111, 119, 101, 114, 32, 99, 97, 115, 101, 41, 46, 10, 84, 104, 105, 115, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 32, 97, 108, 115, 111, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 97, 115, 32, 34, 117, 110, 104, 101, 120, 108, 105, 102, 121, 40, 41, 34, 0 ], "i8", ALLOC_NORMAL);
    _table_hex = allocate([ -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 6, 0, 0, 0, 7, 0, 0, 0, 8, 0, 0, 0, 9, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 10, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 14, 0, 0, 0, 15, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 10, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 14, 0, 0, 0, 15, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    _doc_a2b_qp = allocate([ 68, 101, 99, 111, 100, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 113, 112, 45, 101, 110, 99, 111, 100, 101, 100, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 115, 42, 124, 105, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9405 = allocate(12, "i8*", ALLOC_NORMAL);
    __str31 = allocate([ 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 104, 101, 97, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 0 ], "i8", ALLOC_NORMAL);
    _doc_b2a_qp = allocate([ 98, 50, 97, 95, 113, 112, 40, 100, 97, 116, 97, 44, 32, 113, 117, 111, 116, 101, 116, 97, 98, 115, 61, 48, 44, 32, 105, 115, 116, 101, 120, 116, 61, 49, 44, 32, 104, 101, 97, 100, 101, 114, 61, 48, 41, 32, 45, 62, 32, 115, 59, 32, 10, 32, 69, 110, 99, 111, 100, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 117, 115, 105, 110, 103, 32, 113, 117, 111, 116, 101, 100, 45, 112, 114, 105, 110, 116, 97, 98, 108, 101, 32, 101, 110, 99, 111, 100, 105, 110, 103, 46, 32, 10, 10, 79, 110, 32, 101, 110, 99, 111, 100, 105, 110, 103, 44, 32, 119, 104, 101, 110, 32, 105, 115, 116, 101, 120, 116, 32, 105, 115, 32, 115, 101, 116, 44, 32, 110, 101, 119, 108, 105, 110, 101, 115, 32, 97, 114, 101, 32, 110, 111, 116, 32, 101, 110, 99, 111, 100, 101, 100, 44, 32, 97, 110, 100, 32, 119, 104, 105, 116, 101, 32, 10, 115, 112, 97, 99, 101, 32, 97, 116, 32, 101, 110, 100, 32, 111, 102, 32, 108, 105, 110, 101, 115, 32, 105, 115, 46, 32, 32, 87, 104, 101, 110, 32, 105, 115, 116, 101, 120, 116, 32, 105, 115, 32, 110, 111, 116, 32, 115, 101, 116, 44, 32, 92, 114, 32, 97, 110, 100, 32, 92, 110, 32, 40, 67, 82, 47, 76, 70, 41, 32, 97, 114, 101, 32, 10, 98, 111, 116, 104, 32, 101, 110, 99, 111, 100, 101, 100, 46, 32, 32, 87, 104, 101, 110, 32, 113, 117, 111, 116, 101, 116, 97, 98, 115, 32, 105, 115, 32, 115, 101, 116, 44, 32, 115, 112, 97, 99, 101, 32, 97, 110, 100, 32, 116, 97, 98, 115, 32, 97, 114, 101, 32, 101, 110, 99, 111, 100, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 115, 42, 124, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9526 = allocate(20, "i8*", ALLOC_NORMAL);
    __str35 = allocate([ 113, 117, 111, 116, 101, 116, 97, 98, 115, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 105, 115, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 97, 50, 98, 95, 117, 117, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 98, 50, 97, 95, 117, 117, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 97, 50, 98, 95, 98, 97, 115, 101, 54, 52, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 98, 50, 97, 95, 98, 97, 115, 101, 54, 52, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 97, 50, 98, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 98, 50, 97, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 98, 50, 97, 95, 104, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 97, 50, 98, 95, 104, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 104, 101, 120, 108, 105, 102, 121, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 117, 110, 104, 101, 120, 108, 105, 102, 121, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 114, 108, 101, 99, 111, 100, 101, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 114, 108, 101, 100, 101, 99, 111, 100, 101, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 99, 114, 99, 95, 104, 113, 120, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 99, 114, 99, 51, 50, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 97, 50, 98, 95, 113, 112, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 98, 50, 97, 95, 113, 112, 0 ], "i8", ALLOC_NORMAL);
    _binascii_module_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _doc_binascii = allocate([ 67, 111, 110, 118, 101, 114, 115, 105, 111, 110, 32, 98, 101, 116, 119, 101, 101, 110, 32, 98, 105, 110, 97, 114, 121, 32, 100, 97, 116, 97, 32, 97, 110, 100, 32, 65, 83, 67, 73, 73, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 95, 95, 100, 111, 99, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 46, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 98, 105, 110, 97, 115, 99, 105, 105, 46, 73, 110, 99, 111, 109, 112, 108, 101, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 73, 110, 99, 111, 109, 112, 108, 101, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_kwlist_9405] = __str31;
    HEAP[_kwlist_9405 + 4] = __str32;
    HEAP[_kwlist_9526] = __str31;
    HEAP[_kwlist_9526 + 4] = __str35;
    HEAP[_kwlist_9526 + 8] = __str36;
    HEAP[_kwlist_9526 + 12] = __str32;
    HEAP[_binascii_module_methods] = __str37;
    HEAP[_binascii_module_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_binascii_module_methods + 12] = _doc_a2b_uu;
    HEAP[_binascii_module_methods + 16] = __str38;
    HEAP[_binascii_module_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_binascii_module_methods + 28] = _doc_b2a_uu;
    HEAP[_binascii_module_methods + 32] = __str39;
    HEAP[_binascii_module_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_binascii_module_methods + 44] = _doc_a2b_base64;
    HEAP[_binascii_module_methods + 48] = __str40;
    HEAP[_binascii_module_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_binascii_module_methods + 60] = _doc_b2a_base64;
    HEAP[_binascii_module_methods + 64] = __str41;
    HEAP[_binascii_module_methods + 68] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_binascii_module_methods + 76] = _doc_a2b_hqx;
    HEAP[_binascii_module_methods + 80] = __str42;
    HEAP[_binascii_module_methods + 84] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_binascii_module_methods + 92] = _doc_b2a_hqx;
    HEAP[_binascii_module_methods + 96] = __str43;
    HEAP[_binascii_module_methods + 100] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_binascii_module_methods + 108] = _doc_hexlify;
    HEAP[_binascii_module_methods + 112] = __str44;
    HEAP[_binascii_module_methods + 116] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_binascii_module_methods + 124] = _doc_unhexlify;
    HEAP[_binascii_module_methods + 128] = __str45;
    HEAP[_binascii_module_methods + 132] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_binascii_module_methods + 140] = _doc_hexlify;
    HEAP[_binascii_module_methods + 144] = __str46;
    HEAP[_binascii_module_methods + 148] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_binascii_module_methods + 156] = _doc_unhexlify;
    HEAP[_binascii_module_methods + 160] = __str47;
    HEAP[_binascii_module_methods + 164] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_binascii_module_methods + 172] = _doc_rlecode_hqx;
    HEAP[_binascii_module_methods + 176] = __str48;
    HEAP[_binascii_module_methods + 180] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_binascii_module_methods + 188] = _doc_rledecode_hqx;
    HEAP[_binascii_module_methods + 192] = __str49;
    HEAP[_binascii_module_methods + 196] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_binascii_module_methods + 204] = _doc_crc_hqx;
    HEAP[_binascii_module_methods + 208] = __str50;
    HEAP[_binascii_module_methods + 212] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_binascii_module_methods + 220] = _doc_crc32;
    HEAP[_binascii_module_methods + 224] = __str51;
    HEAP[_binascii_module_methods + 228] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_binascii_module_methods + 236] = _doc_a2b_qp;
    HEAP[_binascii_module_methods + 240] = __str52;
    HEAP[_binascii_module_methods + 244] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_binascii_module_methods + 252] = _doc_b2a_qp;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
