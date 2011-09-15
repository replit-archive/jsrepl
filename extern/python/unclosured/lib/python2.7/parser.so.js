"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 196;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyArena___SIZE = 0;
  var $struct_PyArena___FLATTENER = [];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyCodeObject___SIZE = 72;
  var $struct_PyCompilerFlags___SIZE = 4;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PyST_Object___SIZE = 20;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__mod___SIZE = 8;
  var $struct__typeobject___SIZE = 196;
  var $struct_anon___SIZE = 4;
  var $struct_arc___SIZE = 4;
  var $struct_asdl_seq___SIZE = 8;
  var $struct_dfa___SIZE = 24;
  var $struct_grammar___SIZE = 24;
  var $struct_grammar___FLATTENER = [ 0, 4, 8, 16, 20 ];
  var $struct_label___SIZE = 8;
  var $struct_labellist___SIZE = 8;
  var $struct_node___SIZE = 24;
  var $struct_perrdetail___SIZE = 28;
  var $struct_state___SIZE = 24;
  var $union_anon___SIZE = 4;
  var _parser_copyright_string;
  var _parser_doc_string;
  var _parser_version_string;
  var __str;
  var _parser_error;
  var __str1;
  var __str2;
  var _PyST_Type;
  var __str3;
  var _keywords_9402;
  var __str4;
  var __str5;
  var __str6;
  var __str7;
  var __str8;
  var __str9;
  var _keywords_9452;
  var __str10;
  var __str11;
  var __str12;
  var __str13;
  var _keywords_9503;
  var __str14;
  var __str15;
  var __str16;
  var __str17;
  var _keywords_9551;
  var __str18;
  var __str19;
  var _keywords_9577;
  var __str20;
  var _parser_methods;
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
  var _keywords_9618;
  var __str31;
  var __str32;
  var __str33;
  var __str34;
  var _keywords_9672;
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
  var __str85;
  var __str86;
  var __str87;
  var __str88;
  var __str89;
  var __str90;
  var __str91;
  var __str92;
  var __str93;
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
  var __str168;
  var __str169;
  var __str170;
  var __str171;
  var __str172;
  var __str173;
  var ___PRETTY_FUNCTION___13794;
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
  var __str184;
  var _pickle_constructor;
  var __str185;
  var __str186;
  var __str187;
  var _parser_functions;
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
  var __str198;
  var __str199;
  var __str200;
  var __str201;
  var __str202;
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
  function _node2tuple($n, $mkseq, $addelem, $lineno, $col_offset) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $n_addr;
      var $mkseq_addr;
      var $addelem_addr;
      var $lineno_addr;
      var $col_offset_addr;
      var $retval;
      var $0;
      var $i;
      var $v;
      var $w;
      var $result;
      $n_addr = $n;
      $mkseq_addr = $mkseq;
      $addelem_addr = $addelem;
      $lineno_addr = $lineno;
      $col_offset_addr = $col_offset;
      
      
      if ($n_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $4 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $4;
      $0 = __Py_NoneStruct;
      __label__ = 27;
      break;
     case 2:
      
      
      
      
      var $9 = $n_addr;
      if (HEAP[$n_addr] > 255) {
        __label__ = 3;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      var $18 = HEAP[$9 + 16] + 1 + (HEAP[$n_addr] == 339);
      var $19 = $mkseq_addr;
      var $20 = FUNCTION_TABLE[$19]($18);
      $v = $20;
      
      
      if ($v == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      $0 = $v;
      __label__ = 27;
      break;
     case 5:
      
      
      
      var $27 = HEAP[$n_addr];
      var $28 = _PyInt_FromLong($27);
      $w = $28;
      
      
      if ($w == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $34 = HEAP[$v] - 1;
      
      
      HEAP[$v] = $34;
      
      
      
      
      if (HEAP[$v] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $45 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$45]($v);
      __label__ = 8;
      break;
     case 8:
      $0 = 0;
      __label__ = 27;
      break;
     case 9:
      var $47 = $addelem_addr;
      
      
      var $50 = FUNCTION_TABLE[$47]($v, 0, $w);
      $i = 0;
      __label__ = 15;
      break;
     case 10:
      
      
      
      var $54 = HEAP[$91 + 20] + 24 * $i;
      
      
      
      
      var $59 = _node2tuple($54, $mkseq_addr, $addelem_addr, $lineno_addr, $col_offset_addr);
      $w = $59;
      
      
      if ($w == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      var $65 = HEAP[$v] - 1;
      
      
      HEAP[$v] = $65;
      
      
      
      
      if (HEAP[$v] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $76 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$76]($v);
      __label__ = 13;
      break;
     case 13:
      $0 = 0;
      __label__ = 27;
      break;
     case 14:
      
      
      var $80 = $addelem_addr;
      
      
      var $83 = FUNCTION_TABLE[$80]($v, $i + 1, $w);
      
      var $85 = $i + 1;
      $i = $85;
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      
      var $91 = $n_addr;
      if (HEAP[$n_addr + 16] > $i) {
        __label__ = 10;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      if (HEAP[$91] == 339) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      var $97 = HEAP[$n_addr + 4];
      var $98 = _PyString_FromString($97);
      
      
      var $101 = $addelem_addr;
      
      var $103 = FUNCTION_TABLE[$101]($v, $i + 1, $98);
      __label__ = 18;
      break;
     case 18:
      
      $0 = $v;
      __label__ = 27;
      break;
     case 19:
      
      
      
      if (HEAP[$9] <= 255) {
        __label__ = 20;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 20:
      
      
      
      
      var $112 = $mkseq_addr;
      var $113 = FUNCTION_TABLE[$112]($lineno_addr + 2 + $col_offset_addr);
      $result = $113;
      
      
      if ($result != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 21:
      
      
      
      var $119 = HEAP[$n_addr];
      var $120 = _PyInt_FromLong($119);
      var $121 = $addelem_addr;
      
      var $123 = FUNCTION_TABLE[$121]($result, 0, $120);
      
      
      var $126 = HEAP[$n_addr + 4];
      var $127 = _PyString_FromString($126);
      var $128 = $addelem_addr;
      
      var $130 = FUNCTION_TABLE[$128]($result, 1, $127);
      
      
      if ($lineno_addr == 1) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      var $135 = HEAP[$n_addr + 8];
      var $136 = _PyInt_FromLong($135);
      var $137 = $addelem_addr;
      
      var $139 = FUNCTION_TABLE[$137]($result, 2, $136);
      __label__ = 23;
      break;
     case 23:
      
      
      if ($col_offset_addr == 1) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      var $144 = HEAP[$n_addr + 12];
      var $145 = _PyInt_FromLong($144);
      var $146 = $addelem_addr;
      
      var $148 = FUNCTION_TABLE[$146]($result, 3, $145);
      __label__ = 25;
      break;
     case 25:
      
      $0 = $result;
      __label__ = 27;
      break;
     case 26:
      var $150 = HEAP[_PyExc_SystemError];
      _PyErr_SetString($150, __str);
      $0 = 0;
      __label__ = 27;
      break;
     case 27:
      
      $retval = $0;
      var $retval27 = $retval;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parser_compare_nodes($left, $right) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $left_addr;
      var $right_addr;
      var $retval;
      var $0;
      var $j;
      var $v;
      $left_addr = $left;
      $right_addr = $right;
      
      
      
      
      
      
      
      if (HEAP[$left_addr] < HEAP[$right_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 16;
      break;
     case 2:
      
      
      
      
      
      
      
      if (HEAP[$right_addr] < HEAP[$left_addr]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 1;
      __label__ = 16;
      break;
     case 4:
      
      
      
      
      if (HEAP[$left_addr] <= 255) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $21 = HEAP[$right_addr + 4];
      
      
      var $24 = HEAP[$left_addr + 4];
      var $25 = _strcmp($24, $21);
      $0 = $25;
      __label__ = 16;
      break;
     case 6:
      
      
      
      
      
      
      
      if (HEAP[$left_addr + 16] < HEAP[$right_addr + 16]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = -1;
      __label__ = 16;
      break;
     case 8:
      
      
      
      
      
      
      
      if (HEAP[$right_addr + 16] < HEAP[$left_addr + 16]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = 1;
      __label__ = 16;
      break;
     case 10:
      $j = 0;
      __label__ = 14;
      break;
     case 11:
      
      
      
      
      var $44 = HEAP[$right_addr + 20] + 24 * $j;
      
      
      
      
      var $49 = HEAP[$left_addr + 20] + 24 * $j;
      var $50 = _parser_compare_nodes($49, $44);
      $v = $50;
      
      
      if ($v != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      $0 = $v;
      __label__ = 16;
      break;
     case 13:
      
      var $55 = $j + 1;
      $j = $55;
      __label__ = 14;
      break;
     case 14:
      
      
      
      
      
      if (HEAP[$left_addr + 16] > $j) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      $0 = 0;
      __label__ = 16;
      break;
     case 16:
      
      $retval = $0;
      var $retval16 = $retval;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parser_compare($left, $right) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $left_addr;
      var $right_addr;
      var $retval;
      var $0;
      $left_addr = $left;
      $right_addr = $right;
      
      
      
      if ($left_addr == $right_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 6;
      break;
     case 2:
      
      
      if ($left_addr == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if ($right_addr == 0) {
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
      
      
      var $10 = HEAP[$right_addr + 8];
      
      
      var $13 = HEAP[$left_addr + 8];
      var $14 = _parser_compare_nodes($13, $10);
      $0 = $14;
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
  function _parser_newstobject($st, $type) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $st_addr;
      var $type_addr;
      var $retval;
      var $0;
      var $o;
      $st_addr = $st;
      $type_addr = $type;
      var $1 = __PyObject_New(_PyST_Type);
      
      $o = $1;
      
      
      if ($o != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      HEAP[$o + 8] = $st_addr;
      
      
      
      HEAP[$o + 12] = $type_addr;
      
      
      
      HEAP[$o + 16] = 0;
      __label__ = 3;
      break;
     case 2:
      
      _PyNode_Free($st_addr);
      __label__ = 3;
      break;
     case 3:
      
      
      $0 = $o;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parser_free($st) {
    
    var $st_addr;
    $st_addr = $st;
    
    
    var $2 = HEAP[$st_addr + 8];
    _PyNode_Free($2);
    
    
    _PyObject_Free($st_addr);
    return;
  }
  function _parser_st2tuple($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $line_option = __stackBase__ + 4;
      var $col_option = __stackBase__ + 8;
      var $res;
      var $ok;
      var $lineno;
      var $col_offset;
      HEAP[$self_addr] = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      HEAP[$line_option] = 0;
      HEAP[$col_option] = 0;
      $res = 0;
      
      
      var $3 = $args_addr;
      var $4 = $kw_addr;
      if (HEAP[$self_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = _PyArg_ParseTupleAndKeywords($3, $4, __str3, _keywords_9402, allocate([ _PyST_Type, 0, 0, 0, $self_addr, 0, 0, 0, $line_option, 0, 0, 0, $col_option, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyST_Object**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      $ok = $5;
      __lastLabel__ = 1;
      __label__ = 3;
      break;
     case 2:
      var $6 = _PyArg_ParseTupleAndKeywords($3, $4, __str7, _keywords_9402 + 4, allocate([ $line_option, 0, 0, 0, $col_option, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      $ok = $6;
      __lastLabel__ = 2;
      __label__ = 3;
      break;
     case 3:
      var $7 = __lastLabel__ == 2 ? $6 : $5;
      
      if ($7 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      $lineno = 0;
      $col_offset = 0;
      
      
      if (HEAP[$line_option] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $11 = HEAP[$line_option];
      var $12 = _PyObject_IsTrue($11);
      
      
      $lineno = $12 != 0;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$col_option] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $17 = HEAP[$col_option];
      var $18 = _PyObject_IsTrue($17);
      
      
      $col_offset = $18 != 0;
      __label__ = 8;
      break;
     case 8:
      
      
      var $23 = HEAP[HEAP[$self_addr] + 8];
      
      
      var $26 = _node2tuple($23, FUNCTION_TABLE_OFFSET + 2, FUNCTION_TABLE_OFFSET + 4, $lineno, $col_offset);
      $res = $26;
      __label__ = 9;
      break;
     case 9:
      
      $0 = $res;
      
      $retval = $0;
      var $retval9 = $retval;
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parser_ast2tuple($self, $args, $kw) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      
      
      if (HEAP[_Py_Py3kWarningFlag] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_DeprecationWarning];
      var $4 = _PyErr_WarnEx($3, __str8, 1);
      
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
      
      
      
      var $9 = _parser_st2tuple($self_addr, $args_addr, $kw_addr);
      $0 = $9;
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
  function _parser_st2list($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $line_option = __stackBase__ + 4;
      var $col_option = __stackBase__ + 8;
      var $res;
      var $ok;
      var $lineno;
      var $col_offset;
      HEAP[$self_addr] = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      HEAP[$line_option] = 0;
      HEAP[$col_option] = 0;
      $res = 0;
      
      
      var $3 = $args_addr;
      var $4 = $kw_addr;
      if (HEAP[$self_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = _PyArg_ParseTupleAndKeywords($3, $4, __str9, _keywords_9452, allocate([ _PyST_Type, 0, 0, 0, $self_addr, 0, 0, 0, $line_option, 0, 0, 0, $col_option, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyST_Object**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      $ok = $5;
      __lastLabel__ = 1;
      __label__ = 3;
      break;
     case 2:
      var $6 = _PyArg_ParseTupleAndKeywords($3, $4, __str10, _keywords_9452 + 4, allocate([ $line_option, 0, 0, 0, $col_option, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      $ok = $6;
      __lastLabel__ = 2;
      __label__ = 3;
      break;
     case 3:
      var $7 = __lastLabel__ == 2 ? $6 : $5;
      
      if ($7 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      $lineno = 0;
      $col_offset = 0;
      
      
      if (HEAP[$line_option] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $11 = HEAP[$line_option];
      var $12 = _PyObject_IsTrue($11);
      
      
      $lineno = $12 != 0;
      __label__ = 6;
      break;
     case 6:
      
      
      if (HEAP[$col_option] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $17 = HEAP[$col_option];
      var $18 = _PyObject_IsTrue($17);
      
      
      $col_offset = $18 != 0;
      __label__ = 8;
      break;
     case 8:
      
      
      var $23 = HEAP[HEAP[$self_addr] + 8];
      
      
      var $26 = _node2tuple($23, FUNCTION_TABLE_OFFSET + 6, FUNCTION_TABLE_OFFSET + 8, $lineno, $col_offset);
      $res = $26;
      __label__ = 9;
      break;
     case 9:
      
      $0 = $res;
      
      $retval = $0;
      var $retval9 = $retval;
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parser_ast2list($self, $args, $kw) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      
      
      if (HEAP[_Py_Py3kWarningFlag] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_DeprecationWarning];
      var $4 = _PyErr_WarnEx($3, __str11, 1);
      
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
      
      
      
      var $9 = _parser_st2list($self_addr, $args_addr, $kw_addr);
      $0 = $9;
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
  function _parser_compilest($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $res;
      var $arena;
      var $mod;
      var $str = __stackBase__ + 4;
      var $ok;
      HEAP[$self_addr] = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      $res = 0;
      HEAP[$str] = __str12;
      
      
      var $3 = $args_addr;
      var $4 = $kw_addr;
      if (HEAP[$self_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = _PyArg_ParseTupleAndKeywords($3, $4, __str13, _keywords_9503, allocate([ _PyST_Type, 0, 0, 0, $self_addr, 0, 0, 0, $str, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyST_Object**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      $ok = $5;
      __lastLabel__ = 1;
      __label__ = 3;
      break;
     case 2:
      var $6 = _PyArg_ParseTupleAndKeywords($3, $4, __str15, _keywords_9503 + 4, allocate([ $str, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      $ok = $6;
      __lastLabel__ = 2;
      __label__ = 3;
      break;
     case 3:
      var $7 = __lastLabel__ == 2 ? $6 : $5;
      
      if ($7 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      var $9 = _PyArena_New();
      $arena = $9;
      
      
      if ($arena != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $12 = HEAP[$str];
      
      var $14 = HEAP[$self_addr] + 16;
      
      
      var $17 = HEAP[HEAP[$self_addr] + 8];
      
      var $19 = _PyAST_FromNode($17, $14, $12, $arena);
      $mod = $19;
      
      
      if ($mod != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $23 = HEAP[$self_addr] + 16;
      var $24 = HEAP[$str];
      
      
      var $27 = _PyAST_Compile($mod, $24, $23, $arena);
      
      $res = $27;
      __label__ = 7;
      break;
     case 7:
      
      _PyArena_Free($arena);
      __label__ = 8;
      break;
     case 8:
      
      $0 = $res;
      
      $retval = $0;
      var $retval8 = $retval;
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parser_compileast($self, $args, $kw) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      
      
      if (HEAP[_Py_Py3kWarningFlag] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_DeprecationWarning];
      var $4 = _PyErr_WarnEx($3, __str16, 1);
      
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
      
      
      
      var $9 = _parser_compilest($self_addr, $args_addr, $kw_addr);
      $0 = $9;
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
  function _parser_isexpr($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $iftmp_26;
      var $res;
      var $ok;
      HEAP[$self_addr] = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      $res = 0;
      
      
      var $3 = $args_addr;
      var $4 = $kw_addr;
      if (HEAP[$self_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = _PyArg_ParseTupleAndKeywords($3, $4, __str17, _keywords_9551, allocate([ _PyST_Type, 0, 0, 0, $self_addr, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyST_Object**", 0, 0, 0 ], ALLOC_STACK));
      $ok = $5;
      __lastLabel__ = 1;
      __label__ = 3;
      break;
     case 2:
      var $6 = _PyArg_ParseTupleAndKeywords($3, $4, __str18, _keywords_9551 + 4, allocate(1, "i32", ALLOC_STACK));
      $ok = $6;
      __lastLabel__ = 2;
      __label__ = 3;
      break;
     case 3:
      var $7 = __lastLabel__ == 2 ? $6 : $5;
      
      if ($7 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $iftmp_26 = __Py_TrueStruct;
      __label__ = 7;
      break;
     case 6:
      $iftmp_26 = __Py_ZeroStruct;
      __label__ = 7;
      break;
     case 7:
      
      $res = $iftmp_26;
      
      
      
      var $17 = HEAP[$res] + 1;
      
      
      HEAP[$res] = $17;
      __label__ = 8;
      break;
     case 8:
      
      $0 = $res;
      
      $retval = $0;
      var $retval8 = $retval;
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parser_issuite($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr = __stackBase__;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $iftmp_29;
      var $res;
      var $ok;
      HEAP[$self_addr] = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      $res = 0;
      
      
      var $3 = $args_addr;
      var $4 = $kw_addr;
      if (HEAP[$self_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = _PyArg_ParseTupleAndKeywords($3, $4, __str19, _keywords_9577, allocate([ _PyST_Type, 0, 0, 0, $self_addr, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyST_Object**", 0, 0, 0 ], ALLOC_STACK));
      $ok = $5;
      __lastLabel__ = 1;
      __label__ = 3;
      break;
     case 2:
      var $6 = _PyArg_ParseTupleAndKeywords($3, $4, __str20, _keywords_9577 + 4, allocate(1, "i32", ALLOC_STACK));
      $ok = $6;
      __lastLabel__ = 2;
      __label__ = 3;
      break;
     case 3:
      var $7 = __lastLabel__ == 2 ? $6 : $5;
      
      if ($7 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[HEAP[$self_addr] + 12] == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $iftmp_29 = __Py_ZeroStruct;
      __label__ = 7;
      break;
     case 6:
      $iftmp_29 = __Py_TrueStruct;
      __label__ = 7;
      break;
     case 7:
      
      $res = $iftmp_29;
      
      
      
      var $17 = HEAP[$res] + 1;
      
      
      HEAP[$res] = $17;
      __label__ = 8;
      break;
     case 8:
      
      $0 = $res;
      
      $retval = $0;
      var $retval8 = $retval;
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parser_getattr($self, $name) {
    
    var $self_addr;
    var $name_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $name_addr = $name;
    
    
    var $3 = _Py_FindMethod(_parser_methods, $self_addr, $name_addr);
    $0 = $3;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _err_string($message) {
    
    var $message_addr;
    $message_addr = $message;
    var $0 = HEAP[_parser_error];
    
    _PyErr_SetString($0, $message_addr);
    return;
  }
  function _parser_do_parse($args, $kw, $argspec, $type) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $args_addr;
      var $kw_addr;
      var $argspec_addr;
      var $type_addr;
      var $retval;
      var $0;
      var $iftmp_32;
      var $string = __stackBase__;
      var $res;
      var $flags = __stackBase__ + 4;
      var $err = __stackBase__ + 8;
      var $n;
      $args_addr = $args;
      $kw_addr = $kw;
      $argspec_addr = $argspec;
      $type_addr = $type;
      HEAP[$string] = 0;
      $res = 0;
      HEAP[$flags] = 0;
      
      
      
      var $4 = _PyArg_ParseTupleAndKeywords($args_addr, $kw_addr, $argspec_addr, _keywords_9618, allocate([ $string, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($4 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 1:
      
      
      if ($type_addr == 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $iftmp_32 = 258;
      __label__ = 4;
      break;
     case 3:
      $iftmp_32 = 257;
      __label__ = 4;
      break;
     case 4:
      var $8 = HEAP[$string];
      
      var $10 = _PyParser_ParseStringFlagsFilenameEx($8, 0, __PyParser_Grammar, $iftmp_32, $err, $flags);
      $n = $10;
      
      if ($10 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      var $14 = _parser_newstobject($n, $type_addr);
      $res = $14;
      
      
      if ($res != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      var $20 = HEAP[$flags] & 253952;
      
      
      HEAP[$res + 16] = $20;
      __label__ = 8;
      break;
     case 7:
      _PyParser_SetError($err);
      __label__ = 8;
      break;
     case 8:
      
      $0 = $res;
      
      $retval = $0;
      var $retval9 = $retval;
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parser_expr($self, $args, $kw) {
    
    var $self_addr;
    var $args_addr;
    var $kw_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    $kw_addr = $kw;
    
    
    var $3 = _parser_do_parse($args_addr, $kw_addr, __str32, 1);
    $0 = $3;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _parser_suite($self, $args, $kw) {
    
    var $self_addr;
    var $args_addr;
    var $kw_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    $kw_addr = $kw;
    
    
    var $3 = _parser_do_parse($args_addr, $kw_addr, __str33, 2);
    $0 = $3;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _parser_tuple2st($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $st;
      var $tuple = __stackBase__;
      var $tree;
      var $start_sym;
      $self_addr = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      $st = 0;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kw_addr, __str34, _keywords_9672, allocate([ $tuple, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$tuple];
      var $6 = _PySequence_Check($5);
      
      if ($6 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($8, __str36);
      $0 = 0;
      __label__ = 23;
      break;
     case 4:
      var $9 = HEAP[$tuple];
      var $10 = _build_node_tree($9);
      $tree = $10;
      
      
      if ($tree != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 5:
      
      
      
      
      $start_sym = HEAP[$tree];
      
      
      if ($start_sym == 258) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      var $20 = _validate_expr_tree($tree);
      
      var $22 = $tree;
      if ($20 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $23 = _parser_newstobject($22, 1);
      $st = $23;
      __lastLabel__ = 7;
      __label__ = 19;
      break;
     case 8:
      _PyNode_Free($22);
      __label__ = 18;
      break;
     case 9:
      
      
      if ($start_sym == 257) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      var $27 = _validate_file_input($tree);
      
      var $29 = $tree;
      if ($27 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $30 = _parser_newstobject($29, 2);
      $st = $30;
      __lastLabel__ = 11;
      __label__ = 19;
      break;
     case 12:
      _PyNode_Free($29);
      __label__ = 18;
      break;
     case 13:
      
      
      var $33 = $tree;
      if ($start_sym == 339) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      var $34 = _validate_encoding_decl($33);
      
      var $36 = $tree;
      if ($34 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $37 = _parser_newstobject($36, 2);
      $st = $37;
      __lastLabel__ = 15;
      __label__ = 19;
      break;
     case 16:
      _PyNode_Free($36);
      __label__ = 18;
      break;
     case 17:
      _PyNode_Free($33);
      _err_string(__str37);
      __label__ = 18;
      break;
     case 18:
      var $_pr = $st;
      __lastLabel__ = 18;
      __label__ = 19;
      break;
     case 19:
      var $38 = __lastLabel__ == 18 ? $_pr : __lastLabel__ == 15 ? $37 : __lastLabel__ == 11 ? $30 : $23;
      
      if ($38 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      var $40 = _PyErr_Occurred();
      
      if ($40 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      _err_string(__str38);
      __label__ = 22;
      break;
     case 22:
      
      $0 = $st;
      __label__ = 23;
      break;
     case 23:
      
      $retval = $0;
      var $retval25 = $retval;
      STACKTOP = __stackBase__;
      return $retval25;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parser_tuple2ast($self, $args, $kw) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      
      
      if (HEAP[_Py_Py3kWarningFlag] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_DeprecationWarning];
      var $4 = _PyErr_WarnEx($3, __str39, 1);
      
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
      
      
      
      var $9 = _parser_tuple2st($self_addr, $args_addr, $kw_addr);
      $0 = $9;
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
  function _build_node_children($tuple, $root, $line_num) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tuple_addr;
      var $root_addr;
      var $line_num_addr;
      var $retval;
      var $iftmp_48;
      var $iftmp_47;
      var $0;
      var $len;
      var $i;
      var $err;
      var $elem;
      var $ok;
      var $type;
      var $strn;
      var $temp;
      var $err11;
      var $len20;
      var $temp21;
      var $o;
      var $err53;
      var $new_child;
      $tuple_addr = $tuple;
      $root_addr = $root;
      $line_num_addr = $line_num;
      
      var $2 = _PyObject_Size($tuple_addr);
      $len = $2;
      $i = 1;
      __label__ = 69;
      break;
     case 1:
      
      
      var $5 = _PySequence_GetItem($tuple_addr, $i);
      $elem = $5;
      
      
      
      $ok = $elem != 0;
      $type = 0;
      $strn = 0;
      
      
      if ($ok != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 2:
      
      var $12 = _PySequence_Check($elem);
      $ok = $12;
      
      if ($12 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 3:
      
      var $15 = _PySequence_GetItem($elem, 0);
      $temp = $15;
      
      
      if ($temp == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $ok = 0;
      __label__ = 10;
      break;
     case 5:
      
      
      
      
      
      
      
      
      $ok = (HEAP[HEAP[$temp + 4] + 84] & 8388608) != 0;
      
      
      if ($ok != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      $type = HEAP[$temp + 8];
      __label__ = 7;
      break;
     case 7:
      
      
      
      var $35 = HEAP[$temp] - 1;
      
      
      HEAP[$temp] = $35;
      
      
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $46 = HEAP[HEAP[$temp + 4] + 24];
      
      FUNCTION_TABLE[$46]($temp);
      __label__ = 9;
      break;
     case 9:
      
      
      if ($ok == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 10:
      
      var $50 = _Py_BuildValue(__str40, allocate([ $elem, 0, 0, 0, __str41, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $err11 = $50;
      var $51 = HEAP[_parser_error];
      
      _PyErr_SetObject($51, $err11);
      
      
      if ($err11 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      
      var $58 = HEAP[$err11] - 1;
      
      
      HEAP[$err11] = $58;
      
      
      
      
      if (HEAP[$err11] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $69 = HEAP[HEAP[$err11 + 4] + 24];
      
      FUNCTION_TABLE[$69]($err11);
      __label__ = 13;
      break;
     case 13:
      
      
      if ($elem != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      var $76 = HEAP[$elem] - 1;
      
      
      HEAP[$elem] = $76;
      
      
      
      
      if (HEAP[$elem] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $87 = HEAP[HEAP[$elem + 4] + 24];
      
      FUNCTION_TABLE[$87]($elem);
      __label__ = 16;
      break;
     case 16:
      $0 = 0;
      __label__ = 71;
      break;
     case 17:
      
      
      if ($type <= 255) {
        __label__ = 18;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 18:
      
      var $92 = _PyObject_Size($elem);
      $len20 = $92;
      
      
      
      
      
      if ($len20 != 2 & $len20 != 3) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      _err_string(__str42);
      $0 = 0;
      __label__ = 71;
      break;
     case 20:
      
      var $98 = _PySequence_GetItem($elem, 1);
      $temp21 = $98;
      
      
      if ($temp21 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      $0 = 0;
      __label__ = 71;
      break;
     case 22:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$temp21 + 4] + 84] & 134217728) == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 23:
      
      
      
      
      var $112 = HEAP[HEAP[$temp21 + 4] + 12];
      var $113 = HEAP[_parser_error];
      var $114 = _PyErr_Format($113, __str43, allocate([ $112, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      
      
      var $118 = HEAP[$temp21] - 1;
      
      
      HEAP[$temp21] = $118;
      
      
      
      
      if (HEAP[$temp21] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $129 = HEAP[HEAP[$temp21 + 4] + 24];
      
      FUNCTION_TABLE[$129]($temp21);
      __label__ = 25;
      break;
     case 25:
      $0 = 0;
      __label__ = 71;
      break;
     case 26:
      
      
      if ($len20 == 3) {
        __label__ = 27;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 27:
      
      var $134 = _PySequence_GetItem($elem, 2);
      $o = $134;
      
      
      if ($o != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 28:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$o + 4] + 84] & 8388608) != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      var $147 = HEAP[$o + 8];
      
      HEAP[$line_num_addr] = $147;
      
      
      
      var $152 = HEAP[$o] - 1;
      
      
      HEAP[$o] = $152;
      
      
      
      
      if (HEAP[$o] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 30:
      
      
      
      
      var $163 = HEAP[HEAP[$temp21 + 4] + 12];
      var $164 = HEAP[_parser_error];
      var $165 = _PyErr_Format($164, __str44, allocate([ $163, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      
      
      var $169 = HEAP[$o] - 1;
      
      
      HEAP[$o] = $169;
      
      
      
      
      if (HEAP[$o] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $180 = HEAP[HEAP[$o + 4] + 24];
      
      FUNCTION_TABLE[$180]($o);
      __label__ = 32;
      break;
     case 32:
      
      
      
      var $185 = HEAP[$temp21] - 1;
      
      
      HEAP[$temp21] = $185;
      
      
      
      
      if (HEAP[$temp21] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $196 = HEAP[HEAP[$temp21 + 4] + 24];
      
      FUNCTION_TABLE[$196]($temp21);
      __label__ = 34;
      break;
     case 34:
      $0 = 0;
      __label__ = 71;
      break;
     case 35:
      
      
      
      
      var $202 = HEAP[HEAP[$o + 4] + 24];
      
      FUNCTION_TABLE[$202]($o);
      __label__ = 36;
      break;
     case 36:
      
      
      
      
      
      $len20 = HEAP[$temp21 + 8] + 1;
      
      if (HEAP[$temp21 + 8] + 1 >= 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 37:
      
      
      if ($len20 != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      $iftmp_48 = $len20;
      __label__ = 41;
      break;
     case 39:
      $iftmp_48 = 1;
      __label__ = 41;
      break;
     case 40:
      $iftmp_47 = 0;
      $strn = 0;
      __label__ = 43;
      break;
     case 41:
      
      var $214 = _malloc($iftmp_48);
      $iftmp_47 = $214;
      $strn = $214;
      
      if ($214 != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($strn, $temp21 + 20, $len20, 1, 0);
      __label__ = 43;
      break;
     case 43:
      
      
      
      var $225 = HEAP[$temp21] - 1;
      
      
      HEAP[$temp21] = $225;
      
      
      
      
      if (HEAP[$temp21] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 44:
      
      
      
      
      var $236 = HEAP[HEAP[$temp21 + 4] + 24];
      
      FUNCTION_TABLE[$236]($temp21);
      __label__ = 53;
      break;
     case 45:
      
      
      if ($type <= 255) {
        __label__ = 46;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 46:
      
      var $241 = _Py_BuildValue(__str40, allocate([ $elem, 0, 0, 0, __str45, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $err53 = $241;
      var $242 = HEAP[_parser_error];
      
      _PyErr_SetObject($242, $err53);
      
      
      if ($err53 != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 47:
      
      
      
      var $249 = HEAP[$err53] - 1;
      
      
      HEAP[$err53] = $249;
      
      
      
      
      if (HEAP[$err53] == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      
      
      
      var $260 = HEAP[HEAP[$err53 + 4] + 24];
      
      FUNCTION_TABLE[$260]($err53);
      __label__ = 49;
      break;
     case 49:
      
      
      if ($elem != 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 50:
      
      
      
      var $267 = HEAP[$elem] - 1;
      
      
      HEAP[$elem] = $267;
      
      
      
      
      if (HEAP[$elem] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      
      
      
      
      var $278 = HEAP[HEAP[$elem + 4] + 24];
      
      FUNCTION_TABLE[$278]($elem);
      __label__ = 52;
      break;
     case 52:
      $0 = 0;
      __label__ = 71;
      break;
     case 53:
      
      var $281 = HEAP[$line_num_addr];
      
      
      
      var $285 = _PyNode_AddChild($root_addr, $type, $strn, $281, 0);
      $err = $285;
      
      if ($285 == 15) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      
      _free($strn);
      var $288 = _PyErr_NoMemory();
      
      $0 = $288;
      __label__ = 71;
      break;
     case 55:
      
      
      if ($err == 19) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      
      _free($strn);
      var $293 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($293, __str46);
      $0 = 0;
      __label__ = 71;
      break;
     case 57:
      
      
      if ($type > 255) {
        __label__ = 58;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 58:
      
      
      
      
      
      
      $new_child = HEAP[$root_addr + 20] + 24 * ($i - 1);
      
      
      
      var $305 = _build_node_children($elem, $new_child, $line_num_addr);
      
      
      if ($305 != $new_child) {
        __label__ = 59;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 59:
      
      
      if ($elem != 0) {
        __label__ = 60;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 60:
      
      
      
      var $313 = HEAP[$elem] - 1;
      
      
      HEAP[$elem] = $313;
      
      
      
      
      if (HEAP[$elem] == 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      
      
      
      
      var $324 = HEAP[HEAP[$elem + 4] + 24];
      
      FUNCTION_TABLE[$324]($elem);
      __label__ = 62;
      break;
     case 62:
      $0 = 0;
      __label__ = 71;
      break;
     case 63:
      
      
      if ($type == 4) {
        __label__ = 64;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 64:
      
      
      var $330 = HEAP[$line_num_addr] + 1;
      
      HEAP[$line_num_addr] = $330;
      __label__ = 65;
      break;
     case 65:
      
      
      if ($elem != 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 66:
      
      
      
      var $337 = HEAP[$elem] - 1;
      
      
      HEAP[$elem] = $337;
      
      
      
      
      if (HEAP[$elem] == 0) {
        __label__ = 67;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 67:
      
      
      
      
      var $348 = HEAP[HEAP[$elem + 4] + 24];
      
      FUNCTION_TABLE[$348]($elem);
      __label__ = 68;
      break;
     case 68:
      
      var $351 = $i + 1;
      $i = $351;
      __label__ = 69;
      break;
     case 69:
      
      
      
      if ($i < $len) {
        __label__ = 1;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 70:
      
      $0 = $root_addr;
      __label__ = 71;
      break;
     case 71:
      
      $retval = $0;
      var $retval80 = $retval;
      return $retval80;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _build_node_tree($tuple) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tuple_addr;
      var $retval;
      var $0;
      var $iftmp_56;
      var $iftmp_55;
      var $res;
      var $temp;
      var $num;
      var $line_num = __stackBase__;
      var $encoding;
      var $len;
      var $err;
      $tuple_addr = $tuple;
      $res = 0;
      
      var $2 = _PySequence_GetItem($tuple_addr, 0);
      $temp = $2;
      $num = -1;
      
      
      if ($temp != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      var $6 = _PyInt_AsLong($temp);
      $num = $6;
      
      
      if ($temp != 0) {
        __lastLabel__ = 1;
        __label__ = 2;
        break;
      } else {
        __lastLabel__ = 1;
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      var $11 = HEAP[$temp] - 1;
      
      
      HEAP[$temp] = $11;
      
      
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $22 = HEAP[HEAP[$temp + 4] + 24];
      
      FUNCTION_TABLE[$22]($temp);
      __label__ = 4;
      break;
     case 4:
      var $_pr1 = $num;
      __lastLabel__ = 4;
      __label__ = 5;
      break;
     case 5:
      var $24 = __lastLabel__ == 4 ? $_pr1 : $6;
      
      if ($24 <= 255) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      var $27 = _Py_BuildValue(__str40, allocate([ $tuple_addr, 0, 0, 0, __str47, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $tuple_addr = $27;
      var $28 = HEAP[_parser_error];
      
      _PyErr_SetObject($28, $tuple_addr);
      
      
      if ($tuple_addr != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 7:
      
      
      
      var $35 = HEAP[$tuple_addr] - 1;
      
      
      HEAP[$tuple_addr] = $35;
      
      
      
      
      if (HEAP[$tuple_addr] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 8:
      
      
      
      
      var $46 = HEAP[HEAP[$tuple_addr + 4] + 24];
      
      FUNCTION_TABLE[$46]($tuple_addr);
      __label__ = 32;
      break;
     case 9:
      
      
      if ($num > 255) {
        __label__ = 10;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 10:
      HEAP[$line_num] = 0;
      $encoding = 0;
      
      
      if ($num == 339) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      var $53 = _PySequence_GetItem($tuple_addr, 2);
      $encoding = $53;
      
      var $55 = _PySequence_GetSlice($tuple_addr, 0, 2);
      $tuple_addr = $55;
      __label__ = 12;
      break;
     case 12:
      
      var $57 = _PyNode_New($num);
      $res = $57;
      
      if ($57 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 13:
      
      
      var $61 = _build_node_children($tuple_addr, $res, $line_num);
      var $62 = $res;
      
      if ($61 != $62) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      _PyNode_Free($res);
      $res = 0;
      __label__ = 32;
      break;
     case 15:
      
      if ($62 != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 16:
      
      
      if ($encoding != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 17:
      
      
      
      
      
      $len = HEAP[$encoding + 8] + 1;
      
      
      if ($len >= 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 18:
      
      
      if ($len != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      $iftmp_56 = $len;
      __label__ = 21;
      break;
     case 20:
      $iftmp_56 = 1;
      __label__ = 21;
      break;
     case 21:
      
      var $79 = _malloc($iftmp_56);
      $iftmp_55 = $79;
      __label__ = 23;
      break;
     case 22:
      $iftmp_55 = 0;
      __label__ = 23;
      break;
     case 23:
      
      
      
      HEAP[$res + 4] = $iftmp_55;
      
      
      
      
      if (HEAP[$res + 4] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      
      
      
      var $94 = HEAP[$res + 4];
      _llvm_memcpy_p0i8_p0i8_i32($94, $encoding + 20, $len, 1, 0);
      __label__ = 25;
      break;
     case 25:
      
      
      
      var $98 = HEAP[$encoding] - 1;
      
      
      HEAP[$encoding] = $98;
      
      
      
      
      if (HEAP[$encoding] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $109 = HEAP[HEAP[$encoding + 4] + 24];
      
      FUNCTION_TABLE[$109]($encoding);
      __label__ = 27;
      break;
     case 27:
      
      
      
      var $114 = HEAP[$tuple_addr] - 1;
      
      
      HEAP[$tuple_addr] = $114;
      
      
      
      
      if (HEAP[$tuple_addr] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 28:
      
      
      
      
      var $125 = HEAP[HEAP[$tuple_addr + 4] + 24];
      
      FUNCTION_TABLE[$125]($tuple_addr);
      __label__ = 32;
      break;
     case 29:
      
      var $128 = _Py_BuildValue(__str40, allocate([ $tuple_addr, 0, 0, 0, __str48, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $err = $128;
      var $129 = HEAP[_parser_error];
      
      _PyErr_SetObject($129, $err);
      
      
      if ($err != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      
      
      
      var $136 = HEAP[$err] - 1;
      
      
      HEAP[$err] = $136;
      
      
      
      
      if (HEAP[$err] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $147 = HEAP[HEAP[$err + 4] + 24];
      
      FUNCTION_TABLE[$147]($err);
      __label__ = 32;
      break;
     case 32:
      
      $0 = $res;
      
      $retval = $0;
      var $retval34 = $retval;
      STACKTOP = __stackBase__;
      return $retval34;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_ntype($n, $t) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $n_addr;
      var $t_addr;
      var $retval;
      var $0;
      $n_addr = $n;
      $t_addr = $t;
      
      
      
      
      
      
      if (HEAP[$n_addr] != $t_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $10 = HEAP[$n_addr];
      var $11 = HEAP[_parser_error];
      
      var $13 = _PyErr_Format($11, __str49, allocate([ $t_addr, 0, 0, 0, $10, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      $0 = 1;
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
  function _validate_numnodes($n, $num, $name) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $n_addr;
      var $num_addr;
      var $name_addr;
      var $retval;
      var $0;
      $n_addr = $n;
      $num_addr = $num;
      $name_addr = $name;
      
      
      
      
      
      if (HEAP[$n_addr + 16] != $num_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $6 = HEAP[_parser_error];
      
      var $8 = _PyErr_Format($6, __str50, allocate([ $name_addr, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      $0 = 1;
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
  function _validate_terminal($terminal, $type, $string) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $terminal_addr;
      var $type_addr;
      var $string_addr;
      var $retval;
      var $0;
      var $iftmp_62;
      var $res;
      $terminal_addr = $terminal;
      $type_addr = $type;
      $string_addr = $string;
      
      
      var $3 = _validate_ntype($terminal_addr, $type_addr);
      
      if ($3 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($string_addr == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $9 = HEAP[$terminal_addr + 4];
      
      var $11 = _strcmp($string_addr, $9);
      
      if ($11 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_62 = 1;
      $res = 1;
      __label__ = 6;
      break;
     case 4:
      $iftmp_62 = 0;
      $res = 0;
      var $13 = _PyErr_Occurred();
      
      if ($13 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $15 = HEAP[_parser_error];
      
      var $17 = _PyErr_Format($15, __str51, allocate([ $string_addr, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 6;
      break;
     case 6:
      
      $0 = $res;
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_repeating_list($tree, $ntype, $vfunc, $name) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $ntype_addr;
      var $vfunc_addr;
      var $name_addr;
      var $retval;
      var $0;
      var $iftmp_65;
      var $iftmp_64;
      var $nch;
      var $res;
      var $pos;
      $tree_addr = $tree;
      $ntype_addr = $ntype;
      $vfunc_addr = $vfunc;
      $name_addr = $name;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      
      if ($nch == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $8 = _validate_ntype($tree_addr, $ntype_addr);
      
      if ($8 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[$tree_addr + 20];
      var $14 = $vfunc_addr;
      var $15 = FUNCTION_TABLE[$14]($13);
      
      if ($15 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $iftmp_64 = 1;
      $res = 1;
      __label__ = 6;
      break;
     case 4:
      $iftmp_64 = 0;
      $res = 0;
      var $17 = _PyErr_Occurred();
      
      if ($17 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      var $21 = _validate_numnodes($tree_addr, 1, $name_addr);
      __label__ = 19;
      break;
     case 6:
      
      
      
      if (($nch & 1) == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $27 = HEAP[$tree_addr + 20];
      
      var $29 = $nch - 1;
      $nch = $29;
      
      var $31 = $27 + 24 * $nch;
      var $32 = _validate_terminal($31, 12, __str52);
      $res = $32;
      __lastLabel__ = 7;
      __label__ = 9;
      break;
     case 8:
      var $_pr = $res;
      __lastLabel__ = 8;
      __label__ = 9;
      break;
     case 9:
      var $33 = __lastLabel__ == 8 ? $_pr : $32;
      
      if ($33 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 10:
      
      
      if ($nch > 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 11:
      $pos = 1;
      var $_pr1 = $res;
      __lastLabel__ = 11;
      __label__ = 17;
      break;
     case 12:
      
      
      
      
      var $41 = HEAP[$tree_addr + 20] + 24 * $pos;
      var $42 = _validate_terminal($41, 12, __str52);
      
      if ($42 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      var $49 = HEAP[$tree_addr + 20] + 24 * ($pos + 1);
      var $50 = $vfunc_addr;
      var $51 = FUNCTION_TABLE[$50]($49);
      
      if ($51 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      $iftmp_65 = 1;
      __label__ = 16;
      break;
     case 15:
      $iftmp_65 = 0;
      __label__ = 16;
      break;
     case 16:
      var $53 = $iftmp_65;
      $res = $53;
      
      var $55 = $pos + 2;
      $pos = $55;
      __lastLabel__ = 16;
      __label__ = 17;
      break;
     case 17:
      var $56 = __lastLabel__ == 16 ? $53 : $_pr1;
      
      if ($56 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      if ($pos < $nch) {
        __label__ = 12;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      $0 = $res;
      
      $retval = $0;
      var $retval20 = $retval;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_class($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_69;
      var $iftmp_68;
      var $iftmp_67;
      var $iftmp_66;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 329);
      
      if ($5 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      if ($nch == 4 | $nch == 6 | $nch == 7) {
        __label__ = 2;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 2:
      $iftmp_66 = 1;
      $res = 1;
      
      
      
      var $16 = HEAP[$tree_addr + 20];
      var $17 = _validate_terminal($16, 1, __str53);
      
      if ($17 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $22 = HEAP[$tree_addr + 20] + 24;
      var $23 = _validate_ntype($22, 1);
      
      if ($23 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      var $30 = HEAP[$tree_addr + 20] + 24 * ($nch - 2);
      var $31 = _validate_terminal($30, 11, __str54);
      
      if ($31 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      var $38 = HEAP[$tree_addr + 20] + 24 * ($nch - 1);
      var $39 = _validate_suite($38);
      
      if ($39 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      $iftmp_67 = 1;
      __label__ = 8;
      break;
     case 7:
      $iftmp_67 = 0;
      __label__ = 8;
      break;
     case 8:
      var $41 = $iftmp_67;
      $res = $41;
      __lastLabel__ = 8;
      __label__ = 10;
      break;
     case 9:
      $iftmp_66 = 0;
      $res = 0;
      
      var $43 = _validate_numnodes($tree_addr, 4, __str53);
      var $_pr = $res;
      __lastLabel__ = 9;
      __label__ = 10;
      break;
     case 10:
      var $44 = __lastLabel__ == 9 ? $_pr : $41;
      
      if ($44 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 11:
      
      
      if ($nch == 7) {
        __label__ = 12;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 12:
      
      
      
      var $51 = HEAP[$tree_addr + 20] + 48;
      var $52 = _validate_terminal($51, 7, __str55);
      
      if ($52 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $57 = HEAP[$tree_addr + 20] + 72;
      var $58 = _validate_testlist($57);
      
      if ($58 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      var $63 = HEAP[$tree_addr + 20] + 96;
      var $64 = _validate_terminal($63, 8, __str56);
      
      if ($64 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      $iftmp_68 = 1;
      __label__ = 17;
      break;
     case 16:
      $iftmp_68 = 0;
      __label__ = 17;
      break;
     case 17:
      
      $res = $iftmp_68;
      __label__ = 24;
      break;
     case 18:
      
      
      if ($nch == 6) {
        __label__ = 19;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 19:
      
      
      
      var $72 = HEAP[$tree_addr + 20] + 48;
      var $73 = _validate_terminal($72, 7, __str55);
      
      if ($73 == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      var $78 = HEAP[$tree_addr + 20] + 72;
      var $79 = _validate_terminal($78, 8, __str56);
      
      if ($79 == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      $iftmp_69 = 1;
      __label__ = 23;
      break;
     case 22:
      $iftmp_69 = 0;
      __label__ = 23;
      break;
     case 23:
      
      $res = $iftmp_69;
      __label__ = 24;
      break;
     case 24:
      
      $0 = $res;
      
      $retval = $0;
      var $retval29 = $retval;
      return $retval29;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_if($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_73;
      var $iftmp_71;
      var $iftmp_70;
      var $nch;
      var $res;
      var $j;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 293);
      
      if ($5 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($nch <= 3) {
        __label__ = 13;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $12 = HEAP[$tree_addr + 20];
      var $13 = _validate_terminal($12, 1, __str57);
      
      if ($13 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $18 = HEAP[$tree_addr + 20] + 24;
      var $19 = _validate_test($18);
      
      if ($19 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $24 = HEAP[$tree_addr + 20] + 48;
      var $25 = _validate_terminal($24, 11, __str54);
      
      if ($25 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $30 = HEAP[$tree_addr + 20] + 72;
      var $31 = _validate_suite($30);
      
      if ($31 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      $iftmp_70 = 1;
      $res = 1;
      
      
      
      if ($nch % 4 != 3) {
        __label__ = 15;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      var $41 = HEAP[$tree_addr + 20] + 24 * ($nch - 3);
      var $42 = _validate_terminal($41, 1, __str58);
      
      if ($42 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      var $49 = HEAP[$tree_addr + 20] + 24 * ($nch - 2);
      var $50 = _validate_terminal($49, 11, __str54);
      
      if ($50 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      var $57 = HEAP[$tree_addr + 20] + 24 * ($nch - 1);
      var $58 = _validate_suite($57);
      
      if ($58 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      $iftmp_71 = 1;
      __label__ = 12;
      break;
     case 11:
      $iftmp_71 = 0;
      __label__ = 12;
      break;
     case 12:
      
      $res = $iftmp_71;
      
      var $62 = $nch - 3;
      $nch = $62;
      __label__ = 15;
      break;
     case 13:
      $iftmp_70 = 0;
      $res = 0;
      var $63 = _PyErr_Occurred();
      
      if ($63 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      var $66 = _validate_numnodes($tree_addr, 4, __str57);
      __label__ = 15;
      break;
     case 15:
      
      
      
      if (($nch & 3) != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      var $71 = _validate_numnodes($tree_addr, 0, __str57);
      $res = $71;
      __label__ = 29;
      break;
     case 17:
      
      
      if ($res != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 18:
      
      
      if ($nch > 4) {
        __label__ = 19;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 19:
      $j = 4;
      __label__ = 27;
      break;
     case 20:
      
      
      
      
      var $80 = HEAP[$tree_addr + 20] + 24 * $j;
      var $81 = _validate_terminal($80, 1, __str59);
      
      if ($81 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      var $88 = HEAP[$tree_addr + 20] + 24 * ($j + 2);
      var $89 = _validate_terminal($88, 11, __str54);
      
      if ($89 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      
      var $96 = HEAP[$tree_addr + 20] + 24 * ($j + 1);
      var $97 = _validate_test($96);
      
      if ($97 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      var $104 = HEAP[$tree_addr + 20] + 24 * ($j + 3);
      var $105 = _validate_suite($104);
      
      if ($105 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      $iftmp_73 = 1;
      __label__ = 26;
      break;
     case 25:
      $iftmp_73 = 0;
      __label__ = 26;
      break;
     case 26:
      
      $res = $iftmp_73;
      
      var $109 = $j + 4;
      $j = $109;
      __label__ = 27;
      break;
     case 27:
      
      
      
      if ($j >= $nch) {
        __label__ = 29;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      if ($res != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      $0 = $res;
      
      $retval = $0;
      var $retval33 = $retval;
      return $retval33;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_parameters($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_75;
      var $iftmp_74;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 263);
      
      if ($5 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if ($nch == 2 | $nch == 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 2:
      $iftmp_74 = 1;
      $res = 1;
      
      
      
      var $14 = HEAP[$tree_addr + 20];
      var $15 = _validate_terminal($14, 7, __str55);
      
      if ($15 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      var $22 = HEAP[$tree_addr + 20] + 24 * ($nch - 1);
      var $23 = _validate_terminal($22, 8, __str56);
      
      if ($23 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $iftmp_75 = 0;
      $res = 0;
      __label__ = 8;
      break;
     case 5:
      $iftmp_75 = 1;
      $res = 1;
      
      
      if ($nch == 3) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      var $30 = HEAP[$tree_addr + 20] + 24;
      var $31 = _validate_varargslist($30);
      $res = $31;
      __label__ = 8;
      break;
     case 7:
      $iftmp_74 = 0;
      $res = 0;
      
      var $33 = _validate_numnodes($tree_addr, 2, __str60);
      __label__ = 8;
      break;
     case 8:
      
      $0 = $res;
      
      $retval = $0;
      var $retval15 = $retval;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_suite($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_77;
      var $iftmp_76;
      var $nch;
      var $res;
      var $i;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 300);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if ($nch == 1 | $nch > 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      $iftmp_76 = 1;
      $res = 1;
      
      
      
      
      
      var $16 = HEAP[$tree_addr + 20];
      if ($nch != 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $17 = _validate_simple_stmt($16);
      $res = $17;
      __label__ = 17;
      break;
     case 4:
      $iftmp_76 = 0;
      $res = 0;
      __label__ = 17;
      break;
     case 5:
      var $18 = _validate_terminal($16, 4, 0);
      
      if ($18 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $23 = HEAP[$tree_addr + 20] + 24;
      var $24 = _validate_terminal($23, 5, 0);
      
      if ($24 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $29 = HEAP[$tree_addr + 20] + 48;
      var $30 = _validate_stmt($29);
      
      if ($30 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      var $37 = HEAP[$tree_addr + 20] + 24 * ($nch - 1);
      var $38 = _validate_terminal($37, 6, __str61);
      
      if ($38 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $iftmp_77 = 0;
      $res = 0;
      var $_pr2 = $nch;
      __lastLabel__ = 9;
      __label__ = 15;
      break;
     case 10:
      $iftmp_77 = 1;
      $res = 1;
      var $40 = $nch;
      
      if ($40 <= 4) {
        __lastLabel__ = 10;
        __label__ = 15;
        break;
      } else {
        __lastLabel__ = 10;
        __label__ = 11;
        break;
      }
     case 11:
      $i = 3;
      
      var $43 = $nch - 1;
      $nch = $43;
      var $_pr = $res;
      __lastLabel__ = 11;
      __label__ = 13;
      break;
     case 12:
      
      
      
      
      var $48 = HEAP[$tree_addr + 20] + 24 * $i;
      var $49 = _validate_stmt($48);
      $res = $49;
      
      var $51 = $i + 1;
      $i = $51;
      __lastLabel__ = 12;
      __label__ = 13;
      break;
     case 13:
      var $52 = __lastLabel__ == 12 ? $49 : $_pr;
      
      if ($52 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      if ($i < $nch) {
        __label__ = 12;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      var $57 = __lastLabel__ == 9 ? $_pr2 : $40;
      
      if ($57 <= 3) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      var $60 = _validate_numnodes($tree_addr, 4, __str62);
      $res = $60;
      __label__ = 17;
      break;
     case 17:
      
      $0 = $res;
      
      $retval = $0;
      var $retval24 = $retval;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_testlist($tree) {
    
    var $tree_addr;
    var $retval;
    var $0;
    $tree_addr = $tree;
    
    var $2 = _validate_repeating_list($tree_addr, 327, FUNCTION_TABLE_OFFSET + 10, __str63);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _validate_testlist1($tree) {
    
    var $tree_addr;
    var $retval;
    var $0;
    $tree_addr = $tree;
    
    var $2 = _validate_repeating_list($tree_addr, 338, FUNCTION_TABLE_OFFSET + 10, __str64);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _validate_testlist_safe($tree) {
    
    var $tree_addr;
    var $retval;
    var $0;
    $tree_addr = $tree;
    
    var $2 = _validate_repeating_list($tree_addr, 301, FUNCTION_TABLE_OFFSET + 12, __str65);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _validate_varargslist_trailer($tree, $start) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $start_addr;
      var $retval;
      var $iftmp_78;
      var $0;
      var $nch;
      var $res;
      var $sym;
      $tree_addr = $tree;
      $start_addr = $start;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      $res = 0;
      
      
      
      if ($nch <= $start_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      _err_string(__str66);
      $0 = 0;
      __label__ = 20;
      break;
     case 2:
      
      
      
      
      
      
      
      
      $sym = HEAP[HEAP[$tree_addr + 20] + 24 * $start_addr];
      
      
      if ($sym == 16) {
        __label__ = 3;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 3:
      
      
      
      
      if ($nch - $start_addr == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      var $26 = HEAP[$tree_addr + 20] + 24 * ($start_addr + 1);
      var $27 = _validate_terminal($26, 1, 0);
      $res = $27;
      __lastLabel__ = 4;
      __label__ = 17;
      break;
     case 5:
      
      
      
      
      if ($nch - $start_addr == 5) {
        __label__ = 6;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 6:
      
      
      
      
      
      var $37 = HEAP[$tree_addr + 20] + 24 * ($start_addr + 1);
      var $38 = _validate_terminal($37, 1, 0);
      
      if ($38 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      var $45 = HEAP[$tree_addr + 20] + 24 * ($start_addr + 2);
      var $46 = _validate_terminal($45, 12, __str52);
      
      if ($46 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      var $53 = HEAP[$tree_addr + 20] + 24 * ($start_addr + 3);
      var $54 = _validate_terminal($53, 36, __str67);
      
      if ($54 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      var $61 = HEAP[$tree_addr + 20] + 24 * ($start_addr + 4);
      var $62 = _validate_terminal($61, 1, 0);
      
      if ($62 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      $iftmp_78 = 1;
      __label__ = 12;
      break;
     case 11:
      $iftmp_78 = 0;
      __label__ = 12;
      break;
     case 12:
      var $64 = $iftmp_78;
      $res = $64;
      __lastLabel__ = 12;
      __label__ = 17;
      break;
     case 13:
      
      
      if ($sym == 36) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      
      if ($nch - $start_addr == 2) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      var $76 = HEAP[$tree_addr + 20] + 24 * ($start_addr + 1);
      var $77 = _validate_terminal($76, 1, 0);
      $res = $77;
      __lastLabel__ = 15;
      __label__ = 17;
      break;
     case 16:
      var $_pr = $res;
      __lastLabel__ = 16;
      __label__ = 17;
      break;
     case 17:
      var $78 = __lastLabel__ == 16 ? $_pr : __lastLabel__ == 4 ? $27 : __lastLabel__ == 12 ? $64 : $77;
      
      if ($78 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      _err_string(__str68);
      __label__ = 19;
      break;
     case 19:
      
      $0 = $res;
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
  function _validate_varargslist($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $iftmp_83;
      var $iftmp_82;
      var $iftmp_81;
      var $iftmp_80;
      var $0;
      var $iftmp_79;
      var $nch;
      var $res;
      var $sym;
      var $i;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 264);
      
      if ($5 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($nch == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $iftmp_79 = 0;
      $res = 0;
      $0 = 0;
      __label__ = 56;
      break;
     case 3:
      $iftmp_79 = 1;
      $res = 1;
      
      
      if ($nch <= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      _err_string(__str69);
      $0 = 0;
      __label__ = 56;
      break;
     case 5:
      
      
      
      
      
      
      
      $sym = HEAP[HEAP[$tree_addr + 20]];
      
      
      
      
      
      if ($sym == 16 | $sym == 36) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $23 = _validate_varargslist_trailer($tree_addr, 0);
      $res = $23;
      __label__ = 55;
      break;
     case 7:
      
      
      if ($sym == 265) {
        __label__ = 8;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 8:
      $i = 0;
      
      
      
      
      
      
      
      
      
      $sym = HEAP[HEAP[$tree_addr + 20] + 24 * ($nch - 1)];
      
      
      if ($sym == 1) {
        __label__ = 22;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 9:
      
      
      
      
      var $41 = HEAP[$tree_addr + 20] + 24 * $i;
      var $42 = _validate_fpdef($41);
      $res = $42;
      
      var $44 = $i + 1;
      $i = $44;
      
      
      if ($res != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * $i] == 22) {
        __label__ = 11;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 11:
      
      
      
      
      if ($i + 2 <= $nch) {
        __label__ = 12;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 12:
      
      
      
      
      var $63 = HEAP[$tree_addr + 20] + 24 * $i;
      var $64 = _validate_terminal($63, 22, __str70);
      
      if ($64 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      var $71 = HEAP[$tree_addr + 20] + 24 * ($i + 1);
      var $72 = _validate_test($71);
      
      if ($72 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $iftmp_80 = 0;
      $res = 0;
      __label__ = 22;
      break;
     case 15:
      $iftmp_80 = 1;
      $res = 1;
      
      var $75 = $i + 2;
      $i = $75;
      __label__ = 17;
      break;
     case 16:
      
      
      if ($res != 0) {
        __lastLabel__ = 16;
        __label__ = 17;
        break;
      } else {
        __lastLabel__ = 16;
        __label__ = 23;
        break;
      }
     case 17:
      
      
      
      if ($i < $nch) {
        __label__ = 18;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 18:
      
      
      
      
      var $84 = HEAP[$tree_addr + 20] + 24 * $i;
      var $85 = _validate_terminal($84, 12, __str52);
      $res = $85;
      
      var $87 = $i + 1;
      $i = $87;
      
      
      if ($res != 0) {
        __lastLabel__ = 18;
        __label__ = 19;
        break;
      } else {
        __lastLabel__ = 18;
        __label__ = 23;
        break;
      }
     case 19:
      
      
      
      if ($i < $nch) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * $i] == 36) {
        __label__ = 25;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * $i] == 16) {
        __label__ = 25;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      var $_pr3 = $res;
      __lastLabel__ = 22;
      __label__ = 23;
      break;
     case 23:
      var $109 = __lastLabel__ == 22 ? $_pr3 : __lastLabel__ == 18 ? 0 : 0;
      
      if ($109 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      if ($i + 2 <= $nch) {
        __label__ = 9;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      if ($res != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 26:
      
      
      var $119 = _validate_varargslist_trailer($tree_addr, $i);
      $res = $119;
      __label__ = 55;
      break;
     case 27:
      
      
      if ($sym == 12) {
        __label__ = 28;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 28:
      
      
      
      
      
      var $127 = HEAP[$tree_addr + 20] + 24 * ($nch - 1);
      var $128 = _validate_terminal($127, 12, __str52);
      $res = $128;
      
      
      if ($res == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      $0 = 0;
      __label__ = 56;
      break;
     case 30:
      
      var $132 = $nch - 1;
      $nch = $132;
      __label__ = 31;
      break;
     case 31:
      
      
      
      var $136 = HEAP[$tree_addr + 20];
      var $137 = _validate_fpdef($136);
      $res = $137;
      
      var $139 = $i + 1;
      $i = $139;
      
      if ($137 != 0) {
        __lastLabel__ = 31;
        __label__ = 32;
        break;
      } else {
        __lastLabel__ = 31;
        __label__ = 50;
        break;
      }
     case 32:
      
      
      
      
      if ($i + 2 <= $nch) {
        __label__ = 33;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 33:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * $i] == 22) {
        __label__ = 34;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 34:
      
      
      
      
      var $157 = HEAP[$tree_addr + 20] + 24 * $i;
      var $158 = _validate_terminal($157, 22, __str70);
      
      if ($158 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      
      
      var $165 = HEAP[$tree_addr + 20] + 24 * ($i + 1);
      var $166 = _validate_test($165);
      
      if ($166 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      $iftmp_81 = 1;
      __label__ = 38;
      break;
     case 37:
      $iftmp_81 = 0;
      __label__ = 38;
      break;
     case 38:
      var $168 = $iftmp_81;
      $res = $168;
      
      var $170 = $i + 2;
      $i = $170;
      __lastLabel__ = 38;
      __label__ = 50;
      break;
     case 39:
      
      
      
      
      var $175 = HEAP[$tree_addr + 20] + 24 * $i;
      var $176 = _validate_terminal($175, 12, __str52);
      
      if ($176 == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      
      
      
      
      
      var $183 = HEAP[$tree_addr + 20] + 24 * ($i + 1);
      var $184 = _validate_fpdef($183);
      
      if ($184 == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      $iftmp_82 = 0;
      $res = 0;
      
      var $187 = $i + 2;
      $i = $187;
      __lastLabel__ = 41;
      __label__ = 50;
      break;
     case 42:
      $iftmp_82 = 1;
      $res = 1;
      
      var $189 = $i + 2;
      $i = $189;
      
      
      
      
      if ($nch - $i > 1) {
        __label__ = 43;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 43:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * $i] == 22) {
        __label__ = 44;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 44:
      
      
      
      
      var $206 = HEAP[$tree_addr + 20] + 24 * $i;
      var $207 = _validate_terminal($206, 22, __str70);
      
      if ($207 == 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 45:
      
      
      
      
      
      var $214 = HEAP[$tree_addr + 20] + 24 * ($i + 1);
      var $215 = _validate_test($214);
      
      if ($215 == 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 46:
      $iftmp_83 = 1;
      __label__ = 48;
      break;
     case 47:
      $iftmp_83 = 0;
      __label__ = 48;
      break;
     case 48:
      var $217 = $iftmp_83;
      $res = $217;
      
      var $219 = $i + 2;
      $i = $219;
      __lastLabel__ = 48;
      __label__ = 50;
      break;
     case 49:
      var $_pr4 = $res;
      __lastLabel__ = 49;
      __label__ = 50;
      break;
     case 50:
      var $220 = __lastLabel__ == 41 ? 0 : __lastLabel__ == 48 ? $217 : __lastLabel__ == 49 ? $_pr4 : __lastLabel__ == 31 ? 0 : $168;
      
      if ($220 == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 51:
      
      
      
      
      if ($nch - $i > 1) {
        __label__ = 39;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 52:
      
      
      if ($res != 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 53:
      
      
      
      if ($nch != $i) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      $res = 0;
      _err_string(__str71);
      __label__ = 55;
      break;
     case 55:
      
      $0 = $res;
      __label__ = 56;
      break;
     case 56:
      
      $retval = $0;
      var $retval65 = $retval;
      return $retval65;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_list_iter($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_84;
      var $res;
      $tree_addr = $tree;
      
      var $2 = _validate_ntype($tree_addr, 332);
      
      if ($2 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $5 = _validate_numnodes($tree_addr, 1, __str72);
      
      if ($5 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $iftmp_84 = 0;
      $res = 0;
      __label__ = 5;
      break;
     case 3:
      $iftmp_84 = 1;
      $res = 1;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20]] != 333) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $17 = HEAP[$tree_addr + 20];
      var $18 = _validate_list_for($17);
      $res = $18;
      __label__ = 6;
      break;
     case 5:
      
      
      
      var $22 = HEAP[$tree_addr + 20];
      var $23 = _validate_list_if($22);
      $res = $23;
      __label__ = 6;
      break;
     case 6:
      
      $0 = $res;
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_comp_iter($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_85;
      var $res;
      $tree_addr = $tree;
      
      var $2 = _validate_ntype($tree_addr, 335);
      
      if ($2 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $5 = _validate_numnodes($tree_addr, 1, __str73);
      
      if ($5 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $iftmp_85 = 0;
      $res = 0;
      __label__ = 5;
      break;
     case 3:
      $iftmp_85 = 1;
      $res = 1;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20]] != 336) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $17 = HEAP[$tree_addr + 20];
      var $18 = _validate_comp_for($17);
      $res = $18;
      __label__ = 6;
      break;
     case 5:
      
      
      
      var $22 = HEAP[$tree_addr + 20];
      var $23 = _validate_comp_if($22);
      $res = $23;
      __label__ = 6;
      break;
     case 6:
      
      $0 = $res;
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_list_for($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_86;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      
      var $6 = $tree_addr;
      if ($nch == 5) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $9 = HEAP[$6 + 20] + 96;
      var $10 = _validate_list_iter($9);
      $res = $10;
      __lastLabel__ = 1;
      __label__ = 3;
      break;
     case 2:
      var $11 = _validate_numnodes($6, 4, __str74);
      $res = $11;
      __lastLabel__ = 2;
      __label__ = 3;
      break;
     case 3:
      var $12 = __lastLabel__ == 2 ? $11 : $10;
      
      if ($12 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 4:
      
      
      
      var $17 = HEAP[$tree_addr + 20];
      var $18 = _validate_terminal($17, 1, __str75);
      
      if ($18 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $23 = HEAP[$tree_addr + 20] + 24;
      var $24 = _validate_exprlist($23);
      
      if ($24 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $29 = HEAP[$tree_addr + 20] + 48;
      var $30 = _validate_terminal($29, 1, __str76);
      
      if ($30 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $35 = HEAP[$tree_addr + 20] + 72;
      var $36 = _validate_testlist_safe($35);
      
      if ($36 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      $iftmp_86 = 1;
      __label__ = 10;
      break;
     case 9:
      $iftmp_86 = 0;
      __label__ = 10;
      break;
     case 10:
      
      $res = $iftmp_86;
      __label__ = 11;
      break;
     case 11:
      
      $0 = $res;
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_comp_for($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_87;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      
      var $6 = $tree_addr;
      if ($nch == 5) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $9 = HEAP[$6 + 20] + 96;
      var $10 = _validate_comp_iter($9);
      $res = $10;
      __lastLabel__ = 1;
      __label__ = 3;
      break;
     case 2:
      var $11 = _validate_numnodes($6, 4, __str77);
      $res = $11;
      __lastLabel__ = 2;
      __label__ = 3;
      break;
     case 3:
      var $12 = __lastLabel__ == 2 ? $11 : $10;
      
      if ($12 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 4:
      
      
      
      var $17 = HEAP[$tree_addr + 20];
      var $18 = _validate_terminal($17, 1, __str75);
      
      if ($18 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $23 = HEAP[$tree_addr + 20] + 24;
      var $24 = _validate_exprlist($23);
      
      if ($24 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $29 = HEAP[$tree_addr + 20] + 48;
      var $30 = _validate_terminal($29, 1, __str76);
      
      if ($30 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $35 = HEAP[$tree_addr + 20] + 72;
      var $36 = _validate_or_test($35);
      
      if ($36 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      $iftmp_87 = 1;
      __label__ = 10;
      break;
     case 9:
      $iftmp_87 = 0;
      __label__ = 10;
      break;
     case 10:
      
      $res = $iftmp_87;
      __label__ = 11;
      break;
     case 11:
      
      $0 = $res;
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_list_if($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_88;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      
      var $6 = $tree_addr;
      if ($nch == 3) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $9 = HEAP[$6 + 20] + 48;
      var $10 = _validate_list_iter($9);
      $res = $10;
      __lastLabel__ = 1;
      __label__ = 3;
      break;
     case 2:
      var $11 = _validate_numnodes($6, 2, __str78);
      $res = $11;
      __lastLabel__ = 2;
      __label__ = 3;
      break;
     case 3:
      var $12 = __lastLabel__ == 2 ? $11 : $10;
      
      if ($12 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      
      
      
      var $17 = HEAP[$tree_addr + 20];
      var $18 = _validate_terminal($17, 1, __str57);
      
      if ($18 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $23 = HEAP[$tree_addr + 20] + 24;
      var $24 = _validate_old_test($23);
      
      if ($24 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      $iftmp_88 = 1;
      __label__ = 8;
      break;
     case 7:
      $iftmp_88 = 0;
      __label__ = 8;
      break;
     case 8:
      
      $res = $iftmp_88;
      __label__ = 9;
      break;
     case 9:
      
      $0 = $res;
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_comp_if($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_89;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      
      var $6 = $tree_addr;
      if ($nch == 3) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $9 = HEAP[$6 + 20] + 48;
      var $10 = _validate_comp_iter($9);
      $res = $10;
      __lastLabel__ = 1;
      __label__ = 3;
      break;
     case 2:
      var $11 = _validate_numnodes($6, 2, __str79);
      $res = $11;
      __lastLabel__ = 2;
      __label__ = 3;
      break;
     case 3:
      var $12 = __lastLabel__ == 2 ? $11 : $10;
      
      if ($12 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      
      
      
      var $17 = HEAP[$tree_addr + 20];
      var $18 = _validate_terminal($17, 1, __str57);
      
      if ($18 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $23 = HEAP[$tree_addr + 20] + 24;
      var $24 = _validate_old_test($23);
      
      if ($24 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      $iftmp_89 = 1;
      __label__ = 8;
      break;
     case 7:
      $iftmp_89 = 0;
      __label__ = 8;
      break;
     case 8:
      
      $res = $iftmp_89;
      __label__ = 9;
      break;
     case 9:
      
      $0 = $res;
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_fpdef($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_90;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 265);
      $res = $5;
      
      
      if ($res != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 1:
      
      
      if ($nch == 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[$tree_addr + 20];
      var $14 = _validate_ntype($13, 1);
      $res = $14;
      __label__ = 11;
      break;
     case 3:
      
      
      var $17 = $tree_addr;
      if ($nch == 3) {
        __label__ = 4;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$17 + 20];
      var $21 = _validate_terminal($20, 7, __str55);
      
      if ($21 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $26 = HEAP[$tree_addr + 20] + 24;
      var $27 = _validate_fplist($26);
      
      if ($27 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $32 = HEAP[$tree_addr + 20] + 48;
      var $33 = _validate_terminal($32, 8, __str56);
      
      if ($33 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      $iftmp_90 = 1;
      __label__ = 9;
      break;
     case 8:
      $iftmp_90 = 0;
      __label__ = 9;
      break;
     case 9:
      
      $res = $iftmp_90;
      __label__ = 11;
      break;
     case 10:
      var $36 = _validate_numnodes($17, 1, __str80);
      $res = $36;
      __label__ = 11;
      break;
     case 11:
      
      $0 = $res;
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_fplist($tree) {
    
    var $tree_addr;
    var $retval;
    var $0;
    $tree_addr = $tree;
    
    var $2 = _validate_repeating_list($tree_addr, 266, FUNCTION_TABLE_OFFSET + 14, __str81);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _validate_stmt($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_91;
      var $res;
      $tree_addr = $tree;
      
      var $2 = _validate_ntype($tree_addr, 267);
      
      if ($2 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $5 = _validate_numnodes($tree_addr, 1, __str82);
      
      if ($5 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $iftmp_91 = 0;
      $res = 0;
      __label__ = 6;
      break;
     case 3:
      $iftmp_91 = 1;
      $res = 1;
      
      
      
      var $10 = HEAP[$tree_addr + 20];
      $tree_addr = $10;
      
      
      
      
      var $15 = $tree_addr;
      if (HEAP[$tree_addr] == 268) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $16 = _validate_simple_stmt($15);
      $res = $16;
      __label__ = 6;
      break;
     case 5:
      var $17 = _validate_compound_stmt($15);
      $res = $17;
      __label__ = 6;
      break;
     case 6:
      
      $0 = $res;
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_simple_stmt($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_93;
      var $iftmp_92;
      var $nch;
      var $res;
      var $i;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 268);
      
      if ($5 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($nch <= 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $12 = HEAP[$tree_addr + 20];
      var $13 = _validate_small_stmt($12);
      
      if ($13 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      var $20 = HEAP[$tree_addr + 20] + 24 * ($nch - 1);
      var $21 = _validate_terminal($20, 4, 0);
      
      if ($21 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      $iftmp_92 = 1;
      __label__ = 6;
      break;
     case 5:
      $iftmp_92 = 0;
      __label__ = 6;
      break;
     case 6:
      var $23 = $iftmp_92;
      $res = $23;
      
      
      if ($nch <= 1) {
        __lastLabel__ = 6;
        __label__ = 7;
        break;
      } else {
        __lastLabel__ = 6;
        __label__ = 8;
        break;
      }
     case 7:
      
      var $27 = _validate_numnodes($tree_addr, 2, __str83);
      $res = $27;
      __lastLabel__ = 7;
      __label__ = 8;
      break;
     case 8:
      var $28 = __lastLabel__ == 7 ? $27 : $23;
      
      var $30 = $nch - 1;
      $nch = $30;
      
      if ($28 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      if (($nch & 1) == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      var $37 = HEAP[$tree_addr + 20];
      
      var $39 = $nch - 1;
      $nch = $39;
      
      var $41 = $37 + 24 * $nch;
      var $42 = _validate_terminal($41, 13, __str84);
      $res = $42;
      __lastLabel__ = 10;
      __label__ = 12;
      break;
     case 11:
      var $_pr = $res;
      __lastLabel__ = 11;
      __label__ = 12;
      break;
     case 12:
      var $43 = __lastLabel__ == 11 ? $_pr : $42;
      
      if ($43 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 13:
      
      
      if ($nch > 2) {
        __label__ = 14;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 14:
      $i = 1;
      var $_pr1 = $res;
      __lastLabel__ = 14;
      __label__ = 20;
      break;
     case 15:
      
      
      
      
      var $51 = HEAP[$tree_addr + 20] + 24 * $i;
      var $52 = _validate_terminal($51, 13, __str84);
      
      if ($52 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      var $59 = HEAP[$tree_addr + 20] + 24 * ($i + 1);
      var $60 = _validate_small_stmt($59);
      
      if ($60 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      $iftmp_93 = 1;
      __label__ = 19;
      break;
     case 18:
      $iftmp_93 = 0;
      __label__ = 19;
      break;
     case 19:
      var $62 = $iftmp_93;
      $res = $62;
      
      var $64 = $i + 2;
      $i = $64;
      __lastLabel__ = 19;
      __label__ = 20;
      break;
     case 20:
      var $65 = __lastLabel__ == 19 ? $62 : $_pr1;
      
      if ($65 == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      if ($i < $nch) {
        __label__ = 15;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      $0 = $res;
      
      $retval = $0;
      var $retval21 = $retval;
      return $retval21;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_small_stmt($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $nch;
      var $res;
      var $ntype;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_numnodes($tree_addr, 1, __str85);
      $res = $5;
      
      
      if ($res != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      $ntype = HEAP[HEAP[$tree_addr + 20]];
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      if ($ntype == 270 | $ntype == 272 | $ntype == 273 | $ntype == 274 | $ntype == 275 | $ntype == 281 | $ntype == 289 | $ntype == 291 | $ntype == 290) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $36 = HEAP[$tree_addr + 20];
      var $37 = _validate_node($36);
      $res = $37;
      __label__ = 6;
      break;
     case 3:
      $res = 0;
      _err_string(__str86);
      __label__ = 6;
      break;
     case 4:
      
      
      if ($nch == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $res = 0;
      
      
      
      
      
      
      var $46 = HEAP[HEAP[$tree_addr + 20]];
      var $47 = HEAP[_parser_error];
      var $48 = _PyErr_Format($47, __str87, allocate([ $46, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 6;
      break;
     case 6:
      
      $0 = $res;
      
      $retval = $0;
      var $retval15 = $retval;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_compound_stmt($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_95;
      var $res;
      var $ntype;
      $tree_addr = $tree;
      
      var $2 = _validate_ntype($tree_addr, 292);
      
      if ($2 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $5 = _validate_numnodes($tree_addr, 1, __str88);
      
      if ($5 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $iftmp_95 = 0;
      $res = 0;
      $0 = 0;
      __label__ = 7;
      break;
     case 3:
      $iftmp_95 = 1;
      $res = 1;
      
      
      
      var $10 = HEAP[$tree_addr + 20];
      $tree_addr = $10;
      
      
      
      
      $ntype = HEAP[$tree_addr];
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      if ($ntype == 293 | $ntype == 294 | $ntype == 295 | $ntype == 296 | $ntype == 297 | $ntype == 262 | $ntype == 329 | $ntype == 261) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $32 = _validate_node($tree_addr);
      $res = $32;
      __label__ = 6;
      break;
     case 5:
      $res = 0;
      
      
      
      var $36 = HEAP[$tree_addr];
      var $37 = HEAP[_parser_error];
      var $38 = _PyErr_Format($37, __str89, allocate([ $36, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 6;
      break;
     case 6:
      
      $0 = $res;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval17 = $retval;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_yield_or_testlist($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      $tree_addr = $tree;
      
      
      
      
      var $5 = $tree_addr;
      if (HEAP[$tree_addr] == 340) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $6 = _validate_yield_expr($5);
      $0 = $6;
      __label__ = 3;
      break;
     case 2:
      var $7 = _validate_testlist($5);
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
  function _validate_expr_stmt($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_100;
      var $iftmp_99;
      var $iftmp_98;
      var $iftmp_97;
      var $j;
      var $nch;
      var $res;
      var $s;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 270);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((($nch & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[$tree_addr + 20];
      var $14 = _validate_testlist($13);
      
      if ($14 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_97 = 0;
      $res = 0;
      __label__ = 23;
      break;
     case 4:
      $iftmp_97 = 1;
      $res = 1;
      
      
      if ($nch != 3) {
        __label__ = 23;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24] != 271) {
        __label__ = 23;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $28 = HEAP[$tree_addr + 20] + 24;
      var $29 = _validate_numnodes($28, 1, __str90);
      
      if ($29 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $34 = HEAP[$tree_addr + 20] + 48;
      var $35 = _validate_yield_or_testlist($34);
      
      if ($35 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $iftmp_98 = 0;
      $res = 0;
      __label__ = 31;
      break;
     case 9:
      $iftmp_98 = 1;
      $res = 1;
      
      
      
      
      
      
      
      
      
      $s = HEAP[HEAP[HEAP[$tree_addr + 20] + 24 + 20] + 4];
      
      var $47 = _strcmp($s, __str91);
      
      if ($47 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      var $50 = _strcmp($s, __str92);
      
      if ($50 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $53 = _strcmp($s, __str93);
      
      if ($53 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      var $56 = _strcmp($s, __str94);
      
      if ($56 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      var $59 = _strcmp($s, __str95);
      
      if ($59 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      var $62 = _strcmp($s, __str96);
      
      if ($62 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      var $65 = _strcmp($s, __str97);
      
      if ($65 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      var $68 = _strcmp($s, __str98);
      
      if ($68 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      var $71 = _strcmp($s, __str99);
      
      if ($71 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      var $74 = _strcmp($s, __str100);
      
      if ($74 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      var $77 = _strcmp($s, __str101);
      
      if ($77 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      var $80 = _strcmp($s, __str102);
      
      if ($80 == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      $iftmp_99 = 1;
      $res = 1;
      __label__ = 31;
      break;
     case 22:
      $iftmp_99 = 0;
      $res = 0;
      _err_string(__str103);
      __label__ = 31;
      break;
     case 23:
      $j = 1;
      var $_pr = $res;
      __lastLabel__ = 23;
      __label__ = 29;
      break;
     case 24:
      
      
      
      
      var $86 = HEAP[$tree_addr + 20] + 24 * $j;
      var $87 = _validate_terminal($86, 22, __str70);
      
      if ($87 == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      var $94 = HEAP[$tree_addr + 20] + 24 * ($j + 1);
      var $95 = _validate_yield_or_testlist($94);
      
      if ($95 == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      $iftmp_100 = 1;
      __label__ = 28;
      break;
     case 27:
      $iftmp_100 = 0;
      __label__ = 28;
      break;
     case 28:
      var $97 = $iftmp_100;
      $res = $97;
      
      var $99 = $j + 2;
      $j = $99;
      __lastLabel__ = 28;
      __label__ = 29;
      break;
     case 29:
      var $100 = __lastLabel__ == 28 ? $97 : $_pr;
      
      if ($100 == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      if ($j < $nch) {
        __label__ = 24;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      $0 = $res;
      
      $retval = $0;
      var $retval41 = $retval;
      return $retval41;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_print_stmt($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_103;
      var $iftmp_102;
      var $iftmp_101;
      var $nch;
      var $res;
      var $sym;
      var $i;
      var $allow_trailing_comma;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 272);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($nch <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $12 = HEAP[$tree_addr + 20];
      var $13 = _validate_terminal($12, 1, __str104);
      
      if ($13 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_101 = 0;
      $res = 0;
      __label__ = 29;
      break;
     case 4:
      $iftmp_101 = 1;
      $res = 1;
      
      
      if ($nch > 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      $sym = HEAP[HEAP[$tree_addr + 20] + 24];
      $i = 1;
      $allow_trailing_comma = 1;
      
      
      if ($sym == 304) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $30 = HEAP[$tree_addr + 20] + 24 * $i;
      
      var $32 = $i + 1;
      $i = $32;
      var $33 = _validate_test($30);
      $res = $33;
      __lastLabel__ = 6;
      __label__ = 14;
      break;
     case 7:
      
      
      var $36 = $tree_addr;
      if ($nch <= 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $37 = _validate_numnodes($36, 3, __str105);
      $res = $37;
      __lastLabel__ = 8;
      __label__ = 14;
      break;
     case 9:
      
      
      
      var $41 = HEAP[$36 + 20] + 24 * $i;
      var $42 = _validate_ntype($41, 35);
      
      if ($42 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      var $49 = HEAP[$tree_addr + 20] + 24 * ($i + 1);
      var $50 = _validate_test($49);
      
      if ($50 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      $iftmp_102 = 1;
      __label__ = 13;
      break;
     case 12:
      $iftmp_102 = 0;
      __label__ = 13;
      break;
     case 13:
      var $52 = $iftmp_102;
      $res = $52;
      
      var $54 = $i + 2;
      $i = $54;
      $allow_trailing_comma = 0;
      __lastLabel__ = 13;
      __label__ = 14;
      break;
     case 14:
      var $55 = __lastLabel__ == 13 ? $52 : __lastLabel__ == 8 ? $37 : $33;
      
      if ($55 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 15:
      
      
      
      
      var $61 = HEAP[$tree_addr + 20] + 24 * $i;
      var $62 = _validate_terminal($61, 12, __str52);
      
      if ($62 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      var $69 = HEAP[$tree_addr + 20] + 24 * ($i + 1);
      var $70 = _validate_test($69);
      
      if ($70 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      $iftmp_103 = 1;
      __label__ = 19;
      break;
     case 18:
      $iftmp_103 = 0;
      __label__ = 19;
      break;
     case 19:
      var $72 = $iftmp_103;
      $res = $72;
      $allow_trailing_comma = 1;
      
      var $74 = $i + 2;
      $i = $74;
      __lastLabel__ = 19;
      __label__ = 21;
      break;
     case 20:
      var $_pr = $res;
      __lastLabel__ = 20;
      __label__ = 21;
      break;
     case 21:
      var $75 = __lastLabel__ == 20 ? $_pr : $72;
      
      if ($75 == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      if ($i + 2 <= $nch) {
        __label__ = 15;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      if ($res == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      if ($allow_trailing_comma != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      var $87 = _validate_numnodes($tree_addr, $i, __str105);
      $res = $87;
      __label__ = 29;
      break;
     case 26:
      
      
      if ($res != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 27:
      
      
      
      if ($i < $nch) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $96 = HEAP[$tree_addr + 20] + 24 * $i;
      var $97 = _validate_terminal($96, 12, __str52);
      $res = $97;
      __label__ = 29;
      break;
     case 29:
      
      $0 = $res;
      
      $retval = $0;
      var $retval31 = $retval;
      return $retval31;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_del_stmt($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $iftmp_104;
      var $0;
      $tree_addr = $tree;
      
      var $2 = _validate_numnodes($tree_addr, 2, __str106);
      
      if ($2 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      var $7 = HEAP[$tree_addr + 20];
      var $8 = _validate_terminal($7, 1, __str107);
      
      if ($8 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[$tree_addr + 20] + 24;
      var $14 = _validate_exprlist($13);
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $iftmp_104 = 1;
      __label__ = 5;
      break;
     case 4:
      $iftmp_104 = 0;
      __label__ = 5;
      break;
     case 5:
      
      $0 = $iftmp_104;
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_return_stmt($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_105;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 278);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if ($nch == 1 | $nch == 2) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $14 = HEAP[$tree_addr + 20];
      var $15 = _validate_terminal($14, 1, __str108);
      
      if ($15 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_105 = 0;
      $res = 0;
      __label__ = 6;
      break;
     case 4:
      $iftmp_105 = 1;
      $res = 1;
      
      
      if ($nch == 2) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      var $22 = HEAP[$tree_addr + 20] + 24;
      var $23 = _validate_testlist($22);
      $res = $23;
      __label__ = 6;
      break;
     case 6:
      
      $0 = $res;
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_raise_stmt($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_109;
      var $iftmp_108;
      var $iftmp_107;
      var $iftmp_106;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 280);
      
      if ($5 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      if ($nch == 1 | $nch == 2 | $nch == 4 | $nch == 6) {
        __label__ = 2;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 2:
      $iftmp_106 = 1;
      $res = 1;
      
      
      
      var $18 = HEAP[$tree_addr + 20];
      var $19 = _validate_terminal($18, 1, __str109);
      $res = $19;
      
      
      if ($res != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 3:
      
      
      if ($nch > 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      var $27 = HEAP[$tree_addr + 20] + 24;
      var $28 = _validate_test($27);
      $res = $28;
      __lastLabel__ = 4;
      __label__ = 6;
      break;
     case 5:
      var $_pr = $res;
      __lastLabel__ = 5;
      __label__ = 6;
      break;
     case 6:
      var $29 = __lastLabel__ == 5 ? $_pr : $28;
      
      if ($29 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 7:
      
      
      if ($nch > 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 8:
      
      
      
      var $36 = HEAP[$tree_addr + 20] + 48;
      var $37 = _validate_terminal($36, 12, __str52);
      
      if ($37 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      var $42 = HEAP[$tree_addr + 20] + 72;
      var $43 = _validate_test($42);
      
      if ($43 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $iftmp_107 = 0;
      $res = 0;
      __label__ = 27;
      break;
     case 11:
      $iftmp_107 = 1;
      $res = 1;
      var $45 = $nch;
      
      if ($45 > 4) {
        __lastLabel__ = 11;
        __label__ = 12;
        break;
      } else {
        __lastLabel__ = 11;
        __label__ = 21;
        break;
      }
     case 12:
      
      
      
      var $50 = HEAP[$tree_addr + 20] + 96;
      var $51 = _validate_terminal($50, 12, __str52);
      
      if ($51 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $56 = HEAP[$tree_addr + 20] + 120;
      var $57 = _validate_test($56);
      
      if ($57 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      $iftmp_108 = 1;
      __label__ = 16;
      break;
     case 15:
      $iftmp_108 = 0;
      __label__ = 16;
      break;
     case 16:
      var $59 = $iftmp_108;
      $res = $59;
      __lastLabel__ = 16;
      __label__ = 19;
      break;
     case 17:
      $iftmp_106 = 0;
      $res = 0;
      
      var $61 = _validate_numnodes($tree_addr, 2, __str109);
      __label__ = 18;
      break;
     case 18:
      var $_pr6 = $res;
      __lastLabel__ = 18;
      __label__ = 19;
      break;
     case 19:
      var $62 = __lastLabel__ == 18 ? $_pr6 : $59;
      
      if ($62 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 20:
      var $_pr8 = $nch;
      __lastLabel__ = 20;
      __label__ = 21;
      break;
     case 21:
      var $64 = __lastLabel__ == 20 ? $_pr8 : $45;
      
      if ($64 == 4) {
        __label__ = 22;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 22:
      
      
      
      var $69 = HEAP[$tree_addr + 20] + 48;
      var $70 = _validate_terminal($69, 12, __str52);
      
      if ($70 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      var $75 = HEAP[$tree_addr + 20] + 72;
      var $76 = _validate_test($75);
      
      if ($76 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      $iftmp_109 = 1;
      __label__ = 26;
      break;
     case 25:
      $iftmp_109 = 0;
      __label__ = 26;
      break;
     case 26:
      
      $res = $iftmp_109;
      __label__ = 27;
      break;
     case 27:
      
      $0 = $res;
      
      $retval = $0;
      var $retval33 = $retval;
      return $retval33;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_yield_expr($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_110;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 340);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if ($nch == 1 | $nch == 2) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $14 = HEAP[$tree_addr + 20];
      var $15 = _validate_terminal($14, 1, __str110);
      
      if ($15 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_110 = 0;
      $res = 0;
      __label__ = 6;
      break;
     case 4:
      $iftmp_110 = 1;
      $res = 1;
      
      
      if ($nch == 2) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      var $22 = HEAP[$tree_addr + 20] + 24;
      var $23 = _validate_testlist($22);
      $res = $23;
      __label__ = 6;
      break;
     case 6:
      
      $0 = $res;
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_yield_stmt($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $iftmp_111;
      var $0;
      $tree_addr = $tree;
      
      var $2 = _validate_ntype($tree_addr, 279);
      
      if ($2 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $5 = _validate_numnodes($tree_addr, 1, __str111);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $10 = HEAP[$tree_addr + 20];
      var $11 = _validate_yield_expr($10);
      
      if ($11 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $iftmp_111 = 1;
      __label__ = 5;
      break;
     case 4:
      $iftmp_111 = 0;
      __label__ = 5;
      break;
     case 5:
      
      $0 = $iftmp_111;
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_import_as_name($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_112;
      var $nch;
      var $ok;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 284);
      $ok = $5;
      
      
      if ($ok != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 1:
      
      
      if ($nch == 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[$tree_addr + 20];
      var $14 = _validate_terminal($13, 1, 0);
      $ok = $14;
      __label__ = 11;
      break;
     case 3:
      
      
      var $17 = $tree_addr;
      if ($nch == 3) {
        __label__ = 4;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 4:
      
      
      var $20 = HEAP[$17 + 20];
      var $21 = _validate_terminal($20, 1, 0);
      
      if ($21 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $26 = HEAP[$tree_addr + 20] + 24;
      var $27 = _validate_terminal($26, 1, __str112);
      
      if ($27 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $32 = HEAP[$tree_addr + 20] + 48;
      var $33 = _validate_terminal($32, 1, 0);
      
      if ($33 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      $iftmp_112 = 1;
      __label__ = 9;
      break;
     case 8:
      $iftmp_112 = 0;
      __label__ = 9;
      break;
     case 9:
      
      $ok = $iftmp_112;
      __label__ = 11;
      break;
     case 10:
      var $36 = _validate_numnodes($17, 3, __str113);
      $ok = $36;
      __label__ = 11;
      break;
     case 11:
      
      $0 = $ok;
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_dotted_name($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_114;
      var $iftmp_113;
      var $nch;
      var $res;
      var $i;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 288);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((($nch & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[$tree_addr + 20];
      var $14 = _validate_terminal($13, 1, 0);
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $iftmp_113 = 1;
      __label__ = 5;
      break;
     case 4:
      $iftmp_113 = 0;
      __label__ = 5;
      break;
     case 5:
      var $16 = $iftmp_113;
      $res = $16;
      $i = 1;
      __lastLabel__ = 5;
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      var $21 = HEAP[$tree_addr + 20] + 24 * $i;
      var $22 = _validate_terminal($21, 23, __str114);
      
      if ($22 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      var $29 = HEAP[$tree_addr + 20] + 24 * ($i + 1);
      var $30 = _validate_terminal($29, 1, 0);
      
      if ($30 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      $iftmp_114 = 1;
      __label__ = 10;
      break;
     case 9:
      $iftmp_114 = 0;
      __label__ = 10;
      break;
     case 10:
      var $32 = $iftmp_114;
      $res = $32;
      
      var $34 = $i + 2;
      $i = $34;
      __lastLabel__ = 10;
      __label__ = 11;
      break;
     case 11:
      var $35 = __lastLabel__ == 10 ? $32 : $16;
      
      if ($35 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      if ($i < $nch) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      $0 = $res;
      
      $retval = $0;
      var $retval16 = $retval;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_dotted_as_name($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_115;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 285);
      $res = $5;
      
      
      if ($res != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 1:
      
      
      if ($nch == 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[$tree_addr + 20];
      var $14 = _validate_dotted_name($13);
      $res = $14;
      __label__ = 11;
      break;
     case 3:
      
      
      if ($nch == 3) {
        __label__ = 4;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 4:
      
      
      
      var $20 = HEAP[$tree_addr + 20];
      var $21 = _validate_dotted_name($20);
      
      if ($21 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $26 = HEAP[$tree_addr + 20] + 24;
      var $27 = _validate_terminal($26, 1, __str112);
      
      if ($27 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $32 = HEAP[$tree_addr + 20] + 48;
      var $33 = _validate_terminal($32, 1, 0);
      
      if ($33 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      $iftmp_115 = 1;
      __label__ = 9;
      break;
     case 8:
      $iftmp_115 = 0;
      __label__ = 9;
      break;
     case 9:
      
      $res = $iftmp_115;
      __label__ = 11;
      break;
     case 10:
      $res = 0;
      _err_string(__str115);
      __label__ = 11;
      break;
     case 11:
      
      $0 = $res;
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_dotted_as_names($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_117;
      var $iftmp_116;
      var $nch;
      var $res;
      var $i;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      
      
      
      
      
      
      if ((($nch & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      var $10 = HEAP[$tree_addr + 20];
      var $11 = _validate_dotted_as_name($10);
      
      if ($11 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      $iftmp_116 = 1;
      __label__ = 4;
      break;
     case 3:
      $iftmp_116 = 0;
      __label__ = 4;
      break;
     case 4:
      var $13 = $iftmp_116;
      $res = $13;
      $i = 1;
      __lastLabel__ = 4;
      __label__ = 10;
      break;
     case 5:
      
      
      
      
      var $18 = HEAP[$tree_addr + 20] + 24 * $i;
      var $19 = _validate_terminal($18, 12, __str52);
      
      if ($19 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      var $26 = HEAP[$tree_addr + 20] + 24 * ($i + 1);
      var $27 = _validate_dotted_as_name($26);
      
      if ($27 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      $iftmp_117 = 1;
      __label__ = 9;
      break;
     case 8:
      $iftmp_117 = 0;
      __label__ = 9;
      break;
     case 9:
      var $29 = $iftmp_117;
      $res = $29;
      
      var $31 = $i + 2;
      $i = $31;
      __lastLabel__ = 9;
      __label__ = 10;
      break;
     case 10:
      var $32 = __lastLabel__ == 9 ? $29 : $13;
      
      if ($32 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      if ($i < $nch) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      $0 = $res;
      
      $retval = $0;
      var $retval15 = $retval;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_import_as_names($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_118;
      var $nch;
      var $res;
      var $i;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      
      
      var $7 = HEAP[$tree_addr + 20];
      var $8 = _validate_import_as_name($7);
      $res = $8;
      $i = 1;
      __lastLabel__ = -1;
      __label__ = 6;
      break;
     case 1:
      
      
      
      
      var $13 = HEAP[$tree_addr + 20] + 24 * $i;
      var $14 = _validate_terminal($13, 12, __str52);
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      var $21 = HEAP[$tree_addr + 20] + 24 * ($i + 1);
      var $22 = _validate_import_as_name($21);
      
      if ($22 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $iftmp_118 = 1;
      __label__ = 5;
      break;
     case 4:
      $iftmp_118 = 0;
      __label__ = 5;
      break;
     case 5:
      var $24 = $iftmp_118;
      $res = $24;
      
      var $26 = $i + 2;
      $i = $26;
      __lastLabel__ = 5;
      __label__ = 6;
      break;
     case 6:
      var $27 = __lastLabel__ == 5 ? $24 : $8;
      
      if ($27 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      if ($i + 1 < $nch) {
        __label__ = 1;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      $0 = $res;
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_import_name($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $iftmp_119;
      var $0;
      $tree_addr = $tree;
      
      var $2 = _validate_ntype($tree_addr, 282);
      
      if ($2 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $5 = _validate_numnodes($tree_addr, 2, __str116);
      
      if ($5 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $10 = HEAP[$tree_addr + 20];
      var $11 = _validate_terminal($10, 1, __str117);
      
      if ($11 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $16 = HEAP[$tree_addr + 20] + 24;
      var $17 = _validate_dotted_as_names($16);
      
      if ($17 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      $iftmp_119 = 1;
      __label__ = 6;
      break;
     case 5:
      $iftmp_119 = 0;
      __label__ = 6;
      break;
     case 6:
      
      $0 = $iftmp_119;
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _count_from_dots($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $i;
      $tree_addr = $tree;
      $i = 1;
      __label__ = 3;
      break;
     case 1:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * $i] != 23) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      var $10 = $i + 1;
      $i = $10;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      if (HEAP[$tree_addr + 16] > $i) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      $0 = $i - 1;
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_import_from($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_121;
      var $iftmp_120;
      var $nch;
      var $ndots;
      var $havename;
      var $offset;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _count_from_dots($tree_addr);
      $ndots = $5;
      
      
      
      
      
      
      
      
      
      
      $havename = HEAP[HEAP[$tree_addr + 20] + 24 * ($ndots + 1)] == 288;
      
      
      
      $offset = $havename + $ndots;
      
      var $20 = _validate_ntype($tree_addr, 283);
      
      if ($20 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($offset <= 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if ($offset + 3 > $nch) {
        __label__ = 7;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $31 = HEAP[$tree_addr + 20];
      var $32 = _validate_terminal($31, 1, __str118);
      
      if ($32 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if ($havename == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      var $41 = HEAP[$tree_addr + 20] + 24 * ($ndots + 1);
      var $42 = _validate_dotted_name($41);
      
      if ($42 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      var $49 = HEAP[$tree_addr + 20] + 24 * ($offset + 1);
      var $50 = _validate_terminal($49, 1, __str117);
      
      if ($50 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $iftmp_120 = 0;
      $res = 0;
      __label__ = 19;
      break;
     case 8:
      $iftmp_120 = 1;
      $res = 1;
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * ($offset + 2)] != 7) {
        __label__ = 16;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      if ($offset + 5 != $nch) {
        __label__ = 14;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      var $70 = HEAP[$tree_addr + 20] + 24 * ($offset + 2);
      var $71 = _validate_terminal($70, 7, __str55);
      
      if ($71 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      var $78 = HEAP[$tree_addr + 20] + 24 * ($offset + 3);
      var $79 = _validate_import_as_names($78);
      
      if ($79 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      var $86 = HEAP[$tree_addr + 20] + 24 * ($offset + 4);
      var $87 = _validate_terminal($86, 8, __str56);
      
      if ($87 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      $iftmp_121 = 1;
      __label__ = 15;
      break;
     case 14:
      $iftmp_121 = 0;
      __label__ = 15;
      break;
     case 15:
      
      $res = $iftmp_121;
      __label__ = 19;
      break;
     case 16:
      
      
      if ($res != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * ($offset + 2)] != 16) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      
      var $105 = HEAP[$tree_addr + 20] + 24 * ($offset + 2);
      var $106 = _validate_import_as_names($105);
      $res = $106;
      __label__ = 19;
      break;
     case 19:
      
      $0 = $res;
      
      $retval = $0;
      var $retval21 = $retval;
      return $retval21;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_import_stmt($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $nch;
      var $res;
      var $ntype;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_numnodes($tree_addr, 1, __str119);
      $res = $5;
      
      
      if ($res != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      $ntype = HEAP[HEAP[$tree_addr + 20]];
      
      
      
      
      
      if ($ntype == 282 | $ntype == 283) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $22 = HEAP[$tree_addr + 20];
      var $23 = _validate_node($22);
      $res = $23;
      __label__ = 6;
      break;
     case 3:
      $res = 0;
      _err_string(__str120);
      __label__ = 6;
      break;
     case 4:
      
      
      if ($nch == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $res = 0;
      
      
      
      
      
      
      var $32 = HEAP[HEAP[$tree_addr + 20]];
      var $33 = HEAP[_parser_error];
      var $34 = _PyErr_Format($33, __str121, allocate([ $32, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 6;
      break;
     case 6:
      
      $0 = $res;
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_global_stmt($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_125;
      var $iftmp_124;
      var $iftmp_123;
      var $j;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 289);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      if (($nch & 1) != 0 | $nch <= 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      $iftmp_123 = 1;
      $res = 1;
      __label__ = 6;
      break;
     case 3:
      $iftmp_123 = 0;
      $res = 0;
      var $12 = _PyErr_Occurred();
      
      if ($12 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      _err_string(__str122);
      __label__ = 5;
      break;
     case 5:
      
      
      if ($res != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 6:
      
      
      
      var $18 = HEAP[$tree_addr + 20];
      var $19 = _validate_terminal($18, 1, __str123);
      
      if ($19 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $24 = HEAP[$tree_addr + 20] + 24;
      var $25 = _validate_ntype($24, 1);
      
      if ($25 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      $iftmp_124 = 1;
      __label__ = 10;
      break;
     case 9:
      $iftmp_124 = 0;
      __label__ = 10;
      break;
     case 10:
      
      $res = $iftmp_124;
      __label__ = 11;
      break;
     case 11:
      $j = 2;
      var $_pr2 = $res;
      __lastLabel__ = 11;
      __label__ = 17;
      break;
     case 12:
      
      
      
      
      var $32 = HEAP[$tree_addr + 20] + 24 * $j;
      var $33 = _validate_terminal($32, 12, __str52);
      
      if ($33 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      var $40 = HEAP[$tree_addr + 20] + 24 * ($j + 1);
      var $41 = _validate_ntype($40, 1);
      
      if ($41 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      $iftmp_125 = 1;
      __label__ = 16;
      break;
     case 15:
      $iftmp_125 = 0;
      __label__ = 16;
      break;
     case 16:
      var $43 = $iftmp_125;
      $res = $43;
      
      var $45 = $j + 2;
      $j = $45;
      __lastLabel__ = 16;
      __label__ = 17;
      break;
     case 17:
      var $46 = __lastLabel__ == 16 ? $43 : $_pr2;
      
      if ($46 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      if ($j < $nch) {
        __label__ = 12;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      $0 = $res;
      
      $retval = $0;
      var $retval22 = $retval;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_exec_stmt($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_128;
      var $iftmp_127;
      var $iftmp_126;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 290);
      
      if ($5 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      if ($nch == 2 | $nch == 4 | $nch == 6) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      var $16 = HEAP[$tree_addr + 20];
      var $17 = _validate_terminal($16, 1, __str124);
      
      if ($17 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $22 = HEAP[$tree_addr + 20] + 24;
      var $23 = _validate_expr($22);
      
      if ($23 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      $iftmp_126 = 1;
      $res = 1;
      __label__ = 8;
      break;
     case 5:
      $iftmp_126 = 0;
      $res = 0;
      var $25 = _PyErr_Occurred();
      
      if ($25 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      _err_string(__str125);
      __label__ = 7;
      break;
     case 7:
      
      
      if ($res != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 8:
      
      
      if ($nch > 2) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 9:
      
      
      
      var $33 = HEAP[$tree_addr + 20] + 48;
      var $34 = _validate_terminal($33, 1, __str76);
      
      if ($34 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $39 = HEAP[$tree_addr + 20] + 72;
      var $40 = _validate_test($39);
      
      if ($40 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      $iftmp_127 = 1;
      __label__ = 13;
      break;
     case 12:
      $iftmp_127 = 0;
      __label__ = 13;
      break;
     case 13:
      var $42 = $iftmp_127;
      $res = $42;
      __lastLabel__ = 13;
      __label__ = 15;
      break;
     case 14:
      var $_pr4 = $res;
      __lastLabel__ = 14;
      __label__ = 15;
      break;
     case 15:
      var $43 = __lastLabel__ == 14 ? $_pr4 : $42;
      
      if ($43 != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 16:
      
      
      if ($nch == 6) {
        __label__ = 17;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 17:
      
      
      
      var $50 = HEAP[$tree_addr + 20] + 96;
      var $51 = _validate_terminal($50, 12, __str52);
      
      if ($51 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      var $56 = HEAP[$tree_addr + 20] + 120;
      var $57 = _validate_test($56);
      
      if ($57 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      $iftmp_128 = 1;
      __label__ = 21;
      break;
     case 20:
      $iftmp_128 = 0;
      __label__ = 21;
      break;
     case 21:
      
      $res = $iftmp_128;
      __label__ = 22;
      break;
     case 22:
      
      $0 = $res;
      
      $retval = $0;
      var $retval25 = $retval;
      return $retval25;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_assert_stmt($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_130;
      var $iftmp_129;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 291);
      
      if ($5 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if ($nch == 2 | $nch == 4) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      var $14 = HEAP[$tree_addr + 20];
      var $15 = _validate_terminal($14, 1, __str126);
      
      if ($15 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $20 = HEAP[$tree_addr + 20] + 24;
      var $21 = _validate_test($20);
      
      if ($21 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      $iftmp_129 = 1;
      $res = 1;
      __label__ = 8;
      break;
     case 5:
      $iftmp_129 = 0;
      $res = 0;
      var $23 = _PyErr_Occurred();
      
      if ($23 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      _err_string(__str127);
      __label__ = 7;
      break;
     case 7:
      
      
      if ($res != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 8:
      
      
      if ($nch > 2) {
        __label__ = 9;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 9:
      
      
      
      var $31 = HEAP[$tree_addr + 20] + 48;
      var $32 = _validate_terminal($31, 12, __str52);
      
      if ($32 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $37 = HEAP[$tree_addr + 20] + 72;
      var $38 = _validate_test($37);
      
      if ($38 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      $iftmp_130 = 1;
      __label__ = 13;
      break;
     case 12:
      $iftmp_130 = 0;
      __label__ = 13;
      break;
     case 13:
      
      $res = $iftmp_130;
      __label__ = 14;
      break;
     case 14:
      
      $0 = $res;
      
      $retval = $0;
      var $retval17 = $retval;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_while($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_132;
      var $iftmp_131;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 294);
      
      if ($5 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if ($nch == 4 | $nch == 7) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      
      
      
      var $14 = HEAP[$tree_addr + 20];
      var $15 = _validate_terminal($14, 1, __str128);
      
      if ($15 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $20 = HEAP[$tree_addr + 20] + 24;
      var $21 = _validate_test($20);
      
      if ($21 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $26 = HEAP[$tree_addr + 20] + 48;
      var $27 = _validate_terminal($26, 11, __str54);
      
      if ($27 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $32 = HEAP[$tree_addr + 20] + 72;
      var $33 = _validate_suite($32);
      
      if ($33 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $iftmp_131 = 0;
      $res = 0;
      __label__ = 14;
      break;
     case 7:
      $iftmp_131 = 1;
      $res = 1;
      
      
      if ($nch == 7) {
        __label__ = 8;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 8:
      
      
      
      var $40 = HEAP[$tree_addr + 20] + 96;
      var $41 = _validate_terminal($40, 1, __str58);
      
      if ($41 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      var $46 = HEAP[$tree_addr + 20] + 120;
      var $47 = _validate_terminal($46, 11, __str54);
      
      if ($47 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $52 = HEAP[$tree_addr + 20] + 144;
      var $53 = _validate_suite($52);
      
      if ($53 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      $iftmp_132 = 1;
      __label__ = 13;
      break;
     case 12:
      $iftmp_132 = 0;
      __label__ = 13;
      break;
     case 13:
      
      $res = $iftmp_132;
      __label__ = 14;
      break;
     case 14:
      
      $0 = $res;
      
      $retval = $0;
      var $retval17 = $retval;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_for($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_134;
      var $iftmp_133;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 295);
      
      if ($5 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if ($nch == 6 | $nch == 9) {
        __label__ = 2;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 2:
      
      
      
      var $14 = HEAP[$tree_addr + 20];
      var $15 = _validate_terminal($14, 1, __str75);
      
      if ($15 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $20 = HEAP[$tree_addr + 20] + 24;
      var $21 = _validate_exprlist($20);
      
      if ($21 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $26 = HEAP[$tree_addr + 20] + 48;
      var $27 = _validate_terminal($26, 1, __str76);
      
      if ($27 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $32 = HEAP[$tree_addr + 20] + 72;
      var $33 = _validate_testlist($32);
      
      if ($33 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $38 = HEAP[$tree_addr + 20] + 96;
      var $39 = _validate_terminal($38, 11, __str54);
      
      if ($39 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $44 = HEAP[$tree_addr + 20] + 120;
      var $45 = _validate_suite($44);
      
      if ($45 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $iftmp_133 = 0;
      $res = 0;
      __label__ = 16;
      break;
     case 9:
      $iftmp_133 = 1;
      $res = 1;
      
      
      if ($nch == 9) {
        __label__ = 10;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 10:
      
      
      
      var $52 = HEAP[$tree_addr + 20] + 144;
      var $53 = _validate_terminal($52, 1, __str58);
      
      if ($53 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      var $58 = HEAP[$tree_addr + 20] + 168;
      var $59 = _validate_terminal($58, 11, __str54);
      
      if ($59 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      var $64 = HEAP[$tree_addr + 20] + 192;
      var $65 = _validate_suite($64);
      
      if ($65 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      $iftmp_134 = 1;
      __label__ = 15;
      break;
     case 14:
      $iftmp_134 = 0;
      __label__ = 15;
      break;
     case 15:
      
      $res = $iftmp_134;
      __label__ = 16;
      break;
     case 16:
      
      $0 = $res;
      
      $retval = $0;
      var $retval19 = $retval;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_try($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $iftmp_141;
      var $iftmp_140;
      var $iftmp_139;
      var $0;
      var $iftmp_138;
      var $iftmp_136;
      var $iftmp_135;
      var $nch;
      var $pos;
      var $res;
      var $name;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      $pos = 3;
      
      var $5 = _validate_ntype($tree_addr, 296);
      
      if ($5 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($nch <= 5) {
        __label__ = 11;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      if ($nch % 3 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $iftmp_135 = 1;
      $res = 1;
      
      
      
      var $15 = HEAP[$tree_addr + 20];
      var $16 = _validate_terminal($15, 1, __str129);
      
      if ($16 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $21 = HEAP[$tree_addr + 20] + 24;
      var $22 = _validate_terminal($21, 11, __str54);
      
      if ($22 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $27 = HEAP[$tree_addr + 20] + 48;
      var $28 = _validate_suite($27);
      
      if ($28 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      var $35 = HEAP[$tree_addr + 20] + 24 * ($nch - 2);
      var $36 = _validate_terminal($35, 11, __str54);
      
      if ($36 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      var $43 = HEAP[$tree_addr + 20] + 24 * ($nch - 1);
      var $44 = _validate_suite($43);
      
      if ($44 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      $iftmp_136 = 1;
      __label__ = 10;
      break;
     case 9:
      $iftmp_136 = 0;
      __label__ = 10;
      break;
     case 10:
      var $46 = $iftmp_136;
      $res = $46;
      __lastLabel__ = 10;
      __label__ = 16;
      break;
     case 11:
      $iftmp_135 = 0;
      $res = 0;
      var $47 = _PyErr_Occurred();
      
      if ($47 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      $name = __str130;
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * ($nch - 3)] != 299) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      
      
      
      $name = HEAP[HEAP[$tree_addr + 20] + 24 * ($nch - 3) + 4];
      __label__ = 14;
      break;
     case 14:
      var $66 = HEAP[_parser_error];
      
      var $68 = _PyErr_Format($66, __str131, allocate([ $name, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 15;
      break;
     case 15:
      var $_pr = $res;
      __lastLabel__ = 15;
      __label__ = 16;
      break;
     case 16:
      var $69 = __lastLabel__ == 15 ? $_pr : $46;
      
      if ($69 != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * $pos] == 1) {
        __label__ = 18;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 18:
      
      
      
      
      
      
      var $85 = HEAP[HEAP[$tree_addr + 20] + 24 * $pos + 4];
      var $86 = _strcmp($85, __str132);
      
      if ($86 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 19:
      
      var $89 = _validate_numnodes($tree_addr, 6, __str133);
      
      if ($89 == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      var $94 = HEAP[$tree_addr + 20] + 96;
      var $95 = _validate_terminal($94, 11, __str54);
      
      if ($95 == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      var $100 = HEAP[$tree_addr + 20] + 120;
      var $101 = _validate_suite($100);
      
      if ($101 == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      $iftmp_138 = 1;
      __label__ = 24;
      break;
     case 23:
      $iftmp_138 = 0;
      __label__ = 24;
      break;
     case 24:
      
      $res = $iftmp_138;
      
      $0 = $res;
      __label__ = 55;
      break;
     case 25:
      
      
      
      
      var $109 = HEAP[$tree_addr + 20] + 24 * $pos;
      var $110 = _validate_except_clause($109);
      
      if ($110 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      
      var $117 = HEAP[$tree_addr + 20] + 24 * ($pos + 1);
      var $118 = _validate_terminal($117, 11, __str54);
      
      if ($118 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      
      var $125 = HEAP[$tree_addr + 20] + 24 * ($pos + 2);
      var $126 = _validate_suite($125);
      
      if ($126 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      $iftmp_139 = 1;
      __label__ = 30;
      break;
     case 29:
      $iftmp_139 = 0;
      __label__ = 30;
      break;
     case 30:
      var $128 = $iftmp_139;
      $res = $128;
      
      var $130 = $pos + 3;
      $pos = $130;
      __lastLabel__ = 30;
      __label__ = 32;
      break;
     case 31:
      var $_pr1 = $res;
      __lastLabel__ = 31;
      __label__ = 32;
      break;
     case 32:
      var $131 = __lastLabel__ == 31 ? $_pr1 : $128;
      
      if ($131 == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      if ($pos >= $nch) {
        __label__ = 35;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * $pos] == 299) {
        __label__ = 25;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      if ($res != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 36:
      
      
      
      if ($pos < $nch) {
        __label__ = 37;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 37:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * $pos] == 1) {
        __label__ = 38;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 38:
      
      
      
      
      
      
      var $163 = HEAP[HEAP[$tree_addr + 20] + 24 * $pos + 4];
      var $164 = _strcmp($163, __str58);
      
      if ($164 == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 39:
      
      
      
      
      
      var $171 = HEAP[$tree_addr + 20] + 24 * ($pos + 1);
      var $172 = _validate_terminal($171, 11, __str54);
      
      if ($172 == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      
      
      
      
      
      var $179 = HEAP[$tree_addr + 20] + 24 * ($pos + 2);
      var $180 = _validate_suite($179);
      
      if ($180 == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 41:
      $iftmp_140 = 1;
      __label__ = 43;
      break;
     case 42:
      $iftmp_140 = 0;
      __label__ = 43;
      break;
     case 43:
      var $182 = $iftmp_140;
      $res = $182;
      
      var $184 = $pos + 3;
      $pos = $184;
      __lastLabel__ = 43;
      __label__ = 45;
      break;
     case 44:
      var $_pr2 = $res;
      __lastLabel__ = 44;
      __label__ = 45;
      break;
     case 45:
      var $185 = __lastLabel__ == 44 ? $_pr2 : $182;
      
      if ($185 != 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 46:
      
      
      
      if ($pos < $nch) {
        __label__ = 47;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 47:
      
      
      
      
      var $194 = HEAP[$tree_addr + 20] + 24 * $pos;
      var $195 = _validate_terminal($194, 1, __str132);
      
      if ($195 == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      
      
      
      var $200 = _validate_numnodes($tree_addr, $pos + 3, __str134);
      
      if ($200 == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 49:
      
      
      
      
      
      var $207 = HEAP[$tree_addr + 20] + 24 * ($pos + 1);
      var $208 = _validate_terminal($207, 11, __str54);
      
      if ($208 == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 50:
      
      
      
      
      
      var $215 = HEAP[$tree_addr + 20] + 24 * ($pos + 2);
      var $216 = _validate_suite($215);
      
      if ($216 == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 51:
      $iftmp_141 = 1;
      __label__ = 53;
      break;
     case 52:
      $iftmp_141 = 0;
      __label__ = 53;
      break;
     case 53:
      
      $res = $iftmp_141;
      __label__ = 54;
      break;
     case 54:
      
      $0 = $res;
      __label__ = 55;
      break;
     case 55:
      
      $retval = $0;
      var $retval56 = $retval;
      return $retval56;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_except_clause($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_143;
      var $iftmp_142;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 299);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      if ($nch == 1 | $nch == 2 | $nch == 4) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $16 = HEAP[$tree_addr + 20];
      var $17 = _validate_terminal($16, 1, __str130);
      
      if ($17 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_142 = 0;
      $res = 0;
      __label__ = 15;
      break;
     case 4:
      $iftmp_142 = 1;
      $res = 1;
      
      
      if ($nch > 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 5:
      
      
      
      var $24 = HEAP[$tree_addr + 20] + 24;
      var $25 = _validate_test($24);
      $res = $25;
      
      if ($25 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 6:
      
      
      if ($nch == 4) {
        __label__ = 7;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      
      
      var $38 = HEAP[$tree_addr + 20] + 48;
      if (HEAP[HEAP[$tree_addr + 20] + 48] == 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $39 = _validate_terminal($38, 1, __str112);
      $res = $39;
      __lastLabel__ = 8;
      __label__ = 10;
      break;
     case 9:
      var $40 = _validate_terminal($38, 12, __str52);
      $res = $40;
      __lastLabel__ = 9;
      __label__ = 10;
      break;
     case 10:
      var $41 = __lastLabel__ == 9 ? $40 : $39;
      
      if ($41 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      var $46 = HEAP[$tree_addr + 20] + 72;
      var $47 = _validate_test($46);
      
      if ($47 == 0) {
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
      
      $res = $iftmp_143;
      __label__ = 15;
      break;
     case 15:
      
      $0 = $res;
      
      $retval = $0;
      var $retval20 = $retval;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_test($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_146;
      var $iftmp_145;
      var $iftmp_144;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 304);
      
      if ($5 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((($nch & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $iftmp_144 = 0;
      $res = 0;
      __label__ = 20;
      break;
     case 3:
      $iftmp_144 = 1;
      $res = 1;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20]] != 321) {
        __label__ = 9;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if ($nch != 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $22 = HEAP[$tree_addr + 20];
      var $23 = _validate_lambdef($22);
      
      if ($23 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      $iftmp_145 = 1;
      __label__ = 8;
      break;
     case 7:
      $iftmp_145 = 0;
      __label__ = 8;
      break;
     case 8:
      
      $res = $iftmp_145;
      __label__ = 20;
      break;
     case 9:
      
      
      if ($res != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 10:
      
      
      
      var $30 = HEAP[$tree_addr + 20];
      var $31 = _validate_or_test($30);
      $res = $31;
      
      
      if ($res == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      if ($nch == 1) {
        __label__ = 17;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if ($nch != 5) {
        __label__ = 18;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $41 = HEAP[$tree_addr + 20] + 24;
      var $42 = _validate_terminal($41, 1, __str57);
      
      if ($42 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      var $47 = HEAP[$tree_addr + 20] + 48;
      var $48 = _validate_or_test($47);
      
      if ($48 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      var $53 = HEAP[$tree_addr + 20] + 72;
      var $54 = _validate_terminal($53, 1, __str58);
      
      if ($54 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      var $59 = HEAP[$tree_addr + 20] + 96;
      var $60 = _validate_test($59);
      
      if ($60 != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      $iftmp_146 = 1;
      __label__ = 19;
      break;
     case 18:
      $iftmp_146 = 0;
      __label__ = 19;
      break;
     case 19:
      
      $res = $iftmp_146;
      __label__ = 20;
      break;
     case 20:
      
      $0 = $res;
      
      $retval = $0;
      var $retval25 = $retval;
      return $retval25;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_old_test($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_147;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 302);
      
      if ($5 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($nch != 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $iftmp_147 = 0;
      $res = 0;
      __label__ = 7;
      break;
     case 3:
      $iftmp_147 = 1;
      $res = 1;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20]] != 303) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $19 = HEAP[$tree_addr + 20];
      var $20 = _validate_old_lambdef($19);
      $res = $20;
      __label__ = 7;
      break;
     case 5:
      
      
      if ($res != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $25 = HEAP[$tree_addr + 20];
      var $26 = _validate_or_test($25);
      $res = $26;
      __label__ = 7;
      break;
     case 7:
      
      $0 = $res;
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_or_test($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_149;
      var $iftmp_148;
      var $nch;
      var $res;
      var $pos;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 305);
      
      if ($5 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((($nch & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $iftmp_148 = 0;
      $res = 0;
      __label__ = 11;
      break;
     case 3:
      $iftmp_148 = 1;
      $res = 1;
      
      
      
      var $13 = HEAP[$tree_addr + 20];
      var $14 = _validate_and_test($13);
      $res = $14;
      $pos = 1;
      __lastLabel__ = 3;
      __label__ = 9;
      break;
     case 4:
      
      
      
      
      var $19 = HEAP[$tree_addr + 20] + 24 * $pos;
      var $20 = _validate_terminal($19, 1, __str135);
      
      if ($20 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      var $27 = HEAP[$tree_addr + 20] + 24 * ($pos + 1);
      var $28 = _validate_and_test($27);
      
      if ($28 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      $iftmp_149 = 1;
      __label__ = 8;
      break;
     case 7:
      $iftmp_149 = 0;
      __label__ = 8;
      break;
     case 8:
      var $30 = $iftmp_149;
      $res = $30;
      
      var $32 = $pos + 2;
      $pos = $32;
      __lastLabel__ = 8;
      __label__ = 9;
      break;
     case 9:
      var $33 = __lastLabel__ == 8 ? $30 : $14;
      
      if ($33 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      if ($pos < $nch) {
        __label__ = 4;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      $0 = $res;
      
      $retval = $0;
      var $retval16 = $retval;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_and_test($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_151;
      var $iftmp_150;
      var $pos;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 306);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((($nch & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[$tree_addr + 20];
      var $14 = _validate_not_test($13);
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $iftmp_150 = 1;
      __label__ = 5;
      break;
     case 4:
      $iftmp_150 = 0;
      __label__ = 5;
      break;
     case 5:
      var $16 = $iftmp_150;
      $res = $16;
      $pos = 1;
      __lastLabel__ = 5;
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      var $21 = HEAP[$tree_addr + 20] + 24 * $pos;
      var $22 = _validate_terminal($21, 1, __str136);
      
      if ($22 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $27 = HEAP[$tree_addr + 20];
      var $28 = _validate_not_test($27);
      
      if ($28 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      $iftmp_151 = 1;
      __label__ = 10;
      break;
     case 9:
      $iftmp_151 = 0;
      __label__ = 10;
      break;
     case 10:
      var $30 = $iftmp_151;
      $res = $30;
      
      var $32 = $pos + 2;
      $pos = $32;
      __lastLabel__ = 10;
      __label__ = 11;
      break;
     case 11:
      var $33 = __lastLabel__ == 10 ? $30 : $16;
      
      if ($33 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      if ($pos < $nch) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      $0 = $res;
      
      $retval = $0;
      var $retval16 = $retval;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_not_test($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_153;
      var $iftmp_152;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 307);
      
      if ($5 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if ($nch == 1 | $nch == 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      $iftmp_152 = 0;
      $res = 0;
      __label__ = 11;
      break;
     case 3:
      $iftmp_152 = 1;
      $res = 1;
      
      
      if ($nch == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      
      
      
      var $16 = HEAP[$tree_addr + 20];
      var $17 = _validate_terminal($16, 1, __str137);
      
      if ($17 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $22 = HEAP[$tree_addr + 20] + 24;
      var $23 = _validate_not_test($22);
      
      if ($23 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      $iftmp_153 = 1;
      __label__ = 8;
      break;
     case 7:
      $iftmp_153 = 0;
      __label__ = 8;
      break;
     case 8:
      
      $res = $iftmp_153;
      __label__ = 11;
      break;
     case 9:
      
      
      if ($nch == 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      var $31 = HEAP[$tree_addr + 20];
      var $32 = _validate_comparison($31);
      $res = $32;
      __label__ = 11;
      break;
     case 11:
      
      $0 = $res;
      
      $retval = $0;
      var $retval14 = $retval;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_comparison($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_155;
      var $iftmp_154;
      var $pos;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 308);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((($nch & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[$tree_addr + 20];
      var $14 = _validate_expr($13);
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $iftmp_154 = 1;
      __label__ = 5;
      break;
     case 4:
      $iftmp_154 = 0;
      __label__ = 5;
      break;
     case 5:
      var $16 = $iftmp_154;
      $res = $16;
      $pos = 1;
      __lastLabel__ = 5;
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      var $21 = HEAP[$tree_addr + 20] + 24 * $pos;
      var $22 = _validate_comp_op($21);
      
      if ($22 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      var $29 = HEAP[$tree_addr + 20] + 24 * ($pos + 1);
      var $30 = _validate_expr($29);
      
      if ($30 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      $iftmp_155 = 1;
      __label__ = 10;
      break;
     case 9:
      $iftmp_155 = 0;
      __label__ = 10;
      break;
     case 10:
      var $32 = $iftmp_155;
      $res = $32;
      
      var $34 = $pos + 2;
      $pos = $34;
      __lastLabel__ = 10;
      __label__ = 11;
      break;
     case 11:
      var $35 = __lastLabel__ == 10 ? $32 : $16;
      
      if ($35 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      if ($pos < $nch) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      $0 = $res;
      
      $retval = $0;
      var $retval16 = $retval;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_comp_op($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $iftmp_158;
      var $iftmp_156;
      var $0;
      var $res;
      var $nch;
      $tree_addr = $tree;
      $res = 0;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 309);
      
      if ($5 == 0) {
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
      
      
      var $9 = $tree_addr;
      if ($nch == 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 3:
      
      
      var $12 = HEAP[$9 + 20];
      $tree_addr = $12;
      
      
      
      var $16 = HEAP[$tree_addr];
      if ($16 == 1) {
        __label__ = 5;
        break;
      } else if ($16 == 20) {
        __label__ = 4;
        break;
      } else if ($16 == 21) {
        __label__ = 4;
        break;
      } else if ($16 == 22) {
        __label__ = 4;
        break;
      } else if ($16 == 28) {
        __label__ = 4;
        break;
      } else if ($16 == 29) {
        __label__ = 4;
        break;
      } else if ($16 == 30) {
        __label__ = 4;
        break;
      } else if ($16 == 31) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      $res = 1;
      __label__ = 20;
      break;
     case 5:
      
      
      var $19 = HEAP[$tree_addr + 4];
      var $20 = _strcmp($19, __str76);
      
      if ($20 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $24 = HEAP[$tree_addr + 4];
      var $25 = _strcmp($24, __str138);
      
      if ($25 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $iftmp_156 = 1;
      $res = 1;
      __label__ = 20;
      break;
     case 8:
      $iftmp_156 = 0;
      $res = 0;
      
      
      var $29 = HEAP[$tree_addr + 4];
      var $30 = HEAP[_parser_error];
      var $31 = _PyErr_Format($30, __str139, allocate([ $29, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 20;
      break;
     case 9:
      _err_string(__str140);
      __label__ = 20;
      break;
     case 10:
      var $32 = _validate_numnodes($9, 2, __str141);
      $res = $32;
      
      
      if ($res != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 11:
      
      
      
      var $38 = HEAP[$tree_addr + 20];
      var $39 = _validate_ntype($38, 1);
      
      if ($39 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      var $44 = HEAP[$tree_addr + 20] + 24;
      var $45 = _validate_ntype($44, 1);
      
      if ($45 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      var $52 = HEAP[HEAP[$tree_addr + 20] + 4];
      var $53 = _strcmp($52, __str138);
      
      if ($53 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      
      var $60 = HEAP[HEAP[$tree_addr + 20] + 24 + 4];
      var $61 = _strcmp($60, __str137);
      
      if ($61 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      
      var $68 = HEAP[HEAP[$tree_addr + 20] + 4];
      var $69 = _strcmp($68, __str137);
      
      if ($69 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      var $76 = HEAP[HEAP[$tree_addr + 20] + 24 + 4];
      var $77 = _strcmp($76, __str76);
      
      if ($77 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      $iftmp_158 = 1;
      $res = 1;
      __label__ = 20;
      break;
     case 18:
      $iftmp_158 = 0;
      $res = 0;
      var $79 = _PyErr_Occurred();
      
      if ($79 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      _err_string(__str142);
      __label__ = 20;
      break;
     case 20:
      
      $0 = $res;
      __label__ = 21;
      break;
     case 21:
      
      $retval = $0;
      var $retval27 = $retval;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_expr($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_160;
      var $iftmp_159;
      var $j;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 310);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((($nch & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[$tree_addr + 20];
      var $14 = _validate_xor_expr($13);
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $iftmp_159 = 1;
      __label__ = 5;
      break;
     case 4:
      $iftmp_159 = 0;
      __label__ = 5;
      break;
     case 5:
      var $16 = $iftmp_159;
      $res = $16;
      $j = 2;
      __lastLabel__ = 5;
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      var $21 = HEAP[$tree_addr + 20] + 24 * $j;
      var $22 = _validate_xor_expr($21);
      
      if ($22 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      var $29 = HEAP[$tree_addr + 20] + 24 * ($j - 1);
      var $30 = _validate_terminal($29, 18, __str143);
      
      if ($30 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      $iftmp_160 = 1;
      __label__ = 10;
      break;
     case 9:
      $iftmp_160 = 0;
      __label__ = 10;
      break;
     case 10:
      var $32 = $iftmp_160;
      $res = $32;
      
      var $34 = $j + 2;
      $j = $34;
      __lastLabel__ = 10;
      __label__ = 11;
      break;
     case 11:
      var $35 = __lastLabel__ == 10 ? $32 : $16;
      
      if ($35 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      if ($j < $nch) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      $0 = $res;
      
      $retval = $0;
      var $retval16 = $retval;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_xor_expr($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_162;
      var $iftmp_161;
      var $j;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 311);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((($nch & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[$tree_addr + 20];
      var $14 = _validate_and_expr($13);
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $iftmp_161 = 1;
      __label__ = 5;
      break;
     case 4:
      $iftmp_161 = 0;
      __label__ = 5;
      break;
     case 5:
      var $16 = $iftmp_161;
      $res = $16;
      $j = 2;
      __lastLabel__ = 5;
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      
      var $22 = HEAP[$tree_addr + 20] + 24 * ($j - 1);
      var $23 = _validate_terminal($22, 33, __str144);
      
      if ($23 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      var $29 = HEAP[$tree_addr + 20] + 24 * $j;
      var $30 = _validate_and_expr($29);
      
      if ($30 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      $iftmp_162 = 1;
      __label__ = 10;
      break;
     case 9:
      $iftmp_162 = 0;
      __label__ = 10;
      break;
     case 10:
      var $32 = $iftmp_162;
      $res = $32;
      
      var $34 = $j + 2;
      $j = $34;
      __lastLabel__ = 10;
      __label__ = 11;
      break;
     case 11:
      var $35 = __lastLabel__ == 10 ? $32 : $16;
      
      if ($35 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      if ($j < $nch) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      $0 = $res;
      
      $retval = $0;
      var $retval16 = $retval;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_and_expr($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_164;
      var $iftmp_163;
      var $pos;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 312);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((($nch & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[$tree_addr + 20];
      var $14 = _validate_shift_expr($13);
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $iftmp_163 = 1;
      __label__ = 5;
      break;
     case 4:
      $iftmp_163 = 0;
      __label__ = 5;
      break;
     case 5:
      var $16 = $iftmp_163;
      $res = $16;
      $pos = 1;
      __lastLabel__ = 5;
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      var $21 = HEAP[$tree_addr + 20] + 24 * $pos;
      var $22 = _validate_terminal($21, 19, __str145);
      
      if ($22 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      var $29 = HEAP[$tree_addr + 20] + 24 * ($pos + 1);
      var $30 = _validate_shift_expr($29);
      
      if ($30 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      $iftmp_164 = 1;
      __label__ = 10;
      break;
     case 9:
      $iftmp_164 = 0;
      __label__ = 10;
      break;
     case 10:
      var $32 = $iftmp_164;
      $res = $32;
      
      var $34 = $pos + 2;
      $pos = $34;
      __lastLabel__ = 10;
      __label__ = 11;
      break;
     case 11:
      var $35 = __lastLabel__ == 10 ? $32 : $16;
      
      if ($35 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      if ($pos < $nch) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      $0 = $res;
      
      $retval = $0;
      var $retval16 = $retval;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_chain_two_ops($tree, $termvalid, $op1, $op2) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $termvalid_addr;
      var $op1_addr;
      var $op2_addr;
      var $retval;
      var $0;
      var $iftmp_165;
      var $pos;
      var $nch;
      var $res;
      $tree_addr = $tree;
      $termvalid_addr = $termvalid;
      $op1_addr = $op1;
      $op2_addr = $op2;
      $pos = 1;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      
      
      
      
      
      
      if ((($nch & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      var $10 = HEAP[$tree_addr + 20];
      var $11 = $termvalid_addr;
      var $12 = FUNCTION_TABLE[$11]($10);
      
      if ($12 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      $iftmp_165 = 1;
      __label__ = 4;
      break;
     case 3:
      $iftmp_165 = 0;
      __label__ = 4;
      break;
     case 4:
      var $14 = $iftmp_165;
      $res = $14;
      __lastLabel__ = 4;
      __label__ = 11;
      break;
     case 5:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * $pos] != $op1_addr) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $29 = HEAP[$tree_addr + 20] + 24 * $pos;
      
      var $31 = _validate_ntype($29, $op2_addr);
      $res = $31;
      __lastLabel__ = 6;
      __label__ = 8;
      break;
     case 7:
      var $_pr = $res;
      __lastLabel__ = 7;
      __label__ = 8;
      break;
     case 8:
      var $32 = __lastLabel__ == 7 ? $_pr : $31;
      
      if ($32 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      var $39 = HEAP[$tree_addr + 20] + 24 * ($pos + 1);
      var $40 = $termvalid_addr;
      var $41 = FUNCTION_TABLE[$40]($39);
      $res = $41;
      __label__ = 10;
      break;
     case 10:
      
      var $43 = $pos + 2;
      $pos = $43;
      var $_pr1 = $res;
      __lastLabel__ = 10;
      __label__ = 11;
      break;
     case 11:
      var $44 = __lastLabel__ == 10 ? $_pr1 : $14;
      
      if ($44 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      if ($pos < $nch) {
        __label__ = 5;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      $0 = $res;
      
      $retval = $0;
      var $retval15 = $retval;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_shift_expr($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $iftmp_166;
      var $0;
      $tree_addr = $tree;
      
      var $2 = _validate_ntype($tree_addr, 313);
      
      if ($2 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $5 = _validate_chain_two_ops($tree_addr, FUNCTION_TABLE_OFFSET + 16, 34, 35);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      $iftmp_166 = 1;
      __label__ = 4;
      break;
     case 3:
      $iftmp_166 = 0;
      __label__ = 4;
      break;
     case 4:
      
      $0 = $iftmp_166;
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_arith_expr($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $iftmp_167;
      var $0;
      $tree_addr = $tree;
      
      var $2 = _validate_ntype($tree_addr, 314);
      
      if ($2 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $5 = _validate_chain_two_ops($tree_addr, FUNCTION_TABLE_OFFSET + 18, 14, 15);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      $iftmp_167 = 1;
      __label__ = 4;
      break;
     case 3:
      $iftmp_167 = 0;
      __label__ = 4;
      break;
     case 4:
      
      $0 = $iftmp_167;
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_term($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_169;
      var $iftmp_168;
      var $pos;
      var $nch;
      var $res;
      $tree_addr = $tree;
      $pos = 1;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 315);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((($nch & 1 & 255) != 0 ^ 1) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[$tree_addr + 20];
      var $14 = _validate_factor($13);
      
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $iftmp_168 = 1;
      __label__ = 5;
      break;
     case 4:
      $iftmp_168 = 0;
      __label__ = 5;
      break;
     case 5:
      var $16 = $iftmp_168;
      $res = $16;
      __lastLabel__ = 5;
      __label__ = 14;
      break;
     case 6:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * $pos] == 16) {
        __label__ = 10;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * $pos] == 17) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * $pos] == 48) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * $pos] == 24) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      
      
      var $54 = HEAP[$tree_addr + 20] + 24 * ($pos + 1);
      var $55 = _validate_factor($54);
      
      if ($55 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      $iftmp_169 = 1;
      __label__ = 13;
      break;
     case 12:
      $iftmp_169 = 0;
      __label__ = 13;
      break;
     case 13:
      var $57 = $iftmp_169;
      $res = $57;
      
      var $59 = $pos + 2;
      $pos = $59;
      __lastLabel__ = 13;
      __label__ = 14;
      break;
     case 14:
      var $60 = __lastLabel__ == 13 ? $57 : $16;
      
      if ($60 == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      if ($pos < $nch) {
        __label__ = 6;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      $0 = $res;
      
      $retval = $0;
      var $retval19 = $retval;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_factor($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_170;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 316);
      
      if ($5 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $7 = $nch;
      
      if ($7 != 2) {
        __lastLabel__ = 1;
        __label__ = 7;
        break;
      } else {
        __lastLabel__ = 1;
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20]] == 14) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20]] == 15) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20]] == 32) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      var $33 = HEAP[$tree_addr + 20] + 24;
      var $34 = _validate_factor($33);
      
      if ($34 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $_pr = $nch;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $36 = __lastLabel__ == 6 ? $_pr : $7;
      
      if ($36 != 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      var $41 = HEAP[$tree_addr + 20];
      var $42 = _validate_power($41);
      
      if ($42 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $iftmp_170 = 1;
      __label__ = 11;
      break;
     case 10:
      $iftmp_170 = 0;
      __label__ = 11;
      break;
     case 11:
      
      $res = $iftmp_170;
      
      $0 = $res;
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_power($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $iftmp_172;
      var $0;
      var $iftmp_171;
      var $pos;
      var $nch;
      var $res;
      $tree_addr = $tree;
      $pos = 1;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 317);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($nch <= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $12 = HEAP[$tree_addr + 20];
      var $13 = _validate_atom($12);
      
      if ($13 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $iftmp_171 = 1;
      __label__ = 5;
      break;
     case 4:
      $iftmp_171 = 0;
      __label__ = 5;
      break;
     case 5:
      var $15 = $iftmp_171;
      $res = $15;
      __lastLabel__ = 5;
      __label__ = 7;
      break;
     case 6:
      
      
      
      
      var $20 = HEAP[$tree_addr + 20] + 24 * $pos;
      
      var $22 = $pos + 1;
      $pos = $22;
      var $23 = _validate_trailer($20);
      $res = $23;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $24 = __lastLabel__ == 6 ? $23 : $15;
      
      if ($24 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      if ($pos >= $nch) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * $pos] == 322) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if ($res != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 11:
      
      
      
      if ($pos < $nch) {
        __label__ = 12;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 12:
      
      
      
      
      
      if (($nch - $pos & 1) != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 13:
      _err_string(__str146);
      $0 = 0;
      __label__ = 23;
      break;
     case 14:
      
      
      
      
      var $51 = HEAP[$tree_addr + 20] + 24 * $pos;
      var $52 = _validate_terminal($51, 36, __str67);
      
      if ($52 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      
      var $59 = HEAP[$tree_addr + 20] + 24 * ($pos + 1);
      var $60 = _validate_factor($59);
      
      if ($60 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      $iftmp_172 = 1;
      __label__ = 18;
      break;
     case 17:
      $iftmp_172 = 0;
      __label__ = 18;
      break;
     case 18:
      var $62 = $iftmp_172;
      $res = $62;
      
      var $64 = $pos + 2;
      $pos = $64;
      __lastLabel__ = 18;
      __label__ = 20;
      break;
     case 19:
      var $_pr = $res;
      __lastLabel__ = 19;
      __label__ = 20;
      break;
     case 20:
      var $65 = __lastLabel__ == 19 ? $_pr : $62;
      
      if ($65 == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      if ($nch - 1 > $pos) {
        __label__ = 14;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      $0 = $res;
      __label__ = 23;
      break;
     case 23:
      
      $retval = $0;
      var $retval23 = $retval;
      return $retval23;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_atom($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_176;
      var $iftmp_175;
      var $iftmp_174;
      var $iftmp_173;
      var $pos;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 318);
      $res = $5;
      
      
      if ($res != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 1:
      
      
      if ($nch <= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $13 = _validate_numnodes($tree_addr, $nch + 1, __str147);
      $res = $13;
      __lastLabel__ = 2;
      __label__ = 4;
      break;
     case 3:
      var $_pr = $res;
      __lastLabel__ = 3;
      __label__ = 4;
      break;
     case 4:
      var $14 = __lastLabel__ == 3 ? $_pr : $13;
      
      if ($14 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $22 = HEAP[HEAP[$tree_addr + 20]];
      if ($22 == 1) {
        __label__ = 33;
        break;
      } else if ($22 == 2) {
        __label__ = 33;
        break;
      } else if ($22 == 3) {
        __label__ = 34;
        break;
      } else if ($22 == 7) {
        __label__ = 6;
        break;
      } else if ($22 == 9) {
        __label__ = 13;
        break;
      } else if ($22 == 25) {
        __label__ = 27;
        break;
      } else if ($22 == 26) {
        __label__ = 22;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 6:
      
      
      if ($nch > 3) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      var $30 = HEAP[$tree_addr + 20] + 24 * ($nch - 1);
      var $31 = _validate_terminal($30, 8, __str56);
      
      if ($31 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $iftmp_173 = 0;
      $res = 0;
      __label__ = 39;
      break;
     case 9:
      $iftmp_173 = 1;
      $res = 1;
      
      
      if ($nch == 3) {
        __label__ = 10;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      
      
      var $45 = HEAP[$tree_addr + 20] + 24;
      if (HEAP[HEAP[$tree_addr + 20] + 24] == 340) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $46 = _validate_yield_expr($45);
      $res = $46;
      __label__ = 39;
      break;
     case 12:
      var $47 = _validate_testlist_comp($45);
      $res = $47;
      __label__ = 39;
      break;
     case 13:
      
      
      if ($nch == 2) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      var $53 = HEAP[$tree_addr + 20] + 24;
      var $54 = _validate_ntype($53, 10);
      $res = $54;
      __label__ = 39;
      break;
     case 15:
      
      
      if ($nch == 3) {
        __label__ = 16;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 16:
      
      
      
      var $60 = HEAP[$tree_addr + 20] + 24;
      var $61 = _validate_listmaker($60);
      
      if ($61 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      var $66 = HEAP[$tree_addr + 20] + 48;
      var $67 = _validate_ntype($66, 10);
      
      if ($67 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      $iftmp_174 = 1;
      __label__ = 20;
      break;
     case 19:
      $iftmp_174 = 0;
      __label__ = 20;
      break;
     case 20:
      
      $res = $iftmp_174;
      __label__ = 39;
      break;
     case 21:
      $res = 0;
      _err_string(__str148);
      __label__ = 39;
      break;
     case 22:
      
      
      if ($nch > 3) {
        __label__ = 24;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      var $77 = HEAP[$tree_addr + 20] + 24 * ($nch - 1);
      var $78 = _validate_ntype($77, 27);
      
      if ($78 == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      $iftmp_175 = 0;
      $res = 0;
      __label__ = 39;
      break;
     case 25:
      $iftmp_175 = 1;
      $res = 1;
      
      
      if ($nch == 3) {
        __label__ = 26;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 26:
      
      
      
      var $85 = HEAP[$tree_addr + 20] + 24;
      var $86 = _validate_dictorsetmaker($85);
      $res = $86;
      __label__ = 39;
      break;
     case 27:
      
      
      if ($nch != 3) {
        __label__ = 31;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      var $92 = HEAP[$tree_addr + 20] + 24;
      var $93 = _validate_testlist1($92);
      
      if ($93 == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      var $98 = HEAP[$tree_addr + 20] + 48;
      var $99 = _validate_ntype($98, 25);
      
      if ($99 == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      $iftmp_176 = 1;
      __label__ = 32;
      break;
     case 31:
      $iftmp_176 = 0;
      __label__ = 32;
      break;
     case 32:
      
      $res = $iftmp_176;
      __label__ = 39;
      break;
     case 33:
      
      
      
      $res = $nch == 1;
      __label__ = 39;
      break;
     case 34:
      $pos = 1;
      var $_pr1 = $res;
      __lastLabel__ = 34;
      __label__ = 36;
      break;
     case 35:
      
      
      
      
      var $109 = HEAP[$tree_addr + 20] + 24 * $pos;
      var $110 = _validate_ntype($109, 3);
      $res = $110;
      
      var $112 = $pos + 1;
      $pos = $112;
      __lastLabel__ = 35;
      __label__ = 36;
      break;
     case 36:
      var $113 = __lastLabel__ == 35 ? $110 : $_pr1;
      
      if ($113 == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 37:
      
      
      
      if ($pos < $nch) {
        __label__ = 35;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      $res = 0;
      __label__ = 39;
      break;
     case 39:
      
      $0 = $res;
      
      $retval = $0;
      var $retval46 = $retval;
      return $retval46;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_listmaker($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_177;
      var $nch;
      var $ok;
      var $i;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      $ok = $nch;
      
      
      if ($nch == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      _err_string(__str149);
      __label__ = 3;
      break;
     case 2:
      
      
      
      var $10 = HEAP[$tree_addr + 20];
      var $11 = _validate_test($10);
      $ok = $11;
      __label__ = 3;
      break;
     case 3:
      
      
      if ($nch != 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24] != 333) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $24 = HEAP[$tree_addr + 20] + 24;
      var $25 = _validate_list_for($24);
      $ok = $25;
      __label__ = 19;
      break;
     case 6:
      $i = 1;
      var $_pr = $ok;
      __lastLabel__ = 6;
      __label__ = 12;
      break;
     case 7:
      
      
      
      
      var $30 = HEAP[$tree_addr + 20] + 24 * $i;
      var $31 = _validate_terminal($30, 12, __str52);
      
      if ($31 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      var $38 = HEAP[$tree_addr + 20] + 24 * ($i + 1);
      var $39 = _validate_test($38);
      
      if ($39 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      $iftmp_177 = 1;
      __label__ = 11;
      break;
     case 10:
      $iftmp_177 = 0;
      __label__ = 11;
      break;
     case 11:
      var $41 = $iftmp_177;
      $ok = $41;
      
      var $43 = $i + 2;
      $i = $43;
      __lastLabel__ = 11;
      __label__ = 12;
      break;
     case 12:
      var $44 = __lastLabel__ == 11 ? $41 : $_pr;
      
      if ($44 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      if ($nch - $i > 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if ($ok == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      if ($nch - 1 != $i) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      var $60 = HEAP[$tree_addr + 20] + 24 * $i;
      var $61 = _validate_terminal($60, 12, __str52);
      $ok = $61;
      __label__ = 19;
      break;
     case 17:
      
      
      
      if ($i != $nch) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      $ok = 0;
      _err_string(__str150);
      __label__ = 19;
      break;
     case 19:
      
      $0 = $ok;
      
      $retval = $0;
      var $retval19 = $retval;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_testlist_comp($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_178;
      var $nch;
      var $ok;
      var $i;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      $ok = $nch;
      
      
      if ($nch == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      _err_string(__str151);
      __label__ = 3;
      break;
     case 2:
      
      
      
      var $10 = HEAP[$tree_addr + 20];
      var $11 = _validate_test($10);
      $ok = $11;
      __label__ = 3;
      break;
     case 3:
      
      
      if ($nch != 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24] != 336) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $24 = HEAP[$tree_addr + 20] + 24;
      var $25 = _validate_comp_for($24);
      $ok = $25;
      __label__ = 19;
      break;
     case 6:
      $i = 1;
      var $_pr = $ok;
      __lastLabel__ = 6;
      __label__ = 12;
      break;
     case 7:
      
      
      
      
      var $30 = HEAP[$tree_addr + 20] + 24 * $i;
      var $31 = _validate_terminal($30, 12, __str52);
      
      if ($31 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      var $38 = HEAP[$tree_addr + 20] + 24 * ($i + 1);
      var $39 = _validate_test($38);
      
      if ($39 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      $iftmp_178 = 1;
      __label__ = 11;
      break;
     case 10:
      $iftmp_178 = 0;
      __label__ = 11;
      break;
     case 11:
      var $41 = $iftmp_178;
      $ok = $41;
      
      var $43 = $i + 2;
      $i = $43;
      __lastLabel__ = 11;
      __label__ = 12;
      break;
     case 12:
      var $44 = __lastLabel__ == 11 ? $41 : $_pr;
      
      if ($44 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      if ($nch - $i > 1) {
        __label__ = 7;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if ($ok == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      if ($nch - 1 != $i) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      var $60 = HEAP[$tree_addr + 20] + 24 * $i;
      var $61 = _validate_terminal($60, 12, __str52);
      $ok = $61;
      __label__ = 19;
      break;
     case 17:
      
      
      
      if ($i != $nch) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      $ok = 0;
      _err_string(__str152);
      __label__ = 19;
      break;
     case 19:
      
      $0 = $ok;
      
      $retval = $0;
      var $retval19 = $retval;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_decorator($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_180;
      var $iftmp_179;
      var $ok;
      var $nch;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 259);
      
      if ($5 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      if ($nch == 3 | $nch == 5 | $nch == 6) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      var $16 = HEAP[$tree_addr + 20];
      var $17 = _validate_terminal($16, 50, __str153);
      
      if ($17 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $22 = HEAP[$tree_addr + 20] + 24;
      var $23 = _validate_dotted_name($22);
      
      if ($23 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $31 = HEAP[$tree_addr + 16] + -1;
      var $32 = HEAP[$tree_addr + 20] + 24 * $31;
      var $33 = _validate_terminal($32, 4, 0);
      
      if ($33 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $iftmp_179 = 0;
      $ok = 0;
      __label__ = 12;
      break;
     case 6:
      $iftmp_179 = 1;
      $ok = 1;
      
      
      if ($nch != 3) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      
      
      
      var $40 = HEAP[$tree_addr + 20] + 48;
      var $41 = _validate_terminal($40, 7, __str55);
      
      if ($41 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $49 = HEAP[$tree_addr + 16] + -2;
      var $50 = HEAP[$tree_addr + 20] + 24 * $49;
      var $51 = _validate_terminal($50, 8, __str56);
      
      if ($51 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $iftmp_180 = 0;
      $ok = 0;
      __label__ = 12;
      break;
     case 10:
      $iftmp_180 = 1;
      $ok = 1;
      
      
      if ($nch == 6) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      var $58 = HEAP[$tree_addr + 20] + 72;
      var $59 = _validate_arglist($58);
      $ok = $59;
      __label__ = 12;
      break;
     case 12:
      
      $0 = $ok;
      
      $retval = $0;
      var $retval18 = $retval;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_decorators($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_181;
      var $i;
      var $nch;
      var $ok;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 260);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($nch <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      $iftmp_181 = 1;
      __label__ = 4;
      break;
     case 3:
      $iftmp_181 = 0;
      __label__ = 4;
      break;
     case 4:
      var $9 = $iftmp_181;
      $ok = $9;
      $i = 0;
      __lastLabel__ = 4;
      __label__ = 6;
      break;
     case 5:
      
      
      
      
      var $14 = HEAP[$tree_addr + 20] + 24 * $i;
      var $15 = _validate_decorator($14);
      $ok = $15;
      
      var $17 = $i + 1;
      $i = $17;
      __lastLabel__ = 5;
      __label__ = 6;
      break;
     case 6:
      var $18 = __lastLabel__ == 5 ? $15 : $9;
      
      if ($18 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      if ($i < $nch) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      $0 = $ok;
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_with_item($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_183;
      var $iftmp_182;
      var $nch;
      var $ok;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 298);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if ($nch == 1 | $nch == 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $14 = HEAP[$tree_addr + 20];
      var $15 = _validate_test($14);
      
      if ($15 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_182 = 0;
      $ok = 0;
      __label__ = 10;
      break;
     case 4:
      $iftmp_182 = 1;
      $ok = 1;
      
      
      if ($nch == 3) {
        __label__ = 5;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 5:
      
      
      
      var $22 = HEAP[$tree_addr + 20] + 24;
      var $23 = _validate_terminal($22, 1, __str112);
      
      if ($23 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $28 = HEAP[$tree_addr + 20] + 48;
      var $29 = _validate_expr($28);
      
      if ($29 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      $iftmp_183 = 1;
      __label__ = 9;
      break;
     case 8:
      $iftmp_183 = 0;
      __label__ = 9;
      break;
     case 9:
      
      $ok = $iftmp_183;
      __label__ = 10;
      break;
     case 10:
      
      $0 = $ok;
      
      $retval = $0;
      var $retval13 = $retval;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_with_stmt($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_184;
      var $i;
      var $nch;
      var $ok;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 297);
      
      if ($5 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      if (($nch & 1) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $13 = HEAP[$tree_addr + 20];
      var $14 = _validate_terminal($13, 1, __str154);
      
      if ($14 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $22 = HEAP[$tree_addr + 16] + -2;
      var $23 = HEAP[$tree_addr + 20] + 24 * $22;
      var $24 = _validate_terminal($23, 11, __str54);
      
      if ($24 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $32 = HEAP[$tree_addr + 16] + -1;
      var $33 = HEAP[$tree_addr + 20] + 24 * $32;
      var $34 = _validate_suite($33);
      
      if ($34 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      $iftmp_184 = 1;
      __label__ = 7;
      break;
     case 6:
      $iftmp_184 = 0;
      __label__ = 7;
      break;
     case 7:
      var $36 = $iftmp_184;
      $ok = $36;
      $i = 1;
      __lastLabel__ = 7;
      __label__ = 9;
      break;
     case 8:
      
      
      
      
      var $41 = HEAP[$tree_addr + 20] + 24 * $i;
      var $42 = _validate_with_item($41);
      $ok = $42;
      
      var $44 = $i + 2;
      $i = $44;
      __lastLabel__ = 8;
      __label__ = 9;
      break;
     case 9:
      var $45 = __lastLabel__ == 8 ? $42 : $36;
      
      if ($45 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      if ($nch - 2 > $i) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      $0 = $ok;
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_funcdef($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_186;
      var $nch;
      var $ok;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 262);
      
      if ($5 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($nch != 5) {
        __label__ = 8;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $15 = HEAP[$tree_addr + 16] + -5;
      var $16 = HEAP[$tree_addr + 20] + 24 * $15;
      var $17 = _validate_terminal($16, 1, __str155);
      
      if ($17 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $25 = HEAP[$tree_addr + 16] + -4;
      var $26 = HEAP[$tree_addr + 20] + 24 * $25;
      var $27 = _validate_ntype($26, 1);
      
      if ($27 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $35 = HEAP[$tree_addr + 16] + -2;
      var $36 = HEAP[$tree_addr + 20] + 24 * $35;
      var $37 = _validate_terminal($36, 11, __str54);
      
      if ($37 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $45 = HEAP[$tree_addr + 16] + -3;
      var $46 = HEAP[$tree_addr + 20] + 24 * $45;
      var $47 = _validate_parameters($46);
      
      if ($47 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      var $55 = HEAP[$tree_addr + 16] + -1;
      var $56 = HEAP[$tree_addr + 20] + 24 * $55;
      var $57 = _validate_suite($56);
      
      if ($57 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      $iftmp_186 = 1;
      __label__ = 9;
      break;
     case 8:
      $iftmp_186 = 0;
      __label__ = 9;
      break;
     case 9:
      
      $ok = $iftmp_186;
      
      $0 = $ok;
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_decorated($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_189;
      var $iftmp_188;
      var $iftmp_187;
      var $nch;
      var $ok;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 261);
      
      if ($5 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($nch != 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      var $15 = HEAP[$tree_addr + 16] + -2;
      var $16 = HEAP[$tree_addr + 20] + 24 * $15;
      var $17 = _validate_decorators($16);
      
      if ($17 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $iftmp_187 = 1;
      __label__ = 5;
      break;
     case 4:
      $iftmp_187 = 0;
      __label__ = 5;
      break;
     case 5:
      
      $ok = $iftmp_187;
      
      
      
      
      
      
      var $26 = HEAP[$tree_addr + 16] + -1;
      
      
      
      
      
      var $32 = $ok == 0;
      if (HEAP[HEAP[$tree_addr + 20] + 24 * $26] == 262) {
        __label__ = 6;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 6:
      if ($32) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $39 = HEAP[$tree_addr + 16] + -1;
      var $40 = HEAP[$tree_addr + 20] + 24 * $39;
      var $41 = _validate_funcdef($40);
      
      if ($41 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      $iftmp_188 = 1;
      __label__ = 10;
      break;
     case 9:
      $iftmp_188 = 0;
      __label__ = 10;
      break;
     case 10:
      
      $ok = $iftmp_188;
      __label__ = 16;
      break;
     case 11:
      if ($32) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      
      var $50 = HEAP[$tree_addr + 16] + -1;
      var $51 = HEAP[$tree_addr + 20] + 24 * $50;
      var $52 = _validate_class($51);
      
      if ($52 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      $iftmp_189 = 1;
      __label__ = 15;
      break;
     case 14:
      $iftmp_189 = 0;
      __label__ = 15;
      break;
     case 15:
      
      $ok = $iftmp_189;
      __label__ = 16;
      break;
     case 16:
      
      $0 = $ok;
      
      $retval = $0;
      var $retval16 = $retval;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_lambdef($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_190;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 321);
      
      if ($5 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if ($nch == 3 | $nch == 4) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 2:
      
      
      
      var $14 = HEAP[$tree_addr + 20];
      var $15 = _validate_terminal($14, 1, __str156);
      
      if ($15 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      var $22 = HEAP[$tree_addr + 20] + 24 * ($nch - 2);
      var $23 = _validate_terminal($22, 11, __str54);
      
      if ($23 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      var $30 = HEAP[$tree_addr + 20] + 24 * ($nch - 1);
      var $31 = _validate_test($30);
      
      if ($31 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      $iftmp_190 = 1;
      $res = 1;
      
      
      if ($nch != 4) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $38 = HEAP[$tree_addr + 20] + 24;
      var $39 = _validate_varargslist($38);
      $res = $39;
      __label__ = 9;
      break;
     case 7:
      $iftmp_190 = 0;
      $res = 0;
      var $40 = _PyErr_Occurred();
      
      if ($40 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $43 = _validate_numnodes($tree_addr, 3, __str157);
      __label__ = 9;
      break;
     case 9:
      
      $0 = $res;
      
      $retval = $0;
      var $retval14 = $retval;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_old_lambdef($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_191;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 303);
      
      if ($5 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if ($nch == 3 | $nch == 4) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 2:
      
      
      
      var $14 = HEAP[$tree_addr + 20];
      var $15 = _validate_terminal($14, 1, __str156);
      
      if ($15 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      var $22 = HEAP[$tree_addr + 20] + 24 * ($nch - 2);
      var $23 = _validate_terminal($22, 11, __str54);
      
      if ($23 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      var $30 = HEAP[$tree_addr + 20] + 24 * ($nch - 1);
      var $31 = _validate_test($30);
      
      if ($31 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      $iftmp_191 = 1;
      $res = 1;
      
      
      if ($nch != 4) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $38 = HEAP[$tree_addr + 20] + 24;
      var $39 = _validate_varargslist($38);
      $res = $39;
      __label__ = 9;
      break;
     case 7:
      $iftmp_191 = 0;
      $res = 0;
      var $40 = _PyErr_Occurred();
      
      if ($40 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $43 = _validate_numnodes($tree_addr, 3, __str158);
      __label__ = 9;
      break;
     case 9:
      
      $0 = $res;
      
      $retval = $0;
      var $retval14 = $retval;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_arglist($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $iftmp_194;
      var $iftmp_193;
      var $iftmp_192;
      var $0;
      var $nch;
      var $i;
      var $ok;
      var $ch;
      var $sym;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      $i = 0;
      $ok = 1;
      
      
      var $6 = $nch;
      if ($nch <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $9 = _validate_numnodes($tree_addr, $6 + 1, __str159);
      $0 = $9;
      __label__ = 46;
      break;
     case 2:
      
      if ($6 > 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 3:
      $i = 0;
      __label__ = 9;
      break;
     case 4:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * $i] == 331) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      
      
      $ch = HEAP[$tree_addr + 20] + 24 * $i;
      
      
      
      
      if (HEAP[$ch + 16] == 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$ch + 20] + 24] == 336) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _err_string(__str160);
      $0 = 0;
      __label__ = 46;
      break;
     case 8:
      
      var $36 = $i + 1;
      $i = $36;
      __label__ = 9;
      break;
     case 9:
      
      
      
      if ($i < $nch) {
        __label__ = 4;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      
      
      
      
      var $44 = HEAP[$tree_addr + 20] + 24 * $i;
      var $45 = _validate_argument($44);
      
      if ($45 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      var $52 = HEAP[$tree_addr + 20] + 24 * ($i + 1);
      var $53 = _validate_terminal($52, 12, __str52);
      
      if ($53 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      $iftmp_192 = 1;
      $ok = 1;
      
      var $56 = $i + 2;
      $i = $56;
      __lastLabel__ = 12;
      __label__ = 15;
      break;
     case 13:
      $iftmp_192 = 0;
      $ok = 0;
      _PyErr_Clear();
      __label__ = 14;
      break;
     case 14:
      var $_pr = $ok;
      __lastLabel__ = 14;
      __label__ = 15;
      break;
     case 15:
      var $57 = __lastLabel__ == 14 ? $_pr : 1;
      
      if ($57 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      if ($nch - $i > 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      $ok = 1;
      
      
      
      
      if ($nch - $i > 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      
      $sym = HEAP[HEAP[$tree_addr + 20] + 24 * $i];
      
      
      if ($sym == 331) {
        __label__ = 19;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 19:
      
      
      
      
      var $81 = HEAP[$tree_addr + 20] + 24 * $i;
      var $82 = _validate_argument($81);
      $ok = $82;
      
      
      if ($ok != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 20:
      
      
      
      
      if ($i + 1 != $nch) {
        __label__ = 21;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 21:
      _err_string(__str161);
      $ok = 0;
      __label__ = 45;
      break;
     case 22:
      
      
      if ($sym == 16) {
        __label__ = 23;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 23:
      
      
      
      
      var $95 = HEAP[$tree_addr + 20] + 24 * $i;
      var $96 = _validate_terminal($95, 16, __str162);
      $ok = $96;
      
      
      if ($ok == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      if ($nch - $i != 2) {
        __label__ = 26;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      var $108 = HEAP[$tree_addr + 20] + 24 * ($i + 1);
      var $109 = _validate_test($108);
      $ok = $109;
      __label__ = 45;
      break;
     case 26:
      
      
      if ($ok == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      if ($nch - $i != 5) {
        __label__ = 35;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      
      
      var $120 = HEAP[$tree_addr + 20] + 24 * ($i + 1);
      var $121 = _validate_test($120);
      
      if ($121 == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      
      
      var $128 = HEAP[$tree_addr + 20] + 24 * ($i + 2);
      var $129 = _validate_terminal($128, 12, __str52);
      
      if ($129 == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      
      
      var $136 = HEAP[$tree_addr + 20] + 24 * ($i + 3);
      var $137 = _validate_terminal($136, 36, __str67);
      
      if ($137 == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      
      
      
      var $144 = HEAP[$tree_addr + 20] + 24 * ($i + 4);
      var $145 = _validate_test($144);
      
      if ($145 == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      $iftmp_193 = 1;
      __label__ = 34;
      break;
     case 33:
      $iftmp_193 = 0;
      __label__ = 34;
      break;
     case 34:
      
      $ok = $iftmp_193;
      __label__ = 45;
      break;
     case 35:
      _err_string(__str163);
      $ok = 0;
      __label__ = 45;
      break;
     case 36:
      
      
      if ($sym == 36) {
        __label__ = 37;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 37:
      
      
      
      
      if ($nch - $i == 2) {
        __label__ = 38;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 38:
      
      
      
      
      var $158 = HEAP[$tree_addr + 20] + 24 * $i;
      var $159 = _validate_terminal($158, 36, __str67);
      
      if ($159 == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      
      
      
      
      var $166 = HEAP[$tree_addr + 20] + 24 * ($i + 1);
      var $167 = _validate_test($166);
      
      if ($167 == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      $iftmp_194 = 1;
      __label__ = 42;
      break;
     case 41:
      $iftmp_194 = 0;
      __label__ = 42;
      break;
     case 42:
      
      $ok = $iftmp_194;
      __label__ = 45;
      break;
     case 43:
      _err_string(__str164);
      $ok = 0;
      __label__ = 45;
      break;
     case 44:
      _err_string(__str165);
      $ok = 0;
      __label__ = 45;
      break;
     case 45:
      
      $0 = $ok;
      __label__ = 46;
      break;
     case 46:
      
      $retval = $0;
      var $retval52 = $retval;
      return $retval52;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_argument($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_196;
      var $iftmp_195;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 331);
      
      if ($5 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      if ($nch == 1 | $nch == 2 | $nch == 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      var $16 = HEAP[$tree_addr + 20];
      var $17 = _validate_test($16);
      
      if ($17 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $iftmp_195 = 1;
      $res = 1;
      
      
      if ($nch != 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $24 = HEAP[$tree_addr + 20] + 24;
      var $25 = _validate_comp_for($24);
      $res = $25;
      __label__ = 12;
      break;
     case 5:
      $iftmp_195 = 0;
      $res = 0;
      __label__ = 12;
      break;
     case 6:
      
      
      if ($nch == 3) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      
      
      
      var $31 = HEAP[$tree_addr + 20] + 24;
      var $32 = _validate_terminal($31, 22, __str70);
      
      if ($32 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      var $37 = HEAP[$tree_addr + 20] + 48;
      var $38 = _validate_test($37);
      
      if ($38 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      $iftmp_196 = 1;
      __label__ = 11;
      break;
     case 10:
      $iftmp_196 = 0;
      __label__ = 11;
      break;
     case 11:
      
      $res = $iftmp_196;
      __label__ = 12;
      break;
     case 12:
      
      $0 = $res;
      
      $retval = $0;
      var $retval17 = $retval;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_trailer($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_199;
      var $iftmp_198;
      var $iftmp_197;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 322);
      
      if ($5 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if ($nch == 2 | $nch == 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 2:
      $iftmp_197 = 1;
      $res = 1;
      
      
      
      
      
      
      var $17 = HEAP[HEAP[$tree_addr + 20]];
      if ($17 == 7) {
        __label__ = 3;
        break;
      } else if ($17 == 9) {
        __label__ = 6;
        break;
      } else if ($17 == 23) {
        __label__ = 12;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 3:
      
      
      
      
      
      var $23 = HEAP[$tree_addr + 20] + 24 * ($nch - 1);
      var $24 = _validate_terminal($23, 8, __str56);
      $res = $24;
      
      
      if ($res != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 4:
      
      
      if ($nch == 3) {
        __label__ = 5;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 5:
      
      
      
      var $32 = HEAP[$tree_addr + 20] + 24;
      var $33 = _validate_arglist($32);
      $res = $33;
      __label__ = 19;
      break;
     case 6:
      
      var $35 = _validate_numnodes($tree_addr, 3, __str166);
      
      if ($35 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $40 = HEAP[$tree_addr + 20] + 24;
      var $41 = _validate_subscriptlist($40);
      
      if ($41 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      var $46 = HEAP[$tree_addr + 20] + 48;
      var $47 = _validate_ntype($46, 10);
      
      if ($47 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      $iftmp_198 = 1;
      __label__ = 11;
      break;
     case 10:
      $iftmp_198 = 0;
      __label__ = 11;
      break;
     case 11:
      
      $res = $iftmp_198;
      __label__ = 19;
      break;
     case 12:
      
      var $51 = _validate_numnodes($tree_addr, 2, __str166);
      
      if ($51 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $56 = HEAP[$tree_addr + 20] + 24;
      var $57 = _validate_ntype($56, 1);
      
      if ($57 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      $iftmp_199 = 1;
      __label__ = 16;
      break;
     case 15:
      $iftmp_199 = 0;
      __label__ = 16;
      break;
     case 16:
      
      $res = $iftmp_199;
      __label__ = 19;
      break;
     case 17:
      $res = 0;
      __label__ = 19;
      break;
     case 18:
      $iftmp_197 = 0;
      $res = 0;
      
      var $61 = _validate_numnodes($tree_addr, 2, __str166);
      __label__ = 19;
      break;
     case 19:
      
      $0 = $res;
      
      $retval = $0;
      var $retval25 = $retval;
      return $retval25;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_subscriptlist($tree) {
    
    var $tree_addr;
    var $retval;
    var $0;
    $tree_addr = $tree;
    
    var $2 = _validate_repeating_list($tree_addr, 323, FUNCTION_TABLE_OFFSET + 20, __str167);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _validate_subscript($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $iftmp_201;
      var $0;
      var $iftmp_200;
      var $offset;
      var $nch;
      var $res;
      var $rem;
      $tree_addr = $tree;
      $offset = 0;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 324);
      
      if ($5 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if ($nch <= 0 | $nch > 4) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      $iftmp_200 = 0;
      $res = 0;
      var $11 = _PyErr_Occurred();
      
      if ($11 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _err_string(__str168);
      __label__ = 4;
      break;
     case 4:
      $0 = 0;
      __label__ = 33;
      break;
     case 5:
      $iftmp_200 = 1;
      $res = 1;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20]] == 23) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 6:
      
      var $21 = _validate_numnodes($tree_addr, 3, __str169);
      
      if ($21 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $26 = HEAP[$tree_addr + 20];
      var $27 = _validate_terminal($26, 23, __str114);
      
      if ($27 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      var $32 = HEAP[$tree_addr + 20] + 24;
      var $33 = _validate_terminal($32, 23, __str114);
      
      if ($33 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      var $38 = HEAP[$tree_addr + 20] + 48;
      var $39 = _validate_terminal($38, 23, __str114);
      
      if ($39 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      $iftmp_201 = 1;
      __label__ = 12;
      break;
     case 11:
      $iftmp_201 = 0;
      __label__ = 12;
      break;
     case 12:
      
      $0 = $iftmp_201;
      __label__ = 33;
      break;
     case 13:
      
      
      
      
      
      
      
      var $49 = HEAP[HEAP[$tree_addr + 20]];
      if ($nch == 1) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      
      
      
      
      var $54 = HEAP[$tree_addr + 20];
      if ($49 == 304) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $55 = _validate_test($54);
      $res = $55;
      __label__ = 17;
      break;
     case 16:
      var $56 = _validate_terminal($54, 11, __str54);
      $res = $56;
      __label__ = 17;
      break;
     case 17:
      
      $0 = $res;
      __label__ = 33;
      break;
     case 18:
      
      if ($49 != 11) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      if ($nch == 4) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      var $64 = HEAP[$tree_addr + 20];
      var $65 = _validate_test($64);
      $res = $65;
      $offset = 1;
      __lastLabel__ = 20;
      __label__ = 22;
      break;
     case 21:
      var $_pr = $res;
      __lastLabel__ = 21;
      __label__ = 22;
      break;
     case 22:
      var $66 = __lastLabel__ == 21 ? $_pr : $65;
      
      if ($66 != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $72 = HEAP[$tree_addr + 20] + 24 * $offset;
      var $73 = _validate_terminal($72, 11, __str54);
      $res = $73;
      __lastLabel__ = 23;
      __label__ = 25;
      break;
     case 24:
      var $_pr2 = $res;
      __lastLabel__ = 24;
      __label__ = 25;
      break;
     case 25:
      var $74 = __lastLabel__ == 24 ? $_pr2 : $73;
      
      if ($74 != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 26:
      
      var $77 = $offset + 1;
      $offset = $77;
      
      
      
      $rem = $nch - $offset;
      
      
      if ($rem != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 27:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24 * $offset] == 304) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $95 = HEAP[$tree_addr + 20] + 24 * $offset;
      var $96 = _validate_test($95);
      $res = $96;
      
      var $98 = $offset + 1;
      $offset = $98;
      
      var $100 = $rem - 1;
      $rem = $100;
      __label__ = 29;
      break;
     case 29:
      
      
      if ($res != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      
      
      if ($rem != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $109 = HEAP[$tree_addr + 20] + 24 * $offset;
      var $110 = _validate_sliceop($109);
      $res = $110;
      __label__ = 32;
      break;
     case 32:
      
      $0 = $res;
      __label__ = 33;
      break;
     case 33:
      
      $retval = $0;
      var $retval35 = $retval;
      return $retval35;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_sliceop($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_202;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      
      if ($nch == 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = _validate_numnodes($tree_addr, 2, __str170);
      
      if ($7 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      var $10 = _validate_ntype($tree_addr, 325);
      
      if ($10 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $iftmp_202 = 1;
      $res = 1;
      __label__ = 8;
      break;
     case 4:
      $iftmp_202 = 0;
      $res = 0;
      var $12 = _PyErr_Occurred();
      
      if ($12 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $15 = _validate_numnodes($tree_addr, 1, __str170);
      $res = $15;
      __lastLabel__ = 5;
      __label__ = 7;
      break;
     case 6:
      var $_pr = $res;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $16 = __lastLabel__ == 6 ? $_pr : $15;
      
      if ($16 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      var $21 = HEAP[$tree_addr + 20];
      var $22 = _validate_terminal($21, 11, __str54);
      $res = $22;
      __lastLabel__ = 8;
      __label__ = 10;
      break;
     case 9:
      var $_pr1 = $res;
      __lastLabel__ = 9;
      __label__ = 10;
      break;
     case 10:
      var $23 = __lastLabel__ == 9 ? $_pr1 : $22;
      
      if ($23 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      if ($nch == 2) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      var $30 = HEAP[$tree_addr + 20] + 24;
      var $31 = _validate_test($30);
      $res = $31;
      __label__ = 13;
      break;
     case 13:
      
      $0 = $res;
      
      $retval = $0;
      var $retval13 = $retval;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_exprlist($tree) {
    
    var $tree_addr;
    var $retval;
    var $0;
    $tree_addr = $tree;
    
    var $2 = _validate_repeating_list($tree_addr, 326, FUNCTION_TABLE_OFFSET + 22, __str171);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _validate_dictorsetmaker($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_207;
      var $iftmp_206;
      var $iftmp_205;
      var $iftmp_204;
      var $iftmp_203;
      var $nch;
      var $ok;
      var $i;
      var $check_trailing_comma;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 328);
      $ok = $5;
      $i = 0;
      $check_trailing_comma = 0;
      
      
      if ($nch <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str172, __str173, 2987, ___PRETTY_FUNCTION___13794);
      throw "Reached an unreachable!";
     case 2:
      
      
      if ($ok == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if ($nch == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24] == 12) {
        __label__ = 5;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 5:
      
      
      
      
      var $23 = HEAP[$tree_addr + 20] + 24 * $i;
      
      var $25 = $i + 1;
      $i = $25;
      var $26 = _validate_test($23);
      $ok = $26;
      __lastLabel__ = 5;
      __label__ = 11;
      break;
     case 6:
      
      
      
      
      var $31 = HEAP[$tree_addr + 20] + 24 * $i;
      var $32 = _validate_terminal($31, 12, __str52);
      
      if ($32 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      var $39 = HEAP[$tree_addr + 20] + 24 * ($i + 1);
      var $40 = _validate_test($39);
      
      if ($40 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      $iftmp_203 = 1;
      __label__ = 10;
      break;
     case 9:
      $iftmp_203 = 0;
      __label__ = 10;
      break;
     case 10:
      var $42 = $iftmp_203;
      $ok = $42;
      
      var $44 = $i + 2;
      $i = $44;
      __lastLabel__ = 10;
      __label__ = 11;
      break;
     case 11:
      var $45 = __lastLabel__ == 10 ? $42 : $26;
      
      if ($45 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      if ($nch - $i > 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      $check_trailing_comma = 1;
      __label__ = 50;
      break;
     case 14:
      
      
      if ($ok == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 24] != 336) {
        __label__ = 21;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      var $62 = HEAP[$tree_addr + 20];
      var $63 = _validate_test($62);
      
      if ($63 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      var $68 = HEAP[$tree_addr + 20] + 24;
      var $69 = _validate_comp_for($68);
      
      if ($69 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      $iftmp_204 = 1;
      __label__ = 20;
      break;
     case 19:
      $iftmp_204 = 0;
      __label__ = 20;
      break;
     case 20:
      var $71 = $iftmp_204;
      $ok = $71;
      __lastLabel__ = 20;
      __label__ = 51;
      break;
     case 21:
      
      
      if ($ok == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      if (HEAP[$tree_addr + 16] <= 3) {
        __label__ = 31;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20] + 72] != 336) {
        __label__ = 31;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      var $87 = HEAP[$tree_addr + 20];
      var $88 = _validate_test($87);
      
      if ($88 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      var $93 = HEAP[$tree_addr + 20] + 24;
      var $94 = _validate_terminal($93, 11, __str54);
      
      if ($94 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      var $99 = HEAP[$tree_addr + 20] + 48;
      var $100 = _validate_test($99);
      
      if ($100 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      var $105 = HEAP[$tree_addr + 20] + 72;
      var $106 = _validate_comp_for($105);
      
      if ($106 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      $iftmp_205 = 1;
      __label__ = 30;
      break;
     case 29:
      $iftmp_205 = 0;
      __label__ = 30;
      break;
     case 30:
      var $108 = $iftmp_205;
      $ok = $108;
      __lastLabel__ = 30;
      __label__ = 51;
      break;
     case 31:
      
      
      if ($ok != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 32:
      
      
      if ($nch > 2) {
        __label__ = 33;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 33:
      
      
      
      
      var $116 = HEAP[$tree_addr + 20] + 24 * $i;
      var $117 = _validate_test($116);
      
      if ($117 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      
      
      var $124 = HEAP[$tree_addr + 20] + 24 * ($i + 1);
      var $125 = _validate_terminal($124, 11, __str54);
      
      if ($125 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      
      
      
      var $132 = HEAP[$tree_addr + 20] + 24 * ($i + 2);
      var $133 = _validate_test($132);
      
      if ($133 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      $iftmp_206 = 1;
      __label__ = 38;
      break;
     case 37:
      $iftmp_206 = 0;
      __label__ = 38;
      break;
     case 38:
      var $135 = $iftmp_206;
      $ok = $135;
      
      var $137 = $i + 3;
      $i = $137;
      __lastLabel__ = 38;
      __label__ = 47;
      break;
     case 39:
      $ok = 0;
      _err_string(__str174);
      var $_pr3 = $ok;
      __lastLabel__ = 39;
      __label__ = 47;
      break;
     case 40:
      
      
      
      
      var $142 = HEAP[$tree_addr + 20] + 24 * $i;
      var $143 = _validate_terminal($142, 12, __str52);
      
      if ($143 == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 41:
      
      
      
      
      
      var $150 = HEAP[$tree_addr + 20] + 24 * ($i + 1);
      var $151 = _validate_test($150);
      
      if ($151 == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      
      
      
      
      
      var $158 = HEAP[$tree_addr + 20] + 24 * ($i + 2);
      var $159 = _validate_terminal($158, 11, __str54);
      
      if ($159 == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      
      
      
      
      
      var $166 = HEAP[$tree_addr + 20] + 24 * ($i + 3);
      var $167 = _validate_test($166);
      
      if ($167 == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      $iftmp_207 = 1;
      __label__ = 46;
      break;
     case 45:
      $iftmp_207 = 0;
      __label__ = 46;
      break;
     case 46:
      var $169 = $iftmp_207;
      $ok = $169;
      
      var $171 = $i + 4;
      $i = $171;
      __lastLabel__ = 46;
      __label__ = 47;
      break;
     case 47:
      var $172 = __lastLabel__ == 46 ? $169 : __lastLabel__ == 38 ? $135 : $_pr3;
      
      if ($172 == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      
      
      
      
      if ($nch - $i > 3) {
        __label__ = 40;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 49:
      $check_trailing_comma = 1;
      __label__ = 50;
      break;
     case 50:
      var $_pr4 = $ok;
      __lastLabel__ = 50;
      __label__ = 51;
      break;
     case 51:
      var $178 = __lastLabel__ == 50 ? $_pr4 : __lastLabel__ == 30 ? $108 : $71;
      
      if ($178 != 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 52:
      
      
      if ($check_trailing_comma != 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 53:
      
      
      
      
      if ($nch - 1 == $i) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      
      
      
      
      var $190 = HEAP[$tree_addr + 20] + 24 * $i;
      var $191 = _validate_terminal($190, 12, __str52);
      $ok = $191;
      __label__ = 57;
      break;
     case 55:
      
      
      
      if ($i != $nch) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      $ok = 0;
      _err_string(__str175);
      __label__ = 57;
      break;
     case 57:
      
      $0 = $ok;
      
      $retval = $0;
      var $retval57 = $retval;
      return $retval57;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_eval_input($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_208;
      var $pos;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      var $5 = _validate_ntype($tree_addr, 258);
      
      if ($5 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($nch <= 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $12 = HEAP[$tree_addr + 20];
      var $13 = _validate_testlist($12);
      
      if ($13 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      var $20 = HEAP[$tree_addr + 20] + 24 * ($nch - 1);
      var $21 = _validate_ntype($20, 0);
      
      if ($21 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      $iftmp_208 = 1;
      __label__ = 6;
      break;
     case 5:
      $iftmp_208 = 0;
      __label__ = 6;
      break;
     case 6:
      var $23 = $iftmp_208;
      $res = $23;
      $pos = 1;
      __lastLabel__ = 6;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      var $28 = HEAP[$tree_addr + 20] + 24 * $pos;
      var $29 = _validate_ntype($28, 4);
      $res = $29;
      
      var $31 = $pos + 1;
      $pos = $31;
      __lastLabel__ = 7;
      __label__ = 8;
      break;
     case 8:
      var $32 = __lastLabel__ == 7 ? $29 : $23;
      
      if ($32 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      if ($nch - 1 > $pos) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      $0 = $res;
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_node($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_212;
      var $iftmp_211;
      var $iftmp_210;
      var $iftmp_209;
      var $nch;
      var $res;
      var $next;
      $tree_addr = $tree;
      $nch = 0;
      $res = 1;
      $next = 0;
      __lastLabel__ = -1;
      __label__ = 71;
      break;
     case 1:
      
      
      
      $nch = HEAP[$tree_addr + 16];
      $next = 0;
      
      
      
      var $7 = HEAP[$tree_addr];
      if ($7 == 261) {
        __label__ = 5;
        break;
      } else if ($7 == 262) {
        __label__ = 2;
        break;
      } else if ($7 == 267) {
        __label__ = 6;
        break;
      } else if ($7 == 268) {
        __label__ = 18;
        break;
      } else if ($7 == 269) {
        __label__ = 7;
        break;
      } else if ($7 == 270) {
        __label__ = 20;
        break;
      } else if ($7 == 272) {
        __label__ = 21;
        break;
      } else if ($7 == 273) {
        __label__ = 22;
        break;
      } else if ($7 == 274) {
        __label__ = 23;
        break;
      } else if ($7 == 275) {
        __label__ = 8;
        break;
      } else if ($7 == 276) {
        __label__ = 28;
        break;
      } else if ($7 == 277) {
        __label__ = 33;
        break;
      } else if ($7 == 278) {
        __label__ = 38;
        break;
      } else if ($7 == 279) {
        __label__ = 17;
        break;
      } else if ($7 == 280) {
        __label__ = 39;
        break;
      } else if ($7 == 281) {
        __label__ = 40;
        break;
      } else if ($7 == 282) {
        __label__ = 41;
        break;
      } else if ($7 == 283) {
        __label__ = 42;
        break;
      } else if ($7 == 289) {
        __label__ = 43;
        break;
      } else if ($7 == 290) {
        __label__ = 44;
        break;
      } else if ($7 == 291) {
        __label__ = 45;
        break;
      } else if ($7 == 292) {
        __label__ = 19;
        break;
      } else if ($7 == 293) {
        __label__ = 46;
        break;
      } else if ($7 == 294) {
        __label__ = 47;
        break;
      } else if ($7 == 295) {
        __label__ = 48;
        break;
      } else if ($7 == 296) {
        __label__ = 49;
        break;
      } else if ($7 == 297) {
        __label__ = 3;
        break;
      } else if ($7 == 300) {
        __label__ = 50;
        break;
      } else if ($7 == 304) {
        __label__ = 54;
        break;
      } else if ($7 == 306) {
        __label__ = 55;
        break;
      } else if ($7 == 307) {
        __label__ = 56;
        break;
      } else if ($7 == 308) {
        __label__ = 57;
        break;
      } else if ($7 == 309) {
        __label__ = 59;
        break;
      } else if ($7 == 310) {
        __label__ = 60;
        break;
      } else if ($7 == 311) {
        __label__ = 61;
        break;
      } else if ($7 == 312) {
        __label__ = 62;
        break;
      } else if ($7 == 313) {
        __label__ = 63;
        break;
      } else if ($7 == 314) {
        __label__ = 64;
        break;
      } else if ($7 == 315) {
        __label__ = 65;
        break;
      } else if ($7 == 316) {
        __label__ = 66;
        break;
      } else if ($7 == 317) {
        __label__ = 67;
        break;
      } else if ($7 == 318) {
        __label__ = 68;
        break;
      } else if ($7 == 326) {
        __label__ = 58;
        break;
      } else if ($7 == 327) {
        __label__ = 51;
        break;
      } else if ($7 == 329) {
        __label__ = 4;
        break;
      } else if ($7 == 338) {
        __label__ = 53;
        break;
      } else if ($7 == 340) {
        __label__ = 52;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 2:
      
      var $9 = _validate_funcdef($tree_addr);
      $res = $9;
      __label__ = 70;
      break;
     case 3:
      
      var $11 = _validate_with_stmt($tree_addr);
      $res = $11;
      __label__ = 70;
      break;
     case 4:
      
      var $13 = _validate_class($tree_addr);
      $res = $13;
      __label__ = 70;
      break;
     case 5:
      
      var $15 = _validate_decorated($tree_addr);
      $res = $15;
      __label__ = 70;
      break;
     case 6:
      
      var $17 = _validate_stmt($tree_addr);
      $res = $17;
      __label__ = 70;
      break;
     case 7:
      
      var $19 = _validate_small_stmt($tree_addr);
      $res = $19;
      __label__ = 70;
      break;
     case 8:
      
      var $21 = _validate_numnodes($tree_addr, 1, __str176);
      
      if ($21 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20]] == 276) {
        __label__ = 14;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20]] == 277) {
        __label__ = 14;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20]] == 279) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20]] == 278) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$tree_addr + 20]] == 280) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $iftmp_209 = 1;
      $res = 1;
      
      
      
      
      $next = HEAP[$tree_addr + 20];
      __label__ = 70;
      break;
     case 15:
      $iftmp_209 = 0;
      $res = 0;
      
      
      if ($nch == 1) {
        __label__ = 16;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 16:
      _err_string(__str177);
      __label__ = 70;
      break;
     case 17:
      
      var $65 = _validate_yield_stmt($tree_addr);
      $res = $65;
      __label__ = 70;
      break;
     case 18:
      
      var $67 = _validate_simple_stmt($tree_addr);
      $res = $67;
      __label__ = 70;
      break;
     case 19:
      
      var $69 = _validate_compound_stmt($tree_addr);
      $res = $69;
      __label__ = 70;
      break;
     case 20:
      
      var $71 = _validate_expr_stmt($tree_addr);
      $res = $71;
      __label__ = 70;
      break;
     case 21:
      
      var $73 = _validate_print_stmt($tree_addr);
      $res = $73;
      __label__ = 70;
      break;
     case 22:
      
      var $75 = _validate_del_stmt($tree_addr);
      $res = $75;
      __label__ = 70;
      break;
     case 23:
      
      var $77 = _validate_numnodes($tree_addr, 1, __str178);
      
      if ($77 == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      var $82 = HEAP[$tree_addr + 20];
      var $83 = _validate_terminal($82, 1, __str178);
      
      if ($83 == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      $iftmp_210 = 1;
      __label__ = 27;
      break;
     case 26:
      $iftmp_210 = 0;
      __label__ = 27;
      break;
     case 27:
      
      $res = $iftmp_210;
      __label__ = 70;
      break;
     case 28:
      
      var $87 = _validate_numnodes($tree_addr, 1, __str179);
      
      if ($87 == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      var $92 = HEAP[$tree_addr + 20];
      var $93 = _validate_terminal($92, 1, __str179);
      
      if ($93 == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      $iftmp_211 = 1;
      __label__ = 32;
      break;
     case 31:
      $iftmp_211 = 0;
      __label__ = 32;
      break;
     case 32:
      
      $res = $iftmp_211;
      __label__ = 70;
      break;
     case 33:
      
      var $97 = _validate_numnodes($tree_addr, 1, __str180);
      
      if ($97 == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      var $102 = HEAP[$tree_addr + 20];
      var $103 = _validate_terminal($102, 1, __str180);
      
      if ($103 == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      $iftmp_212 = 1;
      __label__ = 37;
      break;
     case 36:
      $iftmp_212 = 0;
      __label__ = 37;
      break;
     case 37:
      
      $res = $iftmp_212;
      __label__ = 70;
      break;
     case 38:
      
      var $107 = _validate_return_stmt($tree_addr);
      $res = $107;
      __label__ = 70;
      break;
     case 39:
      
      var $109 = _validate_raise_stmt($tree_addr);
      $res = $109;
      __label__ = 70;
      break;
     case 40:
      
      var $111 = _validate_import_stmt($tree_addr);
      $res = $111;
      __label__ = 70;
      break;
     case 41:
      
      var $113 = _validate_import_name($tree_addr);
      $res = $113;
      __label__ = 70;
      break;
     case 42:
      
      var $115 = _validate_import_from($tree_addr);
      $res = $115;
      __label__ = 70;
      break;
     case 43:
      
      var $117 = _validate_global_stmt($tree_addr);
      $res = $117;
      __label__ = 70;
      break;
     case 44:
      
      var $119 = _validate_exec_stmt($tree_addr);
      $res = $119;
      __label__ = 70;
      break;
     case 45:
      
      var $121 = _validate_assert_stmt($tree_addr);
      $res = $121;
      __label__ = 70;
      break;
     case 46:
      
      var $123 = _validate_if($tree_addr);
      $res = $123;
      __label__ = 70;
      break;
     case 47:
      
      var $125 = _validate_while($tree_addr);
      $res = $125;
      __label__ = 70;
      break;
     case 48:
      
      var $127 = _validate_for($tree_addr);
      $res = $127;
      __label__ = 70;
      break;
     case 49:
      
      var $129 = _validate_try($tree_addr);
      $res = $129;
      __label__ = 70;
      break;
     case 50:
      
      var $131 = _validate_suite($tree_addr);
      $res = $131;
      __label__ = 70;
      break;
     case 51:
      
      var $133 = _validate_testlist($tree_addr);
      $res = $133;
      __label__ = 70;
      break;
     case 52:
      
      var $135 = _validate_yield_expr($tree_addr);
      $res = $135;
      __label__ = 70;
      break;
     case 53:
      
      var $137 = _validate_testlist1($tree_addr);
      $res = $137;
      __label__ = 70;
      break;
     case 54:
      
      var $139 = _validate_test($tree_addr);
      $res = $139;
      __label__ = 70;
      break;
     case 55:
      
      var $141 = _validate_and_test($tree_addr);
      $res = $141;
      __label__ = 70;
      break;
     case 56:
      
      var $143 = _validate_not_test($tree_addr);
      $res = $143;
      __label__ = 70;
      break;
     case 57:
      
      var $145 = _validate_comparison($tree_addr);
      $res = $145;
      __label__ = 70;
      break;
     case 58:
      
      var $147 = _validate_exprlist($tree_addr);
      $res = $147;
      __label__ = 70;
      break;
     case 59:
      
      var $149 = _validate_comp_op($tree_addr);
      $res = $149;
      __label__ = 70;
      break;
     case 60:
      
      var $151 = _validate_expr($tree_addr);
      $res = $151;
      __label__ = 70;
      break;
     case 61:
      
      var $153 = _validate_xor_expr($tree_addr);
      $res = $153;
      __label__ = 70;
      break;
     case 62:
      
      var $155 = _validate_and_expr($tree_addr);
      $res = $155;
      __label__ = 70;
      break;
     case 63:
      
      var $157 = _validate_shift_expr($tree_addr);
      $res = $157;
      __label__ = 70;
      break;
     case 64:
      
      var $159 = _validate_arith_expr($tree_addr);
      $res = $159;
      __label__ = 70;
      break;
     case 65:
      
      var $161 = _validate_term($tree_addr);
      $res = $161;
      __label__ = 70;
      break;
     case 66:
      
      var $163 = _validate_factor($tree_addr);
      $res = $163;
      __label__ = 70;
      break;
     case 67:
      
      var $165 = _validate_power($tree_addr);
      $res = $165;
      __label__ = 70;
      break;
     case 68:
      
      var $167 = _validate_atom($tree_addr);
      $res = $167;
      __label__ = 70;
      break;
     case 69:
      _err_string(__str181);
      $res = 0;
      __label__ = 70;
      break;
     case 70:
      
      $tree_addr = $next;
      var $_pr = $res;
      __lastLabel__ = 70;
      __label__ = 71;
      break;
     case 71:
      var $169 = __lastLabel__ == 70 ? $_pr : 1;
      
      if ($169 == 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 72:
      
      
      if ($tree_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 73:
      
      $0 = $res;
      
      $retval = $0;
      var $retval77 = $retval;
      return $retval77;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_expr_tree($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $res;
      $tree_addr = $tree;
      
      var $2 = _validate_eval_input($tree_addr);
      $res = $2;
      
      
      if ($res == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      _err_string(__str182);
      __label__ = 3;
      break;
     case 3:
      
      $0 = $res;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_file_input($tree) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_213;
      var $j;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      
      $nch = HEAP[$tree_addr + 16] - 1;
      
      
      if ($nch < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      var $11 = HEAP[$tree_addr + 20] + 24 * $nch;
      var $12 = _validate_ntype($11, 0);
      
      if ($12 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      $iftmp_213 = 1;
      __label__ = 4;
      break;
     case 3:
      $iftmp_213 = 0;
      __label__ = 4;
      break;
     case 4:
      var $14 = $iftmp_213;
      $res = $14;
      $j = 0;
      __lastLabel__ = 4;
      __label__ = 9;
      break;
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      
      var $27 = HEAP[$tree_addr + 20] + 24 * $j;
      if (HEAP[HEAP[$tree_addr + 20] + 24 * $j] == 267) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $28 = _validate_stmt($27);
      $res = $28;
      __label__ = 8;
      break;
     case 7:
      var $29 = _validate_terminal($27, 4, 0);
      $res = $29;
      __label__ = 8;
      break;
     case 8:
      
      var $31 = $j + 1;
      $j = $31;
      var $_pr = $res;
      __lastLabel__ = 8;
      __label__ = 9;
      break;
     case 9:
      var $32 = __lastLabel__ == 8 ? $_pr : $14;
      
      if ($32 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      if ($j < $nch) {
        __label__ = 5;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      if ($res == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      var $39 = _PyErr_Occurred();
      
      if ($39 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      _err_string(__str183);
      __label__ = 14;
      break;
     case 14:
      
      $0 = $res;
      
      $retval = $0;
      var $retval14 = $retval;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _validate_encoding_decl($tree) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tree_addr;
      var $retval;
      var $0;
      var $iftmp_214;
      var $nch;
      var $res;
      $tree_addr = $tree;
      
      
      
      $nch = HEAP[$tree_addr + 16];
      
      
      if ($nch != 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[$tree_addr + 20];
      var $10 = _validate_file_input($9);
      
      if ($10 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      $iftmp_214 = 1;
      $res = 1;
      __label__ = 5;
      break;
     case 3:
      $iftmp_214 = 0;
      $res = 0;
      var $12 = _PyErr_Occurred();
      
      if ($12 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      _err_string(__str184);
      __label__ = 5;
      break;
     case 5:
      
      $0 = $res;
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parser__pickler($self, $args) {
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
      var $result;
      var $st = __stackBase__;
      var $empty_dict;
      var $newargs;
      var $tuple;
      $self_addr = $self;
      $args_addr = $args;
      $result = 0;
      HEAP[$st] = 0;
      $empty_dict = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str185, allocate([ _PyST_Type, 0, 0, 0, $st, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      var $4 = _PyDict_New();
      $empty_dict = $4;
      
      
      if ($empty_dict == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $7 = HEAP[$st];
      var $8 = _Py_BuildValue(__str186, allocate([ $7, 0, 0, 0, 1, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $newargs = $8;
      
      
      if ($newargs == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $13 = _parser_st2tuple(0, $newargs, $empty_dict);
      $tuple = $13;
      
      
      if ($tuple != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $16 = HEAP[_pickle_constructor];
      
      var $18 = _Py_BuildValue(__str187, allocate([ $16, 0, 0, 0, $tuple, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $result = $18;
      
      
      
      var $22 = HEAP[$tuple] - 1;
      
      
      HEAP[$tuple] = $22;
      
      
      
      
      if (HEAP[$tuple] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $33 = HEAP[HEAP[$tuple + 4] + 24];
      
      FUNCTION_TABLE[$33]($tuple);
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $38 = HEAP[$empty_dict] - 1;
      
      
      HEAP[$empty_dict] = $38;
      
      
      
      
      if (HEAP[$empty_dict] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $49 = HEAP[HEAP[$empty_dict + 4] + 24];
      
      FUNCTION_TABLE[$49]($empty_dict);
      __label__ = 8;
      break;
     case 8:
      
      
      
      var $54 = HEAP[$newargs] - 1;
      
      
      HEAP[$newargs] = $54;
      
      
      
      
      if (HEAP[$newargs] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $65 = HEAP[HEAP[$newargs + 4] + 24];
      
      FUNCTION_TABLE[$65]($newargs);
      __label__ = 10;
      break;
     case 10:
      
      
      if ($empty_dict != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      
      var $71 = HEAP[$empty_dict] - 1;
      
      
      HEAP[$empty_dict] = $71;
      
      
      
      
      if (HEAP[$empty_dict] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $82 = HEAP[HEAP[$empty_dict + 4] + 24];
      
      FUNCTION_TABLE[$82]($empty_dict);
      __label__ = 13;
      break;
     case 13:
      
      $0 = $result;
      
      $retval = $0;
      var $retval12 = $retval;
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initparser() {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $module;
      var $copyreg;
      var $func;
      var $pickler;
      var $res;
      HEAP[_PyST_Type + 4] = _PyType_Type;
      var $0 = _Py_InitModule4(__str209, _parser_functions, 0, 0, 1013);
      $module = $0;
      
      
      if ($module == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[_parser_error] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $5 = _PyErr_NewException(__str210, 0, 0);
      HEAP[_parser_error] = $5;
      
      if ($5 == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $10 = HEAP[HEAP[_parser_error]] + 1;
      var $11 = HEAP[_parser_error];
      HEAP[$11] = $10;
      var $12 = HEAP[_parser_error];
      
      var $14 = _PyModule_AddObject($module, __str211, $12);
      
      if ($14 != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $17 = HEAP[_PyST_Type] + 1;
      HEAP[_PyST_Type] = $17;
      
      var $19 = _PyModule_AddObject($module, __str212, _PyST_Type);
      
      var $21 = HEAP[_PyST_Type] + 1;
      HEAP[_PyST_Type] = $21;
      
      var $23 = _PyModule_AddObject($module, __str213, _PyST_Type);
      
      var $25 = _PyModule_AddStringConstant($module, __str214, _parser_copyright_string);
      
      var $27 = _PyModule_AddStringConstant($module, __str215, _parser_doc_string);
      
      var $29 = _PyModule_AddStringConstant($module, __str216, _parser_version_string);
      var $30 = _PyImport_ImportModuleNoBlock(__str217);
      $copyreg = $30;
      
      
      if ($copyreg != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 5:
      
      var $34 = _PyObject_GetAttrString($copyreg, __str218);
      $func = $34;
      
      var $36 = _PyObject_GetAttrString($module, __str202);
      HEAP[_pickle_constructor] = $36;
      
      var $38 = _PyObject_GetAttrString($module, __str207);
      $pickler = $38;
      
      
      if (HEAP[_pickle_constructor] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $44 = HEAP[HEAP[_pickle_constructor]] + 1;
      var $45 = HEAP[_pickle_constructor];
      HEAP[$45] = $44;
      __label__ = 7;
      break;
     case 7:
      var $46 = $func;
      
      
      
      
      if ($46 != 0 & HEAP[_pickle_constructor] != 0) {
        __lastLabel__ = 7;
        __label__ = 8;
        break;
      } else {
        __lastLabel__ = 7;
        __label__ = 13;
        break;
      }
     case 8:
      
      
      if ($pickler != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      var $52 = HEAP[_pickle_constructor];
      
      
      var $55 = _PyObject_CallFunctionObjArgs($func, allocate([ _PyST_Type, 0, 0, 0, $pickler, 0, 0, 0, $52, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $res = $55;
      
      
      if ($res != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      
      var $61 = HEAP[$res] - 1;
      
      
      HEAP[$res] = $61;
      
      
      
      
      if (HEAP[$res] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $72 = HEAP[HEAP[$res + 4] + 24];
      
      FUNCTION_TABLE[$72]($res);
      __label__ = 12;
      break;
     case 12:
      var $_pr = $func;
      __lastLabel__ = 12;
      __label__ = 13;
      break;
     case 13:
      var $74 = __lastLabel__ == 12 ? $_pr : $46;
      
      if ($74 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      var $79 = HEAP[$func] - 1;
      
      
      HEAP[$func] = $79;
      
      
      
      
      if (HEAP[$func] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $90 = HEAP[HEAP[$func + 4] + 24];
      
      FUNCTION_TABLE[$90]($func);
      __label__ = 16;
      break;
     case 16:
      
      
      if (HEAP[_pickle_constructor] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      var $94 = HEAP[_pickle_constructor];
      
      
      var $97 = HEAP[$94] - 1;
      var $98 = $94;
      HEAP[$98] = $97;
      
      
      
      if (HEAP[$94] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $106 = HEAP[HEAP[HEAP[_pickle_constructor] + 4] + 24];
      var $107 = HEAP[_pickle_constructor];
      FUNCTION_TABLE[$106]($107);
      __label__ = 19;
      break;
     case 19:
      
      
      if ($pickler != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      
      
      
      var $113 = HEAP[$pickler] - 1;
      
      
      HEAP[$pickler] = $113;
      
      
      
      
      if (HEAP[$pickler] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $124 = HEAP[HEAP[$pickler + 4] + 24];
      
      FUNCTION_TABLE[$124]($pickler);
      __label__ = 22;
      break;
     case 22:
      
      
      
      var $129 = HEAP[$copyreg] - 1;
      
      
      HEAP[$copyreg] = $129;
      
      
      
      
      if (HEAP[$copyreg] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $140 = HEAP[HEAP[$copyreg + 4] + 24];
      
      FUNCTION_TABLE[$140]($copyreg);
      __label__ = 24;
      break;
     case 24:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initparser"] = _initparser;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _PyTuple_New, 0, _PyTuple_SetItem, 0, _PyList_New, 0, _PyList_SetItem, 0, _validate_test, 0, _validate_old_test, 0, _validate_fpdef, 0, _validate_arith_expr, 0, _validate_term, 0, _validate_subscript, 0, _validate_expr, 0, _parser_free, 0, _parser_getattr, 0, _parser_compare, 0, _parser_compilest, 0, _parser_isexpr, 0, _parser_issuite, 0, _parser_st2list, 0, _parser_st2tuple, 0, _parser_ast2tuple, 0, _parser_ast2list, 0, _parser_compileast, 0, _parser_expr, 0, _parser_suite, 0, _parser_tuple2ast, 0, _parser_tuple2st, 0, _parser__pickler, 0 ]);
  function run(args) {
    _parser_copyright_string = allocate([ 67, 111, 112, 121, 114, 105, 103, 104, 116, 32, 49, 57, 57, 53, 45, 49, 57, 57, 54, 32, 98, 121, 32, 86, 105, 114, 103, 105, 110, 105, 97, 32, 80, 111, 108, 121, 116, 101, 99, 104, 110, 105, 99, 32, 73, 110, 115, 116, 105, 116, 117, 116, 101, 32, 38, 32, 83, 116, 97, 116, 101, 10, 85, 110, 105, 118, 101, 114, 115, 105, 116, 121, 44, 32, 66, 108, 97, 99, 107, 115, 98, 117, 114, 103, 44, 32, 86, 105, 114, 103, 105, 110, 105, 97, 44, 32, 85, 83, 65, 44, 32, 97, 110, 100, 32, 70, 114, 101, 100, 32, 76, 46, 32, 68, 114, 97, 107, 101, 44, 32, 74, 114, 46, 44, 32, 82, 101, 115, 116, 111, 110, 44, 10, 86, 105, 114, 103, 105, 110, 105, 97, 44, 32, 85, 83, 65, 46, 32, 32, 80, 111, 114, 116, 105, 111, 110, 115, 32, 99, 111, 112, 121, 114, 105, 103, 104, 116, 32, 49, 57, 57, 49, 45, 49, 57, 57, 53, 32, 98, 121, 32, 83, 116, 105, 99, 104, 116, 105, 110, 103, 32, 77, 97, 116, 104, 101, 109, 97, 116, 105, 115, 99, 104, 10, 67, 101, 110, 116, 114, 117, 109, 44, 32, 65, 109, 115, 116, 101, 114, 100, 97, 109, 44, 32, 84, 104, 101, 32, 78, 101, 116, 104, 101, 114, 108, 97, 110, 100, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _parser_doc_string = allocate([ 84, 104, 105, 115, 32, 105, 115, 32, 97, 110, 32, 105, 110, 116, 101, 114, 102, 97, 99, 101, 32, 116, 111, 32, 80, 121, 116, 104, 111, 110, 39, 115, 32, 105, 110, 116, 101, 114, 110, 97, 108, 32, 112, 97, 114, 115, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    _parser_version_string = allocate([ 48, 46, 53, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 117, 110, 114, 101, 99, 111, 103, 110, 105, 122, 101, 100, 32, 112, 97, 114, 115, 101, 32, 116, 114, 101, 101, 32, 110, 111, 100, 101, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    _parser_error = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str1 = allocate([ 112, 97, 114, 115, 101, 114, 46, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 73, 110, 116, 101, 114, 109, 101, 100, 105, 97, 116, 101, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 97, 32, 80, 121, 116, 104, 111, 110, 32, 112, 97, 114, 115, 101, 32, 116, 114, 101, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _PyST_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str3 = allocate([ 79, 33, 124, 79, 79, 58, 115, 116, 50, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    _keywords_9402 = allocate(16, "i8*", ALLOC_NORMAL);
    __str4 = allocate([ 97, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 108, 105, 110, 101, 95, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 99, 111, 108, 95, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 124, 79, 79, 58, 116, 111, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 97, 115, 116, 50, 116, 117, 112, 108, 101, 32, 105, 115, 32, 114, 101, 109, 111, 118, 101, 100, 32, 105, 110, 32, 51, 46, 120, 59, 32, 117, 115, 101, 32, 115, 116, 50, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 79, 33, 124, 79, 79, 58, 115, 116, 50, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _keywords_9452 = allocate(16, "i8*", ALLOC_NORMAL);
    __str10 = allocate([ 124, 79, 79, 58, 116, 111, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 97, 115, 116, 50, 108, 105, 115, 116, 32, 105, 115, 32, 114, 101, 109, 111, 118, 101, 100, 32, 105, 110, 32, 51, 46, 120, 59, 32, 117, 115, 101, 32, 115, 116, 50, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 60, 115, 121, 110, 116, 97, 120, 45, 116, 114, 101, 101, 62, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 79, 33, 124, 115, 58, 99, 111, 109, 112, 105, 108, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _keywords_9503 = allocate(12, "i8*", ALLOC_NORMAL);
    __str14 = allocate([ 102, 105, 108, 101, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 124, 115, 58, 99, 111, 109, 112, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 99, 111, 109, 112, 105, 108, 101, 97, 115, 116, 32, 105, 115, 32, 114, 101, 109, 111, 118, 101, 100, 32, 105, 110, 32, 51, 46, 120, 59, 32, 117, 115, 101, 32, 99, 111, 109, 112, 105, 108, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 79, 33, 58, 105, 115, 101, 120, 112, 114, 0 ], "i8", ALLOC_NORMAL);
    _keywords_9551 = allocate(8, "i8*", ALLOC_NORMAL);
    __str18 = allocate([ 58, 105, 115, 101, 120, 112, 114, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 79, 33, 58, 105, 115, 115, 117, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _keywords_9577 = allocate(8, "i8*", ALLOC_NORMAL);
    __str20 = allocate([ 58, 105, 115, 115, 117, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _parser_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_NORMAL);
    __str21 = allocate([ 99, 111, 109, 112, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 67, 111, 109, 112, 105, 108, 101, 32, 116, 104, 105, 115, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 32, 105, 110, 116, 111, 32, 97, 32, 99, 111, 100, 101, 32, 111, 98, 106, 101, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 105, 115, 101, 120, 112, 114, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 68, 101, 116, 101, 114, 109, 105, 110, 101, 115, 32, 105, 102, 32, 116, 104, 105, 115, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 32, 119, 97, 115, 32, 99, 114, 101, 97, 116, 101, 100, 32, 102, 114, 111, 109, 32, 97, 110, 32, 101, 120, 112, 114, 101, 115, 115, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 105, 115, 115, 117, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 68, 101, 116, 101, 114, 109, 105, 110, 101, 115, 32, 105, 102, 32, 116, 104, 105, 115, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 32, 119, 97, 115, 32, 99, 114, 101, 97, 116, 101, 100, 32, 102, 114, 111, 109, 32, 97, 32, 115, 117, 105, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 116, 111, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 67, 114, 101, 97, 116, 101, 115, 32, 97, 32, 108, 105, 115, 116, 45, 116, 114, 101, 101, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 116, 104, 105, 115, 32, 83, 84, 46, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 116, 111, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 67, 114, 101, 97, 116, 101, 115, 32, 97, 32, 116, 117, 112, 108, 101, 45, 116, 114, 101, 101, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 116, 104, 105, 115, 32, 83, 84, 46, 0 ], "i8", ALLOC_NORMAL);
    _keywords_9618 = allocate(8, "i8*", ALLOC_NORMAL);
    __str31 = allocate([ 115, 111, 117, 114, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 115, 58, 101, 120, 112, 114, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 115, 58, 115, 117, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 79, 58, 115, 101, 113, 117, 101, 110, 99, 101, 50, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    _keywords_9672 = allocate(8, "i8*", ALLOC_NORMAL);
    __str35 = allocate([ 115, 101, 113, 117, 101, 110, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 115, 101, 113, 117, 101, 110, 99, 101, 50, 115, 116, 40, 41, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 32, 115, 105, 110, 103, 108, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 112, 97, 114, 115, 101, 32, 116, 114, 101, 101, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 117, 115, 101, 32, 97, 32, 118, 97, 108, 105, 100, 32, 115, 116, 97, 114, 116, 32, 115, 121, 109, 98, 111, 108, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 117, 110, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 83, 84, 32, 101, 114, 114, 111, 114, 32, 111, 99, 99, 117, 114, 114, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 116, 117, 112, 108, 101, 50, 97, 115, 116, 32, 105, 115, 32, 114, 101, 109, 111, 118, 101, 100, 32, 105, 110, 32, 51, 46, 120, 59, 32, 117, 115, 101, 32, 116, 117, 112, 108, 101, 50, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 111, 115, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 73, 108, 108, 101, 103, 97, 108, 32, 110, 111, 100, 101, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 116, 101, 114, 109, 105, 110, 97, 108, 32, 110, 111, 100, 101, 115, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 50, 32, 111, 114, 32, 51, 32, 101, 110, 116, 114, 105, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 115, 101, 99, 111, 110, 100, 32, 105, 116, 101, 109, 32, 105, 110, 32, 116, 101, 114, 109, 105, 110, 97, 108, 32, 110, 111, 100, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 44, 32, 102, 111, 117, 110, 100, 32, 37, 115, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 116, 104, 105, 114, 100, 32, 105, 116, 101, 109, 32, 105, 110, 32, 116, 101, 114, 109, 105, 110, 97, 108, 32, 110, 111, 100, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 44, 32, 102, 111, 117, 110, 100, 32, 37, 115, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 117, 110, 107, 110, 111, 119, 110, 32, 110, 111, 100, 101, 32, 116, 121, 112, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 117, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 99, 104, 105, 108, 100, 32, 110, 111, 100, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 73, 108, 108, 101, 103, 97, 108, 32, 115, 121, 110, 116, 97, 120, 45, 116, 114, 101, 101, 59, 32, 99, 97, 110, 110, 111, 116, 32, 115, 116, 97, 114, 116, 32, 119, 105, 116, 104, 32, 116, 101, 114, 109, 105, 110, 97, 108, 32, 115, 121, 109, 98, 111, 108, 46, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 73, 108, 108, 101, 103, 97, 108, 32, 99, 111, 109, 112, 111, 110, 101, 110, 116, 32, 116, 117, 112, 108, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 69, 120, 112, 101, 99, 116, 101, 100, 32, 110, 111, 100, 101, 32, 116, 121, 112, 101, 32, 37, 100, 44, 32, 103, 111, 116, 32, 37, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 73, 108, 108, 101, 103, 97, 108, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 99, 104, 105, 108, 100, 114, 101, 110, 32, 102, 111, 114, 32, 37, 115, 32, 110, 111, 100, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 73, 108, 108, 101, 103, 97, 108, 32, 116, 101, 114, 109, 105, 110, 97, 108, 58, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 34, 37, 115, 34, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 44, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 99, 108, 97, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 58, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 40, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 41, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 105, 102, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 101, 108, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 101, 108, 105, 102, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate(1, "i8", ALLOC_NORMAL);
    __str62 = allocate([ 115, 117, 105, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 116, 101, 115, 116, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 116, 101, 115, 116, 108, 105, 115, 116, 49, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 116, 101, 115, 116, 108, 105, 115, 116, 95, 115, 97, 102, 101, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 101, 120, 112, 101, 99, 116, 101, 100, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 116, 114, 97, 105, 108, 101, 114, 32, 102, 111, 114, 32, 118, 97, 114, 97, 114, 103, 115, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 42, 42, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 116, 114, 97, 105, 108, 101, 114, 32, 102, 111, 114, 32, 118, 97, 114, 97, 114, 103, 115, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 118, 97, 114, 97, 114, 103, 115, 108, 105, 115, 116, 32, 109, 105, 115, 115, 105, 110, 103, 32, 99, 104, 105, 108, 100, 32, 110, 111, 100, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 61, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 102, 111, 114, 109, 97, 116, 105, 111, 110, 32, 102, 111, 114, 32, 118, 97, 114, 97, 114, 103, 115, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 108, 105, 115, 116, 95, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 99, 111, 109, 112, 95, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 108, 105, 115, 116, 95, 102, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 102, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 99, 111, 109, 112, 95, 102, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 108, 105, 115, 116, 95, 105, 102, 0 ], "i8", ALLOC_NORMAL);
    __str79 = allocate([ 99, 111, 109, 112, 95, 105, 102, 0 ], "i8", ALLOC_NORMAL);
    __str80 = allocate([ 102, 112, 100, 101, 102, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 102, 112, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str82 = allocate([ 115, 116, 109, 116, 0 ], "i8", ALLOC_NORMAL);
    __str83 = allocate([ 115, 105, 109, 112, 108, 101, 95, 115, 116, 109, 116, 0 ], "i8", ALLOC_NORMAL);
    __str84 = allocate([ 59, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 115, 109, 97, 108, 108, 95, 115, 116, 109, 116, 0 ], "i8", ALLOC_NORMAL);
    __str86 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 115, 109, 97, 108, 108, 95, 115, 116, 109, 116, 32, 99, 104, 105, 108, 100, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str87 = allocate([ 85, 110, 114, 101, 99, 111, 103, 110, 105, 122, 101, 100, 32, 99, 104, 105, 108, 100, 32, 110, 111, 100, 101, 32, 111, 102, 32, 115, 109, 97, 108, 108, 95, 115, 116, 109, 116, 58, 32, 37, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str88 = allocate([ 99, 111, 109, 112, 111, 117, 110, 100, 95, 115, 116, 109, 116, 0 ], "i8", ALLOC_NORMAL);
    __str89 = allocate([ 73, 108, 108, 101, 103, 97, 108, 32, 99, 111, 109, 112, 111, 117, 110, 100, 32, 115, 116, 97, 116, 101, 109, 101, 110, 116, 32, 116, 121, 112, 101, 58, 32, 37, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str90 = allocate([ 97, 117, 103, 97, 115, 115, 105, 103, 110, 0 ], "i8", ALLOC_NORMAL);
    __str91 = allocate([ 43, 61, 0 ], "i8", ALLOC_NORMAL);
    __str92 = allocate([ 45, 61, 0 ], "i8", ALLOC_NORMAL);
    __str93 = allocate([ 42, 61, 0 ], "i8", ALLOC_NORMAL);
    __str94 = allocate([ 47, 61, 0 ], "i8", ALLOC_NORMAL);
    __str95 = allocate([ 47, 47, 61, 0 ], "i8", ALLOC_NORMAL);
    __str96 = allocate([ 37, 61, 0 ], "i8", ALLOC_NORMAL);
    __str97 = allocate([ 38, 61, 0 ], "i8", ALLOC_NORMAL);
    __str98 = allocate([ 124, 61, 0 ], "i8", ALLOC_NORMAL);
    __str99 = allocate([ 94, 61, 0 ], "i8", ALLOC_NORMAL);
    __str100 = allocate([ 60, 60, 61, 0 ], "i8", ALLOC_NORMAL);
    __str101 = allocate([ 62, 62, 61, 0 ], "i8", ALLOC_NORMAL);
    __str102 = allocate([ 42, 42, 61, 0 ], "i8", ALLOC_NORMAL);
    __str103 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 97, 117, 103, 109, 101, 110, 116, 101, 100, 32, 97, 115, 115, 105, 103, 110, 109, 101, 110, 116, 32, 111, 112, 101, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str104 = allocate([ 112, 114, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str105 = allocate([ 112, 114, 105, 110, 116, 95, 115, 116, 109, 116, 0 ], "i8", ALLOC_NORMAL);
    __str106 = allocate([ 100, 101, 108, 95, 115, 116, 109, 116, 0 ], "i8", ALLOC_NORMAL);
    __str107 = allocate([ 100, 101, 108, 0 ], "i8", ALLOC_NORMAL);
    __str108 = allocate([ 114, 101, 116, 117, 114, 110, 0 ], "i8", ALLOC_NORMAL);
    __str109 = allocate([ 114, 97, 105, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str110 = allocate([ 121, 105, 101, 108, 100, 0 ], "i8", ALLOC_NORMAL);
    __str111 = allocate([ 121, 105, 101, 108, 100, 95, 115, 116, 109, 116, 0 ], "i8", ALLOC_NORMAL);
    __str112 = allocate([ 97, 115, 0 ], "i8", ALLOC_NORMAL);
    __str113 = allocate([ 105, 109, 112, 111, 114, 116, 95, 97, 115, 95, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str114 = allocate([ 46, 0 ], "i8", ALLOC_NORMAL);
    __str115 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 99, 104, 105, 108, 100, 114, 101, 110, 32, 102, 111, 114, 32, 100, 111, 116, 116, 101, 100, 95, 97, 115, 95, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str116 = allocate([ 105, 109, 112, 111, 114, 116, 95, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str117 = allocate([ 105, 109, 112, 111, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str118 = allocate([ 102, 114, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    __str119 = allocate([ 105, 109, 112, 111, 114, 116, 95, 115, 116, 109, 116, 0 ], "i8", ALLOC_NORMAL);
    __str120 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 105, 109, 112, 111, 114, 116, 95, 115, 116, 109, 116, 32, 99, 104, 105, 108, 100, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str121 = allocate([ 85, 110, 114, 101, 99, 111, 103, 110, 105, 122, 101, 100, 32, 99, 104, 105, 108, 100, 32, 110, 111, 100, 101, 32, 111, 102, 32, 105, 109, 112, 111, 114, 116, 95, 115, 116, 109, 116, 58, 32, 37, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str122 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 103, 108, 111, 98, 97, 108, 32, 115, 116, 97, 116, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str123 = allocate([ 103, 108, 111, 98, 97, 108, 0 ], "i8", ALLOC_NORMAL);
    __str124 = allocate([ 101, 120, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    __str125 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 101, 120, 101, 99, 32, 115, 116, 97, 116, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str126 = allocate([ 97, 115, 115, 101, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str127 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 97, 115, 115, 101, 114, 116, 32, 115, 116, 97, 116, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str128 = allocate([ 119, 104, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str129 = allocate([ 116, 114, 121, 0 ], "i8", ALLOC_NORMAL);
    __str130 = allocate([ 101, 120, 99, 101, 112, 116, 0 ], "i8", ALLOC_NORMAL);
    __str131 = allocate([ 73, 108, 108, 101, 103, 97, 108, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 99, 104, 105, 108, 100, 114, 101, 110, 32, 102, 111, 114, 32, 116, 114, 121, 47, 37, 115, 32, 110, 111, 100, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str132 = allocate([ 102, 105, 110, 97, 108, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str133 = allocate([ 116, 114, 121, 47, 102, 105, 110, 97, 108, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str134 = allocate([ 116, 114, 121, 47, 101, 120, 99, 101, 112, 116, 47, 102, 105, 110, 97, 108, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str135 = allocate([ 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str136 = allocate([ 97, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str137 = allocate([ 110, 111, 116, 0 ], "i8", ALLOC_NORMAL);
    __str138 = allocate([ 105, 115, 0 ], "i8", ALLOC_NORMAL);
    __str139 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 111, 112, 101, 114, 97, 116, 111, 114, 32, 39, 37, 115, 39, 0 ], "i8", ALLOC_NORMAL);
    __str140 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 99, 111, 109, 112, 97, 114, 105, 115, 111, 110, 32, 111, 112, 101, 114, 97, 116, 111, 114, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str141 = allocate([ 99, 111, 109, 112, 95, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str142 = allocate([ 117, 110, 107, 110, 111, 119, 110, 32, 99, 111, 109, 112, 97, 114, 105, 115, 111, 110, 32, 111, 112, 101, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str143 = allocate([ 124, 0 ], "i8", ALLOC_NORMAL);
    __str144 = allocate([ 94, 0 ], "i8", ALLOC_NORMAL);
    __str145 = allocate([ 38, 0 ], "i8", ALLOC_NORMAL);
    __str146 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 110, 111, 100, 101, 115, 32, 102, 111, 114, 32, 39, 112, 111, 119, 101, 114, 39, 0 ], "i8", ALLOC_NORMAL);
    __str147 = allocate([ 97, 116, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    __str148 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 108, 105, 115, 116, 32, 100, 105, 115, 112, 108, 97, 121, 32, 97, 116, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    __str149 = allocate([ 109, 105, 115, 115, 105, 110, 103, 32, 99, 104, 105, 108, 100, 32, 110, 111, 100, 101, 115, 32, 111, 102, 32, 108, 105, 115, 116, 109, 97, 107, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str150 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 116, 114, 97, 105, 108, 105, 110, 103, 32, 110, 111, 100, 101, 115, 32, 102, 111, 114, 32, 108, 105, 115, 116, 109, 97, 107, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str151 = allocate([ 109, 105, 115, 115, 105, 110, 103, 32, 99, 104, 105, 108, 100, 32, 110, 111, 100, 101, 115, 32, 111, 102, 32, 116, 101, 115, 116, 108, 105, 115, 116, 95, 99, 111, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str152 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 116, 114, 97, 105, 108, 105, 110, 103, 32, 110, 111, 100, 101, 115, 32, 102, 111, 114, 32, 116, 101, 115, 116, 108, 105, 115, 116, 95, 99, 111, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str153 = allocate([ 64, 0 ], "i8", ALLOC_NORMAL);
    __str154 = allocate([ 119, 105, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str155 = allocate([ 100, 101, 102, 0 ], "i8", ALLOC_NORMAL);
    __str156 = allocate([ 108, 97, 109, 98, 100, 97, 0 ], "i8", ALLOC_NORMAL);
    __str157 = allocate([ 108, 97, 109, 98, 100, 101, 102, 0 ], "i8", ALLOC_NORMAL);
    __str158 = allocate([ 111, 108, 100, 95, 108, 97, 109, 98, 100, 101, 102, 0 ], "i8", ALLOC_NORMAL);
    __str159 = allocate([ 97, 114, 103, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str160 = allocate([ 110, 101, 101, 100, 32, 39, 40, 39, 44, 32, 39, 41, 39, 32, 102, 111, 114, 32, 103, 101, 110, 101, 114, 97, 116, 111, 114, 32, 101, 120, 112, 114, 101, 115, 115, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str161 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 97, 114, 103, 108, 105, 115, 116, 32, 115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 32, 40, 101, 120, 116, 114, 97, 32, 115, 116, 117, 102, 102, 32, 111, 110, 32, 101, 110, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str162 = allocate([ 42, 0 ], "i8", ALLOC_NORMAL);
    __str163 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 117, 115, 101, 32, 111, 102, 32, 39, 42, 39, 32, 105, 110, 32, 97, 114, 103, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str164 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 117, 115, 101, 32, 111, 102, 32, 39, 42, 42, 39, 32, 105, 110, 32, 97, 114, 103, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str165 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 97, 114, 103, 108, 105, 115, 116, 32, 115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str166 = allocate([ 116, 114, 97, 105, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str167 = allocate([ 115, 117, 98, 115, 99, 114, 105, 112, 116, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str168 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 102, 111, 114, 32, 115, 117, 98, 115, 99, 114, 105, 112, 116, 32, 110, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str169 = allocate([ 115, 117, 98, 115, 99, 114, 105, 112, 116, 0 ], "i8", ALLOC_NORMAL);
    __str170 = allocate([ 115, 108, 105, 99, 101, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str171 = allocate([ 101, 120, 112, 114, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str172 = allocate([ 110, 99, 104, 32, 62, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str173 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 112, 97, 114, 115, 101, 114, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___13794 = allocate([ 118, 97, 108, 105, 100, 97, 116, 101, 95, 100, 105, 99, 116, 111, 114, 115, 101, 116, 109, 97, 107, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str174 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 110, 111, 100, 101, 115, 32, 102, 111, 114, 32, 100, 105, 99, 116, 111, 114, 115, 101, 116, 109, 97, 107, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str175 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 116, 114, 97, 105, 108, 105, 110, 103, 32, 110, 111, 100, 101, 115, 32, 102, 111, 114, 32, 100, 105, 99, 116, 111, 114, 115, 101, 116, 109, 97, 107, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str176 = allocate([ 102, 108, 111, 119, 95, 115, 116, 109, 116, 0 ], "i8", ALLOC_NORMAL);
    __str177 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 102, 108, 111, 119, 95, 115, 116, 109, 116, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str178 = allocate([ 112, 97, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str179 = allocate([ 98, 114, 101, 97, 107, 0 ], "i8", ALLOC_NORMAL);
    __str180 = allocate([ 99, 111, 110, 116, 105, 110, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str181 = allocate([ 117, 110, 114, 101, 99, 111, 103, 110, 105, 122, 101, 100, 32, 110, 111, 100, 101, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str182 = allocate([ 99, 111, 117, 108, 100, 32, 110, 111, 116, 32, 118, 97, 108, 105, 100, 97, 116, 101, 32, 101, 120, 112, 114, 101, 115, 115, 105, 111, 110, 32, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str183 = allocate([ 86, 65, 76, 73, 68, 65, 84, 73, 79, 78, 32, 70, 65, 73, 76, 85, 82, 69, 58, 32, 114, 101, 112, 111, 114, 116, 32, 116, 104, 105, 115, 32, 116, 111, 32, 116, 104, 101, 32, 109, 97, 105, 110, 116, 97, 105, 110, 101, 114, 33, 0 ], "i8", ALLOC_NORMAL);
    __str184 = allocate([ 69, 114, 114, 111, 114, 32, 80, 97, 114, 115, 105, 110, 103, 32, 101, 110, 99, 111, 100, 105, 110, 103, 95, 100, 101, 99, 108, 0 ], "i8", ALLOC_NORMAL);
    _pickle_constructor = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str185 = allocate([ 79, 33, 58, 95, 112, 105, 99, 107, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str186 = allocate([ 79, 105, 0 ], "i8", ALLOC_NORMAL);
    __str187 = allocate([ 79, 40, 79, 41, 0 ], "i8", ALLOC_NORMAL);
    _parser_functions = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_NORMAL);
    __str188 = allocate([ 97, 115, 116, 50, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str189 = allocate([ 67, 114, 101, 97, 116, 101, 115, 32, 97, 32, 116, 117, 112, 108, 101, 45, 116, 114, 101, 101, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 97, 110, 32, 83, 84, 46, 0 ], "i8", ALLOC_NORMAL);
    __str190 = allocate([ 97, 115, 116, 50, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str191 = allocate([ 67, 114, 101, 97, 116, 101, 115, 32, 97, 32, 108, 105, 115, 116, 45, 116, 114, 101, 101, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 97, 110, 32, 83, 84, 46, 0 ], "i8", ALLOC_NORMAL);
    __str192 = allocate([ 99, 111, 109, 112, 105, 108, 101, 97, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str193 = allocate([ 67, 111, 109, 112, 105, 108, 101, 115, 32, 97, 110, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 32, 105, 110, 116, 111, 32, 97, 32, 99, 111, 100, 101, 32, 111, 98, 106, 101, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str194 = allocate([ 99, 111, 109, 112, 105, 108, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str195 = allocate([ 101, 120, 112, 114, 0 ], "i8", ALLOC_NORMAL);
    __str196 = allocate([ 67, 114, 101, 97, 116, 101, 115, 32, 97, 110, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 32, 102, 114, 111, 109, 32, 97, 110, 32, 101, 120, 112, 114, 101, 115, 115, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str197 = allocate([ 68, 101, 116, 101, 114, 109, 105, 110, 101, 115, 32, 105, 102, 32, 97, 110, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 32, 119, 97, 115, 32, 99, 114, 101, 97, 116, 101, 100, 32, 102, 114, 111, 109, 32, 97, 110, 32, 101, 120, 112, 114, 101, 115, 115, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str198 = allocate([ 68, 101, 116, 101, 114, 109, 105, 110, 101, 115, 32, 105, 102, 32, 97, 110, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 32, 119, 97, 115, 32, 99, 114, 101, 97, 116, 101, 100, 32, 102, 114, 111, 109, 32, 97, 32, 115, 117, 105, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str199 = allocate([ 67, 114, 101, 97, 116, 101, 115, 32, 97, 110, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 32, 102, 114, 111, 109, 32, 97, 32, 115, 117, 105, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str200 = allocate([ 115, 101, 113, 117, 101, 110, 99, 101, 50, 97, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str201 = allocate([ 67, 114, 101, 97, 116, 101, 115, 32, 97, 110, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 32, 102, 114, 111, 109, 32, 97, 32, 116, 114, 101, 101, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str202 = allocate([ 115, 101, 113, 117, 101, 110, 99, 101, 50, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str203 = allocate([ 115, 116, 50, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str204 = allocate([ 115, 116, 50, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str205 = allocate([ 116, 117, 112, 108, 101, 50, 97, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str206 = allocate([ 116, 117, 112, 108, 101, 50, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str207 = allocate([ 95, 112, 105, 99, 107, 108, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str208 = allocate([ 82, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 112, 105, 99, 107, 108, 101, 32, 109, 97, 103, 105, 99, 32, 116, 111, 32, 97, 108, 108, 111, 119, 32, 83, 84, 32, 111, 98, 106, 101, 99, 116, 115, 32, 116, 111, 32, 98, 101, 32, 112, 105, 99, 107, 108, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str209 = allocate([ 112, 97, 114, 115, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str210 = allocate([ 112, 97, 114, 115, 101, 114, 46, 80, 97, 114, 115, 101, 114, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str211 = allocate([ 80, 97, 114, 115, 101, 114, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str212 = allocate([ 65, 83, 84, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str213 = allocate([ 83, 84, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str214 = allocate([ 95, 95, 99, 111, 112, 121, 114, 105, 103, 104, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str215 = allocate([ 95, 95, 100, 111, 99, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str216 = allocate([ 95, 95, 118, 101, 114, 115, 105, 111, 110, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str217 = allocate([ 99, 111, 112, 121, 95, 114, 101, 103, 0 ], "i8", ALLOC_NORMAL);
    __str218 = allocate([ 112, 105, 99, 107, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_PyST_Type + 12] = __str1;
    HEAP[_PyST_Type + 24] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_PyST_Type + 32] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_PyST_Type + 40] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_PyST_Type + 88] = __str2;
    HEAP[_keywords_9402] = __str4;
    HEAP[_keywords_9402 + 4] = __str5;
    HEAP[_keywords_9402 + 8] = __str6;
    HEAP[_keywords_9452] = __str4;
    HEAP[_keywords_9452 + 4] = __str5;
    HEAP[_keywords_9452 + 8] = __str6;
    HEAP[_keywords_9503] = __str4;
    HEAP[_keywords_9503 + 4] = __str14;
    HEAP[_keywords_9551] = __str4;
    HEAP[_keywords_9577] = __str4;
    HEAP[_parser_methods] = __str21;
    HEAP[_parser_methods + 4] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_parser_methods + 12] = __str22;
    HEAP[_parser_methods + 16] = __str23;
    HEAP[_parser_methods + 20] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_parser_methods + 28] = __str24;
    HEAP[_parser_methods + 32] = __str25;
    HEAP[_parser_methods + 36] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_parser_methods + 44] = __str26;
    HEAP[_parser_methods + 48] = __str27;
    HEAP[_parser_methods + 52] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_parser_methods + 60] = __str28;
    HEAP[_parser_methods + 64] = __str29;
    HEAP[_parser_methods + 68] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_parser_methods + 76] = __str30;
    HEAP[_keywords_9618] = __str31;
    HEAP[_keywords_9672] = __str35;
    HEAP[_parser_functions] = __str188;
    HEAP[_parser_functions + 4] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_parser_functions + 12] = __str189;
    HEAP[_parser_functions + 16] = __str190;
    HEAP[_parser_functions + 20] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_parser_functions + 28] = __str191;
    HEAP[_parser_functions + 32] = __str192;
    HEAP[_parser_functions + 36] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_parser_functions + 44] = __str193;
    HEAP[_parser_functions + 48] = __str194;
    HEAP[_parser_functions + 52] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_parser_functions + 60] = __str193;
    HEAP[_parser_functions + 64] = __str195;
    HEAP[_parser_functions + 68] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_parser_functions + 76] = __str196;
    HEAP[_parser_functions + 80] = __str23;
    HEAP[_parser_functions + 84] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_parser_functions + 92] = __str197;
    HEAP[_parser_functions + 96] = __str25;
    HEAP[_parser_functions + 100] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_parser_functions + 108] = __str198;
    HEAP[_parser_functions + 112] = __str62;
    HEAP[_parser_functions + 116] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_parser_functions + 124] = __str199;
    HEAP[_parser_functions + 128] = __str200;
    HEAP[_parser_functions + 132] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_parser_functions + 140] = __str201;
    HEAP[_parser_functions + 144] = __str202;
    HEAP[_parser_functions + 148] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_parser_functions + 156] = __str201;
    HEAP[_parser_functions + 160] = __str203;
    HEAP[_parser_functions + 164] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_parser_functions + 172] = __str189;
    HEAP[_parser_functions + 176] = __str204;
    HEAP[_parser_functions + 180] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_parser_functions + 188] = __str191;
    HEAP[_parser_functions + 192] = __str205;
    HEAP[_parser_functions + 196] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_parser_functions + 204] = __str201;
    HEAP[_parser_functions + 208] = __str206;
    HEAP[_parser_functions + 212] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_parser_functions + 220] = __str201;
    HEAP[_parser_functions + 224] = __str207;
    HEAP[_parser_functions + 228] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_parser_functions + 236] = __str208;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
