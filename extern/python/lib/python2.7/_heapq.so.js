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



var $0___SIZE = 128; // %0
  
var $1___SIZE = 16; // %1
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyListObject___SIZE = 20; // %struct.PyListObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 0; // %struct.PyMemberDef
  var $struct_PyMemberDef___FLATTENER = [];
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyVarObject___SIZE = 12; // %struct.PyVarObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var _lt_8310;
var __str;
var __str1;
var __str2;
var ___PRETTY_FUNCTION___8337;

var __str3;
var ___PRETTY_FUNCTION___8411;
var __str4;

var __str5;

var _heappush_doc;
var _heappop_doc;
var __str6;
var _heapreplace_doc;
var __str7;
var _heappushpop_doc;
var _heapify_doc;
var __str8;
var _nlargest_doc;
var ___PRETTY_FUNCTION___8840;
var ___PRETTY_FUNCTION___8914;
var __str9;
var _nsmallest_doc;
var __str10;
var __str11;
var __str12;
var __str13;
var _heapq_methods;
var _module_doc;
var ___about__;
var __str14;
var __str15;






















  function _cmp_lt($x, $y) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $y_addr;
        var $retval;
        var $0;
        var $cmp;
        $x_addr=$x;
        $y_addr=$y;
        var $1=HEAP[_lt_8310]; //@line 22 "_heapqmodule.c"
        var $2=($1)==0; //@line 22 "_heapqmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 22 "_heapqmodule.c"
      case 1: // $bb
        var $3=_PyString_FromString(__str); //@line 23 "_heapqmodule.c"
        HEAP[_lt_8310]=$3; //@line 23 "_heapqmodule.c"
        var $4=HEAP[_lt_8310]; //@line 24 "_heapqmodule.c"
        var $5=($4)==0; //@line 24 "_heapqmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 24 "_heapqmodule.c"
      case 2: // $bb1
        $0=-1; //@line 25 "_heapqmodule.c"
        __label__ = 8; break; //@line 25 "_heapqmodule.c"
      case 3: // $bb2
        var $6=HEAP[_lt_8310]; //@line 27 "_heapqmodule.c"
        var $7=$x_addr; //@line 27 "_heapqmodule.c"
        var $8=_PyObject_HasAttr($7, $6); //@line 27 "_heapqmodule.c"
        var $9=($8)!=0; //@line 27 "_heapqmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 27 "_heapqmodule.c"
      case 4: // $bb3
        var $10=$x_addr; //@line 28 "_heapqmodule.c"
        var $11=$y_addr; //@line 28 "_heapqmodule.c"
        var $12=_PyObject_RichCompareBool($10, $11, 0); //@line 28 "_heapqmodule.c"
        $0=$12; //@line 28 "_heapqmodule.c"
        __label__ = 8; break; //@line 28 "_heapqmodule.c"
      case 5: // $bb4
        var $13=$y_addr; //@line 29 "_heapqmodule.c"
        var $14=$x_addr; //@line 29 "_heapqmodule.c"
        var $15=_PyObject_RichCompareBool($13, $14, 1); //@line 29 "_heapqmodule.c"
        $cmp=$15; //@line 29 "_heapqmodule.c"
        var $16=$cmp; //@line 30 "_heapqmodule.c"
        var $17=($16)!=-1; //@line 30 "_heapqmodule.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 30 "_heapqmodule.c"
      case 6: // $bb5
        var $18=$cmp; //@line 31 "_heapqmodule.c"
        var $19=1 - ($18); //@line 31 "_heapqmodule.c"
        $cmp=$19; //@line 31 "_heapqmodule.c"
        __label__ = 7; break; //@line 31 "_heapqmodule.c"
      case 7: // $bb6
        var $20=$cmp; //@line 32 "_heapqmodule.c"
        $0=$20; //@line 32 "_heapqmodule.c"
        __label__ = 8; break; //@line 32 "_heapqmodule.c"
      case 8: // $bb7
        var $21=$0; //@line 25 "_heapqmodule.c"
        $retval=$21; //@line 25 "_heapqmodule.c"
        var $retval8=$retval; //@line 25 "_heapqmodule.c"
        ;
        return $retval8; //@line 25 "_heapqmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __siftdown($heap, $startpos, $pos) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $heap_addr;
        var $startpos_addr;
        var $pos_addr;
        var $retval;
        var $0;
        var $newitem;
        var $parent;
        var $cmp;
        var $parentpos;
        $heap_addr=$heap;
        $startpos_addr=$startpos;
        $pos_addr=$pos;
        var $1=$heap_addr; //@line 42 "_heapqmodule.c"
        var $2=$1; //@line 42 "_heapqmodule.c"
        var $3=$2+4; //@line 42 "_heapqmodule.c"
        var $4=HEAP[$3]; //@line 42 "_heapqmodule.c"
        var $5=$4+84; //@line 42 "_heapqmodule.c"
        var $6=HEAP[$5]; //@line 42 "_heapqmodule.c"
        var $7=($6) & 33554432; //@line 42 "_heapqmodule.c"
        var $8=($7)==0; //@line 42 "_heapqmodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 42 "_heapqmodule.c"
      case 1: // $bb
        ___assert_fail(__str1, __str2, 42, ___PRETTY_FUNCTION___8337); //@line 42 "_heapqmodule.c"
        throw "Reached an unreachable!" //@line 42 "_heapqmodule.c"
      case 2: // $bb1
        var $9=$heap_addr; //@line 43 "_heapqmodule.c"
        var $10=$9; //@line 43 "_heapqmodule.c"
        var $11=$10+8; //@line 43 "_heapqmodule.c"
        var $12=HEAP[$11]; //@line 43 "_heapqmodule.c"
        var $13=$pos_addr; //@line 43 "_heapqmodule.c"
        var $14=($12) <= ($13); //@line 43 "_heapqmodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 43 "_heapqmodule.c"
      case 3: // $bb2
        var $15=HEAP[_PyExc_IndexError]; //@line 44 "_heapqmodule.c"
        _PyErr_SetString($15, __str3); //@line 44 "_heapqmodule.c"
        $0=-1; //@line 45 "_heapqmodule.c"
        __label__ = 17; break; //@line 45 "_heapqmodule.c"
      case 4: // $bb3
        var $16=$heap_addr; //@line 48 "_heapqmodule.c"
        var $17=$16+12; //@line 48 "_heapqmodule.c"
        var $18=HEAP[$17]; //@line 48 "_heapqmodule.c"
        var $19=$pos_addr; //@line 48 "_heapqmodule.c"
        var $20=$18+4*$19; //@line 48 "_heapqmodule.c"
        var $21=HEAP[$20]; //@line 48 "_heapqmodule.c"
        $newitem=$21; //@line 48 "_heapqmodule.c"
        var $22=$newitem; //@line 49 "_heapqmodule.c"
        var $23=$22; //@line 49 "_heapqmodule.c"
        var $24=HEAP[$23]; //@line 49 "_heapqmodule.c"
        var $25=($24) + 1; //@line 49 "_heapqmodule.c"
        var $26=$newitem; //@line 49 "_heapqmodule.c"
        var $27=$26; //@line 49 "_heapqmodule.c"
        HEAP[$27]=$25; //@line 49 "_heapqmodule.c"
        __label__ = 13; break; //@line 49 "_heapqmodule.c"
      case 5: // $bb4
        var $28=$pos_addr; //@line 53 "_heapqmodule.c"
        var $29=($28) - 1; //@line 53 "_heapqmodule.c"
        var $30=($29) >> 1; //@line 53 "_heapqmodule.c"
        $parentpos=$30; //@line 53 "_heapqmodule.c"
        var $31=$heap_addr; //@line 54 "_heapqmodule.c"
        var $32=$31+12; //@line 54 "_heapqmodule.c"
        var $33=HEAP[$32]; //@line 54 "_heapqmodule.c"
        var $34=$parentpos; //@line 54 "_heapqmodule.c"
        var $35=$33+4*$34; //@line 54 "_heapqmodule.c"
        var $36=HEAP[$35]; //@line 54 "_heapqmodule.c"
        $parent=$36; //@line 54 "_heapqmodule.c"
        var $37=$newitem; //@line 55 "_heapqmodule.c"
        var $38=$parent; //@line 55 "_heapqmodule.c"
        var $39=_cmp_lt($37, $38); //@line 55 "_heapqmodule.c"
        $cmp=$39; //@line 55 "_heapqmodule.c"
        var $40=$cmp; //@line 56 "_heapqmodule.c"
        var $41=($40)==-1; //@line 56 "_heapqmodule.c"
        if ($41) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 56 "_heapqmodule.c"
      case 6: // $bb5
        var $42=$newitem; //@line 57 "_heapqmodule.c"
        var $43=$42; //@line 57 "_heapqmodule.c"
        var $44=HEAP[$43]; //@line 57 "_heapqmodule.c"
        var $45=($44) - 1; //@line 57 "_heapqmodule.c"
        var $46=$newitem; //@line 57 "_heapqmodule.c"
        var $47=$46; //@line 57 "_heapqmodule.c"
        HEAP[$47]=$45; //@line 57 "_heapqmodule.c"
        var $48=$newitem; //@line 57 "_heapqmodule.c"
        var $49=$48; //@line 57 "_heapqmodule.c"
        var $50=HEAP[$49]; //@line 57 "_heapqmodule.c"
        var $51=($50)==0; //@line 57 "_heapqmodule.c"
        if ($51) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 57 "_heapqmodule.c"
      case 7: // $bb6
        var $52=$newitem; //@line 57 "_heapqmodule.c"
        var $53=$52+4; //@line 57 "_heapqmodule.c"
        var $54=HEAP[$53]; //@line 57 "_heapqmodule.c"
        var $55=$54+24; //@line 57 "_heapqmodule.c"
        var $56=HEAP[$55]; //@line 57 "_heapqmodule.c"
        var $57=$newitem; //@line 57 "_heapqmodule.c"
        FUNCTION_TABLE[$56]($57); //@line 57 "_heapqmodule.c"
        __label__ = 8; break; //@line 57 "_heapqmodule.c"
      case 8: // $bb7
        $0=-1; //@line 58 "_heapqmodule.c"
        __label__ = 17; break; //@line 58 "_heapqmodule.c"
      case 9: // $bb8
        var $58=$cmp; //@line 60 "_heapqmodule.c"
        var $59=($58)==0; //@line 60 "_heapqmodule.c"
        if ($59) { __label__ = 14; break; } else { __label__ = 10; break; } //@line 60 "_heapqmodule.c"
      case 10: // $bb9
        var $60=$parent; //@line 62 "_heapqmodule.c"
        var $61=$60; //@line 62 "_heapqmodule.c"
        var $62=HEAP[$61]; //@line 62 "_heapqmodule.c"
        var $63=($62) + 1; //@line 62 "_heapqmodule.c"
        var $64=$parent; //@line 62 "_heapqmodule.c"
        var $65=$64; //@line 62 "_heapqmodule.c"
        HEAP[$65]=$63; //@line 62 "_heapqmodule.c"
        var $66=$heap_addr; //@line 63 "_heapqmodule.c"
        var $67=$66+12; //@line 63 "_heapqmodule.c"
        var $68=HEAP[$67]; //@line 63 "_heapqmodule.c"
        var $69=$pos_addr; //@line 63 "_heapqmodule.c"
        var $70=$68+4*$69; //@line 63 "_heapqmodule.c"
        var $71=HEAP[$70]; //@line 63 "_heapqmodule.c"
        var $72=$71; //@line 63 "_heapqmodule.c"
        var $73=HEAP[$72]; //@line 63 "_heapqmodule.c"
        var $74=($73) - 1; //@line 63 "_heapqmodule.c"
        var $75=$71; //@line 63 "_heapqmodule.c"
        HEAP[$75]=$74; //@line 63 "_heapqmodule.c"
        var $76=$71; //@line 63 "_heapqmodule.c"
        var $77=HEAP[$76]; //@line 63 "_heapqmodule.c"
        var $78=($77)==0; //@line 63 "_heapqmodule.c"
        if ($78) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 63 "_heapqmodule.c"
      case 11: // $bb10
        var $79=$heap_addr; //@line 63 "_heapqmodule.c"
        var $80=$79+12; //@line 63 "_heapqmodule.c"
        var $81=HEAP[$80]; //@line 63 "_heapqmodule.c"
        var $82=$pos_addr; //@line 63 "_heapqmodule.c"
        var $83=$81+4*$82; //@line 63 "_heapqmodule.c"
        var $84=HEAP[$83]; //@line 63 "_heapqmodule.c"
        var $85=$84+4; //@line 63 "_heapqmodule.c"
        var $86=HEAP[$85]; //@line 63 "_heapqmodule.c"
        var $87=$86+24; //@line 63 "_heapqmodule.c"
        var $88=HEAP[$87]; //@line 63 "_heapqmodule.c"
        var $89=$heap_addr; //@line 63 "_heapqmodule.c"
        var $90=$89+12; //@line 63 "_heapqmodule.c"
        var $91=HEAP[$90]; //@line 63 "_heapqmodule.c"
        var $92=$pos_addr; //@line 63 "_heapqmodule.c"
        var $93=$91+4*$92; //@line 63 "_heapqmodule.c"
        var $94=HEAP[$93]; //@line 63 "_heapqmodule.c"
        FUNCTION_TABLE[$88]($94); //@line 63 "_heapqmodule.c"
        __label__ = 12; break; //@line 63 "_heapqmodule.c"
      case 12: // $bb11
        var $95=$heap_addr; //@line 64 "_heapqmodule.c"
        var $96=$95+12; //@line 64 "_heapqmodule.c"
        var $97=HEAP[$96]; //@line 64 "_heapqmodule.c"
        var $98=$pos_addr; //@line 64 "_heapqmodule.c"
        var $99=$97+4*$98; //@line 64 "_heapqmodule.c"
        var $100=$parent; //@line 64 "_heapqmodule.c"
        HEAP[$99]=$100; //@line 64 "_heapqmodule.c"
        var $101=$parentpos; //@line 65 "_heapqmodule.c"
        $pos_addr=$101; //@line 65 "_heapqmodule.c"
        __label__ = 13; break; //@line 65 "_heapqmodule.c"
      case 13: // $bb12
        var $102=$pos_addr; //@line 52 "_heapqmodule.c"
        var $103=$startpos_addr; //@line 52 "_heapqmodule.c"
        var $104=($102) > ($103); //@line 52 "_heapqmodule.c"
        if ($104) { __label__ = 5; break; } else { __label__ = 14; break; } //@line 52 "_heapqmodule.c"
      case 14: // $bb13
        var $105=$heap_addr; //@line 67 "_heapqmodule.c"
        var $106=$105+12; //@line 67 "_heapqmodule.c"
        var $107=HEAP[$106]; //@line 67 "_heapqmodule.c"
        var $108=$pos_addr; //@line 67 "_heapqmodule.c"
        var $109=$107+4*$108; //@line 67 "_heapqmodule.c"
        var $110=HEAP[$109]; //@line 67 "_heapqmodule.c"
        var $111=$110; //@line 67 "_heapqmodule.c"
        var $112=HEAP[$111]; //@line 67 "_heapqmodule.c"
        var $113=($112) - 1; //@line 67 "_heapqmodule.c"
        var $114=$110; //@line 67 "_heapqmodule.c"
        HEAP[$114]=$113; //@line 67 "_heapqmodule.c"
        var $115=$110; //@line 67 "_heapqmodule.c"
        var $116=HEAP[$115]; //@line 67 "_heapqmodule.c"
        var $117=($116)==0; //@line 67 "_heapqmodule.c"
        if ($117) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 67 "_heapqmodule.c"
      case 15: // $bb14
        var $118=$heap_addr; //@line 67 "_heapqmodule.c"
        var $119=$118+12; //@line 67 "_heapqmodule.c"
        var $120=HEAP[$119]; //@line 67 "_heapqmodule.c"
        var $121=$pos_addr; //@line 67 "_heapqmodule.c"
        var $122=$120+4*$121; //@line 67 "_heapqmodule.c"
        var $123=HEAP[$122]; //@line 67 "_heapqmodule.c"
        var $124=$123+4; //@line 67 "_heapqmodule.c"
        var $125=HEAP[$124]; //@line 67 "_heapqmodule.c"
        var $126=$125+24; //@line 67 "_heapqmodule.c"
        var $127=HEAP[$126]; //@line 67 "_heapqmodule.c"
        var $128=$heap_addr; //@line 67 "_heapqmodule.c"
        var $129=$128+12; //@line 67 "_heapqmodule.c"
        var $130=HEAP[$129]; //@line 67 "_heapqmodule.c"
        var $131=$pos_addr; //@line 67 "_heapqmodule.c"
        var $132=$130+4*$131; //@line 67 "_heapqmodule.c"
        var $133=HEAP[$132]; //@line 67 "_heapqmodule.c"
        FUNCTION_TABLE[$127]($133); //@line 67 "_heapqmodule.c"
        __label__ = 16; break; //@line 67 "_heapqmodule.c"
      case 16: // $bb15
        var $134=$heap_addr; //@line 68 "_heapqmodule.c"
        var $135=$134+12; //@line 68 "_heapqmodule.c"
        var $136=HEAP[$135]; //@line 68 "_heapqmodule.c"
        var $137=$pos_addr; //@line 68 "_heapqmodule.c"
        var $138=$136+4*$137; //@line 68 "_heapqmodule.c"
        var $139=$newitem; //@line 68 "_heapqmodule.c"
        HEAP[$138]=$139; //@line 68 "_heapqmodule.c"
        $0=0; //@line 69 "_heapqmodule.c"
        __label__ = 17; break; //@line 69 "_heapqmodule.c"
      case 17: // $bb16
        var $140=$0; //@line 45 "_heapqmodule.c"
        $retval=$140; //@line 45 "_heapqmodule.c"
        var $retval17=$retval; //@line 45 "_heapqmodule.c"
        ;
        return $retval17; //@line 45 "_heapqmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __siftup($heap, $pos) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $heap_addr;
        var $pos_addr;
        var $retval;
        var $0;
        var $startpos;
        var $endpos;
        var $childpos;
        var $rightpos;
        var $cmp;
        var $newitem;
        var $tmp;
        $heap_addr=$heap;
        $pos_addr=$pos;
        var $1=$heap_addr; //@line 79 "_heapqmodule.c"
        var $2=$1; //@line 79 "_heapqmodule.c"
        var $3=$2+4; //@line 79 "_heapqmodule.c"
        var $4=HEAP[$3]; //@line 79 "_heapqmodule.c"
        var $5=$4+84; //@line 79 "_heapqmodule.c"
        var $6=HEAP[$5]; //@line 79 "_heapqmodule.c"
        var $7=($6) & 33554432; //@line 79 "_heapqmodule.c"
        var $8=($7)==0; //@line 79 "_heapqmodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 79 "_heapqmodule.c"
      case 1: // $bb
        ___assert_fail(__str1, __str2, 79, ___PRETTY_FUNCTION___8411); //@line 79 "_heapqmodule.c"
        throw "Reached an unreachable!" //@line 79 "_heapqmodule.c"
      case 2: // $bb1
        var $9=$heap_addr; //@line 80 "_heapqmodule.c"
        var $10=$9; //@line 80 "_heapqmodule.c"
        var $11=$10+8; //@line 80 "_heapqmodule.c"
        var $12=HEAP[$11]; //@line 80 "_heapqmodule.c"
        $endpos=$12; //@line 80 "_heapqmodule.c"
        var $13=$pos_addr; //@line 81 "_heapqmodule.c"
        $startpos=$13; //@line 81 "_heapqmodule.c"
        var $14=$pos_addr; //@line 82 "_heapqmodule.c"
        var $15=$endpos; //@line 82 "_heapqmodule.c"
        var $16=($14) >= ($15); //@line 82 "_heapqmodule.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 82 "_heapqmodule.c"
      case 3: // $bb2
        var $17=HEAP[_PyExc_IndexError]; //@line 83 "_heapqmodule.c"
        _PyErr_SetString($17, __str3); //@line 83 "_heapqmodule.c"
        $0=-1; //@line 84 "_heapqmodule.c"
        __label__ = 19; break; //@line 84 "_heapqmodule.c"
      case 4: // $bb3
        var $18=$heap_addr; //@line 86 "_heapqmodule.c"
        var $19=$18+12; //@line 86 "_heapqmodule.c"
        var $20=HEAP[$19]; //@line 86 "_heapqmodule.c"
        var $21=$pos_addr; //@line 86 "_heapqmodule.c"
        var $22=$20+4*$21; //@line 86 "_heapqmodule.c"
        var $23=HEAP[$22]; //@line 86 "_heapqmodule.c"
        $newitem=$23; //@line 86 "_heapqmodule.c"
        var $24=$newitem; //@line 87 "_heapqmodule.c"
        var $25=$24; //@line 87 "_heapqmodule.c"
        var $26=HEAP[$25]; //@line 87 "_heapqmodule.c"
        var $27=($26) + 1; //@line 87 "_heapqmodule.c"
        var $28=$newitem; //@line 87 "_heapqmodule.c"
        var $29=$28; //@line 87 "_heapqmodule.c"
        HEAP[$29]=$27; //@line 87 "_heapqmodule.c"
        var $30=$pos_addr; //@line 90 "_heapqmodule.c"
        var $31=($30) * 2; //@line 90 "_heapqmodule.c"
        var $32=($31) + 1; //@line 90 "_heapqmodule.c"
        $childpos=$32; //@line 90 "_heapqmodule.c"
        __label__ = 15; break; //@line 90 "_heapqmodule.c"
      case 5: // $bb4
        var $33=$childpos; //@line 93 "_heapqmodule.c"
        var $34=($33) + 1; //@line 93 "_heapqmodule.c"
        $rightpos=$34; //@line 93 "_heapqmodule.c"
        var $35=$rightpos; //@line 94 "_heapqmodule.c"
        var $36=$endpos; //@line 94 "_heapqmodule.c"
        var $37=($35) < ($36); //@line 94 "_heapqmodule.c"
        if ($37) { __label__ = 6; break; } else { __label__ = 12; break; } //@line 94 "_heapqmodule.c"
      case 6: // $bb5
        var $38=$heap_addr; //@line 95 "_heapqmodule.c"
        var $39=$38+12; //@line 95 "_heapqmodule.c"
        var $40=HEAP[$39]; //@line 95 "_heapqmodule.c"
        var $41=$rightpos; //@line 95 "_heapqmodule.c"
        var $42=$40+4*$41; //@line 95 "_heapqmodule.c"
        var $43=HEAP[$42]; //@line 95 "_heapqmodule.c"
        var $44=$heap_addr; //@line 95 "_heapqmodule.c"
        var $45=$44+12; //@line 95 "_heapqmodule.c"
        var $46=HEAP[$45]; //@line 95 "_heapqmodule.c"
        var $47=$childpos; //@line 95 "_heapqmodule.c"
        var $48=$46+4*$47; //@line 95 "_heapqmodule.c"
        var $49=HEAP[$48]; //@line 95 "_heapqmodule.c"
        var $50=_cmp_lt($49, $43); //@line 95 "_heapqmodule.c"
        $cmp=$50; //@line 95 "_heapqmodule.c"
        var $51=$cmp; //@line 98 "_heapqmodule.c"
        var $52=($51)==-1; //@line 98 "_heapqmodule.c"
        if ($52) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 98 "_heapqmodule.c"
      case 7: // $bb6
        var $53=$newitem; //@line 99 "_heapqmodule.c"
        var $54=$53; //@line 99 "_heapqmodule.c"
        var $55=HEAP[$54]; //@line 99 "_heapqmodule.c"
        var $56=($55) - 1; //@line 99 "_heapqmodule.c"
        var $57=$newitem; //@line 99 "_heapqmodule.c"
        var $58=$57; //@line 99 "_heapqmodule.c"
        HEAP[$58]=$56; //@line 99 "_heapqmodule.c"
        var $59=$newitem; //@line 99 "_heapqmodule.c"
        var $60=$59; //@line 99 "_heapqmodule.c"
        var $61=HEAP[$60]; //@line 99 "_heapqmodule.c"
        var $62=($61)==0; //@line 99 "_heapqmodule.c"
        if ($62) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 99 "_heapqmodule.c"
      case 8: // $bb7
        var $63=$newitem; //@line 99 "_heapqmodule.c"
        var $64=$63+4; //@line 99 "_heapqmodule.c"
        var $65=HEAP[$64]; //@line 99 "_heapqmodule.c"
        var $66=$65+24; //@line 99 "_heapqmodule.c"
        var $67=HEAP[$66]; //@line 99 "_heapqmodule.c"
        var $68=$newitem; //@line 99 "_heapqmodule.c"
        FUNCTION_TABLE[$67]($68); //@line 99 "_heapqmodule.c"
        __label__ = 9; break; //@line 99 "_heapqmodule.c"
      case 9: // $bb8
        $0=-1; //@line 100 "_heapqmodule.c"
        __label__ = 19; break; //@line 100 "_heapqmodule.c"
      case 10: // $bb9
        var $69=$cmp; //@line 102 "_heapqmodule.c"
        var $70=($69)==0; //@line 102 "_heapqmodule.c"
        if ($70) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 102 "_heapqmodule.c"
      case 11: // $bb10
        var $71=$rightpos; //@line 103 "_heapqmodule.c"
        $childpos=$71; //@line 103 "_heapqmodule.c"
        __label__ = 12; break; //@line 103 "_heapqmodule.c"
      case 12: // $bb11
        var $72=$heap_addr; //@line 106 "_heapqmodule.c"
        var $73=$72+12; //@line 106 "_heapqmodule.c"
        var $74=HEAP[$73]; //@line 106 "_heapqmodule.c"
        var $75=$childpos; //@line 106 "_heapqmodule.c"
        var $76=$74+4*$75; //@line 106 "_heapqmodule.c"
        var $77=HEAP[$76]; //@line 106 "_heapqmodule.c"
        $tmp=$77; //@line 106 "_heapqmodule.c"
        var $78=$tmp; //@line 107 "_heapqmodule.c"
        var $79=$78; //@line 107 "_heapqmodule.c"
        var $80=HEAP[$79]; //@line 107 "_heapqmodule.c"
        var $81=($80) + 1; //@line 107 "_heapqmodule.c"
        var $82=$tmp; //@line 107 "_heapqmodule.c"
        var $83=$82; //@line 107 "_heapqmodule.c"
        HEAP[$83]=$81; //@line 107 "_heapqmodule.c"
        var $84=$heap_addr; //@line 108 "_heapqmodule.c"
        var $85=$84+12; //@line 108 "_heapqmodule.c"
        var $86=HEAP[$85]; //@line 108 "_heapqmodule.c"
        var $87=$pos_addr; //@line 108 "_heapqmodule.c"
        var $88=$86+4*$87; //@line 108 "_heapqmodule.c"
        var $89=HEAP[$88]; //@line 108 "_heapqmodule.c"
        var $90=$89; //@line 108 "_heapqmodule.c"
        var $91=HEAP[$90]; //@line 108 "_heapqmodule.c"
        var $92=($91) - 1; //@line 108 "_heapqmodule.c"
        var $93=$89; //@line 108 "_heapqmodule.c"
        HEAP[$93]=$92; //@line 108 "_heapqmodule.c"
        var $94=$89; //@line 108 "_heapqmodule.c"
        var $95=HEAP[$94]; //@line 108 "_heapqmodule.c"
        var $96=($95)==0; //@line 108 "_heapqmodule.c"
        if ($96) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 108 "_heapqmodule.c"
      case 13: // $bb12
        var $97=$heap_addr; //@line 108 "_heapqmodule.c"
        var $98=$97+12; //@line 108 "_heapqmodule.c"
        var $99=HEAP[$98]; //@line 108 "_heapqmodule.c"
        var $100=$pos_addr; //@line 108 "_heapqmodule.c"
        var $101=$99+4*$100; //@line 108 "_heapqmodule.c"
        var $102=HEAP[$101]; //@line 108 "_heapqmodule.c"
        var $103=$102+4; //@line 108 "_heapqmodule.c"
        var $104=HEAP[$103]; //@line 108 "_heapqmodule.c"
        var $105=$104+24; //@line 108 "_heapqmodule.c"
        var $106=HEAP[$105]; //@line 108 "_heapqmodule.c"
        var $107=$heap_addr; //@line 108 "_heapqmodule.c"
        var $108=$107+12; //@line 108 "_heapqmodule.c"
        var $109=HEAP[$108]; //@line 108 "_heapqmodule.c"
        var $110=$pos_addr; //@line 108 "_heapqmodule.c"
        var $111=$109+4*$110; //@line 108 "_heapqmodule.c"
        var $112=HEAP[$111]; //@line 108 "_heapqmodule.c"
        FUNCTION_TABLE[$106]($112); //@line 108 "_heapqmodule.c"
        __label__ = 14; break; //@line 108 "_heapqmodule.c"
      case 14: // $bb13
        var $113=$heap_addr; //@line 109 "_heapqmodule.c"
        var $114=$113+12; //@line 109 "_heapqmodule.c"
        var $115=HEAP[$114]; //@line 109 "_heapqmodule.c"
        var $116=$pos_addr; //@line 109 "_heapqmodule.c"
        var $117=$115+4*$116; //@line 109 "_heapqmodule.c"
        var $118=$tmp; //@line 109 "_heapqmodule.c"
        HEAP[$117]=$118; //@line 109 "_heapqmodule.c"
        var $119=$childpos; //@line 110 "_heapqmodule.c"
        $pos_addr=$119; //@line 110 "_heapqmodule.c"
        var $120=$pos_addr; //@line 111 "_heapqmodule.c"
        var $121=($120) * 2; //@line 111 "_heapqmodule.c"
        var $122=($121) + 1; //@line 111 "_heapqmodule.c"
        $childpos=$122; //@line 111 "_heapqmodule.c"
        __label__ = 15; break; //@line 111 "_heapqmodule.c"
      case 15: // $bb14
        var $123=$childpos; //@line 91 "_heapqmodule.c"
        var $124=$endpos; //@line 91 "_heapqmodule.c"
        var $125=($123) < ($124); //@line 91 "_heapqmodule.c"
        if ($125) { __label__ = 5; break; } else { __label__ = 16; break; } //@line 91 "_heapqmodule.c"
      case 16: // $bb15
        var $126=$heap_addr; //@line 116 "_heapqmodule.c"
        var $127=$126+12; //@line 116 "_heapqmodule.c"
        var $128=HEAP[$127]; //@line 116 "_heapqmodule.c"
        var $129=$pos_addr; //@line 116 "_heapqmodule.c"
        var $130=$128+4*$129; //@line 116 "_heapqmodule.c"
        var $131=HEAP[$130]; //@line 116 "_heapqmodule.c"
        var $132=$131; //@line 116 "_heapqmodule.c"
        var $133=HEAP[$132]; //@line 116 "_heapqmodule.c"
        var $134=($133) - 1; //@line 116 "_heapqmodule.c"
        var $135=$131; //@line 116 "_heapqmodule.c"
        HEAP[$135]=$134; //@line 116 "_heapqmodule.c"
        var $136=$131; //@line 116 "_heapqmodule.c"
        var $137=HEAP[$136]; //@line 116 "_heapqmodule.c"
        var $138=($137)==0; //@line 116 "_heapqmodule.c"
        if ($138) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 116 "_heapqmodule.c"
      case 17: // $bb16
        var $139=$heap_addr; //@line 116 "_heapqmodule.c"
        var $140=$139+12; //@line 116 "_heapqmodule.c"
        var $141=HEAP[$140]; //@line 116 "_heapqmodule.c"
        var $142=$pos_addr; //@line 116 "_heapqmodule.c"
        var $143=$141+4*$142; //@line 116 "_heapqmodule.c"
        var $144=HEAP[$143]; //@line 116 "_heapqmodule.c"
        var $145=$144+4; //@line 116 "_heapqmodule.c"
        var $146=HEAP[$145]; //@line 116 "_heapqmodule.c"
        var $147=$146+24; //@line 116 "_heapqmodule.c"
        var $148=HEAP[$147]; //@line 116 "_heapqmodule.c"
        var $149=$heap_addr; //@line 116 "_heapqmodule.c"
        var $150=$149+12; //@line 116 "_heapqmodule.c"
        var $151=HEAP[$150]; //@line 116 "_heapqmodule.c"
        var $152=$pos_addr; //@line 116 "_heapqmodule.c"
        var $153=$151+4*$152; //@line 116 "_heapqmodule.c"
        var $154=HEAP[$153]; //@line 116 "_heapqmodule.c"
        FUNCTION_TABLE[$148]($154); //@line 116 "_heapqmodule.c"
        __label__ = 18; break; //@line 116 "_heapqmodule.c"
      case 18: // $bb17
        var $155=$heap_addr; //@line 117 "_heapqmodule.c"
        var $156=$155+12; //@line 117 "_heapqmodule.c"
        var $157=HEAP[$156]; //@line 117 "_heapqmodule.c"
        var $158=$pos_addr; //@line 117 "_heapqmodule.c"
        var $159=$157+4*$158; //@line 117 "_heapqmodule.c"
        var $160=$newitem; //@line 117 "_heapqmodule.c"
        HEAP[$159]=$160; //@line 117 "_heapqmodule.c"
        var $161=$heap_addr; //@line 118 "_heapqmodule.c"
        var $162=$startpos; //@line 118 "_heapqmodule.c"
        var $163=$pos_addr; //@line 118 "_heapqmodule.c"
        var $164=__siftdown($161, $162, $163); //@line 118 "_heapqmodule.c"
        $0=$164; //@line 118 "_heapqmodule.c"
        __label__ = 19; break; //@line 118 "_heapqmodule.c"
      case 19: // $bb18
        var $165=$0; //@line 84 "_heapqmodule.c"
        $retval=$165; //@line 84 "_heapqmodule.c"
        var $retval19=$retval; //@line 84 "_heapqmodule.c"
        ;
        return $retval19; //@line 84 "_heapqmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _heappush($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $heap=__stackBase__;
        var $item=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 126 "_heapqmodule.c"
        var $2=_PyArg_UnpackTuple($1, __str4, 2, 2, allocate([$heap,0,0,0,$item,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 126 "_heapqmodule.c"
        var $3=($2)==0; //@line 126 "_heapqmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 126 "_heapqmodule.c"
      case 1: // $bb
        $0=0; //@line 127 "_heapqmodule.c"
        __label__ = 9; break; //@line 127 "_heapqmodule.c"
      case 2: // $bb1
        var $4=HEAP[$heap]; //@line 129 "_heapqmodule.c"
        var $5=$4+4; //@line 129 "_heapqmodule.c"
        var $6=HEAP[$5]; //@line 129 "_heapqmodule.c"
        var $7=$6+84; //@line 129 "_heapqmodule.c"
        var $8=HEAP[$7]; //@line 129 "_heapqmodule.c"
        var $9=($8) & 33554432; //@line 129 "_heapqmodule.c"
        var $10=($9)==0; //@line 129 "_heapqmodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 129 "_heapqmodule.c"
      case 3: // $bb2
        var $11=HEAP[_PyExc_TypeError]; //@line 130 "_heapqmodule.c"
        _PyErr_SetString($11, __str5); //@line 130 "_heapqmodule.c"
        $0=0; //@line 131 "_heapqmodule.c"
        __label__ = 9; break; //@line 131 "_heapqmodule.c"
      case 4: // $bb3
        var $12=HEAP[$item]; //@line 134 "_heapqmodule.c"
        var $13=HEAP[$heap]; //@line 134 "_heapqmodule.c"
        var $14=_PyList_Append($13, $12); //@line 134 "_heapqmodule.c"
        var $15=($14)==-1; //@line 134 "_heapqmodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 134 "_heapqmodule.c"
      case 5: // $bb4
        $0=0; //@line 135 "_heapqmodule.c"
        __label__ = 9; break; //@line 135 "_heapqmodule.c"
      case 6: // $bb5
        var $16=HEAP[$heap]; //@line 137 "_heapqmodule.c"
        var $17=$16; //@line 137 "_heapqmodule.c"
        var $18=$17+8; //@line 137 "_heapqmodule.c"
        var $19=HEAP[$18]; //@line 137 "_heapqmodule.c"
        var $20=($19) - 1; //@line 137 "_heapqmodule.c"
        var $21=HEAP[$heap]; //@line 137 "_heapqmodule.c"
        var $22=$21; //@line 137 "_heapqmodule.c"
        var $23=__siftdown($22, 0, $20); //@line 137 "_heapqmodule.c"
        var $24=($23)==-1; //@line 137 "_heapqmodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 137 "_heapqmodule.c"
      case 7: // $bb6
        $0=0; //@line 138 "_heapqmodule.c"
        __label__ = 9; break; //@line 138 "_heapqmodule.c"
      case 8: // $bb7
        var $25=HEAP[__Py_NoneStruct]; //@line 139 "_heapqmodule.c"
        var $26=($25) + 1; //@line 139 "_heapqmodule.c"
        HEAP[__Py_NoneStruct]=$26; //@line 139 "_heapqmodule.c"
        $0=__Py_NoneStruct; //@line 140 "_heapqmodule.c"
        __label__ = 9; break; //@line 140 "_heapqmodule.c"
      case 9: // $bb8
        var $27=$0; //@line 127 "_heapqmodule.c"
        $retval=$27; //@line 127 "_heapqmodule.c"
        var $retval9=$retval; //@line 127 "_heapqmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 127 "_heapqmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _heappop($self, $heap) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $heap_addr;
        var $retval;
        var $0;
        var $lastelt;
        var $returnitem;
        var $n;
        $self_addr=$self;
        $heap_addr=$heap;
        var $1=$heap_addr; //@line 152 "_heapqmodule.c"
        var $2=$1+4; //@line 152 "_heapqmodule.c"
        var $3=HEAP[$2]; //@line 152 "_heapqmodule.c"
        var $4=$3+84; //@line 152 "_heapqmodule.c"
        var $5=HEAP[$4]; //@line 152 "_heapqmodule.c"
        var $6=($5) & 33554432; //@line 152 "_heapqmodule.c"
        var $7=($6)==0; //@line 152 "_heapqmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 152 "_heapqmodule.c"
      case 1: // $bb
        var $8=HEAP[_PyExc_TypeError]; //@line 153 "_heapqmodule.c"
        _PyErr_SetString($8, __str5); //@line 153 "_heapqmodule.c"
        $0=0; //@line 154 "_heapqmodule.c"
        __label__ = 11; break; //@line 154 "_heapqmodule.c"
      case 2: // $bb1
        var $9=$heap_addr; //@line 158 "_heapqmodule.c"
        var $10=$9; //@line 158 "_heapqmodule.c"
        var $11=$10+8; //@line 158 "_heapqmodule.c"
        var $12=HEAP[$11]; //@line 158 "_heapqmodule.c"
        $n=$12; //@line 158 "_heapqmodule.c"
        var $13=$n; //@line 159 "_heapqmodule.c"
        var $14=($13)==0; //@line 159 "_heapqmodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 159 "_heapqmodule.c"
      case 3: // $bb2
        var $15=HEAP[_PyExc_IndexError]; //@line 160 "_heapqmodule.c"
        _PyErr_SetString($15, __str3); //@line 160 "_heapqmodule.c"
        $0=0; //@line 161 "_heapqmodule.c"
        __label__ = 11; break; //@line 161 "_heapqmodule.c"
      case 4: // $bb3
        var $16=$heap_addr; //@line 164 "_heapqmodule.c"
        var $17=$16; //@line 164 "_heapqmodule.c"
        var $18=$17+12; //@line 164 "_heapqmodule.c"
        var $19=HEAP[$18]; //@line 164 "_heapqmodule.c"
        var $20=$n; //@line 164 "_heapqmodule.c"
        var $21=($20) - 1; //@line 164 "_heapqmodule.c"
        var $22=$19+4*$21; //@line 164 "_heapqmodule.c"
        var $23=HEAP[$22]; //@line 164 "_heapqmodule.c"
        $lastelt=$23; //@line 164 "_heapqmodule.c"
        var $24=$lastelt; //@line 165 "_heapqmodule.c"
        var $25=$24; //@line 165 "_heapqmodule.c"
        var $26=HEAP[$25]; //@line 165 "_heapqmodule.c"
        var $27=($26) + 1; //@line 165 "_heapqmodule.c"
        var $28=$lastelt; //@line 165 "_heapqmodule.c"
        var $29=$28; //@line 165 "_heapqmodule.c"
        HEAP[$29]=$27; //@line 165 "_heapqmodule.c"
        var $30=$n; //@line 166 "_heapqmodule.c"
        var $31=($30) - 1; //@line 166 "_heapqmodule.c"
        var $32=$heap_addr; //@line 166 "_heapqmodule.c"
        var $33=$n; //@line 166 "_heapqmodule.c"
        var $34=_PyList_SetSlice($32, $31, $33, 0); //@line 166 "_heapqmodule.c"
        var $35=$n; //@line 167 "_heapqmodule.c"
        var $36=($35) - 1; //@line 167 "_heapqmodule.c"
        $n=$36; //@line 167 "_heapqmodule.c"
        var $37=$n; //@line 169 "_heapqmodule.c"
        var $38=($37)==0; //@line 169 "_heapqmodule.c"
        if ($38) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 169 "_heapqmodule.c"
      case 5: // $bb4
        var $39=$lastelt; //@line 170 "_heapqmodule.c"
        $0=$39; //@line 170 "_heapqmodule.c"
        __label__ = 11; break; //@line 170 "_heapqmodule.c"
      case 6: // $bb5
        var $40=$heap_addr; //@line 171 "_heapqmodule.c"
        var $41=$40; //@line 171 "_heapqmodule.c"
        var $42=$41+12; //@line 171 "_heapqmodule.c"
        var $43=HEAP[$42]; //@line 171 "_heapqmodule.c"
        var $44=$43; //@line 171 "_heapqmodule.c"
        var $45=HEAP[$44]; //@line 171 "_heapqmodule.c"
        $returnitem=$45; //@line 171 "_heapqmodule.c"
        var $46=$heap_addr; //@line 172 "_heapqmodule.c"
        var $47=$46; //@line 172 "_heapqmodule.c"
        var $48=$47+12; //@line 172 "_heapqmodule.c"
        var $49=HEAP[$48]; //@line 172 "_heapqmodule.c"
        var $50=$49; //@line 172 "_heapqmodule.c"
        var $51=$lastelt; //@line 172 "_heapqmodule.c"
        HEAP[$50]=$51; //@line 172 "_heapqmodule.c"
        var $52=$heap_addr; //@line 173 "_heapqmodule.c"
        var $53=$52; //@line 173 "_heapqmodule.c"
        var $54=__siftup($53, 0); //@line 173 "_heapqmodule.c"
        var $55=($54)==-1; //@line 173 "_heapqmodule.c"
        var $56=$returnitem; //@line 174 "_heapqmodule.c"
        if ($55) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 173 "_heapqmodule.c"
      case 7: // $bb6
        var $57=$56; //@line 174 "_heapqmodule.c"
        var $58=HEAP[$57]; //@line 174 "_heapqmodule.c"
        var $59=($58) - 1; //@line 174 "_heapqmodule.c"
        var $60=$returnitem; //@line 174 "_heapqmodule.c"
        var $61=$60; //@line 174 "_heapqmodule.c"
        HEAP[$61]=$59; //@line 174 "_heapqmodule.c"
        var $62=$returnitem; //@line 174 "_heapqmodule.c"
        var $63=$62; //@line 174 "_heapqmodule.c"
        var $64=HEAP[$63]; //@line 174 "_heapqmodule.c"
        var $65=($64)==0; //@line 174 "_heapqmodule.c"
        if ($65) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 174 "_heapqmodule.c"
      case 8: // $bb7
        var $66=$returnitem; //@line 174 "_heapqmodule.c"
        var $67=$66+4; //@line 174 "_heapqmodule.c"
        var $68=HEAP[$67]; //@line 174 "_heapqmodule.c"
        var $69=$68+24; //@line 174 "_heapqmodule.c"
        var $70=HEAP[$69]; //@line 174 "_heapqmodule.c"
        var $71=$returnitem; //@line 174 "_heapqmodule.c"
        FUNCTION_TABLE[$70]($71); //@line 174 "_heapqmodule.c"
        __label__ = 9; break; //@line 174 "_heapqmodule.c"
      case 9: // $bb8
        $0=0; //@line 175 "_heapqmodule.c"
        __label__ = 11; break; //@line 175 "_heapqmodule.c"
      case 10: // $bb9
        $0=$56; //@line 177 "_heapqmodule.c"
        __label__ = 11; break; //@line 177 "_heapqmodule.c"
      case 11: // $bb10
        var $72=$0; //@line 154 "_heapqmodule.c"
        $retval=$72; //@line 154 "_heapqmodule.c"
        var $retval11=$retval; //@line 154 "_heapqmodule.c"
        ;
        return $retval11; //@line 154 "_heapqmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _heapreplace($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $heap=__stackBase__;
        var $item=__stackBase__+4;
        var $returnitem;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 188 "_heapqmodule.c"
        var $2=_PyArg_UnpackTuple($1, __str6, 2, 2, allocate([$heap,0,0,0,$item,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 188 "_heapqmodule.c"
        var $3=($2)==0; //@line 188 "_heapqmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 188 "_heapqmodule.c"
      case 1: // $bb
        $0=0; //@line 189 "_heapqmodule.c"
        __label__ = 11; break; //@line 189 "_heapqmodule.c"
      case 2: // $bb1
        var $4=HEAP[$heap]; //@line 191 "_heapqmodule.c"
        var $5=$4+4; //@line 191 "_heapqmodule.c"
        var $6=HEAP[$5]; //@line 191 "_heapqmodule.c"
        var $7=$6+84; //@line 191 "_heapqmodule.c"
        var $8=HEAP[$7]; //@line 191 "_heapqmodule.c"
        var $9=($8) & 33554432; //@line 191 "_heapqmodule.c"
        var $10=($9)==0; //@line 191 "_heapqmodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 191 "_heapqmodule.c"
      case 3: // $bb2
        var $11=HEAP[_PyExc_TypeError]; //@line 192 "_heapqmodule.c"
        _PyErr_SetString($11, __str5); //@line 192 "_heapqmodule.c"
        $0=0; //@line 193 "_heapqmodule.c"
        __label__ = 11; break; //@line 193 "_heapqmodule.c"
      case 4: // $bb3
        var $12=HEAP[$heap]; //@line 196 "_heapqmodule.c"
        var $13=$12; //@line 196 "_heapqmodule.c"
        var $14=$13+8; //@line 196 "_heapqmodule.c"
        var $15=HEAP[$14]; //@line 196 "_heapqmodule.c"
        var $16=($15) <= 0; //@line 196 "_heapqmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 196 "_heapqmodule.c"
      case 5: // $bb4
        var $17=HEAP[_PyExc_IndexError]; //@line 197 "_heapqmodule.c"
        _PyErr_SetString($17, __str3); //@line 197 "_heapqmodule.c"
        $0=0; //@line 198 "_heapqmodule.c"
        __label__ = 11; break; //@line 198 "_heapqmodule.c"
      case 6: // $bb5
        var $18=HEAP[$heap]; //@line 201 "_heapqmodule.c"
        var $19=$18; //@line 201 "_heapqmodule.c"
        var $20=$19+12; //@line 201 "_heapqmodule.c"
        var $21=HEAP[$20]; //@line 201 "_heapqmodule.c"
        var $22=$21; //@line 201 "_heapqmodule.c"
        var $23=HEAP[$22]; //@line 201 "_heapqmodule.c"
        $returnitem=$23; //@line 201 "_heapqmodule.c"
        var $24=HEAP[$item]; //@line 202 "_heapqmodule.c"
        var $25=$24; //@line 202 "_heapqmodule.c"
        var $26=HEAP[$25]; //@line 202 "_heapqmodule.c"
        var $27=($26) + 1; //@line 202 "_heapqmodule.c"
        var $28=$24; //@line 202 "_heapqmodule.c"
        HEAP[$28]=$27; //@line 202 "_heapqmodule.c"
        var $29=HEAP[$heap]; //@line 203 "_heapqmodule.c"
        var $30=$29; //@line 203 "_heapqmodule.c"
        var $31=$30+12; //@line 203 "_heapqmodule.c"
        var $32=HEAP[$31]; //@line 203 "_heapqmodule.c"
        var $33=HEAP[$item]; //@line 203 "_heapqmodule.c"
        var $34=$32; //@line 203 "_heapqmodule.c"
        HEAP[$34]=$33; //@line 203 "_heapqmodule.c"
        var $35=HEAP[$heap]; //@line 204 "_heapqmodule.c"
        var $36=$35; //@line 204 "_heapqmodule.c"
        var $37=__siftup($36, 0); //@line 204 "_heapqmodule.c"
        var $38=($37)==-1; //@line 204 "_heapqmodule.c"
        var $39=$returnitem; //@line 205 "_heapqmodule.c"
        if ($38) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 204 "_heapqmodule.c"
      case 7: // $bb6
        var $40=$39; //@line 205 "_heapqmodule.c"
        var $41=HEAP[$40]; //@line 205 "_heapqmodule.c"
        var $42=($41) - 1; //@line 205 "_heapqmodule.c"
        var $43=$returnitem; //@line 205 "_heapqmodule.c"
        var $44=$43; //@line 205 "_heapqmodule.c"
        HEAP[$44]=$42; //@line 205 "_heapqmodule.c"
        var $45=$returnitem; //@line 205 "_heapqmodule.c"
        var $46=$45; //@line 205 "_heapqmodule.c"
        var $47=HEAP[$46]; //@line 205 "_heapqmodule.c"
        var $48=($47)==0; //@line 205 "_heapqmodule.c"
        if ($48) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 205 "_heapqmodule.c"
      case 8: // $bb7
        var $49=$returnitem; //@line 205 "_heapqmodule.c"
        var $50=$49+4; //@line 205 "_heapqmodule.c"
        var $51=HEAP[$50]; //@line 205 "_heapqmodule.c"
        var $52=$51+24; //@line 205 "_heapqmodule.c"
        var $53=HEAP[$52]; //@line 205 "_heapqmodule.c"
        var $54=$returnitem; //@line 205 "_heapqmodule.c"
        FUNCTION_TABLE[$53]($54); //@line 205 "_heapqmodule.c"
        __label__ = 9; break; //@line 205 "_heapqmodule.c"
      case 9: // $bb8
        $0=0; //@line 206 "_heapqmodule.c"
        __label__ = 11; break; //@line 206 "_heapqmodule.c"
      case 10: // $bb9
        $0=$39; //@line 208 "_heapqmodule.c"
        __label__ = 11; break; //@line 208 "_heapqmodule.c"
      case 11: // $bb10
        var $55=$0; //@line 189 "_heapqmodule.c"
        $retval=$55; //@line 189 "_heapqmodule.c"
        var $retval11=$retval; //@line 189 "_heapqmodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 189 "_heapqmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _heappushpop($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $heap=__stackBase__;
        var $item=__stackBase__+4;
        var $returnitem;
        var $cmp;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 227 "_heapqmodule.c"
        var $2=_PyArg_UnpackTuple($1, __str7, 2, 2, allocate([$heap,0,0,0,$item,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 227 "_heapqmodule.c"
        var $3=($2)==0; //@line 227 "_heapqmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 227 "_heapqmodule.c"
      case 1: // $bb
        $0=0; //@line 228 "_heapqmodule.c"
        __label__ = 15; break; //@line 228 "_heapqmodule.c"
      case 2: // $bb1
        var $4=HEAP[$heap]; //@line 230 "_heapqmodule.c"
        var $5=$4+4; //@line 230 "_heapqmodule.c"
        var $6=HEAP[$5]; //@line 230 "_heapqmodule.c"
        var $7=$6+84; //@line 230 "_heapqmodule.c"
        var $8=HEAP[$7]; //@line 230 "_heapqmodule.c"
        var $9=($8) & 33554432; //@line 230 "_heapqmodule.c"
        var $10=($9)==0; //@line 230 "_heapqmodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 230 "_heapqmodule.c"
      case 3: // $bb2
        var $11=HEAP[_PyExc_TypeError]; //@line 231 "_heapqmodule.c"
        _PyErr_SetString($11, __str5); //@line 231 "_heapqmodule.c"
        $0=0; //@line 232 "_heapqmodule.c"
        __label__ = 15; break; //@line 232 "_heapqmodule.c"
      case 4: // $bb3
        var $12=HEAP[$heap]; //@line 235 "_heapqmodule.c"
        var $13=$12; //@line 235 "_heapqmodule.c"
        var $14=$13+8; //@line 235 "_heapqmodule.c"
        var $15=HEAP[$14]; //@line 235 "_heapqmodule.c"
        var $16=($15) <= 0; //@line 235 "_heapqmodule.c"
        var $17=HEAP[$item]; //@line 236 "_heapqmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 235 "_heapqmodule.c"
      case 5: // $bb4
        var $18=$17; //@line 236 "_heapqmodule.c"
        var $19=HEAP[$18]; //@line 236 "_heapqmodule.c"
        var $20=($19) + 1; //@line 236 "_heapqmodule.c"
        var $21=$17; //@line 236 "_heapqmodule.c"
        HEAP[$21]=$20; //@line 236 "_heapqmodule.c"
        var $22=HEAP[$item]; //@line 237 "_heapqmodule.c"
        $0=$22; //@line 237 "_heapqmodule.c"
        __label__ = 15; break; //@line 237 "_heapqmodule.c"
      case 6: // $bb5
        var $23=HEAP[$heap]; //@line 240 "_heapqmodule.c"
        var $24=$23; //@line 240 "_heapqmodule.c"
        var $25=$24+12; //@line 240 "_heapqmodule.c"
        var $26=HEAP[$25]; //@line 240 "_heapqmodule.c"
        var $27=$26; //@line 240 "_heapqmodule.c"
        var $28=HEAP[$27]; //@line 240 "_heapqmodule.c"
        var $29=_cmp_lt($28, $17); //@line 240 "_heapqmodule.c"
        $cmp=$29; //@line 240 "_heapqmodule.c"
        var $30=$cmp; //@line 241 "_heapqmodule.c"
        var $31=($30)==-1; //@line 241 "_heapqmodule.c"
        if ($31) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 241 "_heapqmodule.c"
      case 7: // $bb6
        $0=0; //@line 242 "_heapqmodule.c"
        __label__ = 15; break; //@line 242 "_heapqmodule.c"
      case 8: // $bb7
        var $32=$cmp; //@line 243 "_heapqmodule.c"
        var $33=($32)==0; //@line 243 "_heapqmodule.c"
        if ($33) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 243 "_heapqmodule.c"
      case 9: // $bb8
        var $34=HEAP[$item]; //@line 244 "_heapqmodule.c"
        var $35=$34; //@line 244 "_heapqmodule.c"
        var $36=HEAP[$35]; //@line 244 "_heapqmodule.c"
        var $37=($36) + 1; //@line 244 "_heapqmodule.c"
        var $38=$34; //@line 244 "_heapqmodule.c"
        HEAP[$38]=$37; //@line 244 "_heapqmodule.c"
        var $39=HEAP[$item]; //@line 245 "_heapqmodule.c"
        $0=$39; //@line 245 "_heapqmodule.c"
        __label__ = 15; break; //@line 245 "_heapqmodule.c"
      case 10: // $bb9
        var $40=HEAP[$heap]; //@line 248 "_heapqmodule.c"
        var $41=$40; //@line 248 "_heapqmodule.c"
        var $42=$41+12; //@line 248 "_heapqmodule.c"
        var $43=HEAP[$42]; //@line 248 "_heapqmodule.c"
        var $44=$43; //@line 248 "_heapqmodule.c"
        var $45=HEAP[$44]; //@line 248 "_heapqmodule.c"
        $returnitem=$45; //@line 248 "_heapqmodule.c"
        var $46=HEAP[$item]; //@line 249 "_heapqmodule.c"
        var $47=$46; //@line 249 "_heapqmodule.c"
        var $48=HEAP[$47]; //@line 249 "_heapqmodule.c"
        var $49=($48) + 1; //@line 249 "_heapqmodule.c"
        var $50=$46; //@line 249 "_heapqmodule.c"
        HEAP[$50]=$49; //@line 249 "_heapqmodule.c"
        var $51=HEAP[$heap]; //@line 250 "_heapqmodule.c"
        var $52=$51; //@line 250 "_heapqmodule.c"
        var $53=$52+12; //@line 250 "_heapqmodule.c"
        var $54=HEAP[$53]; //@line 250 "_heapqmodule.c"
        var $55=HEAP[$item]; //@line 250 "_heapqmodule.c"
        var $56=$54; //@line 250 "_heapqmodule.c"
        HEAP[$56]=$55; //@line 250 "_heapqmodule.c"
        var $57=HEAP[$heap]; //@line 251 "_heapqmodule.c"
        var $58=$57; //@line 251 "_heapqmodule.c"
        var $59=__siftup($58, 0); //@line 251 "_heapqmodule.c"
        var $60=($59)==-1; //@line 251 "_heapqmodule.c"
        var $61=$returnitem; //@line 252 "_heapqmodule.c"
        if ($60) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 251 "_heapqmodule.c"
      case 11: // $bb10
        var $62=$61; //@line 252 "_heapqmodule.c"
        var $63=HEAP[$62]; //@line 252 "_heapqmodule.c"
        var $64=($63) - 1; //@line 252 "_heapqmodule.c"
        var $65=$returnitem; //@line 252 "_heapqmodule.c"
        var $66=$65; //@line 252 "_heapqmodule.c"
        HEAP[$66]=$64; //@line 252 "_heapqmodule.c"
        var $67=$returnitem; //@line 252 "_heapqmodule.c"
        var $68=$67; //@line 252 "_heapqmodule.c"
        var $69=HEAP[$68]; //@line 252 "_heapqmodule.c"
        var $70=($69)==0; //@line 252 "_heapqmodule.c"
        if ($70) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 252 "_heapqmodule.c"
      case 12: // $bb11
        var $71=$returnitem; //@line 252 "_heapqmodule.c"
        var $72=$71+4; //@line 252 "_heapqmodule.c"
        var $73=HEAP[$72]; //@line 252 "_heapqmodule.c"
        var $74=$73+24; //@line 252 "_heapqmodule.c"
        var $75=HEAP[$74]; //@line 252 "_heapqmodule.c"
        var $76=$returnitem; //@line 252 "_heapqmodule.c"
        FUNCTION_TABLE[$75]($76); //@line 252 "_heapqmodule.c"
        __label__ = 13; break; //@line 252 "_heapqmodule.c"
      case 13: // $bb12
        $0=0; //@line 253 "_heapqmodule.c"
        __label__ = 15; break; //@line 253 "_heapqmodule.c"
      case 14: // $bb13
        $0=$61; //@line 255 "_heapqmodule.c"
        __label__ = 15; break; //@line 255 "_heapqmodule.c"
      case 15: // $bb14
        var $77=$0; //@line 228 "_heapqmodule.c"
        $retval=$77; //@line 228 "_heapqmodule.c"
        var $retval15=$retval; //@line 228 "_heapqmodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 228 "_heapqmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _heapify($self, $heap) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $heap_addr;
        var $retval;
        var $0;
        var $i;
        var $n;
        $self_addr=$self;
        $heap_addr=$heap;
        var $1=$heap_addr; //@line 268 "_heapqmodule.c"
        var $2=$1+4; //@line 268 "_heapqmodule.c"
        var $3=HEAP[$2]; //@line 268 "_heapqmodule.c"
        var $4=$3+84; //@line 268 "_heapqmodule.c"
        var $5=HEAP[$4]; //@line 268 "_heapqmodule.c"
        var $6=($5) & 33554432; //@line 268 "_heapqmodule.c"
        var $7=($6)==0; //@line 268 "_heapqmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 268 "_heapqmodule.c"
      case 1: // $bb
        var $8=HEAP[_PyExc_TypeError]; //@line 269 "_heapqmodule.c"
        _PyErr_SetString($8, __str5); //@line 269 "_heapqmodule.c"
        $0=0; //@line 270 "_heapqmodule.c"
        __label__ = 8; break; //@line 270 "_heapqmodule.c"
      case 2: // $bb1
        var $9=$heap_addr; //@line 273 "_heapqmodule.c"
        var $10=$9; //@line 273 "_heapqmodule.c"
        var $11=$10+8; //@line 273 "_heapqmodule.c"
        var $12=HEAP[$11]; //@line 273 "_heapqmodule.c"
        $n=$12; //@line 273 "_heapqmodule.c"
        var $13=$n; //@line 281 "_heapqmodule.c"
        var $14=((($13)/2)|0); //@line 281 "_heapqmodule.c"
        var $15=($14) - 1; //@line 281 "_heapqmodule.c"
        $i=$15; //@line 281 "_heapqmodule.c"
        __lastLabel__ = 2; __label__ = 6; break; //@line 281 "_heapqmodule.c"
      case 3: // $bb2
        var $16=$heap_addr; //@line 282 "_heapqmodule.c"
        var $17=$16; //@line 282 "_heapqmodule.c"
        var $18=$i; //@line 282 "_heapqmodule.c"
        var $19=__siftup($17, $18); //@line 282 "_heapqmodule.c"
        var $20=($19)==-1; //@line 282 "_heapqmodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 282 "_heapqmodule.c"
      case 4: // $bb3
        $0=0; //@line 283 "_heapqmodule.c"
        __label__ = 8; break; //@line 283 "_heapqmodule.c"
      case 5: // $bb4
        var $21=$i; //@line 281 "_heapqmodule.c"
        var $22=($21) - 1; //@line 281 "_heapqmodule.c"
        $i=$22; //@line 281 "_heapqmodule.c"
        __lastLabel__ = 5; __label__ = 6; break; //@line 281 "_heapqmodule.c"
      case 6: // $bb5
        var $23=__lastLabel__ == 5 ? $22 : ($15);
        var $24=($23) >= 0; //@line 281 "_heapqmodule.c"
        if ($24) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 281 "_heapqmodule.c"
      case 7: // $bb6
        var $25=HEAP[__Py_NoneStruct]; //@line 284 "_heapqmodule.c"
        var $26=($25) + 1; //@line 284 "_heapqmodule.c"
        HEAP[__Py_NoneStruct]=$26; //@line 284 "_heapqmodule.c"
        $0=__Py_NoneStruct; //@line 285 "_heapqmodule.c"
        __label__ = 8; break; //@line 285 "_heapqmodule.c"
      case 8: // $bb7
        var $27=$0; //@line 270 "_heapqmodule.c"
        $retval=$27; //@line 270 "_heapqmodule.c"
        var $retval8=$retval; //@line 270 "_heapqmodule.c"
        ;
        return $retval8; //@line 270 "_heapqmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nlargest($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $heap;
        var $elem;
        var $iterable=__stackBase__;
        var $sol;
        var $it;
        var $oldelem;
        var $i;
        var $n=__stackBase__+4;
        var $cmp;
        $self_addr=$self;
        $args_addr=$args;
        $heap=0; //@line 294 "_heapqmodule.c"
        var $1=$args_addr; //@line 298 "_heapqmodule.c"
        var $2=_PyArg_ParseTuple($1, __str8, allocate([$n,0,0,0,$iterable,0,0,0], ["i32*",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 298 "_heapqmodule.c"
        var $3=($2)==0; //@line 298 "_heapqmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 298 "_heapqmodule.c"
      case 1: // $bb
        $0=0; //@line 299 "_heapqmodule.c"
        __label__ = 44; break; //@line 299 "_heapqmodule.c"
      case 2: // $bb1
        var $4=HEAP[$iterable]; //@line 301 "_heapqmodule.c"
        var $5=_PyObject_GetIter($4); //@line 301 "_heapqmodule.c"
        $it=$5; //@line 301 "_heapqmodule.c"
        var $6=$it; //@line 302 "_heapqmodule.c"
        var $7=($6)==0; //@line 302 "_heapqmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 302 "_heapqmodule.c"
      case 3: // $bb2
        $0=0; //@line 303 "_heapqmodule.c"
        __label__ = 44; break; //@line 303 "_heapqmodule.c"
      case 4: // $bb3
        var $8=_PyList_New(0); //@line 305 "_heapqmodule.c"
        $heap=$8; //@line 305 "_heapqmodule.c"
        var $9=$heap; //@line 306 "_heapqmodule.c"
        var $10=($9)==0; //@line 306 "_heapqmodule.c"
        if ($10) { __label__ = 38; break; } else { __label__ = 5; break; } //@line 306 "_heapqmodule.c"
      case 5: // $bb4
        $i=0; //@line 309 "_heapqmodule.c"
        __label__ = 14; break; //@line 309 "_heapqmodule.c"
      case 6: // $bb5
        var $11=$it; //@line 310 "_heapqmodule.c"
        var $12=_PyIter_Next($11); //@line 310 "_heapqmodule.c"
        $elem=$12; //@line 310 "_heapqmodule.c"
        var $13=$elem; //@line 311 "_heapqmodule.c"
        var $14=($13)==0; //@line 311 "_heapqmodule.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 311 "_heapqmodule.c"
      case 7: // $bb6
        var $15=_PyErr_Occurred(); //@line 312 "_heapqmodule.c"
        var $16=($15)!=0; //@line 312 "_heapqmodule.c"
        if ($16) { __label__ = 38; break; } else { __label__ = 33; break; } //@line 312 "_heapqmodule.c"
      case 8: // $bb7
        var $17=$heap; //@line 317 "_heapqmodule.c"
        var $18=$elem; //@line 317 "_heapqmodule.c"
        var $19=_PyList_Append($17, $18); //@line 317 "_heapqmodule.c"
        var $20=($19)==-1; //@line 317 "_heapqmodule.c"
        var $21=$elem; //@line 318 "_heapqmodule.c"
        var $22=$21; //@line 318 "_heapqmodule.c"
        var $23=HEAP[$22]; //@line 318 "_heapqmodule.c"
        var $24=($23) - 1; //@line 318 "_heapqmodule.c"
        var $25=$elem; //@line 318 "_heapqmodule.c"
        var $26=$25; //@line 318 "_heapqmodule.c"
        HEAP[$26]=$24; //@line 318 "_heapqmodule.c"
        var $27=$elem; //@line 318 "_heapqmodule.c"
        var $28=$27; //@line 318 "_heapqmodule.c"
        var $29=HEAP[$28]; //@line 318 "_heapqmodule.c"
        var $30=($29)==0; //@line 318 "_heapqmodule.c"
        if ($20) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 317 "_heapqmodule.c"
      case 9: // $bb8
        if ($30) { __label__ = 10; break; } else { __label__ = 38; break; } //@line 318 "_heapqmodule.c"
      case 10: // $bb9
        var $31=$elem; //@line 318 "_heapqmodule.c"
        var $32=$31+4; //@line 318 "_heapqmodule.c"
        var $33=HEAP[$32]; //@line 318 "_heapqmodule.c"
        var $34=$33+24; //@line 318 "_heapqmodule.c"
        var $35=HEAP[$34]; //@line 318 "_heapqmodule.c"
        var $36=$elem; //@line 318 "_heapqmodule.c"
        FUNCTION_TABLE[$35]($36); //@line 318 "_heapqmodule.c"
        __label__ = 38; break; //@line 318 "_heapqmodule.c"
      case 11: // $bb11
        if ($30) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 321 "_heapqmodule.c"
      case 12: // $bb12
        var $37=$elem; //@line 321 "_heapqmodule.c"
        var $38=$37+4; //@line 321 "_heapqmodule.c"
        var $39=HEAP[$38]; //@line 321 "_heapqmodule.c"
        var $40=$39+24; //@line 321 "_heapqmodule.c"
        var $41=HEAP[$40]; //@line 321 "_heapqmodule.c"
        var $42=$elem; //@line 321 "_heapqmodule.c"
        FUNCTION_TABLE[$41]($42); //@line 321 "_heapqmodule.c"
        __label__ = 13; break; //@line 321 "_heapqmodule.c"
      case 13: // $bb13
        var $43=$i; //@line 309 "_heapqmodule.c"
        var $44=($43) + 1; //@line 309 "_heapqmodule.c"
        $i=$44; //@line 309 "_heapqmodule.c"
        __label__ = 14; break; //@line 309 "_heapqmodule.c"
      case 14: // $bb14
        var $45=HEAP[$n]; //@line 309 "_heapqmodule.c"
        var $46=$i; //@line 309 "_heapqmodule.c"
        var $47=($46) < ($45); //@line 309 "_heapqmodule.c"
        if ($47) { __label__ = 6; break; } else { __label__ = 15; break; } //@line 309 "_heapqmodule.c"
      case 15: // $bb15
        var $48=$heap; //@line 323 "_heapqmodule.c"
        var $49=$48; //@line 323 "_heapqmodule.c"
        var $50=$49+8; //@line 323 "_heapqmodule.c"
        var $51=HEAP[$50]; //@line 323 "_heapqmodule.c"
        var $52=($51)==0; //@line 323 "_heapqmodule.c"
        if ($52) { __label__ = 33; break; } else { __label__ = 16; break; } //@line 323 "_heapqmodule.c"
      case 16: // $bb16
        var $53=HEAP[$n]; //@line 326 "_heapqmodule.c"
        var $54=((($53)/2)|0); //@line 326 "_heapqmodule.c"
        var $55=($54) - 1; //@line 326 "_heapqmodule.c"
        $i=$55; //@line 326 "_heapqmodule.c"
        __lastLabel__ = 16; __label__ = 19; break; //@line 326 "_heapqmodule.c"
      case 17: // $bb17
        var $56=$i; //@line 327 "_heapqmodule.c"
        var $57=__siftup($64, $56); //@line 327 "_heapqmodule.c"
        var $58=($57)==-1; //@line 327 "_heapqmodule.c"
        if ($58) { __label__ = 38; break; } else { __label__ = 18; break; } //@line 327 "_heapqmodule.c"
      case 18: // $bb18
        var $59=$i; //@line 326 "_heapqmodule.c"
        var $60=($59) - 1; //@line 326 "_heapqmodule.c"
        $i=$60; //@line 326 "_heapqmodule.c"
        __lastLabel__ = 18; __label__ = 19; break; //@line 326 "_heapqmodule.c"
      case 19: // $bb19
        var $61=__lastLabel__ == 18 ? $60 : ($55);
        var $62=($61) >= 0; //@line 326 "_heapqmodule.c"
        var $63=$heap; //@line 327 "_heapqmodule.c"
        var $64=$63; //@line 327 "_heapqmodule.c"
        if ($62) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 326 "_heapqmodule.c"
      case 20: // $bb20
        var $65=$64+12; //@line 330 "_heapqmodule.c"
        var $66=HEAP[$65]; //@line 330 "_heapqmodule.c"
        var $67=$66; //@line 330 "_heapqmodule.c"
        var $68=HEAP[$67]; //@line 330 "_heapqmodule.c"
        $sol=$68; //@line 330 "_heapqmodule.c"
        __label__ = 21; break; //@line 330 "_heapqmodule.c"
      case 21: // $bb21
        var $69=$it; //@line 332 "_heapqmodule.c"
        var $70=_PyIter_Next($69); //@line 332 "_heapqmodule.c"
        $elem=$70; //@line 332 "_heapqmodule.c"
        var $71=($70)==0; //@line 333 "_heapqmodule.c"
        if ($71) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 333 "_heapqmodule.c"
      case 22: // $bb22
        var $72=_PyErr_Occurred(); //@line 334 "_heapqmodule.c"
        var $73=($72)!=0; //@line 334 "_heapqmodule.c"
        if ($73) { __label__ = 38; break; } else { __label__ = 33; break; } //@line 334 "_heapqmodule.c"
      case 23: // $bb23
        var $74=$sol; //@line 339 "_heapqmodule.c"
        var $75=$elem; //@line 339 "_heapqmodule.c"
        var $76=_cmp_lt($74, $75); //@line 339 "_heapqmodule.c"
        $cmp=$76; //@line 339 "_heapqmodule.c"
        var $77=$cmp; //@line 340 "_heapqmodule.c"
        var $78=($77)==-1; //@line 340 "_heapqmodule.c"
        if ($78) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 340 "_heapqmodule.c"
      case 24: // $bb24
        var $79=$elem; //@line 341 "_heapqmodule.c"
        var $80=$79; //@line 341 "_heapqmodule.c"
        var $81=HEAP[$80]; //@line 341 "_heapqmodule.c"
        var $82=($81) - 1; //@line 341 "_heapqmodule.c"
        var $83=$elem; //@line 341 "_heapqmodule.c"
        var $84=$83; //@line 341 "_heapqmodule.c"
        HEAP[$84]=$82; //@line 341 "_heapqmodule.c"
        var $85=$elem; //@line 341 "_heapqmodule.c"
        var $86=$85; //@line 341 "_heapqmodule.c"
        var $87=HEAP[$86]; //@line 341 "_heapqmodule.c"
        var $88=($87)==0; //@line 341 "_heapqmodule.c"
        if ($88) { __label__ = 25; break; } else { __label__ = 38; break; } //@line 341 "_heapqmodule.c"
      case 25: // $bb25
        var $89=$elem; //@line 341 "_heapqmodule.c"
        var $90=$89+4; //@line 341 "_heapqmodule.c"
        var $91=HEAP[$90]; //@line 341 "_heapqmodule.c"
        var $92=$91+24; //@line 341 "_heapqmodule.c"
        var $93=HEAP[$92]; //@line 341 "_heapqmodule.c"
        var $94=$elem; //@line 341 "_heapqmodule.c"
        FUNCTION_TABLE[$93]($94); //@line 341 "_heapqmodule.c"
        __label__ = 38; break; //@line 341 "_heapqmodule.c"
      case 26: // $bb27
        var $95=$cmp; //@line 344 "_heapqmodule.c"
        var $96=($95)==0; //@line 344 "_heapqmodule.c"
        if ($96) { __label__ = 27; break; } else { __label__ = 29; break; } //@line 344 "_heapqmodule.c"
      case 27: // $bb28
        var $97=$elem; //@line 345 "_heapqmodule.c"
        var $98=$97; //@line 345 "_heapqmodule.c"
        var $99=HEAP[$98]; //@line 345 "_heapqmodule.c"
        var $100=($99) - 1; //@line 345 "_heapqmodule.c"
        var $101=$elem; //@line 345 "_heapqmodule.c"
        var $102=$101; //@line 345 "_heapqmodule.c"
        HEAP[$102]=$100; //@line 345 "_heapqmodule.c"
        var $103=$elem; //@line 345 "_heapqmodule.c"
        var $104=$103; //@line 345 "_heapqmodule.c"
        var $105=HEAP[$104]; //@line 345 "_heapqmodule.c"
        var $106=($105)==0; //@line 345 "_heapqmodule.c"
        if ($106) { __label__ = 28; break; } else { __label__ = 21; break; } //@line 345 "_heapqmodule.c"
      case 28: // $bb29
        var $107=$elem; //@line 345 "_heapqmodule.c"
        var $108=$107+4; //@line 345 "_heapqmodule.c"
        var $109=HEAP[$108]; //@line 345 "_heapqmodule.c"
        var $110=$109+24; //@line 345 "_heapqmodule.c"
        var $111=HEAP[$110]; //@line 345 "_heapqmodule.c"
        var $112=$elem; //@line 345 "_heapqmodule.c"
        FUNCTION_TABLE[$111]($112); //@line 345 "_heapqmodule.c"
        __label__ = 21; break; //@line 345 "_heapqmodule.c"
      case 29: // $bb31
        var $113=$heap; //@line 348 "_heapqmodule.c"
        var $114=$113; //@line 348 "_heapqmodule.c"
        var $115=$114+12; //@line 348 "_heapqmodule.c"
        var $116=HEAP[$115]; //@line 348 "_heapqmodule.c"
        var $117=$116; //@line 348 "_heapqmodule.c"
        var $118=HEAP[$117]; //@line 348 "_heapqmodule.c"
        $oldelem=$118; //@line 348 "_heapqmodule.c"
        var $119=$heap; //@line 349 "_heapqmodule.c"
        var $120=$119; //@line 349 "_heapqmodule.c"
        var $121=$120+12; //@line 349 "_heapqmodule.c"
        var $122=HEAP[$121]; //@line 349 "_heapqmodule.c"
        var $123=$122; //@line 349 "_heapqmodule.c"
        var $124=$elem; //@line 349 "_heapqmodule.c"
        HEAP[$123]=$124; //@line 349 "_heapqmodule.c"
        var $125=$oldelem; //@line 350 "_heapqmodule.c"
        var $126=$125; //@line 350 "_heapqmodule.c"
        var $127=HEAP[$126]; //@line 350 "_heapqmodule.c"
        var $128=($127) - 1; //@line 350 "_heapqmodule.c"
        var $129=$oldelem; //@line 350 "_heapqmodule.c"
        var $130=$129; //@line 350 "_heapqmodule.c"
        HEAP[$130]=$128; //@line 350 "_heapqmodule.c"
        var $131=$oldelem; //@line 350 "_heapqmodule.c"
        var $132=$131; //@line 350 "_heapqmodule.c"
        var $133=HEAP[$132]; //@line 350 "_heapqmodule.c"
        var $134=($133)==0; //@line 350 "_heapqmodule.c"
        if ($134) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 350 "_heapqmodule.c"
      case 30: // $bb32
        var $135=$oldelem; //@line 350 "_heapqmodule.c"
        var $136=$135+4; //@line 350 "_heapqmodule.c"
        var $137=HEAP[$136]; //@line 350 "_heapqmodule.c"
        var $138=$137+24; //@line 350 "_heapqmodule.c"
        var $139=HEAP[$138]; //@line 350 "_heapqmodule.c"
        var $140=$oldelem; //@line 350 "_heapqmodule.c"
        FUNCTION_TABLE[$139]($140); //@line 350 "_heapqmodule.c"
        __label__ = 31; break; //@line 350 "_heapqmodule.c"
      case 31: // $bb33
        var $141=$heap; //@line 351 "_heapqmodule.c"
        var $142=$141; //@line 351 "_heapqmodule.c"
        var $143=__siftup($142, 0); //@line 351 "_heapqmodule.c"
        var $144=($143)==-1; //@line 351 "_heapqmodule.c"
        if ($144) { __label__ = 38; break; } else { __label__ = 32; break; } //@line 351 "_heapqmodule.c"
      case 32: // $bb34
        var $145=$heap; //@line 353 "_heapqmodule.c"
        var $146=$145; //@line 353 "_heapqmodule.c"
        var $147=$146+12; //@line 353 "_heapqmodule.c"
        var $148=HEAP[$147]; //@line 353 "_heapqmodule.c"
        var $149=$148; //@line 353 "_heapqmodule.c"
        var $150=HEAP[$149]; //@line 353 "_heapqmodule.c"
        $sol=$150; //@line 353 "_heapqmodule.c"
        __label__ = 21; break; //@line 353 "_heapqmodule.c"
      case 33: // $sortit
        var $151=$heap; //@line 356 "_heapqmodule.c"
        var $152=_PyList_Sort($151); //@line 356 "_heapqmodule.c"
        var $153=($152)==-1; //@line 356 "_heapqmodule.c"
        if ($153) { __label__ = 38; break; } else { __label__ = 34; break; } //@line 356 "_heapqmodule.c"
      case 34: // $bb36
        var $154=$heap; //@line 358 "_heapqmodule.c"
        var $155=_PyList_Reverse($154); //@line 358 "_heapqmodule.c"
        var $156=($155)==-1; //@line 358 "_heapqmodule.c"
        if ($156) { __label__ = 38; break; } else { __label__ = 35; break; } //@line 358 "_heapqmodule.c"
      case 35: // $bb37
        var $157=$it; //@line 360 "_heapqmodule.c"
        var $158=$157; //@line 360 "_heapqmodule.c"
        var $159=HEAP[$158]; //@line 360 "_heapqmodule.c"
        var $160=($159) - 1; //@line 360 "_heapqmodule.c"
        var $161=$it; //@line 360 "_heapqmodule.c"
        var $162=$161; //@line 360 "_heapqmodule.c"
        HEAP[$162]=$160; //@line 360 "_heapqmodule.c"
        var $163=$it; //@line 360 "_heapqmodule.c"
        var $164=$163; //@line 360 "_heapqmodule.c"
        var $165=HEAP[$164]; //@line 360 "_heapqmodule.c"
        var $166=($165)==0; //@line 360 "_heapqmodule.c"
        if ($166) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 360 "_heapqmodule.c"
      case 36: // $bb38
        var $167=$it; //@line 360 "_heapqmodule.c"
        var $168=$167+4; //@line 360 "_heapqmodule.c"
        var $169=HEAP[$168]; //@line 360 "_heapqmodule.c"
        var $170=$169+24; //@line 360 "_heapqmodule.c"
        var $171=HEAP[$170]; //@line 360 "_heapqmodule.c"
        var $172=$it; //@line 360 "_heapqmodule.c"
        FUNCTION_TABLE[$171]($172); //@line 360 "_heapqmodule.c"
        __label__ = 37; break; //@line 360 "_heapqmodule.c"
      case 37: // $bb39
        var $173=$heap; //@line 361 "_heapqmodule.c"
        $0=$173; //@line 361 "_heapqmodule.c"
        __label__ = 44; break; //@line 361 "_heapqmodule.c"
      case 38: // $fail
        var $174=$it; //@line 364 "_heapqmodule.c"
        var $175=$174; //@line 364 "_heapqmodule.c"
        var $176=HEAP[$175]; //@line 364 "_heapqmodule.c"
        var $177=($176) - 1; //@line 364 "_heapqmodule.c"
        var $178=$it; //@line 364 "_heapqmodule.c"
        var $179=$178; //@line 364 "_heapqmodule.c"
        HEAP[$179]=$177; //@line 364 "_heapqmodule.c"
        var $180=$it; //@line 364 "_heapqmodule.c"
        var $181=$180; //@line 364 "_heapqmodule.c"
        var $182=HEAP[$181]; //@line 364 "_heapqmodule.c"
        var $183=($182)==0; //@line 364 "_heapqmodule.c"
        if ($183) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 364 "_heapqmodule.c"
      case 39: // $bb40
        var $184=$it; //@line 364 "_heapqmodule.c"
        var $185=$184+4; //@line 364 "_heapqmodule.c"
        var $186=HEAP[$185]; //@line 364 "_heapqmodule.c"
        var $187=$186+24; //@line 364 "_heapqmodule.c"
        var $188=HEAP[$187]; //@line 364 "_heapqmodule.c"
        var $189=$it; //@line 364 "_heapqmodule.c"
        FUNCTION_TABLE[$188]($189); //@line 364 "_heapqmodule.c"
        __label__ = 40; break; //@line 364 "_heapqmodule.c"
      case 40: // $bb41
        var $190=$heap; //@line 365 "_heapqmodule.c"
        var $191=($190)!=0; //@line 365 "_heapqmodule.c"
        if ($191) { __label__ = 41; break; } else { __label__ = 43; break; } //@line 365 "_heapqmodule.c"
      case 41: // $bb42
        var $192=$heap; //@line 365 "_heapqmodule.c"
        var $193=$192; //@line 365 "_heapqmodule.c"
        var $194=HEAP[$193]; //@line 365 "_heapqmodule.c"
        var $195=($194) - 1; //@line 365 "_heapqmodule.c"
        var $196=$heap; //@line 365 "_heapqmodule.c"
        var $197=$196; //@line 365 "_heapqmodule.c"
        HEAP[$197]=$195; //@line 365 "_heapqmodule.c"
        var $198=$heap; //@line 365 "_heapqmodule.c"
        var $199=$198; //@line 365 "_heapqmodule.c"
        var $200=HEAP[$199]; //@line 365 "_heapqmodule.c"
        var $201=($200)==0; //@line 365 "_heapqmodule.c"
        if ($201) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 365 "_heapqmodule.c"
      case 42: // $bb43
        var $202=$heap; //@line 365 "_heapqmodule.c"
        var $203=$202+4; //@line 365 "_heapqmodule.c"
        var $204=HEAP[$203]; //@line 365 "_heapqmodule.c"
        var $205=$204+24; //@line 365 "_heapqmodule.c"
        var $206=HEAP[$205]; //@line 365 "_heapqmodule.c"
        var $207=$heap; //@line 365 "_heapqmodule.c"
        FUNCTION_TABLE[$206]($207); //@line 365 "_heapqmodule.c"
        __label__ = 43; break; //@line 365 "_heapqmodule.c"
      case 43: // $bb44
        $0=0; //@line 366 "_heapqmodule.c"
        __label__ = 44; break; //@line 366 "_heapqmodule.c"
      case 44: // $bb45
        var $208=$0; //@line 299 "_heapqmodule.c"
        $retval=$208; //@line 299 "_heapqmodule.c"
        var $retval46=$retval; //@line 299 "_heapqmodule.c"
        STACKTOP = __stackBase__;
        return $retval46; //@line 299 "_heapqmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __siftdownmax($heap, $startpos, $pos) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $heap_addr;
        var $startpos_addr;
        var $pos_addr;
        var $retval;
        var $0;
        var $newitem;
        var $parent;
        var $cmp;
        var $parentpos;
        $heap_addr=$heap;
        $startpos_addr=$startpos;
        $pos_addr=$pos;
        var $1=$heap_addr; //@line 381 "_heapqmodule.c"
        var $2=$1; //@line 381 "_heapqmodule.c"
        var $3=$2+4; //@line 381 "_heapqmodule.c"
        var $4=HEAP[$3]; //@line 381 "_heapqmodule.c"
        var $5=$4+84; //@line 381 "_heapqmodule.c"
        var $6=HEAP[$5]; //@line 381 "_heapqmodule.c"
        var $7=($6) & 33554432; //@line 381 "_heapqmodule.c"
        var $8=($7)==0; //@line 381 "_heapqmodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 381 "_heapqmodule.c"
      case 1: // $bb
        ___assert_fail(__str1, __str2, 381, ___PRETTY_FUNCTION___8840); //@line 381 "_heapqmodule.c"
        throw "Reached an unreachable!" //@line 381 "_heapqmodule.c"
      case 2: // $bb1
        var $9=$heap_addr; //@line 382 "_heapqmodule.c"
        var $10=$9; //@line 382 "_heapqmodule.c"
        var $11=$10+8; //@line 382 "_heapqmodule.c"
        var $12=HEAP[$11]; //@line 382 "_heapqmodule.c"
        var $13=$pos_addr; //@line 382 "_heapqmodule.c"
        var $14=($12) <= ($13); //@line 382 "_heapqmodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 382 "_heapqmodule.c"
      case 3: // $bb2
        var $15=HEAP[_PyExc_IndexError]; //@line 383 "_heapqmodule.c"
        _PyErr_SetString($15, __str3); //@line 383 "_heapqmodule.c"
        $0=-1; //@line 384 "_heapqmodule.c"
        __label__ = 17; break; //@line 384 "_heapqmodule.c"
      case 4: // $bb3
        var $16=$heap_addr; //@line 387 "_heapqmodule.c"
        var $17=$16+12; //@line 387 "_heapqmodule.c"
        var $18=HEAP[$17]; //@line 387 "_heapqmodule.c"
        var $19=$pos_addr; //@line 387 "_heapqmodule.c"
        var $20=$18+4*$19; //@line 387 "_heapqmodule.c"
        var $21=HEAP[$20]; //@line 387 "_heapqmodule.c"
        $newitem=$21; //@line 387 "_heapqmodule.c"
        var $22=$newitem; //@line 388 "_heapqmodule.c"
        var $23=$22; //@line 388 "_heapqmodule.c"
        var $24=HEAP[$23]; //@line 388 "_heapqmodule.c"
        var $25=($24) + 1; //@line 388 "_heapqmodule.c"
        var $26=$newitem; //@line 388 "_heapqmodule.c"
        var $27=$26; //@line 388 "_heapqmodule.c"
        HEAP[$27]=$25; //@line 388 "_heapqmodule.c"
        __label__ = 13; break; //@line 388 "_heapqmodule.c"
      case 5: // $bb4
        var $28=$pos_addr; //@line 392 "_heapqmodule.c"
        var $29=($28) - 1; //@line 392 "_heapqmodule.c"
        var $30=($29) >> 1; //@line 392 "_heapqmodule.c"
        $parentpos=$30; //@line 392 "_heapqmodule.c"
        var $31=$heap_addr; //@line 393 "_heapqmodule.c"
        var $32=$31+12; //@line 393 "_heapqmodule.c"
        var $33=HEAP[$32]; //@line 393 "_heapqmodule.c"
        var $34=$parentpos; //@line 393 "_heapqmodule.c"
        var $35=$33+4*$34; //@line 393 "_heapqmodule.c"
        var $36=HEAP[$35]; //@line 393 "_heapqmodule.c"
        $parent=$36; //@line 393 "_heapqmodule.c"
        var $37=$parent; //@line 394 "_heapqmodule.c"
        var $38=$newitem; //@line 394 "_heapqmodule.c"
        var $39=_cmp_lt($37, $38); //@line 394 "_heapqmodule.c"
        $cmp=$39; //@line 394 "_heapqmodule.c"
        var $40=$cmp; //@line 395 "_heapqmodule.c"
        var $41=($40)==-1; //@line 395 "_heapqmodule.c"
        if ($41) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 395 "_heapqmodule.c"
      case 6: // $bb5
        var $42=$newitem; //@line 396 "_heapqmodule.c"
        var $43=$42; //@line 396 "_heapqmodule.c"
        var $44=HEAP[$43]; //@line 396 "_heapqmodule.c"
        var $45=($44) - 1; //@line 396 "_heapqmodule.c"
        var $46=$newitem; //@line 396 "_heapqmodule.c"
        var $47=$46; //@line 396 "_heapqmodule.c"
        HEAP[$47]=$45; //@line 396 "_heapqmodule.c"
        var $48=$newitem; //@line 396 "_heapqmodule.c"
        var $49=$48; //@line 396 "_heapqmodule.c"
        var $50=HEAP[$49]; //@line 396 "_heapqmodule.c"
        var $51=($50)==0; //@line 396 "_heapqmodule.c"
        if ($51) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 396 "_heapqmodule.c"
      case 7: // $bb6
        var $52=$newitem; //@line 396 "_heapqmodule.c"
        var $53=$52+4; //@line 396 "_heapqmodule.c"
        var $54=HEAP[$53]; //@line 396 "_heapqmodule.c"
        var $55=$54+24; //@line 396 "_heapqmodule.c"
        var $56=HEAP[$55]; //@line 396 "_heapqmodule.c"
        var $57=$newitem; //@line 396 "_heapqmodule.c"
        FUNCTION_TABLE[$56]($57); //@line 396 "_heapqmodule.c"
        __label__ = 8; break; //@line 396 "_heapqmodule.c"
      case 8: // $bb7
        $0=-1; //@line 397 "_heapqmodule.c"
        __label__ = 17; break; //@line 397 "_heapqmodule.c"
      case 9: // $bb8
        var $58=$cmp; //@line 399 "_heapqmodule.c"
        var $59=($58)==0; //@line 399 "_heapqmodule.c"
        if ($59) { __label__ = 14; break; } else { __label__ = 10; break; } //@line 399 "_heapqmodule.c"
      case 10: // $bb9
        var $60=$parent; //@line 401 "_heapqmodule.c"
        var $61=$60; //@line 401 "_heapqmodule.c"
        var $62=HEAP[$61]; //@line 401 "_heapqmodule.c"
        var $63=($62) + 1; //@line 401 "_heapqmodule.c"
        var $64=$parent; //@line 401 "_heapqmodule.c"
        var $65=$64; //@line 401 "_heapqmodule.c"
        HEAP[$65]=$63; //@line 401 "_heapqmodule.c"
        var $66=$heap_addr; //@line 402 "_heapqmodule.c"
        var $67=$66+12; //@line 402 "_heapqmodule.c"
        var $68=HEAP[$67]; //@line 402 "_heapqmodule.c"
        var $69=$pos_addr; //@line 402 "_heapqmodule.c"
        var $70=$68+4*$69; //@line 402 "_heapqmodule.c"
        var $71=HEAP[$70]; //@line 402 "_heapqmodule.c"
        var $72=$71; //@line 402 "_heapqmodule.c"
        var $73=HEAP[$72]; //@line 402 "_heapqmodule.c"
        var $74=($73) - 1; //@line 402 "_heapqmodule.c"
        var $75=$71; //@line 402 "_heapqmodule.c"
        HEAP[$75]=$74; //@line 402 "_heapqmodule.c"
        var $76=$71; //@line 402 "_heapqmodule.c"
        var $77=HEAP[$76]; //@line 402 "_heapqmodule.c"
        var $78=($77)==0; //@line 402 "_heapqmodule.c"
        if ($78) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 402 "_heapqmodule.c"
      case 11: // $bb10
        var $79=$heap_addr; //@line 402 "_heapqmodule.c"
        var $80=$79+12; //@line 402 "_heapqmodule.c"
        var $81=HEAP[$80]; //@line 402 "_heapqmodule.c"
        var $82=$pos_addr; //@line 402 "_heapqmodule.c"
        var $83=$81+4*$82; //@line 402 "_heapqmodule.c"
        var $84=HEAP[$83]; //@line 402 "_heapqmodule.c"
        var $85=$84+4; //@line 402 "_heapqmodule.c"
        var $86=HEAP[$85]; //@line 402 "_heapqmodule.c"
        var $87=$86+24; //@line 402 "_heapqmodule.c"
        var $88=HEAP[$87]; //@line 402 "_heapqmodule.c"
        var $89=$heap_addr; //@line 402 "_heapqmodule.c"
        var $90=$89+12; //@line 402 "_heapqmodule.c"
        var $91=HEAP[$90]; //@line 402 "_heapqmodule.c"
        var $92=$pos_addr; //@line 402 "_heapqmodule.c"
        var $93=$91+4*$92; //@line 402 "_heapqmodule.c"
        var $94=HEAP[$93]; //@line 402 "_heapqmodule.c"
        FUNCTION_TABLE[$88]($94); //@line 402 "_heapqmodule.c"
        __label__ = 12; break; //@line 402 "_heapqmodule.c"
      case 12: // $bb11
        var $95=$heap_addr; //@line 403 "_heapqmodule.c"
        var $96=$95+12; //@line 403 "_heapqmodule.c"
        var $97=HEAP[$96]; //@line 403 "_heapqmodule.c"
        var $98=$pos_addr; //@line 403 "_heapqmodule.c"
        var $99=$97+4*$98; //@line 403 "_heapqmodule.c"
        var $100=$parent; //@line 403 "_heapqmodule.c"
        HEAP[$99]=$100; //@line 403 "_heapqmodule.c"
        var $101=$parentpos; //@line 404 "_heapqmodule.c"
        $pos_addr=$101; //@line 404 "_heapqmodule.c"
        __label__ = 13; break; //@line 404 "_heapqmodule.c"
      case 13: // $bb12
        var $102=$pos_addr; //@line 391 "_heapqmodule.c"
        var $103=$startpos_addr; //@line 391 "_heapqmodule.c"
        var $104=($102) > ($103); //@line 391 "_heapqmodule.c"
        if ($104) { __label__ = 5; break; } else { __label__ = 14; break; } //@line 391 "_heapqmodule.c"
      case 14: // $bb13
        var $105=$heap_addr; //@line 406 "_heapqmodule.c"
        var $106=$105+12; //@line 406 "_heapqmodule.c"
        var $107=HEAP[$106]; //@line 406 "_heapqmodule.c"
        var $108=$pos_addr; //@line 406 "_heapqmodule.c"
        var $109=$107+4*$108; //@line 406 "_heapqmodule.c"
        var $110=HEAP[$109]; //@line 406 "_heapqmodule.c"
        var $111=$110; //@line 406 "_heapqmodule.c"
        var $112=HEAP[$111]; //@line 406 "_heapqmodule.c"
        var $113=($112) - 1; //@line 406 "_heapqmodule.c"
        var $114=$110; //@line 406 "_heapqmodule.c"
        HEAP[$114]=$113; //@line 406 "_heapqmodule.c"
        var $115=$110; //@line 406 "_heapqmodule.c"
        var $116=HEAP[$115]; //@line 406 "_heapqmodule.c"
        var $117=($116)==0; //@line 406 "_heapqmodule.c"
        if ($117) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 406 "_heapqmodule.c"
      case 15: // $bb14
        var $118=$heap_addr; //@line 406 "_heapqmodule.c"
        var $119=$118+12; //@line 406 "_heapqmodule.c"
        var $120=HEAP[$119]; //@line 406 "_heapqmodule.c"
        var $121=$pos_addr; //@line 406 "_heapqmodule.c"
        var $122=$120+4*$121; //@line 406 "_heapqmodule.c"
        var $123=HEAP[$122]; //@line 406 "_heapqmodule.c"
        var $124=$123+4; //@line 406 "_heapqmodule.c"
        var $125=HEAP[$124]; //@line 406 "_heapqmodule.c"
        var $126=$125+24; //@line 406 "_heapqmodule.c"
        var $127=HEAP[$126]; //@line 406 "_heapqmodule.c"
        var $128=$heap_addr; //@line 406 "_heapqmodule.c"
        var $129=$128+12; //@line 406 "_heapqmodule.c"
        var $130=HEAP[$129]; //@line 406 "_heapqmodule.c"
        var $131=$pos_addr; //@line 406 "_heapqmodule.c"
        var $132=$130+4*$131; //@line 406 "_heapqmodule.c"
        var $133=HEAP[$132]; //@line 406 "_heapqmodule.c"
        FUNCTION_TABLE[$127]($133); //@line 406 "_heapqmodule.c"
        __label__ = 16; break; //@line 406 "_heapqmodule.c"
      case 16: // $bb15
        var $134=$heap_addr; //@line 407 "_heapqmodule.c"
        var $135=$134+12; //@line 407 "_heapqmodule.c"
        var $136=HEAP[$135]; //@line 407 "_heapqmodule.c"
        var $137=$pos_addr; //@line 407 "_heapqmodule.c"
        var $138=$136+4*$137; //@line 407 "_heapqmodule.c"
        var $139=$newitem; //@line 407 "_heapqmodule.c"
        HEAP[$138]=$139; //@line 407 "_heapqmodule.c"
        $0=0; //@line 408 "_heapqmodule.c"
        __label__ = 17; break; //@line 408 "_heapqmodule.c"
      case 17: // $bb16
        var $140=$0; //@line 384 "_heapqmodule.c"
        $retval=$140; //@line 384 "_heapqmodule.c"
        var $retval17=$retval; //@line 384 "_heapqmodule.c"
        ;
        return $retval17; //@line 384 "_heapqmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __siftupmax($heap, $pos) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $heap_addr;
        var $pos_addr;
        var $retval;
        var $0;
        var $startpos;
        var $endpos;
        var $childpos;
        var $rightpos;
        var $cmp;
        var $newitem;
        var $tmp;
        $heap_addr=$heap;
        $pos_addr=$pos;
        var $1=$heap_addr; //@line 418 "_heapqmodule.c"
        var $2=$1; //@line 418 "_heapqmodule.c"
        var $3=$2+4; //@line 418 "_heapqmodule.c"
        var $4=HEAP[$3]; //@line 418 "_heapqmodule.c"
        var $5=$4+84; //@line 418 "_heapqmodule.c"
        var $6=HEAP[$5]; //@line 418 "_heapqmodule.c"
        var $7=($6) & 33554432; //@line 418 "_heapqmodule.c"
        var $8=($7)==0; //@line 418 "_heapqmodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 418 "_heapqmodule.c"
      case 1: // $bb
        ___assert_fail(__str1, __str2, 418, ___PRETTY_FUNCTION___8914); //@line 418 "_heapqmodule.c"
        throw "Reached an unreachable!" //@line 418 "_heapqmodule.c"
      case 2: // $bb1
        var $9=$heap_addr; //@line 419 "_heapqmodule.c"
        var $10=$9; //@line 419 "_heapqmodule.c"
        var $11=$10+8; //@line 419 "_heapqmodule.c"
        var $12=HEAP[$11]; //@line 419 "_heapqmodule.c"
        $endpos=$12; //@line 419 "_heapqmodule.c"
        var $13=$pos_addr; //@line 420 "_heapqmodule.c"
        $startpos=$13; //@line 420 "_heapqmodule.c"
        var $14=$pos_addr; //@line 421 "_heapqmodule.c"
        var $15=$endpos; //@line 421 "_heapqmodule.c"
        var $16=($14) >= ($15); //@line 421 "_heapqmodule.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 421 "_heapqmodule.c"
      case 3: // $bb2
        var $17=HEAP[_PyExc_IndexError]; //@line 422 "_heapqmodule.c"
        _PyErr_SetString($17, __str3); //@line 422 "_heapqmodule.c"
        $0=-1; //@line 423 "_heapqmodule.c"
        __label__ = 19; break; //@line 423 "_heapqmodule.c"
      case 4: // $bb3
        var $18=$heap_addr; //@line 425 "_heapqmodule.c"
        var $19=$18+12; //@line 425 "_heapqmodule.c"
        var $20=HEAP[$19]; //@line 425 "_heapqmodule.c"
        var $21=$pos_addr; //@line 425 "_heapqmodule.c"
        var $22=$20+4*$21; //@line 425 "_heapqmodule.c"
        var $23=HEAP[$22]; //@line 425 "_heapqmodule.c"
        $newitem=$23; //@line 425 "_heapqmodule.c"
        var $24=$newitem; //@line 426 "_heapqmodule.c"
        var $25=$24; //@line 426 "_heapqmodule.c"
        var $26=HEAP[$25]; //@line 426 "_heapqmodule.c"
        var $27=($26) + 1; //@line 426 "_heapqmodule.c"
        var $28=$newitem; //@line 426 "_heapqmodule.c"
        var $29=$28; //@line 426 "_heapqmodule.c"
        HEAP[$29]=$27; //@line 426 "_heapqmodule.c"
        var $30=$pos_addr; //@line 429 "_heapqmodule.c"
        var $31=($30) * 2; //@line 429 "_heapqmodule.c"
        var $32=($31) + 1; //@line 429 "_heapqmodule.c"
        $childpos=$32; //@line 429 "_heapqmodule.c"
        __label__ = 15; break; //@line 429 "_heapqmodule.c"
      case 5: // $bb4
        var $33=$childpos; //@line 432 "_heapqmodule.c"
        var $34=($33) + 1; //@line 432 "_heapqmodule.c"
        $rightpos=$34; //@line 432 "_heapqmodule.c"
        var $35=$rightpos; //@line 433 "_heapqmodule.c"
        var $36=$endpos; //@line 433 "_heapqmodule.c"
        var $37=($35) < ($36); //@line 433 "_heapqmodule.c"
        if ($37) { __label__ = 6; break; } else { __label__ = 12; break; } //@line 433 "_heapqmodule.c"
      case 6: // $bb5
        var $38=$heap_addr; //@line 434 "_heapqmodule.c"
        var $39=$38+12; //@line 434 "_heapqmodule.c"
        var $40=HEAP[$39]; //@line 434 "_heapqmodule.c"
        var $41=$childpos; //@line 434 "_heapqmodule.c"
        var $42=$40+4*$41; //@line 434 "_heapqmodule.c"
        var $43=HEAP[$42]; //@line 434 "_heapqmodule.c"
        var $44=$heap_addr; //@line 434 "_heapqmodule.c"
        var $45=$44+12; //@line 434 "_heapqmodule.c"
        var $46=HEAP[$45]; //@line 434 "_heapqmodule.c"
        var $47=$rightpos; //@line 434 "_heapqmodule.c"
        var $48=$46+4*$47; //@line 434 "_heapqmodule.c"
        var $49=HEAP[$48]; //@line 434 "_heapqmodule.c"
        var $50=_cmp_lt($49, $43); //@line 434 "_heapqmodule.c"
        $cmp=$50; //@line 434 "_heapqmodule.c"
        var $51=$cmp; //@line 437 "_heapqmodule.c"
        var $52=($51)==-1; //@line 437 "_heapqmodule.c"
        if ($52) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 437 "_heapqmodule.c"
      case 7: // $bb6
        var $53=$newitem; //@line 438 "_heapqmodule.c"
        var $54=$53; //@line 438 "_heapqmodule.c"
        var $55=HEAP[$54]; //@line 438 "_heapqmodule.c"
        var $56=($55) - 1; //@line 438 "_heapqmodule.c"
        var $57=$newitem; //@line 438 "_heapqmodule.c"
        var $58=$57; //@line 438 "_heapqmodule.c"
        HEAP[$58]=$56; //@line 438 "_heapqmodule.c"
        var $59=$newitem; //@line 438 "_heapqmodule.c"
        var $60=$59; //@line 438 "_heapqmodule.c"
        var $61=HEAP[$60]; //@line 438 "_heapqmodule.c"
        var $62=($61)==0; //@line 438 "_heapqmodule.c"
        if ($62) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 438 "_heapqmodule.c"
      case 8: // $bb7
        var $63=$newitem; //@line 438 "_heapqmodule.c"
        var $64=$63+4; //@line 438 "_heapqmodule.c"
        var $65=HEAP[$64]; //@line 438 "_heapqmodule.c"
        var $66=$65+24; //@line 438 "_heapqmodule.c"
        var $67=HEAP[$66]; //@line 438 "_heapqmodule.c"
        var $68=$newitem; //@line 438 "_heapqmodule.c"
        FUNCTION_TABLE[$67]($68); //@line 438 "_heapqmodule.c"
        __label__ = 9; break; //@line 438 "_heapqmodule.c"
      case 9: // $bb8
        $0=-1; //@line 439 "_heapqmodule.c"
        __label__ = 19; break; //@line 439 "_heapqmodule.c"
      case 10: // $bb9
        var $69=$cmp; //@line 441 "_heapqmodule.c"
        var $70=($69)==0; //@line 441 "_heapqmodule.c"
        if ($70) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 441 "_heapqmodule.c"
      case 11: // $bb10
        var $71=$rightpos; //@line 442 "_heapqmodule.c"
        $childpos=$71; //@line 442 "_heapqmodule.c"
        __label__ = 12; break; //@line 442 "_heapqmodule.c"
      case 12: // $bb11
        var $72=$heap_addr; //@line 445 "_heapqmodule.c"
        var $73=$72+12; //@line 445 "_heapqmodule.c"
        var $74=HEAP[$73]; //@line 445 "_heapqmodule.c"
        var $75=$childpos; //@line 445 "_heapqmodule.c"
        var $76=$74+4*$75; //@line 445 "_heapqmodule.c"
        var $77=HEAP[$76]; //@line 445 "_heapqmodule.c"
        $tmp=$77; //@line 445 "_heapqmodule.c"
        var $78=$tmp; //@line 446 "_heapqmodule.c"
        var $79=$78; //@line 446 "_heapqmodule.c"
        var $80=HEAP[$79]; //@line 446 "_heapqmodule.c"
        var $81=($80) + 1; //@line 446 "_heapqmodule.c"
        var $82=$tmp; //@line 446 "_heapqmodule.c"
        var $83=$82; //@line 446 "_heapqmodule.c"
        HEAP[$83]=$81; //@line 446 "_heapqmodule.c"
        var $84=$heap_addr; //@line 447 "_heapqmodule.c"
        var $85=$84+12; //@line 447 "_heapqmodule.c"
        var $86=HEAP[$85]; //@line 447 "_heapqmodule.c"
        var $87=$pos_addr; //@line 447 "_heapqmodule.c"
        var $88=$86+4*$87; //@line 447 "_heapqmodule.c"
        var $89=HEAP[$88]; //@line 447 "_heapqmodule.c"
        var $90=$89; //@line 447 "_heapqmodule.c"
        var $91=HEAP[$90]; //@line 447 "_heapqmodule.c"
        var $92=($91) - 1; //@line 447 "_heapqmodule.c"
        var $93=$89; //@line 447 "_heapqmodule.c"
        HEAP[$93]=$92; //@line 447 "_heapqmodule.c"
        var $94=$89; //@line 447 "_heapqmodule.c"
        var $95=HEAP[$94]; //@line 447 "_heapqmodule.c"
        var $96=($95)==0; //@line 447 "_heapqmodule.c"
        if ($96) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 447 "_heapqmodule.c"
      case 13: // $bb12
        var $97=$heap_addr; //@line 447 "_heapqmodule.c"
        var $98=$97+12; //@line 447 "_heapqmodule.c"
        var $99=HEAP[$98]; //@line 447 "_heapqmodule.c"
        var $100=$pos_addr; //@line 447 "_heapqmodule.c"
        var $101=$99+4*$100; //@line 447 "_heapqmodule.c"
        var $102=HEAP[$101]; //@line 447 "_heapqmodule.c"
        var $103=$102+4; //@line 447 "_heapqmodule.c"
        var $104=HEAP[$103]; //@line 447 "_heapqmodule.c"
        var $105=$104+24; //@line 447 "_heapqmodule.c"
        var $106=HEAP[$105]; //@line 447 "_heapqmodule.c"
        var $107=$heap_addr; //@line 447 "_heapqmodule.c"
        var $108=$107+12; //@line 447 "_heapqmodule.c"
        var $109=HEAP[$108]; //@line 447 "_heapqmodule.c"
        var $110=$pos_addr; //@line 447 "_heapqmodule.c"
        var $111=$109+4*$110; //@line 447 "_heapqmodule.c"
        var $112=HEAP[$111]; //@line 447 "_heapqmodule.c"
        FUNCTION_TABLE[$106]($112); //@line 447 "_heapqmodule.c"
        __label__ = 14; break; //@line 447 "_heapqmodule.c"
      case 14: // $bb13
        var $113=$heap_addr; //@line 448 "_heapqmodule.c"
        var $114=$113+12; //@line 448 "_heapqmodule.c"
        var $115=HEAP[$114]; //@line 448 "_heapqmodule.c"
        var $116=$pos_addr; //@line 448 "_heapqmodule.c"
        var $117=$115+4*$116; //@line 448 "_heapqmodule.c"
        var $118=$tmp; //@line 448 "_heapqmodule.c"
        HEAP[$117]=$118; //@line 448 "_heapqmodule.c"
        var $119=$childpos; //@line 449 "_heapqmodule.c"
        $pos_addr=$119; //@line 449 "_heapqmodule.c"
        var $120=$pos_addr; //@line 450 "_heapqmodule.c"
        var $121=($120) * 2; //@line 450 "_heapqmodule.c"
        var $122=($121) + 1; //@line 450 "_heapqmodule.c"
        $childpos=$122; //@line 450 "_heapqmodule.c"
        __label__ = 15; break; //@line 450 "_heapqmodule.c"
      case 15: // $bb14
        var $123=$childpos; //@line 430 "_heapqmodule.c"
        var $124=$endpos; //@line 430 "_heapqmodule.c"
        var $125=($123) < ($124); //@line 430 "_heapqmodule.c"
        if ($125) { __label__ = 5; break; } else { __label__ = 16; break; } //@line 430 "_heapqmodule.c"
      case 16: // $bb15
        var $126=$heap_addr; //@line 455 "_heapqmodule.c"
        var $127=$126+12; //@line 455 "_heapqmodule.c"
        var $128=HEAP[$127]; //@line 455 "_heapqmodule.c"
        var $129=$pos_addr; //@line 455 "_heapqmodule.c"
        var $130=$128+4*$129; //@line 455 "_heapqmodule.c"
        var $131=HEAP[$130]; //@line 455 "_heapqmodule.c"
        var $132=$131; //@line 455 "_heapqmodule.c"
        var $133=HEAP[$132]; //@line 455 "_heapqmodule.c"
        var $134=($133) - 1; //@line 455 "_heapqmodule.c"
        var $135=$131; //@line 455 "_heapqmodule.c"
        HEAP[$135]=$134; //@line 455 "_heapqmodule.c"
        var $136=$131; //@line 455 "_heapqmodule.c"
        var $137=HEAP[$136]; //@line 455 "_heapqmodule.c"
        var $138=($137)==0; //@line 455 "_heapqmodule.c"
        if ($138) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 455 "_heapqmodule.c"
      case 17: // $bb16
        var $139=$heap_addr; //@line 455 "_heapqmodule.c"
        var $140=$139+12; //@line 455 "_heapqmodule.c"
        var $141=HEAP[$140]; //@line 455 "_heapqmodule.c"
        var $142=$pos_addr; //@line 455 "_heapqmodule.c"
        var $143=$141+4*$142; //@line 455 "_heapqmodule.c"
        var $144=HEAP[$143]; //@line 455 "_heapqmodule.c"
        var $145=$144+4; //@line 455 "_heapqmodule.c"
        var $146=HEAP[$145]; //@line 455 "_heapqmodule.c"
        var $147=$146+24; //@line 455 "_heapqmodule.c"
        var $148=HEAP[$147]; //@line 455 "_heapqmodule.c"
        var $149=$heap_addr; //@line 455 "_heapqmodule.c"
        var $150=$149+12; //@line 455 "_heapqmodule.c"
        var $151=HEAP[$150]; //@line 455 "_heapqmodule.c"
        var $152=$pos_addr; //@line 455 "_heapqmodule.c"
        var $153=$151+4*$152; //@line 455 "_heapqmodule.c"
        var $154=HEAP[$153]; //@line 455 "_heapqmodule.c"
        FUNCTION_TABLE[$148]($154); //@line 455 "_heapqmodule.c"
        __label__ = 18; break; //@line 455 "_heapqmodule.c"
      case 18: // $bb17
        var $155=$heap_addr; //@line 456 "_heapqmodule.c"
        var $156=$155+12; //@line 456 "_heapqmodule.c"
        var $157=HEAP[$156]; //@line 456 "_heapqmodule.c"
        var $158=$pos_addr; //@line 456 "_heapqmodule.c"
        var $159=$157+4*$158; //@line 456 "_heapqmodule.c"
        var $160=$newitem; //@line 456 "_heapqmodule.c"
        HEAP[$159]=$160; //@line 456 "_heapqmodule.c"
        var $161=$heap_addr; //@line 457 "_heapqmodule.c"
        var $162=$startpos; //@line 457 "_heapqmodule.c"
        var $163=$pos_addr; //@line 457 "_heapqmodule.c"
        var $164=__siftdownmax($161, $162, $163); //@line 457 "_heapqmodule.c"
        $0=$164; //@line 457 "_heapqmodule.c"
        __label__ = 19; break; //@line 457 "_heapqmodule.c"
      case 19: // $bb18
        var $165=$0; //@line 423 "_heapqmodule.c"
        $retval=$165; //@line 423 "_heapqmodule.c"
        var $retval19=$retval; //@line 423 "_heapqmodule.c"
        ;
        return $retval19; //@line 423 "_heapqmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nsmallest($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $heap;
        var $elem;
        var $iterable=__stackBase__;
        var $los;
        var $it;
        var $oldelem;
        var $i;
        var $n=__stackBase__+4;
        var $cmp;
        $self_addr=$self;
        $args_addr=$args;
        $heap=0; //@line 463 "_heapqmodule.c"
        var $1=$args_addr; //@line 467 "_heapqmodule.c"
        var $2=_PyArg_ParseTuple($1, __str9, allocate([$n,0,0,0,$iterable,0,0,0], ["i32*",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 467 "_heapqmodule.c"
        var $3=($2)==0; //@line 467 "_heapqmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 467 "_heapqmodule.c"
      case 1: // $bb
        $0=0; //@line 468 "_heapqmodule.c"
        __label__ = 43; break; //@line 468 "_heapqmodule.c"
      case 2: // $bb1
        var $4=HEAP[$iterable]; //@line 470 "_heapqmodule.c"
        var $5=_PyObject_GetIter($4); //@line 470 "_heapqmodule.c"
        $it=$5; //@line 470 "_heapqmodule.c"
        var $6=$it; //@line 471 "_heapqmodule.c"
        var $7=($6)==0; //@line 471 "_heapqmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 471 "_heapqmodule.c"
      case 3: // $bb2
        $0=0; //@line 472 "_heapqmodule.c"
        __label__ = 43; break; //@line 472 "_heapqmodule.c"
      case 4: // $bb3
        var $8=_PyList_New(0); //@line 474 "_heapqmodule.c"
        $heap=$8; //@line 474 "_heapqmodule.c"
        var $9=$heap; //@line 475 "_heapqmodule.c"
        var $10=($9)==0; //@line 475 "_heapqmodule.c"
        if ($10) { __label__ = 37; break; } else { __label__ = 5; break; } //@line 475 "_heapqmodule.c"
      case 5: // $bb4
        $i=0; //@line 478 "_heapqmodule.c"
        __label__ = 14; break; //@line 478 "_heapqmodule.c"
      case 6: // $bb5
        var $11=$it; //@line 479 "_heapqmodule.c"
        var $12=_PyIter_Next($11); //@line 479 "_heapqmodule.c"
        $elem=$12; //@line 479 "_heapqmodule.c"
        var $13=$elem; //@line 480 "_heapqmodule.c"
        var $14=($13)==0; //@line 480 "_heapqmodule.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 480 "_heapqmodule.c"
      case 7: // $bb6
        var $15=_PyErr_Occurred(); //@line 481 "_heapqmodule.c"
        var $16=($15)!=0; //@line 481 "_heapqmodule.c"
        if ($16) { __label__ = 37; break; } else { __label__ = 33; break; } //@line 481 "_heapqmodule.c"
      case 8: // $bb7
        var $17=$heap; //@line 486 "_heapqmodule.c"
        var $18=$elem; //@line 486 "_heapqmodule.c"
        var $19=_PyList_Append($17, $18); //@line 486 "_heapqmodule.c"
        var $20=($19)==-1; //@line 486 "_heapqmodule.c"
        var $21=$elem; //@line 487 "_heapqmodule.c"
        var $22=$21; //@line 487 "_heapqmodule.c"
        var $23=HEAP[$22]; //@line 487 "_heapqmodule.c"
        var $24=($23) - 1; //@line 487 "_heapqmodule.c"
        var $25=$elem; //@line 487 "_heapqmodule.c"
        var $26=$25; //@line 487 "_heapqmodule.c"
        HEAP[$26]=$24; //@line 487 "_heapqmodule.c"
        var $27=$elem; //@line 487 "_heapqmodule.c"
        var $28=$27; //@line 487 "_heapqmodule.c"
        var $29=HEAP[$28]; //@line 487 "_heapqmodule.c"
        var $30=($29)==0; //@line 487 "_heapqmodule.c"
        if ($20) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 486 "_heapqmodule.c"
      case 9: // $bb8
        if ($30) { __label__ = 10; break; } else { __label__ = 37; break; } //@line 487 "_heapqmodule.c"
      case 10: // $bb9
        var $31=$elem; //@line 487 "_heapqmodule.c"
        var $32=$31+4; //@line 487 "_heapqmodule.c"
        var $33=HEAP[$32]; //@line 487 "_heapqmodule.c"
        var $34=$33+24; //@line 487 "_heapqmodule.c"
        var $35=HEAP[$34]; //@line 487 "_heapqmodule.c"
        var $36=$elem; //@line 487 "_heapqmodule.c"
        FUNCTION_TABLE[$35]($36); //@line 487 "_heapqmodule.c"
        __label__ = 37; break; //@line 487 "_heapqmodule.c"
      case 11: // $bb11
        if ($30) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 490 "_heapqmodule.c"
      case 12: // $bb12
        var $37=$elem; //@line 490 "_heapqmodule.c"
        var $38=$37+4; //@line 490 "_heapqmodule.c"
        var $39=HEAP[$38]; //@line 490 "_heapqmodule.c"
        var $40=$39+24; //@line 490 "_heapqmodule.c"
        var $41=HEAP[$40]; //@line 490 "_heapqmodule.c"
        var $42=$elem; //@line 490 "_heapqmodule.c"
        FUNCTION_TABLE[$41]($42); //@line 490 "_heapqmodule.c"
        __label__ = 13; break; //@line 490 "_heapqmodule.c"
      case 13: // $bb13
        var $43=$i; //@line 478 "_heapqmodule.c"
        var $44=($43) + 1; //@line 478 "_heapqmodule.c"
        $i=$44; //@line 478 "_heapqmodule.c"
        __label__ = 14; break; //@line 478 "_heapqmodule.c"
      case 14: // $bb14
        var $45=HEAP[$n]; //@line 478 "_heapqmodule.c"
        var $46=$i; //@line 478 "_heapqmodule.c"
        var $47=($46) < ($45); //@line 478 "_heapqmodule.c"
        if ($47) { __label__ = 6; break; } else { __label__ = 15; break; } //@line 478 "_heapqmodule.c"
      case 15: // $bb15
        var $48=$heap; //@line 492 "_heapqmodule.c"
        var $49=$48; //@line 492 "_heapqmodule.c"
        var $50=$49+8; //@line 492 "_heapqmodule.c"
        var $51=HEAP[$50]; //@line 492 "_heapqmodule.c"
        HEAP[$n]=$51; //@line 492 "_heapqmodule.c"
        var $52=HEAP[$n]; //@line 493 "_heapqmodule.c"
        var $53=($52)==0; //@line 493 "_heapqmodule.c"
        if ($53) { __label__ = 33; break; } else { __label__ = 16; break; } //@line 493 "_heapqmodule.c"
      case 16: // $bb16
        var $54=HEAP[$n]; //@line 496 "_heapqmodule.c"
        var $55=((($54)/2)|0); //@line 496 "_heapqmodule.c"
        var $56=($55) - 1; //@line 496 "_heapqmodule.c"
        $i=$56; //@line 496 "_heapqmodule.c"
        __lastLabel__ = 16; __label__ = 19; break; //@line 496 "_heapqmodule.c"
      case 17: // $bb17
        var $57=$i; //@line 497 "_heapqmodule.c"
        var $58=__siftupmax($65, $57); //@line 497 "_heapqmodule.c"
        var $59=($58)==-1; //@line 497 "_heapqmodule.c"
        if ($59) { __label__ = 37; break; } else { __label__ = 18; break; } //@line 497 "_heapqmodule.c"
      case 18: // $bb18
        var $60=$i; //@line 496 "_heapqmodule.c"
        var $61=($60) - 1; //@line 496 "_heapqmodule.c"
        $i=$61; //@line 496 "_heapqmodule.c"
        __lastLabel__ = 18; __label__ = 19; break; //@line 496 "_heapqmodule.c"
      case 19: // $bb19
        var $62=__lastLabel__ == 18 ? $61 : ($56);
        var $63=($62) >= 0; //@line 496 "_heapqmodule.c"
        var $64=$heap; //@line 497 "_heapqmodule.c"
        var $65=$64; //@line 497 "_heapqmodule.c"
        if ($63) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 496 "_heapqmodule.c"
      case 20: // $bb20
        var $66=$65+12; //@line 500 "_heapqmodule.c"
        var $67=HEAP[$66]; //@line 500 "_heapqmodule.c"
        var $68=$67; //@line 500 "_heapqmodule.c"
        var $69=HEAP[$68]; //@line 500 "_heapqmodule.c"
        $los=$69; //@line 500 "_heapqmodule.c"
        __label__ = 21; break; //@line 500 "_heapqmodule.c"
      case 21: // $bb21
        var $70=$it; //@line 502 "_heapqmodule.c"
        var $71=_PyIter_Next($70); //@line 502 "_heapqmodule.c"
        $elem=$71; //@line 502 "_heapqmodule.c"
        var $72=($71)==0; //@line 503 "_heapqmodule.c"
        if ($72) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 503 "_heapqmodule.c"
      case 22: // $bb22
        var $73=_PyErr_Occurred(); //@line 504 "_heapqmodule.c"
        var $74=($73)!=0; //@line 504 "_heapqmodule.c"
        if ($74) { __label__ = 37; break; } else { __label__ = 33; break; } //@line 504 "_heapqmodule.c"
      case 23: // $bb23
        var $75=$elem; //@line 509 "_heapqmodule.c"
        var $76=$los; //@line 509 "_heapqmodule.c"
        var $77=_cmp_lt($75, $76); //@line 509 "_heapqmodule.c"
        $cmp=$77; //@line 509 "_heapqmodule.c"
        var $78=$cmp; //@line 510 "_heapqmodule.c"
        var $79=($78)==-1; //@line 510 "_heapqmodule.c"
        if ($79) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 510 "_heapqmodule.c"
      case 24: // $bb24
        var $80=$elem; //@line 511 "_heapqmodule.c"
        var $81=$80; //@line 511 "_heapqmodule.c"
        var $82=HEAP[$81]; //@line 511 "_heapqmodule.c"
        var $83=($82) - 1; //@line 511 "_heapqmodule.c"
        var $84=$elem; //@line 511 "_heapqmodule.c"
        var $85=$84; //@line 511 "_heapqmodule.c"
        HEAP[$85]=$83; //@line 511 "_heapqmodule.c"
        var $86=$elem; //@line 511 "_heapqmodule.c"
        var $87=$86; //@line 511 "_heapqmodule.c"
        var $88=HEAP[$87]; //@line 511 "_heapqmodule.c"
        var $89=($88)==0; //@line 511 "_heapqmodule.c"
        if ($89) { __label__ = 25; break; } else { __label__ = 37; break; } //@line 511 "_heapqmodule.c"
      case 25: // $bb25
        var $90=$elem; //@line 511 "_heapqmodule.c"
        var $91=$90+4; //@line 511 "_heapqmodule.c"
        var $92=HEAP[$91]; //@line 511 "_heapqmodule.c"
        var $93=$92+24; //@line 511 "_heapqmodule.c"
        var $94=HEAP[$93]; //@line 511 "_heapqmodule.c"
        var $95=$elem; //@line 511 "_heapqmodule.c"
        FUNCTION_TABLE[$94]($95); //@line 511 "_heapqmodule.c"
        __label__ = 37; break; //@line 511 "_heapqmodule.c"
      case 26: // $bb27
        var $96=$cmp; //@line 514 "_heapqmodule.c"
        var $97=($96)==0; //@line 514 "_heapqmodule.c"
        if ($97) { __label__ = 27; break; } else { __label__ = 29; break; } //@line 514 "_heapqmodule.c"
      case 27: // $bb28
        var $98=$elem; //@line 515 "_heapqmodule.c"
        var $99=$98; //@line 515 "_heapqmodule.c"
        var $100=HEAP[$99]; //@line 515 "_heapqmodule.c"
        var $101=($100) - 1; //@line 515 "_heapqmodule.c"
        var $102=$elem; //@line 515 "_heapqmodule.c"
        var $103=$102; //@line 515 "_heapqmodule.c"
        HEAP[$103]=$101; //@line 515 "_heapqmodule.c"
        var $104=$elem; //@line 515 "_heapqmodule.c"
        var $105=$104; //@line 515 "_heapqmodule.c"
        var $106=HEAP[$105]; //@line 515 "_heapqmodule.c"
        var $107=($106)==0; //@line 515 "_heapqmodule.c"
        if ($107) { __label__ = 28; break; } else { __label__ = 21; break; } //@line 515 "_heapqmodule.c"
      case 28: // $bb29
        var $108=$elem; //@line 515 "_heapqmodule.c"
        var $109=$108+4; //@line 515 "_heapqmodule.c"
        var $110=HEAP[$109]; //@line 515 "_heapqmodule.c"
        var $111=$110+24; //@line 515 "_heapqmodule.c"
        var $112=HEAP[$111]; //@line 515 "_heapqmodule.c"
        var $113=$elem; //@line 515 "_heapqmodule.c"
        FUNCTION_TABLE[$112]($113); //@line 515 "_heapqmodule.c"
        __label__ = 21; break; //@line 515 "_heapqmodule.c"
      case 29: // $bb31
        var $114=$heap; //@line 519 "_heapqmodule.c"
        var $115=$114; //@line 519 "_heapqmodule.c"
        var $116=$115+12; //@line 519 "_heapqmodule.c"
        var $117=HEAP[$116]; //@line 519 "_heapqmodule.c"
        var $118=$117; //@line 519 "_heapqmodule.c"
        var $119=HEAP[$118]; //@line 519 "_heapqmodule.c"
        $oldelem=$119; //@line 519 "_heapqmodule.c"
        var $120=$heap; //@line 520 "_heapqmodule.c"
        var $121=$120; //@line 520 "_heapqmodule.c"
        var $122=$121+12; //@line 520 "_heapqmodule.c"
        var $123=HEAP[$122]; //@line 520 "_heapqmodule.c"
        var $124=$123; //@line 520 "_heapqmodule.c"
        var $125=$elem; //@line 520 "_heapqmodule.c"
        HEAP[$124]=$125; //@line 520 "_heapqmodule.c"
        var $126=$oldelem; //@line 521 "_heapqmodule.c"
        var $127=$126; //@line 521 "_heapqmodule.c"
        var $128=HEAP[$127]; //@line 521 "_heapqmodule.c"
        var $129=($128) - 1; //@line 521 "_heapqmodule.c"
        var $130=$oldelem; //@line 521 "_heapqmodule.c"
        var $131=$130; //@line 521 "_heapqmodule.c"
        HEAP[$131]=$129; //@line 521 "_heapqmodule.c"
        var $132=$oldelem; //@line 521 "_heapqmodule.c"
        var $133=$132; //@line 521 "_heapqmodule.c"
        var $134=HEAP[$133]; //@line 521 "_heapqmodule.c"
        var $135=($134)==0; //@line 521 "_heapqmodule.c"
        if ($135) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 521 "_heapqmodule.c"
      case 30: // $bb32
        var $136=$oldelem; //@line 521 "_heapqmodule.c"
        var $137=$136+4; //@line 521 "_heapqmodule.c"
        var $138=HEAP[$137]; //@line 521 "_heapqmodule.c"
        var $139=$138+24; //@line 521 "_heapqmodule.c"
        var $140=HEAP[$139]; //@line 521 "_heapqmodule.c"
        var $141=$oldelem; //@line 521 "_heapqmodule.c"
        FUNCTION_TABLE[$140]($141); //@line 521 "_heapqmodule.c"
        __label__ = 31; break; //@line 521 "_heapqmodule.c"
      case 31: // $bb33
        var $142=$heap; //@line 522 "_heapqmodule.c"
        var $143=$142; //@line 522 "_heapqmodule.c"
        var $144=__siftupmax($143, 0); //@line 522 "_heapqmodule.c"
        var $145=($144)==-1; //@line 522 "_heapqmodule.c"
        if ($145) { __label__ = 37; break; } else { __label__ = 32; break; } //@line 522 "_heapqmodule.c"
      case 32: // $bb34
        var $146=$heap; //@line 524 "_heapqmodule.c"
        var $147=$146; //@line 524 "_heapqmodule.c"
        var $148=$147+12; //@line 524 "_heapqmodule.c"
        var $149=HEAP[$148]; //@line 524 "_heapqmodule.c"
        var $150=$149; //@line 524 "_heapqmodule.c"
        var $151=HEAP[$150]; //@line 524 "_heapqmodule.c"
        $los=$151; //@line 524 "_heapqmodule.c"
        __label__ = 21; break; //@line 524 "_heapqmodule.c"
      case 33: // $sortit
        var $152=$heap; //@line 528 "_heapqmodule.c"
        var $153=_PyList_Sort($152); //@line 528 "_heapqmodule.c"
        var $154=($153)==-1; //@line 528 "_heapqmodule.c"
        if ($154) { __label__ = 37; break; } else { __label__ = 34; break; } //@line 528 "_heapqmodule.c"
      case 34: // $bb36
        var $155=$it; //@line 530 "_heapqmodule.c"
        var $156=$155; //@line 530 "_heapqmodule.c"
        var $157=HEAP[$156]; //@line 530 "_heapqmodule.c"
        var $158=($157) - 1; //@line 530 "_heapqmodule.c"
        var $159=$it; //@line 530 "_heapqmodule.c"
        var $160=$159; //@line 530 "_heapqmodule.c"
        HEAP[$160]=$158; //@line 530 "_heapqmodule.c"
        var $161=$it; //@line 530 "_heapqmodule.c"
        var $162=$161; //@line 530 "_heapqmodule.c"
        var $163=HEAP[$162]; //@line 530 "_heapqmodule.c"
        var $164=($163)==0; //@line 530 "_heapqmodule.c"
        if ($164) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 530 "_heapqmodule.c"
      case 35: // $bb37
        var $165=$it; //@line 530 "_heapqmodule.c"
        var $166=$165+4; //@line 530 "_heapqmodule.c"
        var $167=HEAP[$166]; //@line 530 "_heapqmodule.c"
        var $168=$167+24; //@line 530 "_heapqmodule.c"
        var $169=HEAP[$168]; //@line 530 "_heapqmodule.c"
        var $170=$it; //@line 530 "_heapqmodule.c"
        FUNCTION_TABLE[$169]($170); //@line 530 "_heapqmodule.c"
        __label__ = 36; break; //@line 530 "_heapqmodule.c"
      case 36: // $bb38
        var $171=$heap; //@line 531 "_heapqmodule.c"
        $0=$171; //@line 531 "_heapqmodule.c"
        __label__ = 43; break; //@line 531 "_heapqmodule.c"
      case 37: // $fail
        var $172=$it; //@line 534 "_heapqmodule.c"
        var $173=$172; //@line 534 "_heapqmodule.c"
        var $174=HEAP[$173]; //@line 534 "_heapqmodule.c"
        var $175=($174) - 1; //@line 534 "_heapqmodule.c"
        var $176=$it; //@line 534 "_heapqmodule.c"
        var $177=$176; //@line 534 "_heapqmodule.c"
        HEAP[$177]=$175; //@line 534 "_heapqmodule.c"
        var $178=$it; //@line 534 "_heapqmodule.c"
        var $179=$178; //@line 534 "_heapqmodule.c"
        var $180=HEAP[$179]; //@line 534 "_heapqmodule.c"
        var $181=($180)==0; //@line 534 "_heapqmodule.c"
        if ($181) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 534 "_heapqmodule.c"
      case 38: // $bb39
        var $182=$it; //@line 534 "_heapqmodule.c"
        var $183=$182+4; //@line 534 "_heapqmodule.c"
        var $184=HEAP[$183]; //@line 534 "_heapqmodule.c"
        var $185=$184+24; //@line 534 "_heapqmodule.c"
        var $186=HEAP[$185]; //@line 534 "_heapqmodule.c"
        var $187=$it; //@line 534 "_heapqmodule.c"
        FUNCTION_TABLE[$186]($187); //@line 534 "_heapqmodule.c"
        __label__ = 39; break; //@line 534 "_heapqmodule.c"
      case 39: // $bb40
        var $188=$heap; //@line 535 "_heapqmodule.c"
        var $189=($188)!=0; //@line 535 "_heapqmodule.c"
        if ($189) { __label__ = 40; break; } else { __label__ = 42; break; } //@line 535 "_heapqmodule.c"
      case 40: // $bb41
        var $190=$heap; //@line 535 "_heapqmodule.c"
        var $191=$190; //@line 535 "_heapqmodule.c"
        var $192=HEAP[$191]; //@line 535 "_heapqmodule.c"
        var $193=($192) - 1; //@line 535 "_heapqmodule.c"
        var $194=$heap; //@line 535 "_heapqmodule.c"
        var $195=$194; //@line 535 "_heapqmodule.c"
        HEAP[$195]=$193; //@line 535 "_heapqmodule.c"
        var $196=$heap; //@line 535 "_heapqmodule.c"
        var $197=$196; //@line 535 "_heapqmodule.c"
        var $198=HEAP[$197]; //@line 535 "_heapqmodule.c"
        var $199=($198)==0; //@line 535 "_heapqmodule.c"
        if ($199) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 535 "_heapqmodule.c"
      case 41: // $bb42
        var $200=$heap; //@line 535 "_heapqmodule.c"
        var $201=$200+4; //@line 535 "_heapqmodule.c"
        var $202=HEAP[$201]; //@line 535 "_heapqmodule.c"
        var $203=$202+24; //@line 535 "_heapqmodule.c"
        var $204=HEAP[$203]; //@line 535 "_heapqmodule.c"
        var $205=$heap; //@line 535 "_heapqmodule.c"
        FUNCTION_TABLE[$204]($205); //@line 535 "_heapqmodule.c"
        __label__ = 42; break; //@line 535 "_heapqmodule.c"
      case 42: // $bb43
        $0=0; //@line 536 "_heapqmodule.c"
        __label__ = 43; break; //@line 536 "_heapqmodule.c"
      case 43: // $bb44
        var $206=$0; //@line 468 "_heapqmodule.c"
        $retval=$206; //@line 468 "_heapqmodule.c"
        var $retval45=$retval; //@line 468 "_heapqmodule.c"
        STACKTOP = __stackBase__;
        return $retval45; //@line 468 "_heapqmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_heapq() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $0=_Py_InitModule4(__str14, _heapq_methods, _module_doc, 0, 1013); //@line 692 "_heapqmodule.c"
        $m=$0; //@line 692 "_heapqmodule.c"
        var $1=$m; //@line 693 "_heapqmodule.c"
        var $2=($1)==0; //@line 693 "_heapqmodule.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 693 "_heapqmodule.c"
      case 1: // $bb
        var $3=_PyString_FromString(___about__); //@line 695 "_heapqmodule.c"
        var $4=$m; //@line 695 "_heapqmodule.c"
        var $5=_PyModule_AddObject($4, __str15, $3); //@line 695 "_heapqmodule.c"
        __label__ = 2; break; //@line 695 "_heapqmodule.c"
      case 2: // $return
        ;
        return; //@line 694 "_heapqmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_heapq"] = _init_heapq;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_heappush,0,_heappushpop,0,_heappop,0,_heapreplace,0,_heapify,0,_nlargest,0,_nsmallest,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_lt_8310=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str=allocate([95,95,108,116,95,95,0] /* __lt__\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([40,40,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,104,101,97,112,41,41,45,62,111,98,95,116,121,112,101,41,41,45,62,116,112,95,102,108,97,103,115,32,38,32,40,40,49,76,60,60,50,53,41,41,41,32,33,61,32,48,41,0] /* ((((((PyObject_)(hea */, "i8", ALLOC_NORMAL);
__str2=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,95,104,101,97,112,113,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/_ */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8337=allocate([95,115,105,102,116,100,111,119,110,0] /* _siftdown\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([105,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* index out of range\0 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8411=allocate([95,115,105,102,116,117,112,0] /* _siftup\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([104,101,97,112,112,117,115,104,0] /* heappush\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([104,101,97,112,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,97,32,108,105,115,116,0] /* heap argument must b */, "i8", ALLOC_NORMAL);
_heappush_doc=allocate([80,117,115,104,32,105,116,101,109,32,111,110,116,111,32,104,101,97,112,44,32,109,97,105,110,116,97,105,110,105,110,103,32,116,104,101,32,104,101,97,112,32,105,110,118,97,114,105,97,110,116,46,0] /* Push item onto heap, */, "i8", ALLOC_NORMAL);
_heappop_doc=allocate([80,111,112,32,116,104,101,32,115,109,97,108,108,101,115,116,32,105,116,101,109,32,111,102,102,32,116,104,101,32,104,101,97,112,44,32,109,97,105,110,116,97,105,110,105,110,103,32,116,104,101,32,104,101,97,112,32,105,110,118,97,114,105,97,110,116,46,0] /* Pop the smallest ite */, "i8", ALLOC_NORMAL);
__str6=allocate([104,101,97,112,114,101,112,108,97,99,101,0] /* heapreplace\00 */, "i8", ALLOC_NORMAL);
_heapreplace_doc=allocate([80,111,112,32,97,110,100,32,114,101,116,117,114,110,32,116,104,101,32,99,117,114,114,101,110,116,32,115,109,97,108,108,101,115,116,32,118,97,108,117,101,44,32,97,110,100,32,97,100,100,32,116,104,101,32,110,101,119,32,105,116,101,109,46,10,10,84,104,105,115,32,105,115,32,109,111,114,101,32,101,102,102,105,99,105,101,110,116,32,116,104,97,110,32,104,101,97,112,112,111,112,40,41,32,102,111,108,108,111,119,101,100,32,98,121,32,104,101,97,112,112,117,115,104,40,41,44,32,97,110,100,32,99,97,110,32,98,101,10,109,111,114,101,32,97,112,112,114,111,112,114,105,97,116,101,32,119,104,101,110,32,117,115,105,110,103,32,97,32,102,105,120,101,100,45,115,105,122,101,32,104,101,97,112,46,32,32,78,111,116,101,32,116,104,97,116,32,116,104,101,32,118,97,108,117,101,10,114,101,116,117,114,110,101,100,32,109,97,121,32,98,101,32,108,97,114,103,101,114,32,116,104,97,110,32,105,116,101,109,33,32,32,84,104,97,116,32,99,111,110,115,116,114,97,105,110,115,32,114,101,97,115,111,110,97,98,108,101,32,117,115,101,115,32,111,102,10,116,104,105,115,32,114,111,117,116,105,110,101,32,117,110,108,101,115,115,32,119,114,105,116,116,101,110,32,97,115,32,112,97,114,116,32,111,102,32,97,32,99,111,110,100,105,116,105,111,110,97,108,32,114,101,112,108,97,99,101,109,101,110,116,58,10,10,32,32,32,32,105,102,32,105,116,101,109,32,62,32,104,101,97,112,91,48,93,58,10,32,32,32,32,32,32,32,32,105,116,101,109,32,61,32,104,101,97,112,114,101,112,108,97,99,101,40,104,101,97,112,44,32,105,116,101,109,41,10,0] /* Pop and return the c */, "i8", ALLOC_NORMAL);
__str7=allocate([104,101,97,112,112,117,115,104,112,111,112,0] /* heappushpop\00 */, "i8", ALLOC_NORMAL);
_heappushpop_doc=allocate([80,117,115,104,32,105,116,101,109,32,111,110,32,116,104,101,32,104,101,97,112,44,32,116,104,101,110,32,112,111,112,32,97,110,100,32,114,101,116,117,114,110,32,116,104,101,32,115,109,97,108,108,101,115,116,32,105,116,101,109,10,102,114,111,109,32,116,104,101,32,104,101,97,112,46,32,84,104,101,32,99,111,109,98,105,110,101,100,32,97,99,116,105,111,110,32,114,117,110,115,32,109,111,114,101,32,101,102,102,105,99,105,101,110,116,108,121,32,116,104,97,110,10,104,101,97,112,112,117,115,104,40,41,32,102,111,108,108,111,119,101,100,32,98,121,32,97,32,115,101,112,97,114,97,116,101,32,99,97,108,108,32,116,111,32,104,101,97,112,112,111,112,40,41,46,0] /* Push item on the hea */, "i8", ALLOC_NORMAL);
_heapify_doc=allocate([84,114,97,110,115,102,111,114,109,32,108,105,115,116,32,105,110,116,111,32,97,32,104,101,97,112,44,32,105,110,45,112,108,97,99,101,44,32,105,110,32,79,40,108,101,110,40,104,101,97,112,41,41,32,116,105,109,101,46,0] /* Transform list into  */, "i8", ALLOC_NORMAL);
__str8=allocate([110,79,58,110,108,97,114,103,101,115,116,0] /* nO:nlargest\00 */, "i8", ALLOC_NORMAL);
_nlargest_doc=allocate([70,105,110,100,32,116,104,101,32,110,32,108,97,114,103,101,115,116,32,101,108,101,109,101,110,116,115,32,105,110,32,97,32,100,97,116,97,115,101,116,46,10,10,69,113,117,105,118,97,108,101,110,116,32,116,111,58,32,32,115,111,114,116,101,100,40,105,116,101,114,97,98,108,101,44,32,114,101,118,101,114,115,101,61,84,114,117,101,41,91,58,110,93,10,0] /* Find the n largest e */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8840=allocate([95,115,105,102,116,100,111,119,110,109,97,120,0] /* _siftdownmax\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8914=allocate([95,115,105,102,116,117,112,109,97,120,0] /* _siftupmax\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([110,79,58,110,115,109,97,108,108,101,115,116,0] /* nO:nsmallest\00 */, "i8", ALLOC_NORMAL);
_nsmallest_doc=allocate([70,105,110,100,32,116,104,101,32,110,32,115,109,97,108,108,101,115,116,32,101,108,101,109,101,110,116,115,32,105,110,32,97,32,100,97,116,97,115,101,116,46,10,10,69,113,117,105,118,97,108,101,110,116,32,116,111,58,32,32,115,111,114,116,101,100,40,105,116,101,114,97,98,108,101,41,91,58,110,93,10,0] /* Find the n smallest  */, "i8", ALLOC_NORMAL);
__str10=allocate([104,101,97,112,112,111,112,0] /* heappop\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([104,101,97,112,105,102,121,0] /* heapify\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([110,108,97,114,103,101,115,116,0] /* nlargest\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([110,115,109,97,108,108,101,115,116,0] /* nsmallest\00 */, "i8", ALLOC_NORMAL);
_heapq_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_module_doc=allocate([72,101,97,112,32,113,117,101,117,101,32,97,108,103,111,114,105,116,104,109,32,40,97,46,107,46,97,46,32,112,114,105,111,114,105,116,121,32,113,117,101,117,101,41,46,10,10,72,101,97,112,115,32,97,114,101,32,97,114,114,97,121,115,32,102,111,114,32,119,104,105,99,104,32,97,91,107,93,32,60,61,32,97,91,50,42,107,43,49,93,32,97,110,100,32,97,91,107,93,32,60,61,32,97,91,50,42,107,43,50,93,32,102,111,114,10,97,108,108,32,107,44,32,99,111,117,110,116,105,110,103,32,101,108,101,109,101,110,116,115,32,102,114,111,109,32,48,46,32,32,70,111,114,32,116,104,101,32,115,97,107,101,32,111,102,32,99,111,109,112,97,114,105,115,111,110,44,10,110,111,110,45,101,120,105,115,116,105,110,103,32,101,108,101,109,101,110,116,115,32,97,114,101,32,99,111,110,115,105,100,101,114,101,100,32,116,111,32,98,101,32,105,110,102,105,110,105,116,101,46,32,32,84,104,101,32,105,110,116,101,114,101,115,116,105,110,103,10,112,114,111,112,101,114,116,121,32,111,102,32,97,32,104,101,97,112,32,105,115,32,116,104,97,116,32,97,91,48,93,32,105,115,32,97,108,119,97,121,115,32,105,116,115,32,115,109,97,108,108,101,115,116,32,101,108,101,109,101,110,116,46,10,10,85,115,97,103,101,58,10,10,104,101,97,112,32,61,32,91,93,32,32,32,32,32,32,32,32,32,32,32,32,35,32,99,114,101,97,116,101,115,32,97,110,32,101,109,112,116,121,32,104,101,97,112,10,104,101,97,112,112,117,115,104,40,104,101,97,112,44,32,105,116,101,109,41,32,35,32,112,117,115,104,101,115,32,97,32,110,101,119,32,105,116,101,109,32,111,110,32,116,104,101,32,104,101,97,112,10,105,116,101,109,32,61,32,104,101,97,112,112,111,112,40,104,101,97,112,41,32,35,32,112,111,112,115,32,116,104,101,32,115,109,97,108,108,101,115,116,32,105,116,101,109,32,102,114,111,109,32,116,104,101,32,104,101,97,112,10,105,116,101,109,32,61,32,104,101,97,112,91,48,93,32,32,32,32,32,32,32,35,32,115,109,97,108,108,101,115,116,32,105,116,101,109,32,111,110,32,116,104,101,32,104,101,97,112,32,119,105,116,104,111,117,116,32,112,111,112,112,105,110,103,32,105,116,10,104,101,97,112,105,102,121,40,120,41,32,32,32,32,32,32,32,32,32,32,32,35,32,116,114,97,110,115,102,111,114,109,115,32,108,105,115,116,32,105,110,116,111,32,97,32,104,101,97,112,44,32,105,110,45,112,108,97,99,101,44,32,105,110,32,108,105,110,101,97,114,32,116,105,109,101,10,105,116,101,109,32,61,32,104,101,97,112,114,101,112,108,97,99,101,40,104,101,97,112,44,32,105,116,101,109,41,32,35,32,112,111,112,115,32,97,110,100,32,114,101,116,117,114,110,115,32,115,109,97,108,108,101,115,116,32,105,116,101,109,44,32,97,110,100,32,97,100,100,115,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,35,32,110,101,119,32,105,116,101,109,59,32,116,104,101,32,104,101,97,112,32,115,105,122,101,32,105,115,32,117,110,99,104,97,110,103,101,100,10,10,79,117,114,32,65,80,73,32,100,105,102,102,101,114,115,32,102,114,111,109,32,116,101,120,116,98,111,111,107,32,104,101,97,112,32,97,108,103,111,114,105,116,104,109,115,32,97,115,32,102,111,108,108,111,119,115,58,10,10,45,32,87,101,32,117,115,101,32,48,45,98,97,115,101,100,32,105,110,100,101,120,105,110,103,46,32,32,84,104,105,115,32,109,97,107,101,115,32,116,104,101,32,114,101,108,97,116,105,111,110,115,104,105,112,32,98,101,116,119,101,101,110,32,116,104,101,10,32,32,105,110,100,101,120,32,102,111,114,32,97,32,110,111,100,101,32,97,110,100,32,116,104,101,32,105,110,100,101,120,101,115,32,102,111,114,32,105,116,115,32,99,104,105,108,100,114,101,110,32,115,108,105,103,104,116,108,121,32,108,101,115,115,10,32,32,111,98,118,105,111,117,115,44,32,98,117,116,32,105,115,32,109,111,114,101,32,115,117,105,116,97,98,108,101,32,115,105,110,99,101,32,80,121,116,104,111,110,32,117,115,101,115,32,48,45,98,97,115,101,100,32,105,110,100,101,120,105,110,103,46,10,10,45,32,79,117,114,32,104,101,97,112,112,111,112,40,41,32,109,101,116,104,111,100,32,114,101,116,117,114,110,115,32,116,104,101,32,115,109,97,108,108,101,115,116,32,105,116,101,109,44,32,110,111,116,32,116,104,101,32,108,97,114,103,101,115,116,46,10,10,84,104,101,115,101,32,116,119,111,32,109,97,107,101,32,105,116,32,112,111,115,115,105,98,108,101,32,116,111,32,118,105,101,119,32,116,104,101,32,104,101,97,112,32,97,115,32,97,32,114,101,103,117,108,97,114,32,80,121,116,104,111,110,32,108,105,115,116,10,119,105,116,104,111,117,116,32,115,117,114,112,114,105,115,101,115,58,32,104,101,97,112,91,48,93,32,105,115,32,116,104,101,32,115,109,97,108,108,101,115,116,32,105,116,101,109,44,32,97,110,100,32,104,101,97,112,46,115,111,114,116,40,41,10,109,97,105,110,116,97,105,110,115,32,116,104,101,32,104,101,97,112,32,105,110,118,97,114,105,97,110,116,33,10,0] /* Heap queue algorithm */, "i8", ALLOC_NORMAL);
___about__=allocate([72,101,97,112,32,113,117,101,117,101,115,10,10,91,101,120,112,108,97,110,97,116,105,111,110,32,98,121,32,70,114,97,110,231,111,105,115,32,80,105,110,97,114,100,93,10,10,72,101,97,112,115,32,97,114,101,32,97,114,114,97,121,115,32,102,111,114,32,119,104,105,99,104,32,97,91,107,93,32,60,61,32,97,91,50,42,107,43,49,93,32,97,110,100,32,97,91,107,93,32,60,61,32,97,91,50,42,107,43,50,93,32,102,111,114,10,97,108,108,32,107,44,32,99,111,117,110,116,105,110,103,32,101,108,101,109,101,110,116,115,32,102,114,111,109,32,48,46,32,32,70,111,114,32,116,104,101,32,115,97,107,101,32,111,102,32,99,111,109,112,97,114,105,115,111,110,44,10,110,111,110,45,101,120,105,115,116,105,110,103,32,101,108,101,109,101,110,116,115,32,97,114,101,32,99,111,110,115,105,100,101,114,101,100,32,116,111,32,98,101,32,105,110,102,105,110,105,116,101,46,32,32,84,104,101,32,105,110,116,101,114,101,115,116,105,110,103,10,112,114,111,112,101,114,116,121,32,111,102,32,97,32,104,101,97,112,32,105,115,32,116,104,97,116,32,97,91,48,93,32,105,115,32,97,108,119,97,121,115,32,105,116,115,32,115,109,97,108,108,101,115,116,32,101,108,101,109,101,110,116,46,10,10,84,104,101,32,115,116,114,97,110,103,101,32,105,110,118,97,114,105,97,110,116,32,97,98,111,118,101,32,105,115,32,109,101,97,110,116,32,116,111,32,98,101,32,97,110,32,101,102,102,105,99,105,101,110,116,32,109,101,109,111,114,121,10,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,102,111,114,32,97,32,116,111,117,114,110,97,109,101,110,116,46,32,32,84,104,101,32,110,117,109,98,101,114,115,32,98,101,108,111,119,32,97,114,101,32,96,107,39,44,32,110,111,116,32,97,91,107,93,58,10,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,48,10,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,49,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,50,10,10,32,32,32,32,32,32,32,32,32,32,51,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,52,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,53,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,54,10,10,32,32,32,32,32,32,55,32,32,32,32,32,32,32,56,32,32,32,32,32,32,32,57,32,32,32,32,32,32,32,49,48,32,32,32,32,32,32,49,49,32,32,32,32,32,32,49,50,32,32,32,32,32,32,49,51,32,32,32,32,32,32,49,52,10,10,32,32,32,32,49,53,32,49,54,32,32,32,49,55,32,49,56,32,32,32,49,57,32,50,48,32,32,32,50,49,32,50,50,32,32,32,50,51,32,50,52,32,32,32,50,53,32,50,54,32,32,32,50,55,32,50,56,32,32,32,50,57,32,51,48,10,10,10,73,110,32,116,104,101,32,116,114,101,101,32,97,98,111,118,101,44,32,101,97,99,104,32,99,101,108,108,32,96,107,39,32,105,115,32,116,111,112,112,105,110,103,32,96,50,42,107,43,49,39,32,97,110,100,32,96,50,42,107,43,50,39,46,32,32,73,110,10,97,110,32,117,115,117,97,108,32,98,105,110,97,114,121,32,116,111,117,114,110,97,109,101,110,116,32,119,101,32,115,101,101,32,105,110,32,115,112,111,114,116,115,44,32,101,97,99,104,32,99,101,108,108,32,105,115,32,116,104,101,32,119,105,110,110,101,114,10,111,118,101,114,32,116,104,101,32,116,119,111,32,99,101,108,108,115,32,105,116,32,116,111,112,115,44,32,97,110,100,32,119,101,32,99,97,110,32,116,114,97,99,101,32,116,104,101,32,119,105,110,110,101,114,32,100,111,119,110,32,116,104,101,32,116,114,101,101,10,116,111,32,115,101,101,32,97,108,108,32,111,112,112,111,110,101,110,116,115,32,115,47,104,101,32,104,97,100,46,32,32,72,111,119,101,118,101,114,44,32,105,110,32,109,97,110,121,32,99,111,109,112,117,116,101,114,32,97,112,112,108,105,99,97,116,105,111,110,115,10,111,102,32,115,117,99,104,32,116,111,117,114,110,97,109,101,110,116,115,44,32,119,101,32,100,111,32,110,111,116,32,110,101,101,100,32,116,111,32,116,114,97,99,101,32,116,104,101,32,104,105,115,116,111,114,121,32,111,102,32,97,32,119,105,110,110,101,114,46,10,84,111,32,98,101,32,109,111,114,101,32,109,101,109,111,114,121,32,101,102,102,105,99,105,101,110,116,44,32,119,104,101,110,32,97,32,119,105,110,110,101,114,32,105,115,32,112,114,111,109,111,116,101,100,44,32,119,101,32,116,114,121,32,116,111,10,114,101,112,108,97,99,101,32,105,116,32,98,121,32,115,111,109,101,116,104,105,110,103,32,101,108,115,101,32,97,116,32,97,32,108,111,119,101,114,32,108,101,118,101,108,44,32,97,110,100,32,116,104,101,32,114,117,108,101,32,98,101,99,111,109,101,115,10,116,104,97,116,32,97,32,99,101,108,108,32,97,110,100,32,116,104,101,32,116,119,111,32,99,101,108,108,115,32,105,116,32,116,111,112,115,32,99,111,110,116,97,105,110,32,116,104,114,101,101,32,100,105,102,102,101,114,101,110,116,32,105,116,101,109,115,44,10,98,117,116,32,116,104,101,32,116,111,112,32,99,101,108,108,32,34,119,105,110,115,34,32,111,118,101,114,32,116,104,101,32,116,119,111,32,116,111,112,112,101,100,32,99,101,108,108,115,46,10,10,73,102,32,116,104,105,115,32,104,101,97,112,32,105,110,118,97,114,105,97,110,116,32,105,115,32,112,114,111,116,101,99,116,101,100,32,97,116,32,97,108,108,32,116,105,109,101,44,32,105,110,100,101,120,32,48,32,105,115,32,99,108,101,97,114,108,121,10,116,104,101,32,111,118,101,114,97,108,108,32,119,105,110,110,101,114,46,32,32,84,104,101,32,115,105,109,112,108,101,115,116,32,97,108,103,111,114,105,116,104,109,105,99,32,119,97,121,32,116,111,32,114,101,109,111,118,101,32,105,116,32,97,110,100,10,102,105,110,100,32,116,104,101,32,34,110,101,120,116,34,32,119,105,110,110,101,114,32,105,115,32,116,111,32,109,111,118,101,32,115,111,109,101,32,108,111,115,101,114,32,40,108,101,116,39,115,32,115,97,121,32,99,101,108,108,32,51,48,32,105,110,32,116,104,101,10,100,105,97,103,114,97,109,32,97,98,111,118,101,41,32,105,110,116,111,32,116,104,101,32,48,32,112,111,115,105,116,105,111,110,44,32,97,110,100,32,116,104,101,110,32,112,101,114,99,111,108,97,116,101,32,116,104,105,115,32,110,101,119,32,48,32,100,111,119,110,10,116,104,101,32,116,114,101,101,44,32,101,120,99,104,97,110,103,105,110,103,32,118,97,108,117,101,115,44,32,117,110,116,105,108,32,116,104,101,32,105,110,118,97,114,105,97,110,116,32,105,115,32,114,101,45,101,115,116,97,98,108,105,115,104,101,100,46,10,84,104,105,115,32,105,115,32,99,108,101,97,114,108,121,32,108,111,103,97,114,105,116,104,109,105,99,32,111,110,32,116,104,101,32,116,111,116,97,108,32,110,117,109,98,101,114,32,111,102,32,105,116,101,109,115,32,105,110,32,116,104,101,32,116,114,101,101,46,10,66,121,32,105,116,101,114,97,116,105,110,103,32,111,118,101,114,32,97,108,108,32,105,116,101,109,115,44,32,121,111,117,32,103,101,116,32,97,110,32,79,40,110,32,108,110,32,110,41,32,115,111,114,116,46,10,10,65,32,110,105,99,101,32,102,101,97,116,117,114,101,32,111,102,32,116,104,105,115,32,115,111,114,116,32,105,115,32,116,104,97,116,32,121,111,117,32,99,97,110,32,101,102,102,105,99,105,101,110,116,108,121,32,105,110,115,101,114,116,32,110,101,119,10,105,116,101,109,115,32,119,104,105,108,101,32,116,104,101,32,115,111,114,116,32,105,115,32,103,111,105,110,103,32,111,110,44,32,112,114,111,118,105,100,101,100,32,116,104,97,116,32,116,104,101,32,105,110,115,101,114,116,101,100,32,105,116,101,109,115,32,97,114,101,10,110,111,116,32,34,98,101,116,116,101,114,34,32,116,104,97,110,32,116,104,101,32,108,97,115,116,32,48,39,116,104,32,101,108,101,109,101,110,116,32,121,111,117,32,101,120,116,114,97,99,116,101,100,46,32,32,84,104,105,115,32,105,115,10,101,115,112,101,99,105,97,108,108,121,32,117,115,101,102,117,108,32,105,110,32,115,105,109,117,108,97,116,105,111,110,32,99,111,110,116,101,120,116,115,44,32,119,104,101,114,101,32,116,104,101,32,116,114,101,101,32,104,111,108,100,115,32,97,108,108,10,105,110,99,111,109,105,110,103,32,101,118,101,110,116,115,44,32,97,110,100,32,116,104,101,32,34,119,105,110,34,32,99,111,110,100,105,116,105,111,110,32,109,101,97,110,115,32,116,104,101,32,115,109,97,108,108,101,115,116,32,115,99,104,101,100,117,108,101,100,10,116,105,109,101,46,32,32,87,104,101,110,32,97,110,32,101,118,101,110,116,32,115,99,104,101,100,117,108,101,32,111,116,104,101,114,32,101,118,101,110,116,115,32,102,111,114,32,101,120,101,99,117,116,105,111,110,44,32,116,104,101,121,32,97,114,101,10,115,99,104,101,100,117,108,101,100,32,105,110,116,111,32,116,104,101,32,102,117,116,117,114,101,44,32,115,111,32,116,104,101,121,32,99,97,110,32,101,97,115,105,108,121,32,103,111,32,105,110,116,111,32,116,104,101,32,104,101,97,112,46,32,32,83,111,44,32,97,10,104,101,97,112,32,105,115,32,97,32,103,111,111,100,32,115,116,114,117,99,116,117,114,101,32,102,111,114,32,105,109,112,108,101,109,101,110,116,105,110,103,32,115,99,104,101,100,117,108,101,114,115,32,40,116,104,105,115,32,105,115,32,119,104,97,116,32,73,10,117,115,101,100,32,102,111,114,32,109,121,32,77,73,68,73,32,115,101,113,117,101,110,99,101,114,32,58,45,41,46,10,10,86,97,114,105,111,117,115,32,115,116,114,117,99,116,117,114,101,115,32,102,111,114,32,105,109,112,108,101,109,101,110,116,105,110,103,32,115,99,104,101,100,117,108,101,114,115,32,104,97,118,101,32,98,101,101,110,32,101,120,116,101,110,115,105,118,101,108,121,10,115,116,117,100,105,101,100,44,32,97,110,100,32,104,101,97,112,115,32,97,114,101,32,103,111,111,100,32,102,111,114,32,116,104,105,115,44,32,97,115,32,116,104,101,121,32,97,114,101,32,114,101,97,115,111,110,97,98,108,121,32,115,112,101,101,100,121,44,10,116,104,101,32,115,112,101,101,100,32,105,115,32,97,108,109,111,115,116,32,99,111,110,115,116,97,110,116,44,32,97,110,100,32,116,104,101,32,119,111,114,115,116,32,99,97,115,101,32,105,115,32,110,111,116,32,109,117,99,104,32,100,105,102,102,101,114,101,110,116,10,116,104,97,110,32,116,104,101,32,97,118,101,114,97,103,101,32,99,97,115,101,46,32,32,72,111,119,101,118,101,114,44,32,116,104,101,114,101,32,97,114,101,32,111,116,104,101,114,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,32,119,104,105,99,104,10,97,114,101,32,109,111,114,101,32,101,102,102,105,99,105,101,110,116,32,111,118,101,114,97,108,108,44,32,121,101,116,32,116,104,101,32,119,111,114,115,116,32,99,97,115,101,115,32,109,105,103,104,116,32,98,101,32,116,101,114,114,105,98,108,101,46,10,10,72,101,97,112,115,32,97,114,101,32,97,108,115,111,32,118,101,114,121,32,117,115,101,102,117,108,32,105,110,32,98,105,103,32,100,105,115,107,32,115,111,114,116,115,46,32,32,89,111,117,32,109,111,115,116,32,112,114,111,98,97,98,108,121,32,97,108,108,10,107,110,111,119,32,116,104,97,116,32,97,32,98,105,103,32,115,111,114,116,32,105,109,112,108,105,101,115,32,112,114,111,100,117,99,105,110,103,32,34,114,117,110,115,34,32,40,119,104,105,99,104,32,97,114,101,32,112,114,101,45,115,111,114,116,101,100,10,115,101,113,117,101,110,99,101,115,44,32,119,104,105,99,104,32,115,105,122,101,32,105,115,32,117,115,117,97,108,108,121,32,114,101,108,97,116,101,100,32,116,111,32,116,104,101,32,97,109,111,117,110,116,32,111,102,32,67,80,85,32,109,101,109,111,114,121,41,44,10,102,111,108,108,111,119,101,100,32,98,121,32,97,32,109,101,114,103,105,110,103,32,112,97,115,115,101,115,32,102,111,114,32,116,104,101,115,101,32,114,117,110,115,44,32,119,104,105,99,104,32,109,101,114,103,105,110,103,32,105,115,32,111,102,116,101,110,10,118,101,114,121,32,99,108,101,118,101,114,108,121,32,111,114,103,97,110,105,115,101,100,91,49,93,46,32,32,73,116,32,105,115,32,118,101,114,121,32,105,109,112,111,114,116,97,110,116,32,116,104,97,116,32,116,104,101,32,105,110,105,116,105,97,108,10,115,111,114,116,32,112,114,111,100,117,99,101,115,32,116,104,101,32,108,111,110,103,101,115,116,32,114,117,110,115,32,112,111,115,115,105,98,108,101,46,32,32,84,111,117,114,110,97,109,101,110,116,115,32,97,114,101,32,97,32,103,111,111,100,32,119,97,121,10,116,111,32,116,104,97,116,46,32,32,73,102,44,32,117,115,105,110,103,32,97,108,108,32,116,104,101,32,109,101,109,111,114,121,32,97,118,97,105,108,97,98,108,101,32,116,111,32,104,111,108,100,32,97,32,116,111,117,114,110,97,109,101,110,116,44,32,121,111,117,10,114,101,112,108,97,99,101,32,97,110,100,32,112,101,114,99,111,108,97,116,101,32,105,116,101,109,115,32,116,104,97,116,32,104,97,112,112,101,110,32,116,111,32,102,105,116,32,116,104,101,32,99,117,114,114,101,110,116,32,114,117,110,44,32,121,111,117,39,108,108,10,112,114,111,100,117,99,101,32,114,117,110,115,32,119,104,105,99,104,32,97,114,101,32,116,119,105,99,101,32,116,104,101,32,115,105,122,101,32,111,102,32,116,104,101,32,109,101,109,111,114,121,32,102,111,114,32,114,97,110,100,111,109,32,105,110,112,117,116,44,10,97,110,100,32,109,117,99,104,32,98,101,116,116,101,114,32,102,111,114,32,105,110,112,117,116,32,102,117,122,122,105,108,121,32,111,114,100,101,114,101,100,46,10,10,77,111,114,101,111,118,101,114,44,32,105,102,32,121,111,117,32,111,117,116,112,117,116,32,116,104,101,32,48,39,116,104,32,105,116,101,109,32,111,110,32,100,105,115,107,32,97,110,100,32,103,101,116,32,97,110,32,105,110,112,117,116,32,119,104,105,99,104,10,109,97,121,32,110,111,116,32,102,105,116,32,105,110,32,116,104,101,32,99,117,114,114,101,110,116,32,116,111,117,114,110,97,109,101,110,116,32,40,98,101,99,97,117,115,101,32,116,104,101,32,118,97,108,117,101,32,34,119,105,110,115,34,32,111,118,101,114,10,116,104,101,32,108,97,115,116,32,111,117,116,112,117,116,32,118,97,108,117,101,41,44,32,105,116,32,99,97,110,110,111,116,32,102,105,116,32,105,110,32,116,104,101,32,104,101,97,112,44,32,115,111,32,116,104,101,32,115,105,122,101,32,111,102,32,116,104,101,10,104,101,97,112,32,100,101,99,114,101,97,115,101,115,46,32,32,84,104,101,32,102,114,101,101,100,32,109,101,109,111,114,121,32,99,111,117,108,100,32,98,101,32,99,108,101,118,101,114,108,121,32,114,101,117,115,101,100,32,105,109,109,101,100,105,97,116,101,108,121,10,102,111,114,32,112,114,111,103,114,101,115,115,105,118,101,108,121,32,98,117,105,108,100,105,110,103,32,97,32,115,101,99,111,110,100,32,104,101,97,112,44,32,119,104,105,99,104,32,103,114,111,119,115,32,97,116,32,101,120,97,99,116,108,121,32,116,104,101,10,115,97,109,101,32,114,97,116,101,32,116,104,101,32,102,105,114,115,116,32,104,101,97,112,32,105,115,32,109,101,108,116,105,110,103,46,32,32,87,104,101,110,32,116,104,101,32,102,105,114,115,116,32,104,101,97,112,32,99,111,109,112,108,101,116,101,108,121,10,118,97,110,105,115,104,101,115,44,32,121,111,117,32,115,119,105,116,99,104,32,104,101,97,112,115,32,97,110,100,32,115,116,97,114,116,32,97,32,110,101,119,32,114,117,110,46,32,32,67,108,101,118,101,114,32,97,110,100,32,113,117,105,116,101,10,101,102,102,101,99,116,105,118,101,33,10,10,73,110,32,97,32,119,111,114,100,44,32,104,101,97,112,115,32,97,114,101,32,117,115,101,102,117,108,32,109,101,109,111,114,121,32,115,116,114,117,99,116,117,114,101,115,32,116,111,32,107,110,111,119,46,32,32,73,32,117,115,101,32,116,104,101,109,32,105,110,10,97,32,102,101,119,32,97,112,112,108,105,99,97,116,105,111,110,115,44,32,97,110,100,32,73,32,116,104,105,110,107,32,105,116,32,105,115,32,103,111,111,100,32,116,111,32,107,101,101,112,32,97,32,96,104,101,97,112,39,32,109,111,100,117,108,101,10,97,114,111,117,110,100,46,32,58,45,41,10,10,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,10,91,49,93,32,84,104,101,32,100,105,115,107,32,98,97,108,97,110,99,105,110,103,32,97,108,103,111,114,105,116,104,109,115,32,119,104,105,99,104,32,97,114,101,32,99,117,114,114,101,110,116,44,32,110,111,119,97,100,97,121,115,44,32,97,114,101,10,109,111,114,101,32,97,110,110,111,121,105,110,103,32,116,104,97,110,32,99,108,101,118,101,114,44,32,97,110,100,32,116,104,105,115,32,105,115,32,97,32,99,111,110,115,101,113,117,101,110,99,101,32,111,102,32,116,104,101,32,115,101,101,107,105,110,103,10,99,97,112,97,98,105,108,105,116,105,101,115,32,111,102,32,116,104,101,32,100,105,115,107,115,46,32,32,79,110,32,100,101,118,105,99,101,115,32,119,104,105,99,104,32,99,97,110,110,111,116,32,115,101,101,107,44,32,108,105,107,101,32,98,105,103,10,116,97,112,101,32,100,114,105,118,101,115,44,32,116,104,101,32,115,116,111,114,121,32,119,97,115,32,113,117,105,116,101,32,100,105,102,102,101,114,101,110,116,44,32,97,110,100,32,111,110,101,32,104,97,100,32,116,111,32,98,101,32,118,101,114,121,10,99,108,101,118,101,114,32,116,111,32,101,110,115,117,114,101,32,40,102,97,114,32,105,110,32,97,100,118,97,110,99,101,41,32,116,104,97,116,32,101,97,99,104,32,116,97,112,101,32,109,111,118,101,109,101,110,116,32,119,105,108,108,32,98,101,32,116,104,101,10,109,111,115,116,32,101,102,102,101,99,116,105,118,101,32,112,111,115,115,105,98,108,101,32,40,116,104,97,116,32,105,115,44,32,119,105,108,108,32,98,101,115,116,32,112,97,114,116,105,99,105,112,97,116,101,32,97,116,10,34,112,114,111,103,114,101,115,115,105,110,103,34,32,116,104,101,32,109,101,114,103,101,41,46,32,32,83,111,109,101,32,116,97,112,101,115,32,119,101,114,101,32,101,118,101,110,32,97,98,108,101,32,116,111,32,114,101,97,100,10,98,97,99,107,119,97,114,100,115,44,32,97,110,100,32,116,104,105,115,32,119,97,115,32,97,108,115,111,32,117,115,101,100,32,116,111,32,97,118,111,105,100,32,116,104,101,32,114,101,119,105,110,100,105,110,103,32,116,105,109,101,46,10,66,101,108,105,101,118,101,32,109,101,44,32,114,101,97,108,32,103,111,111,100,32,116,97,112,101,32,115,111,114,116,115,32,119,101,114,101,32,113,117,105,116,101,32,115,112,101,99,116,97,99,117,108,97,114,32,116,111,32,119,97,116,99,104,33,10,70,114,111,109,32,97,108,108,32,116,105,109,101,115,44,32,115,111,114,116,105,110,103,32,104,97,115,32,97,108,119,97,121,115,32,98,101,101,110,32,97,32,71,114,101,97,116,32,65,114,116,33,32,58,45,41,10,0] /* Heap queues\0A\0A[ex */, "i8", ALLOC_NORMAL);
__str14=allocate([95,104,101,97,112,113,0] /* _heapq\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([95,95,97,98,111,117,116,95,95,0] /* __about__\00 */, "i8", ALLOC_NORMAL);
HEAP[_heapq_methods]=__str4;
HEAP[_heapq_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_heapq_methods+12]=_heappush_doc;
HEAP[_heapq_methods+16]=__str7;
HEAP[_heapq_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_heapq_methods+28]=_heappushpop_doc;
HEAP[_heapq_methods+32]=__str10;
HEAP[_heapq_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_heapq_methods+44]=_heappop_doc;
HEAP[_heapq_methods+48]=__str6;
HEAP[_heapq_methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_heapq_methods+60]=_heapreplace_doc;
HEAP[_heapq_methods+64]=__str11;
HEAP[_heapq_methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_heapq_methods+76]=_heapify_doc;
HEAP[_heapq_methods+80]=__str12;
HEAP[_heapq_methods+84]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_heapq_methods+92]=_nlargest_doc;
HEAP[_heapq_methods+96]=__str13;
HEAP[_heapq_methods+100]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_heapq_methods+108]=_nsmallest_doc;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

