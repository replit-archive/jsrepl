"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 352;
  var $1___SIZE = 16;
  var $2___SIZE = 16;
  var $3___SIZE = 40;
  var $4___SIZE = 196;
  var $5___SIZE = 96;
  var $6___SIZE = 196;
  var $7___SIZE = 80;
  var $struct_ElementObject___SIZE = 24;
  var $struct_ElementObjectExtra___SIZE = 32;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyCompilerFlags___SIZE = 4;
  var $struct_PyExpat_CAPI___SIZE = 80;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyListObject___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PySliceObject___SIZE = 20;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_PyUnicodeObject___SIZE = 24;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct_TreeBuilderObject___SIZE = 52;
  var $struct_XMLParserObject___SIZE = 52;
  var $struct_XML_Encoding___SIZE = 1036;
  var $struct_XML_Encoding___FLATTENER = [ 0, 1024, 1028, 1032 ];
  var $struct_XML_Memory_Handling_Suite___SIZE = 12;
  var $struct_XML_ParserStruct___SIZE = 0;
  var $struct_XML_ParserStruct___FLATTENER = [];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _elementtree_deepcopy_obj;
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
  var __str10;
  var __str11;
  var _elementpath_obj;
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
  var _elementtree_iter_obj;
  var __str24;
  var __str25;
  var _elementtree_itertext_obj;
  var __str26;
  var __str27;
  var __str28;
  var __str29;
  var __str30;
  var __str31;
  var __str32;
  var _elementtree_copyelement_obj;
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
  var _element_methods;
  var __str59;
  var __str60;
  var __str61;
  var __str62;
  var __str63;
  var _element_as_sequence;
  var _element_as_mapping;
  var __str64;
  var _Element_Type;
  var __str65;
  var _elementtree_parseerror_obj;
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
  var _treebuilder_methods;
  var __str79;
  var _TreeBuilder_Type;
  var __str80;
  var __str81;
  var __str82;
  var __str83;
  var __str84;
  var __str85;
  var __str86;
  var _expat_capi;
  var __str87;
  var __str88;
  var _kwlist_12207;
  var __str89;
  var __str90;
  var __str91;
  var _memory_handler_12204;
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
  var _xmlparser_methods;
  var __str108;
  var __str109;
  var __str110;
  var __str111;
  var _XMLParser_Type;
  var __str112;
  var __str113;
  var __functions;
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
  function _deepcopy($object, $memo) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $object_addr;
      var $memo_addr;
      var $retval;
      var $0;
      var $args;
      var $result;
      $object_addr = $object;
      $memo_addr = $memo;
      
      
      if (HEAP[_elementtree_deepcopy_obj] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($3, __str);
      $0 = 0;
      __label__ = 7;
      break;
     case 2:
      var $4 = _PyTuple_New(2);
      $args = $4;
      
      
      if ($args == 0) {
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
      
      
      
      var $10 = HEAP[$object_addr] + 1;
      
      
      HEAP[$object_addr] = $10;
      
      
      
      
      
      HEAP[$args + 12] = $object_addr;
      
      
      
      var $21 = HEAP[$memo_addr] + 1;
      
      
      HEAP[$memo_addr] = $21;
      
      
      
      
      
      HEAP[$args + 12 + 4] = $memo_addr;
      var $29 = HEAP[_elementtree_deepcopy_obj];
      
      var $31 = _PyObject_CallObject($29, $args);
      $result = $31;
      
      
      
      var $35 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $35;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $46 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$46]($args);
      __label__ = 6;
      break;
     case 6:
      
      $0 = $result;
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
  function _list_join($list) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $list_addr;
      var $retval;
      var $0;
      var $joiner;
      var $function;
      var $args;
      var $result;
      $list_addr = $list;
      
      
      
      var $4 = HEAP[$list_addr + 8];
      if ($4 == 0) {
        __label__ = 1;
        break;
      } else if ($4 == 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[$list_addr] - 1;
      
      
      HEAP[$list_addr] = $8;
      
      
      
      
      if (HEAP[$list_addr] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $19 = HEAP[HEAP[$list_addr + 4] + 24];
      
      FUNCTION_TABLE[$19]($list_addr);
      __label__ = 3;
      break;
     case 3:
      var $21 = _PyString_FromString(__str1);
      $0 = $21;
      __label__ = 22;
      break;
     case 4:
      
      
      
      
      
      
      $result = HEAP[HEAP[$list_addr + 12]];
      
      
      
      var $31 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $31;
      
      
      
      var $37 = HEAP[$list_addr] - 1;
      
      
      HEAP[$list_addr] = $37;
      
      
      
      
      if (HEAP[$list_addr] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $48 = HEAP[HEAP[$list_addr + 4] + 24];
      
      FUNCTION_TABLE[$48]($list_addr);
      __label__ = 6;
      break;
     case 6:
      
      $0 = $result;
      __label__ = 22;
      break;
     case 7:
      
      
      
      
      
      var $56 = HEAP[HEAP[$list_addr + 12]];
      var $57 = _PySequence_GetSlice($56, 0, 0);
      $joiner = $57;
      
      
      if ($joiner == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 22;
      break;
     case 9:
      
      var $61 = _PyObject_GetAttrString($joiner, __str2);
      $function = $61;
      
      
      if ($function == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      var $67 = HEAP[$joiner] - 1;
      
      
      HEAP[$joiner] = $67;
      
      
      
      
      if (HEAP[$joiner] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $78 = HEAP[HEAP[$joiner + 4] + 24];
      
      FUNCTION_TABLE[$78]($joiner);
      __label__ = 12;
      break;
     case 12:
      $0 = 0;
      __label__ = 22;
      break;
     case 13:
      var $80 = _PyTuple_New(1);
      $args = $80;
      
      
      if ($args == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = 0;
      __label__ = 22;
      break;
     case 15:
      
      
      
      
      
      HEAP[$args + 12] = $list_addr;
      
      
      var $90 = _PyObject_CallObject($function, $args);
      $result = $90;
      
      
      
      var $94 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $94;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $105 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$105]($args);
      __label__ = 17;
      break;
     case 17:
      
      
      
      var $110 = HEAP[$function] - 1;
      
      
      HEAP[$function] = $110;
      
      
      
      
      if (HEAP[$function] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $121 = HEAP[HEAP[$function + 4] + 24];
      
      FUNCTION_TABLE[$121]($function);
      __label__ = 19;
      break;
     case 19:
      
      
      
      var $126 = HEAP[$joiner] - 1;
      
      
      HEAP[$joiner] = $126;
      
      
      
      
      if (HEAP[$joiner] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $137 = HEAP[HEAP[$joiner + 4] + 24];
      
      FUNCTION_TABLE[$137]($joiner);
      __label__ = 21;
      break;
     case 21:
      
      $0 = $result;
      __label__ = 22;
      break;
     case 22:
      
      $retval = $0;
      var $retval22 = $retval;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element_new_extra($self, $attrib) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $attrib_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $attrib_addr = $attrib;
      var $1 = _PyObject_Malloc(32);
      
      
      
      HEAP[$self_addr + 20] = $1;
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 5;
      break;
     case 2:
      
      
      if ($attrib_addr == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $attrib_addr = __Py_NoneStruct;
      __label__ = 4;
      break;
     case 4:
      
      
      
      var $14 = HEAP[$attrib_addr] + 1;
      
      
      HEAP[$attrib_addr] = $14;
      
      
      
      var $20 = HEAP[$self_addr + 20];
      
      HEAP[$20] = $attrib_addr;
      
      
      
      var $25 = HEAP[$self_addr + 20] + 4;
      HEAP[$25] = 0;
      
      
      
      var $29 = HEAP[$self_addr + 20] + 8;
      HEAP[$29] = 4;
      
      
      
      
      
      
      
      var $37 = HEAP[$self_addr + 20] + 16;
      var $38 = HEAP[$self_addr + 20] + 12;
      HEAP[$38] = $37;
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
  function _element_dealloc_extra($self) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $i;
      $self_addr = $self;
      
      
      
      
      var $4 = HEAP[HEAP[$self_addr + 20]];
      
      
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
      
      
      
      
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[HEAP[$self_addr + 20]] + 4] + 24];
      
      
      
      
      var $25 = HEAP[HEAP[$self_addr + 20]];
      FUNCTION_TABLE[$20]($25);
      __label__ = 2;
      break;
     case 2:
      $i = 0;
      
      
      
      
      
      
      
      
      
      
      
      var $37 = HEAP[HEAP[$self_addr + 20] + 12];
      if (HEAP[HEAP[$self_addr + 20] + 4] > $i) {
        __lastLabel__ = 2;
        __label__ = 3;
        break;
      } else {
        __lastLabel__ = 2;
        __label__ = 6;
        break;
      }
     case 3:
      var $38 = __lastLabel__ == 5 ? $82 : $37;
      
      
      var $41 = HEAP[$38 + 4 * $i];
      
      
      var $44 = HEAP[$41] - 1;
      var $45 = $41;
      HEAP[$45] = $44;
      
      
      
      if (HEAP[$41] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[HEAP[HEAP[$self_addr + 20] + 12] + 4 * $i] + 4] + 24];
      
      
      
      
      
      
      
      var $68 = HEAP[HEAP[HEAP[$self_addr + 20] + 12] + 4 * $i];
      FUNCTION_TABLE[$60]($68);
      __label__ = 5;
      break;
     case 5:
      
      var $70 = $i + 1;
      $i = $70;
      
      
      
      
      
      
      
      
      
      
      
      var $82 = HEAP[HEAP[$self_addr + 20] + 12];
      if (HEAP[HEAP[$self_addr + 20] + 4] > $i) {
        __lastLabel__ = 5;
        __label__ = 3;
        break;
      } else {
        __lastLabel__ = 5;
        __label__ = 6;
        break;
      }
     case 6:
      var $_lcssa = __lastLabel__ == 2 ? $37 : $82;
      
      
      
      
      
      
      if ($_lcssa != HEAP[$self_addr + 20] + 16) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      var $94 = HEAP[HEAP[$self_addr + 20] + 12];
      _PyObject_Free($94);
      __label__ = 8;
      break;
     case 8:
      
      
      
      var $98 = HEAP[$self_addr + 20];
      _PyObject_Free($98);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element_new($tag, $attrib) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tag_addr;
      var $attrib_addr;
      var $retval;
      var $0;
      var $self;
      $tag_addr = $tag;
      $attrib_addr = $attrib;
      var $1 = __PyObject_New(_Element_Type);
      
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
      __label__ = 10;
      break;
     case 2:
      
      
      
      
      if (HEAP[$attrib_addr + 4] == _PyDict_Type) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      var $10 = _PyDict_Size($attrib_addr);
      
      if ($10 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $attrib_addr = __Py_NoneStruct;
      __label__ = 5;
      break;
     case 5:
      
      
      HEAP[$self + 20] = 0;
      
      
      if ($attrib_addr != __Py_NoneStruct) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      var $18 = _element_new_extra($self, $attrib_addr);
      
      var $20 = $self;
      if ($18 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      _PyObject_Free($20);
      $0 = 0;
      __label__ = 10;
      break;
     case 8:
      
      
      var $24 = HEAP[$20 + 20] + 4;
      HEAP[$24] = 0;
      
      
      
      var $28 = HEAP[$self + 20] + 8;
      HEAP[$28] = 4;
      
      
      
      
      
      
      
      var $36 = HEAP[$self + 20] + 16;
      var $37 = HEAP[$self + 20] + 12;
      HEAP[$37] = $36;
      __label__ = 9;
      break;
     case 9:
      
      
      
      var $41 = HEAP[$tag_addr] + 1;
      
      
      HEAP[$tag_addr] = $41;
      
      
      
      HEAP[$self + 8] = $tag_addr;
      
      var $48 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $48;
      
      
      HEAP[$self + 12] = __Py_NoneStruct;
      
      var $52 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $52;
      
      
      HEAP[$self + 16] = __Py_NoneStruct;
      
      
      $0 = $self;
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
  function _element_resize($self, $extra) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $extra_addr;
      var $retval;
      var $0;
      var $iftmp_10;
      var $iftmp_9;
      var $size;
      var $children;
      $self_addr = $self;
      $extra_addr = $extra;
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $6 = _element_new_extra($self_addr, 0);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      
      
      
      $size = $extra_addr + HEAP[HEAP[$self_addr + 20] + 4];
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20] + 8] < $size) {
        __label__ = 3;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 3:
      
      var $22 = $size >> 3;
      
      
      if ($size <= 8) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $iftmp_9 = 3;
      __label__ = 6;
      break;
     case 5:
      $iftmp_9 = 6;
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $28 = $iftmp_9 + $22 + $size;
      $size = $28;
      
      if ($28 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      $iftmp_10 = $size;
      __label__ = 9;
      break;
     case 8:
      $iftmp_10 = 1;
      __label__ = 9;
      break;
     case 9:
      
      $size = $iftmp_10;
      
      
      
      
      
      
      
      
      
      
      
      
      var $44 = $size * 4;
      if (HEAP[HEAP[$self_addr + 20] + 12] != HEAP[$self_addr + 20] + 16) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      var $50 = HEAP[HEAP[$self_addr + 20] + 12];
      var $51 = _PyObject_Realloc($50, $44);
      
      $children = $51;
      
      
      if ($children == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      var $55 = _PyObject_Malloc($44);
      
      $children = $55;
      
      
      if ($children == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      var $64 = HEAP[HEAP[$self_addr + 20] + 4] * 4;
      
      
      
      
      
      
      
      var $72 = HEAP[HEAP[$self_addr + 20] + 12];
      _llvm_memcpy_p0i8_p0i8_i32($children, $72, $64, 1, 0);
      __label__ = 13;
      break;
     case 13:
      
      
      
      var $76 = HEAP[$self_addr + 20] + 12;
      
      HEAP[$76] = $children;
      
      
      
      var $81 = HEAP[$self_addr + 20] + 8;
      
      HEAP[$81] = $size;
      __label__ = 14;
      break;
     case 14:
      $0 = 0;
      __label__ = 16;
      break;
     case 15:
      var $83 = _PyErr_NoMemory();
      $0 = -1;
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
  function _element_add_subelement($self, $element) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $element_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $element_addr = $element;
      
      var $2 = _element_resize($self_addr, 1);
      
      if ($2 < 0) {
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
      
      
      
      var $7 = HEAP[$element_addr] + 1;
      
      
      HEAP[$element_addr] = $7;
      
      
      
      
      
      
      
      
      
      
      var $20 = HEAP[HEAP[$self_addr + 20] + 12] + 4 * HEAP[HEAP[$self_addr + 20] + 4];
      
      HEAP[$20] = $element_addr;
      
      
      
      
      
      var $27 = HEAP[HEAP[$self_addr + 20] + 4] + 1;
      var $28 = HEAP[$self_addr + 20] + 4;
      HEAP[$28] = $27;
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
  function _element_get_attrib($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $res;
      $self_addr = $self;
      
      
      
      
      
      $res = HEAP[HEAP[$self_addr + 20]];
      
      
      if ($res == __Py_NoneStruct) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      
      var $11 = HEAP[$res] - 1;
      
      
      HEAP[$res] = $11;
      
      
      
      
      if (HEAP[$res] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $22 = HEAP[HEAP[$res + 4] + 24];
      
      FUNCTION_TABLE[$22]($res);
      __label__ = 3;
      break;
     case 3:
      var $24 = _PyDict_New();
      $res = $24;
      
      if ($24 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 7;
      break;
     case 5:
      
      
      
      var $29 = HEAP[$self_addr + 20];
      
      HEAP[$29] = $res;
      __label__ = 6;
      break;
     case 6:
      
      $0 = $res;
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
  function _element_get_text($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $res;
      $self_addr = $self;
      
      
      
      $res = HEAP[$self_addr + 12];
      
      
      
      
      
      if (($res & 1 & 255) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      var $10 = $res & -2;
      var $11 = $10;
      $res = $11;
      
      
      
      
      if (HEAP[$res + 4] == _PyList_Type) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      var $17 = _list_join($res);
      $res = $17;
      
      
      if ($res == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 6;
      break;
     case 4:
      
      
      
      HEAP[$self_addr + 12] = $res;
      __label__ = 5;
      break;
     case 5:
      
      $0 = $res;
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
  function _element_get_tail($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $res;
      $self_addr = $self;
      
      
      
      $res = HEAP[$self_addr + 16];
      
      
      
      
      
      if (($res & 1 & 255) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      var $10 = $res & -2;
      var $11 = $10;
      $res = $11;
      
      
      
      
      if (HEAP[$res + 4] == _PyList_Type) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      var $17 = _list_join($res);
      $res = $17;
      
      
      if ($res == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 6;
      break;
     case 4:
      
      
      
      HEAP[$self_addr + 16] = $res;
      __label__ = 5;
      break;
     case 5:
      
      $0 = $res;
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
  function _element($self, $args, $kw) {
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
      var $kw_addr;
      var $retval;
      var $iftmp_20;
      var $0;
      var $elem;
      var $tag = __stackBase__;
      var $attrib = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      HEAP[$attrib] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str3, allocate([ $tag, 0, 0, 0, _PyDict_Type, 0, 0, 0, $attrib, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$attrib] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if ($kw_addr != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 4:
      
      
      if (HEAP[$attrib] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $9 = HEAP[$attrib];
      var $10 = _PyDict_Copy($9);
      $iftmp_20 = $10;
      __lastLabel__ = 5;
      __label__ = 7;
      break;
     case 6:
      var $11 = _PyDict_New();
      $iftmp_20 = $11;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $12 = __lastLabel__ == 6 ? $11 : $10;
      HEAP[$attrib] = $12;
      
      if ($12 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 15;
      break;
     case 9:
      
      
      if ($kw_addr != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      var $16 = HEAP[$attrib];
      
      var $18 = _PyDict_Update($16, $kw_addr);
      __label__ = 12;
      break;
     case 11:
      
      var $20 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $20;
      HEAP[$attrib] = __Py_NoneStruct;
      __label__ = 12;
      break;
     case 12:
      var $21 = HEAP[$attrib];
      var $22 = HEAP[$tag];
      var $23 = _element_new($22, $21);
      $elem = $23;
      var $24 = HEAP[$attrib];
      
      
      var $27 = HEAP[$24] - 1;
      var $28 = $24;
      HEAP[$28] = $27;
      
      
      
      if (HEAP[$24] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[$attrib] + 4] + 24];
      var $37 = HEAP[$attrib];
      FUNCTION_TABLE[$36]($37);
      __label__ = 14;
      break;
     case 14:
      
      $0 = $elem;
      __label__ = 15;
      break;
     case 15:
      
      $retval = $0;
      var $retval16 = $retval;
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _subelement($self, $args, $kw) {
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
      var $kw_addr;
      var $retval;
      var $iftmp_31;
      var $0;
      var $elem;
      var $parent = __stackBase__;
      var $tag = __stackBase__ + 4;
      var $attrib = __stackBase__ + 8;
      $self_addr = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      HEAP[$attrib] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str4, allocate([ _Element_Type, 0, 0, 0, $parent, 0, 0, 0, $tag, 0, 0, 0, _PyDict_Type, 0, 0, 0, $attrib, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.ElementObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$attrib] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if ($kw_addr != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 4:
      
      
      if (HEAP[$attrib] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $9 = HEAP[$attrib];
      var $10 = _PyDict_Copy($9);
      $iftmp_31 = $10;
      __lastLabel__ = 5;
      __label__ = 7;
      break;
     case 6:
      var $11 = _PyDict_New();
      $iftmp_31 = $11;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $12 = __lastLabel__ == 6 ? $11 : $10;
      HEAP[$attrib] = $12;
      
      if ($12 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 19;
      break;
     case 9:
      
      
      if ($kw_addr != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      var $16 = HEAP[$attrib];
      
      var $18 = _PyDict_Update($16, $kw_addr);
      __label__ = 12;
      break;
     case 11:
      
      var $20 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $20;
      HEAP[$attrib] = __Py_NoneStruct;
      __label__ = 12;
      break;
     case 12:
      var $21 = HEAP[$attrib];
      var $22 = HEAP[$tag];
      var $23 = _element_new($22, $21);
      $elem = $23;
      var $24 = HEAP[$attrib];
      
      
      var $27 = HEAP[$24] - 1;
      var $28 = $24;
      HEAP[$28] = $27;
      
      
      
      if (HEAP[$24] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[$attrib] + 4] + 24];
      var $37 = HEAP[$attrib];
      FUNCTION_TABLE[$36]($37);
      __label__ = 14;
      break;
     case 14:
      var $38 = HEAP[$parent];
      
      var $40 = _element_add_subelement($38, $elem);
      
      var $42 = $elem;
      if ($40 < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      
      
      var $45 = HEAP[$42] - 1;
      
      
      HEAP[$elem] = $45;
      
      
      
      
      if (HEAP[$elem] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $56 = HEAP[HEAP[$elem + 4] + 24];
      
      FUNCTION_TABLE[$56]($elem);
      __label__ = 17;
      break;
     case 17:
      $0 = 0;
      __label__ = 19;
      break;
     case 18:
      $0 = $42;
      __label__ = 19;
      break;
     case 19:
      
      $retval = $0;
      var $retval20 = $retval;
      STACKTOP = __stackBase__;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      _element_dealloc_extra($self_addr);
      __label__ = 2;
      break;
     case 2:
      
      
      var $7 = HEAP[$self_addr + 8];
      
      
      var $10 = HEAP[$7] - 1;
      var $11 = $7;
      HEAP[$11] = $10;
      
      
      
      if (HEAP[$7] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $21 = HEAP[HEAP[HEAP[$self_addr + 8] + 4] + 24];
      
      
      var $24 = HEAP[$self_addr + 8];
      FUNCTION_TABLE[$21]($24);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      var $29 = HEAP[$self_addr + 12] & -2;
      var $30 = $29;
      
      
      var $33 = HEAP[$30] - 1;
      var $34 = $30;
      HEAP[$34] = $33;
      
      
      
      if (HEAP[$30] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $42 = HEAP[$self_addr + 12] & -2;
      
      
      
      
      var $47 = HEAP[HEAP[$42 + 4] + 24];
      
      
      
      
      var $52 = HEAP[$self_addr + 12] & -2;
      var $53 = $52;
      FUNCTION_TABLE[$47]($53);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      var $58 = HEAP[$self_addr + 16] & -2;
      var $59 = $58;
      
      
      var $62 = HEAP[$59] - 1;
      var $63 = $59;
      HEAP[$63] = $62;
      
      
      
      if (HEAP[$59] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $71 = HEAP[$self_addr + 16] & -2;
      
      
      
      
      var $76 = HEAP[HEAP[$71 + 4] + 24];
      
      
      
      
      var $81 = HEAP[$self_addr + 16] & -2;
      var $82 = $81;
      FUNCTION_TABLE[$76]($82);
      __label__ = 8;
      break;
     case 8:
      
      
      _PyObject_Free($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element_append($self, $args) {
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
      var $element = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str5, allocate([ _Element_Type, 0, 0, 0, $element, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$element];
      
      var $6 = _element_add_subelement($self_addr, $4);
      
      if ($6 < 0) {
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
      
      var $9 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $9;
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
  function _element_clear($self, $args) {
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
      
      var $2 = _PyArg_ParseTuple($args_addr, __str6, allocate(1, "i32", ALLOC_STACK));
      
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
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      _element_dealloc_extra($self_addr);
      
      
      HEAP[$self_addr + 20] = 0;
      __label__ = 4;
      break;
     case 4:
      
      var $12 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $12;
      
      
      
      
      var $17 = HEAP[$self_addr + 12] & -2;
      var $18 = $17;
      
      
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
      
      
      
      
      var $30 = HEAP[$self_addr + 12] & -2;
      
      
      
      
      var $35 = HEAP[HEAP[$30 + 4] + 24];
      
      
      
      
      var $40 = HEAP[$self_addr + 12] & -2;
      var $41 = $40;
      FUNCTION_TABLE[$35]($41);
      __label__ = 6;
      break;
     case 6:
      
      
      HEAP[$self_addr + 12] = __Py_NoneStruct;
      
      var $45 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $45;
      
      
      
      
      var $50 = HEAP[$self_addr + 16] & -2;
      var $51 = $50;
      
      
      var $54 = HEAP[$51] - 1;
      var $55 = $51;
      HEAP[$55] = $54;
      
      
      
      if (HEAP[$51] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $63 = HEAP[$self_addr + 16] & -2;
      
      
      
      
      var $68 = HEAP[HEAP[$63 + 4] + 24];
      
      
      
      
      var $73 = HEAP[$self_addr + 16] & -2;
      var $74 = $73;
      FUNCTION_TABLE[$68]($74);
      __label__ = 8;
      break;
     case 8:
      
      
      HEAP[$self_addr + 16] = __Py_NoneStruct;
      
      var $78 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $78;
      $0 = __Py_NoneStruct;
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
  function _element_copy($self, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $iftmp_43;
      var $0;
      var $i;
      var $element;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str7, allocate(1, "i32", ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      $iftmp_43 = HEAP[HEAP[$self_addr + 20]];
      __label__ = 5;
      break;
     case 4:
      $iftmp_43 = __Py_NoneStruct;
      __label__ = 5;
      break;
     case 5:
      
      
      var $15 = HEAP[$self_addr + 8];
      
      var $17 = _element_new($15, $iftmp_43);
      
      $element = $17;
      
      if ($17 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 20;
      break;
     case 7:
      
      
      
      
      var $24 = HEAP[$element + 12] & -2;
      var $25 = $24;
      
      
      var $28 = HEAP[$25] - 1;
      var $29 = $25;
      HEAP[$29] = $28;
      
      
      
      if (HEAP[$25] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $37 = HEAP[$element + 12] & -2;
      
      
      
      
      var $42 = HEAP[HEAP[$37 + 4] + 24];
      
      
      
      
      var $47 = HEAP[$element + 12] & -2;
      var $48 = $47;
      FUNCTION_TABLE[$42]($48);
      __label__ = 9;
      break;
     case 9:
      
      
      var $51 = HEAP[$self_addr + 12];
      
      
      HEAP[$element + 12] = $51;
      
      
      
      
      var $58 = HEAP[$element + 12] & -2;
      
      
      
      var $62 = HEAP[$58] + 1;
      var $63 = $58;
      HEAP[$63] = $62;
      
      
      
      
      var $68 = HEAP[$element + 16] & -2;
      var $69 = $68;
      
      
      var $72 = HEAP[$69] - 1;
      var $73 = $69;
      HEAP[$73] = $72;
      
      
      
      if (HEAP[$69] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $81 = HEAP[$element + 16] & -2;
      
      
      
      
      var $86 = HEAP[HEAP[$81 + 4] + 24];
      
      
      
      
      var $91 = HEAP[$element + 16] & -2;
      var $92 = $91;
      FUNCTION_TABLE[$86]($92);
      __label__ = 11;
      break;
     case 11:
      
      
      var $95 = HEAP[$self_addr + 16];
      
      
      HEAP[$element + 16] = $95;
      
      
      
      
      var $102 = HEAP[$element + 16] & -2;
      
      
      
      var $106 = HEAP[$102] + 1;
      var $107 = $102;
      HEAP[$107] = $106;
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 12:
      
      
      
      
      var $116 = HEAP[HEAP[$self_addr + 20] + 4];
      
      var $118 = _element_resize($element, $116);
      
      if ($118 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      
      
      
      
      var $124 = HEAP[$element] - 1;
      
      HEAP[$element] = $124;
      
      
      
      if (HEAP[$element] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      var $134 = HEAP[HEAP[$element + 4] + 24];
      
      
      FUNCTION_TABLE[$134]($element);
      __label__ = 15;
      break;
     case 15:
      $0 = 0;
      __label__ = 20;
      break;
     case 16:
      $i = 0;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20] + 4] > $i) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      
      
      
      var $154 = HEAP[HEAP[HEAP[HEAP[$self_addr + 20] + 12] + 4 * $i]] + 1;
      var $155 = HEAP[HEAP[HEAP[$self_addr + 20] + 12] + 4 * $i];
      HEAP[$155] = $154;
      
      
      
      
      
      
      
      
      
      
      
      
      var $168 = HEAP[HEAP[HEAP[$self_addr + 20] + 12] + 4 * $i];
      
      var $170 = HEAP[HEAP[$element + 20] + 12] + 4 * $i;
      HEAP[$170] = $168;
      
      var $172 = $i + 1;
      $i = $172;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20] + 4] > $i) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      var $187 = HEAP[HEAP[$self_addr + 20] + 4];
      var $188 = HEAP[$element + 20] + 4;
      HEAP[$188] = $187;
      __label__ = 19;
      break;
     case 19:
      
      
      $0 = $element;
      __label__ = 20;
      break;
     case 20:
      
      $retval = $0;
      var $retval21 = $retval;
      return $retval21;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element_deepcopy($self, $args) {
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
      var $i;
      var $element;
      var $tag;
      var $attrib;
      var $text;
      var $tail;
      var $id;
      var $memo = __stackBase__;
      var $child;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str8, allocate([ $memo, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$memo];
      
      
      var $7 = HEAP[$self_addr + 8];
      var $8 = _deepcopy($7, $4);
      $tag = $8;
      
      
      if ($tag == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 38;
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
      var $15 = HEAP[$memo];
      
      
      
      
      var $20 = HEAP[HEAP[$self_addr + 20]];
      var $21 = _deepcopy($20, $15);
      $attrib = $21;
      
      
      if ($attrib == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      
      
      
      var $27 = HEAP[$tag] - 1;
      
      
      HEAP[$tag] = $27;
      
      
      
      
      if (HEAP[$tag] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $38 = HEAP[HEAP[$tag + 4] + 24];
      
      FUNCTION_TABLE[$38]($tag);
      __label__ = 8;
      break;
     case 8:
      $0 = 0;
      __label__ = 38;
      break;
     case 9:
      
      var $41 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $41;
      $attrib = __Py_NoneStruct;
      __label__ = 10;
      break;
     case 10:
      
      
      var $44 = _element_new($tag, $attrib);
      
      $element = $44;
      
      
      
      var $49 = HEAP[$tag] - 1;
      
      
      HEAP[$tag] = $49;
      
      
      
      
      if (HEAP[$tag] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $60 = HEAP[HEAP[$tag + 4] + 24];
      
      FUNCTION_TABLE[$60]($tag);
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $65 = HEAP[$attrib] - 1;
      
      
      HEAP[$attrib] = $65;
      
      
      
      
      if (HEAP[$attrib] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $76 = HEAP[HEAP[$attrib + 4] + 24];
      
      FUNCTION_TABLE[$76]($attrib);
      __label__ = 14;
      break;
     case 14:
      
      
      if ($element == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $0 = 0;
      __label__ = 38;
      break;
     case 16:
      var $80 = HEAP[$memo];
      
      
      
      
      var $85 = HEAP[$self_addr + 12] & -2;
      var $86 = $85;
      var $87 = _deepcopy($86, $80);
      $text = $87;
      
      
      if ($text == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      var $92 = HEAP[$element + 12];
      
      
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
      
      
      
      
      
      
      var $106 = HEAP[HEAP[HEAP[$element + 12] + 4] + 24];
      
      
      var $109 = HEAP[$element + 12];
      FUNCTION_TABLE[$106]($109);
      __label__ = 19;
      break;
     case 19:
      
      
      var $112 = $text & -2;
      
      
      
      
      
      
      var $119 = HEAP[$self_addr + 12] & 1 | $112;
      
      
      HEAP[$element + 12] = $119;
      var $122 = HEAP[$memo];
      
      
      
      
      var $127 = HEAP[$self_addr + 16] & -2;
      var $128 = $127;
      var $129 = _deepcopy($128, $122);
      $tail = $129;
      
      if ($129 == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      var $133 = HEAP[$element + 16];
      
      
      var $136 = HEAP[$133] - 1;
      var $137 = $133;
      HEAP[$137] = $136;
      
      
      
      if (HEAP[$133] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      
      
      var $147 = HEAP[HEAP[HEAP[$element + 16] + 4] + 24];
      
      
      var $150 = HEAP[$element + 16];
      FUNCTION_TABLE[$147]($150);
      __label__ = 22;
      break;
     case 22:
      
      
      var $153 = $tail & -2;
      
      
      
      
      
      
      var $160 = HEAP[$self_addr + 16] & 1 | $153;
      
      
      HEAP[$element + 16] = $160;
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 23:
      
      
      
      
      var $171 = HEAP[HEAP[$self_addr + 20] + 4];
      
      var $173 = _element_resize($element, $171);
      
      if ($173 < 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      $i = 0;
      __label__ = 28;
      break;
     case 25:
      var $175 = HEAP[$memo];
      
      
      
      
      
      
      
      var $183 = HEAP[HEAP[HEAP[$self_addr + 20] + 12] + 4 * $i];
      var $184 = _deepcopy($183, $175);
      $child = $184;
      
      
      
      
      var $189 = HEAP[$element + 20];
      if ($child == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      var $190 = $189 + 4;
      
      HEAP[$190] = $i;
      __label__ = 35;
      break;
     case 27:
      
      
      
      var $195 = HEAP[$189 + 12] + 4 * $i;
      
      HEAP[$195] = $child;
      
      var $198 = $i + 1;
      $i = $198;
      __label__ = 28;
      break;
     case 28:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20] + 4] > $i) {
        __label__ = 25;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      
      
      
      
      var $213 = HEAP[HEAP[$self_addr + 20] + 4];
      var $214 = HEAP[$element + 20] + 4;
      HEAP[$214] = $213;
      __label__ = 30;
      break;
     case 30:
      
      
      var $217 = _PyInt_FromLong($self_addr);
      $id = $217;
      
      if ($217 == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      var $221 = HEAP[$memo];
      
      var $223 = _PyDict_SetItem($221, $id, $element);
      $i = $223;
      
      
      
      var $227 = HEAP[$id] - 1;
      
      
      HEAP[$id] = $227;
      
      
      
      
      if (HEAP[$id] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      var $238 = HEAP[HEAP[$id + 4] + 24];
      
      FUNCTION_TABLE[$238]($id);
      __label__ = 33;
      break;
     case 33:
      
      
      if ($i < 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      $0 = $element;
      __label__ = 38;
      break;
     case 35:
      
      
      
      
      var $248 = HEAP[$element] - 1;
      
      HEAP[$element] = $248;
      
      
      
      if (HEAP[$element] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      
      var $258 = HEAP[HEAP[$element + 4] + 24];
      
      
      FUNCTION_TABLE[$258]($element);
      __label__ = 37;
      break;
     case 37:
      $0 = 0;
      __label__ = 38;
      break;
     case 38:
      
      $retval = $0;
      var $retval38 = $retval;
      STACKTOP = __stackBase__;
      return $retval38;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _checkpath($tag) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tag_addr;
      var $retval;
      var $0;
      var $i;
      var $check;
      var $p;
      var $p17;
      $tag_addr = $tag;
      $check = 1;
      
      
      
      
      
      
      
      var $8 = $tag_addr;
      if ((HEAP[HEAP[$tag_addr + 4] + 84] & 268435456) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 1:
      
      
      
      $p = HEAP[$8 + 12];
      $i = 0;
      __label__ = 14;
      break;
     case 2:
      
      
      
      
      
      if (HEAP[$p + 2 * $i] == 123) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $check = 0;
      __label__ = 13;
      break;
     case 4:
      
      
      
      
      
      if (HEAP[$p + 2 * $i] == 125) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $check = 1;
      __label__ = 13;
      break;
     case 6:
      
      
      if ($check != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 7:
      
      
      
      
      
      if (HEAP[$p + 2 * $i] == 47) {
        __label__ = 12;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[$p + 2 * $i] == 42) {
        __label__ = 12;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      if (HEAP[$p + 2 * $i] == 91) {
        __label__ = 12;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      if (HEAP[$p + 2 * $i] == 64) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      if (HEAP[$p + 2 * $i] == 46) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = 1;
      __label__ = 33;
      break;
     case 13:
      
      var $50 = $i + 1;
      $i = $50;
      __label__ = 14;
      break;
     case 14:
      
      
      
      
      
      
      if (HEAP[$tag_addr + 8] > $i) {
        __label__ = 2;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      $0 = 0;
      __label__ = 33;
      break;
     case 16:
      
      
      
      
      
      
      if ((HEAP[HEAP[$8 + 4] + 84] & 134217728) != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 17:
      
      
      
      
      $p17 = $tag_addr + 20;
      $i = 0;
      __label__ = 30;
      break;
     case 18:
      
      
      
      
      
      if (HEAP[$p17 + $i] == 123) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      $check = 0;
      __label__ = 29;
      break;
     case 20:
      
      
      
      
      
      if (HEAP[$p17 + $i] == 125) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      $check = 1;
      __label__ = 29;
      break;
     case 22:
      
      
      if ($check != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 23:
      
      
      
      
      
      if (HEAP[$p17 + $i] == 47) {
        __label__ = 28;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      
      if (HEAP[$p17 + $i] == 42) {
        __label__ = 28;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      
      
      
      if (HEAP[$p17 + $i] == 91) {
        __label__ = 28;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      
      if (HEAP[$p17 + $i] == 64) {
        __label__ = 28;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      
      if (HEAP[$p17 + $i] == 46) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      $0 = 1;
      __label__ = 33;
      break;
     case 29:
      
      var $105 = $i + 1;
      $i = $105;
      __label__ = 30;
      break;
     case 30:
      
      
      
      
      
      
      if (HEAP[$tag_addr + 8] > $i) {
        __label__ = 18;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      $0 = 0;
      __label__ = 33;
      break;
     case 32:
      $0 = 1;
      __label__ = 33;
      break;
     case 33:
      
      $retval = $0;
      var $retval34 = $retval;
      return $retval34;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element_extend($self, $args) {
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
      var $iftmp_69;
      var $0;
      var $seq;
      var $i;
      var $seqlen;
      var $seq_in = __stackBase__;
      var $element;
      $self_addr = $self;
      $args_addr = $args;
      $seqlen = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str9, allocate([ $seq_in, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$seq_in];
      var $5 = _PySequence_Fast($4, __str1);
      $seq = $5;
      
      
      if ($seq == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $12 = HEAP[HEAP[HEAP[$seq_in] + 4] + 12];
      var $13 = HEAP[_PyExc_TypeError];
      var $14 = _PyErr_Format($13, __str10, allocate([ $12, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 17;
      break;
     case 4:
      
      var $16 = _PySequence_Size($seq);
      $seqlen = $16;
      $i = 0;
      __label__ = 13;
      break;
     case 5:
      
      
      
      
      
      
      var $23 = $seq;
      if ((HEAP[HEAP[$61 + 4] + 84] & 33554432) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      
      $iftmp_69 = HEAP[HEAP[$23 + 12] + 4 * $i];
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      
      $iftmp_69 = HEAP[$23 + 12 + $i * 4];
      __label__ = 8;
      break;
     case 8:
      
      $element = $iftmp_69;
      
      
      var $38 = _element_add_subelement($self_addr, $element);
      
      if ($38 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      var $43 = HEAP[$seq] - 1;
      
      
      HEAP[$seq] = $43;
      
      
      
      
      if (HEAP[$seq] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $54 = HEAP[HEAP[$seq + 4] + 24];
      
      FUNCTION_TABLE[$54]($seq);
      __label__ = 11;
      break;
     case 11:
      $0 = 0;
      __label__ = 17;
      break;
     case 12:
      
      var $57 = $i + 1;
      $i = $57;
      __label__ = 13;
      break;
     case 13:
      
      
      
      var $61 = $seq;
      if ($i < $seqlen) {
        __label__ = 5;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      var $64 = HEAP[$61] - 1;
      
      
      HEAP[$seq] = $64;
      
      
      
      
      if (HEAP[$seq] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $75 = HEAP[HEAP[$seq + 4] + 24];
      
      FUNCTION_TABLE[$75]($seq);
      __label__ = 16;
      break;
     case 16:
      
      var $78 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $78;
      $0 = __Py_NoneStruct;
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
  function _element_find($self, $args) {
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
      var $tag = __stackBase__;
      var $namespaces = __stackBase__ + 4;
      var $item;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$namespaces] = __Py_NoneStruct;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str11, allocate([ $tag, 0, 0, 0, $namespaces, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$tag];
      var $5 = _checkpath($4);
      
      if ($5 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$namespaces] != __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $9 = HEAP[$namespaces];
      var $10 = HEAP[$tag];
      var $11 = HEAP[_elementpath_obj];
      
      var $13 = _PyObject_CallMethod($11, __str12, __str13, allocate([ $self_addr, 0, 0, 0, $10, 0, 0, 0, $9, 0, 0, 0 ], [ "%struct.ElementObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $13;
      __label__ = 14;
      break;
     case 5:
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $19 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $19;
      $0 = __Py_NoneStruct;
      __label__ = 14;
      break;
     case 7:
      $i = 0;
      __label__ = 12;
      break;
     case 8:
      
      
      
      
      
      
      
      
      $item = HEAP[HEAP[HEAP[$self_addr + 20] + 12] + 4 * $i];
      
      
      
      
      if (HEAP[$item + 4] == _Element_Type) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      var $32 = HEAP[$tag];
      
      
      
      var $36 = HEAP[$item + 8];
      var $37 = _PyObject_Compare($36, $32);
      
      if ($37 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      var $42 = HEAP[$item] + 1;
      
      
      HEAP[$item] = $42;
      
      $0 = $item;
      __label__ = 14;
      break;
     case 11:
      
      var $47 = $i + 1;
      $i = $47;
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20] + 4] > $i) {
        __label__ = 8;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      var $56 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $56;
      $0 = __Py_NoneStruct;
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
  function _element_findtext($self, $args) {
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
      var $i;
      var $tag = __stackBase__;
      var $default_value = __stackBase__ + 4;
      var $namespaces = __stackBase__ + 8;
      var $item;
      var $text;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$default_value] = __Py_NoneStruct;
      HEAP[$namespaces] = __Py_NoneStruct;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str14, allocate([ $tag, 0, 0, 0, $default_value, 0, 0, 0, $namespaces, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$tag];
      var $5 = _checkpath($4);
      
      if ($5 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$namespaces] != __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $9 = HEAP[$namespaces];
      var $10 = HEAP[$default_value];
      var $11 = HEAP[$tag];
      var $12 = HEAP[_elementpath_obj];
      
      var $14 = _PyObject_CallMethod($12, __str15, __str16, allocate([ $self_addr, 0, 0, 0, $11, 0, 0, 0, $10, 0, 0, 0, $9, 0, 0, 0 ], [ "%struct.ElementObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $14;
      __label__ = 18;
      break;
     case 5:
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $22 = HEAP[HEAP[$default_value]] + 1;
      var $23 = HEAP[$default_value];
      HEAP[$23] = $22;
      
      $0 = HEAP[$default_value];
      __label__ = 18;
      break;
     case 7:
      $i = 0;
      __label__ = 16;
      break;
     case 8:
      
      
      
      
      
      
      
      
      
      $item = HEAP[HEAP[HEAP[$self_addr + 20] + 12] + 4 * $i];
      
      
      
      
      
      if (HEAP[$item + 4] == _Element_Type) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 9:
      var $39 = HEAP[$tag];
      
      
      var $42 = HEAP[$item + 8];
      var $43 = _PyObject_Compare($42, $39);
      
      if ($43 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 10:
      
      var $46 = _element_get_text($item);
      $text = $46;
      
      
      if ($text == __Py_NoneStruct) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $49 = _PyString_FromString(__str1);
      $0 = $49;
      __label__ = 18;
      break;
     case 12:
      
      
      if ($text != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      var $55 = HEAP[$text] + 1;
      
      
      HEAP[$text] = $55;
      __label__ = 14;
      break;
     case 14:
      
      $0 = $text;
      __label__ = 18;
      break;
     case 15:
      
      var $60 = $i + 1;
      $i = $60;
      __label__ = 16;
      break;
     case 16:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20] + 4] > $i) {
        __label__ = 8;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      var $71 = HEAP[HEAP[$default_value]] + 1;
      var $72 = HEAP[$default_value];
      HEAP[$72] = $71;
      
      $0 = HEAP[$default_value];
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
  function _element_findall($self, $args) {
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
      var $out;
      var $tag = __stackBase__;
      var $namespaces = __stackBase__ + 4;
      var $item;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$namespaces] = __Py_NoneStruct;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str17, allocate([ $tag, 0, 0, 0, $namespaces, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$tag];
      var $5 = _checkpath($4);
      
      if ($5 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$namespaces] != __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $9 = HEAP[$namespaces];
      var $10 = HEAP[$tag];
      var $11 = HEAP[_elementpath_obj];
      
      var $13 = _PyObject_CallMethod($11, __str18, __str13, allocate([ $self_addr, 0, 0, 0, $10, 0, 0, 0, $9, 0, 0, 0 ], [ "%struct.ElementObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $13;
      __label__ = 19;
      break;
     case 5:
      var $14 = _PyList_New(0);
      $out = $14;
      
      
      if ($out == 0) {
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
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      $0 = $out;
      __label__ = 19;
      break;
     case 9:
      $i = 0;
      __label__ = 17;
      break;
     case 10:
      
      
      
      
      
      
      
      
      $item = HEAP[HEAP[HEAP[$self_addr + 20] + 12] + 4 * $i];
      
      
      
      
      if (HEAP[$item + 4] == _Element_Type) {
        __label__ = 11;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 11:
      var $34 = HEAP[$tag];
      
      
      
      var $38 = HEAP[$item + 8];
      var $39 = _PyObject_Compare($38, $34);
      
      if ($39 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 12:
      
      
      var $43 = _PyList_Append($out, $item);
      
      if ($43 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      
      
      
      var $48 = HEAP[$out] - 1;
      
      
      HEAP[$out] = $48;
      
      
      
      
      if (HEAP[$out] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $59 = HEAP[HEAP[$out + 4] + 24];
      
      FUNCTION_TABLE[$59]($out);
      __label__ = 15;
      break;
     case 15:
      $0 = 0;
      __label__ = 19;
      break;
     case 16:
      
      var $62 = $i + 1;
      $i = $62;
      __label__ = 17;
      break;
     case 17:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20] + 4] > $i) {
        __label__ = 10;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      $0 = $out;
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
  function _element_iterfind($self, $args) {
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
      var $tag = __stackBase__;
      var $namespaces = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$namespaces] = __Py_NoneStruct;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str19, allocate([ $tag, 0, 0, 0, $namespaces, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$namespaces];
      var $5 = HEAP[$tag];
      var $6 = HEAP[_elementpath_obj];
      
      var $8 = _PyObject_CallMethod($6, __str20, __str13, allocate([ $self_addr, 0, 0, 0, $5, 0, 0, 0, $4, 0, 0, 0 ], [ "%struct.ElementObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
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
  function _element_get($self, $args) {
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
      var $value;
      var $key = __stackBase__;
      var $default_value = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$default_value] = __Py_NoneStruct;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str21, allocate([ $key, 0, 0, 0, $default_value, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20]] == __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      $value = HEAP[$default_value];
      __label__ = 7;
      break;
     case 5:
      var $15 = HEAP[$key];
      
      
      
      
      var $20 = HEAP[HEAP[$self_addr + 20]];
      var $21 = _PyDict_GetItem($20, $15);
      $value = $21;
      
      
      if ($value == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      $value = HEAP[$default_value];
      __label__ = 7;
      break;
     case 7:
      
      
      
      var $28 = HEAP[$value] + 1;
      
      
      HEAP[$value] = $28;
      
      $0 = $value;
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
  function _element_getchildren($self, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $i;
      var $list;
      var $item;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str22, allocate(1, "i32", ALLOC_STACK));
      
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
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = _PyList_New(0);
      $0 = $8;
      __label__ = 9;
      break;
     case 4:
      
      
      
      
      var $13 = HEAP[HEAP[$self_addr + 20] + 4];
      var $14 = _PyList_New($13);
      $list = $14;
      
      
      if ($list == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 9;
      break;
     case 6:
      $i = 0;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20] + 4] > $i) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      $item = HEAP[HEAP[HEAP[$self_addr + 20] + 12] + 4 * $i];
      
      
      
      var $35 = HEAP[$item] + 1;
      
      
      HEAP[$item] = $35;
      
      
      
      
      
      var $43 = HEAP[$list + 12] + 4 * $i;
      
      HEAP[$43] = $item;
      
      var $46 = $i + 1;
      $i = $46;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20] + 4] > $i) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      $0 = $list;
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
  function _element_iter($self, $args) {
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
      var $tag = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$tag] = __Py_NoneStruct;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str23, allocate([ $tag, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[_elementtree_iter_obj] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($6, __str24);
      $0 = 0;
      __label__ = 9;
      break;
     case 4:
      var $7 = _PyTuple_New(2);
      $args_addr = $7;
      
      
      if ($args_addr == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 9;
      break;
     case 6:
      
      
      
      
      var $14 = HEAP[$self_addr] + 1;
      
      HEAP[$self_addr] = $14;
      
      
      
      
      
      
      HEAP[$args_addr + 12] = $self_addr;
      
      
      
      var $25 = HEAP[HEAP[$tag]] + 1;
      var $26 = HEAP[$tag];
      HEAP[$26] = $25;
      
      
      var $29 = HEAP[$tag];
      
      
      HEAP[$args_addr + 12 + 4] = $29;
      var $32 = HEAP[_elementtree_iter_obj];
      
      var $34 = _PyObject_CallObject($32, $args_addr);
      $result = $34;
      
      
      
      var $38 = HEAP[$args_addr] - 1;
      
      
      HEAP[$args_addr] = $38;
      
      
      
      
      if (HEAP[$args_addr] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $49 = HEAP[HEAP[$args_addr + 4] + 24];
      
      FUNCTION_TABLE[$49]($args_addr);
      __label__ = 8;
      break;
     case 8:
      
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
  function _element_itertext($self, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $result;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str25, allocate(1, "i32", ALLOC_STACK));
      
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
      
      
      if (HEAP[_elementtree_itertext_obj] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($6, __str26);
      $0 = 0;
      __label__ = 9;
      break;
     case 4:
      var $7 = _PyTuple_New(1);
      $args_addr = $7;
      
      
      if ($args_addr == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 9;
      break;
     case 6:
      
      
      
      
      var $14 = HEAP[$self_addr] + 1;
      
      HEAP[$self_addr] = $14;
      
      
      
      
      
      
      HEAP[$args_addr + 12] = $self_addr;
      var $22 = HEAP[_elementtree_itertext_obj];
      
      var $24 = _PyObject_CallObject($22, $args_addr);
      $result = $24;
      
      
      
      var $28 = HEAP[$args_addr] - 1;
      
      
      HEAP[$args_addr] = $28;
      
      
      
      
      if (HEAP[$args_addr] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $39 = HEAP[HEAP[$args_addr + 4] + 24];
      
      FUNCTION_TABLE[$39]($args_addr);
      __label__ = 8;
      break;
     case 8:
      
      $0 = $result;
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
  function _element_getitem($self_, $index) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self__addr;
      var $index_addr;
      var $retval;
      var $0;
      var $self;
      $self__addr = $self_;
      $index_addr = $index;
      
      
      $self = $self__addr;
      
      
      
      
      if (HEAP[$self + 20] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($index_addr < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self + 20] + 4] <= $index_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $16 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($16, __str27);
      $0 = 0;
      __label__ = 5;
      break;
     case 4:
      
      
      
      
      
      
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[HEAP[$self + 20] + 12] + 4 * $index_addr]] + 1;
      var $28 = HEAP[HEAP[HEAP[$self + 20] + 12] + 4 * $index_addr];
      HEAP[$28] = $27;
      
      
      
      
      
      
      
      
      $0 = HEAP[HEAP[HEAP[$self + 20] + 12] + 4 * $index_addr];
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
  function _element_insert($self, $args) {
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
      var $index = __stackBase__;
      var $element = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str28, allocate([ $index, 0, 0, 0, _Element_Type, 0, 0, 0, $element, 0, 0, 0 ], [ "i32*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $9 = _element_new_extra($self_addr, 0);
      __label__ = 4;
      break;
     case 4:
      
      
      if (HEAP[$index] < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $18 = HEAP[$index] + HEAP[HEAP[$self_addr + 20] + 4];
      HEAP[$index] = $18;
      
      
      if (HEAP[$index] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$index] = 0;
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20] + 4] < HEAP[$index]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $32 = HEAP[HEAP[$self_addr + 20] + 4];
      HEAP[$index] = $32;
      __label__ = 9;
      break;
     case 9:
      
      var $34 = _element_resize($self_addr, 1);
      
      if ($34 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = 0;
      __label__ = 14;
      break;
     case 11:
      
      
      
      
      
      $i = HEAP[HEAP[$self_addr + 20] + 4];
      
      
      
      if ($i > HEAP[$index]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $57 = HEAP[HEAP[HEAP[$self_addr + 20] + 12] + 4 * ($i - 1)];
      
      var $59 = HEAP[HEAP[$self_addr + 20] + 12] + 4 * $i;
      HEAP[$59] = $57;
      
      var $61 = $i - 1;
      $i = $61;
      
      
      
      if ($i > HEAP[$index]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $68 = HEAP[HEAP[$element]] + 1;
      var $69 = HEAP[$element];
      HEAP[$69] = $68;
      
      
      
      
      
      
      var $76 = HEAP[$element];
      var $77 = HEAP[HEAP[$self_addr + 20] + 12] + 4 * HEAP[$index];
      HEAP[$77] = $76;
      
      
      
      
      
      var $83 = HEAP[HEAP[$self_addr + 20] + 4] + 1;
      var $84 = HEAP[$self_addr + 20] + 4;
      HEAP[$84] = $83;
      
      var $86 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $86;
      $0 = __Py_NoneStruct;
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
  function _element_items($self, $args) {
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
      
      var $2 = _PyArg_ParseTuple($args_addr, __str29, allocate(1, "i32", ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20]] == __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $14 = _PyList_New(0);
      $0 = $14;
      __label__ = 6;
      break;
     case 5:
      
      
      
      
      var $19 = HEAP[HEAP[$self_addr + 20]];
      var $20 = _PyDict_Items($19);
      $0 = $20;
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
  function _element_keys($self, $args) {
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
      
      var $2 = _PyArg_ParseTuple($args_addr, __str30, allocate(1, "i32", ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20]] == __Py_NoneStruct) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $14 = _PyList_New(0);
      $0 = $14;
      __label__ = 6;
      break;
     case 5:
      
      
      
      
      var $19 = HEAP[HEAP[$self_addr + 20]];
      var $20 = _PyDict_Keys($19);
      $0 = $20;
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
  function _element_length($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
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
      
      
      
      
      
      $0 = HEAP[HEAP[$self_addr + 20] + 4];
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
  function _element_makeelement($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $elem;
      var $tag = __stackBase__;
      var $attrib = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str31, allocate([ $tag, 0, 0, 0, $attrib, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$attrib];
      var $5 = _PyDict_Copy($4);
      HEAP[$attrib] = $5;
      
      
      if (HEAP[$attrib] == 0) {
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
      var $8 = HEAP[$attrib];
      var $9 = HEAP[$tag];
      var $10 = _element_new($9, $8);
      $elem = $10;
      var $11 = HEAP[$attrib];
      
      
      var $14 = HEAP[$11] - 1;
      var $15 = $11;
      HEAP[$15] = $14;
      
      
      
      if (HEAP[$11] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$attrib] + 4] + 24];
      var $24 = HEAP[$attrib];
      FUNCTION_TABLE[$23]($24);
      __label__ = 6;
      break;
     case 6:
      
      $0 = $elem;
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
  function _element_reduce($self, $args) {
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
      
      var $2 = _PyArg_ParseTuple($args_addr, __str32, allocate(1, "i32", ALLOC_STACK));
      
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
      
      
      if (HEAP[_elementtree_copyelement_obj] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($6, __str33);
      $0 = 0;
      __label__ = 5;
      break;
     case 4:
      
      
      var $9 = _element_copy($self_addr, $args_addr);
      var $10 = HEAP[_elementtree_copyelement_obj];
      var $11 = _Py_BuildValue(__str34, allocate([ $10, 0, 0, 0, $9, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $11;
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
  function _element_remove($self, $args) {
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
      var $i;
      var $element = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str35, allocate([ _Element_Type, 0, 0, 0, $element, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
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
      __label__ = 16;
      break;
     case 4:
      $i = 0;
      __label__ = 8;
      break;
     case 5:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$self_addr + 20] + 12] + 4 * $i] == HEAP[$element]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      var $19 = HEAP[$element];
      
      
      
      
      
      
      
      var $27 = HEAP[HEAP[HEAP[$self_addr + 20] + 12] + 4 * $i];
      var $28 = _PyObject_Compare($27, $19);
      
      if ($28 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      var $31 = $i + 1;
      $i = $31;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20] + 4] > $i) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20] + 4] == $i) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $46 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($46, __str36);
      $0 = 0;
      __label__ = 16;
      break;
     case 11:
      
      
      
      
      
      
      
      var $54 = HEAP[HEAP[HEAP[$self_addr + 20] + 12] + 4 * $i];
      
      
      var $57 = HEAP[$54] - 1;
      var $58 = $54;
      HEAP[$58] = $57;
      
      
      
      if (HEAP[$54] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      
      
      
      
      var $73 = HEAP[HEAP[HEAP[HEAP[HEAP[$self_addr + 20] + 12] + 4 * $i] + 4] + 24];
      
      
      
      
      
      
      
      var $81 = HEAP[HEAP[HEAP[$self_addr + 20] + 12] + 4 * $i];
      FUNCTION_TABLE[$73]($81);
      __label__ = 13;
      break;
     case 13:
      
      
      
      
      
      var $87 = HEAP[HEAP[$self_addr + 20] + 4] - 1;
      var $88 = HEAP[$self_addr + 20] + 4;
      HEAP[$88] = $87;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20] + 4] > $i) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $109 = HEAP[HEAP[HEAP[$self_addr + 20] + 12] + 4 * ($i + 1)];
      
      var $111 = HEAP[HEAP[$self_addr + 20] + 12] + 4 * $i;
      HEAP[$111] = $109;
      
      var $113 = $i + 1;
      $i = $113;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20] + 4] > $i) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      var $122 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $122;
      $0 = __Py_NoneStruct;
      __label__ = 16;
      break;
     case 16:
      
      $retval = $0;
      var $retval17 = $retval;
      STACKTOP = __stackBase__;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element_repr($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $repr;
      var $tag;
      $self_addr = $self;
      
      
      var $3 = HEAP[$self_addr + 8];
      var $4 = _PyObject_Repr($3);
      $tag = $4;
      
      
      if ($tag == 0) {
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
      
      
      
      
      
      var $12 = _PyString_FromFormat(__str37, allocate([ $tag + 20, 0, 0, 0, $self_addr, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.ElementObject*", 0, 0, 0 ], ALLOC_STACK));
      $repr = $12;
      
      
      
      var $16 = HEAP[$tag] - 1;
      
      
      HEAP[$tag] = $16;
      
      
      
      
      if (HEAP[$tag] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $27 = HEAP[HEAP[$tag + 4] + 24];
      
      FUNCTION_TABLE[$27]($tag);
      __label__ = 4;
      break;
     case 4:
      
      $0 = $repr;
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
  function _element_set($self, $args) {
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
      var $attrib;
      var $key = __stackBase__;
      var $value = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str38, allocate([ $key, 0, 0, 0, $value, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $9 = _element_new_extra($self_addr, 0);
      __label__ = 4;
      break;
     case 4:
      
      var $11 = _element_get_attrib($self_addr);
      $attrib = $11;
      
      if ($11 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 9;
      break;
     case 6:
      var $13 = HEAP[$value];
      var $14 = HEAP[$key];
      
      var $16 = _PyDict_SetItem($attrib, $14, $13);
      
      if ($16 < 0) {
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
      
      var $19 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $19;
      $0 = __Py_NoneStruct;
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
  function _element_setitem($self_, $index, $item) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self__addr;
      var $index_addr;
      var $item_addr;
      var $retval;
      var $0;
      var $self;
      var $i;
      var $old;
      $self__addr = $self_;
      $index_addr = $index;
      $item_addr = $item;
      
      
      $self = $self__addr;
      
      
      
      
      if (HEAP[$self + 20] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($index_addr < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self + 20] + 4] <= $index_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $16 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($16, __str39);
      $0 = -1;
      __label__ = 11;
      break;
     case 4:
      
      
      
      
      
      
      
      
      $old = HEAP[HEAP[HEAP[$self + 20] + 12] + 4 * $index_addr];
      
      
      if ($item_addr != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      var $30 = HEAP[$item_addr] + 1;
      
      
      HEAP[$item_addr] = $30;
      
      
      
      
      
      
      var $39 = HEAP[HEAP[$self + 20] + 12] + 4 * $index_addr;
      
      HEAP[$39] = $item_addr;
      __label__ = 8;
      break;
     case 6:
      
      
      
      
      
      var $46 = HEAP[HEAP[$self + 20] + 4] - 1;
      var $47 = HEAP[$self + 20] + 4;
      HEAP[$47] = $46;
      
      $i = $index_addr;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self + 20] + 4] > $i) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $69 = HEAP[HEAP[HEAP[$self + 20] + 12] + 4 * ($i + 1)];
      
      var $71 = HEAP[HEAP[$self + 20] + 12] + 4 * $i;
      HEAP[$71] = $69;
      
      var $73 = $i + 1;
      $i = $73;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self + 20] + 4] > $i) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      var $84 = HEAP[$old] - 1;
      
      
      HEAP[$old] = $84;
      
      
      
      
      if (HEAP[$old] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $95 = HEAP[HEAP[$old + 4] + 24];
      
      FUNCTION_TABLE[$95]($old);
      __label__ = 10;
      break;
     case 10:
      $0 = 0;
      __label__ = 11;
      break;
     case 11:
      
      $retval = $0;
      var $retval12 = $retval;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element_subscr($self_, $item) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self__addr;
      var $item_addr;
      var $retval;
      var $0;
      var $self;
      var $i;
      var $start = __stackBase__;
      var $stop = __stackBase__ + 4;
      var $step = __stackBase__ + 8;
      var $slicelen = __stackBase__ + 12;
      var $cur;
      var $i11;
      var $list;
      var $item21;
      $self__addr = $self_;
      $item_addr = $item;
      
      
      $self = $self__addr;
      
      
      
      
      
      
      if (HEAP[HEAP[$item_addr + 4] + 48] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$item_addr + 4] + 84] & 131072) == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$item_addr + 4] + 48] + 152] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $24 = HEAP[_PyExc_IndexError];
      
      var $26 = _PyNumber_AsSsize_t($item_addr, $24);
      $i = $26;
      var $27 = $i;
      var $28 = $27 == -1;
      if ($28) {
        __lastLabel__ = 3;
        __label__ = 4;
        break;
      } else {
        __lastLabel__ = 3;
        __label__ = 7;
        break;
      }
     case 4:
      var $29 = _PyErr_Occurred();
      
      if ($29 != 0) {
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
      var $_pr = $i;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $31 = __lastLabel__ == 6 ? $_pr : $27;
      
      if ($31 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[$self + 20] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      
      var $43 = $i + HEAP[HEAP[$self + 20] + 4];
      $i = $43;
      __label__ = 10;
      break;
     case 10:
      
      
      var $46 = _element_getitem($self__addr, $i);
      $0 = $46;
      __label__ = 24;
      break;
     case 11:
      
      
      
      
      if (HEAP[$item_addr + 4] == _PySlice_Type) {
        __label__ = 12;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 12:
      
      
      
      
      if (HEAP[$self + 20] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $55 = _PyList_New(0);
      $0 = $55;
      __label__ = 24;
      break;
     case 14:
      
      
      
      
      var $60 = HEAP[HEAP[$self + 20] + 4];
      
      
      var $63 = _PySlice_GetIndicesEx($item_addr, $60, $start, $stop, $step, $slicelen);
      
      if ($63 < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $0 = 0;
      __label__ = 24;
      break;
     case 16:
      
      
      if (HEAP[$slicelen] <= 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $67 = _PyList_New(0);
      $0 = $67;
      __label__ = 24;
      break;
     case 18:
      var $68 = HEAP[$slicelen];
      var $69 = _PyList_New($68);
      $list = $69;
      
      
      if ($list == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      $0 = 0;
      __label__ = 24;
      break;
     case 20:
      
      $cur = HEAP[$start];
      $i11 = 0;
      
      
      
      if ($i11 < HEAP[$slicelen]) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      
      
      
      
      $item21 = HEAP[HEAP[HEAP[$self + 20] + 12] + 4 * $cur];
      
      
      
      var $87 = HEAP[$item21] + 1;
      
      
      HEAP[$item21] = $87;
      
      
      
      
      
      var $95 = HEAP[$list + 12] + 4 * $i11;
      
      HEAP[$95] = $item21;
      
      
      var $99 = $cur + HEAP[$step];
      $cur = $99;
      
      var $101 = $i11 + 1;
      $i11 = $101;
      
      
      
      if ($i11 < HEAP[$slicelen]) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      $0 = $list;
      __label__ = 24;
      break;
     case 23:
      var $106 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($106, __str40);
      $0 = 0;
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
  function _element_ass_subscr($self_, $item, $value) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self__addr;
      var $item_addr;
      var $value_addr;
      var $retval;
      var $iftmp_171;
      var $0;
      var $self;
      var $i;
      var $start = __stackBase__;
      var $stop = __stackBase__ + 4;
      var $step = __stackBase__ + 8;
      var $slicelen = __stackBase__ + 12;
      var $newlen;
      var $cur;
      var $i11;
      var $recycle;
      var $seq;
      var $element;
      $self__addr = $self_;
      $item_addr = $item;
      $value_addr = $value;
      
      
      $self = $self__addr;
      
      
      
      
      
      
      if (HEAP[HEAP[$item_addr + 4] + 48] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$item_addr + 4] + 84] & 131072) == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[HEAP[$item_addr + 4] + 48] + 152] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $24 = HEAP[_PyExc_IndexError];
      
      var $26 = _PyNumber_AsSsize_t($item_addr, $24);
      $i = $26;
      var $27 = $i;
      var $28 = $27 == -1;
      if ($28) {
        __lastLabel__ = 3;
        __label__ = 4;
        break;
      } else {
        __lastLabel__ = 3;
        __label__ = 7;
        break;
      }
     case 4:
      var $29 = _PyErr_Occurred();
      
      if ($29 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 58;
      break;
     case 6:
      var $_pr = $i;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $31 = __lastLabel__ == 6 ? $_pr : $27;
      
      if ($31 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[$self + 20] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      
      var $43 = $i + HEAP[HEAP[$self + 20] + 4];
      $i = $43;
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $47 = _element_setitem($self__addr, $i, $value_addr);
      $0 = $47;
      __label__ = 58;
      break;
     case 11:
      
      
      
      
      if (HEAP[$item_addr + 4] == _PySlice_Type) {
        __label__ = 12;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 12:
      $recycle = 0;
      $seq = 0;
      
      
      
      
      if (HEAP[$self + 20] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      var $57 = _element_new_extra($self, 0);
      __label__ = 14;
      break;
     case 14:
      
      
      
      
      var $62 = HEAP[HEAP[$self + 20] + 4];
      
      
      var $65 = _PySlice_GetIndicesEx($item_addr, $62, $start, $stop, $step, $slicelen);
      
      if ($65 < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $0 = -1;
      __label__ = 58;
      break;
     case 16:
      
      
      if ($value_addr == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      $newlen = 0;
      __label__ = 21;
      break;
     case 18:
      
      var $70 = _PySequence_Fast($value_addr, __str1);
      $seq = $70;
      
      
      if ($seq == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      var $77 = HEAP[HEAP[$value_addr + 4] + 12];
      var $78 = HEAP[_PyExc_TypeError];
      var $79 = _PyErr_Format($78, __str10, allocate([ $77, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
      __label__ = 58;
      break;
     case 20:
      
      var $81 = _PySequence_Size($seq);
      $newlen = $81;
      __label__ = 21;
      break;
     case 21:
      
      
      if (HEAP[$step] != 1) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      
      if ($newlen != HEAP[$slicelen]) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      var $87 = HEAP[$slicelen];
      var $88 = HEAP[_PyExc_ValueError];
      
      var $90 = _PyErr_Format($88, __str41, allocate([ $newlen, 0, 0, 0, $87, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
      __label__ = 58;
      break;
     case 24:
      var $91 = HEAP[$slicelen];
      
      
      if ($newlen > $91) {
        __lastLabel__ = 24;
        __label__ = 25;
        break;
      } else {
        __lastLabel__ = 24;
        __label__ = 31;
        break;
      }
     case 25:
      
      
      var $96 = $newlen - HEAP[$slicelen];
      
      var $98 = _element_resize($self, $96);
      
      if ($98 < 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 26:
      
      
      if ($seq != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 27:
      
      
      
      var $105 = HEAP[$seq] - 1;
      
      
      HEAP[$seq] = $105;
      
      
      
      
      if (HEAP[$seq] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $116 = HEAP[HEAP[$seq + 4] + 24];
      
      FUNCTION_TABLE[$116]($seq);
      __label__ = 29;
      break;
     case 29:
      $0 = -1;
      __label__ = 58;
      break;
     case 30:
      var $_pr1 = HEAP[$slicelen];
      __lastLabel__ = 30;
      __label__ = 31;
      break;
     case 31:
      var $118 = __lastLabel__ == 30 ? $_pr1 : $91;
      
      if ($118 > 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 32:
      var $120 = HEAP[$slicelen];
      var $121 = _PyList_New($120);
      $recycle = $121;
      
      
      if ($recycle == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 33:
      
      
      if ($seq != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 34:
      
      
      
      var $129 = HEAP[$seq] - 1;
      
      
      HEAP[$seq] = $129;
      
      
      
      
      if (HEAP[$seq] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $140 = HEAP[HEAP[$seq + 4] + 24];
      
      FUNCTION_TABLE[$140]($seq);
      __label__ = 36;
      break;
     case 36:
      $0 = -1;
      __label__ = 58;
      break;
     case 37:
      
      $cur = HEAP[$start];
      $i11 = 0;
      
      
      
      if ($i11 < HEAP[$slicelen]) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      
      
      
      
      
      
      
      
      var $157 = HEAP[HEAP[HEAP[$self + 20] + 12] + 4 * $cur];
      
      var $159 = HEAP[$recycle + 12] + 4 * $i11;
      HEAP[$159] = $157;
      
      
      var $162 = $cur + HEAP[$step];
      $cur = $162;
      
      var $164 = $i11 + 1;
      $i11 = $164;
      
      
      
      if ($i11 < HEAP[$slicelen]) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      
      
      if ($newlen < HEAP[$slicelen]) {
        __label__ = 40;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 40:
      
      $i11 = HEAP[$stop];
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self + 20] + 4] > $i11) {
        __label__ = 41;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 41:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $196 = HEAP[HEAP[HEAP[$self + 20] + 12] + 4 * $i11];
      var $197 = HEAP[HEAP[$self + 20] + 12] + 4 * ($newlen + $i11 + (0 - HEAP[$slicelen]));
      HEAP[$197] = $196;
      
      var $199 = $i11 + 1;
      $i11 = $199;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$self + 20] + 4] > $i11) {
        __label__ = 41;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 42:
      
      
      
      if ($newlen > HEAP[$slicelen]) {
        __label__ = 43;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 43:
      
      
      
      
      
      
      $i11 = HEAP[HEAP[$self + 20] + 4] - 1;
      
      
      
      if ($i11 >= HEAP[$stop]) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $236 = HEAP[HEAP[HEAP[$self + 20] + 12] + 4 * $i11];
      var $237 = HEAP[HEAP[$self + 20] + 12] + 4 * ($newlen + $i11 + (0 - HEAP[$slicelen]));
      HEAP[$237] = $236;
      
      var $239 = $i11 - 1;
      $i11 = $239;
      
      
      
      if ($i11 >= HEAP[$stop]) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 45:
      
      $cur = HEAP[$start];
      $i11 = 0;
      
      
      
      if ($i11 < $newlen) {
        __label__ = 46;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 46:
      
      
      
      
      
      
      
      var $254 = $seq;
      if ((HEAP[HEAP[$seq + 4] + 84] & 33554432) != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      
      
      
      
      
      
      $iftmp_171 = HEAP[HEAP[$254 + 12] + 4 * $i11];
      __label__ = 49;
      break;
     case 48:
      
      
      
      
      
      $iftmp_171 = HEAP[$254 + 12 + $i11 * 4];
      __label__ = 49;
      break;
     case 49:
      
      $element = $iftmp_171;
      
      
      
      var $270 = HEAP[$element] + 1;
      
      
      HEAP[$element] = $270;
      
      
      
      
      
      
      var $279 = HEAP[HEAP[$self + 20] + 12] + 4 * $cur;
      
      HEAP[$279] = $element;
      
      
      var $283 = $cur + HEAP[$step];
      $cur = $283;
      
      var $285 = $i11 + 1;
      $i11 = $285;
      
      
      
      if ($i11 < $newlen) {
        __label__ = 46;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 50:
      
      
      
      
      
      
      
      
      
      
      
      
      var $300 = 0 - HEAP[$slicelen] + HEAP[HEAP[$self + 20] + 4] + $newlen;
      var $301 = HEAP[$self + 20] + 4;
      HEAP[$301] = $300;
      
      
      if ($seq != 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 51:
      
      
      
      var $307 = HEAP[$seq] - 1;
      
      
      HEAP[$seq] = $307;
      
      
      
      
      if (HEAP[$seq] == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      
      
      
      
      var $318 = HEAP[HEAP[$seq + 4] + 24];
      
      FUNCTION_TABLE[$318]($seq);
      __label__ = 53;
      break;
     case 53:
      
      
      if ($recycle != 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 54:
      
      
      
      var $325 = HEAP[$recycle] - 1;
      
      
      HEAP[$recycle] = $325;
      
      
      
      
      if (HEAP[$recycle] == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      
      
      
      
      var $336 = HEAP[HEAP[$recycle + 4] + 24];
      
      FUNCTION_TABLE[$336]($recycle);
      __label__ = 56;
      break;
     case 56:
      $0 = 0;
      __label__ = 58;
      break;
     case 57:
      var $338 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($338, __str40);
      $0 = -1;
      __label__ = 58;
      break;
     case 58:
      
      $retval = $0;
      var $retval62 = $retval;
      STACKTOP = __stackBase__;
      return $retval62;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element_getattr($self, $name) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $name_addr;
      var $retval;
      var $0;
      var $res;
      $self_addr = $self;
      $name_addr = $name;
      
      var $2 = _strcmp($name_addr, __str59);
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $res = HEAP[$self_addr + 8];
      
      
      
      var $10 = HEAP[$res] + 1;
      
      
      HEAP[$res] = $10;
      
      $0 = $res;
      __label__ = 16;
      break;
     case 2:
      
      var $15 = _strcmp($name_addr, __str60);
      
      var $17 = $self_addr;
      if ($15 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $18 = _element_get_text($17);
      $res = $18;
      
      
      
      var $22 = HEAP[$res] + 1;
      
      
      HEAP[$res] = $22;
      
      $0 = $res;
      __label__ = 16;
      break;
     case 4:
      
      
      var $28 = _Py_FindMethod(_element_methods, $17, $name_addr);
      $res = $28;
      
      
      if ($res != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      $0 = $res;
      __label__ = 16;
      break;
     case 6:
      _PyErr_Clear();
      
      var $33 = _strcmp($name_addr, __str61);
      
      if ($33 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      var $36 = _element_get_tail($self_addr);
      $res = $36;
      __lastLabel__ = 7;
      __label__ = 13;
      break;
     case 8:
      
      var $38 = _strcmp($name_addr, __str62);
      
      if ($38 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $45 = _element_new_extra($self_addr, 0);
      __label__ = 11;
      break;
     case 11:
      
      var $47 = _element_get_attrib($self_addr);
      $res = $47;
      __lastLabel__ = 11;
      __label__ = 13;
      break;
     case 12:
      var $48 = HEAP[_PyExc_AttributeError];
      
      _PyErr_SetString($48, $name_addr);
      $0 = 0;
      __label__ = 16;
      break;
     case 13:
      var $50 = __lastLabel__ == 11 ? $47 : $36;
      
      if ($50 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = 0;
      __label__ = 16;
      break;
     case 15:
      
      
      
      var $55 = HEAP[$res] + 1;
      
      
      HEAP[$res] = $55;
      
      $0 = $res;
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
  function _element_setattr($self, $name, $value) {
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
      
      
      if ($value_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_AttributeError];
      _PyErr_SetString($3, __str63);
      $0 = -1;
      __label__ = 22;
      break;
     case 2:
      
      var $5 = _strcmp($name_addr, __str59);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      var $9 = HEAP[$self_addr + 8];
      
      
      var $12 = HEAP[$9] - 1;
      var $13 = $9;
      HEAP[$13] = $12;
      
      
      
      if (HEAP[$9] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $23 = HEAP[HEAP[HEAP[$self_addr + 8] + 4] + 24];
      
      
      var $26 = HEAP[$self_addr + 8];
      FUNCTION_TABLE[$23]($26);
      __label__ = 5;
      break;
     case 5:
      
      
      
      HEAP[$self_addr + 8] = $value_addr;
      
      
      
      
      
      var $35 = HEAP[HEAP[$self_addr + 8]] + 1;
      var $36 = HEAP[$self_addr + 8];
      HEAP[$36] = $35;
      __label__ = 21;
      break;
     case 6:
      
      var $38 = _strcmp($name_addr, __str60);
      
      if ($38 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      
      var $44 = HEAP[$self_addr + 12] & -2;
      var $45 = $44;
      
      
      var $48 = HEAP[$45] - 1;
      var $49 = $45;
      HEAP[$49] = $48;
      
      
      
      if (HEAP[$45] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $57 = HEAP[$self_addr + 12] & -2;
      
      
      
      
      var $62 = HEAP[HEAP[$57 + 4] + 24];
      
      
      
      
      var $67 = HEAP[$self_addr + 12] & -2;
      var $68 = $67;
      FUNCTION_TABLE[$62]($68);
      __label__ = 9;
      break;
     case 9:
      
      
      
      HEAP[$self_addr + 12] = $value_addr;
      
      
      
      
      
      var $77 = HEAP[HEAP[$self_addr + 12]] + 1;
      var $78 = HEAP[$self_addr + 12];
      HEAP[$78] = $77;
      __label__ = 21;
      break;
     case 10:
      
      var $80 = _strcmp($name_addr, __str61);
      
      if ($80 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      
      var $86 = HEAP[$self_addr + 16] & -2;
      var $87 = $86;
      
      
      var $90 = HEAP[$87] - 1;
      var $91 = $87;
      HEAP[$91] = $90;
      
      
      
      if (HEAP[$87] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $99 = HEAP[$self_addr + 16] & -2;
      
      
      
      
      var $104 = HEAP[HEAP[$99 + 4] + 24];
      
      
      
      
      var $109 = HEAP[$self_addr + 16] & -2;
      var $110 = $109;
      FUNCTION_TABLE[$104]($110);
      __label__ = 13;
      break;
     case 13:
      
      
      
      HEAP[$self_addr + 16] = $value_addr;
      
      
      
      
      
      var $119 = HEAP[HEAP[$self_addr + 16]] + 1;
      var $120 = HEAP[$self_addr + 16];
      HEAP[$120] = $119;
      __label__ = 21;
      break;
     case 14:
      
      var $122 = _strcmp($name_addr, __str62);
      
      if ($122 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 15:
      
      
      
      
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      var $129 = _element_new_extra($self_addr, 0);
      __label__ = 17;
      break;
     case 17:
      
      
      
      
      var $134 = HEAP[HEAP[$self_addr + 20]];
      
      
      var $137 = HEAP[$134] - 1;
      var $138 = $134;
      HEAP[$138] = $137;
      
      
      
      if (HEAP[$134] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      
      var $150 = HEAP[HEAP[HEAP[HEAP[$self_addr + 20]] + 4] + 24];
      
      
      
      
      var $155 = HEAP[HEAP[$self_addr + 20]];
      FUNCTION_TABLE[$150]($155);
      __label__ = 19;
      break;
     case 19:
      
      
      
      var $159 = HEAP[$self_addr + 20];
      
      HEAP[$159] = $value_addr;
      
      
      
      
      
      
      
      var $168 = HEAP[HEAP[HEAP[$self_addr + 20]]] + 1;
      var $169 = HEAP[HEAP[$self_addr + 20]];
      HEAP[$169] = $168;
      __label__ = 21;
      break;
     case 20:
      var $170 = HEAP[_PyExc_AttributeError];
      
      _PyErr_SetString($170, $name_addr);
      $0 = -1;
      __label__ = 22;
      break;
     case 21:
      $0 = 0;
      __label__ = 22;
      break;
     case 22:
      
      $retval = $0;
      var $retval22 = $retval;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _treebuilder_new() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval;
      var $0;
      var $self;
      var $1 = __PyObject_New(_TreeBuilder_Type);
      
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
      __label__ = 3;
      break;
     case 2:
      
      
      HEAP[$self + 8] = 0;
      
      var $8 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $8;
      
      
      HEAP[$self + 12] = __Py_NoneStruct;
      
      var $12 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $12;
      
      
      HEAP[$self + 16] = __Py_NoneStruct;
      
      
      HEAP[$self + 20] = 0;
      var $17 = _PyList_New(20);
      
      
      HEAP[$self + 24] = $17;
      
      
      HEAP[$self + 28] = 0;
      
      
      HEAP[$self + 32] = 0;
      
      
      HEAP[$self + 40] = 0;
      
      
      var $28 = HEAP[$self + 40];
      
      
      HEAP[$self + 36] = $28;
      
      
      HEAP[$self + 48] = 0;
      
      
      var $35 = HEAP[$self + 48];
      
      
      HEAP[$self + 44] = $35;
      
      
      $0 = $self;
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
  function _treebuilder($self_, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self__addr;
      var $args_addr;
      var $retval;
      var $0;
      $self__addr = $self_;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str65, allocate(1, "i32", ALLOC_STACK));
      
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
      var $4 = _treebuilder_new();
      $0 = $4;
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
  function _treebuilder_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 48] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[$self_addr + 48];
      
      
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
      
      
      
      
      
      
      var $20 = HEAP[HEAP[HEAP[$self_addr + 48] + 4] + 24];
      
      
      var $23 = HEAP[$self_addr + 48];
      FUNCTION_TABLE[$20]($23);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$self_addr + 44] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $30 = HEAP[$self_addr + 44];
      
      
      var $33 = HEAP[$30] - 1;
      var $34 = $30;
      HEAP[$34] = $33;
      
      
      
      if (HEAP[$30] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$self_addr + 44] + 4] + 24];
      
      
      var $47 = HEAP[$self_addr + 44];
      FUNCTION_TABLE[$44]($47);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$self_addr + 40] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $54 = HEAP[$self_addr + 40];
      
      
      var $57 = HEAP[$54] - 1;
      var $58 = $54;
      HEAP[$58] = $57;
      
      
      
      if (HEAP[$54] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $68 = HEAP[HEAP[HEAP[$self_addr + 40] + 4] + 24];
      
      
      var $71 = HEAP[$self_addr + 40];
      FUNCTION_TABLE[$68]($71);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[$self_addr + 36] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $78 = HEAP[$self_addr + 36];
      
      
      var $81 = HEAP[$78] - 1;
      var $82 = $78;
      HEAP[$82] = $81;
      
      
      
      if (HEAP[$78] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      var $92 = HEAP[HEAP[HEAP[$self_addr + 36] + 4] + 24];
      
      
      var $95 = HEAP[$self_addr + 36];
      FUNCTION_TABLE[$92]($95);
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
      
      
      var $102 = HEAP[$self_addr + 32];
      
      
      var $105 = HEAP[$102] - 1;
      var $106 = $102;
      HEAP[$106] = $105;
      
      
      
      if (HEAP[$102] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      
      var $116 = HEAP[HEAP[HEAP[$self_addr + 32] + 4] + 24];
      
      
      var $119 = HEAP[$self_addr + 32];
      FUNCTION_TABLE[$116]($119);
      __label__ = 15;
      break;
     case 15:
      
      
      var $122 = HEAP[$self_addr + 24];
      
      
      var $125 = HEAP[$122] - 1;
      var $126 = $122;
      HEAP[$126] = $125;
      
      
      
      if (HEAP[$122] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      
      var $136 = HEAP[HEAP[HEAP[$self_addr + 24] + 4] + 24];
      
      
      var $139 = HEAP[$self_addr + 24];
      FUNCTION_TABLE[$136]($139);
      __label__ = 17;
      break;
     case 17:
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      
      
      var $146 = HEAP[$self_addr + 20];
      
      
      var $149 = HEAP[$146] - 1;
      var $150 = $146;
      HEAP[$150] = $149;
      
      
      
      if (HEAP[$146] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      
      var $160 = HEAP[HEAP[HEAP[$self_addr + 20] + 4] + 24];
      
      
      var $163 = HEAP[$self_addr + 20];
      FUNCTION_TABLE[$160]($163);
      __label__ = 20;
      break;
     case 20:
      
      
      
      var $167 = HEAP[$self_addr + 16];
      
      
      var $170 = HEAP[$167] - 1;
      var $171 = $167;
      HEAP[$171] = $170;
      
      
      
      if (HEAP[$167] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      
      
      
      var $182 = HEAP[HEAP[HEAP[$self_addr + 16] + 4] + 24];
      
      
      
      var $186 = HEAP[$self_addr + 16];
      FUNCTION_TABLE[$182]($186);
      __label__ = 22;
      break;
     case 22:
      
      
      
      var $190 = HEAP[$self_addr + 12];
      
      
      var $193 = HEAP[$190] - 1;
      var $194 = $190;
      HEAP[$194] = $193;
      
      
      
      if (HEAP[$190] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      
      
      
      var $205 = HEAP[HEAP[HEAP[$self_addr + 12] + 4] + 24];
      
      
      
      var $209 = HEAP[$self_addr + 12];
      FUNCTION_TABLE[$205]($209);
      __label__ = 24;
      break;
     case 24:
      
      
      
      
      if (HEAP[$self_addr + 8] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 25:
      
      
      var $216 = HEAP[$self_addr + 8];
      
      
      var $219 = HEAP[$216] - 1;
      var $220 = $216;
      HEAP[$220] = $219;
      
      
      
      if (HEAP[$216] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      
      
      var $230 = HEAP[HEAP[HEAP[$self_addr + 8] + 4] + 24];
      
      
      var $233 = HEAP[$self_addr + 8];
      FUNCTION_TABLE[$230]($233);
      __label__ = 27;
      break;
     case 27:
      
      
      _PyObject_Free($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _treebuilder_handle_xml($self, $encoding, $standalone) {
    
    var $self_addr;
    var $encoding_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $encoding_addr = $encoding;
    
    var $2 = HEAP[__Py_NoneStruct] + 1;
    HEAP[__Py_NoneStruct] = $2;
    $0 = __Py_NoneStruct;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _treebuilder_handle_start($self, $tag, $attrib) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $tag_addr;
      var $attrib_addr;
      var $retval;
      var $0;
      var $node;
      var $this;
      var $res;
      var $action;
      $self_addr = $self;
      $tag_addr = $tag;
      $attrib_addr = $attrib;
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      var $14 = HEAP[$self_addr + 16];
      if (HEAP[$self_addr + 12] == HEAP[$self_addr + 16]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      var $18 = HEAP[$14 + 12] & -2;
      var $19 = $18;
      
      
      var $22 = HEAP[$19] - 1;
      var $23 = $19;
      HEAP[$23] = $22;
      
      
      
      if (HEAP[$19] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $33 = HEAP[HEAP[$self_addr + 16] + 12] & -2;
      
      
      
      
      var $38 = HEAP[HEAP[$33 + 4] + 24];
      
      
      
      
      
      
      var $45 = HEAP[HEAP[$self_addr + 16] + 12] & -2;
      var $46 = $45;
      FUNCTION_TABLE[$38]($46);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      
      
      var $54 = HEAP[$self_addr + 20] & -2;
      
      
      
      
      
      
      
      
      var $63 = HEAP[HEAP[$self_addr + 20] + 4] == _PyList_Type | $54;
      var $64 = HEAP[$self_addr + 16] + 12;
      HEAP[$64] = $63;
      __label__ = 8;
      break;
     case 5:
      
      
      
      var $68 = HEAP[$14 + 16] & -2;
      var $69 = $68;
      
      
      var $72 = HEAP[$69] - 1;
      var $73 = $69;
      HEAP[$73] = $72;
      
      
      
      if (HEAP[$69] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      
      var $83 = HEAP[HEAP[$self_addr + 16] + 16] & -2;
      
      
      
      
      var $88 = HEAP[HEAP[$83 + 4] + 24];
      
      
      
      
      
      
      var $95 = HEAP[HEAP[$self_addr + 16] + 16] & -2;
      var $96 = $95;
      FUNCTION_TABLE[$88]($96);
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      
      
      
      var $104 = HEAP[$self_addr + 20] & -2;
      
      
      
      
      
      
      
      
      var $113 = HEAP[HEAP[$self_addr + 20] + 4] == _PyList_Type | $104;
      var $114 = HEAP[$self_addr + 16] + 16;
      HEAP[$114] = $113;
      __label__ = 8;
      break;
     case 8:
      
      
      HEAP[$self_addr + 20] = 0;
      __label__ = 9;
      break;
     case 9:
      
      
      var $119 = _element_new($tag_addr, $attrib_addr);
      $node = $119;
      
      if ($119 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = 0;
      __label__ = 33;
      break;
     case 11:
      
      
      
      
      $this = HEAP[$self_addr + 12];
      
      
      if ($this != __Py_NoneStruct) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      var $130 = _element_add_subelement($this, $node);
      
      if ($130 < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      
      
      
      
      if (HEAP[$self_addr + 8] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $136 = HEAP[_elementtree_parseerror_obj];
      _PyErr_SetString($136, __str66);
      __label__ = 30;
      break;
     case 15:
      
      
      
      var $140 = HEAP[$node] + 1;
      
      
      HEAP[$node] = $140;
      
      
      
      HEAP[$self_addr + 8] = $node;
      __label__ = 16;
      break;
     case 16:
      
      
      
      
      
      
      
      
      
      
      var $156 = $self_addr;
      if (HEAP[$self_addr + 28] < HEAP[HEAP[$self_addr + 24] + 8]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      var $158 = HEAP[$156 + 28];
      
      
      var $161 = HEAP[$self_addr + 24];
      
      var $163 = _PyList_SetItem($161, $158, $this);
      
      if ($163 < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      var $168 = HEAP[$this] + 1;
      
      
      HEAP[$this] = $168;
      __label__ = 20;
      break;
     case 19:
      
      var $172 = HEAP[$156 + 24];
      
      var $174 = _PyList_Append($172, $this);
      
      if ($174 < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      var $179 = HEAP[$self_addr + 28] + 1;
      
      
      HEAP[$self_addr + 28] = $179;
      
      
      
      var $185 = HEAP[$this] - 1;
      
      
      HEAP[$this] = $185;
      
      
      
      
      if (HEAP[$this] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $196 = HEAP[HEAP[$this + 4] + 24];
      
      FUNCTION_TABLE[$196]($this);
      __label__ = 22;
      break;
     case 22:
      
      
      
      var $201 = HEAP[$node] + 1;
      
      
      HEAP[$node] = $201;
      
      
      
      
      HEAP[$self_addr + 12] = $node;
      
      
      
      var $211 = HEAP[$self_addr + 16];
      
      
      var $214 = HEAP[$211] - 1;
      var $215 = $211;
      HEAP[$215] = $214;
      
      
      
      if (HEAP[$211] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      
      
      
      var $226 = HEAP[HEAP[HEAP[$self_addr + 16] + 4] + 24];
      
      
      
      var $230 = HEAP[$self_addr + 16];
      FUNCTION_TABLE[$226]($230);
      __label__ = 24;
      break;
     case 24:
      
      
      
      var $234 = HEAP[$node] + 1;
      
      
      HEAP[$node] = $234;
      
      
      
      
      HEAP[$self_addr + 16] = $node;
      
      
      
      
      if (HEAP[$self_addr + 36] != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 25:
      
      
      
      $action = HEAP[$self_addr + 36];
      var $248 = _PyTuple_New(2);
      $res = $248;
      
      
      if ($res != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 26:
      
      
      
      var $254 = HEAP[$action] + 1;
      
      
      HEAP[$action] = $254;
      
      
      
      
      
      HEAP[$res + 12] = $action;
      
      
      
      var $265 = HEAP[$node] + 1;
      
      
      HEAP[$node] = $265;
      
      
      
      
      
      HEAP[$res + 12 + 4] = $node;
      
      
      var $275 = HEAP[$self_addr + 32];
      
      var $277 = _PyList_Append($275, $res);
      
      
      
      var $281 = HEAP[$res] - 1;
      
      
      HEAP[$res] = $281;
      
      
      
      
      if (HEAP[$res] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 27:
      
      
      
      
      var $292 = HEAP[HEAP[$res + 4] + 24];
      
      FUNCTION_TABLE[$292]($res);
      __label__ = 29;
      break;
     case 28:
      _PyErr_Clear();
      __label__ = 29;
      break;
     case 29:
      
      $0 = $node;
      __label__ = 33;
      break;
     case 30:
      
      
      
      var $298 = HEAP[$node] - 1;
      
      
      HEAP[$node] = $298;
      
      
      
      
      if (HEAP[$node] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $309 = HEAP[HEAP[$node + 4] + 24];
      
      FUNCTION_TABLE[$309]($node);
      __label__ = 32;
      break;
     case 32:
      $0 = 0;
      __label__ = 33;
      break;
     case 33:
      
      $retval = $0;
      var $retval34 = $retval;
      return $retval34;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _treebuilder_handle_data($self, $data) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $data_addr;
      var $retval;
      var $0;
      var $size;
      var $list;
      $self_addr = $self;
      $data_addr = $data;
      
      
      
      
      var $5 = $self_addr;
      if (HEAP[$self_addr + 20] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      if (HEAP[$5 + 16] == __Py_NoneStruct) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $10 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $10;
      $0 = __Py_NoneStruct;
      __label__ = 18;
      break;
     case 3:
      
      
      
      var $14 = HEAP[$data_addr] + 1;
      
      
      HEAP[$data_addr] = $14;
      
      
      
      HEAP[$self_addr + 20] = $data_addr;
      __label__ = 17;
      break;
     case 4:
      
      
      
      
      
      if (HEAP[HEAP[$5 + 20] + 4] != _PyString_Type) {
        __label__ = 11;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20]] != 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      if (HEAP[$data_addr + 4] != _PyString_Type) {
        __label__ = 11;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      if (HEAP[$data_addr + 8] != 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      $size = HEAP[HEAP[$self_addr + 20] + 8];
      
      
      
      
      var $50 = __PyString_Resize($self_addr + 20, $size + 1);
      
      if ($50 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = 0;
      __label__ = 18;
      break;
     case 10:
      
      
      
      
      
      
      
      
      
      var $61 = HEAP[$data_addr + 20];
      
      var $63 = HEAP[$self_addr + 20] + 20 + $size;
      HEAP[$63] = $61;
      __label__ = 17;
      break;
     case 11:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 20] + 4] == _PyList_Type) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      var $72 = HEAP[$self_addr + 20];
      
      var $74 = _PyList_Append($72, $data_addr);
      
      if ($74 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 13:
      $0 = 0;
      __label__ = 18;
      break;
     case 14:
      var $76 = _PyList_New(2);
      $list = $76;
      
      
      if ($list == 0) {
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
      
      
      
      
      
      
      var $85 = HEAP[$self_addr + 20];
      var $86 = HEAP[$list + 12];
      HEAP[$86] = $85;
      
      
      
      var $90 = HEAP[$data_addr] + 1;
      
      
      HEAP[$data_addr] = $90;
      
      
      
      
      var $97 = HEAP[$list + 12] + 4;
      
      HEAP[$97] = $data_addr;
      
      
      
      HEAP[$self_addr + 20] = $list;
      __label__ = 17;
      break;
     case 17:
      
      var $103 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $103;
      $0 = __Py_NoneStruct;
      __label__ = 18;
      break;
     case 18:
      
      $retval = $0;
      var $retval19 = $retval;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _treebuilder_handle_end($self, $tag) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $tag_addr;
      var $retval;
      var $0;
      var $item;
      var $res;
      var $action;
      var $node;
      $self_addr = $self;
      $tag_addr = $tag;
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      var $14 = HEAP[$self_addr + 16];
      if (HEAP[$self_addr + 12] == HEAP[$self_addr + 16]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      var $18 = HEAP[$14 + 12] & -2;
      var $19 = $18;
      
      
      var $22 = HEAP[$19] - 1;
      var $23 = $19;
      HEAP[$23] = $22;
      
      
      
      if (HEAP[$19] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $33 = HEAP[HEAP[$self_addr + 16] + 12] & -2;
      
      
      
      
      var $38 = HEAP[HEAP[$33 + 4] + 24];
      
      
      
      
      
      
      var $45 = HEAP[HEAP[$self_addr + 16] + 12] & -2;
      var $46 = $45;
      FUNCTION_TABLE[$38]($46);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      
      
      var $54 = HEAP[$self_addr + 20] & -2;
      
      
      
      
      
      
      
      
      var $63 = HEAP[HEAP[$self_addr + 20] + 4] == _PyList_Type | $54;
      var $64 = HEAP[$self_addr + 16] + 12;
      HEAP[$64] = $63;
      __label__ = 8;
      break;
     case 5:
      
      
      
      var $68 = HEAP[$14 + 16] & -2;
      var $69 = $68;
      
      
      var $72 = HEAP[$69] - 1;
      var $73 = $69;
      HEAP[$73] = $72;
      
      
      
      if (HEAP[$69] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      
      var $83 = HEAP[HEAP[$self_addr + 16] + 16] & -2;
      
      
      
      
      var $88 = HEAP[HEAP[$83 + 4] + 24];
      
      
      
      
      
      
      var $95 = HEAP[HEAP[$self_addr + 16] + 16] & -2;
      var $96 = $95;
      FUNCTION_TABLE[$88]($96);
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      
      
      
      var $104 = HEAP[$self_addr + 20] & -2;
      
      
      
      
      
      
      
      
      var $113 = HEAP[HEAP[$self_addr + 20] + 4] == _PyList_Type | $104;
      var $114 = HEAP[$self_addr + 16] + 16;
      HEAP[$114] = $113;
      __label__ = 8;
      break;
     case 8:
      
      
      HEAP[$self_addr + 20] = 0;
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[$self_addr + 28] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $121 = HEAP[_PyExc_IndexError];
      _PyErr_SetString($121, __str67);
      $0 = 0;
      __label__ = 19;
      break;
     case 11:
      
      
      
      var $125 = HEAP[$self_addr + 28] - 1;
      
      
      HEAP[$self_addr + 28] = $125;
      
      
      
      
      
      
      
      
      
      
      
      $item = HEAP[HEAP[HEAP[$self_addr + 24] + 12] + 4 * HEAP[$self_addr + 28]];
      
      
      
      var $142 = HEAP[$item] + 1;
      
      
      HEAP[$item] = $142;
      
      
      
      var $148 = HEAP[$self_addr + 16];
      
      
      var $151 = HEAP[$148] - 1;
      var $152 = $148;
      HEAP[$152] = $151;
      
      
      
      if (HEAP[$148] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      var $163 = HEAP[HEAP[HEAP[$self_addr + 16] + 4] + 24];
      
      
      
      var $167 = HEAP[$self_addr + 16];
      FUNCTION_TABLE[$163]($167);
      __label__ = 13;
      break;
     case 13:
      
      
      var $170 = HEAP[$self_addr + 12];
      
      
      HEAP[$self_addr + 16] = $170;
      
      
      
      
      HEAP[$self_addr + 12] = $item;
      
      
      
      
      if (HEAP[$self_addr + 40] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      
      
      
      $action = HEAP[$self_addr + 40];
      
      
      
      
      $node = HEAP[$self_addr + 16];
      var $188 = _PyTuple_New(2);
      $res = $188;
      
      
      if ($res != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      var $194 = HEAP[$action] + 1;
      
      
      HEAP[$action] = $194;
      
      
      
      
      
      HEAP[$res + 12] = $action;
      
      
      
      var $205 = HEAP[$node] + 1;
      
      
      HEAP[$node] = $205;
      
      
      
      
      
      HEAP[$res + 12 + 4] = $node;
      
      
      var $215 = HEAP[$self_addr + 32];
      
      var $217 = _PyList_Append($215, $res);
      
      
      
      var $221 = HEAP[$res] - 1;
      
      
      HEAP[$res] = $221;
      
      
      
      
      if (HEAP[$res] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      
      var $232 = HEAP[HEAP[$res + 4] + 24];
      
      FUNCTION_TABLE[$232]($res);
      __label__ = 18;
      break;
     case 17:
      _PyErr_Clear();
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      
      
      var $240 = HEAP[HEAP[$self_addr + 16]] + 1;
      var $241 = HEAP[$self_addr + 16];
      HEAP[$241] = $240;
      
      
      
      
      $0 = HEAP[$self_addr + 16];
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
  function _treebuilder_handle_namespace($self, $start, $prefix, $uri) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $start_addr;
      var $prefix_addr;
      var $uri_addr;
      var $res;
      var $action;
      var $parcel;
      $self_addr = $self;
      $start_addr = $start;
      $prefix_addr = $prefix;
      $uri_addr = $uri;
      
      
      
      
      if (HEAP[$self_addr + 32] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $6 = $self_addr;
      if ($start_addr != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      if (HEAP[$6 + 44] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      $action = HEAP[$self_addr + 44];
      
      
      var $15 = _Py_BuildValue(__str68, allocate([ $prefix_addr, 0, 0, 0, $uri_addr, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $parcel = $15;
      
      
      if ($parcel == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $21 = HEAP[$action] + 1;
      
      
      HEAP[$action] = $21;
      __label__ = 7;
      break;
     case 5:
      
      
      
      if (HEAP[$6 + 48] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      $action = HEAP[$self_addr + 48];
      
      
      
      var $33 = HEAP[$action] + 1;
      
      
      HEAP[$action] = $33;
      $parcel = __Py_NoneStruct;
      
      
      
      var $39 = HEAP[$parcel] + 1;
      
      
      HEAP[$parcel] = $39;
      __label__ = 7;
      break;
     case 7:
      var $42 = _PyTuple_New(2);
      $res = $42;
      
      if ($42 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      
      
      HEAP[$res + 12] = $action;
      
      
      
      
      
      HEAP[$res + 12 + 4] = $parcel;
      
      
      var $56 = HEAP[$self_addr + 32];
      
      var $58 = _PyList_Append($56, $res);
      
      
      
      var $62 = HEAP[$res] - 1;
      
      
      HEAP[$res] = $62;
      
      
      
      
      if (HEAP[$res] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      
      var $73 = HEAP[HEAP[$res + 4] + 24];
      
      FUNCTION_TABLE[$73]($res);
      __label__ = 11;
      break;
     case 10:
      _PyErr_Clear();
      __label__ = 11;
      break;
     case 11:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _treebuilder_data($self, $args) {
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
      var $data = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str69, allocate([ $data, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$data];
      
      var $6 = _treebuilder_handle_data($self_addr, $4);
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
  function _treebuilder_end($self, $args) {
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
      var $tag = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str70, allocate([ $tag, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$tag];
      
      var $6 = _treebuilder_handle_end($self_addr, $4);
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
  function _treebuilder_done($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $res;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $res = HEAP[$self_addr + 8];
      __label__ = 3;
      break;
     case 2:
      $res = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      
      
      
      var $11 = HEAP[$res] + 1;
      
      
      HEAP[$res] = $11;
      
      $0 = $res;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _treebuilder_close($self, $args) {
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
      
      var $2 = _PyArg_ParseTuple($args_addr, __str71, allocate(1, "i32", ALLOC_STACK));
      
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
      
      var $5 = _treebuilder_done($self_addr);
      $0 = $5;
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
  function _treebuilder_start($self, $args) {
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
      var $tag = __stackBase__;
      var $attrib = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$attrib] = __Py_NoneStruct;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str72, allocate([ $tag, 0, 0, 0, $attrib, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$attrib];
      var $5 = HEAP[$tag];
      
      var $7 = _treebuilder_handle_start($self_addr, $5, $4);
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
  function _treebuilder_xml($self, $args) {
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
      var $standalone = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str73, allocate([ $encoding, 0, 0, 0, $standalone, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$standalone];
      var $5 = HEAP[$encoding];
      
      var $7 = _treebuilder_handle_xml($self_addr, $5, $4);
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
  function _treebuilder_getattr($self, $name) {
    
    var $self_addr;
    var $name_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $name_addr = $name;
    
    
    
    var $4 = _Py_FindMethod(_treebuilder_methods, $self_addr, $name_addr);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _checkstring($string, $size) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $string_addr;
      var $size_addr;
      var $retval;
      var $0;
      var $i;
      $string_addr = $string;
      $size_addr = $size;
      $i = 0;
      __label__ = 4;
      break;
     case 1:
      
      
      
      
      
      if (HEAP[$string_addr + $i] < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 1;
      __label__ = 6;
      break;
     case 3:
      
      var $7 = $i + 1;
      $i = $7;
      __label__ = 4;
      break;
     case 4:
      
      
      
      if ($i < $size_addr) {
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
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _makestring($string, $size) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $string_addr;
      var $size_addr;
      var $retval;
      var $0;
      $string_addr = $string;
      $size_addr = $size;
      
      
      var $3 = _checkstring($string_addr, $size_addr);
      
      var $5 = $string_addr;
      var $6 = $size_addr;
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = _PyUnicodeUCS2_DecodeUTF8($5, $6, __str80);
      $0 = $7;
      __label__ = 3;
      break;
     case 2:
      var $8 = _PyString_FromStringAndSize($5, $6);
      $0 = $8;
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
  function _makeuniversal($self, $string) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $string_addr;
      var $retval;
      var $0;
      var $size;
      var $key;
      var $value;
      var $tag;
      var $p;
      var $i;
      $self_addr = $self;
      $string_addr = $string;
      
      var $2 = _strlen($string_addr);
      $size = $2;
      
      
      var $5 = _PyString_FromStringAndSize($string_addr, $size);
      $key = $5;
      
      
      if ($key == 0) {
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
      
      
      var $10 = HEAP[$self_addr + 20];
      
      var $12 = _PyDict_GetItem($10, $key);
      $value = $12;
      
      
      if ($value != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      var $18 = HEAP[$value] + 1;
      
      
      HEAP[$value] = $18;
      __label__ = 25;
      break;
     case 4:
      $i = 0;
      __label__ = 7;
      break;
     case 5:
      
      
      
      
      
      if (HEAP[$string_addr + $i] == 125) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      var $27 = $i + 1;
      $i = $27;
      __label__ = 7;
      break;
     case 7:
      
      
      
      if ($i < $size) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      if ($i != $size) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      var $36 = _PyString_FromStringAndSize(0, $size + 1);
      $tag = $36;
      
      
      
      
      $p = $tag + 20;
      
      
      HEAP[$p] = 123;
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($p + 1, $string_addr, $size, 1, 0);
      
      var $48 = $size + 1;
      $size = $48;
      __label__ = 11;
      break;
     case 10:
      
      
      
      var $52 = HEAP[$key] + 1;
      
      
      HEAP[$key] = $52;
      
      $tag = $key;
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      $p = $tag + 20;
      
      
      var $62 = _checkstring($p, $size);
      
      if ($62 != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 12:
      
      
      var $66 = _PyUnicodeUCS2_DecodeUTF8($p, $size, __str80);
      $value = $66;
      
      
      
      var $70 = HEAP[$tag] - 1;
      
      
      HEAP[$tag] = $70;
      
      
      
      
      if (HEAP[$tag] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $81 = HEAP[HEAP[$tag + 4] + 24];
      
      FUNCTION_TABLE[$81]($tag);
      __label__ = 14;
      break;
     case 14:
      
      
      if ($value == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 15:
      
      
      
      var $88 = HEAP[$key] - 1;
      
      
      HEAP[$key] = $88;
      
      
      
      
      if (HEAP[$key] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $99 = HEAP[HEAP[$key + 4] + 24];
      
      FUNCTION_TABLE[$99]($key);
      __label__ = 17;
      break;
     case 17:
      $0 = 0;
      __label__ = 28;
      break;
     case 18:
      
      $value = $tag;
      __label__ = 19;
      break;
     case 19:
      
      
      var $104 = HEAP[$self_addr + 20];
      
      
      var $107 = _PyDict_SetItem($104, $key, $value);
      
      if ($107 < 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 20:
      
      
      
      var $112 = HEAP[$key] - 1;
      
      
      HEAP[$key] = $112;
      
      
      
      
      if (HEAP[$key] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $123 = HEAP[HEAP[$key + 4] + 24];
      
      FUNCTION_TABLE[$123]($key);
      __label__ = 22;
      break;
     case 22:
      
      
      
      var $128 = HEAP[$value] - 1;
      
      
      HEAP[$value] = $128;
      
      
      
      
      if (HEAP[$value] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $139 = HEAP[HEAP[$value + 4] + 24];
      
      FUNCTION_TABLE[$139]($value);
      __label__ = 24;
      break;
     case 24:
      $0 = 0;
      __label__ = 28;
      break;
     case 25:
      
      
      
      var $144 = HEAP[$key] - 1;
      
      
      HEAP[$key] = $144;
      
      
      
      
      if (HEAP[$key] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $155 = HEAP[HEAP[$key + 4] + 24];
      
      FUNCTION_TABLE[$155]($key);
      __label__ = 27;
      break;
     case 27:
      
      $0 = $value;
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
  function _expat_set_error($message, $line, $column) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 256;
    _memset(__stackBase__, 0, 256);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $message_addr;
      var $line_addr;
      var $column_addr;
      var $error;
      var $position;
      var $buffer = __stackBase__;
      $message_addr = $message;
      $line_addr = $line;
      $column_addr = $column;
      var $buffer1 = $buffer;
      
      
      
      var $3 = _sprintf($buffer1, __str81, allocate([ $message_addr, 0, 0, 0, $line_addr, 0, 0, 0, $column_addr, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      var $4 = HEAP[_elementtree_parseerror_obj];
      var $buffer2 = $buffer;
      var $5 = _PyObject_CallFunction($4, __str82, allocate([ $buffer2, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $error = $5;
      
      
      if ($error == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $10 = _Py_BuildValue(__str83, allocate([ $line_addr, 0, 0, 0, $column_addr, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $position = $10;
      
      
      var $13 = $error;
      if ($position == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      var $16 = HEAP[$13] - 1;
      
      
      HEAP[$error] = $16;
      
      
      
      
      if (HEAP[$error] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 3:
      
      
      
      
      var $27 = HEAP[HEAP[$error + 4] + 24];
      
      FUNCTION_TABLE[$27]($error);
      __label__ = 13;
      break;
     case 4:
      
      var $30 = _PyObject_SetAttrString($13, __str84, $position);
      var $31 = $30 == -1;
      if ($31) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      
      
      var $35 = HEAP[$error] - 1;
      
      
      HEAP[$error] = $35;
      
      
      
      
      if (HEAP[$error] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $46 = HEAP[HEAP[$error + 4] + 24];
      
      FUNCTION_TABLE[$46]($error);
      __label__ = 7;
      break;
     case 7:
      
      
      
      var $51 = HEAP[$position] - 1;
      
      
      HEAP[$position] = $51;
      
      
      
      
      if (HEAP[$position] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 8:
      
      
      
      
      var $62 = HEAP[HEAP[$position + 4] + 24];
      
      FUNCTION_TABLE[$62]($position);
      __label__ = 13;
      break;
     case 9:
      
      
      
      var $67 = HEAP[$position] - 1;
      
      
      HEAP[$position] = $67;
      
      
      
      
      if (HEAP[$position] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $78 = HEAP[HEAP[$position + 4] + 24];
      
      FUNCTION_TABLE[$78]($position);
      __label__ = 11;
      break;
     case 11:
      var $80 = HEAP[_elementtree_parseerror_obj];
      
      _PyErr_SetObject($80, $error);
      
      
      
      var $85 = HEAP[$error] - 1;
      
      
      HEAP[$error] = $85;
      
      
      
      
      if (HEAP[$error] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $96 = HEAP[HEAP[$error + 4] + 24];
      
      FUNCTION_TABLE[$96]($error);
      __label__ = 13;
      break;
     case 13:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _expat_default_handler($self, $data_in, $data_len) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 128;
    _memset(__stackBase__, 0, 128);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $data_in_addr;
      var $data_len_addr;
      var $key;
      var $value;
      var $res;
      var $message = __stackBase__;
      $self_addr = $self;
      $data_in_addr = $data_in;
      $data_len_addr = $data_len;
      
      
      if ($data_len_addr <= 1) {
        __label__ = 16;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$data_in_addr] != 38) {
        __label__ = 16;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      var $10 = _makestring($data_in_addr + 1, $data_len_addr - 2);
      $key = $10;
      
      
      if ($key == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $15 = HEAP[$self_addr + 16];
      
      var $17 = _PyDict_GetItem($15, $key);
      $value = $17;
      
      
      if ($value != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $26 = $self_addr;
      if (HEAP[HEAP[$self_addr + 12] + 4] == _TreeBuilder_Type) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $29 = HEAP[$26 + 12];
      
      var $31 = _treebuilder_handle_data($29, $value);
      $res = $31;
      __lastLabel__ = 5;
      __label__ = 9;
      break;
     case 6:
      
      
      
      if (HEAP[$26 + 32] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $37 = HEAP[$self_addr + 32];
      
      var $39 = _PyObject_CallFunction($37, __str85, allocate([ $value, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $res = $39;
      __lastLabel__ = 7;
      __label__ = 9;
      break;
     case 8:
      $res = 0;
      __label__ = 14;
      break;
     case 9:
      var $40 = __lastLabel__ == 7 ? $39 : $31;
      
      if ($40 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      
      
      
      var $45 = HEAP[$res] - 1;
      
      
      HEAP[$res] = $45;
      
      
      
      
      if (HEAP[$res] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      
      var $56 = HEAP[HEAP[$res + 4] + 24];
      
      FUNCTION_TABLE[$56]($res);
      __label__ = 14;
      break;
     case 12:
      var $58 = _PyErr_Occurred();
      
      if ($58 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $message15 = $message;
      var $64 = _sprintf($message15, __str86, allocate([ $key + 20, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      
      var $67 = HEAP[HEAP[_expat_capi] + 28];
      
      
      var $70 = HEAP[$self_addr + 8];
      var $71 = FUNCTION_TABLE[$67]($70);
      
      
      var $74 = HEAP[HEAP[_expat_capi] + 32];
      
      
      var $77 = HEAP[$self_addr + 8];
      var $78 = FUNCTION_TABLE[$74]($77);
      var $message16 = $message;
      _expat_set_error($message16, $78, $71);
      __label__ = 14;
      break;
     case 14:
      
      
      
      var $82 = HEAP[$key] - 1;
      
      
      HEAP[$key] = $82;
      
      
      
      
      if (HEAP[$key] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $93 = HEAP[HEAP[$key + 4] + 24];
      
      FUNCTION_TABLE[$93]($key);
      __label__ = 16;
      break;
     case 16:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _expat_start_handler($self, $tag_in, $attrib_in) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $tag_in_addr;
      var $attrib_in_addr;
      var $res;
      var $tag;
      var $attrib;
      var $ok;
      var $key;
      var $value;
      $self_addr = $self;
      $tag_in_addr = $tag_in;
      $attrib_in_addr = $attrib_in;
      
      
      var $2 = _makeuniversal($self_addr, $tag_in_addr);
      $tag = $2;
      
      
      if ($tag == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$attrib_in_addr] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 2:
      var $9 = _PyDict_New();
      $attrib = $9;
      
      
      if ($attrib == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 3:
      
      
      var $14 = HEAP[$attrib_in_addr];
      
      var $16 = _makeuniversal($self_addr, $14);
      $key = $16;
      
      
      var $19 = HEAP[$attrib_in_addr + 4];
      var $20 = _strlen($19);
      
      
      var $23 = HEAP[$attrib_in_addr + 4];
      var $24 = _makestring($23, $20);
      $value = $24;
      
      
      if ($key == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if ($value == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 5:
      
      if ($24 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      var $33 = HEAP[$value] - 1;
      
      
      HEAP[$value] = $33;
      
      
      
      
      if (HEAP[$value] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $44 = HEAP[HEAP[$value + 4] + 24];
      
      FUNCTION_TABLE[$44]($value);
      __label__ = 8;
      break;
     case 8:
      
      
      if ($key != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      var $51 = HEAP[$key] - 1;
      
      
      HEAP[$key] = $51;
      
      
      
      
      if (HEAP[$key] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $62 = HEAP[HEAP[$key + 4] + 24];
      
      FUNCTION_TABLE[$62]($key);
      __label__ = 11;
      break;
     case 11:
      
      
      
      var $67 = HEAP[$attrib] - 1;
      
      
      HEAP[$attrib] = $67;
      
      
      
      
      if (HEAP[$attrib] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 12:
      
      
      
      
      var $78 = HEAP[HEAP[$attrib + 4] + 24];
      
      FUNCTION_TABLE[$78]($attrib);
      __label__ = 40;
      break;
     case 13:
      
      
      
      var $83 = _PyDict_SetItem($attrib, $key, $value);
      $ok = $83;
      
      
      
      var $87 = HEAP[$value] - 1;
      
      
      HEAP[$value] = $87;
      
      
      
      
      if (HEAP[$value] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $98 = HEAP[HEAP[$value + 4] + 24];
      
      FUNCTION_TABLE[$98]($value);
      __label__ = 15;
      break;
     case 15:
      
      
      
      var $103 = HEAP[$key] - 1;
      
      
      HEAP[$key] = $103;
      
      
      
      
      if (HEAP[$key] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $114 = HEAP[HEAP[$key + 4] + 24];
      
      FUNCTION_TABLE[$114]($key);
      __label__ = 17;
      break;
     case 17:
      
      
      if ($ok < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      
      
      
      var $121 = HEAP[$attrib] - 1;
      
      
      HEAP[$attrib] = $121;
      
      
      
      
      if (HEAP[$attrib] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 19:
      
      
      
      
      var $132 = HEAP[HEAP[$attrib + 4] + 24];
      
      FUNCTION_TABLE[$132]($attrib);
      __label__ = 40;
      break;
     case 20:
      
      var $135 = $attrib_in_addr + 8;
      $attrib_in_addr = $135;
      __label__ = 21;
      break;
     case 21:
      
      
      
      
      if (HEAP[$attrib_in_addr] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      
      
      if (HEAP[$attrib_in_addr + 4] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      var $145 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $145;
      $attrib = __Py_NoneStruct;
      __label__ = 24;
      break;
     case 24:
      
      
      
      
      
      
      var $152 = $self_addr;
      if (HEAP[HEAP[$self_addr + 12] + 4] == _TreeBuilder_Type) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      var $155 = HEAP[$152 + 12];
      
      
      var $158 = _treebuilder_handle_start($155, $tag, $attrib);
      $res = $158;
      __label__ = 33;
      break;
     case 26:
      
      
      
      if (HEAP[$152 + 28] != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 27:
      
      
      if ($attrib == __Py_NoneStruct) {
        __label__ = 28;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 28:
      
      
      
      var $167 = HEAP[$attrib] - 1;
      
      
      HEAP[$attrib] = $167;
      
      
      
      
      if (HEAP[$attrib] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $178 = HEAP[HEAP[$attrib + 4] + 24];
      
      FUNCTION_TABLE[$178]($attrib);
      __label__ = 30;
      break;
     case 30:
      var $180 = _PyDict_New();
      $attrib = $180;
      
      if ($180 == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      var $184 = HEAP[$self_addr + 28];
      
      
      var $187 = _PyObject_CallFunction($184, __str68, allocate([ $tag, 0, 0, 0, $attrib, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $res = $187;
      __label__ = 33;
      break;
     case 32:
      $res = 0;
      __label__ = 33;
      break;
     case 33:
      
      
      
      var $191 = HEAP[$tag] - 1;
      
      
      HEAP[$tag] = $191;
      
      
      
      
      if (HEAP[$tag] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $202 = HEAP[HEAP[$tag + 4] + 24];
      
      FUNCTION_TABLE[$202]($tag);
      __label__ = 35;
      break;
     case 35:
      
      
      
      var $207 = HEAP[$attrib] - 1;
      
      
      HEAP[$attrib] = $207;
      
      
      
      
      if (HEAP[$attrib] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      
      
      var $218 = HEAP[HEAP[$attrib + 4] + 24];
      
      FUNCTION_TABLE[$218]($attrib);
      __label__ = 37;
      break;
     case 37:
      
      
      if ($res != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 38:
      
      
      
      var $225 = HEAP[$res] - 1;
      
      
      HEAP[$res] = $225;
      
      
      
      
      if (HEAP[$res] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      var $236 = HEAP[HEAP[$res + 4] + 24];
      
      FUNCTION_TABLE[$236]($res);
      __label__ = 40;
      break;
     case 40:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _expat_data_handler($self, $data_in, $data_len) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $data_in_addr;
      var $data_len_addr;
      var $data;
      var $res;
      $self_addr = $self;
      $data_in_addr = $data_in;
      $data_len_addr = $data_len;
      
      
      var $2 = _makestring($data_in_addr, $data_len_addr);
      $data = $2;
      
      
      if ($data == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      var $11 = $self_addr;
      if (HEAP[HEAP[$self_addr + 12] + 4] == _TreeBuilder_Type) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      var $14 = HEAP[$11 + 12];
      
      var $16 = _treebuilder_handle_data($14, $data);
      $res = $16;
      __label__ = 6;
      break;
     case 3:
      
      
      
      if (HEAP[$11 + 32] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $22 = HEAP[$self_addr + 32];
      
      var $24 = _PyObject_CallFunction($22, __str85, allocate([ $data, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $res = $24;
      __label__ = 6;
      break;
     case 5:
      $res = 0;
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $28 = HEAP[$data] - 1;
      
      
      HEAP[$data] = $28;
      
      
      
      
      if (HEAP[$data] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $39 = HEAP[HEAP[$data + 4] + 24];
      
      FUNCTION_TABLE[$39]($data);
      __label__ = 8;
      break;
     case 8:
      
      
      if ($res != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      var $46 = HEAP[$res] - 1;
      
      
      HEAP[$res] = $46;
      
      
      
      
      if (HEAP[$res] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $57 = HEAP[HEAP[$res + 4] + 24];
      
      FUNCTION_TABLE[$57]($res);
      __label__ = 11;
      break;
     case 11:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _expat_end_handler($self, $tag_in) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $tag_in_addr;
      var $tag;
      var $res;
      $self_addr = $self;
      $tag_in_addr = $tag_in;
      $res = 0;
      
      
      
      
      
      
      var $6 = $self_addr;
      if (HEAP[HEAP[$self_addr + 12] + 4] == _TreeBuilder_Type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $9 = HEAP[$6 + 12];
      var $10 = _treebuilder_handle_end($9, __Py_NoneStruct);
      $res = $10;
      __lastLabel__ = 1;
      __label__ = 7;
      break;
     case 2:
      
      
      
      if (HEAP[$6 + 36] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      var $16 = _makeuniversal($self_addr, $tag_in_addr);
      $tag = $16;
      
      
      if ($tag != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $21 = HEAP[$self_addr + 36];
      
      var $23 = _PyObject_CallFunction($21, __str85, allocate([ $tag, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $res = $23;
      
      
      
      var $27 = HEAP[$tag] - 1;
      
      
      HEAP[$tag] = $27;
      
      
      
      
      if (HEAP[$tag] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $38 = HEAP[HEAP[$tag + 4] + 24];
      
      FUNCTION_TABLE[$38]($tag);
      __label__ = 6;
      break;
     case 6:
      var $_pr = $res;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $40 = __lastLabel__ == 6 ? $_pr : $10;
      
      if ($40 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      var $45 = HEAP[$res] - 1;
      
      
      HEAP[$res] = $45;
      
      
      
      
      if (HEAP[$res] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $56 = HEAP[HEAP[$res + 4] + 24];
      
      FUNCTION_TABLE[$56]($res);
      __label__ = 10;
      break;
     case 10:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _expat_start_ns_handler($self, $prefix, $uri) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $prefix_addr;
      var $uri_addr;
      var $sprefix;
      var $suri;
      $self_addr = $self;
      $prefix_addr = $prefix;
      $uri_addr = $uri;
      $sprefix = 0;
      $suri = 0;
      
      var $1 = _strlen($uri_addr);
      
      var $3 = _makestring($uri_addr, $1);
      $suri = $3;
      
      
      if ($suri == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($prefix_addr != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $9 = _strlen($prefix_addr);
      
      var $11 = _makestring($prefix_addr, $9);
      $sprefix = $11;
      __lastLabel__ = 2;
      __label__ = 4;
      break;
     case 3:
      var $12 = _PyString_FromStringAndSize(__str1, 0);
      $sprefix = $12;
      __lastLabel__ = 3;
      __label__ = 4;
      break;
     case 4:
      var $13 = __lastLabel__ == 3 ? $12 : $11;
      
      if ($13 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      var $18 = HEAP[$suri] - 1;
      
      
      HEAP[$suri] = $18;
      
      
      
      
      if (HEAP[$suri] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 6:
      
      
      
      
      var $29 = HEAP[HEAP[$suri + 4] + 24];
      
      FUNCTION_TABLE[$29]($suri);
      __label__ = 11;
      break;
     case 7:
      
      
      
      var $34 = HEAP[$self_addr + 12];
      
      
      _treebuilder_handle_namespace($34, 1, $sprefix, $suri);
      
      
      
      var $40 = HEAP[$sprefix] - 1;
      
      
      HEAP[$sprefix] = $40;
      
      
      
      
      if (HEAP[$sprefix] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $51 = HEAP[HEAP[$sprefix + 4] + 24];
      
      FUNCTION_TABLE[$51]($sprefix);
      __label__ = 9;
      break;
     case 9:
      
      
      
      var $56 = HEAP[$suri] - 1;
      
      
      HEAP[$suri] = $56;
      
      
      
      
      if (HEAP[$suri] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $67 = HEAP[HEAP[$suri + 4] + 24];
      
      FUNCTION_TABLE[$67]($suri);
      __label__ = 11;
      break;
     case 11:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _expat_end_ns_handler($self, $prefix_in) {
    
    var $self_addr;
    var $prefix_in_addr;
    $self_addr = $self;
    $prefix_in_addr = $prefix_in;
    
    
    
    var $3 = HEAP[$self_addr + 12];
    _treebuilder_handle_namespace($3, 0, 0, 0);
    return;
  }
  function _expat_comment_handler($self, $comment_in) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $comment_in_addr;
      var $comment;
      var $res;
      $self_addr = $self;
      $comment_in_addr = $comment_in;
      
      
      
      
      if (HEAP[$self_addr + 40] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      var $5 = _strlen($comment_in_addr);
      
      var $7 = _makestring($comment_in_addr, $5);
      $comment = $7;
      
      
      if ($comment != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 2:
      
      
      var $12 = HEAP[$self_addr + 40];
      
      var $14 = _PyObject_CallFunction($12, __str85, allocate([ $comment, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $res = $14;
      
      
      if ($res != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      var $20 = HEAP[$res] - 1;
      
      
      HEAP[$res] = $20;
      
      
      
      
      if (HEAP[$res] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $31 = HEAP[HEAP[$res + 4] + 24];
      
      FUNCTION_TABLE[$31]($res);
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $36 = HEAP[$comment] - 1;
      
      
      HEAP[$comment] = $36;
      
      
      
      
      if (HEAP[$comment] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $47 = HEAP[HEAP[$comment + 4] + 24];
      
      FUNCTION_TABLE[$47]($comment);
      __label__ = 7;
      break;
     case 7:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _expat_pi_handler($self, $target_in, $data_in) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $target_in_addr;
      var $data_in_addr;
      var $target;
      var $data;
      var $res;
      $self_addr = $self;
      $target_in_addr = $target_in;
      $data_in_addr = $data_in;
      
      
      
      
      if (HEAP[$self_addr + 44] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 1:
      
      var $5 = _strlen($target_in_addr);
      
      var $7 = _makestring($target_in_addr, $5);
      $target = $7;
      
      var $9 = _strlen($data_in_addr);
      
      var $11 = _makestring($data_in_addr, $9);
      $data = $11;
      
      
      if ($target == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if ($data == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $18 = HEAP[$self_addr + 44];
      
      
      var $21 = _PyObject_CallFunction($18, __str68, allocate([ $target, 0, 0, 0, $data, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $res = $21;
      
      
      if ($res != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      var $27 = HEAP[$res] - 1;
      
      
      HEAP[$res] = $27;
      
      
      
      
      if (HEAP[$res] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $38 = HEAP[HEAP[$res + 4] + 24];
      
      FUNCTION_TABLE[$38]($res);
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $43 = HEAP[$data] - 1;
      
      
      HEAP[$data] = $43;
      
      
      
      
      if (HEAP[$data] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $54 = HEAP[HEAP[$data + 4] + 24];
      
      FUNCTION_TABLE[$54]($data);
      __label__ = 8;
      break;
     case 8:
      
      
      
      var $59 = HEAP[$target] - 1;
      
      
      HEAP[$target] = $59;
      
      
      
      
      if (HEAP[$target] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 9:
      
      
      
      
      var $70 = HEAP[HEAP[$target + 4] + 24];
      
      FUNCTION_TABLE[$70]($target);
      __label__ = 16;
      break;
     case 10:
      
      if ($11 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      
      var $76 = HEAP[$data] - 1;
      
      
      HEAP[$data] = $76;
      
      
      
      
      if (HEAP[$data] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $87 = HEAP[HEAP[$data + 4] + 24];
      
      FUNCTION_TABLE[$87]($data);
      __label__ = 13;
      break;
     case 13:
      
      
      if ($target != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      var $94 = HEAP[$target] - 1;
      
      
      HEAP[$target] = $94;
      
      
      
      
      if (HEAP[$target] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $105 = HEAP[HEAP[$target + 4] + 24];
      
      FUNCTION_TABLE[$105]($target);
      __label__ = 16;
      break;
     case 16:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _expat_unknown_encoding_handler($self, $name, $info) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 256;
    _memset(__stackBase__, 0, 256);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $name_addr;
      var $info_addr;
      var $retval;
      var $0;
      var $u;
      var $p;
      var $s = __stackBase__;
      var $i;
      $self_addr = $self;
      $name_addr = $name;
      $info_addr = $info;
      
      
      _llvm_memset_p0i8_i32($info_addr, 0, 1036, 1, 0);
      $i = 0;
      __label__ = 1;
      break;
     case 1:
      
      
      
      
      HEAP[$s + $i] = $i & 255;
      
      var $8 = $i + 1;
      $i = $8;
      
      if ($8 <= 255) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $s3 = $s;
      
      var $11 = _PyUnicodeUCS2_Decode($s3, 256, $name_addr, __str87);
      $u = $11;
      
      
      if ($u == 0) {
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
      
      
      
      
      
      var $19 = $u;
      if (HEAP[$u + 8] != 256) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      var $22 = HEAP[$19] - 1;
      
      
      HEAP[$u] = $22;
      
      
      
      
      if (HEAP[$u] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $33 = HEAP[HEAP[$u + 4] + 24];
      
      FUNCTION_TABLE[$33]($u);
      __label__ = 7;
      break;
     case 7:
      $0 = 0;
      __label__ = 16;
      break;
     case 8:
      
      
      
      $p = HEAP[$19 + 12];
      $i = 0;
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      var $42 = HEAP[$p + 2 * $i] != -3;
      var $43 = $i;
      if ($42) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $48 = HEAP[$p + 2 * $i];
      
      
      
      HEAP[$info_addr + $43 * 4] = $48;
      __label__ = 12;
      break;
     case 11:
      
      
      
      HEAP[$info_addr + $43 * 4] = -1;
      __label__ = 12;
      break;
     case 12:
      
      var $56 = $i + 1;
      $i = $56;
      
      if ($56 <= 255) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $61 = HEAP[$u] - 1;
      
      
      HEAP[$u] = $61;
      
      
      
      
      if (HEAP[$u] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $72 = HEAP[HEAP[$u + 4] + 24];
      
      FUNCTION_TABLE[$72]($u);
      __label__ = 15;
      break;
     case 15:
      $0 = 1;
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
  function _xmlparser($self_, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self__addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $self;
      var $target = __stackBase__;
      var $encoding = __stackBase__ + 4;
      $self__addr = $self_;
      $args_addr = $args;
      $kw_addr = $kw;
      HEAP[$target] = 0;
      HEAP[$encoding] = 0;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kw_addr, __str88, _kwlist_12207, allocate([ $target, 0, 0, 0, $encoding, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[_expat_capi] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $7 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($7, __str91);
      $0 = 0;
      __label__ = 21;
      break;
     case 4:
      var $8 = __PyObject_New(_XMLParser_Type);
      
      $self = $8;
      
      
      if ($self == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 21;
      break;
     case 6:
      var $12 = _PyDict_New();
      
      
      HEAP[$self + 16] = $12;
      
      
      
      
      if (HEAP[$self + 16] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      _PyObject_Free($self);
      $0 = 0;
      __label__ = 21;
      break;
     case 8:
      var $21 = _PyDict_New();
      
      
      HEAP[$self + 20] = $21;
      
      
      
      
      if (HEAP[$self + 20] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      var $31 = HEAP[$self + 16];
      _PyObject_Free($31);
      
      
      _PyObject_Free($self);
      $0 = 0;
      __label__ = 21;
      break;
     case 10:
      HEAP[_memory_handler_12204] = FUNCTION_TABLE_OFFSET + 2;
      HEAP[_memory_handler_12204 + 4] = FUNCTION_TABLE_OFFSET + 4;
      HEAP[_memory_handler_12204 + 8] = FUNCTION_TABLE_OFFSET + 6;
      
      
      var $36 = HEAP[HEAP[_expat_capi] + 40];
      var $37 = HEAP[$encoding];
      var $38 = FUNCTION_TABLE[$36]($37, _memory_handler_12204, __str92);
      
      
      HEAP[$self + 8] = $38;
      
      
      
      
      if (HEAP[$self + 8] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      var $48 = HEAP[$self + 20];
      _PyObject_Free($48);
      
      
      
      var $52 = HEAP[$self + 16];
      _PyObject_Free($52);
      
      
      _PyObject_Free($self);
      var $55 = _PyErr_NoMemory();
      $0 = 0;
      __label__ = 21;
      break;
     case 12:
      
      
      if (HEAP[$target] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      var $58 = _treebuilder_new();
      HEAP[$target] = $58;
      
      
      if (HEAP[$target] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      var $63 = HEAP[HEAP[_expat_capi] + 44];
      
      
      var $66 = HEAP[$self + 8];
      FUNCTION_TABLE[$63]($66);
      
      
      
      var $70 = HEAP[$self + 20];
      _PyObject_Free($70);
      
      
      
      var $74 = HEAP[$self + 16];
      _PyObject_Free($74);
      
      
      _PyObject_Free($self);
      $0 = 0;
      __label__ = 21;
      break;
     case 15:
      
      
      
      var $80 = HEAP[HEAP[$target]] + 1;
      var $81 = HEAP[$target];
      HEAP[$81] = $80;
      __label__ = 16;
      break;
     case 16:
      var $82 = HEAP[$target];
      
      
      HEAP[$self + 12] = $82;
      var $85 = HEAP[$target];
      var $86 = _PyObject_GetAttrString($85, __str77);
      
      
      HEAP[$self + 24] = $86;
      var $89 = HEAP[$target];
      var $90 = _PyObject_GetAttrString($89, __str75);
      
      
      HEAP[$self + 28] = $90;
      var $93 = HEAP[$target];
      var $94 = _PyObject_GetAttrString($93, __str74);
      
      
      HEAP[$self + 32] = $94;
      var $97 = HEAP[$target];
      var $98 = _PyObject_GetAttrString($97, __str76);
      
      
      HEAP[$self + 36] = $98;
      var $101 = HEAP[$target];
      var $102 = _PyObject_GetAttrString($101, __str93);
      
      
      HEAP[$self + 40] = $102;
      var $105 = HEAP[$target];
      var $106 = _PyObject_GetAttrString($105, __str94);
      
      
      HEAP[$self + 44] = $106;
      var $109 = HEAP[$target];
      var $110 = _PyObject_GetAttrString($109, __str78);
      
      
      HEAP[$self + 48] = $110;
      _PyErr_Clear();
      
      
      var $115 = HEAP[HEAP[_expat_capi] + 76];
      
      
      var $118 = HEAP[$self + 8];
      
      
      FUNCTION_TABLE[$115]($118, $self);
      
      
      var $123 = HEAP[HEAP[_expat_capi] + 60];
      
      
      var $126 = HEAP[$self + 8];
      FUNCTION_TABLE[$123]($126, FUNCTION_TABLE_OFFSET + 8, FUNCTION_TABLE_OFFSET + 10);
      
      
      var $129 = HEAP[HEAP[_expat_capi] + 56];
      
      
      var $132 = HEAP[$self + 8];
      FUNCTION_TABLE[$129]($132, FUNCTION_TABLE_OFFSET + 12);
      
      
      var $135 = HEAP[HEAP[_expat_capi] + 48];
      
      
      var $138 = HEAP[$self + 8];
      FUNCTION_TABLE[$135]($138, FUNCTION_TABLE_OFFSET + 14);
      
      
      
      
      if (HEAP[$self + 40] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      var $145 = HEAP[HEAP[_expat_capi] + 52];
      
      
      var $148 = HEAP[$self + 8];
      FUNCTION_TABLE[$145]($148, FUNCTION_TABLE_OFFSET + 16);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      if (HEAP[$self + 44] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      var $155 = HEAP[HEAP[_expat_capi] + 68];
      
      
      var $158 = HEAP[$self + 8];
      FUNCTION_TABLE[$155]($158, FUNCTION_TABLE_OFFSET + 18);
      __label__ = 20;
      break;
     case 20:
      
      
      var $161 = HEAP[HEAP[_expat_capi] + 72];
      
      
      var $164 = HEAP[$self + 8];
      FUNCTION_TABLE[$161]($164, FUNCTION_TABLE_OFFSET + 20, 0);
      
      
      $0 = $self;
      __label__ = 21;
      break;
     case 21:
      
      $retval = $0;
      var $retval22 = $retval;
      STACKTOP = __stackBase__;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _xmlparser_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      var $2 = HEAP[HEAP[_expat_capi] + 44];
      
      
      var $5 = HEAP[$self_addr + 8];
      FUNCTION_TABLE[$2]($5);
      
      
      
      
      if (HEAP[$self_addr + 48] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $12 = HEAP[$self_addr + 48];
      
      
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
      
      
      
      
      
      
      var $26 = HEAP[HEAP[HEAP[$self_addr + 48] + 4] + 24];
      
      
      var $29 = HEAP[$self_addr + 48];
      FUNCTION_TABLE[$26]($29);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      if (HEAP[$self_addr + 44] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $36 = HEAP[$self_addr + 44];
      
      
      var $39 = HEAP[$36] - 1;
      var $40 = $36;
      HEAP[$40] = $39;
      
      
      
      if (HEAP[$36] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      var $50 = HEAP[HEAP[HEAP[$self_addr + 44] + 4] + 24];
      
      
      var $53 = HEAP[$self_addr + 44];
      FUNCTION_TABLE[$50]($53);
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      if (HEAP[$self_addr + 40] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $60 = HEAP[$self_addr + 40];
      
      
      var $63 = HEAP[$60] - 1;
      var $64 = $60;
      HEAP[$64] = $63;
      
      
      
      if (HEAP[$60] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      var $74 = HEAP[HEAP[HEAP[$self_addr + 40] + 4] + 24];
      
      
      var $77 = HEAP[$self_addr + 40];
      FUNCTION_TABLE[$74]($77);
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[$self_addr + 36] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      
      
      var $84 = HEAP[$self_addr + 36];
      
      
      var $87 = HEAP[$84] - 1;
      var $88 = $84;
      HEAP[$88] = $87;
      
      
      
      if (HEAP[$84] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      
      var $98 = HEAP[HEAP[HEAP[$self_addr + 36] + 4] + 24];
      
      
      var $101 = HEAP[$self_addr + 36];
      FUNCTION_TABLE[$98]($101);
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
      
      
      var $108 = HEAP[$self_addr + 32];
      
      
      var $111 = HEAP[$108] - 1;
      var $112 = $108;
      HEAP[$112] = $111;
      
      
      
      if (HEAP[$108] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      
      var $122 = HEAP[HEAP[HEAP[$self_addr + 32] + 4] + 24];
      
      
      var $125 = HEAP[$self_addr + 32];
      FUNCTION_TABLE[$122]($125);
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
      
      
      var $132 = HEAP[$self_addr + 28];
      
      
      var $135 = HEAP[$132] - 1;
      var $136 = $132;
      HEAP[$136] = $135;
      
      
      
      if (HEAP[$132] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      
      var $146 = HEAP[HEAP[HEAP[$self_addr + 28] + 4] + 24];
      
      
      var $149 = HEAP[$self_addr + 28];
      FUNCTION_TABLE[$146]($149);
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      var $156 = HEAP[$self_addr + 24];
      
      
      var $159 = HEAP[$156] - 1;
      var $160 = $156;
      HEAP[$160] = $159;
      
      
      
      if (HEAP[$156] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      
      
      var $170 = HEAP[HEAP[HEAP[$self_addr + 24] + 4] + 24];
      
      
      var $173 = HEAP[$self_addr + 24];
      FUNCTION_TABLE[$170]($173);
      __label__ = 21;
      break;
     case 21:
      
      
      var $176 = HEAP[$self_addr + 12];
      
      
      var $179 = HEAP[$176] - 1;
      var $180 = $176;
      HEAP[$180] = $179;
      
      
      
      if (HEAP[$176] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      
      
      var $190 = HEAP[HEAP[HEAP[$self_addr + 12] + 4] + 24];
      
      
      var $193 = HEAP[$self_addr + 12];
      FUNCTION_TABLE[$190]($193);
      __label__ = 23;
      break;
     case 23:
      
      
      var $196 = HEAP[$self_addr + 16];
      
      
      var $199 = HEAP[$196] - 1;
      var $200 = $196;
      HEAP[$200] = $199;
      
      
      
      if (HEAP[$196] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      
      
      var $210 = HEAP[HEAP[HEAP[$self_addr + 16] + 4] + 24];
      
      
      var $213 = HEAP[$self_addr + 16];
      FUNCTION_TABLE[$210]($213);
      __label__ = 25;
      break;
     case 25:
      
      
      var $216 = HEAP[$self_addr + 20];
      
      
      var $219 = HEAP[$216] - 1;
      var $220 = $216;
      HEAP[$220] = $219;
      
      
      
      if (HEAP[$216] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      
      
      var $230 = HEAP[HEAP[HEAP[$self_addr + 20] + 4] + 24];
      
      
      var $233 = HEAP[$self_addr + 20];
      FUNCTION_TABLE[$230]($233);
      __label__ = 27;
      break;
     case 27:
      
      
      _PyObject_Free($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _expat_parse($self, $data, $data_len, $final) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $data_addr;
      var $data_len_addr;
      var $final_addr;
      var $retval;
      var $0;
      var $ok;
      $self_addr = $self;
      $data_addr = $data;
      $data_len_addr = $data_len;
      $final_addr = $final;
      
      
      var $3 = HEAP[HEAP[_expat_capi] + 36];
      
      
      var $6 = HEAP[$self_addr + 8];
      
      
      
      var $10 = FUNCTION_TABLE[$3]($6, $data_addr, $data_len_addr, $final_addr);
      $ok = $10;
      var $11 = _PyErr_Occurred();
      
      if ($11 != 0) {
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
      
      
      if ($ok == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $17 = HEAP[HEAP[_expat_capi] + 28];
      
      
      var $20 = HEAP[$self_addr + 8];
      var $21 = FUNCTION_TABLE[$17]($20);
      
      
      var $24 = HEAP[HEAP[_expat_capi] + 32];
      
      
      var $27 = HEAP[$self_addr + 8];
      var $28 = FUNCTION_TABLE[$24]($27);
      
      
      var $31 = HEAP[HEAP[_expat_capi] + 20];
      
      
      var $34 = HEAP[HEAP[_expat_capi] + 24];
      
      
      var $37 = HEAP[$self_addr + 8];
      var $38 = FUNCTION_TABLE[$34]($37);
      var $39 = FUNCTION_TABLE[$31]($38);
      _expat_set_error($39, $28, $21);
      $0 = 0;
      __label__ = 5;
      break;
     case 4:
      
      var $41 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $41;
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
  function _xmlparser_close($self, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $res;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str71, allocate(1, "i32", ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      var $5 = _expat_parse($self_addr, __str1, 0, 1);
      $res = $5;
      
      
      if ($res == 0) {
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
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 12] + 4] == _TreeBuilder_Type) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
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
      
      
      
      var $33 = HEAP[$self_addr + 12];
      var $34 = _treebuilder_done($33);
      $0 = $34;
      __label__ = 13;
      break;
     case 8:
      
      
      
      
      var $39 = $res;
      if (HEAP[$self_addr + 48] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      var $42 = HEAP[$39] - 1;
      
      
      HEAP[$res] = $42;
      
      
      
      
      if (HEAP[$res] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $53 = HEAP[HEAP[$res + 4] + 24];
      
      FUNCTION_TABLE[$53]($res);
      __label__ = 11;
      break;
     case 11:
      
      
      var $57 = HEAP[$self_addr + 48];
      var $58 = _PyObject_CallFunction($57, __str1, allocate(1, "i32", ALLOC_STACK));
      $0 = $58;
      __label__ = 13;
      break;
     case 12:
      $0 = $39;
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
  function _xmlparser_feed($self, $args) {
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
      var $data = __stackBase__;
      var $data_len = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str95, allocate([ $data, 0, 0, 0, $data_len, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$data_len];
      var $5 = HEAP[$data];
      
      var $7 = _expat_parse($self_addr, $5, $4, 0);
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
  function _xmlparser_parse($self, $args) {
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
      var $reader;
      var $buffer;
      var $res;
      var $fileobj = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str96, allocate([ $fileobj, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$fileobj];
      var $5 = _PyObject_GetAttrString($4, __str97);
      $reader = $5;
      
      
      if ($reader == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 28;
      break;
     case 4:
      
      var $9 = _PyObject_CallFunction($reader, __str98, allocate([ 65536, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $buffer = $9;
      
      if ($9 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      var $14 = HEAP[$reader] - 1;
      
      
      HEAP[$reader] = $14;
      
      
      
      
      if (HEAP[$reader] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $25 = HEAP[HEAP[$reader + 4] + 24];
      
      FUNCTION_TABLE[$25]($reader);
      __label__ = 7;
      break;
     case 7:
      $0 = 0;
      __label__ = 28;
      break;
     case 8:
      
      
      
      
      if (HEAP[$buffer + 4] != _PyString_Type) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      if (HEAP[$buffer + 8] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      var $39 = HEAP[$buffer] - 1;
      
      
      HEAP[$buffer] = $39;
      
      
      
      
      if (HEAP[$buffer] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $50 = HEAP[HEAP[$buffer + 4] + 24];
      
      FUNCTION_TABLE[$50]($buffer);
      __label__ = 12;
      break;
     case 12:
      
      
      
      var $55 = HEAP[$reader] - 1;
      
      
      HEAP[$reader] = $55;
      
      
      
      
      if (HEAP[$reader] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 13:
      
      
      
      var $65 = HEAP[$buffer + 8];
      
      
      
      
      
      var $71 = _expat_parse($self_addr, $buffer + 20, $65, 0);
      $res = $71;
      
      
      
      var $75 = HEAP[$buffer] - 1;
      
      
      HEAP[$buffer] = $75;
      
      
      
      
      if (HEAP[$buffer] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $86 = HEAP[HEAP[$buffer + 4] + 24];
      
      FUNCTION_TABLE[$86]($buffer);
      __label__ = 15;
      break;
     case 15:
      
      
      if ($res == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      
      
      
      var $93 = HEAP[$reader] - 1;
      
      
      HEAP[$reader] = $93;
      
      
      
      
      if (HEAP[$reader] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $104 = HEAP[HEAP[$reader + 4] + 24];
      
      FUNCTION_TABLE[$104]($reader);
      __label__ = 18;
      break;
     case 18:
      $0 = 0;
      __label__ = 28;
      break;
     case 19:
      
      
      
      var $109 = HEAP[$res] - 1;
      
      
      HEAP[$res] = $109;
      
      
      
      
      if (HEAP[$res] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 20:
      
      
      
      
      var $120 = HEAP[HEAP[$res + 4] + 24];
      
      FUNCTION_TABLE[$120]($res);
      __label__ = 4;
      break;
     case 21:
      
      
      
      
      var $126 = HEAP[HEAP[$reader + 4] + 24];
      
      FUNCTION_TABLE[$126]($reader);
      __label__ = 22;
      break;
     case 22:
      
      var $129 = _expat_parse($self_addr, __str1, 0, 1);
      $res = $129;
      
      if ($129 != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 23:
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 12] + 4] == _TreeBuilder_Type) {
        __label__ = 24;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 24:
      
      
      
      var $140 = HEAP[$res] - 1;
      
      
      HEAP[$res] = $140;
      
      
      
      
      if (HEAP[$res] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $151 = HEAP[HEAP[$res + 4] + 24];
      
      FUNCTION_TABLE[$151]($res);
      __label__ = 26;
      break;
     case 26:
      
      
      
      var $156 = HEAP[$self_addr + 12];
      var $157 = _treebuilder_done($156);
      $0 = $157;
      __label__ = 28;
      break;
     case 27:
      
      $0 = $res;
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
  function _xmlparser_setevents($self, $args) {
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
      var $target;
      var $events = __stackBase__;
      var $event_set = __stackBase__ + 4;
      var $item;
      var $event;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$event_set] = __Py_NoneStruct;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str99, allocate([ _PyList_Type, 0, 0, 0, $events, 0, 0, 0, $event_set, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      
      
      if (HEAP[HEAP[$self_addr + 12] + 4] != _TreeBuilder_Type) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($10, __str100);
      $0 = 0;
      __label__ = 46;
      break;
     case 4:
      
      
      
      
      $target = HEAP[$self_addr + 12];
      
      
      
      var $18 = HEAP[HEAP[$events]] + 1;
      var $19 = HEAP[$events];
      HEAP[$19] = $18;
      
      
      
      
      if (HEAP[$target + 32] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      var $26 = HEAP[$target + 32];
      
      
      var $29 = HEAP[$26] - 1;
      var $30 = $26;
      HEAP[$30] = $29;
      
      
      
      if (HEAP[$26] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      
      var $40 = HEAP[HEAP[HEAP[$target + 32] + 4] + 24];
      
      
      var $43 = HEAP[$target + 32];
      FUNCTION_TABLE[$40]($43);
      __label__ = 7;
      break;
     case 7:
      var $44 = HEAP[$events];
      
      
      HEAP[$target + 32] = $44;
      
      
      
      
      if (HEAP[$target + 36] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      var $53 = HEAP[$target + 36];
      
      
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
      
      
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[$target + 36] + 4] + 24];
      
      
      var $70 = HEAP[$target + 36];
      FUNCTION_TABLE[$67]($70);
      __label__ = 10;
      break;
     case 10:
      
      
      HEAP[$target + 36] = 0;
      
      
      
      
      if (HEAP[$target + 40] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      var $79 = HEAP[$target + 40];
      
      
      var $82 = HEAP[$79] - 1;
      var $83 = $79;
      HEAP[$83] = $82;
      
      
      
      if (HEAP[$79] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      var $93 = HEAP[HEAP[HEAP[$target + 40] + 4] + 24];
      
      
      var $96 = HEAP[$target + 40];
      FUNCTION_TABLE[$93]($96);
      __label__ = 13;
      break;
     case 13:
      
      
      HEAP[$target + 40] = 0;
      
      
      
      
      if (HEAP[$target + 44] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      var $105 = HEAP[$target + 44];
      
      
      var $108 = HEAP[$105] - 1;
      var $109 = $105;
      HEAP[$109] = $108;
      
      
      
      if (HEAP[$105] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      
      var $119 = HEAP[HEAP[HEAP[$target + 44] + 4] + 24];
      
      
      var $122 = HEAP[$target + 44];
      FUNCTION_TABLE[$119]($122);
      __label__ = 16;
      break;
     case 16:
      
      
      HEAP[$target + 44] = 0;
      
      
      
      
      if (HEAP[$target + 48] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      var $131 = HEAP[$target + 48];
      
      
      var $134 = HEAP[$131] - 1;
      var $135 = $131;
      HEAP[$135] = $134;
      
      
      
      if (HEAP[$131] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      
      
      var $145 = HEAP[HEAP[HEAP[$target + 48] + 4] + 24];
      
      
      var $148 = HEAP[$target + 48];
      FUNCTION_TABLE[$145]($148);
      __label__ = 19;
      break;
     case 19:
      
      
      HEAP[$target + 48] = 0;
      
      
      if (HEAP[$event_set] == __Py_NoneStruct) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $153 = _PyString_FromString(__str76);
      
      
      HEAP[$target + 40] = $153;
      
      var $157 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $157;
      $0 = __Py_NoneStruct;
      __label__ = 46;
      break;
     case 21:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$event_set] + 4] + 84] & 67108864) == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      $i = 0;
      __label__ = 43;
      break;
     case 23:
      
      
      
      
      
      
      $item = HEAP[HEAP[$event_set] + 12 + $i * 4];
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$item + 4] + 84] & 134217728) == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      $event = $item + 20;
      
      var $183 = _strcmp($event, __str75);
      
      if ($183 == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      var $188 = HEAP[$item] + 1;
      
      
      HEAP[$item] = $188;
      
      
      
      HEAP[$target + 36] = $item;
      __label__ = 42;
      break;
     case 26:
      
      var $195 = _strcmp($event, __str76);
      
      if ($195 == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 27:
      
      
      
      var $200 = HEAP[$item] + 1;
      
      
      HEAP[$item] = $200;
      
      
      
      
      if (HEAP[$target + 40] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 28:
      
      
      var $209 = HEAP[$target + 40];
      
      
      var $212 = HEAP[$209] - 1;
      var $213 = $209;
      HEAP[$213] = $212;
      
      
      
      if (HEAP[$209] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      
      
      var $223 = HEAP[HEAP[HEAP[$target + 40] + 4] + 24];
      
      
      var $226 = HEAP[$target + 40];
      FUNCTION_TABLE[$223]($226);
      __label__ = 30;
      break;
     case 30:
      
      
      
      HEAP[$target + 40] = $item;
      __label__ = 42;
      break;
     case 31:
      
      var $231 = _strcmp($event, __str101);
      
      if ($231 == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 32:
      
      
      
      var $236 = HEAP[$item] + 1;
      
      
      HEAP[$item] = $236;
      
      
      
      
      if (HEAP[$target + 44] != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 33:
      
      
      var $245 = HEAP[$target + 44];
      
      
      var $248 = HEAP[$245] - 1;
      var $249 = $245;
      HEAP[$249] = $248;
      
      
      
      if (HEAP[$245] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      
      
      var $259 = HEAP[HEAP[HEAP[$target + 44] + 4] + 24];
      
      
      var $262 = HEAP[$target + 44];
      FUNCTION_TABLE[$259]($262);
      __label__ = 35;
      break;
     case 35:
      
      
      
      HEAP[$target + 44] = $item;
      
      
      var $268 = HEAP[HEAP[_expat_capi] + 64];
      
      
      var $271 = HEAP[$self_addr + 8];
      FUNCTION_TABLE[$268]($271, FUNCTION_TABLE_OFFSET + 22, FUNCTION_TABLE_OFFSET + 24);
      __label__ = 42;
      break;
     case 36:
      
      var $273 = _strcmp($event, __str102);
      
      if ($273 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 37:
      
      
      
      var $278 = HEAP[$item] + 1;
      
      
      HEAP[$item] = $278;
      
      
      
      
      if (HEAP[$target + 48] != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 38:
      
      
      var $287 = HEAP[$target + 48];
      
      
      var $290 = HEAP[$287] - 1;
      var $291 = $287;
      HEAP[$291] = $290;
      
      
      
      if (HEAP[$287] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      
      
      var $301 = HEAP[HEAP[HEAP[$target + 48] + 4] + 24];
      
      
      var $304 = HEAP[$target + 48];
      FUNCTION_TABLE[$301]($304);
      __label__ = 40;
      break;
     case 40:
      
      
      
      HEAP[$target + 48] = $item;
      
      
      var $310 = HEAP[HEAP[_expat_capi] + 64];
      
      
      var $313 = HEAP[$self_addr + 8];
      FUNCTION_TABLE[$310]($313, FUNCTION_TABLE_OFFSET + 22, FUNCTION_TABLE_OFFSET + 24);
      __label__ = 42;
      break;
     case 41:
      var $314 = HEAP[_PyExc_ValueError];
      
      var $316 = _PyErr_Format($314, __str103, allocate([ $event, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 46;
      break;
     case 42:
      
      var $318 = $i + 1;
      $i = $318;
      __label__ = 43;
      break;
     case 43:
      
      
      
      
      
      
      if (HEAP[HEAP[$event_set] + 8] > $i) {
        __label__ = 23;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      
      var $326 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $326;
      $0 = __Py_NoneStruct;
      __label__ = 46;
      break;
     case 45:
      var $327 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($327, __str104);
      $0 = 0;
      __label__ = 46;
      break;
     case 46:
      
      $retval = $0;
      var $retval45 = $retval;
      STACKTOP = __stackBase__;
      return $retval45;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _xmlparser_getattr($self, $name) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 100;
    _memset(__stackBase__, 0, 100);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $name_addr;
      var $retval;
      var $0;
      var $res;
      var $buffer = __stackBase__;
      $self_addr = $self;
      $name_addr = $name;
      
      
      
      var $4 = _Py_FindMethod(_xmlparser_methods, $self_addr, $name_addr);
      $res = $4;
      
      
      if ($res != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $0 = $res;
      __label__ = 10;
      break;
     case 2:
      _PyErr_Clear();
      
      var $9 = _strcmp($name_addr, __str108);
      
      if ($9 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      $res = HEAP[$self_addr + 16];
      __label__ = 9;
      break;
     case 4:
      
      var $15 = _strcmp($name_addr, __str89);
      
      if ($15 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      $res = HEAP[$self_addr + 12];
      __label__ = 9;
      break;
     case 6:
      
      var $21 = _strcmp($name_addr, __str109);
      
      if ($21 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $buffer7 = $buffer;
      var $23 = _sprintf($buffer7, __str110, allocate([ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      var $buffer8 = $buffer;
      var $24 = _PyString_FromString($buffer8);
      $0 = $24;
      __label__ = 10;
      break;
     case 8:
      var $25 = HEAP[_PyExc_AttributeError];
      
      _PyErr_SetString($25, $name_addr);
      $0 = 0;
      __label__ = 10;
      break;
     case 9:
      
      
      
      var $30 = HEAP[$res] + 1;
      
      
      HEAP[$res] = $30;
      
      $0 = $res;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval12 = $retval;
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _init_elementtree() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $g;
      var $bootstrap;
      var $mp;
      HEAP[_TreeBuilder_Type + 4] = _PyType_Type;
      var $0 = HEAP[_TreeBuilder_Type + 4];
      HEAP[_Element_Type + 4] = $0;
      HEAP[_XMLParser_Type + 4] = _PyType_Type;
      var $1 = _Py_InitModule4(__str114, __functions, 0, 0, 1013);
      $m = $1;
      
      
      if ($m == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $4 = _PyDict_New();
      $g = $4;
      
      
      if ($g == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $7 = _PyEval_GetBuiltins();
      
      var $9 = _PyDict_SetItemString($g, __str115, $7);
      $bootstrap = __str116;
      
      
      var $12 = _PyRun_StringFlags($bootstrap, 257, $g, 0, 0);
      
      if ($12 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $15 = _PyDict_GetItemString($g, __str117);
      HEAP[_elementpath_obj] = $15;
      
      var $17 = _PyDict_GetItemString($g, __str118);
      HEAP[_elementtree_copyelement_obj] = $17;
      
      
      if (HEAP[_elementtree_copyelement_obj] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      $mp = _element_methods;
      __label__ = 8;
      break;
     case 5:
      
      
      
      
      var $24 = $mp;
      if (HEAP[$mp + 4] == FUNCTION_TABLE_OFFSET + 26) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      HEAP[$24] = __str119;
      __label__ = 10;
      break;
     case 7:
      var $26 = $24 + 16;
      $mp = $26;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      if (HEAP[$mp] != 0) {
        __label__ = 5;
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
      
      var $32 = _PyDict_GetItemString($g, __str120);
      HEAP[_elementtree_deepcopy_obj] = $32;
      
      var $34 = _PyDict_GetItemString($g, __str49);
      HEAP[_elementtree_iter_obj] = $34;
      
      var $36 = _PyDict_GetItemString($g, __str50);
      HEAP[_elementtree_itertext_obj] = $36;
      var $37 = _PyCapsule_Import(__str121, 0);
      
      HEAP[_expat_capi] = $37;
      
      if ($37 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 11:
      
      
      var $42 = HEAP[HEAP[_expat_capi]];
      var $43 = _strcmp($42, __str122);
      
      if ($43 != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      if (HEAP[HEAP[_expat_capi] + 4] <= 79) {
        __label__ = 16;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      if (HEAP[HEAP[_expat_capi] + 8] != 2) {
        __label__ = 16;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      if (HEAP[HEAP[_expat_capi] + 12] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      if (HEAP[HEAP[_expat_capi] + 16] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      HEAP[_expat_capi] = 0;
      __label__ = 17;
      break;
     case 17:
      var $61 = HEAP[_PyExc_SyntaxError];
      var $62 = _PyErr_NewException(__str123, $61, 0);
      HEAP[_elementtree_parseerror_obj] = $62;
      
      
      
      var $66 = HEAP[HEAP[_elementtree_parseerror_obj]] + 1;
      var $67 = HEAP[_elementtree_parseerror_obj];
      HEAP[$67] = $66;
      var $68 = HEAP[_elementtree_parseerror_obj];
      
      var $70 = _PyModule_AddObject($m, __str124, $68);
      __label__ = 18;
      break;
     case 18:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_elementtree"] = _init_elementtree;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _PyObject_Malloc, 0, _PyObject_Realloc, 0, _PyObject_Free, 0, _expat_start_handler, 0, _expat_end_handler, 0, _expat_default_handler, 0, _expat_data_handler, 0, _expat_comment_handler, 0, _expat_pi_handler, 0, _expat_unknown_encoding_handler, 0, _expat_start_ns_handler, 0, _expat_end_ns_handler, 0, _element_reduce, 0, _element_clear, 0, _element_get, 0, _element_set, 0, _element_find, 0, _element_findtext, 0, _element_findall, 0, _element_append, 0, _element_extend, 0, _element_insert, 0, _element_remove, 0, _element_iter, 0, _element_itertext, 0, _element_iterfind, 0, _element_getchildren, 0, _element_items, 0, _element_keys, 0, _element_makeelement, 0, _element_copy, 0, _element_deepcopy, 0, _element_length, 0, _element_getitem, 0, _element_setitem, 0, _element_subscr, 0, _element_ass_subscr, 0, _element_dealloc, 0, _element_getattr, 0, _element_setattr, 0, _element_repr, 0, _treebuilder_data, 0, _treebuilder_start, 0, _treebuilder_end, 0, _treebuilder_xml, 0, _treebuilder_close, 0, _treebuilder_dealloc, 0, _treebuilder_getattr, 0, _xmlparser_feed, 0, _xmlparser_close, 0, _xmlparser_parse, 0, _xmlparser_setevents, 0, _xmlparser_dealloc, 0, _xmlparser_getattr, 0, _element, 0, _subelement, 0, _treebuilder, 0, _xmlparser, 0 ]);
  function run(args) {
    _elementtree_deepcopy_obj = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str = allocate([ 100, 101, 101, 112, 99, 111, 112, 121, 32, 104, 101, 108, 112, 101, 114, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate(1, "i8", ALLOC_NORMAL);
    __str2 = allocate([ 106, 111, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 79, 124, 79, 33, 58, 69, 108, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 79, 33, 79, 124, 79, 33, 58, 83, 117, 98, 69, 108, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 79, 33, 58, 97, 112, 112, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 58, 99, 108, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 58, 95, 95, 99, 111, 112, 121, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 79, 58, 95, 95, 100, 101, 101, 112, 99, 111, 112, 121, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 79, 58, 101, 120, 116, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 101, 120, 112, 101, 99, 116, 101, 100, 32, 115, 101, 113, 117, 101, 110, 99, 101, 44, 32, 110, 111, 116, 32, 34, 37, 46, 50, 48, 48, 115, 34, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 79, 124, 79, 58, 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _elementpath_obj = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str12 = allocate([ 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 79, 79, 79, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 79, 124, 79, 79, 58, 102, 105, 110, 100, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 102, 105, 110, 100, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 79, 79, 79, 79, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 79, 124, 79, 58, 102, 105, 110, 100, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 102, 105, 110, 100, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 79, 124, 79, 58, 105, 116, 101, 114, 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 105, 116, 101, 114, 102, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 79, 124, 79, 58, 103, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 58, 103, 101, 116, 99, 104, 105, 108, 100, 114, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 124, 79, 58, 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _elementtree_iter_obj = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str24 = allocate([ 105, 116, 101, 114, 32, 104, 101, 108, 112, 101, 114, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 58, 105, 116, 101, 114, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    _elementtree_itertext_obj = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str26 = allocate([ 105, 116, 101, 114, 116, 101, 120, 116, 32, 104, 101, 108, 112, 101, 114, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 99, 104, 105, 108, 100, 32, 105, 110, 100, 101, 120, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 105, 79, 33, 58, 105, 110, 115, 101, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 58, 105, 116, 101, 109, 115, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 58, 107, 101, 121, 115, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 79, 79, 58, 109, 97, 107, 101, 101, 108, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 58, 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _elementtree_copyelement_obj = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str33 = allocate([ 99, 111, 112, 121, 101, 108, 101, 109, 101, 110, 116, 32, 104, 101, 108, 112, 101, 114, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 79, 40, 78, 41, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 79, 33, 58, 114, 101, 109, 111, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 108, 105, 115, 116, 46, 114, 101, 109, 111, 118, 101, 40, 120, 41, 58, 32, 120, 32, 110, 111, 116, 32, 105, 110, 32, 108, 105, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 60, 69, 108, 101, 109, 101, 110, 116, 32, 37, 115, 32, 97, 116, 32, 37, 112, 62, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 79, 79, 58, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 99, 104, 105, 108, 100, 32, 97, 115, 115, 105, 103, 110, 109, 101, 110, 116, 32, 105, 110, 100, 101, 120, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 101, 108, 101, 109, 101, 110, 116, 32, 105, 110, 100, 105, 99, 101, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 116, 101, 103, 101, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 97, 116, 116, 101, 109, 112, 116, 32, 116, 111, 32, 97, 115, 115, 105, 103, 110, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 102, 32, 115, 105, 122, 101, 32, 37, 122, 100, 32, 116, 111, 32, 101, 120, 116, 101, 110, 100, 101, 100, 32, 115, 108, 105, 99, 101, 32, 111, 102, 32, 115, 105, 122, 101, 32, 37, 122, 100, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 99, 108, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 103, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 97, 112, 112, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 101, 120, 116, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 105, 110, 115, 101, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 114, 101, 109, 111, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 105, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 105, 116, 101, 114, 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 103, 101, 116, 105, 116, 101, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 103, 101, 116, 99, 104, 105, 108, 100, 114, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 105, 116, 101, 109, 115, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 107, 101, 121, 115, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 109, 97, 107, 101, 101, 108, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 95, 95, 99, 111, 112, 121, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 95, 95, 100, 101, 101, 112, 99, 111, 112, 121, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 33, 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _element_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str59 = allocate([ 116, 97, 103, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 116, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 116, 97, 105, 108, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 97, 116, 116, 114, 105, 98, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 99, 97, 110, 39, 116, 32, 100, 101, 108, 101, 116, 101, 32, 101, 108, 101, 109, 101, 110, 116, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _element_as_sequence = allocate(40, [ "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i32, i32)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, i32, i32, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _element_as_mapping = allocate(12, [ "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0 ], ALLOC_NORMAL);
    __str64 = allocate([ 69, 108, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    _Element_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str65 = allocate([ 58, 84, 114, 101, 101, 66, 117, 105, 108, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _elementtree_parseerror_obj = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str66 = allocate([ 109, 117, 108, 116, 105, 112, 108, 101, 32, 101, 108, 101, 109, 101, 110, 116, 115, 32, 111, 110, 32, 116, 111, 112, 32, 108, 101, 118, 101, 108, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 112, 111, 112, 32, 102, 114, 111, 109, 32, 101, 109, 112, 116, 121, 32, 115, 116, 97, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 79, 79, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 79, 58, 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 79, 58, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 58, 99, 108, 111, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 79, 124, 79, 58, 115, 116, 97, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 79, 79, 58, 120, 109, 108, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 100, 97, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 115, 116, 97, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 120, 109, 108, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 99, 108, 111, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    _treebuilder_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str79 = allocate([ 84, 114, 101, 101, 66, 117, 105, 108, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _TreeBuilder_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str80 = allocate([ 115, 116, 114, 105, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 37, 115, 58, 32, 108, 105, 110, 101, 32, 37, 100, 44, 32, 99, 111, 108, 117, 109, 110, 32, 37, 100, 0 ], "i8", ALLOC_NORMAL);
    __str82 = allocate([ 115, 0 ], "i8", ALLOC_NORMAL);
    __str83 = allocate([ 40, 105, 105, 41, 0 ], "i8", ALLOC_NORMAL);
    __str84 = allocate([ 112, 111, 115, 105, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 79, 0 ], "i8", ALLOC_NORMAL);
    __str86 = allocate([ 117, 110, 100, 101, 102, 105, 110, 101, 100, 32, 101, 110, 116, 105, 116, 121, 32, 38, 37, 46, 49, 48, 48, 115, 59, 0 ], "i8", ALLOC_NORMAL);
    _expat_capi = allocate(1, "%struct.PyExpat_CAPI*", ALLOC_NORMAL);
    __str87 = allocate([ 114, 101, 112, 108, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str88 = allocate([ 124, 79, 122, 58, 88, 77, 76, 80, 97, 114, 115, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_12207 = allocate(12, "i8*", ALLOC_NORMAL);
    __str89 = allocate([ 116, 97, 114, 103, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str90 = allocate([ 101, 110, 99, 111, 100, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str91 = allocate([ 99, 97, 110, 110, 111, 116, 32, 108, 111, 97, 100, 32, 100, 105, 115, 112, 97, 116, 99, 104, 32, 116, 97, 98, 108, 101, 32, 102, 114, 111, 109, 32, 112, 121, 101, 120, 112, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    _memory_handler_12204 = allocate(12, [ "i8* (i32)*", 0, 0, 0, "i8* (i8*, i32)*", 0, 0, 0, "void (i8*)*", 0, 0, 0 ], ALLOC_NORMAL);
    __str92 = allocate([ 125, 0 ], "i8", ALLOC_NORMAL);
    __str93 = allocate([ 99, 111, 109, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str94 = allocate([ 112, 105, 0 ], "i8", ALLOC_NORMAL);
    __str95 = allocate([ 115, 35, 58, 102, 101, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str96 = allocate([ 79, 58, 95, 112, 97, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str97 = allocate([ 114, 101, 97, 100, 0 ], "i8", ALLOC_NORMAL);
    __str98 = allocate([ 105, 0 ], "i8", ALLOC_NORMAL);
    __str99 = allocate([ 79, 33, 124, 79, 58, 95, 115, 101, 116, 101, 118, 101, 110, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str100 = allocate([ 101, 118, 101, 110, 116, 32, 104, 97, 110, 100, 108, 105, 110, 103, 32, 111, 110, 108, 121, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 102, 111, 114, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 84, 114, 101, 101, 98, 117, 105, 108, 100, 101, 114, 32, 116, 97, 114, 103, 101, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str101 = allocate([ 115, 116, 97, 114, 116, 45, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    __str102 = allocate([ 101, 110, 100, 45, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    __str103 = allocate([ 117, 110, 107, 110, 111, 119, 110, 32, 101, 118, 101, 110, 116, 32, 39, 37, 115, 39, 0 ], "i8", ALLOC_NORMAL);
    __str104 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 101, 118, 101, 110, 116, 32, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str105 = allocate([ 102, 101, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str106 = allocate([ 95, 112, 97, 114, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str107 = allocate([ 95, 115, 101, 116, 101, 118, 101, 110, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    _xmlparser_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str108 = allocate([ 101, 110, 116, 105, 116, 121, 0 ], "i8", ALLOC_NORMAL);
    __str109 = allocate([ 118, 101, 114, 115, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str110 = allocate([ 69, 120, 112, 97, 116, 32, 37, 100, 46, 37, 100, 46, 37, 100, 0 ], "i8", ALLOC_NORMAL);
    __str111 = allocate([ 88, 77, 76, 80, 97, 114, 115, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _XMLParser_Type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str112 = allocate([ 83, 117, 98, 69, 108, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str113 = allocate([ 88, 77, 76, 84, 114, 101, 101, 66, 117, 105, 108, 100, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __functions = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str114 = allocate([ 95, 101, 108, 101, 109, 101, 110, 116, 116, 114, 101, 101, 0 ], "i8", ALLOC_NORMAL);
    __str115 = allocate([ 95, 95, 98, 117, 105, 108, 116, 105, 110, 115, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str116 = allocate([ 102, 114, 111, 109, 32, 99, 111, 112, 121, 32, 105, 109, 112, 111, 114, 116, 32, 99, 111, 112, 121, 44, 32, 100, 101, 101, 112, 99, 111, 112, 121, 10, 116, 114, 121, 58, 10, 32, 32, 102, 114, 111, 109, 32, 120, 109, 108, 46, 101, 116, 114, 101, 101, 32, 105, 109, 112, 111, 114, 116, 32, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 10, 101, 120, 99, 101, 112, 116, 32, 73, 109, 112, 111, 114, 116, 69, 114, 114, 111, 114, 58, 10, 32, 32, 105, 109, 112, 111, 114, 116, 32, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 10, 69, 84, 32, 61, 32, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 10, 100, 101, 108, 32, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 10, 105, 109, 112, 111, 114, 116, 32, 95, 101, 108, 101, 109, 101, 110, 116, 116, 114, 101, 101, 32, 97, 115, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 10, 116, 114, 121, 58, 10, 32, 32, 99, 111, 112, 121, 40, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 69, 108, 101, 109, 101, 110, 116, 40, 39, 120, 39, 41, 41, 10, 101, 120, 99, 101, 112, 116, 58, 10, 32, 32, 100, 101, 102, 32, 99, 111, 112, 121, 101, 108, 101, 109, 101, 110, 116, 40, 101, 108, 101, 109, 41, 58, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 101, 108, 101, 109, 10, 99, 108, 97, 115, 115, 32, 67, 111, 109, 109, 101, 110, 116, 80, 114, 111, 120, 121, 58, 10, 32, 100, 101, 102, 32, 95, 95, 99, 97, 108, 108, 95, 95, 40, 115, 101, 108, 102, 44, 32, 116, 101, 120, 116, 61, 78, 111, 110, 101, 41, 58, 10, 32, 32, 101, 108, 101, 109, 101, 110, 116, 32, 61, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 69, 108, 101, 109, 101, 110, 116, 40, 69, 84, 46, 67, 111, 109, 109, 101, 110, 116, 41, 10, 32, 32, 101, 108, 101, 109, 101, 110, 116, 46, 116, 101, 120, 116, 32, 61, 32, 116, 101, 120, 116, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 101, 108, 101, 109, 101, 110, 116, 10, 32, 100, 101, 102, 32, 95, 95, 99, 109, 112, 95, 95, 40, 115, 101, 108, 102, 44, 32, 111, 116, 104, 101, 114, 41, 58, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 109, 112, 40, 69, 84, 46, 67, 111, 109, 109, 101, 110, 116, 44, 32, 111, 116, 104, 101, 114, 41, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 67, 111, 109, 109, 101, 110, 116, 32, 61, 32, 67, 111, 109, 109, 101, 110, 116, 80, 114, 111, 120, 121, 40, 41, 10, 99, 108, 97, 115, 115, 32, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 40, 69, 84, 46, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 41, 58, 10, 32, 32, 100, 101, 102, 32, 112, 97, 114, 115, 101, 40, 115, 101, 108, 102, 44, 32, 115, 111, 117, 114, 99, 101, 44, 32, 112, 97, 114, 115, 101, 114, 61, 78, 111, 110, 101, 41, 58, 10, 32, 32, 32, 32, 105, 102, 32, 110, 111, 116, 32, 104, 97, 115, 97, 116, 116, 114, 40, 115, 111, 117, 114, 99, 101, 44, 32, 39, 114, 101, 97, 100, 39, 41, 58, 10, 32, 32, 32, 32, 32, 32, 115, 111, 117, 114, 99, 101, 32, 61, 32, 111, 112, 101, 110, 40, 115, 111, 117, 114, 99, 101, 44, 32, 39, 114, 98, 39, 41, 10, 32, 32, 32, 32, 105, 102, 32, 112, 97, 114, 115, 101, 114, 32, 105, 115, 32, 110, 111, 116, 32, 78, 111, 110, 101, 58, 10, 32, 32, 32, 32, 32, 32, 119, 104, 105, 108, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 97, 116, 97, 32, 61, 32, 115, 111, 117, 114, 99, 101, 46, 114, 101, 97, 100, 40, 54, 53, 53, 51, 54, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 110, 111, 116, 32, 100, 97, 116, 97, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 10, 32, 32, 32, 32, 32, 32, 32, 32, 112, 97, 114, 115, 101, 114, 46, 102, 101, 101, 100, 40, 100, 97, 116, 97, 41, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 95, 114, 111, 111, 116, 32, 61, 32, 112, 97, 114, 115, 101, 114, 46, 99, 108, 111, 115, 101, 40, 41, 10, 32, 32, 32, 32, 101, 108, 115, 101, 58, 10, 32, 32, 32, 32, 32, 32, 112, 97, 114, 115, 101, 114, 32, 61, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 88, 77, 76, 80, 97, 114, 115, 101, 114, 40, 41, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 95, 114, 111, 111, 116, 32, 61, 32, 112, 97, 114, 115, 101, 114, 46, 95, 112, 97, 114, 115, 101, 40, 115, 111, 117, 114, 99, 101, 41, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 115, 101, 108, 102, 46, 95, 114, 111, 111, 116, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 32, 61, 32, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 10, 100, 101, 102, 32, 105, 116, 101, 114, 40, 110, 111, 100, 101, 44, 32, 116, 97, 103, 61, 78, 111, 110, 101, 41, 58, 10, 32, 32, 105, 102, 32, 116, 97, 103, 32, 61, 61, 32, 39, 42, 39, 58, 10, 32, 32, 32, 32, 116, 97, 103, 32, 61, 32, 78, 111, 110, 101, 10, 32, 32, 105, 102, 32, 116, 97, 103, 32, 105, 115, 32, 78, 111, 110, 101, 32, 111, 114, 32, 110, 111, 100, 101, 46, 116, 97, 103, 32, 61, 61, 32, 116, 97, 103, 58, 10, 32, 32, 32, 32, 121, 105, 101, 108, 100, 32, 110, 111, 100, 101, 10, 32, 32, 102, 111, 114, 32, 110, 111, 100, 101, 32, 105, 110, 32, 110, 111, 100, 101, 58, 10, 32, 32, 32, 32, 102, 111, 114, 32, 110, 111, 100, 101, 32, 105, 110, 32, 105, 116, 101, 114, 40, 110, 111, 100, 101, 44, 32, 116, 97, 103, 41, 58, 10, 32, 32, 32, 32, 32, 32, 121, 105, 101, 108, 100, 32, 110, 111, 100, 101, 10, 100, 101, 102, 32, 105, 116, 101, 114, 116, 101, 120, 116, 40, 110, 111, 100, 101, 41, 58, 10, 32, 32, 105, 102, 32, 110, 111, 100, 101, 46, 116, 101, 120, 116, 58, 10, 32, 32, 32, 32, 121, 105, 101, 108, 100, 32, 110, 111, 100, 101, 46, 116, 101, 120, 116, 10, 32, 32, 102, 111, 114, 32, 101, 32, 105, 110, 32, 110, 111, 100, 101, 58, 10, 32, 32, 32, 32, 102, 111, 114, 32, 115, 32, 105, 110, 32, 101, 46, 105, 116, 101, 114, 116, 101, 120, 116, 40, 41, 58, 10, 32, 32, 32, 32, 32, 32, 121, 105, 101, 108, 100, 32, 115, 10, 32, 32, 32, 32, 105, 102, 32, 101, 46, 116, 97, 105, 108, 58, 10, 32, 32, 32, 32, 32, 32, 121, 105, 101, 108, 100, 32, 101, 46, 116, 97, 105, 108, 10, 100, 101, 102, 32, 112, 97, 114, 115, 101, 40, 115, 111, 117, 114, 99, 101, 44, 32, 112, 97, 114, 115, 101, 114, 61, 78, 111, 110, 101, 41, 58, 10, 32, 32, 116, 114, 101, 101, 32, 61, 32, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 40, 41, 10, 32, 32, 116, 114, 101, 101, 46, 112, 97, 114, 115, 101, 40, 115, 111, 117, 114, 99, 101, 44, 32, 112, 97, 114, 115, 101, 114, 41, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 101, 101, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 112, 97, 114, 115, 101, 32, 61, 32, 112, 97, 114, 115, 101, 10, 99, 108, 97, 115, 115, 32, 105, 116, 101, 114, 112, 97, 114, 115, 101, 40, 111, 98, 106, 101, 99, 116, 41, 58, 10, 32, 114, 111, 111, 116, 32, 61, 32, 78, 111, 110, 101, 10, 32, 100, 101, 102, 32, 95, 95, 105, 110, 105, 116, 95, 95, 40, 115, 101, 108, 102, 44, 32, 102, 105, 108, 101, 44, 32, 101, 118, 101, 110, 116, 115, 61, 78, 111, 110, 101, 41, 58, 10, 32, 32, 105, 102, 32, 110, 111, 116, 32, 104, 97, 115, 97, 116, 116, 114, 40, 102, 105, 108, 101, 44, 32, 39, 114, 101, 97, 100, 39, 41, 58, 10, 32, 32, 32, 32, 102, 105, 108, 101, 32, 61, 32, 111, 112, 101, 110, 40, 102, 105, 108, 101, 44, 32, 39, 114, 98, 39, 41, 10, 32, 32, 115, 101, 108, 102, 46, 95, 102, 105, 108, 101, 32, 61, 32, 102, 105, 108, 101, 10, 32, 32, 115, 101, 108, 102, 46, 95, 101, 118, 101, 110, 116, 115, 32, 61, 32, 91, 93, 10, 32, 32, 115, 101, 108, 102, 46, 95, 105, 110, 100, 101, 120, 32, 61, 32, 48, 10, 32, 32, 115, 101, 108, 102, 46, 114, 111, 111, 116, 32, 61, 32, 115, 101, 108, 102, 46, 95, 114, 111, 111, 116, 32, 61, 32, 78, 111, 110, 101, 10, 32, 32, 98, 32, 61, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 84, 114, 101, 101, 66, 117, 105, 108, 100, 101, 114, 40, 41, 10, 32, 32, 115, 101, 108, 102, 46, 95, 112, 97, 114, 115, 101, 114, 32, 61, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 88, 77, 76, 80, 97, 114, 115, 101, 114, 40, 98, 41, 10, 32, 32, 115, 101, 108, 102, 46, 95, 112, 97, 114, 115, 101, 114, 46, 95, 115, 101, 116, 101, 118, 101, 110, 116, 115, 40, 115, 101, 108, 102, 46, 95, 101, 118, 101, 110, 116, 115, 44, 32, 101, 118, 101, 110, 116, 115, 41, 10, 32, 100, 101, 102, 32, 110, 101, 120, 116, 40, 115, 101, 108, 102, 41, 58, 10, 32, 32, 119, 104, 105, 108, 101, 32, 49, 58, 10, 32, 32, 32, 32, 116, 114, 121, 58, 10, 32, 32, 32, 32, 32, 32, 105, 116, 101, 109, 32, 61, 32, 115, 101, 108, 102, 46, 95, 101, 118, 101, 110, 116, 115, 91, 115, 101, 108, 102, 46, 95, 105, 110, 100, 101, 120, 93, 10, 32, 32, 32, 32, 101, 120, 99, 101, 112, 116, 32, 73, 110, 100, 101, 120, 69, 114, 114, 111, 114, 58, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 115, 101, 108, 102, 46, 95, 112, 97, 114, 115, 101, 114, 32, 105, 115, 32, 78, 111, 110, 101, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 114, 111, 111, 116, 32, 61, 32, 115, 101, 108, 102, 46, 95, 114, 111, 111, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 97, 105, 115, 101, 32, 83, 116, 111, 112, 73, 116, 101, 114, 97, 116, 105, 111, 110, 10, 32, 32, 32, 32, 32, 32, 35, 32, 108, 111, 97, 100, 32, 101, 118, 101, 110, 116, 32, 98, 117, 102, 102, 101, 114, 10, 32, 32, 32, 32, 32, 32, 100, 101, 108, 32, 115, 101, 108, 102, 46, 95, 101, 118, 101, 110, 116, 115, 91, 58, 93, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 95, 105, 110, 100, 101, 120, 32, 61, 32, 48, 10, 32, 32, 32, 32, 32, 32, 100, 97, 116, 97, 32, 61, 32, 115, 101, 108, 102, 46, 95, 102, 105, 108, 101, 46, 114, 101, 97, 100, 40, 49, 54, 51, 56, 52, 41, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 100, 97, 116, 97, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 95, 112, 97, 114, 115, 101, 114, 46, 102, 101, 101, 100, 40, 100, 97, 116, 97, 41, 10, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 95, 114, 111, 111, 116, 32, 61, 32, 115, 101, 108, 102, 46, 95, 112, 97, 114, 115, 101, 114, 46, 99, 108, 111, 115, 101, 40, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 95, 112, 97, 114, 115, 101, 114, 32, 61, 32, 78, 111, 110, 101, 10, 32, 32, 32, 32, 101, 108, 115, 101, 58, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 95, 105, 110, 100, 101, 120, 32, 61, 32, 115, 101, 108, 102, 46, 95, 105, 110, 100, 101, 120, 32, 43, 32, 49, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 116, 101, 109, 10, 32, 100, 101, 102, 32, 95, 95, 105, 116, 101, 114, 95, 95, 40, 115, 101, 108, 102, 41, 58, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 115, 101, 108, 102, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 105, 116, 101, 114, 112, 97, 114, 115, 101, 32, 61, 32, 105, 116, 101, 114, 112, 97, 114, 115, 101, 10, 99, 108, 97, 115, 115, 32, 80, 73, 80, 114, 111, 120, 121, 58, 10, 32, 100, 101, 102, 32, 95, 95, 99, 97, 108, 108, 95, 95, 40, 115, 101, 108, 102, 44, 32, 116, 97, 114, 103, 101, 116, 44, 32, 116, 101, 120, 116, 61, 78, 111, 110, 101, 41, 58, 10, 32, 32, 101, 108, 101, 109, 101, 110, 116, 32, 61, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 69, 108, 101, 109, 101, 110, 116, 40, 69, 84, 46, 80, 73, 41, 10, 32, 32, 101, 108, 101, 109, 101, 110, 116, 46, 116, 101, 120, 116, 32, 61, 32, 116, 97, 114, 103, 101, 116, 10, 32, 32, 105, 102, 32, 116, 101, 120, 116, 58, 10, 32, 32, 32, 32, 101, 108, 101, 109, 101, 110, 116, 46, 116, 101, 120, 116, 32, 61, 32, 101, 108, 101, 109, 101, 110, 116, 46, 116, 101, 120, 116, 32, 43, 32, 39, 32, 39, 32, 43, 32, 116, 101, 120, 116, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 101, 108, 101, 109, 101, 110, 116, 10, 32, 100, 101, 102, 32, 95, 95, 99, 109, 112, 95, 95, 40, 115, 101, 108, 102, 44, 32, 111, 116, 104, 101, 114, 41, 58, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 109, 112, 40, 69, 84, 46, 80, 73, 44, 32, 111, 116, 104, 101, 114, 41, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 80, 73, 32, 61, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 80, 114, 111, 99, 101, 115, 115, 105, 110, 103, 73, 110, 115, 116, 114, 117, 99, 116, 105, 111, 110, 32, 61, 32, 80, 73, 80, 114, 111, 120, 121, 40, 41, 10, 100, 101, 102, 32, 88, 77, 76, 40, 116, 101, 120, 116, 41, 58, 10, 32, 32, 112, 97, 114, 115, 101, 114, 32, 61, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 88, 77, 76, 80, 97, 114, 115, 101, 114, 40, 41, 10, 32, 32, 112, 97, 114, 115, 101, 114, 46, 102, 101, 101, 100, 40, 116, 101, 120, 116, 41, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 112, 97, 114, 115, 101, 114, 46, 99, 108, 111, 115, 101, 40, 41, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 88, 77, 76, 32, 61, 32, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 102, 114, 111, 109, 115, 116, 114, 105, 110, 103, 32, 61, 32, 88, 77, 76, 10, 100, 101, 102, 32, 88, 77, 76, 73, 68, 40, 116, 101, 120, 116, 41, 58, 10, 32, 32, 116, 114, 101, 101, 32, 61, 32, 88, 77, 76, 40, 116, 101, 120, 116, 41, 10, 32, 32, 105, 100, 115, 32, 61, 32, 123, 125, 10, 32, 32, 102, 111, 114, 32, 101, 108, 101, 109, 32, 105, 110, 32, 116, 114, 101, 101, 46, 105, 116, 101, 114, 40, 41, 58, 10, 32, 32, 32, 32, 105, 100, 32, 61, 32, 101, 108, 101, 109, 46, 103, 101, 116, 40, 39, 105, 100, 39, 41, 10, 32, 32, 32, 32, 105, 102, 32, 105, 100, 58, 10, 32, 32, 32, 32, 32, 32, 105, 100, 115, 91, 105, 100, 93, 32, 61, 32, 101, 108, 101, 109, 10, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 101, 101, 44, 32, 105, 100, 115, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 88, 77, 76, 73, 68, 32, 61, 32, 88, 77, 76, 73, 68, 10, 116, 114, 121, 58, 10, 32, 114, 101, 103, 105, 115, 116, 101, 114, 95, 110, 97, 109, 101, 115, 112, 97, 99, 101, 32, 61, 32, 69, 84, 46, 114, 101, 103, 105, 115, 116, 101, 114, 95, 110, 97, 109, 101, 115, 112, 97, 99, 101, 10, 101, 120, 99, 101, 112, 116, 32, 65, 116, 116, 114, 105, 98, 117, 116, 101, 69, 114, 114, 111, 114, 58, 10, 32, 100, 101, 102, 32, 114, 101, 103, 105, 115, 116, 101, 114, 95, 110, 97, 109, 101, 115, 112, 97, 99, 101, 40, 112, 114, 101, 102, 105, 120, 44, 32, 117, 114, 105, 41, 58, 10, 32, 32, 69, 84, 46, 95, 110, 97, 109, 101, 115, 112, 97, 99, 101, 95, 109, 97, 112, 91, 117, 114, 105, 93, 32, 61, 32, 112, 114, 101, 102, 105, 120, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 114, 101, 103, 105, 115, 116, 101, 114, 95, 110, 97, 109, 101, 115, 112, 97, 99, 101, 32, 61, 32, 114, 101, 103, 105, 115, 116, 101, 114, 95, 110, 97, 109, 101, 115, 112, 97, 99, 101, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 100, 117, 109, 112, 32, 61, 32, 69, 84, 46, 100, 117, 109, 112, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 69, 108, 101, 109, 101, 110, 116, 80, 97, 116, 104, 32, 61, 32, 69, 108, 101, 109, 101, 110, 116, 80, 97, 116, 104, 32, 61, 32, 69, 84, 46, 69, 108, 101, 109, 101, 110, 116, 80, 97, 116, 104, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 105, 115, 101, 108, 101, 109, 101, 110, 116, 32, 61, 32, 69, 84, 46, 105, 115, 101, 108, 101, 109, 101, 110, 116, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 81, 78, 97, 109, 101, 32, 61, 32, 69, 84, 46, 81, 78, 97, 109, 101, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 116, 111, 115, 116, 114, 105, 110, 103, 32, 61, 32, 69, 84, 46, 116, 111, 115, 116, 114, 105, 110, 103, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 102, 114, 111, 109, 115, 116, 114, 105, 110, 103, 108, 105, 115, 116, 32, 61, 32, 69, 84, 46, 102, 114, 111, 109, 115, 116, 114, 105, 110, 103, 108, 105, 115, 116, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 116, 111, 115, 116, 114, 105, 110, 103, 108, 105, 115, 116, 32, 61, 32, 69, 84, 46, 116, 111, 115, 116, 114, 105, 110, 103, 108, 105, 115, 116, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 86, 69, 82, 83, 73, 79, 78, 32, 61, 32, 39, 49, 46, 48, 46, 54, 39, 10, 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 95, 95, 118, 101, 114, 115, 105, 111, 110, 95, 95, 32, 61, 32, 39, 49, 46, 48, 46, 54, 39, 10, 0 ], "i8", ALLOC_NORMAL);
    __str117 = allocate([ 69, 108, 101, 109, 101, 110, 116, 80, 97, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str118 = allocate([ 99, 111, 112, 121, 101, 108, 101, 109, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str119 = allocate([ 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str120 = allocate([ 100, 101, 101, 112, 99, 111, 112, 121, 0 ], "i8", ALLOC_NORMAL);
    __str121 = allocate([ 112, 121, 101, 120, 112, 97, 116, 46, 101, 120, 112, 97, 116, 95, 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str122 = allocate([ 112, 121, 101, 120, 112, 97, 116, 46, 101, 120, 112, 97, 116, 95, 67, 65, 80, 73, 32, 49, 46, 48, 0 ], "i8", ALLOC_NORMAL);
    __str123 = allocate([ 99, 69, 108, 101, 109, 101, 110, 116, 84, 114, 101, 101, 46, 80, 97, 114, 115, 101, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str124 = allocate([ 80, 97, 114, 115, 101, 69, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_element_methods] = __str42;
    HEAP[_element_methods + 4] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_element_methods + 16] = __str43;
    HEAP[_element_methods + 20] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_element_methods + 32] = __str44;
    HEAP[_element_methods + 36] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_element_methods + 48] = __str12;
    HEAP[_element_methods + 52] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_element_methods + 64] = __str15;
    HEAP[_element_methods + 68] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_element_methods + 80] = __str18;
    HEAP[_element_methods + 84] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_element_methods + 96] = __str45;
    HEAP[_element_methods + 100] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_element_methods + 112] = __str46;
    HEAP[_element_methods + 116] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_element_methods + 128] = __str47;
    HEAP[_element_methods + 132] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_element_methods + 144] = __str48;
    HEAP[_element_methods + 148] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_element_methods + 160] = __str49;
    HEAP[_element_methods + 164] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_element_methods + 176] = __str50;
    HEAP[_element_methods + 180] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_element_methods + 192] = __str20;
    HEAP[_element_methods + 196] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_element_methods + 208] = __str51;
    HEAP[_element_methods + 212] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_element_methods + 224] = __str52;
    HEAP[_element_methods + 228] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_element_methods + 240] = __str53;
    HEAP[_element_methods + 244] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_element_methods + 256] = __str54;
    HEAP[_element_methods + 260] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_element_methods + 272] = __str55;
    HEAP[_element_methods + 276] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_element_methods + 288] = __str56;
    HEAP[_element_methods + 292] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_element_methods + 304] = __str57;
    HEAP[_element_methods + 308] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_element_methods + 320] = __str58;
    HEAP[_element_methods + 324] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_element_as_sequence] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_element_as_sequence + 12] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_element_as_sequence + 20] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_element_as_mapping] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_element_as_mapping + 4] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_element_as_mapping + 8] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_Element_Type + 12] = __str64;
    HEAP[_Element_Type + 24] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_Element_Type + 32] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_Element_Type + 36] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_Element_Type + 44] = FUNCTION_TABLE_OFFSET + 82;
    HEAP[_Element_Type + 52] = _element_as_sequence;
    HEAP[_Element_Type + 56] = _element_as_mapping;
    HEAP[_treebuilder_methods] = __str74;
    HEAP[_treebuilder_methods + 4] = FUNCTION_TABLE_OFFSET + 84;
    HEAP[_treebuilder_methods + 16] = __str75;
    HEAP[_treebuilder_methods + 20] = FUNCTION_TABLE_OFFSET + 86;
    HEAP[_treebuilder_methods + 32] = __str76;
    HEAP[_treebuilder_methods + 36] = FUNCTION_TABLE_OFFSET + 88;
    HEAP[_treebuilder_methods + 48] = __str77;
    HEAP[_treebuilder_methods + 52] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_treebuilder_methods + 64] = __str78;
    HEAP[_treebuilder_methods + 68] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_TreeBuilder_Type + 12] = __str79;
    HEAP[_TreeBuilder_Type + 24] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_TreeBuilder_Type + 32] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_kwlist_12207] = __str89;
    HEAP[_kwlist_12207 + 4] = __str90;
    HEAP[_xmlparser_methods] = __str105;
    HEAP[_xmlparser_methods + 4] = FUNCTION_TABLE_OFFSET + 98;
    HEAP[_xmlparser_methods + 16] = __str78;
    HEAP[_xmlparser_methods + 20] = FUNCTION_TABLE_OFFSET + 100;
    HEAP[_xmlparser_methods + 32] = __str106;
    HEAP[_xmlparser_methods + 36] = FUNCTION_TABLE_OFFSET + 102;
    HEAP[_xmlparser_methods + 48] = __str107;
    HEAP[_xmlparser_methods + 52] = FUNCTION_TABLE_OFFSET + 104;
    HEAP[_XMLParser_Type + 12] = __str111;
    HEAP[_XMLParser_Type + 24] = FUNCTION_TABLE_OFFSET + 106;
    HEAP[_XMLParser_Type + 32] = FUNCTION_TABLE_OFFSET + 108;
    HEAP[__functions] = __str64;
    HEAP[__functions + 4] = FUNCTION_TABLE_OFFSET + 110;
    HEAP[__functions + 16] = __str112;
    HEAP[__functions + 20] = FUNCTION_TABLE_OFFSET + 112;
    HEAP[__functions + 32] = __str79;
    HEAP[__functions + 36] = FUNCTION_TABLE_OFFSET + 114;
    HEAP[__functions + 48] = __str111;
    HEAP[__functions + 52] = FUNCTION_TABLE_OFFSET + 116;
    HEAP[__functions + 64] = __str113;
    HEAP[__functions + 68] = FUNCTION_TABLE_OFFSET + 116;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
