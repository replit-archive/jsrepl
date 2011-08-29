// Warning: 64 bit OR - precision limit may be hit on llvm line 2452
// Warning: 64 bit AND - precision limit may be hit on llvm line 2479
// Warning: 64 bit OR - precision limit may be hit on llvm line 2482
// Warning: 64 bit OR - precision limit may be hit on llvm line 2545
// Warning: 64 bit OR - precision limit may be hit on llvm line 3267
// Warning: 64 bit AND - precision limit may be hit on llvm line 3288
// Warning: 64 bit OR - precision limit may be hit on llvm line 3291
// Warning: 64 bit OR - precision limit may be hit on llvm line 3358
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



var $0___SIZE = 380; // %0
  
var $1___SIZE = 20; // %1
  
var $2___SIZE = 20; // %2
  
var $3___SIZE = 360; // %3
  
var $4___SIZE = 80; // %4
  
var $5___SIZE = 16; // %5
  
var $6___SIZE = 60; // %6
  
var $7___SIZE = 20; // %7
  
var $8___SIZE = 196; // %8
  
var $9___SIZE = 112; // %9
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyIntObject___SIZE = 12; // %struct.PyIntObject
  
var $struct_PyLongObject___SIZE = 0; // %struct.PyLongObject
  var $struct_PyLongObject___FLATTENER = [];
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyStructObject___SIZE = 28; // %struct.PyStructObject
  
var $struct_PyTupleObject___SIZE = 16; // %struct.PyTupleObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_formatcode___SIZE = 12; // %struct.formatcode
  
var $struct_formatdef___SIZE = 20; // %struct.formatdef
  
var __str;
var __str1;
var __str2;
var ___PRETTY_FUNCTION___8419;



var __str3;
var __str4;
var __str5;
var _StructError;
var __str6;
var __str7;
var __str8;
var __str9;
var ___PRETTY_FUNCTION___8543;
var ___PRETTY_FUNCTION___8572;
var ___PRETTY_FUNCTION___8601;
var ___PRETTY_FUNCTION___8630;
var __str10;
var ___PRETTY_FUNCTION___8689;
var __str11;
var __str12;
var __str13;
var __str14;
var __str15;
var __str16;
var __str17;
var __str18;
var ___PRETTY_FUNCTION___9097;
var _native_table;
var _bigendian_table;
var _lilendian_table;
var __str19;
var __str20;
var __str21;
var ___PRETTY_FUNCTION___9830;

var __str22;
var ___PRETTY_FUNCTION___9853;
var __str23;
var _kwlist_9852;
var __str24;
var _s_unpack__doc__;
var ___PRETTY_FUNCTION___9973;
var __str25;
var __str26;
var __str27;
var _s_unpack_from__doc__;
var ___PRETTY_FUNCTION___10041;
var __str28;
var _kwlist_10035;
var __str29;
var __str30;
var __str31;
var __str32;
var __str33;
var __str34;

var __str35;
var _s_pack__doc__;
var ___PRETTY_FUNCTION___10174;
var __str36;
var _s_pack_into__doc__;
var ___PRETTY_FUNCTION___10219;
var __str37;
var __str38;
var __str39;
var __str40;
var __str41;
var __str42;
var __str43;
var _s_methods;
var _s__doc__;
var __str44;
var __str45;
var __str46;
var _s_getsetlist;
var __str47;
var _PyStructType;
var _cache;
var _clearcache_doc;
var _calcsize_doc;
var _pack_doc;
var __str48;
var _pack_into_doc;
var _unpack_doc;
var _unpack_from_doc;
var __str49;
var __str50;
var _module_functions;
var _module_doc;
var __str51;
var __str52;

