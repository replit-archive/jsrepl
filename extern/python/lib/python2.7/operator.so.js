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



var $0___SIZE = 1776; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 196; // %2
  
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
  
var $struct_PyTupleObject___SIZE = 16; // %struct.PyTupleObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_attrgetterobject___SIZE = 16; // %struct.attrgetterobject
  
var $struct_methodcallerobject___SIZE = 20; // %struct.methodcallerobject
  
var _operator_doc;


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
var _operator_methods;
var __str213;
var __str214;
var __str215;
var __str216;
var ___PRETTY_FUNCTION___9242;
var __str217;
var _itemgetter_doc;
var __str218;
var _itemgetter_type;
var __str219;
var __str220;

var __str221;
var __str222;
var ___PRETTY_FUNCTION___9429;
var __str223;
var _attrgetter_doc;
var __str224;
var _attrgetter_type;
var __str225;
var __str226;
var _methodcaller_doc;
var __str227;
var _methodcaller_type;
var __str228;
















































































  function _op_isCallable($x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $retval;
        var $0;
        $x_addr=$x;
        var $1=HEAP[_Py_Py3kWarningFlag]; //@line 72 "operator.c"
        var $2=($1)!=0; //@line 72 "operator.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 72 "operator.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_DeprecationWarning]; //@line 72 "operator.c"
        var $4=_PyErr_WarnEx($3, __str, 1); //@line 72 "operator.c"
        var $5=($4) < 0; //@line 72 "operator.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 72 "operator.c"
      case 2: // $bb1
        $0=-1; //@line 74 "operator.c"
        __label__ = 4; break; //@line 74 "operator.c"
      case 3: // $bb2
        var $6=$x_addr; //@line 75 "operator.c"
        var $7=_PyCallable_Check($6); //@line 75 "operator.c"
        $0=$7; //@line 75 "operator.c"
        __label__ = 4; break; //@line 75 "operator.c"
      case 4: // $bb3
        var $8=$0; //@line 74 "operator.c"
        $retval=$8; //@line 74 "operator.c"
        var $retval4=$retval; //@line 74 "operator.c"
        ;
        return $retval4; //@line 74 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_sequenceIncludes($seq, $ob) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $seq_addr;
        var $ob_addr;
        var $retval;
        var $0;
        $seq_addr=$seq;
        $ob_addr=$ob;
        var $1=HEAP[_Py_Py3kWarningFlag]; //@line 81 "operator.c"
        var $2=($1)!=0; //@line 81 "operator.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 81 "operator.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_DeprecationWarning]; //@line 81 "operator.c"
        var $4=_PyErr_WarnEx($3, __str1, 1); //@line 81 "operator.c"
        var $5=($4) < 0; //@line 81 "operator.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 81 "operator.c"
      case 2: // $bb1
        $0=-1; //@line 83 "operator.c"
        __label__ = 4; break; //@line 83 "operator.c"
      case 3: // $bb2
        var $6=$seq_addr; //@line 84 "operator.c"
        var $7=$ob_addr; //@line 84 "operator.c"
        var $8=_PySequence_Contains($6, $7); //@line 84 "operator.c"
        $0=$8; //@line 84 "operator.c"
        __label__ = 4; break; //@line 84 "operator.c"
      case 4: // $bb3
        var $9=$0; //@line 83 "operator.c"
        $retval=$9; //@line 83 "operator.c"
        var $retval4=$retval; //@line 83 "operator.c"
        ;
        return $retval4; //@line 83 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _isCallable($s, $a1) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a1_addr;
        var $retval;
        var $0;
        var $r;
        $s_addr=$s;
        $a1_addr=$a1;
        var $1=$a1_addr; //@line 87 "operator.c"
        var $2=_op_isCallable($1); //@line 87 "operator.c"
        $r=$2; //@line 87 "operator.c"
        var $3=$r; //@line 87 "operator.c"
        var $4=($3)==-1; //@line 87 "operator.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 87 "operator.c"
      case 1: // $bb
        $0=0; //@line 87 "operator.c"
        __label__ = 3; break; //@line 87 "operator.c"
      case 2: // $bb1
        var $5=$r; //@line 87 "operator.c"
        var $6=_PyBool_FromLong($5); //@line 87 "operator.c"
        $0=$6; //@line 87 "operator.c"
        __label__ = 3; break; //@line 87 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 87 "operator.c"
        $retval=$7; //@line 87 "operator.c"
        var $retval3=$retval; //@line 87 "operator.c"
        ;
        return $retval3; //@line 87 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _isNumberType($s, $a1) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a1_addr;
        var $retval;
        var $0;
        var $r;
        $s_addr=$s;
        $a1_addr=$a1;
        var $1=$a1_addr; //@line 88 "operator.c"
        var $2=_PyNumber_Check($1); //@line 88 "operator.c"
        $r=$2; //@line 88 "operator.c"
        var $3=$r; //@line 88 "operator.c"
        var $4=($3)==-1; //@line 88 "operator.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 88 "operator.c"
      case 1: // $bb
        $0=0; //@line 88 "operator.c"
        __label__ = 3; break; //@line 88 "operator.c"
      case 2: // $bb1
        var $5=$r; //@line 88 "operator.c"
        var $6=_PyBool_FromLong($5); //@line 88 "operator.c"
        $0=$6; //@line 88 "operator.c"
        __label__ = 3; break; //@line 88 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 88 "operator.c"
        $retval=$7; //@line 88 "operator.c"
        var $retval3=$retval; //@line 88 "operator.c"
        ;
        return $retval3; //@line 88 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _truth($s, $a1) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a1_addr;
        var $retval;
        var $0;
        var $r;
        $s_addr=$s;
        $a1_addr=$a1;
        var $1=$a1_addr; //@line 89 "operator.c"
        var $2=_PyObject_IsTrue($1); //@line 89 "operator.c"
        $r=$2; //@line 89 "operator.c"
        var $3=$r; //@line 89 "operator.c"
        var $4=($3)==-1; //@line 89 "operator.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 89 "operator.c"
      case 1: // $bb
        $0=0; //@line 89 "operator.c"
        __label__ = 3; break; //@line 89 "operator.c"
      case 2: // $bb1
        var $5=$r; //@line 89 "operator.c"
        var $6=_PyBool_FromLong($5); //@line 89 "operator.c"
        $0=$6; //@line 89 "operator.c"
        __label__ = 3; break; //@line 89 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 89 "operator.c"
        $retval=$7; //@line 89 "operator.c"
        var $retval3=$retval; //@line 89 "operator.c"
        ;
        return $retval3; //@line 89 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_add($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 90 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str2, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 90 "operator.c"
        var $3=($2)==0; //@line 90 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 90 "operator.c"
      case 1: // $bb
        $0=0; //@line 90 "operator.c"
        __label__ = 3; break; //@line 90 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 90 "operator.c"
        var $5=HEAP[$a1]; //@line 90 "operator.c"
        var $6=_PyNumber_Add($5, $4); //@line 90 "operator.c"
        $0=$6; //@line 90 "operator.c"
        __label__ = 3; break; //@line 90 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 90 "operator.c"
        $retval=$7; //@line 90 "operator.c"
        var $retval3=$retval; //@line 90 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 90 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_sub($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 91 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str3, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 91 "operator.c"
        var $3=($2)==0; //@line 91 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 91 "operator.c"
      case 1: // $bb
        $0=0; //@line 91 "operator.c"
        __label__ = 3; break; //@line 91 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 91 "operator.c"
        var $5=HEAP[$a1]; //@line 91 "operator.c"
        var $6=_PyNumber_Subtract($5, $4); //@line 91 "operator.c"
        $0=$6; //@line 91 "operator.c"
        __label__ = 3; break; //@line 91 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 91 "operator.c"
        $retval=$7; //@line 91 "operator.c"
        var $retval3=$retval; //@line 91 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 91 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_mul($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 92 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str4, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 92 "operator.c"
        var $3=($2)==0; //@line 92 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 92 "operator.c"
      case 1: // $bb
        $0=0; //@line 92 "operator.c"
        __label__ = 3; break; //@line 92 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 92 "operator.c"
        var $5=HEAP[$a1]; //@line 92 "operator.c"
        var $6=_PyNumber_Multiply($5, $4); //@line 92 "operator.c"
        $0=$6; //@line 92 "operator.c"
        __label__ = 3; break; //@line 92 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 92 "operator.c"
        $retval=$7; //@line 92 "operator.c"
        var $retval3=$retval; //@line 92 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 92 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_div($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 93 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str5, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 93 "operator.c"
        var $3=($2)==0; //@line 93 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 93 "operator.c"
      case 1: // $bb
        $0=0; //@line 93 "operator.c"
        __label__ = 3; break; //@line 93 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 93 "operator.c"
        var $5=HEAP[$a1]; //@line 93 "operator.c"
        var $6=_PyNumber_Divide($5, $4); //@line 93 "operator.c"
        $0=$6; //@line 93 "operator.c"
        __label__ = 3; break; //@line 93 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 93 "operator.c"
        $retval=$7; //@line 93 "operator.c"
        var $retval3=$retval; //@line 93 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 93 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_floordiv($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 94 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str6, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 94 "operator.c"
        var $3=($2)==0; //@line 94 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 94 "operator.c"
      case 1: // $bb
        $0=0; //@line 94 "operator.c"
        __label__ = 3; break; //@line 94 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 94 "operator.c"
        var $5=HEAP[$a1]; //@line 94 "operator.c"
        var $6=_PyNumber_FloorDivide($5, $4); //@line 94 "operator.c"
        $0=$6; //@line 94 "operator.c"
        __label__ = 3; break; //@line 94 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 94 "operator.c"
        $retval=$7; //@line 94 "operator.c"
        var $retval3=$retval; //@line 94 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 94 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_truediv($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 95 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str7, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 95 "operator.c"
        var $3=($2)==0; //@line 95 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 95 "operator.c"
      case 1: // $bb
        $0=0; //@line 95 "operator.c"
        __label__ = 3; break; //@line 95 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 95 "operator.c"
        var $5=HEAP[$a1]; //@line 95 "operator.c"
        var $6=_PyNumber_TrueDivide($5, $4); //@line 95 "operator.c"
        $0=$6; //@line 95 "operator.c"
        __label__ = 3; break; //@line 95 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 95 "operator.c"
        $retval=$7; //@line 95 "operator.c"
        var $retval3=$retval; //@line 95 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 95 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_mod($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 96 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str8, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 96 "operator.c"
        var $3=($2)==0; //@line 96 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 96 "operator.c"
      case 1: // $bb
        $0=0; //@line 96 "operator.c"
        __label__ = 3; break; //@line 96 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 96 "operator.c"
        var $5=HEAP[$a1]; //@line 96 "operator.c"
        var $6=_PyNumber_Remainder($5, $4); //@line 96 "operator.c"
        $0=$6; //@line 96 "operator.c"
        __label__ = 3; break; //@line 96 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 96 "operator.c"
        $retval=$7; //@line 96 "operator.c"
        var $retval3=$retval; //@line 96 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 96 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_neg($s, $a1) {
    ;
    var __label__;
  
    var $s_addr;
    var $a1_addr;
    var $retval;
    var $0;
    $s_addr=$s;
    $a1_addr=$a1;
    var $1=$a1_addr; //@line 97 "operator.c"
    var $2=_PyNumber_Negative($1); //@line 97 "operator.c"
    $0=$2; //@line 97 "operator.c"
    var $3=$0; //@line 97 "operator.c"
    $retval=$3; //@line 97 "operator.c"
    var $retval1=$retval; //@line 97 "operator.c"
    ;
    return $retval1; //@line 97 "operator.c"
  }
  

  function _op_pos($s, $a1) {
    ;
    var __label__;
  
    var $s_addr;
    var $a1_addr;
    var $retval;
    var $0;
    $s_addr=$s;
    $a1_addr=$a1;
    var $1=$a1_addr; //@line 98 "operator.c"
    var $2=_PyNumber_Positive($1); //@line 98 "operator.c"
    $0=$2; //@line 98 "operator.c"
    var $3=$0; //@line 98 "operator.c"
    $retval=$3; //@line 98 "operator.c"
    var $retval1=$retval; //@line 98 "operator.c"
    ;
    return $retval1; //@line 98 "operator.c"
  }
  

  function _op_abs($s, $a1) {
    ;
    var __label__;
  
    var $s_addr;
    var $a1_addr;
    var $retval;
    var $0;
    $s_addr=$s;
    $a1_addr=$a1;
    var $1=$a1_addr; //@line 99 "operator.c"
    var $2=_PyNumber_Absolute($1); //@line 99 "operator.c"
    $0=$2; //@line 99 "operator.c"
    var $3=$0; //@line 99 "operator.c"
    $retval=$3; //@line 99 "operator.c"
    var $retval1=$retval; //@line 99 "operator.c"
    ;
    return $retval1; //@line 99 "operator.c"
  }
  

  function _op_inv($s, $a1) {
    ;
    var __label__;
  
    var $s_addr;
    var $a1_addr;
    var $retval;
    var $0;
    $s_addr=$s;
    $a1_addr=$a1;
    var $1=$a1_addr; //@line 100 "operator.c"
    var $2=_PyNumber_Invert($1); //@line 100 "operator.c"
    $0=$2; //@line 100 "operator.c"
    var $3=$0; //@line 100 "operator.c"
    $retval=$3; //@line 100 "operator.c"
    var $retval1=$retval; //@line 100 "operator.c"
    ;
    return $retval1; //@line 100 "operator.c"
  }
  

  function _op_invert($s, $a1) {
    ;
    var __label__;
  
    var $s_addr;
    var $a1_addr;
    var $retval;
    var $0;
    $s_addr=$s;
    $a1_addr=$a1;
    var $1=$a1_addr; //@line 101 "operator.c"
    var $2=_PyNumber_Invert($1); //@line 101 "operator.c"
    $0=$2; //@line 101 "operator.c"
    var $3=$0; //@line 101 "operator.c"
    $retval=$3; //@line 101 "operator.c"
    var $retval1=$retval; //@line 101 "operator.c"
    ;
    return $retval1; //@line 101 "operator.c"
  }
  

  function _op_lshift($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 102 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str9, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 102 "operator.c"
        var $3=($2)==0; //@line 102 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 102 "operator.c"
      case 1: // $bb
        $0=0; //@line 102 "operator.c"
        __label__ = 3; break; //@line 102 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 102 "operator.c"
        var $5=HEAP[$a1]; //@line 102 "operator.c"
        var $6=_PyNumber_Lshift($5, $4); //@line 102 "operator.c"
        $0=$6; //@line 102 "operator.c"
        __label__ = 3; break; //@line 102 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 102 "operator.c"
        $retval=$7; //@line 102 "operator.c"
        var $retval3=$retval; //@line 102 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 102 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_rshift($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 103 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str10, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 103 "operator.c"
        var $3=($2)==0; //@line 103 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 103 "operator.c"
      case 1: // $bb
        $0=0; //@line 103 "operator.c"
        __label__ = 3; break; //@line 103 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 103 "operator.c"
        var $5=HEAP[$a1]; //@line 103 "operator.c"
        var $6=_PyNumber_Rshift($5, $4); //@line 103 "operator.c"
        $0=$6; //@line 103 "operator.c"
        __label__ = 3; break; //@line 103 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 103 "operator.c"
        $retval=$7; //@line 103 "operator.c"
        var $retval3=$retval; //@line 103 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 103 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_not_($s, $a1) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a1_addr;
        var $retval;
        var $0;
        var $r;
        $s_addr=$s;
        $a1_addr=$a1;
        var $1=$a1_addr; //@line 104 "operator.c"
        var $2=_PyObject_Not($1); //@line 104 "operator.c"
        $r=$2; //@line 104 "operator.c"
        var $3=$r; //@line 104 "operator.c"
        var $4=($3)==-1; //@line 104 "operator.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 104 "operator.c"
      case 1: // $bb
        $0=0; //@line 104 "operator.c"
        __label__ = 3; break; //@line 104 "operator.c"
      case 2: // $bb1
        var $5=$r; //@line 104 "operator.c"
        var $6=_PyBool_FromLong($5); //@line 104 "operator.c"
        $0=$6; //@line 104 "operator.c"
        __label__ = 3; break; //@line 104 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 104 "operator.c"
        $retval=$7; //@line 104 "operator.c"
        var $retval3=$retval; //@line 104 "operator.c"
        ;
        return $retval3; //@line 104 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_and_($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 105 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str11, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 105 "operator.c"
        var $3=($2)==0; //@line 105 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 105 "operator.c"
      case 1: // $bb
        $0=0; //@line 105 "operator.c"
        __label__ = 3; break; //@line 105 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 105 "operator.c"
        var $5=HEAP[$a1]; //@line 105 "operator.c"
        var $6=_PyNumber_And($5, $4); //@line 105 "operator.c"
        $0=$6; //@line 105 "operator.c"
        __label__ = 3; break; //@line 105 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 105 "operator.c"
        $retval=$7; //@line 105 "operator.c"
        var $retval3=$retval; //@line 105 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 105 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_xor($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 106 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str12, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 106 "operator.c"
        var $3=($2)==0; //@line 106 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 106 "operator.c"
      case 1: // $bb
        $0=0; //@line 106 "operator.c"
        __label__ = 3; break; //@line 106 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 106 "operator.c"
        var $5=HEAP[$a1]; //@line 106 "operator.c"
        var $6=_PyNumber_Xor($5, $4); //@line 106 "operator.c"
        $0=$6; //@line 106 "operator.c"
        __label__ = 3; break; //@line 106 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 106 "operator.c"
        $retval=$7; //@line 106 "operator.c"
        var $retval3=$retval; //@line 106 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 106 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_or_($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 107 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str13, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 107 "operator.c"
        var $3=($2)==0; //@line 107 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 107 "operator.c"
      case 1: // $bb
        $0=0; //@line 107 "operator.c"
        __label__ = 3; break; //@line 107 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 107 "operator.c"
        var $5=HEAP[$a1]; //@line 107 "operator.c"
        var $6=_PyNumber_Or($5, $4); //@line 107 "operator.c"
        $0=$6; //@line 107 "operator.c"
        __label__ = 3; break; //@line 107 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 107 "operator.c"
        $retval=$7; //@line 107 "operator.c"
        var $retval3=$retval; //@line 107 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 107 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_iadd($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 108 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str14, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 108 "operator.c"
        var $3=($2)==0; //@line 108 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 108 "operator.c"
      case 1: // $bb
        $0=0; //@line 108 "operator.c"
        __label__ = 3; break; //@line 108 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 108 "operator.c"
        var $5=HEAP[$a1]; //@line 108 "operator.c"
        var $6=_PyNumber_InPlaceAdd($5, $4); //@line 108 "operator.c"
        $0=$6; //@line 108 "operator.c"
        __label__ = 3; break; //@line 108 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 108 "operator.c"
        $retval=$7; //@line 108 "operator.c"
        var $retval3=$retval; //@line 108 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 108 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_isub($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 109 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str15, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 109 "operator.c"
        var $3=($2)==0; //@line 109 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 109 "operator.c"
      case 1: // $bb
        $0=0; //@line 109 "operator.c"
        __label__ = 3; break; //@line 109 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 109 "operator.c"
        var $5=HEAP[$a1]; //@line 109 "operator.c"
        var $6=_PyNumber_InPlaceSubtract($5, $4); //@line 109 "operator.c"
        $0=$6; //@line 109 "operator.c"
        __label__ = 3; break; //@line 109 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 109 "operator.c"
        $retval=$7; //@line 109 "operator.c"
        var $retval3=$retval; //@line 109 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 109 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_imul($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 110 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str16, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 110 "operator.c"
        var $3=($2)==0; //@line 110 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 110 "operator.c"
      case 1: // $bb
        $0=0; //@line 110 "operator.c"
        __label__ = 3; break; //@line 110 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 110 "operator.c"
        var $5=HEAP[$a1]; //@line 110 "operator.c"
        var $6=_PyNumber_InPlaceMultiply($5, $4); //@line 110 "operator.c"
        $0=$6; //@line 110 "operator.c"
        __label__ = 3; break; //@line 110 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 110 "operator.c"
        $retval=$7; //@line 110 "operator.c"
        var $retval3=$retval; //@line 110 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 110 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_idiv($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 111 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str17, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 111 "operator.c"
        var $3=($2)==0; //@line 111 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 111 "operator.c"
      case 1: // $bb
        $0=0; //@line 111 "operator.c"
        __label__ = 3; break; //@line 111 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 111 "operator.c"
        var $5=HEAP[$a1]; //@line 111 "operator.c"
        var $6=_PyNumber_InPlaceDivide($5, $4); //@line 111 "operator.c"
        $0=$6; //@line 111 "operator.c"
        __label__ = 3; break; //@line 111 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 111 "operator.c"
        $retval=$7; //@line 111 "operator.c"
        var $retval3=$retval; //@line 111 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 111 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_ifloordiv($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 112 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str18, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 112 "operator.c"
        var $3=($2)==0; //@line 112 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 112 "operator.c"
      case 1: // $bb
        $0=0; //@line 112 "operator.c"
        __label__ = 3; break; //@line 112 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 112 "operator.c"
        var $5=HEAP[$a1]; //@line 112 "operator.c"
        var $6=_PyNumber_InPlaceFloorDivide($5, $4); //@line 112 "operator.c"
        $0=$6; //@line 112 "operator.c"
        __label__ = 3; break; //@line 112 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 112 "operator.c"
        $retval=$7; //@line 112 "operator.c"
        var $retval3=$retval; //@line 112 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 112 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_itruediv($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 113 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str19, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 113 "operator.c"
        var $3=($2)==0; //@line 113 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 113 "operator.c"
      case 1: // $bb
        $0=0; //@line 113 "operator.c"
        __label__ = 3; break; //@line 113 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 113 "operator.c"
        var $5=HEAP[$a1]; //@line 113 "operator.c"
        var $6=_PyNumber_InPlaceTrueDivide($5, $4); //@line 113 "operator.c"
        $0=$6; //@line 113 "operator.c"
        __label__ = 3; break; //@line 113 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 113 "operator.c"
        $retval=$7; //@line 113 "operator.c"
        var $retval3=$retval; //@line 113 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 113 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_imod($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 114 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str20, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 114 "operator.c"
        var $3=($2)==0; //@line 114 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 114 "operator.c"
      case 1: // $bb
        $0=0; //@line 114 "operator.c"
        __label__ = 3; break; //@line 114 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 114 "operator.c"
        var $5=HEAP[$a1]; //@line 114 "operator.c"
        var $6=_PyNumber_InPlaceRemainder($5, $4); //@line 114 "operator.c"
        $0=$6; //@line 114 "operator.c"
        __label__ = 3; break; //@line 114 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 114 "operator.c"
        $retval=$7; //@line 114 "operator.c"
        var $retval3=$retval; //@line 114 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 114 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_ilshift($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 115 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str21, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 115 "operator.c"
        var $3=($2)==0; //@line 115 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 115 "operator.c"
      case 1: // $bb
        $0=0; //@line 115 "operator.c"
        __label__ = 3; break; //@line 115 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 115 "operator.c"
        var $5=HEAP[$a1]; //@line 115 "operator.c"
        var $6=_PyNumber_InPlaceLshift($5, $4); //@line 115 "operator.c"
        $0=$6; //@line 115 "operator.c"
        __label__ = 3; break; //@line 115 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 115 "operator.c"
        $retval=$7; //@line 115 "operator.c"
        var $retval3=$retval; //@line 115 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 115 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_irshift($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 116 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str22, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 116 "operator.c"
        var $3=($2)==0; //@line 116 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 116 "operator.c"
      case 1: // $bb
        $0=0; //@line 116 "operator.c"
        __label__ = 3; break; //@line 116 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 116 "operator.c"
        var $5=HEAP[$a1]; //@line 116 "operator.c"
        var $6=_PyNumber_InPlaceRshift($5, $4); //@line 116 "operator.c"
        $0=$6; //@line 116 "operator.c"
        __label__ = 3; break; //@line 116 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 116 "operator.c"
        $retval=$7; //@line 116 "operator.c"
        var $retval3=$retval; //@line 116 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 116 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_iand($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 117 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str23, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 117 "operator.c"
        var $3=($2)==0; //@line 117 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 117 "operator.c"
      case 1: // $bb
        $0=0; //@line 117 "operator.c"
        __label__ = 3; break; //@line 117 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 117 "operator.c"
        var $5=HEAP[$a1]; //@line 117 "operator.c"
        var $6=_PyNumber_InPlaceAnd($5, $4); //@line 117 "operator.c"
        $0=$6; //@line 117 "operator.c"
        __label__ = 3; break; //@line 117 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 117 "operator.c"
        $retval=$7; //@line 117 "operator.c"
        var $retval3=$retval; //@line 117 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 117 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_ixor($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 118 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str24, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 118 "operator.c"
        var $3=($2)==0; //@line 118 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 118 "operator.c"
      case 1: // $bb
        $0=0; //@line 118 "operator.c"
        __label__ = 3; break; //@line 118 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 118 "operator.c"
        var $5=HEAP[$a1]; //@line 118 "operator.c"
        var $6=_PyNumber_InPlaceXor($5, $4); //@line 118 "operator.c"
        $0=$6; //@line 118 "operator.c"
        __label__ = 3; break; //@line 118 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 118 "operator.c"
        $retval=$7; //@line 118 "operator.c"
        var $retval3=$retval; //@line 118 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 118 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_ior($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 119 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str25, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 119 "operator.c"
        var $3=($2)==0; //@line 119 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 119 "operator.c"
      case 1: // $bb
        $0=0; //@line 119 "operator.c"
        __label__ = 3; break; //@line 119 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 119 "operator.c"
        var $5=HEAP[$a1]; //@line 119 "operator.c"
        var $6=_PyNumber_InPlaceOr($5, $4); //@line 119 "operator.c"
        $0=$6; //@line 119 "operator.c"
        __label__ = 3; break; //@line 119 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 119 "operator.c"
        $retval=$7; //@line 119 "operator.c"
        var $retval3=$retval; //@line 119 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 119 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _isSequenceType($s, $a1) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a1_addr;
        var $retval;
        var $0;
        var $r;
        $s_addr=$s;
        $a1_addr=$a1;
        var $1=$a1_addr; //@line 120 "operator.c"
        var $2=_PySequence_Check($1); //@line 120 "operator.c"
        $r=$2; //@line 120 "operator.c"
        var $3=$r; //@line 120 "operator.c"
        var $4=($3)==-1; //@line 120 "operator.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 120 "operator.c"
      case 1: // $bb
        $0=0; //@line 120 "operator.c"
        __label__ = 3; break; //@line 120 "operator.c"
      case 2: // $bb1
        var $5=$r; //@line 120 "operator.c"
        var $6=_PyBool_FromLong($5); //@line 120 "operator.c"
        $0=$6; //@line 120 "operator.c"
        __label__ = 3; break; //@line 120 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 120 "operator.c"
        $retval=$7; //@line 120 "operator.c"
        var $retval3=$retval; //@line 120 "operator.c"
        ;
        return $retval3; //@line 120 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_concat($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 121 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str26, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 121 "operator.c"
        var $3=($2)==0; //@line 121 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 121 "operator.c"
      case 1: // $bb
        $0=0; //@line 121 "operator.c"
        __label__ = 3; break; //@line 121 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 121 "operator.c"
        var $5=HEAP[$a1]; //@line 121 "operator.c"
        var $6=_PySequence_Concat($5, $4); //@line 121 "operator.c"
        $0=$6; //@line 121 "operator.c"
        __label__ = 3; break; //@line 121 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 121 "operator.c"
        $retval=$7; //@line 121 "operator.c"
        var $retval3=$retval; //@line 121 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 121 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_repeat($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 122 "operator.c"
        var $2=_PyArg_ParseTuple($1, __str27, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 122 "operator.c"
        var $3=($2)==0; //@line 122 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 122 "operator.c"
      case 1: // $bb
        $0=0; //@line 122 "operator.c"
        __label__ = 3; break; //@line 122 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 122 "operator.c"
        var $5=HEAP[$a1]; //@line 122 "operator.c"
        var $6=_PySequence_Repeat($5, $4); //@line 122 "operator.c"
        $0=$6; //@line 122 "operator.c"
        __label__ = 3; break; //@line 122 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 122 "operator.c"
        $retval=$7; //@line 122 "operator.c"
        var $retval3=$retval; //@line 122 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 122 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_iconcat($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 123 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str28, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 123 "operator.c"
        var $3=($2)==0; //@line 123 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 123 "operator.c"
      case 1: // $bb
        $0=0; //@line 123 "operator.c"
        __label__ = 3; break; //@line 123 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 123 "operator.c"
        var $5=HEAP[$a1]; //@line 123 "operator.c"
        var $6=_PySequence_InPlaceConcat($5, $4); //@line 123 "operator.c"
        $0=$6; //@line 123 "operator.c"
        __label__ = 3; break; //@line 123 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 123 "operator.c"
        $retval=$7; //@line 123 "operator.c"
        var $retval3=$retval; //@line 123 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 123 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_irepeat($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 124 "operator.c"
        var $2=_PyArg_ParseTuple($1, __str29, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 124 "operator.c"
        var $3=($2)==0; //@line 124 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 124 "operator.c"
      case 1: // $bb
        $0=0; //@line 124 "operator.c"
        __label__ = 3; break; //@line 124 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 124 "operator.c"
        var $5=HEAP[$a1]; //@line 124 "operator.c"
        var $6=_PySequence_InPlaceRepeat($5, $4); //@line 124 "operator.c"
        $0=$6; //@line 124 "operator.c"
        __label__ = 3; break; //@line 124 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 124 "operator.c"
        $retval=$7; //@line 124 "operator.c"
        var $retval3=$retval; //@line 124 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 124 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_contains($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        var $r;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 125 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str30, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 125 "operator.c"
        var $3=($2)==0; //@line 125 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 125 "operator.c"
      case 1: // $bb
        $0=0; //@line 125 "operator.c"
        __label__ = 5; break; //@line 125 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 125 "operator.c"
        var $5=HEAP[$a1]; //@line 125 "operator.c"
        var $6=_PySequence_Contains($5, $4); //@line 125 "operator.c"
        $r=$6; //@line 125 "operator.c"
        var $7=$r; //@line 125 "operator.c"
        var $8=($7)==-1; //@line 125 "operator.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 125 "operator.c"
      case 3: // $bb2
        $0=0; //@line 125 "operator.c"
        __label__ = 5; break; //@line 125 "operator.c"
      case 4: // $bb3
        var $9=$r; //@line 125 "operator.c"
        var $10=_PyBool_FromLong($9); //@line 125 "operator.c"
        $0=$10; //@line 125 "operator.c"
        __label__ = 5; break; //@line 125 "operator.c"
      case 5: // $bb4
        var $11=$0; //@line 125 "operator.c"
        $retval=$11; //@line 125 "operator.c"
        var $retval5=$retval; //@line 125 "operator.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 125 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sequenceIncludes($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        var $r;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 126 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str31, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 126 "operator.c"
        var $3=($2)==0; //@line 126 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 126 "operator.c"
      case 1: // $bb
        $0=0; //@line 126 "operator.c"
        __label__ = 5; break; //@line 126 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 126 "operator.c"
        var $5=HEAP[$a1]; //@line 126 "operator.c"
        var $6=_op_sequenceIncludes($5, $4); //@line 126 "operator.c"
        $r=$6; //@line 126 "operator.c"
        var $7=$r; //@line 126 "operator.c"
        var $8=($7)==-1; //@line 126 "operator.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 126 "operator.c"
      case 3: // $bb2
        $0=0; //@line 126 "operator.c"
        __label__ = 5; break; //@line 126 "operator.c"
      case 4: // $bb3
        var $9=$r; //@line 126 "operator.c"
        var $10=_PyBool_FromLong($9); //@line 126 "operator.c"
        $0=$10; //@line 126 "operator.c"
        __label__ = 5; break; //@line 126 "operator.c"
      case 5: // $bb4
        var $11=$0; //@line 126 "operator.c"
        $retval=$11; //@line 126 "operator.c"
        var $retval5=$retval; //@line 126 "operator.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 126 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _indexOf($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        var $r;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 127 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str32, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 127 "operator.c"
        var $3=($2)==0; //@line 127 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 127 "operator.c"
      case 1: // $bb
        $0=0; //@line 127 "operator.c"
        __label__ = 5; break; //@line 127 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 127 "operator.c"
        var $5=HEAP[$a1]; //@line 127 "operator.c"
        var $6=_PySequence_Index($5, $4); //@line 127 "operator.c"
        $r=$6; //@line 127 "operator.c"
        var $7=$r; //@line 127 "operator.c"
        var $8=($7)==-1; //@line 127 "operator.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 127 "operator.c"
      case 3: // $bb2
        $0=0; //@line 127 "operator.c"
        __label__ = 5; break; //@line 127 "operator.c"
      case 4: // $bb3
        var $9=$r; //@line 127 "operator.c"
        var $10=_PyInt_FromSsize_t($9); //@line 127 "operator.c"
        $0=$10; //@line 127 "operator.c"
        __label__ = 5; break; //@line 127 "operator.c"
      case 5: // $bb4
        var $11=$0; //@line 127 "operator.c"
        $retval=$11; //@line 127 "operator.c"
        var $retval5=$retval; //@line 127 "operator.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 127 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _countOf($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        var $r;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 128 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str33, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 128 "operator.c"
        var $3=($2)==0; //@line 128 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 128 "operator.c"
      case 1: // $bb
        $0=0; //@line 128 "operator.c"
        __label__ = 5; break; //@line 128 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 128 "operator.c"
        var $5=HEAP[$a1]; //@line 128 "operator.c"
        var $6=_PySequence_Count($5, $4); //@line 128 "operator.c"
        $r=$6; //@line 128 "operator.c"
        var $7=$r; //@line 128 "operator.c"
        var $8=($7)==-1; //@line 128 "operator.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 128 "operator.c"
      case 3: // $bb2
        $0=0; //@line 128 "operator.c"
        __label__ = 5; break; //@line 128 "operator.c"
      case 4: // $bb3
        var $9=$r; //@line 128 "operator.c"
        var $10=_PyInt_FromSsize_t($9); //@line 128 "operator.c"
        $0=$10; //@line 128 "operator.c"
        __label__ = 5; break; //@line 128 "operator.c"
      case 5: // $bb4
        var $11=$0; //@line 128 "operator.c"
        $retval=$11; //@line 128 "operator.c"
        var $retval5=$retval; //@line 128 "operator.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 128 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _isMappingType($s, $a1) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a1_addr;
        var $retval;
        var $0;
        var $r;
        $s_addr=$s;
        $a1_addr=$a1;
        var $1=$a1_addr; //@line 129 "operator.c"
        var $2=_PyMapping_Check($1); //@line 129 "operator.c"
        $r=$2; //@line 129 "operator.c"
        var $3=$r; //@line 129 "operator.c"
        var $4=($3)==-1; //@line 129 "operator.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 129 "operator.c"
      case 1: // $bb
        $0=0; //@line 129 "operator.c"
        __label__ = 3; break; //@line 129 "operator.c"
      case 2: // $bb1
        var $5=$r; //@line 129 "operator.c"
        var $6=_PyBool_FromLong($5); //@line 129 "operator.c"
        $0=$6; //@line 129 "operator.c"
        __label__ = 3; break; //@line 129 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 129 "operator.c"
        $retval=$7; //@line 129 "operator.c"
        var $retval3=$retval; //@line 129 "operator.c"
        ;
        return $retval3; //@line 129 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_getitem($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 130 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str34, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 130 "operator.c"
        var $3=($2)==0; //@line 130 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 130 "operator.c"
      case 1: // $bb
        $0=0; //@line 130 "operator.c"
        __label__ = 3; break; //@line 130 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 130 "operator.c"
        var $5=HEAP[$a1]; //@line 130 "operator.c"
        var $6=_PyObject_GetItem($5, $4); //@line 130 "operator.c"
        $0=$6; //@line 130 "operator.c"
        __label__ = 3; break; //@line 130 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 130 "operator.c"
        $retval=$7; //@line 130 "operator.c"
        var $retval3=$retval; //@line 130 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 130 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_delitem($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 131 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str35, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 131 "operator.c"
        var $3=($2)==0; //@line 131 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 131 "operator.c"
      case 1: // $bb
        $0=0; //@line 131 "operator.c"
        __label__ = 5; break; //@line 131 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 131 "operator.c"
        var $5=HEAP[$a1]; //@line 131 "operator.c"
        var $6=_PyObject_DelItem($5, $4); //@line 131 "operator.c"
        var $7=($6)==-1; //@line 131 "operator.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 131 "operator.c"
      case 3: // $bb2
        $0=0; //@line 131 "operator.c"
        __label__ = 5; break; //@line 131 "operator.c"
      case 4: // $bb3
        var $8=HEAP[__Py_NoneStruct]; //@line 131 "operator.c"
        var $9=($8) + 1; //@line 131 "operator.c"
        HEAP[__Py_NoneStruct]=$9; //@line 131 "operator.c"
        $0=__Py_NoneStruct; //@line 131 "operator.c"
        __label__ = 5; break; //@line 131 "operator.c"
      case 5: // $bb4
        var $10=$0; //@line 131 "operator.c"
        $retval=$10; //@line 131 "operator.c"
        var $retval5=$retval; //@line 131 "operator.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 131 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_setitem($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        var $a3=__stackBase__+8;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 132 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str36, 3, 3, allocate([$a1,0,0,0,$a2,0,0,0,$a3,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 132 "operator.c"
        var $3=($2)==0; //@line 132 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 132 "operator.c"
      case 1: // $bb
        $0=0; //@line 132 "operator.c"
        __label__ = 5; break; //@line 132 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a3]; //@line 132 "operator.c"
        var $5=HEAP[$a2]; //@line 132 "operator.c"
        var $6=HEAP[$a1]; //@line 132 "operator.c"
        var $7=_PyObject_SetItem($6, $5, $4); //@line 132 "operator.c"
        var $8=($7)==-1; //@line 132 "operator.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 132 "operator.c"
      case 3: // $bb2
        $0=0; //@line 132 "operator.c"
        __label__ = 5; break; //@line 132 "operator.c"
      case 4: // $bb3
        var $9=HEAP[__Py_NoneStruct]; //@line 132 "operator.c"
        var $10=($9) + 1; //@line 132 "operator.c"
        HEAP[__Py_NoneStruct]=$10; //@line 132 "operator.c"
        $0=__Py_NoneStruct; //@line 132 "operator.c"
        __label__ = 5; break; //@line 132 "operator.c"
      case 5: // $bb4
        var $11=$0; //@line 132 "operator.c"
        $retval=$11; //@line 132 "operator.c"
        var $retval5=$retval; //@line 132 "operator.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 132 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_lt($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 133 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str37, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 133 "operator.c"
        var $3=($2)==0; //@line 133 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 133 "operator.c"
      case 1: // $bb
        $0=0; //@line 133 "operator.c"
        __label__ = 3; break; //@line 133 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 133 "operator.c"
        var $5=HEAP[$a1]; //@line 133 "operator.c"
        var $6=_PyObject_RichCompare($5, $4, 0); //@line 133 "operator.c"
        $0=$6; //@line 133 "operator.c"
        __label__ = 3; break; //@line 133 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 133 "operator.c"
        $retval=$7; //@line 133 "operator.c"
        var $retval3=$retval; //@line 133 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 133 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_le($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 134 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str38, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 134 "operator.c"
        var $3=($2)==0; //@line 134 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 134 "operator.c"
      case 1: // $bb
        $0=0; //@line 134 "operator.c"
        __label__ = 3; break; //@line 134 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 134 "operator.c"
        var $5=HEAP[$a1]; //@line 134 "operator.c"
        var $6=_PyObject_RichCompare($5, $4, 1); //@line 134 "operator.c"
        $0=$6; //@line 134 "operator.c"
        __label__ = 3; break; //@line 134 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 134 "operator.c"
        $retval=$7; //@line 134 "operator.c"
        var $retval3=$retval; //@line 134 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 134 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_eq($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 135 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str39, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 135 "operator.c"
        var $3=($2)==0; //@line 135 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 135 "operator.c"
      case 1: // $bb
        $0=0; //@line 135 "operator.c"
        __label__ = 3; break; //@line 135 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 135 "operator.c"
        var $5=HEAP[$a1]; //@line 135 "operator.c"
        var $6=_PyObject_RichCompare($5, $4, 2); //@line 135 "operator.c"
        $0=$6; //@line 135 "operator.c"
        __label__ = 3; break; //@line 135 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 135 "operator.c"
        $retval=$7; //@line 135 "operator.c"
        var $retval3=$retval; //@line 135 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 135 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_ne($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 136 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str40, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 136 "operator.c"
        var $3=($2)==0; //@line 136 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 136 "operator.c"
      case 1: // $bb
        $0=0; //@line 136 "operator.c"
        __label__ = 3; break; //@line 136 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 136 "operator.c"
        var $5=HEAP[$a1]; //@line 136 "operator.c"
        var $6=_PyObject_RichCompare($5, $4, 3); //@line 136 "operator.c"
        $0=$6; //@line 136 "operator.c"
        __label__ = 3; break; //@line 136 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 136 "operator.c"
        $retval=$7; //@line 136 "operator.c"
        var $retval3=$retval; //@line 136 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 136 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_gt($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 137 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str41, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 137 "operator.c"
        var $3=($2)==0; //@line 137 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 137 "operator.c"
      case 1: // $bb
        $0=0; //@line 137 "operator.c"
        __label__ = 3; break; //@line 137 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 137 "operator.c"
        var $5=HEAP[$a1]; //@line 137 "operator.c"
        var $6=_PyObject_RichCompare($5, $4, 4); //@line 137 "operator.c"
        $0=$6; //@line 137 "operator.c"
        __label__ = 3; break; //@line 137 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 137 "operator.c"
        $retval=$7; //@line 137 "operator.c"
        var $retval3=$retval; //@line 137 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 137 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_ge($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 138 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str42, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 138 "operator.c"
        var $3=($2)==0; //@line 138 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 138 "operator.c"
      case 1: // $bb
        $0=0; //@line 138 "operator.c"
        __label__ = 3; break; //@line 138 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a2]; //@line 138 "operator.c"
        var $5=HEAP[$a1]; //@line 138 "operator.c"
        var $6=_PyObject_RichCompare($5, $4, 5); //@line 138 "operator.c"
        $0=$6; //@line 138 "operator.c"
        __label__ = 3; break; //@line 138 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 138 "operator.c"
        $retval=$7; //@line 138 "operator.c"
        var $retval3=$retval; //@line 138 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 138 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_pow($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 144 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str43, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 144 "operator.c"
        var $3=($2)!=0; //@line 144 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 144 "operator.c"
      case 1: // $bb
        var $4=HEAP[$a2]; //@line 145 "operator.c"
        var $5=HEAP[$a1]; //@line 145 "operator.c"
        var $6=_PyNumber_Power($5, $4, __Py_NoneStruct); //@line 145 "operator.c"
        $0=$6; //@line 145 "operator.c"
        __label__ = 3; break; //@line 145 "operator.c"
      case 2: // $bb1
        $0=0; //@line 146 "operator.c"
        __label__ = 3; break; //@line 146 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 145 "operator.c"
        $retval=$7; //@line 145 "operator.c"
        var $retval3=$retval; //@line 145 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 145 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_ipow($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 153 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str44, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 153 "operator.c"
        var $3=($2)!=0; //@line 153 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 153 "operator.c"
      case 1: // $bb
        var $4=HEAP[$a2]; //@line 154 "operator.c"
        var $5=HEAP[$a1]; //@line 154 "operator.c"
        var $6=_PyNumber_InPlacePower($5, $4, __Py_NoneStruct); //@line 154 "operator.c"
        $0=$6; //@line 154 "operator.c"
        __label__ = 3; break; //@line 154 "operator.c"
      case 2: // $bb1
        $0=0; //@line 155 "operator.c"
        __label__ = 3; break; //@line 155 "operator.c"
      case 3: // $bb2
        var $7=$0; //@line 154 "operator.c"
        $retval=$7; //@line 154 "operator.c"
        var $retval3=$retval; //@line 154 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 154 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_index($s, $a) {
    ;
    var __label__;
  
    var $s_addr;
    var $a_addr;
    var $retval;
    var $0;
    $s_addr=$s;
    $a_addr=$a;
    var $1=$a_addr; //@line 161 "operator.c"
    var $2=_PyNumber_Index($1); //@line 161 "operator.c"
    $0=$2; //@line 161 "operator.c"
    var $3=$0; //@line 161 "operator.c"
    $retval=$3; //@line 161 "operator.c"
    var $retval1=$retval; //@line 161 "operator.c"
    ;
    return $retval1; //@line 161 "operator.c"
  }
  

  function _is_($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $iftmp_91;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        var $result;
        $s_addr=$s;
        $a_addr=$a;
        $result=0; //@line 167 "operator.c"
        var $1=$a_addr; //@line 168 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str45, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 168 "operator.c"
        var $3=($2)!=0; //@line 168 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 168 "operator.c"
      case 1: // $bb
        var $4=HEAP[$a1]; //@line 169 "operator.c"
        var $5=HEAP[$a2]; //@line 169 "operator.c"
        var $6=($4)==($5); //@line 169 "operator.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 169 "operator.c"
      case 2: // $bb1
        $iftmp_91=__Py_TrueStruct; //@line 169 "operator.c"
        __label__ = 4; break; //@line 169 "operator.c"
      case 3: // $bb2
        $iftmp_91=__Py_ZeroStruct; //@line 169 "operator.c"
        __label__ = 4; break; //@line 169 "operator.c"
      case 4: // $bb3
        var $7=$iftmp_91; //@line 169 "operator.c"
        $result=$7; //@line 169 "operator.c"
        var $8=$result; //@line 170 "operator.c"
        var $9=$8; //@line 170 "operator.c"
        var $10=HEAP[$9]; //@line 170 "operator.c"
        var $11=($10) + 1; //@line 170 "operator.c"
        var $12=$result; //@line 170 "operator.c"
        var $13=$12; //@line 170 "operator.c"
        HEAP[$13]=$11; //@line 170 "operator.c"
        __label__ = 5; break; //@line 170 "operator.c"
      case 5: // $bb4
        var $14=$result; //@line 172 "operator.c"
        $0=$14; //@line 172 "operator.c"
        var $15=$0; //@line 172 "operator.c"
        $retval=$15; //@line 172 "operator.c"
        var $retval5=$retval; //@line 172 "operator.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 172 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _is_not($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $iftmp_94;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        var $result;
        $s_addr=$s;
        $a_addr=$a;
        $result=0; //@line 178 "operator.c"
        var $1=$a_addr; //@line 179 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str46, 2, 2, allocate([$a1,0,0,0,$a2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 179 "operator.c"
        var $3=($2)!=0; //@line 179 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 179 "operator.c"
      case 1: // $bb
        var $4=HEAP[$a1]; //@line 180 "operator.c"
        var $5=HEAP[$a2]; //@line 180 "operator.c"
        var $6=($4)!=($5); //@line 180 "operator.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 180 "operator.c"
      case 2: // $bb1
        $iftmp_94=__Py_TrueStruct; //@line 180 "operator.c"
        __label__ = 4; break; //@line 180 "operator.c"
      case 3: // $bb2
        $iftmp_94=__Py_ZeroStruct; //@line 180 "operator.c"
        __label__ = 4; break; //@line 180 "operator.c"
      case 4: // $bb3
        var $7=$iftmp_94; //@line 180 "operator.c"
        $result=$7; //@line 180 "operator.c"
        var $8=$result; //@line 181 "operator.c"
        var $9=$8; //@line 181 "operator.c"
        var $10=HEAP[$9]; //@line 181 "operator.c"
        var $11=($10) + 1; //@line 181 "operator.c"
        var $12=$result; //@line 181 "operator.c"
        var $13=$12; //@line 181 "operator.c"
        HEAP[$13]=$11; //@line 181 "operator.c"
        __label__ = 5; break; //@line 181 "operator.c"
      case 5: // $bb4
        var $14=$result; //@line 183 "operator.c"
        $0=$14; //@line 183 "operator.c"
        var $15=$0; //@line 183 "operator.c"
        $retval=$15; //@line 183 "operator.c"
        var $retval5=$retval; //@line 183 "operator.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 183 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_getslice($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        var $a3=__stackBase__+8;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 192 "operator.c"
        var $2=_PyArg_ParseTuple($1, __str47, allocate([$a1,0,0,0,$a2,0,0,0,$a3,0,0,0], ["%struct.PyObject**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 192 "operator.c"
        var $3=($2)==0; //@line 192 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 192 "operator.c"
      case 1: // $bb
        $0=0; //@line 193 "operator.c"
        __label__ = 3; break; //@line 193 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a3]; //@line 194 "operator.c"
        var $5=HEAP[$a2]; //@line 194 "operator.c"
        var $6=HEAP[$a1]; //@line 194 "operator.c"
        var $7=_PySequence_GetSlice($6, $5, $4); //@line 194 "operator.c"
        $0=$7; //@line 194 "operator.c"
        __label__ = 3; break; //@line 194 "operator.c"
      case 3: // $bb2
        var $8=$0; //@line 193 "operator.c"
        $retval=$8; //@line 193 "operator.c"
        var $retval3=$retval; //@line 193 "operator.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 193 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_setslice($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a4=__stackBase__+4;
        var $a2=__stackBase__+8;
        var $a3=__stackBase__+12;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 203 "operator.c"
        var $2=_PyArg_ParseTuple($1, __str48, allocate([$a1,0,0,0,$a2,0,0,0,$a3,0,0,0,$a4,0,0,0], ["%struct.PyObject**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 203 "operator.c"
        var $3=($2)==0; //@line 203 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 203 "operator.c"
      case 1: // $bb
        $0=0; //@line 204 "operator.c"
        __label__ = 5; break; //@line 204 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a4]; //@line 206 "operator.c"
        var $5=HEAP[$a3]; //@line 206 "operator.c"
        var $6=HEAP[$a2]; //@line 206 "operator.c"
        var $7=HEAP[$a1]; //@line 206 "operator.c"
        var $8=_PySequence_SetSlice($7, $6, $5, $4); //@line 206 "operator.c"
        var $9=($8)==-1; //@line 206 "operator.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 206 "operator.c"
      case 3: // $bb2
        $0=0; //@line 207 "operator.c"
        __label__ = 5; break; //@line 207 "operator.c"
      case 4: // $bb3
        var $10=HEAP[__Py_NoneStruct]; //@line 209 "operator.c"
        var $11=($10) + 1; //@line 209 "operator.c"
        HEAP[__Py_NoneStruct]=$11; //@line 209 "operator.c"
        $0=__Py_NoneStruct; //@line 209 "operator.c"
        __label__ = 5; break; //@line 209 "operator.c"
      case 5: // $bb4
        var $12=$0; //@line 204 "operator.c"
        $retval=$12; //@line 204 "operator.c"
        var $retval5=$retval; //@line 204 "operator.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 204 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _op_delslice($s, $a) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $a_addr;
        var $retval;
        var $0;
        var $a1=__stackBase__;
        var $a2=__stackBase__+4;
        var $a3=__stackBase__+8;
        $s_addr=$s;
        $a_addr=$a;
        var $1=$a_addr; //@line 218 "operator.c"
        var $2=_PyArg_ParseTuple($1, __str49, allocate([$a1,0,0,0,$a2,0,0,0,$a3,0,0,0], ["%struct.PyObject**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 218 "operator.c"
        var $3=($2)==0; //@line 218 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 218 "operator.c"
      case 1: // $bb
        $0=0; //@line 219 "operator.c"
        __label__ = 5; break; //@line 219 "operator.c"
      case 2: // $bb1
        var $4=HEAP[$a3]; //@line 221 "operator.c"
        var $5=HEAP[$a2]; //@line 221 "operator.c"
        var $6=HEAP[$a1]; //@line 221 "operator.c"
        var $7=_PySequence_DelSlice($6, $5, $4); //@line 221 "operator.c"
        var $8=($7)==-1; //@line 221 "operator.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 221 "operator.c"
      case 3: // $bb2
        $0=0; //@line 222 "operator.c"
        __label__ = 5; break; //@line 222 "operator.c"
      case 4: // $bb3
        var $9=HEAP[__Py_NoneStruct]; //@line 224 "operator.c"
        var $10=($9) + 1; //@line 224 "operator.c"
        HEAP[__Py_NoneStruct]=$10; //@line 224 "operator.c"
        $0=__Py_NoneStruct; //@line 224 "operator.c"
        __label__ = 5; break; //@line 224 "operator.c"
      case 5: // $bb4
        var $11=$0; //@line 219 "operator.c"
        $retval=$11; //@line 219 "operator.c"
        var $retval5=$retval; //@line 219 "operator.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 219 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _itemgetter_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $ig;
        var $item=__stackBase__;
        var $nitems;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$kwds_addr; //@line 342 "operator.c"
        var $2=__PyArg_NoKeywords(__str213, $1); //@line 342 "operator.c"
        var $3=($2)==0; //@line 342 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 342 "operator.c"
      case 1: // $bb
        $0=0; //@line 343 "operator.c"
        __label__ = 9; break; //@line 343 "operator.c"
      case 2: // $bb1
        var $4=$args_addr; //@line 345 "operator.c"
        var $5=$4; //@line 345 "operator.c"
        var $6=$5+8; //@line 345 "operator.c"
        var $7=HEAP[$6]; //@line 345 "operator.c"
        $nitems=$7; //@line 345 "operator.c"
        var $8=$nitems; //@line 346 "operator.c"
        var $9=($8) <= 1; //@line 346 "operator.c"
        var $10=$args_addr; //@line 347 "operator.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 346 "operator.c"
      case 3: // $bb2
        var $11=_PyArg_UnpackTuple($10, __str214, 1, 1, allocate([$item,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 347 "operator.c"
        var $12=($11)==0; //@line 347 "operator.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 347 "operator.c"
      case 4: // $bb3
        $0=0; //@line 348 "operator.c"
        __label__ = 9; break; //@line 348 "operator.c"
      case 5: // $bb5
        HEAP[$item]=$10; //@line 350 "operator.c"
        __label__ = 6; break; //@line 350 "operator.c"
      case 6: // $bb6
        var $13=__PyObject_GC_New(_itemgetter_type); //@line 353 "operator.c"
        var $14=$13; //@line 353 "operator.c"
        $ig=$14; //@line 353 "operator.c"
        var $15=($14)==0; //@line 354 "operator.c"
        if ($15) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 354 "operator.c"
      case 7: // $bb7
        $0=0; //@line 355 "operator.c"
        __label__ = 9; break; //@line 355 "operator.c"
      case 8: // $bb8
        var $16=HEAP[$item]; //@line 357 "operator.c"
        var $17=$16; //@line 357 "operator.c"
        var $18=HEAP[$17]; //@line 357 "operator.c"
        var $19=($18) + 1; //@line 357 "operator.c"
        var $20=$16; //@line 357 "operator.c"
        HEAP[$20]=$19; //@line 357 "operator.c"
        var $21=HEAP[$item]; //@line 358 "operator.c"
        var $22=$ig; //@line 358 "operator.c"
        var $23=$22+12; //@line 358 "operator.c"
        HEAP[$23]=$21; //@line 358 "operator.c"
        var $24=$ig; //@line 359 "operator.c"
        var $25=$24+8; //@line 359 "operator.c"
        var $26=$nitems; //@line 359 "operator.c"
        HEAP[$25]=$26; //@line 359 "operator.c"
        var $27=$ig; //@line 361 "operator.c"
        var $28=$27; //@line 361 "operator.c"
        _PyObject_GC_Track($28); //@line 361 "operator.c"
        var $29=$ig; //@line 362 "operator.c"
        var $30=$29; //@line 362 "operator.c"
        $0=$30; //@line 362 "operator.c"
        __label__ = 9; break; //@line 362 "operator.c"
      case 9: // $bb9
        var $31=$0; //@line 343 "operator.c"
        $retval=$31; //@line 343 "operator.c"
        var $retval10=$retval; //@line 343 "operator.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 343 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _itemgetter_dealloc($ig) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ig_addr;
        $ig_addr=$ig;
        var $0=$ig_addr; //@line 368 "operator.c"
        var $1=$0; //@line 368 "operator.c"
        _PyObject_GC_UnTrack($1); //@line 368 "operator.c"
        var $2=$ig_addr; //@line 369 "operator.c"
        var $3=$2+12; //@line 369 "operator.c"
        var $4=HEAP[$3]; //@line 369 "operator.c"
        var $5=($4)!=0; //@line 369 "operator.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 369 "operator.c"
      case 1: // $bb
        var $6=$ig_addr; //@line 369 "operator.c"
        var $7=$6+12; //@line 369 "operator.c"
        var $8=HEAP[$7]; //@line 369 "operator.c"
        var $9=$8; //@line 369 "operator.c"
        var $10=HEAP[$9]; //@line 369 "operator.c"
        var $11=($10) - 1; //@line 369 "operator.c"
        var $12=$8; //@line 369 "operator.c"
        HEAP[$12]=$11; //@line 369 "operator.c"
        var $13=$8; //@line 369 "operator.c"
        var $14=HEAP[$13]; //@line 369 "operator.c"
        var $15=($14)==0; //@line 369 "operator.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 369 "operator.c"
      case 2: // $bb1
        var $16=$ig_addr; //@line 369 "operator.c"
        var $17=$16+12; //@line 369 "operator.c"
        var $18=HEAP[$17]; //@line 369 "operator.c"
        var $19=$18+4; //@line 369 "operator.c"
        var $20=HEAP[$19]; //@line 369 "operator.c"
        var $21=$20+24; //@line 369 "operator.c"
        var $22=HEAP[$21]; //@line 369 "operator.c"
        var $23=$ig_addr; //@line 369 "operator.c"
        var $24=$23+12; //@line 369 "operator.c"
        var $25=HEAP[$24]; //@line 369 "operator.c"
        FUNCTION_TABLE[$22]($25); //@line 369 "operator.c"
        __label__ = 3; break; //@line 369 "operator.c"
      case 3: // $bb2
        var $26=$ig_addr; //@line 370 "operator.c"
        var $27=$26; //@line 370 "operator.c"
        _PyObject_GC_Del($27); //@line 370 "operator.c"
        ;
        return; //@line 371 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _itemgetter_traverse($ig, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ig_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        $ig_addr=$ig;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$ig_addr; //@line 376 "operator.c"
        var $2=$1+12; //@line 376 "operator.c"
        var $3=HEAP[$2]; //@line 376 "operator.c"
        var $4=($3)!=0; //@line 376 "operator.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 376 "operator.c"
      case 1: // $bb
        var $5=$ig_addr; //@line 376 "operator.c"
        var $6=$5+12; //@line 376 "operator.c"
        var $7=HEAP[$6]; //@line 376 "operator.c"
        var $8=$visit_addr; //@line 376 "operator.c"
        var $9=$arg_addr; //@line 376 "operator.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 376 "operator.c"
        $vret=$10; //@line 376 "operator.c"
        var $11=$vret; //@line 376 "operator.c"
        var $12=($11)!=0; //@line 376 "operator.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 376 "operator.c"
      case 2: // $bb1
        var $13=$vret; //@line 376 "operator.c"
        $0=$13; //@line 376 "operator.c"
        __label__ = 4; break; //@line 376 "operator.c"
      case 3: // $bb2
        $0=0; //@line 377 "operator.c"
        __label__ = 4; break; //@line 377 "operator.c"
      case 4: // $bb3
        var $14=$0; //@line 376 "operator.c"
        $retval=$14; //@line 376 "operator.c"
        var $retval4=$retval; //@line 376 "operator.c"
        ;
        return $retval4; //@line 376 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _itemgetter_call($ig, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ig_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $obj=__stackBase__;
        var $result;
        var $i;
        var $nitems;
        var $item;
        var $val;
        $ig_addr=$ig;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=$ig_addr; //@line 384 "operator.c"
        var $2=$1+8; //@line 384 "operator.c"
        var $3=HEAP[$2]; //@line 384 "operator.c"
        $nitems=$3; //@line 384 "operator.c"
        var $4=$args_addr; //@line 386 "operator.c"
        var $5=_PyArg_UnpackTuple($4, __str214, 1, 1, allocate([$obj,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 386 "operator.c"
        var $6=($5)==0; //@line 386 "operator.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 386 "operator.c"
      case 1: // $bb
        $0=0; //@line 387 "operator.c"
        __label__ = 18; break; //@line 387 "operator.c"
      case 2: // $bb1
        var $7=$nitems; //@line 388 "operator.c"
        var $8=($7)==1; //@line 388 "operator.c"
        var $9=$ig_addr; //@line 389 "operator.c"
        var $10=$9+12; //@line 389 "operator.c"
        var $11=HEAP[$10]; //@line 389 "operator.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 388 "operator.c"
      case 3: // $bb2
        var $12=HEAP[$obj]; //@line 389 "operator.c"
        var $13=_PyObject_GetItem($12, $11); //@line 389 "operator.c"
        $0=$13; //@line 389 "operator.c"
        __label__ = 18; break; //@line 389 "operator.c"
      case 4: // $bb3
        var $14=$11+4; //@line 391 "operator.c"
        var $15=HEAP[$14]; //@line 391 "operator.c"
        var $16=$15+84; //@line 391 "operator.c"
        var $17=HEAP[$16]; //@line 391 "operator.c"
        var $18=($17) & 67108864; //@line 391 "operator.c"
        var $19=($18)==0; //@line 391 "operator.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 391 "operator.c"
      case 5: // $bb4
        ___assert_fail(__str215, __str216, 391, ___PRETTY_FUNCTION___9242); //@line 391 "operator.c"
        throw "Reached an unreachable!" //@line 391 "operator.c"
      case 6: // $bb5
        var $20=$ig_addr; //@line 392 "operator.c"
        var $21=$20+12; //@line 392 "operator.c"
        var $22=HEAP[$21]; //@line 392 "operator.c"
        var $23=$22; //@line 392 "operator.c"
        var $24=$23+8; //@line 392 "operator.c"
        var $25=HEAP[$24]; //@line 392 "operator.c"
        var $26=$nitems; //@line 392 "operator.c"
        var $27=($25)!=($26); //@line 392 "operator.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 392 "operator.c"
      case 7: // $bb6
        ___assert_fail(__str217, __str216, 392, ___PRETTY_FUNCTION___9242); //@line 392 "operator.c"
        throw "Reached an unreachable!" //@line 392 "operator.c"
      case 8: // $bb7
        var $28=$nitems; //@line 394 "operator.c"
        var $29=_PyTuple_New($28); //@line 394 "operator.c"
        $result=$29; //@line 394 "operator.c"
        var $30=$result; //@line 395 "operator.c"
        var $31=($30)==0; //@line 395 "operator.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 395 "operator.c"
      case 9: // $bb8
        $0=0; //@line 396 "operator.c"
        __label__ = 18; break; //@line 396 "operator.c"
      case 10: // $bb9
        $i=0; //@line 398 "operator.c"
        __label__ = 16; break; //@line 398 "operator.c"
      case 11: // $bb10
        var $32=$ig_addr; //@line 400 "operator.c"
        var $33=$32+12; //@line 400 "operator.c"
        var $34=HEAP[$33]; //@line 400 "operator.c"
        var $35=$34; //@line 400 "operator.c"
        var $36=$i; //@line 400 "operator.c"
        var $37=$35+12; //@line 400 "operator.c"
        var $38=$37+$36*4; //@line 400 "operator.c"
        var $39=HEAP[$38]; //@line 400 "operator.c"
        $item=$39; //@line 400 "operator.c"
        var $40=HEAP[$obj]; //@line 401 "operator.c"
        var $41=$item; //@line 401 "operator.c"
        var $42=_PyObject_GetItem($40, $41); //@line 401 "operator.c"
        $val=$42; //@line 401 "operator.c"
        var $43=$val; //@line 402 "operator.c"
        var $44=($43)==0; //@line 402 "operator.c"
        var $45=$result; //@line 403 "operator.c"
        if ($44) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 402 "operator.c"
      case 12: // $bb11
        var $46=$45; //@line 403 "operator.c"
        var $47=HEAP[$46]; //@line 403 "operator.c"
        var $48=($47) - 1; //@line 403 "operator.c"
        var $49=$result; //@line 403 "operator.c"
        var $50=$49; //@line 403 "operator.c"
        HEAP[$50]=$48; //@line 403 "operator.c"
        var $51=$result; //@line 403 "operator.c"
        var $52=$51; //@line 403 "operator.c"
        var $53=HEAP[$52]; //@line 403 "operator.c"
        var $54=($53)==0; //@line 403 "operator.c"
        if ($54) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 403 "operator.c"
      case 13: // $bb12
        var $55=$result; //@line 403 "operator.c"
        var $56=$55+4; //@line 403 "operator.c"
        var $57=HEAP[$56]; //@line 403 "operator.c"
        var $58=$57+24; //@line 403 "operator.c"
        var $59=HEAP[$58]; //@line 403 "operator.c"
        var $60=$result; //@line 403 "operator.c"
        FUNCTION_TABLE[$59]($60); //@line 403 "operator.c"
        __label__ = 14; break; //@line 403 "operator.c"
      case 14: // $bb13
        $0=0; //@line 404 "operator.c"
        __label__ = 18; break; //@line 404 "operator.c"
      case 15: // $bb14
        var $61=$45; //@line 406 "operator.c"
        var $62=$i; //@line 406 "operator.c"
        var $63=$61+12; //@line 406 "operator.c"
        var $64=$63+$62*4; //@line 406 "operator.c"
        var $65=$val; //@line 406 "operator.c"
        HEAP[$64]=$65; //@line 406 "operator.c"
        var $66=$i; //@line 398 "operator.c"
        var $67=($66) + 1; //@line 398 "operator.c"
        $i=$67; //@line 398 "operator.c"
        __label__ = 16; break; //@line 398 "operator.c"
      case 16: // $bb15
        var $68=$i; //@line 398 "operator.c"
        var $69=$nitems; //@line 398 "operator.c"
        var $70=($68) < ($69); //@line 398 "operator.c"
        if ($70) { __label__ = 11; break; } else { __label__ = 17; break; } //@line 398 "operator.c"
      case 17: // $bb16
        var $71=$result; //@line 408 "operator.c"
        $0=$71; //@line 408 "operator.c"
        __label__ = 18; break; //@line 408 "operator.c"
      case 18: // $bb17
        var $72=$0; //@line 387 "operator.c"
        $retval=$72; //@line 387 "operator.c"
        var $retval18=$retval; //@line 387 "operator.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 387 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _attrgetter_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $ag;
        var $attr=__stackBase__;
        var $nattrs;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$kwds_addr; //@line 479 "operator.c"
        var $2=__PyArg_NoKeywords(__str219, $1); //@line 479 "operator.c"
        var $3=($2)==0; //@line 479 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 479 "operator.c"
      case 1: // $bb
        $0=0; //@line 480 "operator.c"
        __label__ = 9; break; //@line 480 "operator.c"
      case 2: // $bb1
        var $4=$args_addr; //@line 482 "operator.c"
        var $5=$4; //@line 482 "operator.c"
        var $6=$5+8; //@line 482 "operator.c"
        var $7=HEAP[$6]; //@line 482 "operator.c"
        $nattrs=$7; //@line 482 "operator.c"
        var $8=$nattrs; //@line 483 "operator.c"
        var $9=($8) <= 1; //@line 483 "operator.c"
        var $10=$args_addr; //@line 484 "operator.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 483 "operator.c"
      case 3: // $bb2
        var $11=_PyArg_UnpackTuple($10, __str220, 1, 1, allocate([$attr,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 484 "operator.c"
        var $12=($11)==0; //@line 484 "operator.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 484 "operator.c"
      case 4: // $bb3
        $0=0; //@line 485 "operator.c"
        __label__ = 9; break; //@line 485 "operator.c"
      case 5: // $bb5
        HEAP[$attr]=$10; //@line 487 "operator.c"
        __label__ = 6; break; //@line 487 "operator.c"
      case 6: // $bb6
        var $13=__PyObject_GC_New(_attrgetter_type); //@line 490 "operator.c"
        var $14=$13; //@line 490 "operator.c"
        $ag=$14; //@line 490 "operator.c"
        var $15=($14)==0; //@line 491 "operator.c"
        if ($15) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 491 "operator.c"
      case 7: // $bb7
        $0=0; //@line 492 "operator.c"
        __label__ = 9; break; //@line 492 "operator.c"
      case 8: // $bb8
        var $16=HEAP[$attr]; //@line 494 "operator.c"
        var $17=$16; //@line 494 "operator.c"
        var $18=HEAP[$17]; //@line 494 "operator.c"
        var $19=($18) + 1; //@line 494 "operator.c"
        var $20=$16; //@line 494 "operator.c"
        HEAP[$20]=$19; //@line 494 "operator.c"
        var $21=HEAP[$attr]; //@line 495 "operator.c"
        var $22=$ag; //@line 495 "operator.c"
        var $23=$22+12; //@line 495 "operator.c"
        HEAP[$23]=$21; //@line 495 "operator.c"
        var $24=$ag; //@line 496 "operator.c"
        var $25=$24+8; //@line 496 "operator.c"
        var $26=$nattrs; //@line 496 "operator.c"
        HEAP[$25]=$26; //@line 496 "operator.c"
        var $27=$ag; //@line 498 "operator.c"
        var $28=$27; //@line 498 "operator.c"
        _PyObject_GC_Track($28); //@line 498 "operator.c"
        var $29=$ag; //@line 499 "operator.c"
        var $30=$29; //@line 499 "operator.c"
        $0=$30; //@line 499 "operator.c"
        __label__ = 9; break; //@line 499 "operator.c"
      case 9: // $bb9
        var $31=$0; //@line 480 "operator.c"
        $retval=$31; //@line 480 "operator.c"
        var $retval10=$retval; //@line 480 "operator.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 480 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _attrgetter_dealloc($ag) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ag_addr;
        $ag_addr=$ag;
        var $0=$ag_addr; //@line 505 "operator.c"
        var $1=$0; //@line 505 "operator.c"
        _PyObject_GC_UnTrack($1); //@line 505 "operator.c"
        var $2=$ag_addr; //@line 506 "operator.c"
        var $3=$2+12; //@line 506 "operator.c"
        var $4=HEAP[$3]; //@line 506 "operator.c"
        var $5=($4)!=0; //@line 506 "operator.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 506 "operator.c"
      case 1: // $bb
        var $6=$ag_addr; //@line 506 "operator.c"
        var $7=$6+12; //@line 506 "operator.c"
        var $8=HEAP[$7]; //@line 506 "operator.c"
        var $9=$8; //@line 506 "operator.c"
        var $10=HEAP[$9]; //@line 506 "operator.c"
        var $11=($10) - 1; //@line 506 "operator.c"
        var $12=$8; //@line 506 "operator.c"
        HEAP[$12]=$11; //@line 506 "operator.c"
        var $13=$8; //@line 506 "operator.c"
        var $14=HEAP[$13]; //@line 506 "operator.c"
        var $15=($14)==0; //@line 506 "operator.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 506 "operator.c"
      case 2: // $bb1
        var $16=$ag_addr; //@line 506 "operator.c"
        var $17=$16+12; //@line 506 "operator.c"
        var $18=HEAP[$17]; //@line 506 "operator.c"
        var $19=$18+4; //@line 506 "operator.c"
        var $20=HEAP[$19]; //@line 506 "operator.c"
        var $21=$20+24; //@line 506 "operator.c"
        var $22=HEAP[$21]; //@line 506 "operator.c"
        var $23=$ag_addr; //@line 506 "operator.c"
        var $24=$23+12; //@line 506 "operator.c"
        var $25=HEAP[$24]; //@line 506 "operator.c"
        FUNCTION_TABLE[$22]($25); //@line 506 "operator.c"
        __label__ = 3; break; //@line 506 "operator.c"
      case 3: // $bb2
        var $26=$ag_addr; //@line 507 "operator.c"
        var $27=$26; //@line 507 "operator.c"
        _PyObject_GC_Del($27); //@line 507 "operator.c"
        ;
        return; //@line 508 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _attrgetter_traverse($ag, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ag_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        $ag_addr=$ag;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$ag_addr; //@line 513 "operator.c"
        var $2=$1+12; //@line 513 "operator.c"
        var $3=HEAP[$2]; //@line 513 "operator.c"
        var $4=($3)!=0; //@line 513 "operator.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 513 "operator.c"
      case 1: // $bb
        var $5=$ag_addr; //@line 513 "operator.c"
        var $6=$5+12; //@line 513 "operator.c"
        var $7=HEAP[$6]; //@line 513 "operator.c"
        var $8=$visit_addr; //@line 513 "operator.c"
        var $9=$arg_addr; //@line 513 "operator.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 513 "operator.c"
        $vret=$10; //@line 513 "operator.c"
        var $11=$vret; //@line 513 "operator.c"
        var $12=($11)!=0; //@line 513 "operator.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 513 "operator.c"
      case 2: // $bb1
        var $13=$vret; //@line 513 "operator.c"
        $0=$13; //@line 513 "operator.c"
        __label__ = 4; break; //@line 513 "operator.c"
      case 3: // $bb2
        $0=0; //@line 514 "operator.c"
        __label__ = 4; break; //@line 514 "operator.c"
      case 4: // $bb3
        var $14=$0; //@line 513 "operator.c"
        $retval=$14; //@line 513 "operator.c"
        var $retval4=$retval; //@line 513 "operator.c"
        ;
        return $retval4; //@line 513 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dotted_getattr($obj, $attr) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $obj_addr;
        var $attr_addr;
        var $retval;
        var $iftmp_120;
        var $0;
        var $s;
        var $p;
        var $newobj;
        var $str;
        $obj_addr=$obj;
        $attr_addr=$attr;
        var $1=$attr_addr; //@line 523 "operator.c"
        var $2=$1+4; //@line 523 "operator.c"
        var $3=HEAP[$2]; //@line 523 "operator.c"
        var $4=$3+84; //@line 523 "operator.c"
        var $5=HEAP[$4]; //@line 523 "operator.c"
        var $6=($5) & 268435456; //@line 523 "operator.c"
        var $7=($6)!=0; //@line 523 "operator.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 523 "operator.c"
      case 1: // $bb
        var $8=$attr_addr; //@line 524 "operator.c"
        var $9=__PyUnicodeUCS2_AsDefaultEncodedString($8, 0); //@line 524 "operator.c"
        $attr_addr=$9; //@line 524 "operator.c"
        var $10=$attr_addr; //@line 525 "operator.c"
        var $11=($10)==0; //@line 525 "operator.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 525 "operator.c"
      case 2: // $bb1
        $0=0; //@line 526 "operator.c"
        __label__ = 22; break; //@line 526 "operator.c"
      case 3: // $bb2
        var $12=$attr_addr; //@line 530 "operator.c"
        var $13=$12+4; //@line 530 "operator.c"
        var $14=HEAP[$13]; //@line 530 "operator.c"
        var $15=$14+84; //@line 530 "operator.c"
        var $16=HEAP[$15]; //@line 530 "operator.c"
        var $17=($16) & 134217728; //@line 530 "operator.c"
        var $18=($17)==0; //@line 530 "operator.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 530 "operator.c"
      case 4: // $bb3
        var $19=HEAP[_PyExc_TypeError]; //@line 531 "operator.c"
        _PyErr_SetString($19, __str221); //@line 531 "operator.c"
        $0=0; //@line 533 "operator.c"
        __label__ = 22; break; //@line 533 "operator.c"
      case 5: // $bb4
        var $20=$attr_addr; //@line 536 "operator.c"
        var $21=$20; //@line 536 "operator.c"
        var $22=$21+20; //@line 536 "operator.c"
        var $23=$22; //@line 536 "operator.c"
        $s=$23; //@line 536 "operator.c"
        var $24=$obj_addr; //@line 537 "operator.c"
        var $25=$24; //@line 537 "operator.c"
        var $26=HEAP[$25]; //@line 537 "operator.c"
        var $27=($26) + 1; //@line 537 "operator.c"
        var $28=$obj_addr; //@line 537 "operator.c"
        var $29=$28; //@line 537 "operator.c"
        HEAP[$29]=$27; //@line 537 "operator.c"
        __label__ = 6; break; //@line 537 "operator.c"
      case 6: // $bb5
        var $30=$s; //@line 540 "operator.c"
        var $31=_strchr($30, 46); //@line 540 "operator.c"
        $p=$31; //@line 540 "operator.c"
        var $32=($31)!=0; //@line 541 "operator.c"
        if ($32) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 541 "operator.c"
      case 7: // $bb6
        var $33=$p; //@line 541 "operator.c"
        var $34=($33); //@line 541 "operator.c"
        var $35=$s; //@line 541 "operator.c"
        var $36=($35); //@line 541 "operator.c"
        var $37=($34) - ($36); //@line 541 "operator.c"
        var $38=$s; //@line 541 "operator.c"
        var $39=_PyString_FromStringAndSize($38, $37); //@line 541 "operator.c"
        $iftmp_120=$39; //@line 541 "operator.c"
        __lastLabel__ = 7; __label__ = 9; break; //@line 541 "operator.c"
      case 8: // $bb7
        var $40=$s; //@line 541 "operator.c"
        var $41=_PyString_FromString($40); //@line 541 "operator.c"
        $iftmp_120=$41; //@line 541 "operator.c"
        __lastLabel__ = 8; __label__ = 9; break; //@line 541 "operator.c"
      case 9: // $bb8
        var $42=__lastLabel__ == 8 ? $41 : ($39);
        $str=$42; //@line 541 "operator.c"
        var $43=($42)==0; //@line 543 "operator.c"
        var $44=$obj_addr; //@line 544 "operator.c"
        if ($43) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 543 "operator.c"
      case 10: // $bb9
        var $45=$44; //@line 544 "operator.c"
        var $46=HEAP[$45]; //@line 544 "operator.c"
        var $47=($46) - 1; //@line 544 "operator.c"
        var $48=$obj_addr; //@line 544 "operator.c"
        var $49=$48; //@line 544 "operator.c"
        HEAP[$49]=$47; //@line 544 "operator.c"
        var $50=$obj_addr; //@line 544 "operator.c"
        var $51=$50; //@line 544 "operator.c"
        var $52=HEAP[$51]; //@line 544 "operator.c"
        var $53=($52)==0; //@line 544 "operator.c"
        if ($53) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 544 "operator.c"
      case 11: // $bb10
        var $54=$obj_addr; //@line 544 "operator.c"
        var $55=$54+4; //@line 544 "operator.c"
        var $56=HEAP[$55]; //@line 544 "operator.c"
        var $57=$56+24; //@line 544 "operator.c"
        var $58=HEAP[$57]; //@line 544 "operator.c"
        var $59=$obj_addr; //@line 544 "operator.c"
        FUNCTION_TABLE[$58]($59); //@line 544 "operator.c"
        __label__ = 12; break; //@line 544 "operator.c"
      case 12: // $bb11
        $0=0; //@line 545 "operator.c"
        __label__ = 22; break; //@line 545 "operator.c"
      case 13: // $bb12
        var $60=$str; //@line 547 "operator.c"
        var $61=_PyObject_GetAttr($44, $60); //@line 547 "operator.c"
        $newobj=$61; //@line 547 "operator.c"
        var $62=$str; //@line 548 "operator.c"
        var $63=$62; //@line 548 "operator.c"
        var $64=HEAP[$63]; //@line 548 "operator.c"
        var $65=($64) - 1; //@line 548 "operator.c"
        var $66=$str; //@line 548 "operator.c"
        var $67=$66; //@line 548 "operator.c"
        HEAP[$67]=$65; //@line 548 "operator.c"
        var $68=$str; //@line 548 "operator.c"
        var $69=$68; //@line 548 "operator.c"
        var $70=HEAP[$69]; //@line 548 "operator.c"
        var $71=($70)==0; //@line 548 "operator.c"
        if ($71) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 548 "operator.c"
      case 14: // $bb13
        var $72=$str; //@line 548 "operator.c"
        var $73=$72+4; //@line 548 "operator.c"
        var $74=HEAP[$73]; //@line 548 "operator.c"
        var $75=$74+24; //@line 548 "operator.c"
        var $76=HEAP[$75]; //@line 548 "operator.c"
        var $77=$str; //@line 548 "operator.c"
        FUNCTION_TABLE[$76]($77); //@line 548 "operator.c"
        __label__ = 15; break; //@line 548 "operator.c"
      case 15: // $bb14
        var $78=$obj_addr; //@line 549 "operator.c"
        var $79=$78; //@line 549 "operator.c"
        var $80=HEAP[$79]; //@line 549 "operator.c"
        var $81=($80) - 1; //@line 549 "operator.c"
        var $82=$obj_addr; //@line 549 "operator.c"
        var $83=$82; //@line 549 "operator.c"
        HEAP[$83]=$81; //@line 549 "operator.c"
        var $84=$obj_addr; //@line 549 "operator.c"
        var $85=$84; //@line 549 "operator.c"
        var $86=HEAP[$85]; //@line 549 "operator.c"
        var $87=($86)==0; //@line 549 "operator.c"
        if ($87) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 549 "operator.c"
      case 16: // $bb15
        var $88=$obj_addr; //@line 549 "operator.c"
        var $89=$88+4; //@line 549 "operator.c"
        var $90=HEAP[$89]; //@line 549 "operator.c"
        var $91=$90+24; //@line 549 "operator.c"
        var $92=HEAP[$91]; //@line 549 "operator.c"
        var $93=$obj_addr; //@line 549 "operator.c"
        FUNCTION_TABLE[$92]($93); //@line 549 "operator.c"
        __label__ = 17; break; //@line 549 "operator.c"
      case 17: // $bb16
        var $94=$newobj; //@line 550 "operator.c"
        var $95=($94)==0; //@line 550 "operator.c"
        if ($95) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 550 "operator.c"
      case 18: // $bb17
        $0=0; //@line 551 "operator.c"
        __label__ = 22; break; //@line 551 "operator.c"
      case 19: // $bb18
        var $96=$newobj; //@line 552 "operator.c"
        $obj_addr=$96; //@line 552 "operator.c"
        var $97=$p; //@line 553 "operator.c"
        var $98=($97)==0; //@line 553 "operator.c"
        if ($98) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 553 "operator.c"
      case 20: // $bb19
        var $99=$p; //@line 554 "operator.c"
        var $100=$99+1; //@line 554 "operator.c"
        $s=$100; //@line 554 "operator.c"
        __label__ = 6; break; //@line 554 "operator.c"
      case 21: // $bb20
        var $101=$obj_addr; //@line 557 "operator.c"
        $0=$101; //@line 557 "operator.c"
        __label__ = 22; break; //@line 557 "operator.c"
      case 22: // $bb21
        var $102=$0; //@line 526 "operator.c"
        $retval=$102; //@line 526 "operator.c"
        var $retval22=$retval; //@line 526 "operator.c"
        ;
        return $retval22; //@line 526 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _attrgetter_call($ag, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ag_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $obj=__stackBase__;
        var $result;
        var $i;
        var $nattrs;
        var $attr;
        var $val;
        $ag_addr=$ag;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=$ag_addr; //@line 564 "operator.c"
        var $2=$1+8; //@line 564 "operator.c"
        var $3=HEAP[$2]; //@line 564 "operator.c"
        $nattrs=$3; //@line 564 "operator.c"
        var $4=$args_addr; //@line 566 "operator.c"
        var $5=_PyArg_UnpackTuple($4, __str220, 1, 1, allocate([$obj,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 566 "operator.c"
        var $6=($5)==0; //@line 566 "operator.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 566 "operator.c"
      case 1: // $bb
        $0=0; //@line 567 "operator.c"
        __label__ = 18; break; //@line 567 "operator.c"
      case 2: // $bb1
        var $7=$ag_addr; //@line 568 "operator.c"
        var $8=$7+8; //@line 568 "operator.c"
        var $9=HEAP[$8]; //@line 568 "operator.c"
        var $10=($9)==1; //@line 568 "operator.c"
        var $11=$ag_addr; //@line 569 "operator.c"
        var $12=$11+12; //@line 569 "operator.c"
        var $13=HEAP[$12]; //@line 569 "operator.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 568 "operator.c"
      case 3: // $bb2
        var $14=HEAP[$obj]; //@line 569 "operator.c"
        var $15=_dotted_getattr($14, $13); //@line 569 "operator.c"
        $0=$15; //@line 569 "operator.c"
        __label__ = 18; break; //@line 569 "operator.c"
      case 4: // $bb3
        var $16=$13+4; //@line 571 "operator.c"
        var $17=HEAP[$16]; //@line 571 "operator.c"
        var $18=$17+84; //@line 571 "operator.c"
        var $19=HEAP[$18]; //@line 571 "operator.c"
        var $20=($19) & 67108864; //@line 571 "operator.c"
        var $21=($20)==0; //@line 571 "operator.c"
        if ($21) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 571 "operator.c"
      case 5: // $bb4
        ___assert_fail(__str222, __str216, 571, ___PRETTY_FUNCTION___9429); //@line 571 "operator.c"
        throw "Reached an unreachable!" //@line 571 "operator.c"
      case 6: // $bb5
        var $22=$ag_addr; //@line 572 "operator.c"
        var $23=$22+12; //@line 572 "operator.c"
        var $24=HEAP[$23]; //@line 572 "operator.c"
        var $25=$24; //@line 572 "operator.c"
        var $26=$25+8; //@line 572 "operator.c"
        var $27=HEAP[$26]; //@line 572 "operator.c"
        var $28=$nattrs; //@line 572 "operator.c"
        var $29=($27)!=($28); //@line 572 "operator.c"
        if ($29) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 572 "operator.c"
      case 7: // $bb6
        ___assert_fail(__str223, __str216, 572, ___PRETTY_FUNCTION___9429); //@line 572 "operator.c"
        throw "Reached an unreachable!" //@line 572 "operator.c"
      case 8: // $bb7
        var $30=$nattrs; //@line 574 "operator.c"
        var $31=_PyTuple_New($30); //@line 574 "operator.c"
        $result=$31; //@line 574 "operator.c"
        var $32=$result; //@line 575 "operator.c"
        var $33=($32)==0; //@line 575 "operator.c"
        if ($33) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 575 "operator.c"
      case 9: // $bb8
        $0=0; //@line 576 "operator.c"
        __label__ = 18; break; //@line 576 "operator.c"
      case 10: // $bb9
        $i=0; //@line 578 "operator.c"
        __label__ = 16; break; //@line 578 "operator.c"
      case 11: // $bb10
        var $34=$ag_addr; //@line 580 "operator.c"
        var $35=$34+12; //@line 580 "operator.c"
        var $36=HEAP[$35]; //@line 580 "operator.c"
        var $37=$36; //@line 580 "operator.c"
        var $38=$i; //@line 580 "operator.c"
        var $39=$37+12; //@line 580 "operator.c"
        var $40=$39+$38*4; //@line 580 "operator.c"
        var $41=HEAP[$40]; //@line 580 "operator.c"
        $attr=$41; //@line 580 "operator.c"
        var $42=HEAP[$obj]; //@line 581 "operator.c"
        var $43=$attr; //@line 581 "operator.c"
        var $44=_dotted_getattr($42, $43); //@line 581 "operator.c"
        $val=$44; //@line 581 "operator.c"
        var $45=$val; //@line 582 "operator.c"
        var $46=($45)==0; //@line 582 "operator.c"
        var $47=$result; //@line 583 "operator.c"
        if ($46) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 582 "operator.c"
      case 12: // $bb11
        var $48=$47; //@line 583 "operator.c"
        var $49=HEAP[$48]; //@line 583 "operator.c"
        var $50=($49) - 1; //@line 583 "operator.c"
        var $51=$result; //@line 583 "operator.c"
        var $52=$51; //@line 583 "operator.c"
        HEAP[$52]=$50; //@line 583 "operator.c"
        var $53=$result; //@line 583 "operator.c"
        var $54=$53; //@line 583 "operator.c"
        var $55=HEAP[$54]; //@line 583 "operator.c"
        var $56=($55)==0; //@line 583 "operator.c"
        if ($56) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 583 "operator.c"
      case 13: // $bb12
        var $57=$result; //@line 583 "operator.c"
        var $58=$57+4; //@line 583 "operator.c"
        var $59=HEAP[$58]; //@line 583 "operator.c"
        var $60=$59+24; //@line 583 "operator.c"
        var $61=HEAP[$60]; //@line 583 "operator.c"
        var $62=$result; //@line 583 "operator.c"
        FUNCTION_TABLE[$61]($62); //@line 583 "operator.c"
        __label__ = 14; break; //@line 583 "operator.c"
      case 14: // $bb13
        $0=0; //@line 584 "operator.c"
        __label__ = 18; break; //@line 584 "operator.c"
      case 15: // $bb14
        var $63=$47; //@line 586 "operator.c"
        var $64=$i; //@line 586 "operator.c"
        var $65=$63+12; //@line 586 "operator.c"
        var $66=$65+$64*4; //@line 586 "operator.c"
        var $67=$val; //@line 586 "operator.c"
        HEAP[$66]=$67; //@line 586 "operator.c"
        var $68=$i; //@line 578 "operator.c"
        var $69=($68) + 1; //@line 578 "operator.c"
        $i=$69; //@line 578 "operator.c"
        __label__ = 16; break; //@line 578 "operator.c"
      case 16: // $bb15
        var $70=$i; //@line 578 "operator.c"
        var $71=$nattrs; //@line 578 "operator.c"
        var $72=($70) < ($71); //@line 578 "operator.c"
        if ($72) { __label__ = 11; break; } else { __label__ = 17; break; } //@line 578 "operator.c"
      case 17: // $bb16
        var $73=$result; //@line 588 "operator.c"
        $0=$73; //@line 588 "operator.c"
        __label__ = 18; break; //@line 588 "operator.c"
      case 18: // $bb17
        var $74=$0; //@line 567 "operator.c"
        $retval=$74; //@line 567 "operator.c"
        var $retval18=$retval; //@line 567 "operator.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 567 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _methodcaller_new($type, $args, $kwds) {
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
        var $mc;
        var $name;
        var $newargs;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$args_addr; //@line 661 "operator.c"
        var $2=$1; //@line 661 "operator.c"
        var $3=$2+8; //@line 661 "operator.c"
        var $4=HEAP[$3]; //@line 661 "operator.c"
        var $5=($4) <= 0; //@line 661 "operator.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 661 "operator.c"
      case 1: // $bb
        var $6=HEAP[_PyExc_TypeError]; //@line 662 "operator.c"
        _PyErr_SetString($6, __str225); //@line 662 "operator.c"
        $0=0; //@line 664 "operator.c"
        __label__ = 11; break; //@line 664 "operator.c"
      case 2: // $bb1
        var $7=__PyObject_GC_New(_methodcaller_type); //@line 668 "operator.c"
        var $8=$7; //@line 668 "operator.c"
        $mc=$8; //@line 668 "operator.c"
        var $9=$mc; //@line 669 "operator.c"
        var $10=($9)==0; //@line 669 "operator.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 669 "operator.c"
      case 3: // $bb2
        $0=0; //@line 670 "operator.c"
        __label__ = 11; break; //@line 670 "operator.c"
      case 4: // $bb3
        var $11=$args_addr; //@line 672 "operator.c"
        var $12=$11; //@line 672 "operator.c"
        var $13=$12+8; //@line 672 "operator.c"
        var $14=HEAP[$13]; //@line 672 "operator.c"
        var $15=$args_addr; //@line 672 "operator.c"
        var $16=_PyTuple_GetSlice($15, 1, $14); //@line 672 "operator.c"
        $newargs=$16; //@line 672 "operator.c"
        var $17=$newargs; //@line 673 "operator.c"
        var $18=($17)==0; //@line 673 "operator.c"
        var $19=$mc; //@line 674 "operator.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 673 "operator.c"
      case 5: // $bb4
        var $20=$19; //@line 674 "operator.c"
        var $21=$20; //@line 674 "operator.c"
        var $22=HEAP[$21]; //@line 674 "operator.c"
        var $23=($22) - 1; //@line 674 "operator.c"
        var $24=$20; //@line 674 "operator.c"
        HEAP[$24]=$23; //@line 674 "operator.c"
        var $25=$20; //@line 674 "operator.c"
        var $26=HEAP[$25]; //@line 674 "operator.c"
        var $27=($26)==0; //@line 674 "operator.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 674 "operator.c"
      case 6: // $bb5
        var $28=$mc; //@line 674 "operator.c"
        var $29=$28; //@line 674 "operator.c"
        var $30=$29+4; //@line 674 "operator.c"
        var $31=HEAP[$30]; //@line 674 "operator.c"
        var $32=$31+24; //@line 674 "operator.c"
        var $33=HEAP[$32]; //@line 674 "operator.c"
        var $34=$mc; //@line 674 "operator.c"
        var $35=$34; //@line 674 "operator.c"
        FUNCTION_TABLE[$33]($35); //@line 674 "operator.c"
        __label__ = 7; break; //@line 674 "operator.c"
      case 7: // $bb6
        $0=0; //@line 675 "operator.c"
        __label__ = 11; break; //@line 675 "operator.c"
      case 8: // $bb7
        var $36=$19+12; //@line 677 "operator.c"
        var $37=$newargs; //@line 677 "operator.c"
        HEAP[$36]=$37; //@line 677 "operator.c"
        var $38=$args_addr; //@line 679 "operator.c"
        var $39=$38; //@line 679 "operator.c"
        var $40=$39+12; //@line 679 "operator.c"
        var $41=$40; //@line 679 "operator.c"
        var $42=HEAP[$41]; //@line 679 "operator.c"
        $name=$42; //@line 679 "operator.c"
        var $43=$name; //@line 680 "operator.c"
        var $44=$43; //@line 680 "operator.c"
        var $45=HEAP[$44]; //@line 680 "operator.c"
        var $46=($45) + 1; //@line 680 "operator.c"
        var $47=$name; //@line 680 "operator.c"
        var $48=$47; //@line 680 "operator.c"
        HEAP[$48]=$46; //@line 680 "operator.c"
        var $49=$mc; //@line 681 "operator.c"
        var $50=$49+8; //@line 681 "operator.c"
        var $51=$name; //@line 681 "operator.c"
        HEAP[$50]=$51; //@line 681 "operator.c"
        var $52=$kwds_addr; //@line 683 "operator.c"
        var $53=($52)!=0; //@line 683 "operator.c"
        if ($53) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 683 "operator.c"
      case 9: // $bb8
        var $54=$kwds_addr; //@line 683 "operator.c"
        var $55=$54; //@line 683 "operator.c"
        var $56=HEAP[$55]; //@line 683 "operator.c"
        var $57=($56) + 1; //@line 683 "operator.c"
        var $58=$kwds_addr; //@line 683 "operator.c"
        var $59=$58; //@line 683 "operator.c"
        HEAP[$59]=$57; //@line 683 "operator.c"
        __label__ = 10; break; //@line 683 "operator.c"
      case 10: // $bb9
        var $60=$mc; //@line 684 "operator.c"
        var $61=$60+16; //@line 684 "operator.c"
        var $62=$kwds_addr; //@line 684 "operator.c"
        HEAP[$61]=$62; //@line 684 "operator.c"
        var $63=$mc; //@line 686 "operator.c"
        var $64=$63; //@line 686 "operator.c"
        _PyObject_GC_Track($64); //@line 686 "operator.c"
        var $65=$mc; //@line 687 "operator.c"
        var $66=$65; //@line 687 "operator.c"
        $0=$66; //@line 687 "operator.c"
        __label__ = 11; break; //@line 687 "operator.c"
      case 11: // $bb10
        var $67=$0; //@line 664 "operator.c"
        $retval=$67; //@line 664 "operator.c"
        var $retval11=$retval; //@line 664 "operator.c"
        ;
        return $retval11; //@line 664 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _methodcaller_dealloc($mc) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $mc_addr;
        $mc_addr=$mc;
        var $0=$mc_addr; //@line 693 "operator.c"
        var $1=$0; //@line 693 "operator.c"
        _PyObject_GC_UnTrack($1); //@line 693 "operator.c"
        var $2=$mc_addr; //@line 694 "operator.c"
        var $3=$2+8; //@line 694 "operator.c"
        var $4=HEAP[$3]; //@line 694 "operator.c"
        var $5=($4)!=0; //@line 694 "operator.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 694 "operator.c"
      case 1: // $bb
        var $6=$mc_addr; //@line 694 "operator.c"
        var $7=$6+8; //@line 694 "operator.c"
        var $8=HEAP[$7]; //@line 694 "operator.c"
        var $9=$8; //@line 694 "operator.c"
        var $10=HEAP[$9]; //@line 694 "operator.c"
        var $11=($10) - 1; //@line 694 "operator.c"
        var $12=$8; //@line 694 "operator.c"
        HEAP[$12]=$11; //@line 694 "operator.c"
        var $13=$8; //@line 694 "operator.c"
        var $14=HEAP[$13]; //@line 694 "operator.c"
        var $15=($14)==0; //@line 694 "operator.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 694 "operator.c"
      case 2: // $bb1
        var $16=$mc_addr; //@line 694 "operator.c"
        var $17=$16+8; //@line 694 "operator.c"
        var $18=HEAP[$17]; //@line 694 "operator.c"
        var $19=$18+4; //@line 694 "operator.c"
        var $20=HEAP[$19]; //@line 694 "operator.c"
        var $21=$20+24; //@line 694 "operator.c"
        var $22=HEAP[$21]; //@line 694 "operator.c"
        var $23=$mc_addr; //@line 694 "operator.c"
        var $24=$23+8; //@line 694 "operator.c"
        var $25=HEAP[$24]; //@line 694 "operator.c"
        FUNCTION_TABLE[$22]($25); //@line 694 "operator.c"
        __label__ = 3; break; //@line 694 "operator.c"
      case 3: // $bb2
        var $26=$mc_addr; //@line 695 "operator.c"
        var $27=$26+12; //@line 695 "operator.c"
        var $28=HEAP[$27]; //@line 695 "operator.c"
        var $29=($28)!=0; //@line 695 "operator.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 695 "operator.c"
      case 4: // $bb3
        var $30=$mc_addr; //@line 695 "operator.c"
        var $31=$30+12; //@line 695 "operator.c"
        var $32=HEAP[$31]; //@line 695 "operator.c"
        var $33=$32; //@line 695 "operator.c"
        var $34=HEAP[$33]; //@line 695 "operator.c"
        var $35=($34) - 1; //@line 695 "operator.c"
        var $36=$32; //@line 695 "operator.c"
        HEAP[$36]=$35; //@line 695 "operator.c"
        var $37=$32; //@line 695 "operator.c"
        var $38=HEAP[$37]; //@line 695 "operator.c"
        var $39=($38)==0; //@line 695 "operator.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 695 "operator.c"
      case 5: // $bb4
        var $40=$mc_addr; //@line 695 "operator.c"
        var $41=$40+12; //@line 695 "operator.c"
        var $42=HEAP[$41]; //@line 695 "operator.c"
        var $43=$42+4; //@line 695 "operator.c"
        var $44=HEAP[$43]; //@line 695 "operator.c"
        var $45=$44+24; //@line 695 "operator.c"
        var $46=HEAP[$45]; //@line 695 "operator.c"
        var $47=$mc_addr; //@line 695 "operator.c"
        var $48=$47+12; //@line 695 "operator.c"
        var $49=HEAP[$48]; //@line 695 "operator.c"
        FUNCTION_TABLE[$46]($49); //@line 695 "operator.c"
        __label__ = 6; break; //@line 695 "operator.c"
      case 6: // $bb5
        var $50=$mc_addr; //@line 696 "operator.c"
        var $51=$50+16; //@line 696 "operator.c"
        var $52=HEAP[$51]; //@line 696 "operator.c"
        var $53=($52)!=0; //@line 696 "operator.c"
        if ($53) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 696 "operator.c"
      case 7: // $bb6
        var $54=$mc_addr; //@line 696 "operator.c"
        var $55=$54+16; //@line 696 "operator.c"
        var $56=HEAP[$55]; //@line 696 "operator.c"
        var $57=$56; //@line 696 "operator.c"
        var $58=HEAP[$57]; //@line 696 "operator.c"
        var $59=($58) - 1; //@line 696 "operator.c"
        var $60=$56; //@line 696 "operator.c"
        HEAP[$60]=$59; //@line 696 "operator.c"
        var $61=$56; //@line 696 "operator.c"
        var $62=HEAP[$61]; //@line 696 "operator.c"
        var $63=($62)==0; //@line 696 "operator.c"
        if ($63) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 696 "operator.c"
      case 8: // $bb7
        var $64=$mc_addr; //@line 696 "operator.c"
        var $65=$64+16; //@line 696 "operator.c"
        var $66=HEAP[$65]; //@line 696 "operator.c"
        var $67=$66+4; //@line 696 "operator.c"
        var $68=HEAP[$67]; //@line 696 "operator.c"
        var $69=$68+24; //@line 696 "operator.c"
        var $70=HEAP[$69]; //@line 696 "operator.c"
        var $71=$mc_addr; //@line 696 "operator.c"
        var $72=$71+16; //@line 696 "operator.c"
        var $73=HEAP[$72]; //@line 696 "operator.c"
        FUNCTION_TABLE[$70]($73); //@line 696 "operator.c"
        __label__ = 9; break; //@line 696 "operator.c"
      case 9: // $bb8
        var $74=$mc_addr; //@line 697 "operator.c"
        var $75=$74; //@line 697 "operator.c"
        _PyObject_GC_Del($75); //@line 697 "operator.c"
        ;
        return; //@line 698 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _methodcaller_traverse($mc, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $mc_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        $mc_addr=$mc;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$mc_addr; //@line 703 "operator.c"
        var $2=$1+12; //@line 703 "operator.c"
        var $3=HEAP[$2]; //@line 703 "operator.c"
        var $4=($3)!=0; //@line 703 "operator.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 703 "operator.c"
      case 1: // $bb
        var $5=$mc_addr; //@line 703 "operator.c"
        var $6=$5+12; //@line 703 "operator.c"
        var $7=HEAP[$6]; //@line 703 "operator.c"
        var $8=$visit_addr; //@line 703 "operator.c"
        var $9=$arg_addr; //@line 703 "operator.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 703 "operator.c"
        $vret=$10; //@line 703 "operator.c"
        var $11=$vret; //@line 703 "operator.c"
        var $12=($11)!=0; //@line 703 "operator.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 703 "operator.c"
      case 2: // $bb1
        var $13=$vret; //@line 703 "operator.c"
        $0=$13; //@line 703 "operator.c"
        __label__ = 7; break; //@line 703 "operator.c"
      case 3: // $bb2
        var $14=$mc_addr; //@line 704 "operator.c"
        var $15=$14+16; //@line 704 "operator.c"
        var $16=HEAP[$15]; //@line 704 "operator.c"
        var $17=($16)!=0; //@line 704 "operator.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 704 "operator.c"
      case 4: // $bb3
        var $18=$mc_addr; //@line 704 "operator.c"
        var $19=$18+16; //@line 704 "operator.c"
        var $20=HEAP[$19]; //@line 704 "operator.c"
        var $21=$visit_addr; //@line 704 "operator.c"
        var $22=$arg_addr; //@line 704 "operator.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 704 "operator.c"
        $vret4=$23; //@line 704 "operator.c"
        var $24=$vret4; //@line 704 "operator.c"
        var $25=($24)!=0; //@line 704 "operator.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 704 "operator.c"
      case 5: // $bb5
        var $26=$vret4; //@line 704 "operator.c"
        $0=$26; //@line 704 "operator.c"
        __label__ = 7; break; //@line 704 "operator.c"
      case 6: // $bb6
        $0=0; //@line 705 "operator.c"
        __label__ = 7; break; //@line 705 "operator.c"
      case 7: // $bb7
        var $27=$0; //@line 703 "operator.c"
        $retval=$27; //@line 703 "operator.c"
        var $retval8=$retval; //@line 703 "operator.c"
        ;
        return $retval8; //@line 703 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _methodcaller_call($mc, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $mc_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $method;
        var $obj=__stackBase__;
        var $result;
        $mc_addr=$mc;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=$args_addr; //@line 713 "operator.c"
        var $2=_PyArg_UnpackTuple($1, __str226, 1, 1, allocate([$obj,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 713 "operator.c"
        var $3=($2)==0; //@line 713 "operator.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 713 "operator.c"
      case 1: // $bb
        $0=0; //@line 714 "operator.c"
        __label__ = 7; break; //@line 714 "operator.c"
      case 2: // $bb1
        var $4=$mc_addr; //@line 715 "operator.c"
        var $5=$4+8; //@line 715 "operator.c"
        var $6=HEAP[$5]; //@line 715 "operator.c"
        var $7=HEAP[$obj]; //@line 715 "operator.c"
        var $8=_PyObject_GetAttr($7, $6); //@line 715 "operator.c"
        $method=$8; //@line 715 "operator.c"
        var $9=$method; //@line 716 "operator.c"
        var $10=($9)==0; //@line 716 "operator.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 716 "operator.c"
      case 3: // $bb2
        $0=0; //@line 717 "operator.c"
        __label__ = 7; break; //@line 717 "operator.c"
      case 4: // $bb3
        var $11=$mc_addr; //@line 718 "operator.c"
        var $12=$11+16; //@line 718 "operator.c"
        var $13=HEAP[$12]; //@line 718 "operator.c"
        var $14=$mc_addr; //@line 718 "operator.c"
        var $15=$14+12; //@line 718 "operator.c"
        var $16=HEAP[$15]; //@line 718 "operator.c"
        var $17=$method; //@line 718 "operator.c"
        var $18=_PyObject_Call($17, $16, $13); //@line 718 "operator.c"
        $result=$18; //@line 718 "operator.c"
        var $19=$method; //@line 719 "operator.c"
        var $20=$19; //@line 719 "operator.c"
        var $21=HEAP[$20]; //@line 719 "operator.c"
        var $22=($21) - 1; //@line 719 "operator.c"
        var $23=$method; //@line 719 "operator.c"
        var $24=$23; //@line 719 "operator.c"
        HEAP[$24]=$22; //@line 719 "operator.c"
        var $25=$method; //@line 719 "operator.c"
        var $26=$25; //@line 719 "operator.c"
        var $27=HEAP[$26]; //@line 719 "operator.c"
        var $28=($27)==0; //@line 719 "operator.c"
        if ($28) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 719 "operator.c"
      case 5: // $bb4
        var $29=$method; //@line 719 "operator.c"
        var $30=$29+4; //@line 719 "operator.c"
        var $31=HEAP[$30]; //@line 719 "operator.c"
        var $32=$31+24; //@line 719 "operator.c"
        var $33=HEAP[$32]; //@line 719 "operator.c"
        var $34=$method; //@line 719 "operator.c"
        FUNCTION_TABLE[$33]($34); //@line 719 "operator.c"
        __label__ = 6; break; //@line 719 "operator.c"
      case 6: // $bb5
        var $35=$result; //@line 720 "operator.c"
        $0=$35; //@line 720 "operator.c"
        __label__ = 7; break; //@line 720 "operator.c"
      case 7: // $bb6
        var $36=$0; //@line 714 "operator.c"
        $retval=$36; //@line 714 "operator.c"
        var $retval7=$retval; //@line 714 "operator.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 714 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initoperator() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $0=_Py_InitModule4(__str228, _operator_methods, _operator_doc, 0, 1013); //@line 783 "operator.c"
        $m=$0; //@line 783 "operator.c"
        var $1=$m; //@line 785 "operator.c"
        var $2=($1)==0; //@line 785 "operator.c"
        if ($2) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 785 "operator.c"
      case 1: // $bb
        var $3=_PyType_Ready(_itemgetter_type); //@line 788 "operator.c"
        var $4=($3) < 0; //@line 788 "operator.c"
        if ($4) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 788 "operator.c"
      case 2: // $bb1
        var $5=HEAP[_itemgetter_type]; //@line 790 "operator.c"
        var $6=($5) + 1; //@line 790 "operator.c"
        HEAP[_itemgetter_type]=$6; //@line 790 "operator.c"
        var $7=$m; //@line 791 "operator.c"
        var $8=_PyModule_AddObject($7, __str214, _itemgetter_type); //@line 791 "operator.c"
        var $9=_PyType_Ready(_attrgetter_type); //@line 793 "operator.c"
        var $10=($9) < 0; //@line 793 "operator.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 793 "operator.c"
      case 3: // $bb2
        var $11=HEAP[_attrgetter_type]; //@line 795 "operator.c"
        var $12=($11) + 1; //@line 795 "operator.c"
        HEAP[_attrgetter_type]=$12; //@line 795 "operator.c"
        var $13=$m; //@line 796 "operator.c"
        var $14=_PyModule_AddObject($13, __str220, _attrgetter_type); //@line 796 "operator.c"
        var $15=_PyType_Ready(_methodcaller_type); //@line 798 "operator.c"
        var $16=($15) < 0; //@line 798 "operator.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 798 "operator.c"
      case 4: // $bb3
        var $17=HEAP[_methodcaller_type]; //@line 800 "operator.c"
        var $18=($17) + 1; //@line 800 "operator.c"
        HEAP[_methodcaller_type]=$18; //@line 800 "operator.c"
        var $19=$m; //@line 801 "operator.c"
        var $20=_PyModule_AddObject($19, __str226, _methodcaller_type); //@line 801 "operator.c"
        __label__ = 5; break; //@line 801 "operator.c"
      case 5: // $return
        ;
        return; //@line 786 "operator.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initoperator"] = _initoperator;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_isCallable,0,_isNumberType,0,_isSequenceType,0,_truth,0,_op_contains,0,_sequenceIncludes,0,_indexOf,0,_countOf,0,_isMappingType,0,_is_,0,_is_not,0,_op_index,0,_op_add,0,_op_sub,0,_op_mul,0,_op_div,0,_op_floordiv,0,_op_truediv,0,_op_mod,0,_op_neg,0,_op_pos,0,_op_abs,0,_op_inv,0,_op_invert,0,_op_lshift,0,_op_rshift,0,_op_not_,0,_op_and_,0,_op_xor,0,_op_or_,0,_op_iadd,0,_op_isub,0,_op_imul,0,_op_idiv,0,_op_ifloordiv,0,_op_itruediv,0,_op_imod,0,_op_ilshift,0,_op_irshift,0,_op_iand,0,_op_ixor,0,_op_ior,0,_op_concat,0,_op_repeat,0,_op_iconcat,0,_op_irepeat,0,_op_getitem,0,_op_setitem,0,_op_delitem,0,_op_pow,0,_op_ipow,0,_op_getslice,0,_op_setslice,0,_op_delslice,0,_op_lt,0,_op_le,0,_op_eq,0,_op_ne,0,_op_gt,0,_op_ge,0,_itemgetter_dealloc,0,_itemgetter_call,0,_PyObject_GenericGetAttr,0,_itemgetter_traverse,0,_itemgetter_new,0,_attrgetter_dealloc,0,_attrgetter_call,0,_attrgetter_traverse,0,_attrgetter_new,0,_methodcaller_dealloc,0,_methodcaller_call,0,_methodcaller_traverse,0,_methodcaller_new,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_operator_doc=allocate([79,112,101,114,97,116,111,114,32,105,110,116,101,114,102,97,99,101,46,10,10,84,104,105,115,32,109,111,100,117,108,101,32,101,120,112,111,114,116,115,32,97,32,115,101,116,32,111,102,32,102,117,110,99,116,105,111,110,115,32,105,109,112,108,101,109,101,110,116,101,100,32,105,110,32,67,32,99,111,114,114,101,115,112,111,110,100,105,110,103,10,116,111,32,116,104,101,32,105,110,116,114,105,110,115,105,99,32,111,112,101,114,97,116,111,114,115,32,111,102,32,80,121,116,104,111,110,46,32,32,70,111,114,32,101,120,97,109,112,108,101,44,32,111,112,101,114,97,116,111,114,46,97,100,100,40,120,44,32,121,41,10,105,115,32,101,113,117,105,118,97,108,101,110,116,32,116,111,32,116,104,101,32,101,120,112,114,101,115,115,105,111,110,32,120,43,121,46,32,32,84,104,101,32,102,117,110,99,116,105,111,110,32,110,97,109,101,115,32,97,114,101,32,116,104,111,115,101,10,117,115,101,100,32,102,111,114,32,115,112,101,99,105,97,108,32,109,101,116,104,111,100,115,59,32,118,97,114,105,97,110,116,115,32,119,105,116,104,111,117,116,32,108,101,97,100,105,110,103,32,97,110,100,32,116,114,97,105,108,105,110,103,10,39,95,95,39,32,97,114,101,32,97,108,115,111,32,112,114,111,118,105,100,101,100,32,102,111,114,32,99,111,110,118,101,110,105,101,110,99,101,46,0] /* Operator interface.\ */, "i8", ALLOC_NORMAL);
__str=allocate([111,112,101,114,97,116,111,114,46,105,115,67,97,108,108,97,98,108,101,40,41,32,105,115,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,105,110,32,51,46,120,46,32,85,115,101,32,104,97,115,97,116,116,114,40,111,98,106,44,32,39,95,95,99,97,108,108,95,95,39,41,46,0] /* operator.isCallable( */, "i8", ALLOC_NORMAL);
__str1=allocate([111,112,101,114,97,116,111,114,46,115,101,113,117,101,110,99,101,73,110,99,108,117,100,101,115,40,41,32,105,115,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,105,110,32,51,46,120,46,32,85,115,101,32,111,112,101,114,97,116,111,114,46,99,111,110,116,97,105,110,115,40,41,46,0] /* operator.sequenceInc */, "i8", ALLOC_NORMAL);
__str2=allocate([111,112,95,97,100,100,0] /* op_add\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([111,112,95,115,117,98,0] /* op_sub\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([111,112,95,109,117,108,0] /* op_mul\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([111,112,95,100,105,118,0] /* op_div\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([111,112,95,102,108,111,111,114,100,105,118,0] /* op_floordiv\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([111,112,95,116,114,117,101,100,105,118,0] /* op_truediv\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([111,112,95,109,111,100,0] /* op_mod\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([111,112,95,108,115,104,105,102,116,0] /* op_lshift\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([111,112,95,114,115,104,105,102,116,0] /* op_rshift\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([111,112,95,97,110,100,95,0] /* op_and_\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([111,112,95,120,111,114,0] /* op_xor\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([111,112,95,111,114,95,0] /* op_or_\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([111,112,95,105,97,100,100,0] /* op_iadd\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([111,112,95,105,115,117,98,0] /* op_isub\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([111,112,95,105,109,117,108,0] /* op_imul\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([111,112,95,105,100,105,118,0] /* op_idiv\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([111,112,95,105,102,108,111,111,114,100,105,118,0] /* op_ifloordiv\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([111,112,95,105,116,114,117,101,100,105,118,0] /* op_itruediv\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([111,112,95,105,109,111,100,0] /* op_imod\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([111,112,95,105,108,115,104,105,102,116,0] /* op_ilshift\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([111,112,95,105,114,115,104,105,102,116,0] /* op_irshift\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([111,112,95,105,97,110,100,0] /* op_iand\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([111,112,95,105,120,111,114,0] /* op_ixor\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([111,112,95,105,111,114,0] /* op_ior\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([111,112,95,99,111,110,99,97,116,0] /* op_concat\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([79,105,58,111,112,95,114,101,112,101,97,116,0] /* Oi:op_repeat\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([111,112,95,105,99,111,110,99,97,116,0] /* op_iconcat\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([79,105,58,111,112,95,105,114,101,112,101,97,116,0] /* Oi:op_irepeat\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([111,112,95,99,111,110,116,97,105,110,115,0] /* op_contains\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([115,101,113,117,101,110,99,101,73,110,99,108,117,100,101,115,0] /* sequenceIncludes\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([105,110,100,101,120,79,102,0] /* indexOf\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([99,111,117,110,116,79,102,0] /* countOf\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([111,112,95,103,101,116,105,116,101,109,0] /* op_getitem\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([111,112,95,100,101,108,105,116,101,109,0] /* op_delitem\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([111,112,95,115,101,116,105,116,101,109,0] /* op_setitem\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([111,112,95,108,116,0] /* op_lt\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([111,112,95,108,101,0] /* op_le\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([111,112,95,101,113,0] /* op_eq\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([111,112,95,110,101,0] /* op_ne\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([111,112,95,103,116,0] /* op_gt\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([111,112,95,103,101,0] /* op_ge\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([112,111,119,0] /* pow\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([105,112,111,119,0] /* ipow\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([105,115,95,0] /* is_\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([105,115,95,110,111,116,0] /* is_not\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([79,110,110,58,103,101,116,115,108,105,99,101,0] /* Onn:getslice\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([79,110,110,79,58,115,101,116,115,108,105,99,101,0] /* OnnO:setslice\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([79,110,110,58,100,101,108,115,108,105,99,101,0] /* Onn:delslice\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([105,115,67,97,108,108,97,98,108,101,0] /* isCallable\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([105,115,67,97,108,108,97,98,108,101,40,97,41,32,45,45,32,83,97,109,101,32,97,115,32,99,97,108,108,97,98,108,101,40,97,41,46,0] /* isCallable(a) -- Sam */, "i8", ALLOC_NORMAL);
__str52=allocate([105,115,78,117,109,98,101,114,84,121,112,101,0] /* isNumberType\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([105,115,78,117,109,98,101,114,84,121,112,101,40,97,41,32,45,45,32,82,101,116,117,114,110,32,84,114,117,101,32,105,102,32,97,32,104,97,115,32,97,32,110,117,109,101,114,105,99,32,116,121,112,101,44,32,70,97,108,115,101,32,111,116,104,101,114,119,105,115,101,46,0] /* isNumberType(a) -- R */, "i8", ALLOC_NORMAL);
__str54=allocate([105,115,83,101,113,117,101,110,99,101,84,121,112,101,0] /* isSequenceType\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([105,115,83,101,113,117,101,110,99,101,84,121,112,101,40,97,41,32,45,45,32,82,101,116,117,114,110,32,84,114,117,101,32,105,102,32,97,32,104,97,115,32,97,32,115,101,113,117,101,110,99,101,32,116,121,112,101,44,32,70,97,108,115,101,32,111,116,104,101,114,119,105,115,101,46,0] /* isSequenceType(a) -- */, "i8", ALLOC_NORMAL);
__str56=allocate([116,114,117,116,104,0] /* truth\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([116,114,117,116,104,40,97,41,32,45,45,32,82,101,116,117,114,110,32,84,114,117,101,32,105,102,32,97,32,105,115,32,116,114,117,101,44,32,70,97,108,115,101,32,111,116,104,101,114,119,105,115,101,46,0] /* truth(a) -- Return T */, "i8", ALLOC_NORMAL);
__str58=allocate([99,111,110,116,97,105,110,115,0] /* contains\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([99,111,110,116,97,105,110,115,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,98,32,105,110,32,97,32,40,110,111,116,101,32,114,101,118,101,114,115,101,100,32,111,112,101,114,97,110,100,115,41,46,0] /* contains(a, b) -- Sa */, "i8", ALLOC_NORMAL);
__str60=allocate([95,95,99,111,110,116,97,105,110,115,95,95,0] /* __contains__\00 */, "i8", ALLOC_NORMAL);
__str61=allocate([115,101,113,117,101,110,99,101,73,110,99,108,117,100,101,115,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,98,32,105,110,32,97,32,40,110,111,116,101,32,114,101,118,101,114,115,101,100,32,111,112,101,114,97,110,100,115,59,32,100,101,112,114,101,99,97,116,101,100,41,46,0] /* sequenceIncludes(a,  */, "i8", ALLOC_NORMAL);
__str62=allocate([105,110,100,101,120,79,102,40,97,44,32,98,41,32,45,45,32,82,101,116,117,114,110,32,116,104,101,32,102,105,114,115,116,32,105,110,100,101,120,32,111,102,32,98,32,105,110,32,97,46,0] /* indexOf(a, b) -- Ret */, "i8", ALLOC_NORMAL);
__str63=allocate([99,111,117,110,116,79,102,40,97,44,32,98,41,32,45,45,32,82,101,116,117,114,110,32,116,104,101,32,110,117,109,98,101,114,32,111,102,32,116,105,109,101,115,32,98,32,111,99,99,117,114,115,32,105,110,32,97,46,0] /* countOf(a, b) -- Ret */, "i8", ALLOC_NORMAL);
__str64=allocate([105,115,77,97,112,112,105,110,103,84,121,112,101,0] /* isMappingType\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([105,115,77,97,112,112,105,110,103,84,121,112,101,40,97,41,32,45,45,32,82,101,116,117,114,110,32,84,114,117,101,32,105,102,32,97,32,104,97,115,32,97,32,109,97,112,112,105,110,103,32,116,121,112,101,44,32,70,97,108,115,101,32,111,116,104,101,114,119,105,115,101,46,0] /* isMappingType(a) --  */, "i8", ALLOC_NORMAL);
__str66=allocate([105,115,95,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,105,115,32,98,46,0] /* is_(a, b) -- Same as */, "i8", ALLOC_NORMAL);
__str67=allocate([105,115,95,110,111,116,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,105,115,32,110,111,116,32,98,46,0] /* is_not(a, b) -- Same */, "i8", ALLOC_NORMAL);
__str68=allocate([105,110,100,101,120,0] /* index\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([105,110,100,101,120,40,97,41,32,45,45,32,83,97,109,101,32,97,115,32,97,46,95,95,105,110,100,101,120,95,95,40,41,0] /* index(a) -- Same as  */, "i8", ALLOC_NORMAL);
__str70=allocate([95,95,105,110,100,101,120,95,95,0] /* __index__\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([97,100,100,0] /* add\00 */, "i8", ALLOC_NORMAL);
__str72=allocate([97,100,100,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,43,32,98,46,0] /* add(a, b) -- Same as */, "i8", ALLOC_NORMAL);
__str73=allocate([95,95,97,100,100,95,95,0] /* __add__\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([115,117,98,0] /* sub\00 */, "i8", ALLOC_NORMAL);
__str75=allocate([115,117,98,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,45,32,98,46,0] /* sub(a, b) -- Same as */, "i8", ALLOC_NORMAL);
__str76=allocate([95,95,115,117,98,95,95,0] /* __sub__\00 */, "i8", ALLOC_NORMAL);
__str77=allocate([109,117,108,0] /* mul\00 */, "i8", ALLOC_NORMAL);
__str78=allocate([109,117,108,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,42,32,98,46,0] /* mul(a, b) -- Same as */, "i8", ALLOC_NORMAL);
__str79=allocate([95,95,109,117,108,95,95,0] /* __mul__\00 */, "i8", ALLOC_NORMAL);
__str80=allocate([100,105,118,0] /* div\00 */, "i8", ALLOC_NORMAL);
__str81=allocate([100,105,118,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,47,32,98,32,119,104,101,110,32,95,95,102,117,116,117,114,101,95,95,46,100,105,118,105,115,105,111,110,32,105,115,32,110,111,116,32,105,110,32,101,102,102,101,99,116,46,0] /* div(a, b) -- Same as */, "i8", ALLOC_NORMAL);
__str82=allocate([95,95,100,105,118,95,95,0] /* __div__\00 */, "i8", ALLOC_NORMAL);
__str83=allocate([102,108,111,111,114,100,105,118,0] /* floordiv\00 */, "i8", ALLOC_NORMAL);
__str84=allocate([102,108,111,111,114,100,105,118,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,47,47,32,98,46,0] /* floordiv(a, b) -- Sa */, "i8", ALLOC_NORMAL);
__str85=allocate([95,95,102,108,111,111,114,100,105,118,95,95,0] /* __floordiv__\00 */, "i8", ALLOC_NORMAL);
__str86=allocate([116,114,117,101,100,105,118,0] /* truediv\00 */, "i8", ALLOC_NORMAL);
__str87=allocate([116,114,117,101,100,105,118,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,47,32,98,32,119,104,101,110,32,95,95,102,117,116,117,114,101,95,95,46,100,105,118,105,115,105,111,110,32,105,115,32,105,110,32,101,102,102,101,99,116,46,0] /* truediv(a, b) -- Sam */, "i8", ALLOC_NORMAL);
__str88=allocate([95,95,116,114,117,101,100,105,118,95,95,0] /* __truediv__\00 */, "i8", ALLOC_NORMAL);
__str89=allocate([109,111,100,0] /* mod\00 */, "i8", ALLOC_NORMAL);
__str90=allocate([109,111,100,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,37,32,98,46,0] /* mod(a, b) -- Same as */, "i8", ALLOC_NORMAL);
__str91=allocate([95,95,109,111,100,95,95,0] /* __mod__\00 */, "i8", ALLOC_NORMAL);
__str92=allocate([110,101,103,0] /* neg\00 */, "i8", ALLOC_NORMAL);
__str93=allocate([110,101,103,40,97,41,32,45,45,32,83,97,109,101,32,97,115,32,45,97,46,0] /* neg(a) -- Same as -a */, "i8", ALLOC_NORMAL);
__str94=allocate([95,95,110,101,103,95,95,0] /* __neg__\00 */, "i8", ALLOC_NORMAL);
__str95=allocate([112,111,115,0] /* pos\00 */, "i8", ALLOC_NORMAL);
__str96=allocate([112,111,115,40,97,41,32,45,45,32,83,97,109,101,32,97,115,32,43,97,46,0] /* pos(a) -- Same as +a */, "i8", ALLOC_NORMAL);
__str97=allocate([95,95,112,111,115,95,95,0] /* __pos__\00 */, "i8", ALLOC_NORMAL);
__str98=allocate([97,98,115,0] /* abs\00 */, "i8", ALLOC_NORMAL);
__str99=allocate([97,98,115,40,97,41,32,45,45,32,83,97,109,101,32,97,115,32,97,98,115,40,97,41,46,0] /* abs(a) -- Same as ab */, "i8", ALLOC_NORMAL);
__str100=allocate([95,95,97,98,115,95,95,0] /* __abs__\00 */, "i8", ALLOC_NORMAL);
__str101=allocate([105,110,118,0] /* inv\00 */, "i8", ALLOC_NORMAL);
__str102=allocate([105,110,118,40,97,41,32,45,45,32,83,97,109,101,32,97,115,32,126,97,46,0] /* inv(a) -- Same as ~a */, "i8", ALLOC_NORMAL);
__str103=allocate([95,95,105,110,118,95,95,0] /* __inv__\00 */, "i8", ALLOC_NORMAL);
__str104=allocate([105,110,118,101,114,116,0] /* invert\00 */, "i8", ALLOC_NORMAL);
__str105=allocate([105,110,118,101,114,116,40,97,41,32,45,45,32,83,97,109,101,32,97,115,32,126,97,46,0] /* invert(a) -- Same as */, "i8", ALLOC_NORMAL);
__str106=allocate([95,95,105,110,118,101,114,116,95,95,0] /* __invert__\00 */, "i8", ALLOC_NORMAL);
__str107=allocate([108,115,104,105,102,116,0] /* lshift\00 */, "i8", ALLOC_NORMAL);
__str108=allocate([108,115,104,105,102,116,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,60,60,32,98,46,0] /* lshift(a, b) -- Same */, "i8", ALLOC_NORMAL);
__str109=allocate([95,95,108,115,104,105,102,116,95,95,0] /* __lshift__\00 */, "i8", ALLOC_NORMAL);
__str110=allocate([114,115,104,105,102,116,0] /* rshift\00 */, "i8", ALLOC_NORMAL);
__str111=allocate([114,115,104,105,102,116,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,62,62,32,98,46,0] /* rshift(a, b) -- Same */, "i8", ALLOC_NORMAL);
__str112=allocate([95,95,114,115,104,105,102,116,95,95,0] /* __rshift__\00 */, "i8", ALLOC_NORMAL);
__str113=allocate([110,111,116,95,0] /* not_\00 */, "i8", ALLOC_NORMAL);
__str114=allocate([110,111,116,95,40,97,41,32,45,45,32,83,97,109,101,32,97,115,32,110,111,116,32,97,46,0] /* not_(a) -- Same as n */, "i8", ALLOC_NORMAL);
__str115=allocate([95,95,110,111,116,95,95,0] /* __not__\00 */, "i8", ALLOC_NORMAL);
__str116=allocate([97,110,100,95,0] /* and_\00 */, "i8", ALLOC_NORMAL);
__str117=allocate([97,110,100,95,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,38,32,98,46,0] /* and_(a, b) -- Same a */, "i8", ALLOC_NORMAL);
__str118=allocate([95,95,97,110,100,95,95,0] /* __and__\00 */, "i8", ALLOC_NORMAL);
__str119=allocate([120,111,114,0] /* xor\00 */, "i8", ALLOC_NORMAL);
__str120=allocate([120,111,114,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,94,32,98,46,0] /* xor(a, b) -- Same as */, "i8", ALLOC_NORMAL);
__str121=allocate([95,95,120,111,114,95,95,0] /* __xor__\00 */, "i8", ALLOC_NORMAL);
__str122=allocate([111,114,95,0] /* or_\00 */, "i8", ALLOC_NORMAL);
__str123=allocate([111,114,95,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,124,32,98,46,0] /* or_(a, b) -- Same as */, "i8", ALLOC_NORMAL);
__str124=allocate([95,95,111,114,95,95,0] /* __or__\00 */, "i8", ALLOC_NORMAL);
__str125=allocate([105,97,100,100,0] /* iadd\00 */, "i8", ALLOC_NORMAL);
__str126=allocate([97,32,61,32,105,97,100,100,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,43,61,32,98,46,0] /* a = iadd(a, b) -- Sa */, "i8", ALLOC_NORMAL);
__str127=allocate([95,95,105,97,100,100,95,95,0] /* __iadd__\00 */, "i8", ALLOC_NORMAL);
__str128=allocate([105,115,117,98,0] /* isub\00 */, "i8", ALLOC_NORMAL);
__str129=allocate([97,32,61,32,105,115,117,98,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,45,61,32,98,46,0] /* a = isub(a, b) -- Sa */, "i8", ALLOC_NORMAL);
__str130=allocate([95,95,105,115,117,98,95,95,0] /* __isub__\00 */, "i8", ALLOC_NORMAL);
__str131=allocate([105,109,117,108,0] /* imul\00 */, "i8", ALLOC_NORMAL);
__str132=allocate([97,32,61,32,105,109,117,108,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,42,61,32,98,46,0] /* a = imul(a, b) -- Sa */, "i8", ALLOC_NORMAL);
__str133=allocate([95,95,105,109,117,108,95,95,0] /* __imul__\00 */, "i8", ALLOC_NORMAL);
__str134=allocate([105,100,105,118,0] /* idiv\00 */, "i8", ALLOC_NORMAL);
__str135=allocate([97,32,61,32,105,100,105,118,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,47,61,32,98,32,119,104,101,110,32,95,95,102,117,116,117,114,101,95,95,46,100,105,118,105,115,105,111,110,32,105,115,32,110,111,116,32,105,110,32,101,102,102,101,99,116,46,0] /* a = idiv(a, b) -- Sa */, "i8", ALLOC_NORMAL);
__str136=allocate([95,95,105,100,105,118,95,95,0] /* __idiv__\00 */, "i8", ALLOC_NORMAL);
__str137=allocate([105,102,108,111,111,114,100,105,118,0] /* ifloordiv\00 */, "i8", ALLOC_NORMAL);
__str138=allocate([97,32,61,32,105,102,108,111,111,114,100,105,118,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,47,47,61,32,98,46,0] /* a = ifloordiv(a, b)  */, "i8", ALLOC_NORMAL);
__str139=allocate([95,95,105,102,108,111,111,114,100,105,118,95,95,0] /* __ifloordiv__\00 */, "i8", ALLOC_NORMAL);
__str140=allocate([105,116,114,117,101,100,105,118,0] /* itruediv\00 */, "i8", ALLOC_NORMAL);
__str141=allocate([97,32,61,32,105,116,114,117,101,100,105,118,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,47,61,32,98,32,119,104,101,110,32,95,95,102,117,116,117,114,101,95,95,46,100,105,118,105,115,105,111,110,32,105,115,32,105,110,32,101,102,102,101,99,116,46,0] /* a = itruediv(a, b) - */, "i8", ALLOC_NORMAL);
__str142=allocate([95,95,105,116,114,117,101,100,105,118,95,95,0] /* __itruediv__\00 */, "i8", ALLOC_NORMAL);
__str143=allocate([105,109,111,100,0] /* imod\00 */, "i8", ALLOC_NORMAL);
__str144=allocate([97,32,61,32,105,109,111,100,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,37,61,32,98,46,0] /* a = imod(a, b) -- Sa */, "i8", ALLOC_NORMAL);
__str145=allocate([95,95,105,109,111,100,95,95,0] /* __imod__\00 */, "i8", ALLOC_NORMAL);
__str146=allocate([105,108,115,104,105,102,116,0] /* ilshift\00 */, "i8", ALLOC_NORMAL);
__str147=allocate([97,32,61,32,105,108,115,104,105,102,116,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,60,60,61,32,98,46,0] /* a = ilshift(a, b) -- */, "i8", ALLOC_NORMAL);
__str148=allocate([95,95,105,108,115,104,105,102,116,95,95,0] /* __ilshift__\00 */, "i8", ALLOC_NORMAL);
__str149=allocate([105,114,115,104,105,102,116,0] /* irshift\00 */, "i8", ALLOC_NORMAL);
__str150=allocate([97,32,61,32,105,114,115,104,105,102,116,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,62,62,61,32,98,46,0] /* a = irshift(a, b) -- */, "i8", ALLOC_NORMAL);
__str151=allocate([95,95,105,114,115,104,105,102,116,95,95,0] /* __irshift__\00 */, "i8", ALLOC_NORMAL);
__str152=allocate([105,97,110,100,0] /* iand\00 */, "i8", ALLOC_NORMAL);
__str153=allocate([97,32,61,32,105,97,110,100,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,38,61,32,98,46,0] /* a = iand(a, b) -- Sa */, "i8", ALLOC_NORMAL);
__str154=allocate([95,95,105,97,110,100,95,95,0] /* __iand__\00 */, "i8", ALLOC_NORMAL);
__str155=allocate([105,120,111,114,0] /* ixor\00 */, "i8", ALLOC_NORMAL);
__str156=allocate([97,32,61,32,105,120,111,114,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,94,61,32,98,46,0] /* a = ixor(a, b) -- Sa */, "i8", ALLOC_NORMAL);
__str157=allocate([95,95,105,120,111,114,95,95,0] /* __ixor__\00 */, "i8", ALLOC_NORMAL);
__str158=allocate([105,111,114,0] /* ior\00 */, "i8", ALLOC_NORMAL);
__str159=allocate([97,32,61,32,105,111,114,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,124,61,32,98,46,0] /* a = ior(a, b) -- Sam */, "i8", ALLOC_NORMAL);
__str160=allocate([95,95,105,111,114,95,95,0] /* __ior__\00 */, "i8", ALLOC_NORMAL);
__str161=allocate([99,111,110,99,97,116,0] /* concat\00 */, "i8", ALLOC_NORMAL);
__str162=allocate([99,111,110,99,97,116,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,43,32,98,44,32,102,111,114,32,97,32,97,110,100,32,98,32,115,101,113,117,101,110,99,101,115,46,0] /* concat(a, b) -- Same */, "i8", ALLOC_NORMAL);
__str163=allocate([95,95,99,111,110,99,97,116,95,95,0] /* __concat__\00 */, "i8", ALLOC_NORMAL);
__str164=allocate([114,101,112,101,97,116,0] /* repeat\00 */, "i8", ALLOC_NORMAL);
__str165=allocate([114,101,112,101,97,116,40,97,44,32,98,41,32,45,45,32,82,101,116,117,114,110,32,97,32,42,32,98,44,32,119,104,101,114,101,32,97,32,105,115,32,97,32,115,101,113,117,101,110,99,101,44,32,97,110,100,32,98,32,105,115,32,97,110,32,105,110,116,101,103,101,114,46,0] /* repeat(a, b) -- Retu */, "i8", ALLOC_NORMAL);
__str166=allocate([95,95,114,101,112,101,97,116,95,95,0] /* __repeat__\00 */, "i8", ALLOC_NORMAL);
__str167=allocate([105,99,111,110,99,97,116,0] /* iconcat\00 */, "i8", ALLOC_NORMAL);
__str168=allocate([97,32,61,32,105,99,111,110,99,97,116,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,43,61,32,98,44,32,102,111,114,32,97,32,97,110,100,32,98,32,115,101,113,117,101,110,99,101,115,46,0] /* a = iconcat(a, b) -- */, "i8", ALLOC_NORMAL);
__str169=allocate([95,95,105,99,111,110,99,97,116,95,95,0] /* __iconcat__\00 */, "i8", ALLOC_NORMAL);
__str170=allocate([105,114,101,112,101,97,116,0] /* irepeat\00 */, "i8", ALLOC_NORMAL);
__str171=allocate([97,32,61,32,105,114,101,112,101,97,116,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,42,61,32,98,44,32,119,104,101,114,101,32,97,32,105,115,32,97,32,115,101,113,117,101,110,99,101,44,32,97,110,100,32,98,32,105,115,32,97,110,32,105,110,116,101,103,101,114,46,0] /* a = irepeat(a, b) -- */, "i8", ALLOC_NORMAL);
__str172=allocate([95,95,105,114,101,112,101,97,116,95,95,0] /* __irepeat__\00 */, "i8", ALLOC_NORMAL);
__str173=allocate([103,101,116,105,116,101,109,0] /* getitem\00 */, "i8", ALLOC_NORMAL);
__str174=allocate([103,101,116,105,116,101,109,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,91,98,93,46,0] /* getitem(a, b) -- Sam */, "i8", ALLOC_NORMAL);
__str175=allocate([95,95,103,101,116,105,116,101,109,95,95,0] /* __getitem__\00 */, "i8", ALLOC_NORMAL);
__str176=allocate([115,101,116,105,116,101,109,0] /* setitem\00 */, "i8", ALLOC_NORMAL);
__str177=allocate([115,101,116,105,116,101,109,40,97,44,32,98,44,32,99,41,32,45,45,32,83,97,109,101,32,97,115,32,97,91,98,93,32,61,32,99,46,0] /* setitem(a, b, c) --  */, "i8", ALLOC_NORMAL);
__str178=allocate([95,95,115,101,116,105,116,101,109,95,95,0] /* __setitem__\00 */, "i8", ALLOC_NORMAL);
__str179=allocate([100,101,108,105,116,101,109,0] /* delitem\00 */, "i8", ALLOC_NORMAL);
__str180=allocate([100,101,108,105,116,101,109,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,100,101,108,32,97,91,98,93,46,0] /* delitem(a, b) -- Sam */, "i8", ALLOC_NORMAL);
__str181=allocate([95,95,100,101,108,105,116,101,109,95,95,0] /* __delitem__\00 */, "i8", ALLOC_NORMAL);
__str182=allocate([112,111,119,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,42,42,32,98,46,0] /* pow(a, b) -- Same as */, "i8", ALLOC_NORMAL);
__str183=allocate([95,95,112,111,119,95,95,0] /* __pow__\00 */, "i8", ALLOC_NORMAL);
__str184=allocate([97,32,61,32,105,112,111,119,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,32,42,42,61,32,98,46,0] /* a = ipow(a, b) -- Sa */, "i8", ALLOC_NORMAL);
__str185=allocate([95,95,105,112,111,119,95,95,0] /* __ipow__\00 */, "i8", ALLOC_NORMAL);
__str186=allocate([103,101,116,115,108,105,99,101,0] /* getslice\00 */, "i8", ALLOC_NORMAL);
__str187=allocate([103,101,116,115,108,105,99,101,40,97,44,32,98,44,32,99,41,32,45,45,32,83,97,109,101,32,97,115,32,97,91,98,58,99,93,46,0] /* getslice(a, b, c) -- */, "i8", ALLOC_NORMAL);
__str188=allocate([95,95,103,101,116,115,108,105,99,101,95,95,0] /* __getslice__\00 */, "i8", ALLOC_NORMAL);
__str189=allocate([115,101,116,115,108,105,99,101,0] /* setslice\00 */, "i8", ALLOC_NORMAL);
__str190=allocate([115,101,116,115,108,105,99,101,40,97,44,32,98,44,32,99,44,32,100,41,32,45,45,32,83,97,109,101,32,97,115,32,97,91,98,58,99,93,32,61,32,100,46,0] /* setslice(a, b, c, d) */, "i8", ALLOC_NORMAL);
__str191=allocate([95,95,115,101,116,115,108,105,99,101,95,95,0] /* __setslice__\00 */, "i8", ALLOC_NORMAL);
__str192=allocate([100,101,108,115,108,105,99,101,0] /* delslice\00 */, "i8", ALLOC_NORMAL);
__str193=allocate([100,101,108,115,108,105,99,101,40,97,44,32,98,44,32,99,41,32,45,45,32,83,97,109,101,32,97,115,32,100,101,108,32,97,91,98,58,99,93,46,0] /* delslice(a, b, c) -- */, "i8", ALLOC_NORMAL);
__str194=allocate([95,95,100,101,108,115,108,105,99,101,95,95,0] /* __delslice__\00 */, "i8", ALLOC_NORMAL);
__str195=allocate([108,116,0] /* lt\00 */, "i8", ALLOC_NORMAL);
__str196=allocate([108,116,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,60,98,46,0] /* lt(a, b) -- Same as  */, "i8", ALLOC_NORMAL);
__str197=allocate([95,95,108,116,95,95,0] /* __lt__\00 */, "i8", ALLOC_NORMAL);
__str198=allocate([108,101,0] /* le\00 */, "i8", ALLOC_NORMAL);
__str199=allocate([108,101,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,60,61,98,46,0] /* le(a, b) -- Same as  */, "i8", ALLOC_NORMAL);
__str200=allocate([95,95,108,101,95,95,0] /* __le__\00 */, "i8", ALLOC_NORMAL);
__str201=allocate([101,113,0] /* eq\00 */, "i8", ALLOC_NORMAL);
__str202=allocate([101,113,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,61,61,98,46,0] /* eq(a, b) -- Same as  */, "i8", ALLOC_NORMAL);
__str203=allocate([95,95,101,113,95,95,0] /* __eq__\00 */, "i8", ALLOC_NORMAL);
__str204=allocate([110,101,0] /* ne\00 */, "i8", ALLOC_NORMAL);
__str205=allocate([110,101,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,33,61,98,46,0] /* ne(a, b) -- Same as  */, "i8", ALLOC_NORMAL);
__str206=allocate([95,95,110,101,95,95,0] /* __ne__\00 */, "i8", ALLOC_NORMAL);
__str207=allocate([103,116,0] /* gt\00 */, "i8", ALLOC_NORMAL);
__str208=allocate([103,116,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,62,98,46,0] /* gt(a, b) -- Same as  */, "i8", ALLOC_NORMAL);
__str209=allocate([95,95,103,116,95,95,0] /* __gt__\00 */, "i8", ALLOC_NORMAL);
__str210=allocate([103,101,0] /* ge\00 */, "i8", ALLOC_NORMAL);
__str211=allocate([103,101,40,97,44,32,98,41,32,45,45,32,83,97,109,101,32,97,115,32,97,62,61,98,46,0] /* ge(a, b) -- Same as  */, "i8", ALLOC_NORMAL);
__str212=allocate([95,95,103,101,95,95,0] /* __ge__\00 */, "i8", ALLOC_NORMAL);
_operator_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str213=allocate([105,116,101,109,103,101,116,116,101,114,40,41,0] /* itemgetter()\00 */, "i8", ALLOC_NORMAL);
__str214=allocate([105,116,101,109,103,101,116,116,101,114,0] /* itemgetter\00 */, "i8", ALLOC_NORMAL);
__str215=allocate([40,40,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,105,103,45,62,105,116,101,109,41,41,45,62,111,98,95,116,121,112,101,41,41,45,62,116,112,95,102,108,97,103,115,32,38,32,40,40,49,76,60,60,50,54,41,41,41,32,33,61,32,48,41,0] /* ((((((PyObject_)(ig- */, "i8", ALLOC_NORMAL);
__str216=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,111,112,101,114,97,116,111,114,46,99,0] /* ../cpython/Modules/o */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9242=allocate([105,116,101,109,103,101,116,116,101,114,95,99,97,108,108,0] /* itemgetter_call\00 */, "i8", ALLOC_NORMAL);
__str217=allocate([40,40,40,80,121,86,97,114,79,98,106,101,99,116,42,41,40,105,103,45,62,105,116,101,109,41,41,45,62,111,98,95,115,105,122,101,41,32,61,61,32,110,105,116,101,109,115,0] /* (((PyVarObject_)(ig- */, "i8", ALLOC_NORMAL);
_itemgetter_doc=allocate([105,116,101,109,103,101,116,116,101,114,40,105,116,101,109,44,32,46,46,46,41,32,45,45,62,32,105,116,101,109,103,101,116,116,101,114,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,97,32,99,97,108,108,97,98,108,101,32,111,98,106,101,99,116,32,116,104,97,116,32,102,101,116,99,104,101,115,32,116,104,101,32,103,105,118,101,110,32,105,116,101,109,40,115,41,32,102,114,111,109,32,105,116,115,32,111,112,101,114,97,110,100,46,10,65,102,116,101,114,44,32,102,61,105,116,101,109,103,101,116,116,101,114,40,50,41,44,32,116,104,101,32,99,97,108,108,32,102,40,114,41,32,114,101,116,117,114,110,115,32,114,91,50,93,46,10,65,102,116,101,114,44,32,103,61,105,116,101,109,103,101,116,116,101,114,40,50,44,53,44,51,41,44,32,116,104,101,32,99,97,108,108,32,103,40,114,41,32,114,101,116,117,114,110,115,32,40,114,91,50,93,44,32,114,91,53,93,44,32,114,91,51,93,41,0] /* itemgetter(item, ... */, "i8", ALLOC_NORMAL);
__str218=allocate([111,112,101,114,97,116,111,114,46,105,116,101,109,103,101,116,116,101,114,0] /* operator.itemgetter\ */, "i8", ALLOC_NORMAL);
_itemgetter_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str219=allocate([97,116,116,114,103,101,116,116,101,114,40,41,0] /* attrgetter()\00 */, "i8", ALLOC_NORMAL);
__str220=allocate([97,116,116,114,103,101,116,116,101,114,0] /* attrgetter\00 */, "i8", ALLOC_NORMAL);
__str221=allocate([97,116,116,114,105,98,117,116,101,32,110,97,109,101,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,0] /* attribute name must  */, "i8", ALLOC_NORMAL);
__str222=allocate([40,40,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,97,103,45,62,97,116,116,114,41,41,45,62,111,98,95,116,121,112,101,41,41,45,62,116,112,95,102,108,97,103,115,32,38,32,40,40,49,76,60,60,50,54,41,41,41,32,33,61,32,48,41,0] /* ((((((PyObject_)(ag- */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9429=allocate([97,116,116,114,103,101,116,116,101,114,95,99,97,108,108,0] /* attrgetter_call\00 */, "i8", ALLOC_NORMAL);
__str223=allocate([40,40,40,80,121,86,97,114,79,98,106,101,99,116,42,41,40,97,103,45,62,97,116,116,114,41,41,45,62,111,98,95,115,105,122,101,41,32,61,61,32,110,97,116,116,114,115,0] /* (((PyVarObject_)(ag- */, "i8", ALLOC_NORMAL);
_attrgetter_doc=allocate([97,116,116,114,103,101,116,116,101,114,40,97,116,116,114,44,32,46,46,46,41,32,45,45,62,32,97,116,116,114,103,101,116,116,101,114,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,97,32,99,97,108,108,97,98,108,101,32,111,98,106,101,99,116,32,116,104,97,116,32,102,101,116,99,104,101,115,32,116,104,101,32,103,105,118,101,110,32,97,116,116,114,105,98,117,116,101,40,115,41,32,102,114,111,109,32,105,116,115,32,111,112,101,114,97,110,100,46,10,65,102,116,101,114,44,32,102,61,97,116,116,114,103,101,116,116,101,114,40,39,110,97,109,101,39,41,44,32,116,104,101,32,99,97,108,108,32,102,40,114,41,32,114,101,116,117,114,110,115,32,114,46,110,97,109,101,46,10,65,102,116,101,114,44,32,103,61,97,116,116,114,103,101,116,116,101,114,40,39,110,97,109,101,39,44,32,39,100,97,116,101,39,41,44,32,116,104,101,32,99,97,108,108,32,103,40,114,41,32,114,101,116,117,114,110,115,32,40,114,46,110,97,109,101,44,32,114,46,100,97,116,101,41,46,10,65,102,116,101,114,44,32,104,61,97,116,116,114,103,101,116,116,101,114,40,39,110,97,109,101,46,102,105,114,115,116,39,44,32,39,110,97,109,101,46,108,97,115,116,39,41,44,32,116,104,101,32,99,97,108,108,32,104,40,114,41,32,114,101,116,117,114,110,115,10,40,114,46,110,97,109,101,46,102,105,114,115,116,44,32,114,46,110,97,109,101,46,108,97,115,116,41,46,0] /* attrgetter(attr, ... */, "i8", ALLOC_NORMAL);
__str224=allocate([111,112,101,114,97,116,111,114,46,97,116,116,114,103,101,116,116,101,114,0] /* operator.attrgetter\ */, "i8", ALLOC_NORMAL);
_attrgetter_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str225=allocate([109,101,116,104,111,100,99,97,108,108,101,114,32,110,101,101,100,115,32,97,116,32,108,101,97,115,116,32,111,110,101,32,97,114,103,117,109,101,110,116,44,32,116,104,101,32,109,101,116,104,111,100,32,110,97,109,101,0] /* methodcaller needs a */, "i8", ALLOC_NORMAL);
__str226=allocate([109,101,116,104,111,100,99,97,108,108,101,114,0] /* methodcaller\00 */, "i8", ALLOC_NORMAL);
_methodcaller_doc=allocate([109,101,116,104,111,100,99,97,108,108,101,114,40,110,97,109,101,44,32,46,46,46,41,32,45,45,62,32,109,101,116,104,111,100,99,97,108,108,101,114,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,97,32,99,97,108,108,97,98,108,101,32,111,98,106,101,99,116,32,116,104,97,116,32,99,97,108,108,115,32,116,104,101,32,103,105,118,101,110,32,109,101,116,104,111,100,32,111,110,32,105,116,115,32,111,112,101,114,97,110,100,46,10,65,102,116,101,114,44,32,102,32,61,32,109,101,116,104,111,100,99,97,108,108,101,114,40,39,110,97,109,101,39,41,44,32,116,104,101,32,99,97,108,108,32,102,40,114,41,32,114,101,116,117,114,110,115,32,114,46,110,97,109,101,40,41,46,10,65,102,116,101,114,44,32,103,32,61,32,109,101,116,104,111,100,99,97,108,108,101,114,40,39,110,97,109,101,39,44,32,39,100,97,116,101,39,44,32,102,111,111,61,49,41,44,32,116,104,101,32,99,97,108,108,32,103,40,114,41,32,114,101,116,117,114,110,115,10,114,46,110,97,109,101,40,39,100,97,116,101,39,44,32,102,111,111,61,49,41,46,0] /* methodcaller(name, . */, "i8", ALLOC_NORMAL);
__str227=allocate([111,112,101,114,97,116,111,114,46,109,101,116,104,111,100,99,97,108,108,101,114,0] /* operator.methodcalle */, "i8", ALLOC_NORMAL);
_methodcaller_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str228=allocate([111,112,101,114,97,116,111,114,0] /* operator\00 */, "i8", ALLOC_NORMAL);
HEAP[_operator_methods]=__str50;
HEAP[_operator_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_operator_methods+12]=__str51;
HEAP[_operator_methods+16]=__str52;
HEAP[_operator_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_operator_methods+28]=__str53;
HEAP[_operator_methods+32]=__str54;
HEAP[_operator_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_operator_methods+44]=__str55;
HEAP[_operator_methods+48]=__str56;
HEAP[_operator_methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_operator_methods+60]=__str57;
HEAP[_operator_methods+64]=__str58;
HEAP[_operator_methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_operator_methods+76]=__str59;
HEAP[_operator_methods+80]=__str60;
HEAP[_operator_methods+84]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_operator_methods+92]=__str59;
HEAP[_operator_methods+96]=__str31;
HEAP[_operator_methods+100]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_operator_methods+108]=__str61;
HEAP[_operator_methods+112]=__str32;
HEAP[_operator_methods+116]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_operator_methods+124]=__str62;
HEAP[_operator_methods+128]=__str33;
HEAP[_operator_methods+132]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_operator_methods+140]=__str63;
HEAP[_operator_methods+144]=__str64;
HEAP[_operator_methods+148]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_operator_methods+156]=__str65;
HEAP[_operator_methods+160]=__str45;
HEAP[_operator_methods+164]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_operator_methods+172]=__str66;
HEAP[_operator_methods+176]=__str46;
HEAP[_operator_methods+180]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_operator_methods+188]=__str67;
HEAP[_operator_methods+192]=__str68;
HEAP[_operator_methods+196]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_operator_methods+204]=__str69;
HEAP[_operator_methods+208]=__str70;
HEAP[_operator_methods+212]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_operator_methods+220]=__str69;
HEAP[_operator_methods+224]=__str71;
HEAP[_operator_methods+228]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_operator_methods+236]=__str72;
HEAP[_operator_methods+240]=__str73;
HEAP[_operator_methods+244]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_operator_methods+252]=__str72;
HEAP[_operator_methods+256]=__str74;
HEAP[_operator_methods+260]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_operator_methods+268]=__str75;
HEAP[_operator_methods+272]=__str76;
HEAP[_operator_methods+276]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_operator_methods+284]=__str75;
HEAP[_operator_methods+288]=__str77;
HEAP[_operator_methods+292]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_operator_methods+300]=__str78;
HEAP[_operator_methods+304]=__str79;
HEAP[_operator_methods+308]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_operator_methods+316]=__str78;
HEAP[_operator_methods+320]=__str80;
HEAP[_operator_methods+324]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_operator_methods+332]=__str81;
HEAP[_operator_methods+336]=__str82;
HEAP[_operator_methods+340]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_operator_methods+348]=__str81;
HEAP[_operator_methods+352]=__str83;
HEAP[_operator_methods+356]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_operator_methods+364]=__str84;
HEAP[_operator_methods+368]=__str85;
HEAP[_operator_methods+372]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_operator_methods+380]=__str84;
HEAP[_operator_methods+384]=__str86;
HEAP[_operator_methods+388]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_operator_methods+396]=__str87;
HEAP[_operator_methods+400]=__str88;
HEAP[_operator_methods+404]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_operator_methods+412]=__str87;
HEAP[_operator_methods+416]=__str89;
HEAP[_operator_methods+420]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_operator_methods+428]=__str90;
HEAP[_operator_methods+432]=__str91;
HEAP[_operator_methods+436]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_operator_methods+444]=__str90;
HEAP[_operator_methods+448]=__str92;
HEAP[_operator_methods+452]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_operator_methods+460]=__str93;
HEAP[_operator_methods+464]=__str94;
HEAP[_operator_methods+468]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_operator_methods+476]=__str93;
HEAP[_operator_methods+480]=__str95;
HEAP[_operator_methods+484]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_operator_methods+492]=__str96;
HEAP[_operator_methods+496]=__str97;
HEAP[_operator_methods+500]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_operator_methods+508]=__str96;
HEAP[_operator_methods+512]=__str98;
HEAP[_operator_methods+516]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_operator_methods+524]=__str99;
HEAP[_operator_methods+528]=__str100;
HEAP[_operator_methods+532]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_operator_methods+540]=__str99;
HEAP[_operator_methods+544]=__str101;
HEAP[_operator_methods+548]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_operator_methods+556]=__str102;
HEAP[_operator_methods+560]=__str103;
HEAP[_operator_methods+564]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_operator_methods+572]=__str102;
HEAP[_operator_methods+576]=__str104;
HEAP[_operator_methods+580]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_operator_methods+588]=__str105;
HEAP[_operator_methods+592]=__str106;
HEAP[_operator_methods+596]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_operator_methods+604]=__str105;
HEAP[_operator_methods+608]=__str107;
HEAP[_operator_methods+612]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_operator_methods+620]=__str108;
HEAP[_operator_methods+624]=__str109;
HEAP[_operator_methods+628]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_operator_methods+636]=__str108;
HEAP[_operator_methods+640]=__str110;
HEAP[_operator_methods+644]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_operator_methods+652]=__str111;
HEAP[_operator_methods+656]=__str112;
HEAP[_operator_methods+660]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_operator_methods+668]=__str111;
HEAP[_operator_methods+672]=__str113;
HEAP[_operator_methods+676]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_operator_methods+684]=__str114;
HEAP[_operator_methods+688]=__str115;
HEAP[_operator_methods+692]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_operator_methods+700]=__str114;
HEAP[_operator_methods+704]=__str116;
HEAP[_operator_methods+708]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_operator_methods+716]=__str117;
HEAP[_operator_methods+720]=__str118;
HEAP[_operator_methods+724]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_operator_methods+732]=__str117;
HEAP[_operator_methods+736]=__str119;
HEAP[_operator_methods+740]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_operator_methods+748]=__str120;
HEAP[_operator_methods+752]=__str121;
HEAP[_operator_methods+756]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_operator_methods+764]=__str120;
HEAP[_operator_methods+768]=__str122;
HEAP[_operator_methods+772]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_operator_methods+780]=__str123;
HEAP[_operator_methods+784]=__str124;
HEAP[_operator_methods+788]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_operator_methods+796]=__str123;
HEAP[_operator_methods+800]=__str125;
HEAP[_operator_methods+804]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_operator_methods+812]=__str126;
HEAP[_operator_methods+816]=__str127;
HEAP[_operator_methods+820]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_operator_methods+828]=__str126;
HEAP[_operator_methods+832]=__str128;
HEAP[_operator_methods+836]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_operator_methods+844]=__str129;
HEAP[_operator_methods+848]=__str130;
HEAP[_operator_methods+852]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_operator_methods+860]=__str129;
HEAP[_operator_methods+864]=__str131;
HEAP[_operator_methods+868]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_operator_methods+876]=__str132;
HEAP[_operator_methods+880]=__str133;
HEAP[_operator_methods+884]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_operator_methods+892]=__str132;
HEAP[_operator_methods+896]=__str134;
HEAP[_operator_methods+900]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_operator_methods+908]=__str135;
HEAP[_operator_methods+912]=__str136;
HEAP[_operator_methods+916]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_operator_methods+924]=__str135;
HEAP[_operator_methods+928]=__str137;
HEAP[_operator_methods+932]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[_operator_methods+940]=__str138;
HEAP[_operator_methods+944]=__str139;
HEAP[_operator_methods+948]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[_operator_methods+956]=__str138;
HEAP[_operator_methods+960]=__str140;
HEAP[_operator_methods+964]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[_operator_methods+972]=__str141;
HEAP[_operator_methods+976]=__str142;
HEAP[_operator_methods+980]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[_operator_methods+988]=__str141;
HEAP[_operator_methods+992]=__str143;
HEAP[_operator_methods+996]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[_operator_methods+1004]=__str144;
HEAP[_operator_methods+1008]=__str145;
HEAP[_operator_methods+1012]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[_operator_methods+1020]=__str144;
HEAP[_operator_methods+1024]=__str146;
HEAP[_operator_methods+1028]=(FUNCTION_TABLE_OFFSET + 76);
HEAP[_operator_methods+1036]=__str147;
HEAP[_operator_methods+1040]=__str148;
HEAP[_operator_methods+1044]=(FUNCTION_TABLE_OFFSET + 76);
HEAP[_operator_methods+1052]=__str147;
HEAP[_operator_methods+1056]=__str149;
HEAP[_operator_methods+1060]=(FUNCTION_TABLE_OFFSET + 78);
HEAP[_operator_methods+1068]=__str150;
HEAP[_operator_methods+1072]=__str151;
HEAP[_operator_methods+1076]=(FUNCTION_TABLE_OFFSET + 78);
HEAP[_operator_methods+1084]=__str150;
HEAP[_operator_methods+1088]=__str152;
HEAP[_operator_methods+1092]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_operator_methods+1100]=__str153;
HEAP[_operator_methods+1104]=__str154;
HEAP[_operator_methods+1108]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_operator_methods+1116]=__str153;
HEAP[_operator_methods+1120]=__str155;
HEAP[_operator_methods+1124]=(FUNCTION_TABLE_OFFSET + 82);
HEAP[_operator_methods+1132]=__str156;
HEAP[_operator_methods+1136]=__str157;
HEAP[_operator_methods+1140]=(FUNCTION_TABLE_OFFSET + 82);
HEAP[_operator_methods+1148]=__str156;
HEAP[_operator_methods+1152]=__str158;
HEAP[_operator_methods+1156]=(FUNCTION_TABLE_OFFSET + 84);
HEAP[_operator_methods+1164]=__str159;
HEAP[_operator_methods+1168]=__str160;
HEAP[_operator_methods+1172]=(FUNCTION_TABLE_OFFSET + 84);
HEAP[_operator_methods+1180]=__str159;
HEAP[_operator_methods+1184]=__str161;
HEAP[_operator_methods+1188]=(FUNCTION_TABLE_OFFSET + 86);
HEAP[_operator_methods+1196]=__str162;
HEAP[_operator_methods+1200]=__str163;
HEAP[_operator_methods+1204]=(FUNCTION_TABLE_OFFSET + 86);
HEAP[_operator_methods+1212]=__str162;
HEAP[_operator_methods+1216]=__str164;
HEAP[_operator_methods+1220]=(FUNCTION_TABLE_OFFSET + 88);
HEAP[_operator_methods+1228]=__str165;
HEAP[_operator_methods+1232]=__str166;
HEAP[_operator_methods+1236]=(FUNCTION_TABLE_OFFSET + 88);
HEAP[_operator_methods+1244]=__str165;
HEAP[_operator_methods+1248]=__str167;
HEAP[_operator_methods+1252]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_operator_methods+1260]=__str168;
HEAP[_operator_methods+1264]=__str169;
HEAP[_operator_methods+1268]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_operator_methods+1276]=__str168;
HEAP[_operator_methods+1280]=__str170;
HEAP[_operator_methods+1284]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_operator_methods+1292]=__str171;
HEAP[_operator_methods+1296]=__str172;
HEAP[_operator_methods+1300]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_operator_methods+1308]=__str171;
HEAP[_operator_methods+1312]=__str173;
HEAP[_operator_methods+1316]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_operator_methods+1324]=__str174;
HEAP[_operator_methods+1328]=__str175;
HEAP[_operator_methods+1332]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_operator_methods+1340]=__str174;
HEAP[_operator_methods+1344]=__str176;
HEAP[_operator_methods+1348]=(FUNCTION_TABLE_OFFSET + 96);
HEAP[_operator_methods+1356]=__str177;
HEAP[_operator_methods+1360]=__str178;
HEAP[_operator_methods+1364]=(FUNCTION_TABLE_OFFSET + 96);
HEAP[_operator_methods+1372]=__str177;
HEAP[_operator_methods+1376]=__str179;
HEAP[_operator_methods+1380]=(FUNCTION_TABLE_OFFSET + 98);
HEAP[_operator_methods+1388]=__str180;
HEAP[_operator_methods+1392]=__str181;
HEAP[_operator_methods+1396]=(FUNCTION_TABLE_OFFSET + 98);
HEAP[_operator_methods+1404]=__str180;
HEAP[_operator_methods+1408]=__str43;
HEAP[_operator_methods+1412]=(FUNCTION_TABLE_OFFSET + 100);
HEAP[_operator_methods+1420]=__str182;
HEAP[_operator_methods+1424]=__str183;
HEAP[_operator_methods+1428]=(FUNCTION_TABLE_OFFSET + 100);
HEAP[_operator_methods+1436]=__str182;
HEAP[_operator_methods+1440]=__str44;
HEAP[_operator_methods+1444]=(FUNCTION_TABLE_OFFSET + 102);
HEAP[_operator_methods+1452]=__str184;
HEAP[_operator_methods+1456]=__str185;
HEAP[_operator_methods+1460]=(FUNCTION_TABLE_OFFSET + 102);
HEAP[_operator_methods+1468]=__str184;
HEAP[_operator_methods+1472]=__str186;
HEAP[_operator_methods+1476]=(FUNCTION_TABLE_OFFSET + 104);
HEAP[_operator_methods+1484]=__str187;
HEAP[_operator_methods+1488]=__str188;
HEAP[_operator_methods+1492]=(FUNCTION_TABLE_OFFSET + 104);
HEAP[_operator_methods+1500]=__str187;
HEAP[_operator_methods+1504]=__str189;
HEAP[_operator_methods+1508]=(FUNCTION_TABLE_OFFSET + 106);
HEAP[_operator_methods+1516]=__str190;
HEAP[_operator_methods+1520]=__str191;
HEAP[_operator_methods+1524]=(FUNCTION_TABLE_OFFSET + 106);
HEAP[_operator_methods+1532]=__str190;
HEAP[_operator_methods+1536]=__str192;
HEAP[_operator_methods+1540]=(FUNCTION_TABLE_OFFSET + 108);
HEAP[_operator_methods+1548]=__str193;
HEAP[_operator_methods+1552]=__str194;
HEAP[_operator_methods+1556]=(FUNCTION_TABLE_OFFSET + 108);
HEAP[_operator_methods+1564]=__str193;
HEAP[_operator_methods+1568]=__str195;
HEAP[_operator_methods+1572]=(FUNCTION_TABLE_OFFSET + 110);
HEAP[_operator_methods+1580]=__str196;
HEAP[_operator_methods+1584]=__str197;
HEAP[_operator_methods+1588]=(FUNCTION_TABLE_OFFSET + 110);
HEAP[_operator_methods+1596]=__str196;
HEAP[_operator_methods+1600]=__str198;
HEAP[_operator_methods+1604]=(FUNCTION_TABLE_OFFSET + 112);
HEAP[_operator_methods+1612]=__str199;
HEAP[_operator_methods+1616]=__str200;
HEAP[_operator_methods+1620]=(FUNCTION_TABLE_OFFSET + 112);
HEAP[_operator_methods+1628]=__str199;
HEAP[_operator_methods+1632]=__str201;
HEAP[_operator_methods+1636]=(FUNCTION_TABLE_OFFSET + 114);
HEAP[_operator_methods+1644]=__str202;
HEAP[_operator_methods+1648]=__str203;
HEAP[_operator_methods+1652]=(FUNCTION_TABLE_OFFSET + 114);
HEAP[_operator_methods+1660]=__str202;
HEAP[_operator_methods+1664]=__str204;
HEAP[_operator_methods+1668]=(FUNCTION_TABLE_OFFSET + 116);
HEAP[_operator_methods+1676]=__str205;
HEAP[_operator_methods+1680]=__str206;
HEAP[_operator_methods+1684]=(FUNCTION_TABLE_OFFSET + 116);
HEAP[_operator_methods+1692]=__str205;
HEAP[_operator_methods+1696]=__str207;
HEAP[_operator_methods+1700]=(FUNCTION_TABLE_OFFSET + 118);
HEAP[_operator_methods+1708]=__str208;
HEAP[_operator_methods+1712]=__str209;
HEAP[_operator_methods+1716]=(FUNCTION_TABLE_OFFSET + 118);
HEAP[_operator_methods+1724]=__str208;
HEAP[_operator_methods+1728]=__str210;
HEAP[_operator_methods+1732]=(FUNCTION_TABLE_OFFSET + 120);
HEAP[_operator_methods+1740]=__str211;
HEAP[_operator_methods+1744]=__str212;
HEAP[_operator_methods+1748]=(FUNCTION_TABLE_OFFSET + 120);
HEAP[_operator_methods+1756]=__str211;
HEAP[_itemgetter_type+12]=__str218;
HEAP[_itemgetter_type+24]=(FUNCTION_TABLE_OFFSET + 122);
HEAP[_itemgetter_type+64]=(FUNCTION_TABLE_OFFSET + 124);
HEAP[_itemgetter_type+72]=(FUNCTION_TABLE_OFFSET + 126);
HEAP[_itemgetter_type+88]=_itemgetter_doc;
HEAP[_itemgetter_type+92]=(FUNCTION_TABLE_OFFSET + 128);
HEAP[_itemgetter_type+156]=(FUNCTION_TABLE_OFFSET + 130);
HEAP[_attrgetter_type+12]=__str224;
HEAP[_attrgetter_type+24]=(FUNCTION_TABLE_OFFSET + 132);
HEAP[_attrgetter_type+64]=(FUNCTION_TABLE_OFFSET + 134);
HEAP[_attrgetter_type+72]=(FUNCTION_TABLE_OFFSET + 126);
HEAP[_attrgetter_type+88]=_attrgetter_doc;
HEAP[_attrgetter_type+92]=(FUNCTION_TABLE_OFFSET + 136);
HEAP[_attrgetter_type+156]=(FUNCTION_TABLE_OFFSET + 138);
HEAP[_methodcaller_type+12]=__str227;
HEAP[_methodcaller_type+24]=(FUNCTION_TABLE_OFFSET + 140);
HEAP[_methodcaller_type+64]=(FUNCTION_TABLE_OFFSET + 142);
HEAP[_methodcaller_type+72]=(FUNCTION_TABLE_OFFSET + 126);
HEAP[_methodcaller_type+88]=_methodcaller_doc;
HEAP[_methodcaller_type+92]=(FUNCTION_TABLE_OFFSET + 144);
HEAP[_methodcaller_type+156]=(FUNCTION_TABLE_OFFSET + 146);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

