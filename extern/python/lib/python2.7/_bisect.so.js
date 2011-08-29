"use strict";

// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];

  
// === Auto-generated preamble library stuff ===

//========================================
// Runtime essentials
//========================================

var __globalConstructor__ = function globalConstructor() {
}

// === Body ===



var $0___SIZE = 112; // %0
  
var $1___SIZE = 16; // %1
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 0; // %struct.PyMemberDef
  var $struct_PyMemberDef___FLATTENER = [];
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  

var __str;
var __str1;
var _keywords_8354;
var __str2;
var __str3;
var __str4;
var __str5;
var _bisect_right_doc;
var __str6;
var _keywords_8380;

var __str7;
var __str8;

var _insort_right_doc;
var __str9;
var _keywords_8467;
var _bisect_left_doc;
var __str10;
var _keywords_8493;
var __str11;
var _insort_left_doc;
var _bisect_doc;
var _insort_doc;
var __str12;
var __str13;
var __str14;
var __str15;
var __str16;
var __str17;
var _bisect_methods;
var _module_doc;
var __str18;














  function _internal_bisect_right($list, $item, $lo, $hi) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $list_addr;
        var $item_addr;
        var $lo_addr;
        var $hi_addr;
        var $retval;
        var $0;
        var $litem;
        var $mid;
        var $res;
        $list_addr=$list;
        $item_addr=$item;
        $lo_addr=$lo;
        $hi_addr=$hi;
        var $1=$lo_addr; //@line 14 "_bisectmodule.c"
        var $2=($1) < 0; //@line 14 "_bisectmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 14 "_bisectmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_ValueError]; //@line 15 "_bisectmodule.c"
        _PyErr_SetString($3, __str); //@line 15 "_bisectmodule.c"
        $0=-1; //@line 16 "_bisectmodule.c"
        __label__ = 16; break; //@line 16 "_bisectmodule.c"
      case 2: // $bb1
        var $4=$hi_addr; //@line 18 "_bisectmodule.c"
        var $5=($4)==-1; //@line 18 "_bisectmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 14; break; } //@line 18 "_bisectmodule.c"
      case 3: // $bb2
        var $6=$list_addr; //@line 19 "_bisectmodule.c"
        var $7=_PySequence_Size($6); //@line 19 "_bisectmodule.c"
        $hi_addr=$7; //@line 19 "_bisectmodule.c"
        var $8=$hi_addr; //@line 20 "_bisectmodule.c"
        var $9=($8) < 0; //@line 20 "_bisectmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 14; break; } //@line 20 "_bisectmodule.c"
      case 4: // $bb3
        $0=-1; //@line 21 "_bisectmodule.c"
        __label__ = 16; break; //@line 21 "_bisectmodule.c"
      case 5: // $bb5
        var $10=$hi_addr; //@line 24 "_bisectmodule.c"
        var $11=($10) + ($46); //@line 24 "_bisectmodule.c"
        var $12=((($11)/2)|0); //@line 24 "_bisectmodule.c"
        $mid=$12; //@line 24 "_bisectmodule.c"
        var $13=$list_addr; //@line 25 "_bisectmodule.c"
        var $14=$mid; //@line 25 "_bisectmodule.c"
        var $15=_PySequence_GetItem($13, $14); //@line 25 "_bisectmodule.c"
        $litem=$15; //@line 25 "_bisectmodule.c"
        var $16=$litem; //@line 26 "_bisectmodule.c"
        var $17=($16)==0; //@line 26 "_bisectmodule.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 26 "_bisectmodule.c"
      case 6: // $bb6
        $0=-1; //@line 27 "_bisectmodule.c"
        __label__ = 16; break; //@line 27 "_bisectmodule.c"
      case 7: // $bb7
        var $18=$item_addr; //@line 28 "_bisectmodule.c"
        var $19=$litem; //@line 28 "_bisectmodule.c"
        var $20=_PyObject_RichCompareBool($18, $19, 0); //@line 28 "_bisectmodule.c"
        $res=$20; //@line 28 "_bisectmodule.c"
        var $21=$litem; //@line 29 "_bisectmodule.c"
        var $22=$21; //@line 29 "_bisectmodule.c"
        var $23=HEAP[$22]; //@line 29 "_bisectmodule.c"
        var $24=($23) - 1; //@line 29 "_bisectmodule.c"
        var $25=$litem; //@line 29 "_bisectmodule.c"
        var $26=$25; //@line 29 "_bisectmodule.c"
        HEAP[$26]=$24; //@line 29 "_bisectmodule.c"
        var $27=$litem; //@line 29 "_bisectmodule.c"
        var $28=$27; //@line 29 "_bisectmodule.c"
        var $29=HEAP[$28]; //@line 29 "_bisectmodule.c"
        var $30=($29)==0; //@line 29 "_bisectmodule.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 29 "_bisectmodule.c"
      case 8: // $bb8
        var $31=$litem; //@line 29 "_bisectmodule.c"
        var $32=$31+4; //@line 29 "_bisectmodule.c"
        var $33=HEAP[$32]; //@line 29 "_bisectmodule.c"
        var $34=$33+24; //@line 29 "_bisectmodule.c"
        var $35=HEAP[$34]; //@line 29 "_bisectmodule.c"
        var $36=$litem; //@line 29 "_bisectmodule.c"
        FUNCTION_TABLE[$35]($36); //@line 29 "_bisectmodule.c"
        __label__ = 9; break; //@line 29 "_bisectmodule.c"
      case 9: // $bb9
        var $37=$res; //@line 30 "_bisectmodule.c"
        var $38=($37) < 0; //@line 30 "_bisectmodule.c"
        if ($38) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 30 "_bisectmodule.c"
      case 10: // $bb10
        $0=-1; //@line 31 "_bisectmodule.c"
        __label__ = 16; break; //@line 31 "_bisectmodule.c"
      case 11: // $bb11
        var $39=$res; //@line 32 "_bisectmodule.c"
        var $40=($39)!=0; //@line 32 "_bisectmodule.c"
        var $41=$mid; //@line 33 "_bisectmodule.c"
        if ($40) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 32 "_bisectmodule.c"
      case 12: // $bb12
        $hi_addr=$41; //@line 33 "_bisectmodule.c"
        __label__ = 14; break; //@line 33 "_bisectmodule.c"
      case 13: // $bb13
        var $42=($41) + 1; //@line 35 "_bisectmodule.c"
        $lo_addr=$42; //@line 35 "_bisectmodule.c"
        __label__ = 14; break; //@line 35 "_bisectmodule.c"
      case 14: // $bb14
        var $43=$lo_addr; //@line 23 "_bisectmodule.c"
        var $44=$hi_addr; //@line 23 "_bisectmodule.c"
        var $45=($43) < ($44); //@line 23 "_bisectmodule.c"
        var $46=$lo_addr; //@line 24 "_bisectmodule.c"
        if ($45) { __label__ = 5; break; } else { __label__ = 15; break; } //@line 23 "_bisectmodule.c"
      case 15: // $bb15
        $0=$46; //@line 37 "_bisectmodule.c"
        __label__ = 16; break; //@line 37 "_bisectmodule.c"
      case 16: // $bb16
        var $47=$0; //@line 16 "_bisectmodule.c"
        $retval=$47; //@line 16 "_bisectmodule.c"
        var $retval17=$retval; //@line 16 "_bisectmodule.c"
        ;
        return $retval17; //@line 16 "_bisectmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _bisect_right($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $list=__stackBase__;
        var $item=__stackBase__+4;
        var $lo=__stackBase__+8;
        var $hi=__stackBase__+12;
        var $index;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        HEAP[$lo]=0; //@line 44 "_bisectmodule.c"
        HEAP[$hi]=-1; //@line 45 "_bisectmodule.c"
        var $1=$args_addr; //@line 49 "_bisectmodule.c"
        var $2=$kw_addr; //@line 49 "_bisectmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str1, _keywords_8354, allocate([$list,0,0,0,$item,0,0,0,$lo,0,0,0,$hi,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 49 "_bisectmodule.c"
        var $4=($3)==0; //@line 49 "_bisectmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 49 "_bisectmodule.c"
      case 1: // $bb
        $0=0; //@line 51 "_bisectmodule.c"
        __label__ = 5; break; //@line 51 "_bisectmodule.c"
      case 2: // $bb1
        var $5=HEAP[$hi]; //@line 52 "_bisectmodule.c"
        var $6=HEAP[$lo]; //@line 52 "_bisectmodule.c"
        var $7=HEAP[$item]; //@line 52 "_bisectmodule.c"
        var $8=HEAP[$list]; //@line 52 "_bisectmodule.c"
        var $9=_internal_bisect_right($8, $7, $6, $5); //@line 52 "_bisectmodule.c"
        $index=$9; //@line 52 "_bisectmodule.c"
        var $10=$index; //@line 53 "_bisectmodule.c"
        var $11=($10) < 0; //@line 53 "_bisectmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 53 "_bisectmodule.c"
      case 3: // $bb2
        $0=0; //@line 54 "_bisectmodule.c"
        __label__ = 5; break; //@line 54 "_bisectmodule.c"
      case 4: // $bb3
        var $12=$index; //@line 55 "_bisectmodule.c"
        var $13=_PyInt_FromSsize_t($12); //@line 55 "_bisectmodule.c"
        $0=$13; //@line 55 "_bisectmodule.c"
        __label__ = 5; break; //@line 55 "_bisectmodule.c"
      case 5: // $bb4
        var $14=$0; //@line 51 "_bisectmodule.c"
        $retval=$14; //@line 51 "_bisectmodule.c"
        var $retval5=$retval; //@line 51 "_bisectmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 51 "_bisectmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _insort_right($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $list=__stackBase__;
        var $item=__stackBase__+4;
        var $result;
        var $lo=__stackBase__+8;
        var $hi=__stackBase__+12;
        var $index;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        HEAP[$lo]=0; //@line 74 "_bisectmodule.c"
        HEAP[$hi]=-1; //@line 75 "_bisectmodule.c"
        var $1=$args_addr; //@line 79 "_bisectmodule.c"
        var $2=$kw_addr; //@line 79 "_bisectmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str6, _keywords_8380, allocate([$list,0,0,0,$item,0,0,0,$lo,0,0,0,$hi,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 79 "_bisectmodule.c"
        var $4=($3)==0; //@line 79 "_bisectmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 79 "_bisectmodule.c"
      case 1: // $bb
        $0=0; //@line 81 "_bisectmodule.c"
        __label__ = 12; break; //@line 81 "_bisectmodule.c"
      case 2: // $bb1
        var $5=HEAP[$hi]; //@line 82 "_bisectmodule.c"
        var $6=HEAP[$lo]; //@line 82 "_bisectmodule.c"
        var $7=HEAP[$item]; //@line 82 "_bisectmodule.c"
        var $8=HEAP[$list]; //@line 82 "_bisectmodule.c"
        var $9=_internal_bisect_right($8, $7, $6, $5); //@line 82 "_bisectmodule.c"
        $index=$9; //@line 82 "_bisectmodule.c"
        var $10=$index; //@line 83 "_bisectmodule.c"
        var $11=($10) < 0; //@line 83 "_bisectmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 83 "_bisectmodule.c"
      case 3: // $bb2
        $0=0; //@line 84 "_bisectmodule.c"
        __label__ = 12; break; //@line 84 "_bisectmodule.c"
      case 4: // $bb3
        var $12=HEAP[$list]; //@line 85 "_bisectmodule.c"
        var $13=$12+4; //@line 85 "_bisectmodule.c"
        var $14=HEAP[$13]; //@line 85 "_bisectmodule.c"
        var $15=($14)==(_PyList_Type); //@line 85 "_bisectmodule.c"
        var $16=HEAP[$item]; //@line 86 "_bisectmodule.c"
        var $17=HEAP[$list]; //@line 86 "_bisectmodule.c"
        var $18=$index; //@line 86 "_bisectmodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 85 "_bisectmodule.c"
      case 5: // $bb4
        var $19=_PyList_Insert($17, $18, $16); //@line 86 "_bisectmodule.c"
        var $20=($19) < 0; //@line 86 "_bisectmodule.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 11; break; } //@line 86 "_bisectmodule.c"
      case 6: // $bb5
        $0=0; //@line 87 "_bisectmodule.c"
        __label__ = 12; break; //@line 87 "_bisectmodule.c"
      case 7: // $bb7
        var $21=_PyObject_CallMethod($17, __str7, __str8, allocate([$18,0,0,0,$16,0,0,0], ["i32",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 89 "_bisectmodule.c"
        $result=$21; //@line 89 "_bisectmodule.c"
        var $22=$result; //@line 91 "_bisectmodule.c"
        var $23=($22)==0; //@line 91 "_bisectmodule.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 91 "_bisectmodule.c"
      case 8: // $bb8
        $0=0; //@line 92 "_bisectmodule.c"
        __label__ = 12; break; //@line 92 "_bisectmodule.c"
      case 9: // $bb9
        var $24=$result; //@line 93 "_bisectmodule.c"
        var $25=$24; //@line 93 "_bisectmodule.c"
        var $26=HEAP[$25]; //@line 93 "_bisectmodule.c"
        var $27=($26) - 1; //@line 93 "_bisectmodule.c"
        var $28=$result; //@line 93 "_bisectmodule.c"
        var $29=$28; //@line 93 "_bisectmodule.c"
        HEAP[$29]=$27; //@line 93 "_bisectmodule.c"
        var $30=$result; //@line 93 "_bisectmodule.c"
        var $31=$30; //@line 93 "_bisectmodule.c"
        var $32=HEAP[$31]; //@line 93 "_bisectmodule.c"
        var $33=($32)==0; //@line 93 "_bisectmodule.c"
        if ($33) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 93 "_bisectmodule.c"
      case 10: // $bb10
        var $34=$result; //@line 93 "_bisectmodule.c"
        var $35=$34+4; //@line 93 "_bisectmodule.c"
        var $36=HEAP[$35]; //@line 93 "_bisectmodule.c"
        var $37=$36+24; //@line 93 "_bisectmodule.c"
        var $38=HEAP[$37]; //@line 93 "_bisectmodule.c"
        var $39=$result; //@line 93 "_bisectmodule.c"
        FUNCTION_TABLE[$38]($39); //@line 93 "_bisectmodule.c"
        __label__ = 11; break; //@line 93 "_bisectmodule.c"
      case 11: // $bb11
        var $40=HEAP[__Py_NoneStruct]; //@line 96 "_bisectmodule.c"
        var $41=($40) + 1; //@line 96 "_bisectmodule.c"
        HEAP[__Py_NoneStruct]=$41; //@line 96 "_bisectmodule.c"
        $0=__Py_NoneStruct; //@line 96 "_bisectmodule.c"
        __label__ = 12; break; //@line 96 "_bisectmodule.c"
      case 12: // $bb12
        var $42=$0; //@line 81 "_bisectmodule.c"
        $retval=$42; //@line 81 "_bisectmodule.c"
        var $retval13=$retval; //@line 81 "_bisectmodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 81 "_bisectmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _internal_bisect_left($list, $item, $lo, $hi) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $list_addr;
        var $item_addr;
        var $lo_addr;
        var $hi_addr;
        var $retval;
        var $0;
        var $litem;
        var $mid;
        var $res;
        $list_addr=$list;
        $item_addr=$item;
        $lo_addr=$lo;
        $hi_addr=$hi;
        var $1=$lo_addr; //@line 115 "_bisectmodule.c"
        var $2=($1) < 0; //@line 115 "_bisectmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 115 "_bisectmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_ValueError]; //@line 116 "_bisectmodule.c"
        _PyErr_SetString($3, __str); //@line 116 "_bisectmodule.c"
        $0=-1; //@line 117 "_bisectmodule.c"
        __label__ = 16; break; //@line 117 "_bisectmodule.c"
      case 2: // $bb1
        var $4=$hi_addr; //@line 119 "_bisectmodule.c"
        var $5=($4)==-1; //@line 119 "_bisectmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 14; break; } //@line 119 "_bisectmodule.c"
      case 3: // $bb2
        var $6=$list_addr; //@line 120 "_bisectmodule.c"
        var $7=_PySequence_Size($6); //@line 120 "_bisectmodule.c"
        $hi_addr=$7; //@line 120 "_bisectmodule.c"
        var $8=$hi_addr; //@line 121 "_bisectmodule.c"
        var $9=($8) < 0; //@line 121 "_bisectmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 14; break; } //@line 121 "_bisectmodule.c"
      case 4: // $bb3
        $0=-1; //@line 122 "_bisectmodule.c"
        __label__ = 16; break; //@line 122 "_bisectmodule.c"
      case 5: // $bb5
        var $10=$hi_addr; //@line 125 "_bisectmodule.c"
        var $11=($10) + ($46); //@line 125 "_bisectmodule.c"
        var $12=((($11)/2)|0); //@line 125 "_bisectmodule.c"
        $mid=$12; //@line 125 "_bisectmodule.c"
        var $13=$list_addr; //@line 126 "_bisectmodule.c"
        var $14=$mid; //@line 126 "_bisectmodule.c"
        var $15=_PySequence_GetItem($13, $14); //@line 126 "_bisectmodule.c"
        $litem=$15; //@line 126 "_bisectmodule.c"
        var $16=$litem; //@line 127 "_bisectmodule.c"
        var $17=($16)==0; //@line 127 "_bisectmodule.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 127 "_bisectmodule.c"
      case 6: // $bb6
        $0=-1; //@line 128 "_bisectmodule.c"
        __label__ = 16; break; //@line 128 "_bisectmodule.c"
      case 7: // $bb7
        var $18=$litem; //@line 129 "_bisectmodule.c"
        var $19=$item_addr; //@line 129 "_bisectmodule.c"
        var $20=_PyObject_RichCompareBool($18, $19, 0); //@line 129 "_bisectmodule.c"
        $res=$20; //@line 129 "_bisectmodule.c"
        var $21=$litem; //@line 130 "_bisectmodule.c"
        var $22=$21; //@line 130 "_bisectmodule.c"
        var $23=HEAP[$22]; //@line 130 "_bisectmodule.c"
        var $24=($23) - 1; //@line 130 "_bisectmodule.c"
        var $25=$litem; //@line 130 "_bisectmodule.c"
        var $26=$25; //@line 130 "_bisectmodule.c"
        HEAP[$26]=$24; //@line 130 "_bisectmodule.c"
        var $27=$litem; //@line 130 "_bisectmodule.c"
        var $28=$27; //@line 130 "_bisectmodule.c"
        var $29=HEAP[$28]; //@line 130 "_bisectmodule.c"
        var $30=($29)==0; //@line 130 "_bisectmodule.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 130 "_bisectmodule.c"
      case 8: // $bb8
        var $31=$litem; //@line 130 "_bisectmodule.c"
        var $32=$31+4; //@line 130 "_bisectmodule.c"
        var $33=HEAP[$32]; //@line 130 "_bisectmodule.c"
        var $34=$33+24; //@line 130 "_bisectmodule.c"
        var $35=HEAP[$34]; //@line 130 "_bisectmodule.c"
        var $36=$litem; //@line 130 "_bisectmodule.c"
        FUNCTION_TABLE[$35]($36); //@line 130 "_bisectmodule.c"
        __label__ = 9; break; //@line 130 "_bisectmodule.c"
      case 9: // $bb9
        var $37=$res; //@line 131 "_bisectmodule.c"
        var $38=($37) < 0; //@line 131 "_bisectmodule.c"
        if ($38) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 131 "_bisectmodule.c"
      case 10: // $bb10
        $0=-1; //@line 132 "_bisectmodule.c"
        __label__ = 16; break; //@line 132 "_bisectmodule.c"
      case 11: // $bb11
        var $39=$res; //@line 133 "_bisectmodule.c"
        var $40=($39)!=0; //@line 133 "_bisectmodule.c"
        var $41=$mid; //@line 134 "_bisectmodule.c"
        if ($40) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 133 "_bisectmodule.c"
      case 12: // $bb12
        var $42=($41) + 1; //@line 134 "_bisectmodule.c"
        $lo_addr=$42; //@line 134 "_bisectmodule.c"
        __label__ = 14; break; //@line 134 "_bisectmodule.c"
      case 13: // $bb13
        $hi_addr=$41; //@line 136 "_bisectmodule.c"
        __label__ = 14; break; //@line 136 "_bisectmodule.c"
      case 14: // $bb14
        var $43=$lo_addr; //@line 124 "_bisectmodule.c"
        var $44=$hi_addr; //@line 124 "_bisectmodule.c"
        var $45=($43) < ($44); //@line 124 "_bisectmodule.c"
        var $46=$lo_addr; //@line 125 "_bisectmodule.c"
        if ($45) { __label__ = 5; break; } else { __label__ = 15; break; } //@line 124 "_bisectmodule.c"
      case 15: // $bb15
        $0=$46; //@line 138 "_bisectmodule.c"
        __label__ = 16; break; //@line 138 "_bisectmodule.c"
      case 16: // $bb16
        var $47=$0; //@line 117 "_bisectmodule.c"
        $retval=$47; //@line 117 "_bisectmodule.c"
        var $retval17=$retval; //@line 117 "_bisectmodule.c"
        ;
        return $retval17; //@line 117 "_bisectmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _bisect_left($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $list=__stackBase__;
        var $item=__stackBase__+4;
        var $lo=__stackBase__+8;
        var $hi=__stackBase__+12;
        var $index;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        HEAP[$lo]=0; //@line 145 "_bisectmodule.c"
        HEAP[$hi]=-1; //@line 146 "_bisectmodule.c"
        var $1=$args_addr; //@line 150 "_bisectmodule.c"
        var $2=$kw_addr; //@line 150 "_bisectmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str9, _keywords_8467, allocate([$list,0,0,0,$item,0,0,0,$lo,0,0,0,$hi,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 150 "_bisectmodule.c"
        var $4=($3)==0; //@line 150 "_bisectmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 150 "_bisectmodule.c"
      case 1: // $bb
        $0=0; //@line 152 "_bisectmodule.c"
        __label__ = 5; break; //@line 152 "_bisectmodule.c"
      case 2: // $bb1
        var $5=HEAP[$hi]; //@line 153 "_bisectmodule.c"
        var $6=HEAP[$lo]; //@line 153 "_bisectmodule.c"
        var $7=HEAP[$item]; //@line 153 "_bisectmodule.c"
        var $8=HEAP[$list]; //@line 153 "_bisectmodule.c"
        var $9=_internal_bisect_left($8, $7, $6, $5); //@line 153 "_bisectmodule.c"
        $index=$9; //@line 153 "_bisectmodule.c"
        var $10=$index; //@line 154 "_bisectmodule.c"
        var $11=($10) < 0; //@line 154 "_bisectmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 154 "_bisectmodule.c"
      case 3: // $bb2
        $0=0; //@line 155 "_bisectmodule.c"
        __label__ = 5; break; //@line 155 "_bisectmodule.c"
      case 4: // $bb3
        var $12=$index; //@line 156 "_bisectmodule.c"
        var $13=_PyInt_FromSsize_t($12); //@line 156 "_bisectmodule.c"
        $0=$13; //@line 156 "_bisectmodule.c"
        __label__ = 5; break; //@line 156 "_bisectmodule.c"
      case 5: // $bb4
        var $14=$0; //@line 152 "_bisectmodule.c"
        $retval=$14; //@line 152 "_bisectmodule.c"
        var $retval5=$retval; //@line 152 "_bisectmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 152 "_bisectmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _insort_left($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $list=__stackBase__;
        var $item=__stackBase__+4;
        var $result;
        var $lo=__stackBase__+8;
        var $hi=__stackBase__+12;
        var $index;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        HEAP[$lo]=0; //@line 175 "_bisectmodule.c"
        HEAP[$hi]=-1; //@line 176 "_bisectmodule.c"
        var $1=$args_addr; //@line 180 "_bisectmodule.c"
        var $2=$kw_addr; //@line 180 "_bisectmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str10, _keywords_8493, allocate([$list,0,0,0,$item,0,0,0,$lo,0,0,0,$hi,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 180 "_bisectmodule.c"
        var $4=($3)==0; //@line 180 "_bisectmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 180 "_bisectmodule.c"
      case 1: // $bb
        $0=0; //@line 182 "_bisectmodule.c"
        __label__ = 12; break; //@line 182 "_bisectmodule.c"
      case 2: // $bb1
        var $5=HEAP[$hi]; //@line 183 "_bisectmodule.c"
        var $6=HEAP[$lo]; //@line 183 "_bisectmodule.c"
        var $7=HEAP[$item]; //@line 183 "_bisectmodule.c"
        var $8=HEAP[$list]; //@line 183 "_bisectmodule.c"
        var $9=_internal_bisect_left($8, $7, $6, $5); //@line 183 "_bisectmodule.c"
        $index=$9; //@line 183 "_bisectmodule.c"
        var $10=$index; //@line 184 "_bisectmodule.c"
        var $11=($10) < 0; //@line 184 "_bisectmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 184 "_bisectmodule.c"
      case 3: // $bb2
        $0=0; //@line 185 "_bisectmodule.c"
        __label__ = 12; break; //@line 185 "_bisectmodule.c"
      case 4: // $bb3
        var $12=HEAP[$list]; //@line 186 "_bisectmodule.c"
        var $13=$12+4; //@line 186 "_bisectmodule.c"
        var $14=HEAP[$13]; //@line 186 "_bisectmodule.c"
        var $15=($14)==(_PyList_Type); //@line 186 "_bisectmodule.c"
        var $16=HEAP[$item]; //@line 187 "_bisectmodule.c"
        var $17=HEAP[$list]; //@line 187 "_bisectmodule.c"
        var $18=$index; //@line 187 "_bisectmodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 186 "_bisectmodule.c"
      case 5: // $bb4
        var $19=_PyList_Insert($17, $18, $16); //@line 187 "_bisectmodule.c"
        var $20=($19) < 0; //@line 187 "_bisectmodule.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 11; break; } //@line 187 "_bisectmodule.c"
      case 6: // $bb5
        $0=0; //@line 188 "_bisectmodule.c"
        __label__ = 12; break; //@line 188 "_bisectmodule.c"
      case 7: // $bb7
        var $21=_PyObject_CallMethod($17, __str7, __str11, allocate([$18,0,0,0,$16,0,0,0], ["i32",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 190 "_bisectmodule.c"
        $result=$21; //@line 190 "_bisectmodule.c"
        var $22=$result; //@line 192 "_bisectmodule.c"
        var $23=($22)==0; //@line 192 "_bisectmodule.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 192 "_bisectmodule.c"
      case 8: // $bb8
        $0=0; //@line 193 "_bisectmodule.c"
        __label__ = 12; break; //@line 193 "_bisectmodule.c"
      case 9: // $bb9
        var $24=$result; //@line 194 "_bisectmodule.c"
        var $25=$24; //@line 194 "_bisectmodule.c"
        var $26=HEAP[$25]; //@line 194 "_bisectmodule.c"
        var $27=($26) - 1; //@line 194 "_bisectmodule.c"
        var $28=$result; //@line 194 "_bisectmodule.c"
        var $29=$28; //@line 194 "_bisectmodule.c"
        HEAP[$29]=$27; //@line 194 "_bisectmodule.c"
        var $30=$result; //@line 194 "_bisectmodule.c"
        var $31=$30; //@line 194 "_bisectmodule.c"
        var $32=HEAP[$31]; //@line 194 "_bisectmodule.c"
        var $33=($32)==0; //@line 194 "_bisectmodule.c"
        if ($33) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 194 "_bisectmodule.c"
      case 10: // $bb10
        var $34=$result; //@line 194 "_bisectmodule.c"
        var $35=$34+4; //@line 194 "_bisectmodule.c"
        var $36=HEAP[$35]; //@line 194 "_bisectmodule.c"
        var $37=$36+24; //@line 194 "_bisectmodule.c"
        var $38=HEAP[$37]; //@line 194 "_bisectmodule.c"
        var $39=$result; //@line 194 "_bisectmodule.c"
        FUNCTION_TABLE[$38]($39); //@line 194 "_bisectmodule.c"
        __label__ = 11; break; //@line 194 "_bisectmodule.c"
      case 11: // $bb11
        var $40=HEAP[__Py_NoneStruct]; //@line 197 "_bisectmodule.c"
        var $41=($40) + 1; //@line 197 "_bisectmodule.c"
        HEAP[__Py_NoneStruct]=$41; //@line 197 "_bisectmodule.c"
        $0=__Py_NoneStruct; //@line 197 "_bisectmodule.c"
        __label__ = 12; break; //@line 197 "_bisectmodule.c"
      case 12: // $bb12
        var $42=$0; //@line 182 "_bisectmodule.c"
        $retval=$42; //@line 182 "_bisectmodule.c"
        var $retval13=$retval; //@line 182 "_bisectmodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 182 "_bisectmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_bisect() {
    ;
    var __label__;
  
    var $0=_Py_InitModule4(__str18, _bisect_methods, _module_doc, 0, 1013); //@line 240 "_bisectmodule.c"
    ;
    return; //@line 241 "_bisectmodule.c"
  }
  Module["_init_bisect"] = _init_bisect;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_bisect_right,0,_insort_right,0,_bisect_left,0,_insort_left,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([108,111,32,109,117,115,116,32,98,101,32,110,111,110,45,110,101,103,97,116,105,118,101,0] /* lo must be non-negat */, "i8", ALLOC_NORMAL);
__str1=allocate([79,79,124,110,110,58,98,105,115,101,99,116,95,114,105,103,104,116,0] /* OO|nn:bisect_right\0 */, "i8", ALLOC_NORMAL);
_keywords_8354=allocate(20, "i8*", ALLOC_NORMAL);
__str2=allocate([97,0] /* a\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([120,0] /* x\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([108,111,0] /* lo\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([104,105,0] /* hi\00 */, "i8", ALLOC_NORMAL);
_bisect_right_doc=allocate([98,105,115,101,99,116,95,114,105,103,104,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,32,45,62,32,105,110,100,101,120,10,10,82,101,116,117,114,110,32,116,104,101,32,105,110,100,101,120,32,119,104,101,114,101,32,116,111,32,105,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,84,104,101,32,114,101,116,117,114,110,32,118,97,108,117,101,32,105,32,105,115,32,115,117,99,104,32,116,104,97,116,32,97,108,108,32,101,32,105,110,32,97,91,58,105,93,32,104,97,118,101,32,101,32,60,61,32,120,44,32,97,110,100,32,97,108,108,32,101,32,105,110,10,97,91,105,58,93,32,104,97,118,101,32,101,32,62,32,120,46,32,32,83,111,32,105,102,32,120,32,97,108,114,101,97,100,121,32,97,112,112,101,97,114,115,32,105,110,32,116,104,101,32,108,105,115,116,44,32,105,32,112,111,105,110,116,115,32,106,117,115,116,10,98,101,121,111,110,100,32,116,104,101,32,114,105,103,104,116,109,111,115,116,32,120,32,97,108,114,101,97,100,121,32,116,104,101,114,101,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,32,98,101,32,115,101,97,114,99,104,101,100,46,10,0] /* bisect_right(a, x[,  */, "i8", ALLOC_NORMAL);
__str6=allocate([79,79,124,110,110,58,105,110,115,111,114,116,95,114,105,103,104,116,0] /* OO|nn:insort_right\0 */, "i8", ALLOC_NORMAL);
_keywords_8380=allocate(20, "i8*", ALLOC_NORMAL);
__str7=allocate([105,110,115,101,114,116,0] /* insert\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([110,79,0] /* nO\00 */, "i8", ALLOC_NORMAL);
_insort_right_doc=allocate([105,110,115,111,114,116,95,114,105,103,104,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,10,10,73,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,97,110,100,32,107,101,101,112,32,105,116,32,115,111,114,116,101,100,32,97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,73,102,32,120,32,105,115,32,97,108,114,101,97,100,121,32,105,110,32,97,44,32,105,110,115,101,114,116,32,105,116,32,116,111,32,116,104,101,32,114,105,103,104,116,32,111,102,32,116,104,101,32,114,105,103,104,116,109,111,115,116,32,120,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,32,98,101,32,115,101,97,114,99,104,101,100,46,10,0] /* insort_right(a, x[,  */, "i8", ALLOC_NORMAL);
__str9=allocate([79,79,124,110,110,58,98,105,115,101,99,116,95,108,101,102,116,0] /* OO|nn:bisect_left\00 */, "i8", ALLOC_NORMAL);
_keywords_8467=allocate(20, "i8*", ALLOC_NORMAL);
_bisect_left_doc=allocate([98,105,115,101,99,116,95,108,101,102,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,32,45,62,32,105,110,100,101,120,10,10,82,101,116,117,114,110,32,116,104,101,32,105,110,100,101,120,32,119,104,101,114,101,32,116,111,32,105,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,84,104,101,32,114,101,116,117,114,110,32,118,97,108,117,101,32,105,32,105,115,32,115,117,99,104,32,116,104,97,116,32,97,108,108,32,101,32,105,110,32,97,91,58,105,93,32,104,97,118,101,32,101,32,60,32,120,44,32,97,110,100,32,97,108,108,32,101,32,105,110,10,97,91,105,58,93,32,104,97,118,101,32,101,32,62,61,32,120,46,32,32,83,111,32,105,102,32,120,32,97,108,114,101,97,100,121,32,97,112,112,101,97,114,115,32,105,110,32,116,104,101,32,108,105,115,116,44,32,105,32,112,111,105,110,116,115,32,106,117,115,116,10,98,101,102,111,114,101,32,116,104,101,32,108,101,102,116,109,111,115,116,32,120,32,97,108,114,101,97,100,121,32,116,104,101,114,101,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,32,98,101,32,115,101,97,114,99,104,101,100,46,10,0] /* bisect_left(a, x[, l */, "i8", ALLOC_NORMAL);
__str10=allocate([79,79,124,110,110,58,105,110,115,111,114,116,95,108,101,102,116,0] /* OO|nn:insort_left\00 */, "i8", ALLOC_NORMAL);
_keywords_8493=allocate(20, "i8*", ALLOC_NORMAL);
__str11=allocate([105,79,0] /* iO\00 */, "i8", ALLOC_NORMAL);
_insort_left_doc=allocate([105,110,115,111,114,116,95,108,101,102,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,10,10,73,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,97,110,100,32,107,101,101,112,32,105,116,32,115,111,114,116,101,100,32,97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,73,102,32,120,32,105,115,32,97,108,114,101,97,100,121,32,105,110,32,97,44,32,105,110,115,101,114,116,32,105,116,32,116,111,32,116,104,101,32,108,101,102,116,32,111,102,32,116,104,101,32,108,101,102,116,109,111,115,116,32,120,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,32,98,101,32,115,101,97,114,99,104,101,100,46,10,0] /* insort_left(a, x[, l */, "i8", ALLOC_NORMAL);
_bisect_doc=allocate([65,108,105,97,115,32,102,111,114,32,98,105,115,101,99,116,95,114,105,103,104,116,40,41,46,10,0] /* Alias for bisect_rig */, "i8", ALLOC_NORMAL);
_insort_doc=allocate([65,108,105,97,115,32,102,111,114,32,105,110,115,111,114,116,95,114,105,103,104,116,40,41,46,10,0] /* Alias for insort_rig */, "i8", ALLOC_NORMAL);
__str12=allocate([98,105,115,101,99,116,95,114,105,103,104,116,0] /* bisect_right\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([98,105,115,101,99,116,0] /* bisect\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([105,110,115,111,114,116,95,114,105,103,104,116,0] /* insort_right\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([105,110,115,111,114,116,0] /* insort\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([98,105,115,101,99,116,95,108,101,102,116,0] /* bisect_left\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([105,110,115,111,114,116,95,108,101,102,116,0] /* insort_left\00 */, "i8", ALLOC_NORMAL);
_bisect_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_module_doc=allocate([66,105,115,101,99,116,105,111,110,32,97,108,103,111,114,105,116,104,109,115,46,10,10,84,104,105,115,32,109,111,100,117,108,101,32,112,114,111,118,105,100,101,115,32,115,117,112,112,111,114,116,32,102,111,114,32,109,97,105,110,116,97,105,110,105,110,103,32,97,32,108,105,115,116,32,105,110,32,115,111,114,116,101,100,32,111,114,100,101,114,32,119,105,116,104,111,117,116,10,104,97,118,105,110,103,32,116,111,32,115,111,114,116,32,116,104,101,32,108,105,115,116,32,97,102,116,101,114,32,101,97,99,104,32,105,110,115,101,114,116,105,111,110,46,32,70,111,114,32,108,111,110,103,32,108,105,115,116,115,32,111,102,32,105,116,101,109,115,32,119,105,116,104,10,101,120,112,101,110,115,105,118,101,32,99,111,109,112,97,114,105,115,111,110,32,111,112,101,114,97,116,105,111,110,115,44,32,116,104,105,115,32,99,97,110,32,98,101,32,97,110,32,105,109,112,114,111,118,101,109,101,110,116,32,111,118,101,114,32,116,104,101,32,109,111,114,101,10,99,111,109,109,111,110,32,97,112,112,114,111,97,99,104,46,10,0] /* Bisection algorithms */, "i8", ALLOC_NORMAL);
__str18=allocate([95,98,105,115,101,99,116,0] /* _bisect\00 */, "i8", ALLOC_NORMAL);
HEAP[_keywords_8354]=__str2;
HEAP[_keywords_8354+4]=__str3;
HEAP[_keywords_8354+8]=__str4;
HEAP[_keywords_8354+12]=__str5;
HEAP[_keywords_8380]=__str2;
HEAP[_keywords_8380+4]=__str3;
HEAP[_keywords_8380+8]=__str4;
HEAP[_keywords_8380+12]=__str5;
HEAP[_keywords_8467]=__str2;
HEAP[_keywords_8467+4]=__str3;
HEAP[_keywords_8467+8]=__str4;
HEAP[_keywords_8467+12]=__str5;
HEAP[_keywords_8493]=__str2;
HEAP[_keywords_8493+4]=__str3;
HEAP[_keywords_8493+8]=__str4;
HEAP[_keywords_8493+12]=__str5;
HEAP[_bisect_methods]=__str12;
HEAP[_bisect_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_bisect_methods+12]=_bisect_right_doc;
HEAP[_bisect_methods+16]=__str13;
HEAP[_bisect_methods+20]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_bisect_methods+28]=_bisect_doc;
HEAP[_bisect_methods+32]=__str14;
HEAP[_bisect_methods+36]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_bisect_methods+44]=_insort_right_doc;
HEAP[_bisect_methods+48]=__str15;
HEAP[_bisect_methods+52]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_bisect_methods+60]=_insort_doc;
HEAP[_bisect_methods+64]=__str16;
HEAP[_bisect_methods+68]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_bisect_methods+76]=_bisect_left_doc;
HEAP[_bisect_methods+80]=__str17;
HEAP[_bisect_methods+84]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_bisect_methods+92]=_insort_left_doc;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

