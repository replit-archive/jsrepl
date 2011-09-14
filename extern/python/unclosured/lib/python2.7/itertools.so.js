"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 196;
  var $1___SIZE = 32;
  var $2___SIZE = 16;
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
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__grouperobject___SIZE = 16;
  var $struct__typeobject___SIZE = 196;
  var $struct_combinationsobject___SIZE = 28;
  var $struct_countobject___SIZE = 20;
  var $struct_cycleobject___SIZE = 20;
  var $struct_groupbyobject___SIZE = 28;
  var $struct_isliceobject___SIZE = 28;
  var $struct_iziplongestobject___SIZE = 28;
  var $struct_permutationsobject___SIZE = 32;
  var $struct_productobject___SIZE = 24;
  var $struct_repeatobject___SIZE = 16;
  var $struct_teedataobject___SIZE = 248;
  var $struct_teeobject___SIZE = 20;
  var __str;
  var _kwargs_8351;
  var __str1;
  var __str2;
  var _groupby_doc;
  var __str3;
  var _groupby_type;
  var __str4;
  var __str5;
  var ___PRETTY_FUNCTION___8669;
  var __str6;
  var __str7;
  var __grouper_type;
  var __str8;
  var ___PRETTY_FUNCTION___8768;
  var __str9;
  var _teedataobject_doc;
  var __str10;
  var _teedataobject_type;
  var _teecopy_doc;
  var __str11;
  var _teeobject_doc;
  var __str12;
  var _tee_methods;
  var __str13;
  var _tee_type;
  var __str14;
  var __str15;
  var _tee_doc;
  var __str16;
  var __str17;
  var _cycle_doc;
  var __str18;
  var _cycle_type;
  var __str19;
  var __str20;
  var _dropwhile_doc;
  var __str21;
  var _dropwhile_type;
  var __str22;
  var __str23;
  var _takewhile_doc;
  var __str24;
  var _takewhile_type;
  var __str25;
  var __str26;
  var __str27;
  var __str28;
  var __str29;
  var _islice_doc;
  var __str30;
  var _islice_type;
  var __str31;
  var __str32;
  var _starmap_doc;
  var __str33;
  var _starmap_type;
  var __str34;
  var __str35;
  var _imap_doc;
  var __str36;
  var _imap_type;
  var __str37;
  var _chain_doc;
  var _chain_from_iterable_doc;
  var __str38;
  var _chain_methods;
  var __str39;
  var _chain_type;
  var __str40;
  var __str41;
  var __str42;
  var __str43;
  var ___PRETTY_FUNCTION___10265;
  var __str44;
  var ___PRETTY_FUNCTION___10428;
  var _product_doc;
  var __str45;
  var _product_type;
  var __str46;
  var _kwargs_10542;
  var __str47;
  var __str48;
  var __str49;
  var ___PRETTY_FUNCTION___10664;
  var _combinations_doc;
  var __str50;
  var _combinations_type;
  var __str51;
  var _kwargs_10765;
  var ___PRETTY_FUNCTION___10891;
  var _cwr_doc;
  var __str52;
  var _cwr_type;
  var __str53;
  var _kwargs_10993;
  var ___PRETTY_FUNCTION___11129;
  var _permutations_doc;
  var __str54;
  var _permutations_type;
  var __str55;
  var _kwargs_11231;
  var __str56;
  var __str57;
  var _compress_doc;
  var __str58;
  var _compress_type;
  var __str59;
  var __str60;
  var _ifilter_doc;
  var __str61;
  var _ifilter_type;
  var __str62;
  var __str63;
  var _ifilterfalse_doc;
  var __str64;
  var _ifilterfalse_type;
  var __str65;
  var _kwlist_11697;
  var __str66;
  var __str67;
  var __str68;
  var __str69;
  var ___PRETTY_FUNCTION___11698;
  var __str70;
  var __str71;
  var __str72;
  var ___PRETTY_FUNCTION___11885;
  var __str73;
  var __str74;
  var __str75;
  var __str76;
  var __str77;
  var _count_reduce_doc;
  var __str78;
  var _count_methods;
  var _count_doc;
  var __str79;
  var _count_type;
  var __str80;
  var ___PRETTY_FUNCTION___12009;
  var __str81;
  var _izip_doc;
  var __str82;
  var _izip_type;
  var __str83;
  var _kwargs_12229;
  var __str84;
  var __str85;
  var __str86;
  var __str87;
  var __str88;
  var _length_hint_doc;
  var __str89;
  var _repeat_methods;
  var _repeat_doc;
  var __str90;
  var _repeat_type;
  var __str91;
  var __str92;
  var ___PRETTY_FUNCTION___12366;
  var __str93;
  var _izip_longest_doc;
  var __str94;
  var _iziplongest_type;
  var _module_doc;
  var _module_methods;
  var _C_280_12667;
  var __str95;
  var __str96;
  var ___PRETTY_FUNCTION___12663;
  function _groupby_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $gbo;
      var $it = __stackBase__;
      var $keyfunc = __stackBase__ + 4;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      HEAP[$keyfunc] = __Py_NoneStruct;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwds_addr, __str, _kwargs_8351, allocate([ $it, 0, 0, 0, $keyfunc, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      
      var $7 = HEAP[$type_addr + 152];
      
      var $9 = FUNCTION_TABLE[$7]($type_addr, 0);
      
      $gbo = $9;
      
      
      if ($gbo == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 9;
      break;
     case 4:
      
      
      HEAP[$gbo + 16] = 0;
      
      
      HEAP[$gbo + 20] = 0;
      
      
      HEAP[$gbo + 24] = 0;
      var $19 = HEAP[$keyfunc];
      
      
      HEAP[$gbo + 12] = $19;
      
      
      
      var $25 = HEAP[HEAP[$keyfunc]] + 1;
      var $26 = HEAP[$keyfunc];
      HEAP[$26] = $25;
      var $27 = HEAP[$it];
      var $28 = _PyObject_GetIter($27);
      
      
      HEAP[$gbo + 8] = $28;
      
      
      
      
      
      var $36 = $gbo;
      if (HEAP[$gbo + 8] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      var $39 = HEAP[$36] - 1;
      
      HEAP[$36] = $39;
      
      
      
      if (HEAP[$36] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      var $49 = HEAP[HEAP[$gbo + 4] + 24];
      
      
      FUNCTION_TABLE[$49]($gbo);
      __label__ = 7;
      break;
     case 7:
      $0 = 0;
      __label__ = 9;
      break;
     case 8:
      $0 = $36;
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
  function _groupby_dealloc($gbo) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $gbo_addr;
      $gbo_addr = $gbo;
      
      
      _PyObject_GC_UnTrack($gbo_addr);
      
      
      
      
      if (HEAP[$gbo_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$gbo_addr + 8];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$gbo_addr + 8] + 4] + 24];
      
      
      var $25 = HEAP[$gbo_addr + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$gbo_addr + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[$gbo_addr + 12];
      
      
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
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$gbo_addr + 12] + 4] + 24];
      
      
      var $49 = HEAP[$gbo_addr + 12];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$gbo_addr + 16] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $56 = HEAP[$gbo_addr + 16];
      
      
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
      
      
      
      
      
      
      var $70 = HEAP[HEAP[HEAP[$gbo_addr + 16] + 4] + 24];
      
      
      var $73 = HEAP[$gbo_addr + 16];
      FUNCTION_TABLE[$70]($73);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[$gbo_addr + 20] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $80 = HEAP[$gbo_addr + 20];
      
      
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
      
      
      
      
      
      
      var $94 = HEAP[HEAP[HEAP[$gbo_addr + 20] + 4] + 24];
      
      
      var $97 = HEAP[$gbo_addr + 20];
      FUNCTION_TABLE[$94]($97);
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      if (HEAP[$gbo_addr + 24] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      var $104 = HEAP[$gbo_addr + 24];
      
      
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
      
      
      
      
      
      
      var $118 = HEAP[HEAP[HEAP[$gbo_addr + 24] + 4] + 24];
      
      
      var $121 = HEAP[$gbo_addr + 24];
      FUNCTION_TABLE[$118]($121);
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      
      var $127 = HEAP[HEAP[$gbo_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$127]($gbo_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _groupby_traverse($gbo, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $gbo_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      var $vret8;
      var $vret12;
      var $vret16;
      $gbo_addr = $gbo;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$gbo_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$gbo_addr + 8];
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
      __label__ = 16;
      break;
     case 3:
      
      
      
      
      if (HEAP[$gbo_addr + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$gbo_addr + 12];
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
      __label__ = 16;
      break;
     case 6:
      
      
      
      
      if (HEAP[$gbo_addr + 16] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $33 = HEAP[$gbo_addr + 16];
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
      __label__ = 16;
      break;
     case 9:
      
      
      
      
      if (HEAP[$gbo_addr + 20] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $46 = HEAP[$gbo_addr + 20];
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
      __label__ = 16;
      break;
     case 12:
      
      
      
      
      if (HEAP[$gbo_addr + 24] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      var $59 = HEAP[$gbo_addr + 24];
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
      __label__ = 16;
      break;
     case 15:
      $0 = 0;
      __label__ = 16;
      break;
     case 16:
      
      $retval = $0;
      var $retval20 = $retval;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _groupby_next($gbo) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $gbo_addr;
      var $retval;
      var $0;
      var $newvalue;
      var $newkey;
      var $r;
      var $grouper;
      var $tmp;
      var $rcmp;
      $gbo_addr = $gbo;
      __label__ = 1;
      break;
     case 1:
      
      
      
      
      if (HEAP[$gbo_addr + 20] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$gbo_addr + 16] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $11 = HEAP[$gbo_addr + 20];
      
      
      var $14 = HEAP[$gbo_addr + 16];
      var $15 = _PyObject_RichCompareBool($14, $11, 2);
      $rcmp = $15;
      
      var $17 = $rcmp == -1;
      if ($17) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 28;
      break;
     case 5:
      
      
      if ($rcmp == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $22 = HEAP[$gbo_addr + 8];
      var $23 = _PyIter_Next($22);
      $newvalue = $23;
      
      if ($23 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 28;
      break;
     case 8:
      
      
      
      
      if (HEAP[$gbo_addr + 12] == __Py_NoneStruct) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      $newkey = $newvalue;
      
      
      
      var $33 = HEAP[$newvalue] + 1;
      
      
      HEAP[$newvalue] = $33;
      __label__ = 14;
      break;
     case 10:
      
      
      var $38 = HEAP[$gbo_addr + 12];
      
      var $40 = _PyObject_CallFunctionObjArgs($38, allocate([ $newvalue, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $newkey = $40;
      
      
      if ($newkey == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      var $46 = HEAP[$newvalue] - 1;
      
      
      HEAP[$newvalue] = $46;
      
      
      
      
      if (HEAP[$newvalue] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $57 = HEAP[HEAP[$newvalue + 4] + 24];
      
      FUNCTION_TABLE[$57]($newvalue);
      __label__ = 13;
      break;
     case 13:
      $0 = 0;
      __label__ = 28;
      break;
     case 14:
      
      
      
      $tmp = HEAP[$gbo_addr + 20];
      
      
      
      HEAP[$gbo_addr + 20] = $newkey;
      
      
      if ($tmp != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      var $70 = HEAP[$tmp] - 1;
      
      
      HEAP[$tmp] = $70;
      
      
      
      
      if (HEAP[$tmp] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $81 = HEAP[HEAP[$tmp + 4] + 24];
      
      FUNCTION_TABLE[$81]($tmp);
      __label__ = 17;
      break;
     case 17:
      
      
      
      $tmp = HEAP[$gbo_addr + 24];
      
      
      
      HEAP[$gbo_addr + 24] = $newvalue;
      
      
      if ($tmp != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 18:
      
      
      
      var $94 = HEAP[$tmp] - 1;
      
      
      HEAP[$tmp] = $94;
      
      
      
      
      if (HEAP[$tmp] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 19:
      
      
      
      
      var $105 = HEAP[HEAP[$tmp + 4] + 24];
      
      FUNCTION_TABLE[$105]($tmp);
      __label__ = 1;
      break;
     case 20:
      
      
      
      
      
      var $112 = HEAP[HEAP[$gbo_addr + 20]] + 1;
      var $113 = HEAP[$gbo_addr + 20];
      HEAP[$113] = $112;
      
      
      
      $tmp = HEAP[$gbo_addr + 16];
      
      
      var $119 = HEAP[$gbo_addr + 20];
      
      
      HEAP[$gbo_addr + 16] = $119;
      
      
      if ($tmp != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      
      
      
      var $127 = HEAP[$tmp] - 1;
      
      
      HEAP[$tmp] = $127;
      
      
      
      
      if (HEAP[$tmp] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      var $138 = HEAP[HEAP[$tmp + 4] + 24];
      
      FUNCTION_TABLE[$138]($tmp);
      __label__ = 23;
      break;
     case 23:
      
      
      var $142 = HEAP[$gbo_addr + 16];
      
      var $144 = __grouper_create($gbo_addr, $142);
      $grouper = $144;
      
      if ($144 == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      $0 = 0;
      __label__ = 28;
      break;
     case 25:
      
      
      var $148 = HEAP[$gbo_addr + 20];
      
      var $150 = _PyTuple_Pack(2, allocate([ $148, 0, 0, 0, $grouper, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $r = $150;
      
      
      
      var $154 = HEAP[$grouper] - 1;
      
      
      HEAP[$grouper] = $154;
      
      
      
      
      if (HEAP[$grouper] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $165 = HEAP[HEAP[$grouper + 4] + 24];
      
      FUNCTION_TABLE[$165]($grouper);
      __label__ = 27;
      break;
     case 27:
      
      $0 = $r;
      __label__ = 28;
      break;
     case 28:
      
      $retval = $0;
      var $retval29 = $retval;
      return $retval29;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __grouper_create($parent, $tgtkey) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parent_addr;
      var $tgtkey_addr;
      var $retval;
      var $0;
      var $igo;
      $parent_addr = $parent;
      $tgtkey_addr = $tgtkey;
      var $1 = __PyObject_GC_New(__grouper_type);
      
      $igo = $1;
      
      
      if ($igo == 0) {
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
      
      
      
      
      HEAP[$igo + 8] = $parent_addr;
      
      
      
      
      var $13 = HEAP[$parent_addr] + 1;
      
      HEAP[$parent_addr] = $13;
      
      
      
      HEAP[$igo + 12] = $tgtkey_addr;
      
      
      
      var $21 = HEAP[$tgtkey_addr] + 1;
      
      
      HEAP[$tgtkey_addr] = $21;
      
      
      _PyObject_GC_Track($igo);
      
      
      $0 = $igo;
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
  function __grouper_dealloc($igo) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $igo_addr;
      $igo_addr = $igo;
      
      
      _PyObject_GC_UnTrack($igo_addr);
      
      
      var $4 = HEAP[$igo_addr + 8];
      
      
      var $7 = HEAP[$4] - 1;
      var $8 = $4;
      HEAP[$8] = $7;
      
      
      
      if (HEAP[$4] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      
      var $18 = HEAP[HEAP[HEAP[$igo_addr + 8] + 4] + 24];
      
      
      var $21 = HEAP[$igo_addr + 8];
      FUNCTION_TABLE[$18]($21);
      __label__ = 2;
      break;
     case 2:
      
      
      var $24 = HEAP[$igo_addr + 12];
      
      
      var $27 = HEAP[$24] - 1;
      var $28 = $24;
      HEAP[$28] = $27;
      
      
      
      if (HEAP[$24] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[$igo_addr + 12] + 4] + 24];
      
      
      var $41 = HEAP[$igo_addr + 12];
      FUNCTION_TABLE[$38]($41);
      __label__ = 4;
      break;
     case 4:
      
      
      _PyObject_GC_Del($igo_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __grouper_traverse($igo, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $igo_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      $igo_addr = $igo;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$igo_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$igo_addr + 8];
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
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[$igo_addr + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$igo_addr + 12];
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
      __label__ = 7;
      break;
     case 6:
      $0 = 0;
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
  function __grouper_next($igo) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $igo_addr;
      var $retval;
      var $0;
      var $gbo;
      var $newvalue;
      var $newkey;
      var $r;
      var $rcmp;
      var $_py_tmp;
      $igo_addr = $igo;
      
      
      
      
      $gbo = HEAP[$igo_addr + 8];
      
      
      
      
      if (HEAP[$gbo + 24] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 1:
      
      
      var $11 = HEAP[$gbo + 8];
      var $12 = _PyIter_Next($11);
      $newvalue = $12;
      
      
      if ($newvalue == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 20;
      break;
     case 3:
      
      
      
      
      if (HEAP[$gbo + 12] == __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      $newkey = $newvalue;
      
      
      
      var $23 = HEAP[$newvalue] + 1;
      
      
      HEAP[$newvalue] = $23;
      __label__ = 9;
      break;
     case 5:
      
      
      var $28 = HEAP[$gbo + 12];
      
      var $30 = _PyObject_CallFunctionObjArgs($28, allocate([ $newvalue, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $newkey = $30;
      
      
      if ($newkey == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $36 = HEAP[$newvalue] - 1;
      
      
      HEAP[$newvalue] = $36;
      
      
      
      
      if (HEAP[$newvalue] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $47 = HEAP[HEAP[$newvalue + 4] + 24];
      
      FUNCTION_TABLE[$47]($newvalue);
      __label__ = 8;
      break;
     case 8:
      $0 = 0;
      __label__ = 20;
      break;
     case 9:
      
      
      
      
      if (HEAP[$gbo + 20] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str4, __str5, 254, ___PRETTY_FUNCTION___8669);
      throw "Reached an unreachable!";
     case 11:
      
      
      
      HEAP[$gbo + 20] = $newkey;
      
      
      
      HEAP[$gbo + 24] = $newvalue;
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      if (HEAP[$gbo + 20] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      ___assert_fail(__str6, __str5, 259, ___PRETTY_FUNCTION___8669);
      throw "Reached an unreachable!";
     case 14:
      
      
      var $65 = HEAP[$gbo + 20];
      
      
      var $68 = HEAP[$igo_addr + 12];
      var $69 = _PyObject_RichCompareBool($68, $65, 2);
      $rcmp = $69;
      
      
      if ($rcmp <= 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $0 = 0;
      __label__ = 20;
      break;
     case 16:
      
      
      
      $r = HEAP[$gbo + 24];
      
      
      HEAP[$gbo + 24] = 0;
      
      
      
      
      if (HEAP[$gbo + 20] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      $_py_tmp = HEAP[$gbo + 20];
      
      
      HEAP[$gbo + 20] = 0;
      
      
      
      var $89 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $89;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $100 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$100]($_py_tmp);
      __label__ = 19;
      break;
     case 19:
      
      $0 = $r;
      __label__ = 20;
      break;
     case 20:
      
      $retval = $0;
      var $retval20 = $retval;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _teedataobject_new($it) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $it_addr;
      var $retval;
      var $0;
      var $tdo;
      $it_addr = $it;
      var $1 = __PyObject_GC_New(_teedataobject_type);
      
      $tdo = $1;
      
      
      if ($tdo == 0) {
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
      
      
      HEAP[$tdo + 12] = 0;
      
      
      HEAP[$tdo + 16] = 0;
      
      
      
      var $12 = HEAP[$it_addr] + 1;
      
      
      HEAP[$it_addr] = $12;
      
      
      
      HEAP[$tdo + 8] = $it_addr;
      
      
      _PyObject_GC_Track($tdo);
      
      
      $0 = $tdo;
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
  function _teedataobject_jumplink($tdo) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tdo_addr;
      var $retval;
      var $0;
      $tdo_addr = $tdo;
      
      
      
      
      if (HEAP[$tdo_addr + 16] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$tdo_addr + 8];
      var $8 = _teedataobject_new($7);
      
      
      HEAP[$tdo_addr + 16] = $8;
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[$tdo_addr + 16] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      var $20 = HEAP[HEAP[$tdo_addr + 16]] + 1;
      var $21 = HEAP[$tdo_addr + 16];
      HEAP[$21] = $20;
      __label__ = 4;
      break;
     case 4:
      
      
      
      $0 = HEAP[$tdo_addr + 16];
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _teedataobject_getitem($tdo, $i) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tdo_addr;
      var $i_addr;
      var $retval;
      var $0;
      var $value;
      $tdo_addr = $tdo;
      $i_addr = $i;
      
      
      if ($i_addr > 56) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str8, __str5, 377, ___PRETTY_FUNCTION___8768);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      
      if (HEAP[$tdo_addr + 12] > $i_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      $value = HEAP[$tdo_addr + 20 + $i_addr * 4];
      __label__ = 9;
      break;
     case 4:
      
      
      
      
      
      if (HEAP[$tdo_addr + 12] != $i_addr) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str9, __str5, 382, ___PRETTY_FUNCTION___8768);
      throw "Reached an unreachable!";
     case 6:
      
      
      var $20 = HEAP[$tdo_addr + 8];
      var $21 = _PyIter_Next($20);
      $value = $21;
      
      
      if ($value == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 10;
      break;
     case 8:
      
      
      
      var $27 = HEAP[$tdo_addr + 12] + 1;
      
      
      HEAP[$tdo_addr + 12] = $27;
      
      
      
      
      
      HEAP[$tdo_addr + 20 + $i_addr * 4] = $value;
      __label__ = 9;
      break;
     case 9:
      
      
      
      var $38 = HEAP[$value] + 1;
      
      
      HEAP[$value] = $38;
      
      $0 = $value;
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
  function _teedataobject_traverse($tdo, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tdo_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $i;
      var $vret;
      var $vret5;
      var $vret11;
      $tdo_addr = $tdo;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$tdo_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$tdo_addr + 8];
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
      __label__ = 13;
      break;
     case 3:
      $i = 0;
      __label__ = 8;
      break;
     case 4:
      
      
      
      
      
      
      if (HEAP[$tdo_addr + 20 + $i * 4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      
      var $24 = HEAP[$tdo_addr + 20 + $i * 4];
      var $25 = $visit_addr;
      
      var $27 = FUNCTION_TABLE[$25]($24, $arg_addr);
      $vret5 = $27;
      
      
      if ($vret5 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      $0 = $vret5;
      __label__ = 13;
      break;
     case 7:
      
      var $32 = $i + 1;
      $i = $32;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      if (HEAP[$tdo_addr + 12] > $i) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[$tdo_addr + 16] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $44 = HEAP[$tdo_addr + 16];
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
      __label__ = 13;
      break;
     case 12:
      $0 = 0;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval15 = $retval;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _teedataobject_clear($tdo) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tdo_addr;
      var $retval;
      var $0;
      var $i;
      var $_py_tmp;
      var $_py_tmp5;
      var $_py_tmp11;
      $tdo_addr = $tdo;
      
      
      
      
      if (HEAP[$tdo_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      $_py_tmp = HEAP[$tdo_addr + 8];
      
      
      HEAP[$tdo_addr + 8] = 0;
      
      
      
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
      $i = 0;
      
      
      
      
      
      if (HEAP[$tdo_addr + 12] > $i) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      
      
      
      
      if (HEAP[$tdo_addr + 20 + $i * 4] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      
      
      $_py_tmp5 = HEAP[$tdo_addr + 20 + $i * 4];
      
      
      
      
      HEAP[$tdo_addr + 20 + $i * 4] = 0;
      
      
      
      var $49 = HEAP[$_py_tmp5] - 1;
      
      
      HEAP[$_py_tmp5] = $49;
      
      
      
      
      if (HEAP[$_py_tmp5] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $60 = HEAP[HEAP[$_py_tmp5 + 4] + 24];
      
      FUNCTION_TABLE[$60]($_py_tmp5);
      __label__ = 7;
      break;
     case 7:
      
      var $63 = $i + 1;
      $i = $63;
      
      
      
      
      
      if (HEAP[$tdo_addr + 12] > $i) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[$tdo_addr + 16] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      $_py_tmp11 = HEAP[$tdo_addr + 16];
      
      
      HEAP[$tdo_addr + 16] = 0;
      
      
      
      var $81 = HEAP[$_py_tmp11] - 1;
      
      
      HEAP[$_py_tmp11] = $81;
      
      
      
      
      if (HEAP[$_py_tmp11] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $92 = HEAP[HEAP[$_py_tmp11 + 4] + 24];
      
      FUNCTION_TABLE[$92]($_py_tmp11);
      __label__ = 11;
      break;
     case 11:
      $0 = 0;
      
      $retval = $0;
      var $retval14 = $retval;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _teedataobject_dealloc($tdo) {
    
    var $tdo_addr;
    $tdo_addr = $tdo;
    
    
    _PyObject_GC_UnTrack($tdo_addr);
    
    var $3 = _teedataobject_clear($tdo_addr);
    
    
    _PyObject_GC_Del($tdo_addr);
    return;
  }
  function _tee_next($to) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $to_addr;
      var $retval;
      var $0;
      var $value;
      var $link;
      $to_addr = $to;
      
      
      
      
      if (HEAP[$to_addr + 12] > 56) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$to_addr + 8];
      var $8 = _teedataobject_jumplink($7);
      $link = $8;
      
      
      
      var $12 = HEAP[$to_addr + 8];
      
      
      var $15 = HEAP[$12] - 1;
      var $16 = $12;
      HEAP[$16] = $15;
      
      
      
      if (HEAP[$12] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[$to_addr + 8] + 4] + 24];
      
      
      
      var $31 = HEAP[$to_addr + 8];
      FUNCTION_TABLE[$27]($31);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      HEAP[$to_addr + 8] = $link;
      
      
      HEAP[$to_addr + 12] = 0;
      __label__ = 4;
      break;
     case 4:
      
      
      var $40 = HEAP[$to_addr + 12];
      
      
      var $43 = HEAP[$to_addr + 8];
      var $44 = _teedataobject_getitem($43, $40);
      $value = $44;
      
      if ($44 == 0) {
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
      
      
      
      var $49 = HEAP[$to_addr + 12] + 1;
      
      
      HEAP[$to_addr + 12] = $49;
      
      $0 = $value;
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
  function _tee_traverse($to, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $to_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      $to_addr = $to;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$to_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[$to_addr + 8];
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
  function _tee_copy($to) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $to_addr;
      var $retval;
      var $0;
      var $newto;
      $to_addr = $to;
      var $1 = __PyObject_GC_New(_tee_type);
      
      $newto = $1;
      
      
      if ($newto == 0) {
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
      
      
      
      
      
      
      var $11 = HEAP[HEAP[$to_addr + 8]] + 1;
      var $12 = HEAP[$to_addr + 8];
      HEAP[$12] = $11;
      
      
      var $15 = HEAP[$to_addr + 8];
      
      
      HEAP[$newto + 8] = $15;
      
      
      var $20 = HEAP[$to_addr + 12];
      
      
      HEAP[$newto + 12] = $20;
      
      
      HEAP[$newto + 16] = 0;
      
      
      _PyObject_GC_Track($newto);
      
      
      $0 = $newto;
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
  function _tee_fromiterable($iterable) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $iterable_addr;
      var $retval;
      var $0;
      var $to;
      var $it;
      $iterable_addr = $iterable;
      $it = 0;
      
      var $2 = _PyObject_GetIter($iterable_addr);
      $it = $2;
      
      
      if ($it == 0) {
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
      
      
      
      
      if (HEAP[$it + 4] == _tee_type) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $11 = HEAP[$it + 4];
      var $12 = _PyType_IsSubtype($11, _tee_type);
      
      if ($12 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $16 = _tee_copy($it);
      
      $to = $16;
      __label__ = 9;
      break;
     case 5:
      var $18 = __PyObject_GC_New(_tee_type);
      
      $to = $18;
      
      
      if ($to == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      var $23 = _teedataobject_new($it);
      
      
      
      HEAP[$to + 8] = $23;
      
      
      
      
      var $31 = $to;
      if (HEAP[$to + 8] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      _PyObject_GC_Del($31);
      $to = 0;
      __label__ = 9;
      break;
     case 8:
      
      HEAP[$31 + 12] = 0;
      
      
      HEAP[$to + 16] = 0;
      
      
      _PyObject_GC_Track($to);
      __label__ = 9;
      break;
     case 9:
      
      
      if ($it != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      var $43 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $43;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $54 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$54]($it);
      __label__ = 12;
      break;
     case 12:
      
      
      $0 = $to;
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
  function _tee_new($type, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $iterable = __stackBase__;
      $type_addr = $type;
      $args_addr = $args;
      $kw_addr = $kw;
      
      var $2 = _PyArg_UnpackTuple($args_addr, __str11, 1, 1, allocate([ $iterable, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$iterable];
      var $5 = _tee_fromiterable($4);
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
  function _tee_clear($to) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $to_addr;
      var $retval;
      var $0;
      var $_py_tmp;
      $to_addr = $to;
      
      
      
      
      if (HEAP[$to_addr + 16] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      _PyObject_ClearWeakRefs($to_addr);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      if (HEAP[$to_addr + 8] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      
      $_py_tmp = HEAP[$to_addr + 8];
      
      
      HEAP[$to_addr + 8] = 0;
      
      
      
      var $20 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $20;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $31 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$31]($_py_tmp);
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _tee_dealloc($to) {
    
    var $to_addr;
    $to_addr = $to;
    
    
    _PyObject_GC_UnTrack($to_addr);
    
    var $3 = _tee_clear($to_addr);
    
    
    _PyObject_GC_Del($to_addr);
    return;
  }
  function _tee($self, $args) {
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
      var $i;
      var $n = __stackBase__;
      var $it;
      var $iterable = __stackBase__ + 4;
      var $copyable;
      var $result;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$n] = 2;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str14, allocate([ $iterable, 0, 0, 0, $n, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$n] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($6, __str15);
      $0 = 0;
      __label__ = 28;
      break;
     case 4:
      var $7 = HEAP[$n];
      var $8 = _PyTuple_New($7);
      $result = $8;
      
      
      if ($result == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 28;
      break;
     case 6:
      
      
      if (HEAP[$n] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      $0 = $result;
      __label__ = 28;
      break;
     case 8:
      var $14 = HEAP[$iterable];
      var $15 = _PyObject_GetIter($14);
      $it = $15;
      
      
      if ($it == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      var $21 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $21;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $32 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$32]($result);
      __label__ = 11;
      break;
     case 11:
      $0 = 0;
      __label__ = 28;
      break;
     case 12:
      
      var $35 = _PyObject_HasAttrString($it, __str12);
      
      var $37 = $it;
      if ($35 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 13:
      var $38 = _tee_fromiterable($37);
      $copyable = $38;
      
      
      
      var $42 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $42;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $53 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$53]($it);
      __label__ = 15;
      break;
     case 15:
      
      
      if ($copyable == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 16:
      
      
      
      var $60 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $60;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $71 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$71]($result);
      __label__ = 18;
      break;
     case 18:
      $0 = 0;
      __label__ = 28;
      break;
     case 19:
      $copyable = $37;
      __label__ = 20;
      break;
     case 20:
      
      
      
      
      
      HEAP[$result + 12] = $copyable;
      $i = 1;
      __label__ = 26;
      break;
     case 21:
      
      var $79 = _PyObject_CallMethod($copyable, __str12, 0, allocate(1, "i32", ALLOC_STACK));
      $copyable = $79;
      
      
      var $82 = $result;
      if ($copyable == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 22:
      
      
      var $85 = HEAP[$82] - 1;
      
      
      HEAP[$result] = $85;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $96 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$96]($result);
      __label__ = 24;
      break;
     case 24:
      $0 = 0;
      __label__ = 28;
      break;
     case 25:
      
      
      
      
      
      HEAP[$82 + 12 + $i * 4] = $copyable;
      
      var $104 = $i + 1;
      $i = $104;
      __label__ = 26;
      break;
     case 26:
      
      
      
      if ($i < HEAP[$n]) {
        __label__ = 21;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      $0 = $result;
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
  function _cycle_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $it;
      var $iterable = __stackBase__;
      var $saved;
      var $lz;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      if ($type_addr == _cycle_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $4 = __PyArg_NoKeywords(__str16, $kwds_addr);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 18;
      break;
     case 3:
      
      var $7 = _PyArg_UnpackTuple($args_addr, __str17, 1, 1, allocate([ $iterable, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 18;
      break;
     case 5:
      var $9 = HEAP[$iterable];
      var $10 = _PyObject_GetIter($9);
      $it = $10;
      
      
      if ($it == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 18;
      break;
     case 7:
      var $13 = _PyList_New(0);
      $saved = $13;
      
      
      if ($saved == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $19 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $19;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $30 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$30]($it);
      __label__ = 10;
      break;
     case 10:
      $0 = 0;
      __label__ = 18;
      break;
     case 11:
      
      
      var $34 = HEAP[$type_addr + 152];
      
      var $36 = FUNCTION_TABLE[$34]($type_addr, 0);
      
      $lz = $36;
      
      
      if ($lz == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 12:
      
      
      
      var $43 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $43;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $54 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$54]($it);
      __label__ = 14;
      break;
     case 14:
      
      
      
      var $59 = HEAP[$saved] - 1;
      
      
      HEAP[$saved] = $59;
      
      
      
      
      if (HEAP[$saved] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $70 = HEAP[HEAP[$saved + 4] + 24];
      
      FUNCTION_TABLE[$70]($saved);
      __label__ = 16;
      break;
     case 16:
      $0 = 0;
      __label__ = 18;
      break;
     case 17:
      
      
      
      HEAP[$lz + 8] = $it;
      
      
      
      HEAP[$lz + 12] = $saved;
      
      
      HEAP[$lz + 16] = 0;
      
      
      $0 = $lz;
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
  function _cycle_dealloc($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      $lz_addr = $lz;
      
      
      _PyObject_GC_UnTrack($lz_addr);
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$lz_addr + 12];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$lz_addr + 12] + 4] + 24];
      
      
      var $25 = HEAP[$lz_addr + 12];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[$lz_addr + 8];
      
      
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
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$lz_addr + 8] + 4] + 24];
      
      
      var $49 = HEAP[$lz_addr + 8];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[$lz_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$55]($lz_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cycle_traverse($lz, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      $lz_addr = $lz;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$lz_addr + 8];
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
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$lz_addr + 12];
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
      __label__ = 7;
      break;
     case 6:
      $0 = 0;
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
  function _cycle_next($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $retval;
      var $0;
      var $item;
      var $it;
      var $tmp;
      $lz_addr = $lz;
      __label__ = 1;
      break;
     case 1:
      
      
      var $3 = HEAP[$lz_addr + 8];
      var $4 = _PyIter_Next($3);
      $item = $4;
      
      if ($4 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$lz_addr + 16] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      var $12 = HEAP[$lz_addr + 12];
      
      var $14 = _PyList_Append($12, $item);
      
      if ($14 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $19 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $19;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $30 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$30]($item);
      __label__ = 6;
      break;
     case 6:
      $0 = 0;
      __label__ = 18;
      break;
     case 7:
      
      $0 = $item;
      __label__ = 18;
      break;
     case 8:
      var $33 = _PyErr_Occurred();
      
      if ($33 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      var $35 = HEAP[_PyExc_StopIteration];
      var $36 = _PyErr_ExceptionMatches($35);
      
      if ($36 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      _PyErr_Clear();
      __label__ = 12;
      break;
     case 11:
      $0 = 0;
      __label__ = 18;
      break;
     case 12:
      
      
      var $40 = HEAP[$lz_addr + 12];
      var $41 = _PyList_Size($40);
      
      if ($41 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = 0;
      __label__ = 18;
      break;
     case 14:
      
      
      var $45 = HEAP[$lz_addr + 12];
      var $46 = _PyObject_GetIter($45);
      $it = $46;
      
      
      if ($it == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $0 = 0;
      __label__ = 18;
      break;
     case 16:
      
      
      
      $tmp = HEAP[$lz_addr + 8];
      
      
      
      HEAP[$lz_addr + 8] = $it;
      
      
      HEAP[$lz_addr + 16] = 1;
      
      
      
      var $60 = HEAP[$tmp] - 1;
      
      
      HEAP[$tmp] = $60;
      
      
      
      
      if (HEAP[$tmp] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 17:
      
      
      
      
      var $71 = HEAP[HEAP[$tmp + 4] + 24];
      
      FUNCTION_TABLE[$71]($tmp);
      __label__ = 1;
      break;
     case 18:
      
      $retval = $0;
      var $retval19 = $retval;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dropwhile_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $func = __stackBase__;
      var $seq = __stackBase__ + 4;
      var $it;
      var $lz;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      if ($type_addr == _dropwhile_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $4 = __PyArg_NoKeywords(__str19, $kwds_addr);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 12;
      break;
     case 3:
      
      var $7 = _PyArg_UnpackTuple($args_addr, __str20, 2, 2, allocate([ $func, 0, 0, 0, $seq, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
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
      var $9 = HEAP[$seq];
      var $10 = _PyObject_GetIter($9);
      $it = $10;
      
      
      if ($it == 0) {
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
      
      
      var $15 = HEAP[$type_addr + 152];
      
      var $17 = FUNCTION_TABLE[$15]($type_addr, 0);
      
      $lz = $17;
      
      
      if ($lz == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $24 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $24;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $35 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$35]($it);
      __label__ = 10;
      break;
     case 10:
      $0 = 0;
      __label__ = 12;
      break;
     case 11:
      
      
      
      var $40 = HEAP[HEAP[$func]] + 1;
      var $41 = HEAP[$func];
      HEAP[$41] = $40;
      var $42 = HEAP[$func];
      
      
      HEAP[$lz + 8] = $42;
      
      
      
      HEAP[$lz + 12] = $it;
      
      
      HEAP[$lz + 16] = 0;
      
      
      $0 = $lz;
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
  function _dropwhile_dealloc($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      $lz_addr = $lz;
      
      
      _PyObject_GC_UnTrack($lz_addr);
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$lz_addr + 8];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$lz_addr + 8] + 4] + 24];
      
      
      var $25 = HEAP[$lz_addr + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[$lz_addr + 12];
      
      
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
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$lz_addr + 12] + 4] + 24];
      
      
      var $49 = HEAP[$lz_addr + 12];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[$lz_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$55]($lz_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dropwhile_traverse($lz, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      $lz_addr = $lz;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$lz_addr + 12];
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
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$lz_addr + 8];
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
      __label__ = 7;
      break;
     case 6:
      $0 = 0;
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
  function _dropwhile_next($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $retval;
      var $0;
      var $item;
      var $good;
      var $it;
      var $ok;
      var $iternext;
      $lz_addr = $lz;
      
      
      
      $it = HEAP[$lz_addr + 12];
      
      
      
      
      
      $iternext = HEAP[HEAP[$it + 4] + 112];
      __label__ = 1;
      break;
     case 1:
      var $9 = $iternext;
      
      var $11 = FUNCTION_TABLE[$9]($it);
      $item = $11;
      
      if ($11 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 15;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 16] == 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      $0 = $item;
      __label__ = 15;
      break;
     case 5:
      
      
      var $20 = HEAP[$lz_addr + 8];
      
      var $22 = _PyObject_CallFunctionObjArgs($20, allocate([ $item, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $good = $22;
      
      
      if ($good == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $28 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $28;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $39 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$39]($item);
      __label__ = 8;
      break;
     case 8:
      $0 = 0;
      __label__ = 15;
      break;
     case 9:
      
      var $42 = _PyObject_IsTrue($good);
      $ok = $42;
      
      
      
      var $46 = HEAP[$good] - 1;
      
      
      HEAP[$good] = $46;
      
      
      
      
      if (HEAP[$good] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $57 = HEAP[HEAP[$good + 4] + 24];
      
      FUNCTION_TABLE[$57]($good);
      __label__ = 11;
      break;
     case 11:
      
      
      if ($ok == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      HEAP[$lz_addr + 16] = 1;
      
      $0 = $item;
      __label__ = 15;
      break;
     case 13:
      
      
      
      var $67 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $67;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 14:
      
      
      
      
      var $78 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$78]($item);
      __label__ = 1;
      break;
     case 15:
      
      $retval = $0;
      var $retval16 = $retval;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _takewhile_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $func = __stackBase__;
      var $seq = __stackBase__ + 4;
      var $it;
      var $lz;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      if ($type_addr == _takewhile_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $4 = __PyArg_NoKeywords(__str22, $kwds_addr);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 12;
      break;
     case 3:
      
      var $7 = _PyArg_UnpackTuple($args_addr, __str23, 2, 2, allocate([ $func, 0, 0, 0, $seq, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
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
      var $9 = HEAP[$seq];
      var $10 = _PyObject_GetIter($9);
      $it = $10;
      
      
      if ($it == 0) {
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
      
      
      var $15 = HEAP[$type_addr + 152];
      
      var $17 = FUNCTION_TABLE[$15]($type_addr, 0);
      
      $lz = $17;
      
      
      if ($lz == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $24 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $24;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $35 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$35]($it);
      __label__ = 10;
      break;
     case 10:
      $0 = 0;
      __label__ = 12;
      break;
     case 11:
      
      
      
      var $40 = HEAP[HEAP[$func]] + 1;
      var $41 = HEAP[$func];
      HEAP[$41] = $40;
      var $42 = HEAP[$func];
      
      
      HEAP[$lz + 8] = $42;
      
      
      
      HEAP[$lz + 12] = $it;
      
      
      HEAP[$lz + 16] = 0;
      
      
      $0 = $lz;
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
  function _takewhile_dealloc($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      $lz_addr = $lz;
      
      
      _PyObject_GC_UnTrack($lz_addr);
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$lz_addr + 8];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$lz_addr + 8] + 4] + 24];
      
      
      var $25 = HEAP[$lz_addr + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[$lz_addr + 12];
      
      
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
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$lz_addr + 12] + 4] + 24];
      
      
      var $49 = HEAP[$lz_addr + 12];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[$lz_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$55]($lz_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _takewhile_traverse($lz, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      $lz_addr = $lz;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$lz_addr + 12];
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
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$lz_addr + 8];
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
      __label__ = 7;
      break;
     case 6:
      $0 = 0;
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
  function _takewhile_next($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $retval;
      var $0;
      var $item;
      var $good;
      var $it;
      var $ok;
      $lz_addr = $lz;
      
      
      
      $it = HEAP[$lz_addr + 12];
      
      
      
      
      if (HEAP[$lz_addr + 16] == 1) {
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
      
      
      
      
      var $12 = HEAP[HEAP[$it + 4] + 112];
      
      var $14 = FUNCTION_TABLE[$12]($it);
      $item = $14;
      
      
      if ($item == 0) {
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
      
      
      var $19 = HEAP[$lz_addr + 8];
      
      var $21 = _PyObject_CallFunctionObjArgs($19, allocate([ $item, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $good = $21;
      
      
      if ($good == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $27 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $27;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $38 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$38]($item);
      __label__ = 7;
      break;
     case 7:
      $0 = 0;
      __label__ = 15;
      break;
     case 8:
      
      var $41 = _PyObject_IsTrue($good);
      $ok = $41;
      
      
      
      var $45 = HEAP[$good] - 1;
      
      
      HEAP[$good] = $45;
      
      
      
      
      if (HEAP[$good] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $56 = HEAP[HEAP[$good + 4] + 24];
      
      FUNCTION_TABLE[$56]($good);
      __label__ = 10;
      break;
     case 10:
      
      
      var $60 = $item;
      if ($ok != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = $60;
      __label__ = 15;
      break;
     case 12:
      
      
      var $63 = HEAP[$60] - 1;
      
      
      HEAP[$item] = $63;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $74 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$74]($item);
      __label__ = 14;
      break;
     case 14:
      
      
      HEAP[$lz_addr + 16] = 1;
      $0 = 0;
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
  function _islice_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
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
      var $seq = __stackBase__;
      var $start;
      var $stop;
      var $step;
      var $it;
      var $a1 = __stackBase__ + 4;
      var $a2 = __stackBase__ + 8;
      var $a3 = __stackBase__ + 12;
      var $numargs;
      var $lz;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      $start = 0;
      $stop = -1;
      $step = 1;
      HEAP[$a1] = 0;
      HEAP[$a2] = 0;
      HEAP[$a3] = 0;
      
      
      if ($type_addr == _islice_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $4 = __PyArg_NoKeywords(__str25, $kwds_addr);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 41;
      break;
     case 3:
      
      var $7 = _PyArg_UnpackTuple($args_addr, __str26, 2, 4, allocate([ $seq, 0, 0, 0, $a1, 0, 0, 0, $a2, 0, 0, 0, $a3, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 41;
      break;
     case 5:
      
      var $10 = _PyTuple_Size($args_addr);
      $numargs = $10;
      
      
      
      var $14 = HEAP[$a1] != __Py_NoneStruct;
      if ($numargs == 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 6:
      if ($14) {
        __label__ = 7;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 7:
      var $15 = HEAP[$a1];
      var $16 = _PyInt_AsSsize_t($15);
      $stop = $16;
      
      var $18 = $stop == -1;
      if ($18) {
        __label__ = 8;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 8:
      var $19 = _PyErr_Occurred();
      
      if ($19 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      _PyErr_Clear();
      __label__ = 10;
      break;
     case 10:
      var $21 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($21, __str27);
      $0 = 0;
      __label__ = 41;
      break;
     case 11:
      if ($14) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $22 = HEAP[$a1];
      var $23 = _PyInt_AsSsize_t($22);
      $start = $23;
      __lastLabel__ = 12;
      __label__ = 14;
      break;
     case 13:
      var $_pr = $start;
      __lastLabel__ = 13;
      __label__ = 14;
      break;
     case 14:
      var $24 = __lastLabel__ == 13 ? $_pr : $23;
      var $25 = $24 == -1;
      if ($25) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      var $26 = _PyErr_Occurred();
      
      if ($26 != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      _PyErr_Clear();
      __label__ = 17;
      break;
     case 17:
      
      
      if (HEAP[$a2] != __Py_NoneStruct) {
        __label__ = 18;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 18:
      var $30 = HEAP[$a2];
      var $31 = _PyInt_AsSsize_t($30);
      $stop = $31;
      
      var $33 = $stop == -1;
      if ($33) {
        __label__ = 19;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 19:
      var $34 = _PyErr_Occurred();
      
      if ($34 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      _PyErr_Clear();
      __label__ = 21;
      break;
     case 21:
      var $36 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($36, __str27);
      $0 = 0;
      __label__ = 41;
      break;
     case 22:
      
      
      if ($start < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      var $40 = $stop < -1;
      if ($40) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      var $41 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($41, __str28);
      $0 = 0;
      __label__ = 41;
      break;
     case 25:
      
      
      if (HEAP[$a3] != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 26:
      
      
      if (HEAP[$a3] != __Py_NoneStruct) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $46 = HEAP[$a3];
      var $47 = _PyInt_AsSsize_t($46);
      $step = $47;
      __lastLabel__ = 27;
      __label__ = 29;
      break;
     case 28:
      var $_pr1 = $step;
      __lastLabel__ = 28;
      __label__ = 29;
      break;
     case 29:
      var $48 = __lastLabel__ == 28 ? $_pr1 : $47;
      var $49 = $48 == -1;
      if ($49) {
        __label__ = 30;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      var $50 = _PyErr_Occurred();
      
      if ($50 != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      _PyErr_Clear();
      __label__ = 32;
      break;
     case 32:
      
      
      if ($step <= 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      var $54 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($54, __str29);
      $0 = 0;
      __label__ = 41;
      break;
     case 34:
      var $55 = HEAP[$seq];
      var $56 = _PyObject_GetIter($55);
      $it = $56;
      
      
      if ($it == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      $0 = 0;
      __label__ = 41;
      break;
     case 36:
      
      
      var $61 = HEAP[$type_addr + 152];
      
      var $63 = FUNCTION_TABLE[$61]($type_addr, 0);
      
      $lz = $63;
      
      
      if ($lz == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 37:
      
      
      
      var $70 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $70;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      var $81 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$81]($it);
      __label__ = 39;
      break;
     case 39:
      $0 = 0;
      __label__ = 41;
      break;
     case 40:
      
      
      
      HEAP[$lz + 8] = $it;
      
      
      
      HEAP[$lz + 12] = $start;
      
      
      
      HEAP[$lz + 16] = $stop;
      
      
      
      HEAP[$lz + 20] = $step;
      
      
      HEAP[$lz + 24] = 0;
      
      
      $0 = $lz;
      __label__ = 41;
      break;
     case 41:
      
      $retval = $0;
      var $retval40 = $retval;
      STACKTOP = __stackBase__;
      return $retval40;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _islice_dealloc($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      $lz_addr = $lz;
      
      
      _PyObject_GC_UnTrack($lz_addr);
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$lz_addr + 8];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$lz_addr + 8] + 4] + 24];
      
      
      var $25 = HEAP[$lz_addr + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      var $31 = HEAP[HEAP[$lz_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$31]($lz_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _islice_traverse($lz, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      $lz_addr = $lz;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$lz_addr + 8];
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
  function _islice_next($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $retval;
      var $0;
      var $item;
      var $it;
      var $stop;
      var $oldnext;
      var $iternext;
      $lz_addr = $lz;
      
      
      
      $it = HEAP[$lz_addr + 8];
      
      
      
      $stop = HEAP[$lz_addr + 16];
      
      
      
      
      
      $iternext = HEAP[HEAP[$it + 4] + 112];
      __label__ = 6;
      break;
     case 1:
      var $12 = $iternext;
      
      var $14 = FUNCTION_TABLE[$12]($it);
      $item = $14;
      
      
      if ($item == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 17;
      break;
     case 3:
      
      
      
      var $20 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $20;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $31 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$31]($item);
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $36 = HEAP[$lz_addr + 24] + 1;
      
      
      HEAP[$lz_addr + 24] = $36;
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      
      
      if (HEAP[$lz_addr + 24] < HEAP[$lz_addr + 12]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      var $47 = $stop != -1;
      if ($47) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[$lz_addr + 24] >= $stop) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = 0;
      __label__ = 17;
      break;
     case 10:
      var $53 = $iternext;
      
      var $55 = FUNCTION_TABLE[$53]($it);
      $item = $55;
      
      if ($55 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = 0;
      __label__ = 17;
      break;
     case 12:
      
      
      
      var $60 = HEAP[$lz_addr + 24] + 1;
      
      
      HEAP[$lz_addr + 24] = $60;
      
      
      
      $oldnext = HEAP[$lz_addr + 12];
      
      
      
      
      
      
      var $72 = HEAP[$lz_addr + 20] + HEAP[$lz_addr + 12];
      
      
      HEAP[$lz_addr + 12] = $72;
      
      
      
      
      
      if (HEAP[$lz_addr + 12] < $oldnext) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      var $81 = $stop == -1;
      if ($81) {
        __label__ = 16;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      
      if (HEAP[$lz_addr + 12] > $stop) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      HEAP[$lz_addr + 12] = $stop;
      __label__ = 16;
      break;
     case 16:
      
      $0 = $item;
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
  function _starmap_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $func = __stackBase__;
      var $seq = __stackBase__ + 4;
      var $it;
      var $lz;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      if ($type_addr == _starmap_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $4 = __PyArg_NoKeywords(__str31, $kwds_addr);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 12;
      break;
     case 3:
      
      var $7 = _PyArg_UnpackTuple($args_addr, __str32, 2, 2, allocate([ $func, 0, 0, 0, $seq, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
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
      var $9 = HEAP[$seq];
      var $10 = _PyObject_GetIter($9);
      $it = $10;
      
      
      if ($it == 0) {
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
      
      
      var $15 = HEAP[$type_addr + 152];
      
      var $17 = FUNCTION_TABLE[$15]($type_addr, 0);
      
      $lz = $17;
      
      
      if ($lz == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $24 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $24;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $35 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$35]($it);
      __label__ = 10;
      break;
     case 10:
      $0 = 0;
      __label__ = 12;
      break;
     case 11:
      
      
      
      var $40 = HEAP[HEAP[$func]] + 1;
      var $41 = HEAP[$func];
      HEAP[$41] = $40;
      var $42 = HEAP[$func];
      
      
      HEAP[$lz + 8] = $42;
      
      
      
      HEAP[$lz + 12] = $it;
      
      
      $0 = $lz;
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
  function _starmap_dealloc($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      $lz_addr = $lz;
      
      
      _PyObject_GC_UnTrack($lz_addr);
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$lz_addr + 8];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$lz_addr + 8] + 4] + 24];
      
      
      var $25 = HEAP[$lz_addr + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[$lz_addr + 12];
      
      
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
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$lz_addr + 12] + 4] + 24];
      
      
      var $49 = HEAP[$lz_addr + 12];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[$lz_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$55]($lz_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _starmap_traverse($lz, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      $lz_addr = $lz;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$lz_addr + 12];
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
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$lz_addr + 8];
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
      __label__ = 7;
      break;
     case 6:
      $0 = 0;
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
  function _starmap_next($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $retval;
      var $0;
      var $args;
      var $result;
      var $it;
      var $newargs;
      $lz_addr = $lz;
      
      
      
      $it = HEAP[$lz_addr + 12];
      
      
      
      
      var $8 = HEAP[HEAP[$it + 4] + 112];
      
      var $10 = FUNCTION_TABLE[$8]($it);
      $args = $10;
      
      
      if ($args == 0) {
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
      
      
      
      
      if (HEAP[$args + 4] != _PyTuple_Type) {
        __label__ = 3;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 3:
      
      var $18 = _PySequence_Tuple($args);
      $newargs = $18;
      
      
      
      var $22 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $22;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $33 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$33]($args);
      __label__ = 5;
      break;
     case 5:
      
      
      if ($newargs == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 11;
      break;
     case 7:
      
      $args = $newargs;
      __label__ = 8;
      break;
     case 8:
      
      
      var $40 = HEAP[$lz_addr + 8];
      
      var $42 = _PyObject_Call($40, $args, 0);
      $result = $42;
      
      
      
      var $46 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $46;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $57 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$57]($args);
      __label__ = 10;
      break;
     case 10:
      
      $0 = $result;
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
  function _imap_new($type, $args, $kwds) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $it;
      var $iters;
      var $func;
      var $lz;
      var $numargs;
      var $i;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      if ($type_addr == _imap_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $4 = __PyArg_NoKeywords(__str34, $kwds_addr);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 19;
      break;
     case 3:
      
      var $7 = _PyTuple_Size($args_addr);
      $numargs = $7;
      
      if ($7 <= 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $9 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($9, __str35);
      $0 = 0;
      __label__ = 19;
      break;
     case 5:
      
      
      var $12 = _PyTuple_New($numargs - 1);
      $iters = $12;
      
      
      if ($iters == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 19;
      break;
     case 7:
      $i = 1;
      __label__ = 13;
      break;
     case 8:
      
      
      
      
      
      var $20 = HEAP[$args_addr + 12 + $i * 4];
      var $21 = _PyObject_GetIter($20);
      $it = $21;
      
      
      var $24 = $iters;
      if ($it == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      var $27 = HEAP[$24] - 1;
      
      
      HEAP[$iters] = $27;
      
      
      
      
      if (HEAP[$iters] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $38 = HEAP[HEAP[$iters + 4] + 24];
      
      FUNCTION_TABLE[$38]($iters);
      __label__ = 11;
      break;
     case 11:
      $0 = 0;
      __label__ = 19;
      break;
     case 12:
      
      
      
      
      
      
      HEAP[$24 + 12 + ($i - 1) * 4] = $it;
      
      var $47 = $i + 1;
      $i = $47;
      __label__ = 13;
      break;
     case 13:
      
      
      
      if ($i < $numargs) {
        __label__ = 8;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      var $53 = HEAP[$type_addr + 152];
      
      var $55 = FUNCTION_TABLE[$53]($type_addr, 0);
      
      $lz = $55;
      
      
      if ($lz == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      
      
      
      var $62 = HEAP[$iters] - 1;
      
      
      HEAP[$iters] = $62;
      
      
      
      
      if (HEAP[$iters] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $73 = HEAP[HEAP[$iters + 4] + 24];
      
      FUNCTION_TABLE[$73]($iters);
      __label__ = 17;
      break;
     case 17:
      $0 = 0;
      __label__ = 19;
      break;
     case 18:
      
      
      
      HEAP[$lz + 8] = $iters;
      
      
      
      
      
      $func = HEAP[$args_addr + 12];
      
      
      
      var $86 = HEAP[$func] + 1;
      
      
      HEAP[$func] = $86;
      
      
      
      HEAP[$lz + 12] = $func;
      
      
      $0 = $lz;
      __label__ = 19;
      break;
     case 19:
      
      $retval = $0;
      var $retval19 = $retval;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imap_dealloc($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      $lz_addr = $lz;
      
      
      _PyObject_GC_UnTrack($lz_addr);
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$lz_addr + 8];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$lz_addr + 8] + 4] + 24];
      
      
      var $25 = HEAP[$lz_addr + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[$lz_addr + 12];
      
      
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
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$lz_addr + 12] + 4] + 24];
      
      
      var $49 = HEAP[$lz_addr + 12];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[$lz_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$55]($lz_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imap_traverse($lz, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      $lz_addr = $lz;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$lz_addr + 8];
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
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$lz_addr + 12];
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
      __label__ = 7;
      break;
     case 6:
      $0 = 0;
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
  function _imap_next($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $retval;
      var $0;
      var $val;
      var $argtuple;
      var $result;
      var $numargs;
      var $i;
      $lz_addr = $lz;
      
      
      var $3 = HEAP[$lz_addr + 8];
      var $4 = _PyTuple_Size($3);
      $numargs = $4;
      
      var $6 = _PyTuple_New($numargs);
      $argtuple = $6;
      
      
      if ($argtuple == 0) {
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
      $i = 0;
      __label__ = 8;
      break;
     case 3:
      
      
      
      
      
      
      var $15 = HEAP[HEAP[$45 + 8] + 12 + $i * 4];
      var $16 = _PyIter_Next($15);
      $val = $16;
      
      
      var $19 = $argtuple;
      if ($val == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      var $22 = HEAP[$19] - 1;
      
      
      HEAP[$argtuple] = $22;
      
      
      
      
      if (HEAP[$argtuple] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $33 = HEAP[HEAP[$argtuple + 4] + 24];
      
      FUNCTION_TABLE[$33]($argtuple);
      __label__ = 6;
      break;
     case 6:
      $0 = 0;
      __label__ = 14;
      break;
     case 7:
      
      
      
      
      
      HEAP[$19 + 12 + $i * 4] = $val;
      
      var $41 = $i + 1;
      $i = $41;
      __label__ = 8;
      break;
     case 8:
      
      
      
      var $45 = $lz_addr;
      if ($i < $numargs) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      if (HEAP[$45 + 12] == __Py_NoneStruct) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      $0 = $argtuple;
      __label__ = 14;
      break;
     case 11:
      
      
      var $52 = HEAP[$lz_addr + 12];
      
      var $54 = _PyObject_Call($52, $argtuple, 0);
      $result = $54;
      
      
      
      var $58 = HEAP[$argtuple] - 1;
      
      
      HEAP[$argtuple] = $58;
      
      
      
      
      if (HEAP[$argtuple] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $69 = HEAP[HEAP[$argtuple + 4] + 24];
      
      FUNCTION_TABLE[$69]($argtuple);
      __label__ = 13;
      break;
     case 13:
      
      $0 = $result;
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
  function _chain_new_internal($type, $source) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $source_addr;
      var $retval;
      var $0;
      var $lz;
      $type_addr = $type;
      $source_addr = $source;
      
      
      var $3 = HEAP[$type_addr + 152];
      
      var $5 = FUNCTION_TABLE[$3]($type_addr, 0);
      
      $lz = $5;
      
      
      if ($lz == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      var $12 = HEAP[$source_addr] - 1;
      
      
      HEAP[$source_addr] = $12;
      
      
      
      
      if (HEAP[$source_addr] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $23 = HEAP[HEAP[$source_addr + 4] + 24];
      
      FUNCTION_TABLE[$23]($source_addr);
      __label__ = 3;
      break;
     case 3:
      $0 = 0;
      __label__ = 5;
      break;
     case 4:
      
      
      
      HEAP[$lz + 8] = $source_addr;
      
      
      HEAP[$lz + 12] = 0;
      
      
      $0 = $lz;
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
  function _chain_new($type, $args, $kwds) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $source;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      if ($type_addr == _chain_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $4 = __PyArg_NoKeywords(__str37, $kwds_addr);
      
      if ($4 == 0) {
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
      
      var $7 = _PyObject_GetIter($args_addr);
      $source = $7;
      
      if ($7 == 0) {
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
      
      
      var $11 = _chain_new_internal($type_addr, $source);
      $0 = $11;
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
  function _chain_new_from_iterable($type, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $source;
      $type_addr = $type;
      $arg_addr = $arg;
      
      var $2 = _PyObject_GetIter($arg_addr);
      $source = $2;
      
      
      if ($source == 0) {
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
      
      
      var $7 = _chain_new_internal($type_addr, $source);
      $0 = $7;
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
  function _chain_dealloc($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      $lz_addr = $lz;
      
      
      _PyObject_GC_UnTrack($lz_addr);
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$lz_addr + 12];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$lz_addr + 12] + 4] + 24];
      
      
      var $25 = HEAP[$lz_addr + 12];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[$lz_addr + 8];
      
      
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
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$lz_addr + 8] + 4] + 24];
      
      
      var $49 = HEAP[$lz_addr + 8];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[$lz_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$55]($lz_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _chain_traverse($lz, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      $lz_addr = $lz;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$lz_addr + 8];
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
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$lz_addr + 12];
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
      __label__ = 7;
      break;
     case 6:
      $0 = 0;
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
  function _chain_next($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $retval;
      var $0;
      var $item;
      var $iterable;
      var $_py_tmp;
      var $_py_tmp12;
      var $_py_tmp23;
      $lz_addr = $lz;
      
      
      
      
      if (HEAP[$lz_addr + 8] == 0) {
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
      
      
      
      
      if (HEAP[$lz_addr + 12] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 3:
      
      
      var $11 = HEAP[$lz_addr + 8];
      var $12 = _PyIter_Next($11);
      $iterable = $12;
      
      
      if ($iterable == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      $_py_tmp = HEAP[$lz_addr + 8];
      
      
      HEAP[$lz_addr + 8] = 0;
      
      
      
      var $27 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $27;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $38 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$38]($_py_tmp);
      __label__ = 7;
      break;
     case 7:
      $0 = 0;
      __label__ = 25;
      break;
     case 8:
      
      var $41 = _PyObject_GetIter($iterable);
      
      
      HEAP[$lz_addr + 12] = $41;
      
      
      
      var $47 = HEAP[$iterable] - 1;
      
      
      HEAP[$iterable] = $47;
      
      
      
      
      if (HEAP[$iterable] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $58 = HEAP[HEAP[$iterable + 4] + 24];
      
      FUNCTION_TABLE[$58]($iterable);
      __label__ = 10;
      break;
     case 10:
      
      
      
      
      if (HEAP[$lz_addr + 12] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      
      $_py_tmp12 = HEAP[$lz_addr + 8];
      
      
      HEAP[$lz_addr + 8] = 0;
      
      
      
      var $76 = HEAP[$_py_tmp12] - 1;
      
      
      HEAP[$_py_tmp12] = $76;
      
      
      
      
      if (HEAP[$_py_tmp12] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $87 = HEAP[HEAP[$_py_tmp12 + 4] + 24];
      
      FUNCTION_TABLE[$87]($_py_tmp12);
      __label__ = 14;
      break;
     case 14:
      $0 = 0;
      __label__ = 25;
      break;
     case 15:
      
      
      var $91 = HEAP[$lz_addr + 12];
      var $92 = _PyIter_Next($91);
      $item = $92;
      
      if ($92 != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      $0 = $item;
      __label__ = 25;
      break;
     case 17:
      var $95 = _PyErr_Occurred();
      
      if ($95 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      var $97 = HEAP[_PyExc_StopIteration];
      var $98 = _PyErr_ExceptionMatches($97);
      
      if ($98 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      _PyErr_Clear();
      __label__ = 21;
      break;
     case 20:
      $0 = 0;
      __label__ = 25;
      break;
     case 21:
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      
      $_py_tmp23 = HEAP[$lz_addr + 12];
      
      
      HEAP[$lz_addr + 12] = 0;
      
      
      
      var $112 = HEAP[$_py_tmp23] - 1;
      
      
      HEAP[$_py_tmp23] = $112;
      
      
      
      
      if (HEAP[$_py_tmp23] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $123 = HEAP[HEAP[$_py_tmp23 + 4] + 24];
      
      FUNCTION_TABLE[$123]($_py_tmp23);
      __label__ = 24;
      break;
     case 24:
      
      var $126 = _chain_next($lz_addr);
      $0 = $126;
      __label__ = 25;
      break;
     case 25:
      
      $retval = $0;
      var $retval27 = $retval;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _product_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $iftmp_73;
      var $0;
      var $lz;
      var $nargs;
      var $npools;
      var $repeat = __stackBase__;
      var $pools;
      var $indices;
      var $i;
      var $kwlist = __stackBase__ + 4;
      var $tmpargs;
      var $item;
      var $pool;
      var $pool25;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      HEAP[$repeat] = 1;
      $pools = 0;
      $indices = 0;
      
      
      if ($kwds_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 1:
      
      HEAP[$kwlist] = __str40;
      
      HEAP[$kwlist + 4] = 0;
      var $5 = _PyTuple_New(0);
      $tmpargs = $5;
      
      
      if ($tmpargs == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 33;
      break;
     case 3:
      
      
      var $kwlist3 = $kwlist;
      var $10 = _PyArg_ParseTupleAndKeywords($tmpargs, $kwds_addr, __str41, $kwlist3, allocate([ $repeat, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      var $11 = $10 == 0;
      
      
      
      var $15 = HEAP[$tmpargs] - 1;
      
      
      HEAP[$tmpargs] = $15;
      
      
      
      var $21 = HEAP[$tmpargs] == 0;
      if ($11) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      if ($21) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $26 = HEAP[HEAP[$tmpargs + 4] + 24];
      
      FUNCTION_TABLE[$26]($tmpargs);
      __label__ = 6;
      break;
     case 6:
      $0 = 0;
      __label__ = 33;
      break;
     case 7:
      if ($21) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $32 = HEAP[HEAP[$tmpargs + 4] + 24];
      
      FUNCTION_TABLE[$32]($tmpargs);
      __label__ = 9;
      break;
     case 9:
      
      
      if (HEAP[$repeat] < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $36 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($36, __str42);
      $0 = 0;
      __label__ = 33;
      break;
     case 11:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$args_addr + 4] + 84] & 67108864) == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      ___assert_fail(__str43, __str5, 1814, ___PRETTY_FUNCTION___10265);
      throw "Reached an unreachable!";
     case 13:
      
      
      if (HEAP[$repeat] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      $iftmp_73 = HEAP[$args_addr + 8];
      __label__ = 16;
      break;
     case 15:
      $iftmp_73 = 0;
      __label__ = 16;
      break;
     case 16:
      
      $nargs = $iftmp_73;
      
      
      
      $npools = $nargs * HEAP[$repeat];
      
      
      var $56 = _PyMem_Malloc($npools * 4);
      
      $indices = $56;
      
      if ($56 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $59 = _PyErr_NoMemory();
      __label__ = 27;
      break;
     case 18:
      
      var $61 = _PyTuple_New($npools);
      $pools = $61;
      
      
      if ($pools == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      $i = 0;
      __label__ = 22;
      break;
     case 20:
      
      
      
      
      
      
      $item = HEAP[$args_addr + 12 + $i * 4];
      
      var $71 = _PySequence_Tuple($item);
      $pool = $71;
      
      
      if ($pool == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      
      HEAP[$pools + 12 + $i * 4] = $pool;
      
      
      
      HEAP[$indices + 4 * $i] = 0;
      
      var $84 = $i + 1;
      $i = $84;
      __label__ = 22;
      break;
     case 22:
      
      
      
      if ($i < $nargs) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      if ($i < $npools) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      
      
      
      
      $pool25 = HEAP[$pools + 12 + ($i - $nargs) * 4];
      
      
      
      var $102 = HEAP[$pool25] + 1;
      
      
      HEAP[$pool25] = $102;
      
      
      
      
      
      
      HEAP[$pools + 12 + $i * 4] = $pool25;
      
      
      
      HEAP[$indices + 4 * $i] = 0;
      
      var $115 = $i + 1;
      $i = $115;
      
      
      
      if ($i < $npools) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      var $121 = HEAP[$type_addr + 152];
      
      var $123 = FUNCTION_TABLE[$121]($type_addr, 0);
      
      $lz = $123;
      
      if ($123 == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      HEAP[$lz + 8] = $pools;
      
      
      
      HEAP[$lz + 12] = $indices;
      
      
      HEAP[$lz + 16] = 0;
      
      
      HEAP[$lz + 20] = 0;
      
      
      $0 = $lz;
      __label__ = 33;
      break;
     case 27:
      
      
      if ($indices != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      _PyMem_Free($indices);
      __label__ = 29;
      break;
     case 29:
      
      
      if ($pools != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      
      
      
      var $147 = HEAP[$pools] - 1;
      
      
      HEAP[$pools] = $147;
      
      
      
      
      if (HEAP[$pools] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $158 = HEAP[HEAP[$pools + 4] + 24];
      
      FUNCTION_TABLE[$158]($pools);
      __label__ = 32;
      break;
     case 32:
      $0 = 0;
      __label__ = 33;
      break;
     case 33:
      
      $retval = $0;
      var $retval35 = $retval;
      STACKTOP = __stackBase__;
      return $retval35;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _product_dealloc($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      $lz_addr = $lz;
      
      
      _PyObject_GC_UnTrack($lz_addr);
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$lz_addr + 8];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$lz_addr + 8] + 4] + 24];
      
      
      var $25 = HEAP[$lz_addr + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[$lz_addr + 16];
      
      
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
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$lz_addr + 16] + 4] + 24];
      
      
      var $49 = HEAP[$lz_addr + 16];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      var $57 = HEAP[$lz_addr + 12];
      _PyMem_Free($57);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      var $63 = HEAP[HEAP[$lz_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$63]($lz_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _product_traverse($lz, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      $lz_addr = $lz;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$lz_addr + 8];
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
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$lz_addr + 16];
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
      __label__ = 7;
      break;
     case 6:
      $0 = 0;
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
  function _product_next($lz) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $retval;
      var $0;
      var $pool;
      var $elem;
      var $oldelem;
      var $pools;
      var $result;
      var $npools;
      var $i;
      var $indices;
      var $old_result;
      $lz_addr = $lz;
      
      
      
      $pools = HEAP[$lz_addr + 8];
      
      
      
      $result = HEAP[$lz_addr + 16];
      
      
      
      
      $npools = HEAP[$pools + 8];
      
      
      
      
      if (HEAP[$lz_addr + 20] != 0) {
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
      
      
      if ($result == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 3:
      
      var $18 = _PyTuple_New($npools);
      $result = $18;
      
      
      if ($result == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      HEAP[$lz_addr + 16] = $result;
      $i = 0;
      __label__ = 7;
      break;
     case 5:
      
      
      
      
      
      
      $pool = HEAP[$pools + 12 + $i * 4];
      
      
      
      
      
      if (HEAP[$pool + 8] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      $elem = HEAP[$pool + 12];
      
      
      
      var $43 = HEAP[$elem] + 1;
      
      
      HEAP[$elem] = $43;
      
      
      
      
      
      
      HEAP[$result + 12 + $i * 4] = $elem;
      
      var $53 = $i + 1;
      $i = $53;
      __label__ = 7;
      break;
     case 7:
      
      
      
      if ($i < $npools) {
        __label__ = 5;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 8:
      
      
      
      $indices = HEAP[$lz_addr + 12];
      
      
      
      
      if (HEAP[$result] > 1) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 9:
      
      $old_result = $result;
      
      var $66 = _PyTuple_New($npools);
      $result = $66;
      
      
      if ($result == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      HEAP[$lz_addr + 16] = $result;
      $i = 0;
      
      
      
      var $75 = $old_result;
      if ($i < $npools) {
        __lastLabel__ = 10;
        __label__ = 11;
        break;
      } else {
        __lastLabel__ = 10;
        __label__ = 12;
        break;
      }
     case 11:
      var $76 = __lastLabel__ == 11 ? $99 : $75;
      
      
      
      
      
      $elem = HEAP[$76 + 12 + $i * 4];
      
      
      
      var $85 = HEAP[$elem] + 1;
      
      
      HEAP[$elem] = $85;
      
      
      
      
      
      
      HEAP[$result + 12 + $i * 4] = $elem;
      
      var $95 = $i + 1;
      $i = $95;
      
      
      
      var $99 = $old_result;
      if ($i < $npools) {
        __lastLabel__ = 11;
        __label__ = 11;
        break;
      } else {
        __lastLabel__ = 11;
        __label__ = 12;
        break;
      }
     case 12:
      var $_lcssa = __lastLabel__ == 10 ? $75 : $99;
      
      
      var $102 = HEAP[$_lcssa] - 1;
      
      
      HEAP[$old_result] = $102;
      
      
      
      
      if (HEAP[$old_result] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $113 = HEAP[HEAP[$old_result + 4] + 24];
      
      FUNCTION_TABLE[$113]($old_result);
      __label__ = 14;
      break;
     case 14:
      
      
      if ($npools != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      
      if (HEAP[$result] != 1) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      ___assert_fail(__str44, __str5, 1928, ___PRETTY_FUNCTION___10428);
      throw "Reached an unreachable!";
     case 17:
      
      var $122 = $npools - 1;
      $i = $122;
      __lastLabel__ = 17;
      __label__ = 24;
      break;
     case 18:
      
      
      
      
      
      
      $pool = HEAP[$pools + 12 + $i * 4];
      
      
      
      
      var $133 = HEAP[$indices + 4 * $i] + 1;
      
      
      
      HEAP[$indices + 4 * $i] = $133;
      
      
      
      
      
      
      
      
      
      if (HEAP[$indices + 4 * $i] == HEAP[$pool + 8]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 19:
      
      
      
      HEAP[$indices + 4 * $i] = 0;
      
      
      
      
      
      $elem = HEAP[$pool + 12];
      
      
      
      var $157 = HEAP[$elem] + 1;
      
      
      HEAP[$elem] = $157;
      
      
      
      
      
      
      $oldelem = HEAP[$result + 12 + $i * 4];
      
      
      
      
      
      
      HEAP[$result + 12 + $i * 4] = $elem;
      
      
      
      var $175 = HEAP[$oldelem] - 1;
      
      
      HEAP[$oldelem] = $175;
      
      
      
      
      if (HEAP[$oldelem] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $186 = HEAP[HEAP[$oldelem + 4] + 24];
      
      FUNCTION_TABLE[$186]($oldelem);
      __label__ = 21;
      break;
     case 21:
      
      var $189 = $i - 1;
      $i = $189;
      __lastLabel__ = 21;
      __label__ = 24;
      break;
     case 22:
      
      
      
      
      
      
      
      
      
      $elem = HEAP[$pool + 12 + HEAP[$indices + 4 * $i] * 4];
      
      
      
      var $202 = HEAP[$elem] + 1;
      
      
      HEAP[$elem] = $202;
      
      
      
      
      
      
      $oldelem = HEAP[$result + 12 + $i * 4];
      
      
      
      
      
      
      HEAP[$result + 12 + $i * 4] = $elem;
      
      
      
      var $220 = HEAP[$oldelem] - 1;
      
      
      HEAP[$oldelem] = $220;
      
      
      
      
      if (HEAP[$oldelem] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 23:
      
      
      
      
      var $231 = HEAP[HEAP[$oldelem + 4] + 24];
      
      FUNCTION_TABLE[$231]($oldelem);
      __label__ = 25;
      break;
     case 24:
      var $233 = __lastLabel__ == 21 ? $189 : $122;
      
      if ($233 >= 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      if ($i < 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      var $240 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $240;
      
      $0 = $result;
      __label__ = 28;
      break;
     case 27:
      
      
      HEAP[$lz_addr + 20] = 1;
      $0 = 0;
      __label__ = 28;
      break;
     case 28:
      
      $retval = $0;
      var $retval30 = $retval;
      return $retval30;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _combinations_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $co;
      var $n;
      var $r = __stackBase__;
      var $pool;
      var $iterable = __stackBase__ + 4;
      var $indices;
      var $i;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      $pool = 0;
      HEAP[$iterable] = 0;
      $indices = 0;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwds_addr, __str46, _kwargs_10542, allocate([ $iterable, 0, 0, 0, $r, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$iterable];
      var $6 = _PySequence_Tuple($5);
      $pool = $6;
      
      
      if ($pool == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      $n = HEAP[$pool + 8];
      
      
      if (HEAP[$r] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $15 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($15, __str48);
      __label__ = 11;
      break;
     case 5:
      
      var $17 = HEAP[$r] * 4;
      var $18 = _PyMem_Malloc($17);
      
      $indices = $18;
      
      
      if ($indices == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $22 = _PyErr_NoMemory();
      __label__ = 11;
      break;
     case 7:
      $i = 0;
      
      
      
      if ($i < HEAP[$r]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      HEAP[$indices + 4 * $i] = $i;
      
      var $31 = $i + 1;
      $i = $31;
      
      
      
      if ($i < HEAP[$r]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      var $37 = HEAP[$type_addr + 152];
      
      var $39 = FUNCTION_TABLE[$37]($type_addr, 0);
      
      $co = $39;
      
      if ($39 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      HEAP[$co + 8] = $pool;
      
      
      
      HEAP[$co + 12] = $indices;
      
      
      HEAP[$co + 16] = 0;
      var $50 = HEAP[$r];
      
      
      HEAP[$co + 20] = $50;
      
      
      
      var $56 = HEAP[$r] > $n;
      
      
      HEAP[$co + 24] = $56;
      
      
      $0 = $co;
      __label__ = 17;
      break;
     case 11:
      
      
      if ($indices != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      _PyMem_Free($indices);
      __label__ = 13;
      break;
     case 13:
      
      
      if ($pool != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      var $70 = HEAP[$pool] - 1;
      
      
      HEAP[$pool] = $70;
      
      
      
      
      if (HEAP[$pool] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $81 = HEAP[HEAP[$pool + 4] + 24];
      
      FUNCTION_TABLE[$81]($pool);
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
  function _combinations_dealloc($co) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $co_addr;
      $co_addr = $co;
      
      
      _PyObject_GC_UnTrack($co_addr);
      
      
      
      
      if (HEAP[$co_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$co_addr + 8];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$co_addr + 8] + 4] + 24];
      
      
      var $25 = HEAP[$co_addr + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$co_addr + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[$co_addr + 16];
      
      
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
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$co_addr + 16] + 4] + 24];
      
      
      var $49 = HEAP[$co_addr + 16];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$co_addr + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      var $57 = HEAP[$co_addr + 12];
      _PyMem_Free($57);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      var $63 = HEAP[HEAP[$co_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$63]($co_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _combinations_traverse($co, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $co_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      $co_addr = $co;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$co_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$co_addr + 8];
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
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[$co_addr + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$co_addr + 16];
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
      __label__ = 7;
      break;
     case 6:
      $0 = 0;
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
  function _combinations_next($co) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $co_addr;
      var $retval;
      var $0;
      var $elem;
      var $oldelem;
      var $pool;
      var $indices;
      var $result;
      var $n;
      var $r;
      var $i;
      var $j;
      var $index;
      var $old_result;
      $co_addr = $co;
      
      
      
      $pool = HEAP[$co_addr + 8];
      
      
      
      $indices = HEAP[$co_addr + 12];
      
      
      
      $result = HEAP[$co_addr + 16];
      
      
      
      
      $n = HEAP[$pool + 8];
      
      
      
      $r = HEAP[$co_addr + 20];
      
      
      
      
      if (HEAP[$co_addr + 24] != 0) {
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
      
      
      if ($result == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      var $24 = _PyTuple_New($r);
      $result = $24;
      
      
      if ($result == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      HEAP[$co_addr + 16] = $result;
      $i = 0;
      
      
      
      if ($i < $r) {
        __label__ = 5;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 5:
      
      
      
      
      $index = HEAP[$indices + 4 * $i];
      
      
      
      
      
      
      $elem = HEAP[$pool + 12 + $index * 4];
      
      
      
      var $46 = HEAP[$elem] + 1;
      
      
      HEAP[$elem] = $46;
      
      
      
      
      
      
      HEAP[$result + 12 + $i * 4] = $elem;
      
      var $56 = $i + 1;
      $i = $56;
      
      
      
      if ($i < $r) {
        __label__ = 5;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 6:
      
      
      
      
      if (HEAP[$result] > 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      
      $old_result = $result;
      
      var $66 = _PyTuple_New($r);
      $result = $66;
      
      
      if ($result == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      HEAP[$co_addr + 16] = $result;
      $i = 0;
      
      
      
      var $75 = $old_result;
      if ($i < $r) {
        __lastLabel__ = 8;
        __label__ = 9;
        break;
      } else {
        __lastLabel__ = 8;
        __label__ = 10;
        break;
      }
     case 9:
      var $76 = __lastLabel__ == 9 ? $99 : $75;
      
      
      
      
      
      $elem = HEAP[$76 + 12 + $i * 4];
      
      
      
      var $85 = HEAP[$elem] + 1;
      
      
      HEAP[$elem] = $85;
      
      
      
      
      
      
      HEAP[$result + 12 + $i * 4] = $elem;
      
      var $95 = $i + 1;
      $i = $95;
      
      
      
      var $99 = $old_result;
      if ($i < $r) {
        __lastLabel__ = 9;
        __label__ = 9;
        break;
      } else {
        __lastLabel__ = 9;
        __label__ = 10;
        break;
      }
     case 10:
      var $_lcssa = __lastLabel__ == 8 ? $75 : $99;
      
      
      var $102 = HEAP[$_lcssa] - 1;
      
      
      HEAP[$old_result] = $102;
      
      
      
      
      if (HEAP[$old_result] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $113 = HEAP[HEAP[$old_result + 4] + 24];
      
      FUNCTION_TABLE[$113]($old_result);
      __label__ = 12;
      break;
     case 12:
      
      
      if ($r != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      
      
      if (HEAP[$result] != 1) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      ___assert_fail(__str49, __str5, 2159, ___PRETTY_FUNCTION___10664);
      throw "Reached an unreachable!";
     case 15:
      
      var $122 = $r - 1;
      $i = $122;
      __lastLabel__ = 15;
      __label__ = 17;
      break;
     case 16:
      
      var $124 = $i - 1;
      $i = $124;
      __lastLabel__ = 16;
      __label__ = 17;
      break;
     case 17:
      var $125 = __lastLabel__ == 16 ? $124 : $122;
      
      if ($125 < 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$indices + 4 * $i] == $n + $i + (0 - $r)) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      if ($i < 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      var $143 = HEAP[$indices + 4 * $i] + 1;
      
      
      
      HEAP[$indices + 4 * $i] = $143;
      
      
      $j = $i + 1;
      
      
      
      if ($j < $r) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      
      var $157 = HEAP[$indices + 4 * ($j - 1)] + 1;
      
      
      
      HEAP[$indices + 4 * $j] = $157;
      
      var $162 = $j + 1;
      $j = $162;
      
      
      
      if ($j < $r) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      if ($i < $r) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 23:
      
      
      
      
      $index = HEAP[$indices + 4 * $i];
      
      
      
      
      
      
      $elem = HEAP[$pool + 12 + $index * 4];
      
      
      
      var $182 = HEAP[$elem] + 1;
      
      
      HEAP[$elem] = $182;
      
      
      
      
      
      
      $oldelem = HEAP[$result + 12 + $i * 4];
      
      
      
      
      
      
      HEAP[$result + 12 + $i * 4] = $elem;
      
      
      
      var $200 = HEAP[$oldelem] - 1;
      
      
      HEAP[$oldelem] = $200;
      
      
      
      
      if (HEAP[$oldelem] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $211 = HEAP[HEAP[$oldelem + 4] + 24];
      
      FUNCTION_TABLE[$211]($oldelem);
      __label__ = 25;
      break;
     case 25:
      
      var $214 = $i + 1;
      $i = $214;
      
      
      
      if ($i < $r) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      var $221 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $221;
      
      $0 = $result;
      __label__ = 28;
      break;
     case 27:
      
      
      HEAP[$co_addr + 24] = 1;
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
  function _cwr_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $iftmp_143;
      var $0;
      var $co;
      var $n;
      var $r = __stackBase__;
      var $pool;
      var $iterable = __stackBase__ + 4;
      var $indices;
      var $i;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      $pool = 0;
      HEAP[$iterable] = 0;
      $indices = 0;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwds_addr, __str51, _kwargs_10765, allocate([ $iterable, 0, 0, 0, $r, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $5 = HEAP[$iterable];
      var $6 = _PySequence_Tuple($5);
      $pool = $6;
      
      
      if ($pool == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      $n = HEAP[$pool + 8];
      
      
      if (HEAP[$r] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $15 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($15, __str48);
      __label__ = 15;
      break;
     case 5:
      
      var $17 = HEAP[$r] * 4;
      var $18 = _PyMem_Malloc($17);
      
      $indices = $18;
      
      
      if ($indices == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $22 = _PyErr_NoMemory();
      __label__ = 15;
      break;
     case 7:
      $i = 0;
      
      
      
      if ($i < HEAP[$r]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      HEAP[$indices + 4 * $i] = 0;
      
      var $30 = $i + 1;
      $i = $30;
      
      
      
      if ($i < HEAP[$r]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      var $36 = HEAP[$type_addr + 152];
      
      var $38 = FUNCTION_TABLE[$36]($type_addr, 0);
      
      $co = $38;
      
      if ($38 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      HEAP[$co + 8] = $pool;
      
      
      
      HEAP[$co + 12] = $indices;
      
      
      HEAP[$co + 16] = 0;
      var $49 = HEAP[$r];
      
      
      HEAP[$co + 20] = $49;
      
      
      if ($n != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      if (HEAP[$r] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      $iftmp_143 = 1;
      __label__ = 14;
      break;
     case 13:
      $iftmp_143 = 0;
      __label__ = 14;
      break;
     case 14:
      
      
      
      HEAP[$co + 24] = $iftmp_143;
      
      
      $0 = $co;
      __label__ = 21;
      break;
     case 15:
      
      
      if ($indices != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      _PyMem_Free($indices);
      __label__ = 17;
      break;
     case 17:
      
      
      if ($pool != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      
      
      
      var $70 = HEAP[$pool] - 1;
      
      
      HEAP[$pool] = $70;
      
      
      
      
      if (HEAP[$pool] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $81 = HEAP[HEAP[$pool + 4] + 24];
      
      FUNCTION_TABLE[$81]($pool);
      __label__ = 20;
      break;
     case 20:
      $0 = 0;
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
  function _cwr_dealloc($co) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $co_addr;
      $co_addr = $co;
      
      
      _PyObject_GC_UnTrack($co_addr);
      
      
      
      
      if (HEAP[$co_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$co_addr + 8];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$co_addr + 8] + 4] + 24];
      
      
      var $25 = HEAP[$co_addr + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$co_addr + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[$co_addr + 16];
      
      
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
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$co_addr + 16] + 4] + 24];
      
      
      var $49 = HEAP[$co_addr + 16];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$co_addr + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      var $57 = HEAP[$co_addr + 12];
      _PyMem_Free($57);
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      var $63 = HEAP[HEAP[$co_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$63]($co_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cwr_traverse($co, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $co_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      $co_addr = $co;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$co_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$co_addr + 8];
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
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[$co_addr + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$co_addr + 16];
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
      __label__ = 7;
      break;
     case 6:
      $0 = 0;
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
  function _cwr_next($co) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $co_addr;
      var $retval;
      var $0;
      var $elem;
      var $oldelem;
      var $pool;
      var $indices;
      var $result;
      var $n;
      var $r;
      var $i;
      var $j;
      var $index;
      var $old_result;
      $co_addr = $co;
      
      
      
      $pool = HEAP[$co_addr + 8];
      
      
      
      $indices = HEAP[$co_addr + 12];
      
      
      
      $result = HEAP[$co_addr + 16];
      
      
      
      
      $n = HEAP[$pool + 8];
      
      
      
      $r = HEAP[$co_addr + 20];
      
      
      
      
      if (HEAP[$co_addr + 24] != 0) {
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
      
      
      if ($result == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      var $24 = _PyTuple_New($r);
      $result = $24;
      
      
      if ($result == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      HEAP[$co_addr + 16] = $result;
      $i = 0;
      
      
      
      if ($i < $r) {
        __label__ = 5;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 5:
      
      
      
      
      $index = HEAP[$indices + 4 * $i];
      
      
      
      
      
      
      $elem = HEAP[$pool + 12 + $index * 4];
      
      
      
      var $46 = HEAP[$elem] + 1;
      
      
      HEAP[$elem] = $46;
      
      
      
      
      
      
      HEAP[$result + 12 + $i * 4] = $elem;
      
      var $56 = $i + 1;
      $i = $56;
      
      
      
      if ($i < $r) {
        __label__ = 5;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 6:
      
      
      
      
      if (HEAP[$result] > 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      
      $old_result = $result;
      
      var $66 = _PyTuple_New($r);
      $result = $66;
      
      
      if ($result == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      HEAP[$co_addr + 16] = $result;
      $i = 0;
      
      
      
      var $75 = $old_result;
      if ($i < $r) {
        __lastLabel__ = 8;
        __label__ = 9;
        break;
      } else {
        __lastLabel__ = 8;
        __label__ = 10;
        break;
      }
     case 9:
      var $76 = __lastLabel__ == 9 ? $99 : $75;
      
      
      
      
      
      $elem = HEAP[$76 + 12 + $i * 4];
      
      
      
      var $85 = HEAP[$elem] + 1;
      
      
      HEAP[$elem] = $85;
      
      
      
      
      
      
      HEAP[$result + 12 + $i * 4] = $elem;
      
      var $95 = $i + 1;
      $i = $95;
      
      
      
      var $99 = $old_result;
      if ($i < $r) {
        __lastLabel__ = 9;
        __label__ = 9;
        break;
      } else {
        __lastLabel__ = 9;
        __label__ = 10;
        break;
      }
     case 10:
      var $_lcssa = __lastLabel__ == 8 ? $75 : $99;
      
      
      var $102 = HEAP[$_lcssa] - 1;
      
      
      HEAP[$old_result] = $102;
      
      
      
      
      if (HEAP[$old_result] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $113 = HEAP[HEAP[$old_result + 4] + 24];
      
      FUNCTION_TABLE[$113]($old_result);
      __label__ = 12;
      break;
     case 12:
      
      
      if ($r != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      
      
      if (HEAP[$result] != 1) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      ___assert_fail(__str49, __str5, 2406, ___PRETTY_FUNCTION___10891);
      throw "Reached an unreachable!";
     case 15:
      
      var $122 = $r - 1;
      $i = $122;
      __lastLabel__ = 15;
      __label__ = 17;
      break;
     case 16:
      
      var $124 = $i - 1;
      $i = $124;
      __lastLabel__ = 16;
      __label__ = 17;
      break;
     case 17:
      var $125 = __lastLabel__ == 16 ? $124 : $122;
      
      if ($125 < 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      if (HEAP[$indices + 4 * $i] == $n - 1) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      if ($i < 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      var $140 = HEAP[$indices + 4 * $i] + 1;
      
      
      
      HEAP[$indices + 4 * $i] = $140;
      
      
      $j = $i + 1;
      
      
      
      if ($j < $r) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $153 = HEAP[$indices + 4 * ($j - 1)];
      
      
      
      HEAP[$indices + 4 * $j] = $153;
      
      var $158 = $j + 1;
      $j = $158;
      
      
      
      if ($j < $r) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      if ($i < $r) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 23:
      
      
      
      
      $index = HEAP[$indices + 4 * $i];
      
      
      
      
      
      
      $elem = HEAP[$pool + 12 + $index * 4];
      
      
      
      var $178 = HEAP[$elem] + 1;
      
      
      HEAP[$elem] = $178;
      
      
      
      
      
      
      $oldelem = HEAP[$result + 12 + $i * 4];
      
      
      
      
      
      
      HEAP[$result + 12 + $i * 4] = $elem;
      
      
      
      var $196 = HEAP[$oldelem] - 1;
      
      
      HEAP[$oldelem] = $196;
      
      
      
      
      if (HEAP[$oldelem] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $207 = HEAP[HEAP[$oldelem + 4] + 24];
      
      FUNCTION_TABLE[$207]($oldelem);
      __label__ = 25;
      break;
     case 25:
      
      var $210 = $i + 1;
      $i = $210;
      
      
      
      if ($i < $r) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      var $217 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $217;
      
      $0 = $result;
      __label__ = 28;
      break;
     case 27:
      
      
      HEAP[$co_addr + 24] = 1;
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
  function _permutations_new($type, $args, $kwds) {
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
      var $po;
      var $n;
      var $r;
      var $robj = __stackBase__;
      var $pool;
      var $iterable = __stackBase__ + 4;
      var $indices;
      var $cycles;
      var $i;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      HEAP[$robj] = __Py_NoneStruct;
      $pool = 0;
      HEAP[$iterable] = 0;
      $indices = 0;
      $cycles = 0;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwds_addr, __str53, _kwargs_10993, allocate([ $iterable, 0, 0, 0, $robj, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$iterable];
      var $6 = _PySequence_Tuple($5);
      $pool = $6;
      
      
      if ($pool == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      $n = HEAP[$pool + 8];
      var $13 = $n;
      $r = $13;
      
      
      if (HEAP[$robj] != __Py_NoneStruct) {
        __lastLabel__ = 3;
        __label__ = 4;
        break;
      } else {
        __lastLabel__ = 3;
        __label__ = 7;
        break;
      }
     case 4:
      var $16 = HEAP[$robj];
      var $17 = _PyInt_AsSsize_t($16);
      $r = $17;
      var $18 = $r;
      var $19 = $18 == -1;
      if ($19) {
        __lastLabel__ = 4;
        __label__ = 5;
        break;
      } else {
        __lastLabel__ = 4;
        __label__ = 7;
        break;
      }
     case 5:
      var $20 = _PyErr_Occurred();
      
      if ($20 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $_pr = $r;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $22 = __lastLabel__ == 6 ? $_pr : __lastLabel__ == 4 ? $18 : $13;
      
      if ($22 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $24 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($24, __str48);
      __label__ = 18;
      break;
     case 9:
      
      
      var $27 = _PyMem_Malloc($n * 4);
      
      $indices = $27;
      
      
      var $31 = _PyMem_Malloc($r * 4);
      
      $cycles = $31;
      
      
      if ($indices == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if ($cycles == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $37 = _PyErr_NoMemory();
      __label__ = 18;
      break;
     case 12:
      $i = 0;
      
      
      
      if ($i < $n) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      HEAP[$indices + 4 * $i] = $i;
      
      var $46 = $i + 1;
      $i = $46;
      
      
      
      if ($i < $n) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      $i = 0;
      
      
      
      if ($i < $r) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      
      HEAP[$cycles + 4 * $i] = $n - $i;
      
      var $60 = $i + 1;
      $i = $60;
      
      
      
      if ($i < $r) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      var $66 = HEAP[$type_addr + 152];
      
      var $68 = FUNCTION_TABLE[$66]($type_addr, 0);
      
      $po = $68;
      
      if ($68 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      HEAP[$po + 8] = $pool;
      
      
      
      HEAP[$po + 12] = $indices;
      
      
      
      HEAP[$po + 16] = $cycles;
      
      
      HEAP[$po + 20] = 0;
      
      
      
      HEAP[$po + 24] = $r;
      
      
      
      
      
      
      HEAP[$po + 28] = $r > $n;
      
      
      $0 = $po;
      __label__ = 26;
      break;
     case 18:
      
      
      if ($indices != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      _PyMem_Free($indices);
      __label__ = 20;
      break;
     case 20:
      
      
      if ($cycles != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      _PyMem_Free($cycles);
      __label__ = 22;
      break;
     case 22:
      
      
      if ($pool != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 23:
      
      
      
      var $106 = HEAP[$pool] - 1;
      
      
      HEAP[$pool] = $106;
      
      
      
      
      if (HEAP[$pool] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $117 = HEAP[HEAP[$pool + 4] + 24];
      
      FUNCTION_TABLE[$117]($pool);
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
  function _permutations_dealloc($po) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $po_addr;
      $po_addr = $po;
      
      
      _PyObject_GC_UnTrack($po_addr);
      
      
      
      
      if (HEAP[$po_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$po_addr + 8];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$po_addr + 8] + 4] + 24];
      
      
      var $25 = HEAP[$po_addr + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$po_addr + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[$po_addr + 20];
      
      
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
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$po_addr + 20] + 4] + 24];
      
      
      var $49 = HEAP[$po_addr + 20];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $53 = HEAP[$po_addr + 12];
      _PyMem_Free($53);
      
      
      
      var $57 = HEAP[$po_addr + 16];
      _PyMem_Free($57);
      
      
      
      
      
      var $63 = HEAP[HEAP[$po_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$63]($po_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _permutations_traverse($po, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $po_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      $po_addr = $po;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$po_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$po_addr + 8];
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
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[$po_addr + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$po_addr + 20];
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
      __label__ = 7;
      break;
     case 6:
      $0 = 0;
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
  function _permutations_next($po) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $po_addr;
      var $retval;
      var $0;
      var $elem;
      var $oldelem;
      var $pool;
      var $indices;
      var $cycles;
      var $result;
      var $n;
      var $r;
      var $i;
      var $j;
      var $k;
      var $index;
      var $old_result;
      $po_addr = $po;
      
      
      
      $pool = HEAP[$po_addr + 8];
      
      
      
      $indices = HEAP[$po_addr + 12];
      
      
      
      $cycles = HEAP[$po_addr + 16];
      
      
      
      $result = HEAP[$po_addr + 20];
      
      
      
      
      $n = HEAP[$pool + 8];
      
      
      
      $r = HEAP[$po_addr + 24];
      
      
      
      
      if (HEAP[$po_addr + 28] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 30;
      break;
     case 2:
      
      
      if ($result == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      var $27 = _PyTuple_New($r);
      $result = $27;
      
      
      if ($result == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      HEAP[$po_addr + 20] = $result;
      $i = 0;
      
      
      
      if ($i < $r) {
        __label__ = 5;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 5:
      
      
      
      
      $index = HEAP[$indices + 4 * $i];
      
      
      
      
      
      
      $elem = HEAP[$pool + 12 + $index * 4];
      
      
      
      var $49 = HEAP[$elem] + 1;
      
      
      HEAP[$elem] = $49;
      
      
      
      
      
      
      HEAP[$result + 12 + $i * 4] = $elem;
      
      var $59 = $i + 1;
      $i = $59;
      
      
      
      if ($i < $r) {
        __label__ = 5;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 6:
      
      
      if ($n == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[$result] > 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 8:
      
      $old_result = $result;
      
      var $71 = _PyTuple_New($r);
      $result = $71;
      
      
      if ($result == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      HEAP[$po_addr + 20] = $result;
      $i = 0;
      
      
      
      var $80 = $old_result;
      if ($i < $r) {
        __lastLabel__ = 9;
        __label__ = 10;
        break;
      } else {
        __lastLabel__ = 9;
        __label__ = 11;
        break;
      }
     case 10:
      var $81 = __lastLabel__ == 10 ? $104 : $80;
      
      
      
      
      
      $elem = HEAP[$81 + 12 + $i * 4];
      
      
      
      var $90 = HEAP[$elem] + 1;
      
      
      HEAP[$elem] = $90;
      
      
      
      
      
      
      HEAP[$result + 12 + $i * 4] = $elem;
      
      var $100 = $i + 1;
      $i = $100;
      
      
      
      var $104 = $old_result;
      if ($i < $r) {
        __lastLabel__ = 10;
        __label__ = 10;
        break;
      } else {
        __lastLabel__ = 10;
        __label__ = 11;
        break;
      }
     case 11:
      var $_lcssa = __lastLabel__ == 9 ? $80 : $104;
      
      
      var $107 = HEAP[$_lcssa] - 1;
      
      
      HEAP[$old_result] = $107;
      
      
      
      
      if (HEAP[$old_result] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $118 = HEAP[HEAP[$old_result + 4] + 24];
      
      FUNCTION_TABLE[$118]($old_result);
      __label__ = 13;
      break;
     case 13:
      
      
      if ($r != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      
      if (HEAP[$result] != 1) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      ___assert_fail(__str49, __str5, 2668, ___PRETTY_FUNCTION___11129);
      throw "Reached an unreachable!";
     case 16:
      
      var $127 = $r - 1;
      $i = $127;
      __lastLabel__ = 16;
      __label__ = 25;
      break;
     case 17:
      
      
      
      
      var $132 = HEAP[$cycles + 4 * $i] - 1;
      
      
      
      HEAP[$cycles + 4 * $i] = $132;
      
      
      
      
      
      if (HEAP[$cycles + 4 * $i] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      
      
      
      
      $index = HEAP[$indices + 4 * $i];
      
      $j = $i;
      
      
      
      
      if ($n - 1 > $j) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $154 = HEAP[$indices + 4 * ($j + 1)];
      
      
      
      HEAP[$indices + 4 * $j] = $154;
      
      var $159 = $j + 1;
      $j = $159;
      
      
      
      
      if ($n - 1 > $j) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      
      
      HEAP[$indices + 4 * ($n - 1)] = $index;
      
      
      
      
      
      
      HEAP[$cycles + 4 * $i] = $n - $i;
      
      var $176 = $i - 1;
      $i = $176;
      __lastLabel__ = 20;
      __label__ = 25;
      break;
     case 21:
      
      
      
      
      $j = HEAP[$cycles + 4 * $i];
      
      
      
      
      $index = HEAP[$indices + 4 * $i];
      
      
      
      
      
      var $190 = HEAP[$indices + 4 * ($n - $j)];
      
      
      
      HEAP[$indices + 4 * $i] = $190;
      
      
      
      
      
      
      HEAP[$indices + 4 * ($n - $j)] = $index;
      var $200 = $i;
      $k = $200;
      
      
      
      if ($k < $r) {
        __lastLabel__ = 21;
        __label__ = 22;
        break;
      } else {
        __lastLabel__ = 21;
        __label__ = 27;
        break;
      }
     case 22:
      
      
      
      
      $index = HEAP[$indices + 4 * $k];
      
      
      
      
      
      
      $elem = HEAP[$pool + 12 + $index * 4];
      
      
      
      var $217 = HEAP[$elem] + 1;
      
      
      HEAP[$elem] = $217;
      
      
      
      
      
      
      $oldelem = HEAP[$result + 12 + $k * 4];
      
      
      
      
      
      
      HEAP[$result + 12 + $k * 4] = $elem;
      
      
      
      var $235 = HEAP[$oldelem] - 1;
      
      
      HEAP[$oldelem] = $235;
      
      
      
      
      if (HEAP[$oldelem] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $246 = HEAP[HEAP[$oldelem + 4] + 24];
      
      FUNCTION_TABLE[$246]($oldelem);
      __label__ = 24;
      break;
     case 24:
      
      var $249 = $k + 1;
      $k = $249;
      
      
      
      if ($k < $r) {
        __label__ = 22;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $253 = __lastLabel__ == 20 ? $176 : $127;
      
      if ($253 >= 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      var $_pr = $i;
      __lastLabel__ = 26;
      __label__ = 27;
      break;
     case 27:
      var $255 = __lastLabel__ == 26 ? $_pr : $200;
      
      if ($255 < 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      var $260 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $260;
      
      $0 = $result;
      __label__ = 30;
      break;
     case 29:
      
      
      HEAP[$po_addr + 28] = 1;
      $0 = 0;
      __label__ = 30;
      break;
     case 30:
      
      $retval = $0;
      var $retval34 = $retval;
      return $retval34;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _compress_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $seq1 = __stackBase__;
      var $seq2 = __stackBase__ + 4;
      var $data;
      var $selectors;
      var $lz;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      $data = 0;
      $selectors = 0;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwds_addr, __str55, _kwargs_11231, allocate([ $seq1, 0, 0, 0, $seq2, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$seq1];
      var $6 = _PyObject_GetIter($5);
      $data = $6;
      
      
      if ($data == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $9 = HEAP[$seq2];
      var $10 = _PyObject_GetIter($9);
      $selectors = $10;
      
      
      if ($selectors == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      var $15 = HEAP[$type_addr + 152];
      
      var $17 = FUNCTION_TABLE[$15]($type_addr, 0);
      
      $lz = $17;
      
      
      if ($lz == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      HEAP[$lz + 8] = $data;
      
      
      
      HEAP[$lz + 12] = $selectors;
      
      
      $0 = $lz;
      __label__ = 13;
      break;
     case 6:
      
      
      if ($data != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      var $33 = HEAP[$data] - 1;
      
      
      HEAP[$data] = $33;
      
      
      
      
      if (HEAP[$data] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $44 = HEAP[HEAP[$data + 4] + 24];
      
      FUNCTION_TABLE[$44]($data);
      __label__ = 9;
      break;
     case 9:
      
      
      if ($selectors != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      var $51 = HEAP[$selectors] - 1;
      
      
      HEAP[$selectors] = $51;
      
      
      
      
      if (HEAP[$selectors] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $62 = HEAP[HEAP[$selectors + 4] + 24];
      
      FUNCTION_TABLE[$62]($selectors);
      __label__ = 12;
      break;
     case 12:
      $0 = 0;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval12 = $retval;
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _compress_dealloc($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      $lz_addr = $lz;
      
      
      _PyObject_GC_UnTrack($lz_addr);
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$lz_addr + 8];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$lz_addr + 8] + 4] + 24];
      
      
      var $25 = HEAP[$lz_addr + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[$lz_addr + 12];
      
      
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
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$lz_addr + 12] + 4] + 24];
      
      
      var $49 = HEAP[$lz_addr + 12];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[$lz_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$55]($lz_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _compress_traverse($lz, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      $lz_addr = $lz;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$lz_addr + 8];
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
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$lz_addr + 12];
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
      __label__ = 7;
      break;
     case 6:
      $0 = 0;
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
  function _compress_next($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $retval;
      var $0;
      var $data;
      var $selectors;
      var $datum;
      var $selector;
      var $datanext;
      var $selectornext;
      var $ok;
      $lz_addr = $lz;
      
      
      
      $data = HEAP[$lz_addr + 8];
      
      
      
      $selectors = HEAP[$lz_addr + 12];
      
      
      
      
      
      $datanext = HEAP[HEAP[$data + 4] + 112];
      
      
      
      
      
      $selectornext = HEAP[HEAP[$selectors + 4] + 112];
      __label__ = 1;
      break;
     case 1:
      var $17 = $datanext;
      
      var $19 = FUNCTION_TABLE[$17]($data);
      $datum = $19;
      
      if ($19 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 15;
      break;
     case 3:
      var $21 = $selectornext;
      
      var $23 = FUNCTION_TABLE[$21]($selectors);
      $selector = $23;
      
      
      if ($selector == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      var $29 = HEAP[$datum] - 1;
      
      
      HEAP[$datum] = $29;
      
      
      
      
      if (HEAP[$datum] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $40 = HEAP[HEAP[$datum + 4] + 24];
      
      FUNCTION_TABLE[$40]($datum);
      __label__ = 6;
      break;
     case 6:
      $0 = 0;
      __label__ = 15;
      break;
     case 7:
      
      var $43 = _PyObject_IsTrue($selector);
      $ok = $43;
      
      
      
      var $47 = HEAP[$selector] - 1;
      
      
      HEAP[$selector] = $47;
      
      
      
      
      if (HEAP[$selector] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $58 = HEAP[HEAP[$selector + 4] + 24];
      
      FUNCTION_TABLE[$58]($selector);
      __label__ = 9;
      break;
     case 9:
      
      
      var $62 = $datum;
      if ($ok == 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = $62;
      __label__ = 15;
      break;
     case 11:
      
      
      var $65 = HEAP[$62] - 1;
      
      
      HEAP[$datum] = $65;
      
      
      
      
      if (HEAP[$datum] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $76 = HEAP[HEAP[$datum + 4] + 24];
      
      FUNCTION_TABLE[$76]($datum);
      __label__ = 13;
      break;
     case 13:
      
      var $79 = $ok == -1;
      if ($79) {
        __label__ = 14;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 14:
      $0 = 0;
      __label__ = 15;
      break;
     case 15:
      
      $retval = $0;
      var $retval16 = $retval;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ifilter_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $func = __stackBase__;
      var $seq = __stackBase__ + 4;
      var $it;
      var $lz;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      if ($type_addr == _ifilter_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $4 = __PyArg_NoKeywords(__str59, $kwds_addr);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 12;
      break;
     case 3:
      
      var $7 = _PyArg_UnpackTuple($args_addr, __str60, 2, 2, allocate([ $func, 0, 0, 0, $seq, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
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
      var $9 = HEAP[$seq];
      var $10 = _PyObject_GetIter($9);
      $it = $10;
      
      
      if ($it == 0) {
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
      
      
      var $15 = HEAP[$type_addr + 152];
      
      var $17 = FUNCTION_TABLE[$15]($type_addr, 0);
      
      $lz = $17;
      
      
      if ($lz == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $24 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $24;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $35 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$35]($it);
      __label__ = 10;
      break;
     case 10:
      $0 = 0;
      __label__ = 12;
      break;
     case 11:
      
      
      
      var $40 = HEAP[HEAP[$func]] + 1;
      var $41 = HEAP[$func];
      HEAP[$41] = $40;
      var $42 = HEAP[$func];
      
      
      HEAP[$lz + 8] = $42;
      
      
      
      HEAP[$lz + 12] = $it;
      
      
      $0 = $lz;
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
  function _ifilter_dealloc($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      $lz_addr = $lz;
      
      
      _PyObject_GC_UnTrack($lz_addr);
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$lz_addr + 8];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$lz_addr + 8] + 4] + 24];
      
      
      var $25 = HEAP[$lz_addr + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[$lz_addr + 12];
      
      
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
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$lz_addr + 12] + 4] + 24];
      
      
      var $49 = HEAP[$lz_addr + 12];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[$lz_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$55]($lz_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ifilter_traverse($lz, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      $lz_addr = $lz;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$lz_addr + 12];
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
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$lz_addr + 8];
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
      __label__ = 7;
      break;
     case 6:
      $0 = 0;
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
  function _ifilter_next($lz) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $retval;
      var $0;
      var $item;
      var $it;
      var $ok;
      var $iternext;
      var $good;
      $lz_addr = $lz;
      
      
      
      $it = HEAP[$lz_addr + 12];
      
      
      
      
      
      $iternext = HEAP[HEAP[$it + 4] + 112];
      __label__ = 1;
      break;
     case 1:
      var $9 = $iternext;
      
      var $11 = FUNCTION_TABLE[$9]($it);
      $item = $11;
      
      if ($11 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 17;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 8] == __Py_NoneStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[$lz_addr + 8] == _PyBool_Type) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $22 = _PyObject_IsTrue($item);
      $ok = $22;
      __lastLabel__ = 5;
      __label__ = 13;
      break;
     case 6:
      
      
      var $25 = HEAP[$lz_addr + 8];
      
      var $27 = _PyObject_CallFunctionObjArgs($25, allocate([ $item, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $good = $27;
      
      
      if ($good == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      var $33 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $33;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $44 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$44]($item);
      __label__ = 9;
      break;
     case 9:
      $0 = 0;
      __label__ = 17;
      break;
     case 10:
      
      var $47 = _PyObject_IsTrue($good);
      $ok = $47;
      
      
      
      var $51 = HEAP[$good] - 1;
      
      
      HEAP[$good] = $51;
      
      
      
      
      if (HEAP[$good] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $62 = HEAP[HEAP[$good + 4] + 24];
      
      FUNCTION_TABLE[$62]($good);
      __label__ = 12;
      break;
     case 12:
      var $_pr = $ok;
      __lastLabel__ = 12;
      __label__ = 13;
      break;
     case 13:
      var $64 = __lastLabel__ == 12 ? $_pr : $22;
      
      var $66 = $item;
      if ($64 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = $66;
      __label__ = 17;
      break;
     case 15:
      
      
      var $69 = HEAP[$66] - 1;
      
      
      HEAP[$item] = $69;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 16:
      
      
      
      
      var $80 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$80]($item);
      __label__ = 1;
      break;
     case 17:
      
      $retval = $0;
      var $retval17 = $retval;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ifilterfalse_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $func = __stackBase__;
      var $seq = __stackBase__ + 4;
      var $it;
      var $lz;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      if ($type_addr == _ifilterfalse_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $4 = __PyArg_NoKeywords(__str62, $kwds_addr);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 12;
      break;
     case 3:
      
      var $7 = _PyArg_UnpackTuple($args_addr, __str63, 2, 2, allocate([ $func, 0, 0, 0, $seq, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($7 == 0) {
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
      var $9 = HEAP[$seq];
      var $10 = _PyObject_GetIter($9);
      $it = $10;
      
      
      if ($it == 0) {
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
      
      
      var $15 = HEAP[$type_addr + 152];
      
      var $17 = FUNCTION_TABLE[$15]($type_addr, 0);
      
      $lz = $17;
      
      
      if ($lz == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $24 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $24;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $35 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$35]($it);
      __label__ = 10;
      break;
     case 10:
      $0 = 0;
      __label__ = 12;
      break;
     case 11:
      
      
      
      var $40 = HEAP[HEAP[$func]] + 1;
      var $41 = HEAP[$func];
      HEAP[$41] = $40;
      var $42 = HEAP[$func];
      
      
      HEAP[$lz + 8] = $42;
      
      
      
      HEAP[$lz + 12] = $it;
      
      
      $0 = $lz;
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
  function _ifilterfalse_dealloc($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      $lz_addr = $lz;
      
      
      _PyObject_GC_UnTrack($lz_addr);
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$lz_addr + 8];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$lz_addr + 8] + 4] + 24];
      
      
      var $25 = HEAP[$lz_addr + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[$lz_addr + 12];
      
      
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
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$lz_addr + 12] + 4] + 24];
      
      
      var $49 = HEAP[$lz_addr + 12];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[$lz_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$55]($lz_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ifilterfalse_traverse($lz, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      $lz_addr = $lz;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$lz_addr + 12];
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
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 8] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$lz_addr + 8];
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
      __label__ = 7;
      break;
     case 6:
      $0 = 0;
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
  function _ifilterfalse_next($lz) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $retval;
      var $0;
      var $item;
      var $it;
      var $ok;
      var $iternext;
      var $good;
      $lz_addr = $lz;
      
      
      
      $it = HEAP[$lz_addr + 12];
      
      
      
      
      
      $iternext = HEAP[HEAP[$it + 4] + 112];
      __label__ = 1;
      break;
     case 1:
      var $9 = $iternext;
      
      var $11 = FUNCTION_TABLE[$9]($it);
      $item = $11;
      
      if ($11 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 17;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 8] == __Py_NoneStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[$lz_addr + 8] == _PyBool_Type) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $22 = _PyObject_IsTrue($item);
      $ok = $22;
      __lastLabel__ = 5;
      __label__ = 13;
      break;
     case 6:
      
      
      var $25 = HEAP[$lz_addr + 8];
      
      var $27 = _PyObject_CallFunctionObjArgs($25, allocate([ $item, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $good = $27;
      
      
      if ($good == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      var $33 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $33;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $44 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$44]($item);
      __label__ = 9;
      break;
     case 9:
      $0 = 0;
      __label__ = 17;
      break;
     case 10:
      
      var $47 = _PyObject_IsTrue($good);
      $ok = $47;
      
      
      
      var $51 = HEAP[$good] - 1;
      
      
      HEAP[$good] = $51;
      
      
      
      
      if (HEAP[$good] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $62 = HEAP[HEAP[$good + 4] + 24];
      
      FUNCTION_TABLE[$62]($good);
      __label__ = 12;
      break;
     case 12:
      var $_pr = $ok;
      __lastLabel__ = 12;
      __label__ = 13;
      break;
     case 13:
      var $64 = __lastLabel__ == 12 ? $_pr : $22;
      
      var $66 = $item;
      if ($64 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = $66;
      __label__ = 17;
      break;
     case 15:
      
      
      var $69 = HEAP[$66] - 1;
      
      
      HEAP[$item] = $69;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 16:
      
      
      
      
      var $80 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$80]($item);
      __label__ = 1;
      break;
     case 17:
      
      $retval = $0;
      var $retval17 = $retval;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _count_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $lz;
      var $slow_mode;
      var $cnt;
      var $long_cnt = __stackBase__;
      var $long_step = __stackBase__ + 4;
      var $_py_tmp;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      $slow_mode = 0;
      $cnt = 0;
      HEAP[$long_cnt] = 0;
      HEAP[$long_step] = 0;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwds_addr, __str65, _kwlist_11697, allocate([ $long_cnt, 0, 0, 0, $long_step, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      
      if (HEAP[$long_cnt] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $7 = HEAP[$long_cnt];
      var $8 = _PyNumber_Check($7);
      
      if ($8 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if (HEAP[$long_step] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $12 = HEAP[$long_step];
      var $13 = _PyNumber_Check($12);
      
      if ($13 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $15 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($15, __str68);
      $0 = 0;
      __label__ = 47;
      break;
     case 7:
      
      
      if (HEAP[$long_cnt] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 8:
      var $18 = HEAP[$long_cnt];
      var $19 = _PyInt_AsSsize_t($18);
      $cnt = $19;
      
      var $21 = $cnt != -1;
      if ($21) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $22 = _PyErr_Occurred();
      
      if ($22 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$long_cnt] + 4] + 84] & 8388608) == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      _PyErr_Clear();
      $slow_mode = 1;
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $34 = HEAP[HEAP[$long_cnt]] + 1;
      var $35 = HEAP[$long_cnt];
      HEAP[$35] = $34;
      __label__ = 14;
      break;
     case 13:
      $cnt = 0;
      var $36 = _PyInt_FromLong(0);
      HEAP[$long_cnt] = $36;
      __label__ = 14;
      break;
     case 14:
      
      
      if (HEAP[$long_step] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 15:
      var $39 = _PyInt_FromLong(1);
      HEAP[$long_step] = $39;
      
      
      if (HEAP[$long_step] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 16:
      var $42 = HEAP[$long_cnt];
      
      
      var $45 = HEAP[$42] - 1;
      var $46 = $42;
      HEAP[$46] = $45;
      
      
      
      if (HEAP[$42] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$long_cnt] + 4] + 24];
      var $55 = HEAP[$long_cnt];
      FUNCTION_TABLE[$54]($55);
      __label__ = 18;
      break;
     case 18:
      $0 = 0;
      __label__ = 47;
      break;
     case 19:
      
      
      
      var $59 = HEAP[HEAP[$long_step]] + 1;
      var $60 = HEAP[$long_step];
      HEAP[$60] = $59;
      __label__ = 20;
      break;
     case 20:
      
      
      if (HEAP[$long_cnt] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      if (HEAP[$long_step] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      ___assert_fail(__str69, __str5, 3272, ___PRETTY_FUNCTION___11698);
      throw "Reached an unreachable!";
     case 23:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$long_step] + 4] + 84] & 8388608) == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      
      if (HEAP[HEAP[$long_step] + 8] != 1) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      $slow_mode = 1;
      __label__ = 27;
      break;
     case 26:
      
      
      if ($slow_mode != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      $cnt = 2147483647;
      __label__ = 35;
      break;
     case 28:
      
      
      if (HEAP[$long_cnt] != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 29:
      
      $_py_tmp = HEAP[$long_cnt];
      HEAP[$long_cnt] = 0;
      
      
      
      var $84 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $84;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $95 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$95]($_py_tmp);
      __label__ = 31;
      break;
     case 31:
      
      
      if ($cnt == 2147483647) {
        __label__ = 35;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      if (HEAP[$long_cnt] != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      if ($slow_mode != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 34:
      
      
      if ($cnt != 2147483647) {
        __label__ = 37;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      if (HEAP[$long_cnt] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      if ($slow_mode == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 37:
      ___assert_fail(__str70, __str5, 3286, ___PRETTY_FUNCTION___11698);
      throw "Reached an unreachable!";
     case 38:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$long_step] + 4] + 84] & 8388608) == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      
      
      
      
      if (HEAP[HEAP[$long_step] + 8] != 1) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      ___assert_fail(__str71, __str5, 3288, ___PRETTY_FUNCTION___11698);
      throw "Reached an unreachable!";
     case 41:
      
      
      var $121 = HEAP[$type_addr + 152];
      
      var $123 = FUNCTION_TABLE[$121]($type_addr, 0);
      
      $lz = $123;
      
      if ($123 == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 42:
      
      
      if (HEAP[$long_cnt] != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 43:
      var $128 = HEAP[$long_cnt];
      
      
      var $131 = HEAP[$128] - 1;
      var $132 = $128;
      HEAP[$132] = $131;
      
      
      
      if (HEAP[$128] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      var $140 = HEAP[HEAP[HEAP[$long_cnt] + 4] + 24];
      var $141 = HEAP[$long_cnt];
      FUNCTION_TABLE[$140]($141);
      __label__ = 45;
      break;
     case 45:
      $0 = 0;
      __label__ = 47;
      break;
     case 46:
      
      
      
      HEAP[$lz + 8] = $cnt;
      var $145 = HEAP[$long_cnt];
      
      
      HEAP[$lz + 12] = $145;
      var $148 = HEAP[$long_step];
      
      
      HEAP[$lz + 16] = $148;
      
      
      $0 = $lz;
      __label__ = 47;
      break;
     case 47:
      
      $retval = $0;
      var $retval49 = $retval;
      STACKTOP = __stackBase__;
      return $retval49;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _count_dealloc($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      $lz_addr = $lz;
      
      
      _PyObject_GC_UnTrack($lz_addr);
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$lz_addr + 12];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$lz_addr + 12] + 4] + 24];
      
      
      var $25 = HEAP[$lz_addr + 12];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[$lz_addr + 16];
      
      
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
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$lz_addr + 16] + 4] + 24];
      
      
      var $49 = HEAP[$lz_addr + 16];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[$lz_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$55]($lz_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _count_traverse($lz, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      $lz_addr = $lz;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$lz_addr + 12];
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
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$lz_addr + 16];
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
      __label__ = 7;
      break;
     case 6:
      $0 = 0;
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
  function _count_nextlong($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $retval;
      var $0;
      var $long_cnt;
      var $stepped_up;
      $lz_addr = $lz;
      
      
      
      $long_cnt = HEAP[$lz_addr + 12];
      
      
      if ($long_cnt == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $6 = _PyInt_FromSsize_t(2147483647);
      $long_cnt = $6;
      
      
      if ($long_cnt == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 9;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 8] != 2147483647) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if ($long_cnt == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str72, __str5, 3333, ___PRETTY_FUNCTION___11885);
      throw "Reached an unreachable!";
     case 6:
      
      
      var $17 = HEAP[$lz_addr + 16];
      
      var $19 = _PyNumber_Add($long_cnt, $17);
      $stepped_up = $19;
      
      
      if ($stepped_up == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 9;
      break;
     case 8:
      
      
      
      HEAP[$lz_addr + 12] = $stepped_up;
      
      $0 = $long_cnt;
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
  function _count_next($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $retval;
      var $0;
      $lz_addr = $lz;
      
      
      
      
      var $5 = $lz_addr;
      if (HEAP[$lz_addr + 8] == 2147483647) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $6 = _count_nextlong($5);
      $0 = $6;
      __label__ = 3;
      break;
     case 2:
      
      var $8 = HEAP[$5 + 8];
      var $9 = $8 + 1;
      
      
      HEAP[$lz_addr + 8] = $9;
      var $12 = _PyInt_FromSsize_t($8);
      $0 = $12;
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
  function _count_repr($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $retval;
      var $0;
      var $cnt_repr;
      var $step_repr;
      var $result;
      $lz_addr = $lz;
      $step_repr = 0;
      $result = 0;
      
      
      
      
      var $5 = $lz_addr;
      if (HEAP[$lz_addr + 8] != 2147483647) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $7 = HEAP[$5 + 8];
      var $8 = _PyString_FromFormat(__str73, allocate([ $7, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = $8;
      __label__ = 15;
      break;
     case 2:
      
      var $10 = HEAP[$5 + 12];
      var $11 = _PyObject_Repr($10);
      $cnt_repr = $11;
      
      
      if ($cnt_repr == 0) {
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
      
      
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$lz_addr + 16] + 4] + 84] & 8388608) == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$lz_addr + 16] + 8] != 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      var $34 = _PyString_FromFormat(__str74, allocate([ $cnt_repr + 20, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $result = $34;
      __label__ = 9;
      break;
     case 7:
      
      
      var $37 = HEAP[$lz_addr + 16];
      var $38 = _PyObject_Repr($37);
      $step_repr = $38;
      
      if ($38 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      
      var $48 = _PyString_FromFormat(__str75, allocate([ $cnt_repr + 20, 0, 0, 0, $step_repr + 20, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $result = $48;
      __label__ = 9;
      break;
     case 9:
      
      
      
      var $52 = HEAP[$cnt_repr] - 1;
      
      
      HEAP[$cnt_repr] = $52;
      
      
      
      
      if (HEAP[$cnt_repr] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $63 = HEAP[HEAP[$cnt_repr + 4] + 24];
      
      FUNCTION_TABLE[$63]($cnt_repr);
      __label__ = 11;
      break;
     case 11:
      
      
      if ($step_repr != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      
      var $70 = HEAP[$step_repr] - 1;
      
      
      HEAP[$step_repr] = $70;
      
      
      
      
      if (HEAP[$step_repr] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $81 = HEAP[HEAP[$step_repr + 4] + 24];
      
      FUNCTION_TABLE[$81]($step_repr);
      __label__ = 14;
      break;
     case 14:
      
      $0 = $result;
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
  function _count_reduce($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $retval;
      var $0;
      $lz_addr = $lz;
      
      
      
      
      var $5 = $lz_addr;
      if (HEAP[$lz_addr + 8] == 2147483647) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $7 = HEAP[$5 + 16];
      
      
      var $10 = HEAP[$lz_addr + 12];
      
      
      
      var $14 = HEAP[$lz_addr + 4];
      var $15 = _Py_BuildValue(__str76, allocate([ $14, 0, 0, 0, $10, 0, 0, 0, $7, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $15;
      __label__ = 3;
      break;
     case 2:
      
      var $17 = HEAP[$5 + 8];
      
      
      
      var $21 = HEAP[$lz_addr + 4];
      var $22 = _Py_BuildValue(__str77, allocate([ $21, 0, 0, 0, $17, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = $22;
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
  function _izip_new($type, $args, $kwds) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $lz;
      var $i;
      var $ittuple;
      var $result;
      var $tuplesize;
      var $item;
      var $it;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      var $2 = _PySequence_Size($args_addr);
      $tuplesize = $2;
      
      
      if ($type_addr == _izip_type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $6 = __PyArg_NoKeywords(__str80, $kwds_addr);
      
      if ($6 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 29;
      break;
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$args_addr + 4] + 84] & 67108864) == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str43, __str5, 3477, ___PRETTY_FUNCTION___12009);
      throw "Reached an unreachable!";
     case 5:
      
      var $16 = _PyTuple_New($tuplesize);
      $ittuple = $16;
      
      
      if ($ittuple == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 29;
      break;
     case 7:
      $i = 0;
      __label__ = 15;
      break;
     case 8:
      
      
      
      
      
      
      $item = HEAP[$args_addr + 12 + $i * 4];
      
      var $26 = _PyObject_GetIter($item);
      $it = $26;
      
      
      if ($it == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 9:
      var $29 = HEAP[_PyExc_TypeError];
      var $30 = _PyErr_ExceptionMatches($29);
      
      if ($30 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      var $34 = HEAP[_PyExc_TypeError];
      var $35 = _PyErr_Format($34, __str81, allocate([ $i + 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 11;
      break;
     case 11:
      
      
      
      var $39 = HEAP[$ittuple] - 1;
      
      
      HEAP[$ittuple] = $39;
      
      
      
      
      if (HEAP[$ittuple] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $50 = HEAP[HEAP[$ittuple + 4] + 24];
      
      FUNCTION_TABLE[$50]($ittuple);
      __label__ = 13;
      break;
     case 13:
      $0 = 0;
      __label__ = 29;
      break;
     case 14:
      
      
      
      
      
      
      HEAP[$ittuple + 12 + $i * 4] = $it;
      
      var $59 = $i + 1;
      $i = $59;
      __label__ = 15;
      break;
     case 15:
      
      
      
      if ($i < $tuplesize) {
        __label__ = 8;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      var $64 = _PyTuple_New($tuplesize);
      $result = $64;
      
      
      if ($result == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      
      
      
      var $70 = HEAP[$ittuple] - 1;
      
      
      HEAP[$ittuple] = $70;
      
      
      
      
      if (HEAP[$ittuple] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $81 = HEAP[HEAP[$ittuple + 4] + 24];
      
      FUNCTION_TABLE[$81]($ittuple);
      __label__ = 19;
      break;
     case 19:
      $0 = 0;
      __label__ = 29;
      break;
     case 20:
      $i = 0;
      
      
      
      if ($i < $tuplesize) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      var $87 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $87;
      
      
      
      
      
      HEAP[$result + 12 + $i * 4] = __Py_NoneStruct;
      
      var $94 = $i + 1;
      $i = $94;
      
      
      
      if ($i < $tuplesize) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      var $100 = HEAP[$type_addr + 152];
      
      var $102 = FUNCTION_TABLE[$100]($type_addr, 0);
      
      $lz = $102;
      
      if ($102 == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 23:
      
      
      
      var $108 = HEAP[$ittuple] - 1;
      
      
      HEAP[$ittuple] = $108;
      
      
      
      
      if (HEAP[$ittuple] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $119 = HEAP[HEAP[$ittuple + 4] + 24];
      
      FUNCTION_TABLE[$119]($ittuple);
      __label__ = 25;
      break;
     case 25:
      
      
      
      var $124 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $124;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $135 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$135]($result);
      __label__ = 27;
      break;
     case 27:
      $0 = 0;
      __label__ = 29;
      break;
     case 28:
      
      
      
      HEAP[$lz + 12] = $ittuple;
      
      
      
      HEAP[$lz + 8] = $tuplesize;
      
      
      
      HEAP[$lz + 16] = $result;
      
      
      $0 = $lz;
      __label__ = 29;
      break;
     case 29:
      
      $retval = $0;
      var $retval30 = $retval;
      return $retval30;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _izip_dealloc($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      $lz_addr = $lz;
      
      
      _PyObject_GC_UnTrack($lz_addr);
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$lz_addr + 12];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$lz_addr + 12] + 4] + 24];
      
      
      var $25 = HEAP[$lz_addr + 12];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[$lz_addr + 16];
      
      
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
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$lz_addr + 16] + 4] + 24];
      
      
      var $49 = HEAP[$lz_addr + 16];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $55 = HEAP[HEAP[$lz_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$55]($lz_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _izip_traverse($lz, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      $lz_addr = $lz;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$lz_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$lz_addr + 12];
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
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$lz_addr + 16];
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
      __label__ = 7;
      break;
     case 6:
      $0 = 0;
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
  function _izip_next($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $retval;
      var $0;
      var $i;
      var $tuplesize;
      var $result;
      var $it;
      var $item;
      var $olditem;
      $lz_addr = $lz;
      
      
      
      $tuplesize = HEAP[$lz_addr + 8];
      
      
      
      $result = HEAP[$lz_addr + 16];
      
      
      if ($tuplesize == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 22;
      break;
     case 2:
      
      
      
      
      if (HEAP[$result] == 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 3:
      
      
      
      var $16 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $16;
      $i = 0;
      __label__ = 11;
      break;
     case 4:
      
      
      
      
      
      
      
      
      $it = HEAP[HEAP[$lz_addr + 12] + 12 + $i * 4];
      
      
      
      
      var $31 = HEAP[HEAP[$it + 4] + 112];
      
      var $33 = FUNCTION_TABLE[$31]($it);
      $item = $33;
      
      
      var $36 = $result;
      if ($item == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      var $39 = HEAP[$36] - 1;
      
      
      HEAP[$result] = $39;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $50 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$50]($result);
      __label__ = 7;
      break;
     case 7:
      $0 = 0;
      __label__ = 22;
      break;
     case 8:
      
      
      
      
      
      $olditem = HEAP[$36 + 12 + $i * 4];
      
      
      
      
      
      
      HEAP[$result + 12 + $i * 4] = $item;
      
      
      
      var $66 = HEAP[$olditem] - 1;
      
      
      HEAP[$olditem] = $66;
      
      
      
      
      if (HEAP[$olditem] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $77 = HEAP[HEAP[$olditem + 4] + 24];
      
      FUNCTION_TABLE[$77]($olditem);
      __label__ = 10;
      break;
     case 10:
      
      var $80 = $i + 1;
      $i = $80;
      __label__ = 11;
      break;
     case 11:
      
      
      
      if ($i < $tuplesize) {
        __label__ = 4;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 12:
      
      var $85 = _PyTuple_New($tuplesize);
      $result = $85;
      
      
      if ($result == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = 0;
      __label__ = 22;
      break;
     case 14:
      $i = 0;
      __label__ = 20;
      break;
     case 15:
      
      
      
      
      
      
      
      
      $it = HEAP[HEAP[$lz_addr + 12] + 12 + $i * 4];
      
      
      
      
      var $100 = HEAP[HEAP[$it + 4] + 112];
      
      var $102 = FUNCTION_TABLE[$100]($it);
      $item = $102;
      
      
      var $105 = $result;
      if ($item == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      
      
      var $108 = HEAP[$105] - 1;
      
      
      HEAP[$result] = $108;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $119 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$119]($result);
      __label__ = 18;
      break;
     case 18:
      $0 = 0;
      __label__ = 22;
      break;
     case 19:
      
      
      
      
      
      HEAP[$105 + 12 + $i * 4] = $item;
      
      var $127 = $i + 1;
      $i = $127;
      __label__ = 20;
      break;
     case 20:
      
      
      
      if ($i < $tuplesize) {
        __label__ = 15;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      $0 = $result;
      __label__ = 22;
      break;
     case 22:
      
      $retval = $0;
      var $retval23 = $retval;
      return $retval23;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _repeat_new($type, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $ro;
      var $element = __stackBase__;
      var $cnt = __stackBase__ + 4;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      HEAP[$cnt] = -1;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwds_addr, __str83, _kwargs_12229, allocate([ $element, 0, 0, 0, $cnt, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      var $6 = _PyTuple_Size($args_addr);
      
      if ($6 == 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      if (HEAP[$cnt] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$cnt] = 0;
      __label__ = 5;
      break;
     case 5:
      
      
      var $12 = HEAP[$type_addr + 152];
      
      var $14 = FUNCTION_TABLE[$12]($type_addr, 0);
      
      $ro = $14;
      
      if ($14 == 0) {
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
      
      
      
      var $20 = HEAP[HEAP[$element]] + 1;
      var $21 = HEAP[$element];
      HEAP[$21] = $20;
      var $22 = HEAP[$element];
      
      
      HEAP[$ro + 8] = $22;
      var $25 = HEAP[$cnt];
      
      
      HEAP[$ro + 12] = $25;
      
      
      $0 = $ro;
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
  function _repeat_dealloc($ro) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ro_addr;
      $ro_addr = $ro;
      
      
      _PyObject_GC_UnTrack($ro_addr);
      
      
      
      
      if (HEAP[$ro_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$ro_addr + 8];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$ro_addr + 8] + 4] + 24];
      
      
      var $25 = HEAP[$ro_addr + 8];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      var $31 = HEAP[HEAP[$ro_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$31]($ro_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _repeat_traverse($ro, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ro_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      $ro_addr = $ro;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$ro_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$ro_addr + 8];
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
  function _repeat_next($ro) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ro_addr;
      var $retval;
      var $0;
      $ro_addr = $ro;
      
      
      
      
      if (HEAP[$ro_addr + 12] == 0) {
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
      
      
      
      
      if (HEAP[$ro_addr + 12] > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $12 = HEAP[$ro_addr + 12] - 1;
      
      
      HEAP[$ro_addr + 12] = $12;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      var $20 = HEAP[HEAP[$ro_addr + 8]] + 1;
      var $21 = HEAP[$ro_addr + 8];
      HEAP[$21] = $20;
      
      
      
      $0 = HEAP[$ro_addr + 8];
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
  function _repeat_repr($ro) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ro_addr;
      var $retval;
      var $0;
      var $result;
      var $objrepr;
      $ro_addr = $ro;
      
      
      var $3 = HEAP[$ro_addr + 8];
      var $4 = _PyObject_Repr($3);
      $objrepr = $4;
      
      
      if ($objrepr == 0) {
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
      
      
      
      var $10 = HEAP[$ro_addr + 12] == -1;
      if ($10) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $15 = _PyString_FromFormat(__str86, allocate([ $objrepr + 20, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $result = $15;
      __label__ = 5;
      break;
     case 4:
      
      
      var $18 = HEAP[$ro_addr + 12];
      
      
      
      
      var $23 = _PyString_FromFormat(__str87, allocate([ $objrepr + 20, 0, 0, 0, $18, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $result = $23;
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $27 = HEAP[$objrepr] - 1;
      
      
      HEAP[$objrepr] = $27;
      
      
      
      
      if (HEAP[$objrepr] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $38 = HEAP[HEAP[$objrepr + 4] + 24];
      
      FUNCTION_TABLE[$38]($objrepr);
      __label__ = 7;
      break;
     case 7:
      
      $0 = $result;
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
  function _repeat_len($ro) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ro_addr;
      var $retval;
      var $0;
      $ro_addr = $ro;
      
      
      
      var $4 = HEAP[$ro_addr + 12] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($5, __str88);
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      var $8 = HEAP[$ro_addr + 12];
      var $9 = _PyInt_FromSize_t($8);
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
  function _izip_longest_new($type, $args, $kwds) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $lz;
      var $i;
      var $ittuple;
      var $result;
      var $fillvalue;
      var $tuplesize;
      var $item;
      var $it;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      $fillvalue = __Py_NoneStruct;
      
      var $2 = _PySequence_Size($args_addr);
      $tuplesize = $2;
      
      
      if ($kwds_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$kwds_addr + 4] == _PyDict_Type) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      
      var $10 = _PyDict_Size($kwds_addr);
      
      if ($10 > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      var $13 = _PyDict_GetItemString($kwds_addr, __str91);
      $fillvalue = $13;
      
      
      if ($fillvalue == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $17 = _PyDict_Size($kwds_addr);
      
      if ($17 > 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $19 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($19, __str92);
      $0 = 0;
      __label__ = 32;
      break;
     case 6:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$args_addr + 4] + 84] & 67108864) == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      ___assert_fail(__str43, __str5, 3816, ___PRETTY_FUNCTION___12366);
      throw "Reached an unreachable!";
     case 8:
      
      var $28 = _PyTuple_New($tuplesize);
      $ittuple = $28;
      
      
      if ($ittuple == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = 0;
      __label__ = 32;
      break;
     case 10:
      $i = 0;
      __label__ = 18;
      break;
     case 11:
      
      
      
      
      
      
      $item = HEAP[$args_addr + 12 + $i * 4];
      
      var $38 = _PyObject_GetIter($item);
      $it = $38;
      
      
      if ($it == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 12:
      var $41 = HEAP[_PyExc_TypeError];
      var $42 = _PyErr_ExceptionMatches($41);
      
      if ($42 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      var $46 = HEAP[_PyExc_TypeError];
      var $47 = _PyErr_Format($46, __str93, allocate([ $i + 1, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 14;
      break;
     case 14:
      
      
      
      var $51 = HEAP[$ittuple] - 1;
      
      
      HEAP[$ittuple] = $51;
      
      
      
      
      if (HEAP[$ittuple] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $62 = HEAP[HEAP[$ittuple + 4] + 24];
      
      FUNCTION_TABLE[$62]($ittuple);
      __label__ = 16;
      break;
     case 16:
      $0 = 0;
      __label__ = 32;
      break;
     case 17:
      
      
      
      
      
      
      HEAP[$ittuple + 12 + $i * 4] = $it;
      
      var $71 = $i + 1;
      $i = $71;
      __label__ = 18;
      break;
     case 18:
      
      
      
      if ($i < $tuplesize) {
        __label__ = 11;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      var $76 = _PyTuple_New($tuplesize);
      $result = $76;
      
      
      if ($result == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      
      
      
      var $82 = HEAP[$ittuple] - 1;
      
      
      HEAP[$ittuple] = $82;
      
      
      
      
      if (HEAP[$ittuple] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $93 = HEAP[HEAP[$ittuple + 4] + 24];
      
      FUNCTION_TABLE[$93]($ittuple);
      __label__ = 22;
      break;
     case 22:
      $0 = 0;
      __label__ = 32;
      break;
     case 23:
      $i = 0;
      
      
      
      if ($i < $tuplesize) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      var $99 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $99;
      
      
      
      
      
      HEAP[$result + 12 + $i * 4] = __Py_NoneStruct;
      
      var $106 = $i + 1;
      $i = $106;
      
      
      
      if ($i < $tuplesize) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      var $112 = HEAP[$type_addr + 152];
      
      var $114 = FUNCTION_TABLE[$112]($type_addr, 0);
      
      $lz = $114;
      
      if ($114 == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 26:
      
      
      
      var $120 = HEAP[$ittuple] - 1;
      
      
      HEAP[$ittuple] = $120;
      
      
      
      
      if (HEAP[$ittuple] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $131 = HEAP[HEAP[$ittuple + 4] + 24];
      
      FUNCTION_TABLE[$131]($ittuple);
      __label__ = 28;
      break;
     case 28:
      
      
      
      var $136 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $136;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $147 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$147]($result);
      __label__ = 30;
      break;
     case 30:
      $0 = 0;
      __label__ = 32;
      break;
     case 31:
      
      
      
      HEAP[$lz + 16] = $ittuple;
      
      
      
      HEAP[$lz + 8] = $tuplesize;
      
      
      
      HEAP[$lz + 12] = $tuplesize;
      
      
      
      HEAP[$lz + 20] = $result;
      
      
      
      var $164 = HEAP[$fillvalue] + 1;
      
      
      HEAP[$fillvalue] = $164;
      
      
      
      HEAP[$lz + 24] = $fillvalue;
      
      
      $0 = $lz;
      __label__ = 32;
      break;
     case 32:
      
      $retval = $0;
      var $retval33 = $retval;
      return $retval33;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _izip_longest_dealloc($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      $lz_addr = $lz;
      
      
      _PyObject_GC_UnTrack($lz_addr);
      
      
      
      
      if (HEAP[$lz_addr + 16] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$lz_addr + 16];
      
      
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
      
      
      
      
      
      
      var $22 = HEAP[HEAP[HEAP[$lz_addr + 16] + 4] + 24];
      
      
      var $25 = HEAP[$lz_addr + 16];
      FUNCTION_TABLE[$22]($25);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $32 = HEAP[$lz_addr + 20];
      
      
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
      
      
      
      
      
      
      var $46 = HEAP[HEAP[HEAP[$lz_addr + 20] + 4] + 24];
      
      
      var $49 = HEAP[$lz_addr + 20];
      FUNCTION_TABLE[$46]($49);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$lz_addr + 24] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $56 = HEAP[$lz_addr + 24];
      
      
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
      
      
      
      
      
      
      var $70 = HEAP[HEAP[HEAP[$lz_addr + 24] + 4] + 24];
      
      
      var $73 = HEAP[$lz_addr + 24];
      FUNCTION_TABLE[$70]($73);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      
      var $79 = HEAP[HEAP[$lz_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$79]($lz_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _izip_longest_traverse($lz, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $vret;
      var $vret4;
      var $vret8;
      $lz_addr = $lz;
      $visit_addr = $visit;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$lz_addr + 16] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$lz_addr + 16];
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
      __label__ = 10;
      break;
     case 3:
      
      
      
      
      if (HEAP[$lz_addr + 20] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$lz_addr + 20];
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
      __label__ = 10;
      break;
     case 6:
      
      
      
      
      if (HEAP[$lz_addr + 24] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $33 = HEAP[$lz_addr + 24];
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
      __label__ = 10;
      break;
     case 9:
      $0 = 0;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval12 = $retval;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _izip_longest_next($lz) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $lz_addr;
      var $retval;
      var $0;
      var $i;
      var $tuplesize;
      var $result;
      var $it;
      var $item;
      var $olditem;
      $lz_addr = $lz;
      
      
      
      $tuplesize = HEAP[$lz_addr + 8];
      
      
      
      $result = HEAP[$lz_addr + 20];
      
      
      if ($tuplesize == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 36;
      break;
     case 2:
      
      
      
      
      if (HEAP[$lz_addr + 12] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 36;
      break;
     case 4:
      
      
      
      
      if (HEAP[$result] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 5:
      
      
      
      var $20 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $20;
      $i = 0;
      __label__ = 19;
      break;
     case 6:
      
      
      
      
      
      
      
      
      $it = HEAP[HEAP[$lz_addr + 16] + 12 + $i * 4];
      
      
      if ($it == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      var $38 = HEAP[HEAP[$lz_addr + 24]] + 1;
      var $39 = HEAP[$lz_addr + 24];
      HEAP[$39] = $38;
      
      
      
      $item = HEAP[$lz_addr + 24];
      __label__ = 16;
      break;
     case 8:
      
      var $44 = _PyIter_Next($it);
      $item = $44;
      
      
      if ($item == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 9:
      
      
      
      var $50 = HEAP[$lz_addr + 12] - 1;
      
      
      HEAP[$lz_addr + 12] = $50;
      
      
      
      
      if (HEAP[$lz_addr + 12] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      var $57 = _PyErr_Occurred();
      
      if ($57 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      HEAP[$lz_addr + 12] = 0;
      
      
      
      var $64 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $64;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $75 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$75]($result);
      __label__ = 13;
      break;
     case 13:
      $0 = 0;
      __label__ = 36;
      break;
     case 14:
      
      
      
      
      
      var $82 = HEAP[HEAP[$lz_addr + 24]] + 1;
      var $83 = HEAP[$lz_addr + 24];
      HEAP[$83] = $82;
      
      
      
      $item = HEAP[$lz_addr + 24];
      
      
      
      
      
      
      var $93 = HEAP[$lz_addr + 16] + 12 + $i * 4;
      HEAP[$93] = 0;
      
      
      
      var $97 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $97;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $108 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$108]($it);
      __label__ = 16;
      break;
     case 16:
      
      
      
      
      
      
      $olditem = HEAP[$result + 12 + $i * 4];
      
      
      
      
      
      
      HEAP[$result + 12 + $i * 4] = $item;
      
      
      
      var $125 = HEAP[$olditem] - 1;
      
      
      HEAP[$olditem] = $125;
      
      
      
      
      if (HEAP[$olditem] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $136 = HEAP[HEAP[$olditem + 4] + 24];
      
      FUNCTION_TABLE[$136]($olditem);
      __label__ = 18;
      break;
     case 18:
      
      var $139 = $i + 1;
      $i = $139;
      __label__ = 19;
      break;
     case 19:
      
      
      
      if ($i < $tuplesize) {
        __label__ = 6;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 20:
      
      var $144 = _PyTuple_New($tuplesize);
      $result = $144;
      
      
      if ($result == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      $0 = 0;
      __label__ = 36;
      break;
     case 22:
      $i = 0;
      __label__ = 34;
      break;
     case 23:
      
      
      
      
      
      
      
      
      $it = HEAP[HEAP[$lz_addr + 16] + 12 + $i * 4];
      
      
      if ($it == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      
      var $162 = HEAP[HEAP[$lz_addr + 24]] + 1;
      var $163 = HEAP[$lz_addr + 24];
      HEAP[$163] = $162;
      
      
      
      $item = HEAP[$lz_addr + 24];
      __label__ = 33;
      break;
     case 25:
      
      var $168 = _PyIter_Next($it);
      $item = $168;
      
      
      if ($item == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 26:
      
      
      
      var $174 = HEAP[$lz_addr + 12] - 1;
      
      
      HEAP[$lz_addr + 12] = $174;
      
      
      
      
      if (HEAP[$lz_addr + 12] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      var $181 = _PyErr_Occurred();
      
      if ($181 != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 28:
      
      
      HEAP[$lz_addr + 12] = 0;
      
      
      
      var $188 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $188;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $199 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$199]($result);
      __label__ = 30;
      break;
     case 30:
      $0 = 0;
      __label__ = 36;
      break;
     case 31:
      
      
      
      
      
      var $206 = HEAP[HEAP[$lz_addr + 24]] + 1;
      var $207 = HEAP[$lz_addr + 24];
      HEAP[$207] = $206;
      
      
      
      $item = HEAP[$lz_addr + 24];
      
      
      
      
      
      
      var $217 = HEAP[$lz_addr + 16] + 12 + $i * 4;
      HEAP[$217] = 0;
      
      
      
      var $221 = HEAP[$it] - 1;
      
      
      HEAP[$it] = $221;
      
      
      
      
      if (HEAP[$it] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      var $232 = HEAP[HEAP[$it + 4] + 24];
      
      FUNCTION_TABLE[$232]($it);
      __label__ = 33;
      break;
     case 33:
      
      
      
      
      
      
      HEAP[$result + 12 + $i * 4] = $item;
      
      var $241 = $i + 1;
      $i = $241;
      __label__ = 34;
      break;
     case 34:
      
      
      
      if ($i < $tuplesize) {
        __label__ = 23;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      $0 = $result;
      __label__ = 36;
      break;
     case 36:
      
      $retval = $0;
      var $retval37 = $retval;
      return $retval37;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _inititertools() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 80;
    _memset(__stackBase__, 0, 80);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $i;
      var $m;
      var $name;
      var $typelist = __stackBase__;
      var $typelist1 = $typelist;
      _llvm_memcpy_p0i8_p0i8_i32($typelist1, _C_280_12667, 80, 4, 0);
      HEAP[_teedataobject_type + 4] = _PyType_Type;
      var $0 = _Py_InitModule4(__str95, _module_methods, _module_doc, 0, 1013);
      $m = $0;
      
      
      if ($m == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      $i = 0;
      __label__ = 6;
      break;
     case 2:
      
      
      var $5 = HEAP[$typelist + $i * 4];
      var $6 = _PyType_Ready($5);
      
      if ($6 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      var $12 = HEAP[HEAP[$typelist + $i * 4] + 12];
      var $13 = _strchr($12, 46);
      $name = $13;
      
      
      if ($name == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str96, __str5, 4086, ___PRETTY_FUNCTION___12663);
      throw "Reached an unreachable!";
     case 5:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[$typelist + $i * 4]] + 1;
      var $23 = HEAP[$typelist + $i * 4];
      HEAP[$23] = $22;
      
      
      
      var $27 = HEAP[$typelist + $i * 4];
      
      
      
      var $31 = _PyModule_AddObject($m, $name + 1, $27);
      
      var $33 = $i + 1;
      $i = $33;
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$typelist + $i * 4] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      var $38 = _PyType_Ready(_teedataobject_type);
      
      if ($38 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $40 = _PyType_Ready(_tee_type);
      
      if ($40 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $42 = _PyType_Ready(__grouper_type);
      __label__ = 10;
      break;
     case 10:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_inititertools"] = _inititertools;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _groupby_dealloc, 0, _PyObject_GenericGetAttr, 0, _groupby_traverse, 0, _PyObject_SelfIter, 0, _groupby_next, 0, _groupby_new, 0, _PyObject_GC_Del, 0, __grouper_dealloc, 0, __grouper_traverse, 0, __grouper_next, 0, _teedataobject_dealloc, 0, _teedataobject_traverse, 0, _teedataobject_clear, 0, _tee_copy, 0, _tee_dealloc, 0, _tee_traverse, 0, _tee_clear, 0, _tee_next, 0, _tee_new, 0, _cycle_dealloc, 0, _cycle_traverse, 0, _cycle_next, 0, _cycle_new, 0, _dropwhile_dealloc, 0, _dropwhile_traverse, 0, _dropwhile_next, 0, _dropwhile_new, 0, _takewhile_dealloc, 0, _takewhile_traverse, 0, _takewhile_next, 0, _takewhile_new, 0, _islice_dealloc, 0, _islice_traverse, 0, _islice_next, 0, _islice_new, 0, _starmap_dealloc, 0, _starmap_traverse, 0, _starmap_next, 0, _starmap_new, 0, _imap_dealloc, 0, _imap_traverse, 0, _imap_next, 0, _imap_new, 0, _chain_new_from_iterable, 0, _chain_dealloc, 0, _chain_traverse, 0, _chain_next, 0, _chain_new, 0, _product_dealloc, 0, _product_traverse, 0, _product_next, 0, _product_new, 0, _combinations_dealloc, 0, _combinations_traverse, 0, _combinations_next, 0, _combinations_new, 0, _cwr_dealloc, 0, _cwr_traverse, 0, _cwr_next, 0, _cwr_new, 0, _permutations_dealloc, 0, _permutations_traverse, 0, _permutations_next, 0, _permutations_new, 0, _compress_dealloc, 0, _compress_traverse, 0, _compress_next, 0, _compress_new, 0, _ifilter_dealloc, 0, _ifilter_traverse, 0, _ifilter_next, 0, _ifilter_new, 0, _ifilterfalse_dealloc, 0, _ifilterfalse_traverse, 0, _ifilterfalse_next, 0, _ifilterfalse_new, 0, _count_reduce, 0, _count_dealloc, 0, _count_repr, 0, _count_traverse, 0, _count_next, 0, _count_new, 0, _izip_dealloc, 0, _izip_traverse, 0, _izip_next, 0, _izip_new, 0, _repeat_len, 0, _repeat_dealloc, 0, _repeat_repr, 0, _repeat_traverse, 0, _repeat_next, 0, _repeat_new, 0, _izip_longest_dealloc, 0, _izip_longest_traverse, 0, _izip_longest_next, 0, _izip_longest_new, 0, _tee, 0 ]);
  function run(args) {
    __str = allocate([ 79, 124, 79, 58, 103, 114, 111, 117, 112, 98, 121, 0 ], "i8", ALLOC_NORMAL);
    _kwargs_8351 = allocate(12, "i8*", ALLOC_NORMAL);
    __str1 = allocate([ 105, 116, 101, 114, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 107, 101, 121, 0 ], "i8", ALLOC_NORMAL);
    _groupby_doc = allocate([ 103, 114, 111, 117, 112, 98, 121, 40, 105, 116, 101, 114, 97, 98, 108, 101, 91, 44, 32, 107, 101, 121, 102, 117, 110, 99, 93, 41, 32, 45, 62, 32, 99, 114, 101, 97, 116, 101, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 119, 104, 105, 99, 104, 32, 114, 101, 116, 117, 114, 110, 115, 10, 40, 107, 101, 121, 44, 32, 115, 117, 98, 45, 105, 116, 101, 114, 97, 116, 111, 114, 41, 32, 103, 114, 111, 117, 112, 101, 100, 32, 98, 121, 32, 101, 97, 99, 104, 32, 118, 97, 108, 117, 101, 32, 111, 102, 32, 107, 101, 121, 40, 118, 97, 108, 117, 101, 41, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 103, 114, 111, 117, 112, 98, 121, 0 ], "i8", ALLOC_NORMAL);
    _groupby_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str4 = allocate([ 103, 98, 111, 45, 62, 99, 117, 114, 114, 107, 101, 121, 32, 61, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 105, 116, 101, 114, 116, 111, 111, 108, 115, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8669 = allocate([ 95, 103, 114, 111, 117, 112, 101, 114, 95, 110, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 103, 98, 111, 45, 62, 99, 117, 114, 114, 107, 101, 121, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 95, 103, 114, 111, 117, 112, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __grouper_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str8 = allocate([ 105, 32, 60, 32, 53, 55, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8768 = allocate([ 116, 101, 101, 100, 97, 116, 97, 111, 98, 106, 101, 99, 116, 95, 103, 101, 116, 105, 116, 101, 109, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 105, 32, 61, 61, 32, 116, 100, 111, 45, 62, 110, 117, 109, 114, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    _teedataobject_doc = allocate([ 68, 97, 116, 97, 32, 99, 111, 110, 116, 97, 105, 110, 101, 114, 32, 99, 111, 109, 109, 111, 110, 32, 116, 111, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 116, 101, 101, 32, 111, 98, 106, 101, 99, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 116, 101, 101, 95, 100, 97, 116, 97, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _teedataobject_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _teecopy_doc = allocate([ 82, 101, 116, 117, 114, 110, 115, 32, 97, 110, 32, 105, 110, 100, 101, 112, 101, 110, 100, 101, 110, 116, 32, 105, 116, 101, 114, 97, 116, 111, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 116, 101, 101, 0 ], "i8", ALLOC_NORMAL);
    _teeobject_doc = allocate([ 73, 116, 101, 114, 97, 116, 111, 114, 32, 119, 114, 97, 112, 112, 101, 100, 32, 116, 111, 32, 109, 97, 107, 101, 32, 105, 116, 32, 99, 111, 112, 121, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 95, 95, 99, 111, 112, 121, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _tee_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str13 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 116, 101, 101, 0 ], "i8", ALLOC_NORMAL);
    _tee_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str14 = allocate([ 79, 124, 110, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 110, 32, 109, 117, 115, 116, 32, 98, 101, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    _tee_doc = allocate([ 116, 101, 101, 40, 105, 116, 101, 114, 97, 98, 108, 101, 44, 32, 110, 61, 50, 41, 32, 45, 45, 62, 32, 116, 117, 112, 108, 101, 32, 111, 102, 32, 110, 32, 105, 110, 100, 101, 112, 101, 110, 100, 101, 110, 116, 32, 105, 116, 101, 114, 97, 116, 111, 114, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 99, 121, 99, 108, 101, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 99, 121, 99, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _cycle_doc = allocate([ 99, 121, 99, 108, 101, 40, 105, 116, 101, 114, 97, 98, 108, 101, 41, 32, 45, 45, 62, 32, 99, 121, 99, 108, 101, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 117, 110, 116, 105, 108, 32, 105, 116, 32, 105, 115, 32, 101, 120, 104, 97, 117, 115, 116, 101, 100, 46, 10, 84, 104, 101, 110, 32, 114, 101, 112, 101, 97, 116, 32, 116, 104, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 105, 110, 100, 101, 102, 105, 110, 105, 116, 101, 108, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 99, 121, 99, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _cycle_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str19 = allocate([ 100, 114, 111, 112, 119, 104, 105, 108, 101, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 100, 114, 111, 112, 119, 104, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _dropwhile_doc = allocate([ 100, 114, 111, 112, 119, 104, 105, 108, 101, 40, 112, 114, 101, 100, 105, 99, 97, 116, 101, 44, 32, 105, 116, 101, 114, 97, 98, 108, 101, 41, 32, 45, 45, 62, 32, 100, 114, 111, 112, 119, 104, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 10, 10, 68, 114, 111, 112, 32, 105, 116, 101, 109, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 119, 104, 105, 108, 101, 32, 112, 114, 101, 100, 105, 99, 97, 116, 101, 40, 105, 116, 101, 109, 41, 32, 105, 115, 32, 116, 114, 117, 101, 46, 10, 65, 102, 116, 101, 114, 119, 97, 114, 100, 115, 44, 32, 114, 101, 116, 117, 114, 110, 32, 101, 118, 101, 114, 121, 32, 101, 108, 101, 109, 101, 110, 116, 32, 117, 110, 116, 105, 108, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 105, 115, 32, 101, 120, 104, 97, 117, 115, 116, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 100, 114, 111, 112, 119, 104, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _dropwhile_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str22 = allocate([ 116, 97, 107, 101, 119, 104, 105, 108, 101, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 116, 97, 107, 101, 119, 104, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _takewhile_doc = allocate([ 116, 97, 107, 101, 119, 104, 105, 108, 101, 40, 112, 114, 101, 100, 105, 99, 97, 116, 101, 44, 32, 105, 116, 101, 114, 97, 98, 108, 101, 41, 32, 45, 45, 62, 32, 116, 97, 107, 101, 119, 104, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 115, 117, 99, 99, 101, 115, 115, 105, 118, 101, 32, 101, 110, 116, 114, 105, 101, 115, 32, 102, 114, 111, 109, 32, 97, 110, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 97, 115, 32, 108, 111, 110, 103, 32, 97, 115, 32, 116, 104, 101, 32, 10, 112, 114, 101, 100, 105, 99, 97, 116, 101, 32, 101, 118, 97, 108, 117, 97, 116, 101, 115, 32, 116, 111, 32, 116, 114, 117, 101, 32, 102, 111, 114, 32, 101, 97, 99, 104, 32, 101, 110, 116, 114, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 116, 97, 107, 101, 119, 104, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _takewhile_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str25 = allocate([ 105, 115, 108, 105, 99, 101, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 105, 115, 108, 105, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 83, 116, 111, 112, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 102, 111, 114, 32, 105, 115, 108, 105, 99, 101, 40, 41, 32, 109, 117, 115, 116, 32, 98, 101, 32, 78, 111, 110, 101, 32, 111, 114, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 58, 32, 48, 32, 60, 61, 32, 120, 32, 60, 61, 32, 109, 97, 120, 105, 110, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 73, 110, 100, 105, 99, 101, 115, 32, 102, 111, 114, 32, 105, 115, 108, 105, 99, 101, 40, 41, 32, 109, 117, 115, 116, 32, 98, 101, 32, 78, 111, 110, 101, 32, 111, 114, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 58, 32, 48, 32, 60, 61, 32, 120, 32, 60, 61, 32, 109, 97, 120, 105, 110, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 83, 116, 101, 112, 32, 102, 111, 114, 32, 105, 115, 108, 105, 99, 101, 40, 41, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 112, 111, 115, 105, 116, 105, 118, 101, 32, 105, 110, 116, 101, 103, 101, 114, 32, 111, 114, 32, 78, 111, 110, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _islice_doc = allocate([ 105, 115, 108, 105, 99, 101, 40, 105, 116, 101, 114, 97, 98, 108, 101, 44, 32, 91, 115, 116, 97, 114, 116, 44, 93, 32, 115, 116, 111, 112, 32, 91, 44, 32, 115, 116, 101, 112, 93, 41, 32, 45, 45, 62, 32, 105, 115, 108, 105, 99, 101, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 119, 104, 111, 115, 101, 32, 110, 101, 120, 116, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 114, 101, 116, 117, 114, 110, 115, 32, 115, 101, 108, 101, 99, 116, 101, 100, 32, 118, 97, 108, 117, 101, 115, 32, 102, 114, 111, 109, 32, 97, 110, 10, 105, 116, 101, 114, 97, 98, 108, 101, 46, 32, 32, 73, 102, 32, 115, 116, 97, 114, 116, 32, 105, 115, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 44, 32, 119, 105, 108, 108, 32, 115, 107, 105, 112, 32, 97, 108, 108, 32, 112, 114, 101, 99, 101, 100, 105, 110, 103, 32, 101, 108, 101, 109, 101, 110, 116, 115, 59, 10, 111, 116, 104, 101, 114, 119, 105, 115, 101, 44, 32, 115, 116, 97, 114, 116, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 122, 101, 114, 111, 46, 32, 32, 83, 116, 101, 112, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 111, 110, 101, 46, 32, 32, 73, 102, 10, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 97, 115, 32, 97, 110, 111, 116, 104, 101, 114, 32, 118, 97, 108, 117, 101, 44, 32, 115, 116, 101, 112, 32, 100, 101, 116, 101, 114, 109, 105, 110, 101, 115, 32, 104, 111, 119, 32, 109, 97, 110, 121, 32, 118, 97, 108, 117, 101, 115, 32, 97, 114, 101, 32, 10, 115, 107, 105, 112, 112, 101, 100, 32, 98, 101, 116, 119, 101, 101, 110, 32, 115, 117, 99, 99, 101, 115, 115, 105, 118, 101, 32, 99, 97, 108, 108, 115, 46, 32, 32, 87, 111, 114, 107, 115, 32, 108, 105, 107, 101, 32, 97, 32, 115, 108, 105, 99, 101, 40, 41, 32, 111, 110, 32, 97, 32, 108, 105, 115, 116, 10, 98, 117, 116, 32, 114, 101, 116, 117, 114, 110, 115, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 105, 115, 108, 105, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    _islice_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str31 = allocate([ 115, 116, 97, 114, 109, 97, 112, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 115, 116, 97, 114, 109, 97, 112, 0 ], "i8", ALLOC_NORMAL);
    _starmap_doc = allocate([ 115, 116, 97, 114, 109, 97, 112, 40, 102, 117, 110, 99, 116, 105, 111, 110, 44, 32, 115, 101, 113, 117, 101, 110, 99, 101, 41, 32, 45, 45, 62, 32, 115, 116, 97, 114, 109, 97, 112, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 119, 104, 111, 115, 101, 32, 118, 97, 108, 117, 101, 115, 32, 97, 114, 101, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 101, 118, 97, 108, 117, 97, 116, 101, 100, 10, 119, 105, 116, 104, 32, 97, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 116, 117, 112, 108, 101, 32, 116, 97, 107, 101, 110, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 115, 101, 113, 117, 101, 110, 99, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 115, 116, 97, 114, 109, 97, 112, 0 ], "i8", ALLOC_NORMAL);
    _starmap_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str34 = allocate([ 105, 109, 97, 112, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 105, 109, 97, 112, 40, 41, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 97, 116, 32, 108, 101, 97, 115, 116, 32, 116, 119, 111, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _imap_doc = allocate([ 105, 109, 97, 112, 40, 102, 117, 110, 99, 44, 32, 42, 105, 116, 101, 114, 97, 98, 108, 101, 115, 41, 32, 45, 45, 62, 32, 105, 109, 97, 112, 32, 111, 98, 106, 101, 99, 116, 10, 10, 77, 97, 107, 101, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 116, 104, 97, 116, 32, 99, 111, 109, 112, 117, 116, 101, 115, 32, 116, 104, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 117, 115, 105, 110, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 10, 101, 97, 99, 104, 32, 111, 102, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 115, 46, 32, 32, 76, 105, 107, 101, 32, 109, 97, 112, 40, 41, 32, 101, 120, 99, 101, 112, 116, 32, 116, 104, 97, 116, 32, 105, 116, 32, 114, 101, 116, 117, 114, 110, 115, 10, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 105, 110, 115, 116, 101, 97, 100, 32, 111, 102, 32, 97, 32, 108, 105, 115, 116, 32, 97, 110, 100, 32, 116, 104, 97, 116, 32, 105, 116, 32, 115, 116, 111, 112, 115, 32, 119, 104, 101, 110, 32, 116, 104, 101, 32, 115, 104, 111, 114, 116, 101, 115, 116, 10, 105, 116, 101, 114, 97, 98, 108, 101, 32, 105, 115, 32, 101, 120, 104, 97, 117, 115, 116, 101, 100, 32, 105, 110, 115, 116, 101, 97, 100, 32, 111, 102, 32, 102, 105, 108, 108, 105, 110, 103, 32, 105, 110, 32, 78, 111, 110, 101, 32, 102, 111, 114, 32, 115, 104, 111, 114, 116, 101, 114, 10, 105, 116, 101, 114, 97, 98, 108, 101, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 105, 109, 97, 112, 0 ], "i8", ALLOC_NORMAL);
    _imap_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str37 = allocate([ 99, 104, 97, 105, 110, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    _chain_doc = allocate([ 99, 104, 97, 105, 110, 40, 42, 105, 116, 101, 114, 97, 98, 108, 101, 115, 41, 32, 45, 45, 62, 32, 99, 104, 97, 105, 110, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 104, 97, 105, 110, 32, 111, 98, 106, 101, 99, 116, 32, 119, 104, 111, 115, 101, 32, 46, 110, 101, 120, 116, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 114, 101, 116, 117, 114, 110, 115, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 10, 102, 105, 114, 115, 116, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 117, 110, 116, 105, 108, 32, 105, 116, 32, 105, 115, 32, 101, 120, 104, 97, 117, 115, 116, 101, 100, 44, 32, 116, 104, 101, 110, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 110, 101, 120, 116, 10, 105, 116, 101, 114, 97, 98, 108, 101, 44, 32, 117, 110, 116, 105, 108, 32, 97, 108, 108, 32, 111, 102, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 115, 32, 97, 114, 101, 32, 101, 120, 104, 97, 117, 115, 116, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _chain_from_iterable_doc = allocate([ 99, 104, 97, 105, 110, 46, 102, 114, 111, 109, 95, 105, 116, 101, 114, 97, 98, 108, 101, 40, 105, 116, 101, 114, 97, 98, 108, 101, 41, 32, 45, 45, 62, 32, 99, 104, 97, 105, 110, 32, 111, 98, 106, 101, 99, 116, 10, 10, 65, 108, 116, 101, 114, 110, 97, 116, 101, 32, 99, 104, 97, 105, 110, 40, 41, 32, 99, 111, 110, 116, 114, 117, 99, 116, 111, 114, 32, 116, 97, 107, 105, 110, 103, 32, 97, 32, 115, 105, 110, 103, 108, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 10, 116, 104, 97, 116, 32, 101, 118, 97, 108, 117, 97, 116, 101, 115, 32, 108, 97, 122, 105, 108, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 102, 114, 111, 109, 95, 105, 116, 101, 114, 97, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _chain_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str39 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 99, 104, 97, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    _chain_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str40 = allocate([ 114, 101, 112, 101, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 124, 110, 58, 112, 114, 111, 100, 117, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 114, 101, 112, 101, 97, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 99, 97, 110, 110, 111, 116, 32, 98, 101, 32, 110, 101, 103, 97, 116, 105, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 97, 114, 103, 115, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 54, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10265 = allocate([ 112, 114, 111, 100, 117, 99, 116, 95, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 110, 112, 111, 111, 108, 115, 61, 61, 48, 32, 124, 124, 32, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 114, 101, 115, 117, 108, 116, 41, 41, 45, 62, 111, 98, 95, 114, 101, 102, 99, 110, 116, 41, 32, 61, 61, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10428 = allocate([ 112, 114, 111, 100, 117, 99, 116, 95, 110, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    _product_doc = allocate([ 112, 114, 111, 100, 117, 99, 116, 40, 42, 105, 116, 101, 114, 97, 98, 108, 101, 115, 41, 32, 45, 45, 62, 32, 112, 114, 111, 100, 117, 99, 116, 32, 111, 98, 106, 101, 99, 116, 10, 10, 67, 97, 114, 116, 101, 115, 105, 97, 110, 32, 112, 114, 111, 100, 117, 99, 116, 32, 111, 102, 32, 105, 110, 112, 117, 116, 32, 105, 116, 101, 114, 97, 98, 108, 101, 115, 46, 32, 32, 69, 113, 117, 105, 118, 97, 108, 101, 110, 116, 32, 116, 111, 32, 110, 101, 115, 116, 101, 100, 32, 102, 111, 114, 45, 108, 111, 111, 112, 115, 46, 10, 10, 70, 111, 114, 32, 101, 120, 97, 109, 112, 108, 101, 44, 32, 112, 114, 111, 100, 117, 99, 116, 40, 65, 44, 32, 66, 41, 32, 114, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 97, 115, 58, 32, 32, 40, 40, 120, 44, 121, 41, 32, 102, 111, 114, 32, 120, 32, 105, 110, 32, 65, 32, 102, 111, 114, 32, 121, 32, 105, 110, 32, 66, 41, 46, 10, 84, 104, 101, 32, 108, 101, 102, 116, 109, 111, 115, 116, 32, 105, 116, 101, 114, 97, 116, 111, 114, 115, 32, 97, 114, 101, 32, 105, 110, 32, 116, 104, 101, 32, 111, 117, 116, 101, 114, 109, 111, 115, 116, 32, 102, 111, 114, 45, 108, 111, 111, 112, 44, 32, 115, 111, 32, 116, 104, 101, 32, 111, 117, 116, 112, 117, 116, 32, 116, 117, 112, 108, 101, 115, 10, 99, 121, 99, 108, 101, 32, 105, 110, 32, 97, 32, 109, 97, 110, 110, 101, 114, 32, 115, 105, 109, 105, 108, 97, 114, 32, 116, 111, 32, 97, 110, 32, 111, 100, 111, 109, 101, 116, 101, 114, 32, 40, 119, 105, 116, 104, 32, 116, 104, 101, 32, 114, 105, 103, 104, 116, 109, 111, 115, 116, 32, 101, 108, 101, 109, 101, 110, 116, 32, 99, 104, 97, 110, 103, 105, 110, 103, 10, 111, 110, 32, 101, 118, 101, 114, 121, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 41, 46, 10, 10, 84, 111, 32, 99, 111, 109, 112, 117, 116, 101, 32, 116, 104, 101, 32, 112, 114, 111, 100, 117, 99, 116, 32, 111, 102, 32, 97, 110, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 119, 105, 116, 104, 32, 105, 116, 115, 101, 108, 102, 44, 32, 115, 112, 101, 99, 105, 102, 121, 32, 116, 104, 101, 32, 110, 117, 109, 98, 101, 114, 10, 111, 102, 32, 114, 101, 112, 101, 116, 105, 116, 105, 111, 110, 115, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 114, 101, 112, 101, 97, 116, 32, 107, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 46, 32, 70, 111, 114, 32, 101, 120, 97, 109, 112, 108, 101, 44, 10, 112, 114, 111, 100, 117, 99, 116, 40, 65, 44, 32, 114, 101, 112, 101, 97, 116, 61, 52, 41, 32, 109, 101, 97, 110, 115, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 97, 115, 32, 112, 114, 111, 100, 117, 99, 116, 40, 65, 44, 32, 65, 44, 32, 65, 44, 32, 65, 41, 46, 10, 10, 112, 114, 111, 100, 117, 99, 116, 40, 39, 97, 98, 39, 44, 32, 114, 97, 110, 103, 101, 40, 51, 41, 41, 32, 45, 45, 62, 32, 40, 39, 97, 39, 44, 48, 41, 32, 40, 39, 97, 39, 44, 49, 41, 32, 40, 39, 97, 39, 44, 50, 41, 32, 40, 39, 98, 39, 44, 48, 41, 32, 40, 39, 98, 39, 44, 49, 41, 32, 40, 39, 98, 39, 44, 50, 41, 10, 112, 114, 111, 100, 117, 99, 116, 40, 40, 48, 44, 49, 41, 44, 32, 40, 48, 44, 49, 41, 44, 32, 40, 48, 44, 49, 41, 41, 32, 45, 45, 62, 32, 40, 48, 44, 48, 44, 48, 41, 32, 40, 48, 44, 48, 44, 49, 41, 32, 40, 48, 44, 49, 44, 48, 41, 32, 40, 48, 44, 49, 44, 49, 41, 32, 40, 49, 44, 48, 44, 48, 41, 32, 46, 46, 46, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 112, 114, 111, 100, 117, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _product_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str46 = allocate([ 79, 110, 58, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    _kwargs_10542 = allocate(12, "i8*", ALLOC_NORMAL);
    __str47 = allocate([ 114, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 110, 111, 110, 45, 110, 101, 103, 97, 116, 105, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 114, 32, 61, 61, 32, 48, 32, 124, 124, 32, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 114, 101, 115, 117, 108, 116, 41, 41, 45, 62, 111, 98, 95, 114, 101, 102, 99, 110, 116, 41, 32, 61, 61, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10664 = allocate([ 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 95, 110, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    _combinations_doc = allocate([ 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 40, 105, 116, 101, 114, 97, 98, 108, 101, 44, 32, 114, 41, 32, 45, 45, 62, 32, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 115, 117, 99, 99, 101, 115, 115, 105, 118, 101, 32, 114, 45, 108, 101, 110, 103, 116, 104, 32, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 32, 111, 102, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 105, 110, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 46, 10, 10, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 40, 114, 97, 110, 103, 101, 40, 52, 41, 44, 32, 51, 41, 32, 45, 45, 62, 32, 40, 48, 44, 49, 44, 50, 41, 44, 32, 40, 48, 44, 49, 44, 51, 41, 44, 32, 40, 48, 44, 50, 44, 51, 41, 44, 32, 40, 49, 44, 50, 44, 51, 41, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    _combinations_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str51 = allocate([ 79, 110, 58, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 95, 119, 105, 116, 104, 95, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _kwargs_10765 = allocate(12, "i8*", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10891 = allocate([ 99, 119, 114, 95, 110, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    _cwr_doc = allocate([ 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 95, 119, 105, 116, 104, 95, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 40, 105, 116, 101, 114, 97, 98, 108, 101, 44, 32, 114, 41, 32, 45, 45, 62, 32, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 95, 119, 105, 116, 104, 95, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 115, 117, 99, 99, 101, 115, 115, 105, 118, 101, 32, 114, 45, 108, 101, 110, 103, 116, 104, 32, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 32, 111, 102, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 105, 110, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 10, 97, 108, 108, 111, 119, 105, 110, 103, 32, 105, 110, 100, 105, 118, 105, 100, 117, 97, 108, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 116, 111, 32, 104, 97, 118, 101, 32, 115, 117, 99, 99, 101, 115, 115, 105, 118, 101, 32, 114, 101, 112, 101, 97, 116, 115, 46, 10, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 95, 119, 105, 116, 104, 95, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 40, 39, 65, 66, 67, 39, 44, 32, 50, 41, 32, 45, 45, 62, 32, 65, 65, 32, 65, 66, 32, 65, 67, 32, 66, 66, 32, 66, 67, 32, 67, 67, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 95, 119, 105, 116, 104, 95, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _cwr_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str53 = allocate([ 79, 124, 79, 58, 112, 101, 114, 109, 117, 116, 97, 116, 105, 111, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    _kwargs_10993 = allocate(12, "i8*", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___11129 = allocate([ 112, 101, 114, 109, 117, 116, 97, 116, 105, 111, 110, 115, 95, 110, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    _permutations_doc = allocate([ 112, 101, 114, 109, 117, 116, 97, 116, 105, 111, 110, 115, 40, 105, 116, 101, 114, 97, 98, 108, 101, 91, 44, 32, 114, 93, 41, 32, 45, 45, 62, 32, 112, 101, 114, 109, 117, 116, 97, 116, 105, 111, 110, 115, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 115, 117, 99, 99, 101, 115, 115, 105, 118, 101, 32, 114, 45, 108, 101, 110, 103, 116, 104, 32, 112, 101, 114, 109, 117, 116, 97, 116, 105, 111, 110, 115, 32, 111, 102, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 105, 110, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 46, 10, 10, 112, 101, 114, 109, 117, 116, 97, 116, 105, 111, 110, 115, 40, 114, 97, 110, 103, 101, 40, 51, 41, 44, 32, 50, 41, 32, 45, 45, 62, 32, 40, 48, 44, 49, 41, 44, 32, 40, 48, 44, 50, 41, 44, 32, 40, 49, 44, 48, 41, 44, 32, 40, 49, 44, 50, 41, 44, 32, 40, 50, 44, 48, 41, 44, 32, 40, 50, 44, 49, 41, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 112, 101, 114, 109, 117, 116, 97, 116, 105, 111, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    _permutations_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str55 = allocate([ 79, 79, 58, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    _kwargs_11231 = allocate(12, "i8*", ALLOC_NORMAL);
    __str56 = allocate([ 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 115, 101, 108, 101, 99, 116, 111, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    _compress_doc = allocate([ 99, 111, 109, 112, 114, 101, 115, 115, 40, 100, 97, 116, 97, 44, 32, 115, 101, 108, 101, 99, 116, 111, 114, 115, 41, 32, 45, 45, 62, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 111, 118, 101, 114, 32, 115, 101, 108, 101, 99, 116, 101, 100, 32, 100, 97, 116, 97, 10, 10, 82, 101, 116, 117, 114, 110, 32, 100, 97, 116, 97, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 99, 111, 114, 114, 101, 115, 112, 111, 110, 100, 105, 110, 103, 32, 116, 111, 32, 116, 114, 117, 101, 32, 115, 101, 108, 101, 99, 116, 111, 114, 32, 101, 108, 101, 109, 101, 110, 116, 115, 46, 10, 70, 111, 114, 109, 115, 32, 97, 32, 115, 104, 111, 114, 116, 101, 114, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 102, 114, 111, 109, 32, 115, 101, 108, 101, 99, 116, 101, 100, 32, 100, 97, 116, 97, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 117, 115, 105, 110, 103, 32, 116, 104, 101, 10, 115, 101, 108, 101, 99, 116, 111, 114, 115, 32, 116, 111, 32, 99, 104, 111, 111, 115, 101, 32, 116, 104, 101, 32, 100, 97, 116, 97, 32, 101, 108, 101, 109, 101, 110, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 99, 111, 109, 112, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    _compress_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str59 = allocate([ 105, 102, 105, 108, 116, 101, 114, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 105, 102, 105, 108, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _ifilter_doc = allocate([ 105, 102, 105, 108, 116, 101, 114, 40, 102, 117, 110, 99, 116, 105, 111, 110, 32, 111, 114, 32, 78, 111, 110, 101, 44, 32, 115, 101, 113, 117, 101, 110, 99, 101, 41, 32, 45, 45, 62, 32, 105, 102, 105, 108, 116, 101, 114, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 111, 115, 101, 32, 105, 116, 101, 109, 115, 32, 111, 102, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 102, 111, 114, 32, 119, 104, 105, 99, 104, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 105, 116, 101, 109, 41, 32, 105, 115, 32, 116, 114, 117, 101, 46, 10, 73, 102, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 32, 78, 111, 110, 101, 44, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 105, 116, 101, 109, 115, 32, 116, 104, 97, 116, 32, 97, 114, 101, 32, 116, 114, 117, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 105, 102, 105, 108, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _ifilter_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str62 = allocate([ 105, 102, 105, 108, 116, 101, 114, 102, 97, 108, 115, 101, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 105, 102, 105, 108, 116, 101, 114, 102, 97, 108, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    _ifilterfalse_doc = allocate([ 105, 102, 105, 108, 116, 101, 114, 102, 97, 108, 115, 101, 40, 102, 117, 110, 99, 116, 105, 111, 110, 32, 111, 114, 32, 78, 111, 110, 101, 44, 32, 115, 101, 113, 117, 101, 110, 99, 101, 41, 32, 45, 45, 62, 32, 105, 102, 105, 108, 116, 101, 114, 102, 97, 108, 115, 101, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 111, 115, 101, 32, 105, 116, 101, 109, 115, 32, 111, 102, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 102, 111, 114, 32, 119, 104, 105, 99, 104, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 105, 116, 101, 109, 41, 32, 105, 115, 32, 102, 97, 108, 115, 101, 46, 10, 73, 102, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 32, 78, 111, 110, 101, 44, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 105, 116, 101, 109, 115, 32, 116, 104, 97, 116, 32, 97, 114, 101, 32, 102, 97, 108, 115, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 105, 102, 105, 108, 116, 101, 114, 102, 97, 108, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    _ifilterfalse_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str65 = allocate([ 124, 79, 79, 58, 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_11697 = allocate(12, "i8*", ALLOC_NORMAL);
    __str66 = allocate([ 115, 116, 97, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 115, 116, 101, 112, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 97, 32, 110, 117, 109, 98, 101, 114, 32, 105, 115, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 108, 111, 110, 103, 95, 99, 110, 116, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 32, 38, 38, 32, 108, 111, 110, 103, 95, 115, 116, 101, 112, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___11698 = allocate([ 99, 111, 117, 110, 116, 95, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 40, 99, 110, 116, 32, 33, 61, 32, 40, 40, 80, 121, 95, 115, 115, 105, 122, 101, 95, 116, 41, 40, 40, 40, 115, 105, 122, 101, 95, 116, 41, 45, 49, 41, 62, 62, 49, 41, 41, 32, 38, 38, 32, 108, 111, 110, 103, 95, 99, 110, 116, 32, 61, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 32, 38, 38, 32, 33, 115, 108, 111, 119, 95, 109, 111, 100, 101, 41, 32, 124, 124, 32, 40, 99, 110, 116, 32, 61, 61, 32, 40, 40, 80, 121, 95, 115, 115, 105, 122, 101, 95, 116, 41, 40, 40, 40, 115, 105, 122, 101, 95, 116, 41, 45, 49, 41, 62, 62, 49, 41, 41, 32, 38, 38, 32, 108, 111, 110, 103, 95, 99, 110, 116, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 32, 38, 38, 32, 115, 108, 111, 119, 95, 109, 111, 100, 101, 41, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 115, 108, 111, 119, 95, 109, 111, 100, 101, 32, 124, 124, 32, 40, 40, 40, 40, 40, 108, 111, 110, 103, 95, 115, 116, 101, 112, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 51, 41, 41, 41, 32, 33, 61, 32, 48, 41, 32, 38, 38, 32, 40, 40, 40, 80, 121, 73, 110, 116, 79, 98, 106, 101, 99, 116, 32, 42, 41, 40, 108, 111, 110, 103, 95, 115, 116, 101, 112, 41, 41, 45, 62, 111, 98, 95, 105, 118, 97, 108, 41, 32, 61, 61, 32, 49, 41, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 108, 122, 45, 62, 99, 110, 116, 32, 61, 61, 32, 40, 40, 80, 121, 95, 115, 115, 105, 122, 101, 95, 116, 41, 40, 40, 40, 115, 105, 122, 101, 95, 116, 41, 45, 49, 41, 62, 62, 49, 41, 41, 32, 38, 38, 32, 108, 111, 110, 103, 95, 99, 110, 116, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___11885 = allocate([ 99, 111, 117, 110, 116, 95, 110, 101, 120, 116, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 99, 111, 117, 110, 116, 40, 37, 122, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 99, 111, 117, 110, 116, 40, 37, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 99, 111, 117, 110, 116, 40, 37, 115, 44, 32, 37, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 79, 40, 79, 79, 41, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 79, 40, 110, 41, 0 ], "i8", ALLOC_NORMAL);
    _count_reduce_doc = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 116, 97, 116, 101, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 32, 102, 111, 114, 32, 112, 105, 99, 107, 108, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _count_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _count_doc = allocate([ 99, 111, 117, 110, 116, 40, 115, 116, 97, 114, 116, 61, 48, 44, 32, 115, 116, 101, 112, 61, 49, 41, 32, 45, 45, 62, 32, 99, 111, 117, 110, 116, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 117, 110, 116, 32, 111, 98, 106, 101, 99, 116, 32, 119, 104, 111, 115, 101, 32, 46, 110, 101, 120, 116, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 114, 101, 116, 117, 114, 110, 115, 32, 99, 111, 110, 115, 101, 99, 117, 116, 105, 118, 101, 32, 118, 97, 108, 117, 101, 115, 46, 10, 69, 113, 117, 105, 118, 97, 108, 101, 110, 116, 32, 116, 111, 58, 10, 10, 32, 32, 32, 32, 100, 101, 102, 32, 99, 111, 117, 110, 116, 40, 102, 105, 114, 115, 116, 118, 97, 108, 61, 48, 44, 32, 115, 116, 101, 112, 61, 49, 41, 58, 10, 32, 32, 32, 32, 120, 32, 61, 32, 102, 105, 114, 115, 116, 118, 97, 108, 10, 32, 32, 32, 32, 119, 104, 105, 108, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 121, 105, 101, 108, 100, 32, 120, 10, 32, 32, 32, 32, 32, 32, 32, 32, 120, 32, 43, 61, 32, 115, 116, 101, 112, 10, 0 ], "i8", ALLOC_NORMAL);
    __str79 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 99, 111, 117, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _count_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str80 = allocate([ 105, 122, 105, 112, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___12009 = allocate([ 105, 122, 105, 112, 95, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 105, 122, 105, 112, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 35, 37, 122, 100, 32, 109, 117, 115, 116, 32, 115, 117, 112, 112, 111, 114, 116, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    _izip_doc = allocate([ 105, 122, 105, 112, 40, 105, 116, 101, 114, 49, 32, 91, 44, 105, 116, 101, 114, 50, 32, 91, 46, 46, 46, 93, 93, 41, 32, 45, 45, 62, 32, 105, 122, 105, 112, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 105, 122, 105, 112, 32, 111, 98, 106, 101, 99, 116, 32, 119, 104, 111, 115, 101, 32, 46, 110, 101, 120, 116, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 114, 101, 116, 117, 114, 110, 115, 32, 97, 32, 116, 117, 112, 108, 101, 32, 119, 104, 101, 114, 101, 10, 116, 104, 101, 32, 105, 45, 116, 104, 32, 101, 108, 101, 109, 101, 110, 116, 32, 99, 111, 109, 101, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 105, 45, 116, 104, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 46, 32, 32, 84, 104, 101, 32, 46, 110, 101, 120, 116, 40, 41, 10, 109, 101, 116, 104, 111, 100, 32, 99, 111, 110, 116, 105, 110, 117, 101, 115, 32, 117, 110, 116, 105, 108, 32, 116, 104, 101, 32, 115, 104, 111, 114, 116, 101, 115, 116, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 105, 110, 32, 116, 104, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 115, 101, 113, 117, 101, 110, 99, 101, 10, 105, 115, 32, 101, 120, 104, 97, 117, 115, 116, 101, 100, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 105, 116, 32, 114, 97, 105, 115, 101, 115, 32, 83, 116, 111, 112, 73, 116, 101, 114, 97, 116, 105, 111, 110, 46, 32, 32, 87, 111, 114, 107, 115, 32, 108, 105, 107, 101, 32, 116, 104, 101, 32, 122, 105, 112, 40, 41, 10, 102, 117, 110, 99, 116, 105, 111, 110, 32, 98, 117, 116, 32, 99, 111, 110, 115, 117, 109, 101, 115, 32, 108, 101, 115, 115, 32, 109, 101, 109, 111, 114, 121, 32, 98, 121, 32, 114, 101, 116, 117, 114, 110, 105, 110, 103, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 105, 110, 115, 116, 101, 97, 100, 32, 111, 102, 10, 97, 32, 108, 105, 115, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str82 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 105, 122, 105, 112, 0 ], "i8", ALLOC_NORMAL);
    _izip_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str83 = allocate([ 79, 124, 110, 58, 114, 101, 112, 101, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    _kwargs_12229 = allocate(12, "i8*", ALLOC_NORMAL);
    __str84 = allocate([ 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 116, 105, 109, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str86 = allocate([ 114, 101, 112, 101, 97, 116, 40, 37, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str87 = allocate([ 114, 101, 112, 101, 97, 116, 40, 37, 115, 44, 32, 37, 122, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str88 = allocate([ 108, 101, 110, 40, 41, 32, 111, 102, 32, 117, 110, 115, 105, 122, 101, 100, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _length_hint_doc = allocate([ 80, 114, 105, 118, 97, 116, 101, 32, 109, 101, 116, 104, 111, 100, 32, 114, 101, 116, 117, 114, 110, 105, 110, 103, 32, 97, 110, 32, 101, 115, 116, 105, 109, 97, 116, 101, 32, 111, 102, 32, 108, 101, 110, 40, 108, 105, 115, 116, 40, 105, 116, 41, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str89 = allocate([ 95, 95, 108, 101, 110, 103, 116, 104, 95, 104, 105, 110, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _repeat_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _repeat_doc = allocate([ 114, 101, 112, 101, 97, 116, 40, 111, 98, 106, 101, 99, 116, 32, 91, 44, 116, 105, 109, 101, 115, 93, 41, 32, 45, 62, 32, 99, 114, 101, 97, 116, 101, 32, 97, 110, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 119, 104, 105, 99, 104, 32, 114, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 111, 98, 106, 101, 99, 116, 10, 102, 111, 114, 32, 116, 104, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 116, 105, 109, 101, 115, 46, 32, 32, 73, 102, 32, 110, 111, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 44, 32, 114, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 111, 98, 106, 101, 99, 116, 10, 101, 110, 100, 108, 101, 115, 115, 108, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str90 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 114, 101, 112, 101, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    _repeat_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str91 = allocate([ 102, 105, 108, 108, 118, 97, 108, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str92 = allocate([ 105, 122, 105, 112, 95, 108, 111, 110, 103, 101, 115, 116, 40, 41, 32, 103, 111, 116, 32, 97, 110, 32, 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 107, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___12366 = allocate([ 105, 122, 105, 112, 95, 108, 111, 110, 103, 101, 115, 116, 95, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    __str93 = allocate([ 105, 122, 105, 112, 95, 108, 111, 110, 103, 101, 115, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 35, 37, 122, 100, 32, 109, 117, 115, 116, 32, 115, 117, 112, 112, 111, 114, 116, 32, 105, 116, 101, 114, 97, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    _izip_longest_doc = allocate([ 105, 122, 105, 112, 95, 108, 111, 110, 103, 101, 115, 116, 40, 105, 116, 101, 114, 49, 32, 91, 44, 105, 116, 101, 114, 50, 32, 91, 46, 46, 46, 93, 93, 44, 32, 91, 102, 105, 108, 108, 118, 97, 108, 117, 101, 61, 78, 111, 110, 101, 93, 41, 32, 45, 45, 62, 32, 105, 122, 105, 112, 95, 108, 111, 110, 103, 101, 115, 116, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 110, 32, 105, 122, 105, 112, 95, 108, 111, 110, 103, 101, 115, 116, 32, 111, 98, 106, 101, 99, 116, 32, 119, 104, 111, 115, 101, 32, 46, 110, 101, 120, 116, 40, 41, 32, 109, 101, 116, 104, 111, 100, 32, 114, 101, 116, 117, 114, 110, 115, 32, 97, 32, 116, 117, 112, 108, 101, 32, 119, 104, 101, 114, 101, 10, 116, 104, 101, 32, 105, 45, 116, 104, 32, 101, 108, 101, 109, 101, 110, 116, 32, 99, 111, 109, 101, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 105, 45, 116, 104, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 46, 32, 32, 84, 104, 101, 32, 46, 110, 101, 120, 116, 40, 41, 10, 109, 101, 116, 104, 111, 100, 32, 99, 111, 110, 116, 105, 110, 117, 101, 115, 32, 117, 110, 116, 105, 108, 32, 116, 104, 101, 32, 108, 111, 110, 103, 101, 115, 116, 32, 105, 116, 101, 114, 97, 98, 108, 101, 32, 105, 110, 32, 116, 104, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 115, 101, 113, 117, 101, 110, 99, 101, 10, 105, 115, 32, 101, 120, 104, 97, 117, 115, 116, 101, 100, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 105, 116, 32, 114, 97, 105, 115, 101, 115, 32, 83, 116, 111, 112, 73, 116, 101, 114, 97, 116, 105, 111, 110, 46, 32, 32, 87, 104, 101, 110, 32, 116, 104, 101, 32, 115, 104, 111, 114, 116, 101, 114, 32, 105, 116, 101, 114, 97, 98, 108, 101, 115, 10, 97, 114, 101, 32, 101, 120, 104, 97, 117, 115, 116, 101, 100, 44, 32, 116, 104, 101, 32, 102, 105, 108, 108, 118, 97, 108, 117, 101, 32, 105, 115, 32, 115, 117, 98, 115, 116, 105, 116, 117, 116, 101, 100, 32, 105, 110, 32, 116, 104, 101, 105, 114, 32, 112, 108, 97, 99, 101, 46, 32, 32, 84, 104, 101, 32, 102, 105, 108, 108, 118, 97, 108, 117, 101, 10, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 78, 111, 110, 101, 32, 111, 114, 32, 99, 97, 110, 32, 98, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 98, 121, 32, 97, 32, 107, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str94 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 46, 105, 122, 105, 112, 95, 108, 111, 110, 103, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _iziplongest_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_doc = allocate([ 70, 117, 110, 99, 116, 105, 111, 110, 97, 108, 32, 116, 111, 111, 108, 115, 32, 102, 111, 114, 32, 99, 114, 101, 97, 116, 105, 110, 103, 32, 97, 110, 100, 32, 117, 115, 105, 110, 103, 32, 105, 116, 101, 114, 97, 116, 111, 114, 115, 46, 10, 10, 73, 110, 102, 105, 110, 105, 116, 101, 32, 105, 116, 101, 114, 97, 116, 111, 114, 115, 58, 10, 99, 111, 117, 110, 116, 40, 91, 110, 93, 41, 32, 45, 45, 62, 32, 110, 44, 32, 110, 43, 49, 44, 32, 110, 43, 50, 44, 32, 46, 46, 46, 10, 99, 121, 99, 108, 101, 40, 112, 41, 32, 45, 45, 62, 32, 112, 48, 44, 32, 112, 49, 44, 32, 46, 46, 46, 32, 112, 108, 97, 115, 116, 44, 32, 112, 48, 44, 32, 112, 49, 44, 32, 46, 46, 46, 10, 114, 101, 112, 101, 97, 116, 40, 101, 108, 101, 109, 32, 91, 44, 110, 93, 41, 32, 45, 45, 62, 32, 101, 108, 101, 109, 44, 32, 101, 108, 101, 109, 44, 32, 101, 108, 101, 109, 44, 32, 46, 46, 46, 32, 101, 110, 100, 108, 101, 115, 115, 108, 121, 32, 111, 114, 32, 117, 112, 32, 116, 111, 32, 110, 32, 116, 105, 109, 101, 115, 10, 10, 73, 116, 101, 114, 97, 116, 111, 114, 115, 32, 116, 101, 114, 109, 105, 110, 97, 116, 105, 110, 103, 32, 111, 110, 32, 116, 104, 101, 32, 115, 104, 111, 114, 116, 101, 115, 116, 32, 105, 110, 112, 117, 116, 32, 115, 101, 113, 117, 101, 110, 99, 101, 58, 10, 99, 104, 97, 105, 110, 40, 112, 44, 32, 113, 44, 32, 46, 46, 46, 41, 32, 45, 45, 62, 32, 112, 48, 44, 32, 112, 49, 44, 32, 46, 46, 46, 32, 112, 108, 97, 115, 116, 44, 32, 113, 48, 44, 32, 113, 49, 44, 32, 46, 46, 46, 32, 10, 99, 111, 109, 112, 114, 101, 115, 115, 40, 100, 97, 116, 97, 44, 32, 115, 101, 108, 101, 99, 116, 111, 114, 115, 41, 32, 45, 45, 62, 32, 40, 100, 91, 48, 93, 32, 105, 102, 32, 115, 91, 48, 93, 41, 44, 32, 40, 100, 91, 49, 93, 32, 105, 102, 32, 115, 91, 49, 93, 41, 44, 32, 46, 46, 46, 10, 100, 114, 111, 112, 119, 104, 105, 108, 101, 40, 112, 114, 101, 100, 44, 32, 115, 101, 113, 41, 32, 45, 45, 62, 32, 115, 101, 113, 91, 110, 93, 44, 32, 115, 101, 113, 91, 110, 43, 49, 93, 44, 32, 115, 116, 97, 114, 116, 105, 110, 103, 32, 119, 104, 101, 110, 32, 112, 114, 101, 100, 32, 102, 97, 105, 108, 115, 10, 103, 114, 111, 117, 112, 98, 121, 40, 105, 116, 101, 114, 97, 98, 108, 101, 91, 44, 32, 107, 101, 121, 102, 117, 110, 99, 93, 41, 32, 45, 45, 62, 32, 115, 117, 98, 45, 105, 116, 101, 114, 97, 116, 111, 114, 115, 32, 103, 114, 111, 117, 112, 101, 100, 32, 98, 121, 32, 118, 97, 108, 117, 101, 32, 111, 102, 32, 107, 101, 121, 102, 117, 110, 99, 40, 118, 41, 10, 105, 102, 105, 108, 116, 101, 114, 40, 112, 114, 101, 100, 44, 32, 115, 101, 113, 41, 32, 45, 45, 62, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 111, 102, 32, 115, 101, 113, 32, 119, 104, 101, 114, 101, 32, 112, 114, 101, 100, 40, 101, 108, 101, 109, 41, 32, 105, 115, 32, 84, 114, 117, 101, 10, 105, 102, 105, 108, 116, 101, 114, 102, 97, 108, 115, 101, 40, 112, 114, 101, 100, 44, 32, 115, 101, 113, 41, 32, 45, 45, 62, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 111, 102, 32, 115, 101, 113, 32, 119, 104, 101, 114, 101, 32, 112, 114, 101, 100, 40, 101, 108, 101, 109, 41, 32, 105, 115, 32, 70, 97, 108, 115, 101, 10, 105, 115, 108, 105, 99, 101, 40, 115, 101, 113, 44, 32, 91, 115, 116, 97, 114, 116, 44, 93, 32, 115, 116, 111, 112, 32, 91, 44, 32, 115, 116, 101, 112, 93, 41, 32, 45, 45, 62, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 102, 114, 111, 109, 10, 32, 32, 32, 32, 32, 32, 32, 115, 101, 113, 91, 115, 116, 97, 114, 116, 58, 115, 116, 111, 112, 58, 115, 116, 101, 112, 93, 10, 105, 109, 97, 112, 40, 102, 117, 110, 44, 32, 112, 44, 32, 113, 44, 32, 46, 46, 46, 41, 32, 45, 45, 62, 32, 102, 117, 110, 40, 112, 48, 44, 32, 113, 48, 41, 44, 32, 102, 117, 110, 40, 112, 49, 44, 32, 113, 49, 41, 44, 32, 46, 46, 46, 10, 115, 116, 97, 114, 109, 97, 112, 40, 102, 117, 110, 44, 32, 115, 101, 113, 41, 32, 45, 45, 62, 32, 102, 117, 110, 40, 42, 115, 101, 113, 91, 48, 93, 41, 44, 32, 102, 117, 110, 40, 42, 115, 101, 113, 91, 49, 93, 41, 44, 32, 46, 46, 46, 10, 116, 101, 101, 40, 105, 116, 44, 32, 110, 61, 50, 41, 32, 45, 45, 62, 32, 40, 105, 116, 49, 44, 32, 105, 116, 50, 32, 44, 32, 46, 46, 46, 32, 105, 116, 110, 41, 32, 115, 112, 108, 105, 116, 115, 32, 111, 110, 101, 32, 105, 116, 101, 114, 97, 116, 111, 114, 32, 105, 110, 116, 111, 32, 110, 10, 116, 97, 107, 101, 119, 104, 105, 108, 101, 40, 112, 114, 101, 100, 44, 32, 115, 101, 113, 41, 32, 45, 45, 62, 32, 115, 101, 113, 91, 48, 93, 44, 32, 115, 101, 113, 91, 49, 93, 44, 32, 117, 110, 116, 105, 108, 32, 112, 114, 101, 100, 32, 102, 97, 105, 108, 115, 10, 105, 122, 105, 112, 40, 112, 44, 32, 113, 44, 32, 46, 46, 46, 41, 32, 45, 45, 62, 32, 40, 112, 91, 48, 93, 44, 32, 113, 91, 48, 93, 41, 44, 32, 40, 112, 91, 49, 93, 44, 32, 113, 91, 49, 93, 41, 44, 32, 46, 46, 46, 32, 10, 105, 122, 105, 112, 95, 108, 111, 110, 103, 101, 115, 116, 40, 112, 44, 32, 113, 44, 32, 46, 46, 46, 41, 32, 45, 45, 62, 32, 40, 112, 91, 48, 93, 44, 32, 113, 91, 48, 93, 41, 44, 32, 40, 112, 91, 49, 93, 44, 32, 113, 91, 49, 93, 41, 44, 32, 46, 46, 46, 32, 10, 10, 67, 111, 109, 98, 105, 110, 97, 116, 111, 114, 105, 99, 32, 103, 101, 110, 101, 114, 97, 116, 111, 114, 115, 58, 10, 112, 114, 111, 100, 117, 99, 116, 40, 112, 44, 32, 113, 44, 32, 46, 46, 46, 32, 91, 114, 101, 112, 101, 97, 116, 61, 49, 93, 41, 32, 45, 45, 62, 32, 99, 97, 114, 116, 101, 115, 105, 97, 110, 32, 112, 114, 111, 100, 117, 99, 116, 10, 112, 101, 114, 109, 117, 116, 97, 116, 105, 111, 110, 115, 40, 112, 91, 44, 32, 114, 93, 41, 10, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 40, 112, 44, 32, 114, 41, 10, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 95, 119, 105, 116, 104, 95, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 40, 112, 44, 32, 114, 41, 10, 0 ], "i8", ALLOC_NORMAL);
    _module_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _C_280_12667 = allocate(80, "%struct._typeobject*", ALLOC_NORMAL);
    __str95 = allocate([ 105, 116, 101, 114, 116, 111, 111, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    __str96 = allocate([ 110, 97, 109, 101, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___12663 = allocate([ 105, 110, 105, 116, 105, 116, 101, 114, 116, 111, 111, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_kwargs_8351] = __str1;
    HEAP[_kwargs_8351 + 4] = __str2;
    HEAP[_groupby_type + 12] = __str3;
    HEAP[_groupby_type + 24] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_groupby_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_groupby_type + 88] = _groupby_doc;
    HEAP[_groupby_type + 92] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_groupby_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_groupby_type + 112] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_groupby_type + 156] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_groupby_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[__grouper_type + 12] = __str7;
    HEAP[__grouper_type + 24] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[__grouper_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[__grouper_type + 92] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[__grouper_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[__grouper_type + 112] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[__grouper_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_teedataobject_type + 12] = __str10;
    HEAP[_teedataobject_type + 24] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_teedataobject_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_teedataobject_type + 88] = _teedataobject_doc;
    HEAP[_teedataobject_type + 92] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_teedataobject_type + 96] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_teedataobject_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_tee_methods] = __str12;
    HEAP[_tee_methods + 4] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_tee_methods + 12] = _teecopy_doc;
    HEAP[_tee_type + 12] = __str13;
    HEAP[_tee_type + 24] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_tee_type + 88] = _teeobject_doc;
    HEAP[_tee_type + 92] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_tee_type + 96] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_tee_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_tee_type + 112] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_tee_type + 116] = _tee_methods;
    HEAP[_tee_type + 156] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_tee_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_cycle_type + 12] = __str18;
    HEAP[_cycle_type + 24] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_cycle_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_cycle_type + 88] = _cycle_doc;
    HEAP[_cycle_type + 92] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_cycle_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_cycle_type + 112] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_cycle_type + 156] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_cycle_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_dropwhile_type + 12] = __str21;
    HEAP[_dropwhile_type + 24] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_dropwhile_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_dropwhile_type + 88] = _dropwhile_doc;
    HEAP[_dropwhile_type + 92] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_dropwhile_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_dropwhile_type + 112] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_dropwhile_type + 156] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_dropwhile_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_takewhile_type + 12] = __str24;
    HEAP[_takewhile_type + 24] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_takewhile_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_takewhile_type + 88] = _takewhile_doc;
    HEAP[_takewhile_type + 92] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_takewhile_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_takewhile_type + 112] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_takewhile_type + 156] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_takewhile_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_islice_type + 12] = __str30;
    HEAP[_islice_type + 24] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_islice_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_islice_type + 88] = _islice_doc;
    HEAP[_islice_type + 92] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_islice_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_islice_type + 112] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_islice_type + 156] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_islice_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_starmap_type + 12] = __str33;
    HEAP[_starmap_type + 24] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_starmap_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_starmap_type + 88] = _starmap_doc;
    HEAP[_starmap_type + 92] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_starmap_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_starmap_type + 112] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_starmap_type + 156] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_starmap_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_imap_type + 12] = __str36;
    HEAP[_imap_type + 24] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_imap_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_imap_type + 88] = _imap_doc;
    HEAP[_imap_type + 92] = FUNCTION_TABLE_OFFSET + 82;
    HEAP[_imap_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_imap_type + 112] = FUNCTION_TABLE_OFFSET + 84;
    HEAP[_imap_type + 156] = FUNCTION_TABLE_OFFSET + 86;
    HEAP[_imap_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_chain_methods] = __str38;
    HEAP[_chain_methods + 4] = FUNCTION_TABLE_OFFSET + 88;
    HEAP[_chain_methods + 12] = _chain_from_iterable_doc;
    HEAP[_chain_type + 12] = __str39;
    HEAP[_chain_type + 24] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_chain_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_chain_type + 88] = _chain_doc;
    HEAP[_chain_type + 92] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_chain_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_chain_type + 112] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_chain_type + 116] = _chain_methods;
    HEAP[_chain_type + 156] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_chain_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_product_type + 12] = __str45;
    HEAP[_product_type + 24] = FUNCTION_TABLE_OFFSET + 98;
    HEAP[_product_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_product_type + 88] = _product_doc;
    HEAP[_product_type + 92] = FUNCTION_TABLE_OFFSET + 100;
    HEAP[_product_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_product_type + 112] = FUNCTION_TABLE_OFFSET + 102;
    HEAP[_product_type + 156] = FUNCTION_TABLE_OFFSET + 104;
    HEAP[_product_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_kwargs_10542] = __str1;
    HEAP[_kwargs_10542 + 4] = __str47;
    HEAP[_combinations_type + 12] = __str50;
    HEAP[_combinations_type + 24] = FUNCTION_TABLE_OFFSET + 106;
    HEAP[_combinations_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_combinations_type + 88] = _combinations_doc;
    HEAP[_combinations_type + 92] = FUNCTION_TABLE_OFFSET + 108;
    HEAP[_combinations_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_combinations_type + 112] = FUNCTION_TABLE_OFFSET + 110;
    HEAP[_combinations_type + 156] = FUNCTION_TABLE_OFFSET + 112;
    HEAP[_combinations_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_kwargs_10765] = __str1;
    HEAP[_kwargs_10765 + 4] = __str47;
    HEAP[_cwr_type + 12] = __str52;
    HEAP[_cwr_type + 24] = FUNCTION_TABLE_OFFSET + 114;
    HEAP[_cwr_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_cwr_type + 88] = _cwr_doc;
    HEAP[_cwr_type + 92] = FUNCTION_TABLE_OFFSET + 116;
    HEAP[_cwr_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_cwr_type + 112] = FUNCTION_TABLE_OFFSET + 118;
    HEAP[_cwr_type + 156] = FUNCTION_TABLE_OFFSET + 120;
    HEAP[_cwr_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_kwargs_10993] = __str1;
    HEAP[_kwargs_10993 + 4] = __str47;
    HEAP[_permutations_type + 12] = __str54;
    HEAP[_permutations_type + 24] = FUNCTION_TABLE_OFFSET + 122;
    HEAP[_permutations_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_permutations_type + 88] = _permutations_doc;
    HEAP[_permutations_type + 92] = FUNCTION_TABLE_OFFSET + 124;
    HEAP[_permutations_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_permutations_type + 112] = FUNCTION_TABLE_OFFSET + 126;
    HEAP[_permutations_type + 156] = FUNCTION_TABLE_OFFSET + 128;
    HEAP[_permutations_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_kwargs_11231] = __str56;
    HEAP[_kwargs_11231 + 4] = __str57;
    HEAP[_compress_type + 12] = __str58;
    HEAP[_compress_type + 24] = FUNCTION_TABLE_OFFSET + 130;
    HEAP[_compress_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_compress_type + 88] = _compress_doc;
    HEAP[_compress_type + 92] = FUNCTION_TABLE_OFFSET + 132;
    HEAP[_compress_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_compress_type + 112] = FUNCTION_TABLE_OFFSET + 134;
    HEAP[_compress_type + 156] = FUNCTION_TABLE_OFFSET + 136;
    HEAP[_compress_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_ifilter_type + 12] = __str61;
    HEAP[_ifilter_type + 24] = FUNCTION_TABLE_OFFSET + 138;
    HEAP[_ifilter_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_ifilter_type + 88] = _ifilter_doc;
    HEAP[_ifilter_type + 92] = FUNCTION_TABLE_OFFSET + 140;
    HEAP[_ifilter_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_ifilter_type + 112] = FUNCTION_TABLE_OFFSET + 142;
    HEAP[_ifilter_type + 156] = FUNCTION_TABLE_OFFSET + 144;
    HEAP[_ifilter_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_ifilterfalse_type + 12] = __str64;
    HEAP[_ifilterfalse_type + 24] = FUNCTION_TABLE_OFFSET + 146;
    HEAP[_ifilterfalse_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_ifilterfalse_type + 88] = _ifilterfalse_doc;
    HEAP[_ifilterfalse_type + 92] = FUNCTION_TABLE_OFFSET + 148;
    HEAP[_ifilterfalse_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_ifilterfalse_type + 112] = FUNCTION_TABLE_OFFSET + 150;
    HEAP[_ifilterfalse_type + 156] = FUNCTION_TABLE_OFFSET + 152;
    HEAP[_ifilterfalse_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_kwlist_11697] = __str66;
    HEAP[_kwlist_11697 + 4] = __str67;
    HEAP[_count_methods] = __str78;
    HEAP[_count_methods + 4] = FUNCTION_TABLE_OFFSET + 154;
    HEAP[_count_methods + 12] = _count_reduce_doc;
    HEAP[_count_type + 12] = __str79;
    HEAP[_count_type + 24] = FUNCTION_TABLE_OFFSET + 156;
    HEAP[_count_type + 44] = FUNCTION_TABLE_OFFSET + 158;
    HEAP[_count_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_count_type + 88] = _count_doc;
    HEAP[_count_type + 92] = FUNCTION_TABLE_OFFSET + 160;
    HEAP[_count_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_count_type + 112] = FUNCTION_TABLE_OFFSET + 162;
    HEAP[_count_type + 116] = _count_methods;
    HEAP[_count_type + 156] = FUNCTION_TABLE_OFFSET + 164;
    HEAP[_count_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_izip_type + 12] = __str82;
    HEAP[_izip_type + 24] = FUNCTION_TABLE_OFFSET + 166;
    HEAP[_izip_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_izip_type + 88] = _izip_doc;
    HEAP[_izip_type + 92] = FUNCTION_TABLE_OFFSET + 168;
    HEAP[_izip_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_izip_type + 112] = FUNCTION_TABLE_OFFSET + 170;
    HEAP[_izip_type + 156] = FUNCTION_TABLE_OFFSET + 172;
    HEAP[_izip_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_kwargs_12229] = __str84;
    HEAP[_kwargs_12229 + 4] = __str85;
    HEAP[_repeat_methods] = __str89;
    HEAP[_repeat_methods + 4] = FUNCTION_TABLE_OFFSET + 174;
    HEAP[_repeat_methods + 12] = _length_hint_doc;
    HEAP[_repeat_type + 12] = __str90;
    HEAP[_repeat_type + 24] = FUNCTION_TABLE_OFFSET + 176;
    HEAP[_repeat_type + 44] = FUNCTION_TABLE_OFFSET + 178;
    HEAP[_repeat_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_repeat_type + 88] = _repeat_doc;
    HEAP[_repeat_type + 92] = FUNCTION_TABLE_OFFSET + 180;
    HEAP[_repeat_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_repeat_type + 112] = FUNCTION_TABLE_OFFSET + 182;
    HEAP[_repeat_type + 116] = _repeat_methods;
    HEAP[_repeat_type + 156] = FUNCTION_TABLE_OFFSET + 184;
    HEAP[_repeat_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_iziplongest_type + 12] = __str94;
    HEAP[_iziplongest_type + 24] = FUNCTION_TABLE_OFFSET + 186;
    HEAP[_iziplongest_type + 72] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_iziplongest_type + 88] = _izip_longest_doc;
    HEAP[_iziplongest_type + 92] = FUNCTION_TABLE_OFFSET + 188;
    HEAP[_iziplongest_type + 108] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_iziplongest_type + 112] = FUNCTION_TABLE_OFFSET + 190;
    HEAP[_iziplongest_type + 156] = FUNCTION_TABLE_OFFSET + 192;
    HEAP[_iziplongest_type + 160] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_module_methods] = __str11;
    HEAP[_module_methods + 4] = FUNCTION_TABLE_OFFSET + 194;
    HEAP[_module_methods + 12] = _tee_doc;
    HEAP[_C_280_12667] = _combinations_type;
    HEAP[_C_280_12667 + 4] = _cwr_type;
    HEAP[_C_280_12667 + 8] = _cycle_type;
    HEAP[_C_280_12667 + 12] = _dropwhile_type;
    HEAP[_C_280_12667 + 16] = _takewhile_type;
    HEAP[_C_280_12667 + 20] = _islice_type;
    HEAP[_C_280_12667 + 24] = _starmap_type;
    HEAP[_C_280_12667 + 28] = _imap_type;
    HEAP[_C_280_12667 + 32] = _chain_type;
    HEAP[_C_280_12667 + 36] = _compress_type;
    HEAP[_C_280_12667 + 40] = _ifilter_type;
    HEAP[_C_280_12667 + 44] = _ifilterfalse_type;
    HEAP[_C_280_12667 + 48] = _count_type;
    HEAP[_C_280_12667 + 52] = _izip_type;
    HEAP[_C_280_12667 + 56] = _iziplongest_type;
    HEAP[_C_280_12667 + 60] = _permutations_type;
    HEAP[_C_280_12667 + 64] = _product_type;
    HEAP[_C_280_12667 + 68] = _repeat_type;
    HEAP[_C_280_12667 + 72] = _groupby_type;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
