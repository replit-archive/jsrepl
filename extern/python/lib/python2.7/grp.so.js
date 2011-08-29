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



var $0___SIZE = 40; // %0
  
var $1___SIZE = 8; // %1
  
var $2___SIZE = 64; // %2
  
var $3___SIZE = 16; // %3
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyIntObject___SIZE = 12; // %struct.PyIntObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 0; // %struct.PyMemberDef
  var $struct_PyMemberDef___FLATTENER = [];
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyStructSequence___SIZE = 16; // %struct.PyStructSequence
  
var $struct_PyStructSequence_Desc___SIZE = 16; // %struct.PyStructSequence_Desc
  
var $struct_PyStructSequence_Field___SIZE = 8; // %struct.PyStructSequence_Field
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_group___SIZE = 16; // %struct.group
  
var __str;
var __str1;
var __str2;
var __str3;
var __str4;
var __str5;
var __str6;
var __str7;
var _struct_group_type_fields;
var _struct_group__doc__;
var _struct_group_type_desc;
var __str8;
var _StructGrpType;


var __str9;
var __str10;
var __str11;
var __str12;
var __str13;
var __str14;
var __str15;
var __str16;
var _grp_methods;
var _grp__doc__;
var __str17;
var _initialized_b;
var __str18;























  function _mkgrent($p) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $retval;
        var $0;
        var $setIndex;
        var $v;
        var $w;
        var $member;
        var $x;
        $p_addr=$p;
        $setIndex=0; //@line 38 "grpmodule.c"
        var $1=_PyStructSequence_New(_StructGrpType); //@line 39 "grpmodule.c"
        $v=$1; //@line 39 "grpmodule.c"
        var $2=$v; //@line 42 "grpmodule.c"
        var $3=($2)==0; //@line 42 "grpmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 42 "grpmodule.c"
      case 1: // $bb
        $0=0; //@line 43 "grpmodule.c"
        __label__ = 29; break; //@line 43 "grpmodule.c"
      case 2: // $bb1
        var $4=_PyList_New(0); //@line 45 "grpmodule.c"
        $w=$4; //@line 45 "grpmodule.c"
        var $5=$w; //@line 45 "grpmodule.c"
        var $6=($5)==0; //@line 45 "grpmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 45 "grpmodule.c"
      case 3: // $bb2
        var $7=$v; //@line 46 "grpmodule.c"
        var $8=$7; //@line 46 "grpmodule.c"
        var $9=HEAP[$8]; //@line 46 "grpmodule.c"
        var $10=($9) - 1; //@line 46 "grpmodule.c"
        var $11=$v; //@line 46 "grpmodule.c"
        var $12=$11; //@line 46 "grpmodule.c"
        HEAP[$12]=$10; //@line 46 "grpmodule.c"
        var $13=$v; //@line 46 "grpmodule.c"
        var $14=$13; //@line 46 "grpmodule.c"
        var $15=HEAP[$14]; //@line 46 "grpmodule.c"
        var $16=($15)==0; //@line 46 "grpmodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 46 "grpmodule.c"
      case 4: // $bb3
        var $17=$v; //@line 46 "grpmodule.c"
        var $18=$17+4; //@line 46 "grpmodule.c"
        var $19=HEAP[$18]; //@line 46 "grpmodule.c"
        var $20=$19+24; //@line 46 "grpmodule.c"
        var $21=HEAP[$20]; //@line 46 "grpmodule.c"
        var $22=$v; //@line 46 "grpmodule.c"
        FUNCTION_TABLE[$21]($22); //@line 46 "grpmodule.c"
        __label__ = 5; break; //@line 46 "grpmodule.c"
      case 5: // $bb4
        $0=0; //@line 47 "grpmodule.c"
        __label__ = 29; break; //@line 47 "grpmodule.c"
      case 6: // $bb5
        var $23=$p_addr; //@line 49 "grpmodule.c"
        var $24=$23+12; //@line 49 "grpmodule.c"
        var $25=HEAP[$24]; //@line 49 "grpmodule.c"
        $member=$25; //@line 49 "grpmodule.c"
        __label__ = 20; break; //@line 49 "grpmodule.c"
      case 7: // $bb6
        var $26=$member; //@line 50 "grpmodule.c"
        var $27=HEAP[$26]; //@line 50 "grpmodule.c"
        var $28=_PyString_FromString($27); //@line 50 "grpmodule.c"
        $x=$28; //@line 50 "grpmodule.c"
        var $29=$x; //@line 51 "grpmodule.c"
        var $30=($29)==0; //@line 51 "grpmodule.c"
        if ($30) { __label__ = 12; break; } else { __label__ = 8; break; } //@line 51 "grpmodule.c"
      case 8: // $bb7
        var $31=$w; //@line 51 "grpmodule.c"
        var $32=$x; //@line 51 "grpmodule.c"
        var $33=_PyList_Append($31, $32); //@line 51 "grpmodule.c"
        var $34=($33)!=0; //@line 51 "grpmodule.c"
        var $_pr=$x;
        if ($34) { __label__ = 9; break; } else { __label__ = 17; break; } //@line 51 "grpmodule.c"
      case 9: // $bb8
        var $35=($_pr)!=0; //@line 52 "grpmodule.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 52 "grpmodule.c"
      case 10: // $bb9
        var $36=$x; //@line 52 "grpmodule.c"
        var $37=$36; //@line 52 "grpmodule.c"
        var $38=HEAP[$37]; //@line 52 "grpmodule.c"
        var $39=($38) - 1; //@line 52 "grpmodule.c"
        var $40=$x; //@line 52 "grpmodule.c"
        var $41=$40; //@line 52 "grpmodule.c"
        HEAP[$41]=$39; //@line 52 "grpmodule.c"
        var $42=$x; //@line 52 "grpmodule.c"
        var $43=$42; //@line 52 "grpmodule.c"
        var $44=HEAP[$43]; //@line 52 "grpmodule.c"
        var $45=($44)==0; //@line 52 "grpmodule.c"
        if ($45) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 52 "grpmodule.c"
      case 11: // $bb10
        var $46=$x; //@line 52 "grpmodule.c"
        var $47=$46+4; //@line 52 "grpmodule.c"
        var $48=HEAP[$47]; //@line 52 "grpmodule.c"
        var $49=$48+24; //@line 52 "grpmodule.c"
        var $50=HEAP[$49]; //@line 52 "grpmodule.c"
        var $51=$x; //@line 52 "grpmodule.c"
        FUNCTION_TABLE[$50]($51); //@line 52 "grpmodule.c"
        __label__ = 12; break; //@line 52 "grpmodule.c"
      case 12: // $bb11
        var $52=$w; //@line 53 "grpmodule.c"
        var $53=$52; //@line 53 "grpmodule.c"
        var $54=HEAP[$53]; //@line 53 "grpmodule.c"
        var $55=($54) - 1; //@line 53 "grpmodule.c"
        var $56=$w; //@line 53 "grpmodule.c"
        var $57=$56; //@line 53 "grpmodule.c"
        HEAP[$57]=$55; //@line 53 "grpmodule.c"
        var $58=$w; //@line 53 "grpmodule.c"
        var $59=$58; //@line 53 "grpmodule.c"
        var $60=HEAP[$59]; //@line 53 "grpmodule.c"
        var $61=($60)==0; //@line 53 "grpmodule.c"
        if ($61) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 53 "grpmodule.c"
      case 13: // $bb12
        var $62=$w; //@line 53 "grpmodule.c"
        var $63=$62+4; //@line 53 "grpmodule.c"
        var $64=HEAP[$63]; //@line 53 "grpmodule.c"
        var $65=$64+24; //@line 53 "grpmodule.c"
        var $66=HEAP[$65]; //@line 53 "grpmodule.c"
        var $67=$w; //@line 53 "grpmodule.c"
        FUNCTION_TABLE[$66]($67); //@line 53 "grpmodule.c"
        __label__ = 14; break; //@line 53 "grpmodule.c"
      case 14: // $bb13
        var $68=$v; //@line 54 "grpmodule.c"
        var $69=$68; //@line 54 "grpmodule.c"
        var $70=HEAP[$69]; //@line 54 "grpmodule.c"
        var $71=($70) - 1; //@line 54 "grpmodule.c"
        var $72=$v; //@line 54 "grpmodule.c"
        var $73=$72; //@line 54 "grpmodule.c"
        HEAP[$73]=$71; //@line 54 "grpmodule.c"
        var $74=$v; //@line 54 "grpmodule.c"
        var $75=$74; //@line 54 "grpmodule.c"
        var $76=HEAP[$75]; //@line 54 "grpmodule.c"
        var $77=($76)==0; //@line 54 "grpmodule.c"
        if ($77) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 54 "grpmodule.c"
      case 15: // $bb14
        var $78=$v; //@line 54 "grpmodule.c"
        var $79=$78+4; //@line 54 "grpmodule.c"
        var $80=HEAP[$79]; //@line 54 "grpmodule.c"
        var $81=$80+24; //@line 54 "grpmodule.c"
        var $82=HEAP[$81]; //@line 54 "grpmodule.c"
        var $83=$v; //@line 54 "grpmodule.c"
        FUNCTION_TABLE[$82]($83); //@line 54 "grpmodule.c"
        __label__ = 16; break; //@line 54 "grpmodule.c"
      case 16: // $bb15
        $0=0; //@line 55 "grpmodule.c"
        __label__ = 29; break; //@line 55 "grpmodule.c"
      case 17: // $bb16
        var $84=$_pr; //@line 57 "grpmodule.c"
        var $85=HEAP[$84]; //@line 57 "grpmodule.c"
        var $86=($85) - 1; //@line 57 "grpmodule.c"
        var $87=$x; //@line 57 "grpmodule.c"
        var $88=$87; //@line 57 "grpmodule.c"
        HEAP[$88]=$86; //@line 57 "grpmodule.c"
        var $89=$x; //@line 57 "grpmodule.c"
        var $90=$89; //@line 57 "grpmodule.c"
        var $91=HEAP[$90]; //@line 57 "grpmodule.c"
        var $92=($91)==0; //@line 57 "grpmodule.c"
        if ($92) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 57 "grpmodule.c"
      case 18: // $bb17
        var $93=$x; //@line 57 "grpmodule.c"
        var $94=$93+4; //@line 57 "grpmodule.c"
        var $95=HEAP[$94]; //@line 57 "grpmodule.c"
        var $96=$95+24; //@line 57 "grpmodule.c"
        var $97=HEAP[$96]; //@line 57 "grpmodule.c"
        var $98=$x; //@line 57 "grpmodule.c"
        FUNCTION_TABLE[$97]($98); //@line 57 "grpmodule.c"
        __label__ = 19; break; //@line 57 "grpmodule.c"
      case 19: // $bb18
        var $99=$member; //@line 49 "grpmodule.c"
        var $100=$99+4; //@line 49 "grpmodule.c"
        $member=$100; //@line 49 "grpmodule.c"
        __label__ = 20; break; //@line 49 "grpmodule.c"
      case 20: // $bb19
        var $101=$member; //@line 49 "grpmodule.c"
        var $102=HEAP[$101]; //@line 49 "grpmodule.c"
        var $103=($102)!=0; //@line 49 "grpmodule.c"
        if ($103) { __label__ = 7; break; } else { __label__ = 21; break; } //@line 49 "grpmodule.c"
      case 21: // $bb20
        var $104=$v; //@line 61 "grpmodule.c"
        var $105=$104; //@line 61 "grpmodule.c"
        var $106=$setIndex; //@line 61 "grpmodule.c"
        var $107=$p_addr; //@line 61 "grpmodule.c"
        var $108=$107; //@line 61 "grpmodule.c"
        var $109=HEAP[$108]; //@line 61 "grpmodule.c"
        var $110=_PyString_FromString($109); //@line 61 "grpmodule.c"
        var $111=$105+12; //@line 61 "grpmodule.c"
        var $112=$111+$106*4; //@line 61 "grpmodule.c"
        HEAP[$112]=$110; //@line 61 "grpmodule.c"
        var $113=$setIndex; //@line 61 "grpmodule.c"
        var $114=($113) + 1; //@line 61 "grpmodule.c"
        $setIndex=$114; //@line 61 "grpmodule.c"
        var $115=$p_addr; //@line 66 "grpmodule.c"
        var $116=$115+4; //@line 66 "grpmodule.c"
        var $117=HEAP[$116]; //@line 66 "grpmodule.c"
        var $118=($117)!=0; //@line 66 "grpmodule.c"
        var $119=$v; //@line 67 "grpmodule.c"
        var $120=$119; //@line 67 "grpmodule.c"
        var $121=$setIndex; //@line 67 "grpmodule.c"
        if ($118) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 66 "grpmodule.c"
      case 22: // $bb21
        var $122=$p_addr; //@line 67 "grpmodule.c"
        var $123=$122+4; //@line 67 "grpmodule.c"
        var $124=HEAP[$123]; //@line 67 "grpmodule.c"
        var $125=_PyString_FromString($124); //@line 67 "grpmodule.c"
        var $126=$120+12; //@line 67 "grpmodule.c"
        var $127=$126+$121*4; //@line 67 "grpmodule.c"
        HEAP[$127]=$125; //@line 67 "grpmodule.c"
        var $128=$setIndex; //@line 67 "grpmodule.c"
        var $129=($128) + 1; //@line 67 "grpmodule.c"
        $setIndex=$129; //@line 67 "grpmodule.c"
        __label__ = 24; break; //@line 67 "grpmodule.c"
      case 23: // $bb22
        var $130=$120+12; //@line 69 "grpmodule.c"
        var $131=$130+$121*4; //@line 69 "grpmodule.c"
        HEAP[$131]=__Py_NoneStruct; //@line 69 "grpmodule.c"
        var $132=$setIndex; //@line 69 "grpmodule.c"
        var $133=($132) + 1; //@line 69 "grpmodule.c"
        $setIndex=$133; //@line 69 "grpmodule.c"
        var $134=HEAP[__Py_NoneStruct]; //@line 70 "grpmodule.c"
        var $135=($134) + 1; //@line 70 "grpmodule.c"
        HEAP[__Py_NoneStruct]=$135; //@line 70 "grpmodule.c"
        __label__ = 24; break; //@line 70 "grpmodule.c"
      case 24: // $bb23
        var $136=$v; //@line 73 "grpmodule.c"
        var $137=$136; //@line 73 "grpmodule.c"
        var $138=$setIndex; //@line 73 "grpmodule.c"
        var $139=$p_addr; //@line 73 "grpmodule.c"
        var $140=$139+8; //@line 73 "grpmodule.c"
        var $141=HEAP[$140]; //@line 73 "grpmodule.c"
        var $142=_PyInt_FromLong($141); //@line 73 "grpmodule.c"
        var $143=$137+12; //@line 73 "grpmodule.c"
        var $144=$143+$138*4; //@line 73 "grpmodule.c"
        HEAP[$144]=$142; //@line 73 "grpmodule.c"
        var $145=$setIndex; //@line 73 "grpmodule.c"
        var $146=($145) + 1; //@line 73 "grpmodule.c"
        $setIndex=$146; //@line 73 "grpmodule.c"
        var $147=$v; //@line 74 "grpmodule.c"
        var $148=$147; //@line 74 "grpmodule.c"
        var $149=$setIndex; //@line 74 "grpmodule.c"
        var $150=$148+12; //@line 74 "grpmodule.c"
        var $151=$150+$149*4; //@line 74 "grpmodule.c"
        var $152=$w; //@line 74 "grpmodule.c"
        HEAP[$151]=$152; //@line 74 "grpmodule.c"
        var $153=$setIndex; //@line 74 "grpmodule.c"
        var $154=($153) + 1; //@line 74 "grpmodule.c"
        $setIndex=$154; //@line 74 "grpmodule.c"
        var $155=_PyErr_Occurred(); //@line 77 "grpmodule.c"
        var $156=($155)!=0; //@line 77 "grpmodule.c"
        var $157=$v; //@line 78 "grpmodule.c"
        if ($156) { __label__ = 25; break; } else { __label__ = 28; break; } //@line 77 "grpmodule.c"
      case 25: // $bb24
        var $158=$157; //@line 78 "grpmodule.c"
        var $159=HEAP[$158]; //@line 78 "grpmodule.c"
        var $160=($159) - 1; //@line 78 "grpmodule.c"
        var $161=$v; //@line 78 "grpmodule.c"
        var $162=$161; //@line 78 "grpmodule.c"
        HEAP[$162]=$160; //@line 78 "grpmodule.c"
        var $163=$v; //@line 78 "grpmodule.c"
        var $164=$163; //@line 78 "grpmodule.c"
        var $165=HEAP[$164]; //@line 78 "grpmodule.c"
        var $166=($165)==0; //@line 78 "grpmodule.c"
        if ($166) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 78 "grpmodule.c"
      case 26: // $bb25
        var $167=$v; //@line 78 "grpmodule.c"
        var $168=$167+4; //@line 78 "grpmodule.c"
        var $169=HEAP[$168]; //@line 78 "grpmodule.c"
        var $170=$169+24; //@line 78 "grpmodule.c"
        var $171=HEAP[$170]; //@line 78 "grpmodule.c"
        var $172=$v; //@line 78 "grpmodule.c"
        FUNCTION_TABLE[$171]($172); //@line 78 "grpmodule.c"
        __label__ = 27; break; //@line 78 "grpmodule.c"
      case 27: // $bb26
        $0=0; //@line 79 "grpmodule.c"
        __label__ = 29; break; //@line 79 "grpmodule.c"
      case 28: // $bb27
        $0=$157; //@line 82 "grpmodule.c"
        __label__ = 29; break; //@line 82 "grpmodule.c"
      case 29: // $bb28
        var $173=$0; //@line 43 "grpmodule.c"
        $retval=$173; //@line 43 "grpmodule.c"
        var $retval29=$retval; //@line 43 "grpmodule.c"
        ;
        return $retval29; //@line 43 "grpmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _grp_getgrgid($self, $pyo_id) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $pyo_id_addr;
        var $retval;
        var $0;
        var $py_int_id;
        var $gid;
        var $p;
        $self_addr=$self;
        $pyo_id_addr=$pyo_id;
        var $1=$pyo_id_addr; //@line 92 "grpmodule.c"
        var $2=_PyNumber_Int($1); //@line 92 "grpmodule.c"
        $py_int_id=$2; //@line 92 "grpmodule.c"
        var $3=$py_int_id; //@line 93 "grpmodule.c"
        var $4=($3)==0; //@line 93 "grpmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 93 "grpmodule.c"
      case 1: // $bb
        $0=0; //@line 94 "grpmodule.c"
        __label__ = 7; break; //@line 94 "grpmodule.c"
      case 2: // $bb1
        var $5=$py_int_id; //@line 95 "grpmodule.c"
        var $6=$5; //@line 95 "grpmodule.c"
        var $7=$6+8; //@line 95 "grpmodule.c"
        var $8=HEAP[$7]; //@line 95 "grpmodule.c"
        $gid=$8; //@line 95 "grpmodule.c"
        var $9=$py_int_id; //@line 96 "grpmodule.c"
        var $10=$9; //@line 96 "grpmodule.c"
        var $11=HEAP[$10]; //@line 96 "grpmodule.c"
        var $12=($11) - 1; //@line 96 "grpmodule.c"
        var $13=$py_int_id; //@line 96 "grpmodule.c"
        var $14=$13; //@line 96 "grpmodule.c"
        HEAP[$14]=$12; //@line 96 "grpmodule.c"
        var $15=$py_int_id; //@line 96 "grpmodule.c"
        var $16=$15; //@line 96 "grpmodule.c"
        var $17=HEAP[$16]; //@line 96 "grpmodule.c"
        var $18=($17)==0; //@line 96 "grpmodule.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 96 "grpmodule.c"
      case 3: // $bb2
        var $19=$py_int_id; //@line 96 "grpmodule.c"
        var $20=$19+4; //@line 96 "grpmodule.c"
        var $21=HEAP[$20]; //@line 96 "grpmodule.c"
        var $22=$21+24; //@line 96 "grpmodule.c"
        var $23=HEAP[$22]; //@line 96 "grpmodule.c"
        var $24=$py_int_id; //@line 96 "grpmodule.c"
        FUNCTION_TABLE[$23]($24); //@line 96 "grpmodule.c"
        __label__ = 4; break; //@line 96 "grpmodule.c"
      case 4: // $bb3
        var $25=$gid; //@line 98 "grpmodule.c"
        var $26=_getgrgid($25); //@line 98 "grpmodule.c"
        $p=$26; //@line 98 "grpmodule.c"
        var $27=($26)==0; //@line 98 "grpmodule.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 98 "grpmodule.c"
      case 5: // $bb4
        var $28=HEAP[_PyExc_KeyError]; //@line 99 "grpmodule.c"
        var $29=$gid; //@line 99 "grpmodule.c"
        var $30=_PyErr_Format($28, __str9, allocate([$29,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 99 "grpmodule.c"
        $0=0; //@line 100 "grpmodule.c"
        __label__ = 7; break; //@line 100 "grpmodule.c"
      case 6: // $bb5
        var $31=$p; //@line 102 "grpmodule.c"
        var $32=_mkgrent($31); //@line 102 "grpmodule.c"
        $0=$32; //@line 102 "grpmodule.c"
        __label__ = 7; break; //@line 102 "grpmodule.c"
      case 7: // $bb6
        var $33=$0; //@line 94 "grpmodule.c"
        $retval=$33; //@line 94 "grpmodule.c"
        var $retval7=$retval; //@line 94 "grpmodule.c"
        ;
        return $retval7; //@line 94 "grpmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _grp_getgrnam($self, $pyo_name) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $pyo_name_addr;
        var $retval;
        var $0;
        var $py_str_name;
        var $name;
        var $p;
        $self_addr=$self;
        $pyo_name_addr=$pyo_name;
        var $1=$pyo_name_addr; //@line 112 "grpmodule.c"
        var $2=_PyObject_Str($1); //@line 112 "grpmodule.c"
        $py_str_name=$2; //@line 112 "grpmodule.c"
        var $3=$py_str_name; //@line 113 "grpmodule.c"
        var $4=($3)==0; //@line 113 "grpmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 113 "grpmodule.c"
      case 1: // $bb
        $0=0; //@line 114 "grpmodule.c"
        __label__ = 9; break; //@line 114 "grpmodule.c"
      case 2: // $bb1
        var $5=$py_str_name; //@line 115 "grpmodule.c"
        var $6=$5; //@line 115 "grpmodule.c"
        var $7=$6+20; //@line 115 "grpmodule.c"
        var $8=$7; //@line 115 "grpmodule.c"
        $name=$8; //@line 115 "grpmodule.c"
        var $9=$name; //@line 117 "grpmodule.c"
        var $10=_getgrnam($9); //@line 117 "grpmodule.c"
        $p=$10; //@line 117 "grpmodule.c"
        var $11=$p; //@line 117 "grpmodule.c"
        var $12=($11)==0; //@line 117 "grpmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 117 "grpmodule.c"
      case 3: // $bb2
        var $13=HEAP[_PyExc_KeyError]; //@line 118 "grpmodule.c"
        var $14=$name; //@line 118 "grpmodule.c"
        var $15=_PyErr_Format($13, __str10, allocate([$14,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 118 "grpmodule.c"
        var $16=$py_str_name; //@line 119 "grpmodule.c"
        var $17=$16; //@line 119 "grpmodule.c"
        var $18=HEAP[$17]; //@line 119 "grpmodule.c"
        var $19=($18) - 1; //@line 119 "grpmodule.c"
        var $20=$py_str_name; //@line 119 "grpmodule.c"
        var $21=$20; //@line 119 "grpmodule.c"
        HEAP[$21]=$19; //@line 119 "grpmodule.c"
        var $22=$py_str_name; //@line 119 "grpmodule.c"
        var $23=$22; //@line 119 "grpmodule.c"
        var $24=HEAP[$23]; //@line 119 "grpmodule.c"
        var $25=($24)==0; //@line 119 "grpmodule.c"
        if ($25) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 119 "grpmodule.c"
      case 4: // $bb3
        var $26=$py_str_name; //@line 119 "grpmodule.c"
        var $27=$26+4; //@line 119 "grpmodule.c"
        var $28=HEAP[$27]; //@line 119 "grpmodule.c"
        var $29=$28+24; //@line 119 "grpmodule.c"
        var $30=HEAP[$29]; //@line 119 "grpmodule.c"
        var $31=$py_str_name; //@line 119 "grpmodule.c"
        FUNCTION_TABLE[$30]($31); //@line 119 "grpmodule.c"
        __label__ = 5; break; //@line 119 "grpmodule.c"
      case 5: // $bb4
        $0=0; //@line 120 "grpmodule.c"
        __label__ = 9; break; //@line 120 "grpmodule.c"
      case 6: // $bb5
        var $32=$py_str_name; //@line 123 "grpmodule.c"
        var $33=$32; //@line 123 "grpmodule.c"
        var $34=HEAP[$33]; //@line 123 "grpmodule.c"
        var $35=($34) - 1; //@line 123 "grpmodule.c"
        var $36=$py_str_name; //@line 123 "grpmodule.c"
        var $37=$36; //@line 123 "grpmodule.c"
        HEAP[$37]=$35; //@line 123 "grpmodule.c"
        var $38=$py_str_name; //@line 123 "grpmodule.c"
        var $39=$38; //@line 123 "grpmodule.c"
        var $40=HEAP[$39]; //@line 123 "grpmodule.c"
        var $41=($40)==0; //@line 123 "grpmodule.c"
        if ($41) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 123 "grpmodule.c"
      case 7: // $bb6
        var $42=$py_str_name; //@line 123 "grpmodule.c"
        var $43=$42+4; //@line 123 "grpmodule.c"
        var $44=HEAP[$43]; //@line 123 "grpmodule.c"
        var $45=$44+24; //@line 123 "grpmodule.c"
        var $46=HEAP[$45]; //@line 123 "grpmodule.c"
        var $47=$py_str_name; //@line 123 "grpmodule.c"
        FUNCTION_TABLE[$46]($47); //@line 123 "grpmodule.c"
        __label__ = 8; break; //@line 123 "grpmodule.c"
      case 8: // $bb7
        var $48=$p; //@line 124 "grpmodule.c"
        var $49=_mkgrent($48); //@line 124 "grpmodule.c"
        $0=$49; //@line 124 "grpmodule.c"
        __label__ = 9; break; //@line 124 "grpmodule.c"
      case 9: // $bb8
        var $50=$0; //@line 114 "grpmodule.c"
        $retval=$50; //@line 114 "grpmodule.c"
        var $retval9=$retval; //@line 114 "grpmodule.c"
        ;
        return $retval9; //@line 114 "grpmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _grp_getgrall($self, $ignore) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $ignore_addr;
        var $retval;
        var $0;
        var $d;
        var $p;
        var $v;
        $self_addr=$self;
        $ignore_addr=$ignore;
        var $1=_PyList_New(0); //@line 133 "grpmodule.c"
        $d=$1; //@line 133 "grpmodule.c"
        var $2=$d; //@line 133 "grpmodule.c"
        var $3=($2)==0; //@line 133 "grpmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 133 "grpmodule.c"
      case 1: // $bb
        $0=0; //@line 134 "grpmodule.c"
        __label__ = 15; break; //@line 134 "grpmodule.c"
      case 2: // $bb1
        _setgrent(); //@line 135 "grpmodule.c"
        __label__ = 13; break; //@line 135 "grpmodule.c"
      case 3: // $bb2
        var $4=$p; //@line 137 "grpmodule.c"
        var $5=_mkgrent($4); //@line 137 "grpmodule.c"
        $v=$5; //@line 137 "grpmodule.c"
        var $6=$v; //@line 138 "grpmodule.c"
        var $7=($6)==0; //@line 138 "grpmodule.c"
        if ($7) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 138 "grpmodule.c"
      case 4: // $bb3
        var $8=$d; //@line 138 "grpmodule.c"
        var $9=$v; //@line 138 "grpmodule.c"
        var $10=_PyList_Append($8, $9); //@line 138 "grpmodule.c"
        var $11=($10)!=0; //@line 138 "grpmodule.c"
        var $_pr=$v;
        if ($11) { __label__ = 5; break; } else { __label__ = 11; break; } //@line 138 "grpmodule.c"
      case 5: // $bb4
        var $12=($_pr)!=0; //@line 139 "grpmodule.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 139 "grpmodule.c"
      case 6: // $bb5
        var $13=$v; //@line 139 "grpmodule.c"
        var $14=$13; //@line 139 "grpmodule.c"
        var $15=HEAP[$14]; //@line 139 "grpmodule.c"
        var $16=($15) - 1; //@line 139 "grpmodule.c"
        var $17=$v; //@line 139 "grpmodule.c"
        var $18=$17; //@line 139 "grpmodule.c"
        HEAP[$18]=$16; //@line 139 "grpmodule.c"
        var $19=$v; //@line 139 "grpmodule.c"
        var $20=$19; //@line 139 "grpmodule.c"
        var $21=HEAP[$20]; //@line 139 "grpmodule.c"
        var $22=($21)==0; //@line 139 "grpmodule.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 139 "grpmodule.c"
      case 7: // $bb6
        var $23=$v; //@line 139 "grpmodule.c"
        var $24=$23+4; //@line 139 "grpmodule.c"
        var $25=HEAP[$24]; //@line 139 "grpmodule.c"
        var $26=$25+24; //@line 139 "grpmodule.c"
        var $27=HEAP[$26]; //@line 139 "grpmodule.c"
        var $28=$v; //@line 139 "grpmodule.c"
        FUNCTION_TABLE[$27]($28); //@line 139 "grpmodule.c"
        __label__ = 8; break; //@line 139 "grpmodule.c"
      case 8: // $bb7
        var $29=$d; //@line 140 "grpmodule.c"
        var $30=$29; //@line 140 "grpmodule.c"
        var $31=HEAP[$30]; //@line 140 "grpmodule.c"
        var $32=($31) - 1; //@line 140 "grpmodule.c"
        var $33=$d; //@line 140 "grpmodule.c"
        var $34=$33; //@line 140 "grpmodule.c"
        HEAP[$34]=$32; //@line 140 "grpmodule.c"
        var $35=$d; //@line 140 "grpmodule.c"
        var $36=$35; //@line 140 "grpmodule.c"
        var $37=HEAP[$36]; //@line 140 "grpmodule.c"
        var $38=($37)==0; //@line 140 "grpmodule.c"
        if ($38) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 140 "grpmodule.c"
      case 9: // $bb8
        var $39=$d; //@line 140 "grpmodule.c"
        var $40=$39+4; //@line 140 "grpmodule.c"
        var $41=HEAP[$40]; //@line 140 "grpmodule.c"
        var $42=$41+24; //@line 140 "grpmodule.c"
        var $43=HEAP[$42]; //@line 140 "grpmodule.c"
        var $44=$d; //@line 140 "grpmodule.c"
        FUNCTION_TABLE[$43]($44); //@line 140 "grpmodule.c"
        __label__ = 10; break; //@line 140 "grpmodule.c"
      case 10: // $bb9
        _endgrent(); //@line 141 "grpmodule.c"
        $0=0; //@line 142 "grpmodule.c"
        __label__ = 15; break; //@line 142 "grpmodule.c"
      case 11: // $bb10
        var $45=$_pr; //@line 144 "grpmodule.c"
        var $46=HEAP[$45]; //@line 144 "grpmodule.c"
        var $47=($46) - 1; //@line 144 "grpmodule.c"
        var $48=$v; //@line 144 "grpmodule.c"
        var $49=$48; //@line 144 "grpmodule.c"
        HEAP[$49]=$47; //@line 144 "grpmodule.c"
        var $50=$v; //@line 144 "grpmodule.c"
        var $51=$50; //@line 144 "grpmodule.c"
        var $52=HEAP[$51]; //@line 144 "grpmodule.c"
        var $53=($52)==0; //@line 144 "grpmodule.c"
        if ($53) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 144 "grpmodule.c"
      case 12: // $bb11
        var $54=$v; //@line 144 "grpmodule.c"
        var $55=$54+4; //@line 144 "grpmodule.c"
        var $56=HEAP[$55]; //@line 144 "grpmodule.c"
        var $57=$56+24; //@line 144 "grpmodule.c"
        var $58=HEAP[$57]; //@line 144 "grpmodule.c"
        var $59=$v; //@line 144 "grpmodule.c"
        FUNCTION_TABLE[$58]($59); //@line 144 "grpmodule.c"
        __label__ = 13; break; //@line 144 "grpmodule.c"
      case 13: // $bb12
        var $60=_getgrent(); //@line 136 "grpmodule.c"
        $p=$60; //@line 136 "grpmodule.c"
        var $61=($60)!=0; //@line 136 "grpmodule.c"
        if ($61) { __label__ = 3; break; } else { __label__ = 14; break; } //@line 136 "grpmodule.c"
      case 14: // $bb13
        _endgrent(); //@line 146 "grpmodule.c"
        var $62=$d; //@line 147 "grpmodule.c"
        $0=$62; //@line 147 "grpmodule.c"
        __label__ = 15; break; //@line 147 "grpmodule.c"
      case 15: // $bb14
        var $63=$0; //@line 134 "grpmodule.c"
        $retval=$63; //@line 134 "grpmodule.c"
        var $retval15=$retval; //@line 134 "grpmodule.c"
        ;
        return $retval15; //@line 134 "grpmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initgrp() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $d;
        var $0=_Py_InitModule4(__str17, _grp_methods, _grp__doc__, 0, 1013); //@line 188 "grpmodule.c"
        $m=$0; //@line 188 "grpmodule.c"
        var $1=$m; //@line 189 "grpmodule.c"
        var $2=($1)==0; //@line 189 "grpmodule.c"
        if ($2) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 189 "grpmodule.c"
      case 1: // $bb
        var $3=$m; //@line 191 "grpmodule.c"
        var $4=_PyModule_GetDict($3); //@line 191 "grpmodule.c"
        $d=$4; //@line 191 "grpmodule.c"
        var $_b=HEAP[_initialized_b];
        var $5=($_b);
        var $6=($5)==0; //@line 192 "grpmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 192 "grpmodule.c"
      case 2: // $bb1
        _PyStructSequence_InitType(_StructGrpType, _struct_group_type_desc); //@line 193 "grpmodule.c"
        __label__ = 3; break; //@line 193 "grpmodule.c"
      case 3: // $bb2
        var $7=$d; //@line 194 "grpmodule.c"
        var $8=_PyDict_SetItemString($7, __str18, _StructGrpType); //@line 194 "grpmodule.c"
        HEAP[_initialized_b]=1;
        __label__ = 4; break; //@line 195 "grpmodule.c"
      case 4: // $return
        ;
        return; //@line 190 "grpmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initgrp"] = _initgrp;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_grp_getgrgid,0,_grp_getgrnam,0,_grp_getgrall,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([103,114,95,110,97,109,101,0] /* gr_name\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([103,114,111,117,112,32,110,97,109,101,0] /* group name\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([103,114,95,112,97,115,115,119,100,0] /* gr_passwd\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([112,97,115,115,119,111,114,100,0] /* password\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([103,114,95,103,105,100,0] /* gr_gid\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([103,114,111,117,112,32,105,100,0] /* group id\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([103,114,95,109,101,109,0] /* gr_mem\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([103,114,111,117,112,32,109,101,109,101,98,101,114,115,0] /* group memebers\00 */, "i8", ALLOC_NORMAL);
_struct_group_type_fields=allocate(40, ["i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8"], ALLOC_NORMAL);
_struct_group__doc__=allocate([103,114,112,46,115,116,114,117,99,116,95,103,114,111,117,112,58,32,82,101,115,117,108,116,115,32,102,114,111,109,32,103,101,116,103,114,42,40,41,32,114,111,117,116,105,110,101,115,46,10,10,84,104,105,115,32,111,98,106,101,99,116,32,109,97,121,32,98,101,32,97,99,99,101,115,115,101,100,32,101,105,116,104,101,114,32,97,115,32,97,32,116,117,112,108,101,32,111,102,10,32,32,40,103,114,95,110,97,109,101,44,103,114,95,112,97,115,115,119,100,44,103,114,95,103,105,100,44,103,114,95,109,101,109,41,10,111,114,32,118,105,97,32,116,104,101,32,111,98,106,101,99,116,32,97,116,116,114,105,98,117,116,101,115,32,97,115,32,110,97,109,101,100,32,105,110,32,116,104,101,32,97,98,111,118,101,32,116,117,112,108,101,46,10,0] /* grp.struct_group: Re */, "i8", ALLOC_NORMAL);
_struct_group_type_desc=allocate([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0], ["i8*",0,0,0,"i8*",0,0,0,"%struct.PyStructSequence_Field*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str8=allocate([103,114,112,46,115,116,114,117,99,116,95,103,114,111,117,112,0] /* grp.struct_group\00 */, "i8", ALLOC_NORMAL);
_StructGrpType=allocate(196, ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str9=allocate([103,101,116,103,114,103,105,100,40,41,58,32,103,105,100,32,110,111,116,32,102,111,117,110,100,58,32,37,100,0] /* getgrgid(): gid not  */, "i8", ALLOC_NORMAL);
__str10=allocate([103,101,116,103,114,110,97,109,40,41,58,32,110,97,109,101,32,110,111,116,32,102,111,117,110,100,58,32,37,115,0] /* getgrnam(): name not */, "i8", ALLOC_NORMAL);
__str11=allocate([103,101,116,103,114,103,105,100,0] /* getgrgid\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([103,101,116,103,114,103,105,100,40,105,100,41,32,45,62,32,116,117,112,108,101,10,82,101,116,117,114,110,32,116,104,101,32,103,114,111,117,112,32,100,97,116,97,98,97,115,101,32,101,110,116,114,121,32,102,111,114,32,116,104,101,32,103,105,118,101,110,32,110,117,109,101,114,105,99,32,103,114,111,117,112,32,73,68,46,32,32,73,102,10,105,100,32,105,115,32,110,111,116,32,118,97,108,105,100,44,32,114,97,105,115,101,32,75,101,121,69,114,114,111,114,46,0] /* getgrgid(id) -> tupl */, "i8", ALLOC_NORMAL);
__str13=allocate([103,101,116,103,114,110,97,109,0] /* getgrnam\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([103,101,116,103,114,110,97,109,40,110,97,109,101,41,32,45,62,32,116,117,112,108,101,10,82,101,116,117,114,110,32,116,104,101,32,103,114,111,117,112,32,100,97,116,97,98,97,115,101,32,101,110,116,114,121,32,102,111,114,32,116,104,101,32,103,105,118,101,110,32,103,114,111,117,112,32,110,97,109,101,46,32,32,73,102,10,110,97,109,101,32,105,115,32,110,111,116,32,118,97,108,105,100,44,32,114,97,105,115,101,32,75,101,121,69,114,114,111,114,46,0] /* getgrnam(name) -> tu */, "i8", ALLOC_NORMAL);
__str15=allocate([103,101,116,103,114,97,108,108,0] /* getgrall\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([103,101,116,103,114,97,108,108,40,41,32,45,62,32,108,105,115,116,32,111,102,32,116,117,112,108,101,115,10,82,101,116,117,114,110,32,97,32,108,105,115,116,32,111,102,32,97,108,108,32,97,118,97,105,108,97,98,108,101,32,103,114,111,117,112,32,101,110,116,114,105,101,115,44,32,105,110,32,97,114,98,105,116,114,97,114,121,32,111,114,100,101,114,46,10,65,110,32,101,110,116,114,121,32,119,104,111,115,101,32,110,97,109,101,32,115,116,97,114,116,115,32,119,105,116,104,32,39,43,39,32,111,114,32,39,45,39,32,114,101,112,114,101,115,101,110,116,115,32,97,110,32,105,110,115,116,114,117,99,116,105,111,110,10,116,111,32,117,115,101,32,89,80,47,78,73,83,32,97,110,100,32,109,97,121,32,110,111,116,32,98,101,32,97,99,99,101,115,115,105,98,108,101,32,118,105,97,32,103,101,116,103,114,110,97,109,32,111,114,32,103,101,116,103,114,103,105,100,46,0] /* getgrall() -> list o */, "i8", ALLOC_NORMAL);
_grp_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_grp__doc__=allocate([65,99,99,101,115,115,32,116,111,32,116,104,101,32,85,110,105,120,32,103,114,111,117,112,32,100,97,116,97,98,97,115,101,46,10,10,71,114,111,117,112,32,101,110,116,114,105,101,115,32,97,114,101,32,114,101,112,111,114,116,101,100,32,97,115,32,52,45,116,117,112,108,101,115,32,99,111,110,116,97,105,110,105,110,103,32,116,104,101,32,102,111,108,108,111,119,105,110,103,32,102,105,101,108,100,115,10,102,114,111,109,32,116,104,101,32,103,114,111,117,112,32,100,97,116,97,98,97,115,101,44,32,105,110,32,111,114,100,101,114,58,10,10,32,32,110,97,109,101,32,32,32,45,32,110,97,109,101,32,111,102,32,116,104,101,32,103,114,111,117,112,10,32,32,112,97,115,115,119,100,32,45,32,103,114,111,117,112,32,112,97,115,115,119,111,114,100,32,40,101,110,99,114,121,112,116,101,100,41,59,32,111,102,116,101,110,32,101,109,112,116,121,10,32,32,103,105,100,32,32,32,32,45,32,110,117,109,101,114,105,99,32,73,68,32,111,102,32,116,104,101,32,103,114,111,117,112,10,32,32,109,101,109,32,32,32,32,45,32,108,105,115,116,32,111,102,32,109,101,109,98,101,114,115,10,10,84,104,101,32,103,105,100,32,105,115,32,97,110,32,105,110,116,101,103,101,114,44,32,110,97,109,101,32,97,110,100,32,112,97,115,115,119,111,114,100,32,97,114,101,32,115,116,114,105,110,103,115,46,32,32,40,78,111,116,101,32,116,104,97,116,32,109,111,115,116,10,117,115,101,114,115,32,97,114,101,32,110,111,116,32,101,120,112,108,105,99,105,116,108,121,32,108,105,115,116,101,100,32,97,115,32,109,101,109,98,101,114,115,32,111,102,32,116,104,101,32,103,114,111,117,112,115,32,116,104,101,121,32,97,114,101,32,105,110,10,97,99,99,111,114,100,105,110,103,32,116,111,32,116,104,101,32,112,97,115,115,119,111,114,100,32,100,97,116,97,98,97,115,101,46,32,32,67,104,101,99,107,32,98,111,116,104,32,100,97,116,97,98,97,115,101,115,32,116,111,32,103,101,116,10,99,111,109,112,108,101,116,101,32,109,101,109,98,101,114,115,104,105,112,32,105,110,102,111,114,109,97,116,105,111,110,46,41,0] /* Access to the Unix g */, "i8", ALLOC_NORMAL);
__str17=allocate([103,114,112,0] /* grp\00 */, "i8", ALLOC_NORMAL);
_initialized_b=allocate(1, "i1", ALLOC_NORMAL);
__str18=allocate([115,116,114,117,99,116,95,103,114,111,117,112,0] /* struct_group\00 */, "i8", ALLOC_NORMAL);
HEAP[_struct_group_type_fields]=__str;
HEAP[_struct_group_type_fields+4]=__str1;
HEAP[_struct_group_type_fields+8]=__str2;
HEAP[_struct_group_type_fields+12]=__str3;
HEAP[_struct_group_type_fields+16]=__str4;
HEAP[_struct_group_type_fields+20]=__str5;
HEAP[_struct_group_type_fields+24]=__str6;
HEAP[_struct_group_type_fields+28]=__str7;
HEAP[_struct_group_type_desc]=__str8;
HEAP[_struct_group_type_desc+4]=_struct_group__doc__;
HEAP[_struct_group_type_desc+8]=_struct_group_type_fields;
HEAP[_grp_methods]=__str11;
HEAP[_grp_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_grp_methods+12]=__str12;
HEAP[_grp_methods+16]=__str13;
HEAP[_grp_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_grp_methods+28]=__str14;
HEAP[_grp_methods+32]=__str15;
HEAP[_grp_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_grp_methods+44]=__str16;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

