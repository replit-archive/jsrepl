"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 196;
  var $1___SIZE = 64;
  var $2___SIZE = 16;
  var $3___SIZE = 60;
  var $4___SIZE = 20;
  var $5___SIZE = 20;
  var $6___SIZE = 100;
  var $7___SIZE = 20;
  var $8___SIZE = 196;
  var $9___SIZE = 48;
  var $10___SIZE = 196;
  var $11___SIZE = 112;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_Pdata___SIZE = 20;
  var $struct_Picklerobject___SIZE = 72;
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyClassObject___SIZE = 36;
  var $struct_PyCompilerFlags___SIZE = 4;
  var $struct_PyFileObject___SIZE = 84;
  var $struct_PyFloatObject___SIZE = 16;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyInterpreterState___SIZE = 40;
  var $struct_PyListObject___SIZE = 20;
  var $struct_PyLongObject___SIZE = 0;
  var $struct_PyLongObject___FLATTENER = [];
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyThreadState___SIZE = 84;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_PyUnicodeObject___SIZE = 24;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct_PycStringIO_CAPI___SIZE = 32;
  var $struct_Unpicklerobject___SIZE = 80;
  var $struct__IO_marker___SIZE = 12;
  var $struct__frame___SIZE = 0;
  var $struct__frame___FLATTENER = [];
  var $struct__typeobject___SIZE = 196;
  var _cPickle_module_documentation;
  var _MARKv;
  var __str;
  var __str1;
  var _PdataType;
  var _UnpicklingError;
  var __str2;
  var _PycStringIO;
  var _empty_tuple;
  var _PicklingError;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var __str7;
  var ___main___str;
  var __str8;
  var _none_9451;
  var _len_9463;
  var _buf_9462;
  var __str9;
  var __str10;
  var __str11;
  var _l_9538;
  var __str12;
  var _string_9677;
  var __str13;
  var _string_9895;
  var __str14;
  var __str15;
  var ___PRETTY_FUNCTION___10017;
  var _pop_10042;
  var _len2opcode_10044;
  var _pop_mark_10043;
  var _tuple_10041;
  var __str16;
  var ___PRETTY_FUNCTION___10137;
  var _append_10135;
  var _appends_10136;
  var __str17;
  var ___PRETTY_FUNCTION___10326;
  var __str18;
  var _setitem_10324;
  var _setitems_10325;
  var __str19;
  var ___PRETTY_FUNCTION___10501;
  var __str20;
  var _setitem_10499;
  var _setitems_10500;
  var __str21;
  var __str22;
  var __str23;
  var ___class___str;
  var ___getinitargs___str;
  var __str24;
  var _inst_10654;
  var _obj_10655;
  var ___getstate___str;
  var ___dict___str;
  var _build_10656;
  var ___name___str;
  var __str25;
  var __str26;
  var __str27;
  var __str28;
  var __str29;
  var _two_tuple;
  var _extension_registry;
  var __str30;
  var __str31;
  var __str32;
  var __str33;
  var _global_10855;
  var __str34;
  var _persid_10999;
  var _binpersid_11000;
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
  var _newobj_11120;
  var _reduce_11118;
  var _build_11119;
  var _PickleError;
  var _dispatch_table;
  var ___reduce_ex___str;
  var ___reduce___str;
  var _UnpickleableError;
  var __str47;
  var __str48;
  var _stop_11690;
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
  var _Pickler_methods;
  var __str60;
  var __str61;
  var _write_str;
  var __str62;
  var __str63;
  var _dispatch_table_str;
  var __str64;
  var __str65;
  var _kwlist_12011;
  var __str66;
  var __str67;
  var __str68;
  var __str69;
  var __str70;
  var __str71;
  var __str72;
  var __str73;
  var _Pickler_members;
  var __str74;
  var __str75;
  var _Pickler_getsets;
  var _Picklertype__doc__;
  var __str76;
  var _Picklertype;
  var __str77;
  var __str78;
  var __str79;
  var __str80;
  var __str81;
  var ___PRETTY_FUNCTION___12572;
  var __str82;
  var ___PRETTY_FUNCTION___12743;
  var __str83;
  var __str84;
  var __str85;
  var __str86;
  var __str87;
  var __str88;
  var __str89;
  var __str90;
  var __str91;
  var __str92;
  var _BadPickleGet;
  var __str93;
  var ___PRETTY_FUNCTION___14342;
  var __str94;
  var _extension_cache;
  var _inverted_registry;
  var __str95;
  var __str96;
  var _append_str;
  var ___setstate___str;
  var __str97;
  var __str98;
  var __str99;
  var ___PRETTY_FUNCTION___15142;
  var __str100;
  var __str101;
  var __str102;
  var ___PRETTY_FUNCTION___15558;
  var __str103;
  var __str104;
  var __str105;
  var __str106;
  var _Unpickler_methods;
  var _readline_str;
  var _read_str;
  var __str107;
  var __str108;
  var __str109;
  var __str110;
  var __str111;
  var _kwlist_16354;
  var __str112;
  var __str113;
  var _kwlist_16391;
  var __str114;
  var _Unpicklertype__doc__;
  var __str115;
  var _Unpicklertype;
  var __str116;
  var __str117;
  var __str118;
  var __str119;
  var __str120;
  var __str121;
  var __str122;
  var __str123;
  var __str124;
  var __str125;
  var _cPickle_methods;
  var __str126;
  var __str127;
  var __str128;
  var __str129;
  var __str130;
  var __str131;
  var __str132;
  var __str133;
  var __str134;
  var __str135;
  var __str136;
  var __str137;
  var __str138;
  var __str139;
  var __str140;
  var __str141;
  var __str142;
  var __str143;
  var __str144;
  var __str145;
  var __str146;
  var __str147;
  var __str148;
  var __str149;
  var __str150;
  var __str151;
  var __str152;
  var __str153;
  var __str154;
  var __str155;
  var __str156;
  var __str157;
  var __str158;
  var __str159;
  var __str160;
  var __str161;
  var __str162;
  var __str163;
  var __str164;
  var __str165;
  var __str166;
  var __str167;
  function _Pdata_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $i;
      var $p;
      $self_addr = $self;
      
      
      
      $i = HEAP[$self_addr + 8];
      
      
      
      $p = HEAP[$self_addr + 16];
      
      var $7 = $i - 1;
      $i = $7;
      
      if ($7 >= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      var $10 = HEAP[$p];
      
      
      var $13 = HEAP[$10] - 1;
      var $14 = $10;
      HEAP[$14] = $13;
      
      
      
      if (HEAP[$10] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$p] + 4] + 24];
      
      var $25 = HEAP[$p];
      FUNCTION_TABLE[$23]($25);
      __label__ = 3;
      break;
     case 3:
      
      var $27 = $p + 4;
      $p = $27;
      
      var $29 = $i - 1;
      $i = $29;
      
      if ($29 >= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[$self_addr + 16] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      var $38 = HEAP[$self_addr + 16];
      _free($38);
      __label__ = 6;
      break;
     case 6:
      
      
      _PyObject_Free($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Pdata_New() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval;
      var $0;
      var $self;
      var $1 = __PyObject_New(_PdataType);
      
      $self = $1;
      
      
      if ($self == 0) {
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
      
      
      HEAP[$self + 12] = 8;
      
      
      HEAP[$self + 8] = 0;
      
      
      
      var $12 = HEAP[$self + 12] * 4;
      var $13 = _malloc($12);
      var $14 = $13;
      
      
      HEAP[$self + 16] = $14;
      
      
      
      
      
      var $22 = $self;
      if (HEAP[$self + 16] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = $22;
      __label__ = 7;
      break;
     case 4:
      
      
      var $25 = HEAP[$22] - 1;
      
      HEAP[$22] = $25;
      
      
      
      if (HEAP[$22] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      var $35 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$35]($self);
      __label__ = 6;
      break;
     case 6:
      var $38 = _PyErr_NoMemory();
      $0 = $38;
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
  function _stackUnderflow() {
    
    var $retval;
    var $0;
    var $1 = HEAP[_UnpicklingError];
    _PyErr_SetString($1, __str2);
    $0 = -1;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _Pdata_clear($self, $clearto) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $clearto_addr;
      var $retval;
      var $0;
      var $i;
      var $p;
      var $_py_tmp;
      $self_addr = $self;
      $clearto_addr = $clearto;
      
      
      if ($clearto_addr < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = _stackUnderflow();
      $0 = $3;
      __label__ = 10;
      break;
     case 2:
      
      
      
      
      
      if (HEAP[$self_addr + 8] <= $clearto_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 10;
      break;
     case 4:
      
      
      
      $i = HEAP[$self_addr + 8];
      
      
      
      
      
      $p = HEAP[$self_addr + 16] + 4 * $clearto_addr;
      
      var $18 = $i - 1;
      $i = $18;
      
      
      
      if ($i >= $clearto_addr) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      
      
      if (HEAP[$p] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      $_py_tmp = HEAP[$p];
      
      HEAP[$p] = 0;
      
      
      
      var $31 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $31;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $42 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$42]($_py_tmp);
      __label__ = 8;
      break;
     case 8:
      
      var $45 = $p + 4;
      $p = $45;
      
      var $47 = $i - 1;
      $i = $47;
      
      
      
      if ($i >= $clearto_addr) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      HEAP[$self_addr + 8] = $clearto_addr;
      $0 = 0;
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
  function _Pdata_grow($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $bigger;
      var $nbytes;
      var $tmp;
      $self_addr = $self;
      
      
      
      
      $bigger = HEAP[$self_addr + 12] << 1;
      
      
      if ($bigger <= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      $nbytes = $bigger * 4;
      
      var $10 = Math.floor($nbytes / 4);
      
      
      if ($10 != $bigger) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $16 = HEAP[$self_addr + 16];
      
      var $18 = _realloc($16, $nbytes);
      
      $tmp = $18;
      
      
      if ($tmp == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      HEAP[$self_addr + 16] = $tmp;
      
      
      
      HEAP[$self_addr + 12] = $bigger;
      $0 = 0;
      __label__ = 5;
      break;
     case 4:
      var $28 = _PyErr_NoMemory();
      $0 = -1;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Pdata_popTuple($self, $start) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $start_addr;
      var $retval;
      var $0;
      var $r;
      var $i;
      var $j;
      var $l;
      $self_addr = $self;
      $start_addr = $start;
      
      
      
      
      
      $l = HEAP[$self_addr + 8] - $start_addr;
      
      var $7 = _PyTuple_New($l);
      $r = $7;
      
      
      if ($r == 0) {
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
      
      $i = $start_addr;
      $j = 0;
      
      
      
      if ($j < $l) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      var $22 = HEAP[HEAP[$self_addr + 16] + 4 * $i];
      
      
      HEAP[$r + 12 + $j * 4] = $22;
      
      var $26 = $i + 1;
      $i = $26;
      
      var $28 = $j + 1;
      $j = $28;
      
      
      
      if ($j < $l) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      HEAP[$self_addr + 8] = $start_addr;
      
      $0 = $r;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Pdata_popList($self, $start) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $start_addr;
      var $retval;
      var $0;
      var $r;
      var $i;
      var $j;
      var $l;
      $self_addr = $self;
      $start_addr = $start;
      
      
      
      
      
      $l = HEAP[$self_addr + 8] - $start_addr;
      
      var $7 = _PyList_New($l);
      $r = $7;
      
      
      if ($r == 0) {
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
      
      $i = $start_addr;
      $j = 0;
      
      
      
      if ($j < $l) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      var $23 = HEAP[HEAP[$self_addr + 16] + 4 * $i];
      
      var $25 = HEAP[$r + 12] + 4 * $j;
      HEAP[$25] = $23;
      
      var $27 = $i + 1;
      $i = $27;
      
      var $29 = $j + 1;
      $j = $29;
      
      
      
      if ($j < $l) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      HEAP[$self_addr + 8] = $start_addr;
      
      $0 = $r;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cPickle_ErrFormat($ErrType, $stringformat, $format) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ErrType_addr;
      var $stringformat_addr;
      var $format_addr;
      var $0;
      var $va = __stackBase__;
      var $args;
      var $retval1;
      var $v;
      $ErrType_addr = $ErrType;
      $stringformat_addr = $stringformat;
      $format_addr = $format;
      $args = 0;
      $retval1 = 0;
      
      HEAP[$va] = arguments[_cPickle_ErrFormat.length];
      
      
      if ($format_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[$va];
      
      var $5 = _Py_VaBuildValue($format_addr, $3);
      $args = $5;
      __label__ = 2;
      break;
     case 2:
      
      
      
      if ($format_addr != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      if ($args == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 24;
      break;
     case 5:
      
      
      if ($stringformat_addr != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      var $13 = _PyString_FromString($stringformat_addr);
      $retval1 = $13;
      
      
      if ($retval1 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if ($args != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 24;
      break;
     case 9:
      
      
      
      var $20 = $args != 0;
      if ($retval1 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 10:
      if ($20) {
        __label__ = 11;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 11:
      
      
      var $23 = _PyString_Format($retval1, $args);
      $v = $23;
      
      
      
      var $27 = HEAP[$retval1] - 1;
      
      
      HEAP[$retval1] = $27;
      
      
      
      
      if (HEAP[$retval1] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $38 = HEAP[HEAP[$retval1 + 4] + 24];
      
      FUNCTION_TABLE[$38]($retval1);
      __label__ = 13;
      break;
     case 13:
      
      
      
      var $43 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $43;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $54 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$54]($args);
      __label__ = 15;
      break;
     case 15:
      
      
      if ($v == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $0 = 0;
      __label__ = 24;
      break;
     case 17:
      
      $retval1 = $v;
      __label__ = 21;
      break;
     case 18:
      if ($20) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      $retval1 = $args;
      __label__ = 21;
      break;
     case 20:
      
      _PyErr_SetObject($ErrType_addr, __Py_NoneStruct);
      $0 = 0;
      __label__ = 24;
      break;
     case 21:
      
      
      _PyErr_SetObject($ErrType_addr, $retval1);
      
      
      
      var $66 = HEAP[$retval1] - 1;
      
      
      HEAP[$retval1] = $66;
      
      
      
      
      if (HEAP[$retval1] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $77 = HEAP[HEAP[$retval1 + 4] + 24];
      
      FUNCTION_TABLE[$77]($retval1);
      __label__ = 23;
      break;
     case 23:
      $0 = 0;
      __label__ = 24;
      break;
     case 24:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _write_file($self, $s, $n) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $s_addr;
      var $n_addr;
      var $retval;
      var $0;
      var $nbyteswritten;
      $self_addr = $self;
      $s_addr = $s;
      $n_addr = $n;
      
      
      if ($s_addr == 0) {
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
      
      
      
      var $6 = HEAP[$self_addr + 16];
      _PyFile_IncUseCount($6);
      
      
      var $9 = HEAP[$self_addr + 8];
      
      
      var $12 = _fwrite($s_addr, 1, $n_addr, $9);
      $nbyteswritten = $12;
      
      
      
      var $16 = HEAP[$self_addr + 16];
      _PyFile_DecUseCount($16);
      
      
      
      if ($n_addr != $nbyteswritten) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $20 = HEAP[_PyExc_IOError];
      var $21 = _PyErr_SetFromErrno($20);
      $0 = -1;
      __label__ = 5;
      break;
     case 4:
      
      $0 = $n_addr;
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
  function _write_cStringIO($self, $s, $n) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $s_addr;
      var $n_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $s_addr = $s;
      $n_addr = $n;
      
      
      if ($s_addr == 0) {
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
      
      
      var $5 = HEAP[HEAP[_PycStringIO] + 8];
      
      
      var $8 = HEAP[$self_addr + 16];
      
      
      var $11 = FUNCTION_TABLE[$5]($8, $s_addr, $n_addr);
      
      
      if ($11 != $n_addr) {
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
      
      $0 = $n_addr;
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
  function _write_none($self, $s, $n) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $s_addr;
      var $n_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $s_addr = $s;
      $n_addr = $n;
      
      
      if ($s_addr == 0) {
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
      
      $0 = $n_addr;
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
  function _write_other($self, $s, $_n) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $s_addr;
      var $_n_addr;
      var $retval;
      var $0;
      var $py_str;
      var $junk;
      var $n;
      $self_addr = $self;
      $s_addr = $s;
      $_n_addr = $_n;
      $py_str = 0;
      $junk = 0;
      
      $n = $_n_addr;
      
      
      
      
      var $6 = HEAP[$self_addr + 56];
      if ($s_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      if ($6 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 39;
      break;
     case 3:
      
      
      var $10 = HEAP[$self_addr + 56];
      
      
      var $13 = HEAP[$self_addr + 52];
      var $14 = _PyString_FromStringAndSize($13, $10);
      $py_str = $14;
      
      
      if ($py_str == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 39;
      break;
     case 5:
      
      if ($6 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $21 = $n;
      
      
      if ($21 + HEAP[$self_addr + 56] > 256) {
        __lastLabel__ = 6;
        __label__ = 7;
        break;
      } else {
        __lastLabel__ = 6;
        __label__ = 10;
        break;
      }
     case 7:
      
      var $25 = _write_other($self_addr, 0, 0);
      
      if ($25 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = -1;
      __label__ = 39;
      break;
     case 9:
      var $_pr = $n;
      __lastLabel__ = 9;
      __label__ = 10;
      break;
     case 10:
      var $27 = __lastLabel__ == 9 ? $_pr : $21;
      
      if ($27 > 256) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      var $31 = _PyString_FromStringAndSize($s_addr, $n);
      $py_str = $31;
      
      
      if ($py_str == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      $0 = -1;
      __label__ = 39;
      break;
     case 13:
      
      
      
      
      
      
      
      var $41 = HEAP[$self_addr + 52] + HEAP[$self_addr + 56];
      
      _llvm_memcpy_p0i8_p0i8_i32($41, $s_addr, $n, 1, 0);
      
      
      
      
      var $47 = $n + HEAP[$self_addr + 56];
      
      
      HEAP[$self_addr + 56] = $47;
      
      $0 = $n;
      __label__ = 39;
      break;
     case 14:
      
      
      
      
      var $55 = $self_addr;
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 15:
      
      
      
      if (HEAP[$55 + 24] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $59 = _PyTuple_New(1);
      
      
      HEAP[$self_addr + 24] = $59;
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 24] + 12] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      
      
      
      
      
      
      var $80 = HEAP[HEAP[$self_addr + 24] + 12];
      
      
      var $83 = HEAP[$80] - 1;
      var $84 = $80;
      HEAP[$84] = $83;
      
      
      
      if (HEAP[$80] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      
      
      
      
      
      var $98 = HEAP[HEAP[HEAP[HEAP[$self_addr + 24] + 12] + 4] + 24];
      
      
      
      
      
      
      var $105 = HEAP[HEAP[$self_addr + 24] + 12];
      FUNCTION_TABLE[$98]($105);
      __label__ = 20;
      break;
     case 20:
      
      
      
      
      
      var $111 = HEAP[$self_addr + 24] + 12;
      
      HEAP[$111] = $py_str;
      __label__ = 23;
      break;
     case 21:
      
      
      
      var $116 = HEAP[$py_str] - 1;
      
      
      HEAP[$py_str] = $116;
      
      
      
      
      if (HEAP[$py_str] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $127 = HEAP[HEAP[$py_str + 4] + 24];
      
      FUNCTION_TABLE[$127]($py_str);
      __label__ = 23;
      break;
     case 23:
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 24:
      
      
      var $135 = HEAP[$self_addr + 24];
      
      
      var $138 = HEAP[$self_addr + 12];
      var $139 = _PyObject_Call($138, $135, 0);
      $junk = $139;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 24]] > 1) {
        __label__ = 25;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 25:
      
      
      var $148 = HEAP[$self_addr + 24];
      
      
      var $151 = HEAP[$148] - 1;
      var $152 = $148;
      HEAP[$152] = $151;
      
      
      
      if (HEAP[$148] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      
      
      var $162 = HEAP[HEAP[HEAP[$self_addr + 24] + 4] + 24];
      
      
      var $165 = HEAP[$self_addr + 24];
      FUNCTION_TABLE[$162]($165);
      __label__ = 27;
      break;
     case 27:
      
      
      HEAP[$self_addr + 24] = 0;
      __label__ = 28;
      break;
     case 28:
      
      
      if ($junk != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 29:
      
      
      
      var $173 = HEAP[$junk] - 1;
      
      
      HEAP[$junk] = $173;
      
      
      
      
      if (HEAP[$junk] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 30:
      
      
      
      
      var $184 = HEAP[HEAP[$junk + 4] + 24];
      
      FUNCTION_TABLE[$184]($junk);
      __label__ = 38;
      break;
     case 31:
      $0 = -1;
      __label__ = 39;
      break;
     case 32:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$55 + 16] + 8] == HEAP[HEAP[$self_addr + 16] + 12]) {
        __label__ = 33;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 33:
      
      
      
      var $201 = HEAP[$self_addr + 16];
      var $202 = _Pdata_grow($201);
      
      if ($202 < 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 34:
      
      
      
      var $207 = HEAP[$py_str] - 1;
      
      
      HEAP[$py_str] = $207;
      
      
      
      
      if (HEAP[$py_str] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $218 = HEAP[HEAP[$py_str + 4] + 24];
      
      FUNCTION_TABLE[$218]($py_str);
      __label__ = 36;
      break;
     case 36:
      $0 = -1;
      __label__ = 39;
      break;
     case 37:
      
      
      
      
      
      
      
      
      
      var $229 = HEAP[$self_addr + 16];
      
      var $231 = HEAP[$229 + 8];
      var $232 = HEAP[HEAP[$self_addr + 16] + 16] + 4 * $231;
      
      HEAP[$232] = $py_str;
      var $234 = $231 + 1;
      var $235 = $229 + 8;
      HEAP[$235] = $234;
      __label__ = 38;
      break;
     case 38:
      
      
      HEAP[$self_addr + 56] = 0;
      
      $0 = $n;
      __label__ = 39;
      break;
     case 39:
      
      $retval = $0;
      var $retval41 = $retval;
      return $retval41;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _read_file($self, $s, $n) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $s_addr;
      var $n_addr;
      var $retval;
      var $0;
      var $nbytesread;
      var $size;
      var $newbuf;
      $self_addr = $self;
      $s_addr = $s;
      $n_addr = $n;
      
      
      
      
      if (HEAP[$self_addr + 68] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      var $max = $n_addr >= 32 ? $n_addr : 32;
      $size = $max;
      
      var $8 = _malloc($size);
      
      
      HEAP[$self_addr + 72] = $8;
      
      
      
      
      if (HEAP[$self_addr + 72] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $15 = _PyErr_NoMemory();
      $0 = -1;
      __label__ = 13;
      break;
     case 3:
      
      
      
      HEAP[$self_addr + 68] = $size;
      __label__ = 8;
      break;
     case 4:
      
      
      
      
      
      if (HEAP[$self_addr + 68] < $n_addr) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $27 = HEAP[$self_addr + 72];
      var $28 = _realloc($27, $n_addr);
      $newbuf = $28;
      
      
      if ($newbuf == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $31 = _PyErr_NoMemory();
      $0 = -1;
      __label__ = 13;
      break;
     case 7:
      
      
      
      HEAP[$self_addr + 72] = $newbuf;
      
      
      
      HEAP[$self_addr + 68] = $n_addr;
      __label__ = 8;
      break;
     case 8:
      
      
      
      var $41 = HEAP[$self_addr + 12];
      _PyFile_IncUseCount($41);
      
      
      var $44 = HEAP[$self_addr + 8];
      
      
      
      var $48 = HEAP[$self_addr + 72];
      var $49 = _fread($48, 1, $n_addr, $44);
      $nbytesread = $49;
      
      
      
      var $53 = HEAP[$self_addr + 12];
      _PyFile_DecUseCount($53);
      
      
      
      var $57 = $self_addr;
      if ($n_addr != $nbytesread) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      var $59 = HEAP[$57 + 8];
      var $60 = _feof($59);
      
      if ($60 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $62 = HEAP[_PyExc_EOFError];
      _PyErr_SetNone($62);
      $0 = -1;
      __label__ = 13;
      break;
     case 11:
      var $63 = HEAP[_PyExc_IOError];
      var $64 = _PyErr_SetFromErrno($63);
      $0 = -1;
      __label__ = 13;
      break;
     case 12:
      
      var $66 = HEAP[$57 + 72];
      
      HEAP[$s_addr] = $66;
      
      $0 = $n_addr;
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
  function _readline_file($self, $s) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $s_addr;
      var $retval;
      var $0;
      var $i;
      var $bigger;
      var $newbuf;
      $self_addr = $self;
      $s_addr = $s;
      
      
      
      
      if (HEAP[$self_addr + 68] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $5 = _malloc(40);
      
      
      HEAP[$self_addr + 72] = $5;
      
      
      
      
      if (HEAP[$self_addr + 72] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $12 = _PyErr_NoMemory();
      $0 = -1;
      __label__ = 15;
      break;
     case 3:
      
      
      HEAP[$self_addr + 68] = 40;
      __label__ = 4;
      break;
     case 4:
      $i = 0;
      __label__ = 9;
      break;
     case 5:
      
      var $16 = HEAP[$53 + 8];
      var $17 = _feof($16);
      
      if ($17 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $21 = HEAP[$self_addr + 72];
      
      
      var $24 = HEAP[$self_addr + 8];
      var $25 = __IO_getc($24);
      var $26 = $25 & 255;
      
      var $28 = $21 + $i;
      HEAP[$28] = $26;
      
      
      
      
      if (HEAP[$21 + $i] == 10) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      var $38 = HEAP[$self_addr + 72] + ($i + 1);
      HEAP[$38] = 0;
      
      
      var $41 = HEAP[$self_addr + 72];
      
      HEAP[$s_addr] = $41;
      
      
      $0 = $i + 1;
      __label__ = 15;
      break;
     case 8:
      
      var $46 = $i + 1;
      $i = $46;
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      
      
      var $53 = $self_addr;
      if (HEAP[$self_addr + 68] - 1 > $i) {
        __label__ = 5;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      $bigger = HEAP[$53 + 68] << 1;
      
      
      if ($bigger <= 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $59 = _PyErr_NoMemory();
      $0 = -1;
      __label__ = 15;
      break;
     case 12:
      
      
      
      var $63 = HEAP[$self_addr + 72];
      var $64 = _realloc($63, $bigger);
      $newbuf = $64;
      
      
      if ($newbuf == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $67 = _PyErr_NoMemory();
      $0 = -1;
      __label__ = 15;
      break;
     case 14:
      
      
      
      HEAP[$self_addr + 72] = $newbuf;
      
      
      
      HEAP[$self_addr + 68] = $bigger;
      __label__ = 9;
      break;
     case 15:
      
      $retval = $0;
      var $retval16 = $retval;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _read_cStringIO($self, $s, $n) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $s_addr;
      var $n_addr;
      var $retval;
      var $0;
      var $ptr = __stackBase__;
      $self_addr = $self;
      $s_addr = $s;
      $n_addr = $n;
      
      
      var $3 = HEAP[HEAP[_PycStringIO]];
      
      
      var $6 = HEAP[$self_addr + 12];
      
      var $8 = FUNCTION_TABLE[$3]($6, $ptr, $n_addr);
      
      
      if ($8 != $n_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $11 = HEAP[_PyExc_EOFError];
      _PyErr_SetNone($11);
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
      var $12 = HEAP[$ptr];
      
      HEAP[$s_addr] = $12;
      
      $0 = $n_addr;
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
  function _readline_cStringIO($self, $s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $s_addr;
      var $retval;
      var $0;
      var $n;
      var $ptr = __stackBase__;
      $self_addr = $self;
      $s_addr = $s;
      
      
      var $3 = HEAP[HEAP[_PycStringIO] + 4];
      
      
      var $6 = HEAP[$self_addr + 12];
      var $7 = FUNCTION_TABLE[$3]($6, $ptr);
      $n = $7;
      
      
      if ($n < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
      var $10 = HEAP[$ptr];
      
      HEAP[$s_addr] = $10;
      
      $0 = $n;
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
  function _read_other($self, $s, $n) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $s_addr;
      var $n_addr;
      var $retval;
      var $0;
      var $bytes;
      var $str;
      $self_addr = $self;
      $s_addr = $s;
      $n_addr = $n;
      $str = 0;
      
      var $2 = _PyInt_FromSsize_t($n_addr);
      $bytes = $2;
      
      
      if ($bytes == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 25;
      break;
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $9 = _PyTuple_New(1);
      
      
      HEAP[$self_addr + 28] = $9;
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 28] + 12] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $30 = HEAP[HEAP[$self_addr + 28] + 12];
      
      
      var $33 = HEAP[$30] - 1;
      var $34 = $30;
      HEAP[$34] = $33;
      
      
      
      if (HEAP[$30] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      
      var $48 = HEAP[HEAP[HEAP[HEAP[$self_addr + 28] + 12] + 4] + 24];
      
      
      
      
      
      
      var $55 = HEAP[HEAP[$self_addr + 28] + 12];
      FUNCTION_TABLE[$48]($55);
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      
      var $61 = HEAP[$self_addr + 28] + 12;
      
      HEAP[$61] = $bytes;
      __label__ = 10;
      break;
     case 8:
      
      
      
      var $66 = HEAP[$bytes] - 1;
      
      
      HEAP[$bytes] = $66;
      
      
      
      
      if (HEAP[$bytes] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $77 = HEAP[HEAP[$bytes + 4] + 24];
      
      FUNCTION_TABLE[$77]($bytes);
      __label__ = 10;
      break;
     case 10:
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      
      var $85 = HEAP[$self_addr + 28];
      
      
      var $88 = HEAP[$self_addr + 20];
      var $89 = _PyObject_Call($88, $85, 0);
      $str = $89;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 28]] > 1) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      
      var $98 = HEAP[$self_addr + 28];
      
      
      var $101 = HEAP[$98] - 1;
      var $102 = $98;
      HEAP[$102] = $101;
      
      
      
      if (HEAP[$98] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      
      var $112 = HEAP[HEAP[HEAP[$self_addr + 28] + 4] + 24];
      
      
      var $115 = HEAP[$self_addr + 28];
      FUNCTION_TABLE[$112]($115);
      __label__ = 14;
      break;
     case 14:
      
      
      HEAP[$self_addr + 28] = 0;
      __label__ = 15;
      break;
     case 15:
      
      
      if ($str == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $0 = -1;
      __label__ = 25;
      break;
     case 17:
      
      
      
      
      if (HEAP[$self_addr + 44] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      
      
      var $126 = HEAP[$self_addr + 44];
      
      
      var $129 = HEAP[$126] - 1;
      var $130 = $126;
      HEAP[$130] = $129;
      
      
      
      if (HEAP[$126] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      
      var $140 = HEAP[HEAP[HEAP[$self_addr + 44] + 4] + 24];
      
      
      var $143 = HEAP[$self_addr + 44];
      FUNCTION_TABLE[$140]($143);
      __label__ = 20;
      break;
     case 20:
      
      
      
      HEAP[$self_addr + 44] = $str;
      
      var $148 = _PyString_AsString($str);
      
      HEAP[$s_addr] = $148;
      
      
      
      if (HEAP[$s_addr] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      $0 = -1;
      __label__ = 25;
      break;
     case 22:
      
      
      
      
      
      
      if (HEAP[$str + 8] != $n_addr) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      var $159 = HEAP[_PyExc_EOFError];
      _PyErr_SetNone($159);
      $0 = -1;
      __label__ = 25;
      break;
     case 24:
      
      $0 = $n_addr;
      __label__ = 25;
      break;
     case 25:
      
      $retval = $0;
      var $retval25 = $retval;
      return $retval25;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _readline_other($self, $s) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $s_addr;
      var $retval;
      var $0;
      var $str;
      var $str_size;
      $self_addr = $self;
      $s_addr = $s;
      var $1 = HEAP[_empty_tuple];
      
      
      var $4 = HEAP[$self_addr + 16];
      var $5 = _PyObject_CallObject($4, $1);
      $str = $5;
      
      
      if ($str == 0) {
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
      
      var $9 = _PyString_Size($str);
      $str_size = $9;
      
      
      if ($str_size < 0) {
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
      
      
      
      
      if (HEAP[$self_addr + 44] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      var $18 = HEAP[$self_addr + 44];
      
      
      var $21 = HEAP[$18] - 1;
      var $22 = $18;
      HEAP[$22] = $21;
      
      
      
      if (HEAP[$18] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      
      var $32 = HEAP[HEAP[HEAP[$self_addr + 44] + 4] + 24];
      
      
      var $35 = HEAP[$self_addr + 44];
      FUNCTION_TABLE[$32]($35);
      __label__ = 7;
      break;
     case 7:
      
      
      
      HEAP[$self_addr + 44] = $str;
      
      var $40 = _PyString_AsString($str);
      
      HEAP[$s_addr] = $40;
      
      
      
      if (HEAP[$s_addr] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = -1;
      __label__ = 10;
      break;
     case 9:
      
      $0 = $str_size;
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
  function _pystrndup($s, $n) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $n_addr;
      var $retval;
      var $0;
      var $r;
      $s_addr = $s;
      $n_addr = $n;
      
      
      var $3 = _malloc($n_addr + 1);
      $r = $3;
      
      
      if ($r == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $6 = _PyErr_NoMemory();
      
      $0 = $6;
      __label__ = 3;
      break;
     case 2:
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($r, $s_addr, $n_addr, 1, 0);
      
      
      
      HEAP[$r + $n_addr] = 0;
      
      $0 = $r;
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
  function _get($self, $id) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 30;
    _memset(__stackBase__, 0, 30);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $id_addr;
      var $retval;
      var $0;
      var $value;
      var $mv;
      var $c_value;
      var $s = __stackBase__;
      var $len;
      $self_addr = $self;
      $id_addr = $id;
      
      
      var $3 = HEAP[$self_addr + 20];
      
      var $5 = _PyDict_GetItem($3, $id_addr);
      $mv = $5;
      
      
      if ($mv == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $8 = HEAP[_PyExc_KeyError];
      
      _PyErr_SetObject($8, $id_addr);
      $0 = -1;
      __label__ = 21;
      break;
     case 2:
      
      var $11 = _PyTuple_GetItem($mv, 0);
      $value = $11;
      
      
      if ($value == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 21;
      break;
     case 4:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$value + 4] + 84] & 8388608) == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $21 = HEAP[_PicklingError];
      _PyErr_SetString($21, __str3);
      $0 = -1;
      __label__ = 21;
      break;
     case 6:
      
      
      
      
      $c_value = HEAP[$value + 8];
      
      
      
      
      if (HEAP[$self_addr + 40] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      HEAP[$s] = 103;
      
      var $31 = $s + 1;
      
      var $33 = _PyOS_snprintf($31, 29, __str4, allocate([ $c_value, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      var $s8 = $s;
      var $34 = _strlen($s8);
      $len = $34;
      __label__ = 18;
      break;
     case 8:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 16] + 4] == _PdataType) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 9:
      
      var $42 = _write_other($self_addr, 0, 0);
      
      if ($42 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = -1;
      __label__ = 21;
      break;
     case 11:
      
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 16] + 8] == HEAP[HEAP[$self_addr + 16] + 12]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      
      var $60 = HEAP[$self_addr + 16];
      var $61 = _Pdata_grow($60);
      
      if ($61 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = -1;
      __label__ = 21;
      break;
     case 14:
      
      
      
      var $66 = HEAP[$mv] + 1;
      
      
      HEAP[$mv] = $66;
      
      
      
      
      
      
      
      
      
      var $78 = HEAP[$self_addr + 16];
      
      var $80 = HEAP[$78 + 8];
      var $81 = HEAP[HEAP[$self_addr + 16] + 16] + 4 * $80;
      
      HEAP[$81] = $mv;
      var $83 = $80 + 1;
      var $84 = $78 + 8;
      HEAP[$84] = $83;
      $0 = 0;
      __label__ = 21;
      break;
     case 15:
      
      
      var $87 = $s;
      if ($c_value <= 255) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      HEAP[$87] = 104;
      
      
      
      HEAP[$s + 1] = $c_value & 255;
      $len = 2;
      __label__ = 18;
      break;
     case 17:
      HEAP[$87] = 106;
      
      
      
      HEAP[$s + 1] = $c_value & 255;
      
      
      
      
      HEAP[$s + 2] = $c_value >> 8 & 255;
      
      
      
      
      HEAP[$s + 3] = $c_value >> 16 & 255;
      
      
      
      
      HEAP[$s + 4] = $c_value >> 24 & 255;
      $len = 5;
      __label__ = 18;
      break;
     case 18:
      
      
      var $108 = HEAP[$self_addr + 48];
      
      
      var $s20 = $s;
      var $111 = FUNCTION_TABLE[$108]($self_addr, $s20, $len);
      
      if ($111 < 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      $0 = -1;
      __label__ = 21;
      break;
     case 20:
      $0 = 0;
      __label__ = 21;
      break;
     case 21:
      
      $retval = $0;
      var $retval24 = $retval;
      STACKTOP = __stackBase__;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _put($self, $ob) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $ob_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $ob_addr = $ob;
      
      
      
      
      if (HEAP[$ob_addr] <= 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$self_addr + 44] != 0) {
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
      
      
      var $11 = _put2($self_addr, $ob_addr);
      $0 = $11;
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
  function _put2($self, $ob) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 30;
    _memset(__stackBase__, 0, 30);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $ob_addr;
      var $retval;
      var $0;
      var $c_str = __stackBase__;
      var $p;
      var $len;
      var $res;
      var $py_ob_id;
      var $memo_len;
      var $t;
      $self_addr = $self;
      $ob_addr = $ob;
      $res = -1;
      $py_ob_id = 0;
      $memo_len = 0;
      $t = 0;
      
      
      
      
      if (HEAP[$self_addr + 44] != 0) {
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
      
      
      var $7 = HEAP[$self_addr + 20];
      var $8 = _PyDict_Size($7);
      $p = $8;
      
      
      if ($p < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $12 = $p + 1;
      $p = $12;
      
      
      var $15 = _PyLong_FromVoidPtr($ob_addr);
      $py_ob_id = $15;
      
      
      if ($py_ob_id == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $19 = _PyInt_FromLong($p);
      $memo_len = $19;
      
      
      if ($memo_len == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $22 = _PyTuple_New(2);
      $t = $22;
      
      
      if ($t == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      HEAP[$t + 12] = $memo_len;
      
      
      
      var $33 = HEAP[$memo_len] + 1;
      
      
      HEAP[$memo_len] = $33;
      
      
      
      
      
      HEAP[$t + 12 + 4] = $ob_addr;
      
      
      
      var $44 = HEAP[$ob_addr] + 1;
      
      
      HEAP[$ob_addr] = $44;
      
      
      var $49 = HEAP[$self_addr + 20];
      
      
      var $52 = _PyDict_SetItem($49, $py_ob_id, $t);
      
      if ($52 < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[$self_addr + 40] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      HEAP[$c_str] = 112;
      
      var $59 = $c_str + 1;
      
      var $61 = _PyOS_snprintf($59, 29, __str5, allocate([ $p, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      var $c_str9 = $c_str;
      var $62 = _strlen($c_str9);
      $len = $62;
      __label__ = 19;
      break;
     case 9:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 16] + 4] == _PdataType) {
        __label__ = 10;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 10:
      
      var $70 = _write_other($self_addr, 0, 0);
      
      if ($70 < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = -1;
      __label__ = 31;
      break;
     case 12:
      
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 16] + 8] == HEAP[HEAP[$self_addr + 16] + 12]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      
      var $88 = HEAP[$self_addr + 16];
      var $89 = _Pdata_grow($88);
      
      if ($89 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = -1;
      __label__ = 31;
      break;
     case 15:
      
      
      
      var $94 = HEAP[$memo_len] + 1;
      
      
      HEAP[$memo_len] = $94;
      
      
      
      
      
      
      
      
      
      var $106 = HEAP[$self_addr + 16];
      
      var $108 = HEAP[$106 + 8];
      var $109 = HEAP[HEAP[$self_addr + 16] + 16] + 4 * $108;
      
      HEAP[$109] = $memo_len;
      var $111 = $108 + 1;
      var $112 = $106 + 8;
      HEAP[$112] = $111;
      $res = 0;
      __label__ = 21;
      break;
     case 16:
      
      
      var $115 = $c_str;
      if ($p > 255) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      HEAP[$115] = 114;
      
      
      
      HEAP[$c_str + 1] = $p & 255;
      
      
      
      
      HEAP[$c_str + 2] = $p >> 8 & 255;
      
      
      
      
      HEAP[$c_str + 3] = $p >> 16 & 255;
      
      
      
      
      HEAP[$c_str + 4] = $p >> 24 & 255;
      $len = 5;
      __label__ = 19;
      break;
     case 18:
      HEAP[$115] = 113;
      
      
      
      HEAP[$c_str + 1] = $p & 255;
      $len = 2;
      __label__ = 19;
      break;
     case 19:
      
      
      var $136 = HEAP[$self_addr + 48];
      
      
      var $c_str21 = $c_str;
      var $139 = FUNCTION_TABLE[$136]($self_addr, $c_str21, $len);
      
      if ($139 < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      $res = 0;
      __label__ = 21;
      break;
     case 21:
      
      
      if ($py_ob_id != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      
      var $145 = HEAP[$py_ob_id] - 1;
      
      
      HEAP[$py_ob_id] = $145;
      
      
      
      
      if (HEAP[$py_ob_id] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $156 = HEAP[HEAP[$py_ob_id + 4] + 24];
      
      FUNCTION_TABLE[$156]($py_ob_id);
      __label__ = 24;
      break;
     case 24:
      
      
      if ($memo_len != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      
      var $163 = HEAP[$memo_len] - 1;
      
      
      HEAP[$memo_len] = $163;
      
      
      
      
      if (HEAP[$memo_len] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $174 = HEAP[HEAP[$memo_len + 4] + 24];
      
      FUNCTION_TABLE[$174]($memo_len);
      __label__ = 27;
      break;
     case 27:
      
      
      if ($t != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      
      
      
      var $181 = HEAP[$t] - 1;
      
      
      HEAP[$t] = $181;
      
      
      
      
      if (HEAP[$t] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $192 = HEAP[HEAP[$t + 4] + 24];
      
      FUNCTION_TABLE[$192]($t);
      __label__ = 30;
      break;
     case 30:
      
      $0 = $res;
      __label__ = 31;
      break;
     case 31:
      
      $retval = $0;
      var $retval33 = $retval;
      STACKTOP = __stackBase__;
      return $retval33;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _whichmodule($global, $global_name) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $global_addr;
      var $global_name_addr;
      var $retval;
      var $0;
      var $i = __stackBase__;
      var $j;
      var $module = __stackBase__ + 4;
      var $modules_dict;
      var $global_name_attr;
      var $name = __stackBase__ + 8;
      $global_addr = $global;
      $global_name_addr = $global_name;
      HEAP[$module] = 0;
      $modules_dict = 0;
      $global_name_attr = 0;
      HEAP[$name] = 0;
      
      var $2 = _PyObject_GetAttrString($global_addr, __str6);
      HEAP[$module] = $2;
      
      
      if (HEAP[$module] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $0 = HEAP[$module];
      __label__ = 21;
      break;
     case 2:
      var $6 = HEAP[_PyExc_AttributeError];
      var $7 = _PyErr_ExceptionMatches($6);
      
      if ($7 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyErr_Clear();
      var $9 = _PySys_GetObject(__str7);
      $modules_dict = $9;
      
      
      if ($modules_dict == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 21;
      break;
     case 5:
      $0 = 0;
      __label__ = 21;
      break;
     case 6:
      HEAP[$i] = 0;
      __label__ = 17;
      break;
     case 7:
      var $12 = HEAP[___main___str];
      var $13 = HEAP[$name];
      var $14 = _PyObject_Compare($13, $12);
      
      if ($14 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $16 = HEAP[$module];
      
      var $18 = _PyObject_GetAttr($16, $global_name_addr);
      $global_name_attr = $18;
      
      
      if ($global_name_attr == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      var $21 = HEAP[_PyExc_AttributeError];
      var $22 = _PyErr_ExceptionMatches($21);
      
      if ($22 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      _PyErr_Clear();
      __label__ = 17;
      break;
     case 11:
      $0 = 0;
      __label__ = 21;
      break;
     case 12:
      
      
      
      
      
      
      var $30 = HEAP[$global_name_attr] - 1;
      
      
      HEAP[$global_name_attr] = $30;
      
      
      
      var $36 = HEAP[$global_name_attr] == 0;
      if ($global_name_attr != $global_addr) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      if ($36) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      
      
      
      var $41 = HEAP[HEAP[$global_name_attr + 4] + 24];
      
      FUNCTION_TABLE[$41]($global_name_attr);
      __label__ = 17;
      break;
     case 15:
      if ($36) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      
      var $47 = HEAP[HEAP[$global_name_attr + 4] + 24];
      
      FUNCTION_TABLE[$47]($global_name_attr);
      __label__ = 18;
      break;
     case 17:
      
      var $50 = _PyDict_Next($modules_dict, $i, $name, $module);
      $j = $50;
      
      if ($50 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      if ($j == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $53 = HEAP[___main___str];
      HEAP[$name] = $53;
      __label__ = 20;
      break;
     case 20:
      
      
      
      var $57 = HEAP[HEAP[$name]] + 1;
      var $58 = HEAP[$name];
      HEAP[$58] = $57;
      
      $0 = HEAP[$name];
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
  function _fast_save_enter($self, $obj) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $obj_addr;
      var $retval;
      var $0;
      var $key;
      $self_addr = $self;
      $obj_addr = $obj;
      
      
      
      var $4 = HEAP[$self_addr + 64] + 1;
      
      
      HEAP[$self_addr + 64] = $4;
      
      
      
      
      if (HEAP[$self_addr + 64] > 49) {
        __label__ = 1;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 1:
      $key = 0;
      
      
      
      
      if (HEAP[$self_addr + 68] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      var $15 = _PyDict_New();
      
      
      HEAP[$self_addr + 68] = $15;
      
      
      
      
      if (HEAP[$self_addr + 68] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      HEAP[$self_addr + 64] = -1;
      $0 = 0;
      __label__ = 17;
      break;
     case 4:
      
      
      var $26 = _PyLong_FromVoidPtr($obj_addr);
      $key = $26;
      
      if ($26 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 17;
      break;
     case 6:
      
      
      var $30 = HEAP[$self_addr + 68];
      
      var $32 = _PyDict_GetItem($30, $key);
      
      if ($32 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      var $37 = HEAP[$key] - 1;
      
      
      HEAP[$key] = $37;
      
      
      
      
      if (HEAP[$key] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $48 = HEAP[HEAP[$key + 4] + 24];
      
      FUNCTION_TABLE[$48]($key);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      var $54 = HEAP[HEAP[$obj_addr + 4] + 12];
      var $55 = HEAP[_PyExc_ValueError];
      
      var $57 = _PyErr_Format($55, __str8, allocate([ $54, 0, 0, 0, $obj_addr, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      
      
      HEAP[$self_addr + 64] = -1;
      $0 = 0;
      __label__ = 17;
      break;
     case 10:
      
      
      var $62 = HEAP[$self_addr + 68];
      
      var $64 = _PyDict_SetItem($62, $key, __Py_NoneStruct);
      var $65 = $64 < 0;
      
      
      
      var $69 = HEAP[$key] - 1;
      
      
      HEAP[$key] = $69;
      
      
      
      var $75 = HEAP[$key] == 0;
      if ($65) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      if ($75) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $80 = HEAP[HEAP[$key + 4] + 24];
      
      FUNCTION_TABLE[$80]($key);
      __label__ = 13;
      break;
     case 13:
      
      
      HEAP[$self_addr + 64] = -1;
      $0 = 0;
      __label__ = 17;
      break;
     case 14:
      if ($75) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $88 = HEAP[HEAP[$key + 4] + 24];
      
      FUNCTION_TABLE[$88]($key);
      __label__ = 16;
      break;
     case 16:
      $0 = 1;
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
  function _fast_save_leave($self, $obj) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $obj_addr;
      var $retval;
      var $0;
      var $key;
      $self_addr = $self;
      $obj_addr = $obj;
      
      
      
      
      var $5 = HEAP[$self_addr + 64] > 49;
      var $6 = HEAP[$self_addr + 64] - 1;
      
      
      HEAP[$self_addr + 64] = $6;
      
      if ($5 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      
      
      var $11 = _PyLong_FromVoidPtr($obj_addr);
      $key = $11;
      
      
      if ($key == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 10;
      break;
     case 3:
      
      
      var $16 = HEAP[$self_addr + 68];
      
      var $18 = _PyDict_DelItem($16, $key);
      var $19 = $18 < 0;
      
      
      
      var $23 = HEAP[$key] - 1;
      
      
      HEAP[$key] = $23;
      
      
      
      var $29 = HEAP[$key] == 0;
      if ($19) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      if ($29) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $34 = HEAP[HEAP[$key + 4] + 24];
      
      FUNCTION_TABLE[$34]($key);
      __label__ = 6;
      break;
     case 6:
      $0 = 0;
      __label__ = 10;
      break;
     case 7:
      if ($29) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $40 = HEAP[HEAP[$key + 4] + 24];
      
      FUNCTION_TABLE[$40]($key);
      __label__ = 9;
      break;
     case 9:
      $0 = 1;
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
  function _save_none($self, $args) {
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
      
      
      var $3 = HEAP[$self_addr + 48];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, _none_9451, 1);
      
      if ($5 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
      $0 = 0;
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
  function _save_bool($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1;
    _memset(__stackBase__, 0, 1);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $iftmp_52;
      var $l;
      var $opcode = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      
      
      
      $l = HEAP[$args_addr + 8];
      
      
      
      
      if (HEAP[$self_addr + 36] > 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      if ($l != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $iftmp_52 = -120;
      __label__ = 4;
      break;
     case 3:
      $iftmp_52 = -119;
      __label__ = 4;
      break;
     case 4:
      
      HEAP[$opcode] = $iftmp_52;
      
      
      var $14 = HEAP[$self_addr + 48];
      
      var $16 = FUNCTION_TABLE[$14]($self_addr, $opcode, 1);
      
      if ($16 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 9;
      break;
     case 6:
      
      
      var $20 = HEAP[$self_addr + 48];
      
      
      
      var $24 = HEAP[_len_9463 + $l];
      
      
      var $27 = HEAP[_buf_9462 + $l * 4];
      
      var $29 = FUNCTION_TABLE[$20]($self_addr, $27, $24);
      
      if ($29 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = -1;
      __label__ = 9;
      break;
     case 8:
      $0 = 0;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval10 = $retval;
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _save_int($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $c_str = __stackBase__;
      var $l;
      var $len;
      $self_addr = $self;
      $args_addr = $args;
      
      
      
      
      $l = HEAP[$args_addr + 8];
      $len = 0;
      
      
      
      
      if (HEAP[$self_addr + 40] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      HEAP[$c_str] = 73;
      
      var $10 = $c_str + 1;
      
      var $12 = _PyOS_snprintf($10, 31, __str4, allocate([ $l, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      
      
      var $15 = HEAP[$self_addr + 48];
      var $c_str2 = $c_str;
      var $16 = _strlen($c_str2);
      
      var $c_str3 = $c_str;
      var $18 = FUNCTION_TABLE[$15]($self_addr, $c_str3, $16);
      
      if ($18 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 12;
      break;
     case 3:
      
      
      
      HEAP[$c_str + 1] = $l & 255;
      
      
      
      
      HEAP[$c_str + 2] = $l >> 8 & 255;
      
      
      
      
      HEAP[$c_str + 3] = $l >> 16 & 255;
      
      
      
      
      HEAP[$c_str + 4] = $l >> 24 & 255;
      
      
      
      if (HEAP[$c_str + 4] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      if (HEAP[$c_str + 3] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $44 = $c_str;
      if (HEAP[$c_str + 2] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$44] = 75;
      $len = 2;
      __label__ = 9;
      break;
     case 7:
      HEAP[$44] = 77;
      $len = 3;
      __label__ = 9;
      break;
     case 8:
      
      HEAP[$c_str] = 74;
      $len = 5;
      __label__ = 9;
      break;
     case 9:
      
      
      var $48 = HEAP[$self_addr + 48];
      
      var $c_str14 = $c_str;
      
      var $51 = FUNCTION_TABLE[$48]($self_addr, $c_str14, $len);
      
      if ($51 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = -1;
      __label__ = 12;
      break;
     case 11:
      $0 = 0;
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
  function _save_long($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 5;
    _memset(__stackBase__, 0, 5);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $size;
      var $res;
      var $repr;
      var $nbits;
      var $nbytes;
      var $pdata;
      var $c_str = __stackBase__;
      var $i;
      var $sign;
      $self_addr = $self;
      $args_addr = $args;
      $res = -1;
      $repr = 0;
      
      
      
      
      var $5 = $args_addr;
      if (HEAP[$self_addr + 36] > 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 1:
      var $6 = __PyLong_Sign($5);
      $sign = $6;
      
      
      if ($sign == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      HEAP[$c_str] = -118;
      
      HEAP[$c_str + 1] = 0;
      
      
      var $13 = HEAP[$self_addr + 48];
      
      var $c_str2 = $c_str;
      var $15 = FUNCTION_TABLE[$13]($self_addr, $c_str2, 2);
      $i = $15;
      
      
      if ($i < 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $res = 0;
      __label__ = 31;
      break;
     case 4:
      
      var $19 = __PyLong_NumBits($args_addr);
      $nbits = $19;
      
      var $21 = $nbits == -1;
      if ($21) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $22 = _PyErr_Occurred();
      
      if ($22 != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      $nbytes = ($nbits >>> 3) + 1;
      
      if (($nbits >>> 3) + 1 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $28 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($28, __str11);
      __label__ = 31;
      break;
     case 8:
      
      var $30 = _PyString_FromStringAndSize(0, $nbytes);
      $repr = $30;
      
      
      if ($repr == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      $pdata = $repr + 20;
      
      
      
      
      var $41 = __PyLong_AsByteArray($args_addr, $pdata, $nbytes, 1, 1);
      $i = $41;
      
      
      if ($i < 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if ($sign < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 11:
      
      
      if ($nbytes > 1) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $48 = $c_str;
      __lastLabel__ = 12;
      __label__ = 18;
      break;
     case 13:
      
      
      
      
      
      var $54 = HEAP[$pdata + ($nbytes - 1)] == -1;
      if ($54) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      
      
      
      if (HEAP[$pdata + ($nbytes - 2)] < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      var $62 = $nbytes - 1;
      $nbytes = $62;
      __lastLabel__ = 15;
      __label__ = 17;
      break;
     case 16:
      var $_pr = $nbytes;
      __lastLabel__ = 16;
      __label__ = 17;
      break;
     case 17:
      var $63 = __lastLabel__ == 16 ? $_pr : $62;
      
      var $65 = $c_str;
      if ($63 <= 255) {
        __lastLabel__ = 17;
        __label__ = 18;
        break;
      } else {
        __lastLabel__ = 17;
        __label__ = 19;
        break;
      }
     case 18:
      var $66 = __lastLabel__ == 12 ? $48 : $65;
      HEAP[$66] = -118;
      
      
      
      HEAP[$c_str + 1] = $nbytes & 255;
      $size = 2;
      __label__ = 22;
      break;
     case 19:
      HEAP[$65] = -117;
      
      $size = $nbytes;
      $i = 1;
      __label__ = 20;
      break;
     case 20:
      
      
      
      
      HEAP[$c_str + $i] = $size & 255;
      
      var $76 = $size >> 8;
      $size = $76;
      
      var $78 = $i + 1;
      $i = $78;
      
      if ($78 <= 4) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      $size = 5;
      __label__ = 22;
      break;
     case 22:
      
      
      var $82 = HEAP[$self_addr + 48];
      
      var $c_str22 = $c_str;
      
      var $85 = FUNCTION_TABLE[$82]($self_addr, $c_str22, $size);
      $i = $85;
      
      if ($85 < 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      var $89 = HEAP[$self_addr + 48];
      
      
      
      var $93 = FUNCTION_TABLE[$89]($self_addr, $pdata, $nbytes);
      $i = $93;
      
      
      if ($i < 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      $res = 0;
      __label__ = 31;
      break;
     case 25:
      var $96 = _PyObject_Repr($5);
      $repr = $96;
      
      
      if ($repr == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      var $100 = _PyString_Size($repr);
      $size = $100;
      
      
      if ($size < 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      var $105 = HEAP[$self_addr + 48];
      
      var $107 = FUNCTION_TABLE[$105]($self_addr, _l_9538, 1);
      
      if ($107 < 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      var $111 = HEAP[$self_addr + 48];
      
      
      
      
      
      
      var $118 = FUNCTION_TABLE[$111]($self_addr, $repr + 20, $size);
      
      if ($118 < 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      var $122 = HEAP[$self_addr + 48];
      
      var $124 = FUNCTION_TABLE[$122]($self_addr, __str12, 1);
      
      if ($124 < 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      $res = 0;
      __label__ = 31;
      break;
     case 31:
      
      
      if ($repr != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 32:
      
      
      
      var $130 = HEAP[$repr] - 1;
      
      
      HEAP[$repr] = $130;
      
      
      
      
      if (HEAP[$repr] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $141 = HEAP[HEAP[$repr + 4] + 24];
      
      FUNCTION_TABLE[$141]($repr);
      __label__ = 34;
      break;
     case 34:
      
      $0 = $res;
      
      $retval = $0;
      var $retval34 = $retval;
      STACKTOP = __stackBase__;
      return $retval34;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _save_float($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 10;
    _memset(__stackBase__, 0, 10);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $x;
      var $str = __stackBase__;
      var $result;
      var $buf;
      var $op = __stackBase__ + 9;
      $self_addr = $self;
      $args_addr = $args;
      
      
      
      
      $x = HEAP[$args_addr + 8];
      
      
      
      
      if (HEAP[$self_addr + 40] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      HEAP[$str] = 71;
      var $10 = $str + 1;
      
      var $12 = __PyFloat_Pack8($x, $10, 0);
      
      if ($12 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 13;
      break;
     case 3:
      
      
      var $16 = HEAP[$self_addr + 48];
      
      var $str3 = $str;
      var $18 = FUNCTION_TABLE[$16]($self_addr, $str3, 9);
      
      if ($18 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 13;
      break;
     case 5:
      $0 = 0;
      __label__ = 13;
      break;
     case 6:
      $result = -1;
      $buf = 0;
      HEAP[$op] = 70;
      
      
      var $22 = HEAP[$self_addr + 48];
      
      var $24 = FUNCTION_TABLE[$22]($self_addr, $op, 1);
      
      if ($24 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      var $27 = _PyOS_double_to_string($x, 103, 17, 0, 0);
      $buf = $27;
      
      
      if ($buf == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $30 = _PyErr_NoMemory();
      __label__ = 12;
      break;
     case 9:
      
      
      var $33 = HEAP[$self_addr + 48];
      
      var $35 = _strlen($buf);
      
      
      var $38 = FUNCTION_TABLE[$33]($self_addr, $buf, $35);
      
      if ($38 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      var $42 = HEAP[$self_addr + 48];
      
      var $44 = FUNCTION_TABLE[$42]($self_addr, __str12, 1);
      
      if ($44 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      $result = 0;
      __label__ = 12;
      break;
     case 12:
      
      _PyMem_Free($buf);
      
      $0 = $result;
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
  function _save_string($self, $args, $doput) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 5;
    _memset(__stackBase__, 0, 5);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $doput_addr;
      var $retval;
      var $0;
      var $size;
      var $len;
      var $repr;
      var $repr_str;
      var $i;
      var $c_str = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      $doput_addr = $doput;
      $repr = 0;
      
      var $2 = _PyString_Size($args_addr);
      $size = $2;
      
      
      if ($size < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 37;
      break;
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 40] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 3:
      
      var $10 = _PyObject_Repr($args_addr);
      $repr = $10;
      
      
      if ($repr == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 37;
      break;
     case 5:
      
      var $14 = _PyString_Size($repr);
      $len = $14;
      
      
      if ($len < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      $repr_str = $repr + 20;
      
      
      var $23 = HEAP[$self_addr + 48];
      
      var $25 = FUNCTION_TABLE[$23]($self_addr, _string_9677, 1);
      
      if ($25 < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      var $29 = HEAP[$self_addr + 48];
      
      
      
      var $33 = FUNCTION_TABLE[$29]($self_addr, $repr_str, $len);
      
      if ($33 < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      var $37 = HEAP[$self_addr + 48];
      
      var $39 = FUNCTION_TABLE[$37]($self_addr, __str12, 1);
      
      if ($39 < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if ($repr != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 10:
      
      
      
      var $46 = HEAP[$repr] - 1;
      
      
      HEAP[$repr] = $46;
      
      
      
      
      if (HEAP[$repr] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 11:
      
      
      
      
      var $57 = HEAP[HEAP[$repr + 4] + 24];
      
      FUNCTION_TABLE[$57]($repr);
      __label__ = 29;
      break;
     case 12:
      
      
      var $61 = $c_str;
      if ($size <= 255) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$61] = 85;
      
      
      
      HEAP[$c_str + 1] = $size & 255;
      $len = 2;
      __label__ = 17;
      break;
     case 14:
      HEAP[$61] = 84;
      $i = 1;
      __label__ = 15;
      break;
     case 15:
      
      
      
      var $68 = $i * 8 + -8;
      
      
      
      
      HEAP[$c_str + $i] = $size >> $68 & 255;
      
      var $74 = $i + 1;
      $i = $74;
      
      if ($74 <= 4) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      $len = 5;
      __label__ = 17;
      break;
     case 17:
      
      
      var $78 = HEAP[$self_addr + 48];
      
      var $c_str19 = $c_str;
      
      var $81 = FUNCTION_TABLE[$78]($self_addr, $c_str19, $len);
      
      if ($81 < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      $0 = -1;
      __label__ = 37;
      break;
     case 19:
      
      
      if ($size <= 128) {
        __label__ = 27;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 16] + 4] != _PdataType) {
        __label__ = 27;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      var $92 = _write_other($self_addr, 0, 0);
      
      if ($92 < 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      $0 = -1;
      __label__ = 37;
      break;
     case 23:
      
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 16] + 8] == HEAP[HEAP[$self_addr + 16] + 12]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 24:
      
      
      
      var $110 = HEAP[$self_addr + 16];
      var $111 = _Pdata_grow($110);
      
      if ($111 < 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      $0 = -1;
      __label__ = 37;
      break;
     case 26:
      
      
      
      var $116 = HEAP[$args_addr] + 1;
      
      
      HEAP[$args_addr] = $116;
      
      
      
      
      
      
      
      
      
      var $128 = HEAP[$self_addr + 16];
      
      var $130 = HEAP[$128 + 8];
      var $131 = HEAP[HEAP[$self_addr + 16] + 16] + 4 * $130;
      
      HEAP[$131] = $args_addr;
      var $133 = $130 + 1;
      var $134 = $128 + 8;
      HEAP[$134] = $133;
      __label__ = 29;
      break;
     case 27:
      
      
      var $137 = HEAP[$self_addr + 48];
      
      
      
      
      
      
      var $144 = FUNCTION_TABLE[$137]($self_addr, $args_addr + 20, $size);
      
      if ($144 < 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      $0 = -1;
      __label__ = 37;
      break;
     case 29:
      
      
      if ($doput_addr != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      
      
      var $150 = _put($self_addr, $args_addr);
      
      if ($150 < 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      $0 = -1;
      __label__ = 37;
      break;
     case 32:
      $0 = 0;
      __label__ = 37;
      break;
     case 33:
      
      
      if ($repr != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 34:
      
      
      
      var $157 = HEAP[$repr] - 1;
      
      
      HEAP[$repr] = $157;
      
      
      
      
      if (HEAP[$repr] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $168 = HEAP[HEAP[$repr + 4] + 24];
      
      FUNCTION_TABLE[$168]($repr);
      __label__ = 36;
      break;
     case 36:
      $0 = -1;
      __label__ = 37;
      break;
     case 37:
      
      $retval = $0;
      var $retval39 = $retval;
      STACKTOP = __stackBase__;
      return $retval39;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _modified_EncodeRawUnicodeEscape($s, $size) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $size_addr;
      var $retval;
      var $0;
      var $repr = __stackBase__;
      var $p;
      var $q;
      var $expandsize;
      var $ch;
      var $ch2;
      var $ucs;
      $s_addr = $s;
      $size_addr = $size;
      $expandsize = 6;
      
      
      
      
      if ((2147483647 / $expandsize | 0) < $size_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = _PyErr_NoMemory();
      $0 = $5;
      __label__ = 16;
      break;
     case 2:
      
      
      
      var $9 = _PyString_FromStringAndSize(0, $size_addr * $expandsize);
      HEAP[$repr] = $9;
      
      
      if (HEAP[$repr] == 0) {
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
      
      
      var $14 = HEAP[$repr];
      if ($size_addr == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = $14;
      __label__ = 16;
      break;
     case 6:
      
      
      
      $q = $14 + 20;
      
      $p = $q;
      
      var $20 = $size_addr > 0;
      
      var $22 = $size_addr - 1;
      $size_addr = $22;
      if ($20) {
        __label__ = 7;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 7:
      
      
      $ch = HEAP[$s_addr];
      
      var $26 = $s_addr + 2;
      $s_addr = $26;
      
      
      
      
      
      if ($ch > 55295 & $ch <= 56319) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      $ch2 = HEAP[$s_addr];
      
      var $34 = $s_addr + 2;
      $s_addr = $34;
      
      var $36 = $size_addr - 1;
      $size_addr = $36;
      
      
      
      
      
      if ($ch2 > 56319 & $ch2 <= 57343) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      
      $ucs = (($ch & 1023) << 10 | $ch2 & 1023) + 65536;
      
      HEAP[$p] = 92;
      
      var $52 = $p + 1;
      $p = $52;
      
      HEAP[$p] = 85;
      
      var $55 = $p + 1;
      $p = $55;
      
      
      
      
      var $60 = HEAP[__str13 + ($ucs >>> 28 & 15)];
      
      HEAP[$p] = $60;
      
      var $63 = $p + 1;
      $p = $63;
      
      
      
      
      var $68 = HEAP[__str13 + ($ucs >>> 24 & 15)];
      
      HEAP[$p] = $68;
      
      var $71 = $p + 1;
      $p = $71;
      
      
      
      
      var $76 = HEAP[__str13 + ($ucs >>> 20 & 15)];
      
      HEAP[$p] = $76;
      
      var $79 = $p + 1;
      $p = $79;
      
      
      
      
      var $84 = HEAP[__str13 + ($ucs >>> 16 & 15)];
      
      HEAP[$p] = $84;
      
      var $87 = $p + 1;
      $p = $87;
      
      
      
      
      var $92 = HEAP[__str13 + ($ucs >>> 12 & 15)];
      
      HEAP[$p] = $92;
      
      var $95 = $p + 1;
      $p = $95;
      
      
      
      
      var $100 = HEAP[__str13 + ($ucs >>> 8 & 15)];
      
      HEAP[$p] = $100;
      
      var $103 = $p + 1;
      $p = $103;
      
      
      
      
      var $108 = HEAP[__str13 + ($ucs >>> 4 & 15)];
      
      HEAP[$p] = $108;
      
      var $111 = $p + 1;
      $p = $111;
      
      
      
      var $115 = HEAP[__str13 + ($ucs & 15)];
      
      HEAP[$p] = $115;
      
      var $118 = $p + 1;
      $p = $118;
      __label__ = 10;
      break;
     case 10:
      
      
      var $121 = $size_addr > 0;
      
      var $123 = $size_addr - 1;
      $size_addr = $123;
      
      if ($121 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      var $125 = $s_addr + -2;
      $s_addr = $125;
      
      var $127 = $size_addr + 1;
      $size_addr = $127;
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      
      
      
      
      if ($ch > 255 | $ch == 92 | $ch == 10) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      HEAP[$p] = 92;
      
      var $136 = $p + 1;
      $p = $136;
      
      HEAP[$p] = 117;
      
      var $139 = $p + 1;
      $p = $139;
      
      
      
      
      
      var $145 = HEAP[__str13 + ($ch >>> 12 & 15)];
      
      HEAP[$p] = $145;
      
      var $148 = $p + 1;
      $p = $148;
      
      
      
      
      
      var $154 = HEAP[__str13 + ($ch >>> 8 & 15)];
      
      HEAP[$p] = $154;
      
      var $157 = $p + 1;
      $p = $157;
      
      
      
      
      
      var $163 = HEAP[__str13 + ($ch >>> 4 & 15)];
      
      HEAP[$p] = $163;
      
      var $166 = $p + 1;
      $p = $166;
      
      
      
      
      var $171 = HEAP[__str13 + ($ch & 15)];
      
      HEAP[$p] = $171;
      
      var $174 = $p + 1;
      $p = $174;
      __label__ = 10;
      break;
     case 14:
      
      
      
      HEAP[$p] = $ch & 255;
      
      var $179 = $p + 1;
      $p = $179;
      __label__ = 10;
      break;
     case 15:
      
      HEAP[$p] = 0;
      
      
      
      
      
      var $186 = __PyString_Resize($repr, $p - $q);
      
      $0 = HEAP[$repr];
      __label__ = 16;
      break;
     case 16:
      
      $retval = $0;
      var $retval20 = $retval;
      STACKTOP = __stackBase__;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _save_unicode($self, $args, $doput) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 5;
    _memset(__stackBase__, 0, 5);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $doput_addr;
      var $retval;
      var $0;
      var $size;
      var $len;
      var $repr;
      var $repr_str;
      var $i;
      var $c_str = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      $doput_addr = $doput;
      $repr = 0;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$args_addr + 4] + 84] & 268435456) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 36;
      break;
     case 2:
      
      
      
      
      var $12 = $args_addr;
      if (HEAP[$self_addr + 40] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 3:
      
      
      var $15 = HEAP[$12 + 8];
      
      
      
      var $19 = HEAP[$args_addr + 12];
      var $20 = _modified_EncodeRawUnicodeEscape($19, $15);
      $repr = $20;
      
      
      if ($repr == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 36;
      break;
     case 5:
      
      var $24 = _PyString_Size($repr);
      $len = $24;
      
      
      if ($len < 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      $repr_str = $repr + 20;
      
      
      var $33 = HEAP[$self_addr + 48];
      
      var $35 = FUNCTION_TABLE[$33]($self_addr, _string_9895, 1);
      
      if ($35 < 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      var $39 = HEAP[$self_addr + 48];
      
      
      
      var $43 = FUNCTION_TABLE[$39]($self_addr, $repr_str, $len);
      
      if ($43 < 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      var $47 = HEAP[$self_addr + 48];
      
      var $49 = FUNCTION_TABLE[$47]($self_addr, __str12, 1);
      
      if ($49 < 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if ($repr != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 10:
      
      
      
      var $56 = HEAP[$repr] - 1;
      
      
      HEAP[$repr] = $56;
      
      
      
      
      if (HEAP[$repr] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 11:
      
      
      
      
      var $67 = HEAP[HEAP[$repr + 4] + 24];
      
      FUNCTION_TABLE[$67]($repr);
      __label__ = 28;
      break;
     case 12:
      var $69 = _PyUnicodeUCS2_AsUTF8String($12);
      $repr = $69;
      
      
      if ($repr == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = -1;
      __label__ = 36;
      break;
     case 14:
      
      var $73 = _PyString_Size($repr);
      $size = $73;
      
      
      if ($size < 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      HEAP[$c_str] = 88;
      $i = 1;
      __label__ = 16;
      break;
     case 16:
      
      
      
      var $80 = $i * 8 + -8;
      
      
      
      
      HEAP[$c_str + $i] = $size >> $80 & 255;
      
      var $86 = $i + 1;
      $i = $86;
      
      if ($86 <= 4) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      $len = 5;
      
      
      var $90 = HEAP[$self_addr + 48];
      
      var $c_str19 = $c_str;
      
      var $93 = FUNCTION_TABLE[$90]($self_addr, $c_str19, $len);
      
      if ($93 < 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      if ($size <= 128) {
        __label__ = 25;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 16] + 4] != _PdataType) {
        __label__ = 25;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      var $104 = _write_other($self_addr, 0, 0);
      
      if ($104 < 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 16] + 8] == HEAP[HEAP[$self_addr + 16] + 12]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      
      var $122 = HEAP[$self_addr + 16];
      var $123 = _Pdata_grow($122);
      
      if ($123 < 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      $0 = -1;
      __label__ = 36;
      break;
     case 24:
      
      
      
      var $128 = HEAP[$repr] + 1;
      
      
      HEAP[$repr] = $128;
      
      
      
      
      
      
      
      
      
      var $140 = HEAP[$self_addr + 16];
      
      var $142 = HEAP[$140 + 8];
      var $143 = HEAP[HEAP[$self_addr + 16] + 16] + 4 * $142;
      
      HEAP[$143] = $repr;
      var $145 = $142 + 1;
      var $146 = $140 + 8;
      HEAP[$146] = $145;
      __label__ = 26;
      break;
     case 25:
      
      
      var $149 = HEAP[$self_addr + 48];
      
      
      
      
      
      
      var $156 = FUNCTION_TABLE[$149]($self_addr, $repr + 20, $size);
      
      if ($156 < 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      var $161 = HEAP[$repr] - 1;
      
      
      HEAP[$repr] = $161;
      
      
      
      
      if (HEAP[$repr] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $172 = HEAP[HEAP[$repr + 4] + 24];
      
      FUNCTION_TABLE[$172]($repr);
      __label__ = 28;
      break;
     case 28:
      
      
      if ($doput_addr != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 29:
      
      
      var $178 = _put($self_addr, $args_addr);
      
      if ($178 < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      $0 = -1;
      __label__ = 36;
      break;
     case 31:
      $0 = 0;
      __label__ = 36;
      break;
     case 32:
      
      
      if ($repr != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 33:
      
      
      
      var $185 = HEAP[$repr] - 1;
      
      
      HEAP[$repr] = $185;
      
      
      
      
      if (HEAP[$repr] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $196 = HEAP[HEAP[$repr + 4] + 24];
      
      FUNCTION_TABLE[$196]($repr);
      __label__ = 35;
      break;
     case 35:
      $0 = -1;
      __label__ = 36;
      break;
     case 36:
      
      $retval = $0;
      var $retval38 = $retval;
      STACKTOP = __stackBase__;
      return $retval38;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _store_tuple_elements($self, $t, $len) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $t_addr;
      var $len_addr;
      var $retval;
      var $0;
      var $i;
      var $res;
      var $element;
      $self_addr = $self;
      $t_addr = $t;
      $len_addr = $len;
      $res = -1;
      
      var $2 = _PyTuple_Size($t_addr);
      
      
      if ($2 != $len_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str14, __str15, 1454, ___PRETTY_FUNCTION___10017);
      throw "Reached an unreachable!";
     case 2:
      $i = 0;
      __label__ = 6;
      break;
     case 3:
      
      
      
      
      
      
      $element = HEAP[$t_addr + 12 + $i * 4];
      
      
      if ($element == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      var $15 = _save($self_addr, $element, 0);
      
      if ($15 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $18 = $i + 1;
      $i = $18;
      __label__ = 6;
      break;
     case 6:
      
      
      
      if ($i < $len_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      $res = 0;
      __label__ = 8;
      break;
     case 8:
      
      $0 = $res;
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _save_tuple($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 2;
    _memset(__stackBase__, 0, 2);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $py_tuple_id;
      var $len;
      var $i;
      var $res;
      var $c_str = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      $py_tuple_id = 0;
      $res = -1;
      
      var $2 = _PyTuple_Size($args_addr);
      $len = $2;
      
      
      if ($len < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($len == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 2:
      
      
      
      
      var $11 = $c_str;
      if (HEAP[$self_addr + 36] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$11] = 41;
      $len = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$11] = 40;
      
      HEAP[$c_str + 1] = 116;
      $len = 2;
      __label__ = 5;
      break;
     case 5:
      
      
      var $15 = HEAP[$self_addr + 48];
      
      var $c_str5 = $c_str;
      
      var $18 = FUNCTION_TABLE[$15]($self_addr, $c_str5, $len);
      
      if ($18 >= 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 6:
      $res = 0;
      __label__ = 33;
      break;
     case 7:
      
      
      var $22 = _PyLong_FromVoidPtr($args_addr);
      $py_tuple_id = $22;
      
      
      if ($py_tuple_id == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      if ($len <= 3) {
        __label__ = 9;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[$self_addr + 36] > 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 10:
      
      
      
      var $34 = _store_tuple_elements($self_addr, $args_addr, $len);
      
      if ($34 < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $38 = HEAP[$self_addr + 20];
      
      var $40 = _PyDict_GetItem($38, $py_tuple_id);
      
      if ($40 != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 12:
      $i = 0;
      __label__ = 15;
      break;
     case 13:
      
      var $43 = HEAP[$52 + 48];
      
      var $45 = FUNCTION_TABLE[$43]($self_addr, _pop_10042, 1);
      
      if ($45 < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      var $48 = $i + 1;
      $i = $48;
      __label__ = 15;
      break;
     case 15:
      
      
      
      var $52 = $self_addr;
      if ($i < $len) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      var $54 = _get($52, $py_tuple_id);
      
      if ($54 < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      $res = 0;
      __label__ = 33;
      break;
     case 18:
      
      
      var $58 = HEAP[$self_addr + 48];
      
      var $60 = _len2opcode_10044 + $len;
      
      var $62 = FUNCTION_TABLE[$58]($self_addr, $60, 1);
      
      if ($62 < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 19:
      
      
      var $66 = HEAP[$self_addr + 48];
      
      var $68 = FUNCTION_TABLE[$66]($self_addr, _MARKv, 1);
      
      if ($68 < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      var $73 = _store_tuple_elements($self_addr, $args_addr, $len);
      
      if ($73 < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      var $77 = HEAP[$self_addr + 20];
      
      var $79 = _PyDict_GetItem($77, $py_tuple_id);
      
      var $81 = $self_addr;
      if ($79 != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 22:
      
      
      
      if (HEAP[$81 + 40] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      var $87 = HEAP[$self_addr + 48];
      
      var $89 = FUNCTION_TABLE[$87]($self_addr, _pop_mark_10043, 1);
      
      if ($89 < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 24:
      $i = 0;
      __label__ = 27;
      break;
     case 25:
      
      
      var $93 = HEAP[$self_addr + 48];
      
      var $95 = FUNCTION_TABLE[$93]($self_addr, _pop_10042, 1);
      
      if ($95 < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      var $98 = $i + 1;
      $i = $98;
      __label__ = 27;
      break;
     case 27:
      
      
      
      if ($i <= $len) {
        __label__ = 25;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      var $104 = _get($self_addr, $py_tuple_id);
      
      if ($104 >= 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 29:
      $res = 0;
      __label__ = 33;
      break;
     case 30:
      
      var $107 = HEAP[$81 + 48];
      
      var $109 = FUNCTION_TABLE[$107]($self_addr, _tuple_10041, 1);
      
      if ($109 < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      var $113 = _put($self_addr, $args_addr);
      
      if ($113 >= 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      $res = 0;
      __label__ = 33;
      break;
     case 33:
      
      
      if ($py_tuple_id != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 34:
      
      
      
      var $119 = HEAP[$py_tuple_id] - 1;
      
      
      HEAP[$py_tuple_id] = $119;
      
      
      
      
      if (HEAP[$py_tuple_id] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $130 = HEAP[HEAP[$py_tuple_id + 4] + 24];
      
      FUNCTION_TABLE[$130]($py_tuple_id);
      __label__ = 36;
      break;
     case 36:
      
      $0 = $res;
      
      $retval = $0;
      var $retval39 = $retval;
      STACKTOP = __stackBase__;
      return $retval39;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _batch_list($self, $iter) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $iter_addr;
      var $retval;
      var $0;
      var $obj;
      var $firstitem;
      var $i;
      var $n;
      var $_py_tmp;
      var $_py_tmp28;
      var $_py_tmp34;
      $self_addr = $self;
      $iter_addr = $iter;
      $obj = 0;
      $firstitem = 0;
      
      
      if ($iter_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str16, __str15, 1599, ___PRETTY_FUNCTION___10137);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 36] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 3:
      
      var $8 = _PyIter_Next($iter_addr);
      $obj = $8;
      
      if ($8 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      var $10 = _PyErr_Occurred();
      
      if ($10 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 46;
      break;
     case 6:
      $0 = 0;
      __label__ = 46;
      break;
     case 7:
      
      
      var $14 = _save($self_addr, $obj, 0);
      $i = $14;
      
      
      
      var $18 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $18;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $29 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$29]($obj);
      __label__ = 9;
      break;
     case 9:
      
      
      if ($i < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = -1;
      __label__ = 46;
      break;
     case 11:
      
      
      var $35 = HEAP[$self_addr + 48];
      
      var $37 = FUNCTION_TABLE[$35]($self_addr, _append_10135, 1);
      
      if ($37 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 12:
      $0 = -1;
      __label__ = 46;
      break;
     case 13:
      
      var $40 = _PyIter_Next($iter_addr);
      $firstitem = $40;
      
      if ($40 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $42 = _PyErr_Occurred();
      
      if ($42 != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 15:
      
      var $45 = _PyIter_Next($iter_addr);
      $obj = $45;
      
      
      if ($obj == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 16:
      var $48 = _PyErr_Occurred();
      
      if ($48 != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      var $52 = _save($self_addr, $firstitem, 0);
      
      if ($52 < 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      var $56 = HEAP[$self_addr + 48];
      
      var $58 = FUNCTION_TABLE[$56]($self_addr, _append_10135, 1);
      
      if ($58 < 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      if ($firstitem != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 20:
      
      $_py_tmp = $firstitem;
      $firstitem = 0;
      
      
      
      var $66 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $66;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 21:
      
      
      
      
      var $77 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$77]($_py_tmp);
      __label__ = 38;
      break;
     case 22:
      
      
      var $81 = HEAP[$self_addr + 48];
      
      var $83 = FUNCTION_TABLE[$81]($self_addr, _MARKv, 1);
      
      if ($83 < 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      var $87 = _save($self_addr, $firstitem, 0);
      
      if ($87 < 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      if ($firstitem != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      $_py_tmp28 = $firstitem;
      $firstitem = 0;
      
      
      
      var $95 = HEAP[$_py_tmp28] - 1;
      
      
      HEAP[$_py_tmp28] = $95;
      
      
      
      
      if (HEAP[$_py_tmp28] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $106 = HEAP[HEAP[$_py_tmp28 + 4] + 24];
      
      FUNCTION_TABLE[$106]($_py_tmp28);
      __label__ = 27;
      break;
     case 27:
      $n = 1;
      var $_pr = $obj;
      __lastLabel__ = 27;
      __label__ = 35;
      break;
     case 28:
      
      
      var $110 = _save($self_addr, $obj, 0);
      
      if ($110 < 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      if ($obj != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      
      $_py_tmp34 = $obj;
      $obj = 0;
      
      
      
      var $118 = HEAP[$_py_tmp34] - 1;
      
      
      HEAP[$_py_tmp34] = $118;
      
      
      
      
      if (HEAP[$_py_tmp34] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $129 = HEAP[HEAP[$_py_tmp34 + 4] + 24];
      
      FUNCTION_TABLE[$129]($_py_tmp34);
      __label__ = 32;
      break;
     case 32:
      
      var $132 = $n + 1;
      $n = $132;
      
      if ($132 == 1e3) {
        __label__ = 36;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      var $135 = _PyIter_Next($iter_addr);
      $obj = $135;
      var $136 = $obj;
      
      if ($136 == 0) {
        __lastLabel__ = 33;
        __label__ = 34;
        break;
      } else {
        __lastLabel__ = 33;
        __label__ = 35;
        break;
      }
     case 34:
      var $138 = _PyErr_Occurred();
      
      if ($138 != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      var $140 = __lastLabel__ == 33 ? $136 : $_pr;
      
      if ($140 != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      var $144 = HEAP[$self_addr + 48];
      
      var $146 = FUNCTION_TABLE[$144]($self_addr, _appends_10136, 1);
      
      if ($146 < 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      if ($n == 1e3) {
        __label__ = 13;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      $0 = 0;
      __label__ = 46;
      break;
     case 39:
      
      
      if ($firstitem != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 40:
      
      
      
      var $155 = HEAP[$firstitem] - 1;
      
      
      HEAP[$firstitem] = $155;
      
      
      
      
      if (HEAP[$firstitem] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $166 = HEAP[HEAP[$firstitem + 4] + 24];
      
      FUNCTION_TABLE[$166]($firstitem);
      __label__ = 42;
      break;
     case 42:
      
      
      if ($obj != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 43:
      
      
      
      var $173 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $173;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      var $184 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$184]($obj);
      __label__ = 45;
      break;
     case 45:
      $0 = -1;
      __label__ = 46;
      break;
     case 46:
      
      $retval = $0;
      var $retval51 = $retval;
      return $retval51;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _save_list($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 3;
    _memset(__stackBase__, 0, 3);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $iftmp_93;
      var $res;
      var $s = __stackBase__;
      var $len;
      var $iter;
      $self_addr = $self;
      $args_addr = $args;
      $res = -1;
      
      
      
      
      if (HEAP[$self_addr + 44] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $7 = _fast_save_enter($self_addr, $args_addr);
      
      if ($7 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      var $13 = $s;
      if (HEAP[$self_addr + 40] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$13] = 93;
      $len = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$13] = 40;
      
      HEAP[$s + 1] = 108;
      $len = 2;
      __label__ = 5;
      break;
     case 5:
      
      
      var $17 = HEAP[$self_addr + 48];
      
      var $s5 = $s;
      
      var $20 = FUNCTION_TABLE[$17]($self_addr, $s5, $len);
      
      if ($20 < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      var $23 = _PyList_Size($args_addr);
      $len = $23;
      
      
      if ($len < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      var $28 = $self_addr;
      var $29 = $args_addr;
      if ($len == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      var $30 = _put($28, $29);
      
      if ($30 >= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 9:
      $res = 0;
      __label__ = 18;
      break;
     case 10:
      var $32 = _put2($28, $29);
      
      if ($32 < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $35 = _PyObject_GetIter($args_addr);
      $iter = $35;
      
      
      if ($iter == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $38 = HEAP[__PyThreadState_Current];
      
      
      var $41 = HEAP[$38 + 12] + 1;
      var $42 = $38 + 12;
      HEAP[$42] = $41;
      
      
      
      
      if (HEAP[$38 + 12] <= HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $47 = __Py_CheckRecursiveCall(__str17);
      
      if ($47 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      $iftmp_93 = 1;
      __label__ = 16;
      break;
     case 15:
      $iftmp_93 = 0;
      
      
      var $51 = _batch_list($self_addr, $iter);
      $res = $51;
      
      
      
      var $55 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $56 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$56] = $55;
      __label__ = 16;
      break;
     case 16:
      
      
      
      var $60 = HEAP[$iter] - 1;
      
      
      HEAP[$iter] = $60;
      
      
      
      
      if (HEAP[$iter] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $71 = HEAP[HEAP[$iter + 4] + 24];
      
      FUNCTION_TABLE[$71]($iter);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      if (HEAP[$self_addr + 44] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $79 = _fast_save_leave($self_addr, $args_addr);
      
      if ($79 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      $res = -1;
      __label__ = 21;
      break;
     case 21:
      
      $0 = $res;
      
      $retval = $0;
      var $retval24 = $retval;
      STACKTOP = __stackBase__;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _batch_dict($self, $iter) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $iter_addr;
      var $retval;
      var $0;
      var $p;
      var $firstitem;
      var $i;
      var $n;
      var $_py_tmp;
      var $_py_tmp38;
      var $_py_tmp48;
      $self_addr = $self;
      $iter_addr = $iter;
      $p = 0;
      $firstitem = 0;
      
      
      if ($iter_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str16, __str15, 1767, ___PRETTY_FUNCTION___10326);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 36] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 3:
      
      var $8 = _PyIter_Next($iter_addr);
      $p = $8;
      
      if ($8 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      var $10 = _PyErr_Occurred();
      
      if ($10 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 60;
      break;
     case 6:
      $0 = 0;
      __label__ = 60;
      break;
     case 7:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$p + 4] + 84] & 67108864) == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      var $20 = _PyTuple_Size($p);
      
      if ($20 != 2) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $22 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($22, __str18);
      $0 = -1;
      __label__ = 60;
      break;
     case 10:
      
      
      
      
      var $27 = HEAP[$p + 12];
      
      var $29 = _save($self_addr, $27, 0);
      $i = $29;
      
      
      if ($i >= 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $36 = HEAP[$p + 12 + 4];
      
      var $38 = _save($self_addr, $36, 0);
      $i = $38;
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $42 = HEAP[$p] - 1;
      
      
      HEAP[$p] = $42;
      
      
      
      
      if (HEAP[$p] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $53 = HEAP[HEAP[$p + 4] + 24];
      
      FUNCTION_TABLE[$53]($p);
      __label__ = 14;
      break;
     case 14:
      
      
      if ($i < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $0 = -1;
      __label__ = 60;
      break;
     case 16:
      
      
      var $59 = HEAP[$self_addr + 48];
      
      var $61 = FUNCTION_TABLE[$59]($self_addr, _setitem_10324, 1);
      
      if ($61 < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 17:
      $0 = -1;
      __label__ = 60;
      break;
     case 18:
      
      var $64 = _PyIter_Next($iter_addr);
      $firstitem = $64;
      
      if ($64 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $66 = _PyErr_Occurred();
      
      if ($66 != 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 20:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$firstitem + 4] + 84] & 67108864) == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      var $76 = _PyTuple_Size($firstitem);
      
      if ($76 != 2) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      var $78 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($78, __str18);
      __label__ = 53;
      break;
     case 23:
      
      var $80 = _PyIter_Next($iter_addr);
      $p = $80;
      
      
      if ($p == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 24:
      var $83 = _PyErr_Occurred();
      
      if ($83 != 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      var $89 = HEAP[$firstitem + 12];
      
      var $91 = _save($self_addr, $89, 0);
      
      if ($91 < 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      var $97 = HEAP[$firstitem + 12 + 4];
      
      var $99 = _save($self_addr, $97, 0);
      
      if ($99 < 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      var $103 = HEAP[$self_addr + 48];
      
      var $105 = FUNCTION_TABLE[$103]($self_addr, _setitem_10324, 1);
      
      if ($105 < 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      if ($firstitem != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 29:
      
      $_py_tmp = $firstitem;
      $firstitem = 0;
      
      
      
      var $113 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $113;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 30:
      
      
      
      
      var $124 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$124]($_py_tmp);
      __label__ = 52;
      break;
     case 31:
      
      
      var $128 = HEAP[$self_addr + 48];
      
      var $130 = FUNCTION_TABLE[$128]($self_addr, _MARKv, 1);
      
      if ($130 < 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      
      
      var $136 = HEAP[$firstitem + 12];
      
      var $138 = _save($self_addr, $136, 0);
      
      if ($138 < 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      
      var $144 = HEAP[$firstitem + 12 + 4];
      
      var $146 = _save($self_addr, $144, 0);
      
      if ($146 < 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      if ($firstitem != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 35:
      
      $_py_tmp38 = $firstitem;
      $firstitem = 0;
      
      
      
      var $154 = HEAP[$_py_tmp38] - 1;
      
      
      HEAP[$_py_tmp38] = $154;
      
      
      
      
      if (HEAP[$_py_tmp38] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      var $165 = HEAP[HEAP[$_py_tmp38 + 4] + 24];
      
      FUNCTION_TABLE[$165]($_py_tmp38);
      __label__ = 37;
      break;
     case 37:
      $n = 1;
      var $_pr = $p;
      __lastLabel__ = 37;
      __label__ = 49;
      break;
     case 38:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$p + 4] + 84] & 67108864) == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      var $175 = _PyTuple_Size($p);
      
      if ($175 != 2) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      var $177 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($177, __str18);
      __label__ = 53;
      break;
     case 41:
      
      
      
      
      var $182 = HEAP[$p + 12];
      
      var $184 = _save($self_addr, $182, 0);
      
      if ($184 < 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      
      
      
      
      var $190 = HEAP[$p + 12 + 4];
      
      var $192 = _save($self_addr, $190, 0);
      
      if ($192 < 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      
      
      if ($p != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 44:
      
      $_py_tmp48 = $p;
      $p = 0;
      
      
      
      var $200 = HEAP[$_py_tmp48] - 1;
      
      
      HEAP[$_py_tmp48] = $200;
      
      
      
      
      if (HEAP[$_py_tmp48] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      var $211 = HEAP[HEAP[$_py_tmp48 + 4] + 24];
      
      FUNCTION_TABLE[$211]($_py_tmp48);
      __label__ = 46;
      break;
     case 46:
      
      var $214 = $n + 1;
      $n = $214;
      
      if ($214 == 1e3) {
        __label__ = 50;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 47:
      
      var $217 = _PyIter_Next($iter_addr);
      $p = $217;
      var $218 = $p;
      
      if ($218 == 0) {
        __lastLabel__ = 47;
        __label__ = 48;
        break;
      } else {
        __lastLabel__ = 47;
        __label__ = 49;
        break;
      }
     case 48:
      var $220 = _PyErr_Occurred();
      
      if ($220 != 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      var $222 = __lastLabel__ == 47 ? $218 : $_pr;
      
      if ($222 != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 50:
      
      
      var $226 = HEAP[$self_addr + 48];
      
      var $228 = FUNCTION_TABLE[$226]($self_addr, _setitems_10325, 1);
      
      if ($228 < 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 51:
      
      
      if ($n == 1e3) {
        __label__ = 18;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 52:
      $0 = 0;
      __label__ = 60;
      break;
     case 53:
      
      
      if ($firstitem != 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 54:
      
      
      
      var $237 = HEAP[$firstitem] - 1;
      
      
      HEAP[$firstitem] = $237;
      
      
      
      
      if (HEAP[$firstitem] == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      
      
      
      
      var $248 = HEAP[HEAP[$firstitem + 4] + 24];
      
      FUNCTION_TABLE[$248]($firstitem);
      __label__ = 56;
      break;
     case 56:
      
      
      if ($p != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 57:
      
      
      
      var $255 = HEAP[$p] - 1;
      
      
      HEAP[$p] = $255;
      
      
      
      
      if (HEAP[$p] == 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 58:
      
      
      
      
      var $266 = HEAP[HEAP[$p + 4] + 24];
      
      FUNCTION_TABLE[$266]($p);
      __label__ = 59;
      break;
     case 59:
      $0 = -1;
      __label__ = 60;
      break;
     case 60:
      
      $retval = $0;
      var $retval65 = $retval;
      return $retval65;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _batch_dict_exact($self, $obj) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $obj_addr;
      var $retval;
      var $0;
      var $key = __stackBase__;
      var $value = __stackBase__ + 4;
      var $i;
      var $dict_size;
      var $ppos = __stackBase__ + 8;
      $self_addr = $self;
      $obj_addr = $obj;
      HEAP[$key] = 0;
      HEAP[$value] = 0;
      HEAP[$ppos] = 0;
      
      
      if ($obj_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str19, __str15, 1898, ___PRETTY_FUNCTION___10501);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 36] <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str20, __str15, 1899, ___PRETTY_FUNCTION___10501);
      throw "Reached an unreachable!";
     case 4:
      
      var $8 = _PyDict_Size($obj_addr);
      $dict_size = $8;
      
      
      if ($dict_size == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 5:
      
      var $12 = _PyDict_Next($obj_addr, $ppos, $key, $value);
      var $13 = HEAP[$key];
      
      var $15 = _save($self_addr, $13, 0);
      
      if ($15 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -1;
      __label__ = 26;
      break;
     case 7:
      var $17 = HEAP[$value];
      
      var $19 = _save($self_addr, $17, 0);
      
      if ($19 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = -1;
      __label__ = 26;
      break;
     case 9:
      
      
      var $23 = HEAP[$self_addr + 48];
      
      var $25 = FUNCTION_TABLE[$23]($self_addr, _setitem_10499, 1);
      
      if ($25 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = -1;
      __label__ = 26;
      break;
     case 11:
      $0 = 0;
      __label__ = 26;
      break;
     case 12:
      $i = 0;
      
      
      var $29 = HEAP[$self_addr + 48];
      
      var $31 = FUNCTION_TABLE[$29]($self_addr, _MARKv, 1);
      
      if ($31 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 13:
      $0 = -1;
      __label__ = 26;
      break;
     case 14:
      var $33 = HEAP[$key];
      
      var $35 = _save($self_addr, $33, 0);
      
      if ($35 < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $0 = -1;
      __label__ = 26;
      break;
     case 16:
      var $37 = HEAP[$value];
      
      var $39 = _save($self_addr, $37, 0);
      
      if ($39 < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      $0 = -1;
      __label__ = 26;
      break;
     case 18:
      
      var $42 = $i + 1;
      $i = $42;
      
      
      if ($i == 1e3) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      var $46 = _PyDict_Next($obj_addr, $ppos, $key, $value);
      
      if ($46 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      var $50 = HEAP[$self_addr + 48];
      
      var $52 = FUNCTION_TABLE[$50]($self_addr, _setitems_10500, 1);
      
      if ($52 < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      $0 = -1;
      __label__ = 26;
      break;
     case 22:
      
      var $55 = _PyDict_Size($obj_addr);
      
      
      if ($55 != $dict_size) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      var $58 = HEAP[_PyExc_RuntimeError];
      var $59 = _PyErr_Format($58, __str21, allocate(1, "i32", ALLOC_STACK));
      $0 = -1;
      __label__ = 26;
      break;
     case 24:
      
      
      if ($i == 1e3) {
        __label__ = 12;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      $0 = 0;
      __label__ = 26;
      break;
     case 26:
      
      $retval = $0;
      var $retval27 = $retval;
      STACKTOP = __stackBase__;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _save_dict($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 3;
    _memset(__stackBase__, 0, 3);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $iftmp_117;
      var $iftmp_113;
      var $res;
      var $s = __stackBase__;
      var $len;
      var $iter;
      $self_addr = $self;
      $args_addr = $args;
      $res = -1;
      
      
      
      
      if (HEAP[$self_addr + 44] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $7 = _fast_save_enter($self_addr, $args_addr);
      
      if ($7 == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      var $13 = $s;
      if (HEAP[$self_addr + 40] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$13] = 125;
      $len = 1;
      __label__ = 5;
      break;
     case 4:
      HEAP[$13] = 40;
      
      HEAP[$s + 1] = 100;
      $len = 2;
      __label__ = 5;
      break;
     case 5:
      
      
      var $17 = HEAP[$self_addr + 48];
      
      var $s5 = $s;
      
      var $20 = FUNCTION_TABLE[$17]($self_addr, $s5, $len);
      
      if ($20 < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      var $23 = _PyDict_Size($args_addr);
      $len = $23;
      
      
      if ($len < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      var $28 = $self_addr;
      var $29 = $args_addr;
      if ($len == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      var $30 = _put($28, $29);
      
      if ($30 >= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 9:
      $res = 0;
      __label__ = 24;
      break;
     case 10:
      var $32 = _put2($28, $29);
      
      if ($32 < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      if (HEAP[$args_addr + 4] != _PyDict_Type) {
        __label__ = 17;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      if (HEAP[$self_addr + 36] <= 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $42 = HEAP[__PyThreadState_Current];
      
      
      var $45 = HEAP[$42 + 12] + 1;
      var $46 = $42 + 12;
      HEAP[$46] = $45;
      
      
      
      
      if (HEAP[$42 + 12] <= HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      var $51 = __Py_CheckRecursiveCall(__str17);
      
      if ($51 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      $iftmp_113 = 1;
      __label__ = 24;
      break;
     case 16:
      $iftmp_113 = 0;
      
      
      var $55 = _batch_dict_exact($self_addr, $args_addr);
      $res = $55;
      
      
      
      var $59 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $60 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$60] = $59;
      __label__ = 24;
      break;
     case 17:
      
      var $62 = _PyObject_CallMethod($args_addr, __str22, __str23, allocate(1, "i32", ALLOC_STACK));
      $iter = $62;
      
      if ($62 == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      var $64 = HEAP[__PyThreadState_Current];
      
      
      var $67 = HEAP[$64 + 12] + 1;
      var $68 = $64 + 12;
      HEAP[$68] = $67;
      
      
      
      
      if (HEAP[$64 + 12] <= HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 21;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      var $73 = __Py_CheckRecursiveCall(__str17);
      
      if ($73 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      $iftmp_117 = 1;
      __label__ = 22;
      break;
     case 21:
      $iftmp_117 = 0;
      
      
      var $77 = _batch_dict($self_addr, $iter);
      $res = $77;
      
      
      
      var $81 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $82 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$82] = $81;
      __label__ = 22;
      break;
     case 22:
      
      
      
      var $86 = HEAP[$iter] - 1;
      
      
      HEAP[$iter] = $86;
      
      
      
      
      if (HEAP[$iter] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $97 = HEAP[HEAP[$iter + 4] + 24];
      
      FUNCTION_TABLE[$97]($iter);
      __label__ = 24;
      break;
     case 24:
      
      
      
      
      if (HEAP[$self_addr + 44] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      var $105 = _fast_save_leave($self_addr, $args_addr);
      
      if ($105 == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      $res = -1;
      __label__ = 27;
      break;
     case 27:
      
      $0 = $res;
      
      $retval = $0;
      var $retval33 = $retval;
      STACKTOP = __stackBase__;
      return $retval33;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _save_inst($self, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $class;
      var $module;
      var $name;
      var $state;
      var $getinitargs_func;
      var $getstate_func;
      var $class_args;
      var $module_str;
      var $name_str;
      var $module_size;
      var $name_size;
      var $res;
      var $element;
      var $i;
      var $len;
      $self_addr = $self;
      $args_addr = $args;
      $class = 0;
      $module = 0;
      $name = 0;
      $state = 0;
      $getinitargs_func = 0;
      $getstate_func = 0;
      $class_args = 0;
      $res = -1;
      
      
      
      
      if (HEAP[$self_addr + 44] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $7 = _fast_save_enter($self_addr, $args_addr);
      
      if ($7 == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $11 = HEAP[$self_addr + 48];
      
      var $13 = FUNCTION_TABLE[$11]($self_addr, _MARKv, 1);
      
      if ($13 < 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $15 = HEAP[___class___str];
      
      var $17 = _PyObject_GetAttr($args_addr, $15);
      $class = $17;
      
      
      if ($class == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[$self_addr + 40] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $26 = _save($self_addr, $class, 0);
      
      if ($26 < 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $28 = HEAP[___getinitargs___str];
      
      var $30 = _PyObject_GetAttr($args_addr, $28);
      $getinitargs_func = $30;
      
      if ($30 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 7:
      $element = 0;
      var $32 = HEAP[_empty_tuple];
      
      var $34 = _PyObject_Call($getinitargs_func, $32, 0);
      $class_args = $34;
      
      
      if ($class_args == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      var $38 = _PyObject_Size($class_args);
      $len = $38;
      
      
      if ($len < 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      $i = 0;
      __label__ = 17;
      break;
     case 10:
      
      
      var $43 = _PySequence_GetItem($class_args, $i);
      $element = $43;
      
      
      if ($element == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $48 = _save($self_addr, $element, 0);
      var $49 = $48 < 0;
      
      
      
      var $53 = HEAP[$element] - 1;
      
      
      HEAP[$element] = $53;
      
      
      
      var $59 = HEAP[$element] == 0;
      if ($49) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      if ($59) {
        __label__ = 13;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 13:
      
      
      
      
      var $64 = HEAP[HEAP[$element + 4] + 24];
      
      FUNCTION_TABLE[$64]($element);
      __label__ = 44;
      break;
     case 14:
      if ($59) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $70 = HEAP[HEAP[$element + 4] + 24];
      
      FUNCTION_TABLE[$70]($element);
      __label__ = 16;
      break;
     case 16:
      
      var $73 = $i + 1;
      $i = $73;
      __label__ = 17;
      break;
     case 17:
      
      
      
      if ($i < $len) {
        __label__ = 10;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      var $77 = HEAP[_PyExc_AttributeError];
      var $78 = _PyErr_ExceptionMatches($77);
      
      if ($78 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 19:
      _PyErr_Clear();
      __label__ = 20;
      break;
     case 20:
      
      
      
      
      if (HEAP[$self_addr + 40] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 21:
      
      
      
      
      $name = HEAP[$class + 16];
      
      
      if ($name == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      var $90 = HEAP[_PicklingError];
      _PyErr_SetString($90, __str24);
      __label__ = 44;
      break;
     case 23:
      
      
      var $93 = _whichmodule($class, $name);
      $module = $93;
      
      
      if ($module == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      var $97 = _PyString_Size($module);
      $module_size = $97;
      
      
      if ($module_size < 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      var $101 = _PyString_Size($name);
      $name_size = $101;
      
      
      if ($name_size < 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      $module_str = $module + 20;
      
      
      
      
      $name_str = $name + 20;
      
      
      var $114 = HEAP[$self_addr + 48];
      
      var $116 = FUNCTION_TABLE[$114]($self_addr, _inst_10654, 1);
      
      if ($116 < 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      var $120 = HEAP[$self_addr + 48];
      
      
      
      var $124 = FUNCTION_TABLE[$120]($self_addr, $module_str, $module_size);
      
      if ($124 < 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      var $128 = HEAP[$self_addr + 48];
      
      var $130 = FUNCTION_TABLE[$128]($self_addr, __str12, 1);
      
      if ($130 < 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      var $134 = HEAP[$self_addr + 48];
      
      
      
      var $138 = FUNCTION_TABLE[$134]($self_addr, $name_str, $name_size);
      
      if ($138 < 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      var $142 = HEAP[$self_addr + 48];
      
      var $144 = FUNCTION_TABLE[$142]($self_addr, __str12, 1);
      
      if ($144 < 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      var $148 = HEAP[$self_addr + 48];
      
      var $150 = FUNCTION_TABLE[$148]($self_addr, _obj_10655, 1);
      
      if ($150 < 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      var $152 = HEAP[___getstate___str];
      
      var $154 = _PyObject_GetAttr($args_addr, $152);
      $getstate_func = $154;
      
      if ($154 != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      var $156 = HEAP[_empty_tuple];
      
      var $158 = _PyObject_Call($getstate_func, $156, 0);
      $state = $158;
      
      
      if ($state == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 34:
      var $161 = HEAP[_PyExc_AttributeError];
      var $162 = _PyErr_ExceptionMatches($161);
      
      if ($162 != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 35:
      _PyErr_Clear();
      var $164 = HEAP[___dict___str];
      
      var $166 = _PyObject_GetAttr($args_addr, $164);
      $state = $166;
      
      
      if ($state == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 36:
      var $169 = HEAP[_PyExc_AttributeError];
      var $170 = _PyErr_ExceptionMatches($169);
      
      if ($170 != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 37:
      _PyErr_Clear();
      $res = 0;
      __label__ = 44;
      break;
     case 38:
      
      
      
      
      
      
      
      var $179 = $self_addr;
      var $180 = $args_addr;
      if ((HEAP[HEAP[$state + 4] + 84] & 536870912) == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      var $181 = _put2($179, $180);
      
      if ($181 < 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      var $183 = _put($179, $180);
      
      if ($183 < 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 41:
      
      
      var $187 = _save($self_addr, $state, 0);
      
      if ($187 < 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      
      
      var $191 = HEAP[$self_addr + 48];
      
      var $193 = FUNCTION_TABLE[$191]($self_addr, _build_10656, 1);
      
      if ($193 < 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      $res = 0;
      __label__ = 44;
      break;
     case 44:
      
      
      
      
      if (HEAP[$self_addr + 44] != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 45:
      
      
      var $201 = _fast_save_leave($self_addr, $args_addr);
      
      if ($201 == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      $res = -1;
      __label__ = 47;
      break;
     case 47:
      
      
      if ($module != 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 48:
      
      
      
      var $208 = HEAP[$module] - 1;
      
      
      HEAP[$module] = $208;
      
      
      
      
      if (HEAP[$module] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      
      
      var $219 = HEAP[HEAP[$module + 4] + 24];
      
      FUNCTION_TABLE[$219]($module);
      __label__ = 50;
      break;
     case 50:
      
      
      if ($class != 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 51:
      
      
      
      var $226 = HEAP[$class] - 1;
      
      
      HEAP[$class] = $226;
      
      
      
      
      if (HEAP[$class] == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      
      
      
      
      var $237 = HEAP[HEAP[$class + 4] + 24];
      
      FUNCTION_TABLE[$237]($class);
      __label__ = 53;
      break;
     case 53:
      
      
      if ($state != 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 54:
      
      
      
      var $244 = HEAP[$state] - 1;
      
      
      HEAP[$state] = $244;
      
      
      
      
      if (HEAP[$state] == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      
      
      
      
      var $255 = HEAP[HEAP[$state + 4] + 24];
      
      FUNCTION_TABLE[$255]($state);
      __label__ = 56;
      break;
     case 56:
      
      
      if ($getinitargs_func != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 57:
      
      
      
      var $262 = HEAP[$getinitargs_func] - 1;
      
      
      HEAP[$getinitargs_func] = $262;
      
      
      
      
      if (HEAP[$getinitargs_func] == 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 58:
      
      
      
      
      var $273 = HEAP[HEAP[$getinitargs_func + 4] + 24];
      
      FUNCTION_TABLE[$273]($getinitargs_func);
      __label__ = 59;
      break;
     case 59:
      
      
      if ($getstate_func != 0) {
        __label__ = 60;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 60:
      
      
      
      var $280 = HEAP[$getstate_func] - 1;
      
      
      HEAP[$getstate_func] = $280;
      
      
      
      
      if (HEAP[$getstate_func] == 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      
      
      
      
      var $291 = HEAP[HEAP[$getstate_func + 4] + 24];
      
      FUNCTION_TABLE[$291]($getstate_func);
      __label__ = 62;
      break;
     case 62:
      
      
      if ($class_args != 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 63:
      
      
      
      var $298 = HEAP[$class_args] - 1;
      
      
      HEAP[$class_args] = $298;
      
      
      
      
      if (HEAP[$class_args] == 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 64:
      
      
      
      
      var $309 = HEAP[HEAP[$class_args + 4] + 24];
      
      FUNCTION_TABLE[$309]($class_args);
      __label__ = 65;
      break;
     case 65:
      
      $0 = $res;
      
      $retval = $0;
      var $retval69 = $retval;
      return $retval69;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _save_global($self, $args, $name) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 5;
    _memset(__stackBase__, 0, 5);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $name_addr;
      var $retval;
      var $0;
      var $global_name;
      var $module;
      var $mod;
      var $klass;
      var $name_str;
      var $module_str;
      var $module_size;
      var $name_size;
      var $res;
      var $py_code;
      var $code;
      var $c_str = __stackBase__;
      var $n;
      $self_addr = $self;
      $args_addr = $args;
      $name_addr = $name;
      $global_name = 0;
      $module = 0;
      $mod = 0;
      $klass = 0;
      $res = -1;
      
      
      if ($name_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $global_name = $name_addr;
      
      
      
      var $7 = HEAP[$global_name] + 1;
      
      
      HEAP[$global_name] = $7;
      __label__ = 3;
      break;
     case 2:
      var $10 = HEAP[___name___str];
      
      var $12 = _PyObject_GetAttr($args_addr, $10);
      $global_name = $12;
      
      
      if ($global_name == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $17 = _whichmodule($args_addr, $global_name);
      $module = $17;
      
      if ($17 == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $20 = _PyString_Size($module);
      $module_size = $20;
      
      
      if ($module_size < 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $24 = _PyString_Size($global_name);
      $name_size = $24;
      
      
      if ($name_size < 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      $module_str = $module + 20;
      
      
      
      
      $name_str = $global_name + 20;
      
      var $36 = _PyImport_ImportModule($module_str);
      $mod = $36;
      
      
      if ($mod == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $39 = HEAP[_PicklingError];
      
      
      _cPickle_ErrFormat($39, __str25, __str26, allocate([ $args_addr, 0, 0, 0, $module, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 36;
      break;
     case 8:
      
      
      var $44 = _PyObject_GetAttrString($mod, $name_str);
      $klass = $44;
      
      
      if ($klass == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $47 = HEAP[_PicklingError];
      
      
      
      _cPickle_ErrFormat($47, __str27, __str28, allocate([ $args_addr, 0, 0, 0, $module, 0, 0, 0, $global_name, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 36;
      break;
     case 10:
      
      
      
      
      
      
      var $57 = HEAP[$klass] - 1;
      
      
      HEAP[$klass] = $57;
      
      
      
      var $63 = HEAP[$klass] == 0;
      if ($klass != $args_addr) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      if ($63) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $68 = HEAP[HEAP[$klass + 4] + 24];
      
      FUNCTION_TABLE[$68]($klass);
      __label__ = 13;
      break;
     case 13:
      var $70 = HEAP[_PicklingError];
      
      
      
      _cPickle_ErrFormat($70, __str29, __str28, allocate([ $args_addr, 0, 0, 0, $module, 0, 0, 0, $global_name, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 36;
      break;
     case 14:
      if ($63) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $78 = HEAP[HEAP[$klass + 4] + 24];
      
      FUNCTION_TABLE[$78]($klass);
      __label__ = 16;
      break;
     case 16:
      
      
      
      
      if (HEAP[$self_addr + 36] > 1) {
        __label__ = 17;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 17:
      
      
      
      var $87 = HEAP[_two_tuple] + 12;
      
      HEAP[$87] = $module;
      
      
      
      var $92 = HEAP[_two_tuple] + 12 + 4;
      
      HEAP[$92] = $global_name;
      var $94 = HEAP[_two_tuple];
      var $95 = HEAP[_extension_registry];
      var $96 = _PyDict_GetItem($95, $94);
      $py_code = $96;
      
      
      if ($py_code == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$py_code + 4] + 84] & 8388608) == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $106 = HEAP[_PicklingError];
      
      
      _cPickle_ErrFormat($106, __str30, __str31, allocate([ $args_addr, 0, 0, 0, $py_code, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 36;
      break;
     case 20:
      
      
      
      
      $code = HEAP[$py_code + 8];
      
      
      if ($code <= 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      var $115 = HEAP[_PicklingError];
      
      
      _cPickle_ErrFormat($115, __str32, __str33, allocate([ $args_addr, 0, 0, 0, $code, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 36;
      break;
     case 22:
      
      
      if ($code <= 255) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      HEAP[$c_str] = -126;
      
      
      
      HEAP[$c_str + 1] = $code & 255;
      $n = 2;
      __label__ = 27;
      break;
     case 24:
      
      
      var $126 = $c_str;
      if ($code <= 65535) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      HEAP[$126] = -125;
      
      
      
      HEAP[$c_str + 1] = $code & 255;
      
      
      
      
      HEAP[$c_str + 2] = $code >> 8 & 255;
      $n = 3;
      __label__ = 27;
      break;
     case 26:
      HEAP[$126] = -124;
      
      
      
      HEAP[$c_str + 1] = $code & 255;
      
      
      
      
      HEAP[$c_str + 2] = $code >> 8 & 255;
      
      
      
      
      HEAP[$c_str + 3] = $code >> 16 & 255;
      
      
      
      
      HEAP[$c_str + 4] = $code >> 24 & 255;
      $n = 5;
      __label__ = 27;
      break;
     case 27:
      
      
      var $151 = HEAP[$self_addr + 48];
      
      var $c_str27 = $c_str;
      
      var $154 = FUNCTION_TABLE[$151]($self_addr, $c_str27, $n);
      
      if ($154 >= 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 28:
      $res = 0;
      __label__ = 36;
      break;
     case 29:
      
      
      var $158 = HEAP[$self_addr + 48];
      
      var $160 = FUNCTION_TABLE[$158]($self_addr, _global_10855, 1);
      
      if ($160 < 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      var $164 = HEAP[$self_addr + 48];
      
      
      
      var $168 = FUNCTION_TABLE[$164]($self_addr, $module_str, $module_size);
      
      if ($168 < 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      var $172 = HEAP[$self_addr + 48];
      
      var $174 = FUNCTION_TABLE[$172]($self_addr, __str12, 1);
      
      if ($174 < 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      var $178 = HEAP[$self_addr + 48];
      
      
      
      var $182 = FUNCTION_TABLE[$178]($self_addr, $name_str, $name_size);
      
      if ($182 < 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      var $186 = HEAP[$self_addr + 48];
      
      var $188 = FUNCTION_TABLE[$186]($self_addr, __str12, 1);
      
      if ($188 < 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      var $192 = _put($self_addr, $args_addr);
      
      if ($192 < 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      $res = 0;
      __label__ = 36;
      break;
     case 36:
      
      
      if ($module != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 37:
      
      
      
      var $198 = HEAP[$module] - 1;
      
      
      HEAP[$module] = $198;
      
      
      
      
      if (HEAP[$module] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      var $209 = HEAP[HEAP[$module + 4] + 24];
      
      FUNCTION_TABLE[$209]($module);
      __label__ = 39;
      break;
     case 39:
      
      
      if ($global_name != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 40:
      
      
      
      var $216 = HEAP[$global_name] - 1;
      
      
      HEAP[$global_name] = $216;
      
      
      
      
      if (HEAP[$global_name] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $227 = HEAP[HEAP[$global_name + 4] + 24];
      
      FUNCTION_TABLE[$227]($global_name);
      __label__ = 42;
      break;
     case 42:
      
      
      if ($mod != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 43:
      
      
      
      var $234 = HEAP[$mod] - 1;
      
      
      HEAP[$mod] = $234;
      
      
      
      
      if (HEAP[$mod] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      var $245 = HEAP[HEAP[$mod + 4] + 24];
      
      FUNCTION_TABLE[$245]($mod);
      __label__ = 45;
      break;
     case 45:
      
      $0 = $res;
      
      $retval = $0;
      var $retval45 = $retval;
      STACKTOP = __stackBase__;
      return $retval45;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _save_pers($self, $args, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $pid;
      var $size;
      var $res;
      $self_addr = $self;
      $args_addr = $args;
      $f_addr = $f;
      $pid = 0;
      $res = -1;
      
      
      
      var $4 = HEAP[$args_addr] + 1;
      
      
      HEAP[$args_addr] = $4;
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $11 = _PyTuple_New(1);
      
      
      HEAP[$self_addr + 24] = $11;
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 24] + 12] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $32 = HEAP[HEAP[$self_addr + 24] + 12];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      var $50 = HEAP[HEAP[HEAP[HEAP[$self_addr + 24] + 12] + 4] + 24];
      
      
      
      
      
      
      var $57 = HEAP[HEAP[$self_addr + 24] + 12];
      FUNCTION_TABLE[$50]($57);
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      
      var $63 = HEAP[$self_addr + 24] + 12;
      
      HEAP[$63] = $args_addr;
      __label__ = 8;
      break;
     case 6:
      
      
      
      var $68 = HEAP[$args_addr] - 1;
      
      
      HEAP[$args_addr] = $68;
      
      
      
      
      if (HEAP[$args_addr] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $79 = HEAP[HEAP[$args_addr + 4] + 24];
      
      FUNCTION_TABLE[$79]($args_addr);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      
      var $87 = HEAP[$self_addr + 24];
      
      var $89 = _PyObject_Call($f_addr, $87, 0);
      $pid = $89;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 24]] > 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      var $98 = HEAP[$self_addr + 24];
      
      
      var $101 = HEAP[$98] - 1;
      var $102 = $98;
      HEAP[$102] = $101;
      
      
      
      if (HEAP[$98] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      var $112 = HEAP[HEAP[HEAP[$self_addr + 24] + 4] + 24];
      
      
      var $115 = HEAP[$self_addr + 24];
      FUNCTION_TABLE[$112]($115);
      __label__ = 12;
      break;
     case 12:
      
      
      HEAP[$self_addr + 24] = 0;
      __label__ = 13;
      break;
     case 13:
      
      
      if ($pid == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = -1;
      __label__ = 33;
      break;
     case 15:
      
      
      if ($pid != __Py_NoneStruct) {
        __label__ = 16;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 16:
      
      
      
      
      if (HEAP[$self_addr + 40] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$pid + 4] + 84] & 134217728) == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $133 = HEAP[_PicklingError];
      _PyErr_SetString($133, __str34);
      __label__ = 29;
      break;
     case 19:
      
      
      var $136 = HEAP[$self_addr + 48];
      
      var $138 = FUNCTION_TABLE[$136]($self_addr, _persid_10999, 1);
      
      if ($138 < 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      var $141 = _PyString_Size($pid);
      $size = $141;
      
      
      if ($size < 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      var $146 = HEAP[$self_addr + 48];
      
      
      
      
      
      
      var $153 = FUNCTION_TABLE[$146]($self_addr, $pid + 20, $size);
      
      if ($153 < 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      var $157 = HEAP[$self_addr + 48];
      
      var $159 = FUNCTION_TABLE[$157]($self_addr, __str12, 1);
      
      if ($159 < 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      $res = 1;
      __label__ = 29;
      break;
     case 24:
      
      
      var $163 = _save($self_addr, $pid, 1);
      
      if ($163 >= 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 25:
      
      
      var $167 = HEAP[$self_addr + 48];
      
      var $169 = FUNCTION_TABLE[$167]($self_addr, _binpersid_11000, 1);
      
      if ($169 < 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      $res = -1;
      __label__ = 29;
      break;
     case 27:
      $res = 1;
      __label__ = 29;
      break;
     case 28:
      $res = 0;
      __label__ = 29;
      break;
     case 29:
      
      
      if ($pid != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      
      
      
      var $176 = HEAP[$pid] - 1;
      
      
      HEAP[$pid] = $176;
      
      
      
      
      if (HEAP[$pid] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $187 = HEAP[HEAP[$pid + 4] + 24];
      
      FUNCTION_TABLE[$187]($pid);
      __label__ = 32;
      break;
     case 32:
      
      $0 = $res;
      __label__ = 33;
      break;
     case 33:
      
      $retval = $0;
      var $retval33 = $retval;
      return $retval33;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _save_reduce($self, $args, $fn, $ob) {
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
      var $fn_addr;
      var $ob_addr;
      var $retval;
      var $iftmp_170;
      var $0;
      var $callable = __stackBase__;
      var $argtup = __stackBase__ + 4;
      var $state = __stackBase__ + 8;
      var $listitems = __stackBase__ + 12;
      var $dictitems = __stackBase__ + 16;
      var $size;
      var $use_newobj;
      var $temp;
      var $cls;
      var $newargtup;
      var $n;
      var $i;
      var $ob_dot_class;
      var $temp52;
      $self_addr = $self;
      $args_addr = $args;
      $fn_addr = $fn;
      $ob_addr = $ob;
      HEAP[$state] = 0;
      HEAP[$listitems] = __Py_NoneStruct;
      HEAP[$dictitems] = __Py_NoneStruct;
      
      
      
      
      
      $use_newobj = HEAP[$self_addr + 36] > 1;
      
      var $7 = _PyTuple_Size($args_addr);
      $size = $7;
      
      
      
      
      
      if ($size <= 1 | $size > 5) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $12 = HEAP[_PicklingError];
      
      _cPickle_ErrFormat($12, __str35, __str36, allocate([ $fn_addr, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
      __label__ = 81;
      break;
     case 2:
      
      var $15 = _PyArg_UnpackTuple($args_addr, __str37, 2, 5, allocate([ $callable, 0, 0, 0, $argtup, 0, 0, 0, $state, 0, 0, 0, $listitems, 0, 0, 0, $dictitems, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($15 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 81;
      break;
     case 4:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$argtup] + 4] + 84] & 67108864) == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $24 = HEAP[_PicklingError];
      
      _cPickle_ErrFormat($24, __str38, __str36, allocate([ $fn_addr, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
      __label__ = 81;
      break;
     case 6:
      
      
      if (HEAP[$state] == __Py_NoneStruct) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$state] = 0;
      __label__ = 8;
      break;
     case 8:
      
      
      if (HEAP[$listitems] == __Py_NoneStruct) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$listitems] = 0;
      __label__ = 14;
      break;
     case 10:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$listitems] + 4] + 84] & 128) == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$listitems] + 4] + 112] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$listitems] + 4] + 112] == FUNCTION_TABLE_OFFSET + 2) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $53 = HEAP[HEAP[HEAP[$listitems] + 4] + 12];
      var $54 = HEAP[_PicklingError];
      
      _cPickle_ErrFormat($54, __str39, __str40, allocate([ $fn_addr, 0, 0, 0, $53, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
      __label__ = 81;
      break;
     case 14:
      
      
      if (HEAP[$dictitems] == __Py_NoneStruct) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$dictitems] = 0;
      __label__ = 20;
      break;
     case 16:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$dictitems] + 4] + 84] & 128) == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$dictitems] + 4] + 112] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$dictitems] + 4] + 112] == FUNCTION_TABLE_OFFSET + 2) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $81 = HEAP[HEAP[HEAP[$dictitems] + 4] + 12];
      var $82 = HEAP[_PicklingError];
      
      _cPickle_ErrFormat($82, __str41, __str40, allocate([ $fn_addr, 0, 0, 0, $81, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
      __label__ = 81;
      break;
     case 20:
      
      
      if ($use_newobj != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 21:
      var $86 = HEAP[___name___str];
      var $87 = HEAP[$callable];
      var $88 = _PyObject_GetAttr($87, $86);
      $temp = $88;
      
      
      if ($temp == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 22:
      var $91 = HEAP[_PyExc_AttributeError];
      var $92 = _PyErr_ExceptionMatches($91);
      
      if ($92 != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      _PyErr_Clear();
      $use_newobj = 0;
      __label__ = 59;
      break;
     case 24:
      $0 = -1;
      __label__ = 81;
      break;
     case 25:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$temp + 4] + 84] & 134217728) == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      var $105 = _strcmp($temp + 20, __str42);
      
      if ($105 != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      $iftmp_170 = 1;
      __label__ = 29;
      break;
     case 28:
      $iftmp_170 = 0;
      __label__ = 29;
      break;
     case 29:
      
      $use_newobj = $iftmp_170;
      
      
      
      var $111 = HEAP[$temp] - 1;
      
      
      HEAP[$temp] = $111;
      
      
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $122 = HEAP[HEAP[$temp + 4] + 24];
      
      FUNCTION_TABLE[$122]($temp);
      __label__ = 31;
      break;
     case 31:
      
      
      if ($use_newobj != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 32:
      var $125 = HEAP[$argtup];
      var $126 = _PyTuple_Size($125);
      $n = $126;
      
      
      if ($n <= 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      var $129 = HEAP[_PicklingError];
      _PyErr_SetString($129, __str43);
      $0 = -1;
      __label__ = 81;
      break;
     case 34:
      
      
      
      
      
      $cls = HEAP[HEAP[$argtup] + 12];
      
      var $136 = _PyObject_HasAttrString($cls, __str44);
      
      if ($136 == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      var $138 = HEAP[_PicklingError];
      _PyErr_SetString($138, __str45);
      $0 = -1;
      __label__ = 81;
      break;
     case 36:
      
      
      if ($ob_addr != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 37:
      var $141 = HEAP[___class___str];
      
      var $143 = _PyObject_GetAttr($ob_addr, $141);
      $ob_dot_class = $143;
      var $144 = $ob_dot_class;
      
      if ($144 == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      
      
      
      $i = $144 != $cls;
      __label__ = 42;
      break;
     case 39:
      var $149 = HEAP[_PyExc_AttributeError];
      var $150 = _PyErr_ExceptionMatches($149);
      
      if ($150 != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      $0 = -1;
      __label__ = 81;
      break;
     case 41:
      _PyErr_Clear();
      
      
      
      var $154 = $ob_dot_class != $cls;
      $i = $154;
      
      if ($ob_dot_class != 0) {
        __lastLabel__ = 41;
        __label__ = 42;
        break;
      } else {
        __lastLabel__ = 41;
        __label__ = 45;
        break;
      }
     case 42:
      
      
      
      var $159 = HEAP[$ob_dot_class] - 1;
      
      
      HEAP[$ob_dot_class] = $159;
      
      
      
      
      if (HEAP[$ob_dot_class] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      
      
      var $170 = HEAP[HEAP[$ob_dot_class + 4] + 24];
      
      FUNCTION_TABLE[$170]($ob_dot_class);
      __label__ = 44;
      break;
     case 44:
      var $_pr3 = $i;
      __lastLabel__ = 44;
      __label__ = 45;
      break;
     case 45:
      var $172 = __lastLabel__ == 44 ? $_pr3 : $154;
      
      if ($172 != 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      var $174 = HEAP[_PicklingError];
      _PyErr_SetString($174, __str46);
      $0 = -1;
      __label__ = 81;
      break;
     case 47:
      
      
      var $177 = _save($self_addr, $cls, 0);
      
      if ($177 < 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      $0 = -1;
      __label__ = 81;
      break;
     case 49:
      
      
      var $181 = _PyTuple_New($n - 1);
      $newargtup = $181;
      
      
      if ($newargtup == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      $0 = -1;
      __label__ = 81;
      break;
     case 51:
      $i = 1;
      
      
      
      if ($i < $n) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      
      
      
      
      
      
      $temp52 = HEAP[HEAP[$argtup] + 12 + $i * 4];
      
      
      
      var $196 = HEAP[$temp52] + 1;
      
      
      HEAP[$temp52] = $196;
      
      
      
      
      
      
      
      HEAP[$newargtup + 12 + ($i - 1) * 4] = $temp52;
      
      var $207 = $i + 1;
      $i = $207;
      
      
      
      if ($i < $n) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 53:
      
      
      var $213 = _save($self_addr, $newargtup, 0);
      $i = $213;
      
      
      
      var $217 = HEAP[$newargtup] - 1;
      
      
      HEAP[$newargtup] = $217;
      
      
      
      
      if (HEAP[$newargtup] == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      
      
      
      
      var $228 = HEAP[HEAP[$newargtup + 4] + 24];
      
      FUNCTION_TABLE[$228]($newargtup);
      __label__ = 55;
      break;
     case 55:
      
      
      if ($i < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      $0 = -1;
      __label__ = 81;
      break;
     case 57:
      
      
      var $234 = HEAP[$self_addr + 48];
      
      var $236 = FUNCTION_TABLE[$234]($self_addr, _newobj_11120, 1);
      
      if ($236 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 58:
      $0 = -1;
      __label__ = 81;
      break;
     case 59:
      var $238 = HEAP[$callable];
      
      var $240 = _save($self_addr, $238, 0);
      
      if ($240 < 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 60:
      var $242 = HEAP[$argtup];
      
      var $244 = _save($self_addr, $242, 0);
      
      if ($244 < 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 61:
      
      
      var $248 = HEAP[$self_addr + 48];
      
      var $250 = FUNCTION_TABLE[$248]($self_addr, _reduce_11118, 1);
      
      if ($250 < 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 62:
      $0 = -1;
      __label__ = 81;
      break;
     case 63:
      
      
      if ($ob_addr != 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 64:
      
      
      if (HEAP[$state] == 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 65:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$state] + 4] + 84] & 536870912) != 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 66:
      
      
      var $265 = _put2($self_addr, $ob_addr);
      
      if ($265 < 0) {
        __label__ = 67;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 67:
      $0 = -1;
      __label__ = 81;
      break;
     case 68:
      
      
      var $269 = _put($self_addr, $ob_addr);
      
      if ($269 < 0) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      $0 = -1;
      __label__ = 81;
      break;
     case 70:
      
      
      if (HEAP[$listitems] != 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 71:
      var $273 = HEAP[$listitems];
      
      var $275 = _batch_list($self_addr, $273);
      
      if ($275 < 0) {
        __label__ = 72;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 72:
      $0 = -1;
      __label__ = 81;
      break;
     case 73:
      
      
      if (HEAP[$dictitems] != 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 74:
      var $279 = HEAP[$dictitems];
      
      var $281 = _batch_dict($self_addr, $279);
      
      if ($281 < 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      $0 = -1;
      __label__ = 81;
      break;
     case 76:
      
      
      if (HEAP[$state] != 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 77:
      var $285 = HEAP[$state];
      
      var $287 = _save($self_addr, $285, 0);
      
      if ($287 < 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 78:
      
      
      var $291 = HEAP[$self_addr + 48];
      
      var $293 = FUNCTION_TABLE[$291]($self_addr, _build_11119, 1);
      
      if ($293 < 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 79:
      $0 = -1;
      __label__ = 81;
      break;
     case 80:
      $0 = 0;
      __label__ = 81;
      break;
     case 81:
      
      $retval = $0;
      var $retval85 = $retval;
      STACKTOP = __stackBase__;
      return $retval85;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _save($self, $args, $pers_save) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $pers_save_addr;
      var $retval;
      var $0;
      var $type;
      var $py_ob_id;
      var $__reduce__;
      var $t;
      var $res;
      var $tmp;
      $self_addr = $self;
      $args_addr = $args;
      $pers_save_addr = $pers_save;
      $py_ob_id = 0;
      $__reduce__ = 0;
      $t = 0;
      $res = -1;
      var $1 = HEAP[__PyThreadState_Current];
      
      
      var $4 = HEAP[$1 + 12] + 1;
      var $5 = $1 + 12;
      HEAP[$5] = $4;
      
      
      
      
      if (HEAP[$1 + 12] > HEAP[__Py_CheckRecursionLimit]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $10 = __Py_CheckRecursiveCall(__str17);
      
      if ($10 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 111;
      break;
     case 3:
      
      
      if ($pers_save_addr == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      var $20 = HEAP[$self_addr + 28];
      
      
      var $23 = _save_pers($self_addr, $args_addr, $20);
      $tmp = $23;
      
      
      if ($tmp != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      $res = $tmp;
      __label__ = 101;
      break;
     case 7:
      
      
      if ($args_addr == __Py_NoneStruct) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      var $31 = _save_none($self_addr, $args_addr);
      $res = $31;
      __label__ = 101;
      break;
     case 9:
      
      
      
      $type = HEAP[$args_addr + 4];
      
      
      
      
      
      var $40 = HEAP[HEAP[$type + 12]];
      if ($40 == 98) {
        __label__ = 10;
        break;
      } else if ($40 == 102) {
        __label__ = 16;
        break;
      } else if ($40 == 105) {
        __label__ = 12;
        break;
      } else if ($40 == 108) {
        __label__ = 14;
        break;
      } else if ($40 == 115) {
        __label__ = 21;
        break;
      } else if ($40 == 116) {
        __label__ = 18;
        break;
      } else if ($40 == 117) {
        __label__ = 24;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 10:
      
      
      
      
      
      if ($args_addr == __Py_ZeroStruct | $args_addr == __Py_TrueStruct) {
        __label__ = 11;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 11:
      
      
      var $47 = _save_bool($self_addr, $args_addr);
      $res = $47;
      __label__ = 101;
      break;
     case 12:
      
      
      if ($type == _PyInt_Type) {
        __label__ = 13;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 13:
      
      
      var $52 = _save_int($self_addr, $args_addr);
      $res = $52;
      __label__ = 101;
      break;
     case 14:
      
      
      if ($type == _PyLong_Type) {
        __label__ = 15;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 15:
      
      
      var $57 = _save_long($self_addr, $args_addr);
      $res = $57;
      __label__ = 101;
      break;
     case 16:
      
      
      if ($type == _PyFloat_Type) {
        __label__ = 17;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 17:
      
      
      var $62 = _save_float($self_addr, $args_addr);
      $res = $62;
      __label__ = 101;
      break;
     case 18:
      
      
      if ($type == _PyTuple_Type) {
        __label__ = 19;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 19:
      
      var $66 = _PyTuple_Size($args_addr);
      
      if ($66 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 20:
      
      
      var $70 = _save_tuple($self_addr, $args_addr);
      $res = $70;
      __label__ = 101;
      break;
     case 21:
      
      
      if ($type == _PyString_Type) {
        __label__ = 22;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 22:
      
      
      
      
      
      if (HEAP[$args_addr + 8] <= 1) {
        __label__ = 23;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 23:
      
      
      var $80 = _save_string($self_addr, $args_addr, 0);
      $res = $80;
      __label__ = 101;
      break;
     case 24:
      
      
      if ($type == _PyUnicode_Type) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      
      
      
      if (HEAP[$args_addr + 8] <= 1) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      var $90 = _save_unicode($self_addr, $args_addr, 0);
      $res = $90;
      __label__ = 101;
      break;
     case 27:
      
      
      
      
      if (HEAP[$args_addr] > 1) {
        __label__ = 28;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 28:
      
      
      var $97 = _PyLong_FromVoidPtr($args_addr);
      $py_ob_id = $97;
      
      
      if ($py_ob_id == 0) {
        __label__ = 101;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      var $102 = HEAP[$self_addr + 20];
      
      var $104 = _PyDict_GetItem($102, $py_ob_id);
      
      if ($104 != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      
      
      var $108 = _get($self_addr, $py_ob_id);
      
      if ($108 < 0) {
        __label__ = 101;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      $res = 0;
      __label__ = 101;
      break;
     case 32:
      
      
      
      
      
      var $115 = HEAP[HEAP[$type + 12]];
      if ($115 == 98) {
        __label__ = 53;
        break;
      } else if ($115 == 99) {
        __label__ = 47;
        break;
      } else if ($115 == 100) {
        __label__ = 43;
        break;
      } else if ($115 == 102) {
        __label__ = 49;
        break;
      } else if ($115 == 105) {
        __label__ = 45;
        break;
      } else if ($115 == 108) {
        __label__ = 41;
        break;
      } else if ($115 == 115) {
        __label__ = 33;
        break;
      } else if ($115 == 116) {
        __label__ = 37;
        break;
      } else if ($115 == 117) {
        __label__ = 35;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 33:
      
      
      if ($type == _PyString_Type) {
        __label__ = 34;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 34:
      
      
      var $120 = _save_string($self_addr, $args_addr, 1);
      $res = $120;
      __label__ = 101;
      break;
     case 35:
      
      
      if ($type == _PyUnicode_Type) {
        __label__ = 36;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 36:
      
      
      var $125 = _save_unicode($self_addr, $args_addr, 1);
      $res = $125;
      __label__ = 101;
      break;
     case 37:
      
      
      if ($type == _PyTuple_Type) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      var $130 = _save_tuple($self_addr, $args_addr);
      $res = $130;
      __label__ = 101;
      break;
     case 39:
      
      
      if ($type == _PyType_Type) {
        __label__ = 40;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 40:
      
      
      var $135 = _save_global($self_addr, $args_addr, 0);
      $res = $135;
      __label__ = 101;
      break;
     case 41:
      
      
      if ($type == _PyList_Type) {
        __label__ = 42;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 42:
      
      
      var $140 = _save_list($self_addr, $args_addr);
      $res = $140;
      __label__ = 101;
      break;
     case 43:
      
      
      if ($type == _PyDict_Type) {
        __label__ = 44;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 44:
      
      
      var $145 = _save_dict($self_addr, $args_addr);
      $res = $145;
      __label__ = 101;
      break;
     case 45:
      
      
      if ($type == _PyInstance_Type) {
        __label__ = 46;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 46:
      
      
      var $150 = _save_inst($self_addr, $args_addr);
      $res = $150;
      __label__ = 101;
      break;
     case 47:
      
      
      if ($type == _PyClass_Type) {
        __label__ = 48;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 48:
      
      
      var $155 = _save_global($self_addr, $args_addr, 0);
      $res = $155;
      __label__ = 101;
      break;
     case 49:
      
      
      if ($type == _PyFunction_Type) {
        __label__ = 50;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 50:
      
      
      var $160 = _save_global($self_addr, $args_addr, 0);
      $res = $160;
      
      
      if ($res != 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 101;
        break;
      }
     case 51:
      var $163 = HEAP[_PickleError];
      var $164 = _PyErr_ExceptionMatches($163);
      
      if ($164 != 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 101;
        break;
      }
     case 52:
      _PyErr_Clear();
      __label__ = 55;
      break;
     case 53:
      
      
      if ($type == _PyCFunction_Type) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      
      
      var $170 = _save_global($self_addr, $args_addr, 0);
      $res = $170;
      __label__ = 101;
      break;
     case 55:
      
      
      if ($pers_save_addr == 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 56:
      
      
      
      
      if (HEAP[$self_addr + 32] != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 57:
      
      
      var $179 = HEAP[$self_addr + 32];
      
      
      var $182 = _save_pers($self_addr, $args_addr, $179);
      $tmp = $182;
      
      
      if ($tmp != 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 58:
      
      $res = $tmp;
      __label__ = 101;
      break;
     case 59:
      
      var $187 = _PyType_IsSubtype($type, _PyType_Type);
      
      if ($187 != 0) {
        __label__ = 60;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 60:
      
      
      var $191 = _save_global($self_addr, $args_addr, 0);
      $res = $191;
      __label__ = 101;
      break;
     case 61:
      
      
      var $194 = HEAP[_dispatch_table];
      var $195 = _PyDict_GetItem($194, $type);
      $__reduce__ = $195;
      
      
      if ($__reduce__ != 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 75;
        break;
      }
     case 62:
      
      
      
      var $201 = HEAP[$__reduce__] + 1;
      
      
      HEAP[$__reduce__] = $201;
      
      
      
      var $207 = HEAP[$args_addr] + 1;
      
      
      HEAP[$args_addr] = $207;
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 63:
      var $214 = _PyTuple_New(1);
      
      
      HEAP[$self_addr + 24] = $214;
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 64:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 24] + 12] != 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 65:
      
      
      
      
      
      
      var $235 = HEAP[HEAP[$self_addr + 24] + 12];
      
      
      var $238 = HEAP[$235] - 1;
      var $239 = $235;
      HEAP[$239] = $238;
      
      
      
      if (HEAP[$235] == 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 66:
      
      
      
      
      
      
      
      
      
      
      var $253 = HEAP[HEAP[HEAP[HEAP[$self_addr + 24] + 12] + 4] + 24];
      
      
      
      
      
      
      var $260 = HEAP[HEAP[$self_addr + 24] + 12];
      FUNCTION_TABLE[$253]($260);
      __label__ = 67;
      break;
     case 67:
      
      
      
      
      
      var $266 = HEAP[$self_addr + 24] + 12;
      
      HEAP[$266] = $args_addr;
      __label__ = 70;
      break;
     case 68:
      
      
      
      var $271 = HEAP[$args_addr] - 1;
      
      
      HEAP[$args_addr] = $271;
      
      
      
      
      if (HEAP[$args_addr] == 0) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      
      
      
      
      var $282 = HEAP[HEAP[$args_addr + 4] + 24];
      
      FUNCTION_TABLE[$282]($args_addr);
      __label__ = 70;
      break;
     case 70:
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 94;
        break;
      }
     case 71:
      
      
      var $290 = HEAP[$self_addr + 24];
      
      var $292 = _PyObject_Call($__reduce__, $290, 0);
      $t = $292;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 24]] > 1) {
        __label__ = 72;
        break;
      } else {
        __label__ = 94;
        break;
      }
     case 72:
      
      
      var $301 = HEAP[$self_addr + 24];
      
      
      var $304 = HEAP[$301] - 1;
      var $305 = $301;
      HEAP[$305] = $304;
      
      
      
      if (HEAP[$301] == 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 73:
      
      
      
      
      
      
      var $315 = HEAP[HEAP[HEAP[$self_addr + 24] + 4] + 24];
      
      
      var $318 = HEAP[$self_addr + 24];
      FUNCTION_TABLE[$315]($318);
      __label__ = 74;
      break;
     case 74:
      
      
      HEAP[$self_addr + 24] = 0;
      __label__ = 94;
      break;
     case 75:
      var $321 = HEAP[___reduce_ex___str];
      
      var $323 = _PyObject_GetAttr($args_addr, $321);
      $__reduce__ = $323;
      
      
      if ($__reduce__ != 0) {
        __label__ = 76;
        break;
      } else {
        __label__ = 90;
        break;
      }
     case 76:
      
      
      var $328 = HEAP[$self_addr + 36];
      var $329 = _PyInt_FromLong($328);
      $t = $329;
      
      
      if ($t != 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 101;
        break;
      }
     case 77:
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 78:
      var $336 = _PyTuple_New(1);
      
      
      HEAP[$self_addr + 24] = $336;
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 79:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 24] + 12] != 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 80:
      
      
      
      
      
      
      var $357 = HEAP[HEAP[$self_addr + 24] + 12];
      
      
      var $360 = HEAP[$357] - 1;
      var $361 = $357;
      HEAP[$361] = $360;
      
      
      
      if (HEAP[$357] == 0) {
        __label__ = 81;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 81:
      
      
      
      
      
      
      
      
      
      
      var $375 = HEAP[HEAP[HEAP[HEAP[$self_addr + 24] + 12] + 4] + 24];
      
      
      
      
      
      
      var $382 = HEAP[HEAP[$self_addr + 24] + 12];
      FUNCTION_TABLE[$375]($382);
      __label__ = 82;
      break;
     case 82:
      
      
      
      
      
      var $388 = HEAP[$self_addr + 24] + 12;
      
      HEAP[$388] = $t;
      __label__ = 85;
      break;
     case 83:
      
      
      
      var $393 = HEAP[$t] - 1;
      
      
      HEAP[$t] = $393;
      
      
      
      
      if (HEAP[$t] == 0) {
        __label__ = 84;
        break;
      } else {
        __label__ = 85;
        break;
      }
     case 84:
      
      
      
      
      var $404 = HEAP[HEAP[$t + 4] + 24];
      
      FUNCTION_TABLE[$404]($t);
      __label__ = 85;
      break;
     case 85:
      $t = 0;
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 86;
        break;
      } else {
        __label__ = 101;
        break;
      }
     case 86:
      
      
      var $412 = HEAP[$self_addr + 24];
      
      var $414 = _PyObject_Call($__reduce__, $412, 0);
      $t = $414;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 24]] > 1) {
        __label__ = 87;
        break;
      } else {
        __label__ = 94;
        break;
      }
     case 87:
      
      
      var $423 = HEAP[$self_addr + 24];
      
      
      var $426 = HEAP[$423] - 1;
      var $427 = $423;
      HEAP[$427] = $426;
      
      
      
      if (HEAP[$423] == 0) {
        __label__ = 88;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 88:
      
      
      
      
      
      
      var $437 = HEAP[HEAP[HEAP[$self_addr + 24] + 4] + 24];
      
      
      var $440 = HEAP[$self_addr + 24];
      FUNCTION_TABLE[$437]($440);
      __label__ = 89;
      break;
     case 89:
      
      
      HEAP[$self_addr + 24] = 0;
      __label__ = 94;
      break;
     case 90:
      var $443 = HEAP[_PyExc_AttributeError];
      var $444 = _PyErr_ExceptionMatches($443);
      
      if ($444 != 0) {
        __label__ = 91;
        break;
      } else {
        __label__ = 101;
        break;
      }
     case 91:
      _PyErr_Clear();
      var $446 = HEAP[___reduce___str];
      
      var $448 = _PyObject_GetAttr($args_addr, $446);
      $__reduce__ = $448;
      
      
      if ($__reduce__ != 0) {
        __label__ = 92;
        break;
      } else {
        __label__ = 93;
        break;
      }
     case 92:
      var $451 = HEAP[_empty_tuple];
      
      var $453 = _PyObject_Call($__reduce__, $451, 0);
      $t = $453;
      __lastLabel__ = 92;
      __label__ = 95;
      break;
     case 93:
      var $454 = HEAP[_UnpickleableError];
      
      _PyErr_SetObject($454, $args_addr);
      __label__ = 101;
      break;
     case 94:
      var $_pr = $t;
      __lastLabel__ = 94;
      __label__ = 95;
      break;
     case 95:
      var $456 = __lastLabel__ == 94 ? $_pr : $453;
      
      if ($456 == 0) {
        __label__ = 101;
        break;
      } else {
        __label__ = 96;
        break;
      }
     case 96:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$t + 4] + 84] & 134217728) != 0) {
        __label__ = 97;
        break;
      } else {
        __label__ = 98;
        break;
      }
     case 97:
      
      
      
      var $468 = _save_global($self_addr, $args_addr, $t);
      $res = $468;
      __label__ = 101;
      break;
     case 98:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$t + 4] + 84] & 67108864) == 0) {
        __label__ = 99;
        break;
      } else {
        __label__ = 100;
        break;
      }
     case 99:
      var $476 = HEAP[_PicklingError];
      
      _cPickle_ErrFormat($476, __str47, __str36, allocate([ $__reduce__, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 101;
      break;
     case 100:
      
      
      
      
      var $482 = _save_reduce($self_addr, $t, $__reduce__, $args_addr);
      $res = $482;
      __label__ = 101;
      break;
     case 101:
      
      
      
      var $486 = HEAP[HEAP[__PyThreadState_Current] + 12] - 1;
      var $487 = HEAP[__PyThreadState_Current] + 12;
      HEAP[$487] = $486;
      
      
      if ($py_ob_id != 0) {
        __label__ = 102;
        break;
      } else {
        __label__ = 104;
        break;
      }
     case 102:
      
      
      
      var $493 = HEAP[$py_ob_id] - 1;
      
      
      HEAP[$py_ob_id] = $493;
      
      
      
      
      if (HEAP[$py_ob_id] == 0) {
        __label__ = 103;
        break;
      } else {
        __label__ = 104;
        break;
      }
     case 103:
      
      
      
      
      var $504 = HEAP[HEAP[$py_ob_id + 4] + 24];
      
      FUNCTION_TABLE[$504]($py_ob_id);
      __label__ = 104;
      break;
     case 104:
      
      
      if ($__reduce__ != 0) {
        __label__ = 105;
        break;
      } else {
        __label__ = 107;
        break;
      }
     case 105:
      
      
      
      var $511 = HEAP[$__reduce__] - 1;
      
      
      HEAP[$__reduce__] = $511;
      
      
      
      
      if (HEAP[$__reduce__] == 0) {
        __label__ = 106;
        break;
      } else {
        __label__ = 107;
        break;
      }
     case 106:
      
      
      
      
      var $522 = HEAP[HEAP[$__reduce__ + 4] + 24];
      
      FUNCTION_TABLE[$522]($__reduce__);
      __label__ = 107;
      break;
     case 107:
      
      
      if ($t != 0) {
        __label__ = 108;
        break;
      } else {
        __label__ = 110;
        break;
      }
     case 108:
      
      
      
      var $529 = HEAP[$t] - 1;
      
      
      HEAP[$t] = $529;
      
      
      
      
      if (HEAP[$t] == 0) {
        __label__ = 109;
        break;
      } else {
        __label__ = 110;
        break;
      }
     case 109:
      
      
      
      
      var $540 = HEAP[HEAP[$t + 4] + 24];
      
      FUNCTION_TABLE[$540]($t);
      __label__ = 110;
      break;
     case 110:
      
      $0 = $res;
      __label__ = 111;
      break;
     case 111:
      
      $retval = $0;
      var $retval127 = $retval;
      return $retval127;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dump($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 2;
    _memset(__stackBase__, 0, 2);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $bytes = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      
      
      
      if (HEAP[$self_addr + 36] > 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      HEAP[$bytes] = -128;
      
      
      
      
      if (HEAP[$self_addr + 36] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 36] > 255) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str48, __str15, 2788, __str54);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      var $17 = HEAP[$self_addr + 36] & 255;
      
      HEAP[$bytes + 1] = $17;
      
      
      var $21 = HEAP[$self_addr + 48];
      
      var $bytes4 = $bytes;
      var $23 = FUNCTION_TABLE[$21]($self_addr, $bytes4, 2);
      
      if ($23 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 13;
      break;
     case 6:
      
      
      var $27 = _save($self_addr, $args_addr, 0);
      
      if ($27 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = -1;
      __label__ = 13;
      break;
     case 8:
      
      
      var $31 = HEAP[$self_addr + 48];
      
      var $33 = FUNCTION_TABLE[$31]($self_addr, _stop_11690, 1);
      
      if ($33 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = -1;
      __label__ = 13;
      break;
     case 10:
      
      
      var $37 = HEAP[$self_addr + 48];
      
      var $39 = FUNCTION_TABLE[$37]($self_addr, 0, 0);
      
      if ($39 < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = -1;
      __label__ = 13;
      break;
     case 12:
      $0 = 0;
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
  function _Pickle_clear_memo($self, $args) {
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
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$self_addr + 20];
      _PyDict_Clear($7);
      __label__ = 2;
      break;
     case 2:
      
      var $9 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $9;
      $0 = __Py_NoneStruct;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Pickle_getvalue($self, $args) {
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
      var $iftmp_222;
      var $iftmp_216;
      var $0;
      var $l;
      var $i;
      var $rsize;
      var $ssize;
      var $clear = __stackBase__;
      var $lm;
      var $ik;
      var $k;
      var $r;
      var $s;
      var $p;
      var $have_get;
      var $data;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$clear] = 1;
      
      
      if ($args_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $4 = _PyArg_ParseTuple($args_addr, __str49, allocate([ $clear, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 52;
      break;
     case 3:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 16] + 4] != _PdataType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $12 = HEAP[_PicklingError];
      _PyErr_SetString($12, __str50);
      $0 = 0;
      __label__ = 52;
      break;
     case 5:
      
      var $14 = _write_other($self_addr, 0, 0);
      
      if ($14 < 0) {
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
      
      
      
      
      $data = HEAP[$self_addr + 16];
      
      
      
      $l = HEAP[$data + 8];
      
      
      var $25 = HEAP[$self_addr + 20];
      var $26 = _PyDict_Size($25);
      $lm = $26;
      
      
      if ($lm < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 52;
      break;
     case 9:
      
      var $30 = $lm + 1;
      $lm = $30;
      
      var $32 = _malloc($lm);
      $have_get = $32;
      
      
      if ($have_get == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $35 = _PyErr_NoMemory();
      $0 = $35;
      __label__ = 52;
      break;
     case 11:
      
      
      _llvm_memset_p0i8_i32($have_get, 0, $lm, 1, 0);
      $rsize = 0;
      
      $i = $l;
      __label__ = 32;
      break;
     case 12:
      
      
      
      
      
      
      $k = HEAP[HEAP[$data + 16] + 4 * $i];
      
      
      
      
      
      
      
      var $52 = $k;
      if ((HEAP[HEAP[$k + 4] + 84] & 134217728) != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $57 = $rsize + HEAP[$52 + 8];
      $rsize = $57;
      __label__ = 32;
      break;
     case 14:
      
      
      
      
      
      
      var $64 = $k;
      if ((HEAP[HEAP[$52 + 4] + 84] & 8388608) != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 15:
      
      
      
      $ik = HEAP[$64 + 8];
      
      
      
      
      
      
      if ($ik >= $lm | $ik == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      var $73 = HEAP[_PicklingError];
      _PyErr_SetString($73, __str51);
      __label__ = 51;
      break;
     case 17:
      
      
      
      
      
      if (HEAP[$have_get + $ik] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 18:
      
      
      if ($ik <= 255) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      $iftmp_216 = 2;
      __label__ = 21;
      break;
     case 20:
      $iftmp_216 = 5;
      __label__ = 21;
      break;
     case 21:
      
      
      var $83 = $rsize + $iftmp_216;
      $rsize = $83;
      __label__ = 32;
      break;
     case 22:
      
      
      
      
      
      
      if ((HEAP[HEAP[$64 + 4] + 84] & 67108864) == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      if (HEAP[$k + 8] != 2) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      var $99 = HEAP[$k + 12];
      $k = $99;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$k + 4] + 84] & 8388608) == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $107 = HEAP[_PicklingError];
      _PyErr_SetString($107, __str52);
      __label__ = 51;
      break;
     case 26:
      
      
      
      
      $ik = HEAP[$k + 8];
      
      
      
      
      
      
      if ($ik >= $lm | $ik == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $117 = HEAP[_PicklingError];
      _PyErr_SetString($117, __str51);
      $0 = 0;
      __label__ = 52;
      break;
     case 28:
      
      
      
      HEAP[$have_get + $ik] = 1;
      
      
      if ($ik <= 255) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      $iftmp_222 = 2;
      __label__ = 31;
      break;
     case 30:
      $iftmp_222 = 5;
      __label__ = 31;
      break;
     case 31:
      
      
      var $125 = $rsize + $iftmp_222;
      $rsize = $125;
      __label__ = 32;
      break;
     case 32:
      
      var $127 = $i - 1;
      $i = $127;
      
      if ($127 >= 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      var $130 = _PyString_FromStringAndSize(0, $rsize);
      $r = $130;
      
      
      if ($r == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      
      $s = $r + 20;
      $i = 0;
      
      
      
      if ($i < $l) {
        __label__ = 35;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 35:
      
      
      
      
      
      
      $k = HEAP[HEAP[$data + 16] + 4 * $i];
      
      
      
      
      
      
      
      var $153 = $k;
      if ((HEAP[HEAP[$k + 4] + 84] & 134217728) != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 36:
      
      
      
      $ssize = HEAP[$153 + 8];
      
      
      if ($ssize != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 37:
      
      
      
      
      $p = $k + 20;
      
      var $164 = $ssize - 1;
      $ssize = $164;
      
      if ($164 >= 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 38:
      
      var $167 = HEAP[$p];
      
      HEAP[$s] = $167;
      
      var $170 = $s + 1;
      $s = $170;
      
      var $172 = $p + 1;
      $p = $172;
      
      var $174 = $ssize - 1;
      $ssize = $174;
      
      if ($174 >= 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 39:
      
      
      
      
      
      
      var $182 = $k;
      if ((HEAP[HEAP[$153 + 4] + 84] & 67108864) != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 40:
      
      
      
      
      
      
      
      $ik = HEAP[HEAP[$182 + 12] + 8];
      
      
      var $192 = $s;
      if ($ik <= 255) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      HEAP[$192] = 104;
      
      var $194 = $s + 1;
      $s = $194;
      
      
      
      HEAP[$s] = $ik & 255;
      
      var $199 = $s + 1;
      $s = $199;
      __label__ = 47;
      break;
     case 42:
      HEAP[$192] = 106;
      
      var $201 = $s + 1;
      $s = $201;
      
      
      
      HEAP[$s] = $ik & 255;
      
      var $206 = $s + 1;
      $s = $206;
      
      
      
      
      HEAP[$s] = $ik >> 8 & 255;
      
      var $212 = $s + 1;
      $s = $212;
      
      
      
      
      HEAP[$s] = $ik >> 16 & 255;
      
      var $218 = $s + 1;
      $s = $218;
      
      
      
      
      HEAP[$s] = $ik >> 24 & 255;
      
      var $224 = $s + 1;
      $s = $224;
      __label__ = 47;
      break;
     case 43:
      
      
      
      $ik = HEAP[$182 + 8];
      
      
      
      
      
      if (HEAP[$have_get + $ik] != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 44:
      
      
      var $235 = $s;
      if ($ik <= 255) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      HEAP[$235] = 113;
      
      var $237 = $s + 1;
      $s = $237;
      
      
      
      HEAP[$s] = $ik & 255;
      
      var $242 = $s + 1;
      $s = $242;
      __label__ = 47;
      break;
     case 46:
      HEAP[$235] = 114;
      
      var $244 = $s + 1;
      $s = $244;
      
      
      
      HEAP[$s] = $ik & 255;
      
      var $249 = $s + 1;
      $s = $249;
      
      
      
      
      HEAP[$s] = $ik >> 8 & 255;
      
      var $255 = $s + 1;
      $s = $255;
      
      
      
      
      HEAP[$s] = $ik >> 16 & 255;
      
      var $261 = $s + 1;
      $s = $261;
      
      
      
      
      HEAP[$s] = $ik >> 24 & 255;
      
      var $267 = $s + 1;
      $s = $267;
      __label__ = 47;
      break;
     case 47:
      
      var $269 = $i + 1;
      $i = $269;
      
      
      
      if ($i < $l) {
        __label__ = 35;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      
      
      if (HEAP[$clear] != 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      var $277 = HEAP[$self_addr + 20];
      _PyDict_Clear($277);
      
      var $279 = _Pdata_clear($data, 0);
      __label__ = 50;
      break;
     case 50:
      
      _free($have_get);
      
      $0 = $r;
      __label__ = 52;
      break;
     case 51:
      
      _free($have_get);
      $0 = 0;
      __label__ = 52;
      break;
     case 52:
      
      $retval = $0;
      var $retval58 = $retval;
      STACKTOP = __stackBase__;
      return $retval58;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Pickler_dump($self, $args) {
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
      var $ob = __stackBase__;
      var $get = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$get] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str53, allocate([ $ob, 0, 0, 0, $get, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$ob];
      
      var $6 = _dump($self_addr, $4);
      
      if ($6 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 7;
      break;
     case 4:
      
      
      var $10 = $self_addr;
      if (HEAP[$get] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $11 = _Pickle_getvalue($10, 0);
      $0 = $11;
      __label__ = 7;
      break;
     case 6:
      
      
      
      var $15 = HEAP[$10] + 1;
      
      HEAP[$10] = $15;
      
      
      $0 = $self_addr;
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
  function _newPicklerobject($file, $proto) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $file_addr;
      var $proto_addr;
      var $retval;
      var $0;
      var $self;
      var $m;
      $file_addr = $file;
      $proto_addr = $proto;
      var $1 = $proto_addr;
      
      if ($1 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $proto_addr = 2;
      __label__ = 4;
      break;
     case 2:
      
      if ($1 > 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $4 = HEAP[_PyExc_ValueError];
      
      var $6 = _PyErr_Format($4, __str60, allocate([ $proto_addr, 0, 0, 0, 2, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 34;
      break;
     case 4:
      var $7 = __PyObject_GC_New(_Picklertype);
      
      $self = $7;
      
      if ($7 == 0) {
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
      
      
      
      HEAP[$self + 36] = $proto_addr;
      
      
      
      
      
      HEAP[$self + 40] = $proto_addr > 0;
      
      
      HEAP[$self + 8] = 0;
      
      
      HEAP[$self + 12] = 0;
      
      
      HEAP[$self + 20] = 0;
      
      
      HEAP[$self + 24] = 0;
      
      
      HEAP[$self + 28] = 0;
      
      
      HEAP[$self + 32] = 0;
      
      
      HEAP[$self + 52] = 0;
      
      
      HEAP[$self + 44] = 0;
      
      
      HEAP[$self + 64] = 0;
      
      
      HEAP[$self + 68] = 0;
      
      
      HEAP[$self + 56] = 0;
      
      
      HEAP[$self + 60] = 0;
      
      
      HEAP[$self + 16] = 0;
      
      
      if ($file_addr != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      var $49 = HEAP[$file_addr] + 1;
      
      
      HEAP[$file_addr] = $49;
      __label__ = 9;
      break;
     case 8:
      var $52 = _Pdata_New();
      $file_addr = $52;
      
      
      if ($file_addr == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      HEAP[$self + 16] = $file_addr;
      var $58 = _PyDict_New();
      
      
      HEAP[$self + 20] = $58;
      
      
      
      
      if (HEAP[$self + 20] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      if (HEAP[$file_addr + 4] == _PyFile_Type) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $71 = HEAP[$file_addr + 4];
      var $72 = _PyType_IsSubtype($71, _PyFile_Type);
      
      if ($72 != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      var $75 = _PyFile_AsFile($file_addr);
      
      
      HEAP[$self + 8] = $75;
      
      
      
      
      if (HEAP[$self + 8] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $82 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($82, __str61);
      __label__ = 31;
      break;
     case 14:
      
      
      HEAP[$self + 48] = FUNCTION_TABLE_OFFSET + 4;
      __label__ = 24;
      break;
     case 15:
      
      
      
      
      
      
      
      if (HEAP[$file_addr + 4] == HEAP[HEAP[_PycStringIO] + 28]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      HEAP[$self + 48] = FUNCTION_TABLE_OFFSET + 6;
      __label__ = 24;
      break;
     case 17:
      
      
      
      var $97 = $self + 48;
      if ($file_addr == __Py_NoneStruct) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      HEAP[$97] = FUNCTION_TABLE_OFFSET + 8;
      __label__ = 24;
      break;
     case 19:
      HEAP[$97] = FUNCTION_TABLE_OFFSET + 10;
      
      
      
      
      if (HEAP[$file_addr + 4] != _PdataType) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      var $102 = HEAP[_write_str];
      
      var $104 = _PyObject_GetAttr($file_addr, $102);
      
      
      HEAP[$self + 12] = $104;
      
      
      
      
      if (HEAP[$self + 12] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      _PyErr_Clear();
      var $111 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($111, __str62);
      __label__ = 31;
      break;
     case 22:
      var $112 = _PyMem_Malloc(256);
      
      
      HEAP[$self + 52] = $112;
      
      
      
      
      if (HEAP[$self + 52] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      var $119 = _PyErr_NoMemory();
      __label__ = 31;
      break;
     case 24:
      var $120 = _PyEval_GetRestricted();
      
      if ($120 != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 25:
      var $122 = _PyImport_ImportModule(__str63);
      $m = $122;
      
      
      if ($m == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      var $125 = HEAP[_dispatch_table_str];
      
      var $127 = _PyObject_GetAttr($m, $125);
      
      
      HEAP[$self + 60] = $127;
      
      
      
      var $133 = HEAP[$m] - 1;
      
      
      HEAP[$m] = $133;
      
      
      
      
      if (HEAP[$m] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $144 = HEAP[HEAP[$m + 4] + 24];
      
      FUNCTION_TABLE[$144]($m);
      __label__ = 28;
      break;
     case 28:
      
      
      
      
      if (HEAP[$self + 60] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $150 = HEAP[_dispatch_table];
      
      
      HEAP[$self + 60] = $150;
      
      
      
      var $156 = HEAP[HEAP[_dispatch_table]] + 1;
      var $157 = HEAP[_dispatch_table];
      HEAP[$157] = $156;
      __label__ = 30;
      break;
     case 30:
      
      
      _PyObject_GC_Track($self);
      
      $0 = $self;
      __label__ = 34;
      break;
     case 31:
      
      
      
      
      var $165 = HEAP[$self] - 1;
      
      HEAP[$self] = $165;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      
      var $175 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$175]($self);
      __label__ = 33;
      break;
     case 33:
      $0 = 0;
      __label__ = 34;
      break;
     case 34:
      
      $retval = $0;
      var $retval34 = $retval;
      return $retval34;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _get_Pickler($self, $args, $kwds) {
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
      var $file = __stackBase__;
      var $proto = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      $kwds_addr = $kwds;
      HEAP[$file] = 0;
      HEAP[$proto] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str64, allocate([ $proto, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      _PyErr_Clear();
      HEAP[$proto] = 0;
      
      
      var $6 = _PyArg_ParseTupleAndKeywords($args_addr, $kwds_addr, __str65, _kwlist_12011, allocate([ $file, 0, 0, 0, $proto, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($6 == 0) {
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
      var $8 = HEAP[$proto];
      var $9 = HEAP[$file];
      var $10 = _newPicklerobject($9, $8);
      
      $0 = $10;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Pickler_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      _PyObject_GC_UnTrack($self_addr);
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$self_addr + 12];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$self_addr + 12] + 4] + 24];
      
      
      var $25 = HEAP[$self_addr + 12];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[$self_addr + 20];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$self_addr + 20] + 4] + 24];
      
      
      var $49 = HEAP[$self_addr + 20];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$self_addr + 68] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $56 = HEAP[$self_addr + 68];
      
      
      var $59 = HEAP[$56] - 1;
      var $60 = $56;
      HEAP[$60] = $59;
      
      
      
      if (HEAP[$56] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $70 = HEAP[HEAP[HEAP[$self_addr + 68] + 4] + 24];
      
      
      var $73 = HEAP[$self_addr + 68];
      FUNCTION_TABLE[$70]($73);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $80 = HEAP[$self_addr + 24];
      
      
      var $83 = HEAP[$80] - 1;
      var $84 = $80;
      HEAP[$84] = $83;
      
      
      
      if (HEAP[$80] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      var $94 = HEAP[HEAP[HEAP[$self_addr + 24] + 4] + 24];
      
      
      var $97 = HEAP[$self_addr + 24];
      FUNCTION_TABLE[$94]($97);
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      if (HEAP[$self_addr + 16] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      var $104 = HEAP[$self_addr + 16];
      
      
      var $107 = HEAP[$104] - 1;
      var $108 = $104;
      HEAP[$108] = $107;
      
      
      
      if (HEAP[$104] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      
      var $118 = HEAP[HEAP[HEAP[$self_addr + 16] + 4] + 24];
      
      
      var $121 = HEAP[$self_addr + 16];
      FUNCTION_TABLE[$118]($121);
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      var $128 = HEAP[$self_addr + 28];
      
      
      var $131 = HEAP[$128] - 1;
      var $132 = $128;
      HEAP[$132] = $131;
      
      
      
      if (HEAP[$128] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      
      var $142 = HEAP[HEAP[HEAP[$self_addr + 28] + 4] + 24];
      
      
      var $145 = HEAP[$self_addr + 28];
      FUNCTION_TABLE[$142]($145);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      if (HEAP[$self_addr + 32] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $152 = HEAP[$self_addr + 32];
      
      
      var $155 = HEAP[$152] - 1;
      var $156 = $152;
      HEAP[$156] = $155;
      
      
      
      if (HEAP[$152] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      
      
      var $166 = HEAP[HEAP[HEAP[$self_addr + 32] + 4] + 24];
      
      
      var $169 = HEAP[$self_addr + 32];
      FUNCTION_TABLE[$166]($169);
      __label__ = 21;
      break;
     case 21:
      
      
      
      
      if (HEAP[$self_addr + 60] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      var $176 = HEAP[$self_addr + 60];
      
      
      var $179 = HEAP[$176] - 1;
      var $180 = $176;
      HEAP[$180] = $179;
      
      
      
      if (HEAP[$176] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      
      
      var $190 = HEAP[HEAP[HEAP[$self_addr + 60] + 4] + 24];
      
      
      var $193 = HEAP[$self_addr + 60];
      FUNCTION_TABLE[$190]($193);
      __label__ = 24;
      break;
     case 24:
      
      
      var $196 = HEAP[$self_addr + 52];
      _PyMem_Free($196);
      
      
      
      
      
      var $202 = HEAP[HEAP[$self_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$202]($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Pickler_traverse($self, $visit, $arg) {
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
      var $vret4;
      var $vret8;
      var $vret12;
      var $vret16;
      var $vret20;
      var $vret24;
      var $vret28;
      $self_addr = $self;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$self_addr + 12];
      var $8 = $visit_addr;
      
      var $10 = FUNCTION_TABLE[$8]($7, $arg_addr);
      $vret = $10;
      
      
      if ($vret != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      $0 = $vret;
      __label__ = 25;
      break;
     case 3:
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$self_addr + 20];
      var $21 = $visit_addr;
      
      var $23 = FUNCTION_TABLE[$21]($20, $arg_addr);
      $vret4 = $23;
      
      
      if ($vret4 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      $0 = $vret4;
      __label__ = 25;
      break;
     case 6:
      
      
      
      
      if (HEAP[$self_addr + 68] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $33 = HEAP[$self_addr + 68];
      var $34 = $visit_addr;
      
      var $36 = FUNCTION_TABLE[$34]($33, $arg_addr);
      $vret8 = $36;
      
      
      if ($vret8 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      $0 = $vret8;
      __label__ = 25;
      break;
     case 9:
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $46 = HEAP[$self_addr + 24];
      var $47 = $visit_addr;
      
      var $49 = FUNCTION_TABLE[$47]($46, $arg_addr);
      $vret12 = $49;
      
      
      if ($vret12 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      $0 = $vret12;
      __label__ = 25;
      break;
     case 12:
      
      
      
      
      if (HEAP[$self_addr + 16] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      var $59 = HEAP[$self_addr + 16];
      var $60 = $visit_addr;
      
      var $62 = FUNCTION_TABLE[$60]($59, $arg_addr);
      $vret16 = $62;
      
      
      if ($vret16 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      $0 = $vret16;
      __label__ = 25;
      break;
     case 15:
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      var $72 = HEAP[$self_addr + 28];
      var $73 = $visit_addr;
      
      var $75 = FUNCTION_TABLE[$73]($72, $arg_addr);
      $vret20 = $75;
      
      
      if ($vret20 != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      $0 = $vret20;
      __label__ = 25;
      break;
     case 18:
      
      
      
      
      if (HEAP[$self_addr + 32] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $85 = HEAP[$self_addr + 32];
      var $86 = $visit_addr;
      
      var $88 = FUNCTION_TABLE[$86]($85, $arg_addr);
      $vret24 = $88;
      
      
      if ($vret24 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      $0 = $vret24;
      __label__ = 25;
      break;
     case 21:
      
      
      
      
      if (HEAP[$self_addr + 60] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      var $98 = HEAP[$self_addr + 60];
      var $99 = $visit_addr;
      
      var $101 = FUNCTION_TABLE[$99]($98, $arg_addr);
      $vret28 = $101;
      
      
      if ($vret28 != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      $0 = $vret28;
      __label__ = 25;
      break;
     case 24:
      $0 = 0;
      __label__ = 25;
      break;
     case 25:
      
      $retval = $0;
      var $retval32 = $retval;
      return $retval32;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Pickler_clear($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $_py_tmp;
      var $_py_tmp4;
      var $_py_tmp8;
      var $_py_tmp12;
      var $_py_tmp16;
      var $_py_tmp20;
      var $_py_tmp24;
      var $_py_tmp28;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      $_py_tmp = HEAP[$self_addr + 12];
      
      
      HEAP[$self_addr + 12] = 0;
      
      
      
      var $13 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $13;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $24 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$24]($_py_tmp);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      $_py_tmp4 = HEAP[$self_addr + 20];
      
      
      HEAP[$self_addr + 20] = 0;
      
      
      
      var $38 = HEAP[$_py_tmp4] - 1;
      
      
      HEAP[$_py_tmp4] = $38;
      
      
      
      
      if (HEAP[$_py_tmp4] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $49 = HEAP[HEAP[$_py_tmp4 + 4] + 24];
      
      FUNCTION_TABLE[$49]($_py_tmp4);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$self_addr + 68] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      $_py_tmp8 = HEAP[$self_addr + 68];
      
      
      HEAP[$self_addr + 68] = 0;
      
      
      
      var $63 = HEAP[$_py_tmp8] - 1;
      
      
      HEAP[$_py_tmp8] = $63;
      
      
      
      
      if (HEAP[$_py_tmp8] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $74 = HEAP[HEAP[$_py_tmp8 + 4] + 24];
      
      FUNCTION_TABLE[$74]($_py_tmp8);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      $_py_tmp12 = HEAP[$self_addr + 24];
      
      
      HEAP[$self_addr + 24] = 0;
      
      
      
      var $88 = HEAP[$_py_tmp12] - 1;
      
      
      HEAP[$_py_tmp12] = $88;
      
      
      
      
      if (HEAP[$_py_tmp12] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $99 = HEAP[HEAP[$_py_tmp12 + 4] + 24];
      
      FUNCTION_TABLE[$99]($_py_tmp12);
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      if (HEAP[$self_addr + 16] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      
      $_py_tmp16 = HEAP[$self_addr + 16];
      
      
      HEAP[$self_addr + 16] = 0;
      
      
      
      var $113 = HEAP[$_py_tmp16] - 1;
      
      
      HEAP[$_py_tmp16] = $113;
      
      
      
      
      if (HEAP[$_py_tmp16] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $124 = HEAP[HEAP[$_py_tmp16 + 4] + 24];
      
      FUNCTION_TABLE[$124]($_py_tmp16);
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      $_py_tmp20 = HEAP[$self_addr + 28];
      
      
      HEAP[$self_addr + 28] = 0;
      
      
      
      var $138 = HEAP[$_py_tmp20] - 1;
      
      
      HEAP[$_py_tmp20] = $138;
      
      
      
      
      if (HEAP[$_py_tmp20] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $149 = HEAP[HEAP[$_py_tmp20 + 4] + 24];
      
      FUNCTION_TABLE[$149]($_py_tmp20);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      if (HEAP[$self_addr + 32] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      
      $_py_tmp24 = HEAP[$self_addr + 32];
      
      
      HEAP[$self_addr + 32] = 0;
      
      
      
      var $163 = HEAP[$_py_tmp24] - 1;
      
      
      HEAP[$_py_tmp24] = $163;
      
      
      
      
      if (HEAP[$_py_tmp24] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $174 = HEAP[HEAP[$_py_tmp24 + 4] + 24];
      
      FUNCTION_TABLE[$174]($_py_tmp24);
      __label__ = 21;
      break;
     case 21:
      
      
      
      
      if (HEAP[$self_addr + 60] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      
      $_py_tmp28 = HEAP[$self_addr + 60];
      
      
      HEAP[$self_addr + 60] = 0;
      
      
      
      var $188 = HEAP[$_py_tmp28] - 1;
      
      
      HEAP[$_py_tmp28] = $188;
      
      
      
      
      if (HEAP[$_py_tmp28] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $199 = HEAP[HEAP[$_py_tmp28 + 4] + 24];
      
      FUNCTION_TABLE[$199]($_py_tmp28);
      __label__ = 24;
      break;
     case 24:
      $0 = 0;
      
      $retval = $0;
      var $retval31 = $retval;
      return $retval31;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Pickler_get_pers_func($p) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $retval;
      var $0;
      $p_addr = $p;
      
      
      
      
      if (HEAP[$p_addr + 28] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_AttributeError];
      _PyErr_SetString($5, __str68);
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      
      var $11 = HEAP[HEAP[$p_addr + 28]] + 1;
      var $12 = HEAP[$p_addr + 28];
      HEAP[$12] = $11;
      __label__ = 3;
      break;
     case 3:
      
      
      
      $0 = HEAP[$p_addr + 28];
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Pickler_set_pers_func($p, $v) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $retval;
      var $0;
      $p_addr = $p;
      $v_addr = $v;
      
      
      if ($v_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($3, __str69);
      $0 = -1;
      __label__ = 6;
      break;
     case 2:
      
      
      
      
      if (HEAP[$p_addr + 28] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $10 = HEAP[$p_addr + 28];
      
      
      var $13 = HEAP[$10] - 1;
      var $14 = $10;
      HEAP[$14] = $13;
      
      
      
      if (HEAP[$10] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[$p_addr + 28] + 4] + 24];
      
      
      var $27 = HEAP[$p_addr + 28];
      FUNCTION_TABLE[$24]($27);
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $31 = HEAP[$v_addr] + 1;
      
      
      HEAP[$v_addr] = $31;
      
      
      
      HEAP[$p_addr + 28] = $v_addr;
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
  function _Pickler_set_inst_pers_func($p, $v) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $retval;
      var $0;
      $p_addr = $p;
      $v_addr = $v;
      
      
      if ($v_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($3, __str69);
      $0 = -1;
      __label__ = 6;
      break;
     case 2:
      
      
      
      
      if (HEAP[$p_addr + 32] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $10 = HEAP[$p_addr + 32];
      
      
      var $13 = HEAP[$10] - 1;
      var $14 = $10;
      HEAP[$14] = $13;
      
      
      
      if (HEAP[$10] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[$p_addr + 32] + 4] + 24];
      
      
      var $27 = HEAP[$p_addr + 32];
      FUNCTION_TABLE[$24]($27);
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $31 = HEAP[$v_addr] + 1;
      
      
      HEAP[$v_addr] = $31;
      
      
      
      HEAP[$p_addr + 32] = $v_addr;
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
  function _Pickler_get_memo($p) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $retval;
      var $0;
      $p_addr = $p;
      
      
      
      
      if (HEAP[$p_addr + 20] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_AttributeError];
      _PyErr_SetString($5, __str70);
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      
      var $11 = HEAP[HEAP[$p_addr + 20]] + 1;
      var $12 = HEAP[$p_addr + 20];
      HEAP[$12] = $11;
      __label__ = 3;
      break;
     case 3:
      
      
      
      $0 = HEAP[$p_addr + 20];
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Pickler_set_memo($p, $v) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $v_addr;
      var $retval;
      var $0;
      $p_addr = $p;
      $v_addr = $v;
      
      
      if ($v_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($3, __str69);
      $0 = -1;
      __label__ = 8;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v_addr + 4] + 84] & 536870912) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($11, __str71);
      $0 = -1;
      __label__ = 8;
      break;
     case 4:
      
      
      
      
      if (HEAP[$p_addr + 20] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      var $18 = HEAP[$p_addr + 20];
      
      
      var $21 = HEAP[$18] - 1;
      var $22 = $18;
      HEAP[$22] = $21;
      
      
      
      if (HEAP[$18] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      
      var $32 = HEAP[HEAP[HEAP[$p_addr + 20] + 4] + 24];
      
      
      var $35 = HEAP[$p_addr + 20];
      FUNCTION_TABLE[$32]($35);
      __label__ = 7;
      break;
     case 7:
      
      
      
      var $39 = HEAP[$v_addr] + 1;
      
      
      HEAP[$v_addr] = $39;
      
      
      
      HEAP[$p_addr + 20] = $v_addr;
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
  function _Pickler_get_error($p) {
    
    var $p_addr;
    var $retval;
    var $0;
    $p_addr = $p;
    
    
    
    var $4 = HEAP[HEAP[_PicklingError]] + 1;
    var $5 = HEAP[_PicklingError];
    HEAP[$5] = $4;
    
    $0 = HEAP[_PicklingError];
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _find_class($py_module_name, $py_global_name, $fc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $py_module_name_addr;
      var $py_global_name_addr;
      var $fc_addr;
      var $retval;
      var $0;
      var $global;
      var $module;
      $py_module_name_addr = $py_module_name;
      $py_global_name_addr = $py_global_name;
      $fc_addr = $fc;
      $global = 0;
      
      
      if ($fc_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      if ($fc_addr == __Py_NoneStruct) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $5 = HEAP[_UnpicklingError];
      _PyErr_SetString($5, __str77);
      $0 = 0;
      __label__ = 13;
      break;
     case 3:
      
      
      
      var $9 = _PyObject_CallFunctionObjArgs($fc_addr, allocate([ $py_module_name_addr, 0, 0, 0, $py_global_name_addr, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $9;
      __label__ = 13;
      break;
     case 4:
      var $10 = _PySys_GetObject(__str7);
      $module = $10;
      
      
      if ($module == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 13;
      break;
     case 6:
      
      
      var $15 = _PyDict_GetItem($module, $py_module_name_addr);
      $module = $15;
      
      
      if ($module == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 7:
      
      var $19 = _PyImport_Import($py_module_name_addr);
      $module = $19;
      
      
      if ($module == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 13;
      break;
     case 9:
      
      
      var $24 = _PyObject_GetAttr($module, $py_global_name_addr);
      $global = $24;
      
      
      
      var $28 = HEAP[$module] - 1;
      
      
      HEAP[$module] = $28;
      
      
      
      
      if (HEAP[$module] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      
      var $39 = HEAP[HEAP[$module + 4] + 24];
      
      FUNCTION_TABLE[$39]($module);
      __label__ = 12;
      break;
     case 11:
      
      
      var $43 = _PyObject_GetAttr($module, $py_global_name_addr);
      $global = $43;
      __label__ = 12;
      break;
     case 12:
      
      $0 = $global;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval14 = $retval;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _marker($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 52] <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_UnpicklingError];
      _PyErr_SetString($5, __str78);
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
      
      
      var $8 = HEAP[$self_addr + 48];
      
      
      
      var $12 = HEAP[$self_addr + 52] - 1;
      
      
      HEAP[$self_addr + 52] = $12;
      
      
      
      
      
      $0 = HEAP[$8 + 4 * HEAP[$self_addr + 52]];
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
  function _load_none($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $14 = HEAP[$self_addr + 32];
      var $15 = _Pdata_grow($14);
      
      if ($15 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 4;
      break;
     case 3:
      
      var $18 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $18;
      
      
      
      
      
      
      
      var $26 = HEAP[$self_addr + 32];
      
      var $28 = HEAP[$26 + 8];
      var $29 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $28;
      HEAP[$29] = __Py_NoneStruct;
      var $30 = $28 + 1;
      var $31 = $26 + 8;
      HEAP[$31] = $30;
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
  function _bad_readline() {
    
    var $retval;
    var $0;
    var $1 = HEAP[_UnpicklingError];
    _PyErr_SetString($1, __str79);
    $0 = -1;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _load_int($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $py_int;
      var $endptr = __stackBase__;
      var $s = __stackBase__ + 4;
      var $len;
      var $res;
      var $l;
      $self_addr = $self;
      $py_int = 0;
      $res = -1;
      
      
      var $3 = HEAP[$self_addr + 64];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $s);
      $len = $5;
      
      
      if ($len < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 22;
      break;
     case 2:
      
      
      if ($len <= 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _bad_readline();
      $0 = $10;
      __label__ = 22;
      break;
     case 4:
      var $11 = HEAP[$s];
      
      var $13 = _pystrndup($11, $len);
      HEAP[$s] = $13;
      
      
      if (HEAP[$s] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 22;
      break;
     case 6:
      var $16 = ___errno_location();
      HEAP[$16] = 0;
      var $17 = HEAP[$s];
      var $18 = _strtol($17, $endptr, 0);
      $l = $18;
      var $19 = ___errno_location();
      
      
      if (HEAP[$19] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      if (HEAP[HEAP[$endptr]] != 10) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[HEAP[$endptr] + 1] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      var $29 = ___errno_location();
      HEAP[$29] = 0;
      var $30 = HEAP[$s];
      var $31 = _PyLong_FromString($30, 0, 0);
      $py_int = $31;
      
      if ($31 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 10:
      var $33 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($33, __str80);
      __label__ = 21;
      break;
     case 11:
      
      
      if ($len != 3) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      if ($l == 0 | $l == 1) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      var $41 = _PyBool_FromLong($l);
      $py_int = $41;
      
      
      if ($py_int == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      var $45 = _PyInt_FromLong($l);
      $py_int = $45;
      
      if ($45 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $47 = HEAP[$s];
      _free($47);
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 16:
      
      
      var $61 = HEAP[$self_addr + 32];
      var $62 = _Pdata_grow($61);
      
      if ($62 < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      
      
      
      var $67 = HEAP[$py_int] - 1;
      
      
      HEAP[$py_int] = $67;
      
      
      
      
      if (HEAP[$py_int] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $78 = HEAP[HEAP[$py_int + 4] + 24];
      
      FUNCTION_TABLE[$78]($py_int);
      __label__ = 19;
      break;
     case 19:
      $0 = -1;
      __label__ = 22;
      break;
     case 20:
      
      
      
      
      
      
      
      var $87 = HEAP[$self_addr + 32];
      
      var $89 = HEAP[$87 + 8];
      var $90 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $89;
      
      HEAP[$90] = $py_int;
      var $92 = $89 + 1;
      var $93 = $87 + 8;
      HEAP[$93] = $92;
      $0 = 0;
      __label__ = 22;
      break;
     case 21:
      var $94 = HEAP[$s];
      _free($94);
      
      $0 = $res;
      __label__ = 22;
      break;
     case 22:
      
      $retval = $0;
      var $retval24 = $retval;
      STACKTOP = __stackBase__;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_bool($self, $boolean) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $boolean_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $boolean_addr = $boolean;
      
      
      
      
      
      if ($boolean_addr != __Py_TrueStruct & $boolean_addr != __Py_ZeroStruct) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str81, __str15, 3391, ___PRETTY_FUNCTION___12572);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $18 = HEAP[$self_addr + 32];
      var $19 = _Pdata_grow($18);
      
      if ($19 < 0) {
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
      
      
      
      var $24 = HEAP[$boolean_addr] + 1;
      
      
      HEAP[$boolean_addr] = $24;
      
      
      
      
      
      
      
      var $34 = HEAP[$self_addr + 32];
      
      var $36 = HEAP[$34 + 8];
      var $37 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $36;
      
      HEAP[$37] = $boolean_addr;
      var $39 = $36 + 1;
      var $40 = $34 + 8;
      HEAP[$40] = $39;
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
  function _calc_binint($s, $x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $x_addr;
      var $retval;
      var $0;
      var $c;
      var $i;
      var $l;
      $s_addr = $s;
      $x_addr = $x;
      $i = 0;
      $l = 0;
      
      
      
      if ($i < $x_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      $c = HEAP[$s_addr + $i];
      
      
      
      
      
      
      var $14 = $c << $i * 8 | $l;
      $l = $14;
      
      var $16 = $i + 1;
      $i = $16;
      
      
      
      if ($i < $x_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      $0 = $l;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_binintx($self, $s, $x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $s_addr;
      var $x_addr;
      var $retval;
      var $0;
      var $py_int;
      var $l;
      $self_addr = $self;
      $s_addr = $s;
      $x_addr = $x;
      $py_int = 0;
      
      
      var $3 = _calc_binint($s_addr, $x_addr);
      $l = $3;
      
      var $5 = _PyInt_FromLong($l);
      $py_int = $5;
      
      
      if ($py_int == 0) {
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
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      var $21 = HEAP[$self_addr + 32];
      var $22 = _Pdata_grow($21);
      
      if ($22 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $27 = HEAP[$py_int] - 1;
      
      
      HEAP[$py_int] = $27;
      
      
      
      
      if (HEAP[$py_int] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $38 = HEAP[HEAP[$py_int + 4] + 24];
      
      FUNCTION_TABLE[$38]($py_int);
      __label__ = 6;
      break;
     case 6:
      $0 = -1;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      
      
      
      var $47 = HEAP[$self_addr + 32];
      
      var $49 = HEAP[$47 + 8];
      var $50 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $49;
      
      HEAP[$50] = $py_int;
      var $52 = $49 + 1;
      var $53 = $47 + 8;
      HEAP[$53] = $52;
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
  function _load_binint($self) {
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
      var $s = __stackBase__;
      $self_addr = $self;
      
      
      var $3 = HEAP[$self_addr + 60];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $s, 4);
      
      if ($5 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
      var $7 = HEAP[$s];
      
      var $9 = _load_binintx($self_addr, $7, 4);
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
  function _load_binint1($self) {
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
      var $s = __stackBase__;
      $self_addr = $self;
      
      
      var $3 = HEAP[$self_addr + 60];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $s, 1);
      
      if ($5 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
      var $7 = HEAP[$s];
      
      var $9 = _load_binintx($self_addr, $7, 1);
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
  function _load_binint2($self) {
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
      var $s = __stackBase__;
      $self_addr = $self;
      
      
      var $3 = HEAP[$self_addr + 60];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $s, 2);
      
      if ($5 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
      var $7 = HEAP[$s];
      
      var $9 = _load_binintx($self_addr, $7, 2);
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
  function _load_long($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $l;
      var $end = __stackBase__;
      var $s = __stackBase__ + 4;
      var $len;
      var $res;
      $self_addr = $self;
      $l = 0;
      $res = -1;
      
      
      var $3 = HEAP[$self_addr + 64];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $s);
      $len = $5;
      
      
      if ($len < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 14;
      break;
     case 2:
      
      
      if ($len <= 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _bad_readline();
      $0 = $10;
      __label__ = 14;
      break;
     case 4:
      var $11 = HEAP[$s];
      
      var $13 = _pystrndup($11, $len);
      HEAP[$s] = $13;
      
      
      if (HEAP[$s] == 0) {
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
      var $16 = HEAP[$s];
      var $17 = _PyLong_FromString($16, $end, 0);
      $l = $17;
      
      var $19 = $l == 0;
      var $20 = HEAP[$s];
      _free($20);
      if ($19) {
        __label__ = 13;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      var $34 = HEAP[$self_addr + 32];
      var $35 = _Pdata_grow($34);
      
      if ($35 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      var $40 = HEAP[$l] - 1;
      
      
      HEAP[$l] = $40;
      
      
      
      
      if (HEAP[$l] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $51 = HEAP[HEAP[$l + 4] + 24];
      
      FUNCTION_TABLE[$51]($l);
      __label__ = 11;
      break;
     case 11:
      $0 = -1;
      __label__ = 14;
      break;
     case 12:
      
      
      
      
      
      
      
      var $60 = HEAP[$self_addr + 32];
      
      var $62 = HEAP[$60 + 8];
      var $63 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $62;
      
      HEAP[$63] = $l;
      var $65 = $62 + 1;
      var $66 = $60 + 8;
      HEAP[$66] = $65;
      $0 = 0;
      __label__ = 14;
      break;
     case 13:
      
      $0 = $res;
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
  function _load_counted_long($self, $size) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $size_addr;
      var $retval;
      var $0;
      var $i;
      var $nbytes = __stackBase__;
      var $pdata = __stackBase__ + 4;
      var $along;
      $self_addr = $self;
      $size_addr = $size;
      
      
      
      
      
      if ($size_addr != 1 & $size_addr != 4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str82, __str15, 3510, ___PRETTY_FUNCTION___12743);
      throw "Reached an unreachable!";
     case 2:
      
      
      var $7 = HEAP[$self_addr + 60];
      
      
      var $10 = FUNCTION_TABLE[$7]($self_addr, $nbytes, $size_addr);
      $i = $10;
      
      
      if ($i < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 19;
      break;
     case 4:
      var $13 = HEAP[$nbytes];
      
      var $15 = _calc_binint($13, $size_addr);
      $size_addr = $15;
      
      
      if ($size_addr < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $18 = HEAP[_UnpicklingError];
      _PyErr_SetString($18, __str83);
      $0 = -1;
      __label__ = 19;
      break;
     case 6:
      
      
      if ($size_addr == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $21 = _PyLong_FromLong(0);
      $along = $21;
      __lastLabel__ = 7;
      __label__ = 11;
      break;
     case 8:
      
      
      var $24 = HEAP[$self_addr + 60];
      
      
      var $27 = FUNCTION_TABLE[$24]($self_addr, $pdata, $size_addr);
      $i = $27;
      
      
      if ($i < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = -1;
      __label__ = 19;
      break;
     case 10:
      
      var $31 = HEAP[$pdata];
      var $32 = __PyLong_FromByteArray($31, $size_addr, 1, 1);
      $along = $32;
      __lastLabel__ = 10;
      __label__ = 11;
      break;
     case 11:
      var $33 = __lastLabel__ == 10 ? $32 : $21;
      
      if ($33 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = -1;
      __label__ = 19;
      break;
     case 13:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      
      
      var $48 = HEAP[$self_addr + 32];
      var $49 = _Pdata_grow($48);
      
      if ($49 < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      
      
      
      var $54 = HEAP[$along] - 1;
      
      
      HEAP[$along] = $54;
      
      
      
      
      if (HEAP[$along] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $65 = HEAP[HEAP[$along + 4] + 24];
      
      FUNCTION_TABLE[$65]($along);
      __label__ = 17;
      break;
     case 17:
      $0 = -1;
      __label__ = 19;
      break;
     case 18:
      
      
      
      
      
      
      
      var $74 = HEAP[$self_addr + 32];
      
      var $76 = HEAP[$74 + 8];
      var $77 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $76;
      
      HEAP[$77] = $along;
      var $79 = $76 + 1;
      var $80 = $74 + 8;
      HEAP[$80] = $79;
      $0 = 0;
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
  function _load_float($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $py_float;
      var $endptr = __stackBase__;
      var $s = __stackBase__ + 4;
      var $len;
      var $res;
      var $d;
      $self_addr = $self;
      $py_float = 0;
      $res = -1;
      
      
      var $3 = HEAP[$self_addr + 64];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $s);
      $len = $5;
      
      
      if ($len < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 19;
      break;
     case 2:
      
      
      if ($len <= 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _bad_readline();
      $0 = $10;
      __label__ = 19;
      break;
     case 4:
      var $11 = HEAP[$s];
      
      var $13 = _pystrndup($11, $len);
      HEAP[$s] = $13;
      
      
      if (HEAP[$s] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 19;
      break;
     case 6:
      var $16 = HEAP[_PyExc_OverflowError];
      var $17 = HEAP[$s];
      var $18 = _PyOS_string_to_double($17, $endptr, $16);
      $d = $18;
      
      var $20 = $d != -1;
      if ($20) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $21 = _PyErr_Occurred();
      
      if ($21 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[HEAP[$endptr]] != 10) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[HEAP[$endptr] + 1] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $31 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($31, __str84);
      __label__ = 18;
      break;
     case 11:
      
      var $33 = _PyFloat_FromDouble($d);
      $py_float = $33;
      
      
      if ($py_float == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $36 = HEAP[$s];
      _free($36);
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 13:
      
      
      var $50 = HEAP[$self_addr + 32];
      var $51 = _Pdata_grow($50);
      
      if ($51 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      
      
      var $56 = HEAP[$py_float] - 1;
      
      
      HEAP[$py_float] = $56;
      
      
      
      
      if (HEAP[$py_float] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $67 = HEAP[HEAP[$py_float + 4] + 24];
      
      FUNCTION_TABLE[$67]($py_float);
      __label__ = 16;
      break;
     case 16:
      $0 = -1;
      __label__ = 19;
      break;
     case 17:
      
      
      
      
      
      
      
      var $76 = HEAP[$self_addr + 32];
      
      var $78 = HEAP[$76 + 8];
      var $79 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $78;
      
      HEAP[$79] = $py_float;
      var $81 = $78 + 1;
      var $82 = $76 + 8;
      HEAP[$82] = $81;
      $0 = 0;
      __label__ = 19;
      break;
     case 18:
      var $83 = HEAP[$s];
      _free($83);
      
      $0 = $res;
      __label__ = 19;
      break;
     case 19:
      
      $retval = $0;
      var $retval18 = $retval;
      STACKTOP = __stackBase__;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_binfloat($self) {
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
      var $py_float;
      var $x;
      var $p = __stackBase__;
      $self_addr = $self;
      
      
      var $3 = HEAP[$self_addr + 60];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $p, 8);
      
      if ($5 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 13;
      break;
     case 2:
      var $7 = HEAP[$p];
      var $8 = __PyFloat_Unpack8($7, 0);
      $x = $8;
      
      var $10 = $x == -1;
      if ($10) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $11 = _PyErr_Occurred();
      
      if ($11 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 13;
      break;
     case 5:
      
      var $14 = _PyFloat_FromDouble($x);
      $py_float = $14;
      
      if ($14 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -1;
      __label__ = 13;
      break;
     case 7:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      var $29 = HEAP[$self_addr + 32];
      var $30 = _Pdata_grow($29);
      
      if ($30 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      var $35 = HEAP[$py_float] - 1;
      
      
      HEAP[$py_float] = $35;
      
      
      
      
      if (HEAP[$py_float] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $46 = HEAP[HEAP[$py_float + 4] + 24];
      
      FUNCTION_TABLE[$46]($py_float);
      __label__ = 11;
      break;
     case 11:
      $0 = -1;
      __label__ = 13;
      break;
     case 12:
      
      
      
      
      
      
      
      var $55 = HEAP[$self_addr + 32];
      
      var $57 = HEAP[$55 + 8];
      var $58 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $57;
      
      HEAP[$58] = $py_float;
      var $60 = $57 + 1;
      var $61 = $55 + 8;
      HEAP[$61] = $60;
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
  function _load_string($self) {
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
      var $str;
      var $len;
      var $res;
      var $s = __stackBase__;
      var $p;
      $self_addr = $self;
      $str = 0;
      $res = -1;
      
      
      var $3 = HEAP[$self_addr + 64];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $s);
      $len = $5;
      
      
      if ($len < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 23;
      break;
     case 2:
      
      
      if ($len <= 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _bad_readline();
      $0 = $10;
      __label__ = 23;
      break;
     case 4:
      var $11 = HEAP[$s];
      
      var $13 = _pystrndup($11, $len);
      HEAP[$s] = $13;
      
      
      if (HEAP[$s] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      if (HEAP[HEAP[$s] + ($len - 1)] <= 32) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      $0 = -1;
      __label__ = 23;
      break;
     case 7:
      
      var $23 = $len - 1;
      $len = $23;
      
      
      
      
      
      
      if (HEAP[HEAP[$s] + ($len - 1)] <= 32) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[HEAP[$s]] != 34) {
        __label__ = 11;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      if (HEAP[HEAP[$s] + ($len - 1)] != 34) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $43 = HEAP[$s] + ($len - 1);
      HEAP[$43] = 0;
      
      
      $p = HEAP[$s] + 1;
      
      var $47 = $len - 2;
      $len = $47;
      __label__ = 14;
      break;
     case 11:
      
      
      
      
      if (HEAP[HEAP[$s]] != 39) {
        __label__ = 22;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      
      if (HEAP[HEAP[$s] + ($len - 1)] != 39) {
        __label__ = 22;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $61 = HEAP[$s] + ($len - 1);
      HEAP[$61] = 0;
      
      
      $p = HEAP[$s] + 1;
      
      var $65 = $len - 2;
      $len = $65;
      __label__ = 14;
      break;
     case 14:
      
      
      var $68 = _PyString_DecodeEscape($p, $len, 0, 0, 0);
      $str = $68;
      var $69 = HEAP[$s];
      _free($69);
      
      
      if ($str != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 16:
      
      
      var $85 = HEAP[$self_addr + 32];
      var $86 = _Pdata_grow($85);
      
      if ($86 < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      
      
      
      var $91 = HEAP[$str] - 1;
      
      
      HEAP[$str] = $91;
      
      
      
      
      if (HEAP[$str] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $102 = HEAP[HEAP[$str + 4] + 24];
      
      FUNCTION_TABLE[$102]($str);
      __label__ = 19;
      break;
     case 19:
      $0 = -1;
      __label__ = 23;
      break;
     case 20:
      
      
      
      
      
      
      
      var $111 = HEAP[$self_addr + 32];
      
      var $113 = HEAP[$111 + 8];
      var $114 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $113;
      
      HEAP[$114] = $str;
      var $116 = $113 + 1;
      var $117 = $111 + 8;
      HEAP[$117] = $116;
      $res = 0;
      __label__ = 21;
      break;
     case 21:
      
      $0 = $res;
      __label__ = 23;
      break;
     case 22:
      var $119 = HEAP[$s];
      _free($119);
      var $120 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($120, __str85);
      $0 = -1;
      __label__ = 23;
      break;
     case 23:
      
      $retval = $0;
      var $retval23 = $retval;
      STACKTOP = __stackBase__;
      return $retval23;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_binstring($self) {
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
      var $py_string;
      var $l;
      var $s = __stackBase__;
      $self_addr = $self;
      $py_string = 0;
      
      
      var $3 = HEAP[$self_addr + 60];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $s, 4);
      
      if ($5 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 14;
      break;
     case 2:
      var $7 = HEAP[$s];
      var $8 = _calc_binint($7, 4);
      $l = $8;
      
      
      if ($l < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = HEAP[_UnpicklingError];
      _PyErr_SetString($11, __str86);
      $0 = -1;
      __label__ = 14;
      break;
     case 4:
      
      
      var $14 = HEAP[$self_addr + 60];
      
      
      var $17 = FUNCTION_TABLE[$14]($self_addr, $s, $l);
      
      if ($17 < 0) {
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
      var $19 = HEAP[$s];
      
      var $21 = _PyString_FromStringAndSize($19, $l);
      $py_string = $21;
      
      
      if ($py_string == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = -1;
      __label__ = 14;
      break;
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      
      var $37 = HEAP[$self_addr + 32];
      var $38 = _Pdata_grow($37);
      
      if ($38 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      var $43 = HEAP[$py_string] - 1;
      
      
      HEAP[$py_string] = $43;
      
      
      
      
      if (HEAP[$py_string] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $54 = HEAP[HEAP[$py_string + 4] + 24];
      
      FUNCTION_TABLE[$54]($py_string);
      __label__ = 12;
      break;
     case 12:
      $0 = -1;
      __label__ = 14;
      break;
     case 13:
      
      
      
      
      
      
      
      var $63 = HEAP[$self_addr + 32];
      
      var $65 = HEAP[$63 + 8];
      var $66 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $65;
      
      HEAP[$66] = $py_string;
      var $68 = $65 + 1;
      var $69 = $63 + 8;
      HEAP[$69] = $68;
      $0 = 0;
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
  function _load_short_binstring($self) {
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
      var $py_string;
      var $l;
      var $s = __stackBase__;
      $self_addr = $self;
      $py_string = 0;
      
      
      var $3 = HEAP[$self_addr + 60];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $s, 1);
      
      if ($5 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 12;
      break;
     case 2:
      
      
      
      $l = HEAP[HEAP[$s]];
      
      
      var $12 = HEAP[$self_addr + 60];
      
      
      
      var $16 = FUNCTION_TABLE[$12]($self_addr, $s, $l);
      
      if ($16 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 12;
      break;
     case 4:
      
      
      var $20 = HEAP[$s];
      var $21 = _PyString_FromStringAndSize($20, $l);
      $py_string = $21;
      
      
      if ($py_string == 0) {
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
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 7:
      
      
      var $37 = HEAP[$self_addr + 32];
      var $38 = _Pdata_grow($37);
      
      if ($38 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $43 = HEAP[$py_string] - 1;
      
      
      HEAP[$py_string] = $43;
      
      
      
      
      if (HEAP[$py_string] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $54 = HEAP[HEAP[$py_string + 4] + 24];
      
      FUNCTION_TABLE[$54]($py_string);
      __label__ = 10;
      break;
     case 10:
      $0 = -1;
      __label__ = 12;
      break;
     case 11:
      
      
      
      
      
      
      
      var $63 = HEAP[$self_addr + 32];
      
      var $65 = HEAP[$63 + 8];
      var $66 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $65;
      
      HEAP[$66] = $py_string;
      var $68 = $65 + 1;
      var $69 = $63 + 8;
      HEAP[$69] = $68;
      $0 = 0;
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
  function _load_unicode($self) {
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
      var $str;
      var $len;
      var $res;
      var $s = __stackBase__;
      $self_addr = $self;
      $str = 0;
      $res = -1;
      
      
      var $3 = HEAP[$self_addr + 64];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $s);
      $len = $5;
      
      
      if ($len < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 12;
      break;
     case 2:
      
      
      if ($len <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _bad_readline();
      $0 = $10;
      __label__ = 12;
      break;
     case 4:
      
      
      var $13 = HEAP[$s];
      var $14 = _PyUnicodeUCS2_DecodeRawUnicodeEscape($13, $len - 1, 0);
      $str = $14;
      
      
      if ($str == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      
      
      var $30 = HEAP[$self_addr + 32];
      var $31 = _Pdata_grow($30);
      
      if ($31 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      var $36 = HEAP[$str] - 1;
      
      
      HEAP[$str] = $36;
      
      
      
      
      if (HEAP[$str] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $47 = HEAP[HEAP[$str + 4] + 24];
      
      FUNCTION_TABLE[$47]($str);
      __label__ = 9;
      break;
     case 9:
      $0 = -1;
      __label__ = 12;
      break;
     case 10:
      
      
      
      
      
      
      
      var $56 = HEAP[$self_addr + 32];
      
      var $58 = HEAP[$56 + 8];
      var $59 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $58;
      
      HEAP[$59] = $str;
      var $61 = $58 + 1;
      var $62 = $56 + 8;
      HEAP[$62] = $61;
      $0 = 0;
      __label__ = 12;
      break;
     case 11:
      
      $0 = $res;
      __label__ = 12;
      break;
     case 12:
      
      $retval = $0;
      var $retval11 = $retval;
      STACKTOP = __stackBase__;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_binunicode($self) {
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
      var $unicode;
      var $l;
      var $s = __stackBase__;
      $self_addr = $self;
      
      
      var $3 = HEAP[$self_addr + 60];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $s, 4);
      
      if ($5 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 14;
      break;
     case 2:
      var $7 = HEAP[$s];
      var $8 = _calc_binint($7, 4);
      $l = $8;
      
      
      if ($l < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $11 = HEAP[_UnpicklingError];
      _PyErr_SetString($11, __str87);
      $0 = -1;
      __label__ = 14;
      break;
     case 4:
      
      
      var $14 = HEAP[$self_addr + 60];
      
      
      var $17 = FUNCTION_TABLE[$14]($self_addr, $s, $l);
      
      if ($17 < 0) {
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
      var $19 = HEAP[$s];
      
      var $21 = _PyUnicodeUCS2_DecodeUTF8($19, $l, 0);
      $unicode = $21;
      
      
      if ($unicode == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = -1;
      __label__ = 14;
      break;
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      
      var $37 = HEAP[$self_addr + 32];
      var $38 = _Pdata_grow($37);
      
      if ($38 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      var $43 = HEAP[$unicode] - 1;
      
      
      HEAP[$unicode] = $43;
      
      
      
      
      if (HEAP[$unicode] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $54 = HEAP[HEAP[$unicode + 4] + 24];
      
      FUNCTION_TABLE[$54]($unicode);
      __label__ = 12;
      break;
     case 12:
      $0 = -1;
      __label__ = 14;
      break;
     case 13:
      
      
      
      
      
      
      
      var $63 = HEAP[$self_addr + 32];
      
      var $65 = HEAP[$63 + 8];
      var $66 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $65;
      
      HEAP[$66] = $unicode;
      var $68 = $65 + 1;
      var $69 = $63 + 8;
      HEAP[$69] = $68;
      $0 = 0;
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
  function _load_tuple($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $tup;
      var $i;
      $self_addr = $self;
      
      var $2 = _marker($self_addr);
      $i = $2;
      
      
      if ($i < 0) {
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
      
      
      var $7 = HEAP[$self_addr + 32];
      
      var $9 = _Pdata_popTuple($7, $i);
      $tup = $9;
      
      
      if ($tup == 0) {
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
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      
      var $25 = HEAP[$self_addr + 32];
      var $26 = _Pdata_grow($25);
      
      if ($26 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $31 = HEAP[$tup] - 1;
      
      
      HEAP[$tup] = $31;
      
      
      
      
      if (HEAP[$tup] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $42 = HEAP[HEAP[$tup + 4] + 24];
      
      FUNCTION_TABLE[$42]($tup);
      __label__ = 8;
      break;
     case 8:
      $0 = -1;
      __label__ = 10;
      break;
     case 9:
      
      
      
      
      
      
      
      var $51 = HEAP[$self_addr + 32];
      
      var $53 = HEAP[$51 + 8];
      var $54 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $53;
      
      HEAP[$54] = $tup;
      var $56 = $53 + 1;
      var $57 = $51 + 8;
      HEAP[$57] = $56;
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
  function _load_counted_tuple($self, $len) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $len_addr;
      var $retval;
      var $0;
      var $tup;
      var $element;
      $self_addr = $self;
      $len_addr = $len;
      
      var $2 = _PyTuple_New($len_addr);
      $tup = $2;
      
      
      if ($tup == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 14;
      break;
     case 2:
      
      if ($37 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $6 = HEAP[_UnpicklingError];
      _PyErr_SetString($6, __str88);
      $element = 0;
      __label__ = 5;
      break;
     case 4:
      
      
      
      
      var $11 = HEAP[HEAP[$self_addr + 32] + 16];
      
      
      var $14 = HEAP[$self_addr + 32];
      
      
      var $17 = HEAP[$14 + 8] - 1;
      var $18 = $14 + 8;
      HEAP[$18] = $17;
      
      
      
      
      $element = HEAP[$11 + 4 * HEAP[$14 + 8]];
      
      if (HEAP[$11 + 4 * HEAP[$14 + 8]] == 0) {
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
      
      
      
      
      
      
      HEAP[$tup + 12 + $len_addr * 4] = $element;
      __label__ = 7;
      break;
     case 7:
      
      var $31 = $len_addr - 1;
      $len_addr = $31;
      
      
      
      
      
      var $37 = HEAP[HEAP[$self_addr + 32] + 8];
      if ($31 >= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      if ($37 == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      
      var $46 = HEAP[$self_addr + 32];
      var $47 = _Pdata_grow($46);
      
      if ($47 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      var $52 = HEAP[$tup] - 1;
      
      
      HEAP[$tup] = $52;
      
      
      
      
      if (HEAP[$tup] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $63 = HEAP[HEAP[$tup + 4] + 24];
      
      FUNCTION_TABLE[$63]($tup);
      __label__ = 12;
      break;
     case 12:
      $0 = -1;
      __label__ = 14;
      break;
     case 13:
      
      
      
      
      
      
      
      var $72 = HEAP[$self_addr + 32];
      
      var $74 = HEAP[$72 + 8];
      var $75 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $74;
      
      HEAP[$75] = $tup;
      var $77 = $74 + 1;
      var $78 = $72 + 8;
      HEAP[$78] = $77;
      $0 = 0;
      __label__ = 14;
      break;
     case 14:
      
      $retval = $0;
      var $retval16 = $retval;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_empty_list($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $list;
      $self_addr = $self;
      var $1 = _PyList_New(0);
      $list = $1;
      
      
      if ($list == 0) {
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
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      var $17 = HEAP[$self_addr + 32];
      var $18 = _Pdata_grow($17);
      
      if ($18 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $23 = HEAP[$list] - 1;
      
      
      HEAP[$list] = $23;
      
      
      
      
      if (HEAP[$list] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $34 = HEAP[HEAP[$list + 4] + 24];
      
      FUNCTION_TABLE[$34]($list);
      __label__ = 6;
      break;
     case 6:
      $0 = -1;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      
      
      
      var $43 = HEAP[$self_addr + 32];
      
      var $45 = HEAP[$43 + 8];
      var $46 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $45;
      
      HEAP[$46] = $list;
      var $48 = $45 + 1;
      var $49 = $43 + 8;
      HEAP[$49] = $48;
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
  function _load_empty_dict($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $dict;
      $self_addr = $self;
      var $1 = _PyDict_New();
      $dict = $1;
      
      
      if ($dict == 0) {
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
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      var $17 = HEAP[$self_addr + 32];
      var $18 = _Pdata_grow($17);
      
      if ($18 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $23 = HEAP[$dict] - 1;
      
      
      HEAP[$dict] = $23;
      
      
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $34 = HEAP[HEAP[$dict + 4] + 24];
      
      FUNCTION_TABLE[$34]($dict);
      __label__ = 6;
      break;
     case 6:
      $0 = -1;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      
      
      
      var $43 = HEAP[$self_addr + 32];
      
      var $45 = HEAP[$43 + 8];
      var $46 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $45;
      
      HEAP[$46] = $dict;
      var $48 = $45 + 1;
      var $49 = $43 + 8;
      HEAP[$49] = $48;
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
  function _load_list($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $list;
      var $i;
      $self_addr = $self;
      $list = 0;
      
      var $2 = _marker($self_addr);
      $i = $2;
      
      
      if ($i < 0) {
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
      
      
      var $7 = HEAP[$self_addr + 32];
      
      var $9 = _Pdata_popList($7, $i);
      $list = $9;
      
      
      if ($list == 0) {
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
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      
      var $25 = HEAP[$self_addr + 32];
      var $26 = _Pdata_grow($25);
      
      if ($26 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $31 = HEAP[$list] - 1;
      
      
      HEAP[$list] = $31;
      
      
      
      
      if (HEAP[$list] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $42 = HEAP[HEAP[$list + 4] + 24];
      
      FUNCTION_TABLE[$42]($list);
      __label__ = 8;
      break;
     case 8:
      $0 = -1;
      __label__ = 10;
      break;
     case 9:
      
      
      
      
      
      
      
      var $51 = HEAP[$self_addr + 32];
      
      var $53 = HEAP[$51 + 8];
      var $54 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $53;
      
      HEAP[$54] = $list;
      var $56 = $53 + 1;
      var $57 = $51 + 8;
      HEAP[$57] = $56;
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
  function _load_dict($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $dict;
      var $key;
      var $value;
      var $i;
      var $j;
      var $k;
      $self_addr = $self;
      
      var $2 = _marker($self_addr);
      $i = $2;
      
      
      if ($i < 0) {
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
      
      
      
      
      
      $j = HEAP[HEAP[$self_addr + 32] + 8];
      var $10 = _PyDict_New();
      $dict = $10;
      
      
      if ($dict == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 17;
      break;
     case 4:
      
      
      $k = $i + 1;
      __label__ = 10;
      break;
     case 5:
      
      
      
      
      
      
      $key = HEAP[HEAP[$57 + 16] + 4 * ($k - 1)];
      
      
      
      
      
      
      
      
      $value = HEAP[HEAP[HEAP[$self_addr + 32] + 16] + 4 * $k];
      
      
      
      var $32 = _PyDict_SetItem($dict, $key, $value);
      
      if ($32 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $37 = HEAP[$dict] - 1;
      
      
      HEAP[$dict] = $37;
      
      
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $48 = HEAP[HEAP[$dict + 4] + 24];
      
      FUNCTION_TABLE[$48]($dict);
      __label__ = 8;
      break;
     case 8:
      $0 = -1;
      __label__ = 17;
      break;
     case 9:
      
      var $51 = $k + 2;
      $k = $51;
      __label__ = 10;
      break;
     case 10:
      
      
      
      
      
      var $57 = HEAP[$self_addr + 32];
      if ($k < $j) {
        __label__ = 5;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $59 = _Pdata_clear($57, $i);
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 12:
      
      
      var $73 = HEAP[$self_addr + 32];
      var $74 = _Pdata_grow($73);
      
      if ($74 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      
      
      
      var $79 = HEAP[$dict] - 1;
      
      
      HEAP[$dict] = $79;
      
      
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $90 = HEAP[HEAP[$dict + 4] + 24];
      
      FUNCTION_TABLE[$90]($dict);
      __label__ = 15;
      break;
     case 15:
      $0 = -1;
      __label__ = 17;
      break;
     case 16:
      
      
      
      
      
      
      
      var $99 = HEAP[$self_addr + 32];
      
      var $101 = HEAP[$99 + 8];
      var $102 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $101;
      
      HEAP[$102] = $dict;
      var $104 = $101 + 1;
      var $105 = $99 + 8;
      HEAP[$105] = $104;
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
  function _Instance_New($cls, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $r;
      var $l;
      var $__getinitargs__;
      var $inst;
      var $tp = __stackBase__;
      var $v = __stackBase__ + 4;
      var $tb = __stackBase__ + 8;
      var $tmp_value;
      $cls_addr = $cls;
      $args_addr = $args;
      $r = 0;
      
      
      
      
      if (HEAP[$cls_addr + 4] == _PyClass_Type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      
      var $6 = _PyObject_Size($args_addr);
      $l = $6;
      
      
      if ($l < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if ($l == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 3:
      var $11 = HEAP[___getinitargs___str];
      
      var $13 = _PyObject_GetAttr($cls_addr, $11);
      $__getinitargs__ = $13;
      
      
      if ($__getinitargs__ == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      _PyErr_Clear();
      
      var $17 = _PyInstance_NewRaw($cls_addr, 0);
      $inst = $17;
      
      
      if ($inst == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      $0 = $inst;
      __label__ = 20;
      break;
     case 6:
      
      
      
      var $24 = HEAP[$__getinitargs__] - 1;
      
      
      HEAP[$__getinitargs__] = $24;
      
      
      
      
      if (HEAP[$__getinitargs__] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $35 = HEAP[HEAP[$__getinitargs__ + 4] + 24];
      
      FUNCTION_TABLE[$35]($__getinitargs__);
      __label__ = 8;
      break;
     case 8:
      
      
      var $39 = _PyInstance_New($cls_addr, $args_addr, 0);
      $r = $39;
      
      if ($39 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      $0 = $r;
      __label__ = 20;
      break;
     case 10:
      
      
      var $44 = _PyObject_CallObject($cls_addr, $args_addr);
      $r = $44;
      
      
      if ($r != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      $0 = $r;
      __label__ = 20;
      break;
     case 12:
      _PyErr_Fetch($tp, $v, $tb);
      
      $tmp_value = HEAP[$v];
      
      if (HEAP[$v] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $tmp_value = __Py_NoneStruct;
      __label__ = 14;
      break;
     case 14:
      
      
      
      var $53 = _PyTuple_Pack(3, allocate([ $tmp_value, 0, 0, 0, $cls_addr, 0, 0, 0, $args_addr, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $r = $53;
      
      if ($53 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 15:
      
      
      if (HEAP[$v] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      var $57 = HEAP[$v];
      
      
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
      
      
      
      
      var $69 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $70 = HEAP[$v];
      FUNCTION_TABLE[$69]($70);
      __label__ = 18;
      break;
     case 18:
      
      HEAP[$v] = $r;
      __label__ = 19;
      break;
     case 19:
      var $72 = HEAP[$tb];
      var $73 = HEAP[$v];
      var $74 = HEAP[$tp];
      _PyErr_Restore($74, $73, $72);
      $0 = 0;
      __label__ = 20;
      break;
     case 20:
      
      $retval = $0;
      var $retval19 = $retval;
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_obj($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $class;
      var $tup;
      var $obj;
      var $i;
      $self_addr = $self;
      $obj = 0;
      
      var $2 = _marker($self_addr);
      $i = $2;
      
      
      if ($i < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 19;
      break;
     case 2:
      
      
      
      
      var $9 = HEAP[$self_addr + 32];
      var $10 = _Pdata_popTuple($9, $i + 1);
      $tup = $10;
      
      
      if ($tup == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 19;
      break;
     case 4:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $19 = HEAP[_UnpicklingError];
      _PyErr_SetString($19, __str88);
      $class = 0;
      __label__ = 9;
      break;
     case 6:
      
      
      
      
      var $24 = HEAP[HEAP[$self_addr + 32] + 16];
      
      
      var $27 = HEAP[$self_addr + 32];
      
      
      var $30 = HEAP[$27 + 8] - 1;
      var $31 = $27 + 8;
      HEAP[$31] = $30;
      
      
      
      
      $class = HEAP[$24 + 4 * HEAP[$27 + 8]];
      
      if (HEAP[$24 + 4 * HEAP[$27 + 8]] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $39 = _Instance_New($class, $tup);
      $obj = $39;
      
      
      
      var $43 = HEAP[$class] - 1;
      
      
      HEAP[$class] = $43;
      
      
      
      
      if (HEAP[$class] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $54 = HEAP[HEAP[$class + 4] + 24];
      
      FUNCTION_TABLE[$54]($class);
      __label__ = 9;
      break;
     case 9:
      
      
      
      var $59 = HEAP[$tup] - 1;
      
      
      HEAP[$tup] = $59;
      
      
      
      
      if (HEAP[$tup] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $70 = HEAP[HEAP[$tup + 4] + 24];
      
      FUNCTION_TABLE[$70]($tup);
      __label__ = 11;
      break;
     case 11:
      
      
      if ($obj == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = -1;
      __label__ = 19;
      break;
     case 13:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      
      
      var $87 = HEAP[$self_addr + 32];
      var $88 = _Pdata_grow($87);
      
      if ($88 < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      
      
      
      var $93 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $93;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $104 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$104]($obj);
      __label__ = 17;
      break;
     case 17:
      $0 = -1;
      __label__ = 19;
      break;
     case 18:
      
      
      
      
      
      
      
      var $113 = HEAP[$self_addr + 32];
      
      var $115 = HEAP[$113 + 8];
      var $116 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $115;
      
      HEAP[$116] = $obj;
      var $118 = $115 + 1;
      var $119 = $113 + 8;
      HEAP[$119] = $118;
      $0 = 0;
      __label__ = 19;
      break;
     case 19:
      
      $retval = $0;
      var $retval20 = $retval;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_inst($self) {
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
      var $tup;
      var $class;
      var $obj;
      var $module_name;
      var $class_name;
      var $i;
      var $len;
      var $s = __stackBase__;
      $self_addr = $self;
      $class = 0;
      $obj = 0;
      
      var $2 = _marker($self_addr);
      $i = $2;
      
      
      if ($i < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 31;
      break;
     case 2:
      
      
      var $7 = HEAP[$self_addr + 64];
      
      var $9 = FUNCTION_TABLE[$7]($self_addr, $s);
      $len = $9;
      
      
      if ($len < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 31;
      break;
     case 4:
      
      
      if ($len <= 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $14 = _bad_readline();
      $0 = $14;
      __label__ = 31;
      break;
     case 6:
      
      
      var $17 = HEAP[$s];
      var $18 = _PyString_FromStringAndSize($17, $len - 1);
      $module_name = $18;
      
      
      if ($module_name == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = -1;
      __label__ = 31;
      break;
     case 8:
      
      
      var $23 = HEAP[$self_addr + 64];
      
      var $25 = FUNCTION_TABLE[$23]($self_addr, $s);
      $len = $25;
      
      
      if ($len >= 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 9:
      
      
      if ($len <= 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $30 = _bad_readline();
      $0 = $30;
      __label__ = 31;
      break;
     case 11:
      
      
      var $33 = HEAP[$s];
      var $34 = _PyString_FromStringAndSize($33, $len - 1);
      $class_name = $34;
      
      
      if ($class_name != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      var $39 = HEAP[$self_addr + 76];
      
      
      var $42 = _find_class($module_name, $class_name, $39);
      $class = $42;
      
      
      
      var $46 = HEAP[$class_name] - 1;
      
      
      HEAP[$class_name] = $46;
      
      
      
      
      if (HEAP[$class_name] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $57 = HEAP[HEAP[$class_name + 4] + 24];
      
      FUNCTION_TABLE[$57]($class_name);
      __label__ = 14;
      break;
     case 14:
      
      
      
      var $62 = HEAP[$module_name] - 1;
      
      
      HEAP[$module_name] = $62;
      
      
      
      
      if (HEAP[$module_name] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $73 = HEAP[HEAP[$module_name + 4] + 24];
      
      FUNCTION_TABLE[$73]($module_name);
      __label__ = 16;
      break;
     case 16:
      
      
      if ($class == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      $0 = -1;
      __label__ = 31;
      break;
     case 18:
      
      
      var $79 = HEAP[$self_addr + 32];
      
      var $81 = _Pdata_popTuple($79, $i);
      $tup = $81;
      
      
      if ($tup != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $86 = _Instance_New($class, $tup);
      $obj = $86;
      
      
      
      var $90 = HEAP[$tup] - 1;
      
      
      HEAP[$tup] = $90;
      
      
      
      
      if (HEAP[$tup] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $101 = HEAP[HEAP[$tup + 4] + 24];
      
      FUNCTION_TABLE[$101]($tup);
      __label__ = 21;
      break;
     case 21:
      
      
      
      var $106 = HEAP[$class] - 1;
      
      
      HEAP[$class] = $106;
      
      
      
      
      if (HEAP[$class] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $117 = HEAP[HEAP[$class + 4] + 24];
      
      FUNCTION_TABLE[$117]($class);
      __label__ = 23;
      break;
     case 23:
      
      
      if ($obj == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      $0 = -1;
      __label__ = 31;
      break;
     case 25:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 26;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 26:
      
      
      var $134 = HEAP[$self_addr + 32];
      var $135 = _Pdata_grow($134);
      
      if ($135 < 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      
      
      
      var $140 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $140;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $151 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$151]($obj);
      __label__ = 29;
      break;
     case 29:
      $0 = -1;
      __label__ = 31;
      break;
     case 30:
      
      
      
      
      
      
      
      var $160 = HEAP[$self_addr + 32];
      
      var $162 = HEAP[$160 + 8];
      var $163 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $162;
      
      HEAP[$163] = $obj;
      var $165 = $162 + 1;
      var $166 = $160 + 8;
      HEAP[$166] = $165;
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
  function _load_newobj($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $args;
      var $clsraw;
      var $cls;
      var $obj;
      $self_addr = $self;
      $args = 0;
      $clsraw = 0;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $7 = HEAP[_UnpicklingError];
      _PyErr_SetString($7, __str88);
      $args = 0;
      __label__ = 27;
      break;
     case 2:
      
      
      
      
      var $12 = HEAP[HEAP[$self_addr + 32] + 16];
      
      
      var $15 = HEAP[$self_addr + 32];
      
      
      var $18 = HEAP[$15 + 8] - 1;
      var $19 = $15 + 8;
      HEAP[$19] = $18;
      
      
      
      
      $args = HEAP[$12 + 4 * HEAP[$15 + 8]];
      
      if (HEAP[$12 + 4 * HEAP[$15 + 8]] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$args + 4] + 84] & 67108864) == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $32 = HEAP[_UnpicklingError];
      _PyErr_SetString($32, __str89);
      __label__ = 24;
      break;
     case 5:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $43 = HEAP[HEAP[$self_addr + 32] + 16];
      
      
      var $46 = HEAP[$self_addr + 32];
      
      
      var $49 = HEAP[$46 + 8] - 1;
      var $50 = $46 + 8;
      HEAP[$50] = $49;
      
      
      
      
      $clsraw = HEAP[$43 + 4 * HEAP[$46 + 8]];
      __label__ = 8;
      break;
     case 7:
      var $55 = HEAP[_UnpicklingError];
      _PyErr_SetString($55, __str88);
      $clsraw = 0;
      __label__ = 8;
      break;
     case 8:
      
      
      $cls = $clsraw;
      
      if ($clsraw == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$cls + 4] + 84] >= 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $66 = HEAP[_UnpicklingError];
      _PyErr_SetString($66, __str90);
      __label__ = 24;
      break;
     case 11:
      
      
      
      
      if (HEAP[$cls + 156] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $71 = HEAP[_UnpicklingError];
      _PyErr_SetString($71, __str91);
      __label__ = 24;
      break;
     case 13:
      
      
      var $74 = HEAP[$cls + 156];
      
      
      var $77 = FUNCTION_TABLE[$74]($cls, $args, 0);
      $obj = $77;
      
      
      if ($obj == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      var $83 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $83;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $94 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$94]($args);
      __label__ = 16;
      break;
     case 16:
      
      
      
      var $99 = HEAP[$clsraw] - 1;
      
      
      HEAP[$clsraw] = $99;
      
      
      
      
      if (HEAP[$clsraw] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $110 = HEAP[HEAP[$clsraw + 4] + 24];
      
      FUNCTION_TABLE[$110]($clsraw);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 19:
      
      
      var $125 = HEAP[$self_addr + 32];
      var $126 = _Pdata_grow($125);
      
      if ($126 < 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      
      
      
      var $131 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $131;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $142 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$142]($obj);
      __label__ = 22;
      break;
     case 22:
      $0 = -1;
      __label__ = 31;
      break;
     case 23:
      
      
      
      
      
      
      
      var $151 = HEAP[$self_addr + 32];
      
      var $153 = HEAP[$151 + 8];
      var $154 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $153;
      
      HEAP[$154] = $obj;
      var $156 = $153 + 1;
      var $157 = $151 + 8;
      HEAP[$157] = $156;
      $0 = 0;
      __label__ = 31;
      break;
     case 24:
      
      
      if ($args != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      
      var $162 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $162;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $173 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$173]($args);
      __label__ = 27;
      break;
     case 27:
      
      
      if ($clsraw != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      
      
      
      var $180 = HEAP[$clsraw] - 1;
      
      
      HEAP[$clsraw] = $180;
      
      
      
      
      if (HEAP[$clsraw] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $191 = HEAP[HEAP[$clsraw + 4] + 24];
      
      FUNCTION_TABLE[$191]($clsraw);
      __label__ = 30;
      break;
     case 30:
      $0 = -1;
      __label__ = 31;
      break;
     case 31:
      
      $retval = $0;
      var $retval31 = $retval;
      return $retval31;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_global($self) {
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
      var $class;
      var $module_name;
      var $class_name;
      var $len;
      var $s = __stackBase__;
      $self_addr = $self;
      $class = 0;
      $module_name = 0;
      $class_name = 0;
      
      
      var $3 = HEAP[$self_addr + 64];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $s);
      $len = $5;
      
      
      if ($len < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 24;
      break;
     case 2:
      
      
      if ($len <= 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _bad_readline();
      $0 = $10;
      __label__ = 24;
      break;
     case 4:
      
      
      var $13 = HEAP[$s];
      var $14 = _PyString_FromStringAndSize($13, $len - 1);
      $module_name = $14;
      
      
      if ($module_name == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 24;
      break;
     case 6:
      
      
      var $19 = HEAP[$self_addr + 64];
      
      var $21 = FUNCTION_TABLE[$19]($self_addr, $s);
      $len = $21;
      
      
      if ($len >= 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 7:
      
      
      if ($len <= 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $29 = HEAP[$module_name] - 1;
      
      
      HEAP[$module_name] = $29;
      
      
      
      
      if (HEAP[$module_name] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $40 = HEAP[HEAP[$module_name + 4] + 24];
      
      FUNCTION_TABLE[$40]($module_name);
      __label__ = 10;
      break;
     case 10:
      var $42 = _bad_readline();
      $0 = $42;
      __label__ = 24;
      break;
     case 11:
      
      
      var $45 = HEAP[$s];
      var $46 = _PyString_FromStringAndSize($45, $len - 1);
      $class_name = $46;
      
      
      if ($class_name != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      var $51 = HEAP[$self_addr + 76];
      
      
      var $54 = _find_class($module_name, $class_name, $51);
      $class = $54;
      
      
      
      var $58 = HEAP[$class_name] - 1;
      
      
      HEAP[$class_name] = $58;
      
      
      
      
      if (HEAP[$class_name] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $69 = HEAP[HEAP[$class_name + 4] + 24];
      
      FUNCTION_TABLE[$69]($class_name);
      __label__ = 14;
      break;
     case 14:
      
      
      
      var $74 = HEAP[$module_name] - 1;
      
      
      HEAP[$module_name] = $74;
      
      
      
      
      if (HEAP[$module_name] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $85 = HEAP[HEAP[$module_name + 4] + 24];
      
      FUNCTION_TABLE[$85]($module_name);
      __label__ = 16;
      break;
     case 16:
      
      
      if ($class == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      $0 = -1;
      __label__ = 24;
      break;
     case 18:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 19:
      
      
      var $102 = HEAP[$self_addr + 32];
      var $103 = _Pdata_grow($102);
      
      if ($103 < 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      
      
      
      var $108 = HEAP[$class] - 1;
      
      
      HEAP[$class] = $108;
      
      
      
      
      if (HEAP[$class] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $119 = HEAP[HEAP[$class + 4] + 24];
      
      FUNCTION_TABLE[$119]($class);
      __label__ = 22;
      break;
     case 22:
      $0 = -1;
      __label__ = 24;
      break;
     case 23:
      
      
      
      
      
      
      
      var $128 = HEAP[$self_addr + 32];
      
      var $130 = HEAP[$128 + 8];
      var $131 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $130;
      
      HEAP[$131] = $class;
      var $133 = $130 + 1;
      var $134 = $128 + 8;
      HEAP[$134] = $133;
      $0 = 0;
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
  function _load_persid($self) {
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
      var $pid;
      var $len;
      var $s = __stackBase__;
      $self_addr = $self;
      $pid = 0;
      
      
      
      
      if (HEAP[$self_addr + 40] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$self_addr + 64];
      
      var $9 = FUNCTION_TABLE[$7]($self_addr, $s);
      $len = $9;
      
      
      if ($len < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 34;
      break;
     case 3:
      
      
      if ($len <= 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $14 = _bad_readline();
      $0 = $14;
      __label__ = 34;
      break;
     case 5:
      
      
      var $17 = HEAP[$s];
      var $18 = _PyString_FromStringAndSize($17, $len - 1);
      $pid = $18;
      
      
      if ($pid == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -1;
      __label__ = 34;
      break;
     case 7:
      
      
      
      
      
      
      
      
      
      var $30 = $self_addr;
      if ((HEAP[HEAP[HEAP[$self_addr + 40] + 4] + 84] & 33554432) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      var $32 = HEAP[$30 + 40];
      
      var $34 = _PyList_Append($32, $pid);
      
      if ($34 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 9:
      
      
      
      var $39 = HEAP[$pid] - 1;
      
      
      HEAP[$pid] = $39;
      
      
      
      
      if (HEAP[$pid] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $50 = HEAP[HEAP[$pid + 4] + 24];
      
      FUNCTION_TABLE[$50]($pid);
      __label__ = 11;
      break;
     case 11:
      $0 = -1;
      __label__ = 34;
      break;
     case 12:
      
      
      
      if (HEAP[$30 + 28] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $55 = _PyTuple_New(1);
      
      
      HEAP[$self_addr + 28] = $55;
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 28] + 12] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      
      
      
      var $76 = HEAP[HEAP[$self_addr + 28] + 12];
      
      
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
      
      
      
      
      
      
      
      
      
      
      var $94 = HEAP[HEAP[HEAP[HEAP[$self_addr + 28] + 12] + 4] + 24];
      
      
      
      
      
      
      var $101 = HEAP[HEAP[$self_addr + 28] + 12];
      FUNCTION_TABLE[$94]($101);
      __label__ = 17;
      break;
     case 17:
      
      
      
      
      
      var $107 = HEAP[$self_addr + 28] + 12;
      
      HEAP[$107] = $pid;
      __label__ = 20;
      break;
     case 18:
      
      
      
      var $112 = HEAP[$pid] - 1;
      
      
      HEAP[$pid] = $112;
      
      
      
      
      if (HEAP[$pid] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $123 = HEAP[HEAP[$pid + 4] + 24];
      
      FUNCTION_TABLE[$123]($pid);
      __label__ = 20;
      break;
     case 20:
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 21:
      
      
      var $131 = HEAP[$self_addr + 28];
      
      
      var $134 = HEAP[$self_addr + 40];
      var $135 = _PyObject_Call($134, $131, 0);
      $pid = $135;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 28]] > 1) {
        __label__ = 22;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 22:
      
      
      var $144 = HEAP[$self_addr + 28];
      
      
      var $147 = HEAP[$144] - 1;
      var $148 = $144;
      HEAP[$148] = $147;
      
      
      
      if (HEAP[$144] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      
      
      var $158 = HEAP[HEAP[HEAP[$self_addr + 28] + 4] + 24];
      
      
      var $161 = HEAP[$self_addr + 28];
      FUNCTION_TABLE[$158]($161);
      __label__ = 24;
      break;
     case 24:
      
      
      HEAP[$self_addr + 28] = 0;
      __label__ = 25;
      break;
     case 25:
      
      
      if ($pid == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      $0 = -1;
      __label__ = 34;
      break;
     case 27:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 28;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 28:
      
      
      var $179 = HEAP[$self_addr + 32];
      var $180 = _Pdata_grow($179);
      
      if ($180 < 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 29:
      
      
      
      var $185 = HEAP[$pid] - 1;
      
      
      HEAP[$pid] = $185;
      
      
      
      
      if (HEAP[$pid] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $196 = HEAP[HEAP[$pid + 4] + 24];
      
      FUNCTION_TABLE[$196]($pid);
      __label__ = 31;
      break;
     case 31:
      $0 = -1;
      __label__ = 34;
      break;
     case 32:
      
      
      
      
      
      
      
      var $205 = HEAP[$self_addr + 32];
      
      var $207 = HEAP[$205 + 8];
      var $208 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $207;
      
      HEAP[$208] = $pid;
      var $210 = $207 + 1;
      var $211 = $205 + 8;
      HEAP[$211] = $210;
      $0 = 0;
      __label__ = 34;
      break;
     case 33:
      var $212 = HEAP[_UnpicklingError];
      _PyErr_SetString($212, __str92);
      $0 = -1;
      __label__ = 34;
      break;
     case 34:
      
      $retval = $0;
      var $retval35 = $retval;
      STACKTOP = __stackBase__;
      return $retval35;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_binpersid($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $pid;
      $self_addr = $self;
      $pid = 0;
      
      
      
      
      if (HEAP[$self_addr + 40] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 1:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $11 = HEAP[_UnpicklingError];
      _PyErr_SetString($11, __str88);
      $pid = 0;
      __label__ = 4;
      break;
     case 3:
      
      
      
      
      var $16 = HEAP[HEAP[$self_addr + 32] + 16];
      
      
      var $19 = HEAP[$self_addr + 32];
      
      
      var $22 = HEAP[$19 + 8] - 1;
      var $23 = $19 + 8;
      HEAP[$23] = $22;
      
      
      
      
      $pid = HEAP[$16 + 4 * HEAP[$19 + 8]];
      
      if (HEAP[$16 + 4 * HEAP[$19 + 8]] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 32;
      break;
     case 5:
      
      
      
      
      
      
      
      
      
      var $38 = $self_addr;
      if ((HEAP[HEAP[HEAP[$self_addr + 40] + 4] + 84] & 33554432) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      
      var $40 = HEAP[$38 + 40];
      
      var $42 = _PyList_Append($40, $pid);
      
      if ($42 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 7:
      
      
      
      var $47 = HEAP[$pid] - 1;
      
      
      HEAP[$pid] = $47;
      
      
      
      
      if (HEAP[$pid] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $58 = HEAP[HEAP[$pid + 4] + 24];
      
      FUNCTION_TABLE[$58]($pid);
      __label__ = 9;
      break;
     case 9:
      $0 = -1;
      __label__ = 32;
      break;
     case 10:
      
      
      
      if (HEAP[$38 + 28] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $63 = _PyTuple_New(1);
      
      
      HEAP[$self_addr + 28] = $63;
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 28] + 12] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      
      
      
      
      var $84 = HEAP[HEAP[$self_addr + 28] + 12];
      
      
      var $87 = HEAP[$84] - 1;
      var $88 = $84;
      HEAP[$88] = $87;
      
      
      
      if (HEAP[$84] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      
      
      
      
      
      var $102 = HEAP[HEAP[HEAP[HEAP[$self_addr + 28] + 12] + 4] + 24];
      
      
      
      
      
      
      var $109 = HEAP[HEAP[$self_addr + 28] + 12];
      FUNCTION_TABLE[$102]($109);
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      
      var $115 = HEAP[$self_addr + 28] + 12;
      
      HEAP[$115] = $pid;
      __label__ = 18;
      break;
     case 16:
      
      
      
      var $120 = HEAP[$pid] - 1;
      
      
      HEAP[$pid] = $120;
      
      
      
      
      if (HEAP[$pid] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $131 = HEAP[HEAP[$pid + 4] + 24];
      
      FUNCTION_TABLE[$131]($pid);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 19:
      
      
      var $139 = HEAP[$self_addr + 28];
      
      
      var $142 = HEAP[$self_addr + 40];
      var $143 = _PyObject_Call($142, $139, 0);
      $pid = $143;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 28]] > 1) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      
      
      var $152 = HEAP[$self_addr + 28];
      
      
      var $155 = HEAP[$152] - 1;
      var $156 = $152;
      HEAP[$156] = $155;
      
      
      
      if (HEAP[$152] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      
      
      var $166 = HEAP[HEAP[HEAP[$self_addr + 28] + 4] + 24];
      
      
      var $169 = HEAP[$self_addr + 28];
      FUNCTION_TABLE[$166]($169);
      __label__ = 22;
      break;
     case 22:
      
      
      HEAP[$self_addr + 28] = 0;
      __label__ = 23;
      break;
     case 23:
      
      
      if ($pid == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      $0 = -1;
      __label__ = 32;
      break;
     case 25:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 26;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 26:
      
      
      var $187 = HEAP[$self_addr + 32];
      var $188 = _Pdata_grow($187);
      
      if ($188 < 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      
      
      
      var $193 = HEAP[$pid] - 1;
      
      
      HEAP[$pid] = $193;
      
      
      
      
      if (HEAP[$pid] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $204 = HEAP[HEAP[$pid + 4] + 24];
      
      FUNCTION_TABLE[$204]($pid);
      __label__ = 29;
      break;
     case 29:
      $0 = -1;
      __label__ = 32;
      break;
     case 30:
      
      
      
      
      
      
      
      var $213 = HEAP[$self_addr + 32];
      
      var $215 = HEAP[$213 + 8];
      var $216 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $215;
      
      HEAP[$216] = $pid;
      var $218 = $215 + 1;
      var $219 = $213 + 8;
      HEAP[$219] = $218;
      $0 = 0;
      __label__ = 32;
      break;
     case 31:
      var $220 = HEAP[_UnpicklingError];
      _PyErr_SetString($220, __str92);
      $0 = -1;
      __label__ = 32;
      break;
     case 32:
      
      $retval = $0;
      var $retval34 = $retval;
      return $retval34;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_pop($self) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $len;
      $self_addr = $self;
      
      
      
      
      var $5 = HEAP[HEAP[$self_addr + 32] + 8];
      $len = $5;
      
      
      
      
      if (HEAP[$self_addr + 52] <= 0) {
        __lastLabel__ = -1;
        __label__ = 3;
        break;
      } else {
        __lastLabel__ = -1;
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      var $19 = $len;
      
      if (HEAP[HEAP[$self_addr + 48] + 4 * (HEAP[$self_addr + 52] - 1)] != $19) {
        __lastLabel__ = 1;
        __label__ = 3;
        break;
      } else {
        __lastLabel__ = 1;
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $24 = HEAP[$self_addr + 52] - 1;
      
      
      HEAP[$self_addr + 52] = $24;
      __label__ = 8;
      break;
     case 3:
      var $27 = __lastLabel__ == 1 ? $19 : $5;
      
      if ($27 > 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      var $30 = $len - 1;
      $len = $30;
      
      
      
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[$self_addr + 32] + 16] + 4 * $len];
      
      
      var $41 = HEAP[$38] - 1;
      var $42 = $38;
      HEAP[$42] = $41;
      
      
      
      if (HEAP[$38] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[HEAP[HEAP[$self_addr + 32] + 16] + 4 * $len] + 4] + 24];
      
      
      
      
      
      
      
      var $65 = HEAP[HEAP[HEAP[$self_addr + 32] + 16] + 4 * $len];
      FUNCTION_TABLE[$57]($65);
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $69 = HEAP[$self_addr + 32] + 8;
      
      HEAP[$69] = $len;
      __label__ = 8;
      break;
     case 7:
      var $71 = _stackUnderflow();
      $0 = $71;
      __label__ = 9;
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
  function _load_pop_mark($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $i;
      $self_addr = $self;
      
      var $2 = _marker($self_addr);
      $i = $2;
      
      
      if ($i < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
      
      
      var $7 = HEAP[$self_addr + 32];
      
      var $9 = _Pdata_clear($7, $i);
      $0 = 0;
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
  function _load_dup($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $last;
      var $len;
      $self_addr = $self;
      
      
      
      
      
      $len = HEAP[HEAP[$self_addr + 32] + 8];
      
      
      if ($len <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $8 = _stackUnderflow();
      $0 = $8;
      __label__ = 8;
      break;
     case 2:
      
      
      
      
      
      
      
      
      
      $last = HEAP[HEAP[HEAP[$self_addr + 32] + 16] + 4 * ($len - 1)];
      
      
      
      var $21 = HEAP[$last] + 1;
      
      
      HEAP[$last] = $21;
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      var $37 = HEAP[$self_addr + 32];
      var $38 = _Pdata_grow($37);
      
      if ($38 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $43 = HEAP[$last] - 1;
      
      
      HEAP[$last] = $43;
      
      
      
      
      if (HEAP[$last] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $54 = HEAP[HEAP[$last + 4] + 24];
      
      FUNCTION_TABLE[$54]($last);
      __label__ = 6;
      break;
     case 6:
      $0 = -1;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      
      
      
      var $63 = HEAP[$self_addr + 32];
      
      var $65 = HEAP[$63 + 8];
      var $66 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $65;
      
      HEAP[$66] = $last;
      var $68 = $65 + 1;
      var $69 = $63 + 8;
      HEAP[$69] = $68;
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
  function _load_get($self) {
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
      var $py_str;
      var $value;
      var $len;
      var $s = __stackBase__;
      var $rc;
      $self_addr = $self;
      $py_str = 0;
      $value = 0;
      
      
      var $3 = HEAP[$self_addr + 64];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $s);
      $len = $5;
      
      
      if ($len < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 15;
      break;
     case 2:
      
      
      if ($len <= 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _bad_readline();
      $0 = $10;
      __label__ = 15;
      break;
     case 4:
      
      
      var $13 = HEAP[$s];
      var $14 = _PyString_FromStringAndSize($13, $len - 1);
      $py_str = $14;
      
      
      if ($py_str == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 15;
      break;
     case 6:
      
      
      var $19 = HEAP[$self_addr + 24];
      
      var $21 = _PyDict_GetItem($19, $py_str);
      $value = $21;
      
      
      if ($value == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $24 = HEAP[_BadPickleGet];
      
      _PyErr_SetObject($24, $py_str);
      $rc = -1;
      __label__ = 12;
      break;
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      var $39 = HEAP[$self_addr + 32];
      var $40 = _Pdata_grow($39);
      
      if ($40 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = -1;
      __label__ = 15;
      break;
     case 11:
      
      
      
      var $45 = HEAP[$value] + 1;
      
      
      HEAP[$value] = $45;
      
      
      
      
      
      
      
      var $55 = HEAP[$self_addr + 32];
      
      var $57 = HEAP[$55 + 8];
      var $58 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $57;
      
      HEAP[$58] = $value;
      var $60 = $57 + 1;
      var $61 = $55 + 8;
      HEAP[$61] = $60;
      $rc = 0;
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $65 = HEAP[$py_str] - 1;
      
      
      HEAP[$py_str] = $65;
      
      
      
      
      if (HEAP[$py_str] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $76 = HEAP[HEAP[$py_str + 4] + 24];
      
      FUNCTION_TABLE[$76]($py_str);
      __label__ = 14;
      break;
     case 14:
      
      $0 = $rc;
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
  function _load_binget($self) {
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
      var $py_key;
      var $value;
      var $key;
      var $s = __stackBase__;
      var $rc;
      $self_addr = $self;
      $py_key = 0;
      $value = 0;
      
      
      var $3 = HEAP[$self_addr + 60];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $s, 1);
      
      if ($5 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 13;
      break;
     case 2:
      
      
      
      $key = HEAP[HEAP[$s]];
      
      
      var $12 = _PyInt_FromLong($key);
      $py_key = $12;
      
      
      if ($py_key == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 13;
      break;
     case 4:
      
      
      var $17 = HEAP[$self_addr + 24];
      
      var $19 = _PyDict_GetItem($17, $py_key);
      $value = $19;
      
      
      if ($value == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $22 = HEAP[_BadPickleGet];
      
      _PyErr_SetObject($22, $py_key);
      $rc = -1;
      __label__ = 10;
      break;
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $37 = HEAP[$self_addr + 32];
      var $38 = _Pdata_grow($37);
      
      if ($38 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = -1;
      __label__ = 13;
      break;
     case 9:
      
      
      
      var $43 = HEAP[$value] + 1;
      
      
      HEAP[$value] = $43;
      
      
      
      
      
      
      
      var $53 = HEAP[$self_addr + 32];
      
      var $55 = HEAP[$53 + 8];
      var $56 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $55;
      
      HEAP[$56] = $value;
      var $58 = $55 + 1;
      var $59 = $53 + 8;
      HEAP[$59] = $58;
      $rc = 0;
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $63 = HEAP[$py_key] - 1;
      
      
      HEAP[$py_key] = $63;
      
      
      
      
      if (HEAP[$py_key] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $74 = HEAP[HEAP[$py_key + 4] + 24];
      
      FUNCTION_TABLE[$74]($py_key);
      __label__ = 12;
      break;
     case 12:
      
      $0 = $rc;
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
  function _load_long_binget($self) {
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
      var $py_key;
      var $value;
      var $c;
      var $s = __stackBase__;
      var $key;
      var $rc;
      $self_addr = $self;
      $py_key = 0;
      $value = 0;
      
      
      var $3 = HEAP[$self_addr + 60];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $s, 4);
      
      if ($5 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 13;
      break;
     case 2:
      
      
      
      $c = HEAP[HEAP[$s]];
      
      
      $key = $c;
      
      
      
      $c = HEAP[HEAP[$s] + 1];
      
      
      
      
      var $19 = $c << 8 | $key;
      $key = $19;
      
      
      
      $c = HEAP[HEAP[$s] + 2];
      
      
      
      
      var $27 = $c << 16 | $key;
      $key = $27;
      
      
      
      $c = HEAP[HEAP[$s] + 3];
      
      
      
      
      var $35 = $c << 24 | $key;
      $key = $35;
      
      var $37 = _PyInt_FromLong($key);
      $py_key = $37;
      
      
      if ($py_key == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 13;
      break;
     case 4:
      
      
      var $42 = HEAP[$self_addr + 24];
      
      var $44 = _PyDict_GetItem($42, $py_key);
      $value = $44;
      
      
      if ($value == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $47 = HEAP[_BadPickleGet];
      
      _PyErr_SetObject($47, $py_key);
      $rc = -1;
      __label__ = 10;
      break;
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $62 = HEAP[$self_addr + 32];
      var $63 = _Pdata_grow($62);
      
      if ($63 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = -1;
      __label__ = 13;
      break;
     case 9:
      
      
      
      var $68 = HEAP[$value] + 1;
      
      
      HEAP[$value] = $68;
      
      
      
      
      
      
      
      var $78 = HEAP[$self_addr + 32];
      
      var $80 = HEAP[$78 + 8];
      var $81 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $80;
      
      HEAP[$81] = $value;
      var $83 = $80 + 1;
      var $84 = $78 + 8;
      HEAP[$84] = $83;
      $rc = 0;
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $88 = HEAP[$py_key] - 1;
      
      
      HEAP[$py_key] = $88;
      
      
      
      
      if (HEAP[$py_key] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $99 = HEAP[HEAP[$py_key + 4] + 24];
      
      FUNCTION_TABLE[$99]($py_key);
      __label__ = 12;
      break;
     case 12:
      
      $0 = $rc;
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
  function _load_extension($self, $nbytes) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $nbytes_addr;
      var $retval;
      var $0;
      var $codebytes = __stackBase__;
      var $code;
      var $py_code;
      var $obj;
      var $pair;
      var $module_name;
      var $class_name;
      $self_addr = $self;
      $nbytes_addr = $nbytes;
      
      
      
      
      
      
      
      
      if ($nbytes_addr != 1 & $nbytes_addr != 2 & $nbytes_addr != 4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str93, __str15, 4260, ___PRETTY_FUNCTION___14342);
      throw "Reached an unreachable!";
     case 2:
      
      
      var $9 = HEAP[$self_addr + 60];
      
      
      var $12 = FUNCTION_TABLE[$9]($self_addr, $codebytes, $nbytes_addr);
      
      if ($12 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 42;
      break;
     case 4:
      var $14 = HEAP[$codebytes];
      
      var $16 = _calc_binint($14, $nbytes_addr);
      $code = $16;
      
      
      if ($code <= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $19 = HEAP[_UnpicklingError];
      _PyErr_SetString($19, __str94);
      $0 = -1;
      __label__ = 42;
      break;
     case 6:
      
      var $21 = _PyInt_FromLong($code);
      $py_code = $21;
      
      
      if ($py_code == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = -1;
      __label__ = 42;
      break;
     case 8:
      var $24 = HEAP[_extension_cache];
      
      var $26 = _PyDict_GetItem($24, $py_code);
      $obj = $26;
      
      
      if ($obj != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 9:
      
      
      
      var $32 = HEAP[$py_code] - 1;
      
      
      HEAP[$py_code] = $32;
      
      
      
      
      if (HEAP[$py_code] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $43 = HEAP[HEAP[$py_code + 4] + 24];
      
      FUNCTION_TABLE[$43]($py_code);
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      var $58 = HEAP[$self_addr + 32];
      var $59 = _Pdata_grow($58);
      
      if ($59 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = -1;
      __label__ = 42;
      break;
     case 14:
      
      
      
      var $64 = HEAP[$obj] + 1;
      
      
      HEAP[$obj] = $64;
      
      
      
      
      
      
      
      var $74 = HEAP[$self_addr + 32];
      
      var $76 = HEAP[$74 + 8];
      var $77 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $76;
      
      HEAP[$77] = $obj;
      var $79 = $76 + 1;
      var $80 = $74 + 8;
      HEAP[$80] = $79;
      $0 = 0;
      __label__ = 42;
      break;
     case 15:
      var $81 = HEAP[_inverted_registry];
      
      var $83 = _PyDict_GetItem($81, $py_code);
      $pair = $83;
      
      
      if ($pair == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      
      
      
      var $89 = HEAP[$py_code] - 1;
      
      
      HEAP[$py_code] = $89;
      
      
      
      
      if (HEAP[$py_code] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $100 = HEAP[HEAP[$py_code + 4] + 24];
      
      FUNCTION_TABLE[$100]($py_code);
      __label__ = 18;
      break;
     case 18:
      var $102 = HEAP[_PyExc_ValueError];
      
      var $104 = _PyErr_Format($102, __str95, allocate([ $code, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
      __label__ = 42;
      break;
     case 19:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$pair + 4] + 84] & 67108864) == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      var $113 = _PyTuple_Size($pair);
      
      if ($113 != 2) {
        __label__ = 23;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      $module_name = HEAP[$pair + 12];
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$module_name + 4] + 84] & 134217728) == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      
      $class_name = HEAP[$pair + 12 + 4];
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$class_name + 4] + 84] & 134217728) == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 23:
      
      
      
      var $142 = HEAP[$py_code] - 1;
      
      
      HEAP[$py_code] = $142;
      
      
      
      
      if (HEAP[$py_code] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $153 = HEAP[HEAP[$py_code + 4] + 24];
      
      FUNCTION_TABLE[$153]($py_code);
      __label__ = 25;
      break;
     case 25:
      var $155 = HEAP[_PyExc_ValueError];
      
      var $157 = _PyErr_Format($155, __str96, allocate([ $code, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
      __label__ = 42;
      break;
     case 26:
      
      
      var $160 = HEAP[$self_addr + 76];
      
      
      var $163 = _find_class($module_name, $class_name, $160);
      $obj = $163;
      
      
      if ($obj == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      
      
      
      var $169 = HEAP[$py_code] - 1;
      
      
      HEAP[$py_code] = $169;
      
      
      
      
      if (HEAP[$py_code] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $180 = HEAP[HEAP[$py_code + 4] + 24];
      
      FUNCTION_TABLE[$180]($py_code);
      __label__ = 29;
      break;
     case 29:
      $0 = -1;
      __label__ = 42;
      break;
     case 30:
      var $182 = HEAP[_extension_cache];
      
      
      var $185 = _PyDict_SetItem($182, $py_code, $obj);
      $code = $185;
      
      
      
      var $189 = HEAP[$py_code] - 1;
      
      
      HEAP[$py_code] = $189;
      
      
      
      
      if (HEAP[$py_code] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $200 = HEAP[HEAP[$py_code + 4] + 24];
      
      FUNCTION_TABLE[$200]($py_code);
      __label__ = 32;
      break;
     case 32:
      
      
      if ($code < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 33:
      
      
      
      var $207 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $207;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $218 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$218]($obj);
      __label__ = 35;
      break;
     case 35:
      $0 = -1;
      __label__ = 42;
      break;
     case 36:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 37;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 37:
      
      
      var $233 = HEAP[$self_addr + 32];
      var $234 = _Pdata_grow($233);
      
      if ($234 < 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 38:
      
      
      
      var $239 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $239;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      var $250 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$250]($obj);
      __label__ = 40;
      break;
     case 40:
      $0 = -1;
      __label__ = 42;
      break;
     case 41:
      
      
      
      
      
      
      
      var $259 = HEAP[$self_addr + 32];
      
      var $261 = HEAP[$259 + 8];
      var $262 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $261;
      
      HEAP[$262] = $obj;
      var $264 = $261 + 1;
      var $265 = $259 + 8;
      HEAP[$265] = $264;
      $0 = 0;
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
  function _load_put($self) {
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
      var $py_str;
      var $value;
      var $len;
      var $l;
      var $s = __stackBase__;
      $self_addr = $self;
      $py_str = 0;
      $value = 0;
      
      
      var $3 = HEAP[$self_addr + 64];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $s);
      $l = $5;
      
      
      if ($l < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 11;
      break;
     case 2:
      
      
      if ($l <= 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _bad_readline();
      $0 = $10;
      __label__ = 11;
      break;
     case 4:
      
      
      
      
      
      $len = HEAP[HEAP[$self_addr + 32] + 8];
      
      
      if ($len == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $18 = _stackUnderflow();
      $0 = $18;
      __label__ = 11;
      break;
     case 6:
      
      
      var $21 = HEAP[$s];
      var $22 = _PyString_FromStringAndSize($21, $l - 1);
      $py_str = $22;
      
      
      if ($py_str == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = -1;
      __label__ = 11;
      break;
     case 8:
      
      
      
      
      
      
      
      
      
      $value = HEAP[HEAP[HEAP[$self_addr + 32] + 16] + 4 * ($len - 1)];
      
      
      var $36 = HEAP[$self_addr + 24];
      
      
      var $39 = _PyDict_SetItem($36, $py_str, $value);
      $l = $39;
      
      
      
      var $43 = HEAP[$py_str] - 1;
      
      
      HEAP[$py_str] = $43;
      
      
      
      
      if (HEAP[$py_str] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $54 = HEAP[HEAP[$py_str + 4] + 24];
      
      FUNCTION_TABLE[$54]($py_str);
      __label__ = 10;
      break;
     case 10:
      
      $0 = $l;
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
  function _load_binput($self) {
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
      var $py_key;
      var $value;
      var $key;
      var $s = __stackBase__;
      var $len;
      $self_addr = $self;
      $py_key = 0;
      $value = 0;
      
      
      var $3 = HEAP[$self_addr + 60];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $s, 1);
      
      if ($5 < 0) {
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
      
      
      
      
      
      $len = HEAP[HEAP[$self_addr + 32] + 8];
      
      
      if ($len <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $14 = _stackUnderflow();
      $0 = $14;
      __label__ = 9;
      break;
     case 4:
      
      
      
      $key = HEAP[HEAP[$s]];
      
      
      var $20 = _PyInt_FromLong($key);
      $py_key = $20;
      
      
      if ($py_key == 0) {
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
      
      
      
      
      
      
      
      
      
      $value = HEAP[HEAP[HEAP[$self_addr + 32] + 16] + 4 * ($len - 1)];
      
      
      var $34 = HEAP[$self_addr + 24];
      
      
      var $37 = _PyDict_SetItem($34, $py_key, $value);
      $len = $37;
      
      
      
      var $41 = HEAP[$py_key] - 1;
      
      
      HEAP[$py_key] = $41;
      
      
      
      
      if (HEAP[$py_key] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $52 = HEAP[HEAP[$py_key + 4] + 24];
      
      FUNCTION_TABLE[$52]($py_key);
      __label__ = 8;
      break;
     case 8:
      
      $0 = $len;
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
  function _load_long_binput($self) {
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
      var $py_key;
      var $value;
      var $key;
      var $c;
      var $s = __stackBase__;
      var $len;
      $self_addr = $self;
      $py_key = 0;
      $value = 0;
      
      
      var $3 = HEAP[$self_addr + 60];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $s, 4);
      
      if ($5 < 0) {
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
      
      
      
      
      
      $len = HEAP[HEAP[$self_addr + 32] + 8];
      
      
      if ($len == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $14 = _stackUnderflow();
      $0 = $14;
      __label__ = 9;
      break;
     case 4:
      
      
      
      $c = HEAP[HEAP[$s]];
      
      
      $key = $c;
      
      
      
      $c = HEAP[HEAP[$s] + 1];
      
      
      
      
      var $27 = $c << 8 | $key;
      $key = $27;
      
      
      
      $c = HEAP[HEAP[$s] + 2];
      
      
      
      
      var $35 = $c << 16 | $key;
      $key = $35;
      
      
      
      $c = HEAP[HEAP[$s] + 3];
      
      
      
      
      var $43 = $c << 24 | $key;
      $key = $43;
      
      var $45 = _PyInt_FromLong($key);
      $py_key = $45;
      
      
      if ($py_key == 0) {
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
      
      
      
      
      
      
      
      
      
      $value = HEAP[HEAP[HEAP[$self_addr + 32] + 16] + 4 * ($len - 1)];
      
      
      var $59 = HEAP[$self_addr + 24];
      
      
      var $62 = _PyDict_SetItem($59, $py_key, $value);
      $len = $62;
      
      
      
      var $66 = HEAP[$py_key] - 1;
      
      
      HEAP[$py_key] = $66;
      
      
      
      
      if (HEAP[$py_key] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $77 = HEAP[HEAP[$py_key + 4] + 24];
      
      FUNCTION_TABLE[$77]($py_key);
      __label__ = 8;
      break;
     case 8:
      
      $0 = $len;
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
  function _do_append($self, $x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $x_addr;
      var $retval;
      var $0;
      var $value;
      var $list;
      var $append_method;
      var $len;
      var $i;
      var $slice;
      var $list_len;
      var $junk;
      $self_addr = $self;
      $x_addr = $x;
      $value = 0;
      $list = 0;
      $append_method = 0;
      
      
      
      
      
      $len = HEAP[HEAP[$self_addr + 32] + 8];
      
      
      
      
      
      
      if ($len < $x_addr | $x_addr <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $11 = _stackUnderflow();
      $0 = $11;
      __label__ = 37;
      break;
     case 2:
      
      
      
      if ($len == $x_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 37;
      break;
     case 4:
      
      
      
      
      
      
      
      
      
      $list = HEAP[HEAP[HEAP[$self_addr + 32] + 16] + 4 * ($x_addr - 1)];
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$list + 4] + 84] & 33554432) != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 5:
      
      
      var $33 = HEAP[$self_addr + 32];
      
      var $35 = _Pdata_popList($33, $x_addr);
      $slice = $35;
      
      
      if ($slice == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -1;
      __label__ = 37;
      break;
     case 7:
      
      
      
      
      $list_len = HEAP[$list + 8];
      
      
      
      
      var $46 = _PyList_SetSlice($list, $list_len, $list_len, $slice);
      $i = $46;
      
      
      
      var $50 = HEAP[$slice] - 1;
      
      
      HEAP[$slice] = $50;
      
      
      
      
      if (HEAP[$slice] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $61 = HEAP[HEAP[$slice + 4] + 24];
      
      FUNCTION_TABLE[$61]($slice);
      __label__ = 9;
      break;
     case 9:
      
      $0 = $i;
      __label__ = 37;
      break;
     case 10:
      var $64 = HEAP[_append_str];
      
      var $66 = _PyObject_GetAttr($list, $64);
      $append_method = $66;
      
      
      if ($append_method == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = -1;
      __label__ = 37;
      break;
     case 12:
      
      $i = $x_addr;
      __label__ = 33;
      break;
     case 13:
      
      
      
      
      
      $value = HEAP[HEAP[$238 + 16] + 4 * $i];
      $junk = 0;
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      var $79 = _PyTuple_New(1);
      
      
      HEAP[$self_addr + 28] = $79;
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 28] + 12] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      
      
      
      var $100 = HEAP[HEAP[$self_addr + 28] + 12];
      
      
      var $103 = HEAP[$100] - 1;
      var $104 = $100;
      HEAP[$104] = $103;
      
      
      
      if (HEAP[$100] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      
      
      
      var $118 = HEAP[HEAP[HEAP[HEAP[$self_addr + 28] + 12] + 4] + 24];
      
      
      
      
      
      
      var $125 = HEAP[HEAP[$self_addr + 28] + 12];
      FUNCTION_TABLE[$118]($125);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      
      var $131 = HEAP[$self_addr + 28] + 12;
      
      HEAP[$131] = $value;
      __label__ = 21;
      break;
     case 19:
      
      
      
      var $136 = HEAP[$value] - 1;
      
      
      HEAP[$value] = $136;
      
      
      
      
      if (HEAP[$value] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $147 = HEAP[HEAP[$value + 4] + 24];
      
      FUNCTION_TABLE[$147]($value);
      __label__ = 21;
      break;
     case 21:
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 22:
      
      
      var $155 = HEAP[$self_addr + 28];
      
      var $157 = _PyObject_Call($append_method, $155, 0);
      $junk = $157;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 28]] > 1) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 23:
      
      
      var $166 = HEAP[$self_addr + 28];
      
      
      var $169 = HEAP[$166] - 1;
      var $170 = $166;
      HEAP[$170] = $169;
      
      
      
      if (HEAP[$166] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      
      
      var $180 = HEAP[HEAP[HEAP[$self_addr + 28] + 4] + 24];
      
      
      var $183 = HEAP[$self_addr + 28];
      FUNCTION_TABLE[$180]($183);
      __label__ = 25;
      break;
     case 25:
      
      
      HEAP[$self_addr + 28] = 0;
      __label__ = 26;
      break;
     case 26:
      
      
      if ($junk == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      
      
      
      
      var $192 = HEAP[$self_addr + 32];
      var $193 = _Pdata_clear($192, $i + 1);
      
      
      
      var $197 = HEAP[$self_addr + 32] + 8;
      
      HEAP[$197] = $x_addr;
      
      
      
      var $202 = HEAP[$append_method] - 1;
      
      
      HEAP[$append_method] = $202;
      
      
      
      
      if (HEAP[$append_method] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $213 = HEAP[HEAP[$append_method + 4] + 24];
      
      FUNCTION_TABLE[$213]($append_method);
      __label__ = 29;
      break;
     case 29:
      $0 = -1;
      __label__ = 37;
      break;
     case 30:
      
      
      
      var $218 = HEAP[$junk] - 1;
      
      
      HEAP[$junk] = $218;
      
      
      
      
      if (HEAP[$junk] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $229 = HEAP[HEAP[$junk + 4] + 24];
      
      FUNCTION_TABLE[$229]($junk);
      __label__ = 32;
      break;
     case 32:
      
      var $232 = $i + 1;
      $i = $232;
      __label__ = 33;
      break;
     case 33:
      
      
      
      
      
      var $238 = HEAP[$self_addr + 32];
      if ($i < $len) {
        __label__ = 13;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      HEAP[$238 + 8] = $x_addr;
      
      
      
      var $244 = HEAP[$append_method] - 1;
      
      
      HEAP[$append_method] = $244;
      
      
      
      
      if (HEAP[$append_method] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $255 = HEAP[HEAP[$append_method + 4] + 24];
      
      FUNCTION_TABLE[$255]($append_method);
      __label__ = 36;
      break;
     case 36:
      $0 = 0;
      __label__ = 37;
      break;
     case 37:
      
      $retval = $0;
      var $retval38 = $retval;
      return $retval38;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_append($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    
    
    
    var $6 = HEAP[HEAP[$self_addr + 32] + 8] - 1;
    
    var $8 = _do_append($self_addr, $6);
    $0 = $8;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _load_appends($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    var $2 = _marker($self_addr);
    
    var $4 = _do_append($self_addr, $2);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _do_setitems($self, $x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $x_addr;
      var $retval;
      var $0;
      var $value;
      var $key;
      var $dict;
      var $len;
      var $i;
      var $r;
      $self_addr = $self;
      $x_addr = $x;
      $value = 0;
      $key = 0;
      $dict = 0;
      $r = 0;
      
      
      
      
      
      $len = HEAP[HEAP[$self_addr + 32] + 8];
      
      
      
      
      
      
      if ($len < $x_addr | $x_addr <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $11 = _stackUnderflow();
      $0 = $11;
      __label__ = 8;
      break;
     case 2:
      
      
      
      
      
      
      
      
      
      $dict = HEAP[HEAP[HEAP[$self_addr + 32] + 16] + 4 * ($x_addr - 1)];
      
      
      $i = $x_addr + 1;
      __label__ = 6;
      break;
     case 3:
      
      
      
      
      
      
      
      
      
      $key = HEAP[HEAP[HEAP[$self_addr + 32] + 16] + 4 * ($i - 1)];
      
      
      
      
      
      
      
      
      $value = HEAP[HEAP[HEAP[$self_addr + 32] + 16] + 4 * $i];
      
      
      
      var $43 = _PyObject_SetItem($dict, $key, $value);
      
      if ($43 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $r = -1;
      __label__ = 7;
      break;
     case 5:
      
      var $46 = $i + 2;
      $i = $46;
      __label__ = 6;
      break;
     case 6:
      
      
      
      if ($i < $len) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      var $52 = HEAP[$self_addr + 32];
      
      var $54 = _Pdata_clear($52, $x_addr);
      
      $0 = $r;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_setitem($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    
    
    
    var $6 = HEAP[HEAP[$self_addr + 32] + 8] - 2;
    
    var $8 = _do_setitems($self_addr, $6);
    $0 = $8;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _load_setitems($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    var $2 = _marker($self_addr);
    
    var $4 = _do_setitems($self_addr, $2);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _load_build($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $state;
      var $inst;
      var $slotstate;
      var $__setstate__;
      var $d_key = __stackBase__;
      var $d_value = __stackBase__ + 4;
      var $i = __stackBase__ + 8;
      var $res;
      var $junk;
      var $temp;
      var $dict;
      $self_addr = $self;
      $res = -1;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] <= 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = _stackUnderflow();
      $0 = $7;
      __label__ = 62;
      break;
     case 2:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $14 = HEAP[_UnpicklingError];
      _PyErr_SetString($14, __str88);
      $state = 0;
      __label__ = 5;
      break;
     case 4:
      
      
      
      
      var $19 = HEAP[HEAP[$self_addr + 32] + 16];
      
      
      var $22 = HEAP[$self_addr + 32];
      
      
      var $25 = HEAP[$22 + 8] - 1;
      var $26 = $22 + 8;
      HEAP[$26] = $25;
      
      
      
      
      $state = HEAP[$19 + 4 * HEAP[$22 + 8]];
      
      if (HEAP[$19 + 4 * HEAP[$22 + 8]] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 62;
      break;
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      
      
      $inst = HEAP[HEAP[HEAP[$self_addr + 32] + 16] + 4 * (HEAP[HEAP[$self_addr + 32] + 8] - 1)];
      var $45 = HEAP[___setstate___str];
      
      var $47 = _PyObject_GetAttr($inst, $45);
      $__setstate__ = $47;
      
      
      if ($__setstate__ != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 7:
      $junk = 0;
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $54 = _PyTuple_New(1);
      
      
      HEAP[$self_addr + 28] = $54;
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 28] + 12] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      
      
      
      var $75 = HEAP[HEAP[$self_addr + 28] + 12];
      
      
      var $78 = HEAP[$75] - 1;
      var $79 = $75;
      HEAP[$79] = $78;
      
      
      
      if (HEAP[$75] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      
      
      
      
      var $93 = HEAP[HEAP[HEAP[HEAP[$self_addr + 28] + 12] + 4] + 24];
      
      
      
      
      
      
      var $100 = HEAP[HEAP[$self_addr + 28] + 12];
      FUNCTION_TABLE[$93]($100);
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      
      var $106 = HEAP[$self_addr + 28] + 12;
      
      HEAP[$106] = $state;
      __label__ = 15;
      break;
     case 13:
      
      
      
      var $111 = HEAP[$state] - 1;
      
      
      HEAP[$state] = $111;
      
      
      
      
      if (HEAP[$state] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $122 = HEAP[HEAP[$state + 4] + 24];
      
      FUNCTION_TABLE[$122]($state);
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 16:
      
      
      var $130 = HEAP[$self_addr + 28];
      
      var $132 = _PyObject_Call($__setstate__, $130, 0);
      $junk = $132;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 28]] > 1) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      
      
      var $141 = HEAP[$self_addr + 28];
      
      
      var $144 = HEAP[$141] - 1;
      var $145 = $141;
      HEAP[$145] = $144;
      
      
      
      if (HEAP[$141] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      
      
      var $155 = HEAP[HEAP[HEAP[$self_addr + 28] + 4] + 24];
      
      
      var $158 = HEAP[$self_addr + 28];
      FUNCTION_TABLE[$155]($158);
      __label__ = 19;
      break;
     case 19:
      
      
      HEAP[$self_addr + 28] = 0;
      __label__ = 20;
      break;
     case 20:
      
      
      
      var $164 = HEAP[$__setstate__] - 1;
      
      
      HEAP[$__setstate__] = $164;
      
      
      
      
      if (HEAP[$__setstate__] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $175 = HEAP[HEAP[$__setstate__ + 4] + 24];
      
      FUNCTION_TABLE[$175]($__setstate__);
      __label__ = 22;
      break;
     case 22:
      
      
      if ($junk == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      $0 = -1;
      __label__ = 62;
      break;
     case 24:
      
      
      
      var $182 = HEAP[$junk] - 1;
      
      
      HEAP[$junk] = $182;
      
      
      
      
      if (HEAP[$junk] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $193 = HEAP[HEAP[$junk + 4] + 24];
      
      FUNCTION_TABLE[$193]($junk);
      __label__ = 26;
      break;
     case 26:
      $0 = 0;
      __label__ = 62;
      break;
     case 27:
      var $195 = HEAP[_PyExc_AttributeError];
      var $196 = _PyErr_ExceptionMatches($195);
      
      if ($196 == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      $0 = -1;
      __label__ = 62;
      break;
     case 29:
      _PyErr_Clear();
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$state + 4] + 84] & 67108864) == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      var $206 = _PyTuple_Size($state);
      
      if ($206 != 2) {
        __label__ = 33;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      $temp = $state;
      
      
      
      
      
      $state = HEAP[$temp + 12];
      
      
      
      
      
      $slotstate = HEAP[$temp + 12 + 4];
      
      
      
      var $222 = HEAP[$state] + 1;
      
      
      HEAP[$state] = $222;
      
      
      
      var $228 = HEAP[$slotstate] + 1;
      
      
      HEAP[$slotstate] = $228;
      
      
      
      var $234 = HEAP[$temp] - 1;
      
      
      HEAP[$temp] = $234;
      
      
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 32:
      
      
      
      
      var $245 = HEAP[HEAP[$temp + 4] + 24];
      
      FUNCTION_TABLE[$245]($temp);
      __label__ = 34;
      break;
     case 33:
      $slotstate = 0;
      __label__ = 34;
      break;
     case 34:
      
      
      if ($state != __Py_NoneStruct) {
        __label__ = 35;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 35:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$state + 4] + 84] & 536870912) == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      var $256 = HEAP[_UnpicklingError];
      _PyErr_SetString($256, __str97);
      __label__ = 56;
      break;
     case 37:
      var $257 = HEAP[___dict___str];
      
      var $259 = _PyObject_GetAttr($inst, $257);
      $dict = $259;
      
      
      if ($dict == 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      HEAP[$i] = 0;
      __label__ = 46;
      break;
     case 39:
      
      
      
      var $265 = HEAP[HEAP[$d_key]] + 1;
      var $266 = HEAP[$d_key];
      HEAP[$266] = $265;
      
      
      
      
      if (HEAP[HEAP[$d_key] + 4] == _PyString_Type) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      _PyString_InternInPlace($d_key);
      __label__ = 41;
      break;
     case 41:
      var $271 = HEAP[$d_value];
      var $272 = HEAP[$d_key];
      
      var $274 = _PyObject_SetItem($dict, $272, $271);
      var $275 = $274 < 0;
      var $276 = HEAP[$d_key];
      
      
      var $279 = HEAP[$276] - 1;
      var $280 = $276;
      HEAP[$280] = $279;
      
      
      var $283 = HEAP[$276] == 0;
      if ($275) {
        __label__ = 42;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 42:
      if ($283) {
        __label__ = 43;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 43:
      
      
      
      
      var $288 = HEAP[HEAP[HEAP[$d_key] + 4] + 24];
      var $289 = HEAP[$d_key];
      FUNCTION_TABLE[$288]($289);
      __label__ = 56;
      break;
     case 44:
      if ($283) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      var $294 = HEAP[HEAP[HEAP[$d_key] + 4] + 24];
      var $295 = HEAP[$d_key];
      FUNCTION_TABLE[$294]($295);
      __label__ = 46;
      break;
     case 46:
      
      var $297 = _PyDict_Next($state, $i, $d_key, $d_value);
      
      if ($297 != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 47:
      
      
      
      var $302 = HEAP[$dict] - 1;
      
      
      HEAP[$dict] = $302;
      
      
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      
      
      
      var $313 = HEAP[HEAP[$dict + 4] + 24];
      
      FUNCTION_TABLE[$313]($dict);
      __label__ = 49;
      break;
     case 49:
      
      
      if ($slotstate != 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 50:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$slotstate + 4] + 84] & 536870912) == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      var $324 = HEAP[_UnpicklingError];
      _PyErr_SetString($324, __str98);
      __label__ = 56;
      break;
     case 52:
      HEAP[$i] = 0;
      __label__ = 54;
      break;
     case 53:
      var $325 = HEAP[$d_value];
      var $326 = HEAP[$d_key];
      
      var $328 = _PyObject_SetAttr($inst, $326, $325);
      
      if ($328 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 54:
      
      var $331 = _PyDict_Next($slotstate, $i, $d_key, $d_value);
      
      if ($331 != 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 55:
      $res = 0;
      __label__ = 56;
      break;
     case 56:
      
      
      
      var $336 = HEAP[$state] - 1;
      
      
      HEAP[$state] = $336;
      
      
      
      
      if (HEAP[$state] == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      
      
      
      
      var $347 = HEAP[HEAP[$state + 4] + 24];
      
      FUNCTION_TABLE[$347]($state);
      __label__ = 58;
      break;
     case 58:
      
      
      if ($slotstate != 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 59:
      
      
      
      var $354 = HEAP[$slotstate] - 1;
      
      
      HEAP[$slotstate] = $354;
      
      
      
      
      if (HEAP[$slotstate] == 0) {
        __label__ = 60;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 60:
      
      
      
      
      var $365 = HEAP[HEAP[$slotstate + 4] + 24];
      
      FUNCTION_TABLE[$365]($slotstate);
      __label__ = 61;
      break;
     case 61:
      
      $0 = $res;
      __label__ = 62;
      break;
     case 62:
      
      $retval = $0;
      var $retval64 = $retval;
      STACKTOP = __stackBase__;
      return $retval64;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_mark($self) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $s;
      var $marks;
      $self_addr = $self;
      
      
      
      
      
      
      
      
      if (HEAP[$self_addr + 52] + 1 >= HEAP[$self_addr + 56]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      
      
      
      
      $s = HEAP[$self_addr + 56] + 20;
      
      
      
      
      
      if (HEAP[$self_addr + 52] >= $s) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      $s = HEAP[$self_addr + 52] + 1;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      var $27 = $s * 4;
      if (HEAP[$self_addr + 48] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $28 = _malloc($27);
      var $29 = $28;
      $marks = $29;
      __lastLabel__ = 4;
      __label__ = 6;
      break;
     case 5:
      
      
      
      var $33 = HEAP[$self_addr + 48];
      var $34 = _realloc($33, $27);
      var $35 = $34;
      $marks = $35;
      __lastLabel__ = 5;
      __label__ = 6;
      break;
     case 6:
      var $36 = __lastLabel__ == 5 ? $35 : $29;
      
      if ($36 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $38 = _PyErr_NoMemory();
      $0 = -1;
      __label__ = 10;
      break;
     case 8:
      
      
      
      HEAP[$self_addr + 48] = $marks;
      
      
      
      HEAP[$self_addr + 56] = $s;
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      
      var $50 = HEAP[$self_addr + 52];
      
      
      
      
      var $55 = HEAP[HEAP[$self_addr + 32] + 8];
      var $56 = HEAP[$self_addr + 48] + 4 * $50;
      HEAP[$56] = $55;
      var $57 = $50 + 1;
      
      
      HEAP[$self_addr + 52] = $57;
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
  function _load_reduce($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $callable;
      var $arg_tup;
      var $ob;
      $self_addr = $self;
      $callable = 0;
      $arg_tup = 0;
      $ob = 0;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $7 = HEAP[_UnpicklingError];
      _PyErr_SetString($7, __str88);
      $arg_tup = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      var $12 = HEAP[HEAP[$self_addr + 32] + 16];
      
      
      var $15 = HEAP[$self_addr + 32];
      
      
      var $18 = HEAP[$15 + 8] - 1;
      var $19 = $15 + 8;
      HEAP[$19] = $18;
      
      
      
      
      $arg_tup = HEAP[$12 + 4 * HEAP[$15 + 8]];
      
      if (HEAP[$12 + 4 * HEAP[$15 + 8]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 19;
      break;
     case 4:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $31 = HEAP[_UnpicklingError];
      _PyErr_SetString($31, __str88);
      $callable = 0;
      __label__ = 9;
      break;
     case 6:
      
      
      
      
      var $36 = HEAP[HEAP[$self_addr + 32] + 16];
      
      
      var $39 = HEAP[$self_addr + 32];
      
      
      var $42 = HEAP[$39 + 8] - 1;
      var $43 = $39 + 8;
      HEAP[$43] = $42;
      
      
      
      
      $callable = HEAP[$36 + 4 * HEAP[$39 + 8]];
      
      if (HEAP[$36 + 4 * HEAP[$39 + 8]] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $51 = _Instance_New($callable, $arg_tup);
      $ob = $51;
      
      
      
      var $55 = HEAP[$callable] - 1;
      
      
      HEAP[$callable] = $55;
      
      
      
      
      if (HEAP[$callable] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $66 = HEAP[HEAP[$callable + 4] + 24];
      
      FUNCTION_TABLE[$66]($callable);
      __label__ = 9;
      break;
     case 9:
      
      
      
      var $71 = HEAP[$arg_tup] - 1;
      
      
      HEAP[$arg_tup] = $71;
      
      
      
      
      if (HEAP[$arg_tup] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $82 = HEAP[HEAP[$arg_tup + 4] + 24];
      
      FUNCTION_TABLE[$82]($arg_tup);
      __label__ = 11;
      break;
     case 11:
      
      
      if ($ob == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = -1;
      __label__ = 19;
      break;
     case 13:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      
      
      var $99 = HEAP[$self_addr + 32];
      var $100 = _Pdata_grow($99);
      
      if ($100 < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      
      
      
      var $105 = HEAP[$ob] - 1;
      
      
      HEAP[$ob] = $105;
      
      
      
      
      if (HEAP[$ob] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $116 = HEAP[HEAP[$ob + 4] + 24];
      
      FUNCTION_TABLE[$116]($ob);
      __label__ = 17;
      break;
     case 17:
      $0 = -1;
      __label__ = 19;
      break;
     case 18:
      
      
      
      
      
      
      
      var $125 = HEAP[$self_addr + 32];
      
      var $127 = HEAP[$125 + 8];
      var $128 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $127;
      
      HEAP[$128] = $ob;
      var $130 = $127 + 1;
      var $131 = $125 + 8;
      HEAP[$131] = $130;
      $0 = 0;
      __label__ = 19;
      break;
     case 19:
      
      $retval = $0;
      var $retval21 = $retval;
      return $retval21;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _load_proto($self) {
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
      var $i;
      var $protobyte = __stackBase__;
      $self_addr = $self;
      
      
      var $3 = HEAP[$self_addr + 60];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $protobyte, 1);
      $i = $5;
      
      
      if ($i < 0) {
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
      var $8 = HEAP[$protobyte];
      var $9 = _calc_binint($8, 1);
      $i = $9;
      
      
      if ($i < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str99, __str15, 4665, ___PRETTY_FUNCTION___15142);
      throw "Reached an unreachable!";
     case 4:
      
      
      if ($i <= 2) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 7;
      break;
     case 6:
      var $14 = HEAP[_PyExc_ValueError];
      
      var $16 = _PyErr_Format($14, __str100, allocate([ $i, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
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
  function _load($self) {
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
      var $err;
      var $val;
      var $s = __stackBase__;
      $self_addr = $self;
      $err = 0;
      $val = 0;
      
      
      HEAP[$self_addr + 52] = 0;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $11 = HEAP[$self_addr + 32];
      var $12 = _Pdata_clear($11, 0);
      __label__ = 2;
      break;
     case 2:
      
      
      var $15 = HEAP[$self_addr + 60];
      
      var $17 = FUNCTION_TABLE[$15]($self_addr, $s, 1);
      
      if ($17 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $21 = HEAP[HEAP[$s]];
      var $22 = reSign($21, 8, 1);
      if ($22 == -128) {
        __label__ = 53;
        break;
      } else if ($22 == -127) {
        __label__ = 30;
        break;
      } else if ($22 == -126) {
        __label__ = 39;
        break;
      } else if ($22 == -125) {
        __label__ = 40;
        break;
      } else if ($22 == -124) {
        __label__ = 41;
        break;
      } else if ($22 == -123) {
        __label__ = 20;
        break;
      } else if ($22 == -122) {
        __label__ = 21;
        break;
      } else if ($22 == -121) {
        __label__ = 22;
        break;
      } else if ($22 == -120) {
        __label__ = 54;
        break;
      } else if ($22 == -119) {
        __label__ = 55;
        break;
      } else if ($22 == -118) {
        __label__ = 10;
        break;
      } else if ($22 == -117) {
        __label__ = 11;
        break;
      } else if ($22 == 0) {
        __label__ = 56;
        break;
      } else if ($22 == 40) {
        __label__ = 42;
        break;
      } else if ($22 == 41) {
        __label__ = 19;
        break;
      } else if ($22 == 46) {
        __label__ = 58;
        break;
      } else if ($22 == 48) {
        __label__ = 46;
        break;
      } else if ($22 == 49) {
        __label__ = 47;
        break;
      } else if ($22 == 50) {
        __label__ = 35;
        break;
      } else if ($22 == 70) {
        __label__ = 12;
        break;
      } else if ($22 == 71) {
        __label__ = 13;
        break;
      } else if ($22 == 73) {
        __label__ = 8;
        break;
      } else if ($22 == 74) {
        __label__ = 5;
        break;
      } else if ($22 == 75) {
        __label__ = 6;
        break;
      } else if ($22 == 76) {
        __label__ = 9;
        break;
      } else if ($22 == 77) {
        __label__ = 7;
        break;
      } else if ($22 == 78) {
        __label__ = 4;
        break;
      } else if ($22 == 80) {
        __label__ = 50;
        break;
      } else if ($22 == 81) {
        __label__ = 51;
        break;
      } else if ($22 == 82) {
        __label__ = 52;
        break;
      } else if ($22 == 83) {
        __label__ = 16;
        break;
      } else if ($22 == 84) {
        __label__ = 14;
        break;
      } else if ($22 == 85) {
        __label__ = 15;
        break;
      } else if ($22 == 86) {
        __label__ = 17;
        break;
      } else if ($22 == 88) {
        __label__ = 18;
        break;
      } else if ($22 == 93) {
        __label__ = 24;
        break;
      } else if ($22 == 97) {
        __label__ = 32;
        break;
      } else if ($22 == 98) {
        __label__ = 34;
        break;
      } else if ($22 == 99) {
        __label__ = 31;
        break;
      } else if ($22 == 100) {
        __label__ = 27;
        break;
      } else if ($22 == 101) {
        __label__ = 33;
        break;
      } else if ($22 == 103) {
        __label__ = 38;
        break;
      } else if ($22 == 104) {
        __label__ = 36;
        break;
      } else if ($22 == 105) {
        __label__ = 29;
        break;
      } else if ($22 == 106) {
        __label__ = 37;
        break;
      } else if ($22 == 108) {
        __label__ = 25;
        break;
      } else if ($22 == 111) {
        __label__ = 28;
        break;
      } else if ($22 == 112) {
        __label__ = 45;
        break;
      } else if ($22 == 113) {
        __label__ = 43;
        break;
      } else if ($22 == 114) {
        __label__ = 44;
        break;
      } else if ($22 == 115) {
        __label__ = 48;
        break;
      } else if ($22 == 116) {
        __label__ = 23;
        break;
      } else if ($22 == 117) {
        __label__ = 49;
        break;
      } else if ($22 == 125) {
        __label__ = 26;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 4:
      
      var $24 = _load_none($self_addr);
      
      if ($24 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 5:
      
      var $27 = _load_binint($self_addr);
      
      if ($27 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 6:
      
      var $30 = _load_binint1($self_addr);
      
      if ($30 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 7:
      
      var $33 = _load_binint2($self_addr);
      
      if ($33 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 8:
      
      var $36 = _load_int($self_addr);
      
      if ($36 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 9:
      
      var $39 = _load_long($self_addr);
      
      if ($39 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 10:
      
      var $42 = _load_counted_long($self_addr, 1);
      
      if ($42 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 11:
      
      var $45 = _load_counted_long($self_addr, 4);
      
      if ($45 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 12:
      
      var $48 = _load_float($self_addr);
      
      if ($48 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 13:
      
      var $51 = _load_binfloat($self_addr);
      
      if ($51 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 14:
      
      var $54 = _load_binstring($self_addr);
      
      if ($54 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 15:
      
      var $57 = _load_short_binstring($self_addr);
      
      if ($57 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 16:
      
      var $60 = _load_string($self_addr);
      
      if ($60 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 17:
      
      var $63 = _load_unicode($self_addr);
      
      if ($63 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 18:
      
      var $66 = _load_binunicode($self_addr);
      
      if ($66 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 19:
      
      var $69 = _load_counted_tuple($self_addr, 0);
      
      if ($69 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 20:
      
      var $72 = _load_counted_tuple($self_addr, 1);
      
      if ($72 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 21:
      
      var $75 = _load_counted_tuple($self_addr, 2);
      
      if ($75 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 22:
      
      var $78 = _load_counted_tuple($self_addr, 3);
      
      if ($78 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 23:
      
      var $81 = _load_tuple($self_addr);
      
      if ($81 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 24:
      
      var $84 = _load_empty_list($self_addr);
      
      if ($84 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 25:
      
      var $87 = _load_list($self_addr);
      
      if ($87 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 26:
      
      var $90 = _load_empty_dict($self_addr);
      
      if ($90 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 27:
      
      var $93 = _load_dict($self_addr);
      
      if ($93 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 28:
      
      var $96 = _load_obj($self_addr);
      
      if ($96 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 29:
      
      var $99 = _load_inst($self_addr);
      
      if ($99 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 30:
      
      var $102 = _load_newobj($self_addr);
      
      if ($102 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 31:
      
      var $105 = _load_global($self_addr);
      
      if ($105 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 32:
      
      var $108 = _load_append($self_addr);
      
      if ($108 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 33:
      
      var $111 = _load_appends($self_addr);
      
      if ($111 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 34:
      
      var $114 = _load_build($self_addr);
      
      if ($114 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 35:
      
      var $117 = _load_dup($self_addr);
      
      if ($117 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 36:
      
      var $120 = _load_binget($self_addr);
      
      if ($120 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 37:
      
      var $123 = _load_long_binget($self_addr);
      
      if ($123 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 38:
      
      var $126 = _load_get($self_addr);
      
      if ($126 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 39:
      
      var $129 = _load_extension($self_addr, 1);
      
      if ($129 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 40:
      
      var $132 = _load_extension($self_addr, 2);
      
      if ($132 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 41:
      
      var $135 = _load_extension($self_addr, 4);
      
      if ($135 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 42:
      
      var $138 = _load_mark($self_addr);
      
      if ($138 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 43:
      
      var $141 = _load_binput($self_addr);
      
      if ($141 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 44:
      
      var $144 = _load_long_binput($self_addr);
      
      if ($144 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 45:
      
      var $147 = _load_put($self_addr);
      
      if ($147 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 46:
      
      var $150 = _load_pop($self_addr);
      
      if ($150 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 47:
      
      var $153 = _load_pop_mark($self_addr);
      
      if ($153 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 48:
      
      var $156 = _load_setitem($self_addr);
      
      if ($156 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 49:
      
      var $159 = _load_setitems($self_addr);
      
      if ($159 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 50:
      
      var $162 = _load_persid($self_addr);
      
      if ($162 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 51:
      
      var $165 = _load_binpersid($self_addr);
      
      if ($165 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 52:
      
      var $168 = _load_reduce($self_addr);
      
      if ($168 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 53:
      
      var $171 = _load_proto($self_addr);
      
      if ($171 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 54:
      
      var $174 = _load_bool($self_addr, __Py_TrueStruct);
      
      if ($174 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 55:
      
      var $177 = _load_bool($self_addr, __Py_ZeroStruct);
      
      if ($177 < 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 56:
      var $179 = HEAP[_PyExc_EOFError];
      _PyErr_SetNone($179);
      __label__ = 58;
      break;
     case 57:
      
      
      
      var $183 = HEAP[HEAP[$s]];
      var $184 = HEAP[_UnpicklingError];
      _cPickle_ErrFormat($184, __str101, __str102, allocate([ $183, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 66;
      break;
     case 58:
      var $185 = _PyErr_Occurred();
      $err = $185;
      
      if ($185 != 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 59:
      
      
      
      if ($err == HEAP[_PyExc_EOFError]) {
        __label__ = 60;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 60:
      var $190 = HEAP[_PyExc_EOFError];
      _PyErr_SetNone($190);
      __label__ = 61;
      break;
     case 61:
      $0 = 0;
      __label__ = 66;
      break;
     case 62:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] != 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      
      
      
      
      var $201 = HEAP[HEAP[$self_addr + 32] + 16];
      
      
      var $204 = HEAP[$self_addr + 32];
      
      
      var $207 = HEAP[$204 + 8] - 1;
      var $208 = $204 + 8;
      HEAP[$208] = $207;
      
      
      
      
      $val = HEAP[$201 + 4 * HEAP[$204 + 8]];
      __label__ = 65;
      break;
     case 64:
      var $213 = HEAP[_UnpicklingError];
      _PyErr_SetString($213, __str88);
      $val = 0;
      __label__ = 65;
      break;
     case 65:
      
      $0 = $val;
      __label__ = 66;
      break;
     case 66:
      
      $retval = $0;
      var $retval121 = $retval;
      STACKTOP = __stackBase__;
      return $retval121;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _noload_obj($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $i;
      $self_addr = $self;
      
      var $2 = _marker($self_addr);
      $i = $2;
      
      
      if ($i < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      var $9 = HEAP[$self_addr + 32];
      var $10 = _Pdata_clear($9, $i + 1);
      $0 = $10;
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
  function _noload_inst($self) {
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
      var $i;
      var $s = __stackBase__;
      $self_addr = $self;
      
      var $2 = _marker($self_addr);
      $i = $2;
      
      
      if ($i < 0) {
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
      
      
      var $7 = HEAP[$self_addr + 32];
      
      var $9 = _Pdata_clear($7, $i);
      
      
      var $12 = HEAP[$self_addr + 64];
      
      var $14 = FUNCTION_TABLE[$12]($self_addr, $s);
      
      if ($14 < 0) {
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
      
      
      var $18 = HEAP[$self_addr + 64];
      
      var $20 = FUNCTION_TABLE[$18]($self_addr, $s);
      
      if ($20 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 10;
      break;
     case 6:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $35 = HEAP[$self_addr + 32];
      var $36 = _Pdata_grow($35);
      
      if ($36 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = -1;
      __label__ = 10;
      break;
     case 9:
      
      var $39 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $39;
      
      
      
      
      
      
      
      var $47 = HEAP[$self_addr + 32];
      
      var $49 = HEAP[$47 + 8];
      var $50 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $49;
      HEAP[$50] = __Py_NoneStruct;
      var $51 = $49 + 1;
      var $52 = $47 + 8;
      HEAP[$52] = $51;
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
  function _noload_newobj($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $obj;
      $self_addr = $self;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $7 = HEAP[_UnpicklingError];
      _PyErr_SetString($7, __str88);
      $obj = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      var $12 = HEAP[HEAP[$self_addr + 32] + 16];
      
      
      var $15 = HEAP[$self_addr + 32];
      
      
      var $18 = HEAP[$15 + 8] - 1;
      var $19 = $15 + 8;
      HEAP[$19] = $18;
      
      
      
      
      $obj = HEAP[$12 + 4 * HEAP[$15 + 8]];
      
      if (HEAP[$12 + 4 * HEAP[$15 + 8]] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 16;
      break;
     case 4:
      
      
      
      var $28 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $28;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $39 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$39]($obj);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $47 = HEAP[_UnpicklingError];
      _PyErr_SetString($47, __str88);
      $obj = 0;
      __label__ = 9;
      break;
     case 8:
      
      
      
      
      var $52 = HEAP[HEAP[$self_addr + 32] + 16];
      
      
      var $55 = HEAP[$self_addr + 32];
      
      
      var $58 = HEAP[$55 + 8] - 1;
      var $59 = $55 + 8;
      HEAP[$59] = $58;
      
      
      
      
      $obj = HEAP[$52 + 4 * HEAP[$55 + 8]];
      
      if (HEAP[$52 + 4 * HEAP[$55 + 8]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = -1;
      __label__ = 16;
      break;
     case 10:
      
      
      
      var $68 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $68;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $79 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$79]($obj);
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      var $94 = HEAP[$self_addr + 32];
      var $95 = _Pdata_grow($94);
      
      if ($95 < 0) {
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
      
      var $98 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $98;
      
      
      
      
      
      
      
      var $106 = HEAP[$self_addr + 32];
      
      var $108 = HEAP[$106 + 8];
      var $109 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $108;
      HEAP[$109] = __Py_NoneStruct;
      var $110 = $108 + 1;
      var $111 = $106 + 8;
      HEAP[$111] = $110;
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
  function _noload_global($self) {
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
      var $s = __stackBase__;
      $self_addr = $self;
      
      
      var $3 = HEAP[$self_addr + 64];
      
      var $5 = FUNCTION_TABLE[$3]($self_addr, $s);
      
      if ($5 < 0) {
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
      
      
      var $9 = HEAP[$self_addr + 64];
      
      var $11 = FUNCTION_TABLE[$9]($self_addr, $s);
      
      if ($11 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 8;
      break;
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      var $26 = HEAP[$self_addr + 32];
      var $27 = _Pdata_grow($26);
      
      if ($27 < 0) {
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
      
      var $30 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $30;
      
      
      
      
      
      
      
      var $38 = HEAP[$self_addr + 32];
      
      var $40 = HEAP[$38 + 8];
      var $41 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $40;
      HEAP[$41] = __Py_NoneStruct;
      var $42 = $40 + 1;
      var $43 = $38 + 8;
      HEAP[$43] = $42;
      $0 = 0;
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
  function _noload_reduce($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] <= 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = _stackUnderflow();
      $0 = $7;
      __label__ = 6;
      break;
     case 2:
      
      
      
      
      
      var $13 = HEAP[HEAP[$self_addr + 32] + 8] - 2;
      
      
      var $16 = HEAP[$self_addr + 32];
      var $17 = _Pdata_clear($16, $13);
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $31 = HEAP[$self_addr + 32];
      var $32 = _Pdata_grow($31);
      
      if ($32 < 0) {
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
      
      var $35 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $35;
      
      
      
      
      
      
      
      var $43 = HEAP[$self_addr + 32];
      
      var $45 = HEAP[$43 + 8];
      var $46 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $45;
      HEAP[$46] = __Py_NoneStruct;
      var $47 = $45 + 1;
      var $48 = $43 + 8;
      HEAP[$48] = $47;
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
  function _noload_build($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = _stackUnderflow();
      $0 = $7;
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      
      var $13 = HEAP[HEAP[$self_addr + 32] + 8] - 1;
      
      
      var $16 = HEAP[$self_addr + 32];
      var $17 = _Pdata_clear($16, $13);
      $0 = 0;
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
  function _noload_extension($self, $nbytes) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $nbytes_addr;
      var $retval;
      var $0;
      var $codebytes = __stackBase__;
      $self_addr = $self;
      $nbytes_addr = $nbytes;
      
      
      
      
      
      
      
      
      if ($nbytes_addr != 1 & $nbytes_addr != 2 & $nbytes_addr != 4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str93, __str15, 5056, ___PRETTY_FUNCTION___15558);
      throw "Reached an unreachable!";
     case 2:
      
      
      var $9 = HEAP[$self_addr + 60];
      
      
      var $12 = FUNCTION_TABLE[$9]($self_addr, $codebytes, $nbytes_addr);
      
      if ($12 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 8;
      break;
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] == HEAP[HEAP[$self_addr + 32] + 12]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      var $27 = HEAP[$self_addr + 32];
      var $28 = _Pdata_grow($27);
      
      if ($28 < 0) {
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
      
      var $31 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $31;
      
      
      
      
      
      
      
      var $39 = HEAP[$self_addr + 32];
      
      var $41 = HEAP[$39 + 8];
      var $42 = HEAP[HEAP[$self_addr + 32] + 16] + 4 * $41;
      HEAP[$42] = __Py_NoneStruct;
      var $43 = $41 + 1;
      var $44 = $39 + 8;
      HEAP[$44] = $43;
      $0 = 0;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval10 = $retval;
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _noload_append($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    
    
    
    var $6 = HEAP[HEAP[$self_addr + 32] + 8] - 1;
    
    
    var $9 = HEAP[$self_addr + 32];
    var $10 = _Pdata_clear($9, $6);
    $0 = $10;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _noload_appends($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $i;
      $self_addr = $self;
      
      var $2 = _marker($self_addr);
      $i = $2;
      
      
      if ($i < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
      
      
      var $7 = HEAP[$self_addr + 32];
      
      var $9 = _Pdata_clear($7, $i);
      $0 = $9;
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
  function _noload_setitem($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    
    
    
    var $6 = HEAP[HEAP[$self_addr + 32] + 8] - 2;
    
    
    var $9 = HEAP[$self_addr + 32];
    var $10 = _Pdata_clear($9, $6);
    $0 = $10;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _noload_setitems($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $i;
      $self_addr = $self;
      
      var $2 = _marker($self_addr);
      $i = $2;
      
      
      if ($i < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 3;
      break;
     case 2:
      
      
      var $7 = HEAP[$self_addr + 32];
      
      var $9 = _Pdata_clear($7, $i);
      $0 = $9;
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
  function _noload($self) {
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
      var $err;
      var $val;
      var $s = __stackBase__;
      $self_addr = $self;
      $err = 0;
      $val = 0;
      
      
      HEAP[$self_addr + 52] = 0;
      
      
      var $5 = HEAP[$self_addr + 32];
      var $6 = _Pdata_clear($5, 0);
      __label__ = 1;
      break;
     case 1:
      
      
      var $9 = HEAP[$self_addr + 60];
      
      var $11 = FUNCTION_TABLE[$9]($self_addr, $s, 1);
      
      if ($11 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $16 = HEAP[HEAP[$s]];
      if ($16 == -128) {
        __label__ = 52;
        break;
      } else if ($16 == -127) {
        __label__ = 29;
        break;
      } else if ($16 == -126) {
        __label__ = 38;
        break;
      } else if ($16 == -125) {
        __label__ = 39;
        break;
      } else if ($16 == -124) {
        __label__ = 40;
        break;
      } else if ($16 == -123) {
        __label__ = 19;
        break;
      } else if ($16 == -122) {
        __label__ = 20;
        break;
      } else if ($16 == -121) {
        __label__ = 21;
        break;
      } else if ($16 == -120) {
        __label__ = 53;
        break;
      } else if ($16 == -119) {
        __label__ = 54;
        break;
      } else if ($16 == -118) {
        __label__ = 9;
        break;
      } else if ($16 == -117) {
        __label__ = 10;
        break;
      } else if ($16 == 40) {
        __label__ = 41;
        break;
      } else if ($16 == 41) {
        __label__ = 18;
        break;
      } else if ($16 == 46) {
        __label__ = 56;
        break;
      } else if ($16 == 48) {
        __label__ = 45;
        break;
      } else if ($16 == 49) {
        __label__ = 46;
        break;
      } else if ($16 == 50) {
        __label__ = 34;
        break;
      } else if ($16 == 70) {
        __label__ = 11;
        break;
      } else if ($16 == 71) {
        __label__ = 12;
        break;
      } else if ($16 == 73) {
        __label__ = 7;
        break;
      } else if ($16 == 74) {
        __label__ = 4;
        break;
      } else if ($16 == 75) {
        __label__ = 5;
        break;
      } else if ($16 == 76) {
        __label__ = 8;
        break;
      } else if ($16 == 77) {
        __label__ = 6;
        break;
      } else if ($16 == 78) {
        __label__ = 3;
        break;
      } else if ($16 == 80) {
        __label__ = 49;
        break;
      } else if ($16 == 81) {
        __label__ = 50;
        break;
      } else if ($16 == 82) {
        __label__ = 51;
        break;
      } else if ($16 == 83) {
        __label__ = 15;
        break;
      } else if ($16 == 84) {
        __label__ = 13;
        break;
      } else if ($16 == 85) {
        __label__ = 14;
        break;
      } else if ($16 == 86) {
        __label__ = 16;
        break;
      } else if ($16 == 88) {
        __label__ = 17;
        break;
      } else if ($16 == 93) {
        __label__ = 23;
        break;
      } else if ($16 == 97) {
        __label__ = 31;
        break;
      } else if ($16 == 98) {
        __label__ = 33;
        break;
      } else if ($16 == 99) {
        __label__ = 30;
        break;
      } else if ($16 == 100) {
        __label__ = 26;
        break;
      } else if ($16 == 101) {
        __label__ = 32;
        break;
      } else if ($16 == 103) {
        __label__ = 37;
        break;
      } else if ($16 == 104) {
        __label__ = 35;
        break;
      } else if ($16 == 105) {
        __label__ = 28;
        break;
      } else if ($16 == 106) {
        __label__ = 36;
        break;
      } else if ($16 == 108) {
        __label__ = 24;
        break;
      } else if ($16 == 111) {
        __label__ = 27;
        break;
      } else if ($16 == 112) {
        __label__ = 44;
        break;
      } else if ($16 == 113) {
        __label__ = 42;
        break;
      } else if ($16 == 114) {
        __label__ = 43;
        break;
      } else if ($16 == 115) {
        __label__ = 47;
        break;
      } else if ($16 == 116) {
        __label__ = 22;
        break;
      } else if ($16 == 117) {
        __label__ = 48;
        break;
      } else if ($16 == 125) {
        __label__ = 25;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 3:
      
      var $18 = _load_none($self_addr);
      
      if ($18 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 4:
      
      var $21 = _load_binint($self_addr);
      
      if ($21 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 5:
      
      var $24 = _load_binint1($self_addr);
      
      if ($24 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 6:
      
      var $27 = _load_binint2($self_addr);
      
      if ($27 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 7:
      
      var $30 = _load_int($self_addr);
      
      if ($30 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 8:
      
      var $33 = _load_long($self_addr);
      
      if ($33 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 9:
      
      var $36 = _load_counted_long($self_addr, 1);
      
      if ($36 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 10:
      
      var $39 = _load_counted_long($self_addr, 4);
      
      if ($39 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 11:
      
      var $42 = _load_float($self_addr);
      
      if ($42 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 12:
      
      var $45 = _load_binfloat($self_addr);
      
      if ($45 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 13:
      
      var $48 = _load_binstring($self_addr);
      
      if ($48 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 14:
      
      var $51 = _load_short_binstring($self_addr);
      
      if ($51 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 15:
      
      var $54 = _load_string($self_addr);
      
      if ($54 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 16:
      
      var $57 = _load_unicode($self_addr);
      
      if ($57 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 17:
      
      var $60 = _load_binunicode($self_addr);
      
      if ($60 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 18:
      
      var $63 = _load_counted_tuple($self_addr, 0);
      
      if ($63 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 19:
      
      var $66 = _load_counted_tuple($self_addr, 1);
      
      if ($66 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 20:
      
      var $69 = _load_counted_tuple($self_addr, 2);
      
      if ($69 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 21:
      
      var $72 = _load_counted_tuple($self_addr, 3);
      
      if ($72 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 22:
      
      var $75 = _load_tuple($self_addr);
      
      if ($75 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 23:
      
      var $78 = _load_empty_list($self_addr);
      
      if ($78 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 24:
      
      var $81 = _load_list($self_addr);
      
      if ($81 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 25:
      
      var $84 = _load_empty_dict($self_addr);
      
      if ($84 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 26:
      
      var $87 = _load_dict($self_addr);
      
      if ($87 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 27:
      
      var $90 = _noload_obj($self_addr);
      
      if ($90 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 28:
      
      var $93 = _noload_inst($self_addr);
      
      if ($93 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 29:
      
      var $96 = _noload_newobj($self_addr);
      
      if ($96 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 30:
      
      var $99 = _noload_global($self_addr);
      
      if ($99 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 31:
      
      var $102 = _noload_append($self_addr);
      
      if ($102 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 32:
      
      var $105 = _noload_appends($self_addr);
      
      if ($105 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 33:
      
      var $108 = _noload_build($self_addr);
      
      if ($108 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 34:
      
      var $111 = _load_dup($self_addr);
      
      if ($111 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 35:
      
      var $114 = _load_binget($self_addr);
      
      if ($114 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 36:
      
      var $117 = _load_long_binget($self_addr);
      
      if ($117 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 37:
      
      var $120 = _load_get($self_addr);
      
      if ($120 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 38:
      
      var $123 = _noload_extension($self_addr, 1);
      
      if ($123 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 39:
      
      var $126 = _noload_extension($self_addr, 2);
      
      if ($126 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 40:
      
      var $129 = _noload_extension($self_addr, 4);
      
      if ($129 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 41:
      
      var $132 = _load_mark($self_addr);
      
      if ($132 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 42:
      
      var $135 = _load_binput($self_addr);
      
      if ($135 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 43:
      
      var $138 = _load_long_binput($self_addr);
      
      if ($138 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 44:
      
      var $141 = _load_put($self_addr);
      
      if ($141 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 45:
      
      var $144 = _load_pop($self_addr);
      
      if ($144 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 46:
      
      var $147 = _load_pop_mark($self_addr);
      
      if ($147 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 47:
      
      var $150 = _noload_setitem($self_addr);
      
      if ($150 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 48:
      
      var $153 = _noload_setitems($self_addr);
      
      if ($153 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 49:
      
      var $156 = _load_persid($self_addr);
      
      if ($156 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 50:
      
      var $159 = _load_binpersid($self_addr);
      
      if ($159 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 51:
      
      var $162 = _noload_reduce($self_addr);
      
      if ($162 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 52:
      
      var $165 = _load_proto($self_addr);
      
      if ($165 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 53:
      
      var $168 = _load_bool($self_addr, __Py_TrueStruct);
      
      if ($168 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 54:
      
      var $171 = _load_bool($self_addr, __Py_ZeroStruct);
      
      if ($171 < 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 55:
      
      
      
      var $176 = HEAP[HEAP[$s]];
      var $177 = HEAP[_UnpicklingError];
      _cPickle_ErrFormat($177, __str101, __str102, allocate([ $176, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 64;
      break;
     case 56:
      var $178 = _PyErr_Occurred();
      $err = $178;
      
      if ($178 != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 57:
      
      
      
      if ($err == HEAP[_PyExc_EOFError]) {
        __label__ = 58;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 58:
      var $183 = HEAP[_PyExc_EOFError];
      _PyErr_SetNone($183);
      __label__ = 59;
      break;
     case 59:
      $0 = 0;
      __label__ = 64;
      break;
     case 60:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 32] + 8] != 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      
      
      
      
      var $194 = HEAP[HEAP[$self_addr + 32] + 16];
      
      
      var $197 = HEAP[$self_addr + 32];
      
      
      var $200 = HEAP[$197 + 8] - 1;
      var $201 = $197 + 8;
      HEAP[$201] = $200;
      
      
      
      
      $val = HEAP[$194 + 4 * HEAP[$197 + 8]];
      __label__ = 63;
      break;
     case 62:
      var $206 = HEAP[_UnpicklingError];
      _PyErr_SetString($206, __str88);
      $val = 0;
      __label__ = 63;
      break;
     case 63:
      
      $0 = $val;
      __label__ = 64;
      break;
     case 64:
      
      $retval = $0;
      var $retval119 = $retval;
      STACKTOP = __stackBase__;
      return $retval119;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Unpickler_load($self, $unused) {
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $unused_addr = $unused;
    
    var $2 = _load($self_addr);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _Unpickler_noload($self, $unused) {
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $unused_addr = $unused;
    
    var $2 = _noload($self_addr);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _newUnpicklerobject($f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $f_addr;
      var $retval;
      var $0;
      var $self;
      $f_addr = $f;
      var $1 = __PyObject_GC_New(_Unpicklertype);
      
      $self = $1;
      
      
      if ($self == 0) {
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
      
      
      HEAP[$self + 12] = 0;
      
      
      HEAP[$self + 28] = 0;
      var $9 = _Pdata_New();
      
      
      
      HEAP[$self + 32] = $9;
      
      
      HEAP[$self + 40] = 0;
      
      
      HEAP[$self + 44] = 0;
      
      
      HEAP[$self + 48] = 0;
      
      
      HEAP[$self + 52] = 0;
      
      
      HEAP[$self + 56] = 0;
      
      
      HEAP[$self + 68] = 0;
      
      
      HEAP[$self + 20] = 0;
      
      
      HEAP[$self + 16] = 0;
      
      
      HEAP[$self + 76] = 0;
      var $31 = _PyDict_New();
      
      
      HEAP[$self + 24] = $31;
      
      
      
      
      if (HEAP[$self + 24] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      if (HEAP[$self + 32] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $45 = HEAP[$f_addr] + 1;
      
      
      HEAP[$f_addr] = $45;
      
      
      
      HEAP[$self + 12] = $f_addr;
      
      
      
      
      if (HEAP[$f_addr + 4] == _PyFile_Type) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      var $57 = HEAP[$f_addr + 4];
      var $58 = _PyType_IsSubtype($57, _PyFile_Type);
      
      if ($58 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      var $61 = _PyFile_AsFile($f_addr);
      
      
      HEAP[$self + 8] = $61;
      
      
      
      
      if (HEAP[$self + 8] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $68 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($68, __str61);
      __label__ = 15;
      break;
     case 8:
      
      
      HEAP[$self + 60] = FUNCTION_TABLE_OFFSET + 12;
      
      
      HEAP[$self + 64] = FUNCTION_TABLE_OFFSET + 14;
      __label__ = 14;
      break;
     case 9:
      
      
      
      
      
      
      var $79 = HEAP[$f_addr + 4] == HEAP[HEAP[_PycStringIO] + 24];
      
      
      HEAP[$self + 8] = 0;
      
      var $83 = $self + 60;
      if ($79) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$83] = FUNCTION_TABLE_OFFSET + 16;
      
      
      HEAP[$self + 64] = FUNCTION_TABLE_OFFSET + 18;
      __label__ = 14;
      break;
     case 11:
      HEAP[$83] = FUNCTION_TABLE_OFFSET + 20;
      
      
      HEAP[$self + 64] = FUNCTION_TABLE_OFFSET + 22;
      var $88 = HEAP[_readline_str];
      
      var $90 = _PyObject_GetAttr($f_addr, $88);
      
      
      HEAP[$self + 16] = $90;
      
      
      
      
      if (HEAP[$self + 16] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $97 = HEAP[_read_str];
      
      var $99 = _PyObject_GetAttr($f_addr, $97);
      
      
      HEAP[$self + 20] = $99;
      
      
      
      
      if (HEAP[$self + 20] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      _PyErr_Clear();
      var $106 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($106, __str107);
      __label__ = 15;
      break;
     case 14:
      
      
      _PyObject_GC_Track($self);
      
      $0 = $self;
      __label__ = 18;
      break;
     case 15:
      
      
      
      
      var $114 = HEAP[$self] - 1;
      
      HEAP[$self] = $114;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      var $124 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$124]($self);
      __label__ = 17;
      break;
     case 17:
      $0 = 0;
      __label__ = 18;
      break;
     case 18:
      
      $retval = $0;
      var $retval17 = $retval;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _get_Unpickler($self, $file) {
    
    var $self_addr;
    var $file_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $file_addr = $file;
    
    var $2 = _newUnpicklerobject($file_addr);
    
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _Unpickler_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      _PyObject_GC_UnTrack($self_addr);
      
      
      
      
      if (HEAP[$self_addr + 16] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$self_addr + 16];
      
      
      var $11 = HEAP[$8] - 1;
      var $12 = $8;
      HEAP[$12] = $11;
      
      
      
      if (HEAP[$8] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$self_addr + 16] + 4] + 24];
      
      
      var $25 = HEAP[$self_addr + 16];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[$self_addr + 20];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$self_addr + 20] + 4] + 24];
      
      
      var $49 = HEAP[$self_addr + 20];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $56 = HEAP[$self_addr + 12];
      
      
      var $59 = HEAP[$56] - 1;
      var $60 = $56;
      HEAP[$60] = $59;
      
      
      
      if (HEAP[$56] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $70 = HEAP[HEAP[HEAP[$self_addr + 12] + 4] + 24];
      
      
      var $73 = HEAP[$self_addr + 12];
      FUNCTION_TABLE[$70]($73);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $80 = HEAP[$self_addr + 24];
      
      
      var $83 = HEAP[$80] - 1;
      var $84 = $80;
      HEAP[$84] = $83;
      
      
      
      if (HEAP[$80] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      var $94 = HEAP[HEAP[HEAP[$self_addr + 24] + 4] + 24];
      
      
      var $97 = HEAP[$self_addr + 24];
      FUNCTION_TABLE[$94]($97);
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      if (HEAP[$self_addr + 32] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      
      var $105 = HEAP[$self_addr + 32];
      
      
      var $108 = HEAP[$105] - 1;
      var $109 = $105;
      HEAP[$109] = $108;
      
      
      
      if (HEAP[$105] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      
      
      var $120 = HEAP[HEAP[HEAP[$self_addr + 32] + 4] + 24];
      
      
      
      var $124 = HEAP[$self_addr + 32];
      FUNCTION_TABLE[$120]($124);
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      if (HEAP[$self_addr + 40] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      var $131 = HEAP[$self_addr + 40];
      
      
      var $134 = HEAP[$131] - 1;
      var $135 = $131;
      HEAP[$135] = $134;
      
      
      
      if (HEAP[$131] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      
      var $145 = HEAP[HEAP[HEAP[$self_addr + 40] + 4] + 24];
      
      
      var $148 = HEAP[$self_addr + 40];
      FUNCTION_TABLE[$145]($148);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $155 = HEAP[$self_addr + 28];
      
      
      var $158 = HEAP[$155] - 1;
      var $159 = $155;
      HEAP[$159] = $158;
      
      
      
      if (HEAP[$155] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      
      
      var $169 = HEAP[HEAP[HEAP[$self_addr + 28] + 4] + 24];
      
      
      var $172 = HEAP[$self_addr + 28];
      FUNCTION_TABLE[$169]($172);
      __label__ = 21;
      break;
     case 21:
      
      
      
      
      if (HEAP[$self_addr + 44] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      var $179 = HEAP[$self_addr + 44];
      
      
      var $182 = HEAP[$179] - 1;
      var $183 = $179;
      HEAP[$183] = $182;
      
      
      
      if (HEAP[$179] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      
      
      var $193 = HEAP[HEAP[HEAP[$self_addr + 44] + 4] + 24];
      
      
      var $196 = HEAP[$self_addr + 44];
      FUNCTION_TABLE[$193]($196);
      __label__ = 24;
      break;
     case 24:
      
      
      
      
      if (HEAP[$self_addr + 76] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      var $203 = HEAP[$self_addr + 76];
      
      
      var $206 = HEAP[$203] - 1;
      var $207 = $203;
      HEAP[$207] = $206;
      
      
      
      if (HEAP[$203] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      
      
      var $217 = HEAP[HEAP[HEAP[$self_addr + 76] + 4] + 24];
      
      
      var $220 = HEAP[$self_addr + 76];
      FUNCTION_TABLE[$217]($220);
      __label__ = 27;
      break;
     case 27:
      
      
      
      
      if (HEAP[$self_addr + 48] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      var $228 = HEAP[$self_addr + 48];
      _free($228);
      __label__ = 29;
      break;
     case 29:
      
      
      
      
      if (HEAP[$self_addr + 68] != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      var $235 = HEAP[$self_addr + 72];
      _free($235);
      __label__ = 31;
      break;
     case 31:
      
      
      
      
      
      var $241 = HEAP[HEAP[$self_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$241]($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Unpickler_traverse($self, $visit, $arg) {
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
      var $vret4;
      var $vret8;
      var $vret12;
      var $vret16;
      var $vret20;
      var $vret24;
      var $vret28;
      var $vret32;
      $self_addr = $self;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$self_addr + 16] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$self_addr + 16];
      var $8 = $visit_addr;
      
      var $10 = FUNCTION_TABLE[$8]($7, $arg_addr);
      $vret = $10;
      
      
      if ($vret != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      $0 = $vret;
      __label__ = 28;
      break;
     case 3:
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$self_addr + 20];
      var $21 = $visit_addr;
      
      var $23 = FUNCTION_TABLE[$21]($20, $arg_addr);
      $vret4 = $23;
      
      
      if ($vret4 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      $0 = $vret4;
      __label__ = 28;
      break;
     case 6:
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $33 = HEAP[$self_addr + 12];
      var $34 = $visit_addr;
      
      var $36 = FUNCTION_TABLE[$34]($33, $arg_addr);
      $vret8 = $36;
      
      
      if ($vret8 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      $0 = $vret8;
      __label__ = 28;
      break;
     case 9:
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $46 = HEAP[$self_addr + 24];
      var $47 = $visit_addr;
      
      var $49 = FUNCTION_TABLE[$47]($46, $arg_addr);
      $vret12 = $49;
      
      
      if ($vret12 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      $0 = $vret12;
      __label__ = 28;
      break;
     case 12:
      
      
      
      
      if (HEAP[$self_addr + 32] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      
      var $60 = HEAP[$self_addr + 32];
      var $61 = $visit_addr;
      
      var $63 = FUNCTION_TABLE[$61]($60, $arg_addr);
      $vret16 = $63;
      
      
      if ($vret16 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      $0 = $vret16;
      __label__ = 28;
      break;
     case 15:
      
      
      
      
      if (HEAP[$self_addr + 40] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      var $73 = HEAP[$self_addr + 40];
      var $74 = $visit_addr;
      
      var $76 = FUNCTION_TABLE[$74]($73, $arg_addr);
      $vret20 = $76;
      
      
      if ($vret20 != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      $0 = $vret20;
      __label__ = 28;
      break;
     case 18:
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $86 = HEAP[$self_addr + 28];
      var $87 = $visit_addr;
      
      var $89 = FUNCTION_TABLE[$87]($86, $arg_addr);
      $vret24 = $89;
      
      
      if ($vret24 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      $0 = $vret24;
      __label__ = 28;
      break;
     case 21:
      
      
      
      
      if (HEAP[$self_addr + 44] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      var $99 = HEAP[$self_addr + 44];
      var $100 = $visit_addr;
      
      var $102 = FUNCTION_TABLE[$100]($99, $arg_addr);
      $vret28 = $102;
      
      
      if ($vret28 != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      $0 = $vret28;
      __label__ = 28;
      break;
     case 24:
      
      
      
      
      if (HEAP[$self_addr + 76] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      var $112 = HEAP[$self_addr + 76];
      var $113 = $visit_addr;
      
      var $115 = FUNCTION_TABLE[$113]($112, $arg_addr);
      $vret32 = $115;
      
      
      if ($vret32 != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      $0 = $vret32;
      __label__ = 28;
      break;
     case 27:
      $0 = 0;
      __label__ = 28;
      break;
     case 28:
      
      $retval = $0;
      var $retval36 = $retval;
      return $retval36;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Unpickler_clear($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $_py_tmp;
      var $_py_tmp4;
      var $_py_tmp8;
      var $_py_tmp12;
      var $_py_tmp16;
      var $_py_tmp20;
      var $_py_tmp24;
      var $_py_tmp28;
      var $_py_tmp32;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 16] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      $_py_tmp = HEAP[$self_addr + 16];
      
      
      HEAP[$self_addr + 16] = 0;
      
      
      
      var $13 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $13;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $24 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$24]($_py_tmp);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      $_py_tmp4 = HEAP[$self_addr + 20];
      
      
      HEAP[$self_addr + 20] = 0;
      
      
      
      var $38 = HEAP[$_py_tmp4] - 1;
      
      
      HEAP[$_py_tmp4] = $38;
      
      
      
      
      if (HEAP[$_py_tmp4] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $49 = HEAP[HEAP[$_py_tmp4 + 4] + 24];
      
      FUNCTION_TABLE[$49]($_py_tmp4);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      $_py_tmp8 = HEAP[$self_addr + 12];
      
      
      HEAP[$self_addr + 12] = 0;
      
      
      
      var $63 = HEAP[$_py_tmp8] - 1;
      
      
      HEAP[$_py_tmp8] = $63;
      
      
      
      
      if (HEAP[$_py_tmp8] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $74 = HEAP[HEAP[$_py_tmp8 + 4] + 24];
      
      FUNCTION_TABLE[$74]($_py_tmp8);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      $_py_tmp12 = HEAP[$self_addr + 24];
      
      
      HEAP[$self_addr + 24] = 0;
      
      
      
      var $88 = HEAP[$_py_tmp12] - 1;
      
      
      HEAP[$_py_tmp12] = $88;
      
      
      
      
      if (HEAP[$_py_tmp12] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $99 = HEAP[HEAP[$_py_tmp12 + 4] + 24];
      
      FUNCTION_TABLE[$99]($_py_tmp12);
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      if (HEAP[$self_addr + 32] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      
      
      $_py_tmp16 = HEAP[$self_addr + 32];
      
      
      HEAP[$self_addr + 32] = 0;
      
      
      
      var $114 = HEAP[$_py_tmp16] - 1;
      
      
      HEAP[$_py_tmp16] = $114;
      
      
      
      
      if (HEAP[$_py_tmp16] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $125 = HEAP[HEAP[$_py_tmp16 + 4] + 24];
      
      FUNCTION_TABLE[$125]($_py_tmp16);
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      if (HEAP[$self_addr + 40] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      $_py_tmp20 = HEAP[$self_addr + 40];
      
      
      HEAP[$self_addr + 40] = 0;
      
      
      
      var $139 = HEAP[$_py_tmp20] - 1;
      
      
      HEAP[$_py_tmp20] = $139;
      
      
      
      
      if (HEAP[$_py_tmp20] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $150 = HEAP[HEAP[$_py_tmp20 + 4] + 24];
      
      FUNCTION_TABLE[$150]($_py_tmp20);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      if (HEAP[$self_addr + 28] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      
      $_py_tmp24 = HEAP[$self_addr + 28];
      
      
      HEAP[$self_addr + 28] = 0;
      
      
      
      var $164 = HEAP[$_py_tmp24] - 1;
      
      
      HEAP[$_py_tmp24] = $164;
      
      
      
      
      if (HEAP[$_py_tmp24] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $175 = HEAP[HEAP[$_py_tmp24 + 4] + 24];
      
      FUNCTION_TABLE[$175]($_py_tmp24);
      __label__ = 21;
      break;
     case 21:
      
      
      
      
      if (HEAP[$self_addr + 44] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      
      $_py_tmp28 = HEAP[$self_addr + 44];
      
      
      HEAP[$self_addr + 44] = 0;
      
      
      
      var $189 = HEAP[$_py_tmp28] - 1;
      
      
      HEAP[$_py_tmp28] = $189;
      
      
      
      
      if (HEAP[$_py_tmp28] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $200 = HEAP[HEAP[$_py_tmp28 + 4] + 24];
      
      FUNCTION_TABLE[$200]($_py_tmp28);
      __label__ = 24;
      break;
     case 24:
      
      
      
      
      if (HEAP[$self_addr + 76] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      
      $_py_tmp32 = HEAP[$self_addr + 76];
      
      
      HEAP[$self_addr + 76] = 0;
      
      
      
      var $214 = HEAP[$_py_tmp32] - 1;
      
      
      HEAP[$_py_tmp32] = $214;
      
      
      
      
      if (HEAP[$_py_tmp32] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $225 = HEAP[HEAP[$_py_tmp32 + 4] + 24];
      
      FUNCTION_TABLE[$225]($_py_tmp32);
      __label__ = 27;
      break;
     case 27:
      $0 = 0;
      
      $retval = $0;
      var $retval35 = $retval;
      return $retval35;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _Unpickler_getattr($self, $name) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $name_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $name_addr = $name;
      
      var $2 = _strcmp($name_addr, __str108);
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$self_addr + 40] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $8 = HEAP[_PyExc_AttributeError];
      
      _PyErr_SetString($8, $name_addr);
      $0 = 0;
      __label__ = 15;
      break;
     case 3:
      
      
      
      
      
      var $15 = HEAP[HEAP[$self_addr + 40]] + 1;
      var $16 = HEAP[$self_addr + 40];
      HEAP[$16] = $15;
      
      
      
      $0 = HEAP[$self_addr + 40];
      __label__ = 15;
      break;
     case 4:
      
      var $21 = _strcmp($name_addr, __str109);
      
      if ($21 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[$self_addr + 76] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $27 = HEAP[_PyExc_AttributeError];
      
      _PyErr_SetString($27, $name_addr);
      $0 = 0;
      __label__ = 15;
      break;
     case 7:
      
      
      
      
      
      var $34 = HEAP[HEAP[$self_addr + 76]] + 1;
      var $35 = HEAP[$self_addr + 76];
      HEAP[$35] = $34;
      
      
      
      $0 = HEAP[$self_addr + 76];
      __label__ = 15;
      break;
     case 8:
      
      var $40 = _strcmp($name_addr, __str70);
      
      if ($40 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[$self_addr + 24] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $46 = HEAP[_PyExc_AttributeError];
      
      _PyErr_SetString($46, $name_addr);
      $0 = 0;
      __label__ = 15;
      break;
     case 11:
      
      
      
      
      
      var $53 = HEAP[HEAP[$self_addr + 24]] + 1;
      var $54 = HEAP[$self_addr + 24];
      HEAP[$54] = $53;
      
      
      
      $0 = HEAP[$self_addr + 24];
      __label__ = 15;
      break;
     case 12:
      
      var $59 = _strcmp($name_addr, __str110);
      
      if ($59 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      var $64 = HEAP[HEAP[_UnpicklingError]] + 1;
      var $65 = HEAP[_UnpicklingError];
      HEAP[$65] = $64;
      
      $0 = HEAP[_UnpicklingError];
      __label__ = 15;
      break;
     case 14:
      
      
      
      var $70 = _Py_FindMethod(_Unpickler_methods, $self_addr, $name_addr);
      $0 = $70;
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
  function _Unpickler_setattr($self, $name, $value) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $name_addr;
      var $value_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $name_addr = $name;
      $value_addr = $value;
      
      var $2 = _strcmp($name_addr, __str108);
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$self_addr + 40] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      var $10 = HEAP[$self_addr + 40];
      
      
      var $13 = HEAP[$10] - 1;
      var $14 = $10;
      HEAP[$14] = $13;
      
      
      
      if (HEAP[$10] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $24 = HEAP[HEAP[HEAP[$self_addr + 40] + 4] + 24];
      
      
      var $27 = HEAP[$self_addr + 40];
      FUNCTION_TABLE[$24]($27);
      __label__ = 4;
      break;
     case 4:
      
      
      
      HEAP[$self_addr + 40] = $value_addr;
      
      
      if ($value_addr != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      var $36 = HEAP[$value_addr] + 1;
      
      
      HEAP[$value_addr] = $36;
      __label__ = 6;
      break;
     case 6:
      $0 = 0;
      __label__ = 24;
      break;
     case 7:
      
      var $40 = _strcmp($name_addr, __str109);
      
      if ($40 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[$self_addr + 76] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      var $48 = HEAP[$self_addr + 76];
      
      
      var $51 = HEAP[$48] - 1;
      var $52 = $48;
      HEAP[$52] = $51;
      
      
      
      if (HEAP[$48] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      var $62 = HEAP[HEAP[HEAP[$self_addr + 76] + 4] + 24];
      
      
      var $65 = HEAP[$self_addr + 76];
      FUNCTION_TABLE[$62]($65);
      __label__ = 11;
      break;
     case 11:
      
      
      
      HEAP[$self_addr + 76] = $value_addr;
      
      
      if ($value_addr != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      var $74 = HEAP[$value_addr] + 1;
      
      
      HEAP[$value_addr] = $74;
      __label__ = 13;
      break;
     case 13:
      $0 = 0;
      __label__ = 24;
      break;
     case 14:
      
      
      if ($value_addr == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $79 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($79, __str69);
      $0 = -1;
      __label__ = 24;
      break;
     case 16:
      
      var $81 = _strcmp($name_addr, __str70);
      
      if ($81 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$value_addr + 4] + 84] & 536870912) == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $90 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($90, __str71);
      $0 = -1;
      __label__ = 24;
      break;
     case 19:
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      
      
      var $97 = HEAP[$self_addr + 24];
      
      
      var $100 = HEAP[$97] - 1;
      var $101 = $97;
      HEAP[$101] = $100;
      
      
      
      if (HEAP[$97] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      
      
      var $111 = HEAP[HEAP[HEAP[$self_addr + 24] + 4] + 24];
      
      
      var $114 = HEAP[$self_addr + 24];
      FUNCTION_TABLE[$111]($114);
      __label__ = 22;
      break;
     case 22:
      
      
      
      HEAP[$self_addr + 24] = $value_addr;
      
      
      
      var $121 = HEAP[$value_addr] + 1;
      
      
      HEAP[$value_addr] = $121;
      $0 = 0;
      __label__ = 24;
      break;
     case 23:
      var $124 = HEAP[_PyExc_AttributeError];
      
      _PyErr_SetString($124, $name_addr);
      $0 = -1;
      __label__ = 24;
      break;
     case 24:
      
      $retval = $0;
      var $retval24 = $retval;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cpm_dump($self, $args, $kwds) {
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
      var $ob = __stackBase__;
      var $file = __stackBase__ + 4;
      var $res;
      var $pickler;
      var $proto = __stackBase__ + 8;
      $self_addr = $self;
      $args_addr = $args;
      $kwds_addr = $kwds;
      $res = 0;
      $pickler = 0;
      HEAP[$proto] = 0;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwds_addr, __str111, _kwlist_16354, allocate([ $ob, 0, 0, 0, $file, 0, 0, 0, $proto, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $5 = HEAP[$proto];
      var $6 = HEAP[$file];
      var $7 = _newPicklerobject($6, $5);
      $pickler = $7;
      
      
      if ($pickler == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $10 = HEAP[$ob];
      
      var $12 = _dump($pickler, $10);
      
      if ($12 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $15 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $15;
      $res = __Py_NoneStruct;
      __label__ = 4;
      break;
     case 4:
      
      
      if ($pickler != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      
      var $21 = HEAP[$pickler] - 1;
      
      HEAP[$pickler] = $21;
      
      
      
      if (HEAP[$pickler] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      var $31 = HEAP[HEAP[$pickler + 4] + 24];
      
      
      FUNCTION_TABLE[$31]($pickler);
      __label__ = 7;
      break;
     case 7:
      
      $0 = $res;
      
      $retval = $0;
      var $retval6 = $retval;
      STACKTOP = __stackBase__;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cpm_dumps($self, $args, $kwds) {
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
      var $ob = __stackBase__;
      var $file;
      var $res;
      var $pickler;
      var $proto = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      $kwds_addr = $kwds;
      $file = 0;
      $res = 0;
      $pickler = 0;
      HEAP[$proto] = 0;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwds_addr, __str113, _kwlist_16391, allocate([ $ob, 0, 0, 0, $proto, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[HEAP[_PycStringIO] + 16];
      var $8 = FUNCTION_TABLE[$7](128);
      $file = $8;
      
      
      if ($file == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $11 = HEAP[$proto];
      
      var $13 = _newPicklerobject($file, $11);
      $pickler = $13;
      
      
      if ($pickler == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $16 = HEAP[$ob];
      
      var $18 = _dump($pickler, $16);
      
      if ($18 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      var $22 = HEAP[HEAP[_PycStringIO] + 12];
      
      var $24 = FUNCTION_TABLE[$22]($file);
      $res = $24;
      __label__ = 5;
      break;
     case 5:
      
      
      if ($pickler != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      var $30 = HEAP[$pickler] - 1;
      
      HEAP[$pickler] = $30;
      
      
      
      if (HEAP[$pickler] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      var $40 = HEAP[HEAP[$pickler + 4] + 24];
      
      
      FUNCTION_TABLE[$40]($pickler);
      __label__ = 8;
      break;
     case 8:
      
      
      if ($file != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      var $48 = HEAP[$file] - 1;
      
      
      HEAP[$file] = $48;
      
      
      
      
      if (HEAP[$file] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $59 = HEAP[HEAP[$file + 4] + 24];
      
      FUNCTION_TABLE[$59]($file);
      __label__ = 11;
      break;
     case 11:
      
      $0 = $res;
      
      $retval = $0;
      var $retval10 = $retval;
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cpm_load($self, $ob) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $ob_addr;
      var $retval;
      var $0;
      var $unpickler;
      var $res;
      $self_addr = $self;
      $ob_addr = $ob;
      $unpickler = 0;
      $res = 0;
      
      var $2 = _newUnpicklerobject($ob_addr);
      $unpickler = $2;
      
      
      if ($unpickler == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $6 = _load($unpickler);
      $res = $6;
      
      
      if ($unpickler != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      
      var $12 = HEAP[$unpickler] - 1;
      
      HEAP[$unpickler] = $12;
      
      
      
      if (HEAP[$unpickler] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      var $22 = HEAP[HEAP[$unpickler + 4] + 24];
      
      
      FUNCTION_TABLE[$22]($unpickler);
      __label__ = 4;
      break;
     case 4:
      
      $0 = $res;
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cpm_loads($self, $args) {
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
      var $ob = __stackBase__;
      var $file;
      var $res;
      var $unpickler;
      $self_addr = $self;
      $args_addr = $args;
      $file = 0;
      $res = 0;
      $unpickler = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str114, allocate([ $ob, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[HEAP[_PycStringIO] + 20];
      var $7 = HEAP[$ob];
      var $8 = FUNCTION_TABLE[$6]($7);
      $file = $8;
      
      
      if ($file == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      var $12 = _newUnpicklerobject($file);
      $unpickler = $12;
      
      
      if ($unpickler == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $16 = _load($unpickler);
      $res = $16;
      __label__ = 4;
      break;
     case 4:
      
      
      if ($file != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      var $21 = HEAP[$file] - 1;
      
      
      HEAP[$file] = $21;
      
      
      
      
      if (HEAP[$file] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $32 = HEAP[HEAP[$file + 4] + 24];
      
      FUNCTION_TABLE[$32]($file);
      __label__ = 7;
      break;
     case 7:
      
      
      if ($unpickler != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      
      var $40 = HEAP[$unpickler] - 1;
      
      HEAP[$unpickler] = $40;
      
      
      
      if (HEAP[$unpickler] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      var $50 = HEAP[HEAP[$unpickler + 4] + 24];
      
      
      FUNCTION_TABLE[$50]($unpickler);
      __label__ = 10;
      break;
     case 10:
      
      $0 = $res;
      
      $retval = $0;
      var $retval9 = $retval;
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _init_stuff($module_dict) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $module_dict_addr;
      var $retval;
      var $0;
      var $copyreg;
      var $t;
      var $r;
      $module_dict_addr = $module_dict;
      var $1 = _PyType_Ready(_Unpicklertype);
      
      if ($1 < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 89;
      break;
     case 2:
      var $3 = _PyType_Ready(_Picklertype);
      
      if ($3 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 89;
      break;
     case 4:
      var $5 = _PyString_InternFromString(__str126);
      HEAP[___class___str] = $5;
      
      
      if (HEAP[___class___str] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 89;
      break;
     case 6:
      var $8 = _PyString_InternFromString(__str127);
      HEAP[___getinitargs___str] = $8;
      
      
      if (HEAP[___getinitargs___str] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = -1;
      __label__ = 89;
      break;
     case 8:
      var $11 = _PyString_InternFromString(__str128);
      HEAP[___dict___str] = $11;
      
      
      if (HEAP[___dict___str] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = -1;
      __label__ = 89;
      break;
     case 10:
      var $14 = _PyString_InternFromString(__str129);
      HEAP[___getstate___str] = $14;
      
      
      if (HEAP[___getstate___str] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = -1;
      __label__ = 89;
      break;
     case 12:
      var $17 = _PyString_InternFromString(__str130);
      HEAP[___setstate___str] = $17;
      
      
      if (HEAP[___setstate___str] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = -1;
      __label__ = 89;
      break;
     case 14:
      var $20 = _PyString_InternFromString(__str131);
      HEAP[___name___str] = $20;
      
      
      if (HEAP[___name___str] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $0 = -1;
      __label__ = 89;
      break;
     case 16:
      var $23 = _PyString_InternFromString(__str132);
      HEAP[___main___str] = $23;
      
      
      if (HEAP[___main___str] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      $0 = -1;
      __label__ = 89;
      break;
     case 18:
      var $26 = _PyString_InternFromString(__str133);
      HEAP[___reduce___str] = $26;
      
      
      if (HEAP[___reduce___str] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      $0 = -1;
      __label__ = 89;
      break;
     case 20:
      var $29 = _PyString_InternFromString(__str134);
      HEAP[___reduce_ex___str] = $29;
      
      
      if (HEAP[___reduce_ex___str] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      $0 = -1;
      __label__ = 89;
      break;
     case 22:
      var $32 = _PyString_InternFromString(__str135);
      HEAP[_write_str] = $32;
      
      
      if (HEAP[_write_str] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      $0 = -1;
      __label__ = 89;
      break;
     case 24:
      var $35 = _PyString_InternFromString(__str136);
      HEAP[_append_str] = $35;
      
      
      if (HEAP[_append_str] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      $0 = -1;
      __label__ = 89;
      break;
     case 26:
      var $38 = _PyString_InternFromString(__str137);
      HEAP[_read_str] = $38;
      
      
      if (HEAP[_read_str] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      $0 = -1;
      __label__ = 89;
      break;
     case 28:
      var $41 = _PyString_InternFromString(__str138);
      HEAP[_readline_str] = $41;
      
      
      if (HEAP[_readline_str] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      $0 = -1;
      __label__ = 89;
      break;
     case 30:
      var $44 = _PyString_InternFromString(__str139);
      HEAP[_dispatch_table_str] = $44;
      
      
      if (HEAP[_dispatch_table_str] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      $0 = -1;
      __label__ = 89;
      break;
     case 32:
      var $47 = _PyImport_ImportModule(__str63);
      $copyreg = $47;
      
      
      if ($copyreg == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      $0 = -1;
      __label__ = 89;
      break;
     case 34:
      var $50 = HEAP[_dispatch_table_str];
      
      var $52 = _PyObject_GetAttr($copyreg, $50);
      HEAP[_dispatch_table] = $52;
      
      
      if (HEAP[_dispatch_table] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      $0 = -1;
      __label__ = 89;
      break;
     case 36:
      
      var $56 = _PyObject_GetAttrString($copyreg, __str140);
      HEAP[_extension_registry] = $56;
      
      
      if (HEAP[_extension_registry] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      $0 = -1;
      __label__ = 89;
      break;
     case 38:
      
      var $60 = _PyObject_GetAttrString($copyreg, __str141);
      HEAP[_inverted_registry] = $60;
      
      
      if (HEAP[_inverted_registry] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      $0 = -1;
      __label__ = 89;
      break;
     case 40:
      
      var $64 = _PyObject_GetAttrString($copyreg, __str142);
      HEAP[_extension_cache] = $64;
      
      
      if (HEAP[_extension_cache] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      $0 = -1;
      __label__ = 89;
      break;
     case 42:
      
      
      
      var $70 = HEAP[$copyreg] - 1;
      
      
      HEAP[$copyreg] = $70;
      
      
      
      
      if (HEAP[$copyreg] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      
      
      var $81 = HEAP[HEAP[$copyreg + 4] + 24];
      
      FUNCTION_TABLE[$81]($copyreg);
      __label__ = 44;
      break;
     case 44:
      var $83 = _PyTuple_New(0);
      HEAP[_empty_tuple] = $83;
      
      if ($83 == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      $0 = -1;
      __label__ = 89;
      break;
     case 46:
      var $85 = _PyTuple_New(2);
      HEAP[_two_tuple] = $85;
      
      
      if (HEAP[_two_tuple] == 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      $0 = -1;
      __label__ = 89;
      break;
     case 48:
      
      var $89 = HEAP[_two_tuple];
      _PyObject_GC_UnTrack($89);
      var $90 = _PyImport_ImportModule(__str143);
      $t = $90;
      
      
      if ($t == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      $0 = -1;
      __label__ = 89;
      break;
     case 50:
      
      
      var $95 = _PyDict_SetItemString($module_dict_addr, __str144, $t);
      
      if ($95 < 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      $0 = -1;
      __label__ = 89;
      break;
     case 52:
      var $97 = _PyDict_New();
      $t = $97;
      
      
      if ($t == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      $0 = -1;
      __label__ = 89;
      break;
     case 54:
      
      
      var $102 = _PyRun_StringFlags(__str145, 257, $module_dict_addr, $t, 0);
      $r = $102;
      
      
      if ($r == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      $0 = -1;
      __label__ = 89;
      break;
     case 56:
      
      
      
      var $108 = HEAP[$r] - 1;
      
      
      HEAP[$r] = $108;
      
      
      
      
      if (HEAP[$r] == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      
      
      
      
      var $119 = HEAP[HEAP[$r + 4] + 24];
      
      FUNCTION_TABLE[$119]($r);
      __label__ = 58;
      break;
     case 58:
      
      var $122 = _PyErr_NewException(__str146, 0, $t);
      HEAP[_PickleError] = $122;
      
      if ($122 == 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      $0 = -1;
      __label__ = 89;
      break;
     case 60:
      
      
      
      var $127 = HEAP[$t] - 1;
      
      
      HEAP[$t] = $127;
      
      
      
      
      if (HEAP[$t] == 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      
      
      
      
      var $138 = HEAP[HEAP[$t + 4] + 24];
      
      FUNCTION_TABLE[$138]($t);
      __label__ = 62;
      break;
     case 62:
      var $140 = HEAP[_PickleError];
      var $141 = _PyErr_NewException(__str147, $140, 0);
      HEAP[_PicklingError] = $141;
      
      if ($141 == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      $0 = -1;
      __label__ = 89;
      break;
     case 64:
      var $143 = _PyDict_New();
      $t = $143;
      
      
      if ($t == 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      $0 = -1;
      __label__ = 89;
      break;
     case 66:
      
      
      var $148 = _PyRun_StringFlags(__str148, 257, $module_dict_addr, $t, 0);
      $r = $148;
      
      
      if ($r == 0) {
        __label__ = 67;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 67:
      $0 = -1;
      __label__ = 89;
      break;
     case 68:
      
      
      
      var $154 = HEAP[$r] - 1;
      
      
      HEAP[$r] = $154;
      
      
      
      
      if (HEAP[$r] == 0) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      
      
      
      
      var $165 = HEAP[HEAP[$r + 4] + 24];
      
      FUNCTION_TABLE[$165]($r);
      __label__ = 70;
      break;
     case 70:
      var $167 = HEAP[_PicklingError];
      
      var $169 = _PyErr_NewException(__str149, $167, $t);
      HEAP[_UnpickleableError] = $169;
      
      if ($169 == 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 71:
      $0 = -1;
      __label__ = 89;
      break;
     case 72:
      
      
      
      var $174 = HEAP[$t] - 1;
      
      
      HEAP[$t] = $174;
      
      
      
      
      if (HEAP[$t] == 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 73:
      
      
      
      
      var $185 = HEAP[HEAP[$t + 4] + 24];
      
      FUNCTION_TABLE[$185]($t);
      __label__ = 74;
      break;
     case 74:
      var $187 = HEAP[_PickleError];
      var $188 = _PyErr_NewException(__str150, $187, 0);
      HEAP[_UnpicklingError] = $188;
      
      if ($188 == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      $0 = -1;
      __label__ = 89;
      break;
     case 76:
      var $190 = HEAP[_UnpicklingError];
      var $191 = _PyErr_NewException(__str151, $190, 0);
      HEAP[_BadPickleGet] = $191;
      
      
      if (HEAP[_BadPickleGet] == 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 77:
      $0 = -1;
      __label__ = 89;
      break;
     case 78:
      var $194 = HEAP[_PickleError];
      
      var $196 = _PyDict_SetItemString($module_dict_addr, __str152, $194);
      
      if ($196 < 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 79:
      $0 = -1;
      __label__ = 89;
      break;
     case 80:
      var $198 = HEAP[_PicklingError];
      
      var $200 = _PyDict_SetItemString($module_dict_addr, __str75, $198);
      
      if ($200 < 0) {
        __label__ = 81;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 81:
      $0 = -1;
      __label__ = 89;
      break;
     case 82:
      var $202 = HEAP[_UnpicklingError];
      
      var $204 = _PyDict_SetItemString($module_dict_addr, __str110, $202);
      
      if ($204 < 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 84;
        break;
      }
     case 83:
      $0 = -1;
      __label__ = 89;
      break;
     case 84:
      var $206 = HEAP[_UnpickleableError];
      
      var $208 = _PyDict_SetItemString($module_dict_addr, __str153, $206);
      
      if ($208 < 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      $0 = -1;
      __label__ = 89;
      break;
     case 86:
      var $210 = HEAP[_BadPickleGet];
      
      var $212 = _PyDict_SetItemString($module_dict_addr, __str154, $210);
      
      if ($212 < 0) {
        __label__ = 87;
        break;
      } else {
        __label__ = 88;
        break;
      }
     case 87:
      $0 = -1;
      __label__ = 89;
      break;
     case 88:
      var $214 = _PyCapsule_Import(__str155, 0);
      
      HEAP[_PycStringIO] = $214;
      $0 = 0;
      __label__ = 89;
      break;
     case 89:
      
      $retval = $0;
      var $retval89 = $retval;
      return $retval89;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initcPickle() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $d;
      var $di;
      var $v = __stackBase__;
      var $k = __stackBase__ + 4;
      var $i = __stackBase__ + 8;
      var $rev;
      var $format_version;
      var $compatible_formats;
      $rev = __str156;
      HEAP[_Picklertype + 4] = _PyType_Type;
      HEAP[_Unpicklertype + 4] = _PyType_Type;
      HEAP[_PdataType + 4] = _PyType_Type;
      var $0 = _PyDict_New();
      $di = $0;
      
      
      if ($di == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $4 = _init_stuff($di);
      
      if ($4 < 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $6 = _Py_InitModule4(__str157, _cPickle_methods, _cPickle_module_documentation, 0, 1013);
      $m = $6;
      
      
      if ($m == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $10 = _PyModule_GetDict($m);
      $d = $10;
      
      var $12 = _PyString_FromString($rev);
      HEAP[$v] = $12;
      var $13 = HEAP[$v];
      
      var $15 = _PyDict_SetItemString($d, __str158, $13);
      
      
      if (HEAP[$v] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $18 = HEAP[$v];
      
      
      var $21 = HEAP[$18] - 1;
      var $22 = $18;
      HEAP[$22] = $21;
      
      
      
      if (HEAP[$18] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $30 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $31 = HEAP[$v];
      FUNCTION_TABLE[$30]($31);
      __label__ = 6;
      break;
     case 6:
      HEAP[$i] = 0;
      __label__ = 10;
      break;
     case 7:
      var $32 = HEAP[$v];
      var $33 = HEAP[$k];
      
      var $35 = _PyObject_SetItem($d, $33, $32);
      
      if ($35 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      var $40 = HEAP[$di] - 1;
      
      
      HEAP[$di] = $40;
      
      
      
      
      if (HEAP[$di] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 9:
      
      
      
      
      var $51 = HEAP[HEAP[$di + 4] + 24];
      
      FUNCTION_TABLE[$51]($di);
      __label__ = 20;
      break;
     case 10:
      
      var $54 = _PyDict_Next($di, $i, $k, $v);
      
      if ($54 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      var $59 = HEAP[$di] - 1;
      
      
      HEAP[$di] = $59;
      
      
      
      
      if (HEAP[$di] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $70 = HEAP[HEAP[$di + 4] + 24];
      
      FUNCTION_TABLE[$70]($di);
      __label__ = 13;
      break;
     case 13:
      
      var $73 = _PyModule_AddIntConstant($m, __str159, 2);
      HEAP[$i] = $73;
      
      if ($73 < 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      var $75 = _PyString_FromString(__str160);
      $format_version = $75;
      var $76 = _Py_BuildValue(__str161, allocate([ __str162, 0, 0, 0, __str163, 0, 0, 0, __str164, 0, 0, 0, __str165, 0, 0, 0, __str160, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $compatible_formats = $76;
      
      
      var $79 = _PyDict_SetItemString($d, __str166, $format_version);
      
      
      var $82 = _PyDict_SetItemString($d, __str167, $compatible_formats);
      
      
      if ($format_version != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      var $88 = HEAP[$format_version] - 1;
      
      
      HEAP[$format_version] = $88;
      
      
      
      
      if (HEAP[$format_version] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $99 = HEAP[HEAP[$format_version + 4] + 24];
      
      FUNCTION_TABLE[$99]($format_version);
      __label__ = 17;
      break;
     case 17:
      
      
      if ($compatible_formats != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      
      
      
      var $106 = HEAP[$compatible_formats] - 1;
      
      
      HEAP[$compatible_formats] = $106;
      
      
      
      
      if (HEAP[$compatible_formats] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $117 = HEAP[HEAP[$compatible_formats + 4] + 24];
      
      FUNCTION_TABLE[$117]($compatible_formats);
      __label__ = 20;
      break;
     case 20:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initcPickle"] = _initcPickle;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, __PyObject_NextNotImplemented, 0, _write_file, 0, _write_cStringIO, 0, _write_none, 0, _write_other, 0, _read_file, 0, _readline_file, 0, _read_cStringIO, 0, _readline_cStringIO, 0, _read_other, 0, _readline_other, 0, _Pdata_dealloc, 0, _Pickler_dump, 0, _Pickle_clear_memo, 0, _Pickle_getvalue, 0, _Pickler_get_pers_func, 0, _Pickler_set_pers_func, 0, _Pickler_set_inst_pers_func, 0, _Pickler_get_memo, 0, _Pickler_set_memo, 0, _Pickler_get_error, 0, _Pickler_dealloc, 0, _PyObject_GenericGetAttr, 0, _PyObject_GenericSetAttr, 0, _Pickler_traverse, 0, _Pickler_clear, 0, _Unpickler_load, 0, _Unpickler_noload, 0, _Unpickler_dealloc, 0, _Unpickler_getattr, 0, _Unpickler_setattr, 0, _Unpickler_traverse, 0, _Unpickler_clear, 0, _cpm_dump, 0, _cpm_dumps, 0, _cpm_load, 0, _cpm_loads, 0, _get_Pickler, 0, _get_Unpickler, 0 ]);
  function run(args) {
    _cPickle_module_documentation = allocate([ 67, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 97, 116, 105, 111, 110, 32, 97, 110, 100, 32, 111, 112, 116, 105, 109, 105, 122, 97, 116, 105, 111, 110, 32, 111, 102, 32, 116, 104, 101, 32, 80, 121, 116, 104, 111, 110, 32, 112, 105, 99, 107, 108, 101, 32, 109, 111, 100, 117, 108, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _MARKv = allocate([ 40 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str = allocate([ 99, 80, 105, 99, 107, 108, 101, 46, 80, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate(1, "i8", ALLOC_NORMAL);
    _PdataType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _UnpicklingError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str2 = allocate([ 117, 110, 112, 105, 99, 107, 108, 105, 110, 103, 32, 115, 116, 97, 99, 107, 32, 117, 110, 100, 101, 114, 102, 108, 111, 119, 0 ], "i8", ALLOC_NORMAL);
    _PycStringIO = allocate(1, "%struct.PycStringIO_CAPI*", ALLOC_NORMAL);
    _empty_tuple = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _PicklingError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str3 = allocate([ 110, 111, 32, 105, 110, 116, 32, 119, 104, 101, 114, 101, 32, 105, 110, 116, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 105, 110, 32, 109, 101, 109, 111, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 37, 108, 100, 10, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 37, 100, 10, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 95, 95, 109, 111, 100, 117, 108, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 109, 111, 100, 117, 108, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    ___main___str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str8 = allocate([ 102, 97, 115, 116, 32, 109, 111, 100, 101, 58, 32, 99, 97, 110, 39, 116, 32, 112, 105, 99, 107, 108, 101, 32, 99, 121, 99, 108, 105, 99, 32, 111, 98, 106, 101, 99, 116, 115, 32, 105, 110, 99, 108, 117, 100, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 32, 116, 121, 112, 101, 32, 37, 115, 32, 97, 116, 32, 37, 112, 0 ], "i8", ALLOC_NORMAL);
    _none_9451 = allocate([ 78 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _len_9463 = allocate([ 4, 4 ], "i8", ALLOC_NORMAL);
    _buf_9462 = allocate(8, "i8*", ALLOC_NORMAL);
    __str9 = allocate([ 73, 48, 48, 10, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 73, 48, 49, 10, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 108, 111, 110, 103, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 32, 116, 111, 32, 112, 105, 99, 107, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _l_9538 = allocate([ 76 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str12 = allocate([ 10, 0 ], "i8", ALLOC_NORMAL);
    _string_9677 = allocate([ 83 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str13 = allocate([ 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102, 0 ], "i8", ALLOC_NORMAL);
    _string_9895 = allocate([ 86 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str14 = allocate([ 80, 121, 84, 117, 112, 108, 101, 95, 83, 105, 122, 101, 40, 116, 41, 32, 61, 61, 32, 108, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 99, 80, 105, 99, 107, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10017 = allocate([ 115, 116, 111, 114, 101, 95, 116, 117, 112, 108, 101, 95, 101, 108, 101, 109, 101, 110, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    _pop_10042 = allocate([ 48 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _len2opcode_10044 = allocate([ 41, 133, 134, 135 ], "i8", ALLOC_NORMAL);
    _pop_mark_10043 = allocate([ 49 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _tuple_10041 = allocate([ 116 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str16 = allocate([ 105, 116, 101, 114, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10137 = allocate([ 98, 97, 116, 99, 104, 95, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _append_10135 = allocate([ 97 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _appends_10136 = allocate([ 101 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str17 = allocate([ 32, 119, 104, 105, 108, 101, 32, 112, 105, 99, 107, 108, 105, 110, 103, 32, 97, 110, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10326 = allocate([ 98, 97, 116, 99, 104, 95, 100, 105, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 100, 105, 99, 116, 32, 105, 116, 101, 109, 115, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 109, 117, 115, 116, 32, 114, 101, 116, 117, 114, 110, 32, 50, 45, 116, 117, 112, 108, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _setitem_10324 = allocate([ 115 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _setitems_10325 = allocate([ 117 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str19 = allocate([ 111, 98, 106, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10501 = allocate([ 98, 97, 116, 99, 104, 95, 100, 105, 99, 116, 95, 101, 120, 97, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 115, 101, 108, 102, 45, 62, 112, 114, 111, 116, 111, 32, 62, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    _setitem_10499 = allocate([ 115 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _setitems_10500 = allocate([ 117 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str21 = allocate([ 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 32, 99, 104, 97, 110, 103, 101, 100, 32, 115, 105, 122, 101, 32, 100, 117, 114, 105, 110, 103, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 105, 116, 101, 114, 105, 116, 101, 109, 115, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 40, 41, 0 ], "i8", ALLOC_NORMAL);
    ___class___str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    ___getinitargs___str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str24 = allocate([ 99, 108, 97, 115, 115, 32, 104, 97, 115, 32, 110, 111, 32, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _inst_10654 = allocate([ 105 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _obj_10655 = allocate([ 111 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    ___getstate___str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    ___dict___str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _build_10656 = allocate([ 98 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    ___name___str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str25 = allocate([ 67, 97, 110, 39, 116, 32, 112, 105, 99, 107, 108, 101, 32, 37, 115, 58, 32, 105, 109, 112, 111, 114, 116, 32, 111, 102, 32, 109, 111, 100, 117, 108, 101, 32, 37, 115, 32, 102, 97, 105, 108, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 79, 83, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 67, 97, 110, 39, 116, 32, 112, 105, 99, 107, 108, 101, 32, 37, 115, 58, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 32, 108, 111, 111, 107, 117, 112, 32, 37, 115, 46, 37, 115, 32, 102, 97, 105, 108, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 79, 83, 83, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 67, 97, 110, 39, 116, 32, 112, 105, 99, 107, 108, 101, 32, 37, 115, 58, 32, 105, 116, 39, 115, 32, 110, 111, 116, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 111, 98, 106, 101, 99, 116, 32, 97, 115, 32, 37, 115, 46, 37, 115, 0 ], "i8", ALLOC_NORMAL);
    _two_tuple = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _extension_registry = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str30 = allocate([ 67, 97, 110, 39, 116, 32, 112, 105, 99, 107, 108, 101, 32, 37, 115, 58, 32, 101, 120, 116, 101, 110, 115, 105, 111, 110, 32, 99, 111, 100, 101, 32, 37, 115, 32, 105, 115, 110, 39, 116, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 79, 79, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 67, 97, 110, 39, 116, 32, 112, 105, 99, 107, 108, 101, 32, 37, 115, 58, 32, 101, 120, 116, 101, 110, 115, 105, 111, 110, 32, 99, 111, 100, 101, 32, 37, 108, 100, 32, 105, 115, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 79, 108, 0 ], "i8", ALLOC_NORMAL);
    _global_10855 = allocate([ 99 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str34 = allocate([ 112, 101, 114, 115, 105, 115, 116, 101, 110, 116, 32, 105, 100, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _persid_10999 = allocate([ 80 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _binpersid_11000 = allocate([ 81 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str35 = allocate([ 116, 117, 112, 108, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 37, 115, 32, 109, 117, 115, 116, 32, 99, 111, 110, 116, 97, 105, 110, 32, 50, 32, 116, 104, 114, 111, 117, 103, 104, 32, 53, 32, 101, 108, 101, 109, 101, 110, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 79, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 115, 97, 118, 101, 95, 114, 101, 100, 117, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 83, 101, 99, 111, 110, 100, 32, 101, 108, 101, 109, 101, 110, 116, 32, 111, 102, 32, 116, 117, 112, 108, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 37, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 70, 111, 117, 114, 116, 104, 32, 101, 108, 101, 109, 101, 110, 116, 32, 111, 102, 32, 116, 117, 112, 108, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 37, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 44, 32, 110, 111, 116, 32, 37, 115, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 79, 115, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 70, 105, 102, 116, 104, 32, 101, 108, 101, 109, 101, 110, 116, 32, 111, 102, 32, 116, 117, 112, 108, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 37, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 44, 32, 110, 111, 116, 32, 37, 115, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 95, 95, 110, 101, 119, 111, 98, 106, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 95, 95, 110, 101, 119, 111, 98, 106, 95, 95, 32, 97, 114, 103, 108, 105, 115, 116, 32, 105, 115, 32, 101, 109, 112, 116, 121, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 95, 95, 110, 101, 119, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 97, 114, 103, 115, 91, 48, 93, 32, 102, 114, 111, 109, 32, 95, 95, 110, 101, 119, 111, 98, 106, 95, 95, 32, 97, 114, 103, 115, 32, 104, 97, 115, 32, 110, 111, 32, 95, 95, 110, 101, 119, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 97, 114, 103, 115, 91, 48, 93, 32, 102, 114, 111, 109, 32, 95, 95, 110, 101, 119, 111, 98, 106, 95, 95, 32, 97, 114, 103, 115, 32, 104, 97, 115, 32, 116, 104, 101, 32, 119, 114, 111, 110, 103, 32, 99, 108, 97, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    _newobj_11120 = allocate([ -127 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _reduce_11118 = allocate([ 82 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _build_11119 = allocate([ 98 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    _PickleError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _dispatch_table = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    ___reduce_ex___str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    ___reduce___str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _UnpickleableError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str47 = allocate([ 86, 97, 108, 117, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 37, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 116, 114, 105, 110, 103, 32, 111, 114, 32, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 115, 101, 108, 102, 45, 62, 112, 114, 111, 116, 111, 32, 62, 61, 32, 48, 32, 38, 38, 32, 115, 101, 108, 102, 45, 62, 112, 114, 111, 116, 111, 32, 60, 32, 50, 53, 54, 0 ], "i8", ALLOC_NORMAL);
    _stop_11690 = allocate([ 46 ], [ "i8", 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str49 = allocate([ 124, 105, 58, 103, 101, 116, 118, 97, 108, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 65, 116, 116, 101, 109, 112, 116, 32, 116, 111, 32, 103, 101, 116, 118, 97, 108, 117, 101, 40, 41, 32, 97, 32, 110, 111, 110, 45, 108, 105, 115, 116, 45, 98, 97, 115, 101, 100, 32, 112, 105, 99, 107, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 73, 110, 118, 97, 108, 105, 100, 32, 103, 101, 116, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 85, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 100, 97, 116, 97, 32, 105, 110, 32, 105, 110, 116, 101, 114, 110, 97, 108, 32, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 79, 124, 105, 58, 100, 117, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 100, 117, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 100, 117, 109, 112, 40, 111, 98, 106, 101, 99, 116, 41, 32, 45, 45, 32, 87, 114, 105, 116, 101, 32, 97, 110, 32, 111, 98, 106, 101, 99, 116, 32, 105, 110, 32, 112, 105, 99, 107, 108, 101, 32, 102, 111, 114, 109, 97, 116, 32, 116, 111, 32, 116, 104, 101, 32, 111, 98, 106, 101, 99, 116, 39, 115, 32, 112, 105, 99, 107, 108, 101, 32, 115, 116, 114, 101, 97, 109, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 99, 108, 101, 97, 114, 95, 109, 101, 109, 111, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 99, 108, 101, 97, 114, 95, 109, 101, 109, 111, 40, 41, 32, 45, 45, 32, 67, 108, 101, 97, 114, 32, 116, 104, 101, 32, 112, 105, 99, 107, 108, 101, 114, 115, 32, 109, 101, 109, 111, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 103, 101, 116, 118, 97, 108, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 103, 101, 116, 118, 97, 108, 117, 101, 40, 41, 32, 45, 45, 32, 70, 105, 110, 105, 115, 104, 32, 112, 105, 99, 107, 105, 110, 103, 32, 97, 32, 108, 105, 115, 116, 45, 98, 97, 115, 101, 100, 32, 112, 105, 99, 107, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _Pickler_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str60 = allocate([ 112, 105, 99, 107, 108, 101, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 37, 100, 32, 97, 115, 107, 101, 100, 32, 102, 111, 114, 59, 32, 116, 104, 101, 32, 104, 105, 103, 104, 101, 115, 116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 105, 115, 32, 37, 100, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 73, 47, 79, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 32, 111, 110, 32, 99, 108, 111, 115, 101, 100, 32, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _write_str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str62 = allocate([ 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 39, 119, 114, 105, 116, 101, 39, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 99, 111, 112, 121, 95, 114, 101, 103, 0 ], "i8", ALLOC_NORMAL);
    _dispatch_table_str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str64 = allocate([ 124, 105, 58, 80, 105, 99, 107, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 79, 124, 105, 58, 80, 105, 99, 107, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_12011 = allocate(12, "i8*", ALLOC_NORMAL);
    __str66 = allocate([ 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 112, 114, 111, 116, 111, 99, 111, 108, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 112, 101, 114, 115, 105, 115, 116, 101, 110, 116, 95, 105, 100, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 97, 116, 116, 114, 105, 98, 117, 116, 101, 32, 100, 101, 108, 101, 116, 105, 111, 110, 32, 105, 115, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 109, 101, 109, 111, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 109, 101, 109, 111, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 98, 105, 110, 97, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 102, 97, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _Pickler_members = allocate([ 0, 0, 0, 0, 1, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str74 = allocate([ 105, 110, 115, 116, 95, 112, 101, 114, 115, 105, 115, 116, 101, 110, 116, 95, 105, 100, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 80, 105, 99, 107, 108, 105, 110, 103, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _Pickler_getsets = allocate(100, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _Picklertype__doc__ = allocate([ 79, 98, 106, 101, 99, 116, 115, 32, 116, 104, 97, 116, 32, 107, 110, 111, 119, 32, 104, 111, 119, 32, 116, 111, 32, 112, 105, 99, 107, 108, 101, 32, 111, 98, 106, 101, 99, 116, 115, 10, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 99, 80, 105, 99, 107, 108, 101, 46, 80, 105, 99, 107, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _Picklertype = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str77 = allocate([ 71, 108, 111, 98, 97, 108, 32, 97, 110, 100, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 112, 105, 99, 107, 108, 101, 115, 32, 97, 114, 101, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 99, 111, 117, 108, 100, 32, 110, 111, 116, 32, 102, 105, 110, 100, 32, 77, 65, 82, 75, 0 ], "i8", ALLOC_NORMAL);
    __str79 = allocate([ 112, 105, 99, 107, 108, 101, 32, 100, 97, 116, 97, 32, 119, 97, 115, 32, 116, 114, 117, 110, 99, 97, 116, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str80 = allocate([ 99, 111, 117, 108, 100, 32, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 98, 111, 111, 108, 101, 97, 110, 32, 61, 61, 32, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 32, 42, 41, 32, 38, 95, 80, 121, 95, 84, 114, 117, 101, 83, 116, 114, 117, 99, 116, 41, 32, 124, 124, 32, 98, 111, 111, 108, 101, 97, 110, 32, 61, 61, 32, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 32, 42, 41, 32, 38, 95, 80, 121, 95, 90, 101, 114, 111, 83, 116, 114, 117, 99, 116, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___12572 = allocate([ 108, 111, 97, 100, 95, 98, 111, 111, 108, 0 ], "i8", ALLOC_NORMAL);
    __str82 = allocate([ 115, 105, 122, 101, 32, 61, 61, 32, 49, 32, 124, 124, 32, 115, 105, 122, 101, 32, 61, 61, 32, 52, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___12743 = allocate([ 108, 111, 97, 100, 95, 99, 111, 117, 110, 116, 101, 100, 95, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str83 = allocate([ 76, 79, 78, 71, 32, 112, 105, 99, 107, 108, 101, 32, 104, 97, 115, 32, 110, 101, 103, 97, 116, 105, 118, 101, 32, 98, 121, 116, 101, 32, 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str84 = allocate([ 99, 111, 117, 108, 100, 32, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 102, 108, 111, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 105, 110, 115, 101, 99, 117, 114, 101, 32, 115, 116, 114, 105, 110, 103, 32, 112, 105, 99, 107, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str86 = allocate([ 66, 73, 78, 83, 84, 82, 73, 78, 71, 32, 112, 105, 99, 107, 108, 101, 32, 104, 97, 115, 32, 110, 101, 103, 97, 116, 105, 118, 101, 32, 98, 121, 116, 101, 32, 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str87 = allocate([ 66, 73, 78, 85, 78, 73, 67, 79, 68, 69, 32, 112, 105, 99, 107, 108, 101, 32, 104, 97, 115, 32, 110, 101, 103, 97, 116, 105, 118, 101, 32, 98, 121, 116, 101, 32, 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str88 = allocate([ 98, 97, 100, 32, 112, 105, 99, 107, 108, 101, 32, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str89 = allocate([ 78, 69, 87, 79, 66, 74, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 97, 110, 32, 97, 114, 103, 32, 116, 117, 112, 108, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str90 = allocate([ 78, 69, 87, 79, 66, 74, 32, 99, 108, 97, 115, 115, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 110, 39, 116, 32, 97, 32, 116, 121, 112, 101, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str91 = allocate([ 78, 69, 87, 79, 66, 74, 32, 99, 108, 97, 115, 115, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 104, 97, 115, 32, 78, 85, 76, 76, 32, 116, 112, 95, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    __str92 = allocate([ 65, 32, 108, 111, 97, 100, 32, 112, 101, 114, 115, 105, 115, 116, 101, 110, 116, 32, 105, 100, 32, 105, 110, 115, 116, 114, 117, 99, 116, 105, 111, 110, 32, 119, 97, 115, 32, 101, 110, 99, 111, 117, 110, 116, 101, 114, 101, 100, 44, 10, 98, 117, 116, 32, 110, 111, 32, 112, 101, 114, 115, 105, 115, 116, 101, 110, 116, 95, 108, 111, 97, 100, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 119, 97, 115, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _BadPickleGet = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str93 = allocate([ 110, 98, 121, 116, 101, 115, 32, 61, 61, 32, 49, 32, 124, 124, 32, 110, 98, 121, 116, 101, 115, 32, 61, 61, 32, 50, 32, 124, 124, 32, 110, 98, 121, 116, 101, 115, 32, 61, 61, 32, 52, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___14342 = allocate([ 108, 111, 97, 100, 95, 101, 120, 116, 101, 110, 115, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str94 = allocate([ 69, 88, 84, 32, 115, 112, 101, 99, 105, 102, 105, 101, 115, 32, 99, 111, 100, 101, 32, 60, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    _extension_cache = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _inverted_registry = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str95 = allocate([ 117, 110, 114, 101, 103, 105, 115, 116, 101, 114, 101, 100, 32, 101, 120, 116, 101, 110, 115, 105, 111, 110, 32, 99, 111, 100, 101, 32, 37, 108, 100, 0 ], "i8", ALLOC_NORMAL);
    __str96 = allocate([ 95, 105, 110, 118, 101, 114, 116, 101, 100, 95, 114, 101, 103, 105, 115, 116, 114, 121, 91, 37, 108, 100, 93, 32, 105, 115, 110, 39, 116, 32, 97, 32, 50, 45, 116, 117, 112, 108, 101, 32, 111, 102, 32, 115, 116, 114, 105, 110, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    _append_str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    ___setstate___str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str97 = allocate([ 115, 116, 97, 116, 101, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str98 = allocate([ 115, 108, 111, 116, 32, 115, 116, 97, 116, 101, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str99 = allocate([ 105, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___15142 = allocate([ 108, 111, 97, 100, 95, 112, 114, 111, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str100 = allocate([ 117, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 112, 105, 99, 107, 108, 101, 32, 112, 114, 111, 116, 111, 99, 111, 108, 58, 32, 37, 100, 0 ], "i8", ALLOC_NORMAL);
    __str101 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 108, 111, 97, 100, 32, 107, 101, 121, 44, 32, 39, 37, 115, 39, 46, 0 ], "i8", ALLOC_NORMAL);
    __str102 = allocate([ 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___15558 = allocate([ 110, 111, 108, 111, 97, 100, 95, 101, 120, 116, 101, 110, 115, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str103 = allocate([ 108, 111, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str104 = allocate([ 108, 111, 97, 100, 40, 41, 32, 45, 45, 32, 76, 111, 97, 100, 32, 97, 32, 112, 105, 99, 107, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str105 = allocate([ 110, 111, 108, 111, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str106 = allocate([ 110, 111, 108, 111, 97, 100, 40, 41, 32, 45, 45, 32, 110, 111, 116, 32, 108, 111, 97, 100, 32, 97, 32, 112, 105, 99, 107, 108, 101, 44, 32, 98, 117, 116, 32, 103, 111, 32, 116, 104, 114, 111, 117, 103, 104, 32, 109, 111, 115, 116, 32, 111, 102, 32, 116, 104, 101, 32, 109, 111, 116, 105, 111, 110, 115, 10, 10, 84, 104, 105, 115, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 99, 97, 110, 32, 98, 101, 32, 117, 115, 101, 100, 32, 116, 111, 32, 114, 101, 97, 100, 32, 112, 97, 115, 116, 32, 97, 32, 112, 105, 99, 107, 108, 101, 32, 119, 105, 116, 104, 111, 117, 116, 32, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 105, 110, 103, 10, 97, 110, 121, 32, 111, 98, 106, 101, 99, 116, 115, 32, 111, 114, 32, 105, 109, 112, 111, 114, 116, 105, 110, 103, 32, 97, 110, 121, 32, 109, 111, 100, 117, 108, 101, 115, 46, 32, 32, 73, 116, 32, 99, 97, 110, 32, 97, 108, 115, 111, 32, 98, 101, 32, 117, 115, 101, 100, 32, 116, 111, 32, 102, 105, 110, 100, 32, 97, 108, 108, 10, 112, 101, 114, 115, 105, 115, 116, 101, 110, 116, 32, 114, 101, 102, 101, 114, 101, 110, 99, 101, 115, 32, 119, 105, 116, 104, 111, 117, 116, 32, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 105, 110, 103, 32, 97, 110, 121, 32, 111, 98, 106, 101, 99, 116, 115, 32, 111, 114, 32, 105, 109, 112, 111, 114, 116, 105, 110, 103, 10, 97, 110, 121, 32, 109, 111, 100, 117, 108, 101, 115, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _Unpickler_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _readline_str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _read_str = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str107 = allocate([ 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 39, 114, 101, 97, 100, 39, 32, 97, 110, 100, 32, 39, 114, 101, 97, 100, 108, 105, 110, 101, 39, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str108 = allocate([ 112, 101, 114, 115, 105, 115, 116, 101, 110, 116, 95, 108, 111, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str109 = allocate([ 102, 105, 110, 100, 95, 103, 108, 111, 98, 97, 108, 0 ], "i8", ALLOC_NORMAL);
    __str110 = allocate([ 85, 110, 112, 105, 99, 107, 108, 105, 110, 103, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str111 = allocate([ 79, 79, 124, 105, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_16354 = allocate(16, "i8*", ALLOC_NORMAL);
    __str112 = allocate([ 111, 98, 106, 0 ], "i8", ALLOC_NORMAL);
    __str113 = allocate([ 79, 124, 105, 58, 100, 117, 109, 112, 115, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_16391 = allocate(12, "i8*", ALLOC_NORMAL);
    __str114 = allocate([ 83, 58, 108, 111, 97, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    _Unpicklertype__doc__ = allocate([ 79, 98, 106, 101, 99, 116, 115, 32, 116, 104, 97, 116, 32, 107, 110, 111, 119, 32, 104, 111, 119, 32, 116, 111, 32, 117, 110, 112, 105, 99, 107, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str115 = allocate([ 99, 80, 105, 99, 107, 108, 101, 46, 85, 110, 112, 105, 99, 107, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _Unpicklertype = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str116 = allocate([ 100, 117, 109, 112, 40, 111, 98, 106, 44, 32, 102, 105, 108, 101, 44, 32, 112, 114, 111, 116, 111, 99, 111, 108, 61, 48, 41, 32, 45, 45, 32, 87, 114, 105, 116, 101, 32, 97, 110, 32, 111, 98, 106, 101, 99, 116, 32, 105, 110, 32, 112, 105, 99, 107, 108, 101, 32, 102, 111, 114, 109, 97, 116, 32, 116, 111, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 102, 105, 108, 101, 46, 10, 10, 83, 101, 101, 32, 116, 104, 101, 32, 80, 105, 99, 107, 108, 101, 114, 32, 100, 111, 99, 115, 116, 114, 105, 110, 103, 32, 102, 111, 114, 32, 116, 104, 101, 32, 109, 101, 97, 110, 105, 110, 103, 32, 111, 102, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 112, 114, 111, 116, 111, 46, 0 ], "i8", ALLOC_NORMAL);
    __str117 = allocate([ 100, 117, 109, 112, 115, 0 ], "i8", ALLOC_NORMAL);
    __str118 = allocate([ 100, 117, 109, 112, 115, 40, 111, 98, 106, 44, 32, 112, 114, 111, 116, 111, 99, 111, 108, 61, 48, 41, 32, 45, 45, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 97, 110, 32, 111, 98, 106, 101, 99, 116, 32, 105, 110, 32, 112, 105, 99, 107, 108, 101, 32, 102, 111, 114, 109, 97, 116, 46, 10, 10, 83, 101, 101, 32, 116, 104, 101, 32, 80, 105, 99, 107, 108, 101, 114, 32, 100, 111, 99, 115, 116, 114, 105, 110, 103, 32, 102, 111, 114, 32, 116, 104, 101, 32, 109, 101, 97, 110, 105, 110, 103, 32, 111, 102, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 112, 114, 111, 116, 111, 46, 0 ], "i8", ALLOC_NORMAL);
    __str119 = allocate([ 108, 111, 97, 100, 40, 102, 105, 108, 101, 41, 32, 45, 45, 32, 76, 111, 97, 100, 32, 97, 32, 112, 105, 99, 107, 108, 101, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str120 = allocate([ 108, 111, 97, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str121 = allocate([ 108, 111, 97, 100, 115, 40, 115, 116, 114, 105, 110, 103, 41, 32, 45, 45, 32, 76, 111, 97, 100, 32, 97, 32, 112, 105, 99, 107, 108, 101, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str122 = allocate([ 80, 105, 99, 107, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str123 = allocate([ 80, 105, 99, 107, 108, 101, 114, 40, 102, 105, 108, 101, 44, 32, 112, 114, 111, 116, 111, 99, 111, 108, 61, 48, 41, 32, 45, 45, 32, 67, 114, 101, 97, 116, 101, 32, 97, 32, 112, 105, 99, 107, 108, 101, 114, 46, 10, 10, 84, 104, 105, 115, 32, 116, 97, 107, 101, 115, 32, 97, 32, 102, 105, 108, 101, 45, 108, 105, 107, 101, 32, 111, 98, 106, 101, 99, 116, 32, 102, 111, 114, 32, 119, 114, 105, 116, 105, 110, 103, 32, 97, 32, 112, 105, 99, 107, 108, 101, 32, 100, 97, 116, 97, 32, 115, 116, 114, 101, 97, 109, 46, 10, 84, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 112, 114, 111, 116, 111, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 116, 101, 108, 108, 115, 32, 116, 104, 101, 32, 112, 105, 99, 107, 108, 101, 114, 32, 116, 111, 32, 117, 115, 101, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 10, 112, 114, 111, 116, 111, 99, 111, 108, 59, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 112, 114, 111, 116, 111, 99, 111, 108, 115, 32, 97, 114, 101, 32, 48, 44, 32, 49, 44, 32, 50, 46, 32, 32, 84, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 10, 112, 114, 111, 116, 111, 99, 111, 108, 32, 105, 115, 32, 48, 44, 32, 116, 111, 32, 98, 101, 32, 98, 97, 99, 107, 119, 97, 114, 100, 115, 32, 99, 111, 109, 112, 97, 116, 105, 98, 108, 101, 46, 32, 32, 40, 80, 114, 111, 116, 111, 99, 111, 108, 32, 48, 32, 105, 115, 32, 116, 104, 101, 10, 111, 110, 108, 121, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 116, 104, 97, 116, 32, 99, 97, 110, 32, 98, 101, 32, 119, 114, 105, 116, 116, 101, 110, 32, 116, 111, 32, 97, 32, 102, 105, 108, 101, 32, 111, 112, 101, 110, 101, 100, 32, 105, 110, 32, 116, 101, 120, 116, 10, 109, 111, 100, 101, 32, 97, 110, 100, 32, 114, 101, 97, 100, 32, 98, 97, 99, 107, 32, 115, 117, 99, 99, 101, 115, 115, 102, 117, 108, 108, 121, 46, 32, 32, 87, 104, 101, 110, 32, 117, 115, 105, 110, 103, 32, 97, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 104, 105, 103, 104, 101, 114, 10, 116, 104, 97, 110, 32, 48, 44, 32, 109, 97, 107, 101, 32, 115, 117, 114, 101, 32, 116, 104, 101, 32, 102, 105, 108, 101, 32, 105, 115, 32, 111, 112, 101, 110, 101, 100, 32, 105, 110, 32, 98, 105, 110, 97, 114, 121, 32, 109, 111, 100, 101, 44, 32, 98, 111, 116, 104, 32, 119, 104, 101, 110, 10, 112, 105, 99, 107, 108, 105, 110, 103, 32, 97, 110, 100, 32, 117, 110, 112, 105, 99, 107, 108, 105, 110, 103, 46, 41, 10, 10, 80, 114, 111, 116, 111, 99, 111, 108, 32, 49, 32, 105, 115, 32, 109, 111, 114, 101, 32, 101, 102, 102, 105, 99, 105, 101, 110, 116, 32, 116, 104, 97, 110, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 48, 59, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 50, 32, 105, 115, 10, 109, 111, 114, 101, 32, 101, 102, 102, 105, 99, 105, 101, 110, 116, 32, 116, 104, 97, 110, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 49, 46, 10, 10, 83, 112, 101, 99, 105, 102, 121, 105, 110, 103, 32, 97, 32, 110, 101, 103, 97, 116, 105, 118, 101, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 115, 101, 108, 101, 99, 116, 115, 32, 116, 104, 101, 32, 104, 105, 103, 104, 101, 115, 116, 10, 112, 114, 111, 116, 111, 99, 111, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 46, 32, 32, 84, 104, 101, 32, 104, 105, 103, 104, 101, 114, 32, 116, 104, 101, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 117, 115, 101, 100, 44, 32, 116, 104, 101, 10, 109, 111, 114, 101, 32, 114, 101, 99, 101, 110, 116, 32, 116, 104, 101, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32, 80, 121, 116, 104, 111, 110, 32, 110, 101, 101, 100, 101, 100, 32, 116, 111, 32, 114, 101, 97, 100, 32, 116, 104, 101, 32, 112, 105, 99, 107, 108, 101, 10, 112, 114, 111, 100, 117, 99, 101, 100, 46, 10, 10, 84, 104, 101, 32, 102, 105, 108, 101, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 97, 32, 119, 114, 105, 116, 101, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 116, 104, 97, 116, 32, 97, 99, 99, 101, 112, 116, 115, 32, 97, 32, 115, 105, 110, 103, 108, 101, 10, 115, 116, 114, 105, 110, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 46, 32, 32, 73, 116, 32, 99, 97, 110, 32, 116, 104, 117, 115, 32, 98, 101, 32, 97, 110, 32, 111, 112, 101, 110, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 44, 32, 97, 32, 83, 116, 114, 105, 110, 103, 73, 79, 10, 111, 98, 106, 101, 99, 116, 44, 32, 111, 114, 32, 97, 110, 121, 32, 111, 116, 104, 101, 114, 32, 99, 117, 115, 116, 111, 109, 32, 111, 98, 106, 101, 99, 116, 32, 116, 104, 97, 116, 32, 109, 101, 101, 116, 115, 32, 116, 104, 105, 115, 32, 105, 110, 116, 101, 114, 102, 97, 99, 101, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str124 = allocate([ 85, 110, 112, 105, 99, 107, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str125 = allocate([ 85, 110, 112, 105, 99, 107, 108, 101, 114, 40, 102, 105, 108, 101, 41, 32, 45, 45, 32, 67, 114, 101, 97, 116, 101, 32, 97, 110, 32, 117, 110, 112, 105, 99, 107, 108, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    _cPickle_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str126 = allocate([ 95, 95, 99, 108, 97, 115, 115, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str127 = allocate([ 95, 95, 103, 101, 116, 105, 110, 105, 116, 97, 114, 103, 115, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str128 = allocate([ 95, 95, 100, 105, 99, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str129 = allocate([ 95, 95, 103, 101, 116, 115, 116, 97, 116, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str130 = allocate([ 95, 95, 115, 101, 116, 115, 116, 97, 116, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str131 = allocate([ 95, 95, 110, 97, 109, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str132 = allocate([ 95, 95, 109, 97, 105, 110, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str133 = allocate([ 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str134 = allocate([ 95, 95, 114, 101, 100, 117, 99, 101, 95, 101, 120, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str135 = allocate([ 119, 114, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str136 = allocate([ 97, 112, 112, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str137 = allocate([ 114, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str138 = allocate([ 114, 101, 97, 100, 108, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str139 = allocate([ 100, 105, 115, 112, 97, 116, 99, 104, 95, 116, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str140 = allocate([ 95, 101, 120, 116, 101, 110, 115, 105, 111, 110, 95, 114, 101, 103, 105, 115, 116, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str141 = allocate([ 95, 105, 110, 118, 101, 114, 116, 101, 100, 95, 114, 101, 103, 105, 115, 116, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str142 = allocate([ 95, 101, 120, 116, 101, 110, 115, 105, 111, 110, 95, 99, 97, 99, 104, 101, 0 ], "i8", ALLOC_NORMAL);
    __str143 = allocate([ 95, 95, 98, 117, 105, 108, 116, 105, 110, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str144 = allocate([ 95, 95, 98, 117, 105, 108, 116, 105, 110, 115, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str145 = allocate([ 100, 101, 102, 32, 95, 95, 115, 116, 114, 95, 95, 40, 115, 101, 108, 102, 41, 58, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 115, 101, 108, 102, 46, 97, 114, 103, 115, 32, 97, 110, 100, 32, 40, 39, 37, 115, 39, 32, 37, 32, 115, 101, 108, 102, 46, 97, 114, 103, 115, 91, 48, 93, 41, 32, 111, 114, 32, 39, 40, 119, 104, 97, 116, 41, 39, 10, 0 ], "i8", ALLOC_NORMAL);
    __str146 = allocate([ 99, 80, 105, 99, 107, 108, 101, 46, 80, 105, 99, 107, 108, 101, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str147 = allocate([ 99, 80, 105, 99, 107, 108, 101, 46, 80, 105, 99, 107, 108, 105, 110, 103, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str148 = allocate([ 100, 101, 102, 32, 95, 95, 115, 116, 114, 95, 95, 40, 115, 101, 108, 102, 41, 58, 10, 32, 32, 97, 61, 115, 101, 108, 102, 46, 97, 114, 103, 115, 10, 32, 32, 97, 61, 97, 32, 97, 110, 100, 32, 116, 121, 112, 101, 40, 97, 91, 48, 93, 41, 32, 111, 114, 32, 39, 40, 119, 104, 97, 116, 41, 39, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 39, 67, 97, 110, 110, 111, 116, 32, 112, 105, 99, 107, 108, 101, 32, 37, 115, 32, 111, 98, 106, 101, 99, 116, 115, 39, 32, 37, 32, 97, 10, 0 ], "i8", ALLOC_NORMAL);
    __str149 = allocate([ 99, 80, 105, 99, 107, 108, 101, 46, 85, 110, 112, 105, 99, 107, 108, 101, 97, 98, 108, 101, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str150 = allocate([ 99, 80, 105, 99, 107, 108, 101, 46, 85, 110, 112, 105, 99, 107, 108, 105, 110, 103, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str151 = allocate([ 99, 80, 105, 99, 107, 108, 101, 46, 66, 97, 100, 80, 105, 99, 107, 108, 101, 71, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str152 = allocate([ 80, 105, 99, 107, 108, 101, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str153 = allocate([ 85, 110, 112, 105, 99, 107, 108, 101, 97, 98, 108, 101, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str154 = allocate([ 66, 97, 100, 80, 105, 99, 107, 108, 101, 71, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str155 = allocate([ 99, 83, 116, 114, 105, 110, 103, 73, 79, 46, 99, 83, 116, 114, 105, 110, 103, 73, 79, 95, 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str156 = allocate([ 49, 46, 55, 49, 0 ], "i8", ALLOC_NORMAL);
    __str157 = allocate([ 99, 80, 105, 99, 107, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str158 = allocate([ 95, 95, 118, 101, 114, 115, 105, 111, 110, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str159 = allocate([ 72, 73, 71, 72, 69, 83, 84, 95, 80, 82, 79, 84, 79, 67, 79, 76, 0 ], "i8", ALLOC_NORMAL);
    __str160 = allocate([ 50, 46, 48, 0 ], "i8", ALLOC_NORMAL);
    __str161 = allocate([ 91, 115, 115, 115, 115, 115, 93, 0 ], "i8", ALLOC_NORMAL);
    __str162 = allocate([ 49, 46, 48, 0 ], "i8", ALLOC_NORMAL);
    __str163 = allocate([ 49, 46, 49, 0 ], "i8", ALLOC_NORMAL);
    __str164 = allocate([ 49, 46, 50, 0 ], "i8", ALLOC_NORMAL);
    __str165 = allocate([ 49, 46, 51, 0 ], "i8", ALLOC_NORMAL);
    __str166 = allocate([ 102, 111, 114, 109, 97, 116, 95, 118, 101, 114, 115, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str167 = allocate([ 99, 111, 109, 112, 97, 116, 105, 98, 108, 101, 95, 102, 111, 114, 109, 97, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_PdataType + 12] = __str;
    HEAP[_PdataType + 24] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_PdataType + 88] = __str1;
    HEAP[_buf_9462] = __str9;
    HEAP[_buf_9462 + 4] = __str10;
    HEAP[_Pickler_methods] = __str54;
    HEAP[_Pickler_methods + 4] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_Pickler_methods + 12] = __str55;
    HEAP[_Pickler_methods + 16] = __str56;
    HEAP[_Pickler_methods + 20] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_Pickler_methods + 28] = __str57;
    HEAP[_Pickler_methods + 32] = __str58;
    HEAP[_Pickler_methods + 36] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_Pickler_methods + 44] = __str59;
    HEAP[_kwlist_12011] = __str66;
    HEAP[_kwlist_12011 + 4] = __str67;
    HEAP[_Pickler_members] = __str72;
    HEAP[_Pickler_members + 20] = __str73;
    HEAP[_Pickler_getsets] = __str68;
    HEAP[_Pickler_getsets + 4] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_Pickler_getsets + 8] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_Pickler_getsets + 20] = __str74;
    HEAP[_Pickler_getsets + 28] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_Pickler_getsets + 40] = __str70;
    HEAP[_Pickler_getsets + 44] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_Pickler_getsets + 48] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_Pickler_getsets + 60] = __str75;
    HEAP[_Pickler_getsets + 64] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_Picklertype + 12] = __str76;
    HEAP[_Picklertype + 24] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_Picklertype + 72] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_Picklertype + 76] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_Picklertype + 88] = _Picklertype__doc__;
    HEAP[_Picklertype + 92] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_Picklertype + 96] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_Picklertype + 116] = _Pickler_methods;
    HEAP[_Picklertype + 120] = _Pickler_members;
    HEAP[_Picklertype + 124] = _Pickler_getsets;
    HEAP[_Unpickler_methods] = __str103;
    HEAP[_Unpickler_methods + 4] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_Unpickler_methods + 12] = __str104;
    HEAP[_Unpickler_methods + 16] = __str105;
    HEAP[_Unpickler_methods + 20] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_Unpickler_methods + 28] = __str106;
    HEAP[_kwlist_16354] = __str112;
    HEAP[_kwlist_16354 + 4] = __str66;
    HEAP[_kwlist_16354 + 8] = __str67;
    HEAP[_kwlist_16391] = __str112;
    HEAP[_kwlist_16391 + 4] = __str67;
    HEAP[_Unpicklertype + 12] = __str115;
    HEAP[_Unpicklertype + 24] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_Unpicklertype + 32] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_Unpicklertype + 36] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_Unpicklertype + 88] = _Unpicklertype__doc__;
    HEAP[_Unpicklertype + 92] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_Unpicklertype + 96] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_cPickle_methods] = __str54;
    HEAP[_cPickle_methods + 4] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_cPickle_methods + 12] = __str116;
    HEAP[_cPickle_methods + 16] = __str117;
    HEAP[_cPickle_methods + 20] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_cPickle_methods + 28] = __str118;
    HEAP[_cPickle_methods + 32] = __str103;
    HEAP[_cPickle_methods + 36] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_cPickle_methods + 44] = __str119;
    HEAP[_cPickle_methods + 48] = __str120;
    HEAP[_cPickle_methods + 52] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_cPickle_methods + 60] = __str121;
    HEAP[_cPickle_methods + 64] = __str122;
    HEAP[_cPickle_methods + 68] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_cPickle_methods + 76] = __str123;
    HEAP[_cPickle_methods + 80] = __str124;
    HEAP[_cPickle_methods + 84] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_cPickle_methods + 92] = __str125;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
