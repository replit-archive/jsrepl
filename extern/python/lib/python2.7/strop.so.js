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



var $0___SIZE = 352; // %0
  
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
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyVarObject___SIZE = 12; // %struct.PyVarObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var _strop_module__doc__;
var _splitfields__doc__;

var __str;
var __str1;

var __str2;
var _joinfields__doc__;
var __str3;
var __str4;

var __str5;

var __str6;
var __str7;
var _find__doc__;
var __str8;
var _rfind__doc__;
var __str9;
var _strip__doc__;
var _lstrip__doc__;
var _rstrip__doc__;
var _lower__doc__;
var _upper__doc__;
var _capitalize__doc__;
var _expandtabs__doc__;
var __str10;
var __str11;
var __str12;
var _count__doc__;
var __str13;
var _swapcase__doc__;
var _atoi__doc__;
var __str14;
var __str15;
var __str16;
var __str17;
var _atol__doc__;
var __str18;
var __str19;
var __str20;
var __str21;
var _atof__doc__;
var __str22;
var __str23;
var __str24;
var _maketrans__doc__;
var __str25;
var __str26;
var _translate__doc__;
var __str27;
var __str28;
var __str29;
var __str30;
var ___PRETTY_FUNCTION___9892;
var _replace__doc__;
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
var _strop_methods;
var __str54;
var __str55;
var __str56;
var __str57;





































  function _split_whitespace($s, $len, $maxsplit) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $len_addr;
        var $maxsplit_addr;
        var $retval;
        var $0;
        var $i;
        var $j;
        var $err;
        var $countsplit;
        var $item;
        var $list;
        $s_addr=$s;
        $len_addr=$len;
        $maxsplit_addr=$maxsplit;
        $i=0; //@line 32 "stropmodule.c"
        $countsplit=0; //@line 34 "stropmodule.c"
        var $1=_PyList_New(0); //@line 36 "stropmodule.c"
        $list=$1; //@line 36 "stropmodule.c"
        var $2=$list; //@line 38 "stropmodule.c"
        var $3=($2)==0; //@line 38 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 26; break; } //@line 38 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 39 "stropmodule.c"
        __label__ = 31; break; //@line 39 "stropmodule.c"
      case 2: // $bb3
        var $4=$i; //@line 43 "stropmodule.c"
        var $5=($4) + 1; //@line 43 "stropmodule.c"
        $i=$5; //@line 43 "stropmodule.c"
        __label__ = 3; break; //@line 43 "stropmodule.c"
      case 3: // $bb4
        var $6=$i; //@line 42 "stropmodule.c"
        var $7=$len_addr; //@line 42 "stropmodule.c"
        var $8=($6) >= ($7); //@line 42 "stropmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 42 "stropmodule.c"
      case 4: // $bb5
        var $9=___ctype_b_loc(); //@line 42 "stropmodule.c"
        var $10=HEAP[$9]; //@line 42 "stropmodule.c"
        var $11=$s_addr; //@line 42 "stropmodule.c"
        var $12=$i; //@line 42 "stropmodule.c"
        var $13=$11+$12; //@line 42 "stropmodule.c"
        var $14=HEAP[$13]; //@line 42 "stropmodule.c"
        var $15=($14); //@line 42 "stropmodule.c"
        var $16=$10+2*$15; //@line 42 "stropmodule.c"
        var $17=HEAP[$16]; //@line 42 "stropmodule.c"
        var $18=($17); //@line 42 "stropmodule.c"
        var $19=($18) & 8192; //@line 42 "stropmodule.c"
        var $20=($19)!=0; //@line 42 "stropmodule.c"
        if ($20) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 42 "stropmodule.c"
      case 5: // $bb6
        var $21=$i; //@line 45 "stropmodule.c"
        $j=$21; //@line 45 "stropmodule.c"
        __label__ = 7; break; //@line 45 "stropmodule.c"
      case 6: // $bb7
        var $22=$i; //@line 47 "stropmodule.c"
        var $23=($22) + 1; //@line 47 "stropmodule.c"
        $i=$23; //@line 47 "stropmodule.c"
        __label__ = 7; break; //@line 47 "stropmodule.c"
      case 7: // $bb8
        var $24=$i; //@line 46 "stropmodule.c"
        var $25=$len_addr; //@line 46 "stropmodule.c"
        var $26=($24) >= ($25); //@line 46 "stropmodule.c"
        if ($26) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 46 "stropmodule.c"
      case 8: // $bb9
        var $27=___ctype_b_loc(); //@line 46 "stropmodule.c"
        var $28=HEAP[$27]; //@line 46 "stropmodule.c"
        var $29=$s_addr; //@line 46 "stropmodule.c"
        var $30=$i; //@line 46 "stropmodule.c"
        var $31=$29+$30; //@line 46 "stropmodule.c"
        var $32=HEAP[$31]; //@line 46 "stropmodule.c"
        var $33=($32); //@line 46 "stropmodule.c"
        var $34=$28+2*$33; //@line 46 "stropmodule.c"
        var $35=HEAP[$34]; //@line 46 "stropmodule.c"
        var $36=($35); //@line 46 "stropmodule.c"
        var $37=($36) & 8192; //@line 46 "stropmodule.c"
        var $38=($37)==0; //@line 46 "stropmodule.c"
        if ($38) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 46 "stropmodule.c"
      case 9: // $bb10
        var $39=$j; //@line 49 "stropmodule.c"
        var $40=$i; //@line 49 "stropmodule.c"
        var $41=($39) < ($40); //@line 49 "stropmodule.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 26; break; } //@line 49 "stropmodule.c"
      case 10: // $bb11
        var $42=$i; //@line 50 "stropmodule.c"
        var $43=$j; //@line 50 "stropmodule.c"
        var $44=($42) - ($43); //@line 50 "stropmodule.c"
        var $45=$s_addr; //@line 50 "stropmodule.c"
        var $46=$j; //@line 50 "stropmodule.c"
        var $47=$45+$46; //@line 50 "stropmodule.c"
        var $48=_PyString_FromStringAndSize($47, $44); //@line 50 "stropmodule.c"
        $item=$48; //@line 50 "stropmodule.c"
        var $49=$item; //@line 51 "stropmodule.c"
        var $50=($49)==0; //@line 51 "stropmodule.c"
        if ($50) { __label__ = 28; break; } else { __label__ = 11; break; } //@line 51 "stropmodule.c"
      case 11: // $bb12
        var $51=$list; //@line 54 "stropmodule.c"
        var $52=$item; //@line 54 "stropmodule.c"
        var $53=_PyList_Append($51, $52); //@line 54 "stropmodule.c"
        $err=$53; //@line 54 "stropmodule.c"
        var $54=$item; //@line 55 "stropmodule.c"
        var $55=$54; //@line 55 "stropmodule.c"
        var $56=HEAP[$55]; //@line 55 "stropmodule.c"
        var $57=($56) - 1; //@line 55 "stropmodule.c"
        var $58=$item; //@line 55 "stropmodule.c"
        var $59=$58; //@line 55 "stropmodule.c"
        HEAP[$59]=$57; //@line 55 "stropmodule.c"
        var $60=$item; //@line 55 "stropmodule.c"
        var $61=$60; //@line 55 "stropmodule.c"
        var $62=HEAP[$61]; //@line 55 "stropmodule.c"
        var $63=($62)==0; //@line 55 "stropmodule.c"
        if ($63) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 55 "stropmodule.c"
      case 12: // $bb13
        var $64=$item; //@line 55 "stropmodule.c"
        var $65=$64+4; //@line 55 "stropmodule.c"
        var $66=HEAP[$65]; //@line 55 "stropmodule.c"
        var $67=$66+24; //@line 55 "stropmodule.c"
        var $68=HEAP[$67]; //@line 55 "stropmodule.c"
        var $69=$item; //@line 55 "stropmodule.c"
        FUNCTION_TABLE[$68]($69); //@line 55 "stropmodule.c"
        __label__ = 13; break; //@line 55 "stropmodule.c"
      case 13: // $bb14
        var $70=$err; //@line 56 "stropmodule.c"
        var $71=($70) < 0; //@line 56 "stropmodule.c"
        if ($71) { __label__ = 28; break; } else { __label__ = 14; break; } //@line 56 "stropmodule.c"
      case 14: // $bb15
        var $72=$countsplit; //@line 59 "stropmodule.c"
        var $73=($72) + 1; //@line 59 "stropmodule.c"
        $countsplit=$73; //@line 59 "stropmodule.c"
        __label__ = 16; break; //@line 59 "stropmodule.c"
      case 15: // $bb16
        var $74=$i; //@line 61 "stropmodule.c"
        var $75=($74) + 1; //@line 61 "stropmodule.c"
        $i=$75; //@line 61 "stropmodule.c"
        __label__ = 16; break; //@line 61 "stropmodule.c"
      case 16: // $bb17
        var $76=$i; //@line 60 "stropmodule.c"
        var $77=$len_addr; //@line 60 "stropmodule.c"
        var $78=($76) >= ($77); //@line 60 "stropmodule.c"
        if ($78) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 60 "stropmodule.c"
      case 17: // $bb18
        var $79=___ctype_b_loc(); //@line 60 "stropmodule.c"
        var $80=HEAP[$79]; //@line 60 "stropmodule.c"
        var $81=$s_addr; //@line 60 "stropmodule.c"
        var $82=$i; //@line 60 "stropmodule.c"
        var $83=$81+$82; //@line 60 "stropmodule.c"
        var $84=HEAP[$83]; //@line 60 "stropmodule.c"
        var $85=($84); //@line 60 "stropmodule.c"
        var $86=$80+2*$85; //@line 60 "stropmodule.c"
        var $87=HEAP[$86]; //@line 60 "stropmodule.c"
        var $88=($87); //@line 60 "stropmodule.c"
        var $89=($88) & 8192; //@line 60 "stropmodule.c"
        var $90=($89)!=0; //@line 60 "stropmodule.c"
        if ($90) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 60 "stropmodule.c"
      case 18: // $bb19
        var $91=$maxsplit_addr; //@line 63 "stropmodule.c"
        var $92=($91)!=0; //@line 63 "stropmodule.c"
        if ($92) { __label__ = 19; break; } else { __label__ = 26; break; } //@line 63 "stropmodule.c"
      case 19: // $bb20
        var $93=$countsplit; //@line 63 "stropmodule.c"
        var $94=$maxsplit_addr; //@line 63 "stropmodule.c"
        var $95=($93) >= ($94); //@line 63 "stropmodule.c"
        if ($95) { __label__ = 20; break; } else { __label__ = 26; break; } //@line 63 "stropmodule.c"
      case 20: // $bb21
        var $96=$i; //@line 63 "stropmodule.c"
        var $97=$len_addr; //@line 63 "stropmodule.c"
        var $98=($96) < ($97); //@line 63 "stropmodule.c"
        if ($98) { __label__ = 21; break; } else { __label__ = 26; break; } //@line 63 "stropmodule.c"
      case 21: // $bb22
        var $99=$len_addr; //@line 64 "stropmodule.c"
        var $100=$i; //@line 64 "stropmodule.c"
        var $101=($99) - ($100); //@line 64 "stropmodule.c"
        var $102=$s_addr; //@line 64 "stropmodule.c"
        var $103=$i; //@line 64 "stropmodule.c"
        var $104=$102+$103; //@line 64 "stropmodule.c"
        var $105=_PyString_FromStringAndSize($104, $101); //@line 64 "stropmodule.c"
        $item=$105; //@line 64 "stropmodule.c"
        var $106=$item; //@line 66 "stropmodule.c"
        var $107=($106)==0; //@line 66 "stropmodule.c"
        if ($107) { __label__ = 28; break; } else { __label__ = 22; break; } //@line 66 "stropmodule.c"
      case 22: // $bb23
        var $108=$list; //@line 69 "stropmodule.c"
        var $109=$item; //@line 69 "stropmodule.c"
        var $110=_PyList_Append($108, $109); //@line 69 "stropmodule.c"
        $err=$110; //@line 69 "stropmodule.c"
        var $111=$item; //@line 70 "stropmodule.c"
        var $112=$111; //@line 70 "stropmodule.c"
        var $113=HEAP[$112]; //@line 70 "stropmodule.c"
        var $114=($113) - 1; //@line 70 "stropmodule.c"
        var $115=$item; //@line 70 "stropmodule.c"
        var $116=$115; //@line 70 "stropmodule.c"
        HEAP[$116]=$114; //@line 70 "stropmodule.c"
        var $117=$item; //@line 70 "stropmodule.c"
        var $118=$117; //@line 70 "stropmodule.c"
        var $119=HEAP[$118]; //@line 70 "stropmodule.c"
        var $120=($119)==0; //@line 70 "stropmodule.c"
        if ($120) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 70 "stropmodule.c"
      case 23: // $bb24
        var $121=$item; //@line 70 "stropmodule.c"
        var $122=$121+4; //@line 70 "stropmodule.c"
        var $123=HEAP[$122]; //@line 70 "stropmodule.c"
        var $124=$123+24; //@line 70 "stropmodule.c"
        var $125=HEAP[$124]; //@line 70 "stropmodule.c"
        var $126=$item; //@line 70 "stropmodule.c"
        FUNCTION_TABLE[$125]($126); //@line 70 "stropmodule.c"
        __label__ = 24; break; //@line 70 "stropmodule.c"
      case 24: // $bb25
        var $127=$err; //@line 71 "stropmodule.c"
        var $128=($127) < 0; //@line 71 "stropmodule.c"
        if ($128) { __label__ = 28; break; } else { __label__ = 25; break; } //@line 71 "stropmodule.c"
      case 25: // $bb26
        var $129=$len_addr; //@line 74 "stropmodule.c"
        $i=$129; //@line 74 "stropmodule.c"
        __label__ = 26; break; //@line 74 "stropmodule.c"
      case 26: // $bb27
        var $130=$i; //@line 41 "stropmodule.c"
        var $131=$len_addr; //@line 41 "stropmodule.c"
        var $132=($130) < ($131); //@line 41 "stropmodule.c"
        if ($132) { __label__ = 3; break; } else { __label__ = 27; break; } //@line 41 "stropmodule.c"
      case 27: // $bb28
        var $133=$list; //@line 78 "stropmodule.c"
        $0=$133; //@line 78 "stropmodule.c"
        __label__ = 31; break; //@line 78 "stropmodule.c"
      case 28: // $finally
        var $134=$list; //@line 80 "stropmodule.c"
        var $135=$134; //@line 80 "stropmodule.c"
        var $136=HEAP[$135]; //@line 80 "stropmodule.c"
        var $137=($136) - 1; //@line 80 "stropmodule.c"
        var $138=$list; //@line 80 "stropmodule.c"
        var $139=$138; //@line 80 "stropmodule.c"
        HEAP[$139]=$137; //@line 80 "stropmodule.c"
        var $140=$list; //@line 80 "stropmodule.c"
        var $141=$140; //@line 80 "stropmodule.c"
        var $142=HEAP[$141]; //@line 80 "stropmodule.c"
        var $143=($142)==0; //@line 80 "stropmodule.c"
        if ($143) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 80 "stropmodule.c"
      case 29: // $bb29
        var $144=$list; //@line 80 "stropmodule.c"
        var $145=$144+4; //@line 80 "stropmodule.c"
        var $146=HEAP[$145]; //@line 80 "stropmodule.c"
        var $147=$146+24; //@line 80 "stropmodule.c"
        var $148=HEAP[$147]; //@line 80 "stropmodule.c"
        var $149=$list; //@line 80 "stropmodule.c"
        FUNCTION_TABLE[$148]($149); //@line 80 "stropmodule.c"
        __label__ = 30; break; //@line 80 "stropmodule.c"
      case 30: // $bb30
        $0=0; //@line 81 "stropmodule.c"
        __label__ = 31; break; //@line 81 "stropmodule.c"
      case 31: // $bb31
        var $150=$0; //@line 39 "stropmodule.c"
        $retval=$150; //@line 39 "stropmodule.c"
        var $retval32=$retval; //@line 39 "stropmodule.c"
        ;
        return $retval32; //@line 39 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_splitfields($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $len=__stackBase__;
        var $n=__stackBase__+4;
        var $i;
        var $j;
        var $err;
        var $splitcount;
        var $maxsplit=__stackBase__+8;
        var $s=__stackBase__+12;
        var $sub=__stackBase__+16;
        var $list;
        var $item;
        $self_addr=$self;
        $args_addr=$args;
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 104 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, __str, 1); //@line 104 "stropmodule.c"
        var $3=($2)!=0; //@line 104 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 104 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 104 "stropmodule.c"
        __label__ = 30; break; //@line 104 "stropmodule.c"
      case 2: // $bb1
        HEAP[$sub]=0; //@line 105 "stropmodule.c"
        HEAP[$n]=0; //@line 106 "stropmodule.c"
        $splitcount=0; //@line 107 "stropmodule.c"
        HEAP[$maxsplit]=0; //@line 108 "stropmodule.c"
        var $4=$args_addr; //@line 109 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, __str1, allocate([$s,0,0,0,$len,0,0,0,$sub,0,0,0,$n,0,0,0,$maxsplit,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 109 "stropmodule.c"
        var $6=($5)==0; //@line 109 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 109 "stropmodule.c"
      case 3: // $bb2
        $0=0; //@line 110 "stropmodule.c"
        __label__ = 30; break; //@line 110 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$sub]; //@line 111 "stropmodule.c"
        var $8=($7)==0; //@line 111 "stropmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 111 "stropmodule.c"
      case 5: // $bb4
        var $9=HEAP[$maxsplit]; //@line 112 "stropmodule.c"
        var $10=HEAP[$len]; //@line 112 "stropmodule.c"
        var $11=HEAP[$s]; //@line 112 "stropmodule.c"
        var $12=_split_whitespace($11, $10, $9); //@line 112 "stropmodule.c"
        $0=$12; //@line 112 "stropmodule.c"
        __label__ = 30; break; //@line 112 "stropmodule.c"
      case 6: // $bb5
        var $13=HEAP[$n]; //@line 113 "stropmodule.c"
        var $14=($13)==0; //@line 113 "stropmodule.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 113 "stropmodule.c"
      case 7: // $bb6
        var $15=HEAP[_PyExc_ValueError]; //@line 114 "stropmodule.c"
        _PyErr_SetString($15, __str2); //@line 114 "stropmodule.c"
        $0=0; //@line 115 "stropmodule.c"
        __label__ = 30; break; //@line 115 "stropmodule.c"
      case 8: // $bb7
        var $16=_PyList_New(0); //@line 118 "stropmodule.c"
        $list=$16; //@line 118 "stropmodule.c"
        var $17=$list; //@line 119 "stropmodule.c"
        var $18=($17)==0; //@line 119 "stropmodule.c"
        if ($18) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 119 "stropmodule.c"
      case 9: // $bb8
        $0=0; //@line 120 "stropmodule.c"
        __label__ = 30; break; //@line 120 "stropmodule.c"
      case 10: // $bb9
        $j=0; //@line 122 "stropmodule.c"
        var $19=$j; //@line 122 "stropmodule.c"
        $i=$19; //@line 122 "stropmodule.c"
        __label__ = 21; break; //@line 122 "stropmodule.c"
      case 11: // $bb10
        var $20=HEAP[$s]; //@line 124 "stropmodule.c"
        var $21=$i; //@line 124 "stropmodule.c"
        var $22=$20+$21; //@line 124 "stropmodule.c"
        var $23=HEAP[$22]; //@line 124 "stropmodule.c"
        var $24=HEAP[$sub]; //@line 124 "stropmodule.c"
        var $25=$24; //@line 124 "stropmodule.c"
        var $26=HEAP[$25]; //@line 124 "stropmodule.c"
        var $27=($23)!=($26); //@line 124 "stropmodule.c"
        if ($27) { __label__ = 20; break; } else { __label__ = 12; break; } //@line 124 "stropmodule.c"
      case 12: // $bb11
        var $28=HEAP[$n]; //@line 124 "stropmodule.c"
        var $29=($28)==1; //@line 124 "stropmodule.c"
        if ($29) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 124 "stropmodule.c"
      case 13: // $bb12
        var $30=HEAP[$n]; //@line 124 "stropmodule.c"
        var $31=HEAP[$sub]; //@line 124 "stropmodule.c"
        var $32=HEAP[$s]; //@line 124 "stropmodule.c"
        var $33=$i; //@line 124 "stropmodule.c"
        var $34=$32+$33; //@line 124 "stropmodule.c"
        var $35=_memcmp($34, $31, $30); //@line 124 "stropmodule.c"
        var $36=($35)==0; //@line 124 "stropmodule.c"
        if ($36) { __label__ = 14; break; } else { __label__ = 20; break; } //@line 124 "stropmodule.c"
      case 14: // $bb13
        var $37=$i; //@line 125 "stropmodule.c"
        var $38=$j; //@line 125 "stropmodule.c"
        var $39=($37) - ($38); //@line 125 "stropmodule.c"
        var $40=HEAP[$s]; //@line 125 "stropmodule.c"
        var $41=$j; //@line 125 "stropmodule.c"
        var $42=$40+$41; //@line 125 "stropmodule.c"
        var $43=_PyString_FromStringAndSize($42, $39); //@line 125 "stropmodule.c"
        $item=$43; //@line 125 "stropmodule.c"
        var $44=($43)==0; //@line 126 "stropmodule.c"
        if ($44) { __label__ = 27; break; } else { __label__ = 15; break; } //@line 126 "stropmodule.c"
      case 15: // $bb14
        var $45=$list; //@line 128 "stropmodule.c"
        var $46=$item; //@line 128 "stropmodule.c"
        var $47=_PyList_Append($45, $46); //@line 128 "stropmodule.c"
        $err=$47; //@line 128 "stropmodule.c"
        var $48=$item; //@line 129 "stropmodule.c"
        var $49=$48; //@line 129 "stropmodule.c"
        var $50=HEAP[$49]; //@line 129 "stropmodule.c"
        var $51=($50) - 1; //@line 129 "stropmodule.c"
        var $52=$item; //@line 129 "stropmodule.c"
        var $53=$52; //@line 129 "stropmodule.c"
        HEAP[$53]=$51; //@line 129 "stropmodule.c"
        var $54=$item; //@line 129 "stropmodule.c"
        var $55=$54; //@line 129 "stropmodule.c"
        var $56=HEAP[$55]; //@line 129 "stropmodule.c"
        var $57=($56)==0; //@line 129 "stropmodule.c"
        if ($57) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 129 "stropmodule.c"
      case 16: // $bb15
        var $58=$item; //@line 129 "stropmodule.c"
        var $59=$58+4; //@line 129 "stropmodule.c"
        var $60=HEAP[$59]; //@line 129 "stropmodule.c"
        var $61=$60+24; //@line 129 "stropmodule.c"
        var $62=HEAP[$61]; //@line 129 "stropmodule.c"
        var $63=$item; //@line 129 "stropmodule.c"
        FUNCTION_TABLE[$62]($63); //@line 129 "stropmodule.c"
        __label__ = 17; break; //@line 129 "stropmodule.c"
      case 17: // $bb16
        var $64=$err; //@line 130 "stropmodule.c"
        var $65=($64) < 0; //@line 130 "stropmodule.c"
        if ($65) { __label__ = 27; break; } else { __label__ = 18; break; } //@line 130 "stropmodule.c"
      case 18: // $bb17
        var $66=HEAP[$n]; //@line 132 "stropmodule.c"
        var $67=$i; //@line 132 "stropmodule.c"
        var $68=($67) + ($66); //@line 132 "stropmodule.c"
        $j=$68; //@line 132 "stropmodule.c"
        var $69=$j; //@line 132 "stropmodule.c"
        $i=$69; //@line 132 "stropmodule.c"
        var $70=$splitcount; //@line 133 "stropmodule.c"
        var $71=($70) + 1; //@line 133 "stropmodule.c"
        $splitcount=$71; //@line 133 "stropmodule.c"
        var $72=HEAP[$maxsplit]; //@line 134 "stropmodule.c"
        var $73=($72)!=0; //@line 134 "stropmodule.c"
        if ($73) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 134 "stropmodule.c"
      case 19: // $bb18
        var $74=HEAP[$maxsplit]; //@line 134 "stropmodule.c"
        var $75=$splitcount; //@line 134 "stropmodule.c"
        var $76=($75) >= ($74); //@line 134 "stropmodule.c"
        if ($76) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 134 "stropmodule.c"
      case 20: // $bb20
        var $77=$i; //@line 138 "stropmodule.c"
        var $78=($77) + 1; //@line 138 "stropmodule.c"
        $i=$78; //@line 138 "stropmodule.c"
        __label__ = 21; break; //@line 138 "stropmodule.c"
      case 21: // $bb21
        var $79=HEAP[$n]; //@line 123 "stropmodule.c"
        var $80=$i; //@line 123 "stropmodule.c"
        var $81=($80) + ($79); //@line 123 "stropmodule.c"
        var $82=HEAP[$len]; //@line 123 "stropmodule.c"
        var $83=($81) <= ($82); //@line 123 "stropmodule.c"
        if ($83) { __label__ = 11; break; } else { __label__ = 22; break; } //@line 123 "stropmodule.c"
      case 22: // $bb22
        var $84=HEAP[$len]; //@line 140 "stropmodule.c"
        var $85=$j; //@line 140 "stropmodule.c"
        var $86=($84) - ($85); //@line 140 "stropmodule.c"
        var $87=HEAP[$s]; //@line 140 "stropmodule.c"
        var $88=$j; //@line 140 "stropmodule.c"
        var $89=$87+$88; //@line 140 "stropmodule.c"
        var $90=_PyString_FromStringAndSize($89, $86); //@line 140 "stropmodule.c"
        $item=$90; //@line 140 "stropmodule.c"
        var $91=($90)==0; //@line 141 "stropmodule.c"
        if ($91) { __label__ = 27; break; } else { __label__ = 23; break; } //@line 141 "stropmodule.c"
      case 23: // $bb23
        var $92=$list; //@line 143 "stropmodule.c"
        var $93=$item; //@line 143 "stropmodule.c"
        var $94=_PyList_Append($92, $93); //@line 143 "stropmodule.c"
        $err=$94; //@line 143 "stropmodule.c"
        var $95=$item; //@line 144 "stropmodule.c"
        var $96=$95; //@line 144 "stropmodule.c"
        var $97=HEAP[$96]; //@line 144 "stropmodule.c"
        var $98=($97) - 1; //@line 144 "stropmodule.c"
        var $99=$item; //@line 144 "stropmodule.c"
        var $100=$99; //@line 144 "stropmodule.c"
        HEAP[$100]=$98; //@line 144 "stropmodule.c"
        var $101=$item; //@line 144 "stropmodule.c"
        var $102=$101; //@line 144 "stropmodule.c"
        var $103=HEAP[$102]; //@line 144 "stropmodule.c"
        var $104=($103)==0; //@line 144 "stropmodule.c"
        if ($104) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 144 "stropmodule.c"
      case 24: // $bb24
        var $105=$item; //@line 144 "stropmodule.c"
        var $106=$105+4; //@line 144 "stropmodule.c"
        var $107=HEAP[$106]; //@line 144 "stropmodule.c"
        var $108=$107+24; //@line 144 "stropmodule.c"
        var $109=HEAP[$108]; //@line 144 "stropmodule.c"
        var $110=$item; //@line 144 "stropmodule.c"
        FUNCTION_TABLE[$109]($110); //@line 144 "stropmodule.c"
        __label__ = 25; break; //@line 144 "stropmodule.c"
      case 25: // $bb25
        var $111=$err; //@line 145 "stropmodule.c"
        var $112=($111) < 0; //@line 145 "stropmodule.c"
        if ($112) { __label__ = 27; break; } else { __label__ = 26; break; } //@line 145 "stropmodule.c"
      case 26: // $bb26
        var $113=$list; //@line 148 "stropmodule.c"
        $0=$113; //@line 148 "stropmodule.c"
        __label__ = 30; break; //@line 148 "stropmodule.c"
      case 27: // $fail
        var $114=$list; //@line 151 "stropmodule.c"
        var $115=$114; //@line 151 "stropmodule.c"
        var $116=HEAP[$115]; //@line 151 "stropmodule.c"
        var $117=($116) - 1; //@line 151 "stropmodule.c"
        var $118=$list; //@line 151 "stropmodule.c"
        var $119=$118; //@line 151 "stropmodule.c"
        HEAP[$119]=$117; //@line 151 "stropmodule.c"
        var $120=$list; //@line 151 "stropmodule.c"
        var $121=$120; //@line 151 "stropmodule.c"
        var $122=HEAP[$121]; //@line 151 "stropmodule.c"
        var $123=($122)==0; //@line 151 "stropmodule.c"
        if ($123) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 151 "stropmodule.c"
      case 28: // $bb27
        var $124=$list; //@line 151 "stropmodule.c"
        var $125=$124+4; //@line 151 "stropmodule.c"
        var $126=HEAP[$125]; //@line 151 "stropmodule.c"
        var $127=$126+24; //@line 151 "stropmodule.c"
        var $128=HEAP[$127]; //@line 151 "stropmodule.c"
        var $129=$list; //@line 151 "stropmodule.c"
        FUNCTION_TABLE[$128]($129); //@line 151 "stropmodule.c"
        __label__ = 29; break; //@line 151 "stropmodule.c"
      case 29: // $bb28
        $0=0; //@line 152 "stropmodule.c"
        __label__ = 30; break; //@line 152 "stropmodule.c"
      case 30: // $bb29
        var $130=$0; //@line 104 "stropmodule.c"
        $retval=$130; //@line 104 "stropmodule.c"
        var $retval30=$retval; //@line 104 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval30; //@line 104 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_joinfields($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $seq=__stackBase__;
        var $sep=__stackBase__+4;
        var $seqlen;
        var $seplen=__stackBase__+8;
        var $i;
        var $reslen;
        var $slen;
        var $sz;
        var $res=__stackBase__+12;
        var $p;
        var $getitemfunc;
        var $item;
        var $item20;
        var $item44;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$sep]=0; //@line 170 "stropmodule.c"
        HEAP[$seplen]=0; //@line 171 "stropmodule.c"
        $reslen=0; //@line 172 "stropmodule.c"
        $slen=0; //@line 172 "stropmodule.c"
        $sz=100; //@line 172 "stropmodule.c"
        HEAP[$res]=0; //@line 173 "stropmodule.c"
        $p=0; //@line 174 "stropmodule.c"
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 177 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, __str, 1); //@line 177 "stropmodule.c"
        var $3=($2)!=0; //@line 177 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 177 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 177 "stropmodule.c"
        __label__ = 72; break; //@line 177 "stropmodule.c"
      case 2: // $bb1
        var $4=$args_addr; //@line 178 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, __str3, allocate([$seq,0,0,0,$sep,0,0,0,$seplen,0,0,0], ["%struct.PyObject**",0,0,0,"i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 178 "stropmodule.c"
        var $6=($5)==0; //@line 178 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 178 "stropmodule.c"
      case 3: // $bb2
        $0=0; //@line 179 "stropmodule.c"
        __label__ = 72; break; //@line 179 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$sep]; //@line 180 "stropmodule.c"
        var $8=($7)==0; //@line 180 "stropmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 180 "stropmodule.c"
      case 5: // $bb4
        HEAP[$sep]=__str4; //@line 181 "stropmodule.c"
        HEAP[$seplen]=1; //@line 182 "stropmodule.c"
        __label__ = 6; break; //@line 182 "stropmodule.c"
      case 6: // $bb5
        var $9=HEAP[$seq]; //@line 185 "stropmodule.c"
        var $10=_PySequence_Size($9); //@line 185 "stropmodule.c"
        $seqlen=$10; //@line 185 "stropmodule.c"
        var $11=($10) < 0; //@line 186 "stropmodule.c"
        if ($11) { __lastLabel__ = 6; __label__ = 7; break; } else { __lastLabel__ = 6; __label__ = 10; break; } //@line 186 "stropmodule.c"
      case 7: // $bb6
        var $12=_PyErr_Occurred(); //@line 186 "stropmodule.c"
        var $13=($12)!=0; //@line 186 "stropmodule.c"
        if ($13) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 186 "stropmodule.c"
      case 8: // $bb7
        $0=0; //@line 187 "stropmodule.c"
        __label__ = 72; break; //@line 187 "stropmodule.c"
      case 9: // $bb8thread_pre_split
        var $_pr=$seqlen;
        __lastLabel__ = 9; __label__ = 10; break;
      case 10: // $bb8
        var $14=__lastLabel__ == 9 ? $_pr : ($10);
        var $15=($14)==1; //@line 189 "stropmodule.c"
        if ($15) { __label__ = 11; break; } else { __label__ = 17; break; } //@line 189 "stropmodule.c"
      case 11: // $bb9
        var $16=HEAP[$seq]; //@line 191 "stropmodule.c"
        var $17=_PySequence_GetItem($16, 0); //@line 191 "stropmodule.c"
        $item=$17; //@line 191 "stropmodule.c"
        var $18=$item; //@line 192 "stropmodule.c"
        var $19=($18)!=0; //@line 192 "stropmodule.c"
        if ($19) { __label__ = 12; break; } else { __label__ = 16; break; } //@line 192 "stropmodule.c"
      case 12: // $bb10
        var $20=$item; //@line 192 "stropmodule.c"
        var $21=$20+4; //@line 192 "stropmodule.c"
        var $22=HEAP[$21]; //@line 192 "stropmodule.c"
        var $23=$22+84; //@line 192 "stropmodule.c"
        var $24=HEAP[$23]; //@line 192 "stropmodule.c"
        var $25=($24) & 134217728; //@line 192 "stropmodule.c"
        var $26=($25)==0; //@line 192 "stropmodule.c"
        if ($26) { __label__ = 13; break; } else { __label__ = 16; break; } //@line 192 "stropmodule.c"
      case 13: // $bb11
        var $27=HEAP[_PyExc_TypeError]; //@line 193 "stropmodule.c"
        _PyErr_SetString($27, __str5); //@line 193 "stropmodule.c"
        var $28=$item; //@line 195 "stropmodule.c"
        var $29=$28; //@line 195 "stropmodule.c"
        var $30=HEAP[$29]; //@line 195 "stropmodule.c"
        var $31=($30) - 1; //@line 195 "stropmodule.c"
        var $32=$item; //@line 195 "stropmodule.c"
        var $33=$32; //@line 195 "stropmodule.c"
        HEAP[$33]=$31; //@line 195 "stropmodule.c"
        var $34=$item; //@line 195 "stropmodule.c"
        var $35=$34; //@line 195 "stropmodule.c"
        var $36=HEAP[$35]; //@line 195 "stropmodule.c"
        var $37=($36)==0; //@line 195 "stropmodule.c"
        if ($37) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 195 "stropmodule.c"
      case 14: // $bb12
        var $38=$item; //@line 195 "stropmodule.c"
        var $39=$38+4; //@line 195 "stropmodule.c"
        var $40=HEAP[$39]; //@line 195 "stropmodule.c"
        var $41=$40+24; //@line 195 "stropmodule.c"
        var $42=HEAP[$41]; //@line 195 "stropmodule.c"
        var $43=$item; //@line 195 "stropmodule.c"
        FUNCTION_TABLE[$42]($43); //@line 195 "stropmodule.c"
        __label__ = 15; break; //@line 195 "stropmodule.c"
      case 15: // $bb13
        $0=0; //@line 196 "stropmodule.c"
        __label__ = 72; break; //@line 196 "stropmodule.c"
      case 16: // $bb14
        var $44=$item; //@line 198 "stropmodule.c"
        $0=$44; //@line 198 "stropmodule.c"
        __label__ = 72; break; //@line 198 "stropmodule.c"
      case 17: // $bb15
        var $45=$sz; //@line 201 "stropmodule.c"
        var $46=_PyString_FromStringAndSize(0, $45); //@line 201 "stropmodule.c"
        HEAP[$res]=$46; //@line 201 "stropmodule.c"
        var $47=HEAP[$res]; //@line 201 "stropmodule.c"
        var $48=($47)==0; //@line 201 "stropmodule.c"
        if ($48) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 201 "stropmodule.c"
      case 18: // $bb16
        $0=0; //@line 202 "stropmodule.c"
        __label__ = 72; break; //@line 202 "stropmodule.c"
      case 19: // $bb17
        var $49=HEAP[$res]; //@line 203 "stropmodule.c"
        var $50=_PyString_AsString($49); //@line 203 "stropmodule.c"
        $p=$50; //@line 203 "stropmodule.c"
        var $51=HEAP[$seq]; //@line 209 "stropmodule.c"
        var $52=$51+4; //@line 209 "stropmodule.c"
        var $53=HEAP[$52]; //@line 209 "stropmodule.c"
        var $54=$53+84; //@line 209 "stropmodule.c"
        var $55=HEAP[$54]; //@line 209 "stropmodule.c"
        var $56=($55) & 33554432; //@line 209 "stropmodule.c"
        var $57=($56)!=0; //@line 209 "stropmodule.c"
        if ($57) { __label__ = 20; break; } else { __label__ = 39; break; } //@line 209 "stropmodule.c"
      case 20: // $bb18
        $i=0; //@line 210 "stropmodule.c"
        __label__ = 37; break; //@line 210 "stropmodule.c"
      case 21: // $bb19
        var $58=HEAP[$seq]; //@line 211 "stropmodule.c"
        var $59=$58; //@line 211 "stropmodule.c"
        var $60=$59+12; //@line 211 "stropmodule.c"
        var $61=HEAP[$60]; //@line 211 "stropmodule.c"
        var $62=$i; //@line 211 "stropmodule.c"
        var $63=$61+4*$62; //@line 211 "stropmodule.c"
        var $64=HEAP[$63]; //@line 211 "stropmodule.c"
        $item20=$64; //@line 211 "stropmodule.c"
        var $65=$item20; //@line 212 "stropmodule.c"
        var $66=$65+4; //@line 212 "stropmodule.c"
        var $67=HEAP[$66]; //@line 212 "stropmodule.c"
        var $68=$67+84; //@line 212 "stropmodule.c"
        var $69=HEAP[$68]; //@line 212 "stropmodule.c"
        var $70=($69) & 134217728; //@line 212 "stropmodule.c"
        var $71=($70)==0; //@line 212 "stropmodule.c"
        if ($71) { __label__ = 22; break; } else { __label__ = 25; break; } //@line 212 "stropmodule.c"
      case 22: // $bb21
        var $72=HEAP[_PyExc_TypeError]; //@line 213 "stropmodule.c"
        _PyErr_SetString($72, __str5); //@line 213 "stropmodule.c"
        var $73=HEAP[$res]; //@line 215 "stropmodule.c"
        var $74=$73; //@line 215 "stropmodule.c"
        var $75=HEAP[$74]; //@line 215 "stropmodule.c"
        var $76=($75) - 1; //@line 215 "stropmodule.c"
        var $77=$73; //@line 215 "stropmodule.c"
        HEAP[$77]=$76; //@line 215 "stropmodule.c"
        var $78=$73; //@line 215 "stropmodule.c"
        var $79=HEAP[$78]; //@line 215 "stropmodule.c"
        var $80=($79)==0; //@line 215 "stropmodule.c"
        if ($80) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 215 "stropmodule.c"
      case 23: // $bb22
        var $81=HEAP[$res]; //@line 215 "stropmodule.c"
        var $82=$81+4; //@line 215 "stropmodule.c"
        var $83=HEAP[$82]; //@line 215 "stropmodule.c"
        var $84=$83+24; //@line 215 "stropmodule.c"
        var $85=HEAP[$84]; //@line 215 "stropmodule.c"
        var $86=HEAP[$res]; //@line 215 "stropmodule.c"
        FUNCTION_TABLE[$85]($86); //@line 215 "stropmodule.c"
        __label__ = 24; break; //@line 215 "stropmodule.c"
      case 24: // $bb23
        $0=0; //@line 216 "stropmodule.c"
        __label__ = 72; break; //@line 216 "stropmodule.c"
      case 25: // $bb24
        var $87=$item20; //@line 218 "stropmodule.c"
        var $88=$87; //@line 218 "stropmodule.c"
        var $89=$88+8; //@line 218 "stropmodule.c"
        var $90=HEAP[$89]; //@line 218 "stropmodule.c"
        $slen=$90; //@line 218 "stropmodule.c"
        var $91=$reslen; //@line 219 "stropmodule.c"
        var $92=2147483647 - ($91); //@line 219 "stropmodule.c"
        var $93=$slen; //@line 219 "stropmodule.c"
        var $94=($92) < ($93); //@line 219 "stropmodule.c"
        if ($94) { __label__ = 27; break; } else { __label__ = 26; break; } //@line 219 "stropmodule.c"
      case 26: // $bb25
        var $95=$reslen; //@line 219 "stropmodule.c"
        var $_neg=0 - ($95);
        var $96=HEAP[$seplen]; //@line 219 "stropmodule.c"
        var $_neg1=0 - ($96);
        var $97=($_neg) + 2147483647;
        var $98=($97) + ($_neg1);
        var $99=HEAP[$seplen]; //@line 219 "stropmodule.c"
        var $100=($98) < ($99); //@line 219 "stropmodule.c"
        if ($100) { __label__ = 27; break; } else { __label__ = 33; break; } //@line 219 "stropmodule.c"
      case 27: // $bb26
        var $101=HEAP[_PyExc_OverflowError]; //@line 221 "stropmodule.c"
        _PyErr_SetString($101, __str6); //@line 221 "stropmodule.c"
        var $102=HEAP[$res]; //@line 223 "stropmodule.c"
        var $103=$102; //@line 223 "stropmodule.c"
        var $104=HEAP[$103]; //@line 223 "stropmodule.c"
        var $105=($104) - 1; //@line 223 "stropmodule.c"
        var $106=$102; //@line 223 "stropmodule.c"
        HEAP[$106]=$105; //@line 223 "stropmodule.c"
        var $107=$102; //@line 223 "stropmodule.c"
        var $108=HEAP[$107]; //@line 223 "stropmodule.c"
        var $109=($108)==0; //@line 223 "stropmodule.c"
        if ($109) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 223 "stropmodule.c"
      case 28: // $bb27
        var $110=HEAP[$res]; //@line 223 "stropmodule.c"
        var $111=$110+4; //@line 223 "stropmodule.c"
        var $112=HEAP[$111]; //@line 223 "stropmodule.c"
        var $113=$112+24; //@line 223 "stropmodule.c"
        var $114=HEAP[$113]; //@line 223 "stropmodule.c"
        var $115=HEAP[$res]; //@line 223 "stropmodule.c"
        FUNCTION_TABLE[$114]($115); //@line 223 "stropmodule.c"
        __label__ = 29; break; //@line 223 "stropmodule.c"
      case 29: // $bb28
        $0=0; //@line 224 "stropmodule.c"
        __label__ = 72; break; //@line 224 "stropmodule.c"
      case 30: // $bb30
        var $116=$sz; //@line 227 "stropmodule.c"
        var $117=($116) * 2; //@line 227 "stropmodule.c"
        var $118=__PyString_Resize($res, $117); //@line 227 "stropmodule.c"
        var $119=($118) < 0; //@line 227 "stropmodule.c"
        if ($119) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 227 "stropmodule.c"
      case 31: // $bb31
        $0=0; //@line 228 "stropmodule.c"
        __label__ = 72; break; //@line 228 "stropmodule.c"
      case 32: // $bb32
        var $120=$sz; //@line 229 "stropmodule.c"
        var $121=($120) * 2; //@line 229 "stropmodule.c"
        $sz=$121; //@line 229 "stropmodule.c"
        var $122=HEAP[$res]; //@line 230 "stropmodule.c"
        var $123=_PyString_AsString($122); //@line 230 "stropmodule.c"
        var $124=$reslen; //@line 230 "stropmodule.c"
        var $125=$123+$124; //@line 230 "stropmodule.c"
        $p=$125; //@line 230 "stropmodule.c"
        __label__ = 33; break; //@line 230 "stropmodule.c"
      case 33: // $bb33
        var $126=$reslen; //@line 226 "stropmodule.c"
        var $127=$slen; //@line 226 "stropmodule.c"
        var $128=HEAP[$seplen]; //@line 226 "stropmodule.c"
        var $129=($127) + ($126); //@line 226 "stropmodule.c"
        var $130=($129) + ($128); //@line 226 "stropmodule.c"
        var $131=$sz; //@line 226 "stropmodule.c"
        var $132=($130) >= ($131); //@line 226 "stropmodule.c"
        if ($132) { __label__ = 30; break; } else { __label__ = 34; break; } //@line 226 "stropmodule.c"
      case 34: // $bb34
        var $133=$i; //@line 232 "stropmodule.c"
        var $134=($133) > 0; //@line 232 "stropmodule.c"
        if ($134) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 232 "stropmodule.c"
      case 35: // $bb35
        var $135=HEAP[$seplen]; //@line 233 "stropmodule.c"
        var $136=HEAP[$sep]; //@line 233 "stropmodule.c"
        var $137=$p; //@line 233 "stropmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($137, $136, $135, 1, 0); //@line 233 "stropmodule.c"
        var $138=HEAP[$seplen]; //@line 234 "stropmodule.c"
        var $139=$p; //@line 234 "stropmodule.c"
        var $140=$139+$138; //@line 234 "stropmodule.c"
        $p=$140; //@line 234 "stropmodule.c"
        var $141=HEAP[$seplen]; //@line 235 "stropmodule.c"
        var $142=$reslen; //@line 235 "stropmodule.c"
        var $143=($142) + ($141); //@line 235 "stropmodule.c"
        $reslen=$143; //@line 235 "stropmodule.c"
        __label__ = 36; break; //@line 235 "stropmodule.c"
      case 36: // $bb36
        var $144=$slen; //@line 237 "stropmodule.c"
        var $145=$item20; //@line 237 "stropmodule.c"
        var $146=$145; //@line 237 "stropmodule.c"
        var $147=$146+20; //@line 237 "stropmodule.c"
        var $148=$147; //@line 237 "stropmodule.c"
        var $149=$p; //@line 237 "stropmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($149, $148, $144, 1, 0); //@line 237 "stropmodule.c"
        var $150=$p; //@line 238 "stropmodule.c"
        var $151=$slen; //@line 238 "stropmodule.c"
        var $152=$150+$151; //@line 238 "stropmodule.c"
        $p=$152; //@line 238 "stropmodule.c"
        var $153=$reslen; //@line 239 "stropmodule.c"
        var $154=$slen; //@line 239 "stropmodule.c"
        var $155=($154) + ($153); //@line 239 "stropmodule.c"
        $reslen=$155; //@line 239 "stropmodule.c"
        var $156=$i; //@line 210 "stropmodule.c"
        var $157=($156) + 1; //@line 210 "stropmodule.c"
        $i=$157; //@line 210 "stropmodule.c"
        __label__ = 37; break; //@line 210 "stropmodule.c"
      case 37: // $bb37
        var $158=$i; //@line 210 "stropmodule.c"
        var $159=$seqlen; //@line 210 "stropmodule.c"
        var $160=($158) < ($159); //@line 210 "stropmodule.c"
        if ($160) { __label__ = 21; break; } else { __label__ = 38; break; } //@line 210 "stropmodule.c"
      case 38: // $bb38
        var $161=$reslen; //@line 241 "stropmodule.c"
        var $162=__PyString_Resize($res, $161); //@line 241 "stropmodule.c"
        var $163=HEAP[$res]; //@line 242 "stropmodule.c"
        $0=$163; //@line 242 "stropmodule.c"
        __label__ = 72; break; //@line 242 "stropmodule.c"
      case 39: // $bb39
        var $164=HEAP[$seq]; //@line 245 "stropmodule.c"
        var $165=$164+4; //@line 245 "stropmodule.c"
        var $166=HEAP[$165]; //@line 245 "stropmodule.c"
        var $167=$166+52; //@line 245 "stropmodule.c"
        var $168=HEAP[$167]; //@line 245 "stropmodule.c"
        var $169=($168)==0; //@line 245 "stropmodule.c"
        if ($169) { __label__ = 41; break; } else { __label__ = 40; break; } //@line 245 "stropmodule.c"
      case 40: // $bb40
        var $170=HEAP[$seq]; //@line 245 "stropmodule.c"
        var $171=$170+4; //@line 245 "stropmodule.c"
        var $172=HEAP[$171]; //@line 245 "stropmodule.c"
        var $173=$172+52; //@line 245 "stropmodule.c"
        var $174=HEAP[$173]; //@line 245 "stropmodule.c"
        var $175=$174+12; //@line 245 "stropmodule.c"
        var $176=HEAP[$175]; //@line 245 "stropmodule.c"
        $getitemfunc=$176; //@line 245 "stropmodule.c"
        var $177=$getitemfunc; //@line 245 "stropmodule.c"
        var $178=($177)==0; //@line 245 "stropmodule.c"
        if ($178) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 245 "stropmodule.c"
      case 41: // $bb41
        var $179=HEAP[_PyExc_TypeError]; //@line 248 "stropmodule.c"
        _PyErr_SetString($179, __str7); //@line 248 "stropmodule.c"
        $0=0; //@line 250 "stropmodule.c"
        __label__ = 72; break; //@line 250 "stropmodule.c"
      case 42: // $bb42
        $i=0; //@line 253 "stropmodule.c"
        __label__ = 70; break; //@line 253 "stropmodule.c"
      case 43: // $bb43
        var $180=HEAP[$seq]; //@line 254 "stropmodule.c"
        var $181=$getitemfunc; //@line 254 "stropmodule.c"
        var $182=$i; //@line 254 "stropmodule.c"
        var $183=FUNCTION_TABLE[$181]($180, $182); //@line 254 "stropmodule.c"
        $item44=$183; //@line 254 "stropmodule.c"
        var $184=$item44; //@line 255 "stropmodule.c"
        var $185=($184)==0; //@line 255 "stropmodule.c"
        if ($185) { __label__ = 45; break; } else { __label__ = 44; break; } //@line 255 "stropmodule.c"
      case 44: // $bb45
        var $186=$item44; //@line 255 "stropmodule.c"
        var $187=$186+4; //@line 255 "stropmodule.c"
        var $188=HEAP[$187]; //@line 255 "stropmodule.c"
        var $189=$188+84; //@line 255 "stropmodule.c"
        var $190=HEAP[$189]; //@line 255 "stropmodule.c"
        var $191=($190) & 134217728; //@line 255 "stropmodule.c"
        var $192=($191)==0; //@line 255 "stropmodule.c"
        if ($192) { __label__ = 45; break; } else { __label__ = 51; break; } //@line 255 "stropmodule.c"
      case 45: // $bb46
        var $193=HEAP[_PyExc_TypeError]; //@line 256 "stropmodule.c"
        _PyErr_SetString($193, __str5); //@line 256 "stropmodule.c"
        var $194=HEAP[$res]; //@line 258 "stropmodule.c"
        var $195=$194; //@line 258 "stropmodule.c"
        var $196=HEAP[$195]; //@line 258 "stropmodule.c"
        var $197=($196) - 1; //@line 258 "stropmodule.c"
        var $198=$194; //@line 258 "stropmodule.c"
        HEAP[$198]=$197; //@line 258 "stropmodule.c"
        var $199=$194; //@line 258 "stropmodule.c"
        var $200=HEAP[$199]; //@line 258 "stropmodule.c"
        var $201=($200)==0; //@line 258 "stropmodule.c"
        if ($201) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 258 "stropmodule.c"
      case 46: // $bb47
        var $202=HEAP[$res]; //@line 258 "stropmodule.c"
        var $203=$202+4; //@line 258 "stropmodule.c"
        var $204=HEAP[$203]; //@line 258 "stropmodule.c"
        var $205=$204+24; //@line 258 "stropmodule.c"
        var $206=HEAP[$205]; //@line 258 "stropmodule.c"
        var $207=HEAP[$res]; //@line 258 "stropmodule.c"
        FUNCTION_TABLE[$206]($207); //@line 258 "stropmodule.c"
        __label__ = 47; break; //@line 258 "stropmodule.c"
      case 47: // $bb48
        var $208=$item44; //@line 259 "stropmodule.c"
        var $209=($208)!=0; //@line 259 "stropmodule.c"
        if ($209) { __label__ = 48; break; } else { __label__ = 50; break; } //@line 259 "stropmodule.c"
      case 48: // $bb49
        var $210=$item44; //@line 259 "stropmodule.c"
        var $211=$210; //@line 259 "stropmodule.c"
        var $212=HEAP[$211]; //@line 259 "stropmodule.c"
        var $213=($212) - 1; //@line 259 "stropmodule.c"
        var $214=$item44; //@line 259 "stropmodule.c"
        var $215=$214; //@line 259 "stropmodule.c"
        HEAP[$215]=$213; //@line 259 "stropmodule.c"
        var $216=$item44; //@line 259 "stropmodule.c"
        var $217=$216; //@line 259 "stropmodule.c"
        var $218=HEAP[$217]; //@line 259 "stropmodule.c"
        var $219=($218)==0; //@line 259 "stropmodule.c"
        if ($219) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 259 "stropmodule.c"
      case 49: // $bb50
        var $220=$item44; //@line 259 "stropmodule.c"
        var $221=$220+4; //@line 259 "stropmodule.c"
        var $222=HEAP[$221]; //@line 259 "stropmodule.c"
        var $223=$222+24; //@line 259 "stropmodule.c"
        var $224=HEAP[$223]; //@line 259 "stropmodule.c"
        var $225=$item44; //@line 259 "stropmodule.c"
        FUNCTION_TABLE[$224]($225); //@line 259 "stropmodule.c"
        __label__ = 50; break; //@line 259 "stropmodule.c"
      case 50: // $bb51
        $0=0; //@line 260 "stropmodule.c"
        __label__ = 72; break; //@line 260 "stropmodule.c"
      case 51: // $bb52
        var $226=$item44; //@line 262 "stropmodule.c"
        var $227=$226; //@line 262 "stropmodule.c"
        var $228=$227+8; //@line 262 "stropmodule.c"
        var $229=HEAP[$228]; //@line 262 "stropmodule.c"
        $slen=$229; //@line 262 "stropmodule.c"
        var $230=$reslen; //@line 263 "stropmodule.c"
        var $231=2147483647 - ($230); //@line 263 "stropmodule.c"
        var $232=$slen; //@line 263 "stropmodule.c"
        var $233=($231) < ($232); //@line 263 "stropmodule.c"
        if ($233) { __label__ = 53; break; } else { __label__ = 52; break; } //@line 263 "stropmodule.c"
      case 52: // $bb53
        var $234=$reslen; //@line 263 "stropmodule.c"
        var $_neg2=0 - ($234);
        var $235=HEAP[$seplen]; //@line 263 "stropmodule.c"
        var $_neg3=0 - ($235);
        var $236=($_neg2) + 2147483647;
        var $237=($236) + ($_neg3);
        var $238=HEAP[$seplen]; //@line 263 "stropmodule.c"
        var $239=($237) < ($238); //@line 263 "stropmodule.c"
        if ($239) { __label__ = 53; break; } else { __label__ = 64; break; } //@line 263 "stropmodule.c"
      case 53: // $bb54
        var $240=HEAP[_PyExc_OverflowError]; //@line 265 "stropmodule.c"
        _PyErr_SetString($240, __str6); //@line 265 "stropmodule.c"
        var $241=HEAP[$res]; //@line 267 "stropmodule.c"
        var $242=$241; //@line 267 "stropmodule.c"
        var $243=HEAP[$242]; //@line 267 "stropmodule.c"
        var $244=($243) - 1; //@line 267 "stropmodule.c"
        var $245=$241; //@line 267 "stropmodule.c"
        HEAP[$245]=$244; //@line 267 "stropmodule.c"
        var $246=$241; //@line 267 "stropmodule.c"
        var $247=HEAP[$246]; //@line 267 "stropmodule.c"
        var $248=($247)==0; //@line 267 "stropmodule.c"
        if ($248) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 267 "stropmodule.c"
      case 54: // $bb55
        var $249=HEAP[$res]; //@line 267 "stropmodule.c"
        var $250=$249+4; //@line 267 "stropmodule.c"
        var $251=HEAP[$250]; //@line 267 "stropmodule.c"
        var $252=$251+24; //@line 267 "stropmodule.c"
        var $253=HEAP[$252]; //@line 267 "stropmodule.c"
        var $254=HEAP[$res]; //@line 267 "stropmodule.c"
        FUNCTION_TABLE[$253]($254); //@line 267 "stropmodule.c"
        __label__ = 55; break; //@line 267 "stropmodule.c"
      case 55: // $bb56
        var $255=$item44; //@line 268 "stropmodule.c"
        var $256=($255)!=0; //@line 268 "stropmodule.c"
        if ($256) { __label__ = 56; break; } else { __label__ = 58; break; } //@line 268 "stropmodule.c"
      case 56: // $bb57
        var $257=$item44; //@line 268 "stropmodule.c"
        var $258=$257; //@line 268 "stropmodule.c"
        var $259=HEAP[$258]; //@line 268 "stropmodule.c"
        var $260=($259) - 1; //@line 268 "stropmodule.c"
        var $261=$item44; //@line 268 "stropmodule.c"
        var $262=$261; //@line 268 "stropmodule.c"
        HEAP[$262]=$260; //@line 268 "stropmodule.c"
        var $263=$item44; //@line 268 "stropmodule.c"
        var $264=$263; //@line 268 "stropmodule.c"
        var $265=HEAP[$264]; //@line 268 "stropmodule.c"
        var $266=($265)==0; //@line 268 "stropmodule.c"
        if ($266) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 268 "stropmodule.c"
      case 57: // $bb58
        var $267=$item44; //@line 268 "stropmodule.c"
        var $268=$267+4; //@line 268 "stropmodule.c"
        var $269=HEAP[$268]; //@line 268 "stropmodule.c"
        var $270=$269+24; //@line 268 "stropmodule.c"
        var $271=HEAP[$270]; //@line 268 "stropmodule.c"
        var $272=$item44; //@line 268 "stropmodule.c"
        FUNCTION_TABLE[$271]($272); //@line 268 "stropmodule.c"
        __label__ = 58; break; //@line 268 "stropmodule.c"
      case 58: // $bb59
        $0=0; //@line 269 "stropmodule.c"
        __label__ = 72; break; //@line 269 "stropmodule.c"
      case 59: // $bb61
        var $273=$sz; //@line 272 "stropmodule.c"
        var $274=($273) * 2; //@line 272 "stropmodule.c"
        var $275=__PyString_Resize($res, $274); //@line 272 "stropmodule.c"
        var $276=($275) < 0; //@line 272 "stropmodule.c"
        if ($276) { __label__ = 60; break; } else { __label__ = 63; break; } //@line 272 "stropmodule.c"
      case 60: // $bb62
        var $277=$item44; //@line 273 "stropmodule.c"
        var $278=$277; //@line 273 "stropmodule.c"
        var $279=HEAP[$278]; //@line 273 "stropmodule.c"
        var $280=($279) - 1; //@line 273 "stropmodule.c"
        var $281=$item44; //@line 273 "stropmodule.c"
        var $282=$281; //@line 273 "stropmodule.c"
        HEAP[$282]=$280; //@line 273 "stropmodule.c"
        var $283=$item44; //@line 273 "stropmodule.c"
        var $284=$283; //@line 273 "stropmodule.c"
        var $285=HEAP[$284]; //@line 273 "stropmodule.c"
        var $286=($285)==0; //@line 273 "stropmodule.c"
        if ($286) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 273 "stropmodule.c"
      case 61: // $bb63
        var $287=$item44; //@line 273 "stropmodule.c"
        var $288=$287+4; //@line 273 "stropmodule.c"
        var $289=HEAP[$288]; //@line 273 "stropmodule.c"
        var $290=$289+24; //@line 273 "stropmodule.c"
        var $291=HEAP[$290]; //@line 273 "stropmodule.c"
        var $292=$item44; //@line 273 "stropmodule.c"
        FUNCTION_TABLE[$291]($292); //@line 273 "stropmodule.c"
        __label__ = 62; break; //@line 273 "stropmodule.c"
      case 62: // $bb64
        $0=0; //@line 274 "stropmodule.c"
        __label__ = 72; break; //@line 274 "stropmodule.c"
      case 63: // $bb65
        var $293=$sz; //@line 276 "stropmodule.c"
        var $294=($293) * 2; //@line 276 "stropmodule.c"
        $sz=$294; //@line 276 "stropmodule.c"
        var $295=HEAP[$res]; //@line 277 "stropmodule.c"
        var $296=_PyString_AsString($295); //@line 277 "stropmodule.c"
        var $297=$reslen; //@line 277 "stropmodule.c"
        var $298=$296+$297; //@line 277 "stropmodule.c"
        $p=$298; //@line 277 "stropmodule.c"
        __label__ = 64; break; //@line 277 "stropmodule.c"
      case 64: // $bb66
        var $299=$reslen; //@line 271 "stropmodule.c"
        var $300=$slen; //@line 271 "stropmodule.c"
        var $301=HEAP[$seplen]; //@line 271 "stropmodule.c"
        var $302=($300) + ($299); //@line 271 "stropmodule.c"
        var $303=($302) + ($301); //@line 271 "stropmodule.c"
        var $304=$sz; //@line 271 "stropmodule.c"
        var $305=($303) >= ($304); //@line 271 "stropmodule.c"
        if ($305) { __label__ = 59; break; } else { __label__ = 65; break; } //@line 271 "stropmodule.c"
      case 65: // $bb67
        var $306=$i; //@line 279 "stropmodule.c"
        var $307=($306) > 0; //@line 279 "stropmodule.c"
        if ($307) { __label__ = 66; break; } else { __label__ = 67; break; } //@line 279 "stropmodule.c"
      case 66: // $bb68
        var $308=HEAP[$seplen]; //@line 280 "stropmodule.c"
        var $309=HEAP[$sep]; //@line 280 "stropmodule.c"
        var $310=$p; //@line 280 "stropmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($310, $309, $308, 1, 0); //@line 280 "stropmodule.c"
        var $311=HEAP[$seplen]; //@line 281 "stropmodule.c"
        var $312=$p; //@line 281 "stropmodule.c"
        var $313=$312+$311; //@line 281 "stropmodule.c"
        $p=$313; //@line 281 "stropmodule.c"
        var $314=HEAP[$seplen]; //@line 282 "stropmodule.c"
        var $315=$reslen; //@line 282 "stropmodule.c"
        var $316=($315) + ($314); //@line 282 "stropmodule.c"
        $reslen=$316; //@line 282 "stropmodule.c"
        __label__ = 67; break; //@line 282 "stropmodule.c"
      case 67: // $bb69
        var $317=$slen; //@line 284 "stropmodule.c"
        var $318=$item44; //@line 284 "stropmodule.c"
        var $319=$318; //@line 284 "stropmodule.c"
        var $320=$319+20; //@line 284 "stropmodule.c"
        var $321=$320; //@line 284 "stropmodule.c"
        var $322=$p; //@line 284 "stropmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($322, $321, $317, 1, 0); //@line 284 "stropmodule.c"
        var $323=$p; //@line 285 "stropmodule.c"
        var $324=$slen; //@line 285 "stropmodule.c"
        var $325=$323+$324; //@line 285 "stropmodule.c"
        $p=$325; //@line 285 "stropmodule.c"
        var $326=$reslen; //@line 286 "stropmodule.c"
        var $327=$slen; //@line 286 "stropmodule.c"
        var $328=($327) + ($326); //@line 286 "stropmodule.c"
        $reslen=$328; //@line 286 "stropmodule.c"
        var $329=$item44; //@line 287 "stropmodule.c"
        var $330=$329; //@line 287 "stropmodule.c"
        var $331=HEAP[$330]; //@line 287 "stropmodule.c"
        var $332=($331) - 1; //@line 287 "stropmodule.c"
        var $333=$item44; //@line 287 "stropmodule.c"
        var $334=$333; //@line 287 "stropmodule.c"
        HEAP[$334]=$332; //@line 287 "stropmodule.c"
        var $335=$item44; //@line 287 "stropmodule.c"
        var $336=$335; //@line 287 "stropmodule.c"
        var $337=HEAP[$336]; //@line 287 "stropmodule.c"
        var $338=($337)==0; //@line 287 "stropmodule.c"
        if ($338) { __label__ = 68; break; } else { __label__ = 69; break; } //@line 287 "stropmodule.c"
      case 68: // $bb70
        var $339=$item44; //@line 287 "stropmodule.c"
        var $340=$339+4; //@line 287 "stropmodule.c"
        var $341=HEAP[$340]; //@line 287 "stropmodule.c"
        var $342=$341+24; //@line 287 "stropmodule.c"
        var $343=HEAP[$342]; //@line 287 "stropmodule.c"
        var $344=$item44; //@line 287 "stropmodule.c"
        FUNCTION_TABLE[$343]($344); //@line 287 "stropmodule.c"
        __label__ = 69; break; //@line 287 "stropmodule.c"
      case 69: // $bb71
        var $345=$i; //@line 253 "stropmodule.c"
        var $346=($345) + 1; //@line 253 "stropmodule.c"
        $i=$346; //@line 253 "stropmodule.c"
        __label__ = 70; break; //@line 253 "stropmodule.c"
      case 70: // $bb72
        var $347=$i; //@line 253 "stropmodule.c"
        var $348=$seqlen; //@line 253 "stropmodule.c"
        var $349=($347) < ($348); //@line 253 "stropmodule.c"
        if ($349) { __label__ = 43; break; } else { __label__ = 71; break; } //@line 253 "stropmodule.c"
      case 71: // $bb73
        var $350=$reslen; //@line 289 "stropmodule.c"
        var $351=__PyString_Resize($res, $350); //@line 289 "stropmodule.c"
        var $352=HEAP[$res]; //@line 290 "stropmodule.c"
        $0=$352; //@line 290 "stropmodule.c"
        __label__ = 72; break; //@line 290 "stropmodule.c"
      case 72: // $bb74
        var $353=$0; //@line 177 "stropmodule.c"
        $retval=$353; //@line 177 "stropmodule.c"
        var $retval75=$retval; //@line 177 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval75; //@line 177 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_find($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; _memset(__stackBase__, 0, 24);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $s=__stackBase__;
        var $sub=__stackBase__+4;
        var $len=__stackBase__+8;
        var $n=__stackBase__+12;
        var $i=__stackBase__+16;
        var $last=__stackBase__+20;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$i]=0; //@line 307 "stropmodule.c"
        HEAP[$last]=2147483647; //@line 307 "stropmodule.c"
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 309 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, __str, 1); //@line 309 "stropmodule.c"
        var $3=($2)!=0; //@line 309 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 309 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 309 "stropmodule.c"
        __label__ = 24; break; //@line 309 "stropmodule.c"
      case 2: // $bb1
        var $4=$args_addr; //@line 310 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, __str8, allocate([$s,0,0,0,$len,0,0,0,$sub,0,0,0,$n,0,0,0,$i,0,0,0,$last,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 310 "stropmodule.c"
        var $6=($5)==0; //@line 310 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 310 "stropmodule.c"
      case 3: // $bb2
        $0=0; //@line 311 "stropmodule.c"
        __label__ = 24; break; //@line 311 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$last]; //@line 313 "stropmodule.c"
        var $8=HEAP[$len]; //@line 313 "stropmodule.c"
        var $9=($7) > ($8); //@line 313 "stropmodule.c"
        if ($9) { __lastLabel__ = 4; __label__ = 5; break; } else { __lastLabel__ = 4; __label__ = 6; break; } //@line 313 "stropmodule.c"
      case 5: // $bb4
        var $10=HEAP[$len]; //@line 314 "stropmodule.c"
        HEAP[$last]=$10; //@line 314 "stropmodule.c"
        __lastLabel__ = 5; __label__ = 6; break; //@line 314 "stropmodule.c"
      case 6: // $bb5
        var $11=__lastLabel__ == 5 ? $10 : ($7);
        var $12=($11) < 0; //@line 315 "stropmodule.c"
        var $13=HEAP[$last]; //@line 316 "stropmodule.c"
        if ($12) { __lastLabel__ = 6; __label__ = 7; break; } else { __lastLabel__ = 6; __label__ = 8; break; } //@line 315 "stropmodule.c"
      case 7: // $bb6
        var $14=HEAP[$len]; //@line 316 "stropmodule.c"
        var $15=($14) + ($13); //@line 316 "stropmodule.c"
        HEAP[$last]=$15; //@line 316 "stropmodule.c"
        __lastLabel__ = 7; __label__ = 8; break; //@line 316 "stropmodule.c"
      case 8: // $bb7
        var $16=__lastLabel__ == 7 ? $15 : ($13);
        var $17=($16) < 0; //@line 317 "stropmodule.c"
        if ($17) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 317 "stropmodule.c"
      case 9: // $bb8
        HEAP[$last]=0; //@line 318 "stropmodule.c"
        __label__ = 10; break; //@line 318 "stropmodule.c"
      case 10: // $bb9
        var $18=HEAP[$i]; //@line 319 "stropmodule.c"
        var $19=($18) < 0; //@line 319 "stropmodule.c"
        if ($19) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 319 "stropmodule.c"
      case 11: // $bb11
        var $20=HEAP[$i]; //@line 320 "stropmodule.c"
        var $21=HEAP[$len]; //@line 320 "stropmodule.c"
        var $22=($21) + ($20); //@line 320 "stropmodule.c"
        HEAP[$i]=$22; //@line 320 "stropmodule.c"
        var $23=($22) < 0; //@line 321 "stropmodule.c"
        if ($23) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 321 "stropmodule.c"
      case 12: // $bb12
        HEAP[$i]=0; //@line 322 "stropmodule.c"
        __label__ = 13; break; //@line 322 "stropmodule.c"
      case 13: // $bb13
        var $24=HEAP[$n]; //@line 324 "stropmodule.c"
        var $25=($24)==0; //@line 324 "stropmodule.c"
        if ($25) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 324 "stropmodule.c"
      case 14: // $bb14
        var $26=HEAP[$i]; //@line 324 "stropmodule.c"
        var $27=HEAP[$last]; //@line 324 "stropmodule.c"
        var $28=($26) <= ($27); //@line 324 "stropmodule.c"
        if ($28) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 324 "stropmodule.c"
      case 15: // $bb15
        var $29=HEAP[$i]; //@line 325 "stropmodule.c"
        var $30=_PyInt_FromLong($29); //@line 325 "stropmodule.c"
        $0=$30; //@line 325 "stropmodule.c"
        __label__ = 24; break; //@line 325 "stropmodule.c"
      case 16: // $bb16
        var $31=HEAP[$last]; //@line 327 "stropmodule.c"
        var $32=HEAP[$n]; //@line 327 "stropmodule.c"
        var $33=($31) - ($32); //@line 327 "stropmodule.c"
        HEAP[$last]=$33; //@line 327 "stropmodule.c"
        __label__ = 22; break; //@line 327 "stropmodule.c"
      case 17: // $bb17
        var $34=HEAP[$s]; //@line 329 "stropmodule.c"
        var $35=HEAP[$i]; //@line 329 "stropmodule.c"
        var $36=$34+$35; //@line 329 "stropmodule.c"
        var $37=HEAP[$36]; //@line 329 "stropmodule.c"
        var $38=HEAP[$sub]; //@line 329 "stropmodule.c"
        var $39=$38; //@line 329 "stropmodule.c"
        var $40=HEAP[$39]; //@line 329 "stropmodule.c"
        var $41=($37)==($40); //@line 329 "stropmodule.c"
        if ($41) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 329 "stropmodule.c"
      case 18: // $bb18
        var $42=HEAP[$n]; //@line 329 "stropmodule.c"
        var $43=($42)==1; //@line 329 "stropmodule.c"
        if ($43) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 329 "stropmodule.c"
      case 19: // $bb19
        var $44=HEAP[$n]; //@line 329 "stropmodule.c"
        var $45=($44) - 1; //@line 329 "stropmodule.c"
        var $46=HEAP[$sub]; //@line 329 "stropmodule.c"
        var $47=$46+1; //@line 329 "stropmodule.c"
        var $48=HEAP[$s]; //@line 329 "stropmodule.c"
        var $49=HEAP[$i]; //@line 329 "stropmodule.c"
        var $50=($49) + 1; //@line 329 "stropmodule.c"
        var $51=$48+$50; //@line 329 "stropmodule.c"
        var $52=_memcmp($51, $47, $45); //@line 329 "stropmodule.c"
        var $53=($52)==0; //@line 329 "stropmodule.c"
        if ($53) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 329 "stropmodule.c"
      case 20: // $bb20
        var $54=HEAP[$i]; //@line 331 "stropmodule.c"
        var $55=_PyInt_FromLong($54); //@line 331 "stropmodule.c"
        $0=$55; //@line 331 "stropmodule.c"
        __label__ = 24; break; //@line 331 "stropmodule.c"
      case 21: // $bb21
        var $56=HEAP[$i]; //@line 328 "stropmodule.c"
        var $57=($56) + 1; //@line 328 "stropmodule.c"
        HEAP[$i]=$57; //@line 328 "stropmodule.c"
        __label__ = 22; break; //@line 328 "stropmodule.c"
      case 22: // $bb22
        var $58=HEAP[$i]; //@line 328 "stropmodule.c"
        var $59=HEAP[$last]; //@line 328 "stropmodule.c"
        var $60=($58) <= ($59); //@line 328 "stropmodule.c"
        if ($60) { __label__ = 17; break; } else { __label__ = 23; break; } //@line 328 "stropmodule.c"
      case 23: // $bb23
        var $61=_PyInt_FromLong(-1); //@line 333 "stropmodule.c"
        $0=$61; //@line 333 "stropmodule.c"
        __label__ = 24; break; //@line 333 "stropmodule.c"
      case 24: // $bb24
        var $62=$0; //@line 309 "stropmodule.c"
        $retval=$62; //@line 309 "stropmodule.c"
        var $retval25=$retval; //@line 309 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval25; //@line 309 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_rfind($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; _memset(__stackBase__, 0, 24);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $s=__stackBase__;
        var $sub=__stackBase__+4;
        var $len=__stackBase__+8;
        var $n=__stackBase__+12;
        var $j;
        var $i=__stackBase__+16;
        var $last=__stackBase__+20;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$i]=0; //@line 351 "stropmodule.c"
        HEAP[$last]=2147483647; //@line 351 "stropmodule.c"
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 353 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, __str, 1); //@line 353 "stropmodule.c"
        var $3=($2)!=0; //@line 353 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 353 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 353 "stropmodule.c"
        __label__ = 24; break; //@line 353 "stropmodule.c"
      case 2: // $bb1
        var $4=$args_addr; //@line 354 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, __str9, allocate([$s,0,0,0,$len,0,0,0,$sub,0,0,0,$n,0,0,0,$i,0,0,0,$last,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 354 "stropmodule.c"
        var $6=($5)==0; //@line 354 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 354 "stropmodule.c"
      case 3: // $bb2
        $0=0; //@line 355 "stropmodule.c"
        __label__ = 24; break; //@line 355 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$last]; //@line 357 "stropmodule.c"
        var $8=HEAP[$len]; //@line 357 "stropmodule.c"
        var $9=($7) > ($8); //@line 357 "stropmodule.c"
        if ($9) { __lastLabel__ = 4; __label__ = 5; break; } else { __lastLabel__ = 4; __label__ = 6; break; } //@line 357 "stropmodule.c"
      case 5: // $bb4
        var $10=HEAP[$len]; //@line 358 "stropmodule.c"
        HEAP[$last]=$10; //@line 358 "stropmodule.c"
        __lastLabel__ = 5; __label__ = 6; break; //@line 358 "stropmodule.c"
      case 6: // $bb5
        var $11=__lastLabel__ == 5 ? $10 : ($7);
        var $12=($11) < 0; //@line 359 "stropmodule.c"
        var $13=HEAP[$last]; //@line 360 "stropmodule.c"
        if ($12) { __lastLabel__ = 6; __label__ = 7; break; } else { __lastLabel__ = 6; __label__ = 8; break; } //@line 359 "stropmodule.c"
      case 7: // $bb6
        var $14=HEAP[$len]; //@line 360 "stropmodule.c"
        var $15=($14) + ($13); //@line 360 "stropmodule.c"
        HEAP[$last]=$15; //@line 360 "stropmodule.c"
        __lastLabel__ = 7; __label__ = 8; break; //@line 360 "stropmodule.c"
      case 8: // $bb7
        var $16=__lastLabel__ == 7 ? $15 : ($13);
        var $17=($16) < 0; //@line 361 "stropmodule.c"
        if ($17) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 361 "stropmodule.c"
      case 9: // $bb8
        HEAP[$last]=0; //@line 362 "stropmodule.c"
        __label__ = 10; break; //@line 362 "stropmodule.c"
      case 10: // $bb9
        var $18=HEAP[$i]; //@line 363 "stropmodule.c"
        var $19=($18) < 0; //@line 363 "stropmodule.c"
        if ($19) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 363 "stropmodule.c"
      case 11: // $bb11
        var $20=HEAP[$i]; //@line 364 "stropmodule.c"
        var $21=HEAP[$len]; //@line 364 "stropmodule.c"
        var $22=($21) + ($20); //@line 364 "stropmodule.c"
        HEAP[$i]=$22; //@line 364 "stropmodule.c"
        var $23=($22) < 0; //@line 365 "stropmodule.c"
        if ($23) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 365 "stropmodule.c"
      case 12: // $bb12
        HEAP[$i]=0; //@line 366 "stropmodule.c"
        __label__ = 13; break; //@line 366 "stropmodule.c"
      case 13: // $bb13
        var $24=HEAP[$n]; //@line 368 "stropmodule.c"
        var $25=($24)==0; //@line 368 "stropmodule.c"
        if ($25) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 368 "stropmodule.c"
      case 14: // $bb14
        var $26=HEAP[$i]; //@line 368 "stropmodule.c"
        var $27=HEAP[$last]; //@line 368 "stropmodule.c"
        var $28=($26) <= ($27); //@line 368 "stropmodule.c"
        if ($28) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 368 "stropmodule.c"
      case 15: // $bb15
        var $29=HEAP[$last]; //@line 369 "stropmodule.c"
        var $30=_PyInt_FromLong($29); //@line 369 "stropmodule.c"
        $0=$30; //@line 369 "stropmodule.c"
        __label__ = 24; break; //@line 369 "stropmodule.c"
      case 16: // $bb16
        var $31=HEAP[$last]; //@line 371 "stropmodule.c"
        var $32=HEAP[$n]; //@line 371 "stropmodule.c"
        var $33=($31) - ($32); //@line 371 "stropmodule.c"
        $j=$33; //@line 371 "stropmodule.c"
        __label__ = 22; break; //@line 371 "stropmodule.c"
      case 17: // $bb17
        var $34=HEAP[$s]; //@line 372 "stropmodule.c"
        var $35=$j; //@line 372 "stropmodule.c"
        var $36=$34+$35; //@line 372 "stropmodule.c"
        var $37=HEAP[$36]; //@line 372 "stropmodule.c"
        var $38=HEAP[$sub]; //@line 372 "stropmodule.c"
        var $39=$38; //@line 372 "stropmodule.c"
        var $40=HEAP[$39]; //@line 372 "stropmodule.c"
        var $41=($37)==($40); //@line 372 "stropmodule.c"
        if ($41) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 372 "stropmodule.c"
      case 18: // $bb18
        var $42=HEAP[$n]; //@line 372 "stropmodule.c"
        var $43=($42)==1; //@line 372 "stropmodule.c"
        if ($43) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 372 "stropmodule.c"
      case 19: // $bb19
        var $44=HEAP[$n]; //@line 372 "stropmodule.c"
        var $45=($44) - 1; //@line 372 "stropmodule.c"
        var $46=HEAP[$sub]; //@line 372 "stropmodule.c"
        var $47=$46+1; //@line 372 "stropmodule.c"
        var $48=HEAP[$s]; //@line 372 "stropmodule.c"
        var $49=$j; //@line 372 "stropmodule.c"
        var $50=($49) + 1; //@line 372 "stropmodule.c"
        var $51=$48+$50; //@line 372 "stropmodule.c"
        var $52=_memcmp($51, $47, $45); //@line 372 "stropmodule.c"
        var $53=($52)==0; //@line 372 "stropmodule.c"
        if ($53) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 372 "stropmodule.c"
      case 20: // $bb20
        var $54=$j; //@line 374 "stropmodule.c"
        var $55=_PyInt_FromLong($54); //@line 374 "stropmodule.c"
        $0=$55; //@line 374 "stropmodule.c"
        __label__ = 24; break; //@line 374 "stropmodule.c"
      case 21: // $bb21
        var $56=$j; //@line 371 "stropmodule.c"
        var $57=($56) - 1; //@line 371 "stropmodule.c"
        $j=$57; //@line 371 "stropmodule.c"
        __label__ = 22; break; //@line 371 "stropmodule.c"
      case 22: // $bb22
        var $58=HEAP[$i]; //@line 371 "stropmodule.c"
        var $59=$j; //@line 371 "stropmodule.c"
        var $60=($59) >= ($58); //@line 371 "stropmodule.c"
        if ($60) { __label__ = 17; break; } else { __label__ = 23; break; } //@line 371 "stropmodule.c"
      case 23: // $bb23
        var $61=_PyInt_FromLong(-1); //@line 376 "stropmodule.c"
        $0=$61; //@line 376 "stropmodule.c"
        __label__ = 24; break; //@line 376 "stropmodule.c"
      case 24: // $bb24
        var $62=$0; //@line 353 "stropmodule.c"
        $retval=$62; //@line 353 "stropmodule.c"
        var $retval25=$retval; //@line 353 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval25; //@line 353 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _do_strip($args, $striptype) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $args_addr;
        var $striptype_addr;
        var $retval;
        var $0;
        var $s=__stackBase__;
        var $len=__stackBase__+4;
        var $i;
        var $j;
        $args_addr=$args;
        $striptype_addr=$striptype;
        var $1=$args_addr; //@line 387 "stropmodule.c"
        var $2=_PyString_AsStringAndSize($1, $s, $len); //@line 387 "stropmodule.c"
        var $3=($2)!=0; //@line 387 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 387 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 388 "stropmodule.c"
        __label__ = 15; break; //@line 388 "stropmodule.c"
      case 2: // $bb1
        $i=0; //@line 390 "stropmodule.c"
        var $4=$striptype_addr; //@line 391 "stropmodule.c"
        var $5=($4)!=1; //@line 391 "stropmodule.c"
        if ($5) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 391 "stropmodule.c"
      case 3: // $bb6_thread
        var $6=HEAP[$len]; //@line 397 "stropmodule.c"
        $j=$6; //@line 397 "stropmodule.c"
        __label__ = 8; break;
      case 4: // $bb3
        var $7=$i; //@line 393 "stropmodule.c"
        var $8=($7) + 1; //@line 393 "stropmodule.c"
        $i=$8; //@line 393 "stropmodule.c"
        __label__ = 5; break; //@line 393 "stropmodule.c"
      case 5: // $bb4
        var $9=HEAP[$len]; //@line 392 "stropmodule.c"
        var $10=$i; //@line 392 "stropmodule.c"
        var $11=($10) >= ($9); //@line 392 "stropmodule.c"
        if ($11) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 392 "stropmodule.c"
      case 6: // $bb5
        var $12=___ctype_b_loc(); //@line 392 "stropmodule.c"
        var $13=HEAP[$12]; //@line 392 "stropmodule.c"
        var $14=HEAP[$s]; //@line 392 "stropmodule.c"
        var $15=$i; //@line 392 "stropmodule.c"
        var $16=$14+$15; //@line 392 "stropmodule.c"
        var $17=HEAP[$16]; //@line 392 "stropmodule.c"
        var $18=($17); //@line 392 "stropmodule.c"
        var $19=$13+2*$18; //@line 392 "stropmodule.c"
        var $20=HEAP[$19]; //@line 392 "stropmodule.c"
        var $21=($20); //@line 392 "stropmodule.c"
        var $22=($21) & 8192; //@line 392 "stropmodule.c"
        var $23=($22)!=0; //@line 392 "stropmodule.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 392 "stropmodule.c"
      case 7: // $bb6
        var $_pr=$striptype_addr;
        var $24=HEAP[$len]; //@line 397 "stropmodule.c"
        $j=$24; //@line 397 "stropmodule.c"
        var $25=($_pr)!=0; //@line 398 "stropmodule.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 398 "stropmodule.c"
      case 8: // $bb7
        var $26=$j; //@line 400 "stropmodule.c"
        var $27=($26) - 1; //@line 400 "stropmodule.c"
        $j=$27; //@line 400 "stropmodule.c"
        var $28=$j; //@line 401 "stropmodule.c"
        var $29=$i; //@line 401 "stropmodule.c"
        var $30=($28) < ($29); //@line 401 "stropmodule.c"
        if ($30) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 401 "stropmodule.c"
      case 9: // $bb8
        var $31=___ctype_b_loc(); //@line 401 "stropmodule.c"
        var $32=HEAP[$31]; //@line 401 "stropmodule.c"
        var $33=HEAP[$s]; //@line 401 "stropmodule.c"
        var $34=$j; //@line 401 "stropmodule.c"
        var $35=$33+$34; //@line 401 "stropmodule.c"
        var $36=HEAP[$35]; //@line 401 "stropmodule.c"
        var $37=($36); //@line 401 "stropmodule.c"
        var $38=$32+2*$37; //@line 401 "stropmodule.c"
        var $39=HEAP[$38]; //@line 401 "stropmodule.c"
        var $40=($39); //@line 401 "stropmodule.c"
        var $41=($40) & 8192; //@line 401 "stropmodule.c"
        var $42=($41)!=0; //@line 401 "stropmodule.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 401 "stropmodule.c"
      case 10: // $bb9
        var $43=$j; //@line 402 "stropmodule.c"
        var $44=($43) + 1; //@line 402 "stropmodule.c"
        $j=$44; //@line 402 "stropmodule.c"
        __label__ = 11; break; //@line 402 "stropmodule.c"
      case 11: // $bb10
        var $45=$i; //@line 405 "stropmodule.c"
        var $46=($45)!=0; //@line 405 "stropmodule.c"
        if ($46) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 405 "stropmodule.c"
      case 12: // $bb11
        var $47=HEAP[$len]; //@line 405 "stropmodule.c"
        var $48=$j; //@line 405 "stropmodule.c"
        var $49=($48)!=($47); //@line 405 "stropmodule.c"
        if ($49) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 405 "stropmodule.c"
      case 13: // $bb12
        var $50=$args_addr; //@line 406 "stropmodule.c"
        var $51=$50; //@line 406 "stropmodule.c"
        var $52=HEAP[$51]; //@line 406 "stropmodule.c"
        var $53=($52) + 1; //@line 406 "stropmodule.c"
        var $54=$args_addr; //@line 406 "stropmodule.c"
        var $55=$54; //@line 406 "stropmodule.c"
        HEAP[$55]=$53; //@line 406 "stropmodule.c"
        var $56=$args_addr; //@line 407 "stropmodule.c"
        $0=$56; //@line 407 "stropmodule.c"
        __label__ = 15; break; //@line 407 "stropmodule.c"
      case 14: // $bb13
        var $57=$j; //@line 410 "stropmodule.c"
        var $58=$i; //@line 410 "stropmodule.c"
        var $59=($57) - ($58); //@line 410 "stropmodule.c"
        var $60=HEAP[$s]; //@line 410 "stropmodule.c"
        var $61=$i; //@line 410 "stropmodule.c"
        var $62=$60+$61; //@line 410 "stropmodule.c"
        var $63=_PyString_FromStringAndSize($62, $59); //@line 410 "stropmodule.c"
        $0=$63; //@line 410 "stropmodule.c"
        __label__ = 15; break; //@line 410 "stropmodule.c"
      case 15: // $bb14
        var $64=$0; //@line 388 "stropmodule.c"
        $retval=$64; //@line 388 "stropmodule.c"
        var $retval15=$retval; //@line 388 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 388 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_strip($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $args_addr=$args;
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 423 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, __str, 1); //@line 423 "stropmodule.c"
        var $3=($2)!=0; //@line 423 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 423 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 423 "stropmodule.c"
        __label__ = 3; break; //@line 423 "stropmodule.c"
      case 2: // $bb1
        var $4=$args_addr; //@line 424 "stropmodule.c"
        var $5=_do_strip($4, 2); //@line 424 "stropmodule.c"
        $0=$5; //@line 424 "stropmodule.c"
        __label__ = 3; break; //@line 424 "stropmodule.c"
      case 3: // $bb2
        var $6=$0; //@line 423 "stropmodule.c"
        $retval=$6; //@line 423 "stropmodule.c"
        var $retval3=$retval; //@line 423 "stropmodule.c"
        ;
        return $retval3; //@line 423 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_lstrip($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $args_addr=$args;
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 436 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, __str, 1); //@line 436 "stropmodule.c"
        var $3=($2)!=0; //@line 436 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 436 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 436 "stropmodule.c"
        __label__ = 3; break; //@line 436 "stropmodule.c"
      case 2: // $bb1
        var $4=$args_addr; //@line 437 "stropmodule.c"
        var $5=_do_strip($4, 0); //@line 437 "stropmodule.c"
        $0=$5; //@line 437 "stropmodule.c"
        __label__ = 3; break; //@line 437 "stropmodule.c"
      case 3: // $bb2
        var $6=$0; //@line 436 "stropmodule.c"
        $retval=$6; //@line 436 "stropmodule.c"
        var $retval3=$retval; //@line 436 "stropmodule.c"
        ;
        return $retval3; //@line 436 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_rstrip($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $args_addr=$args;
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 449 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, __str, 1); //@line 449 "stropmodule.c"
        var $3=($2)!=0; //@line 449 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 449 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 449 "stropmodule.c"
        __label__ = 3; break; //@line 449 "stropmodule.c"
      case 2: // $bb1
        var $4=$args_addr; //@line 450 "stropmodule.c"
        var $5=_do_strip($4, 1); //@line 450 "stropmodule.c"
        $0=$5; //@line 450 "stropmodule.c"
        __label__ = 3; break; //@line 450 "stropmodule.c"
      case 3: // $bb2
        var $6=$0; //@line 449 "stropmodule.c"
        $retval=$6; //@line 449 "stropmodule.c"
        var $retval3=$retval; //@line 449 "stropmodule.c"
        ;
        return $retval3; //@line 449 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_lower($self, $args) {
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
        var $s=__stackBase__;
        var $s_new;
        var $i;
        var $n=__stackBase__+4;
        var $newstr;
        var $changed;
        var $c;
        $self_addr=$self;
        $args_addr=$args;
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 467 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, __str, 1); //@line 467 "stropmodule.c"
        var $3=($2)!=0; //@line 467 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 467 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 467 "stropmodule.c"
        __label__ = 17; break; //@line 467 "stropmodule.c"
      case 2: // $bb1
        var $4=$args_addr; //@line 468 "stropmodule.c"
        var $5=_PyString_AsStringAndSize($4, $s, $n); //@line 468 "stropmodule.c"
        var $6=($5)!=0; //@line 468 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 468 "stropmodule.c"
      case 3: // $bb2
        $0=0; //@line 469 "stropmodule.c"
        __label__ = 17; break; //@line 469 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$n]; //@line 470 "stropmodule.c"
        var $8=_PyString_FromStringAndSize(0, $7); //@line 470 "stropmodule.c"
        $newstr=$8; //@line 470 "stropmodule.c"
        var $9=$newstr; //@line 471 "stropmodule.c"
        var $10=($9)==0; //@line 471 "stropmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 471 "stropmodule.c"
      case 5: // $bb4
        $0=0; //@line 472 "stropmodule.c"
        __label__ = 17; break; //@line 472 "stropmodule.c"
      case 6: // $bb5
        var $11=$newstr; //@line 473 "stropmodule.c"
        var $12=_PyString_AsString($11); //@line 473 "stropmodule.c"
        $s_new=$12; //@line 473 "stropmodule.c"
        $changed=0; //@line 474 "stropmodule.c"
        $i=0; //@line 475 "stropmodule.c"
        var $13=HEAP[$n]; //@line 475 "stropmodule.c"
        var $14=$i; //@line 475 "stropmodule.c"
        var $15=($14) < ($13); //@line 475 "stropmodule.c"
        if ($15) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 475 "stropmodule.c"
      case 7: // $bb11_thread
        var $16=$newstr; //@line 485 "stropmodule.c"
        __lastLabel__ = 7; __label__ = 13; break;
      case 8: // $bb6
        var $17=HEAP[$s]; //@line 476 "stropmodule.c"
        var $18=HEAP[$17]; //@line 476 "stropmodule.c"
        var $19=($18); //@line 476 "stropmodule.c"
        $c=$19; //@line 476 "stropmodule.c"
        var $20=$17+1; //@line 476 "stropmodule.c"
        HEAP[$s]=$20; //@line 476 "stropmodule.c"
        var $21=___ctype_b_loc(); //@line 477 "stropmodule.c"
        var $22=HEAP[$21]; //@line 477 "stropmodule.c"
        var $23=$c; //@line 477 "stropmodule.c"
        var $24=$22+2*$23; //@line 477 "stropmodule.c"
        var $25=HEAP[$24]; //@line 477 "stropmodule.c"
        var $26=($25); //@line 477 "stropmodule.c"
        var $27=($26) & 256; //@line 477 "stropmodule.c"
        var $28=($27)!=0; //@line 477 "stropmodule.c"
        if ($28) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 477 "stropmodule.c"
      case 9: // $bb7
        $changed=1; //@line 478 "stropmodule.c"
        var $29=$c; //@line 479 "stropmodule.c"
        var $30=_tolower($29); //@line 479 "stropmodule.c"
        var $31=((($30)) & 255); //@line 479 "stropmodule.c"
        var $32=$s_new; //@line 479 "stropmodule.c"
        HEAP[$32]=$31; //@line 479 "stropmodule.c"
        __label__ = 11; break; //@line 479 "stropmodule.c"
      case 10: // $bb8
        var $33=$c; //@line 481 "stropmodule.c"
        var $34=((($33)) & 255); //@line 481 "stropmodule.c"
        var $35=$s_new; //@line 481 "stropmodule.c"
        HEAP[$35]=$34; //@line 481 "stropmodule.c"
        __label__ = 11; break; //@line 481 "stropmodule.c"
      case 11: // $bb9
        var $36=$s_new; //@line 482 "stropmodule.c"
        var $37=$36+1; //@line 482 "stropmodule.c"
        $s_new=$37; //@line 482 "stropmodule.c"
        var $38=$i; //@line 475 "stropmodule.c"
        var $39=($38) + 1; //@line 475 "stropmodule.c"
        $i=$39; //@line 475 "stropmodule.c"
        var $40=HEAP[$n]; //@line 475 "stropmodule.c"
        var $41=$i; //@line 475 "stropmodule.c"
        var $42=($41) < ($40); //@line 475 "stropmodule.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 12; break; } //@line 475 "stropmodule.c"
      case 12: // $bb11
        var $_pr=$changed;
        var $43=($_pr)==0; //@line 484 "stropmodule.c"
        var $44=$newstr; //@line 485 "stropmodule.c"
        if ($43) { __lastLabel__ = 12; __label__ = 13; break; } else { __lastLabel__ = 12; __label__ = 16; break; } //@line 484 "stropmodule.c"
      case 13: // $bb12
        var $45=__lastLabel__ == 7 ? $16 : ($44);
        var $46=$45; //@line 485 "stropmodule.c"
        var $47=HEAP[$46]; //@line 485 "stropmodule.c"
        var $48=($47) - 1; //@line 485 "stropmodule.c"
        var $49=$newstr; //@line 485 "stropmodule.c"
        var $50=$49; //@line 485 "stropmodule.c"
        HEAP[$50]=$48; //@line 485 "stropmodule.c"
        var $51=$newstr; //@line 485 "stropmodule.c"
        var $52=$51; //@line 485 "stropmodule.c"
        var $53=HEAP[$52]; //@line 485 "stropmodule.c"
        var $54=($53)==0; //@line 485 "stropmodule.c"
        if ($54) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 485 "stropmodule.c"
      case 14: // $bb13
        var $55=$newstr; //@line 485 "stropmodule.c"
        var $56=$55+4; //@line 485 "stropmodule.c"
        var $57=HEAP[$56]; //@line 485 "stropmodule.c"
        var $58=$57+24; //@line 485 "stropmodule.c"
        var $59=HEAP[$58]; //@line 485 "stropmodule.c"
        var $60=$newstr; //@line 485 "stropmodule.c"
        FUNCTION_TABLE[$59]($60); //@line 485 "stropmodule.c"
        __label__ = 15; break; //@line 485 "stropmodule.c"
      case 15: // $bb14
        var $61=$args_addr; //@line 486 "stropmodule.c"
        var $62=$61; //@line 486 "stropmodule.c"
        var $63=HEAP[$62]; //@line 486 "stropmodule.c"
        var $64=($63) + 1; //@line 486 "stropmodule.c"
        var $65=$args_addr; //@line 486 "stropmodule.c"
        var $66=$65; //@line 486 "stropmodule.c"
        HEAP[$66]=$64; //@line 486 "stropmodule.c"
        var $67=$args_addr; //@line 487 "stropmodule.c"
        $0=$67; //@line 487 "stropmodule.c"
        __label__ = 17; break; //@line 487 "stropmodule.c"
      case 16: // $bb15
        $0=$44; //@line 489 "stropmodule.c"
        __label__ = 17; break; //@line 489 "stropmodule.c"
      case 17: // $bb16
        var $68=$0; //@line 467 "stropmodule.c"
        $retval=$68; //@line 467 "stropmodule.c"
        var $retval17=$retval; //@line 467 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 467 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_upper($self, $args) {
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
        var $s=__stackBase__;
        var $s_new;
        var $i;
        var $n=__stackBase__+4;
        var $newstr;
        var $changed;
        var $c;
        $self_addr=$self;
        $args_addr=$args;
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 506 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, __str, 1); //@line 506 "stropmodule.c"
        var $3=($2)!=0; //@line 506 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 506 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 506 "stropmodule.c"
        __label__ = 17; break; //@line 506 "stropmodule.c"
      case 2: // $bb1
        var $4=$args_addr; //@line 507 "stropmodule.c"
        var $5=_PyString_AsStringAndSize($4, $s, $n); //@line 507 "stropmodule.c"
        var $6=($5)!=0; //@line 507 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 507 "stropmodule.c"
      case 3: // $bb2
        $0=0; //@line 508 "stropmodule.c"
        __label__ = 17; break; //@line 508 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$n]; //@line 509 "stropmodule.c"
        var $8=_PyString_FromStringAndSize(0, $7); //@line 509 "stropmodule.c"
        $newstr=$8; //@line 509 "stropmodule.c"
        var $9=$newstr; //@line 510 "stropmodule.c"
        var $10=($9)==0; //@line 510 "stropmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 510 "stropmodule.c"
      case 5: // $bb4
        $0=0; //@line 511 "stropmodule.c"
        __label__ = 17; break; //@line 511 "stropmodule.c"
      case 6: // $bb5
        var $11=$newstr; //@line 512 "stropmodule.c"
        var $12=_PyString_AsString($11); //@line 512 "stropmodule.c"
        $s_new=$12; //@line 512 "stropmodule.c"
        $changed=0; //@line 513 "stropmodule.c"
        $i=0; //@line 514 "stropmodule.c"
        var $13=HEAP[$n]; //@line 514 "stropmodule.c"
        var $14=$i; //@line 514 "stropmodule.c"
        var $15=($14) < ($13); //@line 514 "stropmodule.c"
        if ($15) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 514 "stropmodule.c"
      case 7: // $bb11_thread
        var $16=$newstr; //@line 524 "stropmodule.c"
        __lastLabel__ = 7; __label__ = 13; break;
      case 8: // $bb6
        var $17=HEAP[$s]; //@line 515 "stropmodule.c"
        var $18=HEAP[$17]; //@line 515 "stropmodule.c"
        var $19=($18); //@line 515 "stropmodule.c"
        $c=$19; //@line 515 "stropmodule.c"
        var $20=$17+1; //@line 515 "stropmodule.c"
        HEAP[$s]=$20; //@line 515 "stropmodule.c"
        var $21=___ctype_b_loc(); //@line 516 "stropmodule.c"
        var $22=HEAP[$21]; //@line 516 "stropmodule.c"
        var $23=$c; //@line 516 "stropmodule.c"
        var $24=$22+2*$23; //@line 516 "stropmodule.c"
        var $25=HEAP[$24]; //@line 516 "stropmodule.c"
        var $26=($25); //@line 516 "stropmodule.c"
        var $27=($26) & 512; //@line 516 "stropmodule.c"
        var $28=($27)!=0; //@line 516 "stropmodule.c"
        if ($28) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 516 "stropmodule.c"
      case 9: // $bb7
        $changed=1; //@line 517 "stropmodule.c"
        var $29=$c; //@line 518 "stropmodule.c"
        var $30=_toupper($29); //@line 518 "stropmodule.c"
        var $31=((($30)) & 255); //@line 518 "stropmodule.c"
        var $32=$s_new; //@line 518 "stropmodule.c"
        HEAP[$32]=$31; //@line 518 "stropmodule.c"
        __label__ = 11; break; //@line 518 "stropmodule.c"
      case 10: // $bb8
        var $33=$c; //@line 520 "stropmodule.c"
        var $34=((($33)) & 255); //@line 520 "stropmodule.c"
        var $35=$s_new; //@line 520 "stropmodule.c"
        HEAP[$35]=$34; //@line 520 "stropmodule.c"
        __label__ = 11; break; //@line 520 "stropmodule.c"
      case 11: // $bb9
        var $36=$s_new; //@line 521 "stropmodule.c"
        var $37=$36+1; //@line 521 "stropmodule.c"
        $s_new=$37; //@line 521 "stropmodule.c"
        var $38=$i; //@line 514 "stropmodule.c"
        var $39=($38) + 1; //@line 514 "stropmodule.c"
        $i=$39; //@line 514 "stropmodule.c"
        var $40=HEAP[$n]; //@line 514 "stropmodule.c"
        var $41=$i; //@line 514 "stropmodule.c"
        var $42=($41) < ($40); //@line 514 "stropmodule.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 12; break; } //@line 514 "stropmodule.c"
      case 12: // $bb11
        var $_pr=$changed;
        var $43=($_pr)==0; //@line 523 "stropmodule.c"
        var $44=$newstr; //@line 524 "stropmodule.c"
        if ($43) { __lastLabel__ = 12; __label__ = 13; break; } else { __lastLabel__ = 12; __label__ = 16; break; } //@line 523 "stropmodule.c"
      case 13: // $bb12
        var $45=__lastLabel__ == 7 ? $16 : ($44);
        var $46=$45; //@line 524 "stropmodule.c"
        var $47=HEAP[$46]; //@line 524 "stropmodule.c"
        var $48=($47) - 1; //@line 524 "stropmodule.c"
        var $49=$newstr; //@line 524 "stropmodule.c"
        var $50=$49; //@line 524 "stropmodule.c"
        HEAP[$50]=$48; //@line 524 "stropmodule.c"
        var $51=$newstr; //@line 524 "stropmodule.c"
        var $52=$51; //@line 524 "stropmodule.c"
        var $53=HEAP[$52]; //@line 524 "stropmodule.c"
        var $54=($53)==0; //@line 524 "stropmodule.c"
        if ($54) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 524 "stropmodule.c"
      case 14: // $bb13
        var $55=$newstr; //@line 524 "stropmodule.c"
        var $56=$55+4; //@line 524 "stropmodule.c"
        var $57=HEAP[$56]; //@line 524 "stropmodule.c"
        var $58=$57+24; //@line 524 "stropmodule.c"
        var $59=HEAP[$58]; //@line 524 "stropmodule.c"
        var $60=$newstr; //@line 524 "stropmodule.c"
        FUNCTION_TABLE[$59]($60); //@line 524 "stropmodule.c"
        __label__ = 15; break; //@line 524 "stropmodule.c"
      case 15: // $bb14
        var $61=$args_addr; //@line 525 "stropmodule.c"
        var $62=$61; //@line 525 "stropmodule.c"
        var $63=HEAP[$62]; //@line 525 "stropmodule.c"
        var $64=($63) + 1; //@line 525 "stropmodule.c"
        var $65=$args_addr; //@line 525 "stropmodule.c"
        var $66=$65; //@line 525 "stropmodule.c"
        HEAP[$66]=$64; //@line 525 "stropmodule.c"
        var $67=$args_addr; //@line 526 "stropmodule.c"
        $0=$67; //@line 526 "stropmodule.c"
        __label__ = 17; break; //@line 526 "stropmodule.c"
      case 16: // $bb15
        $0=$44; //@line 528 "stropmodule.c"
        __label__ = 17; break; //@line 528 "stropmodule.c"
      case 17: // $bb16
        var $68=$0; //@line 506 "stropmodule.c"
        $retval=$68; //@line 506 "stropmodule.c"
        var $retval17=$retval; //@line 506 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 506 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_capitalize($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $s=__stackBase__;
        var $s_new;
        var $i;
        var $n=__stackBase__+4;
        var $newstr;
        var $changed;
        var $c;
        var $c12;
        $self_addr=$self;
        $args_addr=$args;
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 546 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, __str, 1); //@line 546 "stropmodule.c"
        var $3=($2)!=0; //@line 546 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 546 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 546 "stropmodule.c"
        __label__ = 21; break; //@line 546 "stropmodule.c"
      case 2: // $bb1
        var $4=$args_addr; //@line 547 "stropmodule.c"
        var $5=_PyString_AsStringAndSize($4, $s, $n); //@line 547 "stropmodule.c"
        var $6=($5)!=0; //@line 547 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 547 "stropmodule.c"
      case 3: // $bb2
        $0=0; //@line 548 "stropmodule.c"
        __label__ = 21; break; //@line 548 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$n]; //@line 549 "stropmodule.c"
        var $8=_PyString_FromStringAndSize(0, $7); //@line 549 "stropmodule.c"
        $newstr=$8; //@line 549 "stropmodule.c"
        var $9=$newstr; //@line 550 "stropmodule.c"
        var $10=($9)==0; //@line 550 "stropmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 550 "stropmodule.c"
      case 5: // $bb4
        $0=0; //@line 551 "stropmodule.c"
        __label__ = 21; break; //@line 551 "stropmodule.c"
      case 6: // $bb5
        var $11=$newstr; //@line 552 "stropmodule.c"
        var $12=_PyString_AsString($11); //@line 552 "stropmodule.c"
        $s_new=$12; //@line 552 "stropmodule.c"
        $changed=0; //@line 553 "stropmodule.c"
        var $13=HEAP[$n]; //@line 554 "stropmodule.c"
        var $14=($13) > 0; //@line 554 "stropmodule.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 554 "stropmodule.c"
      case 7: // $bb6
        var $15=HEAP[$s]; //@line 555 "stropmodule.c"
        var $16=HEAP[$15]; //@line 555 "stropmodule.c"
        var $17=($16); //@line 555 "stropmodule.c"
        $c=$17; //@line 555 "stropmodule.c"
        var $18=$15+1; //@line 555 "stropmodule.c"
        HEAP[$s]=$18; //@line 555 "stropmodule.c"
        var $19=___ctype_b_loc(); //@line 556 "stropmodule.c"
        var $20=HEAP[$19]; //@line 556 "stropmodule.c"
        var $21=$c; //@line 556 "stropmodule.c"
        var $22=$20+2*$21; //@line 556 "stropmodule.c"
        var $23=HEAP[$22]; //@line 556 "stropmodule.c"
        var $24=($23); //@line 556 "stropmodule.c"
        var $25=($24) & 512; //@line 556 "stropmodule.c"
        var $26=($25)!=0; //@line 556 "stropmodule.c"
        if ($26) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 556 "stropmodule.c"
      case 8: // $bb7
        $changed=1; //@line 557 "stropmodule.c"
        var $27=$c; //@line 558 "stropmodule.c"
        var $28=_toupper($27); //@line 558 "stropmodule.c"
        var $29=((($28)) & 255); //@line 558 "stropmodule.c"
        var $30=$s_new; //@line 558 "stropmodule.c"
        HEAP[$30]=$29; //@line 558 "stropmodule.c"
        __label__ = 10; break; //@line 558 "stropmodule.c"
      case 9: // $bb8
        var $31=$c; //@line 560 "stropmodule.c"
        var $32=((($31)) & 255); //@line 560 "stropmodule.c"
        var $33=$s_new; //@line 560 "stropmodule.c"
        HEAP[$33]=$32; //@line 560 "stropmodule.c"
        __label__ = 10; break; //@line 560 "stropmodule.c"
      case 10: // $bb9
        var $34=$s_new; //@line 561 "stropmodule.c"
        var $35=$34+1; //@line 561 "stropmodule.c"
        $s_new=$35; //@line 561 "stropmodule.c"
        __label__ = 11; break; //@line 561 "stropmodule.c"
      case 11: // $bb10
        $i=1; //@line 563 "stropmodule.c"
        var $36=HEAP[$n]; //@line 563 "stropmodule.c"
        var $37=$i; //@line 563 "stropmodule.c"
        var $38=($37) < ($36); //@line 563 "stropmodule.c"
        if ($38) { __label__ = 12; break; } else { __label__ = 16; break; } //@line 563 "stropmodule.c"
      case 12: // $bb11
        var $39=HEAP[$s]; //@line 564 "stropmodule.c"
        var $40=HEAP[$39]; //@line 564 "stropmodule.c"
        var $41=($40); //@line 564 "stropmodule.c"
        $c12=$41; //@line 564 "stropmodule.c"
        var $42=$39+1; //@line 564 "stropmodule.c"
        HEAP[$s]=$42; //@line 564 "stropmodule.c"
        var $43=___ctype_b_loc(); //@line 565 "stropmodule.c"
        var $44=HEAP[$43]; //@line 565 "stropmodule.c"
        var $45=$c12; //@line 565 "stropmodule.c"
        var $46=$44+2*$45; //@line 565 "stropmodule.c"
        var $47=HEAP[$46]; //@line 565 "stropmodule.c"
        var $48=($47); //@line 565 "stropmodule.c"
        var $49=($48) & 256; //@line 565 "stropmodule.c"
        var $50=($49)!=0; //@line 565 "stropmodule.c"
        if ($50) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 565 "stropmodule.c"
      case 13: // $bb13
        $changed=1; //@line 566 "stropmodule.c"
        var $51=$c12; //@line 567 "stropmodule.c"
        var $52=_tolower($51); //@line 567 "stropmodule.c"
        var $53=((($52)) & 255); //@line 567 "stropmodule.c"
        var $54=$s_new; //@line 567 "stropmodule.c"
        HEAP[$54]=$53; //@line 567 "stropmodule.c"
        __label__ = 15; break; //@line 567 "stropmodule.c"
      case 14: // $bb14
        var $55=$c12; //@line 569 "stropmodule.c"
        var $56=((($55)) & 255); //@line 569 "stropmodule.c"
        var $57=$s_new; //@line 569 "stropmodule.c"
        HEAP[$57]=$56; //@line 569 "stropmodule.c"
        __label__ = 15; break; //@line 569 "stropmodule.c"
      case 15: // $bb15
        var $58=$s_new; //@line 570 "stropmodule.c"
        var $59=$58+1; //@line 570 "stropmodule.c"
        $s_new=$59; //@line 570 "stropmodule.c"
        var $60=$i; //@line 563 "stropmodule.c"
        var $61=($60) + 1; //@line 563 "stropmodule.c"
        $i=$61; //@line 563 "stropmodule.c"
        var $62=HEAP[$n]; //@line 563 "stropmodule.c"
        var $63=$i; //@line 563 "stropmodule.c"
        var $64=($63) < ($62); //@line 563 "stropmodule.c"
        if ($64) { __label__ = 12; break; } else { __label__ = 16; break; } //@line 563 "stropmodule.c"
      case 16: // $bb17
        var $65=$changed; //@line 572 "stropmodule.c"
        var $66=($65)==0; //@line 572 "stropmodule.c"
        var $67=$newstr; //@line 573 "stropmodule.c"
        if ($66) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 572 "stropmodule.c"
      case 17: // $bb18
        var $68=$67; //@line 573 "stropmodule.c"
        var $69=HEAP[$68]; //@line 573 "stropmodule.c"
        var $70=($69) - 1; //@line 573 "stropmodule.c"
        var $71=$newstr; //@line 573 "stropmodule.c"
        var $72=$71; //@line 573 "stropmodule.c"
        HEAP[$72]=$70; //@line 573 "stropmodule.c"
        var $73=$newstr; //@line 573 "stropmodule.c"
        var $74=$73; //@line 573 "stropmodule.c"
        var $75=HEAP[$74]; //@line 573 "stropmodule.c"
        var $76=($75)==0; //@line 573 "stropmodule.c"
        if ($76) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 573 "stropmodule.c"
      case 18: // $bb19
        var $77=$newstr; //@line 573 "stropmodule.c"
        var $78=$77+4; //@line 573 "stropmodule.c"
        var $79=HEAP[$78]; //@line 573 "stropmodule.c"
        var $80=$79+24; //@line 573 "stropmodule.c"
        var $81=HEAP[$80]; //@line 573 "stropmodule.c"
        var $82=$newstr; //@line 573 "stropmodule.c"
        FUNCTION_TABLE[$81]($82); //@line 573 "stropmodule.c"
        __label__ = 19; break; //@line 573 "stropmodule.c"
      case 19: // $bb20
        var $83=$args_addr; //@line 574 "stropmodule.c"
        var $84=$83; //@line 574 "stropmodule.c"
        var $85=HEAP[$84]; //@line 574 "stropmodule.c"
        var $86=($85) + 1; //@line 574 "stropmodule.c"
        var $87=$args_addr; //@line 574 "stropmodule.c"
        var $88=$87; //@line 574 "stropmodule.c"
        HEAP[$88]=$86; //@line 574 "stropmodule.c"
        var $89=$args_addr; //@line 575 "stropmodule.c"
        $0=$89; //@line 575 "stropmodule.c"
        __label__ = 21; break; //@line 575 "stropmodule.c"
      case 20: // $bb21
        $0=$67; //@line 577 "stropmodule.c"
        __label__ = 21; break; //@line 577 "stropmodule.c"
      case 21: // $bb22
        var $90=$0; //@line 546 "stropmodule.c"
        $retval=$90; //@line 546 "stropmodule.c"
        var $retval23=$retval; //@line 546 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval23; //@line 546 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_expandtabs($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $e;
        var $p;
        var $q;
        var $i;
        var $j;
        var $old_j;
        var $out;
        var $string=__stackBase__;
        var $stringlen=__stackBase__+4;
        var $tabsize=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$tabsize]=8; //@line 600 "stropmodule.c"
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 602 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, __str, 1); //@line 602 "stropmodule.c"
        var $3=($2)!=0; //@line 602 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 602 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 602 "stropmodule.c"
        __label__ = 27; break; //@line 602 "stropmodule.c"
      case 2: // $bb1
        var $4=$args_addr; //@line 604 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, __str10, allocate([$string,0,0,0,$stringlen,0,0,0,$tabsize,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 604 "stropmodule.c"
        var $6=($5)==0; //@line 604 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 604 "stropmodule.c"
      case 3: // $bb2
        $0=0; //@line 605 "stropmodule.c"
        __label__ = 27; break; //@line 605 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$tabsize]; //@line 606 "stropmodule.c"
        var $8=($7) <= 0; //@line 606 "stropmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 606 "stropmodule.c"
      case 5: // $bb4
        var $9=HEAP[_PyExc_ValueError]; //@line 607 "stropmodule.c"
        _PyErr_SetString($9, __str11); //@line 607 "stropmodule.c"
        $0=0; //@line 609 "stropmodule.c"
        __label__ = 27; break; //@line 609 "stropmodule.c"
      case 6: // $bb5
        $old_j=0; //@line 613 "stropmodule.c"
        var $10=$old_j; //@line 613 "stropmodule.c"
        $j=$10; //@line 613 "stropmodule.c"
        var $11=$j; //@line 613 "stropmodule.c"
        $i=$11; //@line 613 "stropmodule.c"
        var $12=HEAP[$string]; //@line 614 "stropmodule.c"
        var $13=HEAP[$stringlen]; //@line 614 "stropmodule.c"
        var $14=$12+$13; //@line 614 "stropmodule.c"
        $e=$14; //@line 614 "stropmodule.c"
        var $15=HEAP[$string]; //@line 615 "stropmodule.c"
        $p=$15; //@line 615 "stropmodule.c"
        __label__ = 14; break; //@line 615 "stropmodule.c"
      case 7: // $bb6
        var $16=$p; //@line 616 "stropmodule.c"
        var $17=HEAP[$16]; //@line 616 "stropmodule.c"
        var $18=($17)==9; //@line 616 "stropmodule.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 616 "stropmodule.c"
      case 8: // $bb7
        var $19=HEAP[$tabsize]; //@line 617 "stropmodule.c"
        var $20=HEAP[$tabsize]; //@line 617 "stropmodule.c"
        var $21=$j; //@line 617 "stropmodule.c"
        var $22=($21) % ($20); //@line 617 "stropmodule.c"
        var $_neg=0 - ($22);
        var $23=$j; //@line 617 "stropmodule.c"
        var $24=($_neg) + ($19);
        var $25=($24) + ($23); //@line 617 "stropmodule.c"
        $j=$25; //@line 617 "stropmodule.c"
        var $26=$old_j; //@line 618 "stropmodule.c"
        var $27=$j; //@line 618 "stropmodule.c"
        var $28=($26) > ($27); //@line 618 "stropmodule.c"
        if ($28) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 618 "stropmodule.c"
      case 9: // $bb8
        var $29=HEAP[_PyExc_OverflowError]; //@line 619 "stropmodule.c"
        _PyErr_SetString($29, __str12); //@line 619 "stropmodule.c"
        $0=0; //@line 621 "stropmodule.c"
        __label__ = 27; break; //@line 621 "stropmodule.c"
      case 10: // $bb9
        var $30=$j; //@line 623 "stropmodule.c"
        $old_j=$30; //@line 623 "stropmodule.c"
        __label__ = 13; break; //@line 623 "stropmodule.c"
      case 11: // $bb10
        var $31=$j; //@line 625 "stropmodule.c"
        var $32=($31) + 1; //@line 625 "stropmodule.c"
        $j=$32; //@line 625 "stropmodule.c"
        var $33=$p; //@line 626 "stropmodule.c"
        var $34=HEAP[$33]; //@line 626 "stropmodule.c"
        var $35=($34)==10; //@line 626 "stropmodule.c"
        if ($35) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 626 "stropmodule.c"
      case 12: // $bb11
        var $36=$i; //@line 627 "stropmodule.c"
        var $37=$j; //@line 627 "stropmodule.c"
        var $38=($37) + ($36); //@line 627 "stropmodule.c"
        $i=$38; //@line 627 "stropmodule.c"
        $j=0; //@line 628 "stropmodule.c"
        __label__ = 13; break; //@line 628 "stropmodule.c"
      case 13: // $bb12
        var $39=$p; //@line 615 "stropmodule.c"
        var $40=$39+1; //@line 615 "stropmodule.c"
        $p=$40; //@line 615 "stropmodule.c"
        __label__ = 14; break; //@line 615 "stropmodule.c"
      case 14: // $bb13
        var $41=$p; //@line 615 "stropmodule.c"
        var $42=$e; //@line 615 "stropmodule.c"
        var $43=($41) < ($42); //@line 615 "stropmodule.c"
        if ($43) { __label__ = 7; break; } else { __label__ = 15; break; } //@line 615 "stropmodule.c"
      case 15: // $bb14
        var $44=$i; //@line 633 "stropmodule.c"
        var $45=$j; //@line 633 "stropmodule.c"
        var $46=($45) + ($44); //@line 633 "stropmodule.c"
        var $47=($46) < 0; //@line 633 "stropmodule.c"
        if ($47) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 633 "stropmodule.c"
      case 16: // $bb15
        var $48=HEAP[_PyExc_OverflowError]; //@line 634 "stropmodule.c"
        _PyErr_SetString($48, __str12); //@line 634 "stropmodule.c"
        $0=0; //@line 635 "stropmodule.c"
        __label__ = 27; break; //@line 635 "stropmodule.c"
      case 17: // $bb16
        var $49=$i; //@line 639 "stropmodule.c"
        var $50=$j; //@line 639 "stropmodule.c"
        var $51=($50) + ($49); //@line 639 "stropmodule.c"
        var $52=_PyString_FromStringAndSize(0, $51); //@line 639 "stropmodule.c"
        $out=$52; //@line 639 "stropmodule.c"
        var $53=$out; //@line 640 "stropmodule.c"
        var $54=($53)==0; //@line 640 "stropmodule.c"
        if ($54) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 640 "stropmodule.c"
      case 18: // $bb17
        $0=0; //@line 641 "stropmodule.c"
        __label__ = 27; break; //@line 641 "stropmodule.c"
      case 19: // $bb18
        $i=0; //@line 643 "stropmodule.c"
        var $55=$out; //@line 644 "stropmodule.c"
        var $56=$55; //@line 644 "stropmodule.c"
        var $57=$56+20; //@line 644 "stropmodule.c"
        var $58=$57; //@line 644 "stropmodule.c"
        $q=$58; //@line 644 "stropmodule.c"
        var $59=HEAP[$string]; //@line 646 "stropmodule.c"
        $p=$59; //@line 646 "stropmodule.c"
        var $60=$p; //@line 646 "stropmodule.c"
        var $61=$e; //@line 646 "stropmodule.c"
        var $62=($60) < ($61); //@line 646 "stropmodule.c"
        if ($62) { __label__ = 20; break; } else { __label__ = 26; break; } //@line 646 "stropmodule.c"
      case 20: // $bb19
        var $63=$p; //@line 647 "stropmodule.c"
        var $64=HEAP[$63]; //@line 647 "stropmodule.c"
        var $65=($64)==9; //@line 647 "stropmodule.c"
        if ($65) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 647 "stropmodule.c"
      case 21: // $bb20
        var $66=HEAP[$tabsize]; //@line 648 "stropmodule.c"
        var $67=HEAP[$tabsize]; //@line 648 "stropmodule.c"
        var $68=$i; //@line 648 "stropmodule.c"
        var $69=($68) % ($67); //@line 648 "stropmodule.c"
        var $70=($66) - ($69); //@line 648 "stropmodule.c"
        $j=$70; //@line 648 "stropmodule.c"
        var $71=$i; //@line 649 "stropmodule.c"
        var $72=$j; //@line 649 "stropmodule.c"
        var $73=($72) + ($71); //@line 649 "stropmodule.c"
        $i=$73; //@line 649 "stropmodule.c"
        var $74=$j; //@line 650 "stropmodule.c"
        var $75=($74) > 0; //@line 650 "stropmodule.c"
        var $76=($75); //@line 650 "stropmodule.c"
        var $77=$j; //@line 650 "stropmodule.c"
        var $78=($77) - 1; //@line 650 "stropmodule.c"
        $j=$78; //@line 650 "stropmodule.c"
        var $toBool1=($76)!=0; //@line 650 "stropmodule.c"
        if ($toBool1) { __label__ = 22; break; } else { __label__ = 25; break; } //@line 650 "stropmodule.c"
      case 22: // $bb21
        var $79=$q; //@line 651 "stropmodule.c"
        HEAP[$79]=32; //@line 651 "stropmodule.c"
        var $80=$q; //@line 651 "stropmodule.c"
        var $81=$80+1; //@line 651 "stropmodule.c"
        $q=$81; //@line 651 "stropmodule.c"
        var $82=$j; //@line 650 "stropmodule.c"
        var $83=($82) > 0; //@line 650 "stropmodule.c"
        var $84=($83); //@line 650 "stropmodule.c"
        var $85=$j; //@line 650 "stropmodule.c"
        var $86=($85) - 1; //@line 650 "stropmodule.c"
        $j=$86; //@line 650 "stropmodule.c"
        var $toBool=($84)!=0; //@line 650 "stropmodule.c"
        if ($toBool) { __label__ = 22; break; } else { __label__ = 25; break; } //@line 650 "stropmodule.c"
      case 23: // $bb24
        var $87=$p; //@line 653 "stropmodule.c"
        var $88=HEAP[$87]; //@line 653 "stropmodule.c"
        var $89=$q; //@line 653 "stropmodule.c"
        HEAP[$89]=$88; //@line 653 "stropmodule.c"
        var $90=$q; //@line 653 "stropmodule.c"
        var $91=$90+1; //@line 653 "stropmodule.c"
        $q=$91; //@line 653 "stropmodule.c"
        var $92=$i; //@line 654 "stropmodule.c"
        var $93=($92) + 1; //@line 654 "stropmodule.c"
        $i=$93; //@line 654 "stropmodule.c"
        var $94=$p; //@line 655 "stropmodule.c"
        var $95=HEAP[$94]; //@line 655 "stropmodule.c"
        var $96=($95)==10; //@line 655 "stropmodule.c"
        if ($96) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 655 "stropmodule.c"
      case 24: // $bb25
        $i=0; //@line 656 "stropmodule.c"
        __label__ = 25; break; //@line 656 "stropmodule.c"
      case 25: // $bb26
        var $97=$p; //@line 646 "stropmodule.c"
        var $98=$97+1; //@line 646 "stropmodule.c"
        $p=$98; //@line 646 "stropmodule.c"
        var $99=$p; //@line 646 "stropmodule.c"
        var $100=$e; //@line 646 "stropmodule.c"
        var $101=($99) < ($100); //@line 646 "stropmodule.c"
        if ($101) { __label__ = 20; break; } else { __label__ = 26; break; } //@line 646 "stropmodule.c"
      case 26: // $bb28
        var $102=$out; //@line 660 "stropmodule.c"
        $0=$102; //@line 660 "stropmodule.c"
        __label__ = 27; break; //@line 660 "stropmodule.c"
      case 27: // $bb29
        var $103=$0; //@line 602 "stropmodule.c"
        $retval=$103; //@line 602 "stropmodule.c"
        var $retval30=$retval; //@line 602 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval30; //@line 602 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_count($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; _memset(__stackBase__, 0, 24);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $s=__stackBase__;
        var $sub=__stackBase__+4;
        var $len=__stackBase__+8;
        var $n=__stackBase__+12;
        var $i=__stackBase__+16;
        var $last=__stackBase__+20;
        var $m;
        var $r;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$i]=0; //@line 676 "stropmodule.c"
        HEAP[$last]=2147483647; //@line 676 "stropmodule.c"
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 679 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, __str, 1); //@line 679 "stropmodule.c"
        var $3=($2)!=0; //@line 679 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 679 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 679 "stropmodule.c"
        __label__ = 21; break; //@line 679 "stropmodule.c"
      case 2: // $bb1
        var $4=$args_addr; //@line 680 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, __str13, allocate([$s,0,0,0,$len,0,0,0,$sub,0,0,0,$n,0,0,0,$i,0,0,0,$last,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 680 "stropmodule.c"
        var $6=($5)==0; //@line 680 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 680 "stropmodule.c"
      case 3: // $bb2
        $0=0; //@line 681 "stropmodule.c"
        __label__ = 21; break; //@line 681 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$last]; //@line 682 "stropmodule.c"
        var $8=HEAP[$len]; //@line 682 "stropmodule.c"
        var $9=($7) > ($8); //@line 682 "stropmodule.c"
        if ($9) { __lastLabel__ = 4; __label__ = 5; break; } else { __lastLabel__ = 4; __label__ = 6; break; } //@line 682 "stropmodule.c"
      case 5: // $bb4
        var $10=HEAP[$len]; //@line 683 "stropmodule.c"
        HEAP[$last]=$10; //@line 683 "stropmodule.c"
        __lastLabel__ = 5; __label__ = 6; break; //@line 683 "stropmodule.c"
      case 6: // $bb5
        var $11=__lastLabel__ == 5 ? $10 : ($7);
        var $12=($11) < 0; //@line 684 "stropmodule.c"
        var $13=HEAP[$last]; //@line 685 "stropmodule.c"
        if ($12) { __lastLabel__ = 6; __label__ = 7; break; } else { __lastLabel__ = 6; __label__ = 8; break; } //@line 684 "stropmodule.c"
      case 7: // $bb6
        var $14=HEAP[$len]; //@line 685 "stropmodule.c"
        var $15=($14) + ($13); //@line 685 "stropmodule.c"
        HEAP[$last]=$15; //@line 685 "stropmodule.c"
        __lastLabel__ = 7; __label__ = 8; break; //@line 685 "stropmodule.c"
      case 8: // $bb7
        var $16=__lastLabel__ == 7 ? $15 : ($13);
        var $17=($16) < 0; //@line 686 "stropmodule.c"
        if ($17) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 686 "stropmodule.c"
      case 9: // $bb8
        HEAP[$last]=0; //@line 687 "stropmodule.c"
        __label__ = 10; break; //@line 687 "stropmodule.c"
      case 10: // $bb9
        var $18=HEAP[$i]; //@line 688 "stropmodule.c"
        var $19=($18) < 0; //@line 688 "stropmodule.c"
        if ($19) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 688 "stropmodule.c"
      case 11: // $bb11
        var $20=HEAP[$i]; //@line 689 "stropmodule.c"
        var $21=HEAP[$len]; //@line 689 "stropmodule.c"
        var $22=($21) + ($20); //@line 689 "stropmodule.c"
        HEAP[$i]=$22; //@line 689 "stropmodule.c"
        var $23=($22) < 0; //@line 690 "stropmodule.c"
        if ($23) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 690 "stropmodule.c"
      case 12: // $bb12
        HEAP[$i]=0; //@line 691 "stropmodule.c"
        __label__ = 13; break; //@line 691 "stropmodule.c"
      case 13: // $bb13
        var $24=HEAP[$last]; //@line 692 "stropmodule.c"
        var $25=HEAP[$n]; //@line 692 "stropmodule.c"
        var $_neg=0 - ($25);
        var $26=($24) + 1; //@line 692 "stropmodule.c"
        var $27=($26) + ($_neg);
        $m=$27; //@line 692 "stropmodule.c"
        var $28=($25)==0; //@line 693 "stropmodule.c"
        if ($28) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 693 "stropmodule.c"
      case 14: // $bb14
        var $29=HEAP[$i]; //@line 694 "stropmodule.c"
        var $30=$m; //@line 694 "stropmodule.c"
        var $31=($30) - ($29); //@line 694 "stropmodule.c"
        var $32=_PyInt_FromLong($31); //@line 694 "stropmodule.c"
        $0=$32; //@line 694 "stropmodule.c"
        __label__ = 21; break; //@line 694 "stropmodule.c"
      case 15: // $bb15
        $r=0; //@line 696 "stropmodule.c"
        var $33=HEAP[$i]; //@line 697 "stropmodule.c"
        var $34=$m; //@line 697 "stropmodule.c"
        var $35=($33) < ($34); //@line 697 "stropmodule.c"
        if ($35) { __label__ = 16; break; } else { __label__ = 20; break; } //@line 697 "stropmodule.c"
      case 16: // $bb16
        var $36=HEAP[$n]; //@line 698 "stropmodule.c"
        var $37=HEAP[$sub]; //@line 698 "stropmodule.c"
        var $38=HEAP[$s]; //@line 698 "stropmodule.c"
        var $39=HEAP[$i]; //@line 698 "stropmodule.c"
        var $40=$38+$39; //@line 698 "stropmodule.c"
        var $41=_memcmp($40, $37, $36); //@line 698 "stropmodule.c"
        var $42=($41)==0; //@line 698 "stropmodule.c"
        if ($42) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 698 "stropmodule.c"
      case 17: // $bb17
        var $43=$r; //@line 699 "stropmodule.c"
        var $44=($43) + 1; //@line 699 "stropmodule.c"
        $r=$44; //@line 699 "stropmodule.c"
        var $45=HEAP[$i]; //@line 700 "stropmodule.c"
        var $46=HEAP[$n]; //@line 700 "stropmodule.c"
        var $47=($46) + ($45); //@line 700 "stropmodule.c"
        HEAP[$i]=$47; //@line 700 "stropmodule.c"
        __label__ = 18; break; //@line 700 "stropmodule.c"
      case 18: // $bb19_backedge
        var $48=HEAP[$i]; //@line 697 "stropmodule.c"
        var $49=$m; //@line 697 "stropmodule.c"
        var $50=($48) < ($49); //@line 697 "stropmodule.c"
        if ($50) { __label__ = 16; break; } else { __label__ = 20; break; } //@line 697 "stropmodule.c"
      case 19: // $bb18
        var $51=HEAP[$i]; //@line 702 "stropmodule.c"
        var $52=($51) + 1; //@line 702 "stropmodule.c"
        HEAP[$i]=$52; //@line 702 "stropmodule.c"
        __label__ = 18; break; //@line 702 "stropmodule.c"
      case 20: // $bb20
        var $53=$r; //@line 705 "stropmodule.c"
        var $54=_PyInt_FromLong($53); //@line 705 "stropmodule.c"
        $0=$54; //@line 705 "stropmodule.c"
        __label__ = 21; break; //@line 705 "stropmodule.c"
      case 21: // $bb21
        var $55=$0; //@line 679 "stropmodule.c"
        $retval=$55; //@line 679 "stropmodule.c"
        var $retval22=$retval; //@line 679 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 679 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_swapcase($self, $args) {
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
        var $s=__stackBase__;
        var $s_new;
        var $i;
        var $n=__stackBase__+4;
        var $newstr;
        var $changed;
        var $c;
        $self_addr=$self;
        $args_addr=$args;
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 723 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, __str, 1); //@line 723 "stropmodule.c"
        var $3=($2)!=0; //@line 723 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 723 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 723 "stropmodule.c"
        __label__ = 19; break; //@line 723 "stropmodule.c"
      case 2: // $bb1
        var $4=$args_addr; //@line 724 "stropmodule.c"
        var $5=_PyString_AsStringAndSize($4, $s, $n); //@line 724 "stropmodule.c"
        var $6=($5)!=0; //@line 724 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 724 "stropmodule.c"
      case 3: // $bb2
        $0=0; //@line 725 "stropmodule.c"
        __label__ = 19; break; //@line 725 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$n]; //@line 726 "stropmodule.c"
        var $8=_PyString_FromStringAndSize(0, $7); //@line 726 "stropmodule.c"
        $newstr=$8; //@line 726 "stropmodule.c"
        var $9=$newstr; //@line 727 "stropmodule.c"
        var $10=($9)==0; //@line 727 "stropmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 727 "stropmodule.c"
      case 5: // $bb4
        $0=0; //@line 728 "stropmodule.c"
        __label__ = 19; break; //@line 728 "stropmodule.c"
      case 6: // $bb5
        var $11=$newstr; //@line 729 "stropmodule.c"
        var $12=_PyString_AsString($11); //@line 729 "stropmodule.c"
        $s_new=$12; //@line 729 "stropmodule.c"
        $changed=0; //@line 730 "stropmodule.c"
        $i=0; //@line 731 "stropmodule.c"
        var $13=HEAP[$n]; //@line 731 "stropmodule.c"
        var $14=$i; //@line 731 "stropmodule.c"
        var $15=($14) < ($13); //@line 731 "stropmodule.c"
        if ($15) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 731 "stropmodule.c"
      case 7: // $bb13_thread
        var $16=$newstr; //@line 746 "stropmodule.c"
        __lastLabel__ = 7; __label__ = 15; break;
      case 8: // $bb6
        var $17=HEAP[$s]; //@line 732 "stropmodule.c"
        var $18=HEAP[$17]; //@line 732 "stropmodule.c"
        var $19=($18); //@line 732 "stropmodule.c"
        $c=$19; //@line 732 "stropmodule.c"
        var $20=$17+1; //@line 732 "stropmodule.c"
        HEAP[$s]=$20; //@line 732 "stropmodule.c"
        var $21=___ctype_b_loc(); //@line 733 "stropmodule.c"
        var $22=HEAP[$21]; //@line 733 "stropmodule.c"
        var $23=$c; //@line 733 "stropmodule.c"
        var $24=$22+2*$23; //@line 733 "stropmodule.c"
        var $25=HEAP[$24]; //@line 733 "stropmodule.c"
        var $26=($25); //@line 733 "stropmodule.c"
        var $27=($26) & 512; //@line 733 "stropmodule.c"
        var $28=($27)!=0; //@line 733 "stropmodule.c"
        if ($28) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 733 "stropmodule.c"
      case 9: // $bb7
        $changed=1; //@line 734 "stropmodule.c"
        var $29=$c; //@line 735 "stropmodule.c"
        var $30=_toupper($29); //@line 735 "stropmodule.c"
        var $31=((($30)) & 255); //@line 735 "stropmodule.c"
        var $32=$s_new; //@line 735 "stropmodule.c"
        HEAP[$32]=$31; //@line 735 "stropmodule.c"
        __label__ = 13; break; //@line 735 "stropmodule.c"
      case 10: // $bb8
        var $33=___ctype_b_loc(); //@line 737 "stropmodule.c"
        var $34=HEAP[$33]; //@line 737 "stropmodule.c"
        var $35=$c; //@line 737 "stropmodule.c"
        var $36=$34+2*$35; //@line 737 "stropmodule.c"
        var $37=HEAP[$36]; //@line 737 "stropmodule.c"
        var $38=($37); //@line 737 "stropmodule.c"
        var $39=($38) & 256; //@line 737 "stropmodule.c"
        var $40=($39)!=0; //@line 737 "stropmodule.c"
        if ($40) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 737 "stropmodule.c"
      case 11: // $bb9
        $changed=1; //@line 738 "stropmodule.c"
        var $41=$c; //@line 739 "stropmodule.c"
        var $42=_tolower($41); //@line 739 "stropmodule.c"
        var $43=((($42)) & 255); //@line 739 "stropmodule.c"
        var $44=$s_new; //@line 739 "stropmodule.c"
        HEAP[$44]=$43; //@line 739 "stropmodule.c"
        __label__ = 13; break; //@line 739 "stropmodule.c"
      case 12: // $bb10
        var $45=$c; //@line 742 "stropmodule.c"
        var $46=((($45)) & 255); //@line 742 "stropmodule.c"
        var $47=$s_new; //@line 742 "stropmodule.c"
        HEAP[$47]=$46; //@line 742 "stropmodule.c"
        __label__ = 13; break; //@line 742 "stropmodule.c"
      case 13: // $bb11
        var $48=$s_new; //@line 743 "stropmodule.c"
        var $49=$48+1; //@line 743 "stropmodule.c"
        $s_new=$49; //@line 743 "stropmodule.c"
        var $50=$i; //@line 731 "stropmodule.c"
        var $51=($50) + 1; //@line 731 "stropmodule.c"
        $i=$51; //@line 731 "stropmodule.c"
        var $52=HEAP[$n]; //@line 731 "stropmodule.c"
        var $53=$i; //@line 731 "stropmodule.c"
        var $54=($53) < ($52); //@line 731 "stropmodule.c"
        if ($54) { __label__ = 8; break; } else { __label__ = 14; break; } //@line 731 "stropmodule.c"
      case 14: // $bb13
        var $_pr=$changed;
        var $55=($_pr)==0; //@line 745 "stropmodule.c"
        var $56=$newstr; //@line 746 "stropmodule.c"
        if ($55) { __lastLabel__ = 14; __label__ = 15; break; } else { __lastLabel__ = 14; __label__ = 18; break; } //@line 745 "stropmodule.c"
      case 15: // $bb14
        var $57=__lastLabel__ == 7 ? $16 : ($56);
        var $58=$57; //@line 746 "stropmodule.c"
        var $59=HEAP[$58]; //@line 746 "stropmodule.c"
        var $60=($59) - 1; //@line 746 "stropmodule.c"
        var $61=$newstr; //@line 746 "stropmodule.c"
        var $62=$61; //@line 746 "stropmodule.c"
        HEAP[$62]=$60; //@line 746 "stropmodule.c"
        var $63=$newstr; //@line 746 "stropmodule.c"
        var $64=$63; //@line 746 "stropmodule.c"
        var $65=HEAP[$64]; //@line 746 "stropmodule.c"
        var $66=($65)==0; //@line 746 "stropmodule.c"
        if ($66) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 746 "stropmodule.c"
      case 16: // $bb15
        var $67=$newstr; //@line 746 "stropmodule.c"
        var $68=$67+4; //@line 746 "stropmodule.c"
        var $69=HEAP[$68]; //@line 746 "stropmodule.c"
        var $70=$69+24; //@line 746 "stropmodule.c"
        var $71=HEAP[$70]; //@line 746 "stropmodule.c"
        var $72=$newstr; //@line 746 "stropmodule.c"
        FUNCTION_TABLE[$71]($72); //@line 746 "stropmodule.c"
        __label__ = 17; break; //@line 746 "stropmodule.c"
      case 17: // $bb16
        var $73=$args_addr; //@line 747 "stropmodule.c"
        var $74=$73; //@line 747 "stropmodule.c"
        var $75=HEAP[$74]; //@line 747 "stropmodule.c"
        var $76=($75) + 1; //@line 747 "stropmodule.c"
        var $77=$args_addr; //@line 747 "stropmodule.c"
        var $78=$77; //@line 747 "stropmodule.c"
        HEAP[$78]=$76; //@line 747 "stropmodule.c"
        var $79=$args_addr; //@line 748 "stropmodule.c"
        $0=$79; //@line 748 "stropmodule.c"
        __label__ = 19; break; //@line 748 "stropmodule.c"
      case 18: // $bb17
        $0=$56; //@line 750 "stropmodule.c"
        __label__ = 19; break; //@line 750 "stropmodule.c"
      case 19: // $bb18
        var $80=$0; //@line 723 "stropmodule.c"
        $retval=$80; //@line 723 "stropmodule.c"
        var $retval19=$retval; //@line 723 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 723 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_atoi($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 268; _memset(__stackBase__, 0, 268);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $s=__stackBase__;
        var $end=__stackBase__+4;
        var $base=__stackBase__+8;
        var $x;
        var $buffer=__stackBase__+12;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$base]=10; //@line 768 "stropmodule.c"
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 772 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, __str, 1); //@line 772 "stropmodule.c"
        var $3=($2)!=0; //@line 772 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 772 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 772 "stropmodule.c"
        __label__ = 23; break; //@line 772 "stropmodule.c"
      case 2: // $bb1
        var $4=$args_addr; //@line 773 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, __str14, allocate([$s,0,0,0,$base,0,0,0], ["i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 773 "stropmodule.c"
        var $6=($5)==0; //@line 773 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 773 "stropmodule.c"
      case 3: // $bb2
        $0=0; //@line 774 "stropmodule.c"
        __label__ = 23; break; //@line 774 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$base]; //@line 776 "stropmodule.c"
        var $8=($7)!=0; //@line 776 "stropmodule.c"
        var $9=HEAP[$base]; //@line 776 "stropmodule.c"
        var $10=($9) <= 1; //@line 776 "stropmodule.c"
        var $or_cond=($8) & ($10);
        var $11=HEAP[$base]; //@line 776 "stropmodule.c"
        var $12=($11) > 36; //@line 776 "stropmodule.c"
        var $or_cond3=($or_cond) | ($12);
        if ($or_cond3) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 776 "stropmodule.c"
      case 5: // $bb6
        var $13=HEAP[_PyExc_ValueError]; //@line 777 "stropmodule.c"
        _PyErr_SetString($13, __str15); //@line 777 "stropmodule.c"
        $0=0; //@line 778 "stropmodule.c"
        __label__ = 23; break; //@line 778 "stropmodule.c"
      case 6: // $bb8
        var $14=HEAP[$s]; //@line 782 "stropmodule.c"
        var $15=$14+1; //@line 782 "stropmodule.c"
        HEAP[$s]=$15; //@line 782 "stropmodule.c"
        __label__ = 7; break; //@line 782 "stropmodule.c"
      case 7: // $bb9
        var $16=HEAP[$s]; //@line 781 "stropmodule.c"
        var $17=HEAP[$16]; //@line 781 "stropmodule.c"
        var $18=($17)==0; //@line 781 "stropmodule.c"
        if ($18) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 781 "stropmodule.c"
      case 8: // $bb10
        var $19=___ctype_b_loc(); //@line 781 "stropmodule.c"
        var $20=HEAP[$19]; //@line 781 "stropmodule.c"
        var $21=HEAP[$s]; //@line 781 "stropmodule.c"
        var $22=HEAP[$21]; //@line 781 "stropmodule.c"
        var $23=($22); //@line 781 "stropmodule.c"
        var $24=$20+2*$23; //@line 781 "stropmodule.c"
        var $25=HEAP[$24]; //@line 781 "stropmodule.c"
        var $26=($25); //@line 781 "stropmodule.c"
        var $27=($26) & 8192; //@line 781 "stropmodule.c"
        var $28=($27)!=0; //@line 781 "stropmodule.c"
        if ($28) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 781 "stropmodule.c"
      case 9: // $bb11
        var $29=___errno_location(); //@line 783 "stropmodule.c"
        HEAP[$29]=0; //@line 783 "stropmodule.c"
        var $30=HEAP[$base]; //@line 784 "stropmodule.c"
        var $31=($30)!=0; //@line 784 "stropmodule.c"
        if ($31) { __label__ = 12; break; } else { __label__ = 10; break; } //@line 784 "stropmodule.c"
      case 10: // $bb12
        var $32=HEAP[$s]; //@line 784 "stropmodule.c"
        var $33=$32; //@line 784 "stropmodule.c"
        var $34=HEAP[$33]; //@line 784 "stropmodule.c"
        var $35=($34)!=48; //@line 784 "stropmodule.c"
        if ($35) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 784 "stropmodule.c"
      case 11: // $bb13
        var $36=HEAP[$base]; //@line 785 "stropmodule.c"
        var $37=HEAP[$s]; //@line 785 "stropmodule.c"
        var $38=_PyOS_strtoul($37, $end, $36); //@line 785 "stropmodule.c"
        $x=$38; //@line 785 "stropmodule.c"
        __label__ = 13; break; //@line 785 "stropmodule.c"
      case 12: // $bb14
        var $39=HEAP[$base]; //@line 787 "stropmodule.c"
        var $40=HEAP[$s]; //@line 787 "stropmodule.c"
        var $41=_PyOS_strtol($40, $end, $39); //@line 787 "stropmodule.c"
        $x=$41; //@line 787 "stropmodule.c"
        __label__ = 13; break; //@line 787 "stropmodule.c"
      case 13: // $bb15
        var $42=HEAP[$end]; //@line 788 "stropmodule.c"
        var $43=HEAP[$s]; //@line 788 "stropmodule.c"
        var $44=($42)==($43); //@line 788 "stropmodule.c"
        if ($44) { __label__ = 19; break; } else { __label__ = 14; break; } //@line 788 "stropmodule.c"
      case 14: // $bb16
        var $45=___ctype_b_loc(); //@line 788 "stropmodule.c"
        var $46=HEAP[$45]; //@line 788 "stropmodule.c"
        var $47=HEAP[$end]; //@line 788 "stropmodule.c"
        var $48=$47+-1; //@line 788 "stropmodule.c"
        var $49=HEAP[$48]; //@line 788 "stropmodule.c"
        var $50=($49); //@line 788 "stropmodule.c"
        var $51=$46+2*$50; //@line 788 "stropmodule.c"
        var $52=HEAP[$51]; //@line 788 "stropmodule.c"
        var $53=($52); //@line 788 "stropmodule.c"
        var $54=($53) & 8; //@line 788 "stropmodule.c"
        var $55=($54)==0; //@line 788 "stropmodule.c"
        if ($55) { __label__ = 19; break; } else { __label__ = 16; break; } //@line 788 "stropmodule.c"
      case 15: // $bb18
        var $56=HEAP[$end]; //@line 791 "stropmodule.c"
        var $57=$56+1; //@line 791 "stropmodule.c"
        HEAP[$end]=$57; //@line 791 "stropmodule.c"
        __label__ = 16; break; //@line 791 "stropmodule.c"
      case 16: // $bb19
        var $58=HEAP[$end]; //@line 790 "stropmodule.c"
        var $59=HEAP[$58]; //@line 790 "stropmodule.c"
        var $60=($59)==0; //@line 790 "stropmodule.c"
        if ($60) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 790 "stropmodule.c"
      case 17: // $bb20
        var $61=___ctype_b_loc(); //@line 790 "stropmodule.c"
        var $62=HEAP[$61]; //@line 790 "stropmodule.c"
        var $63=HEAP[$end]; //@line 790 "stropmodule.c"
        var $64=HEAP[$63]; //@line 790 "stropmodule.c"
        var $65=($64); //@line 790 "stropmodule.c"
        var $66=$62+2*$65; //@line 790 "stropmodule.c"
        var $67=HEAP[$66]; //@line 790 "stropmodule.c"
        var $68=($67); //@line 790 "stropmodule.c"
        var $69=($68) & 8192; //@line 790 "stropmodule.c"
        var $70=($69)!=0; //@line 790 "stropmodule.c"
        if ($70) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 790 "stropmodule.c"
      case 18: // $bb21
        var $71=HEAP[$end]; //@line 792 "stropmodule.c"
        var $72=HEAP[$71]; //@line 792 "stropmodule.c"
        var $73=($72)!=0; //@line 792 "stropmodule.c"
        if ($73) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 792 "stropmodule.c"
      case 19: // $bad
        var $74=HEAP[$s]; //@line 794 "stropmodule.c"
        var $buffer22=$buffer; //@line 794 "stropmodule.c"
        var $75=_PyOS_snprintf($buffer22, 256, __str16, allocate([$74,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 794 "stropmodule.c"
        var $76=HEAP[_PyExc_ValueError]; //@line 796 "stropmodule.c"
        var $buffer23=$buffer; //@line 796 "stropmodule.c"
        _PyErr_SetString($76, $buffer23); //@line 796 "stropmodule.c"
        $0=0; //@line 797 "stropmodule.c"
        __label__ = 23; break; //@line 797 "stropmodule.c"
      case 20: // $bb24
        var $77=___errno_location(); //@line 799 "stropmodule.c"
        var $78=HEAP[$77]; //@line 799 "stropmodule.c"
        var $79=($78)!=0; //@line 799 "stropmodule.c"
        if ($79) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 799 "stropmodule.c"
      case 21: // $bb25
        var $80=HEAP[$s]; //@line 800 "stropmodule.c"
        var $buffer26=$buffer; //@line 800 "stropmodule.c"
        var $81=_PyOS_snprintf($buffer26, 256, __str17, allocate([$80,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 800 "stropmodule.c"
        var $82=HEAP[_PyExc_ValueError]; //@line 802 "stropmodule.c"
        var $buffer27=$buffer; //@line 802 "stropmodule.c"
        _PyErr_SetString($82, $buffer27); //@line 802 "stropmodule.c"
        $0=0; //@line 803 "stropmodule.c"
        __label__ = 23; break; //@line 803 "stropmodule.c"
      case 22: // $bb28
        var $83=$x; //@line 805 "stropmodule.c"
        var $84=_PyInt_FromLong($83); //@line 805 "stropmodule.c"
        $0=$84; //@line 805 "stropmodule.c"
        __label__ = 23; break; //@line 805 "stropmodule.c"
      case 23: // $bb29
        var $85=$0; //@line 772 "stropmodule.c"
        $retval=$85; //@line 772 "stropmodule.c"
        var $retval30=$retval; //@line 772 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval30; //@line 772 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_atol($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 268; _memset(__stackBase__, 0, 268);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $s=__stackBase__;
        var $end=__stackBase__+4;
        var $base=__stackBase__+8;
        var $x;
        var $buffer=__stackBase__+12;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$base]=10; //@line 824 "stropmodule.c"
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 828 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, __str, 1); //@line 828 "stropmodule.c"
        var $3=($2)!=0; //@line 828 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 828 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 828 "stropmodule.c"
        __label__ = 25; break; //@line 828 "stropmodule.c"
      case 2: // $bb1
        var $4=$args_addr; //@line 829 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, __str18, allocate([$s,0,0,0,$base,0,0,0], ["i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 829 "stropmodule.c"
        var $6=($5)==0; //@line 829 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 829 "stropmodule.c"
      case 3: // $bb2
        $0=0; //@line 830 "stropmodule.c"
        __label__ = 25; break; //@line 830 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$base]; //@line 832 "stropmodule.c"
        var $8=($7)!=0; //@line 832 "stropmodule.c"
        var $9=HEAP[$base]; //@line 832 "stropmodule.c"
        var $10=($9) <= 1; //@line 832 "stropmodule.c"
        var $or_cond=($8) & ($10);
        var $11=HEAP[$base]; //@line 832 "stropmodule.c"
        var $12=($11) > 36; //@line 832 "stropmodule.c"
        var $or_cond3=($or_cond) | ($12);
        if ($or_cond3) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 832 "stropmodule.c"
      case 5: // $bb6
        var $13=HEAP[_PyExc_ValueError]; //@line 833 "stropmodule.c"
        _PyErr_SetString($13, __str19); //@line 833 "stropmodule.c"
        $0=0; //@line 834 "stropmodule.c"
        __label__ = 25; break; //@line 834 "stropmodule.c"
      case 6: // $bb8
        var $14=HEAP[$s]; //@line 838 "stropmodule.c"
        var $15=$14+1; //@line 838 "stropmodule.c"
        HEAP[$s]=$15; //@line 838 "stropmodule.c"
        __label__ = 7; break; //@line 838 "stropmodule.c"
      case 7: // $bb9
        var $16=HEAP[$s]; //@line 837 "stropmodule.c"
        var $17=HEAP[$16]; //@line 837 "stropmodule.c"
        var $18=($17)==0; //@line 837 "stropmodule.c"
        if ($18) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 837 "stropmodule.c"
      case 8: // $bb10
        var $19=___ctype_b_loc(); //@line 837 "stropmodule.c"
        var $20=HEAP[$19]; //@line 837 "stropmodule.c"
        var $21=HEAP[$s]; //@line 837 "stropmodule.c"
        var $22=HEAP[$21]; //@line 837 "stropmodule.c"
        var $23=($22); //@line 837 "stropmodule.c"
        var $24=$20+2*$23; //@line 837 "stropmodule.c"
        var $25=HEAP[$24]; //@line 837 "stropmodule.c"
        var $26=($25); //@line 837 "stropmodule.c"
        var $27=($26) & 8192; //@line 837 "stropmodule.c"
        var $28=($27)!=0; //@line 837 "stropmodule.c"
        if ($28) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 837 "stropmodule.c"
      case 9: // $bb11
        var $29=HEAP[$s]; //@line 839 "stropmodule.c"
        var $30=$29; //@line 839 "stropmodule.c"
        var $31=HEAP[$30]; //@line 839 "stropmodule.c"
        var $32=($31)==0; //@line 839 "stropmodule.c"
        if ($32) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 839 "stropmodule.c"
      case 10: // $bb12
        var $33=HEAP[_PyExc_ValueError]; //@line 840 "stropmodule.c"
        _PyErr_SetString($33, __str20); //@line 840 "stropmodule.c"
        $0=0; //@line 841 "stropmodule.c"
        __label__ = 25; break; //@line 841 "stropmodule.c"
      case 11: // $bb13
        var $34=HEAP[$base]; //@line 843 "stropmodule.c"
        var $35=HEAP[$s]; //@line 843 "stropmodule.c"
        var $36=_PyLong_FromString($35, $end, $34); //@line 843 "stropmodule.c"
        $x=$36; //@line 843 "stropmodule.c"
        var $37=$x; //@line 844 "stropmodule.c"
        var $38=($37)==0; //@line 844 "stropmodule.c"
        if ($38) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 844 "stropmodule.c"
      case 12: // $bb14
        $0=0; //@line 845 "stropmodule.c"
        __label__ = 25; break; //@line 845 "stropmodule.c"
      case 13: // $bb15
        var $39=HEAP[$base]; //@line 846 "stropmodule.c"
        var $40=($39)==0; //@line 846 "stropmodule.c"
        if ($40) { __label__ = 14; break; } else { __label__ = 18; break; } //@line 846 "stropmodule.c"
      case 14: // $bb16
        var $41=HEAP[$end]; //@line 846 "stropmodule.c"
        var $42=HEAP[$41]; //@line 846 "stropmodule.c"
        var $43=($42)==108; //@line 846 "stropmodule.c"
        if ($43) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 846 "stropmodule.c"
      case 15: // $bb17
        var $44=HEAP[$end]; //@line 846 "stropmodule.c"
        var $45=HEAP[$44]; //@line 846 "stropmodule.c"
        var $46=($45)==76; //@line 846 "stropmodule.c"
        if ($46) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 846 "stropmodule.c"
      case 16: // $bb18
        var $47=HEAP[$end]; //@line 847 "stropmodule.c"
        var $48=$47+1; //@line 847 "stropmodule.c"
        HEAP[$end]=$48; //@line 847 "stropmodule.c"
        __label__ = 18; break; //@line 847 "stropmodule.c"
      case 17: // $bb20
        var $49=HEAP[$end]; //@line 849 "stropmodule.c"
        var $50=$49+1; //@line 849 "stropmodule.c"
        HEAP[$end]=$50; //@line 849 "stropmodule.c"
        __label__ = 18; break; //@line 849 "stropmodule.c"
      case 18: // $bb21
        var $51=HEAP[$end]; //@line 848 "stropmodule.c"
        var $52=HEAP[$51]; //@line 848 "stropmodule.c"
        var $53=($52)==0; //@line 848 "stropmodule.c"
        if ($53) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 848 "stropmodule.c"
      case 19: // $bb22
        var $54=___ctype_b_loc(); //@line 848 "stropmodule.c"
        var $55=HEAP[$54]; //@line 848 "stropmodule.c"
        var $56=HEAP[$end]; //@line 848 "stropmodule.c"
        var $57=HEAP[$56]; //@line 848 "stropmodule.c"
        var $58=($57); //@line 848 "stropmodule.c"
        var $59=$55+2*$58; //@line 848 "stropmodule.c"
        var $60=HEAP[$59]; //@line 848 "stropmodule.c"
        var $61=($60); //@line 848 "stropmodule.c"
        var $62=($61) & 8192; //@line 848 "stropmodule.c"
        var $63=($62)!=0; //@line 848 "stropmodule.c"
        if ($63) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 848 "stropmodule.c"
      case 20: // $bb23
        var $64=HEAP[$end]; //@line 850 "stropmodule.c"
        var $65=HEAP[$64]; //@line 850 "stropmodule.c"
        var $66=($65)!=0; //@line 850 "stropmodule.c"
        if ($66) { __label__ = 21; break; } else { __label__ = 24; break; } //@line 850 "stropmodule.c"
      case 21: // $bb24
        var $67=HEAP[$s]; //@line 851 "stropmodule.c"
        var $buffer25=$buffer; //@line 851 "stropmodule.c"
        var $68=_PyOS_snprintf($buffer25, 256, __str21, allocate([$67,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 851 "stropmodule.c"
        var $69=HEAP[_PyExc_ValueError]; //@line 853 "stropmodule.c"
        var $buffer26=$buffer; //@line 853 "stropmodule.c"
        _PyErr_SetString($69, $buffer26); //@line 853 "stropmodule.c"
        var $70=$x; //@line 854 "stropmodule.c"
        var $71=$70; //@line 854 "stropmodule.c"
        var $72=HEAP[$71]; //@line 854 "stropmodule.c"
        var $73=($72) - 1; //@line 854 "stropmodule.c"
        var $74=$x; //@line 854 "stropmodule.c"
        var $75=$74; //@line 854 "stropmodule.c"
        HEAP[$75]=$73; //@line 854 "stropmodule.c"
        var $76=$x; //@line 854 "stropmodule.c"
        var $77=$76; //@line 854 "stropmodule.c"
        var $78=HEAP[$77]; //@line 854 "stropmodule.c"
        var $79=($78)==0; //@line 854 "stropmodule.c"
        if ($79) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 854 "stropmodule.c"
      case 22: // $bb27
        var $80=$x; //@line 854 "stropmodule.c"
        var $81=$80+4; //@line 854 "stropmodule.c"
        var $82=HEAP[$81]; //@line 854 "stropmodule.c"
        var $83=$82+24; //@line 854 "stropmodule.c"
        var $84=HEAP[$83]; //@line 854 "stropmodule.c"
        var $85=$x; //@line 854 "stropmodule.c"
        FUNCTION_TABLE[$84]($85); //@line 854 "stropmodule.c"
        __label__ = 23; break; //@line 854 "stropmodule.c"
      case 23: // $bb28
        $0=0; //@line 855 "stropmodule.c"
        __label__ = 25; break; //@line 855 "stropmodule.c"
      case 24: // $bb29
        var $86=$x; //@line 857 "stropmodule.c"
        $0=$86; //@line 857 "stropmodule.c"
        __label__ = 25; break; //@line 857 "stropmodule.c"
      case 25: // $bb30
        var $87=$0; //@line 828 "stropmodule.c"
        $retval=$87; //@line 828 "stropmodule.c"
        var $retval31=$retval; //@line 828 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval31; //@line 828 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_atof($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 264; _memset(__stackBase__, 0, 264);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $s=__stackBase__;
        var $end=__stackBase__+4;
        var $x;
        var $buffer=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 873 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, __str, 1); //@line 873 "stropmodule.c"
        var $3=($2)!=0; //@line 873 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 873 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 873 "stropmodule.c"
        __label__ = 18; break; //@line 873 "stropmodule.c"
      case 2: // $bb1
        var $4=$args_addr; //@line 874 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, __str22, allocate([$s,0,0,0], ["i8**",0,0,0], ALLOC_STACK)); //@line 874 "stropmodule.c"
        var $6=($5)==0; //@line 874 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 874 "stropmodule.c"
      case 3: // $bb2
        $0=0; //@line 875 "stropmodule.c"
        __label__ = 18; break; //@line 875 "stropmodule.c"
      case 4: // $bb4
        var $7=HEAP[$s]; //@line 877 "stropmodule.c"
        var $8=$7+1; //@line 877 "stropmodule.c"
        HEAP[$s]=$8; //@line 877 "stropmodule.c"
        __label__ = 5; break; //@line 877 "stropmodule.c"
      case 5: // $bb5
        var $9=HEAP[$s]; //@line 876 "stropmodule.c"
        var $10=HEAP[$9]; //@line 876 "stropmodule.c"
        var $11=($10)==0; //@line 876 "stropmodule.c"
        if ($11) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 876 "stropmodule.c"
      case 6: // $bb6
        var $12=___ctype_b_loc(); //@line 876 "stropmodule.c"
        var $13=HEAP[$12]; //@line 876 "stropmodule.c"
        var $14=HEAP[$s]; //@line 876 "stropmodule.c"
        var $15=HEAP[$14]; //@line 876 "stropmodule.c"
        var $16=($15); //@line 876 "stropmodule.c"
        var $17=$13+2*$16; //@line 876 "stropmodule.c"
        var $18=HEAP[$17]; //@line 876 "stropmodule.c"
        var $19=($18); //@line 876 "stropmodule.c"
        var $20=($19) & 8192; //@line 876 "stropmodule.c"
        var $21=($20)!=0; //@line 876 "stropmodule.c"
        if ($21) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 876 "stropmodule.c"
      case 7: // $bb7
        var $22=HEAP[$s]; //@line 878 "stropmodule.c"
        var $23=$22; //@line 878 "stropmodule.c"
        var $24=HEAP[$23]; //@line 878 "stropmodule.c"
        var $25=($24)==0; //@line 878 "stropmodule.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 878 "stropmodule.c"
      case 8: // $bb8
        var $26=HEAP[_PyExc_ValueError]; //@line 879 "stropmodule.c"
        _PyErr_SetString($26, __str23); //@line 879 "stropmodule.c"
        $0=0; //@line 880 "stropmodule.c"
        __label__ = 18; break; //@line 880 "stropmodule.c"
      case 9: // $bb9
        var $27=HEAP[_PyExc_OverflowError]; //@line 884 "stropmodule.c"
        var $28=HEAP[$s]; //@line 884 "stropmodule.c"
        var $29=_PyOS_string_to_double($28, $end, $27); //@line 884 "stropmodule.c"
        $x=$29; //@line 884 "stropmodule.c"
        var $30=$x; //@line 886 "stropmodule.c"
        var $31=($30) == -1; //@line 886 "stropmodule.c"
        if ($31) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 886 "stropmodule.c"
      case 10: // $bb10
        var $32=_PyErr_Occurred(); //@line 886 "stropmodule.c"
        var $33=($32)!=0; //@line 886 "stropmodule.c"
        if ($33) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 886 "stropmodule.c"
      case 11: // $bb11
        $0=0; //@line 887 "stropmodule.c"
        __label__ = 18; break; //@line 887 "stropmodule.c"
      case 12: // $bb13
        var $34=HEAP[$end]; //@line 889 "stropmodule.c"
        var $35=$34+1; //@line 889 "stropmodule.c"
        HEAP[$end]=$35; //@line 889 "stropmodule.c"
        __label__ = 13; break; //@line 889 "stropmodule.c"
      case 13: // $bb14
        var $36=HEAP[$end]; //@line 888 "stropmodule.c"
        var $37=HEAP[$36]; //@line 888 "stropmodule.c"
        var $38=($37)==0; //@line 888 "stropmodule.c"
        if ($38) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 888 "stropmodule.c"
      case 14: // $bb15
        var $39=___ctype_b_loc(); //@line 888 "stropmodule.c"
        var $40=HEAP[$39]; //@line 888 "stropmodule.c"
        var $41=HEAP[$end]; //@line 888 "stropmodule.c"
        var $42=HEAP[$41]; //@line 888 "stropmodule.c"
        var $43=($42); //@line 888 "stropmodule.c"
        var $44=$40+2*$43; //@line 888 "stropmodule.c"
        var $45=HEAP[$44]; //@line 888 "stropmodule.c"
        var $46=($45); //@line 888 "stropmodule.c"
        var $47=($46) & 8192; //@line 888 "stropmodule.c"
        var $48=($47)!=0; //@line 888 "stropmodule.c"
        if ($48) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 888 "stropmodule.c"
      case 15: // $bb16
        var $49=HEAP[$end]; //@line 890 "stropmodule.c"
        var $50=HEAP[$49]; //@line 890 "stropmodule.c"
        var $51=($50)!=0; //@line 890 "stropmodule.c"
        if ($51) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 890 "stropmodule.c"
      case 16: // $bb17
        var $52=HEAP[$s]; //@line 891 "stropmodule.c"
        var $buffer18=$buffer; //@line 891 "stropmodule.c"
        var $53=_PyOS_snprintf($buffer18, 256, __str24, allocate([$52,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 891 "stropmodule.c"
        var $54=HEAP[_PyExc_ValueError]; //@line 893 "stropmodule.c"
        var $buffer19=$buffer; //@line 893 "stropmodule.c"
        _PyErr_SetString($54, $buffer19); //@line 893 "stropmodule.c"
        $0=0; //@line 894 "stropmodule.c"
        __label__ = 18; break; //@line 894 "stropmodule.c"
      case 17: // $bb20
        var $55=$x; //@line 896 "stropmodule.c"
        var $56=_PyFloat_FromDouble($55); //@line 896 "stropmodule.c"
        $0=$56; //@line 896 "stropmodule.c"
        __label__ = 18; break; //@line 896 "stropmodule.c"
      case 18: // $bb21
        var $57=$0; //@line 873 "stropmodule.c"
        $retval=$57; //@line 873 "stropmodule.c"
        var $retval22=$retval; //@line 873 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 873 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_maketrans($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $c;
        var $from=__stackBase__;
        var $to=__stackBase__+4;
        var $i;
        var $fromlen=__stackBase__+8;
        var $tolen=__stackBase__+12;
        var $result;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$from]=0; //@line 910 "stropmodule.c"
        HEAP[$to]=0; //@line 910 "stropmodule.c"
        HEAP[$fromlen]=0; //@line 911 "stropmodule.c"
        HEAP[$tolen]=0; //@line 911 "stropmodule.c"
        var $1=$args_addr; //@line 914 "stropmodule.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str25, allocate([$from,0,0,0,$fromlen,0,0,0,$to,0,0,0,$tolen,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 914 "stropmodule.c"
        var $3=($2)==0; //@line 914 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 914 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 915 "stropmodule.c"
        __label__ = 11; break; //@line 915 "stropmodule.c"
      case 2: // $bb1
        var $4=HEAP[$fromlen]; //@line 917 "stropmodule.c"
        var $5=HEAP[$tolen]; //@line 917 "stropmodule.c"
        var $6=($4)!=($5); //@line 917 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 917 "stropmodule.c"
      case 3: // $bb2
        var $7=HEAP[_PyExc_ValueError]; //@line 918 "stropmodule.c"
        _PyErr_SetString($7, __str26); //@line 918 "stropmodule.c"
        $0=0; //@line 920 "stropmodule.c"
        __label__ = 11; break; //@line 920 "stropmodule.c"
      case 4: // $bb3
        var $8=_PyString_FromStringAndSize(0, 256); //@line 923 "stropmodule.c"
        $result=$8; //@line 923 "stropmodule.c"
        var $9=$result; //@line 924 "stropmodule.c"
        var $10=($9)==0; //@line 924 "stropmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 924 "stropmodule.c"
      case 5: // $bb4
        $0=0; //@line 925 "stropmodule.c"
        __label__ = 11; break; //@line 925 "stropmodule.c"
      case 6: // $bb5
        var $11=$result; //@line 926 "stropmodule.c"
        var $12=$11; //@line 926 "stropmodule.c"
        var $13=$12+20; //@line 926 "stropmodule.c"
        var $14=$13; //@line 926 "stropmodule.c"
        $c=$14; //@line 926 "stropmodule.c"
        $i=0; //@line 927 "stropmodule.c"
        __label__ = 7; break;
      case 7: // $bb6
        var $15=$i; //@line 928 "stropmodule.c"
        var $16=((($15)) & 255); //@line 928 "stropmodule.c"
        var $17=$c; //@line 928 "stropmodule.c"
        var $18=$i; //@line 928 "stropmodule.c"
        var $19=$17+$18; //@line 928 "stropmodule.c"
        HEAP[$19]=$16; //@line 928 "stropmodule.c"
        var $20=$i; //@line 927 "stropmodule.c"
        var $21=($20) + 1; //@line 927 "stropmodule.c"
        $i=$21; //@line 927 "stropmodule.c"
        var $22=($21) <= 255; //@line 927 "stropmodule.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 927 "stropmodule.c"
      case 8: // $bb8
        $i=0; //@line 929 "stropmodule.c"
        var $23=HEAP[$fromlen]; //@line 929 "stropmodule.c"
        var $24=$i; //@line 929 "stropmodule.c"
        var $25=($24) < ($23); //@line 929 "stropmodule.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 929 "stropmodule.c"
      case 9: // $bb9
        var $26=HEAP[$from]; //@line 930 "stropmodule.c"
        var $27=$i; //@line 930 "stropmodule.c"
        var $28=$26+$27; //@line 930 "stropmodule.c"
        var $29=HEAP[$28]; //@line 930 "stropmodule.c"
        var $30=($29); //@line 930 "stropmodule.c"
        var $31=HEAP[$to]; //@line 930 "stropmodule.c"
        var $32=$i; //@line 930 "stropmodule.c"
        var $33=$31+$32; //@line 930 "stropmodule.c"
        var $34=HEAP[$33]; //@line 930 "stropmodule.c"
        var $35=$c; //@line 930 "stropmodule.c"
        var $36=$35+$30; //@line 930 "stropmodule.c"
        HEAP[$36]=$34; //@line 930 "stropmodule.c"
        var $37=$i; //@line 929 "stropmodule.c"
        var $38=($37) + 1; //@line 929 "stropmodule.c"
        $i=$38; //@line 929 "stropmodule.c"
        var $39=HEAP[$fromlen]; //@line 929 "stropmodule.c"
        var $40=$i; //@line 929 "stropmodule.c"
        var $41=($40) < ($39); //@line 929 "stropmodule.c"
        if ($41) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 929 "stropmodule.c"
      case 10: // $bb11
        var $42=$result; //@line 932 "stropmodule.c"
        $0=$42; //@line 932 "stropmodule.c"
        __label__ = 11; break; //@line 932 "stropmodule.c"
      case 11: // $bb12
        var $43=$0; //@line 915 "stropmodule.c"
        $retval=$43; //@line 915 "stropmodule.c"
        var $retval13=$retval; //@line 915 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 915 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_translate($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 1048; _memset(__stackBase__, 0, 1048);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $input;
        var $table;
        var $output;
        var $i;
        var $c;
        var $changed;
        var $input_obj=__stackBase__;
        var $table1=__stackBase__+4;
        var $output_start;
        var $del_table=__stackBase__+8;
        var $inlen;
        var $tablen=__stackBase__+12;
        var $dellen=__stackBase__+16;
        var $result=__stackBase__+20;
        var $trans_table=__stackBase__+24;
        $self_addr=$self;
        $args_addr=$args;
        $changed=0; //@line 949 "stropmodule.c"
        HEAP[$del_table]=0; //@line 951 "stropmodule.c"
        HEAP[$dellen]=0; //@line 952 "stropmodule.c"
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 956 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, __str, 1); //@line 956 "stropmodule.c"
        var $3=($2)!=0; //@line 956 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 956 "stropmodule.c"
        __label__ = 34; break; //@line 956 "stropmodule.c"
      case 2: // $bb1
        var $4=$args_addr; //@line 957 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, __str27, allocate([$input_obj,0,0,0,$table1,0,0,0,$tablen,0,0,0,$del_table,0,0,0,$dellen,0,0,0], ["%struct.PyObject**",0,0,0,"i8**",0,0,0,"i32*",0,0,0,"i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 957 "stropmodule.c"
        var $6=($5)==0; //@line 957 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 957 "stropmodule.c"
      case 3: // $bb2
        $0=0; //@line 959 "stropmodule.c"
        __label__ = 34; break; //@line 959 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$tablen]; //@line 960 "stropmodule.c"
        var $8=($7)!=256; //@line 960 "stropmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 960 "stropmodule.c"
      case 5: // $bb4
        var $9=HEAP[_PyExc_ValueError]; //@line 961 "stropmodule.c"
        _PyErr_SetString($9, __str28); //@line 961 "stropmodule.c"
        $0=0; //@line 963 "stropmodule.c"
        __label__ = 34; break; //@line 963 "stropmodule.c"
      case 6: // $bb5
        var $10=HEAP[$table1]; //@line 966 "stropmodule.c"
        $table=$10; //@line 966 "stropmodule.c"
        var $11=HEAP[$input_obj]; //@line 967 "stropmodule.c"
        var $12=$11; //@line 967 "stropmodule.c"
        var $13=$12+8; //@line 967 "stropmodule.c"
        var $14=HEAP[$13]; //@line 967 "stropmodule.c"
        $inlen=$14; //@line 967 "stropmodule.c"
        var $15=$inlen; //@line 968 "stropmodule.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 968 "stropmodule.c"
        HEAP[$result]=$16; //@line 968 "stropmodule.c"
        var $17=HEAP[$result]; //@line 969 "stropmodule.c"
        var $18=($17)==0; //@line 969 "stropmodule.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 969 "stropmodule.c"
      case 7: // $bb6
        $0=0; //@line 970 "stropmodule.c"
        __label__ = 34; break; //@line 970 "stropmodule.c"
      case 8: // $bb7
        var $19=HEAP[$result]; //@line 971 "stropmodule.c"
        var $20=_PyString_AsString($19); //@line 971 "stropmodule.c"
        $output=$20; //@line 971 "stropmodule.c"
        var $21=$output; //@line 971 "stropmodule.c"
        $output_start=$21; //@line 971 "stropmodule.c"
        var $22=HEAP[$input_obj]; //@line 972 "stropmodule.c"
        var $23=_PyString_AsString($22); //@line 972 "stropmodule.c"
        $input=$23; //@line 972 "stropmodule.c"
        var $24=HEAP[$dellen]; //@line 974 "stropmodule.c"
        var $25=($24)==0; //@line 974 "stropmodule.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 18; break; } //@line 974 "stropmodule.c"
      case 9: // $bb8
        var $26=$inlen; //@line 976 "stropmodule.c"
        $i=$26; //@line 976 "stropmodule.c"
        var $27=$i; //@line 976 "stropmodule.c"
        var $28=($27) - 1; //@line 976 "stropmodule.c"
        $i=$28; //@line 976 "stropmodule.c"
        var $29=($28) >= 0; //@line 976 "stropmodule.c"
        if ($29) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 976 "stropmodule.c"
      case 10: // $bb9
        var $30=$input; //@line 977 "stropmodule.c"
        var $31=HEAP[$30]; //@line 977 "stropmodule.c"
        var $32=($31); //@line 977 "stropmodule.c"
        $c=$32; //@line 977 "stropmodule.c"
        var $33=$input; //@line 977 "stropmodule.c"
        var $34=$33+1; //@line 977 "stropmodule.c"
        $input=$34; //@line 977 "stropmodule.c"
        var $35=$table; //@line 978 "stropmodule.c"
        var $36=$c; //@line 978 "stropmodule.c"
        var $37=$35+$36; //@line 978 "stropmodule.c"
        var $38=HEAP[$37]; //@line 978 "stropmodule.c"
        var $39=$output; //@line 978 "stropmodule.c"
        HEAP[$39]=$38; //@line 978 "stropmodule.c"
        var $40=$output; //@line 978 "stropmodule.c"
        var $41=HEAP[$40]; //@line 978 "stropmodule.c"
        var $42=($41); //@line 978 "stropmodule.c"
        var $43=$c; //@line 978 "stropmodule.c"
        var $44=($42)!=($43); //@line 978 "stropmodule.c"
        var $45=($44); //@line 978 "stropmodule.c"
        var $46=$output; //@line 978 "stropmodule.c"
        var $47=$46+1; //@line 978 "stropmodule.c"
        $output=$47; //@line 978 "stropmodule.c"
        var $toBool=($45)!=0; //@line 978 "stropmodule.c"
        if ($toBool) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 978 "stropmodule.c"
      case 11: // $bb11_backedge
        var $48=$i; //@line 976 "stropmodule.c"
        var $49=($48) - 1; //@line 976 "stropmodule.c"
        $i=$49; //@line 976 "stropmodule.c"
        var $50=($49) >= 0; //@line 976 "stropmodule.c"
        if ($50) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 976 "stropmodule.c"
      case 12: // $bb10
        $changed=1; //@line 979 "stropmodule.c"
        __label__ = 11; break; //@line 979 "stropmodule.c"
      case 13: // $bb12
        var $51=$changed; //@line 981 "stropmodule.c"
        var $52=($51)!=0; //@line 981 "stropmodule.c"
        var $53=HEAP[$result]; //@line 982 "stropmodule.c"
        if ($52) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 981 "stropmodule.c"
      case 14: // $bb13
        $0=$53; //@line 982 "stropmodule.c"
        __label__ = 34; break; //@line 982 "stropmodule.c"
      case 15: // $bb14
        var $54=$53; //@line 983 "stropmodule.c"
        var $55=HEAP[$54]; //@line 983 "stropmodule.c"
        var $56=($55) - 1; //@line 983 "stropmodule.c"
        var $57=$53; //@line 983 "stropmodule.c"
        HEAP[$57]=$56; //@line 983 "stropmodule.c"
        var $58=$53; //@line 983 "stropmodule.c"
        var $59=HEAP[$58]; //@line 983 "stropmodule.c"
        var $60=($59)==0; //@line 983 "stropmodule.c"
        if ($60) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 983 "stropmodule.c"
      case 16: // $bb15
        var $61=HEAP[$result]; //@line 983 "stropmodule.c"
        var $62=$61+4; //@line 983 "stropmodule.c"
        var $63=HEAP[$62]; //@line 983 "stropmodule.c"
        var $64=$63+24; //@line 983 "stropmodule.c"
        var $65=HEAP[$64]; //@line 983 "stropmodule.c"
        var $66=HEAP[$result]; //@line 983 "stropmodule.c"
        FUNCTION_TABLE[$65]($66); //@line 983 "stropmodule.c"
        __label__ = 17; break; //@line 983 "stropmodule.c"
      case 17: // $bb16
        var $67=HEAP[$input_obj]; //@line 984 "stropmodule.c"
        var $68=$67; //@line 984 "stropmodule.c"
        var $69=HEAP[$68]; //@line 984 "stropmodule.c"
        var $70=($69) + 1; //@line 984 "stropmodule.c"
        var $71=$67; //@line 984 "stropmodule.c"
        HEAP[$71]=$70; //@line 984 "stropmodule.c"
        var $72=HEAP[$input_obj]; //@line 985 "stropmodule.c"
        $0=$72; //@line 985 "stropmodule.c"
        __label__ = 34; break; //@line 985 "stropmodule.c"
      case 18: // $bb17
        $i=0; //@line 988 "stropmodule.c"
        __label__ = 19; break;
      case 19: // $bb18
        var $73=$i; //@line 989 "stropmodule.c"
        var $74=$table; //@line 989 "stropmodule.c"
        var $75=$i; //@line 989 "stropmodule.c"
        var $76=$74+$75; //@line 989 "stropmodule.c"
        var $77=HEAP[$76]; //@line 989 "stropmodule.c"
        var $78=($77); //@line 989 "stropmodule.c"
        var $79=$trans_table+$73*4; //@line 989 "stropmodule.c"
        HEAP[$79]=$78; //@line 989 "stropmodule.c"
        var $80=$i; //@line 988 "stropmodule.c"
        var $81=($80) + 1; //@line 988 "stropmodule.c"
        $i=$81; //@line 988 "stropmodule.c"
        var $82=($81) <= 255; //@line 988 "stropmodule.c"
        if ($82) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 988 "stropmodule.c"
      case 20: // $bb20
        $i=0; //@line 991 "stropmodule.c"
        var $83=HEAP[$dellen]; //@line 991 "stropmodule.c"
        var $84=$i; //@line 991 "stropmodule.c"
        var $85=($84) < ($83); //@line 991 "stropmodule.c"
        if ($85) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 991 "stropmodule.c"
      case 21: // $bb21
        var $86=HEAP[$del_table]; //@line 992 "stropmodule.c"
        var $87=$i; //@line 992 "stropmodule.c"
        var $88=$86+$87; //@line 992 "stropmodule.c"
        var $89=HEAP[$88]; //@line 992 "stropmodule.c"
        var $90=($89); //@line 992 "stropmodule.c"
        var $91=$trans_table+$90*4; //@line 992 "stropmodule.c"
        HEAP[$91]=-1; //@line 992 "stropmodule.c"
        var $92=$i; //@line 991 "stropmodule.c"
        var $93=($92) + 1; //@line 991 "stropmodule.c"
        $i=$93; //@line 991 "stropmodule.c"
        var $94=HEAP[$dellen]; //@line 991 "stropmodule.c"
        var $95=$i; //@line 991 "stropmodule.c"
        var $96=($95) < ($94); //@line 991 "stropmodule.c"
        if ($96) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 991 "stropmodule.c"
      case 22: // $bb23
        var $97=$inlen; //@line 994 "stropmodule.c"
        $i=$97; //@line 994 "stropmodule.c"
        var $98=$i; //@line 994 "stropmodule.c"
        var $99=($98) - 1; //@line 994 "stropmodule.c"
        $i=$99; //@line 994 "stropmodule.c"
        var $100=($99) >= 0; //@line 994 "stropmodule.c"
        if ($100) { __label__ = 23; break; } else { __label__ = 27; break; } //@line 994 "stropmodule.c"
      case 23: // $bb24
        var $101=$input; //@line 995 "stropmodule.c"
        var $102=HEAP[$101]; //@line 995 "stropmodule.c"
        var $103=($102); //@line 995 "stropmodule.c"
        $c=$103; //@line 995 "stropmodule.c"
        var $104=$input; //@line 995 "stropmodule.c"
        var $105=$104+1; //@line 995 "stropmodule.c"
        $input=$105; //@line 995 "stropmodule.c"
        var $106=$c; //@line 996 "stropmodule.c"
        var $107=$trans_table+$106*4; //@line 996 "stropmodule.c"
        var $108=HEAP[$107]; //@line 996 "stropmodule.c"
        var $109=($108)!=-1; //@line 996 "stropmodule.c"
        if ($109) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 996 "stropmodule.c"
      case 24: // $bb25
        var $110=$c; //@line 997 "stropmodule.c"
        var $111=$trans_table+$110*4; //@line 997 "stropmodule.c"
        var $112=HEAP[$111]; //@line 997 "stropmodule.c"
        var $113=((($112)) & 255); //@line 997 "stropmodule.c"
        var $114=$output; //@line 997 "stropmodule.c"
        HEAP[$114]=$113; //@line 997 "stropmodule.c"
        var $115=$output; //@line 997 "stropmodule.c"
        var $116=HEAP[$115]; //@line 997 "stropmodule.c"
        var $117=($116); //@line 997 "stropmodule.c"
        var $118=$c; //@line 997 "stropmodule.c"
        var $119=($117)==($118); //@line 997 "stropmodule.c"
        var $120=($119); //@line 997 "stropmodule.c"
        var $121=$output; //@line 997 "stropmodule.c"
        var $122=$121+1; //@line 997 "stropmodule.c"
        $output=$122; //@line 997 "stropmodule.c"
        var $toBool26=($120)!=0; //@line 997 "stropmodule.c"
        if ($toBool26) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 997 "stropmodule.c"
      case 25: // $bb28_backedge
        var $123=$i; //@line 994 "stropmodule.c"
        var $124=($123) - 1; //@line 994 "stropmodule.c"
        $i=$124; //@line 994 "stropmodule.c"
        var $125=($124) >= 0; //@line 994 "stropmodule.c"
        if ($125) { __label__ = 23; break; } else { __label__ = 27; break; } //@line 994 "stropmodule.c"
      case 26: // $bb27
        $changed=1; //@line 999 "stropmodule.c"
        __label__ = 25; break; //@line 999 "stropmodule.c"
      case 27: // $bb29
        var $126=$changed; //@line 1001 "stropmodule.c"
        var $127=($126)==0; //@line 1001 "stropmodule.c"
        if ($127) { __label__ = 28; break; } else { __label__ = 31; break; } //@line 1001 "stropmodule.c"
      case 28: // $bb30
        var $128=HEAP[$result]; //@line 1002 "stropmodule.c"
        var $129=$128; //@line 1002 "stropmodule.c"
        var $130=HEAP[$129]; //@line 1002 "stropmodule.c"
        var $131=($130) - 1; //@line 1002 "stropmodule.c"
        var $132=$128; //@line 1002 "stropmodule.c"
        HEAP[$132]=$131; //@line 1002 "stropmodule.c"
        var $133=$128; //@line 1002 "stropmodule.c"
        var $134=HEAP[$133]; //@line 1002 "stropmodule.c"
        var $135=($134)==0; //@line 1002 "stropmodule.c"
        if ($135) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1002 "stropmodule.c"
      case 29: // $bb31
        var $136=HEAP[$result]; //@line 1002 "stropmodule.c"
        var $137=$136+4; //@line 1002 "stropmodule.c"
        var $138=HEAP[$137]; //@line 1002 "stropmodule.c"
        var $139=$138+24; //@line 1002 "stropmodule.c"
        var $140=HEAP[$139]; //@line 1002 "stropmodule.c"
        var $141=HEAP[$result]; //@line 1002 "stropmodule.c"
        FUNCTION_TABLE[$140]($141); //@line 1002 "stropmodule.c"
        __label__ = 30; break; //@line 1002 "stropmodule.c"
      case 30: // $bb32
        var $142=HEAP[$input_obj]; //@line 1003 "stropmodule.c"
        var $143=$142; //@line 1003 "stropmodule.c"
        var $144=HEAP[$143]; //@line 1003 "stropmodule.c"
        var $145=($144) + 1; //@line 1003 "stropmodule.c"
        var $146=$142; //@line 1003 "stropmodule.c"
        HEAP[$146]=$145; //@line 1003 "stropmodule.c"
        var $147=HEAP[$input_obj]; //@line 1004 "stropmodule.c"
        $0=$147; //@line 1004 "stropmodule.c"
        __label__ = 34; break; //@line 1004 "stropmodule.c"
      case 31: // $bb33
        var $148=$inlen; //@line 1007 "stropmodule.c"
        var $149=($148) > 0; //@line 1007 "stropmodule.c"
        if ($149) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 1007 "stropmodule.c"
      case 32: // $bb34
        var $150=$output; //@line 1008 "stropmodule.c"
        var $151=($150); //@line 1008 "stropmodule.c"
        var $152=$output_start; //@line 1008 "stropmodule.c"
        var $153=($152); //@line 1008 "stropmodule.c"
        var $154=($151) - ($153); //@line 1008 "stropmodule.c"
        var $155=__PyString_Resize($result, $154); //@line 1008 "stropmodule.c"
        __label__ = 33; break; //@line 1008 "stropmodule.c"
      case 33: // $bb35
        var $156=HEAP[$result]; //@line 1009 "stropmodule.c"
        $0=$156; //@line 1009 "stropmodule.c"
        __label__ = 34; break; //@line 1009 "stropmodule.c"
      case 34: // $bb36
        var $157=$0; //@line 956 "stropmodule.c"
        $retval=$157; //@line 956 "stropmodule.c"
        var $retval37=$retval; //@line 956 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval37; //@line 956 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mymemfind($mem, $len, $pat, $pat_len) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $mem_addr;
        var $len_addr;
        var $pat_addr;
        var $pat_len_addr;
        var $retval;
        var $0;
        var $ii;
        $mem_addr=$mem;
        $len_addr=$len;
        $pat_addr=$pat;
        $pat_len_addr=$pat_len;
        var $1=$len_addr; //@line 1031 "stropmodule.c"
        var $2=$pat_len_addr; //@line 1031 "stropmodule.c"
        var $3=($1) - ($2); //@line 1031 "stropmodule.c"
        $len_addr=$3; //@line 1031 "stropmodule.c"
        $ii=0; //@line 1033 "stropmodule.c"
        __label__ = 6; break; //@line 1033 "stropmodule.c"
      case 1: // $bb
        var $4=$mem_addr; //@line 1034 "stropmodule.c"
        var $5=$ii; //@line 1034 "stropmodule.c"
        var $6=$4+$5; //@line 1034 "stropmodule.c"
        var $7=HEAP[$6]; //@line 1034 "stropmodule.c"
        var $8=$pat_addr; //@line 1034 "stropmodule.c"
        var $9=$8; //@line 1034 "stropmodule.c"
        var $10=HEAP[$9]; //@line 1034 "stropmodule.c"
        var $11=($7)==($10); //@line 1034 "stropmodule.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1034 "stropmodule.c"
      case 2: // $bb1
        var $12=$pat_len_addr; //@line 1034 "stropmodule.c"
        var $13=($12)==1; //@line 1034 "stropmodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1034 "stropmodule.c"
      case 3: // $bb2
        var $14=$pat_len_addr; //@line 1034 "stropmodule.c"
        var $15=($14) - 1; //@line 1034 "stropmodule.c"
        var $16=$pat_addr; //@line 1034 "stropmodule.c"
        var $17=$16+1; //@line 1034 "stropmodule.c"
        var $18=$ii; //@line 1034 "stropmodule.c"
        var $19=($18) + 1; //@line 1034 "stropmodule.c"
        var $20=$mem_addr; //@line 1034 "stropmodule.c"
        var $21=$20+$19; //@line 1034 "stropmodule.c"
        var $22=_memcmp($21, $17, $15); //@line 1034 "stropmodule.c"
        var $23=($22)==0; //@line 1034 "stropmodule.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1034 "stropmodule.c"
      case 4: // $bb3
        var $24=$ii; //@line 1037 "stropmodule.c"
        $0=$24; //@line 1037 "stropmodule.c"
        __label__ = 8; break; //@line 1037 "stropmodule.c"
      case 5: // $bb4
        var $25=$ii; //@line 1033 "stropmodule.c"
        var $26=($25) + 1; //@line 1033 "stropmodule.c"
        $ii=$26; //@line 1033 "stropmodule.c"
        __label__ = 6; break; //@line 1033 "stropmodule.c"
      case 6: // $bb5
        var $27=$ii; //@line 1033 "stropmodule.c"
        var $28=$len_addr; //@line 1033 "stropmodule.c"
        var $29=($27) <= ($28); //@line 1033 "stropmodule.c"
        if ($29) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 1033 "stropmodule.c"
      case 7: // $bb6
        $0=-1; //@line 1040 "stropmodule.c"
        __label__ = 8; break; //@line 1040 "stropmodule.c"
      case 8: // $bb7
        var $30=$0; //@line 1037 "stropmodule.c"
        $retval=$30; //@line 1037 "stropmodule.c"
        var $retval8=$retval; //@line 1037 "stropmodule.c"
        ;
        return $retval8; //@line 1037 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mymemcnt($mem, $len, $pat, $pat_len) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $mem_addr;
        var $len_addr;
        var $pat_addr;
        var $pat_len_addr;
        var $retval;
        var $0;
        var $offset;
        var $nfound;
        $mem_addr=$mem;
        $len_addr=$len;
        $pat_addr=$pat;
        $pat_len_addr=$pat_len;
        $offset=0; //@line 1053 "stropmodule.c"
        $nfound=0; //@line 1054 "stropmodule.c"
        __lastLabel__ = -1; __label__ = 3; break; //@line 1054 "stropmodule.c"
      case 1: // $bb
        var $1=$mem_addr; //@line 1057 "stropmodule.c"
        var $2=$len_addr; //@line 1057 "stropmodule.c"
        var $3=$pat_addr; //@line 1057 "stropmodule.c"
        var $4=$pat_len_addr; //@line 1057 "stropmodule.c"
        var $5=_mymemfind($1, $2, $3, $4); //@line 1057 "stropmodule.c"
        $offset=$5; //@line 1057 "stropmodule.c"
        var $6=$offset; //@line 1058 "stropmodule.c"
        var $7=($6)==-1; //@line 1058 "stropmodule.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1058 "stropmodule.c"
      case 2: // $bb1
        var $8=$offset; //@line 1060 "stropmodule.c"
        var $9=$pat_len_addr; //@line 1060 "stropmodule.c"
        var $10=($9) + ($8); //@line 1060 "stropmodule.c"
        var $11=$mem_addr; //@line 1060 "stropmodule.c"
        var $12=$11+$10; //@line 1060 "stropmodule.c"
        $mem_addr=$12; //@line 1060 "stropmodule.c"
        var $13=$offset; //@line 1061 "stropmodule.c"
        var $14=$pat_len_addr; //@line 1061 "stropmodule.c"
        var $15=$len_addr; //@line 1061 "stropmodule.c"
        var $_neg=0 - ($13);
        var $_neg1=0 - ($14);
        var $_neg2=($_neg1) + ($_neg); //@line 1061 "stropmodule.c"
        var $16=($_neg2) + ($15);
        $len_addr=$16; //@line 1061 "stropmodule.c"
        var $17=$nfound; //@line 1062 "stropmodule.c"
        var $18=($17) + 1; //@line 1062 "stropmodule.c"
        $nfound=$18; //@line 1062 "stropmodule.c"
        __lastLabel__ = 2; __label__ = 3; break; //@line 1062 "stropmodule.c"
      case 3: // $bb2
        var $19=__lastLabel__ == 2 ? $16 : ($len);
        var $20=($19) >= 0; //@line 1056 "stropmodule.c"
        if ($20) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1056 "stropmodule.c"
      case 4: // $bb3
        var $21=$nfound; //@line 1064 "stropmodule.c"
        $0=$21; //@line 1064 "stropmodule.c"
        var $22=$0; //@line 1064 "stropmodule.c"
        $retval=$22; //@line 1064 "stropmodule.c"
        var $retval4=$retval; //@line 1064 "stropmodule.c"
        ;
        return $retval4; //@line 1064 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mymemreplace($str, $len, $pat, $pat_len, $sub, $sub_len, $count, $out_len) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $str_addr;
        var $len_addr;
        var $pat_addr;
        var $pat_len_addr;
        var $sub_addr;
        var $sub_len_addr;
        var $count_addr;
        var $out_len_addr;
        var $retval;
        var $iftmp_287;
        var $iftmp_286;
        var $0;
        var $out_s;
        var $new_s;
        var $nfound;
        var $offset;
        var $new_len;
        $str_addr=$str;
        $len_addr=$len;
        $pat_addr=$pat;
        $pat_len_addr=$pat_len;
        $sub_addr=$sub;
        $sub_len_addr=$sub_len;
        $count_addr=$count;
        $out_len_addr=$out_len;
        var $1=$len_addr; //@line 1097 "stropmodule.c"
        var $2=($1)==0; //@line 1097 "stropmodule.c"
        if ($2) { __label__ = 28; break; } else { __label__ = 1; break; } //@line 1097 "stropmodule.c"
      case 1: // $bb
        var $3=$pat_len_addr; //@line 1097 "stropmodule.c"
        var $4=$len_addr; //@line 1097 "stropmodule.c"
        var $5=($3) > ($4); //@line 1097 "stropmodule.c"
        if ($5) { __label__ = 28; break; } else { __label__ = 2; break; } //@line 1097 "stropmodule.c"
      case 2: // $bb1
        var $6=$str_addr; //@line 1101 "stropmodule.c"
        var $7=$len_addr; //@line 1101 "stropmodule.c"
        var $8=$pat_addr; //@line 1101 "stropmodule.c"
        var $9=$pat_len_addr; //@line 1101 "stropmodule.c"
        var $10=_mymemcnt($6, $7, $8, $9); //@line 1101 "stropmodule.c"
        $nfound=$10; //@line 1101 "stropmodule.c"
        var $11=$count_addr; //@line 1102 "stropmodule.c"
        var $12=($11) < 0; //@line 1102 "stropmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1102 "stropmodule.c"
      case 3: // $bb2
        $count_addr=2147483647; //@line 1103 "stropmodule.c"
        var $_pr=$nfound;
        __lastLabel__ = 3; __label__ = 6; break; //@line 1103 "stropmodule.c"
      case 4: // $bb3
        var $13=$nfound; //@line 1104 "stropmodule.c"
        var $14=$count_addr; //@line 1104 "stropmodule.c"
        var $15=($13) > ($14); //@line 1104 "stropmodule.c"
        if ($15) { __lastLabel__ = 4; __label__ = 5; break; } else { __lastLabel__ = 4; __label__ = 6; break; } //@line 1104 "stropmodule.c"
      case 5: // $bb4
        var $16=$count_addr; //@line 1105 "stropmodule.c"
        $nfound=$16; //@line 1105 "stropmodule.c"
        __lastLabel__ = 5; __label__ = 6; break; //@line 1105 "stropmodule.c"
      case 6: // $bb5
        var $17=__lastLabel__ == 5 ? $16 : (__lastLabel__ == 4 ? $13 : ($_pr));
        var $18=($17)==0; //@line 1106 "stropmodule.c"
        if ($18) { __label__ = 28; break; } else { __label__ = 7; break; } //@line 1106 "stropmodule.c"
      case 7: // $bb6
        var $19=$sub_len_addr; //@line 1109 "stropmodule.c"
        var $20=$pat_len_addr; //@line 1109 "stropmodule.c"
        var $21=($19) - ($20); //@line 1109 "stropmodule.c"
        var $22=$nfound; //@line 1109 "stropmodule.c"
        var $23=($21) * ($22); //@line 1109 "stropmodule.c"
        var $24=$len_addr; //@line 1109 "stropmodule.c"
        var $25=($23) + ($24); //@line 1109 "stropmodule.c"
        $new_len=$25; //@line 1109 "stropmodule.c"
        var $26=$new_len; //@line 1110 "stropmodule.c"
        var $27=($26)==0; //@line 1110 "stropmodule.c"
        if ($27) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1110 "stropmodule.c"
      case 8: // $bb7
        var $28=_malloc(1); //@line 1112 "stropmodule.c"
        $out_s=$28; //@line 1112 "stropmodule.c"
        var $29=$out_s; //@line 1113 "stropmodule.c"
        var $30=($29)==0; //@line 1113 "stropmodule.c"
        if ($30) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1113 "stropmodule.c"
      case 9: // $bb8
        $0=0; //@line 1114 "stropmodule.c"
        __label__ = 29; break; //@line 1114 "stropmodule.c"
      case 10: // $bb9
        var $31=$out_s; //@line 1115 "stropmodule.c"
        var $32=$31; //@line 1115 "stropmodule.c"
        HEAP[$32]=0; //@line 1115 "stropmodule.c"
        __label__ = 27; break; //@line 1115 "stropmodule.c"
      case 11: // $bb10
        var $33=$new_len; //@line 1118 "stropmodule.c"
        var $34=($33) <= 0; //@line 1118 "stropmodule.c"
        if ($34) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1118 "stropmodule.c"
      case 12: // $bb11
        ___assert_fail(__str29, __str30, 1118, ___PRETTY_FUNCTION___9892); //@line 1118 "stropmodule.c"
        throw "Reached an unreachable!" //@line 1118 "stropmodule.c"
      case 13: // $bb12
        var $35=$new_len; //@line 1119 "stropmodule.c"
        var $36=($35) >= 0; //@line 1119 "stropmodule.c"
        if ($36) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 1119 "stropmodule.c"
      case 14: // $bb13
        var $37=$new_len; //@line 1119 "stropmodule.c"
        var $38=($37)!=0; //@line 1119 "stropmodule.c"
        if ($38) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1119 "stropmodule.c"
      case 15: // $bb14
        var $39=$new_len; //@line 1119 "stropmodule.c"
        $iftmp_287=$39; //@line 1119 "stropmodule.c"
        __label__ = 18; break; //@line 1119 "stropmodule.c"
      case 16: // $bb15
        $iftmp_287=1; //@line 1119 "stropmodule.c"
        __label__ = 18; break; //@line 1119 "stropmodule.c"
      case 17: // $bb18_thread
        $iftmp_286=0; //@line 1119 "stropmodule.c"
        $new_s=0; //@line 1119 "stropmodule.c"
        __label__ = 19; break;
      case 18: // $bb18
        var $40=$iftmp_287; //@line 1119 "stropmodule.c"
        var $41=_malloc($40); //@line 1119 "stropmodule.c"
        $iftmp_286=$41; //@line 1119 "stropmodule.c"
        $new_s=$41; //@line 1119 "stropmodule.c"
        var $42=($41)==0; //@line 1120 "stropmodule.c"
        if ($42) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1120 "stropmodule.c"
      case 19: // $bb19
        $0=0; //@line 1121 "stropmodule.c"
        __label__ = 29; break; //@line 1121 "stropmodule.c"
      case 20: // $bb20
        var $43=$new_s; //@line 1122 "stropmodule.c"
        $out_s=$43; //@line 1122 "stropmodule.c"
        var $_pr1=$count_addr;
        __lastLabel__ = 20; __label__ = 23; break; //@line 1122 "stropmodule.c"
      case 21: // $bb21
        var $44=$str_addr; //@line 1126 "stropmodule.c"
        var $45=$len_addr; //@line 1126 "stropmodule.c"
        var $46=$pat_addr; //@line 1126 "stropmodule.c"
        var $47=$pat_len_addr; //@line 1126 "stropmodule.c"
        var $48=_mymemfind($44, $45, $46, $47); //@line 1126 "stropmodule.c"
        $offset=$48; //@line 1126 "stropmodule.c"
        var $49=$offset; //@line 1127 "stropmodule.c"
        var $50=($49)==-1; //@line 1127 "stropmodule.c"
        if ($50) { __label__ = 25; break; } else { __label__ = 22; break; } //@line 1127 "stropmodule.c"
      case 22: // $bb22
        var $51=$offset; //@line 1131 "stropmodule.c"
        var $52=$new_s; //@line 1131 "stropmodule.c"
        var $53=$str_addr; //@line 1131 "stropmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($52, $53, $51, 1, 0); //@line 1131 "stropmodule.c"
        var $54=$offset; //@line 1132 "stropmodule.c"
        var $55=$pat_len_addr; //@line 1132 "stropmodule.c"
        var $56=($55) + ($54); //@line 1132 "stropmodule.c"
        var $57=$str_addr; //@line 1132 "stropmodule.c"
        var $58=$57+$56; //@line 1132 "stropmodule.c"
        $str_addr=$58; //@line 1132 "stropmodule.c"
        var $59=$offset; //@line 1133 "stropmodule.c"
        var $60=$pat_len_addr; //@line 1133 "stropmodule.c"
        var $61=$len_addr; //@line 1133 "stropmodule.c"
        var $_neg=0 - ($59);
        var $_neg3=0 - ($60);
        var $_neg4=($_neg3) + ($_neg); //@line 1133 "stropmodule.c"
        var $62=($_neg4) + ($61);
        $len_addr=$62; //@line 1133 "stropmodule.c"
        var $63=$new_s; //@line 1136 "stropmodule.c"
        var $64=$offset; //@line 1136 "stropmodule.c"
        var $65=$63+$64; //@line 1136 "stropmodule.c"
        $new_s=$65; //@line 1136 "stropmodule.c"
        var $66=$sub_len_addr; //@line 1137 "stropmodule.c"
        var $67=$new_s; //@line 1137 "stropmodule.c"
        var $68=$sub_addr; //@line 1137 "stropmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($67, $68, $66, 1, 0); //@line 1137 "stropmodule.c"
        var $69=$new_s; //@line 1138 "stropmodule.c"
        var $70=$sub_len_addr; //@line 1138 "stropmodule.c"
        var $71=$69+$70; //@line 1138 "stropmodule.c"
        $new_s=$71; //@line 1138 "stropmodule.c"
        var $72=$count_addr; //@line 1124 "stropmodule.c"
        var $73=($72) - 1; //@line 1124 "stropmodule.c"
        $count_addr=$73; //@line 1124 "stropmodule.c"
        __lastLabel__ = 22; __label__ = 23; break; //@line 1124 "stropmodule.c"
      case 23: // $bb23
        var $74=__lastLabel__ == 22 ? $73 : ($_pr1);
        var $75=($74) <= 0; //@line 1124 "stropmodule.c"
        if ($75) { __label__ = 25; break; } else { __label__ = 24; break; } //@line 1124 "stropmodule.c"
      case 24: // $bb24
        var $76=$len_addr; //@line 1124 "stropmodule.c"
        var $77=($76) > 0; //@line 1124 "stropmodule.c"
        if ($77) { __label__ = 21; break; } else { __label__ = 27; break; } //@line 1124 "stropmodule.c"
      case 25: // $bb25
        var $_pr2=$len_addr;
        var $78=($_pr2) > 0; //@line 1141 "stropmodule.c"
        if ($78) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1141 "stropmodule.c"
      case 26: // $bb26
        var $79=$len_addr; //@line 1142 "stropmodule.c"
        var $80=$new_s; //@line 1142 "stropmodule.c"
        var $81=$str_addr; //@line 1142 "stropmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($80, $81, $79, 1, 0); //@line 1142 "stropmodule.c"
        __label__ = 27; break; //@line 1142 "stropmodule.c"
      case 27: // $bb27
        var $82=$out_len_addr; //@line 1144 "stropmodule.c"
        var $83=$new_len; //@line 1144 "stropmodule.c"
        HEAP[$82]=$83; //@line 1144 "stropmodule.c"
        var $84=$out_s; //@line 1145 "stropmodule.c"
        $0=$84; //@line 1145 "stropmodule.c"
        __label__ = 29; break; //@line 1145 "stropmodule.c"
      case 28: // $return_same
        var $85=$out_len_addr; //@line 1148 "stropmodule.c"
        HEAP[$85]=-1; //@line 1148 "stropmodule.c"
        var $86=$str_addr; //@line 1149 "stropmodule.c"
        $0=$86; //@line 1149 "stropmodule.c"
        __label__ = 29; break; //@line 1149 "stropmodule.c"
      case 29: // $bb28
        var $87=$0; //@line 1114 "stropmodule.c"
        $retval=$87; //@line 1114 "stropmodule.c"
        var $retval29=$retval; //@line 1114 "stropmodule.c"
        ;
        return $retval29; //@line 1114 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_replace($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $str=__stackBase__;
        var $pat=__stackBase__+4;
        var $sub=__stackBase__+8;
        var $new_s;
        var $len=__stackBase__+12;
        var $pat_len=__stackBase__+16;
        var $sub_len=__stackBase__+20;
        var $out_len=__stackBase__+24;
        var $count=__stackBase__+28;
        var $newstr;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$count]=-1; //@line 1165 "stropmodule.c"
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 1168 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, __str, 1); //@line 1168 "stropmodule.c"
        var $3=($2)!=0; //@line 1168 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1168 "stropmodule.c"
      case 1: // $bb
        $0=0; //@line 1168 "stropmodule.c"
        __label__ = 15; break; //@line 1168 "stropmodule.c"
      case 2: // $bb1
        var $4=$args_addr; //@line 1169 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, __str31, allocate([$str,0,0,0,$len,0,0,0,$pat,0,0,0,$pat_len,0,0,0,$sub,0,0,0,$sub_len,0,0,0,$count,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i8**",0,0,0,"i32*",0,0,0,"i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1169 "stropmodule.c"
        var $6=($5)==0; //@line 1169 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1169 "stropmodule.c"
      case 3: // $bb2
        $0=0; //@line 1172 "stropmodule.c"
        __label__ = 15; break; //@line 1172 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$pat_len]; //@line 1173 "stropmodule.c"
        var $8=($7) <= 0; //@line 1173 "stropmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1173 "stropmodule.c"
      case 5: // $bb4
        var $9=HEAP[_PyExc_ValueError]; //@line 1174 "stropmodule.c"
        _PyErr_SetString($9, __str32); //@line 1174 "stropmodule.c"
        $0=0; //@line 1175 "stropmodule.c"
        __label__ = 15; break; //@line 1175 "stropmodule.c"
      case 6: // $bb5
        var $10=HEAP[$count]; //@line 1181 "stropmodule.c"
        var $11=($10)==0; //@line 1181 "stropmodule.c"
        if ($11) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1181 "stropmodule.c"
      case 7: // $bb6
        HEAP[$count]=-1; //@line 1182 "stropmodule.c"
        __label__ = 8; break; //@line 1182 "stropmodule.c"
      case 8: // $bb7
        var $12=HEAP[$count]; //@line 1183 "stropmodule.c"
        var $13=HEAP[$sub_len]; //@line 1183 "stropmodule.c"
        var $14=HEAP[$sub]; //@line 1183 "stropmodule.c"
        var $15=HEAP[$pat_len]; //@line 1183 "stropmodule.c"
        var $16=HEAP[$pat]; //@line 1183 "stropmodule.c"
        var $17=HEAP[$len]; //@line 1183 "stropmodule.c"
        var $18=HEAP[$str]; //@line 1183 "stropmodule.c"
        var $19=_mymemreplace($18, $17, $16, $15, $14, $13, $12, $out_len); //@line 1183 "stropmodule.c"
        $new_s=$19; //@line 1183 "stropmodule.c"
        var $20=($19)==0; //@line 1184 "stropmodule.c"
        if ($20) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1184 "stropmodule.c"
      case 9: // $bb8
        var $21=_PyErr_NoMemory(); //@line 1185 "stropmodule.c"
        $0=0; //@line 1186 "stropmodule.c"
        __label__ = 15; break; //@line 1186 "stropmodule.c"
      case 10: // $bb9
        var $22=HEAP[$out_len]; //@line 1188 "stropmodule.c"
        var $23=($22)==-1; //@line 1188 "stropmodule.c"
        if ($23) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 1188 "stropmodule.c"
      case 11: // $bb10
        var $24=$args_addr; //@line 1190 "stropmodule.c"
        var $25=_PyTuple_GetItem($24, 0); //@line 1190 "stropmodule.c"
        $newstr=$25; //@line 1190 "stropmodule.c"
        var $26=$newstr; //@line 1191 "stropmodule.c"
        var $27=($26)!=0; //@line 1191 "stropmodule.c"
        if ($27) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 1191 "stropmodule.c"
      case 12: // $bb11
        var $28=$newstr; //@line 1191 "stropmodule.c"
        var $29=$28; //@line 1191 "stropmodule.c"
        var $30=HEAP[$29]; //@line 1191 "stropmodule.c"
        var $31=($30) + 1; //@line 1191 "stropmodule.c"
        var $32=$newstr; //@line 1191 "stropmodule.c"
        var $33=$32; //@line 1191 "stropmodule.c"
        HEAP[$33]=$31; //@line 1191 "stropmodule.c"
        __label__ = 14; break; //@line 1191 "stropmodule.c"
      case 13: // $bb13
        var $34=HEAP[$out_len]; //@line 1194 "stropmodule.c"
        var $35=$new_s; //@line 1194 "stropmodule.c"
        var $36=_PyString_FromStringAndSize($35, $34); //@line 1194 "stropmodule.c"
        $newstr=$36; //@line 1194 "stropmodule.c"
        var $37=$new_s; //@line 1195 "stropmodule.c"
        _free($37); //@line 1195 "stropmodule.c"
        __label__ = 14; break; //@line 1195 "stropmodule.c"
      case 14: // $bb14
        var $38=$newstr; //@line 1197 "stropmodule.c"
        $0=$38; //@line 1197 "stropmodule.c"
        __label__ = 15; break; //@line 1197 "stropmodule.c"
      case 15: // $bb15
        var $39=$0; //@line 1168 "stropmodule.c"
        $retval=$39; //@line 1168 "stropmodule.c"
        var $retval16=$retval; //@line 1168 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 1168 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initstrop() {
    var __stackBase__  = STACKTOP; STACKTOP += 256; _memset(__stackBase__, 0, 256);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $s;
        var $buf=__stackBase__;
        var $c;
        var $n;
        var $0=_Py_InitModule4(__str54, _strop_methods, _strop_module__doc__, 0, 1013); //@line 1236 "stropmodule.c"
        $m=$0; //@line 1236 "stropmodule.c"
        var $1=$m; //@line 1238 "stropmodule.c"
        var $2=($1)==0; //@line 1238 "stropmodule.c"
        if ($2) { __label__ = 19; break; } else { __label__ = 1; break; } //@line 1238 "stropmodule.c"
      case 1: // $bb
        $n=0; //@line 1242 "stropmodule.c"
        $c=0; //@line 1243 "stropmodule.c"
        __label__ = 2; break;
      case 2: // $bb1
        var $3=___ctype_b_loc(); //@line 1244 "stropmodule.c"
        var $4=HEAP[$3]; //@line 1244 "stropmodule.c"
        var $5=$c; //@line 1244 "stropmodule.c"
        var $6=$4+2*$5; //@line 1244 "stropmodule.c"
        var $7=HEAP[$6]; //@line 1244 "stropmodule.c"
        var $8=($7); //@line 1244 "stropmodule.c"
        var $9=($8) & 8192; //@line 1244 "stropmodule.c"
        var $10=($9)!=0; //@line 1244 "stropmodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1244 "stropmodule.c"
      case 3: // $bb2
        var $11=$n; //@line 1245 "stropmodule.c"
        var $12=$c; //@line 1245 "stropmodule.c"
        var $13=((($12)) & 255); //@line 1245 "stropmodule.c"
        var $14=$buf+$11; //@line 1245 "stropmodule.c"
        HEAP[$14]=$13; //@line 1245 "stropmodule.c"
        var $15=$n; //@line 1245 "stropmodule.c"
        var $16=($15) + 1; //@line 1245 "stropmodule.c"
        $n=$16; //@line 1245 "stropmodule.c"
        __label__ = 4; break; //@line 1245 "stropmodule.c"
      case 4: // $bb3
        var $17=$c; //@line 1243 "stropmodule.c"
        var $18=($17) + 1; //@line 1243 "stropmodule.c"
        $c=$18; //@line 1243 "stropmodule.c"
        var $19=($18) <= 255; //@line 1243 "stropmodule.c"
        if ($19) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1243 "stropmodule.c"
      case 5: // $bb5
        var $buf6=$buf; //@line 1247 "stropmodule.c"
        var $20=$n; //@line 1247 "stropmodule.c"
        var $21=_PyString_FromStringAndSize($buf6, $20); //@line 1247 "stropmodule.c"
        $s=$21; //@line 1247 "stropmodule.c"
        var $22=$s; //@line 1248 "stropmodule.c"
        var $23=($22)!=0; //@line 1248 "stropmodule.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1248 "stropmodule.c"
      case 6: // $bb7
        var $24=$m; //@line 1249 "stropmodule.c"
        var $25=$s; //@line 1249 "stropmodule.c"
        var $26=_PyModule_AddObject($24, __str55, $25); //@line 1249 "stropmodule.c"
        __label__ = 7; break; //@line 1249 "stropmodule.c"
      case 7: // $bb8
        $n=0; //@line 1252 "stropmodule.c"
        $c=0; //@line 1253 "stropmodule.c"
        __label__ = 8; break;
      case 8: // $bb9
        var $27=___ctype_b_loc(); //@line 1254 "stropmodule.c"
        var $28=HEAP[$27]; //@line 1254 "stropmodule.c"
        var $29=$c; //@line 1254 "stropmodule.c"
        var $30=$28+2*$29; //@line 1254 "stropmodule.c"
        var $31=HEAP[$30]; //@line 1254 "stropmodule.c"
        var $32=($31); //@line 1254 "stropmodule.c"
        var $33=($32) & 512; //@line 1254 "stropmodule.c"
        var $34=($33)!=0; //@line 1254 "stropmodule.c"
        if ($34) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1254 "stropmodule.c"
      case 9: // $bb10
        var $35=$n; //@line 1255 "stropmodule.c"
        var $36=$c; //@line 1255 "stropmodule.c"
        var $37=((($36)) & 255); //@line 1255 "stropmodule.c"
        var $38=$buf+$35; //@line 1255 "stropmodule.c"
        HEAP[$38]=$37; //@line 1255 "stropmodule.c"
        var $39=$n; //@line 1255 "stropmodule.c"
        var $40=($39) + 1; //@line 1255 "stropmodule.c"
        $n=$40; //@line 1255 "stropmodule.c"
        __label__ = 10; break; //@line 1255 "stropmodule.c"
      case 10: // $bb11
        var $41=$c; //@line 1253 "stropmodule.c"
        var $42=($41) + 1; //@line 1253 "stropmodule.c"
        $c=$42; //@line 1253 "stropmodule.c"
        var $43=($42) <= 255; //@line 1253 "stropmodule.c"
        if ($43) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1253 "stropmodule.c"
      case 11: // $bb13
        var $buf14=$buf; //@line 1257 "stropmodule.c"
        var $44=$n; //@line 1257 "stropmodule.c"
        var $45=_PyString_FromStringAndSize($buf14, $44); //@line 1257 "stropmodule.c"
        $s=$45; //@line 1257 "stropmodule.c"
        var $46=$s; //@line 1258 "stropmodule.c"
        var $47=($46)!=0; //@line 1258 "stropmodule.c"
        if ($47) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1258 "stropmodule.c"
      case 12: // $bb15
        var $48=$m; //@line 1259 "stropmodule.c"
        var $49=$s; //@line 1259 "stropmodule.c"
        var $50=_PyModule_AddObject($48, __str56, $49); //@line 1259 "stropmodule.c"
        __label__ = 13; break; //@line 1259 "stropmodule.c"
      case 13: // $bb16
        $n=0; //@line 1262 "stropmodule.c"
        $c=0; //@line 1263 "stropmodule.c"
        __label__ = 14; break;
      case 14: // $bb17
        var $51=___ctype_b_loc(); //@line 1264 "stropmodule.c"
        var $52=HEAP[$51]; //@line 1264 "stropmodule.c"
        var $53=$c; //@line 1264 "stropmodule.c"
        var $54=$52+2*$53; //@line 1264 "stropmodule.c"
        var $55=HEAP[$54]; //@line 1264 "stropmodule.c"
        var $56=($55); //@line 1264 "stropmodule.c"
        var $57=($56) & 256; //@line 1264 "stropmodule.c"
        var $58=($57)!=0; //@line 1264 "stropmodule.c"
        if ($58) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1264 "stropmodule.c"
      case 15: // $bb18
        var $59=$n; //@line 1265 "stropmodule.c"
        var $60=$c; //@line 1265 "stropmodule.c"
        var $61=((($60)) & 255); //@line 1265 "stropmodule.c"
        var $62=$buf+$59; //@line 1265 "stropmodule.c"
        HEAP[$62]=$61; //@line 1265 "stropmodule.c"
        var $63=$n; //@line 1265 "stropmodule.c"
        var $64=($63) + 1; //@line 1265 "stropmodule.c"
        $n=$64; //@line 1265 "stropmodule.c"
        __label__ = 16; break; //@line 1265 "stropmodule.c"
      case 16: // $bb19
        var $65=$c; //@line 1263 "stropmodule.c"
        var $66=($65) + 1; //@line 1263 "stropmodule.c"
        $c=$66; //@line 1263 "stropmodule.c"
        var $67=($66) <= 255; //@line 1263 "stropmodule.c"
        if ($67) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 1263 "stropmodule.c"
      case 17: // $bb21
        var $buf22=$buf; //@line 1267 "stropmodule.c"
        var $68=$n; //@line 1267 "stropmodule.c"
        var $69=_PyString_FromStringAndSize($buf22, $68); //@line 1267 "stropmodule.c"
        $s=$69; //@line 1267 "stropmodule.c"
        var $70=$s; //@line 1268 "stropmodule.c"
        var $71=($70)!=0; //@line 1268 "stropmodule.c"
        if ($71) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1268 "stropmodule.c"
      case 18: // $bb23
        var $72=$m; //@line 1269 "stropmodule.c"
        var $73=$s; //@line 1269 "stropmodule.c"
        var $74=_PyModule_AddObject($72, __str57, $73); //@line 1269 "stropmodule.c"
        __label__ = 19; break; //@line 1269 "stropmodule.c"
      case 19: // $return
        STACKTOP = __stackBase__;
        return; //@line 1239 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initstrop"] = _initstrop;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_strop_atof,0,_strop_atoi,0,_strop_atol,0,_strop_capitalize,0,_strop_count,0,_strop_expandtabs,0,_strop_find,0,_strop_joinfields,0,_strop_lstrip,0,_strop_lower,0,_strop_maketrans,0,_strop_replace,0,_strop_rfind,0,_strop_rstrip,0,_strop_splitfields,0,_strop_strip,0,_strop_swapcase,0,_strop_translate,0,_strop_upper,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_strop_module__doc__=allocate([67,111,109,109,111,110,32,115,116,114,105,110,103,32,109,97,110,105,112,117,108,97,116,105,111,110,115,44,32,111,112,116,105,109,105,122,101,100,32,102,111,114,32,115,112,101,101,100,46,10,10,65,108,119,97,121,115,32,117,115,101,32,34,105,109,112,111,114,116,32,115,116,114,105,110,103,34,32,114,97,116,104,101,114,32,116,104,97,110,32,114,101,102,101,114,101,110,99,105,110,103,10,116,104,105,115,32,109,111,100,117,108,101,32,100,105,114,101,99,116,108,121,46,0] /* Common string manipu */, "i8", ALLOC_NORMAL);
_splitfields__doc__=allocate([115,112,108,105,116,40,115,32,91,44,115,101,112,32,91,44,109,97,120,115,112,108,105,116,93,93,41,32,45,62,32,108,105,115,116,32,111,102,32,115,116,114,105,110,103,115,10,115,112,108,105,116,102,105,101,108,100,115,40,115,32,91,44,115,101,112,32,91,44,109,97,120,115,112,108,105,116,93,93,41,32,45,62,32,108,105,115,116,32,111,102,32,115,116,114,105,110,103,115,10,10,82,101,116,117,114,110,32,97,32,108,105,115,116,32,111,102,32,116,104,101,32,119,111,114,100,115,32,105,110,32,116,104,101,32,115,116,114,105,110,103,32,115,44,32,117,115,105,110,103,32,115,101,112,32,97,115,32,116,104,101,10,100,101,108,105,109,105,116,101,114,32,115,116,114,105,110,103,46,32,32,73,102,32,109,97,120,115,112,108,105,116,32,105,115,32,110,111,110,122,101,114,111,44,32,115,112,108,105,116,115,32,105,110,116,111,32,97,116,32,109,111,115,116,10,109,97,120,115,112,108,105,116,32,119,111,114,100,115,46,32,32,73,102,32,115,101,112,32,105,115,32,110,111,116,32,115,112,101,99,105,102,105,101,100,44,32,97,110,121,32,119,104,105,116,101,115,112,97,99,101,32,115,116,114,105,110,103,10,105,115,32,97,32,115,101,112,97,114,97,116,111,114,46,32,32,77,97,120,115,112,108,105,116,32,100,101,102,97,117,108,116,115,32,116,111,32,48,46,10,10,40,115,112,108,105,116,32,97,110,100,32,115,112,108,105,116,102,105,101,108,100,115,32,97,114,101,32,115,121,110,111,110,121,109,111,117,115,41,0] /* split(s [,sep [,maxs */, "i8", ALLOC_NORMAL);
__str=allocate([115,116,114,111,112,32,102,117,110,99,116,105,111,110,115,32,97,114,101,32,111,98,115,111,108,101,116,101,59,32,117,115,101,32,115,116,114,105,110,103,32,109,101,116,104,111,100,115,0] /* strop functions are  */, "i8", ALLOC_NORMAL);
__str1=allocate([116,35,124,122,35,110,58,115,112,108,105,116,0] /* t#|z#n:split\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([101,109,112,116,121,32,115,101,112,97,114,97,116,111,114,0] /* empty separator\00 */, "i8", ALLOC_NORMAL);
_joinfields__doc__=allocate([106,111,105,110,40,108,105,115,116,32,91,44,115,101,112,93,41,32,45,62,32,115,116,114,105,110,103,10,106,111,105,110,102,105,101,108,100,115,40,108,105,115,116,32,91,44,115,101,112,93,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,115,116,114,105,110,103,32,99,111,109,112,111,115,101,100,32,111,102,32,116,104,101,32,119,111,114,100,115,32,105,110,32,108,105,115,116,44,32,119,105,116,104,10,105,110,116,101,114,118,101,110,105,110,103,32,111,99,99,117,114,114,101,110,99,101,115,32,111,102,32,115,101,112,46,32,32,83,101,112,32,100,101,102,97,117,108,116,115,32,116,111,32,97,32,115,105,110,103,108,101,10,115,112,97,99,101,46,10,10,40,106,111,105,110,32,97,110,100,32,106,111,105,110,102,105,101,108,100,115,32,97,114,101,32,115,121,110,111,110,121,109,111,117,115,41,0] /* join(list [,sep]) -> */, "i8", ALLOC_NORMAL);
__str3=allocate([79,124,116,35,58,106,111,105,110,0] /* O|t#:join\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([32,0] /*  \00 */, "i8", ALLOC_NORMAL);
__str5=allocate([102,105,114,115,116,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,115,101,113,117,101,110,99,101,32,111,102,32,115,116,114,105,110,103,115,0] /* first argument must  */, "i8", ALLOC_NORMAL);
__str6=allocate([105,110,112,117,116,32,116,111,111,32,108,111,110,103,0] /* input too long\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([102,105,114,115,116,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,97,32,115,101,113,117,101,110,99,101,0] /* first argument must  */, "i8", ALLOC_NORMAL);
_find__doc__=allocate([102,105,110,100,40,115,44,32,115,117,98,32,91,44,115,116,97,114,116,32,91,44,101,110,100,93,93,41,32,45,62,32,105,110,10,10,82,101,116,117,114,110,32,116,104,101,32,108,111,119,101,115,116,32,105,110,100,101,120,32,105,110,32,115,32,119,104,101,114,101,32,115,117,98,115,116,114,105,110,103,32,115,117,98,32,105,115,32,102,111,117,110,100,44,10,115,117,99,104,32,116,104,97,116,32,115,117,98,32,105,115,32,99,111,110,116,97,105,110,101,100,32,119,105,116,104,105,110,32,115,91,115,116,97,114,116,44,101,110,100,93,46,32,32,79,112,116,105,111,110,97,108,10,97,114,103,117,109,101,110,116,115,32,115,116,97,114,116,32,97,110,100,32,101,110,100,32,97,114,101,32,105,110,116,101,114,112,114,101,116,101,100,32,97,115,32,105,110,32,115,108,105,99,101,32,110,111,116,97,116,105,111,110,46,10,10,82,101,116,117,114,110,32,45,49,32,111,110,32,102,97,105,108,117,114,101,46,0] /* find(s, sub [,start  */, "i8", ALLOC_NORMAL);
__str8=allocate([116,35,116,35,124,110,110,58,102,105,110,100,0] /* t#t#|nn:find\00 */, "i8", ALLOC_NORMAL);
_rfind__doc__=allocate([114,102,105,110,100,40,115,44,32,115,117,98,32,91,44,115,116,97,114,116,32,91,44,101,110,100,93,93,41,32,45,62,32,105,110,116,10,10,82,101,116,117,114,110,32,116,104,101,32,104,105,103,104,101,115,116,32,105,110,100,101,120,32,105,110,32,115,32,119,104,101,114,101,32,115,117,98,115,116,114,105,110,103,32,115,117,98,32,105,115,32,102,111,117,110,100,44,10,115,117,99,104,32,116,104,97,116,32,115,117,98,32,105,115,32,99,111,110,116,97,105,110,101,100,32,119,105,116,104,105,110,32,115,91,115,116,97,114,116,44,101,110,100,93,46,32,32,79,112,116,105,111,110,97,108,10,97,114,103,117,109,101,110,116,115,32,115,116,97,114,116,32,97,110,100,32,101,110,100,32,97,114,101,32,105,110,116,101,114,112,114,101,116,101,100,32,97,115,32,105,110,32,115,108,105,99,101,32,110,111,116,97,116,105,111,110,46,10,10,82,101,116,117,114,110,32,45,49,32,111,110,32,102,97,105,108,117,114,101,46,0] /* rfind(s, sub [,start */, "i8", ALLOC_NORMAL);
__str9=allocate([116,35,116,35,124,110,110,58,114,102,105,110,100,0] /* t#t#|nn:rfind\00 */, "i8", ALLOC_NORMAL);
_strip__doc__=allocate([115,116,114,105,112,40,115,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,115,116,114,105,110,103,32,115,32,119,105,116,104,32,108,101,97,100,105,110,103,32,97,110,100,32,116,114,97,105,108,105,110,103,10,119,104,105,116,101,115,112,97,99,101,32,114,101,109,111,118,101,100,46,0] /* strip(s) -> string\0 */, "i8", ALLOC_NORMAL);
_lstrip__doc__=allocate([108,115,116,114,105,112,40,115,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,115,116,114,105,110,103,32,115,32,119,105,116,104,32,108,101,97,100,105,110,103,32,119,104,105,116,101,115,112,97,99,101,32,114,101,109,111,118,101,100,46,0] /* lstrip(s) -> string\ */, "i8", ALLOC_NORMAL);
_rstrip__doc__=allocate([114,115,116,114,105,112,40,115,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,115,116,114,105,110,103,32,115,32,119,105,116,104,32,116,114,97,105,108,105,110,103,32,119,104,105,116,101,115,112,97,99,101,32,114,101,109,111,118,101,100,46,0] /* rstrip(s) -> string\ */, "i8", ALLOC_NORMAL);
_lower__doc__=allocate([108,111,119,101,114,40,115,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,115,116,114,105,110,103,32,115,32,99,111,110,118,101,114,116,101,100,32,116,111,32,108,111,119,101,114,99,97,115,101,46,0] /* lower(s) -> string\0 */, "i8", ALLOC_NORMAL);
_upper__doc__=allocate([117,112,112,101,114,40,115,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,115,116,114,105,110,103,32,115,32,99,111,110,118,101,114,116,101,100,32,116,111,32,117,112,112,101,114,99,97,115,101,46,0] /* upper(s) -> string\0 */, "i8", ALLOC_NORMAL);
_capitalize__doc__=allocate([99,97,112,105,116,97,108,105,122,101,40,115,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,115,116,114,105,110,103,32,115,32,119,105,116,104,32,111,110,108,121,32,105,116,115,32,102,105,114,115,116,32,99,104,97,114,97,99,116,101,114,10,99,97,112,105,116,97,108,105,122,101,100,46,0] /* capitalize(s) -> str */, "i8", ALLOC_NORMAL);
_expandtabs__doc__=allocate([101,120,112,97,110,100,116,97,98,115,40,115,116,114,105,110,103,44,32,91,116,97,98,115,105,122,101,93,41,32,45,62,32,115,116,114,105,110,103,10,10,69,120,112,97,110,100,32,116,97,98,115,32,105,110,32,97,32,115,116,114,105,110,103,44,32,105,46,101,46,32,114,101,112,108,97,99,101,32,116,104,101,109,32,98,121,32,111,110,101,32,111,114,32,109,111,114,101,32,115,112,97,99,101,115,44,10,100,101,112,101,110,100,105,110,103,32,111,110,32,116,104,101,32,99,117,114,114,101,110,116,32,99,111,108,117,109,110,32,97,110,100,32,116,104,101,32,103,105,118,101,110,32,116,97,98,32,115,105,122,101,32,40,100,101,102,97,117,108,116,32,56,41,46,10,84,104,101,32,99,111,108,117,109,110,32,110,117,109,98,101,114,32,105,115,32,114,101,115,101,116,32,116,111,32,122,101,114,111,32,97,102,116,101,114,32,101,97,99,104,32,110,101,119,108,105,110,101,32,111,99,99,117,114,114,105,110,103,32,105,110,32,116,104,101,10,115,116,114,105,110,103,46,32,32,84,104,105,115,32,100,111,101,115,110,39,116,32,117,110,100,101,114,115,116,97,110,100,32,111,116,104,101,114,32,110,111,110,45,112,114,105,110,116,105,110,103,32,99,104,97,114,97,99,116,101,114,115,46,0] /* expandtabs(string, [ */, "i8", ALLOC_NORMAL);
__str10=allocate([115,35,124,105,58,101,120,112,97,110,100,116,97,98,115,0] /* s#|i:expandtabs\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([116,97,98,115,105,122,101,32,109,117,115,116,32,98,101,32,97,116,32,108,101,97,115,116,32,49,0] /* tabsize must be at l */, "i8", ALLOC_NORMAL);
__str12=allocate([110,101,119,32,115,116,114,105,110,103,32,105,115,32,116,111,111,32,108,111,110,103,0] /* new string is too lo */, "i8", ALLOC_NORMAL);
_count__doc__=allocate([99,111,117,110,116,40,115,44,32,115,117,98,91,44,32,115,116,97,114,116,91,44,32,101,110,100,93,93,41,32,45,62,32,105,110,116,10,10,82,101,116,117,114,110,32,116,104,101,32,110,117,109,98,101,114,32,111,102,32,111,99,99,117,114,114,101,110,99,101,115,32,111,102,32,115,117,98,115,116,114,105,110,103,32,115,117,98,32,105,110,32,115,116,114,105,110,103,10,115,91,115,116,97,114,116,58,101,110,100,93,46,32,32,79,112,116,105,111,110,97,108,32,97,114,103,117,109,101,110,116,115,32,115,116,97,114,116,32,97,110,100,32,101,110,100,32,97,114,101,10,105,110,116,101,114,112,114,101,116,101,100,32,97,115,32,105,110,32,115,108,105,99,101,32,110,111,116,97,116,105,111,110,46,0] /* count(s, sub[, start */, "i8", ALLOC_NORMAL);
__str13=allocate([116,35,116,35,124,110,110,58,99,111,117,110,116,0] /* t#t#|nn:count\00 */, "i8", ALLOC_NORMAL);
_swapcase__doc__=allocate([115,119,97,112,99,97,115,101,40,115,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,115,116,114,105,110,103,32,115,32,119,105,116,104,32,117,112,112,101,114,32,99,97,115,101,32,99,104,97,114,97,99,116,101,114,115,10,99,111,110,118,101,114,116,101,100,32,116,111,32,108,111,119,101,114,99,97,115,101,32,97,110,100,32,118,105,99,101,32,118,101,114,115,97,46,0] /* swapcase(s) -> strin */, "i8", ALLOC_NORMAL);
_atoi__doc__=allocate([97,116,111,105,40,115,32,91,44,98,97,115,101,93,41,32,45,62,32,105,110,116,10,10,82,101,116,117,114,110,32,116,104,101,32,105,110,116,101,103,101,114,32,114,101,112,114,101,115,101,110,116,101,100,32,98,121,32,116,104,101,32,115,116,114,105,110,103,32,115,32,105,110,32,116,104,101,32,103,105,118,101,110,10,98,97,115,101,44,32,119,104,105,99,104,32,100,101,102,97,117,108,116,115,32,116,111,32,49,48,46,32,32,84,104,101,32,115,116,114,105,110,103,32,115,32,109,117,115,116,32,99,111,110,115,105,115,116,32,111,102,32,111,110,101,10,111,114,32,109,111,114,101,32,100,105,103,105,116,115,44,32,112,111,115,115,105,98,108,121,32,112,114,101,99,101,100,101,100,32,98,121,32,97,32,115,105,103,110,46,32,32,73,102,32,98,97,115,101,32,105,115,32,48,44,32,105,116,10,105,115,32,99,104,111,115,101,110,32,102,114,111,109,32,116,104,101,32,108,101,97,100,105,110,103,32,99,104,97,114,97,99,116,101,114,115,32,111,102,32,115,44,32,48,32,102,111,114,32,111,99,116,97,108,44,32,48,120,32,111,114,10,48,88,32,102,111,114,32,104,101,120,97,100,101,99,105,109,97,108,46,32,32,73,102,32,98,97,115,101,32,105,115,32,49,54,44,32,97,32,112,114,101,99,101,100,105,110,103,32,48,120,32,111,114,32,48,88,32,105,115,10,97,99,99,101,112,116,101,100,46,0] /* atoi(s [,base]) -> i */, "i8", ALLOC_NORMAL);
__str14=allocate([115,124,105,58,97,116,111,105,0] /* s|i:atoi\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([105,110,118,97,108,105,100,32,98,97,115,101,32,102,111,114,32,97,116,111,105,40,41,0] /* invalid base for ato */, "i8", ALLOC_NORMAL);
__str16=allocate([105,110,118,97,108,105,100,32,108,105,116,101,114,97,108,32,102,111,114,32,97,116,111,105,40,41,58,32,37,46,50,48,48,115,0] /* invalid literal for  */, "i8", ALLOC_NORMAL);
__str17=allocate([97,116,111,105,40,41,32,108,105,116,101,114,97,108,32,116,111,111,32,108,97,114,103,101,58,32,37,46,50,48,48,115,0] /* atoi() literal too l */, "i8", ALLOC_NORMAL);
_atol__doc__=allocate([97,116,111,108,40,115,32,91,44,98,97,115,101,93,41,32,45,62,32,108,111,110,103,10,10,82,101,116,117,114,110,32,116,104,101,32,108,111,110,103,32,105,110,116,101,103,101,114,32,114,101,112,114,101,115,101,110,116,101,100,32,98,121,32,116,104,101,32,115,116,114,105,110,103,32,115,32,105,110,32,116,104,101,10,103,105,118,101,110,32,98,97,115,101,44,32,119,104,105,99,104,32,100,101,102,97,117,108,116,115,32,116,111,32,49,48,46,32,32,84,104,101,32,115,116,114,105,110,103,32,115,32,109,117,115,116,32,99,111,110,115,105,115,116,10,111,102,32,111,110,101,32,111,114,32,109,111,114,101,32,100,105,103,105,116,115,44,32,112,111,115,115,105,98,108,121,32,112,114,101,99,101,100,101,100,32,98,121,32,97,32,115,105,103,110,46,32,32,73,102,32,98,97,115,101,10,105,115,32,48,44,32,105,116,32,105,115,32,99,104,111,115,101,110,32,102,114,111,109,32,116,104,101,32,108,101,97,100,105,110,103,32,99,104,97,114,97,99,116,101,114,115,32,111,102,32,115,44,32,48,32,102,111,114,10,111,99,116,97,108,44,32,48,120,32,111,114,32,48,88,32,102,111,114,32,104,101,120,97,100,101,99,105,109,97,108,46,32,32,73,102,32,98,97,115,101,32,105,115,32,49,54,44,32,97,32,112,114,101,99,101,100,105,110,103,10,48,120,32,111,114,32,48,88,32,105,115,32,97,99,99,101,112,116,101,100,46,32,32,65,32,116,114,97,105,108,105,110,103,32,76,32,111,114,32,108,32,105,115,32,110,111,116,32,97,99,99,101,112,116,101,100,44,10,117,110,108,101,115,115,32,98,97,115,101,32,105,115,32,48,46,0] /* atol(s [,base]) -> l */, "i8", ALLOC_NORMAL);
__str18=allocate([115,124,105,58,97,116,111,108,0] /* s|i:atol\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([105,110,118,97,108,105,100,32,98,97,115,101,32,102,111,114,32,97,116,111,108,40,41,0] /* invalid base for ato */, "i8", ALLOC_NORMAL);
__str20=allocate([101,109,112,116,121,32,115,116,114,105,110,103,32,102,111,114,32,97,116,111,108,40,41,0] /* empty string for ato */, "i8", ALLOC_NORMAL);
__str21=allocate([105,110,118,97,108,105,100,32,108,105,116,101,114,97,108,32,102,111,114,32,97,116,111,108,40,41,58,32,37,46,50,48,48,115,0] /* invalid literal for  */, "i8", ALLOC_NORMAL);
_atof__doc__=allocate([97,116,111,102,40,115,41,32,45,62,32,102,108,111,97,116,10,10,82,101,116,117,114,110,32,116,104,101,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,32,114,101,112,114,101,115,101,110,116,101,100,32,98,121,32,116,104,101,32,115,116,114,105,110,103,32,115,46,0] /* atof(s) -> float\0A\ */, "i8", ALLOC_NORMAL);
__str22=allocate([115,58,97,116,111,102,0] /* s:atof\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([101,109,112,116,121,32,115,116,114,105,110,103,32,102,111,114,32,97,116,111,102,40,41,0] /* empty string for ato */, "i8", ALLOC_NORMAL);
__str24=allocate([105,110,118,97,108,105,100,32,108,105,116,101,114,97,108,32,102,111,114,32,97,116,111,102,40,41,58,32,37,46,50,48,48,115,0] /* invalid literal for  */, "i8", ALLOC_NORMAL);
_maketrans__doc__=allocate([109,97,107,101,116,114,97,110,115,40,102,114,109,44,32,116,111,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,116,114,97,110,115,108,97,116,105,111,110,32,116,97,98,108,101,32,40,97,32,115,116,114,105,110,103,32,111,102,32,50,53,54,32,98,121,116,101,115,32,108,111,110,103,41,10,115,117,105,116,97,98,108,101,32,102,111,114,32,117,115,101,32,105,110,32,115,116,114,105,110,103,46,116,114,97,110,115,108,97,116,101,46,32,32,84,104,101,32,115,116,114,105,110,103,115,32,102,114,109,32,97,110,100,32,116,111,10,109,117,115,116,32,98,101,32,111,102,32,116,104,101,32,115,97,109,101,32,108,101,110,103,116,104,46,0] /* maketrans(frm, to) - */, "i8", ALLOC_NORMAL);
__str25=allocate([116,35,116,35,58,109,97,107,101,116,114,97,110,115,0] /* t#t#:maketrans\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([109,97,107,101,116,114,97,110,115,32,97,114,103,117,109,101,110,116,115,32,109,117,115,116,32,104,97,118,101,32,115,97,109,101,32,108,101,110,103,116,104,0] /* maketrans arguments  */, "i8", ALLOC_NORMAL);
_translate__doc__=allocate([116,114,97,110,115,108,97,116,101,40,115,44,116,97,98,108,101,32,91,44,100,101,108,101,116,101,99,104,97,114,115,93,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,115,116,114,105,110,103,32,115,44,32,119,104,101,114,101,32,97,108,108,32,99,104,97,114,97,99,116,101,114,115,32,111,99,99,117,114,114,105,110,103,10,105,110,32,116,104,101,32,111,112,116,105,111,110,97,108,32,97,114,103,117,109,101,110,116,32,100,101,108,101,116,101,99,104,97,114,115,32,97,114,101,32,114,101,109,111,118,101,100,44,32,97,110,100,32,116,104,101,10,114,101,109,97,105,110,105,110,103,32,99,104,97,114,97,99,116,101,114,115,32,104,97,118,101,32,98,101,101,110,32,109,97,112,112,101,100,32,116,104,114,111,117,103,104,32,116,104,101,32,103,105,118,101,110,10,116,114,97,110,115,108,97,116,105,111,110,32,116,97,98,108,101,44,32,119,104,105,99,104,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,32,111,102,32,108,101,110,103,116,104,32,50,53,54,46,0] /* translate(s,table [, */, "i8", ALLOC_NORMAL);
__str27=allocate([83,116,35,124,116,35,58,116,114,97,110,115,108,97,116,101,0] /* St#|t#:translate\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([116,114,97,110,115,108,97,116,105,111,110,32,116,97,98,108,101,32,109,117,115,116,32,98,101,32,50,53,54,32,99,104,97,114,97,99,116,101,114,115,32,108,111,110,103,0] /* translation table mu */, "i8", ALLOC_NORMAL);
__str29=allocate([110,101,119,95,108,101,110,32,62,32,48,0] /* new_len > 0\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,115,116,114,111,112,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/s */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9892=allocate([109,121,109,101,109,114,101,112,108,97,99,101,0] /* mymemreplace\00 */, "i8", ALLOC_NORMAL);
_replace__doc__=allocate([114,101,112,108,97,99,101,32,40,115,116,114,44,32,111,108,100,44,32,110,101,119,91,44,32,109,97,120,115,112,108,105,116,93,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,115,116,114,105,110,103,32,115,116,114,32,119,105,116,104,32,97,108,108,32,111,99,99,117,114,114,101,110,99,101,115,32,111,102,32,115,117,98,115,116,114,105,110,103,10,111,108,100,32,114,101,112,108,97,99,101,100,32,98,121,32,110,101,119,46,32,73,102,32,116,104,101,32,111,112,116,105,111,110,97,108,32,97,114,103,117,109,101,110,116,32,109,97,120,115,112,108,105,116,32,105,115,10,103,105,118,101,110,44,32,111,110,108,121,32,116,104,101,32,102,105,114,115,116,32,109,97,120,115,112,108,105,116,32,111,99,99,117,114,114,101,110,99,101,115,32,97,114,101,32,114,101,112,108,97,99,101,100,46,0] /* replace (str, old, n */, "i8", ALLOC_NORMAL);
__str31=allocate([116,35,116,35,116,35,124,110,58,114,101,112,108,97,99,101,0] /* t#t#t#|n:replace\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([101,109,112,116,121,32,112,97,116,116,101,114,110,32,115,116,114,105,110,103,0] /* empty pattern string */, "i8", ALLOC_NORMAL);
__str33=allocate([97,116,111,102,0] /* atof\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([97,116,111,105,0] /* atoi\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([97,116,111,108,0] /* atol\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([99,97,112,105,116,97,108,105,122,101,0] /* capitalize\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([99,111,117,110,116,0] /* count\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([101,120,112,97,110,100,116,97,98,115,0] /* expandtabs\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([102,105,110,100,0] /* find\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([106,111,105,110,0] /* join\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([106,111,105,110,102,105,101,108,100,115,0] /* joinfields\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([108,115,116,114,105,112,0] /* lstrip\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([108,111,119,101,114,0] /* lower\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([109,97,107,101,116,114,97,110,115,0] /* maketrans\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([114,101,112,108,97,99,101,0] /* replace\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([114,102,105,110,100,0] /* rfind\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([114,115,116,114,105,112,0] /* rstrip\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([115,112,108,105,116,0] /* split\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([115,112,108,105,116,102,105,101,108,100,115,0] /* splitfields\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([115,116,114,105,112,0] /* strip\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([115,119,97,112,99,97,115,101,0] /* swapcase\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([116,114,97,110,115,108,97,116,101,0] /* translate\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([117,112,112,101,114,0] /* upper\00 */, "i8", ALLOC_NORMAL);
_strop_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str54=allocate([115,116,114,111,112,0] /* strop\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([119,104,105,116,101,115,112,97,99,101,0] /* whitespace\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([108,111,119,101,114,99,97,115,101,0] /* lowercase\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([117,112,112,101,114,99,97,115,101,0] /* uppercase\00 */, "i8", ALLOC_NORMAL);
HEAP[_strop_methods]=__str33;
HEAP[_strop_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_strop_methods+12]=_atof__doc__;
HEAP[_strop_methods+16]=__str34;
HEAP[_strop_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_strop_methods+28]=_atoi__doc__;
HEAP[_strop_methods+32]=__str35;
HEAP[_strop_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_strop_methods+44]=_atol__doc__;
HEAP[_strop_methods+48]=__str36;
HEAP[_strop_methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_strop_methods+60]=_capitalize__doc__;
HEAP[_strop_methods+64]=__str37;
HEAP[_strop_methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_strop_methods+76]=_count__doc__;
HEAP[_strop_methods+80]=__str38;
HEAP[_strop_methods+84]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_strop_methods+92]=_expandtabs__doc__;
HEAP[_strop_methods+96]=__str39;
HEAP[_strop_methods+100]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_strop_methods+108]=_find__doc__;
HEAP[_strop_methods+112]=__str40;
HEAP[_strop_methods+116]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_strop_methods+124]=_joinfields__doc__;
HEAP[_strop_methods+128]=__str41;
HEAP[_strop_methods+132]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_strop_methods+140]=_joinfields__doc__;
HEAP[_strop_methods+144]=__str42;
HEAP[_strop_methods+148]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_strop_methods+156]=_lstrip__doc__;
HEAP[_strop_methods+160]=__str43;
HEAP[_strop_methods+164]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_strop_methods+172]=_lower__doc__;
HEAP[_strop_methods+176]=__str44;
HEAP[_strop_methods+180]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_strop_methods+188]=_maketrans__doc__;
HEAP[_strop_methods+192]=__str45;
HEAP[_strop_methods+196]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_strop_methods+204]=_replace__doc__;
HEAP[_strop_methods+208]=__str46;
HEAP[_strop_methods+212]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_strop_methods+220]=_rfind__doc__;
HEAP[_strop_methods+224]=__str47;
HEAP[_strop_methods+228]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_strop_methods+236]=_rstrip__doc__;
HEAP[_strop_methods+240]=__str48;
HEAP[_strop_methods+244]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_strop_methods+252]=_splitfields__doc__;
HEAP[_strop_methods+256]=__str49;
HEAP[_strop_methods+260]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_strop_methods+268]=_splitfields__doc__;
HEAP[_strop_methods+272]=__str50;
HEAP[_strop_methods+276]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_strop_methods+284]=_strip__doc__;
HEAP[_strop_methods+288]=__str51;
HEAP[_strop_methods+292]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_strop_methods+300]=_swapcase__doc__;
HEAP[_strop_methods+304]=__str52;
HEAP[_strop_methods+308]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_strop_methods+316]=_translate__doc__;
HEAP[_strop_methods+320]=__str53;
HEAP[_strop_methods+324]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_strop_methods+332]=_upper__doc__;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