var __str53;
var __str54;
var __str55;
var __str56;
var __str57;






































































  function _get_pylong($v) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $v_addr;
        var $retval;
        var $0;
        var $r;
        var $w;
        var $converted;
        var $m;
        $v_addr=$v;
        $converted=0; //@line 111 "_struct.c"
        var $1=$v_addr; //@line 112 "_struct.c"
        var $2=($1)==0; //@line 112 "_struct.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 112 "_struct.c"
      case 1: // $bb
        ___assert_fail(__str1, __str2, 112, ___PRETTY_FUNCTION___8419); //@line 112 "_struct.c"
        throw "Reached an unreachable!" //@line 112 "_struct.c"
      case 2: // $bb1
        var $3=$v_addr; //@line 113 "_struct.c"
        var $4=$3+4; //@line 113 "_struct.c"
        var $5=HEAP[$4]; //@line 113 "_struct.c"
        var $6=$5+84; //@line 113 "_struct.c"
        var $7=HEAP[$6]; //@line 113 "_struct.c"
        var $8=($7) & 8388608; //@line 113 "_struct.c"
        var $9=($8)!=0; //@line 113 "_struct.c"
        if ($9) { __label__ = 29; break; } else { __label__ = 3; break; } //@line 113 "_struct.c"
      case 3: // $bb2
        var $10=$v_addr; //@line 113 "_struct.c"
        var $11=$10+4; //@line 113 "_struct.c"
        var $12=HEAP[$11]; //@line 113 "_struct.c"
        var $13=$12+84; //@line 113 "_struct.c"
        var $14=HEAP[$13]; //@line 113 "_struct.c"
        var $15=($14) & 16777216; //@line 113 "_struct.c"
        var $16=($15)!=0; //@line 113 "_struct.c"
        if ($16) { __label__ = 29; break; } else { __label__ = 4; break; } //@line 113 "_struct.c"
      case 4: // $bb3
        var $17=$v_addr; //@line 121 "_struct.c"
        var $18=$17+4; //@line 121 "_struct.c"
        var $19=HEAP[$18]; //@line 121 "_struct.c"
        var $20=$19+48; //@line 121 "_struct.c"
        var $21=HEAP[$20]; //@line 121 "_struct.c"
        $m=$21; //@line 121 "_struct.c"
        var $22=$v_addr; //@line 122 "_struct.c"
        var $23=$22+4; //@line 122 "_struct.c"
        var $24=HEAP[$23]; //@line 122 "_struct.c"
        var $25=$24+48; //@line 122 "_struct.c"
        var $26=HEAP[$25]; //@line 122 "_struct.c"
        var $27=($26)!=0; //@line 122 "_struct.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 12; break; } //@line 122 "_struct.c"
      case 5: // $bb4
        var $28=$v_addr; //@line 122 "_struct.c"
        var $29=$28+4; //@line 122 "_struct.c"
        var $30=HEAP[$29]; //@line 122 "_struct.c"
        var $31=$30+84; //@line 122 "_struct.c"
        var $32=HEAP[$31]; //@line 122 "_struct.c"
        var $33=($32) & 131072; //@line 122 "_struct.c"
        var $34=($33)!=0; //@line 122 "_struct.c"
        if ($34) { __label__ = 6; break; } else { __label__ = 12; break; } //@line 122 "_struct.c"
      case 6: // $bb5
        var $35=$v_addr; //@line 122 "_struct.c"
        var $36=$35+4; //@line 122 "_struct.c"
        var $37=HEAP[$36]; //@line 122 "_struct.c"
        var $38=$37+48; //@line 122 "_struct.c"
        var $39=HEAP[$38]; //@line 122 "_struct.c"
        var $40=$39+152; //@line 122 "_struct.c"
        var $41=HEAP[$40]; //@line 122 "_struct.c"
        var $42=($41)!=0; //@line 122 "_struct.c"
        if ($42) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 122 "_struct.c"
      case 7: // $bb6
        var $43=$v_addr; //@line 123 "_struct.c"
        var $44=_PyNumber_Index($43); //@line 123 "_struct.c"
        $w=$44; //@line 123 "_struct.c"
        var $45=$w; //@line 124 "_struct.c"
        var $46=($45)!=0; //@line 124 "_struct.c"
        if ($46) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 124 "_struct.c"
      case 8: // $bb27_thread
        var $47=$w; //@line 125 "_struct.c"
        $v_addr=$47; //@line 125 "_struct.c"
        $converted=1; //@line 127 "_struct.c"
        __label__ = 30; break;
      case 9: // $bb8
        var $48=HEAP[_PyExc_TypeError]; //@line 129 "_struct.c"
        var $49=_PyErr_ExceptionMatches($48); //@line 129 "_struct.c"
        var $50=($49)!=0; //@line 129 "_struct.c"
        if ($50) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 129 "_struct.c"
      case 10: // $bb9
        _PyErr_Clear(); //@line 130 "_struct.c"
        __label__ = 12; break; //@line 130 "_struct.c"
      case 11: // $bb10
        $0=0; //@line 133 "_struct.c"
        __label__ = 42; break; //@line 133 "_struct.c"
      case 12: // $bb11
        var $_pr=$converted;
        var $51=($_pr)==0; //@line 135 "_struct.c"
        if ($51) { __label__ = 13; break; } else { __label__ = 30; break; } //@line 135 "_struct.c"
      case 13: // $bb12
        var $52=$m; //@line 135 "_struct.c"
        var $53=($52)!=0; //@line 135 "_struct.c"
        if ($53) { __label__ = 14; break; } else { __label__ = 27; break; } //@line 135 "_struct.c"
      case 14: // $bb13
        var $54=$m; //@line 135 "_struct.c"
        var $55=$54+72; //@line 135 "_struct.c"
        var $56=HEAP[$55]; //@line 135 "_struct.c"
        var $57=($56)!=0; //@line 135 "_struct.c"
        if ($57) { __label__ = 15; break; } else { __label__ = 27; break; } //@line 135 "_struct.c"
      case 15: // $bb14
        var $58=$v_addr; //@line 138 "_struct.c"
        var $59=$58+4; //@line 138 "_struct.c"
        var $60=HEAP[$59]; //@line 138 "_struct.c"
        var $61=($60)==(_PyFloat_Type); //@line 138 "_struct.c"
        if ($61) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 138 "_struct.c"
      case 16: // $bb15
        var $62=$v_addr; //@line 138 "_struct.c"
        var $63=$62+4; //@line 138 "_struct.c"
        var $64=HEAP[$63]; //@line 138 "_struct.c"
        var $65=_PyType_IsSubtype($64, _PyFloat_Type); //@line 138 "_struct.c"
        var $66=($65)!=0; //@line 138 "_struct.c"
        if ($66) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 138 "_struct.c"
      case 17: // $bb16
        var $67=HEAP[_PyExc_DeprecationWarning]; //@line 139 "_struct.c"
        var $68=_PyErr_WarnEx($67, __str3, 1); //@line 139 "_struct.c"
        var $69=($68)!=0; //@line 139 "_struct.c"
        if ($69) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 139 "_struct.c"
      case 18: // $bb17
        $0=0; //@line 142 "_struct.c"
        __label__ = 42; break; //@line 142 "_struct.c"
      case 19: // $bb19
        var $70=HEAP[_PyExc_DeprecationWarning]; //@line 145 "_struct.c"
        var $71=_PyErr_WarnEx($70, __str4, 1); //@line 145 "_struct.c"
        var $72=($71)!=0; //@line 145 "_struct.c"
        if ($72) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 145 "_struct.c"
      case 20: // $bb20
        $0=0; //@line 148 "_struct.c"
        __label__ = 42; break; //@line 148 "_struct.c"
      case 21: // $bb21
        var $73=$m; //@line 150 "_struct.c"
        var $74=$73+72; //@line 150 "_struct.c"
        var $75=HEAP[$74]; //@line 150 "_struct.c"
        var $76=$v_addr; //@line 150 "_struct.c"
        var $77=FUNCTION_TABLE[$75]($76); //@line 150 "_struct.c"
        $v_addr=$77; //@line 150 "_struct.c"
        var $78=($77)==0; //@line 151 "_struct.c"
        if ($78) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 151 "_struct.c"
      case 22: // $bb22
        $0=0; //@line 152 "_struct.c"
        __label__ = 42; break; //@line 152 "_struct.c"
      case 23: // $bb23
        var $79=$v_addr; //@line 153 "_struct.c"
        var $80=$79+4; //@line 153 "_struct.c"
        var $81=HEAP[$80]; //@line 153 "_struct.c"
        var $82=$81+84; //@line 153 "_struct.c"
        var $83=HEAP[$82]; //@line 153 "_struct.c"
        var $84=($83) & 8388608; //@line 153 "_struct.c"
        var $85=($84)==0; //@line 153 "_struct.c"
        if ($85) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 153 "_struct.c"
      case 24: // $bb24
        var $86=$v_addr; //@line 153 "_struct.c"
        var $87=$86+4; //@line 153 "_struct.c"
        var $88=HEAP[$87]; //@line 153 "_struct.c"
        var $89=$88+84; //@line 153 "_struct.c"
        var $90=HEAP[$89]; //@line 153 "_struct.c"
        var $91=($90) & 16777216; //@line 153 "_struct.c"
        var $92=($91)==0; //@line 153 "_struct.c"
        if ($92) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 153 "_struct.c"
      case 25: // $bb25
        var $93=HEAP[_PyExc_TypeError]; //@line 154 "_struct.c"
        _PyErr_SetString($93, __str5); //@line 154 "_struct.c"
        $0=0; //@line 157 "_struct.c"
        __label__ = 42; break; //@line 157 "_struct.c"
      case 26: // $bb26
        $converted=1; //@line 159 "_struct.c"
        __label__ = 30; break; //@line 159 "_struct.c"
      case 27: // $bb27
        var $_pr1_pr=$converted;
        var $94=($_pr1_pr)==0; //@line 161 "_struct.c"
        if ($94) { __label__ = 28; break; } else { __label__ = 30; break; } //@line 161 "_struct.c"
      case 28: // $bb28
        var $95=HEAP[_StructError]; //@line 162 "_struct.c"
        _PyErr_SetString($95, __str6); //@line 162 "_struct.c"
        $0=0; //@line 165 "_struct.c"
        __label__ = 42; break; //@line 165 "_struct.c"
      case 29: // $bb30
        var $96=$v_addr; //@line 170 "_struct.c"
        var $97=$96; //@line 170 "_struct.c"
        var $98=HEAP[$97]; //@line 170 "_struct.c"
        var $99=($98) + 1; //@line 170 "_struct.c"
        var $100=$v_addr; //@line 170 "_struct.c"
        var $101=$100; //@line 170 "_struct.c"
        HEAP[$101]=$99; //@line 170 "_struct.c"
        __label__ = 30; break; //@line 170 "_struct.c"
      case 30: // $bb31
        var $102=$v_addr; //@line 172 "_struct.c"
        var $103=$102+4; //@line 172 "_struct.c"
        var $104=HEAP[$103]; //@line 172 "_struct.c"
        var $105=$104+84; //@line 172 "_struct.c"
        var $106=HEAP[$105]; //@line 172 "_struct.c"
        var $107=($106) & 8388608; //@line 172 "_struct.c"
        var $108=($107)==0; //@line 172 "_struct.c"
        if ($108) { __label__ = 31; break; } else { __label__ = 33; break; } //@line 172 "_struct.c"
      case 31: // $bb32
        var $109=$v_addr; //@line 172 "_struct.c"
        var $110=$109+4; //@line 172 "_struct.c"
        var $111=HEAP[$110]; //@line 172 "_struct.c"
        var $112=$111+84; //@line 172 "_struct.c"
        var $113=HEAP[$112]; //@line 172 "_struct.c"
        var $114=($113) & 16777216; //@line 172 "_struct.c"
        var $115=($114)==0; //@line 172 "_struct.c"
        if ($115) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 172 "_struct.c"
      case 32: // $bb33
        ___assert_fail(__str7, __str2, 172, ___PRETTY_FUNCTION___8419); //@line 172 "_struct.c"
        throw "Reached an unreachable!" //@line 172 "_struct.c"
      case 33: // $bb34
        var $116=$v_addr; //@line 173 "_struct.c"
        var $117=$116+4; //@line 173 "_struct.c"
        var $118=HEAP[$117]; //@line 173 "_struct.c"
        var $119=$118+84; //@line 173 "_struct.c"
        var $120=HEAP[$119]; //@line 173 "_struct.c"
        var $121=($120) & 8388608; //@line 173 "_struct.c"
        var $122=($121)!=0; //@line 173 "_struct.c"
        var $123=$v_addr; //@line 174 "_struct.c"
        if ($122) { __label__ = 34; break; } else { __label__ = 36; break; } //@line 173 "_struct.c"
      case 34: // $bb35
        var $124=$123; //@line 174 "_struct.c"
        var $125=$124+8; //@line 174 "_struct.c"
        var $126=HEAP[$125]; //@line 174 "_struct.c"
        var $127=_PyLong_FromLong($126); //@line 174 "_struct.c"
        $r=$127; //@line 174 "_struct.c"
        var $128=$v_addr; //@line 175 "_struct.c"
        var $129=$128; //@line 175 "_struct.c"
        var $130=HEAP[$129]; //@line 175 "_struct.c"
        var $131=($130) - 1; //@line 175 "_struct.c"
        var $132=$v_addr; //@line 175 "_struct.c"
        var $133=$132; //@line 175 "_struct.c"
        HEAP[$133]=$131; //@line 175 "_struct.c"
        var $134=$v_addr; //@line 175 "_struct.c"
        var $135=$134; //@line 175 "_struct.c"
        var $136=HEAP[$135]; //@line 175 "_struct.c"
        var $137=($136)==0; //@line 175 "_struct.c"
        if ($137) { __label__ = 35; break; } else { __label__ = 41; break; } //@line 175 "_struct.c"
      case 35: // $bb36
        var $138=$v_addr; //@line 175 "_struct.c"
        var $139=$138+4; //@line 175 "_struct.c"
        var $140=HEAP[$139]; //@line 175 "_struct.c"
        var $141=$140+24; //@line 175 "_struct.c"
        var $142=HEAP[$141]; //@line 175 "_struct.c"
        var $143=$v_addr; //@line 175 "_struct.c"
        FUNCTION_TABLE[$142]($143); //@line 175 "_struct.c"
        __label__ = 41; break; //@line 175 "_struct.c"
      case 36: // $bb38
        var $144=$123+4; //@line 177 "_struct.c"
        var $145=HEAP[$144]; //@line 177 "_struct.c"
        var $146=$145+84; //@line 177 "_struct.c"
        var $147=HEAP[$146]; //@line 177 "_struct.c"
        var $148=($147) & 16777216; //@line 177 "_struct.c"
        var $149=($148)!=0; //@line 177 "_struct.c"
        if ($149) { __label__ = 37; break; } else { __label__ = 40; break; } //@line 177 "_struct.c"
      case 37: // $bb39
        var $150=$v_addr; //@line 178 "_struct.c"
        var $151=$150+4; //@line 178 "_struct.c"
        var $152=HEAP[$151]; //@line 178 "_struct.c"
        var $153=$152+84; //@line 178 "_struct.c"
        var $154=HEAP[$153]; //@line 178 "_struct.c"
        var $155=($154) & 16777216; //@line 178 "_struct.c"
        var $156=($155)==0; //@line 178 "_struct.c"
        if ($156) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 178 "_struct.c"
      case 38: // $bb40
        ___assert_fail(__str8, __str2, 178, ___PRETTY_FUNCTION___8419); //@line 178 "_struct.c"
        throw "Reached an unreachable!" //@line 178 "_struct.c"
      case 39: // $bb41
        var $157=$v_addr; //@line 179 "_struct.c"
        $r=$157; //@line 179 "_struct.c"
        __label__ = 41; break; //@line 179 "_struct.c"
      case 40: // $bb42
        $r=0; //@line 182 "_struct.c"
        ___assert_fail(__str9, __str2, 184, ___PRETTY_FUNCTION___8419); //@line 184 "_struct.c"
        throw "Reached an unreachable!" //@line 184 "_struct.c"
      case 41: // $bb43
        var $158=$r; //@line 187 "_struct.c"
        $0=$158; //@line 187 "_struct.c"
        __label__ = 42; break; //@line 187 "_struct.c"
      case 42: // $bb44
        var $159=$0; //@line 133 "_struct.c"
        $retval=$159; //@line 133 "_struct.c"
        var $retval45=$retval; //@line 133 "_struct.c"
        ;
        return $retval45; //@line 133 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _get_long($v, $p) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $v_addr;
        var $p_addr;
        var $retval;
        var $0;
        var $x;
        $v_addr=$v;
        $p_addr=$p;
        var $1=$v_addr; //@line 199 "_struct.c"
        var $2=_get_pylong($1); //@line 199 "_struct.c"
        $v_addr=$2; //@line 199 "_struct.c"
        var $3=$v_addr; //@line 200 "_struct.c"
        var $4=($3)==0; //@line 200 "_struct.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 200 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 201 "_struct.c"
        __label__ = 10; break; //@line 201 "_struct.c"
      case 2: // $bb1
        var $5=$v_addr; //@line 202 "_struct.c"
        var $6=$5+4; //@line 202 "_struct.c"
        var $7=HEAP[$6]; //@line 202 "_struct.c"
        var $8=$7+84; //@line 202 "_struct.c"
        var $9=HEAP[$8]; //@line 202 "_struct.c"
        var $10=($9) & 16777216; //@line 202 "_struct.c"
        var $11=($10)==0; //@line 202 "_struct.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 202 "_struct.c"
      case 3: // $bb2
        ___assert_fail(__str8, __str2, 202, ___PRETTY_FUNCTION___8543); //@line 202 "_struct.c"
        throw "Reached an unreachable!" //@line 202 "_struct.c"
      case 4: // $bb3
        var $12=$v_addr; //@line 203 "_struct.c"
        var $13=_PyLong_AsLong($12); //@line 203 "_struct.c"
        $x=$13; //@line 203 "_struct.c"
        var $14=$v_addr; //@line 204 "_struct.c"
        var $15=$14; //@line 204 "_struct.c"
        var $16=HEAP[$15]; //@line 204 "_struct.c"
        var $17=($16) - 1; //@line 204 "_struct.c"
        var $18=$v_addr; //@line 204 "_struct.c"
        var $19=$18; //@line 204 "_struct.c"
        HEAP[$19]=$17; //@line 204 "_struct.c"
        var $20=$v_addr; //@line 204 "_struct.c"
        var $21=$20; //@line 204 "_struct.c"
        var $22=HEAP[$21]; //@line 204 "_struct.c"
        var $23=($22)==0; //@line 204 "_struct.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 204 "_struct.c"
      case 5: // $bb4
        var $24=$v_addr; //@line 204 "_struct.c"
        var $25=$24+4; //@line 204 "_struct.c"
        var $26=HEAP[$25]; //@line 204 "_struct.c"
        var $27=$26+24; //@line 204 "_struct.c"
        var $28=HEAP[$27]; //@line 204 "_struct.c"
        var $29=$v_addr; //@line 204 "_struct.c"
        FUNCTION_TABLE[$28]($29); //@line 204 "_struct.c"
        __label__ = 6; break; //@line 204 "_struct.c"
      case 6: // $bb5
        var $30=$x; //@line 205 "_struct.c"
        var $31=($30)==-1; //@line 205 "_struct.c"
        if ($31) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 205 "_struct.c"
      case 7: // $bb6
        var $32=_PyErr_Occurred(); //@line 205 "_struct.c"
        var $33=($32)!=0; //@line 205 "_struct.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 205 "_struct.c"
      case 8: // $bb7
        $0=-1; //@line 206 "_struct.c"
        __label__ = 10; break; //@line 206 "_struct.c"
      case 9: // $bb8
        var $34=$p_addr; //@line 207 "_struct.c"
        var $35=$x; //@line 207 "_struct.c"
        HEAP[$34]=$35; //@line 207 "_struct.c"
        $0=0; //@line 208 "_struct.c"
        __label__ = 10; break; //@line 208 "_struct.c"
      case 10: // $bb9
        var $36=$0; //@line 201 "_struct.c"
        $retval=$36; //@line 201 "_struct.c"
        var $retval10=$retval; //@line 201 "_struct.c"
        ;
        return $retval10; //@line 201 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _get_ulong($v, $p) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $v_addr;
        var $p_addr;
        var $retval;
        var $0;
        var $x;
        $v_addr=$v;
        $p_addr=$p;
        var $1=$v_addr; //@line 218 "_struct.c"
        var $2=_get_pylong($1); //@line 218 "_struct.c"
        $v_addr=$2; //@line 218 "_struct.c"
        var $3=$v_addr; //@line 219 "_struct.c"
        var $4=($3)==0; //@line 219 "_struct.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 219 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 220 "_struct.c"
        __label__ = 10; break; //@line 220 "_struct.c"
      case 2: // $bb1
        var $5=$v_addr; //@line 221 "_struct.c"
        var $6=$5+4; //@line 221 "_struct.c"
        var $7=HEAP[$6]; //@line 221 "_struct.c"
        var $8=$7+84; //@line 221 "_struct.c"
        var $9=HEAP[$8]; //@line 221 "_struct.c"
        var $10=($9) & 16777216; //@line 221 "_struct.c"
        var $11=($10)==0; //@line 221 "_struct.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 221 "_struct.c"
      case 3: // $bb2
        ___assert_fail(__str8, __str2, 221, ___PRETTY_FUNCTION___8572); //@line 221 "_struct.c"
        throw "Reached an unreachable!" //@line 221 "_struct.c"
      case 4: // $bb3
        var $12=$v_addr; //@line 222 "_struct.c"
        var $13=_PyLong_AsUnsignedLong($12); //@line 222 "_struct.c"
        $x=$13; //@line 222 "_struct.c"
        var $14=$v_addr; //@line 223 "_struct.c"
        var $15=$14; //@line 223 "_struct.c"
        var $16=HEAP[$15]; //@line 223 "_struct.c"
        var $17=($16) - 1; //@line 223 "_struct.c"
        var $18=$v_addr; //@line 223 "_struct.c"
        var $19=$18; //@line 223 "_struct.c"
        HEAP[$19]=$17; //@line 223 "_struct.c"
        var $20=$v_addr; //@line 223 "_struct.c"
        var $21=$20; //@line 223 "_struct.c"
        var $22=HEAP[$21]; //@line 223 "_struct.c"
        var $23=($22)==0; //@line 223 "_struct.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 223 "_struct.c"
      case 5: // $bb4
        var $24=$v_addr; //@line 223 "_struct.c"
        var $25=$24+4; //@line 223 "_struct.c"
        var $26=HEAP[$25]; //@line 223 "_struct.c"
        var $27=$26+24; //@line 223 "_struct.c"
        var $28=HEAP[$27]; //@line 223 "_struct.c"
        var $29=$v_addr; //@line 223 "_struct.c"
        FUNCTION_TABLE[$28]($29); //@line 223 "_struct.c"
        __label__ = 6; break; //@line 223 "_struct.c"
      case 6: // $bb5
        var $30=$x; //@line 224 "_struct.c"
        var $31=($30)==-1; //@line 224 "_struct.c"
        if ($31) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 224 "_struct.c"
      case 7: // $bb6
        var $32=_PyErr_Occurred(); //@line 224 "_struct.c"
        var $33=($32)!=0; //@line 224 "_struct.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 224 "_struct.c"
      case 8: // $bb7
        $0=-1; //@line 225 "_struct.c"
        __label__ = 10; break; //@line 225 "_struct.c"
      case 9: // $bb8
        var $34=$p_addr; //@line 226 "_struct.c"
        var $35=$x; //@line 226 "_struct.c"
        HEAP[$34]=$35; //@line 226 "_struct.c"
        $0=0; //@line 227 "_struct.c"
        __label__ = 10; break; //@line 227 "_struct.c"
      case 10: // $bb9
        var $36=$0; //@line 220 "_struct.c"
        $retval=$36; //@line 220 "_struct.c"
        var $retval10=$retval; //@line 220 "_struct.c"
        ;
        return $retval10; //@line 220 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _get_longlong($v, $p) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $v_addr;
        var $p_addr;
        var $retval;
        var $0;
        var $x;
        $v_addr=$v;
        $p_addr=$p;
        var $1=$v_addr; //@line 239 "_struct.c"
        var $2=_get_pylong($1); //@line 239 "_struct.c"
        $v_addr=$2; //@line 239 "_struct.c"
        var $3=$v_addr; //@line 240 "_struct.c"
        var $4=($3)==0; //@line 240 "_struct.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 240 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 241 "_struct.c"
        __label__ = 10; break; //@line 241 "_struct.c"
      case 2: // $bb1
        var $5=$v_addr; //@line 242 "_struct.c"
        var $6=$5+4; //@line 242 "_struct.c"
        var $7=HEAP[$6]; //@line 242 "_struct.c"
        var $8=$7+84; //@line 242 "_struct.c"
        var $9=HEAP[$8]; //@line 242 "_struct.c"
        var $10=($9) & 16777216; //@line 242 "_struct.c"
        var $11=($10)==0; //@line 242 "_struct.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 242 "_struct.c"
      case 3: // $bb2
        ___assert_fail(__str8, __str2, 242, ___PRETTY_FUNCTION___8601); //@line 242 "_struct.c"
        throw "Reached an unreachable!" //@line 242 "_struct.c"
      case 4: // $bb3
        var $12=$v_addr; //@line 243 "_struct.c"
        var $13=_PyLong_AsLongLong($12); //@line 243 "_struct.c"
        $x=$13; //@line 243 "_struct.c"
        var $14=$v_addr; //@line 244 "_struct.c"
        var $15=$14; //@line 244 "_struct.c"
        var $16=HEAP[$15]; //@line 244 "_struct.c"
        var $17=($16) - 1; //@line 244 "_struct.c"
        var $18=$v_addr; //@line 244 "_struct.c"
        var $19=$18; //@line 244 "_struct.c"
        HEAP[$19]=$17; //@line 244 "_struct.c"
        var $20=$v_addr; //@line 244 "_struct.c"
        var $21=$20; //@line 244 "_struct.c"
        var $22=HEAP[$21]; //@line 244 "_struct.c"
        var $23=($22)==0; //@line 244 "_struct.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 244 "_struct.c"
      case 5: // $bb4
        var $24=$v_addr; //@line 244 "_struct.c"
        var $25=$24+4; //@line 244 "_struct.c"
        var $26=HEAP[$25]; //@line 244 "_struct.c"
        var $27=$26+24; //@line 244 "_struct.c"
        var $28=HEAP[$27]; //@line 244 "_struct.c"
        var $29=$v_addr; //@line 244 "_struct.c"
        FUNCTION_TABLE[$28]($29); //@line 244 "_struct.c"
        __label__ = 6; break; //@line 244 "_struct.c"
      case 6: // $bb5
        var $30=$x; //@line 245 "_struct.c"
        var $31=($30)==-1; //@line 245 "_struct.c"
        if ($31) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 245 "_struct.c"
      case 7: // $bb6
        var $32=_PyErr_Occurred(); //@line 245 "_struct.c"
        var $33=($32)!=0; //@line 245 "_struct.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 245 "_struct.c"
      case 8: // $bb7
        $0=-1; //@line 246 "_struct.c"
        __label__ = 10; break; //@line 246 "_struct.c"
      case 9: // $bb8
        var $34=$p_addr; //@line 247 "_struct.c"
        var $35=$x; //@line 247 "_struct.c"
        HEAP[$34]=$35; //@line 247 "_struct.c"
        $0=0; //@line 248 "_struct.c"
        __label__ = 10; break; //@line 248 "_struct.c"
      case 10: // $bb9
        var $36=$0; //@line 241 "_struct.c"
        $retval=$36; //@line 241 "_struct.c"
        var $retval10=$retval; //@line 241 "_struct.c"
        ;
        return $retval10; //@line 241 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _get_ulonglong($v, $p) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $v_addr;
        var $p_addr;
        var $retval;
        var $0;
        var $x;
        $v_addr=$v;
        $p_addr=$p;
        var $1=$v_addr; //@line 258 "_struct.c"
        var $2=_get_pylong($1); //@line 258 "_struct.c"
        $v_addr=$2; //@line 258 "_struct.c"
        var $3=$v_addr; //@line 259 "_struct.c"
        var $4=($3)==0; //@line 259 "_struct.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 259 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 260 "_struct.c"
        __label__ = 10; break; //@line 260 "_struct.c"
      case 2: // $bb1
        var $5=$v_addr; //@line 261 "_struct.c"
        var $6=$5+4; //@line 261 "_struct.c"
        var $7=HEAP[$6]; //@line 261 "_struct.c"
        var $8=$7+84; //@line 261 "_struct.c"
        var $9=HEAP[$8]; //@line 261 "_struct.c"
        var $10=($9) & 16777216; //@line 261 "_struct.c"
        var $11=($10)==0; //@line 261 "_struct.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 261 "_struct.c"
      case 3: // $bb2
        ___assert_fail(__str8, __str2, 261, ___PRETTY_FUNCTION___8630); //@line 261 "_struct.c"
        throw "Reached an unreachable!" //@line 261 "_struct.c"
      case 4: // $bb3
        var $12=$v_addr; //@line 262 "_struct.c"
        var $13=_PyLong_AsUnsignedLongLong($12); //@line 262 "_struct.c"
        $x=$13; //@line 262 "_struct.c"
        var $14=$v_addr; //@line 263 "_struct.c"
        var $15=$14; //@line 263 "_struct.c"
        var $16=HEAP[$15]; //@line 263 "_struct.c"
        var $17=($16) - 1; //@line 263 "_struct.c"
        var $18=$v_addr; //@line 263 "_struct.c"
        var $19=$18; //@line 263 "_struct.c"
        HEAP[$19]=$17; //@line 263 "_struct.c"
        var $20=$v_addr; //@line 263 "_struct.c"
        var $21=$20; //@line 263 "_struct.c"
        var $22=HEAP[$21]; //@line 263 "_struct.c"
        var $23=($22)==0; //@line 263 "_struct.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 263 "_struct.c"
      case 5: // $bb4
        var $24=$v_addr; //@line 263 "_struct.c"
        var $25=$24+4; //@line 263 "_struct.c"
        var $26=HEAP[$25]; //@line 263 "_struct.c"
        var $27=$26+24; //@line 263 "_struct.c"
        var $28=HEAP[$27]; //@line 263 "_struct.c"
        var $29=$v_addr; //@line 263 "_struct.c"
        FUNCTION_TABLE[$28]($29); //@line 263 "_struct.c"
        __label__ = 6; break; //@line 263 "_struct.c"
      case 6: // $bb5
        var $30=$x; //@line 264 "_struct.c"
        var $31=($30)==-1; //@line 264 "_struct.c"
        if ($31) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 264 "_struct.c"
      case 7: // $bb6
        var $32=_PyErr_Occurred(); //@line 264 "_struct.c"
        var $33=($32)!=0; //@line 264 "_struct.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 264 "_struct.c"
      case 8: // $bb7
        $0=-1; //@line 265 "_struct.c"
        __label__ = 10; break; //@line 265 "_struct.c"
      case 9: // $bb8
        var $34=$p_addr; //@line 266 "_struct.c"
        var $35=$x; //@line 266 "_struct.c"
        HEAP[$34]=$35; //@line 266 "_struct.c"
        $0=0; //@line 267 "_struct.c"
        __label__ = 10; break; //@line 267 "_struct.c"
      case 10: // $bb9
        var $36=$0; //@line 260 "_struct.c"
        $retval=$36; //@line 260 "_struct.c"
        var $retval10=$retval; //@line 260 "_struct.c"
        ;
        return $retval10; //@line 260 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _unpack_float($p, $le) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $le_addr;
        var $retval;
        var $0;
        var $x;
        $p_addr=$p;
        $le_addr=$le;
        var $1=$p_addr; //@line 280 "_struct.c"
        var $2=$le_addr; //@line 280 "_struct.c"
        var $3=__PyFloat_Unpack4($1, $2); //@line 280 "_struct.c"
        $x=$3; //@line 280 "_struct.c"
        var $4=$x; //@line 281 "_struct.c"
        var $5=($4) == -1; //@line 281 "_struct.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 281 "_struct.c"
      case 1: // $bb
        var $6=_PyErr_Occurred(); //@line 281 "_struct.c"
        var $7=($6)!=0; //@line 281 "_struct.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 281 "_struct.c"
      case 2: // $bb1
        $0=0; //@line 282 "_struct.c"
        __label__ = 4; break; //@line 282 "_struct.c"
      case 3: // $bb2
        var $8=$x; //@line 283 "_struct.c"
        var $9=_PyFloat_FromDouble($8); //@line 283 "_struct.c"
        $0=$9; //@line 283 "_struct.c"
        __label__ = 4; break; //@line 283 "_struct.c"
      case 4: // $bb3
        var $10=$0; //@line 282 "_struct.c"
        $retval=$10; //@line 282 "_struct.c"
        var $retval4=$retval; //@line 282 "_struct.c"
        ;
        return $retval4; //@line 282 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _unpack_double($p, $le) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $le_addr;
        var $retval;
        var $0;
        var $x;
        $p_addr=$p;
        $le_addr=$le;
        var $1=$p_addr; //@line 292 "_struct.c"
        var $2=$le_addr; //@line 292 "_struct.c"
        var $3=__PyFloat_Unpack8($1, $2); //@line 292 "_struct.c"
        $x=$3; //@line 292 "_struct.c"
        var $4=$x; //@line 293 "_struct.c"
        var $5=($4) == -1; //@line 293 "_struct.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 293 "_struct.c"
      case 1: // $bb
        var $6=_PyErr_Occurred(); //@line 293 "_struct.c"
        var $7=($6)!=0; //@line 293 "_struct.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 293 "_struct.c"
      case 2: // $bb1
        $0=0; //@line 294 "_struct.c"
        __label__ = 4; break; //@line 294 "_struct.c"
      case 3: // $bb2
        var $8=$x; //@line 295 "_struct.c"
        var $9=_PyFloat_FromDouble($8); //@line 295 "_struct.c"
        $0=$9; //@line 295 "_struct.c"
        __label__ = 4; break; //@line 295 "_struct.c"
      case 4: // $bb3
        var $10=$0; //@line 294 "_struct.c"
        $retval=$10; //@line 294 "_struct.c"
        var $retval4=$retval; //@line 294 "_struct.c"
        ;
        return $retval4; //@line 294 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __range_error($f, $is_unsigned) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $f_addr;
        var $is_unsigned_addr;
        var $retval;
        var $0;
        var $ulargest;
        var $largest;
        $f_addr=$f;
        $is_unsigned_addr=$is_unsigned;
        var $1=$f_addr; //@line 310 "_struct.c"
        var $2=$1+4; //@line 310 "_struct.c"
        var $3=HEAP[$2]; //@line 310 "_struct.c"
        var $4=4 - ($3); //@line 310 "_struct.c"
        var $5=($4) * 8; //@line 310 "_struct.c"
        var $6=4294967295 >>> ($5); //@line 310 "_struct.c"
        $ulargest=$6; //@line 310 "_struct.c"
        var $7=$f_addr; //@line 311 "_struct.c"
        var $8=$7+4; //@line 311 "_struct.c"
        var $9=HEAP[$8]; //@line 311 "_struct.c"
        var $10=($9) <= 0; //@line 311 "_struct.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 311 "_struct.c"
      case 1: // $bb
        var $11=$f_addr; //@line 311 "_struct.c"
        var $12=$11+4; //@line 311 "_struct.c"
        var $13=HEAP[$12]; //@line 311 "_struct.c"
        var $14=($13) > 4; //@line 311 "_struct.c"
        if ($14) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 311 "_struct.c"
      case 2: // $bb1
        ___assert_fail(__str10, __str2, 311, ___PRETTY_FUNCTION___8689); //@line 311 "_struct.c"
        throw "Reached an unreachable!" //@line 311 "_struct.c"
      case 3: // $bb2
        var $15=$is_unsigned_addr; //@line 312 "_struct.c"
        var $16=($15)!=0; //@line 312 "_struct.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 312 "_struct.c"
      case 4: // $bb3
        var $17=$f_addr; //@line 313 "_struct.c"
        var $18=$17; //@line 313 "_struct.c"
        var $19=HEAP[$18]; //@line 313 "_struct.c"
        var $20=($19); //@line 313 "_struct.c"
        var $21=HEAP[_StructError]; //@line 313 "_struct.c"
        var $22=$ulargest; //@line 313 "_struct.c"
        var $23=_PyErr_Format($21, __str11, allocate([$20,0,0,0,$22,0,0,0], ["i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 313 "_struct.c"
        __label__ = 6; break; //@line 313 "_struct.c"
      case 5: // $bb4
        var $24=$ulargest; //@line 318 "_struct.c"
        var $25=($24) >>> 1; //@line 318 "_struct.c"
        $largest=$25; //@line 318 "_struct.c"
        var $26=$largest; //@line 319 "_struct.c"
        var $not=($26) ^ -1; //@line 319 "_struct.c"
        var $27=$f_addr; //@line 319 "_struct.c"
        var $28=$27; //@line 319 "_struct.c"
        var $29=HEAP[$28]; //@line 319 "_struct.c"
        var $30=($29); //@line 319 "_struct.c"
        var $31=HEAP[_StructError]; //@line 319 "_struct.c"
        var $32=$largest; //@line 319 "_struct.c"
        var $33=_PyErr_Format($31, __str12, allocate([$30,0,0,0,$not,0,0,0,$32,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 319 "_struct.c"
        __label__ = 6; break; //@line 319 "_struct.c"
      case 6: // $bb6
        $0=-1; //@line 325 "_struct.c"
        var $34=$0; //@line 325 "_struct.c"
        $retval=$34; //@line 325 "_struct.c"
        var $retval7=$retval; //@line 325 "_struct.c"
        ;
        return $retval7; //@line 325 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nu_char($p, $f) {
    ;
    var __label__;
  
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    $p_addr=$p;
    $f_addr=$f;
    var $1=$p_addr; //@line 352 "_struct.c"
    var $2=_PyString_FromStringAndSize($1, 1); //@line 352 "_struct.c"
    $0=$2; //@line 352 "_struct.c"
    var $3=$0; //@line 352 "_struct.c"
    $retval=$3; //@line 352 "_struct.c"
    var $retval1=$retval; //@line 352 "_struct.c"
    ;
    return $retval1; //@line 352 "_struct.c"
  }
  

  function _nu_byte($p, $f) {
    ;
    var __label__;
  
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    $p_addr=$p;
    $f_addr=$f;
    var $1=$p_addr; //@line 358 "_struct.c"
    var $2=HEAP[$1]; //@line 358 "_struct.c"
    var $3=($2); //@line 358 "_struct.c"
    var $4=_PyInt_FromLong($3); //@line 358 "_struct.c"
    $0=$4; //@line 358 "_struct.c"
    var $5=$0; //@line 358 "_struct.c"
    $retval=$5; //@line 358 "_struct.c"
    var $retval1=$retval; //@line 358 "_struct.c"
    ;
    return $retval1; //@line 358 "_struct.c"
  }
  

  function _nu_ubyte($p, $f) {
    ;
    var __label__;
  
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    $p_addr=$p;
    $f_addr=$f;
    var $1=$p_addr; //@line 364 "_struct.c"
    var $2=HEAP[$1]; //@line 364 "_struct.c"
    var $3=($2); //@line 364 "_struct.c"
    var $4=_PyInt_FromLong($3); //@line 364 "_struct.c"
    $0=$4; //@line 364 "_struct.c"
    var $5=$0; //@line 364 "_struct.c"
    $retval=$5; //@line 364 "_struct.c"
    var $retval1=$retval; //@line 364 "_struct.c"
    ;
    return $retval1; //@line 364 "_struct.c"
  }
  

  function _nu_short($p, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 2; _memset(__stackBase__, 0, 2);
    var __label__;
  
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    var $x=__stackBase__;
    $p_addr=$p;
    $f_addr=$f;
    var $1=$p_addr; //@line 371 "_struct.c"
    var $x1=$x; //@line 371 "_struct.c"
    _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 2, 1, 0); //@line 371 "_struct.c"
    var $2=HEAP[$x]; //@line 372 "_struct.c"
    var $3=($2); //@line 372 "_struct.c"
    var $4=_PyInt_FromLong($3); //@line 372 "_struct.c"
    $0=$4; //@line 372 "_struct.c"
    var $5=$0; //@line 372 "_struct.c"
    $retval=$5; //@line 372 "_struct.c"
    var $retval2=$retval; //@line 372 "_struct.c"
    STACKTOP = __stackBase__;
    return $retval2; //@line 372 "_struct.c"
  }
  

  function _nu_ushort($p, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 2; _memset(__stackBase__, 0, 2);
    var __label__;
  
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    var $x=__stackBase__;
    $p_addr=$p;
    $f_addr=$f;
    var $1=$p_addr; //@line 379 "_struct.c"
    var $x1=$x; //@line 379 "_struct.c"
    _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 2, 1, 0); //@line 379 "_struct.c"
    var $2=HEAP[$x]; //@line 380 "_struct.c"
    var $3=($2); //@line 380 "_struct.c"
    var $4=_PyInt_FromLong($3); //@line 380 "_struct.c"
    $0=$4; //@line 380 "_struct.c"
    var $5=$0; //@line 380 "_struct.c"
    $retval=$5; //@line 380 "_struct.c"
    var $retval2=$retval; //@line 380 "_struct.c"
    STACKTOP = __stackBase__;
    return $retval2; //@line 380 "_struct.c"
  }
  

  function _nu_int($p, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
  
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    var $x=__stackBase__;
    $p_addr=$p;
    $f_addr=$f;
    var $1=$p_addr; //@line 387 "_struct.c"
    var $x1=$x; //@line 387 "_struct.c"
    _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 4, 1, 0); //@line 387 "_struct.c"
    var $2=HEAP[$x]; //@line 388 "_struct.c"
    var $3=_PyInt_FromLong($2); //@line 388 "_struct.c"
    $0=$3; //@line 388 "_struct.c"
    var $4=$0; //@line 388 "_struct.c"
    $retval=$4; //@line 388 "_struct.c"
    var $retval2=$retval; //@line 388 "_struct.c"
    STACKTOP = __stackBase__;
    return $retval2; //@line 388 "_struct.c"
  }
  

  function _nu_uint($p, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $p_addr=$p;
        $f_addr=$f;
        var $1=$p_addr; //@line 395 "_struct.c"
        var $x1=$x; //@line 395 "_struct.c"
        _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 4, 1, 0); //@line 395 "_struct.c"
        var $2=HEAP[$x]; //@line 399 "_struct.c"
        var $3=($2) >= 0; //@line 399 "_struct.c"
        var $4=HEAP[$x]; //@line 400 "_struct.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 399 "_struct.c"
      case 1: // $bb
        var $5=_PyInt_FromLong($4); //@line 400 "_struct.c"
        $0=$5; //@line 400 "_struct.c"
        __label__ = 3; break; //@line 400 "_struct.c"
      case 2: // $bb2
        var $6=_PyLong_FromUnsignedLong($4); //@line 401 "_struct.c"
        $0=$6; //@line 401 "_struct.c"
        __label__ = 3; break; //@line 401 "_struct.c"
      case 3: // $bb3
        var $7=$0; //@line 400 "_struct.c"
        $retval=$7; //@line 400 "_struct.c"
        var $retval4=$retval; //@line 400 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 400 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nu_long($p, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
  
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    var $x=__stackBase__;
    $p_addr=$p;
    $f_addr=$f;
    var $1=$p_addr; //@line 409 "_struct.c"
    var $x1=$x; //@line 409 "_struct.c"
    _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 4, 1, 0); //@line 409 "_struct.c"
    var $2=HEAP[$x]; //@line 410 "_struct.c"
    var $3=_PyInt_FromLong($2); //@line 410 "_struct.c"
    $0=$3; //@line 410 "_struct.c"
    var $4=$0; //@line 410 "_struct.c"
    $retval=$4; //@line 410 "_struct.c"
    var $retval2=$retval; //@line 410 "_struct.c"
    STACKTOP = __stackBase__;
    return $retval2; //@line 410 "_struct.c"
  }
  

  function _nu_ulong($p, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $p_addr=$p;
        $f_addr=$f;
        var $1=$p_addr; //@line 417 "_struct.c"
        var $x1=$x; //@line 417 "_struct.c"
        _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 4, 1, 0); //@line 417 "_struct.c"
        var $2=HEAP[$x]; //@line 418 "_struct.c"
        var $3=($2) >= 0; //@line 418 "_struct.c"
        var $4=HEAP[$x]; //@line 419 "_struct.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 418 "_struct.c"
      case 1: // $bb
        var $5=_PyInt_FromLong($4); //@line 419 "_struct.c"
        $0=$5; //@line 419 "_struct.c"
        __label__ = 3; break; //@line 419 "_struct.c"
      case 2: // $bb2
        var $6=_PyLong_FromUnsignedLong($4); //@line 420 "_struct.c"
        $0=$6; //@line 420 "_struct.c"
        __label__ = 3; break; //@line 420 "_struct.c"
      case 3: // $bb3
        var $7=$0; //@line 419 "_struct.c"
        $retval=$7; //@line 419 "_struct.c"
        var $retval4=$retval; //@line 419 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 419 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nu_longlong($p, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $p_addr=$p;
        $f_addr=$f;
        var $1=$p_addr; //@line 432 "_struct.c"
        var $x1=$x; //@line 432 "_struct.c"
        _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 8, 1, 0); //@line 432 "_struct.c"
        var $2=HEAP[$x]; //@line 433 "_struct.c"
        var $3=($2) >= -2147483648; //@line 433 "_struct.c"
        var $4=HEAP[$x]; //@line 433 "_struct.c"
        var $5=($4) <= 2147483647; //@line 433 "_struct.c"
        var $or_cond=($3) & ($5);
        var $6=HEAP[$x]; //@line 434 "_struct.c"
        if ($or_cond) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 433 "_struct.c"
      case 1: // $bb2
        var $7=((($6)) & 4294967295); //@line 434 "_struct.c"
        var $8=_PyInt_FromLong($7); //@line 434 "_struct.c"
        $0=$8; //@line 434 "_struct.c"
        __label__ = 3; break; //@line 434 "_struct.c"
      case 2: // $bb3
        var $9=_PyLong_FromLongLong($6); //@line 435 "_struct.c"
        $0=$9; //@line 435 "_struct.c"
        __label__ = 3; break; //@line 435 "_struct.c"
      case 3: // $bb4
        var $10=$0; //@line 434 "_struct.c"
        $retval=$10; //@line 434 "_struct.c"
        var $retval5=$retval; //@line 434 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 434 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nu_ulonglong($p, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $p_addr=$p;
        $f_addr=$f;
        var $1=$p_addr; //@line 442 "_struct.c"
        var $x1=$x; //@line 442 "_struct.c"
        _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 8, 1, 0); //@line 442 "_struct.c"
        var $2=HEAP[$x]; //@line 443 "_struct.c"
        var $3=($2) <= 2147483647; //@line 443 "_struct.c"
        var $4=HEAP[$x]; //@line 444 "_struct.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 443 "_struct.c"
      case 1: // $bb
        var $5=((($4)) & 4294967295); //@line 444 "_struct.c"
        var $6=_PyInt_FromLong($5); //@line 444 "_struct.c"
        $0=$6; //@line 444 "_struct.c"
        __label__ = 3; break; //@line 444 "_struct.c"
      case 2: // $bb2
        var $7=_PyLong_FromUnsignedLongLong($4); //@line 445 "_struct.c"
        $0=$7; //@line 445 "_struct.c"
        __label__ = 3; break; //@line 445 "_struct.c"
      case 3: // $bb3
        var $8=$0; //@line 444 "_struct.c"
        $retval=$8; //@line 444 "_struct.c"
        var $retval4=$retval; //@line 444 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 444 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nu_bool($p, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 1; _memset(__stackBase__, 0, 1);
    var __label__;
  
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    var $x=__stackBase__;
    $p_addr=$p;
    $f_addr=$f;
    var $1=$p_addr; //@line 454 "_struct.c"
    _llvm_memcpy_p0i8_p0i8_i32($x, $1, 1, 1, 0); //@line 454 "_struct.c"
    var $2=HEAP[$x]; //@line 455 "_struct.c"
    var $3=($2); //@line 455 "_struct.c"
    var $4=_PyBool_FromLong($3); //@line 455 "_struct.c"
    $0=$4; //@line 455 "_struct.c"
    var $5=$0; //@line 455 "_struct.c"
    $retval=$5; //@line 455 "_struct.c"
    var $retval1=$retval; //@line 455 "_struct.c"
    STACKTOP = __stackBase__;
    return $retval1; //@line 455 "_struct.c"
  }
  

  function _nu_float($p, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
  
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    var $x=__stackBase__;
    $p_addr=$p;
    $f_addr=$f;
    var $1=$p_addr; //@line 463 "_struct.c"
    var $x1=$x; //@line 463 "_struct.c"
    _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 4, 1, 0); //@line 463 "_struct.c"
    var $2=HEAP[$x]; //@line 464 "_struct.c"
    var $3=($2); //@line 464 "_struct.c"
    var $4=_PyFloat_FromDouble($3); //@line 464 "_struct.c"
    $0=$4; //@line 464 "_struct.c"
    var $5=$0; //@line 464 "_struct.c"
    $retval=$5; //@line 464 "_struct.c"
    var $retval2=$retval; //@line 464 "_struct.c"
    STACKTOP = __stackBase__;
    return $retval2; //@line 464 "_struct.c"
  }
  

  function _nu_double($p, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
  
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    var $x=__stackBase__;
    $p_addr=$p;
    $f_addr=$f;
    var $1=$p_addr; //@line 471 "_struct.c"
    var $x1=$x; //@line 471 "_struct.c"
    _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 8, 1, 0); //@line 471 "_struct.c"
    var $2=HEAP[$x]; //@line 472 "_struct.c"
    var $3=_PyFloat_FromDouble($2); //@line 472 "_struct.c"
    $0=$3; //@line 472 "_struct.c"
    var $4=$0; //@line 472 "_struct.c"
    $retval=$4; //@line 472 "_struct.c"
    var $retval2=$retval; //@line 472 "_struct.c"
    STACKTOP = __stackBase__;
    return $retval2; //@line 472 "_struct.c"
  }
  

  function _nu_void_p($p, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
  
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    var $x=__stackBase__;
    $p_addr=$p;
    $f_addr=$f;
    var $1=$p_addr; //@line 479 "_struct.c"
    var $x1=$x; //@line 479 "_struct.c"
    _llvm_memcpy_p0i8_p0i8_i32($x1, $1, 4, 1, 0); //@line 479 "_struct.c"
    var $2=HEAP[$x]; //@line 480 "_struct.c"
    var $3=_PyLong_FromVoidPtr($2); //@line 480 "_struct.c"
    $0=$3; //@line 480 "_struct.c"
    var $4=$0; //@line 480 "_struct.c"
    $retval=$4; //@line 480 "_struct.c"
    var $retval2=$retval; //@line 480 "_struct.c"
    STACKTOP = __stackBase__;
    return $retval2; //@line 480 "_struct.c"
  }
  

  function _np_byte($p, $v, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 487 "_struct.c"
        var $2=_get_long($1, $x); //@line 487 "_struct.c"
        var $3=($2) < 0; //@line 487 "_struct.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 487 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 488 "_struct.c"
        __label__ = 5; break; //@line 488 "_struct.c"
      case 2: // $bb1
        var $4=HEAP[$x]; //@line 489 "_struct.c"
        var $5=($4) < -128; //@line 489 "_struct.c"
        var $6=HEAP[$x]; //@line 489 "_struct.c"
        var $7=($6) > 127; //@line 489 "_struct.c"
        var $or_cond=($5) | ($7);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 489 "_struct.c"
      case 3: // $bb3
        var $8=HEAP[_StructError]; //@line 490 "_struct.c"
        _PyErr_SetString($8, __str13); //@line 490 "_struct.c"
        $0=-1; //@line 492 "_struct.c"
        __label__ = 5; break; //@line 492 "_struct.c"
      case 4: // $bb4
        var $9=HEAP[$x]; //@line 494 "_struct.c"
        var $10=((($9)) & 255); //@line 494 "_struct.c"
        var $11=$p_addr; //@line 494 "_struct.c"
        HEAP[$11]=$10; //@line 494 "_struct.c"
        $0=0; //@line 495 "_struct.c"
        __label__ = 5; break; //@line 495 "_struct.c"
      case 5: // $bb5
        var $12=$0; //@line 488 "_struct.c"
        $retval=$12; //@line 488 "_struct.c"
        var $retval6=$retval; //@line 488 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 488 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _np_ubyte($p, $v, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 502 "_struct.c"
        var $2=_get_long($1, $x); //@line 502 "_struct.c"
        var $3=($2) < 0; //@line 502 "_struct.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 502 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 503 "_struct.c"
        __label__ = 5; break; //@line 503 "_struct.c"
      case 2: // $bb1
        var $4=HEAP[$x]; //@line 504 "_struct.c"
        var $5=($4) < 0; //@line 504 "_struct.c"
        var $6=HEAP[$x]; //@line 504 "_struct.c"
        var $7=($6) > 255; //@line 504 "_struct.c"
        var $or_cond=($5) | ($7);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 504 "_struct.c"
      case 3: // $bb3
        var $8=HEAP[_StructError]; //@line 505 "_struct.c"
        _PyErr_SetString($8, __str14); //@line 505 "_struct.c"
        $0=-1; //@line 507 "_struct.c"
        __label__ = 5; break; //@line 507 "_struct.c"
      case 4: // $bb4
        var $9=HEAP[$x]; //@line 509 "_struct.c"
        var $10=((($9)) & 255); //@line 509 "_struct.c"
        var $11=$p_addr; //@line 509 "_struct.c"
        HEAP[$11]=$10; //@line 509 "_struct.c"
        $0=0; //@line 510 "_struct.c"
        __label__ = 5; break; //@line 510 "_struct.c"
      case 5: // $bb5
        var $12=$0; //@line 503 "_struct.c"
        $retval=$12; //@line 503 "_struct.c"
        var $retval6=$retval; //@line 503 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 503 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _np_char($p, $v, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 516 "_struct.c"
        var $2=$1+4; //@line 516 "_struct.c"
        var $3=HEAP[$2]; //@line 516 "_struct.c"
        var $4=$3+84; //@line 516 "_struct.c"
        var $5=HEAP[$4]; //@line 516 "_struct.c"
        var $6=($5) & 134217728; //@line 516 "_struct.c"
        var $7=($6)==0; //@line 516 "_struct.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 516 "_struct.c"
      case 1: // $bb
        var $8=$v_addr; //@line 516 "_struct.c"
        var $9=_PyString_Size($8); //@line 516 "_struct.c"
        var $10=($9)!=1; //@line 516 "_struct.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 516 "_struct.c"
      case 2: // $bb1
        var $11=HEAP[_StructError]; //@line 517 "_struct.c"
        _PyErr_SetString($11, __str15); //@line 517 "_struct.c"
        $0=-1; //@line 519 "_struct.c"
        __label__ = 4; break; //@line 519 "_struct.c"
      case 3: // $bb2
        var $12=$v_addr; //@line 521 "_struct.c"
        var $13=_PyString_AsString($12); //@line 521 "_struct.c"
        var $14=HEAP[$13]; //@line 521 "_struct.c"
        var $15=$p_addr; //@line 521 "_struct.c"
        HEAP[$15]=$14; //@line 521 "_struct.c"
        $0=0; //@line 522 "_struct.c"
        __label__ = 4; break; //@line 522 "_struct.c"
      case 4: // $bb3
        var $16=$0; //@line 519 "_struct.c"
        $retval=$16; //@line 519 "_struct.c"
        var $retval4=$retval; //@line 519 "_struct.c"
        ;
        return $retval4; //@line 519 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _np_short($p, $v, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 6; _memset(__stackBase__, 0, 6);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        var $y=__stackBase__+4;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 530 "_struct.c"
        var $2=_get_long($1, $x); //@line 530 "_struct.c"
        var $3=($2) < 0; //@line 530 "_struct.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 530 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 531 "_struct.c"
        __label__ = 5; break; //@line 531 "_struct.c"
      case 2: // $bb1
        var $4=HEAP[$x]; //@line 532 "_struct.c"
        var $5=($4) < -32768; //@line 532 "_struct.c"
        var $6=HEAP[$x]; //@line 532 "_struct.c"
        var $7=($6) > 32767; //@line 532 "_struct.c"
        var $or_cond=($5) | ($7);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 532 "_struct.c"
      case 3: // $bb3
        var $8=HEAP[_StructError]; //@line 533 "_struct.c"
        _PyErr_SetString($8, __str16); //@line 533 "_struct.c"
        $0=-1; //@line 536 "_struct.c"
        __label__ = 5; break; //@line 536 "_struct.c"
      case 4: // $bb4
        var $9=HEAP[$x]; //@line 538 "_struct.c"
        var $10=((($9)) & 65535); //@line 538 "_struct.c"
        HEAP[$y]=$10; //@line 538 "_struct.c"
        var $11=$p_addr; //@line 539 "_struct.c"
        var $y5=$y; //@line 539 "_struct.c"
        _llvm_memcpy_p0i8_p0i8_i32($11, $y5, 2, 1, 0); //@line 539 "_struct.c"
        $0=0; //@line 540 "_struct.c"
        __label__ = 5; break; //@line 540 "_struct.c"
      case 5: // $bb6
        var $12=$0; //@line 531 "_struct.c"
        $retval=$12; //@line 531 "_struct.c"
        var $retval7=$retval; //@line 531 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 531 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _np_ushort($p, $v, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 6; _memset(__stackBase__, 0, 6);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        var $y=__stackBase__+4;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 548 "_struct.c"
        var $2=_get_long($1, $x); //@line 548 "_struct.c"
        var $3=($2) < 0; //@line 548 "_struct.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 548 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 549 "_struct.c"
        __label__ = 5; break; //@line 549 "_struct.c"
      case 2: // $bb1
        var $4=HEAP[$x]; //@line 550 "_struct.c"
        var $5=($4) < 0; //@line 550 "_struct.c"
        var $6=HEAP[$x]; //@line 550 "_struct.c"
        var $7=($6) > 65535; //@line 550 "_struct.c"
        var $or_cond=($5) | ($7);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 550 "_struct.c"
      case 3: // $bb3
        var $8=HEAP[_StructError]; //@line 551 "_struct.c"
        _PyErr_SetString($8, __str17); //@line 551 "_struct.c"
        $0=-1; //@line 553 "_struct.c"
        __label__ = 5; break; //@line 553 "_struct.c"
      case 4: // $bb4
        var $9=HEAP[$x]; //@line 555 "_struct.c"
        var $10=((($9)) & 65535); //@line 555 "_struct.c"
        HEAP[$y]=$10; //@line 555 "_struct.c"
        var $11=$p_addr; //@line 556 "_struct.c"
        var $y5=$y; //@line 556 "_struct.c"
        _llvm_memcpy_p0i8_p0i8_i32($11, $y5, 2, 1, 0); //@line 556 "_struct.c"
        $0=0; //@line 557 "_struct.c"
        __label__ = 5; break; //@line 557 "_struct.c"
      case 5: // $bb6
        var $12=$0; //@line 549 "_struct.c"
        $retval=$12; //@line 549 "_struct.c"
        var $retval7=$retval; //@line 549 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 549 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _np_int($p, $v, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        var $y=__stackBase__+4;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 565 "_struct.c"
        var $2=_get_long($1, $x); //@line 565 "_struct.c"
        var $3=($2) < 0; //@line 565 "_struct.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 565 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 566 "_struct.c"
        __label__ = 3; break; //@line 566 "_struct.c"
      case 2: // $bb1
        var $4=HEAP[$x]; //@line 571 "_struct.c"
        HEAP[$y]=$4; //@line 571 "_struct.c"
        var $5=$p_addr; //@line 572 "_struct.c"
        var $y2=$y; //@line 572 "_struct.c"
        _llvm_memcpy_p0i8_p0i8_i32($5, $y2, 4, 1, 0); //@line 572 "_struct.c"
        $0=0; //@line 573 "_struct.c"
        __label__ = 3; break; //@line 573 "_struct.c"
      case 3: // $bb3
        var $6=$0; //@line 566 "_struct.c"
        $retval=$6; //@line 566 "_struct.c"
        var $retval4=$retval; //@line 566 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 566 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _np_uint($p, $v, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        var $y=__stackBase__+4;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 581 "_struct.c"
        var $2=_get_ulong($1, $x); //@line 581 "_struct.c"
        var $3=($2) < 0; //@line 581 "_struct.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 581 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 582 "_struct.c"
        __label__ = 3; break; //@line 582 "_struct.c"
      case 2: // $bb1
        var $4=HEAP[$x]; //@line 583 "_struct.c"
        HEAP[$y]=$4; //@line 583 "_struct.c"
        var $5=$p_addr; //@line 588 "_struct.c"
        var $y2=$y; //@line 588 "_struct.c"
        _llvm_memcpy_p0i8_p0i8_i32($5, $y2, 4, 1, 0); //@line 588 "_struct.c"
        $0=0; //@line 589 "_struct.c"
        __label__ = 3; break; //@line 589 "_struct.c"
      case 3: // $bb3
        var $6=$0; //@line 582 "_struct.c"
        $retval=$6; //@line 582 "_struct.c"
        var $retval4=$retval; //@line 582 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 582 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _np_long($p, $v, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 596 "_struct.c"
        var $2=_get_long($1, $x); //@line 596 "_struct.c"
        var $3=($2) < 0; //@line 596 "_struct.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 596 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 597 "_struct.c"
        __label__ = 3; break; //@line 597 "_struct.c"
      case 2: // $bb1
        var $4=$p_addr; //@line 598 "_struct.c"
        var $x2=$x; //@line 598 "_struct.c"
        _llvm_memcpy_p0i8_p0i8_i32($4, $x2, 4, 1, 0); //@line 598 "_struct.c"
        $0=0; //@line 599 "_struct.c"
        __label__ = 3; break; //@line 599 "_struct.c"
      case 3: // $bb3
        var $5=$0; //@line 597 "_struct.c"
        $retval=$5; //@line 597 "_struct.c"
        var $retval4=$retval; //@line 597 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 597 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _np_ulong($p, $v, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 606 "_struct.c"
        var $2=_get_ulong($1, $x); //@line 606 "_struct.c"
        var $3=($2) < 0; //@line 606 "_struct.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 606 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 607 "_struct.c"
        __label__ = 3; break; //@line 607 "_struct.c"
      case 2: // $bb1
        var $4=$p_addr; //@line 608 "_struct.c"
        var $x2=$x; //@line 608 "_struct.c"
        _llvm_memcpy_p0i8_p0i8_i32($4, $x2, 4, 1, 0); //@line 608 "_struct.c"
        $0=0; //@line 609 "_struct.c"
        __label__ = 3; break; //@line 609 "_struct.c"
      case 3: // $bb3
        var $5=$0; //@line 607 "_struct.c"
        $retval=$5; //@line 607 "_struct.c"
        var $retval4=$retval; //@line 607 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 607 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _np_longlong($p, $v, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 618 "_struct.c"
        var $2=_get_longlong($1, $x); //@line 618 "_struct.c"
        var $3=($2) < 0; //@line 618 "_struct.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 618 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 619 "_struct.c"
        __label__ = 3; break; //@line 619 "_struct.c"
      case 2: // $bb1
        var $4=$p_addr; //@line 620 "_struct.c"
        var $x2=$x; //@line 620 "_struct.c"
        _llvm_memcpy_p0i8_p0i8_i32($4, $x2, 8, 1, 0); //@line 620 "_struct.c"
        $0=0; //@line 621 "_struct.c"
        __label__ = 3; break; //@line 621 "_struct.c"
      case 3: // $bb3
        var $5=$0; //@line 619 "_struct.c"
        $retval=$5; //@line 619 "_struct.c"
        var $retval4=$retval; //@line 619 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 619 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _np_ulonglong($p, $v, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 628 "_struct.c"
        var $2=_get_ulonglong($1, $x); //@line 628 "_struct.c"
        var $3=($2) < 0; //@line 628 "_struct.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 628 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 629 "_struct.c"
        __label__ = 3; break; //@line 629 "_struct.c"
      case 2: // $bb1
        var $4=$p_addr; //@line 630 "_struct.c"
        var $x2=$x; //@line 630 "_struct.c"
        _llvm_memcpy_p0i8_p0i8_i32($4, $x2, 8, 1, 0); //@line 630 "_struct.c"
        $0=0; //@line 631 "_struct.c"
        __label__ = 3; break; //@line 631 "_struct.c"
      case 3: // $bb3
        var $5=$0; //@line 629 "_struct.c"
        $retval=$5; //@line 629 "_struct.c"
        var $retval4=$retval; //@line 629 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 629 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _np_bool($p, $v, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 1; _memset(__stackBase__, 0, 1);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $y;
        var $x=__stackBase__;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 641 "_struct.c"
        var $2=_PyObject_IsTrue($1); //@line 641 "_struct.c"
        $y=$2; //@line 641 "_struct.c"
        var $3=$y; //@line 642 "_struct.c"
        var $4=($3) < 0; //@line 642 "_struct.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 642 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 643 "_struct.c"
        __label__ = 3; break; //@line 643 "_struct.c"
      case 2: // $bb1
        var $5=$y; //@line 644 "_struct.c"
        var $6=($5)!=0; //@line 644 "_struct.c"
        var $7=($6); //@line 644 "_struct.c"
        HEAP[$x]=$7; //@line 644 "_struct.c"
        var $8=$p_addr; //@line 645 "_struct.c"
        _llvm_memcpy_p0i8_p0i8_i32($8, $x, 1, 1, 0); //@line 645 "_struct.c"
        $0=0; //@line 646 "_struct.c"
        __label__ = 3; break; //@line 646 "_struct.c"
      case 3: // $bb2
        var $9=$0; //@line 643 "_struct.c"
        $retval=$9; //@line 643 "_struct.c"
        var $retval3=$retval; //@line 643 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 643 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _np_float($p, $v, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 652 "_struct.c"
        var $2=_PyFloat_AsDouble($1); //@line 652 "_struct.c"
        var $3=($2); //@line 652 "_struct.c"
        HEAP[$x]=$3; //@line 652 "_struct.c"
        var $4=HEAP[$x]; //@line 653 "_struct.c"
        var $5=($4) == -1; //@line 653 "_struct.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 653 "_struct.c"
      case 1: // $bb
        var $6=_PyErr_Occurred(); //@line 653 "_struct.c"
        var $7=($6)!=0; //@line 653 "_struct.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 653 "_struct.c"
      case 2: // $bb1
        var $8=HEAP[_StructError]; //@line 654 "_struct.c"
        _PyErr_SetString($8, __str18); //@line 654 "_struct.c"
        $0=-1; //@line 656 "_struct.c"
        __label__ = 4; break; //@line 656 "_struct.c"
      case 3: // $bb2
        var $9=$p_addr; //@line 658 "_struct.c"
        var $x3=$x; //@line 658 "_struct.c"
        _llvm_memcpy_p0i8_p0i8_i32($9, $x3, 4, 1, 0); //@line 658 "_struct.c"
        $0=0; //@line 659 "_struct.c"
        __label__ = 4; break; //@line 659 "_struct.c"
      case 4: // $bb4
        var $10=$0; //@line 656 "_struct.c"
        $retval=$10; //@line 656 "_struct.c"
        var $retval5=$retval; //@line 656 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 656 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _np_double($p, $v, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 665 "_struct.c"
        var $2=_PyFloat_AsDouble($1); //@line 665 "_struct.c"
        HEAP[$x]=$2; //@line 665 "_struct.c"
        var $3=HEAP[$x]; //@line 666 "_struct.c"
        var $4=($3) == -1; //@line 666 "_struct.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 666 "_struct.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 666 "_struct.c"
        var $6=($5)!=0; //@line 666 "_struct.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 666 "_struct.c"
      case 2: // $bb1
        var $7=HEAP[_StructError]; //@line 667 "_struct.c"
        _PyErr_SetString($7, __str18); //@line 667 "_struct.c"
        $0=-1; //@line 669 "_struct.c"
        __label__ = 4; break; //@line 669 "_struct.c"
      case 3: // $bb2
        var $8=$p_addr; //@line 671 "_struct.c"
        var $x3=$x; //@line 671 "_struct.c"
        _llvm_memcpy_p0i8_p0i8_i32($8, $x3, 8, 1, 0); //@line 671 "_struct.c"
        $0=0; //@line 672 "_struct.c"
        __label__ = 4; break; //@line 672 "_struct.c"
      case 4: // $bb4
        var $9=$0; //@line 669 "_struct.c"
        $retval=$9; //@line 669 "_struct.c"
        var $retval5=$retval; //@line 669 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 669 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _np_void_p($p, $v, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 680 "_struct.c"
        var $2=_get_pylong($1); //@line 680 "_struct.c"
        $v_addr=$2; //@line 680 "_struct.c"
        var $3=$v_addr; //@line 681 "_struct.c"
        var $4=($3)==0; //@line 681 "_struct.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 681 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 682 "_struct.c"
        __label__ = 10; break; //@line 682 "_struct.c"
      case 2: // $bb1
        var $5=$v_addr; //@line 683 "_struct.c"
        var $6=$5+4; //@line 683 "_struct.c"
        var $7=HEAP[$6]; //@line 683 "_struct.c"
        var $8=$7+84; //@line 683 "_struct.c"
        var $9=HEAP[$8]; //@line 683 "_struct.c"
        var $10=($9) & 16777216; //@line 683 "_struct.c"
        var $11=($10)==0; //@line 683 "_struct.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 683 "_struct.c"
      case 3: // $bb2
        ___assert_fail(__str8, __str2, 683, ___PRETTY_FUNCTION___9097); //@line 683 "_struct.c"
        throw "Reached an unreachable!" //@line 683 "_struct.c"
      case 4: // $bb3
        var $12=$v_addr; //@line 684 "_struct.c"
        var $13=_PyLong_AsVoidPtr($12); //@line 684 "_struct.c"
        HEAP[$x]=$13; //@line 684 "_struct.c"
        var $14=$v_addr; //@line 685 "_struct.c"
        var $15=$14; //@line 685 "_struct.c"
        var $16=HEAP[$15]; //@line 685 "_struct.c"
        var $17=($16) - 1; //@line 685 "_struct.c"
        var $18=$v_addr; //@line 685 "_struct.c"
        var $19=$18; //@line 685 "_struct.c"
        HEAP[$19]=$17; //@line 685 "_struct.c"
        var $20=$v_addr; //@line 685 "_struct.c"
        var $21=$20; //@line 685 "_struct.c"
        var $22=HEAP[$21]; //@line 685 "_struct.c"
        var $23=($22)==0; //@line 685 "_struct.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 685 "_struct.c"
      case 5: // $bb4
        var $24=$v_addr; //@line 685 "_struct.c"
        var $25=$24+4; //@line 685 "_struct.c"
        var $26=HEAP[$25]; //@line 685 "_struct.c"
        var $27=$26+24; //@line 685 "_struct.c"
        var $28=HEAP[$27]; //@line 685 "_struct.c"
        var $29=$v_addr; //@line 685 "_struct.c"
        FUNCTION_TABLE[$28]($29); //@line 685 "_struct.c"
        __label__ = 6; break; //@line 685 "_struct.c"
      case 6: // $bb5
        var $30=HEAP[$x]; //@line 686 "_struct.c"
        var $31=($30)==0; //@line 686 "_struct.c"
        if ($31) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 686 "_struct.c"
      case 7: // $bb6
        var $32=_PyErr_Occurred(); //@line 686 "_struct.c"
        var $33=($32)!=0; //@line 686 "_struct.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 686 "_struct.c"
      case 8: // $bb7
        $0=-1; //@line 687 "_struct.c"
        __label__ = 10; break; //@line 687 "_struct.c"
      case 9: // $bb8
        var $34=$p_addr; //@line 688 "_struct.c"
        var $x9=$x; //@line 688 "_struct.c"
        _llvm_memcpy_p0i8_p0i8_i32($34, $x9, 4, 1, 0); //@line 688 "_struct.c"
        $0=0; //@line 689 "_struct.c"
        __label__ = 10; break; //@line 689 "_struct.c"
      case 10: // $bb10
        var $35=$0; //@line 682 "_struct.c"
        $retval=$35; //@line 682 "_struct.c"
        var $retval11=$retval; //@line 682 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 682 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _bu_int($p, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x;
        var $i;
        var $bytes;
        $p_addr=$p;
        $f_addr=$f;
        $x=0; //@line 721 "_struct.c"
        var $1=$f_addr; //@line 722 "_struct.c"
        var $2=$1+4; //@line 722 "_struct.c"
        var $3=HEAP[$2]; //@line 722 "_struct.c"
        $i=$3; //@line 722 "_struct.c"
        var $4=$p_addr; //@line 723 "_struct.c"
        $bytes=$4; //@line 723 "_struct.c"
        __label__ = 1; break; //@line 723 "_struct.c"
      case 1: // $bb
        var $5=$x; //@line 725 "_struct.c"
        var $6=($5) << 8; //@line 725 "_struct.c"
        var $7=$bytes; //@line 725 "_struct.c"
        var $8=HEAP[$7]; //@line 725 "_struct.c"
        var $9=($8); //@line 725 "_struct.c"
        var $10=($9) | ($6); //@line 725 "_struct.c"
        $x=$10; //@line 725 "_struct.c"
        var $11=$bytes; //@line 725 "_struct.c"
        var $12=$11+1; //@line 725 "_struct.c"
        $bytes=$12; //@line 725 "_struct.c"
        var $13=$i; //@line 726 "_struct.c"
        var $14=($13) - 1; //@line 726 "_struct.c"
        $i=$14; //@line 726 "_struct.c"
        var $15=($14) > 0; //@line 726 "_struct.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 726 "_struct.c"
      case 2: // $bb1
        var $16=$f_addr; //@line 728 "_struct.c"
        var $17=$16+4; //@line 728 "_struct.c"
        var $18=HEAP[$17]; //@line 728 "_struct.c"
        var $19=($18) <= 3; //@line 728 "_struct.c"
        if ($19) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 728 "_struct.c"
      case 3: // $bb2
        var $20=$f_addr; //@line 729 "_struct.c"
        var $21=$20+4; //@line 729 "_struct.c"
        var $22=HEAP[$21]; //@line 729 "_struct.c"
        var $23=($22) * 8; //@line 729 "_struct.c"
        var $24=($23) - 1; //@line 729 "_struct.c"
        var $25=1 << ($24); //@line 729 "_struct.c"
        var $26=$x; //@line 729 "_struct.c"
        var $27=($25) & ($26); //@line 729 "_struct.c"
        var $28=0 - ($27); //@line 729 "_struct.c"
        var $29=$x; //@line 729 "_struct.c"
        var $30=($28) | ($29); //@line 729 "_struct.c"
        $x=$30; //@line 729 "_struct.c"
        __label__ = 4; break; //@line 729 "_struct.c"
      case 4: // $bb3
        var $31=$x; //@line 730 "_struct.c"
        var $32=_PyInt_FromLong($31); //@line 730 "_struct.c"
        $0=$32; //@line 730 "_struct.c"
        var $33=$0; //@line 730 "_struct.c"
        $retval=$33; //@line 730 "_struct.c"
        var $retval4=$retval; //@line 730 "_struct.c"
        ;
        return $retval4; //@line 730 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _bu_uint($p, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x;
        var $i;
        var $bytes;
        $p_addr=$p;
        $f_addr=$f;
        $x=0; //@line 736 "_struct.c"
        var $1=$f_addr; //@line 737 "_struct.c"
        var $2=$1+4; //@line 737 "_struct.c"
        var $3=HEAP[$2]; //@line 737 "_struct.c"
        $i=$3; //@line 737 "_struct.c"
        var $4=$p_addr; //@line 738 "_struct.c"
        $bytes=$4; //@line 738 "_struct.c"
        __label__ = 1; break; //@line 738 "_struct.c"
      case 1: // $bb
        var $5=$x; //@line 740 "_struct.c"
        var $6=($5) << 8; //@line 740 "_struct.c"
        var $7=$bytes; //@line 740 "_struct.c"
        var $8=HEAP[$7]; //@line 740 "_struct.c"
        var $9=($8); //@line 740 "_struct.c"
        var $10=($9) | ($6); //@line 740 "_struct.c"
        $x=$10; //@line 740 "_struct.c"
        var $11=$bytes; //@line 740 "_struct.c"
        var $12=$11+1; //@line 740 "_struct.c"
        $bytes=$12; //@line 740 "_struct.c"
        var $13=$i; //@line 741 "_struct.c"
        var $14=($13) - 1; //@line 741 "_struct.c"
        $i=$14; //@line 741 "_struct.c"
        var $15=($14) > 0; //@line 741 "_struct.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 741 "_struct.c"
      case 2: // $bb1
        var $16=$x; //@line 742 "_struct.c"
        var $17=($16) >= 0; //@line 742 "_struct.c"
        var $18=$x; //@line 743 "_struct.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 742 "_struct.c"
      case 3: // $bb2
        var $19=_PyInt_FromLong($18); //@line 743 "_struct.c"
        $0=$19; //@line 743 "_struct.c"
        __label__ = 5; break; //@line 743 "_struct.c"
      case 4: // $bb3
        var $20=_PyLong_FromUnsignedLong($18); //@line 744 "_struct.c"
        $0=$20; //@line 744 "_struct.c"
        __label__ = 5; break; //@line 744 "_struct.c"
      case 5: // $bb4
        var $21=$0; //@line 743 "_struct.c"
        $retval=$21; //@line 743 "_struct.c"
        var $retval5=$retval; //@line 743 "_struct.c"
        ;
        return $retval5; //@line 743 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _bu_longlong($p, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x;
        var $i;
        var $bytes;
        $p_addr=$p;
        $f_addr=$f;
        $x=0; //@line 751 "_struct.c"
        var $1=$f_addr; //@line 752 "_struct.c"
        var $2=$1+4; //@line 752 "_struct.c"
        var $3=HEAP[$2]; //@line 752 "_struct.c"
        $i=$3; //@line 752 "_struct.c"
        var $4=$p_addr; //@line 753 "_struct.c"
        $bytes=$4; //@line 753 "_struct.c"
        __label__ = 1; break; //@line 753 "_struct.c"
      case 1: // $bb
        var $5=$x; //@line 755 "_struct.c"
        var $6=($5)*Math.pow(2,8); //@line 755 "_struct.c"
        var $7=$bytes; //@line 755 "_struct.c"
        var $8=HEAP[$7]; //@line 755 "_struct.c"
        var $9=($8); //@line 755 "_struct.c"
        var $10=Runtime.or64(($9), ($6)); //@line 755 "_struct.c"
        $x=$10; //@line 755 "_struct.c"
        var $11=$bytes; //@line 755 "_struct.c"
        var $12=$11+1; //@line 755 "_struct.c"
        $bytes=$12; //@line 755 "_struct.c"
        var $13=$i; //@line 756 "_struct.c"
        var $14=($13) - 1; //@line 756 "_struct.c"
        $i=$14; //@line 756 "_struct.c"
        var $15=($14) > 0; //@line 756 "_struct.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 756 "_struct.c"
      case 2: // $bb1
        var $16=$f_addr; //@line 758 "_struct.c"
        var $17=$16+4; //@line 758 "_struct.c"
        var $18=HEAP[$17]; //@line 758 "_struct.c"
        var $19=($18) <= 7; //@line 758 "_struct.c"
        if ($19) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 758 "_struct.c"
      case 3: // $bb2
        var $20=$f_addr; //@line 759 "_struct.c"
        var $21=$20+4; //@line 759 "_struct.c"
        var $22=HEAP[$21]; //@line 759 "_struct.c"
        var $23=($22) * 8; //@line 759 "_struct.c"
        var $24=($23) - 1; //@line 759 "_struct.c"
        var $_cast=($24); //@line 759 "_struct.c"
        var $25=1*Math.pow(2,($_cast)); //@line 759 "_struct.c"
        var $26=$x; //@line 759 "_struct.c"
        var $27=Runtime.and64(($25), ($26)); //@line 759 "_struct.c"
        var $28=0 - ($27); //@line 759 "_struct.c"
        var $29=$x; //@line 759 "_struct.c"
        var $30=Runtime.or64(($28), ($29)); //@line 759 "_struct.c"
        $x=$30; //@line 759 "_struct.c"
        __label__ = 4; break; //@line 759 "_struct.c"
      case 4: // $bb3
        var $31=$x; //@line 760 "_struct.c"
        var $32=($31) >= -2147483648; //@line 760 "_struct.c"
        var $33=$x; //@line 760 "_struct.c"
        var $34=($33) <= 2147483647; //@line 760 "_struct.c"
        var $or_cond=($32) & ($34);
        var $35=$x; //@line 761 "_struct.c"
        if ($or_cond) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 760 "_struct.c"
      case 5: // $bb5
        var $36=((($35)) & 4294967295); //@line 761 "_struct.c"
        var $37=_PyInt_FromLong($36); //@line 761 "_struct.c"
        $0=$37; //@line 761 "_struct.c"
        __label__ = 7; break; //@line 761 "_struct.c"
      case 6: // $bb6
        var $38=_PyLong_FromLongLong($35); //@line 762 "_struct.c"
        $0=$38; //@line 762 "_struct.c"
        __label__ = 7; break; //@line 762 "_struct.c"
      case 7: // $bb7
        var $39=$0; //@line 761 "_struct.c"
        $retval=$39; //@line 761 "_struct.c"
        var $retval8=$retval; //@line 761 "_struct.c"
        ;
        return $retval8; //@line 761 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _bu_ulonglong($p, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x;
        var $i;
        var $bytes;
        $p_addr=$p;
        $f_addr=$f;
        $x=0; //@line 775 "_struct.c"
        var $1=$f_addr; //@line 776 "_struct.c"
        var $2=$1+4; //@line 776 "_struct.c"
        var $3=HEAP[$2]; //@line 776 "_struct.c"
        $i=$3; //@line 776 "_struct.c"
        var $4=$p_addr; //@line 777 "_struct.c"
        $bytes=$4; //@line 777 "_struct.c"
        __label__ = 1; break; //@line 777 "_struct.c"
      case 1: // $bb
        var $5=$x; //@line 779 "_struct.c"
        var $6=($5)*Math.pow(2,8); //@line 779 "_struct.c"
        var $7=$bytes; //@line 779 "_struct.c"
        var $8=HEAP[$7]; //@line 779 "_struct.c"
        var $9=($8); //@line 779 "_struct.c"
        var $10=Runtime.or64(($9), ($6)); //@line 779 "_struct.c"
        $x=$10; //@line 779 "_struct.c"
        var $11=$bytes; //@line 779 "_struct.c"
        var $12=$11+1; //@line 779 "_struct.c"
        $bytes=$12; //@line 779 "_struct.c"
        var $13=$i; //@line 780 "_struct.c"
        var $14=($13) - 1; //@line 780 "_struct.c"
        $i=$14; //@line 780 "_struct.c"
        var $15=($14) > 0; //@line 780 "_struct.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 780 "_struct.c"
      case 2: // $bb1
        var $16=$x; //@line 781 "_struct.c"
        var $17=($16) <= 2147483647; //@line 781 "_struct.c"
        var $18=$x; //@line 782 "_struct.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 781 "_struct.c"
      case 3: // $bb2
        var $19=((($18)) & 4294967295); //@line 782 "_struct.c"
        var $20=_PyInt_FromLong($19); //@line 782 "_struct.c"
        $0=$20; //@line 782 "_struct.c"
        __label__ = 5; break; //@line 782 "_struct.c"
      case 4: // $bb3
        var $21=_PyLong_FromUnsignedLongLong($18); //@line 783 "_struct.c"
        $0=$21; //@line 783 "_struct.c"
        __label__ = 5; break; //@line 783 "_struct.c"
      case 5: // $bb4
        var $22=$0; //@line 782 "_struct.c"
        $retval=$22; //@line 782 "_struct.c"
        var $retval5=$retval; //@line 782 "_struct.c"
        ;
        return $retval5; //@line 782 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _bu_float($p, $f) {
    ;
    var __label__;
  
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    $p_addr=$p;
    $f_addr=$f;
    var $1=$p_addr; //@line 795 "_struct.c"
    var $2=_unpack_float($1, 0); //@line 795 "_struct.c"
    $0=$2; //@line 795 "_struct.c"
    var $3=$0; //@line 795 "_struct.c"
    $retval=$3; //@line 795 "_struct.c"
    var $retval1=$retval; //@line 795 "_struct.c"
    ;
    return $retval1; //@line 795 "_struct.c"
  }
  

  function _bu_double($p, $f) {
    ;
    var __label__;
  
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    $p_addr=$p;
    $f_addr=$f;
    var $1=$p_addr; //@line 801 "_struct.c"
    var $2=_unpack_double($1, 0); //@line 801 "_struct.c"
    $0=$2; //@line 801 "_struct.c"
    var $3=$0; //@line 801 "_struct.c"
    $retval=$3; //@line 801 "_struct.c"
    var $retval1=$retval; //@line 801 "_struct.c"
    ;
    return $retval1; //@line 801 "_struct.c"
  }
  

  function _bu_bool($p, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 1; _memset(__stackBase__, 0, 1);
    var __label__;
  
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    var $x=__stackBase__;
    $p_addr=$p;
    $f_addr=$f;
    var $1=$p_addr; //@line 808 "_struct.c"
    _llvm_memcpy_p0i8_p0i8_i32($x, $1, 1, 1, 0); //@line 808 "_struct.c"
    var $2=HEAP[$x]; //@line 809 "_struct.c"
    var $3=($2)!=0; //@line 809 "_struct.c"
    var $4=($3); //@line 809 "_struct.c"
    var $5=_PyBool_FromLong($4); //@line 809 "_struct.c"
    $0=$5; //@line 809 "_struct.c"
    var $6=$0; //@line 809 "_struct.c"
    $retval=$6; //@line 809 "_struct.c"
    var $retval1=$retval; //@line 809 "_struct.c"
    STACKTOP = __stackBase__;
    return $retval1; //@line 809 "_struct.c"
  }
  

  function _bp_int($p, $v, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        var $i;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 817 "_struct.c"
        var $2=_get_long($1, $x); //@line 817 "_struct.c"
        var $3=($2) < 0; //@line 817 "_struct.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 817 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 818 "_struct.c"
        __label__ = 7; break; //@line 818 "_struct.c"
      case 2: // $bb1
        var $4=$f_addr; //@line 819 "_struct.c"
        var $5=$4+4; //@line 819 "_struct.c"
        var $6=HEAP[$5]; //@line 819 "_struct.c"
        $i=$6; //@line 819 "_struct.c"
        var $7=$i; //@line 820 "_struct.c"
        var $8=($7)!=4; //@line 820 "_struct.c"
        var $9=$i; //@line 821 "_struct.c"
        var $10=($9)==2; //@line 821 "_struct.c"
        var $or_cond=($8) & ($10);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 820 "_struct.c"
      case 3: // $bb3
        var $11=HEAP[$x]; //@line 821 "_struct.c"
        var $12=($11) < -32768; //@line 821 "_struct.c"
        var $13=HEAP[$x]; //@line 821 "_struct.c"
        var $14=($13) > 32767; //@line 821 "_struct.c"
        var $or_cond3=($12) | ($14);
        if ($or_cond3) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 821 "_struct.c"
      case 4: // $bb5
        var $15=$f_addr; //@line 822 "_struct.c"
        var $16=__range_error($15, 0); //@line 822 "_struct.c"
        $0=$16; //@line 822 "_struct.c"
        __label__ = 7; break; //@line 822 "_struct.c"
      case 5: // $bb6
        var $17=$i; //@line 829 "_struct.c"
        var $18=($17) - 1; //@line 829 "_struct.c"
        $i=$18; //@line 829 "_struct.c"
        var $19=HEAP[$x]; //@line 829 "_struct.c"
        var $20=((($19)) & 255); //@line 829 "_struct.c"
        var $21=$p_addr; //@line 829 "_struct.c"
        var $22=$i; //@line 829 "_struct.c"
        var $23=$21+$22; //@line 829 "_struct.c"
        HEAP[$23]=$20; //@line 829 "_struct.c"
        var $24=HEAP[$x]; //@line 830 "_struct.c"
        var $25=($24) >> 8; //@line 830 "_struct.c"
        HEAP[$x]=$25; //@line 830 "_struct.c"
        var $26=$i; //@line 831 "_struct.c"
        var $27=($26) > 0; //@line 831 "_struct.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 831 "_struct.c"
      case 6: // $bb7
        $0=0; //@line 832 "_struct.c"
        __label__ = 7; break; //@line 832 "_struct.c"
      case 7: // $bb8
        var $28=$0; //@line 818 "_struct.c"
        $retval=$28; //@line 818 "_struct.c"
        var $retval9=$retval; //@line 818 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 818 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _bp_uint($p, $v, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        var $i;
        var $maxint;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 840 "_struct.c"
        var $2=_get_ulong($1, $x); //@line 840 "_struct.c"
        var $3=($2) < 0; //@line 840 "_struct.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 840 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 841 "_struct.c"
        __label__ = 7; break; //@line 841 "_struct.c"
      case 2: // $bb1
        var $4=$f_addr; //@line 842 "_struct.c"
        var $5=$4+4; //@line 842 "_struct.c"
        var $6=HEAP[$5]; //@line 842 "_struct.c"
        $i=$6; //@line 842 "_struct.c"
        var $7=$i; //@line 843 "_struct.c"
        var $8=($7)!=4; //@line 843 "_struct.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 843 "_struct.c"
      case 3: // $bb2
        $maxint=1; //@line 844 "_struct.c"
        var $9=$i; //@line 845 "_struct.c"
        var $10=($9) * 8; //@line 845 "_struct.c"
        var $11=$maxint; //@line 845 "_struct.c"
        var $12=($11) << ($10); //@line 845 "_struct.c"
        $maxint=$12; //@line 845 "_struct.c"
        var $13=HEAP[$x]; //@line 846 "_struct.c"
        var $14=$maxint; //@line 846 "_struct.c"
        var $15=($13) >= ($14); //@line 846 "_struct.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 846 "_struct.c"
      case 4: // $bb3
        var $16=$f_addr; //@line 847 "_struct.c"
        var $17=__range_error($16, 1); //@line 847 "_struct.c"
        $0=$17; //@line 847 "_struct.c"
        __label__ = 7; break; //@line 847 "_struct.c"
      case 5: // $bb4
        var $18=$i; //@line 850 "_struct.c"
        var $19=($18) - 1; //@line 850 "_struct.c"
        $i=$19; //@line 850 "_struct.c"
        var $20=HEAP[$x]; //@line 850 "_struct.c"
        var $21=((($20)) & 255); //@line 850 "_struct.c"
        var $22=$p_addr; //@line 850 "_struct.c"
        var $23=$i; //@line 850 "_struct.c"
        var $24=$22+$23; //@line 850 "_struct.c"
        HEAP[$24]=$21; //@line 850 "_struct.c"
        var $25=HEAP[$x]; //@line 851 "_struct.c"
        var $26=($25) >>> 8; //@line 851 "_struct.c"
        HEAP[$x]=$26; //@line 851 "_struct.c"
        var $27=$i; //@line 852 "_struct.c"
        var $28=($27) > 0; //@line 852 "_struct.c"
        if ($28) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 852 "_struct.c"
      case 6: // $bb5
        $0=0; //@line 853 "_struct.c"
        __label__ = 7; break; //@line 853 "_struct.c"
      case 7: // $bb6
        var $29=$0; //@line 841 "_struct.c"
        $retval=$29; //@line 841 "_struct.c"
        var $retval7=$retval; //@line 841 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 841 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _bp_longlong($p, $v, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $res;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 860 "_struct.c"
        var $2=_get_pylong($1); //@line 860 "_struct.c"
        $v_addr=$2; //@line 860 "_struct.c"
        var $3=$v_addr; //@line 861 "_struct.c"
        var $4=($3)==0; //@line 861 "_struct.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 861 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 862 "_struct.c"
        __label__ = 5; break; //@line 862 "_struct.c"
      case 2: // $bb1
        var $5=$p_addr; //@line 863 "_struct.c"
        var $6=$v_addr; //@line 863 "_struct.c"
        var $7=$6; //@line 863 "_struct.c"
        var $8=__PyLong_AsByteArray($7, $5, 8, 0, 1); //@line 863 "_struct.c"
        $res=$8; //@line 863 "_struct.c"
        var $9=$v_addr; //@line 868 "_struct.c"
        var $10=$9; //@line 868 "_struct.c"
        var $11=HEAP[$10]; //@line 868 "_struct.c"
        var $12=($11) - 1; //@line 868 "_struct.c"
        var $13=$v_addr; //@line 868 "_struct.c"
        var $14=$13; //@line 868 "_struct.c"
        HEAP[$14]=$12; //@line 868 "_struct.c"
        var $15=$v_addr; //@line 868 "_struct.c"
        var $16=$15; //@line 868 "_struct.c"
        var $17=HEAP[$16]; //@line 868 "_struct.c"
        var $18=($17)==0; //@line 868 "_struct.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 868 "_struct.c"
      case 3: // $bb2
        var $19=$v_addr; //@line 868 "_struct.c"
        var $20=$19+4; //@line 868 "_struct.c"
        var $21=HEAP[$20]; //@line 868 "_struct.c"
        var $22=$21+24; //@line 868 "_struct.c"
        var $23=HEAP[$22]; //@line 868 "_struct.c"
        var $24=$v_addr; //@line 868 "_struct.c"
        FUNCTION_TABLE[$23]($24); //@line 868 "_struct.c"
        __label__ = 4; break; //@line 868 "_struct.c"
      case 4: // $bb3
        var $25=$res; //@line 869 "_struct.c"
        $0=$25; //@line 869 "_struct.c"
        __label__ = 5; break; //@line 869 "_struct.c"
      case 5: // $bb4
        var $26=$0; //@line 862 "_struct.c"
        $retval=$26; //@line 862 "_struct.c"
        var $retval5=$retval; //@line 862 "_struct.c"
        ;
        return $retval5; //@line 862 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _bp_ulonglong($p, $v, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $res;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 876 "_struct.c"
        var $2=_get_pylong($1); //@line 876 "_struct.c"
        $v_addr=$2; //@line 876 "_struct.c"
        var $3=$v_addr; //@line 877 "_struct.c"
        var $4=($3)==0; //@line 877 "_struct.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 877 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 878 "_struct.c"
        __label__ = 5; break; //@line 878 "_struct.c"
      case 2: // $bb1
        var $5=$p_addr; //@line 879 "_struct.c"
        var $6=$v_addr; //@line 879 "_struct.c"
        var $7=$6; //@line 879 "_struct.c"
        var $8=__PyLong_AsByteArray($7, $5, 8, 0, 0); //@line 879 "_struct.c"
        $res=$8; //@line 879 "_struct.c"
        var $9=$v_addr; //@line 884 "_struct.c"
        var $10=$9; //@line 884 "_struct.c"
        var $11=HEAP[$10]; //@line 884 "_struct.c"
        var $12=($11) - 1; //@line 884 "_struct.c"
        var $13=$v_addr; //@line 884 "_struct.c"
        var $14=$13; //@line 884 "_struct.c"
        HEAP[$14]=$12; //@line 884 "_struct.c"
        var $15=$v_addr; //@line 884 "_struct.c"
        var $16=$15; //@line 884 "_struct.c"
        var $17=HEAP[$16]; //@line 884 "_struct.c"
        var $18=($17)==0; //@line 884 "_struct.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 884 "_struct.c"
      case 3: // $bb2
        var $19=$v_addr; //@line 884 "_struct.c"
        var $20=$19+4; //@line 884 "_struct.c"
        var $21=HEAP[$20]; //@line 884 "_struct.c"
        var $22=$21+24; //@line 884 "_struct.c"
        var $23=HEAP[$22]; //@line 884 "_struct.c"
        var $24=$v_addr; //@line 884 "_struct.c"
        FUNCTION_TABLE[$23]($24); //@line 884 "_struct.c"
        __label__ = 4; break; //@line 884 "_struct.c"
      case 4: // $bb3
        var $25=$res; //@line 885 "_struct.c"
        $0=$25; //@line 885 "_struct.c"
        __label__ = 5; break; //@line 885 "_struct.c"
      case 5: // $bb4
        var $26=$0; //@line 878 "_struct.c"
        $retval=$26; //@line 878 "_struct.c"
        var $retval5=$retval; //@line 878 "_struct.c"
        ;
        return $retval5; //@line 878 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _bp_float($p, $v, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 891 "_struct.c"
        var $2=_PyFloat_AsDouble($1); //@line 891 "_struct.c"
        $x=$2; //@line 891 "_struct.c"
        var $3=$x; //@line 892 "_struct.c"
        var $4=($3) == -1; //@line 892 "_struct.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 892 "_struct.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 892 "_struct.c"
        var $6=($5)!=0; //@line 892 "_struct.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 892 "_struct.c"
      case 2: // $bb1
        var $7=HEAP[_StructError]; //@line 893 "_struct.c"
        _PyErr_SetString($7, __str18); //@line 893 "_struct.c"
        $0=-1; //@line 895 "_struct.c"
        __label__ = 4; break; //@line 895 "_struct.c"
      case 3: // $bb2
        var $8=$p_addr; //@line 897 "_struct.c"
        var $9=$x; //@line 897 "_struct.c"
        var $10=__PyFloat_Pack4($9, $8, 0); //@line 897 "_struct.c"
        $0=$10; //@line 897 "_struct.c"
        __label__ = 4; break; //@line 897 "_struct.c"
      case 4: // $bb3
        var $11=$0; //@line 895 "_struct.c"
        $retval=$11; //@line 895 "_struct.c"
        var $retval4=$retval; //@line 895 "_struct.c"
        ;
        return $retval4; //@line 895 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _bp_double($p, $v, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 903 "_struct.c"
        var $2=_PyFloat_AsDouble($1); //@line 903 "_struct.c"
        $x=$2; //@line 903 "_struct.c"
        var $3=$x; //@line 904 "_struct.c"
        var $4=($3) == -1; //@line 904 "_struct.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 904 "_struct.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 904 "_struct.c"
        var $6=($5)!=0; //@line 904 "_struct.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 904 "_struct.c"
      case 2: // $bb1
        var $7=HEAP[_StructError]; //@line 905 "_struct.c"
        _PyErr_SetString($7, __str18); //@line 905 "_struct.c"
        $0=-1; //@line 907 "_struct.c"
        __label__ = 4; break; //@line 907 "_struct.c"
      case 3: // $bb2
        var $8=$p_addr; //@line 909 "_struct.c"
        var $9=$x; //@line 909 "_struct.c"
        var $10=__PyFloat_Pack8($9, $8, 0); //@line 909 "_struct.c"
        $0=$10; //@line 909 "_struct.c"
        __label__ = 4; break; //@line 909 "_struct.c"
      case 4: // $bb3
        var $11=$0; //@line 907 "_struct.c"
        $retval=$11; //@line 907 "_struct.c"
        var $retval4=$retval; //@line 907 "_struct.c"
        ;
        return $retval4; //@line 907 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _bp_bool($p, $v, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $y;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 916 "_struct.c"
        var $2=_PyObject_IsTrue($1); //@line 916 "_struct.c"
        $y=$2; //@line 916 "_struct.c"
        var $3=$y; //@line 917 "_struct.c"
        var $4=($3) < 0; //@line 917 "_struct.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 917 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 918 "_struct.c"
        __label__ = 3; break; //@line 918 "_struct.c"
      case 2: // $bb1
        var $5=$y; //@line 919 "_struct.c"
        var $6=((($5)) & 255); //@line 919 "_struct.c"
        var $7=$p_addr; //@line 919 "_struct.c"
        HEAP[$7]=$6; //@line 919 "_struct.c"
        $0=0; //@line 920 "_struct.c"
        __label__ = 3; break; //@line 920 "_struct.c"
      case 3: // $bb2
        var $8=$0; //@line 918 "_struct.c"
        $retval=$8; //@line 918 "_struct.c"
        var $retval3=$retval; //@line 918 "_struct.c"
        ;
        return $retval3; //@line 918 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _lu_int($p, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x;
        var $i;
        var $bytes;
        $p_addr=$p;
        $f_addr=$f;
        $x=0; //@line 949 "_struct.c"
        var $1=$f_addr; //@line 950 "_struct.c"
        var $2=$1+4; //@line 950 "_struct.c"
        var $3=HEAP[$2]; //@line 950 "_struct.c"
        $i=$3; //@line 950 "_struct.c"
        var $4=$p_addr; //@line 951 "_struct.c"
        $bytes=$4; //@line 951 "_struct.c"
        __label__ = 1; break; //@line 951 "_struct.c"
      case 1: // $bb
        var $5=$x; //@line 953 "_struct.c"
        var $6=($5) << 8; //@line 953 "_struct.c"
        var $7=$i; //@line 953 "_struct.c"
        var $8=($7) - 1; //@line 953 "_struct.c"
        $i=$8; //@line 953 "_struct.c"
        var $9=$bytes; //@line 953 "_struct.c"
        var $10=$9+$8; //@line 953 "_struct.c"
        var $11=HEAP[$10]; //@line 953 "_struct.c"
        var $12=($11); //@line 953 "_struct.c"
        var $13=($12) | ($6); //@line 953 "_struct.c"
        $x=$13; //@line 953 "_struct.c"
        var $14=($8) > 0; //@line 954 "_struct.c"
        if ($14) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 954 "_struct.c"
      case 2: // $bb1
        var $15=$f_addr; //@line 956 "_struct.c"
        var $16=$15+4; //@line 956 "_struct.c"
        var $17=HEAP[$16]; //@line 956 "_struct.c"
        var $18=($17) <= 3; //@line 956 "_struct.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 956 "_struct.c"
      case 3: // $bb2
        var $19=$f_addr; //@line 957 "_struct.c"
        var $20=$19+4; //@line 957 "_struct.c"
        var $21=HEAP[$20]; //@line 957 "_struct.c"
        var $22=($21) * 8; //@line 957 "_struct.c"
        var $23=($22) - 1; //@line 957 "_struct.c"
        var $24=1 << ($23); //@line 957 "_struct.c"
        var $25=$x; //@line 957 "_struct.c"
        var $26=($24) & ($25); //@line 957 "_struct.c"
        var $27=0 - ($26); //@line 957 "_struct.c"
        var $28=$x; //@line 957 "_struct.c"
        var $29=($27) | ($28); //@line 957 "_struct.c"
        $x=$29; //@line 957 "_struct.c"
        __label__ = 4; break; //@line 957 "_struct.c"
      case 4: // $bb3
        var $30=$x; //@line 958 "_struct.c"
        var $31=_PyInt_FromLong($30); //@line 958 "_struct.c"
        $0=$31; //@line 958 "_struct.c"
        var $32=$0; //@line 958 "_struct.c"
        $retval=$32; //@line 958 "_struct.c"
        var $retval4=$retval; //@line 958 "_struct.c"
        ;
        return $retval4; //@line 958 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _lu_uint($p, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x;
        var $i;
        var $bytes;
        $p_addr=$p;
        $f_addr=$f;
        $x=0; //@line 964 "_struct.c"
        var $1=$f_addr; //@line 965 "_struct.c"
        var $2=$1+4; //@line 965 "_struct.c"
        var $3=HEAP[$2]; //@line 965 "_struct.c"
        $i=$3; //@line 965 "_struct.c"
        var $4=$p_addr; //@line 966 "_struct.c"
        $bytes=$4; //@line 966 "_struct.c"
        __label__ = 1; break; //@line 966 "_struct.c"
      case 1: // $bb
        var $5=$x; //@line 968 "_struct.c"
        var $6=($5) << 8; //@line 968 "_struct.c"
        var $7=$i; //@line 968 "_struct.c"
        var $8=($7) - 1; //@line 968 "_struct.c"
        $i=$8; //@line 968 "_struct.c"
        var $9=$bytes; //@line 968 "_struct.c"
        var $10=$9+$8; //@line 968 "_struct.c"
        var $11=HEAP[$10]; //@line 968 "_struct.c"
        var $12=($11); //@line 968 "_struct.c"
        var $13=($12) | ($6); //@line 968 "_struct.c"
        $x=$13; //@line 968 "_struct.c"
        var $14=($8) > 0; //@line 969 "_struct.c"
        if ($14) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 969 "_struct.c"
      case 2: // $bb1
        var $15=$x; //@line 970 "_struct.c"
        var $16=($15) >= 0; //@line 970 "_struct.c"
        var $17=$x; //@line 971 "_struct.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 970 "_struct.c"
      case 3: // $bb2
        var $18=_PyInt_FromLong($17); //@line 971 "_struct.c"
        $0=$18; //@line 971 "_struct.c"
        __label__ = 5; break; //@line 971 "_struct.c"
      case 4: // $bb3
        var $19=_PyLong_FromUnsignedLong($17); //@line 972 "_struct.c"
        $0=$19; //@line 972 "_struct.c"
        __label__ = 5; break; //@line 972 "_struct.c"
      case 5: // $bb4
        var $20=$0; //@line 971 "_struct.c"
        $retval=$20; //@line 971 "_struct.c"
        var $retval5=$retval; //@line 971 "_struct.c"
        ;
        return $retval5; //@line 971 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _lu_longlong($p, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x;
        var $i;
        var $bytes;
        $p_addr=$p;
        $f_addr=$f;
        $x=0; //@line 979 "_struct.c"
        var $1=$f_addr; //@line 980 "_struct.c"
        var $2=$1+4; //@line 980 "_struct.c"
        var $3=HEAP[$2]; //@line 980 "_struct.c"
        $i=$3; //@line 980 "_struct.c"
        var $4=$p_addr; //@line 981 "_struct.c"
        $bytes=$4; //@line 981 "_struct.c"
        __label__ = 1; break; //@line 981 "_struct.c"
      case 1: // $bb
        var $5=$x; //@line 983 "_struct.c"
        var $6=($5)*Math.pow(2,8); //@line 983 "_struct.c"
        var $7=$i; //@line 983 "_struct.c"
        var $8=($7) - 1; //@line 983 "_struct.c"
        $i=$8; //@line 983 "_struct.c"
        var $9=$bytes; //@line 983 "_struct.c"
        var $10=$9+$8; //@line 983 "_struct.c"
        var $11=HEAP[$10]; //@line 983 "_struct.c"
        var $12=($11); //@line 983 "_struct.c"
        var $13=Runtime.or64(($12), ($6)); //@line 983 "_struct.c"
        $x=$13; //@line 983 "_struct.c"
        var $14=($8) > 0; //@line 984 "_struct.c"
        if ($14) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 984 "_struct.c"
      case 2: // $bb1
        var $15=$f_addr; //@line 986 "_struct.c"
        var $16=$15+4; //@line 986 "_struct.c"
        var $17=HEAP[$16]; //@line 986 "_struct.c"
        var $18=($17) <= 7; //@line 986 "_struct.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 986 "_struct.c"
      case 3: // $bb2
        var $19=$f_addr; //@line 987 "_struct.c"
        var $20=$19+4; //@line 987 "_struct.c"
        var $21=HEAP[$20]; //@line 987 "_struct.c"
        var $22=($21) * 8; //@line 987 "_struct.c"
        var $23=($22) - 1; //@line 987 "_struct.c"
        var $_cast=($23); //@line 987 "_struct.c"
        var $24=1*Math.pow(2,($_cast)); //@line 987 "_struct.c"
        var $25=$x; //@line 987 "_struct.c"
        var $26=Runtime.and64(($24), ($25)); //@line 987 "_struct.c"
        var $27=0 - ($26); //@line 987 "_struct.c"
        var $28=$x; //@line 987 "_struct.c"
        var $29=Runtime.or64(($27), ($28)); //@line 987 "_struct.c"
        $x=$29; //@line 987 "_struct.c"
        __label__ = 4; break; //@line 987 "_struct.c"
      case 4: // $bb3
        var $30=$x; //@line 988 "_struct.c"
        var $31=($30) >= -2147483648; //@line 988 "_struct.c"
        var $32=$x; //@line 988 "_struct.c"
        var $33=($32) <= 2147483647; //@line 988 "_struct.c"
        var $or_cond=($31) & ($33);
        var $34=$x; //@line 989 "_struct.c"
        if ($or_cond) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 988 "_struct.c"
      case 5: // $bb5
        var $35=((($34)) & 4294967295); //@line 989 "_struct.c"
        var $36=_PyInt_FromLong($35); //@line 989 "_struct.c"
        $0=$36; //@line 989 "_struct.c"
        __label__ = 7; break; //@line 989 "_struct.c"
      case 6: // $bb6
        var $37=_PyLong_FromLongLong($34); //@line 990 "_struct.c"
        $0=$37; //@line 990 "_struct.c"
        __label__ = 7; break; //@line 990 "_struct.c"
      case 7: // $bb7
        var $38=$0; //@line 989 "_struct.c"
        $retval=$38; //@line 989 "_struct.c"
        var $retval8=$retval; //@line 989 "_struct.c"
        ;
        return $retval8; //@line 989 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _lu_ulonglong($p, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x;
        var $i;
        var $bytes;
        $p_addr=$p;
        $f_addr=$f;
        $x=0; //@line 1003 "_struct.c"
        var $1=$f_addr; //@line 1004 "_struct.c"
        var $2=$1+4; //@line 1004 "_struct.c"
        var $3=HEAP[$2]; //@line 1004 "_struct.c"
        $i=$3; //@line 1004 "_struct.c"
        var $4=$p_addr; //@line 1005 "_struct.c"
        $bytes=$4; //@line 1005 "_struct.c"
        __label__ = 1; break; //@line 1005 "_struct.c"
      case 1: // $bb
        var $5=$x; //@line 1007 "_struct.c"
        var $6=($5)*Math.pow(2,8); //@line 1007 "_struct.c"
        var $7=$i; //@line 1007 "_struct.c"
        var $8=($7) - 1; //@line 1007 "_struct.c"
        $i=$8; //@line 1007 "_struct.c"
        var $9=$bytes; //@line 1007 "_struct.c"
        var $10=$9+$8; //@line 1007 "_struct.c"
        var $11=HEAP[$10]; //@line 1007 "_struct.c"
        var $12=($11); //@line 1007 "_struct.c"
        var $13=Runtime.or64(($12), ($6)); //@line 1007 "_struct.c"
        $x=$13; //@line 1007 "_struct.c"
        var $14=($8) > 0; //@line 1008 "_struct.c"
        if ($14) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1008 "_struct.c"
      case 2: // $bb1
        var $15=$x; //@line 1009 "_struct.c"
        var $16=($15) <= 2147483647; //@line 1009 "_struct.c"
        var $17=$x; //@line 1010 "_struct.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1009 "_struct.c"
      case 3: // $bb2
        var $18=((($17)) & 4294967295); //@line 1010 "_struct.c"
        var $19=_PyInt_FromLong($18); //@line 1010 "_struct.c"
        $0=$19; //@line 1010 "_struct.c"
        __label__ = 5; break; //@line 1010 "_struct.c"
      case 4: // $bb3
        var $20=_PyLong_FromUnsignedLongLong($17); //@line 1011 "_struct.c"
        $0=$20; //@line 1011 "_struct.c"
        __label__ = 5; break; //@line 1011 "_struct.c"
      case 5: // $bb4
        var $21=$0; //@line 1010 "_struct.c"
        $retval=$21; //@line 1010 "_struct.c"
        var $retval5=$retval; //@line 1010 "_struct.c"
        ;
        return $retval5; //@line 1010 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _lu_float($p, $f) {
    ;
    var __label__;
  
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    $p_addr=$p;
    $f_addr=$f;
    var $1=$p_addr; //@line 1023 "_struct.c"
    var $2=_unpack_float($1, 1); //@line 1023 "_struct.c"
    $0=$2; //@line 1023 "_struct.c"
    var $3=$0; //@line 1023 "_struct.c"
    $retval=$3; //@line 1023 "_struct.c"
    var $retval1=$retval; //@line 1023 "_struct.c"
    ;
    return $retval1; //@line 1023 "_struct.c"
  }
  

  function _lu_double($p, $f) {
    ;
    var __label__;
  
    var $p_addr;
    var $f_addr;
    var $retval;
    var $0;
    $p_addr=$p;
    $f_addr=$f;
    var $1=$p_addr; //@line 1029 "_struct.c"
    var $2=_unpack_double($1, 1); //@line 1029 "_struct.c"
    $0=$2; //@line 1029 "_struct.c"
    var $3=$0; //@line 1029 "_struct.c"
    $retval=$3; //@line 1029 "_struct.c"
    var $retval1=$retval; //@line 1029 "_struct.c"
    ;
    return $retval1; //@line 1029 "_struct.c"
  }
  

  function _lp_int($p, $v, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        var $i;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 1037 "_struct.c"
        var $2=_get_long($1, $x); //@line 1037 "_struct.c"
        var $3=($2) < 0; //@line 1037 "_struct.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1037 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 1038 "_struct.c"
        __label__ = 7; break; //@line 1038 "_struct.c"
      case 2: // $bb1
        var $4=$f_addr; //@line 1039 "_struct.c"
        var $5=$4+4; //@line 1039 "_struct.c"
        var $6=HEAP[$5]; //@line 1039 "_struct.c"
        $i=$6; //@line 1039 "_struct.c"
        var $7=$i; //@line 1040 "_struct.c"
        var $8=($7)!=4; //@line 1040 "_struct.c"
        var $9=$i; //@line 1041 "_struct.c"
        var $10=($9)==2; //@line 1041 "_struct.c"
        var $or_cond=($8) & ($10);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1040 "_struct.c"
      case 3: // $bb3
        var $11=HEAP[$x]; //@line 1041 "_struct.c"
        var $12=($11) < -32768; //@line 1041 "_struct.c"
        var $13=HEAP[$x]; //@line 1041 "_struct.c"
        var $14=($13) > 32767; //@line 1041 "_struct.c"
        var $or_cond3=($12) | ($14);
        if ($or_cond3) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1041 "_struct.c"
      case 4: // $bb5
        var $15=$f_addr; //@line 1042 "_struct.c"
        var $16=__range_error($15, 0); //@line 1042 "_struct.c"
        $0=$16; //@line 1042 "_struct.c"
        __label__ = 7; break; //@line 1042 "_struct.c"
      case 5: // $bb6
        var $17=HEAP[$x]; //@line 1049 "_struct.c"
        var $18=((($17)) & 255); //@line 1049 "_struct.c"
        var $19=$p_addr; //@line 1049 "_struct.c"
        HEAP[$19]=$18; //@line 1049 "_struct.c"
        var $20=$p_addr; //@line 1049 "_struct.c"
        var $21=$20+1; //@line 1049 "_struct.c"
        $p_addr=$21; //@line 1049 "_struct.c"
        var $22=HEAP[$x]; //@line 1050 "_struct.c"
        var $23=($22) >> 8; //@line 1050 "_struct.c"
        HEAP[$x]=$23; //@line 1050 "_struct.c"
        var $24=$i; //@line 1051 "_struct.c"
        var $25=($24) - 1; //@line 1051 "_struct.c"
        $i=$25; //@line 1051 "_struct.c"
        var $26=($25) > 0; //@line 1051 "_struct.c"
        if ($26) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1051 "_struct.c"
      case 6: // $bb7
        $0=0; //@line 1052 "_struct.c"
        __label__ = 7; break; //@line 1052 "_struct.c"
      case 7: // $bb8
        var $27=$0; //@line 1038 "_struct.c"
        $retval=$27; //@line 1038 "_struct.c"
        var $retval9=$retval; //@line 1038 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1038 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _lp_uint($p, $v, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        var $i;
        var $maxint;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 1060 "_struct.c"
        var $2=_get_ulong($1, $x); //@line 1060 "_struct.c"
        var $3=($2) < 0; //@line 1060 "_struct.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1060 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 1061 "_struct.c"
        __label__ = 7; break; //@line 1061 "_struct.c"
      case 2: // $bb1
        var $4=$f_addr; //@line 1062 "_struct.c"
        var $5=$4+4; //@line 1062 "_struct.c"
        var $6=HEAP[$5]; //@line 1062 "_struct.c"
        $i=$6; //@line 1062 "_struct.c"
        var $7=$i; //@line 1063 "_struct.c"
        var $8=($7)!=4; //@line 1063 "_struct.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1063 "_struct.c"
      case 3: // $bb2
        $maxint=1; //@line 1064 "_struct.c"
        var $9=$i; //@line 1065 "_struct.c"
        var $10=($9) * 8; //@line 1065 "_struct.c"
        var $11=$maxint; //@line 1065 "_struct.c"
        var $12=($11) << ($10); //@line 1065 "_struct.c"
        $maxint=$12; //@line 1065 "_struct.c"
        var $13=HEAP[$x]; //@line 1066 "_struct.c"
        var $14=$maxint; //@line 1066 "_struct.c"
        var $15=($13) >= ($14); //@line 1066 "_struct.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1066 "_struct.c"
      case 4: // $bb3
        var $16=$f_addr; //@line 1067 "_struct.c"
        var $17=__range_error($16, 1); //@line 1067 "_struct.c"
        $0=$17; //@line 1067 "_struct.c"
        __label__ = 7; break; //@line 1067 "_struct.c"
      case 5: // $bb4
        var $18=HEAP[$x]; //@line 1070 "_struct.c"
        var $19=((($18)) & 255); //@line 1070 "_struct.c"
        var $20=$p_addr; //@line 1070 "_struct.c"
        HEAP[$20]=$19; //@line 1070 "_struct.c"
        var $21=$p_addr; //@line 1070 "_struct.c"
        var $22=$21+1; //@line 1070 "_struct.c"
        $p_addr=$22; //@line 1070 "_struct.c"
        var $23=HEAP[$x]; //@line 1071 "_struct.c"
        var $24=($23) >>> 8; //@line 1071 "_struct.c"
        HEAP[$x]=$24; //@line 1071 "_struct.c"
        var $25=$i; //@line 1072 "_struct.c"
        var $26=($25) - 1; //@line 1072 "_struct.c"
        $i=$26; //@line 1072 "_struct.c"
        var $27=($26) > 0; //@line 1072 "_struct.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1072 "_struct.c"
      case 6: // $bb5
        $0=0; //@line 1073 "_struct.c"
        __label__ = 7; break; //@line 1073 "_struct.c"
      case 7: // $bb6
        var $28=$0; //@line 1061 "_struct.c"
        $retval=$28; //@line 1061 "_struct.c"
        var $retval7=$retval; //@line 1061 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 1061 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _lp_longlong($p, $v, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $res;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 1080 "_struct.c"
        var $2=_get_pylong($1); //@line 1080 "_struct.c"
        $v_addr=$2; //@line 1080 "_struct.c"
        var $3=$v_addr; //@line 1081 "_struct.c"
        var $4=($3)==0; //@line 1081 "_struct.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1081 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 1082 "_struct.c"
        __label__ = 5; break; //@line 1082 "_struct.c"
      case 2: // $bb1
        var $5=$p_addr; //@line 1083 "_struct.c"
        var $6=$v_addr; //@line 1083 "_struct.c"
        var $7=$6; //@line 1083 "_struct.c"
        var $8=__PyLong_AsByteArray($7, $5, 8, 1, 1); //@line 1083 "_struct.c"
        $res=$8; //@line 1083 "_struct.c"
        var $9=$v_addr; //@line 1088 "_struct.c"
        var $10=$9; //@line 1088 "_struct.c"
        var $11=HEAP[$10]; //@line 1088 "_struct.c"
        var $12=($11) - 1; //@line 1088 "_struct.c"
        var $13=$v_addr; //@line 1088 "_struct.c"
        var $14=$13; //@line 1088 "_struct.c"
        HEAP[$14]=$12; //@line 1088 "_struct.c"
        var $15=$v_addr; //@line 1088 "_struct.c"
        var $16=$15; //@line 1088 "_struct.c"
        var $17=HEAP[$16]; //@line 1088 "_struct.c"
        var $18=($17)==0; //@line 1088 "_struct.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1088 "_struct.c"
      case 3: // $bb2
        var $19=$v_addr; //@line 1088 "_struct.c"
        var $20=$19+4; //@line 1088 "_struct.c"
        var $21=HEAP[$20]; //@line 1088 "_struct.c"
        var $22=$21+24; //@line 1088 "_struct.c"
        var $23=HEAP[$22]; //@line 1088 "_struct.c"
        var $24=$v_addr; //@line 1088 "_struct.c"
        FUNCTION_TABLE[$23]($24); //@line 1088 "_struct.c"
        __label__ = 4; break; //@line 1088 "_struct.c"
      case 4: // $bb3
        var $25=$res; //@line 1089 "_struct.c"
        $0=$25; //@line 1089 "_struct.c"
        __label__ = 5; break; //@line 1089 "_struct.c"
      case 5: // $bb4
        var $26=$0; //@line 1082 "_struct.c"
        $retval=$26; //@line 1082 "_struct.c"
        var $retval5=$retval; //@line 1082 "_struct.c"
        ;
        return $retval5; //@line 1082 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _lp_ulonglong($p, $v, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $res;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 1096 "_struct.c"
        var $2=_get_pylong($1); //@line 1096 "_struct.c"
        $v_addr=$2; //@line 1096 "_struct.c"
        var $3=$v_addr; //@line 1097 "_struct.c"
        var $4=($3)==0; //@line 1097 "_struct.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1097 "_struct.c"
      case 1: // $bb
        $0=-1; //@line 1098 "_struct.c"
        __label__ = 5; break; //@line 1098 "_struct.c"
      case 2: // $bb1
        var $5=$p_addr; //@line 1099 "_struct.c"
        var $6=$v_addr; //@line 1099 "_struct.c"
        var $7=$6; //@line 1099 "_struct.c"
        var $8=__PyLong_AsByteArray($7, $5, 8, 1, 0); //@line 1099 "_struct.c"
        $res=$8; //@line 1099 "_struct.c"
        var $9=$v_addr; //@line 1104 "_struct.c"
        var $10=$9; //@line 1104 "_struct.c"
        var $11=HEAP[$10]; //@line 1104 "_struct.c"
        var $12=($11) - 1; //@line 1104 "_struct.c"
        var $13=$v_addr; //@line 1104 "_struct.c"
        var $14=$13; //@line 1104 "_struct.c"
        HEAP[$14]=$12; //@line 1104 "_struct.c"
        var $15=$v_addr; //@line 1104 "_struct.c"
        var $16=$15; //@line 1104 "_struct.c"
        var $17=HEAP[$16]; //@line 1104 "_struct.c"
        var $18=($17)==0; //@line 1104 "_struct.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1104 "_struct.c"
      case 3: // $bb2
        var $19=$v_addr; //@line 1104 "_struct.c"
        var $20=$19+4; //@line 1104 "_struct.c"
        var $21=HEAP[$20]; //@line 1104 "_struct.c"
        var $22=$21+24; //@line 1104 "_struct.c"
        var $23=HEAP[$22]; //@line 1104 "_struct.c"
        var $24=$v_addr; //@line 1104 "_struct.c"
        FUNCTION_TABLE[$23]($24); //@line 1104 "_struct.c"
        __label__ = 4; break; //@line 1104 "_struct.c"
      case 4: // $bb3
        var $25=$res; //@line 1105 "_struct.c"
        $0=$25; //@line 1105 "_struct.c"
        __label__ = 5; break; //@line 1105 "_struct.c"
      case 5: // $bb4
        var $26=$0; //@line 1098 "_struct.c"
        $retval=$26; //@line 1098 "_struct.c"
        var $retval5=$retval; //@line 1098 "_struct.c"
        ;
        return $retval5; //@line 1098 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _lp_float($p, $v, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 1111 "_struct.c"
        var $2=_PyFloat_AsDouble($1); //@line 1111 "_struct.c"
        $x=$2; //@line 1111 "_struct.c"
        var $3=$x; //@line 1112 "_struct.c"
        var $4=($3) == -1; //@line 1112 "_struct.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1112 "_struct.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 1112 "_struct.c"
        var $6=($5)!=0; //@line 1112 "_struct.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1112 "_struct.c"
      case 2: // $bb1
        var $7=HEAP[_StructError]; //@line 1113 "_struct.c"
        _PyErr_SetString($7, __str18); //@line 1113 "_struct.c"
        $0=-1; //@line 1115 "_struct.c"
        __label__ = 4; break; //@line 1115 "_struct.c"
      case 3: // $bb2
        var $8=$p_addr; //@line 1117 "_struct.c"
        var $9=$x; //@line 1117 "_struct.c"
        var $10=__PyFloat_Pack4($9, $8, 1); //@line 1117 "_struct.c"
        $0=$10; //@line 1117 "_struct.c"
        __label__ = 4; break; //@line 1117 "_struct.c"
      case 4: // $bb3
        var $11=$0; //@line 1115 "_struct.c"
        $retval=$11; //@line 1115 "_struct.c"
        var $retval4=$retval; //@line 1115 "_struct.c"
        ;
        return $retval4; //@line 1115 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _lp_double($p, $v, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $v_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $x;
        $p_addr=$p;
        $v_addr=$v;
        $f_addr=$f;
        var $1=$v_addr; //@line 1123 "_struct.c"
        var $2=_PyFloat_AsDouble($1); //@line 1123 "_struct.c"
        $x=$2; //@line 1123 "_struct.c"
        var $3=$x; //@line 1124 "_struct.c"
        var $4=($3) == -1; //@line 1124 "_struct.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1124 "_struct.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 1124 "_struct.c"
        var $6=($5)!=0; //@line 1124 "_struct.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1124 "_struct.c"
      case 2: // $bb1
        var $7=HEAP[_StructError]; //@line 1125 "_struct.c"
        _PyErr_SetString($7, __str18); //@line 1125 "_struct.c"
        $0=-1; //@line 1127 "_struct.c"
        __label__ = 4; break; //@line 1127 "_struct.c"
      case 3: // $bb2
        var $8=$p_addr; //@line 1129 "_struct.c"
        var $9=$x; //@line 1129 "_struct.c"
        var $10=__PyFloat_Pack8($9, $8, 1); //@line 1129 "_struct.c"
        $0=$10; //@line 1129 "_struct.c"
        __label__ = 4; break; //@line 1129 "_struct.c"
      case 4: // $bb3
        var $11=$0; //@line 1127 "_struct.c"
        $retval=$11; //@line 1127 "_struct.c"
        var $retval4=$retval; //@line 1127 "_struct.c"
        ;
        return $retval4; //@line 1127 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _whichtable($pfmt) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pfmt_addr;
        var $retval;
        var $0;
        var $fmt;
        var $n=__stackBase__;
        var $p;
        $pfmt_addr=$pfmt;
        var $1=$pfmt_addr; //@line 1158 "_struct.c"
        var $2=HEAP[$1]; //@line 1158 "_struct.c"
        $fmt=$2; //@line 1158 "_struct.c"
        var $3=$2+1; //@line 1158 "_struct.c"
        var $4=$pfmt_addr; //@line 1158 "_struct.c"
        HEAP[$4]=$3; //@line 1158 "_struct.c"
        var $5=$fmt; //@line 1159 "_struct.c"
        var $6=HEAP[$5]; //@line 1159 "_struct.c"
        var $7=($6); //@line 1159 "_struct.c"
        if ($7 == 33) {
          __label__ = 2; break;
        }
        else if ($7 == 60) {
          __label__ = 1; break;
        }
        else if ($7 == 61) {
          __label__ = 3; break;
        }
        else if ($7 == 62) {
          __label__ = 2; break;
        }
        else if ($7 == 64) {
          __label__ = 7; break;
        }
        else {
        __label__ = 6; break;
        }
        
      case 1: // $bb
        $0=_lilendian_table; //@line 1161 "_struct.c"
        __label__ = 8; break; //@line 1161 "_struct.c"
      case 2: // $bb1
        $0=_bigendian_table; //@line 1164 "_struct.c"
        __label__ = 8; break; //@line 1164 "_struct.c"
      case 3: // $bb2
        HEAP[$n]=1; //@line 1166 "_struct.c"
        var $n3=$n; //@line 1167 "_struct.c"
        $p=$n3; //@line 1167 "_struct.c"
        var $8=$p; //@line 1168 "_struct.c"
        var $9=HEAP[$8]; //@line 1168 "_struct.c"
        var $10=($9)==1; //@line 1168 "_struct.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1168 "_struct.c"
      case 4: // $bb4
        $0=_lilendian_table; //@line 1169 "_struct.c"
        __label__ = 8; break; //@line 1169 "_struct.c"
      case 5: // $bb5
        $0=_bigendian_table; //@line 1171 "_struct.c"
        __label__ = 8; break; //@line 1171 "_struct.c"
      case 6: // $bb6
        var $11=$pfmt_addr; //@line 1174 "_struct.c"
        var $12=HEAP[$11]; //@line 1174 "_struct.c"
        var $13=$12+-1; //@line 1174 "_struct.c"
        var $14=$pfmt_addr; //@line 1174 "_struct.c"
        HEAP[$14]=$13; //@line 1174 "_struct.c"
        __label__ = 7; break; //@line 1174 "_struct.c"
      case 7: // $bb7
        $0=_native_table; //@line 1177 "_struct.c"
        __label__ = 8; break; //@line 1177 "_struct.c"
      case 8: // $bb8
        var $15=$0; //@line 1161 "_struct.c"
        $retval=$15; //@line 1161 "_struct.c"
        var $retval9=$retval; //@line 1161 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1161 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getentry($c, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $c_addr;
        var $f_addr;
        var $retval;
        var $0;
        $c_addr=$c;
        $f_addr=$f;
        __label__ = 4; break; //@line 1187 "_struct.c"
      case 1: // $bb
        var $1=$f_addr; //@line 1188 "_struct.c"
        var $2=$1; //@line 1188 "_struct.c"
        var $3=HEAP[$2]; //@line 1188 "_struct.c"
        var $4=($3); //@line 1188 "_struct.c"
        var $5=$c_addr; //@line 1188 "_struct.c"
        var $6=($4)==($5); //@line 1188 "_struct.c"
        var $7=$f_addr; //@line 1189 "_struct.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1188 "_struct.c"
      case 2: // $bb1
        $0=$7; //@line 1189 "_struct.c"
        __label__ = 6; break; //@line 1189 "_struct.c"
      case 3: // $bb2
        var $8=$7+20; //@line 1187 "_struct.c"
        $f_addr=$8; //@line 1187 "_struct.c"
        __label__ = 4; break; //@line 1187 "_struct.c"
      case 4: // $bb3
        var $9=$f_addr; //@line 1187 "_struct.c"
        var $10=$9; //@line 1187 "_struct.c"
        var $11=HEAP[$10]; //@line 1187 "_struct.c"
        var $12=($11)!=0; //@line 1187 "_struct.c"
        if ($12) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 1187 "_struct.c"
      case 5: // $bb4
        var $13=HEAP[_StructError]; //@line 1192 "_struct.c"
        _PyErr_SetString($13, __str19); //@line 1192 "_struct.c"
        $0=0; //@line 1193 "_struct.c"
        __label__ = 6; break; //@line 1193 "_struct.c"
      case 6: // $bb5
        var $14=$0; //@line 1189 "_struct.c"
        $retval=$14; //@line 1189 "_struct.c"
        var $retval6=$retval; //@line 1189 "_struct.c"
        ;
        return $retval6; //@line 1189 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _align($size, $c, $e) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr;
        var $c_addr;
        var $e_addr;
        var $retval;
        var $0;
        var $extra;
        $size_addr=$size;
        $c_addr=$c;
        $e_addr=$e;
        var $1=$e_addr; //@line 1204 "_struct.c"
        var $2=$1; //@line 1204 "_struct.c"
        var $3=HEAP[$2]; //@line 1204 "_struct.c"
        var $4=$c_addr; //@line 1204 "_struct.c"
        var $5=($3)==($4); //@line 1204 "_struct.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 1204 "_struct.c"
      case 1: // $bb
        var $6=$e_addr; //@line 1205 "_struct.c"
        var $7=$6+8; //@line 1205 "_struct.c"
        var $8=HEAP[$7]; //@line 1205 "_struct.c"
        var $9=($8)!=0; //@line 1205 "_struct.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 6; break; } //@line 1205 "_struct.c"
      case 2: // $bb1
        var $10=$size_addr; //@line 1205 "_struct.c"
        var $11=($10) > 0; //@line 1205 "_struct.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1205 "_struct.c"
      case 3: // $bb2
        var $12=$e_addr; //@line 1206 "_struct.c"
        var $13=$12+8; //@line 1206 "_struct.c"
        var $14=HEAP[$13]; //@line 1206 "_struct.c"
        var $15=$size_addr; //@line 1206 "_struct.c"
        var $16=($15) - 1; //@line 1206 "_struct.c"
        var $17=$e_addr; //@line 1206 "_struct.c"
        var $18=$17+8; //@line 1206 "_struct.c"
        var $19=HEAP[$18]; //@line 1206 "_struct.c"
        var $20=($16) % ($19); //@line 1206 "_struct.c"
        var $_neg=0 - ($20);
        var $21=($14) + -1;
        var $22=($21) + ($_neg);
        $extra=$22; //@line 1206 "_struct.c"
        var $23=$size_addr; //@line 1207 "_struct.c"
        var $24=2147483647 - ($23); //@line 1207 "_struct.c"
        var $25=$extra; //@line 1207 "_struct.c"
        var $26=($24) < ($25); //@line 1207 "_struct.c"
        if ($26) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1207 "_struct.c"
      case 4: // $bb3
        $0=-1; //@line 1208 "_struct.c"
        __label__ = 7; break; //@line 1208 "_struct.c"
      case 5: // $bb4
        var $27=$size_addr; //@line 1209 "_struct.c"
        var $28=$extra; //@line 1209 "_struct.c"
        var $29=($28) + ($27); //@line 1209 "_struct.c"
        $size_addr=$29; //@line 1209 "_struct.c"
        __label__ = 6; break; //@line 1209 "_struct.c"
      case 6: // $bb5
        var $30=$size_addr; //@line 1212 "_struct.c"
        $0=$30; //@line 1212 "_struct.c"
        __label__ = 7; break; //@line 1212 "_struct.c"
      case 7: // $bb6
        var $31=$0; //@line 1208 "_struct.c"
        $retval=$31; //@line 1208 "_struct.c"
        var $retval7=$retval; //@line 1208 "_struct.c"
        ;
        return $retval7; //@line 1208 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _prepare_s($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $iftmp_101;
        var $iftmp_100;
        var $0;
        var $f;
        var $e;
        var $codes;
        var $s;
        var $fmt=__stackBase__;
        var $c;
        var $size;
        var $len;
        var $num;
        var $itemsize;
        $self_addr=$self;
        var $1=$self_addr; //@line 1230 "_struct.c"
        var $2=$1+20; //@line 1230 "_struct.c"
        var $3=HEAP[$2]; //@line 1230 "_struct.c"
        var $4=$3; //@line 1230 "_struct.c"
        var $5=$4+20; //@line 1230 "_struct.c"
        var $6=$5; //@line 1230 "_struct.c"
        HEAP[$fmt]=$6; //@line 1230 "_struct.c"
        var $7=_whichtable($fmt); //@line 1232 "_struct.c"
        $f=$7; //@line 1232 "_struct.c"
        var $8=HEAP[$fmt]; //@line 1234 "_struct.c"
        $s=$8; //@line 1234 "_struct.c"
        $size=0; //@line 1235 "_struct.c"
        $len=0; //@line 1236 "_struct.c"
        __label__ = 20; break; //@line 1236 "_struct.c"
      case 1: // $bb
        var $9=___ctype_b_loc(); //@line 1238 "_struct.c"
        var $10=HEAP[$9]; //@line 1238 "_struct.c"
        var $11=$c; //@line 1238 "_struct.c"
        var $12=($11); //@line 1238 "_struct.c"
        var $13=$10+2*$12; //@line 1238 "_struct.c"
        var $14=HEAP[$13]; //@line 1238 "_struct.c"
        var $15=($14); //@line 1238 "_struct.c"
        var $16=($15) & 8192; //@line 1238 "_struct.c"
        var $17=($16)!=0; //@line 1238 "_struct.c"
        if ($17) { __label__ = 20; break; } else { __label__ = 2; break; } //@line 1238 "_struct.c"
      case 2: // $bb2
        var $18=$c; //@line 1240 "_struct.c"
        var $19=($18) <= 47; //@line 1240 "_struct.c"
        var $20=$c; //@line 1240 "_struct.c"
        var $21=($20) > 57; //@line 1240 "_struct.c"
        var $or_cond=($19) | ($21);
        if ($or_cond) { __label__ = 11; break; } else { __label__ = 3; break; } //@line 1240 "_struct.c"
      case 3: // $bb4
        var $22=$c; //@line 1241 "_struct.c"
        var $23=($22); //@line 1241 "_struct.c"
        var $24=($23) - 48; //@line 1241 "_struct.c"
        $num=$24; //@line 1241 "_struct.c"
        __label__ = 8; break; //@line 1241 "_struct.c"
      case 4: // $bb5
        var $25=$num; //@line 1245 "_struct.c"
        var $26=($25) > 214748363; //@line 1245 "_struct.c"
        if ($26) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 1245 "_struct.c"
      case 5: // $bb6
        var $27=$num; //@line 1245 "_struct.c"
        var $28=($27) > 214748364; //@line 1245 "_struct.c"
        if ($28) { __label__ = 49; break; } else { __label__ = 6; break; } //@line 1245 "_struct.c"
      case 6: // $bb7
        var $29=$c; //@line 1245 "_struct.c"
        var $30=($29); //@line 1245 "_struct.c"
        var $31=($30) - 48; //@line 1245 "_struct.c"
        var $32=($31) > 7; //@line 1245 "_struct.c"
        if ($32) { __label__ = 49; break; } else { __label__ = 7; break; } //@line 1245 "_struct.c"
      case 7: // $bb8
        var $33=$num; //@line 1249 "_struct.c"
        var $34=($33) * 10; //@line 1249 "_struct.c"
        var $35=$c; //@line 1249 "_struct.c"
        var $36=($35); //@line 1249 "_struct.c"
        var $37=($34) + -48;
        var $38=($37) + ($36); //@line 1249 "_struct.c"
        $num=$38; //@line 1249 "_struct.c"
        __label__ = 8; break; //@line 1249 "_struct.c"
      case 8: // $bb9
        var $39=$s; //@line 1242 "_struct.c"
        var $40=HEAP[$39]; //@line 1242 "_struct.c"
        $c=$40; //@line 1242 "_struct.c"
        var $41=$c; //@line 1242 "_struct.c"
        var $42=($41) > 47; //@line 1242 "_struct.c"
        var $43=($42); //@line 1242 "_struct.c"
        var $44=$s; //@line 1242 "_struct.c"
        var $45=$44+1; //@line 1242 "_struct.c"
        $s=$45; //@line 1242 "_struct.c"
        var $toBool=($43)!=0; //@line 1242 "_struct.c"
        var $toBoolnot=($toBool) ^ 1; //@line 1242 "_struct.c"
        var $toBoolnot10=($toBoolnot); //@line 1242 "_struct.c"
        var $toBool12=($toBoolnot10)!=0; //@line 1242 "_struct.c"
        var $_pr=$c;
        if ($toBool12) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 1242 "_struct.c"
      case 9: // $bb13
        var $46=($_pr) <= 57; //@line 1242 "_struct.c"
        if ($46) { __label__ = 4; break; } else { __label__ = 12; break; } //@line 1242 "_struct.c"
      case 10: // $bb14
        var $47=($_pr)==0; //@line 1251 "_struct.c"
        if ($47) { __label__ = 21; break; } else { __label__ = 12; break; } //@line 1251 "_struct.c"
      case 11: // $bb16
        $num=1; //@line 1255 "_struct.c"
        __label__ = 12; break; //@line 1255 "_struct.c"
      case 12: // $bb17
        var $48=$c; //@line 1257 "_struct.c"
        var $49=($48); //@line 1257 "_struct.c"
        var $50=$f; //@line 1257 "_struct.c"
        var $51=_getentry($49, $50); //@line 1257 "_struct.c"
        $e=$51; //@line 1257 "_struct.c"
        var $52=$e; //@line 1258 "_struct.c"
        var $53=$52; //@line 1258 "_struct.c"
        var $54=($53)==0; //@line 1258 "_struct.c"
        if ($54) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1258 "_struct.c"
      case 13: // $bb18
        $0=-1; //@line 1259 "_struct.c"
        __label__ = 50; break; //@line 1259 "_struct.c"
      case 14: // $bb19
        var $55=$c; //@line 1261 "_struct.c"
        var $56=($55); //@line 1261 "_struct.c"
        if ($56 == 112) {
          __label__ = 15; break;
        }
        else if ($56 == 115) {
          __label__ = 15; break;
        }
        else if ($56 == 120) {
          __label__ = 17; break;
        }
        else {
        __label__ = 16; break;
        }
        
      case 15: // $bb20
        var $57=$len; //@line 1263 "_struct.c"
        var $58=($57) + 1; //@line 1263 "_struct.c"
        $len=$58; //@line 1263 "_struct.c"
        __label__ = 17; break; //@line 1263 "_struct.c"
      case 16: // $bb22
        var $59=$len; //@line 1265 "_struct.c"
        var $60=$num; //@line 1265 "_struct.c"
        var $61=($60) + ($59); //@line 1265 "_struct.c"
        $len=$61; //@line 1265 "_struct.c"
        __label__ = 17; break; //@line 1265 "_struct.c"
      case 17: // $bb23
        var $62=$e; //@line 1268 "_struct.c"
        var $63=$62+4; //@line 1268 "_struct.c"
        var $64=HEAP[$63]; //@line 1268 "_struct.c"
        $itemsize=$64; //@line 1268 "_struct.c"
        var $65=$c; //@line 1269 "_struct.c"
        var $66=($65); //@line 1269 "_struct.c"
        var $67=$size; //@line 1269 "_struct.c"
        var $68=((($66)) & 255); //@line 1269 "_struct.c"
        var $69=$e; //@line 1269 "_struct.c"
        var $70=_align($67, $68, $69); //@line 1269 "_struct.c"
        $size=$70; //@line 1269 "_struct.c"
        var $71=($70)==-1; //@line 1270 "_struct.c"
        if ($71) { __label__ = 49; break; } else { __label__ = 18; break; } //@line 1270 "_struct.c"
      case 18: // $bb24
        var $72=$size; //@line 1274 "_struct.c"
        var $73=2147483647 - ($72); //@line 1274 "_struct.c"
        var $74=$itemsize; //@line 1274 "_struct.c"
        var $75=((($73)/($74))|0); //@line 1274 "_struct.c"
        var $76=$num; //@line 1274 "_struct.c"
        var $77=($75) < ($76); //@line 1274 "_struct.c"
        if ($77) { __label__ = 49; break; } else { __label__ = 19; break; } //@line 1274 "_struct.c"
      case 19: // $bb25
        var $78=$num; //@line 1276 "_struct.c"
        var $79=$itemsize; //@line 1276 "_struct.c"
        var $80=($79) * ($78); //@line 1276 "_struct.c"
        var $81=$size; //@line 1276 "_struct.c"
        var $82=($80) + ($81); //@line 1276 "_struct.c"
        $size=$82; //@line 1276 "_struct.c"
        __label__ = 20; break; //@line 1276 "_struct.c"
      case 20: // $bb26
        var $83=$s; //@line 1237 "_struct.c"
        var $84=HEAP[$83]; //@line 1237 "_struct.c"
        $c=$84; //@line 1237 "_struct.c"
        var $85=$c; //@line 1237 "_struct.c"
        var $86=($85)!=0; //@line 1237 "_struct.c"
        var $87=($86); //@line 1237 "_struct.c"
        var $88=$s; //@line 1237 "_struct.c"
        var $89=$88+1; //@line 1237 "_struct.c"
        $s=$89; //@line 1237 "_struct.c"
        var $toBool27=($87)!=0; //@line 1237 "_struct.c"
        if ($toBool27) { __label__ = 1; break; } else { __label__ = 21; break; } //@line 1237 "_struct.c"
      case 21: // $bb28
        var $90=$len; //@line 1280 "_struct.c"
        var $91=($90) + 1; //@line 1280 "_struct.c"
        var $92=($91) > 178956970; //@line 1280 "_struct.c"
        if ($92) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1280 "_struct.c"
      case 22: // $bb29
        var $93=_PyErr_NoMemory(); //@line 1281 "_struct.c"
        $0=-1; //@line 1282 "_struct.c"
        __label__ = 50; break; //@line 1282 "_struct.c"
      case 23: // $bb30
        var $94=$self_addr; //@line 1285 "_struct.c"
        var $95=$94+8; //@line 1285 "_struct.c"
        var $96=$size; //@line 1285 "_struct.c"
        HEAP[$95]=$96; //@line 1285 "_struct.c"
        var $97=$self_addr; //@line 1286 "_struct.c"
        var $98=$97+12; //@line 1286 "_struct.c"
        var $99=$len; //@line 1286 "_struct.c"
        HEAP[$98]=$99; //@line 1286 "_struct.c"
        var $100=$len; //@line 1287 "_struct.c"
        var $101=($100) + 1; //@line 1287 "_struct.c"
        var $102=($101) * 12; //@line 1287 "_struct.c"
        var $103=($102) >= 0; //@line 1287 "_struct.c"
        if ($103) { __label__ = 24; break; } else { __label__ = 27; break; } //@line 1287 "_struct.c"
      case 24: // $bb31
        var $104=$len; //@line 1287 "_struct.c"
        var $105=($104) + 1; //@line 1287 "_struct.c"
        var $106=($105) * 12; //@line 1287 "_struct.c"
        var $107=($106)!=0; //@line 1287 "_struct.c"
        if ($107) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1287 "_struct.c"
      case 25: // $bb32
        var $108=$len; //@line 1287 "_struct.c"
        var $109=($108) + 1; //@line 1287 "_struct.c"
        var $110=($109) * 12; //@line 1287 "_struct.c"
        $iftmp_101=$110; //@line 1287 "_struct.c"
        __label__ = 28; break; //@line 1287 "_struct.c"
      case 26: // $bb33
        $iftmp_101=1; //@line 1287 "_struct.c"
        __label__ = 28; break; //@line 1287 "_struct.c"
      case 27: // $bb36_thread
        $iftmp_100=0; //@line 1287 "_struct.c"
        $codes=0; //@line 1287 "_struct.c"
        __label__ = 29; break;
      case 28: // $bb36
        var $111=$iftmp_101; //@line 1287 "_struct.c"
        var $112=_malloc($111); //@line 1287 "_struct.c"
        var $113=$112; //@line 1287 "_struct.c"
        $iftmp_100=$113; //@line 1287 "_struct.c"
        $codes=$113; //@line 1287 "_struct.c"
        var $114=($113)==0; //@line 1288 "_struct.c"
        if ($114) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1288 "_struct.c"
      case 29: // $bb37
        var $115=_PyErr_NoMemory(); //@line 1289 "_struct.c"
        $0=-1; //@line 1290 "_struct.c"
        __label__ = 50; break; //@line 1290 "_struct.c"
      case 30: // $bb38
        var $116=$self_addr; //@line 1293 "_struct.c"
        var $117=$116+16; //@line 1293 "_struct.c"
        var $118=HEAP[$117]; //@line 1293 "_struct.c"
        var $119=($118)!=0; //@line 1293 "_struct.c"
        if ($119) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1293 "_struct.c"
      case 31: // $bb39
        var $120=$self_addr; //@line 1294 "_struct.c"
        var $121=$120+16; //@line 1294 "_struct.c"
        var $122=HEAP[$121]; //@line 1294 "_struct.c"
        var $123=$122; //@line 1294 "_struct.c"
        _free($123); //@line 1294 "_struct.c"
        __label__ = 32; break; //@line 1294 "_struct.c"
      case 32: // $bb40
        var $124=$self_addr; //@line 1295 "_struct.c"
        var $125=$124+16; //@line 1295 "_struct.c"
        var $126=$codes; //@line 1295 "_struct.c"
        HEAP[$125]=$126; //@line 1295 "_struct.c"
        var $127=HEAP[$fmt]; //@line 1297 "_struct.c"
        $s=$127; //@line 1297 "_struct.c"
        $size=0; //@line 1298 "_struct.c"
        __label__ = 47; break; //@line 1298 "_struct.c"
      case 33: // $bb41
        var $128=___ctype_b_loc(); //@line 1300 "_struct.c"
        var $129=HEAP[$128]; //@line 1300 "_struct.c"
        var $130=$c; //@line 1300 "_struct.c"
        var $131=($130); //@line 1300 "_struct.c"
        var $132=$129+2*$131; //@line 1300 "_struct.c"
        var $133=HEAP[$132]; //@line 1300 "_struct.c"
        var $134=($133); //@line 1300 "_struct.c"
        var $135=($134) & 8192; //@line 1300 "_struct.c"
        var $136=($135)!=0; //@line 1300 "_struct.c"
        if ($136) { __label__ = 47; break; } else { __label__ = 34; break; } //@line 1300 "_struct.c"
      case 34: // $bb42
        var $137=$c; //@line 1302 "_struct.c"
        var $138=($137) <= 47; //@line 1302 "_struct.c"
        var $139=$c; //@line 1302 "_struct.c"
        var $140=($139) > 57; //@line 1302 "_struct.c"
        var $or_cond3=($138) | ($140);
        if ($or_cond3) { __label__ = 40; break; } else { __label__ = 35; break; } //@line 1302 "_struct.c"
      case 35: // $bb44
        var $141=$c; //@line 1303 "_struct.c"
        var $142=($141); //@line 1303 "_struct.c"
        var $143=($142) - 48; //@line 1303 "_struct.c"
        $num=$143; //@line 1303 "_struct.c"
        __label__ = 37; break; //@line 1303 "_struct.c"
      case 36: // $bb45
        var $144=$num; //@line 1305 "_struct.c"
        var $145=($144) * 10; //@line 1305 "_struct.c"
        var $146=$c; //@line 1305 "_struct.c"
        var $147=($146); //@line 1305 "_struct.c"
        var $148=($145) + -48;
        var $149=($148) + ($147); //@line 1305 "_struct.c"
        $num=$149; //@line 1305 "_struct.c"
        __label__ = 37; break; //@line 1305 "_struct.c"
      case 37: // $bb46
        var $150=$s; //@line 1304 "_struct.c"
        var $151=HEAP[$150]; //@line 1304 "_struct.c"
        $c=$151; //@line 1304 "_struct.c"
        var $152=$c; //@line 1304 "_struct.c"
        var $153=($152) > 47; //@line 1304 "_struct.c"
        var $154=($153); //@line 1304 "_struct.c"
        var $155=$s; //@line 1304 "_struct.c"
        var $156=$155+1; //@line 1304 "_struct.c"
        $s=$156; //@line 1304 "_struct.c"
        var $toBool47=($154)!=0; //@line 1304 "_struct.c"
        var $toBool47not=($toBool47) ^ 1; //@line 1304 "_struct.c"
        var $toBool47not48=($toBool47not); //@line 1304 "_struct.c"
        var $toBool50=($toBool47not48)!=0; //@line 1304 "_struct.c"
        var $_pr6=$c;
        if ($toBool50) { __label__ = 39; break; } else { __label__ = 38; break; } //@line 1304 "_struct.c"
      case 38: // $bb51
        var $157=($_pr6) <= 57; //@line 1304 "_struct.c"
        if ($157) { __label__ = 36; break; } else { __label__ = 41; break; } //@line 1304 "_struct.c"
      case 39: // $bb52
        var $158=($_pr6)==0; //@line 1306 "_struct.c"
        if ($158) { __label__ = 48; break; } else { __label__ = 41; break; } //@line 1306 "_struct.c"
      case 40: // $bb54
        $num=1; //@line 1310 "_struct.c"
        __label__ = 41; break; //@line 1310 "_struct.c"
      case 41: // $bb55
        var $159=$c; //@line 1312 "_struct.c"
        var $160=($159); //@line 1312 "_struct.c"
        var $161=$f; //@line 1312 "_struct.c"
        var $162=_getentry($160, $161); //@line 1312 "_struct.c"
        $e=$162; //@line 1312 "_struct.c"
        var $163=$c; //@line 1314 "_struct.c"
        var $164=($163); //@line 1314 "_struct.c"
        var $165=$size; //@line 1314 "_struct.c"
        var $166=((($164)) & 255); //@line 1314 "_struct.c"
        var $167=$e; //@line 1314 "_struct.c"
        var $168=_align($165, $166, $167); //@line 1314 "_struct.c"
        $size=$168; //@line 1314 "_struct.c"
        var $169=$c; //@line 1315 "_struct.c"
        var $170=($169)==115; //@line 1315 "_struct.c"
        var $171=$c; //@line 1315 "_struct.c"
        var $172=($171)==112; //@line 1315 "_struct.c"
        var $or_cond5=($170) | ($172);
        if ($or_cond5) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1315 "_struct.c"
      case 42: // $bb57
        var $173=$codes; //@line 1316 "_struct.c"
        var $174=$173+4; //@line 1316 "_struct.c"
        var $175=$size; //@line 1316 "_struct.c"
        HEAP[$174]=$175; //@line 1316 "_struct.c"
        var $176=$codes; //@line 1317 "_struct.c"
        var $177=$176+8; //@line 1317 "_struct.c"
        var $178=$num; //@line 1317 "_struct.c"
        HEAP[$177]=$178; //@line 1317 "_struct.c"
        var $179=$codes; //@line 1318 "_struct.c"
        var $180=$179; //@line 1318 "_struct.c"
        var $181=$e; //@line 1318 "_struct.c"
        HEAP[$180]=$181; //@line 1318 "_struct.c"
        var $182=$codes; //@line 1319 "_struct.c"
        var $183=$182+12; //@line 1319 "_struct.c"
        $codes=$183; //@line 1319 "_struct.c"
        var $184=$size; //@line 1320 "_struct.c"
        var $185=$num; //@line 1320 "_struct.c"
        var $186=($185) + ($184); //@line 1320 "_struct.c"
        $size=$186; //@line 1320 "_struct.c"
        __label__ = 47; break; //@line 1320 "_struct.c"
      case 43: // $bb58
        var $187=$c; //@line 1321 "_struct.c"
        var $188=($187)==120; //@line 1321 "_struct.c"
        if ($188) { __label__ = 45; break; } else { __label__ = 44; break; } //@line 1321 "_struct.c"
      case 44: // $bb62_preheader
        var $189=$num; //@line 1324 "_struct.c"
        var $190=($189) - 1; //@line 1324 "_struct.c"
        $num=$190; //@line 1324 "_struct.c"
        var $191=($190) >= 0; //@line 1324 "_struct.c"
        if ($191) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 1324 "_struct.c"
      case 45: // $bb59
        var $192=$size; //@line 1322 "_struct.c"
        var $193=$num; //@line 1322 "_struct.c"
        var $194=($193) + ($192); //@line 1322 "_struct.c"
        $size=$194; //@line 1322 "_struct.c"
        __label__ = 47; break; //@line 1322 "_struct.c"
      case 46: // $bb61
        var $195=$codes; //@line 1325 "_struct.c"
        var $196=$195+4; //@line 1325 "_struct.c"
        var $197=$size; //@line 1325 "_struct.c"
        HEAP[$196]=$197; //@line 1325 "_struct.c"
        var $198=$e; //@line 1326 "_struct.c"
        var $199=$198+4; //@line 1326 "_struct.c"
        var $200=HEAP[$199]; //@line 1326 "_struct.c"
        var $201=$codes; //@line 1326 "_struct.c"
        var $202=$201+8; //@line 1326 "_struct.c"
        HEAP[$202]=$200; //@line 1326 "_struct.c"
        var $203=$codes; //@line 1327 "_struct.c"
        var $204=$203; //@line 1327 "_struct.c"
        var $205=$e; //@line 1327 "_struct.c"
        HEAP[$204]=$205; //@line 1327 "_struct.c"
        var $206=$codes; //@line 1328 "_struct.c"
        var $207=$206+12; //@line 1328 "_struct.c"
        $codes=$207; //@line 1328 "_struct.c"
        var $208=$e; //@line 1329 "_struct.c"
        var $209=$208+4; //@line 1329 "_struct.c"
        var $210=HEAP[$209]; //@line 1329 "_struct.c"
        var $211=$size; //@line 1329 "_struct.c"
        var $212=($211) + ($210); //@line 1329 "_struct.c"
        $size=$212; //@line 1329 "_struct.c"
        var $213=$num; //@line 1324 "_struct.c"
        var $214=($213) - 1; //@line 1324 "_struct.c"
        $num=$214; //@line 1324 "_struct.c"
        var $215=($214) >= 0; //@line 1324 "_struct.c"
        if ($215) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 1324 "_struct.c"
      case 47: // $bb63
        var $216=$s; //@line 1299 "_struct.c"
        var $217=HEAP[$216]; //@line 1299 "_struct.c"
        $c=$217; //@line 1299 "_struct.c"
        var $218=$c; //@line 1299 "_struct.c"
        var $219=($218)!=0; //@line 1299 "_struct.c"
        var $220=($219); //@line 1299 "_struct.c"
        var $221=$s; //@line 1299 "_struct.c"
        var $222=$221+1; //@line 1299 "_struct.c"
        $s=$222; //@line 1299 "_struct.c"
        var $toBool64=($220)!=0; //@line 1299 "_struct.c"
        if ($toBool64) { __label__ = 33; break; } else { __label__ = 48; break; } //@line 1299 "_struct.c"
      case 48: // $bb65
        var $223=$codes; //@line 1333 "_struct.c"
        var $224=$223; //@line 1333 "_struct.c"
        HEAP[$224]=0; //@line 1333 "_struct.c"
        var $225=$codes; //@line 1334 "_struct.c"
        var $226=$225+4; //@line 1334 "_struct.c"
        var $227=$size; //@line 1334 "_struct.c"
        HEAP[$226]=$227; //@line 1334 "_struct.c"
        var $228=$codes; //@line 1335 "_struct.c"
        var $229=$228+8; //@line 1335 "_struct.c"
        HEAP[$229]=0; //@line 1335 "_struct.c"
        $0=0; //@line 1337 "_struct.c"
        __label__ = 50; break; //@line 1337 "_struct.c"
      case 49: // $overflow
        var $230=HEAP[_StructError]; //@line 1340 "_struct.c"
        _PyErr_SetString($230, __str20); //@line 1340 "_struct.c"
        $0=-1; //@line 1342 "_struct.c"
        __label__ = 50; break; //@line 1342 "_struct.c"
      case 50: // $bb66
        var $231=$0; //@line 1259 "_struct.c"
        $retval=$231; //@line 1259 "_struct.c"
        var $retval67=$retval; //@line 1259 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval67; //@line 1259 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _s_new($type, $args, $kwds) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $self;
        var $s;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$type_addr; //@line 1350 "_struct.c"
        var $2=($1)==0; //@line 1350 "_struct.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1350 "_struct.c"
      case 1: // $bb
        var $3=$type_addr; //@line 1350 "_struct.c"
        var $4=$3+152; //@line 1350 "_struct.c"
        var $5=HEAP[$4]; //@line 1350 "_struct.c"
        var $6=($5)==0; //@line 1350 "_struct.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1350 "_struct.c"
      case 2: // $bb1
        ___assert_fail(__str21, __str2, 1350, ___PRETTY_FUNCTION___9830); //@line 1350 "_struct.c"
        throw "Reached an unreachable!" //@line 1350 "_struct.c"
      case 3: // $bb2
        var $7=$type_addr; //@line 1352 "_struct.c"
        var $8=$7+152; //@line 1352 "_struct.c"
        var $9=HEAP[$8]; //@line 1352 "_struct.c"
        var $10=$type_addr; //@line 1352 "_struct.c"
        var $11=FUNCTION_TABLE[$9]($10, 0); //@line 1352 "_struct.c"
        $self=$11; //@line 1352 "_struct.c"
        var $12=$self; //@line 1353 "_struct.c"
        var $13=($12)!=0; //@line 1353 "_struct.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1353 "_struct.c"
      case 4: // $bb3
        var $14=$self; //@line 1354 "_struct.c"
        var $15=$14; //@line 1354 "_struct.c"
        $s=$15; //@line 1354 "_struct.c"
        var $16=HEAP[__Py_NoneStruct]; //@line 1355 "_struct.c"
        var $17=($16) + 1; //@line 1355 "_struct.c"
        HEAP[__Py_NoneStruct]=$17; //@line 1355 "_struct.c"
        var $18=$s; //@line 1356 "_struct.c"
        var $19=$18+20; //@line 1356 "_struct.c"
        HEAP[$19]=__Py_NoneStruct; //@line 1356 "_struct.c"
        var $20=$s; //@line 1357 "_struct.c"
        var $21=$20+16; //@line 1357 "_struct.c"
        HEAP[$21]=0; //@line 1357 "_struct.c"
        var $22=$s; //@line 1358 "_struct.c"
        var $23=$22+8; //@line 1358 "_struct.c"
        HEAP[$23]=-1; //@line 1358 "_struct.c"
        var $24=$s; //@line 1359 "_struct.c"
        var $25=$24+12; //@line 1359 "_struct.c"
        HEAP[$25]=-1; //@line 1359 "_struct.c"
        __label__ = 5; break; //@line 1359 "_struct.c"
      case 5: // $bb4
        var $26=$self; //@line 1361 "_struct.c"
        $0=$26; //@line 1361 "_struct.c"
        var $27=$0; //@line 1361 "_struct.c"
        $retval=$27; //@line 1361 "_struct.c"
        var $retval5=$retval; //@line 1361 "_struct.c"
        ;
        return $retval5; //@line 1361 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _s_init($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $soself;
        var $o_format=__stackBase__;
        var $ret;
        var $_py_tmp;
        $self_addr=$self;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$self_addr; //@line 1367 "_struct.c"
        var $2=$1; //@line 1367 "_struct.c"
        $soself=$2; //@line 1367 "_struct.c"
        HEAP[$o_format]=0; //@line 1368 "_struct.c"
        $ret=0; //@line 1369 "_struct.c"
        var $3=$self_addr; //@line 1372 "_struct.c"
        var $4=$3+4; //@line 1372 "_struct.c"
        var $5=HEAP[$4]; //@line 1372 "_struct.c"
        var $6=($5)!=(_PyStructType); //@line 1372 "_struct.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1372 "_struct.c"
      case 1: // $bb
        var $7=$self_addr; //@line 1372 "_struct.c"
        var $8=$7+4; //@line 1372 "_struct.c"
        var $9=HEAP[$8]; //@line 1372 "_struct.c"
        var $10=_PyType_IsSubtype($9, _PyStructType); //@line 1372 "_struct.c"
        var $11=($10)==0; //@line 1372 "_struct.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1372 "_struct.c"
      case 2: // $bb1
        ___assert_fail(__str22, __str2, 1372, ___PRETTY_FUNCTION___9853); //@line 1372 "_struct.c"
        throw "Reached an unreachable!" //@line 1372 "_struct.c"
      case 3: // $bb2
        var $12=$args_addr; //@line 1374 "_struct.c"
        var $13=$kwds_addr; //@line 1374 "_struct.c"
        var $14=__PyArg_ParseTupleAndKeywords_SizeT($12, $13, __str23, _kwlist_9852, allocate([$o_format,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1374 "_struct.c"
        var $15=($14)==0; //@line 1374 "_struct.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1374 "_struct.c"
      case 4: // $bb3
        $0=-1; //@line 1376 "_struct.c"
        __label__ = 9; break; //@line 1376 "_struct.c"
      case 5: // $bb4
        var $16=HEAP[$o_format]; //@line 1378 "_struct.c"
        var $17=$16; //@line 1378 "_struct.c"
        var $18=HEAP[$17]; //@line 1378 "_struct.c"
        var $19=($18) + 1; //@line 1378 "_struct.c"
        var $20=$16; //@line 1378 "_struct.c"
        HEAP[$20]=$19; //@line 1378 "_struct.c"
        var $21=$soself; //@line 1379 "_struct.c"
        var $22=$21+20; //@line 1379 "_struct.c"
        var $23=HEAP[$22]; //@line 1379 "_struct.c"
        var $24=($23)!=0; //@line 1379 "_struct.c"
        if ($24) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 1379 "_struct.c"
      case 6: // $bb5
        var $25=$soself; //@line 1379 "_struct.c"
        var $26=$25+20; //@line 1379 "_struct.c"
        var $27=HEAP[$26]; //@line 1379 "_struct.c"
        $_py_tmp=$27; //@line 1379 "_struct.c"
        var $28=$soself; //@line 1379 "_struct.c"
        var $29=$28+20; //@line 1379 "_struct.c"
        HEAP[$29]=0; //@line 1379 "_struct.c"
        var $30=$_py_tmp; //@line 1379 "_struct.c"
        var $31=$30; //@line 1379 "_struct.c"
        var $32=HEAP[$31]; //@line 1379 "_struct.c"
        var $33=($32) - 1; //@line 1379 "_struct.c"
        var $34=$_py_tmp; //@line 1379 "_struct.c"
        var $35=$34; //@line 1379 "_struct.c"
        HEAP[$35]=$33; //@line 1379 "_struct.c"
        var $36=$_py_tmp; //@line 1379 "_struct.c"
        var $37=$36; //@line 1379 "_struct.c"
        var $38=HEAP[$37]; //@line 1379 "_struct.c"
        var $39=($38)==0; //@line 1379 "_struct.c"
        if ($39) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1379 "_struct.c"
      case 7: // $bb6
        var $40=$_py_tmp; //@line 1379 "_struct.c"
        var $41=$40+4; //@line 1379 "_struct.c"
        var $42=HEAP[$41]; //@line 1379 "_struct.c"
        var $43=$42+24; //@line 1379 "_struct.c"
        var $44=HEAP[$43]; //@line 1379 "_struct.c"
        var $45=$_py_tmp; //@line 1379 "_struct.c"
        FUNCTION_TABLE[$44]($45); //@line 1379 "_struct.c"
        __label__ = 8; break; //@line 1379 "_struct.c"
      case 8: // $bb7
        var $46=HEAP[$o_format]; //@line 1380 "_struct.c"
        var $47=$soself; //@line 1380 "_struct.c"
        var $48=$47+20; //@line 1380 "_struct.c"
        HEAP[$48]=$46; //@line 1380 "_struct.c"
        var $49=$soself; //@line 1382 "_struct.c"
        var $50=_prepare_s($49); //@line 1382 "_struct.c"
        $ret=$50; //@line 1382 "_struct.c"
        var $51=$ret; //@line 1383 "_struct.c"
        $0=$51; //@line 1383 "_struct.c"
        __label__ = 9; break; //@line 1383 "_struct.c"
      case 9: // $bb8
        var $52=$0; //@line 1376 "_struct.c"
        $retval=$52; //@line 1376 "_struct.c"
        var $retval9=$retval; //@line 1376 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1376 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _s_dealloc($s) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        $s_addr=$s;
        var $0=$s_addr; //@line 1389 "_struct.c"
        var $1=$0+24; //@line 1389 "_struct.c"
        var $2=HEAP[$1]; //@line 1389 "_struct.c"
        var $3=($2)!=0; //@line 1389 "_struct.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1389 "_struct.c"
      case 1: // $bb
        var $4=$s_addr; //@line 1390 "_struct.c"
        var $5=$4; //@line 1390 "_struct.c"
        _PyObject_ClearWeakRefs($5); //@line 1390 "_struct.c"
        __label__ = 2; break; //@line 1390 "_struct.c"
      case 2: // $bb1
        var $6=$s_addr; //@line 1391 "_struct.c"
        var $7=$6+16; //@line 1391 "_struct.c"
        var $8=HEAP[$7]; //@line 1391 "_struct.c"
        var $9=($8)!=0; //@line 1391 "_struct.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1391 "_struct.c"
      case 3: // $bb2
        var $10=$s_addr; //@line 1392 "_struct.c"
        var $11=$10+16; //@line 1392 "_struct.c"
        var $12=HEAP[$11]; //@line 1392 "_struct.c"
        var $13=$12; //@line 1392 "_struct.c"
        _free($13); //@line 1392 "_struct.c"
        __label__ = 4; break; //@line 1392 "_struct.c"
      case 4: // $bb3
        var $14=$s_addr; //@line 1394 "_struct.c"
        var $15=$14+20; //@line 1394 "_struct.c"
        var $16=HEAP[$15]; //@line 1394 "_struct.c"
        var $17=($16)!=0; //@line 1394 "_struct.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 1394 "_struct.c"
      case 5: // $bb4
        var $18=$s_addr; //@line 1394 "_struct.c"
        var $19=$18+20; //@line 1394 "_struct.c"
        var $20=HEAP[$19]; //@line 1394 "_struct.c"
        var $21=$20; //@line 1394 "_struct.c"
        var $22=HEAP[$21]; //@line 1394 "_struct.c"
        var $23=($22) - 1; //@line 1394 "_struct.c"
        var $24=$20; //@line 1394 "_struct.c"
        HEAP[$24]=$23; //@line 1394 "_struct.c"
        var $25=$20; //@line 1394 "_struct.c"
        var $26=HEAP[$25]; //@line 1394 "_struct.c"
        var $27=($26)==0; //@line 1394 "_struct.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1394 "_struct.c"
      case 6: // $bb5
        var $28=$s_addr; //@line 1394 "_struct.c"
        var $29=$28+20; //@line 1394 "_struct.c"
        var $30=HEAP[$29]; //@line 1394 "_struct.c"
        var $31=$30+4; //@line 1394 "_struct.c"
        var $32=HEAP[$31]; //@line 1394 "_struct.c"
        var $33=$32+24; //@line 1394 "_struct.c"
        var $34=HEAP[$33]; //@line 1394 "_struct.c"
        var $35=$s_addr; //@line 1394 "_struct.c"
        var $36=$35+20; //@line 1394 "_struct.c"
        var $37=HEAP[$36]; //@line 1394 "_struct.c"
        FUNCTION_TABLE[$34]($37); //@line 1394 "_struct.c"
        __label__ = 7; break; //@line 1394 "_struct.c"
      case 7: // $bb6
        var $38=$s_addr; //@line 1395 "_struct.c"
        var $39=$38; //@line 1395 "_struct.c"
        var $40=$39+4; //@line 1395 "_struct.c"
        var $41=HEAP[$40]; //@line 1395 "_struct.c"
        var $42=$41+160; //@line 1395 "_struct.c"
        var $43=HEAP[$42]; //@line 1395 "_struct.c"
        var $44=$s_addr; //@line 1395 "_struct.c"
        var $45=$44; //@line 1395 "_struct.c"
        FUNCTION_TABLE[$43]($45); //@line 1395 "_struct.c"
        ;
        return; //@line 1396 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _s_unpack_internal($soself, $startfrom) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $soself_addr;
        var $startfrom_addr;
        var $retval;
        var $0;
        var $code;
        var $i;
        var $result;
        var $v;
        var $e;
        var $res;
        var $n;
        $soself_addr=$soself;
        $startfrom_addr=$startfrom;
        $i=0; //@line 1401 "_struct.c"
        var $1=$soself_addr; //@line 1402 "_struct.c"
        var $2=$1+12; //@line 1402 "_struct.c"
        var $3=HEAP[$2]; //@line 1402 "_struct.c"
        var $4=_PyTuple_New($3); //@line 1402 "_struct.c"
        $result=$4; //@line 1402 "_struct.c"
        var $5=$result; //@line 1403 "_struct.c"
        var $6=($5)==0; //@line 1403 "_struct.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1403 "_struct.c"
      case 1: // $bb
        $0=0; //@line 1404 "_struct.c"
        __label__ = 17; break; //@line 1404 "_struct.c"
      case 2: // $bb1
        var $7=$soself_addr; //@line 1406 "_struct.c"
        var $8=$7+16; //@line 1406 "_struct.c"
        var $9=HEAP[$8]; //@line 1406 "_struct.c"
        $code=$9; //@line 1406 "_struct.c"
        __label__ = 12; break; //@line 1406 "_struct.c"
      case 3: // $bb2
        var $10=$code; //@line 1408 "_struct.c"
        var $11=$10; //@line 1408 "_struct.c"
        var $12=HEAP[$11]; //@line 1408 "_struct.c"
        $e=$12; //@line 1408 "_struct.c"
        var $13=$code; //@line 1409 "_struct.c"
        var $14=$13+4; //@line 1409 "_struct.c"
        var $15=HEAP[$14]; //@line 1409 "_struct.c"
        var $16=$startfrom_addr; //@line 1409 "_struct.c"
        var $17=$16+$15; //@line 1409 "_struct.c"
        $res=$17; //@line 1409 "_struct.c"
        var $18=$e; //@line 1410 "_struct.c"
        var $19=$18; //@line 1410 "_struct.c"
        var $20=HEAP[$19]; //@line 1410 "_struct.c"
        var $21=($20)==115; //@line 1410 "_struct.c"
        if ($21) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1410 "_struct.c"
      case 4: // $bb3
        var $22=$code; //@line 1411 "_struct.c"
        var $23=$22+8; //@line 1411 "_struct.c"
        var $24=HEAP[$23]; //@line 1411 "_struct.c"
        var $25=$res; //@line 1411 "_struct.c"
        var $26=_PyString_FromStringAndSize($25, $24); //@line 1411 "_struct.c"
        $v=$26; //@line 1411 "_struct.c"
        __lastLabel__ = 4; __label__ = 10; break; //@line 1411 "_struct.c"
      case 5: // $bb4
        var $27=$e; //@line 1412 "_struct.c"
        var $28=$27; //@line 1412 "_struct.c"
        var $29=HEAP[$28]; //@line 1412 "_struct.c"
        var $30=($29)==112; //@line 1412 "_struct.c"
        if ($30) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 1412 "_struct.c"
      case 6: // $bb5
        var $31=$res; //@line 1413 "_struct.c"
        var $32=HEAP[$31]; //@line 1413 "_struct.c"
        var $33=($32); //@line 1413 "_struct.c"
        $n=$33; //@line 1413 "_struct.c"
        var $34=$code; //@line 1414 "_struct.c"
        var $35=$34+8; //@line 1414 "_struct.c"
        var $36=HEAP[$35]; //@line 1414 "_struct.c"
        var $37=$n; //@line 1414 "_struct.c"
        var $38=($36) <= ($37); //@line 1414 "_struct.c"
        if ($38) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1414 "_struct.c"
      case 7: // $bb6
        var $39=$code; //@line 1415 "_struct.c"
        var $40=$39+8; //@line 1415 "_struct.c"
        var $41=HEAP[$40]; //@line 1415 "_struct.c"
        var $42=($41) - 1; //@line 1415 "_struct.c"
        $n=$42; //@line 1415 "_struct.c"
        __label__ = 8; break; //@line 1415 "_struct.c"
      case 8: // $bb7
        var $43=$res; //@line 1416 "_struct.c"
        var $44=$43+1; //@line 1416 "_struct.c"
        var $45=$n; //@line 1416 "_struct.c"
        var $46=_PyString_FromStringAndSize($44, $45); //@line 1416 "_struct.c"
        $v=$46; //@line 1416 "_struct.c"
        __lastLabel__ = 8; __label__ = 10; break; //@line 1416 "_struct.c"
      case 9: // $bb8
        var $47=$e; //@line 1418 "_struct.c"
        var $48=$47+12; //@line 1418 "_struct.c"
        var $49=HEAP[$48]; //@line 1418 "_struct.c"
        var $50=$res; //@line 1418 "_struct.c"
        var $51=$e; //@line 1418 "_struct.c"
        var $52=FUNCTION_TABLE[$49]($50, $51); //@line 1418 "_struct.c"
        $v=$52; //@line 1418 "_struct.c"
        __lastLabel__ = 9; __label__ = 10; break; //@line 1418 "_struct.c"
      case 10: // $bb9
        var $53=__lastLabel__ == 9 ? $52 : (__lastLabel__ == 8 ? $46 : ($26));
        var $54=($53)==0; //@line 1420 "_struct.c"
        var $55=$result; //@line 1427 "_struct.c"
        if ($54) { __label__ = 14; break; } else { __label__ = 11; break; } //@line 1420 "_struct.c"
      case 11: // $bb10
        var $56=$55; //@line 1422 "_struct.c"
        var $57=$i; //@line 1422 "_struct.c"
        var $58=$56+12; //@line 1422 "_struct.c"
        var $59=$58+$57*4; //@line 1422 "_struct.c"
        var $60=$v; //@line 1422 "_struct.c"
        HEAP[$59]=$60; //@line 1422 "_struct.c"
        var $61=$i; //@line 1422 "_struct.c"
        var $62=($61) + 1; //@line 1422 "_struct.c"
        $i=$62; //@line 1422 "_struct.c"
        var $63=$code; //@line 1406 "_struct.c"
        var $64=$63+12; //@line 1406 "_struct.c"
        $code=$64; //@line 1406 "_struct.c"
        __label__ = 12; break; //@line 1406 "_struct.c"
      case 12: // $bb11
        var $65=$code; //@line 1406 "_struct.c"
        var $66=$65; //@line 1406 "_struct.c"
        var $67=HEAP[$66]; //@line 1406 "_struct.c"
        var $68=$67; //@line 1406 "_struct.c"
        var $69=($68)!=0; //@line 1406 "_struct.c"
        if ($69) { __label__ = 3; break; } else { __label__ = 13; break; } //@line 1406 "_struct.c"
      case 13: // $bb12
        var $70=$result; //@line 1425 "_struct.c"
        $0=$70; //@line 1425 "_struct.c"
        __label__ = 17; break; //@line 1425 "_struct.c"
      case 14: // $fail
        var $71=$55; //@line 1427 "_struct.c"
        var $72=HEAP[$71]; //@line 1427 "_struct.c"
        var $73=($72) - 1; //@line 1427 "_struct.c"
        var $74=$result; //@line 1427 "_struct.c"
        var $75=$74; //@line 1427 "_struct.c"
        HEAP[$75]=$73; //@line 1427 "_struct.c"
        var $76=$result; //@line 1427 "_struct.c"
        var $77=$76; //@line 1427 "_struct.c"
        var $78=HEAP[$77]; //@line 1427 "_struct.c"
        var $79=($78)==0; //@line 1427 "_struct.c"
        if ($79) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1427 "_struct.c"
      case 15: // $bb13
        var $80=$result; //@line 1427 "_struct.c"
        var $81=$80+4; //@line 1427 "_struct.c"
        var $82=HEAP[$81]; //@line 1427 "_struct.c"
        var $83=$82+24; //@line 1427 "_struct.c"
        var $84=HEAP[$83]; //@line 1427 "_struct.c"
        var $85=$result; //@line 1427 "_struct.c"
        FUNCTION_TABLE[$84]($85); //@line 1427 "_struct.c"
        __label__ = 16; break; //@line 1427 "_struct.c"
      case 16: // $bb14
        $0=0; //@line 1428 "_struct.c"
        __label__ = 17; break; //@line 1428 "_struct.c"
      case 17: // $bb15
        var $86=$0; //@line 1404 "_struct.c"
        $retval=$86; //@line 1404 "_struct.c"
        var $retval16=$retval; //@line 1404 "_struct.c"
        ;
        return $retval16; //@line 1404 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _s_unpack($self, $inputstr) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $inputstr_addr;
        var $retval;
        var $0;
        var $start=__stackBase__;
        var $len=__stackBase__+4;
        var $args;
        var $result;
        var $soself;
        $self_addr=$self;
        $inputstr_addr=$inputstr;
        $args=0; //@line 1444 "_struct.c"
        var $1=$self_addr; //@line 1445 "_struct.c"
        var $2=$1; //@line 1445 "_struct.c"
        $soself=$2; //@line 1445 "_struct.c"
        var $3=$self_addr; //@line 1446 "_struct.c"
        var $4=$3+4; //@line 1446 "_struct.c"
        var $5=HEAP[$4]; //@line 1446 "_struct.c"
        var $6=($5)!=(_PyStructType); //@line 1446 "_struct.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1446 "_struct.c"
      case 1: // $bb
        var $7=$self_addr; //@line 1446 "_struct.c"
        var $8=$7+4; //@line 1446 "_struct.c"
        var $9=HEAP[$8]; //@line 1446 "_struct.c"
        var $10=_PyType_IsSubtype($9, _PyStructType); //@line 1446 "_struct.c"
        var $11=($10)==0; //@line 1446 "_struct.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1446 "_struct.c"
      case 2: // $bb1
        ___assert_fail(__str22, __str2, 1446, ___PRETTY_FUNCTION___9973); //@line 1446 "_struct.c"
        throw "Reached an unreachable!" //@line 1446 "_struct.c"
      case 3: // $bb2
        var $12=$soself; //@line 1447 "_struct.c"
        var $13=$12+16; //@line 1447 "_struct.c"
        var $14=HEAP[$13]; //@line 1447 "_struct.c"
        var $15=($14)==0; //@line 1447 "_struct.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1447 "_struct.c"
      case 4: // $bb3
        ___assert_fail(__str25, __str2, 1447, ___PRETTY_FUNCTION___9973); //@line 1447 "_struct.c"
        throw "Reached an unreachable!" //@line 1447 "_struct.c"
      case 5: // $bb4
        var $16=$inputstr_addr; //@line 1448 "_struct.c"
        var $17=($16)==0; //@line 1448 "_struct.c"
        if ($17) { __label__ = 16; break; } else { __label__ = 6; break; } //@line 1448 "_struct.c"
      case 6: // $bb5
        var $18=$inputstr_addr; //@line 1450 "_struct.c"
        var $19=$18+4; //@line 1450 "_struct.c"
        var $20=HEAP[$19]; //@line 1450 "_struct.c"
        var $21=$20+84; //@line 1450 "_struct.c"
        var $22=HEAP[$21]; //@line 1450 "_struct.c"
        var $23=($22) & 134217728; //@line 1450 "_struct.c"
        var $24=($23)!=0; //@line 1450 "_struct.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 1450 "_struct.c"
      case 7: // $bb6
        var $25=$inputstr_addr; //@line 1450 "_struct.c"
        var $26=$25; //@line 1450 "_struct.c"
        var $27=$26+8; //@line 1450 "_struct.c"
        var $28=HEAP[$27]; //@line 1450 "_struct.c"
        var $29=$soself; //@line 1450 "_struct.c"
        var $30=$29+8; //@line 1450 "_struct.c"
        var $31=HEAP[$30]; //@line 1450 "_struct.c"
        var $32=($28)==($31); //@line 1450 "_struct.c"
        if ($32) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1450 "_struct.c"
      case 8: // $bb7
        var $33=$inputstr_addr; //@line 1452 "_struct.c"
        var $34=$33; //@line 1452 "_struct.c"
        var $35=$34+20; //@line 1452 "_struct.c"
        var $36=$35; //@line 1452 "_struct.c"
        var $37=$soself; //@line 1452 "_struct.c"
        var $38=_s_unpack_internal($37, $36); //@line 1452 "_struct.c"
        $0=$38; //@line 1452 "_struct.c"
        __label__ = 20; break; //@line 1452 "_struct.c"
      case 9: // $bb8
        var $39=$inputstr_addr; //@line 1454 "_struct.c"
        var $40=_PyTuple_Pack(1, allocate([$39,0,0,0], ["%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 1454 "_struct.c"
        $args=$40; //@line 1454 "_struct.c"
        var $41=($40)==0; //@line 1455 "_struct.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1455 "_struct.c"
      case 10: // $bb9
        $0=0; //@line 1456 "_struct.c"
        __label__ = 20; break; //@line 1456 "_struct.c"
      case 11: // $bb10
        var $42=$args; //@line 1457 "_struct.c"
        var $43=__PyArg_ParseTuple_SizeT($42, __str26, allocate([$start,0,0,0,$len,0,0,0], ["i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1457 "_struct.c"
        var $44=($43)==0; //@line 1457 "_struct.c"
        if ($44) { __label__ = 16; break; } else { __label__ = 12; break; } //@line 1457 "_struct.c"
      case 12: // $bb11
        var $45=$soself; //@line 1459 "_struct.c"
        var $46=$45+8; //@line 1459 "_struct.c"
        var $47=HEAP[$46]; //@line 1459 "_struct.c"
        var $48=HEAP[$len]; //@line 1459 "_struct.c"
        var $49=($47)!=($48); //@line 1459 "_struct.c"
        if ($49) { __label__ = 16; break; } else { __label__ = 13; break; } //@line 1459 "_struct.c"
      case 13: // $bb12
        var $50=HEAP[$start]; //@line 1461 "_struct.c"
        var $51=$soself; //@line 1461 "_struct.c"
        var $52=_s_unpack_internal($51, $50); //@line 1461 "_struct.c"
        $result=$52; //@line 1461 "_struct.c"
        var $53=$args; //@line 1462 "_struct.c"
        var $54=$53; //@line 1462 "_struct.c"
        var $55=HEAP[$54]; //@line 1462 "_struct.c"
        var $56=($55) - 1; //@line 1462 "_struct.c"
        var $57=$args; //@line 1462 "_struct.c"
        var $58=$57; //@line 1462 "_struct.c"
        HEAP[$58]=$56; //@line 1462 "_struct.c"
        var $59=$args; //@line 1462 "_struct.c"
        var $60=$59; //@line 1462 "_struct.c"
        var $61=HEAP[$60]; //@line 1462 "_struct.c"
        var $62=($61)==0; //@line 1462 "_struct.c"
        if ($62) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1462 "_struct.c"
      case 14: // $bb13
        var $63=$args; //@line 1462 "_struct.c"
        var $64=$63+4; //@line 1462 "_struct.c"
        var $65=HEAP[$64]; //@line 1462 "_struct.c"
        var $66=$65+24; //@line 1462 "_struct.c"
        var $67=HEAP[$66]; //@line 1462 "_struct.c"
        var $68=$args; //@line 1462 "_struct.c"
        FUNCTION_TABLE[$67]($68); //@line 1462 "_struct.c"
        __label__ = 15; break; //@line 1462 "_struct.c"
      case 15: // $bb14
        var $69=$result; //@line 1463 "_struct.c"
        $0=$69; //@line 1463 "_struct.c"
        __label__ = 20; break; //@line 1463 "_struct.c"
      case 16: // $fail
        var $70=$args; //@line 1466 "_struct.c"
        var $71=($70)!=0; //@line 1466 "_struct.c"
        if ($71) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 1466 "_struct.c"
      case 17: // $bb15
        var $72=$args; //@line 1466 "_struct.c"
        var $73=$72; //@line 1466 "_struct.c"
        var $74=HEAP[$73]; //@line 1466 "_struct.c"
        var $75=($74) - 1; //@line 1466 "_struct.c"
        var $76=$args; //@line 1466 "_struct.c"
        var $77=$76; //@line 1466 "_struct.c"
        HEAP[$77]=$75; //@line 1466 "_struct.c"
        var $78=$args; //@line 1466 "_struct.c"
        var $79=$78; //@line 1466 "_struct.c"
        var $80=HEAP[$79]; //@line 1466 "_struct.c"
        var $81=($80)==0; //@line 1466 "_struct.c"
        if ($81) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1466 "_struct.c"
      case 18: // $bb16
        var $82=$args; //@line 1466 "_struct.c"
        var $83=$82+4; //@line 1466 "_struct.c"
        var $84=HEAP[$83]; //@line 1466 "_struct.c"
        var $85=$84+24; //@line 1466 "_struct.c"
        var $86=HEAP[$85]; //@line 1466 "_struct.c"
        var $87=$args; //@line 1466 "_struct.c"
        FUNCTION_TABLE[$86]($87); //@line 1466 "_struct.c"
        __label__ = 19; break; //@line 1466 "_struct.c"
      case 19: // $bb17
        var $88=$soself; //@line 1467 "_struct.c"
        var $89=$88+8; //@line 1467 "_struct.c"
        var $90=HEAP[$89]; //@line 1467 "_struct.c"
        var $91=HEAP[_StructError]; //@line 1467 "_struct.c"
        var $92=_PyErr_Format($91, __str27, allocate([$90,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1467 "_struct.c"
        $0=0; //@line 1470 "_struct.c"
        __label__ = 20; break; //@line 1470 "_struct.c"
      case 20: // $bb18
        var $93=$0; //@line 1452 "_struct.c"
        $retval=$93; //@line 1452 "_struct.c"
        var $retval19=$retval; //@line 1452 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 1452 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _s_unpack_from($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $buffer_len=__stackBase__;
        var $offset=__stackBase__+4;
        var $buffer=__stackBase__+8;
        var $soself;
        $self_addr=$self;
        $args_addr=$args;
        $kwds_addr=$kwds;
        HEAP[$buffer_len]=0; //@line 1490 "_struct.c"
        HEAP[$offset]=0; //@line 1490 "_struct.c"
        HEAP[$buffer]=0; //@line 1491 "_struct.c"
        var $1=$self_addr; //@line 1492 "_struct.c"
        var $2=$1; //@line 1492 "_struct.c"
        $soself=$2; //@line 1492 "_struct.c"
        var $3=$self_addr; //@line 1493 "_struct.c"
        var $4=$3+4; //@line 1493 "_struct.c"
        var $5=HEAP[$4]; //@line 1493 "_struct.c"
        var $6=($5)!=(_PyStructType); //@line 1493 "_struct.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1493 "_struct.c"
      case 1: // $bb
        var $7=$self_addr; //@line 1493 "_struct.c"
        var $8=$7+4; //@line 1493 "_struct.c"
        var $9=HEAP[$8]; //@line 1493 "_struct.c"
        var $10=_PyType_IsSubtype($9, _PyStructType); //@line 1493 "_struct.c"
        var $11=($10)==0; //@line 1493 "_struct.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1493 "_struct.c"
      case 2: // $bb1
        ___assert_fail(__str22, __str2, 1493, ___PRETTY_FUNCTION___10041); //@line 1493 "_struct.c"
        throw "Reached an unreachable!" //@line 1493 "_struct.c"
      case 3: // $bb2
        var $12=$soself; //@line 1494 "_struct.c"
        var $13=$12+16; //@line 1494 "_struct.c"
        var $14=HEAP[$13]; //@line 1494 "_struct.c"
        var $15=($14)==0; //@line 1494 "_struct.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1494 "_struct.c"
      case 4: // $bb3
        ___assert_fail(__str25, __str2, 1494, ___PRETTY_FUNCTION___10041); //@line 1494 "_struct.c"
        throw "Reached an unreachable!" //@line 1494 "_struct.c"
      case 5: // $bb4
        var $16=$args_addr; //@line 1496 "_struct.c"
        var $17=$kwds_addr; //@line 1496 "_struct.c"
        var $18=__PyArg_ParseTupleAndKeywords_SizeT($16, $17, __str28, _kwlist_10035, allocate([$buffer,0,0,0,$buffer_len,0,0,0,$offset,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1496 "_struct.c"
        var $19=($18)==0; //@line 1496 "_struct.c"
        if ($19) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1496 "_struct.c"
      case 6: // $bb5
        $0=0; //@line 1498 "_struct.c"
        __label__ = 14; break; //@line 1498 "_struct.c"
      case 7: // $bb6
        var $20=HEAP[$buffer]; //@line 1500 "_struct.c"
        var $21=($20)==0; //@line 1500 "_struct.c"
        if ($21) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1500 "_struct.c"
      case 8: // $bb7
        var $22=HEAP[_StructError]; //@line 1501 "_struct.c"
        var $23=_PyErr_Format($22, __str31, allocate(1, "i32", ALLOC_STACK)); //@line 1501 "_struct.c"
        $0=0; //@line 1503 "_struct.c"
        __label__ = 14; break; //@line 1503 "_struct.c"
      case 9: // $bb8
        var $24=HEAP[$offset]; //@line 1506 "_struct.c"
        var $25=($24) < 0; //@line 1506 "_struct.c"
        if ($25) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1506 "_struct.c"
      case 10: // $bb10
        var $26=HEAP[$offset]; //@line 1507 "_struct.c"
        var $27=HEAP[$buffer_len]; //@line 1507 "_struct.c"
        var $28=($27) + ($26); //@line 1507 "_struct.c"
        HEAP[$offset]=$28; //@line 1507 "_struct.c"
        var $29=($28) < 0; //@line 1509 "_struct.c"
        if ($29) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 1509 "_struct.c"
      case 11: // $bb11
        var $30=HEAP[$buffer_len]; //@line 1509 "_struct.c"
        var $31=HEAP[$offset]; //@line 1509 "_struct.c"
        var $32=($30) - ($31); //@line 1509 "_struct.c"
        var $33=$soself; //@line 1509 "_struct.c"
        var $34=$33+8; //@line 1509 "_struct.c"
        var $35=HEAP[$34]; //@line 1509 "_struct.c"
        var $36=($32) < ($35); //@line 1509 "_struct.c"
        if ($36) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1509 "_struct.c"
      case 12: // $bb12
        var $37=$soself; //@line 1510 "_struct.c"
        var $38=$37+8; //@line 1510 "_struct.c"
        var $39=HEAP[$38]; //@line 1510 "_struct.c"
        var $40=HEAP[_StructError]; //@line 1510 "_struct.c"
        var $41=_PyErr_Format($40, __str32, allocate([$39,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1510 "_struct.c"
        $0=0; //@line 1513 "_struct.c"
        __label__ = 14; break; //@line 1513 "_struct.c"
      case 13: // $bb13
        var $42=HEAP[$buffer]; //@line 1515 "_struct.c"
        var $43=HEAP[$offset]; //@line 1515 "_struct.c"
        var $44=$42+$43; //@line 1515 "_struct.c"
        var $45=$soself; //@line 1515 "_struct.c"
        var $46=_s_unpack_internal($45, $44); //@line 1515 "_struct.c"
        $0=$46; //@line 1515 "_struct.c"
        __label__ = 14; break; //@line 1515 "_struct.c"
      case 14: // $bb14
        var $47=$0; //@line 1498 "_struct.c"
        $retval=$47; //@line 1498 "_struct.c"
        var $retval15=$retval; //@line 1498 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 1498 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _s_pack_internal($soself, $args, $offset, $buf) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $soself_addr;
        var $args_addr;
        var $offset_addr;
        var $buf_addr;
        var $retval;
        var $0;
        var $code;
        var $i;
        var $n;
        var $v;
        var $e;
        var $res;
        $soself_addr=$soself;
        $args_addr=$args;
        $offset_addr=$offset;
        $buf_addr=$buf;
        var $1=$soself_addr; //@line 1537 "_struct.c"
        var $2=$1+8; //@line 1537 "_struct.c"
        var $3=HEAP[$2]; //@line 1537 "_struct.c"
        var $4=$buf_addr; //@line 1537 "_struct.c"
        _llvm_memset_p0i8_i32($4, 0, $3, 1, 0); //@line 1537 "_struct.c"
        var $5=$offset_addr; //@line 1538 "_struct.c"
        $i=$5; //@line 1538 "_struct.c"
        var $6=$soself_addr; //@line 1539 "_struct.c"
        var $7=$6+16; //@line 1539 "_struct.c"
        var $8=HEAP[$7]; //@line 1539 "_struct.c"
        $code=$8; //@line 1539 "_struct.c"
        __label__ = 24; break; //@line 1539 "_struct.c"
      case 1: // $bb
        var $9=$args_addr; //@line 1541 "_struct.c"
        var $10=$9; //@line 1541 "_struct.c"
        var $11=$i; //@line 1541 "_struct.c"
        var $12=$10+12; //@line 1541 "_struct.c"
        var $13=$12+$11*4; //@line 1541 "_struct.c"
        var $14=HEAP[$13]; //@line 1541 "_struct.c"
        $v=$14; //@line 1541 "_struct.c"
        var $15=$i; //@line 1541 "_struct.c"
        var $16=($15) + 1; //@line 1541 "_struct.c"
        $i=$16; //@line 1541 "_struct.c"
        var $17=$code; //@line 1542 "_struct.c"
        var $18=$17; //@line 1542 "_struct.c"
        var $19=HEAP[$18]; //@line 1542 "_struct.c"
        $e=$19; //@line 1542 "_struct.c"
        var $20=$code; //@line 1543 "_struct.c"
        var $21=$20+4; //@line 1543 "_struct.c"
        var $22=HEAP[$21]; //@line 1543 "_struct.c"
        var $23=$buf_addr; //@line 1543 "_struct.c"
        var $24=$23+$22; //@line 1543 "_struct.c"
        $res=$24; //@line 1543 "_struct.c"
        var $25=$e; //@line 1544 "_struct.c"
        var $26=$25; //@line 1544 "_struct.c"
        var $27=HEAP[$26]; //@line 1544 "_struct.c"
        var $28=($27)==115; //@line 1544 "_struct.c"
        if ($28) { __label__ = 2; break; } else { __label__ = 8; break; } //@line 1544 "_struct.c"
      case 2: // $bb1
        var $29=$v; //@line 1545 "_struct.c"
        var $30=$29+4; //@line 1545 "_struct.c"
        var $31=HEAP[$30]; //@line 1545 "_struct.c"
        var $32=$31+84; //@line 1545 "_struct.c"
        var $33=HEAP[$32]; //@line 1545 "_struct.c"
        var $34=($33) & 134217728; //@line 1545 "_struct.c"
        var $35=($34)==0; //@line 1545 "_struct.c"
        if ($35) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1545 "_struct.c"
      case 3: // $bb2
        var $36=HEAP[_StructError]; //@line 1546 "_struct.c"
        _PyErr_SetString($36, __str33); //@line 1546 "_struct.c"
        $0=-1; //@line 1549 "_struct.c"
        __label__ = 26; break; //@line 1549 "_struct.c"
      case 4: // $bb3
        var $37=$v; //@line 1551 "_struct.c"
        var $38=$37; //@line 1551 "_struct.c"
        var $39=$38+8; //@line 1551 "_struct.c"
        var $40=HEAP[$39]; //@line 1551 "_struct.c"
        $n=$40; //@line 1551 "_struct.c"
        var $41=$code; //@line 1552 "_struct.c"
        var $42=$41+8; //@line 1552 "_struct.c"
        var $43=HEAP[$42]; //@line 1552 "_struct.c"
        var $44=$n; //@line 1552 "_struct.c"
        var $45=($43) < ($44); //@line 1552 "_struct.c"
        if ($45) { __lastLabel__ = 4; __label__ = 5; break; } else { __lastLabel__ = 4; __label__ = 6; break; } //@line 1552 "_struct.c"
      case 5: // $bb4
        var $46=$code; //@line 1553 "_struct.c"
        var $47=$46+8; //@line 1553 "_struct.c"
        var $48=HEAP[$47]; //@line 1553 "_struct.c"
        $n=$48; //@line 1553 "_struct.c"
        __lastLabel__ = 5; __label__ = 6; break; //@line 1553 "_struct.c"
      case 6: // $bb5
        var $49=__lastLabel__ == 5 ? $48 : ($44);
        var $50=($49) > 0; //@line 1554 "_struct.c"
        if ($50) { __label__ = 7; break; } else { __label__ = 23; break; } //@line 1554 "_struct.c"
      case 7: // $bb6
        var $51=$n; //@line 1555 "_struct.c"
        var $52=$v; //@line 1555 "_struct.c"
        var $53=$52; //@line 1555 "_struct.c"
        var $54=$53+20; //@line 1555 "_struct.c"
        var $55=$54; //@line 1555 "_struct.c"
        var $56=$res; //@line 1555 "_struct.c"
        _llvm_memcpy_p0i8_p0i8_i32($56, $55, $51, 1, 0); //@line 1555 "_struct.c"
        __label__ = 23; break; //@line 1555 "_struct.c"
      case 8: // $bb8
        var $57=$e; //@line 1556 "_struct.c"
        var $58=$57; //@line 1556 "_struct.c"
        var $59=HEAP[$58]; //@line 1556 "_struct.c"
        var $60=($59)==112; //@line 1556 "_struct.c"
        if ($60) { __label__ = 9; break; } else { __label__ = 18; break; } //@line 1556 "_struct.c"
      case 9: // $bb9
        var $61=$v; //@line 1557 "_struct.c"
        var $62=$61+4; //@line 1557 "_struct.c"
        var $63=HEAP[$62]; //@line 1557 "_struct.c"
        var $64=$63+84; //@line 1557 "_struct.c"
        var $65=HEAP[$64]; //@line 1557 "_struct.c"
        var $66=($65) & 134217728; //@line 1557 "_struct.c"
        var $67=($66)==0; //@line 1557 "_struct.c"
        if ($67) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1557 "_struct.c"
      case 10: // $bb10
        var $68=HEAP[_StructError]; //@line 1558 "_struct.c"
        _PyErr_SetString($68, __str34); //@line 1558 "_struct.c"
        $0=-1; //@line 1561 "_struct.c"
        __label__ = 26; break; //@line 1561 "_struct.c"
      case 11: // $bb11
        var $69=$v; //@line 1563 "_struct.c"
        var $70=$69; //@line 1563 "_struct.c"
        var $71=$70+8; //@line 1563 "_struct.c"
        var $72=HEAP[$71]; //@line 1563 "_struct.c"
        $n=$72; //@line 1563 "_struct.c"
        var $73=$code; //@line 1564 "_struct.c"
        var $74=$73+8; //@line 1564 "_struct.c"
        var $75=HEAP[$74]; //@line 1564 "_struct.c"
        var $76=($75) - 1; //@line 1564 "_struct.c"
        var $77=$n; //@line 1564 "_struct.c"
        var $78=($76) < ($77); //@line 1564 "_struct.c"
        if ($78) { __lastLabel__ = 11; __label__ = 12; break; } else { __lastLabel__ = 11; __label__ = 13; break; } //@line 1564 "_struct.c"
      case 12: // $bb12
        var $79=$code; //@line 1565 "_struct.c"
        var $80=$79+8; //@line 1565 "_struct.c"
        var $81=HEAP[$80]; //@line 1565 "_struct.c"
        var $82=($81) - 1; //@line 1565 "_struct.c"
        $n=$82; //@line 1565 "_struct.c"
        __lastLabel__ = 12; __label__ = 13; break; //@line 1565 "_struct.c"
      case 13: // $bb13
        var $83=__lastLabel__ == 12 ? $82 : ($77);
        var $84=($83) > 0; //@line 1566 "_struct.c"
        if ($84) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1566 "_struct.c"
      case 14: // $bb14
        var $85=$n; //@line 1567 "_struct.c"
        var $86=$v; //@line 1567 "_struct.c"
        var $87=$86; //@line 1567 "_struct.c"
        var $88=$87+20; //@line 1567 "_struct.c"
        var $89=$88; //@line 1567 "_struct.c"
        var $90=$res; //@line 1567 "_struct.c"
        var $91=$90+1; //@line 1567 "_struct.c"
        _llvm_memcpy_p0i8_p0i8_i32($91, $89, $85, 1, 0); //@line 1567 "_struct.c"
        __label__ = 15; break; //@line 1567 "_struct.c"
      case 15: // $bb15
        var $92=$n; //@line 1568 "_struct.c"
        var $93=($92) > 255; //@line 1568 "_struct.c"
        if ($93) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1568 "_struct.c"
      case 16: // $bb16
        $n=255; //@line 1569 "_struct.c"
        __label__ = 17; break; //@line 1569 "_struct.c"
      case 17: // $bb17
        var $94=$n; //@line 1570 "_struct.c"
        var $95=((($94)) & 255); //@line 1570 "_struct.c"
        var $96=$res; //@line 1570 "_struct.c"
        HEAP[$96]=$95; //@line 1570 "_struct.c"
        __label__ = 23; break; //@line 1570 "_struct.c"
      case 18: // $bb18
        var $97=$e; //@line 1571 "_struct.c"
        var $98=$97+16; //@line 1571 "_struct.c"
        var $99=HEAP[$98]; //@line 1571 "_struct.c"
        var $100=$res; //@line 1571 "_struct.c"
        var $101=$v; //@line 1571 "_struct.c"
        var $102=$e; //@line 1571 "_struct.c"
        var $103=FUNCTION_TABLE[$99]($100, $101, $102); //@line 1571 "_struct.c"
        var $104=($103) < 0; //@line 1571 "_struct.c"
        if ($104) { __label__ = 19; break; } else { __label__ = 23; break; } //@line 1571 "_struct.c"
      case 19: // $bb19
        var $105=$e; //@line 1572 "_struct.c"
        var $106=$105; //@line 1572 "_struct.c"
        var $107=HEAP[$106]; //@line 1572 "_struct.c"
        var $108=($107); //@line 1572 "_struct.c"
        var $memchr=_memchr(__str, $108, 11);
        var $109=($memchr)!=0; //@line 1572 "_struct.c"
        if ($109) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 1572 "_struct.c"
      case 20: // $bb20
        var $110=HEAP[_PyExc_OverflowError]; //@line 1572 "_struct.c"
        var $111=_PyErr_ExceptionMatches($110); //@line 1572 "_struct.c"
        var $112=($111)!=0; //@line 1572 "_struct.c"
        if ($112) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1572 "_struct.c"
      case 21: // $bb21
        var $113=$e; //@line 1574 "_struct.c"
        var $114=$113; //@line 1574 "_struct.c"
        var $115=HEAP[$114]; //@line 1574 "_struct.c"
        var $116=($115); //@line 1574 "_struct.c"
        var $117=HEAP[_StructError]; //@line 1574 "_struct.c"
        var $118=_PyErr_Format($117, __str35, allocate([$116,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1574 "_struct.c"
        __label__ = 22; break; //@line 1574 "_struct.c"
      case 22: // $bb22
        $0=-1; //@line 1578 "_struct.c"
        __label__ = 26; break; //@line 1578 "_struct.c"
      case 23: // $bb23
        var $119=$code; //@line 1539 "_struct.c"
        var $120=$119+12; //@line 1539 "_struct.c"
        $code=$120; //@line 1539 "_struct.c"
        __label__ = 24; break; //@line 1539 "_struct.c"
      case 24: // $bb24
        var $121=$code; //@line 1539 "_struct.c"
        var $122=$121; //@line 1539 "_struct.c"
        var $123=HEAP[$122]; //@line 1539 "_struct.c"
        var $124=$123; //@line 1539 "_struct.c"
        var $125=($124)!=0; //@line 1539 "_struct.c"
        if ($125) { __label__ = 1; break; } else { __label__ = 25; break; } //@line 1539 "_struct.c"
      case 25: // $bb25
        $0=0; //@line 1583 "_struct.c"
        __label__ = 26; break; //@line 1583 "_struct.c"
      case 26: // $bb26
        var $126=$0; //@line 1549 "_struct.c"
        $retval=$126; //@line 1549 "_struct.c"
        var $retval27=$retval; //@line 1549 "_struct.c"
        ;
        return $retval27; //@line 1549 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _s_pack($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $soself;
        var $result;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$self_addr; //@line 1600 "_struct.c"
        var $2=$1; //@line 1600 "_struct.c"
        $soself=$2; //@line 1600 "_struct.c"
        var $3=$self_addr; //@line 1601 "_struct.c"
        var $4=$3+4; //@line 1601 "_struct.c"
        var $5=HEAP[$4]; //@line 1601 "_struct.c"
        var $6=($5)!=(_PyStructType); //@line 1601 "_struct.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1601 "_struct.c"
      case 1: // $bb
        var $7=$self_addr; //@line 1601 "_struct.c"
        var $8=$7+4; //@line 1601 "_struct.c"
        var $9=HEAP[$8]; //@line 1601 "_struct.c"
        var $10=_PyType_IsSubtype($9, _PyStructType); //@line 1601 "_struct.c"
        var $11=($10)==0; //@line 1601 "_struct.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1601 "_struct.c"
      case 2: // $bb1
        ___assert_fail(__str22, __str2, 1601, ___PRETTY_FUNCTION___10174); //@line 1601 "_struct.c"
        throw "Reached an unreachable!" //@line 1601 "_struct.c"
      case 3: // $bb2
        var $12=$soself; //@line 1602 "_struct.c"
        var $13=$12+16; //@line 1602 "_struct.c"
        var $14=HEAP[$13]; //@line 1602 "_struct.c"
        var $15=($14)==0; //@line 1602 "_struct.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1602 "_struct.c"
      case 4: // $bb3
        ___assert_fail(__str25, __str2, 1602, ___PRETTY_FUNCTION___10174); //@line 1602 "_struct.c"
        throw "Reached an unreachable!" //@line 1602 "_struct.c"
      case 5: // $bb4
        var $16=$args_addr; //@line 1603 "_struct.c"
        var $17=$16; //@line 1603 "_struct.c"
        var $18=$17+8; //@line 1603 "_struct.c"
        var $19=HEAP[$18]; //@line 1603 "_struct.c"
        var $20=$soself; //@line 1603 "_struct.c"
        var $21=$20+12; //@line 1603 "_struct.c"
        var $22=HEAP[$21]; //@line 1603 "_struct.c"
        var $23=($19)!=($22); //@line 1603 "_struct.c"
        var $24=$soself; //@line 1605 "_struct.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1603 "_struct.c"
      case 6: // $bb5
        var $25=$24+12; //@line 1605 "_struct.c"
        var $26=HEAP[$25]; //@line 1605 "_struct.c"
        var $27=HEAP[_StructError]; //@line 1605 "_struct.c"
        var $28=_PyErr_Format($27, __str36, allocate([$26,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1605 "_struct.c"
        $0=0; //@line 1607 "_struct.c"
        __label__ = 14; break; //@line 1607 "_struct.c"
      case 7: // $bb6
        var $29=$24+8; //@line 1611 "_struct.c"
        var $30=HEAP[$29]; //@line 1611 "_struct.c"
        var $31=_PyString_FromStringAndSize(0, $30); //@line 1611 "_struct.c"
        $result=$31; //@line 1611 "_struct.c"
        var $32=$result; //@line 1612 "_struct.c"
        var $33=($32)==0; //@line 1612 "_struct.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1612 "_struct.c"
      case 8: // $bb7
        $0=0; //@line 1613 "_struct.c"
        __label__ = 14; break; //@line 1613 "_struct.c"
      case 9: // $bb8
        var $34=$result; //@line 1616 "_struct.c"
        var $35=$34; //@line 1616 "_struct.c"
        var $36=$35+20; //@line 1616 "_struct.c"
        var $37=$36; //@line 1616 "_struct.c"
        var $38=$soself; //@line 1616 "_struct.c"
        var $39=$args_addr; //@line 1616 "_struct.c"
        var $40=_s_pack_internal($38, $39, 0, $37); //@line 1616 "_struct.c"
        var $41=($40)!=0; //@line 1616 "_struct.c"
        var $42=$result; //@line 1617 "_struct.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 1616 "_struct.c"
      case 10: // $bb9
        var $43=$42; //@line 1617 "_struct.c"
        var $44=HEAP[$43]; //@line 1617 "_struct.c"
        var $45=($44) - 1; //@line 1617 "_struct.c"
        var $46=$result; //@line 1617 "_struct.c"
        var $47=$46; //@line 1617 "_struct.c"
        HEAP[$47]=$45; //@line 1617 "_struct.c"
        var $48=$result; //@line 1617 "_struct.c"
        var $49=$48; //@line 1617 "_struct.c"
        var $50=HEAP[$49]; //@line 1617 "_struct.c"
        var $51=($50)==0; //@line 1617 "_struct.c"
        if ($51) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1617 "_struct.c"
      case 11: // $bb10
        var $52=$result; //@line 1617 "_struct.c"
        var $53=$52+4; //@line 1617 "_struct.c"
        var $54=HEAP[$53]; //@line 1617 "_struct.c"
        var $55=$54+24; //@line 1617 "_struct.c"
        var $56=HEAP[$55]; //@line 1617 "_struct.c"
        var $57=$result; //@line 1617 "_struct.c"
        FUNCTION_TABLE[$56]($57); //@line 1617 "_struct.c"
        __label__ = 12; break; //@line 1617 "_struct.c"
      case 12: // $bb11
        $0=0; //@line 1618 "_struct.c"
        __label__ = 14; break; //@line 1618 "_struct.c"
      case 13: // $bb12
        $0=$42; //@line 1621 "_struct.c"
        __label__ = 14; break; //@line 1621 "_struct.c"
      case 14: // $bb13
        var $58=$0; //@line 1607 "_struct.c"
        $retval=$58; //@line 1607 "_struct.c"
        var $retval14=$retval; //@line 1607 "_struct.c"
        ;
        return $retval14; //@line 1607 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _s_pack_into($self, $args) {
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
        var $soself;
        var $buffer=__stackBase__;
        var $buffer_len=__stackBase__+4;
        var $offset;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$self_addr; //@line 1640 "_struct.c"
        var $2=$1; //@line 1640 "_struct.c"
        $soself=$2; //@line 1640 "_struct.c"
        var $3=$self_addr; //@line 1641 "_struct.c"
        var $4=$3+4; //@line 1641 "_struct.c"
        var $5=HEAP[$4]; //@line 1641 "_struct.c"
        var $6=($5)!=(_PyStructType); //@line 1641 "_struct.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1641 "_struct.c"
      case 1: // $bb
        var $7=$self_addr; //@line 1641 "_struct.c"
        var $8=$7+4; //@line 1641 "_struct.c"
        var $9=HEAP[$8]; //@line 1641 "_struct.c"
        var $10=_PyType_IsSubtype($9, _PyStructType); //@line 1641 "_struct.c"
        var $11=($10)==0; //@line 1641 "_struct.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1641 "_struct.c"
      case 2: // $bb1
        ___assert_fail(__str22, __str2, 1641, ___PRETTY_FUNCTION___10219); //@line 1641 "_struct.c"
        throw "Reached an unreachable!" //@line 1641 "_struct.c"
      case 3: // $bb2
        var $12=$soself; //@line 1642 "_struct.c"
        var $13=$12+16; //@line 1642 "_struct.c"
        var $14=HEAP[$13]; //@line 1642 "_struct.c"
        var $15=($14)==0; //@line 1642 "_struct.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1642 "_struct.c"
      case 4: // $bb3
        ___assert_fail(__str25, __str2, 1642, ___PRETTY_FUNCTION___10219); //@line 1642 "_struct.c"
        throw "Reached an unreachable!" //@line 1642 "_struct.c"
      case 5: // $bb4
        var $16=$args_addr; //@line 1643 "_struct.c"
        var $17=$16; //@line 1643 "_struct.c"
        var $18=$17+8; //@line 1643 "_struct.c"
        var $19=HEAP[$18]; //@line 1643 "_struct.c"
        var $20=$soself; //@line 1643 "_struct.c"
        var $21=$20+12; //@line 1643 "_struct.c"
        var $22=HEAP[$21]; //@line 1643 "_struct.c"
        var $23=($22) + 2; //@line 1643 "_struct.c"
        var $24=($19)!=($23); //@line 1643 "_struct.c"
        if ($24) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1643 "_struct.c"
      case 6: // $bb5
        var $25=$soself; //@line 1645 "_struct.c"
        var $26=$25+12; //@line 1645 "_struct.c"
        var $27=HEAP[$26]; //@line 1645 "_struct.c"
        var $28=($27) + 2; //@line 1645 "_struct.c"
        var $29=HEAP[_StructError]; //@line 1645 "_struct.c"
        var $30=_PyErr_Format($29, __str37, allocate([$28,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1645 "_struct.c"
        $0=0; //@line 1648 "_struct.c"
        __label__ = 24; break; //@line 1648 "_struct.c"
      case 7: // $bb6
        var $31=$args_addr; //@line 1652 "_struct.c"
        var $32=$31; //@line 1652 "_struct.c"
        var $33=$32+12; //@line 1652 "_struct.c"
        var $34=$33; //@line 1652 "_struct.c"
        var $35=HEAP[$34]; //@line 1652 "_struct.c"
        var $36=_PyObject_AsWriteBuffer($35, $buffer, $buffer_len); //@line 1652 "_struct.c"
        var $37=($36)==-1; //@line 1652 "_struct.c"
        if ($37) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1652 "_struct.c"
      case 8: // $bb8
        $0=0; //@line 1654 "_struct.c"
        __label__ = 24; break; //@line 1654 "_struct.c"
      case 9: // $bb9
        var $38=HEAP[$buffer_len]; //@line 1656 "_struct.c"
        var $39=($38) < 0; //@line 1656 "_struct.c"
        if ($39) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1656 "_struct.c"
      case 10: // $bb10
        ___assert_fail(__str38, __str2, 1656, ___PRETTY_FUNCTION___10219); //@line 1656 "_struct.c"
        throw "Reached an unreachable!" //@line 1656 "_struct.c"
      case 11: // $bb11
        var $40=$args_addr; //@line 1659 "_struct.c"
        var $41=$40; //@line 1659 "_struct.c"
        var $42=$41+12; //@line 1659 "_struct.c"
        var $43=$42+4; //@line 1659 "_struct.c"
        var $44=HEAP[$43]; //@line 1659 "_struct.c"
        var $45=_PyInt_AsSsize_t($44); //@line 1659 "_struct.c"
        $offset=$45; //@line 1659 "_struct.c"
        var $46=$offset; //@line 1660 "_struct.c"
        var $47=($46)==-1; //@line 1660 "_struct.c"
        if ($47) { __lastLabel__ = 11; __label__ = 12; break; } else { __lastLabel__ = 11; __label__ = 15; break; } //@line 1660 "_struct.c"
      case 12: // $bb12
        var $48=_PyErr_Occurred(); //@line 1660 "_struct.c"
        var $49=($48)!=0; //@line 1660 "_struct.c"
        if ($49) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1660 "_struct.c"
      case 13: // $bb13
        $0=0; //@line 1661 "_struct.c"
        __label__ = 24; break; //@line 1661 "_struct.c"
      case 14: // $bb14thread_pre_split
        var $_pr=$offset;
        __lastLabel__ = 14; __label__ = 15; break;
      case 15: // $bb14
        var $50=__lastLabel__ == 14 ? $_pr : ($46);
        var $51=($50) < 0; //@line 1664 "_struct.c"
        if ($51) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1664 "_struct.c"
      case 16: // $bb15
        var $52=HEAP[$buffer_len]; //@line 1665 "_struct.c"
        var $53=$offset; //@line 1665 "_struct.c"
        var $54=($53) + ($52); //@line 1665 "_struct.c"
        $offset=$54; //@line 1665 "_struct.c"
        __lastLabel__ = 16; __label__ = 18; break; //@line 1665 "_struct.c"
      case 17: // $bb16thread_pre_split
        var $_pr1=$offset;
        __lastLabel__ = 17; __label__ = 18; break;
      case 18: // $bb16
        var $55=__lastLabel__ == 17 ? $_pr1 : ($54);
        var $56=($55) < 0; //@line 1668 "_struct.c"
        if ($56) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 1668 "_struct.c"
      case 19: // $bb17
        var $57=HEAP[$buffer_len]; //@line 1668 "_struct.c"
        var $58=$offset; //@line 1668 "_struct.c"
        var $59=($57) - ($58); //@line 1668 "_struct.c"
        var $60=$soself; //@line 1668 "_struct.c"
        var $61=$60+8; //@line 1668 "_struct.c"
        var $62=HEAP[$61]; //@line 1668 "_struct.c"
        var $63=($59) < ($62); //@line 1668 "_struct.c"
        if ($63) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1668 "_struct.c"
      case 20: // $bb18
        var $64=$soself; //@line 1669 "_struct.c"
        var $65=$64+8; //@line 1669 "_struct.c"
        var $66=HEAP[$65]; //@line 1669 "_struct.c"
        var $67=HEAP[_StructError]; //@line 1669 "_struct.c"
        var $68=_PyErr_Format($67, __str39, allocate([$66,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1669 "_struct.c"
        $0=0; //@line 1672 "_struct.c"
        __label__ = 24; break; //@line 1672 "_struct.c"
      case 21: // $bb19
        var $69=HEAP[$buffer]; //@line 1676 "_struct.c"
        var $70=$offset; //@line 1676 "_struct.c"
        var $71=$69+$70; //@line 1676 "_struct.c"
        var $72=$soself; //@line 1676 "_struct.c"
        var $73=$args_addr; //@line 1676 "_struct.c"
        var $74=_s_pack_internal($72, $73, 2, $71); //@line 1676 "_struct.c"
        var $75=($74)!=0; //@line 1676 "_struct.c"
        if ($75) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1676 "_struct.c"
      case 22: // $bb20
        $0=0; //@line 1677 "_struct.c"
        __label__ = 24; break; //@line 1677 "_struct.c"
      case 23: // $bb21
        var $76=HEAP[__Py_NoneStruct]; //@line 1680 "_struct.c"
        var $77=($76) + 1; //@line 1680 "_struct.c"
        HEAP[__Py_NoneStruct]=$77; //@line 1680 "_struct.c"
        $0=__Py_NoneStruct; //@line 1680 "_struct.c"
        __label__ = 24; break; //@line 1680 "_struct.c"
      case 24: // $bb22
        var $78=$0; //@line 1648 "_struct.c"
        $retval=$78; //@line 1648 "_struct.c"
        var $retval23=$retval; //@line 1648 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval23; //@line 1648 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _s_get_format($self, $unused) {
    ;
    var __label__;
  
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $unused_addr=$unused;
    var $1=$self_addr; //@line 1686 "_struct.c"
    var $2=$1+20; //@line 1686 "_struct.c"
    var $3=HEAP[$2]; //@line 1686 "_struct.c"
    var $4=$3; //@line 1686 "_struct.c"
    var $5=HEAP[$4]; //@line 1686 "_struct.c"
    var $6=($5) + 1; //@line 1686 "_struct.c"
    var $7=$3; //@line 1686 "_struct.c"
    HEAP[$7]=$6; //@line 1686 "_struct.c"
    var $8=$self_addr; //@line 1687 "_struct.c"
    var $9=$8+20; //@line 1687 "_struct.c"
    var $10=HEAP[$9]; //@line 1687 "_struct.c"
    $0=$10; //@line 1687 "_struct.c"
    var $11=$0; //@line 1687 "_struct.c"
    $retval=$11; //@line 1687 "_struct.c"
    var $retval1=$retval; //@line 1687 "_struct.c"
    ;
    return $retval1; //@line 1687 "_struct.c"
  }
  

  function _s_get_size($self, $unused) {
    ;
    var __label__;
  
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $unused_addr=$unused;
    var $1=$self_addr; //@line 1693 "_struct.c"
    var $2=$1+8; //@line 1693 "_struct.c"
    var $3=HEAP[$2]; //@line 1693 "_struct.c"
    var $4=_PyInt_FromSsize_t($3); //@line 1693 "_struct.c"
    $0=$4; //@line 1693 "_struct.c"
    var $5=$0; //@line 1693 "_struct.c"
    $retval=$5; //@line 1693 "_struct.c"
    var $retval1=$retval; //@line 1693 "_struct.c"
    ;
    return $retval1; //@line 1693 "_struct.c"
  }
  

  function _cache_struct($fmt) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $fmt_addr;
        var $retval;
        var $0;
        var $s_object;
        $fmt_addr=$fmt;
        var $1=HEAP[_cache]; //@line 1771 "_struct.c"
        var $2=($1)==0; //@line 1771 "_struct.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1771 "_struct.c"
      case 1: // $bb
        var $3=_PyDict_New(); //@line 1772 "_struct.c"
        HEAP[_cache]=$3; //@line 1772 "_struct.c"
        var $4=HEAP[_cache]; //@line 1773 "_struct.c"
        var $5=($4)==0; //@line 1773 "_struct.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1773 "_struct.c"
      case 2: // $bb1
        $0=0; //@line 1774 "_struct.c"
        __label__ = 11; break; //@line 1774 "_struct.c"
      case 3: // $bb2
        var $6=HEAP[_cache]; //@line 1777 "_struct.c"
        var $7=$fmt_addr; //@line 1777 "_struct.c"
        var $8=_PyDict_GetItem($6, $7); //@line 1777 "_struct.c"
        $s_object=$8; //@line 1777 "_struct.c"
        var $9=($8)!=0; //@line 1778 "_struct.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1778 "_struct.c"
      case 4: // $bb3
        var $10=$s_object; //@line 1779 "_struct.c"
        var $11=$10; //@line 1779 "_struct.c"
        var $12=HEAP[$11]; //@line 1779 "_struct.c"
        var $13=($12) + 1; //@line 1779 "_struct.c"
        var $14=$s_object; //@line 1779 "_struct.c"
        var $15=$14; //@line 1779 "_struct.c"
        HEAP[$15]=$13; //@line 1779 "_struct.c"
        var $16=$s_object; //@line 1780 "_struct.c"
        $0=$16; //@line 1780 "_struct.c"
        __label__ = 11; break; //@line 1780 "_struct.c"
      case 5: // $bb4
        var $17=$fmt_addr; //@line 1783 "_struct.c"
        var $18=_PyObject_CallFunctionObjArgs(_PyStructType, allocate([$17,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1783 "_struct.c"
        $s_object=$18; //@line 1783 "_struct.c"
        var $19=$s_object; //@line 1784 "_struct.c"
        var $20=($19)!=0; //@line 1784 "_struct.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 10; break; } //@line 1784 "_struct.c"
      case 6: // $bb5
        var $21=HEAP[_cache]; //@line 1785 "_struct.c"
        var $22=_PyDict_Size($21); //@line 1785 "_struct.c"
        var $23=($22) > 99; //@line 1785 "_struct.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1785 "_struct.c"
      case 7: // $bb6
        var $24=HEAP[_cache]; //@line 1786 "_struct.c"
        _PyDict_Clear($24); //@line 1786 "_struct.c"
        __label__ = 8; break; //@line 1786 "_struct.c"
      case 8: // $bb7
        var $25=HEAP[_cache]; //@line 1788 "_struct.c"
        var $26=$fmt_addr; //@line 1788 "_struct.c"
        var $27=$s_object; //@line 1788 "_struct.c"
        var $28=_PyDict_SetItem($25, $26, $27); //@line 1788 "_struct.c"
        var $29=($28)==-1; //@line 1788 "_struct.c"
        if ($29) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1788 "_struct.c"
      case 9: // $bb8
        _PyErr_Clear(); //@line 1789 "_struct.c"
        __label__ = 10; break; //@line 1789 "_struct.c"
      case 10: // $bb9
        var $30=$s_object; //@line 1791 "_struct.c"
        $0=$30; //@line 1791 "_struct.c"
        __label__ = 11; break; //@line 1791 "_struct.c"
      case 11: // $bb10
        var $31=$0; //@line 1774 "_struct.c"
        $retval=$31; //@line 1774 "_struct.c"
        var $retval11=$retval; //@line 1774 "_struct.c"
        ;
        return $retval11; //@line 1774 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _clearcache($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $_py_tmp;
        $self_addr=$self;
        var $1=HEAP[_cache]; //@line 1800 "_struct.c"
        var $2=($1)!=0; //@line 1800 "_struct.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1800 "_struct.c"
      case 1: // $bb
        var $3=HEAP[_cache]; //@line 1800 "_struct.c"
        $_py_tmp=$3; //@line 1800 "_struct.c"
        HEAP[_cache]=0; //@line 1800 "_struct.c"
        var $4=$_py_tmp; //@line 1800 "_struct.c"
        var $5=$4; //@line 1800 "_struct.c"
        var $6=HEAP[$5]; //@line 1800 "_struct.c"
        var $7=($6) - 1; //@line 1800 "_struct.c"
        var $8=$_py_tmp; //@line 1800 "_struct.c"
        var $9=$8; //@line 1800 "_struct.c"
        HEAP[$9]=$7; //@line 1800 "_struct.c"
        var $10=$_py_tmp; //@line 1800 "_struct.c"
        var $11=$10; //@line 1800 "_struct.c"
        var $12=HEAP[$11]; //@line 1800 "_struct.c"
        var $13=($12)==0; //@line 1800 "_struct.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1800 "_struct.c"
      case 2: // $bb1
        var $14=$_py_tmp; //@line 1800 "_struct.c"
        var $15=$14+4; //@line 1800 "_struct.c"
        var $16=HEAP[$15]; //@line 1800 "_struct.c"
        var $17=$16+24; //@line 1800 "_struct.c"
        var $18=HEAP[$17]; //@line 1800 "_struct.c"
        var $19=$_py_tmp; //@line 1800 "_struct.c"
        FUNCTION_TABLE[$18]($19); //@line 1800 "_struct.c"
        __label__ = 3; break; //@line 1800 "_struct.c"
      case 3: // $bb2
        var $20=HEAP[__Py_NoneStruct]; //@line 1801 "_struct.c"
        var $21=($20) + 1; //@line 1801 "_struct.c"
        HEAP[__Py_NoneStruct]=$21; //@line 1801 "_struct.c"
        $0=__Py_NoneStruct; //@line 1801 "_struct.c"
        var $22=$0; //@line 1801 "_struct.c"
        $retval=$22; //@line 1801 "_struct.c"
        var $retval3=$retval; //@line 1801 "_struct.c"
        ;
        return $retval3; //@line 1801 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _calcsize($self, $fmt) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $fmt_addr;
        var $retval;
        var $0;
        var $n;
        var $s_object;
        $self_addr=$self;
        $fmt_addr=$fmt;
        var $1=$fmt_addr; //@line 1811 "_struct.c"
        var $2=_cache_struct($1); //@line 1811 "_struct.c"
        $s_object=$2; //@line 1811 "_struct.c"
        var $3=$s_object; //@line 1812 "_struct.c"
        var $4=($3)==0; //@line 1812 "_struct.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1812 "_struct.c"
      case 1: // $bb
        $0=0; //@line 1813 "_struct.c"
        __label__ = 5; break; //@line 1813 "_struct.c"
      case 2: // $bb1
        var $5=$s_object; //@line 1814 "_struct.c"
        var $6=$5; //@line 1814 "_struct.c"
        var $7=$6+8; //@line 1814 "_struct.c"
        var $8=HEAP[$7]; //@line 1814 "_struct.c"
        $n=$8; //@line 1814 "_struct.c"
        var $9=$s_object; //@line 1815 "_struct.c"
        var $10=$9; //@line 1815 "_struct.c"
        var $11=HEAP[$10]; //@line 1815 "_struct.c"
        var $12=($11) - 1; //@line 1815 "_struct.c"
        var $13=$s_object; //@line 1815 "_struct.c"
        var $14=$13; //@line 1815 "_struct.c"
        HEAP[$14]=$12; //@line 1815 "_struct.c"
        var $15=$s_object; //@line 1815 "_struct.c"
        var $16=$15; //@line 1815 "_struct.c"
        var $17=HEAP[$16]; //@line 1815 "_struct.c"
        var $18=($17)==0; //@line 1815 "_struct.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1815 "_struct.c"
      case 3: // $bb2
        var $19=$s_object; //@line 1815 "_struct.c"
        var $20=$19+4; //@line 1815 "_struct.c"
        var $21=HEAP[$20]; //@line 1815 "_struct.c"
        var $22=$21+24; //@line 1815 "_struct.c"
        var $23=HEAP[$22]; //@line 1815 "_struct.c"
        var $24=$s_object; //@line 1815 "_struct.c"
        FUNCTION_TABLE[$23]($24); //@line 1815 "_struct.c"
        __label__ = 4; break; //@line 1815 "_struct.c"
      case 4: // $bb3
        var $25=$n; //@line 1816 "_struct.c"
        var $26=_PyInt_FromSsize_t($25); //@line 1816 "_struct.c"
        $0=$26; //@line 1816 "_struct.c"
        __label__ = 5; break; //@line 1816 "_struct.c"
      case 5: // $bb4
        var $27=$0; //@line 1813 "_struct.c"
        $retval=$27; //@line 1813 "_struct.c"
        var $retval5=$retval; //@line 1813 "_struct.c"
        ;
        return $retval5; //@line 1813 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $s_object;
        var $fmt;
        var $newargs;
        var $result;
        var $n;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1826 "_struct.c"
        var $2=$1; //@line 1826 "_struct.c"
        var $3=$2+8; //@line 1826 "_struct.c"
        var $4=HEAP[$3]; //@line 1826 "_struct.c"
        $n=$4; //@line 1826 "_struct.c"
        var $5=$n; //@line 1828 "_struct.c"
        var $6=($5)==0; //@line 1828 "_struct.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1828 "_struct.c"
      case 1: // $bb
        var $7=HEAP[_PyExc_TypeError]; //@line 1829 "_struct.c"
        _PyErr_SetString($7, __str48); //@line 1829 "_struct.c"
        $0=0; //@line 1830 "_struct.c"
        __label__ = 13; break; //@line 1830 "_struct.c"
      case 2: // $bb1
        var $8=$args_addr; //@line 1832 "_struct.c"
        var $9=$8; //@line 1832 "_struct.c"
        var $10=$9+12; //@line 1832 "_struct.c"
        var $11=$10; //@line 1832 "_struct.c"
        var $12=HEAP[$11]; //@line 1832 "_struct.c"
        $fmt=$12; //@line 1832 "_struct.c"
        var $13=$args_addr; //@line 1833 "_struct.c"
        var $14=$n; //@line 1833 "_struct.c"
        var $15=_PyTuple_GetSlice($13, 1, $14); //@line 1833 "_struct.c"
        $newargs=$15; //@line 1833 "_struct.c"
        var $16=$newargs; //@line 1834 "_struct.c"
        var $17=($16)==0; //@line 1834 "_struct.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1834 "_struct.c"
      case 3: // $bb2
        $0=0; //@line 1835 "_struct.c"
        __label__ = 13; break; //@line 1835 "_struct.c"
      case 4: // $bb3
        var $18=$fmt; //@line 1837 "_struct.c"
        var $19=_cache_struct($18); //@line 1837 "_struct.c"
        $s_object=$19; //@line 1837 "_struct.c"
        var $20=$s_object; //@line 1838 "_struct.c"
        var $21=($20)==0; //@line 1838 "_struct.c"
        if ($21) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 1838 "_struct.c"
      case 5: // $bb4
        var $22=$newargs; //@line 1839 "_struct.c"
        var $23=$22; //@line 1839 "_struct.c"
        var $24=HEAP[$23]; //@line 1839 "_struct.c"
        var $25=($24) - 1; //@line 1839 "_struct.c"
        var $26=$newargs; //@line 1839 "_struct.c"
        var $27=$26; //@line 1839 "_struct.c"
        HEAP[$27]=$25; //@line 1839 "_struct.c"
        var $28=$newargs; //@line 1839 "_struct.c"
        var $29=$28; //@line 1839 "_struct.c"
        var $30=HEAP[$29]; //@line 1839 "_struct.c"
        var $31=($30)==0; //@line 1839 "_struct.c"
        if ($31) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1839 "_struct.c"
      case 6: // $bb5
        var $32=$newargs; //@line 1839 "_struct.c"
        var $33=$32+4; //@line 1839 "_struct.c"
        var $34=HEAP[$33]; //@line 1839 "_struct.c"
        var $35=$34+24; //@line 1839 "_struct.c"
        var $36=HEAP[$35]; //@line 1839 "_struct.c"
        var $37=$newargs; //@line 1839 "_struct.c"
        FUNCTION_TABLE[$36]($37); //@line 1839 "_struct.c"
        __label__ = 7; break; //@line 1839 "_struct.c"
      case 7: // $bb6
        $0=0; //@line 1840 "_struct.c"
        __label__ = 13; break; //@line 1840 "_struct.c"
      case 8: // $bb7
        var $38=$s_object; //@line 1842 "_struct.c"
        var $39=$newargs; //@line 1842 "_struct.c"
        var $40=_s_pack($38, $39); //@line 1842 "_struct.c"
        $result=$40; //@line 1842 "_struct.c"
        var $41=$newargs; //@line 1843 "_struct.c"
        var $42=$41; //@line 1843 "_struct.c"
        var $43=HEAP[$42]; //@line 1843 "_struct.c"
        var $44=($43) - 1; //@line 1843 "_struct.c"
        var $45=$newargs; //@line 1843 "_struct.c"
        var $46=$45; //@line 1843 "_struct.c"
        HEAP[$46]=$44; //@line 1843 "_struct.c"
        var $47=$newargs; //@line 1843 "_struct.c"
        var $48=$47; //@line 1843 "_struct.c"
        var $49=HEAP[$48]; //@line 1843 "_struct.c"
        var $50=($49)==0; //@line 1843 "_struct.c"
        if ($50) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1843 "_struct.c"
      case 9: // $bb8
        var $51=$newargs; //@line 1843 "_struct.c"
        var $52=$51+4; //@line 1843 "_struct.c"
        var $53=HEAP[$52]; //@line 1843 "_struct.c"
        var $54=$53+24; //@line 1843 "_struct.c"
        var $55=HEAP[$54]; //@line 1843 "_struct.c"
        var $56=$newargs; //@line 1843 "_struct.c"
        FUNCTION_TABLE[$55]($56); //@line 1843 "_struct.c"
        __label__ = 10; break; //@line 1843 "_struct.c"
      case 10: // $bb9
        var $57=$s_object; //@line 1844 "_struct.c"
        var $58=$57; //@line 1844 "_struct.c"
        var $59=HEAP[$58]; //@line 1844 "_struct.c"
        var $60=($59) - 1; //@line 1844 "_struct.c"
        var $61=$s_object; //@line 1844 "_struct.c"
        var $62=$61; //@line 1844 "_struct.c"
        HEAP[$62]=$60; //@line 1844 "_struct.c"
        var $63=$s_object; //@line 1844 "_struct.c"
        var $64=$63; //@line 1844 "_struct.c"
        var $65=HEAP[$64]; //@line 1844 "_struct.c"
        var $66=($65)==0; //@line 1844 "_struct.c"
        if ($66) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1844 "_struct.c"
      case 11: // $bb10
        var $67=$s_object; //@line 1844 "_struct.c"
        var $68=$67+4; //@line 1844 "_struct.c"
        var $69=HEAP[$68]; //@line 1844 "_struct.c"
        var $70=$69+24; //@line 1844 "_struct.c"
        var $71=HEAP[$70]; //@line 1844 "_struct.c"
        var $72=$s_object; //@line 1844 "_struct.c"
        FUNCTION_TABLE[$71]($72); //@line 1844 "_struct.c"
        __label__ = 12; break; //@line 1844 "_struct.c"
      case 12: // $bb11
        var $73=$result; //@line 1845 "_struct.c"
        $0=$73; //@line 1845 "_struct.c"
        __label__ = 13; break; //@line 1845 "_struct.c"
      case 13: // $bb12
        var $74=$0; //@line 1830 "_struct.c"
        $retval=$74; //@line 1830 "_struct.c"
        var $retval13=$retval; //@line 1830 "_struct.c"
        ;
        return $retval13; //@line 1830 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_into($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $s_object;
        var $fmt;
        var $newargs;
        var $result;
        var $n;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1856 "_struct.c"
        var $2=$1; //@line 1856 "_struct.c"
        var $3=$2+8; //@line 1856 "_struct.c"
        var $4=HEAP[$3]; //@line 1856 "_struct.c"
        $n=$4; //@line 1856 "_struct.c"
        var $5=$n; //@line 1858 "_struct.c"
        var $6=($5)==0; //@line 1858 "_struct.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1858 "_struct.c"
      case 1: // $bb
        var $7=HEAP[_PyExc_TypeError]; //@line 1859 "_struct.c"
        _PyErr_SetString($7, __str48); //@line 1859 "_struct.c"
        $0=0; //@line 1860 "_struct.c"
        __label__ = 13; break; //@line 1860 "_struct.c"
      case 2: // $bb1
        var $8=$args_addr; //@line 1862 "_struct.c"
        var $9=$8; //@line 1862 "_struct.c"
        var $10=$9+12; //@line 1862 "_struct.c"
        var $11=$10; //@line 1862 "_struct.c"
        var $12=HEAP[$11]; //@line 1862 "_struct.c"
        $fmt=$12; //@line 1862 "_struct.c"
        var $13=$args_addr; //@line 1863 "_struct.c"
        var $14=$n; //@line 1863 "_struct.c"
        var $15=_PyTuple_GetSlice($13, 1, $14); //@line 1863 "_struct.c"
        $newargs=$15; //@line 1863 "_struct.c"
        var $16=$newargs; //@line 1864 "_struct.c"
        var $17=($16)==0; //@line 1864 "_struct.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1864 "_struct.c"
      case 3: // $bb2
        $0=0; //@line 1865 "_struct.c"
        __label__ = 13; break; //@line 1865 "_struct.c"
      case 4: // $bb3
        var $18=$fmt; //@line 1867 "_struct.c"
        var $19=_cache_struct($18); //@line 1867 "_struct.c"
        $s_object=$19; //@line 1867 "_struct.c"
        var $20=$s_object; //@line 1868 "_struct.c"
        var $21=($20)==0; //@line 1868 "_struct.c"
        if ($21) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 1868 "_struct.c"
      case 5: // $bb4
        var $22=$newargs; //@line 1869 "_struct.c"
        var $23=$22; //@line 1869 "_struct.c"
        var $24=HEAP[$23]; //@line 1869 "_struct.c"
        var $25=($24) - 1; //@line 1869 "_struct.c"
        var $26=$newargs; //@line 1869 "_struct.c"
        var $27=$26; //@line 1869 "_struct.c"
        HEAP[$27]=$25; //@line 1869 "_struct.c"
        var $28=$newargs; //@line 1869 "_struct.c"
        var $29=$28; //@line 1869 "_struct.c"
        var $30=HEAP[$29]; //@line 1869 "_struct.c"
        var $31=($30)==0; //@line 1869 "_struct.c"
        if ($31) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1869 "_struct.c"
      case 6: // $bb5
        var $32=$newargs; //@line 1869 "_struct.c"
        var $33=$32+4; //@line 1869 "_struct.c"
        var $34=HEAP[$33]; //@line 1869 "_struct.c"
        var $35=$34+24; //@line 1869 "_struct.c"
        var $36=HEAP[$35]; //@line 1869 "_struct.c"
        var $37=$newargs; //@line 1869 "_struct.c"
        FUNCTION_TABLE[$36]($37); //@line 1869 "_struct.c"
        __label__ = 7; break; //@line 1869 "_struct.c"
      case 7: // $bb6
        $0=0; //@line 1870 "_struct.c"
        __label__ = 13; break; //@line 1870 "_struct.c"
      case 8: // $bb7
        var $38=$s_object; //@line 1872 "_struct.c"
        var $39=$newargs; //@line 1872 "_struct.c"
        var $40=_s_pack_into($38, $39); //@line 1872 "_struct.c"
        $result=$40; //@line 1872 "_struct.c"
        var $41=$newargs; //@line 1873 "_struct.c"
        var $42=$41; //@line 1873 "_struct.c"
        var $43=HEAP[$42]; //@line 1873 "_struct.c"
        var $44=($43) - 1; //@line 1873 "_struct.c"
        var $45=$newargs; //@line 1873 "_struct.c"
        var $46=$45; //@line 1873 "_struct.c"
        HEAP[$46]=$44; //@line 1873 "_struct.c"
        var $47=$newargs; //@line 1873 "_struct.c"
        var $48=$47; //@line 1873 "_struct.c"
        var $49=HEAP[$48]; //@line 1873 "_struct.c"
        var $50=($49)==0; //@line 1873 "_struct.c"
        if ($50) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1873 "_struct.c"
      case 9: // $bb8
        var $51=$newargs; //@line 1873 "_struct.c"
        var $52=$51+4; //@line 1873 "_struct.c"
        var $53=HEAP[$52]; //@line 1873 "_struct.c"
        var $54=$53+24; //@line 1873 "_struct.c"
        var $55=HEAP[$54]; //@line 1873 "_struct.c"
        var $56=$newargs; //@line 1873 "_struct.c"
        FUNCTION_TABLE[$55]($56); //@line 1873 "_struct.c"
        __label__ = 10; break; //@line 1873 "_struct.c"
      case 10: // $bb9
        var $57=$s_object; //@line 1874 "_struct.c"
        var $58=$57; //@line 1874 "_struct.c"
        var $59=HEAP[$58]; //@line 1874 "_struct.c"
        var $60=($59) - 1; //@line 1874 "_struct.c"
        var $61=$s_object; //@line 1874 "_struct.c"
        var $62=$61; //@line 1874 "_struct.c"
        HEAP[$62]=$60; //@line 1874 "_struct.c"
        var $63=$s_object; //@line 1874 "_struct.c"
        var $64=$63; //@line 1874 "_struct.c"
        var $65=HEAP[$64]; //@line 1874 "_struct.c"
        var $66=($65)==0; //@line 1874 "_struct.c"
        if ($66) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1874 "_struct.c"
      case 11: // $bb10
        var $67=$s_object; //@line 1874 "_struct.c"
        var $68=$67+4; //@line 1874 "_struct.c"
        var $69=HEAP[$68]; //@line 1874 "_struct.c"
        var $70=$69+24; //@line 1874 "_struct.c"
        var $71=HEAP[$70]; //@line 1874 "_struct.c"
        var $72=$s_object; //@line 1874 "_struct.c"
        FUNCTION_TABLE[$71]($72); //@line 1874 "_struct.c"
        __label__ = 12; break; //@line 1874 "_struct.c"
      case 12: // $bb11
        var $73=$result; //@line 1875 "_struct.c"
        $0=$73; //@line 1875 "_struct.c"
        __label__ = 13; break; //@line 1875 "_struct.c"
      case 13: // $bb12
        var $74=$0; //@line 1860 "_struct.c"
        $retval=$74; //@line 1860 "_struct.c"
        var $retval13=$retval; //@line 1860 "_struct.c"
        ;
        return $retval13; //@line 1860 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _unpack($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $s_object;
        var $fmt=__stackBase__;
        var $inputstr=__stackBase__+4;
        var $result;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1887 "_struct.c"
        var $2=_PyArg_UnpackTuple($1, __str42, 2, 2, allocate([$fmt,0,0,0,$inputstr,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1887 "_struct.c"
        var $3=($2)==0; //@line 1887 "_struct.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1887 "_struct.c"
      case 1: // $bb
        $0=0; //@line 1888 "_struct.c"
        __label__ = 7; break; //@line 1888 "_struct.c"
      case 2: // $bb1
        var $4=HEAP[$fmt]; //@line 1890 "_struct.c"
        var $5=_cache_struct($4); //@line 1890 "_struct.c"
        $s_object=$5; //@line 1890 "_struct.c"
        var $6=$s_object; //@line 1891 "_struct.c"
        var $7=($6)==0; //@line 1891 "_struct.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1891 "_struct.c"
      case 3: // $bb2
        $0=0; //@line 1892 "_struct.c"
        __label__ = 7; break; //@line 1892 "_struct.c"
      case 4: // $bb3
        var $8=HEAP[$inputstr]; //@line 1893 "_struct.c"
        var $9=$s_object; //@line 1893 "_struct.c"
        var $10=_s_unpack($9, $8); //@line 1893 "_struct.c"
        $result=$10; //@line 1893 "_struct.c"
        var $11=$s_object; //@line 1894 "_struct.c"
        var $12=$11; //@line 1894 "_struct.c"
        var $13=HEAP[$12]; //@line 1894 "_struct.c"
        var $14=($13) - 1; //@line 1894 "_struct.c"
        var $15=$s_object; //@line 1894 "_struct.c"
        var $16=$15; //@line 1894 "_struct.c"
        HEAP[$16]=$14; //@line 1894 "_struct.c"
        var $17=$s_object; //@line 1894 "_struct.c"
        var $18=$17; //@line 1894 "_struct.c"
        var $19=HEAP[$18]; //@line 1894 "_struct.c"
        var $20=($19)==0; //@line 1894 "_struct.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1894 "_struct.c"
      case 5: // $bb4
        var $21=$s_object; //@line 1894 "_struct.c"
        var $22=$21+4; //@line 1894 "_struct.c"
        var $23=HEAP[$22]; //@line 1894 "_struct.c"
        var $24=$23+24; //@line 1894 "_struct.c"
        var $25=HEAP[$24]; //@line 1894 "_struct.c"
        var $26=$s_object; //@line 1894 "_struct.c"
        FUNCTION_TABLE[$25]($26); //@line 1894 "_struct.c"
        __label__ = 6; break; //@line 1894 "_struct.c"
      case 6: // $bb5
        var $27=$result; //@line 1895 "_struct.c"
        $0=$27; //@line 1895 "_struct.c"
        __label__ = 7; break; //@line 1895 "_struct.c"
      case 7: // $bb6
        var $28=$0; //@line 1888 "_struct.c"
        $retval=$28; //@line 1888 "_struct.c"
        var $retval7=$retval; //@line 1888 "_struct.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 1888 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _unpack_from($self, $args, $kwds) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $s_object;
        var $fmt;
        var $newargs;
        var $result;
        var $n;
        $self_addr=$self;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$args_addr; //@line 1906 "_struct.c"
        var $2=$1; //@line 1906 "_struct.c"
        var $3=$2+8; //@line 1906 "_struct.c"
        var $4=HEAP[$3]; //@line 1906 "_struct.c"
        $n=$4; //@line 1906 "_struct.c"
        var $5=$n; //@line 1908 "_struct.c"
        var $6=($5)==0; //@line 1908 "_struct.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1908 "_struct.c"
      case 1: // $bb
        var $7=HEAP[_PyExc_TypeError]; //@line 1909 "_struct.c"
        _PyErr_SetString($7, __str48); //@line 1909 "_struct.c"
        $0=0; //@line 1910 "_struct.c"
        __label__ = 13; break; //@line 1910 "_struct.c"
      case 2: // $bb1
        var $8=$args_addr; //@line 1912 "_struct.c"
        var $9=$8; //@line 1912 "_struct.c"
        var $10=$9+12; //@line 1912 "_struct.c"
        var $11=$10; //@line 1912 "_struct.c"
        var $12=HEAP[$11]; //@line 1912 "_struct.c"
        $fmt=$12; //@line 1912 "_struct.c"
        var $13=$args_addr; //@line 1913 "_struct.c"
        var $14=$n; //@line 1913 "_struct.c"
        var $15=_PyTuple_GetSlice($13, 1, $14); //@line 1913 "_struct.c"
        $newargs=$15; //@line 1913 "_struct.c"
        var $16=$newargs; //@line 1914 "_struct.c"
        var $17=($16)==0; //@line 1914 "_struct.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1914 "_struct.c"
      case 3: // $bb2
        $0=0; //@line 1915 "_struct.c"
        __label__ = 13; break; //@line 1915 "_struct.c"
      case 4: // $bb3
        var $18=$fmt; //@line 1917 "_struct.c"
        var $19=_cache_struct($18); //@line 1917 "_struct.c"
        $s_object=$19; //@line 1917 "_struct.c"
        var $20=$s_object; //@line 1918 "_struct.c"
        var $21=($20)==0; //@line 1918 "_struct.c"
        if ($21) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 1918 "_struct.c"
      case 5: // $bb4
        var $22=$newargs; //@line 1919 "_struct.c"
        var $23=$22; //@line 1919 "_struct.c"
        var $24=HEAP[$23]; //@line 1919 "_struct.c"
        var $25=($24) - 1; //@line 1919 "_struct.c"
        var $26=$newargs; //@line 1919 "_struct.c"
        var $27=$26; //@line 1919 "_struct.c"
        HEAP[$27]=$25; //@line 1919 "_struct.c"
        var $28=$newargs; //@line 1919 "_struct.c"
        var $29=$28; //@line 1919 "_struct.c"
        var $30=HEAP[$29]; //@line 1919 "_struct.c"
        var $31=($30)==0; //@line 1919 "_struct.c"
        if ($31) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1919 "_struct.c"
      case 6: // $bb5
        var $32=$newargs; //@line 1919 "_struct.c"
        var $33=$32+4; //@line 1919 "_struct.c"
        var $34=HEAP[$33]; //@line 1919 "_struct.c"
        var $35=$34+24; //@line 1919 "_struct.c"
        var $36=HEAP[$35]; //@line 1919 "_struct.c"
        var $37=$newargs; //@line 1919 "_struct.c"
        FUNCTION_TABLE[$36]($37); //@line 1919 "_struct.c"
        __label__ = 7; break; //@line 1919 "_struct.c"
      case 7: // $bb6
        $0=0; //@line 1920 "_struct.c"
        __label__ = 13; break; //@line 1920 "_struct.c"
      case 8: // $bb7
        var $38=$s_object; //@line 1922 "_struct.c"
        var $39=$newargs; //@line 1922 "_struct.c"
        var $40=$kwds_addr; //@line 1922 "_struct.c"
        var $41=_s_unpack_from($38, $39, $40); //@line 1922 "_struct.c"
        $result=$41; //@line 1922 "_struct.c"
        var $42=$newargs; //@line 1923 "_struct.c"
        var $43=$42; //@line 1923 "_struct.c"
        var $44=HEAP[$43]; //@line 1923 "_struct.c"
        var $45=($44) - 1; //@line 1923 "_struct.c"
        var $46=$newargs; //@line 1923 "_struct.c"
        var $47=$46; //@line 1923 "_struct.c"
        HEAP[$47]=$45; //@line 1923 "_struct.c"
        var $48=$newargs; //@line 1923 "_struct.c"
        var $49=$48; //@line 1923 "_struct.c"
        var $50=HEAP[$49]; //@line 1923 "_struct.c"
        var $51=($50)==0; //@line 1923 "_struct.c"
        if ($51) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1923 "_struct.c"
      case 9: // $bb8
        var $52=$newargs; //@line 1923 "_struct.c"
        var $53=$52+4; //@line 1923 "_struct.c"
        var $54=HEAP[$53]; //@line 1923 "_struct.c"
        var $55=$54+24; //@line 1923 "_struct.c"
        var $56=HEAP[$55]; //@line 1923 "_struct.c"
        var $57=$newargs; //@line 1923 "_struct.c"
        FUNCTION_TABLE[$56]($57); //@line 1923 "_struct.c"
        __label__ = 10; break; //@line 1923 "_struct.c"
      case 10: // $bb9
        var $58=$s_object; //@line 1924 "_struct.c"
        var $59=$58; //@line 1924 "_struct.c"
        var $60=HEAP[$59]; //@line 1924 "_struct.c"
        var $61=($60) - 1; //@line 1924 "_struct.c"
        var $62=$s_object; //@line 1924 "_struct.c"
        var $63=$62; //@line 1924 "_struct.c"
        HEAP[$63]=$61; //@line 1924 "_struct.c"
        var $64=$s_object; //@line 1924 "_struct.c"
        var $65=$64; //@line 1924 "_struct.c"
        var $66=HEAP[$65]; //@line 1924 "_struct.c"
        var $67=($66)==0; //@line 1924 "_struct.c"
        if ($67) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1924 "_struct.c"
      case 11: // $bb10
        var $68=$s_object; //@line 1924 "_struct.c"
        var $69=$68+4; //@line 1924 "_struct.c"
        var $70=HEAP[$69]; //@line 1924 "_struct.c"
        var $71=$70+24; //@line 1924 "_struct.c"
        var $72=HEAP[$71]; //@line 1924 "_struct.c"
        var $73=$s_object; //@line 1924 "_struct.c"
        FUNCTION_TABLE[$72]($73); //@line 1924 "_struct.c"
        __label__ = 12; break; //@line 1924 "_struct.c"
      case 12: // $bb11
        var $74=$result; //@line 1925 "_struct.c"
        $0=$74; //@line 1925 "_struct.c"
        __label__ = 13; break; //@line 1925 "_struct.c"
      case 13: // $bb12
        var $75=$0; //@line 1910 "_struct.c"
        $retval=$75; //@line 1910 "_struct.c"
        var $retval13=$retval; //@line 1910 "_struct.c"
        ;
        return $retval13; //@line 1910 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_struct() {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ver;
        var $m;
        var $one=__stackBase__;
        var $native;
        var $other;
        var $ptr;
        var $0=_PyString_FromString(__str51); //@line 1976 "_struct.c"
        $ver=$0; //@line 1976 "_struct.c"
        var $1=$ver; //@line 1977 "_struct.c"
        var $2=($1)==0; //@line 1977 "_struct.c"
        if ($2) { __label__ = 22; break; } else { __label__ = 1; break; } //@line 1977 "_struct.c"
      case 1: // $bb
        var $3=_Py_InitModule4(__str52, _module_functions, _module_doc, 0, 1013); //@line 1980 "_struct.c"
        $m=$3; //@line 1980 "_struct.c"
        var $4=$m; //@line 1981 "_struct.c"
        var $5=($4)==0; //@line 1981 "_struct.c"
        if ($5) { __label__ = 22; break; } else { __label__ = 2; break; } //@line 1981 "_struct.c"
      case 2: // $bb1
        HEAP[_PyStructType+4]=_PyType_Type; //@line 1984 "_struct.c"
        var $6=_PyType_Ready(_PyStructType); //@line 1985 "_struct.c"
        var $7=($6) < 0; //@line 1985 "_struct.c"
        if ($7) { __label__ = 22; break; } else { __label__ = 3; break; } //@line 1985 "_struct.c"
      case 3: // $bb2
        HEAP[$one]=1; //@line 1994 "_struct.c"
        $native=_native_table; //@line 1995 "_struct.c"
        var $one3=$one; //@line 1997 "_struct.c"
        var $8=HEAP[$one3]; //@line 1997 "_struct.c"
        var $9=($8)!=0; //@line 1997 "_struct.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1997 "_struct.c"
      case 4: // $bb5
        $other=_lilendian_table; //@line 1998 "_struct.c"
        __label__ = 17; break; //@line 1998 "_struct.c"
      case 5: // $bb6
        $other=_bigendian_table; //@line 2000 "_struct.c"
        __label__ = 17; break; //@line 2000 "_struct.c"
      case 6: // $bb8
        var $10=$other; //@line 2006 "_struct.c"
        $ptr=$10; //@line 2006 "_struct.c"
        __label__ = 15; break; //@line 2006 "_struct.c"
      case 7: // $bb9
        var $11=$ptr; //@line 2008 "_struct.c"
        var $12=$11; //@line 2008 "_struct.c"
        var $13=HEAP[$12]; //@line 2008 "_struct.c"
        var $14=$native; //@line 2008 "_struct.c"
        var $15=$14; //@line 2008 "_struct.c"
        var $16=HEAP[$15]; //@line 2008 "_struct.c"
        var $17=($13)==($16); //@line 2008 "_struct.c"
        var $18=$ptr; //@line 2011 "_struct.c"
        if ($17) { __label__ = 8; break; } else { __label__ = 14; break; } //@line 2008 "_struct.c"
      case 8: // $bb10
        var $19=$other; //@line 2011 "_struct.c"
        var $20=($18)==($19); //@line 2011 "_struct.c"
        if ($20) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2011 "_struct.c"
      case 9: // $bb11
        var $21=$other; //@line 2012 "_struct.c"
        var $22=$21+20; //@line 2012 "_struct.c"
        $other=$22; //@line 2012 "_struct.c"
        __label__ = 10; break; //@line 2012 "_struct.c"
      case 10: // $bb12
        var $23=$ptr; //@line 2015 "_struct.c"
        var $24=$23+4; //@line 2015 "_struct.c"
        var $25=HEAP[$24]; //@line 2015 "_struct.c"
        var $26=$native; //@line 2015 "_struct.c"
        var $27=$26+4; //@line 2015 "_struct.c"
        var $28=HEAP[$27]; //@line 2015 "_struct.c"
        var $29=($25)!=($28); //@line 2015 "_struct.c"
        if ($29) { __label__ = 16; break; } else { __label__ = 11; break; } //@line 2015 "_struct.c"
      case 11: // $bb13
        var $30=$ptr; //@line 2019 "_struct.c"
        var $31=$30; //@line 2019 "_struct.c"
        var $32=HEAP[$31]; //@line 2019 "_struct.c"
        var $33=($32)==100; //@line 2019 "_struct.c"
        if ($33) { __label__ = 16; break; } else { __label__ = 12; break; } //@line 2019 "_struct.c"
      case 12: // $bb14
        var $34=$ptr; //@line 2019 "_struct.c"
        var $35=$34; //@line 2019 "_struct.c"
        var $36=HEAP[$35]; //@line 2019 "_struct.c"
        var $37=($36)==102; //@line 2019 "_struct.c"
        if ($37) { __label__ = 16; break; } else { __label__ = 13; break; } //@line 2019 "_struct.c"
      case 13: // $bb15
        var $38=$native; //@line 2021 "_struct.c"
        var $39=$38+16; //@line 2021 "_struct.c"
        var $40=HEAP[$39]; //@line 2021 "_struct.c"
        var $41=$ptr; //@line 2021 "_struct.c"
        var $42=$41+16; //@line 2021 "_struct.c"
        HEAP[$42]=$40; //@line 2021 "_struct.c"
        var $43=$native; //@line 2022 "_struct.c"
        var $44=$43+12; //@line 2022 "_struct.c"
        var $45=HEAP[$44]; //@line 2022 "_struct.c"
        var $46=$ptr; //@line 2022 "_struct.c"
        var $47=$46+12; //@line 2022 "_struct.c"
        HEAP[$47]=$45; //@line 2022 "_struct.c"
        __label__ = 16; break; //@line 2022 "_struct.c"
      case 14: // $bb16
        var $48=$18+20; //@line 2025 "_struct.c"
        $ptr=$48; //@line 2025 "_struct.c"
        __label__ = 15; break; //@line 2025 "_struct.c"
      case 15: // $bb17
        var $49=$ptr; //@line 2007 "_struct.c"
        var $50=$49; //@line 2007 "_struct.c"
        var $51=HEAP[$50]; //@line 2007 "_struct.c"
        var $52=($51)!=0; //@line 2007 "_struct.c"
        if ($52) { __label__ = 7; break; } else { __label__ = 16; break; } //@line 2007 "_struct.c"
      case 16: // $bb18
        var $53=$native; //@line 2027 "_struct.c"
        var $54=$53+20; //@line 2027 "_struct.c"
        $native=$54; //@line 2027 "_struct.c"
        __label__ = 17; break; //@line 2027 "_struct.c"
      case 17: // $bb19
        var $55=$native; //@line 2005 "_struct.c"
        var $56=$55; //@line 2005 "_struct.c"
        var $57=HEAP[$56]; //@line 2005 "_struct.c"
        var $58=($57)==0; //@line 2005 "_struct.c"
        if ($58) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 2005 "_struct.c"
      case 18: // $bb20
        var $59=$other; //@line 2005 "_struct.c"
        var $60=$59; //@line 2005 "_struct.c"
        var $61=HEAP[$60]; //@line 2005 "_struct.c"
        var $62=($61)!=0; //@line 2005 "_struct.c"
        if ($62) { __label__ = 6; break; } else { __label__ = 19; break; } //@line 2005 "_struct.c"
      case 19: // $bb21
        var $63=HEAP[_StructError]; //@line 2032 "_struct.c"
        var $64=($63)==0; //@line 2032 "_struct.c"
        if ($64) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 2032 "_struct.c"
      case 20: // $bb22
        var $65=_PyErr_NewException(__str53, 0, 0); //@line 2033 "_struct.c"
        HEAP[_StructError]=$65; //@line 2033 "_struct.c"
        var $66=HEAP[_StructError]; //@line 2034 "_struct.c"
        var $67=($66)==0; //@line 2034 "_struct.c"
        if ($67) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 2034 "_struct.c"
      case 21: // $bb23
        var $68=HEAP[_StructError]; //@line 2038 "_struct.c"
        var $69=$68; //@line 2038 "_struct.c"
        var $70=HEAP[$69]; //@line 2038 "_struct.c"
        var $71=($70) + 1; //@line 2038 "_struct.c"
        var $72=$68; //@line 2038 "_struct.c"
        HEAP[$72]=$71; //@line 2038 "_struct.c"
        var $73=HEAP[_StructError]; //@line 2039 "_struct.c"
        var $74=$m; //@line 2039 "_struct.c"
        var $75=_PyModule_AddObject($74, __str54, $73); //@line 2039 "_struct.c"
        var $76=HEAP[_PyStructType]; //@line 2041 "_struct.c"
        var $77=($76) + 1; //@line 2041 "_struct.c"
        HEAP[_PyStructType]=$77; //@line 2041 "_struct.c"
        var $78=$m; //@line 2042 "_struct.c"
        var $79=_PyModule_AddObject($78, __str47, _PyStructType); //@line 2042 "_struct.c"
        var $80=$m; //@line 2044 "_struct.c"
        var $81=$ver; //@line 2044 "_struct.c"
        var $82=_PyModule_AddObject($80, __str55, $81); //@line 2044 "_struct.c"
        var $83=$m; //@line 2046 "_struct.c"
        var $84=_PyModule_AddIntConstant($83, __str56, 1); //@line 2046 "_struct.c"
        var $85=$m; //@line 2047 "_struct.c"
        var $86=_PyModule_AddIntConstant($85, __str57, 1); //@line 2047 "_struct.c"
        __label__ = 22; break; //@line 2047 "_struct.c"
      case 22: // $return
        STACKTOP = __stackBase__;
        return; //@line 1978 "_struct.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_struct"] = _init_struct;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_nu_byte,0,_np_byte,0,_nu_ubyte,0,_np_ubyte,0,_nu_char,0,_np_char,0,_nu_short,0,_np_short,0,_nu_ushort,0,_np_ushort,0,_nu_int,0,_np_int,0,_nu_uint,0,_np_uint,0,_nu_long,0,_np_long,0,_nu_ulong,0,_np_ulong,0,_nu_longlong,0,_np_longlong,0,_nu_ulonglong,0,_np_ulonglong,0,_nu_bool,0,_np_bool,0,_nu_float,0,_np_float,0,_nu_double,0,_np_double,0,_nu_void_p,0,_np_void_p,0,_bu_int,0,_bp_int,0,_bu_uint,0,_bp_uint,0,_bu_longlong,0,_bp_longlong,0,_bu_ulonglong,0,_bp_ulonglong,0,_bu_bool,0,_bp_bool,0,_bu_float,0,_bp_float,0,_bu_double,0,_bp_double,0,_lu_int,0,_lp_int,0,_lu_uint,0,_lp_uint,0,_lu_longlong,0,_lp_longlong,0,_lu_ulonglong,0,_lp_ulonglong,0,_lu_float,0,_lp_float,0,_lu_double,0,_lp_double,0,_s_pack,0,_s_pack_into,0,_s_unpack,0,_s_unpack_from,0,_s_get_format,0,_s_get_size,0,_s_dealloc,0,_PyObject_GenericGetAttr,0,_PyObject_GenericSetAttr,0,_s_init,0,_PyType_GenericAlloc,0,_s_new,0,_PyObject_Free,0,_clearcache,0,_calcsize,0,_pack,0,_pack_into,0,_unpack,0,_unpack_from,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([98,66,104,72,105,73,108,76,113,81,0] /* bBhHiIlLqQ\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([118,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* v != ((void _)0)\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,95,115,116,114,117,99,116,46,99,0] /* ../cpython/Modules/_ */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8419=allocate([103,101,116,95,112,121,108,111,110,103,0] /* get_pylong\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([105,110,116,101,103,101,114,32,97,114,103,117,109,101,110,116,32,101,120,112,101,99,116,101,100,44,32,103,111,116,32,102,108,111,97,116,0] /* integer argument exp */, "i8", ALLOC_NORMAL);
__str4=allocate([105,110,116,101,103,101,114,32,97,114,103,117,109,101,110,116,32,101,120,112,101,99,116,101,100,44,32,103,111,116,32,110,111,110,45,105,110,116,101,103,101,114,32,40,105,109,112,108,105,99,105,116,32,99,111,110,118,101,114,115,105,111,110,32,117,115,105,110,103,32,95,95,105,110,116,95,95,32,105,115,32,100,101,112,114,101,99,97,116,101,100,41,0] /* integer argument exp */, "i8", ALLOC_NORMAL);
__str5=allocate([95,95,105,110,116,95,95,32,109,101,116,104,111,100,32,114,101,116,117,114,110,101,100,32,110,111,110,45,105,110,116,101,103,101,114,0] /* __int__ method retur */, "i8", ALLOC_NORMAL);
_StructError=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str6=allocate([99,97,110,110,111,116,32,99,111,110,118,101,114,116,32,97,114,103,117,109,101,110,116,32,116,111,32,105,110,116,101,103,101,114,0] /* cannot convert argum */, "i8", ALLOC_NORMAL);
__str7=allocate([40,40,40,40,118,41,45,62,111,98,95,116,121,112,101,41,45,62,116,112,95,102,108,97,103,115,32,38,32,40,40,49,76,60,60,50,51,41,41,41,32,33,61,32,48,41,32,124,124,32,40,40,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,118,41,41,45,62,111,98,95,116,121,112,101,41,41,45,62,116,112,95,102,108,97,103,115,32,38,32,40,40,49,76,60,60,50,52,41,41,41,32,33,61,32,48,41,0] /* ((((v)->ob_type)->tp */, "i8", ALLOC_NORMAL);
__str8=allocate([40,40,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,118,41,41,45,62,111,98,95,116,121,112,101,41,41,45,62,116,112,95,102,108,97,103,115,32,38,32,40,40,49,76,60,60,50,52,41,41,41,32,33,61,32,48,41,0] /* ((((((PyObject_)(v)) */, "i8", ALLOC_NORMAL);
__str9=allocate([48,0] /* 0\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8543=allocate([103,101,116,95,108,111,110,103,0] /* get_long\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8572=allocate([103,101,116,95,117,108,111,110,103,0] /* get_ulong\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8601=allocate([103,101,116,95,108,111,110,103,108,111,110,103,0] /* get_longlong\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8630=allocate([103,101,116,95,117,108,111,110,103,108,111,110,103,0] /* get_ulonglong\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([102,45,62,115,105,122,101,32,62,61,32,49,32,38,38,32,102,45,62,115,105,122,101,32,60,61,32,52,0] /* f->size >= 1 && f->s */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8689=allocate([95,114,97,110,103,101,95,101,114,114,111,114,0] /* _range_error\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([39,37,99,39,32,102,111,114,109,97,116,32,114,101,113,117,105,114,101,115,32,48,32,60,61,32,110,117,109,98,101,114,32,60,61,32,37,122,117,0] /* '%c' format requires */, "i8", ALLOC_NORMAL);
__str12=allocate([39,37,99,39,32,102,111,114,109,97,116,32,114,101,113,117,105,114,101,115,32,37,122,100,32,60,61,32,110,117,109,98,101,114,32,60,61,32,37,122,100,0] /* '%c' format requires */, "i8", ALLOC_NORMAL);
__str13=allocate([98,121,116,101,32,102,111,114,109,97,116,32,114,101,113,117,105,114,101,115,32,45,49,50,56,32,60,61,32,110,117,109,98,101,114,32,60,61,32,49,50,55,0] /* byte format requires */, "i8", ALLOC_NORMAL);
__str14=allocate([117,98,121,116,101,32,102,111,114,109,97,116,32,114,101,113,117,105,114,101,115,32,48,32,60,61,32,110,117,109,98,101,114,32,60,61,32,50,53,53,0] /* ubyte format require */, "i8", ALLOC_NORMAL);
__str15=allocate([99,104,97,114,32,102,111,114,109,97,116,32,114,101,113,117,105,114,101,32,115,116,114,105,110,103,32,111,102,32,108,101,110,103,116,104,32,49,0] /* char format require  */, "i8", ALLOC_NORMAL);
__str16=allocate([115,104,111,114,116,32,102,111,114,109,97,116,32,114,101,113,117,105,114,101,115,32,83,72,82,84,95,77,73,78,32,60,61,32,110,117,109,98,101,114,32,60,61,32,83,72,82,84,95,77,65,88,0] /* short format require */, "i8", ALLOC_NORMAL);
__str17=allocate([117,115,104,111,114,116,32,102,111,114,109,97,116,32,114,101,113,117,105,114,101,115,32,48,32,60,61,32,110,117,109,98,101,114,32,60,61,32,85,83,72,82,84,95,77,65,88,0] /* ushort format requir */, "i8", ALLOC_NORMAL);
__str18=allocate([114,101,113,117,105,114,101,100,32,97,114,103,117,109,101,110,116,32,105,115,32,110,111,116,32,97,32,102,108,111,97,116,0] /* required argument is */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9097=allocate([110,112,95,118,111,105,100,95,112,0] /* np_void_p\00 */, "i8", ALLOC_NORMAL);
_native_table=allocate([120, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i8","i8","i8","i8","i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i8","i8","i8","i8","i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i8","i8","i8","i8","i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_bigendian_table=allocate([120, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i8","i8","i8","i8","i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i8","i8","i8","i8","i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i8","i8","i8","i8","i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_lilendian_table=allocate([120, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i8","i8","i8","i8","i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i8","i8","i8","i8","i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i8","i8","i8","i8","i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (i8*, %struct.formatdef*)*",0,0,0,"i32 (i8*, %struct.PyObject*, %struct.formatdef*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str19=allocate([98,97,100,32,99,104,97,114,32,105,110,32,115,116,114,117,99,116,32,102,111,114,109,97,116,0] /* bad char in struct f */, "i8", ALLOC_NORMAL);
__str20=allocate([116,111,116,97,108,32,115,116,114,117,99,116,32,115,105,122,101,32,116,111,111,32,108,111,110,103,0] /* total struct size to */, "i8", ALLOC_NORMAL);
__str21=allocate([116,121,112,101,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,32,38,38,32,116,121,112,101,45,62,116,112,95,97,108,108,111,99,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* type != ((void _)0)  */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9830=allocate([115,95,110,101,119,0] /* s_new\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,115,101,108,102,41,41,45,62,111,98,95,116,121,112,101,41,32,61,61,32,40,38,80,121,83,116,114,117,99,116,84,121,112,101,41,32,124,124,32,80,121,84,121,112,101,95,73,115,83,117,98,116,121,112,101,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,115,101,108,102,41,41,45,62,111,98,95,116,121,112,101,41,44,32,40,38,80,121,83,116,114,117,99,116,84,121,112,101,41,41,41,0] /* ((((PyObject_)(self) */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9853=allocate([115,95,105,110,105,116,0] /* s_init\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([83,58,83,116,114,117,99,116,0] /* S:Struct\00 */, "i8", ALLOC_NORMAL);
_kwlist_9852=allocate(8, "i8*", ALLOC_NORMAL);
__str24=allocate([102,111,114,109,97,116,0] /* format\00 */, "i8", ALLOC_NORMAL);
_s_unpack__doc__=allocate([83,46,117,110,112,97,99,107,40,115,116,114,41,32,45,62,32,40,118,49,44,32,118,50,44,32,46,46,46,41,10,10,82,101,116,117,114,110,32,116,117,112,108,101,32,99,111,110,116,97,105,110,105,110,103,32,118,97,108,117,101,115,32,117,110,112,97,99,107,101,100,32,97,99,99,111,114,100,105,110,103,32,116,111,32,116,104,105,115,32,83,116,114,117,99,116,39,115,32,102,111,114,109,97,116,46,10,82,101,113,117,105,114,101,115,32,108,101,110,40,115,116,114,41,32,61,61,32,115,101,108,102,46,115,105,122,101,46,32,83,101,101,32,115,116,114,117,99,116,46,95,95,100,111,99,95,95,32,102,111,114,32,109,111,114,101,32,111,110,32,102,111,114,109,97,116,10,115,116,114,105,110,103,115,46,0] /* S.unpack(str) -> (v1 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9973=allocate([115,95,117,110,112,97,99,107,0] /* s_unpack\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([115,111,115,101,108,102,45,62,115,95,99,111,100,101,115,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* soself->s_codes != ( */, "i8", ALLOC_NORMAL);
__str26=allocate([115,35,58,117,110,112,97,99,107,0] /* s#:unpack\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([117,110,112,97,99,107,32,114,101,113,117,105,114,101,115,32,97,32,115,116,114,105,110,103,32,97,114,103,117,109,101,110,116,32,111,102,32,108,101,110,103,116,104,32,37,122,100,0] /* unpack requires a st */, "i8", ALLOC_NORMAL);
_s_unpack_from__doc__=allocate([83,46,117,110,112,97,99,107,95,102,114,111,109,40,98,117,102,102,101,114,91,44,32,111,102,102,115,101,116,93,41,32,45,62,32,40,118,49,44,32,118,50,44,32,46,46,46,41,10,10,82,101,116,117,114,110,32,116,117,112,108,101,32,99,111,110,116,97,105,110,105,110,103,32,118,97,108,117,101,115,32,117,110,112,97,99,107,101,100,32,97,99,99,111,114,100,105,110,103,32,116,111,32,116,104,105,115,32,83,116,114,117,99,116,39,115,32,102,111,114,109,97,116,46,10,85,110,108,105,107,101,32,117,110,112,97,99,107,44,32,117,110,112,97,99,107,95,102,114,111,109,32,99,97,110,32,117,110,112,97,99,107,32,118,97,108,117,101,115,32,102,114,111,109,32,97,110,121,32,111,98,106,101,99,116,32,115,117,112,112,111,114,116,105,110,103,10,116,104,101,32,98,117,102,102,101,114,32,65,80,73,44,32,110,111,116,32,106,117,115,116,32,115,116,114,46,32,82,101,113,117,105,114,101,115,32,108,101,110,40,98,117,102,102,101,114,91,111,102,102,115,101,116,58,93,41,32,62,61,32,115,101,108,102,46,115,105,122,101,46,10,83,101,101,32,115,116,114,117,99,116,46,95,95,100,111,99,95,95,32,102,111,114,32,109,111,114,101,32,111,110,32,102,111,114,109,97,116,32,115,116,114,105,110,103,115,46,0] /* S.unpack_from(buffer */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10041=allocate([115,95,117,110,112,97,99,107,95,102,114,111,109,0] /* s_unpack_from\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([122,35,124,110,58,117,110,112,97,99,107,95,102,114,111,109,0] /* z#|n:unpack_from\00 */, "i8", ALLOC_NORMAL);
_kwlist_10035=allocate(12, "i8*", ALLOC_NORMAL);
__str29=allocate([98,117,102,102,101,114,0] /* buffer\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([111,102,102,115,101,116,0] /* offset\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([117,110,112,97,99,107,95,102,114,111,109,32,114,101,113,117,105,114,101,115,32,97,32,98,117,102,102,101,114,32,97,114,103,117,109,101,110,116,0] /* unpack_from requires */, "i8", ALLOC_NORMAL);
__str32=allocate([117,110,112,97,99,107,95,102,114,111,109,32,114,101,113,117,105,114,101,115,32,97,32,98,117,102,102,101,114,32,111,102,32,97,116,32,108,101,97,115,116,32,37,122,100,32,98,121,116,101,115,0] /* unpack_from requires */, "i8", ALLOC_NORMAL);
__str33=allocate([97,114,103,117,109,101,110,116,32,102,111,114,32,39,115,39,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,0] /* argument for 's' mus */, "i8", ALLOC_NORMAL);
__str34=allocate([97,114,103,117,109,101,110,116,32,102,111,114,32,39,112,39,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,0] /* argument for 'p' mus */, "i8", ALLOC_NORMAL);
__str35=allocate([105,110,116,101,103,101,114,32,111,117,116,32,111,102,32,114,97,110,103,101,32,102,111,114,32,39,37,99,39,32,102,111,114,109,97,116,32,99,111,100,101,0] /* integer out of range */, "i8", ALLOC_NORMAL);
_s_pack__doc__=allocate([83,46,112,97,99,107,40,118,49,44,32,118,50,44,32,46,46,46,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,115,116,114,105,110,103,32,99,111,110,116,97,105,110,105,110,103,32,118,97,108,117,101,115,32,118,49,44,32,118,50,44,32,46,46,46,32,112,97,99,107,101,100,32,97,99,99,111,114,100,105,110,103,32,116,111,32,116,104,105,115,10,83,116,114,117,99,116,39,115,32,102,111,114,109,97,116,46,32,83,101,101,32,115,116,114,117,99,116,46,95,95,100,111,99,95,95,32,102,111,114,32,109,111,114,101,32,111,110,32,102,111,114,109,97,116,32,115,116,114,105,110,103,115,46,0] /* S.pack(v1, v2, ...)  */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10174=allocate([115,95,112,97,99,107,0] /* s_pack\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([112,97,99,107,32,114,101,113,117,105,114,101,115,32,101,120,97,99,116,108,121,32,37,122,100,32,97,114,103,117,109,101,110,116,115,0] /* pack requires exactl */, "i8", ALLOC_NORMAL);
_s_pack_into__doc__=allocate([83,46,112,97,99,107,95,105,110,116,111,40,98,117,102,102,101,114,44,32,111,102,102,115,101,116,44,32,118,49,44,32,118,50,44,32,46,46,46,41,10,10,80,97,99,107,32,116,104,101,32,118,97,108,117,101,115,32,118,49,44,32,118,50,44,32,46,46,46,32,97,99,99,111,114,100,105,110,103,32,116,111,32,116,104,105,115,32,83,116,114,117,99,116,39,115,32,102,111,114,109,97,116,44,32,119,114,105,116,101,32,10,116,104,101,32,112,97,99,107,101,100,32,98,121,116,101,115,32,105,110,116,111,32,116,104,101,32,119,114,105,116,97,98,108,101,32,98,117,102,102,101,114,32,98,117,102,32,115,116,97,114,116,105,110,103,32,97,116,32,111,102,102,115,101,116,46,32,32,78,111,116,101,10,116,104,97,116,32,116,104,101,32,111,102,102,115,101,116,32,105,115,32,110,111,116,32,97,110,32,111,112,116,105,111,110,97,108,32,97,114,103,117,109,101,110,116,46,32,32,83,101,101,32,115,116,114,117,99,116,46,95,95,100,111,99,95,95,32,102,111,114,32,10,109,111,114,101,32,111,110,32,102,111,114,109,97,116,32,115,116,114,105,110,103,115,46,0] /* S.pack_into(buffer,  */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10219=allocate([115,95,112,97,99,107,95,105,110,116,111,0] /* s_pack_into\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([112,97,99,107,95,105,110,116,111,32,114,101,113,117,105,114,101,115,32,101,120,97,99,116,108,121,32,37,122,100,32,97,114,103,117,109,101,110,116,115,0] /* pack_into requires e */, "i8", ALLOC_NORMAL);
__str38=allocate([98,117,102,102,101,114,95,108,101,110,32,62,61,32,48,0] /* buffer_len >= 0\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([112,97,99,107,95,105,110,116,111,32,114,101,113,117,105,114,101,115,32,97,32,98,117,102,102,101,114,32,111,102,32,97,116,32,108,101,97,115,116,32,37,122,100,32,98,121,116,101,115,0] /* pack_into requires a */, "i8", ALLOC_NORMAL);
__str40=allocate([112,97,99,107,0] /* pack\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([112,97,99,107,95,105,110,116,111,0] /* pack_into\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([117,110,112,97,99,107,0] /* unpack\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([117,110,112,97,99,107,95,102,114,111,109,0] /* unpack_from\00 */, "i8", ALLOC_NORMAL);
_s_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_s__doc__=allocate([67,111,109,112,105,108,101,100,32,115,116,114,117,99,116,32,111,98,106,101,99,116,0] /* Compiled struct obje */, "i8", ALLOC_NORMAL);
__str44=allocate([115,116,114,117,99,116,32,102,111,114,109,97,116,32,115,116,114,105,110,103,0] /* struct format string */, "i8", ALLOC_NORMAL);
__str45=allocate([115,105,122,101,0] /* size\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([115,116,114,117,99,116,32,115,105,122,101,32,105,110,32,98,121,116,101,115,0] /* struct size in bytes */, "i8", ALLOC_NORMAL);
_s_getsetlist=allocate(60, ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str47=allocate([83,116,114,117,99,116,0] /* Struct\00 */, "i8", ALLOC_NORMAL);
_PyStructType=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_cache=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_clearcache_doc=allocate([67,108,101,97,114,32,116,104,101,32,105,110,116,101,114,110,97,108,32,99,97,99,104,101,46,0] /* Clear the internal c */, "i8", ALLOC_NORMAL);
_calcsize_doc=allocate([82,101,116,117,114,110,32,115,105,122,101,32,111,102,32,67,32,115,116,114,117,99,116,32,100,101,115,99,114,105,98,101,100,32,98,121,32,102,111,114,109,97,116,32,115,116,114,105,110,103,32,102,109,116,46,0] /* Return size of C str */, "i8", ALLOC_NORMAL);
_pack_doc=allocate([82,101,116,117,114,110,32,115,116,114,105,110,103,32,99,111,110,116,97,105,110,105,110,103,32,118,97,108,117,101,115,32,118,49,44,32,118,50,44,32,46,46,46,32,112,97,99,107,101,100,32,97,99,99,111,114,100,105,110,103,32,116,111,32,102,109,116,46,0] /* Return string contai */, "i8", ALLOC_NORMAL);
__str48=allocate([109,105,115,115,105,110,103,32,102,111,114,109,97,116,32,97,114,103,117,109,101,110,116,0] /* missing format argum */, "i8", ALLOC_NORMAL);
_pack_into_doc=allocate([80,97,99,107,32,116,104,101,32,118,97,108,117,101,115,32,118,49,44,32,118,50,44,32,46,46,46,32,97,99,99,111,114,100,105,110,103,32,116,111,32,102,109,116,46,10,87,114,105,116,101,32,116,104,101,32,112,97,99,107,101,100,32,98,121,116,101,115,32,105,110,116,111,32,116,104,101,32,119,114,105,116,97,98,108,101,32,98,117,102,102,101,114,32,98,117,102,32,115,116,97,114,116,105,110,103,32,97,116,32,111,102,102,115,101,116,46,0] /* Pack the values v1,  */, "i8", ALLOC_NORMAL);
_unpack_doc=allocate([85,110,112,97,99,107,32,116,104,101,32,115,116,114,105,110,103,32,99,111,110,116,97,105,110,105,110,103,32,112,97,99,107,101,100,32,67,32,115,116,114,117,99,116,117,114,101,32,100,97,116,97,44,32,97,99,99,111,114,100,105,110,103,32,116,111,32,102,109,116,46,10,82,101,113,117,105,114,101,115,32,108,101,110,40,115,116,114,105,110,103,41,32,61,61,32,99,97,108,99,115,105,122,101,40,102,109,116,41,46,0] /* Unpack the string co */, "i8", ALLOC_NORMAL);
_unpack_from_doc=allocate([85,110,112,97,99,107,32,116,104,101,32,98,117,102,102,101,114,44,32,99,111,110,116,97,105,110,105,110,103,32,112,97,99,107,101,100,32,67,32,115,116,114,117,99,116,117,114,101,32,100,97,116,97,44,32,97,99,99,111,114,100,105,110,103,32,116,111,10,102,109,116,44,32,115,116,97,114,116,105,110,103,32,97,116,32,111,102,102,115,101,116,46,32,82,101,113,117,105,114,101,115,32,108,101,110,40,98,117,102,102,101,114,91,111,102,102,115,101,116,58,93,41,32,62,61,32,99,97,108,99,115,105,122,101,40,102,109,116,41,46,0] /* Unpack the buffer, c */, "i8", ALLOC_NORMAL);
__str49=allocate([95,99,108,101,97,114,99,97,99,104,101,0] /* _clearcache\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([99,97,108,99,115,105,122,101,0] /* calcsize\00 */, "i8", ALLOC_NORMAL);
_module_functions=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_module_doc=allocate([70,117,110,99,116,105,111,110,115,32,116,111,32,99,111,110,118,101,114,116,32,98,101,116,119,101,101,110,32,80,121,116,104,111,110,32,118,97,108,117,101,115,32,97,110,100,32,67,32,115,116,114,117,99,116,115,32,114,101,112,114,101,115,101,110,116,101,100,10,97,115,32,80,121,116,104,111,110,32,115,116,114,105,110,103,115,46,32,73,116,32,117,115,101,115,32,102,111,114,109,97,116,32,115,116,114,105,110,103,115,32,40,101,120,112,108,97,105,110,101,100,32,98,101,108,111,119,41,32,97,115,32,99,111,109,112,97,99,116,10,100,101,115,99,114,105,112,116,105,111,110,115,32,111,102,32,116,104,101,32,108,97,121,45,111,117,116,32,111,102,32,116,104,101,32,67,32,115,116,114,117,99,116,115,32,97,110,100,32,116,104,101,32,105,110,116,101,110,100,101,100,32,99,111,110,118,101,114,115,105,111,110,10,116,111,47,102,114,111,109,32,80,121,116,104,111,110,32,118,97,108,117,101,115,46,10,10,84,104,101,32,111,112,116,105,111,110,97,108,32,102,105,114,115,116,32,102,111,114,109,97,116,32,99,104,97,114,32,105,110,100,105,99,97,116,101,115,32,98,121,116,101,32,111,114,100,101,114,44,32,115,105,122,101,32,97,110,100,32,97,108,105,103,110,109,101,110,116,58,10,32,32,64,58,32,110,97,116,105,118,101,32,111,114,100,101,114,44,32,115,105,122,101,32,38,32,97,108,105,103,110,109,101,110,116,32,40,100,101,102,97,117,108,116,41,10,32,32,61,58,32,110,97,116,105,118,101,32,111,114,100,101,114,44,32,115,116,100,46,32,115,105,122,101,32,38,32,97,108,105,103,110,109,101,110,116,10,32,32,60,58,32,108,105,116,116,108,101,45,101,110,100,105,97,110,44,32,115,116,100,46,32,115,105,122,101,32,38,32,97,108,105,103,110,109,101,110,116,10,32,32,62,58,32,98,105,103,45,101,110,100,105,97,110,44,32,115,116,100,46,32,115,105,122,101,32,38,32,97,108,105,103,110,109,101,110,116,10,32,32,33,58,32,115,97,109,101,32,97,115,32,62,10,10,84,104,101,32,114,101,109,97,105,110,105,110,103,32,99,104,97,114,115,32,105,110,100,105,99,97,116,101,32,116,121,112,101,115,32,111,102,32,97,114,103,115,32,97,110,100,32,109,117,115,116,32,109,97,116,99,104,32,101,120,97,99,116,108,121,59,10,116,104,101,115,101,32,99,97,110,32,98,101,32,112,114,101,99,101,100,101,100,32,98,121,32,97,32,100,101,99,105,109,97,108,32,114,101,112,101,97,116,32,99,111,117,110,116,58,10,32,32,120,58,32,112,97,100,32,98,121,116,101,32,40,110,111,32,100,97,116,97,41,59,32,99,58,99,104,97,114,59,32,98,58,115,105,103,110,101,100,32,98,121,116,101,59,32,66,58,117,110,115,105,103,110,101,100,32,98,121,116,101,59,10,32,32,63,58,32,95,66,111,111,108,32,40,114,101,113,117,105,114,101,115,32,67,57,57,59,32,105,102,32,110,111,116,32,97,118,97,105,108,97,98,108,101,44,32,99,104,97,114,32,105,115,32,117,115,101,100,32,105,110,115,116,101,97,100,41,10,32,32,104,58,115,104,111,114,116,59,32,72,58,117,110,115,105,103,110,101,100,32,115,104,111,114,116,59,32,105,58,105,110,116,59,32,73,58,117,110,115,105,103,110,101,100,32,105,110,116,59,10,32,32,108,58,108,111,110,103,59,32,76,58,117,110,115,105,103,110,101,100,32,108,111,110,103,59,32,102,58,102,108,111,97,116,59,32,100,58,100,111,117,98,108,101,46,10,83,112,101,99,105,97,108,32,99,97,115,101,115,32,40,112,114,101,99,101,100,105,110,103,32,100,101,99,105,109,97,108,32,99,111,117,110,116,32,105,110,100,105,99,97,116,101,115,32,108,101,110,103,116,104,41,58,10,32,32,115,58,115,116,114,105,110,103,32,40,97,114,114,97,121,32,111,102,32,99,104,97,114,41,59,32,112,58,32,112,97,115,99,97,108,32,115,116,114,105,110,103,32,40,119,105,116,104,32,99,111,117,110,116,32,98,121,116,101,41,46,10,83,112,101,99,105,97,108,32,99,97,115,101,32,40,111,110,108,121,32,97,118,97,105,108,97,98,108,101,32,105,110,32,110,97,116,105,118,101,32,102,111,114,109,97,116,41,58,10,32,32,80,58,97,110,32,105,110,116,101,103,101,114,32,116,121,112,101,32,116,104,97,116,32,105,115,32,119,105,100,101,32,101,110,111,117,103,104,32,116,111,32,104,111,108,100,32,97,32,112,111,105,110,116,101,114,46,10,83,112,101,99,105,97,108,32,99,97,115,101,32,40,110,111,116,32,105,110,32,110,97,116,105,118,101,32,109,111,100,101,32,117,110,108,101,115,115,32,39,108,111,110,103,32,108,111,110,103,39,32,105,110,32,112,108,97,116,102,111,114,109,32,67,41,58,10,32,32,113,58,108,111,110,103,32,108,111,110,103,59,32,81,58,117,110,115,105,103,110,101,100,32,108,111,110,103,32,108,111,110,103,10,87,104,105,116,101,115,112,97,99,101,32,98,101,116,119,101,101,110,32,102,111,114,109,97,116,115,32,105,115,32,105,103,110,111,114,101,100,46,10,10,84,104,101,32,118,97,114,105,97,98,108,101,32,115,116,114,117,99,116,46,101,114,114,111,114,32,105,115,32,97,110,32,101,120,99,101,112,116,105,111,110,32,114,97,105,115,101,100,32,111,110,32,101,114,114,111,114,115,46,10,0] /* Functions to convert */, "i8", ALLOC_NORMAL);
__str51=allocate([48,46,50,0] /* 0.2\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([95,115,116,114,117,99,116,0] /* _struct\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([115,116,114,117,99,116,46,101,114,114,111,114,0] /* struct.error\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([101,114,114,111,114,0] /* error\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([95,95,118,101,114,115,105,111,110,95,95,0] /* __version__\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([95,80,89,95,83,84,82,85,67,84,95,82,65,78,71,69,95,67,72,69,67,75,73,78,71,0] /* _PY_STRUCT_RANGE_CHE */, "i8", ALLOC_NORMAL);
__str57=allocate([95,80,89,95,83,84,82,85,67,84,95,70,76,79,65,84,95,67,79,69,82,67,69,0] /* _PY_STRUCT_FLOAT_COE */, "i8", ALLOC_NORMAL);
HEAP[_native_table+32]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_native_table+36]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_native_table+52]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_native_table+56]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_native_table+72]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_native_table+76]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_native_table+132]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_native_table+136]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_native_table+152]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_native_table+156]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_native_table+172]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_native_table+176]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_native_table+192]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_native_table+196]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_native_table+212]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_native_table+216]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_native_table+232]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_native_table+236]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_native_table+252]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_native_table+256]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_native_table+272]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_native_table+276]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_native_table+292]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_native_table+296]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_native_table+312]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_native_table+316]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_native_table+332]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_native_table+336]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_native_table+352]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_native_table+356]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_bigendian_table+32]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_bigendian_table+36]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_bigendian_table+52]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_bigendian_table+56]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_bigendian_table+72]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_bigendian_table+76]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_bigendian_table+132]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_bigendian_table+136]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_bigendian_table+152]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_bigendian_table+156]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_bigendian_table+172]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_bigendian_table+176]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_bigendian_table+192]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_bigendian_table+196]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_bigendian_table+212]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_bigendian_table+216]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_bigendian_table+232]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_bigendian_table+236]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_bigendian_table+252]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[_bigendian_table+256]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[_bigendian_table+272]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[_bigendian_table+276]=(FUNCTION_TABLE_OFFSET + 76);
HEAP[_bigendian_table+292]=(FUNCTION_TABLE_OFFSET + 78);
HEAP[_bigendian_table+296]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_bigendian_table+312]=(FUNCTION_TABLE_OFFSET + 82);
HEAP[_bigendian_table+316]=(FUNCTION_TABLE_OFFSET + 84);
HEAP[_bigendian_table+332]=(FUNCTION_TABLE_OFFSET + 86);
HEAP[_bigendian_table+336]=(FUNCTION_TABLE_OFFSET + 88);
HEAP[_lilendian_table+32]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_lilendian_table+36]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_lilendian_table+52]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_lilendian_table+56]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_lilendian_table+72]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_lilendian_table+76]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_lilendian_table+132]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_lilendian_table+136]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_lilendian_table+152]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_lilendian_table+156]=(FUNCTION_TABLE_OFFSET + 96);
HEAP[_lilendian_table+172]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_lilendian_table+176]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_lilendian_table+192]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_lilendian_table+196]=(FUNCTION_TABLE_OFFSET + 96);
HEAP[_lilendian_table+212]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_lilendian_table+216]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_lilendian_table+232]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_lilendian_table+236]=(FUNCTION_TABLE_OFFSET + 96);
HEAP[_lilendian_table+252]=(FUNCTION_TABLE_OFFSET + 98);
HEAP[_lilendian_table+256]=(FUNCTION_TABLE_OFFSET + 100);
HEAP[_lilendian_table+272]=(FUNCTION_TABLE_OFFSET + 102);
HEAP[_lilendian_table+276]=(FUNCTION_TABLE_OFFSET + 104);
HEAP[_lilendian_table+292]=(FUNCTION_TABLE_OFFSET + 78);
HEAP[_lilendian_table+296]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_lilendian_table+312]=(FUNCTION_TABLE_OFFSET + 106);
HEAP[_lilendian_table+316]=(FUNCTION_TABLE_OFFSET + 108);
HEAP[_lilendian_table+332]=(FUNCTION_TABLE_OFFSET + 110);
HEAP[_lilendian_table+336]=(FUNCTION_TABLE_OFFSET + 112);
HEAP[_kwlist_9852]=__str24;
HEAP[_kwlist_10035]=__str29;
HEAP[_kwlist_10035+4]=__str30;
HEAP[_s_methods]=__str40;
HEAP[_s_methods+4]=(FUNCTION_TABLE_OFFSET + 114);
HEAP[_s_methods+12]=_s_pack__doc__;
HEAP[_s_methods+16]=__str41;
HEAP[_s_methods+20]=(FUNCTION_TABLE_OFFSET + 116);
HEAP[_s_methods+28]=_s_pack_into__doc__;
HEAP[_s_methods+32]=__str42;
HEAP[_s_methods+36]=(FUNCTION_TABLE_OFFSET + 118);
HEAP[_s_methods+44]=_s_unpack__doc__;
HEAP[_s_methods+48]=__str43;
HEAP[_s_methods+52]=(FUNCTION_TABLE_OFFSET + 120);
HEAP[_s_methods+60]=_s_unpack_from__doc__;
HEAP[_s_getsetlist]=__str24;
HEAP[_s_getsetlist+4]=(FUNCTION_TABLE_OFFSET + 122);
HEAP[_s_getsetlist+12]=__str44;
HEAP[_s_getsetlist+20]=__str45;
HEAP[_s_getsetlist+24]=(FUNCTION_TABLE_OFFSET + 124);
HEAP[_s_getsetlist+32]=__str46;
HEAP[_PyStructType+12]=__str47;
HEAP[_PyStructType+24]=(FUNCTION_TABLE_OFFSET + 126);
HEAP[_PyStructType+72]=(FUNCTION_TABLE_OFFSET + 128);
HEAP[_PyStructType+76]=(FUNCTION_TABLE_OFFSET + 130);
HEAP[_PyStructType+88]=_s__doc__;
HEAP[_PyStructType+116]=_s_methods;
HEAP[_PyStructType+124]=_s_getsetlist;
HEAP[_PyStructType+148]=(FUNCTION_TABLE_OFFSET + 132);
HEAP[_PyStructType+152]=(FUNCTION_TABLE_OFFSET + 134);
HEAP[_PyStructType+156]=(FUNCTION_TABLE_OFFSET + 136);
HEAP[_PyStructType+160]=(FUNCTION_TABLE_OFFSET + 138);
HEAP[_module_functions]=__str49;
HEAP[_module_functions+4]=(FUNCTION_TABLE_OFFSET + 140);
HEAP[_module_functions+12]=_clearcache_doc;
HEAP[_module_functions+16]=__str50;
HEAP[_module_functions+20]=(FUNCTION_TABLE_OFFSET + 142);
HEAP[_module_functions+28]=_calcsize_doc;
HEAP[_module_functions+32]=__str40;
HEAP[_module_functions+36]=(FUNCTION_TABLE_OFFSET + 144);
HEAP[_module_functions+44]=_pack_doc;
HEAP[_module_functions+48]=__str41;
HEAP[_module_functions+52]=(FUNCTION_TABLE_OFFSET + 146);
HEAP[_module_functions+60]=_pack_into_doc;
HEAP[_module_functions+64]=__str42;
HEAP[_module_functions+68]=(FUNCTION_TABLE_OFFSET + 148);
HEAP[_module_functions+76]=_unpack_doc;
HEAP[_module_functions+80]=__str43;
HEAP[_module_functions+84]=(FUNCTION_TABLE_OFFSET + 150);
HEAP[_module_functions+92]=_unpack_from_doc;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

