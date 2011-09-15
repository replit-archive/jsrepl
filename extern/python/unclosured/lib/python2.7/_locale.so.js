"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 192;
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
  var $struct_PyUnicodeObject___SIZE = 24;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_langinfo_constant___SIZE = 8;
  var $struct_lconv___SIZE = 56;
  var $struct_lconv___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53 ];
  var _locale__doc__;
  var _setlocale__doc__;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var __str5;
  var _Error;
  var __str6;
  var __str7;
  var _localeconv__doc__;
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
  var _strcoll__doc__;
  var __str26;
  var __str27;
  var _strxfrm__doc__;
  var __str28;
  var _langinfo_constants;
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
  var __str72;
  var __str73;
  var __str74;
  var __str75;
  var __str76;
  var __str77;
  var __str78;
  var __str79;
  var __str80;
  var __str81;
  var __str82;
  var __str83;
  var __str84;
  var _nl_langinfo__doc__;
  var __str85;
  var __str86;
  var __str87;
  var _gettext__doc__;
  var __str88;
  var _dgettext__doc__;
  var __str89;
  var _dcgettext__doc__;
  var __str90;
  var _textdomain__doc__;
  var __str91;
  var _bindtextdomain__doc__;
  var __str92;
  var __str93;
  var _bind_textdomain_codeset__doc__;
  var __str94;
  var __str95;
  var __str96;
  var __str97;
  var __str98;
  var __str99;
  var __str100;
  var __str101;
  var __str102;
  var __str103;
  var _PyLocale_Methods;
  var __str104;
  var __str105;
  var __str106;
  var __str107;
  var __str108;
  var __str109;
  var __str110;
  var __str111;
  var __str112;
  var __str113;
  var __str114;
  var __str115;
  function _copy_grouping($s) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $retval;
      var $0;
      var $i;
      var $result;
      var $val;
      $s_addr = $s;
      $val = 0;
      
      
      
      
      if (HEAP[$s_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = _PyList_New(0);
      $0 = $5;
      __label__ = 22;
      break;
     case 2:
      $i = 0;
      __label__ = 4;
      break;
     case 3:
      
      var $7 = $i + 1;
      $i = $7;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      if (HEAP[$s_addr + $i] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      if (HEAP[$s_addr + $i] != 127) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $20 = _PyList_New($i + 1);
      $result = $20;
      
      if ($20 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 22;
      break;
     case 8:
      $i = -1;
      __label__ = 9;
      break;
     case 9:
      
      var $23 = $i + 1;
      $i = $23;
      
      
      
      
      var $28 = HEAP[$s_addr + $i];
      var $29 = _PyInt_FromLong($28);
      $val = $29;
      
      if ($29 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $34 = _PyList_SetItem($result, $i, $val);
      
      if ($34 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      var $39 = HEAP[$val] - 1;
      
      
      HEAP[$val] = $39;
      
      
      
      
      if (HEAP[$val] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $50 = HEAP[HEAP[$val + 4] + 24];
      
      FUNCTION_TABLE[$50]($val);
      __label__ = 13;
      break;
     case 13:
      $val = 0;
      __label__ = 16;
      break;
     case 14:
      
      
      
      
      
      if (HEAP[$s_addr + $i] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      
      if (HEAP[$s_addr + $i] != 127) {
        __label__ = 9;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $62 = $result;
      __lastLabel__ = 16;
      __label__ = 18;
      break;
     case 17:
      
      
      var $64 = $result;
      if ($val == 0) {
        __lastLabel__ = 17;
        __label__ = 18;
        break;
      } else {
        __lastLabel__ = 17;
        __label__ = 21;
        break;
      }
     case 18:
      var $65 = __lastLabel__ == 16 ? $62 : $64;
      
      
      var $68 = HEAP[$65] - 1;
      
      
      HEAP[$result] = $68;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $79 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$79]($result);
      __label__ = 20;
      break;
     case 20:
      $0 = 0;
      __label__ = 22;
      break;
     case 21:
      $0 = $64;
      __label__ = 22;
      break;
     case 22:
      
      $retval = $0;
      var $retval21 = $retval;
      return $retval21;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _fixup_ulcase() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 256;
    _memset(__stackBase__, 0, 256);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $mods;
      var $strop;
      var $string;
      var $ulo;
      var $ul = __stackBase__;
      var $n;
      var $c;
      var $0 = _PyImport_GetModuleDict();
      $mods = $0;
      
      
      if ($mods == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $4 = _PyDict_GetItemString($mods, __str);
      $string = $4;
      
      
      if ($string != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $8 = _PyModule_GetDict($string);
      $string = $8;
      __label__ = 3;
      break;
     case 3:
      
      var $10 = _PyDict_GetItemString($mods, __str1);
      $strop = $10;
      
      if ($10 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $13 = _PyModule_GetDict($strop);
      $strop = $13;
      __label__ = 5;
      break;
     case 5:
      
      
      if ($string == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      if ($strop == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      $n = 0;
      $c = 0;
      __label__ = 8;
      break;
     case 8:
      var $18 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$18] + 2 * $c] & 256) != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      HEAP[$ul + $n] = $c & 255;
      
      var $31 = $n + 1;
      $n = $31;
      __label__ = 10;
      break;
     case 10:
      
      var $33 = $c + 1;
      $c = $33;
      
      if ($33 <= 255) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $ul12 = $ul;
      
      var $36 = _PyString_FromStringAndSize($ul12, $n);
      $ulo = $36;
      
      
      if ($ulo == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if ($string != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      var $43 = _PyDict_SetItemString($string, __str2, $ulo);
      __label__ = 14;
      break;
     case 14:
      
      
      if ($strop != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      var $48 = _PyDict_SetItemString($strop, __str2, $ulo);
      __label__ = 16;
      break;
     case 16:
      
      
      
      var $52 = HEAP[$ulo] - 1;
      
      
      HEAP[$ulo] = $52;
      
      
      
      
      if (HEAP[$ulo] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $63 = HEAP[HEAP[$ulo + 4] + 24];
      
      FUNCTION_TABLE[$63]($ulo);
      __label__ = 18;
      break;
     case 18:
      $n = 0;
      $c = 0;
      __label__ = 19;
      break;
     case 19:
      var $65 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$65] + 2 * $c] & 512) != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      HEAP[$ul + $n] = $c & 255;
      
      var $78 = $n + 1;
      $n = $78;
      __label__ = 21;
      break;
     case 21:
      
      var $80 = $c + 1;
      $c = $80;
      
      if ($80 <= 255) {
        __label__ = 19;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      var $ul26 = $ul;
      
      var $83 = _PyString_FromStringAndSize($ul26, $n);
      $ulo = $83;
      
      
      if ($ulo == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      if ($string != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      var $90 = _PyDict_SetItemString($string, __str3, $ulo);
      __label__ = 25;
      break;
     case 25:
      
      
      if ($strop != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      var $95 = _PyDict_SetItemString($strop, __str3, $ulo);
      __label__ = 27;
      break;
     case 27:
      
      
      
      var $99 = HEAP[$ulo] - 1;
      
      
      HEAP[$ulo] = $99;
      
      
      
      
      if (HEAP[$ulo] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $110 = HEAP[HEAP[$ulo + 4] + 24];
      
      FUNCTION_TABLE[$110]($ulo);
      __label__ = 29;
      break;
     case 29:
      $n = 0;
      $c = 0;
      __label__ = 30;
      break;
     case 30:
      var $112 = ___ctype_b_loc();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$112] + 2 * $c] & 1024) != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      HEAP[$ul + $n] = $c & 255;
      
      var $125 = $n + 1;
      $n = $125;
      __label__ = 32;
      break;
     case 32:
      
      var $127 = $c + 1;
      $c = $127;
      
      if ($127 <= 255) {
        __label__ = 30;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      var $ul40 = $ul;
      
      var $130 = _PyString_FromStringAndSize($ul40, $n);
      $ulo = $130;
      
      
      if ($ulo == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      if ($string != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      var $137 = _PyDict_SetItemString($string, __str4, $ulo);
      __label__ = 36;
      break;
     case 36:
      
      
      
      var $141 = HEAP[$ulo] - 1;
      
      
      HEAP[$ulo] = $141;
      
      
      
      
      if (HEAP[$ulo] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $152 = HEAP[HEAP[$ulo + 4] + 24];
      
      FUNCTION_TABLE[$152]($ulo);
      __label__ = 38;
      break;
     case 38:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyLocale_setlocale($self, $args) {
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
      var $category = __stackBase__;
      var $locale = __stackBase__ + 4;
      var $result;
      var $result_object;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$locale] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str5, allocate([ $category, 0, 0, 0, $locale, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$locale] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 3:
      var $6 = HEAP[$locale];
      var $7 = HEAP[$category];
      var $8 = _setlocale($7, $6);
      $result = $8;
      
      
      if ($result == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $11 = HEAP[_Error];
      _PyErr_SetString($11, __str6);
      $0 = 0;
      __label__ = 14;
      break;
     case 5:
      
      var $13 = _PyString_FromString($result);
      $result_object = $13;
      
      
      if ($result_object == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 14;
      break;
     case 7:
      
      
      
      
      
      if (HEAP[$category] == 0 | HEAP[$category] == 6) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      _fixup_ulcase();
      __label__ = 9;
      break;
     case 9:
      _PyErr_Clear();
      __label__ = 13;
      break;
     case 10:
      var $20 = HEAP[$category];
      var $21 = _setlocale($20, 0);
      $result = $21;
      
      
      if ($result == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $24 = HEAP[_Error];
      _PyErr_SetString($24, __str7);
      $0 = 0;
      __label__ = 14;
      break;
     case 12:
      
      var $26 = _PyString_FromString($result);
      $result_object = $26;
      __label__ = 13;
      break;
     case 13:
      
      $0 = $result_object;
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
  function _PyLocale_localeconv($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $result;
      var $l;
      var $x;
      $self_addr = $self;
      var $1 = _PyDict_New();
      $result = $1;
      
      
      if ($result == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 82;
      break;
     case 2:
      var $4 = _localeconv();
      $l = $4;
      
      
      var $7 = HEAP[$l];
      var $8 = _PyString_FromString($7);
      $x = $8;
      
      
      if ($x == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $13 = _PyDict_SetItemString($result, __str8, $x);
      
      
      if ($x != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      var $19 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $19;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $30 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$30]($x);
      __label__ = 6;
      break;
     case 6:
      
      
      var $34 = HEAP[$l + 4];
      var $35 = _PyString_FromString($34);
      $x = $35;
      
      if ($35 == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      var $39 = _PyDict_SetItemString($result, __str9, $x);
      
      
      if ($x != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      var $45 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $45;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $56 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$56]($x);
      __label__ = 10;
      break;
     case 10:
      
      
      var $60 = HEAP[$l + 8];
      var $61 = _copy_grouping($60);
      $x = $61;
      
      if ($61 == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $65 = _PyDict_SetItemString($result, __str10, $x);
      
      
      if ($x != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      
      var $71 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $71;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $82 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$82]($x);
      __label__ = 14;
      break;
     case 14:
      
      
      var $86 = HEAP[$l + 12];
      var $87 = _PyString_FromString($86);
      $x = $87;
      
      if ($87 == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      var $91 = _PyDict_SetItemString($result, __str11, $x);
      
      
      if ($x != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      var $97 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $97;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $108 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$108]($x);
      __label__ = 18;
      break;
     case 18:
      
      
      var $112 = HEAP[$l + 16];
      var $113 = _PyString_FromString($112);
      $x = $113;
      
      if ($113 == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      var $117 = _PyDict_SetItemString($result, __str12, $x);
      
      
      if ($x != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      
      
      
      var $123 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $123;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $134 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$134]($x);
      __label__ = 22;
      break;
     case 22:
      
      
      var $138 = HEAP[$l + 20];
      var $139 = _PyString_FromString($138);
      $x = $139;
      
      if ($139 == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      var $143 = _PyDict_SetItemString($result, __str13, $x);
      
      
      if ($x != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 24:
      
      
      
      var $149 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $149;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $160 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$160]($x);
      __label__ = 26;
      break;
     case 26:
      
      
      var $164 = HEAP[$l + 24];
      var $165 = _PyString_FromString($164);
      $x = $165;
      
      if ($165 == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      var $169 = _PyDict_SetItemString($result, __str14, $x);
      
      
      if ($x != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      
      
      
      var $175 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $175;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $186 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$186]($x);
      __label__ = 30;
      break;
     case 30:
      
      
      var $190 = HEAP[$l + 28];
      var $191 = _copy_grouping($190);
      $x = $191;
      
      if ($191 == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      var $195 = _PyDict_SetItemString($result, __str15, $x);
      
      
      if ($x != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 32:
      
      
      
      var $201 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $201;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $212 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$212]($x);
      __label__ = 34;
      break;
     case 34:
      
      
      var $216 = HEAP[$l + 32];
      var $217 = _PyString_FromString($216);
      $x = $217;
      
      if ($217 == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      var $221 = _PyDict_SetItemString($result, __str16, $x);
      
      
      if ($x != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 36:
      
      
      
      var $227 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $227;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $238 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$238]($x);
      __label__ = 38;
      break;
     case 38:
      
      
      var $242 = HEAP[$l + 36];
      var $243 = _PyString_FromString($242);
      $x = $243;
      
      if ($243 == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      
      var $247 = _PyDict_SetItemString($result, __str17, $x);
      
      
      if ($x != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 40:
      
      
      
      var $253 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $253;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $264 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$264]($x);
      __label__ = 42;
      break;
     case 42:
      
      
      
      var $269 = HEAP[$l + 40];
      var $270 = _PyInt_FromLong($269);
      $x = $270;
      
      if ($270 == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      
      
      var $274 = _PyDict_SetItemString($result, __str18, $x);
      
      
      if ($x != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 44:
      
      
      
      var $280 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $280;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      var $291 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$291]($x);
      __label__ = 46;
      break;
     case 46:
      
      
      
      var $296 = HEAP[$l + 41];
      var $297 = _PyInt_FromLong($296);
      $x = $297;
      
      if ($297 == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 47:
      
      
      var $301 = _PyDict_SetItemString($result, __str19, $x);
      
      
      if ($x != 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 48:
      
      
      
      var $307 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $307;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      
      
      var $318 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$318]($x);
      __label__ = 50;
      break;
     case 50:
      
      
      
      var $323 = HEAP[$l + 42];
      var $324 = _PyInt_FromLong($323);
      $x = $324;
      
      if ($324 == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 51:
      
      
      var $328 = _PyDict_SetItemString($result, __str20, $x);
      
      
      if ($x != 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 52:
      
      
      
      var $334 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $334;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      
      
      
      
      var $345 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$345]($x);
      __label__ = 54;
      break;
     case 54:
      
      
      
      var $350 = HEAP[$l + 43];
      var $351 = _PyInt_FromLong($350);
      $x = $351;
      
      if ($351 == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 55:
      
      
      var $355 = _PyDict_SetItemString($result, __str21, $x);
      
      
      if ($x != 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 56:
      
      
      
      var $361 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $361;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      
      
      
      
      var $372 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$372]($x);
      __label__ = 58;
      break;
     case 58:
      
      
      
      var $377 = HEAP[$l + 44];
      var $378 = _PyInt_FromLong($377);
      $x = $378;
      
      if ($378 == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 59:
      
      
      var $382 = _PyDict_SetItemString($result, __str22, $x);
      
      
      if ($x != 0) {
        __label__ = 60;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 60:
      
      
      
      var $388 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $388;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      
      
      
      
      var $399 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$399]($x);
      __label__ = 62;
      break;
     case 62:
      
      
      
      var $404 = HEAP[$l + 45];
      var $405 = _PyInt_FromLong($404);
      $x = $405;
      
      if ($405 == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 63:
      
      
      var $409 = _PyDict_SetItemString($result, __str23, $x);
      
      
      if ($x != 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 64:
      
      
      
      var $415 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $415;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      
      
      
      
      var $426 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$426]($x);
      __label__ = 66;
      break;
     case 66:
      
      
      
      var $431 = HEAP[$l + 46];
      var $432 = _PyInt_FromLong($431);
      $x = $432;
      
      if ($432 == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 67:
      
      
      var $436 = _PyDict_SetItemString($result, __str24, $x);
      
      
      if ($x != 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 68:
      
      
      
      var $442 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $442;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      
      
      
      
      var $453 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$453]($x);
      __label__ = 70;
      break;
     case 70:
      
      
      
      var $458 = HEAP[$l + 47];
      var $459 = _PyInt_FromLong($458);
      $x = $459;
      
      if ($459 == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 71:
      
      
      var $463 = _PyDict_SetItemString($result, __str25, $x);
      
      
      if ($x != 0) {
        __label__ = 72;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 72:
      
      
      
      var $469 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $469;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 73:
      
      
      
      
      var $480 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$480]($x);
      __label__ = 74;
      break;
     case 74:
      
      $0 = $result;
      __label__ = 82;
      break;
     case 75:
      
      
      if ($result != 0) {
        __label__ = 76;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 76:
      
      
      
      var $488 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $488;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 77:
      
      
      
      
      var $499 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$499]($result);
      __label__ = 78;
      break;
     case 78:
      
      
      if ($x != 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 79:
      
      
      
      var $506 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $506;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 80:
      
      
      
      
      var $517 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$517]($x);
      __label__ = 81;
      break;
     case 81:
      $0 = 0;
      __label__ = 82;
      break;
     case 82:
      
      $retval = $0;
      var $retval81 = $retval;
      return $retval81;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyLocale_strcoll($self, $args) {
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
      var $iftmp_45;
      var $iftmp_43;
      var $iftmp_36;
      var $iftmp_34;
      var $0;
      var $os1 = __stackBase__;
      var $os2 = __stackBase__ + 4;
      var $result;
      var $ws1;
      var $ws2;
      var $rel1;
      var $rel2;
      var $len1;
      var $len2;
      $self_addr = $self;
      $args_addr = $args;
      $result = 0;
      $ws1 = 0;
      $ws2 = 0;
      $rel1 = 0;
      $rel2 = 0;
      
      var $2 = _PyArg_UnpackTuple($args_addr, __str26, 2, 2, allocate([ $os1, 0, 0, 0, $os2, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$os1] + 4] + 84] & 134217728) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$os2] + 4] + 84] & 134217728) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      var $21 = HEAP[$os2] + 20;
      
      
      
      var $25 = HEAP[$os1] + 20;
      var $26 = _strcoll($25, $21);
      var $27 = _PyInt_FromLong($26);
      $0 = $27;
      __label__ = 47;
      break;
     case 5:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$os1] + 4] + 84] & 268435456) == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$os2] + 4] + 84] & 268435456) == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $42 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($42, __str27);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$os1] + 4] + 84] & 268435456) == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      var $50 = HEAP[$os1];
      var $51 = _PyUnicodeUCS2_FromObject($50);
      HEAP[$os1] = $51;
      
      
      if (HEAP[$os1] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = 0;
      __label__ = 47;
      break;
     case 11:
      $rel1 = 1;
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$os2] + 4] + 84] & 268435456) == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 13:
      var $61 = HEAP[$os2];
      var $62 = _PyUnicodeUCS2_FromObject($61);
      HEAP[$os2] = $62;
      
      
      if (HEAP[$os2] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      
      
      if ($rel1 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      var $67 = HEAP[$os1];
      
      
      var $70 = HEAP[$67] - 1;
      var $71 = $67;
      HEAP[$71] = $70;
      
      
      
      if (HEAP[$67] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $79 = HEAP[HEAP[HEAP[$os1] + 4] + 24];
      var $80 = HEAP[$os1];
      FUNCTION_TABLE[$79]($80);
      __label__ = 17;
      break;
     case 17:
      $0 = 0;
      __label__ = 47;
      break;
     case 18:
      $rel2 = 1;
      __label__ = 19;
      break;
     case 19:
      
      
      
      
      
      $len1 = HEAP[HEAP[$os1] + 8] + 1;
      
      
      
      if ($len1 * 4 >= 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      
      
      
      if ($len1 * 4 != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      $iftmp_36 = $len1 * 4;
      __label__ = 24;
      break;
     case 22:
      $iftmp_36 = 1;
      __label__ = 24;
      break;
     case 23:
      $iftmp_34 = 0;
      $ws1 = 0;
      __label__ = 25;
      break;
     case 24:
      
      var $95 = _malloc($iftmp_36);
      
      $iftmp_34 = $95;
      $ws1 = $95;
      
      if ($95 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $98 = _PyErr_NoMemory();
      __label__ = 36;
      break;
     case 26:
      
      var $100 = HEAP[$os1];
      
      
      var $103 = _PyUnicodeUCS2_AsWideChar($100, $ws1, $len1);
      var $104 = $103 == -1;
      if ($104) {
        __label__ = 36;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      HEAP[$ws1 + 4 * ($len1 - 1)] = 0;
      
      
      
      
      
      $len2 = HEAP[HEAP[$os2] + 8] + 1;
      
      
      
      if ($len2 * 4 >= 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 28:
      
      
      
      if ($len2 * 4 != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      $iftmp_45 = $len2 * 4;
      __label__ = 32;
      break;
     case 30:
      $iftmp_45 = 1;
      __label__ = 32;
      break;
     case 31:
      $iftmp_43 = 0;
      $ws2 = 0;
      __label__ = 33;
      break;
     case 32:
      
      var $123 = _malloc($iftmp_45);
      
      $iftmp_43 = $123;
      $ws2 = $123;
      
      if ($123 == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      var $126 = _PyErr_NoMemory();
      __label__ = 36;
      break;
     case 34:
      
      var $128 = HEAP[$os2];
      
      
      var $131 = _PyUnicodeUCS2_AsWideChar($128, $ws2, $len2);
      var $132 = $131 == -1;
      if ($132) {
        __label__ = 36;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      
      HEAP[$ws2 + 4 * ($len2 - 1)] = 0;
      
      
      var $139 = _wcscoll($ws1, $ws2);
      var $140 = _PyInt_FromLong($139);
      $result = $140;
      __label__ = 36;
      break;
     case 36:
      
      
      if ($ws1 != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      _free($ws1);
      __label__ = 38;
      break;
     case 38:
      
      
      if ($ws2 != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      _free($ws2);
      __label__ = 40;
      break;
     case 40:
      
      
      if ($rel1 != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 41:
      var $151 = HEAP[$os1];
      
      
      var $154 = HEAP[$151] - 1;
      var $155 = $151;
      HEAP[$155] = $154;
      
      
      
      if (HEAP[$151] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $163 = HEAP[HEAP[HEAP[$os1] + 4] + 24];
      var $164 = HEAP[$os1];
      FUNCTION_TABLE[$163]($164);
      __label__ = 43;
      break;
     case 43:
      
      
      if ($rel2 != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 44:
      var $167 = HEAP[$os2];
      
      
      var $170 = HEAP[$167] - 1;
      var $171 = $167;
      HEAP[$171] = $170;
      
      
      
      if (HEAP[$167] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      var $179 = HEAP[HEAP[HEAP[$os2] + 4] + 24];
      var $180 = HEAP[$os2];
      FUNCTION_TABLE[$179]($180);
      __label__ = 46;
      break;
     case 46:
      
      $0 = $result;
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
  function _PyLocale_strxfrm($self, $args) {
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
      var $s = __stackBase__;
      var $buf;
      var $n1;
      var $n2;
      var $result;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str28, allocate([ $s, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$s];
      var $5 = _strlen($4);
      
      $n1 = $5 + 1;
      
      var $8 = _PyMem_Malloc($n1);
      $buf = $8;
      
      
      if ($buf == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = _PyErr_NoMemory();
      $0 = $11;
      __label__ = 9;
      break;
     case 4:
      var $12 = HEAP[$s];
      
      
      var $15 = _strxfrm($buf, $12, $n1);
      
      $n2 = $15 + 1;
      
      
      
      if ($n2 > $n1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      var $22 = _PyMem_Realloc($buf, $n2);
      $buf = $22;
      
      
      if ($buf == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $25 = _PyErr_NoMemory();
      $0 = $25;
      __label__ = 9;
      break;
     case 7:
      var $26 = HEAP[$s];
      
      
      var $29 = _strxfrm($buf, $26, $n2);
      __label__ = 8;
      break;
     case 8:
      
      var $31 = _PyString_FromString($buf);
      $result = $31;
      
      _PyMem_Free($buf);
      
      $0 = $result;
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
  function _PyLocale_nl_langinfo($self, $args) {
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
      var $iftmp_62;
      var $0;
      var $item = __stackBase__;
      var $i;
      var $result;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str85, allocate([ $item, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      $i = 0;
      __label__ = 9;
      break;
     case 3:
      
      
      
      
      
      
      if (HEAP[_langinfo_constants + $i * 8 + 4] == HEAP[$item]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      var $10 = HEAP[$item];
      var $11 = _nl_langinfo($10);
      $result = $11;
      
      
      if ($result != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      $iftmp_62 = $result;
      __label__ = 7;
      break;
     case 6:
      $iftmp_62 = __str86;
      __label__ = 7;
      break;
     case 7:
      
      var $16 = _PyString_FromString($iftmp_62);
      $0 = $16;
      __label__ = 11;
      break;
     case 8:
      
      var $18 = $i + 1;
      $i = $18;
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      
      if (HEAP[_langinfo_constants + $i * 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      var $24 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($24, __str87);
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
  function _PyIntl_gettext($self, $args) {
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
      var $in = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str88, allocate([ $in, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$in];
      var $5 = _gettext($4);
      var $6 = _PyString_FromString($5);
      $0 = $6;
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
  function _PyIntl_dgettext($self, $args) {
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
      var $domain = __stackBase__;
      var $in = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str89, allocate([ $domain, 0, 0, 0, $in, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$in];
      var $5 = HEAP[$domain];
      var $6 = _dgettext($5, $4);
      var $7 = _PyString_FromString($6);
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
  function _PyIntl_dcgettext($self, $args) {
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
      var $domain = __stackBase__;
      var $msgid = __stackBase__ + 4;
      var $category = __stackBase__ + 8;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str90, allocate([ $domain, 0, 0, 0, $msgid, 0, 0, 0, $category, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$category];
      var $5 = HEAP[$msgid];
      var $6 = HEAP[$domain];
      var $7 = _dcgettext($6, $5, $4);
      var $8 = _PyString_FromString($7);
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
  function _PyIntl_textdomain($self, $args) {
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
      var $domain = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str91, allocate([ $domain, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$domain];
      var $5 = _textdomain($4);
      HEAP[$domain] = $5;
      
      
      if (HEAP[$domain] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_PyExc_OSError];
      var $9 = _PyErr_SetFromErrno($8);
      $0 = 0;
      __label__ = 5;
      break;
     case 4:
      var $10 = HEAP[$domain];
      var $11 = _PyString_FromString($10);
      $0 = $11;
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
  function _PyIntl_bindtextdomain($self, $args) {
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
      var $domain = __stackBase__;
      var $dirname = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str92, allocate([ $domain, 0, 0, 0, $dirname, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 7;
      break;
     case 2:
      
      
      
      if (HEAP[HEAP[$domain]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $7 = HEAP[_Error];
      _PyErr_SetString($7, __str93);
      $0 = 0;
      __label__ = 7;
      break;
     case 4:
      var $8 = HEAP[$dirname];
      var $9 = HEAP[$domain];
      var $10 = _bindtextdomain($9, $8);
      HEAP[$dirname] = $10;
      
      
      if (HEAP[$dirname] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $13 = HEAP[_PyExc_OSError];
      var $14 = _PyErr_SetFromErrno($13);
      $0 = 0;
      __label__ = 7;
      break;
     case 6:
      var $15 = HEAP[$dirname];
      var $16 = _PyString_FromString($15);
      $0 = $16;
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
  function _PyIntl_bind_textdomain_codeset($self, $args) {
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
      var $domain = __stackBase__;
      var $codeset = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str92, allocate([ $domain, 0, 0, 0, $codeset, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$codeset];
      var $5 = HEAP[$domain];
      var $6 = _bind_textdomain_codeset($5, $4);
      HEAP[$codeset] = $6;
      
      
      if (HEAP[$codeset] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = HEAP[$codeset];
      var $10 = _PyString_FromString($9);
      $0 = $10;
      __label__ = 5;
      break;
     case 4:
      
      var $12 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $12;
      $0 = __Py_NoneStruct;
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
  function _init_locale() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $d;
      var $x;
      var $i;
      var $0 = _Py_InitModule4(__str104, _PyLocale_Methods, 0, 0, 1013);
      $m = $0;
      
      
      if ($m == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $4 = _PyModule_GetDict($m);
      $d = $4;
      var $5 = _PyInt_FromLong(0);
      $x = $5;
      
      
      var $8 = _PyDict_SetItemString($d, __str105, $x);
      
      
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
      var $27 = _PyInt_FromLong(2);
      $x = $27;
      
      
      var $30 = _PyDict_SetItemString($d, __str106, $x);
      
      
      if ($x != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      var $36 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $36;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $47 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$47]($x);
      __label__ = 7;
      break;
     case 7:
      var $49 = _PyInt_FromLong(3);
      $x = $49;
      
      
      var $52 = _PyDict_SetItemString($d, __str107, $x);
      
      
      if ($x != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      var $58 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $58;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $69 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$69]($x);
      __label__ = 10;
      break;
     case 10:
      var $71 = _PyInt_FromLong(4);
      $x = $71;
      
      
      var $74 = _PyDict_SetItemString($d, __str108, $x);
      
      
      if ($x != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      
      var $80 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $80;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $91 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$91]($x);
      __label__ = 13;
      break;
     case 13:
      var $93 = _PyInt_FromLong(5);
      $x = $93;
      
      
      var $96 = _PyDict_SetItemString($d, __str109, $x);
      
      
      if ($x != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      var $102 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $102;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $113 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$113]($x);
      __label__ = 16;
      break;
     case 16:
      var $115 = _PyInt_FromLong(1);
      $x = $115;
      
      
      var $118 = _PyDict_SetItemString($d, __str110, $x);
      
      
      if ($x != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      var $124 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $124;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $135 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$135]($x);
      __label__ = 19;
      break;
     case 19:
      var $137 = _PyInt_FromLong(6);
      $x = $137;
      
      
      var $140 = _PyDict_SetItemString($d, __str111, $x);
      
      
      if ($x != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      
      
      
      var $146 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $146;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $157 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$157]($x);
      __label__ = 22;
      break;
     case 22:
      var $159 = _PyInt_FromLong(127);
      $x = $159;
      
      
      var $162 = _PyDict_SetItemString($d, __str112, $x);
      
      
      if ($x != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 23:
      
      
      
      var $168 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $168;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $179 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$179]($x);
      __label__ = 25;
      break;
     case 25:
      var $181 = _PyErr_NewException(__str113, 0, 0);
      HEAP[_Error] = $181;
      var $182 = HEAP[_Error];
      
      var $184 = _PyDict_SetItemString($d, __str114, $182);
      var $185 = _PyString_FromString(_locale__doc__);
      $x = $185;
      
      
      var $188 = _PyDict_SetItemString($d, __str115, $x);
      
      
      if ($x != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 26:
      
      
      
      var $194 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $194;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $205 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$205]($x);
      __label__ = 28;
      break;
     case 28:
      $i = 0;
      
      
      
      
      
      if (HEAP[_langinfo_constants + $i * 8] != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      var $215 = HEAP[_langinfo_constants + $i * 8 + 4];
      
      
      
      var $219 = HEAP[_langinfo_constants + $i * 8];
      
      var $221 = _PyModule_AddIntConstant($m, $219, $215);
      
      var $223 = $i + 1;
      $i = $223;
      
      
      
      
      
      if (HEAP[_langinfo_constants + $i * 8] != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_locale"] = _init_locale;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _PyLocale_setlocale, 0, _PyLocale_localeconv, 0, _PyLocale_strcoll, 0, _PyLocale_strxfrm, 0, _PyLocale_nl_langinfo, 0, _PyIntl_gettext, 0, _PyIntl_dgettext, 0, _PyIntl_dcgettext, 0, _PyIntl_textdomain, 0, _PyIntl_bindtextdomain, 0, _PyIntl_bind_textdomain_codeset, 0 ]);
  function run(args) {
    _locale__doc__ = allocate([ 83, 117, 112, 112, 111, 114, 116, 32, 102, 111, 114, 32, 80, 79, 83, 73, 88, 32, 108, 111, 99, 97, 108, 101, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _setlocale__doc__ = allocate([ 40, 105, 110, 116, 101, 103, 101, 114, 44, 115, 116, 114, 105, 110, 103, 61, 78, 111, 110, 101, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 46, 32, 65, 99, 116, 105, 118, 97, 116, 101, 115, 47, 113, 117, 101, 114, 105, 101, 115, 32, 108, 111, 99, 97, 108, 101, 32, 112, 114, 111, 99, 101, 115, 115, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 115, 116, 114, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 117, 112, 112, 101, 114, 99, 97, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 108, 111, 119, 101, 114, 99, 97, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 108, 101, 116, 116, 101, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 105, 124, 122, 58, 115, 101, 116, 108, 111, 99, 97, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _Error = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str6 = allocate([ 117, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 108, 111, 99, 97, 108, 101, 32, 115, 101, 116, 116, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 108, 111, 99, 97, 108, 101, 32, 113, 117, 101, 114, 121, 32, 102, 97, 105, 108, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    _localeconv__doc__ = allocate([ 40, 41, 32, 45, 62, 32, 100, 105, 99, 116, 46, 32, 82, 101, 116, 117, 114, 110, 115, 32, 110, 117, 109, 101, 114, 105, 99, 32, 97, 110, 100, 32, 109, 111, 110, 101, 116, 97, 114, 121, 32, 108, 111, 99, 97, 108, 101, 45, 115, 112, 101, 99, 105, 102, 105, 99, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 100, 101, 99, 105, 109, 97, 108, 95, 112, 111, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 116, 104, 111, 117, 115, 97, 110, 100, 115, 95, 115, 101, 112, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 103, 114, 111, 117, 112, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 105, 110, 116, 95, 99, 117, 114, 114, 95, 115, 121, 109, 98, 111, 108, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 99, 117, 114, 114, 101, 110, 99, 121, 95, 115, 121, 109, 98, 111, 108, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 109, 111, 110, 95, 100, 101, 99, 105, 109, 97, 108, 95, 112, 111, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 109, 111, 110, 95, 116, 104, 111, 117, 115, 97, 110, 100, 115, 95, 115, 101, 112, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 109, 111, 110, 95, 103, 114, 111, 117, 112, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 112, 111, 115, 105, 116, 105, 118, 101, 95, 115, 105, 103, 110, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 110, 101, 103, 97, 116, 105, 118, 101, 95, 115, 105, 103, 110, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 105, 110, 116, 95, 102, 114, 97, 99, 95, 100, 105, 103, 105, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 102, 114, 97, 99, 95, 100, 105, 103, 105, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 112, 95, 99, 115, 95, 112, 114, 101, 99, 101, 100, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 112, 95, 115, 101, 112, 95, 98, 121, 95, 115, 112, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 110, 95, 99, 115, 95, 112, 114, 101, 99, 101, 100, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 110, 95, 115, 101, 112, 95, 98, 121, 95, 115, 112, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 112, 95, 115, 105, 103, 110, 95, 112, 111, 115, 110, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 110, 95, 115, 105, 103, 110, 95, 112, 111, 115, 110, 0 ], "i8", ALLOC_NORMAL);
    _strcoll__doc__ = allocate([ 115, 116, 114, 105, 110, 103, 44, 115, 116, 114, 105, 110, 103, 32, 45, 62, 32, 105, 110, 116, 46, 32, 67, 111, 109, 112, 97, 114, 101, 115, 32, 116, 119, 111, 32, 115, 116, 114, 105, 110, 103, 115, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 116, 104, 101, 32, 108, 111, 99, 97, 108, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 115, 116, 114, 99, 111, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 115, 116, 114, 99, 111, 108, 108, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 116, 114, 105, 110, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    _strxfrm__doc__ = allocate([ 115, 116, 114, 105, 110, 103, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 46, 32, 82, 101, 116, 117, 114, 110, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 116, 104, 97, 116, 32, 98, 101, 104, 97, 118, 101, 115, 32, 102, 111, 114, 32, 99, 109, 112, 32, 108, 111, 99, 97, 108, 101, 45, 97, 119, 97, 114, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 115, 58, 115, 116, 114, 120, 102, 114, 109, 0 ], "i8", ALLOC_NORMAL);
    _langinfo_constants = allocate([ 0, 0, 0, 0, 131079, 0, 0, 0, 0, 0, 0, 0, 131080, 0, 0, 0, 0, 0, 0, 0, 131081, 0, 0, 0, 0, 0, 0, 0, 131082, 0, 0, 0, 0, 0, 0, 0, 131083, 0, 0, 0, 0, 0, 0, 0, 131084, 0, 0, 0, 0, 0, 0, 0, 131085, 0, 0, 0, 0, 0, 0, 0, 131072, 0, 0, 0, 0, 0, 0, 0, 131073, 0, 0, 0, 0, 0, 0, 0, 131074, 0, 0, 0, 0, 0, 0, 0, 131075, 0, 0, 0, 0, 0, 0, 0, 131076, 0, 0, 0, 0, 0, 0, 0, 131077, 0, 0, 0, 0, 0, 0, 0, 131078, 0, 0, 0, 0, 0, 0, 0, 131098, 0, 0, 0, 0, 0, 0, 0, 131099, 0, 0, 0, 0, 0, 0, 0, 131100, 0, 0, 0, 0, 0, 0, 0, 131101, 0, 0, 0, 0, 0, 0, 0, 131102, 0, 0, 0, 0, 0, 0, 0, 131103, 0, 0, 0, 0, 0, 0, 0, 131104, 0, 0, 0, 0, 0, 0, 0, 131105, 0, 0, 0, 0, 0, 0, 0, 131106, 0, 0, 0, 0, 0, 0, 0, 131107, 0, 0, 0, 0, 0, 0, 0, 131108, 0, 0, 0, 0, 0, 0, 0, 131109, 0, 0, 0, 0, 0, 0, 0, 131086, 0, 0, 0, 0, 0, 0, 0, 131087, 0, 0, 0, 0, 0, 0, 0, 131088, 0, 0, 0, 0, 0, 0, 0, 131089, 0, 0, 0, 0, 0, 0, 0, 131090, 0, 0, 0, 0, 0, 0, 0, 131091, 0, 0, 0, 0, 0, 0, 0, 131092, 0, 0, 0, 0, 0, 0, 0, 131093, 0, 0, 0, 0, 0, 0, 0, 131094, 0, 0, 0, 0, 0, 0, 0, 131095, 0, 0, 0, 0, 0, 0, 0, 131096, 0, 0, 0, 0, 0, 0, 0, 131097, 0, 0, 0, 0, 0, 0, 0, 65536, 0, 0, 0, 0, 0, 0, 0, 65537, 0, 0, 0, 0, 0, 0, 0, 262159, 0, 0, 0, 0, 0, 0, 0, 131112, 0, 0, 0, 0, 0, 0, 0, 131113, 0, 0, 0, 0, 0, 0, 0, 131114, 0, 0, 0, 0, 0, 0, 0, 131110, 0, 0, 0, 0, 0, 0, 0, 131111, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 131115, 0, 0, 0, 0, 0, 0, 0, 131116, 0, 0, 0, 0, 0, 0, 0, 131118, 0, 0, 0, 0, 0, 0, 0, 131120, 0, 0, 0, 0, 0, 0, 0, 131121, 0, 0, 0, 0, 0, 0, 0, 131119, 0, 0, 0, 0, 0, 0, 0, 327680, 0, 0, 0, 0, 0, 0, 0, 327681, 0, 0, 0, 0, 0, 0, 0, 131180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str29 = allocate([ 68, 65, 89, 95, 49, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 68, 65, 89, 95, 50, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 68, 65, 89, 95, 51, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 68, 65, 89, 95, 52, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 68, 65, 89, 95, 53, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 68, 65, 89, 95, 54, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 68, 65, 89, 95, 55, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 65, 66, 68, 65, 89, 95, 49, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 65, 66, 68, 65, 89, 95, 50, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 65, 66, 68, 65, 89, 95, 51, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 65, 66, 68, 65, 89, 95, 52, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 65, 66, 68, 65, 89, 95, 53, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 65, 66, 68, 65, 89, 95, 54, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 65, 66, 68, 65, 89, 95, 55, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 77, 79, 78, 95, 49, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 77, 79, 78, 95, 50, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 77, 79, 78, 95, 51, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 77, 79, 78, 95, 52, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 77, 79, 78, 95, 53, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 77, 79, 78, 95, 54, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 77, 79, 78, 95, 55, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 77, 79, 78, 95, 56, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 77, 79, 78, 95, 57, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 77, 79, 78, 95, 49, 48, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 77, 79, 78, 95, 49, 49, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 77, 79, 78, 95, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 65, 66, 77, 79, 78, 95, 49, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 65, 66, 77, 79, 78, 95, 50, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 65, 66, 77, 79, 78, 95, 51, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 65, 66, 77, 79, 78, 95, 52, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 65, 66, 77, 79, 78, 95, 53, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 65, 66, 77, 79, 78, 95, 54, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 65, 66, 77, 79, 78, 95, 55, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 65, 66, 77, 79, 78, 95, 56, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 65, 66, 77, 79, 78, 95, 57, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 65, 66, 77, 79, 78, 95, 49, 48, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 65, 66, 77, 79, 78, 95, 49, 49, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 65, 66, 77, 79, 78, 95, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 82, 65, 68, 73, 88, 67, 72, 65, 82, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 84, 72, 79, 85, 83, 69, 80, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 67, 82, 78, 67, 89, 83, 84, 82, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 68, 95, 84, 95, 70, 77, 84, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 68, 95, 70, 77, 84, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 84, 95, 70, 77, 84, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 65, 77, 95, 83, 84, 82, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 80, 77, 95, 83, 84, 82, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 67, 79, 68, 69, 83, 69, 84, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 84, 95, 70, 77, 84, 95, 65, 77, 80, 77, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 69, 82, 65, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 69, 82, 65, 95, 68, 95, 70, 77, 84, 0 ], "i8", ALLOC_NORMAL);
    __str79 = allocate([ 69, 82, 65, 95, 68, 95, 84, 95, 70, 77, 84, 0 ], "i8", ALLOC_NORMAL);
    __str80 = allocate([ 69, 82, 65, 95, 84, 95, 70, 77, 84, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 65, 76, 84, 95, 68, 73, 71, 73, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str82 = allocate([ 89, 69, 83, 69, 88, 80, 82, 0 ], "i8", ALLOC_NORMAL);
    __str83 = allocate([ 78, 79, 69, 88, 80, 82, 0 ], "i8", ALLOC_NORMAL);
    __str84 = allocate([ 95, 68, 65, 84, 69, 95, 70, 77, 84, 0 ], "i8", ALLOC_NORMAL);
    _nl_langinfo__doc__ = allocate([ 110, 108, 95, 108, 97, 110, 103, 105, 110, 102, 111, 40, 107, 101, 121, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 116, 104, 101, 32, 108, 111, 99, 97, 108, 101, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 32, 97, 115, 115, 111, 99, 105, 97, 116, 101, 100, 32, 119, 105, 116, 104, 32, 107, 101, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 105, 58, 110, 108, 95, 108, 97, 110, 103, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str86 = allocate(1, "i8", ALLOC_NORMAL);
    __str87 = allocate([ 117, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 108, 97, 110, 103, 105, 110, 102, 111, 32, 99, 111, 110, 115, 116, 97, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _gettext__doc__ = allocate([ 103, 101, 116, 116, 101, 120, 116, 40, 109, 115, 103, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 82, 101, 116, 117, 114, 110, 32, 116, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 111, 102, 32, 109, 115, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str88 = allocate([ 115, 0 ], "i8", ALLOC_NORMAL);
    _dgettext__doc__ = allocate([ 100, 103, 101, 116, 116, 101, 120, 116, 40, 100, 111, 109, 97, 105, 110, 44, 32, 109, 115, 103, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 82, 101, 116, 117, 114, 110, 32, 116, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 111, 102, 32, 109, 115, 103, 32, 105, 110, 32, 100, 111, 109, 97, 105, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str89 = allocate([ 122, 115, 0 ], "i8", ALLOC_NORMAL);
    _dcgettext__doc__ = allocate([ 100, 99, 103, 101, 116, 116, 101, 120, 116, 40, 100, 111, 109, 97, 105, 110, 44, 32, 109, 115, 103, 44, 32, 99, 97, 116, 101, 103, 111, 114, 121, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 82, 101, 116, 117, 114, 110, 32, 116, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 111, 102, 32, 109, 115, 103, 32, 105, 110, 32, 100, 111, 109, 97, 105, 110, 32, 97, 110, 100, 32, 99, 97, 116, 101, 103, 111, 114, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str90 = allocate([ 122, 115, 105, 0 ], "i8", ALLOC_NORMAL);
    _textdomain__doc__ = allocate([ 116, 101, 120, 116, 100, 111, 109, 97, 105, 110, 40, 100, 111, 109, 97, 105, 110, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 83, 101, 116, 32, 116, 104, 101, 32, 67, 32, 108, 105, 98, 114, 97, 114, 121, 39, 115, 32, 116, 101, 120, 116, 100, 109, 97, 105, 110, 32, 116, 111, 32, 100, 111, 109, 97, 105, 110, 44, 32, 114, 101, 116, 117, 114, 110, 105, 110, 103, 32, 116, 104, 101, 32, 110, 101, 119, 32, 100, 111, 109, 97, 105, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str91 = allocate([ 122, 0 ], "i8", ALLOC_NORMAL);
    _bindtextdomain__doc__ = allocate([ 98, 105, 110, 100, 116, 101, 120, 116, 100, 111, 109, 97, 105, 110, 40, 100, 111, 109, 97, 105, 110, 44, 32, 100, 105, 114, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 66, 105, 110, 100, 32, 116, 104, 101, 32, 67, 32, 108, 105, 98, 114, 97, 114, 121, 39, 115, 32, 100, 111, 109, 97, 105, 110, 32, 116, 111, 32, 100, 105, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str92 = allocate([ 115, 122, 0 ], "i8", ALLOC_NORMAL);
    __str93 = allocate([ 100, 111, 109, 97, 105, 110, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 110, 111, 110, 45, 101, 109, 112, 116, 121, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _bind_textdomain_codeset__doc__ = allocate([ 98, 105, 110, 100, 95, 116, 101, 120, 116, 100, 111, 109, 97, 105, 110, 95, 99, 111, 100, 101, 115, 101, 116, 40, 100, 111, 109, 97, 105, 110, 44, 32, 99, 111, 100, 101, 115, 101, 116, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 66, 105, 110, 100, 32, 116, 104, 101, 32, 67, 32, 108, 105, 98, 114, 97, 114, 121, 39, 115, 32, 100, 111, 109, 97, 105, 110, 32, 116, 111, 32, 99, 111, 100, 101, 115, 101, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str94 = allocate([ 115, 101, 116, 108, 111, 99, 97, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str95 = allocate([ 108, 111, 99, 97, 108, 101, 99, 111, 110, 118, 0 ], "i8", ALLOC_NORMAL);
    __str96 = allocate([ 115, 116, 114, 120, 102, 114, 109, 0 ], "i8", ALLOC_NORMAL);
    __str97 = allocate([ 110, 108, 95, 108, 97, 110, 103, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str98 = allocate([ 103, 101, 116, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str99 = allocate([ 100, 103, 101, 116, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str100 = allocate([ 100, 99, 103, 101, 116, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str101 = allocate([ 116, 101, 120, 116, 100, 111, 109, 97, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str102 = allocate([ 98, 105, 110, 100, 116, 101, 120, 116, 100, 111, 109, 97, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str103 = allocate([ 98, 105, 110, 100, 95, 116, 101, 120, 116, 100, 111, 109, 97, 105, 110, 95, 99, 111, 100, 101, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    _PyLocale_Methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str104 = allocate([ 95, 108, 111, 99, 97, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str105 = allocate([ 76, 67, 95, 67, 84, 89, 80, 69, 0 ], "i8", ALLOC_NORMAL);
    __str106 = allocate([ 76, 67, 95, 84, 73, 77, 69, 0 ], "i8", ALLOC_NORMAL);
    __str107 = allocate([ 76, 67, 95, 67, 79, 76, 76, 65, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str108 = allocate([ 76, 67, 95, 77, 79, 78, 69, 84, 65, 82, 89, 0 ], "i8", ALLOC_NORMAL);
    __str109 = allocate([ 76, 67, 95, 77, 69, 83, 83, 65, 71, 69, 83, 0 ], "i8", ALLOC_NORMAL);
    __str110 = allocate([ 76, 67, 95, 78, 85, 77, 69, 82, 73, 67, 0 ], "i8", ALLOC_NORMAL);
    __str111 = allocate([ 76, 67, 95, 65, 76, 76, 0 ], "i8", ALLOC_NORMAL);
    __str112 = allocate([ 67, 72, 65, 82, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str113 = allocate([ 108, 111, 99, 97, 108, 101, 46, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str114 = allocate([ 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str115 = allocate([ 95, 95, 100, 111, 99, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_langinfo_constants] = __str29;
    HEAP[_langinfo_constants + 8] = __str30;
    HEAP[_langinfo_constants + 16] = __str31;
    HEAP[_langinfo_constants + 24] = __str32;
    HEAP[_langinfo_constants + 32] = __str33;
    HEAP[_langinfo_constants + 40] = __str34;
    HEAP[_langinfo_constants + 48] = __str35;
    HEAP[_langinfo_constants + 56] = __str36;
    HEAP[_langinfo_constants + 64] = __str37;
    HEAP[_langinfo_constants + 72] = __str38;
    HEAP[_langinfo_constants + 80] = __str39;
    HEAP[_langinfo_constants + 88] = __str40;
    HEAP[_langinfo_constants + 96] = __str41;
    HEAP[_langinfo_constants + 104] = __str42;
    HEAP[_langinfo_constants + 112] = __str43;
    HEAP[_langinfo_constants + 120] = __str44;
    HEAP[_langinfo_constants + 128] = __str45;
    HEAP[_langinfo_constants + 136] = __str46;
    HEAP[_langinfo_constants + 144] = __str47;
    HEAP[_langinfo_constants + 152] = __str48;
    HEAP[_langinfo_constants + 160] = __str49;
    HEAP[_langinfo_constants + 168] = __str50;
    HEAP[_langinfo_constants + 176] = __str51;
    HEAP[_langinfo_constants + 184] = __str52;
    HEAP[_langinfo_constants + 192] = __str53;
    HEAP[_langinfo_constants + 200] = __str54;
    HEAP[_langinfo_constants + 208] = __str55;
    HEAP[_langinfo_constants + 216] = __str56;
    HEAP[_langinfo_constants + 224] = __str57;
    HEAP[_langinfo_constants + 232] = __str58;
    HEAP[_langinfo_constants + 240] = __str59;
    HEAP[_langinfo_constants + 248] = __str60;
    HEAP[_langinfo_constants + 256] = __str61;
    HEAP[_langinfo_constants + 264] = __str62;
    HEAP[_langinfo_constants + 272] = __str63;
    HEAP[_langinfo_constants + 280] = __str64;
    HEAP[_langinfo_constants + 288] = __str65;
    HEAP[_langinfo_constants + 296] = __str66;
    HEAP[_langinfo_constants + 304] = __str67;
    HEAP[_langinfo_constants + 312] = __str68;
    HEAP[_langinfo_constants + 320] = __str69;
    HEAP[_langinfo_constants + 328] = __str70;
    HEAP[_langinfo_constants + 336] = __str71;
    HEAP[_langinfo_constants + 344] = __str72;
    HEAP[_langinfo_constants + 352] = __str73;
    HEAP[_langinfo_constants + 360] = __str74;
    HEAP[_langinfo_constants + 368] = __str75;
    HEAP[_langinfo_constants + 376] = __str76;
    HEAP[_langinfo_constants + 384] = __str77;
    HEAP[_langinfo_constants + 392] = __str78;
    HEAP[_langinfo_constants + 400] = __str79;
    HEAP[_langinfo_constants + 408] = __str80;
    HEAP[_langinfo_constants + 416] = __str81;
    HEAP[_langinfo_constants + 424] = __str82;
    HEAP[_langinfo_constants + 432] = __str83;
    HEAP[_langinfo_constants + 440] = __str84;
    HEAP[_PyLocale_Methods] = __str94;
    HEAP[_PyLocale_Methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_PyLocale_Methods + 12] = _setlocale__doc__;
    HEAP[_PyLocale_Methods + 16] = __str95;
    HEAP[_PyLocale_Methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_PyLocale_Methods + 28] = _localeconv__doc__;
    HEAP[_PyLocale_Methods + 32] = __str26;
    HEAP[_PyLocale_Methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_PyLocale_Methods + 44] = _strcoll__doc__;
    HEAP[_PyLocale_Methods + 48] = __str96;
    HEAP[_PyLocale_Methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_PyLocale_Methods + 60] = _strxfrm__doc__;
    HEAP[_PyLocale_Methods + 64] = __str97;
    HEAP[_PyLocale_Methods + 68] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_PyLocale_Methods + 76] = _nl_langinfo__doc__;
    HEAP[_PyLocale_Methods + 80] = __str98;
    HEAP[_PyLocale_Methods + 84] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_PyLocale_Methods + 92] = _gettext__doc__;
    HEAP[_PyLocale_Methods + 96] = __str99;
    HEAP[_PyLocale_Methods + 100] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_PyLocale_Methods + 108] = _dgettext__doc__;
    HEAP[_PyLocale_Methods + 112] = __str100;
    HEAP[_PyLocale_Methods + 116] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_PyLocale_Methods + 124] = _dcgettext__doc__;
    HEAP[_PyLocale_Methods + 128] = __str101;
    HEAP[_PyLocale_Methods + 132] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_PyLocale_Methods + 140] = _textdomain__doc__;
    HEAP[_PyLocale_Methods + 144] = __str102;
    HEAP[_PyLocale_Methods + 148] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_PyLocale_Methods + 156] = _bindtextdomain__doc__;
    HEAP[_PyLocale_Methods + 160] = __str103;
    HEAP[_PyLocale_Methods + 164] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_PyLocale_Methods + 172] = _bind_textdomain_codeset__doc__;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
