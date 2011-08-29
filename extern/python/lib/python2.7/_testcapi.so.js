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



var $0___SIZE = 196; // %0
  
var $1___SIZE = 640; // %1
  
var $2___SIZE = 16; // %2
  
var $3___SIZE = 16; // %3
  
var $4___SIZE = 300; // %4
  
var $5___SIZE = 20; // %5
  
var $struct__0triple___SIZE = 12; // %struct..0triple
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyCodeObject___SIZE = 72; // %struct.PyCodeObject
  
var $struct_PyDateTime_CAPI___SIZE = 44; // %struct.PyDateTime_CAPI
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyIntObject___SIZE = 12; // %struct.PyIntObject
  
var $struct_PyListObject___SIZE = 20; // %struct.PyListObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyTupleObject___SIZE = 16; // %struct.PyTupleObject
  
var $struct_PyUnicodeObject___SIZE = 24; // %struct.PyUnicodeObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_all_structmembers___SIZE = 60; // %struct.all_structmembers
  var $struct_all_structmembers___FLATTENER = [0,1,2,4,6,8,12,16,20,24,28,36,44,52];
var $struct_known_capsule___SIZE = 12; // %struct.known_capsule
  
var $struct_test_structmembers___SIZE = 68; // %struct.test_structmembers
  
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
    var __stackBase__  = STACKTOP; STACKTOP += 2048; _memset(__stackBase__, 0, 2048);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $test_name_addr;
        var $msg_addr;
        var $retval;
        var $0;
        var $buf=__stackBase__;
        $test_name_addr=$test_name;
        $msg_addr=$msg;
        var $1=$test_name_addr; //@line 25 "_testcapimodule.c"
        var $2=_strlen($1); //@line 25 "_testcapimodule.c"
        var $3=$msg_addr; //@line 25 "_testcapimodule.c"
        var $4=_strlen($3); //@line 25 "_testcapimodule.c"
        var $5=($4) + ($2); //@line 25 "_testcapimodule.c"
        var $6=($5) > 1998; //@line 25 "_testcapimodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 25 "_testcapimodule.c"
      case 1: // $bb
        var $7=HEAP[_TestError]; //@line 26 "_testcapimodule.c"
        _PyErr_SetString($7, __str); //@line 26 "_testcapimodule.c"
        __label__ = 3; break; //@line 26 "_testcapimodule.c"
      case 2: // $bb1
        var $buf2=$buf; //@line 28 "_testcapimodule.c"
        var $8=$test_name_addr; //@line 28 "_testcapimodule.c"
        var $9=$msg_addr; //@line 28 "_testcapimodule.c"
        var $10=_PyOS_snprintf($buf2, 2048, __str1, allocate([$8,0,0,0,$9,0,0,0], ["i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 28 "_testcapimodule.c"
        var $11=HEAP[_TestError]; //@line 29 "_testcapimodule.c"
        var $buf3=$buf; //@line 29 "_testcapimodule.c"
        _PyErr_SetString($11, $buf3); //@line 29 "_testcapimodule.c"
        __label__ = 3; break; //@line 29 "_testcapimodule.c"
      case 3: // $bb4
        $0=0; //@line 31 "_testcapimodule.c"
        var $12=$0; //@line 31 "_testcapimodule.c"
        $retval=$12; //@line 31 "_testcapimodule.c"
        var $retval5=$retval; //@line 31 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 31 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_config($self) {
    ;
    var __label__;
  
    var $retval;
    var $0;
    var $1=HEAP[__Py_NoneStruct]; //@line 70 "_testcapimodule.c"
    var $2=($1) + 1; //@line 70 "_testcapimodule.c"
    HEAP[__Py_NoneStruct]=$2; //@line 70 "_testcapimodule.c"
    $0=__Py_NoneStruct; //@line 71 "_testcapimodule.c"
    var $3=$0; //@line 71 "_testcapimodule.c"
    $retval=$3; //@line 71 "_testcapimodule.c"
    var $retval1=$retval; //@line 71 "_testcapimodule.c"
    ;
    return $retval1; //@line 71 "_testcapimodule.c"
  }
  

  function _test_list_api($self) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $list;
        var $i;
        var $anint;
        var $anint14;
        $self_addr=$self;
        var $1=_PyList_New(30); //@line 82 "_testcapimodule.c"
        $list=$1; //@line 82 "_testcapimodule.c"
        var $2=$list; //@line 83 "_testcapimodule.c"
        var $3=($2)==0; //@line 83 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 83 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 84 "_testcapimodule.c"
        __label__ = 23; break; //@line 84 "_testcapimodule.c"
      case 2: // $bb1
        $i=0; //@line 86 "_testcapimodule.c"
        __lastLabel__ = 2; __label__ = 8; break; //@line 86 "_testcapimodule.c"
      case 3: // $bb2
        var $4=$i; //@line 87 "_testcapimodule.c"
        var $5=_PyInt_FromLong($4); //@line 87 "_testcapimodule.c"
        $anint=$5; //@line 87 "_testcapimodule.c"
        var $6=$anint; //@line 88 "_testcapimodule.c"
        var $7=($6)==0; //@line 88 "_testcapimodule.c"
        var $8=$list; //@line 89 "_testcapimodule.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 88 "_testcapimodule.c"
      case 4: // $bb3
        var $9=$8; //@line 89 "_testcapimodule.c"
        var $10=HEAP[$9]; //@line 89 "_testcapimodule.c"
        var $11=($10) - 1; //@line 89 "_testcapimodule.c"
        var $12=$list; //@line 89 "_testcapimodule.c"
        var $13=$12; //@line 89 "_testcapimodule.c"
        HEAP[$13]=$11; //@line 89 "_testcapimodule.c"
        var $14=$list; //@line 89 "_testcapimodule.c"
        var $15=$14; //@line 89 "_testcapimodule.c"
        var $16=HEAP[$15]; //@line 89 "_testcapimodule.c"
        var $17=($16)==0; //@line 89 "_testcapimodule.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 89 "_testcapimodule.c"
      case 5: // $bb4
        var $18=$list; //@line 89 "_testcapimodule.c"
        var $19=$18+4; //@line 89 "_testcapimodule.c"
        var $20=HEAP[$19]; //@line 89 "_testcapimodule.c"
        var $21=$20+24; //@line 89 "_testcapimodule.c"
        var $22=HEAP[$21]; //@line 89 "_testcapimodule.c"
        var $23=$list; //@line 89 "_testcapimodule.c"
        FUNCTION_TABLE[$22]($23); //@line 89 "_testcapimodule.c"
        __label__ = 6; break; //@line 89 "_testcapimodule.c"
      case 6: // $bb5
        $0=0; //@line 90 "_testcapimodule.c"
        __label__ = 23; break; //@line 90 "_testcapimodule.c"
      case 7: // $bb6
        var $24=$8; //@line 92 "_testcapimodule.c"
        var $25=$24+12; //@line 92 "_testcapimodule.c"
        var $26=HEAP[$25]; //@line 92 "_testcapimodule.c"
        var $27=$i; //@line 92 "_testcapimodule.c"
        var $28=$26+4*$27; //@line 92 "_testcapimodule.c"
        var $29=$anint; //@line 92 "_testcapimodule.c"
        HEAP[$28]=$29; //@line 92 "_testcapimodule.c"
        var $30=$i; //@line 86 "_testcapimodule.c"
        var $31=($30) + 1; //@line 86 "_testcapimodule.c"
        $i=$31; //@line 86 "_testcapimodule.c"
        __lastLabel__ = 7; __label__ = 8; break; //@line 86 "_testcapimodule.c"
      case 8: // $bb7
        var $32=__lastLabel__ == 7 ? $31 : (0);
        var $33=($32) <= 29; //@line 86 "_testcapimodule.c"
        if ($33) { __label__ = 3; break; } else { __label__ = 9; break; } //@line 86 "_testcapimodule.c"
      case 9: // $bb8
        var $34=$list; //@line 95 "_testcapimodule.c"
        var $35=_PyList_Reverse($34); //@line 95 "_testcapimodule.c"
        $i=$35; //@line 95 "_testcapimodule.c"
        var $36=$i; //@line 96 "_testcapimodule.c"
        var $37=($36)!=0; //@line 96 "_testcapimodule.c"
        if ($37) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 96 "_testcapimodule.c"
      case 10: // $bb9
        var $38=$list; //@line 97 "_testcapimodule.c"
        var $39=$38; //@line 97 "_testcapimodule.c"
        var $40=HEAP[$39]; //@line 97 "_testcapimodule.c"
        var $41=($40) - 1; //@line 97 "_testcapimodule.c"
        var $42=$list; //@line 97 "_testcapimodule.c"
        var $43=$42; //@line 97 "_testcapimodule.c"
        HEAP[$43]=$41; //@line 97 "_testcapimodule.c"
        var $44=$list; //@line 97 "_testcapimodule.c"
        var $45=$44; //@line 97 "_testcapimodule.c"
        var $46=HEAP[$45]; //@line 97 "_testcapimodule.c"
        var $47=($46)==0; //@line 97 "_testcapimodule.c"
        if ($47) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 97 "_testcapimodule.c"
      case 11: // $bb10
        var $48=$list; //@line 97 "_testcapimodule.c"
        var $49=$48+4; //@line 97 "_testcapimodule.c"
        var $50=HEAP[$49]; //@line 97 "_testcapimodule.c"
        var $51=$50+24; //@line 97 "_testcapimodule.c"
        var $52=HEAP[$51]; //@line 97 "_testcapimodule.c"
        var $53=$list; //@line 97 "_testcapimodule.c"
        FUNCTION_TABLE[$52]($53); //@line 97 "_testcapimodule.c"
        __label__ = 12; break; //@line 97 "_testcapimodule.c"
      case 12: // $bb11
        $0=0; //@line 98 "_testcapimodule.c"
        __label__ = 23; break; //@line 98 "_testcapimodule.c"
      case 13: // $bb12
        $i=0; //@line 101 "_testcapimodule.c"
        __lastLabel__ = 13; __label__ = 19; break; //@line 101 "_testcapimodule.c"
      case 14: // $bb13
        var $54=$88; //@line 102 "_testcapimodule.c"
        var $55=$54+12; //@line 102 "_testcapimodule.c"
        var $56=HEAP[$55]; //@line 102 "_testcapimodule.c"
        var $57=$i; //@line 102 "_testcapimodule.c"
        var $58=$56+4*$57; //@line 102 "_testcapimodule.c"
        var $59=HEAP[$58]; //@line 102 "_testcapimodule.c"
        $anint14=$59; //@line 102 "_testcapimodule.c"
        var $60=$anint14; //@line 103 "_testcapimodule.c"
        var $61=$60; //@line 103 "_testcapimodule.c"
        var $62=$61+8; //@line 103 "_testcapimodule.c"
        var $63=HEAP[$62]; //@line 103 "_testcapimodule.c"
        var $64=$i; //@line 103 "_testcapimodule.c"
        var $65=29 - ($64); //@line 103 "_testcapimodule.c"
        var $66=($63)!=($65); //@line 103 "_testcapimodule.c"
        if ($66) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 103 "_testcapimodule.c"
      case 15: // $bb15
        var $67=HEAP[_TestError]; //@line 104 "_testcapimodule.c"
        _PyErr_SetString($67, __str3); //@line 104 "_testcapimodule.c"
        var $68=$list; //@line 106 "_testcapimodule.c"
        var $69=$68; //@line 106 "_testcapimodule.c"
        var $70=HEAP[$69]; //@line 106 "_testcapimodule.c"
        var $71=($70) - 1; //@line 106 "_testcapimodule.c"
        var $72=$list; //@line 106 "_testcapimodule.c"
        var $73=$72; //@line 106 "_testcapimodule.c"
        HEAP[$73]=$71; //@line 106 "_testcapimodule.c"
        var $74=$list; //@line 106 "_testcapimodule.c"
        var $75=$74; //@line 106 "_testcapimodule.c"
        var $76=HEAP[$75]; //@line 106 "_testcapimodule.c"
        var $77=($76)==0; //@line 106 "_testcapimodule.c"
        if ($77) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 106 "_testcapimodule.c"
      case 16: // $bb16
        var $78=$list; //@line 106 "_testcapimodule.c"
        var $79=$78+4; //@line 106 "_testcapimodule.c"
        var $80=HEAP[$79]; //@line 106 "_testcapimodule.c"
        var $81=$80+24; //@line 106 "_testcapimodule.c"
        var $82=HEAP[$81]; //@line 106 "_testcapimodule.c"
        var $83=$list; //@line 106 "_testcapimodule.c"
        FUNCTION_TABLE[$82]($83); //@line 106 "_testcapimodule.c"
        __label__ = 17; break; //@line 106 "_testcapimodule.c"
      case 17: // $bb17
        $0=0; //@line 107 "_testcapimodule.c"
        __label__ = 23; break; //@line 107 "_testcapimodule.c"
      case 18: // $bb18
        var $84=$i; //@line 101 "_testcapimodule.c"
        var $85=($84) + 1; //@line 101 "_testcapimodule.c"
        $i=$85; //@line 101 "_testcapimodule.c"
        __lastLabel__ = 18; __label__ = 19; break; //@line 101 "_testcapimodule.c"
      case 19: // $bb19
        var $86=__lastLabel__ == 18 ? $85 : (0);
        var $87=($86) <= 29; //@line 101 "_testcapimodule.c"
        var $88=$list; //@line 102 "_testcapimodule.c"
        if ($87) { __label__ = 14; break; } else { __label__ = 20; break; } //@line 101 "_testcapimodule.c"
      case 20: // $bb20
        var $89=$88; //@line 110 "_testcapimodule.c"
        var $90=HEAP[$89]; //@line 110 "_testcapimodule.c"
        var $91=($90) - 1; //@line 110 "_testcapimodule.c"
        var $92=$list; //@line 110 "_testcapimodule.c"
        var $93=$92; //@line 110 "_testcapimodule.c"
        HEAP[$93]=$91; //@line 110 "_testcapimodule.c"
        var $94=$list; //@line 110 "_testcapimodule.c"
        var $95=$94; //@line 110 "_testcapimodule.c"
        var $96=HEAP[$95]; //@line 110 "_testcapimodule.c"
        var $97=($96)==0; //@line 110 "_testcapimodule.c"
        if ($97) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 110 "_testcapimodule.c"
      case 21: // $bb21
        var $98=$list; //@line 110 "_testcapimodule.c"
        var $99=$98+4; //@line 110 "_testcapimodule.c"
        var $100=HEAP[$99]; //@line 110 "_testcapimodule.c"
        var $101=$100+24; //@line 110 "_testcapimodule.c"
        var $102=HEAP[$101]; //@line 110 "_testcapimodule.c"
        var $103=$list; //@line 110 "_testcapimodule.c"
        FUNCTION_TABLE[$102]($103); //@line 110 "_testcapimodule.c"
        __label__ = 22; break; //@line 110 "_testcapimodule.c"
      case 22: // $bb22
        var $104=HEAP[__Py_NoneStruct]; //@line 113 "_testcapimodule.c"
        var $105=($104) + 1; //@line 113 "_testcapimodule.c"
        HEAP[__Py_NoneStruct]=$105; //@line 113 "_testcapimodule.c"
        $0=__Py_NoneStruct; //@line 114 "_testcapimodule.c"
        __label__ = 23; break; //@line 114 "_testcapimodule.c"
      case 23: // $bb23
        var $106=$0; //@line 84 "_testcapimodule.c"
        $retval=$106; //@line 84 "_testcapimodule.c"
        var $retval24=$retval; //@line 84 "_testcapimodule.c"
        ;
        return $retval24; //@line 84 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_dict_inner($count) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $count_addr;
        var $retval;
        var $0;
        var $pos=__stackBase__;
        var $iterations;
        var $i;
        var $dict;
        var $v=__stackBase__+4;
        var $k=__stackBase__+8;
        var $o;
        $count_addr=$count;
        HEAP[$pos]=0; //@line 120 "_testcapimodule.c"
        $iterations=0; //@line 120 "_testcapimodule.c"
        var $1=_PyDict_New(); //@line 122 "_testcapimodule.c"
        $dict=$1; //@line 122 "_testcapimodule.c"
        var $2=$dict; //@line 125 "_testcapimodule.c"
        var $3=($2)==0; //@line 125 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 125 "_testcapimodule.c"
      case 1: // $bb
        $0=-1; //@line 126 "_testcapimodule.c"
        __label__ = 20; break; //@line 126 "_testcapimodule.c"
      case 2: // $bb1
        $i=0; //@line 128 "_testcapimodule.c"
        var $4=$i; //@line 128 "_testcapimodule.c"
        var $5=$count_addr; //@line 128 "_testcapimodule.c"
        var $6=($4) < ($5); //@line 128 "_testcapimodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 14; break; } //@line 128 "_testcapimodule.c"
      case 3: // $bb2
        var $7=$i; //@line 129 "_testcapimodule.c"
        var $8=_PyInt_FromLong($7); //@line 129 "_testcapimodule.c"
        HEAP[$v]=$8; //@line 129 "_testcapimodule.c"
        var $9=HEAP[$v]; //@line 130 "_testcapimodule.c"
        var $10=HEAP[$v]; //@line 130 "_testcapimodule.c"
        var $11=$dict; //@line 130 "_testcapimodule.c"
        var $12=_PyDict_SetItem($11, $10, $9); //@line 130 "_testcapimodule.c"
        var $13=HEAP[$v]; //@line 131 "_testcapimodule.c"
        var $14=$13; //@line 131 "_testcapimodule.c"
        var $15=HEAP[$14]; //@line 131 "_testcapimodule.c"
        var $16=($15) - 1; //@line 131 "_testcapimodule.c"
        var $17=$13; //@line 131 "_testcapimodule.c"
        HEAP[$17]=$16; //@line 131 "_testcapimodule.c"
        var $18=$13; //@line 131 "_testcapimodule.c"
        var $19=HEAP[$18]; //@line 131 "_testcapimodule.c"
        var $20=($19)==0; //@line 131 "_testcapimodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 131 "_testcapimodule.c"
      case 4: // $bb3
        var $21=HEAP[$v]; //@line 131 "_testcapimodule.c"
        var $22=$21+4; //@line 131 "_testcapimodule.c"
        var $23=HEAP[$22]; //@line 131 "_testcapimodule.c"
        var $24=$23+24; //@line 131 "_testcapimodule.c"
        var $25=HEAP[$24]; //@line 131 "_testcapimodule.c"
        var $26=HEAP[$v]; //@line 131 "_testcapimodule.c"
        FUNCTION_TABLE[$25]($26); //@line 131 "_testcapimodule.c"
        __label__ = 5; break; //@line 131 "_testcapimodule.c"
      case 5: // $bb4
        var $27=$i; //@line 128 "_testcapimodule.c"
        var $28=($27) + 1; //@line 128 "_testcapimodule.c"
        $i=$28; //@line 128 "_testcapimodule.c"
        var $29=$i; //@line 128 "_testcapimodule.c"
        var $30=$count_addr; //@line 128 "_testcapimodule.c"
        var $31=($29) < ($30); //@line 128 "_testcapimodule.c"
        if ($31) { __label__ = 3; break; } else { __label__ = 14; break; } //@line 128 "_testcapimodule.c"
      case 6: // $bb7
        var $32=$iterations; //@line 136 "_testcapimodule.c"
        var $33=($32) + 1; //@line 136 "_testcapimodule.c"
        $iterations=$33; //@line 136 "_testcapimodule.c"
        var $34=HEAP[$v]; //@line 138 "_testcapimodule.c"
        var $35=$34; //@line 138 "_testcapimodule.c"
        var $36=$35+8; //@line 138 "_testcapimodule.c"
        var $37=HEAP[$36]; //@line 138 "_testcapimodule.c"
        var $38=($37) + 1; //@line 138 "_testcapimodule.c"
        $i=$38; //@line 138 "_testcapimodule.c"
        var $39=$i; //@line 139 "_testcapimodule.c"
        var $40=_PyInt_FromLong($39); //@line 139 "_testcapimodule.c"
        $o=$40; //@line 139 "_testcapimodule.c"
        var $41=$o; //@line 140 "_testcapimodule.c"
        var $42=($41)==0; //@line 140 "_testcapimodule.c"
        if ($42) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 140 "_testcapimodule.c"
      case 7: // $bb8
        $0=-1; //@line 141 "_testcapimodule.c"
        __label__ = 20; break; //@line 141 "_testcapimodule.c"
      case 8: // $bb9
        var $43=HEAP[$k]; //@line 142 "_testcapimodule.c"
        var $44=$dict; //@line 142 "_testcapimodule.c"
        var $45=$o; //@line 142 "_testcapimodule.c"
        var $46=_PyDict_SetItem($44, $43, $45); //@line 142 "_testcapimodule.c"
        var $47=($46) < 0; //@line 142 "_testcapimodule.c"
        var $48=$o; //@line 143 "_testcapimodule.c"
        var $49=$48; //@line 143 "_testcapimodule.c"
        var $50=HEAP[$49]; //@line 143 "_testcapimodule.c"
        var $51=($50) - 1; //@line 143 "_testcapimodule.c"
        var $52=$o; //@line 143 "_testcapimodule.c"
        var $53=$52; //@line 143 "_testcapimodule.c"
        HEAP[$53]=$51; //@line 143 "_testcapimodule.c"
        var $54=$o; //@line 143 "_testcapimodule.c"
        var $55=$54; //@line 143 "_testcapimodule.c"
        var $56=HEAP[$55]; //@line 143 "_testcapimodule.c"
        var $57=($56)==0; //@line 143 "_testcapimodule.c"
        if ($47) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 142 "_testcapimodule.c"
      case 9: // $bb10
        if ($57) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 143 "_testcapimodule.c"
      case 10: // $bb11
        var $58=$o; //@line 143 "_testcapimodule.c"
        var $59=$58+4; //@line 143 "_testcapimodule.c"
        var $60=HEAP[$59]; //@line 143 "_testcapimodule.c"
        var $61=$60+24; //@line 143 "_testcapimodule.c"
        var $62=HEAP[$61]; //@line 143 "_testcapimodule.c"
        var $63=$o; //@line 143 "_testcapimodule.c"
        FUNCTION_TABLE[$62]($63); //@line 143 "_testcapimodule.c"
        __label__ = 11; break; //@line 143 "_testcapimodule.c"
      case 11: // $bb12
        $0=-1; //@line 144 "_testcapimodule.c"
        __label__ = 20; break; //@line 144 "_testcapimodule.c"
      case 12: // $bb13
        if ($57) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 146 "_testcapimodule.c"
      case 13: // $bb14
        var $64=$o; //@line 146 "_testcapimodule.c"
        var $65=$64+4; //@line 146 "_testcapimodule.c"
        var $66=HEAP[$65]; //@line 146 "_testcapimodule.c"
        var $67=$66+24; //@line 146 "_testcapimodule.c"
        var $68=HEAP[$67]; //@line 146 "_testcapimodule.c"
        var $69=$o; //@line 146 "_testcapimodule.c"
        FUNCTION_TABLE[$68]($69); //@line 146 "_testcapimodule.c"
        __label__ = 14; break; //@line 146 "_testcapimodule.c"
      case 14: // $bb15
        var $70=$dict; //@line 134 "_testcapimodule.c"
        var $71=_PyDict_Next($70, $pos, $k, $v); //@line 134 "_testcapimodule.c"
        var $72=($71)!=0; //@line 134 "_testcapimodule.c"
        if ($72) { __label__ = 6; break; } else { __label__ = 15; break; } //@line 134 "_testcapimodule.c"
      case 15: // $bb16
        var $73=$dict; //@line 149 "_testcapimodule.c"
        var $74=$73; //@line 149 "_testcapimodule.c"
        var $75=HEAP[$74]; //@line 149 "_testcapimodule.c"
        var $76=($75) - 1; //@line 149 "_testcapimodule.c"
        var $77=$dict; //@line 149 "_testcapimodule.c"
        var $78=$77; //@line 149 "_testcapimodule.c"
        HEAP[$78]=$76; //@line 149 "_testcapimodule.c"
        var $79=$dict; //@line 149 "_testcapimodule.c"
        var $80=$79; //@line 149 "_testcapimodule.c"
        var $81=HEAP[$80]; //@line 149 "_testcapimodule.c"
        var $82=($81)==0; //@line 149 "_testcapimodule.c"
        if ($82) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 149 "_testcapimodule.c"
      case 16: // $bb17
        var $83=$dict; //@line 149 "_testcapimodule.c"
        var $84=$83+4; //@line 149 "_testcapimodule.c"
        var $85=HEAP[$84]; //@line 149 "_testcapimodule.c"
        var $86=$85+24; //@line 149 "_testcapimodule.c"
        var $87=HEAP[$86]; //@line 149 "_testcapimodule.c"
        var $88=$dict; //@line 149 "_testcapimodule.c"
        FUNCTION_TABLE[$87]($88); //@line 149 "_testcapimodule.c"
        __label__ = 17; break; //@line 149 "_testcapimodule.c"
      case 17: // $bb18
        var $89=$iterations; //@line 151 "_testcapimodule.c"
        var $90=$count_addr; //@line 151 "_testcapimodule.c"
        var $91=($89)!=($90); //@line 151 "_testcapimodule.c"
        if ($91) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 151 "_testcapimodule.c"
      case 18: // $bb19
        var $92=HEAP[_TestError]; //@line 152 "_testcapimodule.c"
        _PyErr_SetString($92, __str4); //@line 152 "_testcapimodule.c"
        $0=-1; //@line 155 "_testcapimodule.c"
        __label__ = 20; break; //@line 155 "_testcapimodule.c"
      case 19: // $bb20
        $0=0; //@line 157 "_testcapimodule.c"
        __label__ = 20; break; //@line 157 "_testcapimodule.c"
      case 20: // $bb21
        var $93=$0; //@line 126 "_testcapimodule.c"
        $retval=$93; //@line 126 "_testcapimodule.c"
        var $retval22=$retval; //@line 126 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 126 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_dict_iteration($self) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $i;
        $self_addr=$self;
        $i=0; //@line 166 "_testcapimodule.c"
        __lastLabel__ = -1; __label__ = 4; break; //@line 166 "_testcapimodule.c"
      case 1: // $bb
        var $1=$i; //@line 167 "_testcapimodule.c"
        var $2=_test_dict_inner($1); //@line 167 "_testcapimodule.c"
        var $3=($2) < 0; //@line 167 "_testcapimodule.c"
        if ($3) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 167 "_testcapimodule.c"
      case 2: // $bb1
        $0=0; //@line 168 "_testcapimodule.c"
        __label__ = 6; break; //@line 168 "_testcapimodule.c"
      case 3: // $bb2
        var $4=$i; //@line 166 "_testcapimodule.c"
        var $5=($4) + 1; //@line 166 "_testcapimodule.c"
        $i=$5; //@line 166 "_testcapimodule.c"
        __lastLabel__ = 3; __label__ = 4; break; //@line 166 "_testcapimodule.c"
      case 4: // $bb3
        var $6=__lastLabel__ == 3 ? $5 : (0);
        var $7=($6) <= 199; //@line 166 "_testcapimodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 166 "_testcapimodule.c"
      case 5: // $bb4
        var $8=HEAP[__Py_NoneStruct]; //@line 172 "_testcapimodule.c"
        var $9=($8) + 1; //@line 172 "_testcapimodule.c"
        HEAP[__Py_NoneStruct]=$9; //@line 172 "_testcapimodule.c"
        $0=__Py_NoneStruct; //@line 173 "_testcapimodule.c"
        __label__ = 6; break; //@line 173 "_testcapimodule.c"
      case 6: // $bb5
        var $10=$0; //@line 168 "_testcapimodule.c"
        $retval=$10; //@line 168 "_testcapimodule.c"
        var $retval6=$retval; //@line 168 "_testcapimodule.c"
        ;
        return $retval6; //@line 168 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_lazy_hash_inheritance($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $type;
        var $obj;
        var $hash;
        $self_addr=$self;
        $type=__HashInheritanceTester_Type; //@line 229 "_testcapimodule.c"
        var $1=$type; //@line 231 "_testcapimodule.c"
        var $2=$1+132; //@line 231 "_testcapimodule.c"
        var $3=HEAP[$2]; //@line 231 "_testcapimodule.c"
        var $4=($3)!=0; //@line 231 "_testcapimodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 231 "_testcapimodule.c"
      case 1: // $bb
        var $5=HEAP[__Py_NoneStruct]; //@line 234 "_testcapimodule.c"
        var $6=($5) + 1; //@line 234 "_testcapimodule.c"
        HEAP[__Py_NoneStruct]=$6; //@line 234 "_testcapimodule.c"
        $0=__Py_NoneStruct; //@line 234 "_testcapimodule.c"
        __label__ = 24; break; //@line 234 "_testcapimodule.c"
      case 2: // $bb1
        var $7=$type; //@line 237 "_testcapimodule.c"
        var $8=__PyObject_New($7); //@line 237 "_testcapimodule.c"
        $obj=$8; //@line 237 "_testcapimodule.c"
        var $9=$obj; //@line 238 "_testcapimodule.c"
        var $10=($9)==0; //@line 238 "_testcapimodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 238 "_testcapimodule.c"
      case 3: // $bb2
        _PyErr_Clear(); //@line 239 "_testcapimodule.c"
        var $11=HEAP[_TestError]; //@line 240 "_testcapimodule.c"
        _PyErr_SetString($11, __str6); //@line 240 "_testcapimodule.c"
        $0=0; //@line 243 "_testcapimodule.c"
        __label__ = 24; break; //@line 243 "_testcapimodule.c"
      case 4: // $bb3
        var $12=$type; //@line 246 "_testcapimodule.c"
        var $13=$12+132; //@line 246 "_testcapimodule.c"
        var $14=HEAP[$13]; //@line 246 "_testcapimodule.c"
        var $15=($14)!=0; //@line 246 "_testcapimodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 246 "_testcapimodule.c"
      case 5: // $bb4
        var $16=HEAP[_TestError]; //@line 247 "_testcapimodule.c"
        _PyErr_SetString($16, __str7); //@line 247 "_testcapimodule.c"
        var $17=$obj; //@line 250 "_testcapimodule.c"
        var $18=$17; //@line 250 "_testcapimodule.c"
        var $19=HEAP[$18]; //@line 250 "_testcapimodule.c"
        var $20=($19) - 1; //@line 250 "_testcapimodule.c"
        var $21=$obj; //@line 250 "_testcapimodule.c"
        var $22=$21; //@line 250 "_testcapimodule.c"
        HEAP[$22]=$20; //@line 250 "_testcapimodule.c"
        var $23=$obj; //@line 250 "_testcapimodule.c"
        var $24=$23; //@line 250 "_testcapimodule.c"
        var $25=HEAP[$24]; //@line 250 "_testcapimodule.c"
        var $26=($25)==0; //@line 250 "_testcapimodule.c"
        if ($26) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 250 "_testcapimodule.c"
      case 6: // $bb5
        var $27=$obj; //@line 250 "_testcapimodule.c"
        var $28=$27+4; //@line 250 "_testcapimodule.c"
        var $29=HEAP[$28]; //@line 250 "_testcapimodule.c"
        var $30=$29+24; //@line 250 "_testcapimodule.c"
        var $31=HEAP[$30]; //@line 250 "_testcapimodule.c"
        var $32=$obj; //@line 250 "_testcapimodule.c"
        FUNCTION_TABLE[$31]($32); //@line 250 "_testcapimodule.c"
        __label__ = 7; break; //@line 250 "_testcapimodule.c"
      case 7: // $bb6
        $0=0; //@line 251 "_testcapimodule.c"
        __label__ = 24; break; //@line 251 "_testcapimodule.c"
      case 8: // $bb7
        var $33=$obj; //@line 254 "_testcapimodule.c"
        var $34=_PyObject_Hash($33); //@line 254 "_testcapimodule.c"
        $hash=$34; //@line 254 "_testcapimodule.c"
        var $35=$hash; //@line 255 "_testcapimodule.c"
        var $36=($35)==-1; //@line 255 "_testcapimodule.c"
        if ($36) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 255 "_testcapimodule.c"
      case 9: // $bb8
        var $37=_PyErr_Occurred(); //@line 255 "_testcapimodule.c"
        var $38=($37)!=0; //@line 255 "_testcapimodule.c"
        if ($38) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 255 "_testcapimodule.c"
      case 10: // $bb9
        _PyErr_Clear(); //@line 256 "_testcapimodule.c"
        var $39=HEAP[_TestError]; //@line 257 "_testcapimodule.c"
        _PyErr_SetString($39, __str8); //@line 257 "_testcapimodule.c"
        var $40=$obj; //@line 260 "_testcapimodule.c"
        var $41=$40; //@line 260 "_testcapimodule.c"
        var $42=HEAP[$41]; //@line 260 "_testcapimodule.c"
        var $43=($42) - 1; //@line 260 "_testcapimodule.c"
        var $44=$obj; //@line 260 "_testcapimodule.c"
        var $45=$44; //@line 260 "_testcapimodule.c"
        HEAP[$45]=$43; //@line 260 "_testcapimodule.c"
        var $46=$obj; //@line 260 "_testcapimodule.c"
        var $47=$46; //@line 260 "_testcapimodule.c"
        var $48=HEAP[$47]; //@line 260 "_testcapimodule.c"
        var $49=($48)==0; //@line 260 "_testcapimodule.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 260 "_testcapimodule.c"
      case 11: // $bb10
        var $50=$obj; //@line 260 "_testcapimodule.c"
        var $51=$50+4; //@line 260 "_testcapimodule.c"
        var $52=HEAP[$51]; //@line 260 "_testcapimodule.c"
        var $53=$52+24; //@line 260 "_testcapimodule.c"
        var $54=HEAP[$53]; //@line 260 "_testcapimodule.c"
        var $55=$obj; //@line 260 "_testcapimodule.c"
        FUNCTION_TABLE[$54]($55); //@line 260 "_testcapimodule.c"
        __label__ = 12; break; //@line 260 "_testcapimodule.c"
      case 12: // $bb11
        $0=0; //@line 261 "_testcapimodule.c"
        __label__ = 24; break; //@line 261 "_testcapimodule.c"
      case 13: // $bb12
        var $56=$type; //@line 264 "_testcapimodule.c"
        var $57=$56+132; //@line 264 "_testcapimodule.c"
        var $58=HEAP[$57]; //@line 264 "_testcapimodule.c"
        var $59=($58)==0; //@line 264 "_testcapimodule.c"
        if ($59) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 264 "_testcapimodule.c"
      case 14: // $bb13
        var $60=HEAP[_TestError]; //@line 265 "_testcapimodule.c"
        _PyErr_SetString($60, __str9); //@line 265 "_testcapimodule.c"
        var $61=$obj; //@line 268 "_testcapimodule.c"
        var $62=$61; //@line 268 "_testcapimodule.c"
        var $63=HEAP[$62]; //@line 268 "_testcapimodule.c"
        var $64=($63) - 1; //@line 268 "_testcapimodule.c"
        var $65=$obj; //@line 268 "_testcapimodule.c"
        var $66=$65; //@line 268 "_testcapimodule.c"
        HEAP[$66]=$64; //@line 268 "_testcapimodule.c"
        var $67=$obj; //@line 268 "_testcapimodule.c"
        var $68=$67; //@line 268 "_testcapimodule.c"
        var $69=HEAP[$68]; //@line 268 "_testcapimodule.c"
        var $70=($69)==0; //@line 268 "_testcapimodule.c"
        if ($70) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 268 "_testcapimodule.c"
      case 15: // $bb14
        var $71=$obj; //@line 268 "_testcapimodule.c"
        var $72=$71+4; //@line 268 "_testcapimodule.c"
        var $73=HEAP[$72]; //@line 268 "_testcapimodule.c"
        var $74=$73+24; //@line 268 "_testcapimodule.c"
        var $75=HEAP[$74]; //@line 268 "_testcapimodule.c"
        var $76=$obj; //@line 268 "_testcapimodule.c"
        FUNCTION_TABLE[$75]($76); //@line 268 "_testcapimodule.c"
        __label__ = 16; break; //@line 268 "_testcapimodule.c"
      case 16: // $bb15
        $0=0; //@line 269 "_testcapimodule.c"
        __label__ = 24; break; //@line 269 "_testcapimodule.c"
      case 17: // $bb16
        var $77=$type; //@line 272 "_testcapimodule.c"
        var $78=$77+60; //@line 272 "_testcapimodule.c"
        var $79=HEAP[$78]; //@line 272 "_testcapimodule.c"
        var $80=HEAP[_PyType_Type+60]; //@line 272 "_testcapimodule.c"
        var $81=($79)!=($80); //@line 272 "_testcapimodule.c"
        if ($81) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 272 "_testcapimodule.c"
      case 18: // $bb17
        var $82=HEAP[_TestError]; //@line 273 "_testcapimodule.c"
        _PyErr_SetString($82, __str10); //@line 273 "_testcapimodule.c"
        var $83=$obj; //@line 276 "_testcapimodule.c"
        var $84=$83; //@line 276 "_testcapimodule.c"
        var $85=HEAP[$84]; //@line 276 "_testcapimodule.c"
        var $86=($85) - 1; //@line 276 "_testcapimodule.c"
        var $87=$obj; //@line 276 "_testcapimodule.c"
        var $88=$87; //@line 276 "_testcapimodule.c"
        HEAP[$88]=$86; //@line 276 "_testcapimodule.c"
        var $89=$obj; //@line 276 "_testcapimodule.c"
        var $90=$89; //@line 276 "_testcapimodule.c"
        var $91=HEAP[$90]; //@line 276 "_testcapimodule.c"
        var $92=($91)==0; //@line 276 "_testcapimodule.c"
        if ($92) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 276 "_testcapimodule.c"
      case 19: // $bb18
        var $93=$obj; //@line 276 "_testcapimodule.c"
        var $94=$93+4; //@line 276 "_testcapimodule.c"
        var $95=HEAP[$94]; //@line 276 "_testcapimodule.c"
        var $96=$95+24; //@line 276 "_testcapimodule.c"
        var $97=HEAP[$96]; //@line 276 "_testcapimodule.c"
        var $98=$obj; //@line 276 "_testcapimodule.c"
        FUNCTION_TABLE[$97]($98); //@line 276 "_testcapimodule.c"
        __label__ = 20; break; //@line 276 "_testcapimodule.c"
      case 20: // $bb19
        $0=0; //@line 277 "_testcapimodule.c"
        __label__ = 24; break; //@line 277 "_testcapimodule.c"
      case 21: // $bb20
        var $99=$obj; //@line 280 "_testcapimodule.c"
        var $100=$99; //@line 280 "_testcapimodule.c"
        var $101=HEAP[$100]; //@line 280 "_testcapimodule.c"
        var $102=($101) - 1; //@line 280 "_testcapimodule.c"
        var $103=$obj; //@line 280 "_testcapimodule.c"
        var $104=$103; //@line 280 "_testcapimodule.c"
        HEAP[$104]=$102; //@line 280 "_testcapimodule.c"
        var $105=$obj; //@line 280 "_testcapimodule.c"
        var $106=$105; //@line 280 "_testcapimodule.c"
        var $107=HEAP[$106]; //@line 280 "_testcapimodule.c"
        var $108=($107)==0; //@line 280 "_testcapimodule.c"
        if ($108) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 280 "_testcapimodule.c"
      case 22: // $bb21
        var $109=$obj; //@line 280 "_testcapimodule.c"
        var $110=$109+4; //@line 280 "_testcapimodule.c"
        var $111=HEAP[$110]; //@line 280 "_testcapimodule.c"
        var $112=$111+24; //@line 280 "_testcapimodule.c"
        var $113=HEAP[$112]; //@line 280 "_testcapimodule.c"
        var $114=$obj; //@line 280 "_testcapimodule.c"
        FUNCTION_TABLE[$113]($114); //@line 280 "_testcapimodule.c"
        __label__ = 23; break; //@line 280 "_testcapimodule.c"
      case 23: // $bb22
        var $115=HEAP[__Py_NoneStruct]; //@line 282 "_testcapimodule.c"
        var $116=($115) + 1; //@line 282 "_testcapimodule.c"
        HEAP[__Py_NoneStruct]=$116; //@line 282 "_testcapimodule.c"
        $0=__Py_NoneStruct; //@line 282 "_testcapimodule.c"
        __label__ = 24; break; //@line 282 "_testcapimodule.c"
      case 24: // $bb23
        var $117=$0; //@line 234 "_testcapimodule.c"
        $retval=$117; //@line 234 "_testcapimodule.c"
        var $retval24=$retval; //@line 234 "_testcapimodule.c"
        ;
        return $retval24; //@line 234 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _broken_buffer_getbuffer($self, $view, $flags) {
    ;
    var __label__;
  
    var $self_addr;
    var $view_addr;
    var $flags_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $view_addr=$view;
    $flags_addr=$flags;
    var $1=HEAP[_TestError]; //@line 293 "_testcapimodule.c"
    _PyErr_SetString($1, __str11); //@line 293 "_testcapimodule.c"
    $0=-1; //@line 296 "_testcapimodule.c"
    var $2=$0; //@line 296 "_testcapimodule.c"
    $retval=$2; //@line 296 "_testcapimodule.c"
    var $retval1=$retval; //@line 296 "_testcapimodule.c"
    ;
    return $retval1; //@line 296 "_testcapimodule.c"
  }
  

  function _test_broken_memoryview($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $obj;
        var $res;
        $self_addr=$self;
        var $1=__PyObject_New(__MemoryViewTester_Type); //@line 353 "_testcapimodule.c"
        $obj=$1; //@line 353 "_testcapimodule.c"
        var $2=$obj; //@line 356 "_testcapimodule.c"
        var $3=($2)==0; //@line 356 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 356 "_testcapimodule.c"
      case 1: // $bb
        _PyErr_Clear(); //@line 357 "_testcapimodule.c"
        var $4=HEAP[_TestError]; //@line 358 "_testcapimodule.c"
        _PyErr_SetString($4, __str13); //@line 358 "_testcapimodule.c"
        $0=0; //@line 361 "_testcapimodule.c"
        __label__ = 13; break; //@line 361 "_testcapimodule.c"
      case 2: // $bb1
        var $5=$obj; //@line 364 "_testcapimodule.c"
        var $6=_PyMemoryView_FromObject($5); //@line 364 "_testcapimodule.c"
        $res=$6; //@line 364 "_testcapimodule.c"
        var $7=$res; //@line 365 "_testcapimodule.c"
        var $8=($7)!=0; //@line 365 "_testcapimodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 365 "_testcapimodule.c"
      case 3: // $bb2
        var $9=_PyErr_Occurred(); //@line 365 "_testcapimodule.c"
        var $10=($9)==0; //@line 365 "_testcapimodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 10; break; } //@line 365 "_testcapimodule.c"
      case 4: // $bb3
        var $11=HEAP[_TestError]; //@line 366 "_testcapimodule.c"
        _PyErr_SetString($11, __str14); //@line 366 "_testcapimodule.c"
        var $12=$res; //@line 369 "_testcapimodule.c"
        var $13=($12)!=0; //@line 369 "_testcapimodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 369 "_testcapimodule.c"
      case 5: // $bb4
        var $14=$res; //@line 369 "_testcapimodule.c"
        var $15=$14; //@line 369 "_testcapimodule.c"
        var $16=HEAP[$15]; //@line 369 "_testcapimodule.c"
        var $17=($16) - 1; //@line 369 "_testcapimodule.c"
        var $18=$res; //@line 369 "_testcapimodule.c"
        var $19=$18; //@line 369 "_testcapimodule.c"
        HEAP[$19]=$17; //@line 369 "_testcapimodule.c"
        var $20=$res; //@line 369 "_testcapimodule.c"
        var $21=$20; //@line 369 "_testcapimodule.c"
        var $22=HEAP[$21]; //@line 369 "_testcapimodule.c"
        var $23=($22)==0; //@line 369 "_testcapimodule.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 369 "_testcapimodule.c"
      case 6: // $bb5
        var $24=$res; //@line 369 "_testcapimodule.c"
        var $25=$24+4; //@line 369 "_testcapimodule.c"
        var $26=HEAP[$25]; //@line 369 "_testcapimodule.c"
        var $27=$26+24; //@line 369 "_testcapimodule.c"
        var $28=HEAP[$27]; //@line 369 "_testcapimodule.c"
        var $29=$res; //@line 369 "_testcapimodule.c"
        FUNCTION_TABLE[$28]($29); //@line 369 "_testcapimodule.c"
        __label__ = 7; break; //@line 369 "_testcapimodule.c"
      case 7: // $bb6
        var $30=$obj; //@line 370 "_testcapimodule.c"
        var $31=$30; //@line 370 "_testcapimodule.c"
        var $32=HEAP[$31]; //@line 370 "_testcapimodule.c"
        var $33=($32) - 1; //@line 370 "_testcapimodule.c"
        var $34=$obj; //@line 370 "_testcapimodule.c"
        var $35=$34; //@line 370 "_testcapimodule.c"
        HEAP[$35]=$33; //@line 370 "_testcapimodule.c"
        var $36=$obj; //@line 370 "_testcapimodule.c"
        var $37=$36; //@line 370 "_testcapimodule.c"
        var $38=HEAP[$37]; //@line 370 "_testcapimodule.c"
        var $39=($38)==0; //@line 370 "_testcapimodule.c"
        if ($39) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 370 "_testcapimodule.c"
      case 8: // $bb7
        var $40=$obj; //@line 370 "_testcapimodule.c"
        var $41=$40+4; //@line 370 "_testcapimodule.c"
        var $42=HEAP[$41]; //@line 370 "_testcapimodule.c"
        var $43=$42+24; //@line 370 "_testcapimodule.c"
        var $44=HEAP[$43]; //@line 370 "_testcapimodule.c"
        var $45=$obj; //@line 370 "_testcapimodule.c"
        FUNCTION_TABLE[$44]($45); //@line 370 "_testcapimodule.c"
        __label__ = 9; break; //@line 370 "_testcapimodule.c"
      case 9: // $bb8
        $0=0; //@line 371 "_testcapimodule.c"
        __label__ = 13; break; //@line 371 "_testcapimodule.c"
      case 10: // $bb9
        _PyErr_Clear(); //@line 374 "_testcapimodule.c"
        var $46=$obj; //@line 375 "_testcapimodule.c"
        var $47=$46; //@line 375 "_testcapimodule.c"
        var $48=HEAP[$47]; //@line 375 "_testcapimodule.c"
        var $49=($48) - 1; //@line 375 "_testcapimodule.c"
        var $50=$obj; //@line 375 "_testcapimodule.c"
        var $51=$50; //@line 375 "_testcapimodule.c"
        HEAP[$51]=$49; //@line 375 "_testcapimodule.c"
        var $52=$obj; //@line 375 "_testcapimodule.c"
        var $53=$52; //@line 375 "_testcapimodule.c"
        var $54=HEAP[$53]; //@line 375 "_testcapimodule.c"
        var $55=($54)==0; //@line 375 "_testcapimodule.c"
        if ($55) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 375 "_testcapimodule.c"
      case 11: // $bb10
        var $56=$obj; //@line 375 "_testcapimodule.c"
        var $57=$56+4; //@line 375 "_testcapimodule.c"
        var $58=HEAP[$57]; //@line 375 "_testcapimodule.c"
        var $59=$58+24; //@line 375 "_testcapimodule.c"
        var $60=HEAP[$59]; //@line 375 "_testcapimodule.c"
        var $61=$obj; //@line 375 "_testcapimodule.c"
        FUNCTION_TABLE[$60]($61); //@line 375 "_testcapimodule.c"
        __label__ = 12; break; //@line 375 "_testcapimodule.c"
      case 12: // $bb11
        var $62=HEAP[__Py_NoneStruct]; //@line 376 "_testcapimodule.c"
        var $63=($62) + 1; //@line 376 "_testcapimodule.c"
        HEAP[__Py_NoneStruct]=$63; //@line 376 "_testcapimodule.c"
        $0=__Py_NoneStruct; //@line 376 "_testcapimodule.c"
        __label__ = 13; break; //@line 376 "_testcapimodule.c"
      case 13: // $bb12
        var $64=$0; //@line 361 "_testcapimodule.c"
        $retval=$64; //@line 361 "_testcapimodule.c"
        var $retval13=$retval; //@line 361 "_testcapimodule.c"
        ;
        return $retval13; //@line 361 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _raise_test_long_error($msg) {
    ;
    var __label__;
  
    var $msg_addr;
    var $retval;
    var $0;
    $msg_addr=$msg;
    var $1=$msg_addr; //@line 400 "_testcapimodule.c"
    var $2=_raiseTestError(__str15, $1); //@line 400 "_testcapimodule.c"
    $0=$2; //@line 400 "_testcapimodule.c"
    var $3=$0; //@line 400 "_testcapimodule.c"
    $retval=$3; //@line 400 "_testcapimodule.c"
    var $retval1=$retval; //@line 400 "_testcapimodule.c"
    ;
    return $retval1; //@line 400 "_testcapimodule.c"
  }
  

  function _test_long_api_inner() {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
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
        $error_addr=(FUNCTION_TABLE_OFFSET + 2);
        $NBITS=32; //@line 13 "testcapi_long.h"
        $base=1; //@line 25 "testcapi_long.h"
        $i=0; //@line 26 "testcapi_long.h"
        __label__ = 26; break; //@line 26 "testcapi_long.h"
      case 1: // $bb
        $j=0; //@line 31 "testcapi_long.h"
        __lastLabel__ = 1; __label__ = 24; break; //@line 31 "testcapi_long.h"
      case 2: // $bb1
        var $1=$j; //@line 36 "testcapi_long.h"
        var $2=($1) > 2; //@line 36 "testcapi_long.h"
        var $3=$base; //@line 36 "testcapi_long.h"
        if ($2) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 36 "testcapi_long.h"
      case 3: // $bb2
        var $4=0 - ($3); //@line 36 "testcapi_long.h"
        $iftmp_24=$4; //@line 36 "testcapi_long.h"
        __label__ = 5; break; //@line 36 "testcapi_long.h"
      case 4: // $bb3
        $iftmp_24=$3; //@line 36 "testcapi_long.h"
        __label__ = 5; break; //@line 36 "testcapi_long.h"
      case 5: // $bb4
        var $5=$iftmp_24; //@line 36 "testcapi_long.h"
        $uin=$5; //@line 36 "testcapi_long.h"
        var $6=$j; //@line 43 "testcapi_long.h"
        var $7=($6) % 3; //@line 43 "testcapi_long.h"
        var $8=$uin; //@line 43 "testcapi_long.h"
        var $9=($7) + -1; //@line 43 "testcapi_long.h"
        var $10=($9) + ($8);
        $uin=$10; //@line 43 "testcapi_long.h"
        var $11=$uin; //@line 45 "testcapi_long.h"
        var $12=_PyLong_FromUnsignedLong($11); //@line 45 "testcapi_long.h"
        $pyresult=$12; //@line 45 "testcapi_long.h"
        var $13=($12)==0; //@line 46 "testcapi_long.h"
        if ($13) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 46 "testcapi_long.h"
      case 6: // $bb5
        var $14=$error_addr; //@line 47 "testcapi_long.h"
        var $15=FUNCTION_TABLE[$14](__str16); //@line 47 "testcapi_long.h"
        $0=$15; //@line 47 "testcapi_long.h"
        __label__ = 82; break; //@line 47 "testcapi_long.h"
      case 7: // $bb6
        var $16=$pyresult; //@line 50 "testcapi_long.h"
        var $17=_PyLong_AsUnsignedLong($16); //@line 50 "testcapi_long.h"
        $uout=$17; //@line 50 "testcapi_long.h"
        var $18=$uout; //@line 51 "testcapi_long.h"
        var $19=($18)==-1; //@line 51 "testcapi_long.h"
        if ($19) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 51 "testcapi_long.h"
      case 8: // $bb7
        var $20=_PyErr_Occurred(); //@line 51 "testcapi_long.h"
        var $21=($20)!=0; //@line 51 "testcapi_long.h"
        if ($21) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 51 "testcapi_long.h"
      case 9: // $bb8
        var $22=$error_addr; //@line 52 "testcapi_long.h"
        var $23=FUNCTION_TABLE[$22](__str17); //@line 52 "testcapi_long.h"
        $0=$23; //@line 52 "testcapi_long.h"
        __label__ = 82; break; //@line 52 "testcapi_long.h"
      case 10: // $bb9
        var $24=$uout; //@line 54 "testcapi_long.h"
        var $25=$uin; //@line 54 "testcapi_long.h"
        var $26=($24)!=($25); //@line 54 "testcapi_long.h"
        if ($26) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 54 "testcapi_long.h"
      case 11: // $bb10
        var $27=$error_addr; //@line 55 "testcapi_long.h"
        var $28=FUNCTION_TABLE[$27](__str18); //@line 55 "testcapi_long.h"
        $0=$28; //@line 55 "testcapi_long.h"
        __label__ = 82; break; //@line 55 "testcapi_long.h"
      case 12: // $bb11
        var $29=$pyresult; //@line 57 "testcapi_long.h"
        var $30=$29; //@line 57 "testcapi_long.h"
        var $31=HEAP[$30]; //@line 57 "testcapi_long.h"
        var $32=($31) - 1; //@line 57 "testcapi_long.h"
        var $33=$pyresult; //@line 57 "testcapi_long.h"
        var $34=$33; //@line 57 "testcapi_long.h"
        HEAP[$34]=$32; //@line 57 "testcapi_long.h"
        var $35=$pyresult; //@line 57 "testcapi_long.h"
        var $36=$35; //@line 57 "testcapi_long.h"
        var $37=HEAP[$36]; //@line 57 "testcapi_long.h"
        var $38=($37)==0; //@line 57 "testcapi_long.h"
        if ($38) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 57 "testcapi_long.h"
      case 13: // $bb12
        var $39=$pyresult; //@line 57 "testcapi_long.h"
        var $40=$39+4; //@line 57 "testcapi_long.h"
        var $41=HEAP[$40]; //@line 57 "testcapi_long.h"
        var $42=$41+24; //@line 57 "testcapi_long.h"
        var $43=HEAP[$42]; //@line 57 "testcapi_long.h"
        var $44=$pyresult; //@line 57 "testcapi_long.h"
        FUNCTION_TABLE[$43]($44); //@line 57 "testcapi_long.h"
        __label__ = 14; break; //@line 57 "testcapi_long.h"
      case 14: // $bb13
        $pyresult=0; //@line 57 "testcapi_long.h"
        var $45=$uin; //@line 59 "testcapi_long.h"
        $in=$45; //@line 59 "testcapi_long.h"
        var $46=$in; //@line 60 "testcapi_long.h"
        var $47=_PyLong_FromLong($46); //@line 60 "testcapi_long.h"
        $pyresult=$47; //@line 60 "testcapi_long.h"
        var $48=($47)==0; //@line 61 "testcapi_long.h"
        if ($48) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 61 "testcapi_long.h"
      case 15: // $bb14
        var $49=$error_addr; //@line 62 "testcapi_long.h"
        var $50=FUNCTION_TABLE[$49](__str19); //@line 62 "testcapi_long.h"
        $0=$50; //@line 62 "testcapi_long.h"
        __label__ = 82; break; //@line 62 "testcapi_long.h"
      case 16: // $bb15
        var $51=$pyresult; //@line 65 "testcapi_long.h"
        var $52=_PyLong_AsLong($51); //@line 65 "testcapi_long.h"
        $out=$52; //@line 65 "testcapi_long.h"
        var $53=$out; //@line 66 "testcapi_long.h"
        var $54=($53)==-1; //@line 66 "testcapi_long.h"
        if ($54) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 66 "testcapi_long.h"
      case 17: // $bb16
        var $55=_PyErr_Occurred(); //@line 66 "testcapi_long.h"
        var $56=($55)!=0; //@line 66 "testcapi_long.h"
        if ($56) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 66 "testcapi_long.h"
      case 18: // $bb17
        var $57=$error_addr; //@line 67 "testcapi_long.h"
        var $58=FUNCTION_TABLE[$57](__str20); //@line 67 "testcapi_long.h"
        $0=$58; //@line 67 "testcapi_long.h"
        __label__ = 82; break; //@line 67 "testcapi_long.h"
      case 19: // $bb18
        var $59=$out; //@line 69 "testcapi_long.h"
        var $60=$in; //@line 69 "testcapi_long.h"
        var $61=($59)!=($60); //@line 69 "testcapi_long.h"
        if ($61) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 69 "testcapi_long.h"
      case 20: // $bb19
        var $62=$error_addr; //@line 70 "testcapi_long.h"
        var $63=FUNCTION_TABLE[$62](__str21); //@line 70 "testcapi_long.h"
        $0=$63; //@line 70 "testcapi_long.h"
        __label__ = 82; break; //@line 70 "testcapi_long.h"
      case 21: // $bb20
        var $64=$pyresult; //@line 72 "testcapi_long.h"
        var $65=$64; //@line 72 "testcapi_long.h"
        var $66=HEAP[$65]; //@line 72 "testcapi_long.h"
        var $67=($66) - 1; //@line 72 "testcapi_long.h"
        var $68=$pyresult; //@line 72 "testcapi_long.h"
        var $69=$68; //@line 72 "testcapi_long.h"
        HEAP[$69]=$67; //@line 72 "testcapi_long.h"
        var $70=$pyresult; //@line 72 "testcapi_long.h"
        var $71=$70; //@line 72 "testcapi_long.h"
        var $72=HEAP[$71]; //@line 72 "testcapi_long.h"
        var $73=($72)==0; //@line 72 "testcapi_long.h"
        if ($73) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 72 "testcapi_long.h"
      case 22: // $bb21
        var $74=$pyresult; //@line 72 "testcapi_long.h"
        var $75=$74+4; //@line 72 "testcapi_long.h"
        var $76=HEAP[$75]; //@line 72 "testcapi_long.h"
        var $77=$76+24; //@line 72 "testcapi_long.h"
        var $78=HEAP[$77]; //@line 72 "testcapi_long.h"
        var $79=$pyresult; //@line 72 "testcapi_long.h"
        FUNCTION_TABLE[$78]($79); //@line 72 "testcapi_long.h"
        __label__ = 23; break; //@line 72 "testcapi_long.h"
      case 23: // $bb22
        $pyresult=0; //@line 72 "testcapi_long.h"
        var $80=$j; //@line 31 "testcapi_long.h"
        var $81=($80) + 1; //@line 31 "testcapi_long.h"
        $j=$81; //@line 31 "testcapi_long.h"
        __lastLabel__ = 23; __label__ = 24; break; //@line 31 "testcapi_long.h"
      case 24: // $bb23
        var $82=__lastLabel__ == 23 ? $81 : (0);
        var $83=($82) <= 5; //@line 31 "testcapi_long.h"
        if ($83) { __label__ = 2; break; } else { __label__ = 25; break; } //@line 31 "testcapi_long.h"
      case 25: // $bb24
        var $84=$i; //@line 28 "testcapi_long.h"
        var $85=($84) + 1; //@line 28 "testcapi_long.h"
        $i=$85; //@line 28 "testcapi_long.h"
        var $86=$base; //@line 28 "testcapi_long.h"
        var $87=($86) << 1; //@line 28 "testcapi_long.h"
        $base=$87; //@line 28 "testcapi_long.h"
        __label__ = 26; break; //@line 28 "testcapi_long.h"
      case 26: // $bb25
        var $88=$NBITS; //@line 27 "testcapi_long.h"
        var $89=($88) + 1; //@line 27 "testcapi_long.h"
        var $90=$i; //@line 27 "testcapi_long.h"
        var $91=($89) > ($90); //@line 27 "testcapi_long.h"
        if ($91) { __label__ = 1; break; } else { __label__ = 27; break; } //@line 27 "testcapi_long.h"
      case 27: // $bb26
        var $92=_PyLong_FromLong(1); //@line 85 "testcapi_long.h"
        $one=$92; //@line 85 "testcapi_long.h"
        var $93=$one; //@line 86 "testcapi_long.h"
        var $94=($93)==0; //@line 86 "testcapi_long.h"
        if ($94) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 86 "testcapi_long.h"
      case 28: // $bb29
        var $95=$error_addr; //@line 87 "testcapi_long.h"
        var $96=FUNCTION_TABLE[$95](__str22); //@line 87 "testcapi_long.h"
        $0=$96; //@line 87 "testcapi_long.h"
        __label__ = 82; break; //@line 87 "testcapi_long.h"
      case 29: // $bb30
        var $97=$one; //@line 91 "testcapi_long.h"
        var $98=_PyNumber_Negative($97); //@line 91 "testcapi_long.h"
        $x=$98; //@line 91 "testcapi_long.h"
        var $99=$x; //@line 92 "testcapi_long.h"
        var $100=($99)==0; //@line 92 "testcapi_long.h"
        if ($100) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 92 "testcapi_long.h"
      case 30: // $bb31
        var $101=$error_addr; //@line 93 "testcapi_long.h"
        var $102=FUNCTION_TABLE[$101](__str23); //@line 93 "testcapi_long.h"
        $0=$102; //@line 93 "testcapi_long.h"
        __label__ = 82; break; //@line 93 "testcapi_long.h"
      case 31: // $bb32
        var $103=$x; //@line 96 "testcapi_long.h"
        var $104=_PyLong_AsUnsignedLong($103); //@line 96 "testcapi_long.h"
        $uout28=$104; //@line 96 "testcapi_long.h"
        var $105=$uout28; //@line 97 "testcapi_long.h"
        var $106=($105)!=-1; //@line 97 "testcapi_long.h"
        if ($106) { __label__ = 33; break; } else { __label__ = 32; break; } //@line 97 "testcapi_long.h"
      case 32: // $bb33
        var $107=_PyErr_Occurred(); //@line 97 "testcapi_long.h"
        var $108=($107)==0; //@line 97 "testcapi_long.h"
        if ($108) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 97 "testcapi_long.h"
      case 33: // $bb34
        var $109=$error_addr; //@line 98 "testcapi_long.h"
        var $110=FUNCTION_TABLE[$109](__str24); //@line 98 "testcapi_long.h"
        $0=$110; //@line 98 "testcapi_long.h"
        __label__ = 82; break; //@line 98 "testcapi_long.h"
      case 34: // $bb35
        var $111=HEAP[_PyExc_OverflowError]; //@line 100 "testcapi_long.h"
        var $112=_PyErr_ExceptionMatches($111); //@line 100 "testcapi_long.h"
        var $113=($112)==0; //@line 100 "testcapi_long.h"
        if ($113) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 100 "testcapi_long.h"
      case 35: // $bb36
        var $114=$error_addr; //@line 101 "testcapi_long.h"
        var $115=FUNCTION_TABLE[$114](__str25); //@line 101 "testcapi_long.h"
        $0=$115; //@line 101 "testcapi_long.h"
        __label__ = 82; break; //@line 101 "testcapi_long.h"
      case 36: // $bb37
        _PyErr_Clear(); //@line 104 "testcapi_long.h"
        var $116=$x; //@line 105 "testcapi_long.h"
        var $117=$116; //@line 105 "testcapi_long.h"
        var $118=HEAP[$117]; //@line 105 "testcapi_long.h"
        var $119=($118) - 1; //@line 105 "testcapi_long.h"
        var $120=$x; //@line 105 "testcapi_long.h"
        var $121=$120; //@line 105 "testcapi_long.h"
        HEAP[$121]=$119; //@line 105 "testcapi_long.h"
        var $122=$x; //@line 105 "testcapi_long.h"
        var $123=$122; //@line 105 "testcapi_long.h"
        var $124=HEAP[$123]; //@line 105 "testcapi_long.h"
        var $125=($124)==0; //@line 105 "testcapi_long.h"
        if ($125) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 105 "testcapi_long.h"
      case 37: // $bb38
        var $126=$x; //@line 105 "testcapi_long.h"
        var $127=$126+4; //@line 105 "testcapi_long.h"
        var $128=HEAP[$127]; //@line 105 "testcapi_long.h"
        var $129=$128+24; //@line 105 "testcapi_long.h"
        var $130=HEAP[$129]; //@line 105 "testcapi_long.h"
        var $131=$x; //@line 105 "testcapi_long.h"
        FUNCTION_TABLE[$130]($131); //@line 105 "testcapi_long.h"
        __label__ = 38; break; //@line 105 "testcapi_long.h"
      case 38: // $bb39
        $x=0; //@line 105 "testcapi_long.h"
        var $132=$NBITS; //@line 108 "testcapi_long.h"
        var $133=_PyLong_FromLong($132); //@line 108 "testcapi_long.h"
        $y=$133; //@line 108 "testcapi_long.h"
        var $134=($133)==0; //@line 109 "testcapi_long.h"
        if ($134) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 109 "testcapi_long.h"
      case 39: // $bb40
        var $135=$error_addr; //@line 110 "testcapi_long.h"
        var $136=FUNCTION_TABLE[$135](__str22); //@line 110 "testcapi_long.h"
        $0=$136; //@line 110 "testcapi_long.h"
        __label__ = 82; break; //@line 110 "testcapi_long.h"
      case 40: // $bb41
        var $137=$one; //@line 113 "testcapi_long.h"
        var $138=$y; //@line 113 "testcapi_long.h"
        var $139=_PyNumber_Lshift($137, $138); //@line 113 "testcapi_long.h"
        $x=$139; //@line 113 "testcapi_long.h"
        var $140=$y; //@line 114 "testcapi_long.h"
        var $141=$140; //@line 114 "testcapi_long.h"
        var $142=HEAP[$141]; //@line 114 "testcapi_long.h"
        var $143=($142) - 1; //@line 114 "testcapi_long.h"
        var $144=$y; //@line 114 "testcapi_long.h"
        var $145=$144; //@line 114 "testcapi_long.h"
        HEAP[$145]=$143; //@line 114 "testcapi_long.h"
        var $146=$y; //@line 114 "testcapi_long.h"
        var $147=$146; //@line 114 "testcapi_long.h"
        var $148=HEAP[$147]; //@line 114 "testcapi_long.h"
        var $149=($148)==0; //@line 114 "testcapi_long.h"
        if ($149) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 114 "testcapi_long.h"
      case 41: // $bb42
        var $150=$y; //@line 114 "testcapi_long.h"
        var $151=$150+4; //@line 114 "testcapi_long.h"
        var $152=HEAP[$151]; //@line 114 "testcapi_long.h"
        var $153=$152+24; //@line 114 "testcapi_long.h"
        var $154=HEAP[$153]; //@line 114 "testcapi_long.h"
        var $155=$y; //@line 114 "testcapi_long.h"
        FUNCTION_TABLE[$154]($155); //@line 114 "testcapi_long.h"
        __label__ = 42; break; //@line 114 "testcapi_long.h"
      case 42: // $bb43
        $y=0; //@line 114 "testcapi_long.h"
        var $156=$x; //@line 115 "testcapi_long.h"
        var $157=($156)==0; //@line 115 "testcapi_long.h"
        if ($157) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 115 "testcapi_long.h"
      case 43: // $bb44
        var $158=$error_addr; //@line 116 "testcapi_long.h"
        var $159=FUNCTION_TABLE[$158](__str26); //@line 116 "testcapi_long.h"
        $0=$159; //@line 116 "testcapi_long.h"
        __label__ = 82; break; //@line 116 "testcapi_long.h"
      case 44: // $bb45
        var $160=$x; //@line 119 "testcapi_long.h"
        var $161=_PyLong_AsUnsignedLong($160); //@line 119 "testcapi_long.h"
        $uout28=$161; //@line 119 "testcapi_long.h"
        var $162=$uout28; //@line 120 "testcapi_long.h"
        var $163=($162)!=-1; //@line 120 "testcapi_long.h"
        if ($163) { __label__ = 46; break; } else { __label__ = 45; break; } //@line 120 "testcapi_long.h"
      case 45: // $bb46
        var $164=_PyErr_Occurred(); //@line 120 "testcapi_long.h"
        var $165=($164)==0; //@line 120 "testcapi_long.h"
        if ($165) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 120 "testcapi_long.h"
      case 46: // $bb47
        var $166=$error_addr; //@line 121 "testcapi_long.h"
        var $167=FUNCTION_TABLE[$166](__str27); //@line 121 "testcapi_long.h"
        $0=$167; //@line 121 "testcapi_long.h"
        __label__ = 82; break; //@line 121 "testcapi_long.h"
      case 47: // $bb48
        var $168=HEAP[_PyExc_OverflowError]; //@line 124 "testcapi_long.h"
        var $169=_PyErr_ExceptionMatches($168); //@line 124 "testcapi_long.h"
        var $170=($169)==0; //@line 124 "testcapi_long.h"
        if ($170) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 124 "testcapi_long.h"
      case 48: // $bb49
        var $171=$error_addr; //@line 125 "testcapi_long.h"
        var $172=FUNCTION_TABLE[$171](__str28); //@line 125 "testcapi_long.h"
        $0=$172; //@line 125 "testcapi_long.h"
        __label__ = 82; break; //@line 125 "testcapi_long.h"
      case 49: // $bb50
        _PyErr_Clear(); //@line 128 "testcapi_long.h"
        var $173=$x; //@line 132 "testcapi_long.h"
        var $174=$one; //@line 132 "testcapi_long.h"
        var $175=_PyNumber_Rshift($173, $174); //@line 132 "testcapi_long.h"
        $y=$175; //@line 132 "testcapi_long.h"
        var $176=$x; //@line 133 "testcapi_long.h"
        var $177=$176; //@line 133 "testcapi_long.h"
        var $178=HEAP[$177]; //@line 133 "testcapi_long.h"
        var $179=($178) - 1; //@line 133 "testcapi_long.h"
        var $180=$x; //@line 133 "testcapi_long.h"
        var $181=$180; //@line 133 "testcapi_long.h"
        HEAP[$181]=$179; //@line 133 "testcapi_long.h"
        var $182=$x; //@line 133 "testcapi_long.h"
        var $183=$182; //@line 133 "testcapi_long.h"
        var $184=HEAP[$183]; //@line 133 "testcapi_long.h"
        var $185=($184)==0; //@line 133 "testcapi_long.h"
        if ($185) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 133 "testcapi_long.h"
      case 50: // $bb51
        var $186=$x; //@line 133 "testcapi_long.h"
        var $187=$186+4; //@line 133 "testcapi_long.h"
        var $188=HEAP[$187]; //@line 133 "testcapi_long.h"
        var $189=$188+24; //@line 133 "testcapi_long.h"
        var $190=HEAP[$189]; //@line 133 "testcapi_long.h"
        var $191=$x; //@line 133 "testcapi_long.h"
        FUNCTION_TABLE[$190]($191); //@line 133 "testcapi_long.h"
        __label__ = 51; break; //@line 133 "testcapi_long.h"
      case 51: // $bb52
        $x=0; //@line 133 "testcapi_long.h"
        var $192=$y; //@line 134 "testcapi_long.h"
        var $193=($192)==0; //@line 134 "testcapi_long.h"
        if ($193) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 134 "testcapi_long.h"
      case 52: // $bb53
        var $194=$error_addr; //@line 135 "testcapi_long.h"
        var $195=FUNCTION_TABLE[$194](__str29); //@line 135 "testcapi_long.h"
        $0=$195; //@line 135 "testcapi_long.h"
        __label__ = 82; break; //@line 135 "testcapi_long.h"
      case 53: // $bb54
        var $196=$y; //@line 138 "testcapi_long.h"
        var $197=_PyLong_AsLong($196); //@line 138 "testcapi_long.h"
        $out27=$197; //@line 138 "testcapi_long.h"
        var $198=$out27; //@line 139 "testcapi_long.h"
        var $199=($198)!=-1; //@line 139 "testcapi_long.h"
        if ($199) { __label__ = 55; break; } else { __label__ = 54; break; } //@line 139 "testcapi_long.h"
      case 54: // $bb55
        var $200=_PyErr_Occurred(); //@line 139 "testcapi_long.h"
        var $201=($200)==0; //@line 139 "testcapi_long.h"
        if ($201) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 139 "testcapi_long.h"
      case 55: // $bb56
        var $202=$error_addr; //@line 140 "testcapi_long.h"
        var $203=FUNCTION_TABLE[$202](__str30); //@line 140 "testcapi_long.h"
        $0=$203; //@line 140 "testcapi_long.h"
        __label__ = 82; break; //@line 140 "testcapi_long.h"
      case 56: // $bb57
        var $204=HEAP[_PyExc_OverflowError]; //@line 143 "testcapi_long.h"
        var $205=_PyErr_ExceptionMatches($204); //@line 143 "testcapi_long.h"
        var $206=($205)==0; //@line 143 "testcapi_long.h"
        if ($206) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 143 "testcapi_long.h"
      case 57: // $bb58
        var $207=$error_addr; //@line 144 "testcapi_long.h"
        var $208=FUNCTION_TABLE[$207](__str31); //@line 144 "testcapi_long.h"
        $0=$208; //@line 144 "testcapi_long.h"
        __label__ = 82; break; //@line 144 "testcapi_long.h"
      case 58: // $bb59
        _PyErr_Clear(); //@line 147 "testcapi_long.h"
        var $209=$y; //@line 151 "testcapi_long.h"
        var $210=_PyNumber_Negative($209); //@line 151 "testcapi_long.h"
        $x=$210; //@line 151 "testcapi_long.h"
        var $211=$y; //@line 152 "testcapi_long.h"
        var $212=$211; //@line 152 "testcapi_long.h"
        var $213=HEAP[$212]; //@line 152 "testcapi_long.h"
        var $214=($213) - 1; //@line 152 "testcapi_long.h"
        var $215=$y; //@line 152 "testcapi_long.h"
        var $216=$215; //@line 152 "testcapi_long.h"
        HEAP[$216]=$214; //@line 152 "testcapi_long.h"
        var $217=$y; //@line 152 "testcapi_long.h"
        var $218=$217; //@line 152 "testcapi_long.h"
        var $219=HEAP[$218]; //@line 152 "testcapi_long.h"
        var $220=($219)==0; //@line 152 "testcapi_long.h"
        if ($220) { __label__ = 59; break; } else { __label__ = 60; break; } //@line 152 "testcapi_long.h"
      case 59: // $bb60
        var $221=$y; //@line 152 "testcapi_long.h"
        var $222=$221+4; //@line 152 "testcapi_long.h"
        var $223=HEAP[$222]; //@line 152 "testcapi_long.h"
        var $224=$223+24; //@line 152 "testcapi_long.h"
        var $225=HEAP[$224]; //@line 152 "testcapi_long.h"
        var $226=$y; //@line 152 "testcapi_long.h"
        FUNCTION_TABLE[$225]($226); //@line 152 "testcapi_long.h"
        __label__ = 60; break; //@line 152 "testcapi_long.h"
      case 60: // $bb61
        $y=0; //@line 152 "testcapi_long.h"
        var $227=$x; //@line 153 "testcapi_long.h"
        var $228=($227)==0; //@line 153 "testcapi_long.h"
        if ($228) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 153 "testcapi_long.h"
      case 61: // $bb62
        var $229=$error_addr; //@line 154 "testcapi_long.h"
        var $230=FUNCTION_TABLE[$229](__str23); //@line 154 "testcapi_long.h"
        $0=$230; //@line 154 "testcapi_long.h"
        __label__ = 82; break; //@line 154 "testcapi_long.h"
      case 62: // $bb63
        var $231=$x; //@line 157 "testcapi_long.h"
        var $232=$one; //@line 157 "testcapi_long.h"
        var $233=_PyNumber_Subtract($231, $232); //@line 157 "testcapi_long.h"
        $y=$233; //@line 157 "testcapi_long.h"
        var $234=$x; //@line 158 "testcapi_long.h"
        var $235=$234; //@line 158 "testcapi_long.h"
        var $236=HEAP[$235]; //@line 158 "testcapi_long.h"
        var $237=($236) - 1; //@line 158 "testcapi_long.h"
        var $238=$x; //@line 158 "testcapi_long.h"
        var $239=$238; //@line 158 "testcapi_long.h"
        HEAP[$239]=$237; //@line 158 "testcapi_long.h"
        var $240=$x; //@line 158 "testcapi_long.h"
        var $241=$240; //@line 158 "testcapi_long.h"
        var $242=HEAP[$241]; //@line 158 "testcapi_long.h"
        var $243=($242)==0; //@line 158 "testcapi_long.h"
        if ($243) { __label__ = 63; break; } else { __label__ = 64; break; } //@line 158 "testcapi_long.h"
      case 63: // $bb64
        var $244=$x; //@line 158 "testcapi_long.h"
        var $245=$244+4; //@line 158 "testcapi_long.h"
        var $246=HEAP[$245]; //@line 158 "testcapi_long.h"
        var $247=$246+24; //@line 158 "testcapi_long.h"
        var $248=HEAP[$247]; //@line 158 "testcapi_long.h"
        var $249=$x; //@line 158 "testcapi_long.h"
        FUNCTION_TABLE[$248]($249); //@line 158 "testcapi_long.h"
        __label__ = 64; break; //@line 158 "testcapi_long.h"
      case 64: // $bb65
        $x=0; //@line 158 "testcapi_long.h"
        var $250=$y; //@line 159 "testcapi_long.h"
        var $251=($250)==0; //@line 159 "testcapi_long.h"
        if ($251) { __label__ = 65; break; } else { __label__ = 66; break; } //@line 159 "testcapi_long.h"
      case 65: // $bb66
        var $252=$error_addr; //@line 160 "testcapi_long.h"
        var $253=FUNCTION_TABLE[$252](__str32); //@line 160 "testcapi_long.h"
        $0=$253; //@line 160 "testcapi_long.h"
        __label__ = 82; break; //@line 160 "testcapi_long.h"
      case 66: // $bb67
        var $254=$y; //@line 163 "testcapi_long.h"
        var $255=_PyLong_AsLong($254); //@line 163 "testcapi_long.h"
        $out27=$255; //@line 163 "testcapi_long.h"
        var $256=$out27; //@line 164 "testcapi_long.h"
        var $257=($256)!=-1; //@line 164 "testcapi_long.h"
        if ($257) { __label__ = 68; break; } else { __label__ = 67; break; } //@line 164 "testcapi_long.h"
      case 67: // $bb68
        var $258=_PyErr_Occurred(); //@line 164 "testcapi_long.h"
        var $259=($258)==0; //@line 164 "testcapi_long.h"
        if ($259) { __label__ = 68; break; } else { __label__ = 69; break; } //@line 164 "testcapi_long.h"
      case 68: // $bb69
        var $260=$error_addr; //@line 165 "testcapi_long.h"
        var $261=FUNCTION_TABLE[$260](__str33); //@line 165 "testcapi_long.h"
        $0=$261; //@line 165 "testcapi_long.h"
        __label__ = 82; break; //@line 165 "testcapi_long.h"
      case 69: // $bb70
        var $262=HEAP[_PyExc_OverflowError]; //@line 168 "testcapi_long.h"
        var $263=_PyErr_ExceptionMatches($262); //@line 168 "testcapi_long.h"
        var $264=($263)==0; //@line 168 "testcapi_long.h"
        if ($264) { __label__ = 70; break; } else { __label__ = 71; break; } //@line 168 "testcapi_long.h"
      case 70: // $bb71
        var $265=$error_addr; //@line 169 "testcapi_long.h"
        var $266=FUNCTION_TABLE[$265](__str34); //@line 169 "testcapi_long.h"
        $0=$266; //@line 169 "testcapi_long.h"
        __label__ = 82; break; //@line 169 "testcapi_long.h"
      case 71: // $bb72
        _PyErr_Clear(); //@line 172 "testcapi_long.h"
        var $267=$y; //@line 173 "testcapi_long.h"
        var $268=$267; //@line 173 "testcapi_long.h"
        var $269=HEAP[$268]; //@line 173 "testcapi_long.h"
        var $270=($269) - 1; //@line 173 "testcapi_long.h"
        var $271=$y; //@line 173 "testcapi_long.h"
        var $272=$271; //@line 173 "testcapi_long.h"
        HEAP[$272]=$270; //@line 173 "testcapi_long.h"
        var $273=$y; //@line 173 "testcapi_long.h"
        var $274=$273; //@line 173 "testcapi_long.h"
        var $275=HEAP[$274]; //@line 173 "testcapi_long.h"
        var $276=($275)==0; //@line 173 "testcapi_long.h"
        if ($276) { __label__ = 72; break; } else { __label__ = 73; break; } //@line 173 "testcapi_long.h"
      case 72: // $bb73
        var $277=$y; //@line 173 "testcapi_long.h"
        var $278=$277+4; //@line 173 "testcapi_long.h"
        var $279=HEAP[$278]; //@line 173 "testcapi_long.h"
        var $280=$279+24; //@line 173 "testcapi_long.h"
        var $281=HEAP[$280]; //@line 173 "testcapi_long.h"
        var $282=$y; //@line 173 "testcapi_long.h"
        FUNCTION_TABLE[$281]($282); //@line 173 "testcapi_long.h"
        __label__ = 73; break; //@line 173 "testcapi_long.h"
      case 73: // $bb74
        $y=0; //@line 173 "testcapi_long.h"
        var $283=$x; //@line 175 "testcapi_long.h"
        var $284=($283)!=0; //@line 175 "testcapi_long.h"
        if ($284) { __label__ = 74; break; } else { __label__ = 79; break; } //@line 175 "testcapi_long.h"
      case 74: // $bb75
        var $285=$x; //@line 175 "testcapi_long.h"
        var $286=$285; //@line 175 "testcapi_long.h"
        var $287=HEAP[$286]; //@line 175 "testcapi_long.h"
        var $288=($287) - 1; //@line 175 "testcapi_long.h"
        var $289=$x; //@line 175 "testcapi_long.h"
        var $290=$289; //@line 175 "testcapi_long.h"
        HEAP[$290]=$288; //@line 175 "testcapi_long.h"
        var $291=$x; //@line 175 "testcapi_long.h"
        var $292=$291; //@line 175 "testcapi_long.h"
        var $293=HEAP[$292]; //@line 175 "testcapi_long.h"
        var $294=($293)==0; //@line 175 "testcapi_long.h"
        if ($294) { __label__ = 75; break; } else { __label__ = 76; break; } //@line 175 "testcapi_long.h"
      case 75: // $bb76
        var $295=$x; //@line 175 "testcapi_long.h"
        var $296=$295+4; //@line 175 "testcapi_long.h"
        var $297=HEAP[$296]; //@line 175 "testcapi_long.h"
        var $298=$297+24; //@line 175 "testcapi_long.h"
        var $299=HEAP[$298]; //@line 175 "testcapi_long.h"
        var $300=$x; //@line 175 "testcapi_long.h"
        FUNCTION_TABLE[$299]($300); //@line 175 "testcapi_long.h"
        __label__ = 76; break; //@line 175 "testcapi_long.h"
      case 76: // $bb77
        var $_pr=$y;
        var $301=($_pr)!=0; //@line 176 "testcapi_long.h"
        if ($301) { __label__ = 77; break; } else { __label__ = 79; break; } //@line 176 "testcapi_long.h"
      case 77: // $bb78
        var $302=$y; //@line 176 "testcapi_long.h"
        var $303=$302; //@line 176 "testcapi_long.h"
        var $304=HEAP[$303]; //@line 176 "testcapi_long.h"
        var $305=($304) - 1; //@line 176 "testcapi_long.h"
        var $306=$y; //@line 176 "testcapi_long.h"
        var $307=$306; //@line 176 "testcapi_long.h"
        HEAP[$307]=$305; //@line 176 "testcapi_long.h"
        var $308=$y; //@line 176 "testcapi_long.h"
        var $309=$308; //@line 176 "testcapi_long.h"
        var $310=HEAP[$309]; //@line 176 "testcapi_long.h"
        var $311=($310)==0; //@line 176 "testcapi_long.h"
        if ($311) { __label__ = 78; break; } else { __label__ = 79; break; } //@line 176 "testcapi_long.h"
      case 78: // $bb79
        var $312=$y; //@line 176 "testcapi_long.h"
        var $313=$312+4; //@line 176 "testcapi_long.h"
        var $314=HEAP[$313]; //@line 176 "testcapi_long.h"
        var $315=$314+24; //@line 176 "testcapi_long.h"
        var $316=HEAP[$315]; //@line 176 "testcapi_long.h"
        var $317=$y; //@line 176 "testcapi_long.h"
        FUNCTION_TABLE[$316]($317); //@line 176 "testcapi_long.h"
        __label__ = 79; break; //@line 176 "testcapi_long.h"
      case 79: // $bb80
        var $318=$one; //@line 177 "testcapi_long.h"
        var $319=$318; //@line 177 "testcapi_long.h"
        var $320=HEAP[$319]; //@line 177 "testcapi_long.h"
        var $321=($320) - 1; //@line 177 "testcapi_long.h"
        var $322=$one; //@line 177 "testcapi_long.h"
        var $323=$322; //@line 177 "testcapi_long.h"
        HEAP[$323]=$321; //@line 177 "testcapi_long.h"
        var $324=$one; //@line 177 "testcapi_long.h"
        var $325=$324; //@line 177 "testcapi_long.h"
        var $326=HEAP[$325]; //@line 177 "testcapi_long.h"
        var $327=($326)==0; //@line 177 "testcapi_long.h"
        if ($327) { __label__ = 80; break; } else { __label__ = 81; break; } //@line 177 "testcapi_long.h"
      case 80: // $bb81
        var $328=$one; //@line 177 "testcapi_long.h"
        var $329=$328+4; //@line 177 "testcapi_long.h"
        var $330=HEAP[$329]; //@line 177 "testcapi_long.h"
        var $331=$330+24; //@line 177 "testcapi_long.h"
        var $332=HEAP[$331]; //@line 177 "testcapi_long.h"
        var $333=$one; //@line 177 "testcapi_long.h"
        FUNCTION_TABLE[$332]($333); //@line 177 "testcapi_long.h"
        __label__ = 81; break; //@line 177 "testcapi_long.h"
      case 81: // $bb82
        var $334=HEAP[__Py_NoneStruct]; //@line 180 "testcapi_long.h"
        var $335=($334) + 1; //@line 180 "testcapi_long.h"
        HEAP[__Py_NoneStruct]=$335; //@line 180 "testcapi_long.h"
        $0=__Py_NoneStruct; //@line 181 "testcapi_long.h"
        __label__ = 82; break; //@line 181 "testcapi_long.h"
      case 82: // $bb83
        var $336=$0; //@line 47 "testcapi_long.h"
        $retval=$336; //@line 47 "testcapi_long.h"
        var $retval84=$retval; //@line 47 "testcapi_long.h"
        ;
        return $retval84; //@line 47 "testcapi_long.h"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_long_api($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    var $1=_test_long_api_inner(); //@line 415 "_testcapimodule.c"
    $0=$1; //@line 415 "_testcapimodule.c"
    var $2=$0; //@line 415 "_testcapimodule.c"
    $retval=$2; //@line 415 "_testcapimodule.c"
    var $retval1=$retval; //@line 415 "_testcapimodule.c"
    ;
    return $retval1; //@line 415 "_testcapimodule.c"
  }
  

  function _raise_test_longlong_error($msg) {
    ;
    var __label__;
  
    var $msg_addr;
    var $retval;
    var $0;
    $msg_addr=$msg;
    var $1=$msg_addr; //@line 430 "_testcapimodule.c"
    var $2=_raiseTestError(__str35, $1); //@line 430 "_testcapimodule.c"
    $0=$2; //@line 430 "_testcapimodule.c"
    var $3=$0; //@line 430 "_testcapimodule.c"
    $retval=$3; //@line 430 "_testcapimodule.c"
    var $retval1=$retval; //@line 430 "_testcapimodule.c"
    ;
    return $retval1; //@line 430 "_testcapimodule.c"
  }
  

  function _test_longlong_api_inner() {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
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
        $error_addr=(FUNCTION_TABLE_OFFSET + 4);
        $NBITS=64; //@line 13 "testcapi_long.h"
        $base=1; //@line 25 "testcapi_long.h"
        $i=0; //@line 26 "testcapi_long.h"
        __label__ = 26; break; //@line 26 "testcapi_long.h"
      case 1: // $bb
        $j=0; //@line 31 "testcapi_long.h"
        __lastLabel__ = 1; __label__ = 24; break; //@line 31 "testcapi_long.h"
      case 2: // $bb1
        var $1=$j; //@line 36 "testcapi_long.h"
        var $2=($1) > 2; //@line 36 "testcapi_long.h"
        var $3=$base; //@line 36 "testcapi_long.h"
        if ($2) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 36 "testcapi_long.h"
      case 3: // $bb2
        var $4=0 - ($3); //@line 36 "testcapi_long.h"
        $iftmp_30=$4; //@line 36 "testcapi_long.h"
        __label__ = 5; break; //@line 36 "testcapi_long.h"
      case 4: // $bb3
        $iftmp_30=$3; //@line 36 "testcapi_long.h"
        __label__ = 5; break; //@line 36 "testcapi_long.h"
      case 5: // $bb4
        var $5=$iftmp_30; //@line 36 "testcapi_long.h"
        $uin=$5; //@line 36 "testcapi_long.h"
        var $6=$j; //@line 43 "testcapi_long.h"
        var $7=($6) % 3; //@line 43 "testcapi_long.h"
        var $8=($7) - 1; //@line 43 "testcapi_long.h"
        var $9=($8); //@line 43 "testcapi_long.h"
        var $10=$uin; //@line 43 "testcapi_long.h"
        var $11=($9) + ($10); //@line 43 "testcapi_long.h"
        $uin=$11; //@line 43 "testcapi_long.h"
        var $12=$uin; //@line 45 "testcapi_long.h"
        var $13=_PyLong_FromUnsignedLongLong($12); //@line 45 "testcapi_long.h"
        $pyresult=$13; //@line 45 "testcapi_long.h"
        var $14=($13)==0; //@line 46 "testcapi_long.h"
        if ($14) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 46 "testcapi_long.h"
      case 6: // $bb5
        var $15=$error_addr; //@line 47 "testcapi_long.h"
        var $16=FUNCTION_TABLE[$15](__str16); //@line 47 "testcapi_long.h"
        $0=$16; //@line 47 "testcapi_long.h"
        __label__ = 82; break; //@line 47 "testcapi_long.h"
      case 7: // $bb6
        var $17=$pyresult; //@line 50 "testcapi_long.h"
        var $18=_PyLong_AsUnsignedLongLong($17); //@line 50 "testcapi_long.h"
        $uout=$18; //@line 50 "testcapi_long.h"
        var $19=$uout; //@line 51 "testcapi_long.h"
        var $20=($19)==-1; //@line 51 "testcapi_long.h"
        if ($20) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 51 "testcapi_long.h"
      case 8: // $bb7
        var $21=_PyErr_Occurred(); //@line 51 "testcapi_long.h"
        var $22=($21)!=0; //@line 51 "testcapi_long.h"
        if ($22) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 51 "testcapi_long.h"
      case 9: // $bb8
        var $23=$error_addr; //@line 52 "testcapi_long.h"
        var $24=FUNCTION_TABLE[$23](__str17); //@line 52 "testcapi_long.h"
        $0=$24; //@line 52 "testcapi_long.h"
        __label__ = 82; break; //@line 52 "testcapi_long.h"
      case 10: // $bb9
        var $25=$uout; //@line 54 "testcapi_long.h"
        var $26=$uin; //@line 54 "testcapi_long.h"
        var $27=($25)!=($26); //@line 54 "testcapi_long.h"
        if ($27) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 54 "testcapi_long.h"
      case 11: // $bb10
        var $28=$error_addr; //@line 55 "testcapi_long.h"
        var $29=FUNCTION_TABLE[$28](__str18); //@line 55 "testcapi_long.h"
        $0=$29; //@line 55 "testcapi_long.h"
        __label__ = 82; break; //@line 55 "testcapi_long.h"
      case 12: // $bb11
        var $30=$pyresult; //@line 57 "testcapi_long.h"
        var $31=$30; //@line 57 "testcapi_long.h"
        var $32=HEAP[$31]; //@line 57 "testcapi_long.h"
        var $33=($32) - 1; //@line 57 "testcapi_long.h"
        var $34=$pyresult; //@line 57 "testcapi_long.h"
        var $35=$34; //@line 57 "testcapi_long.h"
        HEAP[$35]=$33; //@line 57 "testcapi_long.h"
        var $36=$pyresult; //@line 57 "testcapi_long.h"
        var $37=$36; //@line 57 "testcapi_long.h"
        var $38=HEAP[$37]; //@line 57 "testcapi_long.h"
        var $39=($38)==0; //@line 57 "testcapi_long.h"
        if ($39) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 57 "testcapi_long.h"
      case 13: // $bb12
        var $40=$pyresult; //@line 57 "testcapi_long.h"
        var $41=$40+4; //@line 57 "testcapi_long.h"
        var $42=HEAP[$41]; //@line 57 "testcapi_long.h"
        var $43=$42+24; //@line 57 "testcapi_long.h"
        var $44=HEAP[$43]; //@line 57 "testcapi_long.h"
        var $45=$pyresult; //@line 57 "testcapi_long.h"
        FUNCTION_TABLE[$44]($45); //@line 57 "testcapi_long.h"
        __label__ = 14; break; //@line 57 "testcapi_long.h"
      case 14: // $bb13
        $pyresult=0; //@line 57 "testcapi_long.h"
        var $46=$uin; //@line 59 "testcapi_long.h"
        $in=$46; //@line 59 "testcapi_long.h"
        var $47=$in; //@line 60 "testcapi_long.h"
        var $48=_PyLong_FromLongLong($47); //@line 60 "testcapi_long.h"
        $pyresult=$48; //@line 60 "testcapi_long.h"
        var $49=($48)==0; //@line 61 "testcapi_long.h"
        if ($49) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 61 "testcapi_long.h"
      case 15: // $bb14
        var $50=$error_addr; //@line 62 "testcapi_long.h"
        var $51=FUNCTION_TABLE[$50](__str19); //@line 62 "testcapi_long.h"
        $0=$51; //@line 62 "testcapi_long.h"
        __label__ = 82; break; //@line 62 "testcapi_long.h"
      case 16: // $bb15
        var $52=$pyresult; //@line 65 "testcapi_long.h"
        var $53=_PyLong_AsLongLong($52); //@line 65 "testcapi_long.h"
        $out=$53; //@line 65 "testcapi_long.h"
        var $54=$out; //@line 66 "testcapi_long.h"
        var $55=($54)==-1; //@line 66 "testcapi_long.h"
        if ($55) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 66 "testcapi_long.h"
      case 17: // $bb16
        var $56=_PyErr_Occurred(); //@line 66 "testcapi_long.h"
        var $57=($56)!=0; //@line 66 "testcapi_long.h"
        if ($57) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 66 "testcapi_long.h"
      case 18: // $bb17
        var $58=$error_addr; //@line 67 "testcapi_long.h"
        var $59=FUNCTION_TABLE[$58](__str20); //@line 67 "testcapi_long.h"
        $0=$59; //@line 67 "testcapi_long.h"
        __label__ = 82; break; //@line 67 "testcapi_long.h"
      case 19: // $bb18
        var $60=$out; //@line 69 "testcapi_long.h"
        var $61=$in; //@line 69 "testcapi_long.h"
        var $62=($60)!=($61); //@line 69 "testcapi_long.h"
        if ($62) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 69 "testcapi_long.h"
      case 20: // $bb19
        var $63=$error_addr; //@line 70 "testcapi_long.h"
        var $64=FUNCTION_TABLE[$63](__str21); //@line 70 "testcapi_long.h"
        $0=$64; //@line 70 "testcapi_long.h"
        __label__ = 82; break; //@line 70 "testcapi_long.h"
      case 21: // $bb20
        var $65=$pyresult; //@line 72 "testcapi_long.h"
        var $66=$65; //@line 72 "testcapi_long.h"
        var $67=HEAP[$66]; //@line 72 "testcapi_long.h"
        var $68=($67) - 1; //@line 72 "testcapi_long.h"
        var $69=$pyresult; //@line 72 "testcapi_long.h"
        var $70=$69; //@line 72 "testcapi_long.h"
        HEAP[$70]=$68; //@line 72 "testcapi_long.h"
        var $71=$pyresult; //@line 72 "testcapi_long.h"
        var $72=$71; //@line 72 "testcapi_long.h"
        var $73=HEAP[$72]; //@line 72 "testcapi_long.h"
        var $74=($73)==0; //@line 72 "testcapi_long.h"
        if ($74) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 72 "testcapi_long.h"
      case 22: // $bb21
        var $75=$pyresult; //@line 72 "testcapi_long.h"
        var $76=$75+4; //@line 72 "testcapi_long.h"
        var $77=HEAP[$76]; //@line 72 "testcapi_long.h"
        var $78=$77+24; //@line 72 "testcapi_long.h"
        var $79=HEAP[$78]; //@line 72 "testcapi_long.h"
        var $80=$pyresult; //@line 72 "testcapi_long.h"
        FUNCTION_TABLE[$79]($80); //@line 72 "testcapi_long.h"
        __label__ = 23; break; //@line 72 "testcapi_long.h"
      case 23: // $bb22
        $pyresult=0; //@line 72 "testcapi_long.h"
        var $81=$j; //@line 31 "testcapi_long.h"
        var $82=($81) + 1; //@line 31 "testcapi_long.h"
        $j=$82; //@line 31 "testcapi_long.h"
        __lastLabel__ = 23; __label__ = 24; break; //@line 31 "testcapi_long.h"
      case 24: // $bb23
        var $83=__lastLabel__ == 23 ? $82 : (0);
        var $84=($83) <= 5; //@line 31 "testcapi_long.h"
        if ($84) { __label__ = 2; break; } else { __label__ = 25; break; } //@line 31 "testcapi_long.h"
      case 25: // $bb24
        var $85=$i; //@line 28 "testcapi_long.h"
        var $86=($85) + 1; //@line 28 "testcapi_long.h"
        $i=$86; //@line 28 "testcapi_long.h"
        var $87=$base; //@line 28 "testcapi_long.h"
        var $88=($87)*Math.pow(2,1); //@line 28 "testcapi_long.h"
        $base=$88; //@line 28 "testcapi_long.h"
        __label__ = 26; break; //@line 28 "testcapi_long.h"
      case 26: // $bb25
        var $89=$NBITS; //@line 27 "testcapi_long.h"
        var $90=($89) + 1; //@line 27 "testcapi_long.h"
        var $91=$i; //@line 27 "testcapi_long.h"
        var $92=($90) > ($91); //@line 27 "testcapi_long.h"
        if ($92) { __label__ = 1; break; } else { __label__ = 27; break; } //@line 27 "testcapi_long.h"
      case 27: // $bb26
        var $93=_PyLong_FromLong(1); //@line 85 "testcapi_long.h"
        $one=$93; //@line 85 "testcapi_long.h"
        var $94=$one; //@line 86 "testcapi_long.h"
        var $95=($94)==0; //@line 86 "testcapi_long.h"
        if ($95) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 86 "testcapi_long.h"
      case 28: // $bb29
        var $96=$error_addr; //@line 87 "testcapi_long.h"
        var $97=FUNCTION_TABLE[$96](__str22); //@line 87 "testcapi_long.h"
        $0=$97; //@line 87 "testcapi_long.h"
        __label__ = 82; break; //@line 87 "testcapi_long.h"
      case 29: // $bb30
        var $98=$one; //@line 91 "testcapi_long.h"
        var $99=_PyNumber_Negative($98); //@line 91 "testcapi_long.h"
        $x=$99; //@line 91 "testcapi_long.h"
        var $100=$x; //@line 92 "testcapi_long.h"
        var $101=($100)==0; //@line 92 "testcapi_long.h"
        if ($101) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 92 "testcapi_long.h"
      case 30: // $bb31
        var $102=$error_addr; //@line 93 "testcapi_long.h"
        var $103=FUNCTION_TABLE[$102](__str23); //@line 93 "testcapi_long.h"
        $0=$103; //@line 93 "testcapi_long.h"
        __label__ = 82; break; //@line 93 "testcapi_long.h"
      case 31: // $bb32
        var $104=$x; //@line 96 "testcapi_long.h"
        var $105=_PyLong_AsUnsignedLongLong($104); //@line 96 "testcapi_long.h"
        $uout28=$105; //@line 96 "testcapi_long.h"
        var $106=$uout28; //@line 97 "testcapi_long.h"
        var $107=($106)!=-1; //@line 97 "testcapi_long.h"
        if ($107) { __label__ = 33; break; } else { __label__ = 32; break; } //@line 97 "testcapi_long.h"
      case 32: // $bb33
        var $108=_PyErr_Occurred(); //@line 97 "testcapi_long.h"
        var $109=($108)==0; //@line 97 "testcapi_long.h"
        if ($109) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 97 "testcapi_long.h"
      case 33: // $bb34
        var $110=$error_addr; //@line 98 "testcapi_long.h"
        var $111=FUNCTION_TABLE[$110](__str24); //@line 98 "testcapi_long.h"
        $0=$111; //@line 98 "testcapi_long.h"
        __label__ = 82; break; //@line 98 "testcapi_long.h"
      case 34: // $bb35
        var $112=HEAP[_PyExc_OverflowError]; //@line 100 "testcapi_long.h"
        var $113=_PyErr_ExceptionMatches($112); //@line 100 "testcapi_long.h"
        var $114=($113)==0; //@line 100 "testcapi_long.h"
        if ($114) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 100 "testcapi_long.h"
      case 35: // $bb36
        var $115=$error_addr; //@line 101 "testcapi_long.h"
        var $116=FUNCTION_TABLE[$115](__str25); //@line 101 "testcapi_long.h"
        $0=$116; //@line 101 "testcapi_long.h"
        __label__ = 82; break; //@line 101 "testcapi_long.h"
      case 36: // $bb37
        _PyErr_Clear(); //@line 104 "testcapi_long.h"
        var $117=$x; //@line 105 "testcapi_long.h"
        var $118=$117; //@line 105 "testcapi_long.h"
        var $119=HEAP[$118]; //@line 105 "testcapi_long.h"
        var $120=($119) - 1; //@line 105 "testcapi_long.h"
        var $121=$x; //@line 105 "testcapi_long.h"
        var $122=$121; //@line 105 "testcapi_long.h"
        HEAP[$122]=$120; //@line 105 "testcapi_long.h"
        var $123=$x; //@line 105 "testcapi_long.h"
        var $124=$123; //@line 105 "testcapi_long.h"
        var $125=HEAP[$124]; //@line 105 "testcapi_long.h"
        var $126=($125)==0; //@line 105 "testcapi_long.h"
        if ($126) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 105 "testcapi_long.h"
      case 37: // $bb38
        var $127=$x; //@line 105 "testcapi_long.h"
        var $128=$127+4; //@line 105 "testcapi_long.h"
        var $129=HEAP[$128]; //@line 105 "testcapi_long.h"
        var $130=$129+24; //@line 105 "testcapi_long.h"
        var $131=HEAP[$130]; //@line 105 "testcapi_long.h"
        var $132=$x; //@line 105 "testcapi_long.h"
        FUNCTION_TABLE[$131]($132); //@line 105 "testcapi_long.h"
        __label__ = 38; break; //@line 105 "testcapi_long.h"
      case 38: // $bb39
        $x=0; //@line 105 "testcapi_long.h"
        var $133=$NBITS; //@line 108 "testcapi_long.h"
        var $134=_PyLong_FromLong($133); //@line 108 "testcapi_long.h"
        $y=$134; //@line 108 "testcapi_long.h"
        var $135=($134)==0; //@line 109 "testcapi_long.h"
        if ($135) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 109 "testcapi_long.h"
      case 39: // $bb40
        var $136=$error_addr; //@line 110 "testcapi_long.h"
        var $137=FUNCTION_TABLE[$136](__str22); //@line 110 "testcapi_long.h"
        $0=$137; //@line 110 "testcapi_long.h"
        __label__ = 82; break; //@line 110 "testcapi_long.h"
      case 40: // $bb41
        var $138=$one; //@line 113 "testcapi_long.h"
        var $139=$y; //@line 113 "testcapi_long.h"
        var $140=_PyNumber_Lshift($138, $139); //@line 113 "testcapi_long.h"
        $x=$140; //@line 113 "testcapi_long.h"
        var $141=$y; //@line 114 "testcapi_long.h"
        var $142=$141; //@line 114 "testcapi_long.h"
        var $143=HEAP[$142]; //@line 114 "testcapi_long.h"
        var $144=($143) - 1; //@line 114 "testcapi_long.h"
        var $145=$y; //@line 114 "testcapi_long.h"
        var $146=$145; //@line 114 "testcapi_long.h"
        HEAP[$146]=$144; //@line 114 "testcapi_long.h"
        var $147=$y; //@line 114 "testcapi_long.h"
        var $148=$147; //@line 114 "testcapi_long.h"
        var $149=HEAP[$148]; //@line 114 "testcapi_long.h"
        var $150=($149)==0; //@line 114 "testcapi_long.h"
        if ($150) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 114 "testcapi_long.h"
      case 41: // $bb42
        var $151=$y; //@line 114 "testcapi_long.h"
        var $152=$151+4; //@line 114 "testcapi_long.h"
        var $153=HEAP[$152]; //@line 114 "testcapi_long.h"
        var $154=$153+24; //@line 114 "testcapi_long.h"
        var $155=HEAP[$154]; //@line 114 "testcapi_long.h"
        var $156=$y; //@line 114 "testcapi_long.h"
        FUNCTION_TABLE[$155]($156); //@line 114 "testcapi_long.h"
        __label__ = 42; break; //@line 114 "testcapi_long.h"
      case 42: // $bb43
        $y=0; //@line 114 "testcapi_long.h"
        var $157=$x; //@line 115 "testcapi_long.h"
        var $158=($157)==0; //@line 115 "testcapi_long.h"
        if ($158) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 115 "testcapi_long.h"
      case 43: // $bb44
        var $159=$error_addr; //@line 116 "testcapi_long.h"
        var $160=FUNCTION_TABLE[$159](__str26); //@line 116 "testcapi_long.h"
        $0=$160; //@line 116 "testcapi_long.h"
        __label__ = 82; break; //@line 116 "testcapi_long.h"
      case 44: // $bb45
        var $161=$x; //@line 119 "testcapi_long.h"
        var $162=_PyLong_AsUnsignedLongLong($161); //@line 119 "testcapi_long.h"
        $uout28=$162; //@line 119 "testcapi_long.h"
        var $163=$uout28; //@line 120 "testcapi_long.h"
        var $164=($163)!=-1; //@line 120 "testcapi_long.h"
        if ($164) { __label__ = 46; break; } else { __label__ = 45; break; } //@line 120 "testcapi_long.h"
      case 45: // $bb46
        var $165=_PyErr_Occurred(); //@line 120 "testcapi_long.h"
        var $166=($165)==0; //@line 120 "testcapi_long.h"
        if ($166) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 120 "testcapi_long.h"
      case 46: // $bb47
        var $167=$error_addr; //@line 121 "testcapi_long.h"
        var $168=FUNCTION_TABLE[$167](__str27); //@line 121 "testcapi_long.h"
        $0=$168; //@line 121 "testcapi_long.h"
        __label__ = 82; break; //@line 121 "testcapi_long.h"
      case 47: // $bb48
        var $169=HEAP[_PyExc_OverflowError]; //@line 124 "testcapi_long.h"
        var $170=_PyErr_ExceptionMatches($169); //@line 124 "testcapi_long.h"
        var $171=($170)==0; //@line 124 "testcapi_long.h"
        if ($171) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 124 "testcapi_long.h"
      case 48: // $bb49
        var $172=$error_addr; //@line 125 "testcapi_long.h"
        var $173=FUNCTION_TABLE[$172](__str28); //@line 125 "testcapi_long.h"
        $0=$173; //@line 125 "testcapi_long.h"
        __label__ = 82; break; //@line 125 "testcapi_long.h"
      case 49: // $bb50
        _PyErr_Clear(); //@line 128 "testcapi_long.h"
        var $174=$x; //@line 132 "testcapi_long.h"
        var $175=$one; //@line 132 "testcapi_long.h"
        var $176=_PyNumber_Rshift($174, $175); //@line 132 "testcapi_long.h"
        $y=$176; //@line 132 "testcapi_long.h"
        var $177=$x; //@line 133 "testcapi_long.h"
        var $178=$177; //@line 133 "testcapi_long.h"
        var $179=HEAP[$178]; //@line 133 "testcapi_long.h"
        var $180=($179) - 1; //@line 133 "testcapi_long.h"
        var $181=$x; //@line 133 "testcapi_long.h"
        var $182=$181; //@line 133 "testcapi_long.h"
        HEAP[$182]=$180; //@line 133 "testcapi_long.h"
        var $183=$x; //@line 133 "testcapi_long.h"
        var $184=$183; //@line 133 "testcapi_long.h"
        var $185=HEAP[$184]; //@line 133 "testcapi_long.h"
        var $186=($185)==0; //@line 133 "testcapi_long.h"
        if ($186) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 133 "testcapi_long.h"
      case 50: // $bb51
        var $187=$x; //@line 133 "testcapi_long.h"
        var $188=$187+4; //@line 133 "testcapi_long.h"
        var $189=HEAP[$188]; //@line 133 "testcapi_long.h"
        var $190=$189+24; //@line 133 "testcapi_long.h"
        var $191=HEAP[$190]; //@line 133 "testcapi_long.h"
        var $192=$x; //@line 133 "testcapi_long.h"
        FUNCTION_TABLE[$191]($192); //@line 133 "testcapi_long.h"
        __label__ = 51; break; //@line 133 "testcapi_long.h"
      case 51: // $bb52
        $x=0; //@line 133 "testcapi_long.h"
        var $193=$y; //@line 134 "testcapi_long.h"
        var $194=($193)==0; //@line 134 "testcapi_long.h"
        if ($194) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 134 "testcapi_long.h"
      case 52: // $bb53
        var $195=$error_addr; //@line 135 "testcapi_long.h"
        var $196=FUNCTION_TABLE[$195](__str29); //@line 135 "testcapi_long.h"
        $0=$196; //@line 135 "testcapi_long.h"
        __label__ = 82; break; //@line 135 "testcapi_long.h"
      case 53: // $bb54
        var $197=$y; //@line 138 "testcapi_long.h"
        var $198=_PyLong_AsLongLong($197); //@line 138 "testcapi_long.h"
        $out27=$198; //@line 138 "testcapi_long.h"
        var $199=$out27; //@line 139 "testcapi_long.h"
        var $200=($199)!=-1; //@line 139 "testcapi_long.h"
        if ($200) { __label__ = 55; break; } else { __label__ = 54; break; } //@line 139 "testcapi_long.h"
      case 54: // $bb55
        var $201=_PyErr_Occurred(); //@line 139 "testcapi_long.h"
        var $202=($201)==0; //@line 139 "testcapi_long.h"
        if ($202) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 139 "testcapi_long.h"
      case 55: // $bb56
        var $203=$error_addr; //@line 140 "testcapi_long.h"
        var $204=FUNCTION_TABLE[$203](__str30); //@line 140 "testcapi_long.h"
        $0=$204; //@line 140 "testcapi_long.h"
        __label__ = 82; break; //@line 140 "testcapi_long.h"
      case 56: // $bb57
        var $205=HEAP[_PyExc_OverflowError]; //@line 143 "testcapi_long.h"
        var $206=_PyErr_ExceptionMatches($205); //@line 143 "testcapi_long.h"
        var $207=($206)==0; //@line 143 "testcapi_long.h"
        if ($207) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 143 "testcapi_long.h"
      case 57: // $bb58
        var $208=$error_addr; //@line 144 "testcapi_long.h"
        var $209=FUNCTION_TABLE[$208](__str31); //@line 144 "testcapi_long.h"
        $0=$209; //@line 144 "testcapi_long.h"
        __label__ = 82; break; //@line 144 "testcapi_long.h"
      case 58: // $bb59
        _PyErr_Clear(); //@line 147 "testcapi_long.h"
        var $210=$y; //@line 151 "testcapi_long.h"
        var $211=_PyNumber_Negative($210); //@line 151 "testcapi_long.h"
        $x=$211; //@line 151 "testcapi_long.h"
        var $212=$y; //@line 152 "testcapi_long.h"
        var $213=$212; //@line 152 "testcapi_long.h"
        var $214=HEAP[$213]; //@line 152 "testcapi_long.h"
        var $215=($214) - 1; //@line 152 "testcapi_long.h"
        var $216=$y; //@line 152 "testcapi_long.h"
        var $217=$216; //@line 152 "testcapi_long.h"
        HEAP[$217]=$215; //@line 152 "testcapi_long.h"
        var $218=$y; //@line 152 "testcapi_long.h"
        var $219=$218; //@line 152 "testcapi_long.h"
        var $220=HEAP[$219]; //@line 152 "testcapi_long.h"
        var $221=($220)==0; //@line 152 "testcapi_long.h"
        if ($221) { __label__ = 59; break; } else { __label__ = 60; break; } //@line 152 "testcapi_long.h"
      case 59: // $bb60
        var $222=$y; //@line 152 "testcapi_long.h"
        var $223=$222+4; //@line 152 "testcapi_long.h"
        var $224=HEAP[$223]; //@line 152 "testcapi_long.h"
        var $225=$224+24; //@line 152 "testcapi_long.h"
        var $226=HEAP[$225]; //@line 152 "testcapi_long.h"
        var $227=$y; //@line 152 "testcapi_long.h"
        FUNCTION_TABLE[$226]($227); //@line 152 "testcapi_long.h"
        __label__ = 60; break; //@line 152 "testcapi_long.h"
      case 60: // $bb61
        $y=0; //@line 152 "testcapi_long.h"
        var $228=$x; //@line 153 "testcapi_long.h"
        var $229=($228)==0; //@line 153 "testcapi_long.h"
        if ($229) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 153 "testcapi_long.h"
      case 61: // $bb62
        var $230=$error_addr; //@line 154 "testcapi_long.h"
        var $231=FUNCTION_TABLE[$230](__str23); //@line 154 "testcapi_long.h"
        $0=$231; //@line 154 "testcapi_long.h"
        __label__ = 82; break; //@line 154 "testcapi_long.h"
      case 62: // $bb63
        var $232=$x; //@line 157 "testcapi_long.h"
        var $233=$one; //@line 157 "testcapi_long.h"
        var $234=_PyNumber_Subtract($232, $233); //@line 157 "testcapi_long.h"
        $y=$234; //@line 157 "testcapi_long.h"
        var $235=$x; //@line 158 "testcapi_long.h"
        var $236=$235; //@line 158 "testcapi_long.h"
        var $237=HEAP[$236]; //@line 158 "testcapi_long.h"
        var $238=($237) - 1; //@line 158 "testcapi_long.h"
        var $239=$x; //@line 158 "testcapi_long.h"
        var $240=$239; //@line 158 "testcapi_long.h"
        HEAP[$240]=$238; //@line 158 "testcapi_long.h"
        var $241=$x; //@line 158 "testcapi_long.h"
        var $242=$241; //@line 158 "testcapi_long.h"
        var $243=HEAP[$242]; //@line 158 "testcapi_long.h"
        var $244=($243)==0; //@line 158 "testcapi_long.h"
        if ($244) { __label__ = 63; break; } else { __label__ = 64; break; } //@line 158 "testcapi_long.h"
      case 63: // $bb64
        var $245=$x; //@line 158 "testcapi_long.h"
        var $246=$245+4; //@line 158 "testcapi_long.h"
        var $247=HEAP[$246]; //@line 158 "testcapi_long.h"
        var $248=$247+24; //@line 158 "testcapi_long.h"
        var $249=HEAP[$248]; //@line 158 "testcapi_long.h"
        var $250=$x; //@line 158 "testcapi_long.h"
        FUNCTION_TABLE[$249]($250); //@line 158 "testcapi_long.h"
        __label__ = 64; break; //@line 158 "testcapi_long.h"
      case 64: // $bb65
        $x=0; //@line 158 "testcapi_long.h"
        var $251=$y; //@line 159 "testcapi_long.h"
        var $252=($251)==0; //@line 159 "testcapi_long.h"
        if ($252) { __label__ = 65; break; } else { __label__ = 66; break; } //@line 159 "testcapi_long.h"
      case 65: // $bb66
        var $253=$error_addr; //@line 160 "testcapi_long.h"
        var $254=FUNCTION_TABLE[$253](__str32); //@line 160 "testcapi_long.h"
        $0=$254; //@line 160 "testcapi_long.h"
        __label__ = 82; break; //@line 160 "testcapi_long.h"
      case 66: // $bb67
        var $255=$y; //@line 163 "testcapi_long.h"
        var $256=_PyLong_AsLongLong($255); //@line 163 "testcapi_long.h"
        $out27=$256; //@line 163 "testcapi_long.h"
        var $257=$out27; //@line 164 "testcapi_long.h"
        var $258=($257)!=-1; //@line 164 "testcapi_long.h"
        if ($258) { __label__ = 68; break; } else { __label__ = 67; break; } //@line 164 "testcapi_long.h"
      case 67: // $bb68
        var $259=_PyErr_Occurred(); //@line 164 "testcapi_long.h"
        var $260=($259)==0; //@line 164 "testcapi_long.h"
        if ($260) { __label__ = 68; break; } else { __label__ = 69; break; } //@line 164 "testcapi_long.h"
      case 68: // $bb69
        var $261=$error_addr; //@line 165 "testcapi_long.h"
        var $262=FUNCTION_TABLE[$261](__str33); //@line 165 "testcapi_long.h"
        $0=$262; //@line 165 "testcapi_long.h"
        __label__ = 82; break; //@line 165 "testcapi_long.h"
      case 69: // $bb70
        var $263=HEAP[_PyExc_OverflowError]; //@line 168 "testcapi_long.h"
        var $264=_PyErr_ExceptionMatches($263); //@line 168 "testcapi_long.h"
        var $265=($264)==0; //@line 168 "testcapi_long.h"
        if ($265) { __label__ = 70; break; } else { __label__ = 71; break; } //@line 168 "testcapi_long.h"
      case 70: // $bb71
        var $266=$error_addr; //@line 169 "testcapi_long.h"
        var $267=FUNCTION_TABLE[$266](__str34); //@line 169 "testcapi_long.h"
        $0=$267; //@line 169 "testcapi_long.h"
        __label__ = 82; break; //@line 169 "testcapi_long.h"
      case 71: // $bb72
        _PyErr_Clear(); //@line 172 "testcapi_long.h"
        var $268=$y; //@line 173 "testcapi_long.h"
        var $269=$268; //@line 173 "testcapi_long.h"
        var $270=HEAP[$269]; //@line 173 "testcapi_long.h"
        var $271=($270) - 1; //@line 173 "testcapi_long.h"
        var $272=$y; //@line 173 "testcapi_long.h"
        var $273=$272; //@line 173 "testcapi_long.h"
        HEAP[$273]=$271; //@line 173 "testcapi_long.h"
        var $274=$y; //@line 173 "testcapi_long.h"
        var $275=$274; //@line 173 "testcapi_long.h"
        var $276=HEAP[$275]; //@line 173 "testcapi_long.h"
        var $277=($276)==0; //@line 173 "testcapi_long.h"
        if ($277) { __label__ = 72; break; } else { __label__ = 73; break; } //@line 173 "testcapi_long.h"
      case 72: // $bb73
        var $278=$y; //@line 173 "testcapi_long.h"
        var $279=$278+4; //@line 173 "testcapi_long.h"
        var $280=HEAP[$279]; //@line 173 "testcapi_long.h"
        var $281=$280+24; //@line 173 "testcapi_long.h"
        var $282=HEAP[$281]; //@line 173 "testcapi_long.h"
        var $283=$y; //@line 173 "testcapi_long.h"
        FUNCTION_TABLE[$282]($283); //@line 173 "testcapi_long.h"
        __label__ = 73; break; //@line 173 "testcapi_long.h"
      case 73: // $bb74
        $y=0; //@line 173 "testcapi_long.h"
        var $284=$x; //@line 175 "testcapi_long.h"
        var $285=($284)!=0; //@line 175 "testcapi_long.h"
        if ($285) { __label__ = 74; break; } else { __label__ = 79; break; } //@line 175 "testcapi_long.h"
      case 74: // $bb75
        var $286=$x; //@line 175 "testcapi_long.h"
        var $287=$286; //@line 175 "testcapi_long.h"
        var $288=HEAP[$287]; //@line 175 "testcapi_long.h"
        var $289=($288) - 1; //@line 175 "testcapi_long.h"
        var $290=$x; //@line 175 "testcapi_long.h"
        var $291=$290; //@line 175 "testcapi_long.h"
        HEAP[$291]=$289; //@line 175 "testcapi_long.h"
        var $292=$x; //@line 175 "testcapi_long.h"
        var $293=$292; //@line 175 "testcapi_long.h"
        var $294=HEAP[$293]; //@line 175 "testcapi_long.h"
        var $295=($294)==0; //@line 175 "testcapi_long.h"
        if ($295) { __label__ = 75; break; } else { __label__ = 76; break; } //@line 175 "testcapi_long.h"
      case 75: // $bb76
        var $296=$x; //@line 175 "testcapi_long.h"
        var $297=$296+4; //@line 175 "testcapi_long.h"
        var $298=HEAP[$297]; //@line 175 "testcapi_long.h"
        var $299=$298+24; //@line 175 "testcapi_long.h"
        var $300=HEAP[$299]; //@line 175 "testcapi_long.h"
        var $301=$x; //@line 175 "testcapi_long.h"
        FUNCTION_TABLE[$300]($301); //@line 175 "testcapi_long.h"
        __label__ = 76; break; //@line 175 "testcapi_long.h"
      case 76: // $bb77
        var $_pr=$y;
        var $302=($_pr)!=0; //@line 176 "testcapi_long.h"
        if ($302) { __label__ = 77; break; } else { __label__ = 79; break; } //@line 176 "testcapi_long.h"
      case 77: // $bb78
        var $303=$y; //@line 176 "testcapi_long.h"
        var $304=$303; //@line 176 "testcapi_long.h"
        var $305=HEAP[$304]; //@line 176 "testcapi_long.h"
        var $306=($305) - 1; //@line 176 "testcapi_long.h"
        var $307=$y; //@line 176 "testcapi_long.h"
        var $308=$307; //@line 176 "testcapi_long.h"
        HEAP[$308]=$306; //@line 176 "testcapi_long.h"
        var $309=$y; //@line 176 "testcapi_long.h"
        var $310=$309; //@line 176 "testcapi_long.h"
        var $311=HEAP[$310]; //@line 176 "testcapi_long.h"
        var $312=($311)==0; //@line 176 "testcapi_long.h"
        if ($312) { __label__ = 78; break; } else { __label__ = 79; break; } //@line 176 "testcapi_long.h"
      case 78: // $bb79
        var $313=$y; //@line 176 "testcapi_long.h"
        var $314=$313+4; //@line 176 "testcapi_long.h"
        var $315=HEAP[$314]; //@line 176 "testcapi_long.h"
        var $316=$315+24; //@line 176 "testcapi_long.h"
        var $317=HEAP[$316]; //@line 176 "testcapi_long.h"
        var $318=$y; //@line 176 "testcapi_long.h"
        FUNCTION_TABLE[$317]($318); //@line 176 "testcapi_long.h"
        __label__ = 79; break; //@line 176 "testcapi_long.h"
      case 79: // $bb80
        var $319=$one; //@line 177 "testcapi_long.h"
        var $320=$319; //@line 177 "testcapi_long.h"
        var $321=HEAP[$320]; //@line 177 "testcapi_long.h"
        var $322=($321) - 1; //@line 177 "testcapi_long.h"
        var $323=$one; //@line 177 "testcapi_long.h"
        var $324=$323; //@line 177 "testcapi_long.h"
        HEAP[$324]=$322; //@line 177 "testcapi_long.h"
        var $325=$one; //@line 177 "testcapi_long.h"
        var $326=$325; //@line 177 "testcapi_long.h"
        var $327=HEAP[$326]; //@line 177 "testcapi_long.h"
        var $328=($327)==0; //@line 177 "testcapi_long.h"
        if ($328) { __label__ = 80; break; } else { __label__ = 81; break; } //@line 177 "testcapi_long.h"
      case 80: // $bb81
        var $329=$one; //@line 177 "testcapi_long.h"
        var $330=$329+4; //@line 177 "testcapi_long.h"
        var $331=HEAP[$330]; //@line 177 "testcapi_long.h"
        var $332=$331+24; //@line 177 "testcapi_long.h"
        var $333=HEAP[$332]; //@line 177 "testcapi_long.h"
        var $334=$one; //@line 177 "testcapi_long.h"
        FUNCTION_TABLE[$333]($334); //@line 177 "testcapi_long.h"
        __label__ = 81; break; //@line 177 "testcapi_long.h"
      case 81: // $bb82
        var $335=HEAP[__Py_NoneStruct]; //@line 180 "testcapi_long.h"
        var $336=($335) + 1; //@line 180 "testcapi_long.h"
        HEAP[__Py_NoneStruct]=$336; //@line 180 "testcapi_long.h"
        $0=__Py_NoneStruct; //@line 181 "testcapi_long.h"
        __label__ = 82; break; //@line 181 "testcapi_long.h"
      case 82: // $bb83
        var $337=$0; //@line 47 "testcapi_long.h"
        $retval=$337; //@line 47 "testcapi_long.h"
        var $retval84=$retval; //@line 47 "testcapi_long.h"
        ;
        return $retval84; //@line 47 "testcapi_long.h"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_longlong_api($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=_test_longlong_api_inner(); //@line 445 "_testcapimodule.c"
    $0=$1; //@line 445 "_testcapimodule.c"
    var $2=$0; //@line 445 "_testcapimodule.c"
    $retval=$2; //@line 445 "_testcapimodule.c"
    var $retval1=$retval; //@line 445 "_testcapimodule.c"
    ;
    return $retval1; //@line 445 "_testcapimodule.c"
  }
  

  function _test_long_and_overflow($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $num;
        var $one;
        var $temp;
        var $value;
        var $overflow=__stackBase__;
        $self_addr=$self;
        var $1=_PyLong_FromString(__str36, 0, 16); //@line 469 "_testcapimodule.c"
        $num=$1; //@line 469 "_testcapimodule.c"
        var $2=$num; //@line 470 "_testcapimodule.c"
        var $3=($2)==0; //@line 470 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 470 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 471 "_testcapimodule.c"
        __label__ = 113; break; //@line 471 "_testcapimodule.c"
      case 2: // $bb1
        HEAP[$overflow]=1234; //@line 472 "_testcapimodule.c"
        var $4=$num; //@line 473 "_testcapimodule.c"
        var $5=_PyLong_AsLongAndOverflow($4, $overflow); //@line 473 "_testcapimodule.c"
        $value=$5; //@line 473 "_testcapimodule.c"
        var $6=$num; //@line 474 "_testcapimodule.c"
        var $7=$6; //@line 474 "_testcapimodule.c"
        var $8=HEAP[$7]; //@line 474 "_testcapimodule.c"
        var $9=($8) - 1; //@line 474 "_testcapimodule.c"
        var $10=$num; //@line 474 "_testcapimodule.c"
        var $11=$10; //@line 474 "_testcapimodule.c"
        HEAP[$11]=$9; //@line 474 "_testcapimodule.c"
        var $12=$num; //@line 474 "_testcapimodule.c"
        var $13=$12; //@line 474 "_testcapimodule.c"
        var $14=HEAP[$13]; //@line 474 "_testcapimodule.c"
        var $15=($14)==0; //@line 474 "_testcapimodule.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 474 "_testcapimodule.c"
      case 3: // $bb2
        var $16=$num; //@line 474 "_testcapimodule.c"
        var $17=$16+4; //@line 474 "_testcapimodule.c"
        var $18=HEAP[$17]; //@line 474 "_testcapimodule.c"
        var $19=$18+24; //@line 474 "_testcapimodule.c"
        var $20=HEAP[$19]; //@line 474 "_testcapimodule.c"
        var $21=$num; //@line 474 "_testcapimodule.c"
        FUNCTION_TABLE[$20]($21); //@line 474 "_testcapimodule.c"
        __label__ = 4; break; //@line 474 "_testcapimodule.c"
      case 4: // $bb3
        var $22=$value; //@line 475 "_testcapimodule.c"
        var $23=($22)==-1; //@line 475 "_testcapimodule.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 475 "_testcapimodule.c"
      case 5: // $bb4
        var $24=_PyErr_Occurred(); //@line 475 "_testcapimodule.c"
        var $25=($24)!=0; //@line 475 "_testcapimodule.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 475 "_testcapimodule.c"
      case 6: // $bb5
        $0=0; //@line 476 "_testcapimodule.c"
        __label__ = 113; break; //@line 476 "_testcapimodule.c"
      case 7: // $bb6
        var $_pr=$value;
        var $26=($_pr)!=-1; //@line 477 "_testcapimodule.c"
        if ($26) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 477 "_testcapimodule.c"
      case 8: // $bb7
        var $27=_raiseTestError(__str37, __str38); //@line 478 "_testcapimodule.c"
        $0=$27; //@line 478 "_testcapimodule.c"
        __label__ = 113; break; //@line 478 "_testcapimodule.c"
      case 9: // $bb8
        var $28=HEAP[$overflow]; //@line 480 "_testcapimodule.c"
        var $29=($28)!=1; //@line 480 "_testcapimodule.c"
        if ($29) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 480 "_testcapimodule.c"
      case 10: // $bb9
        var $30=_raiseTestError(__str37, __str39); //@line 481 "_testcapimodule.c"
        $0=$30; //@line 481 "_testcapimodule.c"
        __label__ = 113; break; //@line 481 "_testcapimodule.c"
      case 11: // $bb10
        var $31=_PyLong_FromLong(2147483647); //@line 485 "_testcapimodule.c"
        $num=$31; //@line 485 "_testcapimodule.c"
        var $32=$num; //@line 486 "_testcapimodule.c"
        var $33=($32)==0; //@line 486 "_testcapimodule.c"
        if ($33) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 486 "_testcapimodule.c"
      case 12: // $bb11
        $0=0; //@line 487 "_testcapimodule.c"
        __label__ = 113; break; //@line 487 "_testcapimodule.c"
      case 13: // $bb12
        var $34=_PyLong_FromLong(1); //@line 488 "_testcapimodule.c"
        $one=$34; //@line 488 "_testcapimodule.c"
        var $35=$one; //@line 489 "_testcapimodule.c"
        var $36=($35)==0; //@line 489 "_testcapimodule.c"
        var $37=$num; //@line 490 "_testcapimodule.c"
        if ($36) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 489 "_testcapimodule.c"
      case 14: // $bb13
        var $38=$37; //@line 490 "_testcapimodule.c"
        var $39=HEAP[$38]; //@line 490 "_testcapimodule.c"
        var $40=($39) - 1; //@line 490 "_testcapimodule.c"
        var $41=$num; //@line 490 "_testcapimodule.c"
        var $42=$41; //@line 490 "_testcapimodule.c"
        HEAP[$42]=$40; //@line 490 "_testcapimodule.c"
        var $43=$num; //@line 490 "_testcapimodule.c"
        var $44=$43; //@line 490 "_testcapimodule.c"
        var $45=HEAP[$44]; //@line 490 "_testcapimodule.c"
        var $46=($45)==0; //@line 490 "_testcapimodule.c"
        if ($46) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 490 "_testcapimodule.c"
      case 15: // $bb14
        var $47=$num; //@line 490 "_testcapimodule.c"
        var $48=$47+4; //@line 490 "_testcapimodule.c"
        var $49=HEAP[$48]; //@line 490 "_testcapimodule.c"
        var $50=$49+24; //@line 490 "_testcapimodule.c"
        var $51=HEAP[$50]; //@line 490 "_testcapimodule.c"
        var $52=$num; //@line 490 "_testcapimodule.c"
        FUNCTION_TABLE[$51]($52); //@line 490 "_testcapimodule.c"
        __label__ = 16; break; //@line 490 "_testcapimodule.c"
      case 16: // $bb15
        $0=0; //@line 491 "_testcapimodule.c"
        __label__ = 113; break; //@line 491 "_testcapimodule.c"
      case 17: // $bb16
        var $53=$one; //@line 493 "_testcapimodule.c"
        var $54=_PyNumber_Add($37, $53); //@line 493 "_testcapimodule.c"
        $temp=$54; //@line 493 "_testcapimodule.c"
        var $55=$one; //@line 494 "_testcapimodule.c"
        var $56=$55; //@line 494 "_testcapimodule.c"
        var $57=HEAP[$56]; //@line 494 "_testcapimodule.c"
        var $58=($57) - 1; //@line 494 "_testcapimodule.c"
        var $59=$one; //@line 494 "_testcapimodule.c"
        var $60=$59; //@line 494 "_testcapimodule.c"
        HEAP[$60]=$58; //@line 494 "_testcapimodule.c"
        var $61=$one; //@line 494 "_testcapimodule.c"
        var $62=$61; //@line 494 "_testcapimodule.c"
        var $63=HEAP[$62]; //@line 494 "_testcapimodule.c"
        var $64=($63)==0; //@line 494 "_testcapimodule.c"
        if ($64) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 494 "_testcapimodule.c"
      case 18: // $bb17
        var $65=$one; //@line 494 "_testcapimodule.c"
        var $66=$65+4; //@line 494 "_testcapimodule.c"
        var $67=HEAP[$66]; //@line 494 "_testcapimodule.c"
        var $68=$67+24; //@line 494 "_testcapimodule.c"
        var $69=HEAP[$68]; //@line 494 "_testcapimodule.c"
        var $70=$one; //@line 494 "_testcapimodule.c"
        FUNCTION_TABLE[$69]($70); //@line 494 "_testcapimodule.c"
        __label__ = 19; break; //@line 494 "_testcapimodule.c"
      case 19: // $bb18
        var $71=$num; //@line 495 "_testcapimodule.c"
        var $72=$71; //@line 495 "_testcapimodule.c"
        var $73=HEAP[$72]; //@line 495 "_testcapimodule.c"
        var $74=($73) - 1; //@line 495 "_testcapimodule.c"
        var $75=$num; //@line 495 "_testcapimodule.c"
        var $76=$75; //@line 495 "_testcapimodule.c"
        HEAP[$76]=$74; //@line 495 "_testcapimodule.c"
        var $77=$num; //@line 495 "_testcapimodule.c"
        var $78=$77; //@line 495 "_testcapimodule.c"
        var $79=HEAP[$78]; //@line 495 "_testcapimodule.c"
        var $80=($79)==0; //@line 495 "_testcapimodule.c"
        if ($80) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 495 "_testcapimodule.c"
      case 20: // $bb19
        var $81=$num; //@line 495 "_testcapimodule.c"
        var $82=$81+4; //@line 495 "_testcapimodule.c"
        var $83=HEAP[$82]; //@line 495 "_testcapimodule.c"
        var $84=$83+24; //@line 495 "_testcapimodule.c"
        var $85=HEAP[$84]; //@line 495 "_testcapimodule.c"
        var $86=$num; //@line 495 "_testcapimodule.c"
        FUNCTION_TABLE[$85]($86); //@line 495 "_testcapimodule.c"
        __label__ = 21; break; //@line 495 "_testcapimodule.c"
      case 21: // $bb20
        var $87=$temp; //@line 496 "_testcapimodule.c"
        $num=$87; //@line 496 "_testcapimodule.c"
        var $88=($87)==0; //@line 497 "_testcapimodule.c"
        if ($88) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 497 "_testcapimodule.c"
      case 22: // $bb21
        $0=0; //@line 498 "_testcapimodule.c"
        __label__ = 113; break; //@line 498 "_testcapimodule.c"
      case 23: // $bb22
        HEAP[$overflow]=0; //@line 499 "_testcapimodule.c"
        var $89=$num; //@line 500 "_testcapimodule.c"
        var $90=_PyLong_AsLongAndOverflow($89, $overflow); //@line 500 "_testcapimodule.c"
        $value=$90; //@line 500 "_testcapimodule.c"
        var $91=$num; //@line 501 "_testcapimodule.c"
        var $92=$91; //@line 501 "_testcapimodule.c"
        var $93=HEAP[$92]; //@line 501 "_testcapimodule.c"
        var $94=($93) - 1; //@line 501 "_testcapimodule.c"
        var $95=$num; //@line 501 "_testcapimodule.c"
        var $96=$95; //@line 501 "_testcapimodule.c"
        HEAP[$96]=$94; //@line 501 "_testcapimodule.c"
        var $97=$num; //@line 501 "_testcapimodule.c"
        var $98=$97; //@line 501 "_testcapimodule.c"
        var $99=HEAP[$98]; //@line 501 "_testcapimodule.c"
        var $100=($99)==0; //@line 501 "_testcapimodule.c"
        if ($100) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 501 "_testcapimodule.c"
      case 24: // $bb23
        var $101=$num; //@line 501 "_testcapimodule.c"
        var $102=$101+4; //@line 501 "_testcapimodule.c"
        var $103=HEAP[$102]; //@line 501 "_testcapimodule.c"
        var $104=$103+24; //@line 501 "_testcapimodule.c"
        var $105=HEAP[$104]; //@line 501 "_testcapimodule.c"
        var $106=$num; //@line 501 "_testcapimodule.c"
        FUNCTION_TABLE[$105]($106); //@line 501 "_testcapimodule.c"
        __label__ = 25; break; //@line 501 "_testcapimodule.c"
      case 25: // $bb24
        var $107=$value; //@line 502 "_testcapimodule.c"
        var $108=($107)==-1; //@line 502 "_testcapimodule.c"
        if ($108) { __label__ = 26; break; } else { __label__ = 29; break; } //@line 502 "_testcapimodule.c"
      case 26: // $bb25
        var $109=_PyErr_Occurred(); //@line 502 "_testcapimodule.c"
        var $110=($109)!=0; //@line 502 "_testcapimodule.c"
        if ($110) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 502 "_testcapimodule.c"
      case 27: // $bb26
        $0=0; //@line 503 "_testcapimodule.c"
        __label__ = 113; break; //@line 503 "_testcapimodule.c"
      case 28: // $bb27
        var $_pr1=$value;
        var $111=($_pr1)!=-1; //@line 504 "_testcapimodule.c"
        if ($111) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 504 "_testcapimodule.c"
      case 29: // $bb28
        var $112=_raiseTestError(__str37, __str38); //@line 505 "_testcapimodule.c"
        $0=$112; //@line 505 "_testcapimodule.c"
        __label__ = 113; break; //@line 505 "_testcapimodule.c"
      case 30: // $bb29
        var $113=HEAP[$overflow]; //@line 507 "_testcapimodule.c"
        var $114=($113)!=1; //@line 507 "_testcapimodule.c"
        if ($114) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 507 "_testcapimodule.c"
      case 31: // $bb30
        var $115=_raiseTestError(__str37, __str39); //@line 508 "_testcapimodule.c"
        $0=$115; //@line 508 "_testcapimodule.c"
        __label__ = 113; break; //@line 508 "_testcapimodule.c"
      case 32: // $bb31
        var $116=_PyLong_FromString(__str40, 0, 16); //@line 513 "_testcapimodule.c"
        $num=$116; //@line 513 "_testcapimodule.c"
        var $117=$num; //@line 514 "_testcapimodule.c"
        var $118=($117)==0; //@line 514 "_testcapimodule.c"
        if ($118) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 514 "_testcapimodule.c"
      case 33: // $bb32
        $0=0; //@line 515 "_testcapimodule.c"
        __label__ = 113; break; //@line 515 "_testcapimodule.c"
      case 34: // $bb33
        HEAP[$overflow]=1234; //@line 516 "_testcapimodule.c"
        var $119=$num; //@line 517 "_testcapimodule.c"
        var $120=_PyLong_AsLongAndOverflow($119, $overflow); //@line 517 "_testcapimodule.c"
        $value=$120; //@line 517 "_testcapimodule.c"
        var $121=$num; //@line 518 "_testcapimodule.c"
        var $122=$121; //@line 518 "_testcapimodule.c"
        var $123=HEAP[$122]; //@line 518 "_testcapimodule.c"
        var $124=($123) - 1; //@line 518 "_testcapimodule.c"
        var $125=$num; //@line 518 "_testcapimodule.c"
        var $126=$125; //@line 518 "_testcapimodule.c"
        HEAP[$126]=$124; //@line 518 "_testcapimodule.c"
        var $127=$num; //@line 518 "_testcapimodule.c"
        var $128=$127; //@line 518 "_testcapimodule.c"
        var $129=HEAP[$128]; //@line 518 "_testcapimodule.c"
        var $130=($129)==0; //@line 518 "_testcapimodule.c"
        if ($130) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 518 "_testcapimodule.c"
      case 35: // $bb34
        var $131=$num; //@line 518 "_testcapimodule.c"
        var $132=$131+4; //@line 518 "_testcapimodule.c"
        var $133=HEAP[$132]; //@line 518 "_testcapimodule.c"
        var $134=$133+24; //@line 518 "_testcapimodule.c"
        var $135=HEAP[$134]; //@line 518 "_testcapimodule.c"
        var $136=$num; //@line 518 "_testcapimodule.c"
        FUNCTION_TABLE[$135]($136); //@line 518 "_testcapimodule.c"
        __label__ = 36; break; //@line 518 "_testcapimodule.c"
      case 36: // $bb35
        var $137=$value; //@line 519 "_testcapimodule.c"
        var $138=($137)==-1; //@line 519 "_testcapimodule.c"
        if ($138) { __label__ = 37; break; } else { __label__ = 40; break; } //@line 519 "_testcapimodule.c"
      case 37: // $bb36
        var $139=_PyErr_Occurred(); //@line 519 "_testcapimodule.c"
        var $140=($139)!=0; //@line 519 "_testcapimodule.c"
        if ($140) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 519 "_testcapimodule.c"
      case 38: // $bb37
        $0=0; //@line 520 "_testcapimodule.c"
        __label__ = 113; break; //@line 520 "_testcapimodule.c"
      case 39: // $bb38
        var $_pr2=$value;
        var $141=($_pr2)!=-1; //@line 521 "_testcapimodule.c"
        if ($141) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 521 "_testcapimodule.c"
      case 40: // $bb39
        var $142=_raiseTestError(__str37, __str38); //@line 522 "_testcapimodule.c"
        $0=$142; //@line 522 "_testcapimodule.c"
        __label__ = 113; break; //@line 522 "_testcapimodule.c"
      case 41: // $bb40
        var $143=HEAP[$overflow]; //@line 524 "_testcapimodule.c"
        var $144=($143)!=-1; //@line 524 "_testcapimodule.c"
        if ($144) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 524 "_testcapimodule.c"
      case 42: // $bb41
        var $145=_raiseTestError(__str37, __str41); //@line 525 "_testcapimodule.c"
        $0=$145; //@line 525 "_testcapimodule.c"
        __label__ = 113; break; //@line 525 "_testcapimodule.c"
      case 43: // $bb42
        var $146=_PyLong_FromLong(-2147483648); //@line 529 "_testcapimodule.c"
        $num=$146; //@line 529 "_testcapimodule.c"
        var $147=$num; //@line 530 "_testcapimodule.c"
        var $148=($147)==0; //@line 530 "_testcapimodule.c"
        if ($148) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 530 "_testcapimodule.c"
      case 44: // $bb43
        $0=0; //@line 531 "_testcapimodule.c"
        __label__ = 113; break; //@line 531 "_testcapimodule.c"
      case 45: // $bb44
        var $149=_PyLong_FromLong(1); //@line 532 "_testcapimodule.c"
        $one=$149; //@line 532 "_testcapimodule.c"
        var $150=$one; //@line 533 "_testcapimodule.c"
        var $151=($150)==0; //@line 533 "_testcapimodule.c"
        var $152=$num; //@line 534 "_testcapimodule.c"
        if ($151) { __label__ = 46; break; } else { __label__ = 49; break; } //@line 533 "_testcapimodule.c"
      case 46: // $bb45
        var $153=$152; //@line 534 "_testcapimodule.c"
        var $154=HEAP[$153]; //@line 534 "_testcapimodule.c"
        var $155=($154) - 1; //@line 534 "_testcapimodule.c"
        var $156=$num; //@line 534 "_testcapimodule.c"
        var $157=$156; //@line 534 "_testcapimodule.c"
        HEAP[$157]=$155; //@line 534 "_testcapimodule.c"
        var $158=$num; //@line 534 "_testcapimodule.c"
        var $159=$158; //@line 534 "_testcapimodule.c"
        var $160=HEAP[$159]; //@line 534 "_testcapimodule.c"
        var $161=($160)==0; //@line 534 "_testcapimodule.c"
        if ($161) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 534 "_testcapimodule.c"
      case 47: // $bb46
        var $162=$num; //@line 534 "_testcapimodule.c"
        var $163=$162+4; //@line 534 "_testcapimodule.c"
        var $164=HEAP[$163]; //@line 534 "_testcapimodule.c"
        var $165=$164+24; //@line 534 "_testcapimodule.c"
        var $166=HEAP[$165]; //@line 534 "_testcapimodule.c"
        var $167=$num; //@line 534 "_testcapimodule.c"
        FUNCTION_TABLE[$166]($167); //@line 534 "_testcapimodule.c"
        __label__ = 48; break; //@line 534 "_testcapimodule.c"
      case 48: // $bb47
        $0=0; //@line 535 "_testcapimodule.c"
        __label__ = 113; break; //@line 535 "_testcapimodule.c"
      case 49: // $bb48
        var $168=$one; //@line 537 "_testcapimodule.c"
        var $169=_PyNumber_Subtract($152, $168); //@line 537 "_testcapimodule.c"
        $temp=$169; //@line 537 "_testcapimodule.c"
        var $170=$one; //@line 538 "_testcapimodule.c"
        var $171=$170; //@line 538 "_testcapimodule.c"
        var $172=HEAP[$171]; //@line 538 "_testcapimodule.c"
        var $173=($172) - 1; //@line 538 "_testcapimodule.c"
        var $174=$one; //@line 538 "_testcapimodule.c"
        var $175=$174; //@line 538 "_testcapimodule.c"
        HEAP[$175]=$173; //@line 538 "_testcapimodule.c"
        var $176=$one; //@line 538 "_testcapimodule.c"
        var $177=$176; //@line 538 "_testcapimodule.c"
        var $178=HEAP[$177]; //@line 538 "_testcapimodule.c"
        var $179=($178)==0; //@line 538 "_testcapimodule.c"
        if ($179) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 538 "_testcapimodule.c"
      case 50: // $bb49
        var $180=$one; //@line 538 "_testcapimodule.c"
        var $181=$180+4; //@line 538 "_testcapimodule.c"
        var $182=HEAP[$181]; //@line 538 "_testcapimodule.c"
        var $183=$182+24; //@line 538 "_testcapimodule.c"
        var $184=HEAP[$183]; //@line 538 "_testcapimodule.c"
        var $185=$one; //@line 538 "_testcapimodule.c"
        FUNCTION_TABLE[$184]($185); //@line 538 "_testcapimodule.c"
        __label__ = 51; break; //@line 538 "_testcapimodule.c"
      case 51: // $bb50
        var $186=$num; //@line 539 "_testcapimodule.c"
        var $187=$186; //@line 539 "_testcapimodule.c"
        var $188=HEAP[$187]; //@line 539 "_testcapimodule.c"
        var $189=($188) - 1; //@line 539 "_testcapimodule.c"
        var $190=$num; //@line 539 "_testcapimodule.c"
        var $191=$190; //@line 539 "_testcapimodule.c"
        HEAP[$191]=$189; //@line 539 "_testcapimodule.c"
        var $192=$num; //@line 539 "_testcapimodule.c"
        var $193=$192; //@line 539 "_testcapimodule.c"
        var $194=HEAP[$193]; //@line 539 "_testcapimodule.c"
        var $195=($194)==0; //@line 539 "_testcapimodule.c"
        if ($195) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 539 "_testcapimodule.c"
      case 52: // $bb51
        var $196=$num; //@line 539 "_testcapimodule.c"
        var $197=$196+4; //@line 539 "_testcapimodule.c"
        var $198=HEAP[$197]; //@line 539 "_testcapimodule.c"
        var $199=$198+24; //@line 539 "_testcapimodule.c"
        var $200=HEAP[$199]; //@line 539 "_testcapimodule.c"
        var $201=$num; //@line 539 "_testcapimodule.c"
        FUNCTION_TABLE[$200]($201); //@line 539 "_testcapimodule.c"
        __label__ = 53; break; //@line 539 "_testcapimodule.c"
      case 53: // $bb52
        var $202=$temp; //@line 540 "_testcapimodule.c"
        $num=$202; //@line 540 "_testcapimodule.c"
        var $203=($202)==0; //@line 541 "_testcapimodule.c"
        if ($203) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 541 "_testcapimodule.c"
      case 54: // $bb53
        $0=0; //@line 542 "_testcapimodule.c"
        __label__ = 113; break; //@line 542 "_testcapimodule.c"
      case 55: // $bb54
        HEAP[$overflow]=0; //@line 543 "_testcapimodule.c"
        var $204=$num; //@line 544 "_testcapimodule.c"
        var $205=_PyLong_AsLongAndOverflow($204, $overflow); //@line 544 "_testcapimodule.c"
        $value=$205; //@line 544 "_testcapimodule.c"
        var $206=$num; //@line 545 "_testcapimodule.c"
        var $207=$206; //@line 545 "_testcapimodule.c"
        var $208=HEAP[$207]; //@line 545 "_testcapimodule.c"
        var $209=($208) - 1; //@line 545 "_testcapimodule.c"
        var $210=$num; //@line 545 "_testcapimodule.c"
        var $211=$210; //@line 545 "_testcapimodule.c"
        HEAP[$211]=$209; //@line 545 "_testcapimodule.c"
        var $212=$num; //@line 545 "_testcapimodule.c"
        var $213=$212; //@line 545 "_testcapimodule.c"
        var $214=HEAP[$213]; //@line 545 "_testcapimodule.c"
        var $215=($214)==0; //@line 545 "_testcapimodule.c"
        if ($215) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 545 "_testcapimodule.c"
      case 56: // $bb55
        var $216=$num; //@line 545 "_testcapimodule.c"
        var $217=$216+4; //@line 545 "_testcapimodule.c"
        var $218=HEAP[$217]; //@line 545 "_testcapimodule.c"
        var $219=$218+24; //@line 545 "_testcapimodule.c"
        var $220=HEAP[$219]; //@line 545 "_testcapimodule.c"
        var $221=$num; //@line 545 "_testcapimodule.c"
        FUNCTION_TABLE[$220]($221); //@line 545 "_testcapimodule.c"
        __label__ = 57; break; //@line 545 "_testcapimodule.c"
      case 57: // $bb56
        var $222=$value; //@line 546 "_testcapimodule.c"
        var $223=($222)==-1; //@line 546 "_testcapimodule.c"
        if ($223) { __label__ = 58; break; } else { __label__ = 61; break; } //@line 546 "_testcapimodule.c"
      case 58: // $bb57
        var $224=_PyErr_Occurred(); //@line 546 "_testcapimodule.c"
        var $225=($224)!=0; //@line 546 "_testcapimodule.c"
        if ($225) { __label__ = 59; break; } else { __label__ = 60; break; } //@line 546 "_testcapimodule.c"
      case 59: // $bb58
        $0=0; //@line 547 "_testcapimodule.c"
        __label__ = 113; break; //@line 547 "_testcapimodule.c"
      case 60: // $bb59
        var $_pr3=$value;
        var $226=($_pr3)!=-1; //@line 548 "_testcapimodule.c"
        if ($226) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 548 "_testcapimodule.c"
      case 61: // $bb60
        var $227=_raiseTestError(__str37, __str38); //@line 549 "_testcapimodule.c"
        $0=$227; //@line 549 "_testcapimodule.c"
        __label__ = 113; break; //@line 549 "_testcapimodule.c"
      case 62: // $bb61
        var $228=HEAP[$overflow]; //@line 551 "_testcapimodule.c"
        var $229=($228)!=-1; //@line 551 "_testcapimodule.c"
        if ($229) { __label__ = 63; break; } else { __label__ = 64; break; } //@line 551 "_testcapimodule.c"
      case 63: // $bb62
        var $230=_raiseTestError(__str37, __str41); //@line 552 "_testcapimodule.c"
        $0=$230; //@line 552 "_testcapimodule.c"
        __label__ = 113; break; //@line 552 "_testcapimodule.c"
      case 64: // $bb63
        var $231=_PyLong_FromString(__str42, 0, 16); //@line 556 "_testcapimodule.c"
        $num=$231; //@line 556 "_testcapimodule.c"
        var $232=$num; //@line 557 "_testcapimodule.c"
        var $233=($232)==0; //@line 557 "_testcapimodule.c"
        if ($233) { __label__ = 65; break; } else { __label__ = 66; break; } //@line 557 "_testcapimodule.c"
      case 65: // $bb64
        $0=0; //@line 558 "_testcapimodule.c"
        __label__ = 113; break; //@line 558 "_testcapimodule.c"
      case 66: // $bb65
        HEAP[$overflow]=1234; //@line 559 "_testcapimodule.c"
        var $234=$num; //@line 560 "_testcapimodule.c"
        var $235=_PyLong_AsLongAndOverflow($234, $overflow); //@line 560 "_testcapimodule.c"
        $value=$235; //@line 560 "_testcapimodule.c"
        var $236=$num; //@line 561 "_testcapimodule.c"
        var $237=$236; //@line 561 "_testcapimodule.c"
        var $238=HEAP[$237]; //@line 561 "_testcapimodule.c"
        var $239=($238) - 1; //@line 561 "_testcapimodule.c"
        var $240=$num; //@line 561 "_testcapimodule.c"
        var $241=$240; //@line 561 "_testcapimodule.c"
        HEAP[$241]=$239; //@line 561 "_testcapimodule.c"
        var $242=$num; //@line 561 "_testcapimodule.c"
        var $243=$242; //@line 561 "_testcapimodule.c"
        var $244=HEAP[$243]; //@line 561 "_testcapimodule.c"
        var $245=($244)==0; //@line 561 "_testcapimodule.c"
        if ($245) { __label__ = 67; break; } else { __label__ = 68; break; } //@line 561 "_testcapimodule.c"
      case 67: // $bb66
        var $246=$num; //@line 561 "_testcapimodule.c"
        var $247=$246+4; //@line 561 "_testcapimodule.c"
        var $248=HEAP[$247]; //@line 561 "_testcapimodule.c"
        var $249=$248+24; //@line 561 "_testcapimodule.c"
        var $250=HEAP[$249]; //@line 561 "_testcapimodule.c"
        var $251=$num; //@line 561 "_testcapimodule.c"
        FUNCTION_TABLE[$250]($251); //@line 561 "_testcapimodule.c"
        __label__ = 68; break; //@line 561 "_testcapimodule.c"
      case 68: // $bb67
        var $252=$value; //@line 562 "_testcapimodule.c"
        var $253=($252)==-1; //@line 562 "_testcapimodule.c"
        if ($253) { __lastLabel__ = 68; __label__ = 69; break; } else { __lastLabel__ = 68; __label__ = 72; break; } //@line 562 "_testcapimodule.c"
      case 69: // $bb68
        var $254=_PyErr_Occurred(); //@line 562 "_testcapimodule.c"
        var $255=($254)!=0; //@line 562 "_testcapimodule.c"
        if ($255) { __label__ = 70; break; } else { __label__ = 71; break; } //@line 562 "_testcapimodule.c"
      case 70: // $bb69
        $0=0; //@line 563 "_testcapimodule.c"
        __label__ = 113; break; //@line 563 "_testcapimodule.c"
      case 71: // $bb70thread_pre_split
        var $_pr4=$value;
        __lastLabel__ = 71; __label__ = 72; break;
      case 72: // $bb70
        var $256=__lastLabel__ == 71 ? $_pr4 : ($252);
        var $257=($256)!=255; //@line 564 "_testcapimodule.c"
        if ($257) { __label__ = 73; break; } else { __label__ = 74; break; } //@line 564 "_testcapimodule.c"
      case 73: // $bb71
        var $258=_raiseTestError(__str37, __str43); //@line 565 "_testcapimodule.c"
        $0=$258; //@line 565 "_testcapimodule.c"
        __label__ = 113; break; //@line 565 "_testcapimodule.c"
      case 74: // $bb72
        var $259=HEAP[$overflow]; //@line 567 "_testcapimodule.c"
        var $260=($259)!=0; //@line 567 "_testcapimodule.c"
        if ($260) { __label__ = 75; break; } else { __label__ = 76; break; } //@line 567 "_testcapimodule.c"
      case 75: // $bb73
        var $261=_raiseTestError(__str37, __str44); //@line 568 "_testcapimodule.c"
        $0=$261; //@line 568 "_testcapimodule.c"
        __label__ = 113; break; //@line 568 "_testcapimodule.c"
      case 76: // $bb74
        var $262=_PyLong_FromString(__str45, 0, 16); //@line 571 "_testcapimodule.c"
        $num=$262; //@line 571 "_testcapimodule.c"
        var $263=$num; //@line 572 "_testcapimodule.c"
        var $264=($263)==0; //@line 572 "_testcapimodule.c"
        if ($264) { __label__ = 77; break; } else { __label__ = 78; break; } //@line 572 "_testcapimodule.c"
      case 77: // $bb75
        $0=0; //@line 573 "_testcapimodule.c"
        __label__ = 113; break; //@line 573 "_testcapimodule.c"
      case 78: // $bb76
        HEAP[$overflow]=0; //@line 574 "_testcapimodule.c"
        var $265=$num; //@line 575 "_testcapimodule.c"
        var $266=_PyLong_AsLongAndOverflow($265, $overflow); //@line 575 "_testcapimodule.c"
        $value=$266; //@line 575 "_testcapimodule.c"
        var $267=$num; //@line 576 "_testcapimodule.c"
        var $268=$267; //@line 576 "_testcapimodule.c"
        var $269=HEAP[$268]; //@line 576 "_testcapimodule.c"
        var $270=($269) - 1; //@line 576 "_testcapimodule.c"
        var $271=$num; //@line 576 "_testcapimodule.c"
        var $272=$271; //@line 576 "_testcapimodule.c"
        HEAP[$272]=$270; //@line 576 "_testcapimodule.c"
        var $273=$num; //@line 576 "_testcapimodule.c"
        var $274=$273; //@line 576 "_testcapimodule.c"
        var $275=HEAP[$274]; //@line 576 "_testcapimodule.c"
        var $276=($275)==0; //@line 576 "_testcapimodule.c"
        if ($276) { __label__ = 79; break; } else { __label__ = 80; break; } //@line 576 "_testcapimodule.c"
      case 79: // $bb77
        var $277=$num; //@line 576 "_testcapimodule.c"
        var $278=$277+4; //@line 576 "_testcapimodule.c"
        var $279=HEAP[$278]; //@line 576 "_testcapimodule.c"
        var $280=$279+24; //@line 576 "_testcapimodule.c"
        var $281=HEAP[$280]; //@line 576 "_testcapimodule.c"
        var $282=$num; //@line 576 "_testcapimodule.c"
        FUNCTION_TABLE[$281]($282); //@line 576 "_testcapimodule.c"
        __label__ = 80; break; //@line 576 "_testcapimodule.c"
      case 80: // $bb78
        var $283=$value; //@line 577 "_testcapimodule.c"
        var $284=($283)==-1; //@line 577 "_testcapimodule.c"
        if ($284) { __lastLabel__ = 80; __label__ = 81; break; } else { __lastLabel__ = 80; __label__ = 84; break; } //@line 577 "_testcapimodule.c"
      case 81: // $bb79
        var $285=_PyErr_Occurred(); //@line 577 "_testcapimodule.c"
        var $286=($285)!=0; //@line 577 "_testcapimodule.c"
        if ($286) { __label__ = 82; break; } else { __label__ = 83; break; } //@line 577 "_testcapimodule.c"
      case 82: // $bb80
        $0=0; //@line 578 "_testcapimodule.c"
        __label__ = 113; break; //@line 578 "_testcapimodule.c"
      case 83: // $bb81thread_pre_split
        var $_pr5=$value;
        __lastLabel__ = 83; __label__ = 84; break;
      case 84: // $bb81
        var $287=__lastLabel__ == 83 ? $_pr5 : ($283);
        var $288=($287)!=-255; //@line 579 "_testcapimodule.c"
        if ($288) { __label__ = 85; break; } else { __label__ = 86; break; } //@line 579 "_testcapimodule.c"
      case 85: // $bb82
        var $289=_raiseTestError(__str37, __str43); //@line 580 "_testcapimodule.c"
        $0=$289; //@line 580 "_testcapimodule.c"
        __label__ = 113; break; //@line 580 "_testcapimodule.c"
      case 86: // $bb83
        var $290=HEAP[$overflow]; //@line 582 "_testcapimodule.c"
        var $291=($290)!=0; //@line 582 "_testcapimodule.c"
        if ($291) { __label__ = 87; break; } else { __label__ = 88; break; } //@line 582 "_testcapimodule.c"
      case 87: // $bb84
        var $292=_raiseTestError(__str37, __str46); //@line 583 "_testcapimodule.c"
        $0=$292; //@line 583 "_testcapimodule.c"
        __label__ = 113; break; //@line 583 "_testcapimodule.c"
      case 88: // $bb85
        var $293=_PyLong_FromLong(2147483647); //@line 586 "_testcapimodule.c"
        $num=$293; //@line 586 "_testcapimodule.c"
        var $294=$num; //@line 587 "_testcapimodule.c"
        var $295=($294)==0; //@line 587 "_testcapimodule.c"
        if ($295) { __label__ = 89; break; } else { __label__ = 90; break; } //@line 587 "_testcapimodule.c"
      case 89: // $bb86
        $0=0; //@line 588 "_testcapimodule.c"
        __label__ = 113; break; //@line 588 "_testcapimodule.c"
      case 90: // $bb87
        HEAP[$overflow]=1234; //@line 589 "_testcapimodule.c"
        var $296=$num; //@line 590 "_testcapimodule.c"
        var $297=_PyLong_AsLongAndOverflow($296, $overflow); //@line 590 "_testcapimodule.c"
        $value=$297; //@line 590 "_testcapimodule.c"
        var $298=$num; //@line 591 "_testcapimodule.c"
        var $299=$298; //@line 591 "_testcapimodule.c"
        var $300=HEAP[$299]; //@line 591 "_testcapimodule.c"
        var $301=($300) - 1; //@line 591 "_testcapimodule.c"
        var $302=$num; //@line 591 "_testcapimodule.c"
        var $303=$302; //@line 591 "_testcapimodule.c"
        HEAP[$303]=$301; //@line 591 "_testcapimodule.c"
        var $304=$num; //@line 591 "_testcapimodule.c"
        var $305=$304; //@line 591 "_testcapimodule.c"
        var $306=HEAP[$305]; //@line 591 "_testcapimodule.c"
        var $307=($306)==0; //@line 591 "_testcapimodule.c"
        if ($307) { __label__ = 91; break; } else { __label__ = 92; break; } //@line 591 "_testcapimodule.c"
      case 91: // $bb88
        var $308=$num; //@line 591 "_testcapimodule.c"
        var $309=$308+4; //@line 591 "_testcapimodule.c"
        var $310=HEAP[$309]; //@line 591 "_testcapimodule.c"
        var $311=$310+24; //@line 591 "_testcapimodule.c"
        var $312=HEAP[$311]; //@line 591 "_testcapimodule.c"
        var $313=$num; //@line 591 "_testcapimodule.c"
        FUNCTION_TABLE[$312]($313); //@line 591 "_testcapimodule.c"
        __label__ = 92; break; //@line 591 "_testcapimodule.c"
      case 92: // $bb89
        var $314=$value; //@line 592 "_testcapimodule.c"
        var $315=($314)==-1; //@line 592 "_testcapimodule.c"
        if ($315) { __lastLabel__ = 92; __label__ = 93; break; } else { __lastLabel__ = 92; __label__ = 96; break; } //@line 592 "_testcapimodule.c"
      case 93: // $bb90
        var $316=_PyErr_Occurred(); //@line 592 "_testcapimodule.c"
        var $317=($316)!=0; //@line 592 "_testcapimodule.c"
        if ($317) { __label__ = 94; break; } else { __label__ = 95; break; } //@line 592 "_testcapimodule.c"
      case 94: // $bb91
        $0=0; //@line 593 "_testcapimodule.c"
        __label__ = 113; break; //@line 593 "_testcapimodule.c"
      case 95: // $bb92thread_pre_split
        var $_pr6=$value;
        __lastLabel__ = 95; __label__ = 96; break;
      case 96: // $bb92
        var $318=__lastLabel__ == 95 ? $_pr6 : ($314);
        var $319=($318)!=2147483647; //@line 594 "_testcapimodule.c"
        if ($319) { __label__ = 97; break; } else { __label__ = 98; break; } //@line 594 "_testcapimodule.c"
      case 97: // $bb93
        var $320=_raiseTestError(__str37, __str47); //@line 595 "_testcapimodule.c"
        $0=$320; //@line 595 "_testcapimodule.c"
        __label__ = 113; break; //@line 595 "_testcapimodule.c"
      case 98: // $bb94
        var $321=HEAP[$overflow]; //@line 597 "_testcapimodule.c"
        var $322=($321)!=0; //@line 597 "_testcapimodule.c"
        if ($322) { __label__ = 99; break; } else { __label__ = 100; break; } //@line 597 "_testcapimodule.c"
      case 99: // $bb95
        var $323=_raiseTestError(__str37, __str44); //@line 598 "_testcapimodule.c"
        $0=$323; //@line 598 "_testcapimodule.c"
        __label__ = 113; break; //@line 598 "_testcapimodule.c"
      case 100: // $bb96
        var $324=_PyLong_FromLong(-2147483648); //@line 601 "_testcapimodule.c"
        $num=$324; //@line 601 "_testcapimodule.c"
        var $325=$num; //@line 602 "_testcapimodule.c"
        var $326=($325)==0; //@line 602 "_testcapimodule.c"
        if ($326) { __label__ = 101; break; } else { __label__ = 102; break; } //@line 602 "_testcapimodule.c"
      case 101: // $bb97
        $0=0; //@line 603 "_testcapimodule.c"
        __label__ = 113; break; //@line 603 "_testcapimodule.c"
      case 102: // $bb98
        HEAP[$overflow]=0; //@line 604 "_testcapimodule.c"
        var $327=$num; //@line 605 "_testcapimodule.c"
        var $328=_PyLong_AsLongAndOverflow($327, $overflow); //@line 605 "_testcapimodule.c"
        $value=$328; //@line 605 "_testcapimodule.c"
        var $329=$num; //@line 606 "_testcapimodule.c"
        var $330=$329; //@line 606 "_testcapimodule.c"
        var $331=HEAP[$330]; //@line 606 "_testcapimodule.c"
        var $332=($331) - 1; //@line 606 "_testcapimodule.c"
        var $333=$num; //@line 606 "_testcapimodule.c"
        var $334=$333; //@line 606 "_testcapimodule.c"
        HEAP[$334]=$332; //@line 606 "_testcapimodule.c"
        var $335=$num; //@line 606 "_testcapimodule.c"
        var $336=$335; //@line 606 "_testcapimodule.c"
        var $337=HEAP[$336]; //@line 606 "_testcapimodule.c"
        var $338=($337)==0; //@line 606 "_testcapimodule.c"
        if ($338) { __label__ = 103; break; } else { __label__ = 104; break; } //@line 606 "_testcapimodule.c"
      case 103: // $bb99
        var $339=$num; //@line 606 "_testcapimodule.c"
        var $340=$339+4; //@line 606 "_testcapimodule.c"
        var $341=HEAP[$340]; //@line 606 "_testcapimodule.c"
        var $342=$341+24; //@line 606 "_testcapimodule.c"
        var $343=HEAP[$342]; //@line 606 "_testcapimodule.c"
        var $344=$num; //@line 606 "_testcapimodule.c"
        FUNCTION_TABLE[$343]($344); //@line 606 "_testcapimodule.c"
        __label__ = 104; break; //@line 606 "_testcapimodule.c"
      case 104: // $bb100
        var $345=$value; //@line 607 "_testcapimodule.c"
        var $346=($345)==-1; //@line 607 "_testcapimodule.c"
        if ($346) { __lastLabel__ = 104; __label__ = 105; break; } else { __lastLabel__ = 104; __label__ = 108; break; } //@line 607 "_testcapimodule.c"
      case 105: // $bb101
        var $347=_PyErr_Occurred(); //@line 607 "_testcapimodule.c"
        var $348=($347)!=0; //@line 607 "_testcapimodule.c"
        if ($348) { __label__ = 106; break; } else { __label__ = 107; break; } //@line 607 "_testcapimodule.c"
      case 106: // $bb102
        $0=0; //@line 608 "_testcapimodule.c"
        __label__ = 113; break; //@line 608 "_testcapimodule.c"
      case 107: // $bb103thread_pre_split
        var $_pr7=$value;
        __lastLabel__ = 107; __label__ = 108; break;
      case 108: // $bb103
        var $349=__lastLabel__ == 107 ? $_pr7 : ($345);
        var $350=($349)!=-2147483648; //@line 609 "_testcapimodule.c"
        if ($350) { __label__ = 109; break; } else { __label__ = 110; break; } //@line 609 "_testcapimodule.c"
      case 109: // $bb104
        var $351=_raiseTestError(__str37, __str48); //@line 610 "_testcapimodule.c"
        $0=$351; //@line 610 "_testcapimodule.c"
        __label__ = 113; break; //@line 610 "_testcapimodule.c"
      case 110: // $bb105
        var $352=HEAP[$overflow]; //@line 612 "_testcapimodule.c"
        var $353=($352)!=0; //@line 612 "_testcapimodule.c"
        if ($353) { __label__ = 111; break; } else { __label__ = 112; break; } //@line 612 "_testcapimodule.c"
      case 111: // $bb106
        var $354=_raiseTestError(__str37, __str44); //@line 613 "_testcapimodule.c"
        $0=$354; //@line 613 "_testcapimodule.c"
        __label__ = 113; break; //@line 613 "_testcapimodule.c"
      case 112: // $bb107
        var $355=HEAP[__Py_NoneStruct]; //@line 616 "_testcapimodule.c"
        var $356=($355) + 1; //@line 616 "_testcapimodule.c"
        HEAP[__Py_NoneStruct]=$356; //@line 616 "_testcapimodule.c"
        $0=__Py_NoneStruct; //@line 617 "_testcapimodule.c"
        __label__ = 113; break; //@line 617 "_testcapimodule.c"
      case 113: // $bb108
        var $357=$0; //@line 471 "_testcapimodule.c"
        $retval=$357; //@line 471 "_testcapimodule.c"
        var $retval109=$retval; //@line 471 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval109; //@line 471 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_long_long_and_overflow($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $num;
        var $one;
        var $temp;
        var $value;
        var $overflow=__stackBase__;
        $self_addr=$self;
        var $1=_PyLong_FromString(__str36, 0, 16); //@line 634 "_testcapimodule.c"
        $num=$1; //@line 634 "_testcapimodule.c"
        var $2=$num; //@line 635 "_testcapimodule.c"
        var $3=($2)==0; //@line 635 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 635 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 636 "_testcapimodule.c"
        __label__ = 113; break; //@line 636 "_testcapimodule.c"
      case 2: // $bb1
        HEAP[$overflow]=1234; //@line 637 "_testcapimodule.c"
        var $4=$num; //@line 638 "_testcapimodule.c"
        var $5=_PyLong_AsLongLongAndOverflow($4, $overflow); //@line 638 "_testcapimodule.c"
        $value=$5; //@line 638 "_testcapimodule.c"
        var $6=$num; //@line 639 "_testcapimodule.c"
        var $7=$6; //@line 639 "_testcapimodule.c"
        var $8=HEAP[$7]; //@line 639 "_testcapimodule.c"
        var $9=($8) - 1; //@line 639 "_testcapimodule.c"
        var $10=$num; //@line 639 "_testcapimodule.c"
        var $11=$10; //@line 639 "_testcapimodule.c"
        HEAP[$11]=$9; //@line 639 "_testcapimodule.c"
        var $12=$num; //@line 639 "_testcapimodule.c"
        var $13=$12; //@line 639 "_testcapimodule.c"
        var $14=HEAP[$13]; //@line 639 "_testcapimodule.c"
        var $15=($14)==0; //@line 639 "_testcapimodule.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 639 "_testcapimodule.c"
      case 3: // $bb2
        var $16=$num; //@line 639 "_testcapimodule.c"
        var $17=$16+4; //@line 639 "_testcapimodule.c"
        var $18=HEAP[$17]; //@line 639 "_testcapimodule.c"
        var $19=$18+24; //@line 639 "_testcapimodule.c"
        var $20=HEAP[$19]; //@line 639 "_testcapimodule.c"
        var $21=$num; //@line 639 "_testcapimodule.c"
        FUNCTION_TABLE[$20]($21); //@line 639 "_testcapimodule.c"
        __label__ = 4; break; //@line 639 "_testcapimodule.c"
      case 4: // $bb3
        var $22=$value; //@line 640 "_testcapimodule.c"
        var $23=($22)==-1; //@line 640 "_testcapimodule.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 640 "_testcapimodule.c"
      case 5: // $bb4
        var $24=_PyErr_Occurred(); //@line 640 "_testcapimodule.c"
        var $25=($24)!=0; //@line 640 "_testcapimodule.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 640 "_testcapimodule.c"
      case 6: // $bb5
        $0=0; //@line 641 "_testcapimodule.c"
        __label__ = 113; break; //@line 641 "_testcapimodule.c"
      case 7: // $bb6
        var $_pr=$value;
        var $26=($_pr)!=-1; //@line 642 "_testcapimodule.c"
        if ($26) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 642 "_testcapimodule.c"
      case 8: // $bb7
        var $27=_raiseTestError(__str49, __str38); //@line 643 "_testcapimodule.c"
        $0=$27; //@line 643 "_testcapimodule.c"
        __label__ = 113; break; //@line 643 "_testcapimodule.c"
      case 9: // $bb8
        var $28=HEAP[$overflow]; //@line 645 "_testcapimodule.c"
        var $29=($28)!=1; //@line 645 "_testcapimodule.c"
        if ($29) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 645 "_testcapimodule.c"
      case 10: // $bb9
        var $30=_raiseTestError(__str49, __str39); //@line 646 "_testcapimodule.c"
        $0=$30; //@line 646 "_testcapimodule.c"
        __label__ = 113; break; //@line 646 "_testcapimodule.c"
      case 11: // $bb10
        var $31=_PyLong_FromLongLong(9223372036854776000); //@line 650 "_testcapimodule.c"
        $num=$31; //@line 650 "_testcapimodule.c"
        var $32=$num; //@line 651 "_testcapimodule.c"
        var $33=($32)==0; //@line 651 "_testcapimodule.c"
        if ($33) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 651 "_testcapimodule.c"
      case 12: // $bb11
        $0=0; //@line 652 "_testcapimodule.c"
        __label__ = 113; break; //@line 652 "_testcapimodule.c"
      case 13: // $bb12
        var $34=_PyLong_FromLong(1); //@line 653 "_testcapimodule.c"
        $one=$34; //@line 653 "_testcapimodule.c"
        var $35=$one; //@line 654 "_testcapimodule.c"
        var $36=($35)==0; //@line 654 "_testcapimodule.c"
        var $37=$num; //@line 655 "_testcapimodule.c"
        if ($36) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 654 "_testcapimodule.c"
      case 14: // $bb13
        var $38=$37; //@line 655 "_testcapimodule.c"
        var $39=HEAP[$38]; //@line 655 "_testcapimodule.c"
        var $40=($39) - 1; //@line 655 "_testcapimodule.c"
        var $41=$num; //@line 655 "_testcapimodule.c"
        var $42=$41; //@line 655 "_testcapimodule.c"
        HEAP[$42]=$40; //@line 655 "_testcapimodule.c"
        var $43=$num; //@line 655 "_testcapimodule.c"
        var $44=$43; //@line 655 "_testcapimodule.c"
        var $45=HEAP[$44]; //@line 655 "_testcapimodule.c"
        var $46=($45)==0; //@line 655 "_testcapimodule.c"
        if ($46) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 655 "_testcapimodule.c"
      case 15: // $bb14
        var $47=$num; //@line 655 "_testcapimodule.c"
        var $48=$47+4; //@line 655 "_testcapimodule.c"
        var $49=HEAP[$48]; //@line 655 "_testcapimodule.c"
        var $50=$49+24; //@line 655 "_testcapimodule.c"
        var $51=HEAP[$50]; //@line 655 "_testcapimodule.c"
        var $52=$num; //@line 655 "_testcapimodule.c"
        FUNCTION_TABLE[$51]($52); //@line 655 "_testcapimodule.c"
        __label__ = 16; break; //@line 655 "_testcapimodule.c"
      case 16: // $bb15
        $0=0; //@line 656 "_testcapimodule.c"
        __label__ = 113; break; //@line 656 "_testcapimodule.c"
      case 17: // $bb16
        var $53=$one; //@line 658 "_testcapimodule.c"
        var $54=_PyNumber_Add($37, $53); //@line 658 "_testcapimodule.c"
        $temp=$54; //@line 658 "_testcapimodule.c"
        var $55=$one; //@line 659 "_testcapimodule.c"
        var $56=$55; //@line 659 "_testcapimodule.c"
        var $57=HEAP[$56]; //@line 659 "_testcapimodule.c"
        var $58=($57) - 1; //@line 659 "_testcapimodule.c"
        var $59=$one; //@line 659 "_testcapimodule.c"
        var $60=$59; //@line 659 "_testcapimodule.c"
        HEAP[$60]=$58; //@line 659 "_testcapimodule.c"
        var $61=$one; //@line 659 "_testcapimodule.c"
        var $62=$61; //@line 659 "_testcapimodule.c"
        var $63=HEAP[$62]; //@line 659 "_testcapimodule.c"
        var $64=($63)==0; //@line 659 "_testcapimodule.c"
        if ($64) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 659 "_testcapimodule.c"
      case 18: // $bb17
        var $65=$one; //@line 659 "_testcapimodule.c"
        var $66=$65+4; //@line 659 "_testcapimodule.c"
        var $67=HEAP[$66]; //@line 659 "_testcapimodule.c"
        var $68=$67+24; //@line 659 "_testcapimodule.c"
        var $69=HEAP[$68]; //@line 659 "_testcapimodule.c"
        var $70=$one; //@line 659 "_testcapimodule.c"
        FUNCTION_TABLE[$69]($70); //@line 659 "_testcapimodule.c"
        __label__ = 19; break; //@line 659 "_testcapimodule.c"
      case 19: // $bb18
        var $71=$num; //@line 660 "_testcapimodule.c"
        var $72=$71; //@line 660 "_testcapimodule.c"
        var $73=HEAP[$72]; //@line 660 "_testcapimodule.c"
        var $74=($73) - 1; //@line 660 "_testcapimodule.c"
        var $75=$num; //@line 660 "_testcapimodule.c"
        var $76=$75; //@line 660 "_testcapimodule.c"
        HEAP[$76]=$74; //@line 660 "_testcapimodule.c"
        var $77=$num; //@line 660 "_testcapimodule.c"
        var $78=$77; //@line 660 "_testcapimodule.c"
        var $79=HEAP[$78]; //@line 660 "_testcapimodule.c"
        var $80=($79)==0; //@line 660 "_testcapimodule.c"
        if ($80) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 660 "_testcapimodule.c"
      case 20: // $bb19
        var $81=$num; //@line 660 "_testcapimodule.c"
        var $82=$81+4; //@line 660 "_testcapimodule.c"
        var $83=HEAP[$82]; //@line 660 "_testcapimodule.c"
        var $84=$83+24; //@line 660 "_testcapimodule.c"
        var $85=HEAP[$84]; //@line 660 "_testcapimodule.c"
        var $86=$num; //@line 660 "_testcapimodule.c"
        FUNCTION_TABLE[$85]($86); //@line 660 "_testcapimodule.c"
        __label__ = 21; break; //@line 660 "_testcapimodule.c"
      case 21: // $bb20
        var $87=$temp; //@line 661 "_testcapimodule.c"
        $num=$87; //@line 661 "_testcapimodule.c"
        var $88=($87)==0; //@line 662 "_testcapimodule.c"
        if ($88) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 662 "_testcapimodule.c"
      case 22: // $bb21
        $0=0; //@line 663 "_testcapimodule.c"
        __label__ = 113; break; //@line 663 "_testcapimodule.c"
      case 23: // $bb22
        HEAP[$overflow]=0; //@line 664 "_testcapimodule.c"
        var $89=$num; //@line 665 "_testcapimodule.c"
        var $90=_PyLong_AsLongLongAndOverflow($89, $overflow); //@line 665 "_testcapimodule.c"
        $value=$90; //@line 665 "_testcapimodule.c"
        var $91=$num; //@line 666 "_testcapimodule.c"
        var $92=$91; //@line 666 "_testcapimodule.c"
        var $93=HEAP[$92]; //@line 666 "_testcapimodule.c"
        var $94=($93) - 1; //@line 666 "_testcapimodule.c"
        var $95=$num; //@line 666 "_testcapimodule.c"
        var $96=$95; //@line 666 "_testcapimodule.c"
        HEAP[$96]=$94; //@line 666 "_testcapimodule.c"
        var $97=$num; //@line 666 "_testcapimodule.c"
        var $98=$97; //@line 666 "_testcapimodule.c"
        var $99=HEAP[$98]; //@line 666 "_testcapimodule.c"
        var $100=($99)==0; //@line 666 "_testcapimodule.c"
        if ($100) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 666 "_testcapimodule.c"
      case 24: // $bb23
        var $101=$num; //@line 666 "_testcapimodule.c"
        var $102=$101+4; //@line 666 "_testcapimodule.c"
        var $103=HEAP[$102]; //@line 666 "_testcapimodule.c"
        var $104=$103+24; //@line 666 "_testcapimodule.c"
        var $105=HEAP[$104]; //@line 666 "_testcapimodule.c"
        var $106=$num; //@line 666 "_testcapimodule.c"
        FUNCTION_TABLE[$105]($106); //@line 666 "_testcapimodule.c"
        __label__ = 25; break; //@line 666 "_testcapimodule.c"
      case 25: // $bb24
        var $107=$value; //@line 667 "_testcapimodule.c"
        var $108=($107)==-1; //@line 667 "_testcapimodule.c"
        if ($108) { __label__ = 26; break; } else { __label__ = 29; break; } //@line 667 "_testcapimodule.c"
      case 26: // $bb25
        var $109=_PyErr_Occurred(); //@line 667 "_testcapimodule.c"
        var $110=($109)!=0; //@line 667 "_testcapimodule.c"
        if ($110) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 667 "_testcapimodule.c"
      case 27: // $bb26
        $0=0; //@line 668 "_testcapimodule.c"
        __label__ = 113; break; //@line 668 "_testcapimodule.c"
      case 28: // $bb27
        var $_pr1=$value;
        var $111=($_pr1)!=-1; //@line 669 "_testcapimodule.c"
        if ($111) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 669 "_testcapimodule.c"
      case 29: // $bb28
        var $112=_raiseTestError(__str49, __str38); //@line 670 "_testcapimodule.c"
        $0=$112; //@line 670 "_testcapimodule.c"
        __label__ = 113; break; //@line 670 "_testcapimodule.c"
      case 30: // $bb29
        var $113=HEAP[$overflow]; //@line 672 "_testcapimodule.c"
        var $114=($113)!=1; //@line 672 "_testcapimodule.c"
        if ($114) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 672 "_testcapimodule.c"
      case 31: // $bb30
        var $115=_raiseTestError(__str49, __str39); //@line 673 "_testcapimodule.c"
        $0=$115; //@line 673 "_testcapimodule.c"
        __label__ = 113; break; //@line 673 "_testcapimodule.c"
      case 32: // $bb31
        var $116=_PyLong_FromString(__str40, 0, 16); //@line 678 "_testcapimodule.c"
        $num=$116; //@line 678 "_testcapimodule.c"
        var $117=$num; //@line 679 "_testcapimodule.c"
        var $118=($117)==0; //@line 679 "_testcapimodule.c"
        if ($118) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 679 "_testcapimodule.c"
      case 33: // $bb32
        $0=0; //@line 680 "_testcapimodule.c"
        __label__ = 113; break; //@line 680 "_testcapimodule.c"
      case 34: // $bb33
        HEAP[$overflow]=1234; //@line 681 "_testcapimodule.c"
        var $119=$num; //@line 682 "_testcapimodule.c"
        var $120=_PyLong_AsLongLongAndOverflow($119, $overflow); //@line 682 "_testcapimodule.c"
        $value=$120; //@line 682 "_testcapimodule.c"
        var $121=$num; //@line 683 "_testcapimodule.c"
        var $122=$121; //@line 683 "_testcapimodule.c"
        var $123=HEAP[$122]; //@line 683 "_testcapimodule.c"
        var $124=($123) - 1; //@line 683 "_testcapimodule.c"
        var $125=$num; //@line 683 "_testcapimodule.c"
        var $126=$125; //@line 683 "_testcapimodule.c"
        HEAP[$126]=$124; //@line 683 "_testcapimodule.c"
        var $127=$num; //@line 683 "_testcapimodule.c"
        var $128=$127; //@line 683 "_testcapimodule.c"
        var $129=HEAP[$128]; //@line 683 "_testcapimodule.c"
        var $130=($129)==0; //@line 683 "_testcapimodule.c"
        if ($130) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 683 "_testcapimodule.c"
      case 35: // $bb34
        var $131=$num; //@line 683 "_testcapimodule.c"
        var $132=$131+4; //@line 683 "_testcapimodule.c"
        var $133=HEAP[$132]; //@line 683 "_testcapimodule.c"
        var $134=$133+24; //@line 683 "_testcapimodule.c"
        var $135=HEAP[$134]; //@line 683 "_testcapimodule.c"
        var $136=$num; //@line 683 "_testcapimodule.c"
        FUNCTION_TABLE[$135]($136); //@line 683 "_testcapimodule.c"
        __label__ = 36; break; //@line 683 "_testcapimodule.c"
      case 36: // $bb35
        var $137=$value; //@line 684 "_testcapimodule.c"
        var $138=($137)==-1; //@line 684 "_testcapimodule.c"
        if ($138) { __label__ = 37; break; } else { __label__ = 40; break; } //@line 684 "_testcapimodule.c"
      case 37: // $bb36
        var $139=_PyErr_Occurred(); //@line 684 "_testcapimodule.c"
        var $140=($139)!=0; //@line 684 "_testcapimodule.c"
        if ($140) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 684 "_testcapimodule.c"
      case 38: // $bb37
        $0=0; //@line 685 "_testcapimodule.c"
        __label__ = 113; break; //@line 685 "_testcapimodule.c"
      case 39: // $bb38
        var $_pr2=$value;
        var $141=($_pr2)!=-1; //@line 686 "_testcapimodule.c"
        if ($141) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 686 "_testcapimodule.c"
      case 40: // $bb39
        var $142=_raiseTestError(__str49, __str38); //@line 687 "_testcapimodule.c"
        $0=$142; //@line 687 "_testcapimodule.c"
        __label__ = 113; break; //@line 687 "_testcapimodule.c"
      case 41: // $bb40
        var $143=HEAP[$overflow]; //@line 689 "_testcapimodule.c"
        var $144=($143)!=-1; //@line 689 "_testcapimodule.c"
        if ($144) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 689 "_testcapimodule.c"
      case 42: // $bb41
        var $145=_raiseTestError(__str49, __str41); //@line 690 "_testcapimodule.c"
        $0=$145; //@line 690 "_testcapimodule.c"
        __label__ = 113; break; //@line 690 "_testcapimodule.c"
      case 43: // $bb42
        var $146=_PyLong_FromLongLong(-9223372036854776000); //@line 694 "_testcapimodule.c"
        $num=$146; //@line 694 "_testcapimodule.c"
        var $147=$num; //@line 695 "_testcapimodule.c"
        var $148=($147)==0; //@line 695 "_testcapimodule.c"
        if ($148) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 695 "_testcapimodule.c"
      case 44: // $bb43
        $0=0; //@line 696 "_testcapimodule.c"
        __label__ = 113; break; //@line 696 "_testcapimodule.c"
      case 45: // $bb44
        var $149=_PyLong_FromLong(1); //@line 697 "_testcapimodule.c"
        $one=$149; //@line 697 "_testcapimodule.c"
        var $150=$one; //@line 698 "_testcapimodule.c"
        var $151=($150)==0; //@line 698 "_testcapimodule.c"
        var $152=$num; //@line 699 "_testcapimodule.c"
        if ($151) { __label__ = 46; break; } else { __label__ = 49; break; } //@line 698 "_testcapimodule.c"
      case 46: // $bb45
        var $153=$152; //@line 699 "_testcapimodule.c"
        var $154=HEAP[$153]; //@line 699 "_testcapimodule.c"
        var $155=($154) - 1; //@line 699 "_testcapimodule.c"
        var $156=$num; //@line 699 "_testcapimodule.c"
        var $157=$156; //@line 699 "_testcapimodule.c"
        HEAP[$157]=$155; //@line 699 "_testcapimodule.c"
        var $158=$num; //@line 699 "_testcapimodule.c"
        var $159=$158; //@line 699 "_testcapimodule.c"
        var $160=HEAP[$159]; //@line 699 "_testcapimodule.c"
        var $161=($160)==0; //@line 699 "_testcapimodule.c"
        if ($161) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 699 "_testcapimodule.c"
      case 47: // $bb46
        var $162=$num; //@line 699 "_testcapimodule.c"
        var $163=$162+4; //@line 699 "_testcapimodule.c"
        var $164=HEAP[$163]; //@line 699 "_testcapimodule.c"
        var $165=$164+24; //@line 699 "_testcapimodule.c"
        var $166=HEAP[$165]; //@line 699 "_testcapimodule.c"
        var $167=$num; //@line 699 "_testcapimodule.c"
        FUNCTION_TABLE[$166]($167); //@line 699 "_testcapimodule.c"
        __label__ = 48; break; //@line 699 "_testcapimodule.c"
      case 48: // $bb47
        $0=0; //@line 700 "_testcapimodule.c"
        __label__ = 113; break; //@line 700 "_testcapimodule.c"
      case 49: // $bb48
        var $168=$one; //@line 702 "_testcapimodule.c"
        var $169=_PyNumber_Subtract($152, $168); //@line 702 "_testcapimodule.c"
        $temp=$169; //@line 702 "_testcapimodule.c"
        var $170=$one; //@line 703 "_testcapimodule.c"
        var $171=$170; //@line 703 "_testcapimodule.c"
        var $172=HEAP[$171]; //@line 703 "_testcapimodule.c"
        var $173=($172) - 1; //@line 703 "_testcapimodule.c"
        var $174=$one; //@line 703 "_testcapimodule.c"
        var $175=$174; //@line 703 "_testcapimodule.c"
        HEAP[$175]=$173; //@line 703 "_testcapimodule.c"
        var $176=$one; //@line 703 "_testcapimodule.c"
        var $177=$176; //@line 703 "_testcapimodule.c"
        var $178=HEAP[$177]; //@line 703 "_testcapimodule.c"
        var $179=($178)==0; //@line 703 "_testcapimodule.c"
        if ($179) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 703 "_testcapimodule.c"
      case 50: // $bb49
        var $180=$one; //@line 703 "_testcapimodule.c"
        var $181=$180+4; //@line 703 "_testcapimodule.c"
        var $182=HEAP[$181]; //@line 703 "_testcapimodule.c"
        var $183=$182+24; //@line 703 "_testcapimodule.c"
        var $184=HEAP[$183]; //@line 703 "_testcapimodule.c"
        var $185=$one; //@line 703 "_testcapimodule.c"
        FUNCTION_TABLE[$184]($185); //@line 703 "_testcapimodule.c"
        __label__ = 51; break; //@line 703 "_testcapimodule.c"
      case 51: // $bb50
        var $186=$num; //@line 704 "_testcapimodule.c"
        var $187=$186; //@line 704 "_testcapimodule.c"
        var $188=HEAP[$187]; //@line 704 "_testcapimodule.c"
        var $189=($188) - 1; //@line 704 "_testcapimodule.c"
        var $190=$num; //@line 704 "_testcapimodule.c"
        var $191=$190; //@line 704 "_testcapimodule.c"
        HEAP[$191]=$189; //@line 704 "_testcapimodule.c"
        var $192=$num; //@line 704 "_testcapimodule.c"
        var $193=$192; //@line 704 "_testcapimodule.c"
        var $194=HEAP[$193]; //@line 704 "_testcapimodule.c"
        var $195=($194)==0; //@line 704 "_testcapimodule.c"
        if ($195) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 704 "_testcapimodule.c"
      case 52: // $bb51
        var $196=$num; //@line 704 "_testcapimodule.c"
        var $197=$196+4; //@line 704 "_testcapimodule.c"
        var $198=HEAP[$197]; //@line 704 "_testcapimodule.c"
        var $199=$198+24; //@line 704 "_testcapimodule.c"
        var $200=HEAP[$199]; //@line 704 "_testcapimodule.c"
        var $201=$num; //@line 704 "_testcapimodule.c"
        FUNCTION_TABLE[$200]($201); //@line 704 "_testcapimodule.c"
        __label__ = 53; break; //@line 704 "_testcapimodule.c"
      case 53: // $bb52
        var $202=$temp; //@line 705 "_testcapimodule.c"
        $num=$202; //@line 705 "_testcapimodule.c"
        var $203=($202)==0; //@line 706 "_testcapimodule.c"
        if ($203) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 706 "_testcapimodule.c"
      case 54: // $bb53
        $0=0; //@line 707 "_testcapimodule.c"
        __label__ = 113; break; //@line 707 "_testcapimodule.c"
      case 55: // $bb54
        HEAP[$overflow]=0; //@line 708 "_testcapimodule.c"
        var $204=$num; //@line 709 "_testcapimodule.c"
        var $205=_PyLong_AsLongLongAndOverflow($204, $overflow); //@line 709 "_testcapimodule.c"
        $value=$205; //@line 709 "_testcapimodule.c"
        var $206=$num; //@line 710 "_testcapimodule.c"
        var $207=$206; //@line 710 "_testcapimodule.c"
        var $208=HEAP[$207]; //@line 710 "_testcapimodule.c"
        var $209=($208) - 1; //@line 710 "_testcapimodule.c"
        var $210=$num; //@line 710 "_testcapimodule.c"
        var $211=$210; //@line 710 "_testcapimodule.c"
        HEAP[$211]=$209; //@line 710 "_testcapimodule.c"
        var $212=$num; //@line 710 "_testcapimodule.c"
        var $213=$212; //@line 710 "_testcapimodule.c"
        var $214=HEAP[$213]; //@line 710 "_testcapimodule.c"
        var $215=($214)==0; //@line 710 "_testcapimodule.c"
        if ($215) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 710 "_testcapimodule.c"
      case 56: // $bb55
        var $216=$num; //@line 710 "_testcapimodule.c"
        var $217=$216+4; //@line 710 "_testcapimodule.c"
        var $218=HEAP[$217]; //@line 710 "_testcapimodule.c"
        var $219=$218+24; //@line 710 "_testcapimodule.c"
        var $220=HEAP[$219]; //@line 710 "_testcapimodule.c"
        var $221=$num; //@line 710 "_testcapimodule.c"
        FUNCTION_TABLE[$220]($221); //@line 710 "_testcapimodule.c"
        __label__ = 57; break; //@line 710 "_testcapimodule.c"
      case 57: // $bb56
        var $222=$value; //@line 711 "_testcapimodule.c"
        var $223=($222)==-1; //@line 711 "_testcapimodule.c"
        if ($223) { __label__ = 58; break; } else { __label__ = 61; break; } //@line 711 "_testcapimodule.c"
      case 58: // $bb57
        var $224=_PyErr_Occurred(); //@line 711 "_testcapimodule.c"
        var $225=($224)!=0; //@line 711 "_testcapimodule.c"
        if ($225) { __label__ = 59; break; } else { __label__ = 60; break; } //@line 711 "_testcapimodule.c"
      case 59: // $bb58
        $0=0; //@line 712 "_testcapimodule.c"
        __label__ = 113; break; //@line 712 "_testcapimodule.c"
      case 60: // $bb59
        var $_pr3=$value;
        var $226=($_pr3)!=-1; //@line 713 "_testcapimodule.c"
        if ($226) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 713 "_testcapimodule.c"
      case 61: // $bb60
        var $227=_raiseTestError(__str49, __str38); //@line 714 "_testcapimodule.c"
        $0=$227; //@line 714 "_testcapimodule.c"
        __label__ = 113; break; //@line 714 "_testcapimodule.c"
      case 62: // $bb61
        var $228=HEAP[$overflow]; //@line 716 "_testcapimodule.c"
        var $229=($228)!=-1; //@line 716 "_testcapimodule.c"
        if ($229) { __label__ = 63; break; } else { __label__ = 64; break; } //@line 716 "_testcapimodule.c"
      case 63: // $bb62
        var $230=_raiseTestError(__str49, __str41); //@line 717 "_testcapimodule.c"
        $0=$230; //@line 717 "_testcapimodule.c"
        __label__ = 113; break; //@line 717 "_testcapimodule.c"
      case 64: // $bb63
        var $231=_PyLong_FromString(__str42, 0, 16); //@line 721 "_testcapimodule.c"
        $num=$231; //@line 721 "_testcapimodule.c"
        var $232=$num; //@line 722 "_testcapimodule.c"
        var $233=($232)==0; //@line 722 "_testcapimodule.c"
        if ($233) { __label__ = 65; break; } else { __label__ = 66; break; } //@line 722 "_testcapimodule.c"
      case 65: // $bb64
        $0=0; //@line 723 "_testcapimodule.c"
        __label__ = 113; break; //@line 723 "_testcapimodule.c"
      case 66: // $bb65
        HEAP[$overflow]=1234; //@line 724 "_testcapimodule.c"
        var $234=$num; //@line 725 "_testcapimodule.c"
        var $235=_PyLong_AsLongLongAndOverflow($234, $overflow); //@line 725 "_testcapimodule.c"
        $value=$235; //@line 725 "_testcapimodule.c"
        var $236=$num; //@line 726 "_testcapimodule.c"
        var $237=$236; //@line 726 "_testcapimodule.c"
        var $238=HEAP[$237]; //@line 726 "_testcapimodule.c"
        var $239=($238) - 1; //@line 726 "_testcapimodule.c"
        var $240=$num; //@line 726 "_testcapimodule.c"
        var $241=$240; //@line 726 "_testcapimodule.c"
        HEAP[$241]=$239; //@line 726 "_testcapimodule.c"
        var $242=$num; //@line 726 "_testcapimodule.c"
        var $243=$242; //@line 726 "_testcapimodule.c"
        var $244=HEAP[$243]; //@line 726 "_testcapimodule.c"
        var $245=($244)==0; //@line 726 "_testcapimodule.c"
        if ($245) { __label__ = 67; break; } else { __label__ = 68; break; } //@line 726 "_testcapimodule.c"
      case 67: // $bb66
        var $246=$num; //@line 726 "_testcapimodule.c"
        var $247=$246+4; //@line 726 "_testcapimodule.c"
        var $248=HEAP[$247]; //@line 726 "_testcapimodule.c"
        var $249=$248+24; //@line 726 "_testcapimodule.c"
        var $250=HEAP[$249]; //@line 726 "_testcapimodule.c"
        var $251=$num; //@line 726 "_testcapimodule.c"
        FUNCTION_TABLE[$250]($251); //@line 726 "_testcapimodule.c"
        __label__ = 68; break; //@line 726 "_testcapimodule.c"
      case 68: // $bb67
        var $252=$value; //@line 727 "_testcapimodule.c"
        var $253=($252)==-1; //@line 727 "_testcapimodule.c"
        if ($253) { __lastLabel__ = 68; __label__ = 69; break; } else { __lastLabel__ = 68; __label__ = 72; break; } //@line 727 "_testcapimodule.c"
      case 69: // $bb68
        var $254=_PyErr_Occurred(); //@line 727 "_testcapimodule.c"
        var $255=($254)!=0; //@line 727 "_testcapimodule.c"
        if ($255) { __label__ = 70; break; } else { __label__ = 71; break; } //@line 727 "_testcapimodule.c"
      case 70: // $bb69
        $0=0; //@line 728 "_testcapimodule.c"
        __label__ = 113; break; //@line 728 "_testcapimodule.c"
      case 71: // $bb70thread_pre_split
        var $_pr4=$value;
        __lastLabel__ = 71; __label__ = 72; break;
      case 72: // $bb70
        var $256=__lastLabel__ == 71 ? $_pr4 : ($252);
        var $257=($256)!=255; //@line 729 "_testcapimodule.c"
        if ($257) { __label__ = 73; break; } else { __label__ = 74; break; } //@line 729 "_testcapimodule.c"
      case 73: // $bb71
        var $258=_raiseTestError(__str49, __str43); //@line 730 "_testcapimodule.c"
        $0=$258; //@line 730 "_testcapimodule.c"
        __label__ = 113; break; //@line 730 "_testcapimodule.c"
      case 74: // $bb72
        var $259=HEAP[$overflow]; //@line 732 "_testcapimodule.c"
        var $260=($259)!=0; //@line 732 "_testcapimodule.c"
        if ($260) { __label__ = 75; break; } else { __label__ = 76; break; } //@line 732 "_testcapimodule.c"
      case 75: // $bb73
        var $261=_raiseTestError(__str49, __str44); //@line 733 "_testcapimodule.c"
        $0=$261; //@line 733 "_testcapimodule.c"
        __label__ = 113; break; //@line 733 "_testcapimodule.c"
      case 76: // $bb74
        var $262=_PyLong_FromString(__str45, 0, 16); //@line 736 "_testcapimodule.c"
        $num=$262; //@line 736 "_testcapimodule.c"
        var $263=$num; //@line 737 "_testcapimodule.c"
        var $264=($263)==0; //@line 737 "_testcapimodule.c"
        if ($264) { __label__ = 77; break; } else { __label__ = 78; break; } //@line 737 "_testcapimodule.c"
      case 77: // $bb75
        $0=0; //@line 738 "_testcapimodule.c"
        __label__ = 113; break; //@line 738 "_testcapimodule.c"
      case 78: // $bb76
        HEAP[$overflow]=0; //@line 739 "_testcapimodule.c"
        var $265=$num; //@line 740 "_testcapimodule.c"
        var $266=_PyLong_AsLongLongAndOverflow($265, $overflow); //@line 740 "_testcapimodule.c"
        $value=$266; //@line 740 "_testcapimodule.c"
        var $267=$num; //@line 741 "_testcapimodule.c"
        var $268=$267; //@line 741 "_testcapimodule.c"
        var $269=HEAP[$268]; //@line 741 "_testcapimodule.c"
        var $270=($269) - 1; //@line 741 "_testcapimodule.c"
        var $271=$num; //@line 741 "_testcapimodule.c"
        var $272=$271; //@line 741 "_testcapimodule.c"
        HEAP[$272]=$270; //@line 741 "_testcapimodule.c"
        var $273=$num; //@line 741 "_testcapimodule.c"
        var $274=$273; //@line 741 "_testcapimodule.c"
        var $275=HEAP[$274]; //@line 741 "_testcapimodule.c"
        var $276=($275)==0; //@line 741 "_testcapimodule.c"
        if ($276) { __label__ = 79; break; } else { __label__ = 80; break; } //@line 741 "_testcapimodule.c"
      case 79: // $bb77
        var $277=$num; //@line 741 "_testcapimodule.c"
        var $278=$277+4; //@line 741 "_testcapimodule.c"
        var $279=HEAP[$278]; //@line 741 "_testcapimodule.c"
        var $280=$279+24; //@line 741 "_testcapimodule.c"
        var $281=HEAP[$280]; //@line 741 "_testcapimodule.c"
        var $282=$num; //@line 741 "_testcapimodule.c"
        FUNCTION_TABLE[$281]($282); //@line 741 "_testcapimodule.c"
        __label__ = 80; break; //@line 741 "_testcapimodule.c"
      case 80: // $bb78
        var $283=$value; //@line 742 "_testcapimodule.c"
        var $284=($283)==-1; //@line 742 "_testcapimodule.c"
        if ($284) { __lastLabel__ = 80; __label__ = 81; break; } else { __lastLabel__ = 80; __label__ = 84; break; } //@line 742 "_testcapimodule.c"
      case 81: // $bb79
        var $285=_PyErr_Occurred(); //@line 742 "_testcapimodule.c"
        var $286=($285)!=0; //@line 742 "_testcapimodule.c"
        if ($286) { __label__ = 82; break; } else { __label__ = 83; break; } //@line 742 "_testcapimodule.c"
      case 82: // $bb80
        $0=0; //@line 743 "_testcapimodule.c"
        __label__ = 113; break; //@line 743 "_testcapimodule.c"
      case 83: // $bb81thread_pre_split
        var $_pr5=$value;
        __lastLabel__ = 83; __label__ = 84; break;
      case 84: // $bb81
        var $287=__lastLabel__ == 83 ? $_pr5 : ($283);
        var $288=($287)!=-255; //@line 744 "_testcapimodule.c"
        if ($288) { __label__ = 85; break; } else { __label__ = 86; break; } //@line 744 "_testcapimodule.c"
      case 85: // $bb82
        var $289=_raiseTestError(__str49, __str43); //@line 745 "_testcapimodule.c"
        $0=$289; //@line 745 "_testcapimodule.c"
        __label__ = 113; break; //@line 745 "_testcapimodule.c"
      case 86: // $bb83
        var $290=HEAP[$overflow]; //@line 747 "_testcapimodule.c"
        var $291=($290)!=0; //@line 747 "_testcapimodule.c"
        if ($291) { __label__ = 87; break; } else { __label__ = 88; break; } //@line 747 "_testcapimodule.c"
      case 87: // $bb84
        var $292=_raiseTestError(__str49, __str46); //@line 748 "_testcapimodule.c"
        $0=$292; //@line 748 "_testcapimodule.c"
        __label__ = 113; break; //@line 748 "_testcapimodule.c"
      case 88: // $bb85
        var $293=_PyLong_FromLongLong(9223372036854776000); //@line 751 "_testcapimodule.c"
        $num=$293; //@line 751 "_testcapimodule.c"
        var $294=$num; //@line 752 "_testcapimodule.c"
        var $295=($294)==0; //@line 752 "_testcapimodule.c"
        if ($295) { __label__ = 89; break; } else { __label__ = 90; break; } //@line 752 "_testcapimodule.c"
      case 89: // $bb86
        $0=0; //@line 753 "_testcapimodule.c"
        __label__ = 113; break; //@line 753 "_testcapimodule.c"
      case 90: // $bb87
        HEAP[$overflow]=1234; //@line 754 "_testcapimodule.c"
        var $296=$num; //@line 755 "_testcapimodule.c"
        var $297=_PyLong_AsLongLongAndOverflow($296, $overflow); //@line 755 "_testcapimodule.c"
        $value=$297; //@line 755 "_testcapimodule.c"
        var $298=$num; //@line 756 "_testcapimodule.c"
        var $299=$298; //@line 756 "_testcapimodule.c"
        var $300=HEAP[$299]; //@line 756 "_testcapimodule.c"
        var $301=($300) - 1; //@line 756 "_testcapimodule.c"
        var $302=$num; //@line 756 "_testcapimodule.c"
        var $303=$302; //@line 756 "_testcapimodule.c"
        HEAP[$303]=$301; //@line 756 "_testcapimodule.c"
        var $304=$num; //@line 756 "_testcapimodule.c"
        var $305=$304; //@line 756 "_testcapimodule.c"
        var $306=HEAP[$305]; //@line 756 "_testcapimodule.c"
        var $307=($306)==0; //@line 756 "_testcapimodule.c"
        if ($307) { __label__ = 91; break; } else { __label__ = 92; break; } //@line 756 "_testcapimodule.c"
      case 91: // $bb88
        var $308=$num; //@line 756 "_testcapimodule.c"
        var $309=$308+4; //@line 756 "_testcapimodule.c"
        var $310=HEAP[$309]; //@line 756 "_testcapimodule.c"
        var $311=$310+24; //@line 756 "_testcapimodule.c"
        var $312=HEAP[$311]; //@line 756 "_testcapimodule.c"
        var $313=$num; //@line 756 "_testcapimodule.c"
        FUNCTION_TABLE[$312]($313); //@line 756 "_testcapimodule.c"
        __label__ = 92; break; //@line 756 "_testcapimodule.c"
      case 92: // $bb89
        var $314=$value; //@line 757 "_testcapimodule.c"
        var $315=($314)==-1; //@line 757 "_testcapimodule.c"
        if ($315) { __lastLabel__ = 92; __label__ = 93; break; } else { __lastLabel__ = 92; __label__ = 96; break; } //@line 757 "_testcapimodule.c"
      case 93: // $bb90
        var $316=_PyErr_Occurred(); //@line 757 "_testcapimodule.c"
        var $317=($316)!=0; //@line 757 "_testcapimodule.c"
        if ($317) { __label__ = 94; break; } else { __label__ = 95; break; } //@line 757 "_testcapimodule.c"
      case 94: // $bb91
        $0=0; //@line 758 "_testcapimodule.c"
        __label__ = 113; break; //@line 758 "_testcapimodule.c"
      case 95: // $bb92thread_pre_split
        var $_pr6=$value;
        __lastLabel__ = 95; __label__ = 96; break;
      case 96: // $bb92
        var $318=__lastLabel__ == 95 ? $_pr6 : ($314);
        var $319=($318)!=-9223372036854776000; //@line 759 "_testcapimodule.c"
        if ($319) { __label__ = 97; break; } else { __label__ = 98; break; } //@line 759 "_testcapimodule.c"
      case 97: // $bb93
        var $320=_raiseTestError(__str49, __str50); //@line 760 "_testcapimodule.c"
        $0=$320; //@line 760 "_testcapimodule.c"
        __label__ = 113; break; //@line 760 "_testcapimodule.c"
      case 98: // $bb94
        var $321=HEAP[$overflow]; //@line 762 "_testcapimodule.c"
        var $322=($321)!=0; //@line 762 "_testcapimodule.c"
        if ($322) { __label__ = 99; break; } else { __label__ = 100; break; } //@line 762 "_testcapimodule.c"
      case 99: // $bb95
        var $323=_raiseTestError(__str49, __str44); //@line 763 "_testcapimodule.c"
        $0=$323; //@line 763 "_testcapimodule.c"
        __label__ = 113; break; //@line 763 "_testcapimodule.c"
      case 100: // $bb96
        var $324=_PyLong_FromLongLong(-9223372036854776000); //@line 766 "_testcapimodule.c"
        $num=$324; //@line 766 "_testcapimodule.c"
        var $325=$num; //@line 767 "_testcapimodule.c"
        var $326=($325)==0; //@line 767 "_testcapimodule.c"
        if ($326) { __label__ = 101; break; } else { __label__ = 102; break; } //@line 767 "_testcapimodule.c"
      case 101: // $bb97
        $0=0; //@line 768 "_testcapimodule.c"
        __label__ = 113; break; //@line 768 "_testcapimodule.c"
      case 102: // $bb98
        HEAP[$overflow]=0; //@line 769 "_testcapimodule.c"
        var $327=$num; //@line 770 "_testcapimodule.c"
        var $328=_PyLong_AsLongLongAndOverflow($327, $overflow); //@line 770 "_testcapimodule.c"
        $value=$328; //@line 770 "_testcapimodule.c"
        var $329=$num; //@line 771 "_testcapimodule.c"
        var $330=$329; //@line 771 "_testcapimodule.c"
        var $331=HEAP[$330]; //@line 771 "_testcapimodule.c"
        var $332=($331) - 1; //@line 771 "_testcapimodule.c"
        var $333=$num; //@line 771 "_testcapimodule.c"
        var $334=$333; //@line 771 "_testcapimodule.c"
        HEAP[$334]=$332; //@line 771 "_testcapimodule.c"
        var $335=$num; //@line 771 "_testcapimodule.c"
        var $336=$335; //@line 771 "_testcapimodule.c"
        var $337=HEAP[$336]; //@line 771 "_testcapimodule.c"
        var $338=($337)==0; //@line 771 "_testcapimodule.c"
        if ($338) { __label__ = 103; break; } else { __label__ = 104; break; } //@line 771 "_testcapimodule.c"
      case 103: // $bb99
        var $339=$num; //@line 771 "_testcapimodule.c"
        var $340=$339+4; //@line 771 "_testcapimodule.c"
        var $341=HEAP[$340]; //@line 771 "_testcapimodule.c"
        var $342=$341+24; //@line 771 "_testcapimodule.c"
        var $343=HEAP[$342]; //@line 771 "_testcapimodule.c"
        var $344=$num; //@line 771 "_testcapimodule.c"
        FUNCTION_TABLE[$343]($344); //@line 771 "_testcapimodule.c"
        __label__ = 104; break; //@line 771 "_testcapimodule.c"
      case 104: // $bb100
        var $345=$value; //@line 772 "_testcapimodule.c"
        var $346=($345)==-1; //@line 772 "_testcapimodule.c"
        if ($346) { __lastLabel__ = 104; __label__ = 105; break; } else { __lastLabel__ = 104; __label__ = 108; break; } //@line 772 "_testcapimodule.c"
      case 105: // $bb101
        var $347=_PyErr_Occurred(); //@line 772 "_testcapimodule.c"
        var $348=($347)!=0; //@line 772 "_testcapimodule.c"
        if ($348) { __label__ = 106; break; } else { __label__ = 107; break; } //@line 772 "_testcapimodule.c"
      case 106: // $bb102
        $0=0; //@line 773 "_testcapimodule.c"
        __label__ = 113; break; //@line 773 "_testcapimodule.c"
      case 107: // $bb103thread_pre_split
        var $_pr7=$value;
        __lastLabel__ = 107; __label__ = 108; break;
      case 108: // $bb103
        var $349=__lastLabel__ == 107 ? $_pr7 : ($345);
        var $350=($349)!=-9223372036854776000; //@line 774 "_testcapimodule.c"
        if ($350) { __label__ = 109; break; } else { __label__ = 110; break; } //@line 774 "_testcapimodule.c"
      case 109: // $bb104
        var $351=_raiseTestError(__str49, __str51); //@line 775 "_testcapimodule.c"
        $0=$351; //@line 775 "_testcapimodule.c"
        __label__ = 113; break; //@line 775 "_testcapimodule.c"
      case 110: // $bb105
        var $352=HEAP[$overflow]; //@line 777 "_testcapimodule.c"
        var $353=($352)!=0; //@line 777 "_testcapimodule.c"
        if ($353) { __label__ = 111; break; } else { __label__ = 112; break; } //@line 777 "_testcapimodule.c"
      case 111: // $bb106
        var $354=_raiseTestError(__str49, __str44); //@line 778 "_testcapimodule.c"
        $0=$354; //@line 778 "_testcapimodule.c"
        __label__ = 113; break; //@line 778 "_testcapimodule.c"
      case 112: // $bb107
        var $355=HEAP[__Py_NoneStruct]; //@line 781 "_testcapimodule.c"
        var $356=($355) + 1; //@line 781 "_testcapimodule.c"
        HEAP[__Py_NoneStruct]=$356; //@line 781 "_testcapimodule.c"
        $0=__Py_NoneStruct; //@line 782 "_testcapimodule.c"
        __label__ = 113; break; //@line 782 "_testcapimodule.c"
      case 113: // $bb108
        var $357=$0; //@line 636 "_testcapimodule.c"
        $retval=$357; //@line 636 "_testcapimodule.c"
        var $retval109=$retval; //@line 636 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval109; //@line 636 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_L_code($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $tuple;
        var $num;
        var $value=__stackBase__;
        $self_addr=$self;
        var $1=_PyTuple_New(1); //@line 795 "_testcapimodule.c"
        $tuple=$1; //@line 795 "_testcapimodule.c"
        var $2=$tuple; //@line 796 "_testcapimodule.c"
        var $3=($2)==0; //@line 796 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 796 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 797 "_testcapimodule.c"
        __label__ = 19; break; //@line 797 "_testcapimodule.c"
      case 2: // $bb1
        var $4=_PyLong_FromLong(42); //@line 799 "_testcapimodule.c"
        $num=$4; //@line 799 "_testcapimodule.c"
        var $5=$num; //@line 800 "_testcapimodule.c"
        var $6=($5)==0; //@line 800 "_testcapimodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 800 "_testcapimodule.c"
      case 3: // $bb2
        $0=0; //@line 801 "_testcapimodule.c"
        __label__ = 19; break; //@line 801 "_testcapimodule.c"
      case 4: // $bb3
        var $7=$tuple; //@line 803 "_testcapimodule.c"
        var $8=$7; //@line 803 "_testcapimodule.c"
        var $9=$8+12; //@line 803 "_testcapimodule.c"
        var $10=$9; //@line 803 "_testcapimodule.c"
        var $11=$num; //@line 803 "_testcapimodule.c"
        HEAP[$10]=$11; //@line 803 "_testcapimodule.c"
        HEAP[$value]=-1; //@line 805 "_testcapimodule.c"
        var $12=$tuple; //@line 806 "_testcapimodule.c"
        var $13=_PyArg_ParseTuple($12, __str52, allocate([$value,0,0,0], ["i64*",0,0,0], ALLOC_STACK)); //@line 806 "_testcapimodule.c"
        var $14=($13) < 0; //@line 806 "_testcapimodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 806 "_testcapimodule.c"
      case 5: // $bb4
        $0=0; //@line 807 "_testcapimodule.c"
        __label__ = 19; break; //@line 807 "_testcapimodule.c"
      case 6: // $bb5
        var $15=HEAP[$value]; //@line 808 "_testcapimodule.c"
        var $16=($15)!=42; //@line 808 "_testcapimodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 808 "_testcapimodule.c"
      case 7: // $bb6
        var $17=_raiseTestError(__str53, __str54); //@line 809 "_testcapimodule.c"
        $0=$17; //@line 809 "_testcapimodule.c"
        __label__ = 19; break; //@line 809 "_testcapimodule.c"
      case 8: // $bb7
        var $18=$num; //@line 812 "_testcapimodule.c"
        var $19=$18; //@line 812 "_testcapimodule.c"
        var $20=HEAP[$19]; //@line 812 "_testcapimodule.c"
        var $21=($20) - 1; //@line 812 "_testcapimodule.c"
        var $22=$num; //@line 812 "_testcapimodule.c"
        var $23=$22; //@line 812 "_testcapimodule.c"
        HEAP[$23]=$21; //@line 812 "_testcapimodule.c"
        var $24=$num; //@line 812 "_testcapimodule.c"
        var $25=$24; //@line 812 "_testcapimodule.c"
        var $26=HEAP[$25]; //@line 812 "_testcapimodule.c"
        var $27=($26)==0; //@line 812 "_testcapimodule.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 812 "_testcapimodule.c"
      case 9: // $bb8
        var $28=$num; //@line 812 "_testcapimodule.c"
        var $29=$28+4; //@line 812 "_testcapimodule.c"
        var $30=HEAP[$29]; //@line 812 "_testcapimodule.c"
        var $31=$30+24; //@line 812 "_testcapimodule.c"
        var $32=HEAP[$31]; //@line 812 "_testcapimodule.c"
        var $33=$num; //@line 812 "_testcapimodule.c"
        FUNCTION_TABLE[$32]($33); //@line 812 "_testcapimodule.c"
        __label__ = 10; break; //@line 812 "_testcapimodule.c"
      case 10: // $bb9
        var $34=_PyInt_FromLong(42); //@line 813 "_testcapimodule.c"
        $num=$34; //@line 813 "_testcapimodule.c"
        var $35=($34)==0; //@line 814 "_testcapimodule.c"
        if ($35) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 814 "_testcapimodule.c"
      case 11: // $bb10
        $0=0; //@line 815 "_testcapimodule.c"
        __label__ = 19; break; //@line 815 "_testcapimodule.c"
      case 12: // $bb11
        var $36=$tuple; //@line 817 "_testcapimodule.c"
        var $37=$36; //@line 817 "_testcapimodule.c"
        var $38=$37+12; //@line 817 "_testcapimodule.c"
        var $39=$38; //@line 817 "_testcapimodule.c"
        var $40=$num; //@line 817 "_testcapimodule.c"
        HEAP[$39]=$40; //@line 817 "_testcapimodule.c"
        HEAP[$value]=-1; //@line 819 "_testcapimodule.c"
        var $41=$tuple; //@line 820 "_testcapimodule.c"
        var $42=_PyArg_ParseTuple($41, __str52, allocate([$value,0,0,0], ["i64*",0,0,0], ALLOC_STACK)); //@line 820 "_testcapimodule.c"
        var $43=($42) < 0; //@line 820 "_testcapimodule.c"
        if ($43) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 820 "_testcapimodule.c"
      case 13: // $bb12
        $0=0; //@line 821 "_testcapimodule.c"
        __label__ = 19; break; //@line 821 "_testcapimodule.c"
      case 14: // $bb13
        var $44=HEAP[$value]; //@line 822 "_testcapimodule.c"
        var $45=($44)!=42; //@line 822 "_testcapimodule.c"
        if ($45) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 822 "_testcapimodule.c"
      case 15: // $bb14
        var $46=_raiseTestError(__str53, __str55); //@line 823 "_testcapimodule.c"
        $0=$46; //@line 823 "_testcapimodule.c"
        __label__ = 19; break; //@line 823 "_testcapimodule.c"
      case 16: // $bb15
        var $47=$tuple; //@line 826 "_testcapimodule.c"
        var $48=$47; //@line 826 "_testcapimodule.c"
        var $49=HEAP[$48]; //@line 826 "_testcapimodule.c"
        var $50=($49) - 1; //@line 826 "_testcapimodule.c"
        var $51=$tuple; //@line 826 "_testcapimodule.c"
        var $52=$51; //@line 826 "_testcapimodule.c"
        HEAP[$52]=$50; //@line 826 "_testcapimodule.c"
        var $53=$tuple; //@line 826 "_testcapimodule.c"
        var $54=$53; //@line 826 "_testcapimodule.c"
        var $55=HEAP[$54]; //@line 826 "_testcapimodule.c"
        var $56=($55)==0; //@line 826 "_testcapimodule.c"
        if ($56) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 826 "_testcapimodule.c"
      case 17: // $bb16
        var $57=$tuple; //@line 826 "_testcapimodule.c"
        var $58=$57+4; //@line 826 "_testcapimodule.c"
        var $59=HEAP[$58]; //@line 826 "_testcapimodule.c"
        var $60=$59+24; //@line 826 "_testcapimodule.c"
        var $61=HEAP[$60]; //@line 826 "_testcapimodule.c"
        var $62=$tuple; //@line 826 "_testcapimodule.c"
        FUNCTION_TABLE[$61]($62); //@line 826 "_testcapimodule.c"
        __label__ = 18; break; //@line 826 "_testcapimodule.c"
      case 18: // $bb17
        var $63=HEAP[__Py_NoneStruct]; //@line 827 "_testcapimodule.c"
        var $64=($63) + 1; //@line 827 "_testcapimodule.c"
        HEAP[__Py_NoneStruct]=$64; //@line 827 "_testcapimodule.c"
        $0=__Py_NoneStruct; //@line 828 "_testcapimodule.c"
        __label__ = 19; break; //@line 828 "_testcapimodule.c"
      case 19: // $bb18
        var $65=$0; //@line 797 "_testcapimodule.c"
        $retval=$65; //@line 797 "_testcapimodule.c"
        var $retval19=$retval; //@line 797 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 797 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_tuple($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $a=__stackBase__;
        var $b=__stackBase__+4;
        var $c=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 838 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, __str56, allocate([$a,0,0,0,$b,0,0,0,$c,0,0,0], ["i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 838 "_testcapimodule.c"
        var $3=($2)==0; //@line 838 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 838 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 839 "_testcapimodule.c"
        __label__ = 3; break; //@line 839 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$c]; //@line 840 "_testcapimodule.c"
        var $5=HEAP[$b]; //@line 840 "_testcapimodule.c"
        var $6=HEAP[$a]; //@line 840 "_testcapimodule.c"
        var $7=_Py_BuildValue(__str57, allocate([$6,0,0,0,$5,0,0,0,$4,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 840 "_testcapimodule.c"
        $0=$7; //@line 840 "_testcapimodule.c"
        __label__ = 3; break; //@line 840 "_testcapimodule.c"
      case 3: // $bb2
        var $8=$0; //@line 839 "_testcapimodule.c"
        $retval=$8; //@line 839 "_testcapimodule.c"
        var $retval3=$retval; //@line 839 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 839 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_keywords($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwargs_addr;
        var $retval;
        var $0;
        var $int_args=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        $kwargs_addr=$kwargs;
        var $int_args1=$int_args; //@line 848 "_testcapimodule.c"
        _llvm_memset_p0i8_i32($int_args1, -1, 40, 4, 0);
        var $1=$args_addr; //@line 850 "_testcapimodule.c"
        var $2=$kwargs_addr; //@line 850 "_testcapimodule.c"
        var $3=$int_args; //@line 850 "_testcapimodule.c"
        var $4=$int_args+4; //@line 850 "_testcapimodule.c"
        var $5=$int_args+8; //@line 850 "_testcapimodule.c"
        var $6=$int_args+12; //@line 850 "_testcapimodule.c"
        var $7=$int_args+16; //@line 850 "_testcapimodule.c"
        var $8=$int_args+20; //@line 850 "_testcapimodule.c"
        var $9=$int_args+24; //@line 850 "_testcapimodule.c"
        var $10=$int_args+28; //@line 850 "_testcapimodule.c"
        var $11=$int_args+32; //@line 850 "_testcapimodule.c"
        var $12=$int_args+36; //@line 850 "_testcapimodule.c"
        var $13=_PyArg_ParseTupleAndKeywords($1, $2, __str58, _keywords_9777, allocate([$3,0,0,0,$4,0,0,0,$5,0,0,0,$6,0,0,0,$7,0,0,0,$8,0,0,0,$9,0,0,0,$10,0,0,0,$11,0,0,0,$12,0,0,0], ["i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 850 "_testcapimodule.c"
        var $14=($13)==0; //@line 850 "_testcapimodule.c"
        if ($14) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 850 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 853 "_testcapimodule.c"
        __label__ = 3; break; //@line 853 "_testcapimodule.c"
      case 2: // $bb2
        var $15=$int_args+36; //@line 854 "_testcapimodule.c"
        var $16=HEAP[$15]; //@line 854 "_testcapimodule.c"
        var $17=$int_args+32; //@line 854 "_testcapimodule.c"
        var $18=HEAP[$17]; //@line 854 "_testcapimodule.c"
        var $19=$int_args+28; //@line 854 "_testcapimodule.c"
        var $20=HEAP[$19]; //@line 854 "_testcapimodule.c"
        var $21=$int_args+24; //@line 854 "_testcapimodule.c"
        var $22=HEAP[$21]; //@line 854 "_testcapimodule.c"
        var $23=$int_args+20; //@line 854 "_testcapimodule.c"
        var $24=HEAP[$23]; //@line 854 "_testcapimodule.c"
        var $25=$int_args+16; //@line 854 "_testcapimodule.c"
        var $26=HEAP[$25]; //@line 854 "_testcapimodule.c"
        var $27=$int_args+12; //@line 854 "_testcapimodule.c"
        var $28=HEAP[$27]; //@line 854 "_testcapimodule.c"
        var $29=$int_args+8; //@line 854 "_testcapimodule.c"
        var $30=HEAP[$29]; //@line 854 "_testcapimodule.c"
        var $31=$int_args+4; //@line 854 "_testcapimodule.c"
        var $32=HEAP[$31]; //@line 854 "_testcapimodule.c"
        var $33=$int_args; //@line 854 "_testcapimodule.c"
        var $34=HEAP[$33]; //@line 854 "_testcapimodule.c"
        var $35=_Py_BuildValue(__str64, allocate([$34,0,0,0,$32,0,0,0,$30,0,0,0,$28,0,0,0,$26,0,0,0,$24,0,0,0,$22,0,0,0,$20,0,0,0,$18,0,0,0,$16,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 854 "_testcapimodule.c"
        $0=$35; //@line 854 "_testcapimodule.c"
        __label__ = 3; break; //@line 854 "_testcapimodule.c"
      case 3: // $bb3
        var $36=$0; //@line 853 "_testcapimodule.c"
        $retval=$36; //@line 853 "_testcapimodule.c"
        var $retval4=$retval; //@line 853 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 853 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_b($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 1; _memset(__stackBase__, 0, 1);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $value=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 866 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, __str65, allocate([$value,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 866 "_testcapimodule.c"
        var $3=($2)==0; //@line 866 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 866 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 867 "_testcapimodule.c"
        __label__ = 3; break; //@line 867 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 868 "_testcapimodule.c"
        var $5=($4); //@line 868 "_testcapimodule.c"
        var $6=_PyLong_FromUnsignedLong($5); //@line 868 "_testcapimodule.c"
        $0=$6; //@line 868 "_testcapimodule.c"
        __label__ = 3; break; //@line 868 "_testcapimodule.c"
      case 3: // $bb2
        var $7=$0; //@line 867 "_testcapimodule.c"
        $retval=$7; //@line 867 "_testcapimodule.c"
        var $retval3=$retval; //@line 867 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 867 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_B($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 1; _memset(__stackBase__, 0, 1);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $value=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 875 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, __str66, allocate([$value,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 875 "_testcapimodule.c"
        var $3=($2)==0; //@line 875 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 875 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 876 "_testcapimodule.c"
        __label__ = 3; break; //@line 876 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 877 "_testcapimodule.c"
        var $5=($4); //@line 877 "_testcapimodule.c"
        var $6=_PyLong_FromUnsignedLong($5); //@line 877 "_testcapimodule.c"
        $0=$6; //@line 877 "_testcapimodule.c"
        __label__ = 3; break; //@line 877 "_testcapimodule.c"
      case 3: // $bb2
        var $7=$0; //@line 876 "_testcapimodule.c"
        $retval=$7; //@line 876 "_testcapimodule.c"
        var $retval3=$retval; //@line 876 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 876 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_h($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 2; _memset(__stackBase__, 0, 2);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $value=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 884 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, __str67, allocate([$value,0,0,0], ["i16*",0,0,0], ALLOC_STACK)); //@line 884 "_testcapimodule.c"
        var $3=($2)==0; //@line 884 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 884 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 885 "_testcapimodule.c"
        __label__ = 3; break; //@line 885 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 886 "_testcapimodule.c"
        var $5=($4); //@line 886 "_testcapimodule.c"
        var $6=_PyLong_FromLong($5); //@line 886 "_testcapimodule.c"
        $0=$6; //@line 886 "_testcapimodule.c"
        __label__ = 3; break; //@line 886 "_testcapimodule.c"
      case 3: // $bb2
        var $7=$0; //@line 885 "_testcapimodule.c"
        $retval=$7; //@line 885 "_testcapimodule.c"
        var $retval3=$retval; //@line 885 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 885 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_H($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 2; _memset(__stackBase__, 0, 2);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $value=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 893 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, __str68, allocate([$value,0,0,0], ["i16*",0,0,0], ALLOC_STACK)); //@line 893 "_testcapimodule.c"
        var $3=($2)==0; //@line 893 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 893 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 894 "_testcapimodule.c"
        __label__ = 3; break; //@line 894 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 895 "_testcapimodule.c"
        var $5=($4); //@line 895 "_testcapimodule.c"
        var $6=_PyLong_FromUnsignedLong($5); //@line 895 "_testcapimodule.c"
        $0=$6; //@line 895 "_testcapimodule.c"
        __label__ = 3; break; //@line 895 "_testcapimodule.c"
      case 3: // $bb2
        var $7=$0; //@line 894 "_testcapimodule.c"
        $retval=$7; //@line 894 "_testcapimodule.c"
        var $retval3=$retval; //@line 894 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 894 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_I($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $value=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 902 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, __str69, allocate([$value,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 902 "_testcapimodule.c"
        var $3=($2)==0; //@line 902 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 902 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 903 "_testcapimodule.c"
        __label__ = 3; break; //@line 903 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 904 "_testcapimodule.c"
        var $5=_PyLong_FromUnsignedLong($4); //@line 904 "_testcapimodule.c"
        $0=$5; //@line 904 "_testcapimodule.c"
        __label__ = 3; break; //@line 904 "_testcapimodule.c"
      case 3: // $bb2
        var $6=$0; //@line 903 "_testcapimodule.c"
        $retval=$6; //@line 903 "_testcapimodule.c"
        var $retval3=$retval; //@line 903 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 903 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_k($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $value=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 911 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, __str70, allocate([$value,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 911 "_testcapimodule.c"
        var $3=($2)==0; //@line 911 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 911 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 912 "_testcapimodule.c"
        __label__ = 3; break; //@line 912 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 913 "_testcapimodule.c"
        var $5=_PyLong_FromUnsignedLong($4); //@line 913 "_testcapimodule.c"
        $0=$5; //@line 913 "_testcapimodule.c"
        __label__ = 3; break; //@line 913 "_testcapimodule.c"
      case 3: // $bb2
        var $6=$0; //@line 912 "_testcapimodule.c"
        $retval=$6; //@line 912 "_testcapimodule.c"
        var $retval3=$retval; //@line 912 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 912 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_i($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $value=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 920 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, __str71, allocate([$value,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 920 "_testcapimodule.c"
        var $3=($2)==0; //@line 920 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 920 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 921 "_testcapimodule.c"
        __label__ = 3; break; //@line 921 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 922 "_testcapimodule.c"
        var $5=_PyLong_FromLong($4); //@line 922 "_testcapimodule.c"
        $0=$5; //@line 922 "_testcapimodule.c"
        __label__ = 3; break; //@line 922 "_testcapimodule.c"
      case 3: // $bb2
        var $6=$0; //@line 921 "_testcapimodule.c"
        $retval=$6; //@line 921 "_testcapimodule.c"
        var $retval3=$retval; //@line 921 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 921 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_l($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $value=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 929 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, __str72, allocate([$value,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 929 "_testcapimodule.c"
        var $3=($2)==0; //@line 929 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 929 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 930 "_testcapimodule.c"
        __label__ = 3; break; //@line 930 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 931 "_testcapimodule.c"
        var $5=_PyLong_FromLong($4); //@line 931 "_testcapimodule.c"
        $0=$5; //@line 931 "_testcapimodule.c"
        __label__ = 3; break; //@line 931 "_testcapimodule.c"
      case 3: // $bb2
        var $6=$0; //@line 930 "_testcapimodule.c"
        $retval=$6; //@line 930 "_testcapimodule.c"
        var $retval3=$retval; //@line 930 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 930 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_n($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $value=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 938 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, __str73, allocate([$value,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 938 "_testcapimodule.c"
        var $3=($2)==0; //@line 938 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 938 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 939 "_testcapimodule.c"
        __label__ = 3; break; //@line 939 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 940 "_testcapimodule.c"
        var $5=_PyInt_FromSsize_t($4); //@line 940 "_testcapimodule.c"
        $0=$5; //@line 940 "_testcapimodule.c"
        __label__ = 3; break; //@line 940 "_testcapimodule.c"
      case 3: // $bb2
        var $6=$0; //@line 939 "_testcapimodule.c"
        $retval=$6; //@line 939 "_testcapimodule.c"
        var $retval3=$retval; //@line 939 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 939 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_L($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $value=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 948 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, __str74, allocate([$value,0,0,0], ["i64*",0,0,0], ALLOC_STACK)); //@line 948 "_testcapimodule.c"
        var $3=($2)==0; //@line 948 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 948 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 949 "_testcapimodule.c"
        __label__ = 3; break; //@line 949 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 950 "_testcapimodule.c"
        var $5=_PyLong_FromLongLong($4); //@line 950 "_testcapimodule.c"
        $0=$5; //@line 950 "_testcapimodule.c"
        __label__ = 3; break; //@line 950 "_testcapimodule.c"
      case 3: // $bb2
        var $6=$0; //@line 949 "_testcapimodule.c"
        $retval=$6; //@line 949 "_testcapimodule.c"
        var $retval3=$retval; //@line 949 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 949 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_K($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $value=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 957 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, __str75, allocate([$value,0,0,0], ["i64*",0,0,0], ALLOC_STACK)); //@line 957 "_testcapimodule.c"
        var $3=($2)==0; //@line 957 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 957 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 958 "_testcapimodule.c"
        __label__ = 3; break; //@line 958 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 959 "_testcapimodule.c"
        var $5=_PyLong_FromUnsignedLongLong($4); //@line 959 "_testcapimodule.c"
        $0=$5; //@line 959 "_testcapimodule.c"
        __label__ = 3; break; //@line 959 "_testcapimodule.c"
      case 3: // $bb2
        var $6=$0; //@line 958 "_testcapimodule.c"
        $retval=$6; //@line 958 "_testcapimodule.c"
        var $retval3=$retval; //@line 958 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 958 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_k_code($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $tuple;
        var $num;
        var $value=__stackBase__;
        $self_addr=$self;
        var $1=_PyTuple_New(1); //@line 971 "_testcapimodule.c"
        $tuple=$1; //@line 971 "_testcapimodule.c"
        var $2=$tuple; //@line 972 "_testcapimodule.c"
        var $3=($2)==0; //@line 972 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 972 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 973 "_testcapimodule.c"
        __label__ = 23; break; //@line 973 "_testcapimodule.c"
      case 2: // $bb1
        var $4=_PyLong_FromString(__str36, 0, 16); //@line 976 "_testcapimodule.c"
        $num=$4; //@line 976 "_testcapimodule.c"
        var $5=$num; //@line 977 "_testcapimodule.c"
        var $6=($5)==0; //@line 977 "_testcapimodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 977 "_testcapimodule.c"
      case 3: // $bb2
        $0=0; //@line 978 "_testcapimodule.c"
        __label__ = 23; break; //@line 978 "_testcapimodule.c"
      case 4: // $bb3
        var $7=$num; //@line 980 "_testcapimodule.c"
        var $8=_PyInt_AsUnsignedLongMask($7); //@line 980 "_testcapimodule.c"
        HEAP[$value]=$8; //@line 980 "_testcapimodule.c"
        var $9=HEAP[$value]; //@line 981 "_testcapimodule.c"
        var $10=($9)!=-1; //@line 981 "_testcapimodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 981 "_testcapimodule.c"
      case 5: // $bb4
        var $11=_raiseTestError(__str76, __str77); //@line 982 "_testcapimodule.c"
        $0=$11; //@line 982 "_testcapimodule.c"
        __label__ = 23; break; //@line 982 "_testcapimodule.c"
      case 6: // $bb5
        var $12=$tuple; //@line 985 "_testcapimodule.c"
        var $13=$12; //@line 985 "_testcapimodule.c"
        var $14=$13+12; //@line 985 "_testcapimodule.c"
        var $15=$14; //@line 985 "_testcapimodule.c"
        var $16=$num; //@line 985 "_testcapimodule.c"
        HEAP[$15]=$16; //@line 985 "_testcapimodule.c"
        HEAP[$value]=0; //@line 987 "_testcapimodule.c"
        var $17=$tuple; //@line 988 "_testcapimodule.c"
        var $18=_PyArg_ParseTuple($17, __str78, allocate([$value,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 988 "_testcapimodule.c"
        var $19=($18) < 0; //@line 988 "_testcapimodule.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 988 "_testcapimodule.c"
      case 7: // $bb6
        $0=0; //@line 989 "_testcapimodule.c"
        __label__ = 23; break; //@line 989 "_testcapimodule.c"
      case 8: // $bb7
        var $20=HEAP[$value]; //@line 990 "_testcapimodule.c"
        var $21=($20)!=-1; //@line 990 "_testcapimodule.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 990 "_testcapimodule.c"
      case 9: // $bb8
        var $22=_raiseTestError(__str76, __str79); //@line 991 "_testcapimodule.c"
        $0=$22; //@line 991 "_testcapimodule.c"
        __label__ = 23; break; //@line 991 "_testcapimodule.c"
      case 10: // $bb9
        var $23=$num; //@line 994 "_testcapimodule.c"
        var $24=$23; //@line 994 "_testcapimodule.c"
        var $25=HEAP[$24]; //@line 994 "_testcapimodule.c"
        var $26=($25) - 1; //@line 994 "_testcapimodule.c"
        var $27=$num; //@line 994 "_testcapimodule.c"
        var $28=$27; //@line 994 "_testcapimodule.c"
        HEAP[$28]=$26; //@line 994 "_testcapimodule.c"
        var $29=$num; //@line 994 "_testcapimodule.c"
        var $30=$29; //@line 994 "_testcapimodule.c"
        var $31=HEAP[$30]; //@line 994 "_testcapimodule.c"
        var $32=($31)==0; //@line 994 "_testcapimodule.c"
        if ($32) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 994 "_testcapimodule.c"
      case 11: // $bb10
        var $33=$num; //@line 994 "_testcapimodule.c"
        var $34=$33+4; //@line 994 "_testcapimodule.c"
        var $35=HEAP[$34]; //@line 994 "_testcapimodule.c"
        var $36=$35+24; //@line 994 "_testcapimodule.c"
        var $37=HEAP[$36]; //@line 994 "_testcapimodule.c"
        var $38=$num; //@line 994 "_testcapimodule.c"
        FUNCTION_TABLE[$37]($38); //@line 994 "_testcapimodule.c"
        __label__ = 12; break; //@line 994 "_testcapimodule.c"
      case 12: // $bb11
        var $39=_PyLong_FromString(__str80, 0, 16); //@line 995 "_testcapimodule.c"
        $num=$39; //@line 995 "_testcapimodule.c"
        var $40=($39)==0; //@line 996 "_testcapimodule.c"
        if ($40) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 996 "_testcapimodule.c"
      case 13: // $bb12
        $0=0; //@line 997 "_testcapimodule.c"
        __label__ = 23; break; //@line 997 "_testcapimodule.c"
      case 14: // $bb13
        var $41=$num; //@line 999 "_testcapimodule.c"
        var $42=_PyInt_AsUnsignedLongMask($41); //@line 999 "_testcapimodule.c"
        HEAP[$value]=$42; //@line 999 "_testcapimodule.c"
        var $43=HEAP[$value]; //@line 1000 "_testcapimodule.c"
        var $44=($43)!=-66; //@line 1000 "_testcapimodule.c"
        if ($44) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1000 "_testcapimodule.c"
      case 15: // $bb14
        var $45=_raiseTestError(__str76, __str77); //@line 1001 "_testcapimodule.c"
        $0=$45; //@line 1001 "_testcapimodule.c"
        __label__ = 23; break; //@line 1001 "_testcapimodule.c"
      case 16: // $bb15
        var $46=$tuple; //@line 1004 "_testcapimodule.c"
        var $47=$46; //@line 1004 "_testcapimodule.c"
        var $48=$47+12; //@line 1004 "_testcapimodule.c"
        var $49=$48; //@line 1004 "_testcapimodule.c"
        var $50=$num; //@line 1004 "_testcapimodule.c"
        HEAP[$49]=$50; //@line 1004 "_testcapimodule.c"
        HEAP[$value]=0; //@line 1006 "_testcapimodule.c"
        var $51=$tuple; //@line 1007 "_testcapimodule.c"
        var $52=_PyArg_ParseTuple($51, __str78, allocate([$value,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 1007 "_testcapimodule.c"
        var $53=($52) < 0; //@line 1007 "_testcapimodule.c"
        if ($53) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1007 "_testcapimodule.c"
      case 17: // $bb16
        $0=0; //@line 1008 "_testcapimodule.c"
        __label__ = 23; break; //@line 1008 "_testcapimodule.c"
      case 18: // $bb17
        var $54=HEAP[$value]; //@line 1009 "_testcapimodule.c"
        var $55=($54)!=-66; //@line 1009 "_testcapimodule.c"
        if ($55) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1009 "_testcapimodule.c"
      case 19: // $bb18
        var $56=_raiseTestError(__str76, __str81); //@line 1010 "_testcapimodule.c"
        $0=$56; //@line 1010 "_testcapimodule.c"
        __label__ = 23; break; //@line 1010 "_testcapimodule.c"
      case 20: // $bb19
        var $57=$tuple; //@line 1013 "_testcapimodule.c"
        var $58=$57; //@line 1013 "_testcapimodule.c"
        var $59=HEAP[$58]; //@line 1013 "_testcapimodule.c"
        var $60=($59) - 1; //@line 1013 "_testcapimodule.c"
        var $61=$tuple; //@line 1013 "_testcapimodule.c"
        var $62=$61; //@line 1013 "_testcapimodule.c"
        HEAP[$62]=$60; //@line 1013 "_testcapimodule.c"
        var $63=$tuple; //@line 1013 "_testcapimodule.c"
        var $64=$63; //@line 1013 "_testcapimodule.c"
        var $65=HEAP[$64]; //@line 1013 "_testcapimodule.c"
        var $66=($65)==0; //@line 1013 "_testcapimodule.c"
        if ($66) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1013 "_testcapimodule.c"
      case 21: // $bb20
        var $67=$tuple; //@line 1013 "_testcapimodule.c"
        var $68=$67+4; //@line 1013 "_testcapimodule.c"
        var $69=HEAP[$68]; //@line 1013 "_testcapimodule.c"
        var $70=$69+24; //@line 1013 "_testcapimodule.c"
        var $71=HEAP[$70]; //@line 1013 "_testcapimodule.c"
        var $72=$tuple; //@line 1013 "_testcapimodule.c"
        FUNCTION_TABLE[$71]($72); //@line 1013 "_testcapimodule.c"
        __label__ = 22; break; //@line 1013 "_testcapimodule.c"
      case 22: // $bb21
        var $73=HEAP[__Py_NoneStruct]; //@line 1014 "_testcapimodule.c"
        var $74=($73) + 1; //@line 1014 "_testcapimodule.c"
        HEAP[__Py_NoneStruct]=$74; //@line 1014 "_testcapimodule.c"
        $0=__Py_NoneStruct; //@line 1015 "_testcapimodule.c"
        __label__ = 23; break; //@line 1015 "_testcapimodule.c"
      case 23: // $bb22
        var $75=$0; //@line 973 "_testcapimodule.c"
        $retval=$75; //@line 973 "_testcapimodule.c"
        var $retval23=$retval; //@line 973 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval23; //@line 973 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_u_code($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $tuple;
        var $obj;
        var $value=__stackBase__;
        var $len=__stackBase__+4;
        $self_addr=$self;
        var $1=HEAP[__Py_ascii_whitespace+25]; //@line 1034 "_testcapimodule.c"
        var $2=($1); //@line 1034 "_testcapimodule.c"
        HEAP[_x]=$2; //@line 1034 "_testcapimodule.c"
        var $3=_PyTuple_New(1); //@line 1036 "_testcapimodule.c"
        $tuple=$3; //@line 1036 "_testcapimodule.c"
        var $4=$tuple; //@line 1037 "_testcapimodule.c"
        var $5=($4)==0; //@line 1037 "_testcapimodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1037 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 1038 "_testcapimodule.c"
        __label__ = 16; break; //@line 1038 "_testcapimodule.c"
      case 2: // $bb1
        var $6=_PyUnicodeUCS2_Decode(__str82, 4, __str83, 0); //@line 1040 "_testcapimodule.c"
        $obj=$6; //@line 1040 "_testcapimodule.c"
        var $7=$obj; //@line 1042 "_testcapimodule.c"
        var $8=($7)==0; //@line 1042 "_testcapimodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1042 "_testcapimodule.c"
      case 3: // $bb2
        $0=0; //@line 1043 "_testcapimodule.c"
        __label__ = 16; break; //@line 1043 "_testcapimodule.c"
      case 4: // $bb3
        var $9=$tuple; //@line 1045 "_testcapimodule.c"
        var $10=$9; //@line 1045 "_testcapimodule.c"
        var $11=$10+12; //@line 1045 "_testcapimodule.c"
        var $12=$11; //@line 1045 "_testcapimodule.c"
        var $13=$obj; //@line 1045 "_testcapimodule.c"
        HEAP[$12]=$13; //@line 1045 "_testcapimodule.c"
        HEAP[$value]=0; //@line 1047 "_testcapimodule.c"
        var $14=$tuple; //@line 1048 "_testcapimodule.c"
        var $15=_PyArg_ParseTuple($14, __str84, allocate([$value,0,0,0], ["i16**",0,0,0], ALLOC_STACK)); //@line 1048 "_testcapimodule.c"
        var $16=($15) < 0; //@line 1048 "_testcapimodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1048 "_testcapimodule.c"
      case 5: // $bb4
        $0=0; //@line 1049 "_testcapimodule.c"
        __label__ = 16; break; //@line 1049 "_testcapimodule.c"
      case 6: // $bb5
        var $17=$obj; //@line 1050 "_testcapimodule.c"
        var $18=$17; //@line 1050 "_testcapimodule.c"
        var $19=$18+12; //@line 1050 "_testcapimodule.c"
        var $20=HEAP[$19]; //@line 1050 "_testcapimodule.c"
        var $21=HEAP[$value]; //@line 1050 "_testcapimodule.c"
        var $22=($20)!=($21); //@line 1050 "_testcapimodule.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1050 "_testcapimodule.c"
      case 7: // $bb6
        var $23=_raiseTestError(__str85, __str86); //@line 1051 "_testcapimodule.c"
        $0=$23; //@line 1051 "_testcapimodule.c"
        __label__ = 16; break; //@line 1051 "_testcapimodule.c"
      case 8: // $bb7
        HEAP[$value]=0; //@line 1053 "_testcapimodule.c"
        var $24=$tuple; //@line 1054 "_testcapimodule.c"
        var $25=_PyArg_ParseTuple($24, __str87, allocate([$value,0,0,0,$len,0,0,0], ["i16**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1054 "_testcapimodule.c"
        var $26=($25) < 0; //@line 1054 "_testcapimodule.c"
        if ($26) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1054 "_testcapimodule.c"
      case 9: // $bb8
        $0=0; //@line 1055 "_testcapimodule.c"
        __label__ = 16; break; //@line 1055 "_testcapimodule.c"
      case 10: // $bb9
        var $27=$obj; //@line 1056 "_testcapimodule.c"
        var $28=$27; //@line 1056 "_testcapimodule.c"
        var $29=$28+12; //@line 1056 "_testcapimodule.c"
        var $30=HEAP[$29]; //@line 1056 "_testcapimodule.c"
        var $31=HEAP[$value]; //@line 1056 "_testcapimodule.c"
        var $32=($30)!=($31); //@line 1056 "_testcapimodule.c"
        if ($32) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 1056 "_testcapimodule.c"
      case 11: // $bb10
        var $33=$obj; //@line 1056 "_testcapimodule.c"
        var $34=$33; //@line 1056 "_testcapimodule.c"
        var $35=$34+8; //@line 1056 "_testcapimodule.c"
        var $36=HEAP[$35]; //@line 1056 "_testcapimodule.c"
        var $37=HEAP[$len]; //@line 1056 "_testcapimodule.c"
        var $38=($36)!=($37); //@line 1056 "_testcapimodule.c"
        if ($38) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1056 "_testcapimodule.c"
      case 12: // $bb11
        var $39=_raiseTestError(__str85, __str88); //@line 1058 "_testcapimodule.c"
        $0=$39; //@line 1058 "_testcapimodule.c"
        __label__ = 16; break; //@line 1058 "_testcapimodule.c"
      case 13: // $bb12
        var $40=$tuple; //@line 1061 "_testcapimodule.c"
        var $41=$40; //@line 1061 "_testcapimodule.c"
        var $42=HEAP[$41]; //@line 1061 "_testcapimodule.c"
        var $43=($42) - 1; //@line 1061 "_testcapimodule.c"
        var $44=$tuple; //@line 1061 "_testcapimodule.c"
        var $45=$44; //@line 1061 "_testcapimodule.c"
        HEAP[$45]=$43; //@line 1061 "_testcapimodule.c"
        var $46=$tuple; //@line 1061 "_testcapimodule.c"
        var $47=$46; //@line 1061 "_testcapimodule.c"
        var $48=HEAP[$47]; //@line 1061 "_testcapimodule.c"
        var $49=($48)==0; //@line 1061 "_testcapimodule.c"
        if ($49) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1061 "_testcapimodule.c"
      case 14: // $bb13
        var $50=$tuple; //@line 1061 "_testcapimodule.c"
        var $51=$50+4; //@line 1061 "_testcapimodule.c"
        var $52=HEAP[$51]; //@line 1061 "_testcapimodule.c"
        var $53=$52+24; //@line 1061 "_testcapimodule.c"
        var $54=HEAP[$53]; //@line 1061 "_testcapimodule.c"
        var $55=$tuple; //@line 1061 "_testcapimodule.c"
        FUNCTION_TABLE[$54]($55); //@line 1061 "_testcapimodule.c"
        __label__ = 15; break; //@line 1061 "_testcapimodule.c"
      case 15: // $bb14
        var $56=HEAP[__Py_NoneStruct]; //@line 1062 "_testcapimodule.c"
        var $57=($56) + 1; //@line 1062 "_testcapimodule.c"
        HEAP[__Py_NoneStruct]=$57; //@line 1062 "_testcapimodule.c"
        $0=__Py_NoneStruct; //@line 1063 "_testcapimodule.c"
        __label__ = 16; break; //@line 1063 "_testcapimodule.c"
      case 16: // $bb15
        var $58=$0; //@line 1038 "_testcapimodule.c"
        $retval=$58; //@line 1038 "_testcapimodule.c"
        var $retval16=$retval; //@line 1038 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 1038 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_widechar($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $wtext=__stackBase__;
        var $wtextlen;
        var $wide;
        var $utf8;
        $self_addr=$self;
        var $1=$wtext+4; //@line 1070 "_testcapimodule.c"
        HEAP[$1]=0; //@line 1070 "_testcapimodule.c"
        var $2=$wtext; //@line 1070 "_testcapimodule.c"
        HEAP[$2]=1092557; //@line 1070 "_testcapimodule.c"
        $wtextlen=1; //@line 1071 "_testcapimodule.c"
        var $3=$wtextlen; //@line 1078 "_testcapimodule.c"
        var $wtext1=$wtext; //@line 1078 "_testcapimodule.c"
        var $4=_PyUnicodeUCS2_FromWideChar($wtext1, $3); //@line 1078 "_testcapimodule.c"
        $wide=$4; //@line 1078 "_testcapimodule.c"
        var $5=$wide; //@line 1079 "_testcapimodule.c"
        var $6=($5)==0; //@line 1079 "_testcapimodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1079 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 1080 "_testcapimodule.c"
        __label__ = 25; break; //@line 1080 "_testcapimodule.c"
      case 2: // $bb2
        var $7=_PyUnicodeUCS2_FromString(__str89); //@line 1082 "_testcapimodule.c"
        $utf8=$7; //@line 1082 "_testcapimodule.c"
        var $8=$utf8; //@line 1083 "_testcapimodule.c"
        var $9=($8)==0; //@line 1083 "_testcapimodule.c"
        var $10=$wide; //@line 1084 "_testcapimodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1083 "_testcapimodule.c"
      case 3: // $bb3
        var $11=$10; //@line 1084 "_testcapimodule.c"
        var $12=HEAP[$11]; //@line 1084 "_testcapimodule.c"
        var $13=($12) - 1; //@line 1084 "_testcapimodule.c"
        var $14=$wide; //@line 1084 "_testcapimodule.c"
        var $15=$14; //@line 1084 "_testcapimodule.c"
        HEAP[$15]=$13; //@line 1084 "_testcapimodule.c"
        var $16=$wide; //@line 1084 "_testcapimodule.c"
        var $17=$16; //@line 1084 "_testcapimodule.c"
        var $18=HEAP[$17]; //@line 1084 "_testcapimodule.c"
        var $19=($18)==0; //@line 1084 "_testcapimodule.c"
        if ($19) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1084 "_testcapimodule.c"
      case 4: // $bb4
        var $20=$wide; //@line 1084 "_testcapimodule.c"
        var $21=$20+4; //@line 1084 "_testcapimodule.c"
        var $22=HEAP[$21]; //@line 1084 "_testcapimodule.c"
        var $23=$22+24; //@line 1084 "_testcapimodule.c"
        var $24=HEAP[$23]; //@line 1084 "_testcapimodule.c"
        var $25=$wide; //@line 1084 "_testcapimodule.c"
        FUNCTION_TABLE[$24]($25); //@line 1084 "_testcapimodule.c"
        __label__ = 5; break; //@line 1084 "_testcapimodule.c"
      case 5: // $bb5
        $0=0; //@line 1085 "_testcapimodule.c"
        __label__ = 25; break; //@line 1085 "_testcapimodule.c"
      case 6: // $bb6
        var $26=$10; //@line 1088 "_testcapimodule.c"
        var $27=$26+8; //@line 1088 "_testcapimodule.c"
        var $28=HEAP[$27]; //@line 1088 "_testcapimodule.c"
        var $29=$utf8; //@line 1088 "_testcapimodule.c"
        var $30=$29; //@line 1088 "_testcapimodule.c"
        var $31=$30+8; //@line 1088 "_testcapimodule.c"
        var $32=HEAP[$31]; //@line 1088 "_testcapimodule.c"
        var $33=($28)!=($32); //@line 1088 "_testcapimodule.c"
        var $34=$wide; //@line 1089 "_testcapimodule.c"
        if ($33) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 1088 "_testcapimodule.c"
      case 7: // $bb7
        var $35=$34; //@line 1089 "_testcapimodule.c"
        var $36=HEAP[$35]; //@line 1089 "_testcapimodule.c"
        var $37=($36) - 1; //@line 1089 "_testcapimodule.c"
        var $38=$wide; //@line 1089 "_testcapimodule.c"
        var $39=$38; //@line 1089 "_testcapimodule.c"
        HEAP[$39]=$37; //@line 1089 "_testcapimodule.c"
        var $40=$wide; //@line 1089 "_testcapimodule.c"
        var $41=$40; //@line 1089 "_testcapimodule.c"
        var $42=HEAP[$41]; //@line 1089 "_testcapimodule.c"
        var $43=($42)==0; //@line 1089 "_testcapimodule.c"
        if ($43) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1089 "_testcapimodule.c"
      case 8: // $bb8
        var $44=$wide; //@line 1089 "_testcapimodule.c"
        var $45=$44+4; //@line 1089 "_testcapimodule.c"
        var $46=HEAP[$45]; //@line 1089 "_testcapimodule.c"
        var $47=$46+24; //@line 1089 "_testcapimodule.c"
        var $48=HEAP[$47]; //@line 1089 "_testcapimodule.c"
        var $49=$wide; //@line 1089 "_testcapimodule.c"
        FUNCTION_TABLE[$48]($49); //@line 1089 "_testcapimodule.c"
        __label__ = 9; break; //@line 1089 "_testcapimodule.c"
      case 9: // $bb9
        var $50=$utf8; //@line 1090 "_testcapimodule.c"
        var $51=$50; //@line 1090 "_testcapimodule.c"
        var $52=HEAP[$51]; //@line 1090 "_testcapimodule.c"
        var $53=($52) - 1; //@line 1090 "_testcapimodule.c"
        var $54=$utf8; //@line 1090 "_testcapimodule.c"
        var $55=$54; //@line 1090 "_testcapimodule.c"
        HEAP[$55]=$53; //@line 1090 "_testcapimodule.c"
        var $56=$utf8; //@line 1090 "_testcapimodule.c"
        var $57=$56; //@line 1090 "_testcapimodule.c"
        var $58=HEAP[$57]; //@line 1090 "_testcapimodule.c"
        var $59=($58)==0; //@line 1090 "_testcapimodule.c"
        if ($59) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1090 "_testcapimodule.c"
      case 10: // $bb10
        var $60=$utf8; //@line 1090 "_testcapimodule.c"
        var $61=$60+4; //@line 1090 "_testcapimodule.c"
        var $62=HEAP[$61]; //@line 1090 "_testcapimodule.c"
        var $63=$62+24; //@line 1090 "_testcapimodule.c"
        var $64=HEAP[$63]; //@line 1090 "_testcapimodule.c"
        var $65=$utf8; //@line 1090 "_testcapimodule.c"
        FUNCTION_TABLE[$64]($65); //@line 1090 "_testcapimodule.c"
        __label__ = 11; break; //@line 1090 "_testcapimodule.c"
      case 11: // $bb11
        var $66=_raiseTestError(__str90, __str91); //@line 1091 "_testcapimodule.c"
        $0=$66; //@line 1091 "_testcapimodule.c"
        __label__ = 25; break; //@line 1091 "_testcapimodule.c"
      case 12: // $bb12
        var $67=$utf8; //@line 1094 "_testcapimodule.c"
        var $68=_PyUnicodeUCS2_Compare($34, $67); //@line 1094 "_testcapimodule.c"
        var $69=($68)!=0; //@line 1094 "_testcapimodule.c"
        var $70=$wide; //@line 1095 "_testcapimodule.c"
        var $71=$70; //@line 1095 "_testcapimodule.c"
        var $72=HEAP[$71]; //@line 1095 "_testcapimodule.c"
        var $73=($72) - 1; //@line 1095 "_testcapimodule.c"
        var $74=$wide; //@line 1095 "_testcapimodule.c"
        var $75=$74; //@line 1095 "_testcapimodule.c"
        HEAP[$75]=$73; //@line 1095 "_testcapimodule.c"
        var $76=$wide; //@line 1095 "_testcapimodule.c"
        var $77=$76; //@line 1095 "_testcapimodule.c"
        var $78=HEAP[$77]; //@line 1095 "_testcapimodule.c"
        var $79=($78)==0; //@line 1095 "_testcapimodule.c"
        if ($69) { __label__ = 13; break; } else { __label__ = 20; break; } //@line 1094 "_testcapimodule.c"
      case 13: // $bb13
        if ($79) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1095 "_testcapimodule.c"
      case 14: // $bb14
        var $80=$wide; //@line 1095 "_testcapimodule.c"
        var $81=$80+4; //@line 1095 "_testcapimodule.c"
        var $82=HEAP[$81]; //@line 1095 "_testcapimodule.c"
        var $83=$82+24; //@line 1095 "_testcapimodule.c"
        var $84=HEAP[$83]; //@line 1095 "_testcapimodule.c"
        var $85=$wide; //@line 1095 "_testcapimodule.c"
        FUNCTION_TABLE[$84]($85); //@line 1095 "_testcapimodule.c"
        __label__ = 15; break; //@line 1095 "_testcapimodule.c"
      case 15: // $bb15
        var $86=$utf8; //@line 1096 "_testcapimodule.c"
        var $87=$86; //@line 1096 "_testcapimodule.c"
        var $88=HEAP[$87]; //@line 1096 "_testcapimodule.c"
        var $89=($88) - 1; //@line 1096 "_testcapimodule.c"
        var $90=$utf8; //@line 1096 "_testcapimodule.c"
        var $91=$90; //@line 1096 "_testcapimodule.c"
        HEAP[$91]=$89; //@line 1096 "_testcapimodule.c"
        var $92=$utf8; //@line 1096 "_testcapimodule.c"
        var $93=$92; //@line 1096 "_testcapimodule.c"
        var $94=HEAP[$93]; //@line 1096 "_testcapimodule.c"
        var $95=($94)==0; //@line 1096 "_testcapimodule.c"
        if ($95) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1096 "_testcapimodule.c"
      case 16: // $bb16
        var $96=$utf8; //@line 1096 "_testcapimodule.c"
        var $97=$96+4; //@line 1096 "_testcapimodule.c"
        var $98=HEAP[$97]; //@line 1096 "_testcapimodule.c"
        var $99=$98+24; //@line 1096 "_testcapimodule.c"
        var $100=HEAP[$99]; //@line 1096 "_testcapimodule.c"
        var $101=$utf8; //@line 1096 "_testcapimodule.c"
        FUNCTION_TABLE[$100]($101); //@line 1096 "_testcapimodule.c"
        __label__ = 17; break; //@line 1096 "_testcapimodule.c"
      case 17: // $bb17
        var $102=_PyErr_Occurred(); //@line 1097 "_testcapimodule.c"
        var $103=($102)!=0; //@line 1097 "_testcapimodule.c"
        if ($103) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1097 "_testcapimodule.c"
      case 18: // $bb18
        $0=0; //@line 1098 "_testcapimodule.c"
        __label__ = 25; break; //@line 1098 "_testcapimodule.c"
      case 19: // $bb19
        var $104=_raiseTestError(__str90, __str92); //@line 1099 "_testcapimodule.c"
        $0=$104; //@line 1099 "_testcapimodule.c"
        __label__ = 25; break; //@line 1099 "_testcapimodule.c"
      case 20: // $bb20
        if ($79) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1103 "_testcapimodule.c"
      case 21: // $bb21
        var $105=$wide; //@line 1103 "_testcapimodule.c"
        var $106=$105+4; //@line 1103 "_testcapimodule.c"
        var $107=HEAP[$106]; //@line 1103 "_testcapimodule.c"
        var $108=$107+24; //@line 1103 "_testcapimodule.c"
        var $109=HEAP[$108]; //@line 1103 "_testcapimodule.c"
        var $110=$wide; //@line 1103 "_testcapimodule.c"
        FUNCTION_TABLE[$109]($110); //@line 1103 "_testcapimodule.c"
        __label__ = 22; break; //@line 1103 "_testcapimodule.c"
      case 22: // $bb22
        var $111=$utf8; //@line 1104 "_testcapimodule.c"
        var $112=$111; //@line 1104 "_testcapimodule.c"
        var $113=HEAP[$112]; //@line 1104 "_testcapimodule.c"
        var $114=($113) - 1; //@line 1104 "_testcapimodule.c"
        var $115=$utf8; //@line 1104 "_testcapimodule.c"
        var $116=$115; //@line 1104 "_testcapimodule.c"
        HEAP[$116]=$114; //@line 1104 "_testcapimodule.c"
        var $117=$utf8; //@line 1104 "_testcapimodule.c"
        var $118=$117; //@line 1104 "_testcapimodule.c"
        var $119=HEAP[$118]; //@line 1104 "_testcapimodule.c"
        var $120=($119)==0; //@line 1104 "_testcapimodule.c"
        if ($120) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1104 "_testcapimodule.c"
      case 23: // $bb23
        var $121=$utf8; //@line 1104 "_testcapimodule.c"
        var $122=$121+4; //@line 1104 "_testcapimodule.c"
        var $123=HEAP[$122]; //@line 1104 "_testcapimodule.c"
        var $124=$123+24; //@line 1104 "_testcapimodule.c"
        var $125=HEAP[$124]; //@line 1104 "_testcapimodule.c"
        var $126=$utf8; //@line 1104 "_testcapimodule.c"
        FUNCTION_TABLE[$125]($126); //@line 1104 "_testcapimodule.c"
        __label__ = 24; break; //@line 1104 "_testcapimodule.c"
      case 24: // $bb24
        var $127=HEAP[__Py_NoneStruct]; //@line 1105 "_testcapimodule.c"
        var $128=($127) + 1; //@line 1105 "_testcapimodule.c"
        HEAP[__Py_NoneStruct]=$128; //@line 1105 "_testcapimodule.c"
        $0=__Py_NoneStruct; //@line 1105 "_testcapimodule.c"
        __label__ = 25; break; //@line 1105 "_testcapimodule.c"
      case 25: // $bb25
        var $129=$0; //@line 1080 "_testcapimodule.c"
        $retval=$129; //@line 1080 "_testcapimodule.c"
        var $retval26=$retval; //@line 1080 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval26; //@line 1080 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_empty_argparse($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $tuple;
        var $dict;
        var $result;
        $self_addr=$self;
        $dict=0; //@line 1112 "_testcapimodule.c"
        var $1=_PyTuple_New(0); //@line 1115 "_testcapimodule.c"
        $tuple=$1; //@line 1115 "_testcapimodule.c"
        var $2=$tuple; //@line 1116 "_testcapimodule.c"
        var $3=($2)==0; //@line 1116 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1116 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 1117 "_testcapimodule.c"
        __label__ = 13; break; //@line 1117 "_testcapimodule.c"
      case 2: // $bb1
        var $4=$tuple; //@line 1118 "_testcapimodule.c"
        var $5=_PyArg_ParseTuple($4, __str93, allocate(1, "i32", ALLOC_STACK)); //@line 1118 "_testcapimodule.c"
        $result=$5; //@line 1118 "_testcapimodule.c"
        var $6=$result; //@line 1118 "_testcapimodule.c"
        var $7=($6) < 0; //@line 1118 "_testcapimodule.c"
        if ($7) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 1118 "_testcapimodule.c"
      case 3: // $bb2
        var $8=_PyDict_New(); //@line 1120 "_testcapimodule.c"
        $dict=$8; //@line 1120 "_testcapimodule.c"
        var $9=$dict; //@line 1121 "_testcapimodule.c"
        var $10=($9)==0; //@line 1121 "_testcapimodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1121 "_testcapimodule.c"
      case 4: // $bb3
        var $11=$tuple; //@line 1123 "_testcapimodule.c"
        var $12=$dict; //@line 1123 "_testcapimodule.c"
        var $13=_PyArg_ParseTupleAndKeywords($11, $12, __str93, _kwlist_10129, allocate(1, "i32", ALLOC_STACK)); //@line 1123 "_testcapimodule.c"
        $result=$13; //@line 1123 "_testcapimodule.c"
        __label__ = 5; break; //@line 1124 "_testcapimodule.c"
      case 5: // $done
        var $14=$tuple; //@line 1125 "_testcapimodule.c"
        var $15=$14; //@line 1125 "_testcapimodule.c"
        var $16=HEAP[$15]; //@line 1125 "_testcapimodule.c"
        var $17=($16) - 1; //@line 1125 "_testcapimodule.c"
        var $18=$tuple; //@line 1125 "_testcapimodule.c"
        var $19=$18; //@line 1125 "_testcapimodule.c"
        HEAP[$19]=$17; //@line 1125 "_testcapimodule.c"
        var $20=$tuple; //@line 1125 "_testcapimodule.c"
        var $21=$20; //@line 1125 "_testcapimodule.c"
        var $22=HEAP[$21]; //@line 1125 "_testcapimodule.c"
        var $23=($22)==0; //@line 1125 "_testcapimodule.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1125 "_testcapimodule.c"
      case 6: // $bb4
        var $24=$tuple; //@line 1125 "_testcapimodule.c"
        var $25=$24+4; //@line 1125 "_testcapimodule.c"
        var $26=HEAP[$25]; //@line 1125 "_testcapimodule.c"
        var $27=$26+24; //@line 1125 "_testcapimodule.c"
        var $28=HEAP[$27]; //@line 1125 "_testcapimodule.c"
        var $29=$tuple; //@line 1125 "_testcapimodule.c"
        FUNCTION_TABLE[$28]($29); //@line 1125 "_testcapimodule.c"
        __label__ = 7; break; //@line 1125 "_testcapimodule.c"
      case 7: // $bb5
        var $30=$dict; //@line 1126 "_testcapimodule.c"
        var $31=($30)!=0; //@line 1126 "_testcapimodule.c"
        if ($31) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 1126 "_testcapimodule.c"
      case 8: // $bb6
        var $32=$dict; //@line 1126 "_testcapimodule.c"
        var $33=$32; //@line 1126 "_testcapimodule.c"
        var $34=HEAP[$33]; //@line 1126 "_testcapimodule.c"
        var $35=($34) - 1; //@line 1126 "_testcapimodule.c"
        var $36=$dict; //@line 1126 "_testcapimodule.c"
        var $37=$36; //@line 1126 "_testcapimodule.c"
        HEAP[$37]=$35; //@line 1126 "_testcapimodule.c"
        var $38=$dict; //@line 1126 "_testcapimodule.c"
        var $39=$38; //@line 1126 "_testcapimodule.c"
        var $40=HEAP[$39]; //@line 1126 "_testcapimodule.c"
        var $41=($40)==0; //@line 1126 "_testcapimodule.c"
        if ($41) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1126 "_testcapimodule.c"
      case 9: // $bb7
        var $42=$dict; //@line 1126 "_testcapimodule.c"
        var $43=$42+4; //@line 1126 "_testcapimodule.c"
        var $44=HEAP[$43]; //@line 1126 "_testcapimodule.c"
        var $45=$44+24; //@line 1126 "_testcapimodule.c"
        var $46=HEAP[$45]; //@line 1126 "_testcapimodule.c"
        var $47=$dict; //@line 1126 "_testcapimodule.c"
        FUNCTION_TABLE[$46]($47); //@line 1126 "_testcapimodule.c"
        __label__ = 10; break; //@line 1126 "_testcapimodule.c"
      case 10: // $bb8
        var $48=$result; //@line 1127 "_testcapimodule.c"
        var $49=($48) < 0; //@line 1127 "_testcapimodule.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1127 "_testcapimodule.c"
      case 11: // $bb9
        $0=0; //@line 1128 "_testcapimodule.c"
        __label__ = 13; break; //@line 1128 "_testcapimodule.c"
      case 12: // $bb10
        var $50=HEAP[__Py_NoneStruct]; //@line 1130 "_testcapimodule.c"
        var $51=($50) + 1; //@line 1130 "_testcapimodule.c"
        HEAP[__Py_NoneStruct]=$51; //@line 1130 "_testcapimodule.c"
        $0=__Py_NoneStruct; //@line 1130 "_testcapimodule.c"
        __label__ = 13; break; //@line 1130 "_testcapimodule.c"
      case 13: // $bb11
        var $52=$0; //@line 1117 "_testcapimodule.c"
        $retval=$52; //@line 1117 "_testcapimodule.c"
        var $retval12=$retval; //@line 1117 "_testcapimodule.c"
        ;
        return $retval12; //@line 1117 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _codec_incrementalencoder($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $encoding=__stackBase__;
        var $errors=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$errors]=0; //@line 1137 "_testcapimodule.c"
        var $1=$args_addr; //@line 1138 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, __str94, allocate([$encoding,0,0,0,$errors,0,0,0], ["i8**",0,0,0,"i8**",0,0,0], ALLOC_STACK)); //@line 1138 "_testcapimodule.c"
        var $3=($2)==0; //@line 1138 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1138 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 1140 "_testcapimodule.c"
        __label__ = 3; break; //@line 1140 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$errors]; //@line 1141 "_testcapimodule.c"
        var $5=HEAP[$encoding]; //@line 1141 "_testcapimodule.c"
        var $6=_PyCodec_IncrementalEncoder($5, $4); //@line 1141 "_testcapimodule.c"
        $0=$6; //@line 1141 "_testcapimodule.c"
        __label__ = 3; break; //@line 1141 "_testcapimodule.c"
      case 3: // $bb2
        var $7=$0; //@line 1140 "_testcapimodule.c"
        $retval=$7; //@line 1140 "_testcapimodule.c"
        var $retval3=$retval; //@line 1140 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1140 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _codec_incrementaldecoder($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $encoding=__stackBase__;
        var $errors=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$errors]=0; //@line 1147 "_testcapimodule.c"
        var $1=$args_addr; //@line 1148 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, __str95, allocate([$encoding,0,0,0,$errors,0,0,0], ["i8**",0,0,0,"i8**",0,0,0], ALLOC_STACK)); //@line 1148 "_testcapimodule.c"
        var $3=($2)==0; //@line 1148 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1148 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 1150 "_testcapimodule.c"
        __label__ = 3; break; //@line 1150 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$errors]; //@line 1151 "_testcapimodule.c"
        var $5=HEAP[$encoding]; //@line 1151 "_testcapimodule.c"
        var $6=_PyCodec_IncrementalDecoder($5, $4); //@line 1151 "_testcapimodule.c"
        $0=$6; //@line 1151 "_testcapimodule.c"
        __label__ = 3; break; //@line 1151 "_testcapimodule.c"
      case 3: // $bb2
        var $7=$0; //@line 1150 "_testcapimodule.c"
        $retval=$7; //@line 1150 "_testcapimodule.c"
        var $retval3=$retval; //@line 1150 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1150 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_long_numbits($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 180; _memset(__stackBase__, 0, 180);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $testcases=__stackBase__;
        var $i;
        var $plong;
        var $nbits;
        var $sign;
        $self_addr=$self;
        var $testcases1=$testcases; //@line 1178 "_testcapimodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($testcases1, _C_92_10205, 180, 4, 0); //@line 1178 "_testcapimodule.c"
        $i=0; //@line 1181 "_testcapimodule.c"
        __lastLabel__ = -1; __label__ = 8; break; //@line 1181 "_testcapimodule.c"
      case 1: // $bb
        var $1=$i; //@line 1182 "_testcapimodule.c"
        var $2=$testcases+$1*12; //@line 1182 "_testcapimodule.c"
        var $3=$2; //@line 1182 "_testcapimodule.c"
        var $4=HEAP[$3]; //@line 1182 "_testcapimodule.c"
        var $5=_PyLong_FromLong($4); //@line 1182 "_testcapimodule.c"
        $plong=$5; //@line 1182 "_testcapimodule.c"
        var $6=$plong; //@line 1183 "_testcapimodule.c"
        var $7=__PyLong_NumBits($6); //@line 1183 "_testcapimodule.c"
        $nbits=$7; //@line 1183 "_testcapimodule.c"
        var $8=$plong; //@line 1184 "_testcapimodule.c"
        var $9=__PyLong_Sign($8); //@line 1184 "_testcapimodule.c"
        $sign=$9; //@line 1184 "_testcapimodule.c"
        var $10=$plong; //@line 1186 "_testcapimodule.c"
        var $11=$10; //@line 1186 "_testcapimodule.c"
        var $12=HEAP[$11]; //@line 1186 "_testcapimodule.c"
        var $13=($12) - 1; //@line 1186 "_testcapimodule.c"
        var $14=$plong; //@line 1186 "_testcapimodule.c"
        var $15=$14; //@line 1186 "_testcapimodule.c"
        HEAP[$15]=$13; //@line 1186 "_testcapimodule.c"
        var $16=$plong; //@line 1186 "_testcapimodule.c"
        var $17=$16; //@line 1186 "_testcapimodule.c"
        var $18=HEAP[$17]; //@line 1186 "_testcapimodule.c"
        var $19=($18)==0; //@line 1186 "_testcapimodule.c"
        if ($19) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1186 "_testcapimodule.c"
      case 2: // $bb2
        var $20=$plong; //@line 1186 "_testcapimodule.c"
        var $21=$20+4; //@line 1186 "_testcapimodule.c"
        var $22=HEAP[$21]; //@line 1186 "_testcapimodule.c"
        var $23=$22+24; //@line 1186 "_testcapimodule.c"
        var $24=HEAP[$23]; //@line 1186 "_testcapimodule.c"
        var $25=$plong; //@line 1186 "_testcapimodule.c"
        FUNCTION_TABLE[$24]($25); //@line 1186 "_testcapimodule.c"
        __label__ = 3; break; //@line 1186 "_testcapimodule.c"
      case 3: // $bb3
        var $26=$i; //@line 1187 "_testcapimodule.c"
        var $27=$testcases+$26*12; //@line 1187 "_testcapimodule.c"
        var $28=$27+4; //@line 1187 "_testcapimodule.c"
        var $29=HEAP[$28]; //@line 1187 "_testcapimodule.c"
        var $30=$nbits; //@line 1187 "_testcapimodule.c"
        var $31=($29)!=($30); //@line 1187 "_testcapimodule.c"
        if ($31) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1187 "_testcapimodule.c"
      case 4: // $bb4
        var $32=_raiseTestError(__str96, __str97); //@line 1188 "_testcapimodule.c"
        $0=$32; //@line 1188 "_testcapimodule.c"
        __label__ = 10; break; //@line 1188 "_testcapimodule.c"
      case 5: // $bb5
        var $33=$i; //@line 1190 "_testcapimodule.c"
        var $34=$testcases+$33*12; //@line 1190 "_testcapimodule.c"
        var $35=$34+8; //@line 1190 "_testcapimodule.c"
        var $36=HEAP[$35]; //@line 1190 "_testcapimodule.c"
        var $37=$sign; //@line 1190 "_testcapimodule.c"
        var $38=($36)!=($37); //@line 1190 "_testcapimodule.c"
        if ($38) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1190 "_testcapimodule.c"
      case 6: // $bb6
        var $39=_raiseTestError(__str96, __str98); //@line 1191 "_testcapimodule.c"
        $0=$39; //@line 1191 "_testcapimodule.c"
        __label__ = 10; break; //@line 1191 "_testcapimodule.c"
      case 7: // $bb7
        var $40=$i; //@line 1181 "_testcapimodule.c"
        var $41=($40) + 1; //@line 1181 "_testcapimodule.c"
        $i=$41; //@line 1181 "_testcapimodule.c"
        __lastLabel__ = 7; __label__ = 8; break; //@line 1181 "_testcapimodule.c"
      case 8: // $bb8
        var $42=__lastLabel__ == 7 ? $41 : (0);
        var $43=($42) <= 14; //@line 1181 "_testcapimodule.c"
        if ($43) { __label__ = 1; break; } else { __label__ = 9; break; } //@line 1181 "_testcapimodule.c"
      case 9: // $bb9
        var $44=HEAP[__Py_NoneStruct]; //@line 1194 "_testcapimodule.c"
        var $45=($44) + 1; //@line 1194 "_testcapimodule.c"
        HEAP[__Py_NoneStruct]=$45; //@line 1194 "_testcapimodule.c"
        $0=__Py_NoneStruct; //@line 1195 "_testcapimodule.c"
        __label__ = 10; break; //@line 1195 "_testcapimodule.c"
      case 10: // $bb10
        var $46=$0; //@line 1188 "_testcapimodule.c"
        $retval=$46; //@line 1188 "_testcapimodule.c"
        var $retval11=$retval; //@line 1188 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 1188 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_null_strings($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $o1;
        var $o2;
        var $tuple;
        $self_addr=$self;
        var $1=_PyObject_Str(0); //@line 1203 "_testcapimodule.c"
        $o1=$1; //@line 1203 "_testcapimodule.c"
        var $2=_PyObject_Unicode(0); //@line 1203 "_testcapimodule.c"
        $o2=$2; //@line 1203 "_testcapimodule.c"
        var $3=$o1; //@line 1204 "_testcapimodule.c"
        var $4=$o2; //@line 1204 "_testcapimodule.c"
        var $5=_PyTuple_Pack(2, allocate([$3,0,0,0,$4,0,0,0], ["%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 1204 "_testcapimodule.c"
        $tuple=$5; //@line 1204 "_testcapimodule.c"
        var $6=$o1; //@line 1205 "_testcapimodule.c"
        var $7=($6)!=0; //@line 1205 "_testcapimodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1205 "_testcapimodule.c"
      case 1: // $bb
        var $8=$o1; //@line 1205 "_testcapimodule.c"
        var $9=$8; //@line 1205 "_testcapimodule.c"
        var $10=HEAP[$9]; //@line 1205 "_testcapimodule.c"
        var $11=($10) - 1; //@line 1205 "_testcapimodule.c"
        var $12=$o1; //@line 1205 "_testcapimodule.c"
        var $13=$12; //@line 1205 "_testcapimodule.c"
        HEAP[$13]=$11; //@line 1205 "_testcapimodule.c"
        var $14=$o1; //@line 1205 "_testcapimodule.c"
        var $15=$14; //@line 1205 "_testcapimodule.c"
        var $16=HEAP[$15]; //@line 1205 "_testcapimodule.c"
        var $17=($16)==0; //@line 1205 "_testcapimodule.c"
        if ($17) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1205 "_testcapimodule.c"
      case 2: // $bb1
        var $18=$o1; //@line 1205 "_testcapimodule.c"
        var $19=$18+4; //@line 1205 "_testcapimodule.c"
        var $20=HEAP[$19]; //@line 1205 "_testcapimodule.c"
        var $21=$20+24; //@line 1205 "_testcapimodule.c"
        var $22=HEAP[$21]; //@line 1205 "_testcapimodule.c"
        var $23=$o1; //@line 1205 "_testcapimodule.c"
        FUNCTION_TABLE[$22]($23); //@line 1205 "_testcapimodule.c"
        __label__ = 3; break; //@line 1205 "_testcapimodule.c"
      case 3: // $bb2
        var $24=$o2; //@line 1206 "_testcapimodule.c"
        var $25=($24)!=0; //@line 1206 "_testcapimodule.c"
        if ($25) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1206 "_testcapimodule.c"
      case 4: // $bb3
        var $26=$o2; //@line 1206 "_testcapimodule.c"
        var $27=$26; //@line 1206 "_testcapimodule.c"
        var $28=HEAP[$27]; //@line 1206 "_testcapimodule.c"
        var $29=($28) - 1; //@line 1206 "_testcapimodule.c"
        var $30=$o2; //@line 1206 "_testcapimodule.c"
        var $31=$30; //@line 1206 "_testcapimodule.c"
        HEAP[$31]=$29; //@line 1206 "_testcapimodule.c"
        var $32=$o2; //@line 1206 "_testcapimodule.c"
        var $33=$32; //@line 1206 "_testcapimodule.c"
        var $34=HEAP[$33]; //@line 1206 "_testcapimodule.c"
        var $35=($34)==0; //@line 1206 "_testcapimodule.c"
        if ($35) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1206 "_testcapimodule.c"
      case 5: // $bb4
        var $36=$o2; //@line 1206 "_testcapimodule.c"
        var $37=$36+4; //@line 1206 "_testcapimodule.c"
        var $38=HEAP[$37]; //@line 1206 "_testcapimodule.c"
        var $39=$38+24; //@line 1206 "_testcapimodule.c"
        var $40=HEAP[$39]; //@line 1206 "_testcapimodule.c"
        var $41=$o2; //@line 1206 "_testcapimodule.c"
        FUNCTION_TABLE[$40]($41); //@line 1206 "_testcapimodule.c"
        __label__ = 6; break; //@line 1206 "_testcapimodule.c"
      case 6: // $bb5
        var $42=$tuple; //@line 1207 "_testcapimodule.c"
        $0=$42; //@line 1207 "_testcapimodule.c"
        var $43=$0; //@line 1207 "_testcapimodule.c"
        $retval=$43; //@line 1207 "_testcapimodule.c"
        var $retval6=$retval; //@line 1207 "_testcapimodule.c"
        ;
        return $retval6; //@line 1207 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _raise_exception($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $exc=__stackBase__;
        var $exc_args;
        var $v;
        var $num_args=__stackBase__+4;
        var $i;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1217 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, __str99, allocate([$exc,0,0,0,$num_args,0,0,0], ["%struct.PyObject**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1217 "_testcapimodule.c"
        var $3=($2)==0; //@line 1217 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1217 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 1219 "_testcapimodule.c"
        __label__ = 18; break; //@line 1219 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$exc]; //@line 1220 "_testcapimodule.c"
        var $5=$4+4; //@line 1220 "_testcapimodule.c"
        var $6=HEAP[$5]; //@line 1220 "_testcapimodule.c"
        var $7=($6)!=(_PyClass_Type); //@line 1220 "_testcapimodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1220 "_testcapimodule.c"
      case 3: // $bb2
        var $8=HEAP[$exc]; //@line 1220 "_testcapimodule.c"
        var $9=$8+4; //@line 1220 "_testcapimodule.c"
        var $10=HEAP[$9]; //@line 1220 "_testcapimodule.c"
        var $11=$10+84; //@line 1220 "_testcapimodule.c"
        var $12=HEAP[$11]; //@line 1220 "_testcapimodule.c"
        var $13=($12) >= 0; //@line 1220 "_testcapimodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1220 "_testcapimodule.c"
      case 4: // $bb3
        var $14=HEAP[$exc]; //@line 1220 "_testcapimodule.c"
        var $15=$14; //@line 1220 "_testcapimodule.c"
        var $16=$15+84; //@line 1220 "_testcapimodule.c"
        var $17=HEAP[$16]; //@line 1220 "_testcapimodule.c"
        var $18=($17) & 1073741824; //@line 1220 "_testcapimodule.c"
        var $19=($18)==0; //@line 1220 "_testcapimodule.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1220 "_testcapimodule.c"
      case 5: // $bb4
        var $20=HEAP[_PyExc_TypeError]; //@line 1221 "_testcapimodule.c"
        var $21=_PyErr_Format($20, __str100, allocate(1, "i32", ALLOC_STACK)); //@line 1221 "_testcapimodule.c"
        $0=0; //@line 1222 "_testcapimodule.c"
        __label__ = 18; break; //@line 1222 "_testcapimodule.c"
      case 6: // $bb5
        var $22=HEAP[$num_args]; //@line 1225 "_testcapimodule.c"
        var $23=_PyTuple_New($22); //@line 1225 "_testcapimodule.c"
        $exc_args=$23; //@line 1225 "_testcapimodule.c"
        var $24=($23)==0; //@line 1226 "_testcapimodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1226 "_testcapimodule.c"
      case 7: // $bb6
        $0=0; //@line 1227 "_testcapimodule.c"
        __label__ = 18; break; //@line 1227 "_testcapimodule.c"
      case 8: // $bb7
        $i=0; //@line 1228 "_testcapimodule.c"
        __label__ = 14; break; //@line 1228 "_testcapimodule.c"
      case 9: // $bb8
        var $25=$i; //@line 1229 "_testcapimodule.c"
        var $26=_PyInt_FromLong($25); //@line 1229 "_testcapimodule.c"
        $v=$26; //@line 1229 "_testcapimodule.c"
        var $27=$v; //@line 1230 "_testcapimodule.c"
        var $28=($27)==0; //@line 1230 "_testcapimodule.c"
        var $29=$exc_args; //@line 1231 "_testcapimodule.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 1230 "_testcapimodule.c"
      case 10: // $bb9
        var $30=$29; //@line 1231 "_testcapimodule.c"
        var $31=HEAP[$30]; //@line 1231 "_testcapimodule.c"
        var $32=($31) - 1; //@line 1231 "_testcapimodule.c"
        var $33=$exc_args; //@line 1231 "_testcapimodule.c"
        var $34=$33; //@line 1231 "_testcapimodule.c"
        HEAP[$34]=$32; //@line 1231 "_testcapimodule.c"
        var $35=$exc_args; //@line 1231 "_testcapimodule.c"
        var $36=$35; //@line 1231 "_testcapimodule.c"
        var $37=HEAP[$36]; //@line 1231 "_testcapimodule.c"
        var $38=($37)==0; //@line 1231 "_testcapimodule.c"
        if ($38) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1231 "_testcapimodule.c"
      case 11: // $bb10
        var $39=$exc_args; //@line 1231 "_testcapimodule.c"
        var $40=$39+4; //@line 1231 "_testcapimodule.c"
        var $41=HEAP[$40]; //@line 1231 "_testcapimodule.c"
        var $42=$41+24; //@line 1231 "_testcapimodule.c"
        var $43=HEAP[$42]; //@line 1231 "_testcapimodule.c"
        var $44=$exc_args; //@line 1231 "_testcapimodule.c"
        FUNCTION_TABLE[$43]($44); //@line 1231 "_testcapimodule.c"
        __label__ = 12; break; //@line 1231 "_testcapimodule.c"
      case 12: // $bb11
        $0=0; //@line 1232 "_testcapimodule.c"
        __label__ = 18; break; //@line 1232 "_testcapimodule.c"
      case 13: // $bb12
        var $45=$29; //@line 1234 "_testcapimodule.c"
        var $46=$i; //@line 1234 "_testcapimodule.c"
        var $47=$45+12; //@line 1234 "_testcapimodule.c"
        var $48=$47+$46*4; //@line 1234 "_testcapimodule.c"
        var $49=$v; //@line 1234 "_testcapimodule.c"
        HEAP[$48]=$49; //@line 1234 "_testcapimodule.c"
        var $50=$i; //@line 1228 "_testcapimodule.c"
        var $51=($50) + 1; //@line 1228 "_testcapimodule.c"
        $i=$51; //@line 1228 "_testcapimodule.c"
        __label__ = 14; break; //@line 1228 "_testcapimodule.c"
      case 14: // $bb13
        var $52=HEAP[$num_args]; //@line 1228 "_testcapimodule.c"
        var $53=$i; //@line 1228 "_testcapimodule.c"
        var $54=($53) < ($52); //@line 1228 "_testcapimodule.c"
        if ($54) { __label__ = 9; break; } else { __label__ = 15; break; } //@line 1228 "_testcapimodule.c"
      case 15: // $bb14
        var $55=HEAP[$exc]; //@line 1236 "_testcapimodule.c"
        var $56=$exc_args; //@line 1236 "_testcapimodule.c"
        _PyErr_SetObject($55, $56); //@line 1236 "_testcapimodule.c"
        var $57=$exc_args; //@line 1237 "_testcapimodule.c"
        var $58=$57; //@line 1237 "_testcapimodule.c"
        var $59=HEAP[$58]; //@line 1237 "_testcapimodule.c"
        var $60=($59) - 1; //@line 1237 "_testcapimodule.c"
        var $61=$exc_args; //@line 1237 "_testcapimodule.c"
        var $62=$61; //@line 1237 "_testcapimodule.c"
        HEAP[$62]=$60; //@line 1237 "_testcapimodule.c"
        var $63=$exc_args; //@line 1237 "_testcapimodule.c"
        var $64=$63; //@line 1237 "_testcapimodule.c"
        var $65=HEAP[$64]; //@line 1237 "_testcapimodule.c"
        var $66=($65)==0; //@line 1237 "_testcapimodule.c"
        if ($66) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1237 "_testcapimodule.c"
      case 16: // $bb15
        var $67=$exc_args; //@line 1237 "_testcapimodule.c"
        var $68=$67+4; //@line 1237 "_testcapimodule.c"
        var $69=HEAP[$68]; //@line 1237 "_testcapimodule.c"
        var $70=$69+24; //@line 1237 "_testcapimodule.c"
        var $71=HEAP[$70]; //@line 1237 "_testcapimodule.c"
        var $72=$exc_args; //@line 1237 "_testcapimodule.c"
        FUNCTION_TABLE[$71]($72); //@line 1237 "_testcapimodule.c"
        __label__ = 17; break; //@line 1237 "_testcapimodule.c"
      case 17: // $bb16
        $0=0; //@line 1238 "_testcapimodule.c"
        __label__ = 18; break; //@line 1238 "_testcapimodule.c"
      case 18: // $bb17
        var $73=$0; //@line 1219 "_testcapimodule.c"
        $retval=$73; //@line 1219 "_testcapimodule.c"
        var $retval18=$retval; //@line 1219 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 1219 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_datetime_capi($self, $args) {
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
        var $1=HEAP[_PyDateTimeAPI]; //@line 1246 "_testcapimodule.c"
        var $2=($1)!=0; //@line 1246 "_testcapimodule.c"
        var $3=HEAP[_test_run_counter]; //@line 1247 "_testcapimodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1246 "_testcapimodule.c"
      case 1: // $bb
        var $4=($3)!=0; //@line 1247 "_testcapimodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1247 "_testcapimodule.c"
      case 2: // $bb1
        var $5=HEAP[__Py_NoneStruct]; //@line 1249 "_testcapimodule.c"
        var $6=($5) + 1; //@line 1249 "_testcapimodule.c"
        HEAP[__Py_NoneStruct]=$6; //@line 1249 "_testcapimodule.c"
        $0=__Py_NoneStruct; //@line 1249 "_testcapimodule.c"
        __label__ = 7; break; //@line 1249 "_testcapimodule.c"
      case 3: // $bb2
        var $7=HEAP[_PyExc_AssertionError]; //@line 1252 "_testcapimodule.c"
        _PyErr_SetString($7, __str101); //@line 1252 "_testcapimodule.c"
        $0=0; //@line 1254 "_testcapimodule.c"
        __label__ = 7; break; //@line 1254 "_testcapimodule.c"
      case 4: // $bb3
        var $8=($3) + 1; //@line 1257 "_testcapimodule.c"
        HEAP[_test_run_counter]=$8; //@line 1257 "_testcapimodule.c"
        var $9=_PyCapsule_Import(__str102, 0); //@line 1258 "_testcapimodule.c"
        var $10=$9; //@line 1258 "_testcapimodule.c"
        HEAP[_PyDateTimeAPI]=$10; //@line 1258 "_testcapimodule.c"
        var $11=HEAP[_PyDateTimeAPI]; //@line 1259 "_testcapimodule.c"
        var $12=($11)!=0; //@line 1259 "_testcapimodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1259 "_testcapimodule.c"
      case 5: // $bb4
        var $13=HEAP[__Py_NoneStruct]; //@line 1260 "_testcapimodule.c"
        var $14=($13) + 1; //@line 1260 "_testcapimodule.c"
        HEAP[__Py_NoneStruct]=$14; //@line 1260 "_testcapimodule.c"
        $0=__Py_NoneStruct; //@line 1260 "_testcapimodule.c"
        __label__ = 7; break; //@line 1260 "_testcapimodule.c"
      case 6: // $bb5
        $0=0; //@line 1262 "_testcapimodule.c"
        __label__ = 7; break; //@line 1262 "_testcapimodule.c"
      case 7: // $bb6
        var $15=$0; //@line 1249 "_testcapimodule.c"
        $retval=$15; //@line 1249 "_testcapimodule.c"
        var $retval7=$retval; //@line 1249 "_testcapimodule.c"
        ;
        return $retval7; //@line 1249 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_string_from_format($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $result;
        var $msg;
        $self_addr=$self;
        $args_addr=$args;
        var $1=_PyString_FromFormat(__str103, allocate([1,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1406 "_testcapimodule.c"
        $result=$1; //@line 1406 "_testcapimodule.c"
        var $2=$result; //@line 1406 "_testcapimodule.c"
        var $3=($2)==0; //@line 1406 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1406 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 1406 "_testcapimodule.c"
        __label__ = 53; break; //@line 1406 "_testcapimodule.c"
      case 2: // $bb1
        var $4=$result; //@line 1406 "_testcapimodule.c"
        var $5=_PyString_AsString($4); //@line 1406 "_testcapimodule.c"
        var $6=_strcmp($5, __str104); //@line 1406 "_testcapimodule.c"
        var $7=($6)!=0; //@line 1406 "_testcapimodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1406 "_testcapimodule.c"
      case 3: // $bb2
        $msg=__str105; //@line 1406 "_testcapimodule.c"
        __label__ = 49; break; //@line 1406 "_testcapimodule.c"
      case 4: // $bb3
        var $8=$result; //@line 1406 "_testcapimodule.c"
        var $9=$8; //@line 1406 "_testcapimodule.c"
        var $10=HEAP[$9]; //@line 1406 "_testcapimodule.c"
        var $11=($10) - 1; //@line 1406 "_testcapimodule.c"
        var $12=$result; //@line 1406 "_testcapimodule.c"
        var $13=$12; //@line 1406 "_testcapimodule.c"
        HEAP[$13]=$11; //@line 1406 "_testcapimodule.c"
        var $14=$result; //@line 1406 "_testcapimodule.c"
        var $15=$14; //@line 1406 "_testcapimodule.c"
        var $16=HEAP[$15]; //@line 1406 "_testcapimodule.c"
        var $17=($16)==0; //@line 1406 "_testcapimodule.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1406 "_testcapimodule.c"
      case 5: // $bb4
        var $18=$result; //@line 1406 "_testcapimodule.c"
        var $19=$18+4; //@line 1406 "_testcapimodule.c"
        var $20=HEAP[$19]; //@line 1406 "_testcapimodule.c"
        var $21=$20+24; //@line 1406 "_testcapimodule.c"
        var $22=HEAP[$21]; //@line 1406 "_testcapimodule.c"
        var $23=$result; //@line 1406 "_testcapimodule.c"
        FUNCTION_TABLE[$22]($23); //@line 1406 "_testcapimodule.c"
        __label__ = 6; break; //@line 1406 "_testcapimodule.c"
      case 6: // $bb5
        var $24=_PyString_FromFormat(__str106, allocate([1,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1407 "_testcapimodule.c"
        $result=$24; //@line 1407 "_testcapimodule.c"
        var $25=($24)==0; //@line 1407 "_testcapimodule.c"
        if ($25) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1407 "_testcapimodule.c"
      case 7: // $bb6
        $0=0; //@line 1407 "_testcapimodule.c"
        __label__ = 53; break; //@line 1407 "_testcapimodule.c"
      case 8: // $bb7
        var $26=$result; //@line 1407 "_testcapimodule.c"
        var $27=_PyString_AsString($26); //@line 1407 "_testcapimodule.c"
        var $28=_strcmp($27, __str104); //@line 1407 "_testcapimodule.c"
        var $29=($28)!=0; //@line 1407 "_testcapimodule.c"
        if ($29) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1407 "_testcapimodule.c"
      case 9: // $bb8
        $msg=__str107; //@line 1407 "_testcapimodule.c"
        __label__ = 49; break; //@line 1407 "_testcapimodule.c"
      case 10: // $bb9
        var $30=$result; //@line 1407 "_testcapimodule.c"
        var $31=$30; //@line 1407 "_testcapimodule.c"
        var $32=HEAP[$31]; //@line 1407 "_testcapimodule.c"
        var $33=($32) - 1; //@line 1407 "_testcapimodule.c"
        var $34=$result; //@line 1407 "_testcapimodule.c"
        var $35=$34; //@line 1407 "_testcapimodule.c"
        HEAP[$35]=$33; //@line 1407 "_testcapimodule.c"
        var $36=$result; //@line 1407 "_testcapimodule.c"
        var $37=$36; //@line 1407 "_testcapimodule.c"
        var $38=HEAP[$37]; //@line 1407 "_testcapimodule.c"
        var $39=($38)==0; //@line 1407 "_testcapimodule.c"
        if ($39) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1407 "_testcapimodule.c"
      case 11: // $bb10
        var $40=$result; //@line 1407 "_testcapimodule.c"
        var $41=$40+4; //@line 1407 "_testcapimodule.c"
        var $42=HEAP[$41]; //@line 1407 "_testcapimodule.c"
        var $43=$42+24; //@line 1407 "_testcapimodule.c"
        var $44=HEAP[$43]; //@line 1407 "_testcapimodule.c"
        var $45=$result; //@line 1407 "_testcapimodule.c"
        FUNCTION_TABLE[$44]($45); //@line 1407 "_testcapimodule.c"
        __label__ = 12; break; //@line 1407 "_testcapimodule.c"
      case 12: // $bb11
        var $46=_PyString_FromFormat(__str108, allocate([1,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1409 "_testcapimodule.c"
        $result=$46; //@line 1409 "_testcapimodule.c"
        var $47=($46)==0; //@line 1409 "_testcapimodule.c"
        if ($47) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1409 "_testcapimodule.c"
      case 13: // $bb12
        $0=0; //@line 1409 "_testcapimodule.c"
        __label__ = 53; break; //@line 1409 "_testcapimodule.c"
      case 14: // $bb13
        var $48=$result; //@line 1409 "_testcapimodule.c"
        var $49=_PyString_AsString($48); //@line 1409 "_testcapimodule.c"
        var $50=_strcmp($49, __str104); //@line 1409 "_testcapimodule.c"
        var $51=($50)!=0; //@line 1409 "_testcapimodule.c"
        if ($51) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1409 "_testcapimodule.c"
      case 15: // $bb14
        $msg=__str109; //@line 1409 "_testcapimodule.c"
        __label__ = 49; break; //@line 1409 "_testcapimodule.c"
      case 16: // $bb15
        var $52=$result; //@line 1409 "_testcapimodule.c"
        var $53=$52; //@line 1409 "_testcapimodule.c"
        var $54=HEAP[$53]; //@line 1409 "_testcapimodule.c"
        var $55=($54) - 1; //@line 1409 "_testcapimodule.c"
        var $56=$result; //@line 1409 "_testcapimodule.c"
        var $57=$56; //@line 1409 "_testcapimodule.c"
        HEAP[$57]=$55; //@line 1409 "_testcapimodule.c"
        var $58=$result; //@line 1409 "_testcapimodule.c"
        var $59=$58; //@line 1409 "_testcapimodule.c"
        var $60=HEAP[$59]; //@line 1409 "_testcapimodule.c"
        var $61=($60)==0; //@line 1409 "_testcapimodule.c"
        if ($61) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1409 "_testcapimodule.c"
      case 17: // $bb16
        var $62=$result; //@line 1409 "_testcapimodule.c"
        var $63=$62+4; //@line 1409 "_testcapimodule.c"
        var $64=HEAP[$63]; //@line 1409 "_testcapimodule.c"
        var $65=$64+24; //@line 1409 "_testcapimodule.c"
        var $66=HEAP[$65]; //@line 1409 "_testcapimodule.c"
        var $67=$result; //@line 1409 "_testcapimodule.c"
        FUNCTION_TABLE[$66]($67); //@line 1409 "_testcapimodule.c"
        __label__ = 18; break; //@line 1409 "_testcapimodule.c"
      case 18: // $bb17
        var $68=_PyString_FromFormat(__str110, allocate([1,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1412 "_testcapimodule.c"
        $result=$68; //@line 1412 "_testcapimodule.c"
        var $69=($68)==0; //@line 1412 "_testcapimodule.c"
        if ($69) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1412 "_testcapimodule.c"
      case 19: // $bb18
        $0=0; //@line 1412 "_testcapimodule.c"
        __label__ = 53; break; //@line 1412 "_testcapimodule.c"
      case 20: // $bb19
        var $70=$result; //@line 1412 "_testcapimodule.c"
        var $71=_PyString_AsString($70); //@line 1412 "_testcapimodule.c"
        var $72=_strcmp($71, __str104); //@line 1412 "_testcapimodule.c"
        var $73=($72)!=0; //@line 1412 "_testcapimodule.c"
        if ($73) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1412 "_testcapimodule.c"
      case 21: // $bb20
        $msg=__str111; //@line 1412 "_testcapimodule.c"
        __label__ = 49; break; //@line 1412 "_testcapimodule.c"
      case 22: // $bb21
        var $74=$result; //@line 1412 "_testcapimodule.c"
        var $75=$74; //@line 1412 "_testcapimodule.c"
        var $76=HEAP[$75]; //@line 1412 "_testcapimodule.c"
        var $77=($76) - 1; //@line 1412 "_testcapimodule.c"
        var $78=$result; //@line 1412 "_testcapimodule.c"
        var $79=$78; //@line 1412 "_testcapimodule.c"
        HEAP[$79]=$77; //@line 1412 "_testcapimodule.c"
        var $80=$result; //@line 1412 "_testcapimodule.c"
        var $81=$80; //@line 1412 "_testcapimodule.c"
        var $82=HEAP[$81]; //@line 1412 "_testcapimodule.c"
        var $83=($82)==0; //@line 1412 "_testcapimodule.c"
        if ($83) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1412 "_testcapimodule.c"
      case 23: // $bb22
        var $84=$result; //@line 1412 "_testcapimodule.c"
        var $85=$84+4; //@line 1412 "_testcapimodule.c"
        var $86=HEAP[$85]; //@line 1412 "_testcapimodule.c"
        var $87=$86+24; //@line 1412 "_testcapimodule.c"
        var $88=HEAP[$87]; //@line 1412 "_testcapimodule.c"
        var $89=$result; //@line 1412 "_testcapimodule.c"
        FUNCTION_TABLE[$88]($89); //@line 1412 "_testcapimodule.c"
        __label__ = 24; break; //@line 1412 "_testcapimodule.c"
      case 24: // $bb23
        var $90=_PyString_FromFormat(__str112, allocate([1,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1413 "_testcapimodule.c"
        $result=$90; //@line 1413 "_testcapimodule.c"
        var $91=($90)==0; //@line 1413 "_testcapimodule.c"
        if ($91) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1413 "_testcapimodule.c"
      case 25: // $bb24
        $0=0; //@line 1413 "_testcapimodule.c"
        __label__ = 53; break; //@line 1413 "_testcapimodule.c"
      case 26: // $bb25
        var $92=$result; //@line 1413 "_testcapimodule.c"
        var $93=_PyString_AsString($92); //@line 1413 "_testcapimodule.c"
        var $94=_strcmp($93, __str104); //@line 1413 "_testcapimodule.c"
        var $95=($94)!=0; //@line 1413 "_testcapimodule.c"
        if ($95) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1413 "_testcapimodule.c"
      case 27: // $bb26
        $msg=__str113; //@line 1413 "_testcapimodule.c"
        __label__ = 49; break; //@line 1413 "_testcapimodule.c"
      case 28: // $bb27
        var $96=$result; //@line 1413 "_testcapimodule.c"
        var $97=$96; //@line 1413 "_testcapimodule.c"
        var $98=HEAP[$97]; //@line 1413 "_testcapimodule.c"
        var $99=($98) - 1; //@line 1413 "_testcapimodule.c"
        var $100=$result; //@line 1413 "_testcapimodule.c"
        var $101=$100; //@line 1413 "_testcapimodule.c"
        HEAP[$101]=$99; //@line 1413 "_testcapimodule.c"
        var $102=$result; //@line 1413 "_testcapimodule.c"
        var $103=$102; //@line 1413 "_testcapimodule.c"
        var $104=HEAP[$103]; //@line 1413 "_testcapimodule.c"
        var $105=($104)==0; //@line 1413 "_testcapimodule.c"
        if ($105) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1413 "_testcapimodule.c"
      case 29: // $bb28
        var $106=$result; //@line 1413 "_testcapimodule.c"
        var $107=$106+4; //@line 1413 "_testcapimodule.c"
        var $108=HEAP[$107]; //@line 1413 "_testcapimodule.c"
        var $109=$108+24; //@line 1413 "_testcapimodule.c"
        var $110=HEAP[$109]; //@line 1413 "_testcapimodule.c"
        var $111=$result; //@line 1413 "_testcapimodule.c"
        FUNCTION_TABLE[$110]($111); //@line 1413 "_testcapimodule.c"
        __label__ = 30; break; //@line 1413 "_testcapimodule.c"
      case 30: // $bb29
        var $112=_PyString_FromFormat(__str114, allocate([1,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1414 "_testcapimodule.c"
        $result=$112; //@line 1414 "_testcapimodule.c"
        var $113=($112)==0; //@line 1414 "_testcapimodule.c"
        if ($113) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1414 "_testcapimodule.c"
      case 31: // $bb30
        $0=0; //@line 1414 "_testcapimodule.c"
        __label__ = 53; break; //@line 1414 "_testcapimodule.c"
      case 32: // $bb31
        var $114=$result; //@line 1414 "_testcapimodule.c"
        var $115=_PyString_AsString($114); //@line 1414 "_testcapimodule.c"
        var $116=_strcmp($115, __str104); //@line 1414 "_testcapimodule.c"
        var $117=($116)!=0; //@line 1414 "_testcapimodule.c"
        if ($117) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 1414 "_testcapimodule.c"
      case 33: // $bb32
        $msg=__str115; //@line 1414 "_testcapimodule.c"
        __label__ = 49; break; //@line 1414 "_testcapimodule.c"
      case 34: // $bb33
        var $118=$result; //@line 1414 "_testcapimodule.c"
        var $119=$118; //@line 1414 "_testcapimodule.c"
        var $120=HEAP[$119]; //@line 1414 "_testcapimodule.c"
        var $121=($120) - 1; //@line 1414 "_testcapimodule.c"
        var $122=$result; //@line 1414 "_testcapimodule.c"
        var $123=$122; //@line 1414 "_testcapimodule.c"
        HEAP[$123]=$121; //@line 1414 "_testcapimodule.c"
        var $124=$result; //@line 1414 "_testcapimodule.c"
        var $125=$124; //@line 1414 "_testcapimodule.c"
        var $126=HEAP[$125]; //@line 1414 "_testcapimodule.c"
        var $127=($126)==0; //@line 1414 "_testcapimodule.c"
        if ($127) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 1414 "_testcapimodule.c"
      case 35: // $bb34
        var $128=$result; //@line 1414 "_testcapimodule.c"
        var $129=$128+4; //@line 1414 "_testcapimodule.c"
        var $130=HEAP[$129]; //@line 1414 "_testcapimodule.c"
        var $131=$130+24; //@line 1414 "_testcapimodule.c"
        var $132=HEAP[$131]; //@line 1414 "_testcapimodule.c"
        var $133=$result; //@line 1414 "_testcapimodule.c"
        FUNCTION_TABLE[$132]($133); //@line 1414 "_testcapimodule.c"
        __label__ = 36; break; //@line 1414 "_testcapimodule.c"
      case 36: // $bb35
        var $134=_PyString_FromFormat(__str116, allocate([1,0,0,0,0,0,0,0], ["i64",0,0,0,0,0,0,0], ALLOC_STACK)); //@line 1418 "_testcapimodule.c"
        $result=$134; //@line 1418 "_testcapimodule.c"
        var $135=($134)==0; //@line 1418 "_testcapimodule.c"
        if ($135) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 1418 "_testcapimodule.c"
      case 37: // $bb36
        $0=0; //@line 1418 "_testcapimodule.c"
        __label__ = 53; break; //@line 1418 "_testcapimodule.c"
      case 38: // $bb37
        var $136=$result; //@line 1418 "_testcapimodule.c"
        var $137=_PyString_AsString($136); //@line 1418 "_testcapimodule.c"
        var $138=_strcmp($137, __str104); //@line 1418 "_testcapimodule.c"
        var $139=($138)!=0; //@line 1418 "_testcapimodule.c"
        if ($139) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 1418 "_testcapimodule.c"
      case 39: // $bb38
        $msg=__str117; //@line 1418 "_testcapimodule.c"
        __label__ = 49; break; //@line 1418 "_testcapimodule.c"
      case 40: // $bb39
        var $140=$result; //@line 1418 "_testcapimodule.c"
        var $141=$140; //@line 1418 "_testcapimodule.c"
        var $142=HEAP[$141]; //@line 1418 "_testcapimodule.c"
        var $143=($142) - 1; //@line 1418 "_testcapimodule.c"
        var $144=$result; //@line 1418 "_testcapimodule.c"
        var $145=$144; //@line 1418 "_testcapimodule.c"
        HEAP[$145]=$143; //@line 1418 "_testcapimodule.c"
        var $146=$result; //@line 1418 "_testcapimodule.c"
        var $147=$146; //@line 1418 "_testcapimodule.c"
        var $148=HEAP[$147]; //@line 1418 "_testcapimodule.c"
        var $149=($148)==0; //@line 1418 "_testcapimodule.c"
        if ($149) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 1418 "_testcapimodule.c"
      case 41: // $bb40
        var $150=$result; //@line 1418 "_testcapimodule.c"
        var $151=$150+4; //@line 1418 "_testcapimodule.c"
        var $152=HEAP[$151]; //@line 1418 "_testcapimodule.c"
        var $153=$152+24; //@line 1418 "_testcapimodule.c"
        var $154=HEAP[$153]; //@line 1418 "_testcapimodule.c"
        var $155=$result; //@line 1418 "_testcapimodule.c"
        FUNCTION_TABLE[$154]($155); //@line 1418 "_testcapimodule.c"
        __label__ = 42; break; //@line 1418 "_testcapimodule.c"
      case 42: // $bb41
        var $156=_PyString_FromFormat(__str118, allocate([1,0,0,0,0,0,0,0], ["i64",0,0,0,0,0,0,0], ALLOC_STACK)); //@line 1419 "_testcapimodule.c"
        $result=$156; //@line 1419 "_testcapimodule.c"
        var $157=($156)==0; //@line 1419 "_testcapimodule.c"
        if ($157) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 1419 "_testcapimodule.c"
      case 43: // $bb42
        $0=0; //@line 1419 "_testcapimodule.c"
        __label__ = 53; break; //@line 1419 "_testcapimodule.c"
      case 44: // $bb43
        var $158=$result; //@line 1419 "_testcapimodule.c"
        var $159=_PyString_AsString($158); //@line 1419 "_testcapimodule.c"
        var $160=_strcmp($159, __str104); //@line 1419 "_testcapimodule.c"
        var $161=($160)!=0; //@line 1419 "_testcapimodule.c"
        if ($161) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 1419 "_testcapimodule.c"
      case 45: // $bb44
        $msg=__str119; //@line 1419 "_testcapimodule.c"
        __label__ = 49; break; //@line 1419 "_testcapimodule.c"
      case 46: // $bb45
        var $162=$result; //@line 1419 "_testcapimodule.c"
        var $163=$162; //@line 1419 "_testcapimodule.c"
        var $164=HEAP[$163]; //@line 1419 "_testcapimodule.c"
        var $165=($164) - 1; //@line 1419 "_testcapimodule.c"
        var $166=$result; //@line 1419 "_testcapimodule.c"
        var $167=$166; //@line 1419 "_testcapimodule.c"
        HEAP[$167]=$165; //@line 1419 "_testcapimodule.c"
        var $168=$result; //@line 1419 "_testcapimodule.c"
        var $169=$168; //@line 1419 "_testcapimodule.c"
        var $170=HEAP[$169]; //@line 1419 "_testcapimodule.c"
        var $171=($170)==0; //@line 1419 "_testcapimodule.c"
        if ($171) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 1419 "_testcapimodule.c"
      case 47: // $bb46
        var $172=$result; //@line 1419 "_testcapimodule.c"
        var $173=$172+4; //@line 1419 "_testcapimodule.c"
        var $174=HEAP[$173]; //@line 1419 "_testcapimodule.c"
        var $175=$174+24; //@line 1419 "_testcapimodule.c"
        var $176=HEAP[$175]; //@line 1419 "_testcapimodule.c"
        var $177=$result; //@line 1419 "_testcapimodule.c"
        FUNCTION_TABLE[$176]($177); //@line 1419 "_testcapimodule.c"
        __label__ = 48; break; //@line 1419 "_testcapimodule.c"
      case 48: // $bb47
        var $178=HEAP[__Py_NoneStruct]; //@line 1422 "_testcapimodule.c"
        var $179=($178) + 1; //@line 1422 "_testcapimodule.c"
        HEAP[__Py_NoneStruct]=$179; //@line 1422 "_testcapimodule.c"
        $0=__Py_NoneStruct; //@line 1422 "_testcapimodule.c"
        __label__ = 53; break; //@line 1422 "_testcapimodule.c"
      case 49: // $Fail
        var $180=$result; //@line 1425 "_testcapimodule.c"
        var $181=($180)!=0; //@line 1425 "_testcapimodule.c"
        if ($181) { __label__ = 50; break; } else { __label__ = 52; break; } //@line 1425 "_testcapimodule.c"
      case 50: // $bb48
        var $182=$result; //@line 1425 "_testcapimodule.c"
        var $183=$182; //@line 1425 "_testcapimodule.c"
        var $184=HEAP[$183]; //@line 1425 "_testcapimodule.c"
        var $185=($184) - 1; //@line 1425 "_testcapimodule.c"
        var $186=$result; //@line 1425 "_testcapimodule.c"
        var $187=$186; //@line 1425 "_testcapimodule.c"
        HEAP[$187]=$185; //@line 1425 "_testcapimodule.c"
        var $188=$result; //@line 1425 "_testcapimodule.c"
        var $189=$188; //@line 1425 "_testcapimodule.c"
        var $190=HEAP[$189]; //@line 1425 "_testcapimodule.c"
        var $191=($190)==0; //@line 1425 "_testcapimodule.c"
        if ($191) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 1425 "_testcapimodule.c"
      case 51: // $bb49
        var $192=$result; //@line 1425 "_testcapimodule.c"
        var $193=$192+4; //@line 1425 "_testcapimodule.c"
        var $194=HEAP[$193]; //@line 1425 "_testcapimodule.c"
        var $195=$194+24; //@line 1425 "_testcapimodule.c"
        var $196=HEAP[$195]; //@line 1425 "_testcapimodule.c"
        var $197=$result; //@line 1425 "_testcapimodule.c"
        FUNCTION_TABLE[$196]($197); //@line 1425 "_testcapimodule.c"
        __label__ = 52; break; //@line 1425 "_testcapimodule.c"
      case 52: // $bb50
        var $198=$msg; //@line 1426 "_testcapimodule.c"
        var $199=_raiseTestError(__str120, $198); //@line 1426 "_testcapimodule.c"
        $0=$199; //@line 1426 "_testcapimodule.c"
        __label__ = 53; break; //@line 1426 "_testcapimodule.c"
      case 53: // $bb51
        var $200=$0; //@line 1406 "_testcapimodule.c"
        $retval=$200; //@line 1406 "_testcapimodule.c"
        var $retval52=$retval; //@line 1406 "_testcapimodule.c"
        ;
        return $retval52; //@line 1406 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _capsule_destructor($o) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $o_addr;
        $o_addr=$o;
        var $0=HEAP[_capsule_destructor_call_count]; //@line 1442 "_testcapimodule.c"
        var $1=($0) + 1; //@line 1442 "_testcapimodule.c"
        HEAP[_capsule_destructor_call_count]=$1; //@line 1442 "_testcapimodule.c"
        var $2=$o_addr; //@line 1443 "_testcapimodule.c"
        var $3=_PyCapsule_GetContext($2); //@line 1443 "_testcapimodule.c"
        var $4=($3)!=(__str123); //@line 1443 "_testcapimodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1443 "_testcapimodule.c"
      case 1: // $bb
        HEAP[_capsule_error]=__str124; //@line 1444 "_testcapimodule.c"
        __label__ = 8; break; //@line 1444 "_testcapimodule.c"
      case 2: // $bb1
        var $5=$o_addr; //@line 1445 "_testcapimodule.c"
        var $6=_PyCapsule_GetDestructor($5); //@line 1445 "_testcapimodule.c"
        var $7=($6)!=((FUNCTION_TABLE_OFFSET + 6)); //@line 1445 "_testcapimodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1445 "_testcapimodule.c"
      case 3: // $bb2
        HEAP[_capsule_error]=__str125; //@line 1446 "_testcapimodule.c"
        __label__ = 8; break; //@line 1446 "_testcapimodule.c"
      case 4: // $bb3
        var $8=$o_addr; //@line 1447 "_testcapimodule.c"
        var $9=_PyCapsule_GetName($8); //@line 1447 "_testcapimodule.c"
        var $10=($9)!=(__str121); //@line 1447 "_testcapimodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1447 "_testcapimodule.c"
      case 5: // $bb4
        HEAP[_capsule_error]=__str126; //@line 1448 "_testcapimodule.c"
        __label__ = 8; break; //@line 1448 "_testcapimodule.c"
      case 6: // $bb5
        var $11=$o_addr; //@line 1449 "_testcapimodule.c"
        var $12=_PyCapsule_GetPointer($11, __str121); //@line 1449 "_testcapimodule.c"
        var $13=($12)!=(__str122); //@line 1449 "_testcapimodule.c"
        if ($13) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1449 "_testcapimodule.c"
      case 7: // $bb6
        HEAP[_capsule_error]=__str127; //@line 1450 "_testcapimodule.c"
        __label__ = 8; break; //@line 1450 "_testcapimodule.c"
      case 8: // $return
        ;
        return; //@line 1452 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_capsule($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; _memset(__stackBase__, 0, 48);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $object;
        var $error;
        var $pointer;
        var $pointer2;
        var $known_capsules=__stackBase__;
        var $known;
        var $module;
        $self_addr=$self;
        $args_addr=$args;
        $error=0; //@line 1464 "_testcapimodule.c"
        var $known_capsules1=$known_capsules; //@line 1473 "_testcapimodule.c"
        _llvm_memset_p0i8_i32($known_capsules1, 0, 48, 4, 0); //@line 1473 "_testcapimodule.c"
        var $1=$known_capsules; //@line 1473 "_testcapimodule.c"
        var $2=$1; //@line 1473 "_testcapimodule.c"
        HEAP[$2]=__str128; //@line 1473 "_testcapimodule.c"
        var $3=$known_capsules; //@line 1473 "_testcapimodule.c"
        var $4=$3+4; //@line 1473 "_testcapimodule.c"
        HEAP[$4]=__str129; //@line 1473 "_testcapimodule.c"
        var $5=$known_capsules; //@line 1473 "_testcapimodule.c"
        var $6=$5+8; //@line 1473 "_testcapimodule.c"
        HEAP[$6]=__str130; //@line 1473 "_testcapimodule.c"
        var $7=$known_capsules+12; //@line 1473 "_testcapimodule.c"
        var $8=$7; //@line 1473 "_testcapimodule.c"
        HEAP[$8]=__str131; //@line 1473 "_testcapimodule.c"
        var $9=$known_capsules+12; //@line 1473 "_testcapimodule.c"
        var $10=$9+4; //@line 1473 "_testcapimodule.c"
        HEAP[$10]=__str132; //@line 1473 "_testcapimodule.c"
        var $11=$known_capsules+12; //@line 1473 "_testcapimodule.c"
        var $12=$11+8; //@line 1473 "_testcapimodule.c"
        HEAP[$12]=__str133; //@line 1473 "_testcapimodule.c"
        var $13=$known_capsules+24; //@line 1473 "_testcapimodule.c"
        var $14=$13; //@line 1473 "_testcapimodule.c"
        HEAP[$14]=__str102; //@line 1473 "_testcapimodule.c"
        var $15=$known_capsules+24; //@line 1473 "_testcapimodule.c"
        var $16=$15+4; //@line 1473 "_testcapimodule.c"
        HEAP[$16]=__str134; //@line 1473 "_testcapimodule.c"
        var $17=$known_capsules+24; //@line 1473 "_testcapimodule.c"
        var $18=$17+8; //@line 1473 "_testcapimodule.c"
        HEAP[$18]=__str135; //@line 1473 "_testcapimodule.c"
        var $19=$known_capsules; //@line 1474 "_testcapimodule.c"
        $known=$19; //@line 1474 "_testcapimodule.c"
        var $20=_PyCapsule_New(__str122, __str121, (FUNCTION_TABLE_OFFSET + 6)); //@line 1487 "_testcapimodule.c"
        $object=$20; //@line 1487 "_testcapimodule.c"
        var $21=$object; //@line 1488 "_testcapimodule.c"
        var $22=_PyCapsule_SetContext($21, __str123); //@line 1488 "_testcapimodule.c"
        var $23=$object; //@line 1489 "_testcapimodule.c"
        _capsule_destructor($23); //@line 1489 "_testcapimodule.c"
        var $24=HEAP[_capsule_error]; //@line 1490 "_testcapimodule.c"
        var $25=($24)!=0; //@line 1490 "_testcapimodule.c"
        if ($25) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1490 "_testcapimodule.c"
      case 1: // $bb
        var $26=HEAP[_capsule_error]; //@line 1490 "_testcapimodule.c"
        $error=$26; //@line 1490 "_testcapimodule.c"
        __lastLabel__ = 1; __label__ = 56; break; //@line 1490 "_testcapimodule.c"
      case 2: // $bb2
        var $27=HEAP[_capsule_destructor_call_count]; //@line 1490 "_testcapimodule.c"
        var $28=($27)==0; //@line 1490 "_testcapimodule.c"
        if ($28) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1490 "_testcapimodule.c"
      case 3: // $bb3
        $error=__str136; //@line 1490 "_testcapimodule.c"
        __label__ = 57; break; //@line 1490 "_testcapimodule.c"
      case 4: // $bb4
        HEAP[_capsule_destructor_call_count]=0; //@line 1490 "_testcapimodule.c"
        var $29=$object; //@line 1491 "_testcapimodule.c"
        var $30=$29; //@line 1491 "_testcapimodule.c"
        var $31=HEAP[$30]; //@line 1491 "_testcapimodule.c"
        var $32=($31) - 1; //@line 1491 "_testcapimodule.c"
        var $33=$object; //@line 1491 "_testcapimodule.c"
        var $34=$33; //@line 1491 "_testcapimodule.c"
        HEAP[$34]=$32; //@line 1491 "_testcapimodule.c"
        var $35=$object; //@line 1491 "_testcapimodule.c"
        var $36=$35; //@line 1491 "_testcapimodule.c"
        var $37=HEAP[$36]; //@line 1491 "_testcapimodule.c"
        var $38=($37)==0; //@line 1491 "_testcapimodule.c"
        if ($38) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1491 "_testcapimodule.c"
      case 5: // $bb5
        var $39=$object; //@line 1491 "_testcapimodule.c"
        var $40=$39+4; //@line 1491 "_testcapimodule.c"
        var $41=HEAP[$40]; //@line 1491 "_testcapimodule.c"
        var $42=$41+24; //@line 1491 "_testcapimodule.c"
        var $43=HEAP[$42]; //@line 1491 "_testcapimodule.c"
        var $44=$object; //@line 1491 "_testcapimodule.c"
        FUNCTION_TABLE[$43]($44); //@line 1491 "_testcapimodule.c"
        __label__ = 6; break; //@line 1491 "_testcapimodule.c"
      case 6: // $bb6
        var $45=HEAP[_capsule_error]; //@line 1492 "_testcapimodule.c"
        var $46=($45)!=0; //@line 1492 "_testcapimodule.c"
        if ($46) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1492 "_testcapimodule.c"
      case 7: // $bb7
        var $47=HEAP[_capsule_error]; //@line 1492 "_testcapimodule.c"
        $error=$47; //@line 1492 "_testcapimodule.c"
        __lastLabel__ = 7; __label__ = 56; break; //@line 1492 "_testcapimodule.c"
      case 8: // $bb8
        var $48=HEAP[_capsule_destructor_call_count]; //@line 1492 "_testcapimodule.c"
        var $49=($48)==0; //@line 1492 "_testcapimodule.c"
        if ($49) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1492 "_testcapimodule.c"
      case 9: // $bb9
        $error=__str136; //@line 1492 "_testcapimodule.c"
        __label__ = 57; break; //@line 1492 "_testcapimodule.c"
      case 10: // $bb10
        HEAP[_capsule_destructor_call_count]=0; //@line 1492 "_testcapimodule.c"
        var $50=$known; //@line 1494 "_testcapimodule.c"
        var $51=$50; //@line 1494 "_testcapimodule.c"
        var $52=_PyCapsule_New($51, __str137, 0); //@line 1494 "_testcapimodule.c"
        $object=$52; //@line 1494 "_testcapimodule.c"
        var $53=$object; //@line 1495 "_testcapimodule.c"
        var $54=_PyCapsule_SetPointer($53, __str122); //@line 1495 "_testcapimodule.c"
        var $55=$object; //@line 1496 "_testcapimodule.c"
        var $56=_PyCapsule_SetName($55, __str121); //@line 1496 "_testcapimodule.c"
        var $57=$object; //@line 1497 "_testcapimodule.c"
        var $58=_PyCapsule_SetDestructor($57, (FUNCTION_TABLE_OFFSET + 6)); //@line 1497 "_testcapimodule.c"
        var $59=$object; //@line 1498 "_testcapimodule.c"
        var $60=_PyCapsule_SetContext($59, __str123); //@line 1498 "_testcapimodule.c"
        var $61=$object; //@line 1499 "_testcapimodule.c"
        _capsule_destructor($61); //@line 1499 "_testcapimodule.c"
        var $62=HEAP[_capsule_error]; //@line 1500 "_testcapimodule.c"
        var $63=($62)!=0; //@line 1500 "_testcapimodule.c"
        if ($63) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1500 "_testcapimodule.c"
      case 11: // $bb11
        var $64=HEAP[_capsule_error]; //@line 1500 "_testcapimodule.c"
        $error=$64; //@line 1500 "_testcapimodule.c"
        __lastLabel__ = 11; __label__ = 56; break; //@line 1500 "_testcapimodule.c"
      case 12: // $bb12
        var $65=HEAP[_capsule_destructor_call_count]; //@line 1500 "_testcapimodule.c"
        var $66=($65)==0; //@line 1500 "_testcapimodule.c"
        if ($66) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1500 "_testcapimodule.c"
      case 13: // $bb13
        $error=__str136; //@line 1500 "_testcapimodule.c"
        __label__ = 57; break; //@line 1500 "_testcapimodule.c"
      case 14: // $bb14
        HEAP[_capsule_destructor_call_count]=0; //@line 1500 "_testcapimodule.c"
        var $67=$object; //@line 1502 "_testcapimodule.c"
        var $68=_PyCapsule_GetPointer($67, __str138); //@line 1502 "_testcapimodule.c"
        $pointer2=$68; //@line 1502 "_testcapimodule.c"
        var $69=_PyErr_Occurred(); //@line 1503 "_testcapimodule.c"
        var $70=($69)==0; //@line 1503 "_testcapimodule.c"
        if ($70) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1503 "_testcapimodule.c"
      case 15: // $bb15
        $error=__str139; //@line 1504 "_testcapimodule.c"
        __label__ = 57; break; //@line 1504 "_testcapimodule.c"
      case 16: // $bb16
        _PyErr_Clear(); //@line 1506 "_testcapimodule.c"
        var $71=$pointer2; //@line 1507 "_testcapimodule.c"
        var $72=($71)!=0; //@line 1507 "_testcapimodule.c"
        if ($72) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 1507 "_testcapimodule.c"
      case 17: // $bb17
        var $73=$pointer2; //@line 1508 "_testcapimodule.c"
        var $74=($73)==(__str122); //@line 1508 "_testcapimodule.c"
        if ($74) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1508 "_testcapimodule.c"
      case 18: // $bb18
        $error=__str140; //@line 1509 "_testcapimodule.c"
        __label__ = 57; break; //@line 1509 "_testcapimodule.c"
      case 19: // $bb19
        $error=__str141; //@line 1512 "_testcapimodule.c"
        __label__ = 57; break; //@line 1512 "_testcapimodule.c"
      case 20: // $bb20
        var $75=$object; //@line 1516 "_testcapimodule.c"
        var $76=_PyCapsule_SetDestructor($75, 0); //@line 1516 "_testcapimodule.c"
        var $77=$object; //@line 1517 "_testcapimodule.c"
        var $78=$77; //@line 1517 "_testcapimodule.c"
        var $79=HEAP[$78]; //@line 1517 "_testcapimodule.c"
        var $80=($79) - 1; //@line 1517 "_testcapimodule.c"
        var $81=$object; //@line 1517 "_testcapimodule.c"
        var $82=$81; //@line 1517 "_testcapimodule.c"
        HEAP[$82]=$80; //@line 1517 "_testcapimodule.c"
        var $83=$object; //@line 1517 "_testcapimodule.c"
        var $84=$83; //@line 1517 "_testcapimodule.c"
        var $85=HEAP[$84]; //@line 1517 "_testcapimodule.c"
        var $86=($85)==0; //@line 1517 "_testcapimodule.c"
        if ($86) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1517 "_testcapimodule.c"
      case 21: // $bb21
        var $87=$object; //@line 1517 "_testcapimodule.c"
        var $88=$87+4; //@line 1517 "_testcapimodule.c"
        var $89=HEAP[$88]; //@line 1517 "_testcapimodule.c"
        var $90=$89+24; //@line 1517 "_testcapimodule.c"
        var $91=HEAP[$90]; //@line 1517 "_testcapimodule.c"
        var $92=$object; //@line 1517 "_testcapimodule.c"
        FUNCTION_TABLE[$91]($92); //@line 1517 "_testcapimodule.c"
        __label__ = 22; break; //@line 1517 "_testcapimodule.c"
      case 22: // $bb22
        var $93=HEAP[_capsule_destructor_call_count]; //@line 1518 "_testcapimodule.c"
        var $94=($93)!=0; //@line 1518 "_testcapimodule.c"
        if ($94) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1518 "_testcapimodule.c"
      case 23: // $bb23
        $error=__str142; //@line 1519 "_testcapimodule.c"
        __label__ = 57; break; //@line 1519 "_testcapimodule.c"
      case 24: // $bb24
        var $95=$known_capsules; //@line 1522 "_testcapimodule.c"
        $known=$95; //@line 1522 "_testcapimodule.c"
        __label__ = 54; break; //@line 1522 "_testcapimodule.c"
      case 25: // $bb25
        var $96=$known; //@line 1536 "_testcapimodule.c"
        var $97=$96+4; //@line 1536 "_testcapimodule.c"
        var $98=HEAP[$97]; //@line 1536 "_testcapimodule.c"
        var $99=_PyImport_ImportModule($98); //@line 1536 "_testcapimodule.c"
        $module=$99; //@line 1536 "_testcapimodule.c"
        var $100=$module; //@line 1537 "_testcapimodule.c"
        var $101=($100)!=0; //@line 1537 "_testcapimodule.c"
        if ($101) { __label__ = 26; break; } else { __label__ = 52; break; } //@line 1537 "_testcapimodule.c"
      case 26: // $bb26
        var $102=$known; //@line 1538 "_testcapimodule.c"
        var $103=$102; //@line 1538 "_testcapimodule.c"
        var $104=HEAP[$103]; //@line 1538 "_testcapimodule.c"
        var $105=_PyCapsule_Import($104, 0); //@line 1538 "_testcapimodule.c"
        $pointer=$105; //@line 1538 "_testcapimodule.c"
        var $106=$pointer; //@line 1539 "_testcapimodule.c"
        var $107=($106)==0; //@line 1539 "_testcapimodule.c"
        if ($107) { __label__ = 27; break; } else { __label__ = 30; break; } //@line 1539 "_testcapimodule.c"
      case 27: // $bb27
        var $108=$module; //@line 1540 "_testcapimodule.c"
        var $109=$108; //@line 1540 "_testcapimodule.c"
        var $110=HEAP[$109]; //@line 1540 "_testcapimodule.c"
        var $111=($110) - 1; //@line 1540 "_testcapimodule.c"
        var $112=$module; //@line 1540 "_testcapimodule.c"
        var $113=$112; //@line 1540 "_testcapimodule.c"
        HEAP[$113]=$111; //@line 1540 "_testcapimodule.c"
        var $114=$module; //@line 1540 "_testcapimodule.c"
        var $115=$114; //@line 1540 "_testcapimodule.c"
        var $116=HEAP[$115]; //@line 1540 "_testcapimodule.c"
        var $117=($116)==0; //@line 1540 "_testcapimodule.c"
        if ($117) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1540 "_testcapimodule.c"
      case 28: // $bb28
        var $118=$module; //@line 1540 "_testcapimodule.c"
        var $119=$118+4; //@line 1540 "_testcapimodule.c"
        var $120=HEAP[$119]; //@line 1540 "_testcapimodule.c"
        var $121=$120+24; //@line 1540 "_testcapimodule.c"
        var $122=HEAP[$121]; //@line 1540 "_testcapimodule.c"
        var $123=$module; //@line 1540 "_testcapimodule.c"
        FUNCTION_TABLE[$122]($123); //@line 1540 "_testcapimodule.c"
        __label__ = 29; break; //@line 1540 "_testcapimodule.c"
      case 29: // $bb29
        var $124=$known; //@line 1541 "_testcapimodule.c"
        var $125=$124+8; //@line 1541 "_testcapimodule.c"
        var $126=HEAP[$125]; //@line 1541 "_testcapimodule.c"
        var $127=$known; //@line 1541 "_testcapimodule.c"
        var $128=$127+4; //@line 1541 "_testcapimodule.c"
        var $129=HEAP[$128]; //@line 1541 "_testcapimodule.c"
        var $130=_sprintf(_buffer_10522, __str143, allocate([__str144,0,0,0,$129,0,0,0,$126,0,0,0], ["i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1541 "_testcapimodule.c"
        $error=_buffer_10522; //@line 1541 "_testcapimodule.c"
        __label__ = 57; break; //@line 1541 "_testcapimodule.c"
      case 30: // $bb30
        var $131=$known; //@line 1543 "_testcapimodule.c"
        var $132=$131+8; //@line 1543 "_testcapimodule.c"
        var $133=HEAP[$132]; //@line 1543 "_testcapimodule.c"
        var $134=$module; //@line 1543 "_testcapimodule.c"
        var $135=_PyObject_GetAttrString($134, $133); //@line 1543 "_testcapimodule.c"
        $object=$135; //@line 1543 "_testcapimodule.c"
        var $136=$object; //@line 1544 "_testcapimodule.c"
        var $137=($136)==0; //@line 1544 "_testcapimodule.c"
        if ($137) { __label__ = 31; break; } else { __label__ = 34; break; } //@line 1544 "_testcapimodule.c"
      case 31: // $bb31
        var $138=$module; //@line 1545 "_testcapimodule.c"
        var $139=$138; //@line 1545 "_testcapimodule.c"
        var $140=HEAP[$139]; //@line 1545 "_testcapimodule.c"
        var $141=($140) - 1; //@line 1545 "_testcapimodule.c"
        var $142=$module; //@line 1545 "_testcapimodule.c"
        var $143=$142; //@line 1545 "_testcapimodule.c"
        HEAP[$143]=$141; //@line 1545 "_testcapimodule.c"
        var $144=$module; //@line 1545 "_testcapimodule.c"
        var $145=$144; //@line 1545 "_testcapimodule.c"
        var $146=HEAP[$145]; //@line 1545 "_testcapimodule.c"
        var $147=($146)==0; //@line 1545 "_testcapimodule.c"
        if ($147) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 1545 "_testcapimodule.c"
      case 32: // $bb32
        var $148=$module; //@line 1545 "_testcapimodule.c"
        var $149=$148+4; //@line 1545 "_testcapimodule.c"
        var $150=HEAP[$149]; //@line 1545 "_testcapimodule.c"
        var $151=$150+24; //@line 1545 "_testcapimodule.c"
        var $152=HEAP[$151]; //@line 1545 "_testcapimodule.c"
        var $153=$module; //@line 1545 "_testcapimodule.c"
        FUNCTION_TABLE[$152]($153); //@line 1545 "_testcapimodule.c"
        __label__ = 33; break; //@line 1545 "_testcapimodule.c"
      case 33: // $bb33
        $0=0; //@line 1546 "_testcapimodule.c"
        __label__ = 59; break; //@line 1546 "_testcapimodule.c"
      case 34: // $bb34
        var $154=$object; //@line 1548 "_testcapimodule.c"
        var $155=_PyCapsule_GetPointer($154, __str145); //@line 1548 "_testcapimodule.c"
        $pointer2=$155; //@line 1548 "_testcapimodule.c"
        var $156=_PyErr_Occurred(); //@line 1550 "_testcapimodule.c"
        var $157=($156)==0; //@line 1550 "_testcapimodule.c"
        if ($157) { __label__ = 35; break; } else { __label__ = 40; break; } //@line 1550 "_testcapimodule.c"
      case 35: // $bb35
        var $158=$object; //@line 1551 "_testcapimodule.c"
        var $159=$158; //@line 1551 "_testcapimodule.c"
        var $160=HEAP[$159]; //@line 1551 "_testcapimodule.c"
        var $161=($160) - 1; //@line 1551 "_testcapimodule.c"
        var $162=$object; //@line 1551 "_testcapimodule.c"
        var $163=$162; //@line 1551 "_testcapimodule.c"
        HEAP[$163]=$161; //@line 1551 "_testcapimodule.c"
        var $164=$object; //@line 1551 "_testcapimodule.c"
        var $165=$164; //@line 1551 "_testcapimodule.c"
        var $166=HEAP[$165]; //@line 1551 "_testcapimodule.c"
        var $167=($166)==0; //@line 1551 "_testcapimodule.c"
        if ($167) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 1551 "_testcapimodule.c"
      case 36: // $bb36
        var $168=$object; //@line 1551 "_testcapimodule.c"
        var $169=$168+4; //@line 1551 "_testcapimodule.c"
        var $170=HEAP[$169]; //@line 1551 "_testcapimodule.c"
        var $171=$170+24; //@line 1551 "_testcapimodule.c"
        var $172=HEAP[$171]; //@line 1551 "_testcapimodule.c"
        var $173=$object; //@line 1551 "_testcapimodule.c"
        FUNCTION_TABLE[$172]($173); //@line 1551 "_testcapimodule.c"
        __label__ = 37; break; //@line 1551 "_testcapimodule.c"
      case 37: // $bb37
        var $174=$module; //@line 1552 "_testcapimodule.c"
        var $175=$174; //@line 1552 "_testcapimodule.c"
        var $176=HEAP[$175]; //@line 1552 "_testcapimodule.c"
        var $177=($176) - 1; //@line 1552 "_testcapimodule.c"
        var $178=$module; //@line 1552 "_testcapimodule.c"
        var $179=$178; //@line 1552 "_testcapimodule.c"
        HEAP[$179]=$177; //@line 1552 "_testcapimodule.c"
        var $180=$module; //@line 1552 "_testcapimodule.c"
        var $181=$180; //@line 1552 "_testcapimodule.c"
        var $182=HEAP[$181]; //@line 1552 "_testcapimodule.c"
        var $183=($182)==0; //@line 1552 "_testcapimodule.c"
        if ($183) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1552 "_testcapimodule.c"
      case 38: // $bb38
        var $184=$module; //@line 1552 "_testcapimodule.c"
        var $185=$184+4; //@line 1552 "_testcapimodule.c"
        var $186=HEAP[$185]; //@line 1552 "_testcapimodule.c"
        var $187=$186+24; //@line 1552 "_testcapimodule.c"
        var $188=HEAP[$187]; //@line 1552 "_testcapimodule.c"
        var $189=$module; //@line 1552 "_testcapimodule.c"
        FUNCTION_TABLE[$188]($189); //@line 1552 "_testcapimodule.c"
        __label__ = 39; break; //@line 1552 "_testcapimodule.c"
      case 39: // $bb39
        var $190=$known; //@line 1553 "_testcapimodule.c"
        var $191=$190+8; //@line 1553 "_testcapimodule.c"
        var $192=HEAP[$191]; //@line 1553 "_testcapimodule.c"
        var $193=$known; //@line 1553 "_testcapimodule.c"
        var $194=$193+4; //@line 1553 "_testcapimodule.c"
        var $195=HEAP[$194]; //@line 1553 "_testcapimodule.c"
        var $196=_sprintf(_buffer_10522, __str143, allocate([__str139,0,0,0,$195,0,0,0,$192,0,0,0], ["i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1553 "_testcapimodule.c"
        $error=_buffer_10522; //@line 1553 "_testcapimodule.c"
        __label__ = 57; break; //@line 1553 "_testcapimodule.c"
      case 40: // $bb40
        _PyErr_Clear(); //@line 1555 "_testcapimodule.c"
        var $197=$pointer2; //@line 1556 "_testcapimodule.c"
        var $198=($197)!=0; //@line 1556 "_testcapimodule.c"
        if ($198) { __label__ = 41; break; } else { __label__ = 48; break; } //@line 1556 "_testcapimodule.c"
      case 41: // $bb41
        var $199=$module; //@line 1557 "_testcapimodule.c"
        var $200=$199; //@line 1557 "_testcapimodule.c"
        var $201=HEAP[$200]; //@line 1557 "_testcapimodule.c"
        var $202=($201) - 1; //@line 1557 "_testcapimodule.c"
        var $203=$module; //@line 1557 "_testcapimodule.c"
        var $204=$203; //@line 1557 "_testcapimodule.c"
        HEAP[$204]=$202; //@line 1557 "_testcapimodule.c"
        var $205=$module; //@line 1557 "_testcapimodule.c"
        var $206=$205; //@line 1557 "_testcapimodule.c"
        var $207=HEAP[$206]; //@line 1557 "_testcapimodule.c"
        var $208=($207)==0; //@line 1557 "_testcapimodule.c"
        if ($208) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1557 "_testcapimodule.c"
      case 42: // $bb42
        var $209=$module; //@line 1557 "_testcapimodule.c"
        var $210=$209+4; //@line 1557 "_testcapimodule.c"
        var $211=HEAP[$210]; //@line 1557 "_testcapimodule.c"
        var $212=$211+24; //@line 1557 "_testcapimodule.c"
        var $213=HEAP[$212]; //@line 1557 "_testcapimodule.c"
        var $214=$module; //@line 1557 "_testcapimodule.c"
        FUNCTION_TABLE[$213]($214); //@line 1557 "_testcapimodule.c"
        __label__ = 43; break; //@line 1557 "_testcapimodule.c"
      case 43: // $bb43
        var $215=$object; //@line 1558 "_testcapimodule.c"
        var $216=$215; //@line 1558 "_testcapimodule.c"
        var $217=HEAP[$216]; //@line 1558 "_testcapimodule.c"
        var $218=($217) - 1; //@line 1558 "_testcapimodule.c"
        var $219=$object; //@line 1558 "_testcapimodule.c"
        var $220=$219; //@line 1558 "_testcapimodule.c"
        HEAP[$220]=$218; //@line 1558 "_testcapimodule.c"
        var $221=$object; //@line 1558 "_testcapimodule.c"
        var $222=$221; //@line 1558 "_testcapimodule.c"
        var $223=HEAP[$222]; //@line 1558 "_testcapimodule.c"
        var $224=($223)==0; //@line 1558 "_testcapimodule.c"
        if ($224) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1558 "_testcapimodule.c"
      case 44: // $bb44
        var $225=$object; //@line 1558 "_testcapimodule.c"
        var $226=$225+4; //@line 1558 "_testcapimodule.c"
        var $227=HEAP[$226]; //@line 1558 "_testcapimodule.c"
        var $228=$227+24; //@line 1558 "_testcapimodule.c"
        var $229=HEAP[$228]; //@line 1558 "_testcapimodule.c"
        var $230=$object; //@line 1558 "_testcapimodule.c"
        FUNCTION_TABLE[$229]($230); //@line 1558 "_testcapimodule.c"
        __label__ = 45; break; //@line 1558 "_testcapimodule.c"
      case 45: // $bb45
        var $231=$pointer2; //@line 1559 "_testcapimodule.c"
        var $232=$pointer; //@line 1559 "_testcapimodule.c"
        var $233=($231)==($232); //@line 1559 "_testcapimodule.c"
        var $234=$known; //@line 1560 "_testcapimodule.c"
        var $235=$234+8; //@line 1560 "_testcapimodule.c"
        var $236=HEAP[$235]; //@line 1560 "_testcapimodule.c"
        var $237=$known; //@line 1560 "_testcapimodule.c"
        var $238=$237+4; //@line 1560 "_testcapimodule.c"
        var $239=HEAP[$238]; //@line 1560 "_testcapimodule.c"
        if ($233) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 1559 "_testcapimodule.c"
      case 46: // $bb46
        var $240=_sprintf(_buffer_10522, __str143, allocate([__str146,0,0,0,$239,0,0,0,$236,0,0,0], ["i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1560 "_testcapimodule.c"
        $error=_buffer_10522; //@line 1560 "_testcapimodule.c"
        __label__ = 57; break; //@line 1560 "_testcapimodule.c"
      case 47: // $bb47
        var $241=_sprintf(_buffer_10522, __str143, allocate([__str141,0,0,0,$239,0,0,0,$236,0,0,0], ["i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1563 "_testcapimodule.c"
        $error=_buffer_10522; //@line 1563 "_testcapimodule.c"
        __label__ = 57; break; //@line 1563 "_testcapimodule.c"
      case 48: // $bb48
        var $242=$object; //@line 1567 "_testcapimodule.c"
        var $243=$242; //@line 1567 "_testcapimodule.c"
        var $244=HEAP[$243]; //@line 1567 "_testcapimodule.c"
        var $245=($244) - 1; //@line 1567 "_testcapimodule.c"
        var $246=$object; //@line 1567 "_testcapimodule.c"
        var $247=$246; //@line 1567 "_testcapimodule.c"
        HEAP[$247]=$245; //@line 1567 "_testcapimodule.c"
        var $248=$object; //@line 1567 "_testcapimodule.c"
        var $249=$248; //@line 1567 "_testcapimodule.c"
        var $250=HEAP[$249]; //@line 1567 "_testcapimodule.c"
        var $251=($250)==0; //@line 1567 "_testcapimodule.c"
        if ($251) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 1567 "_testcapimodule.c"
      case 49: // $bb49
        var $252=$object; //@line 1567 "_testcapimodule.c"
        var $253=$252+4; //@line 1567 "_testcapimodule.c"
        var $254=HEAP[$253]; //@line 1567 "_testcapimodule.c"
        var $255=$254+24; //@line 1567 "_testcapimodule.c"
        var $256=HEAP[$255]; //@line 1567 "_testcapimodule.c"
        var $257=$object; //@line 1567 "_testcapimodule.c"
        FUNCTION_TABLE[$256]($257); //@line 1567 "_testcapimodule.c"
        __label__ = 50; break; //@line 1567 "_testcapimodule.c"
      case 50: // $bb50
        var $258=$module; //@line 1568 "_testcapimodule.c"
        var $259=$258; //@line 1568 "_testcapimodule.c"
        var $260=HEAP[$259]; //@line 1568 "_testcapimodule.c"
        var $261=($260) - 1; //@line 1568 "_testcapimodule.c"
        var $262=$module; //@line 1568 "_testcapimodule.c"
        var $263=$262; //@line 1568 "_testcapimodule.c"
        HEAP[$263]=$261; //@line 1568 "_testcapimodule.c"
        var $264=$module; //@line 1568 "_testcapimodule.c"
        var $265=$264; //@line 1568 "_testcapimodule.c"
        var $266=HEAP[$265]; //@line 1568 "_testcapimodule.c"
        var $267=($266)==0; //@line 1568 "_testcapimodule.c"
        if ($267) { __label__ = 51; break; } else { __label__ = 53; break; } //@line 1568 "_testcapimodule.c"
      case 51: // $bb51
        var $268=$module; //@line 1568 "_testcapimodule.c"
        var $269=$268+4; //@line 1568 "_testcapimodule.c"
        var $270=HEAP[$269]; //@line 1568 "_testcapimodule.c"
        var $271=$270+24; //@line 1568 "_testcapimodule.c"
        var $272=HEAP[$271]; //@line 1568 "_testcapimodule.c"
        var $273=$module; //@line 1568 "_testcapimodule.c"
        FUNCTION_TABLE[$272]($273); //@line 1568 "_testcapimodule.c"
        __label__ = 53; break; //@line 1568 "_testcapimodule.c"
      case 52: // $bb53
        _PyErr_Clear(); //@line 1571 "_testcapimodule.c"
        __label__ = 53; break; //@line 1571 "_testcapimodule.c"
      case 53: // $bb54
        var $274=$known; //@line 1522 "_testcapimodule.c"
        var $275=$274+12; //@line 1522 "_testcapimodule.c"
        $known=$275; //@line 1522 "_testcapimodule.c"
        __label__ = 54; break; //@line 1522 "_testcapimodule.c"
      case 54: // $bb55
        var $276=$known; //@line 1522 "_testcapimodule.c"
        var $277=$276+4; //@line 1522 "_testcapimodule.c"
        var $278=HEAP[$277]; //@line 1522 "_testcapimodule.c"
        var $279=($278)!=0; //@line 1522 "_testcapimodule.c"
        if ($279) { __label__ = 25; break; } else { __label__ = 55; break; } //@line 1522 "_testcapimodule.c"
      case 55: // $exitthread_pre_split
        var $_pr=$error;
        __lastLabel__ = 55; __label__ = 56; break;
      case 56: // $exit
        var $280=__lastLabel__ == 55 ? $_pr : (__lastLabel__ == 11 ? $64 : (__lastLabel__ == 7 ? $47 : ($26)));
        var $281=($280)!=0; //@line 1575 "_testcapimodule.c"
        if ($281) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 1575 "_testcapimodule.c"
      case 57: // $bb56
        var $282=$error; //@line 1576 "_testcapimodule.c"
        var $283=_raiseTestError(__str147, $282); //@line 1576 "_testcapimodule.c"
        $0=$283; //@line 1576 "_testcapimodule.c"
        __label__ = 59; break; //@line 1576 "_testcapimodule.c"
      case 58: // $bb57
        var $284=HEAP[__Py_NoneStruct]; //@line 1578 "_testcapimodule.c"
        var $285=($284) + 1; //@line 1578 "_testcapimodule.c"
        HEAP[__Py_NoneStruct]=$285; //@line 1578 "_testcapimodule.c"
        $0=__Py_NoneStruct; //@line 1578 "_testcapimodule.c"
        __label__ = 59; break; //@line 1578 "_testcapimodule.c"
      case 59: // $bb58
        var $286=$0; //@line 1546 "_testcapimodule.c"
        $retval=$286; //@line 1546 "_testcapimodule.c"
        var $retval59=$retval; //@line 1546 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval59; //@line 1546 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_with_docstring($self) {
    ;
    var __label__;
  
    var $retval;
    var $0;
    var $1=HEAP[__Py_NoneStruct]; //@line 1586 "_testcapimodule.c"
    var $2=($1) + 1; //@line 1586 "_testcapimodule.c"
    HEAP[__Py_NoneStruct]=$2; //@line 1586 "_testcapimodule.c"
    $0=__Py_NoneStruct; //@line 1586 "_testcapimodule.c"
    var $3=$0; //@line 1586 "_testcapimodule.c"
    $retval=$3; //@line 1586 "_testcapimodule.c"
    var $retval1=$retval; //@line 1586 "_testcapimodule.c"
    ;
    return $retval1; //@line 1586 "_testcapimodule.c"
  }
  

  function _traceback_print($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $file=__stackBase__;
        var $traceback=__stackBase__+4;
        var $result;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1597 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, __str148, allocate([$traceback,0,0,0,$file,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1597 "_testcapimodule.c"
        var $3=($2)==0; //@line 1597 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1597 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 1599 "_testcapimodule.c"
        __label__ = 5; break; //@line 1599 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$file]; //@line 1601 "_testcapimodule.c"
        var $5=HEAP[$traceback]; //@line 1601 "_testcapimodule.c"
        var $6=_PyTraceBack_Print($5, $4); //@line 1601 "_testcapimodule.c"
        $result=$6; //@line 1601 "_testcapimodule.c"
        var $7=$result; //@line 1602 "_testcapimodule.c"
        var $8=($7) < 0; //@line 1602 "_testcapimodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1602 "_testcapimodule.c"
      case 3: // $bb2
        $0=0; //@line 1603 "_testcapimodule.c"
        __label__ = 5; break; //@line 1603 "_testcapimodule.c"
      case 4: // $bb3
        var $9=HEAP[__Py_NoneStruct]; //@line 1604 "_testcapimodule.c"
        var $10=($9) + 1; //@line 1604 "_testcapimodule.c"
        HEAP[__Py_NoneStruct]=$10; //@line 1604 "_testcapimodule.c"
        $0=__Py_NoneStruct; //@line 1604 "_testcapimodule.c"
        __label__ = 5; break; //@line 1604 "_testcapimodule.c"
      case 5: // $bb4
        var $11=$0; //@line 1599 "_testcapimodule.c"
        $retval=$11; //@line 1599 "_testcapimodule.c"
        var $retval5=$retval; //@line 1599 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 1599 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _code_newempty($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $filename=__stackBase__;
        var $funcname=__stackBase__+4;
        var $firstlineno=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1615 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, __str149, allocate([$filename,0,0,0,$funcname,0,0,0,$firstlineno,0,0,0], ["i8**",0,0,0,"i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1615 "_testcapimodule.c"
        var $3=($2)==0; //@line 1615 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1615 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 1617 "_testcapimodule.c"
        __label__ = 3; break; //@line 1617 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$firstlineno]; //@line 1619 "_testcapimodule.c"
        var $5=HEAP[$funcname]; //@line 1619 "_testcapimodule.c"
        var $6=HEAP[$filename]; //@line 1619 "_testcapimodule.c"
        var $7=_PyCode_NewEmpty($6, $5, $4); //@line 1619 "_testcapimodule.c"
        var $8=$7; //@line 1619 "_testcapimodule.c"
        $0=$8; //@line 1619 "_testcapimodule.c"
        __label__ = 3; break; //@line 1619 "_testcapimodule.c"
      case 3: // $bb2
        var $9=$0; //@line 1617 "_testcapimodule.c"
        $retval=$9; //@line 1617 "_testcapimodule.c"
        var $retval3=$retval; //@line 1617 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1617 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _make_exception_with_doc($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwargs_addr;
        var $retval;
        var $0;
        var $name=__stackBase__;
        var $doc=__stackBase__+4;
        var $base=__stackBase__+8;
        var $dict=__stackBase__+12;
        $self_addr=$self;
        $args_addr=$args;
        $kwargs_addr=$kwargs;
        HEAP[$doc]=0; //@line 1628 "_testcapimodule.c"
        HEAP[$base]=0; //@line 1629 "_testcapimodule.c"
        HEAP[$dict]=0; //@line 1630 "_testcapimodule.c"
        var $1=$args_addr; //@line 1634 "_testcapimodule.c"
        var $2=$kwargs_addr; //@line 1634 "_testcapimodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str150, _kwlist_10723, allocate([$name,0,0,0,$doc,0,0,0,$base,0,0,0,$dict,0,0,0], ["i8**",0,0,0,"i8**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1634 "_testcapimodule.c"
        var $4=($3)==0; //@line 1634 "_testcapimodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1634 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 1637 "_testcapimodule.c"
        __label__ = 3; break; //@line 1637 "_testcapimodule.c"
      case 2: // $bb1
        var $5=HEAP[$dict]; //@line 1639 "_testcapimodule.c"
        var $6=HEAP[$base]; //@line 1639 "_testcapimodule.c"
        var $7=HEAP[$doc]; //@line 1639 "_testcapimodule.c"
        var $8=HEAP[$name]; //@line 1639 "_testcapimodule.c"
        var $9=_PyErr_NewExceptionWithDoc($8, $7, $6, $5); //@line 1639 "_testcapimodule.c"
        $0=$9; //@line 1639 "_testcapimodule.c"
        __label__ = 3; break; //@line 1639 "_testcapimodule.c"
      case 3: // $bb2
        var $10=$0; //@line 1637 "_testcapimodule.c"
        $retval=$10; //@line 1637 "_testcapimodule.c"
        var $retval3=$retval; //@line 1637 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1637 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_structmembers_new($type, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwargs_addr;
        var $retval;
        var $0;
        var $ob;
        var $s=__stackBase__;
        var $string_len=__stackBase__+4;
        $type_addr=$type;
        $args_addr=$args;
        $kwargs_addr=$kwargs;
        HEAP[$s]=0; //@line 1765 "_testcapimodule.c"
        HEAP[$string_len]=0; //@line 1766 "_testcapimodule.c"
        var $1=$type_addr; //@line 1767 "_testcapimodule.c"
        var $2=__PyObject_New($1); //@line 1767 "_testcapimodule.c"
        var $3=$2; //@line 1767 "_testcapimodule.c"
        $ob=$3; //@line 1767 "_testcapimodule.c"
        var $4=$ob; //@line 1768 "_testcapimodule.c"
        var $5=($4)==0; //@line 1768 "_testcapimodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1768 "_testcapimodule.c"
      case 1: // $bb
        $0=0; //@line 1769 "_testcapimodule.c"
        __label__ = 14; break; //@line 1769 "_testcapimodule.c"
      case 2: // $bb1
        var $6=$ob; //@line 1770 "_testcapimodule.c"
        var $7=$6+8; //@line 1770 "_testcapimodule.c"
        var $8=$7; //@line 1770 "_testcapimodule.c"
        _llvm_memset_p0i8_i32($8, 0, 60, 1, 0); //@line 1770 "_testcapimodule.c"
        var $9=$ob; //@line 1771 "_testcapimodule.c"
        var $10=$9+8; //@line 1771 "_testcapimodule.c"
        var $11=$10+52; //@line 1771 "_testcapimodule.c"
        var $12=$ob; //@line 1771 "_testcapimodule.c"
        var $13=$12+8; //@line 1771 "_testcapimodule.c"
        var $14=$13+44; //@line 1771 "_testcapimodule.c"
        var $15=$ob; //@line 1771 "_testcapimodule.c"
        var $16=$15+8; //@line 1771 "_testcapimodule.c"
        var $17=$16+28; //@line 1771 "_testcapimodule.c"
        var $18=$ob; //@line 1771 "_testcapimodule.c"
        var $19=$18+8; //@line 1771 "_testcapimodule.c"
        var $20=$19+24; //@line 1771 "_testcapimodule.c"
        var $21=$ob; //@line 1771 "_testcapimodule.c"
        var $22=$21+8; //@line 1771 "_testcapimodule.c"
        var $23=$22+20; //@line 1771 "_testcapimodule.c"
        var $24=$ob; //@line 1771 "_testcapimodule.c"
        var $25=$24+8; //@line 1771 "_testcapimodule.c"
        var $26=$25+16; //@line 1771 "_testcapimodule.c"
        var $27=$ob; //@line 1771 "_testcapimodule.c"
        var $28=$27+8; //@line 1771 "_testcapimodule.c"
        var $29=$28+12; //@line 1771 "_testcapimodule.c"
        var $30=$ob; //@line 1771 "_testcapimodule.c"
        var $31=$30+8; //@line 1771 "_testcapimodule.c"
        var $32=$31+8; //@line 1771 "_testcapimodule.c"
        var $33=$ob; //@line 1771 "_testcapimodule.c"
        var $34=$33+8; //@line 1771 "_testcapimodule.c"
        var $35=$34+6; //@line 1771 "_testcapimodule.c"
        var $36=$ob; //@line 1771 "_testcapimodule.c"
        var $37=$36+8; //@line 1771 "_testcapimodule.c"
        var $38=$37+4; //@line 1771 "_testcapimodule.c"
        var $39=$ob; //@line 1771 "_testcapimodule.c"
        var $40=$39+8; //@line 1771 "_testcapimodule.c"
        var $41=$40+2; //@line 1771 "_testcapimodule.c"
        var $42=$ob; //@line 1771 "_testcapimodule.c"
        var $43=$42+8; //@line 1771 "_testcapimodule.c"
        var $44=$43+1; //@line 1771 "_testcapimodule.c"
        var $45=$ob; //@line 1771 "_testcapimodule.c"
        var $46=$45+8; //@line 1771 "_testcapimodule.c"
        var $47=$46; //@line 1771 "_testcapimodule.c"
        var $48=$args_addr; //@line 1771 "_testcapimodule.c"
        var $49=$kwargs_addr; //@line 1771 "_testcapimodule.c"
        var $50=_PyArg_ParseTupleAndKeywords($48, $49, __str198, _keywords_10762, allocate([$47,0,0,0,$44,0,0,0,$41,0,0,0,$38,0,0,0,$35,0,0,0,$32,0,0,0,$29,0,0,0,$26,0,0,0,$23,0,0,0,$20,0,0,0,$17,0,0,0,$s,0,0,0,$string_len,0,0,0,$14,0,0,0,$11,0,0,0], ["i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i16*",0,0,0,"i16*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"float*",0,0,0,"double*",0,0,0,"i8**",0,0,0,"i32*",0,0,0,"i64*",0,0,0,"i64*",0,0,0], ALLOC_STACK)); //@line 1771 "_testcapimodule.c"
        var $51=($50)==0; //@line 1771 "_testcapimodule.c"
        if ($51) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1771 "_testcapimodule.c"
      case 3: // $bb2
        var $52=$ob; //@line 1789 "_testcapimodule.c"
        var $53=$52; //@line 1789 "_testcapimodule.c"
        var $54=$53; //@line 1789 "_testcapimodule.c"
        var $55=HEAP[$54]; //@line 1789 "_testcapimodule.c"
        var $56=($55) - 1; //@line 1789 "_testcapimodule.c"
        var $57=$53; //@line 1789 "_testcapimodule.c"
        HEAP[$57]=$56; //@line 1789 "_testcapimodule.c"
        var $58=$53; //@line 1789 "_testcapimodule.c"
        var $59=HEAP[$58]; //@line 1789 "_testcapimodule.c"
        var $60=($59)==0; //@line 1789 "_testcapimodule.c"
        if ($60) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1789 "_testcapimodule.c"
      case 4: // $bb3
        var $61=$ob; //@line 1789 "_testcapimodule.c"
        var $62=$61; //@line 1789 "_testcapimodule.c"
        var $63=$62+4; //@line 1789 "_testcapimodule.c"
        var $64=HEAP[$63]; //@line 1789 "_testcapimodule.c"
        var $65=$64+24; //@line 1789 "_testcapimodule.c"
        var $66=HEAP[$65]; //@line 1789 "_testcapimodule.c"
        var $67=$ob; //@line 1789 "_testcapimodule.c"
        var $68=$67; //@line 1789 "_testcapimodule.c"
        FUNCTION_TABLE[$66]($68); //@line 1789 "_testcapimodule.c"
        __label__ = 5; break; //@line 1789 "_testcapimodule.c"
      case 5: // $bb4
        $0=0; //@line 1790 "_testcapimodule.c"
        __label__ = 14; break; //@line 1790 "_testcapimodule.c"
      case 6: // $bb5
        var $69=HEAP[$s]; //@line 1792 "_testcapimodule.c"
        var $70=($69)!=0; //@line 1792 "_testcapimodule.c"
        if ($70) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 1792 "_testcapimodule.c"
      case 7: // $bb6
        var $71=HEAP[$string_len]; //@line 1793 "_testcapimodule.c"
        var $72=($71) > 5; //@line 1793 "_testcapimodule.c"
        if ($72) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1793 "_testcapimodule.c"
      case 8: // $bb7
        var $73=$ob; //@line 1794 "_testcapimodule.c"
        var $74=$73; //@line 1794 "_testcapimodule.c"
        var $75=$74; //@line 1794 "_testcapimodule.c"
        var $76=HEAP[$75]; //@line 1794 "_testcapimodule.c"
        var $77=($76) - 1; //@line 1794 "_testcapimodule.c"
        var $78=$74; //@line 1794 "_testcapimodule.c"
        HEAP[$78]=$77; //@line 1794 "_testcapimodule.c"
        var $79=$74; //@line 1794 "_testcapimodule.c"
        var $80=HEAP[$79]; //@line 1794 "_testcapimodule.c"
        var $81=($80)==0; //@line 1794 "_testcapimodule.c"
        if ($81) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1794 "_testcapimodule.c"
      case 9: // $bb8
        var $82=$ob; //@line 1794 "_testcapimodule.c"
        var $83=$82; //@line 1794 "_testcapimodule.c"
        var $84=$83+4; //@line 1794 "_testcapimodule.c"
        var $85=HEAP[$84]; //@line 1794 "_testcapimodule.c"
        var $86=$85+24; //@line 1794 "_testcapimodule.c"
        var $87=HEAP[$86]; //@line 1794 "_testcapimodule.c"
        var $88=$ob; //@line 1794 "_testcapimodule.c"
        var $89=$88; //@line 1794 "_testcapimodule.c"
        FUNCTION_TABLE[$87]($89); //@line 1794 "_testcapimodule.c"
        __label__ = 10; break; //@line 1794 "_testcapimodule.c"
      case 10: // $bb9
        var $90=HEAP[_PyExc_ValueError]; //@line 1795 "_testcapimodule.c"
        _PyErr_SetString($90, __str199); //@line 1795 "_testcapimodule.c"
        $0=0; //@line 1796 "_testcapimodule.c"
        __label__ = 14; break; //@line 1796 "_testcapimodule.c"
      case 11: // $bb10
        var $91=HEAP[$s]; //@line 1798 "_testcapimodule.c"
        var $92=$ob; //@line 1798 "_testcapimodule.c"
        var $93=$92+8; //@line 1798 "_testcapimodule.c"
        var $94=$93+36; //@line 1798 "_testcapimodule.c"
        var $95=$94; //@line 1798 "_testcapimodule.c"
        var $96=_strcpy($95, $91); //@line 1798 "_testcapimodule.c"
        __label__ = 13; break; //@line 1798 "_testcapimodule.c"
      case 12: // $bb11
        var $97=$ob; //@line 1801 "_testcapimodule.c"
        var $98=$97+8; //@line 1801 "_testcapimodule.c"
        var $99=$98+36; //@line 1801 "_testcapimodule.c"
        var $100=$99; //@line 1801 "_testcapimodule.c"
        _llvm_memset_p0i8_i32($100, 0, 1, 1, 0);
        __label__ = 13; break; //@line 1801 "_testcapimodule.c"
      case 13: // $bb12
        var $101=$ob; //@line 1803 "_testcapimodule.c"
        var $102=$101; //@line 1803 "_testcapimodule.c"
        $0=$102; //@line 1803 "_testcapimodule.c"
        __label__ = 14; break; //@line 1803 "_testcapimodule.c"
      case 14: // $bb13
        var $103=$0; //@line 1769 "_testcapimodule.c"
        $retval=$103; //@line 1769 "_testcapimodule.c"
        var $retval14=$retval; //@line 1769 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 1769 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_structmembers_free($ob) {
    ;
    var __label__;
  
    var $ob_addr;
    $ob_addr=$ob;
    var $0=$ob_addr; //@line 1809 "_testcapimodule.c"
    var $1=$0; //@line 1809 "_testcapimodule.c"
    _free($1); //@line 1809 "_testcapimodule.c"
    ;
    return; //@line 1810 "_testcapimodule.c"
  }
  

  function _init_testcapi() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $0=_Py_InitModule4(__str203, _TestMethods, 0, 0, 1013); //@line 1859 "_testcapimodule.c"
        $m=$0; //@line 1859 "_testcapimodule.c"
        var $1=$m; //@line 1860 "_testcapimodule.c"
        var $2=($1)==0; //@line 1860 "_testcapimodule.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1860 "_testcapimodule.c"
      case 1: // $bb
        HEAP[__HashInheritanceTester_Type+4]=_PyType_Type; //@line 1863 "_testcapimodule.c"
        HEAP[_test_structmembersType+4]=_PyType_Type; //@line 1865 "_testcapimodule.c"
        var $3=HEAP[_test_structmembersType]; //@line 1866 "_testcapimodule.c"
        var $4=($3) + 1; //@line 1866 "_testcapimodule.c"
        HEAP[_test_structmembersType]=$4; //@line 1866 "_testcapimodule.c"
        var $5=$m; //@line 1869 "_testcapimodule.c"
        var $6=_PyModule_AddObject($5, __str204, _test_structmembersType); //@line 1869 "_testcapimodule.c"
        var $7=_PyInt_FromLong(127); //@line 1871 "_testcapimodule.c"
        var $8=$m; //@line 1871 "_testcapimodule.c"
        var $9=_PyModule_AddObject($8, __str205, $7); //@line 1871 "_testcapimodule.c"
        var $10=_PyInt_FromLong(-128); //@line 1872 "_testcapimodule.c"
        var $11=$m; //@line 1872 "_testcapimodule.c"
        var $12=_PyModule_AddObject($11, __str206, $10); //@line 1872 "_testcapimodule.c"
        var $13=_PyInt_FromLong(255); //@line 1873 "_testcapimodule.c"
        var $14=$m; //@line 1873 "_testcapimodule.c"
        var $15=_PyModule_AddObject($14, __str207, $13); //@line 1873 "_testcapimodule.c"
        var $16=_PyInt_FromLong(32767); //@line 1874 "_testcapimodule.c"
        var $17=$m; //@line 1874 "_testcapimodule.c"
        var $18=_PyModule_AddObject($17, __str208, $16); //@line 1874 "_testcapimodule.c"
        var $19=_PyInt_FromLong(-32768); //@line 1875 "_testcapimodule.c"
        var $20=$m; //@line 1875 "_testcapimodule.c"
        var $21=_PyModule_AddObject($20, __str209, $19); //@line 1875 "_testcapimodule.c"
        var $22=_PyInt_FromLong(65535); //@line 1876 "_testcapimodule.c"
        var $23=$m; //@line 1876 "_testcapimodule.c"
        var $24=_PyModule_AddObject($23, __str210, $22); //@line 1876 "_testcapimodule.c"
        var $25=_PyLong_FromLong(2147483647); //@line 1877 "_testcapimodule.c"
        var $26=$m; //@line 1877 "_testcapimodule.c"
        var $27=_PyModule_AddObject($26, __str211, $25); //@line 1877 "_testcapimodule.c"
        var $28=_PyLong_FromLong(-2147483648); //@line 1878 "_testcapimodule.c"
        var $29=$m; //@line 1878 "_testcapimodule.c"
        var $30=_PyModule_AddObject($29, __str212, $28); //@line 1878 "_testcapimodule.c"
        var $31=_PyLong_FromUnsignedLong(-1); //@line 1879 "_testcapimodule.c"
        var $32=$m; //@line 1879 "_testcapimodule.c"
        var $33=_PyModule_AddObject($32, __str213, $31); //@line 1879 "_testcapimodule.c"
        var $34=_PyInt_FromLong(2147483647); //@line 1880 "_testcapimodule.c"
        var $35=$m; //@line 1880 "_testcapimodule.c"
        var $36=_PyModule_AddObject($35, __str214, $34); //@line 1880 "_testcapimodule.c"
        var $37=_PyInt_FromLong(-2147483648); //@line 1881 "_testcapimodule.c"
        var $38=$m; //@line 1881 "_testcapimodule.c"
        var $39=_PyModule_AddObject($38, __str215, $37); //@line 1881 "_testcapimodule.c"
        var $40=_PyLong_FromUnsignedLong(-1); //@line 1882 "_testcapimodule.c"
        var $41=$m; //@line 1882 "_testcapimodule.c"
        var $42=_PyModule_AddObject($41, __str216, $40); //@line 1882 "_testcapimodule.c"
        var $43=_PyFloat_FromDouble(3.4028234663852886e+38); //@line 1883 "_testcapimodule.c"
        var $44=$m; //@line 1883 "_testcapimodule.c"
        var $45=_PyModule_AddObject($44, __str217, $43); //@line 1883 "_testcapimodule.c"
        var $46=_PyFloat_FromDouble(1.1754943508222875e-38); //@line 1884 "_testcapimodule.c"
        var $47=$m; //@line 1884 "_testcapimodule.c"
        var $48=_PyModule_AddObject($47, __str218, $46); //@line 1884 "_testcapimodule.c"
        var $49=_PyFloat_FromDouble(1.7976931348623157e+308); //@line 1885 "_testcapimodule.c"
        var $50=$m; //@line 1885 "_testcapimodule.c"
        var $51=_PyModule_AddObject($50, __str219, $49); //@line 1885 "_testcapimodule.c"
        var $52=_PyFloat_FromDouble(2.2250738585072014e-308); //@line 1886 "_testcapimodule.c"
        var $53=$m; //@line 1886 "_testcapimodule.c"
        var $54=_PyModule_AddObject($53, __str220, $52); //@line 1886 "_testcapimodule.c"
        var $55=_PyLong_FromLongLong(9223372036854776000); //@line 1887 "_testcapimodule.c"
        var $56=$m; //@line 1887 "_testcapimodule.c"
        var $57=_PyModule_AddObject($56, __str221, $55); //@line 1887 "_testcapimodule.c"
        var $58=_PyLong_FromLongLong(-9223372036854776000); //@line 1888 "_testcapimodule.c"
        var $59=$m; //@line 1888 "_testcapimodule.c"
        var $60=_PyModule_AddObject($59, __str222, $58); //@line 1888 "_testcapimodule.c"
        var $61=_PyLong_FromUnsignedLongLong(-1); //@line 1889 "_testcapimodule.c"
        var $62=$m; //@line 1889 "_testcapimodule.c"
        var $63=_PyModule_AddObject($62, __str223, $61); //@line 1889 "_testcapimodule.c"
        var $64=_PyInt_FromSsize_t(2147483647); //@line 1890 "_testcapimodule.c"
        var $65=$m; //@line 1890 "_testcapimodule.c"
        var $66=_PyModule_AddObject($65, __str224, $64); //@line 1890 "_testcapimodule.c"
        var $67=_PyInt_FromSsize_t(-2147483648); //@line 1891 "_testcapimodule.c"
        var $68=$m; //@line 1891 "_testcapimodule.c"
        var $69=_PyModule_AddObject($68, __str225, $67); //@line 1891 "_testcapimodule.c"
        var $70=_PyInt_FromSsize_t(12); //@line 1892 "_testcapimodule.c"
        var $71=$m; //@line 1892 "_testcapimodule.c"
        var $72=_PyModule_AddObject($71, __str226, $70); //@line 1892 "_testcapimodule.c"
        var $73=_PyErr_NewException(__str227, 0, 0); //@line 1894 "_testcapimodule.c"
        HEAP[_TestError]=$73; //@line 1894 "_testcapimodule.c"
        var $74=HEAP[_TestError]; //@line 1895 "_testcapimodule.c"
        var $75=$74; //@line 1895 "_testcapimodule.c"
        var $76=HEAP[$75]; //@line 1895 "_testcapimodule.c"
        var $77=($76) + 1; //@line 1895 "_testcapimodule.c"
        var $78=$74; //@line 1895 "_testcapimodule.c"
        HEAP[$78]=$77; //@line 1895 "_testcapimodule.c"
        var $79=HEAP[_TestError]; //@line 1896 "_testcapimodule.c"
        var $80=$m; //@line 1896 "_testcapimodule.c"
        var $81=_PyModule_AddObject($80, __str228, $79); //@line 1896 "_testcapimodule.c"
        __label__ = 2; break; //@line 1896 "_testcapimodule.c"
      case 2: // $return
        ;
        return; //@line 1861 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_testcapi"] = _init_testcapi;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_raise_test_long_error,0,_raise_test_longlong_error,0,_capsule_destructor,0,_PyObject_Free,0,_PyObject_GenericGetAttr,0,_PyType_GenericNew,0,_broken_buffer_getbuffer,0,_raise_exception,0,_test_config,0,_test_datetime_capi,0,_test_list_api,0,_test_dict_iteration,0,_test_lazy_hash_inheritance,0,_test_broken_memoryview,0,_test_long_api,0,_test_long_and_overflow,0,_test_long_numbits,0,_test_k_code,0,_test_empty_argparse,0,_test_null_strings,0,_test_string_from_format,0,_test_with_docstring,0,_getargs_tuple,0,_getargs_keywords,0,_getargs_b,0,_getargs_B,0,_getargs_h,0,_getargs_H,0,_getargs_I,0,_getargs_k,0,_getargs_i,0,_getargs_l,0,_getargs_n,0,_getargs_L,0,_getargs_K,0,_test_longlong_api,0,_test_long_long_and_overflow,0,_test_L_code,0,_codec_incrementalencoder,0,_codec_incrementaldecoder,0,_test_u_code,0,_test_widechar,0,_test_capsule,0,_traceback_print,0,_code_newempty,0,_make_exception_with_doc,0,_test_structmembers_free,0,_PyObject_GenericSetAttr,0,_test_structmembers_new,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_PyDateTimeAPI=allocate(1, "%struct.PyDateTime_CAPI*", ALLOC_NORMAL);
_TestError=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str=allocate([105,110,116,101,114,110,97,108,32,101,114,114,111,114,32,109,115,103,32,116,111,111,32,108,97,114,103,101,0] /* internal error msg t */, "i8", ALLOC_NORMAL);
__str1=allocate([37,115,58,32,37,115,0] /* %s: %s\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([116,101,115,116,95,108,105,115,116,95,97,112,105,58,32,114,101,118,101,114,115,101,32,115,99,114,101,119,101,100,32,117,112,0] /* test_list_api: rever */, "i8", ALLOC_NORMAL);
__str4=allocate([116,101,115,116,95,100,105,99,116,95,105,116,101,114,97,116,105,111,110,58,32,100,105,99,116,32,105,116,101,114,97,116,105,111,110,32,119,101,110,116,32,119,114,111,110,103,32,0] /* test_dict_iteration: */, "i8", ALLOC_NORMAL);
__str5=allocate([104,97,115,104,105,110,104,101,114,105,116,97,110,99,101,116,101,115,116,101,114,0] /* hashinheritanceteste */, "i8", ALLOC_NORMAL);
__HashInheritanceTester_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str6=allocate([116,101,115,116,95,108,97,122,121,95,104,97,115,104,95,105,110,104,101,114,105,116,97,110,99,101,58,32,102,97,105,108,101,100,32,116,111,32,99,114,101,97,116,101,32,111,98,106,101,99,116,0] /* test_lazy_hash_inher */, "i8", ALLOC_NORMAL);
__str7=allocate([116,101,115,116,95,108,97,122,121,95,104,97,115,104,95,105,110,104,101,114,105,116,97,110,99,101,58,32,116,121,112,101,32,105,110,105,116,105,97,108,105,115,101,100,32,116,111,111,32,115,111,111,110,0] /* test_lazy_hash_inher */, "i8", ALLOC_NORMAL);
__str8=allocate([116,101,115,116,95,108,97,122,121,95,104,97,115,104,95,105,110,104,101,114,105,116,97,110,99,101,58,32,99,111,117,108,100,32,110,111,116,32,104,97,115,104,32,111,98,106,101,99,116,0] /* test_lazy_hash_inher */, "i8", ALLOC_NORMAL);
__str9=allocate([116,101,115,116,95,108,97,122,121,95,104,97,115,104,95,105,110,104,101,114,105,116,97,110,99,101,58,32,116,121,112,101,32,110,111,116,32,105,110,105,116,105,97,108,105,115,101,100,32,98,121,32,104,97,115,104,40,41,0] /* test_lazy_hash_inher */, "i8", ALLOC_NORMAL);
__str10=allocate([116,101,115,116,95,108,97,122,121,95,104,97,115,104,95,105,110,104,101,114,105,116,97,110,99,101,58,32,117,110,101,120,112,101,99,116,101,100,32,104,97,115,104,32,102,117,110,99,116,105,111,110,0] /* test_lazy_hash_inher */, "i8", ALLOC_NORMAL);
__str11=allocate([116,101,115,116,95,98,114,111,107,101,110,95,109,101,109,111,114,121,118,105,101,119,58,32,101,120,112,101,99,116,101,100,32,101,114,114,111,114,32,105,110,32,98,102,95,103,101,116,98,117,102,102,101,114,0] /* test_broken_memoryvi */, "i8", ALLOC_NORMAL);
_memoryviewtester_as_buffer=allocate(24, ["i32 (%struct.PyObject*, i32, i8**)*",0,0,0,"i32 (%struct.PyObject*, i32, i8**)*",0,0,0,"i32 (%struct.PyObject*, i32*)*",0,0,0,"i32 (%struct.PyObject*, i32, i8**)*",0,0,0,"i32 (%struct.PyObject*, %struct.Py_buffer*, i32)*",0,0,0,"void (%struct.PyObject*, %struct.Py_buffer*)*",0,0,0], ALLOC_NORMAL);
__str12=allocate([109,101,109,111,114,121,118,105,101,119,116,101,115,116,101,114,0] /* memoryviewtester\00 */, "i8", ALLOC_NORMAL);
__MemoryViewTester_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2228715, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str13=allocate([116,101,115,116,95,98,114,111,107,101,110,95,109,101,109,111,114,121,118,105,101,119,58,32,102,97,105,108,101,100,32,116,111,32,99,114,101,97,116,101,32,111,98,106,101,99,116,0] /* test_broken_memoryvi */, "i8", ALLOC_NORMAL);
__str14=allocate([116,101,115,116,95,98,114,111,107,101,110,95,109,101,109,111,114,121,118,105,101,119,58,32,109,101,109,111,114,121,118,105,101,119,40,41,32,100,105,100,110,39,116,32,114,97,105,115,101,32,97,110,32,69,120,99,101,112,116,105,111,110,0] /* test_broken_memoryvi */, "i8", ALLOC_NORMAL);
__str15=allocate([116,101,115,116,95,108,111,110,103,95,97,112,105,0] /* test_long_api\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([117,110,115,105,103,110,101,100,32,117,110,101,120,112,101,99,116,101,100,32,110,117,108,108,32,114,101,115,117,108,116,0] /* unsigned unexpected  */, "i8", ALLOC_NORMAL);
__str17=allocate([117,110,115,105,103,110,101,100,32,117,110,101,120,112,101,99,116,101,100,32,45,49,32,114,101,115,117,108,116,0] /* unsigned unexpected  */, "i8", ALLOC_NORMAL);
__str18=allocate([117,110,115,105,103,110,101,100,32,111,117,116,112,117,116,32,33,61,32,105,110,112,117,116,0] /* unsigned output != i */, "i8", ALLOC_NORMAL);
__str19=allocate([115,105,103,110,101,100,32,117,110,101,120,112,101,99,116,101,100,32,110,117,108,108,32,114,101,115,117,108,116,0] /* signed unexpected nu */, "i8", ALLOC_NORMAL);
__str20=allocate([115,105,103,110,101,100,32,117,110,101,120,112,101,99,116,101,100,32,45,49,32,114,101,115,117,108,116,0] /* signed unexpected -1 */, "i8", ALLOC_NORMAL);
__str21=allocate([115,105,103,110,101,100,32,111,117,116,112,117,116,32,33,61,32,105,110,112,117,116,0] /* signed output != inp */, "i8", ALLOC_NORMAL);
__str22=allocate([117,110,101,120,112,101,99,116,101,100,32,78,85,76,76,32,102,114,111,109,32,80,121,76,111,110,103,95,70,114,111,109,76,111,110,103,0] /* unexpected NULL from */, "i8", ALLOC_NORMAL);
__str23=allocate([117,110,101,120,112,101,99,116,101,100,32,78,85,76,76,32,102,114,111,109,32,80,121,78,117,109,98,101,114,95,78,101,103,97,116,105,118,101,0] /* unexpected NULL from */, "i8", ALLOC_NORMAL);
__str24=allocate([80,121,76,111,110,103,95,65,115,85,110,115,105,103,110,101,100,88,88,88,40,45,49,41,32,100,105,100,110,39,116,32,99,111,109,112,108,97,105,110,0] /* PyLong_AsUnsignedXXX */, "i8", ALLOC_NORMAL);
__str25=allocate([80,121,76,111,110,103,95,65,115,85,110,115,105,103,110,101,100,88,88,88,40,45,49,41,32,114,97,105,115,101,100,32,115,111,109,101,116,104,105,110,103,32,111,116,104,101,114,32,116,104,97,110,32,79,118,101,114,102,108,111,119,69,114,114,111,114,0] /* PyLong_AsUnsignedXXX */, "i8", ALLOC_NORMAL);
__str26=allocate([117,110,101,120,112,101,99,116,101,100,32,78,85,76,76,32,102,114,111,109,32,80,121,78,117,109,98,101,114,95,76,115,104,105,102,116,0] /* unexpected NULL from */, "i8", ALLOC_NORMAL);
__str27=allocate([80,121,76,111,110,103,95,65,115,85,110,115,105,103,110,101,100,88,88,88,40,50,42,42,78,66,73,84,83,41,32,100,105,100,110,39,116,32,99,111,109,112,108,97,105,110,0] /* PyLong_AsUnsignedXXX */, "i8", ALLOC_NORMAL);
__str28=allocate([80,121,76,111,110,103,95,65,115,85,110,115,105,103,110,101,100,88,88,88,40,50,42,42,78,66,73,84,83,41,32,114,97,105,115,101,100,32,115,111,109,101,116,104,105,110,103,32,111,116,104,101,114,32,116,104,97,110,32,79,118,101,114,102,108,111,119,69,114,114,111,114,0] /* PyLong_AsUnsignedXXX */, "i8", ALLOC_NORMAL);
__str29=allocate([117,110,101,120,112,101,99,116,101,100,32,78,85,76,76,32,102,114,111,109,32,80,121,78,117,109,98,101,114,95,82,115,104,105,102,116,0] /* unexpected NULL from */, "i8", ALLOC_NORMAL);
__str30=allocate([80,121,76,111,110,103,95,65,115,88,88,88,40,50,42,42,40,78,66,73,84,83,45,49,41,41,32,100,105,100,110,39,116,32,99,111,109,112,108,97,105,110,0] /* PyLong_AsXXX(2__(NBI */, "i8", ALLOC_NORMAL);
__str31=allocate([80,121,76,111,110,103,95,65,115,88,88,88,40,50,42,42,40,78,66,73,84,83,45,49,41,41,32,114,97,105,115,101,100,32,115,111,109,101,116,104,105,110,103,32,111,116,104,101,114,32,116,104,97,110,32,79,118,101,114,102,108,111,119,69,114,114,111,114,0] /* PyLong_AsXXX(2__(NBI */, "i8", ALLOC_NORMAL);
__str32=allocate([117,110,101,120,112,101,99,116,101,100,32,78,85,76,76,32,102,114,111,109,32,80,121,78,117,109,98,101,114,95,83,117,98,116,114,97,99,116,0] /* unexpected NULL from */, "i8", ALLOC_NORMAL);
__str33=allocate([80,121,76,111,110,103,95,65,115,88,88,88,40,45,50,42,42,40,78,66,73,84,83,45,49,41,45,49,41,32,100,105,100,110,39,116,32,99,111,109,112,108,97,105,110,0] /* PyLong_AsXXX(-2__(NB */, "i8", ALLOC_NORMAL);
__str34=allocate([80,121,76,111,110,103,95,65,115,88,88,88,40,45,50,42,42,40,78,66,73,84,83,45,49,41,45,49,41,32,114,97,105,115,101,100,32,115,111,109,101,116,104,105,110,103,32,111,116,104,101,114,32,116,104,97,110,32,79,118,101,114,102,108,111,119,69,114,114,111,114,0] /* PyLong_AsXXX(-2__(NB */, "i8", ALLOC_NORMAL);
__str35=allocate([116,101,115,116,95,108,111,110,103,108,111,110,103,95,97,112,105,0] /* test_longlong_api\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,0] /* FFFFFFFFFFFFFFFFFFFF */, "i8", ALLOC_NORMAL);
__str37=allocate([116,101,115,116,95,108,111,110,103,95,97,110,100,95,111,118,101,114,102,108,111,119,0] /* test_long_and_overfl */, "i8", ALLOC_NORMAL);
__str38=allocate([114,101,116,117,114,110,32,118,97,108,117,101,32,119,97,115,32,110,111,116,32,115,101,116,32,116,111,32,45,49,0] /* return value was not */, "i8", ALLOC_NORMAL);
__str39=allocate([111,118,101,114,102,108,111,119,32,119,97,115,32,110,111,116,32,115,101,116,32,116,111,32,49,0] /* overflow was not set */, "i8", ALLOC_NORMAL);
__str40=allocate([45,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,0] /* -FFFFFFFFFFFFFFFFFFF */, "i8", ALLOC_NORMAL);
__str41=allocate([111,118,101,114,102,108,111,119,32,119,97,115,32,110,111,116,32,115,101,116,32,116,111,32,45,49,0] /* overflow was not set */, "i8", ALLOC_NORMAL);
__str42=allocate([70,70,0] /* FF\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([101,120,112,101,99,116,101,100,32,114,101,116,117,114,110,32,118,97,108,117,101,32,48,120,70,70,0] /* expected return valu */, "i8", ALLOC_NORMAL);
__str44=allocate([111,118,101,114,102,108,111,119,32,119,97,115,32,110,111,116,32,99,108,101,97,114,101,100,0] /* overflow was not cle */, "i8", ALLOC_NORMAL);
__str45=allocate([45,70,70,0] /* -FF\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([111,118,101,114,102,108,111,119,32,119,97,115,32,115,101,116,32,105,110,99,111,114,114,101,99,116,108,121,0] /* overflow was set inc */, "i8", ALLOC_NORMAL);
__str47=allocate([101,120,112,101,99,116,101,100,32,114,101,116,117,114,110,32,118,97,108,117,101,32,76,79,78,71,95,77,65,88,0] /* expected return valu */, "i8", ALLOC_NORMAL);
__str48=allocate([101,120,112,101,99,116,101,100,32,114,101,116,117,114,110,32,118,97,108,117,101,32,76,79,78,71,95,77,73,78,0] /* expected return valu */, "i8", ALLOC_NORMAL);
__str49=allocate([116,101,115,116,95,108,111,110,103,95,108,111,110,103,95,97,110,100,95,111,118,101,114,102,108,111,119,0] /* test_long_long_and_o */, "i8", ALLOC_NORMAL);
__str50=allocate([101,120,112,101,99,116,101,100,32,114,101,116,117,114,110,32,118,97,108,117,101,32,80,89,95,76,76,79,78,71,95,77,65,88,0] /* expected return valu */, "i8", ALLOC_NORMAL);
__str51=allocate([101,120,112,101,99,116,101,100,32,114,101,116,117,114,110,32,118,97,108,117,101,32,80,89,95,76,76,79,78,71,95,77,73,78,0] /* expected return valu */, "i8", ALLOC_NORMAL);
__str52=allocate([76,58,116,101,115,116,95,76,95,99,111,100,101,0] /* L:test_L_code\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([116,101,115,116,95,76,95,99,111,100,101,0] /* test_L_code\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([76,32,99,111,100,101,32,114,101,116,117,114,110,101,100,32,119,114,111,110,103,32,118,97,108,117,101,32,102,111,114,32,108,111,110,103,32,52,50,0] /* L code returned wron */, "i8", ALLOC_NORMAL);
__str55=allocate([76,32,99,111,100,101,32,114,101,116,117,114,110,101,100,32,119,114,111,110,103,32,118,97,108,117,101,32,102,111,114,32,105,110,116,32,52,50,0] /* L code returned wron */, "i8", ALLOC_NORMAL);
__str56=allocate([105,40,105,105,41,0] /* i(ii)\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([105,105,105,0] /* iii\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([40,105,105,41,105,124,40,105,40,105,105,41,41,40,105,105,105,41,105,0] /* (ii)i|(i(ii))(iii)i\ */, "i8", ALLOC_NORMAL);
_keywords_9777=allocate(24, "i8*", ALLOC_NORMAL);
__str59=allocate([97,114,103,49,0] /* arg1\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([97,114,103,50,0] /* arg2\00 */, "i8", ALLOC_NORMAL);
__str61=allocate([97,114,103,51,0] /* arg3\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([97,114,103,52,0] /* arg4\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([97,114,103,53,0] /* arg5\00 */, "i8", ALLOC_NORMAL);
__str64=allocate([105,105,105,105,105,105,105,105,105,105,0] /* iiiiiiiiii\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([98,0] /* b\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([66,0] /* B\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([104,0] /* h\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([72,0] /* H\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([73,0] /* I\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([107,0] /* k\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([105,0] /* i\00 */, "i8", ALLOC_NORMAL);
__str72=allocate([108,0] /* l\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([110,0] /* n\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([76,0] /* L\00 */, "i8", ALLOC_NORMAL);
__str75=allocate([75,0] /* K\00 */, "i8", ALLOC_NORMAL);
__str76=allocate([116,101,115,116,95,107,95,99,111,100,101,0] /* test_k_code\00 */, "i8", ALLOC_NORMAL);
__str77=allocate([80,121,73,110,116,95,65,115,85,110,115,105,103,110,101,100,76,111,110,103,77,97,115,107,40,41,32,114,101,116,117,114,110,101,100,32,119,114,111,110,103,32,118,97,108,117,101,32,102,111,114,32,108,111,110,103,32,48,120,70,70,70,46,46,46,70,70,70,0] /* PyInt_AsUnsignedLong */, "i8", ALLOC_NORMAL);
__str78=allocate([107,58,116,101,115,116,95,107,95,99,111,100,101,0] /* k:test_k_code\00 */, "i8", ALLOC_NORMAL);
__str79=allocate([107,32,99,111,100,101,32,114,101,116,117,114,110,101,100,32,119,114,111,110,103,32,118,97,108,117,101,32,102,111,114,32,108,111,110,103,32,48,120,70,70,70,46,46,46,70,70,70,0] /* k code returned wron */, "i8", ALLOC_NORMAL);
__str80=allocate([45,70,70,70,70,70,70,70,70,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,52,50,0] /* -FFFFFFFF00000000000 */, "i8", ALLOC_NORMAL);
__str81=allocate([107,32,99,111,100,101,32,114,101,116,117,114,110,101,100,32,119,114,111,110,103,32,118,97,108,117,101,32,102,111,114,32,108,111,110,103,32,45,48,120,70,70,70,46,46,48,48,48,48,52,50,0] /* k code returned wron */, "i8", ALLOC_NORMAL);
_x=allocate(1, "i32", ALLOC_NORMAL);
__str82=allocate([116,101,115,116,0] /* test\00 */, "i8", ALLOC_NORMAL);
__str83=allocate([97,115,99,105,105,0] /* ascii\00 */, "i8", ALLOC_NORMAL);
__str84=allocate([117,58,116,101,115,116,95,117,95,99,111,100,101,0] /* u:test_u_code\00 */, "i8", ALLOC_NORMAL);
__str85=allocate([116,101,115,116,95,117,95,99,111,100,101,0] /* test_u_code\00 */, "i8", ALLOC_NORMAL);
__str86=allocate([117,32,99,111,100,101,32,114,101,116,117,114,110,101,100,32,119,114,111,110,103,32,118,97,108,117,101,32,102,111,114,32,117,39,116,101,115,116,39,0] /* u code returned wron */, "i8", ALLOC_NORMAL);
__str87=allocate([117,35,58,116,101,115,116,95,117,95,99,111,100,101,0] /* u#:test_u_code\00 */, "i8", ALLOC_NORMAL);
__str88=allocate([117,35,32,99,111,100,101,32,114,101,116,117,114,110,101,100,32,119,114,111,110,103,32,118,97,108,117,101,115,32,102,111,114,32,117,39,116,101,115,116,39,0] /* u# code returned wro */, "i8", ALLOC_NORMAL);
__str89=allocate([244,138,175,141,0] /* \F4\8A\AF\8D\00 */, "i8", ALLOC_NORMAL);
__str90=allocate([116,101,115,116,95,119,105,100,101,99,104,97,114,0] /* test_widechar\00 */, "i8", ALLOC_NORMAL);
__str91=allocate([119,105,100,101,32,115,116,114,105,110,103,32,97,110,100,32,117,116,102,56,32,115,116,114,105,110,103,32,104,97,118,101,32,100,105,102,102,101,114,101,110,116,32,108,101,110,103,116,104,0] /* wide string and utf8 */, "i8", ALLOC_NORMAL);
__str92=allocate([119,105,100,101,32,115,116,114,105,110,103,32,97,110,100,32,117,116,102,56,32,115,116,114,105,110,103,32,97,114,101,32,100,105,102,102,101,114,101,110,116,115,0] /* wide string and utf8 */, "i8", ALLOC_NORMAL);
__str93=allocate([124,58,116,101,115,116,95,101,109,112,116,121,95,97,114,103,112,97,114,115,101,0] /* |:test_empty_argpars */, "i8", ALLOC_NORMAL);
_kwlist_10129=allocate(4, "i8*", ALLOC_NORMAL);
__str94=allocate([115,124,115,58,116,101,115,116,95,105,110,99,114,101,109,101,110,116,97,108,101,110,99,111,100,101,114,0] /* s|s:test_incremental */, "i8", ALLOC_NORMAL);
__str95=allocate([115,124,115,58,116,101,115,116,95,105,110,99,114,101,109,101,110,116,97,108,100,101,99,111,100,101,114,0] /* s|s:test_incremental */, "i8", ALLOC_NORMAL);
_C_92_10205=allocate([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, -2, 0, 0, 0, 2, 0, 0, 0, -1, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, -3, 0, 0, 0, 2, 0, 0, 0, -1, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, -4, 0, 0, 0, 3, 0, 0, 0, -1, 0, 0, 0, 32767, 0, 0, 0, 15, 0, 0, 0, 1, 0, 0, 0, -32767, 0, 0, 0, 15, 0, 0, 0, -1, 0, 0, 0, 65535, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, -65535, 0, 0, 0, 16, 0, 0, 0, -1, 0, 0, 0, 268435455, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, -268435455, 0, 0, 0, 28, 0, 0, 0, -1, 0, 0, 0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str96=allocate([116,101,115,116,95,108,111,110,103,95,110,117,109,98,105,116,115,0] /* test_long_numbits\00 */, "i8", ALLOC_NORMAL);
__str97=allocate([119,114,111,110,103,32,114,101,115,117,108,116,32,102,111,114,32,95,80,121,76,111,110,103,95,78,117,109,66,105,116,115,0] /* wrong result for _Py */, "i8", ALLOC_NORMAL);
__str98=allocate([119,114,111,110,103,32,114,101,115,117,108,116,32,102,111,114,32,95,80,121,76,111,110,103,95,83,105,103,110,0] /* wrong result for _Py */, "i8", ALLOC_NORMAL);
__str99=allocate([79,105,58,114,97,105,115,101,95,101,120,99,101,112,116,105,111,110,0] /* Oi:raise_exception\0 */, "i8", ALLOC_NORMAL);
__str100=allocate([97,110,32,101,120,99,101,112,116,105,111,110,32,99,108,97,115,115,32,105,115,32,114,101,113,117,105,114,101,100,0] /* an exception class i */, "i8", ALLOC_NORMAL);
_test_run_counter=allocate(1, "i32", ALLOC_NORMAL);
__str101=allocate([80,121,68,97,116,101,84,105,109,101,95,67,65,80,73,32,115,111,109,101,104,111,119,32,105,110,105,116,105,97,108,105,122,101,100,0] /* PyDateTime_CAPI some */, "i8", ALLOC_NORMAL);
__str102=allocate([100,97,116,101,116,105,109,101,46,100,97,116,101,116,105,109,101,95,67,65,80,73,0] /* datetime.datetime_CA */, "i8", ALLOC_NORMAL);
__str103=allocate([37,100,0] /* %d\00 */, "i8", ALLOC_NORMAL);
__str104=allocate([49,0] /* 1\00 */, "i8", ALLOC_NORMAL);
__str105=allocate([37,100,32,102,97,105,108,101,100,32,97,116,32,49,0] /* %d failed at 1\00 */, "i8", ALLOC_NORMAL);
__str106=allocate([37,108,100,0] /* %ld\00 */, "i8", ALLOC_NORMAL);
__str107=allocate([37,108,100,32,102,97,105,108,101,100,32,97,116,32,49,0] /* %ld failed at 1\00 */, "i8", ALLOC_NORMAL);
__str108=allocate([37,122,100,0] /* %zd\00 */, "i8", ALLOC_NORMAL);
__str109=allocate([37,122,100,32,102,97,105,108,101,100,32,97,116,32,49,0] /* %zd failed at 1\00 */, "i8", ALLOC_NORMAL);
__str110=allocate([37,117,0] /* %u\00 */, "i8", ALLOC_NORMAL);
__str111=allocate([37,117,32,102,97,105,108,101,100,32,97,116,32,49,0] /* %u failed at 1\00 */, "i8", ALLOC_NORMAL);
__str112=allocate([37,108,117,0] /* %lu\00 */, "i8", ALLOC_NORMAL);
__str113=allocate([37,108,117,32,102,97,105,108,101,100,32,97,116,32,49,0] /* %lu failed at 1\00 */, "i8", ALLOC_NORMAL);
__str114=allocate([37,122,117,0] /* %zu\00 */, "i8", ALLOC_NORMAL);
__str115=allocate([37,122,117,32,102,97,105,108,101,100,32,97,116,32,49,0] /* %zu failed at 1\00 */, "i8", ALLOC_NORMAL);
__str116=allocate([37,108,108,117,0] /* %llu\00 */, "i8", ALLOC_NORMAL);
__str117=allocate([37,108,108,117,32,102,97,105,108,101,100,32,97,116,32,49,0] /* %llu failed at 1\00 */, "i8", ALLOC_NORMAL);
__str118=allocate([37,108,108,100,0] /* %lld\00 */, "i8", ALLOC_NORMAL);
__str119=allocate([37,108,108,100,32,102,97,105,108,101,100,32,97,116,32,49,0] /* %lld failed at 1\00 */, "i8", ALLOC_NORMAL);
__str120=allocate([116,101,115,116,95,115,116,114,105,110,103,95,102,114,111,109,95,102,111,114,109,97,116,0] /* test_string_from_for */, "i8", ALLOC_NORMAL);
__str121=allocate([99,97,112,115,117,108,101,32,110,97,109,101,0] /* capsule name\00 */, "i8", ALLOC_NORMAL);
__str122=allocate([99,97,112,115,117,108,101,32,112,111,105,110,116,101,114,0] /* capsule pointer\00 */, "i8", ALLOC_NORMAL);
__str123=allocate([99,97,112,115,117,108,101,32,99,111,110,116,101,120,116,0] /* capsule context\00 */, "i8", ALLOC_NORMAL);
_capsule_error=allocate(1, "i8*", ALLOC_NORMAL);
_capsule_destructor_call_count=allocate(1, "i32", ALLOC_NORMAL);
__str124=allocate([99,111,110,116,101,120,116,32,100,105,100,32,110,111,116,32,109,97,116,99,104,32,105,110,32,100,101,115,116,114,117,99,116,111,114,33,0] /* context did not matc */, "i8", ALLOC_NORMAL);
__str125=allocate([100,101,115,116,114,117,99,116,111,114,32,100,105,100,32,110,111,116,32,109,97,116,99,104,32,105,110,32,100,101,115,116,114,117,99,116,111,114,33,32,32,40,119,111,97,104,33,41,0] /* destructor did not m */, "i8", ALLOC_NORMAL);
__str126=allocate([110,97,109,101,32,100,105,100,32,110,111,116,32,109,97,116,99,104,32,105,110,32,100,101,115,116,114,117,99,116,111,114,33,0] /* name did not match i */, "i8", ALLOC_NORMAL);
__str127=allocate([112,111,105,110,116,101,114,32,100,105,100,32,110,111,116,32,109,97,116,99,104,32,105,110,32,100,101,115,116,114,117,99,116,111,114,33,0] /* pointer did not matc */, "i8", ALLOC_NORMAL);
__str128=allocate([95,115,111,99,107,101,116,46,67,65,80,73,0] /* _socket.CAPI\00 */, "i8", ALLOC_NORMAL);
__str129=allocate([95,115,111,99,107,101,116,0] /* _socket\00 */, "i8", ALLOC_NORMAL);
__str130=allocate([67,65,80,73,0] /* CAPI\00 */, "i8", ALLOC_NORMAL);
__str131=allocate([95,99,117,114,115,101,115,46,95,67,95,65,80,73,0] /* _curses._C_API\00 */, "i8", ALLOC_NORMAL);
__str132=allocate([95,99,117,114,115,101,115,0] /* _curses\00 */, "i8", ALLOC_NORMAL);
__str133=allocate([95,67,95,65,80,73,0] /* _C_API\00 */, "i8", ALLOC_NORMAL);
__str134=allocate([100,97,116,101,116,105,109,101,0] /* datetime\00 */, "i8", ALLOC_NORMAL);
__str135=allocate([100,97,116,101,116,105,109,101,95,67,65,80,73,0] /* datetime_CAPI\00 */, "i8", ALLOC_NORMAL);
__str136=allocate([100,101,115,116,114,117,99,116,111,114,32,110,111,116,32,99,97,108,108,101,100,33,0] /* destructor not calle */, "i8", ALLOC_NORMAL);
__str137=allocate([105,103,110,111,114,101,100,0] /* ignored\00 */, "i8", ALLOC_NORMAL);
__str138=allocate([116,104,101,32,119,114,111,110,103,32,110,97,109,101,0] /* the wrong name\00 */, "i8", ALLOC_NORMAL);
__str139=allocate([80,121,67,97,112,115,117,108,101,95,71,101,116,80,111,105,110,116,101,114,32,115,104,111,117,108,100,32,104,97,118,101,32,102,97,105,108,101,100,32,98,117,116,32,100,105,100,32,110,111,116,33,0] /* PyCapsule_GetPointer */, "i8", ALLOC_NORMAL);
__str140=allocate([80,121,67,97,112,115,117,108,101,95,71,101,116,80,111,105,110,116,101,114,32,115,104,111,117,108,100,32,110,111,116,32,104,97,118,101,32,114,101,116,117,114,110,101,100,32,116,104,101,32,105,110,116,101,114,110,97,108,32,112,111,105,110,116,101,114,33,0] /* PyCapsule_GetPointer */, "i8", ALLOC_NORMAL);
__str141=allocate([80,121,67,97,112,115,117,108,101,95,71,101,116,80,111,105,110,116,101,114,32,115,104,111,117,108,100,32,104,97,118,101,32,114,101,116,117,114,110,101,100,32,78,85,76,76,32,112,111,105,110,116,101,114,32,98,117,116,32,100,105,100,32,110,111,116,33,0] /* PyCapsule_GetPointer */, "i8", ALLOC_NORMAL);
__str142=allocate([100,101,115,116,114,117,99,116,111,114,32,99,97,108,108,101,100,32,119,104,101,110,32,105,116,32,115,104,111,117,108,100,32,110,111,116,32,104,97,118,101,32,98,101,101,110,33,0] /* destructor called wh */, "i8", ALLOC_NORMAL);
_buffer_10522=allocate(256, "i8", ALLOC_NORMAL);
__str143=allocate([37,115,32,109,111,100,117,108,101,58,32,34,37,115,34,32,97,116,116,114,105,98,117,116,101,58,32,34,37,115,34,0] /* %s module: \22%s\22  */, "i8", ALLOC_NORMAL);
__str144=allocate([80,121,67,97,112,115,117,108,101,95,71,101,116,80,111,105,110,116,101,114,32,114,101,116,117,114,110,101,100,32,78,85,76,76,32,117,110,101,120,112,101,99,116,101,100,108,121,33,0] /* PyCapsule_GetPointer */, "i8", ALLOC_NORMAL);
__str145=allocate([119,101,101,98,108,101,115,32,119,111,98,98,108,101,32,98,117,116,32,116,104,101,121,32,100,111,110,39,116,32,102,97,108,108,32,100,111,119,110,0] /* weebles wobble but t */, "i8", ALLOC_NORMAL);
__str146=allocate([80,121,67,97,112,115,117,108,101,95,71,101,116,80,111,105,110,116,101,114,32,115,104,111,117,108,100,32,110,111,116,32,104,97,118,101,32,114,101,116,117,114,110,101,100,32,105,116,115,32,105,110,116,101,114,110,97,108,32,112,111,105,110,116,101,114,33,0] /* PyCapsule_GetPointer */, "i8", ALLOC_NORMAL);
__str147=allocate([116,101,115,116,95,99,97,112,115,117,108,101,0] /* test_capsule\00 */, "i8", ALLOC_NORMAL);
__str148=allocate([79,79,58,116,114,97,99,101,98,97,99,107,95,112,114,105,110,116,0] /* OO:traceback_print\0 */, "i8", ALLOC_NORMAL);
__str149=allocate([115,115,105,58,99,111,100,101,95,110,101,119,101,109,112,116,121,0] /* ssi:code_newempty\00 */, "i8", ALLOC_NORMAL);
__str150=allocate([115,124,115,79,79,58,109,97,107,101,95,101,120,99,101,112,116,105,111,110,95,119,105,116,104,95,100,111,99,0] /* s|sOO:make_exception */, "i8", ALLOC_NORMAL);
_kwlist_10723=allocate(20, "i8*", ALLOC_NORMAL);
__str151=allocate([110,97,109,101,0] /* name\00 */, "i8", ALLOC_NORMAL);
__str152=allocate([100,111,99,0] /* doc\00 */, "i8", ALLOC_NORMAL);
__str153=allocate([98,97,115,101,0] /* base\00 */, "i8", ALLOC_NORMAL);
__str154=allocate([100,105,99,116,0] /* dict\00 */, "i8", ALLOC_NORMAL);
__str155=allocate([114,97,105,115,101,95,101,120,99,101,112,116,105,111,110,0] /* raise_exception\00 */, "i8", ALLOC_NORMAL);
__str156=allocate([116,101,115,116,95,99,111,110,102,105,103,0] /* test_config\00 */, "i8", ALLOC_NORMAL);
__str157=allocate([116,101,115,116,95,100,97,116,101,116,105,109,101,95,99,97,112,105,0] /* test_datetime_capi\0 */, "i8", ALLOC_NORMAL);
__str158=allocate([116,101,115,116,95,108,105,115,116,95,97,112,105,0] /* test_list_api\00 */, "i8", ALLOC_NORMAL);
__str159=allocate([116,101,115,116,95,100,105,99,116,95,105,116,101,114,97,116,105,111,110,0] /* test_dict_iteration\ */, "i8", ALLOC_NORMAL);
__str160=allocate([116,101,115,116,95,108,97,122,121,95,104,97,115,104,95,105,110,104,101,114,105,116,97,110,99,101,0] /* test_lazy_hash_inher */, "i8", ALLOC_NORMAL);
__str161=allocate([116,101,115,116,95,98,114,111,107,101,110,95,109,101,109,111,114,121,118,105,101,119,0] /* test_broken_memoryvi */, "i8", ALLOC_NORMAL);
__str162=allocate([116,101,115,116,95,101,109,112,116,121,95,97,114,103,112,97,114,115,101,0] /* test_empty_argparse\ */, "i8", ALLOC_NORMAL);
__str163=allocate([116,101,115,116,95,110,117,108,108,95,115,116,114,105,110,103,115,0] /* test_null_strings\00 */, "i8", ALLOC_NORMAL);
__str164=allocate([116,101,115,116,95,119,105,116,104,95,100,111,99,115,116,114,105,110,103,0] /* test_with_docstring\ */, "i8", ALLOC_NORMAL);
__str165=allocate([84,104,105,115,32,105,115,32,97,32,112,114,101,116,116,121,32,110,111,114,109,97,108,32,100,111,99,115,116,114,105,110,103,46,0] /* This is a pretty nor */, "i8", ALLOC_NORMAL);
__str166=allocate([103,101,116,97,114,103,115,95,116,117,112,108,101,0] /* getargs_tuple\00 */, "i8", ALLOC_NORMAL);
__str167=allocate([103,101,116,97,114,103,115,95,107,101,121,119,111,114,100,115,0] /* getargs_keywords\00 */, "i8", ALLOC_NORMAL);
__str168=allocate([103,101,116,97,114,103,115,95,98,0] /* getargs_b\00 */, "i8", ALLOC_NORMAL);
__str169=allocate([103,101,116,97,114,103,115,95,66,0] /* getargs_B\00 */, "i8", ALLOC_NORMAL);
__str170=allocate([103,101,116,97,114,103,115,95,104,0] /* getargs_h\00 */, "i8", ALLOC_NORMAL);
__str171=allocate([103,101,116,97,114,103,115,95,72,0] /* getargs_H\00 */, "i8", ALLOC_NORMAL);
__str172=allocate([103,101,116,97,114,103,115,95,73,0] /* getargs_I\00 */, "i8", ALLOC_NORMAL);
__str173=allocate([103,101,116,97,114,103,115,95,107,0] /* getargs_k\00 */, "i8", ALLOC_NORMAL);
__str174=allocate([103,101,116,97,114,103,115,95,105,0] /* getargs_i\00 */, "i8", ALLOC_NORMAL);
__str175=allocate([103,101,116,97,114,103,115,95,108,0] /* getargs_l\00 */, "i8", ALLOC_NORMAL);
__str176=allocate([103,101,116,97,114,103,115,95,110,0] /* getargs_n\00 */, "i8", ALLOC_NORMAL);
__str177=allocate([103,101,116,97,114,103,115,95,76,0] /* getargs_L\00 */, "i8", ALLOC_NORMAL);
__str178=allocate([103,101,116,97,114,103,115,95,75,0] /* getargs_K\00 */, "i8", ALLOC_NORMAL);
__str179=allocate([99,111,100,101,99,95,105,110,99,114,101,109,101,110,116,97,108,101,110,99,111,100,101,114,0] /* codec_incrementalenc */, "i8", ALLOC_NORMAL);
__str180=allocate([99,111,100,101,99,95,105,110,99,114,101,109,101,110,116,97,108,100,101,99,111,100,101,114,0] /* codec_incrementaldec */, "i8", ALLOC_NORMAL);
__str181=allocate([116,114,97,99,101,98,97,99,107,95,112,114,105,110,116,0] /* traceback_print\00 */, "i8", ALLOC_NORMAL);
__str182=allocate([99,111,100,101,95,110,101,119,101,109,112,116,121,0] /* code_newempty\00 */, "i8", ALLOC_NORMAL);
__str183=allocate([109,97,107,101,95,101,120,99,101,112,116,105,111,110,95,119,105,116,104,95,100,111,99,0] /* make_exception_with_ */, "i8", ALLOC_NORMAL);
_TestMethods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str184=allocate([84,95,66,79,79,76,0] /* T_BOOL\00 */, "i8", ALLOC_NORMAL);
__str185=allocate([84,95,66,89,84,69,0] /* T_BYTE\00 */, "i8", ALLOC_NORMAL);
__str186=allocate([84,95,85,66,89,84,69,0] /* T_UBYTE\00 */, "i8", ALLOC_NORMAL);
__str187=allocate([84,95,83,72,79,82,84,0] /* T_SHORT\00 */, "i8", ALLOC_NORMAL);
__str188=allocate([84,95,85,83,72,79,82,84,0] /* T_USHORT\00 */, "i8", ALLOC_NORMAL);
__str189=allocate([84,95,73,78,84,0] /* T_INT\00 */, "i8", ALLOC_NORMAL);
__str190=allocate([84,95,85,73,78,84,0] /* T_UINT\00 */, "i8", ALLOC_NORMAL);
__str191=allocate([84,95,76,79,78,71,0] /* T_LONG\00 */, "i8", ALLOC_NORMAL);
__str192=allocate([84,95,85,76,79,78,71,0] /* T_ULONG\00 */, "i8", ALLOC_NORMAL);
__str193=allocate([84,95,70,76,79,65,84,0] /* T_FLOAT\00 */, "i8", ALLOC_NORMAL);
__str194=allocate([84,95,68,79,85,66,76,69,0] /* T_DOUBLE\00 */, "i8", ALLOC_NORMAL);
__str195=allocate([84,95,83,84,82,73,78,71,95,73,78,80,76,65,67,69,0] /* T_STRING_INPLACE\00 */, "i8", ALLOC_NORMAL);
__str196=allocate([84,95,76,79,78,71,76,79,78,71,0] /* T_LONGLONG\00 */, "i8", ALLOC_NORMAL);
__str197=allocate([84,95,85,76,79,78,71,76,79,78,71,0] /* T_ULONGLONG\00 */, "i8", ALLOC_NORMAL);
_test_members=allocate([0, 0, 0, 0, 14, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str198=allocate([124,98,98,66,104,72,105,73,108,107,102,100,115,35,76,75,0] /* |bbBhHiIlkfds#LK\00 */, "i8", ALLOC_NORMAL);
_keywords_10762=allocate(60, "i8*", ALLOC_NORMAL);
__str199=allocate([115,116,114,105,110,103,32,116,111,111,32,108,111,110,103,0] /* string too long\00 */, "i8", ALLOC_NORMAL);
__str201=allocate([116,101,115,116,95,115,116,114,117,99,116,109,101,109,98,101,114,115,84,121,112,101,0] /* test_structmembersTy */, "i8", ALLOC_NORMAL);
__str202=allocate([84,121,112,101,32,99,111,110,116,97,105,110,105,110,103,32,97,108,108,32,115,116,114,117,99,116,109,101,109,98,101,114,32,116,121,112,101,115,0] /* Type containing all  */, "i8", ALLOC_NORMAL);
_test_structmembersType=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str203=allocate([95,116,101,115,116,99,97,112,105,0] /* _testcapi\00 */, "i8", ALLOC_NORMAL);
__str204=allocate([95,116,101,115,116,95,115,116,114,117,99,116,109,101,109,98,101,114,115,84,121,112,101,0] /* _test_structmembersT */, "i8", ALLOC_NORMAL);
__str205=allocate([67,72,65,82,95,77,65,88,0] /* CHAR_MAX\00 */, "i8", ALLOC_NORMAL);
__str206=allocate([67,72,65,82,95,77,73,78,0] /* CHAR_MIN\00 */, "i8", ALLOC_NORMAL);
__str207=allocate([85,67,72,65,82,95,77,65,88,0] /* UCHAR_MAX\00 */, "i8", ALLOC_NORMAL);
__str208=allocate([83,72,82,84,95,77,65,88,0] /* SHRT_MAX\00 */, "i8", ALLOC_NORMAL);
__str209=allocate([83,72,82,84,95,77,73,78,0] /* SHRT_MIN\00 */, "i8", ALLOC_NORMAL);
__str210=allocate([85,83,72,82,84,95,77,65,88,0] /* USHRT_MAX\00 */, "i8", ALLOC_NORMAL);
__str211=allocate([73,78,84,95,77,65,88,0] /* INT_MAX\00 */, "i8", ALLOC_NORMAL);
__str212=allocate([73,78,84,95,77,73,78,0] /* INT_MIN\00 */, "i8", ALLOC_NORMAL);
__str213=allocate([85,73,78,84,95,77,65,88,0] /* UINT_MAX\00 */, "i8", ALLOC_NORMAL);
__str214=allocate([76,79,78,71,95,77,65,88,0] /* LONG_MAX\00 */, "i8", ALLOC_NORMAL);
__str215=allocate([76,79,78,71,95,77,73,78,0] /* LONG_MIN\00 */, "i8", ALLOC_NORMAL);
__str216=allocate([85,76,79,78,71,95,77,65,88,0] /* ULONG_MAX\00 */, "i8", ALLOC_NORMAL);
__str217=allocate([70,76,84,95,77,65,88,0] /* FLT_MAX\00 */, "i8", ALLOC_NORMAL);
__str218=allocate([70,76,84,95,77,73,78,0] /* FLT_MIN\00 */, "i8", ALLOC_NORMAL);
__str219=allocate([68,66,76,95,77,65,88,0] /* DBL_MAX\00 */, "i8", ALLOC_NORMAL);
__str220=allocate([68,66,76,95,77,73,78,0] /* DBL_MIN\00 */, "i8", ALLOC_NORMAL);
__str221=allocate([76,76,79,78,71,95,77,65,88,0] /* LLONG_MAX\00 */, "i8", ALLOC_NORMAL);
__str222=allocate([76,76,79,78,71,95,77,73,78,0] /* LLONG_MIN\00 */, "i8", ALLOC_NORMAL);
__str223=allocate([85,76,76,79,78,71,95,77,65,88,0] /* ULLONG_MAX\00 */, "i8", ALLOC_NORMAL);
__str224=allocate([80,89,95,83,83,73,90,69,95,84,95,77,65,88,0] /* PY_SSIZE_T_MAX\00 */, "i8", ALLOC_NORMAL);
__str225=allocate([80,89,95,83,83,73,90,69,95,84,95,77,73,78,0] /* PY_SSIZE_T_MIN\00 */, "i8", ALLOC_NORMAL);
__str226=allocate([83,73,90,69,79,70,95,80,89,71,67,95,72,69,65,68,0] /* SIZEOF_PYGC_HEAD\00 */, "i8", ALLOC_NORMAL);
__str227=allocate([95,116,101,115,116,99,97,112,105,46,101,114,114,111,114,0] /* _testcapi.error\00 */, "i8", ALLOC_NORMAL);
__str228=allocate([101,114,114,111,114,0] /* error\00 */, "i8", ALLOC_NORMAL);
HEAP[__HashInheritanceTester_Type+12]=__str5;
HEAP[__HashInheritanceTester_Type+24]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[__HashInheritanceTester_Type+72]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[__HashInheritanceTester_Type+156]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_memoryviewtester_as_buffer+16]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[__MemoryViewTester_Type+12]=__str12;
HEAP[__MemoryViewTester_Type+24]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[__MemoryViewTester_Type+72]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[__MemoryViewTester_Type+80]=_memoryviewtester_as_buffer;
HEAP[__MemoryViewTester_Type+156]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_keywords_9777]=__str59;
HEAP[_keywords_9777+4]=__str60;
HEAP[_keywords_9777+8]=__str61;
HEAP[_keywords_9777+12]=__str62;
HEAP[_keywords_9777+16]=__str63;
HEAP[_kwlist_10723]=__str151;
HEAP[_kwlist_10723+4]=__str152;
HEAP[_kwlist_10723+8]=__str153;
HEAP[_kwlist_10723+12]=__str154;
HEAP[_TestMethods]=__str155;
HEAP[_TestMethods+4]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_TestMethods+16]=__str156;
HEAP[_TestMethods+20]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_TestMethods+32]=__str157;
HEAP[_TestMethods+36]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_TestMethods+48]=__str158;
HEAP[_TestMethods+52]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_TestMethods+64]=__str159;
HEAP[_TestMethods+68]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_TestMethods+80]=__str160;
HEAP[_TestMethods+84]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_TestMethods+96]=__str161;
HEAP[_TestMethods+100]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_TestMethods+112]=__str15;
HEAP[_TestMethods+116]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_TestMethods+128]=__str37;
HEAP[_TestMethods+132]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_TestMethods+144]=__str96;
HEAP[_TestMethods+148]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_TestMethods+160]=__str76;
HEAP[_TestMethods+164]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_TestMethods+176]=__str162;
HEAP[_TestMethods+180]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_TestMethods+192]=__str163;
HEAP[_TestMethods+196]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_TestMethods+208]=__str120;
HEAP[_TestMethods+212]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_TestMethods+224]=__str164;
HEAP[_TestMethods+228]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_TestMethods+236]=__str165;
HEAP[_TestMethods+240]=__str166;
HEAP[_TestMethods+244]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_TestMethods+256]=__str167;
HEAP[_TestMethods+260]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_TestMethods+272]=__str168;
HEAP[_TestMethods+276]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_TestMethods+288]=__str169;
HEAP[_TestMethods+292]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_TestMethods+304]=__str170;
HEAP[_TestMethods+308]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_TestMethods+320]=__str171;
HEAP[_TestMethods+324]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_TestMethods+336]=__str172;
HEAP[_TestMethods+340]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_TestMethods+352]=__str173;
HEAP[_TestMethods+356]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_TestMethods+368]=__str174;
HEAP[_TestMethods+372]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_TestMethods+384]=__str175;
HEAP[_TestMethods+388]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_TestMethods+400]=__str176;
HEAP[_TestMethods+404]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_TestMethods+416]=__str177;
HEAP[_TestMethods+420]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_TestMethods+432]=__str178;
HEAP[_TestMethods+436]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[_TestMethods+448]=__str35;
HEAP[_TestMethods+452]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[_TestMethods+464]=__str49;
HEAP[_TestMethods+468]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[_TestMethods+480]=__str53;
HEAP[_TestMethods+484]=(FUNCTION_TABLE_OFFSET + 76);
HEAP[_TestMethods+496]=__str179;
HEAP[_TestMethods+500]=(FUNCTION_TABLE_OFFSET + 78);
HEAP[_TestMethods+512]=__str180;
HEAP[_TestMethods+516]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_TestMethods+528]=__str85;
HEAP[_TestMethods+532]=(FUNCTION_TABLE_OFFSET + 82);
HEAP[_TestMethods+544]=__str90;
HEAP[_TestMethods+548]=(FUNCTION_TABLE_OFFSET + 84);
HEAP[_TestMethods+560]=__str147;
HEAP[_TestMethods+564]=(FUNCTION_TABLE_OFFSET + 86);
HEAP[_TestMethods+576]=__str181;
HEAP[_TestMethods+580]=(FUNCTION_TABLE_OFFSET + 88);
HEAP[_TestMethods+592]=__str182;
HEAP[_TestMethods+596]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_TestMethods+608]=__str183;
HEAP[_TestMethods+612]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_test_members]=__str184;
HEAP[_test_members+20]=__str185;
HEAP[_test_members+40]=__str186;
HEAP[_test_members+60]=__str187;
HEAP[_test_members+80]=__str188;
HEAP[_test_members+100]=__str189;
HEAP[_test_members+120]=__str190;
HEAP[_test_members+140]=__str191;
HEAP[_test_members+160]=__str192;
HEAP[_test_members+180]=__str193;
HEAP[_test_members+200]=__str194;
HEAP[_test_members+220]=__str195;
HEAP[_test_members+240]=__str196;
HEAP[_test_members+260]=__str197;
HEAP[_keywords_10762]=__str184;
HEAP[_keywords_10762+4]=__str185;
HEAP[_keywords_10762+8]=__str186;
HEAP[_keywords_10762+12]=__str187;
HEAP[_keywords_10762+16]=__str188;
HEAP[_keywords_10762+20]=__str189;
HEAP[_keywords_10762+24]=__str190;
HEAP[_keywords_10762+28]=__str191;
HEAP[_keywords_10762+32]=__str192;
HEAP[_keywords_10762+36]=__str193;
HEAP[_keywords_10762+40]=__str194;
HEAP[_keywords_10762+44]=__str195;
HEAP[_keywords_10762+48]=__str196;
HEAP[_keywords_10762+52]=__str197;
HEAP[_test_structmembersType+12]=__str201;
HEAP[_test_structmembersType+24]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_test_structmembersType+72]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_test_structmembersType+76]=(FUNCTION_TABLE_OFFSET + 96);
HEAP[_test_structmembersType+88]=__str202;
HEAP[_test_structmembersType+120]=_test_members;
HEAP[_test_structmembersType+156]=(FUNCTION_TABLE_OFFSET + 98);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

