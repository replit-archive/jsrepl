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
  
var $struct_flock___SIZE = 24; // %struct.flock
  var $struct_flock___FLATTENER = [0,2,4,12,20];
var __str;

var __str1;

var __str2;
var _fcntl_doc;
var __str3;
var __str4;
var __str5;
var __str6;
var _ioctl_doc;
var __str7;

var _flock_doc;
var __str8;
var __str9;
var _lockf_doc;
var __str10;
var __str11;
var __str12;
var __str13;
var _fcntl_methods;
var _module_doc;
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






















  function _conv_descriptor($object, $target) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $object_addr;
        var $target_addr;
        var $retval;
        var $0;
        var $fd;
        $object_addr=$object;
        $target_addr=$target;
        var $1=$object_addr; //@line 21 "fcntlmodule.c"
        var $2=_PyObject_AsFileDescriptor($1); //@line 21 "fcntlmodule.c"
        $fd=$2; //@line 21 "fcntlmodule.c"
        var $3=$fd; //@line 23 "fcntlmodule.c"
        var $4=($3) < 0; //@line 23 "fcntlmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 23 "fcntlmodule.c"
      case 1: // $bb
        $0=0; //@line 24 "fcntlmodule.c"
        __label__ = 3; break; //@line 24 "fcntlmodule.c"
      case 2: // $bb1
        var $5=$target_addr; //@line 25 "fcntlmodule.c"
        var $6=$fd; //@line 25 "fcntlmodule.c"
        HEAP[$5]=$6; //@line 25 "fcntlmodule.c"
        $0=1; //@line 26 "fcntlmodule.c"
        __label__ = 3; break; //@line 26 "fcntlmodule.c"
      case 3: // $bb2
        var $7=$0; //@line 24 "fcntlmodule.c"
        $retval=$7; //@line 24 "fcntlmodule.c"
        var $retval3=$retval; //@line 24 "fcntlmodule.c"
        ;
        return $retval3; //@line 24 "fcntlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _fcntl_fcntl($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 1044; _memset(__stackBase__, 0, 1044);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $fd=__stackBase__;
        var $code=__stackBase__+4;
        var $arg=__stackBase__+8;
        var $ret;
        var $str=__stackBase__+12;
        var $len=__stackBase__+16;
        var $buf=__stackBase__+20;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 43 "fcntlmodule.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str, allocate([(FUNCTION_TABLE_OFFSET + 2),0,0,0,$fd,0,0,0,$code,0,0,0,$str,0,0,0,$len,0,0,0], ["i32 (%struct.PyObject*, i32*)*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 43 "fcntlmodule.c"
        var $3=($2)!=0; //@line 43 "fcntlmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 43 "fcntlmodule.c"
      case 1: // $bb
        var $4=HEAP[$len]; //@line 45 "fcntlmodule.c"
        var $5=($4) > 1024; //@line 45 "fcntlmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 45 "fcntlmodule.c"
      case 2: // $bb1
        var $6=HEAP[_PyExc_ValueError]; //@line 46 "fcntlmodule.c"
        _PyErr_SetString($6, __str1); //@line 46 "fcntlmodule.c"
        $0=0; //@line 48 "fcntlmodule.c"
        __label__ = 11; break; //@line 48 "fcntlmodule.c"
      case 3: // $bb2
        var $7=HEAP[$len]; //@line 50 "fcntlmodule.c"
        var $8=HEAP[$str]; //@line 50 "fcntlmodule.c"
        var $buf3=$buf; //@line 50 "fcntlmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($buf3, $8, $7, 1, 0); //@line 50 "fcntlmodule.c"
        var $9=HEAP[$code]; //@line 52 "fcntlmodule.c"
        var $10=HEAP[$fd]; //@line 52 "fcntlmodule.c"
        var $buf4=$buf; //@line 52 "fcntlmodule.c"
        var $11=_fcntl($10, $9, allocate([$buf4,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 52 "fcntlmodule.c"
        $ret=$11; //@line 52 "fcntlmodule.c"
        var $12=$ret; //@line 54 "fcntlmodule.c"
        var $13=($12) < 0; //@line 54 "fcntlmodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 54 "fcntlmodule.c"
      case 4: // $bb5
        var $14=HEAP[_PyExc_IOError]; //@line 55 "fcntlmodule.c"
        var $15=_PyErr_SetFromErrno($14); //@line 55 "fcntlmodule.c"
        $0=0; //@line 56 "fcntlmodule.c"
        __label__ = 11; break; //@line 56 "fcntlmodule.c"
      case 5: // $bb6
        var $16=HEAP[$len]; //@line 58 "fcntlmodule.c"
        var $buf7=$buf; //@line 58 "fcntlmodule.c"
        var $17=_PyString_FromStringAndSize($buf7, $16); //@line 58 "fcntlmodule.c"
        $0=$17; //@line 58 "fcntlmodule.c"
        __label__ = 11; break; //@line 58 "fcntlmodule.c"
      case 6: // $bb8
        _PyErr_Clear(); //@line 61 "fcntlmodule.c"
        HEAP[$arg]=0; //@line 62 "fcntlmodule.c"
        var $18=$args_addr; //@line 63 "fcntlmodule.c"
        var $19=__PyArg_ParseTuple_SizeT($18, __str2, allocate([(FUNCTION_TABLE_OFFSET + 2),0,0,0,$fd,0,0,0,$code,0,0,0,$arg,0,0,0], ["i32 (%struct.PyObject*, i32*)*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 63 "fcntlmodule.c"
        var $20=($19)==0; //@line 63 "fcntlmodule.c"
        if ($20) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 63 "fcntlmodule.c"
      case 7: // $bb9
        $0=0; //@line 67 "fcntlmodule.c"
        __label__ = 11; break; //@line 67 "fcntlmodule.c"
      case 8: // $bb10
        var $21=HEAP[$arg]; //@line 70 "fcntlmodule.c"
        var $22=HEAP[$code]; //@line 70 "fcntlmodule.c"
        var $23=HEAP[$fd]; //@line 70 "fcntlmodule.c"
        var $24=_fcntl($23, $22, allocate([$21,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 70 "fcntlmodule.c"
        $ret=$24; //@line 70 "fcntlmodule.c"
        var $25=$ret; //@line 72 "fcntlmodule.c"
        var $26=($25) < 0; //@line 72 "fcntlmodule.c"
        if ($26) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 72 "fcntlmodule.c"
      case 9: // $bb11
        var $27=HEAP[_PyExc_IOError]; //@line 73 "fcntlmodule.c"
        var $28=_PyErr_SetFromErrno($27); //@line 73 "fcntlmodule.c"
        $0=0; //@line 74 "fcntlmodule.c"
        __label__ = 11; break; //@line 74 "fcntlmodule.c"
      case 10: // $bb12
        var $29=$ret; //@line 76 "fcntlmodule.c"
        var $30=_PyInt_FromLong($29); //@line 76 "fcntlmodule.c"
        $0=$30; //@line 76 "fcntlmodule.c"
        __label__ = 11; break; //@line 76 "fcntlmodule.c"
      case 11: // $bb13
        var $31=$0; //@line 48 "fcntlmodule.c"
        $retval=$31; //@line 48 "fcntlmodule.c"
        var $retval14=$retval; //@line 48 "fcntlmodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 48 "fcntlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _fcntl_ioctl($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 1049; _memset(__stackBase__, 0, 1049);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $fd=__stackBase__;
        var $code=__stackBase__+4;
        var $arg=__stackBase__+8;
        var $ret;
        var $str=__stackBase__+12;
        var $len=__stackBase__+16;
        var $mutate_arg=__stackBase__+20;
        var $buf=__stackBase__+24;
        var $arg1;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$mutate_arg]=1; //@line 118 "fcntlmodule.c"
        var $1=$args_addr; //@line 121 "fcntlmodule.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str3, allocate([(FUNCTION_TABLE_OFFSET + 2),0,0,0,$fd,0,0,0,$code,0,0,0,$str,0,0,0,$len,0,0,0,$mutate_arg,0,0,0], ["i32 (%struct.PyObject*, i32*)*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 121 "fcntlmodule.c"
        var $3=($2)!=0; //@line 121 "fcntlmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 17; break; } //@line 121 "fcntlmodule.c"
      case 1: // $bb
        var $4=HEAP[$mutate_arg]; //@line 126 "fcntlmodule.c"
        var $5=($4)!=0; //@line 126 "fcntlmodule.c"
        var $6=HEAP[$len]; //@line 127 "fcntlmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 126 "fcntlmodule.c"
      case 2: // $bb2
        var $7=($6) <= 1024; //@line 127 "fcntlmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 127 "fcntlmodule.c"
      case 3: // $bb3
        var $8=HEAP[$len]; //@line 128 "fcntlmodule.c"
        var $9=HEAP[$str]; //@line 128 "fcntlmodule.c"
        var $buf4=$buf; //@line 128 "fcntlmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($buf4, $9, $8, 1, 0); //@line 128 "fcntlmodule.c"
        var $10=HEAP[$len]; //@line 129 "fcntlmodule.c"
        var $11=$buf+$10; //@line 129 "fcntlmodule.c"
        HEAP[$11]=0; //@line 129 "fcntlmodule.c"
        var $buf5=$buf; //@line 130 "fcntlmodule.c"
        $arg1=$buf5; //@line 130 "fcntlmodule.c"
        __label__ = 8; break; //@line 130 "fcntlmodule.c"
      case 4: // $bb6
        var $12=HEAP[$str]; //@line 133 "fcntlmodule.c"
        $arg1=$12; //@line 133 "fcntlmodule.c"
        __label__ = 8; break; //@line 133 "fcntlmodule.c"
      case 5: // $bb8
        var $13=($6) > 1024; //@line 137 "fcntlmodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 137 "fcntlmodule.c"
      case 6: // $bb9
        var $14=HEAP[_PyExc_ValueError]; //@line 138 "fcntlmodule.c"
        _PyErr_SetString($14, __str4); //@line 138 "fcntlmodule.c"
        $0=0; //@line 140 "fcntlmodule.c"
        __label__ = 28; break; //@line 140 "fcntlmodule.c"
      case 7: // $bb10
        var $15=HEAP[$len]; //@line 143 "fcntlmodule.c"
        var $16=HEAP[$str]; //@line 143 "fcntlmodule.c"
        var $buf11=$buf; //@line 143 "fcntlmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($buf11, $16, $15, 1, 0); //@line 143 "fcntlmodule.c"
        var $17=HEAP[$len]; //@line 144 "fcntlmodule.c"
        var $18=$buf+$17; //@line 144 "fcntlmodule.c"
        HEAP[$18]=0; //@line 144 "fcntlmodule.c"
        var $buf12=$buf; //@line 145 "fcntlmodule.c"
        $arg1=$buf12; //@line 145 "fcntlmodule.c"
        __label__ = 8; break; //@line 145 "fcntlmodule.c"
      case 8: // $bb13
        var $19=HEAP[$code]; //@line 150 "fcntlmodule.c"
        var $20=HEAP[$fd]; //@line 150 "fcntlmodule.c"
        var $21=$arg1; //@line 150 "fcntlmodule.c"
        var $22=_ioctl($20, $19, allocate([$21,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 150 "fcntlmodule.c"
        $ret=$22; //@line 150 "fcntlmodule.c"
        var $23=HEAP[$mutate_arg]; //@line 156 "fcntlmodule.c"
        var $24=($23)!=0; //@line 156 "fcntlmodule.c"
        if ($24) { __lastLabel__ = 8; __label__ = 9; break; } else { __lastLabel__ = 8; __label__ = 12; break; } //@line 156 "fcntlmodule.c"
      case 9: // $bb18
        var $25=HEAP[$len]; //@line 156 "fcntlmodule.c"
        var $26=($25) <= 1024; //@line 156 "fcntlmodule.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 156 "fcntlmodule.c"
      case 10: // $bb19
        var $27=HEAP[$len]; //@line 157 "fcntlmodule.c"
        var $28=HEAP[$str]; //@line 157 "fcntlmodule.c"
        var $buf20=$buf; //@line 157 "fcntlmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($28, $buf20, $27, 1, 0); //@line 157 "fcntlmodule.c"
        __label__ = 11; break; //@line 157 "fcntlmodule.c"
      case 11: // $bb21thread_pre_split
        var $_pr=$ret;
        __lastLabel__ = 11; __label__ = 12; break;
      case 12: // $bb21
        var $29=__lastLabel__ == 11 ? $_pr : ($22);
        var $30=($29) < 0; //@line 159 "fcntlmodule.c"
        if ($30) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 159 "fcntlmodule.c"
      case 13: // $bb22
        var $31=HEAP[_PyExc_IOError]; //@line 160 "fcntlmodule.c"
        var $32=_PyErr_SetFromErrno($31); //@line 160 "fcntlmodule.c"
        $0=0; //@line 161 "fcntlmodule.c"
        __label__ = 28; break; //@line 161 "fcntlmodule.c"
      case 14: // $bb23
        var $33=HEAP[$mutate_arg]; //@line 163 "fcntlmodule.c"
        var $34=($33)!=0; //@line 163 "fcntlmodule.c"
        if ($34) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 163 "fcntlmodule.c"
      case 15: // $bb24
        var $35=$ret; //@line 164 "fcntlmodule.c"
        var $36=_PyInt_FromLong($35); //@line 164 "fcntlmodule.c"
        $0=$36; //@line 164 "fcntlmodule.c"
        __label__ = 28; break; //@line 164 "fcntlmodule.c"
      case 16: // $bb25
        var $37=HEAP[$len]; //@line 167 "fcntlmodule.c"
        var $buf26=$buf; //@line 167 "fcntlmodule.c"
        var $38=_PyString_FromStringAndSize($buf26, $37); //@line 167 "fcntlmodule.c"
        $0=$38; //@line 167 "fcntlmodule.c"
        __label__ = 28; break; //@line 167 "fcntlmodule.c"
      case 17: // $bb27
        _PyErr_Clear(); //@line 171 "fcntlmodule.c"
        var $39=$args_addr; //@line 172 "fcntlmodule.c"
        var $40=__PyArg_ParseTuple_SizeT($39, __str5, allocate([(FUNCTION_TABLE_OFFSET + 2),0,0,0,$fd,0,0,0,$code,0,0,0,$str,0,0,0,$len,0,0,0], ["i32 (%struct.PyObject*, i32*)*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 172 "fcntlmodule.c"
        var $41=($40)!=0; //@line 172 "fcntlmodule.c"
        if ($41) { __label__ = 18; break; } else { __label__ = 23; break; } //@line 172 "fcntlmodule.c"
      case 18: // $bb28
        var $42=HEAP[$len]; //@line 174 "fcntlmodule.c"
        var $43=($42) > 1024; //@line 174 "fcntlmodule.c"
        if ($43) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 174 "fcntlmodule.c"
      case 19: // $bb29
        var $44=HEAP[_PyExc_ValueError]; //@line 175 "fcntlmodule.c"
        _PyErr_SetString($44, __str4); //@line 175 "fcntlmodule.c"
        $0=0; //@line 177 "fcntlmodule.c"
        __label__ = 28; break; //@line 177 "fcntlmodule.c"
      case 20: // $bb30
        var $45=HEAP[$len]; //@line 179 "fcntlmodule.c"
        var $46=HEAP[$str]; //@line 179 "fcntlmodule.c"
        var $buf31=$buf; //@line 179 "fcntlmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($buf31, $46, $45, 1, 0); //@line 179 "fcntlmodule.c"
        var $47=HEAP[$len]; //@line 180 "fcntlmodule.c"
        var $48=$buf+$47; //@line 180 "fcntlmodule.c"
        HEAP[$48]=0; //@line 180 "fcntlmodule.c"
        var $49=HEAP[$code]; //@line 182 "fcntlmodule.c"
        var $50=HEAP[$fd]; //@line 182 "fcntlmodule.c"
        var $buf32=$buf; //@line 182 "fcntlmodule.c"
        var $51=_ioctl($50, $49, allocate([$buf32,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 182 "fcntlmodule.c"
        $ret=$51; //@line 182 "fcntlmodule.c"
        var $52=$ret; //@line 184 "fcntlmodule.c"
        var $53=($52) < 0; //@line 184 "fcntlmodule.c"
        if ($53) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 184 "fcntlmodule.c"
      case 21: // $bb33
        var $54=HEAP[_PyExc_IOError]; //@line 185 "fcntlmodule.c"
        var $55=_PyErr_SetFromErrno($54); //@line 185 "fcntlmodule.c"
        $0=0; //@line 186 "fcntlmodule.c"
        __label__ = 28; break; //@line 186 "fcntlmodule.c"
      case 22: // $bb34
        var $56=HEAP[$len]; //@line 188 "fcntlmodule.c"
        var $buf35=$buf; //@line 188 "fcntlmodule.c"
        var $57=_PyString_FromStringAndSize($buf35, $56); //@line 188 "fcntlmodule.c"
        $0=$57; //@line 188 "fcntlmodule.c"
        __label__ = 28; break; //@line 188 "fcntlmodule.c"
      case 23: // $bb36
        _PyErr_Clear(); //@line 191 "fcntlmodule.c"
        HEAP[$arg]=0; //@line 192 "fcntlmodule.c"
        var $58=$args_addr; //@line 193 "fcntlmodule.c"
        var $59=__PyArg_ParseTuple_SizeT($58, __str6, allocate([(FUNCTION_TABLE_OFFSET + 2),0,0,0,$fd,0,0,0,$code,0,0,0,$arg,0,0,0], ["i32 (%struct.PyObject*, i32*)*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 193 "fcntlmodule.c"
        var $60=($59)==0; //@line 193 "fcntlmodule.c"
        if ($60) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 193 "fcntlmodule.c"
      case 24: // $bb37
        $0=0; //@line 197 "fcntlmodule.c"
        __label__ = 28; break; //@line 197 "fcntlmodule.c"
      case 25: // $bb38
        var $61=HEAP[$arg]; //@line 203 "fcntlmodule.c"
        var $62=HEAP[$code]; //@line 203 "fcntlmodule.c"
        var $63=HEAP[$fd]; //@line 203 "fcntlmodule.c"
        var $64=_ioctl($63, $62, allocate([$61,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 203 "fcntlmodule.c"
        $ret=$64; //@line 203 "fcntlmodule.c"
        var $65=$ret; //@line 206 "fcntlmodule.c"
        var $66=($65) < 0; //@line 206 "fcntlmodule.c"
        if ($66) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 206 "fcntlmodule.c"
      case 26: // $bb39
        var $67=HEAP[_PyExc_IOError]; //@line 207 "fcntlmodule.c"
        var $68=_PyErr_SetFromErrno($67); //@line 207 "fcntlmodule.c"
        $0=0; //@line 208 "fcntlmodule.c"
        __label__ = 28; break; //@line 208 "fcntlmodule.c"
      case 27: // $bb40
        var $69=$ret; //@line 210 "fcntlmodule.c"
        var $70=_PyInt_FromLong($69); //@line 210 "fcntlmodule.c"
        $0=$70; //@line 210 "fcntlmodule.c"
        __label__ = 28; break; //@line 210 "fcntlmodule.c"
      case 28: // $bb41
        var $71=$0; //@line 140 "fcntlmodule.c"
        $retval=$71; //@line 140 "fcntlmodule.c"
        var $retval42=$retval; //@line 140 "fcntlmodule.c"
        STACKTOP = __stackBase__;
        return $retval42; //@line 140 "fcntlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _fcntl_flock($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $fd=__stackBase__;
        var $code=__stackBase__+4;
        var $ret;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 255 "fcntlmodule.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str7, allocate([(FUNCTION_TABLE_OFFSET + 2),0,0,0,$fd,0,0,0,$code,0,0,0], ["i32 (%struct.PyObject*, i32*)*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 255 "fcntlmodule.c"
        var $3=($2)==0; //@line 255 "fcntlmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 255 "fcntlmodule.c"
      case 1: // $bb
        $0=0; //@line 257 "fcntlmodule.c"
        __label__ = 5; break; //@line 257 "fcntlmodule.c"
      case 2: // $bb1
        var $4=HEAP[$code]; //@line 261 "fcntlmodule.c"
        var $5=HEAP[$fd]; //@line 261 "fcntlmodule.c"
        var $6=_flock($5, $4); //@line 261 "fcntlmodule.c"
        $ret=$6; //@line 261 "fcntlmodule.c"
        var $7=$ret; //@line 290 "fcntlmodule.c"
        var $8=($7) < 0; //@line 290 "fcntlmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 290 "fcntlmodule.c"
      case 3: // $bb2
        var $9=HEAP[_PyExc_IOError]; //@line 291 "fcntlmodule.c"
        var $10=_PyErr_SetFromErrno($9); //@line 291 "fcntlmodule.c"
        $0=0; //@line 292 "fcntlmodule.c"
        __label__ = 5; break; //@line 292 "fcntlmodule.c"
      case 4: // $bb3
        var $11=HEAP[__Py_NoneStruct]; //@line 294 "fcntlmodule.c"
        var $12=($11) + 1; //@line 294 "fcntlmodule.c"
        HEAP[__Py_NoneStruct]=$12; //@line 294 "fcntlmodule.c"
        $0=__Py_NoneStruct; //@line 295 "fcntlmodule.c"
        __label__ = 5; break; //@line 295 "fcntlmodule.c"
      case 5: // $bb4
        var $13=$0; //@line 257 "fcntlmodule.c"
        $retval=$13; //@line 257 "fcntlmodule.c"
        var $retval5=$retval; //@line 257 "fcntlmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 257 "fcntlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _fcntl_lockf($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_70;
        var $iftmp_65;
        var $iftmp_60;
        var $0;
        var $fd=__stackBase__;
        var $code=__stackBase__+4;
        var $ret;
        var $whence=__stackBase__+8;
        var $lenobj=__stackBase__+12;
        var $startobj=__stackBase__+16;
        var $l=__stackBase__+20;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$whence]=0; //@line 310 "fcntlmodule.c"
        HEAP[$lenobj]=0; //@line 311 "fcntlmodule.c"
        HEAP[$startobj]=0; //@line 311 "fcntlmodule.c"
        var $1=$args_addr; //@line 313 "fcntlmodule.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str8, allocate([(FUNCTION_TABLE_OFFSET + 2),0,0,0,$fd,0,0,0,$code,0,0,0,$lenobj,0,0,0,$startobj,0,0,0,$whence,0,0,0], ["i32 (%struct.PyObject*, i32*)*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 313 "fcntlmodule.c"
        var $3=($2)==0; //@line 313 "fcntlmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 313 "fcntlmodule.c"
      case 1: // $bb
        $0=0; //@line 316 "fcntlmodule.c"
        __label__ = 27; break; //@line 316 "fcntlmodule.c"
      case 2: // $bb1
        var $4=HEAP[$code]; //@line 331 "fcntlmodule.c"
        var $5=($4)==8; //@line 331 "fcntlmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 331 "fcntlmodule.c"
      case 3: // $bb2
        var $6=$l; //@line 332 "fcntlmodule.c"
        HEAP[$6]=2; //@line 332 "fcntlmodule.c"
        __label__ = 9; break; //@line 332 "fcntlmodule.c"
      case 4: // $bb3
        var $7=HEAP[$code]; //@line 333 "fcntlmodule.c"
        var $8=($7) & 1; //@line 333 "fcntlmodule.c"
        var $9=((($8)) & 255); //@line 333 "fcntlmodule.c"
        var $toBool=($9)!=0; //@line 333 "fcntlmodule.c"
        if ($toBool) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 333 "fcntlmodule.c"
      case 5: // $bb4
        var $10=$l; //@line 334 "fcntlmodule.c"
        HEAP[$10]=0; //@line 334 "fcntlmodule.c"
        __label__ = 9; break; //@line 334 "fcntlmodule.c"
      case 6: // $bb5
        var $11=HEAP[$code]; //@line 335 "fcntlmodule.c"
        var $12=($11) & 2; //@line 335 "fcntlmodule.c"
        var $13=($12)!=0; //@line 335 "fcntlmodule.c"
        if ($13) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 335 "fcntlmodule.c"
      case 7: // $bb6
        var $14=$l; //@line 336 "fcntlmodule.c"
        HEAP[$14]=1; //@line 336 "fcntlmodule.c"
        __label__ = 9; break; //@line 336 "fcntlmodule.c"
      case 8: // $bb7
        var $15=HEAP[_PyExc_ValueError]; //@line 338 "fcntlmodule.c"
        _PyErr_SetString($15, __str9); //@line 338 "fcntlmodule.c"
        $0=0; //@line 340 "fcntlmodule.c"
        __label__ = 27; break; //@line 340 "fcntlmodule.c"
      case 9: // $bb8
        var $16=$l+12; //@line 342 "fcntlmodule.c"
        HEAP[$16]=0; //@line 342 "fcntlmodule.c"
        var $17=$l+12; //@line 342 "fcntlmodule.c"
        var $18=HEAP[$17]; //@line 342 "fcntlmodule.c"
        var $19=$l+4; //@line 342 "fcntlmodule.c"
        HEAP[$19]=$18; //@line 342 "fcntlmodule.c"
        var $20=HEAP[$startobj]; //@line 343 "fcntlmodule.c"
        var $21=($20)!=0; //@line 343 "fcntlmodule.c"
        if ($21) { __label__ = 10; break; } else { __label__ = 15; break; } //@line 343 "fcntlmodule.c"
      case 10: // $bb9
        var $22=HEAP[$startobj]; //@line 347 "fcntlmodule.c"
        var $23=$22+4; //@line 347 "fcntlmodule.c"
        var $24=HEAP[$23]; //@line 347 "fcntlmodule.c"
        var $25=$24+84; //@line 347 "fcntlmodule.c"
        var $26=HEAP[$25]; //@line 347 "fcntlmodule.c"
        var $27=($26) & 16777216; //@line 347 "fcntlmodule.c"
        var $28=($27)!=0; //@line 347 "fcntlmodule.c"
        var $29=HEAP[$startobj]; //@line 347 "fcntlmodule.c"
        if ($28) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 347 "fcntlmodule.c"
      case 11: // $bb10
        var $30=_PyLong_AsLongLong($29); //@line 347 "fcntlmodule.c"
        $iftmp_60=$30; //@line 347 "fcntlmodule.c"
        __label__ = 13; break; //@line 347 "fcntlmodule.c"
      case 12: // $bb11
        var $31=_PyInt_AsLong($29); //@line 347 "fcntlmodule.c"
        var $32=($31); //@line 347 "fcntlmodule.c"
        $iftmp_60=$32; //@line 347 "fcntlmodule.c"
        __label__ = 13; break; //@line 347 "fcntlmodule.c"
      case 13: // $bb12
        var $33=$l+4; //@line 347 "fcntlmodule.c"
        var $34=$iftmp_60; //@line 347 "fcntlmodule.c"
        HEAP[$33]=$34; //@line 347 "fcntlmodule.c"
        var $35=_PyErr_Occurred(); //@line 351 "fcntlmodule.c"
        var $36=($35)!=0; //@line 351 "fcntlmodule.c"
        if ($36) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 351 "fcntlmodule.c"
      case 14: // $bb13
        $0=0; //@line 352 "fcntlmodule.c"
        __label__ = 27; break; //@line 352 "fcntlmodule.c"
      case 15: // $bb14
        var $37=HEAP[$lenobj]; //@line 354 "fcntlmodule.c"
        var $38=($37)!=0; //@line 354 "fcntlmodule.c"
        if ($38) { __label__ = 16; break; } else { __label__ = 21; break; } //@line 354 "fcntlmodule.c"
      case 16: // $bb15
        var $39=HEAP[$lenobj]; //@line 358 "fcntlmodule.c"
        var $40=$39+4; //@line 358 "fcntlmodule.c"
        var $41=HEAP[$40]; //@line 358 "fcntlmodule.c"
        var $42=$41+84; //@line 358 "fcntlmodule.c"
        var $43=HEAP[$42]; //@line 358 "fcntlmodule.c"
        var $44=($43) & 16777216; //@line 358 "fcntlmodule.c"
        var $45=($44)!=0; //@line 358 "fcntlmodule.c"
        var $46=HEAP[$lenobj]; //@line 358 "fcntlmodule.c"
        if ($45) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 358 "fcntlmodule.c"
      case 17: // $bb16
        var $47=_PyLong_AsLongLong($46); //@line 358 "fcntlmodule.c"
        $iftmp_65=$47; //@line 358 "fcntlmodule.c"
        __label__ = 19; break; //@line 358 "fcntlmodule.c"
      case 18: // $bb17
        var $48=_PyInt_AsLong($46); //@line 358 "fcntlmodule.c"
        var $49=($48); //@line 358 "fcntlmodule.c"
        $iftmp_65=$49; //@line 358 "fcntlmodule.c"
        __label__ = 19; break; //@line 358 "fcntlmodule.c"
      case 19: // $bb18
        var $50=$l+12; //@line 358 "fcntlmodule.c"
        var $51=$iftmp_65; //@line 358 "fcntlmodule.c"
        HEAP[$50]=$51; //@line 358 "fcntlmodule.c"
        var $52=_PyErr_Occurred(); //@line 362 "fcntlmodule.c"
        var $53=($52)!=0; //@line 362 "fcntlmodule.c"
        if ($53) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 362 "fcntlmodule.c"
      case 20: // $bb19
        $0=0; //@line 363 "fcntlmodule.c"
        __label__ = 27; break; //@line 363 "fcntlmodule.c"
      case 21: // $bb20
        var $54=HEAP[$whence]; //@line 365 "fcntlmodule.c"
        var $55=((($54)) & 65535); //@line 365 "fcntlmodule.c"
        var $56=$l+2; //@line 365 "fcntlmodule.c"
        HEAP[$56]=$55; //@line 365 "fcntlmodule.c"
        var $57=HEAP[$code]; //@line 367 "fcntlmodule.c"
        var $58=($57) & 4; //@line 367 "fcntlmodule.c"
        var $59=($58)!=0; //@line 367 "fcntlmodule.c"
        if ($59) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 367 "fcntlmodule.c"
      case 22: // $bb21
        $iftmp_70=13; //@line 367 "fcntlmodule.c"
        __label__ = 24; break; //@line 367 "fcntlmodule.c"
      case 23: // $bb22
        $iftmp_70=14; //@line 367 "fcntlmodule.c"
        __label__ = 24; break; //@line 367 "fcntlmodule.c"
      case 24: // $bb23
        var $60=HEAP[$fd]; //@line 367 "fcntlmodule.c"
        var $61=$iftmp_70; //@line 367 "fcntlmodule.c"
        var $62=_fcntl($60, $61, allocate([$l,0,0,0], ["%struct.flock*",0,0,0], ALLOC_STACK)); //@line 367 "fcntlmodule.c"
        $ret=$62; //@line 367 "fcntlmodule.c"
        var $63=($62) < 0; //@line 370 "fcntlmodule.c"
        if ($63) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 370 "fcntlmodule.c"
      case 25: // $bb24
        var $64=HEAP[_PyExc_IOError]; //@line 371 "fcntlmodule.c"
        var $65=_PyErr_SetFromErrno($64); //@line 371 "fcntlmodule.c"
        $0=0; //@line 372 "fcntlmodule.c"
        __label__ = 27; break; //@line 372 "fcntlmodule.c"
      case 26: // $bb25
        var $66=HEAP[__Py_NoneStruct]; //@line 374 "fcntlmodule.c"
        var $67=($66) + 1; //@line 374 "fcntlmodule.c"
        HEAP[__Py_NoneStruct]=$67; //@line 374 "fcntlmodule.c"
        $0=__Py_NoneStruct; //@line 375 "fcntlmodule.c"
        __label__ = 27; break; //@line 375 "fcntlmodule.c"
      case 27: // $bb26
        var $68=$0; //@line 316 "fcntlmodule.c"
        $retval=$68; //@line 316 "fcntlmodule.c"
        var $retval27=$retval; //@line 316 "fcntlmodule.c"
        STACKTOP = __stackBase__;
        return $retval27; //@line 316 "fcntlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ins($d, $symbol, $value) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $d_addr;
        var $symbol_addr;
        var $value_addr;
        var $retval;
        var $0;
        var $v;
        $d_addr=$d;
        $symbol_addr=$symbol;
        $value_addr=$value;
        var $1=$value_addr; //@line 426 "fcntlmodule.c"
        var $2=_PyInt_FromLong($1); //@line 426 "fcntlmodule.c"
        $v=$2; //@line 426 "fcntlmodule.c"
        var $3=$v; //@line 427 "fcntlmodule.c"
        var $4=($3)==0; //@line 427 "fcntlmodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 427 "fcntlmodule.c"
      case 1: // $bb
        var $5=$d_addr; //@line 427 "fcntlmodule.c"
        var $6=$symbol_addr; //@line 427 "fcntlmodule.c"
        var $7=$v; //@line 427 "fcntlmodule.c"
        var $8=_PyDict_SetItemString($5, $6, $7); //@line 427 "fcntlmodule.c"
        var $9=($8) < 0; //@line 427 "fcntlmodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 427 "fcntlmodule.c"
      case 2: // $bb1
        $0=-1; //@line 428 "fcntlmodule.c"
        __label__ = 6; break; //@line 428 "fcntlmodule.c"
      case 3: // $bb2
        var $10=$v; //@line 430 "fcntlmodule.c"
        var $11=$10; //@line 430 "fcntlmodule.c"
        var $12=HEAP[$11]; //@line 430 "fcntlmodule.c"
        var $13=($12) - 1; //@line 430 "fcntlmodule.c"
        var $14=$v; //@line 430 "fcntlmodule.c"
        var $15=$14; //@line 430 "fcntlmodule.c"
        HEAP[$15]=$13; //@line 430 "fcntlmodule.c"
        var $16=$v; //@line 430 "fcntlmodule.c"
        var $17=$16; //@line 430 "fcntlmodule.c"
        var $18=HEAP[$17]; //@line 430 "fcntlmodule.c"
        var $19=($18)==0; //@line 430 "fcntlmodule.c"
        if ($19) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 430 "fcntlmodule.c"
      case 4: // $bb3
        var $20=$v; //@line 430 "fcntlmodule.c"
        var $21=$20+4; //@line 430 "fcntlmodule.c"
        var $22=HEAP[$21]; //@line 430 "fcntlmodule.c"
        var $23=$22+24; //@line 430 "fcntlmodule.c"
        var $24=HEAP[$23]; //@line 430 "fcntlmodule.c"
        var $25=$v; //@line 430 "fcntlmodule.c"
        FUNCTION_TABLE[$24]($25); //@line 430 "fcntlmodule.c"
        __label__ = 5; break; //@line 430 "fcntlmodule.c"
      case 5: // $bb4
        $0=0; //@line 431 "fcntlmodule.c"
        __label__ = 6; break; //@line 431 "fcntlmodule.c"
      case 6: // $bb5
        var $26=$0; //@line 428 "fcntlmodule.c"
        $retval=$26; //@line 428 "fcntlmodule.c"
        var $retval6=$retval; //@line 428 "fcntlmodule.c"
        ;
        return $retval6; //@line 428 "fcntlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _all_ins($d) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $d_addr;
        var $0;
        $d_addr=$d;
        var $1=$d_addr; //@line 439 "fcntlmodule.c"
        var $2=_ins($1, __str14, 1); //@line 439 "fcntlmodule.c"
        var $3=($2)!=0; //@line 439 "fcntlmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 439 "fcntlmodule.c"
      case 1: // $bb
        $0=-1; //@line 439 "fcntlmodule.c"
        __label__ = 139; break; //@line 439 "fcntlmodule.c"
      case 2: // $bb1
        var $4=$d_addr; //@line 440 "fcntlmodule.c"
        var $5=_ins($4, __str15, 2); //@line 440 "fcntlmodule.c"
        var $6=($5)!=0; //@line 440 "fcntlmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 440 "fcntlmodule.c"
      case 3: // $bb2
        $0=-1; //@line 440 "fcntlmodule.c"
        __label__ = 139; break; //@line 440 "fcntlmodule.c"
      case 4: // $bb3
        var $7=$d_addr; //@line 441 "fcntlmodule.c"
        var $8=_ins($7, __str16, 4); //@line 441 "fcntlmodule.c"
        var $9=($8)!=0; //@line 441 "fcntlmodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 441 "fcntlmodule.c"
      case 5: // $bb4
        $0=-1; //@line 441 "fcntlmodule.c"
        __label__ = 139; break; //@line 441 "fcntlmodule.c"
      case 6: // $bb5
        var $10=$d_addr; //@line 442 "fcntlmodule.c"
        var $11=_ins($10, __str17, 8); //@line 442 "fcntlmodule.c"
        var $12=($11)!=0; //@line 442 "fcntlmodule.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 442 "fcntlmodule.c"
      case 7: // $bb6
        $0=-1; //@line 442 "fcntlmodule.c"
        __label__ = 139; break; //@line 442 "fcntlmodule.c"
      case 8: // $bb7
        var $13=$d_addr; //@line 445 "fcntlmodule.c"
        var $14=_ins($13, __str18, 32); //@line 445 "fcntlmodule.c"
        var $15=($14)!=0; //@line 445 "fcntlmodule.c"
        if ($15) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 445 "fcntlmodule.c"
      case 9: // $bb8
        $0=-1; //@line 445 "fcntlmodule.c"
        __label__ = 139; break; //@line 445 "fcntlmodule.c"
      case 10: // $bb9
        var $16=$d_addr; //@line 448 "fcntlmodule.c"
        var $17=_ins($16, __str19, 64); //@line 448 "fcntlmodule.c"
        var $18=($17)!=0; //@line 448 "fcntlmodule.c"
        if ($18) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 448 "fcntlmodule.c"
      case 11: // $bb10
        $0=-1; //@line 448 "fcntlmodule.c"
        __label__ = 139; break; //@line 448 "fcntlmodule.c"
      case 12: // $bb11
        var $19=$d_addr; //@line 451 "fcntlmodule.c"
        var $20=_ins($19, __str20, 128); //@line 451 "fcntlmodule.c"
        var $21=($20)!=0; //@line 451 "fcntlmodule.c"
        if ($21) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 451 "fcntlmodule.c"
      case 13: // $bb12
        $0=-1; //@line 451 "fcntlmodule.c"
        __label__ = 139; break; //@line 451 "fcntlmodule.c"
      case 14: // $bb13
        var $22=$d_addr; //@line 454 "fcntlmodule.c"
        var $23=_ins($22, __str21, 192); //@line 454 "fcntlmodule.c"
        var $24=($23)!=0; //@line 454 "fcntlmodule.c"
        if ($24) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 454 "fcntlmodule.c"
      case 15: // $bb14
        $0=-1; //@line 454 "fcntlmodule.c"
        __label__ = 139; break; //@line 454 "fcntlmodule.c"
      case 16: // $bb15
        var $25=$d_addr; //@line 458 "fcntlmodule.c"
        var $26=_ins($25, __str22, 0); //@line 458 "fcntlmodule.c"
        var $27=($26)!=0; //@line 458 "fcntlmodule.c"
        if ($27) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 458 "fcntlmodule.c"
      case 17: // $bb16
        $0=-1; //@line 458 "fcntlmodule.c"
        __label__ = 139; break; //@line 458 "fcntlmodule.c"
      case 18: // $bb17
        var $28=$d_addr; //@line 461 "fcntlmodule.c"
        var $29=_ins($28, __str23, 1); //@line 461 "fcntlmodule.c"
        var $30=($29)!=0; //@line 461 "fcntlmodule.c"
        if ($30) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 461 "fcntlmodule.c"
      case 19: // $bb18
        $0=-1; //@line 461 "fcntlmodule.c"
        __label__ = 139; break; //@line 461 "fcntlmodule.c"
      case 20: // $bb19
        var $31=$d_addr; //@line 464 "fcntlmodule.c"
        var $32=_ins($31, __str24, 2); //@line 464 "fcntlmodule.c"
        var $33=($32)!=0; //@line 464 "fcntlmodule.c"
        if ($33) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 464 "fcntlmodule.c"
      case 21: // $bb20
        $0=-1; //@line 464 "fcntlmodule.c"
        __label__ = 139; break; //@line 464 "fcntlmodule.c"
      case 22: // $bb21
        var $34=$d_addr; //@line 467 "fcntlmodule.c"
        var $35=_ins($34, __str25, 3); //@line 467 "fcntlmodule.c"
        var $36=($35)!=0; //@line 467 "fcntlmodule.c"
        if ($36) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 467 "fcntlmodule.c"
      case 23: // $bb22
        $0=-1; //@line 467 "fcntlmodule.c"
        __label__ = 139; break; //@line 467 "fcntlmodule.c"
      case 24: // $bb23
        var $37=$d_addr; //@line 470 "fcntlmodule.c"
        var $38=_ins($37, __str26, 4); //@line 470 "fcntlmodule.c"
        var $39=($38)!=0; //@line 470 "fcntlmodule.c"
        if ($39) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 470 "fcntlmodule.c"
      case 25: // $bb24
        $0=-1; //@line 470 "fcntlmodule.c"
        __label__ = 139; break; //@line 470 "fcntlmodule.c"
      case 26: // $bb25
        var $40=$d_addr; //@line 473 "fcntlmodule.c"
        var $41=_ins($40, __str27, 12); //@line 473 "fcntlmodule.c"
        var $42=($41)!=0; //@line 473 "fcntlmodule.c"
        if ($42) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 473 "fcntlmodule.c"
      case 27: // $bb26
        $0=-1; //@line 473 "fcntlmodule.c"
        __label__ = 139; break; //@line 473 "fcntlmodule.c"
      case 28: // $bb27
        var $43=$d_addr; //@line 476 "fcntlmodule.c"
        var $44=_ins($43, __str28, 13); //@line 476 "fcntlmodule.c"
        var $45=($44)!=0; //@line 476 "fcntlmodule.c"
        if ($45) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 476 "fcntlmodule.c"
      case 29: // $bb28
        $0=-1; //@line 476 "fcntlmodule.c"
        __label__ = 139; break; //@line 476 "fcntlmodule.c"
      case 30: // $bb29
        var $46=$d_addr; //@line 479 "fcntlmodule.c"
        var $47=_ins($46, __str29, 14); //@line 479 "fcntlmodule.c"
        var $48=($47)!=0; //@line 479 "fcntlmodule.c"
        if ($48) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 479 "fcntlmodule.c"
      case 31: // $bb30
        $0=-1; //@line 479 "fcntlmodule.c"
        __label__ = 139; break; //@line 479 "fcntlmodule.c"
      case 32: // $bb31
        var $49=$d_addr; //@line 482 "fcntlmodule.c"
        var $50=_ins($49, __str30, 9); //@line 482 "fcntlmodule.c"
        var $51=($50)!=0; //@line 482 "fcntlmodule.c"
        if ($51) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 482 "fcntlmodule.c"
      case 33: // $bb32
        $0=-1; //@line 482 "fcntlmodule.c"
        __label__ = 139; break; //@line 482 "fcntlmodule.c"
      case 34: // $bb33
        var $52=$d_addr; //@line 485 "fcntlmodule.c"
        var $53=_ins($52, __str31, 8); //@line 485 "fcntlmodule.c"
        var $54=($53)!=0; //@line 485 "fcntlmodule.c"
        if ($54) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 485 "fcntlmodule.c"
      case 35: // $bb34
        $0=-1; //@line 485 "fcntlmodule.c"
        __label__ = 139; break; //@line 485 "fcntlmodule.c"
      case 36: // $bb35
        var $55=$d_addr; //@line 488 "fcntlmodule.c"
        var $56=_ins($55, __str32, 11); //@line 488 "fcntlmodule.c"
        var $57=($56)!=0; //@line 488 "fcntlmodule.c"
        if ($57) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 488 "fcntlmodule.c"
      case 37: // $bb36
        $0=-1; //@line 488 "fcntlmodule.c"
        __label__ = 139; break; //@line 488 "fcntlmodule.c"
      case 38: // $bb37
        var $58=$d_addr; //@line 491 "fcntlmodule.c"
        var $59=_ins($58, __str33, 10); //@line 491 "fcntlmodule.c"
        var $60=($59)!=0; //@line 491 "fcntlmodule.c"
        if ($60) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 491 "fcntlmodule.c"
      case 39: // $bb38
        $0=-1; //@line 491 "fcntlmodule.c"
        __label__ = 139; break; //@line 491 "fcntlmodule.c"
      case 40: // $bb39
        var $61=$d_addr; //@line 494 "fcntlmodule.c"
        var $62=_ins($61, __str34, 0); //@line 494 "fcntlmodule.c"
        var $63=($62)!=0; //@line 494 "fcntlmodule.c"
        if ($63) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 494 "fcntlmodule.c"
      case 41: // $bb40
        $0=-1; //@line 494 "fcntlmodule.c"
        __label__ = 139; break; //@line 494 "fcntlmodule.c"
      case 42: // $bb41
        var $64=$d_addr; //@line 497 "fcntlmodule.c"
        var $65=_ins($64, __str35, 1); //@line 497 "fcntlmodule.c"
        var $66=($65)!=0; //@line 497 "fcntlmodule.c"
        if ($66) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 497 "fcntlmodule.c"
      case 43: // $bb42
        $0=-1; //@line 497 "fcntlmodule.c"
        __label__ = 139; break; //@line 497 "fcntlmodule.c"
      case 44: // $bb43
        var $67=$d_addr; //@line 500 "fcntlmodule.c"
        var $68=_ins($67, __str36, 2); //@line 500 "fcntlmodule.c"
        var $69=($68)!=0; //@line 500 "fcntlmodule.c"
        if ($69) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 500 "fcntlmodule.c"
      case 45: // $bb44
        $0=-1; //@line 500 "fcntlmodule.c"
        __label__ = 139; break; //@line 500 "fcntlmodule.c"
      case 46: // $bb45
        var $70=$d_addr; //@line 504 "fcntlmodule.c"
        var $71=_ins($70, __str37, 12); //@line 504 "fcntlmodule.c"
        var $72=($71)!=0; //@line 504 "fcntlmodule.c"
        if ($72) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 504 "fcntlmodule.c"
      case 47: // $bb46
        $0=-1; //@line 504 "fcntlmodule.c"
        __label__ = 139; break; //@line 504 "fcntlmodule.c"
      case 48: // $bb47
        var $73=$d_addr; //@line 507 "fcntlmodule.c"
        var $74=_ins($73, __str38, 13); //@line 507 "fcntlmodule.c"
        var $75=($74)!=0; //@line 507 "fcntlmodule.c"
        if ($75) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 507 "fcntlmodule.c"
      case 49: // $bb48
        $0=-1; //@line 507 "fcntlmodule.c"
        __label__ = 139; break; //@line 507 "fcntlmodule.c"
      case 50: // $bb49
        var $76=$d_addr; //@line 510 "fcntlmodule.c"
        var $77=_ins($76, __str39, 14); //@line 510 "fcntlmodule.c"
        var $78=($77)!=0; //@line 510 "fcntlmodule.c"
        if ($78) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 510 "fcntlmodule.c"
      case 51: // $bb50
        $0=-1; //@line 510 "fcntlmodule.c"
        __label__ = 139; break; //@line 510 "fcntlmodule.c"
      case 52: // $bb51
        var $79=$d_addr; //@line 514 "fcntlmodule.c"
        var $80=_ins($79, __str40, 8192); //@line 514 "fcntlmodule.c"
        var $81=($80)!=0; //@line 514 "fcntlmodule.c"
        if ($81) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 514 "fcntlmodule.c"
      case 53: // $bb52
        $0=-1; //@line 514 "fcntlmodule.c"
        __label__ = 139; break; //@line 514 "fcntlmodule.c"
      case 54: // $bb53
        var $82=$d_addr; //@line 517 "fcntlmodule.c"
        var $83=_ins($82, __str41, 1024); //@line 517 "fcntlmodule.c"
        var $84=($83)!=0; //@line 517 "fcntlmodule.c"
        if ($84) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 517 "fcntlmodule.c"
      case 55: // $bb54
        $0=-1; //@line 517 "fcntlmodule.c"
        __label__ = 139; break; //@line 517 "fcntlmodule.c"
      case 56: // $bb55
        var $85=$d_addr; //@line 520 "fcntlmodule.c"
        var $86=_ins($85, __str42, 1025); //@line 520 "fcntlmodule.c"
        var $87=($86)!=0; //@line 520 "fcntlmodule.c"
        if ($87) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 520 "fcntlmodule.c"
      case 57: // $bb56
        $0=-1; //@line 520 "fcntlmodule.c"
        __label__ = 139; break; //@line 520 "fcntlmodule.c"
      case 58: // $bb57
        var $88=$d_addr; //@line 523 "fcntlmodule.c"
        var $89=_ins($88, __str43, 1026); //@line 523 "fcntlmodule.c"
        var $90=($89)!=0; //@line 523 "fcntlmodule.c"
        if ($90) { __label__ = 59; break; } else { __label__ = 60; break; } //@line 523 "fcntlmodule.c"
      case 59: // $bb58
        $0=-1; //@line 523 "fcntlmodule.c"
        __label__ = 139; break; //@line 523 "fcntlmodule.c"
      case 60: // $bb59
        var $91=$d_addr; //@line 527 "fcntlmodule.c"
        var $92=_ins($91, __str44, 4); //@line 527 "fcntlmodule.c"
        var $93=($92)!=0; //@line 527 "fcntlmodule.c"
        if ($93) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 527 "fcntlmodule.c"
      case 61: // $bb60
        $0=-1; //@line 527 "fcntlmodule.c"
        __label__ = 139; break; //@line 527 "fcntlmodule.c"
      case 62: // $bb61
        var $94=$d_addr; //@line 530 "fcntlmodule.c"
        var $95=_ins($94, __str45, 8); //@line 530 "fcntlmodule.c"
        var $96=($95)!=0; //@line 530 "fcntlmodule.c"
        if ($96) { __label__ = 63; break; } else { __label__ = 64; break; } //@line 530 "fcntlmodule.c"
      case 63: // $bb62
        $0=-1; //@line 530 "fcntlmodule.c"
        __label__ = 139; break; //@line 530 "fcntlmodule.c"
      case 64: // $bb63
        var $97=$d_addr; //@line 540 "fcntlmodule.c"
        var $98=_ins($97, __str46, 1); //@line 540 "fcntlmodule.c"
        var $99=($98)!=0; //@line 540 "fcntlmodule.c"
        if ($99) { __label__ = 65; break; } else { __label__ = 66; break; } //@line 540 "fcntlmodule.c"
      case 65: // $bb64
        $0=-1; //@line 540 "fcntlmodule.c"
        __label__ = 139; break; //@line 540 "fcntlmodule.c"
      case 66: // $bb65
        var $100=$d_addr; //@line 545 "fcntlmodule.c"
        var $101=_ins($100, __str47, 1); //@line 545 "fcntlmodule.c"
        var $102=($101)!=0; //@line 545 "fcntlmodule.c"
        if ($102) { __label__ = 67; break; } else { __label__ = 68; break; } //@line 545 "fcntlmodule.c"
      case 67: // $bb66
        $0=-1; //@line 545 "fcntlmodule.c"
        __label__ = 139; break; //@line 545 "fcntlmodule.c"
      case 68: // $bb67
        var $103=$d_addr; //@line 548 "fcntlmodule.c"
        var $104=_ins($103, __str48, 2); //@line 548 "fcntlmodule.c"
        var $105=($104)!=0; //@line 548 "fcntlmodule.c"
        if ($105) { __label__ = 69; break; } else { __label__ = 70; break; } //@line 548 "fcntlmodule.c"
      case 69: // $bb68
        $0=-1; //@line 548 "fcntlmodule.c"
        __label__ = 139; break; //@line 548 "fcntlmodule.c"
      case 70: // $bb69
        var $106=$d_addr; //@line 551 "fcntlmodule.c"
        var $107=_ins($106, __str49, 4); //@line 551 "fcntlmodule.c"
        var $108=($107)!=0; //@line 551 "fcntlmodule.c"
        if ($108) { __label__ = 71; break; } else { __label__ = 72; break; } //@line 551 "fcntlmodule.c"
      case 71: // $bb70
        $0=-1; //@line 551 "fcntlmodule.c"
        __label__ = 139; break; //@line 551 "fcntlmodule.c"
      case 72: // $bb71
        var $109=$d_addr; //@line 554 "fcntlmodule.c"
        var $110=_ins($109, __str50, 8); //@line 554 "fcntlmodule.c"
        var $111=($110)!=0; //@line 554 "fcntlmodule.c"
        if ($111) { __label__ = 73; break; } else { __label__ = 74; break; } //@line 554 "fcntlmodule.c"
      case 73: // $bb72
        $0=-1; //@line 554 "fcntlmodule.c"
        __label__ = 139; break; //@line 554 "fcntlmodule.c"
      case 74: // $bb73
        var $112=$d_addr; //@line 557 "fcntlmodule.c"
        var $113=_ins($112, __str51, 16); //@line 557 "fcntlmodule.c"
        var $114=($113)!=0; //@line 557 "fcntlmodule.c"
        if ($114) { __label__ = 75; break; } else { __label__ = 76; break; } //@line 557 "fcntlmodule.c"
      case 75: // $bb74
        $0=-1; //@line 557 "fcntlmodule.c"
        __label__ = 139; break; //@line 557 "fcntlmodule.c"
      case 76: // $bb75
        var $115=$d_addr; //@line 560 "fcntlmodule.c"
        var $116=_ins($115, __str52, 32); //@line 560 "fcntlmodule.c"
        var $117=($116)!=0; //@line 560 "fcntlmodule.c"
        if ($117) { __label__ = 77; break; } else { __label__ = 78; break; } //@line 560 "fcntlmodule.c"
      case 77: // $bb76
        $0=-1; //@line 560 "fcntlmodule.c"
        __label__ = 139; break; //@line 560 "fcntlmodule.c"
      case 78: // $bb77
        var $118=$d_addr; //@line 563 "fcntlmodule.c"
        var $119=_ins($118, __str53, -2147483648); //@line 563 "fcntlmodule.c"
        var $120=($119)!=0; //@line 563 "fcntlmodule.c"
        if ($120) { __label__ = 79; break; } else { __label__ = 80; break; } //@line 563 "fcntlmodule.c"
      case 79: // $bb78
        $0=-1; //@line 563 "fcntlmodule.c"
        __label__ = 139; break; //@line 563 "fcntlmodule.c"
      case 80: // $bb79
        var $121=$d_addr; //@line 568 "fcntlmodule.c"
        var $122=_ins($121, __str54, 21250); //@line 568 "fcntlmodule.c"
        var $123=($122)!=0; //@line 568 "fcntlmodule.c"
        if ($123) { __label__ = 81; break; } else { __label__ = 82; break; } //@line 568 "fcntlmodule.c"
      case 81: // $bb80
        $0=-1; //@line 568 "fcntlmodule.c"
        __label__ = 139; break; //@line 568 "fcntlmodule.c"
      case 82: // $bb81
        var $124=$d_addr; //@line 569 "fcntlmodule.c"
        var $125=_ins($124, __str55, 21251); //@line 569 "fcntlmodule.c"
        var $126=($125)!=0; //@line 569 "fcntlmodule.c"
        if ($126) { __label__ = 83; break; } else { __label__ = 84; break; } //@line 569 "fcntlmodule.c"
      case 83: // $bb82
        $0=-1; //@line 569 "fcntlmodule.c"
        __label__ = 139; break; //@line 569 "fcntlmodule.c"
      case 84: // $bb83
        var $127=$d_addr; //@line 570 "fcntlmodule.c"
        var $128=_ins($127, __str56, 21252); //@line 570 "fcntlmodule.c"
        var $129=($128)!=0; //@line 570 "fcntlmodule.c"
        if ($129) { __label__ = 85; break; } else { __label__ = 86; break; } //@line 570 "fcntlmodule.c"
      case 85: // $bb84
        $0=-1; //@line 570 "fcntlmodule.c"
        __label__ = 139; break; //@line 570 "fcntlmodule.c"
      case 86: // $bb85
        var $130=$d_addr; //@line 571 "fcntlmodule.c"
        var $131=_ins($130, __str57, 21253); //@line 571 "fcntlmodule.c"
        var $132=($131)!=0; //@line 571 "fcntlmodule.c"
        if ($132) { __label__ = 87; break; } else { __label__ = 88; break; } //@line 571 "fcntlmodule.c"
      case 87: // $bb86
        $0=-1; //@line 571 "fcntlmodule.c"
        __label__ = 139; break; //@line 571 "fcntlmodule.c"
      case 88: // $bb87
        var $133=$d_addr; //@line 572 "fcntlmodule.c"
        var $134=_ins($133, __str58, 21276); //@line 572 "fcntlmodule.c"
        var $135=($134)!=0; //@line 572 "fcntlmodule.c"
        if ($135) { __label__ = 89; break; } else { __label__ = 90; break; } //@line 572 "fcntlmodule.c"
      case 89: // $bb88
        $0=-1; //@line 572 "fcntlmodule.c"
        __label__ = 139; break; //@line 572 "fcntlmodule.c"
      case 90: // $bb89
        var $136=$d_addr; //@line 573 "fcntlmodule.c"
        var $137=_ins($136, __str59, 21257); //@line 573 "fcntlmodule.c"
        var $138=($137)!=0; //@line 573 "fcntlmodule.c"
        if ($138) { __label__ = 91; break; } else { __label__ = 92; break; } //@line 573 "fcntlmodule.c"
      case 91: // $bb90
        $0=-1; //@line 573 "fcntlmodule.c"
        __label__ = 139; break; //@line 573 "fcntlmodule.c"
      case 92: // $bb91
        var $139=$d_addr; //@line 574 "fcntlmodule.c"
        var $140=_ins($139, __str60, 21258); //@line 574 "fcntlmodule.c"
        var $141=($140)!=0; //@line 574 "fcntlmodule.c"
        if ($141) { __label__ = 93; break; } else { __label__ = 94; break; } //@line 574 "fcntlmodule.c"
      case 93: // $bb92
        $0=-1; //@line 574 "fcntlmodule.c"
        __label__ = 139; break; //@line 574 "fcntlmodule.c"
      case 94: // $bb93
        var $142=$d_addr; //@line 575 "fcntlmodule.c"
        var $143=_ins($142, __str61, 21259); //@line 575 "fcntlmodule.c"
        var $144=($143)!=0; //@line 575 "fcntlmodule.c"
        if ($144) { __label__ = 95; break; } else { __label__ = 96; break; } //@line 575 "fcntlmodule.c"
      case 95: // $bb94
        $0=-1; //@line 575 "fcntlmodule.c"
        __label__ = 139; break; //@line 575 "fcntlmodule.c"
      case 96: // $bb95
        var $145=$d_addr; //@line 576 "fcntlmodule.c"
        var $146=_ins($145, __str62, 21263); //@line 576 "fcntlmodule.c"
        var $147=($146)!=0; //@line 576 "fcntlmodule.c"
        if ($147) { __label__ = 97; break; } else { __label__ = 98; break; } //@line 576 "fcntlmodule.c"
      case 97: // $bb96
        $0=-1; //@line 576 "fcntlmodule.c"
        __label__ = 139; break; //@line 576 "fcntlmodule.c"
      case 98: // $bb97
        var $148=$d_addr; //@line 577 "fcntlmodule.c"
        var $149=_ins($148, __str63, 21254); //@line 577 "fcntlmodule.c"
        var $150=($149)!=0; //@line 577 "fcntlmodule.c"
        if ($150) { __label__ = 99; break; } else { __label__ = 100; break; } //@line 577 "fcntlmodule.c"
      case 99: // $bb98
        $0=-1; //@line 577 "fcntlmodule.c"
        __label__ = 139; break; //@line 577 "fcntlmodule.c"
      case 100: // $bb99
        var $151=$d_addr; //@line 578 "fcntlmodule.c"
        var $152=_ins($151, __str64, 21255); //@line 578 "fcntlmodule.c"
        var $153=($152)!=0; //@line 578 "fcntlmodule.c"
        if ($153) { __label__ = 101; break; } else { __label__ = 102; break; } //@line 578 "fcntlmodule.c"
      case 101: // $bb100
        $0=-1; //@line 578 "fcntlmodule.c"
        __label__ = 139; break; //@line 578 "fcntlmodule.c"
      case 102: // $bb101
        var $154=$d_addr; //@line 579 "fcntlmodule.c"
        var $155=_ins($154, __str65, 21249); //@line 579 "fcntlmodule.c"
        var $156=($155)!=0; //@line 579 "fcntlmodule.c"
        if ($156) { __label__ = 103; break; } else { __label__ = 104; break; } //@line 579 "fcntlmodule.c"
      case 103: // $bb102
        $0=-1; //@line 579 "fcntlmodule.c"
        __label__ = 139; break; //@line 579 "fcntlmodule.c"
      case 104: // $bb103
        var $157=$d_addr; //@line 580 "fcntlmodule.c"
        var $158=_ins($157, __str66, 21264); //@line 580 "fcntlmodule.c"
        var $159=($158)!=0; //@line 580 "fcntlmodule.c"
        if ($159) { __label__ = 105; break; } else { __label__ = 106; break; } //@line 580 "fcntlmodule.c"
      case 105: // $bb104
        $0=-1; //@line 580 "fcntlmodule.c"
        __label__ = 139; break; //@line 580 "fcntlmodule.c"
      case 106: // $bb105
        var $160=$d_addr; //@line 581 "fcntlmodule.c"
        var $161=_ins($160, __str67, 21256); //@line 581 "fcntlmodule.c"
        var $162=($161)!=0; //@line 581 "fcntlmodule.c"
        if ($162) { __label__ = 107; break; } else { __label__ = 108; break; } //@line 581 "fcntlmodule.c"
      case 107: // $bb106
        $0=-1; //@line 581 "fcntlmodule.c"
        __label__ = 139; break; //@line 581 "fcntlmodule.c"
      case 108: // $bb107
        var $163=$d_addr; //@line 582 "fcntlmodule.c"
        var $164=_ins($163, __str68, 21267); //@line 582 "fcntlmodule.c"
        var $165=($164)!=0; //@line 582 "fcntlmodule.c"
        if ($165) { __label__ = 109; break; } else { __label__ = 110; break; } //@line 582 "fcntlmodule.c"
      case 109: // $bb108
        $0=-1; //@line 582 "fcntlmodule.c"
        __label__ = 139; break; //@line 582 "fcntlmodule.c"
      case 110: // $bb109
        var $166=$d_addr; //@line 585 "fcntlmodule.c"
        var $167=_ins($166, __str69, 21268); //@line 585 "fcntlmodule.c"
        var $168=($167)!=0; //@line 585 "fcntlmodule.c"
        if ($168) { __label__ = 111; break; } else { __label__ = 112; break; } //@line 585 "fcntlmodule.c"
      case 111: // $bb110
        $0=-1; //@line 585 "fcntlmodule.c"
        __label__ = 139; break; //@line 585 "fcntlmodule.c"
      case 112: // $bb111
        var $169=$d_addr; //@line 587 "fcntlmodule.c"
        var $170=_ins($169, __str70, 21265); //@line 587 "fcntlmodule.c"
        var $171=($170)!=0; //@line 587 "fcntlmodule.c"
        if ($171) { __label__ = 113; break; } else { __label__ = 114; break; } //@line 587 "fcntlmodule.c"
      case 113: // $bb112
        $0=-1; //@line 587 "fcntlmodule.c"
        __label__ = 139; break; //@line 587 "fcntlmodule.c"
      case 114: // $bb113
        var $172=$d_addr; //@line 588 "fcntlmodule.c"
        var $173=_ins($172, __str71, 21262); //@line 588 "fcntlmodule.c"
        var $174=($173)!=0; //@line 588 "fcntlmodule.c"
        if ($174) { __label__ = 115; break; } else { __label__ = 116; break; } //@line 588 "fcntlmodule.c"
      case 115: // $bb114
        $0=-1; //@line 588 "fcntlmodule.c"
        __label__ = 139; break; //@line 588 "fcntlmodule.c"
      case 116: // $bb115
        var $175=$d_addr; //@line 589 "fcntlmodule.c"
        var $176=_ins($175, __str72, 21269); //@line 589 "fcntlmodule.c"
        var $177=($176)!=0; //@line 589 "fcntlmodule.c"
        if ($177) { __label__ = 117; break; } else { __label__ = 118; break; } //@line 589 "fcntlmodule.c"
      case 117: // $bb116
        $0=-1; //@line 589 "fcntlmodule.c"
        __label__ = 139; break; //@line 589 "fcntlmodule.c"
      case 118: // $bb117
        var $178=$d_addr; //@line 590 "fcntlmodule.c"
        var $179=_ins($178, __str73, 21279); //@line 590 "fcntlmodule.c"
        var $180=($179)!=0; //@line 590 "fcntlmodule.c"
        if ($180) { __label__ = 119; break; } else { __label__ = 120; break; } //@line 590 "fcntlmodule.c"
      case 119: // $bb118
        $0=-1; //@line 590 "fcntlmodule.c"
        __label__ = 139; break; //@line 590 "fcntlmodule.c"
      case 120: // $bb119
        var $181=$d_addr; //@line 591 "fcntlmodule.c"
        var $182=_ins($181, __str74, 21277); //@line 591 "fcntlmodule.c"
        var $183=($182)!=0; //@line 591 "fcntlmodule.c"
        if ($183) { __label__ = 121; break; } else { __label__ = 122; break; } //@line 591 "fcntlmodule.c"
      case 121: // $bb120
        $0=-1; //@line 591 "fcntlmodule.c"
        __label__ = 139; break; //@line 591 "fcntlmodule.c"
      case 122: // $bb121
        var $184=$d_addr; //@line 592 "fcntlmodule.c"
        var $185=_ins($184, __str75, 21278); //@line 592 "fcntlmodule.c"
        var $186=($185)!=0; //@line 592 "fcntlmodule.c"
        if ($186) { __label__ = 123; break; } else { __label__ = 124; break; } //@line 592 "fcntlmodule.c"
      case 123: // $bb122
        $0=-1; //@line 592 "fcntlmodule.c"
        __label__ = 139; break; //@line 592 "fcntlmodule.c"
      case 124: // $bb123
        var $187=$d_addr; //@line 593 "fcntlmodule.c"
        var $188=_ins($187, __str76, 21282); //@line 593 "fcntlmodule.c"
        var $189=($188)!=0; //@line 593 "fcntlmodule.c"
        if ($189) { __label__ = 125; break; } else { __label__ = 126; break; } //@line 593 "fcntlmodule.c"
      case 125: // $bb124
        $0=-1; //@line 593 "fcntlmodule.c"
        __label__ = 139; break; //@line 593 "fcntlmodule.c"
      case 126: // $bb125
        var $190=$d_addr; //@line 594 "fcntlmodule.c"
        var $191=_ins($190, __str77, 21280); //@line 594 "fcntlmodule.c"
        var $192=($191)!=0; //@line 594 "fcntlmodule.c"
        if ($192) { __label__ = 127; break; } else { __label__ = 128; break; } //@line 594 "fcntlmodule.c"
      case 127: // $bb126
        $0=-1; //@line 594 "fcntlmodule.c"
        __label__ = 139; break; //@line 594 "fcntlmodule.c"
      case 128: // $bb127
        var $193=$d_addr; //@line 596 "fcntlmodule.c"
        var $194=_ins($193, __str78, 21281); //@line 596 "fcntlmodule.c"
        var $195=($194)!=0; //@line 596 "fcntlmodule.c"
        if ($195) { __label__ = 129; break; } else { __label__ = 130; break; } //@line 596 "fcntlmodule.c"
      case 129: // $bb128
        $0=-1; //@line 596 "fcntlmodule.c"
        __label__ = 139; break; //@line 596 "fcntlmodule.c"
      case 130: // $bb129
        var $196=$d_addr; //@line 598 "fcntlmodule.c"
        var $197=_ins($196, __str79, 21260); //@line 598 "fcntlmodule.c"
        var $198=($197)!=0; //@line 598 "fcntlmodule.c"
        if ($198) { __label__ = 131; break; } else { __label__ = 132; break; } //@line 598 "fcntlmodule.c"
      case 131: // $bb130
        $0=-1; //@line 598 "fcntlmodule.c"
        __label__ = 139; break; //@line 598 "fcntlmodule.c"
      case 132: // $bb131
        var $199=$d_addr; //@line 599 "fcntlmodule.c"
        var $200=_ins($199, __str80, 21261); //@line 599 "fcntlmodule.c"
        var $201=($200)!=0; //@line 599 "fcntlmodule.c"
        if ($201) { __label__ = 133; break; } else { __label__ = 134; break; } //@line 599 "fcntlmodule.c"
      case 133: // $bb132
        $0=-1; //@line 599 "fcntlmodule.c"
        __label__ = 139; break; //@line 599 "fcntlmodule.c"
      case 134: // $bb133
        var $202=$d_addr; //@line 600 "fcntlmodule.c"
        var $203=_ins($202, __str81, 21270); //@line 600 "fcntlmodule.c"
        var $204=($203)!=0; //@line 600 "fcntlmodule.c"
        if ($204) { __label__ = 135; break; } else { __label__ = 136; break; } //@line 600 "fcntlmodule.c"
      case 135: // $bb134
        $0=-1; //@line 600 "fcntlmodule.c"
        __label__ = 139; break; //@line 600 "fcntlmodule.c"
      case 136: // $bb135
        var $205=$d_addr; //@line 601 "fcntlmodule.c"
        var $206=_ins($205, __str82, 21271); //@line 601 "fcntlmodule.c"
        var $207=($206)!=0; //@line 601 "fcntlmodule.c"
        if ($207) { __label__ = 137; break; } else { __label__ = 138; break; } //@line 601 "fcntlmodule.c"
      case 137: // $bb136
        $0=-1; //@line 601 "fcntlmodule.c"
        __label__ = 139; break; //@line 601 "fcntlmodule.c"
      case 138: // $bb137
        $0=0; //@line 604 "fcntlmodule.c"
        __label__ = 139; break; //@line 604 "fcntlmodule.c"
      case 139: // $bb138
        ;
        return;
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initfcntl() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $d;
        var $0=_Py_InitModule4(__str10, _fcntl_methods, _module_doc, 0, 1013); //@line 613 "fcntlmodule.c"
        $m=$0; //@line 613 "fcntlmodule.c"
        var $1=$m; //@line 614 "fcntlmodule.c"
        var $2=($1)==0; //@line 614 "fcntlmodule.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 614 "fcntlmodule.c"
      case 1: // $bb
        var $3=$m; //@line 618 "fcntlmodule.c"
        var $4=_PyModule_GetDict($3); //@line 618 "fcntlmodule.c"
        $d=$4; //@line 618 "fcntlmodule.c"
        var $5=$d; //@line 619 "fcntlmodule.c"
        _all_ins($5); //@line 619 "fcntlmodule.c"
        __label__ = 2; break; //@line 619 "fcntlmodule.c"
      case 2: // $return
        ;
        return; //@line 615 "fcntlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initfcntl"] = _initfcntl;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_conv_descriptor,0,_fcntl_fcntl,0,_fcntl_ioctl,0,_fcntl_flock,0,_fcntl_lockf,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([79,38,105,115,35,58,102,99,110,116,108,0] /* O&is#:fcntl\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([102,99,110,116,108,32,115,116,114,105,110,103,32,97,114,103,32,116,111,111,32,108,111,110,103,0] /* fcntl string arg too */, "i8", ALLOC_NORMAL);
__str2=allocate([79,38,105,124,108,59,102,99,110,116,108,32,114,101,113,117,105,114,101,115,32,97,32,102,105,108,101,32,111,114,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,44,32,97,110,32,105,110,116,101,103,101,114,32,97,110,100,32,111,112,116,105,111,110,97,108,108,121,32,97,32,116,104,105,114,100,32,105,110,116,101,103,101,114,32,111,114,32,97,32,115,116,114,105,110,103,0] /* O&i|l;fcntl requires */, "i8", ALLOC_NORMAL);
_fcntl_doc=allocate([102,99,110,116,108,40,102,100,44,32,111,112,116,44,32,91,97,114,103,93,41,10,10,80,101,114,102,111,114,109,32,116,104,101,32,114,101,113,117,101,115,116,101,100,32,111,112,101,114,97,116,105,111,110,32,111,110,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,102,100,46,32,32,84,104,101,32,111,112,101,114,97,116,105,111,110,10,105,115,32,100,101,102,105,110,101,100,32,98,121,32,111,112,32,97,110,100,32,105,115,32,111,112,101,114,97,116,105,110,103,32,115,121,115,116,101,109,32,100,101,112,101,110,100,101,110,116,46,32,32,84,104,101,115,101,32,99,111,110,115,116,97,110,116,115,32,97,114,101,10,97,118,97,105,108,97,98,108,101,32,102,114,111,109,32,116,104,101,32,102,99,110,116,108,32,109,111,100,117,108,101,46,32,32,84,104,101,32,97,114,103,117,109,101,110,116,32,97,114,103,32,105,115,32,111,112,116,105,111,110,97,108,44,32,97,110,100,10,100,101,102,97,117,108,116,115,32,116,111,32,48,59,32,105,116,32,109,97,121,32,98,101,32,97,110,32,105,110,116,32,111,114,32,97,32,115,116,114,105,110,103,46,32,32,73,102,32,97,114,103,32,105,115,32,103,105,118,101,110,32,97,115,32,97,32,115,116,114,105,110,103,44,10,116,104,101,32,114,101,116,117,114,110,32,118,97,108,117,101,32,111,102,32,102,99,110,116,108,32,105,115,32,97,32,115,116,114,105,110,103,32,111,102,32,116,104,97,116,32,108,101,110,103,116,104,44,32,99,111,110,116,97,105,110,105,110,103,32,116,104,101,10,114,101,115,117,108,116,105,110,103,32,118,97,108,117,101,32,112,117,116,32,105,110,32,116,104,101,32,97,114,103,32,98,117,102,102,101,114,32,98,121,32,116,104,101,32,111,112,101,114,97,116,105,110,103,32,115,121,115,116,101,109,46,32,32,84,104,101,32,108,101,110,103,116,104,10,111,102,32,116,104,101,32,97,114,103,32,115,116,114,105,110,103,32,105,115,32,110,111,116,32,97,108,108,111,119,101,100,32,116,111,32,101,120,99,101,101,100,32,49,48,50,52,32,98,121,116,101,115,46,32,32,73,102,32,116,104,101,32,97,114,103,32,103,105,118,101,110,10,105,115,32,97,110,32,105,110,116,101,103,101,114,32,111,114,32,105,102,32,110,111,110,101,32,105,115,32,115,112,101,99,105,102,105,101,100,44,32,116,104,101,32,114,101,115,117,108,116,32,118,97,108,117,101,32,105,115,32,97,110,32,105,110,116,101,103,101,114,10,99,111,114,114,101,115,112,111,110,100,105,110,103,32,116,111,32,116,104,101,32,114,101,116,117,114,110,32,118,97,108,117,101,32,111,102,32,116,104,101,32,102,99,110,116,108,32,99,97,108,108,32,105,110,32,116,104,101,32,67,32,99,111,100,101,46,0] /* fcntl(fd, opt, [arg] */, "i8", ALLOC_NORMAL);
__str3=allocate([79,38,73,119,35,124,105,58,105,111,99,116,108,0] /* O&Iw#|i:ioctl\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([105,111,99,116,108,32,115,116,114,105,110,103,32,97,114,103,32,116,111,111,32,108,111,110,103,0] /* ioctl string arg too */, "i8", ALLOC_NORMAL);
__str5=allocate([79,38,73,115,35,58,105,111,99,116,108,0] /* O&Is#:ioctl\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([79,38,73,124,105,59,105,111,99,116,108,32,114,101,113,117,105,114,101,115,32,97,32,102,105,108,101,32,111,114,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,44,32,97,110,32,105,110,116,101,103,101,114,32,97,110,100,32,111,112,116,105,111,110,97,108,108,121,32,97,110,32,105,110,116,101,103,101,114,32,111,114,32,98,117,102,102,101,114,32,97,114,103,117,109,101,110,116,0] /* O&I|i;ioctl requires */, "i8", ALLOC_NORMAL);
_ioctl_doc=allocate([105,111,99,116,108,40,102,100,44,32,111,112,116,91,44,32,97,114,103,91,44,32,109,117,116,97,116,101,95,102,108,97,103,93,93,41,10,10,80,101,114,102,111,114,109,32,116,104,101,32,114,101,113,117,101,115,116,101,100,32,111,112,101,114,97,116,105,111,110,32,111,110,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,102,100,46,32,32,84,104,101,32,111,112,101,114,97,116,105,111,110,32,105,115,10,100,101,102,105,110,101,100,32,98,121,32,111,112,116,32,97,110,100,32,105,115,32,111,112,101,114,97,116,105,110,103,32,115,121,115,116,101,109,32,100,101,112,101,110,100,101,110,116,46,32,32,84,121,112,105,99,97,108,108,121,32,116,104,101,115,101,32,99,111,100,101,115,32,97,114,101,10,114,101,116,114,105,101,118,101,100,32,102,114,111,109,32,116,104,101,32,102,99,110,116,108,32,111,114,32,116,101,114,109,105,111,115,32,108,105,98,114,97,114,121,32,109,111,100,117,108,101,115,46,10,10,84,104,101,32,97,114,103,117,109,101,110,116,32,97,114,103,32,105,115,32,111,112,116,105,111,110,97,108,44,32,97,110,100,32,100,101,102,97,117,108,116,115,32,116,111,32,48,59,32,105,116,32,109,97,121,32,98,101,32,97,110,32,105,110,116,32,111,114,32,97,10,98,117,102,102,101,114,32,99,111,110,116,97,105,110,105,110,103,32,99,104,97,114,97,99,116,101,114,32,100,97,116,97,32,40,109,111,115,116,32,108,105,107,101,108,121,32,97,32,115,116,114,105,110,103,32,111,114,32,97,110,32,97,114,114,97,121,41,46,32,10,10,73,102,32,116,104,101,32,97,114,103,117,109,101,110,116,32,105,115,32,97,32,109,117,116,97,98,108,101,32,98,117,102,102,101,114,32,40,115,117,99,104,32,97,115,32,97,110,32,97,114,114,97,121,41,32,97,110,100,32,105,102,32,116,104,101,10,109,117,116,97,116,101,95,102,108,97,103,32,97,114,103,117,109,101,110,116,32,40,119,104,105,99,104,32,105,115,32,111,110,108,121,32,97,108,108,111,119,101,100,32,105,110,32,116,104,105,115,32,99,97,115,101,41,32,105,115,32,116,114,117,101,32,116,104,101,110,32,116,104,101,10,98,117,102,102,101,114,32,105,115,32,40,105,110,32,101,102,102,101,99,116,41,32,112,97,115,115,101,100,32,116,111,32,116,104,101,32,111,112,101,114,97,116,105,110,103,32,115,121,115,116,101,109,32,97,110,100,32,99,104,97,110,103,101,115,32,109,97,100,101,32,98,121,10,116,104,101,32,79,83,32,119,105,108,108,32,98,101,32,114,101,102,108,101,99,116,101,100,32,105,110,32,116,104,101,32,99,111,110,116,101,110,116,115,32,111,102,32,116,104,101,32,98,117,102,102,101,114,32,97,102,116,101,114,32,116,104,101,32,99,97,108,108,32,104,97,115,10,114,101,116,117,114,110,101,100,46,32,32,84,104,101,32,114,101,116,117,114,110,32,118,97,108,117,101,32,105,115,32,116,104,101,32,105,110,116,101,103,101,114,32,114,101,116,117,114,110,101,100,32,98,121,32,116,104,101,32,105,111,99,116,108,32,115,121,115,116,101,109,10,99,97,108,108,46,10,10,73,102,32,116,104,101,32,97,114,103,117,109,101,110,116,32,105,115,32,97,32,109,117,116,97,98,108,101,32,98,117,102,102,101,114,32,97,110,100,32,116,104,101,32,109,117,116,97,98,108,101,95,102,108,97,103,32,97,114,103,117,109,101,110,116,32,105,115,32,110,111,116,10,112,97,115,115,101,100,32,111,114,32,105,115,32,102,97,108,115,101,44,32,116,104,101,32,98,101,104,97,118,105,111,114,32,105,115,32,97,115,32,105,102,32,97,32,115,116,114,105,110,103,32,104,97,100,32,98,101,101,110,32,112,97,115,115,101,100,46,32,32,84,104,105,115,10,98,101,104,97,118,105,111,114,32,119,105,108,108,32,99,104,97,110,103,101,32,105,110,32,102,117,116,117,114,101,32,114,101,108,101,97,115,101,115,32,111,102,32,80,121,116,104,111,110,46,10,10,73,102,32,116,104,101,32,97,114,103,117,109,101,110,116,32,105,115,32,97,110,32,105,109,109,117,116,97,98,108,101,32,98,117,102,102,101,114,32,40,109,111,115,116,32,108,105,107,101,108,121,32,97,32,115,116,114,105,110,103,41,32,116,104,101,110,32,97,32,99,111,112,121,10,111,102,32,116,104,101,32,98,117,102,102,101,114,32,105,115,32,112,97,115,115,101,100,32,116,111,32,116,104,101,32,111,112,101,114,97,116,105,110,103,32,115,121,115,116,101,109,32,97,110,100,32,116,104,101,32,114,101,116,117,114,110,32,118,97,108,117,101,32,105,115,32,97,10,115,116,114,105,110,103,32,111,102,32,116,104,101,32,115,97,109,101,32,108,101,110,103,116,104,32,99,111,110,116,97,105,110,105,110,103,32,119,104,97,116,101,118,101,114,32,116,104,101,32,111,112,101,114,97,116,105,110,103,32,115,121,115,116,101,109,32,112,117,116,32,105,110,10,116,104,101,32,98,117,102,102,101,114,46,32,32,84,104,101,32,108,101,110,103,116,104,32,111,102,32,116,104,101,32,97,114,103,32,98,117,102,102,101,114,32,105,110,32,116,104,105,115,32,99,97,115,101,32,105,115,32,110,111,116,32,97,108,108,111,119,101,100,32,116,111,10,101,120,99,101,101,100,32,49,48,50,52,32,98,121,116,101,115,46,10,10,73,102,32,116,104,101,32,97,114,103,32,103,105,118,101,110,32,105,115,32,97,110,32,105,110,116,101,103,101,114,32,111,114,32,105,102,32,110,111,110,101,32,105,115,32,115,112,101,99,105,102,105,101,100,44,32,116,104,101,32,114,101,115,117,108,116,32,118,97,108,117,101,32,105,115,10,97,110,32,105,110,116,101,103,101,114,32,99,111,114,114,101,115,112,111,110,100,105,110,103,32,116,111,32,116,104,101,32,114,101,116,117,114,110,32,118,97,108,117,101,32,111,102,32,116,104,101,32,105,111,99,116,108,32,99,97,108,108,32,105,110,32,116,104,101,32,67,10,99,111,100,101,46,0] /* ioctl(fd, opt[, arg[ */, "i8", ALLOC_NORMAL);
__str7=allocate([79,38,105,58,102,108,111,99,107,0] /* O&i:flock\00 */, "i8", ALLOC_NORMAL);
_flock_doc=allocate([102,108,111,99,107,40,102,100,44,32,111,112,101,114,97,116,105,111,110,41,10,10,80,101,114,102,111,114,109,32,116,104,101,32,108,111,99,107,32,111,112,101,114,97,116,105,111,110,32,111,112,32,111,110,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,102,100,46,32,32,83,101,101,32,116,104,101,32,85,110,105,120,32,10,109,97,110,117,97,108,32,112,97,103,101,32,102,111,114,32,102,108,111,99,107,40,51,41,32,102,111,114,32,100,101,116,97,105,108,115,46,32,32,40,79,110,32,115,111,109,101,32,115,121,115,116,101,109,115,44,32,116,104,105,115,32,102,117,110,99,116,105,111,110,32,105,115,10,101,109,117,108,97,116,101,100,32,117,115,105,110,103,32,102,99,110,116,108,40,41,46,41,0] /* flock(fd, operation) */, "i8", ALLOC_NORMAL);
__str8=allocate([79,38,105,124,79,79,105,58,108,111,99,107,102,0] /* O&i|OOi:lockf\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([117,110,114,101,99,111,103,110,105,122,101,100,32,108,111,99,107,102,32,97,114,103,117,109,101,110,116,0] /* unrecognized lockf a */, "i8", ALLOC_NORMAL);
_lockf_doc=allocate([108,111,99,107,102,32,40,102,100,44,32,111,112,101,114,97,116,105,111,110,44,32,108,101,110,103,116,104,61,48,44,32,115,116,97,114,116,61,48,44,32,119,104,101,110,99,101,61,48,41,10,10,84,104,105,115,32,105,115,32,101,115,115,101,110,116,105,97,108,108,121,32,97,32,119,114,97,112,112,101,114,32,97,114,111,117,110,100,32,116,104,101,32,102,99,110,116,108,40,41,32,108,111,99,107,105,110,103,32,99,97,108,108,115,46,32,32,102,100,32,105,115,32,116,104,101,10,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,111,102,32,116,104,101,32,102,105,108,101,32,116,111,32,108,111,99,107,32,111,114,32,117,110,108,111,99,107,44,32,97,110,100,32,111,112,101,114,97,116,105,111,110,32,105,115,32,111,110,101,32,111,102,32,116,104,101,10,102,111,108,108,111,119,105,110,103,32,118,97,108,117,101,115,58,10,10,32,32,32,32,76,79,67,75,95,85,78,32,45,32,117,110,108,111,99,107,10,32,32,32,32,76,79,67,75,95,83,72,32,45,32,97,99,113,117,105,114,101,32,97,32,115,104,97,114,101,100,32,108,111,99,107,10,32,32,32,32,76,79,67,75,95,69,88,32,45,32,97,99,113,117,105,114,101,32,97,110,32,101,120,99,108,117,115,105,118,101,32,108,111,99,107,10,10,87,104,101,110,32,111,112,101,114,97,116,105,111,110,32,105,115,32,76,79,67,75,95,83,72,32,111,114,32,76,79,67,75,95,69,88,44,32,105,116,32,99,97,110,32,97,108,115,111,32,98,101,32,98,105,116,119,105,115,101,32,79,82,101,100,32,119,105,116,104,10,76,79,67,75,95,78,66,32,116,111,32,97,118,111,105,100,32,98,108,111,99,107,105,110,103,32,111,110,32,108,111,99,107,32,97,99,113,117,105,115,105,116,105,111,110,46,32,32,73,102,32,76,79,67,75,95,78,66,32,105,115,32,117,115,101,100,32,97,110,100,32,116,104,101,10,108,111,99,107,32,99,97,110,110,111,116,32,98,101,32,97,99,113,117,105,114,101,100,44,32,97,110,32,73,79,69,114,114,111,114,32,119,105,108,108,32,98,101,32,114,97,105,115,101,100,32,97,110,100,32,116,104,101,32,101,120,99,101,112,116,105,111,110,32,119,105,108,108,10,104,97,118,101,32,97,110,32,101,114,114,110,111,32,97,116,116,114,105,98,117,116,101,32,115,101,116,32,116,111,32,69,65,67,67,69,83,32,111,114,32,69,65,71,65,73,78,32,40,100,101,112,101,110,100,105,110,103,32,111,110,32,116,104,101,32,111,112,101,114,97,116,105,110,103,10,115,121,115,116,101,109,32,45,45,32,102,111,114,32,112,111,114,116,97,98,105,108,105,116,121,44,32,99,104,101,99,107,32,102,111,114,32,101,105,116,104,101,114,32,118,97,108,117,101,41,46,10,10,108,101,110,103,116,104,32,105,115,32,116,104,101,32,110,117,109,98,101,114,32,111,102,32,98,121,116,101,115,32,116,111,32,108,111,99,107,44,32,119,105,116,104,32,116,104,101,32,100,101,102,97,117,108,116,32,109,101,97,110,105,110,103,32,116,111,32,108,111,99,107,32,116,111,10,69,79,70,46,32,32,115,116,97,114,116,32,105,115,32,116,104,101,32,98,121,116,101,32,111,102,102,115,101,116,44,32,114,101,108,97,116,105,118,101,32,116,111,32,119,104,101,110,99,101,44,32,116,111,32,116,104,97,116,32,116,104,101,32,108,111,99,107,10,115,116,97,114,116,115,46,32,32,119,104,101,110,99,101,32,105,115,32,97,115,32,119,105,116,104,32,102,105,108,101,111,98,106,46,115,101,101,107,40,41,44,32,115,112,101,99,105,102,105,99,97,108,108,121,58,10,10,32,32,32,32,48,32,45,32,114,101,108,97,116,105,118,101,32,116,111,32,116,104,101,32,115,116,97,114,116,32,111,102,32,116,104,101,32,102,105,108,101,32,40,83,69,69,75,95,83,69,84,41,10,32,32,32,32,49,32,45,32,114,101,108,97,116,105,118,101,32,116,111,32,116,104,101,32,99,117,114,114,101,110,116,32,98,117,102,102,101,114,32,112,111,115,105,116,105,111,110,32,40,83,69,69,75,95,67,85,82,41,10,32,32,32,32,50,32,45,32,114,101,108,97,116,105,118,101,32,116,111,32,116,104,101,32,101,110,100,32,111,102,32,116,104,101,32,102,105,108,101,32,40,83,69,69,75,95,69,78,68,41,0] /* lockf (fd, operation */, "i8", ALLOC_NORMAL);
__str10=allocate([102,99,110,116,108,0] /* fcntl\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([105,111,99,116,108,0] /* ioctl\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([102,108,111,99,107,0] /* flock\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([108,111,99,107,102,0] /* lockf\00 */, "i8", ALLOC_NORMAL);
_fcntl_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_module_doc=allocate([84,104,105,115,32,109,111,100,117,108,101,32,112,101,114,102,111,114,109,115,32,102,105,108,101,32,99,111,110,116,114,111,108,32,97,110,100,32,73,47,79,32,99,111,110,116,114,111,108,32,111,110,32,102,105,108,101,32,10,100,101,115,99,114,105,112,116,111,114,115,46,32,32,73,116,32,105,115,32,97,110,32,105,110,116,101,114,102,97,99,101,32,116,111,32,116,104,101,32,102,99,110,116,108,40,41,32,97,110,100,32,105,111,99,116,108,40,41,32,85,110,105,120,10,114,111,117,116,105,110,101,115,46,32,32,70,105,108,101,32,100,101,115,99,114,105,112,116,111,114,115,32,99,97,110,32,98,101,32,111,98,116,97,105,110,101,100,32,119,105,116,104,32,116,104,101,32,102,105,108,101,110,111,40,41,32,109,101,116,104,111,100,32,111,102,10,97,32,102,105,108,101,32,111,114,32,115,111,99,107,101,116,32,111,98,106,101,99,116,46,0] /* This module performs */, "i8", ALLOC_NORMAL);
__str14=allocate([76,79,67,75,95,83,72,0] /* LOCK_SH\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([76,79,67,75,95,69,88,0] /* LOCK_EX\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([76,79,67,75,95,78,66,0] /* LOCK_NB\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([76,79,67,75,95,85,78,0] /* LOCK_UN\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([76,79,67,75,95,77,65,78,68,0] /* LOCK_MAND\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([76,79,67,75,95,82,69,65,68,0] /* LOCK_READ\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([76,79,67,75,95,87,82,73,84,69,0] /* LOCK_WRITE\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([76,79,67,75,95,82,87,0] /* LOCK_RW\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([70,95,68,85,80,70,68,0] /* F_DUPFD\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([70,95,71,69,84,70,68,0] /* F_GETFD\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([70,95,83,69,84,70,68,0] /* F_SETFD\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([70,95,71,69,84,70,76,0] /* F_GETFL\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([70,95,83,69,84,70,76,0] /* F_SETFL\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([70,95,71,69,84,76,75,0] /* F_GETLK\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([70,95,83,69,84,76,75,0] /* F_SETLK\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([70,95,83,69,84,76,75,87,0] /* F_SETLKW\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([70,95,71,69,84,79,87,78,0] /* F_GETOWN\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([70,95,83,69,84,79,87,78,0] /* F_SETOWN\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([70,95,71,69,84,83,73,71,0] /* F_GETSIG\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([70,95,83,69,84,83,73,71,0] /* F_SETSIG\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([70,95,82,68,76,67,75,0] /* F_RDLCK\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([70,95,87,82,76,67,75,0] /* F_WRLCK\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([70,95,85,78,76,67,75,0] /* F_UNLCK\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([70,95,71,69,84,76,75,54,52,0] /* F_GETLK64\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([70,95,83,69,84,76,75,54,52,0] /* F_SETLK64\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([70,95,83,69,84,76,75,87,54,52,0] /* F_SETLKW64\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([70,65,83,89,78,67,0] /* FASYNC\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([70,95,83,69,84,76,69,65,83,69,0] /* F_SETLEASE\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([70,95,71,69,84,76,69,65,83,69,0] /* F_GETLEASE\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([70,95,78,79,84,73,70,89,0] /* F_NOTIFY\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([70,95,69,88,76,67,75,0] /* F_EXLCK\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([70,95,83,72,76,67,75,0] /* F_SHLCK\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([70,68,95,67,76,79,69,88,69,67,0] /* FD_CLOEXEC\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([68,78,95,65,67,67,69,83,83,0] /* DN_ACCESS\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([68,78,95,77,79,68,73,70,89,0] /* DN_MODIFY\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([68,78,95,67,82,69,65,84,69,0] /* DN_CREATE\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([68,78,95,68,69,76,69,84,69,0] /* DN_DELETE\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([68,78,95,82,69,78,65,77,69,0] /* DN_RENAME\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([68,78,95,65,84,84,82,73,66,0] /* DN_ATTRIB\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([68,78,95,77,85,76,84,73,83,72,79,84,0] /* DN_MULTISHOT\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([73,95,80,85,83,72,0] /* I_PUSH\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([73,95,80,79,80,0] /* I_POP\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([73,95,76,79,79,75,0] /* I_LOOK\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([73,95,70,76,85,83,72,0] /* I_FLUSH\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([73,95,70,76,85,83,72,66,65,78,68,0] /* I_FLUSHBAND\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([73,95,83,69,84,83,73,71,0] /* I_SETSIG\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([73,95,71,69,84,83,73,71,0] /* I_GETSIG\00 */, "i8", ALLOC_NORMAL);
__str61=allocate([73,95,70,73,78,68,0] /* I_FIND\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([73,95,80,69,69,75,0] /* I_PEEK\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([73,95,83,82,68,79,80,84,0] /* I_SRDOPT\00 */, "i8", ALLOC_NORMAL);
__str64=allocate([73,95,71,82,68,79,80,84,0] /* I_GRDOPT\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([73,95,78,82,69,65,68,0] /* I_NREAD\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([73,95,70,68,73,78,83,69,82,84,0] /* I_FDINSERT\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([73,95,83,84,82,0] /* I_STR\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([73,95,83,87,82,79,80,84,0] /* I_SWROPT\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([73,95,71,87,82,79,80,84,0] /* I_GWROPT\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([73,95,83,69,78,68,70,68,0] /* I_SENDFD\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([73,95,82,69,67,86,70,68,0] /* I_RECVFD\00 */, "i8", ALLOC_NORMAL);
__str72=allocate([73,95,76,73,83,84,0] /* I_LIST\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([73,95,65,84,77,65,82,75,0] /* I_ATMARK\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([73,95,67,75,66,65,78,68,0] /* I_CKBAND\00 */, "i8", ALLOC_NORMAL);
__str75=allocate([73,95,71,69,84,66,65,78,68,0] /* I_GETBAND\00 */, "i8", ALLOC_NORMAL);
__str76=allocate([73,95,67,65,78,80,85,84,0] /* I_CANPUT\00 */, "i8", ALLOC_NORMAL);
__str77=allocate([73,95,83,69,84,67,76,84,73,77,69,0] /* I_SETCLTIME\00 */, "i8", ALLOC_NORMAL);
__str78=allocate([73,95,71,69,84,67,76,84,73,77,69,0] /* I_GETCLTIME\00 */, "i8", ALLOC_NORMAL);
__str79=allocate([73,95,76,73,78,75,0] /* I_LINK\00 */, "i8", ALLOC_NORMAL);
__str80=allocate([73,95,85,78,76,73,78,75,0] /* I_UNLINK\00 */, "i8", ALLOC_NORMAL);
__str81=allocate([73,95,80,76,73,78,75,0] /* I_PLINK\00 */, "i8", ALLOC_NORMAL);
__str82=allocate([73,95,80,85,78,76,73,78,75,0] /* I_PUNLINK\00 */, "i8", ALLOC_NORMAL);
HEAP[_fcntl_methods]=__str10;
HEAP[_fcntl_methods+4]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_fcntl_methods+12]=_fcntl_doc;
HEAP[_fcntl_methods+16]=__str11;
HEAP[_fcntl_methods+20]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_fcntl_methods+28]=_ioctl_doc;
HEAP[_fcntl_methods+32]=__str12;
HEAP[_fcntl_methods+36]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_fcntl_methods+44]=_flock_doc;
HEAP[_fcntl_methods+48]=__str13;
HEAP[_fcntl_methods+52]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_fcntl_methods+60]=_lockf_doc;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

