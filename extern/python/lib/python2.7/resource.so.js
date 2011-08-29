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



var $0___SIZE = 136; // %0
  
var $1___SIZE = 8; // %1
  
var $2___SIZE = 80; // %2
  
var $3___SIZE = 16; // %3
  
var $4___SIZE = 16; // %4
  
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
  
var $struct_PyStructSequence___SIZE = 16; // %struct.PyStructSequence
  
var $struct_PyStructSequence_Desc___SIZE = 16; // %struct.PyStructSequence_Desc
  
var $struct_PyStructSequence_Field___SIZE = 8; // %struct.PyStructSequence_Field
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_rlimit___SIZE = 16; // %struct.rlimit
  
var $struct_rusage___SIZE = 72; // %struct.rusage
  var $struct_rusage___FLATTENER = [0,8,16,20,24,28,32,36,40,44,48,52,56,60,64,68];
var $struct_timeval___SIZE = 8; // %struct.timeval
  
var _struct_rusage__doc__;
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
var __str24;
var __str25;
var __str26;
var __str27;
var __str28;
var __str29;
var __str30;
var __str31;
var _struct_rusage_fields;
var _struct_rusage_desc;
var __str32;
var __str33;

var __str34;
var _ResourceError;
var _StructRUsageType;
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
var _resource_methods;
var __str46;
var __str47;
var __str48;
var _initialized_b;
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


























  function _resource_getrusage($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 76; _memset(__stackBase__, 0, 76);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $who=__stackBase__;
        var $ru=__stackBase__+4;
        var $result;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 68 "resource.c"
        var $2=_PyArg_ParseTuple($1, __str33, allocate([$who,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 68 "resource.c"
        var $3=($2)==0; //@line 68 "resource.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 68 "resource.c"
      case 1: // $bb
        $0=0; //@line 69 "resource.c"
        __label__ = 13; break; //@line 69 "resource.c"
      case 2: // $bb1
        var $4=HEAP[$who]; //@line 71 "resource.c"
        var $5=_getrusage($4, $ru); //@line 71 "resource.c"
        var $6=($5)==-1; //@line 71 "resource.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 71 "resource.c"
      case 3: // $bb2
        var $7=___errno_location(); //@line 72 "resource.c"
        var $8=HEAP[$7]; //@line 72 "resource.c"
        var $9=($8)==22; //@line 72 "resource.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 72 "resource.c"
      case 4: // $bb3
        var $10=HEAP[_PyExc_ValueError]; //@line 73 "resource.c"
        _PyErr_SetString($10, __str34); //@line 73 "resource.c"
        $0=0; //@line 75 "resource.c"
        __label__ = 13; break; //@line 75 "resource.c"
      case 5: // $bb4
        var $11=HEAP[_ResourceError]; //@line 77 "resource.c"
        var $12=_PyErr_SetFromErrno($11); //@line 77 "resource.c"
        $0=0; //@line 78 "resource.c"
        __label__ = 13; break; //@line 78 "resource.c"
      case 6: // $bb5
        var $13=_PyStructSequence_New(_StructRUsageType); //@line 81 "resource.c"
        $result=$13; //@line 81 "resource.c"
        var $14=$result; //@line 82 "resource.c"
        var $15=($14)==0; //@line 82 "resource.c"
        if ($15) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 82 "resource.c"
      case 7: // $bb6
        $0=0; //@line 83 "resource.c"
        __label__ = 13; break; //@line 83 "resource.c"
      case 8: // $bb7
        var $16=$result; //@line 85 "resource.c"
        var $17=$16; //@line 85 "resource.c"
        var $18=$ru; //@line 85 "resource.c"
        var $19=$18; //@line 85 "resource.c"
        var $20=HEAP[$19]; //@line 85 "resource.c"
        var $21=($20); //@line 85 "resource.c"
        var $22=$ru; //@line 85 "resource.c"
        var $23=$22+4; //@line 85 "resource.c"
        var $24=HEAP[$23]; //@line 85 "resource.c"
        var $25=($24); //@line 85 "resource.c"
        var $26=($25) * 0.000001; //@line 85 "resource.c"
        var $27=($21) + ($26); //@line 85 "resource.c"
        var $28=_PyFloat_FromDouble($27); //@line 85 "resource.c"
        var $29=$17+12; //@line 85 "resource.c"
        var $30=$29; //@line 85 "resource.c"
        HEAP[$30]=$28; //@line 85 "resource.c"
        var $31=$result; //@line 87 "resource.c"
        var $32=$31; //@line 87 "resource.c"
        var $33=$ru+8; //@line 87 "resource.c"
        var $34=$33; //@line 87 "resource.c"
        var $35=HEAP[$34]; //@line 87 "resource.c"
        var $36=($35); //@line 87 "resource.c"
        var $37=$ru+8; //@line 87 "resource.c"
        var $38=$37+4; //@line 87 "resource.c"
        var $39=HEAP[$38]; //@line 87 "resource.c"
        var $40=($39); //@line 87 "resource.c"
        var $41=($40) * 0.000001; //@line 87 "resource.c"
        var $42=($36) + ($41); //@line 87 "resource.c"
        var $43=_PyFloat_FromDouble($42); //@line 87 "resource.c"
        var $44=$32+12; //@line 87 "resource.c"
        var $45=$44+4; //@line 87 "resource.c"
        HEAP[$45]=$43; //@line 87 "resource.c"
        var $46=$result; //@line 89 "resource.c"
        var $47=$46; //@line 89 "resource.c"
        var $48=$ru+16; //@line 89 "resource.c"
        var $49=HEAP[$48]; //@line 89 "resource.c"
        var $50=_PyInt_FromLong($49); //@line 89 "resource.c"
        var $51=$47+12; //@line 89 "resource.c"
        var $52=$51+8; //@line 89 "resource.c"
        HEAP[$52]=$50; //@line 89 "resource.c"
        var $53=$result; //@line 90 "resource.c"
        var $54=$53; //@line 90 "resource.c"
        var $55=$ru+20; //@line 90 "resource.c"
        var $56=HEAP[$55]; //@line 90 "resource.c"
        var $57=_PyInt_FromLong($56); //@line 90 "resource.c"
        var $58=$54+12; //@line 90 "resource.c"
        var $59=$58+12; //@line 90 "resource.c"
        HEAP[$59]=$57; //@line 90 "resource.c"
        var $60=$result; //@line 91 "resource.c"
        var $61=$60; //@line 91 "resource.c"
        var $62=$ru+24; //@line 91 "resource.c"
        var $63=HEAP[$62]; //@line 91 "resource.c"
        var $64=_PyInt_FromLong($63); //@line 91 "resource.c"
        var $65=$61+12; //@line 91 "resource.c"
        var $66=$65+16; //@line 91 "resource.c"
        HEAP[$66]=$64; //@line 91 "resource.c"
        var $67=$result; //@line 92 "resource.c"
        var $68=$67; //@line 92 "resource.c"
        var $69=$ru+28; //@line 92 "resource.c"
        var $70=HEAP[$69]; //@line 92 "resource.c"
        var $71=_PyInt_FromLong($70); //@line 92 "resource.c"
        var $72=$68+12; //@line 92 "resource.c"
        var $73=$72+20; //@line 92 "resource.c"
        HEAP[$73]=$71; //@line 92 "resource.c"
        var $74=$result; //@line 93 "resource.c"
        var $75=$74; //@line 93 "resource.c"
        var $76=$ru+32; //@line 93 "resource.c"
        var $77=HEAP[$76]; //@line 93 "resource.c"
        var $78=_PyInt_FromLong($77); //@line 93 "resource.c"
        var $79=$75+12; //@line 93 "resource.c"
        var $80=$79+24; //@line 93 "resource.c"
        HEAP[$80]=$78; //@line 93 "resource.c"
        var $81=$result; //@line 94 "resource.c"
        var $82=$81; //@line 94 "resource.c"
        var $83=$ru+36; //@line 94 "resource.c"
        var $84=HEAP[$83]; //@line 94 "resource.c"
        var $85=_PyInt_FromLong($84); //@line 94 "resource.c"
        var $86=$82+12; //@line 94 "resource.c"
        var $87=$86+28; //@line 94 "resource.c"
        HEAP[$87]=$85; //@line 94 "resource.c"
        var $88=$result; //@line 95 "resource.c"
        var $89=$88; //@line 95 "resource.c"
        var $90=$ru+40; //@line 95 "resource.c"
        var $91=HEAP[$90]; //@line 95 "resource.c"
        var $92=_PyInt_FromLong($91); //@line 95 "resource.c"
        var $93=$89+12; //@line 95 "resource.c"
        var $94=$93+32; //@line 95 "resource.c"
        HEAP[$94]=$92; //@line 95 "resource.c"
        var $95=$result; //@line 96 "resource.c"
        var $96=$95; //@line 96 "resource.c"
        var $97=$ru+44; //@line 96 "resource.c"
        var $98=HEAP[$97]; //@line 96 "resource.c"
        var $99=_PyInt_FromLong($98); //@line 96 "resource.c"
        var $100=$96+12; //@line 96 "resource.c"
        var $101=$100+36; //@line 96 "resource.c"
        HEAP[$101]=$99; //@line 96 "resource.c"
        var $102=$result; //@line 97 "resource.c"
        var $103=$102; //@line 97 "resource.c"
        var $104=$ru+48; //@line 97 "resource.c"
        var $105=HEAP[$104]; //@line 97 "resource.c"
        var $106=_PyInt_FromLong($105); //@line 97 "resource.c"
        var $107=$103+12; //@line 97 "resource.c"
        var $108=$107+40; //@line 97 "resource.c"
        HEAP[$108]=$106; //@line 97 "resource.c"
        var $109=$result; //@line 98 "resource.c"
        var $110=$109; //@line 98 "resource.c"
        var $111=$ru+52; //@line 98 "resource.c"
        var $112=HEAP[$111]; //@line 98 "resource.c"
        var $113=_PyInt_FromLong($112); //@line 98 "resource.c"
        var $114=$110+12; //@line 98 "resource.c"
        var $115=$114+44; //@line 98 "resource.c"
        HEAP[$115]=$113; //@line 98 "resource.c"
        var $116=$result; //@line 99 "resource.c"
        var $117=$116; //@line 99 "resource.c"
        var $118=$ru+56; //@line 99 "resource.c"
        var $119=HEAP[$118]; //@line 99 "resource.c"
        var $120=_PyInt_FromLong($119); //@line 99 "resource.c"
        var $121=$117+12; //@line 99 "resource.c"
        var $122=$121+48; //@line 99 "resource.c"
        HEAP[$122]=$120; //@line 99 "resource.c"
        var $123=$result; //@line 100 "resource.c"
        var $124=$123; //@line 100 "resource.c"
        var $125=$ru+60; //@line 100 "resource.c"
        var $126=HEAP[$125]; //@line 100 "resource.c"
        var $127=_PyInt_FromLong($126); //@line 100 "resource.c"
        var $128=$124+12; //@line 100 "resource.c"
        var $129=$128+52; //@line 100 "resource.c"
        HEAP[$129]=$127; //@line 100 "resource.c"
        var $130=$result; //@line 101 "resource.c"
        var $131=$130; //@line 101 "resource.c"
        var $132=$ru+64; //@line 101 "resource.c"
        var $133=HEAP[$132]; //@line 101 "resource.c"
        var $134=_PyInt_FromLong($133); //@line 101 "resource.c"
        var $135=$131+12; //@line 101 "resource.c"
        var $136=$135+56; //@line 101 "resource.c"
        HEAP[$136]=$134; //@line 101 "resource.c"
        var $137=$result; //@line 102 "resource.c"
        var $138=$137; //@line 102 "resource.c"
        var $139=$ru+68; //@line 102 "resource.c"
        var $140=HEAP[$139]; //@line 102 "resource.c"
        var $141=_PyInt_FromLong($140); //@line 102 "resource.c"
        var $142=$138+12; //@line 102 "resource.c"
        var $143=$142+60; //@line 102 "resource.c"
        HEAP[$143]=$141; //@line 102 "resource.c"
        var $144=_PyErr_Occurred(); //@line 104 "resource.c"
        var $145=($144)!=0; //@line 104 "resource.c"
        var $146=$result; //@line 105 "resource.c"
        if ($145) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 104 "resource.c"
      case 9: // $bb8
        var $147=$146; //@line 105 "resource.c"
        var $148=HEAP[$147]; //@line 105 "resource.c"
        var $149=($148) - 1; //@line 105 "resource.c"
        var $150=$result; //@line 105 "resource.c"
        var $151=$150; //@line 105 "resource.c"
        HEAP[$151]=$149; //@line 105 "resource.c"
        var $152=$result; //@line 105 "resource.c"
        var $153=$152; //@line 105 "resource.c"
        var $154=HEAP[$153]; //@line 105 "resource.c"
        var $155=($154)==0; //@line 105 "resource.c"
        if ($155) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 105 "resource.c"
      case 10: // $bb9
        var $156=$result; //@line 105 "resource.c"
        var $157=$156+4; //@line 105 "resource.c"
        var $158=HEAP[$157]; //@line 105 "resource.c"
        var $159=$158+24; //@line 105 "resource.c"
        var $160=HEAP[$159]; //@line 105 "resource.c"
        var $161=$result; //@line 105 "resource.c"
        FUNCTION_TABLE[$160]($161); //@line 105 "resource.c"
        __label__ = 11; break; //@line 105 "resource.c"
      case 11: // $bb10
        $0=0; //@line 106 "resource.c"
        __label__ = 13; break; //@line 106 "resource.c"
      case 12: // $bb11
        $0=$146; //@line 109 "resource.c"
        __label__ = 13; break; //@line 109 "resource.c"
      case 13: // $bb12
        var $162=$0; //@line 69 "resource.c"
        $retval=$162; //@line 69 "resource.c"
        var $retval13=$retval; //@line 69 "resource.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 69 "resource.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _resource_getrlimit($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $rl=__stackBase__;
        var $resource=__stackBase__+16;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 119 "resource.c"
        var $2=_PyArg_ParseTuple($1, __str35, allocate([$resource,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 119 "resource.c"
        var $3=($2)==0; //@line 119 "resource.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 119 "resource.c"
      case 1: // $bb
        $0=0; //@line 120 "resource.c"
        __label__ = 7; break; //@line 120 "resource.c"
      case 2: // $bb1
        var $4=HEAP[$resource]; //@line 122 "resource.c"
        var $5=($4) < 0; //@line 122 "resource.c"
        var $6=HEAP[$resource]; //@line 122 "resource.c"
        var $7=($6) > 15; //@line 122 "resource.c"
        var $or_cond=($5) | ($7);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 122 "resource.c"
      case 3: // $bb3
        var $8=HEAP[_PyExc_ValueError]; //@line 123 "resource.c"
        _PyErr_SetString($8, __str36); //@line 123 "resource.c"
        $0=0; //@line 125 "resource.c"
        __label__ = 7; break; //@line 125 "resource.c"
      case 4: // $bb4
        var $9=HEAP[$resource]; //@line 128 "resource.c"
        var $10=___01getrlimit64_($9, $rl); //@line 128 "resource.c"
        var $11=($10)==-1; //@line 128 "resource.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 128 "resource.c"
      case 5: // $bb5
        var $12=HEAP[_ResourceError]; //@line 129 "resource.c"
        var $13=_PyErr_SetFromErrno($12); //@line 129 "resource.c"
        $0=0; //@line 130 "resource.c"
        __label__ = 7; break; //@line 130 "resource.c"
      case 6: // $bb6
        var $14=$rl+8; //@line 135 "resource.c"
        var $15=HEAP[$14]; //@line 135 "resource.c"
        var $16=$rl; //@line 135 "resource.c"
        var $17=HEAP[$16]; //@line 135 "resource.c"
        var $18=_Py_BuildValue(__str37, allocate([$17,0,0,0,0,0,0,0,$15,0,0,0,0,0,0,0], ["i64",0,0,0,0,0,0,0,"i64",0,0,0,0,0,0,0], ALLOC_STACK)); //@line 135 "resource.c"
        $0=$18; //@line 135 "resource.c"
        __label__ = 7; break; //@line 135 "resource.c"
      case 7: // $bb7
        var $19=$0; //@line 120 "resource.c"
        $retval=$19; //@line 120 "resource.c"
        var $retval8=$retval; //@line 120 "resource.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 120 "resource.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _resource_setrlimit($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_32;
        var $iftmp_28;
        var $0;
        var $rl=__stackBase__;
        var $resource=__stackBase__+16;
        var $curobj=__stackBase__+20;
        var $maxobj=__stackBase__+24;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 150 "resource.c"
        var $2=_PyArg_ParseTuple($1, __str38, allocate([$resource,0,0,0,$curobj,0,0,0,$maxobj,0,0,0], ["i32*",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 150 "resource.c"
        var $3=($2)==0; //@line 150 "resource.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 150 "resource.c"
      case 1: // $bb
        $0=0; //@line 152 "resource.c"
        __label__ = 24; break; //@line 152 "resource.c"
      case 2: // $bb1
        var $4=HEAP[$resource]; //@line 154 "resource.c"
        var $5=($4) < 0; //@line 154 "resource.c"
        var $6=HEAP[$resource]; //@line 154 "resource.c"
        var $7=($6) > 15; //@line 154 "resource.c"
        var $or_cond=($5) | ($7);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 154 "resource.c"
      case 3: // $bb3
        var $8=HEAP[_PyExc_ValueError]; //@line 155 "resource.c"
        _PyErr_SetString($8, __str36); //@line 155 "resource.c"
        $0=0; //@line 157 "resource.c"
        __label__ = 24; break; //@line 157 "resource.c"
      case 4: // $bb4
        var $9=HEAP[$curobj]; //@line 169 "resource.c"
        var $10=$9+4; //@line 169 "resource.c"
        var $11=HEAP[$10]; //@line 169 "resource.c"
        var $12=$11+84; //@line 169 "resource.c"
        var $13=HEAP[$12]; //@line 169 "resource.c"
        var $14=($13) & 16777216; //@line 169 "resource.c"
        var $15=($14)!=0; //@line 169 "resource.c"
        var $16=HEAP[$curobj]; //@line 169 "resource.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 169 "resource.c"
      case 5: // $bb5
        var $17=_PyLong_AsLongLong($16); //@line 169 "resource.c"
        $iftmp_28=$17; //@line 169 "resource.c"
        __label__ = 7; break; //@line 169 "resource.c"
      case 6: // $bb6
        var $18=_PyInt_AsLong($16); //@line 169 "resource.c"
        var $19=($18); //@line 169 "resource.c"
        $iftmp_28=$19; //@line 169 "resource.c"
        __label__ = 7; break; //@line 169 "resource.c"
      case 7: // $bb7
        var $20=$rl; //@line 169 "resource.c"
        var $21=$iftmp_28; //@line 169 "resource.c"
        HEAP[$20]=$21; //@line 169 "resource.c"
        var $22=$rl; //@line 171 "resource.c"
        var $23=HEAP[$22]; //@line 171 "resource.c"
        var $24=($23)==-1; //@line 171 "resource.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 171 "resource.c"
      case 8: // $bb8
        var $25=_PyErr_Occurred(); //@line 171 "resource.c"
        var $26=($25)!=0; //@line 171 "resource.c"
        if ($26) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 171 "resource.c"
      case 9: // $bb9
        $0=0; //@line 172 "resource.c"
        __label__ = 24; break; //@line 172 "resource.c"
      case 10: // $bb10
        var $27=HEAP[$maxobj]; //@line 173 "resource.c"
        var $28=$27+4; //@line 173 "resource.c"
        var $29=HEAP[$28]; //@line 173 "resource.c"
        var $30=$29+84; //@line 173 "resource.c"
        var $31=HEAP[$30]; //@line 173 "resource.c"
        var $32=($31) & 16777216; //@line 173 "resource.c"
        var $33=($32)!=0; //@line 173 "resource.c"
        var $34=HEAP[$maxobj]; //@line 173 "resource.c"
        if ($33) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 173 "resource.c"
      case 11: // $bb11
        var $35=_PyLong_AsLongLong($34); //@line 173 "resource.c"
        $iftmp_32=$35; //@line 173 "resource.c"
        __label__ = 13; break; //@line 173 "resource.c"
      case 12: // $bb12
        var $36=_PyInt_AsLong($34); //@line 173 "resource.c"
        var $37=($36); //@line 173 "resource.c"
        $iftmp_32=$37; //@line 173 "resource.c"
        __label__ = 13; break; //@line 173 "resource.c"
      case 13: // $bb13
        var $38=$rl+8; //@line 173 "resource.c"
        var $39=$iftmp_32; //@line 173 "resource.c"
        HEAP[$38]=$39; //@line 173 "resource.c"
        var $40=$rl+8; //@line 175 "resource.c"
        var $41=HEAP[$40]; //@line 175 "resource.c"
        var $42=($41)==-1; //@line 175 "resource.c"
        if ($42) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 175 "resource.c"
      case 14: // $bb14
        var $43=_PyErr_Occurred(); //@line 175 "resource.c"
        var $44=($43)!=0; //@line 175 "resource.c"
        if ($44) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 175 "resource.c"
      case 15: // $bb15
        $0=0; //@line 176 "resource.c"
        __label__ = 24; break; //@line 176 "resource.c"
      case 16: // $bb16
        var $45=$rl; //@line 179 "resource.c"
        var $46=HEAP[$45]; //@line 179 "resource.c"
        var $47=$rl; //@line 179 "resource.c"
        HEAP[$47]=$46; //@line 179 "resource.c"
        var $48=$rl+8; //@line 180 "resource.c"
        var $49=HEAP[$48]; //@line 180 "resource.c"
        var $50=$rl+8; //@line 180 "resource.c"
        HEAP[$50]=$49; //@line 180 "resource.c"
        var $51=HEAP[$resource]; //@line 181 "resource.c"
        var $52=___01setrlimit64_($51, $rl); //@line 181 "resource.c"
        var $53=($52)==-1; //@line 181 "resource.c"
        if ($53) { __label__ = 17; break; } else { __label__ = 23; break; } //@line 181 "resource.c"
      case 17: // $bb17
        var $54=___errno_location(); //@line 182 "resource.c"
        var $55=HEAP[$54]; //@line 182 "resource.c"
        var $56=($55)==22; //@line 182 "resource.c"
        if ($56) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 182 "resource.c"
      case 18: // $bb18
        var $57=HEAP[_PyExc_ValueError]; //@line 183 "resource.c"
        _PyErr_SetString($57, __str39); //@line 183 "resource.c"
        __label__ = 22; break; //@line 183 "resource.c"
      case 19: // $bb19
        var $58=___errno_location(); //@line 185 "resource.c"
        var $59=HEAP[$58]; //@line 185 "resource.c"
        var $60=($59)==1; //@line 185 "resource.c"
        if ($60) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 185 "resource.c"
      case 20: // $bb20
        var $61=HEAP[_PyExc_ValueError]; //@line 186 "resource.c"
        _PyErr_SetString($61, __str40); //@line 186 "resource.c"
        __label__ = 22; break; //@line 186 "resource.c"
      case 21: // $bb21
        var $62=HEAP[_ResourceError]; //@line 189 "resource.c"
        var $63=_PyErr_SetFromErrno($62); //@line 189 "resource.c"
        __label__ = 22; break; //@line 189 "resource.c"
      case 22: // $bb22
        $0=0; //@line 190 "resource.c"
        __label__ = 24; break; //@line 190 "resource.c"
      case 23: // $bb23
        var $64=HEAP[__Py_NoneStruct]; //@line 192 "resource.c"
        var $65=($64) + 1; //@line 192 "resource.c"
        HEAP[__Py_NoneStruct]=$65; //@line 192 "resource.c"
        $0=__Py_NoneStruct; //@line 193 "resource.c"
        __label__ = 24; break; //@line 193 "resource.c"
      case 24: // $bb24
        var $66=$0; //@line 152 "resource.c"
        $retval=$66; //@line 152 "resource.c"
        var $retval25=$retval; //@line 152 "resource.c"
        STACKTOP = __stackBase__;
        return $retval25; //@line 152 "resource.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _resource_getpagesize($self, $unused) {
    ;
    var __label__;
  
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    var $pagesize;
    $self_addr=$self;
    $unused_addr=$unused;
    $pagesize=0; //@line 199 "resource.c"
    var $1=_getpagesize(); //@line 201 "resource.c"
    $pagesize=$1; //@line 201 "resource.c"
    var $2=$pagesize; //@line 210 "resource.c"
    var $3=_Py_BuildValue(__str41, allocate([$2,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 210 "resource.c"
    $0=$3; //@line 210 "resource.c"
    var $4=$0; //@line 210 "resource.c"
    $retval=$4; //@line 210 "resource.c"
    var $retval1=$retval; //@line 210 "resource.c"
    ;
    return $retval1; //@line 210 "resource.c"
  }
  

  function _initresource() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $v;
        var $0=_Py_InitModule4(__str46, _resource_methods, 0, 0, 1013); //@line 234 "resource.c"
        $m=$0; //@line 234 "resource.c"
        var $1=$m; //@line 235 "resource.c"
        var $2=($1)==0; //@line 235 "resource.c"
        if ($2) { __label__ = 8; break; } else { __label__ = 1; break; } //@line 235 "resource.c"
      case 1: // $bb
        var $3=HEAP[_ResourceError]; //@line 239 "resource.c"
        var $4=($3)==0; //@line 239 "resource.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 239 "resource.c"
      case 2: // $bb1
        var $5=_PyErr_NewException(__str47, 0, 0); //@line 240 "resource.c"
        HEAP[_ResourceError]=$5; //@line 240 "resource.c"
        __label__ = 3; break; //@line 240 "resource.c"
      case 3: // $bb2
        var $6=HEAP[_ResourceError]; //@line 243 "resource.c"
        var $7=$6; //@line 243 "resource.c"
        var $8=HEAP[$7]; //@line 243 "resource.c"
        var $9=($8) + 1; //@line 243 "resource.c"
        var $10=$6; //@line 243 "resource.c"
        HEAP[$10]=$9; //@line 243 "resource.c"
        var $11=HEAP[_ResourceError]; //@line 244 "resource.c"
        var $12=$m; //@line 244 "resource.c"
        var $13=_PyModule_AddObject($12, __str48, $11); //@line 244 "resource.c"
        var $_b=HEAP[_initialized_b];
        var $14=($_b);
        var $15=($14)==0; //@line 245 "resource.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 245 "resource.c"
      case 4: // $bb3
        _PyStructSequence_InitType(_StructRUsageType, _struct_rusage_desc); //@line 246 "resource.c"
        __label__ = 5; break; //@line 246 "resource.c"
      case 5: // $bb4
        var $16=HEAP[_StructRUsageType]; //@line 248 "resource.c"
        var $17=($16) + 1; //@line 248 "resource.c"
        HEAP[_StructRUsageType]=$17; //@line 248 "resource.c"
        var $18=$m; //@line 249 "resource.c"
        var $19=_PyModule_AddObject($18, __str49, _StructRUsageType); //@line 249 "resource.c"
        var $20=$m; //@line 254 "resource.c"
        var $21=_PyModule_AddIntConstant($20, __str50, 0); //@line 254 "resource.c"
        var $22=$m; //@line 258 "resource.c"
        var $23=_PyModule_AddIntConstant($22, __str51, 1); //@line 258 "resource.c"
        var $24=$m; //@line 262 "resource.c"
        var $25=_PyModule_AddIntConstant($24, __str52, 2); //@line 262 "resource.c"
        var $26=$m; //@line 266 "resource.c"
        var $27=_PyModule_AddIntConstant($26, __str53, 3); //@line 266 "resource.c"
        var $28=$m; //@line 270 "resource.c"
        var $29=_PyModule_AddIntConstant($28, __str54, 4); //@line 270 "resource.c"
        var $30=$m; //@line 274 "resource.c"
        var $31=_PyModule_AddIntConstant($30, __str55, 7); //@line 274 "resource.c"
        var $32=$m; //@line 278 "resource.c"
        var $33=_PyModule_AddIntConstant($32, __str56, 7); //@line 278 "resource.c"
        var $34=$m; //@line 286 "resource.c"
        var $35=_PyModule_AddIntConstant($34, __str57, 9); //@line 286 "resource.c"
        var $36=$m; //@line 290 "resource.c"
        var $37=_PyModule_AddIntConstant($36, __str58, 5); //@line 290 "resource.c"
        var $38=$m; //@line 294 "resource.c"
        var $39=_PyModule_AddIntConstant($38, __str59, 6); //@line 294 "resource.c"
        var $40=$m; //@line 298 "resource.c"
        var $41=_PyModule_AddIntConstant($40, __str60, 8); //@line 298 "resource.c"
        var $42=$m; //@line 306 "resource.c"
        var $43=_PyModule_AddIntConstant($42, __str61, 0); //@line 306 "resource.c"
        var $44=$m; //@line 310 "resource.c"
        var $45=_PyModule_AddIntConstant($44, __str62, -1); //@line 310 "resource.c"
        var $46=_PyLong_FromLongLong(-1); //@line 319 "resource.c"
        $v=$46; //@line 319 "resource.c"
        var $47=($46)!=0; //@line 325 "resource.c"
        if ($47) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 325 "resource.c"
      case 6: // $bb5
        var $48=$m; //@line 326 "resource.c"
        var $49=$v; //@line 326 "resource.c"
        var $50=_PyModule_AddObject($48, __str63, $49); //@line 326 "resource.c"
        __label__ = 7; break; //@line 326 "resource.c"
      case 7: // $bb6
        HEAP[_initialized_b]=1;
        __label__ = 8; break; //@line 328 "resource.c"
      case 8: // $return
        ;
        return; //@line 236 "resource.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initresource"] = _initresource;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_resource_getrusage,0,_resource_getrlimit,0,_resource_setrlimit,0,_resource_getpagesize,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_struct_rusage__doc__=allocate([115,116,114,117,99,116,95,114,117,115,97,103,101,58,32,82,101,115,117,108,116,32,102,114,111,109,32,103,101,116,114,117,115,97,103,101,46,10,10,84,104,105,115,32,111,98,106,101,99,116,32,109,97,121,32,98,101,32,97,99,99,101,115,115,101,100,32,101,105,116,104,101,114,32,97,115,32,97,32,116,117,112,108,101,32,111,102,10,32,32,32,32,40,117,116,105,109,101,44,115,116,105,109,101,44,109,97,120,114,115,115,44,105,120,114,115,115,44,105,100,114,115,115,44,105,115,114,115,115,44,109,105,110,102,108,116,44,109,97,106,102,108,116,44,10,32,32,32,32,110,115,119,97,112,44,105,110,98,108,111,99,107,44,111,117,98,108,111,99,107,44,109,115,103,115,110,100,44,109,115,103,114,99,118,44,110,115,105,103,110,97,108,115,44,110,118,99,115,119,44,110,105,118,99,115,119,41,10,111,114,32,118,105,97,32,116,104,101,32,97,116,116,114,105,98,117,116,101,115,32,114,117,95,117,116,105,109,101,44,32,114,117,95,115,116,105,109,101,44,32,114,117,95,109,97,120,114,115,115,44,32,97,110,100,32,115,111,32,111,110,46,0] /* struct_rusage: Resul */, "i8", ALLOC_NORMAL);
__str=allocate([114,117,95,117,116,105,109,101,0] /* ru_utime\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([117,115,101,114,32,116,105,109,101,32,117,115,101,100,0] /* user time used\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([114,117,95,115,116,105,109,101,0] /* ru_stime\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([115,121,115,116,101,109,32,116,105,109,101,32,117,115,101,100,0] /* system time used\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([114,117,95,109,97,120,114,115,115,0] /* ru_maxrss\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([109,97,120,46,32,114,101,115,105,100,101,110,116,32,115,101,116,32,115,105,122,101,0] /* max. resident set si */, "i8", ALLOC_NORMAL);
__str6=allocate([114,117,95,105,120,114,115,115,0] /* ru_ixrss\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([115,104,97,114,101,100,32,109,101,109,111,114,121,32,115,105,122,101,0] /* shared memory size\0 */, "i8", ALLOC_NORMAL);
__str8=allocate([114,117,95,105,100,114,115,115,0] /* ru_idrss\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([117,110,115,104,97,114,101,100,32,100,97,116,97,32,115,105,122,101,0] /* unshared data size\0 */, "i8", ALLOC_NORMAL);
__str10=allocate([114,117,95,105,115,114,115,115,0] /* ru_isrss\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([117,110,115,104,97,114,101,100,32,115,116,97,99,107,32,115,105,122,101,0] /* unshared stack size\ */, "i8", ALLOC_NORMAL);
__str12=allocate([114,117,95,109,105,110,102,108,116,0] /* ru_minflt\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([112,97,103,101,32,102,97,117,108,116,115,32,110,111,116,32,114,101,113,117,105,114,105,110,103,32,73,47,79,0] /* page faults not requ */, "i8", ALLOC_NORMAL);
__str14=allocate([114,117,95,109,97,106,102,108,116,0] /* ru_majflt\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([112,97,103,101,32,102,97,117,108,116,115,32,114,101,113,117,105,114,105,110,103,32,73,47,79,0] /* page faults requirin */, "i8", ALLOC_NORMAL);
__str16=allocate([114,117,95,110,115,119,97,112,0] /* ru_nswap\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([110,117,109,98,101,114,32,111,102,32,115,119,97,112,32,111,117,116,115,0] /* number of swap outs\ */, "i8", ALLOC_NORMAL);
__str18=allocate([114,117,95,105,110,98,108,111,99,107,0] /* ru_inblock\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([98,108,111,99,107,32,105,110,112,117,116,32,111,112,101,114,97,116,105,111,110,115,0] /* block input operatio */, "i8", ALLOC_NORMAL);
__str20=allocate([114,117,95,111,117,98,108,111,99,107,0] /* ru_oublock\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([98,108,111,99,107,32,111,117,116,112,117,116,32,111,112,101,114,97,116,105,111,110,115,0] /* block output operati */, "i8", ALLOC_NORMAL);
__str22=allocate([114,117,95,109,115,103,115,110,100,0] /* ru_msgsnd\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([73,80,67,32,109,101,115,115,97,103,101,115,32,115,101,110,116,0] /* IPC messages sent\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([114,117,95,109,115,103,114,99,118,0] /* ru_msgrcv\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([73,80,67,32,109,101,115,115,97,103,101,115,32,114,101,99,101,105,118,101,100,0] /* IPC messages receive */, "i8", ALLOC_NORMAL);
__str26=allocate([114,117,95,110,115,105,103,110,97,108,115,0] /* ru_nsignals\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([115,105,103,110,97,108,115,32,114,101,99,101,105,118,101,100,0] /* signals received\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([114,117,95,110,118,99,115,119,0] /* ru_nvcsw\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([118,111,108,117,110,116,97,114,121,32,99,111,110,116,101,120,116,32,115,119,105,116,99,104,101,115,0] /* voluntary context sw */, "i8", ALLOC_NORMAL);
__str30=allocate([114,117,95,110,105,118,99,115,119,0] /* ru_nivcsw\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([105,110,118,111,108,117,110,116,97,114,121,32,99,111,110,116,101,120,116,32,115,119,105,116,99,104,101,115,0] /* involuntary context  */, "i8", ALLOC_NORMAL);
_struct_rusage_fields=allocate(136, ["i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8"], ALLOC_NORMAL);
_struct_rusage_desc=allocate([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0], ["i8*",0,0,0,"i8*",0,0,0,"%struct.PyStructSequence_Field*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str32=allocate([114,101,115,111,117,114,99,101,46,115,116,114,117,99,116,95,114,117,115,97,103,101,0] /* resource.struct_rusa */, "i8", ALLOC_NORMAL);
__str33=allocate([105,58,103,101,116,114,117,115,97,103,101,0] /* i:getrusage\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([105,110,118,97,108,105,100,32,119,104,111,32,112,97,114,97,109,101,116,101,114,0] /* invalid who paramete */, "i8", ALLOC_NORMAL);
_ResourceError=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_StructRUsageType=allocate(196, ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str35=allocate([105,58,103,101,116,114,108,105,109,105,116,0] /* i:getrlimit\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([105,110,118,97,108,105,100,32,114,101,115,111,117,114,99,101,32,115,112,101,99,105,102,105,101,100,0] /* invalid resource spe */, "i8", ALLOC_NORMAL);
__str37=allocate([76,76,0] /* LL\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([105,40,79,79,41,58,115,101,116,114,108,105,109,105,116,0] /* i(OO):setrlimit\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([99,117,114,114,101,110,116,32,108,105,109,105,116,32,101,120,99,101,101,100,115,32,109,97,120,105,109,117,109,32,108,105,109,105,116,0] /* current limit exceed */, "i8", ALLOC_NORMAL);
__str40=allocate([110,111,116,32,97,108,108,111,119,101,100,32,116,111,32,114,97,105,115,101,32,109,97,120,105,109,117,109,32,108,105,109,105,116,0] /* not allowed to raise */, "i8", ALLOC_NORMAL);
__str41=allocate([105,0] /* i\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([103,101,116,114,117,115,97,103,101,0] /* getrusage\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([103,101,116,114,108,105,109,105,116,0] /* getrlimit\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([115,101,116,114,108,105,109,105,116,0] /* setrlimit\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([103,101,116,112,97,103,101,115,105,122,101,0] /* getpagesize\00 */, "i8", ALLOC_NORMAL);
_resource_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str46=allocate([114,101,115,111,117,114,99,101,0] /* resource\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([114,101,115,111,117,114,99,101,46,101,114,114,111,114,0] /* resource.error\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([101,114,114,111,114,0] /* error\00 */, "i8", ALLOC_NORMAL);
_initialized_b=allocate(1, "i1", ALLOC_NORMAL);
__str49=allocate([115,116,114,117,99,116,95,114,117,115,97,103,101,0] /* struct_rusage\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([82,76,73,77,73,84,95,67,80,85,0] /* RLIMIT_CPU\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([82,76,73,77,73,84,95,70,83,73,90,69,0] /* RLIMIT_FSIZE\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([82,76,73,77,73,84,95,68,65,84,65,0] /* RLIMIT_DATA\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([82,76,73,77,73,84,95,83,84,65,67,75,0] /* RLIMIT_STACK\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([82,76,73,77,73,84,95,67,79,82,69,0] /* RLIMIT_CORE\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([82,76,73,77,73,84,95,78,79,70,73,76,69,0] /* RLIMIT_NOFILE\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([82,76,73,77,73,84,95,79,70,73,76,69,0] /* RLIMIT_OFILE\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([82,76,73,77,73,84,95,65,83,0] /* RLIMIT_AS\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([82,76,73,77,73,84,95,82,83,83,0] /* RLIMIT_RSS\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([82,76,73,77,73,84,95,78,80,82,79,67,0] /* RLIMIT_NPROC\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([82,76,73,77,73,84,95,77,69,77,76,79,67,75,0] /* RLIMIT_MEMLOCK\00 */, "i8", ALLOC_NORMAL);
__str61=allocate([82,85,83,65,71,69,95,83,69,76,70,0] /* RUSAGE_SELF\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([82,85,83,65,71,69,95,67,72,73,76,68,82,69,78,0] /* RUSAGE_CHILDREN\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([82,76,73,77,95,73,78,70,73,78,73,84,89,0] /* RLIM_INFINITY\00 */, "i8", ALLOC_NORMAL);
HEAP[_struct_rusage_fields]=__str;
HEAP[_struct_rusage_fields+4]=__str1;
HEAP[_struct_rusage_fields+8]=__str2;
HEAP[_struct_rusage_fields+12]=__str3;
HEAP[_struct_rusage_fields+16]=__str4;
HEAP[_struct_rusage_fields+20]=__str5;
HEAP[_struct_rusage_fields+24]=__str6;
HEAP[_struct_rusage_fields+28]=__str7;
HEAP[_struct_rusage_fields+32]=__str8;
HEAP[_struct_rusage_fields+36]=__str9;
HEAP[_struct_rusage_fields+40]=__str10;
HEAP[_struct_rusage_fields+44]=__str11;
HEAP[_struct_rusage_fields+48]=__str12;
HEAP[_struct_rusage_fields+52]=__str13;
HEAP[_struct_rusage_fields+56]=__str14;
HEAP[_struct_rusage_fields+60]=__str15;
HEAP[_struct_rusage_fields+64]=__str16;
HEAP[_struct_rusage_fields+68]=__str17;
HEAP[_struct_rusage_fields+72]=__str18;
HEAP[_struct_rusage_fields+76]=__str19;
HEAP[_struct_rusage_fields+80]=__str20;
HEAP[_struct_rusage_fields+84]=__str21;
HEAP[_struct_rusage_fields+88]=__str22;
HEAP[_struct_rusage_fields+92]=__str23;
HEAP[_struct_rusage_fields+96]=__str24;
HEAP[_struct_rusage_fields+100]=__str25;
HEAP[_struct_rusage_fields+104]=__str26;
HEAP[_struct_rusage_fields+108]=__str27;
HEAP[_struct_rusage_fields+112]=__str28;
HEAP[_struct_rusage_fields+116]=__str29;
HEAP[_struct_rusage_fields+120]=__str30;
HEAP[_struct_rusage_fields+124]=__str31;
HEAP[_struct_rusage_desc]=__str32;
HEAP[_struct_rusage_desc+4]=_struct_rusage__doc__;
HEAP[_struct_rusage_desc+8]=_struct_rusage_fields;
HEAP[_resource_methods]=__str42;
HEAP[_resource_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_resource_methods+16]=__str43;
HEAP[_resource_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_resource_methods+32]=__str44;
HEAP[_resource_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_resource_methods+48]=__str45;
HEAP[_resource_methods+52]=(FUNCTION_TABLE_OFFSET + 8);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

