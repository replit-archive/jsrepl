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



var $0___SIZE = 80; // %0
  
var $1___SIZE = 20; // %1
  
var $2___SIZE = 40; // %2
  
var $3___SIZE = 20; // %3
  
var $4___SIZE = 48; // %4
  
var $5___SIZE = 16; // %5
  
var $6___SIZE = 16; // %6
  
var $7___SIZE = 196; // %7
  
var $8___SIZE = 32; // %8
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyTupleObject___SIZE = 16; // %struct.PyTupleObject
  
var $struct_PyVarObject___SIZE = 12; // %struct.PyVarObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_partialobject___SIZE = 28; // %struct.partialobject
  
var __str;

var __str1;
var __str2;
var _reduce_doc;
var __str3;
var __str4;

var __str5;
var __str6;
var ___PRETTY_FUNCTION___8588;
var __str7;
var __str8;
var _partial_doc;
var __str9;
var __str10;
var __str11;
var __str12;
var __str13;
var __str14;
var _partial_memberlist;
var __str15;
var __str16;
var __str17;
var _partial_getsetlist;
var __str18;
var __str19;
var __str20;
var __str21;
var _partial_methods;
var __str22;
var _partial_type;
var _module_doc;
var _module_methods;
var __str23;
var __str24;
var ___PRETTY_FUNCTION___8886;
































  function _functools_reduce($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $seq=__stackBase__;
        var $func=__stackBase__+4;
        var $result=__stackBase__+8;
        var $it;
        var $op2;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$result]=0; //@line 17 "_functoolsmodule.c"
        var $1=$args_addr; //@line 19 "_functoolsmodule.c"
        var $2=_PyArg_UnpackTuple($1, __str, 2, 3, allocate([$func,0,0,0,$seq,0,0,0,$result,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 19 "_functoolsmodule.c"
        var $3=($2)==0; //@line 19 "_functoolsmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 19 "_functoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 20 "_functoolsmodule.c"
        __label__ = 35; break; //@line 20 "_functoolsmodule.c"
      case 2: // $bb1
        var $4=HEAP[$result]; //@line 21 "_functoolsmodule.c"
        var $5=($4)!=0; //@line 21 "_functoolsmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 21 "_functoolsmodule.c"
      case 3: // $bb2
        var $6=HEAP[$result]; //@line 22 "_functoolsmodule.c"
        var $7=$6; //@line 22 "_functoolsmodule.c"
        var $8=HEAP[$7]; //@line 22 "_functoolsmodule.c"
        var $9=($8) + 1; //@line 22 "_functoolsmodule.c"
        var $10=$6; //@line 22 "_functoolsmodule.c"
        HEAP[$10]=$9; //@line 22 "_functoolsmodule.c"
        __label__ = 4; break; //@line 22 "_functoolsmodule.c"
      case 4: // $bb3
        var $11=HEAP[$seq]; //@line 24 "_functoolsmodule.c"
        var $12=_PyObject_GetIter($11); //@line 24 "_functoolsmodule.c"
        $it=$12; //@line 24 "_functoolsmodule.c"
        var $13=($12)==0; //@line 25 "_functoolsmodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 25 "_functoolsmodule.c"
      case 5: // $bb4
        var $14=HEAP[_PyExc_TypeError]; //@line 26 "_functoolsmodule.c"
        _PyErr_SetString($14, __str1); //@line 26 "_functoolsmodule.c"
        var $15=HEAP[$result]; //@line 28 "_functoolsmodule.c"
        var $16=($15)!=0; //@line 28 "_functoolsmodule.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 28 "_functoolsmodule.c"
      case 6: // $bb5
        var $17=HEAP[$result]; //@line 28 "_functoolsmodule.c"
        var $18=$17; //@line 28 "_functoolsmodule.c"
        var $19=HEAP[$18]; //@line 28 "_functoolsmodule.c"
        var $20=($19) - 1; //@line 28 "_functoolsmodule.c"
        var $21=$17; //@line 28 "_functoolsmodule.c"
        HEAP[$21]=$20; //@line 28 "_functoolsmodule.c"
        var $22=$17; //@line 28 "_functoolsmodule.c"
        var $23=HEAP[$22]; //@line 28 "_functoolsmodule.c"
        var $24=($23)==0; //@line 28 "_functoolsmodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 28 "_functoolsmodule.c"
      case 7: // $bb6
        var $25=HEAP[$result]; //@line 28 "_functoolsmodule.c"
        var $26=$25+4; //@line 28 "_functoolsmodule.c"
        var $27=HEAP[$26]; //@line 28 "_functoolsmodule.c"
        var $28=$27+24; //@line 28 "_functoolsmodule.c"
        var $29=HEAP[$28]; //@line 28 "_functoolsmodule.c"
        var $30=HEAP[$result]; //@line 28 "_functoolsmodule.c"
        FUNCTION_TABLE[$29]($30); //@line 28 "_functoolsmodule.c"
        __label__ = 8; break; //@line 28 "_functoolsmodule.c"
      case 8: // $bb7
        $0=0; //@line 29 "_functoolsmodule.c"
        __label__ = 35; break; //@line 29 "_functoolsmodule.c"
      case 9: // $bb8
        var $31=_PyTuple_New(2); //@line 32 "_functoolsmodule.c"
        $args_addr=$31; //@line 32 "_functoolsmodule.c"
        var $32=$args_addr; //@line 32 "_functoolsmodule.c"
        var $33=($32)==0; //@line 32 "_functoolsmodule.c"
        if ($33) { __label__ = 29; break; } else { __label__ = 10; break; } //@line 32 "_functoolsmodule.c"
      case 10: // $bb9
        var $34=$args_addr; //@line 38 "_functoolsmodule.c"
        var $35=$34; //@line 38 "_functoolsmodule.c"
        var $36=HEAP[$35]; //@line 38 "_functoolsmodule.c"
        var $37=($36) > 1; //@line 38 "_functoolsmodule.c"
        if ($37) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 38 "_functoolsmodule.c"
      case 11: // $bb10
        var $38=$args_addr; //@line 39 "_functoolsmodule.c"
        var $39=$38; //@line 39 "_functoolsmodule.c"
        var $40=HEAP[$39]; //@line 39 "_functoolsmodule.c"
        var $41=($40) - 1; //@line 39 "_functoolsmodule.c"
        var $42=$args_addr; //@line 39 "_functoolsmodule.c"
        var $43=$42; //@line 39 "_functoolsmodule.c"
        HEAP[$43]=$41; //@line 39 "_functoolsmodule.c"
        var $44=$args_addr; //@line 39 "_functoolsmodule.c"
        var $45=$44; //@line 39 "_functoolsmodule.c"
        var $46=HEAP[$45]; //@line 39 "_functoolsmodule.c"
        var $47=($46)==0; //@line 39 "_functoolsmodule.c"
        if ($47) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 39 "_functoolsmodule.c"
      case 12: // $bb11
        var $48=$args_addr; //@line 39 "_functoolsmodule.c"
        var $49=$48+4; //@line 39 "_functoolsmodule.c"
        var $50=HEAP[$49]; //@line 39 "_functoolsmodule.c"
        var $51=$50+24; //@line 39 "_functoolsmodule.c"
        var $52=HEAP[$51]; //@line 39 "_functoolsmodule.c"
        var $53=$args_addr; //@line 39 "_functoolsmodule.c"
        FUNCTION_TABLE[$52]($53); //@line 39 "_functoolsmodule.c"
        __label__ = 13; break; //@line 39 "_functoolsmodule.c"
      case 13: // $bb12
        var $54=_PyTuple_New(2); //@line 40 "_functoolsmodule.c"
        $args_addr=$54; //@line 40 "_functoolsmodule.c"
        var $55=($54)==0; //@line 40 "_functoolsmodule.c"
        if ($55) { __label__ = 29; break; } else { __label__ = 14; break; } //@line 40 "_functoolsmodule.c"
      case 14: // $bb13
        var $56=$it; //@line 44 "_functoolsmodule.c"
        var $57=_PyIter_Next($56); //@line 44 "_functoolsmodule.c"
        $op2=$57; //@line 44 "_functoolsmodule.c"
        var $58=($57)==0; //@line 45 "_functoolsmodule.c"
        if ($58) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 45 "_functoolsmodule.c"
      case 15: // $bb14
        var $59=_PyErr_Occurred(); //@line 46 "_functoolsmodule.c"
        var $60=($59)!=0; //@line 46 "_functoolsmodule.c"
        if ($60) { __label__ = 26; break; } else { __label__ = 16; break; } //@line 46 "_functoolsmodule.c"
      case 16: // $bb15
        var $61=$args_addr; //@line 61 "_functoolsmodule.c"
        var $62=$61; //@line 61 "_functoolsmodule.c"
        var $63=HEAP[$62]; //@line 61 "_functoolsmodule.c"
        var $64=($63) - 1; //@line 61 "_functoolsmodule.c"
        var $65=$args_addr; //@line 61 "_functoolsmodule.c"
        var $66=$65; //@line 61 "_functoolsmodule.c"
        HEAP[$66]=$64; //@line 61 "_functoolsmodule.c"
        var $67=$args_addr; //@line 61 "_functoolsmodule.c"
        var $68=$67; //@line 61 "_functoolsmodule.c"
        var $69=HEAP[$68]; //@line 61 "_functoolsmodule.c"
        var $70=($69)==0; //@line 61 "_functoolsmodule.c"
        if ($70) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 61 "_functoolsmodule.c"
      case 17: // $bb16
        var $71=HEAP[$result]; //@line 51 "_functoolsmodule.c"
        var $72=($71)==0; //@line 51 "_functoolsmodule.c"
        if ($72) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 51 "_functoolsmodule.c"
      case 18: // $bb17
        var $73=$op2; //@line 52 "_functoolsmodule.c"
        HEAP[$result]=$73; //@line 52 "_functoolsmodule.c"
        __label__ = 10; break; //@line 52 "_functoolsmodule.c"
      case 19: // $bb18
        var $74=HEAP[$result]; //@line 54 "_functoolsmodule.c"
        var $75=$args_addr; //@line 54 "_functoolsmodule.c"
        var $76=_PyTuple_SetItem($75, 0, $74); //@line 54 "_functoolsmodule.c"
        var $77=$args_addr; //@line 55 "_functoolsmodule.c"
        var $78=$op2; //@line 55 "_functoolsmodule.c"
        var $79=_PyTuple_SetItem($77, 1, $78); //@line 55 "_functoolsmodule.c"
        var $80=HEAP[$func]; //@line 56 "_functoolsmodule.c"
        var $81=$args_addr; //@line 56 "_functoolsmodule.c"
        var $82=_PyEval_CallObjectWithKeywords($80, $81, 0); //@line 56 "_functoolsmodule.c"
        HEAP[$result]=$82; //@line 56 "_functoolsmodule.c"
        var $83=HEAP[$result]; //@line 56 "_functoolsmodule.c"
        var $84=($83)==0; //@line 56 "_functoolsmodule.c"
        if ($84) { __label__ = 26; break; } else { __label__ = 10; break; } //@line 56 "_functoolsmodule.c"
      case 20: // $bb20
        var $85=$args_addr; //@line 61 "_functoolsmodule.c"
        var $86=$85+4; //@line 61 "_functoolsmodule.c"
        var $87=HEAP[$86]; //@line 61 "_functoolsmodule.c"
        var $88=$87+24; //@line 61 "_functoolsmodule.c"
        var $89=HEAP[$88]; //@line 61 "_functoolsmodule.c"
        var $90=$args_addr; //@line 61 "_functoolsmodule.c"
        FUNCTION_TABLE[$89]($90); //@line 61 "_functoolsmodule.c"
        __label__ = 21; break; //@line 61 "_functoolsmodule.c"
      case 21: // $bb21
        var $91=HEAP[$result]; //@line 63 "_functoolsmodule.c"
        var $92=($91)==0; //@line 63 "_functoolsmodule.c"
        if ($92) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 63 "_functoolsmodule.c"
      case 22: // $bb22
        var $93=HEAP[_PyExc_TypeError]; //@line 64 "_functoolsmodule.c"
        _PyErr_SetString($93, __str2); //@line 64 "_functoolsmodule.c"
        __label__ = 23; break; //@line 64 "_functoolsmodule.c"
      case 23: // $bb23
        var $94=$it; //@line 67 "_functoolsmodule.c"
        var $95=$94; //@line 67 "_functoolsmodule.c"
        var $96=HEAP[$95]; //@line 67 "_functoolsmodule.c"
        var $97=($96) - 1; //@line 67 "_functoolsmodule.c"
        var $98=$it; //@line 67 "_functoolsmodule.c"
        var $99=$98; //@line 67 "_functoolsmodule.c"
        HEAP[$99]=$97; //@line 67 "_functoolsmodule.c"
        var $100=$it; //@line 67 "_functoolsmodule.c"
        var $101=$100; //@line 67 "_functoolsmodule.c"
        var $102=HEAP[$101]; //@line 67 "_functoolsmodule.c"
        var $103=($102)==0; //@line 67 "_functoolsmodule.c"
        if ($103) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 67 "_functoolsmodule.c"
      case 24: // $bb24
        var $104=$it; //@line 67 "_functoolsmodule.c"
        var $105=$104+4; //@line 67 "_functoolsmodule.c"
        var $106=HEAP[$105]; //@line 67 "_functoolsmodule.c"
        var $107=$106+24; //@line 67 "_functoolsmodule.c"
        var $108=HEAP[$107]; //@line 67 "_functoolsmodule.c"
        var $109=$it; //@line 67 "_functoolsmodule.c"
        FUNCTION_TABLE[$108]($109); //@line 67 "_functoolsmodule.c"
        __label__ = 25; break; //@line 67 "_functoolsmodule.c"
      case 25: // $bb25
        var $110=HEAP[$result]; //@line 68 "_functoolsmodule.c"
        $0=$110; //@line 68 "_functoolsmodule.c"
        __label__ = 35; break; //@line 68 "_functoolsmodule.c"
      case 26: // $Fail
        var $_pr=$args_addr;
        var $111=($_pr)!=0; //@line 71 "_functoolsmodule.c"
        if ($111) { __label__ = 27; break; } else { __label__ = 29; break; } //@line 71 "_functoolsmodule.c"
      case 27: // $bb26
        var $112=$args_addr; //@line 71 "_functoolsmodule.c"
        var $113=$112; //@line 71 "_functoolsmodule.c"
        var $114=HEAP[$113]; //@line 71 "_functoolsmodule.c"
        var $115=($114) - 1; //@line 71 "_functoolsmodule.c"
        var $116=$args_addr; //@line 71 "_functoolsmodule.c"
        var $117=$116; //@line 71 "_functoolsmodule.c"
        HEAP[$117]=$115; //@line 71 "_functoolsmodule.c"
        var $118=$args_addr; //@line 71 "_functoolsmodule.c"
        var $119=$118; //@line 71 "_functoolsmodule.c"
        var $120=HEAP[$119]; //@line 71 "_functoolsmodule.c"
        var $121=($120)==0; //@line 71 "_functoolsmodule.c"
        if ($121) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 71 "_functoolsmodule.c"
      case 28: // $bb27
        var $122=$args_addr; //@line 71 "_functoolsmodule.c"
        var $123=$122+4; //@line 71 "_functoolsmodule.c"
        var $124=HEAP[$123]; //@line 71 "_functoolsmodule.c"
        var $125=$124+24; //@line 71 "_functoolsmodule.c"
        var $126=HEAP[$125]; //@line 71 "_functoolsmodule.c"
        var $127=$args_addr; //@line 71 "_functoolsmodule.c"
        FUNCTION_TABLE[$126]($127); //@line 71 "_functoolsmodule.c"
        __label__ = 29; break; //@line 71 "_functoolsmodule.c"
      case 29: // $bb28
        var $128=HEAP[$result]; //@line 72 "_functoolsmodule.c"
        var $129=($128)!=0; //@line 72 "_functoolsmodule.c"
        if ($129) { __label__ = 30; break; } else { __label__ = 32; break; } //@line 72 "_functoolsmodule.c"
      case 30: // $bb29
        var $130=HEAP[$result]; //@line 72 "_functoolsmodule.c"
        var $131=$130; //@line 72 "_functoolsmodule.c"
        var $132=HEAP[$131]; //@line 72 "_functoolsmodule.c"
        var $133=($132) - 1; //@line 72 "_functoolsmodule.c"
        var $134=$130; //@line 72 "_functoolsmodule.c"
        HEAP[$134]=$133; //@line 72 "_functoolsmodule.c"
        var $135=$130; //@line 72 "_functoolsmodule.c"
        var $136=HEAP[$135]; //@line 72 "_functoolsmodule.c"
        var $137=($136)==0; //@line 72 "_functoolsmodule.c"
        if ($137) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 72 "_functoolsmodule.c"
      case 31: // $bb30
        var $138=HEAP[$result]; //@line 72 "_functoolsmodule.c"
        var $139=$138+4; //@line 72 "_functoolsmodule.c"
        var $140=HEAP[$139]; //@line 72 "_functoolsmodule.c"
        var $141=$140+24; //@line 72 "_functoolsmodule.c"
        var $142=HEAP[$141]; //@line 72 "_functoolsmodule.c"
        var $143=HEAP[$result]; //@line 72 "_functoolsmodule.c"
        FUNCTION_TABLE[$142]($143); //@line 72 "_functoolsmodule.c"
        __label__ = 32; break; //@line 72 "_functoolsmodule.c"
      case 32: // $bb31
        var $144=$it; //@line 73 "_functoolsmodule.c"
        var $145=$144; //@line 73 "_functoolsmodule.c"
        var $146=HEAP[$145]; //@line 73 "_functoolsmodule.c"
        var $147=($146) - 1; //@line 73 "_functoolsmodule.c"
        var $148=$it; //@line 73 "_functoolsmodule.c"
        var $149=$148; //@line 73 "_functoolsmodule.c"
        HEAP[$149]=$147; //@line 73 "_functoolsmodule.c"
        var $150=$it; //@line 73 "_functoolsmodule.c"
        var $151=$150; //@line 73 "_functoolsmodule.c"
        var $152=HEAP[$151]; //@line 73 "_functoolsmodule.c"
        var $153=($152)==0; //@line 73 "_functoolsmodule.c"
        if ($153) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 73 "_functoolsmodule.c"
      case 33: // $bb32
        var $154=$it; //@line 73 "_functoolsmodule.c"
        var $155=$154+4; //@line 73 "_functoolsmodule.c"
        var $156=HEAP[$155]; //@line 73 "_functoolsmodule.c"
        var $157=$156+24; //@line 73 "_functoolsmodule.c"
        var $158=HEAP[$157]; //@line 73 "_functoolsmodule.c"
        var $159=$it; //@line 73 "_functoolsmodule.c"
        FUNCTION_TABLE[$158]($159); //@line 73 "_functoolsmodule.c"
        __label__ = 34; break; //@line 73 "_functoolsmodule.c"
      case 34: // $bb33
        $0=0; //@line 74 "_functoolsmodule.c"
        __label__ = 35; break; //@line 74 "_functoolsmodule.c"
      case 35: // $bb34
        var $160=$0; //@line 20 "_functoolsmodule.c"
        $retval=$160; //@line 20 "_functoolsmodule.c"
        var $retval35=$retval; //@line 20 "_functoolsmodule.c"
        STACKTOP = __stackBase__;
        return $retval35; //@line 20 "_functoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _partial_new($type, $args, $kw) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $func;
        var $pto;
        $type_addr=$type;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=$args_addr; //@line 109 "_functoolsmodule.c"
        var $2=$1; //@line 109 "_functoolsmodule.c"
        var $3=$2+8; //@line 109 "_functoolsmodule.c"
        var $4=HEAP[$3]; //@line 109 "_functoolsmodule.c"
        var $5=($4) <= 0; //@line 109 "_functoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 109 "_functoolsmodule.c"
      case 1: // $bb
        var $6=HEAP[_PyExc_TypeError]; //@line 110 "_functoolsmodule.c"
        _PyErr_SetString($6, __str3); //@line 110 "_functoolsmodule.c"
        $0=0; //@line 112 "_functoolsmodule.c"
        __label__ = 17; break; //@line 112 "_functoolsmodule.c"
      case 2: // $bb1
        var $7=$args_addr; //@line 115 "_functoolsmodule.c"
        var $8=$7; //@line 115 "_functoolsmodule.c"
        var $9=$8+12; //@line 115 "_functoolsmodule.c"
        var $10=$9; //@line 115 "_functoolsmodule.c"
        var $11=HEAP[$10]; //@line 115 "_functoolsmodule.c"
        $func=$11; //@line 115 "_functoolsmodule.c"
        var $12=$func; //@line 116 "_functoolsmodule.c"
        var $13=_PyCallable_Check($12); //@line 116 "_functoolsmodule.c"
        var $14=($13)==0; //@line 116 "_functoolsmodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 116 "_functoolsmodule.c"
      case 3: // $bb2
        var $15=HEAP[_PyExc_TypeError]; //@line 117 "_functoolsmodule.c"
        _PyErr_SetString($15, __str4); //@line 117 "_functoolsmodule.c"
        $0=0; //@line 119 "_functoolsmodule.c"
        __label__ = 17; break; //@line 119 "_functoolsmodule.c"
      case 4: // $bb3
        var $16=$type_addr; //@line 123 "_functoolsmodule.c"
        var $17=$16+152; //@line 123 "_functoolsmodule.c"
        var $18=HEAP[$17]; //@line 123 "_functoolsmodule.c"
        var $19=$type_addr; //@line 123 "_functoolsmodule.c"
        var $20=FUNCTION_TABLE[$18]($19, 0); //@line 123 "_functoolsmodule.c"
        var $21=$20; //@line 123 "_functoolsmodule.c"
        $pto=$21; //@line 123 "_functoolsmodule.c"
        var $22=$pto; //@line 124 "_functoolsmodule.c"
        var $23=($22)==0; //@line 124 "_functoolsmodule.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 124 "_functoolsmodule.c"
      case 5: // $bb4
        $0=0; //@line 125 "_functoolsmodule.c"
        __label__ = 17; break; //@line 125 "_functoolsmodule.c"
      case 6: // $bb5
        var $24=$pto; //@line 127 "_functoolsmodule.c"
        var $25=$24+8; //@line 127 "_functoolsmodule.c"
        var $26=$func; //@line 127 "_functoolsmodule.c"
        HEAP[$25]=$26; //@line 127 "_functoolsmodule.c"
        var $27=$func; //@line 128 "_functoolsmodule.c"
        var $28=$27; //@line 128 "_functoolsmodule.c"
        var $29=HEAP[$28]; //@line 128 "_functoolsmodule.c"
        var $30=($29) + 1; //@line 128 "_functoolsmodule.c"
        var $31=$func; //@line 128 "_functoolsmodule.c"
        var $32=$31; //@line 128 "_functoolsmodule.c"
        HEAP[$32]=$30; //@line 128 "_functoolsmodule.c"
        var $33=$args_addr; //@line 129 "_functoolsmodule.c"
        var $34=_PyTuple_GetSlice($33, 1, 2147483647); //@line 129 "_functoolsmodule.c"
        var $35=$pto; //@line 129 "_functoolsmodule.c"
        var $36=$35+12; //@line 129 "_functoolsmodule.c"
        HEAP[$36]=$34; //@line 129 "_functoolsmodule.c"
        var $37=$pto; //@line 130 "_functoolsmodule.c"
        var $38=$37+12; //@line 130 "_functoolsmodule.c"
        var $39=HEAP[$38]; //@line 130 "_functoolsmodule.c"
        var $40=($39)==0; //@line 130 "_functoolsmodule.c"
        if ($40) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 130 "_functoolsmodule.c"
      case 7: // $bb6
        var $41=$pto; //@line 131 "_functoolsmodule.c"
        var $42=$41+16; //@line 131 "_functoolsmodule.c"
        HEAP[$42]=0; //@line 131 "_functoolsmodule.c"
        var $43=$pto; //@line 132 "_functoolsmodule.c"
        var $44=$43; //@line 132 "_functoolsmodule.c"
        var $45=$44; //@line 132 "_functoolsmodule.c"
        var $46=HEAP[$45]; //@line 132 "_functoolsmodule.c"
        var $47=($46) - 1; //@line 132 "_functoolsmodule.c"
        var $48=$44; //@line 132 "_functoolsmodule.c"
        HEAP[$48]=$47; //@line 132 "_functoolsmodule.c"
        var $49=$44; //@line 132 "_functoolsmodule.c"
        var $50=HEAP[$49]; //@line 132 "_functoolsmodule.c"
        var $51=($50)==0; //@line 132 "_functoolsmodule.c"
        if ($51) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 132 "_functoolsmodule.c"
      case 8: // $bb7
        var $52=$pto; //@line 132 "_functoolsmodule.c"
        var $53=$52; //@line 132 "_functoolsmodule.c"
        var $54=$53+4; //@line 132 "_functoolsmodule.c"
        var $55=HEAP[$54]; //@line 132 "_functoolsmodule.c"
        var $56=$55+24; //@line 132 "_functoolsmodule.c"
        var $57=HEAP[$56]; //@line 132 "_functoolsmodule.c"
        var $58=$pto; //@line 132 "_functoolsmodule.c"
        var $59=$58; //@line 132 "_functoolsmodule.c"
        FUNCTION_TABLE[$57]($59); //@line 132 "_functoolsmodule.c"
        __label__ = 9; break; //@line 132 "_functoolsmodule.c"
      case 9: // $bb8
        $0=0; //@line 133 "_functoolsmodule.c"
        __label__ = 17; break; //@line 133 "_functoolsmodule.c"
      case 10: // $bb9
        var $60=$kw_addr; //@line 135 "_functoolsmodule.c"
        var $61=($60)!=0; //@line 135 "_functoolsmodule.c"
        if ($61) { __label__ = 11; break; } else { __label__ = 15; break; } //@line 135 "_functoolsmodule.c"
      case 11: // $bb10
        var $62=$kw_addr; //@line 136 "_functoolsmodule.c"
        var $63=_PyDict_Copy($62); //@line 136 "_functoolsmodule.c"
        var $64=$pto; //@line 136 "_functoolsmodule.c"
        var $65=$64+16; //@line 136 "_functoolsmodule.c"
        HEAP[$65]=$63; //@line 136 "_functoolsmodule.c"
        var $66=$pto; //@line 137 "_functoolsmodule.c"
        var $67=$66+16; //@line 137 "_functoolsmodule.c"
        var $68=HEAP[$67]; //@line 137 "_functoolsmodule.c"
        var $69=($68)==0; //@line 137 "_functoolsmodule.c"
        if ($69) { __label__ = 12; break; } else { __label__ = 16; break; } //@line 137 "_functoolsmodule.c"
      case 12: // $bb11
        var $70=$pto; //@line 138 "_functoolsmodule.c"
        var $71=$70; //@line 138 "_functoolsmodule.c"
        var $72=$71; //@line 138 "_functoolsmodule.c"
        var $73=HEAP[$72]; //@line 138 "_functoolsmodule.c"
        var $74=($73) - 1; //@line 138 "_functoolsmodule.c"
        var $75=$71; //@line 138 "_functoolsmodule.c"
        HEAP[$75]=$74; //@line 138 "_functoolsmodule.c"
        var $76=$71; //@line 138 "_functoolsmodule.c"
        var $77=HEAP[$76]; //@line 138 "_functoolsmodule.c"
        var $78=($77)==0; //@line 138 "_functoolsmodule.c"
        if ($78) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 138 "_functoolsmodule.c"
      case 13: // $bb12
        var $79=$pto; //@line 138 "_functoolsmodule.c"
        var $80=$79; //@line 138 "_functoolsmodule.c"
        var $81=$80+4; //@line 138 "_functoolsmodule.c"
        var $82=HEAP[$81]; //@line 138 "_functoolsmodule.c"
        var $83=$82+24; //@line 138 "_functoolsmodule.c"
        var $84=HEAP[$83]; //@line 138 "_functoolsmodule.c"
        var $85=$pto; //@line 138 "_functoolsmodule.c"
        var $86=$85; //@line 138 "_functoolsmodule.c"
        FUNCTION_TABLE[$84]($86); //@line 138 "_functoolsmodule.c"
        __label__ = 14; break; //@line 138 "_functoolsmodule.c"
      case 14: // $bb13
        $0=0; //@line 139 "_functoolsmodule.c"
        __label__ = 17; break; //@line 139 "_functoolsmodule.c"
      case 15: // $bb15
        var $87=$pto; //@line 142 "_functoolsmodule.c"
        var $88=$87+16; //@line 142 "_functoolsmodule.c"
        HEAP[$88]=__Py_NoneStruct; //@line 142 "_functoolsmodule.c"
        var $89=HEAP[__Py_NoneStruct]; //@line 143 "_functoolsmodule.c"
        var $90=($89) + 1; //@line 143 "_functoolsmodule.c"
        HEAP[__Py_NoneStruct]=$90; //@line 143 "_functoolsmodule.c"
        __label__ = 16; break; //@line 143 "_functoolsmodule.c"
      case 16: // $bb16
        var $91=$pto; //@line 146 "_functoolsmodule.c"
        var $92=$91+24; //@line 146 "_functoolsmodule.c"
        HEAP[$92]=0; //@line 146 "_functoolsmodule.c"
        var $93=$pto; //@line 147 "_functoolsmodule.c"
        var $94=$93+20; //@line 147 "_functoolsmodule.c"
        HEAP[$94]=0; //@line 147 "_functoolsmodule.c"
        var $95=$pto; //@line 149 "_functoolsmodule.c"
        var $96=$95; //@line 149 "_functoolsmodule.c"
        $0=$96; //@line 149 "_functoolsmodule.c"
        __label__ = 17; break; //@line 149 "_functoolsmodule.c"
      case 17: // $bb17
        var $97=$0; //@line 112 "_functoolsmodule.c"
        $retval=$97; //@line 112 "_functoolsmodule.c"
        var $retval18=$retval; //@line 112 "_functoolsmodule.c"
        ;
        return $retval18; //@line 112 "_functoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _partial_dealloc($pto) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pto_addr;
        $pto_addr=$pto;
        var $0=$pto_addr; //@line 155 "_functoolsmodule.c"
        var $1=$0; //@line 155 "_functoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 155 "_functoolsmodule.c"
        var $2=$pto_addr; //@line 156 "_functoolsmodule.c"
        var $3=$2+24; //@line 156 "_functoolsmodule.c"
        var $4=HEAP[$3]; //@line 156 "_functoolsmodule.c"
        var $5=($4)!=0; //@line 156 "_functoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 156 "_functoolsmodule.c"
      case 1: // $bb
        var $6=$pto_addr; //@line 157 "_functoolsmodule.c"
        var $7=$6; //@line 157 "_functoolsmodule.c"
        _PyObject_ClearWeakRefs($7); //@line 157 "_functoolsmodule.c"
        __label__ = 2; break; //@line 157 "_functoolsmodule.c"
      case 2: // $bb1
        var $8=$pto_addr; //@line 158 "_functoolsmodule.c"
        var $9=$8+8; //@line 158 "_functoolsmodule.c"
        var $10=HEAP[$9]; //@line 158 "_functoolsmodule.c"
        var $11=($10)!=0; //@line 158 "_functoolsmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 158 "_functoolsmodule.c"
      case 3: // $bb2
        var $12=$pto_addr; //@line 158 "_functoolsmodule.c"
        var $13=$12+8; //@line 158 "_functoolsmodule.c"
        var $14=HEAP[$13]; //@line 158 "_functoolsmodule.c"
        var $15=$14; //@line 158 "_functoolsmodule.c"
        var $16=HEAP[$15]; //@line 158 "_functoolsmodule.c"
        var $17=($16) - 1; //@line 158 "_functoolsmodule.c"
        var $18=$14; //@line 158 "_functoolsmodule.c"
        HEAP[$18]=$17; //@line 158 "_functoolsmodule.c"
        var $19=$14; //@line 158 "_functoolsmodule.c"
        var $20=HEAP[$19]; //@line 158 "_functoolsmodule.c"
        var $21=($20)==0; //@line 158 "_functoolsmodule.c"
        if ($21) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 158 "_functoolsmodule.c"
      case 4: // $bb3
        var $22=$pto_addr; //@line 158 "_functoolsmodule.c"
        var $23=$22+8; //@line 158 "_functoolsmodule.c"
        var $24=HEAP[$23]; //@line 158 "_functoolsmodule.c"
        var $25=$24+4; //@line 158 "_functoolsmodule.c"
        var $26=HEAP[$25]; //@line 158 "_functoolsmodule.c"
        var $27=$26+24; //@line 158 "_functoolsmodule.c"
        var $28=HEAP[$27]; //@line 158 "_functoolsmodule.c"
        var $29=$pto_addr; //@line 158 "_functoolsmodule.c"
        var $30=$29+8; //@line 158 "_functoolsmodule.c"
        var $31=HEAP[$30]; //@line 158 "_functoolsmodule.c"
        FUNCTION_TABLE[$28]($31); //@line 158 "_functoolsmodule.c"
        __label__ = 5; break; //@line 158 "_functoolsmodule.c"
      case 5: // $bb4
        var $32=$pto_addr; //@line 159 "_functoolsmodule.c"
        var $33=$32+12; //@line 159 "_functoolsmodule.c"
        var $34=HEAP[$33]; //@line 159 "_functoolsmodule.c"
        var $35=($34)!=0; //@line 159 "_functoolsmodule.c"
        if ($35) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 159 "_functoolsmodule.c"
      case 6: // $bb5
        var $36=$pto_addr; //@line 159 "_functoolsmodule.c"
        var $37=$36+12; //@line 159 "_functoolsmodule.c"
        var $38=HEAP[$37]; //@line 159 "_functoolsmodule.c"
        var $39=$38; //@line 159 "_functoolsmodule.c"
        var $40=HEAP[$39]; //@line 159 "_functoolsmodule.c"
        var $41=($40) - 1; //@line 159 "_functoolsmodule.c"
        var $42=$38; //@line 159 "_functoolsmodule.c"
        HEAP[$42]=$41; //@line 159 "_functoolsmodule.c"
        var $43=$38; //@line 159 "_functoolsmodule.c"
        var $44=HEAP[$43]; //@line 159 "_functoolsmodule.c"
        var $45=($44)==0; //@line 159 "_functoolsmodule.c"
        if ($45) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 159 "_functoolsmodule.c"
      case 7: // $bb6
        var $46=$pto_addr; //@line 159 "_functoolsmodule.c"
        var $47=$46+12; //@line 159 "_functoolsmodule.c"
        var $48=HEAP[$47]; //@line 159 "_functoolsmodule.c"
        var $49=$48+4; //@line 159 "_functoolsmodule.c"
        var $50=HEAP[$49]; //@line 159 "_functoolsmodule.c"
        var $51=$50+24; //@line 159 "_functoolsmodule.c"
        var $52=HEAP[$51]; //@line 159 "_functoolsmodule.c"
        var $53=$pto_addr; //@line 159 "_functoolsmodule.c"
        var $54=$53+12; //@line 159 "_functoolsmodule.c"
        var $55=HEAP[$54]; //@line 159 "_functoolsmodule.c"
        FUNCTION_TABLE[$52]($55); //@line 159 "_functoolsmodule.c"
        __label__ = 8; break; //@line 159 "_functoolsmodule.c"
      case 8: // $bb7
        var $56=$pto_addr; //@line 160 "_functoolsmodule.c"
        var $57=$56+16; //@line 160 "_functoolsmodule.c"
        var $58=HEAP[$57]; //@line 160 "_functoolsmodule.c"
        var $59=($58)!=0; //@line 160 "_functoolsmodule.c"
        if ($59) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 160 "_functoolsmodule.c"
      case 9: // $bb8
        var $60=$pto_addr; //@line 160 "_functoolsmodule.c"
        var $61=$60+16; //@line 160 "_functoolsmodule.c"
        var $62=HEAP[$61]; //@line 160 "_functoolsmodule.c"
        var $63=$62; //@line 160 "_functoolsmodule.c"
        var $64=HEAP[$63]; //@line 160 "_functoolsmodule.c"
        var $65=($64) - 1; //@line 160 "_functoolsmodule.c"
        var $66=$62; //@line 160 "_functoolsmodule.c"
        HEAP[$66]=$65; //@line 160 "_functoolsmodule.c"
        var $67=$62; //@line 160 "_functoolsmodule.c"
        var $68=HEAP[$67]; //@line 160 "_functoolsmodule.c"
        var $69=($68)==0; //@line 160 "_functoolsmodule.c"
        if ($69) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 160 "_functoolsmodule.c"
      case 10: // $bb9
        var $70=$pto_addr; //@line 160 "_functoolsmodule.c"
        var $71=$70+16; //@line 160 "_functoolsmodule.c"
        var $72=HEAP[$71]; //@line 160 "_functoolsmodule.c"
        var $73=$72+4; //@line 160 "_functoolsmodule.c"
        var $74=HEAP[$73]; //@line 160 "_functoolsmodule.c"
        var $75=$74+24; //@line 160 "_functoolsmodule.c"
        var $76=HEAP[$75]; //@line 160 "_functoolsmodule.c"
        var $77=$pto_addr; //@line 160 "_functoolsmodule.c"
        var $78=$77+16; //@line 160 "_functoolsmodule.c"
        var $79=HEAP[$78]; //@line 160 "_functoolsmodule.c"
        FUNCTION_TABLE[$76]($79); //@line 160 "_functoolsmodule.c"
        __label__ = 11; break; //@line 160 "_functoolsmodule.c"
      case 11: // $bb10
        var $80=$pto_addr; //@line 161 "_functoolsmodule.c"
        var $81=$80+20; //@line 161 "_functoolsmodule.c"
        var $82=HEAP[$81]; //@line 161 "_functoolsmodule.c"
        var $83=($82)!=0; //@line 161 "_functoolsmodule.c"
        if ($83) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 161 "_functoolsmodule.c"
      case 12: // $bb11
        var $84=$pto_addr; //@line 161 "_functoolsmodule.c"
        var $85=$84+20; //@line 161 "_functoolsmodule.c"
        var $86=HEAP[$85]; //@line 161 "_functoolsmodule.c"
        var $87=$86; //@line 161 "_functoolsmodule.c"
        var $88=HEAP[$87]; //@line 161 "_functoolsmodule.c"
        var $89=($88) - 1; //@line 161 "_functoolsmodule.c"
        var $90=$86; //@line 161 "_functoolsmodule.c"
        HEAP[$90]=$89; //@line 161 "_functoolsmodule.c"
        var $91=$86; //@line 161 "_functoolsmodule.c"
        var $92=HEAP[$91]; //@line 161 "_functoolsmodule.c"
        var $93=($92)==0; //@line 161 "_functoolsmodule.c"
        if ($93) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 161 "_functoolsmodule.c"
      case 13: // $bb12
        var $94=$pto_addr; //@line 161 "_functoolsmodule.c"
        var $95=$94+20; //@line 161 "_functoolsmodule.c"
        var $96=HEAP[$95]; //@line 161 "_functoolsmodule.c"
        var $97=$96+4; //@line 161 "_functoolsmodule.c"
        var $98=HEAP[$97]; //@line 161 "_functoolsmodule.c"
        var $99=$98+24; //@line 161 "_functoolsmodule.c"
        var $100=HEAP[$99]; //@line 161 "_functoolsmodule.c"
        var $101=$pto_addr; //@line 161 "_functoolsmodule.c"
        var $102=$101+20; //@line 161 "_functoolsmodule.c"
        var $103=HEAP[$102]; //@line 161 "_functoolsmodule.c"
        FUNCTION_TABLE[$100]($103); //@line 161 "_functoolsmodule.c"
        __label__ = 14; break; //@line 161 "_functoolsmodule.c"
      case 14: // $bb13
        var $104=$pto_addr; //@line 162 "_functoolsmodule.c"
        var $105=$104; //@line 162 "_functoolsmodule.c"
        var $106=$105+4; //@line 162 "_functoolsmodule.c"
        var $107=HEAP[$106]; //@line 162 "_functoolsmodule.c"
        var $108=$107+160; //@line 162 "_functoolsmodule.c"
        var $109=HEAP[$108]; //@line 162 "_functoolsmodule.c"
        var $110=$pto_addr; //@line 162 "_functoolsmodule.c"
        var $111=$110; //@line 162 "_functoolsmodule.c"
        FUNCTION_TABLE[$109]($111); //@line 162 "_functoolsmodule.c"
        ;
        return; //@line 163 "_functoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _partial_call($pto, $args, $kw) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pto_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $ret;
        var $argappl;
        var $kwappl;
        $pto_addr=$pto;
        $args_addr=$args;
        $kw_addr=$kw;
        $argappl=0; //@line 169 "_functoolsmodule.c"
        $kwappl=0; //@line 169 "_functoolsmodule.c"
        var $1=$pto_addr; //@line 171 "_functoolsmodule.c"
        var $2=$1+8; //@line 171 "_functoolsmodule.c"
        var $3=HEAP[$2]; //@line 171 "_functoolsmodule.c"
        var $4=_PyCallable_Check($3); //@line 171 "_functoolsmodule.c"
        var $5=($4)==0; //@line 171 "_functoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 171 "_functoolsmodule.c"
      case 1: // $bb
        ___assert_fail(__str5, __str6, 171, ___PRETTY_FUNCTION___8588); //@line 171 "_functoolsmodule.c"
        throw "Reached an unreachable!" //@line 171 "_functoolsmodule.c"
      case 2: // $bb1
        var $6=$pto_addr; //@line 172 "_functoolsmodule.c"
        var $7=$6+12; //@line 172 "_functoolsmodule.c"
        var $8=HEAP[$7]; //@line 172 "_functoolsmodule.c"
        var $9=$8+4; //@line 172 "_functoolsmodule.c"
        var $10=HEAP[$9]; //@line 172 "_functoolsmodule.c"
        var $11=$10+84; //@line 172 "_functoolsmodule.c"
        var $12=HEAP[$11]; //@line 172 "_functoolsmodule.c"
        var $13=($12) & 67108864; //@line 172 "_functoolsmodule.c"
        var $14=($13)==0; //@line 172 "_functoolsmodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 172 "_functoolsmodule.c"
      case 3: // $bb2
        ___assert_fail(__str7, __str6, 172, ___PRETTY_FUNCTION___8588); //@line 172 "_functoolsmodule.c"
        throw "Reached an unreachable!" //@line 172 "_functoolsmodule.c"
      case 4: // $bb3
        var $15=$pto_addr; //@line 173 "_functoolsmodule.c"
        var $16=$15+16; //@line 173 "_functoolsmodule.c"
        var $17=HEAP[$16]; //@line 173 "_functoolsmodule.c"
        var $18=($17)!=(__Py_NoneStruct); //@line 173 "_functoolsmodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 173 "_functoolsmodule.c"
      case 5: // $bb4
        var $19=$pto_addr; //@line 173 "_functoolsmodule.c"
        var $20=$19+16; //@line 173 "_functoolsmodule.c"
        var $21=HEAP[$20]; //@line 173 "_functoolsmodule.c"
        var $22=$21+4; //@line 173 "_functoolsmodule.c"
        var $23=HEAP[$22]; //@line 173 "_functoolsmodule.c"
        var $24=$23+84; //@line 173 "_functoolsmodule.c"
        var $25=HEAP[$24]; //@line 173 "_functoolsmodule.c"
        var $26=($25) & 536870912; //@line 173 "_functoolsmodule.c"
        var $27=($26)==0; //@line 173 "_functoolsmodule.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 173 "_functoolsmodule.c"
      case 6: // $bb5
        ___assert_fail(__str8, __str6, 173, ___PRETTY_FUNCTION___8588); //@line 173 "_functoolsmodule.c"
        throw "Reached an unreachable!" //@line 173 "_functoolsmodule.c"
      case 7: // $bb6
        var $28=$pto_addr; //@line 175 "_functoolsmodule.c"
        var $29=$28+12; //@line 175 "_functoolsmodule.c"
        var $30=HEAP[$29]; //@line 175 "_functoolsmodule.c"
        var $31=$30; //@line 175 "_functoolsmodule.c"
        var $32=$31+8; //@line 175 "_functoolsmodule.c"
        var $33=HEAP[$32]; //@line 175 "_functoolsmodule.c"
        var $34=($33)==0; //@line 175 "_functoolsmodule.c"
        var $35=$args_addr; //@line 176 "_functoolsmodule.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 175 "_functoolsmodule.c"
      case 8: // $bb7
        $argappl=$35; //@line 176 "_functoolsmodule.c"
        var $36=$args_addr; //@line 177 "_functoolsmodule.c"
        var $37=$36; //@line 177 "_functoolsmodule.c"
        var $38=HEAP[$37]; //@line 177 "_functoolsmodule.c"
        var $39=($38) + 1; //@line 177 "_functoolsmodule.c"
        var $40=$args_addr; //@line 177 "_functoolsmodule.c"
        var $41=$40; //@line 177 "_functoolsmodule.c"
        HEAP[$41]=$39; //@line 177 "_functoolsmodule.c"
        __label__ = 13; break; //@line 177 "_functoolsmodule.c"
      case 9: // $bb8
        var $42=$35; //@line 178 "_functoolsmodule.c"
        var $43=$42+8; //@line 178 "_functoolsmodule.c"
        var $44=HEAP[$43]; //@line 178 "_functoolsmodule.c"
        var $45=($44)==0; //@line 178 "_functoolsmodule.c"
        var $46=$pto_addr; //@line 179 "_functoolsmodule.c"
        var $47=$46+12; //@line 179 "_functoolsmodule.c"
        var $48=HEAP[$47]; //@line 179 "_functoolsmodule.c"
        if ($45) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 178 "_functoolsmodule.c"
      case 10: // $bb9
        $argappl=$48; //@line 179 "_functoolsmodule.c"
        var $49=$pto_addr; //@line 180 "_functoolsmodule.c"
        var $50=$49+12; //@line 180 "_functoolsmodule.c"
        var $51=HEAP[$50]; //@line 180 "_functoolsmodule.c"
        var $52=$51; //@line 180 "_functoolsmodule.c"
        var $53=HEAP[$52]; //@line 180 "_functoolsmodule.c"
        var $54=($53) + 1; //@line 180 "_functoolsmodule.c"
        var $55=$51; //@line 180 "_functoolsmodule.c"
        HEAP[$55]=$54; //@line 180 "_functoolsmodule.c"
        __label__ = 13; break; //@line 180 "_functoolsmodule.c"
      case 11: // $bb10
        var $56=$args_addr; //@line 182 "_functoolsmodule.c"
        var $57=_PySequence_Concat($48, $56); //@line 182 "_functoolsmodule.c"
        $argappl=$57; //@line 182 "_functoolsmodule.c"
        var $58=$argappl; //@line 183 "_functoolsmodule.c"
        var $59=($58)==0; //@line 183 "_functoolsmodule.c"
        if ($59) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 183 "_functoolsmodule.c"
      case 12: // $bb11
        $0=0; //@line 184 "_functoolsmodule.c"
        __label__ = 33; break; //@line 184 "_functoolsmodule.c"
      case 13: // $bb12
        var $60=$pto_addr; //@line 187 "_functoolsmodule.c"
        var $61=$60+16; //@line 187 "_functoolsmodule.c"
        var $62=HEAP[$61]; //@line 187 "_functoolsmodule.c"
        var $63=($62)==(__Py_NoneStruct); //@line 187 "_functoolsmodule.c"
        if ($63) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 187 "_functoolsmodule.c"
      case 14: // $bb13
        var $64=$kw_addr; //@line 188 "_functoolsmodule.c"
        $kwappl=$64; //@line 188 "_functoolsmodule.c"
        var $65=$kw_addr; //@line 189 "_functoolsmodule.c"
        var $66=($65)!=0; //@line 189 "_functoolsmodule.c"
        if ($66) { __label__ = 15; break; } else { __label__ = 27; break; } //@line 189 "_functoolsmodule.c"
      case 15: // $bb14
        var $67=$kw_addr; //@line 189 "_functoolsmodule.c"
        var $68=$67; //@line 189 "_functoolsmodule.c"
        var $69=HEAP[$68]; //@line 189 "_functoolsmodule.c"
        var $70=($69) + 1; //@line 189 "_functoolsmodule.c"
        var $71=$kw_addr; //@line 189 "_functoolsmodule.c"
        var $72=$71; //@line 189 "_functoolsmodule.c"
        HEAP[$72]=$70; //@line 189 "_functoolsmodule.c"
        __label__ = 27; break; //@line 189 "_functoolsmodule.c"
      case 16: // $bb16
        var $73=$pto_addr; //@line 191 "_functoolsmodule.c"
        var $74=$73+16; //@line 191 "_functoolsmodule.c"
        var $75=HEAP[$74]; //@line 191 "_functoolsmodule.c"
        var $76=_PyDict_Copy($75); //@line 191 "_functoolsmodule.c"
        $kwappl=$76; //@line 191 "_functoolsmodule.c"
        var $77=$kwappl; //@line 192 "_functoolsmodule.c"
        var $78=($77)==0; //@line 192 "_functoolsmodule.c"
        if ($78) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 192 "_functoolsmodule.c"
      case 17: // $bb17
        var $79=$argappl; //@line 193 "_functoolsmodule.c"
        var $80=$79; //@line 193 "_functoolsmodule.c"
        var $81=HEAP[$80]; //@line 193 "_functoolsmodule.c"
        var $82=($81) - 1; //@line 193 "_functoolsmodule.c"
        var $83=$argappl; //@line 193 "_functoolsmodule.c"
        var $84=$83; //@line 193 "_functoolsmodule.c"
        HEAP[$84]=$82; //@line 193 "_functoolsmodule.c"
        var $85=$argappl; //@line 193 "_functoolsmodule.c"
        var $86=$85; //@line 193 "_functoolsmodule.c"
        var $87=HEAP[$86]; //@line 193 "_functoolsmodule.c"
        var $88=($87)==0; //@line 193 "_functoolsmodule.c"
        if ($88) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 193 "_functoolsmodule.c"
      case 18: // $bb18
        var $89=$argappl; //@line 193 "_functoolsmodule.c"
        var $90=$89+4; //@line 193 "_functoolsmodule.c"
        var $91=HEAP[$90]; //@line 193 "_functoolsmodule.c"
        var $92=$91+24; //@line 193 "_functoolsmodule.c"
        var $93=HEAP[$92]; //@line 193 "_functoolsmodule.c"
        var $94=$argappl; //@line 193 "_functoolsmodule.c"
        FUNCTION_TABLE[$93]($94); //@line 193 "_functoolsmodule.c"
        __label__ = 19; break; //@line 193 "_functoolsmodule.c"
      case 19: // $bb19
        $0=0; //@line 194 "_functoolsmodule.c"
        __label__ = 33; break; //@line 194 "_functoolsmodule.c"
      case 20: // $bb20
        var $95=$kw_addr; //@line 196 "_functoolsmodule.c"
        var $96=($95)!=0; //@line 196 "_functoolsmodule.c"
        if ($96) { __label__ = 21; break; } else { __label__ = 27; break; } //@line 196 "_functoolsmodule.c"
      case 21: // $bb21
        var $97=$kwappl; //@line 197 "_functoolsmodule.c"
        var $98=$kw_addr; //@line 197 "_functoolsmodule.c"
        var $99=_PyDict_Merge($97, $98, 1); //@line 197 "_functoolsmodule.c"
        var $100=($99)!=0; //@line 197 "_functoolsmodule.c"
        if ($100) { __label__ = 22; break; } else { __label__ = 27; break; } //@line 197 "_functoolsmodule.c"
      case 22: // $bb22
        var $101=$argappl; //@line 198 "_functoolsmodule.c"
        var $102=$101; //@line 198 "_functoolsmodule.c"
        var $103=HEAP[$102]; //@line 198 "_functoolsmodule.c"
        var $104=($103) - 1; //@line 198 "_functoolsmodule.c"
        var $105=$argappl; //@line 198 "_functoolsmodule.c"
        var $106=$105; //@line 198 "_functoolsmodule.c"
        HEAP[$106]=$104; //@line 198 "_functoolsmodule.c"
        var $107=$argappl; //@line 198 "_functoolsmodule.c"
        var $108=$107; //@line 198 "_functoolsmodule.c"
        var $109=HEAP[$108]; //@line 198 "_functoolsmodule.c"
        var $110=($109)==0; //@line 198 "_functoolsmodule.c"
        if ($110) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 198 "_functoolsmodule.c"
      case 23: // $bb23
        var $111=$argappl; //@line 198 "_functoolsmodule.c"
        var $112=$111+4; //@line 198 "_functoolsmodule.c"
        var $113=HEAP[$112]; //@line 198 "_functoolsmodule.c"
        var $114=$113+24; //@line 198 "_functoolsmodule.c"
        var $115=HEAP[$114]; //@line 198 "_functoolsmodule.c"
        var $116=$argappl; //@line 198 "_functoolsmodule.c"
        FUNCTION_TABLE[$115]($116); //@line 198 "_functoolsmodule.c"
        __label__ = 24; break; //@line 198 "_functoolsmodule.c"
      case 24: // $bb24
        var $117=$kwappl; //@line 199 "_functoolsmodule.c"
        var $118=$117; //@line 199 "_functoolsmodule.c"
        var $119=HEAP[$118]; //@line 199 "_functoolsmodule.c"
        var $120=($119) - 1; //@line 199 "_functoolsmodule.c"
        var $121=$kwappl; //@line 199 "_functoolsmodule.c"
        var $122=$121; //@line 199 "_functoolsmodule.c"
        HEAP[$122]=$120; //@line 199 "_functoolsmodule.c"
        var $123=$kwappl; //@line 199 "_functoolsmodule.c"
        var $124=$123; //@line 199 "_functoolsmodule.c"
        var $125=HEAP[$124]; //@line 199 "_functoolsmodule.c"
        var $126=($125)==0; //@line 199 "_functoolsmodule.c"
        if ($126) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 199 "_functoolsmodule.c"
      case 25: // $bb25
        var $127=$kwappl; //@line 199 "_functoolsmodule.c"
        var $128=$127+4; //@line 199 "_functoolsmodule.c"
        var $129=HEAP[$128]; //@line 199 "_functoolsmodule.c"
        var $130=$129+24; //@line 199 "_functoolsmodule.c"
        var $131=HEAP[$130]; //@line 199 "_functoolsmodule.c"
        var $132=$kwappl; //@line 199 "_functoolsmodule.c"
        FUNCTION_TABLE[$131]($132); //@line 199 "_functoolsmodule.c"
        __label__ = 26; break; //@line 199 "_functoolsmodule.c"
      case 26: // $bb26
        $0=0; //@line 200 "_functoolsmodule.c"
        __label__ = 33; break; //@line 200 "_functoolsmodule.c"
      case 27: // $bb27
        var $133=$pto_addr; //@line 205 "_functoolsmodule.c"
        var $134=$133+8; //@line 205 "_functoolsmodule.c"
        var $135=HEAP[$134]; //@line 205 "_functoolsmodule.c"
        var $136=$argappl; //@line 205 "_functoolsmodule.c"
        var $137=$kwappl; //@line 205 "_functoolsmodule.c"
        var $138=_PyObject_Call($135, $136, $137); //@line 205 "_functoolsmodule.c"
        $ret=$138; //@line 205 "_functoolsmodule.c"
        var $139=$argappl; //@line 206 "_functoolsmodule.c"
        var $140=$139; //@line 206 "_functoolsmodule.c"
        var $141=HEAP[$140]; //@line 206 "_functoolsmodule.c"
        var $142=($141) - 1; //@line 206 "_functoolsmodule.c"
        var $143=$argappl; //@line 206 "_functoolsmodule.c"
        var $144=$143; //@line 206 "_functoolsmodule.c"
        HEAP[$144]=$142; //@line 206 "_functoolsmodule.c"
        var $145=$argappl; //@line 206 "_functoolsmodule.c"
        var $146=$145; //@line 206 "_functoolsmodule.c"
        var $147=HEAP[$146]; //@line 206 "_functoolsmodule.c"
        var $148=($147)==0; //@line 206 "_functoolsmodule.c"
        if ($148) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 206 "_functoolsmodule.c"
      case 28: // $bb28
        var $149=$argappl; //@line 206 "_functoolsmodule.c"
        var $150=$149+4; //@line 206 "_functoolsmodule.c"
        var $151=HEAP[$150]; //@line 206 "_functoolsmodule.c"
        var $152=$151+24; //@line 206 "_functoolsmodule.c"
        var $153=HEAP[$152]; //@line 206 "_functoolsmodule.c"
        var $154=$argappl; //@line 206 "_functoolsmodule.c"
        FUNCTION_TABLE[$153]($154); //@line 206 "_functoolsmodule.c"
        __label__ = 29; break; //@line 206 "_functoolsmodule.c"
      case 29: // $bb29
        var $155=$kwappl; //@line 207 "_functoolsmodule.c"
        var $156=($155)!=0; //@line 207 "_functoolsmodule.c"
        if ($156) { __label__ = 30; break; } else { __label__ = 32; break; } //@line 207 "_functoolsmodule.c"
      case 30: // $bb30
        var $157=$kwappl; //@line 207 "_functoolsmodule.c"
        var $158=$157; //@line 207 "_functoolsmodule.c"
        var $159=HEAP[$158]; //@line 207 "_functoolsmodule.c"
        var $160=($159) - 1; //@line 207 "_functoolsmodule.c"
        var $161=$kwappl; //@line 207 "_functoolsmodule.c"
        var $162=$161; //@line 207 "_functoolsmodule.c"
        HEAP[$162]=$160; //@line 207 "_functoolsmodule.c"
        var $163=$kwappl; //@line 207 "_functoolsmodule.c"
        var $164=$163; //@line 207 "_functoolsmodule.c"
        var $165=HEAP[$164]; //@line 207 "_functoolsmodule.c"
        var $166=($165)==0; //@line 207 "_functoolsmodule.c"
        if ($166) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 207 "_functoolsmodule.c"
      case 31: // $bb31
        var $167=$kwappl; //@line 207 "_functoolsmodule.c"
        var $168=$167+4; //@line 207 "_functoolsmodule.c"
        var $169=HEAP[$168]; //@line 207 "_functoolsmodule.c"
        var $170=$169+24; //@line 207 "_functoolsmodule.c"
        var $171=HEAP[$170]; //@line 207 "_functoolsmodule.c"
        var $172=$kwappl; //@line 207 "_functoolsmodule.c"
        FUNCTION_TABLE[$171]($172); //@line 207 "_functoolsmodule.c"
        __label__ = 32; break; //@line 207 "_functoolsmodule.c"
      case 32: // $bb32
        var $173=$ret; //@line 208 "_functoolsmodule.c"
        $0=$173; //@line 208 "_functoolsmodule.c"
        __label__ = 33; break; //@line 208 "_functoolsmodule.c"
      case 33: // $bb33
        var $174=$0; //@line 184 "_functoolsmodule.c"
        $retval=$174; //@line 184 "_functoolsmodule.c"
        var $retval34=$retval; //@line 184 "_functoolsmodule.c"
        ;
        return $retval34; //@line 184 "_functoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _partial_traverse($pto, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pto_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        var $vret8;
        var $vret12;
        $pto_addr=$pto;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$pto_addr; //@line 214 "_functoolsmodule.c"
        var $2=$1+8; //@line 214 "_functoolsmodule.c"
        var $3=HEAP[$2]; //@line 214 "_functoolsmodule.c"
        var $4=($3)!=0; //@line 214 "_functoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 214 "_functoolsmodule.c"
      case 1: // $bb
        var $5=$pto_addr; //@line 214 "_functoolsmodule.c"
        var $6=$5+8; //@line 214 "_functoolsmodule.c"
        var $7=HEAP[$6]; //@line 214 "_functoolsmodule.c"
        var $8=$visit_addr; //@line 214 "_functoolsmodule.c"
        var $9=$arg_addr; //@line 214 "_functoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 214 "_functoolsmodule.c"
        $vret=$10; //@line 214 "_functoolsmodule.c"
        var $11=$vret; //@line 214 "_functoolsmodule.c"
        var $12=($11)!=0; //@line 214 "_functoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 214 "_functoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 214 "_functoolsmodule.c"
        $0=$13; //@line 214 "_functoolsmodule.c"
        __label__ = 13; break; //@line 214 "_functoolsmodule.c"
      case 3: // $bb2
        var $14=$pto_addr; //@line 215 "_functoolsmodule.c"
        var $15=$14+12; //@line 215 "_functoolsmodule.c"
        var $16=HEAP[$15]; //@line 215 "_functoolsmodule.c"
        var $17=($16)!=0; //@line 215 "_functoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 215 "_functoolsmodule.c"
      case 4: // $bb3
        var $18=$pto_addr; //@line 215 "_functoolsmodule.c"
        var $19=$18+12; //@line 215 "_functoolsmodule.c"
        var $20=HEAP[$19]; //@line 215 "_functoolsmodule.c"
        var $21=$visit_addr; //@line 215 "_functoolsmodule.c"
        var $22=$arg_addr; //@line 215 "_functoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 215 "_functoolsmodule.c"
        $vret4=$23; //@line 215 "_functoolsmodule.c"
        var $24=$vret4; //@line 215 "_functoolsmodule.c"
        var $25=($24)!=0; //@line 215 "_functoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 215 "_functoolsmodule.c"
      case 5: // $bb5
        var $26=$vret4; //@line 215 "_functoolsmodule.c"
        $0=$26; //@line 215 "_functoolsmodule.c"
        __label__ = 13; break; //@line 215 "_functoolsmodule.c"
      case 6: // $bb6
        var $27=$pto_addr; //@line 216 "_functoolsmodule.c"
        var $28=$27+16; //@line 216 "_functoolsmodule.c"
        var $29=HEAP[$28]; //@line 216 "_functoolsmodule.c"
        var $30=($29)!=0; //@line 216 "_functoolsmodule.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 216 "_functoolsmodule.c"
      case 7: // $bb7
        var $31=$pto_addr; //@line 216 "_functoolsmodule.c"
        var $32=$31+16; //@line 216 "_functoolsmodule.c"
        var $33=HEAP[$32]; //@line 216 "_functoolsmodule.c"
        var $34=$visit_addr; //@line 216 "_functoolsmodule.c"
        var $35=$arg_addr; //@line 216 "_functoolsmodule.c"
        var $36=FUNCTION_TABLE[$34]($33, $35); //@line 216 "_functoolsmodule.c"
        $vret8=$36; //@line 216 "_functoolsmodule.c"
        var $37=$vret8; //@line 216 "_functoolsmodule.c"
        var $38=($37)!=0; //@line 216 "_functoolsmodule.c"
        if ($38) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 216 "_functoolsmodule.c"
      case 8: // $bb9
        var $39=$vret8; //@line 216 "_functoolsmodule.c"
        $0=$39; //@line 216 "_functoolsmodule.c"
        __label__ = 13; break; //@line 216 "_functoolsmodule.c"
      case 9: // $bb10
        var $40=$pto_addr; //@line 217 "_functoolsmodule.c"
        var $41=$40+20; //@line 217 "_functoolsmodule.c"
        var $42=HEAP[$41]; //@line 217 "_functoolsmodule.c"
        var $43=($42)!=0; //@line 217 "_functoolsmodule.c"
        if ($43) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 217 "_functoolsmodule.c"
      case 10: // $bb11
        var $44=$pto_addr; //@line 217 "_functoolsmodule.c"
        var $45=$44+20; //@line 217 "_functoolsmodule.c"
        var $46=HEAP[$45]; //@line 217 "_functoolsmodule.c"
        var $47=$visit_addr; //@line 217 "_functoolsmodule.c"
        var $48=$arg_addr; //@line 217 "_functoolsmodule.c"
        var $49=FUNCTION_TABLE[$47]($46, $48); //@line 217 "_functoolsmodule.c"
        $vret12=$49; //@line 217 "_functoolsmodule.c"
        var $50=$vret12; //@line 217 "_functoolsmodule.c"
        var $51=($50)!=0; //@line 217 "_functoolsmodule.c"
        if ($51) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 217 "_functoolsmodule.c"
      case 11: // $bb13
        var $52=$vret12; //@line 217 "_functoolsmodule.c"
        $0=$52; //@line 217 "_functoolsmodule.c"
        __label__ = 13; break; //@line 217 "_functoolsmodule.c"
      case 12: // $bb14
        $0=0; //@line 218 "_functoolsmodule.c"
        __label__ = 13; break; //@line 218 "_functoolsmodule.c"
      case 13: // $bb15
        var $53=$0; //@line 214 "_functoolsmodule.c"
        $retval=$53; //@line 214 "_functoolsmodule.c"
        var $retval16=$retval; //@line 214 "_functoolsmodule.c"
        ;
        return $retval16; //@line 214 "_functoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _partial_get_dict($pto) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pto_addr;
        var $retval;
        var $0;
        $pto_addr=$pto;
        var $1=$pto_addr; //@line 239 "_functoolsmodule.c"
        var $2=$1+20; //@line 239 "_functoolsmodule.c"
        var $3=HEAP[$2]; //@line 239 "_functoolsmodule.c"
        var $4=($3)==0; //@line 239 "_functoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 239 "_functoolsmodule.c"
      case 1: // $bb
        var $5=_PyDict_New(); //@line 240 "_functoolsmodule.c"
        var $6=$pto_addr; //@line 240 "_functoolsmodule.c"
        var $7=$6+20; //@line 240 "_functoolsmodule.c"
        HEAP[$7]=$5; //@line 240 "_functoolsmodule.c"
        var $8=$pto_addr; //@line 241 "_functoolsmodule.c"
        var $9=$8+20; //@line 241 "_functoolsmodule.c"
        var $10=HEAP[$9]; //@line 241 "_functoolsmodule.c"
        var $11=($10)==0; //@line 241 "_functoolsmodule.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 241 "_functoolsmodule.c"
      case 2: // $bb1
        $0=0; //@line 242 "_functoolsmodule.c"
        __label__ = 4; break; //@line 242 "_functoolsmodule.c"
      case 3: // $bb2
        var $12=$pto_addr; //@line 244 "_functoolsmodule.c"
        var $13=$12+20; //@line 244 "_functoolsmodule.c"
        var $14=HEAP[$13]; //@line 244 "_functoolsmodule.c"
        var $15=$14; //@line 244 "_functoolsmodule.c"
        var $16=HEAP[$15]; //@line 244 "_functoolsmodule.c"
        var $17=($16) + 1; //@line 244 "_functoolsmodule.c"
        var $18=$14; //@line 244 "_functoolsmodule.c"
        HEAP[$18]=$17; //@line 244 "_functoolsmodule.c"
        var $19=$pto_addr; //@line 245 "_functoolsmodule.c"
        var $20=$19+20; //@line 245 "_functoolsmodule.c"
        var $21=HEAP[$20]; //@line 245 "_functoolsmodule.c"
        $0=$21; //@line 245 "_functoolsmodule.c"
        __label__ = 4; break; //@line 245 "_functoolsmodule.c"
      case 4: // $bb3
        var $22=$0; //@line 242 "_functoolsmodule.c"
        $retval=$22; //@line 242 "_functoolsmodule.c"
        var $retval4=$retval; //@line 242 "_functoolsmodule.c"
        ;
        return $retval4; //@line 242 "_functoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _partial_set_dict($pto, $value) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pto_addr;
        var $value_addr;
        var $retval;
        var $0;
        var $tmp;
        $pto_addr=$pto;
        $value_addr=$value;
        var $1=$value_addr; //@line 254 "_functoolsmodule.c"
        var $2=($1)==0; //@line 254 "_functoolsmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 254 "_functoolsmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_TypeError]; //@line 255 "_functoolsmodule.c"
        _PyErr_SetString($3, __str15); //@line 255 "_functoolsmodule.c"
        $0=-1; //@line 257 "_functoolsmodule.c"
        __label__ = 8; break; //@line 257 "_functoolsmodule.c"
      case 2: // $bb1
        var $4=$value_addr; //@line 260 "_functoolsmodule.c"
        var $5=$4+4; //@line 260 "_functoolsmodule.c"
        var $6=HEAP[$5]; //@line 260 "_functoolsmodule.c"
        var $7=$6+84; //@line 260 "_functoolsmodule.c"
        var $8=HEAP[$7]; //@line 260 "_functoolsmodule.c"
        var $9=($8) & 536870912; //@line 260 "_functoolsmodule.c"
        var $10=($9)==0; //@line 260 "_functoolsmodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 260 "_functoolsmodule.c"
      case 3: // $bb2
        var $11=HEAP[_PyExc_TypeError]; //@line 261 "_functoolsmodule.c"
        _PyErr_SetString($11, __str16); //@line 261 "_functoolsmodule.c"
        $0=-1; //@line 263 "_functoolsmodule.c"
        __label__ = 8; break; //@line 263 "_functoolsmodule.c"
      case 4: // $bb3
        var $12=$pto_addr; //@line 265 "_functoolsmodule.c"
        var $13=$12+20; //@line 265 "_functoolsmodule.c"
        var $14=HEAP[$13]; //@line 265 "_functoolsmodule.c"
        $tmp=$14; //@line 265 "_functoolsmodule.c"
        var $15=$value_addr; //@line 266 "_functoolsmodule.c"
        var $16=$15; //@line 266 "_functoolsmodule.c"
        var $17=HEAP[$16]; //@line 266 "_functoolsmodule.c"
        var $18=($17) + 1; //@line 266 "_functoolsmodule.c"
        var $19=$value_addr; //@line 266 "_functoolsmodule.c"
        var $20=$19; //@line 266 "_functoolsmodule.c"
        HEAP[$20]=$18; //@line 266 "_functoolsmodule.c"
        var $21=$pto_addr; //@line 267 "_functoolsmodule.c"
        var $22=$21+20; //@line 267 "_functoolsmodule.c"
        var $23=$value_addr; //@line 267 "_functoolsmodule.c"
        HEAP[$22]=$23; //@line 267 "_functoolsmodule.c"
        var $24=$tmp; //@line 268 "_functoolsmodule.c"
        var $25=($24)!=0; //@line 268 "_functoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 268 "_functoolsmodule.c"
      case 5: // $bb4
        var $26=$tmp; //@line 268 "_functoolsmodule.c"
        var $27=$26; //@line 268 "_functoolsmodule.c"
        var $28=HEAP[$27]; //@line 268 "_functoolsmodule.c"
        var $29=($28) - 1; //@line 268 "_functoolsmodule.c"
        var $30=$tmp; //@line 268 "_functoolsmodule.c"
        var $31=$30; //@line 268 "_functoolsmodule.c"
        HEAP[$31]=$29; //@line 268 "_functoolsmodule.c"
        var $32=$tmp; //@line 268 "_functoolsmodule.c"
        var $33=$32; //@line 268 "_functoolsmodule.c"
        var $34=HEAP[$33]; //@line 268 "_functoolsmodule.c"
        var $35=($34)==0; //@line 268 "_functoolsmodule.c"
        if ($35) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 268 "_functoolsmodule.c"
      case 6: // $bb5
        var $36=$tmp; //@line 268 "_functoolsmodule.c"
        var $37=$36+4; //@line 268 "_functoolsmodule.c"
        var $38=HEAP[$37]; //@line 268 "_functoolsmodule.c"
        var $39=$38+24; //@line 268 "_functoolsmodule.c"
        var $40=HEAP[$39]; //@line 268 "_functoolsmodule.c"
        var $41=$tmp; //@line 268 "_functoolsmodule.c"
        FUNCTION_TABLE[$40]($41); //@line 268 "_functoolsmodule.c"
        __label__ = 7; break; //@line 268 "_functoolsmodule.c"
      case 7: // $bb6
        $0=0; //@line 269 "_functoolsmodule.c"
        __label__ = 8; break; //@line 269 "_functoolsmodule.c"
      case 8: // $bb7
        var $42=$0; //@line 257 "_functoolsmodule.c"
        $retval=$42; //@line 257 "_functoolsmodule.c"
        var $retval8=$retval; //@line 257 "_functoolsmodule.c"
        ;
        return $retval8; //@line 257 "_functoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _partial_reduce($pto, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pto_addr;
        var $unused_addr;
        var $retval;
        var $iftmp_33;
        var $0;
        $pto_addr=$pto;
        $unused_addr=$unused;
        var $1=$pto_addr; //@line 287 "_functoolsmodule.c"
        var $2=$1+20; //@line 287 "_functoolsmodule.c"
        var $3=HEAP[$2]; //@line 287 "_functoolsmodule.c"
        var $4=($3)!=0; //@line 287 "_functoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 287 "_functoolsmodule.c"
      case 1: // $bb
        var $5=$pto_addr; //@line 287 "_functoolsmodule.c"
        var $6=$5+20; //@line 287 "_functoolsmodule.c"
        var $7=HEAP[$6]; //@line 287 "_functoolsmodule.c"
        $iftmp_33=$7; //@line 287 "_functoolsmodule.c"
        __label__ = 3; break; //@line 287 "_functoolsmodule.c"
      case 2: // $bb1
        $iftmp_33=__Py_NoneStruct; //@line 287 "_functoolsmodule.c"
        __label__ = 3; break; //@line 287 "_functoolsmodule.c"
      case 3: // $bb2
        var $8=$pto_addr; //@line 287 "_functoolsmodule.c"
        var $9=$8+16; //@line 287 "_functoolsmodule.c"
        var $10=HEAP[$9]; //@line 287 "_functoolsmodule.c"
        var $11=$pto_addr; //@line 287 "_functoolsmodule.c"
        var $12=$11+12; //@line 287 "_functoolsmodule.c"
        var $13=HEAP[$12]; //@line 287 "_functoolsmodule.c"
        var $14=$pto_addr; //@line 287 "_functoolsmodule.c"
        var $15=$14+8; //@line 287 "_functoolsmodule.c"
        var $16=HEAP[$15]; //@line 287 "_functoolsmodule.c"
        var $17=$pto_addr; //@line 287 "_functoolsmodule.c"
        var $18=$17+8; //@line 287 "_functoolsmodule.c"
        var $19=HEAP[$18]; //@line 287 "_functoolsmodule.c"
        var $20=$pto_addr; //@line 287 "_functoolsmodule.c"
        var $21=$20; //@line 287 "_functoolsmodule.c"
        var $22=$21+4; //@line 287 "_functoolsmodule.c"
        var $23=HEAP[$22]; //@line 287 "_functoolsmodule.c"
        var $24=$iftmp_33; //@line 287 "_functoolsmodule.c"
        var $25=_Py_BuildValue(__str18, allocate([$23,0,0,0,$19,0,0,0,$16,0,0,0,$13,0,0,0,$10,0,0,0,$24,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 287 "_functoolsmodule.c"
        $0=$25; //@line 287 "_functoolsmodule.c"
        var $26=$0; //@line 287 "_functoolsmodule.c"
        $retval=$26; //@line 287 "_functoolsmodule.c"
        var $retval3=$retval; //@line 287 "_functoolsmodule.c"
        ;
        return $retval3; //@line 287 "_functoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _partial_setstate($pto, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pto_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $fn=__stackBase__;
        var $fnargs=__stackBase__+4;
        var $kw=__stackBase__+8;
        var $dict=__stackBase__+12;
        $pto_addr=$pto;
        $args_addr=$args;
        var $1=$args_addr; //@line 296 "_functoolsmodule.c"
        var $2=_PyArg_ParseTuple($1, __str19, allocate([$fn,0,0,0,$fnargs,0,0,0,$kw,0,0,0,$dict,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 296 "_functoolsmodule.c"
        var $3=($2)==0; //@line 296 "_functoolsmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 296 "_functoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 298 "_functoolsmodule.c"
        __label__ = 18; break; //@line 298 "_functoolsmodule.c"
      case 2: // $bb1
        var $4=$pto_addr; //@line 299 "_functoolsmodule.c"
        var $5=$4+8; //@line 299 "_functoolsmodule.c"
        var $6=HEAP[$5]; //@line 299 "_functoolsmodule.c"
        var $7=($6)!=0; //@line 299 "_functoolsmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 299 "_functoolsmodule.c"
      case 3: // $bb2
        var $8=$pto_addr; //@line 299 "_functoolsmodule.c"
        var $9=$8+8; //@line 299 "_functoolsmodule.c"
        var $10=HEAP[$9]; //@line 299 "_functoolsmodule.c"
        var $11=$10; //@line 299 "_functoolsmodule.c"
        var $12=HEAP[$11]; //@line 299 "_functoolsmodule.c"
        var $13=($12) - 1; //@line 299 "_functoolsmodule.c"
        var $14=$10; //@line 299 "_functoolsmodule.c"
        HEAP[$14]=$13; //@line 299 "_functoolsmodule.c"
        var $15=$10; //@line 299 "_functoolsmodule.c"
        var $16=HEAP[$15]; //@line 299 "_functoolsmodule.c"
        var $17=($16)==0; //@line 299 "_functoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 299 "_functoolsmodule.c"
      case 4: // $bb3
        var $18=$pto_addr; //@line 299 "_functoolsmodule.c"
        var $19=$18+8; //@line 299 "_functoolsmodule.c"
        var $20=HEAP[$19]; //@line 299 "_functoolsmodule.c"
        var $21=$20+4; //@line 299 "_functoolsmodule.c"
        var $22=HEAP[$21]; //@line 299 "_functoolsmodule.c"
        var $23=$22+24; //@line 299 "_functoolsmodule.c"
        var $24=HEAP[$23]; //@line 299 "_functoolsmodule.c"
        var $25=$pto_addr; //@line 299 "_functoolsmodule.c"
        var $26=$25+8; //@line 299 "_functoolsmodule.c"
        var $27=HEAP[$26]; //@line 299 "_functoolsmodule.c"
        FUNCTION_TABLE[$24]($27); //@line 299 "_functoolsmodule.c"
        __label__ = 5; break; //@line 299 "_functoolsmodule.c"
      case 5: // $bb4
        var $28=$pto_addr; //@line 300 "_functoolsmodule.c"
        var $29=$28+12; //@line 300 "_functoolsmodule.c"
        var $30=HEAP[$29]; //@line 300 "_functoolsmodule.c"
        var $31=($30)!=0; //@line 300 "_functoolsmodule.c"
        if ($31) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 300 "_functoolsmodule.c"
      case 6: // $bb5
        var $32=$pto_addr; //@line 300 "_functoolsmodule.c"
        var $33=$32+12; //@line 300 "_functoolsmodule.c"
        var $34=HEAP[$33]; //@line 300 "_functoolsmodule.c"
        var $35=$34; //@line 300 "_functoolsmodule.c"
        var $36=HEAP[$35]; //@line 300 "_functoolsmodule.c"
        var $37=($36) - 1; //@line 300 "_functoolsmodule.c"
        var $38=$34; //@line 300 "_functoolsmodule.c"
        HEAP[$38]=$37; //@line 300 "_functoolsmodule.c"
        var $39=$34; //@line 300 "_functoolsmodule.c"
        var $40=HEAP[$39]; //@line 300 "_functoolsmodule.c"
        var $41=($40)==0; //@line 300 "_functoolsmodule.c"
        if ($41) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 300 "_functoolsmodule.c"
      case 7: // $bb6
        var $42=$pto_addr; //@line 300 "_functoolsmodule.c"
        var $43=$42+12; //@line 300 "_functoolsmodule.c"
        var $44=HEAP[$43]; //@line 300 "_functoolsmodule.c"
        var $45=$44+4; //@line 300 "_functoolsmodule.c"
        var $46=HEAP[$45]; //@line 300 "_functoolsmodule.c"
        var $47=$46+24; //@line 300 "_functoolsmodule.c"
        var $48=HEAP[$47]; //@line 300 "_functoolsmodule.c"
        var $49=$pto_addr; //@line 300 "_functoolsmodule.c"
        var $50=$49+12; //@line 300 "_functoolsmodule.c"
        var $51=HEAP[$50]; //@line 300 "_functoolsmodule.c"
        FUNCTION_TABLE[$48]($51); //@line 300 "_functoolsmodule.c"
        __label__ = 8; break; //@line 300 "_functoolsmodule.c"
      case 8: // $bb7
        var $52=$pto_addr; //@line 301 "_functoolsmodule.c"
        var $53=$52+16; //@line 301 "_functoolsmodule.c"
        var $54=HEAP[$53]; //@line 301 "_functoolsmodule.c"
        var $55=($54)!=0; //@line 301 "_functoolsmodule.c"
        if ($55) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 301 "_functoolsmodule.c"
      case 9: // $bb8
        var $56=$pto_addr; //@line 301 "_functoolsmodule.c"
        var $57=$56+16; //@line 301 "_functoolsmodule.c"
        var $58=HEAP[$57]; //@line 301 "_functoolsmodule.c"
        var $59=$58; //@line 301 "_functoolsmodule.c"
        var $60=HEAP[$59]; //@line 301 "_functoolsmodule.c"
        var $61=($60) - 1; //@line 301 "_functoolsmodule.c"
        var $62=$58; //@line 301 "_functoolsmodule.c"
        HEAP[$62]=$61; //@line 301 "_functoolsmodule.c"
        var $63=$58; //@line 301 "_functoolsmodule.c"
        var $64=HEAP[$63]; //@line 301 "_functoolsmodule.c"
        var $65=($64)==0; //@line 301 "_functoolsmodule.c"
        if ($65) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 301 "_functoolsmodule.c"
      case 10: // $bb9
        var $66=$pto_addr; //@line 301 "_functoolsmodule.c"
        var $67=$66+16; //@line 301 "_functoolsmodule.c"
        var $68=HEAP[$67]; //@line 301 "_functoolsmodule.c"
        var $69=$68+4; //@line 301 "_functoolsmodule.c"
        var $70=HEAP[$69]; //@line 301 "_functoolsmodule.c"
        var $71=$70+24; //@line 301 "_functoolsmodule.c"
        var $72=HEAP[$71]; //@line 301 "_functoolsmodule.c"
        var $73=$pto_addr; //@line 301 "_functoolsmodule.c"
        var $74=$73+16; //@line 301 "_functoolsmodule.c"
        var $75=HEAP[$74]; //@line 301 "_functoolsmodule.c"
        FUNCTION_TABLE[$72]($75); //@line 301 "_functoolsmodule.c"
        __label__ = 11; break; //@line 301 "_functoolsmodule.c"
      case 11: // $bb10
        var $76=$pto_addr; //@line 302 "_functoolsmodule.c"
        var $77=$76+20; //@line 302 "_functoolsmodule.c"
        var $78=HEAP[$77]; //@line 302 "_functoolsmodule.c"
        var $79=($78)!=0; //@line 302 "_functoolsmodule.c"
        if ($79) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 302 "_functoolsmodule.c"
      case 12: // $bb11
        var $80=$pto_addr; //@line 302 "_functoolsmodule.c"
        var $81=$80+20; //@line 302 "_functoolsmodule.c"
        var $82=HEAP[$81]; //@line 302 "_functoolsmodule.c"
        var $83=$82; //@line 302 "_functoolsmodule.c"
        var $84=HEAP[$83]; //@line 302 "_functoolsmodule.c"
        var $85=($84) - 1; //@line 302 "_functoolsmodule.c"
        var $86=$82; //@line 302 "_functoolsmodule.c"
        HEAP[$86]=$85; //@line 302 "_functoolsmodule.c"
        var $87=$82; //@line 302 "_functoolsmodule.c"
        var $88=HEAP[$87]; //@line 302 "_functoolsmodule.c"
        var $89=($88)==0; //@line 302 "_functoolsmodule.c"
        if ($89) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 302 "_functoolsmodule.c"
      case 13: // $bb12
        var $90=$pto_addr; //@line 302 "_functoolsmodule.c"
        var $91=$90+20; //@line 302 "_functoolsmodule.c"
        var $92=HEAP[$91]; //@line 302 "_functoolsmodule.c"
        var $93=$92+4; //@line 302 "_functoolsmodule.c"
        var $94=HEAP[$93]; //@line 302 "_functoolsmodule.c"
        var $95=$94+24; //@line 302 "_functoolsmodule.c"
        var $96=HEAP[$95]; //@line 302 "_functoolsmodule.c"
        var $97=$pto_addr; //@line 302 "_functoolsmodule.c"
        var $98=$97+20; //@line 302 "_functoolsmodule.c"
        var $99=HEAP[$98]; //@line 302 "_functoolsmodule.c"
        FUNCTION_TABLE[$96]($99); //@line 302 "_functoolsmodule.c"
        __label__ = 14; break; //@line 302 "_functoolsmodule.c"
      case 14: // $bb13
        var $100=HEAP[$fn]; //@line 303 "_functoolsmodule.c"
        var $101=$pto_addr; //@line 303 "_functoolsmodule.c"
        var $102=$101+8; //@line 303 "_functoolsmodule.c"
        HEAP[$102]=$100; //@line 303 "_functoolsmodule.c"
        var $103=HEAP[$fnargs]; //@line 304 "_functoolsmodule.c"
        var $104=$pto_addr; //@line 304 "_functoolsmodule.c"
        var $105=$104+12; //@line 304 "_functoolsmodule.c"
        HEAP[$105]=$103; //@line 304 "_functoolsmodule.c"
        var $106=HEAP[$kw]; //@line 305 "_functoolsmodule.c"
        var $107=$pto_addr; //@line 305 "_functoolsmodule.c"
        var $108=$107+16; //@line 305 "_functoolsmodule.c"
        HEAP[$108]=$106; //@line 305 "_functoolsmodule.c"
        var $109=HEAP[$dict]; //@line 306 "_functoolsmodule.c"
        var $110=($109)!=(__Py_NoneStruct); //@line 306 "_functoolsmodule.c"
        if ($110) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 306 "_functoolsmodule.c"
      case 15: // $bb14
        var $111=HEAP[$dict]; //@line 307 "_functoolsmodule.c"
        var $112=$pto_addr; //@line 307 "_functoolsmodule.c"
        var $113=$112+20; //@line 307 "_functoolsmodule.c"
        HEAP[$113]=$111; //@line 307 "_functoolsmodule.c"
        var $114=HEAP[$dict]; //@line 308 "_functoolsmodule.c"
        var $115=$114; //@line 308 "_functoolsmodule.c"
        var $116=HEAP[$115]; //@line 308 "_functoolsmodule.c"
        var $117=($116) + 1; //@line 308 "_functoolsmodule.c"
        var $118=$114; //@line 308 "_functoolsmodule.c"
        HEAP[$118]=$117; //@line 308 "_functoolsmodule.c"
        __label__ = 17; break; //@line 308 "_functoolsmodule.c"
      case 16: // $bb15
        var $119=$pto_addr; //@line 310 "_functoolsmodule.c"
        var $120=$119+20; //@line 310 "_functoolsmodule.c"
        HEAP[$120]=0; //@line 310 "_functoolsmodule.c"
        __label__ = 17; break; //@line 310 "_functoolsmodule.c"
      case 17: // $bb16
        var $121=HEAP[$fn]; //@line 312 "_functoolsmodule.c"
        var $122=$121; //@line 312 "_functoolsmodule.c"
        var $123=HEAP[$122]; //@line 312 "_functoolsmodule.c"
        var $124=($123) + 1; //@line 312 "_functoolsmodule.c"
        var $125=$121; //@line 312 "_functoolsmodule.c"
        HEAP[$125]=$124; //@line 312 "_functoolsmodule.c"
        var $126=HEAP[$fnargs]; //@line 313 "_functoolsmodule.c"
        var $127=$126; //@line 313 "_functoolsmodule.c"
        var $128=HEAP[$127]; //@line 313 "_functoolsmodule.c"
        var $129=($128) + 1; //@line 313 "_functoolsmodule.c"
        var $130=$126; //@line 313 "_functoolsmodule.c"
        HEAP[$130]=$129; //@line 313 "_functoolsmodule.c"
        var $131=HEAP[$kw]; //@line 314 "_functoolsmodule.c"
        var $132=$131; //@line 314 "_functoolsmodule.c"
        var $133=HEAP[$132]; //@line 314 "_functoolsmodule.c"
        var $134=($133) + 1; //@line 314 "_functoolsmodule.c"
        var $135=$131; //@line 314 "_functoolsmodule.c"
        HEAP[$135]=$134; //@line 314 "_functoolsmodule.c"
        var $136=HEAP[__Py_NoneStruct]; //@line 315 "_functoolsmodule.c"
        var $137=($136) + 1; //@line 315 "_functoolsmodule.c"
        HEAP[__Py_NoneStruct]=$137; //@line 315 "_functoolsmodule.c"
        $0=__Py_NoneStruct; //@line 315 "_functoolsmodule.c"
        __label__ = 18; break; //@line 315 "_functoolsmodule.c"
      case 18: // $bb17
        var $138=$0; //@line 298 "_functoolsmodule.c"
        $retval=$138; //@line 298 "_functoolsmodule.c"
        var $retval18=$retval; //@line 298 "_functoolsmodule.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 298 "_functoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_functools() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $i;
        var $m;
        var $name;
        var $typelist=__stackBase__;
        var $0=$typelist; //@line 388 "_functoolsmodule.c"
        HEAP[$0]=_partial_type; //@line 388 "_functoolsmodule.c"
        var $1=$typelist+4; //@line 388 "_functoolsmodule.c"
        HEAP[$1]=0; //@line 388 "_functoolsmodule.c"
        var $2=_Py_InitModule4(__str23, _module_methods, _module_doc, 0, 1013); //@line 390 "_functoolsmodule.c"
        $m=$2; //@line 390 "_functoolsmodule.c"
        var $3=$m; //@line 391 "_functoolsmodule.c"
        var $4=($3)==0; //@line 391 "_functoolsmodule.c"
        if ($4) { __label__ = 7; break; } else { __label__ = 1; break; } //@line 391 "_functoolsmodule.c"
      case 1: // $bb
        $i=0; //@line 394 "_functoolsmodule.c"
        __label__ = 6; break; //@line 394 "_functoolsmodule.c"
      case 2: // $bb1
        var $5=$i; //@line 395 "_functoolsmodule.c"
        var $6=$typelist+$5*4; //@line 395 "_functoolsmodule.c"
        var $7=HEAP[$6]; //@line 395 "_functoolsmodule.c"
        var $8=_PyType_Ready($7); //@line 395 "_functoolsmodule.c"
        var $9=($8) < 0; //@line 395 "_functoolsmodule.c"
        if ($9) { __label__ = 7; break; } else { __label__ = 3; break; } //@line 395 "_functoolsmodule.c"
      case 3: // $bb2
        var $10=$i; //@line 397 "_functoolsmodule.c"
        var $11=$typelist+$10*4; //@line 397 "_functoolsmodule.c"
        var $12=HEAP[$11]; //@line 397 "_functoolsmodule.c"
        var $13=$12+12; //@line 397 "_functoolsmodule.c"
        var $14=HEAP[$13]; //@line 397 "_functoolsmodule.c"
        var $15=_strchr($14, 46); //@line 397 "_functoolsmodule.c"
        $name=$15; //@line 397 "_functoolsmodule.c"
        var $16=$name; //@line 398 "_functoolsmodule.c"
        var $17=($16)==0; //@line 398 "_functoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 398 "_functoolsmodule.c"
      case 4: // $bb3
        ___assert_fail(__str24, __str6, 398, ___PRETTY_FUNCTION___8886); //@line 398 "_functoolsmodule.c"
        throw "Reached an unreachable!" //@line 398 "_functoolsmodule.c"
      case 5: // $bb4
        var $18=$i; //@line 399 "_functoolsmodule.c"
        var $19=$typelist+$18*4; //@line 399 "_functoolsmodule.c"
        var $20=HEAP[$19]; //@line 399 "_functoolsmodule.c"
        var $21=$20; //@line 399 "_functoolsmodule.c"
        var $22=$21; //@line 399 "_functoolsmodule.c"
        var $23=HEAP[$22]; //@line 399 "_functoolsmodule.c"
        var $24=($23) + 1; //@line 399 "_functoolsmodule.c"
        var $25=$21; //@line 399 "_functoolsmodule.c"
        HEAP[$25]=$24; //@line 399 "_functoolsmodule.c"
        var $26=$i; //@line 400 "_functoolsmodule.c"
        var $27=$typelist+$26*4; //@line 400 "_functoolsmodule.c"
        var $28=HEAP[$27]; //@line 400 "_functoolsmodule.c"
        var $29=$28; //@line 400 "_functoolsmodule.c"
        var $30=$name; //@line 400 "_functoolsmodule.c"
        var $31=$30+1; //@line 400 "_functoolsmodule.c"
        var $32=$m; //@line 400 "_functoolsmodule.c"
        var $33=_PyModule_AddObject($32, $31, $29); //@line 400 "_functoolsmodule.c"
        var $34=$i; //@line 394 "_functoolsmodule.c"
        var $35=($34) + 1; //@line 394 "_functoolsmodule.c"
        $i=$35; //@line 394 "_functoolsmodule.c"
        __label__ = 6; break; //@line 394 "_functoolsmodule.c"
      case 6: // $bb5
        var $36=$i; //@line 394 "_functoolsmodule.c"
        var $37=$typelist+$36*4; //@line 394 "_functoolsmodule.c"
        var $38=HEAP[$37]; //@line 394 "_functoolsmodule.c"
        var $39=($38)!=0; //@line 394 "_functoolsmodule.c"
        if ($39) { __label__ = 2; break; } else { __label__ = 7; break; } //@line 394 "_functoolsmodule.c"
      case 7: // $return
        STACKTOP = __stackBase__;
        return; //@line 392 "_functoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_functools"] = _init_functools;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_partial_get_dict,0,_partial_set_dict,0,_partial_reduce,0,_partial_setstate,0,_partial_dealloc,0,_partial_call,0,_PyObject_GenericGetAttr,0,_PyObject_GenericSetAttr,0,_partial_traverse,0,_partial_new,0,_PyObject_GC_Del,0,_functools_reduce,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([114,101,100,117,99,101,0] /* reduce\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([114,101,100,117,99,101,40,41,32,97,114,103,32,50,32,109,117,115,116,32,115,117,112,112,111,114,116,32,105,116,101,114,97,116,105,111,110,0] /* reduce() arg 2 must  */, "i8", ALLOC_NORMAL);
__str2=allocate([114,101,100,117,99,101,40,41,32,111,102,32,101,109,112,116,121,32,115,101,113,117,101,110,99,101,32,119,105,116,104,32,110,111,32,105,110,105,116,105,97,108,32,118,97,108,117,101,0] /* reduce() of empty se */, "i8", ALLOC_NORMAL);
_reduce_doc=allocate([114,101,100,117,99,101,40,102,117,110,99,116,105,111,110,44,32,115,101,113,117,101,110,99,101,91,44,32,105,110,105,116,105,97,108,93,41,32,45,62,32,118,97,108,117,101,10,10,65,112,112,108,121,32,97,32,102,117,110,99,116,105,111,110,32,111,102,32,116,119,111,32,97,114,103,117,109,101,110,116,115,32,99,117,109,117,108,97,116,105,118,101,108,121,32,116,111,32,116,104,101,32,105,116,101,109,115,32,111,102,32,97,32,115,101,113,117,101,110,99,101,44,10,102,114,111,109,32,108,101,102,116,32,116,111,32,114,105,103,104,116,44,32,115,111,32,97,115,32,116,111,32,114,101,100,117,99,101,32,116,104,101,32,115,101,113,117,101,110,99,101,32,116,111,32,97,32,115,105,110,103,108,101,32,118,97,108,117,101,46,10,70,111,114,32,101,120,97,109,112,108,101,44,32,114,101,100,117,99,101,40,108,97,109,98,100,97,32,120,44,32,121,58,32,120,43,121,44,32,91,49,44,32,50,44,32,51,44,32,52,44,32,53,93,41,32,99,97,108,99,117,108,97,116,101,115,10,40,40,40,40,49,43,50,41,43,51,41,43,52,41,43,53,41,46,32,32,73,102,32,105,110,105,116,105,97,108,32,105,115,32,112,114,101,115,101,110,116,44,32,105,116,32,105,115,32,112,108,97,99,101,100,32,98,101,102,111,114,101,32,116,104,101,32,105,116,101,109,115,10,111,102,32,116,104,101,32,115,101,113,117,101,110,99,101,32,105,110,32,116,104,101,32,99,97,108,99,117,108,97,116,105,111,110,44,32,97,110,100,32,115,101,114,118,101,115,32,97,115,32,97,32,100,101,102,97,117,108,116,32,119,104,101,110,32,116,104,101,10,115,101,113,117,101,110,99,101,32,105,115,32,101,109,112,116,121,46,0] /* reduce(function, seq */, "i8", ALLOC_NORMAL);
__str3=allocate([116,121,112,101,32,39,112,97,114,116,105,97,108,39,32,116,97,107,101,115,32,97,116,32,108,101,97,115,116,32,111,110,101,32,97,114,103,117,109,101,110,116,0] /* type 'partial' takes */, "i8", ALLOC_NORMAL);
__str4=allocate([116,104,101,32,102,105,114,115,116,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,99,97,108,108,97,98,108,101,0] /* the first argument m */, "i8", ALLOC_NORMAL);
__str5=allocate([80,121,67,97,108,108,97,98,108,101,95,67,104,101,99,107,40,112,116,111,45,62,102,110,41,0] /* PyCallable_Check(pto */, "i8", ALLOC_NORMAL);
__str6=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,95,102,117,110,99,116,111,111,108,115,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/_ */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8588=allocate([112,97,114,116,105,97,108,95,99,97,108,108,0] /* partial_call\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([40,40,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,112,116,111,45,62,97,114,103,115,41,41,45,62,111,98,95,116,121,112,101,41,41,45,62,116,112,95,102,108,97,103,115,32,38,32,40,40,49,76,60,60,50,54,41,41,41,32,33,61,32,48,41,0] /* ((((((PyObject_)(pto */, "i8", ALLOC_NORMAL);
__str8=allocate([112,116,111,45,62,107,119,32,61,61,32,40,38,95,80,121,95,78,111,110,101,83,116,114,117,99,116,41,32,124,124,32,40,40,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,112,116,111,45,62,107,119,41,41,45,62,111,98,95,116,121,112,101,41,41,45,62,116,112,95,102,108,97,103,115,32,38,32,40,40,49,76,60,60,50,57,41,41,41,32,33,61,32,48,41,0] /* pto->kw == (&_Py_Non */, "i8", ALLOC_NORMAL);
_partial_doc=allocate([112,97,114,116,105,97,108,40,102,117,110,99,44,32,42,97,114,103,115,44,32,42,42,107,101,121,119,111,114,100,115,41,32,45,32,110,101,119,32,102,117,110,99,116,105,111,110,32,119,105,116,104,32,112,97,114,116,105,97,108,32,97,112,112,108,105,99,97,116,105,111,110,10,32,32,32,32,111,102,32,116,104,101,32,103,105,118,101,110,32,97,114,103,117,109,101,110,116,115,32,97,110,100,32,107,101,121,119,111,114,100,115,46,10,0] /* partial(func, _args, */, "i8", ALLOC_NORMAL);
__str9=allocate([102,117,110,99,0] /* func\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([102,117,110,99,116,105,111,110,32,111,98,106,101,99,116,32,116,111,32,117,115,101,32,105,110,32,102,117,116,117,114,101,32,112,97,114,116,105,97,108,32,99,97,108,108,115,0] /* function object to u */, "i8", ALLOC_NORMAL);
__str11=allocate([97,114,103,115,0] /* args\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([116,117,112,108,101,32,111,102,32,97,114,103,117,109,101,110,116,115,32,116,111,32,102,117,116,117,114,101,32,112,97,114,116,105,97,108,32,99,97,108,108,115,0] /* tuple of arguments t */, "i8", ALLOC_NORMAL);
__str13=allocate([107,101,121,119,111,114,100,115,0] /* keywords\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([100,105,99,116,105,111,110,97,114,121,32,111,102,32,107,101,121,119,111,114,100,32,97,114,103,117,109,101,110,116,115,32,116,111,32,102,117,116,117,114,101,32,112,97,114,116,105,97,108,32,99,97,108,108,115,0] /* dictionary of keywor */, "i8", ALLOC_NORMAL);
_partial_memberlist=allocate([0, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str15=allocate([97,32,112,97,114,116,105,97,108,32,111,98,106,101,99,116,39,115,32,100,105,99,116,105,111,110,97,114,121,32,109,97,121,32,110,111,116,32,98,101,32,100,101,108,101,116,101,100,0] /* a partial object's d */, "i8", ALLOC_NORMAL);
__str16=allocate([115,101,116,116,105,110,103,32,112,97,114,116,105,97,108,32,111,98,106,101,99,116,39,115,32,100,105,99,116,105,111,110,97,114,121,32,116,111,32,97,32,110,111,110,45,100,105,99,116,0] /* setting partial obje */, "i8", ALLOC_NORMAL);
__str17=allocate([95,95,100,105,99,116,95,95,0] /* __dict__\00 */, "i8", ALLOC_NORMAL);
_partial_getsetlist=allocate(40, ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str18=allocate([79,40,79,41,40,79,79,79,79,41,0] /* O(O)(OOOO)\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([40,79,79,79,79,41,58,95,95,115,101,116,115,116,97,116,101,95,95,0] /* (OOOO):__setstate__\ */, "i8", ALLOC_NORMAL);
__str20=allocate([95,95,114,101,100,117,99,101,95,95,0] /* __reduce__\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([95,95,115,101,116,115,116,97,116,101,95,95,0] /* __setstate__\00 */, "i8", ALLOC_NORMAL);
_partial_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str22=allocate([102,117,110,99,116,111,111,108,115,46,112,97,114,116,105,97,108,0] /* functools.partial\00 */, "i8", ALLOC_NORMAL);
_partial_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_module_doc=allocate([84,111,111,108,115,32,116,104,97,116,32,111,112,101,114,97,116,101,32,111,110,32,102,117,110,99,116,105,111,110,115,46,0] /* Tools that operate o */, "i8", ALLOC_NORMAL);
_module_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str23=allocate([95,102,117,110,99,116,111,111,108,115,0] /* _functools\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([110,97,109,101,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* name != ((void _)0)\ */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8886=allocate([105,110,105,116,95,102,117,110,99,116,111,111,108,115,0] /* init_functools\00 */, "i8", ALLOC_NORMAL);
HEAP[_partial_memberlist]=__str9;
HEAP[_partial_memberlist+16]=__str10;
HEAP[_partial_memberlist+20]=__str11;
HEAP[_partial_memberlist+36]=__str12;
HEAP[_partial_memberlist+40]=__str13;
HEAP[_partial_memberlist+56]=__str14;
HEAP[_partial_getsetlist]=__str17;
HEAP[_partial_getsetlist+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_partial_getsetlist+8]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_partial_methods]=__str20;
HEAP[_partial_methods+4]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_partial_methods+16]=__str21;
HEAP[_partial_methods+20]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_partial_type+12]=__str22;
HEAP[_partial_type+24]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_partial_type+64]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_partial_type+72]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_partial_type+76]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_partial_type+88]=_partial_doc;
HEAP[_partial_type+92]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_partial_type+116]=_partial_methods;
HEAP[_partial_type+120]=_partial_memberlist;
HEAP[_partial_type+124]=_partial_getsetlist;
HEAP[_partial_type+156]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_partial_type+160]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_module_methods]=__str;
HEAP[_module_methods+4]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_module_methods+12]=_reduce_doc;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

