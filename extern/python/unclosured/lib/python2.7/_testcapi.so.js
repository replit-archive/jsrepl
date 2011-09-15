"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 196;
  var $1___SIZE = 640;
  var $2___SIZE = 16;
  var $3___SIZE = 16;
  var $4___SIZE = 300;
  var $5___SIZE = 20;
  var $struct__0triple___SIZE = 12;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyCodeObject___SIZE = 72;
  var $struct_PyDateTime_CAPI___SIZE = 44;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyListObject___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_PyUnicodeObject___SIZE = 24;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_all_structmembers___SIZE = 60;
  var $struct_all_structmembers___FLATTENER = [ 0, 1, 2, 4, 6, 8, 12, 16, 20, 24, 28, 36, 44, 52 ];
  var $struct_known_capsule___SIZE = 12;
  var $struct_test_structmembers___SIZE = 68;
  var _PyDateTimeAPI;
  var _TestError;
  var __str;
  var __str1;
  var __str3;
  var __str4;
  var __str5;
  var __HashInheritanceTester_Type;
  var __str6;
  var __str7;
  var __str8;
  var __str9;
  var __str10;
  var __str11;
  var _memoryviewtester_as_buffer;
  var __str12;
  var __MemoryViewTester_Type;
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
  var __str26;
  var __str27;
  var __str28;
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
  var _keywords_9777;
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
  var _x;
  var __str82;
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
  var __str93;
  var _kwlist_10129;
  var __str94;
  var __str95;
  var _C_92_10205;
  var __str96;
  var __str97;
  var __str98;
  var __str99;
  var __str100;
  var _test_run_counter;
  var __str101;
  var __str102;
  var __str103;
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
  var __str116;
  var __str117;
  var __str118;
  var __str119;
  var __str120;
  var __str121;
  var __str122;
  var __str123;
  var _capsule_error;
  var _capsule_destructor_call_count;
  var __str124;
  var __str125;
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
  var _buffer_10522;
  var __str143;
  var __str144;
  var __str145;
  var __str146;
  var __str147;
  var __str148;
  var __str149;
  var __str150;
  var _kwlist_10723;
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
  var __str168;
  var __str169;
  var __str170;
  var __str171;
  var __str172;
  var __str173;
  var __str174;
  var __str175;
  var __str176;
  var __str177;
  var __str178;
  var __str179;
  var __str180;
  var __str181;
  var __str182;
  var __str183;
  var _TestMethods;
  var __str184;
  var __str185;
  var __str186;
  var __str187;
  var __str188;
  var __str189;
  var __str190;
  var __str191;
  var __str192;
  var __str193;
  var __str194;
  var __str195;
  var __str196;
  var __str197;
  var _test_members;
  var __str198;
  var _keywords_10762;
  var __str199;
  var __str201;
  var __str202;
  var _test_structmembersType;
  var __str203;
  var __str204;
  var __str205;
  var __str206;
  var __str207;
  var __str208;
  var __str209;
  var __str210;
  var __str211;
  var __str212;
  var __str213;
  var __str214;
  var __str215;
  var __str216;
  var __str217;
  var __str218;
  var __str219;
  var __str220;
  var __str221;
  var __str222;
  var __str223;
  var __str224;
  var __str225;
  var __str226;
  var __str227;
  var __str228;
  function _raiseTestError($test_name, $msg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 2048;
    _memset(__stackBase__, 0, 2048);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $test_name_addr;
      var $msg_addr;
      var $retval;
      var $0;
      var $buf = __stackBase__;
      $test_name_addr = $test_name;
      $msg_addr = $msg;
      
      var $2 = _strlen($test_name_addr);
      
      var $4 = _strlen($msg_addr);
      
      
      if ($4 + $2 > 1998) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = HEAP[_TestError];
      _PyErr_SetString($7, __str);
      __label__ = 3;
      break;
     case 2:
      var $buf2 = $buf;
      
      
      var $10 = _PyOS_snprintf($buf2, 2048, __str1, allocate([ $test_name_addr, 0, 0, 0, $msg_addr, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      var $11 = HEAP[_TestError];
      var $buf3 = $buf;
      _PyErr_SetString($11, $buf3);
      __label__ = 3;
      break;
     case 3:
      $0 = 0;
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_config($self) {
    
    var $retval;
    var $0;
    
    var $2 = HEAP[__Py_NoneStruct] + 1;
    HEAP[__Py_NoneStruct] = $2;
    $0 = __Py_NoneStruct;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _test_list_api($self) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $list;
      var $i;
      var $anint;
      var $anint14;
      $self_addr = $self;
      var $1 = _PyList_New(30);
      $list = $1;
      
      
      if ($list == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 23;
      break;
     case 2:
      $i = 0;
      __lastLabel__ = 2;
      __label__ = 8;
      break;
     case 3:
      
      var $5 = _PyInt_FromLong($i);
      $anint = $5;
      
      
      var $8 = $list;
      if ($anint == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      var $11 = HEAP[$8] - 1;
      
      
      HEAP[$list] = $11;
      
      
      
      
      if (HEAP[$list] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $22 = HEAP[HEAP[$list + 4] + 24];
      
      FUNCTION_TABLE[$22]($list);
      __label__ = 6;
      break;
     case 6:
      $0 = 0;
      __label__ = 23;
      break;
     case 7:
      
      
      
      
      var $28 = HEAP[$8 + 12] + 4 * $i;
      
      HEAP[$28] = $anint;
      
      var $31 = $i + 1;
      $i = $31;
      __lastLabel__ = 7;
      __label__ = 8;
      break;
     case 8:
      var $32 = __lastLabel__ == 7 ? $31 : 0;
      
      if ($32 <= 29) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      var $35 = _PyList_Reverse($list);
      $i = $35;
      
      
      if ($i != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      var $41 = HEAP[$list] - 1;
      
      
      HEAP[$list] = $41;
      
      
      
      
      if (HEAP[$list] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $52 = HEAP[HEAP[$list + 4] + 24];
      
      FUNCTION_TABLE[$52]($list);
      __label__ = 12;
      break;
     case 12:
      $0 = 0;
      __label__ = 23;
      break;
     case 13:
      $i = 0;
      __lastLabel__ = 13;
      __label__ = 19;
      break;
     case 14:
      
      
      
      
      
      
      $anint14 = HEAP[HEAP[$88 + 12] + 4 * $i];
      
      
      
      
      
      
      
      if (HEAP[$anint14 + 8] != 29 - $i) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      var $67 = HEAP[_TestError];
      _PyErr_SetString($67, __str3);
      
      
      
      var $71 = HEAP[$list] - 1;
      
      
      HEAP[$list] = $71;
      
      
      
      
      if (HEAP[$list] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $82 = HEAP[HEAP[$list + 4] + 24];
      
      FUNCTION_TABLE[$82]($list);
      __label__ = 17;
      break;
     case 17:
      $0 = 0;
      __label__ = 23;
      break;
     case 18:
      
      var $85 = $i + 1;
      $i = $85;
      __lastLabel__ = 18;
      __label__ = 19;
      break;
     case 19:
      var $86 = __lastLabel__ == 18 ? $85 : 0;
      
      var $88 = $list;
      if ($86 <= 29) {
        __label__ = 14;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      var $91 = HEAP[$88] - 1;
      
      
      HEAP[$list] = $91;
      
      
      
      
      if (HEAP[$list] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $102 = HEAP[HEAP[$list + 4] + 24];
      
      FUNCTION_TABLE[$102]($list);
      __label__ = 22;
      break;
     case 22:
      
      var $105 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $105;
      $0 = __Py_NoneStruct;
      __label__ = 23;
      break;
     case 23:
      
      $retval = $0;
      var $retval24 = $retval;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_dict_inner($count) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $count_addr;
      var $retval;
      var $0;
      var $pos = __stackBase__;
      var $iterations;
      var $i;
      var $dict;
      var $v = __stackBase__ + 4;
      var $k = __stackBase__ + 8;
      var $o;
      $count_addr = $count;
      HEAP[$pos] = 0;
      $iterations = 0;
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
      __label__ = 20;
      break;
     case 2:
      $i = 0;
      
      
      
      if ($i < $count_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 3:
      
      var $8 = _PyInt_FromLong($i);
      HEAP[$v] = $8;
      var $9 = HEAP[$v];
      var $10 = HEAP[$v];
      
      var $12 = _PyDict_SetItem($dict, $10, $9);
      var $13 = HEAP[$v];
      
      
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
      
      
      
      
      var $25 = HEAP[HEAP[HEAP[$v] + 4] + 24];
      var $26 = HEAP[$v];
      FUNCTION_TABLE[$25]($26);
      __label__ = 5;
      break;
     case 5:
      
      var $28 = $i + 1;
      $i = $28;
      
      
      
      if ($i < $count_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 6:
      
      var $33 = $iterations + 1;
      $iterations = $33;
      
      
      
      
      
      $i = HEAP[HEAP[$v] + 8] + 1;
      
      var $40 = _PyInt_FromLong($i);
      $o = $40;
      
      
      if ($o == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = -1;
      __label__ = 20;
      break;
     case 8:
      var $43 = HEAP[$k];
      
      
      var $46 = _PyDict_SetItem($dict, $43, $o);
      var $47 = $46 < 0;
      
      
      
      var $51 = HEAP[$o] - 1;
      
      
      HEAP[$o] = $51;
      
      
      
      var $57 = HEAP[$o] == 0;
      if ($47) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      if ($57) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $62 = HEAP[HEAP[$o + 4] + 24];
      
      FUNCTION_TABLE[$62]($o);
      __label__ = 11;
      break;
     case 11:
      $0 = -1;
      __label__ = 20;
      break;
     case 12:
      if ($57) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $68 = HEAP[HEAP[$o + 4] + 24];
      
      FUNCTION_TABLE[$68]($o);
      __label__ = 14;
      break;
     case 14:
      
      var $71 = _PyDict_Next($dict, $pos, $k, $v);
      
      if ($71 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      var $76 = HEAP[$dict] - 1;
      
      
      HEAP[$dict] = $76;
      
      
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $87 = HEAP[HEAP[$dict + 4] + 24];
      
      FUNCTION_TABLE[$87]($dict);
      __label__ = 17;
      break;
     case 17:
      
      
      
      if ($iterations != $count_addr) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $92 = HEAP[_TestError];
      _PyErr_SetString($92, __str4);
      $0 = -1;
      __label__ = 20;
      break;
     case 19:
      $0 = 0;
      __label__ = 20;
      break;
     case 20:
      
      $retval = $0;
      var $retval22 = $retval;
      STACKTOP = __stackBase__;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_dict_iteration($self) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $i;
      $self_addr = $self;
      $i = 0;
      __lastLabel__ = -1;
      __label__ = 4;
      break;
     case 1:
      
      var $2 = _test_dict_inner($i);
      
      if ($2 < 0) {
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
      
      var $5 = $i + 1;
      $i = $5;
      __lastLabel__ = 3;
      __label__ = 4;
      break;
     case 4:
      var $6 = __lastLabel__ == 3 ? $5 : 0;
      
      if ($6 <= 199) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $9 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $9;
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
  function _test_lazy_hash_inheritance($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $type;
      var $obj;
      var $hash;
      $self_addr = $self;
      $type = __HashInheritanceTester_Type;
      
      
      
      
      if (HEAP[$type + 132] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $6 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $6;
      $0 = __Py_NoneStruct;
      __label__ = 24;
      break;
     case 2:
      
      var $8 = __PyObject_New($type);
      $obj = $8;
      
      
      if ($obj == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyErr_Clear();
      var $11 = HEAP[_TestError];
      _PyErr_SetString($11, __str6);
      $0 = 0;
      __label__ = 24;
      break;
     case 4:
      
      
      
      
      if (HEAP[$type + 132] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $16 = HEAP[_TestError];
      _PyErr_SetString($16, __str7);
      
      
      
      var $20 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $20;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $31 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$31]($obj);
      __label__ = 7;
      break;
     case 7:
      $0 = 0;
      __label__ = 24;
      break;
     case 8:
      
      var $34 = _PyObject_Hash($obj);
      $hash = $34;
      
      var $36 = $hash == -1;
      if ($36) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      var $37 = _PyErr_Occurred();
      
      if ($37 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      _PyErr_Clear();
      var $39 = HEAP[_TestError];
      _PyErr_SetString($39, __str8);
      
      
      
      var $43 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $43;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $54 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$54]($obj);
      __label__ = 12;
      break;
     case 12:
      $0 = 0;
      __label__ = 24;
      break;
     case 13:
      
      
      
      
      if (HEAP[$type + 132] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      var $60 = HEAP[_TestError];
      _PyErr_SetString($60, __str9);
      
      
      
      var $64 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $64;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $75 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$75]($obj);
      __label__ = 16;
      break;
     case 16:
      $0 = 0;
      __label__ = 24;
      break;
     case 17:
      
      
      
      
      
      if (HEAP[$type + 60] != HEAP[_PyType_Type + 60]) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      var $82 = HEAP[_TestError];
      _PyErr_SetString($82, __str10);
      
      
      
      var $86 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $86;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $97 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$97]($obj);
      __label__ = 20;
      break;
     case 20:
      $0 = 0;
      __label__ = 24;
      break;
     case 21:
      
      
      
      var $102 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $102;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $113 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$113]($obj);
      __label__ = 23;
      break;
     case 23:
      
      var $116 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $116;
      $0 = __Py_NoneStruct;
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
  function _broken_buffer_getbuffer($self, $view, $flags) {
    
    var $self_addr;
    var $view_addr;
    var $flags_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $view_addr = $view;
    $flags_addr = $flags;
    var $1 = HEAP[_TestError];
    _PyErr_SetString($1, __str11);
    $0 = -1;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _test_broken_memoryview($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $obj;
      var $res;
      $self_addr = $self;
      var $1 = __PyObject_New(__MemoryViewTester_Type);
      $obj = $1;
      
      
      if ($obj == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      _PyErr_Clear();
      var $4 = HEAP[_TestError];
      _PyErr_SetString($4, __str13);
      $0 = 0;
      __label__ = 13;
      break;
     case 2:
      
      var $6 = _PyMemoryView_FromObject($obj);
      $res = $6;
      
      
      if ($res != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $9 = _PyErr_Occurred();
      
      if ($9 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 4:
      var $11 = HEAP[_TestError];
      _PyErr_SetString($11, __str14);
      
      
      if ($res != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      var $17 = HEAP[$res] - 1;
      
      
      HEAP[$res] = $17;
      
      
      
      
      if (HEAP[$res] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $28 = HEAP[HEAP[$res + 4] + 24];
      
      FUNCTION_TABLE[$28]($res);
      __label__ = 7;
      break;
     case 7:
      
      
      
      var $33 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $33;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $44 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$44]($obj);
      __label__ = 9;
      break;
     case 9:
      $0 = 0;
      __label__ = 13;
      break;
     case 10:
      _PyErr_Clear();
      
      
      
      var $49 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $49;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $60 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$60]($obj);
      __label__ = 12;
      break;
     case 12:
      
      var $63 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $63;
      $0 = __Py_NoneStruct;
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
  function _raise_test_long_error($msg) {
    
    var $msg_addr;
    var $retval;
    var $0;
    $msg_addr = $msg;
    
    var $2 = _raiseTestError(__str15, $msg_addr);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _test_long_api_inner() {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $error_addr;
      var $retval;
      var $0;
      var $iftmp_24;
      var $NBITS;
      var $base;
      var $pyresult;
      var $i;
      var $j;
      var $in;
      var $out;
      var $uin;
      var $uout;
      var $one;
      var $x;
      var $y;
      var $out27;
      var $uout28;
      $error_addr = FUNCTION_TABLE_OFFSET + 2;
      $NBITS = 32;
      $base = 1;
      $i = 0;
      __label__ = 26;
      break;
     case 1:
      $j = 0;
      __lastLabel__ = 1;
      __label__ = 24;
      break;
     case 2:
      
      
      var $3 = $base;
      if ($j > 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      $iftmp_24 = 0 - $3;
      __label__ = 5;
      break;
     case 4:
      $iftmp_24 = $3;
      __label__ = 5;
      break;
     case 5:
      
      $uin = $iftmp_24;
      
      
      
      var $9 = $j % 3 + -1;
      var $10 = $9 + $uin;
      $uin = $10;
      
      var $12 = _PyLong_FromUnsignedLong($uin);
      $pyresult = $12;
      
      if ($12 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $14 = $error_addr;
      var $15 = FUNCTION_TABLE[$14](__str16);
      $0 = $15;
      __label__ = 82;
      break;
     case 7:
      
      var $17 = _PyLong_AsUnsignedLong($pyresult);
      $uout = $17;
      
      var $19 = $uout == -1;
      if ($19) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      var $20 = _PyErr_Occurred();
      
      if ($20 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $22 = $error_addr;
      var $23 = FUNCTION_TABLE[$22](__str17);
      $0 = $23;
      __label__ = 82;
      break;
     case 10:
      
      
      
      if ($uout != $uin) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $27 = $error_addr;
      var $28 = FUNCTION_TABLE[$27](__str18);
      $0 = $28;
      __label__ = 82;
      break;
     case 12:
      
      
      
      var $32 = HEAP[$pyresult] - 1;
      
      
      HEAP[$pyresult] = $32;
      
      
      
      
      if (HEAP[$pyresult] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $43 = HEAP[HEAP[$pyresult + 4] + 24];
      
      FUNCTION_TABLE[$43]($pyresult);
      __label__ = 14;
      break;
     case 14:
      $pyresult = 0;
      
      $in = $uin;
      
      var $47 = _PyLong_FromLong($in);
      $pyresult = $47;
      
      if ($47 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $49 = $error_addr;
      var $50 = FUNCTION_TABLE[$49](__str19);
      $0 = $50;
      __label__ = 82;
      break;
     case 16:
      
      var $52 = _PyLong_AsLong($pyresult);
      $out = $52;
      
      var $54 = $out == -1;
      if ($54) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      var $55 = _PyErr_Occurred();
      
      if ($55 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $57 = $error_addr;
      var $58 = FUNCTION_TABLE[$57](__str20);
      $0 = $58;
      __label__ = 82;
      break;
     case 19:
      
      
      
      if ($out != $in) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $62 = $error_addr;
      var $63 = FUNCTION_TABLE[$62](__str21);
      $0 = $63;
      __label__ = 82;
      break;
     case 21:
      
      
      
      var $67 = HEAP[$pyresult] - 1;
      
      
      HEAP[$pyresult] = $67;
      
      
      
      
      if (HEAP[$pyresult] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $78 = HEAP[HEAP[$pyresult + 4] + 24];
      
      FUNCTION_TABLE[$78]($pyresult);
      __label__ = 23;
      break;
     case 23:
      $pyresult = 0;
      
      var $81 = $j + 1;
      $j = $81;
      __lastLabel__ = 23;
      __label__ = 24;
      break;
     case 24:
      var $82 = __lastLabel__ == 23 ? $81 : 0;
      
      if ($82 <= 5) {
        __label__ = 2;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      var $85 = $i + 1;
      $i = $85;
      
      var $87 = $base << 1;
      $base = $87;
      __label__ = 26;
      break;
     case 26:
      
      
      
      
      if ($NBITS + 1 > $i) {
        __label__ = 1;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      var $92 = _PyLong_FromLong(1);
      $one = $92;
      
      
      if ($one == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      var $95 = $error_addr;
      var $96 = FUNCTION_TABLE[$95](__str22);
      $0 = $96;
      __label__ = 82;
      break;
     case 29:
      
      var $98 = _PyNumber_Negative($one);
      $x = $98;
      
      
      if ($x == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      var $101 = $error_addr;
      var $102 = FUNCTION_TABLE[$101](__str23);
      $0 = $102;
      __label__ = 82;
      break;
     case 31:
      
      var $104 = _PyLong_AsUnsignedLong($x);
      $uout28 = $104;
      
      var $106 = $uout28 != -1;
      if ($106) {
        __label__ = 33;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      var $107 = _PyErr_Occurred();
      
      if ($107 == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      var $109 = $error_addr;
      var $110 = FUNCTION_TABLE[$109](__str24);
      $0 = $110;
      __label__ = 82;
      break;
     case 34:
      var $111 = HEAP[_PyExc_OverflowError];
      var $112 = _PyErr_ExceptionMatches($111);
      
      if ($112 == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      var $114 = $error_addr;
      var $115 = FUNCTION_TABLE[$114](__str25);
      $0 = $115;
      __label__ = 82;
      break;
     case 36:
      _PyErr_Clear();
      
      
      
      var $119 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $119;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $130 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$130]($x);
      __label__ = 38;
      break;
     case 38:
      $x = 0;
      
      var $133 = _PyLong_FromLong($NBITS);
      $y = $133;
      
      if ($133 == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      var $135 = $error_addr;
      var $136 = FUNCTION_TABLE[$135](__str22);
      $0 = $136;
      __label__ = 82;
      break;
     case 40:
      
      
      var $139 = _PyNumber_Lshift($one, $y);
      $x = $139;
      
      
      
      var $143 = HEAP[$y] - 1;
      
      
      HEAP[$y] = $143;
      
      
      
      
      if (HEAP[$y] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $154 = HEAP[HEAP[$y + 4] + 24];
      
      FUNCTION_TABLE[$154]($y);
      __label__ = 42;
      break;
     case 42:
      $y = 0;
      
      
      if ($x == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      var $158 = $error_addr;
      var $159 = FUNCTION_TABLE[$158](__str26);
      $0 = $159;
      __label__ = 82;
      break;
     case 44:
      
      var $161 = _PyLong_AsUnsignedLong($x);
      $uout28 = $161;
      
      var $163 = $uout28 != -1;
      if ($163) {
        __label__ = 46;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 45:
      var $164 = _PyErr_Occurred();
      
      if ($164 == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      var $166 = $error_addr;
      var $167 = FUNCTION_TABLE[$166](__str27);
      $0 = $167;
      __label__ = 82;
      break;
     case 47:
      var $168 = HEAP[_PyExc_OverflowError];
      var $169 = _PyErr_ExceptionMatches($168);
      
      if ($169 == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      var $171 = $error_addr;
      var $172 = FUNCTION_TABLE[$171](__str28);
      $0 = $172;
      __label__ = 82;
      break;
     case 49:
      _PyErr_Clear();
      
      
      var $175 = _PyNumber_Rshift($x, $one);
      $y = $175;
      
      
      
      var $179 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $179;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      
      
      
      var $190 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$190]($x);
      __label__ = 51;
      break;
     case 51:
      $x = 0;
      
      
      if ($y == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      var $194 = $error_addr;
      var $195 = FUNCTION_TABLE[$194](__str29);
      $0 = $195;
      __label__ = 82;
      break;
     case 53:
      
      var $197 = _PyLong_AsLong($y);
      $out27 = $197;
      
      var $199 = $out27 != -1;
      if ($199) {
        __label__ = 55;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 54:
      var $200 = _PyErr_Occurred();
      
      if ($200 == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      var $202 = $error_addr;
      var $203 = FUNCTION_TABLE[$202](__str30);
      $0 = $203;
      __label__ = 82;
      break;
     case 56:
      var $204 = HEAP[_PyExc_OverflowError];
      var $205 = _PyErr_ExceptionMatches($204);
      
      if ($205 == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      var $207 = $error_addr;
      var $208 = FUNCTION_TABLE[$207](__str31);
      $0 = $208;
      __label__ = 82;
      break;
     case 58:
      _PyErr_Clear();
      
      var $210 = _PyNumber_Negative($y);
      $x = $210;
      
      
      
      var $214 = HEAP[$y] - 1;
      
      
      HEAP[$y] = $214;
      
      
      
      
      if (HEAP[$y] == 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      
      
      
      
      var $225 = HEAP[HEAP[$y + 4] + 24];
      
      FUNCTION_TABLE[$225]($y);
      __label__ = 60;
      break;
     case 60:
      $y = 0;
      
      
      if ($x == 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      var $229 = $error_addr;
      var $230 = FUNCTION_TABLE[$229](__str23);
      $0 = $230;
      __label__ = 82;
      break;
     case 62:
      
      
      var $233 = _PyNumber_Subtract($x, $one);
      $y = $233;
      
      
      
      var $237 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $237;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      
      
      
      
      var $248 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$248]($x);
      __label__ = 64;
      break;
     case 64:
      $x = 0;
      
      
      if ($y == 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      var $252 = $error_addr;
      var $253 = FUNCTION_TABLE[$252](__str32);
      $0 = $253;
      __label__ = 82;
      break;
     case 66:
      
      var $255 = _PyLong_AsLong($y);
      $out27 = $255;
      
      var $257 = $out27 != -1;
      if ($257) {
        __label__ = 68;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 67:
      var $258 = _PyErr_Occurred();
      
      if ($258 == 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 68:
      var $260 = $error_addr;
      var $261 = FUNCTION_TABLE[$260](__str33);
      $0 = $261;
      __label__ = 82;
      break;
     case 69:
      var $262 = HEAP[_PyExc_OverflowError];
      var $263 = _PyErr_ExceptionMatches($262);
      
      if ($263 == 0) {
        __label__ = 70;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 70:
      var $265 = $error_addr;
      var $266 = FUNCTION_TABLE[$265](__str34);
      $0 = $266;
      __label__ = 82;
      break;
     case 71:
      _PyErr_Clear();
      
      
      
      var $270 = HEAP[$y] - 1;
      
      
      HEAP[$y] = $270;
      
      
      
      
      if (HEAP[$y] == 0) {
        __label__ = 72;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 72:
      
      
      
      
      var $281 = HEAP[HEAP[$y + 4] + 24];
      
      FUNCTION_TABLE[$281]($y);
      __label__ = 73;
      break;
     case 73:
      $y = 0;
      
      
      if ($x != 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 74:
      
      
      
      var $288 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $288;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      
      
      
      
      var $299 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$299]($x);
      __label__ = 76;
      break;
     case 76:
      
      
      if ($y != 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 77:
      
      
      
      var $305 = HEAP[$y] - 1;
      
      
      HEAP[$y] = $305;
      
      
      
      
      if (HEAP[$y] == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 78:
      
      
      
      
      var $316 = HEAP[HEAP[$y + 4] + 24];
      
      FUNCTION_TABLE[$316]($y);
      __label__ = 79;
      break;
     case 79:
      
      
      
      var $321 = HEAP[$one] - 1;
      
      
      HEAP[$one] = $321;
      
      
      
      
      if (HEAP[$one] == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 80:
      
      
      
      
      var $332 = HEAP[HEAP[$one + 4] + 24];
      
      FUNCTION_TABLE[$332]($one);
      __label__ = 81;
      break;
     case 81:
      
      var $335 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $335;
      $0 = __Py_NoneStruct;
      __label__ = 82;
      break;
     case 82:
      
      $retval = $0;
      var $retval84 = $retval;
      return $retval84;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_long_api($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    var $1 = _test_long_api_inner();
    $0 = $1;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _raise_test_longlong_error($msg) {
    
    var $msg_addr;
    var $retval;
    var $0;
    $msg_addr = $msg;
    
    var $2 = _raiseTestError(__str35, $msg_addr);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _test_longlong_api_inner() {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $error_addr;
      var $retval;
      var $0;
      var $iftmp_30;
      var $NBITS;
      var $base;
      var $pyresult;
      var $i;
      var $j;
      var $in;
      var $out;
      var $uin;
      var $uout;
      var $one;
      var $x;
      var $y;
      var $out27;
      var $uout28;
      $error_addr = FUNCTION_TABLE_OFFSET + 4;
      $NBITS = 64;
      $base = 1;
      $i = 0;
      __label__ = 26;
      break;
     case 1:
      $j = 0;
      __lastLabel__ = 1;
      __label__ = 24;
      break;
     case 2:
      
      
      var $3 = $base;
      if ($j > 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      $iftmp_30 = 0 - $3;
      __label__ = 5;
      break;
     case 4:
      $iftmp_30 = $3;
      __label__ = 5;
      break;
     case 5:
      
      $uin = $iftmp_30;
      
      
      
      
      
      var $11 = $j % 3 - 1 + $uin;
      $uin = $11;
      
      var $13 = _PyLong_FromUnsignedLongLong($uin);
      $pyresult = $13;
      
      if ($13 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $15 = $error_addr;
      var $16 = FUNCTION_TABLE[$15](__str16);
      $0 = $16;
      __label__ = 82;
      break;
     case 7:
      
      var $18 = _PyLong_AsUnsignedLongLong($pyresult);
      $uout = $18;
      
      var $20 = $uout == -1;
      if ($20) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      var $21 = _PyErr_Occurred();
      
      if ($21 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $23 = $error_addr;
      var $24 = FUNCTION_TABLE[$23](__str17);
      $0 = $24;
      __label__ = 82;
      break;
     case 10:
      
      
      
      if ($uout != $uin) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $28 = $error_addr;
      var $29 = FUNCTION_TABLE[$28](__str18);
      $0 = $29;
      __label__ = 82;
      break;
     case 12:
      
      
      
      var $33 = HEAP[$pyresult] - 1;
      
      
      HEAP[$pyresult] = $33;
      
      
      
      
      if (HEAP[$pyresult] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $44 = HEAP[HEAP[$pyresult + 4] + 24];
      
      FUNCTION_TABLE[$44]($pyresult);
      __label__ = 14;
      break;
     case 14:
      $pyresult = 0;
      
      $in = $uin;
      
      var $48 = _PyLong_FromLongLong($in);
      $pyresult = $48;
      
      if ($48 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $50 = $error_addr;
      var $51 = FUNCTION_TABLE[$50](__str19);
      $0 = $51;
      __label__ = 82;
      break;
     case 16:
      
      var $53 = _PyLong_AsLongLong($pyresult);
      $out = $53;
      
      var $55 = $out == -1;
      if ($55) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      var $56 = _PyErr_Occurred();
      
      if ($56 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $58 = $error_addr;
      var $59 = FUNCTION_TABLE[$58](__str20);
      $0 = $59;
      __label__ = 82;
      break;
     case 19:
      
      
      
      if ($out != $in) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $63 = $error_addr;
      var $64 = FUNCTION_TABLE[$63](__str21);
      $0 = $64;
      __label__ = 82;
      break;
     case 21:
      
      
      
      var $68 = HEAP[$pyresult] - 1;
      
      
      HEAP[$pyresult] = $68;
      
      
      
      
      if (HEAP[$pyresult] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $79 = HEAP[HEAP[$pyresult + 4] + 24];
      
      FUNCTION_TABLE[$79]($pyresult);
      __label__ = 23;
      break;
     case 23:
      $pyresult = 0;
      
      var $82 = $j + 1;
      $j = $82;
      __lastLabel__ = 23;
      __label__ = 24;
      break;
     case 24:
      var $83 = __lastLabel__ == 23 ? $82 : 0;
      
      if ($83 <= 5) {
        __label__ = 2;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      var $86 = $i + 1;
      $i = $86;
      
      var $88 = $base * Math.pow(2, 1);
      $base = $88;
      __label__ = 26;
      break;
     case 26:
      
      
      
      
      if ($NBITS + 1 > $i) {
        __label__ = 1;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      var $93 = _PyLong_FromLong(1);
      $one = $93;
      
      
      if ($one == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      var $96 = $error_addr;
      var $97 = FUNCTION_TABLE[$96](__str22);
      $0 = $97;
      __label__ = 82;
      break;
     case 29:
      
      var $99 = _PyNumber_Negative($one);
      $x = $99;
      
      
      if ($x == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      var $102 = $error_addr;
      var $103 = FUNCTION_TABLE[$102](__str23);
      $0 = $103;
      __label__ = 82;
      break;
     case 31:
      
      var $105 = _PyLong_AsUnsignedLongLong($x);
      $uout28 = $105;
      
      var $107 = $uout28 != -1;
      if ($107) {
        __label__ = 33;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      var $108 = _PyErr_Occurred();
      
      if ($108 == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      var $110 = $error_addr;
      var $111 = FUNCTION_TABLE[$110](__str24);
      $0 = $111;
      __label__ = 82;
      break;
     case 34:
      var $112 = HEAP[_PyExc_OverflowError];
      var $113 = _PyErr_ExceptionMatches($112);
      
      if ($113 == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      var $115 = $error_addr;
      var $116 = FUNCTION_TABLE[$115](__str25);
      $0 = $116;
      __label__ = 82;
      break;
     case 36:
      _PyErr_Clear();
      
      
      
      var $120 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $120;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $131 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$131]($x);
      __label__ = 38;
      break;
     case 38:
      $x = 0;
      
      var $134 = _PyLong_FromLong($NBITS);
      $y = $134;
      
      if ($134 == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      var $136 = $error_addr;
      var $137 = FUNCTION_TABLE[$136](__str22);
      $0 = $137;
      __label__ = 82;
      break;
     case 40:
      
      
      var $140 = _PyNumber_Lshift($one, $y);
      $x = $140;
      
      
      
      var $144 = HEAP[$y] - 1;
      
      
      HEAP[$y] = $144;
      
      
      
      
      if (HEAP[$y] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $155 = HEAP[HEAP[$y + 4] + 24];
      
      FUNCTION_TABLE[$155]($y);
      __label__ = 42;
      break;
     case 42:
      $y = 0;
      
      
      if ($x == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      var $159 = $error_addr;
      var $160 = FUNCTION_TABLE[$159](__str26);
      $0 = $160;
      __label__ = 82;
      break;
     case 44:
      
      var $162 = _PyLong_AsUnsignedLongLong($x);
      $uout28 = $162;
      
      var $164 = $uout28 != -1;
      if ($164) {
        __label__ = 46;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 45:
      var $165 = _PyErr_Occurred();
      
      if ($165 == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      var $167 = $error_addr;
      var $168 = FUNCTION_TABLE[$167](__str27);
      $0 = $168;
      __label__ = 82;
      break;
     case 47:
      var $169 = HEAP[_PyExc_OverflowError];
      var $170 = _PyErr_ExceptionMatches($169);
      
      if ($170 == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      var $172 = $error_addr;
      var $173 = FUNCTION_TABLE[$172](__str28);
      $0 = $173;
      __label__ = 82;
      break;
     case 49:
      _PyErr_Clear();
      
      
      var $176 = _PyNumber_Rshift($x, $one);
      $y = $176;
      
      
      
      var $180 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $180;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      
      
      
      var $191 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$191]($x);
      __label__ = 51;
      break;
     case 51:
      $x = 0;
      
      
      if ($y == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      var $195 = $error_addr;
      var $196 = FUNCTION_TABLE[$195](__str29);
      $0 = $196;
      __label__ = 82;
      break;
     case 53:
      
      var $198 = _PyLong_AsLongLong($y);
      $out27 = $198;
      
      var $200 = $out27 != -1;
      if ($200) {
        __label__ = 55;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 54:
      var $201 = _PyErr_Occurred();
      
      if ($201 == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      var $203 = $error_addr;
      var $204 = FUNCTION_TABLE[$203](__str30);
      $0 = $204;
      __label__ = 82;
      break;
     case 56:
      var $205 = HEAP[_PyExc_OverflowError];
      var $206 = _PyErr_ExceptionMatches($205);
      
      if ($206 == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      var $208 = $error_addr;
      var $209 = FUNCTION_TABLE[$208](__str31);
      $0 = $209;
      __label__ = 82;
      break;
     case 58:
      _PyErr_Clear();
      
      var $211 = _PyNumber_Negative($y);
      $x = $211;
      
      
      
      var $215 = HEAP[$y] - 1;
      
      
      HEAP[$y] = $215;
      
      
      
      
      if (HEAP[$y] == 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      
      
      
      
      var $226 = HEAP[HEAP[$y + 4] + 24];
      
      FUNCTION_TABLE[$226]($y);
      __label__ = 60;
      break;
     case 60:
      $y = 0;
      
      
      if ($x == 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      var $230 = $error_addr;
      var $231 = FUNCTION_TABLE[$230](__str23);
      $0 = $231;
      __label__ = 82;
      break;
     case 62:
      
      
      var $234 = _PyNumber_Subtract($x, $one);
      $y = $234;
      
      
      
      var $238 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $238;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      
      
      
      
      var $249 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$249]($x);
      __label__ = 64;
      break;
     case 64:
      $x = 0;
      
      
      if ($y == 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      var $253 = $error_addr;
      var $254 = FUNCTION_TABLE[$253](__str32);
      $0 = $254;
      __label__ = 82;
      break;
     case 66:
      
      var $256 = _PyLong_AsLongLong($y);
      $out27 = $256;
      
      var $258 = $out27 != -1;
      if ($258) {
        __label__ = 68;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 67:
      var $259 = _PyErr_Occurred();
      
      if ($259 == 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 68:
      var $261 = $error_addr;
      var $262 = FUNCTION_TABLE[$261](__str33);
      $0 = $262;
      __label__ = 82;
      break;
     case 69:
      var $263 = HEAP[_PyExc_OverflowError];
      var $264 = _PyErr_ExceptionMatches($263);
      
      if ($264 == 0) {
        __label__ = 70;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 70:
      var $266 = $error_addr;
      var $267 = FUNCTION_TABLE[$266](__str34);
      $0 = $267;
      __label__ = 82;
      break;
     case 71:
      _PyErr_Clear();
      
      
      
      var $271 = HEAP[$y] - 1;
      
      
      HEAP[$y] = $271;
      
      
      
      
      if (HEAP[$y] == 0) {
        __label__ = 72;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 72:
      
      
      
      
      var $282 = HEAP[HEAP[$y + 4] + 24];
      
      FUNCTION_TABLE[$282]($y);
      __label__ = 73;
      break;
     case 73:
      $y = 0;
      
      
      if ($x != 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 74:
      
      
      
      var $289 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $289;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      
      
      
      
      var $300 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$300]($x);
      __label__ = 76;
      break;
     case 76:
      
      
      if ($y != 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 77:
      
      
      
      var $306 = HEAP[$y] - 1;
      
      
      HEAP[$y] = $306;
      
      
      
      
      if (HEAP[$y] == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 78:
      
      
      
      
      var $317 = HEAP[HEAP[$y + 4] + 24];
      
      FUNCTION_TABLE[$317]($y);
      __label__ = 79;
      break;
     case 79:
      
      
      
      var $322 = HEAP[$one] - 1;
      
      
      HEAP[$one] = $322;
      
      
      
      
      if (HEAP[$one] == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 80:
      
      
      
      
      var $333 = HEAP[HEAP[$one + 4] + 24];
      
      FUNCTION_TABLE[$333]($one);
      __label__ = 81;
      break;
     case 81:
      
      var $336 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $336;
      $0 = __Py_NoneStruct;
      __label__ = 82;
      break;
     case 82:
      
      $retval = $0;
      var $retval84 = $retval;
      return $retval84;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_longlong_api($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    var $1 = _test_longlong_api_inner();
    $0 = $1;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _test_long_and_overflow($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $num;
      var $one;
      var $temp;
      var $value;
      var $overflow = __stackBase__;
      $self_addr = $self;
      var $1 = _PyLong_FromString(__str36, 0, 16);
      $num = $1;
      
      
      if ($num == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 113;
      break;
     case 2:
      HEAP[$overflow] = 1234;
      
      var $5 = _PyLong_AsLongAndOverflow($num, $overflow);
      $value = $5;
      
      
      
      var $9 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $9;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $20 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$20]($num);
      __label__ = 4;
      break;
     case 4:
      
      var $23 = $value == -1;
      if ($23) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $24 = _PyErr_Occurred();
      
      if ($24 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 113;
      break;
     case 7:
      
      var $26 = $value != -1;
      if ($26) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $27 = _raiseTestError(__str37, __str38);
      $0 = $27;
      __label__ = 113;
      break;
     case 9:
      
      
      if (HEAP[$overflow] != 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $30 = _raiseTestError(__str37, __str39);
      $0 = $30;
      __label__ = 113;
      break;
     case 11:
      var $31 = _PyLong_FromLong(2147483647);
      $num = $31;
      
      
      if ($num == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = 0;
      __label__ = 113;
      break;
     case 13:
      var $34 = _PyLong_FromLong(1);
      $one = $34;
      
      
      var $37 = $num;
      if ($one == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      
      var $40 = HEAP[$37] - 1;
      
      
      HEAP[$num] = $40;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $51 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$51]($num);
      __label__ = 16;
      break;
     case 16:
      $0 = 0;
      __label__ = 113;
      break;
     case 17:
      
      var $54 = _PyNumber_Add($37, $one);
      $temp = $54;
      
      
      
      var $58 = HEAP[$one] - 1;
      
      
      HEAP[$one] = $58;
      
      
      
      
      if (HEAP[$one] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $69 = HEAP[HEAP[$one + 4] + 24];
      
      FUNCTION_TABLE[$69]($one);
      __label__ = 19;
      break;
     case 19:
      
      
      
      var $74 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $74;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $85 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$85]($num);
      __label__ = 21;
      break;
     case 21:
      
      $num = $temp;
      
      if ($temp == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      $0 = 0;
      __label__ = 113;
      break;
     case 23:
      HEAP[$overflow] = 0;
      
      var $90 = _PyLong_AsLongAndOverflow($num, $overflow);
      $value = $90;
      
      
      
      var $94 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $94;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $105 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$105]($num);
      __label__ = 25;
      break;
     case 25:
      
      var $108 = $value == -1;
      if ($108) {
        __label__ = 26;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 26:
      var $109 = _PyErr_Occurred();
      
      if ($109 != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      $0 = 0;
      __label__ = 113;
      break;
     case 28:
      
      var $111 = $value != -1;
      if ($111) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $112 = _raiseTestError(__str37, __str38);
      $0 = $112;
      __label__ = 113;
      break;
     case 30:
      
      
      if (HEAP[$overflow] != 1) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      var $115 = _raiseTestError(__str37, __str39);
      $0 = $115;
      __label__ = 113;
      break;
     case 32:
      var $116 = _PyLong_FromString(__str40, 0, 16);
      $num = $116;
      
      
      if ($num == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      $0 = 0;
      __label__ = 113;
      break;
     case 34:
      HEAP[$overflow] = 1234;
      
      var $120 = _PyLong_AsLongAndOverflow($num, $overflow);
      $value = $120;
      
      
      
      var $124 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $124;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $135 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$135]($num);
      __label__ = 36;
      break;
     case 36:
      
      var $138 = $value == -1;
      if ($138) {
        __label__ = 37;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 37:
      var $139 = _PyErr_Occurred();
      
      if ($139 != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      $0 = 0;
      __label__ = 113;
      break;
     case 39:
      
      var $141 = $value != -1;
      if ($141) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      var $142 = _raiseTestError(__str37, __str38);
      $0 = $142;
      __label__ = 113;
      break;
     case 41:
      
      var $144 = HEAP[$overflow] != -1;
      if ($144) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      var $145 = _raiseTestError(__str37, __str41);
      $0 = $145;
      __label__ = 113;
      break;
     case 43:
      var $146 = _PyLong_FromLong(-2147483648);
      $num = $146;
      
      
      if ($num == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      $0 = 0;
      __label__ = 113;
      break;
     case 45:
      var $149 = _PyLong_FromLong(1);
      $one = $149;
      
      
      var $152 = $num;
      if ($one == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 46:
      
      
      var $155 = HEAP[$152] - 1;
      
      
      HEAP[$num] = $155;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      
      
      
      
      var $166 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$166]($num);
      __label__ = 48;
      break;
     case 48:
      $0 = 0;
      __label__ = 113;
      break;
     case 49:
      
      var $169 = _PyNumber_Subtract($152, $one);
      $temp = $169;
      
      
      
      var $173 = HEAP[$one] - 1;
      
      
      HEAP[$one] = $173;
      
      
      
      
      if (HEAP[$one] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      
      
      
      var $184 = HEAP[HEAP[$one + 4] + 24];
      
      FUNCTION_TABLE[$184]($one);
      __label__ = 51;
      break;
     case 51:
      
      
      
      var $189 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $189;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      
      
      
      
      var $200 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$200]($num);
      __label__ = 53;
      break;
     case 53:
      
      $num = $temp;
      
      if ($temp == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      $0 = 0;
      __label__ = 113;
      break;
     case 55:
      HEAP[$overflow] = 0;
      
      var $205 = _PyLong_AsLongAndOverflow($num, $overflow);
      $value = $205;
      
      
      
      var $209 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $209;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      
      
      
      
      var $220 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$220]($num);
      __label__ = 57;
      break;
     case 57:
      
      var $223 = $value == -1;
      if ($223) {
        __label__ = 58;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 58:
      var $224 = _PyErr_Occurred();
      
      if ($224 != 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      $0 = 0;
      __label__ = 113;
      break;
     case 60:
      
      var $226 = $value != -1;
      if ($226) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      var $227 = _raiseTestError(__str37, __str38);
      $0 = $227;
      __label__ = 113;
      break;
     case 62:
      
      var $229 = HEAP[$overflow] != -1;
      if ($229) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      var $230 = _raiseTestError(__str37, __str41);
      $0 = $230;
      __label__ = 113;
      break;
     case 64:
      var $231 = _PyLong_FromString(__str42, 0, 16);
      $num = $231;
      
      
      if ($num == 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      $0 = 0;
      __label__ = 113;
      break;
     case 66:
      HEAP[$overflow] = 1234;
      
      var $235 = _PyLong_AsLongAndOverflow($num, $overflow);
      $value = $235;
      
      
      
      var $239 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $239;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 67;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 67:
      
      
      
      
      var $250 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$250]($num);
      __label__ = 68;
      break;
     case 68:
      var $252 = $value;
      var $253 = $252 == -1;
      if ($253) {
        __lastLabel__ = 68;
        __label__ = 69;
        break;
      } else {
        __lastLabel__ = 68;
        __label__ = 72;
        break;
      }
     case 69:
      var $254 = _PyErr_Occurred();
      
      if ($254 != 0) {
        __label__ = 70;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 70:
      $0 = 0;
      __label__ = 113;
      break;
     case 71:
      var $_pr4 = $value;
      __lastLabel__ = 71;
      __label__ = 72;
      break;
     case 72:
      var $256 = __lastLabel__ == 71 ? $_pr4 : $252;
      
      if ($256 != 255) {
        __label__ = 73;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 73:
      var $258 = _raiseTestError(__str37, __str43);
      $0 = $258;
      __label__ = 113;
      break;
     case 74:
      
      
      if (HEAP[$overflow] != 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      var $261 = _raiseTestError(__str37, __str44);
      $0 = $261;
      __label__ = 113;
      break;
     case 76:
      var $262 = _PyLong_FromString(__str45, 0, 16);
      $num = $262;
      
      
      if ($num == 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 77:
      $0 = 0;
      __label__ = 113;
      break;
     case 78:
      HEAP[$overflow] = 0;
      
      var $266 = _PyLong_AsLongAndOverflow($num, $overflow);
      $value = $266;
      
      
      
      var $270 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $270;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 79:
      
      
      
      
      var $281 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$281]($num);
      __label__ = 80;
      break;
     case 80:
      var $283 = $value;
      var $284 = $283 == -1;
      if ($284) {
        __lastLabel__ = 80;
        __label__ = 81;
        break;
      } else {
        __lastLabel__ = 80;
        __label__ = 84;
        break;
      }
     case 81:
      var $285 = _PyErr_Occurred();
      
      if ($285 != 0) {
        __label__ = 82;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 82:
      $0 = 0;
      __label__ = 113;
      break;
     case 83:
      var $_pr5 = $value;
      __lastLabel__ = 83;
      __label__ = 84;
      break;
     case 84:
      var $287 = __lastLabel__ == 83 ? $_pr5 : $283;
      var $288 = $287 != -255;
      if ($288) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      var $289 = _raiseTestError(__str37, __str43);
      $0 = $289;
      __label__ = 113;
      break;
     case 86:
      
      
      if (HEAP[$overflow] != 0) {
        __label__ = 87;
        break;
      } else {
        __label__ = 88;
        break;
      }
     case 87:
      var $292 = _raiseTestError(__str37, __str46);
      $0 = $292;
      __label__ = 113;
      break;
     case 88:
      var $293 = _PyLong_FromLong(2147483647);
      $num = $293;
      
      
      if ($num == 0) {
        __label__ = 89;
        break;
      } else {
        __label__ = 90;
        break;
      }
     case 89:
      $0 = 0;
      __label__ = 113;
      break;
     case 90:
      HEAP[$overflow] = 1234;
      
      var $297 = _PyLong_AsLongAndOverflow($num, $overflow);
      $value = $297;
      
      
      
      var $301 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $301;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 91;
        break;
      } else {
        __label__ = 92;
        break;
      }
     case 91:
      
      
      
      
      var $312 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$312]($num);
      __label__ = 92;
      break;
     case 92:
      var $314 = $value;
      var $315 = $314 == -1;
      if ($315) {
        __lastLabel__ = 92;
        __label__ = 93;
        break;
      } else {
        __lastLabel__ = 92;
        __label__ = 96;
        break;
      }
     case 93:
      var $316 = _PyErr_Occurred();
      
      if ($316 != 0) {
        __label__ = 94;
        break;
      } else {
        __label__ = 95;
        break;
      }
     case 94:
      $0 = 0;
      __label__ = 113;
      break;
     case 95:
      var $_pr6 = $value;
      __lastLabel__ = 95;
      __label__ = 96;
      break;
     case 96:
      var $318 = __lastLabel__ == 95 ? $_pr6 : $314;
      
      if ($318 != 2147483647) {
        __label__ = 97;
        break;
      } else {
        __label__ = 98;
        break;
      }
     case 97:
      var $320 = _raiseTestError(__str37, __str47);
      $0 = $320;
      __label__ = 113;
      break;
     case 98:
      
      
      if (HEAP[$overflow] != 0) {
        __label__ = 99;
        break;
      } else {
        __label__ = 100;
        break;
      }
     case 99:
      var $323 = _raiseTestError(__str37, __str44);
      $0 = $323;
      __label__ = 113;
      break;
     case 100:
      var $324 = _PyLong_FromLong(-2147483648);
      $num = $324;
      
      
      if ($num == 0) {
        __label__ = 101;
        break;
      } else {
        __label__ = 102;
        break;
      }
     case 101:
      $0 = 0;
      __label__ = 113;
      break;
     case 102:
      HEAP[$overflow] = 0;
      
      var $328 = _PyLong_AsLongAndOverflow($num, $overflow);
      $value = $328;
      
      
      
      var $332 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $332;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 103;
        break;
      } else {
        __label__ = 104;
        break;
      }
     case 103:
      
      
      
      
      var $343 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$343]($num);
      __label__ = 104;
      break;
     case 104:
      var $345 = $value;
      var $346 = $345 == -1;
      if ($346) {
        __lastLabel__ = 104;
        __label__ = 105;
        break;
      } else {
        __lastLabel__ = 104;
        __label__ = 108;
        break;
      }
     case 105:
      var $347 = _PyErr_Occurred();
      
      if ($347 != 0) {
        __label__ = 106;
        break;
      } else {
        __label__ = 107;
        break;
      }
     case 106:
      $0 = 0;
      __label__ = 113;
      break;
     case 107:
      var $_pr7 = $value;
      __lastLabel__ = 107;
      __label__ = 108;
      break;
     case 108:
      var $349 = __lastLabel__ == 107 ? $_pr7 : $345;
      var $350 = $349 != -2147483648;
      if ($350) {
        __label__ = 109;
        break;
      } else {
        __label__ = 110;
        break;
      }
     case 109:
      var $351 = _raiseTestError(__str37, __str48);
      $0 = $351;
      __label__ = 113;
      break;
     case 110:
      
      
      if (HEAP[$overflow] != 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 112;
        break;
      }
     case 111:
      var $354 = _raiseTestError(__str37, __str44);
      $0 = $354;
      __label__ = 113;
      break;
     case 112:
      
      var $356 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $356;
      $0 = __Py_NoneStruct;
      __label__ = 113;
      break;
     case 113:
      
      $retval = $0;
      var $retval109 = $retval;
      STACKTOP = __stackBase__;
      return $retval109;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_long_long_and_overflow($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $num;
      var $one;
      var $temp;
      var $value;
      var $overflow = __stackBase__;
      $self_addr = $self;
      var $1 = _PyLong_FromString(__str36, 0, 16);
      $num = $1;
      
      
      if ($num == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 113;
      break;
     case 2:
      HEAP[$overflow] = 1234;
      
      var $5 = _PyLong_AsLongLongAndOverflow($num, $overflow);
      $value = $5;
      
      
      
      var $9 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $9;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $20 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$20]($num);
      __label__ = 4;
      break;
     case 4:
      
      var $23 = $value == -1;
      if ($23) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $24 = _PyErr_Occurred();
      
      if ($24 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 113;
      break;
     case 7:
      
      var $26 = $value != -1;
      if ($26) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $27 = _raiseTestError(__str49, __str38);
      $0 = $27;
      __label__ = 113;
      break;
     case 9:
      
      
      if (HEAP[$overflow] != 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $30 = _raiseTestError(__str49, __str39);
      $0 = $30;
      __label__ = 113;
      break;
     case 11:
      var $31 = _PyLong_FromLongLong(0x8000000000000000);
      $num = $31;
      
      
      if ($num == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = 0;
      __label__ = 113;
      break;
     case 13:
      var $34 = _PyLong_FromLong(1);
      $one = $34;
      
      
      var $37 = $num;
      if ($one == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      
      var $40 = HEAP[$37] - 1;
      
      
      HEAP[$num] = $40;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $51 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$51]($num);
      __label__ = 16;
      break;
     case 16:
      $0 = 0;
      __label__ = 113;
      break;
     case 17:
      
      var $54 = _PyNumber_Add($37, $one);
      $temp = $54;
      
      
      
      var $58 = HEAP[$one] - 1;
      
      
      HEAP[$one] = $58;
      
      
      
      
      if (HEAP[$one] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $69 = HEAP[HEAP[$one + 4] + 24];
      
      FUNCTION_TABLE[$69]($one);
      __label__ = 19;
      break;
     case 19:
      
      
      
      var $74 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $74;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $85 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$85]($num);
      __label__ = 21;
      break;
     case 21:
      
      $num = $temp;
      
      if ($temp == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      $0 = 0;
      __label__ = 113;
      break;
     case 23:
      HEAP[$overflow] = 0;
      
      var $90 = _PyLong_AsLongLongAndOverflow($num, $overflow);
      $value = $90;
      
      
      
      var $94 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $94;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $105 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$105]($num);
      __label__ = 25;
      break;
     case 25:
      
      var $108 = $value == -1;
      if ($108) {
        __label__ = 26;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 26:
      var $109 = _PyErr_Occurred();
      
      if ($109 != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      $0 = 0;
      __label__ = 113;
      break;
     case 28:
      
      var $111 = $value != -1;
      if ($111) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      var $112 = _raiseTestError(__str49, __str38);
      $0 = $112;
      __label__ = 113;
      break;
     case 30:
      
      
      if (HEAP[$overflow] != 1) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      var $115 = _raiseTestError(__str49, __str39);
      $0 = $115;
      __label__ = 113;
      break;
     case 32:
      var $116 = _PyLong_FromString(__str40, 0, 16);
      $num = $116;
      
      
      if ($num == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      $0 = 0;
      __label__ = 113;
      break;
     case 34:
      HEAP[$overflow] = 1234;
      
      var $120 = _PyLong_AsLongLongAndOverflow($num, $overflow);
      $value = $120;
      
      
      
      var $124 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $124;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $135 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$135]($num);
      __label__ = 36;
      break;
     case 36:
      
      var $138 = $value == -1;
      if ($138) {
        __label__ = 37;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 37:
      var $139 = _PyErr_Occurred();
      
      if ($139 != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      $0 = 0;
      __label__ = 113;
      break;
     case 39:
      
      var $141 = $value != -1;
      if ($141) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      var $142 = _raiseTestError(__str49, __str38);
      $0 = $142;
      __label__ = 113;
      break;
     case 41:
      
      var $144 = HEAP[$overflow] != -1;
      if ($144) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      var $145 = _raiseTestError(__str49, __str41);
      $0 = $145;
      __label__ = 113;
      break;
     case 43:
      var $146 = _PyLong_FromLongLong(-0x8000000000000000);
      $num = $146;
      
      
      if ($num == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      $0 = 0;
      __label__ = 113;
      break;
     case 45:
      var $149 = _PyLong_FromLong(1);
      $one = $149;
      
      
      var $152 = $num;
      if ($one == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 46:
      
      
      var $155 = HEAP[$152] - 1;
      
      
      HEAP[$num] = $155;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      
      
      
      
      var $166 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$166]($num);
      __label__ = 48;
      break;
     case 48:
      $0 = 0;
      __label__ = 113;
      break;
     case 49:
      
      var $169 = _PyNumber_Subtract($152, $one);
      $temp = $169;
      
      
      
      var $173 = HEAP[$one] - 1;
      
      
      HEAP[$one] = $173;
      
      
      
      
      if (HEAP[$one] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      
      
      
      var $184 = HEAP[HEAP[$one + 4] + 24];
      
      FUNCTION_TABLE[$184]($one);
      __label__ = 51;
      break;
     case 51:
      
      
      
      var $189 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $189;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      
      
      
      
      var $200 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$200]($num);
      __label__ = 53;
      break;
     case 53:
      
      $num = $temp;
      
      if ($temp == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      $0 = 0;
      __label__ = 113;
      break;
     case 55:
      HEAP[$overflow] = 0;
      
      var $205 = _PyLong_AsLongLongAndOverflow($num, $overflow);
      $value = $205;
      
      
      
      var $209 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $209;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      
      
      
      
      var $220 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$220]($num);
      __label__ = 57;
      break;
     case 57:
      
      var $223 = $value == -1;
      if ($223) {
        __label__ = 58;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 58:
      var $224 = _PyErr_Occurred();
      
      if ($224 != 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      $0 = 0;
      __label__ = 113;
      break;
     case 60:
      
      var $226 = $value != -1;
      if ($226) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      var $227 = _raiseTestError(__str49, __str38);
      $0 = $227;
      __label__ = 113;
      break;
     case 62:
      
      var $229 = HEAP[$overflow] != -1;
      if ($229) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      var $230 = _raiseTestError(__str49, __str41);
      $0 = $230;
      __label__ = 113;
      break;
     case 64:
      var $231 = _PyLong_FromString(__str42, 0, 16);
      $num = $231;
      
      
      if ($num == 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      $0 = 0;
      __label__ = 113;
      break;
     case 66:
      HEAP[$overflow] = 1234;
      
      var $235 = _PyLong_AsLongLongAndOverflow($num, $overflow);
      $value = $235;
      
      
      
      var $239 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $239;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 67;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 67:
      
      
      
      
      var $250 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$250]($num);
      __label__ = 68;
      break;
     case 68:
      var $252 = $value;
      var $253 = $252 == -1;
      if ($253) {
        __lastLabel__ = 68;
        __label__ = 69;
        break;
      } else {
        __lastLabel__ = 68;
        __label__ = 72;
        break;
      }
     case 69:
      var $254 = _PyErr_Occurred();
      
      if ($254 != 0) {
        __label__ = 70;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 70:
      $0 = 0;
      __label__ = 113;
      break;
     case 71:
      var $_pr4 = $value;
      __lastLabel__ = 71;
      __label__ = 72;
      break;
     case 72:
      var $256 = __lastLabel__ == 71 ? $_pr4 : $252;
      
      if ($256 != 255) {
        __label__ = 73;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 73:
      var $258 = _raiseTestError(__str49, __str43);
      $0 = $258;
      __label__ = 113;
      break;
     case 74:
      
      
      if (HEAP[$overflow] != 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      var $261 = _raiseTestError(__str49, __str44);
      $0 = $261;
      __label__ = 113;
      break;
     case 76:
      var $262 = _PyLong_FromString(__str45, 0, 16);
      $num = $262;
      
      
      if ($num == 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 77:
      $0 = 0;
      __label__ = 113;
      break;
     case 78:
      HEAP[$overflow] = 0;
      
      var $266 = _PyLong_AsLongLongAndOverflow($num, $overflow);
      $value = $266;
      
      
      
      var $270 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $270;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 79:
      
      
      
      
      var $281 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$281]($num);
      __label__ = 80;
      break;
     case 80:
      var $283 = $value;
      var $284 = $283 == -1;
      if ($284) {
        __lastLabel__ = 80;
        __label__ = 81;
        break;
      } else {
        __lastLabel__ = 80;
        __label__ = 84;
        break;
      }
     case 81:
      var $285 = _PyErr_Occurred();
      
      if ($285 != 0) {
        __label__ = 82;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 82:
      $0 = 0;
      __label__ = 113;
      break;
     case 83:
      var $_pr5 = $value;
      __lastLabel__ = 83;
      __label__ = 84;
      break;
     case 84:
      var $287 = __lastLabel__ == 83 ? $_pr5 : $283;
      var $288 = $287 != -255;
      if ($288) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      var $289 = _raiseTestError(__str49, __str43);
      $0 = $289;
      __label__ = 113;
      break;
     case 86:
      
      
      if (HEAP[$overflow] != 0) {
        __label__ = 87;
        break;
      } else {
        __label__ = 88;
        break;
      }
     case 87:
      var $292 = _raiseTestError(__str49, __str46);
      $0 = $292;
      __label__ = 113;
      break;
     case 88:
      var $293 = _PyLong_FromLongLong(0x8000000000000000);
      $num = $293;
      
      
      if ($num == 0) {
        __label__ = 89;
        break;
      } else {
        __label__ = 90;
        break;
      }
     case 89:
      $0 = 0;
      __label__ = 113;
      break;
     case 90:
      HEAP[$overflow] = 1234;
      
      var $297 = _PyLong_AsLongLongAndOverflow($num, $overflow);
      $value = $297;
      
      
      
      var $301 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $301;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 91;
        break;
      } else {
        __label__ = 92;
        break;
      }
     case 91:
      
      
      
      
      var $312 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$312]($num);
      __label__ = 92;
      break;
     case 92:
      var $314 = $value;
      var $315 = $314 == -1;
      if ($315) {
        __lastLabel__ = 92;
        __label__ = 93;
        break;
      } else {
        __lastLabel__ = 92;
        __label__ = 96;
        break;
      }
     case 93:
      var $316 = _PyErr_Occurred();
      
      if ($316 != 0) {
        __label__ = 94;
        break;
      } else {
        __label__ = 95;
        break;
      }
     case 94:
      $0 = 0;
      __label__ = 113;
      break;
     case 95:
      var $_pr6 = $value;
      __lastLabel__ = 95;
      __label__ = 96;
      break;
     case 96:
      var $318 = __lastLabel__ == 95 ? $_pr6 : $314;
      var $319 = $318 != -0x8000000000000000;
      if ($319) {
        __label__ = 97;
        break;
      } else {
        __label__ = 98;
        break;
      }
     case 97:
      var $320 = _raiseTestError(__str49, __str50);
      $0 = $320;
      __label__ = 113;
      break;
     case 98:
      
      
      if (HEAP[$overflow] != 0) {
        __label__ = 99;
        break;
      } else {
        __label__ = 100;
        break;
      }
     case 99:
      var $323 = _raiseTestError(__str49, __str44);
      $0 = $323;
      __label__ = 113;
      break;
     case 100:
      var $324 = _PyLong_FromLongLong(-0x8000000000000000);
      $num = $324;
      
      
      if ($num == 0) {
        __label__ = 101;
        break;
      } else {
        __label__ = 102;
        break;
      }
     case 101:
      $0 = 0;
      __label__ = 113;
      break;
     case 102:
      HEAP[$overflow] = 0;
      
      var $328 = _PyLong_AsLongLongAndOverflow($num, $overflow);
      $value = $328;
      
      
      
      var $332 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $332;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 103;
        break;
      } else {
        __label__ = 104;
        break;
      }
     case 103:
      
      
      
      
      var $343 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$343]($num);
      __label__ = 104;
      break;
     case 104:
      var $345 = $value;
      var $346 = $345 == -1;
      if ($346) {
        __lastLabel__ = 104;
        __label__ = 105;
        break;
      } else {
        __lastLabel__ = 104;
        __label__ = 108;
        break;
      }
     case 105:
      var $347 = _PyErr_Occurred();
      
      if ($347 != 0) {
        __label__ = 106;
        break;
      } else {
        __label__ = 107;
        break;
      }
     case 106:
      $0 = 0;
      __label__ = 113;
      break;
     case 107:
      var $_pr7 = $value;
      __lastLabel__ = 107;
      __label__ = 108;
      break;
     case 108:
      var $349 = __lastLabel__ == 107 ? $_pr7 : $345;
      var $350 = $349 != -0x8000000000000000;
      if ($350) {
        __label__ = 109;
        break;
      } else {
        __label__ = 110;
        break;
      }
     case 109:
      var $351 = _raiseTestError(__str49, __str51);
      $0 = $351;
      __label__ = 113;
      break;
     case 110:
      
      
      if (HEAP[$overflow] != 0) {
        __label__ = 111;
        break;
      } else {
        __label__ = 112;
        break;
      }
     case 111:
      var $354 = _raiseTestError(__str49, __str44);
      $0 = $354;
      __label__ = 113;
      break;
     case 112:
      
      var $356 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $356;
      $0 = __Py_NoneStruct;
      __label__ = 113;
      break;
     case 113:
      
      $retval = $0;
      var $retval109 = $retval;
      STACKTOP = __stackBase__;
      return $retval109;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_L_code($self) {
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
      var $tuple;
      var $num;
      var $value = __stackBase__;
      $self_addr = $self;
      var $1 = _PyTuple_New(1);
      $tuple = $1;
      
      
      if ($tuple == 0) {
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
      var $4 = _PyLong_FromLong(42);
      $num = $4;
      
      
      if ($num == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 19;
      break;
     case 4:
      
      
      
      
      
      HEAP[$tuple + 12] = $num;
      HEAP[$value] = -1;
      
      var $13 = _PyArg_ParseTuple($tuple, __str52, allocate([ $value, 0, 0, 0 ], [ "i64*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($13 < 0) {
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
      
      
      if (HEAP[$value] != 42) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $17 = _raiseTestError(__str53, __str54);
      $0 = $17;
      __label__ = 19;
      break;
     case 8:
      
      
      
      var $21 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $21;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $32 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$32]($num);
      __label__ = 10;
      break;
     case 10:
      var $34 = _PyInt_FromLong(42);
      $num = $34;
      
      if ($34 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = 0;
      __label__ = 19;
      break;
     case 12:
      
      
      
      
      
      HEAP[$tuple + 12] = $num;
      HEAP[$value] = -1;
      
      var $42 = _PyArg_ParseTuple($tuple, __str52, allocate([ $value, 0, 0, 0 ], [ "i64*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($42 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = 0;
      __label__ = 19;
      break;
     case 14:
      
      
      if (HEAP[$value] != 42) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $46 = _raiseTestError(__str53, __str55);
      $0 = $46;
      __label__ = 19;
      break;
     case 16:
      
      
      
      var $50 = HEAP[$tuple] - 1;
      
      
      HEAP[$tuple] = $50;
      
      
      
      
      if (HEAP[$tuple] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $61 = HEAP[HEAP[$tuple + 4] + 24];
      
      FUNCTION_TABLE[$61]($tuple);
      __label__ = 18;
      break;
     case 18:
      
      var $64 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $64;
      $0 = __Py_NoneStruct;
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
  function _getargs_tuple($self, $args) {
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
      var $a = __stackBase__;
      var $b = __stackBase__ + 4;
      var $c = __stackBase__ + 8;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str56, allocate([ $a, 0, 0, 0, $b, 0, 0, 0, $c, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$c];
      var $5 = HEAP[$b];
      var $6 = HEAP[$a];
      var $7 = _Py_BuildValue(__str57, allocate([ $6, 0, 0, 0, $5, 0, 0, 0, $4, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
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
  function _getargs_keywords($self, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwargs_addr;
      var $retval;
      var $0;
      var $int_args = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      $kwargs_addr = $kwargs;
      var $int_args1 = $int_args;
      _llvm_memset_p0i8_i32($int_args1, -1, 40, 4, 0);
      
      
      var $3 = $int_args;
      var $4 = $int_args + 4;
      var $5 = $int_args + 8;
      var $6 = $int_args + 12;
      var $7 = $int_args + 16;
      var $8 = $int_args + 20;
      var $9 = $int_args + 24;
      var $10 = $int_args + 28;
      var $11 = $int_args + 32;
      var $12 = $int_args + 36;
      var $13 = _PyArg_ParseTupleAndKeywords($args_addr, $kwargs_addr, __str58, _keywords_9777, allocate([ $3, 0, 0, 0, $4, 0, 0, 0, $5, 0, 0, 0, $6, 0, 0, 0, $7, 0, 0, 0, $8, 0, 0, 0, $9, 0, 0, 0, $10, 0, 0, 0, $11, 0, 0, 0, $12, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($13 == 0) {
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
      
      var $16 = HEAP[$int_args + 36];
      
      var $18 = HEAP[$int_args + 32];
      
      var $20 = HEAP[$int_args + 28];
      
      var $22 = HEAP[$int_args + 24];
      
      var $24 = HEAP[$int_args + 20];
      
      var $26 = HEAP[$int_args + 16];
      
      var $28 = HEAP[$int_args + 12];
      
      var $30 = HEAP[$int_args + 8];
      
      var $32 = HEAP[$int_args + 4];
      
      var $34 = HEAP[$int_args];
      var $35 = _Py_BuildValue(__str64, allocate([ $34, 0, 0, 0, $32, 0, 0, 0, $30, 0, 0, 0, $28, 0, 0, 0, $26, 0, 0, 0, $24, 0, 0, 0, $22, 0, 0, 0, $20, 0, 0, 0, $18, 0, 0, 0, $16, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = $35;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval4 = $retval;
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _getargs_b($self, $args) {
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
      var $value = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str65, allocate([ $value, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$value];
      var $6 = _PyLong_FromUnsignedLong($5);
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
  function _getargs_B($self, $args) {
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
      var $value = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str66, allocate([ $value, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$value];
      var $6 = _PyLong_FromUnsignedLong($5);
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
  function _getargs_h($self, $args) {
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
      var $value = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str67, allocate([ $value, 0, 0, 0 ], [ "i16*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$value];
      var $6 = _PyLong_FromLong($5);
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
  function _getargs_H($self, $args) {
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
      var $value = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str68, allocate([ $value, 0, 0, 0 ], [ "i16*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$value];
      var $6 = _PyLong_FromUnsignedLong($5);
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
  function _getargs_I($self, $args) {
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
      var $value = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str69, allocate([ $value, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$value];
      var $5 = _PyLong_FromUnsignedLong($4);
      $0 = $5;
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
  function _getargs_k($self, $args) {
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
      var $value = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str70, allocate([ $value, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$value];
      var $5 = _PyLong_FromUnsignedLong($4);
      $0 = $5;
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
  function _getargs_i($self, $args) {
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
      var $value = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str71, allocate([ $value, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$value];
      var $5 = _PyLong_FromLong($4);
      $0 = $5;
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
  function _getargs_l($self, $args) {
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
      var $value = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str72, allocate([ $value, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$value];
      var $5 = _PyLong_FromLong($4);
      $0 = $5;
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
  function _getargs_n($self, $args) {
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
      var $value = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str73, allocate([ $value, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$value];
      var $5 = _PyInt_FromSsize_t($4);
      $0 = $5;
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
  function _getargs_L($self, $args) {
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
      var $value = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str74, allocate([ $value, 0, 0, 0 ], [ "i64*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$value];
      var $5 = _PyLong_FromLongLong($4);
      $0 = $5;
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
  function _getargs_K($self, $args) {
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
      var $value = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str75, allocate([ $value, 0, 0, 0 ], [ "i64*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$value];
      var $5 = _PyLong_FromUnsignedLongLong($4);
      $0 = $5;
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
  function _test_k_code($self) {
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
      var $tuple;
      var $num;
      var $value = __stackBase__;
      $self_addr = $self;
      var $1 = _PyTuple_New(1);
      $tuple = $1;
      
      
      if ($tuple == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 23;
      break;
     case 2:
      var $4 = _PyLong_FromString(__str36, 0, 16);
      $num = $4;
      
      
      if ($num == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 23;
      break;
     case 4:
      
      var $8 = _PyInt_AsUnsignedLongMask($num);
      HEAP[$value] = $8;
      
      var $10 = HEAP[$value] != -1;
      if ($10) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $11 = _raiseTestError(__str76, __str77);
      $0 = $11;
      __label__ = 23;
      break;
     case 6:
      
      
      
      
      
      HEAP[$tuple + 12] = $num;
      HEAP[$value] = 0;
      
      var $18 = _PyArg_ParseTuple($tuple, __str78, allocate([ $value, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($18 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 23;
      break;
     case 8:
      
      var $21 = HEAP[$value] != -1;
      if ($21) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $22 = _raiseTestError(__str76, __str79);
      $0 = $22;
      __label__ = 23;
      break;
     case 10:
      
      
      
      var $26 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $26;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $37 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$37]($num);
      __label__ = 12;
      break;
     case 12:
      var $39 = _PyLong_FromString(__str80, 0, 16);
      $num = $39;
      
      if ($39 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = 0;
      __label__ = 23;
      break;
     case 14:
      
      var $42 = _PyInt_AsUnsignedLongMask($num);
      HEAP[$value] = $42;
      
      var $44 = HEAP[$value] != -66;
      if ($44) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $45 = _raiseTestError(__str76, __str77);
      $0 = $45;
      __label__ = 23;
      break;
     case 16:
      
      
      
      
      
      HEAP[$tuple + 12] = $num;
      HEAP[$value] = 0;
      
      var $52 = _PyArg_ParseTuple($tuple, __str78, allocate([ $value, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($52 < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      $0 = 0;
      __label__ = 23;
      break;
     case 18:
      
      var $55 = HEAP[$value] != -66;
      if ($55) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $56 = _raiseTestError(__str76, __str81);
      $0 = $56;
      __label__ = 23;
      break;
     case 20:
      
      
      
      var $60 = HEAP[$tuple] - 1;
      
      
      HEAP[$tuple] = $60;
      
      
      
      
      if (HEAP[$tuple] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $71 = HEAP[HEAP[$tuple + 4] + 24];
      
      FUNCTION_TABLE[$71]($tuple);
      __label__ = 22;
      break;
     case 22:
      
      var $74 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $74;
      $0 = __Py_NoneStruct;
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
  function _test_u_code($self) {
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
      var $tuple;
      var $obj;
      var $value = __stackBase__;
      var $len = __stackBase__ + 4;
      $self_addr = $self;
      
      var $2 = HEAP[__Py_ascii_whitespace + 25];
      HEAP[_x] = $2;
      var $3 = _PyTuple_New(1);
      $tuple = $3;
      
      
      if ($tuple == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 16;
      break;
     case 2:
      var $6 = _PyUnicodeUCS2_Decode(__str82, 4, __str83, 0);
      $obj = $6;
      
      
      if ($obj == 0) {
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
      
      
      
      
      
      HEAP[$tuple + 12] = $obj;
      HEAP[$value] = 0;
      
      var $15 = _PyArg_ParseTuple($tuple, __str84, allocate([ $value, 0, 0, 0 ], [ "i16**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($15 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 16;
      break;
     case 6:
      
      
      
      
      
      
      if (HEAP[$obj + 12] != HEAP[$value]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $23 = _raiseTestError(__str85, __str86);
      $0 = $23;
      __label__ = 16;
      break;
     case 8:
      HEAP[$value] = 0;
      
      var $25 = _PyArg_ParseTuple($tuple, __str87, allocate([ $value, 0, 0, 0, $len, 0, 0, 0 ], [ "i16**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($25 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = 0;
      __label__ = 16;
      break;
     case 10:
      
      
      
      
      
      
      if (HEAP[$obj + 12] != HEAP[$value]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      
      if (HEAP[$obj + 8] != HEAP[$len]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $39 = _raiseTestError(__str85, __str88);
      $0 = $39;
      __label__ = 16;
      break;
     case 13:
      
      
      
      var $43 = HEAP[$tuple] - 1;
      
      
      HEAP[$tuple] = $43;
      
      
      
      
      if (HEAP[$tuple] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $54 = HEAP[HEAP[$tuple + 4] + 24];
      
      FUNCTION_TABLE[$54]($tuple);
      __label__ = 15;
      break;
     case 15:
      
      var $57 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $57;
      $0 = __Py_NoneStruct;
      __label__ = 16;
      break;
     case 16:
      
      $retval = $0;
      var $retval16 = $retval;
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_widechar($self) {
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
      var $wtext = __stackBase__;
      var $wtextlen;
      var $wide;
      var $utf8;
      $self_addr = $self;
      
      HEAP[$wtext + 4] = 0;
      
      HEAP[$wtext] = 1092557;
      $wtextlen = 1;
      
      var $wtext1 = $wtext;
      var $4 = _PyUnicodeUCS2_FromWideChar($wtext1, $wtextlen);
      $wide = $4;
      
      
      if ($wide == 0) {
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
      var $7 = _PyUnicodeUCS2_FromString(__str89);
      $utf8 = $7;
      
      
      var $10 = $wide;
      if ($utf8 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      var $13 = HEAP[$10] - 1;
      
      
      HEAP[$wide] = $13;
      
      
      
      
      if (HEAP[$wide] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $24 = HEAP[HEAP[$wide + 4] + 24];
      
      FUNCTION_TABLE[$24]($wide);
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      __label__ = 25;
      break;
     case 6:
      
      
      
      
      
      
      
      
      var $34 = $wide;
      if (HEAP[$10 + 8] != HEAP[$utf8 + 8]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      
      
      var $37 = HEAP[$34] - 1;
      
      
      HEAP[$wide] = $37;
      
      
      
      
      if (HEAP[$wide] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $48 = HEAP[HEAP[$wide + 4] + 24];
      
      FUNCTION_TABLE[$48]($wide);
      __label__ = 9;
      break;
     case 9:
      
      
      
      var $53 = HEAP[$utf8] - 1;
      
      
      HEAP[$utf8] = $53;
      
      
      
      
      if (HEAP[$utf8] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $64 = HEAP[HEAP[$utf8 + 4] + 24];
      
      FUNCTION_TABLE[$64]($utf8);
      __label__ = 11;
      break;
     case 11:
      var $66 = _raiseTestError(__str90, __str91);
      $0 = $66;
      __label__ = 25;
      break;
     case 12:
      
      var $68 = _PyUnicodeUCS2_Compare($34, $utf8);
      var $69 = $68 != 0;
      
      
      
      var $73 = HEAP[$wide] - 1;
      
      
      HEAP[$wide] = $73;
      
      
      
      var $79 = HEAP[$wide] == 0;
      if ($69) {
        __label__ = 13;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 13:
      if ($79) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $84 = HEAP[HEAP[$wide + 4] + 24];
      
      FUNCTION_TABLE[$84]($wide);
      __label__ = 15;
      break;
     case 15:
      
      
      
      var $89 = HEAP[$utf8] - 1;
      
      
      HEAP[$utf8] = $89;
      
      
      
      
      if (HEAP[$utf8] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $100 = HEAP[HEAP[$utf8 + 4] + 24];
      
      FUNCTION_TABLE[$100]($utf8);
      __label__ = 17;
      break;
     case 17:
      var $102 = _PyErr_Occurred();
      
      if ($102 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      $0 = 0;
      __label__ = 25;
      break;
     case 19:
      var $104 = _raiseTestError(__str90, __str92);
      $0 = $104;
      __label__ = 25;
      break;
     case 20:
      if ($79) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $109 = HEAP[HEAP[$wide + 4] + 24];
      
      FUNCTION_TABLE[$109]($wide);
      __label__ = 22;
      break;
     case 22:
      
      
      
      var $114 = HEAP[$utf8] - 1;
      
      
      HEAP[$utf8] = $114;
      
      
      
      
      if (HEAP[$utf8] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $125 = HEAP[HEAP[$utf8 + 4] + 24];
      
      FUNCTION_TABLE[$125]($utf8);
      __label__ = 24;
      break;
     case 24:
      
      var $128 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $128;
      $0 = __Py_NoneStruct;
      __label__ = 25;
      break;
     case 25:
      
      $retval = $0;
      var $retval26 = $retval;
      STACKTOP = __stackBase__;
      return $retval26;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_empty_argparse($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $tuple;
      var $dict;
      var $result;
      $self_addr = $self;
      $dict = 0;
      var $1 = _PyTuple_New(0);
      $tuple = $1;
      
      
      if ($tuple == 0) {
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
      
      var $5 = _PyArg_ParseTuple($tuple, __str93, allocate(1, "i32", ALLOC_STACK));
      $result = $5;
      
      
      if ($result < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $8 = _PyDict_New();
      $dict = $8;
      
      
      if ($dict == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      var $13 = _PyArg_ParseTupleAndKeywords($tuple, $dict, __str93, _kwlist_10129, allocate(1, "i32", ALLOC_STACK));
      $result = $13;
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $17 = HEAP[$tuple] - 1;
      
      
      HEAP[$tuple] = $17;
      
      
      
      
      if (HEAP[$tuple] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $28 = HEAP[HEAP[$tuple + 4] + 24];
      
      FUNCTION_TABLE[$28]($tuple);
      __label__ = 7;
      break;
     case 7:
      
      
      if ($dict != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      var $35 = HEAP[$dict] - 1;
      
      
      HEAP[$dict] = $35;
      
      
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $46 = HEAP[HEAP[$dict + 4] + 24];
      
      FUNCTION_TABLE[$46]($dict);
      __label__ = 10;
      break;
     case 10:
      
      
      if ($result < 0) {
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
      
      var $51 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $51;
      $0 = __Py_NoneStruct;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval12 = $retval;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _codec_incrementalencoder($self, $args) {
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
      var $encoding = __stackBase__;
      var $errors = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$errors] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str94, allocate([ $encoding, 0, 0, 0, $errors, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$errors];
      var $5 = HEAP[$encoding];
      var $6 = _PyCodec_IncrementalEncoder($5, $4);
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
  function _codec_incrementaldecoder($self, $args) {
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
      var $encoding = __stackBase__;
      var $errors = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$errors] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str95, allocate([ $encoding, 0, 0, 0, $errors, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$errors];
      var $5 = HEAP[$encoding];
      var $6 = _PyCodec_IncrementalDecoder($5, $4);
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
  function _test_long_numbits($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 180;
    _memset(__stackBase__, 0, 180);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $testcases = __stackBase__;
      var $i;
      var $plong;
      var $nbits;
      var $sign;
      $self_addr = $self;
      var $testcases1 = $testcases;
      _llvm_memcpy_p0i8_p0i8_i32($testcases1, _C_92_10205, 180, 4, 0);
      $i = 0;
      __lastLabel__ = -1;
      __label__ = 8;
      break;
     case 1:
      
      
      
      var $4 = HEAP[$testcases + $i * 12];
      var $5 = _PyLong_FromLong($4);
      $plong = $5;
      
      var $7 = __PyLong_NumBits($plong);
      $nbits = $7;
      
      var $9 = __PyLong_Sign($plong);
      $sign = $9;
      
      
      
      var $13 = HEAP[$plong] - 1;
      
      
      HEAP[$plong] = $13;
      
      
      
      
      if (HEAP[$plong] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $24 = HEAP[HEAP[$plong + 4] + 24];
      
      FUNCTION_TABLE[$24]($plong);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      
      if (HEAP[$testcases + $i * 12 + 4] != $nbits) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $32 = _raiseTestError(__str96, __str97);
      $0 = $32;
      __label__ = 10;
      break;
     case 5:
      
      
      
      
      
      
      if (HEAP[$testcases + $i * 12 + 8] != $sign) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $39 = _raiseTestError(__str96, __str98);
      $0 = $39;
      __label__ = 10;
      break;
     case 7:
      
      var $41 = $i + 1;
      $i = $41;
      __lastLabel__ = 7;
      __label__ = 8;
      break;
     case 8:
      var $42 = __lastLabel__ == 7 ? $41 : 0;
      
      if ($42 <= 14) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      var $45 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $45;
      $0 = __Py_NoneStruct;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval11 = $retval;
      STACKTOP = __stackBase__;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_null_strings($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $o1;
      var $o2;
      var $tuple;
      $self_addr = $self;
      var $1 = _PyObject_Str(0);
      $o1 = $1;
      var $2 = _PyObject_Unicode(0);
      $o2 = $2;
      
      
      var $5 = _PyTuple_Pack(2, allocate([ $o1, 0, 0, 0, $o2, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $tuple = $5;
      
      
      if ($o1 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $11 = HEAP[$o1] - 1;
      
      
      HEAP[$o1] = $11;
      
      
      
      
      if (HEAP[$o1] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $22 = HEAP[HEAP[$o1 + 4] + 24];
      
      FUNCTION_TABLE[$22]($o1);
      __label__ = 3;
      break;
     case 3:
      
      
      if ($o2 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      var $29 = HEAP[$o2] - 1;
      
      
      HEAP[$o2] = $29;
      
      
      
      
      if (HEAP[$o2] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $40 = HEAP[HEAP[$o2 + 4] + 24];
      
      FUNCTION_TABLE[$40]($o2);
      __label__ = 6;
      break;
     case 6:
      
      $0 = $tuple;
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _raise_exception($self, $args) {
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
      var $exc = __stackBase__;
      var $exc_args;
      var $v;
      var $num_args = __stackBase__ + 4;
      var $i;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str99, allocate([ $exc, 0, 0, 0, $num_args, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      if (HEAP[HEAP[$exc] + 4] != _PyClass_Type) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$exc] + 4] + 84] >= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      if ((HEAP[HEAP[$exc] + 84] & 1073741824) == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $20 = HEAP[_PyExc_TypeError];
      var $21 = _PyErr_Format($20, __str100, allocate(1, "i32", ALLOC_STACK));
      $0 = 0;
      __label__ = 18;
      break;
     case 6:
      var $22 = HEAP[$num_args];
      var $23 = _PyTuple_New($22);
      $exc_args = $23;
      
      if ($23 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 18;
      break;
     case 8:
      $i = 0;
      __label__ = 14;
      break;
     case 9:
      
      var $26 = _PyInt_FromLong($i);
      $v = $26;
      
      
      var $29 = $exc_args;
      if ($v == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      var $32 = HEAP[$29] - 1;
      
      
      HEAP[$exc_args] = $32;
      
      
      
      
      if (HEAP[$exc_args] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $43 = HEAP[HEAP[$exc_args + 4] + 24];
      
      FUNCTION_TABLE[$43]($exc_args);
      __label__ = 12;
      break;
     case 12:
      $0 = 0;
      __label__ = 18;
      break;
     case 13:
      
      
      
      
      
      HEAP[$29 + 12 + $i * 4] = $v;
      
      var $51 = $i + 1;
      $i = $51;
      __label__ = 14;
      break;
     case 14:
      
      
      
      if ($i < HEAP[$num_args]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $55 = HEAP[$exc];
      
      _PyErr_SetObject($55, $exc_args);
      
      
      
      var $60 = HEAP[$exc_args] - 1;
      
      
      HEAP[$exc_args] = $60;
      
      
      
      
      if (HEAP[$exc_args] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $71 = HEAP[HEAP[$exc_args + 4] + 24];
      
      FUNCTION_TABLE[$71]($exc_args);
      __label__ = 17;
      break;
     case 17:
      $0 = 0;
      __label__ = 18;
      break;
     case 18:
      
      $retval = $0;
      var $retval18 = $retval;
      STACKTOP = __stackBase__;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_datetime_capi($self, $args) {
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
      
      
      var $3 = HEAP[_test_run_counter];
      if (HEAP[_PyDateTimeAPI] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      if ($3 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $6 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $6;
      $0 = __Py_NoneStruct;
      __label__ = 7;
      break;
     case 3:
      var $7 = HEAP[_PyExc_AssertionError];
      _PyErr_SetString($7, __str101);
      $0 = 0;
      __label__ = 7;
      break;
     case 4:
      var $8 = $3 + 1;
      HEAP[_test_run_counter] = $8;
      var $9 = _PyCapsule_Import(__str102, 0);
      
      HEAP[_PyDateTimeAPI] = $9;
      
      
      if (HEAP[_PyDateTimeAPI] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $14 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $14;
      $0 = __Py_NoneStruct;
      __label__ = 7;
      break;
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
  function _test_string_from_format($self, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $result;
      var $msg;
      $self_addr = $self;
      $args_addr = $args;
      var $1 = _PyString_FromFormat(__str103, allocate([ 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
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
      __label__ = 53;
      break;
     case 2:
      
      var $5 = _PyString_AsString($result);
      var $6 = _strcmp($5, __str104);
      
      if ($6 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $msg = __str105;
      __label__ = 49;
      break;
     case 4:
      
      
      
      var $11 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $11;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $22 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$22]($result);
      __label__ = 6;
      break;
     case 6:
      var $24 = _PyString_FromFormat(__str106, allocate([ 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $result = $24;
      
      if ($24 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 53;
      break;
     case 8:
      
      var $27 = _PyString_AsString($result);
      var $28 = _strcmp($27, __str104);
      
      if ($28 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $msg = __str107;
      __label__ = 49;
      break;
     case 10:
      
      
      
      var $33 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $33;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $44 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$44]($result);
      __label__ = 12;
      break;
     case 12:
      var $46 = _PyString_FromFormat(__str108, allocate([ 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $result = $46;
      
      if ($46 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = 0;
      __label__ = 53;
      break;
     case 14:
      
      var $49 = _PyString_AsString($result);
      var $50 = _strcmp($49, __str104);
      
      if ($50 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $msg = __str109;
      __label__ = 49;
      break;
     case 16:
      
      
      
      var $55 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $55;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $66 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$66]($result);
      __label__ = 18;
      break;
     case 18:
      var $68 = _PyString_FromFormat(__str110, allocate([ 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $result = $68;
      
      if ($68 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      $0 = 0;
      __label__ = 53;
      break;
     case 20:
      
      var $71 = _PyString_AsString($result);
      var $72 = _strcmp($71, __str104);
      
      if ($72 != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      $msg = __str111;
      __label__ = 49;
      break;
     case 22:
      
      
      
      var $77 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $77;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $88 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$88]($result);
      __label__ = 24;
      break;
     case 24:
      var $90 = _PyString_FromFormat(__str112, allocate([ 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $result = $90;
      
      if ($90 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      $0 = 0;
      __label__ = 53;
      break;
     case 26:
      
      var $93 = _PyString_AsString($result);
      var $94 = _strcmp($93, __str104);
      
      if ($94 != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      $msg = __str113;
      __label__ = 49;
      break;
     case 28:
      
      
      
      var $99 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $99;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $110 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$110]($result);
      __label__ = 30;
      break;
     case 30:
      var $112 = _PyString_FromFormat(__str114, allocate([ 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $result = $112;
      
      if ($112 == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      $0 = 0;
      __label__ = 53;
      break;
     case 32:
      
      var $115 = _PyString_AsString($result);
      var $116 = _strcmp($115, __str104);
      
      if ($116 != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      $msg = __str115;
      __label__ = 49;
      break;
     case 34:
      
      
      
      var $121 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $121;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $132 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$132]($result);
      __label__ = 36;
      break;
     case 36:
      var $134 = _PyString_FromFormat(__str116, allocate([ 1, 0, 0, 0, 0, 0, 0, 0 ], [ "i64", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_STACK));
      $result = $134;
      
      if ($134 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      $0 = 0;
      __label__ = 53;
      break;
     case 38:
      
      var $137 = _PyString_AsString($result);
      var $138 = _strcmp($137, __str104);
      
      if ($138 != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      $msg = __str117;
      __label__ = 49;
      break;
     case 40:
      
      
      
      var $143 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $143;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $154 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$154]($result);
      __label__ = 42;
      break;
     case 42:
      var $156 = _PyString_FromFormat(__str118, allocate([ 1, 0, 0, 0, 0, 0, 0, 0 ], [ "i64", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_STACK));
      $result = $156;
      
      if ($156 == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      $0 = 0;
      __label__ = 53;
      break;
     case 44:
      
      var $159 = _PyString_AsString($result);
      var $160 = _strcmp($159, __str104);
      
      if ($160 != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      $msg = __str119;
      __label__ = 49;
      break;
     case 46:
      
      
      
      var $165 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $165;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      
      
      
      
      var $176 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$176]($result);
      __label__ = 48;
      break;
     case 48:
      
      var $179 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $179;
      $0 = __Py_NoneStruct;
      __label__ = 53;
      break;
     case 49:
      
      
      if ($result != 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 50:
      
      
      
      var $185 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $185;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      
      
      
      
      var $196 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$196]($result);
      __label__ = 52;
      break;
     case 52:
      
      var $199 = _raiseTestError(__str120, $msg);
      $0 = $199;
      __label__ = 53;
      break;
     case 53:
      
      $retval = $0;
      var $retval52 = $retval;
      return $retval52;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _capsule_destructor($o) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $o_addr;
      $o_addr = $o;
      
      var $1 = HEAP[_capsule_destructor_call_count] + 1;
      HEAP[_capsule_destructor_call_count] = $1;
      
      var $3 = _PyCapsule_GetContext($o_addr);
      
      if ($3 != __str123) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[_capsule_error] = __str124;
      __label__ = 8;
      break;
     case 2:
      
      var $6 = _PyCapsule_GetDestructor($o_addr);
      
      if ($6 != FUNCTION_TABLE_OFFSET + 6) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[_capsule_error] = __str125;
      __label__ = 8;
      break;
     case 4:
      
      var $9 = _PyCapsule_GetName($o_addr);
      
      if ($9 != __str121) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[_capsule_error] = __str126;
      __label__ = 8;
      break;
     case 6:
      
      var $12 = _PyCapsule_GetPointer($o_addr, __str121);
      
      if ($12 != __str122) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[_capsule_error] = __str127;
      __label__ = 8;
      break;
     case 8:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_capsule($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    _memset(__stackBase__, 0, 48);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $object;
      var $error;
      var $pointer;
      var $pointer2;
      var $known_capsules = __stackBase__;
      var $known;
      var $module;
      $self_addr = $self;
      $args_addr = $args;
      $error = 0;
      var $known_capsules1 = $known_capsules;
      _llvm_memset_p0i8_i32($known_capsules1, 0, 48, 4, 0);
      
      
      HEAP[$known_capsules] = __str128;
      
      
      HEAP[$known_capsules + 4] = __str129;
      
      
      HEAP[$known_capsules + 8] = __str130;
      
      
      HEAP[$known_capsules + 12] = __str131;
      
      
      HEAP[$known_capsules + 12 + 4] = __str132;
      
      
      HEAP[$known_capsules + 12 + 8] = __str133;
      
      
      HEAP[$known_capsules + 24] = __str102;
      
      
      HEAP[$known_capsules + 24 + 4] = __str134;
      
      
      HEAP[$known_capsules + 24 + 8] = __str135;
      
      $known = $known_capsules;
      var $20 = _PyCapsule_New(__str122, __str121, FUNCTION_TABLE_OFFSET + 6);
      $object = $20;
      
      var $22 = _PyCapsule_SetContext($object, __str123);
      
      _capsule_destructor($object);
      
      
      if (HEAP[_capsule_error] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $26 = HEAP[_capsule_error];
      $error = $26;
      __lastLabel__ = 1;
      __label__ = 56;
      break;
     case 2:
      
      
      if (HEAP[_capsule_destructor_call_count] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $error = __str136;
      __label__ = 57;
      break;
     case 4:
      HEAP[_capsule_destructor_call_count] = 0;
      
      
      
      var $32 = HEAP[$object] - 1;
      
      
      HEAP[$object] = $32;
      
      
      
      
      if (HEAP[$object] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $43 = HEAP[HEAP[$object + 4] + 24];
      
      FUNCTION_TABLE[$43]($object);
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[_capsule_error] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $47 = HEAP[_capsule_error];
      $error = $47;
      __lastLabel__ = 7;
      __label__ = 56;
      break;
     case 8:
      
      
      if (HEAP[_capsule_destructor_call_count] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $error = __str136;
      __label__ = 57;
      break;
     case 10:
      HEAP[_capsule_destructor_call_count] = 0;
      
      
      var $52 = _PyCapsule_New($known, __str137, 0);
      $object = $52;
      
      var $54 = _PyCapsule_SetPointer($object, __str122);
      
      var $56 = _PyCapsule_SetName($object, __str121);
      
      var $58 = _PyCapsule_SetDestructor($object, FUNCTION_TABLE_OFFSET + 6);
      
      var $60 = _PyCapsule_SetContext($object, __str123);
      
      _capsule_destructor($object);
      
      
      if (HEAP[_capsule_error] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $64 = HEAP[_capsule_error];
      $error = $64;
      __lastLabel__ = 11;
      __label__ = 56;
      break;
     case 12:
      
      
      if (HEAP[_capsule_destructor_call_count] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $error = __str136;
      __label__ = 57;
      break;
     case 14:
      HEAP[_capsule_destructor_call_count] = 0;
      
      var $68 = _PyCapsule_GetPointer($object, __str138);
      $pointer2 = $68;
      var $69 = _PyErr_Occurred();
      
      if ($69 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $error = __str139;
      __label__ = 57;
      break;
     case 16:
      _PyErr_Clear();
      
      
      if ($pointer2 != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      
      
      if ($pointer2 == __str122) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      $error = __str140;
      __label__ = 57;
      break;
     case 19:
      $error = __str141;
      __label__ = 57;
      break;
     case 20:
      
      var $76 = _PyCapsule_SetDestructor($object, 0);
      
      
      
      var $80 = HEAP[$object] - 1;
      
      
      HEAP[$object] = $80;
      
      
      
      
      if (HEAP[$object] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $91 = HEAP[HEAP[$object + 4] + 24];
      
      FUNCTION_TABLE[$91]($object);
      __label__ = 22;
      break;
     case 22:
      
      
      if (HEAP[_capsule_destructor_call_count] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      $error = __str142;
      __label__ = 57;
      break;
     case 24:
      
      $known = $known_capsules;
      __label__ = 54;
      break;
     case 25:
      
      
      var $98 = HEAP[$known + 4];
      var $99 = _PyImport_ImportModule($98);
      $module = $99;
      
      
      if ($module != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 26:
      
      
      var $104 = HEAP[$known];
      var $105 = _PyCapsule_Import($104, 0);
      $pointer = $105;
      
      
      if ($pointer == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      
      
      
      var $111 = HEAP[$module] - 1;
      
      
      HEAP[$module] = $111;
      
      
      
      
      if (HEAP[$module] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $122 = HEAP[HEAP[$module + 4] + 24];
      
      FUNCTION_TABLE[$122]($module);
      __label__ = 29;
      break;
     case 29:
      
      
      var $126 = HEAP[$known + 8];
      
      
      var $129 = HEAP[$known + 4];
      var $130 = _sprintf(_buffer_10522, __str143, allocate([ __str144, 0, 0, 0, $129, 0, 0, 0, $126, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $error = _buffer_10522;
      __label__ = 57;
      break;
     case 30:
      
      
      var $133 = HEAP[$known + 8];
      
      var $135 = _PyObject_GetAttrString($module, $133);
      $object = $135;
      
      
      if ($object == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 31:
      
      
      
      var $141 = HEAP[$module] - 1;
      
      
      HEAP[$module] = $141;
      
      
      
      
      if (HEAP[$module] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      var $152 = HEAP[HEAP[$module + 4] + 24];
      
      FUNCTION_TABLE[$152]($module);
      __label__ = 33;
      break;
     case 33:
      $0 = 0;
      __label__ = 59;
      break;
     case 34:
      
      var $155 = _PyCapsule_GetPointer($object, __str145);
      $pointer2 = $155;
      var $156 = _PyErr_Occurred();
      
      if ($156 == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 35:
      
      
      
      var $161 = HEAP[$object] - 1;
      
      
      HEAP[$object] = $161;
      
      
      
      
      if (HEAP[$object] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      var $172 = HEAP[HEAP[$object + 4] + 24];
      
      FUNCTION_TABLE[$172]($object);
      __label__ = 37;
      break;
     case 37:
      
      
      
      var $177 = HEAP[$module] - 1;
      
      
      HEAP[$module] = $177;
      
      
      
      
      if (HEAP[$module] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      var $188 = HEAP[HEAP[$module + 4] + 24];
      
      FUNCTION_TABLE[$188]($module);
      __label__ = 39;
      break;
     case 39:
      
      
      var $192 = HEAP[$known + 8];
      
      
      var $195 = HEAP[$known + 4];
      var $196 = _sprintf(_buffer_10522, __str143, allocate([ __str139, 0, 0, 0, $195, 0, 0, 0, $192, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $error = _buffer_10522;
      __label__ = 57;
      break;
     case 40:
      _PyErr_Clear();
      
      
      if ($pointer2 != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 41:
      
      
      
      var $202 = HEAP[$module] - 1;
      
      
      HEAP[$module] = $202;
      
      
      
      
      if (HEAP[$module] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      var $213 = HEAP[HEAP[$module + 4] + 24];
      
      FUNCTION_TABLE[$213]($module);
      __label__ = 43;
      break;
     case 43:
      
      
      
      var $218 = HEAP[$object] - 1;
      
      
      HEAP[$object] = $218;
      
      
      
      
      if (HEAP[$object] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      var $229 = HEAP[HEAP[$object + 4] + 24];
      
      FUNCTION_TABLE[$229]($object);
      __label__ = 45;
      break;
     case 45:
      
      
      
      
      
      var $236 = HEAP[$known + 8];
      
      
      var $239 = HEAP[$known + 4];
      if ($pointer2 == $pointer) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      var $240 = _sprintf(_buffer_10522, __str143, allocate([ __str146, 0, 0, 0, $239, 0, 0, 0, $236, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $error = _buffer_10522;
      __label__ = 57;
      break;
     case 47:
      var $241 = _sprintf(_buffer_10522, __str143, allocate([ __str141, 0, 0, 0, $239, 0, 0, 0, $236, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $error = _buffer_10522;
      __label__ = 57;
      break;
     case 48:
      
      
      
      var $245 = HEAP[$object] - 1;
      
      
      HEAP[$object] = $245;
      
      
      
      
      if (HEAP[$object] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      
      
      var $256 = HEAP[HEAP[$object + 4] + 24];
      
      FUNCTION_TABLE[$256]($object);
      __label__ = 50;
      break;
     case 50:
      
      
      
      var $261 = HEAP[$module] - 1;
      
      
      HEAP[$module] = $261;
      
      
      
      
      if (HEAP[$module] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 51:
      
      
      
      
      var $272 = HEAP[HEAP[$module + 4] + 24];
      
      FUNCTION_TABLE[$272]($module);
      __label__ = 53;
      break;
     case 52:
      _PyErr_Clear();
      __label__ = 53;
      break;
     case 53:
      
      var $275 = $known + 12;
      $known = $275;
      __label__ = 54;
      break;
     case 54:
      
      
      
      
      if (HEAP[$known + 4] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 55:
      var $_pr = $error;
      __lastLabel__ = 55;
      __label__ = 56;
      break;
     case 56:
      var $280 = __lastLabel__ == 55 ? $_pr : __lastLabel__ == 11 ? $64 : __lastLabel__ == 7 ? $47 : $26;
      
      if ($280 != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      
      var $283 = _raiseTestError(__str147, $error);
      $0 = $283;
      __label__ = 59;
      break;
     case 58:
      
      var $285 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $285;
      $0 = __Py_NoneStruct;
      __label__ = 59;
      break;
     case 59:
      
      $retval = $0;
      var $retval59 = $retval;
      STACKTOP = __stackBase__;
      return $retval59;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _test_with_docstring($self) {
    
    var $retval;
    var $0;
    
    var $2 = HEAP[__Py_NoneStruct] + 1;
    HEAP[__Py_NoneStruct] = $2;
    $0 = __Py_NoneStruct;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _traceback_print($self, $args) {
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
      var $file = __stackBase__;
      var $traceback = __stackBase__ + 4;
      var $result;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str148, allocate([ $traceback, 0, 0, 0, $file, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$file];
      var $5 = HEAP[$traceback];
      var $6 = _PyTraceBack_Print($5, $4);
      $result = $6;
      
      
      if ($result < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 5;
      break;
     case 4:
      
      var $10 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $10;
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
  function _code_newempty($self, $args) {
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
      var $filename = __stackBase__;
      var $funcname = __stackBase__ + 4;
      var $firstlineno = __stackBase__ + 8;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str149, allocate([ $filename, 0, 0, 0, $funcname, 0, 0, 0, $firstlineno, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$firstlineno];
      var $5 = HEAP[$funcname];
      var $6 = HEAP[$filename];
      var $7 = _PyCode_NewEmpty($6, $5, $4);
      
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
  function _make_exception_with_doc($self, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwargs_addr;
      var $retval;
      var $0;
      var $name = __stackBase__;
      var $doc = __stackBase__ + 4;
      var $base = __stackBase__ + 8;
      var $dict = __stackBase__ + 12;
      $self_addr = $self;
      $args_addr = $args;
      $kwargs_addr = $kwargs;
      HEAP[$doc] = 0;
      HEAP[$base] = 0;
      HEAP[$dict] = 0;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwargs_addr, __str150, _kwlist_10723, allocate([ $name, 0, 0, 0, $doc, 0, 0, 0, $base, 0, 0, 0, $dict, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $5 = HEAP[$dict];
      var $6 = HEAP[$base];
      var $7 = HEAP[$doc];
      var $8 = HEAP[$name];
      var $9 = _PyErr_NewExceptionWithDoc($8, $7, $6, $5);
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
  function _test_structmembers_new($type, $args, $kwargs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwargs_addr;
      var $retval;
      var $0;
      var $ob;
      var $s = __stackBase__;
      var $string_len = __stackBase__ + 4;
      $type_addr = $type;
      $args_addr = $args;
      $kwargs_addr = $kwargs;
      HEAP[$s] = 0;
      HEAP[$string_len] = 0;
      
      var $2 = __PyObject_New($type_addr);
      
      $ob = $2;
      
      
      if ($ob == 0) {
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
      
      
      
      _llvm_memset_p0i8_i32($ob + 8, 0, 60, 1, 0);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $50 = _PyArg_ParseTupleAndKeywords($args_addr, $kwargs_addr, __str198, _keywords_10762, allocate([ $ob + 8, 0, 0, 0, $ob + 8 + 1, 0, 0, 0, $ob + 8 + 2, 0, 0, 0, $ob + 8 + 4, 0, 0, 0, $ob + 8 + 6, 0, 0, 0, $ob + 8 + 8, 0, 0, 0, $ob + 8 + 12, 0, 0, 0, $ob + 8 + 16, 0, 0, 0, $ob + 8 + 20, 0, 0, 0, $ob + 8 + 24, 0, 0, 0, $ob + 8 + 28, 0, 0, 0, $s, 0, 0, 0, $string_len, 0, 0, 0, $ob + 8 + 44, 0, 0, 0, $ob + 8 + 52, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i16*", 0, 0, 0, "i16*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "float*", 0, 0, 0, "double*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i64*", 0, 0, 0, "i64*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($50 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      var $56 = HEAP[$ob] - 1;
      
      HEAP[$ob] = $56;
      
      
      
      if (HEAP[$ob] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      var $66 = HEAP[HEAP[$ob + 4] + 24];
      
      
      FUNCTION_TABLE[$66]($ob);
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      __label__ = 14;
      break;
     case 6:
      
      
      if (HEAP[$s] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      
      
      if (HEAP[$string_len] > 5) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      
      var $77 = HEAP[$ob] - 1;
      
      HEAP[$ob] = $77;
      
      
      
      if (HEAP[$ob] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      var $87 = HEAP[HEAP[$ob + 4] + 24];
      
      
      FUNCTION_TABLE[$87]($ob);
      __label__ = 10;
      break;
     case 10:
      var $90 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($90, __str199);
      $0 = 0;
      __label__ = 14;
      break;
     case 11:
      var $91 = HEAP[$s];
      
      
      
      
      var $96 = _strcpy($ob + 8 + 36, $91);
      __label__ = 13;
      break;
     case 12:
      
      
      
      
      _llvm_memset_p0i8_i32($ob + 8 + 36, 0, 1, 1, 0);
      __label__ = 13;
      break;
     case 13:
      
      
      $0 = $ob;
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
  function _test_structmembers_free($ob) {
    
    var $ob_addr;
    $ob_addr = $ob;
    
    
    _free($ob_addr);
    return;
  }
  function _init_testcapi() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $0 = _Py_InitModule4(__str203, _TestMethods, 0, 0, 1013);
      $m = $0;
      
      
      if ($m == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      HEAP[__HashInheritanceTester_Type + 4] = _PyType_Type;
      HEAP[_test_structmembersType + 4] = _PyType_Type;
      
      var $4 = HEAP[_test_structmembersType] + 1;
      HEAP[_test_structmembersType] = $4;
      
      var $6 = _PyModule_AddObject($m, __str204, _test_structmembersType);
      var $7 = _PyInt_FromLong(127);
      
      var $9 = _PyModule_AddObject($m, __str205, $7);
      var $10 = _PyInt_FromLong(-128);
      
      var $12 = _PyModule_AddObject($m, __str206, $10);
      var $13 = _PyInt_FromLong(255);
      
      var $15 = _PyModule_AddObject($m, __str207, $13);
      var $16 = _PyInt_FromLong(32767);
      
      var $18 = _PyModule_AddObject($m, __str208, $16);
      var $19 = _PyInt_FromLong(-32768);
      
      var $21 = _PyModule_AddObject($m, __str209, $19);
      var $22 = _PyInt_FromLong(65535);
      
      var $24 = _PyModule_AddObject($m, __str210, $22);
      var $25 = _PyLong_FromLong(2147483647);
      
      var $27 = _PyModule_AddObject($m, __str211, $25);
      var $28 = _PyLong_FromLong(-2147483648);
      
      var $30 = _PyModule_AddObject($m, __str212, $28);
      var $31 = _PyLong_FromUnsignedLong(-1);
      
      var $33 = _PyModule_AddObject($m, __str213, $31);
      var $34 = _PyInt_FromLong(2147483647);
      
      var $36 = _PyModule_AddObject($m, __str214, $34);
      var $37 = _PyInt_FromLong(-2147483648);
      
      var $39 = _PyModule_AddObject($m, __str215, $37);
      var $40 = _PyLong_FromUnsignedLong(-1);
      
      var $42 = _PyModule_AddObject($m, __str216, $40);
      var $43 = _PyFloat_FromDouble(3.4028234663852886e+38);
      
      var $45 = _PyModule_AddObject($m, __str217, $43);
      var $46 = _PyFloat_FromDouble(1.1754943508222875e-38);
      
      var $48 = _PyModule_AddObject($m, __str218, $46);
      var $49 = _PyFloat_FromDouble(1.7976931348623157e+308);
      
      var $51 = _PyModule_AddObject($m, __str219, $49);
      var $52 = _PyFloat_FromDouble(2.2250738585072014e-308);
      
      var $54 = _PyModule_AddObject($m, __str220, $52);
      var $55 = _PyLong_FromLongLong(0x8000000000000000);
      
      var $57 = _PyModule_AddObject($m, __str221, $55);
      var $58 = _PyLong_FromLongLong(-0x8000000000000000);
      
      var $60 = _PyModule_AddObject($m, __str222, $58);
      var $61 = _PyLong_FromUnsignedLongLong(-1);
      
      var $63 = _PyModule_AddObject($m, __str223, $61);
      var $64 = _PyInt_FromSsize_t(2147483647);
      
      var $66 = _PyModule_AddObject($m, __str224, $64);
      var $67 = _PyInt_FromSsize_t(-2147483648);
      
      var $69 = _PyModule_AddObject($m, __str225, $67);
      var $70 = _PyInt_FromSsize_t(12);
      
      var $72 = _PyModule_AddObject($m, __str226, $70);
      var $73 = _PyErr_NewException(__str227, 0, 0);
      HEAP[_TestError] = $73;
      
      
      
      var $77 = HEAP[HEAP[_TestError]] + 1;
      var $78 = HEAP[_TestError];
      HEAP[$78] = $77;
      var $79 = HEAP[_TestError];
      
      var $81 = _PyModule_AddObject($m, __str228, $79);
      __label__ = 2;
      break;
     case 2:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_testcapi"] = _init_testcapi;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _raise_test_long_error, 0, _raise_test_longlong_error, 0, _capsule_destructor, 0, _PyObject_Free, 0, _PyObject_GenericGetAttr, 0, _PyType_GenericNew, 0, _broken_buffer_getbuffer, 0, _raise_exception, 0, _test_config, 0, _test_datetime_capi, 0, _test_list_api, 0, _test_dict_iteration, 0, _test_lazy_hash_inheritance, 0, _test_broken_memoryview, 0, _test_long_api, 0, _test_long_and_overflow, 0, _test_long_numbits, 0, _test_k_code, 0, _test_empty_argparse, 0, _test_null_strings, 0, _test_string_from_format, 0, _test_with_docstring, 0, _getargs_tuple, 0, _getargs_keywords, 0, _getargs_b, 0, _getargs_B, 0, _getargs_h, 0, _getargs_H, 0, _getargs_I, 0, _getargs_k, 0, _getargs_i, 0, _getargs_l, 0, _getargs_n, 0, _getargs_L, 0, _getargs_K, 0, _test_longlong_api, 0, _test_long_long_and_overflow, 0, _test_L_code, 0, _codec_incrementalencoder, 0, _codec_incrementaldecoder, 0, _test_u_code, 0, _test_widechar, 0, _test_capsule, 0, _traceback_print, 0, _code_newempty, 0, _make_exception_with_doc, 0, _test_structmembers_free, 0, _PyObject_GenericSetAttr, 0, _test_structmembers_new, 0 ]);
  function run(args) {
    _PyDateTimeAPI = allocate(1, "%struct.PyDateTime_CAPI*", ALLOC_NORMAL);
    _TestError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str = allocate([ 105, 110, 116, 101, 114, 110, 97, 108, 32, 101, 114, 114, 111, 114, 32, 109, 115, 103, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 37, 115, 58, 32, 37, 115, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 116, 101, 115, 116, 95, 108, 105, 115, 116, 95, 97, 112, 105, 58, 32, 114, 101, 118, 101, 114, 115, 101, 32, 115, 99, 114, 101, 119, 101, 100, 32, 117, 112, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 116, 101, 115, 116, 95, 100, 105, 99, 116, 95, 105, 116, 101, 114, 97, 116, 105, 111, 110, 58, 32, 100, 105, 99, 116, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 32, 119, 101, 110, 116, 32, 119, 114, 111, 110, 103, 32, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 104, 97, 115, 104, 105, 110, 104, 101, 114, 105, 116, 97, 110, 99, 101, 116, 101, 115, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __HashInheritanceTester_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str6 = allocate([ 116, 101, 115, 116, 95, 108, 97, 122, 121, 95, 104, 97, 115, 104, 95, 105, 110, 104, 101, 114, 105, 116, 97, 110, 99, 101, 58, 32, 102, 97, 105, 108, 101, 100, 32, 116, 111, 32, 99, 114, 101, 97, 116, 101, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 116, 101, 115, 116, 95, 108, 97, 122, 121, 95, 104, 97, 115, 104, 95, 105, 110, 104, 101, 114, 105, 116, 97, 110, 99, 101, 58, 32, 116, 121, 112, 101, 32, 105, 110, 105, 116, 105, 97, 108, 105, 115, 101, 100, 32, 116, 111, 111, 32, 115, 111, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 116, 101, 115, 116, 95, 108, 97, 122, 121, 95, 104, 97, 115, 104, 95, 105, 110, 104, 101, 114, 105, 116, 97, 110, 99, 101, 58, 32, 99, 111, 117, 108, 100, 32, 110, 111, 116, 32, 104, 97, 115, 104, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 116, 101, 115, 116, 95, 108, 97, 122, 121, 95, 104, 97, 115, 104, 95, 105, 110, 104, 101, 114, 105, 116, 97, 110, 99, 101, 58, 32, 116, 121, 112, 101, 32, 110, 111, 116, 32, 105, 110, 105, 116, 105, 97, 108, 105, 115, 101, 100, 32, 98, 121, 32, 104, 97, 115, 104, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 116, 101, 115, 116, 95, 108, 97, 122, 121, 95, 104, 97, 115, 104, 95, 105, 110, 104, 101, 114, 105, 116, 97, 110, 99, 101, 58, 32, 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 104, 97, 115, 104, 32, 102, 117, 110, 99, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 116, 101, 115, 116, 95, 98, 114, 111, 107, 101, 110, 95, 109, 101, 109, 111, 114, 121, 118, 105, 101, 119, 58, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 101, 114, 114, 111, 114, 32, 105, 110, 32, 98, 102, 95, 103, 101, 116, 98, 117, 102, 102, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _memoryviewtester_as_buffer = allocate(24, [ "i32 (%struct.PyObject*, i32, i8**)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, i8**)*", 0, 0, 0, "i32 (%struct.PyObject*, i32*)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, i8**)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.Py_buffer*, i32)*", 0, 0, 0, "void (%struct.PyObject*, %struct.Py_buffer*)*", 0, 0, 0 ], ALLOC_NORMAL);
    __str12 = allocate([ 109, 101, 109, 111, 114, 121, 118, 105, 101, 119, 116, 101, 115, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __MemoryViewTester_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2228715, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str13 = allocate([ 116, 101, 115, 116, 95, 98, 114, 111, 107, 101, 110, 95, 109, 101, 109, 111, 114, 121, 118, 105, 101, 119, 58, 32, 102, 97, 105, 108, 101, 100, 32, 116, 111, 32, 99, 114, 101, 97, 116, 101, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 116, 101, 115, 116, 95, 98, 114, 111, 107, 101, 110, 95, 109, 101, 109, 111, 114, 121, 118, 105, 101, 119, 58, 32, 109, 101, 109, 111, 114, 121, 118, 105, 101, 119, 40, 41, 32, 100, 105, 100, 110, 39, 116, 32, 114, 97, 105, 115, 101, 32, 97, 110, 32, 69, 120, 99, 101, 112, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 116, 101, 115, 116, 95, 108, 111, 110, 103, 95, 97, 112, 105, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 110, 117, 108, 108, 32, 114, 101, 115, 117, 108, 116, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 45, 49, 32, 114, 101, 115, 117, 108, 116, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 111, 117, 116, 112, 117, 116, 32, 33, 61, 32, 105, 110, 112, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 115, 105, 103, 110, 101, 100, 32, 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 110, 117, 108, 108, 32, 114, 101, 115, 117, 108, 116, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 115, 105, 103, 110, 101, 100, 32, 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 45, 49, 32, 114, 101, 115, 117, 108, 116, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 115, 105, 103, 110, 101, 100, 32, 111, 117, 116, 112, 117, 116, 32, 33, 61, 32, 105, 110, 112, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 78, 85, 76, 76, 32, 102, 114, 111, 109, 32, 80, 121, 76, 111, 110, 103, 95, 70, 114, 111, 109, 76, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 78, 85, 76, 76, 32, 102, 114, 111, 109, 32, 80, 121, 78, 117, 109, 98, 101, 114, 95, 78, 101, 103, 97, 116, 105, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 80, 121, 76, 111, 110, 103, 95, 65, 115, 85, 110, 115, 105, 103, 110, 101, 100, 88, 88, 88, 40, 45, 49, 41, 32, 100, 105, 100, 110, 39, 116, 32, 99, 111, 109, 112, 108, 97, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 80, 121, 76, 111, 110, 103, 95, 65, 115, 85, 110, 115, 105, 103, 110, 101, 100, 88, 88, 88, 40, 45, 49, 41, 32, 114, 97, 105, 115, 101, 100, 32, 115, 111, 109, 101, 116, 104, 105, 110, 103, 32, 111, 116, 104, 101, 114, 32, 116, 104, 97, 110, 32, 79, 118, 101, 114, 102, 108, 111, 119, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 78, 85, 76, 76, 32, 102, 114, 111, 109, 32, 80, 121, 78, 117, 109, 98, 101, 114, 95, 76, 115, 104, 105, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 80, 121, 76, 111, 110, 103, 95, 65, 115, 85, 110, 115, 105, 103, 110, 101, 100, 88, 88, 88, 40, 50, 42, 42, 78, 66, 73, 84, 83, 41, 32, 100, 105, 100, 110, 39, 116, 32, 99, 111, 109, 112, 108, 97, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 80, 121, 76, 111, 110, 103, 95, 65, 115, 85, 110, 115, 105, 103, 110, 101, 100, 88, 88, 88, 40, 50, 42, 42, 78, 66, 73, 84, 83, 41, 32, 114, 97, 105, 115, 101, 100, 32, 115, 111, 109, 101, 116, 104, 105, 110, 103, 32, 111, 116, 104, 101, 114, 32, 116, 104, 97, 110, 32, 79, 118, 101, 114, 102, 108, 111, 119, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 78, 85, 76, 76, 32, 102, 114, 111, 109, 32, 80, 121, 78, 117, 109, 98, 101, 114, 95, 82, 115, 104, 105, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 80, 121, 76, 111, 110, 103, 95, 65, 115, 88, 88, 88, 40, 50, 42, 42, 40, 78, 66, 73, 84, 83, 45, 49, 41, 41, 32, 100, 105, 100, 110, 39, 116, 32, 99, 111, 109, 112, 108, 97, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 80, 121, 76, 111, 110, 103, 95, 65, 115, 88, 88, 88, 40, 50, 42, 42, 40, 78, 66, 73, 84, 83, 45, 49, 41, 41, 32, 114, 97, 105, 115, 101, 100, 32, 115, 111, 109, 101, 116, 104, 105, 110, 103, 32, 111, 116, 104, 101, 114, 32, 116, 104, 97, 110, 32, 79, 118, 101, 114, 102, 108, 111, 119, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 78, 85, 76, 76, 32, 102, 114, 111, 109, 32, 80, 121, 78, 117, 109, 98, 101, 114, 95, 83, 117, 98, 116, 114, 97, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 80, 121, 76, 111, 110, 103, 95, 65, 115, 88, 88, 88, 40, 45, 50, 42, 42, 40, 78, 66, 73, 84, 83, 45, 49, 41, 45, 49, 41, 32, 100, 105, 100, 110, 39, 116, 32, 99, 111, 109, 112, 108, 97, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 80, 121, 76, 111, 110, 103, 95, 65, 115, 88, 88, 88, 40, 45, 50, 42, 42, 40, 78, 66, 73, 84, 83, 45, 49, 41, 45, 49, 41, 32, 114, 97, 105, 115, 101, 100, 32, 115, 111, 109, 101, 116, 104, 105, 110, 103, 32, 111, 116, 104, 101, 114, 32, 116, 104, 97, 110, 32, 79, 118, 101, 114, 102, 108, 111, 119, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 116, 101, 115, 116, 95, 108, 111, 110, 103, 108, 111, 110, 103, 95, 97, 112, 105, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 116, 101, 115, 116, 95, 108, 111, 110, 103, 95, 97, 110, 100, 95, 111, 118, 101, 114, 102, 108, 111, 119, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 119, 97, 115, 32, 110, 111, 116, 32, 115, 101, 116, 32, 116, 111, 32, 45, 49, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 111, 118, 101, 114, 102, 108, 111, 119, 32, 119, 97, 115, 32, 110, 111, 116, 32, 115, 101, 116, 32, 116, 111, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 45, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 111, 118, 101, 114, 102, 108, 111, 119, 32, 119, 97, 115, 32, 110, 111, 116, 32, 115, 101, 116, 32, 116, 111, 32, 45, 49, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 70, 70, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 101, 120, 112, 101, 99, 116, 101, 100, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 48, 120, 70, 70, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 111, 118, 101, 114, 102, 108, 111, 119, 32, 119, 97, 115, 32, 110, 111, 116, 32, 99, 108, 101, 97, 114, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 45, 70, 70, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 111, 118, 101, 114, 102, 108, 111, 119, 32, 119, 97, 115, 32, 115, 101, 116, 32, 105, 110, 99, 111, 114, 114, 101, 99, 116, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 101, 120, 112, 101, 99, 116, 101, 100, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 76, 79, 78, 71, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 101, 120, 112, 101, 99, 116, 101, 100, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 76, 79, 78, 71, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 116, 101, 115, 116, 95, 108, 111, 110, 103, 95, 108, 111, 110, 103, 95, 97, 110, 100, 95, 111, 118, 101, 114, 102, 108, 111, 119, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 101, 120, 112, 101, 99, 116, 101, 100, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 80, 89, 95, 76, 76, 79, 78, 71, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 101, 120, 112, 101, 99, 116, 101, 100, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 80, 89, 95, 76, 76, 79, 78, 71, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 76, 58, 116, 101, 115, 116, 95, 76, 95, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 116, 101, 115, 116, 95, 76, 95, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 76, 32, 99, 111, 100, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 119, 114, 111, 110, 103, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 108, 111, 110, 103, 32, 52, 50, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 76, 32, 99, 111, 100, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 119, 114, 111, 110, 103, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 105, 110, 116, 32, 52, 50, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 105, 40, 105, 105, 41, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 40, 105, 105, 41, 105, 124, 40, 105, 40, 105, 105, 41, 41, 40, 105, 105, 105, 41, 105, 0 ], "i8", ALLOC_NORMAL);
    _keywords_9777 = allocate(24, "i8*", ALLOC_NORMAL);
    __str59 = allocate([ 97, 114, 103, 49, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 97, 114, 103, 50, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 97, 114, 103, 51, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 97, 114, 103, 52, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 97, 114, 103, 53, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 98, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 66, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 104, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 72, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 73, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 107, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 105, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 108, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 110, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 76, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 75, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 116, 101, 115, 116, 95, 107, 95, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 80, 121, 73, 110, 116, 95, 65, 115, 85, 110, 115, 105, 103, 110, 101, 100, 76, 111, 110, 103, 77, 97, 115, 107, 40, 41, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 119, 114, 111, 110, 103, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 108, 111, 110, 103, 32, 48, 120, 70, 70, 70, 46, 46, 46, 70, 70, 70, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 107, 58, 116, 101, 115, 116, 95, 107, 95, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str79 = allocate([ 107, 32, 99, 111, 100, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 119, 114, 111, 110, 103, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 108, 111, 110, 103, 32, 48, 120, 70, 70, 70, 46, 46, 46, 70, 70, 70, 0 ], "i8", ALLOC_NORMAL);
    __str80 = allocate([ 45, 70, 70, 70, 70, 70, 70, 70, 70, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 52, 50, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 107, 32, 99, 111, 100, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 119, 114, 111, 110, 103, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 108, 111, 110, 103, 32, 45, 48, 120, 70, 70, 70, 46, 46, 48, 48, 48, 48, 52, 50, 0 ], "i8", ALLOC_NORMAL);
    _x = allocate(1, "i32", ALLOC_NORMAL);
    __str82 = allocate([ 116, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str83 = allocate([ 97, 115, 99, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str84 = allocate([ 117, 58, 116, 101, 115, 116, 95, 117, 95, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 116, 101, 115, 116, 95, 117, 95, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str86 = allocate([ 117, 32, 99, 111, 100, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 119, 114, 111, 110, 103, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 117, 39, 116, 101, 115, 116, 39, 0 ], "i8", ALLOC_NORMAL);
    __str87 = allocate([ 117, 35, 58, 116, 101, 115, 116, 95, 117, 95, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str88 = allocate([ 117, 35, 32, 99, 111, 100, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 119, 114, 111, 110, 103, 32, 118, 97, 108, 117, 101, 115, 32, 102, 111, 114, 32, 117, 39, 116, 101, 115, 116, 39, 0 ], "i8", ALLOC_NORMAL);
    __str89 = allocate([ 244, 138, 175, 141, 0 ], "i8", ALLOC_NORMAL);
    __str90 = allocate([ 116, 101, 115, 116, 95, 119, 105, 100, 101, 99, 104, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str91 = allocate([ 119, 105, 100, 101, 32, 115, 116, 114, 105, 110, 103, 32, 97, 110, 100, 32, 117, 116, 102, 56, 32, 115, 116, 114, 105, 110, 103, 32, 104, 97, 118, 101, 32, 100, 105, 102, 102, 101, 114, 101, 110, 116, 32, 108, 101, 110, 103, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str92 = allocate([ 119, 105, 100, 101, 32, 115, 116, 114, 105, 110, 103, 32, 97, 110, 100, 32, 117, 116, 102, 56, 32, 115, 116, 114, 105, 110, 103, 32, 97, 114, 101, 32, 100, 105, 102, 102, 101, 114, 101, 110, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str93 = allocate([ 124, 58, 116, 101, 115, 116, 95, 101, 109, 112, 116, 121, 95, 97, 114, 103, 112, 97, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_10129 = allocate(4, "i8*", ALLOC_NORMAL);
    __str94 = allocate([ 115, 124, 115, 58, 116, 101, 115, 116, 95, 105, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 101, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str95 = allocate([ 115, 124, 115, 58, 116, 101, 115, 116, 95, 105, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 100, 101, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _C_92_10205 = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, -2, 0, 0, 0, 2, 0, 0, 0, -1, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, -3, 0, 0, 0, 2, 0, 0, 0, -1, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, -4, 0, 0, 0, 3, 0, 0, 0, -1, 0, 0, 0, 32767, 0, 0, 0, 15, 0, 0, 0, 1, 0, 0, 0, -32767, 0, 0, 0, 15, 0, 0, 0, -1, 0, 0, 0, 65535, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, -65535, 0, 0, 0, 16, 0, 0, 0, -1, 0, 0, 0, 268435455, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, -268435455, 0, 0, 0, 28, 0, 0, 0, -1, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str96 = allocate([ 116, 101, 115, 116, 95, 108, 111, 110, 103, 95, 110, 117, 109, 98, 105, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str97 = allocate([ 119, 114, 111, 110, 103, 32, 114, 101, 115, 117, 108, 116, 32, 102, 111, 114, 32, 95, 80, 121, 76, 111, 110, 103, 95, 78, 117, 109, 66, 105, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str98 = allocate([ 119, 114, 111, 110, 103, 32, 114, 101, 115, 117, 108, 116, 32, 102, 111, 114, 32, 95, 80, 121, 76, 111, 110, 103, 95, 83, 105, 103, 110, 0 ], "i8", ALLOC_NORMAL);
    __str99 = allocate([ 79, 105, 58, 114, 97, 105, 115, 101, 95, 101, 120, 99, 101, 112, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str100 = allocate([ 97, 110, 32, 101, 120, 99, 101, 112, 116, 105, 111, 110, 32, 99, 108, 97, 115, 115, 32, 105, 115, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    _test_run_counter = allocate(1, "i32", ALLOC_NORMAL);
    __str101 = allocate([ 80, 121, 68, 97, 116, 101, 84, 105, 109, 101, 95, 67, 65, 80, 73, 32, 115, 111, 109, 101, 104, 111, 119, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str102 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 46, 100, 97, 116, 101, 116, 105, 109, 101, 95, 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str103 = allocate([ 37, 100, 0 ], "i8", ALLOC_NORMAL);
    __str104 = allocate([ 49, 0 ], "i8", ALLOC_NORMAL);
    __str105 = allocate([ 37, 100, 32, 102, 97, 105, 108, 101, 100, 32, 97, 116, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str106 = allocate([ 37, 108, 100, 0 ], "i8", ALLOC_NORMAL);
    __str107 = allocate([ 37, 108, 100, 32, 102, 97, 105, 108, 101, 100, 32, 97, 116, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str108 = allocate([ 37, 122, 100, 0 ], "i8", ALLOC_NORMAL);
    __str109 = allocate([ 37, 122, 100, 32, 102, 97, 105, 108, 101, 100, 32, 97, 116, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str110 = allocate([ 37, 117, 0 ], "i8", ALLOC_NORMAL);
    __str111 = allocate([ 37, 117, 32, 102, 97, 105, 108, 101, 100, 32, 97, 116, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str112 = allocate([ 37, 108, 117, 0 ], "i8", ALLOC_NORMAL);
    __str113 = allocate([ 37, 108, 117, 32, 102, 97, 105, 108, 101, 100, 32, 97, 116, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str114 = allocate([ 37, 122, 117, 0 ], "i8", ALLOC_NORMAL);
    __str115 = allocate([ 37, 122, 117, 32, 102, 97, 105, 108, 101, 100, 32, 97, 116, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str116 = allocate([ 37, 108, 108, 117, 0 ], "i8", ALLOC_NORMAL);
    __str117 = allocate([ 37, 108, 108, 117, 32, 102, 97, 105, 108, 101, 100, 32, 97, 116, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str118 = allocate([ 37, 108, 108, 100, 0 ], "i8", ALLOC_NORMAL);
    __str119 = allocate([ 37, 108, 108, 100, 32, 102, 97, 105, 108, 101, 100, 32, 97, 116, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str120 = allocate([ 116, 101, 115, 116, 95, 115, 116, 114, 105, 110, 103, 95, 102, 114, 111, 109, 95, 102, 111, 114, 109, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str121 = allocate([ 99, 97, 112, 115, 117, 108, 101, 32, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str122 = allocate([ 99, 97, 112, 115, 117, 108, 101, 32, 112, 111, 105, 110, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str123 = allocate([ 99, 97, 112, 115, 117, 108, 101, 32, 99, 111, 110, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    _capsule_error = allocate(1, "i8*", ALLOC_NORMAL);
    _capsule_destructor_call_count = allocate(1, "i32", ALLOC_NORMAL);
    __str124 = allocate([ 99, 111, 110, 116, 101, 120, 116, 32, 100, 105, 100, 32, 110, 111, 116, 32, 109, 97, 116, 99, 104, 32, 105, 110, 32, 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 33, 0 ], "i8", ALLOC_NORMAL);
    __str125 = allocate([ 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 32, 100, 105, 100, 32, 110, 111, 116, 32, 109, 97, 116, 99, 104, 32, 105, 110, 32, 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 33, 32, 32, 40, 119, 111, 97, 104, 33, 41, 0 ], "i8", ALLOC_NORMAL);
    __str126 = allocate([ 110, 97, 109, 101, 32, 100, 105, 100, 32, 110, 111, 116, 32, 109, 97, 116, 99, 104, 32, 105, 110, 32, 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 33, 0 ], "i8", ALLOC_NORMAL);
    __str127 = allocate([ 112, 111, 105, 110, 116, 101, 114, 32, 100, 105, 100, 32, 110, 111, 116, 32, 109, 97, 116, 99, 104, 32, 105, 110, 32, 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 33, 0 ], "i8", ALLOC_NORMAL);
    __str128 = allocate([ 95, 115, 111, 99, 107, 101, 116, 46, 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str129 = allocate([ 95, 115, 111, 99, 107, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str130 = allocate([ 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str131 = allocate([ 95, 99, 117, 114, 115, 101, 115, 46, 95, 67, 95, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str132 = allocate([ 95, 99, 117, 114, 115, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str133 = allocate([ 95, 67, 95, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str134 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str135 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 95, 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str136 = allocate([ 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 32, 110, 111, 116, 32, 99, 97, 108, 108, 101, 100, 33, 0 ], "i8", ALLOC_NORMAL);
    __str137 = allocate([ 105, 103, 110, 111, 114, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str138 = allocate([ 116, 104, 101, 32, 119, 114, 111, 110, 103, 32, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str139 = allocate([ 80, 121, 67, 97, 112, 115, 117, 108, 101, 95, 71, 101, 116, 80, 111, 105, 110, 116, 101, 114, 32, 115, 104, 111, 117, 108, 100, 32, 104, 97, 118, 101, 32, 102, 97, 105, 108, 101, 100, 32, 98, 117, 116, 32, 100, 105, 100, 32, 110, 111, 116, 33, 0 ], "i8", ALLOC_NORMAL);
    __str140 = allocate([ 80, 121, 67, 97, 112, 115, 117, 108, 101, 95, 71, 101, 116, 80, 111, 105, 110, 116, 101, 114, 32, 115, 104, 111, 117, 108, 100, 32, 110, 111, 116, 32, 104, 97, 118, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 116, 104, 101, 32, 105, 110, 116, 101, 114, 110, 97, 108, 32, 112, 111, 105, 110, 116, 101, 114, 33, 0 ], "i8", ALLOC_NORMAL);
    __str141 = allocate([ 80, 121, 67, 97, 112, 115, 117, 108, 101, 95, 71, 101, 116, 80, 111, 105, 110, 116, 101, 114, 32, 115, 104, 111, 117, 108, 100, 32, 104, 97, 118, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 78, 85, 76, 76, 32, 112, 111, 105, 110, 116, 101, 114, 32, 98, 117, 116, 32, 100, 105, 100, 32, 110, 111, 116, 33, 0 ], "i8", ALLOC_NORMAL);
    __str142 = allocate([ 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 32, 99, 97, 108, 108, 101, 100, 32, 119, 104, 101, 110, 32, 105, 116, 32, 115, 104, 111, 117, 108, 100, 32, 110, 111, 116, 32, 104, 97, 118, 101, 32, 98, 101, 101, 110, 33, 0 ], "i8", ALLOC_NORMAL);
    _buffer_10522 = allocate(256, "i8", ALLOC_NORMAL);
    __str143 = allocate([ 37, 115, 32, 109, 111, 100, 117, 108, 101, 58, 32, 34, 37, 115, 34, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 58, 32, 34, 37, 115, 34, 0 ], "i8", ALLOC_NORMAL);
    __str144 = allocate([ 80, 121, 67, 97, 112, 115, 117, 108, 101, 95, 71, 101, 116, 80, 111, 105, 110, 116, 101, 114, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 78, 85, 76, 76, 32, 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 108, 121, 33, 0 ], "i8", ALLOC_NORMAL);
    __str145 = allocate([ 119, 101, 101, 98, 108, 101, 115, 32, 119, 111, 98, 98, 108, 101, 32, 98, 117, 116, 32, 116, 104, 101, 121, 32, 100, 111, 110, 39, 116, 32, 102, 97, 108, 108, 32, 100, 111, 119, 110, 0 ], "i8", ALLOC_NORMAL);
    __str146 = allocate([ 80, 121, 67, 97, 112, 115, 117, 108, 101, 95, 71, 101, 116, 80, 111, 105, 110, 116, 101, 114, 32, 115, 104, 111, 117, 108, 100, 32, 110, 111, 116, 32, 104, 97, 118, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 105, 116, 115, 32, 105, 110, 116, 101, 114, 110, 97, 108, 32, 112, 111, 105, 110, 116, 101, 114, 33, 0 ], "i8", ALLOC_NORMAL);
    __str147 = allocate([ 116, 101, 115, 116, 95, 99, 97, 112, 115, 117, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str148 = allocate([ 79, 79, 58, 116, 114, 97, 99, 101, 98, 97, 99, 107, 95, 112, 114, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str149 = allocate([ 115, 115, 105, 58, 99, 111, 100, 101, 95, 110, 101, 119, 101, 109, 112, 116, 121, 0 ], "i8", ALLOC_NORMAL);
    __str150 = allocate([ 115, 124, 115, 79, 79, 58, 109, 97, 107, 101, 95, 101, 120, 99, 101, 112, 116, 105, 111, 110, 95, 119, 105, 116, 104, 95, 100, 111, 99, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_10723 = allocate(20, "i8*", ALLOC_NORMAL);
    __str151 = allocate([ 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str152 = allocate([ 100, 111, 99, 0 ], "i8", ALLOC_NORMAL);
    __str153 = allocate([ 98, 97, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str154 = allocate([ 100, 105, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str155 = allocate([ 114, 97, 105, 115, 101, 95, 101, 120, 99, 101, 112, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str156 = allocate([ 116, 101, 115, 116, 95, 99, 111, 110, 102, 105, 103, 0 ], "i8", ALLOC_NORMAL);
    __str157 = allocate([ 116, 101, 115, 116, 95, 100, 97, 116, 101, 116, 105, 109, 101, 95, 99, 97, 112, 105, 0 ], "i8", ALLOC_NORMAL);
    __str158 = allocate([ 116, 101, 115, 116, 95, 108, 105, 115, 116, 95, 97, 112, 105, 0 ], "i8", ALLOC_NORMAL);
    __str159 = allocate([ 116, 101, 115, 116, 95, 100, 105, 99, 116, 95, 105, 116, 101, 114, 97, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str160 = allocate([ 116, 101, 115, 116, 95, 108, 97, 122, 121, 95, 104, 97, 115, 104, 95, 105, 110, 104, 101, 114, 105, 116, 97, 110, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str161 = allocate([ 116, 101, 115, 116, 95, 98, 114, 111, 107, 101, 110, 95, 109, 101, 109, 111, 114, 121, 118, 105, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    __str162 = allocate([ 116, 101, 115, 116, 95, 101, 109, 112, 116, 121, 95, 97, 114, 103, 112, 97, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str163 = allocate([ 116, 101, 115, 116, 95, 110, 117, 108, 108, 95, 115, 116, 114, 105, 110, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    __str164 = allocate([ 116, 101, 115, 116, 95, 119, 105, 116, 104, 95, 100, 111, 99, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str165 = allocate([ 84, 104, 105, 115, 32, 105, 115, 32, 97, 32, 112, 114, 101, 116, 116, 121, 32, 110, 111, 114, 109, 97, 108, 32, 100, 111, 99, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str166 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str167 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 107, 101, 121, 119, 111, 114, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str168 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 98, 0 ], "i8", ALLOC_NORMAL);
    __str169 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 66, 0 ], "i8", ALLOC_NORMAL);
    __str170 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 104, 0 ], "i8", ALLOC_NORMAL);
    __str171 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 72, 0 ], "i8", ALLOC_NORMAL);
    __str172 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 73, 0 ], "i8", ALLOC_NORMAL);
    __str173 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 107, 0 ], "i8", ALLOC_NORMAL);
    __str174 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 105, 0 ], "i8", ALLOC_NORMAL);
    __str175 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 108, 0 ], "i8", ALLOC_NORMAL);
    __str176 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 110, 0 ], "i8", ALLOC_NORMAL);
    __str177 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 76, 0 ], "i8", ALLOC_NORMAL);
    __str178 = allocate([ 103, 101, 116, 97, 114, 103, 115, 95, 75, 0 ], "i8", ALLOC_NORMAL);
    __str179 = allocate([ 99, 111, 100, 101, 99, 95, 105, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 101, 110, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str180 = allocate([ 99, 111, 100, 101, 99, 95, 105, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 100, 101, 99, 111, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str181 = allocate([ 116, 114, 97, 99, 101, 98, 97, 99, 107, 95, 112, 114, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str182 = allocate([ 99, 111, 100, 101, 95, 110, 101, 119, 101, 109, 112, 116, 121, 0 ], "i8", ALLOC_NORMAL);
    __str183 = allocate([ 109, 97, 107, 101, 95, 101, 120, 99, 101, 112, 116, 105, 111, 110, 95, 119, 105, 116, 104, 95, 100, 111, 99, 0 ], "i8", ALLOC_NORMAL);
    _TestMethods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str184 = allocate([ 84, 95, 66, 79, 79, 76, 0 ], "i8", ALLOC_NORMAL);
    __str185 = allocate([ 84, 95, 66, 89, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str186 = allocate([ 84, 95, 85, 66, 89, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str187 = allocate([ 84, 95, 83, 72, 79, 82, 84, 0 ], "i8", ALLOC_NORMAL);
    __str188 = allocate([ 84, 95, 85, 83, 72, 79, 82, 84, 0 ], "i8", ALLOC_NORMAL);
    __str189 = allocate([ 84, 95, 73, 78, 84, 0 ], "i8", ALLOC_NORMAL);
    __str190 = allocate([ 84, 95, 85, 73, 78, 84, 0 ], "i8", ALLOC_NORMAL);
    __str191 = allocate([ 84, 95, 76, 79, 78, 71, 0 ], "i8", ALLOC_NORMAL);
    __str192 = allocate([ 84, 95, 85, 76, 79, 78, 71, 0 ], "i8", ALLOC_NORMAL);
    __str193 = allocate([ 84, 95, 70, 76, 79, 65, 84, 0 ], "i8", ALLOC_NORMAL);
    __str194 = allocate([ 84, 95, 68, 79, 85, 66, 76, 69, 0 ], "i8", ALLOC_NORMAL);
    __str195 = allocate([ 84, 95, 83, 84, 82, 73, 78, 71, 95, 73, 78, 80, 76, 65, 67, 69, 0 ], "i8", ALLOC_NORMAL);
    __str196 = allocate([ 84, 95, 76, 79, 78, 71, 76, 79, 78, 71, 0 ], "i8", ALLOC_NORMAL);
    __str197 = allocate([ 84, 95, 85, 76, 79, 78, 71, 76, 79, 78, 71, 0 ], "i8", ALLOC_NORMAL);
    _test_members = allocate([ 0, 0, 0, 0, 14, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str198 = allocate([ 124, 98, 98, 66, 104, 72, 105, 73, 108, 107, 102, 100, 115, 35, 76, 75, 0 ], "i8", ALLOC_NORMAL);
    _keywords_10762 = allocate(60, "i8*", ALLOC_NORMAL);
    __str199 = allocate([ 115, 116, 114, 105, 110, 103, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str201 = allocate([ 116, 101, 115, 116, 95, 115, 116, 114, 117, 99, 116, 109, 101, 109, 98, 101, 114, 115, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str202 = allocate([ 84, 121, 112, 101, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 97, 108, 108, 32, 115, 116, 114, 117, 99, 116, 109, 101, 109, 98, 101, 114, 32, 116, 121, 112, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _test_structmembersType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str203 = allocate([ 95, 116, 101, 115, 116, 99, 97, 112, 105, 0 ], "i8", ALLOC_NORMAL);
    __str204 = allocate([ 95, 116, 101, 115, 116, 95, 115, 116, 114, 117, 99, 116, 109, 101, 109, 98, 101, 114, 115, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str205 = allocate([ 67, 72, 65, 82, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str206 = allocate([ 67, 72, 65, 82, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str207 = allocate([ 85, 67, 72, 65, 82, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str208 = allocate([ 83, 72, 82, 84, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str209 = allocate([ 83, 72, 82, 84, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str210 = allocate([ 85, 83, 72, 82, 84, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str211 = allocate([ 73, 78, 84, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str212 = allocate([ 73, 78, 84, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str213 = allocate([ 85, 73, 78, 84, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str214 = allocate([ 76, 79, 78, 71, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str215 = allocate([ 76, 79, 78, 71, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str216 = allocate([ 85, 76, 79, 78, 71, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str217 = allocate([ 70, 76, 84, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str218 = allocate([ 70, 76, 84, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str219 = allocate([ 68, 66, 76, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str220 = allocate([ 68, 66, 76, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str221 = allocate([ 76, 76, 79, 78, 71, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str222 = allocate([ 76, 76, 79, 78, 71, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str223 = allocate([ 85, 76, 76, 79, 78, 71, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str224 = allocate([ 80, 89, 95, 83, 83, 73, 90, 69, 95, 84, 95, 77, 65, 88, 0 ], "i8", ALLOC_NORMAL);
    __str225 = allocate([ 80, 89, 95, 83, 83, 73, 90, 69, 95, 84, 95, 77, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str226 = allocate([ 83, 73, 90, 69, 79, 70, 95, 80, 89, 71, 67, 95, 72, 69, 65, 68, 0 ], "i8", ALLOC_NORMAL);
    __str227 = allocate([ 95, 116, 101, 115, 116, 99, 97, 112, 105, 46, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str228 = allocate([ 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    HEAP[__HashInheritanceTester_Type + 12] = __str5;
    HEAP[__HashInheritanceTester_Type + 24] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[__HashInheritanceTester_Type + 72] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[__HashInheritanceTester_Type + 156] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_memoryviewtester_as_buffer + 16] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[__MemoryViewTester_Type + 12] = __str12;
    HEAP[__MemoryViewTester_Type + 24] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[__MemoryViewTester_Type + 72] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[__MemoryViewTester_Type + 80] = _memoryviewtester_as_buffer;
    HEAP[__MemoryViewTester_Type + 156] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_keywords_9777] = __str59;
    HEAP[_keywords_9777 + 4] = __str60;
    HEAP[_keywords_9777 + 8] = __str61;
    HEAP[_keywords_9777 + 12] = __str62;
    HEAP[_keywords_9777 + 16] = __str63;
    HEAP[_kwlist_10723] = __str151;
    HEAP[_kwlist_10723 + 4] = __str152;
    HEAP[_kwlist_10723 + 8] = __str153;
    HEAP[_kwlist_10723 + 12] = __str154;
    HEAP[_TestMethods] = __str155;
    HEAP[_TestMethods + 4] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_TestMethods + 16] = __str156;
    HEAP[_TestMethods + 20] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_TestMethods + 32] = __str157;
    HEAP[_TestMethods + 36] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_TestMethods + 48] = __str158;
    HEAP[_TestMethods + 52] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_TestMethods + 64] = __str159;
    HEAP[_TestMethods + 68] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_TestMethods + 80] = __str160;
    HEAP[_TestMethods + 84] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_TestMethods + 96] = __str161;
    HEAP[_TestMethods + 100] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_TestMethods + 112] = __str15;
    HEAP[_TestMethods + 116] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_TestMethods + 128] = __str37;
    HEAP[_TestMethods + 132] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_TestMethods + 144] = __str96;
    HEAP[_TestMethods + 148] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_TestMethods + 160] = __str76;
    HEAP[_TestMethods + 164] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_TestMethods + 176] = __str162;
    HEAP[_TestMethods + 180] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_TestMethods + 192] = __str163;
    HEAP[_TestMethods + 196] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_TestMethods + 208] = __str120;
    HEAP[_TestMethods + 212] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_TestMethods + 224] = __str164;
    HEAP[_TestMethods + 228] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_TestMethods + 236] = __str165;
    HEAP[_TestMethods + 240] = __str166;
    HEAP[_TestMethods + 244] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_TestMethods + 256] = __str167;
    HEAP[_TestMethods + 260] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_TestMethods + 272] = __str168;
    HEAP[_TestMethods + 276] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_TestMethods + 288] = __str169;
    HEAP[_TestMethods + 292] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_TestMethods + 304] = __str170;
    HEAP[_TestMethods + 308] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_TestMethods + 320] = __str171;
    HEAP[_TestMethods + 324] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_TestMethods + 336] = __str172;
    HEAP[_TestMethods + 340] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_TestMethods + 352] = __str173;
    HEAP[_TestMethods + 356] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_TestMethods + 368] = __str174;
    HEAP[_TestMethods + 372] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_TestMethods + 384] = __str175;
    HEAP[_TestMethods + 388] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_TestMethods + 400] = __str176;
    HEAP[_TestMethods + 404] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_TestMethods + 416] = __str177;
    HEAP[_TestMethods + 420] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_TestMethods + 432] = __str178;
    HEAP[_TestMethods + 436] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_TestMethods + 448] = __str35;
    HEAP[_TestMethods + 452] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_TestMethods + 464] = __str49;
    HEAP[_TestMethods + 468] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_TestMethods + 480] = __str53;
    HEAP[_TestMethods + 484] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_TestMethods + 496] = __str179;
    HEAP[_TestMethods + 500] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_TestMethods + 512] = __str180;
    HEAP[_TestMethods + 516] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_TestMethods + 528] = __str85;
    HEAP[_TestMethods + 532] = FUNCTION_TABLE_OFFSET + 82;
    HEAP[_TestMethods + 544] = __str90;
    HEAP[_TestMethods + 548] = FUNCTION_TABLE_OFFSET + 84;
    HEAP[_TestMethods + 560] = __str147;
    HEAP[_TestMethods + 564] = FUNCTION_TABLE_OFFSET + 86;
    HEAP[_TestMethods + 576] = __str181;
    HEAP[_TestMethods + 580] = FUNCTION_TABLE_OFFSET + 88;
    HEAP[_TestMethods + 592] = __str182;
    HEAP[_TestMethods + 596] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_TestMethods + 608] = __str183;
    HEAP[_TestMethods + 612] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_test_members] = __str184;
    HEAP[_test_members + 20] = __str185;
    HEAP[_test_members + 40] = __str186;
    HEAP[_test_members + 60] = __str187;
    HEAP[_test_members + 80] = __str188;
    HEAP[_test_members + 100] = __str189;
    HEAP[_test_members + 120] = __str190;
    HEAP[_test_members + 140] = __str191;
    HEAP[_test_members + 160] = __str192;
    HEAP[_test_members + 180] = __str193;
    HEAP[_test_members + 200] = __str194;
    HEAP[_test_members + 220] = __str195;
    HEAP[_test_members + 240] = __str196;
    HEAP[_test_members + 260] = __str197;
    HEAP[_keywords_10762] = __str184;
    HEAP[_keywords_10762 + 4] = __str185;
    HEAP[_keywords_10762 + 8] = __str186;
    HEAP[_keywords_10762 + 12] = __str187;
    HEAP[_keywords_10762 + 16] = __str188;
    HEAP[_keywords_10762 + 20] = __str189;
    HEAP[_keywords_10762 + 24] = __str190;
    HEAP[_keywords_10762 + 28] = __str191;
    HEAP[_keywords_10762 + 32] = __str192;
    HEAP[_keywords_10762 + 36] = __str193;
    HEAP[_keywords_10762 + 40] = __str194;
    HEAP[_keywords_10762 + 44] = __str195;
    HEAP[_keywords_10762 + 48] = __str196;
    HEAP[_keywords_10762 + 52] = __str197;
    HEAP[_test_structmembersType + 12] = __str201;
    HEAP[_test_structmembersType + 24] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_test_structmembersType + 72] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_test_structmembersType + 76] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_test_structmembersType + 88] = __str202;
    HEAP[_test_structmembersType + 120] = _test_members;
    HEAP[_test_structmembersType + 156] = FUNCTION_TABLE_OFFSET + 98;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
