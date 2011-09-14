"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 160;
  var $1___SIZE = 20;
  var $2___SIZE = 180;
  var $3___SIZE = 196;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyEncoderObject___SIZE = 48;
  var $struct_PyFloatObject___SIZE = 16;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyInterpreterState___SIZE = 40;
  var $struct_PyListObject___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PyScannerObject___SIZE = 36;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyThreadState___SIZE = 84;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_PyUnicodeObject___SIZE = 24;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__frame___SIZE = 0;
  var $struct__frame___FLATTENER = [];
  var $struct__typeobject___SIZE = 196;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var _scanner_members;
  var __str7;
  var __str8;
  var __str9;
  var __str10;
  var __str11;
  var __str12;
  var __str13;
  var __str14;
  var _encoder_members;
  var __str15;
  var _errmsg_fn_8641;
  var __str16;
  var __str17;
  var __str18;
  var _joinfn_8675;
  var __str19;
  var __str20;
  var __str21;
  var __str22;
  var __str23;
  var __str24;
  var _pydoc_scanstring;
  var __str25;
  var __str26;
  var __str27;
  var _pydoc_encode_basestring_ascii;
  var __str28;
  var __str29;
  var ___PRETTY_FUNCTION___9208;
  var ___PRETTY_FUNCTION___9278;
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
  var ___PRETTY_FUNCTION___10703;
  var __str41;
  var _kwlist_10701;
  var __str42;
  var __str43;
  var ___PRETTY_FUNCTION___10762;
  var __str44;
  var _kwlist_10760;
  var __str45;
  var _scanner_doc;
  var __str46;
  var _PyScannerType;
  var __str47;
  var ___PRETTY_FUNCTION___10949;
  var __str48;
  var _kwlist_10938;
  var __str49;
  var ___PRETTY_FUNCTION___11015;
  var __str50;
  var _kwlist_11010;
  var __str51;
  var __str52;
  var _s_null_11046;
  var __str53;
  var _s_true_11047;
  var __str54;
  var _s_false_11048;
  var __str55;
  var __str56;
  var __str57;
  var __str58;
  var __str59;
  var _open_dict_11341;
  var _close_dict_11342;
  var _empty_dict_11343;
  var __str60;
  var __str61;
  var __str62;
  var __str63;
  var _open_array_11600;
  var _close_array_11601;
  var _empty_array_11602;
  var __str64;
  var __str65;
  var __str66;
  var __str67;
  var ___PRETTY_FUNCTION___11738;
  var ___PRETTY_FUNCTION___11816;
  var _encoder_doc;
  var __str68;
  var _PyEncoderType;
  var _speedups_methods;
  var __str69;
  var __str70;
  var _module_doc;
  var __str71;
  var __str72;
  var __str73;
  function __convertPyInt_AsSsize_t($o, $size_ptr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $o_addr;
      var $size_ptr_addr;
      var $retval;
      var $0;
      $o_addr = $o;
      $size_ptr_addr = $size_ptr;
      
      var $2 = _PyInt_AsSsize_t($o_addr);
      
      HEAP[$size_ptr_addr] = $2;
      
      
      var $6 = HEAP[$size_ptr_addr] == -1;
      if ($6) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $7 = _PyErr_Occurred();
      
      if ($7 != 0) {
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
      $0 = 1;
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
  function __convertPyInt_FromSsize_t($size_ptr) {
    
    var $size_ptr_addr;
    var $retval;
    var $0;
    $size_ptr_addr = $size_ptr;
    
    var $2 = HEAP[$size_ptr_addr];
    var $3 = _PyInt_FromSsize_t($2);
    $0 = $3;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _ascii_escape_char($c, $output, $chars) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $c_addr;
      var $output_addr;
      var $chars_addr;
      var $retval;
      var $0;
      $c_addr = $c;
      $output_addr = $output;
      $chars_addr = $chars;
      
      
      
      HEAP[$output_addr + $chars_addr] = 92;
      
      var $5 = $chars_addr + 1;
      $chars_addr = $5;
      
      var $7 = $c_addr;
      if ($7 == 8) {
        __label__ = 3;
        break;
      } else if ($7 == 9) {
        __label__ = 7;
        break;
      } else if ($7 == 10) {
        __label__ = 5;
        break;
      } else if ($7 == 12) {
        __label__ = 4;
        break;
      } else if ($7 == 13) {
        __label__ = 6;
        break;
      } else if ($7 == 34) {
        __label__ = 2;
        break;
      } else if ($7 == 92) {
        __label__ = 1;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 1:
      
      
      
      
      
      HEAP[$output_addr + $chars_addr] = $c_addr & 255;
      
      var $14 = $chars_addr + 1;
      $chars_addr = $14;
      __label__ = 9;
      break;
     case 2:
      
      
      
      
      
      HEAP[$output_addr + $chars_addr] = $c_addr & 255;
      
      var $21 = $chars_addr + 1;
      $chars_addr = $21;
      __label__ = 9;
      break;
     case 3:
      
      
      
      HEAP[$output_addr + $chars_addr] = 98;
      
      var $26 = $chars_addr + 1;
      $chars_addr = $26;
      __label__ = 9;
      break;
     case 4:
      
      
      
      HEAP[$output_addr + $chars_addr] = 102;
      
      var $31 = $chars_addr + 1;
      $chars_addr = $31;
      __label__ = 9;
      break;
     case 5:
      
      
      
      HEAP[$output_addr + $chars_addr] = 110;
      
      var $36 = $chars_addr + 1;
      $chars_addr = $36;
      __label__ = 9;
      break;
     case 6:
      
      
      
      HEAP[$output_addr + $chars_addr] = 114;
      
      var $41 = $chars_addr + 1;
      $chars_addr = $41;
      __label__ = 9;
      break;
     case 7:
      
      
      
      HEAP[$output_addr + $chars_addr] = 116;
      
      var $46 = $chars_addr + 1;
      $chars_addr = $46;
      __label__ = 9;
      break;
     case 8:
      
      
      
      HEAP[$output_addr + $chars_addr] = 117;
      
      var $51 = $chars_addr + 1;
      $chars_addr = $51;
      
      
      
      
      
      var $57 = HEAP[__str15 + ($c_addr >>> 12 & 15)];
      
      
      
      HEAP[$output_addr + $chars_addr] = $57;
      
      var $62 = $chars_addr + 1;
      $chars_addr = $62;
      
      
      
      
      
      var $68 = HEAP[__str15 + ($c_addr >>> 8 & 15)];
      
      
      
      HEAP[$output_addr + $chars_addr] = $68;
      
      var $73 = $chars_addr + 1;
      $chars_addr = $73;
      
      
      
      
      
      var $79 = HEAP[__str15 + ($c_addr >>> 4 & 15)];
      
      
      
      HEAP[$output_addr + $chars_addr] = $79;
      
      var $84 = $chars_addr + 1;
      $chars_addr = $84;
      
      
      
      
      var $89 = HEAP[__str15 + ($c_addr & 15)];
      
      
      
      HEAP[$output_addr + $chars_addr] = $89;
      
      var $94 = $chars_addr + 1;
      $chars_addr = $94;
      __label__ = 9;
      break;
     case 9:
      
      $0 = $chars_addr;
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ascii_escape_unicode($pystr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pystr_addr;
      var $retval;
      var $0;
      var $i;
      var $input_chars;
      var $output_size;
      var $max_output_size;
      var $chars;
      var $rval = __stackBase__;
      var $output;
      var $input_unicode;
      var $c;
      var $new_output_size;
      $pystr_addr = $pystr;
      
      
      
      
      $input_chars = HEAP[$pystr_addr + 8];
      
      
      
      
      $input_unicode = HEAP[$pystr_addr + 12];
      
      
      $output_size = $input_chars + 26;
      
      
      
      $max_output_size = $input_chars * 6 + 2;
      
      var $15 = _PyString_FromStringAndSize(0, $output_size);
      HEAP[$rval] = $15;
      
      
      if (HEAP[$rval] == 0) {
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
      
      
      
      
      $output = HEAP[$rval] + 20;
      $chars = 0;
      
      
      
      HEAP[$output + $chars] = 34;
      
      var $26 = $chars + 1;
      $chars = $26;
      $i = 0;
      __label__ = 14;
      break;
     case 3:
      
      
      
      
      $c = HEAP[$input_unicode + 2 * $i];
      
      
      
      
      
      
      
      
      
      
      
      var $39 = $c;
      if ($c <= 31 | $c > 126 | $c == 92 | $c == 34) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      HEAP[$output + $chars] = $39 & 255;
      
      var $45 = $chars + 1;
      $chars = $45;
      __label__ = 6;
      break;
     case 5:
      
      
      
      
      var $50 = _ascii_escape_char($39 & 65535, $output, $chars);
      $chars = $50;
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if ($output_size - $chars <= 6) {
        __label__ = 7;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 7:
      
      
      $new_output_size = $output_size * 2;
      
      
      
      if ($new_output_size > $max_output_size) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      $new_output_size = $max_output_size;
      __label__ = 9;
      break;
     case 9:
      
      
      
      if ($new_output_size != $output_size) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      $output_size = $new_output_size;
      
      var $66 = __PyString_Resize($rval, $output_size);
      var $67 = $66 == -1;
      if ($67) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = 0;
      __label__ = 18;
      break;
     case 12:
      
      
      
      
      $output = HEAP[$rval] + 20;
      __label__ = 13;
      break;
     case 13:
      
      var $73 = $i + 1;
      $i = $73;
      __label__ = 14;
      break;
     case 14:
      
      
      
      if ($i < $input_chars) {
        __label__ = 3;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      HEAP[$output + $chars] = 34;
      
      var $81 = $chars + 1;
      $chars = $81;
      
      var $83 = __PyString_Resize($rval, $chars);
      var $84 = $83 == -1;
      if ($84) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $0 = 0;
      __label__ = 18;
      break;
     case 17:
      
      $0 = HEAP[$rval];
      __label__ = 18;
      break;
     case 18:
      
      $retval = $0;
      var $retval21 = $retval;
      STACKTOP = __stackBase__;
      return $retval21;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ascii_escape_str($pystr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pystr_addr;
      var $retval;
      var $0;
      var $i;
      var $input_chars;
      var $output_size;
      var $chars;
      var $rval = __stackBase__;
      var $output;
      var $input_str;
      var $c;
      var $j;
      var $uni;
      var $c23;
      $pystr_addr = $pystr;
      
      
      
      
      $input_chars = HEAP[$pystr_addr + 8];
      
      
      
      
      $input_str = $pystr_addr + 20;
      $i = 0;
      __label__ = 12;
      break;
     case 1:
      
      
      
      
      
      $c = HEAP[$input_str + $i];
      
      
      
      
      
      
      
      
      
      
      
      var $22 = $i;
      if ($c <= 31 | $c > 126 | $c == 92 | $c == 34) {
        __label__ = 2;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 2:
      $j = $22;
      __label__ = 10;
      break;
     case 3:
      
      
      
      
      
      $c = HEAP[$input_str + $j];
      
      
      if ($c > 127) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      
      
      var $32 = _PyUnicodeUCS2_DecodeUTF8($input_str, $input_chars, __str1);
      $uni = $32;
      
      
      if ($uni == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 33;
      break;
     case 6:
      
      var $36 = _ascii_escape_unicode($uni);
      HEAP[$rval] = $36;
      
      
      
      var $40 = HEAP[$uni] - 1;
      
      
      HEAP[$uni] = $40;
      
      
      
      
      if (HEAP[$uni] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $51 = HEAP[HEAP[$uni + 4] + 24];
      
      FUNCTION_TABLE[$51]($uni);
      __label__ = 8;
      break;
     case 8:
      
      $0 = HEAP[$rval];
      __label__ = 33;
      break;
     case 9:
      
      var $55 = $j + 1;
      $j = $55;
      __label__ = 10;
      break;
     case 10:
      
      
      
      if ($j < $input_chars) {
        __label__ = 3;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      var $59 = $22 + 1;
      $i = $59;
      __label__ = 12;
      break;
     case 12:
      
      
      
      if ($i < $input_chars) {
        __label__ = 1;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $66 = $input_chars;
      if ($i == $input_chars) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      $output_size = $66 + 2;
      __label__ = 16;
      break;
     case 15:
      
      $output_size = $66 + 26;
      __label__ = 16;
      break;
     case 16:
      
      var $70 = _PyString_FromStringAndSize(0, $output_size);
      HEAP[$rval] = $70;
      
      if ($70 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      $0 = 0;
      __label__ = 33;
      break;
     case 18:
      
      
      
      
      $output = HEAP[$rval] + 20;
      
      
      HEAP[$output] = 34;
      
      
      $chars = $i + 1;
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($output + 1, $input_str, $i, 1, 0);
      __label__ = 29;
      break;
     case 19:
      
      
      
      
      
      $c23 = HEAP[$input_str + $i];
      
      
      
      
      
      
      
      
      
      
      
      var $97 = $c23;
      if ($c23 <= 31 | $c23 > 126 | $c23 == 92 | $c23 == 34) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      HEAP[$output + $chars] = $97 & 255;
      
      var $103 = $chars + 1;
      $chars = $103;
      __label__ = 22;
      break;
     case 21:
      
      
      
      
      var $108 = _ascii_escape_char($97 & 65535, $output, $chars);
      $chars = $108;
      __label__ = 22;
      break;
     case 22:
      
      
      
      
      if ($output_size - $chars <= 6) {
        __label__ = 23;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 23:
      
      var $114 = $output_size * 2;
      $output_size = $114;
      
      
      
      
      
      if ($input_chars * 6 + 2 < $output_size) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      $output_size = $input_chars * 6 + 2;
      __label__ = 25;
      break;
     case 25:
      
      var $124 = __PyString_Resize($rval, $output_size);
      var $125 = $124 == -1;
      if ($125) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      $0 = 0;
      __label__ = 33;
      break;
     case 27:
      
      
      
      
      $output = HEAP[$rval] + 20;
      __label__ = 28;
      break;
     case 28:
      
      var $131 = $i + 1;
      $i = $131;
      __label__ = 29;
      break;
     case 29:
      
      
      
      if ($i < $input_chars) {
        __label__ = 19;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      HEAP[$output + $chars] = 34;
      
      var $139 = $chars + 1;
      $chars = $139;
      
      var $141 = __PyString_Resize($rval, $chars);
      var $142 = $141 == -1;
      if ($142) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      $0 = 0;
      __label__ = 33;
      break;
     case 32:
      
      $0 = HEAP[$rval];
      __label__ = 33;
      break;
     case 33:
      
      $retval = $0;
      var $retval41 = $retval;
      STACKTOP = __stackBase__;
      return $retval41;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _raise_errmsg($msg, $s, $end) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $msg_addr;
      var $s_addr;
      var $end_addr = __stackBase__;
      var $pymsg;
      var $decoder;
      $msg_addr = $msg;
      $s_addr = $s;
      HEAP[$end_addr] = $end;
      
      
      if (HEAP[_errmsg_fn_8641] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      var $2 = _PyImport_ImportModule(__str16);
      $decoder = $2;
      
      
      if ($decoder == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      var $6 = _PyObject_GetAttrString($decoder, __str17);
      HEAP[_errmsg_fn_8641] = $6;
      
      
      
      var $10 = HEAP[$decoder] - 1;
      
      
      HEAP[$decoder] = $10;
      
      
      
      
      if (HEAP[$decoder] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $21 = HEAP[HEAP[$decoder + 4] + 24];
      
      FUNCTION_TABLE[$21]($decoder);
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[_errmsg_fn_8641] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $25 = HEAP[_errmsg_fn_8641];
      
      
      var $28 = _PyObject_CallFunction($25, __str18, allocate([ $msg_addr, 0, 0, 0, $s_addr, 0, 0, 0, FUNCTION_TABLE_OFFSET + 2, 0, 0, 0, $end_addr, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (i32*)*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      $pymsg = $28;
      
      if ($28 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      var $30 = HEAP[_PyExc_ValueError];
      
      _PyErr_SetObject($30, $pymsg);
      
      
      
      var $35 = HEAP[$pymsg] - 1;
      
      
      HEAP[$pymsg] = $35;
      
      
      
      
      if (HEAP[$pymsg] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $46 = HEAP[HEAP[$pymsg + 4] + 24];
      
      FUNCTION_TABLE[$46]($pymsg);
      __label__ = 8;
      break;
     case 8:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _join_list_unicode($lst) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lst_addr;
      var $retval;
      var $0;
      var $ustr;
      $lst_addr = $lst;
      
      
      if (HEAP[_joinfn_8675] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      var $3 = _PyUnicodeUCS2_FromUnicode(0, 0);
      $ustr = $3;
      
      
      if ($ustr == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 8;
      break;
     case 3:
      
      var $7 = _PyObject_GetAttrString($ustr, __str19);
      HEAP[_joinfn_8675] = $7;
      
      
      
      var $11 = HEAP[$ustr] - 1;
      
      
      HEAP[$ustr] = $11;
      
      
      
      
      if (HEAP[$ustr] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $22 = HEAP[HEAP[$ustr + 4] + 24];
      
      FUNCTION_TABLE[$22]($ustr);
      __label__ = 5;
      break;
     case 5:
      
      
      if (HEAP[_joinfn_8675] == 0) {
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
      var $26 = HEAP[_joinfn_8675];
      
      var $28 = _PyObject_CallFunctionObjArgs($26, allocate([ $lst_addr, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $28;
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
  function __build_rval_index_tuple($rval, $idx) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $rval_addr;
      var $idx_addr;
      var $retval;
      var $0;
      var $tpl;
      var $pyidx;
      $rval_addr = $rval;
      $idx_addr = $idx;
      
      
      if ($rval_addr == 0) {
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
      
      var $4 = _PyInt_FromSsize_t($idx_addr);
      $pyidx = $4;
      
      
      if ($pyidx == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      var $10 = HEAP[$rval_addr] - 1;
      
      
      HEAP[$rval_addr] = $10;
      
      
      
      
      if (HEAP[$rval_addr] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $21 = HEAP[HEAP[$rval_addr + 4] + 24];
      
      FUNCTION_TABLE[$21]($rval_addr);
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      __label__ = 13;
      break;
     case 6:
      var $23 = _PyTuple_New(2);
      $tpl = $23;
      
      
      if ($tpl == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      
      
      
      var $29 = HEAP[$pyidx] - 1;
      
      
      HEAP[$pyidx] = $29;
      
      
      
      
      if (HEAP[$pyidx] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $40 = HEAP[HEAP[$pyidx + 4] + 24];
      
      FUNCTION_TABLE[$40]($pyidx);
      __label__ = 9;
      break;
     case 9:
      
      
      
      var $45 = HEAP[$rval_addr] - 1;
      
      
      HEAP[$rval_addr] = $45;
      
      
      
      
      if (HEAP[$rval_addr] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $56 = HEAP[HEAP[$rval_addr + 4] + 24];
      
      FUNCTION_TABLE[$56]($rval_addr);
      __label__ = 11;
      break;
     case 11:
      $0 = 0;
      __label__ = 13;
      break;
     case 12:
      
      
      
      
      
      HEAP[$tpl + 12] = $rval_addr;
      
      
      
      
      
      HEAP[$tpl + 12 + 4] = $pyidx;
      
      $0 = $tpl;
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
  function _scanstring_str($pystr, $end, $encoding, $strict, $next_end_ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 2;
    _memset(__stackBase__, 0, 2);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pystr_addr;
      var $end_addr;
      var $encoding_addr;
      var $strict_addr;
      var $next_end_ptr_addr;
      var $retval;
      var $0;
      var $rval;
      var $len;
      var $begin;
      var $next;
      var $buf;
      var $chunks;
      var $c = __stackBase__;
      var $chunk;
      var $strchunk;
      var $digit;
      var $_py_tmp;
      $pystr_addr = $pystr;
      $end_addr = $end;
      $encoding_addr = $encoding;
      $strict_addr = $strict;
      $next_end_ptr_addr = $next_end_ptr;
      
      
      
      
      $len = HEAP[$pystr_addr + 8];
      
      
      $begin = $end_addr - 1;
      
      
      
      
      $buf = $pystr_addr + 20;
      var $11 = _PyList_New(0);
      $chunks = $11;
      
      
      if ($chunks == 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($end_addr < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      if ($len <= $end_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $19 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($19, __str20);
      __label__ = 56;
      break;
     case 4:
      HEAP[$c] = 0;
      $chunk = 0;
      
      $next = $end_addr;
      __label__ = 10;
      break;
     case 5:
      
      
      
      
      var $25 = HEAP[$buf + $next];
      HEAP[$c] = $25;
      
      
      
      
      
      if (HEAP[$c] == 34 | HEAP[$c] == 92) {
        __label__ = 11;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if ($strict_addr != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      if (HEAP[$c] <= 31) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      _raise_errmsg(__str21, $pystr_addr, $next);
      __label__ = 56;
      break;
     case 9:
      
      var $37 = $next + 1;
      $next = $37;
      __label__ = 10;
      break;
     case 10:
      
      
      
      if ($next < $len) {
        __label__ = 5;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      if (HEAP[$c] != 34 & HEAP[$c] != 92) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      _raise_errmsg(__str22, $pystr_addr, $begin);
      __label__ = 56;
      break;
     case 13:
      
      
      
      if ($next != $end_addr) {
        __label__ = 14;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 14:
      
      
      
      
      
      
      var $56 = _PyString_FromStringAndSize($buf + $end_addr, $next - $end_addr);
      $strchunk = $56;
      
      
      if ($strchunk == 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      var $61 = _PyUnicodeUCS2_FromEncodedObject($strchunk, $encoding_addr, 0);
      $chunk = $61;
      
      
      
      var $65 = HEAP[$strchunk] - 1;
      
      
      HEAP[$strchunk] = $65;
      
      
      
      
      if (HEAP[$strchunk] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $76 = HEAP[HEAP[$strchunk + 4] + 24];
      
      FUNCTION_TABLE[$76]($strchunk);
      __label__ = 17;
      break;
     case 17:
      
      
      if ($chunk == 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      var $82 = _PyList_Append($chunks, $chunk);
      var $83 = $82 != 0;
      
      
      
      var $87 = HEAP[$chunk] - 1;
      
      
      HEAP[$chunk] = $87;
      
      
      
      var $93 = HEAP[$chunk] == 0;
      if ($83) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      if ($93) {
        __label__ = 20;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 20:
      
      
      
      
      var $98 = HEAP[HEAP[$chunk + 4] + 24];
      
      FUNCTION_TABLE[$98]($chunk);
      __label__ = 56;
      break;
     case 21:
      if ($93) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $104 = HEAP[HEAP[$chunk + 4] + 24];
      
      FUNCTION_TABLE[$104]($chunk);
      __label__ = 23;
      break;
     case 23:
      
      var $107 = $next + 1;
      $next = $107;
      
      
      var $110 = $next;
      if (HEAP[$c] == 34) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      $end_addr = $110;
      
      var $112 = _join_list_unicode($chunks);
      $rval = $112;
      
      
      if ($rval == 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 25:
      
      
      if ($110 == $len) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      _raise_errmsg(__str22, $pystr_addr, $begin);
      __label__ = 56;
      break;
     case 27:
      
      
      
      
      var $123 = HEAP[$buf + $next];
      HEAP[$c] = $123;
      
      
      if (HEAP[$c] != 117) {
        __label__ = 28;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 28:
      
      
      $end_addr = $next + 1;
      var $128 = HEAP[$c];
      var $129 = $128;
      if ($129 == 34) {
        __label__ = 35;
        break;
      } else if ($129 == 47) {
        __label__ = 35;
        break;
      } else if ($129 == 92) {
        __label__ = 35;
        break;
      } else if ($129 == 98) {
        __label__ = 29;
        break;
      } else if ($129 == 102) {
        __label__ = 30;
        break;
      } else if ($129 == 110) {
        __label__ = 31;
        break;
      } else if ($129 == 114) {
        __label__ = 32;
        break;
      } else if ($129 == 116) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 29:
      HEAP[$c] = 8;
      __label__ = 46;
      break;
     case 30:
      HEAP[$c] = 12;
      __label__ = 46;
      break;
     case 31:
      HEAP[$c] = 10;
      __label__ = 46;
      break;
     case 32:
      HEAP[$c] = 13;
      __label__ = 46;
      break;
     case 33:
      HEAP[$c] = 9;
      __label__ = 46;
      break;
     case 34:
      HEAP[$c] = 0;
      __label__ = 36;
      break;
     case 35:
      
      if ($128 == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 36:
      
      
      
      _raise_errmsg(__str23, $pystr_addr, $end_addr - 2);
      __label__ = 56;
      break;
     case 37:
      HEAP[$c] = 0;
      
      var $135 = $next + 1;
      $next = $135;
      
      
      $end_addr = $next + 4;
      
      
      
      if ($end_addr >= $len) {
        __label__ = 38;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 38:
      
      
      
      _raise_errmsg(__str24, $pystr_addr, $next - 1);
      __label__ = 56;
      break;
     case 39:
      
      
      
      
      
      $digit = HEAP[$buf + $next];
      
      var $150 = HEAP[$c] << 4;
      HEAP[$c] = $150;
      
      var $152 = $digit;
      if ($152 == 48) {
        __label__ = 40;
        break;
      } else if ($152 == 49) {
        __label__ = 40;
        break;
      } else if ($152 == 50) {
        __label__ = 40;
        break;
      } else if ($152 == 51) {
        __label__ = 40;
        break;
      } else if ($152 == 52) {
        __label__ = 40;
        break;
      } else if ($152 == 53) {
        __label__ = 40;
        break;
      } else if ($152 == 54) {
        __label__ = 40;
        break;
      } else if ($152 == 55) {
        __label__ = 40;
        break;
      } else if ($152 == 56) {
        __label__ = 40;
        break;
      } else if ($152 == 57) {
        __label__ = 40;
        break;
      } else if ($152 == 65) {
        __label__ = 42;
        break;
      } else if ($152 == 66) {
        __label__ = 42;
        break;
      } else if ($152 == 67) {
        __label__ = 42;
        break;
      } else if ($152 == 68) {
        __label__ = 42;
        break;
      } else if ($152 == 69) {
        __label__ = 42;
        break;
      } else if ($152 == 70) {
        __label__ = 42;
        break;
      } else if ($152 == 97) {
        __label__ = 41;
        break;
      } else if ($152 == 98) {
        __label__ = 41;
        break;
      } else if ($152 == 99) {
        __label__ = 41;
        break;
      } else if ($152 == 100) {
        __label__ = 41;
        break;
      } else if ($152 == 101) {
        __label__ = 41;
        break;
      } else if ($152 == 102) {
        __label__ = 41;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 40:
      
      
      
      var $156 = $digit - 48 | HEAP[$c];
      HEAP[$c] = $156;
      __label__ = 44;
      break;
     case 41:
      
      
      
      var $160 = $digit - 87 | HEAP[$c];
      HEAP[$c] = $160;
      __label__ = 44;
      break;
     case 42:
      
      
      
      var $164 = $digit - 55 | HEAP[$c];
      HEAP[$c] = $164;
      __label__ = 44;
      break;
     case 43:
      
      
      
      _raise_errmsg(__str24, $pystr_addr, $end_addr - 5);
      __label__ = 56;
      break;
     case 44:
      
      var $169 = $next + 1;
      $next = $169;
      __label__ = 45;
      break;
     case 45:
      
      
      
      if ($next < $end_addr) {
        __label__ = 39;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 46:
      var $173 = _PyUnicodeUCS2_FromUnicode($c, 1);
      $chunk = $173;
      
      if ($173 == 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 47:
      
      
      var $177 = _PyList_Append($chunks, $chunk);
      var $178 = $177 != 0;
      
      
      
      var $182 = HEAP[$chunk] - 1;
      
      
      HEAP[$chunk] = $182;
      
      
      
      var $188 = HEAP[$chunk] == 0;
      if ($178) {
        __label__ = 48;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 48:
      if ($188) {
        __label__ = 49;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 49:
      
      
      
      
      var $193 = HEAP[HEAP[$chunk + 4] + 24];
      
      FUNCTION_TABLE[$193]($chunk);
      __label__ = 56;
      break;
     case 50:
      if ($188) {
        __label__ = 51;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 51:
      
      
      
      
      var $199 = HEAP[HEAP[$chunk + 4] + 24];
      
      FUNCTION_TABLE[$199]($chunk);
      __label__ = 4;
      break;
     case 52:
      
      
      if ($chunks != 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 53:
      
      $_py_tmp = $chunks;
      $chunks = 0;
      
      
      
      var $207 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $207;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      
      
      
      
      var $218 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$218]($_py_tmp);
      __label__ = 55;
      break;
     case 55:
      
      
      HEAP[$next_end_ptr_addr] = $end_addr;
      
      $0 = $rval;
      __label__ = 60;
      break;
     case 56:
      
      HEAP[$next_end_ptr_addr] = -1;
      
      
      if ($chunks != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 57:
      
      
      
      var $229 = HEAP[$chunks] - 1;
      
      
      HEAP[$chunks] = $229;
      
      
      
      
      if (HEAP[$chunks] == 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 58:
      
      
      
      
      var $240 = HEAP[HEAP[$chunks + 4] + 24];
      
      FUNCTION_TABLE[$240]($chunks);
      __label__ = 59;
      break;
     case 59:
      $0 = 0;
      __label__ = 60;
      break;
     case 60:
      
      $retval = $0;
      var $retval69 = $retval;
      STACKTOP = __stackBase__;
      return $retval69;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _scanstring_unicode($pystr, $end, $strict, $next_end_ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 2;
    _memset(__stackBase__, 0, 2);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pystr_addr;
      var $end_addr;
      var $strict_addr;
      var $next_end_ptr_addr;
      var $retval;
      var $0;
      var $rval;
      var $len;
      var $begin;
      var $next;
      var $buf;
      var $chunks;
      var $c = __stackBase__;
      var $chunk;
      var $digit;
      $pystr_addr = $pystr;
      $end_addr = $end;
      $strict_addr = $strict;
      $next_end_ptr_addr = $next_end_ptr;
      
      
      
      
      $len = HEAP[$pystr_addr + 8];
      
      
      $begin = $end_addr - 1;
      
      
      
      
      $buf = HEAP[$pystr_addr + 12];
      var $11 = _PyList_New(0);
      $chunks = $11;
      
      
      if ($chunks == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($end_addr < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      if ($len <= $end_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $19 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($19, __str20);
      __label__ = 52;
      break;
     case 4:
      HEAP[$c] = 0;
      $chunk = 0;
      
      $next = $end_addr;
      __label__ = 10;
      break;
     case 5:
      
      
      
      var $24 = HEAP[$buf + 2 * $next];
      HEAP[$c] = $24;
      
      
      
      
      
      if (HEAP[$c] == 34 | HEAP[$c] == 92) {
        __label__ = 11;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if ($strict_addr != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      if (HEAP[$c] <= 31) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      _raise_errmsg(__str21, $pystr_addr, $next);
      __label__ = 52;
      break;
     case 9:
      
      var $36 = $next + 1;
      $next = $36;
      __label__ = 10;
      break;
     case 10:
      
      
      
      if ($next < $len) {
        __label__ = 5;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      if (HEAP[$c] != 34 & HEAP[$c] != 92) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      _raise_errmsg(__str22, $pystr_addr, $begin);
      __label__ = 52;
      break;
     case 13:
      
      
      
      if ($next != $end_addr) {
        __label__ = 14;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 14:
      
      
      
      
      
      
      var $55 = _PyUnicodeUCS2_FromUnicode($buf + 2 * $end_addr, $next - $end_addr);
      $chunk = $55;
      
      
      if ($chunk == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      var $60 = _PyList_Append($chunks, $chunk);
      var $61 = $60 != 0;
      
      
      
      var $65 = HEAP[$chunk] - 1;
      
      
      HEAP[$chunk] = $65;
      
      
      
      var $71 = HEAP[$chunk] == 0;
      if ($61) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      if ($71) {
        __label__ = 17;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 17:
      
      
      
      
      var $76 = HEAP[HEAP[$chunk + 4] + 24];
      
      FUNCTION_TABLE[$76]($chunk);
      __label__ = 52;
      break;
     case 18:
      if ($71) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $82 = HEAP[HEAP[$chunk + 4] + 24];
      
      FUNCTION_TABLE[$82]($chunk);
      __label__ = 20;
      break;
     case 20:
      
      var $85 = $next + 1;
      $next = $85;
      
      
      var $88 = $next;
      if (HEAP[$c] == 34) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      $end_addr = $88;
      
      var $90 = _join_list_unicode($chunks);
      $rval = $90;
      
      
      if ($rval == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 22:
      
      
      if ($88 == $len) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      _raise_errmsg(__str22, $pystr_addr, $begin);
      __label__ = 52;
      break;
     case 24:
      
      
      
      var $100 = HEAP[$buf + 2 * $next];
      HEAP[$c] = $100;
      
      
      if (HEAP[$c] != 117) {
        __label__ = 25;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 25:
      
      
      $end_addr = $next + 1;
      var $105 = HEAP[$c];
      var $106 = $105;
      if ($106 == 34) {
        __label__ = 32;
        break;
      } else if ($106 == 47) {
        __label__ = 32;
        break;
      } else if ($106 == 92) {
        __label__ = 32;
        break;
      } else if ($106 == 98) {
        __label__ = 26;
        break;
      } else if ($106 == 102) {
        __label__ = 27;
        break;
      } else if ($106 == 110) {
        __label__ = 28;
        break;
      } else if ($106 == 114) {
        __label__ = 29;
        break;
      } else if ($106 == 116) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 26:
      HEAP[$c] = 8;
      __label__ = 43;
      break;
     case 27:
      HEAP[$c] = 12;
      __label__ = 43;
      break;
     case 28:
      HEAP[$c] = 10;
      __label__ = 43;
      break;
     case 29:
      HEAP[$c] = 13;
      __label__ = 43;
      break;
     case 30:
      HEAP[$c] = 9;
      __label__ = 43;
      break;
     case 31:
      HEAP[$c] = 0;
      __label__ = 33;
      break;
     case 32:
      
      if ($105 == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 33:
      
      
      
      _raise_errmsg(__str23, $pystr_addr, $end_addr - 2);
      __label__ = 52;
      break;
     case 34:
      HEAP[$c] = 0;
      
      var $112 = $next + 1;
      $next = $112;
      
      
      $end_addr = $next + 4;
      
      
      
      if ($end_addr >= $len) {
        __label__ = 35;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 35:
      
      
      
      _raise_errmsg(__str24, $pystr_addr, $next - 1);
      __label__ = 52;
      break;
     case 36:
      
      
      
      
      $digit = HEAP[$buf + 2 * $next];
      
      var $126 = HEAP[$c] << 4;
      HEAP[$c] = $126;
      
      var $128 = $digit;
      if ($128 == 48) {
        __label__ = 37;
        break;
      } else if ($128 == 49) {
        __label__ = 37;
        break;
      } else if ($128 == 50) {
        __label__ = 37;
        break;
      } else if ($128 == 51) {
        __label__ = 37;
        break;
      } else if ($128 == 52) {
        __label__ = 37;
        break;
      } else if ($128 == 53) {
        __label__ = 37;
        break;
      } else if ($128 == 54) {
        __label__ = 37;
        break;
      } else if ($128 == 55) {
        __label__ = 37;
        break;
      } else if ($128 == 56) {
        __label__ = 37;
        break;
      } else if ($128 == 57) {
        __label__ = 37;
        break;
      } else if ($128 == 65) {
        __label__ = 39;
        break;
      } else if ($128 == 66) {
        __label__ = 39;
        break;
      } else if ($128 == 67) {
        __label__ = 39;
        break;
      } else if ($128 == 68) {
        __label__ = 39;
        break;
      } else if ($128 == 69) {
        __label__ = 39;
        break;
      } else if ($128 == 70) {
        __label__ = 39;
        break;
      } else if ($128 == 97) {
        __label__ = 38;
        break;
      } else if ($128 == 98) {
        __label__ = 38;
        break;
      } else if ($128 == 99) {
        __label__ = 38;
        break;
      } else if ($128 == 100) {
        __label__ = 38;
        break;
      } else if ($128 == 101) {
        __label__ = 38;
        break;
      } else if ($128 == 102) {
        __label__ = 38;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 37:
      
      
      
      var $132 = $digit - 48 | HEAP[$c];
      HEAP[$c] = $132;
      __label__ = 41;
      break;
     case 38:
      
      
      
      var $136 = $digit - 87 | HEAP[$c];
      HEAP[$c] = $136;
      __label__ = 41;
      break;
     case 39:
      
      
      
      var $140 = $digit - 55 | HEAP[$c];
      HEAP[$c] = $140;
      __label__ = 41;
      break;
     case 40:
      
      
      
      _raise_errmsg(__str24, $pystr_addr, $end_addr - 5);
      __label__ = 52;
      break;
     case 41:
      
      var $145 = $next + 1;
      $next = $145;
      __label__ = 42;
      break;
     case 42:
      
      
      
      if ($next < $end_addr) {
        __label__ = 36;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      var $149 = _PyUnicodeUCS2_FromUnicode($c, 1);
      $chunk = $149;
      
      if ($149 == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      
      
      var $153 = _PyList_Append($chunks, $chunk);
      var $154 = $153 != 0;
      
      
      
      var $158 = HEAP[$chunk] - 1;
      
      
      HEAP[$chunk] = $158;
      
      
      
      var $164 = HEAP[$chunk] == 0;
      if ($154) {
        __label__ = 45;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 45:
      if ($164) {
        __label__ = 46;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 46:
      
      
      
      
      var $169 = HEAP[HEAP[$chunk + 4] + 24];
      
      FUNCTION_TABLE[$169]($chunk);
      __label__ = 52;
      break;
     case 47:
      if ($164) {
        __label__ = 48;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 48:
      
      
      
      
      var $175 = HEAP[HEAP[$chunk + 4] + 24];
      
      FUNCTION_TABLE[$175]($chunk);
      __label__ = 4;
      break;
     case 49:
      
      
      
      var $180 = HEAP[$chunks] - 1;
      
      
      HEAP[$chunks] = $180;
      
      
      
      
      if (HEAP[$chunks] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      
      
      
      var $191 = HEAP[HEAP[$chunks + 4] + 24];
      
      FUNCTION_TABLE[$191]($chunks);
      __label__ = 51;
      break;
     case 51:
      
      
      HEAP[$next_end_ptr_addr] = $end_addr;
      
      $0 = $rval;
      __label__ = 56;
      break;
     case 52:
      
      HEAP[$next_end_ptr_addr] = -1;
      
      
      if ($chunks != 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 53:
      
      
      
      var $202 = HEAP[$chunks] - 1;
      
      
      HEAP[$chunks] = $202;
      
      
      
      
      if (HEAP[$chunks] == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      
      
      
      
      var $213 = HEAP[HEAP[$chunks + 4] + 24];
      
      FUNCTION_TABLE[$213]($chunks);
      __label__ = 55;
      break;
     case 55:
      $0 = 0;
      __label__ = 56;
      break;
     case 56:
      
      $retval = $0;
      var $retval65 = $retval;
      STACKTOP = __stackBase__;
      return $retval65;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _py_scanstring($self, $args) {
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
      var $pystr = __stackBase__;
      var $rval;
      var $end = __stackBase__ + 4;
      var $next_end = __stackBase__ + 8;
      var $encoding = __stackBase__ + 12;
      var $strict = __stackBase__ + 16;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$next_end] = -1;
      HEAP[$encoding] = 0;
      HEAP[$strict] = 1;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str25, allocate([ $pystr, 0, 0, 0, FUNCTION_TABLE_OFFSET + 4, 0, 0, 0, $end, 0, 0, 0, $encoding, 0, 0, 0, $strict, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32 (%struct.PyObject*, i32*)*", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      if (HEAP[$encoding] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$encoding] = __str26;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$pystr] + 4] + 84] & 134217728) != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $13 = HEAP[$strict];
      var $14 = HEAP[$encoding];
      var $15 = HEAP[$end];
      var $16 = HEAP[$pystr];
      var $17 = _scanstring_str($16, $15, $14, $13, $next_end);
      $rval = $17;
      __label__ = 9;
      break;
     case 6:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$pystr] + 4] + 84] & 268435456) != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $25 = HEAP[$strict];
      var $26 = HEAP[$end];
      var $27 = HEAP[$pystr];
      var $28 = _scanstring_unicode($27, $26, $25, $next_end);
      $rval = $28;
      __label__ = 9;
      break;
     case 8:
      
      
      
      
      var $33 = HEAP[HEAP[HEAP[$pystr] + 4] + 12];
      var $34 = HEAP[_PyExc_TypeError];
      var $35 = _PyErr_Format($34, __str27, allocate([ $33, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 10;
      break;
     case 9:
      var $36 = HEAP[$next_end];
      
      var $38 = __build_rval_index_tuple($rval, $36);
      $0 = $38;
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
  function _py_encode_basestring_ascii($self, $pystr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $pystr_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $pystr_addr = $pystr;
      
      
      
      
      
      
      
      var $8 = $pystr_addr;
      if ((HEAP[HEAP[$pystr_addr + 4] + 84] & 134217728) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $9 = _ascii_escape_str($8);
      $0 = $9;
      __label__ = 5;
      break;
     case 2:
      
      
      
      
      
      
      var $16 = $pystr_addr;
      if ((HEAP[HEAP[$8 + 4] + 84] & 268435456) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $17 = _ascii_escape_unicode($16);
      $0 = $17;
      __label__ = 5;
      break;
     case 4:
      
      
      
      var $21 = HEAP[HEAP[$16 + 4] + 12];
      var $22 = HEAP[_PyExc_TypeError];
      var $23 = _PyErr_Format($22, __str27, allocate([ $21, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
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
  function _scanner_dealloc($self) {
    
    var $self_addr;
    $self_addr = $self;
    
    var $1 = _scanner_clear($self_addr);
    
    
    
    
    var $6 = HEAP[HEAP[$self_addr + 4] + 160];
    
    
    FUNCTION_TABLE[$6]($self_addr);
    return;
  }
  function _scanner_traverse($self, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $s;
      var $vret;
      var $vret7;
      var $vret11;
      var $vret15;
      var $vret19;
      var $vret23;
      var $vret27;
      $self_addr = $self;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$self_addr + 4] != _PyScannerType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$self_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyScannerType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str28, __str29, 852, ___PRETTY_FUNCTION___9208);
      throw "Reached an unreachable!";
     case 3:
      
      
      $s = $self_addr;
      
      
      
      
      if (HEAP[$s + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $18 = HEAP[$s + 8];
      var $19 = $visit_addr;
      
      var $21 = FUNCTION_TABLE[$19]($18, $arg_addr);
      $vret = $21;
      
      
      if ($vret != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      $0 = $vret;
      __label__ = 25;
      break;
     case 6:
      
      
      
      
      if (HEAP[$s + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $31 = HEAP[$s + 12];
      var $32 = $visit_addr;
      
      var $34 = FUNCTION_TABLE[$32]($31, $arg_addr);
      $vret7 = $34;
      
      
      if ($vret7 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      $0 = $vret7;
      __label__ = 25;
      break;
     case 9:
      
      
      
      
      if (HEAP[$s + 16] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $44 = HEAP[$s + 16];
      var $45 = $visit_addr;
      
      var $47 = FUNCTION_TABLE[$45]($44, $arg_addr);
      $vret11 = $47;
      
      
      if ($vret11 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      $0 = $vret11;
      __label__ = 25;
      break;
     case 12:
      
      
      
      
      if (HEAP[$s + 20] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      var $57 = HEAP[$s + 20];
      var $58 = $visit_addr;
      
      var $60 = FUNCTION_TABLE[$58]($57, $arg_addr);
      $vret15 = $60;
      
      
      if ($vret15 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      $0 = $vret15;
      __label__ = 25;
      break;
     case 15:
      
      
      
      
      if (HEAP[$s + 24] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      var $70 = HEAP[$s + 24];
      var $71 = $visit_addr;
      
      var $73 = FUNCTION_TABLE[$71]($70, $arg_addr);
      $vret19 = $73;
      
      
      if ($vret19 != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      $0 = $vret19;
      __label__ = 25;
      break;
     case 18:
      
      
      
      
      if (HEAP[$s + 28] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $83 = HEAP[$s + 28];
      var $84 = $visit_addr;
      
      var $86 = FUNCTION_TABLE[$84]($83, $arg_addr);
      $vret23 = $86;
      
      
      if ($vret23 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      $0 = $vret23;
      __label__ = 25;
      break;
     case 21:
      
      
      
      
      if (HEAP[$s + 32] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      var $96 = HEAP[$s + 32];
      var $97 = $visit_addr;
      
      var $99 = FUNCTION_TABLE[$97]($96, $arg_addr);
      $vret27 = $99;
      
      
      if ($vret27 != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      $0 = $vret27;
      __label__ = 25;
      break;
     case 24:
      $0 = 0;
      __label__ = 25;
      break;
     case 25:
      
      $retval = $0;
      var $retval31 = $retval;
      return $retval31;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _scanner_clear($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $s;
      var $_py_tmp;
      var $_py_tmp7;
      var $_py_tmp11;
      var $_py_tmp15;
      var $_py_tmp19;
      var $_py_tmp23;
      var $_py_tmp27;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 4] != _PyScannerType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$self_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyScannerType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str28, __str29, 868, ___PRETTY_FUNCTION___9278);
      throw "Reached an unreachable!";
     case 3:
      
      
      $s = $self_addr;
      
      
      
      
      if (HEAP[$s + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      $_py_tmp = HEAP[$s + 8];
      
      
      HEAP[$s + 8] = 0;
      
      
      
      var $24 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $24;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $35 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$35]($_py_tmp);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$s + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      $_py_tmp7 = HEAP[$s + 12];
      
      
      HEAP[$s + 12] = 0;
      
      
      
      var $49 = HEAP[$_py_tmp7] - 1;
      
      
      HEAP[$_py_tmp7] = $49;
      
      
      
      
      if (HEAP[$_py_tmp7] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $60 = HEAP[HEAP[$_py_tmp7 + 4] + 24];
      
      FUNCTION_TABLE[$60]($_py_tmp7);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[$s + 16] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      $_py_tmp11 = HEAP[$s + 16];
      
      
      HEAP[$s + 16] = 0;
      
      
      
      var $74 = HEAP[$_py_tmp11] - 1;
      
      
      HEAP[$_py_tmp11] = $74;
      
      
      
      
      if (HEAP[$_py_tmp11] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $85 = HEAP[HEAP[$_py_tmp11 + 4] + 24];
      
      FUNCTION_TABLE[$85]($_py_tmp11);
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      if (HEAP[$s + 20] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      
      $_py_tmp15 = HEAP[$s + 20];
      
      
      HEAP[$s + 20] = 0;
      
      
      
      var $99 = HEAP[$_py_tmp15] - 1;
      
      
      HEAP[$_py_tmp15] = $99;
      
      
      
      
      if (HEAP[$_py_tmp15] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $110 = HEAP[HEAP[$_py_tmp15 + 4] + 24];
      
      FUNCTION_TABLE[$110]($_py_tmp15);
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      if (HEAP[$s + 24] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      $_py_tmp19 = HEAP[$s + 24];
      
      
      HEAP[$s + 24] = 0;
      
      
      
      var $124 = HEAP[$_py_tmp19] - 1;
      
      
      HEAP[$_py_tmp19] = $124;
      
      
      
      
      if (HEAP[$_py_tmp19] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $135 = HEAP[HEAP[$_py_tmp19 + 4] + 24];
      
      FUNCTION_TABLE[$135]($_py_tmp19);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      if (HEAP[$s + 28] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      
      $_py_tmp23 = HEAP[$s + 28];
      
      
      HEAP[$s + 28] = 0;
      
      
      
      var $149 = HEAP[$_py_tmp23] - 1;
      
      
      HEAP[$_py_tmp23] = $149;
      
      
      
      
      if (HEAP[$_py_tmp23] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $160 = HEAP[HEAP[$_py_tmp23 + 4] + 24];
      
      FUNCTION_TABLE[$160]($_py_tmp23);
      __label__ = 21;
      break;
     case 21:
      
      
      
      
      if (HEAP[$s + 32] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      
      $_py_tmp27 = HEAP[$s + 32];
      
      
      HEAP[$s + 32] = 0;
      
      
      
      var $174 = HEAP[$_py_tmp27] - 1;
      
      
      HEAP[$_py_tmp27] = $174;
      
      
      
      
      if (HEAP[$_py_tmp27] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $185 = HEAP[HEAP[$_py_tmp27 + 4] + 24];
      
      FUNCTION_TABLE[$185]($_py_tmp27);
      __label__ = 24;
      break;
     case 24:
      $0 = 0;
      
      $retval = $0;
      var $retval30 = $retval;
      return $retval30;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __parse_object_str($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $pystr_addr;
      var $idx_addr;
      var $next_idx_ptr_addr;
      var $retval;
      var $0;
      var $str;
      var $end_idx;
      var $rval;
      var $pairs;
      var $item;
      var $key;
      var $val;
      var $encoding;
      var $strict;
      var $next_idx = __stackBase__;
      var $_py_tmp;
      var $_py_tmp38;
      var $_py_tmp76;
      $s_addr = $s;
      $pystr_addr = $pystr;
      $idx_addr = $idx;
      $next_idx_ptr_addr = $next_idx_ptr;
      
      
      
      
      $str = $pystr_addr + 20;
      
      
      
      
      
      $end_idx = HEAP[$pystr_addr + 8] - 1;
      $key = 0;
      $val = 0;
      
      
      
      
      
      
      $encoding = HEAP[$s_addr + 8] + 20;
      
      
      var $18 = HEAP[$s_addr + 12];
      var $19 = _PyObject_IsTrue($18);
      $strict = $19;
      var $20 = _PyList_New(0);
      $pairs = $20;
      
      
      if ($pairs == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 90;
      break;
     case 2:
      
      var $24 = $idx_addr + 1;
      $idx_addr = $24;
      __label__ = 3;
      break;
     case 3:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 32) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 9) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 10) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 13) {
        __label__ = 2;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      if ($idx_addr <= $end_idx) {
        __label__ = 9;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 9:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] != 125) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 10:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] != 34) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      _raise_errmsg(__str30, $pystr_addr, $idx_addr);
      __label__ = 80;
      break;
     case 12:
      
      
      
      
      
      var $68 = _scanstring_str($pystr_addr, $idx_addr + 1, $encoding, $strict, $next_idx);
      $key = $68;
      
      
      if ($key == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      $idx_addr = HEAP[$next_idx];
      __label__ = 15;
      break;
     case 14:
      
      var $73 = $idx_addr + 1;
      $idx_addr = $73;
      __label__ = 15;
      break;
     case 15:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 20;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 32) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 9) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 10) {
        __label__ = 14;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 13) {
        __label__ = 14;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] != 58) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      _raise_errmsg(__str31, $pystr_addr, $idx_addr);
      __label__ = 80;
      break;
     case 23:
      
      var $108 = $idx_addr + 1;
      $idx_addr = $108;
      __label__ = 25;
      break;
     case 24:
      
      var $110 = $idx_addr + 1;
      $idx_addr = $110;
      __label__ = 25;
      break;
     case 25:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 30;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 32) {
        __label__ = 24;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 9) {
        __label__ = 24;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 10) {
        __label__ = 24;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 13) {
        __label__ = 24;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      var $137 = _scan_once_str($s_addr, $pystr_addr, $idx_addr, $next_idx);
      $val = $137;
      
      if ($137 == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      var $141 = _PyTuple_Pack(2, allocate([ $key, 0, 0, 0, $val, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $item = $141;
      
      
      if ($item == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      if ($key != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 33:
      
      $_py_tmp = $key;
      $key = 0;
      
      
      
      var $150 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $150;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $161 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$161]($_py_tmp);
      __label__ = 35;
      break;
     case 35:
      
      
      if ($val != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 36:
      
      $_py_tmp38 = $val;
      $val = 0;
      
      
      
      var $169 = HEAP[$_py_tmp38] - 1;
      
      
      HEAP[$_py_tmp38] = $169;
      
      
      
      
      if (HEAP[$_py_tmp38] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $180 = HEAP[HEAP[$_py_tmp38 + 4] + 24];
      
      FUNCTION_TABLE[$180]($_py_tmp38);
      __label__ = 38;
      break;
     case 38:
      
      
      var $184 = _PyList_Append($pairs, $item);
      var $185 = $184 == -1;
      
      
      
      var $189 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $189;
      
      
      
      var $195 = HEAP[$item] == 0;
      if ($185) {
        __label__ = 39;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 39:
      if ($195) {
        __label__ = 40;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 40:
      
      
      
      
      var $200 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$200]($item);
      __label__ = 80;
      break;
     case 41:
      if ($195) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $206 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$206]($item);
      __label__ = 43;
      break;
     case 43:
      
      $idx_addr = HEAP[$next_idx];
      __label__ = 45;
      break;
     case 44:
      
      var $210 = $idx_addr + 1;
      $idx_addr = $210;
      __label__ = 45;
      break;
     case 45:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 50;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 46:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 32) {
        __label__ = 44;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 47:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 9) {
        __label__ = 44;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 10) {
        __label__ = 44;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 49:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 13) {
        __label__ = 44;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 50:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 62;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 51:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 125) {
        __label__ = 62;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 52:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] != 44) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      
      
      _raise_errmsg(__str32, $pystr_addr, $idx_addr);
      __label__ = 80;
      break;
     case 54:
      
      var $250 = $idx_addr + 1;
      $idx_addr = $250;
      __label__ = 56;
      break;
     case 55:
      
      var $252 = $idx_addr + 1;
      $idx_addr = $252;
      __label__ = 56;
      break;
     case 56:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 61;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 57:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 32) {
        __label__ = 55;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 58:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 9) {
        __label__ = 55;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 59:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 10) {
        __label__ = 55;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 60:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 13) {
        __label__ = 55;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 61:
      
      
      
      if ($idx_addr <= $end_idx) {
        __label__ = 10;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 62:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 64;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 63:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] != 125) {
        __label__ = 64;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 64:
      
      
      _raise_errmsg(__str33, $pystr_addr, $end_idx);
      __label__ = 80;
      break;
     case 65:
      
      
      
      
      if (HEAP[$s_addr + 20] != __Py_NoneStruct) {
        __label__ = 66;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 66:
      
      
      var $295 = HEAP[$s_addr + 20];
      
      var $297 = _PyObject_CallFunctionObjArgs($295, allocate([ $pairs, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $val = $297;
      
      
      if ($val == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 67:
      
      
      
      var $303 = HEAP[$pairs] - 1;
      
      
      HEAP[$pairs] = $303;
      
      
      
      
      if (HEAP[$pairs] == 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 68:
      
      
      
      
      var $314 = HEAP[HEAP[$pairs + 4] + 24];
      
      FUNCTION_TABLE[$314]($pairs);
      __label__ = 69;
      break;
     case 69:
      
      
      
      HEAP[$next_idx_ptr_addr] = $idx_addr + 1;
      
      $0 = $val;
      __label__ = 90;
      break;
     case 70:
      
      var $321 = _PyObject_CallFunctionObjArgs(_PyDict_Type, allocate([ $pairs, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $rval = $321;
      
      
      if ($rval == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 71:
      
      
      if ($pairs != 0) {
        __label__ = 72;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 72:
      
      $_py_tmp76 = $pairs;
      $pairs = 0;
      
      
      
      var $330 = HEAP[$_py_tmp76] - 1;
      
      
      HEAP[$_py_tmp76] = $330;
      
      
      
      
      if (HEAP[$_py_tmp76] == 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 73:
      
      
      
      
      var $341 = HEAP[HEAP[$_py_tmp76 + 4] + 24];
      
      FUNCTION_TABLE[$341]($_py_tmp76);
      __label__ = 74;
      break;
     case 74:
      
      
      
      
      if (HEAP[$s_addr + 16] != __Py_NoneStruct) {
        __label__ = 75;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 75:
      
      
      var $349 = HEAP[$s_addr + 16];
      
      var $351 = _PyObject_CallFunctionObjArgs($349, allocate([ $rval, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $val = $351;
      
      
      if ($val == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 76:
      
      
      
      var $357 = HEAP[$rval] - 1;
      
      
      HEAP[$rval] = $357;
      
      
      
      
      if (HEAP[$rval] == 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 77:
      
      
      
      
      var $368 = HEAP[HEAP[$rval + 4] + 24];
      
      FUNCTION_TABLE[$368]($rval);
      __label__ = 78;
      break;
     case 78:
      
      $rval = $val;
      $val = 0;
      __label__ = 79;
      break;
     case 79:
      
      
      
      HEAP[$next_idx_ptr_addr] = $idx_addr + 1;
      
      $0 = $rval;
      __label__ = 90;
      break;
     case 80:
      
      
      if ($key != 0) {
        __label__ = 81;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 81:
      
      
      
      var $379 = HEAP[$key] - 1;
      
      
      HEAP[$key] = $379;
      
      
      
      
      if (HEAP[$key] == 0) {
        __label__ = 82;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 82:
      
      
      
      
      var $390 = HEAP[HEAP[$key + 4] + 24];
      
      FUNCTION_TABLE[$390]($key);
      __label__ = 83;
      break;
     case 83:
      
      
      if ($val != 0) {
        __label__ = 84;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 84:
      
      
      
      var $397 = HEAP[$val] - 1;
      
      
      HEAP[$val] = $397;
      
      
      
      
      if (HEAP[$val] == 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      
      
      
      
      var $408 = HEAP[HEAP[$val + 4] + 24];
      
      FUNCTION_TABLE[$408]($val);
      __label__ = 86;
      break;
     case 86:
      
      
      if ($pairs != 0) {
        __label__ = 87;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 87:
      
      
      
      var $415 = HEAP[$pairs] - 1;
      
      
      HEAP[$pairs] = $415;
      
      
      
      
      if (HEAP[$pairs] == 0) {
        __label__ = 88;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 88:
      
      
      
      
      var $426 = HEAP[HEAP[$pairs + 4] + 24];
      
      FUNCTION_TABLE[$426]($pairs);
      __label__ = 89;
      break;
     case 89:
      $0 = 0;
      __label__ = 90;
      break;
     case 90:
      
      $retval = $0;
      var $retval94 = $retval;
      STACKTOP = __stackBase__;
      return $retval94;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __parse_object_unicode($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $pystr_addr;
      var $idx_addr;
      var $next_idx_ptr_addr;
      var $retval;
      var $0;
      var $str;
      var $end_idx;
      var $rval;
      var $pairs;
      var $item;
      var $key;
      var $val;
      var $strict;
      var $next_idx = __stackBase__;
      var $_py_tmp;
      var $_py_tmp38;
      var $_py_tmp76;
      $s_addr = $s;
      $pystr_addr = $pystr;
      $idx_addr = $idx;
      $next_idx_ptr_addr = $next_idx_ptr;
      
      
      
      
      $str = HEAP[$pystr_addr + 12];
      
      
      
      
      
      $end_idx = HEAP[$pystr_addr + 8] - 1;
      $key = 0;
      $val = 0;
      
      
      var $12 = HEAP[$s_addr + 12];
      var $13 = _PyObject_IsTrue($12);
      $strict = $13;
      var $14 = _PyList_New(0);
      $pairs = $14;
      
      
      if ($pairs == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 90;
      break;
     case 2:
      
      var $18 = $idx_addr + 1;
      $idx_addr = $18;
      __label__ = 3;
      break;
     case 3:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 32) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 9) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 10) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 13) {
        __label__ = 2;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      if ($idx_addr <= $end_idx) {
        __label__ = 9;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 9:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] != 125) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 10:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] != 34) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      _raise_errmsg(__str30, $pystr_addr, $idx_addr);
      __label__ = 80;
      break;
     case 12:
      
      
      
      
      var $61 = _scanstring_unicode($pystr_addr, $idx_addr + 1, $strict, $next_idx);
      $key = $61;
      
      
      if ($key == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      $idx_addr = HEAP[$next_idx];
      __label__ = 15;
      break;
     case 14:
      
      var $66 = $idx_addr + 1;
      $idx_addr = $66;
      __label__ = 15;
      break;
     case 15:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 20;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 32) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 9) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 10) {
        __label__ = 14;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 13) {
        __label__ = 14;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] != 58) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      _raise_errmsg(__str31, $pystr_addr, $idx_addr);
      __label__ = 80;
      break;
     case 23:
      
      var $101 = $idx_addr + 1;
      $idx_addr = $101;
      __label__ = 25;
      break;
     case 24:
      
      var $103 = $idx_addr + 1;
      $idx_addr = $103;
      __label__ = 25;
      break;
     case 25:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 30;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 32) {
        __label__ = 24;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 9) {
        __label__ = 24;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 10) {
        __label__ = 24;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 13) {
        __label__ = 24;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      var $130 = _scan_once_unicode($s_addr, $pystr_addr, $idx_addr, $next_idx);
      $val = $130;
      
      if ($130 == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      var $134 = _PyTuple_Pack(2, allocate([ $key, 0, 0, 0, $val, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $item = $134;
      
      
      if ($item == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      if ($key != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 33:
      
      $_py_tmp = $key;
      $key = 0;
      
      
      
      var $143 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $143;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $154 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$154]($_py_tmp);
      __label__ = 35;
      break;
     case 35:
      
      
      if ($val != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 36:
      
      $_py_tmp38 = $val;
      $val = 0;
      
      
      
      var $162 = HEAP[$_py_tmp38] - 1;
      
      
      HEAP[$_py_tmp38] = $162;
      
      
      
      
      if (HEAP[$_py_tmp38] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $173 = HEAP[HEAP[$_py_tmp38 + 4] + 24];
      
      FUNCTION_TABLE[$173]($_py_tmp38);
      __label__ = 38;
      break;
     case 38:
      
      
      var $177 = _PyList_Append($pairs, $item);
      var $178 = $177 == -1;
      
      
      
      var $182 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $182;
      
      
      
      var $188 = HEAP[$item] == 0;
      if ($178) {
        __label__ = 39;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 39:
      if ($188) {
        __label__ = 40;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 40:
      
      
      
      
      var $193 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$193]($item);
      __label__ = 80;
      break;
     case 41:
      if ($188) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $199 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$199]($item);
      __label__ = 43;
      break;
     case 43:
      
      $idx_addr = HEAP[$next_idx];
      __label__ = 45;
      break;
     case 44:
      
      var $203 = $idx_addr + 1;
      $idx_addr = $203;
      __label__ = 45;
      break;
     case 45:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 50;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 46:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 32) {
        __label__ = 44;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 47:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 9) {
        __label__ = 44;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 10) {
        __label__ = 44;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 49:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 13) {
        __label__ = 44;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 50:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 62;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 51:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 125) {
        __label__ = 62;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 52:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] != 44) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      
      
      _raise_errmsg(__str32, $pystr_addr, $idx_addr);
      __label__ = 80;
      break;
     case 54:
      
      var $243 = $idx_addr + 1;
      $idx_addr = $243;
      __label__ = 56;
      break;
     case 55:
      
      var $245 = $idx_addr + 1;
      $idx_addr = $245;
      __label__ = 56;
      break;
     case 56:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 61;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 57:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 32) {
        __label__ = 55;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 58:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 9) {
        __label__ = 55;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 59:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 10) {
        __label__ = 55;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 60:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 13) {
        __label__ = 55;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 61:
      
      
      
      if ($idx_addr <= $end_idx) {
        __label__ = 10;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 62:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 64;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 63:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] != 125) {
        __label__ = 64;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 64:
      
      
      _raise_errmsg(__str33, $pystr_addr, $end_idx);
      __label__ = 80;
      break;
     case 65:
      
      
      
      
      if (HEAP[$s_addr + 20] != __Py_NoneStruct) {
        __label__ = 66;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 66:
      
      
      var $288 = HEAP[$s_addr + 20];
      
      var $290 = _PyObject_CallFunctionObjArgs($288, allocate([ $pairs, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $val = $290;
      
      
      if ($val == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 67:
      
      
      
      var $296 = HEAP[$pairs] - 1;
      
      
      HEAP[$pairs] = $296;
      
      
      
      
      if (HEAP[$pairs] == 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 68:
      
      
      
      
      var $307 = HEAP[HEAP[$pairs + 4] + 24];
      
      FUNCTION_TABLE[$307]($pairs);
      __label__ = 69;
      break;
     case 69:
      
      
      
      HEAP[$next_idx_ptr_addr] = $idx_addr + 1;
      
      $0 = $val;
      __label__ = 90;
      break;
     case 70:
      
      var $314 = _PyObject_CallFunctionObjArgs(_PyDict_Type, allocate([ $pairs, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $rval = $314;
      
      
      if ($rval == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 71:
      
      
      if ($pairs != 0) {
        __label__ = 72;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 72:
      
      $_py_tmp76 = $pairs;
      $pairs = 0;
      
      
      
      var $323 = HEAP[$_py_tmp76] - 1;
      
      
      HEAP[$_py_tmp76] = $323;
      
      
      
      
      if (HEAP[$_py_tmp76] == 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 73:
      
      
      
      
      var $334 = HEAP[HEAP[$_py_tmp76 + 4] + 24];
      
      FUNCTION_TABLE[$334]($_py_tmp76);
      __label__ = 74;
      break;
     case 74:
      
      
      
      
      if (HEAP[$s_addr + 16] != __Py_NoneStruct) {
        __label__ = 75;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 75:
      
      
      var $342 = HEAP[$s_addr + 16];
      
      var $344 = _PyObject_CallFunctionObjArgs($342, allocate([ $rval, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $val = $344;
      
      
      if ($val == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 76:
      
      
      
      var $350 = HEAP[$rval] - 1;
      
      
      HEAP[$rval] = $350;
      
      
      
      
      if (HEAP[$rval] == 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 77:
      
      
      
      
      var $361 = HEAP[HEAP[$rval + 4] + 24];
      
      FUNCTION_TABLE[$361]($rval);
      __label__ = 78;
      break;
     case 78:
      
      $rval = $val;
      $val = 0;
      __label__ = 79;
      break;
     case 79:
      
      
      
      HEAP[$next_idx_ptr_addr] = $idx_addr + 1;
      
      $0 = $rval;
      __label__ = 90;
      break;
     case 80:
      
      
      if ($key != 0) {
        __label__ = 81;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 81:
      
      
      
      var $372 = HEAP[$key] - 1;
      
      
      HEAP[$key] = $372;
      
      
      
      
      if (HEAP[$key] == 0) {
        __label__ = 82;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 82:
      
      
      
      
      var $383 = HEAP[HEAP[$key + 4] + 24];
      
      FUNCTION_TABLE[$383]($key);
      __label__ = 83;
      break;
     case 83:
      
      
      if ($val != 0) {
        __label__ = 84;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 84:
      
      
      
      var $390 = HEAP[$val] - 1;
      
      
      HEAP[$val] = $390;
      
      
      
      
      if (HEAP[$val] == 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      
      
      
      
      var $401 = HEAP[HEAP[$val + 4] + 24];
      
      FUNCTION_TABLE[$401]($val);
      __label__ = 86;
      break;
     case 86:
      
      
      if ($pairs != 0) {
        __label__ = 87;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 87:
      
      
      
      var $408 = HEAP[$pairs] - 1;
      
      
      HEAP[$pairs] = $408;
      
      
      
      
      if (HEAP[$pairs] == 0) {
        __label__ = 88;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 88:
      
      
      
      
      var $419 = HEAP[HEAP[$pairs + 4] + 24];
      
      FUNCTION_TABLE[$419]($pairs);
      __label__ = 89;
      break;
     case 89:
      $0 = 0;
      __label__ = 90;
      break;
     case 90:
      
      $retval = $0;
      var $retval94 = $retval;
      STACKTOP = __stackBase__;
      return $retval94;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __parse_array_str($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $pystr_addr;
      var $idx_addr;
      var $next_idx_ptr_addr;
      var $retval;
      var $0;
      var $str;
      var $end_idx;
      var $val;
      var $rval;
      var $next_idx = __stackBase__;
      var $_py_tmp;
      $s_addr = $s;
      $pystr_addr = $pystr;
      $idx_addr = $idx;
      $next_idx_ptr_addr = $next_idx_ptr;
      
      
      
      
      $str = $pystr_addr + 20;
      
      
      
      
      
      $end_idx = HEAP[$pystr_addr + 8] - 1;
      $val = 0;
      var $10 = _PyList_New(0);
      $rval = $10;
      
      
      if ($rval == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 44;
      break;
     case 2:
      
      var $14 = $idx_addr + 1;
      $idx_addr = $14;
      __label__ = 3;
      break;
     case 3:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 32) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 9) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 10) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 13) {
        __label__ = 2;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      if ($idx_addr <= $end_idx) {
        __label__ = 9;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 9:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] != 93) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 10:
      
      
      
      var $49 = _scan_once_str($s_addr, $pystr_addr, $idx_addr, $next_idx);
      $val = $49;
      
      
      if ($val == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $54 = _PyList_Append($rval, $val);
      var $55 = $54 == -1;
      if ($55) {
        __label__ = 38;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if ($val != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      $_py_tmp = $val;
      $val = 0;
      
      
      
      var $62 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $62;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $73 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$73]($_py_tmp);
      __label__ = 15;
      break;
     case 15:
      
      $idx_addr = HEAP[$next_idx];
      __label__ = 17;
      break;
     case 16:
      
      var $77 = $idx_addr + 1;
      $idx_addr = $77;
      __label__ = 17;
      break;
     case 17:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 22;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 32) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 9) {
        __label__ = 16;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 10) {
        __label__ = 16;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 13) {
        __label__ = 16;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 34;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 93) {
        __label__ = 34;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] != 44) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      _raise_errmsg(__str32, $pystr_addr, $idx_addr);
      __label__ = 38;
      break;
     case 26:
      
      var $117 = $idx_addr + 1;
      $idx_addr = $117;
      __label__ = 28;
      break;
     case 27:
      
      var $119 = $idx_addr + 1;
      $idx_addr = $119;
      __label__ = 28;
      break;
     case 28:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 33;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 32) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 9) {
        __label__ = 27;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 10) {
        __label__ = 27;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] == 13) {
        __label__ = 27;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      if ($idx_addr <= $end_idx) {
        __label__ = 10;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 36;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      
      
      if (HEAP[$str + $idx_addr] != 93) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      _raise_errmsg(__str33, $pystr_addr, $end_idx);
      __label__ = 38;
      break;
     case 37:
      
      
      
      HEAP[$next_idx_ptr_addr] = $idx_addr + 1;
      
      $0 = $rval;
      __label__ = 44;
      break;
     case 38:
      
      
      if ($val != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 39:
      
      
      
      var $164 = HEAP[$val] - 1;
      
      
      HEAP[$val] = $164;
      
      
      
      
      if (HEAP[$val] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      
      
      var $175 = HEAP[HEAP[$val + 4] + 24];
      
      FUNCTION_TABLE[$175]($val);
      __label__ = 41;
      break;
     case 41:
      
      
      
      var $180 = HEAP[$rval] - 1;
      
      
      HEAP[$rval] = $180;
      
      
      
      
      if (HEAP[$rval] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $191 = HEAP[HEAP[$rval + 4] + 24];
      
      FUNCTION_TABLE[$191]($rval);
      __label__ = 43;
      break;
     case 43:
      $0 = 0;
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
  function __parse_array_unicode($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $pystr_addr;
      var $idx_addr;
      var $next_idx_ptr_addr;
      var $retval;
      var $0;
      var $str;
      var $end_idx;
      var $val;
      var $rval;
      var $next_idx = __stackBase__;
      var $_py_tmp;
      $s_addr = $s;
      $pystr_addr = $pystr;
      $idx_addr = $idx;
      $next_idx_ptr_addr = $next_idx_ptr;
      
      
      
      
      $str = HEAP[$pystr_addr + 12];
      
      
      
      
      
      $end_idx = HEAP[$pystr_addr + 8] - 1;
      $val = 0;
      var $10 = _PyList_New(0);
      $rval = $10;
      
      
      if ($rval == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 44;
      break;
     case 2:
      
      var $14 = $idx_addr + 1;
      $idx_addr = $14;
      __label__ = 3;
      break;
     case 3:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 32) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 9) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 10) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 13) {
        __label__ = 2;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      if ($idx_addr <= $end_idx) {
        __label__ = 9;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 9:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] != 93) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 10:
      
      
      
      var $49 = _scan_once_unicode($s_addr, $pystr_addr, $idx_addr, $next_idx);
      $val = $49;
      
      
      if ($val == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $54 = _PyList_Append($rval, $val);
      var $55 = $54 == -1;
      if ($55) {
        __label__ = 38;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if ($val != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      $_py_tmp = $val;
      $val = 0;
      
      
      
      var $62 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $62;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $73 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$73]($_py_tmp);
      __label__ = 15;
      break;
     case 15:
      
      $idx_addr = HEAP[$next_idx];
      __label__ = 17;
      break;
     case 16:
      
      var $77 = $idx_addr + 1;
      $idx_addr = $77;
      __label__ = 17;
      break;
     case 17:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 22;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 32) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 9) {
        __label__ = 16;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 10) {
        __label__ = 16;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 13) {
        __label__ = 16;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 34;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 93) {
        __label__ = 34;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] != 44) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      _raise_errmsg(__str32, $pystr_addr, $idx_addr);
      __label__ = 38;
      break;
     case 26:
      
      var $117 = $idx_addr + 1;
      $idx_addr = $117;
      __label__ = 28;
      break;
     case 27:
      
      var $119 = $idx_addr + 1;
      $idx_addr = $119;
      __label__ = 28;
      break;
     case 28:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 33;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 32) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 9) {
        __label__ = 27;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 10) {
        __label__ = 27;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] == 13) {
        __label__ = 27;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      if ($idx_addr <= $end_idx) {
        __label__ = 10;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      if ($idx_addr > $end_idx) {
        __label__ = 36;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx_addr] != 93) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      _raise_errmsg(__str33, $pystr_addr, $end_idx);
      __label__ = 38;
      break;
     case 37:
      
      
      
      HEAP[$next_idx_ptr_addr] = $idx_addr + 1;
      
      $0 = $rval;
      __label__ = 44;
      break;
     case 38:
      
      
      if ($val != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 39:
      
      
      
      var $164 = HEAP[$val] - 1;
      
      
      HEAP[$val] = $164;
      
      
      
      
      if (HEAP[$val] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      
      
      var $175 = HEAP[HEAP[$val + 4] + 24];
      
      FUNCTION_TABLE[$175]($val);
      __label__ = 41;
      break;
     case 41:
      
      
      
      var $180 = HEAP[$rval] - 1;
      
      
      HEAP[$rval] = $180;
      
      
      
      
      if (HEAP[$rval] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $191 = HEAP[HEAP[$rval + 4] + 24];
      
      FUNCTION_TABLE[$191]($rval);
      __label__ = 43;
      break;
     case 43:
      $0 = 0;
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
  function __parse_constant($s, $constant, $idx, $next_idx_ptr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $constant_addr;
      var $idx_addr;
      var $next_idx_ptr_addr;
      var $retval;
      var $0;
      var $cstr;
      var $rval;
      $s_addr = $s;
      $constant_addr = $constant;
      $idx_addr = $idx;
      $next_idx_ptr_addr = $next_idx_ptr;
      
      var $2 = _PyString_InternFromString($constant_addr);
      $cstr = $2;
      
      
      if ($cstr == 0) {
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
      
      
      var $7 = HEAP[$s_addr + 32];
      
      var $9 = _PyObject_CallFunctionObjArgs($7, allocate([ $cstr, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $rval = $9;
      
      
      
      
      
      var $15 = $idx_addr + HEAP[$cstr + 8];
      $idx_addr = $15;
      
      
      
      var $19 = HEAP[$cstr] - 1;
      
      
      HEAP[$cstr] = $19;
      
      
      
      
      if (HEAP[$cstr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $30 = HEAP[HEAP[$cstr + 4] + 24];
      
      FUNCTION_TABLE[$30]($cstr);
      __label__ = 4;
      break;
     case 4:
      
      
      HEAP[$next_idx_ptr_addr] = $idx_addr;
      
      $0 = $rval;
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
  function __match_number_str($s, $pystr, $start, $next_idx_ptr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $pystr_addr;
      var $start_addr;
      var $next_idx_ptr_addr;
      var $retval;
      var $0;
      var $str;
      var $end_idx;
      var $idx;
      var $is_float;
      var $rval;
      var $numstr;
      var $e_start;
      var $d;
      $s_addr = $s;
      $pystr_addr = $pystr;
      $start_addr = $start;
      $next_idx_ptr_addr = $next_idx_ptr;
      
      
      
      
      $str = $pystr_addr + 20;
      
      
      
      
      
      $end_idx = HEAP[$pystr_addr + 8] - 1;
      
      $idx = $start_addr;
      $is_float = 0;
      
      
      
      
      
      if (HEAP[$str + $idx] == 45) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $17 = $idx + 1;
      $idx = $17;
      
      
      
      if ($idx > $end_idx) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $21 = HEAP[_PyExc_StopIteration];
      _PyErr_SetNone($21);
      $0 = 0;
      __label__ = 52;
      break;
     case 3:
      
      
      
      
      
      if (HEAP[$str + $idx] <= 48) {
        __label__ = 10;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      if (HEAP[$str + $idx] > 57) {
        __label__ = 10;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $33 = $idx + 1;
      $idx = $33;
      __label__ = 7;
      break;
     case 6:
      
      var $35 = $idx + 1;
      $idx = $35;
      __label__ = 7;
      break;
     case 7:
      
      
      
      if ($idx > $end_idx) {
        __label__ = 13;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[$str + $idx] <= 47) {
        __label__ = 13;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      if (HEAP[$str + $idx] <= 57) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      
      
      if (HEAP[$str + $idx] == 48) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      var $55 = $idx + 1;
      $idx = $55;
      __label__ = 13;
      break;
     case 12:
      var $56 = HEAP[_PyExc_StopIteration];
      _PyErr_SetNone($56);
      $0 = 0;
      __label__ = 52;
      break;
     case 13:
      
      
      
      if ($idx < $end_idx) {
        __label__ = 14;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 14:
      
      
      
      
      
      if (HEAP[$str + $idx] == 46) {
        __label__ = 15;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 15:
      
      
      
      
      
      
      if (HEAP[$str + ($idx + 1)] > 47) {
        __label__ = 16;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 16:
      
      
      
      
      
      
      if (HEAP[$str + ($idx + 1)] <= 57) {
        __label__ = 17;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 17:
      $is_float = 1;
      
      var $78 = $idx + 2;
      $idx = $78;
      __label__ = 19;
      break;
     case 18:
      
      var $80 = $idx + 1;
      $idx = $80;
      __label__ = 19;
      break;
     case 19:
      
      
      
      if ($idx > $end_idx) {
        __label__ = 22;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      
      if (HEAP[$str + $idx] <= 47) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      if (HEAP[$str + $idx] <= 57) {
        __label__ = 18;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      if ($idx < $end_idx) {
        __label__ = 23;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 23:
      
      
      
      
      
      if (HEAP[$str + $idx] == 101) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      
      if (HEAP[$str + $idx] == 69) {
        __label__ = 25;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 25:
      
      $e_start = $idx;
      
      var $109 = $idx + 1;
      $idx = $109;
      
      
      
      if ($idx < $end_idx) {
        __label__ = 26;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 26:
      
      
      
      
      
      if (HEAP[$str + $idx] == 45) {
        __label__ = 28;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      
      if (HEAP[$str + $idx] == 43) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      
      var $124 = $idx + 1;
      $idx = $124;
      __label__ = 30;
      break;
     case 29:
      
      var $126 = $idx + 1;
      $idx = $126;
      __label__ = 30;
      break;
     case 30:
      
      
      
      if ($idx > $end_idx) {
        __label__ = 33;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      
      
      
      if (HEAP[$str + $idx] <= 47) {
        __label__ = 33;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      
      
      
      if (HEAP[$str + $idx] <= 57) {
        __label__ = 29;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      
      
      
      if (HEAP[$str + ($idx - 1)] <= 47) {
        __label__ = 36;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      
      
      
      if (HEAP[$str + ($idx - 1)] > 57) {
        __label__ = 36;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      $is_float = 1;
      __label__ = 37;
      break;
     case 36:
      
      $idx = $e_start;
      __label__ = 37;
      break;
     case 37:
      
      
      
      
      
      
      var $159 = _PyString_FromStringAndSize($str + $start_addr, $idx - $start_addr);
      $numstr = $159;
      
      if ($159 == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      $0 = 0;
      __label__ = 52;
      break;
     case 39:
      
      
      var $163 = $s_addr;
      if ($is_float != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 40:
      
      
      
      if (HEAP[$163 + 24] != _PyFloat_Type) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      var $169 = HEAP[$s_addr + 24];
      
      var $171 = _PyObject_CallFunctionObjArgs($169, allocate([ $numstr, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $rval = $171;
      __label__ = 49;
      break;
     case 42:
      
      
      
      
      var $176 = _PyOS_string_to_double($numstr + 20, 0, 0);
      $d = $176;
      
      var $178 = $d == -1;
      if ($178) {
        __label__ = 43;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 43:
      var $179 = _PyErr_Occurred();
      
      if ($179 != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      $0 = 0;
      __label__ = 52;
      break;
     case 45:
      
      var $182 = _PyFloat_FromDouble($d);
      $rval = $182;
      __label__ = 49;
      break;
     case 46:
      
      
      
      if (HEAP[$163 + 28] != _PyInt_Type) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      
      
      var $188 = HEAP[$s_addr + 28];
      
      var $190 = _PyObject_CallFunctionObjArgs($188, allocate([ $numstr, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $rval = $190;
      __label__ = 49;
      break;
     case 48:
      
      
      
      
      var $195 = _PyInt_FromString($numstr + 20, 0, 10);
      $rval = $195;
      __label__ = 49;
      break;
     case 49:
      
      
      
      var $199 = HEAP[$numstr] - 1;
      
      
      HEAP[$numstr] = $199;
      
      
      
      
      if (HEAP[$numstr] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      
      
      
      var $210 = HEAP[HEAP[$numstr + 4] + 24];
      
      FUNCTION_TABLE[$210]($numstr);
      __label__ = 51;
      break;
     case 51:
      
      
      HEAP[$next_idx_ptr_addr] = $idx;
      
      $0 = $rval;
      __label__ = 52;
      break;
     case 52:
      
      $retval = $0;
      var $retval55 = $retval;
      return $retval55;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __match_number_unicode($s, $pystr, $start, $next_idx_ptr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $pystr_addr;
      var $start_addr;
      var $next_idx_ptr_addr;
      var $retval;
      var $0;
      var $str;
      var $end_idx;
      var $idx;
      var $is_float;
      var $rval;
      var $numstr;
      var $e_start;
      $s_addr = $s;
      $pystr_addr = $pystr;
      $start_addr = $start;
      $next_idx_ptr_addr = $next_idx_ptr;
      
      
      
      
      $str = HEAP[$pystr_addr + 12];
      
      
      
      
      
      $end_idx = HEAP[$pystr_addr + 8] - 1;
      
      $idx = $start_addr;
      $is_float = 0;
      
      
      
      
      
      if (HEAP[$str + 2 * $idx] == 45) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $17 = $idx + 1;
      $idx = $17;
      
      
      
      if ($idx > $end_idx) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $21 = HEAP[_PyExc_StopIteration];
      _PyErr_SetNone($21);
      $0 = 0;
      __label__ = 47;
      break;
     case 3:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx] <= 48) {
        __label__ = 10;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx] > 57) {
        __label__ = 10;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $33 = $idx + 1;
      $idx = $33;
      __label__ = 7;
      break;
     case 6:
      
      var $35 = $idx + 1;
      $idx = $35;
      __label__ = 7;
      break;
     case 7:
      
      
      
      if ($idx > $end_idx) {
        __label__ = 13;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx] <= 47) {
        __label__ = 13;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx] <= 57) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx] == 48) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      var $55 = $idx + 1;
      $idx = $55;
      __label__ = 13;
      break;
     case 12:
      var $56 = HEAP[_PyExc_StopIteration];
      _PyErr_SetNone($56);
      $0 = 0;
      __label__ = 47;
      break;
     case 13:
      
      
      
      if ($idx < $end_idx) {
        __label__ = 14;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 14:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx] == 46) {
        __label__ = 15;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 15:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx + 1)] > 47) {
        __label__ = 16;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 16:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx + 1)] <= 57) {
        __label__ = 17;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 17:
      $is_float = 1;
      
      var $78 = $idx + 2;
      $idx = $78;
      __label__ = 19;
      break;
     case 18:
      
      var $80 = $idx + 1;
      $idx = $80;
      __label__ = 19;
      break;
     case 19:
      
      
      
      if ($idx > $end_idx) {
        __label__ = 22;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx] <= 47) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx] <= 57) {
        __label__ = 18;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      if ($idx < $end_idx) {
        __label__ = 23;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 23:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx] == 101) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx] == 69) {
        __label__ = 25;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 25:
      
      $e_start = $idx;
      
      var $109 = $idx + 1;
      $idx = $109;
      
      
      
      if ($idx < $end_idx) {
        __label__ = 26;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 26:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx] == 45) {
        __label__ = 28;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx] == 43) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      
      var $124 = $idx + 1;
      $idx = $124;
      __label__ = 30;
      break;
     case 29:
      
      var $126 = $idx + 1;
      $idx = $126;
      __label__ = 30;
      break;
     case 30:
      
      
      
      if ($idx > $end_idx) {
        __label__ = 33;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx] <= 47) {
        __label__ = 33;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      
      
      
      if (HEAP[$str + 2 * $idx] <= 57) {
        __label__ = 29;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx - 1)] <= 47) {
        __label__ = 36;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx - 1)] > 57) {
        __label__ = 36;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      $is_float = 1;
      __label__ = 37;
      break;
     case 36:
      
      $idx = $e_start;
      __label__ = 37;
      break;
     case 37:
      
      
      
      
      
      
      var $159 = _PyUnicodeUCS2_FromUnicode($str + 2 * $start_addr, $idx - $start_addr);
      $numstr = $159;
      
      if ($159 == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      $0 = 0;
      __label__ = 47;
      break;
     case 39:
      
      
      var $163 = $s_addr;
      if ($is_float != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 40:
      
      
      
      if (HEAP[$163 + 24] != _PyFloat_Type) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      var $169 = HEAP[$s_addr + 24];
      
      var $171 = _PyObject_CallFunctionObjArgs($169, allocate([ $numstr, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $rval = $171;
      __label__ = 44;
      break;
     case 42:
      
      var $173 = _PyFloat_FromString($numstr, 0);
      $rval = $173;
      __label__ = 44;
      break;
     case 43:
      
      var $175 = HEAP[$163 + 28];
      
      var $177 = _PyObject_CallFunctionObjArgs($175, allocate([ $numstr, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $rval = $177;
      __label__ = 44;
      break;
     case 44:
      
      
      
      var $181 = HEAP[$numstr] - 1;
      
      
      HEAP[$numstr] = $181;
      
      
      
      
      if (HEAP[$numstr] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      var $192 = HEAP[HEAP[$numstr + 4] + 24];
      
      FUNCTION_TABLE[$192]($numstr);
      __label__ = 46;
      break;
     case 46:
      
      
      HEAP[$next_idx_ptr_addr] = $idx;
      
      $0 = $rval;
      __label__ = 47;
      break;
     case 47:
      
      $retval = $0;
      var $retval50 = $retval;
      return $retval50;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _scan_once_str($s, $pystr, $idx, $next_idx_ptr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $pystr_addr;
      var $idx_addr;
      var $next_idx_ptr_addr;
      var $retval;
      var $0;
      var $res;
      var $str;
      var $length;
      $s_addr = $s;
      $pystr_addr = $pystr;
      $idx_addr = $idx;
      $next_idx_ptr_addr = $next_idx_ptr;
      
      
      
      
      $str = $pystr_addr + 20;
      
      
      
      
      $length = HEAP[$pystr_addr + 8];
      
      
      
      if ($idx_addr >= $length) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $12 = HEAP[_PyExc_StopIteration];
      _PyErr_SetNone($12);
      $0 = 0;
      __label__ = 52;
      break;
     case 2:
      
      
      
      
      var $17 = HEAP[$str + $idx_addr];
      if ($17 == 34) {
        __label__ = 3;
        break;
      } else if ($17 == 45) {
        __label__ = 41;
        break;
      } else if ($17 == 73) {
        __label__ = 32;
        break;
      } else if ($17 == 78) {
        __label__ = 28;
        break;
      } else if ($17 == 91) {
        __label__ = 8;
        break;
      } else if ($17 == 102) {
        __label__ = 22;
        break;
      } else if ($17 == 110) {
        __label__ = 12;
        break;
      } else if ($17 == 116) {
        __label__ = 17;
        break;
      } else if ($17 == 123) {
        __label__ = 4;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 3:
      
      
      var $20 = HEAP[$s_addr + 12];
      var $21 = _PyObject_IsTrue($20);
      
      
      
      
      
      var $27 = HEAP[$s_addr + 8] + 20;
      
      
      
      
      var $32 = _scanstring_str($pystr_addr, $idx_addr + 1, $27, $21, $next_idx_ptr_addr);
      $0 = $32;
      __label__ = 52;
      break;
     case 4:
      var $33 = HEAP[__PyThreadState_Current];
      
      
      var $36 = HEAP[$33 + 12] + 1;
      var $37 = $33 + 12;
      HEAP[$37] = $36;
      
      
      
      
      if (HEAP[$33 + 12] > HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      var $42 = __Py_CheckRecursiveCall(__str34);
      
      if ($42 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 52;
      break;
     case 7:
      
      
      
      
      
      var $49 = __parse_object_str($s_addr, $pystr_addr, $idx_addr + 1, $next_idx_ptr_addr);
      $res = $49;
      
      
      
      var $53 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $54 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$54] = $53;
      
      $0 = $res;
      __label__ = 52;
      break;
     case 8:
      var $56 = HEAP[__PyThreadState_Current];
      
      
      var $59 = HEAP[$56 + 12] + 1;
      var $60 = $56 + 12;
      HEAP[$60] = $59;
      
      
      
      
      if (HEAP[$56 + 12] > HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      var $65 = __Py_CheckRecursiveCall(__str35);
      
      if ($65 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = 0;
      __label__ = 52;
      break;
     case 11:
      
      
      
      
      
      var $72 = __parse_array_str($s_addr, $pystr_addr, $idx_addr + 1, $next_idx_ptr_addr);
      $res = $72;
      
      
      
      var $76 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $77 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$77] = $76;
      
      $0 = $res;
      __label__ = 52;
      break;
     case 12:
      
      
      
      
      if ($idx_addr + 3 < $length) {
        __label__ = 13;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 13:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 1)] == 117) {
        __label__ = 14;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 14:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 2)] == 108) {
        __label__ = 15;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 15:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 3)] == 108) {
        __label__ = 16;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 16:
      
      var $102 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $102;
      
      
      
      HEAP[$next_idx_ptr_addr] = $idx_addr + 4;
      $0 = __Py_NoneStruct;
      __label__ = 52;
      break;
     case 17:
      
      
      
      
      if ($idx_addr + 3 < $length) {
        __label__ = 18;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 18:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 1)] == 114) {
        __label__ = 19;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 19:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 2)] == 117) {
        __label__ = 20;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 20:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 3)] == 101) {
        __label__ = 21;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 21:
      
      var $129 = HEAP[__Py_TrueStruct] + 1;
      HEAP[__Py_TrueStruct] = $129;
      
      
      
      HEAP[$next_idx_ptr_addr] = $idx_addr + 4;
      $0 = __Py_TrueStruct;
      __label__ = 52;
      break;
     case 22:
      
      
      
      
      if ($idx_addr + 4 < $length) {
        __label__ = 23;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 23:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 1)] == 97) {
        __label__ = 24;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 24:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 2)] == 108) {
        __label__ = 25;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 25:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 3)] == 115) {
        __label__ = 26;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 26:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 4)] == 101) {
        __label__ = 27;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 27:
      
      var $162 = HEAP[__Py_ZeroStruct] + 1;
      HEAP[__Py_ZeroStruct] = $162;
      
      
      
      HEAP[$next_idx_ptr_addr] = $idx_addr + 5;
      $0 = __Py_ZeroStruct;
      __label__ = 52;
      break;
     case 28:
      
      
      
      
      if ($idx_addr + 2 < $length) {
        __label__ = 29;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 29:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 1)] == 97) {
        __label__ = 30;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 30:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 2)] == 78) {
        __label__ = 31;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 31:
      
      
      
      var $185 = __parse_constant($s_addr, __str36, $idx_addr, $next_idx_ptr_addr);
      $0 = $185;
      __label__ = 52;
      break;
     case 32:
      
      
      
      
      if ($idx_addr + 7 < $length) {
        __label__ = 33;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 33:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 1)] == 110) {
        __label__ = 34;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 34:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 2)] == 102) {
        __label__ = 35;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 35:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 3)] == 105) {
        __label__ = 36;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 36:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 4)] == 110) {
        __label__ = 37;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 37:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 5)] == 105) {
        __label__ = 38;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 38:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 6)] == 116) {
        __label__ = 39;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 39:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 7)] == 121) {
        __label__ = 40;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 40:
      
      
      
      var $235 = __parse_constant($s_addr, __str37, $idx_addr, $next_idx_ptr_addr);
      $0 = $235;
      __label__ = 52;
      break;
     case 41:
      
      
      
      
      if ($idx_addr + 8 < $length) {
        __label__ = 42;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 42:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 1)] == 73) {
        __label__ = 43;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 43:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 2)] == 110) {
        __label__ = 44;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 44:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 3)] == 102) {
        __label__ = 45;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 45:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 4)] == 105) {
        __label__ = 46;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 46:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 5)] == 110) {
        __label__ = 47;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 47:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 6)] == 105) {
        __label__ = 48;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 48:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 7)] == 116) {
        __label__ = 49;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 49:
      
      
      
      
      
      
      if (HEAP[$str + ($idx_addr + 8)] == 121) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      
      
      var $291 = __parse_constant($s_addr, __str38, $idx_addr, $next_idx_ptr_addr);
      $0 = $291;
      __label__ = 52;
      break;
     case 51:
      
      
      
      
      var $296 = __match_number_str($s_addr, $pystr_addr, $idx_addr, $next_idx_ptr_addr);
      $0 = $296;
      __label__ = 52;
      break;
     case 52:
      
      $retval = $0;
      var $retval57 = $retval;
      return $retval57;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _scan_once_unicode($s, $pystr, $idx, $next_idx_ptr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $pystr_addr;
      var $idx_addr;
      var $next_idx_ptr_addr;
      var $retval;
      var $0;
      var $res;
      var $str;
      var $length;
      $s_addr = $s;
      $pystr_addr = $pystr;
      $idx_addr = $idx;
      $next_idx_ptr_addr = $next_idx_ptr;
      
      
      
      
      $str = HEAP[$pystr_addr + 12];
      
      
      
      
      $length = HEAP[$pystr_addr + 8];
      
      
      
      if ($idx_addr >= $length) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $12 = HEAP[_PyExc_StopIteration];
      _PyErr_SetNone($12);
      $0 = 0;
      __label__ = 52;
      break;
     case 2:
      
      
      
      
      var $17 = HEAP[$str + 2 * $idx_addr];
      if ($17 == 34) {
        __label__ = 3;
        break;
      } else if ($17 == 45) {
        __label__ = 41;
        break;
      } else if ($17 == 73) {
        __label__ = 32;
        break;
      } else if ($17 == 78) {
        __label__ = 28;
        break;
      } else if ($17 == 91) {
        __label__ = 8;
        break;
      } else if ($17 == 102) {
        __label__ = 22;
        break;
      } else if ($17 == 110) {
        __label__ = 12;
        break;
      } else if ($17 == 116) {
        __label__ = 17;
        break;
      } else if ($17 == 123) {
        __label__ = 4;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 3:
      
      
      var $20 = HEAP[$s_addr + 12];
      var $21 = _PyObject_IsTrue($20);
      
      
      
      
      var $26 = _scanstring_unicode($pystr_addr, $idx_addr + 1, $21, $next_idx_ptr_addr);
      $0 = $26;
      __label__ = 52;
      break;
     case 4:
      var $27 = HEAP[__PyThreadState_Current];
      
      
      var $30 = HEAP[$27 + 12] + 1;
      var $31 = $27 + 12;
      HEAP[$31] = $30;
      
      
      
      
      if (HEAP[$27 + 12] > HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      var $36 = __Py_CheckRecursiveCall(__str39);
      
      if ($36 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 52;
      break;
     case 7:
      
      
      
      
      
      var $43 = __parse_object_unicode($s_addr, $pystr_addr, $idx_addr + 1, $next_idx_ptr_addr);
      $res = $43;
      
      
      
      var $47 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $48 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$48] = $47;
      
      $0 = $res;
      __label__ = 52;
      break;
     case 8:
      var $50 = HEAP[__PyThreadState_Current];
      
      
      var $53 = HEAP[$50 + 12] + 1;
      var $54 = $50 + 12;
      HEAP[$54] = $53;
      
      
      
      
      if (HEAP[$50 + 12] > HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      var $59 = __Py_CheckRecursiveCall(__str40);
      
      if ($59 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = 0;
      __label__ = 52;
      break;
     case 11:
      
      
      
      
      
      var $66 = __parse_array_unicode($s_addr, $pystr_addr, $idx_addr + 1, $next_idx_ptr_addr);
      $res = $66;
      
      
      
      var $70 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $71 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$71] = $70;
      
      $0 = $res;
      __label__ = 52;
      break;
     case 12:
      
      
      
      
      if ($idx_addr + 3 < $length) {
        __label__ = 13;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 13:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 1)] == 117) {
        __label__ = 14;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 14:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 2)] == 108) {
        __label__ = 15;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 15:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 3)] == 108) {
        __label__ = 16;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 16:
      
      var $96 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $96;
      
      
      
      HEAP[$next_idx_ptr_addr] = $idx_addr + 4;
      $0 = __Py_NoneStruct;
      __label__ = 52;
      break;
     case 17:
      
      
      
      
      if ($idx_addr + 3 < $length) {
        __label__ = 18;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 18:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 1)] == 114) {
        __label__ = 19;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 19:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 2)] == 117) {
        __label__ = 20;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 20:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 3)] == 101) {
        __label__ = 21;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 21:
      
      var $123 = HEAP[__Py_TrueStruct] + 1;
      HEAP[__Py_TrueStruct] = $123;
      
      
      
      HEAP[$next_idx_ptr_addr] = $idx_addr + 4;
      $0 = __Py_TrueStruct;
      __label__ = 52;
      break;
     case 22:
      
      
      
      
      if ($idx_addr + 4 < $length) {
        __label__ = 23;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 23:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 1)] == 97) {
        __label__ = 24;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 24:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 2)] == 108) {
        __label__ = 25;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 25:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 3)] == 115) {
        __label__ = 26;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 26:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 4)] == 101) {
        __label__ = 27;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 27:
      
      var $156 = HEAP[__Py_ZeroStruct] + 1;
      HEAP[__Py_ZeroStruct] = $156;
      
      
      
      HEAP[$next_idx_ptr_addr] = $idx_addr + 5;
      $0 = __Py_ZeroStruct;
      __label__ = 52;
      break;
     case 28:
      
      
      
      
      if ($idx_addr + 2 < $length) {
        __label__ = 29;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 29:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 1)] == 97) {
        __label__ = 30;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 30:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 2)] == 78) {
        __label__ = 31;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 31:
      
      
      
      var $179 = __parse_constant($s_addr, __str36, $idx_addr, $next_idx_ptr_addr);
      $0 = $179;
      __label__ = 52;
      break;
     case 32:
      
      
      
      
      if ($idx_addr + 7 < $length) {
        __label__ = 33;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 33:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 1)] == 110) {
        __label__ = 34;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 34:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 2)] == 102) {
        __label__ = 35;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 35:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 3)] == 105) {
        __label__ = 36;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 36:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 4)] == 110) {
        __label__ = 37;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 37:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 5)] == 105) {
        __label__ = 38;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 38:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 6)] == 116) {
        __label__ = 39;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 39:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 7)] == 121) {
        __label__ = 40;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 40:
      
      
      
      var $229 = __parse_constant($s_addr, __str37, $idx_addr, $next_idx_ptr_addr);
      $0 = $229;
      __label__ = 52;
      break;
     case 41:
      
      
      
      
      if ($idx_addr + 8 < $length) {
        __label__ = 42;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 42:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 1)] == 73) {
        __label__ = 43;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 43:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 2)] == 110) {
        __label__ = 44;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 44:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 3)] == 102) {
        __label__ = 45;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 45:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 4)] == 105) {
        __label__ = 46;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 46:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 5)] == 110) {
        __label__ = 47;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 47:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 6)] == 105) {
        __label__ = 48;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 48:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 7)] == 116) {
        __label__ = 49;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 49:
      
      
      
      
      
      
      if (HEAP[$str + 2 * ($idx_addr + 8)] == 121) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      
      
      var $285 = __parse_constant($s_addr, __str38, $idx_addr, $next_idx_ptr_addr);
      $0 = $285;
      __label__ = 52;
      break;
     case 51:
      
      
      
      
      var $290 = __match_number_unicode($s_addr, $pystr_addr, $idx_addr, $next_idx_ptr_addr);
      $0 = $290;
      __label__ = 52;
      break;
     case 52:
      
      $retval = $0;
      var $retval57 = $retval;
      return $retval57;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _scanner_call($self, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $pystr = __stackBase__;
      var $rval;
      var $idx = __stackBase__ + 4;
      var $next_idx = __stackBase__ + 8;
      var $s;
      $self_addr = $self;
      $args_addr = $args;
      $kwds_addr = $kwds;
      HEAP[$next_idx] = -1;
      
      
      
      
      if (HEAP[$self_addr + 4] != _PyScannerType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$self_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyScannerType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str28, __str29, 1664, ___PRETTY_FUNCTION___10703);
      throw "Reached an unreachable!";
     case 3:
      
      
      $s = $self_addr;
      
      
      var $14 = _PyArg_ParseTupleAndKeywords($args_addr, $kwds_addr, __str41, _kwlist_10701, allocate([ $pystr, 0, 0, 0, FUNCTION_TABLE_OFFSET + 4, 0, 0, 0, $idx, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32 (%struct.PyObject*, i32*)*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 11;
      break;
     case 5:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$pystr] + 4] + 84] & 134217728) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $23 = HEAP[$idx];
      var $24 = HEAP[$pystr];
      
      var $26 = _scan_once_str($s, $24, $23, $next_idx);
      $rval = $26;
      __label__ = 10;
      break;
     case 7:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$pystr] + 4] + 84] & 268435456) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $34 = HEAP[$idx];
      var $35 = HEAP[$pystr];
      
      var $37 = _scan_once_unicode($s, $35, $34, $next_idx);
      $rval = $37;
      __label__ = 10;
      break;
     case 9:
      
      
      
      
      var $42 = HEAP[HEAP[HEAP[$pystr] + 4] + 12];
      var $43 = HEAP[_PyExc_TypeError];
      var $44 = _PyErr_Format($43, __str27, allocate([ $42, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 11;
      break;
     case 10:
      var $45 = HEAP[$next_idx];
      
      var $47 = __build_rval_index_tuple($rval, $45);
      $0 = $47;
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
  function _scanner_new($type, $args, $kwds) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $s;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      var $3 = HEAP[$type_addr + 152];
      
      var $5 = FUNCTION_TABLE[$3]($type_addr, 0);
      
      $s = $5;
      
      
      if ($s != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      HEAP[$s + 8] = 0;
      
      
      HEAP[$s + 12] = 0;
      
      
      HEAP[$s + 16] = 0;
      
      
      HEAP[$s + 20] = 0;
      
      
      HEAP[$s + 24] = 0;
      
      
      HEAP[$s + 28] = 0;
      
      
      HEAP[$s + 32] = 0;
      __label__ = 2;
      break;
     case 2:
      
      
      $0 = $s;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _scanner_init($self, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $ctx = __stackBase__;
      var $s;
      var $tmp;
      var $_py_tmp;
      var $_py_tmp26;
      var $_py_tmp30;
      var $_py_tmp34;
      var $_py_tmp38;
      var $_py_tmp42;
      var $_py_tmp46;
      $self_addr = $self;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      
      
      if (HEAP[$self_addr + 4] != _PyScannerType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$self_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyScannerType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str28, __str29, 1709, ___PRETTY_FUNCTION___10762);
      throw "Reached an unreachable!";
     case 3:
      
      
      $s = $self_addr;
      
      
      var $14 = _PyArg_ParseTupleAndKeywords($args_addr, $kwds_addr, __str44, _kwlist_10760, allocate([ $ctx, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 45;
      break;
     case 5:
      var $16 = HEAP[$ctx];
      var $17 = _PyObject_GetAttrString($16, __str);
      
      
      HEAP[$s + 8] = $17;
      
      
      
      
      if (HEAP[$s + 8] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      if (HEAP[$s + 8] == __Py_NoneStruct) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      var $29 = HEAP[__Py_NoneStruct] - 1;
      HEAP[__Py_NoneStruct] = $29;
      
      
      if (HEAP[__Py_NoneStruct] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      var $34 = HEAP[HEAP[__Py_NoneStruct + 4] + 24];
      FUNCTION_TABLE[$34](__Py_NoneStruct);
      __label__ = 9;
      break;
     case 9:
      var $35 = _PyString_InternFromString(__str26);
      
      
      HEAP[$s + 8] = $35;
      __label__ = 14;
      break;
     case 10:
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$s + 8] + 4] + 84] & 268435456) != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      var $49 = HEAP[$s + 8];
      var $50 = _PyUnicodeUCS2_AsEncodedString($49, 0, 0);
      $tmp = $50;
      
      
      var $53 = HEAP[$s + 8];
      
      
      var $56 = HEAP[$53] - 1;
      var $57 = $53;
      HEAP[$57] = $56;
      
      
      
      if (HEAP[$53] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[$s + 8] + 4] + 24];
      
      
      var $70 = HEAP[$s + 8];
      FUNCTION_TABLE[$67]($70);
      __label__ = 13;
      break;
     case 13:
      
      
      
      HEAP[$s + 8] = $tmp;
      __label__ = 14;
      break;
     case 14:
      
      
      
      
      if (HEAP[$s + 8] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$s + 8] + 4] + 84] & 134217728) == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $87 = HEAP[$ctx];
      var $88 = _PyObject_GetAttrString($87, __str1);
      
      
      HEAP[$s + 12] = $88;
      
      
      
      
      if (HEAP[$s + 12] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      var $95 = HEAP[$ctx];
      var $96 = _PyObject_GetAttrString($95, __str2);
      
      
      HEAP[$s + 16] = $96;
      
      
      
      
      if (HEAP[$s + 16] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      var $103 = HEAP[$ctx];
      var $104 = _PyObject_GetAttrString($103, __str3);
      
      
      HEAP[$s + 20] = $104;
      
      
      
      
      if (HEAP[$s + 20] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      var $111 = HEAP[$ctx];
      var $112 = _PyObject_GetAttrString($111, __str4);
      
      
      HEAP[$s + 24] = $112;
      
      
      
      
      if (HEAP[$s + 24] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      var $119 = HEAP[$ctx];
      var $120 = _PyObject_GetAttrString($119, __str5);
      
      
      HEAP[$s + 28] = $120;
      
      
      
      
      if (HEAP[$s + 28] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      var $127 = HEAP[$ctx];
      var $128 = _PyObject_GetAttrString($127, __str6);
      
      
      HEAP[$s + 32] = $128;
      
      
      
      
      if (HEAP[$s + 32] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      $0 = 0;
      __label__ = 45;
      break;
     case 23:
      
      
      
      
      if (HEAP[$s + 8] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 24:
      
      
      
      $_py_tmp = HEAP[$s + 8];
      
      
      HEAP[$s + 8] = 0;
      
      
      
      var $147 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $147;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $158 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$158]($_py_tmp);
      __label__ = 26;
      break;
     case 26:
      
      
      
      
      if (HEAP[$s + 12] != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 27:
      
      
      
      $_py_tmp26 = HEAP[$s + 12];
      
      
      HEAP[$s + 12] = 0;
      
      
      
      var $172 = HEAP[$_py_tmp26] - 1;
      
      
      HEAP[$_py_tmp26] = $172;
      
      
      
      
      if (HEAP[$_py_tmp26] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $183 = HEAP[HEAP[$_py_tmp26 + 4] + 24];
      
      FUNCTION_TABLE[$183]($_py_tmp26);
      __label__ = 29;
      break;
     case 29:
      
      
      
      
      if (HEAP[$s + 16] != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      
      
      
      $_py_tmp30 = HEAP[$s + 16];
      
      
      HEAP[$s + 16] = 0;
      
      
      
      var $197 = HEAP[$_py_tmp30] - 1;
      
      
      HEAP[$_py_tmp30] = $197;
      
      
      
      
      if (HEAP[$_py_tmp30] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $208 = HEAP[HEAP[$_py_tmp30 + 4] + 24];
      
      FUNCTION_TABLE[$208]($_py_tmp30);
      __label__ = 32;
      break;
     case 32:
      
      
      
      
      if (HEAP[$s + 20] != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 33:
      
      
      
      $_py_tmp34 = HEAP[$s + 20];
      
      
      HEAP[$s + 20] = 0;
      
      
      
      var $222 = HEAP[$_py_tmp34] - 1;
      
      
      HEAP[$_py_tmp34] = $222;
      
      
      
      
      if (HEAP[$_py_tmp34] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $233 = HEAP[HEAP[$_py_tmp34 + 4] + 24];
      
      FUNCTION_TABLE[$233]($_py_tmp34);
      __label__ = 35;
      break;
     case 35:
      
      
      
      
      if (HEAP[$s + 24] != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 36:
      
      
      
      $_py_tmp38 = HEAP[$s + 24];
      
      
      HEAP[$s + 24] = 0;
      
      
      
      var $247 = HEAP[$_py_tmp38] - 1;
      
      
      HEAP[$_py_tmp38] = $247;
      
      
      
      
      if (HEAP[$_py_tmp38] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $258 = HEAP[HEAP[$_py_tmp38 + 4] + 24];
      
      FUNCTION_TABLE[$258]($_py_tmp38);
      __label__ = 38;
      break;
     case 38:
      
      
      
      
      if (HEAP[$s + 28] != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 39:
      
      
      
      $_py_tmp42 = HEAP[$s + 28];
      
      
      HEAP[$s + 28] = 0;
      
      
      
      var $272 = HEAP[$_py_tmp42] - 1;
      
      
      HEAP[$_py_tmp42] = $272;
      
      
      
      
      if (HEAP[$_py_tmp42] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      
      
      var $283 = HEAP[HEAP[$_py_tmp42 + 4] + 24];
      
      FUNCTION_TABLE[$283]($_py_tmp42);
      __label__ = 41;
      break;
     case 41:
      
      
      
      
      if (HEAP[$s + 32] != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 42:
      
      
      
      $_py_tmp46 = HEAP[$s + 32];
      
      
      HEAP[$s + 32] = 0;
      
      
      
      var $297 = HEAP[$_py_tmp46] - 1;
      
      
      HEAP[$_py_tmp46] = $297;
      
      
      
      
      if (HEAP[$_py_tmp46] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      
      
      var $308 = HEAP[HEAP[$_py_tmp46 + 4] + 24];
      
      FUNCTION_TABLE[$308]($_py_tmp46);
      __label__ = 44;
      break;
     case 44:
      $0 = -1;
      __label__ = 45;
      break;
     case 45:
      
      $retval = $0;
      var $retval50 = $retval;
      STACKTOP = __stackBase__;
      return $retval50;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _encoder_new($type, $args, $kwds) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $s;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      var $3 = HEAP[$type_addr + 152];
      
      var $5 = FUNCTION_TABLE[$3]($type_addr, 0);
      
      $s = $5;
      
      
      if ($s != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      HEAP[$s + 8] = 0;
      
      
      HEAP[$s + 12] = 0;
      
      
      HEAP[$s + 16] = 0;
      
      
      HEAP[$s + 20] = 0;
      
      
      HEAP[$s + 24] = 0;
      
      
      HEAP[$s + 28] = 0;
      
      
      HEAP[$s + 32] = 0;
      
      
      HEAP[$s + 36] = 0;
      __label__ = 2;
      break;
     case 2:
      
      
      $0 = $s;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _encoder_init($self, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $iftmp_146;
      var $0;
      var $s;
      var $markers = __stackBase__;
      var $defaultfn = __stackBase__ + 4;
      var $encoder = __stackBase__ + 8;
      var $indent = __stackBase__ + 12;
      var $key_separator = __stackBase__ + 16;
      var $item_separator = __stackBase__ + 20;
      var $sort_keys = __stackBase__ + 24;
      var $skipkeys = __stackBase__ + 28;
      var $allow_nan = __stackBase__ + 32;
      $self_addr = $self;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      
      
      if (HEAP[$self_addr + 4] != _PyEncoderType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$self_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyEncoderType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str47, __str29, 1838, ___PRETTY_FUNCTION___10949);
      throw "Reached an unreachable!";
     case 3:
      
      
      $s = $self_addr;
      
      
      var $14 = _PyArg_ParseTupleAndKeywords($args_addr, $kwds_addr, __str48, _kwlist_10938, allocate([ $markers, 0, 0, 0, $defaultfn, 0, 0, 0, $encoder, 0, 0, 0, $indent, 0, 0, 0, $key_separator, 0, 0, 0, $item_separator, 0, 0, 0, $sort_keys, 0, 0, 0, $skipkeys, 0, 0, 0, $allow_nan, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 10;
      break;
     case 5:
      var $16 = HEAP[$markers];
      
      
      HEAP[$s + 8] = $16;
      var $19 = HEAP[$defaultfn];
      
      
      HEAP[$s + 12] = $19;
      var $22 = HEAP[$encoder];
      
      
      HEAP[$s + 16] = $22;
      var $25 = HEAP[$indent];
      
      
      HEAP[$s + 20] = $25;
      var $28 = HEAP[$key_separator];
      
      
      HEAP[$s + 24] = $28;
      var $31 = HEAP[$item_separator];
      
      
      HEAP[$s + 28] = $31;
      var $34 = HEAP[$sort_keys];
      
      
      HEAP[$s + 32] = $34;
      var $37 = HEAP[$skipkeys];
      
      
      HEAP[$s + 36] = $37;
      
      
      
      
      
      
      if (HEAP[HEAP[$s + 16] + 4] != _PyCFunction_Type) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $48 = HEAP[$s + 16];
      var $49 = _PyCFunction_GetFunction($48);
      
      if ($49 != FUNCTION_TABLE_OFFSET + 6) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      $iftmp_146 = 1;
      __label__ = 9;
      break;
     case 8:
      $iftmp_146 = 0;
      __label__ = 9;
      break;
     case 9:
      
      
      
      HEAP[$s + 40] = $iftmp_146;
      var $54 = HEAP[$allow_nan];
      var $55 = _PyObject_IsTrue($54);
      
      
      HEAP[$s + 44] = $55;
      
      
      
      
      
      var $63 = HEAP[HEAP[$s + 8]] + 1;
      var $64 = HEAP[$s + 8];
      HEAP[$64] = $63;
      
      
      
      
      
      var $70 = HEAP[HEAP[$s + 12]] + 1;
      var $71 = HEAP[$s + 12];
      HEAP[$71] = $70;
      
      
      
      
      
      var $77 = HEAP[HEAP[$s + 16]] + 1;
      var $78 = HEAP[$s + 16];
      HEAP[$78] = $77;
      
      
      
      
      
      var $84 = HEAP[HEAP[$s + 20]] + 1;
      var $85 = HEAP[$s + 20];
      HEAP[$85] = $84;
      
      
      
      
      
      var $91 = HEAP[HEAP[$s + 24]] + 1;
      var $92 = HEAP[$s + 24];
      HEAP[$92] = $91;
      
      
      
      
      
      var $98 = HEAP[HEAP[$s + 28]] + 1;
      var $99 = HEAP[$s + 28];
      HEAP[$99] = $98;
      
      
      
      
      
      var $105 = HEAP[HEAP[$s + 32]] + 1;
      var $106 = HEAP[$s + 32];
      HEAP[$106] = $105;
      
      
      
      
      
      var $112 = HEAP[HEAP[$s + 36]] + 1;
      var $113 = HEAP[$s + 36];
      HEAP[$113] = $112;
      $0 = 0;
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
  function _encoder_call($self, $args, $kwds) {
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
      var $obj = __stackBase__;
      var $rval;
      var $indent_level = __stackBase__ + 4;
      var $s;
      $self_addr = $self;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      
      
      if (HEAP[$self_addr + 4] != _PyEncoderType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$self_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyEncoderType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str47, __str29, 1877, ___PRETTY_FUNCTION___11015);
      throw "Reached an unreachable!";
     case 3:
      
      
      $s = $self_addr;
      
      
      var $14 = _PyArg_ParseTupleAndKeywords($args_addr, $kwds_addr, __str50, _kwlist_11010, allocate([ $obj, 0, 0, 0, FUNCTION_TABLE_OFFSET + 4, 0, 0, 0, $indent_level, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32 (%struct.PyObject*, i32*)*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($14 == 0) {
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
      var $16 = _PyList_New(0);
      $rval = $16;
      
      
      if ($rval == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 12;
      break;
     case 7:
      var $19 = HEAP[$indent_level];
      var $20 = HEAP[$obj];
      
      
      var $23 = _encoder_listencode_obj($s, $rval, $20, $19);
      
      var $25 = $rval;
      if ($23 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      var $28 = HEAP[$25] - 1;
      
      
      HEAP[$rval] = $28;
      
      
      
      
      if (HEAP[$rval] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $39 = HEAP[HEAP[$rval + 4] + 24];
      
      FUNCTION_TABLE[$39]($rval);
      __label__ = 10;
      break;
     case 10:
      $0 = 0;
      __label__ = 12;
      break;
     case 11:
      $0 = $25;
      __label__ = 12;
      break;
     case 12:
      
      $retval = $0;
      var $retval12 = $retval;
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __encoded_const($obj) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $obj_addr;
      var $retval;
      var $0;
      $obj_addr = $obj;
      
      
      if ($obj_addr == __Py_NoneStruct) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      if (HEAP[_s_null_11046] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $5 = _PyString_InternFromString(__str53);
      HEAP[_s_null_11046] = $5;
      __label__ = 3;
      break;
     case 3:
      
      
      
      var $9 = HEAP[HEAP[_s_null_11046]] + 1;
      var $10 = HEAP[_s_null_11046];
      HEAP[$10] = $9;
      
      $0 = HEAP[_s_null_11046];
      __label__ = 13;
      break;
     case 4:
      
      
      if ($obj_addr == __Py_TrueStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      if (HEAP[_s_true_11047] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $16 = _PyString_InternFromString(__str54);
      HEAP[_s_true_11047] = $16;
      __label__ = 7;
      break;
     case 7:
      
      
      
      var $20 = HEAP[HEAP[_s_true_11047]] + 1;
      var $21 = HEAP[_s_true_11047];
      HEAP[$21] = $20;
      
      $0 = HEAP[_s_true_11047];
      __label__ = 13;
      break;
     case 8:
      
      
      if ($obj_addr == __Py_ZeroStruct) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      if (HEAP[_s_false_11048] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $27 = _PyString_InternFromString(__str55);
      HEAP[_s_false_11048] = $27;
      __label__ = 11;
      break;
     case 11:
      
      
      
      var $31 = HEAP[HEAP[_s_false_11048]] + 1;
      var $32 = HEAP[_s_false_11048];
      HEAP[$32] = $31;
      
      $0 = HEAP[_s_false_11048];
      __label__ = 13;
      break;
     case 12:
      var $34 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($34, __str56);
      $0 = 0;
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
  function _encoder_encode_float($s, $obj) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $obj_addr;
      var $retval;
      var $0;
      var $i;
      $s_addr = $s;
      $obj_addr = $obj;
      
      
      
      
      $i = HEAP[$obj_addr + 8];
      
      var $6 = ___finite($i);
      
      if ($6 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$s_addr + 44] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $12 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($12, __str57);
      $0 = 0;
      __label__ = 9;
      break;
     case 3:
      
      
      if ($i > 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $15 = _PyString_FromString(__str37);
      $0 = $15;
      __label__ = 9;
      break;
     case 5:
      
      
      if ($i < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $18 = _PyString_FromString(__str38);
      $0 = $18;
      __label__ = 9;
      break;
     case 7:
      var $19 = _PyString_FromString(__str36);
      $0 = $19;
      __label__ = 9;
      break;
     case 8:
      
      var $21 = _PyObject_Repr($obj_addr);
      $0 = $21;
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
  function _encoder_encode_string($s, $obj) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $obj_addr;
      var $retval;
      var $0;
      $s_addr = $s;
      $obj_addr = $obj;
      
      
      
      
      if (HEAP[$s_addr + 40] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $6 = _py_encode_basestring_ascii(0, $obj_addr);
      $0 = $6;
      __label__ = 3;
      break;
     case 2:
      
      
      var $9 = HEAP[$s_addr + 16];
      
      var $11 = _PyObject_CallFunctionObjArgs($9, allocate([ $obj_addr, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $11;
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
  function __steal_list_append($lst, $stolen) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lst_addr;
      var $stolen_addr;
      var $retval;
      var $0;
      var $rval;
      $lst_addr = $lst;
      $stolen_addr = $stolen;
      
      
      var $3 = _PyList_Append($lst_addr, $stolen_addr);
      $rval = $3;
      
      
      
      var $7 = HEAP[$stolen_addr] - 1;
      
      
      HEAP[$stolen_addr] = $7;
      
      
      
      
      if (HEAP[$stolen_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      var $18 = HEAP[HEAP[$stolen_addr + 4] + 24];
      
      FUNCTION_TABLE[$18]($stolen_addr);
      __label__ = 2;
      break;
     case 2:
      
      $0 = $rval;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _encoder_listencode_obj($s, $rval, $obj, $indent_level) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $rval_addr;
      var $obj_addr;
      var $indent_level_addr;
      var $retval;
      var $0;
      var $newobj;
      var $rv;
      var $cstr;
      var $encoded;
      var $encoded13;
      var $encoded19;
      var $ident;
      var $has_key;
      $s_addr = $s;
      $rval_addr = $rval;
      $obj_addr = $obj;
      $indent_level_addr = $indent_level;
      
      
      
      
      
      
      
      
      var $7 = $obj_addr;
      if ($obj_addr == __Py_NoneStruct | $obj_addr == __Py_TrueStruct | $obj_addr == __Py_ZeroStruct) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $8 = __encoded_const($7);
      $cstr = $8;
      
      
      if ($cstr == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 68;
      break;
     case 3:
      
      
      var $13 = __steal_list_append($rval_addr, $cstr);
      $0 = $13;
      __label__ = 68;
      break;
     case 4:
      
      
      
      
      
      
      if ((HEAP[HEAP[$7 + 4] + 84] & 134217728) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$obj_addr + 4] + 84] & 268435456) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      var $29 = _encoder_encode_string($s_addr, $obj_addr);
      $encoded = $29;
      
      if ($29 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = -1;
      __label__ = 68;
      break;
     case 8:
      
      
      var $33 = __steal_list_append($rval_addr, $encoded);
      $0 = $33;
      __label__ = 68;
      break;
     case 9:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$obj_addr + 4] + 84] & 8388608) != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$obj_addr + 4] + 84] & 16777216) != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      var $49 = _PyObject_Str($obj_addr);
      $encoded13 = $49;
      
      if ($49 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = -1;
      __label__ = 68;
      break;
     case 13:
      
      
      var $53 = __steal_list_append($rval_addr, $encoded13);
      $0 = $53;
      __label__ = 68;
      break;
     case 14:
      
      
      
      
      if (HEAP[$obj_addr + 4] == _PyFloat_Type) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      var $60 = HEAP[$obj_addr + 4];
      var $61 = _PyType_IsSubtype($60, _PyFloat_Type);
      
      if ($61 != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      
      
      var $65 = _encoder_encode_float($s_addr, $obj_addr);
      $encoded19 = $65;
      
      if ($65 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      $0 = -1;
      __label__ = 68;
      break;
     case 18:
      
      
      var $69 = __steal_list_append($rval_addr, $encoded19);
      $0 = $69;
      __label__ = 68;
      break;
     case 19:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$obj_addr + 4] + 84] & 33554432) != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$obj_addr + 4] + 84] & 67108864) != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 21:
      var $84 = HEAP[__PyThreadState_Current];
      
      
      var $87 = HEAP[$84 + 12] + 1;
      var $88 = $84 + 12;
      HEAP[$88] = $87;
      
      
      
      
      if (HEAP[$84 + 12] > HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      var $93 = __Py_CheckRecursiveCall(__str58);
      
      if ($93 != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      $0 = -1;
      __label__ = 68;
      break;
     case 24:
      
      
      
      
      var $99 = _encoder_listencode_list($s_addr, $rval_addr, $obj_addr, $indent_level_addr);
      $rv = $99;
      
      
      
      var $103 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $104 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$104] = $103;
      
      $0 = $rv;
      __label__ = 68;
      break;
     case 25:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$obj_addr + 4] + 84] & 536870912) != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 26:
      var $113 = HEAP[__PyThreadState_Current];
      
      
      var $116 = HEAP[$113 + 12] + 1;
      var $117 = $113 + 12;
      HEAP[$117] = $116;
      
      
      
      
      if (HEAP[$113 + 12] > HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 27;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 27:
      var $122 = __Py_CheckRecursiveCall(__str58);
      
      if ($122 != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      $0 = -1;
      __label__ = 68;
      break;
     case 29:
      
      
      
      
      var $128 = _encoder_listencode_dict($s_addr, $rval_addr, $obj_addr, $indent_level_addr);
      $rv = $128;
      
      
      
      var $132 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $133 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$133] = $132;
      
      $0 = $rv;
      __label__ = 68;
      break;
     case 30:
      $ident = 0;
      
      
      
      
      if (HEAP[$s_addr + 8] != __Py_NoneStruct) {
        __label__ = 31;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 31:
      
      
      var $141 = _PyLong_FromVoidPtr($obj_addr);
      $ident = $141;
      
      
      if ($ident == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      $0 = -1;
      __label__ = 68;
      break;
     case 33:
      
      
      var $146 = HEAP[$s_addr + 8];
      
      var $148 = _PyDict_Contains($146, $ident);
      $has_key = $148;
      
      
      if ($has_key != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 34:
      
      var $152 = $has_key != -1;
      if ($152) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      var $153 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($153, __str59);
      __label__ = 36;
      break;
     case 36:
      
      
      
      var $157 = HEAP[$ident] - 1;
      
      
      HEAP[$ident] = $157;
      
      
      
      
      if (HEAP[$ident] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $168 = HEAP[HEAP[$ident + 4] + 24];
      
      FUNCTION_TABLE[$168]($ident);
      __label__ = 38;
      break;
     case 38:
      $0 = -1;
      __label__ = 68;
      break;
     case 39:
      
      
      var $172 = HEAP[$s_addr + 8];
      
      
      var $175 = _PyDict_SetItem($172, $ident, $obj_addr);
      
      if ($175 != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 40:
      
      
      
      var $180 = HEAP[$ident] - 1;
      
      
      HEAP[$ident] = $180;
      
      
      
      
      if (HEAP[$ident] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $191 = HEAP[HEAP[$ident + 4] + 24];
      
      FUNCTION_TABLE[$191]($ident);
      __label__ = 42;
      break;
     case 42:
      $0 = -1;
      __label__ = 68;
      break;
     case 43:
      
      
      var $195 = HEAP[$s_addr + 12];
      
      var $197 = _PyObject_CallFunctionObjArgs($195, allocate([ $obj_addr, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $newobj = $197;
      
      if ($197 == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 44:
      
      
      if ($ident != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 45:
      
      
      
      var $204 = HEAP[$ident] - 1;
      
      
      HEAP[$ident] = $204;
      
      
      
      
      if (HEAP[$ident] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      
      
      var $215 = HEAP[HEAP[$ident + 4] + 24];
      
      FUNCTION_TABLE[$215]($ident);
      __label__ = 47;
      break;
     case 47:
      $0 = -1;
      __label__ = 68;
      break;
     case 48:
      var $217 = HEAP[__PyThreadState_Current];
      
      
      var $220 = HEAP[$217 + 12] + 1;
      var $221 = $217 + 12;
      HEAP[$221] = $220;
      
      
      
      
      if (HEAP[$217 + 12] > HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 49;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 49:
      var $226 = __Py_CheckRecursiveCall(__str58);
      
      if ($226 != 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      $0 = -1;
      __label__ = 68;
      break;
     case 51:
      
      
      
      
      var $232 = _encoder_listencode_obj($s_addr, $rval_addr, $newobj, $indent_level_addr);
      $rv = $232;
      
      
      
      var $236 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $237 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$237] = $236;
      
      
      
      var $241 = HEAP[$newobj] - 1;
      
      
      HEAP[$newobj] = $241;
      
      
      
      
      if (HEAP[$newobj] == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      
      
      
      
      var $252 = HEAP[HEAP[$newobj + 4] + 24];
      
      FUNCTION_TABLE[$252]($newobj);
      __label__ = 53;
      break;
     case 53:
      
      
      
      var $257 = $ident != 0;
      if ($rv != 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 54:
      if ($257) {
        __label__ = 55;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 55:
      
      
      
      var $261 = HEAP[$ident] - 1;
      
      
      HEAP[$ident] = $261;
      
      
      
      
      if (HEAP[$ident] == 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      
      
      
      
      var $272 = HEAP[HEAP[$ident + 4] + 24];
      
      FUNCTION_TABLE[$272]($ident);
      __label__ = 57;
      break;
     case 57:
      $0 = -1;
      __label__ = 68;
      break;
     case 58:
      if ($257) {
        __label__ = 59;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 59:
      
      
      var $276 = HEAP[$s_addr + 8];
      
      var $278 = _PyDict_DelItem($276, $ident);
      
      
      var $281 = $ident != 0;
      if ($278 != 0) {
        __label__ = 60;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 60:
      if ($281) {
        __label__ = 61;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 61:
      
      
      
      var $285 = HEAP[$ident] - 1;
      
      
      HEAP[$ident] = $285;
      
      
      
      
      if (HEAP[$ident] == 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 62:
      
      
      
      
      var $296 = HEAP[HEAP[$ident + 4] + 24];
      
      FUNCTION_TABLE[$296]($ident);
      __label__ = 63;
      break;
     case 63:
      $0 = -1;
      __label__ = 68;
      break;
     case 64:
      if ($281) {
        __label__ = 65;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 65:
      
      
      
      var $301 = HEAP[$ident] - 1;
      
      
      HEAP[$ident] = $301;
      
      
      
      
      if (HEAP[$ident] == 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 66:
      
      
      
      
      var $312 = HEAP[HEAP[$ident + 4] + 24];
      
      FUNCTION_TABLE[$312]($ident);
      __label__ = 67;
      break;
     case 67:
      
      $0 = $rv;
      __label__ = 68;
      break;
     case 68:
      
      $retval = $0;
      var $retval72 = $retval;
      return $retval72;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _encoder_listencode_dict($s, $rval, $dct, $indent_level) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $rval_addr;
      var $dct_addr;
      var $indent_level_addr;
      var $retval;
      var $0;
      var $kstr;
      var $ident;
      var $key;
      var $value;
      var $it;
      var $skipkeys;
      var $idx;
      var $has_key;
      var $encoded;
      var $_py_tmp;
      var $_py_tmp58;
      var $_py_tmp66;
      var $_py_tmp72;
      $s_addr = $s;
      $rval_addr = $rval;
      $dct_addr = $dct;
      $indent_level_addr = $indent_level;
      $kstr = 0;
      $ident = 0;
      $key = 0;
      $value = 0;
      $it = 0;
      
      
      
      
      
      
      
      
      if (HEAP[_open_dict_11341] == 0 | HEAP[_close_dict_11342] == 0 | HEAP[_empty_dict_11343] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $7 = _PyString_InternFromString(__str60);
      HEAP[_open_dict_11341] = $7;
      var $8 = _PyString_InternFromString(__str61);
      HEAP[_close_dict_11342] = $8;
      var $9 = _PyString_InternFromString(__str62);
      HEAP[_empty_dict_11343] = $9;
      
      
      
      
      
      
      
      
      if (HEAP[_open_dict_11341] == 0 | HEAP[_close_dict_11342] == 0 | HEAP[_empty_dict_11343] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 79;
      break;
     case 3:
      
      
      
      
      
      if (HEAP[$dct_addr + 8] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $21 = HEAP[_empty_dict_11343];
      
      var $23 = _PyList_Append($rval_addr, $21);
      $0 = $23;
      __label__ = 79;
      break;
     case 5:
      
      
      
      
      if (HEAP[$s_addr + 8] != __Py_NoneStruct) {
        __label__ = 6;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 6:
      
      
      var $30 = _PyLong_FromVoidPtr($dct_addr);
      $ident = $30;
      
      
      if ($ident == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      var $35 = HEAP[$s_addr + 8];
      
      var $37 = _PyDict_Contains($35, $ident);
      $has_key = $37;
      
      
      if ($has_key != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      var $41 = $has_key != -1;
      if ($41) {
        __label__ = 9;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 9:
      var $42 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($42, __str59);
      __label__ = 63;
      break;
     case 10:
      
      
      var $45 = HEAP[$s_addr + 8];
      
      
      var $48 = _PyDict_SetItem($45, $ident, $dct_addr);
      
      if ($48 != 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $50 = HEAP[_open_dict_11341];
      
      var $52 = _PyList_Append($rval_addr, $50);
      
      if ($52 != 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      if (HEAP[$s_addr + 20] != __Py_NoneStruct) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      var $59 = $indent_level_addr + 1;
      $indent_level_addr = $59;
      __label__ = 14;
      break;
     case 14:
      
      var $61 = _PyObject_GetIter($dct_addr);
      $it = $61;
      
      if ($61 == 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      var $65 = HEAP[$s_addr + 36];
      var $66 = _PyObject_IsTrue($65);
      $skipkeys = $66;
      $idx = 0;
      __label__ = 51;
      break;
     case 16:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$key + 4] + 84] & 134217728) != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$key + 4] + 84] & 268435456) != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      var $84 = HEAP[$key] + 1;
      
      
      HEAP[$key] = $84;
      
      $kstr = $key;
      __label__ = 31;
      break;
     case 19:
      
      
      
      
      if (HEAP[$key + 4] == _PyFloat_Type) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      var $94 = HEAP[$key + 4];
      var $95 = _PyType_IsSubtype($94, _PyFloat_Type);
      
      if ($95 != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      var $99 = _encoder_encode_float($s_addr, $key);
      $kstr = $99;
      
      if ($99 == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 22:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$key + 4] + 84] & 8388608) != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$key + 4] + 84] & 16777216) != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      var $116 = _PyObject_Str($key);
      $kstr = $116;
      
      if ($116 == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 25:
      
      
      
      
      
      
      
      
      if ($key == __Py_TrueStruct | $key == __Py_ZeroStruct | $key == __Py_NoneStruct) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      var $125 = __encoded_const($key);
      $kstr = $125;
      
      
      if ($kstr == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 27:
      
      
      if ($skipkeys != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      
      
      
      var $133 = HEAP[$key] - 1;
      
      
      HEAP[$key] = $133;
      
      
      
      
      if (HEAP[$key] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 29:
      
      
      
      
      var $144 = HEAP[HEAP[$key + 4] + 24];
      
      FUNCTION_TABLE[$144]($key);
      __label__ = 51;
      break;
     case 30:
      var $146 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($146, __str63);
      __label__ = 63;
      break;
     case 31:
      
      
      if ($idx != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      var $151 = HEAP[$s_addr + 28];
      
      var $153 = _PyList_Append($rval_addr, $151);
      
      if ($153 != 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      var $157 = _PyObject_GetItem($dct_addr, $key);
      $value = $157;
      
      if ($157 == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      var $161 = _encoder_encode_string($s_addr, $kstr);
      $encoded = $161;
      
      
      if ($kstr != 0) {
        __lastLabel__ = 34;
        __label__ = 35;
        break;
      } else {
        __lastLabel__ = 34;
        __label__ = 38;
        break;
      }
     case 35:
      
      $_py_tmp = $kstr;
      $kstr = 0;
      
      
      
      var $168 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $168;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      var $179 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$179]($_py_tmp);
      __label__ = 37;
      break;
     case 37:
      var $_pr = $encoded;
      __lastLabel__ = 37;
      __label__ = 38;
      break;
     case 38:
      var $181 = __lastLabel__ == 37 ? $_pr : $161;
      
      if ($181 == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      
      var $185 = _PyList_Append($rval_addr, $encoded);
      var $186 = $185 != 0;
      
      
      
      var $190 = HEAP[$encoded] - 1;
      
      
      HEAP[$encoded] = $190;
      
      
      
      var $196 = HEAP[$encoded] == 0;
      if ($186) {
        __label__ = 40;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 40:
      if ($196) {
        __label__ = 41;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 41:
      
      
      
      
      var $201 = HEAP[HEAP[$encoded + 4] + 24];
      
      FUNCTION_TABLE[$201]($encoded);
      __label__ = 63;
      break;
     case 42:
      if ($196) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      
      
      var $207 = HEAP[HEAP[$encoded + 4] + 24];
      
      FUNCTION_TABLE[$207]($encoded);
      __label__ = 44;
      break;
     case 44:
      
      
      var $211 = HEAP[$s_addr + 24];
      
      var $213 = _PyList_Append($rval_addr, $211);
      
      if ($213 != 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 45:
      
      
      
      
      var $219 = _encoder_listencode_obj($s_addr, $rval_addr, $value, $indent_level_addr);
      
      if ($219 != 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 46:
      
      var $222 = $idx + 1;
      $idx = $222;
      
      
      if ($value != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 47:
      
      $_py_tmp58 = $value;
      $value = 0;
      
      
      
      var $229 = HEAP[$_py_tmp58] - 1;
      
      
      HEAP[$_py_tmp58] = $229;
      
      
      
      
      if (HEAP[$_py_tmp58] == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      
      
      
      var $240 = HEAP[HEAP[$_py_tmp58 + 4] + 24];
      
      FUNCTION_TABLE[$240]($_py_tmp58);
      __label__ = 49;
      break;
     case 49:
      
      
      
      var $245 = HEAP[$key] - 1;
      
      
      HEAP[$key] = $245;
      
      
      
      
      if (HEAP[$key] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      
      
      
      var $256 = HEAP[HEAP[$key + 4] + 24];
      
      FUNCTION_TABLE[$256]($key);
      __label__ = 51;
      break;
     case 51:
      
      var $259 = _PyIter_Next($it);
      $key = $259;
      
      if ($259 != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 52:
      var $261 = _PyErr_Occurred();
      
      if ($261 != 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 53:
      
      
      if ($it != 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 54:
      
      $_py_tmp66 = $it;
      $it = 0;
      
      
      
      var $269 = HEAP[$_py_tmp66] - 1;
      
      
      HEAP[$_py_tmp66] = $269;
      
      
      
      
      if (HEAP[$_py_tmp66] == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      
      
      
      
      var $280 = HEAP[HEAP[$_py_tmp66 + 4] + 24];
      
      FUNCTION_TABLE[$280]($_py_tmp66);
      __label__ = 56;
      break;
     case 56:
      
      
      if ($ident != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 57:
      
      
      var $286 = HEAP[$s_addr + 8];
      
      var $288 = _PyDict_DelItem($286, $ident);
      
      if ($288 != 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 58:
      
      
      if ($ident != 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 59:
      
      $_py_tmp72 = $ident;
      $ident = 0;
      
      
      
      var $296 = HEAP[$_py_tmp72] - 1;
      
      
      HEAP[$_py_tmp72] = $296;
      
      
      
      
      if (HEAP[$_py_tmp72] == 0) {
        __label__ = 60;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 60:
      
      
      
      
      var $307 = HEAP[HEAP[$_py_tmp72 + 4] + 24];
      
      FUNCTION_TABLE[$307]($_py_tmp72);
      __label__ = 61;
      break;
     case 61:
      var $309 = HEAP[_close_dict_11342];
      
      var $311 = _PyList_Append($rval_addr, $309);
      
      if ($311 != 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 62:
      $0 = 0;
      __label__ = 79;
      break;
     case 63:
      
      
      if ($it != 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 64:
      
      
      
      var $317 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $317;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      
      
      
      
      var $328 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$328]($it);
      __label__ = 66;
      break;
     case 66:
      
      
      if ($key != 0) {
        __label__ = 67;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 67:
      
      
      
      var $335 = HEAP[$key] - 1;
      
      
      HEAP[$key] = $335;
      
      
      
      
      if (HEAP[$key] == 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 68:
      
      
      
      
      var $346 = HEAP[HEAP[$key + 4] + 24];
      
      FUNCTION_TABLE[$346]($key);
      __label__ = 69;
      break;
     case 69:
      
      
      if ($value != 0) {
        __label__ = 70;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 70:
      
      
      
      var $353 = HEAP[$value] - 1;
      
      
      HEAP[$value] = $353;
      
      
      
      
      if (HEAP[$value] == 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 71:
      
      
      
      
      var $364 = HEAP[HEAP[$value + 4] + 24];
      
      FUNCTION_TABLE[$364]($value);
      __label__ = 72;
      break;
     case 72:
      
      
      if ($kstr != 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 75;
        break;
      }
     case 73:
      
      
      
      var $371 = HEAP[$kstr] - 1;
      
      
      HEAP[$kstr] = $371;
      
      
      
      
      if (HEAP[$kstr] == 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 75;
        break;
      }
     case 74:
      
      
      
      
      var $382 = HEAP[HEAP[$kstr + 4] + 24];
      
      FUNCTION_TABLE[$382]($kstr);
      __label__ = 75;
      break;
     case 75:
      
      
      if ($ident != 0) {
        __label__ = 76;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 76:
      
      
      
      var $389 = HEAP[$ident] - 1;
      
      
      HEAP[$ident] = $389;
      
      
      
      
      if (HEAP[$ident] == 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 77:
      
      
      
      
      var $400 = HEAP[HEAP[$ident + 4] + 24];
      
      FUNCTION_TABLE[$400]($ident);
      __label__ = 78;
      break;
     case 78:
      $0 = -1;
      __label__ = 79;
      break;
     case 79:
      
      $retval = $0;
      var $retval92 = $retval;
      return $retval92;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _encoder_listencode_list($s, $rval, $seq, $indent_level) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $rval_addr;
      var $seq_addr;
      var $indent_level_addr;
      var $retval;
      var $iftmp_196;
      var $0;
      var $ident;
      var $s_fast;
      var $num_items;
      var $seq_items;
      var $i;
      var $has_key;
      var $obj;
      var $_py_tmp;
      $s_addr = $s;
      $rval_addr = $rval;
      $seq_addr = $seq;
      $indent_level_addr = $indent_level;
      $ident = 0;
      $s_fast = 0;
      
      
      
      
      
      
      
      
      if (HEAP[_open_array_11600] == 0 | HEAP[_close_array_11601] == 0 | HEAP[_empty_array_11602] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $7 = _PyString_InternFromString(__str64);
      HEAP[_open_array_11600] = $7;
      var $8 = _PyString_InternFromString(__str65);
      HEAP[_close_array_11601] = $8;
      var $9 = _PyString_InternFromString(__str66);
      HEAP[_empty_array_11602] = $9;
      
      
      
      
      
      
      
      
      if (HEAP[_open_array_11600] == 0 | HEAP[_close_array_11601] == 0 | HEAP[_empty_array_11602] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 42;
      break;
     case 3:
      $ident = 0;
      
      var $17 = _PySequence_Fast($seq_addr, __str67);
      $s_fast = $17;
      
      if ($17 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 42;
      break;
     case 5:
      
      
      
      
      $num_items = HEAP[$s_fast + 8];
      
      
      if ($num_items == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $28 = HEAP[$s_fast] - 1;
      
      
      HEAP[$s_fast] = $28;
      
      
      
      
      if (HEAP[$s_fast] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $39 = HEAP[HEAP[$s_fast + 4] + 24];
      
      FUNCTION_TABLE[$39]($s_fast);
      __label__ = 8;
      break;
     case 8:
      var $41 = HEAP[_empty_array_11602];
      
      var $43 = _PyList_Append($rval_addr, $41);
      $0 = $43;
      __label__ = 42;
      break;
     case 9:
      
      
      
      
      if (HEAP[$s_addr + 8] != __Py_NoneStruct) {
        __label__ = 10;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 10:
      
      
      var $50 = _PyLong_FromVoidPtr($seq_addr);
      $ident = $50;
      
      
      if ($ident == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $55 = HEAP[$s_addr + 8];
      
      var $57 = _PyDict_Contains($55, $ident);
      $has_key = $57;
      
      
      if ($has_key != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      var $61 = $has_key != -1;
      if ($61) {
        __label__ = 13;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 13:
      var $62 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($62, __str59);
      __label__ = 36;
      break;
     case 14:
      
      
      var $65 = HEAP[$s_addr + 8];
      
      
      var $68 = _PyDict_SetItem($65, $ident, $seq_addr);
      
      if ($68 != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      var $77 = $s_fast;
      if ((HEAP[HEAP[$s_fast + 4] + 84] & 33554432) != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      $iftmp_196 = HEAP[$77 + 12];
      __label__ = 18;
      break;
     case 17:
      
      
      
      $iftmp_196 = $77 + 12;
      __label__ = 18;
      break;
     case 18:
      
      $seq_items = $iftmp_196;
      var $85 = HEAP[_open_array_11600];
      
      var $87 = _PyList_Append($rval_addr, $85);
      
      if ($87 != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      if (HEAP[$s_addr + 20] != __Py_NoneStruct) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      var $94 = $indent_level_addr + 1;
      $indent_level_addr = $94;
      __label__ = 21;
      break;
     case 21:
      $i = 0;
      __label__ = 26;
      break;
     case 22:
      
      
      
      
      $obj = HEAP[$seq_items + 4 * $i];
      
      
      if ($i != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      var $103 = HEAP[$s_addr + 28];
      
      var $105 = _PyList_Append($rval_addr, $103);
      
      if ($105 != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      var $111 = _encoder_listencode_obj($s_addr, $rval_addr, $obj, $indent_level_addr);
      
      if ($111 != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      var $114 = $i + 1;
      $i = $114;
      __label__ = 26;
      break;
     case 26:
      
      
      
      if ($i < $num_items) {
        __label__ = 22;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      if ($ident != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 28:
      
      
      var $122 = HEAP[$s_addr + 8];
      
      var $124 = _PyDict_DelItem($122, $ident);
      
      if ($124 != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      if ($ident != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      
      $_py_tmp = $ident;
      $ident = 0;
      
      
      
      var $132 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $132;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $143 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$143]($_py_tmp);
      __label__ = 32;
      break;
     case 32:
      var $145 = HEAP[_close_array_11601];
      
      var $147 = _PyList_Append($rval_addr, $145);
      
      if ($147 != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      var $152 = HEAP[$s_fast] - 1;
      
      
      HEAP[$s_fast] = $152;
      
      
      
      
      if (HEAP[$s_fast] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $163 = HEAP[HEAP[$s_fast + 4] + 24];
      
      FUNCTION_TABLE[$163]($s_fast);
      __label__ = 35;
      break;
     case 35:
      $0 = 0;
      __label__ = 42;
      break;
     case 36:
      
      
      if ($ident != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 37:
      
      
      
      var $169 = HEAP[$ident] - 1;
      
      
      HEAP[$ident] = $169;
      
      
      
      
      if (HEAP[$ident] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      var $180 = HEAP[HEAP[$ident + 4] + 24];
      
      FUNCTION_TABLE[$180]($ident);
      __label__ = 39;
      break;
     case 39:
      
      
      
      var $185 = HEAP[$s_fast] - 1;
      
      
      HEAP[$s_fast] = $185;
      
      
      
      
      if (HEAP[$s_fast] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      
      
      var $196 = HEAP[HEAP[$s_fast + 4] + 24];
      
      FUNCTION_TABLE[$196]($s_fast);
      __label__ = 41;
      break;
     case 41:
      $0 = -1;
      __label__ = 42;
      break;
     case 42:
      
      $retval = $0;
      var $retval46 = $retval;
      return $retval46;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _encoder_dealloc($self) {
    
    var $self_addr;
    $self_addr = $self;
    
    var $1 = _encoder_clear($self_addr);
    
    
    
    
    var $6 = HEAP[HEAP[$self_addr + 4] + 160];
    
    
    FUNCTION_TABLE[$6]($self_addr);
    return;
  }
  function _encoder_traverse($self, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $s;
      var $vret;
      var $vret7;
      var $vret11;
      var $vret15;
      var $vret19;
      var $vret23;
      var $vret27;
      var $vret31;
      $self_addr = $self;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$self_addr + 4] != _PyEncoderType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$self_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyEncoderType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str47, __str29, 2314, ___PRETTY_FUNCTION___11738);
      throw "Reached an unreachable!";
     case 3:
      
      
      $s = $self_addr;
      
      
      
      
      if (HEAP[$s + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $18 = HEAP[$s + 8];
      var $19 = $visit_addr;
      
      var $21 = FUNCTION_TABLE[$19]($18, $arg_addr);
      $vret = $21;
      
      
      if ($vret != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      $0 = $vret;
      __label__ = 28;
      break;
     case 6:
      
      
      
      
      if (HEAP[$s + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $31 = HEAP[$s + 12];
      var $32 = $visit_addr;
      
      var $34 = FUNCTION_TABLE[$32]($31, $arg_addr);
      $vret7 = $34;
      
      
      if ($vret7 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      $0 = $vret7;
      __label__ = 28;
      break;
     case 9:
      
      
      
      
      if (HEAP[$s + 16] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $44 = HEAP[$s + 16];
      var $45 = $visit_addr;
      
      var $47 = FUNCTION_TABLE[$45]($44, $arg_addr);
      $vret11 = $47;
      
      
      if ($vret11 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      $0 = $vret11;
      __label__ = 28;
      break;
     case 12:
      
      
      
      
      if (HEAP[$s + 20] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      var $57 = HEAP[$s + 20];
      var $58 = $visit_addr;
      
      var $60 = FUNCTION_TABLE[$58]($57, $arg_addr);
      $vret15 = $60;
      
      
      if ($vret15 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      $0 = $vret15;
      __label__ = 28;
      break;
     case 15:
      
      
      
      
      if (HEAP[$s + 24] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      var $70 = HEAP[$s + 24];
      var $71 = $visit_addr;
      
      var $73 = FUNCTION_TABLE[$71]($70, $arg_addr);
      $vret19 = $73;
      
      
      if ($vret19 != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      $0 = $vret19;
      __label__ = 28;
      break;
     case 18:
      
      
      
      
      if (HEAP[$s + 28] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $83 = HEAP[$s + 28];
      var $84 = $visit_addr;
      
      var $86 = FUNCTION_TABLE[$84]($83, $arg_addr);
      $vret23 = $86;
      
      
      if ($vret23 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      $0 = $vret23;
      __label__ = 28;
      break;
     case 21:
      
      
      
      
      if (HEAP[$s + 32] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      var $96 = HEAP[$s + 32];
      var $97 = $visit_addr;
      
      var $99 = FUNCTION_TABLE[$97]($96, $arg_addr);
      $vret27 = $99;
      
      
      if ($vret27 != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      $0 = $vret27;
      __label__ = 28;
      break;
     case 24:
      
      
      
      
      if (HEAP[$s + 36] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      var $109 = HEAP[$s + 36];
      var $110 = $visit_addr;
      
      var $112 = FUNCTION_TABLE[$110]($109, $arg_addr);
      $vret31 = $112;
      
      
      if ($vret31 != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      $0 = $vret31;
      __label__ = 28;
      break;
     case 27:
      $0 = 0;
      __label__ = 28;
      break;
     case 28:
      
      $retval = $0;
      var $retval35 = $retval;
      return $retval35;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _encoder_clear($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $s;
      var $_py_tmp;
      var $_py_tmp7;
      var $_py_tmp11;
      var $_py_tmp15;
      var $_py_tmp19;
      var $_py_tmp23;
      var $_py_tmp27;
      var $_py_tmp31;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 4] != _PyEncoderType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$self_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyEncoderType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str47, __str29, 2332, ___PRETTY_FUNCTION___11816);
      throw "Reached an unreachable!";
     case 3:
      
      
      $s = $self_addr;
      
      
      
      
      if (HEAP[$s + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      $_py_tmp = HEAP[$s + 8];
      
      
      HEAP[$s + 8] = 0;
      
      
      
      var $24 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $24;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $35 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$35]($_py_tmp);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$s + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      $_py_tmp7 = HEAP[$s + 12];
      
      
      HEAP[$s + 12] = 0;
      
      
      
      var $49 = HEAP[$_py_tmp7] - 1;
      
      
      HEAP[$_py_tmp7] = $49;
      
      
      
      
      if (HEAP[$_py_tmp7] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $60 = HEAP[HEAP[$_py_tmp7 + 4] + 24];
      
      FUNCTION_TABLE[$60]($_py_tmp7);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[$s + 16] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      $_py_tmp11 = HEAP[$s + 16];
      
      
      HEAP[$s + 16] = 0;
      
      
      
      var $74 = HEAP[$_py_tmp11] - 1;
      
      
      HEAP[$_py_tmp11] = $74;
      
      
      
      
      if (HEAP[$_py_tmp11] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $85 = HEAP[HEAP[$_py_tmp11 + 4] + 24];
      
      FUNCTION_TABLE[$85]($_py_tmp11);
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      if (HEAP[$s + 20] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      
      $_py_tmp15 = HEAP[$s + 20];
      
      
      HEAP[$s + 20] = 0;
      
      
      
      var $99 = HEAP[$_py_tmp15] - 1;
      
      
      HEAP[$_py_tmp15] = $99;
      
      
      
      
      if (HEAP[$_py_tmp15] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $110 = HEAP[HEAP[$_py_tmp15 + 4] + 24];
      
      FUNCTION_TABLE[$110]($_py_tmp15);
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      if (HEAP[$s + 24] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      $_py_tmp19 = HEAP[$s + 24];
      
      
      HEAP[$s + 24] = 0;
      
      
      
      var $124 = HEAP[$_py_tmp19] - 1;
      
      
      HEAP[$_py_tmp19] = $124;
      
      
      
      
      if (HEAP[$_py_tmp19] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $135 = HEAP[HEAP[$_py_tmp19 + 4] + 24];
      
      FUNCTION_TABLE[$135]($_py_tmp19);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      if (HEAP[$s + 28] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      
      $_py_tmp23 = HEAP[$s + 28];
      
      
      HEAP[$s + 28] = 0;
      
      
      
      var $149 = HEAP[$_py_tmp23] - 1;
      
      
      HEAP[$_py_tmp23] = $149;
      
      
      
      
      if (HEAP[$_py_tmp23] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $160 = HEAP[HEAP[$_py_tmp23 + 4] + 24];
      
      FUNCTION_TABLE[$160]($_py_tmp23);
      __label__ = 21;
      break;
     case 21:
      
      
      
      
      if (HEAP[$s + 32] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      
      $_py_tmp27 = HEAP[$s + 32];
      
      
      HEAP[$s + 32] = 0;
      
      
      
      var $174 = HEAP[$_py_tmp27] - 1;
      
      
      HEAP[$_py_tmp27] = $174;
      
      
      
      
      if (HEAP[$_py_tmp27] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $185 = HEAP[HEAP[$_py_tmp27 + 4] + 24];
      
      FUNCTION_TABLE[$185]($_py_tmp27);
      __label__ = 24;
      break;
     case 24:
      
      
      
      
      if (HEAP[$s + 36] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      
      $_py_tmp31 = HEAP[$s + 36];
      
      
      HEAP[$s + 36] = 0;
      
      
      
      var $199 = HEAP[$_py_tmp31] - 1;
      
      
      HEAP[$_py_tmp31] = $199;
      
      
      
      
      if (HEAP[$_py_tmp31] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $210 = HEAP[HEAP[$_py_tmp31 + 4] + 24];
      
      FUNCTION_TABLE[$210]($_py_tmp31);
      __label__ = 27;
      break;
     case 27:
      $0 = 0;
      
      $retval = $0;
      var $retval34 = $retval;
      return $retval34;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _init_json() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      HEAP[_PyScannerType + 156] = FUNCTION_TABLE_OFFSET + 8;
      var $0 = _PyType_Ready(_PyScannerType);
      
      if ($0 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      HEAP[_PyEncoderType + 156] = FUNCTION_TABLE_OFFSET + 8;
      var $2 = _PyType_Ready(_PyEncoderType);
      
      if ($2 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $4 = _Py_InitModule4(__str71, _speedups_methods, _module_doc, 0, 1013);
      $m = $4;
      
      var $6 = HEAP[_PyScannerType] + 1;
      HEAP[_PyScannerType] = $6;
      
      var $8 = _PyModule_AddObject($m, __str72, _PyScannerType);
      
      var $10 = HEAP[_PyEncoderType] + 1;
      HEAP[_PyEncoderType] = $10;
      
      var $12 = _PyModule_AddObject($m, __str73, _PyEncoderType);
      __label__ = 3;
      break;
     case 3:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_json"] = _init_json;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, __convertPyInt_FromSsize_t, 0, __convertPyInt_AsSsize_t, 0, _py_encode_basestring_ascii, 0, _PyType_GenericNew, 0, _scanner_dealloc, 0, _scanner_call, 0, _scanner_traverse, 0, _scanner_clear, 0, _scanner_init, 0, _scanner_new, 0, _encoder_dealloc, 0, _encoder_call, 0, _encoder_traverse, 0, _encoder_clear, 0, _encoder_init, 0, _encoder_new, 0, _py_scanstring, 0 ]);
  function run(args) {
    __str = allocate([ 101, 110, 99, 111, 100, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 115, 116, 114, 105, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 111, 98, 106, 101, 99, 116, 95, 104, 111, 111, 107, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 111, 98, 106, 101, 99, 116, 95, 112, 97, 105, 114, 115, 95, 104, 111, 111, 107, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 112, 97, 114, 115, 101, 95, 102, 108, 111, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 112, 97, 114, 115, 101, 95, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 112, 97, 114, 115, 101, 95, 99, 111, 110, 115, 116, 97, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _scanner_members = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 20, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 24, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 32, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str7 = allocate([ 109, 97, 114, 107, 101, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 100, 101, 102, 97, 117, 108, 116, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 101, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 105, 110, 100, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 107, 101, 121, 95, 115, 101, 112, 97, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 105, 116, 101, 109, 95, 115, 101, 112, 97, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 115, 111, 114, 116, 95, 107, 101, 121, 115, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 115, 107, 105, 112, 107, 101, 121, 115, 0 ], "i8", ALLOC_NORMAL);
    _encoder_members = allocate([ 0, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 20, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 24, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 32, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 36, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str15 = allocate([ 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102, 0 ], "i8", ALLOC_NORMAL);
    _errmsg_fn_8641 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str16 = allocate([ 106, 115, 111, 110, 46, 100, 101, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 101, 114, 114, 109, 115, 103, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 40, 122, 79, 79, 38, 41, 0 ], "i8", ALLOC_NORMAL);
    _joinfn_8675 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str19 = allocate([ 106, 111, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 101, 110, 100, 32, 105, 115, 32, 111, 117, 116, 32, 111, 102, 32, 98, 111, 117, 110, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 73, 110, 118, 97, 108, 105, 100, 32, 99, 111, 110, 116, 114, 111, 108, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 85, 110, 116, 101, 114, 109, 105, 110, 97, 116, 101, 100, 32, 115, 116, 114, 105, 110, 103, 32, 115, 116, 97, 114, 116, 105, 110, 103, 32, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 73, 110, 118, 97, 108, 105, 100, 32, 92, 101, 115, 99, 97, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 73, 110, 118, 97, 108, 105, 100, 32, 92, 117, 88, 88, 88, 88, 32, 101, 115, 99, 97, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    _pydoc_scanstring = allocate([ 115, 99, 97, 110, 115, 116, 114, 105, 110, 103, 40, 98, 97, 115, 101, 115, 116, 114, 105, 110, 103, 44, 32, 101, 110, 100, 44, 32, 101, 110, 99, 111, 100, 105, 110, 103, 44, 32, 115, 116, 114, 105, 99, 116, 61, 84, 114, 117, 101, 41, 32, 45, 62, 32, 40, 115, 116, 114, 44, 32, 101, 110, 100, 41, 10, 10, 83, 99, 97, 110, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 115, 32, 102, 111, 114, 32, 97, 32, 74, 83, 79, 78, 32, 115, 116, 114, 105, 110, 103, 46, 32, 69, 110, 100, 32, 105, 115, 32, 116, 104, 101, 32, 105, 110, 100, 101, 120, 32, 111, 102, 32, 116, 104, 101, 10, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 105, 110, 32, 115, 32, 97, 102, 116, 101, 114, 32, 116, 104, 101, 32, 113, 117, 111, 116, 101, 32, 116, 104, 97, 116, 32, 115, 116, 97, 114, 116, 101, 100, 32, 116, 104, 101, 32, 74, 83, 79, 78, 32, 115, 116, 114, 105, 110, 103, 46, 10, 85, 110, 101, 115, 99, 97, 112, 101, 115, 32, 97, 108, 108, 32, 118, 97, 108, 105, 100, 32, 74, 83, 79, 78, 32, 115, 116, 114, 105, 110, 103, 32, 101, 115, 99, 97, 112, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 115, 32, 97, 110, 100, 32, 114, 97, 105, 115, 101, 115, 32, 86, 97, 108, 117, 101, 69, 114, 114, 111, 114, 10, 111, 110, 32, 97, 116, 116, 101, 109, 112, 116, 32, 116, 111, 32, 100, 101, 99, 111, 100, 101, 32, 97, 110, 32, 105, 110, 118, 97, 108, 105, 100, 32, 115, 116, 114, 105, 110, 103, 46, 32, 73, 102, 32, 115, 116, 114, 105, 99, 116, 32, 105, 115, 32, 70, 97, 108, 115, 101, 32, 116, 104, 101, 110, 32, 108, 105, 116, 101, 114, 97, 108, 10, 99, 111, 110, 116, 114, 111, 108, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 32, 97, 114, 101, 32, 97, 108, 108, 111, 119, 101, 100, 32, 105, 110, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 46, 10, 10, 82, 101, 116, 117, 114, 110, 115, 32, 97, 32, 116, 117, 112, 108, 101, 32, 111, 102, 32, 116, 104, 101, 32, 100, 101, 99, 111, 100, 101, 100, 32, 115, 116, 114, 105, 110, 103, 32, 97, 110, 100, 32, 116, 104, 101, 32, 105, 110, 100, 101, 120, 32, 111, 102, 32, 116, 104, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 32, 105, 110, 32, 115, 10, 97, 102, 116, 101, 114, 32, 116, 104, 101, 32, 101, 110, 100, 32, 113, 117, 111, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 79, 79, 38, 124, 122, 105, 58, 115, 99, 97, 110, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 117, 116, 102, 45, 56, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 102, 105, 114, 115, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 44, 32, 110, 111, 116, 32, 37, 46, 56, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    _pydoc_encode_basestring_ascii = allocate([ 101, 110, 99, 111, 100, 101, 95, 98, 97, 115, 101, 115, 116, 114, 105, 110, 103, 95, 97, 115, 99, 105, 105, 40, 98, 97, 115, 101, 115, 116, 114, 105, 110, 103, 41, 32, 45, 62, 32, 115, 116, 114, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 110, 32, 65, 83, 67, 73, 73, 45, 111, 110, 108, 121, 32, 74, 83, 79, 78, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 97, 32, 80, 121, 116, 104, 111, 110, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 32, 61, 61, 32, 40, 38, 80, 121, 83, 99, 97, 110, 110, 101, 114, 84, 121, 112, 101, 41, 32, 124, 124, 32, 80, 121, 84, 121, 112, 101, 95, 73, 115, 83, 117, 98, 116, 121, 112, 101, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 44, 32, 40, 38, 80, 121, 83, 99, 97, 110, 110, 101, 114, 84, 121, 112, 101, 41, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 95, 106, 115, 111, 110, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9208 = allocate([ 115, 99, 97, 110, 110, 101, 114, 95, 116, 114, 97, 118, 101, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9278 = allocate([ 115, 99, 97, 110, 110, 101, 114, 95, 99, 108, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 69, 120, 112, 101, 99, 116, 105, 110, 103, 32, 112, 114, 111, 112, 101, 114, 116, 121, 32, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 69, 120, 112, 101, 99, 116, 105, 110, 103, 32, 58, 32, 100, 101, 108, 105, 109, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 69, 120, 112, 101, 99, 116, 105, 110, 103, 32, 44, 32, 100, 101, 108, 105, 109, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 69, 120, 112, 101, 99, 116, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 32, 119, 104, 105, 108, 101, 32, 100, 101, 99, 111, 100, 105, 110, 103, 32, 97, 32, 74, 83, 79, 78, 32, 111, 98, 106, 101, 99, 116, 32, 102, 114, 111, 109, 32, 97, 32, 98, 121, 116, 101, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 32, 119, 104, 105, 108, 101, 32, 100, 101, 99, 111, 100, 105, 110, 103, 32, 97, 32, 74, 83, 79, 78, 32, 97, 114, 114, 97, 121, 32, 102, 114, 111, 109, 32, 97, 32, 98, 121, 116, 101, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 78, 97, 78, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 73, 110, 102, 105, 110, 105, 116, 121, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 45, 73, 110, 102, 105, 110, 105, 116, 121, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 32, 119, 104, 105, 108, 101, 32, 100, 101, 99, 111, 100, 105, 110, 103, 32, 97, 32, 74, 83, 79, 78, 32, 111, 98, 106, 101, 99, 116, 32, 102, 114, 111, 109, 32, 97, 32, 117, 110, 105, 99, 111, 100, 101, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 32, 119, 104, 105, 108, 101, 32, 100, 101, 99, 111, 100, 105, 110, 103, 32, 97, 32, 74, 83, 79, 78, 32, 97, 114, 114, 97, 121, 32, 102, 114, 111, 109, 32, 97, 32, 117, 110, 105, 99, 111, 100, 101, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10703 = allocate([ 115, 99, 97, 110, 110, 101, 114, 95, 99, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 79, 79, 38, 58, 115, 99, 97, 110, 95, 111, 110, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_10701 = allocate(12, "i8*", ALLOC_NORMAL);
    __str42 = allocate([ 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 105, 100, 120, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10762 = allocate([ 115, 99, 97, 110, 110, 101, 114, 95, 105, 110, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 79, 58, 109, 97, 107, 101, 95, 115, 99, 97, 110, 110, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_10760 = allocate(8, "i8*", ALLOC_NORMAL);
    __str45 = allocate([ 99, 111, 110, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    _scanner_doc = allocate([ 74, 83, 79, 78, 32, 115, 99, 97, 110, 110, 101, 114, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 95, 106, 115, 111, 110, 46, 83, 99, 97, 110, 110, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _PyScannerType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str47 = allocate([ 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 32, 61, 61, 32, 40, 38, 80, 121, 69, 110, 99, 111, 100, 101, 114, 84, 121, 112, 101, 41, 32, 124, 124, 32, 80, 121, 84, 121, 112, 101, 95, 73, 115, 83, 117, 98, 116, 121, 112, 101, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 44, 32, 40, 38, 80, 121, 69, 110, 99, 111, 100, 101, 114, 84, 121, 112, 101, 41, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10949 = allocate([ 101, 110, 99, 111, 100, 101, 114, 95, 105, 110, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 79, 79, 79, 79, 79, 79, 79, 79, 79, 58, 109, 97, 107, 101, 95, 101, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_10938 = allocate(40, "i8*", ALLOC_NORMAL);
    __str49 = allocate([ 97, 108, 108, 111, 119, 95, 110, 97, 110, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___11015 = allocate([ 101, 110, 99, 111, 100, 101, 114, 95, 99, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 79, 79, 38, 58, 95, 105, 116, 101, 114, 101, 110, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_11010 = allocate(12, "i8*", ALLOC_NORMAL);
    __str51 = allocate([ 111, 98, 106, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 95, 99, 117, 114, 114, 101, 110, 116, 95, 105, 110, 100, 101, 110, 116, 95, 108, 101, 118, 101, 108, 0 ], "i8", ALLOC_NORMAL);
    _s_null_11046 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str53 = allocate([ 110, 117, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    _s_true_11047 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str54 = allocate([ 116, 114, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    _s_false_11048 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str55 = allocate([ 102, 97, 108, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 110, 111, 116, 32, 97, 32, 99, 111, 110, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 79, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 32, 102, 108, 111, 97, 116, 32, 118, 97, 108, 117, 101, 115, 32, 97, 114, 101, 32, 110, 111, 116, 32, 74, 83, 79, 78, 32, 99, 111, 109, 112, 108, 105, 97, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 32, 119, 104, 105, 108, 101, 32, 101, 110, 99, 111, 100, 105, 110, 103, 32, 97, 32, 74, 83, 79, 78, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 67, 105, 114, 99, 117, 108, 97, 114, 32, 114, 101, 102, 101, 114, 101, 110, 99, 101, 32, 100, 101, 116, 101, 99, 116, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    _open_dict_11341 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _close_dict_11342 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _empty_dict_11343 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str60 = allocate([ 123, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 125, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 123, 125, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 107, 101, 121, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _open_array_11600 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _close_array_11601 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _empty_array_11602 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str64 = allocate([ 91, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 93, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 91, 93, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 95, 105, 116, 101, 114, 101, 110, 99, 111, 100, 101, 95, 108, 105, 115, 116, 32, 110, 101, 101, 100, 115, 32, 97, 32, 115, 101, 113, 117, 101, 110, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___11738 = allocate([ 101, 110, 99, 111, 100, 101, 114, 95, 116, 114, 97, 118, 101, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___11816 = allocate([ 101, 110, 99, 111, 100, 101, 114, 95, 99, 108, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    _encoder_doc = allocate([ 95, 105, 116, 101, 114, 101, 110, 99, 111, 100, 101, 40, 111, 98, 106, 44, 32, 95, 99, 117, 114, 114, 101, 110, 116, 95, 105, 110, 100, 101, 110, 116, 95, 108, 101, 118, 101, 108, 41, 32, 45, 62, 32, 105, 116, 101, 114, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 95, 106, 115, 111, 110, 46, 69, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _PyEncoderType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _speedups_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_NORMAL);
    __str69 = allocate([ 101, 110, 99, 111, 100, 101, 95, 98, 97, 115, 101, 115, 116, 114, 105, 110, 103, 95, 97, 115, 99, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 115, 99, 97, 110, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _module_doc = allocate([ 106, 115, 111, 110, 32, 115, 112, 101, 101, 100, 117, 112, 115, 10, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 95, 106, 115, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 109, 97, 107, 101, 95, 115, 99, 97, 110, 110, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 109, 97, 107, 101, 95, 101, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_scanner_members] = __str;
    HEAP[_scanner_members + 16] = __str;
    HEAP[_scanner_members + 20] = __str1;
    HEAP[_scanner_members + 36] = __str1;
    HEAP[_scanner_members + 40] = __str2;
    HEAP[_scanner_members + 56] = __str2;
    HEAP[_scanner_members + 60] = __str3;
    HEAP[_scanner_members + 76] = __str3;
    HEAP[_scanner_members + 80] = __str4;
    HEAP[_scanner_members + 96] = __str4;
    HEAP[_scanner_members + 100] = __str5;
    HEAP[_scanner_members + 116] = __str5;
    HEAP[_scanner_members + 120] = __str6;
    HEAP[_scanner_members + 136] = __str6;
    HEAP[_encoder_members] = __str7;
    HEAP[_encoder_members + 16] = __str7;
    HEAP[_encoder_members + 20] = __str8;
    HEAP[_encoder_members + 36] = __str8;
    HEAP[_encoder_members + 40] = __str9;
    HEAP[_encoder_members + 56] = __str9;
    HEAP[_encoder_members + 60] = __str10;
    HEAP[_encoder_members + 76] = __str10;
    HEAP[_encoder_members + 80] = __str11;
    HEAP[_encoder_members + 96] = __str11;
    HEAP[_encoder_members + 100] = __str12;
    HEAP[_encoder_members + 116] = __str12;
    HEAP[_encoder_members + 120] = __str13;
    HEAP[_encoder_members + 136] = __str13;
    HEAP[_encoder_members + 140] = __str14;
    HEAP[_encoder_members + 156] = __str14;
    HEAP[_kwlist_10701] = __str42;
    HEAP[_kwlist_10701 + 4] = __str43;
    HEAP[_kwlist_10760] = __str45;
    HEAP[_PyScannerType + 12] = __str46;
    HEAP[_PyScannerType + 24] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_PyScannerType + 64] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_PyScannerType + 88] = _scanner_doc;
    HEAP[_PyScannerType + 92] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_PyScannerType + 96] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_PyScannerType + 120] = _scanner_members;
    HEAP[_PyScannerType + 148] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_PyScannerType + 156] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_kwlist_10938] = __str7;
    HEAP[_kwlist_10938 + 4] = __str8;
    HEAP[_kwlist_10938 + 8] = __str9;
    HEAP[_kwlist_10938 + 12] = __str10;
    HEAP[_kwlist_10938 + 16] = __str11;
    HEAP[_kwlist_10938 + 20] = __str12;
    HEAP[_kwlist_10938 + 24] = __str13;
    HEAP[_kwlist_10938 + 28] = __str14;
    HEAP[_kwlist_10938 + 32] = __str49;
    HEAP[_kwlist_11010] = __str51;
    HEAP[_kwlist_11010 + 4] = __str52;
    HEAP[_PyEncoderType + 12] = __str68;
    HEAP[_PyEncoderType + 24] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_PyEncoderType + 64] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_PyEncoderType + 88] = _encoder_doc;
    HEAP[_PyEncoderType + 92] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_PyEncoderType + 96] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_PyEncoderType + 120] = _encoder_members;
    HEAP[_PyEncoderType + 148] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_PyEncoderType + 156] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_speedups_methods] = __str69;
    HEAP[_speedups_methods + 4] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_speedups_methods + 12] = _pydoc_encode_basestring_ascii;
    HEAP[_speedups_methods + 16] = __str70;
    HEAP[_speedups_methods + 20] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_speedups_methods + 28] = _pydoc_scanstring;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
